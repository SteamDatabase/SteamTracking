/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2667],
  {
    45772: () => {},
    74763: () => {},
    83478: (e, t, n) => {
      "use strict";
      var r,
        o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = n(90626),
        s = (r = i) && r.__esModule ? r : { default: r };
      t.A = function (e) {
        var t = e.fill,
          n = void 0 === t ? "currentColor" : t,
          r = e.width,
          i = void 0 === r ? 24 : r,
          l = e.height,
          a = void 0 === l ? 24 : l,
          c = e.style,
          h = void 0 === c ? {} : c,
          p = (function (e, t) {
            var n = {};
            for (var r in e)
              t.indexOf(r) >= 0 ||
                (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
            return n;
          })(e, ["fill", "width", "height", "style"]);
        return s.default.createElement(
          "svg",
          o(
            {
              viewBox: "0 0 24 24",
              style: o({ fill: n, width: i, height: a }, h),
            },
            p,
          ),
          s.default.createElement("path", {
            d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",
          }),
        );
      };
    },
    50283: (e, t, n) => {
      "use strict";
      var r,
        o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = n(90626),
        s = (r = i) && r.__esModule ? r : { default: r };
      t.A = function (e) {
        var t = e.fill,
          n = void 0 === t ? "currentColor" : t,
          r = e.width,
          i = void 0 === r ? 24 : r,
          l = e.height,
          a = void 0 === l ? 24 : l,
          c = e.style,
          h = void 0 === c ? {} : c,
          p = (function (e, t) {
            var n = {};
            for (var r in e)
              t.indexOf(r) >= 0 ||
                (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
            return n;
          })(e, ["fill", "width", "height", "style"]);
        return s.default.createElement(
          "svg",
          o(
            {
              viewBox: "0 0 24 24",
              style: o({ fill: n, width: i, height: a }, h),
            },
            p,
          ),
          s.default.createElement("path", {
            d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",
          }),
        );
      };
    },
    30878: (e, t, n) => {
      var r = n(73904)(n(26467), "DataView");
      e.exports = r;
    },
    72987: (e, t, n) => {
      var r = n(98138),
        o = n(85596),
        i = n(82095),
        s = n(38163),
        l = n(86955);
      function a(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (a.prototype.clear = r),
        (a.prototype.delete = o),
        (a.prototype.get = i),
        (a.prototype.has = s),
        (a.prototype.set = l),
        (e.exports = a);
    },
    63937: (e, t, n) => {
      var r = n(4316),
        o = n(63770),
        i = n(34869),
        s = n(17977),
        l = n(52209);
      function a(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (a.prototype.clear = r),
        (a.prototype.delete = o),
        (a.prototype.get = i),
        (a.prototype.has = s),
        (a.prototype.set = l),
        (e.exports = a);
    },
    44925: (e, t, n) => {
      var r = n(73904)(n(26467), "Map");
      e.exports = r;
    },
    44023: (e, t, n) => {
      var r = n(14366),
        o = n(60856),
        i = n(29435),
        s = n(12375),
        l = n(55103);
      function a(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (a.prototype.clear = r),
        (a.prototype.delete = o),
        (a.prototype.get = i),
        (a.prototype.has = s),
        (a.prototype.set = l),
        (e.exports = a);
    },
    97438: (e, t, n) => {
      var r = n(73904)(n(26467), "Promise");
      e.exports = r;
    },
    64507: (e, t, n) => {
      var r = n(73904)(n(26467), "Set");
      e.exports = r;
    },
    99177: (e, t, n) => {
      var r = n(44023),
        o = n(98726),
        i = n(12961);
      function s(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.__data__ = new r(); ++t < n; ) this.add(e[t]);
      }
      (s.prototype.add = s.prototype.push = o),
        (s.prototype.has = i),
        (e.exports = s);
    },
    56643: (e, t, n) => {
      var r = n(63937),
        o = n(2242),
        i = n(91668),
        s = n(41159),
        l = n(20411),
        a = n(11427);
      function c(e) {
        var t = (this.__data__ = new r(e));
        this.size = t.size;
      }
      (c.prototype.clear = o),
        (c.prototype.delete = i),
        (c.prototype.get = s),
        (c.prototype.has = l),
        (c.prototype.set = a),
        (e.exports = c);
    },
    38039: (e, t, n) => {
      var r = n(26467).Symbol;
      e.exports = r;
    },
    15490: (e, t, n) => {
      var r = n(26467).Uint8Array;
      e.exports = r;
    },
    47285: (e, t, n) => {
      var r = n(73904)(n(26467), "WeakMap");
      e.exports = r;
    },
    76155: (e) => {
      e.exports = function (e, t) {
        for (
          var n = -1, r = null == e ? 0 : e.length;
          ++n < r && !1 !== t(e[n], n, e);
        );
        return e;
      };
    },
    2152: (e) => {
      e.exports = function (e, t) {
        for (
          var n = -1, r = null == e ? 0 : e.length, o = 0, i = [];
          ++n < r;
        ) {
          var s = e[n];
          t(s, n, e) && (i[o++] = s);
        }
        return i;
      };
    },
    48353: (e, t, n) => {
      var r = n(10098),
        o = n(69214),
        i = n(83491),
        s = n(33934),
        l = n(62439),
        a = n(8053),
        c = Object.prototype.hasOwnProperty;
      e.exports = function (e, t) {
        var n = i(e),
          h = !n && o(e),
          p = !n && !h && s(e),
          u = !n && !h && !p && a(e),
          d = n || h || p || u,
          f = d ? r(e.length, String) : [],
          m = f.length;
        for (var g in e)
          (!t && !c.call(e, g)) ||
            (d &&
              ("length" == g ||
                (p && ("offset" == g || "parent" == g)) ||
                (u &&
                  ("buffer" == g || "byteLength" == g || "byteOffset" == g)) ||
                l(g, m))) ||
            f.push(g);
        return f;
      };
    },
    27742: (e) => {
      e.exports = function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r; )
          o[n] = t(e[n], n, e);
        return o;
      };
    },
    49666: (e) => {
      e.exports = function (e, t) {
        for (var n = -1, r = t.length, o = e.length; ++n < r; ) e[o + n] = t[n];
        return e;
      };
    },
    17214: (e) => {
      e.exports = function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
          if (t(e[n], n, e)) return !0;
        return !1;
      };
    },
    24261: (e, t, n) => {
      var r = n(51458),
        o = n(31722),
        i = Object.prototype.hasOwnProperty;
      e.exports = function (e, t, n) {
        var s = e[t];
        (i.call(e, t) && o(s, n) && (void 0 !== n || t in e)) || r(e, t, n);
      };
    },
    85775: (e, t, n) => {
      var r = n(31722);
      e.exports = function (e, t) {
        for (var n = e.length; n--; ) if (r(e[n][0], t)) return n;
        return -1;
      };
    },
    41199: (e, t, n) => {
      var r = n(41905),
        o = n(33640);
      e.exports = function (e, t) {
        return e && r(t, o(t), e);
      };
    },
    54900: (e, t, n) => {
      var r = n(41905),
        o = n(73591);
      e.exports = function (e, t) {
        return e && r(t, o(t), e);
      };
    },
    51458: (e, t, n) => {
      var r = n(47489);
      e.exports = function (e, t, n) {
        "__proto__" == t && r
          ? r(e, t, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (e[t] = n);
      };
    },
    40289: (e, t, n) => {
      var r = n(56643),
        o = n(76155),
        i = n(24261),
        s = n(41199),
        l = n(54900),
        a = n(71236),
        c = n(10149),
        h = n(31285),
        p = n(55366),
        u = n(68240),
        d = n(68767),
        f = n(88599),
        m = n(6247),
        g = n(85353),
        b = n(41927),
        y = n(83491),
        v = n(33934),
        w = n(82052),
        x = n(97827),
        S = n(64406),
        k = n(33640),
        C = n(73591),
        O = "[object Arguments]",
        M = "[object Function]",
        E = "[object Object]",
        A = {};
      (A[O] =
        A["[object Array]"] =
        A["[object ArrayBuffer]"] =
        A["[object DataView]"] =
        A["[object Boolean]"] =
        A["[object Date]"] =
        A["[object Float32Array]"] =
        A["[object Float64Array]"] =
        A["[object Int8Array]"] =
        A["[object Int16Array]"] =
        A["[object Int32Array]"] =
        A["[object Map]"] =
        A["[object Number]"] =
        A[E] =
        A["[object RegExp]"] =
        A["[object Set]"] =
        A["[object String]"] =
        A["[object Symbol]"] =
        A["[object Uint8Array]"] =
        A["[object Uint8ClampedArray]"] =
        A["[object Uint16Array]"] =
        A["[object Uint32Array]"] =
          !0),
        (A["[object Error]"] = A[M] = A["[object WeakMap]"] = !1),
        (e.exports = function e(t, n, N, T, _, D) {
          var R,
            j = 1 & n,
            F = 2 & n,
            z = 4 & n;
          if ((N && (R = _ ? N(t, T, _, D) : N(t)), void 0 !== R)) return R;
          if (!x(t)) return t;
          var B = y(t);
          if (B) {
            if (((R = m(t)), !j)) return c(t, R);
          } else {
            var P = f(t),
              I = P == M || "[object GeneratorFunction]" == P;
            if (v(t)) return a(t, j);
            if (P == E || P == O || (I && !_)) {
              if (((R = F || I ? {} : b(t)), !j))
                return F ? p(t, l(R, t)) : h(t, s(R, t));
            } else {
              if (!A[P]) return _ ? t : {};
              R = g(t, P, j);
            }
          }
          D || (D = new r());
          var $ = D.get(t);
          if ($) return $;
          D.set(t, R),
            S(t)
              ? t.forEach(function (r) {
                  R.add(e(r, n, N, r, t, D));
                })
              : w(t) &&
                t.forEach(function (r, o) {
                  R.set(o, e(r, n, N, o, t, D));
                });
          var L = B ? void 0 : (z ? (F ? d : u) : F ? C : k)(t);
          return (
            o(L || t, function (r, o) {
              L && (r = t[(o = r)]), i(R, o, e(r, n, N, o, t, D));
            }),
            R
          );
        });
    },
    35898: (e, t, n) => {
      var r = n(97827),
        o = Object.create,
        i = (function () {
          function e() {}
          return function (t) {
            if (!r(t)) return {};
            if (o) return o(t);
            e.prototype = t;
            var n = new e();
            return (e.prototype = void 0), n;
          };
        })();
      e.exports = i;
    },
    39155: (e, t, n) => {
      var r = n(17707),
        o = n(31951)(r);
      e.exports = o;
    },
    155: (e, t, n) => {
      var r = n(26007)();
      e.exports = r;
    },
    17707: (e, t, n) => {
      var r = n(155),
        o = n(33640);
      e.exports = function (e, t) {
        return e && r(e, t, o);
      };
    },
    93328: (e, t, n) => {
      var r = n(83763),
        o = n(66507);
      e.exports = function (e, t) {
        for (var n = 0, i = (t = r(t, e)).length; null != e && n < i; )
          e = e[o(t[n++])];
        return n && n == i ? e : void 0;
      };
    },
    26533: (e, t, n) => {
      var r = n(49666),
        o = n(83491);
      e.exports = function (e, t, n) {
        var i = t(e);
        return o(e) ? i : r(i, n(e));
      };
    },
    78714: (e, t, n) => {
      var r = n(38039),
        o = n(89257),
        i = n(3660),
        s = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : s && s in Object(e)
            ? o(e)
            : i(e);
      };
    },
    58299: (e) => {
      e.exports = function (e, t) {
        return null != e && t in Object(e);
      };
    },
    59016: (e, t, n) => {
      var r = n(78714),
        o = n(34172);
      e.exports = function (e) {
        return o(e) && "[object Arguments]" == r(e);
      };
    },
    16536: (e, t, n) => {
      var r = n(58742),
        o = n(34172);
      e.exports = function e(t, n, i, s, l) {
        return (
          t === n ||
          (null == t || null == n || (!o(t) && !o(n))
            ? t != t && n != n
            : r(t, n, i, s, e, l))
        );
      };
    },
    58742: (e, t, n) => {
      var r = n(56643),
        o = n(57457),
        i = n(57908),
        s = n(11671),
        l = n(88599),
        a = n(83491),
        c = n(33934),
        h = n(8053),
        p = "[object Arguments]",
        u = "[object Array]",
        d = "[object Object]",
        f = Object.prototype.hasOwnProperty;
      e.exports = function (e, t, n, m, g, b) {
        var y = a(e),
          v = a(t),
          w = y ? u : l(e),
          x = v ? u : l(t),
          S = (w = w == p ? d : w) == d,
          k = (x = x == p ? d : x) == d,
          C = w == x;
        if (C && c(e)) {
          if (!c(t)) return !1;
          (y = !0), (S = !1);
        }
        if (C && !S)
          return (
            b || (b = new r()),
            y || h(e) ? o(e, t, n, m, g, b) : i(e, t, w, n, m, g, b)
          );
        if (!(1 & n)) {
          var O = S && f.call(e, "__wrapped__"),
            M = k && f.call(t, "__wrapped__");
          if (O || M) {
            var E = O ? e.value() : e,
              A = M ? t.value() : t;
            return b || (b = new r()), g(E, A, n, m, b);
          }
        }
        return !!C && (b || (b = new r()), s(e, t, n, m, g, b));
      };
    },
    39062: (e, t, n) => {
      var r = n(88599),
        o = n(34172);
      e.exports = function (e) {
        return o(e) && "[object Map]" == r(e);
      };
    },
    46029: (e, t, n) => {
      var r = n(56643),
        o = n(16536);
      e.exports = function (e, t, n, i) {
        var s = n.length,
          l = s,
          a = !i;
        if (null == e) return !l;
        for (e = Object(e); s--; ) {
          var c = n[s];
          if (a && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1;
        }
        for (; ++s < l; ) {
          var h = (c = n[s])[0],
            p = e[h],
            u = c[1];
          if (a && c[2]) {
            if (void 0 === p && !(h in e)) return !1;
          } else {
            var d = new r();
            if (i) var f = i(p, u, h, e, t, d);
            if (!(void 0 === f ? o(u, p, 3, i, d) : f)) return !1;
          }
        }
        return !0;
      };
    },
    15673: (e, t, n) => {
      var r = n(3316),
        o = n(54454),
        i = n(97827),
        s = n(32279),
        l = /^\[object .+?Constructor\]$/,
        a = Function.prototype,
        c = Object.prototype,
        h = a.toString,
        p = c.hasOwnProperty,
        u = RegExp(
          "^" +
            h
              .call(p)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?",
              ) +
            "$",
        );
      e.exports = function (e) {
        return !(!i(e) || o(e)) && (r(e) ? u : l).test(s(e));
      };
    },
    64356: (e, t, n) => {
      var r = n(88599),
        o = n(34172);
      e.exports = function (e) {
        return o(e) && "[object Set]" == r(e);
      };
    },
    27: (e, t, n) => {
      var r = n(78714),
        o = n(19516),
        i = n(34172),
        s = {};
      (s["[object Float32Array]"] =
        s["[object Float64Array]"] =
        s["[object Int8Array]"] =
        s["[object Int16Array]"] =
        s["[object Int32Array]"] =
        s["[object Uint8Array]"] =
        s["[object Uint8ClampedArray]"] =
        s["[object Uint16Array]"] =
        s["[object Uint32Array]"] =
          !0),
        (s["[object Arguments]"] =
          s["[object Array]"] =
          s["[object ArrayBuffer]"] =
          s["[object Boolean]"] =
          s["[object DataView]"] =
          s["[object Date]"] =
          s["[object Error]"] =
          s["[object Function]"] =
          s["[object Map]"] =
          s["[object Number]"] =
          s["[object Object]"] =
          s["[object RegExp]"] =
          s["[object Set]"] =
          s["[object String]"] =
          s["[object WeakMap]"] =
            !1),
        (e.exports = function (e) {
          return i(e) && o(e.length) && !!s[r(e)];
        });
    },
    12507: (e, t, n) => {
      var r = n(58069),
        o = n(42092),
        i = n(91398),
        s = n(83491),
        l = n(39989);
      e.exports = function (e) {
        return "function" == typeof e
          ? e
          : null == e
            ? i
            : "object" == typeof e
              ? s(e)
                ? o(e[0], e[1])
                : r(e)
              : l(e);
      };
    },
    49354: (e, t, n) => {
      var r = n(34149),
        o = n(9716),
        i = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        if (!r(e)) return o(e);
        var t = [];
        for (var n in Object(e))
          i.call(e, n) && "constructor" != n && t.push(n);
        return t;
      };
    },
    73101: (e, t, n) => {
      var r = n(97827),
        o = n(34149),
        i = n(86651),
        s = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        if (!r(e)) return i(e);
        var t = o(e),
          n = [];
        for (var l in e)
          ("constructor" != l || (!t && s.call(e, l))) && n.push(l);
        return n;
      };
    },
    47014: (e, t, n) => {
      var r = n(39155),
        o = n(97244);
      e.exports = function (e, t) {
        var n = -1,
          i = o(e) ? Array(e.length) : [];
        return (
          r(e, function (e, r, o) {
            i[++n] = t(e, r, o);
          }),
          i
        );
      };
    },
    58069: (e, t, n) => {
      var r = n(46029),
        o = n(30818),
        i = n(77031);
      e.exports = function (e) {
        var t = o(e);
        return 1 == t.length && t[0][2]
          ? i(t[0][0], t[0][1])
          : function (n) {
              return n === e || r(n, e, t);
            };
      };
    },
    42092: (e, t, n) => {
      var r = n(16536),
        o = n(52686),
        i = n(72989),
        s = n(90544),
        l = n(49462),
        a = n(77031),
        c = n(66507);
      e.exports = function (e, t) {
        return s(e) && l(t)
          ? a(c(e), t)
          : function (n) {
              var s = o(n, e);
              return void 0 === s && s === t ? i(n, e) : r(t, s, 3);
            };
      };
    },
    33171: (e) => {
      e.exports = function (e) {
        return function (t) {
          return null == t ? void 0 : t[e];
        };
      };
    },
    60477: (e, t, n) => {
      var r = n(93328);
      e.exports = function (e) {
        return function (t) {
          return r(t, e);
        };
      };
    },
    10098: (e) => {
      e.exports = function (e, t) {
        for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
        return r;
      };
    },
    15746: (e, t, n) => {
      var r = n(38039),
        o = n(27742),
        i = n(83491),
        s = n(4036),
        l = r ? r.prototype : void 0,
        a = l ? l.toString : void 0;
      e.exports = function e(t) {
        if ("string" == typeof t) return t;
        if (i(t)) return o(t, e) + "";
        if (s(t)) return a ? a.call(t) : "";
        var n = t + "";
        return "0" == n && 1 / t == -Infinity ? "-0" : n;
      };
    },
    97371: (e) => {
      e.exports = function (e) {
        return function (t) {
          return e(t);
        };
      };
    },
    5713: (e) => {
      e.exports = function (e, t) {
        return e.has(t);
      };
    },
    77768: (e, t, n) => {
      var r = n(91398);
      e.exports = function (e) {
        return "function" == typeof e ? e : r;
      };
    },
    83763: (e, t, n) => {
      var r = n(83491),
        o = n(90544),
        i = n(20136),
        s = n(6468);
      e.exports = function (e, t) {
        return r(e) ? e : o(e, t) ? [e] : i(s(e));
      };
    },
    43603: (e, t, n) => {
      var r = n(15490);
      e.exports = function (e) {
        var t = new e.constructor(e.byteLength);
        return new r(t).set(new r(e)), t;
      };
    },
    71236: (e, t, n) => {
      e = n.nmd(e);
      var r = n(26467),
        o = t && !t.nodeType && t,
        i = o && e && !e.nodeType && e,
        s = i && i.exports === o ? r.Buffer : void 0,
        l = s ? s.allocUnsafe : void 0;
      e.exports = function (e, t) {
        if (t) return e.slice();
        var n = e.length,
          r = l ? l(n) : new e.constructor(n);
        return e.copy(r), r;
      };
    },
    57803: (e, t, n) => {
      var r = n(43603);
      e.exports = function (e, t) {
        var n = t ? r(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.byteLength);
      };
    },
    90955: (e) => {
      var t = /\w*$/;
      e.exports = function (e) {
        var n = new e.constructor(e.source, t.exec(e));
        return (n.lastIndex = e.lastIndex), n;
      };
    },
    61342: (e, t, n) => {
      var r = n(38039),
        o = r ? r.prototype : void 0,
        i = o ? o.valueOf : void 0;
      e.exports = function (e) {
        return i ? Object(i.call(e)) : {};
      };
    },
    89763: (e, t, n) => {
      var r = n(43603);
      e.exports = function (e, t) {
        var n = t ? r(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length);
      };
    },
    10149: (e) => {
      e.exports = function (e, t) {
        var n = -1,
          r = e.length;
        for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
        return t;
      };
    },
    41905: (e, t, n) => {
      var r = n(24261),
        o = n(51458);
      e.exports = function (e, t, n, i) {
        var s = !n;
        n || (n = {});
        for (var l = -1, a = t.length; ++l < a; ) {
          var c = t[l],
            h = i ? i(n[c], e[c], c, n, e) : void 0;
          void 0 === h && (h = e[c]), s ? o(n, c, h) : r(n, c, h);
        }
        return n;
      };
    },
    31285: (e, t, n) => {
      var r = n(41905),
        o = n(28230);
      e.exports = function (e, t) {
        return r(e, o(e), t);
      };
    },
    55366: (e, t, n) => {
      var r = n(41905),
        o = n(51633);
      e.exports = function (e, t) {
        return r(e, o(e), t);
      };
    },
    25551: (e, t, n) => {
      var r = n(26467)["__core-js_shared__"];
      e.exports = r;
    },
    31951: (e, t, n) => {
      var r = n(97244);
      e.exports = function (e, t) {
        return function (n, o) {
          if (null == n) return n;
          if (!r(n)) return e(n, o);
          for (
            var i = n.length, s = t ? i : -1, l = Object(n);
            (t ? s-- : ++s < i) && !1 !== o(l[s], s, l);
          );
          return n;
        };
      };
    },
    26007: (e) => {
      e.exports = function (e) {
        return function (t, n, r) {
          for (var o = -1, i = Object(t), s = r(t), l = s.length; l--; ) {
            var a = s[e ? l : ++o];
            if (!1 === n(i[a], a, i)) break;
          }
          return t;
        };
      };
    },
    47489: (e, t, n) => {
      var r = n(73904),
        o = (function () {
          try {
            var e = r(Object, "defineProperty");
            return e({}, "", {}), e;
          } catch (e) {}
        })();
      e.exports = o;
    },
    57457: (e, t, n) => {
      var r = n(99177),
        o = n(17214),
        i = n(5713);
      e.exports = function (e, t, n, s, l, a) {
        var c = 1 & n,
          h = e.length,
          p = t.length;
        if (h != p && !(c && p > h)) return !1;
        var u = a.get(e),
          d = a.get(t);
        if (u && d) return u == t && d == e;
        var f = -1,
          m = !0,
          g = 2 & n ? new r() : void 0;
        for (a.set(e, t), a.set(t, e); ++f < h; ) {
          var b = e[f],
            y = t[f];
          if (s) var v = c ? s(y, b, f, t, e, a) : s(b, y, f, e, t, a);
          if (void 0 !== v) {
            if (v) continue;
            m = !1;
            break;
          }
          if (g) {
            if (
              !o(t, function (e, t) {
                if (!i(g, t) && (b === e || l(b, e, n, s, a))) return g.push(t);
              })
            ) {
              m = !1;
              break;
            }
          } else if (b !== y && !l(b, y, n, s, a)) {
            m = !1;
            break;
          }
        }
        return a.delete(e), a.delete(t), m;
      };
    },
    57908: (e, t, n) => {
      var r = n(38039),
        o = n(15490),
        i = n(31722),
        s = n(57457),
        l = n(74059),
        a = n(73697),
        c = r ? r.prototype : void 0,
        h = c ? c.valueOf : void 0;
      e.exports = function (e, t, n, r, c, p, u) {
        switch (n) {
          case "[object DataView]":
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            (e = e.buffer), (t = t.buffer);
          case "[object ArrayBuffer]":
            return !(e.byteLength != t.byteLength || !p(new o(e), new o(t)));
          case "[object Boolean]":
          case "[object Date]":
          case "[object Number]":
            return i(+e, +t);
          case "[object Error]":
            return e.name == t.name && e.message == t.message;
          case "[object RegExp]":
          case "[object String]":
            return e == t + "";
          case "[object Map]":
            var d = l;
          case "[object Set]":
            var f = 1 & r;
            if ((d || (d = a), e.size != t.size && !f)) return !1;
            var m = u.get(e);
            if (m) return m == t;
            (r |= 2), u.set(e, t);
            var g = s(d(e), d(t), r, c, p, u);
            return u.delete(e), g;
          case "[object Symbol]":
            if (h) return h.call(e) == h.call(t);
        }
        return !1;
      };
    },
    11671: (e, t, n) => {
      var r = n(68240),
        o = Object.prototype.hasOwnProperty;
      e.exports = function (e, t, n, i, s, l) {
        var a = 1 & n,
          c = r(e),
          h = c.length;
        if (h != r(t).length && !a) return !1;
        for (var p = h; p--; ) {
          var u = c[p];
          if (!(a ? u in t : o.call(t, u))) return !1;
        }
        var d = l.get(e),
          f = l.get(t);
        if (d && f) return d == t && f == e;
        var m = !0;
        l.set(e, t), l.set(t, e);
        for (var g = a; ++p < h; ) {
          var b = e[(u = c[p])],
            y = t[u];
          if (i) var v = a ? i(y, b, u, t, e, l) : i(b, y, u, e, t, l);
          if (!(void 0 === v ? b === y || s(b, y, n, i, l) : v)) {
            m = !1;
            break;
          }
          g || (g = "constructor" == u);
        }
        if (m && !g) {
          var w = e.constructor,
            x = t.constructor;
          w == x ||
            !("constructor" in e) ||
            !("constructor" in t) ||
            ("function" == typeof w &&
              w instanceof w &&
              "function" == typeof x &&
              x instanceof x) ||
            (m = !1);
        }
        return l.delete(e), l.delete(t), m;
      };
    },
    2286: (e, t, n) => {
      var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
      e.exports = r;
    },
    68240: (e, t, n) => {
      var r = n(26533),
        o = n(28230),
        i = n(33640);
      e.exports = function (e) {
        return r(e, i, o);
      };
    },
    68767: (e, t, n) => {
      var r = n(26533),
        o = n(51633),
        i = n(73591);
      e.exports = function (e) {
        return r(e, i, o);
      };
    },
    5073: (e, t, n) => {
      var r = n(32132);
      e.exports = function (e, t) {
        var n = e.__data__;
        return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
      };
    },
    30818: (e, t, n) => {
      var r = n(49462),
        o = n(33640);
      e.exports = function (e) {
        for (var t = o(e), n = t.length; n--; ) {
          var i = t[n],
            s = e[i];
          t[n] = [i, s, r(s)];
        }
        return t;
      };
    },
    73904: (e, t, n) => {
      var r = n(15673),
        o = n(49490);
      e.exports = function (e, t) {
        var n = o(e, t);
        return r(n) ? n : void 0;
      };
    },
    89553: (e, t, n) => {
      var r = n(48697)(Object.getPrototypeOf, Object);
      e.exports = r;
    },
    89257: (e, t, n) => {
      var r = n(38039),
        o = Object.prototype,
        i = o.hasOwnProperty,
        s = o.toString,
        l = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        var t = i.call(e, l),
          n = e[l];
        try {
          e[l] = void 0;
          var r = !0;
        } catch (e) {}
        var o = s.call(e);
        return r && (t ? (e[l] = n) : delete e[l]), o;
      };
    },
    28230: (e, t, n) => {
      var r = n(2152),
        o = n(16199),
        i = Object.prototype.propertyIsEnumerable,
        s = Object.getOwnPropertySymbols,
        l = s
          ? function (e) {
              return null == e
                ? []
                : ((e = Object(e)),
                  r(s(e), function (t) {
                    return i.call(e, t);
                  }));
            }
          : o;
      e.exports = l;
    },
    51633: (e, t, n) => {
      var r = n(49666),
        o = n(89553),
        i = n(28230),
        s = n(16199),
        l = Object.getOwnPropertySymbols
          ? function (e) {
              for (var t = []; e; ) r(t, i(e)), (e = o(e));
              return t;
            }
          : s;
      e.exports = l;
    },
    88599: (e, t, n) => {
      var r = n(30878),
        o = n(44925),
        i = n(97438),
        s = n(64507),
        l = n(47285),
        a = n(78714),
        c = n(32279),
        h = "[object Map]",
        p = "[object Promise]",
        u = "[object Set]",
        d = "[object WeakMap]",
        f = "[object DataView]",
        m = c(r),
        g = c(o),
        b = c(i),
        y = c(s),
        v = c(l),
        w = a;
      ((r && w(new r(new ArrayBuffer(1))) != f) ||
        (o && w(new o()) != h) ||
        (i && w(i.resolve()) != p) ||
        (s && w(new s()) != u) ||
        (l && w(new l()) != d)) &&
        (w = function (e) {
          var t = a(e),
            n = "[object Object]" == t ? e.constructor : void 0,
            r = n ? c(n) : "";
          if (r)
            switch (r) {
              case m:
                return f;
              case g:
                return h;
              case b:
                return p;
              case y:
                return u;
              case v:
                return d;
            }
          return t;
        }),
        (e.exports = w);
    },
    49490: (e) => {
      e.exports = function (e, t) {
        return null == e ? void 0 : e[t];
      };
    },
    15720: (e, t, n) => {
      var r = n(83763),
        o = n(69214),
        i = n(83491),
        s = n(62439),
        l = n(19516),
        a = n(66507);
      e.exports = function (e, t, n) {
        for (var c = -1, h = (t = r(t, e)).length, p = !1; ++c < h; ) {
          var u = a(t[c]);
          if (!(p = null != e && n(e, u))) break;
          e = e[u];
        }
        return p || ++c != h
          ? p
          : !!(h = null == e ? 0 : e.length) &&
              l(h) &&
              s(u, h) &&
              (i(e) || o(e));
      };
    },
    98138: (e, t, n) => {
      var r = n(60316);
      e.exports = function () {
        (this.__data__ = r ? r(null) : {}), (this.size = 0);
      };
    },
    85596: (e) => {
      e.exports = function (e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= t ? 1 : 0), t;
      };
    },
    82095: (e, t, n) => {
      var r = n(60316),
        o = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        var t = this.__data__;
        if (r) {
          var n = t[e];
          return "__lodash_hash_undefined__" === n ? void 0 : n;
        }
        return o.call(t, e) ? t[e] : void 0;
      };
    },
    38163: (e, t, n) => {
      var r = n(60316),
        o = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        var t = this.__data__;
        return r ? void 0 !== t[e] : o.call(t, e);
      };
    },
    86955: (e, t, n) => {
      var r = n(60316);
      e.exports = function (e, t) {
        var n = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (n[e] = r && void 0 === t ? "__lodash_hash_undefined__" : t),
          this
        );
      };
    },
    6247: (e) => {
      var t = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        var n = e.length,
          r = new e.constructor(n);
        return (
          n &&
            "string" == typeof e[0] &&
            t.call(e, "index") &&
            ((r.index = e.index), (r.input = e.input)),
          r
        );
      };
    },
    85353: (e, t, n) => {
      var r = n(43603),
        o = n(57803),
        i = n(90955),
        s = n(61342),
        l = n(89763);
      e.exports = function (e, t, n) {
        var a = e.constructor;
        switch (t) {
          case "[object ArrayBuffer]":
            return r(e);
          case "[object Boolean]":
          case "[object Date]":
            return new a(+e);
          case "[object DataView]":
            return o(e, n);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return l(e, n);
          case "[object Map]":
          case "[object Set]":
            return new a();
          case "[object Number]":
          case "[object String]":
            return new a(e);
          case "[object RegExp]":
            return i(e);
          case "[object Symbol]":
            return s(e);
        }
      };
    },
    41927: (e, t, n) => {
      var r = n(35898),
        o = n(89553),
        i = n(34149);
      e.exports = function (e) {
        return "function" != typeof e.constructor || i(e) ? {} : r(o(e));
      };
    },
    62439: (e) => {
      var t = /^(?:0|[1-9]\d*)$/;
      e.exports = function (e, n) {
        var r = typeof e;
        return (
          !!(n = null == n ? 9007199254740991 : n) &&
          ("number" == r || ("symbol" != r && t.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < n
        );
      };
    },
    90544: (e, t, n) => {
      var r = n(83491),
        o = n(4036),
        i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        s = /^\w*$/;
      e.exports = function (e, t) {
        if (r(e)) return !1;
        var n = typeof e;
        return (
          !(
            "number" != n &&
            "symbol" != n &&
            "boolean" != n &&
            null != e &&
            !o(e)
          ) ||
          s.test(e) || !i.test(e) ||
          (null != t && e in Object(t))
        );
      };
    },
    32132: (e) => {
      e.exports = function (e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t
          ? "__proto__" !== e
          : null === e;
      };
    },
    54454: (e, t, n) => {
      var r,
        o = n(25551),
        i = (r = /[^.]+$/.exec((o && o.keys && o.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + r
          : "";
      e.exports = function (e) {
        return !!i && i in e;
      };
    },
    34149: (e) => {
      var t = Object.prototype;
      e.exports = function (e) {
        var n = e && e.constructor;
        return e === (("function" == typeof n && n.prototype) || t);
      };
    },
    49462: (e, t, n) => {
      var r = n(97827);
      e.exports = function (e) {
        return e == e && !r(e);
      };
    },
    4316: (e) => {
      e.exports = function () {
        (this.__data__ = []), (this.size = 0);
      };
    },
    63770: (e, t, n) => {
      var r = n(85775),
        o = Array.prototype.splice;
      e.exports = function (e) {
        var t = this.__data__,
          n = r(t, e);
        return (
          !(n < 0) &&
          (n == t.length - 1 ? t.pop() : o.call(t, n, 1), --this.size, !0)
        );
      };
    },
    34869: (e, t, n) => {
      var r = n(85775);
      e.exports = function (e) {
        var t = this.__data__,
          n = r(t, e);
        return n < 0 ? void 0 : t[n][1];
      };
    },
    17977: (e, t, n) => {
      var r = n(85775);
      e.exports = function (e) {
        return r(this.__data__, e) > -1;
      };
    },
    52209: (e, t, n) => {
      var r = n(85775);
      e.exports = function (e, t) {
        var n = this.__data__,
          o = r(n, e);
        return o < 0 ? (++this.size, n.push([e, t])) : (n[o][1] = t), this;
      };
    },
    14366: (e, t, n) => {
      var r = n(72987),
        o = n(63937),
        i = n(44925);
      e.exports = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new r(),
            map: new (i || o)(),
            string: new r(),
          });
      };
    },
    60856: (e, t, n) => {
      var r = n(5073);
      e.exports = function (e) {
        var t = r(this, e).delete(e);
        return (this.size -= t ? 1 : 0), t;
      };
    },
    29435: (e, t, n) => {
      var r = n(5073);
      e.exports = function (e) {
        return r(this, e).get(e);
      };
    },
    12375: (e, t, n) => {
      var r = n(5073);
      e.exports = function (e) {
        return r(this, e).has(e);
      };
    },
    55103: (e, t, n) => {
      var r = n(5073);
      e.exports = function (e, t) {
        var n = r(this, e),
          o = n.size;
        return n.set(e, t), (this.size += n.size == o ? 0 : 1), this;
      };
    },
    74059: (e) => {
      e.exports = function (e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e, r) {
            n[++t] = [r, e];
          }),
          n
        );
      };
    },
    77031: (e) => {
      e.exports = function (e, t) {
        return function (n) {
          return null != n && n[e] === t && (void 0 !== t || e in Object(n));
        };
      };
    },
    85610: (e, t, n) => {
      var r = n(81334);
      e.exports = function (e) {
        var t = r(e, function (e) {
            return 500 === n.size && n.clear(), e;
          }),
          n = t.cache;
        return t;
      };
    },
    60316: (e, t, n) => {
      var r = n(73904)(Object, "create");
      e.exports = r;
    },
    9716: (e, t, n) => {
      var r = n(48697)(Object.keys, Object);
      e.exports = r;
    },
    86651: (e) => {
      e.exports = function (e) {
        var t = [];
        if (null != e) for (var n in Object(e)) t.push(n);
        return t;
      };
    },
    25627: (e, t, n) => {
      e = n.nmd(e);
      var r = n(2286),
        o = t && !t.nodeType && t,
        i = o && e && !e.nodeType && e,
        s = i && i.exports === o && r.process,
        l = (function () {
          try {
            var e = i && i.require && i.require("util").types;
            return e || (s && s.binding && s.binding("util"));
          } catch (e) {}
        })();
      e.exports = l;
    },
    3660: (e) => {
      var t = Object.prototype.toString;
      e.exports = function (e) {
        return t.call(e);
      };
    },
    48697: (e) => {
      e.exports = function (e, t) {
        return function (n) {
          return e(t(n));
        };
      };
    },
    26467: (e, t, n) => {
      var r = n(2286),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = r || o || Function("return this")();
      e.exports = i;
    },
    98726: (e) => {
      e.exports = function (e) {
        return this.__data__.set(e, "__lodash_hash_undefined__"), this;
      };
    },
    12961: (e) => {
      e.exports = function (e) {
        return this.__data__.has(e);
      };
    },
    73697: (e) => {
      e.exports = function (e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e) {
            n[++t] = e;
          }),
          n
        );
      };
    },
    2242: (e, t, n) => {
      var r = n(63937);
      e.exports = function () {
        (this.__data__ = new r()), (this.size = 0);
      };
    },
    91668: (e) => {
      e.exports = function (e) {
        var t = this.__data__,
          n = t.delete(e);
        return (this.size = t.size), n;
      };
    },
    41159: (e) => {
      e.exports = function (e) {
        return this.__data__.get(e);
      };
    },
    20411: (e) => {
      e.exports = function (e) {
        return this.__data__.has(e);
      };
    },
    11427: (e, t, n) => {
      var r = n(63937),
        o = n(44925),
        i = n(44023);
      e.exports = function (e, t) {
        var n = this.__data__;
        if (n instanceof r) {
          var s = n.__data__;
          if (!o || s.length < 199)
            return s.push([e, t]), (this.size = ++n.size), this;
          n = this.__data__ = new i(s);
        }
        return n.set(e, t), (this.size = n.size), this;
      };
    },
    20136: (e, t, n) => {
      var r = n(85610),
        o =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        i = /\\(\\)?/g,
        s = r(function (e) {
          var t = [];
          return (
            46 === e.charCodeAt(0) && t.push(""),
            e.replace(o, function (e, n, r, o) {
              t.push(r ? o.replace(i, "$1") : n || e);
            }),
            t
          );
        });
      e.exports = s;
    },
    66507: (e, t, n) => {
      var r = n(4036);
      e.exports = function (e) {
        if ("string" == typeof e || r(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -Infinity ? "-0" : t;
      };
    },
    32279: (e) => {
      var t = Function.prototype.toString;
      e.exports = function (e) {
        if (null != e) {
          try {
            return t.call(e);
          } catch (e) {}
          try {
            return e + "";
          } catch (e) {}
        }
        return "";
      };
    },
    52305: (e, t, n) => {
      var r = n(40289);
      e.exports = function (e) {
        return r(e, 5);
      };
    },
    31722: (e) => {
      e.exports = function (e, t) {
        return e === t || (e != e && t != t);
      };
    },
    62369: (e, t, n) => {
      var r = n(17707),
        o = n(77768);
      e.exports = function (e, t) {
        return e && r(e, o(t));
      };
    },
    52686: (e, t, n) => {
      var r = n(93328);
      e.exports = function (e, t, n) {
        var o = null == e ? void 0 : r(e, t);
        return void 0 === o ? n : o;
      };
    },
    72989: (e, t, n) => {
      var r = n(58299),
        o = n(15720);
      e.exports = function (e, t) {
        return null != e && o(e, t, r);
      };
    },
    91398: (e) => {
      e.exports = function (e) {
        return e;
      };
    },
    69214: (e, t, n) => {
      var r = n(59016),
        o = n(34172),
        i = Object.prototype,
        s = i.hasOwnProperty,
        l = i.propertyIsEnumerable,
        a = r(
          (function () {
            return arguments;
          })(),
        )
          ? r
          : function (e) {
              return o(e) && s.call(e, "callee") && !l.call(e, "callee");
            };
      e.exports = a;
    },
    83491: (e) => {
      var t = Array.isArray;
      e.exports = t;
    },
    97244: (e, t, n) => {
      var r = n(3316),
        o = n(19516);
      e.exports = function (e) {
        return null != e && o(e.length) && !r(e);
      };
    },
    33934: (e, t, n) => {
      e = n.nmd(e);
      var r = n(26467),
        o = n(77037),
        i = t && !t.nodeType && t,
        s = i && e && !e.nodeType && e,
        l = s && s.exports === i ? r.Buffer : void 0,
        a = (l ? l.isBuffer : void 0) || o;
      e.exports = a;
    },
    3316: (e, t, n) => {
      var r = n(78714),
        o = n(97827);
      e.exports = function (e) {
        if (!o(e)) return !1;
        var t = r(e);
        return (
          "[object Function]" == t ||
          "[object GeneratorFunction]" == t ||
          "[object AsyncFunction]" == t ||
          "[object Proxy]" == t
        );
      };
    },
    19516: (e) => {
      e.exports = function (e) {
        return (
          "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        );
      };
    },
    82052: (e, t, n) => {
      var r = n(39062),
        o = n(97371),
        i = n(25627),
        s = i && i.isMap,
        l = s ? o(s) : r;
      e.exports = l;
    },
    97827: (e) => {
      e.exports = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      };
    },
    34172: (e) => {
      e.exports = function (e) {
        return null != e && "object" == typeof e;
      };
    },
    23449: (e, t, n) => {
      var r = n(78714),
        o = n(89553),
        i = n(34172),
        s = Function.prototype,
        l = Object.prototype,
        a = s.toString,
        c = l.hasOwnProperty,
        h = a.call(Object);
      e.exports = function (e) {
        if (!i(e) || "[object Object]" != r(e)) return !1;
        var t = o(e);
        if (null === t) return !0;
        var n = c.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && a.call(n) == h;
      };
    },
    64406: (e, t, n) => {
      var r = n(64356),
        o = n(97371),
        i = n(25627),
        s = i && i.isSet,
        l = s ? o(s) : r;
      e.exports = l;
    },
    77837: (e, t, n) => {
      var r = n(78714),
        o = n(83491),
        i = n(34172);
      e.exports = function (e) {
        return (
          "string" == typeof e || (!o(e) && i(e) && "[object String]" == r(e))
        );
      };
    },
    4036: (e, t, n) => {
      var r = n(78714),
        o = n(34172);
      e.exports = function (e) {
        return "symbol" == typeof e || (o(e) && "[object Symbol]" == r(e));
      };
    },
    8053: (e, t, n) => {
      var r = n(27),
        o = n(97371),
        i = n(25627),
        s = i && i.isTypedArray,
        l = s ? o(s) : r;
      e.exports = l;
    },
    33640: (e, t, n) => {
      var r = n(48353),
        o = n(49354),
        i = n(97244);
      e.exports = function (e) {
        return i(e) ? r(e) : o(e);
      };
    },
    73591: (e, t, n) => {
      var r = n(48353),
        o = n(73101),
        i = n(97244);
      e.exports = function (e) {
        return i(e) ? r(e, !0) : o(e);
      };
    },
    67160: (e, t, n) => {
      var r = n(27742),
        o = n(12507),
        i = n(47014),
        s = n(83491);
      e.exports = function (e, t) {
        return (s(e) ? r : i)(e, o(t, 3));
      };
    },
    81334: (e, t, n) => {
      var r = n(44023);
      function o(e, t) {
        if ("function" != typeof e || (null != t && "function" != typeof t))
          throw new TypeError("Expected a function");
        var n = function () {
          var r = arguments,
            o = t ? t.apply(this, r) : r[0],
            i = n.cache;
          if (i.has(o)) return i.get(o);
          var s = e.apply(this, r);
          return (n.cache = i.set(o, s) || i), s;
        };
        return (n.cache = new (o.Cache || r)()), n;
      }
      (o.Cache = r), (e.exports = o);
    },
    39989: (e, t, n) => {
      var r = n(33171),
        o = n(60477),
        i = n(90544),
        s = n(66507);
      e.exports = function (e) {
        return i(e) ? r(s(e)) : o(e);
      };
    },
    16199: (e) => {
      e.exports = function () {
        return [];
      };
    },
    77037: (e) => {
      e.exports = function () {
        return !1;
      };
    },
    6468: (e, t, n) => {
      var r = n(15746);
      e.exports = function (e) {
        return null == e ? "" : r(e);
      };
    },
    61257: (e, t, n) => {
      "use strict";
      n.d(t, { xk: () => _i });
      var r = n(90626),
        o = n(85341),
        i = {},
        s = function (e, t, n, r) {
          var o = e + "-" + t + "-" + n + (r ? "-server" : "");
          if (i[o]) return i[o];
          var s = (function (e, t, n, r) {
            if ("undefined" == typeof document && !r) return null;
            var o = r ? new r() : document.createElement("canvas");
            (o.width = 2 * n), (o.height = 2 * n);
            var i = o.getContext("2d");
            return i
              ? ((i.fillStyle = e),
                i.fillRect(0, 0, o.width, o.height),
                (i.fillStyle = t),
                i.fillRect(0, 0, n, n),
                i.translate(n, n),
                i.fillRect(0, 0, n, n),
                o.toDataURL())
              : null;
          })(e, t, n, r);
          return (i[o] = s), s;
        },
        l =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        a = function (e) {
          var t = e.white,
            n = e.grey,
            i = e.size,
            a = e.renderers,
            c = e.borderRadius,
            h = e.boxShadow,
            p = e.children,
            u = (0, o.Ay)({
              default: {
                grid: {
                  borderRadius: c,
                  boxShadow: h,
                  absolute: "0px 0px 0px 0px",
                  background: "url(" + s(t, n, i, a.canvas) + ") center left",
                },
              },
            });
          return (0, r.isValidElement)(p)
            ? r.cloneElement(
                p,
                l({}, p.props, { style: l({}, p.props.style, u.grid) }),
              )
            : r.createElement("div", { style: u.grid });
        };
      a.defaultProps = {
        size: 8,
        white: "transparent",
        grey: "rgba(0,0,0,.08)",
        renderers: {},
      };
      const c = a;
      var h =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        p = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
      function u(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      const d = (function (e) {
        function t() {
          var e, n, r;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          for (var o = arguments.length, i = Array(o), s = 0; s < o; s++)
            i[s] = arguments[s];
          return (
            (n = r =
              u(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(i),
                ),
              )),
            (r.handleChange = function (e) {
              var t = (function (e, t, n, r, o) {
                var i = o.clientWidth,
                  s = o.clientHeight,
                  l = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
                  a = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
                  c = l - (o.getBoundingClientRect().left + window.pageXOffset),
                  h = a - (o.getBoundingClientRect().top + window.pageYOffset);
                if ("vertical" === n) {
                  var p = void 0;
                  if (
                    ((p =
                      h < 0 ? 0 : h > s ? 1 : Math.round((100 * h) / s) / 100),
                    t.a !== p)
                  )
                    return { h: t.h, s: t.s, l: t.l, a: p, source: "rgb" };
                } else {
                  var u = void 0;
                  if (
                    r !==
                    (u =
                      c < 0 ? 0 : c > i ? 1 : Math.round((100 * c) / i) / 100)
                  )
                    return { h: t.h, s: t.s, l: t.l, a: u, source: "rgb" };
                }
                return null;
              })(e, r.props.hsl, r.props.direction, r.props.a, r.container);
              t &&
                "function" == typeof r.props.onChange &&
                r.props.onChange(t, e);
            }),
            (r.handleMouseDown = function (e) {
              r.handleChange(e),
                window.addEventListener("mousemove", r.handleChange),
                window.addEventListener("mouseup", r.handleMouseUp);
            }),
            (r.handleMouseUp = function () {
              r.unbindEventListeners();
            }),
            (r.unbindEventListeners = function () {
              window.removeEventListener("mousemove", r.handleChange),
                window.removeEventListener("mouseup", r.handleMouseUp);
            }),
            u(r, n)
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
          p(t, [
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
                  n = (0, o.Ay)(
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
                      overwrite: h({}, this.props.style),
                    },
                    {
                      vertical: "vertical" === this.props.direction,
                      overwrite: !0,
                    },
                  );
                return r.createElement(
                  "div",
                  { style: n.alpha },
                  r.createElement(
                    "div",
                    { style: n.checkboard },
                    r.createElement(c, { renderers: this.props.renderers }),
                  ),
                  r.createElement("div", { style: n.gradient }),
                  r.createElement(
                    "div",
                    {
                      style: n.container,
                      ref: function (t) {
                        return (e.container = t);
                      },
                      onMouseDown: this.handleMouseDown,
                      onTouchMove: this.handleChange,
                      onTouchStart: this.handleChange,
                    },
                    r.createElement(
                      "div",
                      { style: n.pointer },
                      this.props.pointer
                        ? r.createElement(this.props.pointer, this.props)
                        : r.createElement("div", { style: n.slider }),
                    ),
                  ),
                );
              },
            },
          ]),
          t
        );
      })(r.PureComponent || r.Component);
      var f = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })();
      var m = [38, 40],
        g = 1;
      const b = (function (e) {
        function t(e) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var n = (function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return (
            (n.handleBlur = function () {
              n.state.blurValue &&
                n.setState({ value: n.state.blurValue, blurValue: null });
            }),
            (n.handleChange = function (e) {
              n.setUpdatedValue(e.target.value, e);
            }),
            (n.handleKeyDown = function (e) {
              var t,
                r = (function (e) {
                  return Number(String(e).replace(/%/g, ""));
                })(e.target.value);
              if (!isNaN(r) && ((t = e.keyCode), m.indexOf(t) > -1)) {
                var o = n.getArrowOffset(),
                  i = 38 === e.keyCode ? r + o : r - o;
                n.setUpdatedValue(i, e);
              }
            }),
            (n.handleDrag = function (e) {
              if (n.props.dragLabel) {
                var t = Math.round(n.props.value + e.movementX);
                t >= 0 &&
                  t <= n.props.dragMax &&
                  n.props.onChange &&
                  n.props.onChange(n.getValueObjectWithLabel(t), e);
              }
            }),
            (n.handleMouseDown = function (e) {
              n.props.dragLabel &&
                (e.preventDefault(),
                n.handleDrag(e),
                window.addEventListener("mousemove", n.handleDrag),
                window.addEventListener("mouseup", n.handleMouseUp));
            }),
            (n.handleMouseUp = function () {
              n.unbindEventListeners();
            }),
            (n.unbindEventListeners = function () {
              window.removeEventListener("mousemove", n.handleDrag),
                window.removeEventListener("mouseup", n.handleMouseUp);
            }),
            (n.state = {
              value: String(e.value).toUpperCase(),
              blurValue: String(e.value).toUpperCase(),
            }),
            (n.inputId = "rc-editable-input-" + g++),
            n
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
          f(t, [
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
                return (function (e, t, n) {
                  return (
                    t in e
                      ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[t] = n),
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
                var n = this.props.label ? this.getValueObjectWithLabel(e) : e;
                this.props.onChange && this.props.onChange(n, t),
                  this.setState({ value: e });
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = (0, o.Ay)(
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
                return r.createElement(
                  "div",
                  { style: t.wrap },
                  r.createElement("input", {
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
                    ? r.createElement(
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
      })(r.PureComponent || r.Component);
      var y = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })();
      function v(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      const w = (function (e) {
        function t() {
          var e, n, r;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          for (var o = arguments.length, i = Array(o), s = 0; s < o; s++)
            i[s] = arguments[s];
          return (
            (n = r =
              v(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(i),
                ),
              )),
            (r.handleChange = function (e) {
              var t = (function (e, t, n, r) {
                var o = r.clientWidth,
                  i = r.clientHeight,
                  s = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
                  l = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
                  a = s - (r.getBoundingClientRect().left + window.pageXOffset),
                  c = l - (r.getBoundingClientRect().top + window.pageYOffset);
                if ("vertical" === t) {
                  var h = void 0;
                  if (
                    ((h =
                      c < 0
                        ? 359
                        : c > i
                          ? 0
                          : (360 * ((-100 * c) / i + 100)) / 100),
                    n.h !== h)
                  )
                    return { h, s: n.s, l: n.l, a: n.a, source: "hsl" };
                } else {
                  var p = void 0;
                  if (
                    ((p =
                      a < 0 ? 0 : a > o ? 359 : (((100 * a) / o) * 360) / 100),
                    n.h !== p)
                  )
                    return { h: p, s: n.s, l: n.l, a: n.a, source: "hsl" };
                }
                return null;
              })(e, r.props.direction, r.props.hsl, r.container);
              t &&
                "function" == typeof r.props.onChange &&
                r.props.onChange(t, e);
            }),
            (r.handleMouseDown = function (e) {
              r.handleChange(e),
                window.addEventListener("mousemove", r.handleChange),
                window.addEventListener("mouseup", r.handleMouseUp);
            }),
            (r.handleMouseUp = function () {
              r.unbindEventListeners();
            }),
            v(r, n)
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
          y(t, [
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
                  n = void 0 === t ? "horizontal" : t,
                  i = (0, o.Ay)(
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
                    { vertical: "vertical" === n },
                  );
                return r.createElement(
                  "div",
                  { style: i.hue },
                  r.createElement(
                    "div",
                    {
                      className: "hue-" + n,
                      style: i.container,
                      ref: function (t) {
                        return (e.container = t);
                      },
                      onMouseDown: this.handleMouseDown,
                      onTouchMove: this.handleChange,
                      onTouchStart: this.handleChange,
                    },
                    r.createElement(
                      "style",
                      null,
                      "\n            .hue-horizontal {\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n\n            .hue-vertical {\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n          ",
                    ),
                    r.createElement(
                      "div",
                      { style: i.pointer },
                      this.props.pointer
                        ? r.createElement(this.props.pointer, this.props)
                        : r.createElement("div", { style: i.slider }),
                    ),
                  ),
                );
              },
            },
          ]),
          t
        );
      })(r.PureComponent || r.Component);
      var x = n(61410),
        S = n.n(x);
      const k = function () {
        (this.__data__ = []), (this.size = 0);
      };
      const C = function (e, t) {
        return e === t || (e != e && t != t);
      };
      const O = function (e, t) {
        for (var n = e.length; n--; ) if (C(e[n][0], t)) return n;
        return -1;
      };
      var M = Array.prototype.splice;
      const E = function (e) {
        var t = this.__data__,
          n = O(t, e);
        return (
          !(n < 0) &&
          (n == t.length - 1 ? t.pop() : M.call(t, n, 1), --this.size, !0)
        );
      };
      const A = function (e) {
        var t = this.__data__,
          n = O(t, e);
        return n < 0 ? void 0 : t[n][1];
      };
      const N = function (e) {
        return O(this.__data__, e) > -1;
      };
      const T = function (e, t) {
        var n = this.__data__,
          r = O(n, e);
        return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
      };
      function _(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (_.prototype.clear = k),
        (_.prototype.delete = E),
        (_.prototype.get = A),
        (_.prototype.has = N),
        (_.prototype.set = T);
      const D = _;
      const R = function () {
        (this.__data__ = new D()), (this.size = 0);
      };
      const j = function (e) {
        var t = this.__data__,
          n = t.delete(e);
        return (this.size = t.size), n;
      };
      const F = function (e) {
        return this.__data__.get(e);
      };
      const z = function (e) {
        return this.__data__.has(e);
      };
      const B =
        "object" == typeof global &&
        global &&
        global.Object === Object &&
        global;
      var P = "object" == typeof self && self && self.Object === Object && self;
      const I = B || P || Function("return this")();
      const $ = I.Symbol;
      var L = Object.prototype,
        V = L.hasOwnProperty,
        J = L.toString,
        H = $ ? $.toStringTag : void 0;
      const K = function (e) {
        var t = V.call(e, H),
          n = e[H];
        try {
          e[H] = void 0;
          var r = !0;
        } catch (e) {}
        var o = J.call(e);
        return r && (t ? (e[H] = n) : delete e[H]), o;
      };
      var W = Object.prototype.toString;
      const U = function (e) {
        return W.call(e);
      };
      var q = $ ? $.toStringTag : void 0;
      const G = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : q && q in Object(e)
            ? K(e)
            : U(e);
      };
      const X = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      };
      const Y = function (e) {
        if (!X(e)) return !1;
        var t = G(e);
        return (
          "[object Function]" == t ||
          "[object GeneratorFunction]" == t ||
          "[object AsyncFunction]" == t ||
          "[object Proxy]" == t
        );
      };
      const Z = I["__core-js_shared__"];
      var Q,
        ee = (Q = /[^.]+$/.exec((Z && Z.keys && Z.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + Q
          : "";
      const te = function (e) {
        return !!ee && ee in e;
      };
      var ne = Function.prototype.toString;
      const re = function (e) {
        if (null != e) {
          try {
            return ne.call(e);
          } catch (e) {}
          try {
            return e + "";
          } catch (e) {}
        }
        return "";
      };
      var oe = /^\[object .+?Constructor\]$/,
        ie = Function.prototype,
        se = Object.prototype,
        le = ie.toString,
        ae = se.hasOwnProperty,
        ce = RegExp(
          "^" +
            le
              .call(ae)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?",
              ) +
            "$",
        );
      const he = function (e) {
        return !(!X(e) || te(e)) && (Y(e) ? ce : oe).test(re(e));
      };
      const pe = function (e, t) {
        return null == e ? void 0 : e[t];
      };
      const ue = function (e, t) {
        var n = pe(e, t);
        return he(n) ? n : void 0;
      };
      const de = ue(I, "Map");
      const fe = ue(Object, "create");
      const me = function () {
        (this.__data__ = fe ? fe(null) : {}), (this.size = 0);
      };
      const ge = function (e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= t ? 1 : 0), t;
      };
      var be = Object.prototype.hasOwnProperty;
      const ye = function (e) {
        var t = this.__data__;
        if (fe) {
          var n = t[e];
          return "__lodash_hash_undefined__" === n ? void 0 : n;
        }
        return be.call(t, e) ? t[e] : void 0;
      };
      var ve = Object.prototype.hasOwnProperty;
      const we = function (e) {
        var t = this.__data__;
        return fe ? void 0 !== t[e] : ve.call(t, e);
      };
      const xe = function (e, t) {
        var n = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (n[e] = fe && void 0 === t ? "__lodash_hash_undefined__" : t),
          this
        );
      };
      function Se(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (Se.prototype.clear = me),
        (Se.prototype.delete = ge),
        (Se.prototype.get = ye),
        (Se.prototype.has = we),
        (Se.prototype.set = xe);
      const ke = Se;
      const Ce = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new ke(),
            map: new (de || D)(),
            string: new ke(),
          });
      };
      const Oe = function (e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t
          ? "__proto__" !== e
          : null === e;
      };
      const Me = function (e, t) {
        var n = e.__data__;
        return Oe(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
      };
      const Ee = function (e) {
        var t = Me(this, e).delete(e);
        return (this.size -= t ? 1 : 0), t;
      };
      const Ae = function (e) {
        return Me(this, e).get(e);
      };
      const Ne = function (e) {
        return Me(this, e).has(e);
      };
      const Te = function (e, t) {
        var n = Me(this, e),
          r = n.size;
        return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
      };
      function _e(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (_e.prototype.clear = Ce),
        (_e.prototype.delete = Ee),
        (_e.prototype.get = Ae),
        (_e.prototype.has = Ne),
        (_e.prototype.set = Te);
      const De = _e;
      const Re = function (e, t) {
        var n = this.__data__;
        if (n instanceof D) {
          var r = n.__data__;
          if (!de || r.length < 199)
            return r.push([e, t]), (this.size = ++n.size), this;
          n = this.__data__ = new De(r);
        }
        return n.set(e, t), (this.size = n.size), this;
      };
      function je(e) {
        var t = (this.__data__ = new D(e));
        this.size = t.size;
      }
      (je.prototype.clear = R),
        (je.prototype.delete = j),
        (je.prototype.get = F),
        (je.prototype.has = z),
        (je.prototype.set = Re);
      const Fe = je;
      const ze = (function () {
        try {
          var e = ue(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch (e) {}
      })();
      const Be = function (e, t, n) {
        "__proto__" == t && ze
          ? ze(e, t, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (e[t] = n);
      };
      const Pe = function (e, t, n) {
        ((void 0 !== n && !C(e[t], n)) || (void 0 === n && !(t in e))) &&
          Be(e, t, n);
      };
      const Ie = (function (e) {
        return function (t, n, r) {
          for (var o = -1, i = Object(t), s = r(t), l = s.length; l--; ) {
            var a = s[e ? l : ++o];
            if (!1 === n(i[a], a, i)) break;
          }
          return t;
        };
      })();
      var $e =
          "object" == typeof exports && exports && !exports.nodeType && exports,
        Le =
          $e &&
          "object" == typeof module &&
          module &&
          !module.nodeType &&
          module,
        Ve = Le && Le.exports === $e ? I.Buffer : void 0,
        Je = Ve ? Ve.allocUnsafe : void 0;
      const He = function (e, t) {
        if (t) return e.slice();
        var n = e.length,
          r = Je ? Je(n) : new e.constructor(n);
        return e.copy(r), r;
      };
      const Ke = I.Uint8Array;
      const We = function (e) {
        var t = new e.constructor(e.byteLength);
        return new Ke(t).set(new Ke(e)), t;
      };
      const Ue = function (e, t) {
        var n = t ? We(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length);
      };
      const qe = function (e, t) {
        var n = -1,
          r = e.length;
        for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
        return t;
      };
      var Ge = Object.create;
      const Xe = (function () {
        function e() {}
        return function (t) {
          if (!X(t)) return {};
          if (Ge) return Ge(t);
          e.prototype = t;
          var n = new e();
          return (e.prototype = void 0), n;
        };
      })();
      const Ye = function (e, t) {
        return function (n) {
          return e(t(n));
        };
      };
      const Ze = Ye(Object.getPrototypeOf, Object);
      var Qe = Object.prototype;
      const et = function (e) {
        var t = e && e.constructor;
        return e === (("function" == typeof t && t.prototype) || Qe);
      };
      const tt = function (e) {
        return "function" != typeof e.constructor || et(e) ? {} : Xe(Ze(e));
      };
      const nt = function (e) {
        return null != e && "object" == typeof e;
      };
      const rt = function (e) {
        return nt(e) && "[object Arguments]" == G(e);
      };
      var ot = Object.prototype,
        it = ot.hasOwnProperty,
        st = ot.propertyIsEnumerable;
      const lt = rt(
        (function () {
          return arguments;
        })(),
      )
        ? rt
        : function (e) {
            return nt(e) && it.call(e, "callee") && !st.call(e, "callee");
          };
      const at = Array.isArray;
      const ct = function (e) {
        return (
          "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        );
      };
      const ht = function (e) {
        return null != e && ct(e.length) && !Y(e);
      };
      const pt = function (e) {
        return nt(e) && ht(e);
      };
      const ut = function () {
        return !1;
      };
      var dt =
          "object" == typeof exports && exports && !exports.nodeType && exports,
        ft =
          dt &&
          "object" == typeof module &&
          module &&
          !module.nodeType &&
          module,
        mt = ft && ft.exports === dt ? I.Buffer : void 0;
      const gt = (mt ? mt.isBuffer : void 0) || ut;
      var bt = Function.prototype,
        yt = Object.prototype,
        vt = bt.toString,
        wt = yt.hasOwnProperty,
        xt = vt.call(Object);
      const St = function (e) {
        if (!nt(e) || "[object Object]" != G(e)) return !1;
        var t = Ze(e);
        if (null === t) return !0;
        var n = wt.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && vt.call(n) == xt;
      };
      var kt = {};
      (kt["[object Float32Array]"] =
        kt["[object Float64Array]"] =
        kt["[object Int8Array]"] =
        kt["[object Int16Array]"] =
        kt["[object Int32Array]"] =
        kt["[object Uint8Array]"] =
        kt["[object Uint8ClampedArray]"] =
        kt["[object Uint16Array]"] =
        kt["[object Uint32Array]"] =
          !0),
        (kt["[object Arguments]"] =
          kt["[object Array]"] =
          kt["[object ArrayBuffer]"] =
          kt["[object Boolean]"] =
          kt["[object DataView]"] =
          kt["[object Date]"] =
          kt["[object Error]"] =
          kt["[object Function]"] =
          kt["[object Map]"] =
          kt["[object Number]"] =
          kt["[object Object]"] =
          kt["[object RegExp]"] =
          kt["[object Set]"] =
          kt["[object String]"] =
          kt["[object WeakMap]"] =
            !1);
      const Ct = function (e) {
        return nt(e) && ct(e.length) && !!kt[G(e)];
      };
      const Ot = function (e) {
        return function (t) {
          return e(t);
        };
      };
      var Mt =
          "object" == typeof exports && exports && !exports.nodeType && exports,
        Et =
          Mt &&
          "object" == typeof module &&
          module &&
          !module.nodeType &&
          module,
        At = Et && Et.exports === Mt && B.process,
        Nt = (function () {
          try {
            var e = Et && Et.require && Et.require("util").types;
            return e || (At && At.binding && At.binding("util"));
          } catch (e) {}
        })();
      var Tt = Nt && Nt.isTypedArray;
      const _t = Tt ? Ot(Tt) : Ct;
      const Dt = function (e, t) {
        if (
          ("constructor" !== t || "function" != typeof e[t]) &&
          "__proto__" != t
        )
          return e[t];
      };
      var Rt = Object.prototype.hasOwnProperty;
      const jt = function (e, t, n) {
        var r = e[t];
        (Rt.call(e, t) && C(r, n) && (void 0 !== n || t in e)) || Be(e, t, n);
      };
      const Ft = function (e, t, n, r) {
        var o = !n;
        n || (n = {});
        for (var i = -1, s = t.length; ++i < s; ) {
          var l = t[i],
            a = r ? r(n[l], e[l], l, n, e) : void 0;
          void 0 === a && (a = e[l]), o ? Be(n, l, a) : jt(n, l, a);
        }
        return n;
      };
      const zt = function (e, t) {
        for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
        return r;
      };
      var Bt = /^(?:0|[1-9]\d*)$/;
      const Pt = function (e, t) {
        var n = typeof e;
        return (
          !!(t = null == t ? 9007199254740991 : t) &&
          ("number" == n || ("symbol" != n && Bt.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      };
      var It = Object.prototype.hasOwnProperty;
      const $t = function (e, t) {
        var n = at(e),
          r = !n && lt(e),
          o = !n && !r && gt(e),
          i = !n && !r && !o && _t(e),
          s = n || r || o || i,
          l = s ? zt(e.length, String) : [],
          a = l.length;
        for (var c in e)
          (!t && !It.call(e, c)) ||
            (s &&
              ("length" == c ||
                (o && ("offset" == c || "parent" == c)) ||
                (i &&
                  ("buffer" == c || "byteLength" == c || "byteOffset" == c)) ||
                Pt(c, a))) ||
            l.push(c);
        return l;
      };
      const Lt = function (e) {
        var t = [];
        if (null != e) for (var n in Object(e)) t.push(n);
        return t;
      };
      var Vt = Object.prototype.hasOwnProperty;
      const Jt = function (e) {
        if (!X(e)) return Lt(e);
        var t = et(e),
          n = [];
        for (var r in e)
          ("constructor" != r || (!t && Vt.call(e, r))) && n.push(r);
        return n;
      };
      const Ht = function (e) {
        return ht(e) ? $t(e, !0) : Jt(e);
      };
      const Kt = function (e) {
        return Ft(e, Ht(e));
      };
      const Wt = function (e, t, n, r, o, i, s) {
        var l = Dt(e, n),
          a = Dt(t, n),
          c = s.get(a);
        if (c) Pe(e, n, c);
        else {
          var h = i ? i(l, a, n + "", e, t, s) : void 0,
            p = void 0 === h;
          if (p) {
            var u = at(a),
              d = !u && gt(a),
              f = !u && !d && _t(a);
            (h = a),
              u || d || f
                ? at(l)
                  ? (h = l)
                  : pt(l)
                    ? (h = qe(l))
                    : d
                      ? ((p = !1), (h = He(a, !0)))
                      : f
                        ? ((p = !1), (h = Ue(a, !0)))
                        : (h = [])
                : St(a) || lt(a)
                  ? ((h = l),
                    lt(l) ? (h = Kt(l)) : (X(l) && !Y(l)) || (h = tt(a)))
                  : (p = !1);
          }
          p && (s.set(a, h), o(h, a, r, i, s), s.delete(a)), Pe(e, n, h);
        }
      };
      const Ut = function e(t, n, r, o, i) {
        t !== n &&
          Ie(
            n,
            function (s, l) {
              if ((i || (i = new Fe()), X(s))) Wt(t, n, l, r, e, o, i);
              else {
                var a = o ? o(Dt(t, l), s, l + "", t, n, i) : void 0;
                void 0 === a && (a = s), Pe(t, l, a);
              }
            },
            Ht,
          );
      };
      const qt = function (e) {
        return e;
      };
      const Gt = function (e, t, n) {
        switch (n.length) {
          case 0:
            return e.call(t);
          case 1:
            return e.call(t, n[0]);
          case 2:
            return e.call(t, n[0], n[1]);
          case 3:
            return e.call(t, n[0], n[1], n[2]);
        }
        return e.apply(t, n);
      };
      var Xt = Math.max;
      const Yt = function (e, t, n) {
        return (
          (t = Xt(void 0 === t ? e.length - 1 : t, 0)),
          function () {
            for (
              var r = arguments, o = -1, i = Xt(r.length - t, 0), s = Array(i);
              ++o < i;
            )
              s[o] = r[t + o];
            o = -1;
            for (var l = Array(t + 1); ++o < t; ) l[o] = r[o];
            return (l[t] = n(s)), Gt(e, this, l);
          }
        );
      };
      const Zt = function (e) {
        return function () {
          return e;
        };
      };
      const Qt = ze
        ? function (e, t) {
            return ze(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: Zt(t),
              writable: !0,
            });
          }
        : qt;
      var en = Date.now;
      const tn = (function (e) {
        var t = 0,
          n = 0;
        return function () {
          var r = en(),
            o = 16 - (r - n);
          if (((n = r), o > 0)) {
            if (++t >= 800) return arguments[0];
          } else t = 0;
          return e.apply(void 0, arguments);
        };
      })(Qt);
      const nn = function (e, t) {
        return tn(Yt(e, t, qt), e + "");
      };
      const rn = function (e, t, n) {
        if (!X(n)) return !1;
        var r = typeof t;
        return (
          !!("number" == r
            ? ht(n) && Pt(t, n.length)
            : "string" == r && t in n) && C(n[t], e)
        );
      };
      const on = (function (e) {
        return nn(function (t, n) {
          var r = -1,
            o = n.length,
            i = o > 1 ? n[o - 1] : void 0,
            s = o > 2 ? n[2] : void 0;
          for (
            i = e.length > 3 && "function" == typeof i ? (o--, i) : void 0,
              s && rn(n[0], n[1], s) && ((i = o < 3 ? void 0 : i), (o = 1)),
              t = Object(t);
            ++r < o;
          ) {
            var l = n[r];
            l && e(t, l, r, i);
          }
          return t;
        });
      })(function (e, t, n) {
        Ut(e, t, n);
      });
      var sn = function (e) {
        var t = e.zDepth,
          n = e.radius,
          i = e.background,
          s = e.children,
          l = e.styles,
          a = void 0 === l ? {} : l,
          c = (0, o.Ay)(
            on(
              {
                default: {
                  wrap: { position: "relative", display: "inline-block" },
                  content: { position: "relative" },
                  bg: {
                    absolute: "0px 0px 0px 0px",
                    boxShadow: "0 " + t + "px " + 4 * t + "px rgba(0,0,0,.24)",
                    borderRadius: n,
                    background: i,
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
              a,
            ),
            { "zDepth-1": 1 === t },
          );
        return r.createElement(
          "div",
          { style: c.wrap },
          r.createElement("div", { style: c.bg }),
          r.createElement("div", { style: c.content }, s),
        );
      };
      (sn.propTypes = {
        background: S().string,
        zDepth: S().oneOf([0, 1, 2, 3, 4, 5]),
        radius: S().number,
        styles: S().object,
      }),
        (sn.defaultProps = {
          background: "#fff",
          zDepth: 1,
          radius: 2,
          styles: {},
        });
      const ln = sn;
      const an = function () {
        return I.Date.now();
      };
      var cn = /\s/;
      const hn = function (e) {
        for (var t = e.length; t-- && cn.test(e.charAt(t)); );
        return t;
      };
      var pn = /^\s+/;
      const un = function (e) {
        return e ? e.slice(0, hn(e) + 1).replace(pn, "") : e;
      };
      const dn = function (e) {
        return "symbol" == typeof e || (nt(e) && "[object Symbol]" == G(e));
      };
      var fn = /^[-+]0x[0-9a-f]+$/i,
        mn = /^0b[01]+$/i,
        gn = /^0o[0-7]+$/i,
        bn = parseInt;
      const yn = function (e) {
        if ("number" == typeof e) return e;
        if (dn(e)) return NaN;
        if (X(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = X(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = un(e);
        var n = mn.test(e);
        return n || gn.test(e)
          ? bn(e.slice(2), n ? 2 : 8)
          : fn.test(e)
            ? NaN
            : +e;
      };
      var vn = Math.max,
        wn = Math.min;
      const xn = function (e, t, n) {
        var r,
          o,
          i,
          s,
          l,
          a,
          c = 0,
          h = !1,
          p = !1,
          u = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        function d(t) {
          var n = r,
            i = o;
          return (r = o = void 0), (c = t), (s = e.apply(i, n));
        }
        function f(e) {
          var n = e - a;
          return void 0 === a || n >= t || n < 0 || (p && e - c >= i);
        }
        function m() {
          var e = an();
          if (f(e)) return g(e);
          l = setTimeout(
            m,
            (function (e) {
              var n = t - (e - a);
              return p ? wn(n, i - (e - c)) : n;
            })(e),
          );
        }
        function g(e) {
          return (l = void 0), u && r ? d(e) : ((r = o = void 0), s);
        }
        function b() {
          var e = an(),
            n = f(e);
          if (((r = arguments), (o = this), (a = e), n)) {
            if (void 0 === l)
              return (function (e) {
                return (c = e), (l = setTimeout(m, t)), h ? d(e) : s;
              })(a);
            if (p) return clearTimeout(l), (l = setTimeout(m, t)), d(a);
          }
          return void 0 === l && (l = setTimeout(m, t)), s;
        }
        return (
          (t = yn(t) || 0),
          X(n) &&
            ((h = !!n.leading),
            (i = (p = "maxWait" in n) ? vn(yn(n.maxWait) || 0, t) : i),
            (u = "trailing" in n ? !!n.trailing : u)),
          (b.cancel = function () {
            void 0 !== l && clearTimeout(l), (c = 0), (r = a = o = l = void 0);
          }),
          (b.flush = function () {
            return void 0 === l ? s : g(an());
          }),
          b
        );
      };
      const Sn = function (e, t, n) {
        var r = !0,
          o = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        return (
          X(n) &&
            ((r = "leading" in n ? !!n.leading : r),
            (o = "trailing" in n ? !!n.trailing : o)),
          xn(e, t, { leading: r, maxWait: t, trailing: o })
        );
      };
      var kn = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })();
      var Cn = (function (e) {
        function t(e) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var n = (function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (
            (n.handleChange = function (e) {
              "function" == typeof n.props.onChange &&
                n.throttle(
                  n.props.onChange,
                  (function (e, t, n) {
                    var r = n.getBoundingClientRect(),
                      o = r.width,
                      i = r.height,
                      s =
                        "number" == typeof e.pageX
                          ? e.pageX
                          : e.touches[0].pageX,
                      l =
                        "number" == typeof e.pageY
                          ? e.pageY
                          : e.touches[0].pageY,
                      a =
                        s -
                        (n.getBoundingClientRect().left + window.pageXOffset),
                      c =
                        l -
                        (n.getBoundingClientRect().top + window.pageYOffset);
                    a < 0 ? (a = 0) : a > o && (a = o),
                      c < 0 ? (c = 0) : c > i && (c = i);
                    var h = a / o,
                      p = 1 - c / i;
                    return { h: t.h, s: h, v: p, a: t.a, source: "hsv" };
                  })(e, n.props.hsl, n.container),
                  e,
                );
            }),
            (n.handleMouseDown = function (e) {
              n.handleChange(e);
              var t = n.getContainerRenderWindow();
              t.addEventListener("mousemove", n.handleChange),
                t.addEventListener("mouseup", n.handleMouseUp);
            }),
            (n.handleMouseUp = function () {
              n.unbindEventListeners();
            }),
            (n.throttle = Sn(function (e, t, n) {
              e(t, n);
            }, 50)),
            n
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
          kn(t, [
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
                  n = t.color,
                  i = t.white,
                  s = t.black,
                  l = t.pointer,
                  a = t.circle,
                  c = (0, o.Ay)(
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
                        color: n,
                        white: i,
                        black: s,
                        pointer: l,
                        circle: a,
                      },
                    },
                    { custom: !!this.props.style },
                  );
                return r.createElement(
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
                  r.createElement(
                    "style",
                    null,
                    "\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        ",
                  ),
                  r.createElement(
                    "div",
                    { style: c.white, className: "saturation-white" },
                    r.createElement("div", {
                      style: c.black,
                      className: "saturation-black",
                    }),
                    r.createElement(
                      "div",
                      { style: c.pointer },
                      this.props.pointer
                        ? r.createElement(this.props.pointer, this.props)
                        : r.createElement("div", { style: c.circle }),
                    ),
                  ),
                );
              },
            },
          ]),
          t
        );
      })(r.PureComponent || r.Component);
      const On = Cn;
      const Mn = function (e, t) {
        for (
          var n = -1, r = null == e ? 0 : e.length;
          ++n < r && !1 !== t(e[n], n, e);
        );
        return e;
      };
      const En = Ye(Object.keys, Object);
      var An = Object.prototype.hasOwnProperty;
      const Nn = function (e) {
        if (!et(e)) return En(e);
        var t = [];
        for (var n in Object(e))
          An.call(e, n) && "constructor" != n && t.push(n);
        return t;
      };
      const Tn = function (e) {
        return ht(e) ? $t(e) : Nn(e);
      };
      const _n = (function (e, t) {
        return function (n, r) {
          if (null == n) return n;
          if (!ht(n)) return e(n, r);
          for (
            var o = n.length, i = t ? o : -1, s = Object(n);
            (t ? i-- : ++i < o) && !1 !== r(s[i], i, s);
          );
          return n;
        };
      })(function (e, t) {
        return e && Ie(e, t, Tn);
      });
      const Dn = function (e) {
        return "function" == typeof e ? e : qt;
      };
      const Rn = function (e, t) {
        return (at(e) ? Mn : _n)(e, Dn(t));
      };
      function jn(e) {
        return (
          (jn =
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
          jn(e)
        );
      }
      var Fn = /^\s+/,
        zn = /\s+$/;
      function Bn(e, t) {
        if (((t = t || {}), (e = e || "") instanceof Bn)) return e;
        if (!(this instanceof Bn)) return new Bn(e, t);
        var n = (function (e) {
          var t = { r: 0, g: 0, b: 0 },
            n = 1,
            r = null,
            o = null,
            i = null,
            s = !1,
            l = !1;
          "string" == typeof e &&
            (e = (function (e) {
              e = e.replace(Fn, "").replace(zn, "").toLowerCase();
              var t,
                n = !1;
              if (er[e]) (e = er[e]), (n = !0);
              else if ("transparent" == e)
                return { r: 0, g: 0, b: 0, a: 0, format: "name" };
              if ((t = dr.rgb.exec(e))) return { r: t[1], g: t[2], b: t[3] };
              if ((t = dr.rgba.exec(e)))
                return { r: t[1], g: t[2], b: t[3], a: t[4] };
              if ((t = dr.hsl.exec(e))) return { h: t[1], s: t[2], l: t[3] };
              if ((t = dr.hsla.exec(e)))
                return { h: t[1], s: t[2], l: t[3], a: t[4] };
              if ((t = dr.hsv.exec(e))) return { h: t[1], s: t[2], v: t[3] };
              if ((t = dr.hsva.exec(e)))
                return { h: t[1], s: t[2], v: t[3], a: t[4] };
              if ((t = dr.hex8.exec(e)))
                return {
                  r: ir(t[1]),
                  g: ir(t[2]),
                  b: ir(t[3]),
                  a: cr(t[4]),
                  format: n ? "name" : "hex8",
                };
              if ((t = dr.hex6.exec(e)))
                return {
                  r: ir(t[1]),
                  g: ir(t[2]),
                  b: ir(t[3]),
                  format: n ? "name" : "hex",
                };
              if ((t = dr.hex4.exec(e)))
                return {
                  r: ir(t[1] + "" + t[1]),
                  g: ir(t[2] + "" + t[2]),
                  b: ir(t[3] + "" + t[3]),
                  a: cr(t[4] + "" + t[4]),
                  format: n ? "name" : "hex8",
                };
              if ((t = dr.hex3.exec(e)))
                return {
                  r: ir(t[1] + "" + t[1]),
                  g: ir(t[2] + "" + t[2]),
                  b: ir(t[3] + "" + t[3]),
                  format: n ? "name" : "hex",
                };
              return !1;
            })(e));
          "object" == jn(e) &&
            (fr(e.r) && fr(e.g) && fr(e.b)
              ? ((a = e.r),
                (c = e.g),
                (h = e.b),
                (t = {
                  r: 255 * rr(a, 255),
                  g: 255 * rr(c, 255),
                  b: 255 * rr(h, 255),
                }),
                (s = !0),
                (l = "%" === String(e.r).substr(-1) ? "prgb" : "rgb"))
              : fr(e.h) && fr(e.s) && fr(e.v)
                ? ((r = lr(e.s)),
                  (o = lr(e.v)),
                  (t = (function (e, t, n) {
                    (e = 6 * rr(e, 360)), (t = rr(t, 100)), (n = rr(n, 100));
                    var r = Math.floor(e),
                      o = e - r,
                      i = n * (1 - t),
                      s = n * (1 - o * t),
                      l = n * (1 - (1 - o) * t),
                      a = r % 6,
                      c = [n, s, i, i, l, n][a],
                      h = [l, n, n, s, i, i][a],
                      p = [i, i, l, n, n, s][a];
                    return { r: 255 * c, g: 255 * h, b: 255 * p };
                  })(e.h, r, o)),
                  (s = !0),
                  (l = "hsv"))
                : fr(e.h) &&
                  fr(e.s) &&
                  fr(e.l) &&
                  ((r = lr(e.s)),
                  (i = lr(e.l)),
                  (t = (function (e, t, n) {
                    var r, o, i;
                    function s(e, t, n) {
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
                    if (
                      ((e = rr(e, 360)),
                      (t = rr(t, 100)),
                      (n = rr(n, 100)),
                      0 === t)
                    )
                      r = o = i = n;
                    else {
                      var l = n < 0.5 ? n * (1 + t) : n + t - n * t,
                        a = 2 * n - l;
                      (r = s(a, l, e + 1 / 3)),
                        (o = s(a, l, e)),
                        (i = s(a, l, e - 1 / 3));
                    }
                    return { r: 255 * r, g: 255 * o, b: 255 * i };
                  })(e.h, r, i)),
                  (s = !0),
                  (l = "hsl")),
            e.hasOwnProperty("a") && (n = e.a));
          var a, c, h;
          return (
            (n = nr(n)),
            {
              ok: s,
              format: e.format || l,
              r: Math.min(255, Math.max(t.r, 0)),
              g: Math.min(255, Math.max(t.g, 0)),
              b: Math.min(255, Math.max(t.b, 0)),
              a: n,
            }
          );
        })(e);
        (this._originalInput = e),
          (this._r = n.r),
          (this._g = n.g),
          (this._b = n.b),
          (this._a = n.a),
          (this._roundA = Math.round(100 * this._a) / 100),
          (this._format = t.format || n.format),
          (this._gradientType = t.gradientType),
          this._r < 1 && (this._r = Math.round(this._r)),
          this._g < 1 && (this._g = Math.round(this._g)),
          this._b < 1 && (this._b = Math.round(this._b)),
          (this._ok = n.ok);
      }
      function Pn(e, t, n) {
        (e = rr(e, 255)), (t = rr(t, 255)), (n = rr(n, 255));
        var r,
          o,
          i = Math.max(e, t, n),
          s = Math.min(e, t, n),
          l = (i + s) / 2;
        if (i == s) r = o = 0;
        else {
          var a = i - s;
          switch (((o = l > 0.5 ? a / (2 - i - s) : a / (i + s)), i)) {
            case e:
              r = (t - n) / a + (t < n ? 6 : 0);
              break;
            case t:
              r = (n - e) / a + 2;
              break;
            case n:
              r = (e - t) / a + 4;
          }
          r /= 6;
        }
        return { h: r, s: o, l };
      }
      function In(e, t, n) {
        (e = rr(e, 255)), (t = rr(t, 255)), (n = rr(n, 255));
        var r,
          o,
          i = Math.max(e, t, n),
          s = Math.min(e, t, n),
          l = i,
          a = i - s;
        if (((o = 0 === i ? 0 : a / i), i == s)) r = 0;
        else {
          switch (i) {
            case e:
              r = (t - n) / a + (t < n ? 6 : 0);
              break;
            case t:
              r = (n - e) / a + 2;
              break;
            case n:
              r = (e - t) / a + 4;
          }
          r /= 6;
        }
        return { h: r, s: o, v: l };
      }
      function $n(e, t, n, r) {
        var o = [
          sr(Math.round(e).toString(16)),
          sr(Math.round(t).toString(16)),
          sr(Math.round(n).toString(16)),
        ];
        return r &&
          o[0].charAt(0) == o[0].charAt(1) &&
          o[1].charAt(0) == o[1].charAt(1) &&
          o[2].charAt(0) == o[2].charAt(1)
          ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
          : o.join("");
      }
      function Ln(e, t, n, r) {
        return [
          sr(ar(r)),
          sr(Math.round(e).toString(16)),
          sr(Math.round(t).toString(16)),
          sr(Math.round(n).toString(16)),
        ].join("");
      }
      function Vn(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = Bn(e).toHsl();
        return (n.s -= t / 100), (n.s = or(n.s)), Bn(n);
      }
      function Jn(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = Bn(e).toHsl();
        return (n.s += t / 100), (n.s = or(n.s)), Bn(n);
      }
      function Hn(e) {
        return Bn(e).desaturate(100);
      }
      function Kn(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = Bn(e).toHsl();
        return (n.l += t / 100), (n.l = or(n.l)), Bn(n);
      }
      function Wn(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = Bn(e).toRgb();
        return (
          (n.r = Math.max(
            0,
            Math.min(255, n.r - Math.round((-t / 100) * 255)),
          )),
          (n.g = Math.max(
            0,
            Math.min(255, n.g - Math.round((-t / 100) * 255)),
          )),
          (n.b = Math.max(
            0,
            Math.min(255, n.b - Math.round((-t / 100) * 255)),
          )),
          Bn(n)
        );
      }
      function Un(e, t) {
        t = 0 === t ? 0 : t || 10;
        var n = Bn(e).toHsl();
        return (n.l -= t / 100), (n.l = or(n.l)), Bn(n);
      }
      function qn(e, t) {
        var n = Bn(e).toHsl(),
          r = (n.h + t) % 360;
        return (n.h = r < 0 ? 360 + r : r), Bn(n);
      }
      function Gn(e) {
        var t = Bn(e).toHsl();
        return (t.h = (t.h + 180) % 360), Bn(t);
      }
      function Xn(e, t) {
        if (isNaN(t) || t <= 0)
          throw new Error("Argument to polyad must be a positive number");
        for (var n = Bn(e).toHsl(), r = [Bn(e)], o = 360 / t, i = 1; i < t; i++)
          r.push(Bn({ h: (n.h + i * o) % 360, s: n.s, l: n.l }));
        return r;
      }
      function Yn(e) {
        var t = Bn(e).toHsl(),
          n = t.h;
        return [
          Bn(e),
          Bn({ h: (n + 72) % 360, s: t.s, l: t.l }),
          Bn({ h: (n + 216) % 360, s: t.s, l: t.l }),
        ];
      }
      function Zn(e, t, n) {
        (t = t || 6), (n = n || 30);
        var r = Bn(e).toHsl(),
          o = 360 / n,
          i = [Bn(e)];
        for (r.h = (r.h - ((o * t) >> 1) + 720) % 360; --t; )
          (r.h = (r.h + o) % 360), i.push(Bn(r));
        return i;
      }
      function Qn(e, t) {
        t = t || 6;
        for (
          var n = Bn(e).toHsv(), r = n.h, o = n.s, i = n.v, s = [], l = 1 / t;
          t--;
        )
          s.push(Bn({ h: r, s: o, v: i })), (i = (i + l) % 1);
        return s;
      }
      (Bn.prototype = {
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
            n,
            r = this.toRgb();
          return (
            (e = r.r / 255),
            (t = r.g / 255),
            (n = r.b / 255),
            0.2126 *
              (e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)) +
              0.7152 *
                (t <= 0.03928
                  ? t / 12.92
                  : Math.pow((t + 0.055) / 1.055, 2.4)) +
              0.0722 *
                (n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4))
          );
        },
        setAlpha: function (e) {
          return (
            (this._a = nr(e)),
            (this._roundA = Math.round(100 * this._a) / 100),
            this
          );
        },
        toHsv: function () {
          var e = In(this._r, this._g, this._b);
          return { h: 360 * e.h, s: e.s, v: e.v, a: this._a };
        },
        toHsvString: function () {
          var e = In(this._r, this._g, this._b),
            t = Math.round(360 * e.h),
            n = Math.round(100 * e.s),
            r = Math.round(100 * e.v);
          return 1 == this._a
            ? "hsv(" + t + ", " + n + "%, " + r + "%)"
            : "hsva(" + t + ", " + n + "%, " + r + "%, " + this._roundA + ")";
        },
        toHsl: function () {
          var e = Pn(this._r, this._g, this._b);
          return { h: 360 * e.h, s: e.s, l: e.l, a: this._a };
        },
        toHslString: function () {
          var e = Pn(this._r, this._g, this._b),
            t = Math.round(360 * e.h),
            n = Math.round(100 * e.s),
            r = Math.round(100 * e.l);
          return 1 == this._a
            ? "hsl(" + t + ", " + n + "%, " + r + "%)"
            : "hsla(" + t + ", " + n + "%, " + r + "%, " + this._roundA + ")";
        },
        toHex: function (e) {
          return $n(this._r, this._g, this._b, e);
        },
        toHexString: function (e) {
          return "#" + this.toHex(e);
        },
        toHex8: function (e) {
          return (function (e, t, n, r, o) {
            var i = [
              sr(Math.round(e).toString(16)),
              sr(Math.round(t).toString(16)),
              sr(Math.round(n).toString(16)),
              sr(ar(r)),
            ];
            if (
              o &&
              i[0].charAt(0) == i[0].charAt(1) &&
              i[1].charAt(0) == i[1].charAt(1) &&
              i[2].charAt(0) == i[2].charAt(1) &&
              i[3].charAt(0) == i[3].charAt(1)
            )
              return (
                i[0].charAt(0) +
                i[1].charAt(0) +
                i[2].charAt(0) +
                i[3].charAt(0)
              );
            return i.join("");
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
            r: Math.round(100 * rr(this._r, 255)) + "%",
            g: Math.round(100 * rr(this._g, 255)) + "%",
            b: Math.round(100 * rr(this._b, 255)) + "%",
            a: this._a,
          };
        },
        toPercentageRgbString: function () {
          return 1 == this._a
            ? "rgb(" +
                Math.round(100 * rr(this._r, 255)) +
                "%, " +
                Math.round(100 * rr(this._g, 255)) +
                "%, " +
                Math.round(100 * rr(this._b, 255)) +
                "%)"
            : "rgba(" +
                Math.round(100 * rr(this._r, 255)) +
                "%, " +
                Math.round(100 * rr(this._g, 255)) +
                "%, " +
                Math.round(100 * rr(this._b, 255)) +
                "%, " +
                this._roundA +
                ")";
        },
        toName: function () {
          return 0 === this._a
            ? "transparent"
            : !(this._a < 1) && (tr[$n(this._r, this._g, this._b, !0)] || !1);
        },
        toFilter: function (e) {
          var t = "#" + Ln(this._r, this._g, this._b, this._a),
            n = t,
            r = this._gradientType ? "GradientType = 1, " : "";
          if (e) {
            var o = Bn(e);
            n = "#" + Ln(o._r, o._g, o._b, o._a);
          }
          return (
            "progid:DXImageTransform.Microsoft.gradient(" +
            r +
            "startColorstr=" +
            t +
            ",endColorstr=" +
            n +
            ")"
          );
        },
        toString: function (e) {
          var t = !!e;
          e = e || this._format;
          var n = !1,
            r = this._a < 1 && this._a >= 0;
          return t ||
            !r ||
            ("hex" !== e &&
              "hex6" !== e &&
              "hex3" !== e &&
              "hex4" !== e &&
              "hex8" !== e &&
              "name" !== e)
            ? ("rgb" === e && (n = this.toRgbString()),
              "prgb" === e && (n = this.toPercentageRgbString()),
              ("hex" !== e && "hex6" !== e) || (n = this.toHexString()),
              "hex3" === e && (n = this.toHexString(!0)),
              "hex4" === e && (n = this.toHex8String(!0)),
              "hex8" === e && (n = this.toHex8String()),
              "name" === e && (n = this.toName()),
              "hsl" === e && (n = this.toHslString()),
              "hsv" === e && (n = this.toHsvString()),
              n || this.toHexString())
            : "name" === e && 0 === this._a
              ? this.toName()
              : this.toRgbString();
        },
        clone: function () {
          return Bn(this.toString());
        },
        _applyModification: function (e, t) {
          var n = e.apply(null, [this].concat([].slice.call(t)));
          return (
            (this._r = n._r),
            (this._g = n._g),
            (this._b = n._b),
            this.setAlpha(n._a),
            this
          );
        },
        lighten: function () {
          return this._applyModification(Kn, arguments);
        },
        brighten: function () {
          return this._applyModification(Wn, arguments);
        },
        darken: function () {
          return this._applyModification(Un, arguments);
        },
        desaturate: function () {
          return this._applyModification(Vn, arguments);
        },
        saturate: function () {
          return this._applyModification(Jn, arguments);
        },
        greyscale: function () {
          return this._applyModification(Hn, arguments);
        },
        spin: function () {
          return this._applyModification(qn, arguments);
        },
        _applyCombination: function (e, t) {
          return e.apply(null, [this].concat([].slice.call(t)));
        },
        analogous: function () {
          return this._applyCombination(Zn, arguments);
        },
        complement: function () {
          return this._applyCombination(Gn, arguments);
        },
        monochromatic: function () {
          return this._applyCombination(Qn, arguments);
        },
        splitcomplement: function () {
          return this._applyCombination(Yn, arguments);
        },
        triad: function () {
          return this._applyCombination(Xn, [3]);
        },
        tetrad: function () {
          return this._applyCombination(Xn, [4]);
        },
      }),
        (Bn.fromRatio = function (e, t) {
          if ("object" == jn(e)) {
            var n = {};
            for (var r in e)
              e.hasOwnProperty(r) && (n[r] = "a" === r ? e[r] : lr(e[r]));
            e = n;
          }
          return Bn(e, t);
        }),
        (Bn.equals = function (e, t) {
          return !(!e || !t) && Bn(e).toRgbString() == Bn(t).toRgbString();
        }),
        (Bn.random = function () {
          return Bn.fromRatio({
            r: Math.random(),
            g: Math.random(),
            b: Math.random(),
          });
        }),
        (Bn.mix = function (e, t, n) {
          n = 0 === n ? 0 : n || 50;
          var r = Bn(e).toRgb(),
            o = Bn(t).toRgb(),
            i = n / 100;
          return Bn({
            r: (o.r - r.r) * i + r.r,
            g: (o.g - r.g) * i + r.g,
            b: (o.b - r.b) * i + r.b,
            a: (o.a - r.a) * i + r.a,
          });
        }),
        (Bn.readability = function (e, t) {
          var n = Bn(e),
            r = Bn(t);
          return (
            (Math.max(n.getLuminance(), r.getLuminance()) + 0.05) /
            (Math.min(n.getLuminance(), r.getLuminance()) + 0.05)
          );
        }),
        (Bn.isReadable = function (e, t, n) {
          var r,
            o,
            i = Bn.readability(e, t);
          switch (
            ((o = !1),
            (r = (function (e) {
              var t, n;
              (t = (
                (e = e || { level: "AA", size: "small" }).level || "AA"
              ).toUpperCase()),
                (n = (e.size || "small").toLowerCase()),
                "AA" !== t && "AAA" !== t && (t = "AA");
              "small" !== n && "large" !== n && (n = "small");
              return { level: t, size: n };
            })(n)).level + r.size)
          ) {
            case "AAsmall":
            case "AAAlarge":
              o = i >= 4.5;
              break;
            case "AAlarge":
              o = i >= 3;
              break;
            case "AAAsmall":
              o = i >= 7;
          }
          return o;
        }),
        (Bn.mostReadable = function (e, t, n) {
          var r,
            o,
            i,
            s,
            l = null,
            a = 0;
          (o = (n = n || {}).includeFallbackColors),
            (i = n.level),
            (s = n.size);
          for (var c = 0; c < t.length; c++)
            (r = Bn.readability(e, t[c])) > a && ((a = r), (l = Bn(t[c])));
          return Bn.isReadable(e, l, { level: i, size: s }) || !o
            ? l
            : ((n.includeFallbackColors = !1),
              Bn.mostReadable(e, ["#fff", "#000"], n));
        });
      var er = (Bn.names = {
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
        tr = (Bn.hexNames = (function (e) {
          var t = {};
          for (var n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
          return t;
        })(er));
      function nr(e) {
        return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
      }
      function rr(e, t) {
        (function (e) {
          return (
            "string" == typeof e && -1 != e.indexOf(".") && 1 === parseFloat(e)
          );
        })(e) && (e = "100%");
        var n = (function (e) {
          return "string" == typeof e && -1 != e.indexOf("%");
        })(e);
        return (
          (e = Math.min(t, Math.max(0, parseFloat(e)))),
          n && (e = parseInt(e * t, 10) / 100),
          Math.abs(e - t) < 1e-6 ? 1 : (e % t) / parseFloat(t)
        );
      }
      function or(e) {
        return Math.min(1, Math.max(0, e));
      }
      function ir(e) {
        return parseInt(e, 16);
      }
      function sr(e) {
        return 1 == e.length ? "0" + e : "" + e;
      }
      function lr(e) {
        return e <= 1 && (e = 100 * e + "%"), e;
      }
      function ar(e) {
        return Math.round(255 * parseFloat(e)).toString(16);
      }
      function cr(e) {
        return ir(e) / 255;
      }
      var hr,
        pr,
        ur,
        dr =
          ((pr =
            "[\\s|\\(]+(" +
            (hr = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") +
            ")[,|\\s]+(" +
            hr +
            ")[,|\\s]+(" +
            hr +
            ")\\s*\\)?"),
          (ur =
            "[\\s|\\(]+(" +
            hr +
            ")[,|\\s]+(" +
            hr +
            ")[,|\\s]+(" +
            hr +
            ")[,|\\s]+(" +
            hr +
            ")\\s*\\)?"),
          {
            CSS_UNIT: new RegExp(hr),
            rgb: new RegExp("rgb" + pr),
            rgba: new RegExp("rgba" + ur),
            hsl: new RegExp("hsl" + pr),
            hsla: new RegExp("hsla" + ur),
            hsv: new RegExp("hsv" + pr),
            hsva: new RegExp("hsva" + ur),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          });
      function fr(e) {
        return !!dr.CSS_UNIT.exec(e);
      }
      var mr = function (e) {
          var t = 0,
            n = 0;
          return (
            Rn(["r", "g", "b", "a", "h", "s", "l", "v"], function (r) {
              if (
                e[r] &&
                ((t += 1), isNaN(e[r]) || (n += 1), "s" === r || "l" === r)
              ) {
                /^\d+%$/.test(e[r]) && (n += 1);
              }
            }),
            t === n && e
          );
        },
        gr = function (e, t) {
          var n = e.hex ? Bn(e.hex) : Bn(e),
            r = n.toHsl(),
            o = n.toHsv(),
            i = n.toRgb(),
            s = n.toHex();
          return (
            0 === r.s && ((r.h = t || 0), (o.h = t || 0)),
            {
              hsl: r,
              hex: "000000" === s && 0 === i.a ? "transparent" : "#" + s,
              rgb: i,
              hsv: o,
              oldHue: e.h || t || r.h,
              source: e.source,
            }
          );
        },
        br = function (e) {
          if ("transparent" === e) return !0;
          var t = "#" === String(e).charAt(0) ? 1 : 0;
          return e.length !== 4 + t && e.length < 7 + t && Bn(e).isValid();
        },
        yr = function (e) {
          if (!e) return "#fff";
          var t = gr(e);
          return "transparent" === t.hex
            ? "rgba(0,0,0,0.4)"
            : (299 * t.rgb.r + 587 * t.rgb.g + 114 * t.rgb.b) / 1e3 >= 128
              ? "#000"
              : "#fff";
        },
        vr = function (e, t) {
          return Bn(t + " (" + e.replace("°", "") + ")")._ok;
        },
        wr =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        xr = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
      const Sr = function (e) {
        var t = (function (t) {
          function n(e) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, n);
            var t = (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            })(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
            return (
              (t.handleChange = function (e, n) {
                if (mr(e)) {
                  var r = gr(e, e.h || t.state.oldHue);
                  t.setState(r),
                    t.props.onChangeComplete &&
                      t.debounce(t.props.onChangeComplete, r, n),
                    t.props.onChange && t.props.onChange(r, n);
                }
              }),
              (t.handleSwatchHover = function (e, n) {
                if (mr(e)) {
                  var r = gr(e, e.h || t.state.oldHue);
                  t.props.onSwatchHover && t.props.onSwatchHover(r, n);
                }
              }),
              (t.state = wr({}, gr(e.color, 0))),
              (t.debounce = xn(function (e, t, n) {
                e(t, n);
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
            })(n, t),
            xr(
              n,
              [
                {
                  key: "render",
                  value: function () {
                    var t = {};
                    return (
                      this.props.onSwatchHover &&
                        (t.onSwatchHover = this.handleSwatchHover),
                      r.createElement(
                        e,
                        wr(
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
                    return wr({}, gr(e.color, t.oldHue));
                  },
                },
              ],
            ),
            n
          );
        })(r.PureComponent || r.Component);
        return (
          (t.propTypes = wr({}, e.propTypes)),
          (t.defaultProps = wr({}, e.defaultProps, {
            color: { h: 250, s: 0.5, l: 0.2, a: 1 },
          })),
          t
        );
      };
      var kr =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        Cr = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
      function Or(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      var Mr =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        };
      const Er = (function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "span";
        return (function (n) {
          function o() {
            var e, t, n;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, o);
            for (var r = arguments.length, i = Array(r), s = 0; s < r; s++)
              i[s] = arguments[s];
            return (
              (t = n =
                Or(
                  this,
                  (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(
                    e,
                    [this].concat(i),
                  ),
                )),
              (n.state = { focus: !1 }),
              (n.handleFocus = function () {
                return n.setState({ focus: !0 });
              }),
              (n.handleBlur = function () {
                return n.setState({ focus: !1 });
              }),
              Or(n, t)
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
            })(o, n),
            Cr(o, [
              {
                key: "render",
                value: function () {
                  return r.createElement(
                    t,
                    { onFocus: this.handleFocus, onBlur: this.handleBlur },
                    r.createElement(e, kr({}, this.props, this.state)),
                  );
                },
              },
            ]),
            o
          );
        })(r.Component);
      })(function (e) {
        var t = e.color,
          n = e.style,
          i = e.onClick,
          s = void 0 === i ? function () {} : i,
          l = e.onHover,
          a = e.title,
          h = void 0 === a ? t : a,
          p = e.children,
          u = e.focus,
          d = e.focusStyle,
          f = void 0 === d ? {} : d,
          m = "transparent" === t,
          g = (0, o.Ay)({
            default: {
              swatch: Mr(
                {
                  background: t,
                  height: "100%",
                  width: "100%",
                  cursor: "pointer",
                  position: "relative",
                  outline: "none",
                },
                n,
                u ? f : {},
              ),
            },
          }),
          b = {};
        return (
          l &&
            (b.onMouseOver = function (e) {
              return l(t, e);
            }),
          r.createElement(
            "div",
            Mr(
              {
                style: g.swatch,
                onClick: function (e) {
                  return s(t, e);
                },
                title: h,
                tabIndex: 0,
                onKeyDown: function (e) {
                  return 13 === e.keyCode && s(t, e);
                },
              },
              b,
            ),
            p,
            m &&
              r.createElement(c, {
                borderRadius: g.swatch.borderRadius,
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
              }),
          )
        );
      });
      const Ar = function (e) {
        var t = e.direction,
          n = (0, o.Ay)(
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
        return r.createElement("div", { style: n.picker });
      };
      var Nr =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        Tr = function (e) {
          var t = e.rgb,
            n = e.hsl,
            i = e.width,
            s = e.height,
            l = e.onChange,
            a = e.direction,
            c = e.style,
            h = e.renderers,
            p = e.pointer,
            u = e.className,
            f = void 0 === u ? "" : u,
            m = (0, o.Ay)({
              default: {
                picker: { position: "relative", width: i, height: s },
                alpha: { radius: "2px", style: c },
              },
            });
          return r.createElement(
            "div",
            { style: m.picker, className: "alpha-picker " + f },
            r.createElement(
              d,
              Nr({}, m.alpha, {
                rgb: t,
                hsl: n,
                pointer: p,
                renderers: h,
                onChange: l,
                direction: a,
              }),
            ),
          );
        };
      Tr.defaultProps = {
        width: "316px",
        height: "16px",
        direction: "horizontal",
        pointer: Ar,
      };
      Sr(Tr);
      const _r = function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r; )
          o[n] = t(e[n], n, e);
        return o;
      };
      const Dr = function (e) {
        return this.__data__.set(e, "__lodash_hash_undefined__"), this;
      };
      const Rr = function (e) {
        return this.__data__.has(e);
      };
      function jr(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.__data__ = new De(); ++t < n; ) this.add(e[t]);
      }
      (jr.prototype.add = jr.prototype.push = Dr), (jr.prototype.has = Rr);
      const Fr = jr;
      const zr = function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
          if (t(e[n], n, e)) return !0;
        return !1;
      };
      const Br = function (e, t) {
        return e.has(t);
      };
      const Pr = function (e, t, n, r, o, i) {
        var s = 1 & n,
          l = e.length,
          a = t.length;
        if (l != a && !(s && a > l)) return !1;
        var c = i.get(e),
          h = i.get(t);
        if (c && h) return c == t && h == e;
        var p = -1,
          u = !0,
          d = 2 & n ? new Fr() : void 0;
        for (i.set(e, t), i.set(t, e); ++p < l; ) {
          var f = e[p],
            m = t[p];
          if (r) var g = s ? r(m, f, p, t, e, i) : r(f, m, p, e, t, i);
          if (void 0 !== g) {
            if (g) continue;
            u = !1;
            break;
          }
          if (d) {
            if (
              !zr(t, function (e, t) {
                if (!Br(d, t) && (f === e || o(f, e, n, r, i)))
                  return d.push(t);
              })
            ) {
              u = !1;
              break;
            }
          } else if (f !== m && !o(f, m, n, r, i)) {
            u = !1;
            break;
          }
        }
        return i.delete(e), i.delete(t), u;
      };
      const Ir = function (e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e, r) {
            n[++t] = [r, e];
          }),
          n
        );
      };
      const $r = function (e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e) {
            n[++t] = e;
          }),
          n
        );
      };
      var Lr = $ ? $.prototype : void 0,
        Vr = Lr ? Lr.valueOf : void 0;
      const Jr = function (e, t, n, r, o, i, s) {
        switch (n) {
          case "[object DataView]":
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            (e = e.buffer), (t = t.buffer);
          case "[object ArrayBuffer]":
            return !(e.byteLength != t.byteLength || !i(new Ke(e), new Ke(t)));
          case "[object Boolean]":
          case "[object Date]":
          case "[object Number]":
            return C(+e, +t);
          case "[object Error]":
            return e.name == t.name && e.message == t.message;
          case "[object RegExp]":
          case "[object String]":
            return e == t + "";
          case "[object Map]":
            var l = Ir;
          case "[object Set]":
            var a = 1 & r;
            if ((l || (l = $r), e.size != t.size && !a)) return !1;
            var c = s.get(e);
            if (c) return c == t;
            (r |= 2), s.set(e, t);
            var h = Pr(l(e), l(t), r, o, i, s);
            return s.delete(e), h;
          case "[object Symbol]":
            if (Vr) return Vr.call(e) == Vr.call(t);
        }
        return !1;
      };
      const Hr = function (e, t) {
        for (var n = -1, r = t.length, o = e.length; ++n < r; ) e[o + n] = t[n];
        return e;
      };
      const Kr = function (e, t, n) {
        var r = t(e);
        return at(e) ? r : Hr(r, n(e));
      };
      const Wr = function (e, t) {
        for (
          var n = -1, r = null == e ? 0 : e.length, o = 0, i = [];
          ++n < r;
        ) {
          var s = e[n];
          t(s, n, e) && (i[o++] = s);
        }
        return i;
      };
      const Ur = function () {
        return [];
      };
      var qr = Object.prototype.propertyIsEnumerable,
        Gr = Object.getOwnPropertySymbols;
      const Xr = Gr
        ? function (e) {
            return null == e
              ? []
              : ((e = Object(e)),
                Wr(Gr(e), function (t) {
                  return qr.call(e, t);
                }));
          }
        : Ur;
      const Yr = function (e) {
        return Kr(e, Tn, Xr);
      };
      var Zr = Object.prototype.hasOwnProperty;
      const Qr = function (e, t, n, r, o, i) {
        var s = 1 & n,
          l = Yr(e),
          a = l.length;
        if (a != Yr(t).length && !s) return !1;
        for (var c = a; c--; ) {
          var h = l[c];
          if (!(s ? h in t : Zr.call(t, h))) return !1;
        }
        var p = i.get(e),
          u = i.get(t);
        if (p && u) return p == t && u == e;
        var d = !0;
        i.set(e, t), i.set(t, e);
        for (var f = s; ++c < a; ) {
          var m = e[(h = l[c])],
            g = t[h];
          if (r) var b = s ? r(g, m, h, t, e, i) : r(m, g, h, e, t, i);
          if (!(void 0 === b ? m === g || o(m, g, n, r, i) : b)) {
            d = !1;
            break;
          }
          f || (f = "constructor" == h);
        }
        if (d && !f) {
          var y = e.constructor,
            v = t.constructor;
          y == v ||
            !("constructor" in e) ||
            !("constructor" in t) ||
            ("function" == typeof y &&
              y instanceof y &&
              "function" == typeof v &&
              v instanceof v) ||
            (d = !1);
        }
        return i.delete(e), i.delete(t), d;
      };
      const eo = ue(I, "DataView");
      const to = ue(I, "Promise");
      const no = ue(I, "Set");
      const ro = ue(I, "WeakMap");
      var oo = "[object Map]",
        io = "[object Promise]",
        so = "[object Set]",
        lo = "[object WeakMap]",
        ao = "[object DataView]",
        co = re(eo),
        ho = re(de),
        po = re(to),
        uo = re(no),
        fo = re(ro),
        mo = G;
      ((eo && mo(new eo(new ArrayBuffer(1))) != ao) ||
        (de && mo(new de()) != oo) ||
        (to && mo(to.resolve()) != io) ||
        (no && mo(new no()) != so) ||
        (ro && mo(new ro()) != lo)) &&
        (mo = function (e) {
          var t = G(e),
            n = "[object Object]" == t ? e.constructor : void 0,
            r = n ? re(n) : "";
          if (r)
            switch (r) {
              case co:
                return ao;
              case ho:
                return oo;
              case po:
                return io;
              case uo:
                return so;
              case fo:
                return lo;
            }
          return t;
        });
      const go = mo;
      var bo = "[object Arguments]",
        yo = "[object Array]",
        vo = "[object Object]",
        wo = Object.prototype.hasOwnProperty;
      const xo = function (e, t, n, r, o, i) {
        var s = at(e),
          l = at(t),
          a = s ? yo : go(e),
          c = l ? yo : go(t),
          h = (a = a == bo ? vo : a) == vo,
          p = (c = c == bo ? vo : c) == vo,
          u = a == c;
        if (u && gt(e)) {
          if (!gt(t)) return !1;
          (s = !0), (h = !1);
        }
        if (u && !h)
          return (
            i || (i = new Fe()),
            s || _t(e) ? Pr(e, t, n, r, o, i) : Jr(e, t, a, n, r, o, i)
          );
        if (!(1 & n)) {
          var d = h && wo.call(e, "__wrapped__"),
            f = p && wo.call(t, "__wrapped__");
          if (d || f) {
            var m = d ? e.value() : e,
              g = f ? t.value() : t;
            return i || (i = new Fe()), o(m, g, n, r, i);
          }
        }
        return !!u && (i || (i = new Fe()), Qr(e, t, n, r, o, i));
      };
      const So = function e(t, n, r, o, i) {
        return (
          t === n ||
          (null == t || null == n || (!nt(t) && !nt(n))
            ? t != t && n != n
            : xo(t, n, r, o, e, i))
        );
      };
      const ko = function (e, t, n, r) {
        var o = n.length,
          i = o,
          s = !r;
        if (null == e) return !i;
        for (e = Object(e); o--; ) {
          var l = n[o];
          if (s && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return !1;
        }
        for (; ++o < i; ) {
          var a = (l = n[o])[0],
            c = e[a],
            h = l[1];
          if (s && l[2]) {
            if (void 0 === c && !(a in e)) return !1;
          } else {
            var p = new Fe();
            if (r) var u = r(c, h, a, e, t, p);
            if (!(void 0 === u ? So(h, c, 3, r, p) : u)) return !1;
          }
        }
        return !0;
      };
      const Co = function (e) {
        return e == e && !X(e);
      };
      const Oo = function (e) {
        for (var t = Tn(e), n = t.length; n--; ) {
          var r = t[n],
            o = e[r];
          t[n] = [r, o, Co(o)];
        }
        return t;
      };
      const Mo = function (e, t) {
        return function (n) {
          return null != n && n[e] === t && (void 0 !== t || e in Object(n));
        };
      };
      const Eo = function (e) {
        var t = Oo(e);
        return 1 == t.length && t[0][2]
          ? Mo(t[0][0], t[0][1])
          : function (n) {
              return n === e || ko(n, e, t);
            };
      };
      var Ao = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        No = /^\w*$/;
      const To = function (e, t) {
        if (at(e)) return !1;
        var n = typeof e;
        return (
          !(
            "number" != n &&
            "symbol" != n &&
            "boolean" != n &&
            null != e &&
            !dn(e)
          ) ||
          No.test(e) || !Ao.test(e) ||
          (null != t && e in Object(t))
        );
      };
      function _o(e, t) {
        if ("function" != typeof e || (null != t && "function" != typeof t))
          throw new TypeError("Expected a function");
        var n = function () {
          var r = arguments,
            o = t ? t.apply(this, r) : r[0],
            i = n.cache;
          if (i.has(o)) return i.get(o);
          var s = e.apply(this, r);
          return (n.cache = i.set(o, s) || i), s;
        };
        return (n.cache = new (_o.Cache || De)()), n;
      }
      _o.Cache = De;
      const Do = _o;
      var Ro =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        jo = /\\(\\)?/g;
      const Fo = (function (e) {
        var t = Do(e, function (e) {
            return 500 === n.size && n.clear(), e;
          }),
          n = t.cache;
        return t;
      })(function (e) {
        var t = [];
        return (
          46 === e.charCodeAt(0) && t.push(""),
          e.replace(Ro, function (e, n, r, o) {
            t.push(r ? o.replace(jo, "$1") : n || e);
          }),
          t
        );
      });
      var zo = $ ? $.prototype : void 0,
        Bo = zo ? zo.toString : void 0;
      const Po = function e(t) {
        if ("string" == typeof t) return t;
        if (at(t)) return _r(t, e) + "";
        if (dn(t)) return Bo ? Bo.call(t) : "";
        var n = t + "";
        return "0" == n && 1 / t == -Infinity ? "-0" : n;
      };
      const Io = function (e) {
        return null == e ? "" : Po(e);
      };
      const $o = function (e, t) {
        return at(e) ? e : To(e, t) ? [e] : Fo(Io(e));
      };
      const Lo = function (e) {
        if ("string" == typeof e || dn(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -Infinity ? "-0" : t;
      };
      const Vo = function (e, t) {
        for (var n = 0, r = (t = $o(t, e)).length; null != e && n < r; )
          e = e[Lo(t[n++])];
        return n && n == r ? e : void 0;
      };
      const Jo = function (e, t, n) {
        var r = null == e ? void 0 : Vo(e, t);
        return void 0 === r ? n : r;
      };
      const Ho = function (e, t) {
        return null != e && t in Object(e);
      };
      const Ko = function (e, t, n) {
        for (var r = -1, o = (t = $o(t, e)).length, i = !1; ++r < o; ) {
          var s = Lo(t[r]);
          if (!(i = null != e && n(e, s))) break;
          e = e[s];
        }
        return i || ++r != o
          ? i
          : !!(o = null == e ? 0 : e.length) &&
              ct(o) &&
              Pt(s, o) &&
              (at(e) || lt(e));
      };
      const Wo = function (e, t) {
        return null != e && Ko(e, t, Ho);
      };
      const Uo = function (e, t) {
        return To(e) && Co(t)
          ? Mo(Lo(e), t)
          : function (n) {
              var r = Jo(n, e);
              return void 0 === r && r === t ? Wo(n, e) : So(t, r, 3);
            };
      };
      const qo = function (e) {
        return function (t) {
          return null == t ? void 0 : t[e];
        };
      };
      const Go = function (e) {
        return function (t) {
          return Vo(t, e);
        };
      };
      const Xo = function (e) {
        return To(e) ? qo(Lo(e)) : Go(e);
      };
      const Yo = function (e) {
        return "function" == typeof e
          ? e
          : null == e
            ? qt
            : "object" == typeof e
              ? at(e)
                ? Uo(e[0], e[1])
                : Eo(e)
              : Xo(e);
      };
      const Zo = function (e, t) {
        var n = -1,
          r = ht(e) ? Array(e.length) : [];
        return (
          _n(e, function (e, o, i) {
            r[++n] = t(e, o, i);
          }),
          r
        );
      };
      const Qo = function (e, t) {
        return (at(e) ? _r : Zo)(e, Yo(t, 3));
      };
      const ei = function (e) {
        var t = e.colors,
          n = e.onClick,
          i = e.onSwatchHover,
          s = (0, o.Ay)({
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
        return r.createElement(
          "div",
          { style: s.swatches },
          Qo(t, function (e) {
            return r.createElement(Er, {
              key: e,
              color: e,
              style: s.swatch,
              onClick: n,
              onHover: i,
              focusStyle: { boxShadow: "0 0 4px " + e },
            });
          }),
          r.createElement("div", { style: s.clear }),
        );
      };
      var ti = function (e) {
        var t = e.onChange,
          n = e.onSwatchHover,
          i = e.hex,
          s = e.colors,
          l = e.width,
          a = e.triangle,
          h = e.styles,
          p = void 0 === h ? {} : h,
          u = e.className,
          d = void 0 === u ? "" : u,
          f = "transparent" === i,
          m = function (e, n) {
            br(e) && t({ hex: e, source: "hex" }, n);
          },
          g = (0, o.Ay)(
            on(
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
                    background: i,
                    borderRadius: "6px 6px 0 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  },
                  body: { padding: "10px" },
                  label: {
                    fontSize: "18px",
                    color: yr(i),
                    position: "relative",
                  },
                  triangle: {
                    width: "0px",
                    height: "0px",
                    borderStyle: "solid",
                    borderWidth: "0 10px 10px 10px",
                    borderColor:
                      "transparent transparent " + i + " transparent",
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
              p,
            ),
            { "hide-triangle": "hide" === a },
          );
        return r.createElement(
          "div",
          { style: g.card, className: "block-picker " + d },
          r.createElement("div", { style: g.triangle }),
          r.createElement(
            "div",
            { style: g.head },
            f && r.createElement(c, { borderRadius: "6px 6px 0 0" }),
            r.createElement("div", { style: g.label }, i),
          ),
          r.createElement(
            "div",
            { style: g.body },
            r.createElement(ei, { colors: s, onClick: m, onSwatchHover: n }),
            r.createElement(b, {
              style: { input: g.input },
              value: i,
              onChange: m,
            }),
          ),
        );
      };
      (ti.propTypes = {
        width: S().oneOfType([S().string, S().number]),
        colors: S().arrayOf(S().string),
        triangle: S().oneOf(["top", "hide"]),
        styles: S().object,
      }),
        (ti.defaultProps = {
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
      Sr(ti);
      var ni = {
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
        ri = {
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
        oi = {
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
        ii = {
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
        si = {
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
        li = {
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
        ai = {
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
        ci = {
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
        hi = {
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
        pi = {
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
        ui = {
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
        di = {
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
        fi = {
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
        mi = {
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
        gi = {
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
        bi = {
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
        yi = {
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
        vi = {
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
      var wi = function (e) {
        var t = e.color,
          n = e.onClick,
          i = e.onSwatchHover,
          s = e.hover,
          l = e.active,
          a = e.circleSize,
          c = e.circleSpacing,
          h = (0, o.Ay)(
            {
              default: {
                swatch: {
                  width: a,
                  height: a,
                  marginRight: c,
                  marginBottom: c,
                  transform: "scale(1)",
                  transition: "100ms transform ease",
                },
                Swatch: {
                  borderRadius: "50%",
                  background: "transparent",
                  boxShadow: "inset 0 0 0 " + (a / 2 + 1) + "px " + t,
                  transition: "100ms box-shadow ease",
                },
              },
              hover: { swatch: { transform: "scale(1.2)" } },
              active: { Swatch: { boxShadow: "inset 0 0 0 3px " + t } },
            },
            { hover: s, active: l },
          );
        return r.createElement(
          "div",
          { style: h.swatch },
          r.createElement(Er, {
            style: h.Swatch,
            color: t,
            onClick: n,
            onHover: i,
            focusStyle: { boxShadow: h.Swatch.boxShadow + ", 0 0 5px " + t },
          }),
        );
      };
      wi.defaultProps = { circleSize: 28, circleSpacing: 14 };
      const xi = (0, o.H8)(wi);
      var Si = function (e) {
        var t = e.width,
          n = e.onChange,
          i = e.onSwatchHover,
          s = e.colors,
          l = e.hex,
          a = e.circleSize,
          c = e.styles,
          h = void 0 === c ? {} : c,
          p = e.circleSpacing,
          u = e.className,
          d = void 0 === u ? "" : u,
          f = (0, o.Ay)(
            on(
              {
                default: {
                  card: {
                    width: t,
                    display: "flex",
                    flexWrap: "wrap",
                    marginRight: -p,
                    marginBottom: -p,
                  },
                },
              },
              h,
            ),
          ),
          m = function (e, t) {
            return n({ hex: e, source: "hex" }, t);
          };
        return r.createElement(
          "div",
          { style: f.card, className: "circle-picker " + d },
          Qo(s, function (e) {
            return r.createElement(xi, {
              key: e,
              color: e,
              onClick: m,
              onSwatchHover: i,
              active: l === e.toLowerCase(),
              circleSize: a,
              circleSpacing: p,
            });
          }),
        );
      };
      (Si.propTypes = {
        width: S().oneOfType([S().string, S().number]),
        circleSize: S().number,
        circleSpacing: S().number,
        styles: S().object,
      }),
        (Si.defaultProps = {
          width: 252,
          circleSize: 28,
          circleSpacing: 14,
          colors: [
            ni[500],
            ri[500],
            oi[500],
            ii[500],
            si[500],
            li[500],
            ai[500],
            ci[500],
            hi[500],
            pi[500],
            ui[500],
            di[500],
            fi[500],
            mi[500],
            gi[500],
            bi[500],
            yi[500],
            vi[500],
          ],
          styles: {},
        });
      Sr(Si);
      const ki = function (e) {
        return void 0 === e;
      };
      var Ci = n(50283),
        Oi = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
      var Mi = (function (e) {
        function t(e) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var n = (function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return (
            (n.toggleViews = function () {
              "hex" === n.state.view
                ? n.setState({ view: "rgb" })
                : "rgb" === n.state.view
                  ? n.setState({ view: "hsl" })
                  : "hsl" === n.state.view &&
                    (1 === n.props.hsl.a
                      ? n.setState({ view: "hex" })
                      : n.setState({ view: "rgb" }));
            }),
            (n.handleChange = function (e, t) {
              e.hex
                ? br(e.hex) &&
                  n.props.onChange({ hex: e.hex, source: "hex" }, t)
                : e.r || e.g || e.b
                  ? n.props.onChange(
                      {
                        r: e.r || n.props.rgb.r,
                        g: e.g || n.props.rgb.g,
                        b: e.b || n.props.rgb.b,
                        source: "rgb",
                      },
                      t,
                    )
                  : e.a
                    ? (e.a < 0 ? (e.a = 0) : e.a > 1 && (e.a = 1),
                      n.props.onChange(
                        {
                          h: n.props.hsl.h,
                          s: n.props.hsl.s,
                          l: n.props.hsl.l,
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
                      n.props.onChange(
                        {
                          h: e.h || n.props.hsl.h,
                          s: Number(ki(e.s) ? n.props.hsl.s : e.s),
                          l: Number(ki(e.l) ? n.props.hsl.l : e.l),
                          source: "hsl",
                        },
                        t,
                      ));
            }),
            (n.showHighlight = function (e) {
              e.currentTarget.style.background = "#eee";
            }),
            (n.hideHighlight = function (e) {
              e.currentTarget.style.background = "transparent";
            }),
            1 !== e.hsl.a && "hex" === e.view
              ? (n.state = { view: "rgb" })
              : (n.state = { view: e.view }),
            n
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
          Oi(
            t,
            [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = (0, o.Ay)(
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
                    n = void 0;
                  return (
                    "hex" === this.state.view
                      ? (n = r.createElement(
                          "div",
                          { style: t.fields, className: "flexbox-fix" },
                          r.createElement(
                            "div",
                            { style: t.field },
                            r.createElement(b, {
                              style: { input: t.input, label: t.label },
                              label: "hex",
                              value: this.props.hex,
                              onChange: this.handleChange,
                            }),
                          ),
                        ))
                      : "rgb" === this.state.view
                        ? (n = r.createElement(
                            "div",
                            { style: t.fields, className: "flexbox-fix" },
                            r.createElement(
                              "div",
                              { style: t.field },
                              r.createElement(b, {
                                style: { input: t.input, label: t.label },
                                label: "r",
                                value: this.props.rgb.r,
                                onChange: this.handleChange,
                              }),
                            ),
                            r.createElement(
                              "div",
                              { style: t.field },
                              r.createElement(b, {
                                style: { input: t.input, label: t.label },
                                label: "g",
                                value: this.props.rgb.g,
                                onChange: this.handleChange,
                              }),
                            ),
                            r.createElement(
                              "div",
                              { style: t.field },
                              r.createElement(b, {
                                style: { input: t.input, label: t.label },
                                label: "b",
                                value: this.props.rgb.b,
                                onChange: this.handleChange,
                              }),
                            ),
                            r.createElement(
                              "div",
                              { style: t.alpha },
                              r.createElement(b, {
                                style: { input: t.input, label: t.label },
                                label: "a",
                                value: this.props.rgb.a,
                                arrowOffset: 0.01,
                                onChange: this.handleChange,
                              }),
                            ),
                          ))
                        : "hsl" === this.state.view &&
                          (n = r.createElement(
                            "div",
                            { style: t.fields, className: "flexbox-fix" },
                            r.createElement(
                              "div",
                              { style: t.field },
                              r.createElement(b, {
                                style: { input: t.input, label: t.label },
                                label: "h",
                                value: Math.round(this.props.hsl.h),
                                onChange: this.handleChange,
                              }),
                            ),
                            r.createElement(
                              "div",
                              { style: t.field },
                              r.createElement(b, {
                                style: { input: t.input, label: t.label },
                                label: "s",
                                value: Math.round(100 * this.props.hsl.s) + "%",
                                onChange: this.handleChange,
                              }),
                            ),
                            r.createElement(
                              "div",
                              { style: t.field },
                              r.createElement(b, {
                                style: { input: t.input, label: t.label },
                                label: "l",
                                value: Math.round(100 * this.props.hsl.l) + "%",
                                onChange: this.handleChange,
                              }),
                            ),
                            r.createElement(
                              "div",
                              { style: t.alpha },
                              r.createElement(b, {
                                style: { input: t.input, label: t.label },
                                label: "a",
                                value: this.props.hsl.a,
                                arrowOffset: 0.01,
                                onChange: this.handleChange,
                              }),
                            ),
                          )),
                    r.createElement(
                      "div",
                      { style: t.wrap, className: "flexbox-fix" },
                      n,
                      r.createElement(
                        "div",
                        { style: t.toggle },
                        r.createElement(
                          "div",
                          {
                            style: t.icon,
                            onClick: this.toggleViews,
                            ref: function (t) {
                              return (e.icon = t);
                            },
                          },
                          r.createElement(Ci.A, {
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
      })(r.Component);
      Mi.defaultProps = { view: "hex" };
      const Ei = Mi;
      const Ai = function () {
        var e = (0, o.Ay)({
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
        return r.createElement("div", { style: e.picker });
      };
      const Ni = function () {
        var e = (0, o.Ay)({
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
        return r.createElement("div", { style: e.picker });
      };
      var Ti = function (e) {
        var t = e.width,
          n = e.onChange,
          i = e.disableAlpha,
          s = e.rgb,
          l = e.hsl,
          a = e.hsv,
          h = e.hex,
          p = e.renderers,
          u = e.styles,
          f = void 0 === u ? {} : u,
          m = e.className,
          g = void 0 === m ? "" : m,
          b = e.defaultView,
          y = (0, o.Ay)(
            on(
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
                      s.r +
                      ", " +
                      s.g +
                      ", " +
                      s.b +
                      ", " +
                      s.a +
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
              f,
            ),
            { disableAlpha: i },
          );
        return r.createElement(
          "div",
          { style: y.picker, className: "chrome-picker " + g },
          r.createElement(
            "div",
            { style: y.saturation },
            r.createElement(On, {
              style: y.Saturation,
              hsl: l,
              hsv: a,
              pointer: Ni,
              onChange: n,
            }),
          ),
          r.createElement(
            "div",
            { style: y.body },
            r.createElement(
              "div",
              { style: y.controls, className: "flexbox-fix" },
              r.createElement(
                "div",
                { style: y.color },
                r.createElement(
                  "div",
                  { style: y.swatch },
                  r.createElement("div", { style: y.active }),
                  r.createElement(c, { renderers: p }),
                ),
              ),
              r.createElement(
                "div",
                { style: y.toggles },
                r.createElement(
                  "div",
                  { style: y.hue },
                  r.createElement(w, {
                    style: y.Hue,
                    hsl: l,
                    pointer: Ai,
                    onChange: n,
                  }),
                ),
                r.createElement(
                  "div",
                  { style: y.alpha },
                  r.createElement(d, {
                    style: y.Alpha,
                    rgb: s,
                    hsl: l,
                    pointer: Ai,
                    renderers: p,
                    onChange: n,
                  }),
                ),
              ),
            ),
            r.createElement(Ei, {
              rgb: s,
              hsl: l,
              hex: h,
              view: b,
              onChange: n,
              disableAlpha: i,
            }),
          ),
        );
      };
      (Ti.propTypes = {
        width: S().oneOfType([S().string, S().number]),
        disableAlpha: S().bool,
        styles: S().object,
        defaultView: S().oneOf(["hex", "rgb", "hsl"]),
      }),
        (Ti.defaultProps = { width: 225, disableAlpha: !1, styles: {} });
      const _i = Sr(Ti);
      const Di = function (e) {
        var t = e.color,
          n = e.onClick,
          i = void 0 === n ? function () {} : n,
          s = e.onSwatchHover,
          l = e.active,
          a = (0, o.Ay)(
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
                  background: yr(t),
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
        return r.createElement(
          Er,
          {
            style: a.color,
            color: t,
            onClick: i,
            onHover: s,
            focusStyle: { boxShadow: "0 0 4px " + t },
          },
          r.createElement("div", { style: a.dot }),
        );
      };
      const Ri = function (e) {
        var t = e.hex,
          n = e.rgb,
          i = e.onChange,
          s = (0, o.Ay)({
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
              ? i(
                  {
                    r: e.r || n.r,
                    g: e.g || n.g,
                    b: e.b || n.b,
                    source: "rgb",
                  },
                  t,
                )
              : i({ hex: e.hex, source: "hex" }, t);
          };
        return r.createElement(
          "div",
          { style: s.fields, className: "flexbox-fix" },
          r.createElement("div", { style: s.active }),
          r.createElement(b, {
            style: { wrap: s.HEXwrap, input: s.HEXinput, label: s.HEXlabel },
            label: "hex",
            value: t,
            onChange: l,
          }),
          r.createElement(b, {
            style: { wrap: s.RGBwrap, input: s.RGBinput, label: s.RGBlabel },
            label: "r",
            value: n.r,
            onChange: l,
          }),
          r.createElement(b, {
            style: { wrap: s.RGBwrap, input: s.RGBinput, label: s.RGBlabel },
            label: "g",
            value: n.g,
            onChange: l,
          }),
          r.createElement(b, {
            style: { wrap: s.RGBwrap, input: s.RGBinput, label: s.RGBlabel },
            label: "b",
            value: n.b,
            onChange: l,
          }),
        );
      };
      var ji = function (e) {
        var t = e.onChange,
          n = e.onSwatchHover,
          i = e.colors,
          s = e.hex,
          l = e.rgb,
          a = e.styles,
          c = void 0 === a ? {} : a,
          h = e.className,
          p = void 0 === h ? "" : h,
          u = (0, o.Ay)(
            on(
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
          d = function (e, n) {
            e.hex ? br(e.hex) && t({ hex: e.hex, source: "hex" }, n) : t(e, n);
          };
        return r.createElement(
          ln,
          { style: u.Compact, styles: c },
          r.createElement(
            "div",
            { style: u.compact, className: "compact-picker " + p },
            r.createElement(
              "div",
              null,
              Qo(i, function (e) {
                return r.createElement(Di, {
                  key: e,
                  color: e,
                  active: e.toLowerCase() === s,
                  onClick: d,
                  onSwatchHover: n,
                });
              }),
              r.createElement("div", { style: u.clear }),
            ),
            r.createElement(Ri, { hex: s, rgb: l, onChange: d }),
          ),
        );
      };
      (ji.propTypes = { colors: S().arrayOf(S().string), styles: S().object }),
        (ji.defaultProps = {
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
      Sr(ji);
      const Fi = (0, o.H8)(function (e) {
        var t = e.hover,
          n = e.color,
          i = e.onClick,
          s = e.onSwatchHover,
          l = {
            position: "relative",
            zIndex: "2",
            outline: "2px solid #fff",
            boxShadow: "0 0 5px 2px rgba(0,0,0,0.25)",
          },
          a = (0, o.Ay)(
            {
              default: {
                swatch: { width: "25px", height: "25px", fontSize: "0" },
              },
              hover: { swatch: l },
            },
            { hover: t },
          );
        return r.createElement(
          "div",
          { style: a.swatch },
          r.createElement(Er, {
            color: n,
            onClick: i,
            onHover: s,
            focusStyle: l,
          }),
        );
      });
      var zi = function (e) {
        var t = e.width,
          n = e.colors,
          i = e.onChange,
          s = e.onSwatchHover,
          l = e.triangle,
          a = e.styles,
          c = void 0 === a ? {} : a,
          h = e.className,
          p = void 0 === h ? "" : h,
          u = (0, o.Ay)(
            on(
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
          d = function (e, t) {
            return i({ hex: e, source: "hex" }, t);
          };
        return r.createElement(
          "div",
          { style: u.card, className: "github-picker " + p },
          r.createElement("div", { style: u.triangleShadow }),
          r.createElement("div", { style: u.triangle }),
          Qo(n, function (e) {
            return r.createElement(Fi, {
              color: e,
              key: e,
              onClick: d,
              onSwatchHover: s,
            });
          }),
        );
      };
      (zi.propTypes = {
        width: S().oneOfType([S().string, S().number]),
        colors: S().arrayOf(S().string),
        triangle: S().oneOf([
          "hide",
          "top-left",
          "top-right",
          "bottom-left",
          "bottom-right",
        ]),
        styles: S().object,
      }),
        (zi.defaultProps = {
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
      Sr(zi);
      const Bi = function (e) {
        var t = e.direction,
          n = (0, o.Ay)(
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
        return r.createElement("div", { style: n.picker });
      };
      var Pi =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        Ii = function (e) {
          var t = e.width,
            n = e.height,
            i = e.onChange,
            s = e.hsl,
            l = e.direction,
            a = e.pointer,
            c = e.styles,
            h = void 0 === c ? {} : c,
            p = e.className,
            u = void 0 === p ? "" : p,
            d = (0, o.Ay)(
              on(
                {
                  default: {
                    picker: { position: "relative", width: t, height: n },
                    hue: { radius: "2px" },
                  },
                },
                h,
              ),
            );
          return r.createElement(
            "div",
            { style: d.picker, className: "hue-picker " + u },
            r.createElement(
              w,
              Pi({}, d.hue, {
                hsl: s,
                pointer: a,
                onChange: function (e) {
                  return i({ a: 1, h: e.h, l: 0.5, s: 1 });
                },
                direction: l,
              }),
            ),
          );
        };
      (Ii.propTypes = { styles: S().object }),
        (Ii.defaultProps = {
          width: "316px",
          height: "16px",
          direction: "horizontal",
          pointer: Bi,
          styles: {},
        });
      Sr(Ii);
      Sr(function (e) {
        var t = e.onChange,
          n = e.hex,
          i = e.rgb,
          s = e.styles,
          l = void 0 === s ? {} : s,
          a = e.className,
          c = void 0 === a ? "" : a,
          h = (0, o.Ay)(
            on(
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
                    borderBottom: "2px solid " + n,
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
          p = function (e, n) {
            e.hex
              ? br(e.hex) && t({ hex: e.hex, source: "hex" }, n)
              : (e.r || e.g || e.b) &&
                t(
                  {
                    r: e.r || i.r,
                    g: e.g || i.g,
                    b: e.b || i.b,
                    source: "rgb",
                  },
                  n,
                );
          };
        return r.createElement(
          ln,
          { styles: l },
          r.createElement(
            "div",
            { style: h.material, className: "material-picker " + c },
            r.createElement(b, {
              style: { wrap: h.HEXwrap, input: h.HEXinput, label: h.HEXlabel },
              label: "hex",
              value: n,
              onChange: p,
            }),
            r.createElement(
              "div",
              { style: h.split, className: "flexbox-fix" },
              r.createElement(
                "div",
                { style: h.third },
                r.createElement(b, {
                  style: {
                    wrap: h.RGBwrap,
                    input: h.RGBinput,
                    label: h.RGBlabel,
                  },
                  label: "r",
                  value: i.r,
                  onChange: p,
                }),
              ),
              r.createElement(
                "div",
                { style: h.third },
                r.createElement(b, {
                  style: {
                    wrap: h.RGBwrap,
                    input: h.RGBinput,
                    label: h.RGBlabel,
                  },
                  label: "g",
                  value: i.g,
                  onChange: p,
                }),
              ),
              r.createElement(
                "div",
                { style: h.third },
                r.createElement(b, {
                  style: {
                    wrap: h.RGBwrap,
                    input: h.RGBinput,
                    label: h.RGBlabel,
                  },
                  label: "b",
                  value: i.b,
                  onChange: p,
                }),
              ),
            ),
          ),
        );
      });
      const $i = function (e) {
        var t = e.onChange,
          n = e.rgb,
          i = e.hsv,
          s = e.hex,
          l = (0, o.Ay)({
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
          a = function (e, r) {
            e["#"]
              ? br(e["#"]) && t({ hex: e["#"], source: "hex" }, r)
              : e.r || e.g || e.b
                ? t(
                    {
                      r: e.r || n.r,
                      g: e.g || n.g,
                      b: e.b || n.b,
                      source: "rgb",
                    },
                    r,
                  )
                : (e.h || e.s || e.v) &&
                  t(
                    {
                      h: e.h || i.h,
                      s: e.s || i.s,
                      v: e.v || i.v,
                      source: "hsv",
                    },
                    r,
                  );
          };
        return r.createElement(
          "div",
          { style: l.fields },
          r.createElement(b, {
            style: { wrap: l.RGBwrap, input: l.RGBinput, label: l.RGBlabel },
            label: "h",
            value: Math.round(i.h),
            onChange: a,
          }),
          r.createElement(b, {
            style: { wrap: l.RGBwrap, input: l.RGBinput, label: l.RGBlabel },
            label: "s",
            value: Math.round(100 * i.s),
            onChange: a,
          }),
          r.createElement(b, {
            style: { wrap: l.RGBwrap, input: l.RGBinput, label: l.RGBlabel },
            label: "v",
            value: Math.round(100 * i.v),
            onChange: a,
          }),
          r.createElement("div", { style: l.divider }),
          r.createElement(b, {
            style: { wrap: l.RGBwrap, input: l.RGBinput, label: l.RGBlabel },
            label: "r",
            value: n.r,
            onChange: a,
          }),
          r.createElement(b, {
            style: { wrap: l.RGBwrap, input: l.RGBinput, label: l.RGBlabel },
            label: "g",
            value: n.g,
            onChange: a,
          }),
          r.createElement(b, {
            style: { wrap: l.RGBwrap, input: l.RGBinput, label: l.RGBlabel },
            label: "b",
            value: n.b,
            onChange: a,
          }),
          r.createElement("div", { style: l.divider }),
          r.createElement(b, {
            style: { wrap: l.HEXwrap, input: l.HEXinput, label: l.HEXlabel },
            label: "#",
            value: s.replace("#", ""),
            onChange: a,
          }),
          r.createElement(
            "div",
            { style: l.fieldSymbols },
            r.createElement("div", { style: l.symbol }, "°"),
            r.createElement("div", { style: l.symbol }, "%"),
            r.createElement("div", { style: l.symbol }, "%"),
          ),
        );
      };
      const Li = function (e) {
        var t = e.hsl,
          n = (0, o.Ay)(
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
        return r.createElement("div", { style: n.picker });
      };
      const Vi = function () {
        var e = (0, o.Ay)({
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
        return r.createElement(
          "div",
          { style: e.pointer },
          r.createElement(
            "div",
            { style: e.left },
            r.createElement("div", { style: e.leftInside }),
          ),
          r.createElement(
            "div",
            { style: e.right },
            r.createElement("div", { style: e.rightInside }),
          ),
        );
      };
      const Ji = function (e) {
        var t = e.onClick,
          n = e.label,
          i = e.children,
          s = e.active,
          l = (0, o.Ay)(
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
            { active: s },
          );
        return r.createElement("div", { style: l.button, onClick: t }, n || i);
      };
      const Hi = function (e) {
        var t = e.rgb,
          n = e.currentColor,
          i = (0, o.Ay)({
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
                background: n,
                boxShadow:
                  "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000",
              },
              label: { fontSize: "14px", color: "#000", textAlign: "center" },
            },
          });
        return r.createElement(
          "div",
          null,
          r.createElement("div", { style: i.label }, "new"),
          r.createElement(
            "div",
            { style: i.swatches },
            r.createElement("div", { style: i.new }),
            r.createElement("div", { style: i.current }),
          ),
          r.createElement("div", { style: i.label }, "current"),
        );
      };
      var Ki = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })();
      var Wi = (function (e) {
        function t(e) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var n = (function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return (n.state = { currentColor: e.hex }), n;
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
          Ki(t, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.styles,
                  n = void 0 === t ? {} : t,
                  i = e.className,
                  s = void 0 === i ? "" : i,
                  l = (0, o.Ay)(
                    on(
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
                      n,
                    ),
                  );
                return r.createElement(
                  "div",
                  { style: l.picker, className: "photoshop-picker " + s },
                  r.createElement("div", { style: l.head }, this.props.header),
                  r.createElement(
                    "div",
                    { style: l.body, className: "flexbox-fix" },
                    r.createElement(
                      "div",
                      { style: l.saturation },
                      r.createElement(On, {
                        hsl: this.props.hsl,
                        hsv: this.props.hsv,
                        pointer: Li,
                        onChange: this.props.onChange,
                      }),
                    ),
                    r.createElement(
                      "div",
                      { style: l.hue },
                      r.createElement(w, {
                        direction: "vertical",
                        hsl: this.props.hsl,
                        pointer: Vi,
                        onChange: this.props.onChange,
                      }),
                    ),
                    r.createElement(
                      "div",
                      { style: l.controls },
                      r.createElement(
                        "div",
                        { style: l.top, className: "flexbox-fix" },
                        r.createElement(
                          "div",
                          { style: l.previews },
                          r.createElement(Hi, {
                            rgb: this.props.rgb,
                            currentColor: this.state.currentColor,
                          }),
                        ),
                        r.createElement(
                          "div",
                          { style: l.actions },
                          r.createElement(Ji, {
                            label: "OK",
                            onClick: this.props.onAccept,
                            active: !0,
                          }),
                          r.createElement(Ji, {
                            label: "Cancel",
                            onClick: this.props.onCancel,
                          }),
                          r.createElement($i, {
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
      })(r.Component);
      (Wi.propTypes = { header: S().string, styles: S().object }),
        (Wi.defaultProps = { header: "Color Picker", styles: {} });
      Sr(Wi);
      const Ui = function (e) {
        var t = e.onChange,
          n = e.rgb,
          i = e.hsl,
          s = e.hex,
          l = e.disableAlpha,
          a = (0, o.Ay)(
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
          c = function (e, r) {
            e.hex
              ? br(e.hex) && t({ hex: e.hex, source: "hex" }, r)
              : e.r || e.g || e.b
                ? t(
                    {
                      r: e.r || n.r,
                      g: e.g || n.g,
                      b: e.b || n.b,
                      a: n.a,
                      source: "rgb",
                    },
                    r,
                  )
                : e.a &&
                  (e.a < 0 ? (e.a = 0) : e.a > 100 && (e.a = 100),
                  (e.a /= 100),
                  t({ h: i.h, s: i.s, l: i.l, a: e.a, source: "rgb" }, r));
          };
        return r.createElement(
          "div",
          { style: a.fields, className: "flexbox-fix" },
          r.createElement(
            "div",
            { style: a.double },
            r.createElement(b, {
              style: { input: a.input, label: a.label },
              label: "hex",
              value: s.replace("#", ""),
              onChange: c,
            }),
          ),
          r.createElement(
            "div",
            { style: a.single },
            r.createElement(b, {
              style: { input: a.input, label: a.label },
              label: "r",
              value: n.r,
              onChange: c,
              dragLabel: "true",
              dragMax: "255",
            }),
          ),
          r.createElement(
            "div",
            { style: a.single },
            r.createElement(b, {
              style: { input: a.input, label: a.label },
              label: "g",
              value: n.g,
              onChange: c,
              dragLabel: "true",
              dragMax: "255",
            }),
          ),
          r.createElement(
            "div",
            { style: a.single },
            r.createElement(b, {
              style: { input: a.input, label: a.label },
              label: "b",
              value: n.b,
              onChange: c,
              dragLabel: "true",
              dragMax: "255",
            }),
          ),
          r.createElement(
            "div",
            { style: a.alpha },
            r.createElement(b, {
              style: { input: a.input, label: a.label },
              label: "a",
              value: Math.round(100 * n.a),
              onChange: c,
              dragLabel: "true",
              dragMax: "100",
            }),
          ),
        );
      };
      var qi =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        Gi = function (e) {
          var t = e.colors,
            n = e.onClick,
            i = void 0 === n ? function () {} : n,
            s = e.onSwatchHover,
            l = (0, o.Ay)(
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
            a = function (e, t) {
              i({ hex: e, source: "hex" }, t);
            };
          return r.createElement(
            "div",
            { style: l.colors, className: "flexbox-fix" },
            t.map(function (e) {
              var t = "string" == typeof e ? { color: e } : e,
                n = "" + t.color + (t.title || "");
              return r.createElement(
                "div",
                { key: n, style: l.swatchWrap },
                r.createElement(
                  Er,
                  qi({}, t, {
                    style: l.swatch,
                    onClick: a,
                    onHover: s,
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
      Gi.propTypes = {
        colors: S().arrayOf(
          S().oneOfType([
            S().string,
            S().shape({ color: S().string, title: S().string }),
          ]),
        ).isRequired,
      };
      const Xi = Gi;
      var Yi =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        Zi = function (e) {
          var t = e.width,
            n = e.rgb,
            i = e.hex,
            s = e.hsv,
            l = e.hsl,
            a = e.onChange,
            h = e.onSwatchHover,
            p = e.disableAlpha,
            u = e.presetColors,
            f = e.renderers,
            m = e.styles,
            g = void 0 === m ? {} : m,
            b = e.className,
            y = void 0 === b ? "" : b,
            v = (0, o.Ay)(
              on(
                {
                  default: Yi(
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
                          n.r +
                          "," +
                          n.g +
                          "," +
                          n.b +
                          "," +
                          n.a +
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
              { disableAlpha: p },
            );
          return r.createElement(
            "div",
            { style: v.picker, className: "sketch-picker " + y },
            r.createElement(
              "div",
              { style: v.saturation },
              r.createElement(On, {
                style: v.Saturation,
                hsl: l,
                hsv: s,
                onChange: a,
              }),
            ),
            r.createElement(
              "div",
              { style: v.controls, className: "flexbox-fix" },
              r.createElement(
                "div",
                { style: v.sliders },
                r.createElement(
                  "div",
                  { style: v.hue },
                  r.createElement(w, { style: v.Hue, hsl: l, onChange: a }),
                ),
                r.createElement(
                  "div",
                  { style: v.alpha },
                  r.createElement(d, {
                    style: v.Alpha,
                    rgb: n,
                    hsl: l,
                    renderers: f,
                    onChange: a,
                  }),
                ),
              ),
              r.createElement(
                "div",
                { style: v.color },
                r.createElement(c, null),
                r.createElement("div", { style: v.activeColor }),
              ),
            ),
            r.createElement(Ui, {
              rgb: n,
              hsl: l,
              hex: i,
              onChange: a,
              disableAlpha: p,
            }),
            r.createElement(Xi, { colors: u, onClick: a, onSwatchHover: h }),
          );
        };
      (Zi.propTypes = {
        disableAlpha: S().bool,
        width: S().oneOfType([S().string, S().number]),
        styles: S().object,
      }),
        (Zi.defaultProps = {
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
      Sr(Zi);
      const Qi = function (e) {
        var t = e.hsl,
          n = e.offset,
          i = e.onClick,
          s = void 0 === i ? function () {} : i,
          l = e.active,
          a = e.first,
          c = e.last,
          h = (0, o.Ay)(
            {
              default: {
                swatch: {
                  height: "12px",
                  background: "hsl(" + t.h + ", 50%, " + 100 * n + "%)",
                  cursor: "pointer",
                },
              },
              first: { swatch: { borderRadius: "2px 0 0 2px" } },
              last: { swatch: { borderRadius: "0 2px 2px 0" } },
              active: {
                swatch: { transform: "scaleY(1.8)", borderRadius: "3.6px/2px" },
              },
            },
            { active: l, first: a, last: c },
          );
        return r.createElement("div", {
          style: h.swatch,
          onClick: function (e) {
            return s({ h: t.h, s: 0.5, l: n, source: "hsl" }, e);
          },
        });
      };
      const es = function (e) {
        var t = e.onClick,
          n = e.hsl,
          i = (0, o.Ay)({
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
          s = 0.1;
        return r.createElement(
          "div",
          { style: i.swatches },
          r.createElement(
            "div",
            { style: i.swatch },
            r.createElement(Qi, {
              hsl: n,
              offset: ".80",
              active: Math.abs(n.l - 0.8) < s && Math.abs(n.s - 0.5) < s,
              onClick: t,
              first: !0,
            }),
          ),
          r.createElement(
            "div",
            { style: i.swatch },
            r.createElement(Qi, {
              hsl: n,
              offset: ".65",
              active: Math.abs(n.l - 0.65) < s && Math.abs(n.s - 0.5) < s,
              onClick: t,
            }),
          ),
          r.createElement(
            "div",
            { style: i.swatch },
            r.createElement(Qi, {
              hsl: n,
              offset: ".50",
              active: Math.abs(n.l - 0.5) < s && Math.abs(n.s - 0.5) < s,
              onClick: t,
            }),
          ),
          r.createElement(
            "div",
            { style: i.swatch },
            r.createElement(Qi, {
              hsl: n,
              offset: ".35",
              active: Math.abs(n.l - 0.35) < s && Math.abs(n.s - 0.5) < s,
              onClick: t,
            }),
          ),
          r.createElement(
            "div",
            { style: i.swatch },
            r.createElement(Qi, {
              hsl: n,
              offset: ".20",
              active: Math.abs(n.l - 0.2) < s && Math.abs(n.s - 0.5) < s,
              onClick: t,
              last: !0,
            }),
          ),
          r.createElement("div", { style: i.clear }),
        );
      };
      const ts = function () {
        var e = (0, o.Ay)({
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
        return r.createElement("div", { style: e.picker });
      };
      var ns = function (e) {
        var t = e.hsl,
          n = e.onChange,
          i = e.pointer,
          s = e.styles,
          l = void 0 === s ? {} : s,
          a = e.className,
          c = void 0 === a ? "" : a,
          h = (0, o.Ay)(
            on(
              {
                default: {
                  hue: { height: "12px", position: "relative" },
                  Hue: { radius: "2px" },
                },
              },
              l,
            ),
          );
        return r.createElement(
          "div",
          { style: h.wrap || {}, className: "slider-picker " + c },
          r.createElement(
            "div",
            { style: h.hue },
            r.createElement(w, {
              style: h.Hue,
              hsl: t,
              pointer: i,
              onChange: n,
            }),
          ),
          r.createElement(
            "div",
            { style: h.swatches },
            r.createElement(es, { hsl: t, onClick: n }),
          ),
        );
      };
      (ns.propTypes = { styles: S().object }),
        (ns.defaultProps = { pointer: ts, styles: {} });
      Sr(ns);
      var rs = n(83478);
      const os = function (e) {
        var t = e.color,
          n = e.onClick,
          i = void 0 === n ? function () {} : n,
          s = e.onSwatchHover,
          l = e.first,
          a = e.last,
          c = e.active,
          h = (0, o.Ay)(
            {
              default: {
                color: {
                  width: "40px",
                  height: "24px",
                  cursor: "pointer",
                  background: t,
                  marginBottom: "1px",
                },
                check: { color: yr(t), marginLeft: "8px", display: "none" },
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
              last: a,
              active: c,
              "color-#FFFFFF": "#FFFFFF" === t,
              transparent: "transparent" === t,
            },
          );
        return r.createElement(
          Er,
          {
            color: t,
            style: h.color,
            onClick: i,
            onHover: s,
            focusStyle: { boxShadow: "0 0 4px " + t },
          },
          r.createElement(
            "div",
            { style: h.check },
            r.createElement(rs.A, null),
          ),
        );
      };
      const is = function (e) {
        var t = e.onClick,
          n = e.onSwatchHover,
          i = e.group,
          s = e.active,
          l = (0, o.Ay)({
            default: {
              group: {
                paddingBottom: "10px",
                width: "40px",
                float: "left",
                marginRight: "10px",
              },
            },
          });
        return r.createElement(
          "div",
          { style: l.group },
          Qo(i, function (e, o) {
            return r.createElement(os, {
              key: e,
              color: e,
              active: e.toLowerCase() === s,
              first: 0 === o,
              last: o === i.length - 1,
              onClick: t,
              onSwatchHover: n,
            });
          }),
        );
      };
      var ss = function (e) {
        var t = e.width,
          n = e.height,
          i = e.onChange,
          s = e.onSwatchHover,
          l = e.colors,
          a = e.hex,
          c = e.styles,
          h = void 0 === c ? {} : c,
          p = e.className,
          u = void 0 === p ? "" : p,
          d = (0, o.Ay)(
            on(
              {
                default: {
                  picker: { width: t, height: n },
                  overflow: { height: n, overflowY: "scroll" },
                  body: { padding: "16px 0 6px 16px" },
                  clear: { clear: "both" },
                },
              },
              h,
            ),
          ),
          f = function (e, t) {
            return i({ hex: e, source: "hex" }, t);
          };
        return r.createElement(
          "div",
          { style: d.picker, className: "swatches-picker " + u },
          r.createElement(
            ln,
            null,
            r.createElement(
              "div",
              { style: d.overflow },
              r.createElement(
                "div",
                { style: d.body },
                Qo(l, function (e) {
                  return r.createElement(is, {
                    key: e.toString(),
                    group: e,
                    active: a,
                    onClick: f,
                    onSwatchHover: s,
                  });
                }),
                r.createElement("div", { style: d.clear }),
              ),
            ),
          ),
        );
      };
      (ss.propTypes = {
        width: S().oneOfType([S().string, S().number]),
        height: S().oneOfType([S().string, S().number]),
        colors: S().arrayOf(S().arrayOf(S().string)),
        styles: S().object,
      }),
        (ss.defaultProps = {
          width: 320,
          height: 240,
          colors: [
            [ni[900], ni[700], ni[500], ni[300], ni[100]],
            [ri[900], ri[700], ri[500], ri[300], ri[100]],
            [oi[900], oi[700], oi[500], oi[300], oi[100]],
            [ii[900], ii[700], ii[500], ii[300], ii[100]],
            [si[900], si[700], si[500], si[300], si[100]],
            [li[900], li[700], li[500], li[300], li[100]],
            [ai[900], ai[700], ai[500], ai[300], ai[100]],
            [ci[900], ci[700], ci[500], ci[300], ci[100]],
            [hi[900], hi[700], hi[500], hi[300], hi[100]],
            ["#194D33", pi[700], pi[500], pi[300], pi[100]],
            [ui[900], ui[700], ui[500], ui[300], ui[100]],
            [di[900], di[700], di[500], di[300], di[100]],
            [fi[900], fi[700], fi[500], fi[300], fi[100]],
            [mi[900], mi[700], mi[500], mi[300], mi[100]],
            [gi[900], gi[700], gi[500], gi[300], gi[100]],
            [bi[900], bi[700], bi[500], bi[300], bi[100]],
            [yi[900], yi[700], yi[500], yi[300], yi[100]],
            [vi[900], vi[700], vi[500], vi[300], vi[100]],
            ["#000000", "#525252", "#969696", "#D9D9D9", "#FFFFFF"],
          ],
          styles: {},
        });
      Sr(ss);
      var ls = function (e) {
        var t = e.onChange,
          n = e.onSwatchHover,
          i = e.hex,
          s = e.colors,
          l = e.width,
          a = e.triangle,
          c = e.styles,
          h = void 0 === c ? {} : c,
          p = e.className,
          u = void 0 === p ? "" : p,
          d = (0, o.Ay)(
            on(
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
              h,
            ),
            {
              "hide-triangle": "hide" === a,
              "top-left-triangle": "top-left" === a,
              "top-right-triangle": "top-right" === a,
            },
          ),
          f = function (e, n) {
            br(e) && t({ hex: e, source: "hex" }, n);
          };
        return r.createElement(
          "div",
          { style: d.card, className: "twitter-picker " + u },
          r.createElement("div", { style: d.triangleShadow }),
          r.createElement("div", { style: d.triangle }),
          r.createElement(
            "div",
            { style: d.body },
            Qo(s, function (e, t) {
              return r.createElement(Er, {
                key: t,
                color: e,
                hex: e,
                style: d.swatch,
                onClick: f,
                onHover: n,
                focusStyle: { boxShadow: "0 0 4px " + e },
              });
            }),
            r.createElement("div", { style: d.hash }, "#"),
            r.createElement(b, {
              label: null,
              style: { input: d.input },
              value: i.replace("#", ""),
              onChange: f,
            }),
            r.createElement("div", { style: d.clear }),
          ),
        );
      };
      (ls.propTypes = {
        width: S().oneOfType([S().string, S().number]),
        triangle: S().oneOf(["hide", "top-left", "top-right"]),
        colors: S().arrayOf(S().string),
        styles: S().object,
      }),
        (ls.defaultProps = {
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
      Sr(ls);
      var as = function (e) {
        var t = (0, o.Ay)({
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
        return r.createElement("div", { style: t.picker });
      };
      (as.propTypes = {
        hsl: S().shape({
          h: S().number,
          s: S().number,
          l: S().number,
          a: S().number,
        }),
      }),
        (as.defaultProps = { hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 } });
      const cs = as;
      var hs = function (e) {
        var t = (0, o.Ay)({
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
        return r.createElement("div", { style: t.picker });
      };
      (hs.propTypes = {
        hsl: S().shape({
          h: S().number,
          s: S().number,
          l: S().number,
          a: S().number,
        }),
      }),
        (hs.defaultProps = { hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 } });
      const ps = hs;
      const us = function (e) {
        var t = e.onChange,
          n = e.rgb,
          i = e.hsl,
          s = e.hex,
          l = e.hsv,
          a = function (e, n) {
            if (e.hex) br(e.hex) && t({ hex: e.hex, source: "hex" }, n);
            else if (e.rgb) {
              var r = e.rgb.split(",");
              vr(e.rgb, "rgb") &&
                t({ r: r[0], g: r[1], b: r[2], a: 1, source: "rgb" }, n);
            } else if (e.hsv) {
              var o = e.hsv.split(",");
              vr(e.hsv, "hsv") &&
                ((o[2] = o[2].replace("%", "")),
                (o[1] = o[1].replace("%", "")),
                (o[0] = o[0].replace("°", "")),
                1 == o[1] ? (o[1] = 0.01) : 1 == o[2] && (o[2] = 0.01),
                t(
                  {
                    h: Number(o[0]),
                    s: Number(o[1]),
                    v: Number(o[2]),
                    source: "hsv",
                  },
                  n,
                ));
            } else if (e.hsl) {
              var i = e.hsl.split(",");
              vr(e.hsl, "hsl") &&
                ((i[2] = i[2].replace("%", "")),
                (i[1] = i[1].replace("%", "")),
                (i[0] = i[0].replace("°", "")),
                1 == u[1] ? (u[1] = 0.01) : 1 == u[2] && (u[2] = 0.01),
                t(
                  {
                    h: Number(i[0]),
                    s: Number(i[1]),
                    v: Number(i[2]),
                    source: "hsl",
                  },
                  n,
                ));
            }
          },
          c = (0, o.Ay)({
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
          h = n.r + ", " + n.g + ", " + n.b,
          p =
            Math.round(i.h) +
            "°, " +
            Math.round(100 * i.s) +
            "%, " +
            Math.round(100 * i.l) +
            "%",
          u =
            Math.round(l.h) +
            "°, " +
            Math.round(100 * l.s) +
            "%, " +
            Math.round(100 * l.v) +
            "%";
        return r.createElement(
          "div",
          { style: c.wrap, className: "flexbox-fix" },
          r.createElement(
            "div",
            { style: c.fields },
            r.createElement(
              "div",
              { style: c.double },
              r.createElement(b, {
                style: { input: c.input, label: c.label },
                label: "hex",
                value: s,
                onChange: a,
              }),
            ),
            r.createElement(
              "div",
              { style: c.column },
              r.createElement(
                "div",
                { style: c.single },
                r.createElement(b, {
                  style: { input: c.input2, label: c.label2 },
                  label: "rgb",
                  value: h,
                  onChange: a,
                }),
              ),
              r.createElement(
                "div",
                { style: c.single },
                r.createElement(b, {
                  style: { input: c.input2, label: c.label2 },
                  label: "hsv",
                  value: u,
                  onChange: a,
                }),
              ),
              r.createElement(
                "div",
                { style: c.single },
                r.createElement(b, {
                  style: { input: c.input2, label: c.label2 },
                  label: "hsl",
                  value: p,
                  onChange: a,
                }),
              ),
            ),
          ),
        );
      };
      var ds = function (e) {
        var t = e.width,
          n = e.onChange,
          i = e.rgb,
          s = e.hsl,
          l = e.hsv,
          a = e.hex,
          c = e.header,
          h = e.styles,
          p = void 0 === h ? {} : h,
          u = e.className,
          d = void 0 === u ? "" : u,
          f = (0, o.Ay)(
            on(
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
                      "rgba(" + i.r + ", " + i.g + ", " + i.b + ", 1)",
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
              p,
            ),
          );
        return r.createElement(
          "div",
          { style: f.picker, className: "google-picker " + d },
          r.createElement("div", { style: f.head }, c),
          r.createElement("div", { style: f.swatch }),
          r.createElement(
            "div",
            { style: f.saturation },
            r.createElement(On, { hsl: s, hsv: l, pointer: cs, onChange: n }),
          ),
          r.createElement(
            "div",
            { style: f.body },
            r.createElement(
              "div",
              { style: f.controls, className: "flexbox-fix" },
              r.createElement(
                "div",
                { style: f.hue },
                r.createElement(w, {
                  style: f.Hue,
                  hsl: s,
                  radius: "4px",
                  pointer: ps,
                  onChange: n,
                }),
              ),
            ),
            r.createElement(us, {
              rgb: i,
              hsl: s,
              hex: a,
              hsv: l,
              onChange: n,
            }),
          ),
        );
      };
      (ds.propTypes = {
        width: S().oneOfType([S().string, S().number]),
        styles: S().object,
        header: S().string,
      }),
        (ds.defaultProps = { width: 652, styles: {}, header: "Color picker" });
      Sr(ds);
    },
    12838: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.autoprefix = void 0);
      var r,
        o = n(62369),
        i = (r = o) && r.__esModule ? r : { default: r },
        s =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
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
            var n = t[e];
            return n || { extend: e };
          },
        },
        a = (t.autoprefix = function (e) {
          var t = {};
          return (
            (0, i.default)(e, function (e, n) {
              var r = {};
              (0, i.default)(e, function (e, t) {
                var n = l[t];
                n ? (r = s({}, r, n(e))) : (r[t] = e);
              }),
                (t[n] = r);
            }),
            t
          );
        });
      t.default = a;
    },
    72818: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.active = void 0);
      var r,
        o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = n(90626),
        s = (r = i) && r.__esModule ? r : { default: r };
      function l(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      var a = (t.active = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "span";
        return (function (n) {
          function r() {
            var n, i, a;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, r);
            for (var c = arguments.length, h = Array(c), p = 0; p < c; p++)
              h[p] = arguments[p];
            return (
              (i = a =
                l(
                  this,
                  (n = r.__proto__ || Object.getPrototypeOf(r)).call.apply(
                    n,
                    [this].concat(h),
                  ),
                )),
              (a.state = { active: !1 }),
              (a.handleMouseDown = function () {
                return a.setState({ active: !0 });
              }),
              (a.handleMouseUp = function () {
                return a.setState({ active: !1 });
              }),
              (a.render = function () {
                return s.default.createElement(
                  t,
                  {
                    onMouseDown: a.handleMouseDown,
                    onMouseUp: a.handleMouseUp,
                  },
                  s.default.createElement(e, o({}, a.props, a.state)),
                );
              }),
              l(a, i)
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
            })(r, n),
            r
          );
        })(s.default.Component);
      });
      t.default = a;
    },
    17516: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.hover = void 0);
      var r,
        o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = n(90626),
        s = (r = i) && r.__esModule ? r : { default: r };
      function l(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      var a = (t.hover = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "span";
        return (function (n) {
          function r() {
            var n, i, a;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, r);
            for (var c = arguments.length, h = Array(c), p = 0; p < c; p++)
              h[p] = arguments[p];
            return (
              (i = a =
                l(
                  this,
                  (n = r.__proto__ || Object.getPrototypeOf(r)).call.apply(
                    n,
                    [this].concat(h),
                  ),
                )),
              (a.state = { hover: !1 }),
              (a.handleMouseOver = function () {
                return a.setState({ hover: !0 });
              }),
              (a.handleMouseOut = function () {
                return a.setState({ hover: !1 });
              }),
              (a.render = function () {
                return s.default.createElement(
                  t,
                  {
                    onMouseOver: a.handleMouseOver,
                    onMouseOut: a.handleMouseOut,
                  },
                  s.default.createElement(e, o({}, a.props, a.state)),
                );
              }),
              l(a, i)
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
            })(r, n),
            r
          );
        })(s.default.Component);
      });
      t.default = a;
    },
    81335: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.flattenNames = void 0);
      var r = l(n(77837)),
        o = l(n(62369)),
        i = l(n(23449)),
        s = l(n(67160));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var a = (t.flattenNames = function e() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          n = [];
        return (
          (0, s.default)(t, function (t) {
            Array.isArray(t)
              ? e(t).map(function (e) {
                  return n.push(e);
                })
              : (0, i.default)(t)
                ? (0, o.default)(t, function (e, t) {
                    !0 === e && n.push(t), n.push(t + "-" + e);
                  })
                : (0, r.default)(t) && n.push(t);
          }),
          n
        );
      });
      t.default = a;
    },
    85341: (e, t, n) => {
      "use strict";
      t.H8 = void 0;
      var r = c(n(81335)),
        o = c(n(89433)),
        i = c(n(12838)),
        s = c(n(17516)),
        l = c(n(72818)),
        a = c(n(60363));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      s.default, (t.H8 = s.default), l.default, a.default;
      var h = function (e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), s = 1;
          s < t;
          s++
        )
          n[s - 1] = arguments[s];
        var l = (0, r.default)(n),
          a = (0, o.default)(e, l);
        return (0, i.default)(a);
      };
      t.Ay = h;
    },
    60363: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.default = function (e, t) {
        var n = {},
          r = function (e) {
            var t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
            n[e] = t;
          };
        return (
          0 === e && r("first-child"),
          e === t - 1 && r("last-child"),
          (0 === e || e % 2 == 0) && r("even"),
          1 === Math.abs(e % 2) && r("odd"),
          r("nth-child", e),
          n
        );
      };
    },
    89433: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.mergeClasses = void 0);
      var r = s(n(62369)),
        o = s(n(52305)),
        i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          };
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var l = (t.mergeClasses = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = (e.default && (0, o.default)(e.default)) || {};
        return (
          t.map(function (t) {
            var o = e[t];
            return (
              o &&
                (0, r.default)(o, function (e, t) {
                  n[t] || (n[t] = {}), (n[t] = i({}, n[t], o[t]));
                }),
              t
            );
          }),
          n
        );
      });
      t.default = l;
    },
    12362: (e, t, n) => {
      "use strict";
      n.d(t, {
        I$: () => d,
        RV: () => A,
        hy: () => g,
        st: () => k,
        wh: () => S,
        y_: () => x,
      });
      var r = n(63734),
        o = n(57053),
        i = n(52893);
      const s = (e, t) =>
        !e.selection.empty &&
        (t && t(e.tr.deleteSelection().scrollIntoView()), !0);
      function l(e, t) {
        let { $cursor: n } = e.selection;
        return !n || (t ? !t.endOfTextblock("backward", e) : n.parentOffset > 0)
          ? null
          : n;
      }
      function a(e, t, n = !1) {
        for (let r = e; r; r = "start" == t ? r.firstChild : r.lastChild) {
          if (r.isTextblock) return !0;
          if (n && 1 != r.childCount) return !1;
        }
        return !1;
      }
      function c(e) {
        if (!e.parent.type.spec.isolating)
          for (let t = e.depth - 1; t >= 0; t--) {
            if (e.index(t) > 0) return e.doc.resolve(e.before(t + 1));
            if (e.node(t).type.spec.isolating) break;
          }
        return null;
      }
      function h(e, t) {
        let { $cursor: n } = e.selection;
        return !n ||
          (t
            ? !t.endOfTextblock("forward", e)
            : n.parentOffset < n.parent.content.size)
          ? null
          : n;
      }
      function p(e) {
        if (!e.parent.type.spec.isolating)
          for (let t = e.depth - 1; t >= 0; t--) {
            let n = e.node(t);
            if (e.index(t) + 1 < n.childCount)
              return e.doc.resolve(e.after(t + 1));
            if (n.type.spec.isolating) break;
          }
        return null;
      }
      function u(e) {
        for (let t = 0; t < e.edgeCount; t++) {
          let { type: n } = e.edge(t);
          if (n.isTextblock && !n.hasRequiredAttrs()) return n;
        }
        return null;
      }
      const d = (e, t) => {
        let { $head: n, $anchor: r } = e.selection;
        if (!n.parent.type.spec.code || !n.sameParent(r)) return !1;
        let o = n.node(-1),
          s = n.indexAfter(-1),
          l = u(o.contentMatchAt(s));
        if (!l || !o.canReplaceWith(s, s, l)) return !1;
        if (t) {
          let r = n.after(),
            o = e.tr.replaceWith(r, r, l.createAndFill());
          o.setSelection(i.LN.near(o.doc.resolve(r), 1)), t(o.scrollIntoView());
        }
        return !0;
      };
      const f = (e, t) => {
        let { $from: n, $to: o } = e.selection;
        if (e.selection instanceof i.nh && e.selection.node.isBlock)
          return !(
            !n.parentOffset ||
            !(0, r.zy)(e.doc, n.pos) ||
            (t && t(e.tr.split(n.pos).scrollIntoView()), 0)
          );
        if (!n.parent.isBlock) return !1;
        if (t) {
          let s = o.parentOffset == o.parent.content.size,
            l = e.tr;
          (e.selection instanceof i.U3 || e.selection instanceof i.i5) &&
            l.deleteSelection();
          let a =
              0 == n.depth
                ? null
                : u(n.node(-1).contentMatchAt(n.indexAfter(-1))),
            c = m && m(o.parent, s),
            h = c ? [c] : s && a ? [{ type: a }] : void 0,
            p = (0, r.zy)(l.doc, l.mapping.map(n.pos), 1, h);
          if (
            (h ||
              p ||
              !(0, r.zy)(
                l.doc,
                l.mapping.map(n.pos),
                1,
                a ? [{ type: a }] : void 0,
              ) ||
              (a && (h = [{ type: a }]), (p = !0)),
            p &&
              (l.split(l.mapping.map(n.pos), 1, h),
              !s && !n.parentOffset && n.parent.type != a))
          ) {
            let e = l.mapping.map(n.before()),
              t = l.doc.resolve(e);
            a &&
              n.node(-1).canReplaceWith(t.index(), t.index() + 1, a) &&
              l.setNodeMarkup(l.mapping.map(n.before()), a);
          }
          t(l.scrollIntoView());
        }
        return !0;
      };
      var m;
      const g = (e, t) => {
        let n,
          { $from: r, to: o } = e.selection,
          s = r.sharedDepth(o);
        return (
          0 != s &&
          ((n = r.before(s)),
          t && t(e.tr.setSelection(i.nh.create(e.doc, n))),
          !0)
        );
      };
      function b(e, t, n) {
        let s,
          l,
          c = t.nodeBefore,
          h = t.nodeAfter;
        if (c.type.spec.isolating || h.type.spec.isolating) return !1;
        if (
          (function (e, t, n) {
            let o = t.nodeBefore,
              i = t.nodeAfter,
              s = t.index();
            return !(
              !(o && i && o.type.compatibleContent(i.type)) ||
              (!o.content.size && t.parent.canReplace(s - 1, s)
                ? (n &&
                    n(e.tr.delete(t.pos - o.nodeSize, t.pos).scrollIntoView()),
                  0)
                : !t.parent.canReplace(s, s + 1) ||
                  (!i.isTextblock && !(0, r.n9)(e.doc, t.pos)) ||
                  (n &&
                    n(
                      e.tr
                        .clearIncompatible(
                          t.pos,
                          o.type,
                          o.contentMatchAt(o.childCount),
                        )
                        .join(t.pos)
                        .scrollIntoView(),
                    ),
                  0))
            );
          })(e, t, n)
        )
          return !0;
        let p = t.parent.canReplace(t.index(), t.index() + 1);
        if (
          p &&
          (s = (l = c.contentMatchAt(c.childCount)).findWrapping(h.type)) &&
          l.matchType(s[0] || h.type).validEnd
        ) {
          if (n) {
            let i = t.pos + h.nodeSize,
              l = o.FK.empty;
            for (let e = s.length - 1; e >= 0; e--)
              l = o.FK.from(s[e].create(null, l));
            l = o.FK.from(c.copy(l));
            let a = e.tr.step(
                new r.Wg(
                  t.pos - 1,
                  i,
                  t.pos,
                  i,
                  new o.Ji(l, 1, 0),
                  s.length,
                  !0,
                ),
              ),
              p = i + 2 * s.length;
            (0, r.n9)(a.doc, p) && a.join(p), n(a.scrollIntoView());
          }
          return !0;
        }
        let u = i.LN.findFrom(t, 1),
          d = u && u.$from.blockRange(u.$to),
          f = d && (0, r.jP)(d);
        if (null != f && f >= t.depth)
          return n && n(e.tr.lift(d, f).scrollIntoView()), !0;
        if (p && a(h, "start", !0) && a(c, "end")) {
          let i = c,
            s = [];
          for (; s.push(i), !i.isTextblock; ) i = i.lastChild;
          let l = h,
            a = 1;
          for (; !l.isTextblock; l = l.firstChild) a++;
          if (i.canReplace(i.childCount, i.childCount, l.content)) {
            if (n) {
              let i = o.FK.empty;
              for (let e = s.length - 1; e >= 0; e--)
                i = o.FK.from(s[e].copy(i));
              n(
                e.tr
                  .step(
                    new r.Wg(
                      t.pos - s.length,
                      t.pos + h.nodeSize,
                      t.pos + a,
                      t.pos + h.nodeSize - a,
                      new o.Ji(i, s.length, 0),
                      0,
                      !0,
                    ),
                  )
                  .scrollIntoView(),
              );
            }
            return !0;
          }
        }
        return !1;
      }
      function y(e) {
        return function (t, n) {
          let r = t.selection,
            o = e < 0 ? r.$from : r.$to,
            s = o.depth;
          for (; o.node(s).isInline; ) {
            if (!s) return !1;
            s--;
          }
          return (
            !!o.node(s).isTextblock &&
            (n &&
              n(
                t.tr.setSelection(
                  i.U3.create(t.doc, e < 0 ? o.start(s) : o.end(s)),
                ),
              ),
            !0)
          );
        };
      }
      const v = y(-1),
        w = y(1);
      function x(e, t = null) {
        return function (n, r) {
          let o = !1;
          for (let r = 0; r < n.selection.ranges.length && !o; r++) {
            let {
              $from: { pos: i },
              $to: { pos: s },
            } = n.selection.ranges[r];
            n.doc.nodesBetween(i, s, (r, i) => {
              if (o) return !1;
              if (r.isTextblock && !r.hasMarkup(e, t))
                if (r.type == e) o = !0;
                else {
                  let t = n.doc.resolve(i),
                    r = t.index();
                  o = t.parent.canReplaceWith(r, r + 1, e);
                }
            });
          }
          if (!o) return !1;
          if (r) {
            let o = n.tr;
            for (let r = 0; r < n.selection.ranges.length; r++) {
              let {
                $from: { pos: i },
                $to: { pos: s },
              } = n.selection.ranges[r];
              o.setBlockType(i, s, e, t);
            }
            r(o.scrollIntoView());
          }
          return !0;
        };
      }
      function S(e, t = null) {
        return function (n, r) {
          let { empty: o, $cursor: i, ranges: s } = n.selection;
          if (
            (o && !i) ||
            !(function (e, t, n) {
              for (let r = 0; r < t.length; r++) {
                let { $from: o, $to: i } = t[r],
                  s =
                    0 == o.depth && e.inlineContent && e.type.allowsMarkType(n);
                if (
                  (e.nodesBetween(o.pos, i.pos, (e) => {
                    if (s) return !1;
                    s = e.inlineContent && e.type.allowsMarkType(n);
                  }),
                  s)
                )
                  return !0;
              }
              return !1;
            })(n.doc, s, e)
          )
            return !1;
          if (r)
            if (i)
              e.isInSet(n.storedMarks || i.marks())
                ? r(n.tr.removeStoredMark(e))
                : r(n.tr.addStoredMark(e.create(t)));
            else {
              let o = !1,
                i = n.tr;
              for (let t = 0; !o && t < s.length; t++) {
                let { $from: r, $to: i } = s[t];
                o = n.doc.rangeHasMark(r.pos, i.pos, e);
              }
              for (let n = 0; n < s.length; n++) {
                let { $from: r, $to: l } = s[n];
                if (o) i.removeMark(r.pos, l.pos, e);
                else {
                  let n = r.pos,
                    o = l.pos,
                    s = r.nodeAfter,
                    a = l.nodeBefore,
                    c = s && s.isText ? /^\s*/.exec(s.text)[0].length : 0,
                    h = a && a.isText ? /\s*$/.exec(a.text)[0].length : 0;
                  n + c < o && ((n += c), (o -= h)),
                    i.addMark(n, o, e.create(t));
                }
              }
              r(i.scrollIntoView());
            }
          return !0;
        };
      }
      function k(...e) {
        return function (t, n, r) {
          for (let o = 0; o < e.length; o++) if (e[o](t, n, r)) return !0;
          return !1;
        };
      }
      let C = k(
          s,
          (e, t, n) => {
            let s = l(e, n);
            if (!s) return !1;
            let h = c(s);
            if (!h) {
              let n = s.blockRange(),
                o = n && (0, r.jP)(n);
              return (
                null != o && (t && t(e.tr.lift(n, o).scrollIntoView()), !0)
              );
            }
            let p = h.nodeBefore;
            if (!p.type.spec.isolating && b(e, h, t)) return !0;
            if (
              0 == s.parent.content.size &&
              (a(p, "end") || i.nh.isSelectable(p))
            ) {
              let n = (0, r.$L)(e.doc, s.before(), s.after(), o.Ji.empty);
              if (n && n.slice.size < n.to - n.from) {
                if (t) {
                  let r = e.tr.step(n);
                  r.setSelection(
                    a(p, "end")
                      ? i.LN.findFrom(
                          r.doc.resolve(r.mapping.map(h.pos, -1)),
                          -1,
                        )
                      : i.nh.create(r.doc, h.pos - p.nodeSize),
                  ),
                    t(r.scrollIntoView());
                }
                return !0;
              }
            }
            return (
              !(!p.isAtom || h.depth != s.depth - 1) &&
              (t && t(e.tr.delete(h.pos - p.nodeSize, h.pos).scrollIntoView()),
              !0)
            );
          },
          (e, t, n) => {
            let { $head: r, empty: o } = e.selection,
              s = r;
            if (!o) return !1;
            if (r.parent.isTextblock) {
              if (n ? !n.endOfTextblock("backward", e) : r.parentOffset > 0)
                return !1;
              s = c(r);
            }
            let l = s && s.nodeBefore;
            return (
              !(!l || !i.nh.isSelectable(l)) &&
              (t &&
                t(
                  e.tr
                    .setSelection(i.nh.create(e.doc, s.pos - l.nodeSize))
                    .scrollIntoView(),
                ),
              !0)
            );
          },
        ),
        O = k(
          s,
          (e, t, n) => {
            let s = h(e, n);
            if (!s) return !1;
            let l = p(s);
            if (!l) return !1;
            let c = l.nodeAfter;
            if (b(e, l, t)) return !0;
            if (
              0 == s.parent.content.size &&
              (a(c, "start") || i.nh.isSelectable(c))
            ) {
              let n = (0, r.$L)(e.doc, s.before(), s.after(), o.Ji.empty);
              if (n && n.slice.size < n.to - n.from) {
                if (t) {
                  let r = e.tr.step(n);
                  r.setSelection(
                    a(c, "start")
                      ? i.LN.findFrom(r.doc.resolve(r.mapping.map(l.pos)), 1)
                      : i.nh.create(r.doc, r.mapping.map(l.pos)),
                  ),
                    t(r.scrollIntoView());
                }
                return !0;
              }
            }
            return (
              !(!c.isAtom || l.depth != s.depth - 1) &&
              (t && t(e.tr.delete(l.pos, l.pos + c.nodeSize).scrollIntoView()),
              !0)
            );
          },
          (e, t, n) => {
            let { $head: r, empty: o } = e.selection,
              s = r;
            if (!o) return !1;
            if (r.parent.isTextblock) {
              if (
                n
                  ? !n.endOfTextblock("forward", e)
                  : r.parentOffset < r.parent.content.size
              )
                return !1;
              s = p(r);
            }
            let l = s && s.nodeAfter;
            return (
              !(!l || !i.nh.isSelectable(l)) &&
              (t &&
                t(
                  e.tr.setSelection(i.nh.create(e.doc, s.pos)).scrollIntoView(),
                ),
              !0)
            );
          },
        );
      const M = {
          Enter: k(
            (e, t) => {
              let { $head: n, $anchor: r } = e.selection;
              return (
                !(!n.parent.type.spec.code || !n.sameParent(r)) &&
                (t && t(e.tr.insertText("\n").scrollIntoView()), !0)
              );
            },
            (e, t) => {
              let n = e.selection,
                { $from: r, $to: o } = n;
              if (
                n instanceof i.i5 ||
                r.parent.inlineContent ||
                o.parent.inlineContent
              )
                return !1;
              let s = u(o.parent.contentMatchAt(o.indexAfter()));
              if (!s || !s.isTextblock) return !1;
              if (t) {
                let n = (
                    !r.parentOffset && o.index() < o.parent.childCount ? r : o
                  ).pos,
                  l = e.tr.insert(n, s.createAndFill());
                l.setSelection(i.U3.create(l.doc, n + 1)),
                  t(l.scrollIntoView());
              }
              return !0;
            },
            (e, t) => {
              let { $cursor: n } = e.selection;
              if (!n || n.parent.content.size) return !1;
              if (n.depth > 1 && n.after() != n.end(-1)) {
                let o = n.before();
                if ((0, r.zy)(e.doc, o))
                  return t && t(e.tr.split(o).scrollIntoView()), !0;
              }
              let o = n.blockRange(),
                i = o && (0, r.jP)(o);
              return (
                null != i && (t && t(e.tr.lift(o, i).scrollIntoView()), !0)
              );
            },
            f,
          ),
          "Mod-Enter": d,
          Backspace: C,
          "Mod-Backspace": C,
          "Shift-Backspace": C,
          Delete: O,
          "Mod-Delete": O,
          "Mod-a": (e, t) => (t && t(e.tr.setSelection(new i.i5(e.doc))), !0),
        },
        E = {
          "Ctrl-h": M.Backspace,
          "Alt-Backspace": M["Mod-Backspace"],
          "Ctrl-d": M.Delete,
          "Ctrl-Alt-Backspace": M["Mod-Delete"],
          "Alt-Delete": M["Mod-Delete"],
          "Alt-d": M["Mod-Delete"],
          "Ctrl-a": v,
          "Ctrl-e": w,
        };
      for (let e in M) E[e] = M[e];
      const A = (
        "undefined" != typeof navigator
          ? /Mac|iP(hone|[oa]d)/.test(navigator.platform)
          : !("undefined" == typeof os || !os.platform) &&
            "darwin" == os.platform()
      )
        ? E
        : M;
    },
    15024: (e, t, n) => {
      "use strict";
      n.d(t, { z: () => c });
      var r = n(7502),
        o = n(52893),
        i = n(57053),
        s = n(29287);
      class l extends o.LN {
        constructor(e) {
          super(e, e);
        }
        map(e, t) {
          let n = e.resolve(t.map(this.head));
          return l.valid(n) ? new l(n) : o.LN.near(n);
        }
        content() {
          return i.Ji.empty;
        }
        eq(e) {
          return e instanceof l && e.head == this.head;
        }
        toJSON() {
          return { type: "gapcursor", pos: this.head };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.pos)
            throw new RangeError("Invalid input for GapCursor.fromJSON");
          return new l(e.resolve(t.pos));
        }
        getBookmark() {
          return new a(this.anchor);
        }
        static valid(e) {
          let t = e.parent;
          if (
            t.isTextblock ||
            !(function (e) {
              for (let t = e.depth; t >= 0; t--) {
                let n = e.index(t),
                  r = e.node(t);
                if (0 != n)
                  for (let e = r.child(n - 1); ; e = e.lastChild) {
                    if (
                      (0 == e.childCount && !e.inlineContent) ||
                      e.isAtom ||
                      e.type.spec.isolating
                    )
                      return !0;
                    if (e.inlineContent) return !1;
                  }
                else if (r.type.spec.isolating) return !0;
              }
              return !0;
            })(e) ||
            !(function (e) {
              for (let t = e.depth; t >= 0; t--) {
                let n = e.indexAfter(t),
                  r = e.node(t);
                if (n != r.childCount)
                  for (let e = r.child(n); ; e = e.firstChild) {
                    if (
                      (0 == e.childCount && !e.inlineContent) ||
                      e.isAtom ||
                      e.type.spec.isolating
                    )
                      return !0;
                    if (e.inlineContent) return !1;
                  }
                else if (r.type.spec.isolating) return !0;
              }
              return !0;
            })(e)
          )
            return !1;
          let n = t.type.spec.allowGapCursor;
          if (null != n) return n;
          let r = t.contentMatchAt(e.index()).defaultType;
          return r && r.isTextblock;
        }
        static findGapCursorFrom(e, t, n = !1) {
          e: for (;;) {
            if (!n && l.valid(e)) return e;
            let r = e.pos,
              i = null;
            for (let n = e.depth; ; n--) {
              let o = e.node(n);
              if (t > 0 ? e.indexAfter(n) < o.childCount : e.index(n) > 0) {
                i = o.child(t > 0 ? e.indexAfter(n) : e.index(n) - 1);
                break;
              }
              if (0 == n) return null;
              r += t;
              let s = e.doc.resolve(r);
              if (l.valid(s)) return s;
            }
            for (;;) {
              let s = t > 0 ? i.firstChild : i.lastChild;
              if (!s) {
                if (i.isAtom && !i.isText && !o.nh.isSelectable(i)) {
                  (e = e.doc.resolve(r + i.nodeSize * t)), (n = !1);
                  continue e;
                }
                break;
              }
              (i = s), (r += t);
              let a = e.doc.resolve(r);
              if (l.valid(a)) return a;
            }
            return null;
          }
        }
      }
      (l.prototype.visible = !1),
        (l.findFrom = l.findGapCursorFrom),
        o.LN.jsonID("gapcursor", l);
      class a {
        constructor(e) {
          this.pos = e;
        }
        map(e) {
          return new a(e.map(this.pos));
        }
        resolve(e) {
          let t = e.resolve(this.pos);
          return l.valid(t) ? new l(t) : o.LN.near(t);
        }
      }
      function c() {
        return new o.k_({
          props: {
            decorations: f,
            createSelectionBetween: (e, t, n) =>
              t.pos == n.pos && l.valid(n) ? new l(n) : null,
            handleClick: u,
            handleKeyDown: h,
            handleDOMEvents: { beforeinput: d },
          },
        });
      }
      const h = (0, r.K)({
        ArrowLeft: p("horiz", -1),
        ArrowRight: p("horiz", 1),
        ArrowUp: p("vert", -1),
        ArrowDown: p("vert", 1),
      });
      function p(e, t) {
        const n =
          "vert" == e ? (t > 0 ? "down" : "up") : t > 0 ? "right" : "left";
        return function (e, r, i) {
          let s = e.selection,
            a = t > 0 ? s.$to : s.$from,
            c = s.empty;
          if (s instanceof o.U3) {
            if (!i.endOfTextblock(n) || 0 == a.depth) return !1;
            (c = !1), (a = e.doc.resolve(t > 0 ? a.after() : a.before()));
          }
          let h = l.findGapCursorFrom(a, t, c);
          return !!h && (r && r(e.tr.setSelection(new l(h))), !0);
        };
      }
      function u(e, t, n) {
        if (!e || !e.editable) return !1;
        let r = e.state.doc.resolve(t);
        if (!l.valid(r)) return !1;
        let i = e.posAtCoords({ left: n.clientX, top: n.clientY });
        return (
          !(
            i &&
            i.inside > -1 &&
            o.nh.isSelectable(e.state.doc.nodeAt(i.inside))
          ) && (e.dispatch(e.state.tr.setSelection(new l(r))), !0)
        );
      }
      function d(e, t) {
        if (
          "insertCompositionText" != t.inputType ||
          !(e.state.selection instanceof l)
        )
          return !1;
        let { $from: n } = e.state.selection,
          r = n.parent
            .contentMatchAt(n.index())
            .findWrapping(e.state.schema.nodes.text);
        if (!r) return !1;
        let s = i.FK.empty;
        for (let e = r.length - 1; e >= 0; e--)
          s = i.FK.from(r[e].createAndFill(null, s));
        let a = e.state.tr.replace(n.pos, n.pos, new i.Ji(s, 0, 0));
        return (
          a.setSelection(o.U3.near(a.doc.resolve(n.pos + 1))), e.dispatch(a), !1
        );
      }
      function f(e) {
        if (!(e.selection instanceof l)) return null;
        let t = document.createElement("div");
        return (
          (t.className = "ProseMirror-gapcursor"),
          s.zF.create(e.doc, [
            s.NZ.widget(e.selection.head, t, { key: "gapcursor" }),
          ])
        );
      }
    },
    7502: (e, t, n) => {
      "use strict";
      n.d(t, { K: () => f, w: () => d });
      for (
        var r = {
            8: "Backspace",
            9: "Tab",
            10: "Enter",
            12: "NumLock",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            44: "PrintScreen",
            45: "Insert",
            46: "Delete",
            59: ";",
            61: "=",
            91: "Meta",
            92: "Meta",
            106: "*",
            107: "+",
            108: ",",
            109: "-",
            110: ".",
            111: "/",
            144: "NumLock",
            145: "ScrollLock",
            160: "Shift",
            161: "Shift",
            162: "Control",
            163: "Control",
            164: "Alt",
            165: "Alt",
            173: "-",
            186: ";",
            187: "=",
            188: ",",
            189: "-",
            190: ".",
            191: "/",
            192: "`",
            219: "[",
            220: "\\",
            221: "]",
            222: "'",
          },
          o = {
            48: ")",
            49: "!",
            50: "@",
            51: "#",
            52: "$",
            53: "%",
            54: "^",
            55: "&",
            56: "*",
            57: "(",
            59: ":",
            61: "+",
            173: "_",
            186: ":",
            187: "+",
            188: "<",
            189: "_",
            190: ">",
            191: "?",
            192: "~",
            219: "{",
            220: "|",
            221: "}",
            222: '"',
          },
          i = "undefined" != typeof navigator && /Mac/.test(navigator.platform),
          s =
            "undefined" != typeof navigator &&
            /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(
              navigator.userAgent,
            ),
          l = 0;
        l < 10;
        l++
      )
        r[48 + l] = r[96 + l] = String(l);
      for (l = 1; l <= 24; l++) r[l + 111] = "F" + l;
      for (l = 65; l <= 90; l++)
        (r[l] = String.fromCharCode(l + 32)), (o[l] = String.fromCharCode(l));
      for (var a in r) o.hasOwnProperty(a) || (o[a] = r[a]);
      var c = n(52893);
      const h =
        "undefined" != typeof navigator &&
        /Mac|iP(hone|[oa]d)/.test(navigator.platform);
      function p(e) {
        let t,
          n,
          r,
          o,
          i = e.split(/-(?!$)/),
          s = i[i.length - 1];
        "Space" == s && (s = " ");
        for (let e = 0; e < i.length - 1; e++) {
          let s = i[e];
          if (/^(cmd|meta|m)$/i.test(s)) o = !0;
          else if (/^a(lt)?$/i.test(s)) t = !0;
          else if (/^(c|ctrl|control)$/i.test(s)) n = !0;
          else if (/^s(hift)?$/i.test(s)) r = !0;
          else {
            if (!/^mod$/i.test(s))
              throw new Error("Unrecognized modifier name: " + s);
            h ? (o = !0) : (n = !0);
          }
        }
        return (
          t && (s = "Alt-" + s),
          n && (s = "Ctrl-" + s),
          o && (s = "Meta-" + s),
          r && (s = "Shift-" + s),
          s
        );
      }
      function u(e, t, n = !0) {
        return (
          t.altKey && (e = "Alt-" + e),
          t.ctrlKey && (e = "Ctrl-" + e),
          t.metaKey && (e = "Meta-" + e),
          n && t.shiftKey && (e = "Shift-" + e),
          e
        );
      }
      function d(e) {
        return new c.k_({ props: { handleKeyDown: f(e) } });
      }
      function f(e) {
        let t = (function (e) {
          let t = Object.create(null);
          for (let n in e) t[p(n)] = e[n];
          return t;
        })(e);
        return function (e, n) {
          let l,
            a = (function (e) {
              var t =
                (!(
                  (i && e.metaKey && e.shiftKey && !e.ctrlKey && !e.altKey) ||
                  (s && e.shiftKey && e.key && 1 == e.key.length) ||
                  "Unidentified" == e.key
                ) &&
                  e.key) ||
                (e.shiftKey ? o : r)[e.keyCode] ||
                e.key ||
                "Unidentified";
              return (
                "Esc" == t && (t = "Escape"),
                "Del" == t && (t = "Delete"),
                "Left" == t && (t = "ArrowLeft"),
                "Up" == t && (t = "ArrowUp"),
                "Right" == t && (t = "ArrowRight"),
                "Down" == t && (t = "ArrowDown"),
                t
              );
            })(n),
            c = t[u(a, n)];
          if (c && c(e.state, e.dispatch, e)) return !0;
          if (1 == a.length && " " != a) {
            if (n.shiftKey) {
              let r = t[u(a, n, !1)];
              if (r && r(e.state, e.dispatch, e)) return !0;
            }
            if (
              (n.shiftKey || n.altKey || n.metaKey || a.charCodeAt(0) > 127) &&
              (l = r[n.keyCode]) &&
              l != a
            ) {
              let r = t[u(l, n)];
              if (r && r(e.state, e.dispatch, e)) return !0;
            }
          }
          return !1;
        };
      }
    },
    57053: (e, t, n) => {
      "use strict";
      function r(e) {
        this.content = e;
      }
      n.d(t, {
        S4: () => Y,
        ZF: () => le,
        FK: () => l,
        CU: () => p,
        sX: () => q,
        bP: () => _,
        u$: () => N,
        vI: () => u,
        Sj: () => G,
        Ji: () => d,
      }),
        (r.prototype = {
          constructor: r,
          find: function (e) {
            for (var t = 0; t < this.content.length; t += 2)
              if (this.content[t] === e) return t;
            return -1;
          },
          get: function (e) {
            var t = this.find(e);
            return -1 == t ? void 0 : this.content[t + 1];
          },
          update: function (e, t, n) {
            var o = n && n != e ? this.remove(n) : this,
              i = o.find(e),
              s = o.content.slice();
            return (
              -1 == i ? s.push(n || e, t) : ((s[i + 1] = t), n && (s[i] = n)),
              new r(s)
            );
          },
          remove: function (e) {
            var t = this.find(e);
            if (-1 == t) return this;
            var n = this.content.slice();
            return n.splice(t, 2), new r(n);
          },
          addToStart: function (e, t) {
            return new r([e, t].concat(this.remove(e).content));
          },
          addToEnd: function (e, t) {
            var n = this.remove(e).content.slice();
            return n.push(e, t), new r(n);
          },
          addBefore: function (e, t, n) {
            var o = this.remove(t),
              i = o.content.slice(),
              s = o.find(e);
            return i.splice(-1 == s ? i.length : s, 0, t, n), new r(i);
          },
          forEach: function (e) {
            for (var t = 0; t < this.content.length; t += 2)
              e(this.content[t], this.content[t + 1]);
          },
          prepend: function (e) {
            return (e = r.from(e)).size
              ? new r(e.content.concat(this.subtract(e).content))
              : this;
          },
          append: function (e) {
            return (e = r.from(e)).size
              ? new r(this.subtract(e).content.concat(e.content))
              : this;
          },
          subtract: function (e) {
            var t = this;
            e = r.from(e);
            for (var n = 0; n < e.content.length; n += 2)
              t = t.remove(e.content[n]);
            return t;
          },
          toObject: function () {
            var e = {};
            return (
              this.forEach(function (t, n) {
                e[t] = n;
              }),
              e
            );
          },
          get size() {
            return this.content.length >> 1;
          },
        }),
        (r.from = function (e) {
          if (e instanceof r) return e;
          var t = [];
          if (e) for (var n in e) t.push(n, e[n]);
          return new r(t);
        });
      const o = r;
      function i(e, t, n) {
        for (let r = 0; ; r++) {
          if (r == e.childCount || r == t.childCount)
            return e.childCount == t.childCount ? null : n;
          let o = e.child(r),
            s = t.child(r);
          if (o != s) {
            if (!o.sameMarkup(s)) return n;
            if (o.isText && o.text != s.text) {
              for (let e = 0; o.text[e] == s.text[e]; e++) n++;
              return n;
            }
            if (o.content.size || s.content.size) {
              let e = i(o.content, s.content, n + 1);
              if (null != e) return e;
            }
            n += o.nodeSize;
          } else n += o.nodeSize;
        }
      }
      function s(e, t, n, r) {
        for (let o = e.childCount, i = t.childCount; ; ) {
          if (0 == o || 0 == i) return o == i ? null : { a: n, b: r };
          let l = e.child(--o),
            a = t.child(--i),
            c = l.nodeSize;
          if (l != a) {
            if (!l.sameMarkup(a)) return { a: n, b: r };
            if (l.isText && l.text != a.text) {
              let e = 0,
                t = Math.min(l.text.length, a.text.length);
              for (
                ;
                e < t &&
                l.text[l.text.length - e - 1] == a.text[a.text.length - e - 1];
              )
                e++, n--, r--;
              return { a: n, b: r };
            }
            if (l.content.size || a.content.size) {
              let e = s(l.content, a.content, n - 1, r - 1);
              if (e) return e;
            }
            (n -= c), (r -= c);
          } else (n -= c), (r -= c);
        }
      }
      class l {
        constructor(e, t) {
          if (((this.content = e), (this.size = t || 0), null == t))
            for (let t = 0; t < e.length; t++) this.size += e[t].nodeSize;
        }
        nodesBetween(e, t, n, r = 0, o) {
          for (let i = 0, s = 0; s < t; i++) {
            let l = this.content[i],
              a = s + l.nodeSize;
            if (a > e && !1 !== n(l, r + s, o || null, i) && l.content.size) {
              let o = s + 1;
              l.nodesBetween(
                Math.max(0, e - o),
                Math.min(l.content.size, t - o),
                n,
                r + o,
              );
            }
            s = a;
          }
        }
        descendants(e) {
          this.nodesBetween(0, this.size, e);
        }
        textBetween(e, t, n, r) {
          let o = "",
            i = !0;
          return (
            this.nodesBetween(
              e,
              t,
              (s, l) => {
                let a = s.isText
                  ? s.text.slice(Math.max(e, l) - l, t - l)
                  : s.isLeaf
                    ? r
                      ? "function" == typeof r
                        ? r(s)
                        : r
                      : s.type.spec.leafText
                        ? s.type.spec.leafText(s)
                        : ""
                    : "";
                s.isBlock &&
                  ((s.isLeaf && a) || s.isTextblock) &&
                  n &&
                  (i ? (i = !1) : (o += n)),
                  (o += a);
              },
              0,
            ),
            o
          );
        }
        append(e) {
          if (!e.size) return this;
          if (!this.size) return e;
          let t = this.lastChild,
            n = e.firstChild,
            r = this.content.slice(),
            o = 0;
          for (
            t.isText &&
            t.sameMarkup(n) &&
            ((r[r.length - 1] = t.withText(t.text + n.text)), (o = 1));
            o < e.content.length;
            o++
          )
            r.push(e.content[o]);
          return new l(r, this.size + e.size);
        }
        cut(e, t = this.size) {
          if (0 == e && t == this.size) return this;
          let n = [],
            r = 0;
          if (t > e)
            for (let o = 0, i = 0; i < t; o++) {
              let s = this.content[o],
                l = i + s.nodeSize;
              l > e &&
                ((i < e || l > t) &&
                  (s = s.isText
                    ? s.cut(Math.max(0, e - i), Math.min(s.text.length, t - i))
                    : s.cut(
                        Math.max(0, e - i - 1),
                        Math.min(s.content.size, t - i - 1),
                      )),
                n.push(s),
                (r += s.nodeSize)),
                (i = l);
            }
          return new l(n, r);
        }
        cutByIndex(e, t) {
          return e == t
            ? l.empty
            : 0 == e && t == this.content.length
              ? this
              : new l(this.content.slice(e, t));
        }
        replaceChild(e, t) {
          let n = this.content[e];
          if (n == t) return this;
          let r = this.content.slice(),
            o = this.size + t.nodeSize - n.nodeSize;
          return (r[e] = t), new l(r, o);
        }
        addToStart(e) {
          return new l([e].concat(this.content), this.size + e.nodeSize);
        }
        addToEnd(e) {
          return new l(this.content.concat(e), this.size + e.nodeSize);
        }
        eq(e) {
          if (this.content.length != e.content.length) return !1;
          for (let t = 0; t < this.content.length; t++)
            if (!this.content[t].eq(e.content[t])) return !1;
          return !0;
        }
        get firstChild() {
          return this.content.length ? this.content[0] : null;
        }
        get lastChild() {
          return this.content.length
            ? this.content[this.content.length - 1]
            : null;
        }
        get childCount() {
          return this.content.length;
        }
        child(e) {
          let t = this.content[e];
          if (!t)
            throw new RangeError("Index " + e + " out of range for " + this);
          return t;
        }
        maybeChild(e) {
          return this.content[e] || null;
        }
        forEach(e) {
          for (let t = 0, n = 0; t < this.content.length; t++) {
            let r = this.content[t];
            e(r, n, t), (n += r.nodeSize);
          }
        }
        findDiffStart(e, t = 0) {
          return i(this, e, t);
        }
        findDiffEnd(e, t = this.size, n = e.size) {
          return s(this, e, t, n);
        }
        findIndex(e, t = -1) {
          if (0 == e) return c(0, e);
          if (e == this.size) return c(this.content.length, e);
          if (e > this.size || e < 0)
            throw new RangeError(`Position ${e} outside of fragment (${this})`);
          for (let n = 0, r = 0; ; n++) {
            let o = r + this.child(n).nodeSize;
            if (o >= e) return o == e || t > 0 ? c(n + 1, o) : c(n, r);
            r = o;
          }
        }
        toString() {
          return "<" + this.toStringInner() + ">";
        }
        toStringInner() {
          return this.content.join(", ");
        }
        toJSON() {
          return this.content.length
            ? this.content.map((e) => e.toJSON())
            : null;
        }
        static fromJSON(e, t) {
          if (!t) return l.empty;
          if (!Array.isArray(t))
            throw new RangeError("Invalid input for Fragment.fromJSON");
          return new l(t.map(e.nodeFromJSON));
        }
        static fromArray(e) {
          if (!e.length) return l.empty;
          let t,
            n = 0;
          for (let r = 0; r < e.length; r++) {
            let o = e[r];
            (n += o.nodeSize),
              r && o.isText && e[r - 1].sameMarkup(o)
                ? (t || (t = e.slice(0, r)),
                  (t[t.length - 1] = o.withText(t[t.length - 1].text + o.text)))
                : t && t.push(o);
          }
          return new l(t || e, n);
        }
        static from(e) {
          if (!e) return l.empty;
          if (e instanceof l) return e;
          if (Array.isArray(e)) return this.fromArray(e);
          if (e.attrs) return new l([e], e.nodeSize);
          throw new RangeError(
            "Can not convert " +
              e +
              " to a Fragment" +
              (e.nodesBetween
                ? " (looks like multiple versions of prosemirror-model were loaded)"
                : ""),
          );
        }
      }
      l.empty = new l([], 0);
      const a = { index: 0, offset: 0 };
      function c(e, t) {
        return (a.index = e), (a.offset = t), a;
      }
      function h(e, t) {
        if (e === t) return !0;
        if (!e || "object" != typeof e || !t || "object" != typeof t) return !1;
        let n = Array.isArray(e);
        if (Array.isArray(t) != n) return !1;
        if (n) {
          if (e.length != t.length) return !1;
          for (let n = 0; n < e.length; n++) if (!h(e[n], t[n])) return !1;
        } else {
          for (let n in e) if (!(n in t) || !h(e[n], t[n])) return !1;
          for (let n in t) if (!(n in e)) return !1;
        }
        return !0;
      }
      class p {
        constructor(e, t) {
          (this.type = e), (this.attrs = t);
        }
        addToSet(e) {
          let t,
            n = !1;
          for (let r = 0; r < e.length; r++) {
            let o = e[r];
            if (this.eq(o)) return e;
            if (this.type.excludes(o.type)) t || (t = e.slice(0, r));
            else {
              if (o.type.excludes(this.type)) return e;
              !n &&
                o.type.rank > this.type.rank &&
                (t || (t = e.slice(0, r)), t.push(this), (n = !0)),
                t && t.push(o);
            }
          }
          return t || (t = e.slice()), n || t.push(this), t;
        }
        removeFromSet(e) {
          for (let t = 0; t < e.length; t++)
            if (this.eq(e[t])) return e.slice(0, t).concat(e.slice(t + 1));
          return e;
        }
        isInSet(e) {
          for (let t = 0; t < e.length; t++) if (this.eq(e[t])) return !0;
          return !1;
        }
        eq(e) {
          return this == e || (this.type == e.type && h(this.attrs, e.attrs));
        }
        toJSON() {
          let e = { type: this.type.name };
          for (let t in this.attrs) {
            e.attrs = this.attrs;
            break;
          }
          return e;
        }
        static fromJSON(e, t) {
          if (!t) throw new RangeError("Invalid input for Mark.fromJSON");
          let n = e.marks[t.type];
          if (!n)
            throw new RangeError(
              `There is no mark type ${t.type} in this schema`,
            );
          return n.create(t.attrs);
        }
        static sameSet(e, t) {
          if (e == t) return !0;
          if (e.length != t.length) return !1;
          for (let n = 0; n < e.length; n++) if (!e[n].eq(t[n])) return !1;
          return !0;
        }
        static setFrom(e) {
          if (!e || (Array.isArray(e) && 0 == e.length)) return p.none;
          if (e instanceof p) return [e];
          let t = e.slice();
          return t.sort((e, t) => e.type.rank - t.type.rank), t;
        }
      }
      p.none = [];
      class u extends Error {}
      class d {
        constructor(e, t, n) {
          (this.content = e), (this.openStart = t), (this.openEnd = n);
        }
        get size() {
          return this.content.size - this.openStart - this.openEnd;
        }
        insertAt(e, t) {
          let n = m(this.content, e + this.openStart, t);
          return n && new d(n, this.openStart, this.openEnd);
        }
        removeBetween(e, t) {
          return new d(
            f(this.content, e + this.openStart, t + this.openStart),
            this.openStart,
            this.openEnd,
          );
        }
        eq(e) {
          return (
            this.content.eq(e.content) &&
            this.openStart == e.openStart &&
            this.openEnd == e.openEnd
          );
        }
        toString() {
          return this.content + "(" + this.openStart + "," + this.openEnd + ")";
        }
        toJSON() {
          if (!this.content.size) return null;
          let e = { content: this.content.toJSON() };
          return (
            this.openStart > 0 && (e.openStart = this.openStart),
            this.openEnd > 0 && (e.openEnd = this.openEnd),
            e
          );
        }
        static fromJSON(e, t) {
          if (!t) return d.empty;
          let n = t.openStart || 0,
            r = t.openEnd || 0;
          if ("number" != typeof n || "number" != typeof r)
            throw new RangeError("Invalid input for Slice.fromJSON");
          return new d(l.fromJSON(e, t.content), n, r);
        }
        static maxOpen(e, t = !0) {
          let n = 0,
            r = 0;
          for (
            let r = e.firstChild;
            r && !r.isLeaf && (t || !r.type.spec.isolating);
            r = r.firstChild
          )
            n++;
          for (
            let n = e.lastChild;
            n && !n.isLeaf && (t || !n.type.spec.isolating);
            n = n.lastChild
          )
            r++;
          return new d(e, n, r);
        }
      }
      function f(e, t, n) {
        let { index: r, offset: o } = e.findIndex(t),
          i = e.maybeChild(r),
          { index: s, offset: l } = e.findIndex(n);
        if (o == t || i.isText) {
          if (l != n && !e.child(s).isText)
            throw new RangeError("Removing non-flat range");
          return e.cut(0, t).append(e.cut(n));
        }
        if (r != s) throw new RangeError("Removing non-flat range");
        return e.replaceChild(r, i.copy(f(i.content, t - o - 1, n - o - 1)));
      }
      function m(e, t, n, r) {
        let { index: o, offset: i } = e.findIndex(t),
          s = e.maybeChild(o);
        if (i == t || s.isText)
          return r && !r.canReplace(o, o, n)
            ? null
            : e.cut(0, t).append(n).append(e.cut(t));
        let l = m(s.content, t - i - 1, n);
        return l && e.replaceChild(o, s.copy(l));
      }
      function g(e, t, n) {
        if (n.openStart > e.depth)
          throw new u("Inserted content deeper than insertion position");
        if (e.depth - n.openStart != t.depth - n.openEnd)
          throw new u("Inconsistent open depths");
        return b(e, t, n, 0);
      }
      function b(e, t, n, r) {
        let o = e.index(r),
          i = e.node(r);
        if (o == t.index(r) && r < e.depth - n.openStart) {
          let s = b(e, t, n, r + 1);
          return i.copy(i.content.replaceChild(o, s));
        }
        if (n.content.size) {
          if (n.openStart || n.openEnd || e.depth != r || t.depth != r) {
            let { start: o, end: s } = (function (e, t) {
              let n = t.depth - e.openStart,
                r = t.node(n).copy(e.content);
              for (let e = n - 1; e >= 0; e--) r = t.node(e).copy(l.from(r));
              return {
                start: r.resolveNoCache(e.openStart + n),
                end: r.resolveNoCache(r.content.size - e.openEnd - n),
              };
            })(n, e);
            return S(i, k(e, o, s, t, r));
          }
          {
            let r = e.parent,
              o = r.content;
            return S(
              r,
              o
                .cut(0, e.parentOffset)
                .append(n.content)
                .append(o.cut(t.parentOffset)),
            );
          }
        }
        return S(i, C(e, t, r));
      }
      function y(e, t) {
        if (!t.type.compatibleContent(e.type))
          throw new u("Cannot join " + t.type.name + " onto " + e.type.name);
      }
      function v(e, t, n) {
        let r = e.node(n);
        return y(r, t.node(n)), r;
      }
      function w(e, t) {
        let n = t.length - 1;
        n >= 0 && e.isText && e.sameMarkup(t[n])
          ? (t[n] = e.withText(t[n].text + e.text))
          : t.push(e);
      }
      function x(e, t, n, r) {
        let o = (t || e).node(n),
          i = 0,
          s = t ? t.index(n) : o.childCount;
        e &&
          ((i = e.index(n)),
          e.depth > n ? i++ : e.textOffset && (w(e.nodeAfter, r), i++));
        for (let e = i; e < s; e++) w(o.child(e), r);
        t && t.depth == n && t.textOffset && w(t.nodeBefore, r);
      }
      function S(e, t) {
        return e.type.checkContent(t), e.copy(t);
      }
      function k(e, t, n, r, o) {
        let i = e.depth > o && v(e, t, o + 1),
          s = r.depth > o && v(n, r, o + 1),
          a = [];
        return (
          x(null, e, o, a),
          i && s && t.index(o) == n.index(o)
            ? (y(i, s), w(S(i, k(e, t, n, r, o + 1)), a))
            : (i && w(S(i, C(e, t, o + 1)), a),
              x(t, n, o, a),
              s && w(S(s, C(n, r, o + 1)), a)),
          x(r, null, o, a),
          new l(a)
        );
      }
      function C(e, t, n) {
        let r = [];
        if ((x(null, e, n, r), e.depth > n)) {
          w(S(v(e, t, n + 1), C(e, t, n + 1)), r);
        }
        return x(t, null, n, r), new l(r);
      }
      d.empty = new d(l.empty, 0, 0);
      class O {
        constructor(e, t, n) {
          (this.pos = e),
            (this.path = t),
            (this.parentOffset = n),
            (this.depth = t.length / 3 - 1);
        }
        resolveDepth(e) {
          return null == e ? this.depth : e < 0 ? this.depth + e : e;
        }
        get parent() {
          return this.node(this.depth);
        }
        get doc() {
          return this.node(0);
        }
        node(e) {
          return this.path[3 * this.resolveDepth(e)];
        }
        index(e) {
          return this.path[3 * this.resolveDepth(e) + 1];
        }
        indexAfter(e) {
          return (
            (e = this.resolveDepth(e)),
            this.index(e) + (e != this.depth || this.textOffset ? 1 : 0)
          );
        }
        start(e) {
          return 0 == (e = this.resolveDepth(e)) ? 0 : this.path[3 * e - 1] + 1;
        }
        end(e) {
          return (
            (e = this.resolveDepth(e)),
            this.start(e) + this.node(e).content.size
          );
        }
        before(e) {
          if (!(e = this.resolveDepth(e)))
            throw new RangeError(
              "There is no position before the top-level node",
            );
          return e == this.depth + 1 ? this.pos : this.path[3 * e - 1];
        }
        after(e) {
          if (!(e = this.resolveDepth(e)))
            throw new RangeError(
              "There is no position after the top-level node",
            );
          return e == this.depth + 1
            ? this.pos
            : this.path[3 * e - 1] + this.path[3 * e].nodeSize;
        }
        get textOffset() {
          return this.pos - this.path[this.path.length - 1];
        }
        get nodeAfter() {
          let e = this.parent,
            t = this.index(this.depth);
          if (t == e.childCount) return null;
          let n = this.pos - this.path[this.path.length - 1],
            r = e.child(t);
          return n ? e.child(t).cut(n) : r;
        }
        get nodeBefore() {
          let e = this.index(this.depth),
            t = this.pos - this.path[this.path.length - 1];
          return t
            ? this.parent.child(e).cut(0, t)
            : 0 == e
              ? null
              : this.parent.child(e - 1);
        }
        posAtIndex(e, t) {
          t = this.resolveDepth(t);
          let n = this.path[3 * t],
            r = 0 == t ? 0 : this.path[3 * t - 1] + 1;
          for (let t = 0; t < e; t++) r += n.child(t).nodeSize;
          return r;
        }
        marks() {
          let e = this.parent,
            t = this.index();
          if (0 == e.content.size) return p.none;
          if (this.textOffset) return e.child(t).marks;
          let n = e.maybeChild(t - 1),
            r = e.maybeChild(t);
          if (!n) {
            let e = n;
            (n = r), (r = e);
          }
          let o = n.marks;
          for (var i = 0; i < o.length; i++)
            !1 !== o[i].type.spec.inclusive ||
              (r && o[i].isInSet(r.marks)) ||
              (o = o[i--].removeFromSet(o));
          return o;
        }
        marksAcross(e) {
          let t = this.parent.maybeChild(this.index());
          if (!t || !t.isInline) return null;
          let n = t.marks,
            r = e.parent.maybeChild(e.index());
          for (var o = 0; o < n.length; o++)
            !1 !== n[o].type.spec.inclusive ||
              (r && n[o].isInSet(r.marks)) ||
              (n = n[o--].removeFromSet(n));
          return n;
        }
        sharedDepth(e) {
          for (let t = this.depth; t > 0; t--)
            if (this.start(t) <= e && this.end(t) >= e) return t;
          return 0;
        }
        blockRange(e = this, t) {
          if (e.pos < this.pos) return e.blockRange(this);
          for (
            let n =
              this.depth -
              (this.parent.inlineContent || this.pos == e.pos ? 1 : 0);
            n >= 0;
            n--
          )
            if (e.pos <= this.end(n) && (!t || t(this.node(n))))
              return new N(this, e, n);
          return null;
        }
        sameParent(e) {
          return this.pos - this.parentOffset == e.pos - e.parentOffset;
        }
        max(e) {
          return e.pos > this.pos ? e : this;
        }
        min(e) {
          return e.pos < this.pos ? e : this;
        }
        toString() {
          let e = "";
          for (let t = 1; t <= this.depth; t++)
            e +=
              (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
          return e + ":" + this.parentOffset;
        }
        static resolve(e, t) {
          if (!(t >= 0 && t <= e.content.size))
            throw new RangeError("Position " + t + " out of range");
          let n = [],
            r = 0,
            o = t;
          for (let t = e; ; ) {
            let { index: e, offset: i } = t.content.findIndex(o),
              s = o - i;
            if ((n.push(t, e, r + i), !s)) break;
            if (((t = t.child(e)), t.isText)) break;
            (o = s - 1), (r += i + 1);
          }
          return new O(t, n, o);
        }
        static resolveCached(e, t) {
          for (let n = 0; n < M.length; n++) {
            let r = M[n];
            if (r.pos == t && r.doc == e) return r;
          }
          let n = (M[E] = O.resolve(e, t));
          return (E = (E + 1) % A), n;
        }
      }
      let M = [],
        E = 0,
        A = 12;
      class N {
        constructor(e, t, n) {
          (this.$from = e), (this.$to = t), (this.depth = n);
        }
        get start() {
          return this.$from.before(this.depth + 1);
        }
        get end() {
          return this.$to.after(this.depth + 1);
        }
        get parent() {
          return this.$from.node(this.depth);
        }
        get startIndex() {
          return this.$from.index(this.depth);
        }
        get endIndex() {
          return this.$to.indexAfter(this.depth);
        }
      }
      const T = Object.create(null);
      class _ {
        constructor(e, t, n, r = p.none) {
          (this.type = e),
            (this.attrs = t),
            (this.marks = r),
            (this.content = n || l.empty);
        }
        get nodeSize() {
          return this.isLeaf ? 1 : 2 + this.content.size;
        }
        get childCount() {
          return this.content.childCount;
        }
        child(e) {
          return this.content.child(e);
        }
        maybeChild(e) {
          return this.content.maybeChild(e);
        }
        forEach(e) {
          this.content.forEach(e);
        }
        nodesBetween(e, t, n, r = 0) {
          this.content.nodesBetween(e, t, n, r, this);
        }
        descendants(e) {
          this.nodesBetween(0, this.content.size, e);
        }
        get textContent() {
          return this.isLeaf && this.type.spec.leafText
            ? this.type.spec.leafText(this)
            : this.textBetween(0, this.content.size, "");
        }
        textBetween(e, t, n, r) {
          return this.content.textBetween(e, t, n, r);
        }
        get firstChild() {
          return this.content.firstChild;
        }
        get lastChild() {
          return this.content.lastChild;
        }
        eq(e) {
          return (
            this == e || (this.sameMarkup(e) && this.content.eq(e.content))
          );
        }
        sameMarkup(e) {
          return this.hasMarkup(e.type, e.attrs, e.marks);
        }
        hasMarkup(e, t, n) {
          return (
            this.type == e &&
            h(this.attrs, t || e.defaultAttrs || T) &&
            p.sameSet(this.marks, n || p.none)
          );
        }
        copy(e = null) {
          return e == this.content
            ? this
            : new _(this.type, this.attrs, e, this.marks);
        }
        mark(e) {
          return e == this.marks
            ? this
            : new _(this.type, this.attrs, this.content, e);
        }
        cut(e, t = this.content.size) {
          return 0 == e && t == this.content.size
            ? this
            : this.copy(this.content.cut(e, t));
        }
        slice(e, t = this.content.size, n = !1) {
          if (e == t) return d.empty;
          let r = this.resolve(e),
            o = this.resolve(t),
            i = n ? 0 : r.sharedDepth(t),
            s = r.start(i),
            l = r.node(i).content.cut(r.pos - s, o.pos - s);
          return new d(l, r.depth - i, o.depth - i);
        }
        replace(e, t, n) {
          return g(this.resolve(e), this.resolve(t), n);
        }
        nodeAt(e) {
          for (let t = this; ; ) {
            let { index: n, offset: r } = t.content.findIndex(e);
            if (((t = t.maybeChild(n)), !t)) return null;
            if (r == e || t.isText) return t;
            e -= r + 1;
          }
        }
        childAfter(e) {
          let { index: t, offset: n } = this.content.findIndex(e);
          return { node: this.content.maybeChild(t), index: t, offset: n };
        }
        childBefore(e) {
          if (0 == e) return { node: null, index: 0, offset: 0 };
          let { index: t, offset: n } = this.content.findIndex(e);
          if (n < e)
            return { node: this.content.child(t), index: t, offset: n };
          let r = this.content.child(t - 1);
          return { node: r, index: t - 1, offset: n - r.nodeSize };
        }
        resolve(e) {
          return O.resolveCached(this, e);
        }
        resolveNoCache(e) {
          return O.resolve(this, e);
        }
        rangeHasMark(e, t, n) {
          let r = !1;
          return (
            t > e &&
              this.nodesBetween(
                e,
                t,
                (e) => (n.isInSet(e.marks) && (r = !0), !r),
              ),
            r
          );
        }
        get isBlock() {
          return this.type.isBlock;
        }
        get isTextblock() {
          return this.type.isTextblock;
        }
        get inlineContent() {
          return this.type.inlineContent;
        }
        get isInline() {
          return this.type.isInline;
        }
        get isText() {
          return this.type.isText;
        }
        get isLeaf() {
          return this.type.isLeaf;
        }
        get isAtom() {
          return this.type.isAtom;
        }
        toString() {
          if (this.type.spec.toDebugString)
            return this.type.spec.toDebugString(this);
          let e = this.type.name;
          return (
            this.content.size &&
              (e += "(" + this.content.toStringInner() + ")"),
            R(this.marks, e)
          );
        }
        contentMatchAt(e) {
          let t = this.type.contentMatch.matchFragment(this.content, 0, e);
          if (!t)
            throw new Error(
              "Called contentMatchAt on a node with invalid content",
            );
          return t;
        }
        canReplace(e, t, n = l.empty, r = 0, o = n.childCount) {
          let i = this.contentMatchAt(e).matchFragment(n, r, o),
            s = i && i.matchFragment(this.content, t);
          if (!s || !s.validEnd) return !1;
          for (let e = r; e < o; e++)
            if (!this.type.allowsMarks(n.child(e).marks)) return !1;
          return !0;
        }
        canReplaceWith(e, t, n, r) {
          if (r && !this.type.allowsMarks(r)) return !1;
          let o = this.contentMatchAt(e).matchType(n),
            i = o && o.matchFragment(this.content, t);
          return !!i && i.validEnd;
        }
        canAppend(e) {
          return e.content.size
            ? this.canReplace(this.childCount, this.childCount, e.content)
            : this.type.compatibleContent(e.type);
        }
        check() {
          this.type.checkContent(this.content);
          let e = p.none;
          for (let t = 0; t < this.marks.length; t++)
            e = this.marks[t].addToSet(e);
          if (!p.sameSet(e, this.marks))
            throw new RangeError(
              `Invalid collection of marks for node ${this.type.name}: ${this.marks.map((e) => e.type.name)}`,
            );
          this.content.forEach((e) => e.check());
        }
        toJSON() {
          let e = { type: this.type.name };
          for (let t in this.attrs) {
            e.attrs = this.attrs;
            break;
          }
          return (
            this.content.size && (e.content = this.content.toJSON()),
            this.marks.length && (e.marks = this.marks.map((e) => e.toJSON())),
            e
          );
        }
        static fromJSON(e, t) {
          if (!t) throw new RangeError("Invalid input for Node.fromJSON");
          let n = null;
          if (t.marks) {
            if (!Array.isArray(t.marks))
              throw new RangeError("Invalid mark data for Node.fromJSON");
            n = t.marks.map(e.markFromJSON);
          }
          if ("text" == t.type) {
            if ("string" != typeof t.text)
              throw new RangeError("Invalid text node in JSON");
            return e.text(t.text, n);
          }
          let r = l.fromJSON(e, t.content);
          return e.nodeType(t.type).create(t.attrs, r, n);
        }
      }
      _.prototype.text = void 0;
      class D extends _ {
        constructor(e, t, n, r) {
          if ((super(e, t, null, r), !n))
            throw new RangeError("Empty text nodes are not allowed");
          this.text = n;
        }
        toString() {
          return this.type.spec.toDebugString
            ? this.type.spec.toDebugString(this)
            : R(this.marks, JSON.stringify(this.text));
        }
        get textContent() {
          return this.text;
        }
        textBetween(e, t) {
          return this.text.slice(e, t);
        }
        get nodeSize() {
          return this.text.length;
        }
        mark(e) {
          return e == this.marks
            ? this
            : new D(this.type, this.attrs, this.text, e);
        }
        withText(e) {
          return e == this.text
            ? this
            : new D(this.type, this.attrs, e, this.marks);
        }
        cut(e = 0, t = this.text.length) {
          return 0 == e && t == this.text.length
            ? this
            : this.withText(this.text.slice(e, t));
        }
        eq(e) {
          return this.sameMarkup(e) && this.text == e.text;
        }
        toJSON() {
          let e = super.toJSON();
          return (e.text = this.text), e;
        }
      }
      function R(e, t) {
        for (let n = e.length - 1; n >= 0; n--)
          t = e[n].type.name + "(" + t + ")";
        return t;
      }
      class j {
        constructor(e) {
          (this.validEnd = e), (this.next = []), (this.wrapCache = []);
        }
        static parse(e, t) {
          let n = new F(e, t);
          if (null == n.next) return j.empty;
          let r = z(n);
          n.next && n.err("Unexpected trailing text");
          let o = (function (e) {
            let t = Object.create(null);
            return n(V(e, 0));
            function n(r) {
              let o = [];
              r.forEach((t) => {
                e[t].forEach(({ term: t, to: n }) => {
                  if (!t) return;
                  let r;
                  for (let e = 0; e < o.length; e++)
                    o[e][0] == t && (r = o[e][1]);
                  V(e, n).forEach((e) => {
                    r || o.push([t, (r = [])]), -1 == r.indexOf(e) && r.push(e);
                  });
                });
              });
              let i = (t[r.join(",")] = new j(r.indexOf(e.length - 1) > -1));
              for (let e = 0; e < o.length; e++) {
                let r = o[e][1].sort(L);
                i.next.push({ type: o[e][0], next: t[r.join(",")] || n(r) });
              }
              return i;
            }
          })(
            (function (e) {
              let t = [[]];
              return o(i(e, 0), n()), t;
              function n() {
                return t.push([]) - 1;
              }
              function r(e, n, r) {
                let o = { term: r, to: n };
                return t[e].push(o), o;
              }
              function o(e, t) {
                e.forEach((e) => (e.to = t));
              }
              function i(e, t) {
                if ("choice" == e.type)
                  return e.exprs.reduce((e, n) => e.concat(i(n, t)), []);
                if ("seq" != e.type) {
                  if ("star" == e.type) {
                    let s = n();
                    return r(t, s), o(i(e.expr, s), s), [r(s)];
                  }
                  if ("plus" == e.type) {
                    let s = n();
                    return o(i(e.expr, t), s), o(i(e.expr, s), s), [r(s)];
                  }
                  if ("opt" == e.type) return [r(t)].concat(i(e.expr, t));
                  if ("range" == e.type) {
                    let s = t;
                    for (let t = 0; t < e.min; t++) {
                      let t = n();
                      o(i(e.expr, s), t), (s = t);
                    }
                    if (-1 == e.max) o(i(e.expr, s), s);
                    else
                      for (let t = e.min; t < e.max; t++) {
                        let t = n();
                        r(s, t), o(i(e.expr, s), t), (s = t);
                      }
                    return [r(s)];
                  }
                  if ("name" == e.type) return [r(t, void 0, e.value)];
                  throw new Error("Unknown expr type");
                }
                for (let r = 0; ; r++) {
                  let s = i(e.exprs[r], t);
                  if (r == e.exprs.length - 1) return s;
                  o(s, (t = n()));
                }
              }
            })(r),
          );
          return (
            (function (e, t) {
              for (let n = 0, r = [e]; n < r.length; n++) {
                let e = r[n],
                  o = !e.validEnd,
                  i = [];
                for (let t = 0; t < e.next.length; t++) {
                  let { type: n, next: s } = e.next[t];
                  i.push(n.name),
                    !o || n.isText || n.hasRequiredAttrs() || (o = !1),
                    -1 == r.indexOf(s) && r.push(s);
                }
                o &&
                  t.err(
                    "Only non-generatable nodes (" +
                      i.join(", ") +
                      ") in a required position (see https://prosemirror.net/docs/guide/#generatable)",
                  );
              }
            })(o, n),
            o
          );
        }
        matchType(e) {
          for (let t = 0; t < this.next.length; t++)
            if (this.next[t].type == e) return this.next[t].next;
          return null;
        }
        matchFragment(e, t = 0, n = e.childCount) {
          let r = this;
          for (let o = t; r && o < n; o++) r = r.matchType(e.child(o).type);
          return r;
        }
        get inlineContent() {
          return 0 != this.next.length && this.next[0].type.isInline;
        }
        get defaultType() {
          for (let e = 0; e < this.next.length; e++) {
            let { type: t } = this.next[e];
            if (!t.isText && !t.hasRequiredAttrs()) return t;
          }
          return null;
        }
        compatible(e) {
          for (let t = 0; t < this.next.length; t++)
            for (let n = 0; n < e.next.length; n++)
              if (this.next[t].type == e.next[n].type) return !0;
          return !1;
        }
        fillBefore(e, t = !1, n = 0) {
          let r = [this];
          return (function o(i, s) {
            let a = i.matchFragment(e, n);
            if (a && (!t || a.validEnd))
              return l.from(s.map((e) => e.createAndFill()));
            for (let e = 0; e < i.next.length; e++) {
              let { type: t, next: n } = i.next[e];
              if (!t.isText && !t.hasRequiredAttrs() && -1 == r.indexOf(n)) {
                r.push(n);
                let e = o(n, s.concat(t));
                if (e) return e;
              }
            }
            return null;
          })(this, []);
        }
        findWrapping(e) {
          for (let t = 0; t < this.wrapCache.length; t += 2)
            if (this.wrapCache[t] == e) return this.wrapCache[t + 1];
          let t = this.computeWrapping(e);
          return this.wrapCache.push(e, t), t;
        }
        computeWrapping(e) {
          let t = Object.create(null),
            n = [{ match: this, type: null, via: null }];
          for (; n.length; ) {
            let r = n.shift(),
              o = r.match;
            if (o.matchType(e)) {
              let e = [];
              for (let t = r; t.type; t = t.via) e.push(t.type);
              return e.reverse();
            }
            for (let e = 0; e < o.next.length; e++) {
              let { type: i, next: s } = o.next[e];
              i.isLeaf ||
                i.hasRequiredAttrs() ||
                i.name in t ||
                (r.type && !s.validEnd) ||
                (n.push({ match: i.contentMatch, type: i, via: r }),
                (t[i.name] = !0));
            }
          }
          return null;
        }
        get edgeCount() {
          return this.next.length;
        }
        edge(e) {
          if (e >= this.next.length)
            throw new RangeError(
              `There's no ${e}th edge in this content match`,
            );
          return this.next[e];
        }
        toString() {
          let e = [];
          return (
            (function t(n) {
              e.push(n);
              for (let r = 0; r < n.next.length; r++)
                -1 == e.indexOf(n.next[r].next) && t(n.next[r].next);
            })(this),
            e
              .map((t, n) => {
                let r = n + (t.validEnd ? "*" : " ") + " ";
                for (let n = 0; n < t.next.length; n++)
                  r +=
                    (n ? ", " : "") +
                    t.next[n].type.name +
                    "->" +
                    e.indexOf(t.next[n].next);
                return r;
              })
              .join("\n")
          );
        }
      }
      j.empty = new j(!0);
      class F {
        constructor(e, t) {
          (this.string = e),
            (this.nodeTypes = t),
            (this.inline = null),
            (this.pos = 0),
            (this.tokens = e.split(/\s*(?=\b|\W|$)/)),
            "" == this.tokens[this.tokens.length - 1] && this.tokens.pop(),
            "" == this.tokens[0] && this.tokens.shift();
        }
        get next() {
          return this.tokens[this.pos];
        }
        eat(e) {
          return this.next == e && (this.pos++ || !0);
        }
        err(e) {
          throw new SyntaxError(
            e + " (in content expression '" + this.string + "')",
          );
        }
      }
      function z(e) {
        let t = [];
        do {
          t.push(B(e));
        } while (e.eat("|"));
        return 1 == t.length ? t[0] : { type: "choice", exprs: t };
      }
      function B(e) {
        let t = [];
        do {
          t.push(P(e));
        } while (e.next && ")" != e.next && "|" != e.next);
        return 1 == t.length ? t[0] : { type: "seq", exprs: t };
      }
      function P(e) {
        let t = (function (e) {
          if (e.eat("(")) {
            let t = z(e);
            return e.eat(")") || e.err("Missing closing paren"), t;
          }
          if (!/\W/.test(e.next)) {
            let t = (function (e, t) {
              let n = e.nodeTypes,
                r = n[t];
              if (r) return [r];
              let o = [];
              for (let e in n) {
                let r = n[e];
                r.groups.indexOf(t) > -1 && o.push(r);
              }
              0 == o.length && e.err("No node type or group '" + t + "' found");
              return o;
            })(e, e.next).map(
              (t) => (
                null == e.inline
                  ? (e.inline = t.isInline)
                  : e.inline != t.isInline &&
                    e.err("Mixing inline and block content"),
                { type: "name", value: t }
              ),
            );
            return e.pos++, 1 == t.length ? t[0] : { type: "choice", exprs: t };
          }
          e.err("Unexpected token '" + e.next + "'");
        })(e);
        for (;;)
          if (e.eat("+")) t = { type: "plus", expr: t };
          else if (e.eat("*")) t = { type: "star", expr: t };
          else if (e.eat("?")) t = { type: "opt", expr: t };
          else {
            if (!e.eat("{")) break;
            t = $(e, t);
          }
        return t;
      }
      function I(e) {
        /\D/.test(e.next) && e.err("Expected number, got '" + e.next + "'");
        let t = Number(e.next);
        return e.pos++, t;
      }
      function $(e, t) {
        let n = I(e),
          r = n;
        return (
          e.eat(",") && (r = "}" != e.next ? I(e) : -1),
          e.eat("}") || e.err("Unclosed braced range"),
          { type: "range", min: n, max: r, expr: t }
        );
      }
      function L(e, t) {
        return t - e;
      }
      function V(e, t) {
        let n = [];
        return (
          (function t(r) {
            let o = e[r];
            if (1 == o.length && !o[0].term) return t(o[0].to);
            n.push(r);
            for (let e = 0; e < o.length; e++) {
              let { term: r, to: i } = o[e];
              r || -1 != n.indexOf(i) || t(i);
            }
          })(t),
          n.sort(L)
        );
      }
      function J(e) {
        let t = Object.create(null);
        for (let n in e) {
          let r = e[n];
          if (!r.hasDefault) return null;
          t[n] = r.default;
        }
        return t;
      }
      function H(e, t) {
        let n = Object.create(null);
        for (let r in e) {
          let o = t && t[r];
          if (void 0 === o) {
            let t = e[r];
            if (!t.hasDefault)
              throw new RangeError("No value supplied for attribute " + r);
            o = t.default;
          }
          n[r] = o;
        }
        return n;
      }
      function K(e) {
        let t = Object.create(null);
        if (e) for (let n in e) t[n] = new U(e[n]);
        return t;
      }
      class W {
        constructor(e, t, n) {
          (this.name = e),
            (this.schema = t),
            (this.spec = n),
            (this.markSet = null),
            (this.groups = n.group ? n.group.split(" ") : []),
            (this.attrs = K(n.attrs)),
            (this.defaultAttrs = J(this.attrs)),
            (this.contentMatch = null),
            (this.inlineContent = null),
            (this.isBlock = !(n.inline || "text" == e)),
            (this.isText = "text" == e);
        }
        get isInline() {
          return !this.isBlock;
        }
        get isTextblock() {
          return this.isBlock && this.inlineContent;
        }
        get isLeaf() {
          return this.contentMatch == j.empty;
        }
        get isAtom() {
          return this.isLeaf || !!this.spec.atom;
        }
        get whitespace() {
          return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
        }
        hasRequiredAttrs() {
          for (let e in this.attrs) if (this.attrs[e].isRequired) return !0;
          return !1;
        }
        compatibleContent(e) {
          return this == e || this.contentMatch.compatible(e.contentMatch);
        }
        computeAttrs(e) {
          return !e && this.defaultAttrs ? this.defaultAttrs : H(this.attrs, e);
        }
        create(e = null, t, n) {
          if (this.isText)
            throw new Error("NodeType.create can't construct text nodes");
          return new _(this, this.computeAttrs(e), l.from(t), p.setFrom(n));
        }
        createChecked(e = null, t, n) {
          return (
            (t = l.from(t)),
            this.checkContent(t),
            new _(this, this.computeAttrs(e), t, p.setFrom(n))
          );
        }
        createAndFill(e = null, t, n) {
          if (((e = this.computeAttrs(e)), (t = l.from(t)).size)) {
            let e = this.contentMatch.fillBefore(t);
            if (!e) return null;
            t = e.append(t);
          }
          let r = this.contentMatch.matchFragment(t),
            o = r && r.fillBefore(l.empty, !0);
          return o ? new _(this, e, t.append(o), p.setFrom(n)) : null;
        }
        validContent(e) {
          let t = this.contentMatch.matchFragment(e);
          if (!t || !t.validEnd) return !1;
          for (let t = 0; t < e.childCount; t++)
            if (!this.allowsMarks(e.child(t).marks)) return !1;
          return !0;
        }
        checkContent(e) {
          if (!this.validContent(e))
            throw new RangeError(
              `Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`,
            );
        }
        allowsMarkType(e) {
          return null == this.markSet || this.markSet.indexOf(e) > -1;
        }
        allowsMarks(e) {
          if (null == this.markSet) return !0;
          for (let t = 0; t < e.length; t++)
            if (!this.allowsMarkType(e[t].type)) return !1;
          return !0;
        }
        allowedMarks(e) {
          if (null == this.markSet) return e;
          let t;
          for (let n = 0; n < e.length; n++)
            this.allowsMarkType(e[n].type)
              ? t && t.push(e[n])
              : t || (t = e.slice(0, n));
          return t ? (t.length ? t : p.none) : e;
        }
        static compile(e, t) {
          let n = Object.create(null);
          e.forEach((e, r) => (n[e] = new W(e, t, r)));
          let r = t.spec.topNode || "doc";
          if (!n[r])
            throw new RangeError(
              "Schema is missing its top node type ('" + r + "')",
            );
          if (!n.text) throw new RangeError("Every schema needs a 'text' type");
          for (let e in n.text.attrs)
            throw new RangeError(
              "The text node type should not have attributes",
            );
          return n;
        }
      }
      class U {
        constructor(e) {
          (this.hasDefault = Object.prototype.hasOwnProperty.call(
            e,
            "default",
          )),
            (this.default = e.default);
        }
        get isRequired() {
          return !this.hasDefault;
        }
      }
      class q {
        constructor(e, t, n, r) {
          (this.name = e),
            (this.rank = t),
            (this.schema = n),
            (this.spec = r),
            (this.attrs = K(r.attrs)),
            (this.excluded = null);
          let o = J(this.attrs);
          this.instance = o ? new p(this, o) : null;
        }
        create(e = null) {
          return !e && this.instance
            ? this.instance
            : new p(this, H(this.attrs, e));
        }
        static compile(e, t) {
          let n = Object.create(null),
            r = 0;
          return e.forEach((e, o) => (n[e] = new q(e, r++, t, o))), n;
        }
        removeFromSet(e) {
          for (var t = 0; t < e.length; t++)
            e[t].type == this &&
              ((e = e.slice(0, t).concat(e.slice(t + 1))), t--);
          return e;
        }
        isInSet(e) {
          for (let t = 0; t < e.length; t++) if (e[t].type == this) return e[t];
        }
        excludes(e) {
          return this.excluded.indexOf(e) > -1;
        }
      }
      class G {
        constructor(e) {
          (this.linebreakReplacement = null),
            (this.cached = Object.create(null));
          let t = (this.spec = {});
          for (let n in e) t[n] = e[n];
          (t.nodes = o.from(e.nodes)),
            (t.marks = o.from(e.marks || {})),
            (this.nodes = W.compile(this.spec.nodes, this)),
            (this.marks = q.compile(this.spec.marks, this));
          let n = Object.create(null);
          for (let e in this.nodes) {
            if (e in this.marks)
              throw new RangeError(e + " can not be both a node and a mark");
            let t = this.nodes[e],
              r = t.spec.content || "",
              o = t.spec.marks;
            if (
              ((t.contentMatch = n[r] || (n[r] = j.parse(r, this.nodes))),
              (t.inlineContent = t.contentMatch.inlineContent),
              t.spec.linebreakReplacement)
            ) {
              if (this.linebreakReplacement)
                throw new RangeError("Multiple linebreak nodes defined");
              if (!t.isInline || !t.isLeaf)
                throw new RangeError(
                  "Linebreak replacement nodes must be inline leaf nodes",
                );
              this.linebreakReplacement = t;
            }
            t.markSet =
              "_" == o
                ? null
                : o
                  ? X(this, o.split(" "))
                  : "" != o && t.inlineContent
                    ? null
                    : [];
          }
          for (let e in this.marks) {
            let t = this.marks[e],
              n = t.spec.excludes;
            t.excluded = null == n ? [t] : "" == n ? [] : X(this, n.split(" "));
          }
          (this.nodeFromJSON = this.nodeFromJSON.bind(this)),
            (this.markFromJSON = this.markFromJSON.bind(this)),
            (this.topNodeType = this.nodes[this.spec.topNode || "doc"]),
            (this.cached.wrappings = Object.create(null));
        }
        node(e, t = null, n, r) {
          if ("string" == typeof e) e = this.nodeType(e);
          else {
            if (!(e instanceof W))
              throw new RangeError("Invalid node type: " + e);
            if (e.schema != this)
              throw new RangeError(
                "Node type from different schema used (" + e.name + ")",
              );
          }
          return e.createChecked(t, n, r);
        }
        text(e, t) {
          let n = this.nodes.text;
          return new D(n, n.defaultAttrs, e, p.setFrom(t));
        }
        mark(e, t) {
          return "string" == typeof e && (e = this.marks[e]), e.create(t);
        }
        nodeFromJSON(e) {
          return _.fromJSON(this, e);
        }
        markFromJSON(e) {
          return p.fromJSON(this, e);
        }
        nodeType(e) {
          let t = this.nodes[e];
          if (!t) throw new RangeError("Unknown node type: " + e);
          return t;
        }
      }
      function X(e, t) {
        let n = [];
        for (let r = 0; r < t.length; r++) {
          let o = t[r],
            i = e.marks[o],
            s = i;
          if (i) n.push(i);
          else
            for (let t in e.marks) {
              let r = e.marks[t];
              ("_" == o ||
                (r.spec.group && r.spec.group.split(" ").indexOf(o) > -1)) &&
                n.push((s = r));
            }
          if (!s) throw new SyntaxError("Unknown mark type: '" + t[r] + "'");
        }
        return n;
      }
      class Y {
        constructor(e, t) {
          (this.schema = e),
            (this.rules = t),
            (this.tags = []),
            (this.styles = []),
            t.forEach((e) => {
              !(function (e) {
                return null != e.tag;
              })(e)
                ? (function (e) {
                    return null != e.style;
                  })(e) && this.styles.push(e)
                : this.tags.push(e);
            }),
            (this.normalizeLists = !this.tags.some((t) => {
              if (!/^(ul|ol)\b/.test(t.tag) || !t.node) return !1;
              let n = e.nodes[t.node];
              return n.contentMatch.matchType(n);
            }));
        }
        parse(e, t = {}) {
          let n = new re(this, t, !1);
          return n.addAll(e, t.from, t.to), n.finish();
        }
        parseSlice(e, t = {}) {
          let n = new re(this, t, !0);
          return n.addAll(e, t.from, t.to), d.maxOpen(n.finish());
        }
        matchTag(e, t, n) {
          for (
            let r = n ? this.tags.indexOf(n) + 1 : 0;
            r < this.tags.length;
            r++
          ) {
            let n = this.tags[r];
            if (
              oe(e, n.tag) &&
              (void 0 === n.namespace || e.namespaceURI == n.namespace) &&
              (!n.context || t.matchesContext(n.context))
            ) {
              if (n.getAttrs) {
                let t = n.getAttrs(e);
                if (!1 === t) continue;
                n.attrs = t || void 0;
              }
              return n;
            }
          }
        }
        matchStyle(e, t, n, r) {
          for (
            let o = r ? this.styles.indexOf(r) + 1 : 0;
            o < this.styles.length;
            o++
          ) {
            let r = this.styles[o],
              i = r.style;
            if (
              !(
                0 != i.indexOf(e) ||
                (r.context && !n.matchesContext(r.context)) ||
                (i.length > e.length &&
                  (61 != i.charCodeAt(e.length) || i.slice(e.length + 1) != t))
              )
            ) {
              if (r.getAttrs) {
                let e = r.getAttrs(t);
                if (!1 === e) continue;
                r.attrs = e || void 0;
              }
              return r;
            }
          }
        }
        static schemaRules(e) {
          let t = [];
          function n(e) {
            let n = null == e.priority ? 50 : e.priority,
              r = 0;
            for (; r < t.length; r++) {
              let e = t[r];
              if ((null == e.priority ? 50 : e.priority) < n) break;
            }
            t.splice(r, 0, e);
          }
          for (let t in e.marks) {
            let r = e.marks[t].spec.parseDOM;
            r &&
              r.forEach((e) => {
                n((e = ie(e))),
                  e.mark || e.ignore || e.clearMark || (e.mark = t);
              });
          }
          for (let t in e.nodes) {
            let r = e.nodes[t].spec.parseDOM;
            r &&
              r.forEach((e) => {
                n((e = ie(e))), e.node || e.ignore || e.mark || (e.node = t);
              });
          }
          return t;
        }
        static fromSchema(e) {
          return (
            e.cached.domParser ||
            (e.cached.domParser = new Y(e, Y.schemaRules(e)))
          );
        }
      }
      const Z = {
          address: !0,
          article: !0,
          aside: !0,
          blockquote: !0,
          canvas: !0,
          dd: !0,
          div: !0,
          dl: !0,
          fieldset: !0,
          figcaption: !0,
          figure: !0,
          footer: !0,
          form: !0,
          h1: !0,
          h2: !0,
          h3: !0,
          h4: !0,
          h5: !0,
          h6: !0,
          header: !0,
          hgroup: !0,
          hr: !0,
          li: !0,
          noscript: !0,
          ol: !0,
          output: !0,
          p: !0,
          pre: !0,
          section: !0,
          table: !0,
          tfoot: !0,
          ul: !0,
        },
        Q = {
          head: !0,
          noscript: !0,
          object: !0,
          script: !0,
          style: !0,
          title: !0,
        },
        ee = { ol: !0, ul: !0 };
      function te(e, t, n) {
        return null != t
          ? (t ? 1 : 0) | ("full" === t ? 2 : 0)
          : e && "pre" == e.whitespace
            ? 3
            : -5 & n;
      }
      class ne {
        constructor(e, t, n, r, o, i, s) {
          (this.type = e),
            (this.attrs = t),
            (this.marks = n),
            (this.pendingMarks = r),
            (this.solid = o),
            (this.options = s),
            (this.content = []),
            (this.activeMarks = p.none),
            (this.stashMarks = []),
            (this.match = i || (4 & s ? null : e.contentMatch));
        }
        findWrapping(e) {
          if (!this.match) {
            if (!this.type) return [];
            let t = this.type.contentMatch.fillBefore(l.from(e));
            if (!t) {
              let t,
                n = this.type.contentMatch;
              return (t = n.findWrapping(e.type))
                ? ((this.match = n), t)
                : null;
            }
            this.match = this.type.contentMatch.matchFragment(t);
          }
          return this.match.findWrapping(e.type);
        }
        finish(e) {
          if (!(1 & this.options)) {
            let e,
              t = this.content[this.content.length - 1];
            if (t && t.isText && (e = /[ \t\r\n\u000c]+$/.exec(t.text))) {
              let n = t;
              t.text.length == e[0].length
                ? this.content.pop()
                : (this.content[this.content.length - 1] = n.withText(
                    n.text.slice(0, n.text.length - e[0].length),
                  ));
            }
          }
          let t = l.from(this.content);
          return (
            !e &&
              this.match &&
              (t = t.append(this.match.fillBefore(l.empty, !0))),
            this.type ? this.type.create(this.attrs, t, this.marks) : t
          );
        }
        popFromStashMark(e) {
          for (let t = this.stashMarks.length - 1; t >= 0; t--)
            if (e.eq(this.stashMarks[t]))
              return this.stashMarks.splice(t, 1)[0];
        }
        applyPending(e) {
          for (let t = 0, n = this.pendingMarks; t < n.length; t++) {
            let r = n[t];
            (this.type ? this.type.allowsMarkType(r.type) : se(r.type, e)) &&
              !r.isInSet(this.activeMarks) &&
              ((this.activeMarks = r.addToSet(this.activeMarks)),
              (this.pendingMarks = r.removeFromSet(this.pendingMarks)));
          }
        }
        inlineContext(e) {
          return this.type
            ? this.type.inlineContent
            : this.content.length
              ? this.content[0].isInline
              : e.parentNode &&
                !Z.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
        }
      }
      class re {
        constructor(e, t, n) {
          (this.parser = e),
            (this.options = t),
            (this.isOpen = n),
            (this.open = 0);
          let r,
            o = t.topNode,
            i = te(null, t.preserveWhitespace, 0) | (n ? 4 : 0);
          (r = o
            ? new ne(
                o.type,
                o.attrs,
                p.none,
                p.none,
                !0,
                t.topMatch || o.type.contentMatch,
                i,
              )
            : new ne(
                n ? null : e.schema.topNodeType,
                null,
                p.none,
                p.none,
                !0,
                null,
                i,
              )),
            (this.nodes = [r]),
            (this.find = t.findPositions),
            (this.needsBlock = !1);
        }
        get top() {
          return this.nodes[this.open];
        }
        addDOM(e) {
          3 == e.nodeType
            ? this.addTextNode(e)
            : 1 == e.nodeType && this.addElement(e);
        }
        withStyleRules(e, t) {
          let n = e.getAttribute("style");
          if (!n) return t();
          let r = this.readStyles(
            (function (e) {
              let t,
                n = /\s*([\w-]+)\s*:\s*([^;]+)/g,
                r = [];
              for (; (t = n.exec(e)); ) r.push(t[1], t[2].trim());
              return r;
            })(n),
          );
          if (!r) return;
          let [o, i] = r,
            s = this.top;
          for (let e = 0; e < i.length; e++) this.removePendingMark(i[e], s);
          for (let e = 0; e < o.length; e++) this.addPendingMark(o[e]);
          t();
          for (let e = 0; e < o.length; e++) this.removePendingMark(o[e], s);
          for (let e = 0; e < i.length; e++) this.addPendingMark(i[e]);
        }
        addTextNode(e) {
          let t = e.nodeValue,
            n = this.top;
          if (
            2 & n.options ||
            n.inlineContext(e) ||
            /[^ \t\r\n\u000c]/.test(t)
          ) {
            if (1 & n.options)
              t =
                2 & n.options
                  ? t.replace(/\r\n?/g, "\n")
                  : t.replace(/\r?\n|\r/g, " ");
            else if (
              ((t = t.replace(/[ \t\r\n\u000c]+/g, " ")),
              /^[ \t\r\n\u000c]/.test(t) && this.open == this.nodes.length - 1)
            ) {
              let r = n.content[n.content.length - 1],
                o = e.previousSibling;
              (!r ||
                (o && "BR" == o.nodeName) ||
                (r.isText && /[ \t\r\n\u000c]$/.test(r.text))) &&
                (t = t.slice(1));
            }
            t && this.insertNode(this.parser.schema.text(t)),
              this.findInText(e);
          } else this.findInside(e);
        }
        addElement(e, t) {
          let n,
            r = e.nodeName.toLowerCase();
          ee.hasOwnProperty(r) &&
            this.parser.normalizeLists &&
            (function (e) {
              for (let t = e.firstChild, n = null; t; t = t.nextSibling) {
                let e = 1 == t.nodeType ? t.nodeName.toLowerCase() : null;
                e && ee.hasOwnProperty(e) && n
                  ? (n.appendChild(t), (t = n))
                  : "li" == e
                    ? (n = t)
                    : e && (n = null);
              }
            })(e);
          let o =
            (this.options.ruleFromNode && this.options.ruleFromNode(e)) ||
            (n = this.parser.matchTag(e, this, t));
          if (o ? o.ignore : Q.hasOwnProperty(r))
            this.findInside(e), this.ignoreFallback(e);
          else if (!o || o.skip || o.closeParent) {
            o && o.closeParent
              ? (this.open = Math.max(0, this.open - 1))
              : o && o.skip.nodeType && (e = o.skip);
            let t,
              n = this.top,
              i = this.needsBlock;
            if (Z.hasOwnProperty(r))
              n.content.length &&
                n.content[0].isInline &&
                this.open &&
                (this.open--, (n = this.top)),
                (t = !0),
                n.type || (this.needsBlock = !0);
            else if (!e.firstChild) return void this.leafFallback(e);
            o && o.skip
              ? this.addAll(e)
              : this.withStyleRules(e, () => this.addAll(e)),
              t && this.sync(n),
              (this.needsBlock = i);
          } else
            this.withStyleRules(e, () => {
              this.addElementByRule(e, o, !1 === o.consuming ? n : void 0);
            });
        }
        leafFallback(e) {
          "BR" == e.nodeName &&
            this.top.type &&
            this.top.type.inlineContent &&
            this.addTextNode(e.ownerDocument.createTextNode("\n"));
        }
        ignoreFallback(e) {
          "BR" != e.nodeName ||
            (this.top.type && this.top.type.inlineContent) ||
            this.findPlace(this.parser.schema.text("-"));
        }
        readStyles(e) {
          let t = p.none,
            n = p.none;
          for (let r = 0; r < e.length; r += 2)
            for (let o; ; ) {
              let i = this.parser.matchStyle(e[r], e[r + 1], this, o);
              if (!i) break;
              if (i.ignore) return null;
              if (
                (i.clearMark
                  ? this.top.pendingMarks
                      .concat(this.top.activeMarks)
                      .forEach((e) => {
                        i.clearMark(e) && (n = e.addToSet(n));
                      })
                  : (t = this.parser.schema.marks[i.mark]
                      .create(i.attrs)
                      .addToSet(t)),
                !1 !== i.consuming)
              )
                break;
              o = i;
            }
          return [t, n];
        }
        addElementByRule(e, t, n) {
          let r, o, i;
          if (t.node)
            (o = this.parser.schema.nodes[t.node]),
              o.isLeaf
                ? this.insertNode(o.create(t.attrs)) || this.leafFallback(e)
                : (r = this.enter(o, t.attrs || null, t.preserveWhitespace));
          else {
            (i = this.parser.schema.marks[t.mark].create(t.attrs)),
              this.addPendingMark(i);
          }
          let s = this.top;
          if (o && o.isLeaf) this.findInside(e);
          else if (n) this.addElement(e, n);
          else if (t.getContent)
            this.findInside(e),
              t
                .getContent(e, this.parser.schema)
                .forEach((e) => this.insertNode(e));
          else {
            let n = e;
            "string" == typeof t.contentElement
              ? (n = e.querySelector(t.contentElement))
              : "function" == typeof t.contentElement
                ? (n = t.contentElement(e))
                : t.contentElement && (n = t.contentElement),
              this.findAround(e, n, !0),
              this.addAll(n);
          }
          r && this.sync(s) && this.open--, i && this.removePendingMark(i, s);
        }
        addAll(e, t, n) {
          let r = t || 0;
          for (
            let o = t ? e.childNodes[t] : e.firstChild,
              i = null == n ? null : e.childNodes[n];
            o != i;
            o = o.nextSibling, ++r
          )
            this.findAtPoint(e, r), this.addDOM(o);
          this.findAtPoint(e, r);
        }
        findPlace(e) {
          let t, n;
          for (let r = this.open; r >= 0; r--) {
            let o = this.nodes[r],
              i = o.findWrapping(e);
            if (
              i &&
              (!t || t.length > i.length) &&
              ((t = i), (n = o), !i.length)
            )
              break;
            if (o.solid) break;
          }
          if (!t) return !1;
          this.sync(n);
          for (let e = 0; e < t.length; e++) this.enterInner(t[e], null, !1);
          return !0;
        }
        insertNode(e) {
          if (e.isInline && this.needsBlock && !this.top.type) {
            let e = this.textblockFromContext();
            e && this.enterInner(e);
          }
          if (this.findPlace(e)) {
            this.closeExtra();
            let t = this.top;
            t.applyPending(e.type),
              t.match && (t.match = t.match.matchType(e.type));
            let n = t.activeMarks;
            for (let r = 0; r < e.marks.length; r++)
              (t.type && !t.type.allowsMarkType(e.marks[r].type)) ||
                (n = e.marks[r].addToSet(n));
            return t.content.push(e.mark(n)), !0;
          }
          return !1;
        }
        enter(e, t, n) {
          let r = this.findPlace(e.create(t));
          return r && this.enterInner(e, t, !0, n), r;
        }
        enterInner(e, t = null, n = !1, r) {
          this.closeExtra();
          let o = this.top;
          o.applyPending(e), (o.match = o.match && o.match.matchType(e));
          let i = te(e, r, o.options);
          4 & o.options && 0 == o.content.length && (i |= 4),
            this.nodes.push(
              new ne(e, t, o.activeMarks, o.pendingMarks, n, null, i),
            ),
            this.open++;
        }
        closeExtra(e = !1) {
          let t = this.nodes.length - 1;
          if (t > this.open) {
            for (; t > this.open; t--)
              this.nodes[t - 1].content.push(this.nodes[t].finish(e));
            this.nodes.length = this.open + 1;
          }
        }
        finish() {
          return (
            (this.open = 0),
            this.closeExtra(this.isOpen),
            this.nodes[0].finish(this.isOpen || this.options.topOpen)
          );
        }
        sync(e) {
          for (let t = this.open; t >= 0; t--)
            if (this.nodes[t] == e) return (this.open = t), !0;
          return !1;
        }
        get currentPos() {
          this.closeExtra();
          let e = 0;
          for (let t = this.open; t >= 0; t--) {
            let n = this.nodes[t].content;
            for (let t = n.length - 1; t >= 0; t--) e += n[t].nodeSize;
            t && e++;
          }
          return e;
        }
        findAtPoint(e, t) {
          if (this.find)
            for (let n = 0; n < this.find.length; n++)
              this.find[n].node == e &&
                this.find[n].offset == t &&
                (this.find[n].pos = this.currentPos);
        }
        findInside(e) {
          if (this.find)
            for (let t = 0; t < this.find.length; t++)
              null == this.find[t].pos &&
                1 == e.nodeType &&
                e.contains(this.find[t].node) &&
                (this.find[t].pos = this.currentPos);
        }
        findAround(e, t, n) {
          if (e != t && this.find)
            for (let r = 0; r < this.find.length; r++)
              if (
                null == this.find[r].pos &&
                1 == e.nodeType &&
                e.contains(this.find[r].node)
              ) {
                t.compareDocumentPosition(this.find[r].node) & (n ? 2 : 4) &&
                  (this.find[r].pos = this.currentPos);
              }
        }
        findInText(e) {
          if (this.find)
            for (let t = 0; t < this.find.length; t++)
              this.find[t].node == e &&
                (this.find[t].pos =
                  this.currentPos - (e.nodeValue.length - this.find[t].offset));
        }
        matchesContext(e) {
          if (e.indexOf("|") > -1)
            return e.split(/\s*\|\s*/).some(this.matchesContext, this);
          let t = e.split("/"),
            n = this.options.context,
            r = !(this.isOpen || (n && n.parent.type != this.nodes[0].type)),
            o = -(n ? n.depth + 1 : 0) + (r ? 0 : 1),
            i = (e, s) => {
              for (; e >= 0; e--) {
                let l = t[e];
                if ("" == l) {
                  if (e == t.length - 1 || 0 == e) continue;
                  for (; s >= o; s--) if (i(e - 1, s)) return !0;
                  return !1;
                }
                {
                  let e =
                    s > 0 || (0 == s && r)
                      ? this.nodes[s].type
                      : n && s >= o
                        ? n.node(s - o).type
                        : null;
                  if (!e || (e.name != l && -1 == e.groups.indexOf(l)))
                    return !1;
                  s--;
                }
              }
              return !0;
            };
          return i(t.length - 1, this.open);
        }
        textblockFromContext() {
          let e = this.options.context;
          if (e)
            for (let t = e.depth; t >= 0; t--) {
              let n = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
              if (n && n.isTextblock && n.defaultAttrs) return n;
            }
          for (let e in this.parser.schema.nodes) {
            let t = this.parser.schema.nodes[e];
            if (t.isTextblock && t.defaultAttrs) return t;
          }
        }
        addPendingMark(e) {
          let t = (function (e, t) {
            for (let n = 0; n < t.length; n++) if (e.eq(t[n])) return t[n];
          })(e, this.top.pendingMarks);
          t && this.top.stashMarks.push(t),
            (this.top.pendingMarks = e.addToSet(this.top.pendingMarks));
        }
        removePendingMark(e, t) {
          for (let n = this.open; n >= 0; n--) {
            let r = this.nodes[n];
            if (r.pendingMarks.lastIndexOf(e) > -1)
              r.pendingMarks = e.removeFromSet(r.pendingMarks);
            else {
              r.activeMarks = e.removeFromSet(r.activeMarks);
              let t = r.popFromStashMark(e);
              t &&
                r.type &&
                r.type.allowsMarkType(t.type) &&
                (r.activeMarks = t.addToSet(r.activeMarks));
            }
            if (r == t) break;
          }
        }
      }
      function oe(e, t) {
        return (
          e.matches ||
          e.msMatchesSelector ||
          e.webkitMatchesSelector ||
          e.mozMatchesSelector
        ).call(e, t);
      }
      function ie(e) {
        let t = {};
        for (let n in e) t[n] = e[n];
        return t;
      }
      function se(e, t) {
        let n = t.schema.nodes;
        for (let r in n) {
          let o = n[r];
          if (!o.allowsMarkType(e)) continue;
          let i = [],
            s = (e) => {
              i.push(e);
              for (let n = 0; n < e.edgeCount; n++) {
                let { type: r, next: o } = e.edge(n);
                if (r == t) return !0;
                if (i.indexOf(o) < 0 && s(o)) return !0;
              }
            };
          if (s(o.contentMatch)) return !0;
        }
      }
      class le {
        constructor(e, t) {
          (this.nodes = e), (this.marks = t);
        }
        serializeFragment(e, t = {}, n) {
          n || (n = ce(t).createDocumentFragment());
          let r = n,
            o = [];
          return (
            e.forEach((e) => {
              if (o.length || e.marks.length) {
                let n = 0,
                  i = 0;
                for (; n < o.length && i < e.marks.length; ) {
                  let t = e.marks[i];
                  if (this.marks[t.type.name]) {
                    if (!t.eq(o[n][0]) || !1 === t.type.spec.spanning) break;
                    n++, i++;
                  } else i++;
                }
                for (; n < o.length; ) r = o.pop()[1];
                for (; i < e.marks.length; ) {
                  let n = e.marks[i++],
                    s = this.serializeMark(n, e.isInline, t);
                  s &&
                    (o.push([n, r]),
                    r.appendChild(s.dom),
                    (r = s.contentDOM || s.dom));
                }
              }
              r.appendChild(this.serializeNodeInner(e, t));
            }),
            n
          );
        }
        serializeNodeInner(e, t) {
          let { dom: n, contentDOM: r } = le.renderSpec(
            ce(t),
            this.nodes[e.type.name](e),
          );
          if (r) {
            if (e.isLeaf)
              throw new RangeError(
                "Content hole not allowed in a leaf node spec",
              );
            this.serializeFragment(e.content, t, r);
          }
          return n;
        }
        serializeNode(e, t = {}) {
          let n = this.serializeNodeInner(e, t);
          for (let r = e.marks.length - 1; r >= 0; r--) {
            let o = this.serializeMark(e.marks[r], e.isInline, t);
            o && ((o.contentDOM || o.dom).appendChild(n), (n = o.dom));
          }
          return n;
        }
        serializeMark(e, t, n = {}) {
          let r = this.marks[e.type.name];
          return r && le.renderSpec(ce(n), r(e, t));
        }
        static renderSpec(e, t, n = null) {
          if ("string" == typeof t) return { dom: e.createTextNode(t) };
          if (null != t.nodeType) return { dom: t };
          if (t.dom && null != t.dom.nodeType) return t;
          let r,
            o = t[0],
            i = o.indexOf(" ");
          i > 0 && ((n = o.slice(0, i)), (o = o.slice(i + 1)));
          let s = n ? e.createElementNS(n, o) : e.createElement(o),
            l = t[1],
            a = 1;
          if (
            l &&
            "object" == typeof l &&
            null == l.nodeType &&
            !Array.isArray(l)
          ) {
            a = 2;
            for (let e in l)
              if (null != l[e]) {
                let t = e.indexOf(" ");
                t > 0
                  ? s.setAttributeNS(e.slice(0, t), e.slice(t + 1), l[e])
                  : s.setAttribute(e, l[e]);
              }
          }
          for (let o = a; o < t.length; o++) {
            let i = t[o];
            if (0 === i) {
              if (o < t.length - 1 || o > a)
                throw new RangeError(
                  "Content hole must be the only child of its parent node",
                );
              return { dom: s, contentDOM: s };
            }
            {
              let { dom: t, contentDOM: o } = le.renderSpec(e, i, n);
              if ((s.appendChild(t), o)) {
                if (r) throw new RangeError("Multiple content holes");
                r = o;
              }
            }
          }
          return { dom: s, contentDOM: r };
        }
        static fromSchema(e) {
          return (
            e.cached.domSerializer ||
            (e.cached.domSerializer = new le(
              this.nodesFromSchema(e),
              this.marksFromSchema(e),
            ))
          );
        }
        static nodesFromSchema(e) {
          let t = ae(e.nodes);
          return t.text || (t.text = (e) => e.text), t;
        }
        static marksFromSchema(e) {
          return ae(e.marks);
        }
      }
      function ae(e) {
        let t = {};
        for (let n in e) {
          let r = e[n].spec.toDOM;
          r && (t[n] = r);
        }
        return t;
      }
      function ce(e) {
        return e.document || window.document;
      }
    },
    4188: (e, t, n) => {
      "use strict";
      n.d(t, {
        $B: () => m,
        Aw: () => p,
        Sd: () => u,
        T2: () => f,
        fF: () => h,
        o8: () => c,
        wn: () => d,
      });
      var r = n(63734),
        o = n(57053),
        i = n(52893);
      const s = ["ol", 0],
        l = ["ul", 0],
        a = ["li", 0],
        c = {
          attrs: { order: { default: 1 } },
          parseDOM: [
            {
              tag: "ol",
              getAttrs: (e) => ({
                order: e.hasAttribute("start") ? +e.getAttribute("start") : 1,
              }),
            },
          ],
          toDOM: (e) =>
            1 == e.attrs.order ? s : ["ol", { start: e.attrs.order }, 0],
        },
        h = { parseDOM: [{ tag: "ul" }], toDOM: () => l },
        p = { parseDOM: [{ tag: "li" }], toDOM: () => a, defining: !0 };
      function u(e, t = null) {
        return function (n, i) {
          let { $from: s, $to: l } = n.selection,
            a = s.blockRange(l),
            c = !1,
            h = a;
          if (!a) return !1;
          if (
            a.depth >= 2 &&
            s.node(a.depth - 1).type.compatibleContent(e) &&
            0 == a.startIndex
          ) {
            if (0 == s.index(a.depth - 1)) return !1;
            let e = n.doc.resolve(a.start - 2);
            (h = new o.u$(e, e, a.depth)),
              a.endIndex < a.parent.childCount &&
                (a = new o.u$(s, n.doc.resolve(l.end(a.depth)), a.depth)),
              (c = !0);
          }
          let p = (0, r.oM)(h, e, t, a);
          return (
            !!p &&
            (i &&
              i(
                (function (e, t, n, i, s) {
                  let l = o.FK.empty;
                  for (let e = n.length - 1; e >= 0; e--)
                    l = o.FK.from(n[e].type.create(n[e].attrs, l));
                  e.step(
                    new r.Wg(
                      t.start - (i ? 2 : 0),
                      t.end,
                      t.start,
                      t.end,
                      new o.Ji(l, 0, 0),
                      n.length,
                      !0,
                    ),
                  );
                  let a = 0;
                  for (let e = 0; e < n.length; e++)
                    n[e].type == s && (a = e + 1);
                  let c = n.length - a,
                    h = t.start + n.length - (i ? 2 : 0),
                    p = t.parent;
                  for (
                    let n = t.startIndex, o = t.endIndex, i = !0;
                    n < o;
                    n++, i = !1
                  )
                    !i &&
                      (0, r.zy)(e.doc, h, c) &&
                      (e.split(h, c), (h += 2 * c)),
                      (h += p.child(n).nodeSize);
                  return e;
                })(n.tr, a, p, c, e).scrollIntoView(),
              ),
            !0)
          );
        };
      }
      function d(e, t) {
        return function (n, s) {
          let { $from: l, $to: a, node: c } = n.selection;
          if ((c && c.isBlock) || l.depth < 2 || !l.sameParent(a)) return !1;
          let h = l.node(-1);
          if (h.type != e) return !1;
          if (
            0 == l.parent.content.size &&
            l.node(-1).childCount == l.indexAfter(-1)
          ) {
            if (
              3 == l.depth ||
              l.node(-3).type != e ||
              l.index(-2) != l.node(-2).childCount - 1
            )
              return !1;
            if (s) {
              let t = o.FK.empty,
                r = l.index(-1) ? 1 : l.index(-2) ? 2 : 3;
              for (let e = l.depth - r; e >= l.depth - 3; e--)
                t = o.FK.from(l.node(e).copy(t));
              let a =
                l.indexAfter(-1) < l.node(-2).childCount
                  ? 1
                  : l.indexAfter(-2) < l.node(-3).childCount
                    ? 2
                    : 3;
              t = t.append(o.FK.from(e.createAndFill()));
              let c = l.before(l.depth - (r - 1)),
                h = n.tr.replace(c, l.after(-a), new o.Ji(t, 4 - r, 0)),
                p = -1;
              h.doc.nodesBetween(c, h.doc.content.size, (e, t) => {
                if (p > -1) return !1;
                e.isTextblock && 0 == e.content.size && (p = t + 1);
              }),
                p > -1 && h.setSelection(i.LN.near(h.doc.resolve(p))),
                s(h.scrollIntoView());
            }
            return !0;
          }
          let p = a.pos == l.end() ? h.contentMatchAt(0).defaultType : null,
            u = n.tr.delete(l.pos, a.pos),
            d = p ? [t ? { type: e, attrs: t } : null, { type: p }] : void 0;
          return (
            !!(0, r.zy)(u.doc, l.pos, 2, d) &&
            (s && s(u.split(l.pos, 2, d).scrollIntoView()), !0)
          );
        };
      }
      function f(e) {
        return function (t, n) {
          let { $from: i, $to: s } = t.selection,
            l = i.blockRange(
              s,
              (t) => t.childCount > 0 && t.firstChild.type == e,
            );
          return (
            !!l &&
            (!n ||
              (i.node(l.depth - 1).type == e
                ? (function (e, t, n, i) {
                    let s = e.tr,
                      l = i.end,
                      a = i.$to.end(i.depth);
                    l < a &&
                      (s.step(
                        new r.Wg(
                          l - 1,
                          a,
                          l,
                          a,
                          new o.Ji(
                            o.FK.from(n.create(null, i.parent.copy())),
                            1,
                            0,
                          ),
                          1,
                          !0,
                        ),
                      ),
                      (i = new o.u$(
                        s.doc.resolve(i.$from.pos),
                        s.doc.resolve(a),
                        i.depth,
                      )));
                    const c = (0, r.jP)(i);
                    if (null == c) return !1;
                    s.lift(i, c);
                    let h = s.mapping.map(l, -1) - 1;
                    (0, r.n9)(s.doc, h) && s.join(h);
                    return t(s.scrollIntoView()), !0;
                  })(t, n, e, l)
                : (function (e, t, n) {
                    let i = e.tr,
                      s = n.parent;
                    for (
                      let e = n.end, t = n.endIndex - 1, r = n.startIndex;
                      t > r;
                      t--
                    )
                      (e -= s.child(t).nodeSize), i.delete(e - 1, e + 1);
                    let l = i.doc.resolve(n.start),
                      a = l.nodeAfter;
                    if (i.mapping.map(n.end) != n.start + l.nodeAfter.nodeSize)
                      return !1;
                    let c = 0 == n.startIndex,
                      h = n.endIndex == s.childCount,
                      p = l.node(-1),
                      u = l.index(-1);
                    if (
                      !p.canReplace(
                        u + (c ? 0 : 1),
                        u + 1,
                        a.content.append(h ? o.FK.empty : o.FK.from(s)),
                      )
                    )
                      return !1;
                    let d = l.pos,
                      f = d + a.nodeSize;
                    return (
                      i.step(
                        new r.Wg(
                          d - (c ? 1 : 0),
                          f + (h ? 1 : 0),
                          d + 1,
                          f - 1,
                          new o.Ji(
                            (c
                              ? o.FK.empty
                              : o.FK.from(s.copy(o.FK.empty))
                            ).append(
                              h ? o.FK.empty : o.FK.from(s.copy(o.FK.empty)),
                            ),
                            c ? 0 : 1,
                            h ? 0 : 1,
                          ),
                          c ? 0 : 1,
                        ),
                      ),
                      t(i.scrollIntoView()),
                      !0
                    );
                  })(t, n, l)))
          );
        };
      }
      function m(e) {
        return function (t, n) {
          let { $from: i, $to: s } = t.selection,
            l = i.blockRange(
              s,
              (t) => t.childCount > 0 && t.firstChild.type == e,
            );
          if (!l) return !1;
          let a = l.startIndex;
          if (0 == a) return !1;
          let c = l.parent,
            h = c.child(a - 1);
          if (h.type != e) return !1;
          if (n) {
            let i = h.lastChild && h.lastChild.type == c.type,
              s = o.FK.from(i ? e.create() : null),
              a = new o.Ji(
                o.FK.from(e.create(null, o.FK.from(c.type.create(null, s)))),
                i ? 3 : 1,
                0,
              ),
              p = l.start,
              u = l.end;
            n(
              t.tr
                .step(new r.Wg(p - (i ? 3 : 1), u, p, u, a, 1, !0))
                .scrollIntoView(),
            );
          }
          return !0;
        };
      }
    },
    52893: (e, t, n) => {
      "use strict";
      n.d(t, {
        $t: () => k,
        LN: () => s,
        U3: () => h,
        hs: () => A,
        i5: () => f,
        k_: () => O,
        nh: () => u,
        yn: () => l,
      });
      var r = n(57053),
        o = n(63734);
      const i = Object.create(null);
      class s {
        constructor(e, t, n) {
          (this.$anchor = e),
            (this.$head = t),
            (this.ranges = n || [new l(e.min(t), e.max(t))]);
        }
        get anchor() {
          return this.$anchor.pos;
        }
        get head() {
          return this.$head.pos;
        }
        get from() {
          return this.$from.pos;
        }
        get to() {
          return this.$to.pos;
        }
        get $from() {
          return this.ranges[0].$from;
        }
        get $to() {
          return this.ranges[0].$to;
        }
        get empty() {
          let e = this.ranges;
          for (let t = 0; t < e.length; t++)
            if (e[t].$from.pos != e[t].$to.pos) return !1;
          return !0;
        }
        content() {
          return this.$from.doc.slice(this.from, this.to, !0);
        }
        replace(e, t = r.Ji.empty) {
          let n = t.content.lastChild,
            o = null;
          for (let e = 0; e < t.openEnd; e++) (o = n), (n = n.lastChild);
          let i = e.steps.length,
            s = this.ranges;
          for (let l = 0; l < s.length; l++) {
            let { $from: a, $to: c } = s[l],
              h = e.mapping.slice(i);
            e.replaceRange(h.map(a.pos), h.map(c.pos), l ? r.Ji.empty : t),
              0 == l && b(e, i, (n ? n.isInline : o && o.isTextblock) ? -1 : 1);
          }
        }
        replaceWith(e, t) {
          let n = e.steps.length,
            r = this.ranges;
          for (let o = 0; o < r.length; o++) {
            let { $from: i, $to: s } = r[o],
              l = e.mapping.slice(n),
              a = l.map(i.pos),
              c = l.map(s.pos);
            o
              ? e.deleteRange(a, c)
              : (e.replaceRangeWith(a, c, t), b(e, n, t.isInline ? -1 : 1));
          }
        }
        static findFrom(e, t, n = !1) {
          let r = e.parent.inlineContent
            ? new h(e)
            : g(e.node(0), e.parent, e.pos, e.index(), t, n);
          if (r) return r;
          for (let r = e.depth - 1; r >= 0; r--) {
            let o =
              t < 0
                ? g(e.node(0), e.node(r), e.before(r + 1), e.index(r), t, n)
                : g(e.node(0), e.node(r), e.after(r + 1), e.index(r) + 1, t, n);
            if (o) return o;
          }
          return null;
        }
        static near(e, t = 1) {
          return (
            this.findFrom(e, t) || this.findFrom(e, -t) || new f(e.node(0))
          );
        }
        static atStart(e) {
          return g(e, e, 0, 0, 1) || new f(e);
        }
        static atEnd(e) {
          return g(e, e, e.content.size, e.childCount, -1) || new f(e);
        }
        static fromJSON(e, t) {
          if (!t || !t.type)
            throw new RangeError("Invalid input for Selection.fromJSON");
          let n = i[t.type];
          if (!n) throw new RangeError(`No selection type ${t.type} defined`);
          return n.fromJSON(e, t);
        }
        static jsonID(e, t) {
          if (e in i)
            throw new RangeError("Duplicate use of selection JSON ID " + e);
          return (i[e] = t), (t.prototype.jsonID = e), t;
        }
        getBookmark() {
          return h.between(this.$anchor, this.$head).getBookmark();
        }
      }
      s.prototype.visible = !0;
      class l {
        constructor(e, t) {
          (this.$from = e), (this.$to = t);
        }
      }
      let a = !1;
      function c(e) {
        a ||
          e.parent.inlineContent ||
          ((a = !0),
          console.warn(
            "TextSelection endpoint not pointing into a node with inline content (" +
              e.parent.type.name +
              ")",
          ));
      }
      class h extends s {
        constructor(e, t = e) {
          c(e), c(t), super(e, t);
        }
        get $cursor() {
          return this.$anchor.pos == this.$head.pos ? this.$head : null;
        }
        map(e, t) {
          let n = e.resolve(t.map(this.head));
          if (!n.parent.inlineContent) return s.near(n);
          let r = e.resolve(t.map(this.anchor));
          return new h(r.parent.inlineContent ? r : n, n);
        }
        replace(e, t = r.Ji.empty) {
          if ((super.replace(e, t), t == r.Ji.empty)) {
            let t = this.$from.marksAcross(this.$to);
            t && e.ensureMarks(t);
          }
        }
        eq(e) {
          return (
            e instanceof h && e.anchor == this.anchor && e.head == this.head
          );
        }
        getBookmark() {
          return new p(this.anchor, this.head);
        }
        toJSON() {
          return { type: "text", anchor: this.anchor, head: this.head };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.anchor || "number" != typeof t.head)
            throw new RangeError("Invalid input for TextSelection.fromJSON");
          return new h(e.resolve(t.anchor), e.resolve(t.head));
        }
        static create(e, t, n = t) {
          let r = e.resolve(t);
          return new this(r, n == t ? r : e.resolve(n));
        }
        static between(e, t, n) {
          let r = e.pos - t.pos;
          if (((n && !r) || (n = r >= 0 ? 1 : -1), !t.parent.inlineContent)) {
            let e = s.findFrom(t, n, !0) || s.findFrom(t, -n, !0);
            if (!e) return s.near(t, n);
            t = e.$head;
          }
          return (
            e.parent.inlineContent ||
              ((0 == r ||
                (e = (s.findFrom(e, -n, !0) || s.findFrom(e, n, !0)).$anchor)
                  .pos <
                  t.pos !=
                  r < 0) &&
                (e = t)),
            new h(e, t)
          );
        }
      }
      s.jsonID("text", h);
      class p {
        constructor(e, t) {
          (this.anchor = e), (this.head = t);
        }
        map(e) {
          return new p(e.map(this.anchor), e.map(this.head));
        }
        resolve(e) {
          return h.between(e.resolve(this.anchor), e.resolve(this.head));
        }
      }
      class u extends s {
        constructor(e) {
          let t = e.nodeAfter,
            n = e.node(0).resolve(e.pos + t.nodeSize);
          super(e, n), (this.node = t);
        }
        map(e, t) {
          let { deleted: n, pos: r } = t.mapResult(this.anchor),
            o = e.resolve(r);
          return n ? s.near(o) : new u(o);
        }
        content() {
          return new r.Ji(r.FK.from(this.node), 0, 0);
        }
        eq(e) {
          return e instanceof u && e.anchor == this.anchor;
        }
        toJSON() {
          return { type: "node", anchor: this.anchor };
        }
        getBookmark() {
          return new d(this.anchor);
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.anchor)
            throw new RangeError("Invalid input for NodeSelection.fromJSON");
          return new u(e.resolve(t.anchor));
        }
        static create(e, t) {
          return new u(e.resolve(t));
        }
        static isSelectable(e) {
          return !e.isText && !1 !== e.type.spec.selectable;
        }
      }
      (u.prototype.visible = !1), s.jsonID("node", u);
      class d {
        constructor(e) {
          this.anchor = e;
        }
        map(e) {
          let { deleted: t, pos: n } = e.mapResult(this.anchor);
          return t ? new p(n, n) : new d(n);
        }
        resolve(e) {
          let t = e.resolve(this.anchor),
            n = t.nodeAfter;
          return n && u.isSelectable(n) ? new u(t) : s.near(t);
        }
      }
      class f extends s {
        constructor(e) {
          super(e.resolve(0), e.resolve(e.content.size));
        }
        replace(e, t = r.Ji.empty) {
          if (t == r.Ji.empty) {
            e.delete(0, e.doc.content.size);
            let t = s.atStart(e.doc);
            t.eq(e.selection) || e.setSelection(t);
          } else super.replace(e, t);
        }
        toJSON() {
          return { type: "all" };
        }
        static fromJSON(e) {
          return new f(e);
        }
        map(e) {
          return new f(e);
        }
        eq(e) {
          return e instanceof f;
        }
        getBookmark() {
          return m;
        }
      }
      s.jsonID("all", f);
      const m = {
        map() {
          return this;
        },
        resolve: (e) => new f(e),
      };
      function g(e, t, n, r, o, i = !1) {
        if (t.inlineContent) return h.create(e, n);
        for (
          let s = r - (o > 0 ? 0 : 1);
          o > 0 ? s < t.childCount : s >= 0;
          s += o
        ) {
          let r = t.child(s);
          if (r.isAtom) {
            if (!i && u.isSelectable(r))
              return u.create(e, n - (o < 0 ? r.nodeSize : 0));
          } else {
            let t = g(e, r, n + o, o < 0 ? r.childCount : 0, o, i);
            if (t) return t;
          }
          n += r.nodeSize * o;
        }
        return null;
      }
      function b(e, t, n) {
        let r = e.steps.length - 1;
        if (r < t) return;
        let i,
          l = e.steps[r];
        (l instanceof o.Ln || l instanceof o.Wg) &&
          (e.mapping.maps[r].forEach((e, t, n, r) => {
            null == i && (i = r);
          }),
          e.setSelection(s.near(e.doc.resolve(i), n)));
      }
      class y extends o.dL {
        constructor(e) {
          super(e.doc),
            (this.curSelectionFor = 0),
            (this.updated = 0),
            (this.meta = Object.create(null)),
            (this.time = Date.now()),
            (this.curSelection = e.selection),
            (this.storedMarks = e.storedMarks);
        }
        get selection() {
          return (
            this.curSelectionFor < this.steps.length &&
              ((this.curSelection = this.curSelection.map(
                this.doc,
                this.mapping.slice(this.curSelectionFor),
              )),
              (this.curSelectionFor = this.steps.length)),
            this.curSelection
          );
        }
        setSelection(e) {
          if (e.$from.doc != this.doc)
            throw new RangeError(
              "Selection passed to setSelection must point at the current document",
            );
          return (
            (this.curSelection = e),
            (this.curSelectionFor = this.steps.length),
            (this.updated = -3 & (1 | this.updated)),
            (this.storedMarks = null),
            this
          );
        }
        get selectionSet() {
          return (1 & this.updated) > 0;
        }
        setStoredMarks(e) {
          return (this.storedMarks = e), (this.updated |= 2), this;
        }
        ensureMarks(e) {
          return (
            r.CU.sameSet(this.storedMarks || this.selection.$from.marks(), e) ||
              this.setStoredMarks(e),
            this
          );
        }
        addStoredMark(e) {
          return this.ensureMarks(
            e.addToSet(this.storedMarks || this.selection.$head.marks()),
          );
        }
        removeStoredMark(e) {
          return this.ensureMarks(
            e.removeFromSet(this.storedMarks || this.selection.$head.marks()),
          );
        }
        get storedMarksSet() {
          return (2 & this.updated) > 0;
        }
        addStep(e, t) {
          super.addStep(e, t),
            (this.updated = -3 & this.updated),
            (this.storedMarks = null);
        }
        setTime(e) {
          return (this.time = e), this;
        }
        replaceSelection(e) {
          return this.selection.replace(this, e), this;
        }
        replaceSelectionWith(e, t = !0) {
          let n = this.selection;
          return (
            t &&
              (e = e.mark(
                this.storedMarks ||
                  (n.empty
                    ? n.$from.marks()
                    : n.$from.marksAcross(n.$to) || r.CU.none),
              )),
            n.replaceWith(this, e),
            this
          );
        }
        deleteSelection() {
          return this.selection.replace(this), this;
        }
        insertText(e, t, n) {
          let r = this.doc.type.schema;
          if (null == t)
            return e
              ? this.replaceSelectionWith(r.text(e), !0)
              : this.deleteSelection();
          {
            if ((null == n && (n = t), (n = null == n ? t : n), !e))
              return this.deleteRange(t, n);
            let o = this.storedMarks;
            if (!o) {
              let e = this.doc.resolve(t);
              o = n == t ? e.marks() : e.marksAcross(this.doc.resolve(n));
            }
            return (
              this.replaceRangeWith(t, n, r.text(e, o)),
              this.selection.empty ||
                this.setSelection(s.near(this.selection.$to)),
              this
            );
          }
        }
        setMeta(e, t) {
          return (this.meta["string" == typeof e ? e : e.key] = t), this;
        }
        getMeta(e) {
          return this.meta["string" == typeof e ? e : e.key];
        }
        get isGeneric() {
          for (let e in this.meta) return !1;
          return !0;
        }
        scrollIntoView() {
          return (this.updated |= 4), this;
        }
        get scrolledIntoView() {
          return (4 & this.updated) > 0;
        }
      }
      function v(e, t) {
        return t && e ? e.bind(t) : e;
      }
      class w {
        constructor(e, t, n) {
          (this.name = e),
            (this.init = v(t.init, n)),
            (this.apply = v(t.apply, n));
        }
      }
      const x = [
        new w("doc", {
          init: (e) => e.doc || e.schema.topNodeType.createAndFill(),
          apply: (e) => e.doc,
        }),
        new w("selection", {
          init: (e, t) => e.selection || s.atStart(t.doc),
          apply: (e) => e.selection,
        }),
        new w("storedMarks", {
          init: (e) => e.storedMarks || null,
          apply: (e, t, n, r) => (r.selection.$cursor ? e.storedMarks : null),
        }),
        new w("scrollToSelection", {
          init: () => 0,
          apply: (e, t) => (e.scrolledIntoView ? t + 1 : t),
        }),
      ];
      class S {
        constructor(e, t) {
          (this.schema = e),
            (this.plugins = []),
            (this.pluginsByKey = Object.create(null)),
            (this.fields = x.slice()),
            t &&
              t.forEach((e) => {
                if (this.pluginsByKey[e.key])
                  throw new RangeError(
                    "Adding different instances of a keyed plugin (" +
                      e.key +
                      ")",
                  );
                this.plugins.push(e),
                  (this.pluginsByKey[e.key] = e),
                  e.spec.state &&
                    this.fields.push(new w(e.key, e.spec.state, e));
              });
        }
      }
      class k {
        constructor(e) {
          this.config = e;
        }
        get schema() {
          return this.config.schema;
        }
        get plugins() {
          return this.config.plugins;
        }
        apply(e) {
          return this.applyTransaction(e).state;
        }
        filterTransaction(e, t = -1) {
          for (let n = 0; n < this.config.plugins.length; n++)
            if (n != t) {
              let t = this.config.plugins[n];
              if (
                t.spec.filterTransaction &&
                !t.spec.filterTransaction.call(t, e, this)
              )
                return !1;
            }
          return !0;
        }
        applyTransaction(e) {
          if (!this.filterTransaction(e))
            return { state: this, transactions: [] };
          let t = [e],
            n = this.applyInner(e),
            r = null;
          for (;;) {
            let o = !1;
            for (let i = 0; i < this.config.plugins.length; i++) {
              let s = this.config.plugins[i];
              if (s.spec.appendTransaction) {
                let l = r ? r[i].n : 0,
                  a = r ? r[i].state : this,
                  c =
                    l < t.length &&
                    s.spec.appendTransaction.call(s, l ? t.slice(l) : t, a, n);
                if (c && n.filterTransaction(c, i)) {
                  if ((c.setMeta("appendedTransaction", e), !r)) {
                    r = [];
                    for (let e = 0; e < this.config.plugins.length; e++)
                      r.push(
                        e < i
                          ? { state: n, n: t.length }
                          : { state: this, n: 0 },
                      );
                  }
                  t.push(c), (n = n.applyInner(c)), (o = !0);
                }
                r && (r[i] = { state: n, n: t.length });
              }
            }
            if (!o) return { state: n, transactions: t };
          }
        }
        applyInner(e) {
          if (!e.before.eq(this.doc))
            throw new RangeError("Applying a mismatched transaction");
          let t = new k(this.config),
            n = this.config.fields;
          for (let r = 0; r < n.length; r++) {
            let o = n[r];
            t[o.name] = o.apply(e, this[o.name], this, t);
          }
          return t;
        }
        get tr() {
          return new y(this);
        }
        static create(e) {
          let t = new S(e.doc ? e.doc.type.schema : e.schema, e.plugins),
            n = new k(t);
          for (let r = 0; r < t.fields.length; r++)
            n[t.fields[r].name] = t.fields[r].init(e, n);
          return n;
        }
        reconfigure(e) {
          let t = new S(this.schema, e.plugins),
            n = t.fields,
            r = new k(t);
          for (let t = 0; t < n.length; t++) {
            let o = n[t].name;
            r[o] = this.hasOwnProperty(o) ? this[o] : n[t].init(e, r);
          }
          return r;
        }
        toJSON(e) {
          let t = {
            doc: this.doc.toJSON(),
            selection: this.selection.toJSON(),
          };
          if (
            (this.storedMarks &&
              (t.storedMarks = this.storedMarks.map((e) => e.toJSON())),
            e && "object" == typeof e)
          )
            for (let n in e) {
              if ("doc" == n || "selection" == n)
                throw new RangeError(
                  "The JSON fields `doc` and `selection` are reserved",
                );
              let r = e[n],
                o = r.spec.state;
              o && o.toJSON && (t[n] = o.toJSON.call(r, this[r.key]));
            }
          return t;
        }
        static fromJSON(e, t, n) {
          if (!t)
            throw new RangeError("Invalid input for EditorState.fromJSON");
          if (!e.schema)
            throw new RangeError("Required config field 'schema' missing");
          let o = new S(e.schema, e.plugins),
            i = new k(o);
          return (
            o.fields.forEach((o) => {
              if ("doc" == o.name) i.doc = r.bP.fromJSON(e.schema, t.doc);
              else if ("selection" == o.name)
                i.selection = s.fromJSON(i.doc, t.selection);
              else if ("storedMarks" == o.name)
                t.storedMarks &&
                  (i.storedMarks = t.storedMarks.map(e.schema.markFromJSON));
              else {
                if (n)
                  for (let r in n) {
                    let s = n[r],
                      l = s.spec.state;
                    if (
                      s.key == o.name &&
                      l &&
                      l.fromJSON &&
                      Object.prototype.hasOwnProperty.call(t, r)
                    )
                      return void (i[o.name] = l.fromJSON.call(s, e, t[r], i));
                  }
                i[o.name] = o.init(e, i);
              }
            }),
            i
          );
        }
      }
      function C(e, t, n) {
        for (let r in e) {
          let o = e[r];
          o instanceof Function
            ? (o = o.bind(t))
            : "handleDOMEvents" == r && (o = C(o, t, {})),
            (n[r] = o);
        }
        return n;
      }
      class O {
        constructor(e) {
          (this.spec = e),
            (this.props = {}),
            e.props && C(e.props, this, this.props),
            (this.key = e.key ? e.key.key : E("plugin"));
        }
        getState(e) {
          return e[this.key];
        }
      }
      const M = Object.create(null);
      function E(e) {
        return e in M ? e + "$" + ++M[e] : ((M[e] = 0), e + "$");
      }
      class A {
        constructor(e = "key") {
          this.key = E(e);
        }
        get(e) {
          return e.config.pluginsByKey[this.key];
        }
        getState(e) {
          return e[this.key];
        }
      }
    },
    38539: (e, t, n) => {
      "use strict";
      n.d(t, {
        AL: () => me,
        GU: () => j,
        JD: () => P,
        L0: () => H,
        LF: () => Se,
        Qg: () => ue,
        RC: () => R,
        _G: () => G,
        aH: () => y,
        aR: () => L,
        gC: () => I,
        gR: () => z,
        of: () => f,
        uC: () => U,
        w7: () => J,
        xV: () => q,
      });
      var r,
        o,
        i = n(52893),
        s = n(57053),
        l = n(29287),
        a = n(7502),
        c = n(63734);
      if ("undefined" != typeof WeakMap) {
        let e = new WeakMap();
        (r = (t) => e.get(t)), (o = (t, n) => (e.set(t, n), n));
      } else {
        const e = [],
          t = 10;
        let n = 0;
        (r = (t) => {
          for (let n = 0; n < e.length; n += 2) if (e[n] == t) return e[n + 1];
        }),
          (o = (r, o) => (n == t && (n = 0), (e[n++] = r), (e[n++] = o)));
      }
      var h = class {
        constructor(e, t, n, r) {
          (this.width = e),
            (this.height = t),
            (this.map = n),
            (this.problems = r);
        }
        findCell(e) {
          for (let t = 0; t < this.map.length; t++) {
            const n = this.map[t];
            if (n != e) continue;
            const r = t % this.width,
              o = (t / this.width) | 0;
            let i = r + 1,
              s = o + 1;
            for (let e = 1; i < this.width && this.map[t + e] == n; e++) i++;
            for (
              let e = 1;
              s < this.height && this.map[t + this.width * e] == n;
              e++
            )
              s++;
            return { left: r, top: o, right: i, bottom: s };
          }
          throw new RangeError(`No cell with offset ${e} found`);
        }
        colCount(e) {
          for (let t = 0; t < this.map.length; t++)
            if (this.map[t] == e) return t % this.width;
          throw new RangeError(`No cell with offset ${e} found`);
        }
        nextCell(e, t, n) {
          const { left: r, right: o, top: i, bottom: s } = this.findCell(e);
          return "horiz" == t
            ? (n < 0 ? 0 == r : o == this.width)
              ? null
              : this.map[i * this.width + (n < 0 ? r - 1 : o)]
            : (n < 0 ? 0 == i : s == this.height)
              ? null
              : this.map[r + this.width * (n < 0 ? i - 1 : s)];
        }
        rectBetween(e, t) {
          const { left: n, right: r, top: o, bottom: i } = this.findCell(e),
            { left: s, right: l, top: a, bottom: c } = this.findCell(t);
          return {
            left: Math.min(n, s),
            top: Math.min(o, a),
            right: Math.max(r, l),
            bottom: Math.max(i, c),
          };
        }
        cellsInRect(e) {
          const t = [],
            n = {};
          for (let r = e.top; r < e.bottom; r++)
            for (let o = e.left; o < e.right; o++) {
              const i = r * this.width + o,
                s = this.map[i];
              n[s] ||
                ((n[s] = !0),
                (o == e.left && o && this.map[i - 1] == s) ||
                  (r == e.top && r && this.map[i - this.width] == s) ||
                  t.push(s));
            }
          return t;
        }
        positionAt(e, t, n) {
          for (let r = 0, o = 0; ; r++) {
            const i = o + n.child(r).nodeSize;
            if (r == e) {
              let n = t + e * this.width;
              const r = (e + 1) * this.width;
              for (; n < r && this.map[n] < o; ) n++;
              return n == r ? i - 1 : this.map[n];
            }
            o = i;
          }
        }
        static get(e) {
          return (
            r(e) ||
            o(
              e,
              (function (e) {
                if ("table" != e.type.spec.tableRole)
                  throw new RangeError("Not a table node: " + e.type.name);
                const t = (function (e) {
                    let t = -1,
                      n = !1;
                    for (let r = 0; r < e.childCount; r++) {
                      const o = e.child(r);
                      let i = 0;
                      if (n)
                        for (let t = 0; t < r; t++) {
                          const n = e.child(t);
                          for (let e = 0; e < n.childCount; e++) {
                            const o = n.child(e);
                            t + o.attrs.rowspan > r && (i += o.attrs.colspan);
                          }
                        }
                      for (let e = 0; e < o.childCount; e++) {
                        const t = o.child(e);
                        (i += t.attrs.colspan), t.attrs.rowspan > 1 && (n = !0);
                      }
                      -1 == t ? (t = i) : t != i && (t = Math.max(t, i));
                    }
                    return t;
                  })(e),
                  n = e.childCount,
                  r = [];
                let o = 0,
                  i = null;
                const s = [];
                for (let e = 0, o = t * n; e < o; e++) r[e] = 0;
                for (let l = 0, a = 0; l < n; l++) {
                  const c = e.child(l);
                  a++;
                  for (let e = 0; ; e++) {
                    for (; o < r.length && 0 != r[o]; ) o++;
                    if (e == c.childCount) break;
                    const h = c.child(e),
                      { colspan: p, rowspan: u, colwidth: d } = h.attrs;
                    for (let e = 0; e < u; e++) {
                      if (e + l >= n) {
                        (i || (i = [])).push({
                          type: "overlong_rowspan",
                          pos: a,
                          n: u - e,
                        });
                        break;
                      }
                      const c = o + e * t;
                      for (let e = 0; e < p; e++) {
                        0 == r[c + e]
                          ? (r[c + e] = a)
                          : (i || (i = [])).push({
                              type: "collision",
                              row: l,
                              pos: a,
                              n: p - e,
                            });
                        const n = d && d[e];
                        if (n) {
                          const r = ((c + e) % t) * 2,
                            o = s[r];
                          null == o || (o != n && 1 == s[r + 1])
                            ? ((s[r] = n), (s[r + 1] = 1))
                            : o == n && s[r + 1]++;
                        }
                      }
                    }
                    (o += p), (a += h.nodeSize);
                  }
                  const h = (l + 1) * t;
                  let p = 0;
                  for (; o < h; ) 0 == r[o++] && p++;
                  p && (i || (i = [])).push({ type: "missing", row: l, n: p }),
                    a++;
                }
                const l = new h(t, n, r, i);
                let a = !1;
                for (let e = 0; !a && e < s.length; e += 2)
                  null != s[e] && s[e + 1] < n && (a = !0);
                a &&
                  (function (e, t, n) {
                    e.problems || (e.problems = []);
                    const r = {};
                    for (let o = 0; o < e.map.length; o++) {
                      const i = e.map[o];
                      if (r[i]) continue;
                      r[i] = !0;
                      const s = n.nodeAt(i);
                      if (!s)
                        throw new RangeError(`No cell with offset ${i} found`);
                      let l = null;
                      const a = s.attrs;
                      for (let n = 0; n < a.colspan; n++) {
                        const r = t[2 * ((o + n) % e.width)];
                        null == r ||
                          (a.colwidth && a.colwidth[n] == r) ||
                          ((l || (l = p(a)))[n] = r);
                      }
                      l &&
                        e.problems.unshift({
                          type: "colwidth mismatch",
                          pos: i,
                          colwidth: l,
                        });
                    }
                  })(l, s, e);
                return l;
              })(e),
            )
          );
        }
      };
      function p(e) {
        if (e.colwidth) return e.colwidth.slice();
        const t = [];
        for (let n = 0; n < e.colspan; n++) t.push(0);
        return t;
      }
      function u(e, t) {
        if ("string" == typeof e) return {};
        const n = e.getAttribute("data-colwidth"),
          r =
            n && /^\d+(,\d+)*$/.test(n)
              ? n.split(",").map((e) => Number(e))
              : null,
          o = Number(e.getAttribute("colspan") || 1),
          i = {
            colspan: o,
            rowspan: Number(e.getAttribute("rowspan") || 1),
            colwidth: r && r.length == o ? r : null,
          };
        for (const n in t) {
          const r = t[n].getFromDOM,
            o = r && r(e);
          null != o && (i[n] = o);
        }
        return i;
      }
      function d(e, t) {
        const n = {};
        1 != e.attrs.colspan && (n.colspan = e.attrs.colspan),
          1 != e.attrs.rowspan && (n.rowspan = e.attrs.rowspan),
          e.attrs.colwidth && (n["data-colwidth"] = e.attrs.colwidth.join(","));
        for (const r in t) {
          const o = t[r].setDOMAttr;
          o && o(e.attrs[r], n);
        }
        return n;
      }
      function f(e) {
        const t = e.cellAttributes || {},
          n = {
            colspan: { default: 1 },
            rowspan: { default: 1 },
            colwidth: { default: null },
          };
        for (const e in t) n[e] = { default: t[e].default };
        return {
          table: {
            content: "table_row+",
            tableRole: "table",
            isolating: !0,
            group: e.tableGroup,
            parseDOM: [{ tag: "table" }],
            toDOM: () => ["table", ["tbody", 0]],
          },
          table_row: {
            content: "(table_cell | table_header)*",
            tableRole: "row",
            parseDOM: [{ tag: "tr" }],
            toDOM: () => ["tr", 0],
          },
          table_cell: {
            content: e.cellContent,
            attrs: n,
            tableRole: "cell",
            isolating: !0,
            parseDOM: [{ tag: "td", getAttrs: (e) => u(e, t) }],
            toDOM: (e) => ["td", d(e, t), 0],
          },
          table_header: {
            content: e.cellContent,
            attrs: n,
            tableRole: "header_cell",
            isolating: !0,
            parseDOM: [{ tag: "th", getAttrs: (e) => u(e, t) }],
            toDOM: (e) => ["th", d(e, t), 0],
          },
        };
      }
      function m(e) {
        let t = e.cached.tableNodeTypes;
        if (!t) {
          t = e.cached.tableNodeTypes = {};
          for (const n in e.nodes) {
            const r = e.nodes[n],
              o = r.spec.tableRole;
            o && (t[o] = r);
          }
        }
        return t;
      }
      var g = new i.hs("selectingCells");
      function b(e) {
        for (let t = e.depth - 1; t > 0; t--)
          if ("row" == e.node(t).type.spec.tableRole)
            return e.node(0).resolve(e.before(t + 1));
        return null;
      }
      function y(e) {
        const t = e.selection.$head;
        for (let e = t.depth; e > 0; e--)
          if ("row" == t.node(e).type.spec.tableRole) return !0;
        return !1;
      }
      function v(e) {
        const t = e.selection;
        if ("$anchorCell" in t && t.$anchorCell)
          return t.$anchorCell.pos > t.$headCell.pos
            ? t.$anchorCell
            : t.$headCell;
        if ("node" in t && t.node && "cell" == t.node.type.spec.tableRole)
          return t.$anchor;
        const n =
          b(t.$head) ||
          (function (e) {
            for (let t = e.nodeAfter, n = e.pos; t; t = t.firstChild, n++) {
              const r = t.type.spec.tableRole;
              if ("cell" == r || "header_cell" == r) return e.doc.resolve(n);
            }
            for (let t = e.nodeBefore, n = e.pos; t; t = t.lastChild, n--) {
              const r = t.type.spec.tableRole;
              if ("cell" == r || "header_cell" == r)
                return e.doc.resolve(n - t.nodeSize);
            }
          })(t.$head);
        if (n) return n;
        throw new RangeError(`No cell found around position ${t.head}`);
      }
      function w(e) {
        return "row" == e.parent.type.spec.tableRole && !!e.nodeAfter;
      }
      function x(e, t) {
        return e.depth == t.depth && e.pos >= t.start(-1) && e.pos <= t.end(-1);
      }
      function S(e, t, n) {
        const r = e.node(-1),
          o = h.get(r),
          i = e.start(-1),
          s = o.nextCell(e.pos - i, t, n);
        return null == s ? null : e.node(0).resolve(i + s);
      }
      function k(e, t, n = 1) {
        const r = { ...e, colspan: e.colspan - n };
        return (
          r.colwidth &&
            ((r.colwidth = r.colwidth.slice()),
            r.colwidth.splice(t, n),
            r.colwidth.some((e) => e > 0) || (r.colwidth = null)),
          r
        );
      }
      function C(e, t, n = 1) {
        const r = { ...e, colspan: e.colspan + n };
        if (r.colwidth) {
          r.colwidth = r.colwidth.slice();
          for (let e = 0; e < n; e++) r.colwidth.splice(t, 0, 0);
        }
        return r;
      }
      var O = class e extends i.LN {
        constructor(e, t = e) {
          const n = e.node(-1),
            r = h.get(n),
            o = e.start(-1),
            s = r.rectBetween(e.pos - o, t.pos - o),
            l = e.node(0),
            a = r.cellsInRect(s).filter((e) => e != t.pos - o);
          a.unshift(t.pos - o);
          const c = a.map((e) => {
            const t = n.nodeAt(e);
            if (!t) throw RangeError(`No cell with offset ${e} found`);
            const r = o + e + 1;
            return new i.yn(l.resolve(r), l.resolve(r + t.content.size));
          });
          super(c[0].$from, c[0].$to, c),
            (this.$anchorCell = e),
            (this.$headCell = t);
        }
        map(t, n) {
          const r = t.resolve(n.map(this.$anchorCell.pos)),
            o = t.resolve(n.map(this.$headCell.pos));
          if (w(r) && w(o) && x(r, o)) {
            const t = this.$anchorCell.node(-1) != r.node(-1);
            return t && this.isRowSelection()
              ? e.rowSelection(r, o)
              : t && this.isColSelection()
                ? e.colSelection(r, o)
                : new e(r, o);
          }
          return i.U3.between(r, o);
        }
        content() {
          const e = this.$anchorCell.node(-1),
            t = h.get(e),
            n = this.$anchorCell.start(-1),
            r = t.rectBetween(this.$anchorCell.pos - n, this.$headCell.pos - n),
            o = {},
            i = [];
          for (let n = r.top; n < r.bottom; n++) {
            const l = [];
            for (
              let i = n * t.width + r.left, s = r.left;
              s < r.right;
              s++, i++
            ) {
              const n = t.map[i];
              if (o[n]) continue;
              o[n] = !0;
              const s = t.findCell(n);
              let a = e.nodeAt(n);
              if (!a) throw RangeError(`No cell with offset ${n} found`);
              const c = r.left - s.left,
                h = s.right - r.right;
              if (c > 0 || h > 0) {
                let e = a.attrs;
                if (
                  (c > 0 && (e = k(e, 0, c)),
                  h > 0 && (e = k(e, e.colspan - h, h)),
                  s.left < r.left)
                ) {
                  if (((a = a.type.createAndFill(e)), !a))
                    throw RangeError(
                      `Could not create cell with attrs ${JSON.stringify(e)}`,
                    );
                } else a = a.type.create(e, a.content);
              }
              if (s.top < r.top || s.bottom > r.bottom) {
                const e = {
                  ...a.attrs,
                  rowspan:
                    Math.min(s.bottom, r.bottom) - Math.max(s.top, r.top),
                };
                a =
                  s.top < r.top
                    ? a.type.createAndFill(e)
                    : a.type.create(e, a.content);
              }
              l.push(a);
            }
            i.push(e.child(n).copy(s.FK.from(l)));
          }
          const l = this.isColSelection() && this.isRowSelection() ? e : i;
          return new s.Ji(s.FK.from(l), 1, 1);
        }
        replace(e, t = s.Ji.empty) {
          const n = e.steps.length,
            r = this.ranges;
          for (let o = 0; o < r.length; o++) {
            const { $from: i, $to: l } = r[o],
              a = e.mapping.slice(n);
            e.replace(a.map(i.pos), a.map(l.pos), o ? s.Ji.empty : t);
          }
          const o = i.LN.findFrom(
            e.doc.resolve(e.mapping.slice(n).map(this.to)),
            -1,
          );
          o && e.setSelection(o);
        }
        replaceWith(e, t) {
          this.replace(e, new s.Ji(s.FK.from(t), 0, 0));
        }
        forEachCell(e) {
          const t = this.$anchorCell.node(-1),
            n = h.get(t),
            r = this.$anchorCell.start(-1),
            o = n.cellsInRect(
              n.rectBetween(this.$anchorCell.pos - r, this.$headCell.pos - r),
            );
          for (let n = 0; n < o.length; n++) e(t.nodeAt(o[n]), r + o[n]);
        }
        isColSelection() {
          const e = this.$anchorCell.index(-1),
            t = this.$headCell.index(-1);
          if (Math.min(e, t) > 0) return !1;
          const n = e + this.$anchorCell.nodeAfter.attrs.rowspan,
            r = t + this.$headCell.nodeAfter.attrs.rowspan;
          return Math.max(n, r) == this.$headCell.node(-1).childCount;
        }
        static colSelection(t, n = t) {
          const r = t.node(-1),
            o = h.get(r),
            i = t.start(-1),
            s = o.findCell(t.pos - i),
            l = o.findCell(n.pos - i),
            a = t.node(0);
          return (
            s.top <= l.top
              ? (s.top > 0 && (t = a.resolve(i + o.map[s.left])),
                l.bottom < o.height &&
                  (n = a.resolve(
                    i + o.map[o.width * (o.height - 1) + l.right - 1],
                  )))
              : (l.top > 0 && (n = a.resolve(i + o.map[l.left])),
                s.bottom < o.height &&
                  (t = a.resolve(
                    i + o.map[o.width * (o.height - 1) + s.right - 1],
                  ))),
            new e(t, n)
          );
        }
        isRowSelection() {
          const e = this.$anchorCell.node(-1),
            t = h.get(e),
            n = this.$anchorCell.start(-1),
            r = t.colCount(this.$anchorCell.pos - n),
            o = t.colCount(this.$headCell.pos - n);
          if (Math.min(r, o) > 0) return !1;
          const i = r + this.$anchorCell.nodeAfter.attrs.colspan,
            s = o + this.$headCell.nodeAfter.attrs.colspan;
          return Math.max(i, s) == t.width;
        }
        eq(t) {
          return (
            t instanceof e &&
            t.$anchorCell.pos == this.$anchorCell.pos &&
            t.$headCell.pos == this.$headCell.pos
          );
        }
        static rowSelection(t, n = t) {
          const r = t.node(-1),
            o = h.get(r),
            i = t.start(-1),
            s = o.findCell(t.pos - i),
            l = o.findCell(n.pos - i),
            a = t.node(0);
          return (
            s.left <= l.left
              ? (s.left > 0 && (t = a.resolve(i + o.map[s.top * o.width])),
                l.right < o.width &&
                  (n = a.resolve(i + o.map[o.width * (l.top + 1) - 1])))
              : (l.left > 0 && (n = a.resolve(i + o.map[l.top * o.width])),
                s.right < o.width &&
                  (t = a.resolve(i + o.map[o.width * (s.top + 1) - 1]))),
            new e(t, n)
          );
        }
        toJSON() {
          return {
            type: "cell",
            anchor: this.$anchorCell.pos,
            head: this.$headCell.pos,
          };
        }
        static fromJSON(t, n) {
          return new e(t.resolve(n.anchor), t.resolve(n.head));
        }
        static create(t, n, r = n) {
          return new e(t.resolve(n), t.resolve(r));
        }
        getBookmark() {
          return new M(this.$anchorCell.pos, this.$headCell.pos);
        }
      };
      (O.prototype.visible = !1), i.LN.jsonID("cell", O);
      var M = class e {
        constructor(e, t) {
          (this.anchor = e), (this.head = t);
        }
        map(t) {
          return new e(t.map(this.anchor), t.map(this.head));
        }
        resolve(e) {
          const t = e.resolve(this.anchor),
            n = e.resolve(this.head);
          return "row" == t.parent.type.spec.tableRole &&
            "row" == n.parent.type.spec.tableRole &&
            t.index() < t.parent.childCount &&
            n.index() < n.parent.childCount &&
            x(t, n)
            ? new O(t, n)
            : i.LN.near(n, 1);
        }
      };
      function E(e) {
        if (!(e.selection instanceof O)) return null;
        const t = [];
        return (
          e.selection.forEachCell((e, n) => {
            t.push(l.NZ.node(n, n + e.nodeSize, { class: "selectedCell" }));
          }),
          l.zF.create(e.doc, t)
        );
      }
      var A = new i.hs("fix-tables");
      function N(e, t, n, r) {
        const o = e.childCount,
          i = t.childCount;
        e: for (let s = 0, l = 0; s < i; s++) {
          const i = t.child(s);
          for (let t = l, r = Math.min(o, s + 3); t < r; t++)
            if (e.child(t) == i) {
              (l = t + 1), (n += i.nodeSize);
              continue e;
            }
          r(i, n),
            l < o && e.child(l).sameMarkup(i)
              ? N(e.child(l), i, n + 1, r)
              : i.nodesBetween(0, i.content.size, r, n + 1),
            (n += i.nodeSize);
        }
      }
      function T(e, t) {
        let n;
        const r = (t, r) => {
          "table" == t.type.spec.tableRole &&
            (n = (function (e, t, n, r) {
              const o = h.get(t);
              if (!o.problems) return r;
              r || (r = e.tr);
              const i = [];
              for (let e = 0; e < o.height; e++) i.push(0);
              for (let e = 0; e < o.problems.length; e++) {
                const s = o.problems[e];
                if ("collision" == s.type) {
                  const e = t.nodeAt(s.pos);
                  if (!e) continue;
                  const o = e.attrs;
                  for (let e = 0; e < o.rowspan; e++) i[s.row + e] += s.n;
                  r.setNodeMarkup(
                    r.mapping.map(n + 1 + s.pos),
                    null,
                    k(o, o.colspan - s.n, s.n),
                  );
                } else if ("missing" == s.type) i[s.row] += s.n;
                else if ("overlong_rowspan" == s.type) {
                  const e = t.nodeAt(s.pos);
                  if (!e) continue;
                  r.setNodeMarkup(r.mapping.map(n + 1 + s.pos), null, {
                    ...e.attrs,
                    rowspan: e.attrs.rowspan - s.n,
                  });
                } else if ("colwidth mismatch" == s.type) {
                  const e = t.nodeAt(s.pos);
                  if (!e) continue;
                  r.setNodeMarkup(r.mapping.map(n + 1 + s.pos), null, {
                    ...e.attrs,
                    colwidth: s.colwidth,
                  });
                }
              }
              let s, l;
              for (let e = 0; e < i.length; e++)
                i[e] && (null == s && (s = e), (l = e));
              for (let a = 0, c = n + 1; a < o.height; a++) {
                const n = t.child(a),
                  o = c + n.nodeSize,
                  h = i[a];
                if (h > 0) {
                  let t = "cell";
                  n.firstChild && (t = n.firstChild.type.spec.tableRole);
                  const i = [];
                  for (let n = 0; n < h; n++) {
                    const n = m(e.schema)[t].createAndFill();
                    n && i.push(n);
                  }
                  const p = (0 != a && s != a - 1) || l != a ? o - 1 : c + 1;
                  r.insert(r.mapping.map(p), i);
                }
                c = o;
              }
              return r.setMeta(A, { fixTables: !0 });
            })(e, t, r, n));
        };
        return (
          t ? t.doc != e.doc && N(t.doc, e.doc, 0, r) : e.doc.descendants(r), n
        );
      }
      function _(e) {
        const t = e.selection,
          n = v(e),
          r = n.node(-1),
          o = n.start(-1),
          i = h.get(r);
        return {
          ...(t instanceof O
            ? i.rectBetween(t.$anchorCell.pos - o, t.$headCell.pos - o)
            : i.findCell(n.pos - o)),
          tableStart: o,
          map: i,
          table: r,
        };
      }
      function D(e, { map: t, tableStart: n, table: r }, o) {
        let i = o > 0 ? -1 : 0;
        (function (e, t, n) {
          const r = m(t.type.schema).header_cell;
          for (let o = 0; o < e.height; o++)
            if (t.nodeAt(e.map[n + o * e.width]).type != r) return !1;
          return !0;
        })(t, r, o + i) && (i = 0 == o || o == t.width ? null : 0);
        for (let s = 0; s < t.height; s++) {
          const l = s * t.width + o;
          if (o > 0 && o < t.width && t.map[l - 1] == t.map[l]) {
            const i = t.map[l],
              a = r.nodeAt(i);
            e.setNodeMarkup(
              e.mapping.map(n + i),
              null,
              C(a.attrs, o - t.colCount(i)),
            ),
              (s += a.attrs.rowspan - 1);
          } else {
            const a =
                null == i ? m(r.type.schema).cell : r.nodeAt(t.map[l + i]).type,
              c = t.positionAt(s, o, r);
            e.insert(e.mapping.map(n + c), a.createAndFill());
          }
        }
        return e;
      }
      function R(e, t) {
        if (!y(e)) return !1;
        if (t) {
          const n = _(e);
          t(D(e.tr, n, n.left));
        }
        return !0;
      }
      function j(e, t) {
        if (!y(e)) return !1;
        if (t) {
          const n = _(e);
          t(D(e.tr, n, n.right));
        }
        return !0;
      }
      function F(e, { map: t, table: n, tableStart: r }, o) {
        const i = e.mapping.maps.length;
        for (let s = 0; s < t.height; ) {
          const l = s * t.width + o,
            a = t.map[l],
            c = n.nodeAt(a),
            h = c.attrs;
          if (
            (o > 0 && t.map[l - 1] == a) ||
            (o < t.width - 1 && t.map[l + 1] == a)
          )
            e.setNodeMarkup(
              e.mapping.slice(i).map(r + a),
              null,
              k(h, o - t.colCount(a)),
            );
          else {
            const t = e.mapping.slice(i).map(r + a);
            e.delete(t, t + c.nodeSize);
          }
          s += h.rowspan;
        }
      }
      function z(e, t) {
        if (!y(e)) return !1;
        if (t) {
          const n = _(e),
            r = e.tr;
          if (0 == n.left && n.right == n.map.width) return !1;
          for (let e = n.right - 1; F(r, n, e), e != n.left; e--) {
            const e = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
            if (!e) throw RangeError("No table found");
            (n.table = e), (n.map = h.get(e));
          }
          t(r);
        }
        return !0;
      }
      function B(e, { map: t, tableStart: n, table: r }, o) {
        var i;
        let s = n;
        for (let e = 0; e < o; e++) s += r.child(e).nodeSize;
        const l = [];
        let a = o > 0 ? -1 : 0;
        (function (e, t, n) {
          var r;
          const o = m(t.type.schema).header_cell;
          for (let i = 0; i < e.width; i++)
            if (
              (null == (r = t.nodeAt(e.map[i + n * e.width]))
                ? void 0
                : r.type) != o
            )
              return !1;
          return !0;
        })(t, r, o + a) && (a = 0 == o || o == t.height ? null : 0);
        for (let s = 0, c = t.width * o; s < t.width; s++, c++)
          if (o > 0 && o < t.height && t.map[c] == t.map[c - t.width]) {
            const o = t.map[c],
              i = r.nodeAt(o).attrs;
            e.setNodeMarkup(n + o, null, { ...i, rowspan: i.rowspan + 1 }),
              (s += i.colspan - 1);
          } else {
            const e =
                null == a
                  ? m(r.type.schema).cell
                  : null == (i = r.nodeAt(t.map[c + a * t.width]))
                    ? void 0
                    : i.type,
              n = null == e ? void 0 : e.createAndFill();
            n && l.push(n);
          }
        return e.insert(s, m(r.type.schema).row.create(null, l)), e;
      }
      function P(e, t) {
        if (!y(e)) return !1;
        if (t) {
          const n = _(e);
          t(B(e.tr, n, n.top));
        }
        return !0;
      }
      function I(e, t) {
        if (!y(e)) return !1;
        if (t) {
          const n = _(e);
          t(B(e.tr, n, n.bottom));
        }
        return !0;
      }
      function $(e, { map: t, table: n, tableStart: r }, o) {
        let i = 0;
        for (let e = 0; e < o; e++) i += n.child(e).nodeSize;
        const s = i + n.child(o).nodeSize,
          l = e.mapping.maps.length;
        e.delete(i + r, s + r);
        const a = new Set();
        for (let i = 0, s = o * t.width; i < t.width; i++, s++) {
          const c = t.map[s];
          if (!a.has(c))
            if ((a.add(c), o > 0 && c == t.map[s - t.width])) {
              const t = n.nodeAt(c).attrs;
              e.setNodeMarkup(e.mapping.slice(l).map(c + r), null, {
                ...t,
                rowspan: t.rowspan - 1,
              }),
                (i += t.colspan - 1);
            } else if (o < t.height && c == t.map[s + t.width]) {
              const s = n.nodeAt(c),
                a = s.attrs,
                h = s.type.create(
                  { ...a, rowspan: s.attrs.rowspan - 1 },
                  s.content,
                ),
                p = t.positionAt(o + 1, i, n);
              e.insert(e.mapping.slice(l).map(r + p), h), (i += a.colspan - 1);
            }
        }
      }
      function L(e, t) {
        if (!y(e)) return !1;
        if (t) {
          const n = _(e),
            r = e.tr;
          if (0 == n.top && n.bottom == n.map.height) return !1;
          for (let e = n.bottom - 1; $(r, n, e), e != n.top; e--) {
            const e = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
            if (!e) throw RangeError("No table found");
            (n.table = e), (n.map = h.get(n.table));
          }
          t(r);
        }
        return !0;
      }
      function V(e) {
        const t = e.content;
        return (
          1 == t.childCount &&
          t.child(0).isTextblock &&
          0 == t.child(0).childCount
        );
      }
      function J(e, t) {
        const n = e.selection;
        if (!(n instanceof O) || n.$anchorCell.pos == n.$headCell.pos)
          return !1;
        const r = _(e),
          { map: o } = r;
        if (
          (function ({ width: e, height: t, map: n }, r) {
            let o = r.top * e + r.left,
              i = o,
              s = (r.bottom - 1) * e + r.left,
              l = o + (r.right - r.left - 1);
            for (let t = r.top; t < r.bottom; t++) {
              if (
                (r.left > 0 && n[i] == n[i - 1]) ||
                (r.right < e && n[l] == n[l + 1])
              )
                return !0;
              (i += e), (l += e);
            }
            for (let i = r.left; i < r.right; i++) {
              if (
                (r.top > 0 && n[o] == n[o - e]) ||
                (r.bottom < t && n[s] == n[s + e])
              )
                return !0;
              o++, s++;
            }
            return !1;
          })(o, r)
        )
          return !1;
        if (t) {
          const n = e.tr,
            i = {};
          let l,
            a,
            c = s.FK.empty;
          for (let e = r.top; e < r.bottom; e++)
            for (let t = r.left; t < r.right; t++) {
              const s = o.map[e * o.width + t],
                h = r.table.nodeAt(s);
              if (!i[s] && h)
                if (((i[s] = !0), null == l)) (l = s), (a = h);
                else {
                  V(h) || (c = c.append(h.content));
                  const e = n.mapping.map(s + r.tableStart);
                  n.delete(e, e + h.nodeSize);
                }
            }
          if (null == l || null == a) return !0;
          if (
            (n.setNodeMarkup(l + r.tableStart, null, {
              ...C(
                a.attrs,
                a.attrs.colspan,
                r.right - r.left - a.attrs.colspan,
              ),
              rowspan: r.bottom - r.top,
            }),
            c.size)
          ) {
            const e = l + 1 + a.content.size,
              t = V(a) ? l + 1 : e;
            n.replaceWith(t + r.tableStart, e + r.tableStart, c);
          }
          n.setSelection(new O(n.doc.resolve(l + r.tableStart))), t(n);
        }
        return !0;
      }
      function H(e, t) {
        const n = m(e.schema);
        return ((r = ({ node: e }) => n[e.type.spec.tableRole]),
        (e, t) => {
          var n;
          const o = e.selection;
          let i, s;
          if (o instanceof O) {
            if (o.$anchorCell.pos != o.$headCell.pos) return !1;
            (i = o.$anchorCell.nodeAfter), (s = o.$anchorCell.pos);
          } else {
            if (
              ((i = (function (e) {
                for (let t = e.depth; t > 0; t--) {
                  const n = e.node(t).type.spec.tableRole;
                  if ("cell" === n || "header_cell" === n) return e.node(t);
                }
                return null;
              })(o.$from)),
              !i)
            )
              return !1;
            s = null == (n = b(o.$from)) ? void 0 : n.pos;
          }
          if (null == i || null == s) return !1;
          if (1 == i.attrs.colspan && 1 == i.attrs.rowspan) return !1;
          if (t) {
            let n = i.attrs;
            const l = [],
              a = n.colwidth;
            n.rowspan > 1 && (n = { ...n, rowspan: 1 }),
              n.colspan > 1 && (n = { ...n, colspan: 1 });
            const c = _(e),
              h = e.tr;
            for (let e = 0; e < c.right - c.left; e++)
              l.push(a ? { ...n, colwidth: a && a[e] ? [a[e]] : null } : n);
            let p;
            for (let e = c.top; e < c.bottom; e++) {
              let t = c.map.positionAt(e, c.left, c.table);
              e == c.top && (t += i.nodeSize);
              for (let n = c.left, o = 0; n < c.right; n++, o++)
                (n == c.left && e == c.top) ||
                  h.insert(
                    (p = h.mapping.map(t + c.tableStart, 1)),
                    r({ node: i, row: e, col: n }).createAndFill(l[o]),
                  );
            }
            h.setNodeMarkup(s, r({ node: i, row: c.top, col: c.left }), l[0]),
              o instanceof O &&
                h.setSelection(
                  new O(
                    h.doc.resolve(o.$anchorCell.pos),
                    p ? h.doc.resolve(p) : void 0,
                  ),
                ),
              t(h);
          }
          return !0;
        })(e, t);
        var r;
      }
      function K(e, t, n) {
        const r = t.map.cellsInRect({
          left: 0,
          top: 0,
          right: "row" == e ? t.map.width : 1,
          bottom: "column" == e ? t.map.height : 1,
        });
        for (let e = 0; e < r.length; e++) {
          const o = t.table.nodeAt(r[e]);
          if (o && o.type !== n.header_cell) return !1;
        }
        return !0;
      }
      function W(e, t) {
        return (t = t || { useDeprecatedLogic: !1 }).useDeprecatedLogic
          ? (function (e) {
              return function (t, n) {
                if (!y(t)) return !1;
                if (n) {
                  const r = m(t.schema),
                    o = _(t),
                    i = t.tr,
                    s = o.map.cellsInRect(
                      "column" == e
                        ? {
                            left: o.left,
                            top: 0,
                            right: o.right,
                            bottom: o.map.height,
                          }
                        : "row" == e
                          ? {
                              left: 0,
                              top: o.top,
                              right: o.map.width,
                              bottom: o.bottom,
                            }
                          : o,
                    ),
                    l = s.map((e) => o.table.nodeAt(e));
                  for (let e = 0; e < s.length; e++)
                    l[e].type == r.header_cell &&
                      i.setNodeMarkup(o.tableStart + s[e], r.cell, l[e].attrs);
                  if (0 == i.steps.length)
                    for (let e = 0; e < s.length; e++)
                      i.setNodeMarkup(
                        o.tableStart + s[e],
                        r.header_cell,
                        l[e].attrs,
                      );
                  n(i);
                }
                return !0;
              };
            })(e)
          : function (t, n) {
              if (!y(t)) return !1;
              if (n) {
                const r = m(t.schema),
                  o = _(t),
                  i = t.tr,
                  s = K("row", o, r),
                  l = K("column", o, r),
                  a = ("column" === e ? s : "row" === e && l) ? 1 : 0,
                  c =
                    "column" == e
                      ? { left: 0, top: a, right: 1, bottom: o.map.height }
                      : "row" == e
                        ? { left: a, top: 0, right: o.map.width, bottom: 1 }
                        : o,
                  h =
                    "column" == e
                      ? l
                        ? r.cell
                        : r.header_cell
                      : "row" == e
                        ? s
                          ? r.cell
                          : r.header_cell
                        : r.cell;
                o.map.cellsInRect(c).forEach((e) => {
                  const t = e + o.tableStart,
                    n = i.doc.nodeAt(t);
                  n && i.setNodeMarkup(t, h, n.attrs);
                }),
                  n(i);
              }
              return !0;
            };
      }
      var U = W("row", { useDeprecatedLogic: !0 }),
        q = W("column", { useDeprecatedLogic: !0 }),
        G = W("cell", { useDeprecatedLogic: !0 });
      function X(e, t) {
        const n = e.selection;
        if (!(n instanceof O)) return !1;
        if (t) {
          const r = e.tr,
            o = m(e.schema).cell.createAndFill().content;
          n.forEachCell((e, t) => {
            e.content.eq(o) ||
              r.replace(
                r.mapping.map(t + 1),
                r.mapping.map(t + e.nodeSize - 1),
                new s.Ji(o, 0, 0),
              );
          }),
            r.docChanged && t(r);
        }
        return !0;
      }
      function Y(e) {
        if (!e.size) return null;
        let { content: t, openStart: n, openEnd: r } = e;
        for (
          ;
          1 == t.childCount &&
          ((n > 0 && r > 0) || "table" == t.child(0).type.spec.tableRole);
        )
          n--, r--, (t = t.child(0).content);
        const o = t.child(0),
          i = o.type.spec.tableRole,
          l = o.type.schema,
          a = [];
        if ("row" == i)
          for (let e = 0; e < t.childCount; e++) {
            let o = t.child(e).content;
            const i = e ? 0 : Math.max(0, n - 1),
              c = e < t.childCount - 1 ? 0 : Math.max(0, r - 1);
            (i || c) && (o = Z(m(l).row, new s.Ji(o, i, c)).content), a.push(o);
          }
        else {
          if ("cell" != i && "header_cell" != i) return null;
          a.push(n || r ? Z(m(l).row, new s.Ji(t, n, r)).content : t);
        }
        return (function (e, t) {
          const n = [];
          for (let e = 0; e < t.length; e++) {
            const r = t[e];
            for (let t = r.childCount - 1; t >= 0; t--) {
              const { rowspan: o, colspan: i } = r.child(t).attrs;
              for (let t = e; t < e + o; t++) n[t] = (n[t] || 0) + i;
            }
          }
          let r = 0;
          for (let e = 0; e < n.length; e++) r = Math.max(r, n[e]);
          for (let o = 0; o < n.length; o++)
            if ((o >= t.length && t.push(s.FK.empty), n[o] < r)) {
              const i = m(e).cell.createAndFill(),
                l = [];
              for (let e = n[o]; e < r; e++) l.push(i);
              t[o] = t[o].append(s.FK.from(l));
            }
          return { height: t.length, width: r, rows: t };
        })(l, a);
      }
      function Z(e, t) {
        const n = e.createAndFill();
        return new c.dL(n).replace(0, n.content.size, t).doc;
      }
      function Q(e, t, n, r, o, i, s, l) {
        if (0 == s || s == t.height) return !1;
        let a = !1;
        for (let c = o; c < i; c++) {
          const o = s * t.width + c,
            i = t.map[o];
          if (t.map[o - t.width] == i) {
            a = !0;
            const o = n.nodeAt(i),
              { top: h, left: p } = t.findCell(i);
            e.setNodeMarkup(e.mapping.slice(l).map(i + r), null, {
              ...o.attrs,
              rowspan: s - h,
            }),
              e.insert(
                e.mapping.slice(l).map(t.positionAt(s, p, n)),
                o.type.createAndFill({
                  ...o.attrs,
                  rowspan: h + o.attrs.rowspan - s,
                }),
              ),
              (c += o.attrs.colspan - 1);
          }
        }
        return a;
      }
      function ee(e, t, n, r, o, i, s, l) {
        if (0 == s || s == t.width) return !1;
        let a = !1;
        for (let c = o; c < i; c++) {
          const o = c * t.width + s,
            i = t.map[o];
          if (t.map[o - 1] == i) {
            a = !0;
            const o = n.nodeAt(i),
              h = t.colCount(i),
              p = e.mapping.slice(l).map(i + r);
            e.setNodeMarkup(
              p,
              null,
              k(o.attrs, s - h, o.attrs.colspan - (s - h)),
            ),
              e.insert(
                p + o.nodeSize,
                o.type.createAndFill(k(o.attrs, 0, s - h)),
              ),
              (c += o.attrs.rowspan - 1);
          }
        }
        return a;
      }
      function te(e, t, n, r, o) {
        let i = n ? e.doc.nodeAt(n - 1) : e.doc;
        if (!i) throw new Error("No table found");
        let l = h.get(i);
        const { top: a, left: c } = r,
          p = c + o.width,
          u = a + o.height,
          d = e.tr;
        let f = 0;
        function g() {
          if (((i = n ? d.doc.nodeAt(n - 1) : d.doc), !i))
            throw new Error("No table found");
          (l = h.get(i)), (f = d.mapping.maps.length);
        }
        (function (e, t, n, r, o, i, l) {
          const a = m(e.doc.type.schema);
          let c, h;
          if (o > t.width)
            for (let i = 0, s = 0; i < t.height; i++) {
              const p = n.child(i);
              s += p.nodeSize;
              const u = [];
              let d;
              d =
                null == p.lastChild || p.lastChild.type == a.cell
                  ? c || (c = a.cell.createAndFill())
                  : h || (h = a.header_cell.createAndFill());
              for (let e = t.width; e < o; e++) u.push(d);
              e.insert(e.mapping.slice(l).map(s - 1 + r), u);
            }
          if (i > t.height) {
            const p = [];
            for (
              let e = 0, r = (t.height - 1) * t.width;
              e < Math.max(t.width, o);
              e++
            ) {
              const o =
                !(e >= t.width) && n.nodeAt(t.map[r + e]).type == a.header_cell;
              p.push(
                o
                  ? h || (h = a.header_cell.createAndFill())
                  : c || (c = a.cell.createAndFill()),
              );
            }
            const u = a.row.create(null, s.FK.from(p)),
              d = [];
            for (let e = t.height; e < i; e++) d.push(u);
            e.insert(e.mapping.slice(l).map(r + n.nodeSize - 2), d);
          }
          return !(!c && !h);
        })(d, l, i, n, p, u, f) && g(),
          Q(d, l, i, n, c, p, a, f) && g(),
          Q(d, l, i, n, c, p, u, f) && g(),
          ee(d, l, i, n, a, u, c, f) && g(),
          ee(d, l, i, n, a, u, p, f) && g();
        for (let e = a; e < u; e++) {
          const t = l.positionAt(e, c, i),
            r = l.positionAt(e, p, i);
          d.replace(
            d.mapping.slice(f).map(t + n),
            d.mapping.slice(f).map(r + n),
            new s.Ji(o.rows[e - a], 0, 0),
          );
        }
        g(),
          d.setSelection(
            new O(
              d.doc.resolve(n + l.positionAt(a, c, i)),
              d.doc.resolve(n + l.positionAt(u - 1, p - 1, i)),
            ),
          ),
          t(d);
      }
      var ne = (0, a.K)({
        ArrowLeft: oe("horiz", -1),
        ArrowRight: oe("horiz", 1),
        ArrowUp: oe("vert", -1),
        ArrowDown: oe("vert", 1),
        "Shift-ArrowLeft": ie("horiz", -1),
        "Shift-ArrowRight": ie("horiz", 1),
        "Shift-ArrowUp": ie("vert", -1),
        "Shift-ArrowDown": ie("vert", 1),
        Backspace: X,
        "Mod-Backspace": X,
        Delete: X,
        "Mod-Delete": X,
      });
      function re(e, t, n) {
        return (
          !n.eq(e.selection) &&
          (t && t(e.tr.setSelection(n).scrollIntoView()), !0)
        );
      }
      function oe(e, t) {
        return (n, r, o) => {
          if (!o) return !1;
          const s = n.selection;
          if (s instanceof O) return re(n, r, i.LN.near(s.$headCell, t));
          if ("horiz" != e && !s.empty) return !1;
          const l = ce(o, e, t);
          if (null == l) return !1;
          if ("horiz" == e)
            return re(n, r, i.LN.near(n.doc.resolve(s.head + t), t));
          {
            const o = n.doc.resolve(l),
              s = S(o, e, t);
            let a;
            return (
              (a = s
                ? i.LN.near(s, 1)
                : t < 0
                  ? i.LN.near(n.doc.resolve(o.before(-1)), -1)
                  : i.LN.near(n.doc.resolve(o.after(-1)), 1)),
              re(n, r, a)
            );
          }
        };
      }
      function ie(e, t) {
        return (n, r, o) => {
          if (!o) return !1;
          const i = n.selection;
          let s;
          if (i instanceof O) s = i;
          else {
            const r = ce(o, e, t);
            if (null == r) return !1;
            s = new O(n.doc.resolve(r));
          }
          const l = S(s.$headCell, e, t);
          return !!l && re(n, r, new O(s.$anchorCell, l));
        };
      }
      function se(e, t) {
        const n = b(e.state.doc.resolve(t));
        return !!n && (e.dispatch(e.state.tr.setSelection(new O(n))), !0);
      }
      function le(e, t, n) {
        if (!y(e.state)) return !1;
        let r = Y(n);
        const o = e.state.selection;
        if (o instanceof O) {
          r ||
            (r = {
              width: 1,
              height: 1,
              rows: [s.FK.from(Z(m(e.state.schema).cell, n))],
            });
          const t = o.$anchorCell.node(-1),
            i = o.$anchorCell.start(-1),
            l = h
              .get(t)
              .rectBetween(o.$anchorCell.pos - i, o.$headCell.pos - i);
          return (
            (r = (function ({ width: e, height: t, rows: n }, r, o) {
              if (e != r) {
                const t = [],
                  o = [];
                for (let e = 0; e < n.length; e++) {
                  const i = n[e],
                    l = [];
                  for (let n = t[e] || 0, o = 0; n < r; o++) {
                    let s = i.child(o % i.childCount);
                    n + s.attrs.colspan > r &&
                      (s = s.type.createChecked(
                        k(s.attrs, s.attrs.colspan, n + s.attrs.colspan - r),
                        s.content,
                      )),
                      l.push(s),
                      (n += s.attrs.colspan);
                    for (let n = 1; n < s.attrs.rowspan; n++)
                      t[e + n] = (t[e + n] || 0) + s.attrs.colspan;
                  }
                  o.push(s.FK.from(l));
                }
                (n = o), (e = r);
              }
              if (t != o) {
                const e = [];
                for (let r = 0, i = 0; r < o; r++, i++) {
                  const l = [],
                    a = n[i % t];
                  for (let e = 0; e < a.childCount; e++) {
                    let t = a.child(e);
                    r + t.attrs.rowspan > o &&
                      (t = t.type.create(
                        {
                          ...t.attrs,
                          rowspan: Math.max(1, o - t.attrs.rowspan),
                        },
                        t.content,
                      )),
                      l.push(t);
                  }
                  e.push(s.FK.from(l));
                }
                (n = e), (t = o);
              }
              return { width: e, height: t, rows: n };
            })(r, l.right - l.left, l.bottom - l.top)),
            te(e.state, e.dispatch, i, l, r),
            !0
          );
        }
        if (r) {
          const t = v(e.state),
            n = t.start(-1);
          return (
            te(
              e.state,
              e.dispatch,
              n,
              h.get(t.node(-1)).findCell(t.pos - n),
              r,
            ),
            !0
          );
        }
        return !1;
      }
      function ae(e, t) {
        var n;
        if (t.ctrlKey || t.metaKey) return;
        const r = he(e, t.target);
        let o;
        if (t.shiftKey && e.state.selection instanceof O)
          i(e.state.selection.$anchorCell, t), t.preventDefault();
        else if (
          t.shiftKey &&
          r &&
          null != (o = b(e.state.selection.$anchor)) &&
          (null == (n = pe(e, t)) ? void 0 : n.pos) != o.pos
        )
          i(o, t), t.preventDefault();
        else if (!r) return;
        function i(t, n) {
          let r = pe(e, n);
          const o = null == g.getState(e.state);
          if (!r || !x(t, r)) {
            if (!o) return;
            r = t;
          }
          const i = new O(t, r);
          if (o || !e.state.selection.eq(i)) {
            const n = e.state.tr.setSelection(i);
            o && n.setMeta(g, t.pos), e.dispatch(n);
          }
        }
        function s() {
          e.root.removeEventListener("mouseup", s),
            e.root.removeEventListener("dragstart", s),
            e.root.removeEventListener("mousemove", l),
            null != g.getState(e.state) &&
              e.dispatch(e.state.tr.setMeta(g, -1));
        }
        function l(n) {
          const o = n,
            l = g.getState(e.state);
          let a;
          if (null != l) a = e.state.doc.resolve(l);
          else if (he(e, o.target) != r && ((a = pe(e, t)), !a)) return s();
          a && i(a, o);
        }
        e.root.addEventListener("mouseup", s),
          e.root.addEventListener("dragstart", s),
          e.root.addEventListener("mousemove", l);
      }
      function ce(e, t, n) {
        if (!(e.state.selection instanceof i.U3)) return null;
        const { $head: r } = e.state.selection;
        for (let o = r.depth - 1; o >= 0; o--) {
          const i = r.node(o);
          if (
            (n < 0 ? r.index(o) : r.indexAfter(o)) != (n < 0 ? 0 : i.childCount)
          )
            return null;
          if (
            "cell" == i.type.spec.tableRole ||
            "header_cell" == i.type.spec.tableRole
          ) {
            const i = r.before(o),
              s =
                "vert" == t
                  ? n > 0
                    ? "down"
                    : "up"
                  : n > 0
                    ? "right"
                    : "left";
            return e.endOfTextblock(s) ? i : null;
          }
        }
        return null;
      }
      function he(e, t) {
        for (; t && t != e.dom; t = t.parentNode)
          if ("TD" == t.nodeName || "TH" == t.nodeName) return t;
        return null;
      }
      function pe(e, t) {
        const n = e.posAtCoords({ left: t.clientX, top: t.clientY });
        return n && n ? b(e.state.doc.resolve(n.pos)) : null;
      }
      var ue = class {
        constructor(e, t) {
          (this.node = e),
            (this.defaultCellMinWidth = t),
            (this.dom = document.createElement("div")),
            (this.dom.className = "tableWrapper"),
            (this.table = this.dom.appendChild(
              document.createElement("table"),
            )),
            this.table.style.setProperty("--default-cell-min-width", `${t}px`),
            (this.colgroup = this.table.appendChild(
              document.createElement("colgroup"),
            )),
            de(e, this.colgroup, this.table, t),
            (this.contentDOM = this.table.appendChild(
              document.createElement("tbody"),
            ));
        }
        update(e) {
          return (
            e.type == this.node.type &&
            ((this.node = e),
            de(e, this.colgroup, this.table, this.defaultCellMinWidth),
            !0)
          );
        }
        ignoreMutation(e) {
          return (
            "attributes" == e.type &&
            (e.target == this.table || this.colgroup.contains(e.target))
          );
        }
      };
      function de(e, t, n, r, o, i) {
        var s;
        let l = 0,
          a = !0,
          c = t.firstChild;
        const h = e.firstChild;
        if (h) {
          for (let e = 0, n = 0; e < h.childCount; e++) {
            const { colspan: s, colwidth: p } = h.child(e).attrs;
            for (let e = 0; e < s; e++, n++) {
              const s = o == n ? i : p && p[e],
                h = s ? s + "px" : "";
              if (((l += s || r), s || (a = !1), c))
                c.style.width != h && (c.style.width = h), (c = c.nextSibling);
              else {
                const e = document.createElement("col");
                (e.style.width = h), t.appendChild(e);
              }
            }
          }
          for (; c; ) {
            const e = c.nextSibling;
            null == (s = c.parentNode) || s.removeChild(c), (c = e);
          }
          a
            ? ((n.style.width = l + "px"), (n.style.minWidth = ""))
            : ((n.style.width = ""), (n.style.minWidth = l + "px"));
        }
      }
      var fe = new i.hs("tableColumnResizing");
      function me({
        handleWidth: e = 5,
        cellMinWidth: t = 25,
        defaultCellMinWidth: n = 100,
        View: r = ue,
        lastColumnResizable: o = !0,
      } = {}) {
        const s = new i.k_({
          key: fe,
          state: {
            init(e, t) {
              var o, i;
              const l =
                  null == (i = null == (o = s.spec) ? void 0 : o.props)
                    ? void 0
                    : i.nodeViews,
                a = m(t.schema).table.name;
              return (
                r && l && (l[a] = (e, t) => new r(e, n, t)), new ge(-1, !1)
              );
            },
            apply: (e, t) => t.apply(e),
          },
          props: {
            attributes: (e) => {
              const t = fe.getState(e);
              return t && t.activeHandle > -1 ? { class: "resize-cursor" } : {};
            },
            handleDOMEvents: {
              mousemove: (t, n) => {
                !(function (e, t, n, r) {
                  const o = fe.getState(e.state);
                  if (!o) return;
                  if (!o.dragging) {
                    const i = (function (e) {
                      for (; e && "TD" != e.nodeName && "TH" != e.nodeName; )
                        e =
                          e.classList && e.classList.contains("ProseMirror")
                            ? null
                            : e.parentNode;
                      return e;
                    })(t.target);
                    let s = -1;
                    if (i) {
                      const { left: r, right: o } = i.getBoundingClientRect();
                      t.clientX - r <= n
                        ? (s = be(e, t, "left", n))
                        : o - t.clientX <= n && (s = be(e, t, "right", n));
                    }
                    if (s != o.activeHandle) {
                      if (!r && -1 !== s) {
                        const t = e.state.doc.resolve(s),
                          n = t.node(-1),
                          r = h.get(n),
                          o = t.start(-1);
                        if (
                          r.colCount(t.pos - o) +
                            t.nodeAfter.attrs.colspan -
                            1 ==
                          r.width - 1
                        )
                          return;
                      }
                      ve(e, s);
                    }
                  }
                })(t, n, e, o);
              },
              mouseleave: (e) => {
                !(function (e) {
                  const t = fe.getState(e.state);
                  t && t.activeHandle > -1 && !t.dragging && ve(e, -1);
                })(e);
              },
              mousedown: (e, r) => {
                !(function (e, t, n, r) {
                  var o;
                  const i =
                      null != (o = e.dom.ownerDocument.defaultView)
                        ? o
                        : window,
                    s = fe.getState(e.state);
                  if (!s || -1 == s.activeHandle || s.dragging) return !1;
                  const l = e.state.doc.nodeAt(s.activeHandle),
                    a = (function (e, t, { colspan: n, colwidth: r }) {
                      const o = r && r[r.length - 1];
                      if (o) return o;
                      const i = e.domAtPos(t);
                      let s = i.node.childNodes[i.offset].offsetWidth,
                        l = n;
                      if (r)
                        for (let e = 0; e < n; e++) r[e] && ((s -= r[e]), l--);
                      return s / l;
                    })(e, s.activeHandle, l.attrs);
                  function c(t) {
                    i.removeEventListener("mouseup", c),
                      i.removeEventListener("mousemove", p);
                    const r = fe.getState(e.state);
                    (null == r ? void 0 : r.dragging) &&
                      (!(function (e, t, n) {
                        const r = e.state.doc.resolve(t),
                          o = r.node(-1),
                          i = h.get(o),
                          s = r.start(-1),
                          l =
                            i.colCount(r.pos - s) +
                            r.nodeAfter.attrs.colspan -
                            1,
                          a = e.state.tr;
                        for (let e = 0; e < i.height; e++) {
                          const t = e * i.width + l;
                          if (e && i.map[t] == i.map[t - i.width]) continue;
                          const r = i.map[t],
                            c = o.nodeAt(r).attrs,
                            h = 1 == c.colspan ? 0 : l - i.colCount(r);
                          if (c.colwidth && c.colwidth[h] == n) continue;
                          const p = c.colwidth
                            ? c.colwidth.slice()
                            : xe(c.colspan);
                          (p[h] = n),
                            a.setNodeMarkup(s + r, null, { ...c, colwidth: p });
                        }
                        a.docChanged && e.dispatch(a);
                      })(e, r.activeHandle, ye(r.dragging, t, n)),
                      e.dispatch(
                        e.state.tr.setMeta(fe, { setDragging: null }),
                      ));
                  }
                  function p(t) {
                    if (!t.which) return c(t);
                    const o = fe.getState(e.state);
                    if (o && o.dragging) {
                      const i = ye(o.dragging, t, n);
                      we(e, o.activeHandle, i, r);
                    }
                  }
                  e.dispatch(
                    e.state.tr.setMeta(fe, {
                      setDragging: { startX: t.clientX, startWidth: a },
                    }),
                  ),
                    we(e, s.activeHandle, a, r),
                    i.addEventListener("mouseup", c),
                    i.addEventListener("mousemove", p),
                    t.preventDefault();
                })(e, r, t, n);
              },
            },
            decorations: (e) => {
              const t = fe.getState(e);
              if (t && t.activeHandle > -1)
                return (function (e, t) {
                  var n;
                  const r = [],
                    o = e.doc.resolve(t),
                    i = o.node(-1);
                  if (!i) return l.zF.empty;
                  const s = h.get(i),
                    a = o.start(-1),
                    c = s.colCount(o.pos - a) + o.nodeAfter.attrs.colspan - 1;
                  for (let t = 0; t < s.height; t++) {
                    const o = c + t * s.width;
                    if (
                      !(
                        (c != s.width - 1 && s.map[o] == s.map[o + 1]) ||
                        (0 != t && s.map[o] == s.map[o - s.width])
                      )
                    ) {
                      const t = s.map[o],
                        c = a + t + i.nodeAt(t).nodeSize - 1,
                        h = document.createElement("div");
                      (h.className = "column-resize-handle"),
                        (null == (n = fe.getState(e)) ? void 0 : n.dragging) &&
                          r.push(
                            l.NZ.node(a + t, a + t + i.nodeAt(t).nodeSize, {
                              class: "column-resize-dragging",
                            }),
                          ),
                        r.push(l.NZ.widget(c, h));
                    }
                  }
                  return l.zF.create(e.doc, r);
                })(e, t.activeHandle);
            },
            nodeViews: {},
          },
        });
        return s;
      }
      var ge = class e {
        constructor(e, t) {
          (this.activeHandle = e), (this.dragging = t);
        }
        apply(t) {
          const n = this,
            r = t.getMeta(fe);
          if (r && null != r.setHandle) return new e(r.setHandle, !1);
          if (r && void 0 !== r.setDragging)
            return new e(n.activeHandle, r.setDragging);
          if (n.activeHandle > -1 && t.docChanged) {
            let r = t.mapping.map(n.activeHandle, -1);
            return w(t.doc.resolve(r)) || (r = -1), new e(r, n.dragging);
          }
          return n;
        }
      };
      function be(e, t, n, r) {
        const o = "right" == n ? -r : r,
          i = e.posAtCoords({ left: t.clientX + o, top: t.clientY });
        if (!i) return -1;
        const { pos: s } = i,
          l = b(e.state.doc.resolve(s));
        if (!l) return -1;
        if ("right" == n) return l.pos;
        const a = h.get(l.node(-1)),
          c = l.start(-1),
          p = a.map.indexOf(l.pos - c);
        return p % a.width == 0 ? -1 : c + a.map[p - 1];
      }
      function ye(e, t, n) {
        const r = t.clientX - e.startX;
        return Math.max(n, e.startWidth + r);
      }
      function ve(e, t) {
        e.dispatch(e.state.tr.setMeta(fe, { setHandle: t }));
      }
      function we(e, t, n, r) {
        const o = e.state.doc.resolve(t),
          i = o.node(-1),
          s = o.start(-1),
          l = h.get(i).colCount(o.pos - s) + o.nodeAfter.attrs.colspan - 1;
        let a = e.domAtPos(o.start(-1)).node;
        for (; a && "TABLE" != a.nodeName; ) a = a.parentNode;
        a && de(i, a.firstChild, a, r, l, n);
      }
      function xe(e) {
        return Array(e).fill(0);
      }
      function Se({ allowTableNodeSelection: e = !1 } = {}) {
        return new i.k_({
          key: g,
          state: {
            init: () => null,
            apply(e, t) {
              const n = e.getMeta(g);
              if (null != n) return -1 == n ? null : n;
              if (null == t || !e.docChanged) return t;
              const { deleted: r, pos: o } = e.mapping.mapResult(t);
              return r ? null : o;
            },
          },
          props: {
            decorations: E,
            handleDOMEvents: { mousedown: ae },
            createSelectionBetween: (e) =>
              null != g.getState(e.state) ? e.state.selection : null,
            handleTripleClick: se,
            handleKeyDown: ne,
            handlePaste: le,
          },
          appendTransaction: (t, n, r) =>
            (function (e, t, n) {
              const r = (t || e).selection,
                o = (t || e).doc;
              let s, l;
              if (r instanceof i.nh && (l = r.node.type.spec.tableRole)) {
                if ("cell" == l || "header_cell" == l) s = O.create(o, r.from);
                else if ("row" == l) {
                  const e = o.resolve(r.from + 1);
                  s = O.rowSelection(e, e);
                } else if (!n) {
                  const e = h.get(r.node),
                    t = r.from + 1,
                    n = t + e.map[e.width * e.height - 1];
                  s = O.create(o, t + 1, n);
                }
              } else
                r instanceof i.U3 &&
                (function ({ $from: e, $to: t }) {
                  if (e.pos == t.pos || e.pos < t.pos - 6) return !1;
                  let n = e.pos,
                    r = t.pos,
                    o = e.depth;
                  for (; o >= 0 && !(e.after(o + 1) < e.end(o)); o--, n++);
                  for (
                    let e = t.depth;
                    e >= 0 && !(t.before(e + 1) > t.start(e));
                    e--, r--
                  );
                  return (
                    n == r && /row|table/.test(e.node(o).type.spec.tableRole)
                  );
                })(r)
                  ? (s = i.U3.create(o, r.from))
                  : r instanceof i.U3 &&
                    (function ({ $from: e, $to: t }) {
                      let n, r;
                      for (let t = e.depth; t > 0; t--) {
                        const r = e.node(t);
                        if (
                          "cell" === r.type.spec.tableRole ||
                          "header_cell" === r.type.spec.tableRole
                        ) {
                          n = r;
                          break;
                        }
                      }
                      for (let e = t.depth; e > 0; e--) {
                        const n = t.node(e);
                        if (
                          "cell" === n.type.spec.tableRole ||
                          "header_cell" === n.type.spec.tableRole
                        ) {
                          r = n;
                          break;
                        }
                      }
                      return n !== r && 0 === t.parentOffset;
                    })(r) &&
                    (s = i.U3.create(o, r.$from.start(), r.$from.end()));
              return s && (t || (t = e.tr)).setSelection(s), t;
            })(r, T(r, n), e),
        });
      }
    },
    63734: (e, t, n) => {
      "use strict";
      n.d(t, {
        $L: () => N,
        Ln: () => b,
        Um: () => A,
        Wg: () => y,
        X9: () => a,
        dL: () => V,
        jP: () => S,
        n9: () => M,
        oM: () => k,
        zy: () => O,
      });
      var r = n(57053);
      const o = Math.pow(2, 16);
      function i(e) {
        return 65535 & e;
      }
      class s {
        constructor(e, t, n) {
          (this.pos = e), (this.delInfo = t), (this.recover = n);
        }
        get deleted() {
          return (8 & this.delInfo) > 0;
        }
        get deletedBefore() {
          return (5 & this.delInfo) > 0;
        }
        get deletedAfter() {
          return (6 & this.delInfo) > 0;
        }
        get deletedAcross() {
          return (4 & this.delInfo) > 0;
        }
      }
      class l {
        constructor(e, t = !1) {
          if (((this.ranges = e), (this.inverted = t), !e.length && l.empty))
            return l.empty;
        }
        recover(e) {
          let t = 0,
            n = i(e);
          if (!this.inverted)
            for (let e = 0; e < n; e++)
              t += this.ranges[3 * e + 2] - this.ranges[3 * e + 1];
          return (
            this.ranges[3 * n] +
            t +
            (function (e) {
              return (e - (65535 & e)) / o;
            })(e)
          );
        }
        mapResult(e, t = 1) {
          return this._map(e, t, !1);
        }
        map(e, t = 1) {
          return this._map(e, t, !0);
        }
        _map(e, t, n) {
          let r = 0,
            i = this.inverted ? 2 : 1,
            l = this.inverted ? 1 : 2;
          for (let a = 0; a < this.ranges.length; a += 3) {
            let c = this.ranges[a] - (this.inverted ? r : 0);
            if (c > e) break;
            let h = this.ranges[a + i],
              p = this.ranges[a + l],
              u = c + h;
            if (e <= u) {
              let i =
                c + r + ((h ? (e == c ? -1 : e == u ? 1 : t) : t) < 0 ? 0 : p);
              if (n) return i;
              let l = e == (t < 0 ? c : u) ? null : a / 3 + (e - c) * o,
                d = e == c ? 2 : e == u ? 1 : 4;
              return (t < 0 ? e != c : e != u) && (d |= 8), new s(i, d, l);
            }
            r += p - h;
          }
          return n ? e + r : new s(e + r, 0, null);
        }
        touches(e, t) {
          let n = 0,
            r = i(t),
            o = this.inverted ? 2 : 1,
            s = this.inverted ? 1 : 2;
          for (let t = 0; t < this.ranges.length; t += 3) {
            let i = this.ranges[t] - (this.inverted ? n : 0);
            if (i > e) break;
            let l = this.ranges[t + o];
            if (e <= i + l && t == 3 * r) return !0;
            n += this.ranges[t + s] - l;
          }
          return !1;
        }
        forEach(e) {
          let t = this.inverted ? 2 : 1,
            n = this.inverted ? 1 : 2;
          for (let r = 0, o = 0; r < this.ranges.length; r += 3) {
            let i = this.ranges[r],
              s = i - (this.inverted ? o : 0),
              l = i + (this.inverted ? 0 : o),
              a = this.ranges[r + t],
              c = this.ranges[r + n];
            e(s, s + a, l, l + c), (o += c - a);
          }
        }
        invert() {
          return new l(this.ranges, !this.inverted);
        }
        toString() {
          return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
        }
        static offset(e) {
          return 0 == e ? l.empty : new l(e < 0 ? [0, -e, 0] : [0, 0, e]);
        }
      }
      l.empty = new l([]);
      class a {
        constructor(e = [], t, n = 0, r = e.length) {
          (this.maps = e), (this.mirror = t), (this.from = n), (this.to = r);
        }
        slice(e = 0, t = this.maps.length) {
          return new a(this.maps, this.mirror, e, t);
        }
        copy() {
          return new a(
            this.maps.slice(),
            this.mirror && this.mirror.slice(),
            this.from,
            this.to,
          );
        }
        appendMap(e, t) {
          (this.to = this.maps.push(e)),
            null != t && this.setMirror(this.maps.length - 1, t);
        }
        appendMapping(e) {
          for (let t = 0, n = this.maps.length; t < e.maps.length; t++) {
            let r = e.getMirror(t);
            this.appendMap(e.maps[t], null != r && r < t ? n + r : void 0);
          }
        }
        getMirror(e) {
          if (this.mirror)
            for (let t = 0; t < this.mirror.length; t++)
              if (this.mirror[t] == e) return this.mirror[t + (t % 2 ? -1 : 1)];
        }
        setMirror(e, t) {
          this.mirror || (this.mirror = []), this.mirror.push(e, t);
        }
        appendMappingInverted(e) {
          for (
            let t = e.maps.length - 1, n = this.maps.length + e.maps.length;
            t >= 0;
            t--
          ) {
            let r = e.getMirror(t);
            this.appendMap(
              e.maps[t].invert(),
              null != r && r > t ? n - r - 1 : void 0,
            );
          }
        }
        invert() {
          let e = new a();
          return e.appendMappingInverted(this), e;
        }
        map(e, t = 1) {
          if (this.mirror) return this._map(e, t, !0);
          for (let n = this.from; n < this.to; n++) e = this.maps[n].map(e, t);
          return e;
        }
        mapResult(e, t = 1) {
          return this._map(e, t, !1);
        }
        _map(e, t, n) {
          let r = 0;
          for (let n = this.from; n < this.to; n++) {
            let o = this.maps[n].mapResult(e, t);
            if (null != o.recover) {
              let t = this.getMirror(n);
              if (null != t && t > n && t < this.to) {
                (n = t), (e = this.maps[t].recover(o.recover));
                continue;
              }
            }
            (r |= o.delInfo), (e = o.pos);
          }
          return n ? e : new s(e, r, null);
        }
      }
      const c = Object.create(null);
      class h {
        getMap() {
          return l.empty;
        }
        merge(e) {
          return null;
        }
        static fromJSON(e, t) {
          if (!t || !t.stepType)
            throw new RangeError("Invalid input for Step.fromJSON");
          let n = c[t.stepType];
          if (!n) throw new RangeError(`No step type ${t.stepType} defined`);
          return n.fromJSON(e, t);
        }
        static jsonID(e, t) {
          if (e in c)
            throw new RangeError("Duplicate use of step JSON ID " + e);
          return (c[e] = t), (t.prototype.jsonID = e), t;
        }
      }
      class p {
        constructor(e, t) {
          (this.doc = e), (this.failed = t);
        }
        static ok(e) {
          return new p(e, null);
        }
        static fail(e) {
          return new p(null, e);
        }
        static fromReplace(e, t, n, o) {
          try {
            return p.ok(e.replace(t, n, o));
          } catch (e) {
            if (e instanceof r.vI) return p.fail(e.message);
            throw e;
          }
        }
      }
      function u(e, t, n) {
        let o = [];
        for (let r = 0; r < e.childCount; r++) {
          let i = e.child(r);
          i.content.size && (i = i.copy(u(i.content, t, i))),
            i.isInline && (i = t(i, n, r)),
            o.push(i);
        }
        return r.FK.fromArray(o);
      }
      class d extends h {
        constructor(e, t, n) {
          super(), (this.from = e), (this.to = t), (this.mark = n);
        }
        apply(e) {
          let t = e.slice(this.from, this.to),
            n = e.resolve(this.from),
            o = n.node(n.sharedDepth(this.to)),
            i = new r.Ji(
              u(
                t.content,
                (e, t) =>
                  e.isAtom && t.type.allowsMarkType(this.mark.type)
                    ? e.mark(this.mark.addToSet(e.marks))
                    : e,
                o,
              ),
              t.openStart,
              t.openEnd,
            );
          return p.fromReplace(e, this.from, this.to, i);
        }
        invert() {
          return new f(this.from, this.to, this.mark);
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
          return (t.deleted && n.deleted) || t.pos >= n.pos
            ? null
            : new d(t.pos, n.pos, this.mark);
        }
        merge(e) {
          return e instanceof d &&
            e.mark.eq(this.mark) &&
            this.from <= e.to &&
            this.to >= e.from
            ? new d(
                Math.min(this.from, e.from),
                Math.max(this.to, e.to),
                this.mark,
              )
            : null;
        }
        toJSON() {
          return {
            stepType: "addMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to,
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.from || "number" != typeof t.to)
            throw new RangeError("Invalid input for AddMarkStep.fromJSON");
          return new d(t.from, t.to, e.markFromJSON(t.mark));
        }
      }
      h.jsonID("addMark", d);
      class f extends h {
        constructor(e, t, n) {
          super(), (this.from = e), (this.to = t), (this.mark = n);
        }
        apply(e) {
          let t = e.slice(this.from, this.to),
            n = new r.Ji(
              u(t.content, (e) => e.mark(this.mark.removeFromSet(e.marks)), e),
              t.openStart,
              t.openEnd,
            );
          return p.fromReplace(e, this.from, this.to, n);
        }
        invert() {
          return new d(this.from, this.to, this.mark);
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
          return (t.deleted && n.deleted) || t.pos >= n.pos
            ? null
            : new f(t.pos, n.pos, this.mark);
        }
        merge(e) {
          return e instanceof f &&
            e.mark.eq(this.mark) &&
            this.from <= e.to &&
            this.to >= e.from
            ? new f(
                Math.min(this.from, e.from),
                Math.max(this.to, e.to),
                this.mark,
              )
            : null;
        }
        toJSON() {
          return {
            stepType: "removeMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to,
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.from || "number" != typeof t.to)
            throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
          return new f(t.from, t.to, e.markFromJSON(t.mark));
        }
      }
      h.jsonID("removeMark", f);
      class m extends h {
        constructor(e, t) {
          super(), (this.pos = e), (this.mark = t);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return p.fail("No node at mark step's position");
          let n = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
          return p.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new r.Ji(r.FK.from(n), 0, t.isLeaf ? 0 : 1),
          );
        }
        invert(e) {
          let t = e.nodeAt(this.pos);
          if (t) {
            let e = this.mark.addToSet(t.marks);
            if (e.length == t.marks.length) {
              for (let n = 0; n < t.marks.length; n++)
                if (!t.marks[n].isInSet(e)) return new m(this.pos, t.marks[n]);
              return new m(this.pos, this.mark);
            }
          }
          return new g(this.pos, this.mark);
        }
        map(e) {
          let t = e.mapResult(this.pos, 1);
          return t.deletedAfter ? null : new m(t.pos, this.mark);
        }
        toJSON() {
          return {
            stepType: "addNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON(),
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.pos)
            throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
          return new m(t.pos, e.markFromJSON(t.mark));
        }
      }
      h.jsonID("addNodeMark", m);
      class g extends h {
        constructor(e, t) {
          super(), (this.pos = e), (this.mark = t);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return p.fail("No node at mark step's position");
          let n = t.type.create(
            t.attrs,
            null,
            this.mark.removeFromSet(t.marks),
          );
          return p.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new r.Ji(r.FK.from(n), 0, t.isLeaf ? 0 : 1),
          );
        }
        invert(e) {
          let t = e.nodeAt(this.pos);
          return t && this.mark.isInSet(t.marks)
            ? new m(this.pos, this.mark)
            : this;
        }
        map(e) {
          let t = e.mapResult(this.pos, 1);
          return t.deletedAfter ? null : new g(t.pos, this.mark);
        }
        toJSON() {
          return {
            stepType: "removeNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON(),
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.pos)
            throw new RangeError(
              "Invalid input for RemoveNodeMarkStep.fromJSON",
            );
          return new g(t.pos, e.markFromJSON(t.mark));
        }
      }
      h.jsonID("removeNodeMark", g);
      class b extends h {
        constructor(e, t, n, r = !1) {
          super(),
            (this.from = e),
            (this.to = t),
            (this.slice = n),
            (this.structure = r);
        }
        apply(e) {
          return this.structure && v(e, this.from, this.to)
            ? p.fail("Structure replace would overwrite content")
            : p.fromReplace(e, this.from, this.to, this.slice);
        }
        getMap() {
          return new l([this.from, this.to - this.from, this.slice.size]);
        }
        invert(e) {
          return new b(
            this.from,
            this.from + this.slice.size,
            e.slice(this.from, this.to),
          );
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
          return t.deletedAcross && n.deletedAcross
            ? null
            : new b(t.pos, Math.max(t.pos, n.pos), this.slice);
        }
        merge(e) {
          if (!(e instanceof b) || e.structure || this.structure) return null;
          if (
            this.from + this.slice.size != e.from ||
            this.slice.openEnd ||
            e.slice.openStart
          ) {
            if (e.to != this.from || this.slice.openStart || e.slice.openEnd)
              return null;
            {
              let t =
                this.slice.size + e.slice.size == 0
                  ? r.Ji.empty
                  : new r.Ji(
                      e.slice.content.append(this.slice.content),
                      e.slice.openStart,
                      this.slice.openEnd,
                    );
              return new b(e.from, this.to, t, this.structure);
            }
          }
          {
            let t =
              this.slice.size + e.slice.size == 0
                ? r.Ji.empty
                : new r.Ji(
                    this.slice.content.append(e.slice.content),
                    this.slice.openStart,
                    e.slice.openEnd,
                  );
            return new b(
              this.from,
              this.to + (e.to - e.from),
              t,
              this.structure,
            );
          }
        }
        toJSON() {
          let e = { stepType: "replace", from: this.from, to: this.to };
          return (
            this.slice.size && (e.slice = this.slice.toJSON()),
            this.structure && (e.structure = !0),
            e
          );
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.from || "number" != typeof t.to)
            throw new RangeError("Invalid input for ReplaceStep.fromJSON");
          return new b(t.from, t.to, r.Ji.fromJSON(e, t.slice), !!t.structure);
        }
      }
      h.jsonID("replace", b);
      class y extends h {
        constructor(e, t, n, r, o, i, s = !1) {
          super(),
            (this.from = e),
            (this.to = t),
            (this.gapFrom = n),
            (this.gapTo = r),
            (this.slice = o),
            (this.insert = i),
            (this.structure = s);
        }
        apply(e) {
          if (
            this.structure &&
            (v(e, this.from, this.gapFrom) || v(e, this.gapTo, this.to))
          )
            return p.fail("Structure gap-replace would overwrite content");
          let t = e.slice(this.gapFrom, this.gapTo);
          if (t.openStart || t.openEnd)
            return p.fail("Gap is not a flat range");
          let n = this.slice.insertAt(this.insert, t.content);
          return n
            ? p.fromReplace(e, this.from, this.to, n)
            : p.fail("Content does not fit in gap");
        }
        getMap() {
          return new l([
            this.from,
            this.gapFrom - this.from,
            this.insert,
            this.gapTo,
            this.to - this.gapTo,
            this.slice.size - this.insert,
          ]);
        }
        invert(e) {
          let t = this.gapTo - this.gapFrom;
          return new y(
            this.from,
            this.from + this.slice.size + t,
            this.from + this.insert,
            this.from + this.insert + t,
            e
              .slice(this.from, this.to)
              .removeBetween(this.gapFrom - this.from, this.gapTo - this.from),
            this.gapFrom - this.from,
            this.structure,
          );
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1),
            r = this.from == this.gapFrom ? t.pos : e.map(this.gapFrom, -1),
            o = this.to == this.gapTo ? n.pos : e.map(this.gapTo, 1);
          return (t.deletedAcross && n.deletedAcross) || r < t.pos || o > n.pos
            ? null
            : new y(
                t.pos,
                n.pos,
                r,
                o,
                this.slice,
                this.insert,
                this.structure,
              );
        }
        toJSON() {
          let e = {
            stepType: "replaceAround",
            from: this.from,
            to: this.to,
            gapFrom: this.gapFrom,
            gapTo: this.gapTo,
            insert: this.insert,
          };
          return (
            this.slice.size && (e.slice = this.slice.toJSON()),
            this.structure && (e.structure = !0),
            e
          );
        }
        static fromJSON(e, t) {
          if (
            "number" != typeof t.from ||
            "number" != typeof t.to ||
            "number" != typeof t.gapFrom ||
            "number" != typeof t.gapTo ||
            "number" != typeof t.insert
          )
            throw new RangeError(
              "Invalid input for ReplaceAroundStep.fromJSON",
            );
          return new y(
            t.from,
            t.to,
            t.gapFrom,
            t.gapTo,
            r.Ji.fromJSON(e, t.slice),
            t.insert,
            !!t.structure,
          );
        }
      }
      function v(e, t, n) {
        let r = e.resolve(t),
          o = n - t,
          i = r.depth;
        for (; o > 0 && i > 0 && r.indexAfter(i) == r.node(i).childCount; )
          i--, o--;
        if (o > 0) {
          let e = r.node(i).maybeChild(r.indexAfter(i));
          for (; o > 0; ) {
            if (!e || e.isLeaf) return !0;
            (e = e.firstChild), o--;
          }
        }
        return !1;
      }
      function w(e, t, n, o = n.contentMatch, i = !0) {
        let s = e.doc.nodeAt(t),
          l = [],
          a = t + 1;
        for (let t = 0; t < s.childCount; t++) {
          let c = s.child(t),
            h = a + c.nodeSize,
            p = o.matchType(c.type);
          if (p) {
            o = p;
            for (let t = 0; t < c.marks.length; t++)
              n.allowsMarkType(c.marks[t].type) ||
                e.step(new f(a, h, c.marks[t]));
            if (i && c.isText && "pre" != n.whitespace) {
              let e,
                t,
                o = /\r?\n|\r/g;
              for (; (e = o.exec(c.text)); )
                t ||
                  (t = new r.Ji(
                    r.FK.from(n.schema.text(" ", n.allowedMarks(c.marks))),
                    0,
                    0,
                  )),
                  l.push(new b(a + e.index, a + e.index + e[0].length, t));
            }
          } else l.push(new b(a, h, r.Ji.empty));
          a = h;
        }
        if (!o.validEnd) {
          let t = o.fillBefore(r.FK.empty, !0);
          e.replace(a, a, new r.Ji(t, 0, 0));
        }
        for (let t = l.length - 1; t >= 0; t--) e.step(l[t]);
      }
      function x(e, t, n) {
        return (
          (0 == t || e.canReplace(t, e.childCount)) &&
          (n == e.childCount || e.canReplace(0, n))
        );
      }
      function S(e) {
        let t = e.parent.content.cutByIndex(e.startIndex, e.endIndex);
        for (let n = e.depth; ; --n) {
          let r = e.$from.node(n),
            o = e.$from.index(n),
            i = e.$to.indexAfter(n);
          if (n < e.depth && r.canReplace(o, i, t)) return n;
          if (0 == n || r.type.spec.isolating || !x(r, o, i)) break;
        }
        return null;
      }
      function k(e, t, n = null, r = e) {
        let o = (function (e, t) {
            let { parent: n, startIndex: r, endIndex: o } = e,
              i = n.contentMatchAt(r).findWrapping(t);
            if (!i) return null;
            let s = i.length ? i[0] : t;
            return n.canReplaceWith(r, o, s) ? i : null;
          })(e, t),
          i =
            o &&
            (function (e, t) {
              let { parent: n, startIndex: r, endIndex: o } = e,
                i = n.child(r),
                s = t.contentMatch.findWrapping(i.type);
              if (!s) return null;
              let l = (s.length ? s[s.length - 1] : t).contentMatch;
              for (let e = r; l && e < o; e++) l = l.matchType(n.child(e).type);
              return l && l.validEnd ? s : null;
            })(r, t);
        return i
          ? o.map(C).concat({ type: t, attrs: n }).concat(i.map(C))
          : null;
      }
      function C(e) {
        return { type: e, attrs: null };
      }
      function O(e, t, n = 1, r) {
        let o = e.resolve(t),
          i = o.depth - n,
          s = (r && r[r.length - 1]) || o.parent;
        if (
          i < 0 ||
          o.parent.type.spec.isolating ||
          !o.parent.canReplace(o.index(), o.parent.childCount) ||
          !s.type.validContent(
            o.parent.content.cutByIndex(o.index(), o.parent.childCount),
          )
        )
          return !1;
        for (let e = o.depth - 1, t = n - 2; e > i; e--, t--) {
          let n = o.node(e),
            i = o.index(e);
          if (n.type.spec.isolating) return !1;
          let s = n.content.cutByIndex(i, n.childCount),
            l = r && r[t + 1];
          l && (s = s.replaceChild(0, l.type.create(l.attrs)));
          let a = (r && r[t]) || n;
          if (!n.canReplace(i + 1, n.childCount) || !a.type.validContent(s))
            return !1;
        }
        let l = o.indexAfter(i),
          a = r && r[0];
        return o.node(i).canReplaceWith(l, l, a ? a.type : o.node(i + 1).type);
      }
      function M(e, t) {
        let n = e.resolve(t),
          r = n.index();
        return E(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
      }
      function E(e, t) {
        return !(!e || !t || e.isLeaf || !e.canAppend(t));
      }
      function A(e, t, n) {
        let r = e.resolve(t);
        if (!n.content.size) return t;
        let o = n.content;
        for (let e = 0; e < n.openStart; e++) o = o.firstChild.content;
        for (let e = 1; e <= (0 == n.openStart && n.size ? 2 : 1); e++)
          for (let t = r.depth; t >= 0; t--) {
            let n =
                t == r.depth
                  ? 0
                  : r.pos <= (r.start(t + 1) + r.end(t + 1)) / 2
                    ? -1
                    : 1,
              i = r.index(t) + (n > 0 ? 1 : 0),
              s = r.node(t),
              l = !1;
            if (1 == e) l = s.canReplace(i, i, o);
            else {
              let e = s.contentMatchAt(i).findWrapping(o.firstChild.type);
              l = e && s.canReplaceWith(i, i, e[0]);
            }
            if (l)
              return 0 == n ? r.pos : n < 0 ? r.before(t + 1) : r.after(t + 1);
          }
        return null;
      }
      function N(e, t, n = t, o = r.Ji.empty) {
        if (t == n && !o.size) return null;
        let i = e.resolve(t),
          s = e.resolve(n);
        return T(i, s, o) ? new b(t, n, o) : new _(i, s, o).fit();
      }
      function T(e, t, n) {
        return (
          !n.openStart &&
          !n.openEnd &&
          e.start() == t.start() &&
          e.parent.canReplace(e.index(), t.index(), n.content)
        );
      }
      h.jsonID("replaceAround", y);
      class _ {
        constructor(e, t, n) {
          (this.$from = e),
            (this.$to = t),
            (this.unplaced = n),
            (this.frontier = []),
            (this.placed = r.FK.empty);
          for (let t = 0; t <= e.depth; t++) {
            let n = e.node(t);
            this.frontier.push({
              type: n.type,
              match: n.contentMatchAt(e.indexAfter(t)),
            });
          }
          for (let t = e.depth; t > 0; t--)
            this.placed = r.FK.from(e.node(t).copy(this.placed));
        }
        get depth() {
          return this.frontier.length - 1;
        }
        fit() {
          for (; this.unplaced.size; ) {
            let e = this.findFittable();
            e ? this.placeNodes(e) : this.openMore() || this.dropNode();
          }
          let e = this.mustMoveInline(),
            t = this.placed.size - this.depth - this.$from.depth,
            n = this.$from,
            o = this.close(e < 0 ? this.$to : n.doc.resolve(e));
          if (!o) return null;
          let i = this.placed,
            s = n.depth,
            l = o.depth;
          for (; s && l && 1 == i.childCount; )
            (i = i.firstChild.content), s--, l--;
          let a = new r.Ji(i, s, l);
          return e > -1
            ? new y(n.pos, e, this.$to.pos, this.$to.end(), a, t)
            : a.size || n.pos != this.$to.pos
              ? new b(n.pos, o.pos, a)
              : null;
        }
        findFittable() {
          let e = this.unplaced.openStart;
          for (
            let t = this.unplaced.content, n = 0, r = this.unplaced.openEnd;
            n < e;
            n++
          ) {
            let o = t.firstChild;
            if (
              (t.childCount > 1 && (r = 0), o.type.spec.isolating && r <= n)
            ) {
              e = n;
              break;
            }
            t = o.content;
          }
          for (let t = 1; t <= 2; t++)
            for (let n = 1 == t ? e : this.unplaced.openStart; n >= 0; n--) {
              let e,
                o = null;
              n
                ? ((o = j(this.unplaced.content, n - 1).firstChild),
                  (e = o.content))
                : (e = this.unplaced.content);
              let i = e.firstChild;
              for (let e = this.depth; e >= 0; e--) {
                let s,
                  { type: l, match: a } = this.frontier[e],
                  c = null;
                if (
                  1 == t &&
                  (i
                    ? a.matchType(i.type) ||
                      (c = a.fillBefore(r.FK.from(i), !1))
                    : o && l.compatibleContent(o.type))
                )
                  return {
                    sliceDepth: n,
                    frontierDepth: e,
                    parent: o,
                    inject: c,
                  };
                if (2 == t && i && (s = a.findWrapping(i.type)))
                  return {
                    sliceDepth: n,
                    frontierDepth: e,
                    parent: o,
                    wrap: s,
                  };
                if (o && a.matchType(o.type)) break;
              }
            }
        }
        openMore() {
          let { content: e, openStart: t, openEnd: n } = this.unplaced,
            o = j(e, t);
          return (
            !(!o.childCount || o.firstChild.isLeaf) &&
            ((this.unplaced = new r.Ji(
              e,
              t + 1,
              Math.max(n, o.size + t >= e.size - n ? t + 1 : 0),
            )),
            !0)
          );
        }
        dropNode() {
          let { content: e, openStart: t, openEnd: n } = this.unplaced,
            o = j(e, t);
          if (o.childCount <= 1 && t > 0) {
            let i = e.size - t <= t + o.size;
            this.unplaced = new r.Ji(D(e, t - 1, 1), t - 1, i ? t - 1 : n);
          } else this.unplaced = new r.Ji(D(e, t, 1), t, n);
        }
        placeNodes({
          sliceDepth: e,
          frontierDepth: t,
          parent: n,
          inject: o,
          wrap: i,
        }) {
          for (; this.depth > t; ) this.closeFrontierNode();
          if (i) for (let e = 0; e < i.length; e++) this.openFrontierNode(i[e]);
          let s = this.unplaced,
            l = n ? n.content : s.content,
            a = s.openStart - e,
            c = 0,
            h = [],
            { match: p, type: u } = this.frontier[t];
          if (o) {
            for (let e = 0; e < o.childCount; e++) h.push(o.child(e));
            p = p.matchFragment(o);
          }
          let d = l.size + e - (s.content.size - s.openEnd);
          for (; c < l.childCount; ) {
            let e = l.child(c),
              t = p.matchType(e.type);
            if (!t) break;
            c++,
              (c > 1 || 0 == a || e.content.size) &&
                ((p = t),
                h.push(
                  F(
                    e.mark(u.allowedMarks(e.marks)),
                    1 == c ? a : 0,
                    c == l.childCount ? d : -1,
                  ),
                ));
          }
          let f = c == l.childCount;
          f || (d = -1),
            (this.placed = R(this.placed, t, r.FK.from(h))),
            (this.frontier[t].match = p),
            f &&
              d < 0 &&
              n &&
              n.type == this.frontier[this.depth].type &&
              this.frontier.length > 1 &&
              this.closeFrontierNode();
          for (let e = 0, t = l; e < d; e++) {
            let e = t.lastChild;
            this.frontier.push({
              type: e.type,
              match: e.contentMatchAt(e.childCount),
            }),
              (t = e.content);
          }
          this.unplaced = f
            ? 0 == e
              ? r.Ji.empty
              : new r.Ji(
                  D(s.content, e - 1, 1),
                  e - 1,
                  d < 0 ? s.openEnd : e - 1,
                )
            : new r.Ji(D(s.content, e, c), s.openStart, s.openEnd);
        }
        mustMoveInline() {
          if (!this.$to.parent.isTextblock) return -1;
          let e,
            t = this.frontier[this.depth];
          if (
            !t.type.isTextblock ||
            !z(this.$to, this.$to.depth, t.type, t.match, !1) ||
            (this.$to.depth == this.depth &&
              (e = this.findCloseLevel(this.$to)) &&
              e.depth == this.depth)
          )
            return -1;
          let { depth: n } = this.$to,
            r = this.$to.after(n);
          for (; n > 1 && r == this.$to.end(--n); ) ++r;
          return r;
        }
        findCloseLevel(e) {
          e: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
            let { match: n, type: r } = this.frontier[t],
              o = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)),
              i = z(e, t, r, n, o);
            if (i) {
              for (let n = t - 1; n >= 0; n--) {
                let { match: t, type: r } = this.frontier[n],
                  o = z(e, n, r, t, !0);
                if (!o || o.childCount) continue e;
              }
              return {
                depth: t,
                fit: i,
                move: o ? e.doc.resolve(e.after(t + 1)) : e,
              };
            }
          }
        }
        close(e) {
          let t = this.findCloseLevel(e);
          if (!t) return null;
          for (; this.depth > t.depth; ) this.closeFrontierNode();
          t.fit.childCount && (this.placed = R(this.placed, t.depth, t.fit)),
            (e = t.move);
          for (let n = t.depth + 1; n <= e.depth; n++) {
            let t = e.node(n),
              r = t.type.contentMatch.fillBefore(t.content, !0, e.index(n));
            this.openFrontierNode(t.type, t.attrs, r);
          }
          return e;
        }
        openFrontierNode(e, t = null, n) {
          let o = this.frontier[this.depth];
          (o.match = o.match.matchType(e)),
            (this.placed = R(
              this.placed,
              this.depth,
              r.FK.from(e.create(t, n)),
            )),
            this.frontier.push({ type: e, match: e.contentMatch });
        }
        closeFrontierNode() {
          let e = this.frontier.pop().match.fillBefore(r.FK.empty, !0);
          e.childCount &&
            (this.placed = R(this.placed, this.frontier.length, e));
        }
      }
      function D(e, t, n) {
        return 0 == t
          ? e.cutByIndex(n, e.childCount)
          : e.replaceChild(
              0,
              e.firstChild.copy(D(e.firstChild.content, t - 1, n)),
            );
      }
      function R(e, t, n) {
        return 0 == t
          ? e.append(n)
          : e.replaceChild(
              e.childCount - 1,
              e.lastChild.copy(R(e.lastChild.content, t - 1, n)),
            );
      }
      function j(e, t) {
        for (let n = 0; n < t; n++) e = e.firstChild.content;
        return e;
      }
      function F(e, t, n) {
        if (t <= 0) return e;
        let o = e.content;
        return (
          t > 1 &&
            (o = o.replaceChild(
              0,
              F(o.firstChild, t - 1, 1 == o.childCount ? n - 1 : 0),
            )),
          t > 0 &&
            ((o = e.type.contentMatch.fillBefore(o).append(o)),
            n <= 0 &&
              (o = o.append(
                e.type.contentMatch.matchFragment(o).fillBefore(r.FK.empty, !0),
              ))),
          e.copy(o)
        );
      }
      function z(e, t, n, r, o) {
        let i = e.node(t),
          s = o ? e.indexAfter(t) : e.index(t);
        if (s == i.childCount && !n.compatibleContent(i.type)) return null;
        let l = r.fillBefore(i.content, !0, s);
        return l &&
          !(function (e, t, n) {
            for (let r = n; r < t.childCount; r++)
              if (!e.allowsMarks(t.child(r).marks)) return !0;
            return !1;
          })(n, i.content, s)
          ? l
          : null;
      }
      function B(e, t, n, o, i) {
        if (t < n) {
          let r = e.firstChild;
          e = e.replaceChild(0, r.copy(B(r.content, t + 1, n, o, r)));
        }
        if (t > o) {
          let t = i.contentMatchAt(0),
            n = t.fillBefore(e).append(e);
          e = n.append(t.matchFragment(n).fillBefore(r.FK.empty, !0));
        }
        return e;
      }
      function P(e, t) {
        let n = [];
        for (let r = Math.min(e.depth, t.depth); r >= 0; r--) {
          let o = e.start(r);
          if (
            o < e.pos - (e.depth - r) ||
            t.end(r) > t.pos + (t.depth - r) ||
            e.node(r).type.spec.isolating ||
            t.node(r).type.spec.isolating
          )
            break;
          (o == t.start(r) ||
            (r == e.depth &&
              r == t.depth &&
              e.parent.inlineContent &&
              t.parent.inlineContent &&
              r &&
              t.start(r - 1) == o - 1)) &&
            n.push(r);
        }
        return n;
      }
      class I extends h {
        constructor(e, t, n) {
          super(), (this.pos = e), (this.attr = t), (this.value = n);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return p.fail("No node at attribute step's position");
          let n = Object.create(null);
          for (let e in t.attrs) n[e] = t.attrs[e];
          n[this.attr] = this.value;
          let o = t.type.create(n, null, t.marks);
          return p.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new r.Ji(r.FK.from(o), 0, t.isLeaf ? 0 : 1),
          );
        }
        getMap() {
          return l.empty;
        }
        invert(e) {
          return new I(
            this.pos,
            this.attr,
            e.nodeAt(this.pos).attrs[this.attr],
          );
        }
        map(e) {
          let t = e.mapResult(this.pos, 1);
          return t.deletedAfter ? null : new I(t.pos, this.attr, this.value);
        }
        toJSON() {
          return {
            stepType: "attr",
            pos: this.pos,
            attr: this.attr,
            value: this.value,
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.pos || "string" != typeof t.attr)
            throw new RangeError("Invalid input for AttrStep.fromJSON");
          return new I(t.pos, t.attr, t.value);
        }
      }
      h.jsonID("attr", I);
      class $ extends h {
        constructor(e, t) {
          super(), (this.attr = e), (this.value = t);
        }
        apply(e) {
          let t = Object.create(null);
          for (let n in e.attrs) t[n] = e.attrs[n];
          t[this.attr] = this.value;
          let n = e.type.create(t, e.content, e.marks);
          return p.ok(n);
        }
        getMap() {
          return l.empty;
        }
        invert(e) {
          return new $(this.attr, e.attrs[this.attr]);
        }
        map(e) {
          return this;
        }
        toJSON() {
          return { stepType: "docAttr", attr: this.attr, value: this.value };
        }
        static fromJSON(e, t) {
          if ("string" != typeof t.attr)
            throw new RangeError("Invalid input for DocAttrStep.fromJSON");
          return new $(t.attr, t.value);
        }
      }
      h.jsonID("docAttr", $);
      let L = class extends Error {};
      (L = function e(t) {
        let n = Error.call(this, t);
        return (n.__proto__ = e.prototype), n;
      }),
        ((L.prototype = Object.create(Error.prototype)).constructor = L),
        (L.prototype.name = "TransformError");
      class V {
        constructor(e) {
          (this.doc = e),
            (this.steps = []),
            (this.docs = []),
            (this.mapping = new a());
        }
        get before() {
          return this.docs.length ? this.docs[0] : this.doc;
        }
        step(e) {
          let t = this.maybeStep(e);
          if (t.failed) throw new L(t.failed);
          return this;
        }
        maybeStep(e) {
          let t = e.apply(this.doc);
          return t.failed || this.addStep(e, t.doc), t;
        }
        get docChanged() {
          return this.steps.length > 0;
        }
        addStep(e, t) {
          this.docs.push(this.doc),
            this.steps.push(e),
            this.mapping.appendMap(e.getMap()),
            (this.doc = t);
        }
        replace(e, t = e, n = r.Ji.empty) {
          let o = N(this.doc, e, t, n);
          return o && this.step(o), this;
        }
        replaceWith(e, t, n) {
          return this.replace(e, t, new r.Ji(r.FK.from(n), 0, 0));
        }
        delete(e, t) {
          return this.replace(e, t, r.Ji.empty);
        }
        insert(e, t) {
          return this.replaceWith(e, e, t);
        }
        replaceRange(e, t, n) {
          return (
            (function (e, t, n, o) {
              if (!o.size) return e.deleteRange(t, n);
              let i = e.doc.resolve(t),
                s = e.doc.resolve(n);
              if (T(i, s, o)) return e.step(new b(t, n, o));
              let l = P(i, e.doc.resolve(n));
              0 == l[l.length - 1] && l.pop();
              let a = -(i.depth + 1);
              l.unshift(a);
              for (let e = i.depth, t = i.pos - 1; e > 0; e--, t--) {
                let n = i.node(e).type.spec;
                if (n.defining || n.definingAsContext || n.isolating) break;
                l.indexOf(e) > -1
                  ? (a = e)
                  : i.before(e) == t && l.splice(1, 0, -e);
              }
              let c = l.indexOf(a),
                h = [],
                p = o.openStart;
              for (let e = o.content, t = 0; ; t++) {
                let n = e.firstChild;
                if ((h.push(n), t == o.openStart)) break;
                e = n.content;
              }
              for (let e = p - 1; e >= 0; e--) {
                let t = h[e],
                  n = (u = t.type).spec.defining || u.spec.definingForContent;
                if (n && !t.sameMarkup(i.node(Math.abs(a) - 1))) p = e;
                else if (n || !t.type.isTextblock) break;
              }
              var u;
              for (let t = o.openStart; t >= 0; t--) {
                let a = (t + p + 1) % (o.openStart + 1),
                  u = h[a];
                if (u)
                  for (let t = 0; t < l.length; t++) {
                    let h = l[(t + c) % l.length],
                      p = !0;
                    h < 0 && ((p = !1), (h = -h));
                    let d = i.node(h - 1),
                      f = i.index(h - 1);
                    if (d.canReplaceWith(f, f, u.type, u.marks))
                      return e.replace(
                        i.before(h),
                        p ? s.after(h) : n,
                        new r.Ji(B(o.content, 0, o.openStart, a), a, o.openEnd),
                      );
                  }
              }
              let d = e.steps.length;
              for (
                let r = l.length - 1;
                r >= 0 && (e.replace(t, n, o), !(e.steps.length > d));
                r--
              ) {
                let e = l[r];
                e < 0 || ((t = i.before(e)), (n = s.after(e)));
              }
            })(this, e, t, n),
            this
          );
        }
        replaceRangeWith(e, t, n) {
          return (
            (function (e, t, n, o) {
              if (
                !o.isInline &&
                t == n &&
                e.doc.resolve(t).parent.content.size
              ) {
                let r = (function (e, t, n) {
                  let r = e.resolve(t);
                  if (r.parent.canReplaceWith(r.index(), r.index(), n))
                    return t;
                  if (0 == r.parentOffset)
                    for (let e = r.depth - 1; e >= 0; e--) {
                      let t = r.index(e);
                      if (r.node(e).canReplaceWith(t, t, n))
                        return r.before(e + 1);
                      if (t > 0) return null;
                    }
                  if (r.parentOffset == r.parent.content.size)
                    for (let e = r.depth - 1; e >= 0; e--) {
                      let t = r.indexAfter(e);
                      if (r.node(e).canReplaceWith(t, t, n))
                        return r.after(e + 1);
                      if (t < r.node(e).childCount) return null;
                    }
                  return null;
                })(e.doc, t, o.type);
                null != r && (t = n = r);
              }
              e.replaceRange(t, n, new r.Ji(r.FK.from(o), 0, 0));
            })(this, e, t, n),
            this
          );
        }
        deleteRange(e, t) {
          return (
            (function (e, t, n) {
              let r = e.doc.resolve(t),
                o = e.doc.resolve(n),
                i = P(r, o);
              for (let t = 0; t < i.length; t++) {
                let n = i[t],
                  s = t == i.length - 1;
                if ((s && 0 == n) || r.node(n).type.contentMatch.validEnd)
                  return e.delete(r.start(n), o.end(n));
                if (
                  n > 0 &&
                  (s ||
                    r
                      .node(n - 1)
                      .canReplace(r.index(n - 1), o.indexAfter(n - 1)))
                )
                  return e.delete(r.before(n), o.after(n));
              }
              for (let i = 1; i <= r.depth && i <= o.depth; i++)
                if (
                  t - r.start(i) == r.depth - i &&
                  n > r.end(i) &&
                  o.end(i) - n != o.depth - i
                )
                  return e.delete(r.before(i), n);
              e.delete(t, n);
            })(this, e, t),
            this
          );
        }
        lift(e, t) {
          return (
            (function (e, t, n) {
              let { $from: o, $to: i, depth: s } = t,
                l = o.before(s + 1),
                a = i.after(s + 1),
                c = l,
                h = a,
                p = r.FK.empty,
                u = 0;
              for (let e = s, t = !1; e > n; e--)
                t || o.index(e) > 0
                  ? ((t = !0), (p = r.FK.from(o.node(e).copy(p))), u++)
                  : c--;
              let d = r.FK.empty,
                f = 0;
              for (let e = s, t = !1; e > n; e--)
                t || i.after(e + 1) < i.end(e)
                  ? ((t = !0), (d = r.FK.from(i.node(e).copy(d))), f++)
                  : h++;
              e.step(
                new y(c, h, l, a, new r.Ji(p.append(d), u, f), p.size - u, !0),
              );
            })(this, e, t),
            this
          );
        }
        join(e, t = 1) {
          return (
            (function (e, t, n) {
              let o = new b(t - n, t + n, r.Ji.empty, !0);
              e.step(o);
            })(this, e, t),
            this
          );
        }
        wrap(e, t) {
          return (
            (function (e, t, n) {
              let o = r.FK.empty;
              for (let e = n.length - 1; e >= 0; e--) {
                if (o.size) {
                  let t = n[e].type.contentMatch.matchFragment(o);
                  if (!t || !t.validEnd)
                    throw new RangeError(
                      "Wrapper type given to Transform.wrap does not form valid content of its parent wrapper",
                    );
                }
                o = r.FK.from(n[e].type.create(n[e].attrs, o));
              }
              let i = t.start,
                s = t.end;
              e.step(new y(i, s, i, s, new r.Ji(o, 0, 0), n.length, !0));
            })(this, e, t),
            this
          );
        }
        setBlockType(e, t = e, n, o = null) {
          return (
            (function (e, t, n, o, i) {
              if (!o.isTextblock)
                throw new RangeError(
                  "Type given to setBlockType should be a textblock",
                );
              let s = e.steps.length;
              e.doc.nodesBetween(t, n, (t, n) => {
                if (
                  t.isTextblock &&
                  !t.hasMarkup(o, i) &&
                  (function (e, t, n) {
                    let r = e.resolve(t),
                      o = r.index();
                    return r.parent.canReplaceWith(o, o + 1, n);
                  })(e.doc, e.mapping.slice(s).map(n), o)
                ) {
                  let l = null;
                  if (o.schema.linebreakReplacement) {
                    let e = "pre" == o.whitespace,
                      t = !!o.contentMatch.matchType(
                        o.schema.linebreakReplacement,
                      );
                    e && !t ? (l = !1) : !e && t && (l = !0);
                  }
                  !1 === l &&
                    (function (e, t, n, r) {
                      t.forEach((o, i) => {
                        if (o.type == o.type.schema.linebreakReplacement) {
                          let o = e.mapping.slice(r).map(n + 1 + i);
                          e.replaceWith(o, o + 1, t.type.schema.text("\n"));
                        }
                      });
                    })(e, t, n, s),
                    w(e, e.mapping.slice(s).map(n, 1), o, void 0, null === l);
                  let a = e.mapping.slice(s),
                    c = a.map(n, 1),
                    h = a.map(n + t.nodeSize, 1);
                  return (
                    e.step(
                      new y(
                        c,
                        h,
                        c + 1,
                        h - 1,
                        new r.Ji(r.FK.from(o.create(i, null, t.marks)), 0, 0),
                        1,
                        !0,
                      ),
                    ),
                    !0 === l &&
                      (function (e, t, n, r) {
                        t.forEach((o, i) => {
                          if (o.isText) {
                            let s,
                              l = /\r?\n|\r/g;
                            for (; (s = l.exec(o.text)); ) {
                              let o = e.mapping
                                .slice(r)
                                .map(n + 1 + i + s.index);
                              e.replaceWith(
                                o,
                                o + 1,
                                t.type.schema.linebreakReplacement.create(),
                              );
                            }
                          }
                        });
                      })(e, t, n, s),
                    !1
                  );
                }
              });
            })(this, e, t, n, o),
            this
          );
        }
        setNodeMarkup(e, t, n = null, o) {
          return (
            (function (e, t, n, o, i) {
              let s = e.doc.nodeAt(t);
              if (!s) throw new RangeError("No node at given position");
              n || (n = s.type);
              let l = n.create(o, null, i || s.marks);
              if (s.isLeaf) return e.replaceWith(t, t + s.nodeSize, l);
              if (!n.validContent(s.content))
                throw new RangeError("Invalid content for node type " + n.name);
              e.step(
                new y(
                  t,
                  t + s.nodeSize,
                  t + 1,
                  t + s.nodeSize - 1,
                  new r.Ji(r.FK.from(l), 0, 0),
                  1,
                  !0,
                ),
              );
            })(this, e, t, n, o),
            this
          );
        }
        setNodeAttribute(e, t, n) {
          return this.step(new I(e, t, n)), this;
        }
        setDocAttribute(e, t) {
          return this.step(new $(e, t)), this;
        }
        addNodeMark(e, t) {
          return this.step(new m(e, t)), this;
        }
        removeNodeMark(e, t) {
          if (!(t instanceof r.CU)) {
            let n = this.doc.nodeAt(e);
            if (!n) throw new RangeError("No node at position " + e);
            if (!(t = t.isInSet(n.marks))) return this;
          }
          return this.step(new g(e, t)), this;
        }
        split(e, t = 1, n) {
          return (
            (function (e, t, n = 1, o) {
              let i = e.doc.resolve(t),
                s = r.FK.empty,
                l = r.FK.empty;
              for (
                let e = i.depth, t = i.depth - n, a = n - 1;
                e > t;
                e--, a--
              ) {
                s = r.FK.from(i.node(e).copy(s));
                let t = o && o[a];
                l = r.FK.from(
                  t ? t.type.create(t.attrs, l) : i.node(e).copy(l),
                );
              }
              e.step(new b(t, t, new r.Ji(s.append(l), n, n), !0));
            })(this, e, t, n),
            this
          );
        }
        addMark(e, t, n) {
          return (
            (function (e, t, n, r) {
              let o,
                i,
                s = [],
                l = [];
              e.doc.nodesBetween(t, n, (e, a, c) => {
                if (!e.isInline) return;
                let h = e.marks;
                if (!r.isInSet(h) && c.type.allowsMarkType(r.type)) {
                  let c = Math.max(a, t),
                    p = Math.min(a + e.nodeSize, n),
                    u = r.addToSet(h);
                  for (let e = 0; e < h.length; e++)
                    h[e].isInSet(u) ||
                      (o && o.to == c && o.mark.eq(h[e])
                        ? (o.to = p)
                        : s.push((o = new f(c, p, h[e]))));
                  i && i.to == c ? (i.to = p) : l.push((i = new d(c, p, r)));
                }
              }),
                s.forEach((t) => e.step(t)),
                l.forEach((t) => e.step(t));
            })(this, e, t, n),
            this
          );
        }
        removeMark(e, t, n) {
          return (
            (function (e, t, n, o) {
              let i = [],
                s = 0;
              e.doc.nodesBetween(t, n, (e, l) => {
                if (!e.isInline) return;
                s++;
                let a = null;
                if (o instanceof r.sX) {
                  let t,
                    n = e.marks;
                  for (; (t = o.isInSet(n)); )
                    (a || (a = [])).push(t), (n = t.removeFromSet(n));
                } else o ? o.isInSet(e.marks) && (a = [o]) : (a = e.marks);
                if (a && a.length) {
                  let r = Math.min(l + e.nodeSize, n);
                  for (let e = 0; e < a.length; e++) {
                    let n,
                      o = a[e];
                    for (let e = 0; e < i.length; e++) {
                      let t = i[e];
                      t.step == s - 1 && o.eq(i[e].style) && (n = t);
                    }
                    n
                      ? ((n.to = r), (n.step = s))
                      : i.push({
                          style: o,
                          from: Math.max(l, t),
                          to: r,
                          step: s,
                        });
                  }
                }
              }),
                i.forEach((t) => e.step(new f(t.from, t.to, t.style)));
            })(this, e, t, n),
            this
          );
        }
        clearIncompatible(e, t, n) {
          return w(this, e, t, n), this;
        }
      }
    },
    29287: (e, t, n) => {
      "use strict";
      n.d(t, { Lz: () => fn, NZ: () => $t, zF: () => Jt });
      var r = n(52893),
        o = n(57053),
        i = n(63734);
      const s = function (e) {
          for (var t = 0; ; t++) if (!(e = e.previousSibling)) return t;
        },
        l = function (e) {
          let t = e.assignedSlot || e.parentNode;
          return t && 11 == t.nodeType ? t.host : t;
        };
      let a = null;
      const c = function (e, t, n) {
          let r = a || (a = document.createRange());
          return (
            r.setEnd(e, null == n ? e.nodeValue.length : n),
            r.setStart(e, t || 0),
            r
          );
        },
        h = function (e, t, n, r) {
          return n && (u(e, t, n, r, -1) || u(e, t, n, r, 1));
        },
        p = /^(img|br|input|textarea|hr)$/i;
      function u(e, t, n, r, o) {
        for (;;) {
          if (e == n && t == r) return !0;
          if (t == (o < 0 ? 0 : d(e))) {
            let n = e.parentNode;
            if (
              !n ||
              1 != n.nodeType ||
              f(e) ||
              p.test(e.nodeName) ||
              "false" == e.contentEditable
            )
              return !1;
            (t = s(e) + (o < 0 ? 0 : 1)), (e = n);
          } else {
            if (1 != e.nodeType) return !1;
            if (
              "false" ==
              (e = e.childNodes[t + (o < 0 ? -1 : 0)]).contentEditable
            )
              return !1;
            t = o < 0 ? d(e) : 0;
          }
        }
      }
      function d(e) {
        return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length;
      }
      function f(e) {
        let t;
        for (let n = e; n && !(t = n.pmViewDesc); n = n.parentNode);
        return (
          t && t.node && t.node.isBlock && (t.dom == e || t.contentDOM == e)
        );
      }
      const m = function (e) {
        return (
          e.focusNode &&
          h(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)
        );
      };
      function g(e, t) {
        let n = document.createEvent("Event");
        return (
          n.initEvent("keydown", !0, !0),
          (n.keyCode = e),
          (n.key = n.code = t),
          n
        );
      }
      const b = "undefined" != typeof navigator ? navigator : null,
        y = "undefined" != typeof document ? document : null,
        v = (b && b.userAgent) || "",
        w = /Edge\/(\d+)/.exec(v),
        x = /MSIE \d/.exec(v),
        S = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(v),
        k = !!(x || S || w),
        C = x ? document.documentMode : S ? +S[1] : w ? +w[1] : 0,
        O = !k && /gecko\/(\d+)/i.test(v);
      O && (/Firefox\/(\d+)/.exec(v) || [0, 0])[1];
      const M = !k && /Chrome\/(\d+)/.exec(v),
        E = !!M,
        A = M ? +M[1] : 0,
        N = !k && !!b && /Apple Computer/.test(b.vendor),
        T = N && (/Mobile\/\w+/.test(v) || (!!b && b.maxTouchPoints > 2)),
        _ = T || (!!b && /Mac/.test(b.platform)),
        D = !!b && /Win/.test(b.platform),
        R = /Android \d/.test(v),
        j = !!y && "webkitFontSmoothing" in y.documentElement.style,
        F = j
          ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1]
          : 0;
      function z(e) {
        let t = e.defaultView && e.defaultView.visualViewport;
        return t
          ? { left: 0, right: t.width, top: 0, bottom: t.height }
          : {
              left: 0,
              right: e.documentElement.clientWidth,
              top: 0,
              bottom: e.documentElement.clientHeight,
            };
      }
      function B(e, t) {
        return "number" == typeof e ? e : e[t];
      }
      function P(e) {
        let t = e.getBoundingClientRect(),
          n = t.width / e.offsetWidth || 1,
          r = t.height / e.offsetHeight || 1;
        return {
          left: t.left,
          right: t.left + e.clientWidth * n,
          top: t.top,
          bottom: t.top + e.clientHeight * r,
        };
      }
      function I(e, t, n) {
        let r = e.someProp("scrollThreshold") || 0,
          o = e.someProp("scrollMargin") || 5,
          i = e.dom.ownerDocument;
        for (let s = n || e.dom; s; s = l(s)) {
          if (1 != s.nodeType) continue;
          let e = s,
            n = e == i.body,
            l = n ? z(i) : P(e),
            a = 0,
            c = 0;
          if (
            (t.top < l.top + B(r, "top")
              ? (c = -(l.top - t.top + B(o, "top")))
              : t.bottom > l.bottom - B(r, "bottom") &&
                (c =
                  t.bottom - t.top > l.bottom - l.top
                    ? t.top + B(o, "top") - l.top
                    : t.bottom - l.bottom + B(o, "bottom")),
            t.left < l.left + B(r, "left")
              ? (a = -(l.left - t.left + B(o, "left")))
              : t.right > l.right - B(r, "right") &&
                (a = t.right - l.right + B(o, "right")),
            a || c)
          )
            if (n) i.defaultView.scrollBy(a, c);
            else {
              let n = e.scrollLeft,
                r = e.scrollTop;
              c && (e.scrollTop += c), a && (e.scrollLeft += a);
              let o = e.scrollLeft - n,
                i = e.scrollTop - r;
              t = {
                left: t.left - o,
                top: t.top - i,
                right: t.right - o,
                bottom: t.bottom - i,
              };
            }
          if (n || /^(fixed|sticky)$/.test(getComputedStyle(s).position)) break;
        }
      }
      function $(e) {
        let t = [],
          n = e.ownerDocument;
        for (
          let r = e;
          r &&
          (t.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), e != n);
          r = l(r)
        );
        return t;
      }
      function L(e, t) {
        for (let n = 0; n < e.length; n++) {
          let { dom: r, top: o, left: i } = e[n];
          r.scrollTop != o + t && (r.scrollTop = o + t),
            r.scrollLeft != i && (r.scrollLeft = i);
        }
      }
      let V = null;
      function J(e, t) {
        let n,
          r,
          o,
          i,
          s = 2e8,
          l = 0,
          a = t.top,
          h = t.top;
        for (let p = e.firstChild, u = 0; p; p = p.nextSibling, u++) {
          let e;
          if (1 == p.nodeType) e = p.getClientRects();
          else {
            if (3 != p.nodeType) continue;
            e = c(p).getClientRects();
          }
          for (let c = 0; c < e.length; c++) {
            let d = e[c];
            if (d.top <= a && d.bottom >= h) {
              (a = Math.max(d.bottom, a)), (h = Math.min(d.top, h));
              let e =
                d.left > t.left
                  ? d.left - t.left
                  : d.right < t.left
                    ? t.left - d.right
                    : 0;
              if (e < s) {
                (n = p),
                  (s = e),
                  (r =
                    e && 3 == n.nodeType
                      ? {
                          left: d.right < t.left ? d.right : d.left,
                          top: t.top,
                        }
                      : t),
                  1 == p.nodeType &&
                    e &&
                    (l = u + (t.left >= (d.left + d.right) / 2 ? 1 : 0));
                continue;
              }
            } else
              d.top > t.top &&
                !o &&
                d.left <= t.left &&
                d.right >= t.left &&
                ((o = p),
                (i = {
                  left: Math.max(d.left, Math.min(d.right, t.left)),
                  top: d.top,
                }));
            !n &&
              ((t.left >= d.right && t.top >= d.top) ||
                (t.left >= d.left && t.top >= d.bottom)) &&
              (l = u + 1);
          }
        }
        return (
          !n && o && ((n = o), (r = i), (s = 0)),
          n && 3 == n.nodeType
            ? (function (e, t) {
                let n = e.nodeValue.length,
                  r = document.createRange();
                for (let o = 0; o < n; o++) {
                  r.setEnd(e, o + 1), r.setStart(e, o);
                  let n = q(r, 1);
                  if (n.top != n.bottom && H(t, n))
                    return {
                      node: e,
                      offset: o + (t.left >= (n.left + n.right) / 2 ? 1 : 0),
                    };
                }
                return { node: e, offset: 0 };
              })(n, r)
            : !n || (s && 1 == n.nodeType)
              ? { node: e, offset: l }
              : J(n, r)
        );
      }
      function H(e, t) {
        return (
          e.left >= t.left - 1 &&
          e.left <= t.right + 1 &&
          e.top >= t.top - 1 &&
          e.top <= t.bottom + 1
        );
      }
      function K(e, t, n) {
        let r = e.childNodes.length;
        if (r && n.top < n.bottom)
          for (
            let o = Math.max(
                0,
                Math.min(
                  r - 1,
                  Math.floor((r * (t.top - n.top)) / (n.bottom - n.top)) - 2,
                ),
              ),
              i = o;
            ;
          ) {
            let n = e.childNodes[i];
            if (1 == n.nodeType) {
              let e = n.getClientRects();
              for (let r = 0; r < e.length; r++) {
                let o = e[r];
                if (H(t, o)) return K(n, t, o);
              }
            }
            if ((i = (i + 1) % r) == o) break;
          }
        return e;
      }
      function W(e, t) {
        let n,
          r = e.dom.ownerDocument,
          o = 0,
          i = (function (e, t, n) {
            if (e.caretPositionFromPoint)
              try {
                let r = e.caretPositionFromPoint(t, n);
                if (r) return { node: r.offsetNode, offset: r.offset };
              } catch (e) {}
            if (e.caretRangeFromPoint) {
              let r = e.caretRangeFromPoint(t, n);
              if (r) return { node: r.startContainer, offset: r.startOffset };
            }
          })(r, t.left, t.top);
        i && ({ node: n, offset: o } = i);
        let s,
          a = (e.root.elementFromPoint ? e.root : r).elementFromPoint(
            t.left,
            t.top,
          );
        if (!a || !e.dom.contains(1 != a.nodeType ? a.parentNode : a)) {
          let n = e.dom.getBoundingClientRect();
          if (!H(t, n)) return null;
          if (((a = K(e.dom, t, n)), !a)) return null;
        }
        if (N) for (let e = a; n && e; e = l(e)) e.draggable && (n = void 0);
        if (
          ((a = (function (e, t) {
            let n = e.parentNode;
            return n &&
              /^li$/i.test(n.nodeName) &&
              t.left < e.getBoundingClientRect().left
              ? n
              : e;
          })(a, t)),
          n)
        ) {
          if (
            O &&
            1 == n.nodeType &&
            ((o = Math.min(o, n.childNodes.length)), o < n.childNodes.length)
          ) {
            let e,
              r = n.childNodes[o];
            "IMG" == r.nodeName &&
              (e = r.getBoundingClientRect()).right <= t.left &&
              e.bottom > t.top &&
              o++;
          }
          let r;
          j &&
            o &&
            1 == n.nodeType &&
            1 == (r = n.childNodes[o - 1]).nodeType &&
            "false" == r.contentEditable &&
            r.getBoundingClientRect().top >= t.top &&
            o--,
            n == e.dom &&
            o == n.childNodes.length - 1 &&
            1 == n.lastChild.nodeType &&
            t.top > n.lastChild.getBoundingClientRect().bottom
              ? (s = e.state.doc.content.size)
              : (0 != o &&
                  1 == n.nodeType &&
                  "BR" == n.childNodes[o - 1].nodeName) ||
                (s = (function (e, t, n, r) {
                  let o = -1;
                  for (let n = t, i = !1; n != e.dom; ) {
                    let t = e.docView.nearestDesc(n, !0);
                    if (!t) return null;
                    if (
                      1 == t.dom.nodeType &&
                      ((t.node.isBlock && t.parent && !i) || !t.contentDOM)
                    ) {
                      let e = t.dom.getBoundingClientRect();
                      if (
                        (t.node.isBlock &&
                          t.parent &&
                          !i &&
                          ((i = !0),
                          e.left > r.left || e.top > r.top
                            ? (o = t.posBefore)
                            : (e.right < r.left || e.bottom < r.top) &&
                              (o = t.posAfter)),
                        !t.contentDOM && o < 0 && !t.node.isText)
                      )
                        return (
                          t.node.isBlock
                            ? r.top < (e.top + e.bottom) / 2
                            : r.left < (e.left + e.right) / 2
                        )
                          ? t.posBefore
                          : t.posAfter;
                    }
                    n = t.dom.parentNode;
                  }
                  return o > -1 ? o : e.docView.posFromDOM(t, n, -1);
                })(e, n, o, t));
        }
        null == s &&
          (s = (function (e, t, n) {
            let { node: r, offset: o } = J(t, n),
              i = -1;
            if (1 == r.nodeType && !r.firstChild) {
              let e = r.getBoundingClientRect();
              i = e.left != e.right && n.left > (e.left + e.right) / 2 ? 1 : -1;
            }
            return e.docView.posFromDOM(r, o, i);
          })(e, a, t));
        let c = e.docView.nearestDesc(a, !0);
        return { pos: s, inside: c ? c.posAtStart - c.border : -1 };
      }
      function U(e) {
        return e.top < e.bottom || e.left < e.right;
      }
      function q(e, t) {
        let n = e.getClientRects();
        if (n.length) {
          let e = n[t < 0 ? 0 : n.length - 1];
          if (U(e)) return e;
        }
        return Array.prototype.find.call(n, U) || e.getBoundingClientRect();
      }
      const G = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
      function X(e, t, n) {
        let {
            node: r,
            offset: o,
            atom: i,
          } = e.docView.domFromPos(t, n < 0 ? -1 : 1),
          s = j || O;
        if (3 == r.nodeType) {
          if (
            !s ||
            (!G.test(r.nodeValue) && (n < 0 ? o : o != r.nodeValue.length))
          ) {
            let e = o,
              t = o,
              i = n < 0 ? 1 : -1;
            return (
              n < 0 && !o
                ? (t++, (i = -1))
                : n >= 0 && o == r.nodeValue.length
                  ? (e--, (i = 1))
                  : n < 0
                    ? e--
                    : t++,
              Y(q(c(r, e, t), i), i < 0)
            );
          }
          {
            let e = q(c(r, o, o), n);
            if (
              O &&
              o &&
              /\s/.test(r.nodeValue[o - 1]) &&
              o < r.nodeValue.length
            ) {
              let t = q(c(r, o - 1, o - 1), -1);
              if (t.top == e.top) {
                let n = q(c(r, o, o + 1), -1);
                if (n.top != e.top) return Y(n, n.left < t.left);
              }
            }
            return e;
          }
        }
        if (!e.state.doc.resolve(t - (i || 0)).parent.inlineContent) {
          if (null == i && o && (n < 0 || o == d(r))) {
            let e = r.childNodes[o - 1];
            if (1 == e.nodeType) return Z(e.getBoundingClientRect(), !1);
          }
          if (null == i && o < d(r)) {
            let e = r.childNodes[o];
            if (1 == e.nodeType) return Z(e.getBoundingClientRect(), !0);
          }
          return Z(r.getBoundingClientRect(), n >= 0);
        }
        if (null == i && o && (n < 0 || o == d(r))) {
          let e = r.childNodes[o - 1],
            t =
              3 == e.nodeType
                ? c(e, d(e) - (s ? 0 : 1))
                : 1 != e.nodeType || ("BR" == e.nodeName && e.nextSibling)
                  ? null
                  : e;
          if (t) return Y(q(t, 1), !1);
        }
        if (null == i && o < d(r)) {
          let e = r.childNodes[o];
          for (; e.pmViewDesc && e.pmViewDesc.ignoreForCoords; )
            e = e.nextSibling;
          let t = e
            ? 3 == e.nodeType
              ? c(e, 0, s ? 0 : 1)
              : 1 == e.nodeType
                ? e
                : null
            : null;
          if (t) return Y(q(t, -1), !0);
        }
        return Y(q(3 == r.nodeType ? c(r) : r, -n), n >= 0);
      }
      function Y(e, t) {
        if (0 == e.width) return e;
        let n = t ? e.left : e.right;
        return { top: e.top, bottom: e.bottom, left: n, right: n };
      }
      function Z(e, t) {
        if (0 == e.height) return e;
        let n = t ? e.top : e.bottom;
        return { top: n, bottom: n, left: e.left, right: e.right };
      }
      function Q(e, t, n) {
        let r = e.state,
          o = e.root.activeElement;
        r != t && e.updateState(t), o != e.dom && e.focus();
        try {
          return n();
        } finally {
          r != t && e.updateState(r), o != e.dom && o && o.focus();
        }
      }
      const ee = /[\u0590-\u08ac]/;
      let te = null,
        ne = null,
        re = !1;
      function oe(e, t, n) {
        return te == t && ne == n
          ? re
          : ((te = t),
            (ne = n),
            (re =
              "up" == n || "down" == n
                ? (function (e, t, n) {
                    let r = t.selection,
                      o = "up" == n ? r.$from : r.$to;
                    return Q(e, t, () => {
                      let { node: t } = e.docView.domFromPos(
                        o.pos,
                        "up" == n ? -1 : 1,
                      );
                      for (;;) {
                        let n = e.docView.nearestDesc(t, !0);
                        if (!n) break;
                        if (n.node.isBlock) {
                          t = n.contentDOM || n.dom;
                          break;
                        }
                        t = n.dom.parentNode;
                      }
                      let r = X(e, o.pos, 1);
                      for (let e = t.firstChild; e; e = e.nextSibling) {
                        let t;
                        if (1 == e.nodeType) t = e.getClientRects();
                        else {
                          if (3 != e.nodeType) continue;
                          t = c(e, 0, e.nodeValue.length).getClientRects();
                        }
                        for (let e = 0; e < t.length; e++) {
                          let o = t[e];
                          if (
                            o.bottom > o.top + 1 &&
                            ("up" == n
                              ? r.top - o.top > 2 * (o.bottom - r.top)
                              : o.bottom - r.bottom > 2 * (r.bottom - o.top))
                          )
                            return !1;
                        }
                      }
                      return !0;
                    });
                  })(e, t, n)
                : (function (e, t, n) {
                    let { $head: r } = t.selection;
                    if (!r.parent.isTextblock) return !1;
                    let o = r.parentOffset,
                      i = !o,
                      s = o == r.parent.content.size,
                      l = e.domSelection();
                    return ee.test(r.parent.textContent) && l.modify
                      ? Q(e, t, () => {
                          let {
                              focusNode: t,
                              focusOffset: o,
                              anchorNode: i,
                              anchorOffset: s,
                            } = e.domSelectionRange(),
                            a = l.caretBidiLevel;
                          l.modify("move", n, "character");
                          let c = r.depth
                              ? e.docView.domAfterPos(r.before())
                              : e.dom,
                            { focusNode: h, focusOffset: p } =
                              e.domSelectionRange(),
                            u =
                              (h &&
                                !c.contains(
                                  1 == h.nodeType ? h : h.parentNode,
                                )) ||
                              (t == h && o == p);
                          try {
                            l.collapse(i, s),
                              t &&
                                (t != i || o != s) &&
                                l.extend &&
                                l.extend(t, o);
                          } catch (e) {}
                          return null != a && (l.caretBidiLevel = a), u;
                        })
                      : "left" == n || "backward" == n
                        ? i
                        : s;
                  })(e, t, n)));
      }
      class ie {
        constructor(e, t, n, r) {
          (this.parent = e),
            (this.children = t),
            (this.dom = n),
            (this.contentDOM = r),
            (this.dirty = 0),
            (n.pmViewDesc = this);
        }
        matchesWidget(e) {
          return !1;
        }
        matchesMark(e) {
          return !1;
        }
        matchesNode(e, t, n) {
          return !1;
        }
        matchesHack(e) {
          return !1;
        }
        parseRule() {
          return null;
        }
        stopEvent(e) {
          return !1;
        }
        get size() {
          let e = 0;
          for (let t = 0; t < this.children.length; t++)
            e += this.children[t].size;
          return e;
        }
        get border() {
          return 0;
        }
        destroy() {
          (this.parent = void 0),
            this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
          for (let e = 0; e < this.children.length; e++)
            this.children[e].destroy();
        }
        posBeforeChild(e) {
          for (let t = 0, n = this.posAtStart; ; t++) {
            let r = this.children[t];
            if (r == e) return n;
            n += r.size;
          }
        }
        get posBefore() {
          return this.parent.posBeforeChild(this);
        }
        get posAtStart() {
          return this.parent
            ? this.parent.posBeforeChild(this) + this.border
            : 0;
        }
        get posAfter() {
          return this.posBefore + this.size;
        }
        get posAtEnd() {
          return this.posAtStart + this.size - 2 * this.border;
        }
        localPosFromDOM(e, t, n) {
          if (
            this.contentDOM &&
            this.contentDOM.contains(1 == e.nodeType ? e : e.parentNode)
          ) {
            if (n < 0) {
              let n, r;
              if (e == this.contentDOM) n = e.childNodes[t - 1];
              else {
                for (; e.parentNode != this.contentDOM; ) e = e.parentNode;
                n = e.previousSibling;
              }
              for (; n && (!(r = n.pmViewDesc) || r.parent != this); )
                n = n.previousSibling;
              return n ? this.posBeforeChild(r) + r.size : this.posAtStart;
            }
            {
              let n, r;
              if (e == this.contentDOM) n = e.childNodes[t];
              else {
                for (; e.parentNode != this.contentDOM; ) e = e.parentNode;
                n = e.nextSibling;
              }
              for (; n && (!(r = n.pmViewDesc) || r.parent != this); )
                n = n.nextSibling;
              return n ? this.posBeforeChild(r) : this.posAtEnd;
            }
          }
          let r;
          if (e == this.dom && this.contentDOM) r = t > s(this.contentDOM);
          else if (
            this.contentDOM &&
            this.contentDOM != this.dom &&
            this.dom.contains(this.contentDOM)
          )
            r = 2 & e.compareDocumentPosition(this.contentDOM);
          else if (this.dom.firstChild) {
            if (0 == t)
              for (let t = e; ; t = t.parentNode) {
                if (t == this.dom) {
                  r = !1;
                  break;
                }
                if (t.previousSibling) break;
              }
            if (null == r && t == e.childNodes.length)
              for (let t = e; ; t = t.parentNode) {
                if (t == this.dom) {
                  r = !0;
                  break;
                }
                if (t.nextSibling) break;
              }
          }
          return (null == r ? n > 0 : r) ? this.posAtEnd : this.posAtStart;
        }
        nearestDesc(e, t = !1) {
          for (let n = !0, r = e; r; r = r.parentNode) {
            let o,
              i = this.getDesc(r);
            if (i && (!t || i.node)) {
              if (
                !n ||
                !(o = i.nodeDOM) ||
                (1 == o.nodeType
                  ? o.contains(1 == e.nodeType ? e : e.parentNode)
                  : o == e)
              )
                return i;
              n = !1;
            }
          }
        }
        getDesc(e) {
          let t = e.pmViewDesc;
          for (let e = t; e; e = e.parent) if (e == this) return t;
        }
        posFromDOM(e, t, n) {
          for (let r = e; r; r = r.parentNode) {
            let o = this.getDesc(r);
            if (o) return o.localPosFromDOM(e, t, n);
          }
          return -1;
        }
        descAt(e) {
          for (let t = 0, n = 0; t < this.children.length; t++) {
            let r = this.children[t],
              o = n + r.size;
            if (n == e && o != n) {
              for (; !r.border && r.children.length; ) r = r.children[0];
              return r;
            }
            if (e < o) return r.descAt(e - n - r.border);
            n = o;
          }
        }
        domFromPos(e, t) {
          if (!this.contentDOM)
            return { node: this.dom, offset: 0, atom: e + 1 };
          let n = 0,
            r = 0;
          for (let t = 0; n < this.children.length; n++) {
            let o = this.children[n],
              i = t + o.size;
            if (i > e || o instanceof ue) {
              r = e - t;
              break;
            }
            t = i;
          }
          if (r)
            return this.children[n].domFromPos(r - this.children[n].border, t);
          for (
            let e;
            n &&
            !(e = this.children[n - 1]).size &&
            e instanceof se &&
            e.side >= 0;
            n--
          );
          if (t <= 0) {
            let e,
              r = !0;
            for (
              ;
              (e = n ? this.children[n - 1] : null),
                e && e.dom.parentNode != this.contentDOM;
              n--, r = !1
            );
            return e && t && r && !e.border && !e.domAtom
              ? e.domFromPos(e.size, t)
              : { node: this.contentDOM, offset: e ? s(e.dom) + 1 : 0 };
          }
          {
            let e,
              r = !0;
            for (
              ;
              (e = n < this.children.length ? this.children[n] : null),
                e && e.dom.parentNode != this.contentDOM;
              n++, r = !1
            );
            return e && r && !e.border && !e.domAtom
              ? e.domFromPos(0, t)
              : {
                  node: this.contentDOM,
                  offset: e ? s(e.dom) : this.contentDOM.childNodes.length,
                };
          }
        }
        parseRange(e, t, n = 0) {
          if (0 == this.children.length)
            return {
              node: this.contentDOM,
              from: e,
              to: t,
              fromOffset: 0,
              toOffset: this.contentDOM.childNodes.length,
            };
          let r = -1,
            o = -1;
          for (let i = n, l = 0; ; l++) {
            let n = this.children[l],
              a = i + n.size;
            if (-1 == r && e <= a) {
              let o = i + n.border;
              if (
                e >= o &&
                t <= a - n.border &&
                n.node &&
                n.contentDOM &&
                this.contentDOM.contains(n.contentDOM)
              )
                return n.parseRange(e, t, o);
              e = i;
              for (let t = l; t > 0; t--) {
                let n = this.children[t - 1];
                if (
                  n.size &&
                  n.dom.parentNode == this.contentDOM &&
                  !n.emptyChildAt(1)
                ) {
                  r = s(n.dom) + 1;
                  break;
                }
                e -= n.size;
              }
              -1 == r && (r = 0);
            }
            if (r > -1 && (a > t || l == this.children.length - 1)) {
              t = a;
              for (let e = l + 1; e < this.children.length; e++) {
                let n = this.children[e];
                if (
                  n.size &&
                  n.dom.parentNode == this.contentDOM &&
                  !n.emptyChildAt(-1)
                ) {
                  o = s(n.dom);
                  break;
                }
                t += n.size;
              }
              -1 == o && (o = this.contentDOM.childNodes.length);
              break;
            }
            i = a;
          }
          return {
            node: this.contentDOM,
            from: e,
            to: t,
            fromOffset: r,
            toOffset: o,
          };
        }
        emptyChildAt(e) {
          if (this.border || !this.contentDOM || !this.children.length)
            return !1;
          let t = this.children[e < 0 ? 0 : this.children.length - 1];
          return 0 == t.size || t.emptyChildAt(e);
        }
        domAfterPos(e) {
          let { node: t, offset: n } = this.domFromPos(e, 0);
          if (1 != t.nodeType || n == t.childNodes.length)
            throw new RangeError("No node after pos " + e);
          return t.childNodes[n];
        }
        setSelection(e, t, n, r = !1) {
          let o = Math.min(e, t),
            i = Math.max(e, t);
          for (let s = 0, l = 0; s < this.children.length; s++) {
            let a = this.children[s],
              c = l + a.size;
            if (o > l && i < c)
              return a.setSelection(e - l - a.border, t - l - a.border, n, r);
            l = c;
          }
          let l = this.domFromPos(e, e ? -1 : 1),
            a = t == e ? l : this.domFromPos(t, t ? -1 : 1),
            c = n.getSelection(),
            p = !1;
          if ((O || N) && e == t) {
            let { node: e, offset: t } = l;
            if (3 == e.nodeType) {
              if (
                ((p = !(!t || "\n" != e.nodeValue[t - 1])),
                p && t == e.nodeValue.length)
              )
                for (let t, n = e; n; n = n.parentNode) {
                  if ((t = n.nextSibling)) {
                    "BR" == t.nodeName &&
                      (l = a = { node: t.parentNode, offset: s(t) + 1 });
                    break;
                  }
                  let e = n.pmViewDesc;
                  if (e && e.node && e.node.isBlock) break;
                }
            } else {
              let n = e.childNodes[t - 1];
              p = n && ("BR" == n.nodeName || "false" == n.contentEditable);
            }
          }
          if (
            O &&
            c.focusNode &&
            c.focusNode != a.node &&
            1 == c.focusNode.nodeType
          ) {
            let e = c.focusNode.childNodes[c.focusOffset];
            e && "false" == e.contentEditable && (r = !0);
          }
          if (
            !(r || (p && N)) &&
            h(l.node, l.offset, c.anchorNode, c.anchorOffset) &&
            h(a.node, a.offset, c.focusNode, c.focusOffset)
          )
            return;
          let u = !1;
          if ((c.extend || e == t) && !p) {
            c.collapse(l.node, l.offset);
            try {
              e != t && c.extend(a.node, a.offset), (u = !0);
            } catch (e) {}
          }
          if (!u) {
            if (e > t) {
              let e = l;
              (l = a), (a = e);
            }
            let n = document.createRange();
            n.setEnd(a.node, a.offset),
              n.setStart(l.node, l.offset),
              c.removeAllRanges(),
              c.addRange(n);
          }
        }
        ignoreMutation(e) {
          return !this.contentDOM && "selection" != e.type;
        }
        get contentLost() {
          return (
            this.contentDOM &&
            this.contentDOM != this.dom &&
            !this.dom.contains(this.contentDOM)
          );
        }
        markDirty(e, t) {
          for (let n = 0, r = 0; r < this.children.length; r++) {
            let o = this.children[r],
              i = n + o.size;
            if (n == i ? e <= i && t >= n : e < i && t > n) {
              let r = n + o.border,
                s = i - o.border;
              if (e >= r && t <= s)
                return (
                  (this.dirty = e == n || t == i ? 2 : 1),
                  void (e != r ||
                  t != s ||
                  (!o.contentLost && o.dom.parentNode == this.contentDOM)
                    ? o.markDirty(e - r, t - r)
                    : (o.dirty = 3))
                );
              o.dirty =
                o.dom != o.contentDOM ||
                o.dom.parentNode != this.contentDOM ||
                o.children.length
                  ? 3
                  : 2;
            }
            n = i;
          }
          this.dirty = 2;
        }
        markParentsDirty() {
          let e = 1;
          for (let t = this.parent; t; t = t.parent, e++) {
            let n = 1 == e ? 2 : 1;
            t.dirty < n && (t.dirty = n);
          }
        }
        get domAtom() {
          return !1;
        }
        get ignoreForCoords() {
          return !1;
        }
        isText(e) {
          return !1;
        }
      }
      class se extends ie {
        constructor(e, t, n, r) {
          let o,
            i = t.type.toDOM;
          if (
            ("function" == typeof i &&
              (i = i(n, () =>
                o ? (o.parent ? o.parent.posBeforeChild(o) : void 0) : r,
              )),
            !t.type.spec.raw)
          ) {
            if (1 != i.nodeType) {
              let e = document.createElement("span");
              e.appendChild(i), (i = e);
            }
            (i.contentEditable = "false"),
              i.classList.add("ProseMirror-widget");
          }
          super(e, [], i, null),
            (this.widget = t),
            (this.widget = t),
            (o = this);
        }
        matchesWidget(e) {
          return 0 == this.dirty && e.type.eq(this.widget.type);
        }
        parseRule() {
          return { ignore: !0 };
        }
        stopEvent(e) {
          let t = this.widget.spec.stopEvent;
          return !!t && t(e);
        }
        ignoreMutation(e) {
          return "selection" != e.type || this.widget.spec.ignoreSelection;
        }
        destroy() {
          this.widget.type.destroy(this.dom), super.destroy();
        }
        get domAtom() {
          return !0;
        }
        get side() {
          return this.widget.type.side;
        }
      }
      class le extends ie {
        constructor(e, t, n, r) {
          super(e, [], t, null), (this.textDOM = n), (this.text = r);
        }
        get size() {
          return this.text.length;
        }
        localPosFromDOM(e, t) {
          return e != this.textDOM
            ? this.posAtStart + (t ? this.size : 0)
            : this.posAtStart + t;
        }
        domFromPos(e) {
          return { node: this.textDOM, offset: e };
        }
        ignoreMutation(e) {
          return "characterData" === e.type && e.target.nodeValue == e.oldValue;
        }
      }
      class ae extends ie {
        constructor(e, t, n, r) {
          super(e, [], n, r), (this.mark = t);
        }
        static create(e, t, n, r) {
          let i = r.nodeViews[t.type.name],
            s = i && i(t, r, n);
          return (
            (s && s.dom) ||
              (s = o.ZF.renderSpec(document, t.type.spec.toDOM(t, n))),
            new ae(e, t, s.dom, s.contentDOM || s.dom)
          );
        }
        parseRule() {
          return 3 & this.dirty || this.mark.type.spec.reparseInView
            ? null
            : {
                mark: this.mark.type.name,
                attrs: this.mark.attrs,
                contentElement: this.contentDOM,
              };
        }
        matchesMark(e) {
          return 3 != this.dirty && this.mark.eq(e);
        }
        markDirty(e, t) {
          if ((super.markDirty(e, t), 0 != this.dirty)) {
            let e = this.parent;
            for (; !e.node; ) e = e.parent;
            e.dirty < this.dirty && (e.dirty = this.dirty), (this.dirty = 0);
          }
        }
        slice(e, t, n) {
          let r = ae.create(this.parent, this.mark, !0, n),
            o = this.children,
            i = this.size;
          t < i && (o = Oe(o, t, i, n)), e > 0 && (o = Oe(o, 0, e, n));
          for (let e = 0; e < o.length; e++) o[e].parent = r;
          return (r.children = o), r;
        }
      }
      class ce extends ie {
        constructor(e, t, n, r, o, i, s, l, a) {
          super(e, [], o, i),
            (this.node = t),
            (this.outerDeco = n),
            (this.innerDeco = r),
            (this.nodeDOM = s);
        }
        static create(e, t, n, r, i, s) {
          let l,
            a = i.nodeViews[t.type.name],
            c =
              a &&
              a(
                t,
                i,
                () =>
                  l ? (l.parent ? l.parent.posBeforeChild(l) : void 0) : s,
                n,
                r,
              ),
            h = c && c.dom,
            p = c && c.contentDOM;
          if (t.isText)
            if (h) {
              if (3 != h.nodeType)
                throw new RangeError(
                  "Text must be rendered as a DOM text node",
                );
            } else h = document.createTextNode(t.text);
          else
            h ||
              ({ dom: h, contentDOM: p } = o.ZF.renderSpec(
                document,
                t.type.spec.toDOM(t),
              ));
          p ||
            t.isText ||
            "BR" == h.nodeName ||
            (h.hasAttribute("contenteditable") || (h.contentEditable = "false"),
            t.type.spec.draggable && (h.draggable = !0));
          let u = h;
          return (
            (h = we(h, n, t)),
            c
              ? (l = new de(e, t, n, r, h, p || null, u, c, i, s + 1))
              : t.isText
                ? new pe(e, t, n, r, h, u, i)
                : new ce(e, t, n, r, h, p || null, u, i, s + 1)
          );
        }
        parseRule() {
          if (this.node.type.spec.reparseInView) return null;
          let e = { node: this.node.type.name, attrs: this.node.attrs };
          if (
            ("pre" == this.node.type.whitespace &&
              (e.preserveWhitespace = "full"),
            this.contentDOM)
          )
            if (this.contentLost) {
              for (let t = this.children.length - 1; t >= 0; t--) {
                let n = this.children[t];
                if (this.dom.contains(n.dom.parentNode)) {
                  e.contentElement = n.dom.parentNode;
                  break;
                }
              }
              e.contentElement || (e.getContent = () => o.FK.empty);
            } else e.contentElement = this.contentDOM;
          else e.getContent = () => this.node.content;
          return e;
        }
        matchesNode(e, t, n) {
          return (
            0 == this.dirty &&
            e.eq(this.node) &&
            xe(t, this.outerDeco) &&
            n.eq(this.innerDeco)
          );
        }
        get size() {
          return this.node.nodeSize;
        }
        get border() {
          return this.node.isLeaf ? 0 : 1;
        }
        updateChildren(e, t) {
          let n = this.node.inlineContent,
            r = t,
            i = e.composing ? this.localCompositionInfo(e, t) : null,
            s = i && i.pos > -1 ? i : null,
            l = i && i.pos < 0,
            a = new ke(this, s && s.node, e);
          !(function (e, t, n, r) {
            let o = t.locals(e),
              i = 0;
            if (0 == o.length) {
              for (let n = 0; n < e.childCount; n++) {
                let s = e.child(n);
                r(s, o, t.forChild(i, s), n), (i += s.nodeSize);
              }
              return;
            }
            let s = 0,
              l = [],
              a = null;
            for (let c = 0; ; ) {
              let h, p, u, d;
              for (; s < o.length && o[s].to == i; ) {
                let e = o[s++];
                e.widget && (h ? (p || (p = [h])).push(e) : (h = e));
              }
              if (h)
                if (p) {
                  p.sort(Ce);
                  for (let e = 0; e < p.length; e++) n(p[e], c, !!a);
                } else n(h, c, !!a);
              if (a) (d = -1), (u = a), (a = null);
              else {
                if (!(c < e.childCount)) break;
                (d = c), (u = e.child(c++));
              }
              for (let e = 0; e < l.length; e++)
                l[e].to <= i && l.splice(e--, 1);
              for (; s < o.length && o[s].from <= i && o[s].to > i; )
                l.push(o[s++]);
              let f = i + u.nodeSize;
              if (u.isText) {
                let e = f;
                s < o.length && o[s].from < e && (e = o[s].from);
                for (let t = 0; t < l.length; t++) l[t].to < e && (e = l[t].to);
                e < f &&
                  ((a = u.cut(e - i)),
                  (u = u.cut(0, e - i)),
                  (f = e),
                  (d = -1));
              } else for (; s < o.length && o[s].to < f; ) s++;
              r(
                u,
                u.isInline && !u.isLeaf
                  ? l.filter((e) => !e.inline)
                  : l.slice(),
                t.forChild(i, u),
                d,
              ),
                (i = f);
            }
          })(
            this.node,
            this.innerDeco,
            (t, i, s) => {
              t.spec.marks
                ? a.syncToMarks(t.spec.marks, n, e)
                : t.type.side >= 0 &&
                  !s &&
                  a.syncToMarks(
                    i == this.node.childCount
                      ? o.CU.none
                      : this.node.child(i).marks,
                    n,
                    e,
                  ),
                a.placeWidget(t, e, r);
            },
            (t, o, s, c) => {
              let h;
              a.syncToMarks(t.marks, n, e),
                a.findNodeMatch(t, o, s, c) ||
                  (l &&
                    e.state.selection.from > r &&
                    e.state.selection.to < r + t.nodeSize &&
                    (h = a.findIndexWithChild(i.node)) > -1 &&
                    a.updateNodeAt(t, o, s, h, e)) ||
                  a.updateNextNode(t, o, s, e, c, r) ||
                  a.addNode(t, o, s, e, r),
                (r += t.nodeSize);
            },
          ),
            a.syncToMarks([], n, e),
            this.node.isTextblock && a.addTextblockHacks(),
            a.destroyRest(),
            (a.changed || 2 == this.dirty) &&
              (s && this.protectLocalComposition(e, s),
              fe(this.contentDOM, this.children, e),
              T &&
                (function (e) {
                  if ("UL" == e.nodeName || "OL" == e.nodeName) {
                    let t = e.style.cssText;
                    (e.style.cssText = t + "; list-style: square !important"),
                      window.getComputedStyle(e).listStyle,
                      (e.style.cssText = t);
                  }
                })(this.dom));
        }
        localCompositionInfo(e, t) {
          let { from: n, to: o } = e.state.selection;
          if (
            !(e.state.selection instanceof r.U3) ||
            n < t ||
            o > t + this.node.content.size
          )
            return null;
          let i = e.input.compositionNode;
          if (!i || !this.dom.contains(i.parentNode)) return null;
          if (this.node.inlineContent) {
            let e = i.nodeValue,
              r = (function (e, t, n, r) {
                for (let o = 0, i = 0; o < e.childCount && i <= r; ) {
                  let s = e.child(o++),
                    l = i;
                  if (((i += s.nodeSize), !s.isText)) continue;
                  let a = s.text;
                  for (; o < e.childCount; ) {
                    let t = e.child(o++);
                    if (((i += t.nodeSize), !t.isText)) break;
                    a += t.text;
                  }
                  if (i >= n) {
                    if (i >= r && a.slice(r - t.length - l, r - l) == t)
                      return r - t.length;
                    let e = l < r ? a.lastIndexOf(t, r - l - 1) : -1;
                    if (e >= 0 && e + t.length + l >= n) return l + e;
                    if (
                      n == r &&
                      a.length >= r + t.length - l &&
                      a.slice(r - l, r - l + t.length) == t
                    )
                      return r;
                  }
                }
                return -1;
              })(this.node.content, e, n - t, o - t);
            return r < 0 ? null : { node: i, pos: r, text: e };
          }
          return { node: i, pos: -1, text: "" };
        }
        protectLocalComposition(e, { node: t, pos: n, text: r }) {
          if (this.getDesc(t)) return;
          let o = t;
          for (; o.parentNode != this.contentDOM; o = o.parentNode) {
            for (; o.previousSibling; )
              o.parentNode.removeChild(o.previousSibling);
            for (; o.nextSibling; ) o.parentNode.removeChild(o.nextSibling);
            o.pmViewDesc && (o.pmViewDesc = void 0);
          }
          let i = new le(this, o, t, r);
          e.input.compositionNodes.push(i),
            (this.children = Oe(this.children, n, n + r.length, e, i));
        }
        update(e, t, n, r) {
          return (
            !(3 == this.dirty || !e.sameMarkup(this.node)) &&
            (this.updateInner(e, t, n, r), !0)
          );
        }
        updateInner(e, t, n, r) {
          this.updateOuterDeco(t),
            (this.node = e),
            (this.innerDeco = n),
            this.contentDOM && this.updateChildren(r, this.posAtStart),
            (this.dirty = 0);
        }
        updateOuterDeco(e) {
          if (xe(e, this.outerDeco)) return;
          let t = 1 != this.nodeDOM.nodeType,
            n = this.dom;
          (this.dom = ye(
            this.dom,
            this.nodeDOM,
            be(this.outerDeco, this.node, t),
            be(e, this.node, t),
          )),
            this.dom != n &&
              ((n.pmViewDesc = void 0), (this.dom.pmViewDesc = this)),
            (this.outerDeco = e);
        }
        selectNode() {
          1 == this.nodeDOM.nodeType &&
            this.nodeDOM.classList.add("ProseMirror-selectednode"),
            (!this.contentDOM && this.node.type.spec.draggable) ||
              (this.dom.draggable = !0);
        }
        deselectNode() {
          1 == this.nodeDOM.nodeType &&
            this.nodeDOM.classList.remove("ProseMirror-selectednode"),
            (!this.contentDOM && this.node.type.spec.draggable) ||
              this.dom.removeAttribute("draggable");
        }
        get domAtom() {
          return this.node.isAtom;
        }
      }
      function he(e, t, n, r, o) {
        we(r, t, e);
        let i = new ce(void 0, e, t, n, r, r, r, o, 0);
        return i.contentDOM && i.updateChildren(o, 0), i;
      }
      class pe extends ce {
        constructor(e, t, n, r, o, i, s) {
          super(e, t, n, r, o, null, i, s, 0);
        }
        parseRule() {
          let e = this.nodeDOM.parentNode;
          for (; e && e != this.dom && !e.pmIsDeco; ) e = e.parentNode;
          return { skip: e || !0 };
        }
        update(e, t, n, r) {
          return (
            !(
              3 == this.dirty ||
              (0 != this.dirty && !this.inParent()) ||
              !e.sameMarkup(this.node)
            ) &&
            (this.updateOuterDeco(t),
            (0 == this.dirty && e.text == this.node.text) ||
              e.text == this.nodeDOM.nodeValue ||
              ((this.nodeDOM.nodeValue = e.text),
              r.trackWrites == this.nodeDOM && (r.trackWrites = null)),
            (this.node = e),
            (this.dirty = 0),
            !0)
          );
        }
        inParent() {
          let e = this.parent.contentDOM;
          for (let t = this.nodeDOM; t; t = t.parentNode) if (t == e) return !0;
          return !1;
        }
        domFromPos(e) {
          return { node: this.nodeDOM, offset: e };
        }
        localPosFromDOM(e, t, n) {
          return e == this.nodeDOM
            ? this.posAtStart + Math.min(t, this.node.text.length)
            : super.localPosFromDOM(e, t, n);
        }
        ignoreMutation(e) {
          return "characterData" != e.type && "selection" != e.type;
        }
        slice(e, t, n) {
          let r = this.node.cut(e, t),
            o = document.createTextNode(r.text);
          return new pe(
            this.parent,
            r,
            this.outerDeco,
            this.innerDeco,
            o,
            o,
            n,
          );
        }
        markDirty(e, t) {
          super.markDirty(e, t),
            this.dom == this.nodeDOM ||
              (0 != e && t != this.nodeDOM.nodeValue.length) ||
              (this.dirty = 3);
        }
        get domAtom() {
          return !1;
        }
        isText(e) {
          return this.node.text == e;
        }
      }
      class ue extends ie {
        parseRule() {
          return { ignore: !0 };
        }
        matchesHack(e) {
          return 0 == this.dirty && this.dom.nodeName == e;
        }
        get domAtom() {
          return !0;
        }
        get ignoreForCoords() {
          return "IMG" == this.dom.nodeName;
        }
      }
      class de extends ce {
        constructor(e, t, n, r, o, i, s, l, a, c) {
          super(e, t, n, r, o, i, s, a, c), (this.spec = l);
        }
        update(e, t, n, r) {
          if (3 == this.dirty) return !1;
          if (this.spec.update) {
            let o = this.spec.update(e, t, n);
            return o && this.updateInner(e, t, n, r), o;
          }
          return !(!this.contentDOM && !e.isLeaf) && super.update(e, t, n, r);
        }
        selectNode() {
          this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
        }
        deselectNode() {
          this.spec.deselectNode
            ? this.spec.deselectNode()
            : super.deselectNode();
        }
        setSelection(e, t, n, r) {
          this.spec.setSelection
            ? this.spec.setSelection(e, t, n)
            : super.setSelection(e, t, n, r);
        }
        destroy() {
          this.spec.destroy && this.spec.destroy(), super.destroy();
        }
        stopEvent(e) {
          return !!this.spec.stopEvent && this.spec.stopEvent(e);
        }
        ignoreMutation(e) {
          return this.spec.ignoreMutation
            ? this.spec.ignoreMutation(e)
            : super.ignoreMutation(e);
        }
      }
      function fe(e, t, n) {
        let r = e.firstChild,
          o = !1;
        for (let i = 0; i < t.length; i++) {
          let s = t[i],
            l = s.dom;
          if (l.parentNode == e) {
            for (; l != r; ) (r = Se(r)), (o = !0);
            r = r.nextSibling;
          } else (o = !0), e.insertBefore(l, r);
          if (s instanceof ae) {
            let t = r ? r.previousSibling : e.lastChild;
            fe(s.contentDOM, s.children, n),
              (r = t ? t.nextSibling : e.firstChild);
          }
        }
        for (; r; ) (r = Se(r)), (o = !0);
        o && n.trackWrites == e && (n.trackWrites = null);
      }
      const me = function (e) {
        e && (this.nodeName = e);
      };
      me.prototype = Object.create(null);
      const ge = [new me()];
      function be(e, t, n) {
        if (0 == e.length) return ge;
        let r = n ? ge[0] : new me(),
          o = [r];
        for (let i = 0; i < e.length; i++) {
          let s = e[i].type.attrs;
          if (s) {
            s.nodeName && o.push((r = new me(s.nodeName)));
            for (let e in s) {
              let i = s[e];
              null != i &&
                (n &&
                  1 == o.length &&
                  o.push((r = new me(t.isInline ? "span" : "div"))),
                "class" == e
                  ? (r.class = (r.class ? r.class + " " : "") + i)
                  : "style" == e
                    ? (r.style = (r.style ? r.style + ";" : "") + i)
                    : "nodeName" != e && (r[e] = i));
            }
          }
        }
        return o;
      }
      function ye(e, t, n, r) {
        if (n == ge && r == ge) return t;
        let o = t;
        for (let t = 0; t < r.length; t++) {
          let i = r[t],
            s = n[t];
          if (t) {
            let t;
            (s &&
              s.nodeName == i.nodeName &&
              o != e &&
              (t = o.parentNode) &&
              t.nodeName.toLowerCase() == i.nodeName) ||
              ((t = document.createElement(i.nodeName)),
              (t.pmIsDeco = !0),
              t.appendChild(o),
              (s = ge[0])),
              (o = t);
          }
          ve(o, s || ge[0], i);
        }
        return o;
      }
      function ve(e, t, n) {
        for (let r in t)
          "class" == r ||
            "style" == r ||
            "nodeName" == r ||
            r in n ||
            e.removeAttribute(r);
        for (let r in n)
          "class" != r &&
            "style" != r &&
            "nodeName" != r &&
            n[r] != t[r] &&
            e.setAttribute(r, n[r]);
        if (t.class != n.class) {
          let r = t.class ? t.class.split(" ").filter(Boolean) : [],
            o = n.class ? n.class.split(" ").filter(Boolean) : [];
          for (let t = 0; t < r.length; t++)
            -1 == o.indexOf(r[t]) && e.classList.remove(r[t]);
          for (let t = 0; t < o.length; t++)
            -1 == r.indexOf(o[t]) && e.classList.add(o[t]);
          0 == e.classList.length && e.removeAttribute("class");
        }
        if (t.style != n.style) {
          if (t.style) {
            let n,
              r =
                /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g;
            for (; (n = r.exec(t.style)); ) e.style.removeProperty(n[1]);
          }
          n.style && (e.style.cssText += n.style);
        }
      }
      function we(e, t, n) {
        return ye(e, e, ge, be(t, n, 1 != e.nodeType));
      }
      function xe(e, t) {
        if (e.length != t.length) return !1;
        for (let n = 0; n < e.length; n++)
          if (!e[n].type.eq(t[n].type)) return !1;
        return !0;
      }
      function Se(e) {
        let t = e.nextSibling;
        return e.parentNode.removeChild(e), t;
      }
      class ke {
        constructor(e, t, n) {
          (this.lock = t),
            (this.view = n),
            (this.index = 0),
            (this.stack = []),
            (this.changed = !1),
            (this.top = e),
            (this.preMatch = (function (e, t) {
              let n = t,
                r = n.children.length,
                o = e.childCount,
                i = new Map(),
                s = [];
              e: for (; o > 0; ) {
                let l;
                for (;;)
                  if (r) {
                    let e = n.children[r - 1];
                    if (!(e instanceof ae)) {
                      (l = e), r--;
                      break;
                    }
                    (n = e), (r = e.children.length);
                  } else {
                    if (n == t) break e;
                    (r = n.parent.children.indexOf(n)), (n = n.parent);
                  }
                let a = l.node;
                if (a) {
                  if (a != e.child(o - 1)) break;
                  --o, i.set(l, o), s.push(l);
                }
              }
              return { index: o, matched: i, matches: s.reverse() };
            })(e.node.content, e));
        }
        destroyBetween(e, t) {
          if (e != t) {
            for (let n = e; n < t; n++) this.top.children[n].destroy();
            this.top.children.splice(e, t - e), (this.changed = !0);
          }
        }
        destroyRest() {
          this.destroyBetween(this.index, this.top.children.length);
        }
        syncToMarks(e, t, n) {
          let r = 0,
            o = this.stack.length >> 1,
            i = Math.min(o, e.length);
          for (
            ;
            r < i &&
            (r == o - 1 ? this.top : this.stack[(r + 1) << 1]).matchesMark(
              e[r],
            ) &&
            !1 !== e[r].type.spec.spanning;
          )
            r++;
          for (; r < o; )
            this.destroyRest(),
              (this.top.dirty = 0),
              (this.index = this.stack.pop()),
              (this.top = this.stack.pop()),
              o--;
          for (; o < e.length; ) {
            this.stack.push(this.top, this.index + 1);
            let r = -1;
            for (
              let t = this.index;
              t < Math.min(this.index + 3, this.top.children.length);
              t++
            ) {
              let n = this.top.children[t];
              if (n.matchesMark(e[o]) && !this.isLocked(n.dom)) {
                r = t;
                break;
              }
            }
            if (r > -1)
              r > this.index &&
                ((this.changed = !0), this.destroyBetween(this.index, r)),
                (this.top = this.top.children[this.index]);
            else {
              let r = ae.create(this.top, e[o], t, n);
              this.top.children.splice(this.index, 0, r),
                (this.top = r),
                (this.changed = !0);
            }
            (this.index = 0), o++;
          }
        }
        findNodeMatch(e, t, n, r) {
          let o,
            i = -1;
          if (
            r >= this.preMatch.index &&
            (o = this.preMatch.matches[r - this.preMatch.index]).parent ==
              this.top &&
            o.matchesNode(e, t, n)
          )
            i = this.top.children.indexOf(o, this.index);
          else
            for (
              let r = this.index, o = Math.min(this.top.children.length, r + 5);
              r < o;
              r++
            ) {
              let o = this.top.children[r];
              if (o.matchesNode(e, t, n) && !this.preMatch.matched.has(o)) {
                i = r;
                break;
              }
            }
          return (
            !(i < 0) && (this.destroyBetween(this.index, i), this.index++, !0)
          );
        }
        updateNodeAt(e, t, n, r, o) {
          let i = this.top.children[r];
          return (
            3 == i.dirty && i.dom == i.contentDOM && (i.dirty = 2),
            !!i.update(e, t, n, o) &&
              (this.destroyBetween(this.index, r), this.index++, !0)
          );
        }
        findIndexWithChild(e) {
          for (;;) {
            let t = e.parentNode;
            if (!t) return -1;
            if (t == this.top.contentDOM) {
              let t = e.pmViewDesc;
              if (t)
                for (let e = this.index; e < this.top.children.length; e++)
                  if (this.top.children[e] == t) return e;
              return -1;
            }
            e = t;
          }
        }
        updateNextNode(e, t, n, r, o, i) {
          for (let s = this.index; s < this.top.children.length; s++) {
            let l = this.top.children[s];
            if (l instanceof ce) {
              let a = this.preMatch.matched.get(l);
              if (null != a && a != o) return !1;
              let c,
                h = l.dom,
                p =
                  this.isLocked(h) &&
                  !(
                    e.isText &&
                    l.node &&
                    l.node.isText &&
                    l.nodeDOM.nodeValue == e.text &&
                    3 != l.dirty &&
                    xe(t, l.outerDeco)
                  );
              if (!p && l.update(e, t, n, r))
                return (
                  this.destroyBetween(this.index, s),
                  l.dom != h && (this.changed = !0),
                  this.index++,
                  !0
                );
              if (!p && (c = this.recreateWrapper(l, e, t, n, r, i)))
                return (
                  (this.top.children[this.index] = c),
                  c.contentDOM &&
                    ((c.dirty = 2), c.updateChildren(r, i + 1), (c.dirty = 0)),
                  (this.changed = !0),
                  this.index++,
                  !0
                );
              break;
            }
          }
          return !1;
        }
        recreateWrapper(e, t, n, r, o, i) {
          if (
            e.dirty ||
            t.isAtom ||
            !e.children.length ||
            !e.node.content.eq(t.content)
          )
            return null;
          let s = ce.create(this.top, t, n, r, o, i);
          if (s.contentDOM) {
            (s.children = e.children), (e.children = []);
            for (let e of s.children) e.parent = s;
          }
          return e.destroy(), s;
        }
        addNode(e, t, n, r, o) {
          let i = ce.create(this.top, e, t, n, r, o);
          i.contentDOM && i.updateChildren(r, o + 1),
            this.top.children.splice(this.index++, 0, i),
            (this.changed = !0);
        }
        placeWidget(e, t, n) {
          let r =
            this.index < this.top.children.length
              ? this.top.children[this.index]
              : null;
          if (
            !r ||
            !r.matchesWidget(e) ||
            (e != r.widget && r.widget.type.toDOM.parentNode)
          ) {
            let r = new se(this.top, e, t, n);
            this.top.children.splice(this.index++, 0, r), (this.changed = !0);
          } else this.index++;
        }
        addTextblockHacks() {
          let e = this.top.children[this.index - 1],
            t = this.top;
          for (; e instanceof ae; )
            (t = e), (e = t.children[t.children.length - 1]);
          (!e ||
            !(e instanceof pe) ||
            /\n$/.test(e.node.text) ||
            (this.view.requiresGeckoHackNode && /\s$/.test(e.node.text))) &&
            ((N || E) &&
              e &&
              "false" == e.dom.contentEditable &&
              this.addHackNode("IMG", t),
            this.addHackNode("BR", this.top));
        }
        addHackNode(e, t) {
          if (
            t == this.top &&
            this.index < t.children.length &&
            t.children[this.index].matchesHack(e)
          )
            this.index++;
          else {
            let n = document.createElement(e);
            "IMG" == e &&
              ((n.className = "ProseMirror-separator"), (n.alt = "")),
              "BR" == e && (n.className = "ProseMirror-trailingBreak");
            let r = new ue(this.top, [], n, null);
            t != this.top
              ? t.children.push(r)
              : t.children.splice(this.index++, 0, r),
              (this.changed = !0);
          }
        }
        isLocked(e) {
          return (
            this.lock &&
            (e == this.lock ||
              (1 == e.nodeType && e.contains(this.lock.parentNode)))
          );
        }
      }
      function Ce(e, t) {
        return e.type.side - t.type.side;
      }
      function Oe(e, t, n, r, o) {
        let i = [];
        for (let s = 0, l = 0; s < e.length; s++) {
          let a = e[s],
            c = l,
            h = (l += a.size);
          c >= n || h <= t
            ? i.push(a)
            : (c < t && i.push(a.slice(0, t - c, r)),
              o && (i.push(o), (o = void 0)),
              h > n && i.push(a.slice(n - c, a.size, r)));
        }
        return i;
      }
      function Me(e, t = null) {
        let n = e.domSelectionRange(),
          o = e.state.doc;
        if (!n.focusNode) return null;
        let i = e.docView.nearestDesc(n.focusNode),
          l = i && 0 == i.size,
          a = e.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
        if (a < 0) return null;
        let c,
          h,
          p = o.resolve(a);
        if (m(n)) {
          for (c = p; i && !i.node; ) i = i.parent;
          let e = i.node;
          if (
            i &&
            e.isAtom &&
            r.nh.isSelectable(e) &&
            i.parent &&
            (!e.isInline ||
              !(function (e, t, n) {
                for (let r = 0 == t, o = t == d(e); r || o; ) {
                  if (e == n) return !0;
                  let t = s(e);
                  if (!(e = e.parentNode)) return !1;
                  (r = r && 0 == t), (o = o && t == d(e));
                }
              })(n.focusNode, n.focusOffset, i.dom))
          ) {
            let e = i.posBefore;
            h = new r.nh(a == e ? p : o.resolve(e));
          }
        } else {
          let t = e.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
          if (t < 0) return null;
          c = o.resolve(t);
        }
        if (!h) {
          h = Fe(
            e,
            c,
            p,
            "pointer" == t || (e.state.selection.head < p.pos && !l) ? 1 : -1,
          );
        }
        return h;
      }
      function Ee(e) {
        return e.editable
          ? e.hasFocus()
          : Be(e) &&
              document.activeElement &&
              document.activeElement.contains(e.dom);
      }
      function Ae(e, t = !1) {
        let n = e.state.selection;
        if ((Re(e, n), Ee(e))) {
          if (!t && e.input.mouseDown && e.input.mouseDown.allowDefault && E) {
            let t = e.domSelectionRange(),
              n = e.domObserver.currentSelection;
            if (
              t.anchorNode &&
              n.anchorNode &&
              h(t.anchorNode, t.anchorOffset, n.anchorNode, n.anchorOffset)
            )
              return (
                (e.input.mouseDown.delayedSelectionSync = !0),
                void e.domObserver.setCurSelection()
              );
          }
          if ((e.domObserver.disconnectSelection(), e.cursorWrapper))
            !(function (e) {
              let t = e.domSelection(),
                n = document.createRange(),
                r = e.cursorWrapper.dom,
                o = "IMG" == r.nodeName;
              o ? n.setEnd(r.parentNode, s(r) + 1) : n.setEnd(r, 0);
              n.collapse(!1),
                t.removeAllRanges(),
                t.addRange(n),
                !o &&
                  !e.state.selection.visible &&
                  k &&
                  C <= 11 &&
                  ((r.disabled = !0), (r.disabled = !1));
            })(e);
          else {
            let o,
              i,
              { anchor: s, head: l } = n;
            !Ne ||
              n instanceof r.U3 ||
              (n.$from.parent.inlineContent || (o = Te(e, n.from)),
              n.empty || n.$from.parent.inlineContent || (i = Te(e, n.to))),
              e.docView.setSelection(s, l, e.root, t),
              Ne && (o && De(o), i && De(i)),
              n.visible
                ? e.dom.classList.remove("ProseMirror-hideselection")
                : (e.dom.classList.add("ProseMirror-hideselection"),
                  "onselectionchange" in document &&
                    (function (e) {
                      let t = e.dom.ownerDocument;
                      t.removeEventListener(
                        "selectionchange",
                        e.input.hideSelectionGuard,
                      );
                      let n = e.domSelectionRange(),
                        r = n.anchorNode,
                        o = n.anchorOffset;
                      t.addEventListener(
                        "selectionchange",
                        (e.input.hideSelectionGuard = () => {
                          (n.anchorNode == r && n.anchorOffset == o) ||
                            (t.removeEventListener(
                              "selectionchange",
                              e.input.hideSelectionGuard,
                            ),
                            setTimeout(() => {
                              (Ee(e) && !e.state.selection.visible) ||
                                e.dom.classList.remove(
                                  "ProseMirror-hideselection",
                                );
                            }, 20));
                        }),
                      );
                    })(e));
          }
          e.domObserver.setCurSelection(), e.domObserver.connectSelection();
        }
      }
      const Ne = N || (E && A < 63);
      function Te(e, t) {
        let { node: n, offset: r } = e.docView.domFromPos(t, 0),
          o = r < n.childNodes.length ? n.childNodes[r] : null,
          i = r ? n.childNodes[r - 1] : null;
        if (N && o && "false" == o.contentEditable) return _e(o);
        if (
          !(
            (o && "false" != o.contentEditable) ||
            (i && "false" != i.contentEditable)
          )
        ) {
          if (o) return _e(o);
          if (i) return _e(i);
        }
      }
      function _e(e) {
        return (
          (e.contentEditable = "true"),
          N && e.draggable && ((e.draggable = !1), (e.wasDraggable = !0)),
          e
        );
      }
      function De(e) {
        (e.contentEditable = "false"),
          e.wasDraggable && ((e.draggable = !0), (e.wasDraggable = null));
      }
      function Re(e, t) {
        if (t instanceof r.nh) {
          let n = e.docView.descAt(t.from);
          n != e.lastSelectedViewDesc &&
            (je(e), n && n.selectNode(), (e.lastSelectedViewDesc = n));
        } else je(e);
      }
      function je(e) {
        e.lastSelectedViewDesc &&
          (e.lastSelectedViewDesc.parent &&
            e.lastSelectedViewDesc.deselectNode(),
          (e.lastSelectedViewDesc = void 0));
      }
      function Fe(e, t, n, o) {
        return (
          e.someProp("createSelectionBetween", (r) => r(e, t, n)) ||
          r.U3.between(t, n, o)
        );
      }
      function ze(e) {
        return !(e.editable && !e.hasFocus()) && Be(e);
      }
      function Be(e) {
        let t = e.domSelectionRange();
        if (!t.anchorNode) return !1;
        try {
          return (
            e.dom.contains(
              3 == t.anchorNode.nodeType
                ? t.anchorNode.parentNode
                : t.anchorNode,
            ) &&
            (e.editable ||
              e.dom.contains(
                3 == t.focusNode.nodeType
                  ? t.focusNode.parentNode
                  : t.focusNode,
              ))
          );
        } catch (e) {
          return !1;
        }
      }
      function Pe(e, t) {
        let { $anchor: n, $head: o } = e.selection,
          i = t > 0 ? n.max(o) : n.min(o),
          s = i.parent.inlineContent
            ? i.depth
              ? e.doc.resolve(t > 0 ? i.after() : i.before())
              : null
            : i;
        return s && r.LN.findFrom(s, t);
      }
      function Ie(e, t) {
        return e.dispatch(e.state.tr.setSelection(t).scrollIntoView()), !0;
      }
      function $e(e, t, n) {
        let o = e.state.selection;
        if (!(o instanceof r.U3)) {
          if (o instanceof r.nh && o.node.isInline)
            return Ie(e, new r.U3(t > 0 ? o.$to : o.$from));
          {
            let n = Pe(e.state, t);
            return !!n && Ie(e, n);
          }
        }
        if (n.indexOf("s") > -1) {
          let { $head: n } = o,
            i = n.textOffset ? null : t < 0 ? n.nodeBefore : n.nodeAfter;
          if (!i || i.isText || !i.isLeaf) return !1;
          let s = e.state.doc.resolve(n.pos + i.nodeSize * (t < 0 ? -1 : 1));
          return Ie(e, new r.U3(o.$anchor, s));
        }
        if (!o.empty) return !1;
        if (e.endOfTextblock(t > 0 ? "forward" : "backward")) {
          let n = Pe(e.state, t);
          return !!(n && n instanceof r.nh) && Ie(e, n);
        }
        if (!(_ && n.indexOf("m") > -1)) {
          let n,
            i = o.$head,
            s = i.textOffset ? null : t < 0 ? i.nodeBefore : i.nodeAfter;
          if (!s || s.isText) return !1;
          let l = t < 0 ? i.pos - s.nodeSize : i.pos;
          return (
            !!(s.isAtom || ((n = e.docView.descAt(l)) && !n.contentDOM)) &&
            (r.nh.isSelectable(s)
              ? Ie(
                  e,
                  new r.nh(t < 0 ? e.state.doc.resolve(i.pos - s.nodeSize) : i),
                )
              : !!j &&
                Ie(
                  e,
                  new r.U3(e.state.doc.resolve(t < 0 ? l : l + s.nodeSize)),
                ))
          );
        }
      }
      function Le(e) {
        return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length;
      }
      function Ve(e, t) {
        let n = e.pmViewDesc;
        return (
          n && 0 == n.size && (t < 0 || e.nextSibling || "BR" != e.nodeName)
        );
      }
      function Je(e, t) {
        return t < 0
          ? (function (e) {
              let t = e.domSelectionRange(),
                n = t.focusNode,
                r = t.focusOffset;
              if (!n) return;
              let o,
                i,
                l = !1;
              O &&
                1 == n.nodeType &&
                r < Le(n) &&
                Ve(n.childNodes[r], -1) &&
                (l = !0);
              for (;;)
                if (r > 0) {
                  if (1 != n.nodeType) break;
                  {
                    let e = n.childNodes[r - 1];
                    if (Ve(e, -1)) (o = n), (i = --r);
                    else {
                      if (3 != e.nodeType) break;
                      (n = e), (r = n.nodeValue.length);
                    }
                  }
                } else {
                  if (He(n)) break;
                  {
                    let t = n.previousSibling;
                    for (; t && Ve(t, -1); )
                      (o = n.parentNode), (i = s(t)), (t = t.previousSibling);
                    if (t) (n = t), (r = Le(n));
                    else {
                      if (((n = n.parentNode), n == e.dom)) break;
                      r = 0;
                    }
                  }
                }
              l ? Ke(e, n, r) : o && Ke(e, o, i);
            })(e)
          : (function (e) {
              let t = e.domSelectionRange(),
                n = t.focusNode,
                r = t.focusOffset;
              if (!n) return;
              let o,
                i,
                l = Le(n);
              for (;;)
                if (r < l) {
                  if (1 != n.nodeType) break;
                  if (!Ve(n.childNodes[r], 1)) break;
                  (o = n), (i = ++r);
                } else {
                  if (He(n)) break;
                  {
                    let t = n.nextSibling;
                    for (; t && Ve(t, 1); )
                      (o = t.parentNode), (i = s(t) + 1), (t = t.nextSibling);
                    if (t) (n = t), (r = 0), (l = Le(n));
                    else {
                      if (((n = n.parentNode), n == e.dom)) break;
                      r = l = 0;
                    }
                  }
                }
              o && Ke(e, o, i);
            })(e);
      }
      function He(e) {
        let t = e.pmViewDesc;
        return t && t.node && t.node.isBlock;
      }
      function Ke(e, t, n) {
        if (3 != t.nodeType) {
          let e, r;
          (r = (function (e, t) {
            for (; e && t == e.childNodes.length && !f(e); )
              (t = s(e) + 1), (e = e.parentNode);
            for (; e && t < e.childNodes.length; ) {
              let n = e.childNodes[t];
              if (3 == n.nodeType) return n;
              if (1 == n.nodeType && "false" == n.contentEditable) break;
              (e = n), (t = 0);
            }
          })(t, n))
            ? ((t = r), (n = 0))
            : (e = (function (e, t) {
                for (; e && !t && !f(e); ) (t = s(e)), (e = e.parentNode);
                for (; e && t; ) {
                  let n = e.childNodes[t - 1];
                  if (3 == n.nodeType) return n;
                  if (1 == n.nodeType && "false" == n.contentEditable) break;
                  t = (e = n).childNodes.length;
                }
              })(t, n)) && ((t = e), (n = e.nodeValue.length));
        }
        let r = e.domSelection();
        if (m(r)) {
          let e = document.createRange();
          e.setEnd(t, n), e.setStart(t, n), r.removeAllRanges(), r.addRange(e);
        } else r.extend && r.extend(t, n);
        e.domObserver.setCurSelection();
        let { state: o } = e;
        setTimeout(() => {
          e.state == o && Ae(e);
        }, 50);
      }
      function We(e, t) {
        let n = e.state.doc.resolve(t);
        if (!E && !D && n.parent.inlineContent) {
          let r = e.coordsAtPos(t);
          if (t > n.start()) {
            let n = e.coordsAtPos(t - 1),
              o = (n.top + n.bottom) / 2;
            if (o > r.top && o < r.bottom && Math.abs(n.left - r.left) > 1)
              return n.left < r.left ? "ltr" : "rtl";
          }
          if (t < n.end()) {
            let n = e.coordsAtPos(t + 1),
              o = (n.top + n.bottom) / 2;
            if (o > r.top && o < r.bottom && Math.abs(n.left - r.left) > 1)
              return n.left > r.left ? "ltr" : "rtl";
          }
        }
        return "rtl" == getComputedStyle(e.dom).direction ? "rtl" : "ltr";
      }
      function Ue(e, t, n) {
        let o = e.state.selection;
        if ((o instanceof r.U3 && !o.empty) || n.indexOf("s") > -1) return !1;
        if (_ && n.indexOf("m") > -1) return !1;
        let { $from: i, $to: s } = o;
        if (
          !i.parent.inlineContent ||
          e.endOfTextblock(t < 0 ? "up" : "down")
        ) {
          let n = Pe(e.state, t);
          if (n && n instanceof r.nh) return Ie(e, n);
        }
        if (!i.parent.inlineContent) {
          let n = t < 0 ? i : s,
            l = o instanceof r.i5 ? r.LN.near(n, t) : r.LN.findFrom(n, t);
          return !!l && Ie(e, l);
        }
        return !1;
      }
      function qe(e, t) {
        if (!(e.state.selection instanceof r.U3)) return !0;
        let { $head: n, $anchor: o, empty: i } = e.state.selection;
        if (!n.sameParent(o)) return !0;
        if (!i) return !1;
        if (e.endOfTextblock(t > 0 ? "forward" : "backward")) return !0;
        let s = !n.textOffset && (t < 0 ? n.nodeBefore : n.nodeAfter);
        if (s && !s.isText) {
          let r = e.state.tr;
          return (
            t < 0
              ? r.delete(n.pos - s.nodeSize, n.pos)
              : r.delete(n.pos, n.pos + s.nodeSize),
            e.dispatch(r),
            !0
          );
        }
        return !1;
      }
      function Ge(e, t, n) {
        e.domObserver.stop(), (t.contentEditable = n), e.domObserver.start();
      }
      function Xe(e, t) {
        let n = t.keyCode,
          r = (function (e) {
            let t = "";
            return (
              e.ctrlKey && (t += "c"),
              e.metaKey && (t += "m"),
              e.altKey && (t += "a"),
              e.shiftKey && (t += "s"),
              t
            );
          })(t);
        if (8 == n || (_ && 72 == n && "c" == r)) return qe(e, -1) || Je(e, -1);
        if ((46 == n && !t.shiftKey) || (_ && 68 == n && "c" == r))
          return qe(e, 1) || Je(e, 1);
        if (13 == n || 27 == n) return !0;
        if (37 == n || (_ && 66 == n && "c" == r)) {
          let t =
            37 == n ? ("ltr" == We(e, e.state.selection.from) ? -1 : 1) : -1;
          return $e(e, t, r) || Je(e, t);
        }
        if (39 == n || (_ && 70 == n && "c" == r)) {
          let t =
            39 == n ? ("ltr" == We(e, e.state.selection.from) ? 1 : -1) : 1;
          return $e(e, t, r) || Je(e, t);
        }
        return 38 == n || (_ && 80 == n && "c" == r)
          ? Ue(e, -1, r) || Je(e, -1)
          : 40 == n || (_ && 78 == n && "c" == r)
            ? (function (e) {
                if (!N || e.state.selection.$head.parentOffset > 0) return !1;
                let { focusNode: t, focusOffset: n } = e.domSelectionRange();
                if (
                  t &&
                  1 == t.nodeType &&
                  0 == n &&
                  t.firstChild &&
                  "false" == t.firstChild.contentEditable
                ) {
                  let n = t.firstChild;
                  Ge(e, n, "true"), setTimeout(() => Ge(e, n, "false"), 20);
                }
                return !1;
              })(e) ||
              Ue(e, 1, r) ||
              Je(e, 1)
            : r == (_ ? "m" : "c") &&
              (66 == n || 73 == n || 89 == n || 90 == n);
      }
      function Ye(e, t) {
        e.someProp("transformCopied", (n) => {
          t = n(t, e);
        });
        let n = [],
          { content: r, openStart: i, openEnd: s } = t;
        for (
          ;
          i > 1 && s > 1 && 1 == r.childCount && 1 == r.firstChild.childCount;
        ) {
          i--, s--;
          let e = r.firstChild;
          n.push(e.type.name, e.attrs != e.type.defaultAttrs ? e.attrs : null),
            (r = e.content);
        }
        let l =
            e.someProp("clipboardSerializer") ||
            o.ZF.fromSchema(e.state.schema),
          a = lt(),
          c = a.createElement("div");
        c.appendChild(l.serializeFragment(r, { document: a }));
        let h,
          p = c.firstChild,
          u = 0;
        for (; p && 1 == p.nodeType && (h = it[p.nodeName.toLowerCase()]); ) {
          for (let e = h.length - 1; e >= 0; e--) {
            let t = a.createElement(h[e]);
            for (; c.firstChild; ) t.appendChild(c.firstChild);
            c.appendChild(t), u++;
          }
          p = c.firstChild;
        }
        return (
          p &&
            1 == p.nodeType &&
            p.setAttribute(
              "data-pm-slice",
              `${i} ${s}${u ? ` -${u}` : ""} ${JSON.stringify(n)}`,
            ),
          {
            dom: c,
            text:
              e.someProp("clipboardTextSerializer", (n) => n(t, e)) ||
              t.content.textBetween(0, t.content.size, "\n\n"),
            slice: t,
          }
        );
      }
      function Ze(e, t, n, r, i) {
        let s,
          l,
          a = i.parent.type.spec.code;
        if (!n && !t) return null;
        let c = t && (r || a || !n);
        if (c) {
          if (
            (e.someProp("transformPastedText", (n) => {
              t = n(t, a || r, e);
            }),
            a)
          )
            return t
              ? new o.Ji(
                  o.FK.from(e.state.schema.text(t.replace(/\r\n?/g, "\n"))),
                  0,
                  0,
                )
              : o.Ji.empty;
          let n = e.someProp("clipboardTextParser", (n) => n(t, i, r, e));
          if (n) l = n;
          else {
            let n = i.marks(),
              { schema: r } = e.state,
              l = o.ZF.fromSchema(r);
            (s = document.createElement("div")),
              t.split(/(?:\r\n?|\n)+/).forEach((e) => {
                let t = s.appendChild(document.createElement("p"));
                e && t.appendChild(l.serializeNode(r.text(e, n)));
              });
          }
        } else
          e.someProp("transformPastedHTML", (t) => {
            n = t(n, e);
          }),
            (s = (function (e) {
              let t = /^(\s*<meta [^>]*>)*/.exec(e);
              t && (e = e.slice(t[0].length));
              let n,
                r = lt().createElement("div"),
                o = /<([a-z][^>\s]+)/i.exec(e);
              (n = o && it[o[1].toLowerCase()]) &&
                (e =
                  n.map((e) => "<" + e + ">").join("") +
                  e +
                  n
                    .map((e) => "</" + e + ">")
                    .reverse()
                    .join(""));
              if (((r.innerHTML = e), n))
                for (let e = 0; e < n.length; e++)
                  r = r.querySelector(n[e]) || r;
              return r;
            })(n)),
            j &&
              (function (e) {
                let t = e.querySelectorAll(
                  E
                    ? "span:not([class]):not([style])"
                    : "span.Apple-converted-space",
                );
                for (let n = 0; n < t.length; n++) {
                  let r = t[n];
                  1 == r.childNodes.length &&
                    " " == r.textContent &&
                    r.parentNode &&
                    r.parentNode.replaceChild(
                      e.ownerDocument.createTextNode(" "),
                      r,
                    );
                }
              })(s);
        let h = s && s.querySelector("[data-pm-slice]"),
          p =
            h &&
            /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(
              h.getAttribute("data-pm-slice") || "",
            );
        if (p && p[3])
          for (let e = +p[3]; e > 0; e--) {
            let e = s.firstChild;
            for (; e && 1 != e.nodeType; ) e = e.nextSibling;
            if (!e) break;
            s = e;
          }
        if (!l) {
          let t =
            e.someProp("clipboardParser") ||
            e.someProp("domParser") ||
            o.S4.fromSchema(e.state.schema);
          l = t.parseSlice(s, {
            preserveWhitespace: !(!c && !p),
            context: i,
            ruleFromNode: (e) =>
              "BR" != e.nodeName ||
              e.nextSibling ||
              !e.parentNode ||
              Qe.test(e.parentNode.nodeName)
                ? null
                : { ignore: !0 },
          });
        }
        if (p)
          l = (function (e, t) {
            if (!e.size) return e;
            let n,
              r = e.content.firstChild.type.schema;
            try {
              n = JSON.parse(t);
            } catch (t) {
              return e;
            }
            let { content: i, openStart: s, openEnd: l } = e;
            for (let e = n.length - 2; e >= 0; e -= 2) {
              let t = r.nodes[n[e]];
              if (!t || t.hasRequiredAttrs()) break;
              (i = o.FK.from(t.create(n[e + 1], i))), s++, l++;
            }
            return new o.Ji(i, s, l);
          })(ot(l, +p[1], +p[2]), p[4]);
        else if (
          ((l = o.Ji.maxOpen(
            (function (e, t) {
              if (e.childCount < 2) return e;
              for (let n = t.depth; n >= 0; n--) {
                let r,
                  i = t.node(n).contentMatchAt(t.index(n)),
                  s = [];
                if (
                  (e.forEach((e) => {
                    if (!s) return;
                    let t,
                      n = i.findWrapping(e.type);
                    if (!n) return (s = null);
                    if (
                      (t =
                        s.length && r.length && tt(n, r, e, s[s.length - 1], 0))
                    )
                      s[s.length - 1] = t;
                    else {
                      s.length &&
                        (s[s.length - 1] = nt(s[s.length - 1], r.length));
                      let t = et(e, n);
                      s.push(t), (i = i.matchType(t.type)), (r = n);
                    }
                  }),
                  s)
                )
                  return o.FK.from(s);
              }
              return e;
            })(l.content, i),
            !0,
          )),
          l.openStart || l.openEnd)
        ) {
          let e = 0,
            t = 0;
          for (
            let t = l.content.firstChild;
            e < l.openStart && !t.type.spec.isolating;
            e++, t = t.firstChild
          );
          for (
            let e = l.content.lastChild;
            t < l.openEnd && !e.type.spec.isolating;
            t++, e = e.lastChild
          );
          l = ot(l, e, t);
        }
        return (
          e.someProp("transformPasted", (t) => {
            l = t(l, e);
          }),
          l
        );
      }
      const Qe =
        /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
      function et(e, t, n = 0) {
        for (let r = t.length - 1; r >= n; r--)
          e = t[r].create(null, o.FK.from(e));
        return e;
      }
      function tt(e, t, n, r, i) {
        if (i < e.length && i < t.length && e[i] == t[i]) {
          let s = tt(e, t, n, r.lastChild, i + 1);
          if (s) return r.copy(r.content.replaceChild(r.childCount - 1, s));
          if (
            r
              .contentMatchAt(r.childCount)
              .matchType(i == e.length - 1 ? n.type : e[i + 1])
          )
            return r.copy(r.content.append(o.FK.from(et(n, e, i + 1))));
        }
      }
      function nt(e, t) {
        if (0 == t) return e;
        let n = e.content.replaceChild(
            e.childCount - 1,
            nt(e.lastChild, t - 1),
          ),
          r = e.contentMatchAt(e.childCount).fillBefore(o.FK.empty, !0);
        return e.copy(n.append(r));
      }
      function rt(e, t, n, r, i, s) {
        let l = t < 0 ? e.firstChild : e.lastChild,
          a = l.content;
        return (
          e.childCount > 1 && (s = 0),
          i < r - 1 && (a = rt(a, t, n, r, i + 1, s)),
          i >= n &&
            (a =
              t < 0
                ? l
                    .contentMatchAt(0)
                    .fillBefore(a, s <= i)
                    .append(a)
                : a.append(
                    l.contentMatchAt(l.childCount).fillBefore(o.FK.empty, !0),
                  )),
          e.replaceChild(t < 0 ? 0 : e.childCount - 1, l.copy(a))
        );
      }
      function ot(e, t, n) {
        return (
          t < e.openStart &&
            (e = new o.Ji(
              rt(e.content, -1, t, e.openStart, 0, e.openEnd),
              t,
              e.openEnd,
            )),
          n < e.openEnd &&
            (e = new o.Ji(
              rt(e.content, 1, n, e.openEnd, 0, 0),
              e.openStart,
              n,
            )),
          e
        );
      }
      const it = {
        thead: ["table"],
        tbody: ["table"],
        tfoot: ["table"],
        caption: ["table"],
        colgroup: ["table"],
        col: ["table", "colgroup"],
        tr: ["table", "tbody"],
        td: ["table", "tbody", "tr"],
        th: ["table", "tbody", "tr"],
      };
      let st = null;
      function lt() {
        return st || (st = document.implementation.createHTMLDocument("title"));
      }
      const at = {},
        ct = {},
        ht = { touchstart: !0, touchmove: !0 };
      class pt {
        constructor() {
          (this.shiftKey = !1),
            (this.mouseDown = null),
            (this.lastKeyCode = null),
            (this.lastKeyCodeTime = 0),
            (this.lastClick = { time: 0, x: 0, y: 0, type: "" }),
            (this.lastSelectionOrigin = null),
            (this.lastSelectionTime = 0),
            (this.lastIOSEnter = 0),
            (this.lastIOSEnterFallbackTimeout = -1),
            (this.lastFocus = 0),
            (this.lastTouch = 0),
            (this.lastAndroidDelete = 0),
            (this.composing = !1),
            (this.compositionNode = null),
            (this.composingTimeout = -1),
            (this.compositionNodes = []),
            (this.compositionEndedAt = -2e8),
            (this.compositionID = 1),
            (this.compositionPendingChanges = 0),
            (this.domChangeCount = 0),
            (this.eventHandlers = Object.create(null)),
            (this.hideSelectionGuard = null);
        }
      }
      function ut(e, t) {
        (e.input.lastSelectionOrigin = t),
          (e.input.lastSelectionTime = Date.now());
      }
      function dt(e) {
        e.someProp("handleDOMEvents", (t) => {
          for (let n in t)
            e.input.eventHandlers[n] ||
              e.dom.addEventListener(
                n,
                (e.input.eventHandlers[n] = (t) => ft(e, t)),
              );
        });
      }
      function ft(e, t) {
        return e.someProp("handleDOMEvents", (n) => {
          let r = n[t.type];
          return !!r && (r(e, t) || t.defaultPrevented);
        });
      }
      function mt(e, t) {
        if (!t.bubbles) return !0;
        if (t.defaultPrevented) return !1;
        for (let n = t.target; n != e.dom; n = n.parentNode)
          if (
            !n ||
            11 == n.nodeType ||
            (n.pmViewDesc && n.pmViewDesc.stopEvent(t))
          )
            return !1;
        return !0;
      }
      function gt(e) {
        return { left: e.clientX, top: e.clientY };
      }
      function bt(e, t, n, r, o) {
        if (-1 == r) return !1;
        let i = e.state.doc.resolve(r);
        for (let r = i.depth + 1; r > 0; r--)
          if (
            e.someProp(t, (t) =>
              r > i.depth
                ? t(e, n, i.nodeAfter, i.before(r), o, !0)
                : t(e, n, i.node(r), i.before(r), o, !1),
            )
          )
            return !0;
        return !1;
      }
      function yt(e, t, n) {
        e.focused || e.focus();
        let r = e.state.tr.setSelection(t);
        "pointer" == n && r.setMeta("pointer", !0), e.dispatch(r);
      }
      function vt(e, t, n, o, i) {
        return (
          bt(e, "handleClickOn", t, n, o) ||
          e.someProp("handleClick", (n) => n(e, t, o)) ||
          (i
            ? (function (e, t) {
                if (-1 == t) return !1;
                let n,
                  o,
                  i = e.state.selection;
                i instanceof r.nh && (n = i.node);
                let s = e.state.doc.resolve(t);
                for (let e = s.depth + 1; e > 0; e--) {
                  let t = e > s.depth ? s.nodeAfter : s.node(e);
                  if (r.nh.isSelectable(t)) {
                    o =
                      n &&
                      i.$from.depth > 0 &&
                      e >= i.$from.depth &&
                      s.before(i.$from.depth + 1) == i.$from.pos
                        ? s.before(i.$from.depth)
                        : s.before(e);
                    break;
                  }
                }
                return (
                  null != o &&
                  (yt(e, r.nh.create(e.state.doc, o), "pointer"), !0)
                );
              })(e, n)
            : (function (e, t) {
                if (-1 == t) return !1;
                let n = e.state.doc.resolve(t),
                  o = n.nodeAfter;
                return (
                  !!(o && o.isAtom && r.nh.isSelectable(o)) &&
                  (yt(e, new r.nh(n), "pointer"), !0)
                );
              })(e, n))
        );
      }
      function wt(e, t, n, r) {
        return (
          bt(e, "handleDoubleClickOn", t, n, r) ||
          e.someProp("handleDoubleClick", (n) => n(e, t, r))
        );
      }
      function xt(e, t, n, o) {
        return (
          bt(e, "handleTripleClickOn", t, n, o) ||
          e.someProp("handleTripleClick", (n) => n(e, t, o)) ||
          (function (e, t, n) {
            if (0 != n.button) return !1;
            let o = e.state.doc;
            if (-1 == t)
              return (
                !!o.inlineContent &&
                (yt(e, r.U3.create(o, 0, o.content.size), "pointer"), !0)
              );
            let i = o.resolve(t);
            for (let t = i.depth + 1; t > 0; t--) {
              let n = t > i.depth ? i.nodeAfter : i.node(t),
                s = i.before(t);
              if (n.inlineContent)
                yt(e, r.U3.create(o, s + 1, s + 1 + n.content.size), "pointer");
              else {
                if (!r.nh.isSelectable(n)) continue;
                yt(e, r.nh.create(o, s), "pointer");
              }
              return !0;
            }
          })(e, n, o)
        );
      }
      function St(e) {
        return Tt(e);
      }
      (ct.keydown = (e, t) => {
        let n = t;
        if (
          ((e.input.shiftKey = 16 == n.keyCode || n.shiftKey),
          !Ot(e, n) &&
            ((e.input.lastKeyCode = n.keyCode),
            (e.input.lastKeyCodeTime = Date.now()),
            !R || !E || 13 != n.keyCode))
        )
          if (
            (229 != n.keyCode && e.domObserver.forceFlush(),
            !T || 13 != n.keyCode || n.ctrlKey || n.altKey || n.metaKey)
          )
            e.someProp("handleKeyDown", (t) => t(e, n)) || Xe(e, n)
              ? n.preventDefault()
              : ut(e, "key");
          else {
            let t = Date.now();
            (e.input.lastIOSEnter = t),
              (e.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
                e.input.lastIOSEnter == t &&
                  (e.someProp("handleKeyDown", (t) => t(e, g(13, "Enter"))),
                  (e.input.lastIOSEnter = 0));
              }, 200));
          }
      }),
        (ct.keyup = (e, t) => {
          16 == t.keyCode && (e.input.shiftKey = !1);
        }),
        (ct.keypress = (e, t) => {
          let n = t;
          if (
            Ot(e, n) ||
            !n.charCode ||
            (n.ctrlKey && !n.altKey) ||
            (_ && n.metaKey)
          )
            return;
          if (e.someProp("handleKeyPress", (t) => t(e, n)))
            return void n.preventDefault();
          let o = e.state.selection;
          if (!(o instanceof r.U3 && o.$from.sameParent(o.$to))) {
            let t = String.fromCharCode(n.charCode);
            /[\r\n]/.test(t) ||
              e.someProp("handleTextInput", (n) =>
                n(e, o.$from.pos, o.$to.pos, t),
              ) ||
              e.dispatch(e.state.tr.insertText(t).scrollIntoView()),
              n.preventDefault();
          }
        });
      const kt = _ ? "metaKey" : "ctrlKey";
      at.mousedown = (e, t) => {
        let n = t;
        e.input.shiftKey = n.shiftKey;
        let r = St(e),
          o = Date.now(),
          i = "singleClick";
        o - e.input.lastClick.time < 500 &&
          (function (e, t) {
            let n = t.x - e.clientX,
              r = t.y - e.clientY;
            return n * n + r * r < 100;
          })(n, e.input.lastClick) &&
          !n[kt] &&
          ("singleClick" == e.input.lastClick.type
            ? (i = "doubleClick")
            : "doubleClick" == e.input.lastClick.type && (i = "tripleClick")),
          (e.input.lastClick = {
            time: o,
            x: n.clientX,
            y: n.clientY,
            type: i,
          });
        let s = e.posAtCoords(gt(n));
        s &&
          ("singleClick" == i
            ? (e.input.mouseDown && e.input.mouseDown.done(),
              (e.input.mouseDown = new Ct(e, s, n, !!r)))
            : ("doubleClick" == i ? wt : xt)(e, s.pos, s.inside, n)
              ? n.preventDefault()
              : ut(e, "pointer"));
      };
      class Ct {
        constructor(e, t, n, o) {
          let i, s;
          if (
            ((this.view = e),
            (this.pos = t),
            (this.event = n),
            (this.flushed = o),
            (this.delayedSelectionSync = !1),
            (this.mightDrag = null),
            (this.startDoc = e.state.doc),
            (this.selectNode = !!n[kt]),
            (this.allowDefault = n.shiftKey),
            t.inside > -1)
          )
            (i = e.state.doc.nodeAt(t.inside)), (s = t.inside);
          else {
            let n = e.state.doc.resolve(t.pos);
            (i = n.parent), (s = n.depth ? n.before() : 0);
          }
          const l = o ? null : n.target,
            a = l ? e.docView.nearestDesc(l, !0) : null;
          this.target = a ? a.dom : null;
          let { selection: c } = e.state;
          ((0 == n.button &&
            i.type.spec.draggable &&
            !1 !== i.type.spec.selectable) ||
            (c instanceof r.nh && c.from <= s && c.to > s)) &&
            (this.mightDrag = {
              node: i,
              pos: s,
              addAttr: !(!this.target || this.target.draggable),
              setUneditable: !(
                !this.target ||
                !O ||
                this.target.hasAttribute("contentEditable")
              ),
            }),
            this.target &&
              this.mightDrag &&
              (this.mightDrag.addAttr || this.mightDrag.setUneditable) &&
              (this.view.domObserver.stop(),
              this.mightDrag.addAttr && (this.target.draggable = !0),
              this.mightDrag.setUneditable &&
                setTimeout(() => {
                  this.view.input.mouseDown == this &&
                    this.target.setAttribute("contentEditable", "false");
                }, 20),
              this.view.domObserver.start()),
            e.root.addEventListener("mouseup", (this.up = this.up.bind(this))),
            e.root.addEventListener(
              "mousemove",
              (this.move = this.move.bind(this)),
            ),
            ut(e, "pointer");
        }
        done() {
          this.view.root.removeEventListener("mouseup", this.up),
            this.view.root.removeEventListener("mousemove", this.move),
            this.mightDrag &&
              this.target &&
              (this.view.domObserver.stop(),
              this.mightDrag.addAttr &&
                this.target.removeAttribute("draggable"),
              this.mightDrag.setUneditable &&
                this.target.removeAttribute("contentEditable"),
              this.view.domObserver.start()),
            this.delayedSelectionSync && setTimeout(() => Ae(this.view)),
            (this.view.input.mouseDown = null);
        }
        up(e) {
          if ((this.done(), !this.view.dom.contains(e.target))) return;
          let t = this.pos;
          this.view.state.doc != this.startDoc &&
            (t = this.view.posAtCoords(gt(e))),
            this.updateAllowDefault(e),
            this.allowDefault || !t
              ? ut(this.view, "pointer")
              : vt(this.view, t.pos, t.inside, e, this.selectNode)
                ? e.preventDefault()
                : 0 == e.button &&
                    (this.flushed ||
                      (N && this.mightDrag && !this.mightDrag.node.isAtom) ||
                      (E &&
                        !this.view.state.selection.visible &&
                        Math.min(
                          Math.abs(t.pos - this.view.state.selection.from),
                          Math.abs(t.pos - this.view.state.selection.to),
                        ) <= 2))
                  ? (yt(
                      this.view,
                      r.LN.near(this.view.state.doc.resolve(t.pos)),
                      "pointer",
                    ),
                    e.preventDefault())
                  : ut(this.view, "pointer");
        }
        move(e) {
          this.updateAllowDefault(e),
            ut(this.view, "pointer"),
            0 == e.buttons && this.done();
        }
        updateAllowDefault(e) {
          !this.allowDefault &&
            (Math.abs(this.event.x - e.clientX) > 4 ||
              Math.abs(this.event.y - e.clientY) > 4) &&
            (this.allowDefault = !0);
        }
      }
      function Ot(e, t) {
        return (
          !!e.composing ||
          (!!(N && Math.abs(t.timeStamp - e.input.compositionEndedAt) < 500) &&
            ((e.input.compositionEndedAt = -2e8), !0))
        );
      }
      (at.touchstart = (e) => {
        (e.input.lastTouch = Date.now()), St(e), ut(e, "pointer");
      }),
        (at.touchmove = (e) => {
          (e.input.lastTouch = Date.now()), ut(e, "pointer");
        }),
        (at.contextmenu = (e) => St(e));
      const Mt = R ? 5e3 : -1;
      function Et(e, t) {
        clearTimeout(e.input.composingTimeout),
          t > -1 && (e.input.composingTimeout = setTimeout(() => Tt(e), t));
      }
      function At(e) {
        for (
          e.composing &&
          ((e.input.composing = !1),
          (e.input.compositionEndedAt = (function () {
            let e = document.createEvent("Event");
            return e.initEvent("event", !0, !0), e.timeStamp;
          })()));
          e.input.compositionNodes.length > 0;
        )
          e.input.compositionNodes.pop().markParentsDirty();
      }
      function Nt(e) {
        let t = e.domSelectionRange();
        if (!t.focusNode) return null;
        let n = (function (e, t) {
            for (;;) {
              if (3 == e.nodeType && t) return e;
              if (1 == e.nodeType && t > 0) {
                if ("false" == e.contentEditable) return null;
                t = d((e = e.childNodes[t - 1]));
              } else {
                if (!e.parentNode || f(e)) return null;
                (t = s(e)), (e = e.parentNode);
              }
            }
          })(t.focusNode, t.focusOffset),
          r = (function (e, t) {
            for (;;) {
              if (3 == e.nodeType && t < e.nodeValue.length) return e;
              if (1 == e.nodeType && t < e.childNodes.length) {
                if ("false" == e.contentEditable) return null;
                (e = e.childNodes[t]), (t = 0);
              } else {
                if (!e.parentNode || f(e)) return null;
                (t = s(e) + 1), (e = e.parentNode);
              }
            }
          })(t.focusNode, t.focusOffset);
        if (n && r && n != r) {
          let t = r.pmViewDesc;
          if (!t || !t.isText(r.nodeValue)) return r;
          if (e.input.compositionNode == r) {
            let e = n.pmViewDesc;
            if (e && e.isText(n.nodeValue)) return r;
          }
        }
        return n || r;
      }
      function Tt(e, t = !1) {
        if (!(R && e.domObserver.flushingSoon >= 0)) {
          if (
            (e.domObserver.forceFlush(),
            At(e),
            t || (e.docView && e.docView.dirty))
          ) {
            let t = Me(e);
            return (
              t && !t.eq(e.state.selection)
                ? e.dispatch(e.state.tr.setSelection(t))
                : e.updateState(e.state),
              !0
            );
          }
          return !1;
        }
      }
      (ct.compositionstart = ct.compositionupdate =
        (e) => {
          if (!e.composing) {
            e.domObserver.flush();
            let { state: t } = e,
              n = t.selection.$from;
            if (
              t.selection.empty &&
              (t.storedMarks ||
                (!n.textOffset &&
                  n.parentOffset &&
                  n.nodeBefore.marks.some((e) => !1 === e.type.spec.inclusive)))
            )
              (e.markCursor = e.state.storedMarks || n.marks()),
                Tt(e, !0),
                (e.markCursor = null);
            else if (
              (Tt(e),
              O &&
                t.selection.empty &&
                n.parentOffset &&
                !n.textOffset &&
                n.nodeBefore.marks.length)
            ) {
              let t = e.domSelectionRange();
              for (
                let n = t.focusNode, r = t.focusOffset;
                n && 1 == n.nodeType && 0 != r;
              ) {
                let t = r < 0 ? n.lastChild : n.childNodes[r - 1];
                if (!t) break;
                if (3 == t.nodeType) {
                  e.domSelection().collapse(t, t.nodeValue.length);
                  break;
                }
                (n = t), (r = -1);
              }
            }
            e.input.composing = !0;
          }
          Et(e, Mt);
        }),
        (ct.compositionend = (e, t) => {
          e.composing &&
            ((e.input.composing = !1),
            (e.input.compositionEndedAt = t.timeStamp),
            (e.input.compositionPendingChanges = e.domObserver.pendingRecords()
              .length
              ? e.input.compositionID
              : 0),
            (e.input.compositionNode = null),
            e.input.compositionPendingChanges &&
              Promise.resolve().then(() => e.domObserver.flush()),
            e.input.compositionID++,
            Et(e, 20));
        });
      const _t = (k && C < 15) || (T && F < 604);
      function Dt(e, t, n, r, i) {
        let s = Ze(e, t, n, r, e.state.selection.$from);
        if (e.someProp("handlePaste", (t) => t(e, i, s || o.Ji.empty)))
          return !0;
        if (!s) return !1;
        let l = (function (e) {
            return 0 == e.openStart &&
              0 == e.openEnd &&
              1 == e.content.childCount
              ? e.content.firstChild
              : null;
          })(s),
          a = l
            ? e.state.tr.replaceSelectionWith(l, r)
            : e.state.tr.replaceSelection(s);
        return (
          e.dispatch(
            a.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste"),
          ),
          !0
        );
      }
      function Rt(e) {
        let t = e.getData("text/plain") || e.getData("Text");
        if (t) return t;
        let n = e.getData("text/uri-list");
        return n ? n.replace(/\r?\n/g, " ") : "";
      }
      (at.copy = ct.cut =
        (e, t) => {
          let n = t,
            r = e.state.selection,
            o = "cut" == n.type;
          if (r.empty) return;
          let i = _t ? null : n.clipboardData,
            s = r.content(),
            { dom: l, text: a } = Ye(e, s);
          i
            ? (n.preventDefault(),
              i.clearData(),
              i.setData("text/html", l.innerHTML),
              i.setData("text/plain", a))
            : (function (e, t) {
                if (!e.dom.parentNode) return;
                let n = e.dom.parentNode.appendChild(
                  document.createElement("div"),
                );
                n.appendChild(t),
                  (n.style.cssText =
                    "position: fixed; left: -10000px; top: 10px");
                let r = getSelection(),
                  o = document.createRange();
                o.selectNodeContents(t),
                  e.dom.blur(),
                  r.removeAllRanges(),
                  r.addRange(o),
                  setTimeout(() => {
                    n.parentNode && n.parentNode.removeChild(n), e.focus();
                  }, 50);
              })(e, l),
            o &&
              e.dispatch(
                e.state.tr
                  .deleteSelection()
                  .scrollIntoView()
                  .setMeta("uiEvent", "cut"),
              );
        }),
        (ct.paste = (e, t) => {
          let n = t;
          if (e.composing && !R) return;
          let r = _t ? null : n.clipboardData,
            o = e.input.shiftKey && 45 != e.input.lastKeyCode;
          r && Dt(e, Rt(r), r.getData("text/html"), o, n)
            ? n.preventDefault()
            : (function (e, t) {
                if (!e.dom.parentNode) return;
                let n =
                    e.input.shiftKey ||
                    e.state.selection.$from.parent.type.spec.code,
                  r = e.dom.parentNode.appendChild(
                    document.createElement(n ? "textarea" : "div"),
                  );
                n || (r.contentEditable = "true"),
                  (r.style.cssText =
                    "position: fixed; left: -10000px; top: 10px"),
                  r.focus();
                let o = e.input.shiftKey && 45 != e.input.lastKeyCode;
                setTimeout(() => {
                  e.focus(),
                    r.parentNode && r.parentNode.removeChild(r),
                    n
                      ? Dt(e, r.value, null, o, t)
                      : Dt(e, r.textContent, r.innerHTML, o, t);
                }, 50);
              })(e, n);
        });
      class jt {
        constructor(e, t, n) {
          (this.slice = e), (this.move = t), (this.node = n);
        }
      }
      const Ft = _ ? "altKey" : "ctrlKey";
      (at.dragstart = (e, t) => {
        let n = t,
          o = e.input.mouseDown;
        if ((o && o.done(), !n.dataTransfer)) return;
        let i,
          s = e.state.selection,
          l = s.empty ? null : e.posAtCoords(gt(n));
        if (
          l &&
          l.pos >= s.from &&
          l.pos <= (s instanceof r.nh ? s.to - 1 : s.to)
        );
        else if (o && o.mightDrag)
          i = r.nh.create(e.state.doc, o.mightDrag.pos);
        else if (n.target && 1 == n.target.nodeType) {
          let t = e.docView.nearestDesc(n.target, !0);
          t &&
            t.node.type.spec.draggable &&
            t != e.docView &&
            (i = r.nh.create(e.state.doc, t.posBefore));
        }
        let a = (i || e.state.selection).content(),
          { dom: c, text: h, slice: p } = Ye(e, a);
        n.dataTransfer.clearData(),
          n.dataTransfer.setData(_t ? "Text" : "text/html", c.innerHTML),
          (n.dataTransfer.effectAllowed = "copyMove"),
          _t || n.dataTransfer.setData("text/plain", h),
          (e.dragging = new jt(p, !n[Ft], i));
      }),
        (at.dragend = (e) => {
          let t = e.dragging;
          window.setTimeout(() => {
            e.dragging == t && (e.dragging = null);
          }, 50);
        }),
        (ct.dragover = ct.dragenter = (e, t) => t.preventDefault()),
        (ct.drop = (e, t) => {
          let n = t,
            s = e.dragging;
          if (((e.dragging = null), !n.dataTransfer)) return;
          let l = e.posAtCoords(gt(n));
          if (!l) return;
          let a = e.state.doc.resolve(l.pos),
            c = s && s.slice;
          c
            ? e.someProp("transformPasted", (t) => {
                c = t(c, e);
              })
            : (c = Ze(
                e,
                Rt(n.dataTransfer),
                _t ? null : n.dataTransfer.getData("text/html"),
                !1,
                a,
              ));
          let h = !(!s || n[Ft]);
          if (e.someProp("handleDrop", (t) => t(e, n, c || o.Ji.empty, h)))
            return void n.preventDefault();
          if (!c) return;
          n.preventDefault();
          let p = c ? (0, i.Um)(e.state.doc, a.pos, c) : a.pos;
          null == p && (p = a.pos);
          let u = e.state.tr;
          if (h) {
            let { node: e } = s;
            e ? e.replace(u) : u.deleteSelection();
          }
          let d = u.mapping.map(p),
            f = 0 == c.openStart && 0 == c.openEnd && 1 == c.content.childCount,
            m = u.doc;
          if (
            (f
              ? u.replaceRangeWith(d, d, c.content.firstChild)
              : u.replaceRange(d, d, c),
            u.doc.eq(m))
          )
            return;
          let g = u.doc.resolve(d);
          if (
            f &&
            r.nh.isSelectable(c.content.firstChild) &&
            g.nodeAfter &&
            g.nodeAfter.sameMarkup(c.content.firstChild)
          )
            u.setSelection(new r.nh(g));
          else {
            let t = u.mapping.map(p);
            u.mapping.maps[u.mapping.maps.length - 1].forEach(
              (e, n, r, o) => (t = o),
            ),
              u.setSelection(Fe(e, g, u.doc.resolve(t)));
          }
          e.focus(), e.dispatch(u.setMeta("uiEvent", "drop"));
        }),
        (at.focus = (e) => {
          (e.input.lastFocus = Date.now()),
            e.focused ||
              (e.domObserver.stop(),
              e.dom.classList.add("ProseMirror-focused"),
              e.domObserver.start(),
              (e.focused = !0),
              setTimeout(() => {
                e.docView &&
                  e.hasFocus() &&
                  !e.domObserver.currentSelection.eq(e.domSelectionRange()) &&
                  Ae(e);
              }, 20));
        }),
        (at.blur = (e, t) => {
          let n = t;
          e.focused &&
            (e.domObserver.stop(),
            e.dom.classList.remove("ProseMirror-focused"),
            e.domObserver.start(),
            n.relatedTarget &&
              e.dom.contains(n.relatedTarget) &&
              e.domObserver.currentSelection.clear(),
            (e.focused = !1));
        }),
        (at.beforeinput = (e, t) => {
          if (E && R && "deleteContentBackward" == t.inputType) {
            e.domObserver.flushSoon();
            let { domChangeCount: t } = e.input;
            setTimeout(() => {
              if (e.input.domChangeCount != t) return;
              if (
                (e.dom.blur(),
                e.focus(),
                e.someProp("handleKeyDown", (t) => t(e, g(8, "Backspace"))))
              )
                return;
              let { $cursor: n } = e.state.selection;
              n &&
                n.pos > 0 &&
                e.dispatch(
                  e.state.tr.delete(n.pos - 1, n.pos).scrollIntoView(),
                );
            }, 50);
          }
        });
      for (let e in ct) at[e] = ct[e];
      function zt(e, t) {
        if (e == t) return !0;
        for (let n in e) if (e[n] !== t[n]) return !1;
        for (let n in t) if (!(n in e)) return !1;
        return !0;
      }
      class Bt {
        constructor(e, t) {
          (this.toDOM = e),
            (this.spec = t || Vt),
            (this.side = this.spec.side || 0);
        }
        map(e, t, n, r) {
          let { pos: o, deleted: i } = e.mapResult(
            t.from + r,
            this.side < 0 ? -1 : 1,
          );
          return i ? null : new $t(o - n, o - n, this);
        }
        valid() {
          return !0;
        }
        eq(e) {
          return (
            this == e ||
            (e instanceof Bt &&
              ((this.spec.key && this.spec.key == e.spec.key) ||
                (this.toDOM == e.toDOM && zt(this.spec, e.spec))))
          );
        }
        destroy(e) {
          this.spec.destroy && this.spec.destroy(e);
        }
      }
      class Pt {
        constructor(e, t) {
          (this.attrs = e), (this.spec = t || Vt);
        }
        map(e, t, n, r) {
          let o = e.map(t.from + r, this.spec.inclusiveStart ? -1 : 1) - n,
            i = e.map(t.to + r, this.spec.inclusiveEnd ? 1 : -1) - n;
          return o >= i ? null : new $t(o, i, this);
        }
        valid(e, t) {
          return t.from < t.to;
        }
        eq(e) {
          return (
            this == e ||
            (e instanceof Pt &&
              zt(this.attrs, e.attrs) &&
              zt(this.spec, e.spec))
          );
        }
        static is(e) {
          return e.type instanceof Pt;
        }
        destroy() {}
      }
      class It {
        constructor(e, t) {
          (this.attrs = e), (this.spec = t || Vt);
        }
        map(e, t, n, r) {
          let o = e.mapResult(t.from + r, 1);
          if (o.deleted) return null;
          let i = e.mapResult(t.to + r, -1);
          return i.deleted || i.pos <= o.pos
            ? null
            : new $t(o.pos - n, i.pos - n, this);
        }
        valid(e, t) {
          let n,
            { index: r, offset: o } = e.content.findIndex(t.from);
          return (
            o == t.from && !(n = e.child(r)).isText && o + n.nodeSize == t.to
          );
        }
        eq(e) {
          return (
            this == e ||
            (e instanceof It &&
              zt(this.attrs, e.attrs) &&
              zt(this.spec, e.spec))
          );
        }
        destroy() {}
      }
      class $t {
        constructor(e, t, n) {
          (this.from = e), (this.to = t), (this.type = n);
        }
        copy(e, t) {
          return new $t(e, t, this.type);
        }
        eq(e, t = 0) {
          return (
            this.type.eq(e.type) &&
            this.from + t == e.from &&
            this.to + t == e.to
          );
        }
        map(e, t, n) {
          return this.type.map(e, this, t, n);
        }
        static widget(e, t, n) {
          return new $t(e, e, new Bt(t, n));
        }
        static inline(e, t, n, r) {
          return new $t(e, t, new Pt(n, r));
        }
        static node(e, t, n, r) {
          return new $t(e, t, new It(n, r));
        }
        get spec() {
          return this.type.spec;
        }
        get inline() {
          return this.type instanceof Pt;
        }
        get widget() {
          return this.type instanceof Bt;
        }
      }
      const Lt = [],
        Vt = {};
      class Jt {
        constructor(e, t) {
          (this.local = e.length ? e : Lt), (this.children = t.length ? t : Lt);
        }
        static create(e, t) {
          return t.length ? Gt(t, e, 0, Vt) : Ht;
        }
        find(e, t, n) {
          let r = [];
          return (
            this.findInner(null == e ? 0 : e, null == t ? 1e9 : t, r, 0, n), r
          );
        }
        findInner(e, t, n, r, o) {
          for (let i = 0; i < this.local.length; i++) {
            let s = this.local[i];
            s.from <= t &&
              s.to >= e &&
              (!o || o(s.spec)) &&
              n.push(s.copy(s.from + r, s.to + r));
          }
          for (let i = 0; i < this.children.length; i += 3)
            if (this.children[i] < t && this.children[i + 1] > e) {
              let s = this.children[i] + 1;
              this.children[i + 2].findInner(e - s, t - s, n, r + s, o);
            }
        }
        map(e, t, n) {
          return this == Ht || 0 == e.maps.length
            ? this
            : this.mapInner(e, t, 0, 0, n || Vt);
        }
        mapInner(e, t, n, r, o) {
          let i;
          for (let s = 0; s < this.local.length; s++) {
            let l = this.local[s].map(e, n, r);
            l && l.type.valid(t, l)
              ? (i || (i = [])).push(l)
              : o.onRemove && o.onRemove(this.local[s].spec);
          }
          return this.children.length
            ? (function (e, t, n, r, o, i, s) {
                let l = e.slice();
                for (let e = 0, t = i; e < n.maps.length; e++) {
                  let r = 0;
                  n.maps[e].forEach((e, n, o, i) => {
                    let s = i - o - (n - e);
                    for (let o = 0; o < l.length; o += 3) {
                      let i = l[o + 1];
                      if (i < 0 || e > i + t - r) continue;
                      let a = l[o] + t - r;
                      n >= a
                        ? (l[o + 1] = e <= a ? -2 : -1)
                        : e >= t && s && ((l[o] += s), (l[o + 1] += s));
                    }
                    r += s;
                  }),
                    (t = n.maps[e].map(t, -1));
                }
                let a = !1;
                for (let t = 0; t < l.length; t += 3)
                  if (l[t + 1] < 0) {
                    if (-2 == l[t + 1]) {
                      (a = !0), (l[t + 1] = -1);
                      continue;
                    }
                    let c = n.map(e[t] + i),
                      h = c - o;
                    if (h < 0 || h >= r.content.size) {
                      a = !0;
                      continue;
                    }
                    let p = n.map(e[t + 1] + i, -1) - o,
                      { index: u, offset: d } = r.content.findIndex(h),
                      f = r.maybeChild(u);
                    if (f && d == h && d + f.nodeSize == p) {
                      let r = l[t + 2].mapInner(n, f, c + 1, e[t] + i + 1, s);
                      r != Ht
                        ? ((l[t] = h), (l[t + 1] = p), (l[t + 2] = r))
                        : ((l[t + 1] = -2), (a = !0));
                    } else a = !0;
                  }
                if (a) {
                  let a = (function (e, t, n, r, o, i, s) {
                      function l(e, t) {
                        for (let i = 0; i < e.local.length; i++) {
                          let l = e.local[i].map(r, o, t);
                          l
                            ? n.push(l)
                            : s.onRemove && s.onRemove(e.local[i].spec);
                        }
                        for (let n = 0; n < e.children.length; n += 3)
                          l(e.children[n + 2], e.children[n] + t + 1);
                      }
                      for (let n = 0; n < e.length; n += 3)
                        -1 == e[n + 1] && l(e[n + 2], t[n] + i + 1);
                      return n;
                    })(l, e, t, n, o, i, s),
                    c = Gt(a, r, 0, s);
                  t = c.local;
                  for (let e = 0; e < l.length; e += 3)
                    l[e + 1] < 0 && (l.splice(e, 3), (e -= 3));
                  for (let e = 0, t = 0; e < c.children.length; e += 3) {
                    let n = c.children[e];
                    for (; t < l.length && l[t] < n; ) t += 3;
                    l.splice(
                      t,
                      0,
                      c.children[e],
                      c.children[e + 1],
                      c.children[e + 2],
                    );
                  }
                }
                return new Jt(t.sort(Xt), l);
              })(this.children, i || [], e, t, n, r, o)
            : i
              ? new Jt(i.sort(Xt), Lt)
              : Ht;
        }
        add(e, t) {
          return t.length
            ? this == Ht
              ? Jt.create(e, t)
              : this.addInner(e, t, 0)
            : this;
        }
        addInner(e, t, n) {
          let r,
            o = 0;
          e.forEach((e, i) => {
            let s,
              l = i + n;
            if ((s = Ut(t, e, l))) {
              for (r || (r = this.children.slice()); o < r.length && r[o] < i; )
                o += 3;
              r[o] == i
                ? (r[o + 2] = r[o + 2].addInner(e, s, l + 1))
                : r.splice(o, 0, i, i + e.nodeSize, Gt(s, e, l + 1, Vt)),
                (o += 3);
            }
          });
          let i = Wt(o ? qt(t) : t, -n);
          for (let t = 0; t < i.length; t++)
            i[t].type.valid(e, i[t]) || i.splice(t--, 1);
          return new Jt(
            i.length ? this.local.concat(i).sort(Xt) : this.local,
            r || this.children,
          );
        }
        remove(e) {
          return 0 == e.length || this == Ht ? this : this.removeInner(e, 0);
        }
        removeInner(e, t) {
          let n = this.children,
            r = this.local;
          for (let r = 0; r < n.length; r += 3) {
            let o,
              i = n[r] + t,
              s = n[r + 1] + t;
            for (let t, n = 0; n < e.length; n++)
              (t = e[n]) &&
                t.from > i &&
                t.to < s &&
                ((e[n] = null), (o || (o = [])).push(t));
            if (!o) continue;
            n == this.children && (n = this.children.slice());
            let l = n[r + 2].removeInner(o, i + 1);
            l != Ht ? (n[r + 2] = l) : (n.splice(r, 3), (r -= 3));
          }
          if (r.length)
            for (let n, o = 0; o < e.length; o++)
              if ((n = e[o]))
                for (let e = 0; e < r.length; e++)
                  r[e].eq(n, t) &&
                    (r == this.local && (r = this.local.slice()),
                    r.splice(e--, 1));
          return n == this.children && r == this.local
            ? this
            : r.length || n.length
              ? new Jt(r, n)
              : Ht;
        }
        forChild(e, t) {
          if (this == Ht) return this;
          if (t.isLeaf) return Jt.empty;
          let n, r;
          for (let t = 0; t < this.children.length; t += 3)
            if (this.children[t] >= e) {
              this.children[t] == e && (n = this.children[t + 2]);
              break;
            }
          let o = e + 1,
            i = o + t.content.size;
          for (let e = 0; e < this.local.length; e++) {
            let t = this.local[e];
            if (t.from < i && t.to > o && t.type instanceof Pt) {
              let e = Math.max(o, t.from) - o,
                n = Math.min(i, t.to) - o;
              e < n && (r || (r = [])).push(t.copy(e, n));
            }
          }
          if (r) {
            let e = new Jt(r.sort(Xt), Lt);
            return n ? new Kt([e, n]) : e;
          }
          return n || Ht;
        }
        eq(e) {
          if (this == e) return !0;
          if (
            !(e instanceof Jt) ||
            this.local.length != e.local.length ||
            this.children.length != e.children.length
          )
            return !1;
          for (let t = 0; t < this.local.length; t++)
            if (!this.local[t].eq(e.local[t])) return !1;
          for (let t = 0; t < this.children.length; t += 3)
            if (
              this.children[t] != e.children[t] ||
              this.children[t + 1] != e.children[t + 1] ||
              !this.children[t + 2].eq(e.children[t + 2])
            )
              return !1;
          return !0;
        }
        locals(e) {
          return Yt(this.localsInner(e));
        }
        localsInner(e) {
          if (this == Ht) return Lt;
          if (e.inlineContent || !this.local.some(Pt.is)) return this.local;
          let t = [];
          for (let e = 0; e < this.local.length; e++)
            this.local[e].type instanceof Pt || t.push(this.local[e]);
          return t;
        }
      }
      (Jt.empty = new Jt([], [])), (Jt.removeOverlap = Yt);
      const Ht = Jt.empty;
      class Kt {
        constructor(e) {
          this.members = e;
        }
        map(e, t) {
          const n = this.members.map((n) => n.map(e, t, Vt));
          return Kt.from(n);
        }
        forChild(e, t) {
          if (t.isLeaf) return Jt.empty;
          let n = [];
          for (let r = 0; r < this.members.length; r++) {
            let o = this.members[r].forChild(e, t);
            o != Ht &&
              (o instanceof Kt ? (n = n.concat(o.members)) : n.push(o));
          }
          return Kt.from(n);
        }
        eq(e) {
          if (!(e instanceof Kt) || e.members.length != this.members.length)
            return !1;
          for (let t = 0; t < this.members.length; t++)
            if (!this.members[t].eq(e.members[t])) return !1;
          return !0;
        }
        locals(e) {
          let t,
            n = !0;
          for (let r = 0; r < this.members.length; r++) {
            let o = this.members[r].localsInner(e);
            if (o.length)
              if (t) {
                n && ((t = t.slice()), (n = !1));
                for (let e = 0; e < o.length; e++) t.push(o[e]);
              } else t = o;
          }
          return t ? Yt(n ? t : t.sort(Xt)) : Lt;
        }
        static from(e) {
          switch (e.length) {
            case 0:
              return Ht;
            case 1:
              return e[0];
            default:
              return new Kt(
                e.every((e) => e instanceof Jt)
                  ? e
                  : e.reduce(
                      (e, t) => e.concat(t instanceof Jt ? t : t.members),
                      [],
                    ),
              );
          }
        }
      }
      function Wt(e, t) {
        if (!t || !e.length) return e;
        let n = [];
        for (let r = 0; r < e.length; r++) {
          let o = e[r];
          n.push(new $t(o.from + t, o.to + t, o.type));
        }
        return n;
      }
      function Ut(e, t, n) {
        if (t.isLeaf) return null;
        let r = n + t.nodeSize,
          o = null;
        for (let t, i = 0; i < e.length; i++)
          (t = e[i]) &&
            t.from > n &&
            t.to < r &&
            ((o || (o = [])).push(t), (e[i] = null));
        return o;
      }
      function qt(e) {
        let t = [];
        for (let n = 0; n < e.length; n++) null != e[n] && t.push(e[n]);
        return t;
      }
      function Gt(e, t, n, r) {
        let o = [],
          i = !1;
        t.forEach((t, s) => {
          let l = Ut(e, t, s + n);
          if (l) {
            i = !0;
            let e = Gt(l, t, n + s + 1, r);
            e != Ht && o.push(s, s + t.nodeSize, e);
          }
        });
        let s = Wt(i ? qt(e) : e, -n).sort(Xt);
        for (let e = 0; e < s.length; e++)
          s[e].type.valid(t, s[e]) ||
            (r.onRemove && r.onRemove(s[e].spec), s.splice(e--, 1));
        return s.length || o.length ? new Jt(s, o) : Ht;
      }
      function Xt(e, t) {
        return e.from - t.from || e.to - t.to;
      }
      function Yt(e) {
        let t = e;
        for (let n = 0; n < t.length - 1; n++) {
          let r = t[n];
          if (r.from != r.to)
            for (let o = n + 1; o < t.length; o++) {
              let i = t[o];
              if (i.from != r.from) {
                i.from < r.to &&
                  (t == e && (t = e.slice()),
                  (t[n] = r.copy(r.from, i.from)),
                  Zt(t, o, r.copy(i.from, r.to)));
                break;
              }
              i.to != r.to &&
                (t == e && (t = e.slice()),
                (t[o] = i.copy(i.from, r.to)),
                Zt(t, o + 1, i.copy(r.to, i.to)));
            }
        }
        return t;
      }
      function Zt(e, t, n) {
        for (; t < e.length && Xt(n, e[t]) > 0; ) t++;
        e.splice(t, 0, n);
      }
      function Qt(e) {
        let t = [];
        return (
          e.someProp("decorations", (n) => {
            let r = n(e.state);
            r && r != Ht && t.push(r);
          }),
          e.cursorWrapper &&
            t.push(Jt.create(e.state.doc, [e.cursorWrapper.deco])),
          Kt.from(t)
        );
      }
      const en = {
          childList: !0,
          characterData: !0,
          characterDataOldValue: !0,
          attributes: !0,
          attributeOldValue: !0,
          subtree: !0,
        },
        tn = k && C <= 11;
      class nn {
        constructor() {
          (this.anchorNode = null),
            (this.anchorOffset = 0),
            (this.focusNode = null),
            (this.focusOffset = 0);
        }
        set(e) {
          (this.anchorNode = e.anchorNode),
            (this.anchorOffset = e.anchorOffset),
            (this.focusNode = e.focusNode),
            (this.focusOffset = e.focusOffset);
        }
        clear() {
          this.anchorNode = this.focusNode = null;
        }
        eq(e) {
          return (
            e.anchorNode == this.anchorNode &&
            e.anchorOffset == this.anchorOffset &&
            e.focusNode == this.focusNode &&
            e.focusOffset == this.focusOffset
          );
        }
      }
      class rn {
        constructor(e, t) {
          (this.view = e),
            (this.handleDOMChange = t),
            (this.queue = []),
            (this.flushingSoon = -1),
            (this.observer = null),
            (this.currentSelection = new nn()),
            (this.onCharData = null),
            (this.suppressingSelectionUpdates = !1),
            (this.observer =
              window.MutationObserver &&
              new window.MutationObserver((e) => {
                for (let t = 0; t < e.length; t++) this.queue.push(e[t]);
                k &&
                C <= 11 &&
                e.some(
                  (e) =>
                    ("childList" == e.type && e.removedNodes.length) ||
                    ("characterData" == e.type &&
                      e.oldValue.length > e.target.nodeValue.length),
                )
                  ? this.flushSoon()
                  : this.flush();
              })),
            tn &&
              (this.onCharData = (e) => {
                this.queue.push({
                  target: e.target,
                  type: "characterData",
                  oldValue: e.prevValue,
                }),
                  this.flushSoon();
              }),
            (this.onSelectionChange = this.onSelectionChange.bind(this));
        }
        flushSoon() {
          this.flushingSoon < 0 &&
            (this.flushingSoon = window.setTimeout(() => {
              (this.flushingSoon = -1), this.flush();
            }, 20));
        }
        forceFlush() {
          this.flushingSoon > -1 &&
            (window.clearTimeout(this.flushingSoon),
            (this.flushingSoon = -1),
            this.flush());
        }
        start() {
          this.observer &&
            (this.observer.takeRecords(),
            this.observer.observe(this.view.dom, en)),
            this.onCharData &&
              this.view.dom.addEventListener(
                "DOMCharacterDataModified",
                this.onCharData,
              ),
            this.connectSelection();
        }
        stop() {
          if (this.observer) {
            let e = this.observer.takeRecords();
            if (e.length) {
              for (let t = 0; t < e.length; t++) this.queue.push(e[t]);
              window.setTimeout(() => this.flush(), 20);
            }
            this.observer.disconnect();
          }
          this.onCharData &&
            this.view.dom.removeEventListener(
              "DOMCharacterDataModified",
              this.onCharData,
            ),
            this.disconnectSelection();
        }
        connectSelection() {
          this.view.dom.ownerDocument.addEventListener(
            "selectionchange",
            this.onSelectionChange,
          );
        }
        disconnectSelection() {
          this.view.dom.ownerDocument.removeEventListener(
            "selectionchange",
            this.onSelectionChange,
          );
        }
        suppressSelectionUpdates() {
          (this.suppressingSelectionUpdates = !0),
            setTimeout(() => (this.suppressingSelectionUpdates = !1), 50);
        }
        onSelectionChange() {
          if (ze(this.view)) {
            if (this.suppressingSelectionUpdates) return Ae(this.view);
            if (k && C <= 11 && !this.view.state.selection.empty) {
              let e = this.view.domSelectionRange();
              if (
                e.focusNode &&
                h(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)
              )
                return this.flushSoon();
            }
            this.flush();
          }
        }
        setCurSelection() {
          this.currentSelection.set(this.view.domSelectionRange());
        }
        ignoreSelectionChange(e) {
          if (!e.focusNode) return !0;
          let t,
            n = new Set();
          for (let t = e.focusNode; t; t = l(t)) n.add(t);
          for (let r = e.anchorNode; r; r = l(r))
            if (n.has(r)) {
              t = r;
              break;
            }
          let r = t && this.view.docView.nearestDesc(t);
          return r &&
            r.ignoreMutation({
              type: "selection",
              target: 3 == t.nodeType ? t.parentNode : t,
            })
            ? (this.setCurSelection(), !0)
            : void 0;
        }
        pendingRecords() {
          if (this.observer)
            for (let e of this.observer.takeRecords()) this.queue.push(e);
          return this.queue;
        }
        flush() {
          let { view: e } = this;
          if (!e.docView || this.flushingSoon > -1) return;
          let t = this.pendingRecords();
          t.length && (this.queue = []);
          let n = e.domSelectionRange(),
            o =
              !this.suppressingSelectionUpdates &&
              !this.currentSelection.eq(n) &&
              ze(e) &&
              !this.ignoreSelectionChange(n),
            i = -1,
            s = -1,
            l = !1,
            a = [];
          if (e.editable)
            for (let e = 0; e < t.length; e++) {
              let n = this.registerMutation(t[e], a);
              n &&
                ((i = i < 0 ? n.from : Math.min(n.from, i)),
                (s = s < 0 ? n.to : Math.max(n.to, s)),
                n.typeOver && (l = !0));
            }
          if (O && a.length > 1) {
            let e = a.filter((e) => "BR" == e.nodeName);
            if (2 == e.length) {
              let t = e[0],
                n = e[1];
              t.parentNode && t.parentNode.parentNode == n.parentNode
                ? n.remove()
                : t.remove();
            }
          }
          let c = null;
          i < 0 &&
          o &&
          e.input.lastFocus > Date.now() - 200 &&
          Math.max(e.input.lastTouch, e.input.lastClick.time) <
            Date.now() - 300 &&
          m(n) &&
          (c = Me(e)) &&
          c.eq(r.LN.near(e.state.doc.resolve(0), 1))
            ? ((e.input.lastFocus = 0),
              Ae(e),
              this.currentSelection.set(n),
              e.scrollToSelection())
            : (i > -1 || o) &&
              (i > -1 &&
                (e.docView.markDirty(i, s),
                (function (e) {
                  if (on.has(e)) return;
                  if (
                    (on.set(e, null),
                    -1 !==
                      ["normal", "nowrap", "pre-line"].indexOf(
                        getComputedStyle(e.dom).whiteSpace,
                      ))
                  ) {
                    if (((e.requiresGeckoHackNode = O), sn)) return;
                    console.warn(
                      "ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.",
                    ),
                      (sn = !0);
                  }
                })(e)),
              this.handleDOMChange(i, s, l, a),
              e.docView && e.docView.dirty
                ? e.updateState(e.state)
                : this.currentSelection.eq(n) || Ae(e),
              this.currentSelection.set(n));
        }
        registerMutation(e, t) {
          if (t.indexOf(e.target) > -1) return null;
          let n = this.view.docView.nearestDesc(e.target);
          if (
            "attributes" == e.type &&
            (n == this.view.docView ||
              "contenteditable" == e.attributeName ||
              ("style" == e.attributeName &&
                !e.oldValue &&
                !e.target.getAttribute("style")))
          )
            return null;
          if (!n || n.ignoreMutation(e)) return null;
          if ("childList" == e.type) {
            for (let n = 0; n < e.addedNodes.length; n++)
              t.push(e.addedNodes[n]);
            if (
              n.contentDOM &&
              n.contentDOM != n.dom &&
              !n.contentDOM.contains(e.target)
            )
              return { from: n.posBefore, to: n.posAfter };
            let r = e.previousSibling,
              o = e.nextSibling;
            if (k && C <= 11 && e.addedNodes.length)
              for (let t = 0; t < e.addedNodes.length; t++) {
                let { previousSibling: n, nextSibling: i } = e.addedNodes[t];
                (!n || Array.prototype.indexOf.call(e.addedNodes, n) < 0) &&
                  (r = n),
                  (!i || Array.prototype.indexOf.call(e.addedNodes, i) < 0) &&
                    (o = i);
              }
            let i = r && r.parentNode == e.target ? s(r) + 1 : 0,
              l = n.localPosFromDOM(e.target, i, -1),
              a =
                o && o.parentNode == e.target
                  ? s(o)
                  : e.target.childNodes.length;
            return { from: l, to: n.localPosFromDOM(e.target, a, 1) };
          }
          return "attributes" == e.type
            ? { from: n.posAtStart - n.border, to: n.posAtEnd + n.border }
            : {
                from: n.posAtStart,
                to: n.posAtEnd,
                typeOver: e.target.nodeValue == e.oldValue,
              };
        }
      }
      let on = new WeakMap(),
        sn = !1;
      function ln(e, t) {
        let n = t.startContainer,
          r = t.startOffset,
          o = t.endContainer,
          i = t.endOffset,
          s = e.domAtPos(e.state.selection.anchor);
        return (
          h(s.node, s.offset, o, i) && ([n, r, o, i] = [o, i, n, r]),
          { anchorNode: n, anchorOffset: r, focusNode: o, focusOffset: i }
        );
      }
      function an(e) {
        let t = e.pmViewDesc;
        if (t) return t.parseRule();
        if ("BR" == e.nodeName && e.parentNode) {
          if (N && /^(ul|ol)$/i.test(e.parentNode.nodeName)) {
            let e = document.createElement("div");
            return e.appendChild(document.createElement("li")), { skip: e };
          }
          if (
            e.parentNode.lastChild == e ||
            (N && /^(tr|table)$/i.test(e.parentNode.nodeName))
          )
            return { ignore: !0 };
        } else if ("IMG" == e.nodeName && e.getAttribute("mark-placeholder"))
          return { ignore: !0 };
        return null;
      }
      const cn =
        /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
      function hn(e, t, n, i, s) {
        let l =
          e.input.compositionPendingChanges ||
          (e.composing ? e.input.compositionID : 0);
        if (((e.input.compositionPendingChanges = 0), t < 0)) {
          let t =
              e.input.lastSelectionTime > Date.now() - 50
                ? e.input.lastSelectionOrigin
                : null,
            n = Me(e, t);
          if (n && !e.state.selection.eq(n)) {
            if (
              E &&
              R &&
              13 === e.input.lastKeyCode &&
              Date.now() - 100 < e.input.lastKeyCodeTime &&
              e.someProp("handleKeyDown", (t) => t(e, g(13, "Enter")))
            )
              return;
            let r = e.state.tr.setSelection(n);
            "pointer" == t
              ? r.setMeta("pointer", !0)
              : "key" == t && r.scrollIntoView(),
              l && r.setMeta("composition", l),
              e.dispatch(r);
          }
          return;
        }
        let a = e.state.doc.resolve(t),
          c = a.sharedDepth(n);
        (t = a.before(c + 1)), (n = e.state.doc.resolve(n).after(c + 1));
        let h,
          p,
          u = e.state.selection,
          d = (function (e, t, n) {
            let r,
              {
                node: i,
                fromOffset: s,
                toOffset: l,
                from: a,
                to: c,
              } = e.docView.parseRange(t, n),
              h = e.domSelectionRange(),
              p = h.anchorNode;
            if (
              (p &&
                e.dom.contains(1 == p.nodeType ? p : p.parentNode) &&
                ((r = [{ node: p, offset: h.anchorOffset }]),
                m(h) || r.push({ node: h.focusNode, offset: h.focusOffset })),
              E && 8 === e.input.lastKeyCode)
            )
              for (let e = l; e > s; e--) {
                let t = i.childNodes[e - 1],
                  n = t.pmViewDesc;
                if ("BR" == t.nodeName && !n) {
                  l = e;
                  break;
                }
                if (!n || n.size) break;
              }
            let u = e.state.doc,
              d = e.someProp("domParser") || o.S4.fromSchema(e.state.schema),
              f = u.resolve(a),
              g = null,
              b = d.parse(i, {
                topNode: f.parent,
                topMatch: f.parent.contentMatchAt(f.index()),
                topOpen: !0,
                from: s,
                to: l,
                preserveWhitespace: "pre" != f.parent.type.whitespace || "full",
                findPositions: r,
                ruleFromNode: an,
                context: f,
              });
            if (r && null != r[0].pos) {
              let e = r[0].pos,
                t = r[1] && r[1].pos;
              null == t && (t = e), (g = { anchor: e + a, head: t + a });
            }
            return { doc: b, sel: g, from: a, to: c };
          })(e, t, n),
          f = e.state.doc,
          b = f.slice(d.from, d.to);
        8 === e.input.lastKeyCode && Date.now() - 100 < e.input.lastKeyCodeTime
          ? ((h = e.state.selection.to), (p = "end"))
          : ((h = e.state.selection.from), (p = "start")),
          (e.input.lastKeyCode = null);
        let y = (function (e, t, n, r, o) {
          let i = e.findDiffStart(t, n);
          if (null == i) return null;
          let { a: s, b: l } = e.findDiffEnd(t, n + e.size, n + t.size);
          if ("end" == o) {
            r -= s + Math.max(0, i - Math.min(s, l)) - i;
          }
          if (s < i && e.size < t.size) {
            let e = r <= i && r >= s ? i - r : 0;
            (i -= e),
              i &&
                i < t.size &&
                dn(t.textBetween(i - 1, i + 1)) &&
                (i += e ? 1 : -1),
              (l = i + (l - s)),
              (s = i);
          } else if (l < i) {
            let t = r <= i && r >= l ? i - r : 0;
            (i -= t),
              i &&
                i < e.size &&
                dn(e.textBetween(i - 1, i + 1)) &&
                (i += t ? 1 : -1),
              (s = i + (s - l)),
              (l = i);
          }
          return { start: i, endA: s, endB: l };
        })(b.content, d.doc.content, d.from, h, p);
        if (
          ((T && e.input.lastIOSEnter > Date.now() - 225) || R) &&
          s.some((e) => 1 == e.nodeType && !cn.test(e.nodeName)) &&
          (!y || y.endA >= y.endB) &&
          e.someProp("handleKeyDown", (t) => t(e, g(13, "Enter")))
        )
          return void (e.input.lastIOSEnter = 0);
        if (!y) {
          if (
            !(
              i &&
              u instanceof r.U3 &&
              !u.empty &&
              u.$head.sameParent(u.$anchor)
            ) ||
            e.composing ||
            (d.sel && d.sel.anchor != d.sel.head)
          ) {
            if (d.sel) {
              let t = pn(e, e.state.doc, d.sel);
              if (t && !t.eq(e.state.selection)) {
                let n = e.state.tr.setSelection(t);
                l && n.setMeta("composition", l), e.dispatch(n);
              }
            }
            return;
          }
          y = { start: u.from, endA: u.to, endB: u.to };
        }
        e.input.domChangeCount++,
          e.state.selection.from < e.state.selection.to &&
            y.start == y.endB &&
            e.state.selection instanceof r.U3 &&
            (y.start > e.state.selection.from &&
            y.start <= e.state.selection.from + 2 &&
            e.state.selection.from >= d.from
              ? (y.start = e.state.selection.from)
              : y.endA < e.state.selection.to &&
                y.endA >= e.state.selection.to - 2 &&
                e.state.selection.to <= d.to &&
                ((y.endB += e.state.selection.to - y.endA),
                (y.endA = e.state.selection.to))),
          k &&
            C <= 11 &&
            y.endB == y.start + 1 &&
            y.endA == y.start &&
            y.start > d.from &&
            "  " ==
              d.doc.textBetween(y.start - d.from - 1, y.start - d.from + 1) &&
            (y.start--, y.endA--, y.endB--);
        let v,
          w = d.doc.resolveNoCache(y.start - d.from),
          x = d.doc.resolveNoCache(y.endB - d.from),
          S = f.resolve(y.start),
          O = w.sameParent(x) && w.parent.inlineContent && S.end() >= y.endA;
        if (
          ((T &&
            e.input.lastIOSEnter > Date.now() - 225 &&
            (!O || s.some((e) => "DIV" == e.nodeName || "P" == e.nodeName))) ||
            (!O &&
              w.pos < d.doc.content.size &&
              !w.sameParent(x) &&
              (v = r.LN.findFrom(d.doc.resolve(w.pos + 1), 1, !0)) &&
              v.head == x.pos)) &&
          e.someProp("handleKeyDown", (t) => t(e, g(13, "Enter")))
        )
          return void (e.input.lastIOSEnter = 0);
        if (
          e.state.selection.anchor > y.start &&
          (function (e, t, n, r, o) {
            if (n - t <= o.pos - r.pos || un(r, !0, !1) < o.pos) return !1;
            let i = e.resolve(t);
            if (!r.parent.isTextblock) {
              let e = i.nodeAfter;
              return null != e && n == t + e.nodeSize;
            }
            if (i.parentOffset < i.parent.content.size || !i.parent.isTextblock)
              return !1;
            let s = e.resolve(un(i, !0, !0));
            return (
              !(!s.parent.isTextblock || s.pos > n || un(s, !0, !1) < n) &&
              r.parent.content.cut(r.parentOffset).eq(s.parent.content)
            );
          })(f, y.start, y.endA, w, x) &&
          e.someProp("handleKeyDown", (t) => t(e, g(8, "Backspace")))
        )
          return void (R && E && e.domObserver.suppressSelectionUpdates());
        E && R && y.endB == y.start && (e.input.lastAndroidDelete = Date.now()),
          R &&
            !O &&
            w.start() != x.start() &&
            0 == x.parentOffset &&
            w.depth == x.depth &&
            d.sel &&
            d.sel.anchor == d.sel.head &&
            d.sel.head == y.endA &&
            ((y.endB -= 2),
            (x = d.doc.resolveNoCache(y.endB - d.from)),
            setTimeout(() => {
              e.someProp("handleKeyDown", function (t) {
                return t(e, g(13, "Enter"));
              });
            }, 20));
        let M,
          A,
          N,
          _ = y.start,
          D = y.endA;
        if (O)
          if (w.pos == x.pos)
            k &&
              C <= 11 &&
              0 == w.parentOffset &&
              (e.domObserver.suppressSelectionUpdates(),
              setTimeout(() => Ae(e), 20)),
              (M = e.state.tr.delete(_, D)),
              (A = f.resolve(y.start).marksAcross(f.resolve(y.endA)));
          else if (
            y.endA == y.endB &&
            (N = (function (e, t) {
              let n,
                r,
                i,
                s = e.firstChild.marks,
                l = t.firstChild.marks,
                a = s,
                c = l;
              for (let e = 0; e < l.length; e++) a = l[e].removeFromSet(a);
              for (let e = 0; e < s.length; e++) c = s[e].removeFromSet(c);
              if (1 == a.length && 0 == c.length)
                (r = a[0]),
                  (n = "add"),
                  (i = (e) => e.mark(r.addToSet(e.marks)));
              else {
                if (0 != a.length || 1 != c.length) return null;
                (r = c[0]),
                  (n = "remove"),
                  (i = (e) => e.mark(r.removeFromSet(e.marks)));
              }
              let h = [];
              for (let e = 0; e < t.childCount; e++) h.push(i(t.child(e)));
              if (o.FK.from(h).eq(e)) return { mark: r, type: n };
            })(
              w.parent.content.cut(w.parentOffset, x.parentOffset),
              S.parent.content.cut(S.parentOffset, y.endA - S.start()),
            ))
          )
            (M = e.state.tr),
              "add" == N.type
                ? M.addMark(_, D, N.mark)
                : M.removeMark(_, D, N.mark);
          else if (
            w.parent.child(w.index()).isText &&
            w.index() == x.index() - (x.textOffset ? 0 : 1)
          ) {
            let t = w.parent.textBetween(w.parentOffset, x.parentOffset);
            if (e.someProp("handleTextInput", (n) => n(e, _, D, t))) return;
            M = e.state.tr.insertText(t, _, D);
          }
        if (
          (M ||
            (M = e.state.tr.replace(
              _,
              D,
              d.doc.slice(y.start - d.from, y.endB - d.from),
            )),
          d.sel)
        ) {
          let t = pn(e, M.doc, d.sel);
          t &&
            !(
              (E &&
                R &&
                e.composing &&
                t.empty &&
                (y.start != y.endB ||
                  e.input.lastAndroidDelete < Date.now() - 100) &&
                (t.head == _ || t.head == M.mapping.map(D) - 1)) ||
              (k && t.empty && t.head == _)
            ) &&
            M.setSelection(t);
        }
        A && M.ensureMarks(A),
          l && M.setMeta("composition", l),
          e.dispatch(M.scrollIntoView());
      }
      function pn(e, t, n) {
        return Math.max(n.anchor, n.head) > t.content.size
          ? null
          : Fe(e, t.resolve(n.anchor), t.resolve(n.head));
      }
      function un(e, t, n) {
        let r = e.depth,
          o = t ? e.end() : e.pos;
        for (; r > 0 && (t || e.indexAfter(r) == e.node(r).childCount); )
          r--, o++, (t = !1);
        if (n) {
          let t = e.node(r).maybeChild(e.indexAfter(r));
          for (; t && !t.isLeaf; ) (t = t.firstChild), o++;
        }
        return o;
      }
      function dn(e) {
        if (2 != e.length) return !1;
        let t = e.charCodeAt(0),
          n = e.charCodeAt(1);
        return t >= 56320 && t <= 57343 && n >= 55296 && n <= 56319;
      }
      class fn {
        constructor(e, t) {
          (this._root = null),
            (this.focused = !1),
            (this.trackWrites = null),
            (this.mounted = !1),
            (this.markCursor = null),
            (this.cursorWrapper = null),
            (this.lastSelectedViewDesc = void 0),
            (this.input = new pt()),
            (this.prevDirectPlugins = []),
            (this.pluginViews = []),
            (this.requiresGeckoHackNode = !1),
            (this.dragging = null),
            (this._props = t),
            (this.state = t.state),
            (this.directPlugins = t.plugins || []),
            this.directPlugins.forEach(vn),
            (this.dispatch = this.dispatch.bind(this)),
            (this.dom = (e && e.mount) || document.createElement("div")),
            e &&
              (e.appendChild
                ? e.appendChild(this.dom)
                : "function" == typeof e
                  ? e(this.dom)
                  : e.mount && (this.mounted = !0)),
            (this.editable = bn(this)),
            gn(this),
            (this.nodeViews = yn(this)),
            (this.docView = he(
              this.state.doc,
              mn(this),
              Qt(this),
              this.dom,
              this,
            )),
            (this.domObserver = new rn(this, (e, t, n, r) =>
              hn(this, e, t, n, r),
            )),
            this.domObserver.start(),
            (function (e) {
              for (let t in at) {
                let n = at[t];
                e.dom.addEventListener(
                  t,
                  (e.input.eventHandlers[t] = (t) => {
                    !mt(e, t) ||
                      ft(e, t) ||
                      (!e.editable && t.type in ct) ||
                      n(e, t);
                  }),
                  ht[t] ? { passive: !0 } : void 0,
                );
              }
              N && e.dom.addEventListener("input", () => null), dt(e);
            })(this),
            this.updatePluginViews();
        }
        get composing() {
          return this.input.composing;
        }
        get props() {
          if (this._props.state != this.state) {
            let e = this._props;
            this._props = {};
            for (let t in e) this._props[t] = e[t];
            this._props.state = this.state;
          }
          return this._props;
        }
        update(e) {
          e.handleDOMEvents != this._props.handleDOMEvents && dt(this);
          let t = this._props;
          (this._props = e),
            e.plugins &&
              (e.plugins.forEach(vn), (this.directPlugins = e.plugins)),
            this.updateStateInner(e.state, t);
        }
        setProps(e) {
          let t = {};
          for (let e in this._props) t[e] = this._props[e];
          t.state = this.state;
          for (let n in e) t[n] = e[n];
          this.update(t);
        }
        updateState(e) {
          this.updateStateInner(e, this._props);
        }
        updateStateInner(e, t) {
          var n;
          let r = this.state,
            o = !1,
            i = !1;
          e.storedMarks && this.composing && (At(this), (i = !0)),
            (this.state = e);
          let s = r.plugins != e.plugins || this._props.plugins != t.plugins;
          if (
            s ||
            this._props.plugins != t.plugins ||
            this._props.nodeViews != t.nodeViews
          ) {
            let e = yn(this);
            (function (e, t) {
              let n = 0,
                r = 0;
              for (let r in e) {
                if (e[r] != t[r]) return !0;
                n++;
              }
              for (let e in t) r++;
              return n != r;
            })(e, this.nodeViews) && ((this.nodeViews = e), (o = !0));
          }
          (s || t.handleDOMEvents != this._props.handleDOMEvents) && dt(this),
            (this.editable = bn(this)),
            gn(this);
          let l = Qt(this),
            a = mn(this),
            c =
              r.plugins == e.plugins || r.doc.eq(e.doc)
                ? e.scrollToSelection > r.scrollToSelection
                  ? "to selection"
                  : "preserve"
                : "reset",
            p = o || !this.docView.matchesNode(e.doc, a, l);
          (!p && e.selection.eq(r.selection)) || (i = !0);
          let u =
            "preserve" == c &&
            i &&
            null == this.dom.style.overflowAnchor &&
            (function (e) {
              let t,
                n,
                r = e.dom.getBoundingClientRect(),
                o = Math.max(0, r.top);
              for (
                let i = (r.left + r.right) / 2, s = o + 1;
                s < Math.min(innerHeight, r.bottom);
                s += 5
              ) {
                let r = e.root.elementFromPoint(i, s);
                if (!r || r == e.dom || !e.dom.contains(r)) continue;
                let l = r.getBoundingClientRect();
                if (l.top >= o - 20) {
                  (t = r), (n = l.top);
                  break;
                }
              }
              return { refDOM: t, refTop: n, stack: $(e.dom) };
            })(this);
          if (i) {
            this.domObserver.stop();
            let t =
              p &&
              (k || E) &&
              !this.composing &&
              !r.selection.empty &&
              !e.selection.empty &&
              (function (e, t) {
                let n = Math.min(
                  e.$anchor.sharedDepth(e.head),
                  t.$anchor.sharedDepth(t.head),
                );
                return e.$anchor.start(n) != t.$anchor.start(n);
              })(r.selection, e.selection);
            if (p) {
              let n = E
                ? (this.trackWrites = this.domSelectionRange().focusNode)
                : null;
              this.composing && (this.input.compositionNode = Nt(this)),
                (!o && this.docView.update(e.doc, a, l, this)) ||
                  (this.docView.updateOuterDeco(a),
                  this.docView.destroy(),
                  (this.docView = he(e.doc, a, l, this.dom, this))),
                n && !this.trackWrites && (t = !0);
            }
            t ||
            !(
              this.input.mouseDown &&
              this.domObserver.currentSelection.eq(this.domSelectionRange()) &&
              (function (e) {
                let t = e.docView.domFromPos(e.state.selection.anchor, 0),
                  n = e.domSelectionRange();
                return h(t.node, t.offset, n.anchorNode, n.anchorOffset);
              })(this)
            )
              ? Ae(this, t)
              : (Re(this, e.selection), this.domObserver.setCurSelection()),
              this.domObserver.start();
          }
          this.updatePluginViews(r),
            (null === (n = this.dragging) || void 0 === n ? void 0 : n.node) &&
              !r.doc.eq(e.doc) &&
              this.updateDraggedNode(this.dragging, r),
            "reset" == c
              ? (this.dom.scrollTop = 0)
              : "to selection" == c
                ? this.scrollToSelection()
                : u &&
                  (function ({ refDOM: e, refTop: t, stack: n }) {
                    let r = e ? e.getBoundingClientRect().top : 0;
                    L(n, 0 == r ? 0 : r - t);
                  })(u);
        }
        scrollToSelection() {
          let e = this.domSelectionRange().focusNode;
          if (this.someProp("handleScrollToSelection", (e) => e(this)));
          else if (this.state.selection instanceof r.nh) {
            let t = this.docView.domAfterPos(this.state.selection.from);
            1 == t.nodeType && I(this, t.getBoundingClientRect(), e);
          } else I(this, this.coordsAtPos(this.state.selection.head, 1), e);
        }
        destroyPluginViews() {
          let e;
          for (; (e = this.pluginViews.pop()); ) e.destroy && e.destroy();
        }
        updatePluginViews(e) {
          if (
            e &&
            e.plugins == this.state.plugins &&
            this.directPlugins == this.prevDirectPlugins
          )
            for (let t = 0; t < this.pluginViews.length; t++) {
              let n = this.pluginViews[t];
              n.update && n.update(this, e);
            }
          else {
            (this.prevDirectPlugins = this.directPlugins),
              this.destroyPluginViews();
            for (let e = 0; e < this.directPlugins.length; e++) {
              let t = this.directPlugins[e];
              t.spec.view && this.pluginViews.push(t.spec.view(this));
            }
            for (let e = 0; e < this.state.plugins.length; e++) {
              let t = this.state.plugins[e];
              t.spec.view && this.pluginViews.push(t.spec.view(this));
            }
          }
        }
        updateDraggedNode(e, t) {
          let n = e.node,
            o = -1;
          if (this.state.doc.nodeAt(n.from) == n.node) o = n.from;
          else {
            let e = n.from + (this.state.doc.content.size - t.doc.content.size);
            (e > 0 && this.state.doc.nodeAt(e)) == n.node && (o = e);
          }
          this.dragging = new jt(
            e.slice,
            e.move,
            o < 0 ? void 0 : r.nh.create(this.state.doc, o),
          );
        }
        someProp(e, t) {
          let n,
            r = this._props && this._props[e];
          if (null != r && (n = t ? t(r) : r)) return n;
          for (let r = 0; r < this.directPlugins.length; r++) {
            let o = this.directPlugins[r].props[e];
            if (null != o && (n = t ? t(o) : o)) return n;
          }
          let o = this.state.plugins;
          if (o)
            for (let r = 0; r < o.length; r++) {
              let i = o[r].props[e];
              if (null != i && (n = t ? t(i) : i)) return n;
            }
        }
        hasFocus() {
          if (k) {
            let e = this.root.activeElement;
            if (e == this.dom) return !0;
            if (!e || !this.dom.contains(e)) return !1;
            for (; e && this.dom != e && this.dom.contains(e); ) {
              if ("false" == e.contentEditable) return !1;
              e = e.parentElement;
            }
            return !0;
          }
          return this.root.activeElement == this.dom;
        }
        focus() {
          this.domObserver.stop(),
            this.editable &&
              (function (e) {
                if (e.setActive) return e.setActive();
                if (V) return e.focus(V);
                let t = $(e);
                e.focus(
                  null == V
                    ? {
                        get preventScroll() {
                          return (V = { preventScroll: !0 }), !0;
                        },
                      }
                    : void 0,
                ),
                  V || ((V = !1), L(t, 0));
              })(this.dom),
            Ae(this),
            this.domObserver.start();
        }
        get root() {
          let e = this._root;
          if (null == e)
            for (let e = this.dom.parentNode; e; e = e.parentNode)
              if (9 == e.nodeType || (11 == e.nodeType && e.host))
                return (
                  e.getSelection ||
                    (Object.getPrototypeOf(e).getSelection = () =>
                      e.ownerDocument.getSelection()),
                  (this._root = e)
                );
          return e || document;
        }
        updateRoot() {
          this._root = null;
        }
        posAtCoords(e) {
          return W(this, e);
        }
        coordsAtPos(e, t = 1) {
          return X(this, e, t);
        }
        domAtPos(e, t = 0) {
          return this.docView.domFromPos(e, t);
        }
        nodeDOM(e) {
          let t = this.docView.descAt(e);
          return t ? t.nodeDOM : null;
        }
        posAtDOM(e, t, n = -1) {
          let r = this.docView.posFromDOM(e, t, n);
          if (null == r)
            throw new RangeError("DOM position not inside the editor");
          return r;
        }
        endOfTextblock(e, t) {
          return oe(this, t || this.state, e);
        }
        pasteHTML(e, t) {
          return Dt(this, "", e, !1, t || new ClipboardEvent("paste"));
        }
        pasteText(e, t) {
          return Dt(this, e, null, !0, t || new ClipboardEvent("paste"));
        }
        destroy() {
          this.docView &&
            (!(function (e) {
              e.domObserver.stop();
              for (let t in e.input.eventHandlers)
                e.dom.removeEventListener(t, e.input.eventHandlers[t]);
              clearTimeout(e.input.composingTimeout),
                clearTimeout(e.input.lastIOSEnterFallbackTimeout);
            })(this),
            this.destroyPluginViews(),
            this.mounted
              ? (this.docView.update(this.state.doc, [], Qt(this), this),
                (this.dom.textContent = ""))
              : this.dom.parentNode &&
                this.dom.parentNode.removeChild(this.dom),
            this.docView.destroy(),
            (this.docView = null),
            (a = null));
        }
        get isDestroyed() {
          return null == this.docView;
        }
        dispatchEvent(e) {
          return (function (e, t) {
            ft(e, t) ||
              !at[t.type] ||
              (!e.editable && t.type in ct) ||
              at[t.type](e, t);
          })(this, e);
        }
        dispatch(e) {
          let t = this._props.dispatchTransaction;
          t ? t.call(this, e) : this.updateState(this.state.apply(e));
        }
        domSelectionRange() {
          let e = this.domSelection();
          return (
            (N &&
              11 === this.root.nodeType &&
              (function (e) {
                let t = e.activeElement;
                for (; t && t.shadowRoot; ) t = t.shadowRoot.activeElement;
                return t;
              })(this.dom.ownerDocument) == this.dom &&
              (function (e, t) {
                if (t.getComposedRanges) {
                  let n = t.getComposedRanges(e.root)[0];
                  if (n) return ln(e, n);
                }
                let n;
                function r(e) {
                  e.preventDefault(),
                    e.stopImmediatePropagation(),
                    (n = e.getTargetRanges()[0]);
                }
                return (
                  e.dom.addEventListener("beforeinput", r, !0),
                  document.execCommand("indent"),
                  e.dom.removeEventListener("beforeinput", r, !0),
                  n ? ln(e, n) : null
                );
              })(this, e)) ||
            e
          );
        }
        domSelection() {
          return this.root.getSelection();
        }
      }
      function mn(e) {
        let t = Object.create(null);
        return (
          (t.class = "ProseMirror"),
          (t.contenteditable = String(e.editable)),
          e.someProp("attributes", (n) => {
            if (("function" == typeof n && (n = n(e.state)), n))
              for (let e in n)
                "class" == e
                  ? (t.class += " " + n[e])
                  : "style" == e
                    ? (t.style = (t.style ? t.style + ";" : "") + n[e])
                    : t[e] ||
                      "contenteditable" == e ||
                      "nodeName" == e ||
                      (t[e] = String(n[e]));
          }),
          t.translate || (t.translate = "no"),
          [$t.node(0, e.state.doc.content.size, t)]
        );
      }
      function gn(e) {
        if (e.markCursor) {
          let t = document.createElement("img");
          (t.className = "ProseMirror-separator"),
            t.setAttribute("mark-placeholder", "true"),
            t.setAttribute("alt", ""),
            (e.cursorWrapper = {
              dom: t,
              deco: $t.widget(e.state.selection.head, t, {
                raw: !0,
                marks: e.markCursor,
              }),
            });
        } else e.cursorWrapper = null;
      }
      function bn(e) {
        return !e.someProp("editable", (t) => !1 === t(e.state));
      }
      function yn(e) {
        let t = Object.create(null);
        function n(e) {
          for (let n in e)
            Object.prototype.hasOwnProperty.call(t, n) || (t[n] = e[n]);
        }
        return e.someProp("nodeViews", n), e.someProp("markViews", n), t;
      }
      function vn(e) {
        if (
          e.spec.state ||
          e.spec.filterTransaction ||
          e.spec.appendTransaction
        )
          throw new RangeError(
            "Plugins passed directly to the view must not have a state component",
          );
      }
    },
    98724: (e, t, n) => {
      "use strict";
      n.d(t, { b6: () => x, ZS: () => C, tN: () => k });
      var r = 200,
        o = function () {};
      (o.prototype.append = function (e) {
        return e.length
          ? ((e = o.from(e)),
            (!this.length && e) ||
              (e.length < r && this.leafAppend(e)) ||
              (this.length < r && e.leafPrepend(this)) ||
              this.appendInner(e))
          : this;
      }),
        (o.prototype.prepend = function (e) {
          return e.length ? o.from(e).append(this) : this;
        }),
        (o.prototype.appendInner = function (e) {
          return new s(this, e);
        }),
        (o.prototype.slice = function (e, t) {
          return (
            void 0 === e && (e = 0),
            void 0 === t && (t = this.length),
            e >= t
              ? o.empty
              : this.sliceInner(Math.max(0, e), Math.min(this.length, t))
          );
        }),
        (o.prototype.get = function (e) {
          if (!(e < 0 || e >= this.length)) return this.getInner(e);
        }),
        (o.prototype.forEach = function (e, t, n) {
          void 0 === t && (t = 0),
            void 0 === n && (n = this.length),
            t <= n
              ? this.forEachInner(e, t, n, 0)
              : this.forEachInvertedInner(e, t, n, 0);
        }),
        (o.prototype.map = function (e, t, n) {
          void 0 === t && (t = 0), void 0 === n && (n = this.length);
          var r = [];
          return (
            this.forEach(
              function (t, n) {
                return r.push(e(t, n));
              },
              t,
              n,
            ),
            r
          );
        }),
        (o.from = function (e) {
          return e instanceof o ? e : e && e.length ? new i(e) : o.empty;
        });
      var i = (function (e) {
        function t(t) {
          e.call(this), (this.values = t);
        }
        e && (t.__proto__ = e),
          (t.prototype = Object.create(e && e.prototype)),
          (t.prototype.constructor = t);
        var n = { length: { configurable: !0 }, depth: { configurable: !0 } };
        return (
          (t.prototype.flatten = function () {
            return this.values;
          }),
          (t.prototype.sliceInner = function (e, n) {
            return 0 == e && n == this.length
              ? this
              : new t(this.values.slice(e, n));
          }),
          (t.prototype.getInner = function (e) {
            return this.values[e];
          }),
          (t.prototype.forEachInner = function (e, t, n, r) {
            for (var o = t; o < n; o++)
              if (!1 === e(this.values[o], r + o)) return !1;
          }),
          (t.prototype.forEachInvertedInner = function (e, t, n, r) {
            for (var o = t - 1; o >= n; o--)
              if (!1 === e(this.values[o], r + o)) return !1;
          }),
          (t.prototype.leafAppend = function (e) {
            if (this.length + e.length <= r)
              return new t(this.values.concat(e.flatten()));
          }),
          (t.prototype.leafPrepend = function (e) {
            if (this.length + e.length <= r)
              return new t(e.flatten().concat(this.values));
          }),
          (n.length.get = function () {
            return this.values.length;
          }),
          (n.depth.get = function () {
            return 0;
          }),
          Object.defineProperties(t.prototype, n),
          t
        );
      })(o);
      o.empty = new i([]);
      var s = (function (e) {
        function t(t, n) {
          e.call(this),
            (this.left = t),
            (this.right = n),
            (this.length = t.length + n.length),
            (this.depth = Math.max(t.depth, n.depth) + 1);
        }
        return (
          e && (t.__proto__ = e),
          (t.prototype = Object.create(e && e.prototype)),
          (t.prototype.constructor = t),
          (t.prototype.flatten = function () {
            return this.left.flatten().concat(this.right.flatten());
          }),
          (t.prototype.getInner = function (e) {
            return e < this.left.length
              ? this.left.get(e)
              : this.right.get(e - this.left.length);
          }),
          (t.prototype.forEachInner = function (e, t, n, r) {
            var o = this.left.length;
            return (
              !(
                t < o && !1 === this.left.forEachInner(e, t, Math.min(n, o), r)
              ) &&
              !(
                n > o &&
                !1 ===
                  this.right.forEachInner(
                    e,
                    Math.max(t - o, 0),
                    Math.min(this.length, n) - o,
                    r + o,
                  )
              ) &&
              void 0
            );
          }),
          (t.prototype.forEachInvertedInner = function (e, t, n, r) {
            var o = this.left.length;
            return (
              !(
                t > o &&
                !1 ===
                  this.right.forEachInvertedInner(
                    e,
                    t - o,
                    Math.max(n, o) - o,
                    r + o,
                  )
              ) &&
              !(
                n < o &&
                !1 === this.left.forEachInvertedInner(e, Math.min(t, o), n, r)
              ) &&
              void 0
            );
          }),
          (t.prototype.sliceInner = function (e, t) {
            if (0 == e && t == this.length) return this;
            var n = this.left.length;
            return t <= n
              ? this.left.slice(e, t)
              : e >= n
                ? this.right.slice(e - n, t - n)
                : this.left.slice(e, n).append(this.right.slice(0, t - n));
          }),
          (t.prototype.leafAppend = function (e) {
            var n = this.right.leafAppend(e);
            if (n) return new t(this.left, n);
          }),
          (t.prototype.leafPrepend = function (e) {
            var n = this.left.leafPrepend(e);
            if (n) return new t(n, this.right);
          }),
          (t.prototype.appendInner = function (e) {
            return this.left.depth >= Math.max(this.right.depth, e.depth) + 1
              ? new t(this.left, new t(this.right, e))
              : new t(this, e);
          }),
          t
        );
      })(o);
      const l = o;
      var a = n(63734),
        c = n(52893);
      class h {
        constructor(e, t) {
          (this.items = e), (this.eventCount = t);
        }
        popEvent(e, t) {
          if (0 == this.eventCount) return null;
          let n,
            r,
            o = this.items.length;
          for (; ; o--) {
            if (this.items.get(o - 1).selection) {
              --o;
              break;
            }
          }
          t &&
            ((n = this.remapping(o, this.items.length)), (r = n.maps.length));
          let i,
            s,
            l = e.tr,
            a = [],
            c = [];
          return (
            this.items.forEach(
              (e, t) => {
                if (!e.step)
                  return (
                    n || ((n = this.remapping(o, t + 1)), (r = n.maps.length)),
                    r--,
                    void c.push(e)
                  );
                if (n) {
                  c.push(new p(e.map));
                  let t,
                    o = e.step.map(n.slice(r));
                  o &&
                    l.maybeStep(o).doc &&
                    ((t = l.mapping.maps[l.mapping.maps.length - 1]),
                    a.push(new p(t, void 0, void 0, a.length + c.length))),
                    r--,
                    t && n.appendMap(t, r);
                } else l.maybeStep(e.step);
                return e.selection
                  ? ((i = n ? e.selection.map(n.slice(r)) : e.selection),
                    (s = new h(
                      this.items.slice(0, o).append(c.reverse().concat(a)),
                      this.eventCount - 1,
                    )),
                    !1)
                  : void 0;
              },
              this.items.length,
              0,
            ),
            { remaining: s, transform: l, selection: i }
          );
        }
        addTransform(e, t, n, r) {
          let o = [],
            i = this.eventCount,
            s = this.items,
            l = !r && s.length ? s.get(s.length - 1) : null;
          for (let n = 0; n < e.steps.length; n++) {
            let a,
              c = e.steps[n].invert(e.docs[n]),
              h = new p(e.mapping.maps[n], c, t);
            (a = l && l.merge(h)) &&
              ((h = a), n ? o.pop() : (s = s.slice(0, s.length - 1))),
              o.push(h),
              t && (i++, (t = void 0)),
              r || (l = h);
          }
          let a = i - n.depth;
          return (
            a > d &&
              ((s = (function (e, t) {
                let n;
                return (
                  e.forEach((e, r) => {
                    if (e.selection && 0 == t--) return (n = r), !1;
                  }),
                  e.slice(n)
                );
              })(s, a)),
              (i -= a)),
            new h(s.append(o), i)
          );
        }
        remapping(e, t) {
          let n = new a.X9();
          return (
            this.items.forEach(
              (t, r) => {
                let o =
                  null != t.mirrorOffset && r - t.mirrorOffset >= e
                    ? n.maps.length - t.mirrorOffset
                    : void 0;
                n.appendMap(t.map, o);
              },
              e,
              t,
            ),
            n
          );
        }
        addMaps(e) {
          return 0 == this.eventCount
            ? this
            : new h(this.items.append(e.map((e) => new p(e))), this.eventCount);
        }
        rebased(e, t) {
          if (!this.eventCount) return this;
          let n = [],
            r = Math.max(0, this.items.length - t),
            o = e.mapping,
            i = e.steps.length,
            s = this.eventCount;
          this.items.forEach((e) => {
            e.selection && s--;
          }, r);
          let l = t;
          this.items.forEach((t) => {
            let r = o.getMirror(--l);
            if (null == r) return;
            i = Math.min(i, r);
            let a = o.maps[r];
            if (t.step) {
              let i = e.steps[r].invert(e.docs[r]),
                c = t.selection && t.selection.map(o.slice(l + 1, r));
              c && s++, n.push(new p(a, i, c));
            } else n.push(new p(a));
          }, r);
          let a = [];
          for (let e = t; e < i; e++) a.push(new p(o.maps[e]));
          let c = this.items.slice(0, r).append(a).append(n),
            u = new h(c, s);
          return (
            u.emptyItemCount() > 500 &&
              (u = u.compress(this.items.length - n.length)),
            u
          );
        }
        emptyItemCount() {
          let e = 0;
          return (
            this.items.forEach((t) => {
              t.step || e++;
            }),
            e
          );
        }
        compress(e = this.items.length) {
          let t = this.remapping(0, e),
            n = t.maps.length,
            r = [],
            o = 0;
          return (
            this.items.forEach(
              (i, s) => {
                if (s >= e) r.push(i), i.selection && o++;
                else if (i.step) {
                  let e = i.step.map(t.slice(n)),
                    s = e && e.getMap();
                  if ((n--, s && t.appendMap(s, n), e)) {
                    let l = i.selection && i.selection.map(t.slice(n));
                    l && o++;
                    let a,
                      c = new p(s.invert(), e, l),
                      h = r.length - 1;
                    (a = r.length && r[h].merge(c)) ? (r[h] = a) : r.push(c);
                  }
                } else i.map && n--;
              },
              this.items.length,
              0,
            ),
            new h(l.from(r.reverse()), o)
          );
        }
      }
      h.empty = new h(l.empty, 0);
      class p {
        constructor(e, t, n, r) {
          (this.map = e),
            (this.step = t),
            (this.selection = n),
            (this.mirrorOffset = r);
        }
        merge(e) {
          if (this.step && e.step && !e.selection) {
            let t = e.step.merge(this.step);
            if (t) return new p(t.getMap().invert(), t, this.selection);
          }
        }
      }
      class u {
        constructor(e, t, n, r, o) {
          (this.done = e),
            (this.undone = t),
            (this.prevRanges = n),
            (this.prevTime = r),
            (this.prevComposition = o);
        }
      }
      const d = 20;
      function f(e) {
        let t = [];
        return e.forEach((e, n, r, o) => t.push(r, o)), t;
      }
      function m(e, t) {
        if (!e) return null;
        let n = [];
        for (let r = 0; r < e.length; r += 2) {
          let o = t.map(e[r], 1),
            i = t.map(e[r + 1], -1);
          o <= i && n.push(o, i);
        }
        return n;
      }
      let g = !1,
        b = null;
      function y(e) {
        let t = e.plugins;
        if (b != t) {
          (g = !1), (b = t);
          for (let e = 0; e < t.length; e++)
            if (t[e].spec.historyPreserveItems) {
              g = !0;
              break;
            }
        }
        return g;
      }
      const v = new c.hs("history"),
        w = new c.hs("closeHistory");
      function x(e = {}) {
        return (
          (e = {
            depth: e.depth || 100,
            newGroupDelay: e.newGroupDelay || 500,
          }),
          new c.k_({
            key: v,
            state: {
              init: () => new u(h.empty, h.empty, null, 0, -1),
              apply: (t, n, r) =>
                (function (e, t, n, r) {
                  let o,
                    i = n.getMeta(v);
                  if (i) return i.historyState;
                  n.getMeta(w) && (e = new u(e.done, e.undone, null, 0, -1));
                  let s = n.getMeta("appendedTransaction");
                  if (0 == n.steps.length) return e;
                  if (s && s.getMeta(v))
                    return s.getMeta(v).redo
                      ? new u(
                          e.done.addTransform(n, void 0, r, y(t)),
                          e.undone,
                          f(n.mapping.maps[n.steps.length - 1]),
                          e.prevTime,
                          e.prevComposition,
                        )
                      : new u(
                          e.done,
                          e.undone.addTransform(n, void 0, r, y(t)),
                          null,
                          e.prevTime,
                          e.prevComposition,
                        );
                  if (
                    !1 === n.getMeta("addToHistory") ||
                    (s && !1 === s.getMeta("addToHistory"))
                  )
                    return (o = n.getMeta("rebased"))
                      ? new u(
                          e.done.rebased(n, o),
                          e.undone.rebased(n, o),
                          m(e.prevRanges, n.mapping),
                          e.prevTime,
                          e.prevComposition,
                        )
                      : new u(
                          e.done.addMaps(n.mapping.maps),
                          e.undone.addMaps(n.mapping.maps),
                          m(e.prevRanges, n.mapping),
                          e.prevTime,
                          e.prevComposition,
                        );
                  {
                    let o = n.getMeta("composition"),
                      i =
                        0 == e.prevTime ||
                        (!s &&
                          e.prevComposition != o &&
                          (e.prevTime < (n.time || 0) - r.newGroupDelay ||
                            !(function (e, t) {
                              if (!t) return !1;
                              if (!e.docChanged) return !0;
                              let n = !1;
                              return (
                                e.mapping.maps[0].forEach((e, r) => {
                                  for (let o = 0; o < t.length; o += 2)
                                    e <= t[o + 1] && r >= t[o] && (n = !0);
                                }),
                                n
                              );
                            })(n, e.prevRanges))),
                      l = s
                        ? m(e.prevRanges, n.mapping)
                        : f(n.mapping.maps[n.steps.length - 1]);
                    return new u(
                      e.done.addTransform(
                        n,
                        i ? t.selection.getBookmark() : void 0,
                        r,
                        y(t),
                      ),
                      h.empty,
                      l,
                      n.time,
                      null == o ? e.prevComposition : o,
                    );
                  }
                })(n, r, t, e),
            },
            config: e,
            props: {
              handleDOMEvents: {
                beforeinput(e, t) {
                  let n = t.inputType,
                    r = "historyUndo" == n ? k : "historyRedo" == n ? C : null;
                  return !!r && (t.preventDefault(), r(e.state, e.dispatch));
                },
              },
            },
          })
        );
      }
      function S(e, t) {
        return (n, r) => {
          let o = v.getState(n);
          if (!o || 0 == (e ? o.undone : o.done).eventCount) return !1;
          if (r) {
            let i = (function (e, t, n) {
              let r = y(t),
                o = v.get(t).spec.config,
                i = (n ? e.undone : e.done).popEvent(t, r);
              if (!i) return null;
              let s = i.selection.resolve(i.transform.doc),
                l = (n ? e.done : e.undone).addTransform(
                  i.transform,
                  t.selection.getBookmark(),
                  o,
                  r,
                ),
                a = new u(
                  n ? l : i.remaining,
                  n ? i.remaining : l,
                  null,
                  0,
                  -1,
                );
              return i.transform
                .setSelection(s)
                .setMeta(v, { redo: n, historyState: a });
            })(o, n, e);
            i && r(t ? i.scrollIntoView() : i);
          }
          return !0;
        };
      }
      const k = S(!1, !0),
        C = S(!0, !0);
      S(!1, !1), S(!0, !1);
    },
    79216: (e, t, n) => {
      "use strict";
      n.d(t, {
        JJ: () => p,
        dv: () => c,
        fV: () => i,
        sM: () => l,
        tG: () => h,
      });
      var r = n(52893),
        o = n(63734);
      class i {
        constructor(e, t, n = {}) {
          var r;
          (this.match = e),
            (this.match = e),
            (this.handler =
              "string" == typeof t
                ? ((r = t),
                  function (e, t, n, o) {
                    let i = r;
                    if (t[1]) {
                      let e = t[0].lastIndexOf(t[1]);
                      i += t[0].slice(e + t[1].length);
                      let r = (n += e) - o;
                      r > 0 && ((i = t[0].slice(e - r, e) + i), (n = o));
                    }
                    return e.tr.insertText(i, n, o);
                  })
                : t),
            (this.undoable = !1 !== n.undoable),
            (this.inCode = n.inCode || !1);
        }
      }
      const s = 500;
      function l({ rules: e }) {
        let t = new r.k_({
          state: {
            init: () => null,
            apply(e, t) {
              let n = e.getMeta(this);
              return n || (e.selectionSet || e.docChanged ? null : t);
            },
          },
          props: {
            handleTextInput: (n, r, o, i) => a(n, r, o, i, e, t),
            handleDOMEvents: {
              compositionend: (n) => {
                setTimeout(() => {
                  let { $cursor: r } = n.state.selection;
                  r && a(n, r.pos, r.pos, "", e, t);
                });
              },
            },
          },
          isInputRules: !0,
        });
        return t;
      }
      function a(e, t, n, r, o, i) {
        if (e.composing) return !1;
        let l = e.state,
          a = l.doc.resolve(t),
          c =
            a.parent.textBetween(
              Math.max(0, a.parentOffset - s),
              a.parentOffset,
              null,
              "￼",
            ) + r;
        for (let s = 0; s < o.length; s++) {
          let h = o[s];
          if (a.parent.type.spec.code) {
            if (!h.inCode) continue;
          } else if ("only" === h.inCode) continue;
          let p = h.match.exec(c),
            u = p && h.handler(l, p, t - (p[0].length - r.length), n);
          if (u)
            return (
              h.undoable &&
                u.setMeta(i, { transform: u, from: t, to: n, text: r }),
              e.dispatch(u),
              !0
            );
        }
        return !1;
      }
      const c = (e, t) => {
        let n = e.plugins;
        for (let r = 0; r < n.length; r++) {
          let o,
            i = n[r];
          if (i.spec.isInputRules && (o = i.getState(e))) {
            if (t) {
              let n = e.tr,
                r = o.transform;
              for (let e = r.steps.length - 1; e >= 0; e--)
                n.step(r.steps[e].invert(r.docs[e]));
              if (o.text) {
                let t = n.doc.resolve(o.from).marks();
                n.replaceWith(o.from, o.to, e.schema.text(o.text, t));
              } else n.delete(o.from, o.to);
              t(n);
            }
            return !0;
          }
        }
        return !1;
      };
      new i(/--$/, "—"),
        new i(/\.\.\.$/, "…"),
        new i(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(")$/, "“"),
        new i(/"$/, "”"),
        new i(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(')$/, "‘"),
        new i(/'$/, "’");
      function h(e, t, n = null, r) {
        return new i(e, (e, i, s, l) => {
          let a = n instanceof Function ? n(i) : n,
            c = e.tr.delete(s, l),
            h = c.doc.resolve(s).blockRange(),
            p = h && (0, o.oM)(h, t, a);
          if (!p) return null;
          c.wrap(h, p);
          let u = c.doc.resolve(s - 1).nodeBefore;
          return (
            u &&
              u.type == t &&
              (0, o.n9)(c.doc, s - 1) &&
              (!r || r(i, u)) &&
              c.join(s - 1),
            c
          );
        });
      }
      function p(e, t, n = null) {
        return new i(e, (e, r, o, i) => {
          let s = e.doc.resolve(o),
            l = n instanceof Function ? n(r) : n;
          return s.node(-1).canReplaceWith(s.index(-1), s.indexAfter(-1), t)
            ? e.tr.delete(o, i).setBlockType(o, o, t, l)
            : null;
        });
      }
    },
  },
]);

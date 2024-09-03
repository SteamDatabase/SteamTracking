/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [5193],
  {
    74761: (e, t, n) => {
      "use strict";
      const r = n(71944),
        o = n(61621),
        i =
          "function" == typeof Symbol && "function" == typeof Symbol.for
            ? Symbol.for("nodejs.util.inspect.custom")
            : null;
      (t.hp = s), (t.IS = 50);
      const a = 2147483647;
      function l(e) {
        if (e > a)
          throw new RangeError(
            'The value "' + e + '" is invalid for option "size"',
          );
        const t = new Uint8Array(e);
        return Object.setPrototypeOf(t, s.prototype), t;
      }
      function s(e, t, n) {
        if ("number" == typeof e) {
          if ("string" == typeof t)
            throw new TypeError(
              'The "string" argument must be of type string. Received type number',
            );
          return f(e);
        }
        return u(e, t, n);
      }
      function u(e, t, n) {
        if ("string" == typeof e)
          return (function (e, t) {
            ("string" == typeof t && "" !== t) || (t = "utf8");
            if (!s.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
            const n = 0 | g(e, t);
            let r = l(n);
            const o = r.write(e, t);
            o !== n && (r = r.slice(0, o));
            return r;
          })(e, t);
        if (ArrayBuffer.isView(e))
          return (function (e) {
            if (K(e, Uint8Array)) {
              const t = new Uint8Array(e);
              return h(t.buffer, t.byteOffset, t.byteLength);
            }
            return d(e);
          })(e);
        if (null == e)
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof e,
          );
        if (K(e, ArrayBuffer) || (e && K(e.buffer, ArrayBuffer)))
          return h(e, t, n);
        if (
          "undefined" != typeof SharedArrayBuffer &&
          (K(e, SharedArrayBuffer) || (e && K(e.buffer, SharedArrayBuffer)))
        )
          return h(e, t, n);
        if ("number" == typeof e)
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number',
          );
        const r = e.valueOf && e.valueOf();
        if (null != r && r !== e) return s.from(r, t, n);
        const o = (function (e) {
          if (s.isBuffer(e)) {
            const t = 0 | p(e.length),
              n = l(t);
            return 0 === n.length || e.copy(n, 0, 0, t), n;
          }
          if (void 0 !== e.length)
            return "number" != typeof e.length || G(e.length) ? l(0) : d(e);
          if ("Buffer" === e.type && Array.isArray(e.data)) return d(e.data);
        })(e);
        if (o) return o;
        if (
          "undefined" != typeof Symbol &&
          null != Symbol.toPrimitive &&
          "function" == typeof e[Symbol.toPrimitive]
        )
          return s.from(e[Symbol.toPrimitive]("string"), t, n);
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof e,
        );
      }
      function c(e) {
        if ("number" != typeof e)
          throw new TypeError('"size" argument must be of type number');
        if (e < 0)
          throw new RangeError(
            'The value "' + e + '" is invalid for option "size"',
          );
      }
      function f(e) {
        return c(e), l(e < 0 ? 0 : 0 | p(e));
      }
      function d(e) {
        const t = e.length < 0 ? 0 : 0 | p(e.length),
          n = l(t);
        for (let r = 0; r < t; r += 1) n[r] = 255 & e[r];
        return n;
      }
      function h(e, t, n) {
        if (t < 0 || e.byteLength < t)
          throw new RangeError('"offset" is outside of buffer bounds');
        if (e.byteLength < t + (n || 0))
          throw new RangeError('"length" is outside of buffer bounds');
        let r;
        return (
          (r =
            void 0 === t && void 0 === n
              ? new Uint8Array(e)
              : void 0 === n
                ? new Uint8Array(e, t)
                : new Uint8Array(e, t, n)),
          Object.setPrototypeOf(r, s.prototype),
          r
        );
      }
      function p(e) {
        if (e >= a)
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              a.toString(16) +
              " bytes",
          );
        return 0 | e;
      }
      function g(e, t) {
        if (s.isBuffer(e)) return e.length;
        if (ArrayBuffer.isView(e) || K(e, ArrayBuffer)) return e.byteLength;
        if ("string" != typeof e)
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof e,
          );
        const n = e.length,
          r = arguments.length > 2 && !0 === arguments[2];
        if (!r && 0 === n) return 0;
        let o = !1;
        for (;;)
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return n;
            case "utf8":
            case "utf-8":
              return V(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * n;
            case "hex":
              return n >>> 1;
            case "base64":
              return Z(e).length;
            default:
              if (o) return r ? -1 : V(e).length;
              (t = ("" + t).toLowerCase()), (o = !0);
          }
      }
      function v(e, t, n) {
        let r = !1;
        if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return "";
        if (((void 0 === n || n > this.length) && (n = this.length), n <= 0))
          return "";
        if ((n >>>= 0) <= (t >>>= 0)) return "";
        for (e || (e = "utf8"); ; )
          switch (e) {
            case "hex":
              return M(this, t, n);
            case "utf8":
            case "utf-8":
              return C(this, t, n);
            case "ascii":
              return A(this, t, n);
            case "latin1":
            case "binary":
              return j(this, t, n);
            case "base64":
              return O(this, t, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return N(this, t, n);
            default:
              if (r) throw new TypeError("Unknown encoding: " + e);
              (e = (e + "").toLowerCase()), (r = !0);
          }
      }
      function y(e, t, n) {
        const r = e[t];
        (e[t] = e[n]), (e[n] = r);
      }
      function m(e, t, n, r, o) {
        if (0 === e.length) return -1;
        if (
          ("string" == typeof n
            ? ((r = n), (n = 0))
            : n > 2147483647
              ? (n = 2147483647)
              : n < -2147483648 && (n = -2147483648),
          G((n = +n)) && (n = o ? 0 : e.length - 1),
          n < 0 && (n = e.length + n),
          n >= e.length)
        ) {
          if (o) return -1;
          n = e.length - 1;
        } else if (n < 0) {
          if (!o) return -1;
          n = 0;
        }
        if (("string" == typeof t && (t = s.from(t, r)), s.isBuffer(t)))
          return 0 === t.length ? -1 : b(e, t, n, r, o);
        if ("number" == typeof t)
          return (
            (t &= 255),
            "function" == typeof Uint8Array.prototype.indexOf
              ? o
                ? Uint8Array.prototype.indexOf.call(e, t, n)
                : Uint8Array.prototype.lastIndexOf.call(e, t, n)
              : b(e, [t], n, r, o)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function b(e, t, n, r, o) {
        let i,
          a = 1,
          l = e.length,
          s = t.length;
        if (
          void 0 !== r &&
          ("ucs2" === (r = String(r).toLowerCase()) ||
            "ucs-2" === r ||
            "utf16le" === r ||
            "utf-16le" === r)
        ) {
          if (e.length < 2 || t.length < 2) return -1;
          (a = 2), (l /= 2), (s /= 2), (n /= 2);
        }
        function u(e, t) {
          return 1 === a ? e[t] : e.readUInt16BE(t * a);
        }
        if (o) {
          let r = -1;
          for (i = n; i < l; i++)
            if (u(e, i) === u(t, -1 === r ? 0 : i - r)) {
              if ((-1 === r && (r = i), i - r + 1 === s)) return r * a;
            } else -1 !== r && (i -= i - r), (r = -1);
        } else
          for (n + s > l && (n = l - s), i = n; i >= 0; i--) {
            let n = !0;
            for (let r = 0; r < s; r++)
              if (u(e, i + r) !== u(t, r)) {
                n = !1;
                break;
              }
            if (n) return i;
          }
        return -1;
      }
      function w(e, t, n, r) {
        n = Number(n) || 0;
        const o = e.length - n;
        r ? (r = Number(r)) > o && (r = o) : (r = o);
        const i = t.length;
        let a;
        for (r > i / 2 && (r = i / 2), a = 0; a < r; ++a) {
          const r = parseInt(t.substr(2 * a, 2), 16);
          if (G(r)) return a;
          e[n + a] = r;
        }
        return a;
      }
      function _(e, t, n, r) {
        return F(V(t, e.length - n), e, n, r);
      }
      function x(e, t, n, r) {
        return F(
          (function (e) {
            const t = [];
            for (let n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
            return t;
          })(t),
          e,
          n,
          r,
        );
      }
      function E(e, t, n, r) {
        return F(Z(t), e, n, r);
      }
      function S(e, t, n, r) {
        return F(
          (function (e, t) {
            let n, r, o;
            const i = [];
            for (let a = 0; a < e.length && !((t -= 2) < 0); ++a)
              (n = e.charCodeAt(a)),
                (r = n >> 8),
                (o = n % 256),
                i.push(o),
                i.push(r);
            return i;
          })(t, e.length - n),
          e,
          n,
          r,
        );
      }
      function O(e, t, n) {
        return 0 === t && n === e.length
          ? r.fromByteArray(e)
          : r.fromByteArray(e.slice(t, n));
      }
      function C(e, t, n) {
        n = Math.min(e.length, n);
        const r = [];
        let o = t;
        for (; o < n; ) {
          const t = e[o];
          let i = null,
            a = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
          if (o + a <= n) {
            let n, r, l, s;
            switch (a) {
              case 1:
                t < 128 && (i = t);
                break;
              case 2:
                (n = e[o + 1]),
                  128 == (192 & n) &&
                    ((s = ((31 & t) << 6) | (63 & n)), s > 127 && (i = s));
                break;
              case 3:
                (n = e[o + 1]),
                  (r = e[o + 2]),
                  128 == (192 & n) &&
                    128 == (192 & r) &&
                    ((s = ((15 & t) << 12) | ((63 & n) << 6) | (63 & r)),
                    s > 2047 && (s < 55296 || s > 57343) && (i = s));
                break;
              case 4:
                (n = e[o + 1]),
                  (r = e[o + 2]),
                  (l = e[o + 3]),
                  128 == (192 & n) &&
                    128 == (192 & r) &&
                    128 == (192 & l) &&
                    ((s =
                      ((15 & t) << 18) |
                      ((63 & n) << 12) |
                      ((63 & r) << 6) |
                      (63 & l)),
                    s > 65535 && s < 1114112 && (i = s));
            }
          }
          null === i
            ? ((i = 65533), (a = 1))
            : i > 65535 &&
              ((i -= 65536),
              r.push(((i >>> 10) & 1023) | 55296),
              (i = 56320 | (1023 & i))),
            r.push(i),
            (o += a);
        }
        return (function (e) {
          const t = e.length;
          if (t <= P) return String.fromCharCode.apply(String, e);
          let n = "",
            r = 0;
          for (; r < t; )
            n += String.fromCharCode.apply(String, e.slice(r, (r += P)));
          return n;
        })(r);
      }
      (s.TYPED_ARRAY_SUPPORT = (function () {
        try {
          const e = new Uint8Array(1),
            t = {
              foo: function () {
                return 42;
              },
            };
          return (
            Object.setPrototypeOf(t, Uint8Array.prototype),
            Object.setPrototypeOf(e, t),
            42 === e.foo()
          );
        } catch (e) {
          return !1;
        }
      })()),
        s.TYPED_ARRAY_SUPPORT ||
          "undefined" == typeof console ||
          "function" != typeof console.error ||
          console.error(
            "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
          ),
        Object.defineProperty(s.prototype, "parent", {
          enumerable: !0,
          get: function () {
            if (s.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(s.prototype, "offset", {
          enumerable: !0,
          get: function () {
            if (s.isBuffer(this)) return this.byteOffset;
          },
        }),
        (s.poolSize = 8192),
        (s.from = function (e, t, n) {
          return u(e, t, n);
        }),
        Object.setPrototypeOf(s.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(s, Uint8Array),
        (s.alloc = function (e, t, n) {
          return (function (e, t, n) {
            return (
              c(e),
              e <= 0
                ? l(e)
                : void 0 !== t
                  ? "string" == typeof n
                    ? l(e).fill(t, n)
                    : l(e).fill(t)
                  : l(e)
            );
          })(e, t, n);
        }),
        (s.allocUnsafe = function (e) {
          return f(e);
        }),
        (s.allocUnsafeSlow = function (e) {
          return f(e);
        }),
        (s.isBuffer = function (e) {
          return null != e && !0 === e._isBuffer && e !== s.prototype;
        }),
        (s.compare = function (e, t) {
          if (
            (K(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)),
            K(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)),
            !s.isBuffer(e) || !s.isBuffer(t))
          )
            throw new TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
            );
          if (e === t) return 0;
          let n = e.length,
            r = t.length;
          for (let o = 0, i = Math.min(n, r); o < i; ++o)
            if (e[o] !== t[o]) {
              (n = e[o]), (r = t[o]);
              break;
            }
          return n < r ? -1 : r < n ? 1 : 0;
        }),
        (s.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (s.concat = function (e, t) {
          if (!Array.isArray(e))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return s.alloc(0);
          let n;
          if (void 0 === t)
            for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
          const r = s.allocUnsafe(t);
          let o = 0;
          for (n = 0; n < e.length; ++n) {
            let t = e[n];
            if (K(t, Uint8Array))
              o + t.length > r.length
                ? (s.isBuffer(t) || (t = s.from(t)), t.copy(r, o))
                : Uint8Array.prototype.set.call(r, t, o);
            else {
              if (!s.isBuffer(t))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers',
                );
              t.copy(r, o);
            }
            o += t.length;
          }
          return r;
        }),
        (s.byteLength = g),
        (s.prototype._isBuffer = !0),
        (s.prototype.swap16 = function () {
          const e = this.length;
          if (e % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (let t = 0; t < e; t += 2) y(this, t, t + 1);
          return this;
        }),
        (s.prototype.swap32 = function () {
          const e = this.length;
          if (e % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (let t = 0; t < e; t += 4)
            y(this, t, t + 3), y(this, t + 1, t + 2);
          return this;
        }),
        (s.prototype.swap64 = function () {
          const e = this.length;
          if (e % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (let t = 0; t < e; t += 8)
            y(this, t, t + 7),
              y(this, t + 1, t + 6),
              y(this, t + 2, t + 5),
              y(this, t + 3, t + 4);
          return this;
        }),
        (s.prototype.toString = function () {
          const e = this.length;
          return 0 === e
            ? ""
            : 0 === arguments.length
              ? C(this, 0, e)
              : v.apply(this, arguments);
        }),
        (s.prototype.toLocaleString = s.prototype.toString),
        (s.prototype.equals = function (e) {
          if (!s.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          return this === e || 0 === s.compare(this, e);
        }),
        (s.prototype.inspect = function () {
          let e = "";
          const n = t.IS;
          return (
            (e = this.toString("hex", 0, n)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > n && (e += " ... "),
            "<Buffer " + e + ">"
          );
        }),
        i && (s.prototype[i] = s.prototype.inspect),
        (s.prototype.compare = function (e, t, n, r, o) {
          if (
            (K(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)),
            !s.isBuffer(e))
          )
            throw new TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof e,
            );
          if (
            (void 0 === t && (t = 0),
            void 0 === n && (n = e ? e.length : 0),
            void 0 === r && (r = 0),
            void 0 === o && (o = this.length),
            t < 0 || n > e.length || r < 0 || o > this.length)
          )
            throw new RangeError("out of range index");
          if (r >= o && t >= n) return 0;
          if (r >= o) return -1;
          if (t >= n) return 1;
          if (this === e) return 0;
          let i = (o >>>= 0) - (r >>>= 0),
            a = (n >>>= 0) - (t >>>= 0);
          const l = Math.min(i, a),
            u = this.slice(r, o),
            c = e.slice(t, n);
          for (let e = 0; e < l; ++e)
            if (u[e] !== c[e]) {
              (i = u[e]), (a = c[e]);
              break;
            }
          return i < a ? -1 : a < i ? 1 : 0;
        }),
        (s.prototype.includes = function (e, t, n) {
          return -1 !== this.indexOf(e, t, n);
        }),
        (s.prototype.indexOf = function (e, t, n) {
          return m(this, e, t, n, !0);
        }),
        (s.prototype.lastIndexOf = function (e, t, n) {
          return m(this, e, t, n, !1);
        }),
        (s.prototype.write = function (e, t, n, r) {
          if (void 0 === t) (r = "utf8"), (n = this.length), (t = 0);
          else if (void 0 === n && "string" == typeof t)
            (r = t), (n = this.length), (t = 0);
          else {
            if (!isFinite(t))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported",
              );
            (t >>>= 0),
              isFinite(n)
                ? ((n >>>= 0), void 0 === r && (r = "utf8"))
                : ((r = n), (n = void 0));
          }
          const o = this.length - t;
          if (
            ((void 0 === n || n > o) && (n = o),
            (e.length > 0 && (n < 0 || t < 0)) || t > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          r || (r = "utf8");
          let i = !1;
          for (;;)
            switch (r) {
              case "hex":
                return w(this, e, t, n);
              case "utf8":
              case "utf-8":
                return _(this, e, t, n);
              case "ascii":
              case "latin1":
              case "binary":
                return x(this, e, t, n);
              case "base64":
                return E(this, e, t, n);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return S(this, e, t, n);
              default:
                if (i) throw new TypeError("Unknown encoding: " + r);
                (r = ("" + r).toLowerCase()), (i = !0);
            }
        }),
        (s.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      const P = 4096;
      function A(e, t, n) {
        let r = "";
        n = Math.min(e.length, n);
        for (let o = t; o < n; ++o) r += String.fromCharCode(127 & e[o]);
        return r;
      }
      function j(e, t, n) {
        let r = "";
        n = Math.min(e.length, n);
        for (let o = t; o < n; ++o) r += String.fromCharCode(e[o]);
        return r;
      }
      function M(e, t, n) {
        const r = e.length;
        (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
        let o = "";
        for (let r = t; r < n; ++r) o += W[e[r]];
        return o;
      }
      function N(e, t, n) {
        const r = e.slice(t, n);
        let o = "";
        for (let e = 0; e < r.length - 1; e += 2)
          o += String.fromCharCode(r[e] + 256 * r[e + 1]);
        return o;
      }
      function k(e, t, n) {
        if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
        if (e + t > n)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function D(e, t, n, r, o, i) {
        if (!s.isBuffer(e))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > o || t < i)
          throw new RangeError('"value" argument is out of bounds');
        if (n + r > e.length) throw new RangeError("Index out of range");
      }
      function B(e, t, n, r, o) {
        $(t, r, o, e, n, 7);
        let i = Number(t & BigInt(4294967295));
        (e[n++] = i),
          (i >>= 8),
          (e[n++] = i),
          (i >>= 8),
          (e[n++] = i),
          (i >>= 8),
          (e[n++] = i);
        let a = Number((t >> BigInt(32)) & BigInt(4294967295));
        return (
          (e[n++] = a),
          (a >>= 8),
          (e[n++] = a),
          (a >>= 8),
          (e[n++] = a),
          (a >>= 8),
          (e[n++] = a),
          n
        );
      }
      function I(e, t, n, r, o) {
        $(t, r, o, e, n, 7);
        let i = Number(t & BigInt(4294967295));
        (e[n + 7] = i),
          (i >>= 8),
          (e[n + 6] = i),
          (i >>= 8),
          (e[n + 5] = i),
          (i >>= 8),
          (e[n + 4] = i);
        let a = Number((t >> BigInt(32)) & BigInt(4294967295));
        return (
          (e[n + 3] = a),
          (a >>= 8),
          (e[n + 2] = a),
          (a >>= 8),
          (e[n + 1] = a),
          (a >>= 8),
          (e[n] = a),
          n + 8
        );
      }
      function z(e, t, n, r, o, i) {
        if (n + r > e.length) throw new RangeError("Index out of range");
        if (n < 0) throw new RangeError("Index out of range");
      }
      function L(e, t, n, r, i) {
        return (
          (t = +t),
          (n >>>= 0),
          i || z(e, 0, n, 4),
          o.write(e, t, n, r, 23, 4),
          n + 4
        );
      }
      function T(e, t, n, r, i) {
        return (
          (t = +t),
          (n >>>= 0),
          i || z(e, 0, n, 8),
          o.write(e, t, n, r, 52, 8),
          n + 8
        );
      }
      (s.prototype.slice = function (e, t) {
        const n = this.length;
        (e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
          (t = void 0 === t ? n : ~~t) < 0
            ? (t += n) < 0 && (t = 0)
            : t > n && (t = n),
          t < e && (t = e);
        const r = this.subarray(e, t);
        return Object.setPrototypeOf(r, s.prototype), r;
      }),
        (s.prototype.readUintLE = s.prototype.readUIntLE =
          function (e, t, n) {
            (e >>>= 0), (t >>>= 0), n || k(e, t, this.length);
            let r = this[e],
              o = 1,
              i = 0;
            for (; ++i < t && (o *= 256); ) r += this[e + i] * o;
            return r;
          }),
        (s.prototype.readUintBE = s.prototype.readUIntBE =
          function (e, t, n) {
            (e >>>= 0), (t >>>= 0), n || k(e, t, this.length);
            let r = this[e + --t],
              o = 1;
            for (; t > 0 && (o *= 256); ) r += this[e + --t] * o;
            return r;
          }),
        (s.prototype.readUint8 = s.prototype.readUInt8 =
          function (e, t) {
            return (e >>>= 0), t || k(e, 1, this.length), this[e];
          }),
        (s.prototype.readUint16LE = s.prototype.readUInt16LE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || k(e, 2, this.length),
              this[e] | (this[e + 1] << 8)
            );
          }),
        (s.prototype.readUint16BE = s.prototype.readUInt16BE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || k(e, 2, this.length),
              (this[e] << 8) | this[e + 1]
            );
          }),
        (s.prototype.readUint32LE = s.prototype.readUInt32LE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || k(e, 4, this.length),
              (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                16777216 * this[e + 3]
            );
          }),
        (s.prototype.readUint32BE = s.prototype.readUInt32BE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || k(e, 4, this.length),
              16777216 * this[e] +
                ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
            );
          }),
        (s.prototype.readBigUInt64LE = Q(function (e) {
          Y((e >>>= 0), "offset");
          const t = this[e],
            n = this[e + 7];
          (void 0 !== t && void 0 !== n) || X(e, this.length - 8);
          const r =
              t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
            o = this[++e] + 256 * this[++e] + 65536 * this[++e] + n * 2 ** 24;
          return BigInt(r) + (BigInt(o) << BigInt(32));
        })),
        (s.prototype.readBigUInt64BE = Q(function (e) {
          Y((e >>>= 0), "offset");
          const t = this[e],
            n = this[e + 7];
          (void 0 !== t && void 0 !== n) || X(e, this.length - 8);
          const r =
              t * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e],
            o = this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + n;
          return (BigInt(r) << BigInt(32)) + BigInt(o);
        })),
        (s.prototype.readIntLE = function (e, t, n) {
          (e >>>= 0), (t >>>= 0), n || k(e, t, this.length);
          let r = this[e],
            o = 1,
            i = 0;
          for (; ++i < t && (o *= 256); ) r += this[e + i] * o;
          return (o *= 128), r >= o && (r -= Math.pow(2, 8 * t)), r;
        }),
        (s.prototype.readIntBE = function (e, t, n) {
          (e >>>= 0), (t >>>= 0), n || k(e, t, this.length);
          let r = t,
            o = 1,
            i = this[e + --r];
          for (; r > 0 && (o *= 256); ) i += this[e + --r] * o;
          return (o *= 128), i >= o && (i -= Math.pow(2, 8 * t)), i;
        }),
        (s.prototype.readInt8 = function (e, t) {
          return (
            (e >>>= 0),
            t || k(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
          );
        }),
        (s.prototype.readInt16LE = function (e, t) {
          (e >>>= 0), t || k(e, 2, this.length);
          const n = this[e] | (this[e + 1] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (s.prototype.readInt16BE = function (e, t) {
          (e >>>= 0), t || k(e, 2, this.length);
          const n = this[e + 1] | (this[e] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (s.prototype.readInt32LE = function (e, t) {
          return (
            (e >>>= 0),
            t || k(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (s.prototype.readInt32BE = function (e, t) {
          return (
            (e >>>= 0),
            t || k(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (s.prototype.readBigInt64LE = Q(function (e) {
          Y((e >>>= 0), "offset");
          const t = this[e],
            n = this[e + 7];
          (void 0 !== t && void 0 !== n) || X(e, this.length - 8);
          const r =
            this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (n << 24);
          return (
            (BigInt(r) << BigInt(32)) +
            BigInt(
              t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
            )
          );
        })),
        (s.prototype.readBigInt64BE = Q(function (e) {
          Y((e >>>= 0), "offset");
          const t = this[e],
            n = this[e + 7];
          (void 0 !== t && void 0 !== n) || X(e, this.length - 8);
          const r = (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
          return (
            (BigInt(r) << BigInt(32)) +
            BigInt(
              this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + n,
            )
          );
        })),
        (s.prototype.readFloatLE = function (e, t) {
          return (
            (e >>>= 0), t || k(e, 4, this.length), o.read(this, e, !0, 23, 4)
          );
        }),
        (s.prototype.readFloatBE = function (e, t) {
          return (
            (e >>>= 0), t || k(e, 4, this.length), o.read(this, e, !1, 23, 4)
          );
        }),
        (s.prototype.readDoubleLE = function (e, t) {
          return (
            (e >>>= 0), t || k(e, 8, this.length), o.read(this, e, !0, 52, 8)
          );
        }),
        (s.prototype.readDoubleBE = function (e, t) {
          return (
            (e >>>= 0), t || k(e, 8, this.length), o.read(this, e, !1, 52, 8)
          );
        }),
        (s.prototype.writeUintLE = s.prototype.writeUIntLE =
          function (e, t, n, r) {
            if (((e = +e), (t >>>= 0), (n >>>= 0), !r)) {
              D(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            }
            let o = 1,
              i = 0;
            for (this[t] = 255 & e; ++i < n && (o *= 256); )
              this[t + i] = (e / o) & 255;
            return t + n;
          }),
        (s.prototype.writeUintBE = s.prototype.writeUIntBE =
          function (e, t, n, r) {
            if (((e = +e), (t >>>= 0), (n >>>= 0), !r)) {
              D(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            }
            let o = n - 1,
              i = 1;
            for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); )
              this[t + o] = (e / i) & 255;
            return t + n;
          }),
        (s.prototype.writeUint8 = s.prototype.writeUInt8 =
          function (e, t, n) {
            return (
              (e = +e),
              (t >>>= 0),
              n || D(this, e, t, 1, 255, 0),
              (this[t] = 255 & e),
              t + 1
            );
          }),
        (s.prototype.writeUint16LE = s.prototype.writeUInt16LE =
          function (e, t, n) {
            return (
              (e = +e),
              (t >>>= 0),
              n || D(this, e, t, 2, 65535, 0),
              (this[t] = 255 & e),
              (this[t + 1] = e >>> 8),
              t + 2
            );
          }),
        (s.prototype.writeUint16BE = s.prototype.writeUInt16BE =
          function (e, t, n) {
            return (
              (e = +e),
              (t >>>= 0),
              n || D(this, e, t, 2, 65535, 0),
              (this[t] = e >>> 8),
              (this[t + 1] = 255 & e),
              t + 2
            );
          }),
        (s.prototype.writeUint32LE = s.prototype.writeUInt32LE =
          function (e, t, n) {
            return (
              (e = +e),
              (t >>>= 0),
              n || D(this, e, t, 4, 4294967295, 0),
              (this[t + 3] = e >>> 24),
              (this[t + 2] = e >>> 16),
              (this[t + 1] = e >>> 8),
              (this[t] = 255 & e),
              t + 4
            );
          }),
        (s.prototype.writeUint32BE = s.prototype.writeUInt32BE =
          function (e, t, n) {
            return (
              (e = +e),
              (t >>>= 0),
              n || D(this, e, t, 4, 4294967295, 0),
              (this[t] = e >>> 24),
              (this[t + 1] = e >>> 16),
              (this[t + 2] = e >>> 8),
              (this[t + 3] = 255 & e),
              t + 4
            );
          }),
        (s.prototype.writeBigUInt64LE = Q(function (e, t = 0) {
          return B(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (s.prototype.writeBigUInt64BE = Q(function (e, t = 0) {
          return I(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (s.prototype.writeIntLE = function (e, t, n, r) {
          if (((e = +e), (t >>>= 0), !r)) {
            const r = Math.pow(2, 8 * n - 1);
            D(this, e, t, n, r - 1, -r);
          }
          let o = 0,
            i = 1,
            a = 0;
          for (this[t] = 255 & e; ++o < n && (i *= 256); )
            e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1),
              (this[t + o] = (((e / i) >> 0) - a) & 255);
          return t + n;
        }),
        (s.prototype.writeIntBE = function (e, t, n, r) {
          if (((e = +e), (t >>>= 0), !r)) {
            const r = Math.pow(2, 8 * n - 1);
            D(this, e, t, n, r - 1, -r);
          }
          let o = n - 1,
            i = 1,
            a = 0;
          for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); )
            e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1),
              (this[t + o] = (((e / i) >> 0) - a) & 255);
          return t + n;
        }),
        (s.prototype.writeInt8 = function (e, t, n) {
          return (
            (e = +e),
            (t >>>= 0),
            n || D(this, e, t, 1, 127, -128),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (s.prototype.writeInt16LE = function (e, t, n) {
          return (
            (e = +e),
            (t >>>= 0),
            n || D(this, e, t, 2, 32767, -32768),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            t + 2
          );
        }),
        (s.prototype.writeInt16BE = function (e, t, n) {
          return (
            (e = +e),
            (t >>>= 0),
            n || D(this, e, t, 2, 32767, -32768),
            (this[t] = e >>> 8),
            (this[t + 1] = 255 & e),
            t + 2
          );
        }),
        (s.prototype.writeInt32LE = function (e, t, n) {
          return (
            (e = +e),
            (t >>>= 0),
            n || D(this, e, t, 4, 2147483647, -2147483648),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            (this[t + 2] = e >>> 16),
            (this[t + 3] = e >>> 24),
            t + 4
          );
        }),
        (s.prototype.writeInt32BE = function (e, t, n) {
          return (
            (e = +e),
            (t >>>= 0),
            n || D(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            (this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e),
            t + 4
          );
        }),
        (s.prototype.writeBigInt64LE = Q(function (e, t = 0) {
          return B(
            this,
            e,
            t,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff"),
          );
        })),
        (s.prototype.writeBigInt64BE = Q(function (e, t = 0) {
          return I(
            this,
            e,
            t,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff"),
          );
        })),
        (s.prototype.writeFloatLE = function (e, t, n) {
          return L(this, e, t, !0, n);
        }),
        (s.prototype.writeFloatBE = function (e, t, n) {
          return L(this, e, t, !1, n);
        }),
        (s.prototype.writeDoubleLE = function (e, t, n) {
          return T(this, e, t, !0, n);
        }),
        (s.prototype.writeDoubleBE = function (e, t, n) {
          return T(this, e, t, !1, n);
        }),
        (s.prototype.copy = function (e, t, n, r) {
          if (!s.isBuffer(e))
            throw new TypeError("argument should be a Buffer");
          if (
            (n || (n = 0),
            r || 0 === r || (r = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            r > 0 && r < n && (r = n),
            r === n)
          )
            return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if (t < 0) throw new RangeError("targetStart out of bounds");
          if (n < 0 || n >= this.length)
            throw new RangeError("Index out of range");
          if (r < 0) throw new RangeError("sourceEnd out of bounds");
          r > this.length && (r = this.length),
            e.length - t < r - n && (r = e.length - t + n);
          const o = r - n;
          return (
            this === e && "function" == typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(t, n, r)
              : Uint8Array.prototype.set.call(e, this.subarray(n, r), t),
            o
          );
        }),
        (s.prototype.fill = function (e, t, n, r) {
          if ("string" == typeof e) {
            if (
              ("string" == typeof t
                ? ((r = t), (t = 0), (n = this.length))
                : "string" == typeof n && ((r = n), (n = this.length)),
              void 0 !== r && "string" != typeof r)
            )
              throw new TypeError("encoding must be a string");
            if ("string" == typeof r && !s.isEncoding(r))
              throw new TypeError("Unknown encoding: " + r);
            if (1 === e.length) {
              const t = e.charCodeAt(0);
              (("utf8" === r && t < 128) || "latin1" === r) && (e = t);
            }
          } else
            "number" == typeof e
              ? (e &= 255)
              : "boolean" == typeof e && (e = Number(e));
          if (t < 0 || this.length < t || this.length < n)
            throw new RangeError("Out of range index");
          if (n <= t) return this;
          let o;
          if (
            ((t >>>= 0),
            (n = void 0 === n ? this.length : n >>> 0),
            e || (e = 0),
            "number" == typeof e)
          )
            for (o = t; o < n; ++o) this[o] = e;
          else {
            const i = s.isBuffer(e) ? e : s.from(e, r),
              a = i.length;
            if (0 === a)
              throw new TypeError(
                'The value "' + e + '" is invalid for argument "value"',
              );
            for (o = 0; o < n - t; ++o) this[o + t] = i[o % a];
          }
          return this;
        });
      const R = {};
      function U(e, t, n) {
        R[e] = class extends n {
          constructor() {
            super(),
              Object.defineProperty(this, "message", {
                value: t.apply(this, arguments),
                writable: !0,
                configurable: !0,
              }),
              (this.name = `${this.name} [${e}]`),
              this.stack,
              delete this.name;
          }
          get code() {
            return e;
          }
          set code(e) {
            Object.defineProperty(this, "code", {
              configurable: !0,
              enumerable: !0,
              value: e,
              writable: !0,
            });
          }
          toString() {
            return `${this.name} [${e}]: ${this.message}`;
          }
        };
      }
      function q(e) {
        let t = "",
          n = e.length;
        const r = "-" === e[0] ? 1 : 0;
        for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
        return `${e.slice(0, n)}${t}`;
      }
      function $(e, t, n, r, o, i) {
        if (e > n || e < t) {
          const r = "bigint" == typeof t ? "n" : "";
          let o;
          throw (
            ((o =
              i > 3
                ? 0 === t || t === BigInt(0)
                  ? `>= 0${r} and < 2${r} ** ${8 * (i + 1)}${r}`
                  : `>= -(2${r} ** ${8 * (i + 1) - 1}${r}) and < 2 ** ${8 * (i + 1) - 1}${r}`
                : `>= ${t}${r} and <= ${n}${r}`),
            new R.ERR_OUT_OF_RANGE("value", o, e))
          );
        }
        !(function (e, t, n) {
          Y(t, "offset"),
            (void 0 !== e[t] && void 0 !== e[t + n]) ||
              X(t, e.length - (n + 1));
        })(r, o, i);
      }
      function Y(e, t) {
        if ("number" != typeof e)
          throw new R.ERR_INVALID_ARG_TYPE(t, "number", e);
      }
      function X(e, t, n) {
        if (Math.floor(e) !== e)
          throw (
            (Y(e, n), new R.ERR_OUT_OF_RANGE(n || "offset", "an integer", e))
          );
        if (t < 0) throw new R.ERR_BUFFER_OUT_OF_BOUNDS();
        throw new R.ERR_OUT_OF_RANGE(
          n || "offset",
          `>= ${n ? 1 : 0} and <= ${t}`,
          e,
        );
      }
      U(
        "ERR_BUFFER_OUT_OF_BOUNDS",
        function (e) {
          return e
            ? `${e} is outside of buffer bounds`
            : "Attempt to access memory outside buffer bounds";
        },
        RangeError,
      ),
        U(
          "ERR_INVALID_ARG_TYPE",
          function (e, t) {
            return `The "${e}" argument must be of type number. Received type ${typeof t}`;
          },
          TypeError,
        ),
        U(
          "ERR_OUT_OF_RANGE",
          function (e, t, n) {
            let r = `The value of "${e}" is out of range.`,
              o = n;
            return (
              Number.isInteger(n) && Math.abs(n) > 2 ** 32
                ? (o = q(String(n)))
                : "bigint" == typeof n &&
                  ((o = String(n)),
                  (n > BigInt(2) ** BigInt(32) ||
                    n < -(BigInt(2) ** BigInt(32))) &&
                    (o = q(o)),
                  (o += "n")),
              (r += ` It must be ${t}. Received ${o}`),
              r
            );
          },
          RangeError,
        );
      const H = /[^+/0-9A-Za-z-_]/g;
      function V(e, t) {
        let n;
        t = t || 1 / 0;
        const r = e.length;
        let o = null;
        const i = [];
        for (let a = 0; a < r; ++a) {
          if (((n = e.charCodeAt(a)), n > 55295 && n < 57344)) {
            if (!o) {
              if (n > 56319) {
                (t -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              if (a + 1 === r) {
                (t -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              o = n;
              continue;
            }
            if (n < 56320) {
              (t -= 3) > -1 && i.push(239, 191, 189), (o = n);
              continue;
            }
            n = 65536 + (((o - 55296) << 10) | (n - 56320));
          } else o && (t -= 3) > -1 && i.push(239, 191, 189);
          if (((o = null), n < 128)) {
            if ((t -= 1) < 0) break;
            i.push(n);
          } else if (n < 2048) {
            if ((t -= 2) < 0) break;
            i.push((n >> 6) | 192, (63 & n) | 128);
          } else if (n < 65536) {
            if ((t -= 3) < 0) break;
            i.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
          } else {
            if (!(n < 1114112)) throw new Error("Invalid code point");
            if ((t -= 4) < 0) break;
            i.push(
              (n >> 18) | 240,
              ((n >> 12) & 63) | 128,
              ((n >> 6) & 63) | 128,
              (63 & n) | 128,
            );
          }
        }
        return i;
      }
      function Z(e) {
        return r.toByteArray(
          (function (e) {
            if ((e = (e = e.split("=")[0]).trim().replace(H, "")).length < 2)
              return "";
            for (; e.length % 4 != 0; ) e += "=";
            return e;
          })(e),
        );
      }
      function F(e, t, n, r) {
        let o;
        for (o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o)
          t[o + n] = e[o];
        return o;
      }
      function K(e, t) {
        return (
          e instanceof t ||
          (null != e &&
            null != e.constructor &&
            null != e.constructor.name &&
            e.constructor.name === t.name)
        );
      }
      function G(e) {
        return e != e;
      }
      const W = (function () {
        const e = "0123456789abcdef",
          t = new Array(256);
        for (let n = 0; n < 16; ++n) {
          const r = 16 * n;
          for (let o = 0; o < 16; ++o) t[r + o] = e[n] + e[o];
        }
        return t;
      })();
      function Q(e) {
        return "undefined" == typeof BigInt ? J : e;
      }
      function J() {
        throw new Error("BigInt not supported");
      }
    },
    61621: (e, t) => {
      (t.read = function (e, t, n, r, o) {
        var i,
          a,
          l = 8 * o - r - 1,
          s = (1 << l) - 1,
          u = s >> 1,
          c = -7,
          f = n ? o - 1 : 0,
          d = n ? -1 : 1,
          h = e[t + f];
        for (
          f += d, i = h & ((1 << -c) - 1), h >>= -c, c += l;
          c > 0;
          i = 256 * i + e[t + f], f += d, c -= 8
        );
        for (
          a = i & ((1 << -c) - 1), i >>= -c, c += r;
          c > 0;
          a = 256 * a + e[t + f], f += d, c -= 8
        );
        if (0 === i) i = 1 - u;
        else {
          if (i === s) return a ? NaN : (1 / 0) * (h ? -1 : 1);
          (a += Math.pow(2, r)), (i -= u);
        }
        return (h ? -1 : 1) * a * Math.pow(2, i - r);
      }),
        (t.write = function (e, t, n, r, o, i) {
          var a,
            l,
            s,
            u = 8 * i - o - 1,
            c = (1 << u) - 1,
            f = c >> 1,
            d = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            h = r ? 0 : i - 1,
            p = r ? 1 : -1,
            g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
          for (
            t = Math.abs(t),
              isNaN(t) || t === 1 / 0
                ? ((l = isNaN(t) ? 1 : 0), (a = c))
                : ((a = Math.floor(Math.log(t) / Math.LN2)),
                  t * (s = Math.pow(2, -a)) < 1 && (a--, (s *= 2)),
                  (t += a + f >= 1 ? d / s : d * Math.pow(2, 1 - f)) * s >= 2 &&
                    (a++, (s /= 2)),
                  a + f >= c
                    ? ((l = 0), (a = c))
                    : a + f >= 1
                      ? ((l = (t * s - 1) * Math.pow(2, o)), (a += f))
                      : ((l = t * Math.pow(2, f - 1) * Math.pow(2, o)),
                        (a = 0)));
            o >= 8;
            e[n + h] = 255 & l, h += p, l /= 256, o -= 8
          );
          for (
            a = (a << o) | l, u += o;
            u > 0;
            e[n + h] = 255 & a, h += p, a /= 256, u -= 8
          );
          e[n + h - p] |= 128 * g;
        });
    },
    88092: (e, t, n) => {
      "use strict";
      n.d(t, { t: () => Cr, j: () => Xr });
      const r = (e, t, n = !1) => {
          if (!Array.isArray(e) || !Array.isArray(t))
            throw new Error("Both arguments should be arrays.");
          const r = e.length,
            o = t.length,
            i = new Array(r + o);
          if (n) {
            for (let e = 0; e < o; e++) i[e] = t[o - e - 1];
            for (let t = 0; t < r; t++) i[t + o] = e[t];
            return i;
          }
          for (let t = 0; t < r; t++) i[t] = e[t];
          for (let e = 0; e < o; e++) i[e + r] = t[e];
          return i;
        },
        o = (e, t = new Map()) => {
          if ("object" != typeof e || null === e) return !1;
          if (t.has(e)) return !0;
          if ((t.set(e, !0), Array.isArray(e))) {
            for (let n = 0; n < e.length; n++) if (o(e[n], t)) return !0;
            return !1;
          }
          for (const n in e) if (o(e[n], t)) return !0;
          return !1;
        },
        i = (e, t, n, r = 1 / 0) => {
          if (!e || "object" != typeof e) return JSON.stringify(e, t, n);
          const o =
            r < 1
              ? '"..."'
              : Array.isArray(e)
                ? `[${e.map((e) => i(e, t, n, r - 1)).join(",")}]`
                : `{${Object.keys(e)
                    .map((o) => `"${o}": ${i(e[o], t, n, r - 1)}`)
                    .join(", ")}}`;
          return JSON.stringify(JSON.parse(o), t, n);
        },
        a = (e, t = 1 / 0, n = !1) =>
          Number.isNaN(e) || null === e
            ? "null"
            : Array.isArray(e) || "object" == typeof e
              ? i(e, void 0, n ? 1 : void 0, t)
              : i(e),
        l = (e) =>
          "boolean" == typeof e
            ? 0
            : "number" == typeof e
              ? 1
              : "string" == typeof e
                ? 2
                : null === e
                  ? 3
                  : Array.isArray(e)
                    ? 4
                    : "object" == typeof e
                      ? 5
                      : -1,
        s = (e, t, n) => {
          const r = l(e),
            o = l(t);
          if (r !== o) return r - o;
          if (
            (null === e && null === t) ||
            (Array.isArray(e) && Array.isArray(t)) ||
            (5 === r && 5 === o)
          )
            return 0;
          switch (typeof e) {
            case "number":
              return e - t;
            case "string":
              return (
                (null == n ? void 0 : n.ignoreCase) &&
                  ((e = e.toLowerCase()), (t = t.toLowerCase())),
                e < t ? -1 : e > t ? 1 : 0
              );
            case "boolean":
              return +e - +t;
          }
          return 0;
        },
        u = (e) =>
          Array.isArray(e) ? "array" : null === e ? "null" : typeof e,
        c = (e, t, n, r, o, i, l, u) => {
          const c = { ignoreCase: u.ignoreCase },
            f = a(o, u.maxDepth, !0).split("\n"),
            d = a(i, u.maxDepth, !0).split("\n");
          if (0 !== s(o, i, c))
            if (u.showModifications) {
              const o = Math.max(f.length, d.length);
              for (let e = f.length; e < o; e++) f.push("");
              for (let e = d.length; e < o; e++) d.push("");
              e.push({
                level: l,
                type: "modify",
                text: n ? `"${n}": ${f[0]}` : f[0],
              });
              for (let t = 1; t < f.length; t++) {
                var h, p;
                e.push({
                  level:
                    l +
                    ((null == (h = f[t].match(/^\s+/)) || null == (p = h[0])
                      ? void 0
                      : p.length) || 0),
                  type: "modify",
                  text: f[t].replace(/^\s+/, "").replace(/,$/g, ""),
                });
              }
              for (let t = f.length; t < o; t++)
                e.push({ level: l, type: "equal", text: "" });
              t.push({
                level: l,
                type: "modify",
                text: r ? `"${r}": ${d[0]}` : d[0],
              });
              for (let e = 1; e < d.length; e++) {
                var g, v;
                t.push({
                  level:
                    l +
                    ((null == (g = d[e].match(/^\s+/)) || null == (v = g[0])
                      ? void 0
                      : v.length) || 0),
                  type: "modify",
                  text: d[e].replace(/^\s+/, "").replace(/,$/g, ""),
                });
              }
              for (let e = d.length; e < o; e++)
                t.push({ level: l, type: "equal", text: "" });
            } else {
              e.push({
                level: l,
                type: "remove",
                text: n ? `"${n}": ${f[0]}` : f[0],
              });
              for (let t = 1; t < f.length; t++) {
                var y, m;
                e.push({
                  level:
                    l +
                    ((null == (y = f[t].match(/^\s+/)) || null == (m = y[0])
                      ? void 0
                      : m.length) || 0),
                  type: "remove",
                  text: f[t].replace(/^\s+/, "").replace(/,$/g, ""),
                });
              }
              for (let t = 0; t < d.length; t++)
                e.push({ level: l, type: "equal", text: "" });
              for (let e = 0; e < f.length; e++)
                t.push({ level: l, type: "equal", text: "" });
              t.push({
                level: l,
                type: "add",
                text: r ? `"${r}": ${d[0]}` : d[0],
              });
              for (let e = 1; e < d.length; e++) {
                var b, w;
                t.push({
                  level:
                    l +
                    ((null == (b = d[e].match(/^\s+/)) || null == (w = b[0])
                      ? void 0
                      : w.length) || 0),
                  type: "add",
                  text: d[e].replace(/^\s+/, "").replace(/,$/g, ""),
                });
              }
            }
          else {
            const o = Math.max(f.length, d.length);
            for (let e = f.length; e < o; e++) f.push("");
            for (let e = d.length; e < o; e++) d.push("");
            e.push({
              level: l,
              type: "equal",
              text: n ? `"${n}": ${f[0]}` : f[0],
            });
            for (let t = 1; t < f.length; t++) {
              var _, x;
              e.push({
                level:
                  l +
                  ((null == (_ = f[t].match(/^\s+/)) || null == (x = _[0])
                    ? void 0
                    : x.length) || 0),
                type: "equal",
                text: f[t].replace(/^\s+/, "").replace(/,$/g, ""),
              });
            }
            t.push({
              level: l,
              type: "equal",
              text: r ? `"${r}": ${d[0]}` : d[0],
            });
            for (let e = 1; e < d.length; e++) {
              var E, S;
              t.push({
                level:
                  l +
                  ((null == (E = d[e].match(/^\s+/)) || null == (S = E[0])
                    ? void 0
                    : S.length) || 0),
                type: "equal",
                text: d[e].replace(/^\s+/, "").replace(/,$/g, ""),
              });
            }
          }
        },
        f = (e, t) =>
          e.sort((e, n) => s(e, n, { ignoreCase: t.ignoreCaseForKey })),
        d = (e, t, n = 1, o, a) => {
          if (n > (o.maxDepth || 1 / 0))
            return [
              [{ level: n, type: "equal", text: "..." }],
              [{ level: n, type: "equal", text: "..." }],
            ];
          let l = [],
            h = [];
          if ((null === e && null === t) || (void 0 === e && void 0 === t))
            return [l, h];
          if (null == e) {
            const e = i(t, void 0, 1).split("\n");
            for (let t = 0; t < e.length; t++) {
              var p, g;
              l.push({ level: n, type: "equal", text: "" }),
                h.push({
                  level:
                    n +
                    ((null == (p = e[t].match(/^\s+/)) || null == (g = p[0])
                      ? void 0
                      : g.length) || 0),
                  type: "add",
                  text: e[t].replace(/^\s+/, "").replace(/,$/g, ""),
                });
            }
            return [l, h];
          }
          if (null == t) {
            const t = i(e, void 0, 1).split("\n");
            for (let e = 0; e < t.length; e++) {
              var v, y;
              l.push({
                level:
                  n +
                  ((null == (v = t[e].match(/^\s+/)) || null == (y = v[0])
                    ? void 0
                    : y.length) || 0),
                type: "remove",
                text: t[e].replace(/^\s+/, "").replace(/,$/g, ""),
              }),
                h.push({ level: n, type: "equal", text: "" });
            }
            return [l, h];
          }
          const m = Object.keys(e),
            b = Object.keys(t);
          f(m, o), f(b, o);
          const w = { ignoreCase: o.ignoreCaseForKey };
          for (o.ignoreCase; m.length || b.length; ) {
            const f = m[0],
              p = b[0],
              g = s(f, p, w);
            if (0 === g)
              if (u(e[f]) !== u(t[p])) c(l, h, f, p, e[f], t[p], n, o);
              else if (Array.isArray(e[f])) {
                const i = [...e[f]],
                  s = [...t[p]],
                  [u, c] = a(i, s, f, p, n, o, [], []);
                (l = r(l, u)), (h = r(h, c));
              } else if (null === e[f])
                l.push({ level: n, type: "equal", text: `"${f}": null` }),
                  h.push({ level: n, type: "equal", text: `"${p}": null` });
              else if ("object" == typeof e[f]) {
                const i = d(e[f], t[p], n + 1, o, a);
                l.push({ level: n, type: "equal", text: `"${f}": {` }),
                  (l = r(l, i[0])),
                  l.push({ level: n, type: "equal", text: "}" }),
                  h.push({ level: n, type: "equal", text: `"${p}": {` }),
                  (h = r(h, i[1])),
                  h.push({ level: n, type: "equal", text: "}" });
              } else c(l, h, f, p, e[f], t[p], n, o);
            else if (m.length && b.length)
              if (f < p) {
                const t = i(e[f], void 0, 1).split("\n");
                for (let e = 0; e < t.length; e++) {
                  var _, x;
                  const r = t[e].replace(/^\s+/, "").replace(/,$/g, "");
                  l.push({
                    level:
                      n +
                      ((null == (_ = t[e].match(/^\s+/)) || null == (x = _[0])
                        ? void 0
                        : x.length) || 0),
                    type: "remove",
                    text: e ? r : `"${f}": ${r}`,
                  }),
                    h.push({ level: n, type: "equal", text: "" });
                }
              } else {
                const e = i(t[p], void 0, 1).split("\n");
                for (let t = 0; t < e.length; t++) {
                  var E, S;
                  const r = e[t].replace(/^\s+/, "").replace(/,$/g, "");
                  l.push({ level: n, type: "equal", text: "" }),
                    h.push({
                      level:
                        n +
                        ((null == (E = e[t].match(/^\s+/)) || null == (S = E[0])
                          ? void 0
                          : S.length) || 0),
                      type: "add",
                      text: t ? r : `"${p}": ${r}`,
                    });
                }
              }
            else if (m.length) {
              const t = i(e[f], void 0, 1).split("\n");
              for (let e = 0; e < t.length; e++) {
                var O, C;
                const r = t[e].replace(/^\s+/, "").replace(/,$/g, "");
                l.push({
                  level:
                    n +
                    ((null == (O = t[e].match(/^\s+/)) || null == (C = O[0])
                      ? void 0
                      : C.length) || 0),
                  type: "remove",
                  text: e ? r : `"${f}": ${r}`,
                }),
                  h.push({ level: n, type: "equal", text: "" });
              }
            } else if (b.length) {
              const e = i(t[p], void 0, 1).split("\n");
              for (let t = 0; t < e.length; t++) {
                var P, A;
                const r = e[t].replace(/^\s+/, "").replace(/,$/g, "");
                l.push({ level: n, type: "equal", text: "" }),
                  h.push({
                    level:
                      n +
                      ((null == (P = e[t].match(/^\s+/)) || null == (A = P[0])
                        ? void 0
                        : A.length) || 0),
                    type: "add",
                    text: t ? r : `"${p}": ${r}`,
                  });
              }
            }
            f
              ? p
                ? 0 === g
                  ? (m.shift(), b.shift())
                  : g < 0
                    ? m.shift()
                    : b.shift()
                : m.shift()
              : b.shift();
          }
          if (l.length !== h.length)
            throw new Error(
              "Diff error: length not match for left & right, please report a bug with your data.",
            );
          return [l, h];
        };
      var h = function () {
        (this.__data__ = []), (this.size = 0);
      };
      var p = function (e, t) {
          return e === t || (e != e && t != t);
        },
        g = p;
      var v = function (e, t) {
          for (var n = e.length; n--; ) if (g(e[n][0], t)) return n;
          return -1;
        },
        y = v,
        m = Array.prototype.splice;
      var b = v;
      var w = v;
      var _ = v;
      var x = h,
        E = function (e) {
          var t = this.__data__,
            n = y(t, e);
          return (
            !(n < 0) &&
            (n == t.length - 1 ? t.pop() : m.call(t, n, 1), --this.size, !0)
          );
        },
        S = function (e) {
          var t = this.__data__,
            n = b(t, e);
          return n < 0 ? void 0 : t[n][1];
        },
        O = function (e) {
          return w(this.__data__, e) > -1;
        },
        C = function (e, t) {
          var n = this.__data__,
            r = _(n, e);
          return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
        };
      function P(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (P.prototype.clear = x),
        (P.prototype.delete = E),
        (P.prototype.get = S),
        (P.prototype.has = O),
        (P.prototype.set = C);
      var A = P,
        j = A;
      var M = function () {
        (this.__data__ = new j()), (this.size = 0);
      };
      var N = function (e) {
        var t = this.__data__,
          n = t.delete(e);
        return (this.size = t.size), n;
      };
      var k = function (e) {
        return this.__data__.get(e);
      };
      var D = function (e) {
          return this.__data__.has(e);
        },
        B =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
              ? window
              : void 0 !== n.g
                ? n.g
                : "undefined" != typeof self
                  ? self
                  : {},
        I = "object" == typeof B && B && B.Object === Object && B,
        z = I,
        L = "object" == typeof self && self && self.Object === Object && self,
        T = z || L || Function("return this")(),
        R = T.Symbol,
        U = R,
        q = Object.prototype,
        $ = q.hasOwnProperty,
        Y = q.toString,
        X = U ? U.toStringTag : void 0;
      var H = function (e) {
          var t = $.call(e, X),
            n = e[X];
          try {
            e[X] = void 0;
            var r = !0;
          } catch (e) {}
          var o = Y.call(e);
          return r && (t ? (e[X] = n) : delete e[X]), o;
        },
        V = Object.prototype.toString;
      var Z = H,
        F = function (e) {
          return V.call(e);
        },
        K = R ? R.toStringTag : void 0;
      var G = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : K && K in Object(e)
            ? Z(e)
            : F(e);
      };
      var W = function (e) {
          var t = typeof e;
          return null != e && ("object" == t || "function" == t);
        },
        Q = G,
        J = W;
      var ee,
        te = function (e) {
          if (!J(e)) return !1;
          var t = Q(e);
          return (
            "[object Function]" == t ||
            "[object GeneratorFunction]" == t ||
            "[object AsyncFunction]" == t ||
            "[object Proxy]" == t
          );
        },
        ne = T["__core-js_shared__"],
        re = (ee = /[^.]+$/.exec((ne && ne.keys && ne.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + ee
          : "";
      var oe = function (e) {
          return !!re && re in e;
        },
        ie = Function.prototype.toString;
      var ae = function (e) {
          if (null != e) {
            try {
              return ie.call(e);
            } catch (e) {}
            try {
              return e + "";
            } catch (e) {}
          }
          return "";
        },
        le = te,
        se = oe,
        ue = W,
        ce = ae,
        fe = /^\[object .+?Constructor\]$/,
        de = Function.prototype,
        he = Object.prototype,
        pe = de.toString,
        ge = he.hasOwnProperty,
        ve = RegExp(
          "^" +
            pe
              .call(ge)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?",
              ) +
            "$",
        );
      var ye = function (e) {
          return !(!ue(e) || se(e)) && (le(e) ? ve : fe).test(ce(e));
        },
        me = function (e, t) {
          return null == e ? void 0 : e[t];
        };
      var be = function (e, t) {
          var n = me(e, t);
          return ye(n) ? n : void 0;
        },
        we = be(T, "Map"),
        _e = be(Object, "create"),
        xe = _e;
      var Ee = function () {
        (this.__data__ = xe ? xe(null) : {}), (this.size = 0);
      };
      var Se = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
        },
        Oe = _e,
        Ce = Object.prototype.hasOwnProperty;
      var Pe = function (e) {
          var t = this.__data__;
          if (Oe) {
            var n = t[e];
            return "__lodash_hash_undefined__" === n ? void 0 : n;
          }
          return Ce.call(t, e) ? t[e] : void 0;
        },
        Ae = _e,
        je = Object.prototype.hasOwnProperty;
      var Me = _e;
      var Ne = Ee,
        ke = Se,
        De = Pe,
        Be = function (e) {
          var t = this.__data__;
          return Ae ? void 0 !== t[e] : je.call(t, e);
        },
        Ie = function (e, t) {
          var n = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (n[e] = Me && void 0 === t ? "__lodash_hash_undefined__" : t),
            this
          );
        };
      function ze(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (ze.prototype.clear = Ne),
        (ze.prototype.delete = ke),
        (ze.prototype.get = De),
        (ze.prototype.has = Be),
        (ze.prototype.set = Ie);
      var Le = ze,
        Te = A,
        Re = we;
      var Ue = function (e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t
          ? "__proto__" !== e
          : null === e;
      };
      var qe = function (e, t) {
          var n = e.__data__;
          return Ue(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
        },
        $e = qe;
      var Ye = qe;
      var Xe = qe;
      var He = qe;
      var Ve = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new Le(),
              map: new (Re || Te)(),
              string: new Le(),
            });
        },
        Ze = function (e) {
          var t = $e(this, e).delete(e);
          return (this.size -= t ? 1 : 0), t;
        },
        Fe = function (e) {
          return Ye(this, e).get(e);
        },
        Ke = function (e) {
          return Xe(this, e).has(e);
        },
        Ge = function (e, t) {
          var n = He(this, e),
            r = n.size;
          return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
        };
      function We(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (We.prototype.clear = Ve),
        (We.prototype.delete = Ze),
        (We.prototype.get = Fe),
        (We.prototype.has = Ke),
        (We.prototype.set = Ge);
      var Qe = We,
        Je = A,
        et = we,
        tt = Qe;
      var nt = A,
        rt = M,
        ot = N,
        it = k,
        at = D,
        lt = function (e, t) {
          var n = this.__data__;
          if (n instanceof Je) {
            var r = n.__data__;
            if (!et || r.length < 199)
              return r.push([e, t]), (this.size = ++n.size), this;
            n = this.__data__ = new tt(r);
          }
          return n.set(e, t), (this.size = n.size), this;
        };
      function st(e) {
        var t = (this.__data__ = new nt(e));
        this.size = t.size;
      }
      (st.prototype.clear = rt),
        (st.prototype.delete = ot),
        (st.prototype.get = it),
        (st.prototype.has = at),
        (st.prototype.set = lt);
      var ut = st;
      var ct = Qe,
        ft = function (e) {
          return this.__data__.set(e, "__lodash_hash_undefined__"), this;
        },
        dt = function (e) {
          return this.__data__.has(e);
        };
      function ht(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.__data__ = new ct(); ++t < n; ) this.add(e[t]);
      }
      (ht.prototype.add = ht.prototype.push = ft), (ht.prototype.has = dt);
      var pt = ht,
        gt = function (e, t) {
          for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
            if (t(e[n], n, e)) return !0;
          return !1;
        },
        vt = function (e, t) {
          return e.has(t);
        };
      var yt = function (e, t, n, r, o, i) {
        var a = 1 & n,
          l = e.length,
          s = t.length;
        if (l != s && !(a && s > l)) return !1;
        var u = i.get(e),
          c = i.get(t);
        if (u && c) return u == t && c == e;
        var f = -1,
          d = !0,
          h = 2 & n ? new pt() : void 0;
        for (i.set(e, t), i.set(t, e); ++f < l; ) {
          var p = e[f],
            g = t[f];
          if (r) var v = a ? r(g, p, f, t, e, i) : r(p, g, f, e, t, i);
          if (void 0 !== v) {
            if (v) continue;
            d = !1;
            break;
          }
          if (h) {
            if (
              !gt(t, function (e, t) {
                if (!vt(h, t) && (p === e || o(p, e, n, r, i)))
                  return h.push(t);
              })
            ) {
              d = !1;
              break;
            }
          } else if (p !== g && !o(p, g, n, r, i)) {
            d = !1;
            break;
          }
        }
        return i.delete(e), i.delete(t), d;
      };
      var mt = T.Uint8Array,
        bt = p,
        wt = yt,
        _t = function (e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e, r) {
              n[++t] = [r, e];
            }),
            n
          );
        },
        xt = function (e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e) {
              n[++t] = e;
            }),
            n
          );
        },
        Et = R ? R.prototype : void 0,
        St = Et ? Et.valueOf : void 0;
      var Ot = function (e, t, n, r, o, i, a) {
        switch (n) {
          case "[object DataView]":
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            (e = e.buffer), (t = t.buffer);
          case "[object ArrayBuffer]":
            return !(e.byteLength != t.byteLength || !i(new mt(e), new mt(t)));
          case "[object Boolean]":
          case "[object Date]":
          case "[object Number]":
            return bt(+e, +t);
          case "[object Error]":
            return e.name == t.name && e.message == t.message;
          case "[object RegExp]":
          case "[object String]":
            return e == t + "";
          case "[object Map]":
            var l = _t;
          case "[object Set]":
            var s = 1 & r;
            if ((l || (l = xt), e.size != t.size && !s)) return !1;
            var u = a.get(e);
            if (u) return u == t;
            (r |= 2), a.set(e, t);
            var c = wt(l(e), l(t), r, o, i, a);
            return a.delete(e), c;
          case "[object Symbol]":
            if (St) return St.call(e) == St.call(t);
        }
        return !1;
      };
      var Ct = function (e, t) {
          for (var n = -1, r = t.length, o = e.length; ++n < r; )
            e[o + n] = t[n];
          return e;
        },
        Pt = Array.isArray,
        At = Ct,
        jt = Pt;
      var Mt = function (e, t, n) {
        var r = t(e);
        return jt(e) ? r : At(r, n(e));
      };
      var Nt = function (e, t) {
          for (
            var n = -1, r = null == e ? 0 : e.length, o = 0, i = [];
            ++n < r;

          ) {
            var a = e[n];
            t(a, n, e) && (i[o++] = a);
          }
          return i;
        },
        kt = function () {
          return [];
        },
        Dt = Object.prototype.propertyIsEnumerable,
        Bt = Object.getOwnPropertySymbols,
        It = Bt
          ? function (e) {
              return null == e
                ? []
                : ((e = Object(e)),
                  Nt(Bt(e), function (t) {
                    return Dt.call(e, t);
                  }));
            }
          : kt;
      var zt = function (e, t) {
        for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
        return r;
      };
      var Lt = function (e) {
          return null != e && "object" == typeof e;
        },
        Tt = G,
        Rt = Lt;
      var Ut = function (e) {
          return Rt(e) && "[object Arguments]" == Tt(e);
        },
        qt = Lt,
        $t = Object.prototype,
        Yt = $t.hasOwnProperty,
        Xt = $t.propertyIsEnumerable,
        Ht = Ut(
          (function () {
            return arguments;
          })(),
        )
          ? Ut
          : function (e) {
              return qt(e) && Yt.call(e, "callee") && !Xt.call(e, "callee");
            },
        Vt = { exports: {} };
      var Zt = function () {
        return !1;
      };
      !(function (e, t) {
        var n = T,
          r = Zt,
          o = t && !t.nodeType && t,
          i = o && e && !e.nodeType && e,
          a = i && i.exports === o ? n.Buffer : void 0,
          l = (a ? a.isBuffer : void 0) || r;
        e.exports = l;
      })(Vt, Vt.exports);
      var Ft = /^(?:0|[1-9]\d*)$/;
      var Kt = function (e, t) {
        var n = typeof e;
        return (
          !!(t = null == t ? 9007199254740991 : t) &&
          ("number" == n || ("symbol" != n && Ft.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      };
      var Gt = function (e) {
          return (
            "number" == typeof e &&
            e > -1 &&
            e % 1 == 0 &&
            e <= 9007199254740991
          );
        },
        Wt = G,
        Qt = Gt,
        Jt = Lt,
        en = {};
      (en["[object Float32Array]"] =
        en["[object Float64Array]"] =
        en["[object Int8Array]"] =
        en["[object Int16Array]"] =
        en["[object Int32Array]"] =
        en["[object Uint8Array]"] =
        en["[object Uint8ClampedArray]"] =
        en["[object Uint16Array]"] =
        en["[object Uint32Array]"] =
          !0),
        (en["[object Arguments]"] =
          en["[object Array]"] =
          en["[object ArrayBuffer]"] =
          en["[object Boolean]"] =
          en["[object DataView]"] =
          en["[object Date]"] =
          en["[object Error]"] =
          en["[object Function]"] =
          en["[object Map]"] =
          en["[object Number]"] =
          en["[object Object]"] =
          en["[object RegExp]"] =
          en["[object Set]"] =
          en["[object String]"] =
          en["[object WeakMap]"] =
            !1);
      var tn = function (e) {
        return Jt(e) && Qt(e.length) && !!en[Wt(e)];
      };
      var nn = function (e) {
          return function (t) {
            return e(t);
          };
        },
        rn = { exports: {} };
      !(function (e, t) {
        var n = I,
          r = t && !t.nodeType && t,
          o = r && e && !e.nodeType && e,
          i = o && o.exports === r && n.process,
          a = (function () {
            try {
              var e = o && o.require && o.require("util").types;
              return e || (i && i.binding && i.binding("util"));
            } catch (e) {}
          })();
        e.exports = a;
      })(rn, rn.exports);
      var on = tn,
        an = nn,
        ln = rn.exports,
        sn = ln && ln.isTypedArray,
        un = sn ? an(sn) : on,
        cn = zt,
        fn = Ht,
        dn = Pt,
        hn = Vt.exports,
        pn = Kt,
        gn = un,
        vn = Object.prototype.hasOwnProperty;
      var yn = function (e, t) {
          var n = dn(e),
            r = !n && fn(e),
            o = !n && !r && hn(e),
            i = !n && !r && !o && gn(e),
            a = n || r || o || i,
            l = a ? cn(e.length, String) : [],
            s = l.length;
          for (var u in e)
            (!t && !vn.call(e, u)) ||
              (a &&
                ("length" == u ||
                  (o && ("offset" == u || "parent" == u)) ||
                  (i &&
                    ("buffer" == u ||
                      "byteLength" == u ||
                      "byteOffset" == u)) ||
                  pn(u, s))) ||
              l.push(u);
          return l;
        },
        mn = Object.prototype;
      var bn = function (e) {
        var t = e && e.constructor;
        return e === (("function" == typeof t && t.prototype) || mn);
      };
      var wn = (function (e, t) {
          return function (n) {
            return e(t(n));
          };
        })(Object.keys, Object),
        _n = bn,
        xn = wn,
        En = Object.prototype.hasOwnProperty;
      var Sn = te,
        On = Gt;
      var Cn = yn,
        Pn = function (e) {
          if (!_n(e)) return xn(e);
          var t = [];
          for (var n in Object(e))
            En.call(e, n) && "constructor" != n && t.push(n);
          return t;
        },
        An = function (e) {
          return null != e && On(e.length) && !Sn(e);
        };
      var jn = Mt,
        Mn = It,
        Nn = function (e) {
          return An(e) ? Cn(e) : Pn(e);
        };
      var kn = function (e) {
          return jn(e, Nn, Mn);
        },
        Dn = Object.prototype.hasOwnProperty;
      var Bn = function (e, t, n, r, o, i) {
          var a = 1 & n,
            l = kn(e),
            s = l.length;
          if (s != kn(t).length && !a) return !1;
          for (var u = s; u--; ) {
            var c = l[u];
            if (!(a ? c in t : Dn.call(t, c))) return !1;
          }
          var f = i.get(e),
            d = i.get(t);
          if (f && d) return f == t && d == e;
          var h = !0;
          i.set(e, t), i.set(t, e);
          for (var p = a; ++u < s; ) {
            var g = e[(c = l[u])],
              v = t[c];
            if (r) var y = a ? r(v, g, c, t, e, i) : r(g, v, c, e, t, i);
            if (!(void 0 === y ? g === v || o(g, v, n, r, i) : y)) {
              h = !1;
              break;
            }
            p || (p = "constructor" == c);
          }
          if (h && !p) {
            var m = e.constructor,
              b = t.constructor;
            m == b ||
              !("constructor" in e) ||
              !("constructor" in t) ||
              ("function" == typeof m &&
                m instanceof m &&
                "function" == typeof b &&
                b instanceof b) ||
              (h = !1);
          }
          return i.delete(e), i.delete(t), h;
        },
        In = be(T, "DataView"),
        zn = we,
        Ln = be(T, "Promise"),
        Tn = be(T, "Set"),
        Rn = be(T, "WeakMap"),
        Un = G,
        qn = ae,
        $n = "[object Map]",
        Yn = "[object Promise]",
        Xn = "[object Set]",
        Hn = "[object WeakMap]",
        Vn = "[object DataView]",
        Zn = qn(In),
        Fn = qn(zn),
        Kn = qn(Ln),
        Gn = qn(Tn),
        Wn = qn(Rn),
        Qn = Un;
      ((In && Qn(new In(new ArrayBuffer(1))) != Vn) ||
        (zn && Qn(new zn()) != $n) ||
        (Ln && Qn(Ln.resolve()) != Yn) ||
        (Tn && Qn(new Tn()) != Xn) ||
        (Rn && Qn(new Rn()) != Hn)) &&
        (Qn = function (e) {
          var t = Un(e),
            n = "[object Object]" == t ? e.constructor : void 0,
            r = n ? qn(n) : "";
          if (r)
            switch (r) {
              case Zn:
                return Vn;
              case Fn:
                return $n;
              case Kn:
                return Yn;
              case Gn:
                return Xn;
              case Wn:
                return Hn;
            }
          return t;
        });
      var Jn = ut,
        er = yt,
        tr = Ot,
        nr = Bn,
        rr = Qn,
        or = Pt,
        ir = Vt.exports,
        ar = un,
        lr = "[object Arguments]",
        sr = "[object Array]",
        ur = "[object Object]",
        cr = Object.prototype.hasOwnProperty;
      var fr = function (e, t, n, r, o, i) {
          var a = or(e),
            l = or(t),
            s = a ? sr : rr(e),
            u = l ? sr : rr(t),
            c = (s = s == lr ? ur : s) == ur,
            f = (u = u == lr ? ur : u) == ur,
            d = s == u;
          if (d && ir(e)) {
            if (!ir(t)) return !1;
            (a = !0), (c = !1);
          }
          if (d && !c)
            return (
              i || (i = new Jn()),
              a || ar(e) ? er(e, t, n, r, o, i) : tr(e, t, s, n, r, o, i)
            );
          if (!(1 & n)) {
            var h = c && cr.call(e, "__wrapped__"),
              p = f && cr.call(t, "__wrapped__");
            if (h || p) {
              var g = h ? e.value() : e,
                v = p ? t.value() : t;
              return i || (i = new Jn()), o(g, v, n, r, i);
            }
          }
          return !!d && (i || (i = new Jn()), nr(e, t, n, r, o, i));
        },
        dr = Lt;
      var hr = function e(t, n, r, o, i) {
          return (
            t === n ||
            (null == t || null == n || (!dr(t) && !dr(n))
              ? t != t && n != n
              : fr(t, n, r, o, e, i))
          );
        },
        pr = hr;
      var gr = function (e, t, n) {
        var r = (n = "function" == typeof n ? n : void 0) ? n(e, t) : void 0;
        return void 0 === r ? pr(e, t, void 0, n) : !!r;
      };
      const vr = (e, t, n) =>
          n.ignoreCase
            ? "string" == typeof e &&
              "string" == typeof t &&
              e.toLowerCase() === t.toLowerCase()
            : n.recursiveEqual
              ? gr(e, t, (e, t) =>
                  n.ignoreCase && "string" == typeof e && "string" == typeof t
                    ? e.toLowerCase() === t.toLowerCase()
                    : void 0,
                )
              : e === t,
        yr = (e, t) => {
          if (e === t) return 1;
          if (null === e || null === t) return 0;
          if ("object" != typeof e || "object" != typeof t) return 0;
          const n = Object.keys(e),
            r = Object.keys(t),
            o = n.length,
            i = r.length;
          if (0 === o || 0 === i) return 0;
          const a = new Set(n),
            l = new Set(r),
            s = new Set([...a].filter((e) => l.has(e)));
          return 0 === s.size
            ? 0
            : 1 !== s.size || (1 !== o && 1 !== i) || e[n[0]] === t[r[0]]
              ? Math.max(s.size / o, s.size / i)
              : 0;
        },
        mr = (e, t, n, o, l, s, f = [], h = []) => {
          if (
            (n && o
              ? (f.push({ level: l, type: "equal", text: `"${n}": [` }),
                h.push({ level: l, type: "equal", text: `"${o}": [` }))
              : (f.push({ level: l, type: "equal", text: "[" }),
                h.push({ level: l, type: "equal", text: "[" })),
            l >= (s.maxDepth || 1 / 0))
          )
            f.push({ level: l + 1, type: "equal", text: "..." }),
              h.push({ level: l + 1, type: "equal", text: "..." });
          else {
            const [p, g] = ((e, t, n, o, l, s) => {
              const f = Array(e.length + 1)
                  .fill(0)
                  .map(() => Array(t.length + 1).fill(0)),
                h = Array(e.length + 1)
                  .fill(0)
                  .map(() => Array(t.length + 1).fill(0));
              for (let t = 1; t <= e.length; t++) h[t][0] = "up";
              for (let e = 1; e <= t.length; e++) h[0][e] = "left";
              for (let n = 1; n <= e.length; n++)
                for (let r = 1; r <= t.length; r++) {
                  const o = u(e[n - 1]);
                  o !== u(t[r - 1]) || ("array" !== o && "object" !== o)
                    ? vr(e[n - 1], t[r - 1], s)
                      ? ((f[n][r] = f[n - 1][r - 1] + 1), (h[n][r] = "diag"))
                      : f[n - 1][r] >= f[n][r - 1]
                        ? ((f[n][r] = f[n - 1][r]), (h[n][r] = "up"))
                        : ((f[n][r] = f[n][r - 1]), (h[n][r] = "left"))
                    : s.recursiveEqual
                      ? vr(e[n - 1], t[r - 1], s) ||
                        yr(e[n - 1], t[r - 1]) > 0.5
                        ? ((f[n][r] = f[n - 1][r - 1] + 1), (h[n][r] = "diag"))
                        : f[n - 1][r] >= f[n][r - 1]
                          ? ((f[n][r] = f[n - 1][r]), (h[n][r] = "up"))
                          : ((f[n][r] = f[n][r - 1]), (h[n][r] = "left"))
                      : ((f[n][r] = f[n - 1][r - 1] + 1), (h[n][r] = "diag"));
                }
              let p = e.length,
                g = t.length,
                v = [],
                y = [];
              for (; p > 0 || g > 0; )
                if ("diag" === h[p][g]) {
                  const i = u(e[p - 1]);
                  if (
                    s.recursiveEqual &&
                    ("array" === i || "object" === i) &&
                    vr(e[p - 1], t[g - 1], s)
                  ) {
                    const n = [],
                      o = [];
                    c(n, o, "", "", e[p - 1], t[g - 1], l + 1, s),
                      (v = r(v, n.reverse(), !0)),
                      (y = r(y, o.reverse(), !0));
                  } else if ("array" === i) {
                    const [i, a] = mr(e[p - 1], t[g - 1], n, o, l + 1, s);
                    (v = r(v, i.reverse(), !0)), (y = r(y, a.reverse(), !0));
                  } else if ("object" === i) {
                    const [n, o] = d(e[p - 1], t[g - 1], l + 2, s, mr);
                    v.unshift({ level: l + 1, type: "equal", text: "}" }),
                      y.unshift({ level: l + 1, type: "equal", text: "}" }),
                      (v = r(v, n.reverse(), !0)),
                      (y = r(y, o.reverse(), !0)),
                      v.unshift({ level: l + 1, type: "equal", text: "{" }),
                      y.unshift({ level: l + 1, type: "equal", text: "{" });
                  } else {
                    const n = [],
                      o = [];
                    c(n, o, "", "", e[p - 1], t[g - 1], l + 1, s),
                      (v = r(v, n.reverse(), !0)),
                      (y = r(y, o.reverse(), !0));
                  }
                  p--, g--;
                } else if ("up" === h[p][g])
                  if (s.showModifications && p > 1 && "left" === h[p - 1][g]) {
                    const i = u(e[p - 1]);
                    if (i === u(t[g - 1]))
                      if ("array" === i) {
                        const [i, a] = mr(e[p - 1], t[g - 1], n, o, l + 1, s);
                        (v = r(v, i.reverse(), !0)),
                          (y = r(y, a.reverse(), !0));
                      } else if ("object" === i) {
                        const [n, o] = d(e[p - 1], t[g - 1], l + 2, s, mr);
                        v.unshift({ level: l + 1, type: "equal", text: "}" }),
                          y.unshift({ level: l + 1, type: "equal", text: "}" }),
                          (v = r(v, n.reverse(), !0)),
                          (y = r(y, o.reverse(), !0)),
                          v.unshift({ level: l + 1, type: "equal", text: "{" }),
                          y.unshift({ level: l + 1, type: "equal", text: "{" });
                      } else
                        v.unshift({
                          level: l + 1,
                          type: "modify",
                          text: a(e[p - 1]),
                        }),
                          y.unshift({
                            level: l + 1,
                            type: "modify",
                            text: a(t[g - 1]),
                          });
                    else {
                      const n = [],
                        o = [];
                      c(n, o, "", "", e[p - 1], t[g - 1], l + 1, s),
                        (v = r(v, n.reverse(), !0)),
                        (y = r(y, o.reverse(), !0));
                    }
                    p--, g--;
                  } else {
                    const t = i(e[p - 1], void 0, 1).split("\n");
                    for (let e = t.length - 1; e >= 0; e--) {
                      var m, b;
                      v.unshift({
                        level:
                          l +
                          1 +
                          ((null == (m = t[e].match(/^\s+/)) ||
                          null == (b = m[0])
                            ? void 0
                            : b.length) || 0),
                        type: "remove",
                        text: t[e].replace(/^\s+/, "").replace(/,$/g, ""),
                      }),
                        y.unshift({ level: l + 1, type: "equal", text: "" });
                    }
                    p--;
                  }
                else {
                  const e = i(t[g - 1], void 0, 1).split("\n");
                  for (let t = e.length - 1; t >= 0; t--) {
                    var w, _;
                    v.unshift({ level: l + 1, type: "equal", text: "" }),
                      y.unshift({
                        level:
                          l +
                          1 +
                          ((null == (w = e[t].match(/^\s+/)) ||
                          null == (_ = w[0])
                            ? void 0
                            : _.length) || 0),
                        type: "add",
                        text: e[t].replace(/^\s+/, "").replace(/,$/g, ""),
                      });
                  }
                  g--;
                }
              return [v, y];
            })(e, t, n, o, l, s);
            (f = r(f, p)), (h = r(h, g));
          }
          return (
            f.push({ level: l, type: "equal", text: "]" }),
            h.push({ level: l, type: "equal", text: "]" }),
            [f, h]
          );
        },
        br = (e, t, n, o, i, l, s = [], f = []) => {
          if (
            ((e = [...e]),
            (t = [...t]),
            n && o
              ? (s.push({ level: i, type: "equal", text: `"${n}": [` }),
                f.push({ level: i, type: "equal", text: `"${o}": [` }))
              : (s.push({ level: i, type: "equal", text: "[" }),
                f.push({ level: i, type: "equal", text: "[" })),
            i >= (l.maxDepth || 1 / 0))
          )
            s.push({ level: i + 1, type: "equal", text: "..." }),
              f.push({ level: i + 1, type: "equal", text: "..." });
          else
            for (; e.length || t.length; ) {
              const n = e[0],
                o = t[0],
                y = u(n),
                m = u(o);
              if (e.length && t.length) {
                if (y !== m) c(s, f, "", "", n, o, i + 1, l);
                else if (
                  l.recursiveEqual &&
                  ["object", "array"].includes(y) &&
                  vr(n, o, l)
                )
                  c(s, f, "", "", n, o, i + 1, l);
                else if ("object" === y) {
                  s.push({ level: i + 1, type: "equal", text: "{" }),
                    f.push({ level: i + 1, type: "equal", text: "{" });
                  const [e, t] = d(n, o, i + 2, l, br);
                  (s = r(s, e)),
                    (f = r(f, t)),
                    s.push({ level: i + 1, type: "equal", text: "}" }),
                    f.push({ level: i + 1, type: "equal", text: "}" });
                } else if ("array" === y) {
                  const [e, t] = br(n, o, "", "", i + 1, l, [], []);
                  (s = r(s, e)), (f = r(f, t));
                } else
                  n === o
                    ? (s.push({ level: i + 1, type: "equal", text: a(n) }),
                      f.push({ level: i + 1, type: "equal", text: a(o) }))
                    : l.showModifications
                      ? (s.push({ level: i + 1, type: "modify", text: a(n) }),
                        f.push({ level: i + 1, type: "modify", text: a(o) }))
                      : (s.push({ level: i + 1, type: "remove", text: a(n) }),
                        s.push({ level: i + 1, type: "equal", text: "" }),
                        f.push({ level: i + 1, type: "equal", text: "" }),
                        f.push({ level: i + 1, type: "add", text: a(o) }));
                e.shift(), t.shift();
              } else if (e.length) {
                const t = a(n, void 0, !0).split("\n");
                for (let e = 0; e < t.length; e++) {
                  var h, p;
                  s.push({
                    level:
                      i +
                      1 +
                      ((null == (h = t[e].match(/^\s+/)) || null == (p = h[0])
                        ? void 0
                        : p.length) || 0),
                    type: "remove",
                    text: t[e].replace(/^\s+/, "").replace(/,$/g, ""),
                  }),
                    f.push({ level: i + 1, type: "equal", text: "" });
                }
                e.shift();
              } else if (t.length) {
                const e = a(o, void 0, !0).split("\n");
                for (let t = 0; t < e.length; t++) {
                  var g, v;
                  s.push({ level: i + 1, type: "equal", text: "" }),
                    f.push({
                      level:
                        i +
                        1 +
                        ((null == (g = e[t].match(/^\s+/)) || null == (v = g[0])
                          ? void 0
                          : v.length) || 0),
                      type: "add",
                      text: e[t].replace(/^\s+/, "").replace(/,$/g, ""),
                    });
                }
                t.shift();
              }
            }
          return (
            s.push({ level: i, type: "equal", text: "]" }),
            f.push({ level: i, type: "equal", text: "]" }),
            [s, f]
          );
        };
      function wr() {
        return (
          (wr =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          wr.apply(this, arguments)
        );
      }
      const _r = (e, t) => {
        if (!e || "object" != typeof e) return e;
        if (Array.isArray(e)) {
          const n = [...e];
          return (
            n.sort((e, n) =>
              s(e, n, { ignoreCase: null == t ? void 0 : t.ignoreCase }),
            ),
            n.map((e) => _r(e, t))
          );
        }
        const n = wr({}, e);
        for (const e in n) n[e] = _r(n[e], t);
        return n;
      };
      function xr() {
        return (
          (xr =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          xr.apply(this, arguments)
        );
      }
      const Er = { level: 0, type: "equal", text: "" },
        Sr = { level: 0, type: "equal", text: "{" },
        Or = { level: 0, type: "equal", text: "}" };
      let Cr = class {
        detectCircular(e) {
          if (this.options.detectCircular && o(e))
            throw new Error(
              `Circular reference detected in object (with keys ${Object.keys(e)
                .map((e) => `"${e}"`)
                .join(", ")})`,
            );
        }
        sortResultLines(e, t) {
          for (let n = 0; n < e.length; n++) {
            let n = !1;
            for (let r = 1; r < e.length; r++)
              if (
                "remove" === e[r].type &&
                "equal" === e[r - 1].type &&
                "equal" === t[r].type &&
                "add" === t[r - 1].type
              ) {
                const o = e[r - 1];
                (e[r - 1] = e[r]), (e[r] = o);
                const i = t[r - 1];
                (t[r - 1] = t[r]), (t[r] = i), (n = !0);
              }
            if (!n) break;
          }
        }
        calculateLineNumbers(e) {
          let t = 0;
          for (const n of e) n.text && (n.lineNumber = ++t);
        }
        calculateCommas(e) {
          const t = Array(e.length).fill(0);
          for (let n = e.length - 1; n > 0; n--)
            e[n].text ? (t[n - 1] = n) : (t[n - 1] = t[n]);
          for (let n = 0; n < e.length; n++)
            !e[n].text.endsWith("{") &&
              !e[n].text.endsWith("[") &&
              e[n].text &&
              t[n] &&
              e[n].level <= e[t[n]].level &&
              (e[n].comma = !0);
        }
        diff(e, t) {
          this.detectCircular(e),
            this.detectCircular(t),
            ("unorder-normal" !== this.options.arrayDiffMethod &&
              "unorder-lcs" !== this.options.arrayDiffMethod) ||
              ((e = _r(e, this.options)), (t = _r(t, this.options)));
          let n = [],
            o = [];
          const a = u(e);
          if (a !== u(t)) {
            (n = i(e, void 0, 1, this.options.maxDepth)
              .split("\n")
              .map((e) => {
                var t, n;
                return {
                  level:
                    (null == (t = e.match(/^\s+/)) || null == (n = t[0])
                      ? void 0
                      : n.length) || 0,
                  type: "remove",
                  text: e.replace(/^\s+/, "").replace(/,$/g, ""),
                  comma: e.endsWith(","),
                };
              })),
              (o = i(t, void 0, 1, this.options.maxDepth)
                .split("\n")
                .map((e) => {
                  var t, n;
                  return {
                    level:
                      (null == (t = e.match(/^\s+/)) || null == (n = t[0])
                        ? void 0
                        : n.length) || 0,
                    type: "add",
                    text: e.replace(/^\s+/, "").replace(/,$/g, ""),
                    comma: e.endsWith(","),
                  };
                }));
            const a = n.length,
              l = o.length;
            (n = r(
              n,
              Array(l)
                .fill(0)
                .map(() => xr({}, Er)),
            )),
              (o = r(
                o,
                Array(a)
                  .fill(0)
                  .map(() => xr({}, Er)),
                !0,
              ));
          } else
            "object" === a
              ? (([n, o] = d(e, t, 1, this.options, this.arrayDiffFunc)),
                n.unshift(xr({}, Sr)),
                n.push(xr({}, Or)),
                o.unshift(xr({}, Sr)),
                o.push(xr({}, Or)))
              : "array" === a
                ? ([n, o] = this.arrayDiffFunc(e, t, "", "", 0, this.options))
                : e !== t
                  ? this.options.ignoreCase
                    ? "string" == typeof e &&
                      "string" == typeof t &&
                      e.toLowerCase() === t.toLowerCase() &&
                      ((n = [{ level: 0, type: "equal", text: e }]),
                      (o = [{ level: 0, type: "equal", text: t }]))
                    : this.options.showModifications
                      ? ((n = [
                          {
                            level: 0,
                            type: "modify",
                            text: i(e, void 0, void 0, this.options.maxDepth),
                          },
                        ]),
                        (o = [
                          {
                            level: 0,
                            type: "modify",
                            text: i(t, void 0, void 0, this.options.maxDepth),
                          },
                        ]))
                      : ((n = [
                          {
                            level: 0,
                            type: "remove",
                            text: i(e, void 0, void 0, this.options.maxDepth),
                          },
                          xr({}, Er),
                        ]),
                        (o = [
                          xr({}, Er),
                          {
                            level: 0,
                            type: "add",
                            text: i(t, void 0, void 0, this.options.maxDepth),
                          },
                        ]))
                  : ((n = [
                      {
                        level: 0,
                        type: "equal",
                        text: i(e, void 0, void 0, this.options.maxDepth),
                      },
                    ]),
                    (o = [
                      {
                        level: 0,
                        type: "equal",
                        text: i(t, void 0, void 0, this.options.maxDepth),
                      },
                    ]));
          return (
            this.sortResultLines(n, o),
            this.calculateLineNumbers(n),
            this.calculateLineNumbers(o),
            this.calculateCommas(n),
            this.calculateCommas(o),
            [n, o]
          );
        }
        constructor({
          detectCircular: e = !0,
          maxDepth: t = 1 / 0,
          showModifications: n = !0,
          arrayDiffMethod: r = "normal",
          ignoreCase: o = !1,
          ignoreCaseForKey: i = !1,
          recursiveEqual: a = !1,
        } = {}) {
          (this.options = {
            detectCircular: e,
            maxDepth: t,
            showModifications: n,
            arrayDiffMethod: r,
            ignoreCase: o,
            ignoreCaseForKey: i,
            recursiveEqual: a,
          }),
            (this.arrayDiffFunc = "lcs" === r || "unorder-lcs" === r ? mr : br);
        }
      };
      var Pr = n(90626);
      function Ar() {
        return (
          (Ar =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Ar.apply(this, arguments)
        );
      }
      const jr = (e) => "hasLinesBefore" in e || "hasLinesAfter" in e,
        Mr = (e, t, n) => (jr(e) ? n : t * (e.end - e.start + 1)),
        Nr = (e, t) => {
          const n = [];
          let r, o;
          if (e.length && t.length)
            for (
              e = [...e],
                t = [...t],
                r = Ar({}, e.shift()),
                o = Ar({}, t.shift());
              ;

            ) {
              if (r.start === o.start) {
                const e = Math.min(r.end, o.end);
                n.push(Ar({}, r, o, { end: e })), (r.start = o.start = e);
              } else if (r.start < o.start) {
                const e = Math.min(r.end, o.start);
                n.push(Ar({}, o, r, { end: e })), (r.start = e);
              } else {
                const e = Math.min(r.start, o.end);
                n.push(Ar({}, r, o, { end: e })), (o.start = e);
              }
              if (!e.length || !t.length) break;
              r.start === r.end && (r = Ar({}, e.shift())),
                o.start === o.end && (o = Ar({}, t.shift()));
            }
          return (
            e.length ||
              n.push(...t.map((e) => Ar({}, e, { token: r.token || "plain" }))),
            t.length || n.push(...e),
            n
          );
        };
      var kr = {};
      Object.defineProperty(kr, "__esModule", { value: !0 }),
        (kr.applyPatch =
          kr.calcPatch =
          Lr =
          kr.lcs =
          kr.diff =
          kr.diff_core =
            void 0);
      let Dr = class {
        [Symbol.iterator]() {
          return this;
        }
        next() {
          const { state: e, result: t } = this;
          if (this.c > 1) return (t.done = !0), (t.value = void 0), t;
          const n = (function (e, t) {
            const { b: n, eq: r, stack_base: o } = e;
            let { i, N: a, j: l, M: s, Z: u, stack_top: c } = e;
            for (;;)
              switch (t) {
                case 0:
                  e: for (; a > 0 && s > 0; ) {
                    n.fill(0, 0, 2 * u);
                    const e = a - s,
                      t = a + s,
                      f = 1 & t,
                      d = i + a - 1,
                      h = l + s - 1,
                      p = (t + f) / 2;
                    let g;
                    t: for (let t = 0; t <= p; t++) {
                      const p = 2 * Math.max(0, t - s) - t,
                        v = t - 2 * Math.max(0, t - a);
                      for (let d = p; d <= v; d += 2) {
                        const h = n[d - 1 - u * Math.floor((d - 1) / u)],
                          p = n[d + 1 - u * Math.floor((d + 1) / u)],
                          v = d === -t || (d !== t && h < p) ? p : h + 1,
                          y = v - d;
                        let m = v,
                          b = y;
                        for (; m < a && b < s && r(i + m, l + b); ) m++, b++;
                        if (
                          ((n[d - u * Math.floor(d / u)] = m),
                          1 === f &&
                            (g = e - d) >= 1 - t &&
                            g < t &&
                            m + n[u + g - u * Math.floor(g / u)] >= a)
                        ) {
                          if (t > 1 || m !== v) {
                            (o[c++] = i + m),
                              (o[c++] = a - m),
                              (o[c++] = l + b),
                              (o[c++] = s - b),
                              (a = v),
                              (s = y),
                              (u = 2 * (Math.min(a, s) + 1));
                            continue e;
                          }
                          break t;
                        }
                      }
                      for (let y = p; y <= v; y += 2) {
                        const p = n[u + y - 1 - u * Math.floor((y - 1) / u)],
                          v = n[u + y + 1 - u * Math.floor((y + 1) / u)],
                          m = y === -t || (y !== t && p < v) ? v : p + 1,
                          b = m - y;
                        let w = m,
                          _ = b;
                        for (; w < a && _ < s && r(d - w, h - _); ) w++, _++;
                        if (
                          ((n[u + y - u * Math.floor(y / u)] = w),
                          0 === f &&
                            (g = e - y) >= -t &&
                            g <= t &&
                            w + n[g - u * Math.floor(g / u)] >= a)
                        ) {
                          if (t > 0 || w !== m) {
                            (o[c++] = i + a - m),
                              (o[c++] = m),
                              (o[c++] = l + s - b),
                              (o[c++] = b),
                              (a -= w),
                              (s -= _),
                              (u = 2 * (Math.min(a, s) + 1));
                            continue e;
                          }
                          break t;
                        }
                      }
                    }
                    if (a !== s) {
                      s > a
                        ? ((i += a), (l += a), (s -= a), (a = 0))
                        : ((i += s), (l += s), (a -= s), (s = 0));
                      break;
                    }
                  }
                  if (a + s !== 0)
                    if (e.pxe === i || e.pye === l)
                      (e.pxe = i + a), (e.pye = l + s);
                    else {
                      const t = e.pxs;
                      if (
                        ((e.oxs = e.pxs),
                        (e.oxe = e.pxe),
                        (e.oys = e.pys),
                        (e.oye = e.pye),
                        (e.pxs = i),
                        (e.pxe = i + a),
                        (e.pys = l),
                        (e.pye = l + s),
                        t >= 0)
                      )
                        return (
                          (e.i = i),
                          (e.N = a),
                          (e.j = l),
                          (e.M = s),
                          (e.Z = u),
                          (e.stack_top = c),
                          1
                        );
                    }
                case 1:
                  if (0 === c) return 2;
                  (s = o[--c]),
                    (l = o[--c]),
                    (a = o[--c]),
                    (i = o[--c]),
                    (u = 2 * (Math.min(a, s) + 1)),
                    (t = 0);
              }
          })(e, this.c);
          return (
            (this.c = n),
            1 === n
              ? ((t.value = [e.oxs, e.oxe, e.oys, e.oye]), t)
              : e.pxs >= 0
                ? ((t.value = [e.pxs, e.pxe, e.pys, e.pye]), t)
                : ((t.done = !0), (t.value = void 0), t)
          );
        }
        constructor(e) {
          (this.state = e),
            (this.c = 0),
            (this.result = { value: null, done: !1 });
        }
      };
      function Br(e, t, n, r, o) {
        const i = 2 * (Math.min(t, r) + 1),
          a = t + r,
          l = new (
            a < 256 ? Uint8Array : a < 65536 ? Uint16Array : Uint32Array
          )(2 * i);
        return new Dr({
          i: e,
          N: t,
          j: n,
          M: r,
          Z: i,
          b: l,
          eq: o,
          pxs: -1,
          pxe: -1,
          pys: -1,
          pye: -1,
          oxs: -1,
          oxe: -1,
          oys: -1,
          oye: -1,
          stack_top: 0,
          stack_base: [],
        });
      }
      function Ir(e, t) {
        let [n, r, o] = [0, e.length, t.length];
        for (; n < r && n < o && e[n] === t[n]; ) n++;
        if (n === r && n === o) return [][Symbol.iterator]();
        for (; e[--r] === t[--o] && r > n && o > n; );
        return Br(n, r + 1 - n, n, o + 1 - n, (n, r) => e[n] === t[r]);
      }
      (kr.diff_core = Br), (kr.diff = Ir);
      let zr = class {
        [Symbol.iterator]() {
          return this;
        }
        next() {
          const e = this.diff.next();
          if (e.done) {
            const { i: t, j: n, N: r } = this;
            return (
              t < r && ((e.done = !1), (e.value = [t, n, r - t]), (this.i = r)),
              e
            );
          }
          const t = e.value,
            n = t[0],
            r = t[1],
            o = t[3],
            { i, j: a } = this;
          return (
            i !== n && (t.length--, (t[0] = i), (t[1] = a), (t[2] = n - i)),
            (this.i = r),
            (this.j = o),
            e
          );
        }
        constructor(e, t) {
          (this.diff = e), (this.N = t), (this.i = 0), (this.j = 0);
        }
      };
      var Lr = (kr.lcs = function (e, t) {
        return new zr(Ir(e, t), e.length);
      });
      (kr.calcPatch = function* (e, t) {
        const n = ArrayBuffer.isView(e)
          ? Uint8Array.prototype.subarray
          : e.slice;
        for (const r of Ir(e, t)) (r[2] = n.call(t, r[2], r[3])), yield r;
      }),
        (kr.applyPatch = function* (e, t) {
          let n = 0;
          const r = ArrayBuffer.isView(e)
            ? Uint8Array.prototype.subarray
            : e.slice;
          for (const [o, i, a] of t)
            n < o && (yield r.call(e, n, o)),
              a.length > 0 && (yield a),
              (n = i);
          n < e.length && (yield r.call(e, n));
        });
      const Tr = (e, t) => {
          const n = [];
          let r = 0;
          for (const o of e) n.push(r), (r += o.length + t);
          return n.push(r - t), n;
        },
        Rr = (e) => e.filter((e) => e.end > e.start),
        Ur = (e, t, n) => {
          if (!e) return [{ token: "plain", start: n, end: t.length + n }];
          if (!Number.isNaN(Number(t)))
            return [{ token: "number", start: n, end: t.length + n }];
          if ("true" === t || "false" === t)
            return [{ token: "boolean", start: n, end: t.length + n }];
          if ("null" === t)
            return [{ token: "null", start: n, end: t.length + n }];
          if (t.startsWith('"')) {
            if (t.endsWith(": [") || t.endsWith(": {"))
              return [
                { token: "key", start: n, end: t.length - 3 + n },
                {
                  token: "punctuation",
                  start: t.length - 3,
                  end: t.length - 2 + n,
                },
                { token: "plain", start: t.length - 2, end: t.length - 1 + n },
                {
                  token: "punctuation",
                  start: t.length - 1,
                  end: t.length + n,
                },
              ];
            let r = 1;
            for (; r < t.length && '"' !== t[r]; ) "\\" === t[r] && ++r, ++r;
            return r === t.length - 1
              ? [{ token: "string", start: n, end: t.length + n }]
              : [
                  { token: "key", start: n, end: r + 1 + n },
                  { token: "punctuation", start: r + 1, end: r + 2 + n },
                  { token: "plain", start: r + 2, end: r + 3 + n },
                  ...Ur(e, t.substring(r + 3), n + r + 3),
                ];
          }
          return "{" === t || "}" === t || "[" === t || "]" === t
            ? [{ token: "punctuation", start: n, end: t.length + n }]
            : [{ token: "plain", start: n, end: t.length + n }];
        },
        qr = { threshold: 8, margin: 3 },
        $r = (e, t, n) => {
          if (!n) return [{ start: 0, end: e.length, isEqual: !1 }];
          const r = [];
          for (let n = 0; n < e.length; n++)
            "equal" === e[n].type && "equal" === t[n].type
              ? r.length && r[r.length - 1].isEqual
                ? r[r.length - 1].end++
                : r.push({ start: n, end: n + 1, isEqual: !0 })
              : r.length && !r[r.length - 1].isEqual
                ? r[r.length - 1].end++
                : r.push({ start: n, end: n + 1, isEqual: !1 });
          const o = !0 === n ? qr : n,
            { threshold: i, margin: a } = o;
          i < 2 * a + 1 &&
            console.warn(
              `Threshold (${i}) is no more than 2 margins + 1 "expand" line (${a} * 2 + 1), it's not necessary to hide unchanged areas which have less than ${2 * a + 1} lines.`,
            );
          const l = [];
          for (let t = 0; t < r.length; t++) {
            const n = r[t];
            !n.isEqual || n.end - n.start < i || n.end - n.start <= 2 * a + 1
              ? l.push(n)
              : t
                ? t === r.length - 1
                  ? (l.push({ start: n.start, end: n.start + a, isEqual: !0 }),
                    l.push({
                      hasLinesBefore: !1,
                      hasLinesAfter: !0,
                      start: n.start + a,
                      end: e.length,
                      isEqual: !0,
                    }))
                  : (l.push({ start: n.start, end: n.start + a, isEqual: !0 }),
                    l.push({
                      hasLinesBefore: !0,
                      hasLinesAfter: !0,
                      start: n.start + a,
                      end: n.end - a,
                      isEqual: !0,
                    }),
                    l.push({ start: n.end - a, end: n.end, isEqual: !0 }))
                : (l.push({
                    hasLinesBefore: !0,
                    hasLinesAfter: !1,
                    start: 0,
                    end: n.end - a,
                    isEqual: !0,
                  }),
                  l.push({ start: n.end - a, end: n.end, isEqual: !0 }));
          }
          return l;
        };
      function Yr() {
        return (
          (Yr =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Yr.apply(this, arguments)
        );
      }
      const Xr = (e) => {
        var t, n;
        const [r, o] = e.diff,
          i = e.lineNumbers ? `calc(${String(r.length).length}ch + 16px)` : 0;
        var a;
        const l = null != (a = e.indent) ? a : 2,
          s = "tab" === l ? "\t" : " ",
          u = "tab" === l ? 1 : l,
          c = {
            mode:
              (null == (t = e.inlineDiffOptions) ? void 0 : t.mode) || "char",
            wordSeparator:
              (null == (n = e.inlineDiffOptions) ? void 0 : n.wordSeparator) ||
              "",
          };
        var f;
        const d = null != (f = e.hideUnchangedLines) && f,
          {
            scrollContainer: h = "body",
            itemHeight: p = 18,
            expandLineHeight: g = 26,
          } = e.virtual && !0 !== e.virtual ? e.virtual : {},
          v = "body" === h ? document.body : document.querySelector(h),
          y = Pr.useRef(r),
          m = Pr.useRef(o),
          b = Pr.useRef($r(r, o, d)),
          w = Pr.useRef([]),
          _ = Pr.useRef(0),
          x = Pr.useRef(null),
          [, E] = Pr.useState({}),
          S = () => {
            if (((w.current = []), e.virtual)) {
              let e = 0;
              for (const t of b.current)
                jr(t)
                  ? (w.current.push(e), (e += g))
                  : (w.current.push(e), (e += p * (t.end - t.start)));
              _.current = b.current.reduce(
                (e, t) => (jr(t) ? e + g : e + (t.end - t.start) * p),
                0,
              );
            }
            E({});
          };
        Pr.useEffect(() => {
          (y.current = r), (m.current = o), (b.current = $r(r, o, d)), S();
        }, [d, r, o]),
          Pr.useEffect(() => {
            if (!e.virtual || !v) return;
            const t = () => E({});
            return (
              v.addEventListener("scroll", t),
              () => {
                v.removeEventListener("scroll", t);
              }
            );
          }, [e.virtual, v]);
        const O = (e) => (t) => {
            const n = [...b.current],
              r = n[e];
            (n[e] = Yr({}, r, { end: Math.max(r.end - t, r.start) })),
              e + 1 < b.current.length - 1 &&
                (n[e + 1] = Yr({}, n[e + 1], {
                  start: Math.max(r.end - t, r.start),
                })),
              (b.current = n),
              S();
          },
          C = (e) => (t) => {
            const n = [...b.current],
              r = n[e];
            (n[e] = Yr({}, r, { start: Math.min(r.start + t, r.end) })),
              e > 1 &&
                (n[e - 1] = Yr({}, n[e - 1], {
                  end: Math.min(r.start + t, r.end),
                })),
              (b.current = n),
              S();
          },
          P = (e) => () => {
            const t = [...b.current],
              n = t[e];
            (t[e] = Yr({}, n, { start: n.start, end: n.start })),
              e + 1 < b.current.length - 1
                ? (t[e + 1] = Yr({}, t[e + 1], { start: n.start }))
                : (t[e - 1] = Yr({}, t[e - 1], { end: n.end })),
              (b.current = t),
              S();
          },
          A = (e, t = [], n = !1, r = !1) =>
            Pr.createElement(
              Pr.Fragment,
              null,
              t.map((t, n) => {
                const r = e.slice(t.start, t.end);
                if (!t.type && !t.token) return r;
                const o = [
                  t.type ? `inline-diff-${t.type}` : "",
                  t.token ? `token ${t.token}` : "",
                ]
                  .filter(Boolean)
                  .join(" ");
                return Pr.createElement(
                  "span",
                  { key: `${n}-${t.type}-${r}`, className: o },
                  r,
                );
              }),
              n &&
                (r
                  ? Pr.createElement(
                      "span",
                      { className: "token punctuation" },
                      ",",
                    )
                  : ","),
            ),
          j = (t, n) => {
            var r, o;
            const i = y.current[t],
              a = m.current[t],
              [l, f] =
                e.highlightInlineDiff &&
                "modify" === i.type &&
                "modify" === a.type
                  ? ((e, t, n) => {
                      let r = [],
                        o = [],
                        i = 0,
                        a = 0;
                      if ("word" === n.mode) {
                        const l = n.wordSeparator || " ",
                          s = e.split(l),
                          u = t.split(l),
                          c = [...Lr(s, u)],
                          f = l.length,
                          d = Tr(s, f),
                          h = Tr(u, f);
                        for (const [e, t, n] of c)
                          e > i &&
                            r.push({ type: "remove", start: d[i], end: d[e] }),
                            t > a &&
                              o.push({ type: "add", start: h[a], end: h[t] }),
                            (i = e + n),
                            (a = t + n),
                            r.push({ start: d[e], end: d[i] }),
                            o.push({ start: h[t], end: h[a] });
                        return (
                          e.length > i &&
                            r.push({
                              type: "remove",
                              start: d[i],
                              end: e.length,
                            }),
                          t.length > a &&
                            o.push({ type: "add", start: h[a], end: t.length }),
                          (r = Rr(r)),
                          (o = Rr(o)),
                          [r, o]
                        );
                      }
                      const l = Lr(e, t);
                      for (const [e, t, n] of l)
                        e > i && r.push({ type: "remove", start: i, end: e }),
                          t > a && o.push({ type: "add", start: a, end: t }),
                          (i = e + n),
                          (a = t + n),
                          r.push({ start: e, end: i }),
                          o.push({ start: t, end: a });
                      return (
                        e.length > i &&
                          r.push({ type: "remove", start: i, end: e.length }),
                        t.length > a &&
                          o.push({ type: "add", start: a, end: t.length }),
                        (r = Rr(r)),
                        (o = Rr(o)),
                        [r, o]
                      );
                    })(i.text, a.text, c)
                  : [[], []],
              d = Ur(n, i.text, 0),
              h = Ur(n, a.text, 0),
              p = Nr(d, l),
              g = Nr(h, f);
            var v;
            const b =
              "equal" !== i.type &&
              null != (v = null == (r = e.bgColour) ? void 0 : r[i.type])
                ? v
                : "";
            var w;
            const _ =
              "equal" !== a.type &&
              null != (w = null == (o = e.bgColour) ? void 0 : o[a.type])
                ? w
                : "";
            return Pr.createElement(
              "tr",
              { key: t },
              e.lineNumbers &&
                Pr.createElement(
                  "td",
                  {
                    className: `line-${i.type} line-number`,
                    style: { backgroundColor: b },
                  },
                  i.lineNumber,
                ),
              Pr.createElement(
                "td",
                { className: `line-${i.type}`, style: { backgroundColor: b } },
                Pr.createElement(
                  "pre",
                  null,
                  i.text && s.repeat(i.level * u),
                  A(i.text, p, i.comma, n),
                ),
              ),
              e.lineNumbers &&
                Pr.createElement(
                  "td",
                  {
                    className: `line-${a.type} line-number`,
                    style: { backgroundColor: _ },
                  },
                  a.lineNumber,
                ),
              Pr.createElement(
                "td",
                { className: `line-${a.type}`, style: { backgroundColor: _ } },
                Pr.createElement(
                  "pre",
                  null,
                  a.text && s.repeat(a.level * u),
                  A(a.text, g, a.comma, n),
                ),
              ),
            );
          },
          M = (e, t, n, r) =>
            Pr.createElement(
              Pr.Fragment,
              null,
              e &&
                Pr.createElement(
                  "button",
                  { onClick: () => O(r)(n) },
                  "⬆️ Show ",
                  n,
                  " lines before",
                ),
              Pr.createElement(
                "button",
                { onClick: () => P(r)() },
                "↕️ Show all unchanged lines",
              ),
              t &&
                Pr.createElement(
                  "button",
                  { onClick: () => C(r)(n) },
                  "⬇️ Show ",
                  n,
                  " lines after",
                ),
            ),
          N = (e, t, n, r, o) => {
            let { start: i, end: a } = e;
            if (((i = Math.max(i, n)), (a = Math.min(a, r)), i === a))
              return null;
            if (!jr(e))
              return Array(a - i)
                .fill(0)
                .map((e, t) => j(i + t, o));
            const { hasLinesBefore: l, hasLinesAfter: s } = e,
              u = "boolean" == typeof d ? 20 : d.expandMoreLinesLimit || 20;
            return [
              Pr.createElement(
                "tr",
                { key: `expand-line-${t}`, className: "expand-line" },
                Pr.createElement(
                  "td",
                  {
                    colSpan: 4,
                    className: `${l ? "has-lines-before" : ""} ${s ? "has-lines-after" : ""}`,
                  },
                  "boolean" != typeof d && d.expandLineRenderer
                    ? d.expandLineRenderer({
                        hasLinesBefore: l,
                        hasLinesAfter: s,
                        onExpandBefore: O(t),
                        onExpandAfter: C(t),
                        onExpandAll: P(t),
                      })
                    : M(l, s, u, t),
                ),
              ),
            ];
          },
          k = [
            "json-diff-viewer",
            e.virtual && "json-diff-viewer-virtual",
            e.syntaxHighlight &&
              `json-diff-viewer-theme-${e.syntaxHighlight.theme || "monokai"}`,
            e.className,
          ]
            .filter(Boolean)
            .join(" "),
          D = !!e.syntaxHighlight;
        return Pr.createElement(
          "table",
          { className: k, style: e.style },
          Pr.createElement(
            "colgroup",
            { className: "measure-line" },
            e.lineNumbers && Pr.createElement("col", { style: { width: i } }),
            Pr.createElement("col", null),
            e.lineNumbers && Pr.createElement("col", { style: { width: i } }),
            Pr.createElement("col", null),
          ),
          Pr.createElement(
            "tbody",
            { ref: x },
            ((t) => {
              if (!e.virtual)
                return b.current.map((e, n) => N(e, n, 0, y.current.length, t));
              var n;
              const r =
                null != (n = null == v ? void 0 : v.clientHeight) ? n : 0;
              var o;
              const i = null != (o = null == v ? void 0 : v.scrollTop) ? o : 0,
                a = i + r;
              let l = x.current;
              var s;
              let u = null != (s = null == l ? void 0 : l.offsetTop) ? s : 0;
              for (
                ;
                (null == l ? void 0 : l.offsetParent) &&
                (null == l ? void 0 : l.offsetParent) !== v;

              )
                (l = l.offsetParent), (u += l.offsetTop);
              if (u > a || u + _.current < i)
                return Pr.createElement(
                  "tr",
                  null,
                  Pr.createElement("td", {
                    colSpan: 4,
                    style: { height: `${_.current}px` },
                  }),
                );
              const c = i - u,
                f = a - u,
                [d, h, m, E] = ((e, t, n, r, o, i) => {
                  if (!t.length) return [0, 0, 0, 0];
                  let a = 0,
                    l = 0,
                    s = 0,
                    u = 0,
                    c = 0,
                    f = e.length - 1;
                  for (;;) {
                    let r = Math.floor((c + f) / 2);
                    if (
                      (t[r] + Mr(e[r], o, i) <= n ? (c = r + 1) : (f = r),
                      c === f)
                    ) {
                      a = c;
                      break;
                    }
                  }
                  const d = e[a];
                  for (
                    s = jr(d) ? d.start : d.start + Math.floor((n - t[a]) / o),
                      c = 0,
                      f = e.length - 1;
                    ;

                  ) {
                    let e = Math.floor((c + f + 1) / 2);
                    if ((t[e] >= r ? (f = e - 1) : (c = e), c === f)) {
                      l = c;
                      break;
                    }
                  }
                  const h = e[l];
                  return (
                    (u = jr(h) ? h.end : h.start + Math.ceil((r - t[l]) / o)),
                    [a, s, l, u]
                  );
                })(b.current, w.current, c, f, p, g),
                [S, O] = ((e, t, n, r, o, i, a, l, s) => {
                  if (!t.length) return [0, 0];
                  let u = 0,
                    c = 0;
                  const f = e[n];
                  u = jr(f) ? t[n] : t[n] + (r - f.start) * a;
                  const d = e[o];
                  return (
                    (c = jr(d) ? s - t[o] - l : s - t[o] - (i - d.start) * a),
                    [u, c]
                  );
                })(b.current, w.current, d, h, m, E, p, g, _.current),
                C = b.current.slice(d, m + 1);
              return C.length
                ? Pr.createElement(
                    Pr.Fragment,
                    null,
                    Pr.createElement(
                      "tr",
                      null,
                      Pr.createElement("td", {
                        colSpan: 4,
                        style: { height: S, padding: 0 },
                      }),
                    ),
                    C.map((e, n) => N(e, n, h, E, t)),
                    Pr.createElement(
                      "tr",
                      null,
                      Pr.createElement("td", {
                        colSpan: 4,
                        style: { height: O, padding: 0 },
                      }),
                    ),
                  )
                : Pr.createElement(
                    "tr",
                    null,
                    Pr.createElement("td", {
                      colSpan: 4,
                      style: { height: `${_.current}px` },
                    }),
                  );
            })(D),
          ),
        );
      };
      Xr.displayName = "Viewer";
    },
    93398: (e, t, n) => {
      "use strict";
      n.d(t, {
        C: () => l,
        G: () => K,
        J: () => g,
        K: () => v,
        L: () => G,
        M: () => f,
        N: () => te,
        P: () => d,
        _: () => y,
        a: () => p,
        b: () => fe,
        c: () => X,
        d: () => Y,
        e: () => F,
        f: () => m,
        g: () => _,
        h: () => u,
        i: () => C,
        j: () => b,
        k: () => Z,
        l: () => B,
        m: () => w,
        n: () => R,
        o: () => V,
        p: () => H,
        q: () => c,
        r: () => E,
        s: () => O,
        t: () => T,
        u: () => de,
        v: () => ce,
        w: () => he,
        x: () => ie,
        y: () => N,
        z: () => k,
      });
      var r = n(90626);
      function o(e) {
        let t;
        const n = new Set(),
          r = (e, r) => {
            const o = "function" == typeof e ? e(t) : e;
            if (o !== t) {
              const e = t;
              (t = r ? o : Object.assign({}, t, o)), n.forEach((n) => n(t, e));
            }
          },
          o = () => t,
          i = {
            setState: r,
            getState: o,
            subscribe: (e, r, i) =>
              r || i
                ? ((e, r = o, i = Object.is) => {
                    console.warn(
                      "[DEPRECATED] Please use `subscribeWithSelector` middleware",
                    );
                    let a = r(t);
                    function l() {
                      const n = r(t);
                      if (!i(a, n)) {
                        const t = a;
                        e((a = n), t);
                      }
                    }
                    return n.add(l), () => n.delete(l);
                  })(e, r, i)
                : (n.add(e), () => n.delete(e)),
            destroy: () => n.clear(),
          };
        return (t = e(r, o, i)), i;
      }
      const i =
        "undefined" == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent)
          ? r.useEffect
          : r.useLayoutEffect;
      function a(e) {
        const t = "function" == typeof e ? o(e) : e,
          n = (e = t.getState, n = Object.is) => {
            const [, o] = (0, r.useReducer)((e) => e + 1, 0),
              a = t.getState(),
              l = (0, r.useRef)(a),
              s = (0, r.useRef)(e),
              u = (0, r.useRef)(n),
              c = (0, r.useRef)(!1),
              f = (0, r.useRef)();
            let d;
            void 0 === f.current && (f.current = e(a));
            let h = !1;
            (l.current !== a ||
              s.current !== e ||
              u.current !== n ||
              c.current) &&
              ((d = e(a)), (h = !n(f.current, d))),
              i(() => {
                h && (f.current = d),
                  (l.current = a),
                  (s.current = e),
                  (u.current = n),
                  (c.current = !1);
              });
            const p = (0, r.useRef)(a);
            i(() => {
              const e = () => {
                  try {
                    const e = t.getState(),
                      n = s.current(e);
                    u.current(f.current, n) ||
                      ((l.current = e), (f.current = n), o());
                  } catch (e) {
                    (c.current = !0), o();
                  }
                },
                n = t.subscribe(e);
              return t.getState() !== p.current && e(), n;
            }, []);
            const g = h ? d : f.current;
            return (0, r.useDebugValue)(g), g;
          };
        return (
          Object.assign(n, t),
          (n[Symbol.iterator] = function () {
            console.warn(
              "[useStore, api] = create() is deprecated and will be removed in v4",
            );
            const e = [n, t];
            return {
              next() {
                const t = e.length <= 0;
                return { value: e.shift(), done: t };
              },
            };
          }),
          n
        );
      }
      var l,
        s,
        u,
        c,
        f,
        d,
        h = n(35796);
      function p(e, t, n) {
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
      }
      function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function v(e, t) {
        if (e) {
          if ("string" == typeof e) return g(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? g(e, t)
                : void 0
          );
        }
      }
      function y(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i = [],
                a = !0,
                l = !1;
              try {
                for (
                  n = n.call(e);
                  !(a = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  a = !0
                );
              } catch (e) {
                (l = !0), (o = e);
              } finally {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (l) throw o;
                }
              }
              return i;
            }
          })(e, t) ||
          v(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      !(function (e) {
        (e.Strict = "strict"), (e.Loose = "loose");
      })(l || (l = {})),
        (function (e) {
          (e.Lines = "lines"), (e.Dots = "dots");
        })(s || (s = {})),
        (function (e) {
          (e.Free = "free"),
            (e.Vertical = "vertical"),
            (e.Horizontal = "horizontal");
        })(u || (u = {})),
        (function (e) {
          (e.Bezier = "default"),
            (e.Straight = "straight"),
            (e.Step = "step"),
            (e.SmoothStep = "smoothstep"),
            (e.SimpleBezier = "simplebezier");
        })(c || (c = {})),
        (function (e) {
          (e.Arrow = "arrow"), (e.ArrowClosed = "arrowclosed");
        })(f || (f = {})),
        (function (e) {
          (e.Left = "left"),
            (e.Top = "top"),
            (e.Right = "right"),
            (e.Bottom = "bottom");
        })(d || (d = {}));
      var m = function (e) {
          return { width: e.offsetWidth, height: e.offsetHeight };
        },
        b = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1;
          return Math.min(Math.max(e, t), n);
        },
        w = function (e, t) {
          return { x: b(e.x, t[0][0], t[1][0]), y: b(e.y, t[0][1], t[1][1]) };
        },
        _ = function (e) {
          var t, n;
          return (
            (null === (t = e.getRootNode) || void 0 === t
              ? void 0
              : t.call(e)) ||
            (null === (n = window) || void 0 === n ? void 0 : n.document)
          );
        },
        x = function (e, t) {
          return {
            x: Math.min(e.x, t.x),
            y: Math.min(e.y, t.y),
            x2: Math.max(e.x2, t.x2),
            y2: Math.max(e.y2, t.y2),
          };
        },
        E = function (e) {
          var t = e.x,
            n = e.y;
          return { x: t, y: n, x2: t + e.width, y2: n + e.height };
        },
        S = function (e) {
          var t = e.x,
            n = e.y;
          return { x: t, y: n, width: e.x2 - t, height: e.y2 - n };
        },
        O = function (e) {
          return !isNaN(e) && isFinite(e);
        },
        C = Symbol("internals");
      function P(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? P(Object(n), !0).forEach(function (t) {
                p(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : P(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function j(e, t) {
        var n = e.find(function (e) {
          return e.id === t.parentNode;
        });
        if (n) {
          var r = t.position.x + t.width - n.width,
            o = t.position.y + t.height - n.height;
          if (r > 0 || o > 0 || t.position.x < 0 || t.position.y < 0) {
            var i, a;
            if (
              ((n.style = A({}, n.style) || {}),
              (n.style.width =
                null !== (i = n.style.width) && void 0 !== i ? i : n.width),
              (n.style.height =
                null !== (a = n.style.height) && void 0 !== a ? a : n.height),
              r > 0 && (n.style.width += r),
              o > 0 && (n.style.height += o),
              t.position.x < 0)
            ) {
              var l = Math.abs(t.position.x);
              (n.position.x = n.position.x - l),
                (n.style.width += l),
                (t.position.x = 0);
            }
            if (t.position.y < 0) {
              var s = Math.abs(t.position.y);
              (n.position.y = n.position.y - s),
                (n.style.height += s),
                (t.position.y = 0);
            }
            (n.width = n.style.width), (n.height = n.style.height);
          }
        }
      }
      function M(e, t) {
        if (
          e.some(function (e) {
            return "reset" === e.type;
          })
        )
          return e
            .filter(function (e) {
              return "reset" === e.type;
            })
            .map(function (e) {
              return e.item;
            });
        var n = e
          .filter(function (e) {
            return "add" === e.type;
          })
          .map(function (e) {
            return e.item;
          });
        return t.reduce(function (t, n) {
          var r = e.find(function (e) {
            return e.id === n.id;
          });
          if (r)
            switch (r.type) {
              case "select":
                return t.push(A(A({}, n), {}, { selected: r.selected })), t;
              case "position":
                var o = A({}, n);
                return (
                  void 0 !== r.position && (o.position = r.position),
                  void 0 !== r.positionAbsolute &&
                    (o.positionAbsolute = r.positionAbsolute),
                  void 0 !== r.dragging && (o.dragging = r.dragging),
                  o.expandParent && j(t, o),
                  t.push(o),
                  t
                );
              case "dimensions":
                var i = A({}, n);
                return (
                  void 0 !== r.dimensions &&
                    ((i.width = r.dimensions.width),
                    (i.height = r.dimensions.height)),
                  i.expandParent && j(t, i),
                  t.push(i),
                  t
                );
              case "remove":
                return t;
            }
          return t.push(n), t;
        }, n);
      }
      function N(e, t) {
        return M(e, t);
      }
      function k(e, t) {
        return M(e, t);
      }
      var D = function (e, t) {
        return { id: e, type: "select", selected: t };
      };
      function B(e, t) {
        return e.reduce(function (e, n) {
          var r = t.includes(n.id);
          return (
            !n.selected && r
              ? ((n.selected = !0), e.push(D(n.id, !0)))
              : n.selected && !r && ((n.selected = !1), e.push(D(n.id, !1))),
            e
          );
        }, []);
      }
      function I(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? I(Object(n), !0).forEach(function (t) {
                p(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : I(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var L = function (e, t, n) {
        var r = t.querySelectorAll(e);
        if (!r || !r.length) return null;
        var o = Array.from(r),
          i = t.getBoundingClientRect();
        return o.map(function (e) {
          var t = e.getBoundingClientRect();
          return z(
            {
              id: e.getAttribute("data-handleid"),
              position: e.getAttribute("data-handlepos"),
              x: (t.left - i.left) / n,
              y: (t.top - i.top) / n,
            },
            m(e),
          );
        });
      };
      function T(e, t, n) {
        return void 0 === n
          ? n
          : function (r) {
              var o = t().nodeInternals.get(e);
              n(r, z({}, o));
            };
      }
      function R(e) {
        var t = e.id,
          n = e.store,
          r = n.getState(),
          o = r.addSelectedNodes,
          i = r.unselectNodesAndEdges,
          a = r.multiSelectionActive,
          l = r.nodeInternals.get(t);
        n.setState({ nodesSelectionActive: !1 }),
          l.selected ? l.selected && a && i({ nodes: [l] }) : o([t]);
      }
      function U(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? U(Object(n), !0).forEach(function (t) {
                p(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : U(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var $ = function (e) {
          var t = e.source,
            n = e.sourceHandle,
            r = e.target,
            o = e.targetHandle;
          return "reactflow__edge-"
            .concat(t)
            .concat(n || "", "-")
            .concat(r)
            .concat(o || "");
        },
        Y = function (e, t) {
          if (void 0 === e) return "";
          if ("string" == typeof e) return e;
          var n = t ? "".concat(t, "__") : "";
          return "".concat(n).concat(
            Object.keys(e)
              .sort()
              .map(function (t) {
                return "".concat(t, "=").concat(e[t]);
              })
              .join("&"),
          );
        },
        X = function (e, t) {
          return e.source && e.target
            ? (function (e, t) {
                return t.some(function (t) {
                  return !(
                    t.source !== e.source ||
                    t.target !== e.target ||
                    (t.sourceHandle !== e.sourceHandle &&
                      (t.sourceHandle || e.sourceHandle)) ||
                    (t.targetHandle !== e.targetHandle &&
                      (t.targetHandle || e.targetHandle))
                  );
                });
              })(
                (n =
                  "id" in (r = e) && "source" in r && "target" in r
                    ? q({}, e)
                    : q(q({}, e), {}, { id: $(e) })),
                t,
              )
              ? t
              : t.concat(n)
            : t;
          var n, r;
        },
        H = function (e, t, n, r) {
          var o = e.x,
            i = e.y,
            a = y(t, 3),
            l = a[0],
            s = a[1],
            u = a[2],
            c = y(r, 2),
            f = c[0],
            d = c[1],
            h = { x: (o - l) / u, y: (i - s) / u };
          return n
            ? { x: f * Math.round(h.x / f), y: d * Math.round(h.y / d) }
            : h;
        },
        V = function (e) {
          if (0 === e.length) return { x: 0, y: 0, width: 0, height: 0 };
          var t = e.reduce(
            function (e, t) {
              var n = t.positionAbsolute,
                r = t.position,
                o = t.width,
                i = t.height;
              return x(
                e,
                E({
                  x: n ? n.x : r.x,
                  y: n ? n.y : r.y,
                  width: o || 0,
                  height: i || 0,
                }),
              );
            },
            { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 },
          );
          return S(t);
        },
        Z = function (e, t) {
          var n = y(
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [0, 0, 1],
              3,
            ),
            r = n[0],
            o = n[1],
            i = n[2],
            a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            s = E({
              x: (t.x - r) / i,
              y: (t.y - o) / i,
              width: t.width / i,
              height: t.height / i,
            }),
            u = [];
          return (
            e.forEach(function (e) {
              var t = e.positionAbsolute,
                n = e.width,
                r = e.height,
                o = e.selectable;
              if (l && !(void 0 === o || o)) return !1;
              var i = E(q(q({}, t), {}, { width: n || 0, height: r || 0 })),
                c = Math.max(0, Math.min(s.x2, i.x2) - Math.max(s.x, i.x)),
                f = Math.max(0, Math.min(s.y2, i.y2) - Math.max(s.y, i.y)),
                d = Math.ceil(c * f);
              (void 0 === n ||
                void 0 === r ||
                null === n ||
                null === r ||
                (a && d > 0) ||
                d >= (n || 0) * (r || 0)) &&
                u.push(e);
            }),
            u
          );
        },
        F = function (e, t) {
          var n = e.map(function (e) {
            return e.id;
          });
          return t.filter(function (e) {
            return n.includes(e.source) || n.includes(e.target);
          });
        },
        K = function (e, t, n, r, o) {
          var i =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : 0.1,
            a = t / (e.width * (1 + i)),
            l = n / (e.height * (1 + i)),
            s = Math.min(a, l),
            u = b(s, r, o);
          return [
            t / 2 - (e.x + e.width / 2) * u,
            n / 2 - (e.y + e.height / 2) * u,
            u,
          ];
        },
        G = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return e.transition().duration(t);
        };
      function W(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? W(Object(n), !0).forEach(function (t) {
                p(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : W(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function J(e, t, n, r) {
        var o, i, a, l, s, u, c, f, d, h, p, g;
        if (!e.parentNode) return r;
        var v = t.get(e.parentNode);
        return J(v, t, n, {
          x:
            (null !== (o = r.x) && void 0 !== o ? o : 0) +
            (null !==
              (i = null === (a = v.position) || void 0 === a ? void 0 : a.x) &&
            void 0 !== i
              ? i
              : 0),
          y:
            (null !== (l = r.y) && void 0 !== l ? l : 0) +
            (null !==
              (s = null === (u = v.position) || void 0 === u ? void 0 : u.y) &&
            void 0 !== s
              ? s
              : 0),
          z:
            (null !==
              (c = null === (f = v[C]) || void 0 === f ? void 0 : f.z) &&
            void 0 !== c
              ? c
              : 0) > (null !== (d = r.z) && void 0 !== d ? d : 0)
              ? null !==
                  (h = null === (p = v[C]) || void 0 === p ? void 0 : p.z) &&
                void 0 !== h
                ? h
                : 0
              : null !== (g = r.z) && void 0 !== g
                ? g
                : 0,
        });
      }
      function ee(e, t) {
        var n = new Map(),
          r = {};
        return (
          e.forEach(function (e) {
            var o,
              i = O(e.zIndex) ? e.zIndex : e.selected ? 1e3 : 0,
              a = t.get(e.id),
              l = Q(
                Q(
                  {
                    width: null == a ? void 0 : a.width,
                    height: null == a ? void 0 : a.height,
                  },
                  e,
                ),
                {},
                { positionAbsolute: { x: e.position.x, y: e.position.y } },
              );
            e.parentNode &&
              ((l.parentNode = e.parentNode), (r[e.parentNode] = !0)),
              Object.defineProperty(l, C, {
                enumerable: !1,
                value: {
                  handleBounds:
                    null == a || null === (o = a[C]) || void 0 === o
                      ? void 0
                      : o.handleBounds,
                  z: i,
                },
              }),
              n.set(e.id, l);
          }),
          n.forEach(function (e) {
            if (e.parentNode && !n.has(e.parentNode))
              throw new Error(
                "Parent node ".concat(e.parentNode, " not found"),
              );
            if (e.parentNode || r[e.id]) {
              var t,
                o,
                i = J(
                  e,
                  n,
                  r,
                  Q(
                    Q({}, e.position),
                    {},
                    {
                      z:
                        null !==
                          (t =
                            null === (o = e[C]) || void 0 === o
                              ? void 0
                              : o.z) && void 0 !== t
                          ? t
                          : 0,
                    },
                  ),
                ),
                a = i.x,
                l = i.y,
                s = i.z;
              (e.positionAbsolute = { x: a, y: l }),
                (e[C].z = s),
                r[e.id] && (e[C].isParent = !0);
            }
          }),
          n
        );
      }
      function te(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = e(),
          r = n.nodeInternals,
          o = n.width,
          i = n.height,
          a = n.minZoom,
          l = n.maxZoom,
          s = n.d3Zoom,
          u = n.d3Selection,
          c = n.fitViewOnInitDone,
          f = n.fitViewOnInit;
        if (((t.initial && !c && f) || !t.initial) && s && u) {
          var d = Array.from(r.values()).filter(function (e) {
              return t.includeHiddenNodes ? e.width && e.height : !e.hidden;
            }),
            p = d.every(function (e) {
              return e.width && e.height;
            });
          if (d.length > 0 && p) {
            var g,
              v,
              m,
              b = V(d),
              w = y(
                K(
                  b,
                  o,
                  i,
                  null !== (g = t.minZoom) && void 0 !== g ? g : a,
                  null !== (v = t.maxZoom) && void 0 !== v ? v : l,
                  null !== (m = t.padding) && void 0 !== m ? m : 0.1,
                ),
                3,
              ),
              _ = w[0],
              x = w[1],
              E = w[2],
              S = h.GS.translate(_, x).scale(E);
            return (
              "number" == typeof t.duration && t.duration > 0
                ? s.transform(G(u, t.duration), S)
                : s.transform(u, S),
              !0
            );
          }
        }
        return !1;
      }
      function ne(e, t) {
        return (
          e.forEach(function (e) {
            var n,
              r = t.get(e.id);
            r &&
              t.set(
                r.id,
                Q(
                  Q({}, r),
                  {},
                  (p((n = {}), C, r[C]), p(n, "selected", e.selected), n),
                ),
              );
          }),
          new Map(t)
        );
      }
      function re(e, t) {
        return t.map(function (t) {
          var n = e.find(function (e) {
            return e.id === t.id;
          });
          return n && (t.selected = n.selected), t;
        });
      }
      function oe(e) {
        var t = e.changedNodes,
          n = e.changedEdges,
          r = e.get,
          o = e.set,
          i = r(),
          a = i.nodeInternals,
          l = i.edges,
          s = i.onNodesChange,
          u = i.onEdgesChange,
          c = i.hasDefaultNodes,
          f = i.hasDefaultEdges;
        null != t &&
          t.length &&
          (c && o({ nodeInternals: ne(t, a) }), null == s || s(t)),
          null != n &&
            n.length &&
            (f && o({ edges: re(n, l) }), null == u || u(n));
      }
      var ie = [
          [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
          [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
        ],
        ae = {
          width: 0,
          height: 0,
          transform: [0, 0, 1],
          nodeInternals: new Map(),
          edges: [],
          onNodesChange: null,
          onEdgesChange: null,
          hasDefaultNodes: !1,
          hasDefaultEdges: !1,
          d3Zoom: null,
          d3Selection: null,
          d3ZoomHandler: void 0,
          minZoom: 0.5,
          maxZoom: 2,
          translateExtent: ie,
          nodeExtent: ie,
          nodesSelectionActive: !1,
          userSelectionActive: !1,
          connectionNodeId: null,
          connectionHandleId: null,
          connectionHandleType: "source",
          connectionPosition: { x: 0, y: 0 },
          connectionMode: l.Strict,
          domNode: null,
          snapGrid: [15, 15],
          snapToGrid: !1,
          nodesDraggable: !0,
          nodesConnectable: !0,
          elementsSelectable: !0,
          fitViewOnInit: !1,
          fitViewOnInitDone: !1,
          fitViewOnInitOptions: void 0,
          multiSelectionActive: !1,
          reactFlowVersion: "10.3.17",
          connectionStartHandle: null,
          connectOnClick: !0,
        };
      function le(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function se(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? le(Object(n), !0).forEach(function (t) {
                p(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : le(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var ue = (function () {
          const e = (0, r.createContext)(void 0);
          return {
            Provider: ({ initialStore: t, createStore: n, children: o }) => {
              const i = (0, r.useRef)();
              return (
                i.current ||
                  (t &&
                    (console.warn(
                      "Provider initialStore is deprecated and will be removed in the next version.",
                    ),
                    n || (n = () => t)),
                  (i.current = n())),
                (0, r.createElement)(e.Provider, { value: i.current }, o)
              );
            },
            useStore: (t, n = Object.is) => {
              const o = (0, r.useContext)(e);
              if (!o)
                throw new Error(
                  "Seems like you have not used zustand provider as an ancestor.",
                );
              return o(t, n);
            },
            useStoreApi: () => {
              const t = (0, r.useContext)(e);
              if (!t)
                throw new Error(
                  "Seems like you have not used zustand provider as an ancestor.",
                );
              return (0, r.useMemo)(
                () => ({
                  getState: t.getState,
                  setState: t.setState,
                  subscribe: t.subscribe,
                  destroy: t.destroy,
                }),
                [t],
              );
            },
          };
        })(),
        ce = ue.Provider,
        fe = ue.useStore,
        de = ue.useStoreApi,
        he = function () {
          return a(function (e, t) {
            return se(
              se({}, ae),
              {},
              {
                setNodes: function (n) {
                  e({ nodeInternals: ee(n, t().nodeInternals) });
                },
                setEdges: function (n) {
                  var r = t().defaultEdgeOptions,
                    o = void 0 === r ? {} : r;
                  e({
                    edges: n.map(function (e) {
                      return se(se({}, o), e);
                    }),
                  });
                },
                setDefaultNodesAndEdges: function (t, n) {
                  var r = void 0 !== t,
                    o = void 0 !== n,
                    i = r ? ee(t, new Map()) : new Map();
                  e({
                    nodeInternals: i,
                    edges: o ? n : [],
                    hasDefaultNodes: r,
                    hasDefaultEdges: o,
                  });
                },
                updateNodeDimensions: function (n) {
                  var r = t(),
                    o = r.onNodesChange,
                    i = r.nodeInternals,
                    a = r.fitViewOnInit,
                    l = r.fitViewOnInitDone,
                    s = r.fitViewOnInitOptions,
                    u = r.domNode,
                    c =
                      null == u
                        ? void 0
                        : u.querySelector(".react-flow__viewport");
                  if (c) {
                    var f = window.getComputedStyle(c),
                      d = new window.DOMMatrixReadOnly(f.transform).m22,
                      h = n.reduce(function (e, t) {
                        var n = i.get(t.id);
                        if (n) {
                          var r = m(t.nodeElement);
                          !(
                            !r.width ||
                            !r.height ||
                            (n.width === r.width &&
                              n.height === r.height &&
                              !t.forceUpdate)
                          ) &&
                            (i.set(
                              n.id,
                              se(
                                se({}, n),
                                {},
                                p(
                                  {},
                                  C,
                                  se(
                                    se({}, n[C]),
                                    {},
                                    {
                                      handleBounds: {
                                        source: L(".source", t.nodeElement, d),
                                        target: L(".target", t.nodeElement, d),
                                      },
                                    },
                                  ),
                                ),
                                r,
                              ),
                            ),
                            e.push({
                              id: n.id,
                              type: "dimensions",
                              dimensions: r,
                            }));
                        }
                        return e;
                      }, []),
                      g = l || (a && !l && te(t, se({ initial: !0 }, s)));
                    e({ nodeInternals: new Map(i), fitViewOnInitDone: g }),
                      (null == h ? void 0 : h.length) > 0 &&
                        (null == o || o(h));
                  }
                },
                updateNodePositions: function (n) {
                  var r =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1],
                    o =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2],
                    i = t(),
                    a = i.onNodesChange,
                    l = i.nodeInternals,
                    s = i.hasDefaultNodes;
                  if (s || a) {
                    var u = n.map(function (e) {
                      var t = { id: e.id, type: "position", dragging: o };
                      return (
                        r &&
                          ((t.positionAbsolute = e.positionAbsolute),
                          (t.position = e.position)),
                        t
                      );
                    });
                    if (null != u && u.length) {
                      if (s) {
                        var c = ee(N(u, Array.from(l.values())), l);
                        e({ nodeInternals: c });
                      }
                      null == a || a(u);
                    }
                  }
                },
                addSelectedNodes: function (n) {
                  var r,
                    o = t(),
                    i = o.multiSelectionActive,
                    a = o.nodeInternals,
                    l = o.edges,
                    s = null;
                  i
                    ? (r = n.map(function (e) {
                        return D(e, !0);
                      }))
                    : ((r = B(Array.from(a.values()), n)), (s = B(l, []))),
                    oe({ changedNodes: r, changedEdges: s, get: t, set: e });
                },
                addSelectedEdges: function (n) {
                  var r,
                    o = t(),
                    i = o.multiSelectionActive,
                    a = o.edges,
                    l = o.nodeInternals,
                    s = null;
                  i
                    ? (r = n.map(function (e) {
                        return D(e, !0);
                      }))
                    : ((r = B(a, n)), (s = B(Array.from(l.values()), []))),
                    oe({ changedNodes: s, changedEdges: r, get: t, set: e });
                },
                unselectNodesAndEdges: function () {
                  var n =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    r = n.nodes,
                    o = n.edges,
                    i = t(),
                    a = i.nodeInternals,
                    l = i.edges,
                    s = o || l;
                  oe({
                    changedNodes: (r || Array.from(a.values())).map(
                      function (e) {
                        return (e.selected = !1), D(e.id, !1);
                      },
                    ),
                    changedEdges: s.map(function (e) {
                      return D(e.id, !1);
                    }),
                    get: t,
                    set: e,
                  });
                },
                setMinZoom: function (n) {
                  var r = t(),
                    o = r.d3Zoom,
                    i = r.maxZoom;
                  null == o || o.scaleExtent([n, i]), e({ minZoom: n });
                },
                setMaxZoom: function (n) {
                  var r = t(),
                    o = r.d3Zoom,
                    i = r.minZoom;
                  null == o || o.scaleExtent([i, n]), e({ maxZoom: n });
                },
                setTranslateExtent: function (n) {
                  var r = t().d3Zoom;
                  null == r || r.translateExtent(n), e({ translateExtent: n });
                },
                resetSelectedElements: function () {
                  var n = t(),
                    r = n.nodeInternals,
                    o = n.edges;
                  oe({
                    changedNodes: Array.from(r.values())
                      .filter(function (e) {
                        return e.selected;
                      })
                      .map(function (e) {
                        return D(e.id, !1);
                      }),
                    changedEdges: o
                      .filter(function (e) {
                        return e.selected;
                      })
                      .map(function (e) {
                        return D(e.id, !1);
                      }),
                    get: t,
                    set: e,
                  });
                },
                setNodeExtent: function (n) {
                  var r = t().nodeInternals;
                  r.forEach(function (e) {
                    e.positionAbsolute = w(e.position, n);
                  }),
                    e({ nodeExtent: n, nodeInternals: new Map(r) });
                },
                reset: function () {
                  return e(se({}, ae));
                },
              },
            );
          });
        };
    },
    73394: (e, t, n) => {
      "use strict";
      n.d(t, {
        h7: () => Ce,
        Ln: () => bn,
        Ay: () => mn,
        fM: () => xn,
        ck: () => _n,
      });
      var r = n(93398),
        o = n(90626);
      function i(e) {
        if ("string" == typeof e || "number" == typeof e) return "" + e;
        let t = "";
        if (Array.isArray(e))
          for (let n, r = 0; r < e.length; r++)
            "" !== (n = i(e[r])) && (t += (t && " ") + n);
        else for (let n in e) e[n] && (t += (t && " ") + n);
        return t;
      }
      var a = n(35796);
      function l(e, t) {
        if (Object.is(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        const n = Object.keys(e);
        if (n.length !== Object.keys(t).length) return !1;
        for (let r = 0; r < n.length; r++)
          if (
            !Object.prototype.hasOwnProperty.call(t, n[r]) ||
            !Object.is(e[n[r]], t[n[r]])
          )
            return !1;
        return !0;
      }
      function s(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return (0, r.J)(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (0, r.K)(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      var u = {
          zoomIn: function () {},
          zoomOut: function () {},
          zoomTo: function (e) {},
          getZoom: function () {
            return 1;
          },
          setViewport: function (e) {},
          getViewport: function () {
            return { x: 0, y: 0, zoom: 1 };
          },
          fitView: function () {},
          setCenter: function (e, t) {},
          fitBounds: function (e) {},
          project: function (e) {
            return e;
          },
          viewportInitialized: !1,
        },
        c = function (e) {
          return { d3Zoom: e.d3Zoom, d3Selection: e.d3Selection };
        },
        f = function () {
          var e = (0, r.u)(),
            t = (0, r.b)(c, l),
            n = t.d3Zoom,
            i = t.d3Selection;
          return (0, o.useMemo)(
            function () {
              return i && n
                ? {
                    zoomIn: function (e) {
                      return n.scaleBy(
                        (0, r.L)(i, null == e ? void 0 : e.duration),
                        1.2,
                      );
                    },
                    zoomOut: function (e) {
                      return n.scaleBy(
                        (0, r.L)(i, null == e ? void 0 : e.duration),
                        1 / 1.2,
                      );
                    },
                    zoomTo: function (e, t) {
                      return n.scaleTo(
                        (0, r.L)(i, null == t ? void 0 : t.duration),
                        e,
                      );
                    },
                    getZoom: function () {
                      return e.getState().transform[2];
                    },
                    setViewport: function (t, o) {
                      var l,
                        s,
                        u,
                        c = (0, r._)(e.getState().transform, 3),
                        f = c[0],
                        d = c[1],
                        h = c[2],
                        p = a.GS.translate(
                          null !== (l = t.x) && void 0 !== l ? l : f,
                          null !== (s = t.y) && void 0 !== s ? s : d,
                        ).scale(null !== (u = t.zoom) && void 0 !== u ? u : h);
                      n.transform(
                        (0, r.L)(i, null == o ? void 0 : o.duration),
                        p,
                      );
                    },
                    getViewport: function () {
                      var t = (0, r._)(e.getState().transform, 3);
                      return { x: t[0], y: t[1], zoom: t[2] };
                    },
                    fitView: function (t) {
                      return (0, r.N)(e.getState, t);
                    },
                    setCenter: function (t, o, l) {
                      var s = e.getState(),
                        u = s.width,
                        c = s.height,
                        f = s.maxZoom,
                        d =
                          void 0 !== (null == l ? void 0 : l.zoom) ? l.zoom : f,
                        h = u / 2 - t * d,
                        p = c / 2 - o * d,
                        g = a.GS.translate(h, p).scale(d);
                      n.transform(
                        (0, r.L)(i, null == l ? void 0 : l.duration),
                        g,
                      );
                    },
                    fitBounds: function (t, o) {
                      var l,
                        s = e.getState(),
                        u = s.width,
                        c = s.height,
                        f = s.minZoom,
                        d = s.maxZoom,
                        h = (0, r.G)(
                          t,
                          u,
                          c,
                          f,
                          d,
                          null !== (l = null == o ? void 0 : o.padding) &&
                            void 0 !== l
                            ? l
                            : 0.1,
                        ),
                        p = (0, r._)(h, 3),
                        g = p[0],
                        v = p[1],
                        y = p[2],
                        m = a.GS.translate(g, v).scale(y);
                      n.transform(
                        (0, r.L)(i, null == o ? void 0 : o.duration),
                        m,
                      );
                    },
                    project: function (t) {
                      var n = e.getState(),
                        o = n.transform,
                        i = n.snapToGrid,
                        a = n.snapGrid;
                      return (0, r.p)(t, o, i, a);
                    },
                    viewportInitialized: !0,
                  }
                : u;
            },
            [n, i],
          );
        };
      function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                (0, r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : d(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function p() {
        var e = f(),
          t = (0, r.u)(),
          n = (0, o.useCallback)(function () {
            var e = t.getState().nodeInternals;
            return Array.from(e.values()).map(function (e) {
              return h({}, e);
            });
          }, []),
          i = (0, o.useCallback)(function (e) {
            return t.getState().nodeInternals.get(e);
          }, []),
          a = (0, o.useCallback)(function () {
            var e = t.getState().edges;
            return (void 0 === e ? [] : e).map(function (e) {
              return h({}, e);
            });
          }, []),
          l = (0, o.useCallback)(function (e) {
            var n = t.getState().edges;
            return (void 0 === n ? [] : n).find(function (t) {
              return t.id === e;
            });
          }, []),
          u = (0, o.useCallback)(function (e) {
            var n = t.getState(),
              r = n.nodeInternals,
              o = n.setNodes,
              i = n.hasDefaultNodes,
              a = n.onNodesChange,
              l = Array.from(r.values()),
              s = "function" == typeof e ? e(l) : e;
            if (i) o(s);
            else if (a) {
              a(
                0 === s.length
                  ? l.map(function (e) {
                      return { type: "remove", id: e.id };
                    })
                  : s.map(function (e) {
                      return { item: e, type: "reset" };
                    }),
              );
            }
          }, []),
          c = (0, o.useCallback)(function (e) {
            var n = t.getState(),
              r = n.edges,
              o = void 0 === r ? [] : r,
              i = n.setEdges,
              a = n.hasDefaultEdges,
              l = n.onEdgesChange,
              s = "function" == typeof e ? e(o) : e;
            if (a) i(s);
            else if (l) {
              l(
                0 === s.length
                  ? o.map(function (e) {
                      return { type: "remove", id: e.id };
                    })
                  : s.map(function (e) {
                      return { item: e, type: "reset" };
                    }),
              );
            }
          }, []),
          d = (0, o.useCallback)(function (e) {
            var n = Array.isArray(e) ? e : [e],
              r = t.getState(),
              o = r.nodeInternals,
              i = r.setNodes,
              a = r.hasDefaultNodes,
              l = r.onNodesChange;
            if (a) {
              var u = Array.from(o.values());
              i([].concat(u, s(n)));
            } else if (l) {
              l(
                n.map(function (e) {
                  return { item: e, type: "add" };
                }),
              );
            }
          }, []),
          p = (0, o.useCallback)(function (e) {
            var n = Array.isArray(e) ? e : [e],
              r = t.getState(),
              o = r.edges,
              i = void 0 === o ? [] : o,
              a = r.setEdges,
              l = r.hasDefaultEdges,
              u = r.onEdgesChange;
            if (l) a([].concat(s(i), s(n)));
            else if (u) {
              u(
                n.map(function (e) {
                  return { item: e, type: "add" };
                }),
              );
            }
          }, []),
          g = (0, o.useCallback)(function () {
            var e = t.getState(),
              n = e.nodeInternals,
              o = e.edges,
              i = void 0 === o ? [] : o,
              a = e.transform,
              l = Array.from(n.values()),
              s = (0, r._)(a, 3),
              u = s[0],
              c = s[1],
              f = s[2];
            return {
              nodes: l.map(function (e) {
                return h({}, e);
              }),
              edges: i.map(function (e) {
                return h({}, e);
              }),
              viewport: { x: u, y: c, zoom: f },
            };
          }, []);
        return (0, o.useMemo)(
          function () {
            return h(
              h({}, e),
              {},
              {
                getNodes: n,
                getNode: i,
                getEdges: a,
                getEdge: l,
                setNodes: u,
                setEdges: c,
                addNodes: d,
                addEdges: p,
                toObject: g,
              },
            );
          },
          [e, n, i, a, l, u, c, d, p, g],
        );
      }
      function g(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function v() {
        return o.createElement(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32" },
          o.createElement("path", {
            d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z",
          }),
        );
      }
      function y() {
        return o.createElement(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5" },
          o.createElement("path", { d: "M0 0h32v4.2H0z" }),
        );
      }
      function m() {
        return o.createElement(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30" },
          o.createElement("path", {
            d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z",
          }),
        );
      }
      function b() {
        return o.createElement(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32" },
          o.createElement("path", {
            d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z",
          }),
        );
      }
      function w() {
        return o.createElement(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32" },
          o.createElement("path", {
            d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z",
          }),
        );
      }
      var _ = ["children", "className"];
      function x(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var E = function (e) {
          var t = e.children,
            n = e.className,
            a = g(e, _);
          return o.createElement(
            "button",
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? x(Object(n), !0).forEach(function (t) {
                      (0, r.a)(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n),
                      )
                    : x(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t),
                        );
                      });
              }
              return e;
            })(
              {
                type: "button",
                className: i(["react-flow__controls-button", n]),
              },
              a,
            ),
            t,
          );
        },
        S = function (e) {
          return e.nodesDraggable && e.nodesConnectable && e.elementsSelectable;
        },
        O = function (e) {
          var t = e.style,
            n = e.showZoom,
            a = void 0 === n || n,
            l = e.showFitView,
            s = void 0 === l || l,
            u = e.showInteractive,
            c = void 0 === u || u,
            f = e.fitViewOptions,
            d = e.onZoomIn,
            h = e.onZoomOut,
            g = e.onFitView,
            _ = e.onInteractiveChange,
            x = e.className,
            O = e.children,
            C = (0, r.u)(),
            P = (0, o.useState)(!1),
            A = (0, r._)(P, 2),
            j = A[0],
            M = A[1],
            N = (0, r.b)(S),
            k = p(),
            D = k.zoomIn,
            B = k.zoomOut,
            I = k.fitView;
          if (
            ((0, o.useEffect)(function () {
              M(!0);
            }, []),
            !j)
          )
            return null;
          return o.createElement(
            "div",
            { className: i(["react-flow__controls", x]), style: t },
            a &&
              o.createElement(
                o.Fragment,
                null,
                o.createElement(
                  E,
                  {
                    onClick: function () {
                      null == D || D(), null == d || d();
                    },
                    className: "react-flow__controls-zoomin",
                    title: "zoom in",
                    "aria-label": "zoom in",
                  },
                  o.createElement(v, null),
                ),
                o.createElement(
                  E,
                  {
                    onClick: function () {
                      null == B || B(), null == h || h();
                    },
                    className: "react-flow__controls-zoomout",
                    title: "zoom out",
                    "aria-label": "zoom out",
                  },
                  o.createElement(y, null),
                ),
              ),
            s &&
              o.createElement(
                E,
                {
                  className: "react-flow__controls-fitview",
                  onClick: function () {
                    null == I || I(f), null == g || g();
                  },
                  title: "fit view",
                  "aria-label": "fit view",
                },
                o.createElement(m, null),
              ),
            c &&
              o.createElement(
                E,
                {
                  className: "react-flow__controls-interactive",
                  onClick: function () {
                    C.setState({
                      nodesDraggable: !N,
                      nodesConnectable: !N,
                      elementsSelectable: !N,
                    }),
                      null == _ || _(!N);
                  },
                  title: "toggle interactivity",
                  "aria-label": "toggle interactivity",
                },
                N ? o.createElement(w, null) : o.createElement(b, null),
              ),
            O,
          );
        };
      O.displayName = "Controls";
      var C = n(92231),
        P = n(16180),
        A = n(26721),
        j = n(81306),
        M = n(522);
      const N = (e) => () => e;
      function k(
        e,
        {
          sourceEvent: t,
          subject: n,
          target: r,
          identifier: o,
          active: i,
          x: a,
          y: l,
          dx: s,
          dy: u,
          dispatch: c,
        },
      ) {
        Object.defineProperties(this, {
          type: { value: e, enumerable: !0, configurable: !0 },
          sourceEvent: { value: t, enumerable: !0, configurable: !0 },
          subject: { value: n, enumerable: !0, configurable: !0 },
          target: { value: r, enumerable: !0, configurable: !0 },
          identifier: { value: o, enumerable: !0, configurable: !0 },
          active: { value: i, enumerable: !0, configurable: !0 },
          x: { value: a, enumerable: !0, configurable: !0 },
          y: { value: l, enumerable: !0, configurable: !0 },
          dx: { value: s, enumerable: !0, configurable: !0 },
          dy: { value: u, enumerable: !0, configurable: !0 },
          _: { value: c },
        });
      }
      function D(e) {
        return !e.ctrlKey && !e.button;
      }
      function B() {
        return this.parentNode;
      }
      function I(e, t) {
        return null == t ? { x: e.x, y: e.y } : t;
      }
      function z() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      k.prototype.on = function () {
        var e = this._.on.apply(this._, arguments);
        return e === this._ ? this : e;
      };
      var L = ["paid-pro", "paid-sponsor", "paid-enterprise", "paid-custom"];
      function T(e) {
        var t = e.proOptions,
          n = e.position,
          r = void 0 === n ? "bottom-right" : n;
        if (
          null != t &&
          t.account &&
          L.includes(null == t ? void 0 : t.account) &&
          null != t &&
          t.hideAttribution
        )
          return null;
        var a = "".concat(r).split("-");
        return o.createElement(
          "div",
          {
            className: i(["react-flow__attribution"].concat(s(a))),
            "data-message":
              "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev/pricing",
          },
          o.createElement(
            "a",
            {
              href: "https://reactflow.dev",
              target: "_blank",
              rel: "noopener noreferrer",
            },
            "React Flow",
          ),
        );
      }
      var R = [
        "x",
        "y",
        "label",
        "labelStyle",
        "labelShowBg",
        "labelBgStyle",
        "labelBgPadding",
        "labelBgBorderRadius",
        "children",
        "className",
      ];
      function U(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var q = function (e) {
          var t = e.x,
            n = e.y,
            a = e.label,
            l = e.labelStyle,
            s = void 0 === l ? {} : l,
            u = e.labelShowBg,
            c = void 0 === u || u,
            f = e.labelBgStyle,
            d = void 0 === f ? {} : f,
            h = e.labelBgPadding,
            p = void 0 === h ? [2, 4] : h,
            v = e.labelBgBorderRadius,
            y = void 0 === v ? 2 : v,
            m = e.children,
            b = e.className,
            w = g(e, R),
            _ = (0, o.useRef)(null),
            x = (0, o.useState)({ x: 0, y: 0, width: 0, height: 0 }),
            E = (0, r._)(x, 2),
            S = E[0],
            O = E[1],
            C = i(["react-flow__edge-textwrapper", b]);
          return (
            (0, o.useEffect)(
              function () {
                if (_.current) {
                  var e = _.current.getBBox();
                  O({ x: e.x, y: e.y, width: e.width, height: e.height });
                }
              },
              [a],
            ),
            void 0 !== a && a
              ? o.createElement(
                  "g",
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? U(Object(n), !0).forEach(function (t) {
                            (0, r.a)(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(n),
                            )
                          : U(Object(n)).forEach(function (t) {
                              Object.defineProperty(
                                e,
                                t,
                                Object.getOwnPropertyDescriptor(n, t),
                              );
                            });
                    }
                    return e;
                  })(
                    {
                      transform: "translate("
                        .concat(t - S.width / 2, " ")
                        .concat(n - S.height / 2, ")"),
                      className: C,
                    },
                    w,
                  ),
                  c &&
                    o.createElement("rect", {
                      width: S.width + 2 * p[0],
                      x: -p[0],
                      y: -p[1],
                      height: S.height + 2 * p[1],
                      className: "react-flow__edge-textbg",
                      style: d,
                      rx: y,
                      ry: y,
                    }),
                  o.createElement(
                    "text",
                    {
                      className: "react-flow__edge-text",
                      y: S.height / 2,
                      dy: "0.3em",
                      ref: _,
                      style: s,
                    },
                    a,
                  ),
                  m,
                )
              : null
          );
        },
        $ = (0, o.memo)(q),
        Y = function (e) {
          var t = e.path,
            n = e.centerX,
            r = e.centerY,
            i = e.label,
            a = e.labelStyle,
            l = e.labelShowBg,
            s = e.labelBgStyle,
            u = e.labelBgPadding,
            c = e.labelBgBorderRadius,
            f = e.style,
            d = e.markerEnd,
            h = e.markerStart,
            p = i
              ? o.createElement($, {
                  x: n,
                  y: r,
                  label: i,
                  labelStyle: a,
                  labelShowBg: l,
                  labelBgStyle: s,
                  labelBgPadding: u,
                  labelBgBorderRadius: c,
                })
              : null;
          return o.createElement(
            o.Fragment,
            null,
            o.createElement("path", {
              style: f,
              d: t,
              className: "react-flow__edge-path",
              markerEnd: d,
              markerStart: h,
            }),
            p,
          );
        };
      function X(e) {
        var t,
          n,
          o = e.pos,
          i = e.x1,
          a = e.y1,
          l = e.x2,
          s = e.y2;
        switch (o) {
          case r.P.Left:
          case r.P.Right:
            (t = 0.5 * (i + l)), (n = a);
            break;
          case r.P.Top:
          case r.P.Bottom:
            (t = i), (n = 0.5 * (a + s));
        }
        return [t, n];
      }
      function H(e) {
        var t = e.sourceX,
          n = e.sourceY,
          o = e.sourcePosition,
          i = void 0 === o ? r.P.Bottom : o,
          a = e.targetX,
          l = e.targetY,
          s = e.targetPosition,
          u = void 0 === s ? r.P.Top : s,
          c = X({ pos: i, x1: t, y1: n, x2: a, y2: l }),
          f = (0, r._)(c, 2),
          d = f[0],
          h = f[1],
          p = X({ pos: u, x1: a, y1: l, x2: t, y2: n }),
          g = (0, r._)(p, 2),
          v = g[0],
          y = g[1];
        return "M"
          .concat(t, ",")
          .concat(n, " C")
          .concat(d, ",")
          .concat(h, " ")
          .concat(v, ",")
          .concat(y, " ")
          .concat(a, ",")
          .concat(l);
      }
      var V = (0, o.memo)(function (e) {
        var t = e.sourceX,
          n = e.sourceY,
          i = e.targetX,
          a = e.targetY,
          l = e.sourcePosition,
          s = void 0 === l ? r.P.Bottom : l,
          u = e.targetPosition,
          c = void 0 === u ? r.P.Top : u,
          f = e.label,
          d = e.labelStyle,
          h = e.labelShowBg,
          p = e.labelBgStyle,
          g = e.labelBgPadding,
          v = e.labelBgBorderRadius,
          y = e.style,
          m = e.markerEnd,
          b = e.markerStart,
          w = {
            sourceX: t,
            sourceY: n,
            sourcePosition: s,
            targetX: i,
            targetY: a,
            targetPosition: c,
          },
          _ = H(w),
          x = (function (e) {
            var t = e.sourceX,
              n = e.sourceY,
              o = e.sourcePosition,
              i = void 0 === o ? r.P.Bottom : o,
              a = e.targetX,
              l = e.targetY,
              s = e.targetPosition,
              u = void 0 === s ? r.P.Top : s,
              c = X({ pos: i, x1: t, y1: n, x2: a, y2: l }),
              f = (0, r._)(c, 2),
              d = f[0],
              h = f[1],
              p = X({ pos: u, x1: a, y1: l, x2: t, y2: n }),
              g = (0, r._)(p, 2),
              v = 0.125 * t + 0.375 * d + 0.375 * g[0] + 0.125 * a,
              y = 0.125 * n + 0.375 * h + 0.375 * g[1] + 0.125 * l;
            return [v, y, Math.abs(v - t), Math.abs(y - n)];
          })(w),
          E = (0, r._)(x, 2),
          S = E[0],
          O = E[1];
        return o.createElement(Y, {
          path: _,
          centerX: S,
          centerY: O,
          label: f,
          labelStyle: d,
          labelShowBg: h,
          labelBgStyle: p,
          labelBgPadding: g,
          labelBgBorderRadius: v,
          style: y,
          markerEnd: m,
          markerStart: b,
        });
      });
      function Z(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var F = [r.P.Left, r.P.Right],
        K = function (e) {
          var t = e.sourceX,
            n = e.sourceY,
            o = e.targetX,
            i = e.targetY,
            a = e.sourcePosition,
            l = void 0 === a ? r.P.Bottom : a,
            s = e.targetPosition,
            u = void 0 === s ? r.P.Top : s,
            c = F.includes(l),
            f = F.includes(u);
          if ((c && !f) || (f && !c)) {
            var d = c ? Math.abs(o - t) : 0,
              h = t > o ? t - d : t + d,
              p = c ? 0 : Math.abs(i - n);
            return [h, n < i ? n + p : n - p, d, p];
          }
          var g = Math.abs(o - t) / 2,
            v = o < t ? o + g : o - g,
            y = Math.abs(i - n) / 2;
          return [v, i < n ? i + y : i - y, g, y];
        };
      function G(e, t, n) {
        return void 0 === n
          ? n
          : function (o) {
              var i = t().edges.find(function (t) {
                return t.id === e;
              });
              n(
                o,
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? Z(Object(n), !0).forEach(function (t) {
                          (0, r.a)(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n),
                          )
                        : Z(Object(n)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t),
                            );
                          });
                  }
                  return e;
                })({}, i),
              );
            };
      }
      var W = function (e, t, n) {
          return "L "
            .concat(e, ",")
            .concat(t - n, "Q ")
            .concat(e, ",")
            .concat(t, " ")
            .concat(e + n, ",")
            .concat(t);
        },
        Q = function (e, t, n) {
          return "L "
            .concat(e + n, ",")
            .concat(t, "Q ")
            .concat(e, ",")
            .concat(t, " ")
            .concat(e, ",")
            .concat(t - n);
        },
        J = function (e, t, n) {
          return "L "
            .concat(e, ",")
            .concat(t - n, "Q ")
            .concat(e, ",")
            .concat(t, " ")
            .concat(e - n, ",")
            .concat(t);
        },
        ee = function (e, t, n) {
          return "L "
            .concat(e - n, ",")
            .concat(t, "Q ")
            .concat(e, ",")
            .concat(t, " ")
            .concat(e, ",")
            .concat(t - n);
        },
        te = function (e, t, n) {
          return "L "
            .concat(e + n, ",")
            .concat(t, "Q ")
            .concat(e, ",")
            .concat(t, " ")
            .concat(e, ",")
            .concat(t + n);
        },
        ne = function (e, t, n) {
          return "L "
            .concat(e, ",")
            .concat(t + n, "Q ")
            .concat(e, ",")
            .concat(t, " ")
            .concat(e + n, ",")
            .concat(t);
        },
        re = function (e, t, n) {
          return "L "
            .concat(e, ",")
            .concat(t + n, "Q ")
            .concat(e, ",")
            .concat(t, " ")
            .concat(e - n, ",")
            .concat(t);
        },
        oe = function (e, t, n) {
          return "L "
            .concat(e - n, ",")
            .concat(t, "Q ")
            .concat(e, ",")
            .concat(t, " ")
            .concat(e, ",")
            .concat(t + n);
        };
      function ie(e) {
        var t = e.sourceX,
          n = e.sourceY,
          o = e.sourcePosition,
          i = void 0 === o ? r.P.Bottom : o,
          a = e.targetX,
          l = e.targetY,
          s = e.targetPosition,
          u = void 0 === s ? r.P.Top : s,
          c = e.borderRadius,
          f = void 0 === c ? 5 : c,
          d = e.centerX,
          h = e.centerY,
          p = K({ sourceX: t, sourceY: n, targetX: a, targetY: l }),
          g = (0, r._)(p, 4),
          v = g[0],
          y = g[1],
          m = g[2],
          b = g[3],
          w = Math.min(f, Math.abs(a - t)),
          _ = Math.min(f, Math.abs(l - n)),
          x = Math.min(w, _, m, b),
          E = [r.P.Left, r.P.Right],
          S = void 0 !== d ? d : v,
          O = void 0 !== h ? h : y,
          C = null,
          P = null;
        return (
          t <= a
            ? ((C = n <= l ? W(t, O, x) : ne(t, O, x)),
              (P = n <= l ? oe(a, O, x) : ee(a, O, x)))
            : ((C = n < l ? J(t, O, x) : re(t, O, x)),
              (P = n < l ? te(a, O, x) : Q(a, O, x))),
          E.includes(i) && E.includes(u)
            ? t <= a
              ? ((C = n <= l ? oe(S, n, x) : ee(S, n, x)),
                (P = n <= l ? W(S, l, x) : ne(S, l, x)))
              : ((i === r.P.Right && u === r.P.Left) ||
                  (i === r.P.Left && u === r.P.Right) ||
                  (i === r.P.Left && u === r.P.Left)) &&
                ((C = n <= l ? te(S, n, x) : Q(S, n, x)),
                (P = n <= l ? J(S, l, x) : re(S, l, x)))
            : E.includes(i) && !E.includes(u)
              ? ((C =
                  t <= a
                    ? n <= l
                      ? oe(a, n, x)
                      : ee(a, n, x)
                    : n <= l
                      ? te(a, n, x)
                      : Q(a, n, x)),
                (P = ""))
              : !E.includes(i) &&
                E.includes(u) &&
                ((C =
                  t <= a
                    ? n <= l
                      ? W(t, l, x)
                      : ne(t, l, x)
                    : n <= l
                      ? J(t, l, x)
                      : re(t, l, x)),
                (P = "")),
          "M "
            .concat(t, ",")
            .concat(n)
            .concat(C)
            .concat(P, "L ")
            .concat(a, ",")
            .concat(l)
        );
      }
      var ae = (0, o.memo)(function (e) {
        var t = e.sourceX,
          n = e.sourceY,
          i = e.targetX,
          a = e.targetY,
          l = e.label,
          s = e.labelStyle,
          u = e.labelShowBg,
          c = e.labelBgStyle,
          f = e.labelBgPadding,
          d = e.labelBgBorderRadius,
          h = e.style,
          p = e.sourcePosition,
          g = void 0 === p ? r.P.Bottom : p,
          v = e.targetPosition,
          y = void 0 === v ? r.P.Top : v,
          m = e.markerEnd,
          b = e.markerStart,
          w = e.borderRadius,
          _ = void 0 === w ? 5 : w,
          x = K({
            sourceX: t,
            sourceY: n,
            targetX: i,
            targetY: a,
            sourcePosition: g,
            targetPosition: y,
          }),
          E = (0, r._)(x, 2),
          S = E[0],
          O = E[1],
          C = ie({
            sourceX: t,
            sourceY: n,
            sourcePosition: g,
            targetX: i,
            targetY: a,
            targetPosition: y,
            borderRadius: _,
          });
        return o.createElement(Y, {
          path: C,
          centerX: S,
          centerY: O,
          label: l,
          labelStyle: s,
          labelShowBg: u,
          labelBgStyle: c,
          labelBgPadding: f,
          labelBgBorderRadius: d,
          style: h,
          markerEnd: m,
          markerStart: b,
        });
      });
      function le(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function se(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? le(Object(n), !0).forEach(function (t) {
                (0, r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : le(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var ue = (0, o.memo)(function (e) {
          return o.createElement(ae, se(se({}, e), {}, { borderRadius: 0 }));
        }),
        ce = (0, o.memo)(function (e) {
          var t = e.sourceX,
            n = e.sourceY,
            r = e.targetX,
            i = e.targetY,
            a = e.label,
            l = e.labelStyle,
            s = e.labelShowBg,
            u = e.labelBgStyle,
            c = e.labelBgPadding,
            f = e.labelBgBorderRadius,
            d = e.style,
            h = e.markerEnd,
            p = e.markerStart,
            g = Math.abs(i - n) / 2,
            v = i < n ? i + g : i - g,
            y = Math.abs(r - t) / 2,
            m = r < t ? r + y : r - y,
            b = "M ".concat(t, ",").concat(n, "L ").concat(r, ",").concat(i);
          return o.createElement(Y, {
            path: b,
            centerX: m,
            centerY: v,
            label: a,
            labelStyle: l,
            labelShowBg: s,
            labelBgStyle: u,
            labelBgPadding: c,
            labelBgBorderRadius: f,
            style: d,
            markerEnd: h,
            markerStart: p,
          });
        });
      function fe(e, t) {
        return e >= 0 ? 0.5 * e : 25 * t * Math.sqrt(-e);
      }
      function de(e) {
        var t,
          n,
          o = e.pos,
          i = e.x1,
          a = e.y1,
          l = e.x2,
          s = e.y2,
          u = e.c;
        switch (o) {
          case r.P.Left:
            (t = i - fe(i - l, u)), (n = a);
            break;
          case r.P.Right:
            (t = i + fe(l - i, u)), (n = a);
            break;
          case r.P.Top:
            (t = i), (n = a - fe(a - s, u));
            break;
          case r.P.Bottom:
            (t = i), (n = a + fe(s - a, u));
        }
        return [t, n];
      }
      function he(e) {
        var t = e.sourceX,
          n = e.sourceY,
          o = e.sourcePosition,
          i = void 0 === o ? r.P.Bottom : o,
          a = e.targetX,
          l = e.targetY,
          s = e.targetPosition,
          u = void 0 === s ? r.P.Top : s,
          c = e.curvature,
          f = void 0 === c ? 0.25 : c,
          d = de({ pos: i, x1: t, y1: n, x2: a, y2: l, c: f }),
          h = (0, r._)(d, 2),
          p = h[0],
          g = h[1],
          v = de({ pos: u, x1: a, y1: l, x2: t, y2: n, c: f }),
          y = (0, r._)(v, 2),
          m = y[0],
          b = y[1];
        return "M"
          .concat(t, ",")
          .concat(n, " C")
          .concat(p, ",")
          .concat(g, " ")
          .concat(m, ",")
          .concat(b, " ")
          .concat(a, ",")
          .concat(l);
      }
      var pe = (0, o.memo)(function (e) {
          var t = e.sourceX,
            n = e.sourceY,
            i = e.targetX,
            a = e.targetY,
            l = e.sourcePosition,
            s = void 0 === l ? r.P.Bottom : l,
            u = e.targetPosition,
            c = void 0 === u ? r.P.Top : u,
            f = e.label,
            d = e.labelStyle,
            h = e.labelShowBg,
            p = e.labelBgStyle,
            g = e.labelBgPadding,
            v = e.labelBgBorderRadius,
            y = e.style,
            m = e.markerEnd,
            b = e.markerStart,
            w = {
              sourceX: t,
              sourceY: n,
              sourcePosition: s,
              targetX: i,
              targetY: a,
              targetPosition: c,
              curvature: e.curvature,
            },
            _ = he(w),
            x = (function (e) {
              var t = e.sourceX,
                n = e.sourceY,
                o = e.sourcePosition,
                i = void 0 === o ? r.P.Bottom : o,
                a = e.targetX,
                l = e.targetY,
                s = e.targetPosition,
                u = void 0 === s ? r.P.Top : s,
                c = e.curvature,
                f = void 0 === c ? 0.25 : c,
                d = de({ pos: i, x1: t, y1: n, x2: a, y2: l, c: f }),
                h = (0, r._)(d, 2),
                p = h[0],
                g = h[1],
                v = de({ pos: u, x1: a, y1: l, x2: t, y2: n, c: f }),
                y = (0, r._)(v, 2),
                m = 0.125 * t + 0.375 * p + 0.375 * y[0] + 0.125 * a,
                b = 0.125 * n + 0.375 * g + 0.375 * y[1] + 0.125 * l;
              return [m, b, Math.abs(m - t), Math.abs(b - n)];
            })(w),
            E = (0, r._)(x, 2),
            S = E[0],
            O = E[1];
          return o.createElement(Y, {
            path: _,
            centerX: S,
            centerY: O,
            label: f,
            labelStyle: d,
            labelShowBg: h,
            labelBgStyle: p,
            labelBgPadding: g,
            labelBgBorderRadius: v,
            style: y,
            markerEnd: m,
            markerStart: b,
          });
        }),
        ge = (0, o.createContext)(null),
        ve = ge.Provider;
      function ye(e, t, n, o, i, a, l) {
        var s = l.elementFromPoint(e.clientX, e.clientY),
          u = (null == s ? void 0 : s.classList.contains("target")) || !1,
          c = (null == s ? void 0 : s.classList.contains("source")) || !1,
          f = {
            elementBelow: s,
            isValid: !1,
            connection: {
              source: null,
              target: null,
              sourceHandle: null,
              targetHandle: null,
            },
            isHoveringHandle: !1,
          };
        if (s && (u || c)) {
          f.isHoveringHandle = !0;
          var d = s.getAttribute("data-nodeid"),
            h = s.getAttribute("data-handleid"),
            p = n
              ? { source: d, sourceHandle: h, target: o, targetHandle: i }
              : { source: o, sourceHandle: i, target: d, targetHandle: h };
          (f.connection = p),
            (t !== r.C.Strict || (n && c) || (!n && u)) && (f.isValid = a(p));
        }
        return f;
      }
      function me(e) {
        null == e || e.classList.remove("react-flow__handle-valid"),
          null == e || e.classList.remove("react-flow__handle-connecting");
      }
      function be(e) {
        var t = e.event,
          n = e.handleId,
          o = e.nodeId,
          i = e.onConnect,
          a = e.isTarget,
          l = e.getState,
          s = e.setState,
          u = e.isValidConnection,
          c = e.elementEdgeUpdaterType,
          f = e.onEdgeUpdateEnd,
          d = t.target.closest(".react-flow"),
          h = (0, r.g)(t.target);
        if (h) {
          var p = h.elementFromPoint(t.clientX, t.clientY),
            g = null == p ? void 0 : p.classList.contains("target"),
            v = null == p ? void 0 : p.classList.contains("source");
          if (d && (g || v || c)) {
            var y,
              m = l(),
              b = m.onConnectStart,
              w = m.connectionMode,
              _ = c || (g ? "target" : "source"),
              x = d.getBoundingClientRect();
            s({
              connectionPosition: {
                x: t.clientX - x.left,
                y: t.clientY - x.top,
              },
              connectionNodeId: o,
              connectionHandleId: n,
              connectionHandleType: _,
            }),
              null == b || b(t, { nodeId: o, handleId: n, handleType: _ }),
              h.addEventListener("mousemove", E),
              h.addEventListener("mouseup", function e(t) {
                var r = l(),
                  d = r.onConnectStop,
                  p = r.onConnectEnd,
                  g = ye(t, w, a, o, n, u, h),
                  v = g.connection,
                  m = g.isValid;
                null == d || d(t),
                  m && (null == i || i(v)),
                  null == p || p(t),
                  c && f && f(t),
                  me(y),
                  s({
                    connectionNodeId: null,
                    connectionHandleId: null,
                    connectionHandleType: null,
                  }),
                  h.removeEventListener("mousemove", E),
                  h.removeEventListener("mouseup", e);
              });
          }
        }
        function E(e) {
          s({
            connectionPosition: { x: e.clientX - x.left, y: e.clientY - x.top },
          });
          var t = ye(e, w, a, o, n, u, h),
            r = t.connection,
            i = t.elementBelow,
            l = t.isValid;
          if (!t.isHoveringHandle) return me(y);
          r.source !== r.target &&
            i &&
            (me(y),
            (y = i),
            i.classList.add("react-flow__handle-connecting"),
            i.classList.toggle("react-flow__handle-valid", l));
        }
      }
      ge.Consumer;
      var we = [
        "type",
        "position",
        "isValidConnection",
        "isConnectable",
        "id",
        "onConnect",
        "children",
        "className",
        "onMouseDown",
      ];
      function _e(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function xe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? _e(Object(n), !0).forEach(function (t) {
                (0, r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : _e(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var Ee = function () {
          return !0;
        },
        Se = function (e) {
          return {
            connectionStartHandle: e.connectionStartHandle,
            connectOnClick: e.connectOnClick,
          };
        },
        Oe = (0, o.forwardRef)(function (e, t) {
          var n = e.type,
            a = void 0 === n ? "source" : n,
            s = e.position,
            u = void 0 === s ? r.P.Top : s,
            c = e.isValidConnection,
            f = void 0 === c ? Ee : c,
            d = e.isConnectable,
            h = void 0 === d || d,
            p = e.id,
            v = e.onConnect,
            y = e.children,
            m = e.className,
            b = e.onMouseDown,
            w = g(e, we),
            _ = (0, r.u)(),
            x = (0, o.useContext)(ge),
            E = (0, r.b)(Se, l),
            S = E.connectionStartHandle,
            O = E.connectOnClick,
            C = p || null,
            P = "target" === a,
            A = function (e) {
              var t = _.getState(),
                n = t.defaultEdgeOptions,
                o = t.onConnect,
                i = t.hasDefaultEdges,
                a = xe(xe({}, n), e);
              if (i) {
                var l = _.getState().edges;
                _.setState({ edges: (0, r.c)(a, l) });
              }
              null == o || o(a), null == v || v(a);
            };
          return o.createElement(
            "div",
            xe(
              {
                "data-handleid": C,
                "data-nodeid": x,
                "data-handlepos": u,
                className: i([
                  "react-flow__handle",
                  "react-flow__handle-".concat(u),
                  "nodrag",
                  m,
                  {
                    source: !P,
                    target: P,
                    connectable: h,
                    connecting:
                      (null == S ? void 0 : S.nodeId) === x &&
                      (null == S ? void 0 : S.handleId) === C &&
                      (null == S ? void 0 : S.type) === a,
                  },
                ]),
                onMouseDown: function (e) {
                  0 === e.button &&
                    be({
                      event: e,
                      handleId: C,
                      nodeId: x,
                      onConnect: A,
                      isTarget: P,
                      getState: _.getState,
                      setState: _.setState,
                      isValidConnection: f,
                    }),
                    null == b || b(e);
                },
                onClick: O
                  ? function (e) {
                      var t = _.getState(),
                        n = t.onClickConnectStart,
                        o = t.onClickConnectStop,
                        i = t.onClickConnectEnd,
                        l = t.connectionMode;
                      if (!S)
                        return (
                          null == n ||
                            n(e, { nodeId: x, handleId: C, handleType: a }),
                          void _.setState({
                            connectionStartHandle: {
                              nodeId: x,
                              type: a,
                              handleId: C,
                            },
                          })
                        );
                      var s = (0, r.g)(e.target),
                        u = ye(
                          e,
                          l,
                          "target" === S.type,
                          S.nodeId,
                          S.handleId || null,
                          f,
                          s,
                        ),
                        c = u.connection,
                        d = u.isValid;
                      null == o || o(e),
                        d && A(c),
                        null == i || i(e),
                        _.setState({ connectionStartHandle: null });
                    }
                  : void 0,
                ref: t,
              },
              w,
            ),
            y,
          );
        });
      Oe.displayName = "Handle";
      var Ce = (0, o.memo)(Oe),
        Pe = function (e) {
          var t = e.data,
            n = e.isConnectable,
            i = e.targetPosition,
            a = void 0 === i ? r.P.Top : i,
            l = e.sourcePosition,
            s = void 0 === l ? r.P.Bottom : l;
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(Ce, {
              type: "target",
              position: a,
              isConnectable: n,
            }),
            null == t ? void 0 : t.label,
            o.createElement(Ce, {
              type: "source",
              position: s,
              isConnectable: n,
            }),
          );
        };
      Pe.displayName = "DefaultNode";
      var Ae = (0, o.memo)(Pe),
        je = function (e) {
          var t = e.data,
            n = e.isConnectable,
            i = e.sourcePosition,
            a = void 0 === i ? r.P.Bottom : i;
          return o.createElement(
            o.Fragment,
            null,
            null == t ? void 0 : t.label,
            o.createElement(Ce, {
              type: "source",
              position: a,
              isConnectable: n,
            }),
          );
        };
      je.displayName = "InputNode";
      var Me = (0, o.memo)(je),
        Ne = function (e) {
          var t = e.data,
            n = e.isConnectable,
            i = e.targetPosition,
            a = void 0 === i ? r.P.Top : i;
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(Ce, {
              type: "target",
              position: a,
              isConnectable: n,
            }),
            null == t ? void 0 : t.label,
          );
        };
      Ne.displayName = "OutputNode";
      var ke = (0, o.memo)(Ne),
        De = function (e) {
          return {
            selectedNodes: Array.from(e.nodeInternals.values()).filter(
              function (e) {
                return e.selected;
              },
            ),
            selectedEdges: e.edges.filter(function (e) {
              return e.selected;
            }),
          };
        },
        Be = function (e, t) {
          var n = e.selectedNodes.map(function (e) {
              return e.id;
            }),
            r = t.selectedNodes.map(function (e) {
              return e.id;
            }),
            o = e.selectedEdges.map(function (e) {
              return e.id;
            }),
            i = t.selectedEdges.map(function (e) {
              return e.id;
            });
          return l(n, r) && l(o, i);
        };
      function Ie(e) {
        var t = e.onSelectionChange,
          n = (0, r.b)(De, Be),
          i = n.selectedNodes,
          a = n.selectedEdges;
        return (
          (0, o.useEffect)(
            function () {
              t({ nodes: i, edges: a });
            },
            [i, a],
          ),
          null
        );
      }
      var ze = (0, o.memo)(Ie),
        Le = function (e) {
          return {
            setNodes: e.setNodes,
            setEdges: e.setEdges,
            setDefaultNodesAndEdges: e.setDefaultNodesAndEdges,
            setMinZoom: e.setMinZoom,
            setMaxZoom: e.setMaxZoom,
            setTranslateExtent: e.setTranslateExtent,
            setNodeExtent: e.setNodeExtent,
            reset: e.reset,
          };
        };
      function Te(e, t) {
        (0, o.useEffect)(
          function () {
            void 0 !== e && t(e);
          },
          [e],
        );
      }
      function Re(e, t, n) {
        (0, o.useEffect)(
          function () {
            void 0 !== t && n((0, r.a)({}, e, t));
          },
          [t],
        );
      }
      var Ue = function (e) {
          var t = e.nodes,
            n = e.edges,
            i = e.defaultNodes,
            a = e.defaultEdges,
            s = e.onConnect,
            u = e.onConnectStart,
            c = e.onConnectStop,
            f = e.onConnectEnd,
            d = e.onClickConnectStart,
            h = e.onClickConnectStop,
            p = e.onClickConnectEnd,
            g = e.nodesDraggable,
            v = e.nodesConnectable,
            y = e.minZoom,
            m = e.maxZoom,
            b = e.nodeExtent,
            w = e.onNodesChange,
            _ = e.onEdgesChange,
            x = e.elementsSelectable,
            E = e.connectionMode,
            S = e.snapGrid,
            O = e.snapToGrid,
            C = e.translateExtent,
            P = e.connectOnClick,
            A = e.defaultEdgeOptions,
            j = e.fitView,
            M = e.fitViewOptions,
            N = e.onNodesDelete,
            k = e.onEdgesDelete,
            D = e.onNodeDrag,
            B = e.onNodeDragStart,
            I = e.onNodeDragStop,
            z = e.onSelectionDrag,
            L = e.onSelectionDragStart,
            T = e.onSelectionDragStop,
            R = (0, r.b)(Le, l),
            U = R.setNodes,
            q = R.setEdges,
            $ = R.setDefaultNodesAndEdges,
            Y = R.setMinZoom,
            X = R.setMaxZoom,
            H = R.setTranslateExtent,
            V = R.setNodeExtent,
            Z = R.reset,
            F = (0, r.u)();
          return (
            (0, o.useEffect)(function () {
              return (
                $(i, a),
                function () {
                  Z();
                }
              );
            }, []),
            Re("defaultEdgeOptions", A, F.setState),
            Re("connectionMode", E, F.setState),
            Re("onConnect", s, F.setState),
            Re("onConnectStart", u, F.setState),
            Re("onConnectStop", c, F.setState),
            Re("onConnectEnd", f, F.setState),
            Re("onClickConnectStart", d, F.setState),
            Re("onClickConnectStop", h, F.setState),
            Re("onClickConnectEnd", p, F.setState),
            Re("nodesDraggable", g, F.setState),
            Re("nodesConnectable", v, F.setState),
            Re("elementsSelectable", x, F.setState),
            Re("snapToGrid", O, F.setState),
            Re("snapGrid", S, F.setState),
            Re("onNodesChange", w, F.setState),
            Re("onEdgesChange", _, F.setState),
            Re("connectOnClick", P, F.setState),
            Re("fitViewOnInit", j, F.setState),
            Re("fitViewOnInitOptions", M, F.setState),
            Re("onNodesDelete", N, F.setState),
            Re("onEdgesDelete", k, F.setState),
            Re("onNodeDrag", D, F.setState),
            Re("onNodeDragStart", B, F.setState),
            Re("onNodeDragStop", I, F.setState),
            Re("onSelectionDrag", z, F.setState),
            Re("onSelectionDragStart", L, F.setState),
            Re("onSelectionDragStop", T, F.setState),
            Te(t, U),
            Te(n, q),
            Te(i, U),
            Te(a, q),
            Te(y, Y),
            Te(m, X),
            Te(C, H),
            Te(b, V),
            null
          );
        },
        qe = function (e, t, n) {
          return n === r.P.Left ? e - t : n === r.P.Right ? e + t : e;
        },
        $e = function (e, t, n) {
          return n === r.P.Top ? e - t : n === r.P.Bottom ? e + t : e;
        },
        Ye = function (e) {
          var t = e.className,
            n = e.position,
            r = e.centerX,
            a = e.centerY,
            l = e.radius,
            s = void 0 === l ? 10 : l;
          return o.createElement("circle", {
            className: i(["react-flow__edgeupdater", t]),
            cx: qe(r, s, n),
            cy: $e(a, s, n),
            r: s,
            stroke: "transparent",
            fill: "transparent",
          });
        },
        Xe = function (e) {
          var t = function (t) {
            var n = t.id,
              a = t.className,
              l = t.type,
              s = t.data,
              u = t.onClick,
              c = t.onEdgeDoubleClick,
              f = t.selected,
              d = t.animated,
              h = t.label,
              p = t.labelStyle,
              g = t.labelShowBg,
              v = t.labelBgStyle,
              y = t.labelBgPadding,
              m = t.labelBgBorderRadius,
              b = t.style,
              w = t.source,
              _ = t.target,
              x = t.sourceX,
              E = t.sourceY,
              S = t.targetX,
              O = t.targetY,
              C = t.sourcePosition,
              P = t.targetPosition,
              A = t.elementsSelectable,
              j = t.hidden,
              M = t.sourceHandleId,
              N = t.targetHandleId,
              k = t.onContextMenu,
              D = t.onMouseEnter,
              B = t.onMouseMove,
              I = t.onMouseLeave,
              z = t.edgeUpdaterRadius,
              L = t.onEdgeUpdate,
              T = t.onEdgeUpdateStart,
              R = t.onEdgeUpdateEnd,
              U = t.markerEnd,
              q = t.markerStart,
              $ = t.rfId,
              Y = (0, o.useState)(!1),
              X = (0, r._)(Y, 2),
              H = X[0],
              V = X[1],
              Z = (0, r.u)(),
              F = G(n, Z.getState, c),
              K = G(n, Z.getState, k),
              W = G(n, Z.getState, D),
              Q = G(n, Z.getState, B),
              J = G(n, Z.getState, I),
              ee = function (e, t) {
                var r = t ? _ : w,
                  o = (t ? N : M) || null,
                  i = t ? "target" : "source",
                  a = t,
                  l = Z.getState().edges.find(function (e) {
                    return e.id === n;
                  });
                null == T || T(e, l, i);
                var s = R
                  ? function (e) {
                      return R(e, l, i);
                    }
                  : void 0;
                be({
                  event: e,
                  handleId: o,
                  nodeId: r,
                  onConnect: function (e) {
                    return null == L ? void 0 : L(l, e);
                  },
                  isTarget: a,
                  getState: Z.getState,
                  setState: Z.setState,
                  isValidConnection: function () {
                    return !0;
                  },
                  elementEdgeUpdaterType: i,
                  onEdgeUpdateEnd: s,
                });
              },
              te = function () {
                return V(!0);
              },
              ne = function () {
                return V(!1);
              },
              re = (0, o.useMemo)(
                function () {
                  return "url(#".concat((0, r.d)(q, $), ")");
                },
                [q, $],
              ),
              oe = (0, o.useMemo)(
                function () {
                  return "url(#".concat((0, r.d)(U, $), ")");
                },
                [U, $],
              );
            if (j) return null;
            var ie = !A && !u,
              ae = void 0 !== L,
              le = i([
                "react-flow__edge",
                "react-flow__edge-".concat(l),
                a,
                { selected: f, animated: d, inactive: ie, updating: H },
              ]);
            return o.createElement(
              "g",
              {
                className: le,
                onClick: function (e) {
                  var t = Z.getState(),
                    r = t.edges,
                    o = t.addSelectedEdges,
                    i = r.find(function (e) {
                      return e.id === n;
                    });
                  A && (Z.setState({ nodesSelectionActive: !1 }), o([n])),
                    null == u || u(e, i);
                },
                onDoubleClick: F,
                onContextMenu: K,
                onMouseEnter: W,
                onMouseMove: Q,
                onMouseLeave: J,
              },
              o.createElement(e, {
                id: n,
                source: w,
                target: _,
                selected: f,
                animated: d,
                label: h,
                labelStyle: p,
                labelShowBg: g,
                labelBgStyle: v,
                labelBgPadding: y,
                labelBgBorderRadius: m,
                data: s,
                style: b,
                sourceX: x,
                sourceY: E,
                targetX: S,
                targetY: O,
                sourcePosition: C,
                targetPosition: P,
                sourceHandleId: M,
                targetHandleId: N,
                markerStart: re,
                markerEnd: oe,
                "data-testid": "rf__edge-".concat(n),
              }),
              ae &&
                o.createElement(
                  "g",
                  {
                    onMouseDown: function (e) {
                      return ee(e, !0);
                    },
                    onMouseEnter: te,
                    onMouseOut: ne,
                  },
                  o.createElement(Ye, {
                    position: C,
                    centerX: x,
                    centerY: E,
                    radius: z,
                  }),
                ),
              ae &&
                o.createElement(
                  "g",
                  {
                    onMouseDown: function (e) {
                      return ee(e, !1);
                    },
                    onMouseEnter: te,
                    onMouseOut: ne,
                  },
                  o.createElement(Ye, {
                    position: P,
                    centerX: S,
                    centerY: O,
                    radius: z,
                  }),
                ),
            );
          };
          return (t.displayName = "EdgeWrapper"), (0, o.memo)(t);
        };
      function He(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Ve(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? He(Object(n), !0).forEach(function (t) {
                (0, r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : He(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function Ze(e) {
        var t = {
            default: Xe(e.default || pe),
            straight: Xe(e.bezier || ce),
            step: Xe(e.step || ue),
            smoothstep: Xe(e.step || ae),
            simplebezier: Xe(e.simplebezier || V),
          },
          n = Object.keys(e)
            .filter(function (e) {
              return !["default", "bezier"].includes(e);
            })
            .reduce(function (t, n) {
              return (t[n] = Xe(e[n] || pe)), t;
            }, {});
        return Ve(Ve({}, t), n);
      }
      function Fe(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null,
          o = ((null == n ? void 0 : n.x) || 0) + t.x,
          i = ((null == n ? void 0 : n.y) || 0) + t.y,
          a = (null == n ? void 0 : n.width) || t.width,
          l = (null == n ? void 0 : n.height) || t.height;
        switch (e) {
          case r.P.Top:
            return { x: o + a / 2, y: i };
          case r.P.Right:
            return { x: o + a, y: i + l / 2 };
          case r.P.Bottom:
            return { x: o + a / 2, y: i + l };
          case r.P.Left:
            return { x: o, y: i + l / 2 };
        }
      }
      function Ke(e, t) {
        if (!e) return null;
        var n = null;
        return (
          1 !== e.length && t
            ? t &&
              (n = e.find(function (e) {
                return e.id === t;
              }))
            : (n = e[0]),
          void 0 === n ? null : n
        );
      }
      function Ge(e, t) {
        var n,
          o,
          i,
          a,
          l,
          s = e.get(t),
          u =
            (null == s || null === (n = s[r.i]) || void 0 === n
              ? void 0
              : n.handleBounds) || null,
          c = !(
            s &&
            u &&
            s.width &&
            s.height &&
            void 0 !==
              (null === (o = s.positionAbsolute) || void 0 === o
                ? void 0
                : o.x) &&
            void 0 !==
              (null === (i = s.positionAbsolute) || void 0 === i ? void 0 : i.y)
          );
        return [
          {
            x:
              (null == s || null === (a = s.positionAbsolute) || void 0 === a
                ? void 0
                : a.x) || 0,
            y:
              (null == s || null === (l = s.positionAbsolute) || void 0 === l
                ? void 0
                : l.y) || 0,
            width: (null == s ? void 0 : s.width) || 0,
            height: (null == s ? void 0 : s.height) || 0,
          },
          u,
          !c,
        ];
      }
      var We = "undefined" != typeof document ? document : null,
        Qe = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { target: We },
            n = (0, o.useState)(!1),
            i = (0, r._)(n, 2),
            a = i[0],
            l = i[1],
            u = (0, o.useRef)(new Set([])),
            c = (0, o.useMemo)(
              function () {
                if (null !== e) {
                  var t = (Array.isArray(e) ? e : [e])
                      .filter(function (e) {
                        return "string" == typeof e;
                      })
                      .map(function (e) {
                        return e.split("+");
                      }),
                    n = t.reduce(function (e, t) {
                      return e.concat.apply(e, s(t));
                    }, []);
                  return [t, n];
                }
                return [[], []];
              },
              [e],
            ),
            f = (0, r._)(c, 2),
            d = f[0],
            h = f[1];
          return (
            (0, o.useEffect)(
              function () {
                if (null !== e) {
                  var n,
                    r,
                    o = function (e) {
                      if (tt(e)) return !1;
                      var t = et(e.code, h);
                      u.current.add(e[t]),
                        Je(d, u.current, !1) && (e.preventDefault(), l(!0));
                    },
                    i = function (e) {
                      if (tt(e)) return !1;
                      var t = et(e.code, h);
                      Je(d, u.current, !0)
                        ? (l(!1), u.current.clear())
                        : u.current.delete(e[t]);
                    },
                    a = function () {
                      u.current.clear(), l(!1);
                    };
                  return (
                    null == t ||
                      null === (n = t.target) ||
                      void 0 === n ||
                      n.addEventListener("keydown", o),
                    null == t ||
                      null === (r = t.target) ||
                      void 0 === r ||
                      r.addEventListener("keyup", i),
                    window.addEventListener("blur", a),
                    function () {
                      var e, n;
                      null == t ||
                        null === (e = t.target) ||
                        void 0 === e ||
                        e.removeEventListener("keydown", o),
                        null == t ||
                          null === (n = t.target) ||
                          void 0 === n ||
                          n.removeEventListener("keyup", i),
                        window.removeEventListener("blur", a);
                    }
                  );
                }
              },
              [e, l],
            ),
            a
          );
        };
      function Je(e, t, n) {
        return e
          .filter(function (e) {
            return n || e.length === t.size;
          })
          .some(function (e) {
            return e.every(function (e) {
              return t.has(e);
            });
          });
      }
      function et(e, t) {
        return t.includes(e) ? "code" : "key";
      }
      function tt(e) {
        var t,
          n =
            (null === (t = e.composedPath) || void 0 === t
              ? void 0
              : t.call(e)[0]) || e.target;
        return (
          ["INPUT", "SELECT", "TEXTAREA"].includes(
            null == n ? void 0 : n.nodeName,
          ) || (null == n ? void 0 : n.hasAttribute("contenteditable"))
        );
      }
      var nt = function (e) {
        return {
          onNodesChange: e.onNodesChange,
          onEdgesChange: e.onEdgesChange,
        };
      };
      var rt = function (e) {
          return { x: e.x, y: e.y, zoom: e.k };
        },
        ot = function (e, t) {
          return e.target.closest(".".concat(t));
        },
        it = function (e) {
          return {
            d3Zoom: e.d3Zoom,
            d3Selection: e.d3Selection,
            d3ZoomHandler: e.d3ZoomHandler,
          };
        },
        at = function (e) {
          var t = e.onMove,
            n = e.onMoveStart,
            i = e.onMoveEnd,
            s = e.zoomOnScroll,
            u = void 0 === s || s,
            c = e.zoomOnPinch,
            f = void 0 === c || c,
            d = e.panOnScroll,
            h = void 0 !== d && d,
            p = e.panOnScrollSpeed,
            g = void 0 === p ? 0.5 : p,
            v = e.panOnScrollMode,
            y = void 0 === v ? r.h.Free : v,
            m = e.zoomOnDoubleClick,
            b = void 0 === m || m,
            w = e.selectionKeyPressed,
            _ = e.elementsSelectable,
            x = e.panOnDrag,
            E = void 0 === x || x,
            S = e.translateExtent,
            O = e.minZoom,
            A = e.maxZoom,
            j = e.defaultZoom,
            M = void 0 === j ? 1 : j,
            N = e.defaultPosition,
            k = void 0 === N ? [0, 0] : N,
            D = e.zoomActivationKeyCode,
            B = e.preventScrolling,
            I = void 0 === B || B,
            z = e.children,
            L = e.noWheelClassName,
            T = e.noPanClassName,
            R = (0, r.u)(),
            U = (0, o.useRef)(!1),
            q = (0, o.useRef)(null),
            $ = (0, o.useRef)({ x: 0, y: 0, zoom: 0 }),
            Y = (0, r.b)(it, l),
            X = Y.d3Zoom,
            H = Y.d3Selection,
            V = Y.d3ZoomHandler,
            Z = Qe(D);
          return (
            (function (e) {
              var t = (0, r.u)();
              (0, o.useEffect)(function () {
                var n,
                  o = function () {
                    if (e.current) {
                      var n = (0, r.f)(e.current);
                      t.setState({
                        width: n.width || 500,
                        height: n.height || 500,
                      });
                    }
                  };
                return (
                  o(),
                  (window.onresize = o),
                  e.current &&
                    (n = new ResizeObserver(function () {
                      return o();
                    })).observe(e.current),
                  function () {
                    (window.onresize = null),
                      n && e.current && n.unobserve(e.current);
                  }
                );
              }, []);
            })(q),
            (0, o.useEffect)(function () {
              if (q.current) {
                var e,
                  t = (0, a.s_)().scaleExtent([O, A]).translateExtent(S),
                  n = (0, C.A)(q.current).call(t),
                  o = (0, r.j)(k[0], S[0][0], S[1][0]),
                  i = (0, r.j)(k[1], S[0][1], S[1][1]),
                  l = (0, r.j)(M, O, A),
                  s = a.GS.translate(o, i).scale(l);
                t.transform(n, s),
                  R.setState({
                    d3Zoom: t,
                    d3Selection: n,
                    d3ZoomHandler: n.on("wheel.zoom"),
                    transform: [o, i, l],
                    domNode:
                      null === (e = n.node()) || void 0 === e
                        ? void 0
                        : e.closest(".react-flow"),
                  });
              }
            }, []),
            (0, o.useEffect)(
              function () {
                H &&
                  X &&
                  (h && !Z
                    ? H.on("wheel", function (e) {
                        if (ot(e, L)) return !1;
                        e.preventDefault(), e.stopImmediatePropagation();
                        var t = H.property("__zoom").k || 1;
                        if (e.ctrlKey && f) {
                          var n = (0, P.A)(e),
                            o =
                              -e.deltaY *
                              (1 === e.deltaMode
                                ? 0.05
                                : e.deltaMode
                                  ? 1
                                  : 0.002) *
                              10,
                            i = t * Math.pow(2, o);
                          X.scaleTo(H, i, n);
                        } else {
                          var a = 1 === e.deltaMode ? 20 : 1,
                            l = y === r.h.Vertical ? 0 : e.deltaX * a,
                            s = y === r.h.Horizontal ? 0 : e.deltaY * a;
                          X.translateBy(H, (-l / t) * g, (-s / t) * g);
                        }
                      }).on("wheel.zoom", null)
                    : void 0 !== V &&
                      H.on("wheel", function (e) {
                        if (!I || ot(e, L)) return null;
                        e.preventDefault();
                      }).on("wheel.zoom", V));
              },
              [h, y, H, X, V, Z, f, I, L],
            ),
            (0, o.useEffect)(
              function () {
                X &&
                  (w && !U.current
                    ? X.on("zoom", null)
                    : w ||
                      X.on("zoom", function (e) {
                        if (
                          (R.setState({
                            transform: [
                              e.transform.x,
                              e.transform.y,
                              e.transform.k,
                            ],
                          }),
                          t)
                        ) {
                          var n = rt(e.transform);
                          t(e.sourceEvent, n);
                        }
                      }));
              },
              [w, X, t],
            ),
            (0, o.useEffect)(
              function () {
                X &&
                  X.on("start", function (e) {
                    if (((U.current = !0), n)) {
                      var t = rt(e.transform);
                      ($.current = t), n(e.sourceEvent, t);
                    }
                  });
              },
              [X, n],
            ),
            (0, o.useEffect)(
              function () {
                X &&
                  X.on("end", function (e) {
                    if (
                      ((U.current = !1),
                      i &&
                        ((n = $.current),
                        (r = e.transform),
                        n.x !== r.x || n.y !== r.y || n.zoom !== r.k))
                    ) {
                      var t = rt(e.transform);
                      ($.current = t), i(e.sourceEvent, t);
                    }
                    var n, r;
                  });
              },
              [X, i],
            ),
            (0, o.useEffect)(
              function () {
                X &&
                  X.filter(function (e) {
                    var t = Z || u,
                      n = f && e.ctrlKey;
                    return (
                      !!(E || t || h || b || f) &&
                      !w &&
                      !(!b && "dblclick" === e.type) &&
                      (!ot(e, L) || "wheel" !== e.type) &&
                      (!ot(e, T) || "wheel" === e.type) &&
                      !(!f && e.ctrlKey && "wheel" === e.type) &&
                      !!(t || h || n || "wheel" !== e.type) &&
                      !!(
                        E ||
                        ("mousedown" !== e.type && "touchstart" !== e.type)
                      ) &&
                      !((e.ctrlKey && "wheel" !== e.type) || e.button)
                    );
                  });
              },
              [X, u, f, h, b, E, w, _, Z],
            ),
            o.createElement(
              "div",
              {
                className: "react-flow__renderer react-flow__container",
                ref: q,
              },
              z,
            )
          );
        };
      function lt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function st(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? lt(Object(n), !0).forEach(function (t) {
                (0, r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : lt(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function ut(e, t) {
        return { x: e.clientX - t.left, y: e.clientY - t.top };
      }
      var ct = function (e) {
          return {
            userSelectionActive: e.userSelectionActive,
            elementsSelectable: e.elementsSelectable,
          };
        },
        ft = {
          startX: 0,
          startY: 0,
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          draw: !1,
        },
        dt = (0, o.memo)(function (e) {
          var t = e.selectionKeyPressed,
            n = (0, r.u)(),
            i = (0, o.useRef)(0),
            a = (0, o.useRef)(0),
            s = (0, o.useRef)(),
            u = (0, o.useState)(ft),
            c = (0, r._)(u, 2),
            f = c[0],
            d = c[1],
            h = (0, r.b)(ct, l),
            p = h.userSelectionActive;
          if (!h.elementsSelectable || !(p || t)) return null;
          var g = function () {
            d(ft),
              n.setState({ userSelectionActive: !1 }),
              (i.current = 0),
              (a.current = 0);
          };
          return o.createElement(
            "div",
            {
              className: "react-flow__selectionpane react-flow__container",
              onMouseDown: function (e) {
                var t = e.target.closest(".react-flow");
                s.current = t.getBoundingClientRect();
                var r = ut(e, s.current);
                d({
                  width: 0,
                  height: 0,
                  startX: r.x,
                  startY: r.y,
                  x: r.x,
                  y: r.y,
                  draw: !0,
                }),
                  n.setState({
                    userSelectionActive: !0,
                    nodesSelectionActive: !1,
                  });
              },
              onMouseMove: function (e) {
                var o, l;
                if (t && f.draw && s.current) {
                  var u = ut(e, s.current),
                    c = null !== (o = f.startX) && void 0 !== o ? o : 0,
                    h = null !== (l = f.startY) && void 0 !== l ? l : 0,
                    p = st(
                      st({}, f),
                      {},
                      {
                        x: u.x < c ? u.x : c,
                        y: u.y < h ? u.y : h,
                        width: Math.abs(u.x - c),
                        height: Math.abs(u.y - h),
                      },
                    ),
                    g = n.getState(),
                    v = g.nodeInternals,
                    y = g.edges,
                    m = g.transform,
                    b = g.onNodesChange,
                    w = g.onEdgesChange,
                    _ = Array.from(v.values()),
                    x = (0, r.k)(v, p, m, !1, !0),
                    E = (0, r.e)(x, y).map(function (e) {
                      return e.id;
                    }),
                    S = x.map(function (e) {
                      return e.id;
                    });
                  if (i.current !== S.length) {
                    i.current = S.length;
                    var O = (0, r.l)(_, S);
                    O.length && (null == b || b(O));
                  }
                  if (a.current !== E.length) {
                    a.current = E.length;
                    var C = (0, r.l)(y, E);
                    C.length && (null == w || w(C));
                  }
                  d(p);
                }
              },
              onMouseUp: function () {
                n.setState({ nodesSelectionActive: i.current > 0 }), g();
              },
              onMouseLeave: function () {
                n.setState({ nodesSelectionActive: !1 }), g();
              },
            },
            f.draw &&
              o.createElement("div", {
                className: "react-flow__selection react-flow__container",
                style: {
                  width: f.width,
                  height: f.height,
                  transform: "translate("
                    .concat(f.x, "px, ")
                    .concat(f.y, "px)"),
                },
              }),
          );
        });
      function ht(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function pt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ht(Object(n), !0).forEach(function (t) {
                (0, r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ht(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function gt(e, t) {
        if (!e.parentNode) return !1;
        var n = t.get(e.parentNode);
        return !!n && (!!n.selected || gt(n, t));
      }
      function vt(e, t, n) {
        var r = e;
        do {
          var o;
          if (null !== (o = r) && void 0 !== o && o.matches(t)) return !0;
          if (r === n.current) return !1;
          r = r.parentElement;
        } while (r);
        return !1;
      }
      function yt(e, t, n) {
        return Array.from(e.values())
          .filter(function (t) {
            return (t.selected || t.id === n) && (!t.parentNode || !gt(t, e));
          })
          .map(function (e) {
            var n, r, o, i;
            return {
              id: e.id,
              position: e.position || { x: 0, y: 0 },
              positionAbsolute: e.positionAbsolute || { x: 0, y: 0 },
              distance: {
                x:
                  t.x -
                  (null !==
                    (n =
                      null === (r = e.positionAbsolute) || void 0 === r
                        ? void 0
                        : r.x) && void 0 !== n
                    ? n
                    : 0),
                y:
                  t.y -
                  (null !==
                    (o =
                      null === (i = e.positionAbsolute) || void 0 === i
                        ? void 0
                        : i.y) && void 0 !== o
                    ? o
                    : 0),
              },
              delta: { x: 0, y: 0 },
              extent: e.extent,
              parentNode: e.parentNode,
              width: e.width,
              height: e.height,
            };
          });
      }
      function mt(e) {
        var t = e.nodeId,
          n = e.dragItems,
          r = e.nodeInternals,
          o = n.map(function (e) {
            return pt(
              pt({}, r.get(e.id)),
              {},
              { position: e.position, positionAbsolute: e.positionAbsolute },
            );
          });
        return [
          t
            ? o.find(function (e) {
                return e.id === t;
              })
            : o[0],
          o,
        ];
      }
      function bt(e) {
        return function (t, n, r) {
          return null == e ? void 0 : e(t, r);
        };
      }
      function wt(e) {
        var t = e.nodeRef,
          n = e.disabled,
          i = void 0 !== n && n,
          a = e.noDragClassName,
          l = e.handleSelector,
          s = e.nodeId,
          u = e.isSelectable,
          c = e.selectNodesOnDrag,
          f = (0, o.useState)(!1),
          d = (0, r._)(f, 2),
          h = d[0],
          p = d[1],
          g = (0, r.u)(),
          v = (0, o.useRef)(),
          y = (0, o.useRef)({ x: null, y: null }),
          m = (0, o.useCallback)(function (e) {
            var t = e.sourceEvent,
              n = g.getState(),
              o = n.transform,
              i = n.snapGrid,
              a = n.snapToGrid,
              l = t.touches ? t.touches[0].clientX : t.clientX,
              s = t.touches ? t.touches[0].clientY : t.clientY;
            return (0, r.p)({ x: l, y: s }, o, a, i);
          }, []);
        return (
          (0, o.useEffect)(
            function () {
              if (null != t && t.current) {
                var e = (0, C.A)(t.current);
                if (!i) {
                  var n = (function () {
                    var e,
                      t,
                      n,
                      r,
                      o = D,
                      i = B,
                      a = I,
                      l = z,
                      s = {},
                      u = (0, A.A)("start", "drag", "end"),
                      c = 0,
                      f = 0;
                    function d(e) {
                      e.on("mousedown.drag", h)
                        .filter(l)
                        .on("touchstart.drag", v)
                        .on("touchmove.drag", y, M.vr)
                        .on("touchend.drag touchcancel.drag", m)
                        .style("touch-action", "none")
                        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
                    }
                    function h(a, l) {
                      if (!r && o.call(this, a, l)) {
                        var s = b(this, i.call(this, a, l), a, l, "mouse");
                        s &&
                          ((0, C.A)(a.view)
                            .on("mousemove.drag", p, M.Rw)
                            .on("mouseup.drag", g, M.Rw),
                          (0, j.A)(a.view),
                          (0, M.GK)(a),
                          (n = !1),
                          (e = a.clientX),
                          (t = a.clientY),
                          s("start", a));
                      }
                    }
                    function p(r) {
                      if (((0, M.Ay)(r), !n)) {
                        var o = r.clientX - e,
                          i = r.clientY - t;
                        n = o * o + i * i > f;
                      }
                      s.mouse("drag", r);
                    }
                    function g(e) {
                      (0, C.A)(e.view).on("mousemove.drag mouseup.drag", null),
                        (0, j.y)(e.view, n),
                        (0, M.Ay)(e),
                        s.mouse("end", e);
                    }
                    function v(e, t) {
                      if (o.call(this, e, t)) {
                        var n,
                          r,
                          a = e.changedTouches,
                          l = i.call(this, e, t),
                          s = a.length;
                        for (n = 0; n < s; ++n)
                          (r = b(this, l, e, t, a[n].identifier, a[n])) &&
                            ((0, M.GK)(e), r("start", e, a[n]));
                      }
                    }
                    function y(e) {
                      var t,
                        n,
                        r = e.changedTouches,
                        o = r.length;
                      for (t = 0; t < o; ++t)
                        (n = s[r[t].identifier]) &&
                          ((0, M.Ay)(e), n("drag", e, r[t]));
                    }
                    function m(e) {
                      var t,
                        n,
                        o = e.changedTouches,
                        i = o.length;
                      for (
                        r && clearTimeout(r),
                          r = setTimeout(function () {
                            r = null;
                          }, 500),
                          t = 0;
                        t < i;
                        ++t
                      )
                        (n = s[o[t].identifier]) &&
                          ((0, M.GK)(e), n("end", e, o[t]));
                    }
                    function b(e, t, n, r, o, i) {
                      var l,
                        f,
                        h,
                        p = u.copy(),
                        g = (0, P.A)(i || n, t);
                      if (
                        null !=
                        (h = a.call(
                          e,
                          new k("beforestart", {
                            sourceEvent: n,
                            target: d,
                            identifier: o,
                            active: c,
                            x: g[0],
                            y: g[1],
                            dx: 0,
                            dy: 0,
                            dispatch: p,
                          }),
                          r,
                        ))
                      )
                        return (
                          (l = h.x - g[0] || 0),
                          (f = h.y - g[1] || 0),
                          function n(i, a, u) {
                            var v,
                              y = g;
                            switch (i) {
                              case "start":
                                (s[o] = n), (v = c++);
                                break;
                              case "end":
                                delete s[o], --c;
                              case "drag":
                                (g = (0, P.A)(u || a, t)), (v = c);
                            }
                            p.call(
                              i,
                              e,
                              new k(i, {
                                sourceEvent: a,
                                subject: h,
                                target: d,
                                identifier: o,
                                active: v,
                                x: g[0] + l,
                                y: g[1] + f,
                                dx: g[0] - y[0],
                                dy: g[1] - y[1],
                                dispatch: p,
                              }),
                              r,
                            );
                          }
                        );
                    }
                    return (
                      (d.filter = function (e) {
                        return arguments.length
                          ? ((o = "function" == typeof e ? e : N(!!e)), d)
                          : o;
                      }),
                      (d.container = function (e) {
                        return arguments.length
                          ? ((i = "function" == typeof e ? e : N(e)), d)
                          : i;
                      }),
                      (d.subject = function (e) {
                        return arguments.length
                          ? ((a = "function" == typeof e ? e : N(e)), d)
                          : a;
                      }),
                      (d.touchable = function (e) {
                        return arguments.length
                          ? ((l = "function" == typeof e ? e : N(!!e)), d)
                          : l;
                      }),
                      (d.on = function () {
                        var e = u.on.apply(u, arguments);
                        return e === u ? d : e;
                      }),
                      (d.clickDistance = function (e) {
                        return arguments.length
                          ? ((f = (e = +e) * e), d)
                          : Math.sqrt(f);
                      }),
                      d
                    );
                  })()
                    .on("start", function (e) {
                      var t,
                        n = g.getState(),
                        o = n.nodeInternals,
                        i = n.multiSelectionActive,
                        a = n.unselectNodesAndEdges,
                        l = n.onNodeDragStart,
                        f = n.onSelectionDragStart,
                        d = s ? l : bt(f);
                      c ||
                        i ||
                        !s ||
                        (null !== (t = o.get(s)) &&
                          void 0 !== t &&
                          t.selected) ||
                        a();
                      s && u && c && (0, r.n)({ id: s, store: g });
                      var h = m(e);
                      if (
                        ((y.current = h),
                        (v.current = yt(o, h, s)),
                        d && v.current)
                      ) {
                        var p = mt({
                            nodeId: s,
                            dragItems: v.current,
                            nodeInternals: o,
                          }),
                          b = (0, r._)(p, 2),
                          w = b[0],
                          _ = b[1];
                        d(e.sourceEvent, w, _);
                      }
                    })
                    .on("drag", function (e) {
                      var t = g.getState(),
                        n = t.updateNodePositions,
                        o = t.snapToGrid,
                        i = t.snapGrid,
                        a = t.nodeInternals,
                        l = t.nodeExtent,
                        u = t.onNodeDrag,
                        c = t.onSelectionDrag,
                        f = m(e);
                      if (
                        (y.current.x !== f.x || y.current.y !== f.y) &&
                        v.current
                      ) {
                        (y.current = f),
                          (v.current = v.current.map(function (e) {
                            return (function (e, t, n, o, i, a) {
                              var l = (0, r._)(o, 2),
                                s = l[0],
                                u = l[1],
                                c = e.extent || a,
                                f = {
                                  x: t.x - e.distance.x,
                                  y: t.y - e.distance.y,
                                };
                              if (
                                (n &&
                                  ((f.x = s * Math.round(f.x / s)),
                                  (f.y = u * Math.round(f.y / u))),
                                "parent" === e.extent)
                              )
                                if (e.parentNode && e.width && e.height) {
                                  var d = i.get(e.parentNode);
                                  c =
                                    null != d &&
                                    d.positionAbsolute &&
                                    null != d &&
                                    d.width &&
                                    null != d &&
                                    d.height
                                      ? [
                                          [
                                            d.positionAbsolute.x,
                                            d.positionAbsolute.y,
                                          ],
                                          [
                                            d.positionAbsolute.x +
                                              d.width -
                                              e.width,
                                            d.positionAbsolute.y +
                                              d.height -
                                              e.height,
                                          ],
                                        ]
                                      : c;
                                } else c = a;
                              else if (e.extent && e.parentNode) {
                                var h,
                                  p,
                                  g,
                                  v,
                                  y = i.get(e.parentNode),
                                  m =
                                    null !==
                                      (h =
                                        null == y ||
                                        null === (p = y.positionAbsolute) ||
                                        void 0 === p
                                          ? void 0
                                          : p.x) && void 0 !== h
                                      ? h
                                      : 0,
                                  b =
                                    null !==
                                      (g =
                                        null == y ||
                                        null === (v = y.positionAbsolute) ||
                                        void 0 === v
                                          ? void 0
                                          : v.y) && void 0 !== g
                                      ? g
                                      : 0;
                                c = [
                                  [e.extent[0][0] + m, e.extent[0][1] + b],
                                  [e.extent[1][0] + m, e.extent[1][1] + b],
                                ];
                              }
                              var w = { x: 0, y: 0 };
                              if (e.parentNode) {
                                var _,
                                  x,
                                  E,
                                  S,
                                  O = i.get(e.parentNode);
                                w = {
                                  x:
                                    null !==
                                      (_ =
                                        null == O ||
                                        null === (x = O.positionAbsolute) ||
                                        void 0 === x
                                          ? void 0
                                          : x.x) && void 0 !== _
                                      ? _
                                      : 0,
                                  y:
                                    null !==
                                      (E =
                                        null == O ||
                                        null === (S = O.positionAbsolute) ||
                                        void 0 === S
                                          ? void 0
                                          : S.y) && void 0 !== E
                                      ? E
                                      : 0,
                                };
                              }
                              return (
                                (e.positionAbsolute = c ? (0, r.m)(f, c) : f),
                                (e.position = {
                                  x: e.positionAbsolute.x - w.x,
                                  y: e.positionAbsolute.y - w.y,
                                }),
                                e
                              );
                            })(e, f, o, i, a, l);
                          }));
                        var d = s ? u : bt(c);
                        if ((n(v.current, !0, !0), p(!0), d)) {
                          var h = mt({
                              nodeId: s,
                              dragItems: v.current,
                              nodeInternals: a,
                            }),
                            b = (0, r._)(h, 2),
                            w = b[0],
                            _ = b[1];
                          d(e.sourceEvent, w, _);
                        }
                      }
                      e.on("end", function (e) {
                        if ((p(!1), v.current)) {
                          var t = g.getState(),
                            n = t.updateNodePositions,
                            o = t.nodeInternals,
                            i = t.onNodeDragStop,
                            a = t.onSelectionDragStop,
                            l = s ? i : bt(a);
                          if ((n(v.current, !1, !1), l)) {
                            var u = mt({
                                nodeId: s,
                                dragItems: v.current,
                                nodeInternals: o,
                              }),
                              c = (0, r._)(u, 2),
                              f = c[0],
                              d = c[1];
                            l(e.sourceEvent, f, d);
                          }
                        }
                      });
                    })
                    .filter(function (e) {
                      var n = e.target;
                      return (
                        !e.button &&
                        (!a || !vt(n, ".".concat(a), t)) &&
                        (!l || vt(n, l, t))
                      );
                    });
                  return (
                    e.call(n),
                    function () {
                      e.on(".drag", null);
                    }
                  );
                }
                e.on(".drag", null);
              }
            },
            [t, i, a, l, u, g, s, c, m],
          ),
          h
        );
      }
      function _t(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var xt = function (e) {
          return (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? _t(Object(n), !0).forEach(function (t) {
                    (0, r.a)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n),
                    )
                  : _t(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t),
                      );
                    });
            }
            return e;
          })(
            {
              transformString: "translate("
                .concat(e.transform[0], "px,")
                .concat(e.transform[1], "px) scale(")
                .concat(e.transform[2], ")"),
              userSelectionActive: e.userSelectionActive,
            },
            (0, r.o)(
              Array.from(e.nodeInternals.values()).filter(function (e) {
                return e.selected;
              }),
            ),
          );
        },
        Et = function (e) {
          var t = Array.from(e.nodeInternals.values()).filter(function (e) {
            return e.selected;
          });
          return (0, r.o)(t);
        };
      function St(e) {
        var t = e.onSelectionContextMenu,
          n = e.noPanClassName,
          a = (0, r.u)(),
          s = (0, r.b)(xt, l),
          u = s.transformString,
          c = s.userSelectionActive,
          f = (0, r.b)(Et, l),
          d = f.width,
          h = f.height,
          p = f.x,
          g = f.y,
          v = (0, o.useRef)(null);
        if ((wt({ nodeRef: v }), c || !d || !h)) return null;
        var y = t
          ? function (e) {
              var n = Array.from(a.getState().nodeInternals.values()).filter(
                function (e) {
                  return e.selected;
                },
              );
              t(e, n);
            }
          : void 0;
        return o.createElement(
          "div",
          {
            className: i([
              "react-flow__nodesselection",
              "react-flow__container",
              n,
            ]),
            style: { transform: u },
          },
          o.createElement("div", {
            ref: v,
            className: "react-flow__nodesselection-rect",
            onContextMenu: y,
            style: { width: d, height: h, top: g, left: p },
          }),
        );
      }
      var Ot = (0, o.memo)(St),
        Ct = function (e) {
          return e.nodesSelectionActive;
        },
        Pt = function (e) {
          var t = e.children,
            n = e.onPaneClick,
            i = e.onPaneContextMenu,
            a = e.onPaneScroll,
            u = e.deleteKeyCode,
            c = e.onMove,
            f = e.onMoveStart,
            d = e.onMoveEnd,
            h = e.selectionKeyCode,
            p = e.multiSelectionKeyCode,
            g = e.zoomActivationKeyCode,
            v = e.elementsSelectable,
            y = e.zoomOnScroll,
            m = e.zoomOnPinch,
            b = e.panOnScroll,
            w = e.panOnScrollSpeed,
            _ = e.panOnScrollMode,
            x = e.zoomOnDoubleClick,
            E = e.panOnDrag,
            S = e.translateExtent,
            O = e.minZoom,
            C = e.maxZoom,
            P = e.defaultZoom,
            A = e.defaultPosition,
            j = e.preventScrolling,
            M = e.onSelectionContextMenu,
            N = e.noWheelClassName,
            k = e.noPanClassName,
            D = (0, r.u)(),
            B = (0, r.b)(Ct),
            I = Qe(h);
          !(function (e) {
            var t = e.deleteKeyCode,
              n = e.multiSelectionKeyCode,
              i = (0, r.u)(),
              a = (0, r.b)(nt, l),
              u = a.onNodesChange,
              c = a.onEdgesChange,
              f = Qe(t),
              d = Qe(n);
            (0, o.useEffect)(
              function () {
                var e = i.getState(),
                  t = e.nodeInternals,
                  n = e.edges,
                  o = e.hasDefaultNodes,
                  a = e.hasDefaultEdges,
                  l = e.onNodesDelete,
                  d = e.onEdgesDelete,
                  h = Array.from(t.values()).reduce(function (e, t) {
                    return (
                      ((!t.selected &&
                        t.parentNode &&
                        e.find(function (e) {
                          return e.id === t.parentNode;
                        })) ||
                        t.selected) &&
                        e.push(t),
                      e
                    );
                  }, []),
                  p = n.filter(function (e) {
                    return e.selected;
                  });
                if (f && (h || p)) {
                  var g = (0, r.e)(h, n),
                    v = [].concat(s(p), s(g)),
                    y = v.reduce(function (e, t) {
                      return e.includes(t.id) || e.push(t.id), e;
                    }, []);
                  if (
                    ((a || o) &&
                      (a &&
                        i.setState({
                          edges: n.filter(function (e) {
                            return !y.includes(e.id);
                          }),
                        }),
                      o &&
                        (h.forEach(function (e) {
                          t.delete(e.id);
                        }),
                        i.setState({ nodeInternals: new Map(t) }))),
                    y.length > 0 && (null == d || d(v), c))
                  ) {
                    var m = y.map(function (e) {
                      return { id: e, type: "remove" };
                    });
                    c(m);
                  }
                  if (h.length > 0 && (null == l || l(h), u)) {
                    var b = h.map(function (e) {
                      return { id: e.id, type: "remove" };
                    });
                    u(b);
                  }
                  i.setState({ nodesSelectionActive: !1 });
                }
              },
              [f, u, c],
            ),
              (0, o.useEffect)(
                function () {
                  i.setState({ multiSelectionActive: d });
                },
                [d],
              );
          })({ deleteKeyCode: u, multiSelectionKeyCode: p });
          var z = i
              ? function (e) {
                  return i(e);
                }
              : void 0,
            L = a
              ? function (e) {
                  return a(e);
                }
              : void 0;
          return o.createElement(
            at,
            {
              onMove: c,
              onMoveStart: f,
              onMoveEnd: d,
              selectionKeyPressed: I,
              elementsSelectable: v,
              zoomOnScroll: y,
              zoomOnPinch: m,
              panOnScroll: b,
              panOnScrollSpeed: w,
              panOnScrollMode: _,
              zoomOnDoubleClick: x,
              panOnDrag: E,
              translateExtent: S,
              minZoom: O,
              maxZoom: C,
              defaultZoom: P,
              defaultPosition: A,
              zoomActivationKeyCode: g,
              preventScrolling: j,
              noWheelClassName: N,
              noPanClassName: k,
            },
            t,
            o.createElement(dt, { selectionKeyPressed: I }),
            B &&
              o.createElement(Ot, {
                onSelectionContextMenu: M,
                noPanClassName: k,
              }),
            o.createElement("div", {
              className: "react-flow__pane react-flow__container",
              onClick: function (e) {
                null == n || n(e),
                  D.getState().resetSelectedElements(),
                  D.setState({ nodesSelectionActive: !1 });
              },
              onContextMenu: z,
              onWheel: L,
            }),
          );
        };
      Pt.displayName = "FlowRenderer";
      var At = (0, o.memo)(Pt);
      var jt = function (e) {
          return {
            nodesDraggable: e.nodesDraggable,
            nodesConnectable: e.nodesConnectable,
            elementsSelectable: e.elementsSelectable,
            updateNodeDimensions: e.updateNodeDimensions,
          };
        },
        Mt = function (e) {
          var t,
            n = (0, r.b)(jt, l),
            i = n.nodesDraggable,
            a = n.nodesConnectable,
            s = n.elementsSelectable,
            u = n.updateNodeDimensions,
            c =
              ((t = e.onlyRenderVisibleElements),
              (0, r.b)(
                (0, o.useCallback)(
                  function (e) {
                    return t
                      ? (0, r.k)(
                          e.nodeInternals,
                          { x: 0, y: 0, width: e.width, height: e.height },
                          e.transform,
                          !0,
                        )
                      : Array.from(e.nodeInternals.values());
                  },
                  [t],
                ),
              )),
            f = (0, o.useRef)(),
            d = (0, o.useMemo)(function () {
              if ("undefined" == typeof ResizeObserver) return null;
              var e = new ResizeObserver(function (e) {
                var t = e.map(function (e) {
                  return {
                    id: e.target.getAttribute("data-id"),
                    nodeElement: e.target,
                    forceUpdate: !0,
                  };
                });
                u(t);
              });
              return (f.current = e), e;
            }, []);
          return (
            (0, o.useEffect)(function () {
              return function () {
                var e;
                null == f ||
                  null === (e = f.current) ||
                  void 0 === e ||
                  e.disconnect();
              };
            }, []),
            o.createElement(
              "div",
              { className: "react-flow__nodes react-flow__container" },
              c.map(function (t) {
                var n,
                  l,
                  u,
                  c,
                  f,
                  h,
                  p,
                  g = t.type || "default";
                e.nodeTypes[g] || (g = "default");
                var v = e.nodeTypes[g] || e.nodeTypes.default,
                  y = !!(t.draggable || (i && void 0 === t.draggable)),
                  m = !!(t.selectable || (s && void 0 === t.selectable)),
                  b = !!(t.connectable || (a && void 0 === t.connectable));
                return o.createElement(v, {
                  key: t.id,
                  id: t.id,
                  className: t.className,
                  style: t.style,
                  type: g,
                  data: t.data,
                  sourcePosition: t.sourcePosition || r.P.Bottom,
                  targetPosition: t.targetPosition || r.P.Top,
                  hidden: t.hidden,
                  xPos:
                    null !==
                      (n =
                        null === (l = t.positionAbsolute) || void 0 === l
                          ? void 0
                          : l.x) && void 0 !== n
                      ? n
                      : 0,
                  yPos:
                    null !==
                      (u =
                        null === (c = t.positionAbsolute) || void 0 === c
                          ? void 0
                          : c.y) && void 0 !== u
                      ? u
                      : 0,
                  selectNodesOnDrag: e.selectNodesOnDrag,
                  onClick: e.onNodeClick,
                  onMouseEnter: e.onNodeMouseEnter,
                  onMouseMove: e.onNodeMouseMove,
                  onMouseLeave: e.onNodeMouseLeave,
                  onContextMenu: e.onNodeContextMenu,
                  onDoubleClick: e.onNodeDoubleClick,
                  selected: !!t.selected,
                  isDraggable: y,
                  isSelectable: m,
                  isConnectable: b,
                  resizeObserver: d,
                  dragHandle: t.dragHandle,
                  zIndex:
                    null !==
                      (f =
                        null === (h = t[r.i]) || void 0 === h ? void 0 : h.z) &&
                    void 0 !== f
                      ? f
                      : 0,
                  isParent: !(
                    null === (p = t[r.i]) ||
                    void 0 === p ||
                    !p.isParent
                  ),
                  noDragClassName: e.noDragClassName,
                  noPanClassName: e.noPanClassName,
                  initialized: !!t.width && !!t.height,
                });
              }),
            )
          );
        };
      Mt.displayName = "NodeRenderer";
      var Nt,
        kt = (0, o.memo)(Mt);
      function Dt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Bt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Dt(Object(n), !0).forEach(function (t) {
                (0, r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Dt(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var It,
        zt =
          ((Nt = {}),
          (0, r.a)(Nt, r.P.Left, r.P.Right),
          (0, r.a)(Nt, r.P.Right, r.P.Left),
          (0, r.a)(Nt, r.P.Top, r.P.Bottom),
          (0, r.a)(Nt, r.P.Bottom, r.P.Top),
          Nt),
        Lt = function (e) {
          var t,
            n,
            i,
            a,
            s,
            u = e.connectionNodeId,
            c = e.connectionHandleType,
            f = e.connectionLineStyle,
            d = e.connectionLineType,
            h = void 0 === d ? r.q.Bezier : d,
            p = e.isConnectable,
            g = e.CustomConnectionLineComponent,
            v = (0, r.b)(
              (0, o.useCallback)(
                function (e) {
                  return {
                    fromNode: e.nodeInternals.get(u),
                    handleId: e.connectionHandleId,
                    toX:
                      (e.connectionPosition.x - e.transform[0]) /
                      e.transform[2],
                    toY:
                      (e.connectionPosition.y - e.transform[1]) /
                      e.transform[2],
                  };
                },
                [u],
              ),
              l,
            ),
            y = v.fromNode,
            m = v.handleId,
            b = v.toX,
            w = v.toY,
            _ =
              null == y || null === (t = y[r.i]) || void 0 === t
                ? void 0
                : t.handleBounds;
          if (!y || !p || null == _ || !_[c]) return null;
          var x = _[c],
            E = m
              ? x.find(function (e) {
                  return e.id === m;
                })
              : x[0],
            S = E
              ? E.x + E.width / 2
              : (null !== (n = null == y ? void 0 : y.width) && void 0 !== n
                  ? n
                  : 0) / 2,
            O = E
              ? E.y + E.height / 2
              : null !== (i = null == y ? void 0 : y.height) && void 0 !== i
                ? i
                : 0,
            C =
              ((null == y || null === (a = y.positionAbsolute) || void 0 === a
                ? void 0
                : a.x) || 0) + S,
            P =
              ((null == y || null === (s = y.positionAbsolute) || void 0 === s
                ? void 0
                : s.y) || 0) + O,
            A = null == E ? void 0 : E.position;
          if (!A) return null;
          var j,
            M,
            N,
            k,
            D,
            B,
            I = zt[A];
          switch (c) {
            case "source":
              (j = C), (M = P), (N = A), (k = b), (D = w), (B = I);
              break;
            case "target":
              (j = b), (M = w), (N = I), (k = C), (D = P), (B = A);
          }
          if (g)
            return o.createElement(
              "g",
              { className: "react-flow__connection" },
              o.createElement(g, {
                connectionLineType: h,
                connectionLineStyle: f,
                fromNode: y,
                fromHandle: E,
                fromX: C,
                fromY: P,
                toX: b,
                toY: w,
                fromPosition: A,
                toPosition: I,
                sourcePosition: N,
                targetPosition: B,
                sourceNode: y,
                sourceHandle: E,
                targetX: k,
                targetY: D,
                sourceX: j,
                sourceY: M,
              }),
            );
          var z = "",
            L = {
              sourceX: j,
              sourceY: M,
              sourcePosition: N,
              targetX: k,
              targetY: D,
              targetPosition: B,
            };
          return (
            (z =
              h === r.q.Bezier
                ? he(L)
                : h === r.q.Step
                  ? ie(Bt(Bt({}, L), {}, { borderRadius: 0 }))
                  : h === r.q.SmoothStep
                    ? ie(L)
                    : h === r.q.SimpleBezier
                      ? H(L)
                      : "M"
                          .concat(j, ",")
                          .concat(M, " ")
                          .concat(k, ",")
                          .concat(D)),
            o.createElement(
              "g",
              { className: "react-flow__connection" },
              o.createElement("path", {
                d: z,
                className: "react-flow__connection-path",
                style: f,
              }),
            )
          );
        };
      function Tt(e) {
        return (
          (Tt =
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
          Tt(e)
        );
      }
      var Rt =
        ((It = {}),
        (0, r.a)(It, r.M.Arrow, function (e) {
          var t = e.color,
            n = void 0 === t ? "none" : t,
            r = e.strokeWidth,
            i = void 0 === r ? 1 : r;
          return o.createElement("polyline", {
            stroke: n,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: i,
            fill: "none",
            points: "-5,-4 0,0 -5,4",
          });
        }),
        (0, r.a)(It, r.M.ArrowClosed, function (e) {
          var t = e.color,
            n = void 0 === t ? "none" : t,
            r = e.strokeWidth,
            i = void 0 === r ? 1 : r;
          return o.createElement("polyline", {
            stroke: n,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: i,
            fill: n,
            points: "-5,-4 0,0 -5,4 -5,-4",
          });
        }),
        It);
      function Ut(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var qt = function (e) {
          var t = e.id,
            n = e.type,
            r = e.color,
            i = e.width,
            a = void 0 === i ? 12.5 : i,
            l = e.height,
            s = void 0 === l ? 12.5 : l,
            u = e.markerUnits,
            c = void 0 === u ? "strokeWidth" : u,
            f = e.strokeWidth,
            d = e.orient,
            h = void 0 === d ? "auto" : d,
            p = (function (e) {
              return (0, o.useMemo)(
                function () {
                  return Rt.hasOwnProperty(e)
                    ? Rt[e]
                    : function () {
                        return null;
                      };
                },
                [e],
              );
            })(n);
          return o.createElement(
            "marker",
            {
              className: "react-flow__arrowhead",
              id: t,
              markerWidth: "".concat(a),
              markerHeight: "".concat(s),
              viewBox: "-10 -10 20 20",
              markerUnits: c,
              orient: h,
              refX: "0",
              refY: "0",
            },
            o.createElement(p, { color: r, strokeWidth: f }),
          );
        },
        $t = function (e) {
          var t = e.defaultColor,
            n = e.rfId;
          return function (e) {
            var o = [];
            return e.edges
              .reduce(function (e, i) {
                return (
                  [i.markerStart, i.markerEnd].forEach(function (i) {
                    if (i && "object" === Tt(i)) {
                      var a = (0, r.d)(i, n);
                      o.includes(a) ||
                        (e.push(
                          (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {};
                              t % 2
                                ? Ut(Object(n), !0).forEach(function (t) {
                                    (0, r.a)(e, t, n[t]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(
                                      e,
                                      Object.getOwnPropertyDescriptors(n),
                                    )
                                  : Ut(Object(n)).forEach(function (t) {
                                      Object.defineProperty(
                                        e,
                                        t,
                                        Object.getOwnPropertyDescriptor(n, t),
                                      );
                                    });
                            }
                            return e;
                          })({ id: a, color: i.color || t }, i),
                        ),
                        o.push(a));
                    }
                  }),
                  e
                );
              }, [])
              .sort(function (e, t) {
                return e.id.localeCompare(t.id);
              });
          };
        },
        Yt = function (e) {
          var t = e.defaultColor,
            n = e.rfId,
            i = (0, r.b)(
              (0, o.useCallback)($t({ defaultColor: t, rfId: n }), [t, n]),
              function (e, t) {
                return !(
                  e.length !== t.length ||
                  e.some(function (e, n) {
                    return e.id !== t[n].id;
                  })
                );
              },
            );
          return o.createElement(
            "defs",
            null,
            i.map(function (e) {
              return o.createElement(qt, {
                id: e.id,
                key: e.id,
                type: e.type,
                color: e.color,
                width: e.width,
                height: e.height,
                markerUnits: e.markerUnits,
                strokeWidth: e.strokeWidth,
                orient: e.orient,
              });
            }),
          );
        };
      Yt.displayName = "MarkerDefinitions";
      var Xt = (0, o.memo)(Yt),
        Ht = [{ level: 0, isMaxLevel: !0, edges: [] }];
      function Vt(e, t, n) {
        return (function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = -1,
            i = e.reduce(function (e, i) {
              var a,
                l,
                s,
                u,
                c = (0, r.s)(i.zIndex),
                f = c ? i.zIndex : 0;
              return (
                n &&
                  (f = c
                    ? i.zIndex
                    : Math.max(
                        (null === (a = t.get(i.source)) ||
                        void 0 === a ||
                        null === (l = a[r.i]) ||
                        void 0 === l
                          ? void 0
                          : l.z) || 0,
                        (null === (s = t.get(i.target)) ||
                        void 0 === s ||
                        null === (u = s[r.i]) ||
                        void 0 === u
                          ? void 0
                          : u.z) || 0,
                      )),
                e[f] ? e[f].push(i) : (e[f] = [i]),
                (o = f > o ? f : o),
                e
              );
            }, {}),
            a = Object.entries(i).map(function (e) {
              var t = (0, r._)(e, 2),
                n = +t[0];
              return { edges: t[1], level: n, isMaxLevel: n === o };
            });
          return 0 === a.length ? Ht : a;
        })(
          (0, r.b)(
            (0, o.useCallback)(
              function (n) {
                return e
                  ? n.edges.filter(function (e) {
                      var o = t.get(e.source),
                        i = t.get(e.target);
                      return (
                        (null == o ? void 0 : o.width) &&
                        (null == o ? void 0 : o.height) &&
                        (null == i ? void 0 : i.width) &&
                        (null == i ? void 0 : i.height) &&
                        (function (e) {
                          var t = e.sourcePos,
                            n = e.targetPos,
                            o = e.sourceWidth,
                            i = e.sourceHeight,
                            a = e.targetWidth,
                            l = e.targetHeight,
                            s = e.width,
                            u = e.height,
                            c = e.transform,
                            f = {
                              x: Math.min(t.x, n.x),
                              y: Math.min(t.y, n.y),
                              x2: Math.max(t.x + o, n.x + a),
                              y2: Math.max(t.y + i, n.y + l),
                            };
                          f.x === f.x2 && (f.x2 += 1),
                            f.y === f.y2 && (f.y2 += 1);
                          var d = (0, r.r)({
                              x: (0 - c[0]) / c[2],
                              y: (0 - c[1]) / c[2],
                              width: s / c[2],
                              height: u / c[2],
                            }),
                            h = Math.max(
                              0,
                              Math.min(d.x2, f.x2) - Math.max(d.x, f.x),
                            ),
                            p = Math.max(
                              0,
                              Math.min(d.y2, f.y2) - Math.max(d.y, f.y),
                            );
                          return Math.ceil(h * p) > 0;
                        })({
                          sourcePos: o.positionAbsolute || { x: 0, y: 0 },
                          targetPos: i.positionAbsolute || { x: 0, y: 0 },
                          sourceWidth: o.width,
                          sourceHeight: o.height,
                          targetWidth: i.width,
                          targetHeight: i.height,
                          width: n.width,
                          height: n.height,
                          transform: n.transform,
                        })
                      );
                    })
                  : n.edges;
              },
              [e, t],
            ),
          ),
          t,
          n,
        );
      }
      var Zt = function (e) {
          return {
            connectionNodeId: e.connectionNodeId,
            connectionHandleType: e.connectionHandleType,
            nodesConnectable: e.nodesConnectable,
            elementsSelectable: e.elementsSelectable,
            width: e.width,
            height: e.height,
            connectionMode: e.connectionMode,
            nodeInternals: e.nodeInternals,
          };
        },
        Ft = function (e) {
          var t = (0, r.b)(Zt, l),
            n = t.connectionNodeId,
            a = t.connectionHandleType,
            s = t.nodesConnectable,
            u = t.elementsSelectable,
            c = t.width,
            f = t.height,
            d = t.connectionMode,
            h = t.nodeInternals,
            p = Vt(e.onlyRenderVisibleElements, h, e.elevateEdgesOnSelect);
          if (!c) return null;
          var g = e.connectionLineType,
            v = e.defaultMarkerColor,
            y = e.connectionLineStyle,
            m = e.connectionLineComponent,
            b = e.connectionLineContainerStyle,
            w = n && a;
          return o.createElement(
            o.Fragment,
            null,
            p.map(function (t) {
              var n = t.level,
                a = t.edges,
                l = t.isMaxLevel;
              return o.createElement(
                "svg",
                {
                  key: n,
                  style: { zIndex: n },
                  width: c,
                  height: f,
                  className: "react-flow__edges react-flow__container",
                },
                l && o.createElement(Xt, { defaultColor: v, rfId: e.rfId }),
                o.createElement(
                  "g",
                  null,
                  a.map(function (t) {
                    var n = Ge(h, t.source),
                      a = (0, r._)(n, 3),
                      l = a[0],
                      s = a[1],
                      c = a[2],
                      f = Ge(h, t.target),
                      p = (0, r._)(f, 3),
                      g = p[0],
                      v = p[1],
                      y = p[2];
                    if (!c || !y) return null;
                    var m = t.type || "default";
                    e.edgeTypes[m] ||
                      (console.warn(
                        '[React Flow]: Edge type "'.concat(
                          m,
                          '" not found. Using fallback type "default". Help: https://reactflow.dev/error#300',
                        ),
                      ),
                      (m = "default"));
                    var b = e.edgeTypes[m] || e.edgeTypes.default,
                      w = d === r.C.Strict ? v.target : v.target || v.source,
                      _ = Ke(s.source, t.sourceHandle || null),
                      x = Ke(w, t.targetHandle || null),
                      E = (null == _ ? void 0 : _.position) || r.P.Bottom,
                      S = (null == x ? void 0 : x.position) || r.P.Top;
                    if (!_) return null;
                    if (!x) return null;
                    var O = (function (e, t, n, r, o, i) {
                        var a = Fe(n, e, t),
                          l = Fe(i, r, o);
                        return {
                          sourceX: a.x,
                          sourceY: a.y,
                          targetX: l.x,
                          targetY: l.y,
                        };
                      })(l, _, E, g, x, S),
                      C = O.sourceX,
                      P = O.sourceY,
                      A = O.targetX,
                      j = O.targetY;
                    return o.createElement(b, {
                      key: t.id,
                      id: t.id,
                      className: i([t.className, e.noPanClassName]),
                      type: m,
                      data: t.data,
                      selected: !!t.selected,
                      animated: !!t.animated,
                      hidden: !!t.hidden,
                      label: t.label,
                      labelStyle: t.labelStyle,
                      labelShowBg: t.labelShowBg,
                      labelBgStyle: t.labelBgStyle,
                      labelBgPadding: t.labelBgPadding,
                      labelBgBorderRadius: t.labelBgBorderRadius,
                      style: t.style,
                      source: t.source,
                      target: t.target,
                      sourceHandleId: t.sourceHandle,
                      targetHandleId: t.targetHandle,
                      markerEnd: t.markerEnd,
                      markerStart: t.markerStart,
                      sourceX: C,
                      sourceY: P,
                      targetX: A,
                      targetY: j,
                      sourcePosition: E,
                      targetPosition: S,
                      elementsSelectable: u,
                      onEdgeUpdate: e.onEdgeUpdate,
                      onContextMenu: e.onEdgeContextMenu,
                      onMouseEnter: e.onEdgeMouseEnter,
                      onMouseMove: e.onEdgeMouseMove,
                      onMouseLeave: e.onEdgeMouseLeave,
                      onClick: e.onEdgeClick,
                      edgeUpdaterRadius: e.edgeUpdaterRadius,
                      onEdgeDoubleClick: e.onEdgeDoubleClick,
                      onEdgeUpdateStart: e.onEdgeUpdateStart,
                      onEdgeUpdateEnd: e.onEdgeUpdateEnd,
                      rfId: e.rfId,
                    });
                  }),
                ),
              );
            }),
            w &&
              o.createElement(
                "svg",
                {
                  style: b,
                  width: c,
                  height: f,
                  className:
                    "react-flow__edges react-flow__connectionline react-flow__container",
                },
                o.createElement(Lt, {
                  connectionNodeId: n,
                  connectionHandleType: a,
                  connectionLineStyle: y,
                  connectionLineType: g,
                  isConnectable: s,
                  CustomConnectionLineComponent: m,
                }),
              ),
          );
        };
      Ft.displayName = "EdgeRenderer";
      var Kt = (0, o.memo)(Ft),
        Gt = function (e) {
          return "translate("
            .concat(e.transform[0], "px,")
            .concat(e.transform[1], "px) scale(")
            .concat(e.transform[2], ")");
        };
      function Wt(e) {
        var t = e.children,
          n = (0, r.b)(Gt);
        return o.createElement(
          "div",
          {
            className: "react-flow__viewport react-flow__container",
            style: { transform: n },
          },
          t,
        );
      }
      var Qt = function (e) {
        var t = e.nodeTypes,
          n = e.edgeTypes,
          r = e.onMove,
          i = e.onMoveStart,
          a = e.onMoveEnd,
          l = e.onInit,
          s = e.onNodeClick,
          u = e.onEdgeClick,
          c = e.onNodeDoubleClick,
          f = e.onEdgeDoubleClick,
          d = e.onNodeMouseEnter,
          h = e.onNodeMouseMove,
          g = e.onNodeMouseLeave,
          v = e.onNodeContextMenu,
          y = e.onSelectionContextMenu,
          m = e.connectionLineType,
          b = e.connectionLineStyle,
          w = e.connectionLineComponent,
          _ = e.connectionLineContainerStyle,
          x = e.selectionKeyCode,
          E = e.multiSelectionKeyCode,
          S = e.zoomActivationKeyCode,
          O = e.deleteKeyCode,
          C = e.onlyRenderVisibleElements,
          P = e.elementsSelectable,
          A = e.selectNodesOnDrag,
          j = e.translateExtent,
          M = e.minZoom,
          N = e.maxZoom,
          k = e.defaultZoom,
          D = e.defaultPosition,
          B = e.preventScrolling,
          I = e.defaultMarkerColor,
          z = e.zoomOnScroll,
          L = e.zoomOnPinch,
          T = e.panOnScroll,
          R = e.panOnScrollSpeed,
          U = e.panOnScrollMode,
          q = e.zoomOnDoubleClick,
          $ = e.panOnDrag,
          Y = e.onPaneClick,
          X = e.onPaneScroll,
          H = e.onPaneContextMenu,
          V = e.onEdgeUpdate,
          Z = e.onEdgeContextMenu,
          F = e.onEdgeMouseEnter,
          K = e.onEdgeMouseMove,
          G = e.onEdgeMouseLeave,
          W = e.edgeUpdaterRadius,
          Q = e.onEdgeUpdateStart,
          J = e.onEdgeUpdateEnd,
          ee = e.noDragClassName,
          te = e.noWheelClassName,
          ne = e.noPanClassName,
          re = e.elevateEdgesOnSelect,
          oe = e.id;
        return (
          (function (e) {
            var t = p(),
              n = (0, o.useRef)(!1);
            (0, o.useEffect)(
              function () {
                !n.current &&
                  t.viewportInitialized &&
                  e &&
                  (setTimeout(function () {
                    return e(t);
                  }, 1),
                  (n.current = !0));
              },
              [e, t.viewportInitialized],
            );
          })(l),
          o.createElement(
            At,
            {
              onPaneClick: Y,
              onPaneContextMenu: H,
              onPaneScroll: X,
              deleteKeyCode: O,
              selectionKeyCode: x,
              multiSelectionKeyCode: E,
              zoomActivationKeyCode: S,
              elementsSelectable: P,
              onMove: r,
              onMoveStart: i,
              onMoveEnd: a,
              zoomOnScroll: z,
              zoomOnPinch: L,
              zoomOnDoubleClick: q,
              panOnScroll: T,
              panOnScrollSpeed: R,
              panOnScrollMode: U,
              panOnDrag: $,
              translateExtent: j,
              minZoom: M,
              maxZoom: N,
              defaultZoom: k,
              defaultPosition: D,
              onSelectionContextMenu: y,
              preventScrolling: B,
              noDragClassName: ee,
              noWheelClassName: te,
              noPanClassName: ne,
            },
            o.createElement(
              Wt,
              null,
              o.createElement(Kt, {
                edgeTypes: n,
                onEdgeClick: u,
                onEdgeDoubleClick: f,
                connectionLineType: m,
                connectionLineStyle: b,
                connectionLineComponent: w,
                connectionLineContainerStyle: _,
                onEdgeUpdate: V,
                onlyRenderVisibleElements: C,
                onEdgeContextMenu: Z,
                onEdgeMouseEnter: F,
                onEdgeMouseMove: K,
                onEdgeMouseLeave: G,
                onEdgeUpdateStart: Q,
                onEdgeUpdateEnd: J,
                edgeUpdaterRadius: W,
                defaultMarkerColor: I,
                noPanClassName: ne,
                elevateEdgesOnSelect: !!re,
                rfId: oe,
              }),
              o.createElement(kt, {
                nodeTypes: t,
                onNodeClick: s,
                onNodeDoubleClick: c,
                onNodeMouseEnter: d,
                onNodeMouseMove: h,
                onNodeMouseLeave: g,
                onNodeContextMenu: v,
                selectNodesOnDrag: A,
                onlyRenderVisibleElements: C,
                noPanClassName: ne,
                noDragClassName: ee,
              }),
            ),
          )
        );
      };
      Qt.displayName = "GraphView";
      var Jt = (0, o.memo)(Qt),
        en = function () {
          return null;
        };
      function tn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function nn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tn(Object(n), !0).forEach(function (t) {
                (0, r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tn(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      en.displayName = "GroupNode";
      var rn = function (e) {
        var t = function (t) {
          var n = t.id,
            a = t.type,
            l = t.data,
            s = t.xPos,
            u = t.yPos,
            c = t.selected,
            f = t.onClick,
            d = t.onMouseEnter,
            h = t.onMouseMove,
            p = t.onMouseLeave,
            g = t.onContextMenu,
            v = t.onDoubleClick,
            y = t.style,
            m = t.className,
            b = t.isDraggable,
            w = t.isSelectable,
            _ = t.isConnectable,
            x = t.selectNodesOnDrag,
            E = t.sourcePosition,
            S = t.targetPosition,
            O = t.hidden,
            C = t.resizeObserver,
            P = t.dragHandle,
            A = t.zIndex,
            j = t.isParent,
            M = t.noPanClassName,
            N = t.noDragClassName,
            k = t.initialized,
            D = (0, r.u)(),
            B = (0, o.useRef)(null),
            I = (0, o.useRef)(E),
            z = (0, o.useRef)(S),
            L = (0, o.useRef)(a),
            T = w || b || f || d || h || p,
            R = (0, r.t)(n, D.getState, d),
            U = (0, r.t)(n, D.getState, h),
            q = (0, r.t)(n, D.getState, p),
            $ = (0, r.t)(n, D.getState, g),
            Y = (0, r.t)(n, D.getState, v);
          (0, o.useEffect)(
            function () {
              if (B.current && !O) {
                var e = B.current;
                return (
                  null == C || C.observe(e),
                  function () {
                    return null == C ? void 0 : C.unobserve(e);
                  }
                );
              }
            },
            [O],
          ),
            (0, o.useEffect)(
              function () {
                var e = L.current !== a,
                  t = I.current !== E,
                  r = z.current !== S;
                B.current &&
                  (e || t || r) &&
                  (e && (L.current = a),
                  t && (I.current = E),
                  r && (z.current = S),
                  D.getState().updateNodeDimensions([
                    { id: n, nodeElement: B.current, forceUpdate: !0 },
                  ]));
              },
              [n, a, E, S],
            );
          var X = wt({
            nodeRef: B,
            disabled: O || !b,
            noDragClassName: N,
            handleSelector: P,
            nodeId: n,
            isSelectable: w,
            selectNodesOnDrag: x,
          });
          return O
            ? null
            : o.createElement(
                "div",
                {
                  className: i([
                    "react-flow__node",
                    "react-flow__node-".concat(a),
                    M,
                    m,
                    { selected: c, selectable: w, parent: j },
                  ]),
                  ref: B,
                  style: nn(
                    {
                      zIndex: A,
                      transform: "translate(".concat(s, "px,").concat(u, "px)"),
                      pointerEvents: T ? "all" : "none",
                      visibility: k ? "visible" : "hidden",
                    },
                    y,
                  ),
                  onMouseEnter: R,
                  onMouseMove: U,
                  onMouseLeave: q,
                  onContextMenu: $,
                  onClick: function (e) {
                    if ((!w || (x && b) || (0, r.n)({ id: n, store: D }), f)) {
                      var t = D.getState().nodeInternals.get(n);
                      f(e, nn({}, t));
                    }
                  },
                  onDoubleClick: Y,
                  "data-testid": "rf__node-".concat(n),
                  "data-id": n,
                },
                o.createElement(
                  ve,
                  { value: n },
                  o.createElement(e, {
                    id: n,
                    data: l,
                    type: a,
                    xPos: s,
                    yPos: u,
                    selected: c,
                    isConnectable: _,
                    sourcePosition: E,
                    targetPosition: S,
                    dragging: X,
                    dragHandle: P,
                    zIndex: A,
                  }),
                ),
              );
        };
        return (t.displayName = "NodeWrapper"), (0, o.memo)(t);
      };
      function on(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function an(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? on(Object(n), !0).forEach(function (t) {
                (0, r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : on(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function ln(e) {
        var t = {
            input: rn(e.input || Me),
            default: rn(e.default || Ae),
            output: rn(e.output || ke),
            group: rn(e.group || en),
          },
          n = Object.keys(e)
            .filter(function (e) {
              return !["input", "default", "output", "group"].includes(e);
            })
            .reduce(function (t, n) {
              return (t[n] = rn(e[n] || Ae)), t;
            }, {});
        return an(an({}, t), n);
      }
      function sn(e, t) {
        (0, o.useRef)(null);
        return (0, o.useMemo)(
          function () {
            return t(e);
          },
          [e],
        );
      }
      function un(e) {
        if (e && "undefined" != typeof document) {
          var t = document.head || document.getElementsByTagName("head")[0],
            n = document.createElement("style");
          t.appendChild(n), n.appendChild(document.createTextNode(e));
        }
      }
      var cn = function (e) {
        var t = e.children,
          n = !0;
        try {
          (0, r.u)();
        } catch (e) {
          n = !1;
        }
        return n
          ? o.createElement(o.Fragment, null, t)
          : o.createElement(r.v, { createStore: r.w }, t);
      };
      cn.displayName = "ReactFlowWrapper";
      var fn = [
        "nodes",
        "edges",
        "defaultNodes",
        "defaultEdges",
        "className",
        "nodeTypes",
        "edgeTypes",
        "onNodeClick",
        "onEdgeClick",
        "onInit",
        "onMove",
        "onMoveStart",
        "onMoveEnd",
        "onConnect",
        "onConnectStart",
        "onConnectStop",
        "onConnectEnd",
        "onClickConnectStart",
        "onClickConnectStop",
        "onClickConnectEnd",
        "onNodeMouseEnter",
        "onNodeMouseMove",
        "onNodeMouseLeave",
        "onNodeContextMenu",
        "onNodeDoubleClick",
        "onNodeDragStart",
        "onNodeDrag",
        "onNodeDragStop",
        "onNodesDelete",
        "onEdgesDelete",
        "onSelectionChange",
        "onSelectionDragStart",
        "onSelectionDrag",
        "onSelectionDragStop",
        "onSelectionContextMenu",
        "connectionMode",
        "connectionLineType",
        "connectionLineStyle",
        "connectionLineComponent",
        "connectionLineContainerStyle",
        "deleteKeyCode",
        "selectionKeyCode",
        "multiSelectionKeyCode",
        "zoomActivationKeyCode",
        "snapToGrid",
        "snapGrid",
        "onlyRenderVisibleElements",
        "selectNodesOnDrag",
        "nodesDraggable",
        "nodesConnectable",
        "elementsSelectable",
        "minZoom",
        "maxZoom",
        "defaultZoom",
        "defaultPosition",
        "translateExtent",
        "preventScrolling",
        "nodeExtent",
        "defaultMarkerColor",
        "zoomOnScroll",
        "zoomOnPinch",
        "panOnScroll",
        "panOnScrollSpeed",
        "panOnScrollMode",
        "zoomOnDoubleClick",
        "panOnDrag",
        "onPaneClick",
        "onPaneScroll",
        "onPaneContextMenu",
        "children",
        "onEdgeUpdate",
        "onEdgeContextMenu",
        "onEdgeDoubleClick",
        "onEdgeMouseEnter",
        "onEdgeMouseMove",
        "onEdgeMouseLeave",
        "onEdgeUpdateStart",
        "onEdgeUpdateEnd",
        "edgeUpdaterRadius",
        "onNodesChange",
        "onEdgesChange",
        "noDragClassName",
        "noWheelClassName",
        "noPanClassName",
        "fitView",
        "fitViewOptions",
        "connectOnClick",
        "attributionPosition",
        "proOptions",
        "defaultEdgeOptions",
        "elevateEdgesOnSelect",
      ];
      function dn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function hn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? dn(Object(n), !0).forEach(function (t) {
                (0, r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : dn(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      un(
        ".react-flow{height:100%;overflow:hidden;position:relative;width:100%}.react-flow__container{height:100%;left:0;position:absolute;top:0;width:100%}.react-flow__pane{z-index:1}.react-flow__viewport{pointer-events:none;transform-origin:0 0;z-index:2}.react-flow__renderer{z-index:4}.react-flow__selectionpane{z-index:5}.react-flow .react-flow__edges{overflow:visible;pointer-events:none}.react-flow .react-flow__connectionline{z-index:1001}.react-flow__edge{pointer-events:visibleStroke}.react-flow__edge.inactive{pointer-events:none}@-webkit-keyframes dashdraw{0%{stroke-dashoffset:10}}@keyframes dashdraw{0%{stroke-dashoffset:10}}.react-flow__edge-path{fill:none}.react-flow__edge-textwrapper{pointer-events:all}.react-flow__edge-text{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.react-flow__connection{pointer-events:none}.react-flow__connection .animated{stroke-dasharray:5;-webkit-animation:dashdraw .5s linear infinite;animation:dashdraw .5s linear infinite}.react-flow__connection-path{fill:none}.react-flow__nodes{pointer-events:none;transform-origin:0 0}.react-flow__node{box-sizing:border-box;pointer-events:all;position:absolute;transform-origin:0 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.react-flow__nodesselection{pointer-events:none;transform-origin:left top;z-index:3}.react-flow__nodesselection-rect{cursor:-webkit-grab;cursor:grab;pointer-events:all;position:absolute}.react-flow__handle{pointer-events:none;position:absolute}.react-flow__handle.connectable{pointer-events:all}.react-flow__handle-bottom{bottom:-4px;left:50%;top:auto;transform:translate(-50%)}.react-flow__handle-top{left:50%;top:-4px;transform:translate(-50%)}.react-flow__handle-left{left:-4px;top:50%;transform:translateY(-50%)}.react-flow__handle-right{right:-4px;top:50%;transform:translateY(-50%)}.react-flow__edgeupdater{cursor:move;pointer-events:all}.react-flow__controls{bottom:20px;left:15px;position:absolute;z-index:5}.react-flow__controls-button{border:none;height:24px;width:24px}.react-flow__controls-button svg{width:100%}.react-flow__minimap{bottom:20px;position:absolute;right:15px;z-index:5}.react-flow__attribution{background:hsla(0,0%,100%,.5);color:#999;font-size:10px;padding:2px 3px;position:absolute;z-index:1000}.react-flow__attribution a{color:#555;text-decoration:none}.react-flow__attribution.top{top:0}.react-flow__attribution.bottom{bottom:0}.react-flow__attribution.left{left:0}.react-flow__attribution.right{right:0}.react-flow__attribution.center{left:50%;transform:translateX(-50%)}",
      ),
        un(
          ".react-flow__edge.selected .react-flow__edge-path{stroke:#555}.react-flow__edge.animated path{stroke-dasharray:5;-webkit-animation:dashdraw .5s linear infinite;animation:dashdraw .5s linear infinite}.react-flow__edge.updating .react-flow__edge-path{stroke:#777}.react-flow__edge-path{stroke:#b1b1b7;stroke-width:1}.react-flow__edge-text{font-size:10px}.react-flow__edge-textbg{fill:#fff}.react-flow__connection-path{stroke:#b1b1b7;stroke-width:1}.react-flow__node{cursor:-webkit-grab;cursor:grab}.react-flow__node-default,.react-flow__node-group,.react-flow__node-input,.react-flow__node-output{background:#fff;border:1px solid #1a192b;border-radius:3px;color:#222;font-size:12px;padding:10px;text-align:center;width:150px}.react-flow__node-default.selected,.react-flow__node-group.selected,.react-flow__node-input.selected,.react-flow__node-output.selected{box-shadow:0 0 0 .5px #1a192b}.react-flow__node-default .react-flow__handle,.react-flow__node-group .react-flow__handle,.react-flow__node-input .react-flow__handle,.react-flow__node-output .react-flow__handle{background:#1a192b}.react-flow__node-default.selectable:hover,.react-flow__node-group.selectable:hover,.react-flow__node-input.selectable:hover,.react-flow__node-output.selectable:hover{box-shadow:0 1px 4px 1px rgba(0,0,0,.08)}.react-flow__node-default.selectable.selected,.react-flow__node-group.selectable.selected,.react-flow__node-input.selectable.selected,.react-flow__node-output.selectable.selected{box-shadow:0 0 0 .5px #1a192b}.react-flow__node-group{background:hsla(0,0%,94%,.25);border-color:#1a192b}.react-flow__nodesselection-rect,.react-flow__selection{background:rgba(0,89,220,.08);border:1px dotted rgba(0,89,220,.8)}.react-flow__handle{background:#555;border:1px solid #fff;border-radius:100%;height:6px;width:6px}.react-flow__handle.connectable{cursor:crosshair}.react-flow__minimap{background-color:#fff}.react-flow__controls{box-shadow:0 0 2px 1px rgba(0,0,0,.08)}.react-flow__controls-button{align-items:center;background:#fefefe;border-bottom:1px solid #eee;box-sizing:content-box;cursor:pointer;display:flex;height:16px;justify-content:center;padding:5px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:16px}.react-flow__controls-button svg{max-height:12px;max-width:12px}.react-flow__controls-button:hover{background:#f4f4f4}",
        );
      var pn = { input: Me, default: Ae, output: ke },
        gn = {
          default: pe,
          straight: ce,
          step: ue,
          smoothstep: ae,
          simplebezier: V,
        },
        vn = [15, 15],
        yn = [0, 0],
        mn = (0, o.forwardRef)(function (e, t) {
          var n = e.nodes,
            a = e.edges,
            l = e.defaultNodes,
            s = e.defaultEdges,
            u = e.className,
            c = e.nodeTypes,
            f = void 0 === c ? pn : c,
            d = e.edgeTypes,
            h = void 0 === d ? gn : d,
            p = e.onNodeClick,
            v = e.onEdgeClick,
            y = e.onInit,
            m = e.onMove,
            b = e.onMoveStart,
            w = e.onMoveEnd,
            _ = e.onConnect,
            x = e.onConnectStart,
            E = e.onConnectStop,
            S = e.onConnectEnd,
            O = e.onClickConnectStart,
            C = e.onClickConnectStop,
            P = e.onClickConnectEnd,
            A = e.onNodeMouseEnter,
            j = e.onNodeMouseMove,
            M = e.onNodeMouseLeave,
            N = e.onNodeContextMenu,
            k = e.onNodeDoubleClick,
            D = e.onNodeDragStart,
            B = e.onNodeDrag,
            I = e.onNodeDragStop,
            z = e.onNodesDelete,
            L = e.onEdgesDelete,
            R = e.onSelectionChange,
            U = e.onSelectionDragStart,
            q = e.onSelectionDrag,
            $ = e.onSelectionDragStop,
            Y = e.onSelectionContextMenu,
            X = e.connectionMode,
            H = void 0 === X ? r.C.Strict : X,
            V = e.connectionLineType,
            Z = void 0 === V ? r.q.Bezier : V,
            F = e.connectionLineStyle,
            K = e.connectionLineComponent,
            G = e.connectionLineContainerStyle,
            W = e.deleteKeyCode,
            Q = void 0 === W ? "Backspace" : W,
            J = e.selectionKeyCode,
            ee = void 0 === J ? "Shift" : J,
            te = e.multiSelectionKeyCode,
            ne = void 0 === te ? "Meta" : te,
            re = e.zoomActivationKeyCode,
            oe = void 0 === re ? "Meta" : re,
            ie = e.snapToGrid,
            ae = void 0 !== ie && ie,
            le = e.snapGrid,
            se = void 0 === le ? vn : le,
            ue = e.onlyRenderVisibleElements,
            ce = void 0 !== ue && ue,
            fe = e.selectNodesOnDrag,
            de = void 0 === fe || fe,
            he = e.nodesDraggable,
            pe = e.nodesConnectable,
            ge = e.elementsSelectable,
            ve = e.minZoom,
            ye = void 0 === ve ? 0.5 : ve,
            me = e.maxZoom,
            be = void 0 === me ? 2 : me,
            we = e.defaultZoom,
            _e = void 0 === we ? 1 : we,
            xe = e.defaultPosition,
            Ee = void 0 === xe ? yn : xe,
            Se = e.translateExtent,
            Oe = void 0 === Se ? r.x : Se,
            Ce = e.preventScrolling,
            Pe = void 0 === Ce || Ce,
            Ae = e.nodeExtent,
            je = e.defaultMarkerColor,
            Me = void 0 === je ? "#b1b1b7" : je,
            Ne = e.zoomOnScroll,
            ke = void 0 === Ne || Ne,
            De = e.zoomOnPinch,
            Be = void 0 === De || De,
            Ie = e.panOnScroll,
            Le = void 0 !== Ie && Ie,
            Te = e.panOnScrollSpeed,
            Re = void 0 === Te ? 0.5 : Te,
            qe = e.panOnScrollMode,
            $e = void 0 === qe ? r.h.Free : qe,
            Ye = e.zoomOnDoubleClick,
            Xe = void 0 === Ye || Ye,
            He = e.panOnDrag,
            Ve = void 0 === He || He,
            Fe = e.onPaneClick,
            Ke = e.onPaneScroll,
            Ge = e.onPaneContextMenu,
            We = e.children,
            Qe = e.onEdgeUpdate,
            Je = e.onEdgeContextMenu,
            et = e.onEdgeDoubleClick,
            tt = e.onEdgeMouseEnter,
            nt = e.onEdgeMouseMove,
            rt = e.onEdgeMouseLeave,
            ot = e.onEdgeUpdateStart,
            it = e.onEdgeUpdateEnd,
            at = e.edgeUpdaterRadius,
            lt = void 0 === at ? 10 : at,
            st = e.onNodesChange,
            ut = e.onEdgesChange,
            ct = e.noDragClassName,
            ft = void 0 === ct ? "nodrag" : ct,
            dt = e.noWheelClassName,
            ht = void 0 === dt ? "nowheel" : dt,
            pt = e.noPanClassName,
            gt = void 0 === pt ? "nopan" : pt,
            vt = e.fitView,
            yt = void 0 !== vt && vt,
            mt = e.fitViewOptions,
            bt = e.connectOnClick,
            wt = void 0 === bt || bt,
            _t = e.attributionPosition,
            xt = e.proOptions,
            Et = e.defaultEdgeOptions,
            St = e.elevateEdgesOnSelect,
            Ot = void 0 !== St && St,
            Ct = g(e, fn),
            Pt = sn(f, ln),
            At = sn(h, Ze);
          return o.createElement(
            "div",
            hn(hn({}, Ct), {}, { ref: t, className: i(["react-flow", u]) }),
            o.createElement(
              cn,
              null,
              o.createElement(Jt, {
                onInit: y,
                onMove: m,
                onMoveStart: b,
                onMoveEnd: w,
                onNodeClick: p,
                onEdgeClick: v,
                onNodeMouseEnter: A,
                onNodeMouseMove: j,
                onNodeMouseLeave: M,
                onNodeContextMenu: N,
                onNodeDoubleClick: k,
                nodeTypes: Pt,
                edgeTypes: At,
                connectionLineType: Z,
                connectionLineStyle: F,
                connectionLineComponent: K,
                connectionLineContainerStyle: G,
                selectionKeyCode: ee,
                deleteKeyCode: Q,
                multiSelectionKeyCode: ne,
                zoomActivationKeyCode: oe,
                onlyRenderVisibleElements: ce,
                selectNodesOnDrag: de,
                translateExtent: Oe,
                minZoom: ye,
                maxZoom: be,
                defaultZoom: _e,
                defaultPosition: Ee,
                preventScrolling: Pe,
                zoomOnScroll: ke,
                zoomOnPinch: Be,
                zoomOnDoubleClick: Xe,
                panOnScroll: Le,
                panOnScrollSpeed: Re,
                panOnScrollMode: $e,
                panOnDrag: Ve,
                onPaneClick: Fe,
                onPaneScroll: Ke,
                onPaneContextMenu: Ge,
                onSelectionContextMenu: Y,
                onEdgeUpdate: Qe,
                onEdgeContextMenu: Je,
                onEdgeDoubleClick: et,
                onEdgeMouseEnter: tt,
                onEdgeMouseMove: nt,
                onEdgeMouseLeave: rt,
                onEdgeUpdateStart: ot,
                onEdgeUpdateEnd: it,
                edgeUpdaterRadius: lt,
                defaultMarkerColor: Me,
                noDragClassName: ft,
                noWheelClassName: ht,
                noPanClassName: gt,
                elevateEdgesOnSelect: Ot,
                id: null == Ct ? void 0 : Ct.id,
              }),
              o.createElement(Ue, {
                nodes: n,
                edges: a,
                defaultNodes: l,
                defaultEdges: s,
                onConnect: _,
                onConnectStart: x,
                onConnectStop: E,
                onConnectEnd: S,
                onClickConnectStart: O,
                onClickConnectStop: C,
                onClickConnectEnd: P,
                nodesDraggable: he,
                nodesConnectable: pe,
                elementsSelectable: ge,
                minZoom: ye,
                maxZoom: be,
                nodeExtent: Ae,
                onNodesChange: st,
                onEdgesChange: ut,
                snapToGrid: ae,
                snapGrid: se,
                connectionMode: H,
                translateExtent: Oe,
                connectOnClick: wt,
                defaultEdgeOptions: Et,
                fitView: yt,
                fitViewOptions: mt,
                onNodesDelete: z,
                onEdgesDelete: L,
                onNodeDragStart: D,
                onNodeDrag: B,
                onNodeDragStop: I,
                onSelectionDrag: q,
                onSelectionDragStart: U,
                onSelectionDragStop: $,
              }),
              R && o.createElement(ze, { onSelectionChange: R }),
              We,
              o.createElement(T, { proOptions: xt, position: _t }),
            ),
          );
        });
      mn.displayName = "ReactFlow";
      var bn = function (e) {
        var t = e.children;
        return o.createElement(r.v, { createStore: r.w }, t);
      };
      function wn(e) {
        return function (t) {
          var n = (0, o.useState)(t),
            i = (0, r._)(n, 2),
            a = i[0],
            l = i[1],
            s = (0, o.useCallback)(function (t) {
              return l(function (n) {
                return e(t, n);
              });
            }, []);
          return [a, l, s];
        };
      }
      bn.displayName = "ReactFlowProvider";
      var _n = wn(r.y),
        xn = wn(r.z);
    },
    64434: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => a });
      var r = n(90626),
        o = n(93398),
        i =
          (n(35796),
          function (e) {
            return e.updateNodeDimensions;
          });
      function a() {
        var e = (0, o.u)(),
          t = (0, o.b)(i);
        return (0, r.useCallback)(function (n) {
          var r,
            o =
              null === (r = e.getState().domNode) || void 0 === r
                ? void 0
                : r.querySelector(
                    '.react-flow__node[data-id="'.concat(n, '"]'),
                  );
          o &&
            requestAnimationFrame(function () {
              return t([{ id: n, nodeElement: o, forceUpdate: !0 }]);
            });
        }, []);
      }
    },
    66251: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => s });
      var r = n(58920),
        o = n(76549),
        i = n(36058),
        a = n(55241),
        l = n(5608),
        s = (0, r.gu)({
          chartName: "LineChart",
          GraphicalChild: o.N,
          axisComponents: [
            { axisType: "xAxis", AxisComp: i.W },
            { axisType: "yAxis", AxisComp: a.h },
          ],
          formatAxisMap: l.pr,
        });
    },
    26721: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => s });
      var r = { value: () => {} };
      function o() {
        for (var e, t = 0, n = arguments.length, r = {}; t < n; ++t) {
          if (!(e = arguments[t] + "") || e in r || /[\s.]/.test(e))
            throw new Error("illegal type: " + e);
          r[e] = [];
        }
        return new i(r);
      }
      function i(e) {
        this._ = e;
      }
      function a(e, t) {
        for (var n, r = 0, o = e.length; r < o; ++r)
          if ((n = e[r]).name === t) return n.value;
      }
      function l(e, t, n) {
        for (var o = 0, i = e.length; o < i; ++o)
          if (e[o].name === t) {
            (e[o] = r), (e = e.slice(0, o).concat(e.slice(o + 1)));
            break;
          }
        return null != n && e.push({ name: t, value: n }), e;
      }
      i.prototype = o.prototype = {
        constructor: i,
        on: function (e, t) {
          var n,
            r,
            o = this._,
            i =
              ((r = o),
              (e + "")
                .trim()
                .split(/^|\s+/)
                .map(function (e) {
                  var t = "",
                    n = e.indexOf(".");
                  if (
                    (n >= 0 && ((t = e.slice(n + 1)), (e = e.slice(0, n))),
                    e && !r.hasOwnProperty(e))
                  )
                    throw new Error("unknown type: " + e);
                  return { type: e, name: t };
                })),
            s = -1,
            u = i.length;
          if (!(arguments.length < 2)) {
            if (null != t && "function" != typeof t)
              throw new Error("invalid callback: " + t);
            for (; ++s < u; )
              if ((n = (e = i[s]).type)) o[n] = l(o[n], e.name, t);
              else if (null == t) for (n in o) o[n] = l(o[n], e.name, null);
            return this;
          }
          for (; ++s < u; )
            if ((n = (e = i[s]).type) && (n = a(o[n], e.name))) return n;
        },
        copy: function () {
          var e = {},
            t = this._;
          for (var n in t) e[n] = t[n].slice();
          return new i(e);
        },
        call: function (e, t) {
          if ((n = arguments.length - 2) > 0)
            for (var n, r, o = new Array(n), i = 0; i < n; ++i)
              o[i] = arguments[i + 2];
          if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
          for (i = 0, n = (r = this._[e]).length; i < n; ++i)
            r[i].value.apply(t, o);
        },
        apply: function (e, t, n) {
          if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
          for (var r = this._[e], o = 0, i = r.length; o < i; ++o)
            r[o].value.apply(t, n);
        },
      };
      const s = o;
    },
    81306: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => i, y: () => a });
      var r = n(92231),
        o = n(522);
      function i(e) {
        var t = e.document.documentElement,
          n = (0, r.A)(e).on("dragstart.drag", o.Ay, o.Rw);
        "onselectstart" in t
          ? n.on("selectstart.drag", o.Ay, o.Rw)
          : ((t.__noselect = t.style.MozUserSelect),
            (t.style.MozUserSelect = "none"));
      }
      function a(e, t) {
        var n = e.document.documentElement,
          i = (0, r.A)(e).on("dragstart.drag", null);
        t &&
          (i.on("click.drag", o.Ay, o.Rw),
          setTimeout(function () {
            i.on("click.drag", null);
          }, 0)),
          "onselectstart" in n
            ? i.on("selectstart.drag", null)
            : ((n.style.MozUserSelect = n.__noselect), delete n.__noselect);
      }
    },
    522: (e, t, n) => {
      "use strict";
      n.d(t, { Ay: () => a, GK: () => i, Rw: () => o, vr: () => r });
      const r = { passive: !1 },
        o = { capture: !0, passive: !1 };
      function i(e) {
        e.stopImmediatePropagation();
      }
      function a(e) {
        e.preventDefault(), e.stopImmediatePropagation();
      }
    },
    42173: (e, t, n) => {
      "use strict";
      function r(e) {
        return function () {
          return this.matches(e);
        };
      }
      function o(e) {
        return function (t) {
          return t.matches(e);
        };
      }
      n.d(t, { A: () => r, j: () => o });
    },
    58116: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => o });
      var r = n(55659);
      function o(e) {
        var t = (e += ""),
          n = t.indexOf(":");
        return (
          n >= 0 && "xmlns" !== (t = e.slice(0, n)) && (e = e.slice(n + 1)),
          r.A.hasOwnProperty(t) ? { space: r.A[t], local: e } : e
        );
      }
    },
    55659: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => o, g: () => r });
      var r = "http://www.w3.org/1999/xhtml";
      const o = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: r,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/",
      };
    },
    16180: (e, t, n) => {
      "use strict";
      function r(e, t) {
        if (
          ((e = (function (e) {
            let t;
            for (; (t = e.sourceEvent); ) e = t;
            return e;
          })(e)),
          void 0 === t && (t = e.currentTarget),
          t)
        ) {
          var n = t.ownerSVGElement || t;
          if (n.createSVGPoint) {
            var r = n.createSVGPoint();
            return (
              (r.x = e.clientX),
              (r.y = e.clientY),
              [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
            );
          }
          if (t.getBoundingClientRect) {
            var o = t.getBoundingClientRect();
            return [
              e.clientX - o.left - t.clientLeft,
              e.clientY - o.top - t.clientTop,
            ];
          }
        }
        return [e.pageX, e.pageY];
      }
      n.d(t, { A: () => r });
    },
    92231: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => o });
      var r = n(80237);
      function o(e) {
        return "string" == typeof e
          ? new r.LN([[document.querySelector(e)]], [document.documentElement])
          : new r.LN([[e]], r.zr);
      }
    },
    80237: (e, t, n) => {
      "use strict";
      n.d(t, { LN: () => ae, Ay: () => se, zr: () => ie });
      var r = n(13742);
      var o = n(90795);
      function i(e) {
        return function () {
          return null == (t = e.apply(this, arguments))
            ? []
            : Array.isArray(t)
              ? t
              : Array.from(t);
          var t;
        };
      }
      var a = n(42173),
        l = Array.prototype.find;
      function s() {
        return this.firstElementChild;
      }
      var u = Array.prototype.filter;
      function c() {
        return Array.from(this.children);
      }
      function f(e) {
        return new Array(e.length);
      }
      function d(e, t) {
        (this.ownerDocument = e.ownerDocument),
          (this.namespaceURI = e.namespaceURI),
          (this._next = null),
          (this._parent = e),
          (this.__data__ = t);
      }
      function h(e, t, n, r, o, i) {
        for (var a, l = 0, s = t.length, u = i.length; l < u; ++l)
          (a = t[l])
            ? ((a.__data__ = i[l]), (r[l] = a))
            : (n[l] = new d(e, i[l]));
        for (; l < s; ++l) (a = t[l]) && (o[l] = a);
      }
      function p(e, t, n, r, o, i, a) {
        var l,
          s,
          u,
          c = new Map(),
          f = t.length,
          h = i.length,
          p = new Array(f);
        for (l = 0; l < f; ++l)
          (s = t[l]) &&
            ((p[l] = u = a.call(s, s.__data__, l, t) + ""),
            c.has(u) ? (o[l] = s) : c.set(u, s));
        for (l = 0; l < h; ++l)
          (u = a.call(e, i[l], l, i) + ""),
            (s = c.get(u))
              ? ((r[l] = s), (s.__data__ = i[l]), c.delete(u))
              : (n[l] = new d(e, i[l]));
        for (l = 0; l < f; ++l) (s = t[l]) && c.get(p[l]) === s && (o[l] = s);
      }
      function g(e) {
        return e.__data__;
      }
      function v(e) {
        return "object" == typeof e && "length" in e ? e : Array.from(e);
      }
      function y(e, t) {
        return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
      }
      d.prototype = {
        constructor: d,
        appendChild: function (e) {
          return this._parent.insertBefore(e, this._next);
        },
        insertBefore: function (e, t) {
          return this._parent.insertBefore(e, t);
        },
        querySelector: function (e) {
          return this._parent.querySelector(e);
        },
        querySelectorAll: function (e) {
          return this._parent.querySelectorAll(e);
        },
      };
      var m = n(58116);
      function b(e) {
        return function () {
          this.removeAttribute(e);
        };
      }
      function w(e) {
        return function () {
          this.removeAttributeNS(e.space, e.local);
        };
      }
      function _(e, t) {
        return function () {
          this.setAttribute(e, t);
        };
      }
      function x(e, t) {
        return function () {
          this.setAttributeNS(e.space, e.local, t);
        };
      }
      function E(e, t) {
        return function () {
          var n = t.apply(this, arguments);
          null == n ? this.removeAttribute(e) : this.setAttribute(e, n);
        };
      }
      function S(e, t) {
        return function () {
          var n = t.apply(this, arguments);
          null == n
            ? this.removeAttributeNS(e.space, e.local)
            : this.setAttributeNS(e.space, e.local, n);
        };
      }
      var O = n(32803);
      function C(e) {
        return function () {
          delete this[e];
        };
      }
      function P(e, t) {
        return function () {
          this[e] = t;
        };
      }
      function A(e, t) {
        return function () {
          var n = t.apply(this, arguments);
          null == n ? delete this[e] : (this[e] = n);
        };
      }
      function j(e) {
        return e.trim().split(/^|\s+/);
      }
      function M(e) {
        return e.classList || new N(e);
      }
      function N(e) {
        (this._node = e), (this._names = j(e.getAttribute("class") || ""));
      }
      function k(e, t) {
        for (var n = M(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
      }
      function D(e, t) {
        for (var n = M(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
      }
      function B(e) {
        return function () {
          k(this, e);
        };
      }
      function I(e) {
        return function () {
          D(this, e);
        };
      }
      function z(e, t) {
        return function () {
          (t.apply(this, arguments) ? k : D)(this, e);
        };
      }
      function L() {
        this.textContent = "";
      }
      function T(e) {
        return function () {
          this.textContent = e;
        };
      }
      function R(e) {
        return function () {
          var t = e.apply(this, arguments);
          this.textContent = null == t ? "" : t;
        };
      }
      function U() {
        this.innerHTML = "";
      }
      function q(e) {
        return function () {
          this.innerHTML = e;
        };
      }
      function $(e) {
        return function () {
          var t = e.apply(this, arguments);
          this.innerHTML = null == t ? "" : t;
        };
      }
      function Y() {
        this.nextSibling && this.parentNode.appendChild(this);
      }
      function X() {
        this.previousSibling &&
          this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }
      N.prototype = {
        add: function (e) {
          this._names.indexOf(e) < 0 &&
            (this._names.push(e),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        remove: function (e) {
          var t = this._names.indexOf(e);
          t >= 0 &&
            (this._names.splice(t, 1),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        contains: function (e) {
          return this._names.indexOf(e) >= 0;
        },
      };
      var H = n(55659);
      function V(e) {
        return function () {
          var t = this.ownerDocument,
            n = this.namespaceURI;
          return n === H.g && t.documentElement.namespaceURI === H.g
            ? t.createElement(e)
            : t.createElementNS(n, e);
        };
      }
      function Z(e) {
        return function () {
          return this.ownerDocument.createElementNS(e.space, e.local);
        };
      }
      function F(e) {
        var t = (0, m.A)(e);
        return (t.local ? Z : V)(t);
      }
      function K() {
        return null;
      }
      function G() {
        var e = this.parentNode;
        e && e.removeChild(this);
      }
      function W() {
        var e = this.cloneNode(!1),
          t = this.parentNode;
        return t ? t.insertBefore(e, this.nextSibling) : e;
      }
      function Q() {
        var e = this.cloneNode(!0),
          t = this.parentNode;
        return t ? t.insertBefore(e, this.nextSibling) : e;
      }
      function J(e) {
        return function () {
          var t = this.__on;
          if (t) {
            for (var n, r = 0, o = -1, i = t.length; r < i; ++r)
              (n = t[r]),
                (e.type && n.type !== e.type) || n.name !== e.name
                  ? (t[++o] = n)
                  : this.removeEventListener(n.type, n.listener, n.options);
            ++o ? (t.length = o) : delete this.__on;
          }
        };
      }
      function ee(e, t, n) {
        return function () {
          var r,
            o = this.__on,
            i = (function (e) {
              return function (t) {
                e.call(this, t, this.__data__);
              };
            })(t);
          if (o)
            for (var a = 0, l = o.length; a < l; ++a)
              if ((r = o[a]).type === e.type && r.name === e.name)
                return (
                  this.removeEventListener(r.type, r.listener, r.options),
                  this.addEventListener(
                    r.type,
                    (r.listener = i),
                    (r.options = n),
                  ),
                  void (r.value = t)
                );
          this.addEventListener(e.type, i, n),
            (r = {
              type: e.type,
              name: e.name,
              value: t,
              listener: i,
              options: n,
            }),
            o ? o.push(r) : (this.__on = [r]);
        };
      }
      var te = n(18795);
      function ne(e, t, n) {
        var r = (0, te.A)(e),
          o = r.CustomEvent;
        "function" == typeof o
          ? (o = new o(t, n))
          : ((o = r.document.createEvent("Event")),
            n
              ? (o.initEvent(t, n.bubbles, n.cancelable), (o.detail = n.detail))
              : o.initEvent(t, !1, !1)),
          e.dispatchEvent(o);
      }
      function re(e, t) {
        return function () {
          return ne(this, e, t);
        };
      }
      function oe(e, t) {
        return function () {
          return ne(this, e, t.apply(this, arguments));
        };
      }
      var ie = [null];
      function ae(e, t) {
        (this._groups = e), (this._parents = t);
      }
      function le() {
        return new ae([[document.documentElement]], ie);
      }
      ae.prototype = le.prototype = {
        constructor: ae,
        select: function (e) {
          "function" != typeof e && (e = (0, r.A)(e));
          for (
            var t = this._groups, n = t.length, o = new Array(n), i = 0;
            i < n;
            ++i
          )
            for (
              var a,
                l,
                s = t[i],
                u = s.length,
                c = (o[i] = new Array(u)),
                f = 0;
              f < u;
              ++f
            )
              (a = s[f]) &&
                (l = e.call(a, a.__data__, f, s)) &&
                ("__data__" in a && (l.__data__ = a.__data__), (c[f] = l));
          return new ae(o, this._parents);
        },
        selectAll: function (e) {
          e = "function" == typeof e ? i(e) : (0, o.A)(e);
          for (
            var t = this._groups, n = t.length, r = [], a = [], l = 0;
            l < n;
            ++l
          )
            for (var s, u = t[l], c = u.length, f = 0; f < c; ++f)
              (s = u[f]) && (r.push(e.call(s, s.__data__, f, u)), a.push(s));
          return new ae(r, a);
        },
        selectChild: function (e) {
          return this.select(
            null == e
              ? s
              : (function (e) {
                  return function () {
                    return l.call(this.children, e);
                  };
                })("function" == typeof e ? e : (0, a.j)(e)),
          );
        },
        selectChildren: function (e) {
          return this.selectAll(
            null == e
              ? c
              : (function (e) {
                  return function () {
                    return u.call(this.children, e);
                  };
                })("function" == typeof e ? e : (0, a.j)(e)),
          );
        },
        filter: function (e) {
          "function" != typeof e && (e = (0, a.A)(e));
          for (
            var t = this._groups, n = t.length, r = new Array(n), o = 0;
            o < n;
            ++o
          )
            for (
              var i, l = t[o], s = l.length, u = (r[o] = []), c = 0;
              c < s;
              ++c
            )
              (i = l[c]) && e.call(i, i.__data__, c, l) && u.push(i);
          return new ae(r, this._parents);
        },
        data: function (e, t) {
          if (!arguments.length) return Array.from(this, g);
          var n,
            r = t ? p : h,
            o = this._parents,
            i = this._groups;
          "function" != typeof e &&
            ((n = e),
            (e = function () {
              return n;
            }));
          for (
            var a = i.length,
              l = new Array(a),
              s = new Array(a),
              u = new Array(a),
              c = 0;
            c < a;
            ++c
          ) {
            var f = o[c],
              d = i[c],
              y = d.length,
              m = v(e.call(f, f && f.__data__, c, o)),
              b = m.length,
              w = (s[c] = new Array(b)),
              _ = (l[c] = new Array(b));
            r(f, d, w, _, (u[c] = new Array(y)), m, t);
            for (var x, E, S = 0, O = 0; S < b; ++S)
              if ((x = w[S])) {
                for (S >= O && (O = S + 1); !(E = _[O]) && ++O < b; );
                x._next = E || null;
              }
          }
          return ((l = new ae(l, o))._enter = s), (l._exit = u), l;
        },
        enter: function () {
          return new ae(this._enter || this._groups.map(f), this._parents);
        },
        exit: function () {
          return new ae(this._exit || this._groups.map(f), this._parents);
        },
        join: function (e, t, n) {
          var r = this.enter(),
            o = this,
            i = this.exit();
          return (
            "function" == typeof e
              ? (r = e(r)) && (r = r.selection())
              : (r = r.append(e + "")),
            null != t && (o = t(o)) && (o = o.selection()),
            null == n ? i.remove() : n(i),
            r && o ? r.merge(o).order() : o
          );
        },
        merge: function (e) {
          for (
            var t = e.selection ? e.selection() : e,
              n = this._groups,
              r = t._groups,
              o = n.length,
              i = r.length,
              a = Math.min(o, i),
              l = new Array(o),
              s = 0;
            s < a;
            ++s
          )
            for (
              var u,
                c = n[s],
                f = r[s],
                d = c.length,
                h = (l[s] = new Array(d)),
                p = 0;
              p < d;
              ++p
            )
              (u = c[p] || f[p]) && (h[p] = u);
          for (; s < o; ++s) l[s] = n[s];
          return new ae(l, this._parents);
        },
        selection: function () {
          return this;
        },
        order: function () {
          for (var e = this._groups, t = -1, n = e.length; ++t < n; )
            for (var r, o = e[t], i = o.length - 1, a = o[i]; --i >= 0; )
              (r = o[i]) &&
                (a &&
                  4 ^ r.compareDocumentPosition(a) &&
                  a.parentNode.insertBefore(r, a),
                (a = r));
          return this;
        },
        sort: function (e) {
          function t(t, n) {
            return t && n ? e(t.__data__, n.__data__) : !t - !n;
          }
          e || (e = y);
          for (
            var n = this._groups, r = n.length, o = new Array(r), i = 0;
            i < r;
            ++i
          ) {
            for (
              var a, l = n[i], s = l.length, u = (o[i] = new Array(s)), c = 0;
              c < s;
              ++c
            )
              (a = l[c]) && (u[c] = a);
            u.sort(t);
          }
          return new ae(o, this._parents).order();
        },
        call: function () {
          var e = arguments[0];
          return (arguments[0] = this), e.apply(null, arguments), this;
        },
        nodes: function () {
          return Array.from(this);
        },
        node: function () {
          for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
            for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
              var a = r[o];
              if (a) return a;
            }
          return null;
        },
        size: function () {
          let e = 0;
          for (const t of this) ++e;
          return e;
        },
        empty: function () {
          return !this.node();
        },
        each: function (e) {
          for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
            for (var o, i = t[n], a = 0, l = i.length; a < l; ++a)
              (o = i[a]) && e.call(o, o.__data__, a, i);
          return this;
        },
        attr: function (e, t) {
          var n = (0, m.A)(e);
          if (arguments.length < 2) {
            var r = this.node();
            return n.local
              ? r.getAttributeNS(n.space, n.local)
              : r.getAttribute(n);
          }
          return this.each(
            (null == t
              ? n.local
                ? w
                : b
              : "function" == typeof t
                ? n.local
                  ? S
                  : E
                : n.local
                  ? x
                  : _)(n, t),
          );
        },
        style: O.A,
        property: function (e, t) {
          return arguments.length > 1
            ? this.each((null == t ? C : "function" == typeof t ? A : P)(e, t))
            : this.node()[e];
        },
        classed: function (e, t) {
          var n = j(e + "");
          if (arguments.length < 2) {
            for (var r = M(this.node()), o = -1, i = n.length; ++o < i; )
              if (!r.contains(n[o])) return !1;
            return !0;
          }
          return this.each(("function" == typeof t ? z : t ? B : I)(n, t));
        },
        text: function (e) {
          return arguments.length
            ? this.each(null == e ? L : ("function" == typeof e ? R : T)(e))
            : this.node().textContent;
        },
        html: function (e) {
          return arguments.length
            ? this.each(null == e ? U : ("function" == typeof e ? $ : q)(e))
            : this.node().innerHTML;
        },
        raise: function () {
          return this.each(Y);
        },
        lower: function () {
          return this.each(X);
        },
        append: function (e) {
          var t = "function" == typeof e ? e : F(e);
          return this.select(function () {
            return this.appendChild(t.apply(this, arguments));
          });
        },
        insert: function (e, t) {
          var n = "function" == typeof e ? e : F(e),
            o = null == t ? K : "function" == typeof t ? t : (0, r.A)(t);
          return this.select(function () {
            return this.insertBefore(
              n.apply(this, arguments),
              o.apply(this, arguments) || null,
            );
          });
        },
        remove: function () {
          return this.each(G);
        },
        clone: function (e) {
          return this.select(e ? Q : W);
        },
        datum: function (e) {
          return arguments.length
            ? this.property("__data__", e)
            : this.node().__data__;
        },
        on: function (e, t, n) {
          var r,
            o,
            i = (function (e) {
              return e
                .trim()
                .split(/^|\s+/)
                .map(function (e) {
                  var t = "",
                    n = e.indexOf(".");
                  return (
                    n >= 0 && ((t = e.slice(n + 1)), (e = e.slice(0, n))),
                    { type: e, name: t }
                  );
                });
            })(e + ""),
            a = i.length;
          if (!(arguments.length < 2)) {
            for (l = t ? ee : J, r = 0; r < a; ++r) this.each(l(i[r], t, n));
            return this;
          }
          var l = this.node().__on;
          if (l)
            for (var s, u = 0, c = l.length; u < c; ++u)
              for (r = 0, s = l[u]; r < a; ++r)
                if ((o = i[r]).type === s.type && o.name === s.name)
                  return s.value;
        },
        dispatch: function (e, t) {
          return this.each(("function" == typeof t ? oe : re)(e, t));
        },
        [Symbol.iterator]: function* () {
          for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
            for (var r, o = e[t], i = 0, a = o.length; i < a; ++i)
              (r = o[i]) && (yield r);
        },
      };
      const se = le;
    },
    32803: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => l, j: () => s });
      var r = n(18795);
      function o(e) {
        return function () {
          this.style.removeProperty(e);
        };
      }
      function i(e, t, n) {
        return function () {
          this.style.setProperty(e, t, n);
        };
      }
      function a(e, t, n) {
        return function () {
          var r = t.apply(this, arguments);
          null == r
            ? this.style.removeProperty(e)
            : this.style.setProperty(e, r, n);
        };
      }
      function l(e, t, n) {
        return arguments.length > 1
          ? this.each(
              (null == t ? o : "function" == typeof t ? a : i)(
                e,
                t,
                null == n ? "" : n,
              ),
            )
          : s(this.node(), e);
      }
      function s(e, t) {
        return (
          e.style.getPropertyValue(t) ||
          (0, r.A)(e).getComputedStyle(e, null).getPropertyValue(t)
        );
      }
    },
    13742: (e, t, n) => {
      "use strict";
      function r() {}
      function o(e) {
        return null == e
          ? r
          : function () {
              return this.querySelector(e);
            };
      }
      n.d(t, { A: () => o });
    },
    90795: (e, t, n) => {
      "use strict";
      function r() {
        return [];
      }
      function o(e) {
        return null == e
          ? r
          : function () {
              return this.querySelectorAll(e);
            };
      }
      n.d(t, { A: () => o });
    },
    18795: (e, t, n) => {
      "use strict";
      function r(e) {
        return (
          (e.ownerDocument && e.ownerDocument.defaultView) ||
          (e.document && e) ||
          e.defaultView
        );
      }
      n.d(t, { A: () => r });
    },
    35796: (e, t, n) => {
      "use strict";
      n.d(t, { s_: () => qe, GS: () => ke });
      var r = n(26721),
        o = n(81306);
      function i(e) {
        return ((e = Math.exp(e)) + 1 / e) / 2;
      }
      const a = (function e(t, n, r) {
        function o(e, o) {
          var a,
            l,
            s = e[0],
            u = e[1],
            c = e[2],
            f = o[0],
            d = o[1],
            h = o[2],
            p = f - s,
            g = d - u,
            v = p * p + g * g;
          if (v < 1e-12)
            (l = Math.log(h / c) / t),
              (a = function (e) {
                return [s + e * p, u + e * g, c * Math.exp(t * e * l)];
              });
          else {
            var y = Math.sqrt(v),
              m = (h * h - c * c + r * v) / (2 * c * n * y),
              b = (h * h - c * c - r * v) / (2 * h * n * y),
              w = Math.log(Math.sqrt(m * m + 1) - m),
              _ = Math.log(Math.sqrt(b * b + 1) - b);
            (l = (_ - w) / t),
              (a = function (e) {
                var r,
                  o = e * l,
                  a = i(w),
                  f =
                    (c / (n * y)) *
                    (a *
                      ((r = t * o + w), ((r = Math.exp(2 * r)) - 1) / (r + 1)) -
                      (function (e) {
                        return ((e = Math.exp(e)) - 1 / e) / 2;
                      })(w));
                return [s + f * p, u + f * g, (c * a) / i(t * o + w)];
              });
          }
          return (a.duration = (1e3 * l * t) / Math.SQRT2), a;
        }
        return (
          (o.rho = function (t) {
            var n = Math.max(0.001, +t),
              r = n * n;
            return e(n, r, r * r);
          }),
          o
        );
      })(Math.SQRT2, 2, 4);
      var l,
        s,
        u = n(92231),
        c = n(16180),
        f = n(80237),
        d = 0,
        h = 0,
        p = 0,
        g = 1e3,
        v = 0,
        y = 0,
        m = 0,
        b =
          "object" == typeof performance && performance.now
            ? performance
            : Date,
        w =
          "object" == typeof window && window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : function (e) {
                setTimeout(e, 17);
              };
      function _() {
        return y || (w(x), (y = b.now() + m));
      }
      function x() {
        y = 0;
      }
      function E() {
        this._call = this._time = this._next = null;
      }
      function S(e, t, n) {
        var r = new E();
        return r.restart(e, t, n), r;
      }
      function O() {
        (y = (v = b.now()) + m), (d = h = 0);
        try {
          !(function () {
            _(), ++d;
            for (var e, t = l; t; )
              (e = y - t._time) >= 0 && t._call.call(void 0, e), (t = t._next);
            --d;
          })();
        } finally {
          (d = 0),
            (function () {
              var e,
                t,
                n = l,
                r = 1 / 0;
              for (; n; )
                n._call
                  ? (r > n._time && (r = n._time), (e = n), (n = n._next))
                  : ((t = n._next),
                    (n._next = null),
                    (n = e ? (e._next = t) : (l = t)));
              (s = e), P(r);
            })(),
            (y = 0);
        }
      }
      function C() {
        var e = b.now(),
          t = e - v;
        t > g && ((m -= t), (v = e));
      }
      function P(e) {
        d ||
          (h && (h = clearTimeout(h)),
          e - y > 24
            ? (e < 1 / 0 && (h = setTimeout(O, e - b.now() - m)),
              p && (p = clearInterval(p)))
            : (p || ((v = b.now()), (p = setInterval(C, g))), (d = 1), w(O)));
      }
      function A(e, t, n) {
        var r = new E();
        return (
          (t = null == t ? 0 : +t),
          r.restart(
            (n) => {
              r.stop(), e(n + t);
            },
            t,
            n,
          ),
          r
        );
      }
      E.prototype = S.prototype = {
        constructor: E,
        restart: function (e, t, n) {
          if ("function" != typeof e)
            throw new TypeError("callback is not a function");
          (n = (null == n ? _() : +n) + (null == t ? 0 : +t)),
            this._next ||
              s === this ||
              (s ? (s._next = this) : (l = this), (s = this)),
            (this._call = e),
            (this._time = n),
            P();
        },
        stop: function () {
          this._call && ((this._call = null), (this._time = 1 / 0), P());
        },
      };
      var j = (0, r.A)("start", "end", "cancel", "interrupt"),
        M = [],
        N = 0,
        k = 1,
        D = 2,
        B = 3,
        I = 4,
        z = 5,
        L = 6;
      function T(e, t, n, r, o, i) {
        var a = e.__transition;
        if (a) {
          if (n in a) return;
        } else e.__transition = {};
        !(function (e, t, n) {
          var r,
            o = e.__transition;
          function i(e) {
            (n.state = k),
              n.timer.restart(a, n.delay, n.time),
              n.delay <= e && a(e - n.delay);
          }
          function a(i) {
            var u, c, f, d;
            if (n.state !== k) return s();
            for (u in o)
              if ((d = o[u]).name === n.name) {
                if (d.state === B) return A(a);
                d.state === I
                  ? ((d.state = L),
                    d.timer.stop(),
                    d.on.call("interrupt", e, e.__data__, d.index, d.group),
                    delete o[u])
                  : +u < t &&
                    ((d.state = L),
                    d.timer.stop(),
                    d.on.call("cancel", e, e.__data__, d.index, d.group),
                    delete o[u]);
              }
            if (
              (A(function () {
                n.state === B &&
                  ((n.state = I), n.timer.restart(l, n.delay, n.time), l(i));
              }),
              (n.state = D),
              n.on.call("start", e, e.__data__, n.index, n.group),
              n.state === D)
            ) {
              for (
                n.state = B, r = new Array((f = n.tween.length)), u = 0, c = -1;
                u < f;
                ++u
              )
                (d = n.tween[u].value.call(e, e.__data__, n.index, n.group)) &&
                  (r[++c] = d);
              r.length = c + 1;
            }
          }
          function l(t) {
            for (
              var o =
                  t < n.duration
                    ? n.ease.call(null, t / n.duration)
                    : (n.timer.restart(s), (n.state = z), 1),
                i = -1,
                a = r.length;
              ++i < a;

            )
              r[i].call(e, o);
            n.state === z &&
              (n.on.call("end", e, e.__data__, n.index, n.group), s());
          }
          function s() {
            for (var r in ((n.state = L), n.timer.stop(), delete o[t], o))
              return;
            delete e.__transition;
          }
          (o[t] = n), (n.timer = S(i, 0, n.time));
        })(e, n, {
          name: t,
          index: r,
          group: o,
          on: j,
          tween: M,
          time: i.time,
          delay: i.delay,
          duration: i.duration,
          ease: i.ease,
          timer: null,
          state: N,
        });
      }
      function R(e, t) {
        var n = q(e, t);
        if (n.state > N) throw new Error("too late; already scheduled");
        return n;
      }
      function U(e, t) {
        var n = q(e, t);
        if (n.state > B) throw new Error("too late; already running");
        return n;
      }
      function q(e, t) {
        var n = e.__transition;
        if (!n || !(n = n[t])) throw new Error("transition not found");
        return n;
      }
      function $(e, t) {
        var n,
          r,
          o,
          i = e.__transition,
          a = !0;
        if (i) {
          for (o in ((t = null == t ? null : t + ""), i))
            (n = i[o]).name === t
              ? ((r = n.state > D && n.state < z),
                (n.state = L),
                n.timer.stop(),
                n.on.call(
                  r ? "interrupt" : "cancel",
                  e,
                  e.__data__,
                  n.index,
                  n.group,
                ),
                delete i[o])
              : (a = !1);
          a && delete e.__transition;
        }
      }
      var Y,
        X = n(55797),
        H = 180 / Math.PI,
        V = {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          skewX: 0,
          scaleX: 1,
          scaleY: 1,
        };
      function Z(e, t, n, r, o, i) {
        var a, l, s;
        return (
          (a = Math.sqrt(e * e + t * t)) && ((e /= a), (t /= a)),
          (s = e * n + t * r) && ((n -= e * s), (r -= t * s)),
          (l = Math.sqrt(n * n + r * r)) && ((n /= l), (r /= l), (s /= l)),
          e * r < t * n && ((e = -e), (t = -t), (s = -s), (a = -a)),
          {
            translateX: o,
            translateY: i,
            rotate: Math.atan2(t, e) * H,
            skewX: Math.atan(s) * H,
            scaleX: a,
            scaleY: l,
          }
        );
      }
      function F(e, t, n, r) {
        function o(e) {
          return e.length ? e.pop() + " " : "";
        }
        return function (i, a) {
          var l = [],
            s = [];
          return (
            (i = e(i)),
            (a = e(a)),
            (function (e, r, o, i, a, l) {
              if (e !== o || r !== i) {
                var s = a.push("translate(", null, t, null, n);
                l.push(
                  { i: s - 4, x: (0, X.A)(e, o) },
                  { i: s - 2, x: (0, X.A)(r, i) },
                );
              } else (o || i) && a.push("translate(" + o + t + i + n);
            })(i.translateX, i.translateY, a.translateX, a.translateY, l, s),
            (function (e, t, n, i) {
              e !== t
                ? (e - t > 180 ? (t += 360) : t - e > 180 && (e += 360),
                  i.push({
                    i: n.push(o(n) + "rotate(", null, r) - 2,
                    x: (0, X.A)(e, t),
                  }))
                : t && n.push(o(n) + "rotate(" + t + r);
            })(i.rotate, a.rotate, l, s),
            (function (e, t, n, i) {
              e !== t
                ? i.push({
                    i: n.push(o(n) + "skewX(", null, r) - 2,
                    x: (0, X.A)(e, t),
                  })
                : t && n.push(o(n) + "skewX(" + t + r);
            })(i.skewX, a.skewX, l, s),
            (function (e, t, n, r, i, a) {
              if (e !== n || t !== r) {
                var l = i.push(o(i) + "scale(", null, ",", null, ")");
                a.push(
                  { i: l - 4, x: (0, X.A)(e, n) },
                  { i: l - 2, x: (0, X.A)(t, r) },
                );
              } else
                (1 === n && 1 === r) ||
                  i.push(o(i) + "scale(" + n + "," + r + ")");
            })(i.scaleX, i.scaleY, a.scaleX, a.scaleY, l, s),
            (i = a = null),
            function (e) {
              for (var t, n = -1, r = s.length; ++n < r; )
                l[(t = s[n]).i] = t.x(e);
              return l.join("");
            }
          );
        };
      }
      var K = F(
          function (e) {
            const t = new (
              "function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix
            )(e + "");
            return t.isIdentity ? V : Z(t.a, t.b, t.c, t.d, t.e, t.f);
          },
          "px, ",
          "px)",
          "deg)",
        ),
        G = F(
          function (e) {
            return null == e
              ? V
              : (Y ||
                  (Y = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "g",
                  )),
                Y.setAttribute("transform", e),
                (e = Y.transform.baseVal.consolidate())
                  ? Z((e = e.matrix).a, e.b, e.c, e.d, e.e, e.f)
                  : V);
          },
          ", ",
          ")",
          ")",
        ),
        W = n(58116);
      function Q(e, t) {
        var n, r;
        return function () {
          var o = U(this, e),
            i = o.tween;
          if (i !== n)
            for (var a = 0, l = (r = n = i).length; a < l; ++a)
              if (r[a].name === t) {
                (r = r.slice()).splice(a, 1);
                break;
              }
          o.tween = r;
        };
      }
      function J(e, t, n) {
        var r, o;
        if ("function" != typeof n) throw new Error();
        return function () {
          var i = U(this, e),
            a = i.tween;
          if (a !== r) {
            o = (r = a).slice();
            for (var l = { name: t, value: n }, s = 0, u = o.length; s < u; ++s)
              if (o[s].name === t) {
                o[s] = l;
                break;
              }
            s === u && o.push(l);
          }
          i.tween = o;
        };
      }
      function ee(e, t, n) {
        var r = e._id;
        return (
          e.each(function () {
            var e = U(this, r);
            (e.value || (e.value = {}))[t] = n.apply(this, arguments);
          }),
          function (e) {
            return q(e, r).value[t];
          }
        );
      }
      var te = n(25705),
        ne = n(92789),
        re = n(14553);
      function oe(e, t) {
        var n;
        return (
          "number" == typeof t
            ? X.A
            : t instanceof te.Ay
              ? ne.Ay
              : (n = (0, te.Ay)(t))
                ? ((t = n), ne.Ay)
                : re.A
        )(e, t);
      }
      function ie(e) {
        return function () {
          this.removeAttribute(e);
        };
      }
      function ae(e) {
        return function () {
          this.removeAttributeNS(e.space, e.local);
        };
      }
      function le(e, t, n) {
        var r,
          o,
          i = n + "";
        return function () {
          var a = this.getAttribute(e);
          return a === i ? null : a === r ? o : (o = t((r = a), n));
        };
      }
      function se(e, t, n) {
        var r,
          o,
          i = n + "";
        return function () {
          var a = this.getAttributeNS(e.space, e.local);
          return a === i ? null : a === r ? o : (o = t((r = a), n));
        };
      }
      function ue(e, t, n) {
        var r, o, i;
        return function () {
          var a,
            l,
            s = n(this);
          if (null != s)
            return (a = this.getAttribute(e)) === (l = s + "")
              ? null
              : a === r && l === o
                ? i
                : ((o = l), (i = t((r = a), s)));
          this.removeAttribute(e);
        };
      }
      function ce(e, t, n) {
        var r, o, i;
        return function () {
          var a,
            l,
            s = n(this);
          if (null != s)
            return (a = this.getAttributeNS(e.space, e.local)) === (l = s + "")
              ? null
              : a === r && l === o
                ? i
                : ((o = l), (i = t((r = a), s)));
          this.removeAttributeNS(e.space, e.local);
        };
      }
      function fe(e, t) {
        var n, r;
        function o() {
          var o = t.apply(this, arguments);
          return (
            o !== r &&
              (n =
                (r = o) &&
                (function (e, t) {
                  return function (n) {
                    this.setAttributeNS(e.space, e.local, t.call(this, n));
                  };
                })(e, o)),
            n
          );
        }
        return (o._value = t), o;
      }
      function de(e, t) {
        var n, r;
        function o() {
          var o = t.apply(this, arguments);
          return (
            o !== r &&
              (n =
                (r = o) &&
                (function (e, t) {
                  return function (n) {
                    this.setAttribute(e, t.call(this, n));
                  };
                })(e, o)),
            n
          );
        }
        return (o._value = t), o;
      }
      function he(e, t) {
        return function () {
          R(this, e).delay = +t.apply(this, arguments);
        };
      }
      function pe(e, t) {
        return (
          (t = +t),
          function () {
            R(this, e).delay = t;
          }
        );
      }
      function ge(e, t) {
        return function () {
          U(this, e).duration = +t.apply(this, arguments);
        };
      }
      function ve(e, t) {
        return (
          (t = +t),
          function () {
            U(this, e).duration = t;
          }
        );
      }
      var ye = n(42173);
      var me = n(13742);
      var be = n(90795);
      var we = f.Ay.prototype.constructor;
      var _e = n(32803);
      function xe(e) {
        return function () {
          this.style.removeProperty(e);
        };
      }
      var Ee = 0;
      function Se(e, t, n, r) {
        (this._groups = e),
          (this._parents = t),
          (this._name = n),
          (this._id = r);
      }
      function Oe() {
        return ++Ee;
      }
      var Ce = f.Ay.prototype;
      Se.prototype = function (e) {
        return (0, f.Ay)().transition(e);
      }.prototype = {
        constructor: Se,
        select: function (e) {
          var t = this._name,
            n = this._id;
          "function" != typeof e && (e = (0, me.A)(e));
          for (
            var r = this._groups, o = r.length, i = new Array(o), a = 0;
            a < o;
            ++a
          )
            for (
              var l,
                s,
                u = r[a],
                c = u.length,
                f = (i[a] = new Array(c)),
                d = 0;
              d < c;
              ++d
            )
              (l = u[d]) &&
                (s = e.call(l, l.__data__, d, u)) &&
                ("__data__" in l && (s.__data__ = l.__data__),
                (f[d] = s),
                T(f[d], t, n, d, f, q(l, n)));
          return new Se(i, this._parents, t, n);
        },
        selectAll: function (e) {
          var t = this._name,
            n = this._id;
          "function" != typeof e && (e = (0, be.A)(e));
          for (
            var r = this._groups, o = r.length, i = [], a = [], l = 0;
            l < o;
            ++l
          )
            for (var s, u = r[l], c = u.length, f = 0; f < c; ++f)
              if ((s = u[f])) {
                for (
                  var d,
                    h = e.call(s, s.__data__, f, u),
                    p = q(s, n),
                    g = 0,
                    v = h.length;
                  g < v;
                  ++g
                )
                  (d = h[g]) && T(d, t, n, g, h, p);
                i.push(h), a.push(s);
              }
          return new Se(i, a, t, n);
        },
        selectChild: Ce.selectChild,
        selectChildren: Ce.selectChildren,
        filter: function (e) {
          "function" != typeof e && (e = (0, ye.A)(e));
          for (
            var t = this._groups, n = t.length, r = new Array(n), o = 0;
            o < n;
            ++o
          )
            for (
              var i, a = t[o], l = a.length, s = (r[o] = []), u = 0;
              u < l;
              ++u
            )
              (i = a[u]) && e.call(i, i.__data__, u, a) && s.push(i);
          return new Se(r, this._parents, this._name, this._id);
        },
        merge: function (e) {
          if (e._id !== this._id) throw new Error();
          for (
            var t = this._groups,
              n = e._groups,
              r = t.length,
              o = n.length,
              i = Math.min(r, o),
              a = new Array(r),
              l = 0;
            l < i;
            ++l
          )
            for (
              var s,
                u = t[l],
                c = n[l],
                f = u.length,
                d = (a[l] = new Array(f)),
                h = 0;
              h < f;
              ++h
            )
              (s = u[h] || c[h]) && (d[h] = s);
          for (; l < r; ++l) a[l] = t[l];
          return new Se(a, this._parents, this._name, this._id);
        },
        selection: function () {
          return new we(this._groups, this._parents);
        },
        transition: function () {
          for (
            var e = this._name,
              t = this._id,
              n = Oe(),
              r = this._groups,
              o = r.length,
              i = 0;
            i < o;
            ++i
          )
            for (var a, l = r[i], s = l.length, u = 0; u < s; ++u)
              if ((a = l[u])) {
                var c = q(a, t);
                T(a, e, n, u, l, {
                  time: c.time + c.delay + c.duration,
                  delay: 0,
                  duration: c.duration,
                  ease: c.ease,
                });
              }
          return new Se(r, this._parents, e, n);
        },
        call: Ce.call,
        nodes: Ce.nodes,
        node: Ce.node,
        size: Ce.size,
        empty: Ce.empty,
        each: Ce.each,
        on: function (e, t) {
          var n = this._id;
          return arguments.length < 2
            ? q(this.node(), n).on.on(e)
            : this.each(
                (function (e, t, n) {
                  var r,
                    o,
                    i = (function (e) {
                      return (e + "")
                        .trim()
                        .split(/^|\s+/)
                        .every(function (e) {
                          var t = e.indexOf(".");
                          return (
                            t >= 0 && (e = e.slice(0, t)), !e || "start" === e
                          );
                        });
                    })(t)
                      ? R
                      : U;
                  return function () {
                    var a = i(this, e),
                      l = a.on;
                    l !== r && (o = (r = l).copy()).on(t, n), (a.on = o);
                  };
                })(n, e, t),
              );
        },
        attr: function (e, t) {
          var n = (0, W.A)(e),
            r = "transform" === n ? G : oe;
          return this.attrTween(
            e,
            "function" == typeof t
              ? (n.local ? ce : ue)(n, r, ee(this, "attr." + e, t))
              : null == t
                ? (n.local ? ae : ie)(n)
                : (n.local ? se : le)(n, r, t),
          );
        },
        attrTween: function (e, t) {
          var n = "attr." + e;
          if (arguments.length < 2) return (n = this.tween(n)) && n._value;
          if (null == t) return this.tween(n, null);
          if ("function" != typeof t) throw new Error();
          var r = (0, W.A)(e);
          return this.tween(n, (r.local ? fe : de)(r, t));
        },
        style: function (e, t, n) {
          var r = "transform" == (e += "") ? K : oe;
          return null == t
            ? this.styleTween(
                e,
                (function (e, t) {
                  var n, r, o;
                  return function () {
                    var i = (0, _e.j)(this, e),
                      a = (this.style.removeProperty(e), (0, _e.j)(this, e));
                    return i === a
                      ? null
                      : i === n && a === r
                        ? o
                        : (o = t((n = i), (r = a)));
                  };
                })(e, r),
              ).on("end.style." + e, xe(e))
            : "function" == typeof t
              ? this.styleTween(
                  e,
                  (function (e, t, n) {
                    var r, o, i;
                    return function () {
                      var a = (0, _e.j)(this, e),
                        l = n(this),
                        s = l + "";
                      return (
                        null == l &&
                          (this.style.removeProperty(e),
                          (s = l = (0, _e.j)(this, e))),
                        a === s
                          ? null
                          : a === r && s === o
                            ? i
                            : ((o = s), (i = t((r = a), l)))
                      );
                    };
                  })(e, r, ee(this, "style." + e, t)),
                ).each(
                  (function (e, t) {
                    var n,
                      r,
                      o,
                      i,
                      a = "style." + t,
                      l = "end." + a;
                    return function () {
                      var s = U(this, e),
                        u = s.on,
                        c = null == s.value[a] ? i || (i = xe(t)) : void 0;
                      (u === n && o === c) ||
                        (r = (n = u).copy()).on(l, (o = c)),
                        (s.on = r);
                    };
                  })(this._id, e),
                )
              : this.styleTween(
                  e,
                  (function (e, t, n) {
                    var r,
                      o,
                      i = n + "";
                    return function () {
                      var a = (0, _e.j)(this, e);
                      return a === i ? null : a === r ? o : (o = t((r = a), n));
                    };
                  })(e, r, t),
                  n,
                ).on("end.style." + e, null);
        },
        styleTween: function (e, t, n) {
          var r = "style." + (e += "");
          if (arguments.length < 2) return (r = this.tween(r)) && r._value;
          if (null == t) return this.tween(r, null);
          if ("function" != typeof t) throw new Error();
          return this.tween(
            r,
            (function (e, t, n) {
              var r, o;
              function i() {
                var i = t.apply(this, arguments);
                return (
                  i !== o &&
                    (r =
                      (o = i) &&
                      (function (e, t, n) {
                        return function (r) {
                          this.style.setProperty(e, t.call(this, r), n);
                        };
                      })(e, i, n)),
                  r
                );
              }
              return (i._value = t), i;
            })(e, t, null == n ? "" : n),
          );
        },
        text: function (e) {
          return this.tween(
            "text",
            "function" == typeof e
              ? (function (e) {
                  return function () {
                    var t = e(this);
                    this.textContent = null == t ? "" : t;
                  };
                })(ee(this, "text", e))
              : (function (e) {
                  return function () {
                    this.textContent = e;
                  };
                })(null == e ? "" : e + ""),
          );
        },
        textTween: function (e) {
          var t = "text";
          if (arguments.length < 1) return (t = this.tween(t)) && t._value;
          if (null == e) return this.tween(t, null);
          if ("function" != typeof e) throw new Error();
          return this.tween(
            t,
            (function (e) {
              var t, n;
              function r() {
                var r = e.apply(this, arguments);
                return (
                  r !== n &&
                    (t =
                      (n = r) &&
                      (function (e) {
                        return function (t) {
                          this.textContent = e.call(this, t);
                        };
                      })(r)),
                  t
                );
              }
              return (r._value = e), r;
            })(e),
          );
        },
        remove: function () {
          return this.on(
            "end.remove",
            (function (e) {
              return function () {
                var t = this.parentNode;
                for (var n in this.__transition) if (+n !== e) return;
                t && t.removeChild(this);
              };
            })(this._id),
          );
        },
        tween: function (e, t) {
          var n = this._id;
          if (((e += ""), arguments.length < 2)) {
            for (
              var r, o = q(this.node(), n).tween, i = 0, a = o.length;
              i < a;
              ++i
            )
              if ((r = o[i]).name === e) return r.value;
            return null;
          }
          return this.each((null == t ? Q : J)(n, e, t));
        },
        delay: function (e) {
          var t = this._id;
          return arguments.length
            ? this.each(("function" == typeof e ? he : pe)(t, e))
            : q(this.node(), t).delay;
        },
        duration: function (e) {
          var t = this._id;
          return arguments.length
            ? this.each(("function" == typeof e ? ge : ve)(t, e))
            : q(this.node(), t).duration;
        },
        ease: function (e) {
          var t = this._id;
          return arguments.length
            ? this.each(
                (function (e, t) {
                  if ("function" != typeof t) throw new Error();
                  return function () {
                    U(this, e).ease = t;
                  };
                })(t, e),
              )
            : q(this.node(), t).ease;
        },
        easeVarying: function (e) {
          if ("function" != typeof e) throw new Error();
          return this.each(
            (function (e, t) {
              return function () {
                var n = t.apply(this, arguments);
                if ("function" != typeof n) throw new Error();
                U(this, e).ease = n;
              };
            })(this._id, e),
          );
        },
        end: function () {
          var e,
            t,
            n = this,
            r = n._id,
            o = n.size();
          return new Promise(function (i, a) {
            var l = { value: a },
              s = {
                value: function () {
                  0 == --o && i();
                },
              };
            n.each(function () {
              var n = U(this, r),
                o = n.on;
              o !== e &&
                ((t = (e = o).copy())._.cancel.push(l),
                t._.interrupt.push(l),
                t._.end.push(s)),
                (n.on = t);
            }),
              0 === o && i();
          });
        },
        [Symbol.iterator]: Ce[Symbol.iterator],
      };
      var Pe = {
        time: null,
        delay: 0,
        duration: 250,
        ease: function (e) {
          return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
        },
      };
      function Ae(e, t) {
        for (var n; !(n = e.__transition) || !(n = n[t]); )
          if (!(e = e.parentNode)) throw new Error(`transition ${t} not found`);
        return n;
      }
      (f.Ay.prototype.interrupt = function (e) {
        return this.each(function () {
          $(this, e);
        });
      }),
        (f.Ay.prototype.transition = function (e) {
          var t, n;
          e instanceof Se
            ? ((t = e._id), (e = e._name))
            : ((t = Oe()),
              ((n = Pe).time = _()),
              (e = null == e ? null : e + ""));
          for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
            for (var a, l = r[i], s = l.length, u = 0; u < s; ++u)
              (a = l[u]) && T(a, e, t, u, l, n || Ae(a, t));
          return new Se(r, this._parents, e, t);
        });
      const je = (e) => () => e;
      function Me(e, { sourceEvent: t, target: n, transform: r, dispatch: o }) {
        Object.defineProperties(this, {
          type: { value: e, enumerable: !0, configurable: !0 },
          sourceEvent: { value: t, enumerable: !0, configurable: !0 },
          target: { value: n, enumerable: !0, configurable: !0 },
          transform: { value: r, enumerable: !0, configurable: !0 },
          _: { value: o },
        });
      }
      function Ne(e, t, n) {
        (this.k = e), (this.x = t), (this.y = n);
      }
      Ne.prototype = {
        constructor: Ne,
        scale: function (e) {
          return 1 === e ? this : new Ne(this.k * e, this.x, this.y);
        },
        translate: function (e, t) {
          return (0 === e) & (0 === t)
            ? this
            : new Ne(this.k, this.x + this.k * e, this.y + this.k * t);
        },
        apply: function (e) {
          return [e[0] * this.k + this.x, e[1] * this.k + this.y];
        },
        applyX: function (e) {
          return e * this.k + this.x;
        },
        applyY: function (e) {
          return e * this.k + this.y;
        },
        invert: function (e) {
          return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
        },
        invertX: function (e) {
          return (e - this.x) / this.k;
        },
        invertY: function (e) {
          return (e - this.y) / this.k;
        },
        rescaleX: function (e) {
          return e
            .copy()
            .domain(e.range().map(this.invertX, this).map(e.invert, e));
        },
        rescaleY: function (e) {
          return e
            .copy()
            .domain(e.range().map(this.invertY, this).map(e.invert, e));
        },
        toString: function () {
          return (
            "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
          );
        },
      };
      var ke = new Ne(1, 0, 0);
      function De(e) {
        e.stopImmediatePropagation();
      }
      function Be(e) {
        e.preventDefault(), e.stopImmediatePropagation();
      }
      function Ie(e) {
        return !((e.ctrlKey && "wheel" !== e.type) || e.button);
      }
      function ze() {
        var e = this;
        return e instanceof SVGElement
          ? (e = e.ownerSVGElement || e).hasAttribute("viewBox")
            ? [
                [(e = e.viewBox.baseVal).x, e.y],
                [e.x + e.width, e.y + e.height],
              ]
            : [
                [0, 0],
                [e.width.baseVal.value, e.height.baseVal.value],
              ]
          : [
              [0, 0],
              [e.clientWidth, e.clientHeight],
            ];
      }
      function Le() {
        return this.__zoom || ke;
      }
      function Te(e) {
        return (
          -e.deltaY *
          (1 === e.deltaMode ? 0.05 : e.deltaMode ? 1 : 0.002) *
          (e.ctrlKey ? 10 : 1)
        );
      }
      function Re() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      function Ue(e, t, n) {
        var r = e.invertX(t[0][0]) - n[0][0],
          o = e.invertX(t[1][0]) - n[1][0],
          i = e.invertY(t[0][1]) - n[0][1],
          a = e.invertY(t[1][1]) - n[1][1];
        return e.translate(
          o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
          a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a),
        );
      }
      function qe() {
        var e,
          t,
          n,
          i = Ie,
          l = ze,
          s = Ue,
          f = Te,
          d = Re,
          h = [0, 1 / 0],
          p = [
            [-1 / 0, -1 / 0],
            [1 / 0, 1 / 0],
          ],
          g = 250,
          v = a,
          y = (0, r.A)("start", "zoom", "end"),
          m = 500,
          b = 150,
          w = 0,
          _ = 10;
        function x(e) {
          e.property("__zoom", Le)
            .on("wheel.zoom", j, { passive: !1 })
            .on("mousedown.zoom", M)
            .on("dblclick.zoom", N)
            .filter(d)
            .on("touchstart.zoom", k)
            .on("touchmove.zoom", D)
            .on("touchend.zoom touchcancel.zoom", B)
            .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        function E(e, t) {
          return (t = Math.max(h[0], Math.min(h[1], t))) === e.k
            ? e
            : new Ne(t, e.x, e.y);
        }
        function S(e, t, n) {
          var r = t[0] - n[0] * e.k,
            o = t[1] - n[1] * e.k;
          return r === e.x && o === e.y ? e : new Ne(e.k, r, o);
        }
        function O(e) {
          return [(+e[0][0] + +e[1][0]) / 2, (+e[0][1] + +e[1][1]) / 2];
        }
        function C(e, t, n, r) {
          e.on("start.zoom", function () {
            P(this, arguments).event(r).start();
          })
            .on("interrupt.zoom end.zoom", function () {
              P(this, arguments).event(r).end();
            })
            .tween("zoom", function () {
              var e = this,
                o = arguments,
                i = P(e, o).event(r),
                a = l.apply(e, o),
                s =
                  null == n ? O(a) : "function" == typeof n ? n.apply(e, o) : n,
                u = Math.max(a[1][0] - a[0][0], a[1][1] - a[0][1]),
                c = e.__zoom,
                f = "function" == typeof t ? t.apply(e, o) : t,
                d = v(c.invert(s).concat(u / c.k), f.invert(s).concat(u / f.k));
              return function (e) {
                if (1 === e) e = f;
                else {
                  var t = d(e),
                    n = u / t[2];
                  e = new Ne(n, s[0] - t[0] * n, s[1] - t[1] * n);
                }
                i.zoom(null, e);
              };
            });
        }
        function P(e, t, n) {
          return (!n && e.__zooming) || new A(e, t);
        }
        function A(e, t) {
          (this.that = e),
            (this.args = t),
            (this.active = 0),
            (this.sourceEvent = null),
            (this.extent = l.apply(e, t)),
            (this.taps = 0);
        }
        function j(e, ...t) {
          if (i.apply(this, arguments)) {
            var n = P(this, t).event(e),
              r = this.__zoom,
              o = Math.max(
                h[0],
                Math.min(h[1], r.k * Math.pow(2, f.apply(this, arguments))),
              ),
              a = (0, c.A)(e);
            if (n.wheel)
              (n.mouse[0][0] === a[0] && n.mouse[0][1] === a[1]) ||
                (n.mouse[1] = r.invert((n.mouse[0] = a))),
                clearTimeout(n.wheel);
            else {
              if (r.k === o) return;
              (n.mouse = [a, r.invert(a)]), $(this), n.start();
            }
            Be(e),
              (n.wheel = setTimeout(function () {
                (n.wheel = null), n.end();
              }, b)),
              n.zoom(
                "mouse",
                s(S(E(r, o), n.mouse[0], n.mouse[1]), n.extent, p),
              );
          }
        }
        function M(e, ...t) {
          if (!n && i.apply(this, arguments)) {
            var r = e.currentTarget,
              a = P(this, t, !0).event(e),
              l = (0, u.A)(e.view)
                .on(
                  "mousemove.zoom",
                  function (e) {
                    if ((Be(e), !a.moved)) {
                      var t = e.clientX - d,
                        n = e.clientY - h;
                      a.moved = t * t + n * n > w;
                    }
                    a.event(e).zoom(
                      "mouse",
                      s(
                        S(
                          a.that.__zoom,
                          (a.mouse[0] = (0, c.A)(e, r)),
                          a.mouse[1],
                        ),
                        a.extent,
                        p,
                      ),
                    );
                  },
                  !0,
                )
                .on(
                  "mouseup.zoom",
                  function (e) {
                    l.on("mousemove.zoom mouseup.zoom", null),
                      (0, o.y)(e.view, a.moved),
                      Be(e),
                      a.event(e).end();
                  },
                  !0,
                ),
              f = (0, c.A)(e, r),
              d = e.clientX,
              h = e.clientY;
            (0, o.A)(e.view),
              De(e),
              (a.mouse = [f, this.__zoom.invert(f)]),
              $(this),
              a.start();
          }
        }
        function N(e, ...t) {
          if (i.apply(this, arguments)) {
            var n = this.__zoom,
              r = (0, c.A)(e.changedTouches ? e.changedTouches[0] : e, this),
              o = n.invert(r),
              a = n.k * (e.shiftKey ? 0.5 : 2),
              f = s(S(E(n, a), r, o), l.apply(this, t), p);
            Be(e),
              g > 0
                ? (0, u.A)(this).transition().duration(g).call(C, f, r, e)
                : (0, u.A)(this).call(x.transform, f, r, e);
          }
        }
        function k(n, ...r) {
          if (i.apply(this, arguments)) {
            var o,
              a,
              l,
              s,
              u = n.touches,
              f = u.length,
              d = P(this, r, n.changedTouches.length === f).event(n);
            for (De(n), a = 0; a < f; ++a)
              (l = u[a]),
                (s = [
                  (s = (0, c.A)(l, this)),
                  this.__zoom.invert(s),
                  l.identifier,
                ]),
                d.touch0
                  ? d.touch1 ||
                    d.touch0[2] === s[2] ||
                    ((d.touch1 = s), (d.taps = 0))
                  : ((d.touch0 = s), (o = !0), (d.taps = 1 + !!e));
            e && (e = clearTimeout(e)),
              o &&
                (d.taps < 2 &&
                  ((t = s[0]),
                  (e = setTimeout(function () {
                    e = null;
                  }, m))),
                $(this),
                d.start());
          }
        }
        function D(e, ...t) {
          if (this.__zooming) {
            var n,
              r,
              o,
              i,
              a = P(this, t).event(e),
              l = e.changedTouches,
              u = l.length;
            for (Be(e), n = 0; n < u; ++n)
              (r = l[n]),
                (o = (0, c.A)(r, this)),
                a.touch0 && a.touch0[2] === r.identifier
                  ? (a.touch0[0] = o)
                  : a.touch1 &&
                    a.touch1[2] === r.identifier &&
                    (a.touch1[0] = o);
            if (((r = a.that.__zoom), a.touch1)) {
              var f = a.touch0[0],
                d = a.touch0[1],
                h = a.touch1[0],
                g = a.touch1[1],
                v = (v = h[0] - f[0]) * v + (v = h[1] - f[1]) * v,
                y = (y = g[0] - d[0]) * y + (y = g[1] - d[1]) * y;
              (r = E(r, Math.sqrt(v / y))),
                (o = [(f[0] + h[0]) / 2, (f[1] + h[1]) / 2]),
                (i = [(d[0] + g[0]) / 2, (d[1] + g[1]) / 2]);
            } else {
              if (!a.touch0) return;
              (o = a.touch0[0]), (i = a.touch0[1]);
            }
            a.zoom("touch", s(S(r, o, i), a.extent, p));
          }
        }
        function B(e, ...r) {
          if (this.__zooming) {
            var o,
              i,
              a = P(this, r).event(e),
              l = e.changedTouches,
              s = l.length;
            for (
              De(e),
                n && clearTimeout(n),
                n = setTimeout(function () {
                  n = null;
                }, m),
                o = 0;
              o < s;
              ++o
            )
              (i = l[o]),
                a.touch0 && a.touch0[2] === i.identifier
                  ? delete a.touch0
                  : a.touch1 && a.touch1[2] === i.identifier && delete a.touch1;
            if (
              (a.touch1 &&
                !a.touch0 &&
                ((a.touch0 = a.touch1), delete a.touch1),
              a.touch0)
            )
              a.touch0[1] = this.__zoom.invert(a.touch0[0]);
            else if (
              (a.end(),
              2 === a.taps &&
                ((i = (0, c.A)(i, this)),
                Math.hypot(t[0] - i[0], t[1] - i[1]) < _))
            ) {
              var f = (0, u.A)(this).on("dblclick.zoom");
              f && f.apply(this, arguments);
            }
          }
        }
        return (
          (x.transform = function (e, t, n, r) {
            var o = e.selection ? e.selection() : e;
            o.property("__zoom", Le),
              e !== o
                ? C(e, t, n, r)
                : o.interrupt().each(function () {
                    P(this, arguments)
                      .event(r)
                      .start()
                      .zoom(
                        null,
                        "function" == typeof t ? t.apply(this, arguments) : t,
                      )
                      .end();
                  });
          }),
          (x.scaleBy = function (e, t, n, r) {
            x.scaleTo(
              e,
              function () {
                return (
                  this.__zoom.k *
                  ("function" == typeof t ? t.apply(this, arguments) : t)
                );
              },
              n,
              r,
            );
          }),
          (x.scaleTo = function (e, t, n, r) {
            x.transform(
              e,
              function () {
                var e = l.apply(this, arguments),
                  r = this.__zoom,
                  o =
                    null == n
                      ? O(e)
                      : "function" == typeof n
                        ? n.apply(this, arguments)
                        : n,
                  i = r.invert(o),
                  a = "function" == typeof t ? t.apply(this, arguments) : t;
                return s(S(E(r, a), o, i), e, p);
              },
              n,
              r,
            );
          }),
          (x.translateBy = function (e, t, n, r) {
            x.transform(
              e,
              function () {
                return s(
                  this.__zoom.translate(
                    "function" == typeof t ? t.apply(this, arguments) : t,
                    "function" == typeof n ? n.apply(this, arguments) : n,
                  ),
                  l.apply(this, arguments),
                  p,
                );
              },
              null,
              r,
            );
          }),
          (x.translateTo = function (e, t, n, r, o) {
            x.transform(
              e,
              function () {
                var e = l.apply(this, arguments),
                  o = this.__zoom,
                  i =
                    null == r
                      ? O(e)
                      : "function" == typeof r
                        ? r.apply(this, arguments)
                        : r;
                return s(
                  ke
                    .translate(i[0], i[1])
                    .scale(o.k)
                    .translate(
                      "function" == typeof t ? -t.apply(this, arguments) : -t,
                      "function" == typeof n ? -n.apply(this, arguments) : -n,
                    ),
                  e,
                  p,
                );
              },
              r,
              o,
            );
          }),
          (A.prototype = {
            event: function (e) {
              return e && (this.sourceEvent = e), this;
            },
            start: function () {
              return (
                1 == ++this.active &&
                  ((this.that.__zooming = this), this.emit("start")),
                this
              );
            },
            zoom: function (e, t) {
              return (
                this.mouse &&
                  "mouse" !== e &&
                  (this.mouse[1] = t.invert(this.mouse[0])),
                this.touch0 &&
                  "touch" !== e &&
                  (this.touch0[1] = t.invert(this.touch0[0])),
                this.touch1 &&
                  "touch" !== e &&
                  (this.touch1[1] = t.invert(this.touch1[0])),
                (this.that.__zoom = t),
                this.emit("zoom"),
                this
              );
            },
            end: function () {
              return (
                0 == --this.active &&
                  (delete this.that.__zooming, this.emit("end")),
                this
              );
            },
            emit: function (e) {
              var t = (0, u.A)(this.that).datum();
              y.call(
                e,
                this.that,
                new Me(e, {
                  sourceEvent: this.sourceEvent,
                  target: x,
                  type: e,
                  transform: this.that.__zoom,
                  dispatch: y,
                }),
                t,
              );
            },
          }),
          (x.wheelDelta = function (e) {
            return arguments.length
              ? ((f = "function" == typeof e ? e : je(+e)), x)
              : f;
          }),
          (x.filter = function (e) {
            return arguments.length
              ? ((i = "function" == typeof e ? e : je(!!e)), x)
              : i;
          }),
          (x.touchable = function (e) {
            return arguments.length
              ? ((d = "function" == typeof e ? e : je(!!e)), x)
              : d;
          }),
          (x.extent = function (e) {
            return arguments.length
              ? ((l =
                  "function" == typeof e
                    ? e
                    : je([
                        [+e[0][0], +e[0][1]],
                        [+e[1][0], +e[1][1]],
                      ])),
                x)
              : l;
          }),
          (x.scaleExtent = function (e) {
            return arguments.length
              ? ((h[0] = +e[0]), (h[1] = +e[1]), x)
              : [h[0], h[1]];
          }),
          (x.translateExtent = function (e) {
            return arguments.length
              ? ((p[0][0] = +e[0][0]),
                (p[1][0] = +e[1][0]),
                (p[0][1] = +e[0][1]),
                (p[1][1] = +e[1][1]),
                x)
              : [
                  [p[0][0], p[0][1]],
                  [p[1][0], p[1][1]],
                ];
          }),
          (x.constrain = function (e) {
            return arguments.length ? ((s = e), x) : s;
          }),
          (x.duration = function (e) {
            return arguments.length ? ((g = +e), x) : g;
          }),
          (x.interpolate = function (e) {
            return arguments.length ? ((v = e), x) : v;
          }),
          (x.on = function () {
            var e = y.on.apply(y, arguments);
            return e === y ? x : e;
          }),
          (x.clickDistance = function (e) {
            return arguments.length ? ((w = (e = +e) * e), x) : Math.sqrt(w);
          }),
          (x.tapDistance = function (e) {
            return arguments.length ? ((_ = +e), x) : _;
          }),
          x
        );
      }
      Ne.prototype;
    },
  },
]);

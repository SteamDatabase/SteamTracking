const CLSTAMP = 9404702;

import { a as ut } from "./chunk-BBX3NATB.js";
import { j as et, l as rt, m as Q } from "./chunk-M7JZUOB4.js";
import { d as L } from "./chunk-GK2ITS7J.js";
var J = L(ut(), 1),
  N = L(rt(), 1);
var it = "zEz4mayYHlU-";
var j = "_3pEsdTdzZjw-";
var at = "_5wIbq5Tk72s-";
var nt = "_8fetIAGvUN8-";
var ot = "rlexzsaIuBw-";
var I = {
  ShowMetricsButton: "zEz4mayYHlU-",
  ArbitraryMetricTable: "_3pEsdTdzZjw-",
  MetricsDialog: "_5wIbq5Tk72s-",
  CloseDialogButton: "_8fetIAGvUN8-",
  WGEntry: "rlexzsaIuBw-",
  Timeline: "FuylFbqd9TI-",
  TimelineChart: "GNLrZqHiwfQ-",
  TimelineTable: "W0NUU9SMhW8-",
  Waterfall: "EaXLy0ri6Mg-",
  HoveredSpanRow: "a2VQ9sufVh0-",
};
var d = function (n, t, e) {
    if (!t.has(n))
      throw new TypeError("attempted to set private field on non-instance");
    return t.set(n, e), e;
  },
  f = function (n, t) {
    if (!t.has(n))
      throw new TypeError("attempted to get private field on non-instance");
    return t.get(n);
  },
  B,
  $,
  T,
  F,
  O,
  k,
  w,
  W,
  G,
  E,
  R,
  D,
  A,
  H,
  q,
  P,
  Z,
  U,
  mt = function (n) {
    var t = 131,
      e = 137,
      a = 0;
    n += "x";
    var i = Math.floor(9007199254740991 / e);
    for (let s = 0; s < n.length; s++)
      a > i && (a = Math.floor(a / e)), (a = a * t + n.charCodeAt(s));
    return a;
  },
  c = "0123456789abcdef".split(""),
  bt = [-2147483648, 8388608, 32768, 128],
  S = [24, 16, 8, 0],
  X = [
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ],
  g = [],
  st = class {
    constructor(t = !1, e = !1) {
      B.set(this, void 0),
        $.set(this, void 0),
        T.set(this, void 0),
        F.set(this, void 0),
        O.set(this, void 0),
        k.set(this, void 0),
        w.set(this, void 0),
        W.set(this, void 0),
        G.set(this, void 0),
        E.set(this, void 0),
        R.set(this, void 0),
        D.set(this, void 0),
        A.set(this, void 0),
        H.set(this, void 0),
        q.set(this, void 0),
        P.set(this, void 0),
        Z.set(this, 0),
        U.set(this, void 0),
        this.init(t, e);
    }
    init(t, e) {
      e
        ? ((g[0] =
            g[16] =
            g[1] =
            g[2] =
            g[3] =
            g[4] =
            g[5] =
            g[6] =
            g[7] =
            g[8] =
            g[9] =
            g[10] =
            g[11] =
            g[12] =
            g[13] =
            g[14] =
            g[15] =
              0),
          d(this, $, g))
        : d(this, $, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
        t
          ? (d(this, k, 3238371032),
            d(this, w, 914150663),
            d(this, W, 812702999),
            d(this, G, 4144912697),
            d(this, E, 4290775857),
            d(this, R, 1750603025),
            d(this, D, 1694076839),
            d(this, A, 3204075428))
          : (d(this, k, 1779033703),
            d(this, w, 3144134277),
            d(this, W, 1013904242),
            d(this, G, 2773480762),
            d(this, E, 1359893119),
            d(this, R, 2600822924),
            d(this, D, 528734635),
            d(this, A, 1541459225)),
        d(this, B, d(this, U, d(this, T, d(this, q, 0)))),
        d(this, F, d(this, H, !1)),
        d(this, O, !0),
        d(this, P, t);
    }
    update(t) {
      if (f(this, F)) return this;
      let e;
      t instanceof ArrayBuffer ? (e = new Uint8Array(t)) : (e = t);
      let a = 0,
        i = e.length,
        s = f(this, $);
      for (; a < i; ) {
        let o;
        if (
          (f(this, H) &&
            (d(this, H, !1),
            (s[0] = f(this, B)),
            (s[16] =
              s[1] =
              s[2] =
              s[3] =
              s[4] =
              s[5] =
              s[6] =
              s[7] =
              s[8] =
              s[9] =
              s[10] =
              s[11] =
              s[12] =
              s[13] =
              s[14] =
              s[15] =
                0)),
          typeof e != "string")
        )
          for (o = f(this, U); a < i && o < 64; ++a)
            s[o >> 2] |= e[a] << S[o++ & 3];
        else
          for (o = f(this, U); a < i && o < 64; ++a) {
            let l = e.charCodeAt(a);
            l < 128
              ? (s[o >> 2] |= l << S[o++ & 3])
              : l < 2048
                ? ((s[o >> 2] |= (192 | (l >> 6)) << S[o++ & 3]),
                  (s[o >> 2] |= (128 | (l & 63)) << S[o++ & 3]))
                : l < 55296 || l >= 57344
                  ? ((s[o >> 2] |= (224 | (l >> 12)) << S[o++ & 3]),
                    (s[o >> 2] |= (128 | ((l >> 6) & 63)) << S[o++ & 3]),
                    (s[o >> 2] |= (128 | (l & 63)) << S[o++ & 3]))
                  : ((l =
                      65536 +
                      (((l & 1023) << 10) | (e.charCodeAt(++a) & 1023))),
                    (s[o >> 2] |= (240 | (l >> 18)) << S[o++ & 3]),
                    (s[o >> 2] |= (128 | ((l >> 12) & 63)) << S[o++ & 3]),
                    (s[o >> 2] |= (128 | ((l >> 6) & 63)) << S[o++ & 3]),
                    (s[o >> 2] |= (128 | (l & 63)) << S[o++ & 3]));
          }
        d(this, Z, o),
          d(this, T, f(this, T) + (o - f(this, U))),
          o >= 64
            ? (d(this, B, s[16]),
              d(this, U, o - 64),
              this.hash(),
              d(this, H, !0))
            : d(this, U, o);
      }
      return (
        f(this, T) > 4294967295 &&
          (d(this, q, f(this, q) + ((f(this, T) / 4294967296) << 0)),
          d(this, T, f(this, T) % 4294967296)),
        this
      );
    }
    finalize() {
      if (f(this, F)) return;
      d(this, F, !0);
      let t = f(this, $),
        e = f(this, Z);
      (t[16] = f(this, B)),
        (t[e >> 2] |= bt[e & 3]),
        d(this, B, t[16]),
        e >= 56 &&
          (f(this, H) || this.hash(),
          (t[0] = f(this, B)),
          (t[16] =
            t[1] =
            t[2] =
            t[3] =
            t[4] =
            t[5] =
            t[6] =
            t[7] =
            t[8] =
            t[9] =
            t[10] =
            t[11] =
            t[12] =
            t[13] =
            t[14] =
            t[15] =
              0)),
        (t[14] = (f(this, q) << 3) | (f(this, T) >>> 29)),
        (t[15] = f(this, T) << 3),
        this.hash();
    }
    hash() {
      let t = f(this, k),
        e = f(this, w),
        a = f(this, W),
        i = f(this, G),
        s = f(this, E),
        o = f(this, R),
        l = f(this, D),
        u = f(this, A),
        m = f(this, $),
        x,
        v,
        p,
        h,
        y,
        M,
        C,
        Y,
        tt,
        V;
      for (let _ = 16; _ < 64; ++_)
        (h = m[_ - 15]),
          (x = ((h >>> 7) | (h << 25)) ^ ((h >>> 18) | (h << 14)) ^ (h >>> 3)),
          (h = m[_ - 2]),
          (v =
            ((h >>> 17) | (h << 15)) ^ ((h >>> 19) | (h << 13)) ^ (h >>> 10)),
          (m[_] = (m[_ - 16] + x + m[_ - 7] + v) << 0);
      V = e & a;
      for (let _ = 0; _ < 64; _ += 4)
        f(this, O)
          ? (f(this, P)
              ? ((C = 300032),
                (h = m[0] - 1413257819),
                (u = (h - 150054599) << 0),
                (i = (h + 24177077) << 0))
              : ((C = 704751109),
                (h = m[0] - 210244248),
                (u = (h - 1521486534) << 0),
                (i = (h + 143694565) << 0)),
            d(this, O, !1))
          : ((x =
              ((t >>> 2) | (t << 30)) ^
              ((t >>> 13) | (t << 19)) ^
              ((t >>> 22) | (t << 10))),
            (v =
              ((s >>> 6) | (s << 26)) ^
              ((s >>> 11) | (s << 21)) ^
              ((s >>> 25) | (s << 7))),
            (C = t & e),
            (p = C ^ (t & a) ^ V),
            (M = (s & o) ^ (~s & l)),
            (h = u + v + M + X[_] + m[_]),
            (y = x + p),
            (u = (i + h) << 0),
            (i = (h + y) << 0)),
          (x =
            ((i >>> 2) | (i << 30)) ^
            ((i >>> 13) | (i << 19)) ^
            ((i >>> 22) | (i << 10))),
          (v =
            ((u >>> 6) | (u << 26)) ^
            ((u >>> 11) | (u << 21)) ^
            ((u >>> 25) | (u << 7))),
          (Y = i & t),
          (p = Y ^ (i & e) ^ C),
          (M = (u & s) ^ (~u & o)),
          (h = l + v + M + X[_ + 1] + m[_ + 1]),
          (y = x + p),
          (l = (a + h) << 0),
          (a = (h + y) << 0),
          (x =
            ((a >>> 2) | (a << 30)) ^
            ((a >>> 13) | (a << 19)) ^
            ((a >>> 22) | (a << 10))),
          (v =
            ((l >>> 6) | (l << 26)) ^
            ((l >>> 11) | (l << 21)) ^
            ((l >>> 25) | (l << 7))),
          (tt = a & i),
          (p = tt ^ (a & t) ^ Y),
          (M = (l & u) ^ (~l & s)),
          (h = o + v + M + X[_ + 2] + m[_ + 2]),
          (y = x + p),
          (o = (e + h) << 0),
          (e = (h + y) << 0),
          (x =
            ((e >>> 2) | (e << 30)) ^
            ((e >>> 13) | (e << 19)) ^
            ((e >>> 22) | (e << 10))),
          (v =
            ((o >>> 6) | (o << 26)) ^
            ((o >>> 11) | (o << 21)) ^
            ((o >>> 25) | (o << 7))),
          (V = e & a),
          (p = V ^ (e & i) ^ tt),
          (M = (o & l) ^ (~o & u)),
          (h = s + v + M + X[_ + 3] + m[_ + 3]),
          (y = x + p),
          (s = (t + h) << 0),
          (t = (h + y) << 0);
      d(this, k, (f(this, k) + t) << 0),
        d(this, w, (f(this, w) + e) << 0),
        d(this, W, (f(this, W) + a) << 0),
        d(this, G, (f(this, G) + i) << 0),
        d(this, E, (f(this, E) + s) << 0),
        d(this, R, (f(this, R) + o) << 0),
        d(this, D, (f(this, D) + l) << 0),
        d(this, A, (f(this, A) + u) << 0);
    }
    hex() {
      this.finalize();
      let t = f(this, k),
        e = f(this, w),
        a = f(this, W),
        i = f(this, G),
        s = f(this, E),
        o = f(this, R),
        l = f(this, D),
        u = f(this, A),
        m =
          c[(t >> 28) & 15] +
          c[(t >> 24) & 15] +
          c[(t >> 20) & 15] +
          c[(t >> 16) & 15] +
          c[(t >> 12) & 15] +
          c[(t >> 8) & 15] +
          c[(t >> 4) & 15] +
          c[t & 15] +
          c[(e >> 28) & 15] +
          c[(e >> 24) & 15] +
          c[(e >> 20) & 15] +
          c[(e >> 16) & 15] +
          c[(e >> 12) & 15] +
          c[(e >> 8) & 15] +
          c[(e >> 4) & 15] +
          c[e & 15] +
          c[(a >> 28) & 15] +
          c[(a >> 24) & 15] +
          c[(a >> 20) & 15] +
          c[(a >> 16) & 15] +
          c[(a >> 12) & 15] +
          c[(a >> 8) & 15] +
          c[(a >> 4) & 15] +
          c[a & 15] +
          c[(i >> 28) & 15] +
          c[(i >> 24) & 15] +
          c[(i >> 20) & 15] +
          c[(i >> 16) & 15] +
          c[(i >> 12) & 15] +
          c[(i >> 8) & 15] +
          c[(i >> 4) & 15] +
          c[i & 15] +
          c[(s >> 28) & 15] +
          c[(s >> 24) & 15] +
          c[(s >> 20) & 15] +
          c[(s >> 16) & 15] +
          c[(s >> 12) & 15] +
          c[(s >> 8) & 15] +
          c[(s >> 4) & 15] +
          c[s & 15] +
          c[(o >> 28) & 15] +
          c[(o >> 24) & 15] +
          c[(o >> 20) & 15] +
          c[(o >> 16) & 15] +
          c[(o >> 12) & 15] +
          c[(o >> 8) & 15] +
          c[(o >> 4) & 15] +
          c[o & 15] +
          c[(l >> 28) & 15] +
          c[(l >> 24) & 15] +
          c[(l >> 20) & 15] +
          c[(l >> 16) & 15] +
          c[(l >> 12) & 15] +
          c[(l >> 8) & 15] +
          c[(l >> 4) & 15] +
          c[l & 15];
      return (
        f(this, P) ||
          (m +=
            c[(u >> 28) & 15] +
            c[(u >> 24) & 15] +
            c[(u >> 20) & 15] +
            c[(u >> 16) & 15] +
            c[(u >> 12) & 15] +
            c[(u >> 8) & 15] +
            c[(u >> 4) & 15] +
            c[u & 15]),
        m
      );
    }
    toString() {
      return this.hex();
    }
    digest() {
      this.finalize();
      let t = f(this, k),
        e = f(this, w),
        a = f(this, W),
        i = f(this, G),
        s = f(this, E),
        o = f(this, R),
        l = f(this, D),
        u = f(this, A),
        m = [
          (t >> 24) & 255,
          (t >> 16) & 255,
          (t >> 8) & 255,
          t & 255,
          (e >> 24) & 255,
          (e >> 16) & 255,
          (e >> 8) & 255,
          e & 255,
          (a >> 24) & 255,
          (a >> 16) & 255,
          (a >> 8) & 255,
          a & 255,
          (i >> 24) & 255,
          (i >> 16) & 255,
          (i >> 8) & 255,
          i & 255,
          (s >> 24) & 255,
          (s >> 16) & 255,
          (s >> 8) & 255,
          s & 255,
          (o >> 24) & 255,
          (o >> 16) & 255,
          (o >> 8) & 255,
          o & 255,
          (l >> 24) & 255,
          (l >> 16) & 255,
          (l >> 8) & 255,
          l & 255,
        ];
      return (
        f(this, P) ||
          m.push((u >> 24) & 255, (u >> 16) & 255, (u >> 8) & 255, u & 255),
        m
      );
    }
    array() {
      return this.digest();
    }
    arrayBuffer() {
      this.finalize();
      let t = new ArrayBuffer(f(this, P) ? 28 : 32),
        e = new DataView(t);
      return (
        e.setUint32(0, f(this, k)),
        e.setUint32(4, f(this, w)),
        e.setUint32(8, f(this, W)),
        e.setUint32(12, f(this, G)),
        e.setUint32(16, f(this, E)),
        e.setUint32(20, f(this, R)),
        e.setUint32(24, f(this, D)),
        f(this, P) || e.setUint32(28, f(this, A)),
        t
      );
    }
  };
(B = new WeakMap()),
  ($ = new WeakMap()),
  (T = new WeakMap()),
  (F = new WeakMap()),
  (O = new WeakMap()),
  (k = new WeakMap()),
  (w = new WeakMap()),
  (W = new WeakMap()),
  (G = new WeakMap()),
  (E = new WeakMap()),
  (R = new WeakMap()),
  (D = new WeakMap()),
  (A = new WeakMap()),
  (H = new WeakMap()),
  (q = new WeakMap()),
  (P = new WeakMap()),
  (Z = new WeakMap()),
  (U = new WeakMap());
function Mt(n) {
  let t = new st();
  return t.update(n), parseInt(t.hex().substring(0, 8), 16);
}
var _t = function (n) {
    var t = "#";
    return (
      n.forEach(function (e) {
        e < 16 && (t += 0), (t += e.toString(16));
      }),
      t
    );
  },
  gt = function (n, t, e) {
    n /= 360;
    var a = e < 0.5 ? e * (1 + t) : e + t - e * t,
      i = 2 * e - a;
    return [n + 1 / 3, n, n - 1 / 3].map(function (s) {
      return (
        s < 0 && s++,
        s > 1 && s--,
        s < 1 / 6
          ? (s = i + (a - i) * 6 * s)
          : s < 0.5
            ? (s = a)
            : s < 2 / 3
              ? (s = i + (a - i) * 6 * (2 / 3 - s))
              : (s = i),
        Math.round(s * 255)
      );
    });
  },
  z = class {
    constructor(t = {}) {
      let [e, a] = [t.lightness, t.saturation].map(function (i) {
        return (
          (i = i !== void 0 ? i : [0.35, 0.5, 0.65]),
          Array.isArray(i) ? i.concat() : [i]
        );
      });
      (this.L = e),
        (this.S = a),
        typeof t.hue == "number" && (t.hue = { min: t.hue, max: t.hue }),
        typeof t.hue == "object" && !Array.isArray(t.hue) && (t.hue = [t.hue]),
        typeof t.hue > "u" && (t.hue = []),
        (this.hueRanges = t.hue.map(function (i) {
          return {
            min: typeof i.min > "u" ? 0 : i.min,
            max: typeof i.max > "u" ? 360 : i.max,
          };
        })),
        (this.hash = Mt),
        typeof t.hash == "function" && (this.hash = t.hash),
        t.hash === "bkdr" && (this.hash = mt);
    }
    hsl(t) {
      var e,
        a,
        i,
        s = this.hash(t),
        o = 727;
      if (this.hueRanges.length) {
        let l = this.hueRanges[s % this.hueRanges.length];
        e = (((s / this.hueRanges.length) % o) * (l.max - l.min)) / o + l.min;
      } else e = s % 359;
      return (
        (s = Math.ceil(s / 360)),
        (a = this.S[s % this.S.length]),
        (s = Math.ceil(s / this.S.length)),
        (i = this.L[s % this.L.length]),
        [e, a, i]
      );
    }
    rgb(t) {
      var e = this.hsl(t);
      return gt.apply(this, e);
    }
    hex(t) {
      var e = this.rgb(t);
      return _t(e);
    }
  };
var K = L(rt(), 1);
var b = L(Q(), 1);
function yt() {
  return "default" in z ? z.default : z;
}
var lt = new (yt())({ lightness: 0.5, saturation: [0.35, 0.5, 0.65] });
function ft(n) {
  if (n.length <= 1) return [n];
  let t = [],
    e = [...n].sort((s, o) => s.startMilliseconds - o.startMilliseconds),
    a = 0,
    i = e[a].endMilliseconds ?? e[a].startMilliseconds;
  for (let s = 1; s < e.length; s++) {
    let o = e[s];
    i >= o.startMilliseconds && (t.push(...e.splice(a, 1)), s--),
      (a = s),
      (i = o.endMilliseconds ?? o.startMilliseconds);
  }
  return t.length === 0 ? [e] : [...ft(t), e];
}
function ct(n) {
  let { spans: t, endTimestamp: e } = n,
    a = Math.min(...t.map((h) => h.startMilliseconds)),
    s = Math.max(...t.map((h) => h.endMilliseconds ?? h.startMilliseconds)) - a,
    o = ft(t),
    l = 100 / o.length,
    u = Math.floor(Math.max(s / 10, 50)),
    m = Array.from({ length: Math.ceil(s / u) }, (h, y) => y * u),
    x = (0, K.useMemo)(
      () => [...t].sort((h, y) => h.startMilliseconds - y.startMilliseconds),
      [t],
    ),
    [v, p] = (0, K.useState)();
  return (0, b.jsxs)("div", {
    className: I.Timeline,
    onMouseOut: () => p(void 0),
    onBlur: () => p(void 0),
    children: [
      (0, b.jsxs)("svg", {
        className: I.TimelineChart,
        viewBox: `${a - 20} -20 ${s + u + 20} 160`,
        children: [
          m.map((h) =>
            (0, b.jsxs)(
              "g",
              {
                transform: `translate(${a + h}, 0)`,
                children: [
                  (0, b.jsx)("line", {
                    stroke: "pink",
                    x1: 0,
                    x2: 0,
                    y1: "0",
                    y2: "160",
                  }),
                  (0, b.jsxs)("text", {
                    stroke: "pink",
                    x: 4,
                    y: 135,
                    style: { fontSize: `${u / 5}px` },
                    children: [h, "ms"],
                  }),
                ],
              },
              h,
            ),
          ),
          o.map((h, y) =>
            h.map((M, C) =>
              (0, b.jsx)(
                "rect",
                {
                  x: M.startMilliseconds,
                  width: M.endMilliseconds - M.startMilliseconds,
                  y: y * l + 20,
                  height: l,
                  fill: lt.hex(M.label),
                  stroke: v === M ? "white" : void 0,
                  onMouseOver: () => p(M),
                  children: (0, b.jsx)("title", {
                    children: `${M.label} ${((M.endMilliseconds ?? M.startMilliseconds) - M.startMilliseconds).toLocaleString()}ms`,
                  }),
                },
                C,
              ),
            ),
          ),
        ],
      }),
      (0, b.jsxs)("table", {
        className: I.TimelineTable,
        children: [
          (0, b.jsx)("thead", {
            children: (0, b.jsxs)("tr", {
              children: [
                (0, b.jsx)("td", { children: "Label" }),
                (0, b.jsx)("td", { children: "Timestamp" }),
                (0, b.jsx)("td", { children: "Duration" }),
                (0, b.jsx)("td", { children: "Waterfall" }),
              ],
            }),
          }),
          (0, b.jsx)("tbody", {
            children: x.map((h, y) =>
              (0, b.jsxs)(
                "tr",
                {
                  onMouseOver: () => p(h),
                  onFocus: () => p(h),
                  className: h === v ? I.HoveredSpanRow : void 0,
                  children: [
                    (0, b.jsx)("td", { children: h.label }),
                    (0, b.jsx)("td", {
                      children: `${(h.startMilliseconds - a).toLocaleString()}ms`,
                    }),
                    (0, b.jsx)("td", {
                      children: `${((h.endMilliseconds ?? h.startMilliseconds) - h.startMilliseconds).toLocaleString()}ms`,
                    }),
                    (0, b.jsx)("td", {
                      className: I.Waterfall,
                      children: (0, b.jsx)("svg", {
                        viewBox: `${a} 0 ${s} 20`,
                        children: (0, b.jsx)(
                          "rect",
                          {
                            x: h.startMilliseconds,
                            width: h.endMilliseconds - h.startMilliseconds,
                            y: 0,
                            height: 20,
                            fill: lt.hex(h.label),
                          },
                          y,
                        ),
                      }),
                    }),
                  ],
                },
                y,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
var r = L(Q(), 1);
function ht(n, t) {
  return "value" in t ? Tt(n, t) : pt(t);
}
function pt(n) {
  return vt(n.timestamps);
}
function vt(n) {
  return n.endMilliseconds !== void 0 &&
    n.endMilliseconds - n.startMilliseconds !== 0
    ? (0, r.jsxs)("span", {
        children: [
          Math.floor(n.endMilliseconds - n.startMilliseconds).toLocaleString(),
          "ms",
        ],
      })
    : (0, r.jsxs)("span", { children: ["at ", n.startMilliseconds] });
}
var St = ["bytes", "KB", "MB", "GB", "TB", "PB"];
function dt(n) {
  let t = Math.floor(Math.log(n) / Math.log(1e3));
  return `${parseFloat((n / Math.pow(1e3, t)).toLocaleString())} ${St[t]}`;
}
function Tt(n, t) {
  return n.startsWith("memory_usage") ? dt(t.value) : t.value;
}
var kt = /.*\/valve\/www\/(?:.*?)\/(.*)/;
function wt(n) {
  if (CLSTAMP) {
    let t = n.match(kt);
    if (t) {
      let e = "https://swarm.valve.org/files/Steam/rel/storefront/web_src/",
        a = t[1];
      if (a && !a.startsWith("node_modules")) {
        let i = a.match(/(.*?):(\d+:(\d+)?)/);
        return i
          ? `${e}${i[1]}?v=@${CLSTAMP}#L${i[2]}`
          : `${e}${a}?v=@${CLSTAMP}`;
      }
    }
  }
}
function Wt(n) {
  return n.map(([t, e], a) => {
    let i = wt(e);
    return (0, r.jsxs)(
      "span",
      {
        children: [
          t + " ",
          i
            ? (0, r.jsx)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: i,
                children: e,
              })
            : (0, r.jsx)("span", { children: e }),
          (0, r.jsx)("br", {}),
        ],
      },
      a,
    );
  });
}
function Gt(n) {
  let { metrics: t } = n,
    e = Object.entries(t.measurements);
  return (0, r.jsxs)(r.Fragment, {
    children: [
      (0, r.jsx)("h2", { children: "WG Stats" }),
      "Total WG calls: ",
      e.length,
      e.map(([a, i]) =>
        (0, r.jsxs)(
          "details",
          {
            children: [
              (0, r.jsx)("summary", {
                children: (0, r.jsxs)("span", {
                  className: ot,
                  children: [
                    (0, r.jsxs)("span", {
                      children: [
                        "#",
                        a,
                        ": ",
                        i.details?.strLegacyRequestName ??
                          i.details?.strJobName ??
                          a,
                      ],
                    }),
                    (0, r.jsx)("span", { children: ht(a, i) }),
                    i.details?.byteLength &&
                      (0, r.jsx)("span", {
                        children: dt(i.details.byteLength),
                      }),
                  ],
                }),
              }),
              i.details?.stack &&
                (0, r.jsx)("pre", { children: Wt(i.details.stack) }),
            ],
          },
          a,
        ),
      ),
    ],
  });
}
function Et(n, t) {
  let e = [];
  for (let [a, i] of Object.entries(n.measurements))
    "timestamps" in i &&
      (t === "WG"
        ? e.push({
            ...i.timestamps,
            label: `WG ${i.details?.strLegacyRequestName ?? i.details?.strJobName ?? a}`,
          })
        : e.push({ ...i.timestamps, label: `${t} ${a}` }));
  return e;
}
function Rt(n) {
  let t = [];
  for (let [e, a] of Object.entries(n.categories)) t.push(...Et(a, e));
  return t;
}
function Dt(n) {
  return (0, r.jsx)("table", {
    className: j,
    children: (0, r.jsx)("tbody", {
      children: Object.entries(n.metricsData.measurements).map(([t, e]) =>
        (0, r.jsxs)(
          "tr",
          {
            children: [
              (0, r.jsxs)("td", { children: [t, ":"] }),
              (0, r.jsx)("td", { children: ht(t, e) }),
            ],
          },
          t,
        ),
      ),
    }),
  });
}
function At(n) {
  return (0, r.jsx)("table", {
    className: j,
    children: (0, r.jsx)("tbody", {
      children: Object.entries(n.metricsData.dimensions).map(([t, e]) =>
        (0, r.jsxs)(
          "tr",
          {
            children: [
              (0, r.jsxs)("td", { children: [t, ":"] }),
              (0, r.jsx)("td", { children: e }),
            ],
          },
          t,
        ),
      ),
    }),
  });
}
function Bt(n) {
  let { metricsData: t, name: e } = n;
  return (0, r.jsxs)(r.Fragment, {
    children: [
      Object.keys(t.dimensions).length > 0 &&
        (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("h2", { children: [e, " Dimensions"] }),
            (0, r.jsx)(At, { metricsData: t }),
          ],
        }),
      Object.keys(t.measurements).length > 0 &&
        (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("h2", { children: [e, " Measurements"] }),
            (0, r.jsx)(Dt, { metricsData: t }),
          ],
        }),
    ],
  });
}
var Pt =
    "https://grafana.valve.org/steam/d/a6066f12-141d-4cb5-be00-11f5646c0a10/node-ssr-controller-stats?orgId=2&",
  Ut = "https://grafana.valve.org/shared/d/l66htQGWz/pm2?orgId=1&var-job=All&",
  Nt =
    "https://grafana.valve.org/steam/d/bb3cf20b-37cd-4da8-a82c-781d472c6cbf/server-detail-by-rack-ip?orgId=2&";
function Ct(n) {
  switch (n) {
    case 1:
      return "SteamPublic Timescale";
    case 2:
      return "SteamBeta Timescale";
    default:
      return "SteamDev Timescale";
  }
}
function Lt(n) {
  switch (n) {
    case 1:
      return "Steam Prometheus";
    default:
      return "monitor.valve.org prometheus";
  }
}
function $t(n) {
  let [t, e] = (0, N.useState)(!1),
    a = (0, N.useRef)(null);
  (0, N.useEffect)(() => {
    t && a.current?.showModal();
  }, [t]);
  let i = new URLSearchParams();
  i.set("var-datasource", Ct(et.EUNIVERSE)),
    n.metrics.logToWG.forEach((l) => {
      l.operation && i.set("var-site", l.operation);
      let u = l.dimensions?.find((m) => m.name === "route")?.value_string;
      u && i.set("var-route", u);
    });
  let s = new URLSearchParams();
  s.set("var-datasource", Lt(et.EUNIVERSE)),
    n.metrics.categories.Server.dimensions.Host &&
      s.set("var-host", n.metrics.categories.Server.dimensions.Host.toString()),
    n.metrics.categories.Server.dimensions.App &&
      s.set("var-app", n.metrics.categories.Server.dimensions.App.toString());
  let o = new URLSearchParams();
  if (n.metrics.categories.WG.dimensions["WG address"]) {
    let l = n.metrics.categories.WG.dimensions["WG address"]
      .toString()
      .match(/ip-(.*?)\./)?.[1]
      .replace(/-/g, ".");
    l && o.set("var-ipaddressrack", l);
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [
      (0, r.jsx)("button", {
        className: (0, J.default)(it, n.buttonClassName),
        onClick: () => e(!t),
        children: "perf",
      }),
      t &&
        (0, r.jsxs)("dialog", {
          className: (0, J.default)(at, n.dialogClassName),
          ref: a,
          children: [
            (0, r.jsx)("button", {
              className: (0, J.default)(nt),
              onClick: () => e(!t),
              children: "x",
            }),
            (0, r.jsx)("table", {
              className: j,
              children: (0, r.jsxs)("tbody", {
                children: [
                  (0, r.jsx)("tr", {
                    children: (0, r.jsx)("td", {
                      children: (0, r.jsx)("a", {
                        target: "_blank",
                        rel: "noreferrer",
                        href: Pt + i.toString(),
                        children: "WebMetrics grafana for this route",
                      }),
                    }),
                  }),
                  (0, r.jsx)("tr", {
                    children: (0, r.jsx)("td", {
                      children: (0, r.jsx)("a", {
                        target: "_blank",
                        rel: "noreferrer",
                        href: Ut + s.toString(),
                        children: "PM2 grafana for this host",
                      }),
                    }),
                  }),
                  !!CLSTAMP &&
                    (0, r.jsxs)("tr", {
                      children: [
                        (0, r.jsx)("td", { children: "Changelist:" }),
                        (0, r.jsx)("td", {
                          children: (0, r.jsx)("a", {
                            target: "_blank",
                            rel: "noreferrer",
                            href: `https://swarm.valve.org/changes/${CLSTAMP}`,
                            children: CLSTAMP,
                          }),
                        }),
                      ],
                    }),
                  (0, r.jsxs)("tr", {
                    children: [
                      (0, r.jsx)("td", { children: "WG address:" }),
                      (0, r.jsx)("td", {
                        children: (0, r.jsx)("a", {
                          target: "_blank",
                          rel: "noreferrer",
                          href: Nt + o.toString(),
                          children:
                            n.metrics.categories.WG.dimensions["WG address"],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object.entries(n.metrics.categories).map(([l, u]) =>
              l === "WG"
                ? (0, r.jsx)(Gt, { metrics: u }, l)
                : (0, r.jsx)(Bt, { name: l, metricsData: u }, l),
            ),
            n.metrics.logToWG.map((l) => {
              let u =
                  l.dimensions?.filter((x) => x.value_string !== void 0) ?? [],
                m =
                  l.dimensions?.filter((x) => x.value_integer !== void 0) ?? [];
              return (0, r.jsxs)(
                N.default.Fragment,
                {
                  children: [
                    (0, r.jsxs)("h2", {
                      children: [
                        'Metrics Logged for "',
                        l.program,
                        '" "',
                        l.operation,
                        '"',
                      ],
                    }),
                    (0, r.jsx)("table", {
                      className: j,
                      children: (0, r.jsxs)("tbody", {
                        children: [
                          u.length > 0 &&
                            (0, r.jsxs)(r.Fragment, {
                              children: [
                                (0, r.jsx)("tr", {
                                  children: (0, r.jsx)("td", {
                                    children: "String dimensions:",
                                  }),
                                }),
                                u.map((x) =>
                                  (0, r.jsxs)(
                                    "tr",
                                    {
                                      children: [
                                        (0, r.jsxs)("td", {
                                          children: [x.name, ":"],
                                        }),
                                        (0, r.jsx)("td", {
                                          children: x.value_string,
                                        }),
                                      ],
                                    },
                                    x.name,
                                  ),
                                ),
                              ],
                            }),
                          m.length > 0 &&
                            (0, r.jsxs)(r.Fragment, {
                              children: [
                                (0, r.jsx)("tr", {
                                  children: (0, r.jsx)("td", {
                                    children: "Numeric dimensions:",
                                  }),
                                }),
                                m.map((x) =>
                                  (0, r.jsxs)(
                                    "tr",
                                    {
                                      children: [
                                        (0, r.jsxs)("td", {
                                          children: [x.name, ":"],
                                        }),
                                        (0, r.jsx)("td", {
                                          children: x.value_integer,
                                        }),
                                      ],
                                    },
                                    x.name,
                                  ),
                                ),
                              ],
                            }),
                          l.measurements &&
                            l.measurements.length > 0 &&
                            (0, r.jsxs)(r.Fragment, {
                              children: [
                                (0, r.jsx)("tr", {
                                  children: (0, r.jsx)("td", {
                                    children: "Measurements:",
                                  }),
                                }),
                                l.measurements?.map((x) =>
                                  (0, r.jsxs)(
                                    "tr",
                                    {
                                      children: [
                                        (0, r.jsxs)("td", {
                                          children: [x.name, ":"],
                                        }),
                                        (0, r.jsx)("td", {
                                          children:
                                            x.value_integer ?? x.value_float,
                                        }),
                                      ],
                                    },
                                    x.name,
                                  ),
                                ),
                              ],
                            }),
                        ],
                      }),
                    }),
                  ],
                },
                `${l.program}/${l.operation}`,
              );
            }),
            (0, r.jsx)(ct, {
              spans: Rt(n.metrics),
              endTimestamp: n.metrics.reportTimestamp,
            }),
          ],
        }),
    ],
  });
}
export { $t as default };

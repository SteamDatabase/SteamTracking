import { h as f, t as p, v as h, w as g } from "./chunk-XAVWBSYL.js";
import { p as d } from "./chunk-2JQZQ44F.js";
import { a as S } from "./chunk-7HR4H3FY.js";
import { c as y, e as _ } from "./chunk-6LV3XD5Z.js";
var D = y((v) => {
  "use strict";
  v.byteLength = I;
  v.toByteArray = F;
  v.fromByteArray = G;
  var i = [],
    c = [],
    R = typeof Uint8Array < "u" ? Uint8Array : Array,
    P = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (k = 0, N = P.length; k < N; ++k) (i[k] = P[k]), (c[P.charCodeAt(k)] = k);
  var k, N;
  c[45] = 62;
  c[95] = 63;
  function x(e) {
    var r = e.length;
    if (r % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var t = e.indexOf("=");
    t === -1 && (t = r);
    var n = t === r ? 0 : 4 - (t % 4);
    return [t, n];
  }
  function I(e) {
    var r = x(e),
      t = r[0],
      n = r[1];
    return ((t + n) * 3) / 4 - n;
  }
  function w(e, r, t) {
    return ((r + t) * 3) / 4 - t;
  }
  function F(e) {
    var r,
      t = x(e),
      n = t[0],
      o = t[1],
      a = new R(w(e, n, o)),
      s = 0,
      l = o > 0 ? n - 4 : n,
      u;
    for (u = 0; u < l; u += 4)
      (r =
        (c[e.charCodeAt(u)] << 18) |
        (c[e.charCodeAt(u + 1)] << 12) |
        (c[e.charCodeAt(u + 2)] << 6) |
        c[e.charCodeAt(u + 3)]),
        (a[s++] = (r >> 16) & 255),
        (a[s++] = (r >> 8) & 255),
        (a[s++] = r & 255);
    return (
      o === 2 &&
        ((r = (c[e.charCodeAt(u)] << 2) | (c[e.charCodeAt(u + 1)] >> 4)),
        (a[s++] = r & 255)),
      o === 1 &&
        ((r =
          (c[e.charCodeAt(u)] << 10) |
          (c[e.charCodeAt(u + 1)] << 4) |
          (c[e.charCodeAt(u + 2)] >> 2)),
        (a[s++] = (r >> 8) & 255),
        (a[s++] = r & 255)),
      a
    );
  }
  function U(e) {
    return i[(e >> 18) & 63] + i[(e >> 12) & 63] + i[(e >> 6) & 63] + i[e & 63];
  }
  function B(e, r, t) {
    for (var n, o = [], a = r; a < t; a += 3)
      (n =
        ((e[a] << 16) & 16711680) +
        ((e[a + 1] << 8) & 65280) +
        (e[a + 2] & 255)),
        o.push(U(n));
    return o.join("");
  }
  function G(e) {
    for (
      var r, t = e.length, n = t % 3, o = [], a = 16383, s = 0, l = t - n;
      s < l;
      s += a
    )
      o.push(B(e, s, s + a > l ? l : s + a));
    return (
      n === 1
        ? ((r = e[t - 1]), o.push(i[r >> 2] + i[(r << 4) & 63] + "=="))
        : n === 2 &&
          ((r = (e[t - 2] << 8) + e[t - 1]),
          o.push(i[r >> 10] + i[(r >> 4) & 63] + i[(r << 2) & 63] + "=")),
      o.join("")
    );
  }
});
var E = _(S());
var b = _(S());
var m = class e {
  static sm_strDomain;
  static sm_strController;
  static sm_strMethod;
  static sm_strSubmethod;
  static sm_strComputedLinkPrefix;
  static SetNavEventParams(r, t, n = null, o = null) {
    (e.sm_strDomain = r),
      (e.sm_strController = t),
      (e.sm_strMethod = n),
      (e.sm_strSubmethod = o),
      (e.sm_strComputedLinkPrefix = null);
  }
  static GetDefaultParams() {
    let r = { domain: e.sm_strDomain, controller: e.sm_strController };
    return (
      e.sm_strMethod && (r.method = e.sm_strMethod),
      e.sm_strSubmethod && (r.submethod = e.sm_strSubmethod),
      r
    );
  }
  static InstrumentLink(r, t, n = null) {
    let o = e.GetLinkParam(t, n);
    return p.AddNavParamToURL(r, o);
  }
  static GetLinkParam(r, t = null) {
    let n;
    if (typeof r != "string") {
      if (r.domain) return p.GetLinkParam(r, t);
      n = r.feature || "";
    }
    let o;
    if (!e.sm_strComputedLinkPrefix && !e.ComputeStaticLinkPrefix())
      return null;
    o = e.sm_strComputedLinkPrefix;
    let a = p.EncodeEventComponent(n);
    return a && ((o += "_" + a), t && (o += "_" + t)), o;
  }
  static ComputeStaticLinkPrefix() {
    return e.sm_strDomain
      ? ((e.sm_strComputedLinkPrefix = p.ComputeLinkPrefix(
          e.sm_strDomain,
          e.sm_strController,
          e.sm_strMethod,
          e.sm_strSubmethod,
        )),
        !0)
      : (f(
          !1,
          "CStoreNavEvents::SetNavEventParams was not called before calling InstrumentLink!",
        ),
        !1);
  }
};
var A = _(S()),
  L = _(d()),
  K = A.createContext({});
var C = _(d());
function T(e) {
  let { children: r, ...t } = e,
    n = g(),
    o = E.useMemo(
      () => ({ ...m.GetDefaultParams(), ...n, ...t }),
      [n, t.domain, t.controller, t.method, t.submethod, t.feature, t.depth],
    );
  return (0, C.jsx)(h, { ...o, children: r });
}
export { D as a, T as b };

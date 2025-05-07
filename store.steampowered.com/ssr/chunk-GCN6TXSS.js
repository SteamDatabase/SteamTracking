const CLSTAMP = 9721150;

var k = Object.create;
var f = Object.defineProperty;
var i = Object.getOwnPropertyDescriptor;
var l = Object.getOwnPropertyNames;
var m = Object.getPrototypeOf,
  n = Object.prototype.hasOwnProperty;
var o = (b, a, c) =>
  a in b
    ? f(b, a, { enumerable: !0, configurable: !0, writable: !0, value: c })
    : (b[a] = c);
var p = (b) => (a) => {
  var c = b[a];
  if (c) return c();
  throw new Error("Module not found in bundle: " + a);
};
var q = (b, a) => () => (b && (a = b((b = 0))), a);
var r = (b, a) => () => (a || b((a = { exports: {} }).exports, a), a.exports),
  s = (b, a) => {
    for (var c in a) f(b, c, { get: a[c], enumerable: !0 });
  },
  j = (b, a, c, e) => {
    if ((a && typeof a == "object") || typeof a == "function")
      for (let d of l(a))
        !n.call(b, d) &&
          d !== c &&
          f(b, d, {
            get: () => a[d],
            enumerable: !(e = i(a, d)) || e.enumerable,
          });
    return b;
  };
var t = (b, a, c) => (
    (c = b != null ? k(m(b)) : {}),
    j(
      a || !b || !b.__esModule
        ? f(c, "default", { value: b, enumerable: !0 })
        : c,
      b,
    )
  ),
  u = (b) => j(f({}, "__esModule", { value: !0 }), b),
  v = (b, a, c, e) => {
    for (
      var d = e > 1 ? void 0 : e ? i(a, c) : a, g = b.length - 1, h;
      g >= 0;
      g--
    )
      (h = b[g]) && (d = (e ? h(a, c, d) : h(d)) || d);
    return e && d && f(a, c, d), d;
  };
var w = (b, a, c) => o(b, typeof a != "symbol" ? a + "" : a, c);
export { p as a, q as b, r as c, s as d, t as e, u as f, v as g, w as h };

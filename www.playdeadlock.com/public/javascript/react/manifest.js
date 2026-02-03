/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "10397957";
(() => {
  "use strict";
  var e,
    r,
    a,
    t,
    n,
    o = {},
    s = {};
  function d(e) {
    var r = s[e];
    if (void 0 !== r) return r.exports;
    var a = (s[e] = { exports: {} });
    return o[e](a, a.exports, d), a.exports;
  }
  (d.m = o),
    (e = []),
    (d.O = (r, a, t, n) => {
      if (!a) {
        var o = 1 / 0;
        for (f = 0; f < e.length; f++) {
          for (var [a, t, n] = e[f], s = !0, c = 0; c < a.length; c++)
            (!1 & n || o >= n) && Object.keys(d.O).every((e) => d.O[e](a[c]))
              ? a.splice(c--, 1)
              : ((s = !1), n < o && (o = n));
          if (s) {
            e.splice(f--, 1);
            var i = t();
            void 0 !== i && (r = i);
          }
        }
        return r;
      }
      n = n || 0;
      for (var f = e.length; f > 0 && e[f - 1][2] > n; f--) e[f] = e[f - 1];
      e[f] = [a, t, n];
    }),
    (d.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return d.d(r, { a: r }), r;
    }),
    (a = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (d.t = function (e, t) {
      if ((1 & t && (e = this(e)), 8 & t)) return e;
      if ("object" == typeof e && e) {
        if (4 & t && e.__esModule) return e;
        if (16 & t && "function" == typeof e.then) return e;
      }
      var n = Object.create(null);
      d.r(n);
      var o = {};
      r = r || [null, a({}), a([]), a(a)];
      for (var s = 2 & t && e; "object" == typeof s && !~r.indexOf(s); s = a(s))
        Object.getOwnPropertyNames(s).forEach((r) => (o[r] = () => e[r]));
      return (o.default = () => e), d.d(n, o), n;
    }),
    (d.d = (e, r) => {
      for (var a in r)
        d.o(r, a) &&
          !d.o(e, a) &&
          Object.defineProperty(e, a, { enumerable: !0, get: r[a] });
    }),
    (d.f = {}),
    (d.e = (e) =>
      Promise.all(Object.keys(d.f).reduce((r, a) => (d.f[a](e, r), r), []))),
    (d.u = (e) =>
      "javascript/react/" +
      ({
        18: "shared_french-json",
        25: "shared_russian-json",
        27: "shared_sc_schinese-json",
        31: "shared_finnish-json",
        110: "shared_dutch-json",
        149: "shared_vietnamese-json",
        152: "shared_turkish-json",
        165: "shared_hungarian-json",
        208: "shared_german-json",
        225: "shared_swedish-json",
        239: "shared_portuguese-json",
        241: "shared_tchinese-json",
        256: "shared_english-json",
        306: "shared_indonesian-json",
        320: "shared_norwegian-json",
        435: "shared_latam-json",
        449: "shared_bulgarian-json",
        523: "shared_danish-json",
        539: "shared_koreana-json",
        562: "shared_brazilian-json",
        591: "shared_czech-json",
        632: "shared_spanish-json",
        710: "shared_arabic-json",
        712: "shared_greek-json",
        749: "shared_romanian-json",
        786: "shared_schinese-json",
        912: "shared_italian-json",
        954: "shared_ukrainian-json",
        967: "shared_polish-json",
        973: "shared_japanese-json",
        976: "shared_thai-json",
      }[e] || e) +
      ".js?contenthash=" +
      {
        18: "fa3dbebc95183766e9da",
        25: "3fd20b38d46b4e51ae58",
        27: "f35df04ad2a9b3fb6a7e",
        31: "37cce742d42e3379ec9c",
        110: "1e36d872b1a086831dc5",
        149: "eb69bfb997c8e26dfe0a",
        152: "f083f68d4a6a380c8237",
        165: "0bc0f373d8c91f942eb2",
        208: "d423e4f81834e6d380e0",
        225: "671ef4e93211a8abdddf",
        239: "58ecc5a894565f8933f8",
        241: "17ece792698d740936fc",
        256: "6cd0f576bd4339f83d97",
        306: "cee62644b77ce7c2088e",
        320: "bf24a1b3298031c2376b",
        322: "57e9dbab253742ce3f95",
        333: "c663ffb9741b1ffad7ca",
        435: "6f8e231d1c9f12aeaf12",
        449: "741d2d000ed4613e1b64",
        519: "c6cb0ecb1a38cb837e4b",
        523: "9229b6b623733a9e66a3",
        539: "214295e465ea6b94f583",
        562: "9732c8e92f3acf9541fc",
        591: "fe5895e760d55fc8e42e",
        632: "869b04c0509e3ee48933",
        710: "47e37292f15a28a8c37f",
        712: "0b376877cfdc3518d8c5",
        749: "ab0458c44570c43506cb",
        786: "66b59c6e06776b004da6",
        912: "cf415ac4667c5f33a5e5",
        954: "5e41f726eb7853f14500",
        967: "c48a465ae443f08eec17",
        973: "2d324c93fc6c87530402",
        976: "b8097974eb6bae839cc0",
      }[e]),
    (d.miniCssF = (e) =>
      "css/react/" + e + ".css?contenthash=8930caddb358f11696fb"),
    (d.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (d.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (t = {}),
    (n = "deadlock_react:"),
    (d.l = (e, r, a, o) => {
      if (t[e]) t[e].push(r);
      else {
        var s, c;
        if (void 0 !== a)
          for (
            var i = document.getElementsByTagName("script"), f = 0;
            f < i.length;
            f++
          ) {
            var b = i[f];
            if (
              b.getAttribute("src") == e ||
              b.getAttribute("data-webpack") == n + a
            ) {
              s = b;
              break;
            }
          }
        s ||
          ((c = !0),
          ((s = document.createElement("script")).charset = "utf-8"),
          (s.timeout = 120),
          d.nc && s.setAttribute("nonce", d.nc),
          s.setAttribute("data-webpack", n + a),
          (s.src = e)),
          (t[e] = [r]);
        var h = (r, a) => {
            (s.onerror = s.onload = null), clearTimeout(l);
            var n = t[e];
            if (
              (delete t[e],
              s.parentNode && s.parentNode.removeChild(s),
              n && n.forEach((e) => e(a)),
              r)
            )
              return r(a);
          },
          l = setTimeout(
            h.bind(null, void 0, { type: "timeout", target: s }),
            12e4,
          );
        (s.onerror = h.bind(null, s.onerror)),
          (s.onload = h.bind(null, s.onload)),
          c && document.head.appendChild(s);
      }
    }),
    (d.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (d.p = ""),
    (() => {
      if ("undefined" != typeof document) {
        var e = (e) =>
            new Promise((r, a) => {
              var t = d.miniCssF(e),
                n = d.p + t;
              if (
                ((e, r) => {
                  for (
                    var a = document.getElementsByTagName("link"), t = 0;
                    t < a.length;
                    t++
                  ) {
                    var n =
                      (s = a[t]).getAttribute("data-href") ||
                      s.getAttribute("href");
                    if ("stylesheet" === s.rel && (n === e || n === r))
                      return s;
                  }
                  var o = document.getElementsByTagName("style");
                  for (t = 0; t < o.length; t++) {
                    var s;
                    if (
                      (n = (s = o[t]).getAttribute("data-href")) === e ||
                      n === r
                    )
                      return s;
                  }
                })(t, n)
              )
                return r();
              ((e, r, a, t, n) => {
                var o = document.createElement("link");
                (o.rel = "stylesheet"),
                  (o.type = "text/css"),
                  (o.onerror = o.onload =
                    (a) => {
                      if (((o.onerror = o.onload = null), "load" === a.type))
                        t();
                      else {
                        var s = a && a.type,
                          d = (a && a.target && a.target.href) || r,
                          c = new Error(
                            "Loading CSS chunk " +
                              e +
                              " failed.\n(" +
                              s +
                              ": " +
                              d +
                              ")",
                          );
                        (c.name = "ChunkLoadError"),
                          (c.code = "CSS_CHUNK_LOAD_FAILED"),
                          (c.type = s),
                          (c.request = d),
                          o.parentNode && o.parentNode.removeChild(o),
                          n(c);
                      }
                    }),
                  (o.href = r),
                  a
                    ? a.parentNode.insertBefore(o, a.nextSibling)
                    : document.head.appendChild(o);
              })(e, n, null, r, a);
            }),
          r = { 556: 0 };
        d.f.miniCss = (a, t) => {
          r[a]
            ? t.push(r[a])
            : 0 !== r[a] &&
              { 333: 1 }[a] &&
              t.push(
                (r[a] = e(a).then(
                  () => {
                    r[a] = 0;
                  },
                  (e) => {
                    throw (delete r[a], e);
                  },
                )),
              );
        };
      }
    })(),
    (() => {
      var e = { 556: 0 };
      (d.f.j = (r, a) => {
        var t = d.o(e, r) ? e[r] : void 0;
        if (0 !== t)
          if (t) a.push(t[2]);
          else if (556 != r) {
            var n = new Promise((a, n) => (t = e[r] = [a, n]));
            a.push((t[2] = n));
            var o = d.p + d.u(r),
              s = new Error();
            d.l(
              o,
              (a) => {
                if (d.o(e, r) && (0 !== (t = e[r]) && (e[r] = void 0), t)) {
                  var n = a && ("load" === a.type ? "missing" : a.type),
                    o = a && a.target && a.target.src;
                  (s.message =
                    "Loading chunk " + r + " failed.\n(" + n + ": " + o + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = n),
                    (s.request = o),
                    t[1](s);
                }
              },
              "chunk-" + r,
              r,
            );
          } else e[r] = 0;
      }),
        (d.O.j = (r) => 0 === e[r]);
      var r = (r, a) => {
          var t,
            n,
            [o, s, c] = a,
            i = 0;
          if (o.some((r) => 0 !== e[r])) {
            for (t in s) d.o(s, t) && (d.m[t] = s[t]);
            if (c) var f = c(d);
          }
          for (r && r(a); i < o.length; i++)
            (n = o[i]), d.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return d.O(f);
        },
        a = (self.webpackChunkdeadlock_react =
          self.webpackChunkdeadlock_react || []);
      a.forEach(r.bind(null, 0)), (a.push = r.bind(null, a.push.bind(a)));
    })();
})();

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (() => {
    "use strict";
    var _ = {},
      h = {};
    function i(e) {
      var d = h[e];
      if (d !== void 0) return d.exports;
      var a = (h[e] = { exports: {} });
      return _[e].call(a.exports, a, a.exports, i), a.exports;
    }
    (i.m = _),
      (() => {
        var e = [];
        i.O = (d, a, o, f) => {
          if (a) {
            f = f || 0;
            for (var t = e.length; t > 0 && e[t - 1][2] > f; t--)
              e[t] = e[t - 1];
            e[t] = [a, o, f];
            return;
          }
          for (var n = 1 / 0, t = 0; t < e.length; t++) {
            for (var [a, o, f] = e[t], b = !0, r = 0; r < a.length; r++)
              (f & !1 || n >= f) && Object.keys(i.O).every((u) => i.O[u](a[r]))
                ? a.splice(r--, 1)
                : ((b = !1), f < n && (n = f));
            if (b) {
              e.splice(t--, 1);
              var c = o();
              c !== void 0 && (d = c);
            }
          }
          return d;
        };
      })(),
      (i.n = (e) => {
        var d = e && e.__esModule ? () => e.default : () => e;
        return i.d(d, { a: d }), d;
      }),
      (() => {
        var e = Object.getPrototypeOf
            ? (a) => Object.getPrototypeOf(a)
            : (a) => a.__proto__,
          d;
        i.t = function (a, o) {
          if (
            (o & 1 && (a = this(a)),
            o & 8 ||
              (typeof a == "object" &&
                a &&
                ((o & 4 && a.__esModule) ||
                  (o & 16 && typeof a.then == "function"))))
          )
            return a;
          var f = Object.create(null);
          i.r(f);
          var t = {};
          d = d || [null, e({}), e([]), e(e)];
          for (
            var n = o & 2 && a;
            typeof n == "object" && !~d.indexOf(n);
            n = e(n)
          )
            Object.getOwnPropertyNames(n).forEach((b) => (t[b] = () => a[b]));
          return (t.default = () => a), i.d(f, t), f;
        };
      })(),
      (i.d = (e, d) => {
        for (var a in d)
          i.o(d, a) &&
            !i.o(e, a) &&
            Object.defineProperty(e, a, { enumerable: !0, get: d[a] });
      }),
      (i.f = {}),
      (i.e = (e) =>
        Promise.all(Object.keys(i.f).reduce((d, a) => (i.f[a](e, d), d), []))),
      (i.u = (e) =>
        "javascript/applications/help/" +
        ({
          60: "localization/main_spanish-json",
          198: "localization/main_schinese-json",
          286: "localization/main_ukrainian-json",
          664: "localization/main_malay-json",
          759: "localization/main_koreana-json",
          831: "localization/main_danish-json",
          833: "localization/main_vietnamese-json",
          976: "greenenvelope",
          1574: "footer",
          1602: "localization/main_arabic-json",
          1724: "localization/main_turkish-json",
          2446: "localization/main_brazilian-json",
          3140: "localization/main_greek-json",
          3589: "localization/main_bulgarian-json",
          3867: "localization/main_polish-json",
          4102: "localization/main_indonesian-json",
          4694: "localization/main_french-json",
          5052: "localization/main_english-json",
          5103: "localization/main_sc_schinese-json",
          5388: "localization/main_norwegian-json",
          6428: "localization/main_italian-json",
          7345: "localization/main_hungarian-json",
          7553: "localization/main_romanian-json",
          7724: "localization/main_thai-json",
          8021: "localization/main_russian-json",
          8547: "localization/main_finnish-json",
          8724: "localization/main_german-json",
          8749: "localization/main_tchinese-json",
          9387: "localization/main_portuguese-json",
          9453: "localization/main_swedish-json",
          9515: "localization/main_czech-json",
          9783: "localization/main_latam-json",
          9857: "localization/main_japanese-json",
          9914: "localization/main_dutch-json",
        }[e] || e) +
        ".js?contenthash=" +
        {
          20: "dad34d0059caa149bf75",
          60: "dd496a706491c3113b8f",
          198: "0fc9c51e8223bcf47dc7",
          286: "7538e9f542b4ee21575b",
          361: "f8fbbf81de4fffe31187",
          412: "efe666d6440c05552c32",
          662: "11ae5d118c85cdd3a7d2",
          664: "82cd60d162345fcc8080",
          684: "bc43eaa6041b3462ea5a",
          759: "c0f82aa7b78d2f887fd2",
          764: "dafbcffe9628f493b580",
          831: "3e85db622eb1fc634d4a",
          833: "dd12eb244a78fd5b208d",
          976: "4a5944e23b2057bb4ce8",
          1031: "c3f47aa4ec95ff7d7fad",
          1047: "46431d903059e9d33093",
          1143: "99852ba61683226041b6",
          1229: "71747b34790bb19e055d",
          1359: "77b75fd4af435a424914",
          1574: "836fd9d81a6702c07277",
          1580: "412387197fe5e69ccaf6",
          1602: "e6eea6fee2fdbfae2309",
          1655: "6581a8933eed9a8db7b5",
          1724: "455bb793732c62a47313",
          1924: "b8b6d1c5c533faeebbae",
          2164: "20487e8ed38db39fdea5",
          2173: "a4dbee52e0e8a887ac85",
          2330: "b5bb82237c4cd91c613c",
          2378: "64b3e08e86fc1b21fd3e",
          2446: "45f84c24b2dd6c0a844a",
          2560: "8630e84fcb3e92e3ca0d",
          2589: "7508c3b35a668138c11d",
          2626: "1788a2c39dcc140f745f",
          2711: "c2472d45ab7b52db4a8d",
          2736: "5abf09bc3bc11af8d2fb",
          2811: "5ab63133108e3887e2c3",
          2936: "0f819a9667a80b271dd6",
          3140: "9b132f5787d6bd2098ff",
          3248: "7d5d2eb4c8fd1a6567cd",
          3296: "66a6ee4b83b82bdcf228",
          3301: "1365ef5c3446be62f3a9",
          3366: "54b9db68b0886199294a",
          3589: "a47cb6b859e9d5b94d69",
          3867: "81527d65913a67959db4",
          4102: "dad9b2f219fb9c8ae210",
          4122: "72099b0caa7ff510c36b",
          4175: "2a77bed29d97ca7d518e",
          4401: "9bb8bced6c89a5e48a6d",
          4468: "3294493e44a67f27d556",
          4694: "8f67bc28d01fa263ba13",
          5052: "f03f95f08f2a26964b6e",
          5059: "2b1e3c10675a099e05b1",
          5103: "633e12c04b2858c9731a",
          5319: "f9149b63c86dca02dbf3",
          5388: "651764f6dae323277a7d",
          5474: "a30e83235a9bac5e42f7",
          5666: "99072b54280fd7bd51a3",
          5964: "cd47407bf5b081bba4a9",
          6139: "806cfea7097f52f40bdd",
          6428: "0c4cff7e03d05e6aac36",
          6509: "81e19738b5f38b91c755",
          6515: "630bab8a44740a1fb1d7",
          7046: "479154e1bbfd653e45b5",
          7267: "02ccbd25e4c3b4d9cc83",
          7345: "f9aa80baec2024e59476",
          7442: "67eba33a9c1e51a7719a",
          7553: "0703274ae03a7f6febae",
          7688: "f7e8680852f6c36e9078",
          7700: "7a489c9f007e22275f19",
          7724: "bbbfb80562c0cb9566d4",
          7925: "d75682db9e6115287251",
          8010: "013ed41ea292b34c5af4",
          8021: "3c4f4573ea0be37a6d69",
          8233: "29e4c281bb27460455b4",
          8356: "943adec543ee75d2ca2e",
          8515: "3566ec5475a20025d531",
          8547: "4e9d5dd2f50f38beef85",
          8724: "50b892f6a7139c72c58a",
          8727: "a4f9ff8c88b0f0901df9",
          8749: "f2312a7206a09a65da9c",
          8844: "20f4567eecb949b62468",
          8973: "a01fb0de85aa135ad2c0",
          9259: "3d5eef82b9c988f2441f",
          9333: "564458f1d05c48888995",
          9387: "4316205b785a90285745",
          9431: "2d7e7a6619309725da6c",
          9453: "906270e7fcd1a0ab4c9c",
          9468: "e32729bc5db20f53a428",
          9515: "7ebce2ce84a63df8d749",
          9605: "858776876f7046f8c3fc",
          9720: "28660cfc8dadb4b53094",
          9783: "36beac8a4a5b76394291",
          9854: "3474ec09689ef6a52df9",
          9857: "0037155a8d60c713f0e7",
          9914: "143ddc17f64959c5da47",
          9945: "690327418bc0638f2930",
          9965: "d0367c9af36596050972",
          9998: "45ccce4ebf962571d01e",
        }[e]),
      (i.miniCssF = (e) =>
        "css/applications/help/" +
        { 976: "greenenvelope", 1574: "footer" }[e] +
        ".css?contenthash=" +
        { 976: "bb7de05dc237a18ee3a9", 1574: "436ae22804e8e02fe8f1" }[e]),
      (i.g = (function () {
        if (typeof globalThis == "object") return globalThis;
        try {
          return this || new Function("return this")();
        } catch {
          if (typeof window == "object") return window;
        }
      })()),
      (i.o = (e, d) => Object.prototype.hasOwnProperty.call(e, d)),
      (() => {
        var e = {},
          d = "Help:";
        i.l = (a, o, f, t) => {
          if (e[a]) {
            e[a].push(o);
            return;
          }
          var n, b;
          if (f !== void 0)
            for (
              var r = document.getElementsByTagName("script"), c = 0;
              c < r.length;
              c++
            ) {
              var l = r[c];
              if (
                l.getAttribute("src") == a ||
                l.getAttribute("data-webpack") == d + f
              ) {
                n = l;
                break;
              }
            }
          n ||
            ((b = !0),
            (n = document.createElement("script")),
            (n.charset = "utf-8"),
            (n.timeout = 120),
            i.nc && n.setAttribute("nonce", i.nc),
            n.setAttribute("data-webpack", d + f),
            (n.src = a)),
            (e[a] = [o]);
          var s = (p, u) => {
              (n.onerror = n.onload = null), clearTimeout(m);
              var g = e[a];
              if (
                (delete e[a],
                n.parentNode && n.parentNode.removeChild(n),
                g && g.forEach((j) => j(u)),
                p)
              )
                return p(u);
            },
            m = setTimeout(
              s.bind(null, void 0, { type: "timeout", target: n }),
              12e4,
            );
          (n.onerror = s.bind(null, n.onerror)),
            (n.onload = s.bind(null, n.onload)),
            b && document.head.appendChild(n);
        };
      })(),
      (i.r = (e) => {
        typeof Symbol < "u" &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (i.p = ""),
      (() => {
        if (!(typeof document > "u")) {
          var e = (f, t, n, b, r) => {
              var c = document.createElement("link");
              (c.rel = "stylesheet"), (c.type = "text/css");
              var l = (s) => {
                if (((c.onerror = c.onload = null), s.type === "load")) b();
                else {
                  var m = s && s.type,
                    p = (s && s.target && s.target.href) || t,
                    u = new Error(
                      "Loading CSS chunk " +
                        f +
                        ` failed.
(` +
                        m +
                        ": " +
                        p +
                        ")",
                    );
                  (u.name = "ChunkLoadError"),
                    (u.code = "CSS_CHUNK_LOAD_FAILED"),
                    (u.type = m),
                    (u.request = p),
                    c.parentNode && c.parentNode.removeChild(c),
                    r(u);
                }
              };
              return (
                (c.onerror = c.onload = l),
                (c.href = t),
                n
                  ? n.parentNode.insertBefore(c, n.nextSibling)
                  : document.head.appendChild(c),
                c
              );
            },
            d = (f, t) => {
              for (
                var n = document.getElementsByTagName("link"), b = 0;
                b < n.length;
                b++
              ) {
                var r = n[b],
                  c = r.getAttribute("data-href") || r.getAttribute("href");
                if (r.rel === "stylesheet" && (c === f || c === t)) return r;
              }
              for (
                var l = document.getElementsByTagName("style"), b = 0;
                b < l.length;
                b++
              ) {
                var r = l[b],
                  c = r.getAttribute("data-href");
                if (c === f || c === t) return r;
              }
            },
            a = (f) =>
              new Promise((t, n) => {
                var b = i.miniCssF(f),
                  r = i.p + b;
                if (d(b, r)) return t();
                e(f, r, null, t, n);
              }),
            o = { 4556: 0 };
          i.f.miniCss = (f, t) => {
            var n = { 976: 1, 1574: 1 };
            o[f]
              ? t.push(o[f])
              : o[f] !== 0 &&
                n[f] &&
                t.push(
                  (o[f] = a(f).then(
                    () => {
                      o[f] = 0;
                    },
                    (b) => {
                      throw (delete o[f], b);
                    },
                  )),
                );
          };
        }
      })(),
      (() => {
        var e = { 4556: 0 };
        (i.f.j = (o, f) => {
          var t = i.o(e, o) ? e[o] : void 0;
          if (t !== 0)
            if (t) f.push(t[2]);
            else if (o != 4556) {
              var n = new Promise((l, s) => (t = e[o] = [l, s]));
              f.push((t[2] = n));
              var b = i.p + i.u(o),
                r = new Error(),
                c = (l) => {
                  if (
                    i.o(e, o) &&
                    ((t = e[o]), t !== 0 && (e[o] = void 0), t)
                  ) {
                    var s = l && (l.type === "load" ? "missing" : l.type),
                      m = l && l.target && l.target.src;
                    (r.message =
                      "Loading chunk " +
                      o +
                      ` failed.
(` +
                      s +
                      ": " +
                      m +
                      ")"),
                      (r.name = "ChunkLoadError"),
                      (r.type = s),
                      (r.request = m),
                      t[1](r);
                  }
                };
              i.l(b, c, "chunk-" + o, o);
            } else e[o] = 0;
        }),
          (i.O.j = (o) => e[o] === 0);
        var d = (o, f) => {
            var [t, n, b] = f,
              r,
              c,
              l = 0;
            if (t.some((m) => e[m] !== 0)) {
              for (r in n) i.o(n, r) && (i.m[r] = n[r]);
              if (b) var s = b(i);
            }
            for (o && o(f); l < t.length; l++)
              (c = t[l]), i.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
            return i.O(s);
          },
          a = (self.webpackChunkHelp = self.webpackChunkHelp || []);
        a.forEach(d.bind(null, 0)), (a.push = d.bind(null, a.push.bind(a)));
      })();
  })();
})();

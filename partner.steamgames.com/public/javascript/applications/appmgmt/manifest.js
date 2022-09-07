/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7491600";
(() => {
  "use strict";
  var e,
    a,
    n,
    r,
    d,
    s,
    t,
    c = {},
    i = {};
  function f(e) {
    var a = i[e];
    if (void 0 !== a) return a.exports;
    var n = (i[e] = { id: e, loaded: !1, exports: {} });
    return c[e].call(n.exports, n, n.exports, f), (n.loaded = !0), n.exports;
  }
  (f.m = c),
    (e = []),
    (f.O = (a, n, r, d) => {
      if (!n) {
        var s = 1 / 0;
        for (o = 0; o < e.length; o++) {
          for (var [n, r, d] = e[o], t = !0, c = 0; c < n.length; c++)
            (!1 & d || s >= d) && Object.keys(f.O).every((e) => f.O[e](n[c]))
              ? n.splice(c--, 1)
              : ((t = !1), d < s && (s = d));
          if (t) {
            e.splice(o--, 1);
            var i = r();
            void 0 !== i && (a = i);
          }
        }
        return a;
      }
      d = d || 0;
      for (var o = e.length; o > 0 && e[o - 1][2] > d; o--) e[o] = e[o - 1];
      e[o] = [n, r, d];
    }),
    (f.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return f.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (f.t = function (e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ("object" == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && "function" == typeof e.then) return e;
      }
      var d = Object.create(null);
      f.r(d);
      var s = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var t = 2 & r && e; "object" == typeof t && !~a.indexOf(t); t = n(t))
        Object.getOwnPropertyNames(t).forEach((a) => (s[a] = () => e[a]));
      return (s.default = () => e), f.d(d, s), d;
    }),
    (f.d = (e, a) => {
      for (var n in a)
        f.o(a, n) &&
          !f.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: a[n] });
    }),
    (f.f = {}),
    (f.e = (e) =>
      Promise.all(Object.keys(f.f).reduce((a, n) => (f.f[n](e, a), a), []))),
    (f.u = (e) =>
      "javascript/applications/appmgmt/" +
      {
        477: "libraries~ab4a73d6e",
        493: "libraries~29ab6dbf5",
        647: "main_czech-json",
        698: "main_dutch-json",
        727: "main_japanese-json",
        799: "main_german-json",
        819: "marketing_turkish-json",
        874: "marketing_dutch-json",
        903: "marketing_russian-json",
        1117: "main_french-json",
        1162: "shared_thai-json",
        1313: "shared_bulgarian-json",
        2029: "shared_sc_schinese-json",
        2136: "events",
        2431: "shared_arabic-json",
        2443: "shared_latam-json",
        2448: "marketing_polish-json",
        2522: "logoedtior",
        2529: "pricingtool",
        2537: "shared_schinese-json",
        2581: "marketing_danish-json",
        2584: "chunk~59e71612b",
        2601: "marketing_spanish-json",
        2767: "main_polish-json",
        2824: "marketing_german-json",
        2844: "shared_japanese-json",
        2848: "main_ukrainian-json",
        2942: "main_tchinese-json",
        3069: "libraries~b3fafa6d2",
        3112: "shared_french-json",
        3185: "main_swedish-json",
        3252: "shared_polish-json",
        3277: "main_romanian-json",
        3323: "main_danish-json",
        3359: "main_bulgarian-json",
        3453: "marketing_czech-json",
        3557: "shared_finnish-json",
        3768: "main_finnish-json",
        3784: "chunk~9824b1ba9",
        4033: "marketing_schinese-json",
        4108: "shared_norwegian-json",
        4171: "marketing_koreana-json",
        4189: "shared_czech-json",
        4199: "marketing_french-json",
        4238: "marketing_thai-json",
        4297: "shared_greek-json",
        4458: "marketing_brazilian-json",
        4535: "login",
        4601: "broadcast",
        4696: "libraries~59e71612b",
        4722: "main_koreana-json",
        4823: "shared_romanian-json",
        4860: "main_russian-json",
        4929: "marketing_english-json",
        4964: "shared_vietnamese-json",
        5257: "marketing_portuguese-json",
        5438: "shared_turkish-json",
        5625: "shared_swedish-json",
        5849: "shared_portuguese-json",
        5888: "chunk~ab4a73d6e",
        5925: "shared_dutch-json",
        5933: "shared_italian-json",
        5948: "shared_hungarian-json",
        6007: "shared_german-json",
        6019: "marketing_swedish-json",
        6035: "marketing_ukrainian-json",
        6087: "main_latam-json",
        6117: "chunk~ed848006f",
        6169: "marketing_norwegian-json",
        6492: "shared_spanish-json",
        6542: "shared_koreana-json",
        6699: "steamdeck",
        6815: "main_english-json",
        6817: "main_spanish-json",
        6846: "marketing_vietnamese-json",
        7082: "marketing_japanese-json",
        7236: "main_portuguese-json",
        7245: "chunk~b70782b28",
        7334: "chunk~29ab6dbf5",
        7602: "shared_tchinese-json",
        7762: "steamml",
        7781: "shared_ukrainian-json",
        7871: "marketing_greek-json",
        7890: "main_thai-json",
        7940: "libraries~a4c1dc2af",
        7942: "marketing_finnish-json",
        7951: "main_norwegian-json",
        7975: "shared_english-json",
        8001: "marketing_italian-json",
        8051: "main_hungarian-json",
        8155: "main_italian-json",
        8168: "main_vietnamese-json",
        8385: "shared_brazilian-json",
        8774: "marketing_romanian-json",
        8960: "marketing_bulgarian-json",
        8974: "storeadmin",
        8994: "marketing_hungarian-json",
        9060: "chunk~b3fafa6d2",
        9062: "shared_russian-json",
        9431: "main_brazilian-json",
        9568: "main_greek-json",
        9603: "libraries~82d50d904",
        9663: "main_turkish-json",
        9753: "shared_danish-json",
        9899: "marketing_latam-json",
        9903: "marketing_tchinese-json",
        9919: "marketing_sc_schinese-json",
        9980: "main_schinese-json",
      }[e] +
      ".js?contenthash=" +
      {
        477: "00a4e7eac55f4cdbfbda",
        493: "c64dca69a7f261bba615",
        647: "78bfc7a36856a71867fb",
        698: "065b39e0f2f534fe4467",
        727: "a2c698765aed3c460123",
        799: "dee3cd86582cc49745f8",
        819: "4d5c39dec6d2e5087f74",
        874: "3affccff0ad93cf6abde",
        903: "89fa65e77cda2e763089",
        1117: "61e92f9f20f85a9120af",
        1162: "4bed8ae99dab45a40959",
        1313: "2b2f8c604f8cbd9c341a",
        2029: "590083161416eaabccb4",
        2136: "3a5c8069e4030f83ff19",
        2431: "fe5ea733482a8a8976a5",
        2443: "82c7187fddbbfd90fdb2",
        2448: "7843dda343ddad95fa9d",
        2522: "b6c14fca06dae8e501ef",
        2529: "a7be2f0e555e1fa96f47",
        2537: "006f2c64f0e82b7a9cf3",
        2581: "d4356baf2bea97a10106",
        2584: "81d44d92a3f14ce3ccfb",
        2601: "7449db1375d1f0a459dc",
        2767: "375184c406f1b422fe68",
        2824: "e4ebc49212779106b86f",
        2844: "9871b514ae1dfec9f5f8",
        2848: "46b70c1d8fbfc081043b",
        2942: "6a9cc1de09390025d38c",
        3069: "e33186e3c17b5589abd0",
        3112: "d3bc83c2f4609ddf504e",
        3185: "7eab1dd59ec4e0516794",
        3252: "1e673dc6825eb8bdcb34",
        3277: "75e547e77ce6e8742259",
        3323: "d4b5e73748cef83246f4",
        3359: "32b6ade956f7936eff16",
        3453: "32496e6140fec98886e6",
        3557: "ed4949d2b94ed05a014b",
        3768: "063f4d5c4bfdf17ce669",
        3784: "108250ee4ee20ad44225",
        4033: "fb7f1ea181a9cff034a1",
        4108: "6df98e0d2e2b3fcde4a3",
        4171: "a2c9de1545935ce13eff",
        4189: "e2066a9f859d0d879b99",
        4199: "f8a0483bd9e903d201a2",
        4238: "0c2acada271be2027cc7",
        4297: "d69c6d1f3d8e539b2b6f",
        4458: "0bc3e6ee7fcc67fa27ea",
        4535: "0d2510fcd407545d361e",
        4601: "9fb7469e68e03a0f9e34",
        4696: "b1d900572a5763fb2f4c",
        4722: "e9a6577083ec538d1d5c",
        4823: "6ffcc89c8d481c6b69ce",
        4860: "2fbbb2caa5a79afa8cda",
        4929: "347de2c867ad1aefc6a1",
        4964: "86001f406a024171a14d",
        5257: "18958703c976b72a7c8f",
        5438: "89c01478453dcb33af74",
        5625: "c7443c8680d6873eff11",
        5849: "e5fbe503d5d87355375c",
        5888: "10354696c83973064306",
        5925: "dcb777bdd1d94da99eb3",
        5933: "e4e976700135200eb0cb",
        5948: "a624dbeca84b66c2f418",
        6007: "83bccbcfaff334debf3f",
        6019: "7cc81a737bee257c1d60",
        6035: "c60650656b0ae61c775c",
        6087: "be6d4f016fec3e5a01b5",
        6117: "1dd438c5580566e68652",
        6169: "625b2c5a380149a72556",
        6492: "254ebcfa78108f046453",
        6542: "3829ff486dd86a33e95a",
        6699: "04b60c2f5d07fadc496c",
        6815: "4db1b65ef243c455a513",
        6817: "45459f9479e00f27558f",
        6846: "e4b7179e0e870f589585",
        7082: "4064b1ab9b375aa3ba74",
        7236: "c0a2fa736a01cbc06c1a",
        7245: "e1891c3266aae1c94446",
        7334: "d4fccc12d8408f1573e6",
        7602: "7fefa0ea5aad6069afbb",
        7762: "bcf0155f2f29fe8489bf",
        7781: "5460446e33833cd802ac",
        7871: "71902116a78429065824",
        7890: "165db30944dedff37383",
        7940: "aef15f4451ebd73cae5a",
        7942: "b67276fb77d9771a6ffe",
        7951: "67b99bfff10e9ed285c8",
        7975: "c1179cb522cf98dc92af",
        8001: "853fc6d96f7e4eddf4d8",
        8051: "85802bc17dccd1be4393",
        8155: "eb044f5f7a440ca66773",
        8168: "9a713d96f2c8bd8620c5",
        8385: "575e58b1435d2b5a4121",
        8774: "a8befffdd10a8b5ba725",
        8960: "d1a811d24b052d247622",
        8974: "ff2604431c910f7d9999",
        8994: "4057e7d4cc4f7b8d439c",
        9060: "fce48bf027e457e3f2fc",
        9062: "1f2643a6f2e0046bf539",
        9431: "b5f3f82ae4bdbba77b31",
        9568: "eb4dbb9f893e35b5735c",
        9603: "f9f6a01c5bce6aee1f36",
        9663: "5b6d40b19d387ee7c6e0",
        9753: "a3158b4d6af09f930152",
        9899: "d774ff0f3a6dec70cbb4",
        9903: "88db48fd05c51a05e08e",
        9919: "4671150433a4d9096c85",
        9980: "b82f89d676add13408c6",
      }[e]),
    (f.miniCssF = (e) =>
      "css/applications/appmgmt/" +
      {
        493: "libraries~29ab6dbf5",
        2136: "events",
        2522: "logoedtior",
        2529: "pricingtool",
        4601: "broadcast",
        5888: "chunk~ab4a73d6e",
        6699: "steamdeck",
        7762: "steamml",
        8974: "storeadmin",
        9060: "chunk~b3fafa6d2",
      }[e] +
      ".css?contenthash=" +
      {
        493: "d885e31859d50e4d4824",
        2136: "2828dd820d3e228999f7",
        2522: "b1596d727e0bf9992e67",
        2529: "c4183bb7c1d9c7de2dbb",
        4601: "2418b380a15889c1c130",
        5888: "23a2ef4d9b80a51ee6b6",
        6699: "255576ed648944357d8c",
        7762: "e3a2b8e7ea298a4cb539",
        8974: "204ff54d3ad2d0998199",
        9060: "84e3430ef5f4fddeffcb",
      }[e]),
    (f.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (f.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (r = {}),
    (d = "appmgmt-storeadmin:"),
    (f.l = (e, a, n, s) => {
      if (r[e]) r[e].push(a);
      else {
        var t, c;
        if (void 0 !== n)
          for (
            var i = document.getElementsByTagName("script"), o = 0;
            o < i.length;
            o++
          ) {
            var b = i[o];
            if (
              b.getAttribute("src") == e ||
              b.getAttribute("data-webpack") == d + n
            ) {
              t = b;
              break;
            }
          }
        t ||
          ((c = !0),
          ((t = document.createElement("script")).charset = "utf-8"),
          (t.timeout = 120),
          f.nc && t.setAttribute("nonce", f.nc),
          t.setAttribute("data-webpack", d + n),
          (t.src = e)),
          (r[e] = [a]);
        var h = (a, n) => {
            (t.onerror = t.onload = null), clearTimeout(m);
            var d = r[e];
            if (
              (delete r[e],
              t.parentNode && t.parentNode.removeChild(t),
              d && d.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          m = setTimeout(
            h.bind(null, void 0, { type: "timeout", target: t }),
            12e4
          );
        (t.onerror = h.bind(null, t.onerror)),
          (t.onload = h.bind(null, t.onload)),
          c && document.head.appendChild(t);
      }
    }),
    (f.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (f.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e;
      f.g.importScripts && (e = f.g.location + "");
      var a = f.g.document;
      if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
        var n = a.getElementsByTagName("script");
        n.length && (e = n[n.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (f.p = e + "../../../");
    })(),
    (s = (e) =>
      new Promise((a, n) => {
        var r = f.miniCssF(e),
          d = f.p + r;
        if (
          ((e, a) => {
            for (
              var n = document.getElementsByTagName("link"), r = 0;
              r < n.length;
              r++
            ) {
              var d =
                (t = n[r]).getAttribute("data-href") || t.getAttribute("href");
              if ("stylesheet" === t.rel && (d === e || d === a)) return t;
            }
            var s = document.getElementsByTagName("style");
            for (r = 0; r < s.length; r++) {
              var t;
              if ((d = (t = s[r]).getAttribute("data-href")) === e || d === a)
                return t;
            }
          })(r, d)
        )
          return a();
        ((e, a, n, r) => {
          var d = document.createElement("link");
          (d.rel = "stylesheet"),
            (d.type = "text/css"),
            (d.onerror = d.onload =
              (s) => {
                if (((d.onerror = d.onload = null), "load" === s.type)) n();
                else {
                  var t = s && ("load" === s.type ? "missing" : s.type),
                    c = (s && s.target && s.target.href) || a,
                    i = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + c + ")"
                    );
                  (i.code = "CSS_CHUNK_LOAD_FAILED"),
                    (i.type = t),
                    (i.request = c),
                    d.parentNode.removeChild(d),
                    r(i);
                }
              }),
            (d.href = a),
            document.head.appendChild(d);
        })(e, d, a, n);
      })),
    (t = { 6700: 0 }),
    (f.f.miniCss = (e, a) => {
      t[e]
        ? a.push(t[e])
        : 0 !== t[e] &&
          {
            493: 1,
            2136: 1,
            2522: 1,
            2529: 1,
            4601: 1,
            5888: 1,
            6699: 1,
            7762: 1,
            8974: 1,
            9060: 1,
          }[e] &&
          a.push(
            (t[e] = s(e).then(
              () => {
                t[e] = 0;
              },
              (a) => {
                throw (delete t[e], a);
              }
            ))
          );
    }),
    (() => {
      var e = { 6700: 0 };
      (f.f.j = (a, n) => {
        var r = f.o(e, a) ? e[a] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else if (6700 != a) {
            var d = new Promise((n, d) => (r = e[a] = [n, d]));
            n.push((r[2] = d));
            var s = f.p + f.u(a),
              t = new Error();
            f.l(
              s,
              (n) => {
                if (f.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = n && ("load" === n.type ? "missing" : n.type),
                    s = n && n.target && n.target.src;
                  (t.message =
                    "Loading chunk " + a + " failed.\n(" + d + ": " + s + ")"),
                    (t.name = "ChunkLoadError"),
                    (t.type = d),
                    (t.request = s),
                    r[1](t);
                }
              },
              "chunk-" + a,
              a
            );
          } else e[a] = 0;
      }),
        (f.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var r,
            d,
            [s, t, c] = n,
            i = 0;
          if (s.some((a) => 0 !== e[a])) {
            for (r in t) f.o(t, r) && (f.m[r] = t[r]);
            if (c) var o = c(f);
          }
          for (a && a(n); i < s.length; i++)
            (d = s[i]), f.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return f.O(o);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();

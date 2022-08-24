/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7461113";
(() => {
  "use strict";
  var e,
    a,
    n,
    r,
    t,
    s,
    d,
    i = {},
    c = {};
  function o(e) {
    var a = c[e];
    if (void 0 !== a) return a.exports;
    var n = (c[e] = { id: e, loaded: !1, exports: {} });
    return i[e].call(n.exports, n, n.exports, o), (n.loaded = !0), n.exports;
  }
  (o.m = i),
    (e = []),
    (o.O = (a, n, r, t) => {
      if (!n) {
        var s = 1 / 0;
        for (f = 0; f < e.length; f++) {
          for (var [n, r, t] = e[f], d = !0, i = 0; i < n.length; i++)
            (!1 & t || s >= t) && Object.keys(o.O).every((e) => o.O[e](n[i]))
              ? n.splice(i--, 1)
              : ((d = !1), t < s && (s = t));
          if (d) {
            e.splice(f--, 1);
            var c = r();
            void 0 !== c && (a = c);
          }
        }
        return a;
      }
      t = t || 0;
      for (var f = e.length; f > 0 && e[f - 1][2] > t; f--) e[f] = e[f - 1];
      e[f] = [n, r, t];
    }),
    (o.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return o.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (o.t = function (e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ("object" == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && "function" == typeof e.then) return e;
      }
      var t = Object.create(null);
      o.r(t);
      var s = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var d = 2 & r && e; "object" == typeof d && !~a.indexOf(d); d = n(d))
        Object.getOwnPropertyNames(d).forEach((a) => (s[a] = () => e[a]));
      return (s.default = () => e), o.d(t, s), t;
    }),
    (o.d = (e, a) => {
      for (var n in a)
        o.o(a, n) &&
          !o.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: a[n] });
    }),
    (o.f = {}),
    (o.e = (e) =>
      Promise.all(Object.keys(o.f).reduce((a, n) => (o.f[n](e, a), a), []))),
    (o.u = (e) =>
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
        8994: "marketing_hungarian-json",
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
        493: "c5befda12ea1a909e3bc",
        647: "198f4f36746456c96c91",
        698: "06f85e20972b18c41533",
        727: "a51789333db57888b005",
        799: "cc5d2d171bf304ad6471",
        819: "4d5c39dec6d2e5087f74",
        874: "3affccff0ad93cf6abde",
        903: "89fa65e77cda2e763089",
        1117: "0bc4ba80797817f7b639",
        1162: "ae901725ed6f55b721ca",
        1313: "d65cbe2a42571898ad87",
        2029: "590083161416eaabccb4",
        2136: "40681e92aaebb3245f07",
        2431: "fe5ea733482a8a8976a5",
        2443: "9db88185e54b2b18b4d9",
        2448: "7843dda343ddad95fa9d",
        2522: "b6c14fca06dae8e501ef",
        2529: "151f28d51a8bc45ae5cc",
        2537: "c4a8299257e3e9a59662",
        2581: "d4356baf2bea97a10106",
        2584: "81d44d92a3f14ce3ccfb",
        2601: "7449db1375d1f0a459dc",
        2767: "42c20a26c16d4a24cea2",
        2824: "e4ebc49212779106b86f",
        2844: "db7a5f61715194911044",
        2848: "fc528fba215c7594efa9",
        2942: "caeb08da7f5654a676b8",
        3112: "ce3dfa1be9ff0014b039",
        3185: "4e7b2031ba99eb3d6700",
        3252: "eff01d6ee0b2afb1ab92",
        3277: "a88d95257e23cd26e9ff",
        3323: "42352b1a5b4a7a77d169",
        3359: "d96e9d5d8636d90db7f9",
        3453: "32496e6140fec98886e6",
        3557: "cba556c1e4e8e4d7d30c",
        3768: "ab5a0c24bc28927ced85",
        3784: "6c41042000761db43937",
        4033: "fb7f1ea181a9cff034a1",
        4108: "7a6e747772e58cd7b524",
        4171: "a2c9de1545935ce13eff",
        4189: "9b3b87c6934d3141e833",
        4199: "f8a0483bd9e903d201a2",
        4238: "0c2acada271be2027cc7",
        4297: "708ce4a00b6b3f631a6a",
        4458: "0bc3e6ee7fcc67fa27ea",
        4535: "0d2510fcd407545d361e",
        4601: "9fb7469e68e03a0f9e34",
        4696: "b1d900572a5763fb2f4c",
        4722: "29a55cdcd74630e099d4",
        4823: "330a5598c31a022cec77",
        4860: "fb6cdd69075d219cd31d",
        4929: "347de2c867ad1aefc6a1",
        4964: "badd2b7fe6ce8b9af2dd",
        5257: "18958703c976b72a7c8f",
        5438: "1047aed4c7bc91c4dd0f",
        5625: "89b770cfe7e58114f5f3",
        5849: "b183e2aa17c3c6873a48",
        5888: "03ea33b3ffb9fff5feb5",
        5925: "7752459b62a8ca1c8d8f",
        5933: "c61d0ea2a335c95ac35a",
        5948: "565740f1ae8f660d80a8",
        6007: "4614ca18462c2459ab53",
        6019: "7cc81a737bee257c1d60",
        6035: "c60650656b0ae61c775c",
        6087: "70f6429e8215a6592375",
        6117: "1dd438c5580566e68652",
        6169: "625b2c5a380149a72556",
        6492: "e5a4cdca099b98ed9b39",
        6542: "b69625ff2644a4a6a958",
        6699: "04b60c2f5d07fadc496c",
        6815: "efc158e037f86a0f512a",
        6817: "415ade67311ec0173e30",
        6846: "e4b7179e0e870f589585",
        7082: "4064b1ab9b375aa3ba74",
        7236: "2888696c12228d564dec",
        7245: "e1891c3266aae1c94446",
        7334: "d62498a2820eb9dbfa24",
        7602: "8fafa20bf231de792d3a",
        7762: "f50f9abb8dd4bf5f0476",
        7781: "9c8f7729d6623de6b375",
        7871: "71902116a78429065824",
        7890: "8c3e19d8e9b267de0ee3",
        7942: "b67276fb77d9771a6ffe",
        7951: "717976fa67f293c4eb16",
        7975: "7cb562abc3c17ca8fbcf",
        8001: "853fc6d96f7e4eddf4d8",
        8051: "ec80f779b96d42b4a201",
        8155: "251acfc136e09195408b",
        8168: "1bfc94a7d665558517ee",
        8385: "3a960880b5e6d7defe64",
        8774: "a8befffdd10a8b5ba725",
        8960: "d1a811d24b052d247622",
        8994: "4057e7d4cc4f7b8d439c",
        9062: "d6eaa447e6103a19a994",
        9431: "73e0216248b963acf2e0",
        9568: "b4415e35d6f45ad7b961",
        9603: "cbbd335bfe536ae74d23",
        9663: "aa59e99742bccdf4e2c7",
        9753: "ffcd335be47bce8618fa",
        9899: "d774ff0f3a6dec70cbb4",
        9903: "88db48fd05c51a05e08e",
        9919: "4671150433a4d9096c85",
        9980: "f2fc80b752334600826a",
      }[e]),
    (o.miniCssF = (e) =>
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
      }[e] +
      ".css?contenthash=" +
      {
        493: "d885e31859d50e4d4824",
        2136: "585b476610fc742c8636",
        2522: "b1596d727e0bf9992e67",
        2529: "94df61ffe9a3da1421a7",
        4601: "2418b380a15889c1c130",
        5888: "2c8b6e109fce1c38b88e",
        6699: "255576ed648944357d8c",
        7762: "e3a2b8e7ea298a4cb539",
      }[e]),
    (o.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (o.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (r = {}),
    (t = "appmgmt-storeadmin:"),
    (o.l = (e, a, n, s) => {
      if (r[e]) r[e].push(a);
      else {
        var d, i;
        if (void 0 !== n)
          for (
            var c = document.getElementsByTagName("script"), f = 0;
            f < c.length;
            f++
          ) {
            var b = c[f];
            if (
              b.getAttribute("src") == e ||
              b.getAttribute("data-webpack") == t + n
            ) {
              d = b;
              break;
            }
          }
        d ||
          ((i = !0),
          ((d = document.createElement("script")).charset = "utf-8"),
          (d.timeout = 120),
          o.nc && d.setAttribute("nonce", o.nc),
          d.setAttribute("data-webpack", t + n),
          (d.src = e)),
          (r[e] = [a]);
        var h = (a, n) => {
            (d.onerror = d.onload = null), clearTimeout(m);
            var t = r[e];
            if (
              (delete r[e],
              d.parentNode && d.parentNode.removeChild(d),
              t && t.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          m = setTimeout(
            h.bind(null, void 0, { type: "timeout", target: d }),
            12e4
          );
        (d.onerror = h.bind(null, d.onerror)),
          (d.onload = h.bind(null, d.onload)),
          i && document.head.appendChild(d);
      }
    }),
    (o.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e;
      o.g.importScripts && (e = o.g.location + "");
      var a = o.g.document;
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
        (o.p = e + "../../../");
    })(),
    (s = (e) =>
      new Promise((a, n) => {
        var r = o.miniCssF(e),
          t = o.p + r;
        if (
          ((e, a) => {
            for (
              var n = document.getElementsByTagName("link"), r = 0;
              r < n.length;
              r++
            ) {
              var t =
                (d = n[r]).getAttribute("data-href") || d.getAttribute("href");
              if ("stylesheet" === d.rel && (t === e || t === a)) return d;
            }
            var s = document.getElementsByTagName("style");
            for (r = 0; r < s.length; r++) {
              var d;
              if ((t = (d = s[r]).getAttribute("data-href")) === e || t === a)
                return d;
            }
          })(r, t)
        )
          return a();
        ((e, a, n, r) => {
          var t = document.createElement("link");
          (t.rel = "stylesheet"),
            (t.type = "text/css"),
            (t.onerror = t.onload =
              (s) => {
                if (((t.onerror = t.onload = null), "load" === s.type)) n();
                else {
                  var d = s && ("load" === s.type ? "missing" : s.type),
                    i = (s && s.target && s.target.href) || a,
                    c = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + i + ")"
                    );
                  (c.code = "CSS_CHUNK_LOAD_FAILED"),
                    (c.type = d),
                    (c.request = i),
                    t.parentNode.removeChild(t),
                    r(c);
                }
              }),
            (t.href = a),
            document.head.appendChild(t);
        })(e, t, a, n);
      })),
    (d = { 6700: 0 }),
    (o.f.miniCss = (e, a) => {
      d[e]
        ? a.push(d[e])
        : 0 !== d[e] &&
          {
            493: 1,
            2136: 1,
            2522: 1,
            2529: 1,
            4601: 1,
            5888: 1,
            6699: 1,
            7762: 1,
          }[e] &&
          a.push(
            (d[e] = s(e).then(
              () => {
                d[e] = 0;
              },
              (a) => {
                throw (delete d[e], a);
              }
            ))
          );
    }),
    (() => {
      var e = { 6700: 0 };
      (o.f.j = (a, n) => {
        var r = o.o(e, a) ? e[a] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else if (6700 != a) {
            var t = new Promise((n, t) => (r = e[a] = [n, t]));
            n.push((r[2] = t));
            var s = o.p + o.u(a),
              d = new Error();
            o.l(
              s,
              (n) => {
                if (o.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var t = n && ("load" === n.type ? "missing" : n.type),
                    s = n && n.target && n.target.src;
                  (d.message =
                    "Loading chunk " + a + " failed.\n(" + t + ": " + s + ")"),
                    (d.name = "ChunkLoadError"),
                    (d.type = t),
                    (d.request = s),
                    r[1](d);
                }
              },
              "chunk-" + a,
              a
            );
          } else e[a] = 0;
      }),
        (o.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var r,
            t,
            [s, d, i] = n,
            c = 0;
          if (s.some((a) => 0 !== e[a])) {
            for (r in d) o.o(d, r) && (o.m[r] = d[r]);
            if (i) var f = i(o);
          }
          for (a && a(n); c < s.length; c++)
            (t = s[c]), o.o(e, t) && e[t] && e[t][0](), (e[t] = 0);
          return o.O(f);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();

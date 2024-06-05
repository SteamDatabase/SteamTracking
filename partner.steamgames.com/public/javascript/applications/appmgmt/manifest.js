/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8953204";
(() => {
  "use strict";
  var e,
    a,
    n,
    s,
    d,
    c = {},
    r = {};
  function i(e) {
    var a = r[e];
    if (void 0 !== a) return a.exports;
    var n = (r[e] = { id: e, loaded: !1, exports: {} });
    return c[e].call(n.exports, n, n.exports, i), (n.loaded = !0), n.exports;
  }
  (i.m = c),
    (e = []),
    (i.O = (a, n, s, d) => {
      if (!n) {
        var c = 1 / 0;
        for (b = 0; b < e.length; b++) {
          for (var [n, s, d] = e[b], r = !0, f = 0; f < n.length; f++)
            (!1 & d || c >= d) && Object.keys(i.O).every((e) => i.O[e](n[f]))
              ? n.splice(f--, 1)
              : ((r = !1), d < c && (c = d));
          if (r) {
            e.splice(b--, 1);
            var o = s();
            void 0 !== o && (a = o);
          }
        }
        return a;
      }
      d = d || 0;
      for (var b = e.length; b > 0 && e[b - 1][2] > d; b--) e[b] = e[b - 1];
      e[b] = [n, s, d];
    }),
    (i.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return i.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (i.t = function (e, s) {
      if ((1 & s && (e = this(e)), 8 & s)) return e;
      if ("object" == typeof e && e) {
        if (4 & s && e.__esModule) return e;
        if (16 & s && "function" == typeof e.then) return e;
      }
      var d = Object.create(null);
      i.r(d);
      var c = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var r = 2 & s && e; "object" == typeof r && !~a.indexOf(r); r = n(r))
        Object.getOwnPropertyNames(r).forEach((a) => (c[a] = () => e[a]));
      return (c.default = () => e), i.d(d, c), d;
    }),
    (i.d = (e, a) => {
      for (var n in a)
        i.o(a, n) &&
          !i.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: a[n] });
    }),
    (i.f = {}),
    (i.e = (e) =>
      Promise.all(Object.keys(i.f).reduce((a, n) => (i.f[n](e, a), a), []))),
    (i.u = (e) =>
      "javascript/applications/appmgmt/" +
      {
        61: "sales_russian-json",
        77: "sales_vietnamese-json",
        101: "sales_dutch-json",
        584: "sales_koreana-json",
        647: "main_czech-json",
        698: "main_dutch-json",
        727: "main_japanese-json",
        746: "libraries~eae36f74a",
        799: "main_german-json",
        819: "marketing_turkish-json",
        874: "marketing_dutch-json",
        903: "marketing_russian-json",
        979: "libraries~29ddc6b39",
        1012: "sales_romanian-json",
        1043: "sales_schinese-json",
        1117: "main_french-json",
        1162: "shared_thai-json",
        1164: "sales_norwegian-json",
        1313: "shared_bulgarian-json",
        1478: "libraries~46fbcd11a",
        1643: "chunk~60681c765",
        1722: "sales_czech-json",
        2029: "shared_sc_schinese-json",
        2136: "events",
        2167: "chunk~b4cf1c116",
        2431: "shared_arabic-json",
        2443: "shared_latam-json",
        2448: "marketing_polish-json",
        2522: "logoedtior",
        2529: "pricingtool",
        2537: "shared_schinese-json",
        2581: "marketing_danish-json",
        2601: "marketing_spanish-json",
        2681: "sales_indonesian-json",
        2706: "libraries~b58ccb787",
        2715: "chunk~eae36f74a",
        2767: "main_polish-json",
        2824: "marketing_german-json",
        2844: "shared_japanese-json",
        2848: "main_ukrainian-json",
        2942: "main_tchinese-json",
        3059: "libraries~60681c765",
        3112: "shared_french-json",
        3174: "sales_spanish-json",
        3185: "main_swedish-json",
        3252: "shared_polish-json",
        3277: "main_romanian-json",
        3313: "sales_finnish-json",
        3323: "main_danish-json",
        3359: "main_bulgarian-json",
        3453: "marketing_czech-json",
        3552: "libraries~3caf4ca8a",
        3557: "shared_finnish-json",
        3599: "adminpromoreviewdashboard",
        3634: "sales_bulgarian-json",
        3685: "sales_german-json",
        3710: "chunk~9d4f35afa",
        3768: "main_finnish-json",
        3863: "publisherdashboard",
        4033: "marketing_schinese-json",
        4103: "navevents",
        4108: "shared_norwegian-json",
        4166: "sales_thai-json",
        4171: "marketing_koreana-json",
        4189: "shared_czech-json",
        4199: "marketing_french-json",
        4238: "marketing_thai-json",
        4248: "sales_polish-json",
        4297: "shared_greek-json",
        4447: "sales_greek-json",
        4458: "marketing_brazilian-json",
        4535: "login",
        4601: "broadcast",
        4650: "chunk~7c4d46a11",
        4682: "sales_latam-json",
        4722: "main_koreana-json",
        4812: "sales_brazilian-json",
        4823: "shared_romanian-json",
        4860: "main_russian-json",
        4929: "marketing_english-json",
        4935: "sdrconnections",
        4961: "sales_danish-json",
        4964: "shared_vietnamese-json",
        5117: "libraries~511d96142",
        5257: "marketing_portuguese-json",
        5414: "sales_portuguese-json",
        5438: "shared_turkish-json",
        5612: "libraries~bb3891c52",
        5625: "shared_swedish-json",
        5676: "steamlearn",
        5706: "contenthubpages",
        5849: "shared_portuguese-json",
        5855: "sales_swedish-json",
        5925: "shared_dutch-json",
        5933: "shared_italian-json",
        5948: "shared_hungarian-json",
        6007: "shared_german-json",
        6019: "marketing_swedish-json",
        6035: "marketing_ukrainian-json",
        6087: "main_latam-json",
        6169: "marketing_norwegian-json",
        6234: "libraries~7c4d46a11",
        6375: "libraries~b4cf1c116",
        6492: "shared_spanish-json",
        6542: "shared_koreana-json",
        6630: "libraries~24bb3772d",
        6693: "sales_italian-json",
        6699: "steamdeck",
        6762: "sales_sc_schinese-json",
        6808: "resquemsg",
        6815: "main_english-json",
        6817: "main_spanish-json",
        6846: "marketing_vietnamese-json",
        6853: "chunk~ec4f762b0",
        7072: "main_indonesian-json",
        7082: "marketing_japanese-json",
        7094: "sales_japanese-json",
        7181: "sales_tchinese-json",
        7236: "main_portuguese-json",
        7485: "chunk~38155a7b8",
        7602: "shared_tchinese-json",
        7682: "chunk~2b6b77689",
        7724: "sales_french-json",
        7762: "steamml",
        7781: "shared_ukrainian-json",
        7871: "marketing_greek-json",
        7890: "main_thai-json",
        7934: "sales_ukrainian-json",
        7942: "marketing_finnish-json",
        7951: "main_norwegian-json",
        7952: "sales_english-json",
        7975: "shared_english-json",
        8001: "marketing_italian-json",
        8051: "main_hungarian-json",
        8155: "main_italian-json",
        8168: "main_vietnamese-json",
        8385: "shared_brazilian-json",
        8399: "marketing_indonesian-json",
        8754: "shared_indonesian-json",
        8767: "sales_turkish-json",
        8774: "marketing_romanian-json",
        8960: "marketing_bulgarian-json",
        8974: "storeadmin",
        8993: "sales_hungarian-json",
        8994: "marketing_hungarian-json",
        9062: "shared_russian-json",
        9129: "libraries~9d4f35afa",
        9431: "main_brazilian-json",
        9568: "main_greek-json",
        9603: "libraries~82d50d904",
        9645: "libraries~f1126aa1a",
        9663: "main_turkish-json",
        9753: "shared_danish-json",
        9754: "libraries~ec4f762b0",
        9784: "chunk~0efb0496c",
        9828: "libraries~38155a7b8",
        9899: "marketing_latam-json",
        9903: "marketing_tchinese-json",
        9919: "marketing_sc_schinese-json",
        9980: "main_schinese-json",
      }[e] +
      ".js?contenthash=" +
      {
        61: "ec46fa8bcebf5340e631",
        77: "43dda5d594aeca6c4155",
        101: "a2068cf79b724087534e",
        584: "e1edc835aed6bfafcd07",
        647: "f25ad60da1816840b44d",
        698: "d64cef2810ad92396aab",
        727: "0483c870e81360576444",
        746: "90fa94e635b4f6647e63",
        799: "3370c0b8cf65e850e19b",
        819: "08aafc2c151efdb2cb78",
        874: "673c99f3f2ca2e9f3d91",
        903: "0cd9f4f727ba454b5c77",
        979: "398530aa26f56f13c423",
        1012: "a94687869ea4380e2ede",
        1043: "a65118491a23cfff1a7e",
        1117: "9b143f56b0cd714b42be",
        1162: "aef23b82c20b3d81597b",
        1164: "8f8e482754f9ce3aa203",
        1313: "bbc9c813485696ba0889",
        1478: "c4d3af53b43e62ff7421",
        1643: "3196f779099c6a4718d5",
        1722: "9505761fface8382716d",
        2029: "e48b98396bc03a67237f",
        2136: "86459bc53a972b9a2f79",
        2167: "4bacfe3bbac585e64ebe",
        2431: "1ddbbdb2c0edc00865c7",
        2443: "87c41dd129e20c659404",
        2448: "950fec106f4427bacd12",
        2522: "17dae4e004521f1604e7",
        2529: "9d87fca51cf2727aba5b",
        2537: "ccdf093ddac1e5f1c81c",
        2581: "4b5fcf399ce0cc645d00",
        2601: "58f5680b3ac085ae05c8",
        2681: "8cfb15607311eba8878b",
        2706: "cb1a7dfb676460bae171",
        2715: "63035425a594ecf6896c",
        2767: "f8e579946c27aaac7e3a",
        2824: "6815dc47a7f80aabc8fa",
        2844: "bad2a5b9fc36c7588b8e",
        2848: "69dbbfc592e3ad1ad660",
        2942: "5ad17f18428f8cfad080",
        3059: "9aedac609f188076eabd",
        3112: "a9a264ba0561d5129af7",
        3174: "3226ea34fb41a159f816",
        3185: "3c9af271ade6acadbd3f",
        3252: "12ca6e1b45913bb7665e",
        3277: "212feb66404067cbf8db",
        3313: "ddf7a00ebdac1fde18bf",
        3323: "de3eb9f9cb1a43d390a9",
        3359: "5bef6669355c965bb86e",
        3453: "1ee9fe588b9503c078eb",
        3552: "023fe6eedec463110cd2",
        3557: "7d51b795aca720b77fee",
        3599: "62ba2a2deca1bc20c44f",
        3634: "5857a1ab8407a3cce870",
        3685: "450f53961a3afbbd89bc",
        3710: "afc8c91c2eb516096193",
        3768: "4afb8bd447bef4782818",
        3863: "2a847490a341ef07bdd9",
        4033: "506b0f00fc5f025edb11",
        4103: "9709b66dc05bd8b1deaa",
        4108: "6684e1f853670d7d4a48",
        4166: "723e2bc16eaf49996400",
        4171: "b84e90f28bff5da707af",
        4189: "39771ee76432675d2661",
        4199: "ed1af2b319bbc29946d0",
        4238: "2efe44511c434b28ad7a",
        4248: "88171067b55eef9c0b32",
        4297: "80406f89f7f153d46edf",
        4447: "25613b490862a77c33f8",
        4458: "bf77ef4a422413560ff1",
        4535: "541ae45584ba28badacd",
        4601: "4adceebfd2b9549e4c5b",
        4650: "4511ff077178f7feb852",
        4682: "b280ea34de7ce1d4b50e",
        4722: "4aaf7bcc457a86211f2e",
        4812: "7602c8b963a72ce5333f",
        4823: "9a509488a617fb2e60d2",
        4860: "61c2b68e67c3f6baa6ca",
        4929: "f8e2c7b654dc580ffc2e",
        4935: "c92c353bc10f2d841522",
        4961: "95d66bb6c14dc045a71f",
        4964: "ba40be64af3775509e65",
        5117: "77d1a7b403d213f3a698",
        5257: "30deca15c0194ac68988",
        5414: "c607339de8ed4c2b0048",
        5438: "da661f56442e0dcb77e7",
        5612: "68d764a90dc8c236411b",
        5625: "5845fac2dfff419dfdbc",
        5676: "9d86ef40aead634073d2",
        5706: "8ef6ff6dab65c5912411",
        5849: "442b1ee977a867774752",
        5855: "1039c5f93bd4e4a0f8a1",
        5925: "42ad036c8e71f5675baa",
        5933: "54145195a4d9ed643eea",
        5948: "a4d0f76c82121b2fa7f9",
        6007: "bb0e75bef45e45f65a05",
        6019: "56d01082e9c689b214e7",
        6035: "d04fe460cb8602e4908a",
        6087: "04a480dfc71476a672f7",
        6169: "8412393c3463399b84b9",
        6234: "17aaea1e591c4f816cc9",
        6375: "61411c239f06db924413",
        6492: "22c70c4272e662e05bd0",
        6542: "5bc277d87dd619f7fdd4",
        6630: "e1df1640e3d801801959",
        6693: "4e5eb4f0cfc8743c7ef7",
        6699: "fc6b3031f4fffe956723",
        6762: "2e1f0ab367e4a170f0e4",
        6808: "44a4e8459ee97d86ea0c",
        6815: "9b20e786b1d7270accef",
        6817: "c68851948a55a9348a82",
        6846: "f358fb1bb6d34498bbb8",
        6853: "92040ae7ab16192770af",
        7072: "5e78e2f28c3f70cc1068",
        7082: "25be304e4e5a36ac28f0",
        7094: "56d18d53309247c36c9d",
        7181: "e0d39ef216608c27445f",
        7236: "1f13e4fcac094c801f9e",
        7485: "8da57e127895357ecee1",
        7602: "d3f5f399219bcfbb3d87",
        7682: "e1a03a02efc05c5c7093",
        7724: "c8322269d2d47d1e5178",
        7762: "4deb4b8af0cb6d8e09f0",
        7781: "e7e8d6b386210bc4f503",
        7871: "189f4a4e4590fbbfc8b4",
        7890: "18eab3502e196d820868",
        7934: "bb44a349eff7c79360ba",
        7942: "0b0bd122a16d8e3ed219",
        7951: "0754be7417e31e0b9148",
        7952: "e32d610cbf3f4e6cba77",
        7975: "aaa15342d0e6e93bd7ca",
        8001: "9e2eb06e9ed1704a9239",
        8051: "c6d83c9748376d2e2011",
        8155: "022ce0f38fce5b4f740a",
        8168: "7b5f6b7c689a5b9cd12a",
        8385: "ec2604a6190451ec3fd9",
        8399: "04923dec7858199f7345",
        8754: "8f00bcfc83734f4b1ab7",
        8767: "98061182cc26791bc0c4",
        8774: "935c452dc6ebb2a7dfbd",
        8960: "9bd7556cc9bdcb948993",
        8974: "017643002503324957e3",
        8993: "ae2a7883c5e6d76ecf9d",
        8994: "f9e6e54bc5f99287682d",
        9062: "e410a2c12d94005ce42d",
        9129: "c4e793613e1d64832660",
        9431: "21863d5f6cde5876fd74",
        9568: "c45137306da41b6962c2",
        9603: "5ffcebd7bf5c32c8b237",
        9645: "05968e6a945d6f7e1911",
        9663: "9e8ab52aea1d1c73b344",
        9753: "f78a9167f85468262c3d",
        9754: "bcaac80fdb5d232ab9a4",
        9784: "f8ef3412405289a72291",
        9828: "bd689c5c9cc03661bf03",
        9899: "1f48f5aedcc9093f4b36",
        9903: "cd4a78393b471e50f3c5",
        9919: "de58d247468b7de2b3d0",
        9980: "6ae3e8bb2be606372abe",
      }[e]),
    (i.miniCssF = (e) =>
      "css/applications/appmgmt/" +
      {
        746: "libraries~eae36f74a",
        1643: "chunk~60681c765",
        2136: "events",
        2522: "logoedtior",
        2529: "pricingtool",
        3599: "adminpromoreviewdashboard",
        3710: "chunk~9d4f35afa",
        3863: "publisherdashboard",
        4601: "broadcast",
        4935: "sdrconnections",
        5676: "steamlearn",
        6699: "steamdeck",
        6808: "resquemsg",
        6853: "chunk~ec4f762b0",
        7485: "chunk~38155a7b8",
        7762: "steamml",
        8974: "storeadmin",
      }[e] +
      ".css?contenthash=" +
      {
        746: "da3b05b688206293fc3e",
        1643: "ffc5c15d247365d7522c",
        2136: "fe967e7cf6246b2db162",
        2522: "0657d544e37c72c3ae45",
        2529: "94673e8355b72314ddc0",
        3599: "7d397c627b354e1a49cf",
        3710: "3758e0f2b59992dfcc05",
        3863: "baf1aafb7f98bcd5961c",
        4601: "f294db5e57c6dfd50f7b",
        4935: "33eb9d66d0507e03ca68",
        5676: "19faea1384dba07568e7",
        6699: "4694d750def959727f73",
        6808: "7fdbc85de533f923151d",
        6853: "969278b06eb0eb83065e",
        7485: "ef55efc55996f2aa3a73",
        7762: "61877d984bfcf3e7f40f",
        8974: "ef97f0938dd4f9cdcf4a",
      }[e]),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (s = {}),
    (d = "appmgmt-storeadmin:"),
    (i.l = (e, a, n, c) => {
      if (s[e]) s[e].push(a);
      else {
        var r, f;
        if (void 0 !== n)
          for (
            var o = document.getElementsByTagName("script"), b = 0;
            b < o.length;
            b++
          ) {
            var t = o[b];
            if (
              t.getAttribute("src") == e ||
              t.getAttribute("data-webpack") == d + n
            ) {
              r = t;
              break;
            }
          }
        r ||
          ((f = !0),
          ((r = document.createElement("script")).charset = "utf-8"),
          (r.timeout = 120),
          i.nc && r.setAttribute("nonce", i.nc),
          r.setAttribute("data-webpack", d + n),
          (r.src = e)),
          (s[e] = [a]);
        var l = (a, n) => {
            (r.onerror = r.onload = null), clearTimeout(h);
            var d = s[e];
            if (
              (delete s[e],
              r.parentNode && r.parentNode.removeChild(r),
              d && d.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          h = setTimeout(
            l.bind(null, void 0, { type: "timeout", target: r }),
            12e4,
          );
        (r.onerror = l.bind(null, r.onerror)),
          (r.onload = l.bind(null, r.onload)),
          f && document.head.appendChild(r);
      }
    }),
    (i.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (i.p = ""),
    (() => {
      if ("undefined" != typeof document) {
        var e = (e) =>
            new Promise((a, n) => {
              var s = i.miniCssF(e),
                d = i.p + s;
              if (
                ((e, a) => {
                  for (
                    var n = document.getElementsByTagName("link"), s = 0;
                    s < n.length;
                    s++
                  ) {
                    var d =
                      (r = n[s]).getAttribute("data-href") ||
                      r.getAttribute("href");
                    if ("stylesheet" === r.rel && (d === e || d === a))
                      return r;
                  }
                  var c = document.getElementsByTagName("style");
                  for (s = 0; s < c.length; s++) {
                    var r;
                    if (
                      (d = (r = c[s]).getAttribute("data-href")) === e ||
                      d === a
                    )
                      return r;
                  }
                })(s, d)
              )
                return a();
              ((e, a, n, s, d) => {
                var c = document.createElement("link");
                (c.rel = "stylesheet"),
                  (c.type = "text/css"),
                  (c.onerror = c.onload =
                    (n) => {
                      if (((c.onerror = c.onload = null), "load" === n.type))
                        s();
                      else {
                        var r = n && n.type,
                          i = (n && n.target && n.target.href) || a,
                          f = new Error(
                            "Loading CSS chunk " +
                              e +
                              " failed.\n(" +
                              r +
                              ": " +
                              i +
                              ")",
                          );
                        (f.name = "ChunkLoadError"),
                          (f.code = "CSS_CHUNK_LOAD_FAILED"),
                          (f.type = r),
                          (f.request = i),
                          c.parentNode && c.parentNode.removeChild(c),
                          d(f);
                      }
                    }),
                  (c.href = a),
                  n
                    ? n.parentNode.insertBefore(c, n.nextSibling)
                    : document.head.appendChild(c);
              })(e, d, null, a, n);
            }),
          a = { 6700: 0 };
        i.f.miniCss = (n, s) => {
          a[n]
            ? s.push(a[n])
            : 0 !== a[n] &&
              {
                746: 1,
                1643: 1,
                2136: 1,
                2522: 1,
                2529: 1,
                3599: 1,
                3710: 1,
                3863: 1,
                4601: 1,
                4935: 1,
                5676: 1,
                6699: 1,
                6808: 1,
                6853: 1,
                7485: 1,
                7762: 1,
                8974: 1,
              }[n] &&
              s.push(
                (a[n] = e(n).then(
                  () => {
                    a[n] = 0;
                  },
                  (e) => {
                    throw (delete a[n], e);
                  },
                )),
              );
        };
      }
    })(),
    (() => {
      var e = { 6700: 0 };
      (i.f.j = (a, n) => {
        var s = i.o(e, a) ? e[a] : void 0;
        if (0 !== s)
          if (s) n.push(s[2]);
          else if (/^6(700|853)$/.test(a)) e[a] = 0;
          else {
            var d = new Promise((n, d) => (s = e[a] = [n, d]));
            n.push((s[2] = d));
            var c = i.p + i.u(a),
              r = new Error();
            i.l(
              c,
              (n) => {
                if (i.o(e, a) && (0 !== (s = e[a]) && (e[a] = void 0), s)) {
                  var d = n && ("load" === n.type ? "missing" : n.type),
                    c = n && n.target && n.target.src;
                  (r.message =
                    "Loading chunk " + a + " failed.\n(" + d + ": " + c + ")"),
                    (r.name = "ChunkLoadError"),
                    (r.type = d),
                    (r.request = c),
                    s[1](r);
                }
              },
              "chunk-" + a,
              a,
            );
          }
      }),
        (i.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var s,
            d,
            [c, r, f] = n,
            o = 0;
          if (c.some((a) => 0 !== e[a])) {
            for (s in r) i.o(r, s) && (i.m[s] = r[s]);
            if (f) var b = f(i);
          }
          for (a && a(n); o < c.length; o++)
            (d = c[o]), i.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return i.O(b);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();

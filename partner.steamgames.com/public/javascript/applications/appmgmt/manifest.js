/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "9066069";
(() => {
  "use strict";
  var e,
    a,
    n,
    s,
    d,
    c = {},
    r = {};
  function b(e) {
    var a = r[e];
    if (void 0 !== a) return a.exports;
    var n = (r[e] = { id: e, loaded: !1, exports: {} });
    return c[e].call(n.exports, n, n.exports, b), (n.loaded = !0), n.exports;
  }
  (b.m = c),
    (e = []),
    (b.O = (a, n, s, d) => {
      if (!n) {
        var c = 1 / 0;
        for (f = 0; f < e.length; f++) {
          for (var [n, s, d] = e[f], r = !0, i = 0; i < n.length; i++)
            (!1 & d || c >= d) && Object.keys(b.O).every((e) => b.O[e](n[i]))
              ? n.splice(i--, 1)
              : ((r = !1), d < c && (c = d));
          if (r) {
            e.splice(f--, 1);
            var o = s();
            void 0 !== o && (a = o);
          }
        }
        return a;
      }
      d = d || 0;
      for (var f = e.length; f > 0 && e[f - 1][2] > d; f--) e[f] = e[f - 1];
      e[f] = [n, s, d];
    }),
    (b.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return b.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (b.t = function (e, s) {
      if ((1 & s && (e = this(e)), 8 & s)) return e;
      if ("object" == typeof e && e) {
        if (4 & s && e.__esModule) return e;
        if (16 & s && "function" == typeof e.then) return e;
      }
      var d = Object.create(null);
      b.r(d);
      var c = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var r = 2 & s && e; "object" == typeof r && !~a.indexOf(r); r = n(r))
        Object.getOwnPropertyNames(r).forEach((a) => (c[a] = () => e[a]));
      return (c.default = () => e), b.d(d, c), d;
    }),
    (b.d = (e, a) => {
      for (var n in a)
        b.o(a, n) &&
          !b.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: a[n] });
    }),
    (b.f = {}),
    (b.e = (e) =>
      Promise.all(Object.keys(b.f).reduce((a, n) => (b.f[n](e, a), a), []))),
    (b.u = (e) =>
      "javascript/applications/appmgmt/" +
      ({
        38: "libraries~9e65e27a0",
        67: "main_czech-json",
        144: "marketing_japanese-json",
        280: "chunk~45b6949a4",
        407: "marketing_indonesian-json",
        414: "sales_polish-json",
        478: "marketing_danish-json",
        494: "sales_hungarian-json",
        539: "main_finnish-json",
        614: "marketing_hungarian-json",
        809: "marketing_thai-json",
        934: "sales_danish-json",
        976: "shared_thai-json",
        1048: "sales_japanese-json",
        1065: "marketing_brazilian-json",
        1084: "libraries~4ec87c66d",
        1101: "pricingtool",
        1225: "shared_swedish-json",
        1227: "sales_greek-json",
        1337: "main_japanese-json",
        1351: "sales_turkish-json",
        1369: "main_vietnamese-json",
        1396: "sales_sc_schinese-json",
        1449: "shared_bulgarian-json",
        1531: "shared_italian-json",
        1543: "sales_spanish-json",
        1606: "main_brazilian-json",
        1784: "libraries~4eb095478",
        1973: "shared_japanese-json",
        2201: "libraries~e459d0d7a",
        2206: "sales_russian-json",
        2256: "shared_english-json",
        2320: "shared_norwegian-json",
        2435: "shared_latam-json",
        2455: "storeadmin",
        2500: "main_spanish-json",
        2543: "main_latam-json",
        2632: "shared_spanish-json",
        2702: "main_french-json",
        2708: "main_italian-json",
        2726: "marketing_polish-json",
        2749: "shared_romanian-json",
        2785: "libraries~5da2a553c",
        2842: "sales_portuguese-json",
        2855: "marketing_norwegian-json",
        2870: "chunk~962e493ff",
        2912: "libraries~c7992ef56",
        2946: "libraries~01f083eeb",
        2954: "shared_ukrainian-json",
        2992: "marketing_koreana-json",
        2995: "logoedtior",
        3025: "contenthubpages",
        3216: "sales_czech-json",
        3266: "main_dutch-json",
        3374: "main_schinese-json",
        3436: "marketing_finnish-json",
        3562: "sales_bulgarian-json",
        3569: "sales_thai-json",
        3701: "main_swedish-json",
        3710: "shared_arabic-json",
        3833: "marketing_ukrainian-json",
        3872: "marketing_tchinese-json",
        3912: "marketing_vietnamese-json",
        3940: "main_thai-json",
        4153: "main_romanian-json",
        4160: "chunk~bb5324543",
        4182: "sales_swedish-json",
        4226: "steamdeck",
        4227: "chunk~fbdfc9496",
        4262: "steamml",
        4268: "events",
        4372: "sales_finnish-json",
        4419: "main_portuguese-json",
        4893: "main_bulgarian-json",
        4917: "main_tchinese-json",
        4985: "resquemsg",
        5018: "shared_french-json",
        5027: "sdrconnections",
        5110: "shared_dutch-json",
        5136: "recappages",
        5183: "sales_norwegian-json",
        5193: "libraries~511d96142",
        5231: "marketing_english-json",
        5232: "sales_latam-json",
        5240: "sales_tchinese-json",
        5241: "shared_tchinese-json",
        5484: "main_greek-json",
        5605: "sales_dutch-json",
        5701: "navevents",
        5769: "chunk~c4b714e2c",
        5791: "sales_indonesian-json",
        5933: "steamlearn",
        6031: "shared_finnish-json",
        6060: "chunk~01f083eeb",
        6103: "sales_english-json",
        6132: "chunk~68d776eed",
        6149: "shared_vietnamese-json",
        6159: "main_koreana-json",
        6165: "shared_hungarian-json",
        6208: "shared_german-json",
        6224: "sales_vietnamese-json",
        6236: "main_german-json",
        6239: "shared_portuguese-json",
        6343: "timelinemarkers",
        6383: "sales_italian-json",
        6403: "marketing_schinese-json",
        6459: "sales_schinese-json",
        6523: "shared_danish-json",
        6542: "libraries~9d44baec0",
        6562: "shared_brazilian-json",
        6589: "main_russian-json",
        6716: "marketing_sc_schinese-json",
        6728: "marketing_latam-json",
        6759: "marketing_italian-json",
        6845: "marketing_dutch-json",
        6948: "main_norwegian-json",
        6966: "login",
        6979: "main_polish-json",
        6995: "libraries~65c77a859",
        7064: "marketing_czech-json",
        7352: "chunk~9e65e27a0",
        7378: "libraries~45b6949a4",
        7383: "adminpromoreviewdashboard",
        7439: "marketing_spanish-json",
        7499: "chunk~e9c7aadaf",
        7539: "shared_koreana-json",
        7591: "shared_czech-json",
        7625: "main_hungarian-json",
        7631: "sales_french-json",
        7633: "sales_brazilian-json",
        7681: "sales_ukrainian-json",
        7786: "shared_schinese-json",
        7796: "main_turkish-json",
        7798: "main_ukrainian-json",
        7926: "marketing_russian-json",
        8025: "shared_russian-json",
        8306: "shared_indonesian-json",
        8350: "chunk~4ec87c66d",
        8396: "broadcast",
        8523: "publisherdashboard",
        8585: "marketing_german-json",
        8591: "chunk~9393bd9c1",
        8718: "marketing_swedish-json",
        8755: "marketing_greek-json",
        8758: "chunk~4b4a4243d",
        8801: "sales_german-json",
        8932: "libraries~4b4a4243d",
        8967: "shared_polish-json",
        8995: "chunk~5da2a553c",
        9027: "shared_sc_schinese-json",
        9150: "libraries~68d776eed",
        9152: "shared_turkish-json",
        9188: "main_english-json",
        9207: "marketing_french-json",
        9255: "chunk~b22481b0d",
        9391: "marketing_turkish-json",
        9431: "main_danish-json",
        9566: "main_indonesian-json",
        9650: "marketing_bulgarian-json",
        9712: "shared_greek-json",
        9730: "marketing_portuguese-json",
        9747: "chunk~e459d0d7a",
        9812: "sales_romanian-json",
        9916: "marketing_romanian-json",
        9992: "sales_koreana-json",
      }[e] || e) +
      ".js?contenthash=" +
      {
        38: "aef94586aa3f5ad75d9d",
        67: "21a6231bcbc4cd97886f",
        144: "515f1f2322bf6d02f284",
        280: "e8cec119d95ea81eb715",
        407: "0fa7eda9d4702949e298",
        414: "b6e192f88fa418a88714",
        478: "67dbfec06a27186dc643",
        494: "487c1987a3fd2653d7db",
        539: "9fbe092151acf2a9de06",
        614: "b11f901d2d4a81358243",
        809: "fa62d5fa942e215e0966",
        934: "1af69801894f42265b44",
        976: "eee618c280656a4eb1d0",
        1048: "8c8649fb2bcbad8f462f",
        1065: "7b06772a52948c22777b",
        1084: "55e91c7aa6bd8136de87",
        1101: "6cefa13fb7e2d1a70ed9",
        1225: "0874ded16fdd8c74fa46",
        1227: "80d5d044fd079749aae1",
        1337: "0791e1882fd361bb0c20",
        1351: "c9c860143e0be31645aa",
        1369: "8435a2659160fa08f22a",
        1396: "f743fc982a08a30cfb3a",
        1449: "8512cbd92cd67f389c10",
        1531: "42f843ac234f222530e2",
        1543: "e208aa1ac3a3c0b0abf7",
        1606: "48793c7beeccfc2435c0",
        1784: "c804e78ae7c9b94431a5",
        1973: "79b54a4d36283dd2bcf9",
        2201: "fcead384e4c374b4f0ed",
        2206: "51853f6beab5f5f67018",
        2256: "26c7d457c3c34ae230a1",
        2320: "cb4e9554fdcf16b07b84",
        2435: "500b047623d21c834b19",
        2455: "d29be4454ffd78ad9e69",
        2500: "f9477b062428ad48bcdb",
        2543: "f7418939b64937fd50cf",
        2632: "801d5cf8d6e1357476fe",
        2702: "931b74d8a6438bc06338",
        2708: "772f3b8a0767e115e1af",
        2726: "99f861efb65ec5140536",
        2749: "f66195709afe304152c1",
        2785: "f44bfa3b4133ca2ae52e",
        2842: "c82f16e8b0b51414def3",
        2855: "b997339d615f265f149c",
        2870: "1c17fb29158685848263",
        2912: "55b4263343eba1fe33cf",
        2946: "5a623db960fe744ba02a",
        2954: "a1d48f79aa0f3f984c1a",
        2992: "f929042107fee0db3b63",
        2995: "b0ed91a22ddf8a1de89f",
        3025: "e0d1d21a185dd86dad4e",
        3216: "e58b21a0dd49d166d5af",
        3266: "522b7d52d682b28e1495",
        3374: "ab547c8a0d64293cf6af",
        3436: "c0a5fb48cf67a1f7a3cc",
        3562: "d9f2e4024854ac290bbb",
        3569: "f7cbc41a4bb09c6ab154",
        3701: "0d3c76960b3e97890366",
        3710: "9f0600a2ec6513b3c14b",
        3833: "7a64733dcaad8ea76d6f",
        3872: "6d443b2c15eadfb58676",
        3912: "08876784fd773fc6f025",
        3940: "a3bb8a3264ba7f6748fd",
        4153: "401989551b2f94f1551f",
        4160: "7556cad511e44811e3e3",
        4182: "27929ffba9840278b2cf",
        4226: "819c6a6883f8feaa67e8",
        4227: "1f765e333c5fd81b8534",
        4262: "d34414ea8b31503ab798",
        4268: "88f1a5e6979ce5d34c4f",
        4372: "800b921f67382b2497d1",
        4419: "36dce4b8b4388d2c8272",
        4893: "e686b6de5051588aedc2",
        4917: "a61e6dfa705f0026c382",
        4985: "0b2e946cd90b9294dde0",
        5018: "ebbb07401a108af5baf2",
        5027: "608ab639da6d6a03a379",
        5110: "3ef4ca412f46697a7ecc",
        5136: "ab57f0b05a572319d920",
        5183: "edb513dfe0601e59eef0",
        5193: "fb3b99b33afe20301299",
        5231: "4efab9817b4023ffb1c1",
        5232: "704896fc38e524200353",
        5240: "a31deb3e11d3d564a507",
        5241: "1b4b10df3819506676f6",
        5484: "b2011eb8d6191324ef95",
        5605: "c8eee0c9e5fad2d19815",
        5701: "1c6dc261dd15bc4bc57c",
        5769: "5bc6baba9dbd71062b02",
        5791: "24f444c42ad137daabc5",
        5933: "59f892c7c5f823c100f6",
        6031: "ced75c96e150f029cfe7",
        6060: "7c207e23c3604eb7aeb0",
        6103: "e65bc3c7988779ee1738",
        6132: "29be0b30968487ba69bf",
        6149: "d11c818358612fb62887",
        6159: "f4cf5f31d77660b29ca9",
        6165: "9bc359546c8c6c5ee53d",
        6208: "5e153ba9f22b126aac0a",
        6209: "f967f1cce9281227b6a4",
        6224: "d1bf5a4bd415b90e2a4d",
        6236: "542c3e1540e2ae51b6f9",
        6239: "a10500f605fa05bf6837",
        6343: "50b9f19a4171235d773d",
        6383: "c7f3346333221060e4ea",
        6403: "cfbafd2d4bccc3dcfb37",
        6459: "6fbe6a11b9c7c2c8fb88",
        6523: "48e6ac60cf70ab3f5aa0",
        6542: "0567cd1bcd4c192ef1c2",
        6562: "be21309d0c76b926925b",
        6589: "5fdbb9f342228c254ba8",
        6716: "830932a38d1fca0ebaf4",
        6728: "0a7ab5fb2ea622866b36",
        6759: "47a07b41158db417ed0f",
        6845: "1f08970fd9bf5df19d4f",
        6948: "2eaaf9884ec91dd40934",
        6966: "ccf20feceff48f0cc8c0",
        6979: "9168b4528209bb749f34",
        6995: "351b9cd0795398bebaf5",
        7064: "79fdc548a6981d595bab",
        7352: "92d61fde18853330c381",
        7378: "a56264f5e5bae1f1fd19",
        7383: "1cae9bcfe6993c6080d6",
        7439: "ca4bc033703dfbc13363",
        7499: "5f081f3f85f22d1510e4",
        7539: "dd860bf2435dcc201496",
        7591: "8dbd9d000a2f3143e311",
        7625: "9fce2fa148f485ba4f84",
        7631: "a2bb692c9542af898cb8",
        7633: "e84154ce71795f391d73",
        7681: "d5d07149cedcd1c65bae",
        7786: "2c214eb415f115d13e40",
        7796: "4180234193b43c75462c",
        7798: "3d95e75719285fa6257b",
        7926: "a7b6de5f904a09afa838",
        8025: "e1c10dfcdf34b981763c",
        8306: "a170955c6a3a19b5eadd",
        8350: "fce17477b8eacb944311",
        8396: "f2c7edeafa74a9525486",
        8523: "07beccede4886b00d573",
        8585: "189012adf49230a51279",
        8591: "c3ca4337043a7923c1d7",
        8718: "dbe8578814f985cfab95",
        8755: "8f34e69c85717c0323e0",
        8758: "c6434d700776a0bf9d5d",
        8801: "bd4beb0ebf93895cdd85",
        8932: "c990afb349a3ef5e0267",
        8967: "d0f3b7a6086f5a02ab3c",
        8995: "d4c16ab58834b2bc9daa",
        9027: "8a48dd7872cb0009474d",
        9150: "a7c89eb93ddc05454a25",
        9152: "09fdbdfd00e8f40667da",
        9188: "6fcd38df8567324ffa17",
        9207: "3d30ce586f97458c5013",
        9255: "908f75ed6cebf9237e2b",
        9391: "8fdec6ea8bb813ecb71c",
        9431: "3f05ff67d65aebfd3f48",
        9566: "0144634a11c5cf112bf6",
        9650: "60e1fc59f0b40a256627",
        9712: "936eb7e4f96553d238f7",
        9730: "0468e88b3a9783806fb3",
        9747: "e283afeec168fd07bde4",
        9812: "24883195ab7398ac24b3",
        9916: "b13a620c9bfee90ac997",
        9992: "b970cbf0ee5f6f3f02af",
      }[e]),
    (b.miniCssF = (e) =>
      "css/applications/appmgmt/" +
      {
        1101: "pricingtool",
        2455: "storeadmin",
        2785: "libraries~5da2a553c",
        2995: "logoedtior",
        4226: "steamdeck",
        4262: "steamml",
        4268: "events",
        4985: "resquemsg",
        5027: "sdrconnections",
        5933: "steamlearn",
        6132: "chunk~68d776eed",
        6343: "timelinemarkers",
        7352: "chunk~9e65e27a0",
        7383: "adminpromoreviewdashboard",
        8350: "chunk~4ec87c66d",
        8396: "broadcast",
        8523: "publisherdashboard",
      }[e] +
      ".css?contenthash=" +
      {
        1101: "0fbd0e93b254aa82d98e",
        2455: "11b559630bcbfab47d56",
        2785: "da3b05b688206293fc3e",
        2995: "68490a0464a23c4c13fe",
        4226: "f355e2c45b0604a5b7f2",
        4262: "61877d984bfcf3e7f40f",
        4268: "39a187006477ca72db81",
        4985: "fe01caf6b05ba287b7b3",
        5027: "33eb9d66d0507e03ca68",
        5933: "b68398df6582aa322851",
        6132: "36f12bdcd4a8ae076443",
        6343: "89cda0308c228807069b",
        7352: "ed775333cb10ed97b626",
        7383: "7d397c627b354e1a49cf",
        8350: "91580f0b713935945527",
        8396: "3a7c9b685cb7f8bf6d4d",
        8523: "18687fbea4dd6c6e8770",
      }[e]),
    (b.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (b.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (s = {}),
    (d = "appmgmt-storeadmin:"),
    (b.l = (e, a, n, c) => {
      if (s[e]) s[e].push(a);
      else {
        var r, i;
        if (void 0 !== n)
          for (
            var o = document.getElementsByTagName("script"), f = 0;
            f < o.length;
            f++
          ) {
            var t = o[f];
            if (
              t.getAttribute("src") == e ||
              t.getAttribute("data-webpack") == d + n
            ) {
              r = t;
              break;
            }
          }
        r ||
          ((i = !0),
          ((r = document.createElement("script")).charset = "utf-8"),
          (r.timeout = 120),
          b.nc && r.setAttribute("nonce", b.nc),
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
          i && document.head.appendChild(r);
      }
    }),
    (b.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (b.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (b.p = ""),
    (() => {
      if ("undefined" != typeof document) {
        var e = (e) =>
            new Promise((a, n) => {
              var s = b.miniCssF(e),
                d = b.p + s;
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
                          b = (n && n.target && n.target.href) || a,
                          i = new Error(
                            "Loading CSS chunk " +
                              e +
                              " failed.\n(" +
                              r +
                              ": " +
                              b +
                              ")",
                          );
                        (i.name = "ChunkLoadError"),
                          (i.code = "CSS_CHUNK_LOAD_FAILED"),
                          (i.type = r),
                          (i.request = b),
                          c.parentNode && c.parentNode.removeChild(c),
                          d(i);
                      }
                    }),
                  (c.href = a),
                  n
                    ? n.parentNode.insertBefore(c, n.nextSibling)
                    : document.head.appendChild(c);
              })(e, d, null, a, n);
            }),
          a = { 4556: 0 };
        b.f.miniCss = (n, s) => {
          a[n]
            ? s.push(a[n])
            : 0 !== a[n] &&
              {
                1101: 1,
                2455: 1,
                2785: 1,
                2995: 1,
                4226: 1,
                4262: 1,
                4268: 1,
                4985: 1,
                5027: 1,
                5933: 1,
                6132: 1,
                6343: 1,
                7352: 1,
                7383: 1,
                8350: 1,
                8396: 1,
                8523: 1,
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
      var e = { 4556: 0 };
      (b.f.j = (a, n) => {
        var s = b.o(e, a) ? e[a] : void 0;
        if (0 !== s)
          if (s) n.push(s[2]);
          else if (4556 != a) {
            var d = new Promise((n, d) => (s = e[a] = [n, d]));
            n.push((s[2] = d));
            var c = b.p + b.u(a),
              r = new Error();
            b.l(
              c,
              (n) => {
                if (b.o(e, a) && (0 !== (s = e[a]) && (e[a] = void 0), s)) {
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
          } else e[a] = 0;
      }),
        (b.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var s,
            d,
            [c, r, i] = n,
            o = 0;
          if (c.some((a) => 0 !== e[a])) {
            for (s in r) b.o(r, s) && (b.m[s] = r[s]);
            if (i) var f = i(b);
          }
          for (a && a(n); o < c.length; o++)
            (d = c[o]), b.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return b.O(f);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();

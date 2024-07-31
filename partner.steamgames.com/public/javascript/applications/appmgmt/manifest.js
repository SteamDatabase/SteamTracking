/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "9078640";
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
        for (f = 0; f < e.length; f++) {
          for (var [n, s, d] = e[f], r = !0, o = 0; o < n.length; o++)
            (!1 & d || c >= d) && Object.keys(i.O).every((e) => i.O[e](n[o]))
              ? n.splice(o--, 1)
              : ((r = !1), d < c && (c = d));
          if (r) {
            e.splice(f--, 1);
            var b = s();
            void 0 !== b && (a = b);
          }
        }
        return a;
      }
      d = d || 0;
      for (var f = e.length; f > 0 && e[f - 1][2] > d; f--) e[f] = e[f - 1];
      e[f] = [n, s, d];
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
      ({
        38: "libraries~9e65e27a0",
        67: "main_czech-json",
        144: "marketing_japanese-json",
        407: "marketing_indonesian-json",
        414: "sales_polish-json",
        478: "marketing_danish-json",
        494: "sales_hungarian-json",
        539: "main_finnish-json",
        614: "marketing_hungarian-json",
        809: "marketing_thai-json",
        867: "chunk~44f3be751",
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
        2202: "libraries~0432e4e5b",
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
        2836: "libraries~32b2d2dc8",
        2842: "sales_portuguese-json",
        2855: "marketing_norwegian-json",
        2870: "chunk~962e493ff",
        2890: "chunk~32b2d2dc8",
        2912: "libraries~c7992ef56",
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
        4442: "chunk~8c57c6bc1",
        4893: "main_bulgarian-json",
        4917: "main_tchinese-json",
        4985: "resquemsg",
        5018: "shared_french-json",
        5027: "sdrconnections",
        5110: "shared_dutch-json",
        5136: "recappages",
        5139: "seasonpass",
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
        9116: "libraries~8c57c6bc1",
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
        9812: "sales_romanian-json",
        9916: "marketing_romanian-json",
        9992: "sales_koreana-json",
      }[e] || e) +
      ".js?contenthash=" +
      {
        38: "aef94586aa3f5ad75d9d",
        67: "69fc9c7bb896ef43da8a",
        144: "515f1f2322bf6d02f284",
        407: "0fa7eda9d4702949e298",
        414: "b6e192f88fa418a88714",
        478: "67dbfec06a27186dc643",
        494: "487c1987a3fd2653d7db",
        539: "4730898ab00636f06482",
        614: "b11f901d2d4a81358243",
        809: "fa62d5fa942e215e0966",
        867: "9af002af39ec44f5f66b",
        934: "1af69801894f42265b44",
        976: "e0b340a3149b83ebdefb",
        1048: "8c8649fb2bcbad8f462f",
        1065: "7b06772a52948c22777b",
        1084: "55e91c7aa6bd8136de87",
        1101: "2d90c8f2ce83ed26dace",
        1225: "a99853ae32a16e80657d",
        1227: "80d5d044fd079749aae1",
        1337: "73f01f0dcb33d64eda81",
        1351: "c9c860143e0be31645aa",
        1369: "158438ef631aba7fd112",
        1396: "f743fc982a08a30cfb3a",
        1449: "d06b06b445ba05bfc17b",
        1531: "44b7d337daa998f6a209",
        1543: "189440fdb6f5199790f0",
        1606: "9d3780e6ace39f1460c2",
        1784: "c804e78ae7c9b94431a5",
        1973: "45b284210fce5600ddad",
        2202: "1087bb402d40138fa388",
        2206: "51853f6beab5f5f67018",
        2256: "024c47879ebf664da1a1",
        2320: "5828e2ade66680f7ca61",
        2435: "9978c36bc0a5c9c40043",
        2455: "4ca101bab3c3465c2979",
        2500: "12af058cbd3c5ec4bced",
        2543: "ab991cf304c0959c14da",
        2632: "6b3d26502ab09a88349b",
        2702: "0428bb9e9838b57f10ba",
        2708: "228db8de6e5208948acc",
        2726: "99f861efb65ec5140536",
        2749: "f81c191e28367dbdf063",
        2785: "f44bfa3b4133ca2ae52e",
        2836: "62a602c70ea6b0841304",
        2842: "c82f16e8b0b51414def3",
        2855: "b997339d615f265f149c",
        2870: "1c17fb29158685848263",
        2890: "9515543600f2df7a9c74",
        2912: "55b4263343eba1fe33cf",
        2954: "d27937cf144e9088e0b3",
        2992: "f929042107fee0db3b63",
        2995: "b0ed91a22ddf8a1de89f",
        3025: "595f970f7d8c2b07c6b2",
        3216: "e58b21a0dd49d166d5af",
        3266: "4b8669eafc9125781634",
        3374: "a653e44f94cd4c3dc85e",
        3436: "c0a5fb48cf67a1f7a3cc",
        3562: "d9f2e4024854ac290bbb",
        3569: "f7cbc41a4bb09c6ab154",
        3701: "2cad11aa74ad7ec3a7af",
        3710: "9f0600a2ec6513b3c14b",
        3833: "7a64733dcaad8ea76d6f",
        3872: "6d443b2c15eadfb58676",
        3912: "08876784fd773fc6f025",
        3940: "c624f02d305781afd1a6",
        4153: "a7032b2fac9f4bafd055",
        4160: "399f7de448db62172d8b",
        4182: "27929ffba9840278b2cf",
        4226: "819c6a6883f8feaa67e8",
        4227: "2b4036dfe8754db38211",
        4262: "d34414ea8b31503ab798",
        4268: "88f1a5e6979ce5d34c4f",
        4372: "800b921f67382b2497d1",
        4419: "83792e132ee0a2cbedcf",
        4442: "fb648f4f30c3cb3c1329",
        4893: "542ba7273827a83374a2",
        4917: "6f997aa74caa101f5f7c",
        4985: "a03fef8240737753b578",
        5018: "ef292ec4ece0f59307bf",
        5027: "608ab639da6d6a03a379",
        5110: "ee700fff8393f41a2489",
        5136: "ab57f0b05a572319d920",
        5139: "31a19f91c6d13e355bf0",
        5183: "edb513dfe0601e59eef0",
        5193: "fb3b99b33afe20301299",
        5231: "4efab9817b4023ffb1c1",
        5232: "704896fc38e524200353",
        5240: "a31deb3e11d3d564a507",
        5241: "b9ec6ff8a413ed63134a",
        5484: "e6168bfbd9526045e610",
        5605: "c8eee0c9e5fad2d19815",
        5701: "1c6dc261dd15bc4bc57c",
        5769: "d0d040fb16ae8a71d49c",
        5791: "24f444c42ad137daabc5",
        5933: "fde3ea6c5cf5b0f8f38d",
        6031: "c9694408114af42b014c",
        6103: "e65bc3c7988779ee1738",
        6132: "29be0b30968487ba69bf",
        6149: "53b41f11421e8dc38cd5",
        6159: "42dcbb76edb75998ad94",
        6165: "77bb49f4a3c29709b62e",
        6208: "5c952865db1cd10d9c43",
        6209: "9915b153c318c9f83165",
        6224: "d1bf5a4bd415b90e2a4d",
        6236: "a8d3e8e793dff478186d",
        6239: "3b1094286f3eeb0d173c",
        6343: "88687dad542ff2a64dc3",
        6383: "c7f3346333221060e4ea",
        6403: "cfbafd2d4bccc3dcfb37",
        6459: "6fbe6a11b9c7c2c8fb88",
        6523: "0204818fd46bc3be0e71",
        6542: "0567cd1bcd4c192ef1c2",
        6562: "8f46710e23ca35f3d62b",
        6589: "57a8dcb0a13f26365c3f",
        6716: "830932a38d1fca0ebaf4",
        6728: "0a7ab5fb2ea622866b36",
        6759: "47a07b41158db417ed0f",
        6845: "1f08970fd9bf5df19d4f",
        6948: "0f543a51fa55d980525c",
        6966: "ccf20feceff48f0cc8c0",
        6979: "b24f8773459aff435832",
        6995: "351b9cd0795398bebaf5",
        7064: "79fdc548a6981d595bab",
        7352: "78977a0171974b39507a",
        7383: "1cae9bcfe6993c6080d6",
        7439: "ca4bc033703dfbc13363",
        7499: "5f081f3f85f22d1510e4",
        7539: "67a9d1ef551a2f6117e3",
        7591: "9034138574aa704ef10f",
        7625: "1ab3547e87d30c5ce367",
        7631: "a2bb692c9542af898cb8",
        7633: "7741e73ed5692e5d6781",
        7681: "d5d07149cedcd1c65bae",
        7786: "675b830c8a1e2f82caba",
        7796: "53f3d54765db991bc757",
        7798: "4835899950dad81adbf1",
        7926: "a7b6de5f904a09afa838",
        8025: "1298389c44ae1a633f99",
        8306: "cb0e042d665bfceaa5ac",
        8350: "6272755da07280fddda9",
        8396: "65dfc47b55eabb2642d3",
        8523: "7ee43247796456f47d55",
        8585: "189012adf49230a51279",
        8591: "c3ca4337043a7923c1d7",
        8718: "dbe8578814f985cfab95",
        8755: "8f34e69c85717c0323e0",
        8758: "5f193b1e31a07d8c4852",
        8801: "bd4beb0ebf93895cdd85",
        8932: "c990afb349a3ef5e0267",
        8967: "117750cdfd8ba108b60b",
        8995: "099cabc0fc7ee8e1a2e1",
        9027: "be517d4f1a9bc2f8ae91",
        9116: "3cd11806f914cb0d1abe",
        9150: "a7c89eb93ddc05454a25",
        9152: "8ddc04afe645a0d37b9d",
        9188: "a5e36339608592fb6552",
        9207: "3d30ce586f97458c5013",
        9255: "908f75ed6cebf9237e2b",
        9391: "8fdec6ea8bb813ecb71c",
        9431: "1c5492eb788172b2c1f6",
        9566: "dca613439970dff980e8",
        9650: "60e1fc59f0b40a256627",
        9712: "dd77130e34fa3540318c",
        9730: "0468e88b3a9783806fb3",
        9812: "24883195ab7398ac24b3",
        9916: "b13a620c9bfee90ac997",
        9992: "b970cbf0ee5f6f3f02af",
      }[e]),
    (i.miniCssF = (e) =>
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
        5139: "seasonpass",
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
        2455: "0736992bf6997e6e9272",
        2785: "da3b05b688206293fc3e",
        2995: "68490a0464a23c4c13fe",
        4226: "f355e2c45b0604a5b7f2",
        4262: "61877d984bfcf3e7f40f",
        4268: "39a187006477ca72db81",
        4985: "fe01caf6b05ba287b7b3",
        5027: "33eb9d66d0507e03ca68",
        5139: "2a5fd302e8a5c0a738c0",
        5933: "b68398df6582aa322851",
        6132: "36f12bdcd4a8ae076443",
        6343: "84882016b1acf26b069c",
        7352: "ed775333cb10ed97b626",
        7383: "7d397c627b354e1a49cf",
        8350: "494b7e6ba34a3aaa51c4",
        8396: "3a7c9b685cb7f8bf6d4d",
        8523: "2433134396353140e709",
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
        var r, o;
        if (void 0 !== n)
          for (
            var b = document.getElementsByTagName("script"), f = 0;
            f < b.length;
            f++
          ) {
            var t = b[f];
            if (
              t.getAttribute("src") == e ||
              t.getAttribute("data-webpack") == d + n
            ) {
              r = t;
              break;
            }
          }
        r ||
          ((o = !0),
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
          o && document.head.appendChild(r);
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
                          o = new Error(
                            "Loading CSS chunk " +
                              e +
                              " failed.\n(" +
                              r +
                              ": " +
                              i +
                              ")",
                          );
                        (o.name = "ChunkLoadError"),
                          (o.code = "CSS_CHUNK_LOAD_FAILED"),
                          (o.type = r),
                          (o.request = i),
                          c.parentNode && c.parentNode.removeChild(c),
                          d(o);
                      }
                    }),
                  (c.href = a),
                  n
                    ? n.parentNode.insertBefore(c, n.nextSibling)
                    : document.head.appendChild(c);
              })(e, d, null, a, n);
            }),
          a = { 4556: 0 };
        i.f.miniCss = (n, s) => {
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
                5139: 1,
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
      (i.f.j = (a, n) => {
        var s = i.o(e, a) ? e[a] : void 0;
        if (0 !== s)
          if (s) n.push(s[2]);
          else if (4556 != a) {
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
          } else e[a] = 0;
      }),
        (i.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var s,
            d,
            [c, r, o] = n,
            b = 0;
          if (c.some((a) => 0 !== e[a])) {
            for (s in r) i.o(r, s) && (i.m[s] = r[s]);
            if (o) var f = o(i);
          }
          for (a && a(n); b < c.length; b++)
            (d = c[b]), i.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return i.O(f);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();

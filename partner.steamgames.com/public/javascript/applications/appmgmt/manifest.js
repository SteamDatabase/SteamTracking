/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "9096732";
(() => {
  "use strict";
  var e,
    a,
    n,
    s,
    d,
    c = {},
    r = {};
  function f(e) {
    var a = r[e];
    if (void 0 !== a) return a.exports;
    var n = (r[e] = { id: e, loaded: !1, exports: {} });
    return c[e].call(n.exports, n, n.exports, f), (n.loaded = !0), n.exports;
  }
  (f.m = c),
    (e = []),
    (f.O = (a, n, s, d) => {
      if (!n) {
        var c = 1 / 0;
        for (o = 0; o < e.length; o++) {
          for (var [n, s, d] = e[o], r = !0, i = 0; i < n.length; i++)
            (!1 & d || c >= d) && Object.keys(f.O).every((e) => f.O[e](n[i]))
              ? n.splice(i--, 1)
              : ((r = !1), d < c && (c = d));
          if (r) {
            e.splice(o--, 1);
            var b = s();
            void 0 !== b && (a = b);
          }
        }
        return a;
      }
      d = d || 0;
      for (var o = e.length; o > 0 && e[o - 1][2] > d; o--) e[o] = e[o - 1];
      e[o] = [n, s, d];
    }),
    (f.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return f.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (f.t = function (e, s) {
      if ((1 & s && (e = this(e)), 8 & s)) return e;
      if ("object" == typeof e && e) {
        if (4 & s && e.__esModule) return e;
        if (16 & s && "function" == typeof e.then) return e;
      }
      var d = Object.create(null);
      f.r(d);
      var c = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var r = 2 & s && e; "object" == typeof r && !~a.indexOf(r); r = n(r))
        Object.getOwnPropertyNames(r).forEach((a) => (c[a] = () => e[a]));
      return (c.default = () => e), f.d(d, c), d;
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
        67: "00e9045e5635ede233cc",
        144: "515f1f2322bf6d02f284",
        154: "d834009731c185e535a8",
        407: "0fa7eda9d4702949e298",
        414: "b6e192f88fa418a88714",
        478: "67dbfec06a27186dc643",
        494: "487c1987a3fd2653d7db",
        539: "8389996978779e03b07e",
        614: "b11f901d2d4a81358243",
        809: "fa62d5fa942e215e0966",
        934: "1af69801894f42265b44",
        976: "11c97055e5f04ea9b10a",
        1048: "8c8649fb2bcbad8f462f",
        1065: "7b06772a52948c22777b",
        1084: "55e91c7aa6bd8136de87",
        1101: "4fa274e71ecc5fd3b17c",
        1225: "7fbd5a03cbddc2a733bd",
        1227: "80d5d044fd079749aae1",
        1337: "0d6da8c1df4251f39079",
        1351: "c9c860143e0be31645aa",
        1369: "ac9b68392f319b7e503e",
        1396: "f743fc982a08a30cfb3a",
        1449: "5dcc9f5b67afe6001614",
        1531: "85e0eabd018414582729",
        1543: "189440fdb6f5199790f0",
        1606: "198390425279352194aa",
        1749: "b88cd9d1a5df7f44e746",
        1784: "c804e78ae7c9b94431a5",
        1973: "dd6a1461e9027870cd75",
        2202: "1087bb402d40138fa388",
        2206: "51853f6beab5f5f67018",
        2256: "1463214e8dc3400f35ed",
        2320: "7e9614c71d703e434c03",
        2435: "e7fd945a9ae1f999e7dc",
        2455: "9537b2f02c9da4413c1e",
        2500: "2909aac8e87fb309b5b4",
        2543: "138d50166b1e02cfed05",
        2632: "faf6bbc566ec787ed1fe",
        2702: "b0f80188b7a38018db15",
        2708: "d81ea022c0b01c5725d8",
        2726: "99f861efb65ec5140536",
        2749: "f731dbecc546e3d0db1a",
        2785: "f44bfa3b4133ca2ae52e",
        2836: "62a602c70ea6b0841304",
        2842: "c82f16e8b0b51414def3",
        2855: "b997339d615f265f149c",
        2870: "aaec1103611d57885e4f",
        2890: "9515543600f2df7a9c74",
        2912: "55b4263343eba1fe33cf",
        2954: "0e2d120157578c393a1f",
        2992: "f929042107fee0db3b63",
        2995: "8e013e6ada3230c0cd52",
        3025: "595f970f7d8c2b07c6b2",
        3216: "e58b21a0dd49d166d5af",
        3266: "d952e6e23ee8e02cc437",
        3374: "760550603bc7fec9af44",
        3436: "c0a5fb48cf67a1f7a3cc",
        3562: "d9f2e4024854ac290bbb",
        3569: "f7cbc41a4bb09c6ab154",
        3701: "64d26ad24283b6d79e36",
        3710: "9f0600a2ec6513b3c14b",
        3833: "7a64733dcaad8ea76d6f",
        3872: "6d443b2c15eadfb58676",
        3912: "08876784fd773fc6f025",
        3940: "2b7e7134165b5c24e146",
        4153: "6602f61f546b6d8e38b9",
        4160: "571773919709bbe070cc",
        4182: "27929ffba9840278b2cf",
        4226: "819c6a6883f8feaa67e8",
        4227: "2b4036dfe8754db38211",
        4262: "d34414ea8b31503ab798",
        4268: "6712dd598b2bd71c3ad3",
        4372: "800b921f67382b2497d1",
        4419: "05d900029511eebda51c",
        4442: "fb648f4f30c3cb3c1329",
        4893: "76618c74ae8f1c28aa20",
        4917: "a122436f114de26ca34e",
        4985: "564b72917da9a97e65cd",
        5018: "ba8e053f7152683e687a",
        5027: "608ab639da6d6a03a379",
        5110: "14f1d606c38ed3d0d102",
        5136: "ab57f0b05a572319d920",
        5139: "cc187f5ae69e50d9ce7d",
        5183: "edb513dfe0601e59eef0",
        5193: "fb3b99b33afe20301299",
        5231: "8d35d2c168148d961e4b",
        5232: "704896fc38e524200353",
        5240: "a31deb3e11d3d564a507",
        5241: "82e889b73fad5c69b5a1",
        5484: "ea82383f4ac028caeb19",
        5605: "c8eee0c9e5fad2d19815",
        5769: "d0d040fb16ae8a71d49c",
        5791: "24f444c42ad137daabc5",
        5933: "fc32597a2b3742478036",
        6031: "07ff1271b0a85ec26c6e",
        6103: "e65bc3c7988779ee1738",
        6132: "29be0b30968487ba69bf",
        6149: "3e354d94ef824d22927b",
        6159: "627e045ab6b3459485ab",
        6165: "ce80a8a21523f112db44",
        6208: "42a00361e87ee09c2f98",
        6209: "9915b153c318c9f83165",
        6224: "1f325af6d76bb7ebf06b",
        6236: "b7374b10f79a7662cd19",
        6239: "c908a768f4edd8f3a51e",
        6343: "c377f70118e2c7685f4b",
        6383: "c7f3346333221060e4ea",
        6403: "cfbafd2d4bccc3dcfb37",
        6459: "6fbe6a11b9c7c2c8fb88",
        6523: "5072a245fa6a0209fac7",
        6542: "0567cd1bcd4c192ef1c2",
        6562: "e6c39121f90a51c7402e",
        6589: "3ea357803913bcbc49af",
        6716: "830932a38d1fca0ebaf4",
        6728: "0a7ab5fb2ea622866b36",
        6759: "47a07b41158db417ed0f",
        6845: "1f08970fd9bf5df19d4f",
        6948: "a0981e06896b51b76c58",
        6966: "e54ff3961b8693751224",
        6979: "9a18e116169d696525f2",
        6995: "1f3c489cf8f8d8546a93",
        7064: "79fdc548a6981d595bab",
        7352: "11bab7539502ccd19d68",
        7383: "1cae9bcfe6993c6080d6",
        7439: "ca4bc033703dfbc13363",
        7499: "5f081f3f85f22d1510e4",
        7539: "54296bf8e9127479a6e8",
        7591: "622924888e7d46a11c37",
        7625: "f0dc3ce0fd0476ac4f91",
        7631: "a2bb692c9542af898cb8",
        7633: "7741e73ed5692e5d6781",
        7681: "d5d07149cedcd1c65bae",
        7786: "4e746e32d51dee0cbbc3",
        7796: "8994dc5f48371ad469d2",
        7798: "9fe5a01b9f01d36f4062",
        7926: "a7b6de5f904a09afa838",
        8025: "bbf4b5f219447d3a019d",
        8306: "8bce2da4ae2683b7f9f9",
        8350: "cd57d212241fc825c1ab",
        8396: "ee2ed666744025c3aae9",
        8523: "445ee58af9888c8228a7",
        8585: "189012adf49230a51279",
        8591: "a1dadbd6d41aede35281",
        8718: "dbe8578814f985cfab95",
        8755: "8f34e69c85717c0323e0",
        8758: "dcf96fa890a5a21f1896",
        8801: "bd4beb0ebf93895cdd85",
        8932: "c990afb349a3ef5e0267",
        8967: "9cfc07d7326ea2c6e260",
        8995: "2f19030b8b502030bc89",
        9027: "be517d4f1a9bc2f8ae91",
        9116: "3cd11806f914cb0d1abe",
        9150: "a7c89eb93ddc05454a25",
        9152: "7e6344fb246123d02e5b",
        9188: "122af43258abead6fe74",
        9207: "3d30ce586f97458c5013",
        9255: "936c50af51d5532a54ff",
        9391: "8fdec6ea8bb813ecb71c",
        9431: "158b898c0e9e021c7108",
        9566: "873485bf5c936708b792",
        9650: "60e1fc59f0b40a256627",
        9712: "563d63eed8a639ee4223",
        9730: "0468e88b3a9783806fb3",
        9812: "24883195ab7398ac24b3",
        9916: "d98452c8286b02ff4f0a",
        9992: "39e48b76acdfc2102d32",
      }[e]),
    (f.miniCssF = (e) =>
      "css/applications/appmgmt/" +
      ({
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
      }[e] || e) +
      ".css?contenthash=" +
      {
        1101: "0fbd0e93b254aa82d98e",
        1749: "166584cc55d964371a1c",
        2455: "a6492dbff3c99efa247f",
        2785: "da3b05b688206293fc3e",
        2995: "68490a0464a23c4c13fe",
        4226: "f355e2c45b0604a5b7f2",
        4262: "61877d984bfcf3e7f40f",
        4268: "d3bdba6fd9d613805ea2",
        4985: "fe01caf6b05ba287b7b3",
        5027: "33eb9d66d0507e03ca68",
        5139: "a501932e90442f828923",
        5933: "8a89b035cd5690788e25",
        6132: "36f12bdcd4a8ae076443",
        6343: "84882016b1acf26b069c",
        7352: "ed775333cb10ed97b626",
        7383: "7d397c627b354e1a49cf",
        8350: "7e1266e3d4c3cc3350d8",
        8396: "3a7c9b685cb7f8bf6d4d",
        8523: "ccb1bffbb05562f95cc3",
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
    (s = {}),
    (d = "appmgmt-storeadmin:"),
    (f.l = (e, a, n, c) => {
      if (s[e]) s[e].push(a);
      else {
        var r, i;
        if (void 0 !== n)
          for (
            var b = document.getElementsByTagName("script"), o = 0;
            o < b.length;
            o++
          ) {
            var t = b[o];
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
          f.nc && r.setAttribute("nonce", f.nc),
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
    (f.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (f.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (f.p = ""),
    (() => {
      if ("undefined" != typeof document) {
        var e = (e) =>
            new Promise((a, n) => {
              var s = f.miniCssF(e),
                d = f.p + s;
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
                          f = (n && n.target && n.target.href) || a,
                          i = new Error(
                            "Loading CSS chunk " +
                              e +
                              " failed.\n(" +
                              r +
                              ": " +
                              f +
                              ")",
                          );
                        (i.name = "ChunkLoadError"),
                          (i.code = "CSS_CHUNK_LOAD_FAILED"),
                          (i.type = r),
                          (i.request = f),
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
        f.f.miniCss = (n, s) => {
          a[n]
            ? s.push(a[n])
            : 0 !== a[n] &&
              {
                1101: 1,
                1749: 1,
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
      (f.f.j = (a, n) => {
        var s = f.o(e, a) ? e[a] : void 0;
        if (0 !== s)
          if (s) n.push(s[2]);
          else if (4556 != a) {
            var d = new Promise((n, d) => (s = e[a] = [n, d]));
            n.push((s[2] = d));
            var c = f.p + f.u(a),
              r = new Error();
            f.l(
              c,
              (n) => {
                if (f.o(e, a) && (0 !== (s = e[a]) && (e[a] = void 0), s)) {
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
        (f.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var s,
            d,
            [c, r, i] = n,
            b = 0;
          if (c.some((a) => 0 !== e[a])) {
            for (s in r) f.o(r, s) && (f.m[s] = r[s]);
            if (i) var o = i(f);
          }
          for (a && a(n); b < c.length; b++)
            (d = c[b]), f.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return f.O(o);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();

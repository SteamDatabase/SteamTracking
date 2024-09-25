/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "9207781";
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
        for (o = 0; o < e.length; o++) {
          for (var [n, s, d] = e[o], r = !0, i = 0; i < n.length; i++)
            (!1 & d || c >= d) && Object.keys(b.O).every((e) => b.O[e](n[i]))
              ? n.splice(i--, 1)
              : ((r = !1), d < c && (c = d));
          if (r) {
            e.splice(o--, 1);
            var f = s();
            void 0 !== f && (a = f);
          }
        }
        return a;
      }
      d = d || 0;
      for (var o = e.length; o > 0 && e[o - 1][2] > d; o--) e[o] = e[o - 1];
      e[o] = [n, s, d];
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
        2946: "libraries~01f083eeb",
        2954: "shared_ukrainian-json",
        2992: "marketing_koreana-json",
        2995: "logoedtior",
        3025: "contenthubpages",
        3216: "sales_czech-json",
        3219: "chunk~916a49bc4",
        3266: "main_dutch-json",
        3350: "deadlines",
        3374: "main_schinese-json",
        3436: "marketing_finnish-json",
        3562: "sales_bulgarian-json",
        3569: "sales_thai-json",
        3701: "main_swedish-json",
        3710: "shared_arabic-json",
        3810: "libraries~8fdaa6e5d",
        3833: "marketing_ukrainian-json",
        3872: "marketing_tchinese-json",
        3912: "marketing_vietnamese-json",
        3940: "main_thai-json",
        4072: "chunk~8fdaa6e5d",
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
        5467: "chunk~901a9da66",
        5484: "main_greek-json",
        5605: "sales_dutch-json",
        5791: "sales_indonesian-json",
        5839: "chunk~689bb7175",
        5841: "libraries~e9c7aadaf",
        5933: "steamlearn",
        5970: "chunk~2caae0244",
        6031: "shared_finnish-json",
        6060: "chunk~01f083eeb",
        6103: "sales_english-json",
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
        8632: "libraries~2caae0244",
        8718: "marketing_swedish-json",
        8755: "marketing_greek-json",
        8758: "chunk~4b4a4243d",
        8801: "sales_german-json",
        8932: "libraries~4b4a4243d",
        8967: "shared_polish-json",
        8995: "chunk~5da2a553c",
        9027: "shared_sc_schinese-json",
        9152: "shared_turkish-json",
        9188: "main_english-json",
        9207: "marketing_french-json",
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
        67: "59eb329807e8d48a0a05",
        144: "b562c661233a53c77aef",
        407: "0fa7eda9d4702949e298",
        414: "b6e192f88fa418a88714",
        478: "67dbfec06a27186dc643",
        494: "487c1987a3fd2653d7db",
        539: "40acf3a01a31acda8b9b",
        614: "b11f901d2d4a81358243",
        809: "27a89228dea38e8cfaa5",
        934: "1af69801894f42265b44",
        976: "0d0213bd77407345a5ce",
        1048: "8c8649fb2bcbad8f462f",
        1065: "7b06772a52948c22777b",
        1084: "55e91c7aa6bd8136de87",
        1101: "1be0b7af36b11b8bf01b",
        1225: "e392155975d8e3bc42d1",
        1227: "80d5d044fd079749aae1",
        1337: "23a1a73be3d00687d587",
        1351: "c9c860143e0be31645aa",
        1369: "2402823ad2d8afc4158b",
        1396: "f743fc982a08a30cfb3a",
        1449: "e34acd09f874eada12eb",
        1531: "5faa2161e014e95e2649",
        1543: "189440fdb6f5199790f0",
        1606: "786acc935c9a0206b697",
        1784: "586c9bdaae198af54af0",
        1973: "2d1bfd487e41ae621426",
        2201: "49cc10685864f40c9593",
        2206: "51853f6beab5f5f67018",
        2256: "610ed339174b6ed6f81d",
        2320: "08f0ba52e6058175fe79",
        2435: "0ac92ebb7a2d1093c742",
        2455: "dd5474dded68fca90ea0",
        2500: "839a403b1c9c1b86ac9c",
        2543: "da1a0efc61c3aac74156",
        2632: "84486a0da0a73fe0619d",
        2702: "e5c79e507180ba95f32c",
        2708: "7cc70571eb019b0465c5",
        2726: "99f861efb65ec5140536",
        2749: "504e8da07042ca1904ff",
        2785: "92a0c4e49637e0cfff13",
        2842: "c82f16e8b0b51414def3",
        2855: "b997339d615f265f149c",
        2946: "5a623db960fe744ba02a",
        2954: "241549410180bee76760",
        2992: "312adbddaf87d5b001c3",
        2995: "4bfa8521fce1c0c3f4bc",
        3025: "921eee5313ac6a5dbd9f",
        3216: "e58b21a0dd49d166d5af",
        3219: "691a69a7123869bf4388",
        3266: "93ec38d4cb6b80357c53",
        3350: "7e0a183075859e634c5f",
        3374: "9f06efe5a2d351ba3347",
        3436: "c0a5fb48cf67a1f7a3cc",
        3562: "d9f2e4024854ac290bbb",
        3569: "f7cbc41a4bb09c6ab154",
        3701: "afd8879ed7223de14e6e",
        3710: "9f0600a2ec6513b3c14b",
        3810: "268d657e3d71178a3b4a",
        3833: "570ca46f2586269634bb",
        3872: "6d443b2c15eadfb58676",
        3912: "19aa92d5b8f3f87c6ff9",
        3940: "68697c1d1355491b3a42",
        4072: "ee48aa3cb621cbeb0fe8",
        4153: "c0364caf95d8f504078d",
        4160: "cc032b9f28621c595be0",
        4182: "27929ffba9840278b2cf",
        4226: "819c6a6883f8feaa67e8",
        4227: "1f765e333c5fd81b8534",
        4262: "d34414ea8b31503ab798",
        4268: "5b155827f6a7aa437863",
        4372: "800b921f67382b2497d1",
        4419: "6a8c25da07deb0b7eee2",
        4893: "3c23a872c38e54d90a0c",
        4917: "98b1042a351158080688",
        4985: "96f19e179858504064f2",
        5018: "81ac2cc3bd1bde641fb3",
        5027: "dc96c102c81e071e2bf5",
        5110: "44f3ea40f2908f1ea7a5",
        5136: "ab57f0b05a572319d920",
        5183: "edb513dfe0601e59eef0",
        5193: "da42aa93a400e7ca8ff4",
        5231: "8d35d2c168148d961e4b",
        5232: "704896fc38e524200353",
        5240: "a31deb3e11d3d564a507",
        5241: "857aeb95a0cda4a6cb6b",
        5467: "cb6e4485f760fbb49480",
        5484: "9d0ff72a8242781b4c62",
        5605: "c8eee0c9e5fad2d19815",
        5791: "24f444c42ad137daabc5",
        5839: "8ac66d18ad793aaabbd0",
        5841: "82e88ecdbd59e37477df",
        5933: "0f1d06d243211fb6aafb",
        5970: "c8343633deeee72e7772",
        6031: "c8b72d0615c7c1c917ba",
        6060: "366b9b74c4ac3f07826f",
        6103: "e65bc3c7988779ee1738",
        6149: "77cad4c93e50df2f9e5e",
        6159: "54eff68e9ebde338d058",
        6165: "5c024301e4097b2ce981",
        6208: "971cf239d238bacbcdaf",
        6209: "9e2ed9e8d39b78da616e",
        6224: "1f325af6d76bb7ebf06b",
        6236: "ae2b1878c0f0a441db4b",
        6239: "3ec7e3eb83e5da31a847",
        6343: "f767c51637989dece567",
        6383: "c7f3346333221060e4ea",
        6403: "cfbafd2d4bccc3dcfb37",
        6459: "6fbe6a11b9c7c2c8fb88",
        6523: "d8b4364c17faf3fd33c0",
        6542: "03989cddedf4afcf7a39",
        6562: "bcdd5c5acb4d0a24edb4",
        6589: "4b313a10f2d90adcf3ae",
        6716: "830932a38d1fca0ebaf4",
        6728: "0a7ab5fb2ea622866b36",
        6759: "47a07b41158db417ed0f",
        6845: "1f08970fd9bf5df19d4f",
        6948: "fdc421f8a7d789ce04e0",
        6966: "e54ff3961b8693751224",
        6979: "90e7c268ff9abb692862",
        6995: "a580480ea0c88f7c76dd",
        7064: "79fdc548a6981d595bab",
        7352: "ba1a7746f6a9829e876e",
        7378: "540221c8ad95eeae4435",
        7383: "1cae9bcfe6993c6080d6",
        7439: "ca4bc033703dfbc13363",
        7499: "5f081f3f85f22d1510e4",
        7539: "eedda360dacde8fb8d9c",
        7591: "08c34c66b817bb0f3cd3",
        7625: "d7b87077c3242c1dad1c",
        7631: "a2bb692c9542af898cb8",
        7633: "7741e73ed5692e5d6781",
        7681: "d5d07149cedcd1c65bae",
        7786: "b87059b168666f3110a0",
        7796: "5050c47e3dc62af0c37c",
        7798: "c61cc260de1977505672",
        7926: "a7b6de5f904a09afa838",
        8025: "373706e47d22cfeed979",
        8306: "fe270df35273741979f9",
        8350: "1494ccb3fa25694d0a34",
        8396: "1f5a20b3efcf0a3524c3",
        8523: "581cbb35d870a4fb68ae",
        8585: "953c18338309f9c31dc6",
        8591: "a1dadbd6d41aede35281",
        8632: "1ce1b8b3b6ca822a2dc4",
        8718: "16761bc91d471d5284ef",
        8755: "05b70d2f0999664cf49a",
        8758: "82476541fdc49ec31170",
        8801: "bd4beb0ebf93895cdd85",
        8932: "c990afb349a3ef5e0267",
        8967: "7102efc9ae764211b8c3",
        8995: "060317f77969ac5a445d",
        9027: "be517d4f1a9bc2f8ae91",
        9152: "761971a9750346d01575",
        9188: "6900edd7cfdb60d99f93",
        9207: "b55c80f56741fd6654dd",
        9391: "5a3e33002846c38a0ff4",
        9431: "e58742aba6cc816d1502",
        9566: "491922301102d0ccd4d2",
        9650: "60e1fc59f0b40a256627",
        9712: "50370f5a4a8481ff5e33",
        9730: "0468e88b3a9783806fb3",
        9747: "0ddc205a5113f0114b03",
        9812: "24883195ab7398ac24b3",
        9916: "d98452c8286b02ff4f0a",
        9992: "39e48b76acdfc2102d32",
      }[e]),
    (b.miniCssF = (e) =>
      "css/applications/appmgmt/" +
      {
        1101: "pricingtool",
        2455: "storeadmin",
        2785: "libraries~5da2a553c",
        2995: "logoedtior",
        3025: "contenthubpages",
        4072: "chunk~8fdaa6e5d",
        4226: "steamdeck",
        4262: "steamml",
        4268: "events",
        4985: "resquemsg",
        5027: "sdrconnections",
        5933: "steamlearn",
        5970: "chunk~2caae0244",
        6343: "timelinemarkers",
        7383: "adminpromoreviewdashboard",
        8350: "chunk~4ec87c66d",
        8396: "broadcast",
        8523: "publisherdashboard",
      }[e] +
      ".css?contenthash=" +
      {
        1101: "0fbd0e93b254aa82d98e",
        2455: "6eade42414a52818bc10",
        2785: "da3b05b688206293fc3e",
        2995: "68490a0464a23c4c13fe",
        3025: "f2fb61aa145f9045244a",
        4072: "36f12bdcd4a8ae076443",
        4226: "f355e2c45b0604a5b7f2",
        4262: "61877d984bfcf3e7f40f",
        4268: "309426e946ce4fa0eecd",
        4985: "fe01caf6b05ba287b7b3",
        5027: "33eb9d66d0507e03ca68",
        5933: "ee99685ae8f91faa34d5",
        5970: "6107d774f0ab4978e1f0",
        6343: "4df060bb741e85c0196c",
        7383: "7d397c627b354e1a49cf",
        8350: "ae757621c3cc3f5ce73b",
        8396: "3a7c9b685cb7f8bf6d4d",
        8523: "febeaf5a4a1b01fa0ba2",
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
            var f = document.getElementsByTagName("script"), o = 0;
            o < f.length;
            o++
          ) {
            var t = f[o];
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
                3025: 1,
                4072: 1,
                4226: 1,
                4262: 1,
                4268: 1,
                4985: 1,
                5027: 1,
                5933: 1,
                5970: 1,
                6343: 1,
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
            f = 0;
          if (c.some((a) => 0 !== e[a])) {
            for (s in r) b.o(r, s) && (b.m[s] = r[s]);
            if (i) var o = i(b);
          }
          for (a && a(n); f < c.length; f++)
            (d = c[f]), b.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return b.O(o);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();

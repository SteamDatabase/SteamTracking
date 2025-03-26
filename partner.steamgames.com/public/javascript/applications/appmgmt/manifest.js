/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "9635625";
(() => {
  "use strict";
  var e,
    a,
    n,
    s,
    c,
    d = {},
    r = {};
  function b(e) {
    var a = r[e];
    if (void 0 !== a) return a.exports;
    var n = (r[e] = { id: e, loaded: !1, exports: {} });
    return d[e].call(n.exports, n, n.exports, b), (n.loaded = !0), n.exports;
  }
  (b.m = d),
    (e = []),
    (b.O = (a, n, s, c) => {
      if (!n) {
        var d = 1 / 0;
        for (t = 0; t < e.length; t++) {
          for (var [n, s, c] = e[t], r = !0, i = 0; i < n.length; i++)
            (!1 & c || d >= c) && Object.keys(b.O).every((e) => b.O[e](n[i]))
              ? n.splice(i--, 1)
              : ((r = !1), c < d && (d = c));
          if (r) {
            e.splice(t--, 1);
            var o = s();
            void 0 !== o && (a = o);
          }
        }
        return a;
      }
      c = c || 0;
      for (var t = e.length; t > 0 && e[t - 1][2] > c; t--) e[t] = e[t - 1];
      e[t] = [n, s, c];
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
      var c = Object.create(null);
      b.r(c);
      var d = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var r = 2 & s && e; "object" == typeof r && !~a.indexOf(r); r = n(r))
        Object.getOwnPropertyNames(r).forEach((a) => (d[a] = () => e[a]));
      return (d.default = () => e), b.d(c, d), c;
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
        316: "libraries~65a7c0237",
        407: "marketing_indonesian-json",
        414: "sales_polish-json",
        478: "marketing_danish-json",
        494: "sales_hungarian-json",
        539: "main_finnish-json",
        614: "marketing_hungarian-json",
        725: "chunk~75ddda0b4",
        809: "marketing_thai-json",
        934: "sales_danish-json",
        976: "shared_thai-json",
        1048: "sales_japanese-json",
        1065: "marketing_brazilian-json",
        1084: "libraries~4ec87c66d",
        1101: "pricingtool",
        1134: "libraries~42ac8df17",
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
        1810: "chunk~65a7c0237",
        1973: "shared_japanese-json",
        2012: "chunk~42ac8df17",
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
        2842: "sales_portuguese-json",
        2855: "marketing_norwegian-json",
        2946: "libraries~01f083eeb",
        2954: "shared_ukrainian-json",
        2992: "marketing_koreana-json",
        2995: "logoedtior",
        3025: "contenthubpages",
        3216: "sales_czech-json",
        3266: "main_dutch-json",
        3350: "deadlines",
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
        4262: "steamml",
        4268: "events",
        4298: "chunk~5c3391d11",
        4372: "sales_finnish-json",
        4419: "main_portuguese-json",
        4440: "chunk~b7169550c",
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
        5791: "sales_indonesian-json",
        5841: "libraries~e9c7aadaf",
        5933: "steamlearn",
        6031: "shared_finnish-json",
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
        6672: "chunk~ae98f6f0a",
        6700: "chunk~6fa0a9ff7",
        6716: "marketing_sc_schinese-json",
        6728: "marketing_latam-json",
        6759: "marketing_italian-json",
        6762: "meetsteam",
        6845: "marketing_dutch-json",
        6948: "main_norwegian-json",
        6966: "login",
        6979: "main_polish-json",
        6995: "libraries~65c77a859",
        7064: "marketing_czech-json",
        7224: "chunk~b624b36e8",
        7352: "chunk~9e65e27a0",
        7383: "adminpromoreviewdashboard",
        7439: "marketing_spanish-json",
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
        8129: "chunk~5d3576dcd",
        8306: "shared_indonesian-json",
        8350: "chunk~4ec87c66d",
        8396: "broadcast",
        8523: "publisherdashboard",
        8585: "marketing_german-json",
        8713: "chunk~271e3841d",
        8718: "marketing_swedish-json",
        8755: "marketing_greek-json",
        8758: "chunk~4b4a4243d",
        8787: "libraries~c14e6be50",
        8801: "sales_german-json",
        8932: "libraries~4b4a4243d",
        8967: "shared_polish-json",
        8995: "chunk~5da2a553c",
        9001: "chunk~2b2881d4d",
        9017: "chunk~804e695f4",
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
        9812: "sales_romanian-json",
        9916: "marketing_romanian-json",
        9954: "libraries~6fa0a9ff7",
        9992: "sales_koreana-json",
      }[e] || e) +
      ".js?contenthash=" +
      {
        67: "04fd91e0d942af6b84c7",
        144: "a93d0ea0943cf570e548",
        316: "3bd4673819e3d13fc6b6",
        407: "20c3f171ed7e0fa7043f",
        414: "03b3afe2cff75df7e11b",
        478: "cb075690fa607005bd7c",
        494: "063a897d5ba169bf8c28",
        539: "71d2d2d375dacb519982",
        614: "decdcf98dcecd6a373b2",
        725: "e604e404611ad75855c5",
        809: "62c1ec2d415f678cf818",
        934: "972c6cc2e7cc76248376",
        976: "b217d3f3d71955e56ef3",
        1048: "6a4685c395dbb11eac9a",
        1065: "81b347c206682a641564",
        1084: "94fad71ea90d3bccf2ba",
        1101: "2a4271152be18b15fa0e",
        1134: "f239215f9b461c7634da",
        1225: "98a69524e188d5e7aacb",
        1227: "d294dbf8abc2a9072c7a",
        1337: "22c7ac73d35e05e5a43b",
        1351: "b9ada6f9a3d63d503033",
        1369: "0b86a629c4799ba146ef",
        1396: "0d641ee502d5bc12f0b0",
        1449: "ce5f2225a0e6d22d1de7",
        1531: "b0cfcdd8717d35a99025",
        1543: "9eb7fe99dad4d8a2f2d6",
        1606: "81dfea1cf45a2b9ac3cb",
        1784: "586c9bdaae198af54af0",
        1810: "5dcfb38d42b63f8168ea",
        1973: "24b9afb9943cee5666d5",
        2012: "e1182304f20f9485e6ce",
        2206: "74d02d05e896356c9419",
        2256: "08f4fbfe45b54de7ff6a",
        2320: "02dcadbcfb2e8eeb820f",
        2435: "b5efae4541bc6dcd51d0",
        2455: "2516b84ba759b6667723",
        2500: "14e6c1f2efde029932fa",
        2543: "bf92332c77db2ce8e3fd",
        2632: "2d400019c0151fb58422",
        2702: "3589b7742cbca9e1ac51",
        2708: "4c1aa8e36e7e2df7237f",
        2726: "144d51c29cfeed9db741",
        2749: "3f37c8199dbf148bbb7e",
        2842: "0d2d98ea67ce5626afce",
        2855: "e96a2f2f1ee851941022",
        2946: "1bd79909bbc650a143a9",
        2954: "3cd725c0d8f9ccf7070e",
        2992: "3f8a70e0f607040037a1",
        2995: "3b8a1409ddac8e7f0ad7",
        3025: "7ff8c3dbde99ed324ade",
        3216: "564c7d19d20701b33fa8",
        3266: "d4d920eceb41fed931cd",
        3350: "13af29b5e7af544214ba",
        3374: "892abdc1b64651f704f7",
        3436: "e113d344729bf444c5d7",
        3562: "5bc4be530d34dbdc53aa",
        3569: "86c1f52d58158aaf1f0d",
        3701: "686c1e31ffacc3bc4083",
        3710: "9f0600a2ec6513b3c14b",
        3833: "d99f3ffa3e574803f1b3",
        3872: "d70db11959ace48e4946",
        3912: "fef2817b3b9126345c0e",
        3940: "c366d6b76660ce2aba08",
        4153: "dbfc2f00be4a30154c28",
        4160: "619fde77a5e96fb011be",
        4182: "4a6354a93be1e96f49ea",
        4226: "819c6a6883f8feaa67e8",
        4262: "d34414ea8b31503ab798",
        4268: "b1272afcb2a3855cd73c",
        4298: "e1f41a3c2ba8196a13ae",
        4372: "cfc97b3d453eeaafa8c6",
        4419: "36a4605d063f36110310",
        4440: "c4ee4cec8e1457971944",
        4893: "9271729cfb7fb01f3bf4",
        4917: "9c874746c645094ca81f",
        4985: "b1ce15dc52efae61732f",
        5018: "62664825e7e92b8abeb3",
        5027: "bc0374708322b530ea0f",
        5110: "3cd6c21367acb6eb13bd",
        5136: "ab57f0b05a572319d920",
        5183: "c75de346f425519e7f21",
        5193: "6d0da3036cd2f7144faa",
        5231: "cfc9f582e7fc44c1c962",
        5232: "3ef9882049f5e71b36ab",
        5240: "99a612ac03e8fc4b1ed8",
        5241: "5027ab032189b6c3f6d4",
        5484: "258aeadb2385a413dd05",
        5605: "404465735928f9229fe8",
        5791: "3a4a41b6619da86de309",
        5841: "1a9675ca652ec52fc442",
        5933: "ed475f4cbc53641ce357",
        6031: "ae4c42ee0845ff2b0b3b",
        6103: "21ac1cbc73640eda6d03",
        6149: "927d19fa2405ae3bceb7",
        6159: "e408e748ac73cb298ba9",
        6165: "a4f333d30d586618752a",
        6208: "3a53bdb1bc062b227521",
        6209: "6f1acf144d67994ccd82",
        6224: "07dfb387871373a1bec1",
        6236: "bce56adb83b4e2b3d9c0",
        6239: "8488a9875097427a2f14",
        6343: "c6062bafd8dd644f1212",
        6383: "806d30b66e1833d3945f",
        6403: "a0cae94439dfd82dc34f",
        6459: "cd8f1dced645e845a319",
        6523: "8748849691f26967a3de",
        6542: "0298e344b8e86fe0210f",
        6562: "fce34fb7fd540a6b3f45",
        6589: "ab49c86f96971932162f",
        6672: "64972630105d469d886d",
        6700: "0f982b0633f99612b512",
        6716: "830932a38d1fca0ebaf4",
        6728: "55842697f73aabb50568",
        6759: "84b4e7cf4ee049f750eb",
        6762: "8a697949e0dae840b83b",
        6845: "b5525198b97ff4121063",
        6948: "cb3499ad1270ca09d65d",
        6966: "fd430084bdbac1e82f17",
        6979: "9ba087f96536f9fc9a60",
        6995: "c18faf8a217767deff4e",
        7064: "c8dc074d3a43bdf04d4e",
        7224: "904d8b8cec1674df777c",
        7352: "f59ca1b318cf149b743a",
        7383: "1cae9bcfe6993c6080d6",
        7439: "67941e1490c1fb1e6be8",
        7539: "d53063948ab65837af25",
        7591: "164bc861758e3764273b",
        7625: "8c32be1cd69bea18e241",
        7631: "f1027a344e8d7f5686f3",
        7633: "b1ad88be001bcd38b975",
        7681: "dde5c875c68caf8e336b",
        7786: "739a7633cb75679e97e1",
        7796: "68b2749657d2fe0ae01d",
        7798: "21bddd110b18e361949d",
        7926: "d0b26cb62c7a7bb7c488",
        8025: "abbc759393cd5ca1cdc3",
        8129: "5338334afc0565752198",
        8306: "100bb885de6f288df958",
        8350: "a35b7e72cb7670f2a4ae",
        8396: "4d19cb916eb538085bb0",
        8523: "9447dfad159a580753b3",
        8585: "1caa291fc8f363590cfa",
        8713: "004643994f8fe22b3ee7",
        8718: "669d41fe7c57a28f2fd2",
        8755: "6ba0a761a2159d76c6df",
        8758: "539bd3b1fa48a25329dd",
        8787: "8fc5c39fa7f88e4070ac",
        8801: "6805501f4cb972d7f9d1",
        8932: "9ccfa419849c1696fd16",
        8967: "fc2cc7f6587f38921a25",
        8995: "d5049a7a761afded03a5",
        9001: "c8dc8498a58bc4db18a9",
        9017: "e406206f8f6b907659b1",
        9027: "e117dbde3d17ca3eb99b",
        9152: "61d893cf646346ddc7ea",
        9188: "4f96a8860818c6d4cc46",
        9207: "e4a6ec64a92fb899b935",
        9391: "defe7dd46d100597b571",
        9431: "e497231abb77086c064c",
        9566: "e047b8ee8d6109ca53a0",
        9650: "e870c326f5ab6ef883be",
        9712: "0dfb1c846eb36f816154",
        9730: "71368e52e8ec9d17f595",
        9812: "d5d297cad60dfaeea053",
        9916: "a01195a7cea4ba67cca1",
        9954: "565ff28ac841bae5a938",
        9992: "3c43f78a7ed49bbfd6c4",
      }[e]),
    (b.miniCssF = (e) =>
      "css/applications/appmgmt/" +
      {
        1101: "pricingtool",
        1810: "chunk~65a7c0237",
        2012: "chunk~42ac8df17",
        2455: "storeadmin",
        2995: "logoedtior",
        3025: "contenthubpages",
        3350: "deadlines",
        4226: "steamdeck",
        4262: "steamml",
        4268: "events",
        4985: "resquemsg",
        5027: "sdrconnections",
        5933: "steamlearn",
        6343: "timelinemarkers",
        6762: "meetsteam",
        7383: "adminpromoreviewdashboard",
        8350: "chunk~4ec87c66d",
        8396: "broadcast",
        8523: "publisherdashboard",
      }[e] +
      ".css?contenthash=" +
      {
        1101: "c1ab5e1847e6ddbece39",
        1810: "950d1a8e1e8cb524ff25",
        2012: "384a75de435bc8c57eaa",
        2455: "6e12d605b8cf1d788ec3",
        2995: "68490a0464a23c4c13fe",
        3025: "eb3618e55422d14c49b2",
        3350: "e5ab345718865e3e603d",
        4226: "f355e2c45b0604a5b7f2",
        4262: "61877d984bfcf3e7f40f",
        4268: "a169c621690d5441f55d",
        4985: "edeef71b8baf55102fb0",
        5027: "1fcd164301cfa418de18",
        5933: "50f55eb6b4b8005c600f",
        6343: "1603047f79d597876269",
        6762: "3e1753a79f7da0727b64",
        7383: "7d397c627b354e1a49cf",
        8350: "9b4e3824e8873c50d33f",
        8396: "05649b9eccdecdb9c269",
        8523: "35281b1c5a456b468d8e",
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
    (c = "appmgmt-storeadmin:"),
    (b.l = (e, a, n, d) => {
      if (s[e]) s[e].push(a);
      else {
        var r, i;
        if (void 0 !== n)
          for (
            var o = document.getElementsByTagName("script"), t = 0;
            t < o.length;
            t++
          ) {
            var f = o[t];
            if (
              f.getAttribute("src") == e ||
              f.getAttribute("data-webpack") == c + n
            ) {
              r = f;
              break;
            }
          }
        r ||
          ((i = !0),
          ((r = document.createElement("script")).charset = "utf-8"),
          (r.timeout = 120),
          b.nc && r.setAttribute("nonce", b.nc),
          r.setAttribute("data-webpack", c + n),
          (r.src = e)),
          (s[e] = [a]);
        var l = (a, n) => {
            (r.onerror = r.onload = null), clearTimeout(h);
            var c = s[e];
            if (
              (delete s[e],
              r.parentNode && r.parentNode.removeChild(r),
              c && c.forEach((e) => e(n)),
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
                c = b.p + s;
              if (
                ((e, a) => {
                  for (
                    var n = document.getElementsByTagName("link"), s = 0;
                    s < n.length;
                    s++
                  ) {
                    var c =
                      (r = n[s]).getAttribute("data-href") ||
                      r.getAttribute("href");
                    if ("stylesheet" === r.rel && (c === e || c === a))
                      return r;
                  }
                  var d = document.getElementsByTagName("style");
                  for (s = 0; s < d.length; s++) {
                    var r;
                    if (
                      (c = (r = d[s]).getAttribute("data-href")) === e ||
                      c === a
                    )
                      return r;
                  }
                })(s, c)
              )
                return a();
              ((e, a, n, s, c) => {
                var d = document.createElement("link");
                (d.rel = "stylesheet"),
                  (d.type = "text/css"),
                  (d.onerror = d.onload =
                    (n) => {
                      if (((d.onerror = d.onload = null), "load" === n.type))
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
                          d.parentNode && d.parentNode.removeChild(d),
                          c(i);
                      }
                    }),
                  (d.href = a),
                  n
                    ? n.parentNode.insertBefore(d, n.nextSibling)
                    : document.head.appendChild(d);
              })(e, c, null, a, n);
            }),
          a = { 4556: 0 };
        b.f.miniCss = (n, s) => {
          a[n]
            ? s.push(a[n])
            : 0 !== a[n] &&
              {
                1101: 1,
                1810: 1,
                2012: 1,
                2455: 1,
                2995: 1,
                3025: 1,
                3350: 1,
                4226: 1,
                4262: 1,
                4268: 1,
                4985: 1,
                5027: 1,
                5933: 1,
                6343: 1,
                6762: 1,
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
            var c = new Promise((n, c) => (s = e[a] = [n, c]));
            n.push((s[2] = c));
            var d = b.p + b.u(a),
              r = new Error();
            b.l(
              d,
              (n) => {
                if (b.o(e, a) && (0 !== (s = e[a]) && (e[a] = void 0), s)) {
                  var c = n && ("load" === n.type ? "missing" : n.type),
                    d = n && n.target && n.target.src;
                  (r.message =
                    "Loading chunk " + a + " failed.\n(" + c + ": " + d + ")"),
                    (r.name = "ChunkLoadError"),
                    (r.type = c),
                    (r.request = d),
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
            c,
            [d, r, i] = n,
            o = 0;
          if (d.some((a) => 0 !== e[a])) {
            for (s in r) b.o(r, s) && (b.m[s] = r[s]);
            if (i) var t = i(b);
          }
          for (a && a(n); o < d.length; o++)
            (c = d[o]), b.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
          return b.O(t);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();

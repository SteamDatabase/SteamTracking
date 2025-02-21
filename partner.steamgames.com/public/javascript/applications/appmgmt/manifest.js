/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "9554746";
(() => {
  "use strict";
  var e,
    a,
    n,
    d,
    s,
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
    (f.O = (a, n, d, s) => {
      if (!n) {
        var c = 1 / 0;
        for (o = 0; o < e.length; o++) {
          for (var [n, d, s] = e[o], r = !0, i = 0; i < n.length; i++)
            (!1 & s || c >= s) && Object.keys(f.O).every((e) => f.O[e](n[i]))
              ? n.splice(i--, 1)
              : ((r = !1), s < c && (c = s));
          if (r) {
            e.splice(o--, 1);
            var b = d();
            void 0 !== b && (a = b);
          }
        }
        return a;
      }
      s = s || 0;
      for (var o = e.length; o > 0 && e[o - 1][2] > s; o--) e[o] = e[o - 1];
      e[o] = [n, d, s];
    }),
    (f.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return f.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (f.t = function (e, d) {
      if ((1 & d && (e = this(e)), 8 & d)) return e;
      if ("object" == typeof e && e) {
        if (4 & d && e.__esModule) return e;
        if (16 & d && "function" == typeof e.then) return e;
      }
      var s = Object.create(null);
      f.r(s);
      var c = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var r = 2 & d && e; "object" == typeof r && !~a.indexOf(r); r = n(r))
        Object.getOwnPropertyNames(r).forEach((a) => (c[a] = () => e[a]));
      return (c.default = () => e), f.d(s, c), s;
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
        67: "2649ae3d2857fb923639",
        144: "1b9237b0fa3cd68282f2",
        316: "3bd4673819e3d13fc6b6",
        407: "28f928578c4242462fb0",
        414: "03b3afe2cff75df7e11b",
        478: "cb075690fa607005bd7c",
        494: "063a897d5ba169bf8c28",
        539: "5cc6d0295a08b21d0b26",
        614: "decdcf98dcecd6a373b2",
        725: "456484fb1371ab209f30",
        809: "52d41e66870269466e3a",
        934: "972c6cc2e7cc76248376",
        976: "7935fccafffb4581f600",
        1048: "6a4685c395dbb11eac9a",
        1065: "81b347c206682a641564",
        1084: "ef29b14988df46a82617",
        1101: "79de9b7e69db97b79f15",
        1134: "01a5116402d3bbce89ac",
        1225: "3bf274afb21a40ef2e68",
        1227: "d294dbf8abc2a9072c7a",
        1337: "f4389bf9a6f50128a4b7",
        1351: "b9ada6f9a3d63d503033",
        1369: "1785a1f9424277a580c8",
        1396: "0d641ee502d5bc12f0b0",
        1449: "9ffef70e83bfdea89d2e",
        1531: "895bc03a37d531802ac8",
        1543: "9eb7fe99dad4d8a2f2d6",
        1606: "fd0beaefe8ef5352ab1f",
        1784: "586c9bdaae198af54af0",
        1810: "22b0653a41b0ead7c771",
        1973: "b04103c00731e6d66276",
        2012: "405f0df7dc1b8096313a",
        2206: "8b850f32d15888703684",
        2256: "42daaf8721579c4a3503",
        2320: "64f6c1c80b5ba31bd3c5",
        2435: "774c3038d67d9801ea42",
        2455: "f326dd518d33f18b6c10",
        2500: "1711fba1bf5c02fcfeba",
        2543: "eaeac397d8a4ad7fec22",
        2632: "35cb9d10facca83b57a9",
        2702: "670fb06afd59fb9c0fcb",
        2708: "29215ecf60cb4fbe31a9",
        2726: "144d51c29cfeed9db741",
        2749: "b33a378cd0eaade97c9c",
        2842: "0d2d98ea67ce5626afce",
        2855: "7c0c7bc91e9dbfba852f",
        2946: "1bd79909bbc650a143a9",
        2954: "ba2eb771d5b08ecfa75e",
        2992: "3f8a70e0f607040037a1",
        2995: "92e6a65851ff85a712c7",
        3025: "ba5d7dc8d30b622de08e",
        3216: "564c7d19d20701b33fa8",
        3266: "ffafb0ce17126903ee3a",
        3350: "053b1a5b0154405bc452",
        3374: "8d2fdb516be633e604eb",
        3436: "d3888fea6b9805a3394a",
        3562: "5bc4be530d34dbdc53aa",
        3569: "86c1f52d58158aaf1f0d",
        3701: "609fa40f704eebae5140",
        3710: "9f0600a2ec6513b3c14b",
        3833: "d99f3ffa3e574803f1b3",
        3872: "d70db11959ace48e4946",
        3912: "fef2817b3b9126345c0e",
        3940: "756e9b6d7a469be688cb",
        4153: "c599e8efdf7cb461b0ff",
        4160: "619fde77a5e96fb011be",
        4182: "4a6354a93be1e96f49ea",
        4226: "819c6a6883f8feaa67e8",
        4262: "d34414ea8b31503ab798",
        4268: "c8e153b2c26eaadde838",
        4298: "b286164abd82e6981b0d",
        4372: "cfc97b3d453eeaafa8c6",
        4419: "b43a0b53c8bf8e50e008",
        4440: "4956348da0e8b74b23c9",
        4893: "609c0637bbc837eda12e",
        4917: "236050c6546c7652caa9",
        4985: "740c95e7c837bef40488",
        5018: "0dd9f31c731abc153415",
        5027: "8785a73df8e5dd468157",
        5110: "1fa48ad935d0f37d7f38",
        5136: "ab57f0b05a572319d920",
        5183: "c75de346f425519e7f21",
        5193: "9d9a7b51db0766defd89",
        5231: "cfc9f582e7fc44c1c962",
        5232: "3ef9882049f5e71b36ab",
        5240: "99a612ac03e8fc4b1ed8",
        5241: "3cf2f7c9fb2cada82bf9",
        5484: "1f3396564c617f2a158b",
        5605: "404465735928f9229fe8",
        5791: "3a4a41b6619da86de309",
        5841: "a128b8db3f9c32f5c93a",
        5933: "e3a30d1ac129b9d7b4b1",
        6031: "b9cff9bebcf1ccc26a27",
        6060: "6a13b45c94d48e39f943",
        6103: "21ac1cbc73640eda6d03",
        6149: "c3641bcf527da5a2acf0",
        6159: "dcd2f8c0a37f902c0a9c",
        6165: "1cf91335388aaf2e9d5b",
        6208: "4294114ba755bb03f091",
        6209: "6f1acf144d67994ccd82",
        6224: "07dfb387871373a1bec1",
        6236: "8af882abd48cb7e9c1fd",
        6239: "aedb097ec518140d7372",
        6343: "4771907769dda3440f09",
        6383: "806d30b66e1833d3945f",
        6403: "a0cae94439dfd82dc34f",
        6459: "cd8f1dced645e845a319",
        6523: "e4fcea2105604378c813",
        6542: "03989cddedf4afcf7a39",
        6562: "e969ae3297f4acd3a6c1",
        6589: "92f75d01a6b759dd77ab",
        6672: "57adf4e6a80c194fc71c",
        6700: "df86700205540341008d",
        6716: "830932a38d1fca0ebaf4",
        6728: "55842697f73aabb50568",
        6759: "84b4e7cf4ee049f750eb",
        6762: "05dfe05f6b6485a408fe",
        6845: "b5525198b97ff4121063",
        6948: "94c753b7224c34baabac",
        6966: "fd430084bdbac1e82f17",
        6979: "b075bb84cc03bdfe6935",
        6995: "4edad5025ed4b1a8e9fa",
        7064: "c8dc074d3a43bdf04d4e",
        7224: "0b6316ab0fc3a32b2a48",
        7352: "e31325631f34d6566cab",
        7383: "1cae9bcfe6993c6080d6",
        7439: "67941e1490c1fb1e6be8",
        7539: "22cbd4599610d08b18c3",
        7591: "b01cf40fa635a04a808c",
        7625: "ba00ac81e4d52f22f9f6",
        7631: "f1027a344e8d7f5686f3",
        7633: "b1ad88be001bcd38b975",
        7681: "dde5c875c68caf8e336b",
        7786: "7ee8ff23653f90bb18d4",
        7796: "36acc638fcfca6071784",
        7798: "46f7ec9cf454139e58a2",
        7926: "0513ad2385f92353386e",
        8025: "902ec77b3e72ab49a0e4",
        8129: "9fac25a6533c2d8a81b0",
        8306: "a392f795bd1a22088d67",
        8350: "02f87f886bbac094b7a5",
        8396: "af6367d3519059c81866",
        8523: "02b261168380566a64b5",
        8585: "1caa291fc8f363590cfa",
        8713: "004643994f8fe22b3ee7",
        8718: "9098c2b3ee60a6257df5",
        8755: "35aa2a36005090f0732f",
        8758: "0e7e804e23a41c1634d4",
        8787: "8fc5c39fa7f88e4070ac",
        8801: "6805501f4cb972d7f9d1",
        8932: "c990afb349a3ef5e0267",
        8967: "2e34fb73027f1e0b3e5b",
        8995: "806272127ad904778062",
        9001: "4b4c651cd49acc882a1c",
        9017: "983f22650acea6c85e8f",
        9027: "e117dbde3d17ca3eb99b",
        9152: "fe5564664168a89bf00a",
        9188: "d7621d7f85a67ca7437c",
        9207: "d7b3aa06a2be2120b3d7",
        9391: "defe7dd46d100597b571",
        9431: "8191def5b63dfde4b436",
        9566: "8d074c785fb9600ff4da",
        9650: "e870c326f5ab6ef883be",
        9712: "b251b6681262a245f408",
        9730: "c8820485dd5c283dee8a",
        9812: "d5d297cad60dfaeea053",
        9916: "77ee8359660ba63ee891",
        9954: "b6ba619488b180a56109",
        9992: "3c43f78a7ed49bbfd6c4",
      }[e]),
    (f.miniCssF = (e) =>
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
        2012: "2ae869dcb6045356080e",
        2455: "fb303abb7a393972d231",
        2995: "68490a0464a23c4c13fe",
        3025: "8765d34c9db1839ace2c",
        3350: "400873b9a423ed5b4a84",
        4226: "f355e2c45b0604a5b7f2",
        4262: "61877d984bfcf3e7f40f",
        4268: "8e98eb7828366141b095",
        4985: "edeef71b8baf55102fb0",
        5027: "1fcd164301cfa418de18",
        5933: "8ec1ec891797b8779296",
        6343: "1603047f79d597876269",
        6762: "a74526b65f273488f71b",
        7383: "7d397c627b354e1a49cf",
        8350: "4bc9f6a79f92d980f6a6",
        8396: "05649b9eccdecdb9c269",
        8523: "35281b1c5a456b468d8e",
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
    (d = {}),
    (s = "appmgmt-storeadmin:"),
    (f.l = (e, a, n, c) => {
      if (d[e]) d[e].push(a);
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
              t.getAttribute("data-webpack") == s + n
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
          r.setAttribute("data-webpack", s + n),
          (r.src = e)),
          (d[e] = [a]);
        var l = (a, n) => {
            (r.onerror = r.onload = null), clearTimeout(h);
            var s = d[e];
            if (
              (delete d[e],
              r.parentNode && r.parentNode.removeChild(r),
              s && s.forEach((e) => e(n)),
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
              var d = f.miniCssF(e),
                s = f.p + d;
              if (
                ((e, a) => {
                  for (
                    var n = document.getElementsByTagName("link"), d = 0;
                    d < n.length;
                    d++
                  ) {
                    var s =
                      (r = n[d]).getAttribute("data-href") ||
                      r.getAttribute("href");
                    if ("stylesheet" === r.rel && (s === e || s === a))
                      return r;
                  }
                  var c = document.getElementsByTagName("style");
                  for (d = 0; d < c.length; d++) {
                    var r;
                    if (
                      (s = (r = c[d]).getAttribute("data-href")) === e ||
                      s === a
                    )
                      return r;
                  }
                })(d, s)
              )
                return a();
              ((e, a, n, d, s) => {
                var c = document.createElement("link");
                (c.rel = "stylesheet"),
                  (c.type = "text/css"),
                  (c.onerror = c.onload =
                    (n) => {
                      if (((c.onerror = c.onload = null), "load" === n.type))
                        d();
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
                          s(i);
                      }
                    }),
                  (c.href = a),
                  n
                    ? n.parentNode.insertBefore(c, n.nextSibling)
                    : document.head.appendChild(c);
              })(e, s, null, a, n);
            }),
          a = { 4556: 0 };
        f.f.miniCss = (n, d) => {
          a[n]
            ? d.push(a[n])
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
              d.push(
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
        var d = f.o(e, a) ? e[a] : void 0;
        if (0 !== d)
          if (d) n.push(d[2]);
          else if (4556 != a) {
            var s = new Promise((n, s) => (d = e[a] = [n, s]));
            n.push((d[2] = s));
            var c = f.p + f.u(a),
              r = new Error();
            f.l(
              c,
              (n) => {
                if (f.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                  var s = n && ("load" === n.type ? "missing" : n.type),
                    c = n && n.target && n.target.src;
                  (r.message =
                    "Loading chunk " + a + " failed.\n(" + s + ": " + c + ")"),
                    (r.name = "ChunkLoadError"),
                    (r.type = s),
                    (r.request = c),
                    d[1](r);
                }
              },
              "chunk-" + a,
              a,
            );
          } else e[a] = 0;
      }),
        (f.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var d,
            s,
            [c, r, i] = n,
            b = 0;
          if (c.some((a) => 0 !== e[a])) {
            for (d in r) f.o(r, d) && (f.m[d] = r[d]);
            if (i) var o = i(f);
          }
          for (a && a(n); b < c.length; b++)
            (s = c[b]), f.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
          return f.O(o);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();

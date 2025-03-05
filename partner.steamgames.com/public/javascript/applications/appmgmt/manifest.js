/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "9582890";
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
        67: "be3ed2b8dedfd12002e8",
        144: "a93d0ea0943cf570e548",
        316: "3bd4673819e3d13fc6b6",
        407: "20c3f171ed7e0fa7043f",
        414: "03b3afe2cff75df7e11b",
        478: "cb075690fa607005bd7c",
        494: "063a897d5ba169bf8c28",
        539: "4b33003c1071f20ca011",
        614: "decdcf98dcecd6a373b2",
        725: "456484fb1371ab209f30",
        809: "62c1ec2d415f678cf818",
        934: "972c6cc2e7cc76248376",
        976: "fbdc806a7ca20f19bb99",
        1048: "6a4685c395dbb11eac9a",
        1065: "81b347c206682a641564",
        1084: "94fad71ea90d3bccf2ba",
        1101: "b05fd7de192ace61a4e5",
        1134: "f239215f9b461c7634da",
        1225: "0b098ebb3eb31dc3651e",
        1227: "d294dbf8abc2a9072c7a",
        1337: "e6ae7039990bfc295d1d",
        1351: "b9ada6f9a3d63d503033",
        1369: "b0927d2595d841b57070",
        1396: "0d641ee502d5bc12f0b0",
        1449: "8a106bc5e17a9385f921",
        1531: "2616611191f959ee8b46",
        1543: "9eb7fe99dad4d8a2f2d6",
        1606: "42bf0ae5f7b04fb03b1a",
        1784: "586c9bdaae198af54af0",
        1810: "22b0653a41b0ead7c771",
        1973: "0cb610cc2f882ffe152a",
        2012: "89e9499821f36babb76f",
        2206: "8b850f32d15888703684",
        2256: "1f58a19eb569c1a2a55a",
        2320: "b6cb858719a68c7bbc04",
        2435: "65139c98e5b872686e27",
        2455: "5c603d5a17bd1731b73e",
        2500: "91849d3c782f3f8f6a76",
        2543: "7d82eece54dceb5cfdb8",
        2632: "12f2f3cb45170a01fa77",
        2702: "627aab52a801d6e1baff",
        2708: "3ca21268cf40fabe3152",
        2726: "144d51c29cfeed9db741",
        2749: "836d2e06c3ca26ed77c0",
        2842: "0d2d98ea67ce5626afce",
        2855: "7c0c7bc91e9dbfba852f",
        2946: "1bd79909bbc650a143a9",
        2954: "10936bac234ea9978ac9",
        2992: "3f8a70e0f607040037a1",
        2995: "92e6a65851ff85a712c7",
        3025: "cf64ee5f5d4e1bdc2428",
        3216: "564c7d19d20701b33fa8",
        3266: "62921aa37dc4d8b43935",
        3350: "255f8471d0c88882dfaf",
        3374: "53e1c0cdecbfb563db5b",
        3436: "e113d344729bf444c5d7",
        3562: "5bc4be530d34dbdc53aa",
        3569: "86c1f52d58158aaf1f0d",
        3701: "66bd013894a9cc483526",
        3710: "9f0600a2ec6513b3c14b",
        3833: "d99f3ffa3e574803f1b3",
        3872: "d70db11959ace48e4946",
        3912: "fef2817b3b9126345c0e",
        3940: "337b268e5cca5dbe7554",
        4153: "2eb6e477855f36ea02ca",
        4160: "619fde77a5e96fb011be",
        4182: "4a6354a93be1e96f49ea",
        4226: "819c6a6883f8feaa67e8",
        4262: "d34414ea8b31503ab798",
        4268: "067868733dff96f18118",
        4298: "b286164abd82e6981b0d",
        4372: "cfc97b3d453eeaafa8c6",
        4419: "0cfde607c1f622e0b66d",
        4440: "edab99b8368015bbb5ec",
        4893: "565028d14c63503d8b58",
        4917: "7fdc50d89bbf790a537a",
        4985: "34fcf2a82bc1cdc81730",
        5018: "8c155ddff3aa175b0ed1",
        5027: "8785a73df8e5dd468157",
        5110: "41ef5c73a15caefaba18",
        5136: "ab57f0b05a572319d920",
        5183: "c75de346f425519e7f21",
        5193: "6d0da3036cd2f7144faa",
        5231: "cfc9f582e7fc44c1c962",
        5232: "3ef9882049f5e71b36ab",
        5240: "99a612ac03e8fc4b1ed8",
        5241: "babe81385512155de7a8",
        5484: "ef4ed0e456ce96cc7752",
        5605: "404465735928f9229fe8",
        5791: "3a4a41b6619da86de309",
        5841: "5171e1390feb704849cc",
        5933: "2ecb5c1a60aea25a1d6c",
        6031: "a72e1d0f39fa73b79288",
        6060: "6a13b45c94d48e39f943",
        6103: "21ac1cbc73640eda6d03",
        6149: "694a4b35db8b8ef84ffb",
        6159: "852e459db1c39288ff8f",
        6165: "de40265b71789eb32d0c",
        6208: "82c7c6ed30bef200e30f",
        6209: "6f1acf144d67994ccd82",
        6224: "07dfb387871373a1bec1",
        6236: "61e48280b8332b4e50b6",
        6239: "eec8acd577a48a3faccf",
        6343: "4771907769dda3440f09",
        6383: "806d30b66e1833d3945f",
        6403: "a0cae94439dfd82dc34f",
        6459: "cd8f1dced645e845a319",
        6523: "791a48c4a6e18731177b",
        6542: "0298e344b8e86fe0210f",
        6562: "74425932719d995c5c0b",
        6589: "6b12945b3860b5d387bf",
        6672: "57adf4e6a80c194fc71c",
        6700: "df86700205540341008d",
        6716: "830932a38d1fca0ebaf4",
        6728: "55842697f73aabb50568",
        6759: "84b4e7cf4ee049f750eb",
        6762: "05dfe05f6b6485a408fe",
        6845: "b5525198b97ff4121063",
        6948: "6b7ad7c6873bae103c21",
        6966: "fd430084bdbac1e82f17",
        6979: "612f411b5b1795cb2489",
        6995: "c18faf8a217767deff4e",
        7064: "c8dc074d3a43bdf04d4e",
        7224: "a99668e706d11e41f9de",
        7352: "59ad38d27c1d138f455c",
        7383: "1cae9bcfe6993c6080d6",
        7439: "67941e1490c1fb1e6be8",
        7539: "3d2f733f3fa1cf654e6d",
        7591: "16d6bf7a2105bce17dcb",
        7625: "2484eff20805fb0d60d2",
        7631: "f1027a344e8d7f5686f3",
        7633: "b1ad88be001bcd38b975",
        7681: "dde5c875c68caf8e336b",
        7786: "0ce9081f31a82473a338",
        7796: "5c9c2a99867d26f539db",
        7798: "b09e31e3977004424ea3",
        7926: "d0b26cb62c7a7bb7c488",
        8025: "33165cd6858a1cf4c771",
        8129: "9fac25a6533c2d8a81b0",
        8306: "f949125a7d68ceb6506c",
        8350: "201d02b1e42f3515b37e",
        8396: "af6367d3519059c81866",
        8523: "1908a1ecff884f29b3dd",
        8585: "1caa291fc8f363590cfa",
        8713: "004643994f8fe22b3ee7",
        8718: "669d41fe7c57a28f2fd2",
        8755: "6ba0a761a2159d76c6df",
        8758: "4776c87a0087dd6b80e6",
        8787: "8fc5c39fa7f88e4070ac",
        8801: "6805501f4cb972d7f9d1",
        8932: "9ccfa419849c1696fd16",
        8967: "67be06e68eb85c447945",
        8995: "806272127ad904778062",
        9001: "c8dc8498a58bc4db18a9",
        9017: "0b9c664bf1fe70668f69",
        9027: "e117dbde3d17ca3eb99b",
        9152: "c2d7984e9ccd4f996adb",
        9188: "216fd31782d3c23a9ce9",
        9207: "e4a6ec64a92fb899b935",
        9391: "defe7dd46d100597b571",
        9431: "41b75ee1e6c00665732f",
        9566: "1cc099234a4214e8dca0",
        9650: "e870c326f5ab6ef883be",
        9712: "5c07148aa80ed32644ee",
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
        2455: "1ce45192321f6d507049",
        2995: "68490a0464a23c4c13fe",
        3025: "eb3618e55422d14c49b2",
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
        8350: "08c28287f20bba8fc9c8",
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

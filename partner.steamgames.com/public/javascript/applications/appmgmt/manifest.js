/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "9650145";
(() => {
  "use strict";
  var e,
    a,
    n,
    s,
    c,
    d = {},
    r = {};
  function i(e) {
    var a = r[e];
    if (void 0 !== a) return a.exports;
    var n = (r[e] = { id: e, loaded: !1, exports: {} });
    return d[e].call(n.exports, n, n.exports, i), (n.loaded = !0), n.exports;
  }
  (i.m = d),
    (e = []),
    (i.O = (a, n, s, c) => {
      if (!n) {
        var d = 1 / 0;
        for (f = 0; f < e.length; f++) {
          for (var [n, s, c] = e[f], r = !0, b = 0; b < n.length; b++)
            (!1 & c || d >= c) && Object.keys(i.O).every((e) => i.O[e](n[b]))
              ? n.splice(b--, 1)
              : ((r = !1), c < d && (d = c));
          if (r) {
            e.splice(f--, 1);
            var o = s();
            void 0 !== o && (a = o);
          }
        }
        return a;
      }
      c = c || 0;
      for (var f = e.length; f > 0 && e[f - 1][2] > c; f--) e[f] = e[f - 1];
      e[f] = [n, s, c];
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
      var c = Object.create(null);
      i.r(c);
      var d = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var r = 2 & s && e; "object" == typeof r && !~a.indexOf(r); r = n(r))
        Object.getOwnPropertyNames(r).forEach((a) => (d[a] = () => e[a]));
      return (d.default = () => e), i.d(c, d), c;
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
        67: "f1106f1bc1c69a9d8139",
        144: "fce0f64640def580bfe1",
        316: "3bd4673819e3d13fc6b6",
        407: "9e32450af6d038480044",
        414: "03b3afe2cff75df7e11b",
        478: "44871ac87318564344eb",
        494: "063a897d5ba169bf8c28",
        539: "366f721b09542c78eb43",
        614: "6edca4f3f69e02ce74b0",
        725: "08c16a131ebb6ad05e9b",
        809: "56a19fbccd29ccda7460",
        934: "972c6cc2e7cc76248376",
        976: "b2fb39410ad34a977ad7",
        1048: "6a4685c395dbb11eac9a",
        1065: "81cca1cc153a148f0557",
        1084: "94fad71ea90d3bccf2ba",
        1101: "2a4271152be18b15fa0e",
        1134: "f239215f9b461c7634da",
        1225: "84095947d7bb50b26ffc",
        1227: "d294dbf8abc2a9072c7a",
        1337: "847d8d8c3c79dec80fc4",
        1351: "b9ada6f9a3d63d503033",
        1369: "6ef8a62c06cfb2029953",
        1396: "0d641ee502d5bc12f0b0",
        1449: "e4804802908944d55895",
        1531: "8a40b81ad0b098c2b3f6",
        1543: "9eb7fe99dad4d8a2f2d6",
        1606: "c38d34837075646d09e5",
        1784: "586c9bdaae198af54af0",
        1810: "39d021823418a294399e",
        1973: "c0e96d09cfc588eeedbd",
        2012: "78f910e0c5d59ac9f5a0",
        2206: "74d02d05e896356c9419",
        2256: "78580632f12f352c9775",
        2320: "a4c35841140c31e7b4cf",
        2435: "3c76ffef4dd48958d65c",
        2455: "d705f00230e07cd7f778",
        2500: "ac90b190c1a814d932bb",
        2543: "24bcac1dfaa31432fba0",
        2632: "42b22161a4cab1ef7238",
        2702: "1aa79a34cccb43821550",
        2708: "ce07785205c23b68ee27",
        2726: "ccb42974ef7e09bb44e3",
        2749: "3c37bb6f02fe38ceaa57",
        2842: "0d2d98ea67ce5626afce",
        2855: "7371d954a30656eb69db",
        2946: "1bd79909bbc650a143a9",
        2954: "4f9ba169440c0b4dfb96",
        2992: "3f8a70e0f607040037a1",
        2995: "3b8a1409ddac8e7f0ad7",
        3025: "7ff8c3dbde99ed324ade",
        3216: "564c7d19d20701b33fa8",
        3266: "5536b22fde71ee8bd3b6",
        3350: "13af29b5e7af544214ba",
        3374: "e7e9d98e3aeaf71f2f46",
        3436: "5050e78cd773fb65997c",
        3562: "5bc4be530d34dbdc53aa",
        3569: "86c1f52d58158aaf1f0d",
        3701: "c66b2a747589f0245fc1",
        3710: "9f0600a2ec6513b3c14b",
        3833: "864917475b43ceb307cf",
        3872: "5a6cfe6bc4671f62e610",
        3912: "265e0ba6d53356b7e2ae",
        3940: "bd10edea940c01d2599c",
        4153: "8eaa94d6b566daaa6d98",
        4160: "619fde77a5e96fb011be",
        4182: "4a6354a93be1e96f49ea",
        4226: "819c6a6883f8feaa67e8",
        4262: "d34414ea8b31503ab798",
        4268: "b1272afcb2a3855cd73c",
        4298: "e1f41a3c2ba8196a13ae",
        4372: "cfc97b3d453eeaafa8c6",
        4419: "80c08fd1af6ae8816032",
        4440: "efdb5d8d582dd0361086",
        4893: "c97f6f727c80e0e22749",
        4917: "a14ba88770cf68146386",
        4985: "3cdce404f2042914bdb0",
        5018: "ab53a0195f2cd0dd30eb",
        5027: "bc0374708322b530ea0f",
        5110: "bcc5cc5f0b5425c99eed",
        5136: "ab57f0b05a572319d920",
        5183: "c75de346f425519e7f21",
        5193: "6d0da3036cd2f7144faa",
        5231: "a64ada0bf02f2cbbf06d",
        5232: "3ef9882049f5e71b36ab",
        5240: "99a612ac03e8fc4b1ed8",
        5241: "68c4a26b7004d0a2b8a2",
        5484: "be97cd6a10e7a7dee1c9",
        5605: "404465735928f9229fe8",
        5791: "3a4a41b6619da86de309",
        5841: "1a9675ca652ec52fc442",
        5933: "252b2a66e393b1d962bd",
        6031: "61a96d1c3d3b5260d646",
        6103: "21ac1cbc73640eda6d03",
        6149: "8a3033e2fe70b42f21fa",
        6159: "5d854252587152583c97",
        6165: "cecb74974c016c15f38e",
        6208: "68c87aac131d7a43fa17",
        6209: "6f1acf144d67994ccd82",
        6224: "07dfb387871373a1bec1",
        6236: "ff596bc2e9e17380935c",
        6239: "73d215eb8b3ef2c3d5f3",
        6343: "c6062bafd8dd644f1212",
        6383: "806d30b66e1833d3945f",
        6403: "a0cae94439dfd82dc34f",
        6459: "cd8f1dced645e845a319",
        6523: "706d229c7f6a81e5e1ff",
        6542: "0298e344b8e86fe0210f",
        6562: "a687c621821bb8bf96ad",
        6589: "b4c389c2e438fac1a84f",
        6672: "3b3619d1a7f9a22b69f8",
        6700: "0f982b0633f99612b512",
        6716: "830932a38d1fca0ebaf4",
        6728: "3417871d821b1e4094da",
        6759: "a37cc6d895f904d3bda6",
        6762: "f4b6b7386f3d8d3bec4f",
        6845: "b1ff5a603d6ba29b1d89",
        6948: "52118562682c3f88938c",
        6966: "fd430084bdbac1e82f17",
        6979: "0d88d3c3a817f5a53dcb",
        6995: "c18faf8a217767deff4e",
        7064: "0594449eebc732ecff0f",
        7224: "904d8b8cec1674df777c",
        7352: "cbdd0e4edff42f77060d",
        7383: "1cae9bcfe6993c6080d6",
        7439: "d5e6f3dd5612798211a4",
        7539: "eaa089a5e8e4d761113b",
        7591: "09ef0900a0a0516d3616",
        7625: "17e9fd72b76e56c7729a",
        7631: "f1027a344e8d7f5686f3",
        7633: "b1ad88be001bcd38b975",
        7681: "dde5c875c68caf8e336b",
        7786: "5b636d793a7832e3f2ee",
        7796: "8a263e812e2ed1d8feee",
        7798: "eb332b3f948f50d96e94",
        7926: "469b2da6a8bd45728239",
        8025: "c0f993fcc7beb8fe1df4",
        8129: "fb23dd538ce8caf5c6e5",
        8306: "1c81687163186e38044d",
        8350: "02d0b6e87517c5688184",
        8396: "4d19cb916eb538085bb0",
        8523: "42fbf2359736ebcc54a3",
        8585: "3d2d5eab3cfe06f7f5cf",
        8713: "004643994f8fe22b3ee7",
        8718: "214774e4247574861bab",
        8755: "d0311336bc841c101839",
        8758: "8f0045acfdc45108f086",
        8787: "8fc5c39fa7f88e4070ac",
        8801: "6805501f4cb972d7f9d1",
        8932: "9ccfa419849c1696fd16",
        8967: "7ec8d2eaff1885658965",
        8995: "d5049a7a761afded03a5",
        9001: "c8dc8498a58bc4db18a9",
        9017: "e406206f8f6b907659b1",
        9027: "e117dbde3d17ca3eb99b",
        9152: "7527503bcd81b85350fe",
        9188: "2399503ed9b790387b54",
        9207: "07f473eedf1d14465a01",
        9391: "049829785cd077a287ca",
        9431: "32f6c0b3ea98370a75cb",
        9566: "e83bc49fd36e5ec2b3a0",
        9650: "3fa6c468d9294a717b77",
        9712: "beb2a7dcfc23f8db0d4f",
        9730: "6ad6993ea85a1e39030e",
        9812: "d5d297cad60dfaeea053",
        9916: "49d9f363589e6d848f4e",
        9954: "565ff28ac841bae5a938",
        9992: "3c43f78a7ed49bbfd6c4",
      }[e]),
    (i.miniCssF = (e) =>
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
        1101: "e31d45dcf2a0732e433e",
        1810: "950d1a8e1e8cb524ff25",
        2012: "dac24de8244d5cda7bdf",
        2455: "2dee4af3406dfc5d83e2",
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
        6762: "4403208955cada6d1309",
        7383: "7d397c627b354e1a49cf",
        8350: "abdb851a5c9dcc0f3e28",
        8396: "05649b9eccdecdb9c269",
        8523: "77aa40813a05fd484beb",
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
    (c = "appmgmt-storeadmin:"),
    (i.l = (e, a, n, d) => {
      if (s[e]) s[e].push(a);
      else {
        var r, b;
        if (void 0 !== n)
          for (
            var o = document.getElementsByTagName("script"), f = 0;
            f < o.length;
            f++
          ) {
            var t = o[f];
            if (
              t.getAttribute("src") == e ||
              t.getAttribute("data-webpack") == c + n
            ) {
              r = t;
              break;
            }
          }
        r ||
          ((b = !0),
          ((r = document.createElement("script")).charset = "utf-8"),
          (r.timeout = 120),
          i.nc && r.setAttribute("nonce", i.nc),
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
          b && document.head.appendChild(r);
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
                c = i.p + s;
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
                          i = (n && n.target && n.target.href) || a,
                          b = new Error(
                            "Loading CSS chunk " +
                              e +
                              " failed.\n(" +
                              r +
                              ": " +
                              i +
                              ")",
                          );
                        (b.name = "ChunkLoadError"),
                          (b.code = "CSS_CHUNK_LOAD_FAILED"),
                          (b.type = r),
                          (b.request = i),
                          d.parentNode && d.parentNode.removeChild(d),
                          c(b);
                      }
                    }),
                  (d.href = a),
                  n
                    ? n.parentNode.insertBefore(d, n.nextSibling)
                    : document.head.appendChild(d);
              })(e, c, null, a, n);
            }),
          a = { 4556: 0 };
        i.f.miniCss = (n, s) => {
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
      (i.f.j = (a, n) => {
        var s = i.o(e, a) ? e[a] : void 0;
        if (0 !== s)
          if (s) n.push(s[2]);
          else if (4556 != a) {
            var c = new Promise((n, c) => (s = e[a] = [n, c]));
            n.push((s[2] = c));
            var d = i.p + i.u(a),
              r = new Error();
            i.l(
              d,
              (n) => {
                if (i.o(e, a) && (0 !== (s = e[a]) && (e[a] = void 0), s)) {
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
        (i.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var s,
            c,
            [d, r, b] = n,
            o = 0;
          if (d.some((a) => 0 !== e[a])) {
            for (s in r) i.o(r, s) && (i.m[s] = r[s]);
            if (b) var f = b(i);
          }
          for (a && a(n); o < d.length; o++)
            (c = d[o]), i.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
          return i.O(f);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();

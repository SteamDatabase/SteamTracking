/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "9336347";
(() => {
  "use strict";
  var a,
    e,
    n,
    c,
    o,
    i = {},
    d = {};
  function s(a) {
    var e = d[a];
    if (void 0 !== e) return e.exports;
    var n = (d[a] = { id: a, loaded: !1, exports: {} });
    return i[a].call(n.exports, n, n.exports, s), (n.loaded = !0), n.exports;
  }
  (s.m = i),
    (s.amdO = {}),
    (a = []),
    (s.O = (e, n, c, o) => {
      if (!n) {
        var i = 1 / 0;
        for (f = 0; f < a.length; f++) {
          for (var [n, c, o] = a[f], d = !0, l = 0; l < n.length; l++)
            (!1 & o || i >= o) && Object.keys(s.O).every((a) => s.O[a](n[l]))
              ? n.splice(l--, 1)
              : ((d = !1), o < i && (i = o));
          if (d) {
            a.splice(f--, 1);
            var t = c();
            void 0 !== t && (e = t);
          }
        }
        return e;
      }
      o = o || 0;
      for (var f = a.length; f > 0 && a[f - 1][2] > o; f--) a[f] = a[f - 1];
      a[f] = [n, c, o];
    }),
    (s.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return s.d(e, { a: e }), e;
    }),
    (n = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (s.t = function (a, c) {
      if ((1 & c && (a = this(a)), 8 & c)) return a;
      if ("object" == typeof a && a) {
        if (4 & c && a.__esModule) return a;
        if (16 & c && "function" == typeof a.then) return a;
      }
      var o = Object.create(null);
      s.r(o);
      var i = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var d = 2 & c && a; "object" == typeof d && !~e.indexOf(d); d = n(d))
        Object.getOwnPropertyNames(d).forEach((e) => (i[e] = () => a[e]));
      return (i.default = () => a), s.d(o, i), o;
    }),
    (s.d = (a, e) => {
      for (var n in e)
        s.o(e, n) &&
          !s.o(a, n) &&
          Object.defineProperty(a, n, { enumerable: !0, get: e[n] });
    }),
    (s.f = {}),
    (s.e = (a) =>
      Promise.all(Object.keys(s.f).reduce((e, n) => (s.f[n](a, e), e), []))),
    (s.u = (a) =>
      "javascript/applications/community/" +
      ({
        60: "localization/main_spanish-json",
        91: "libraries~362728d1f",
        129: "localization/shared_swedish-json",
        139: "localization/shared_koreana-json",
        198: "localization/main_schinese-json",
        231: "libraries~4f371177a",
        258: "eventinternal",
        286: "localization/main_ukrainian-json",
        297: "localization/sales_german-json",
        537: "localization/sales_brazilian-json",
        657: "chunk~03410565e",
        759: "localization/main_koreana-json",
        823: "localization/shared_portuguese-json",
        831: "localization/main_danish-json",
        833: "localization/main_vietnamese-json",
        926: "localization/sales_danish-json",
        976: "greenenvelope",
        1023: "chunk~25d238eb8",
        1063: "chunk~db7679d00",
        1220: "gamenotes",
        1389: "localization/shared_japanese-json",
        1410: "localization/sales_portuguese-json",
        1423: "localization/shared_czech-json",
        1551: "libraries~9dbf41906",
        1721: "localization/shared_arabic-json",
        1724: "localization/main_turkish-json",
        1783: "localization/sales_italian-json",
        1880: "localization/sales_czech-json",
        1951: "localization/sales_spanish-json",
        2021: "localization/shared_romanian-json",
        2079: "broadcasts",
        2092: "communityhomeheader",
        2121: "chunk~4e3b43bb2",
        2199: "localization/shared_finnish-json",
        2446: "localization/main_brazilian-json",
        2481: "localization/shared_bulgarian-json",
        2588: "localization/sales_finnish-json",
        2664: "localization/shared_english-json",
        2694: "chunk~52ce742d4",
        2744: "localization/sales_latam-json",
        2780: "localization/sales_sc_schinese-json",
        2959: "localization/shared_polish-json",
        2974: "chunk~906a41d8e",
        3140: "localization/main_greek-json",
        3156: "gr",
        3256: "chunk~7a7b104fb",
        3589: "localization/main_bulgarian-json",
        3594: "localization/shared_brazilian-json",
        3781: "communityfaqs",
        3867: "localization/main_polish-json",
        3976: "localization/sales_vietnamese-json",
        4009: "localization/sales_thai-json",
        4055: "localization/sales_norwegian-json",
        4072: "chunk~1d39298d0",
        4102: "localization/main_indonesian-json",
        4268: "events",
        4278: "localization/sales_hungarian-json",
        4317: "chunk~c7a3fa389",
        4694: "localization/main_french-json",
        4922: "libraries~9714d9815",
        4952: "localization/shared_thai-json",
        5043: "localization/sales_schinese-json",
        5052: "localization/main_english-json",
        5082: "libraries~eb698e092",
        5103: "localization/main_sc_schinese-json",
        5184: "localization/sales_koreana-json",
        5263: "chunk~4b330692b",
        5278: "avatarcrop",
        5366: "localization/sales_russian-json",
        5388: "localization/main_norwegian-json",
        5553: "localization/shared_tchinese-json",
        5633: "libraries~4b330692b",
        5651: "localization/sales_greek-json",
        5801: "chunk~2d6f640d9",
        5803: "localization/shared_latam-json",
        5836: "qanda",
        5876: "games",
        5955: "chunk~af55cc5d1",
        6120: "localization/shared_norwegian-json",
        6428: "localization/main_italian-json",
        6430: "localization/shared_dutch-json",
        6466: "localization/sales_bulgarian-json",
        6472: "localization/shared_turkish-json",
        6528: "localization/sales_tchinese-json",
        6577: "localization/shared_russian-json",
        6635: "chunk~f036ce556",
        6662: "eventeditor",
        6752: "localization/shared_spanish-json",
        6888: "localization/shared_german-json",
        6893: "notifications",
        6966: "login",
        7055: "libraries~69438e232",
        7097: "localization/sales_ukrainian-json",
        7121: "chunk~d6e1df551",
        7326: "localization/sales_swedish-json",
        7345: "localization/main_hungarian-json",
        7442: "localization/shared_schinese-json",
        7553: "localization/main_romanian-json",
        7561: "communityawardsapp",
        7634: "chunk~8f4f68fd6",
        7639: "localization/sales_french-json",
        7696: "localization/shared_italian-json",
        7724: "localization/main_thai-json",
        7872: "libraries~c18a43282",
        7958: "localization/sales_polish-json",
        8021: "localization/main_russian-json",
        8064: "localization/sales_japanese-json",
        8138: "profile",
        8239: "localization/sales_turkish-json",
        8291: "localization/shared_danish-json",
        8396: "broadcast",
        8443: "localization/shared_sc_schinese-json",
        8453: "chunk~8e45aed72",
        8521: "conference",
        8522: "localization/shared_indonesian-json",
        8541: "localization/sales_dutch-json",
        8547: "localization/main_finnish-json",
        8674: "localization/shared_french-json",
        8724: "localization/main_german-json",
        8732: "localization/sales_romanian-json",
        8749: "localization/main_tchinese-json",
        8780: "chunk~b1f9f17fd",
        8872: "localization/shared_greek-json",
        9053: "localization/shared_hungarian-json",
        9118: "chunk~642602239",
        9129: "managefriends",
        9298: "localization/shared_ukrainian-json",
        9367: "localization/sales_indonesian-json",
        9387: "localization/main_portuguese-json",
        9402: "libraries~b1f9f17fd",
        9436: "chunk~0c880f568",
        9453: "localization/main_swedish-json",
        9505: "chunk~d2dd7ecf6",
        9515: "localization/main_czech-json",
        9517: "chunk~d3aa4b017",
        9536: "libraries~642602239",
        9617: "libraries~f036ce556",
        9638: "chunk~c18a43282",
        9743: "localization/sales_english-json",
        9774: "chunk~69438e232",
        9783: "localization/main_latam-json",
        9855: "chunk~a439acb2b",
        9857: "localization/main_japanese-json",
        9869: "localization/shared_vietnamese-json",
        9870: "chunk~b4c312bfa",
        9914: "localization/main_dutch-json",
      }[a] || a) +
      ".js?contenthash=" +
      {
        60: "a435fd989d45ae1e612c",
        91: "8ce86a826dded5f9f2fe",
        129: "438a97e9b0692834010c",
        139: "87b409f9722b1d0f84ae",
        198: "ebfd2aa51269b176c4c7",
        231: "977e692b2e6d3bcb71d4",
        258: "57ddb9b1c18cb562137f",
        286: "688fa02be364fccf6cc6",
        297: "12e5f6ae019d58943b40",
        537: "276f40b767e317245ad4",
        657: "1767031419da42b7246d",
        759: "77b2bb3fc7e4126dbc39",
        823: "ab18fca2dde325c232cb",
        831: "dad33c788b2c4a7dd010",
        833: "09a336a14048ab9b4d5b",
        926: "6c4d436c76a4121b95b6",
        976: "efbea8d75b07afc73f55",
        1023: "a27ab35d678fa0970947",
        1063: "852fc96813d5241cc041",
        1220: "b2894ebf2571eb9e3fcd",
        1389: "5f6d49cbf65c2eaa63dc",
        1410: "9f2ee4f6bbea59ce540c",
        1423: "8722a86dd90eb647dcc6",
        1551: "3dba9f0dfa28e1526aef",
        1721: "dc1616bac9b1fda9d295",
        1724: "d0af9563583acff7b385",
        1783: "3d4683547897dee172b9",
        1880: "aa851da20ddca6a58b4d",
        1951: "864a3575343204d4e505",
        2021: "1424307399ceedd487ce",
        2079: "a96cb969dcb05b919dc6",
        2092: "9e706664c8705de53b85",
        2121: "f42f21abb89b5ff27276",
        2199: "906c04eaa96b9e08c881",
        2446: "a7806cb336abdd60bbbf",
        2481: "52b57c4aab864cdb83f8",
        2588: "fc0c9310f8dcd634531a",
        2664: "b86dc51c2baa5b71c86a",
        2694: "f26c32131ee5a71e040d",
        2744: "3effa60d801d964b3fac",
        2780: "c21703fe588b7d815750",
        2959: "99456b8c1f1f4d1aebe3",
        2974: "33b0b0d98ddf97ccf5af",
        3140: "7a900de659feed3eae15",
        3156: "ffdd2773be9e5ec4fb7f",
        3256: "8cee177784eb35c3c719",
        3589: "3b1004d14739a56c60d0",
        3594: "87d4f8ab665ecc17f9cf",
        3781: "179304693abeabc12d5e",
        3867: "22dec5c070c0a1875dfc",
        3976: "358a3e8a23ed4f553158",
        4009: "7bf7a1a4ca5e82a6bff8",
        4055: "c0d51ebdbcccb52b55fd",
        4072: "7f32b25613fc00fc79a7",
        4102: "c1e3025f059650aca841",
        4268: "2d96f7ba8eeb43794cf9",
        4278: "6263ceb1089b30ecaeec",
        4317: "97a1dd058cba565f4c65",
        4694: "4622454df30b4c2d7511",
        4922: "953a0f2e92fa7c404c03",
        4952: "e6b2abe635e4e5adccdd",
        5043: "e6930f790fb826071c76",
        5052: "8e1a3bcbe6fee43a848a",
        5082: "71a78cf07260718362fc",
        5103: "78b06b4bbe08a7f589de",
        5184: "c36d63ebc5118baf6395",
        5263: "09e94dd038c8501eaa5b",
        5278: "8eca1c7f6b888330ed6d",
        5366: "b9b29483ed0b2d373ea1",
        5388: "46f6202d960f24737f34",
        5553: "3af0c7dc8e2351573575",
        5633: "2ffbf18b870ce77437bb",
        5651: "92ecde4489bbc684e557",
        5801: "92eaf65652b7960a6738",
        5803: "451779a1957ca03ffca2",
        5836: "0737ac9a303ac7176efb",
        5876: "216097acb1db6d633b0c",
        5955: "e3f7fe8be2a08ebcff88",
        6120: "227b9299eda6a01b920f",
        6209: "20f00261e96937e59edd",
        6295: "a139e68e4db080fbd6f6",
        6428: "30833337931be0ff076b",
        6430: "60e55303715ba204d310",
        6466: "165e7bb4eb2dea6a9c03",
        6472: "6eaffffeb34b72810608",
        6528: "95eb7481081563997fe1",
        6577: "8f59e227d39f592950c2",
        6635: "beb12d07f1328bdbacee",
        6662: "413d1903f111874f1e98",
        6752: "5d22b015a502f11ac80f",
        6888: "5c91e3dcbb41e0a9c653",
        6893: "41ce8871251278a919ed",
        6966: "d4044771bf8f29a627b3",
        7055: "c3720357aef05a8b1c2c",
        7097: "d98baaf8c5cbeb24364b",
        7121: "e8de34a4ad83b039c8a8",
        7326: "8ec3a7a37e180c5b2aae",
        7345: "999d90912af066a8684c",
        7442: "552dd43bb4e312a4d179",
        7548: "a6582de0c753caec163f",
        7553: "bafc6eae5178a960f4dd",
        7561: "b6a3d524d2d7d31110cf",
        7634: "b0043b6a2e9854743cc9",
        7639: "26c8f3bdcad84cf5a059",
        7696: "5dae62dfe06b23c6d8e8",
        7724: "e1d400fcd0f1fb6bd849",
        7872: "0351b7502ed8bfee018e",
        7958: "223c8d0c06cd44828b86",
        8021: "9c695272d18fd8f445e6",
        8064: "658b9a40bf55123d7e16",
        8138: "72a59101e19c5f9da6e4",
        8239: "bae2c329b732d83e286e",
        8291: "09b45288e8435f3568c3",
        8396: "4f9f3e6de142eed796e4",
        8443: "25d38da42ceaadae035d",
        8453: "1240171dffb23dcf2a14",
        8521: "55675f9a6cc21fb70175",
        8522: "975263feb4701cb6ef63",
        8541: "016f9ba3ba670aa990f5",
        8547: "463cd4cbf9f2972cce07",
        8674: "71ef4d2c71cf4d51e95c",
        8724: "fd9175229dfdeca4c983",
        8732: "a6d735474407aa081e1b",
        8749: "dcee23f664e232e9e5c7",
        8780: "ab5c876655ac055c785d",
        8872: "4582605de7766b4c65ac",
        9053: "a59003de3bf522841cc5",
        9118: "fb226c04a613afd63c95",
        9129: "6514052cc058168496a1",
        9298: "20ae606aa29e33b5694e",
        9367: "845683fc8c049e8c827f",
        9387: "ed9ca3efec5859614b7c",
        9402: "8d18d84791d390e31061",
        9436: "d39b1552486bed62398e",
        9453: "a930455367c4ad054b62",
        9505: "0beaba5eecd6f429437a",
        9515: "3cc473cd6791f0fc1e49",
        9517: "a97b165ed1dff0472049",
        9536: "b5bfdf3dd4f48bb33eb3",
        9617: "3e5cb211c045c9e969c2",
        9638: "c21376505db3d45a23df",
        9743: "ca9a1e883744b73bccf7",
        9774: "d0b49fa2e5839a377d46",
        9783: "cd074ba6562d3ae11640",
        9855: "e1f6b3470633e916e511",
        9857: "1a8991d9e911eecfad87",
        9869: "db897947f2e1340c845e",
        9870: "f13eb53fd804ee8caad1",
        9914: "8fc25ad26e5dc0f48a0f",
      }[a]),
    (s.miniCssF = (a) =>
      "css/applications/community/" +
      {
        91: "libraries~362728d1f",
        258: "eventinternal",
        976: "greenenvelope",
        1220: "gamenotes",
        2079: "broadcasts",
        2092: "communityhomeheader",
        2694: "chunk~52ce742d4",
        3156: "gr",
        3256: "chunk~7a7b104fb",
        3781: "communityfaqs",
        4268: "events",
        5278: "avatarcrop",
        5836: "qanda",
        5876: "games",
        6635: "chunk~f036ce556",
        6662: "eventeditor",
        6893: "notifications",
        6966: "login",
        7561: "communityawardsapp",
        7634: "chunk~8f4f68fd6",
        8138: "profile",
        8396: "broadcast",
        8521: "conference",
        8780: "chunk~b1f9f17fd",
        9118: "chunk~642602239",
        9129: "managefriends",
        9505: "chunk~d2dd7ecf6",
        9638: "chunk~c18a43282",
        9774: "chunk~69438e232",
      }[a] +
      ".css?contenthash=" +
      {
        91: "7d10e6dfc63b4b955640",
        258: "c82658532a547a6c0b32",
        976: "31af4ce18cebd2b3857f",
        1220: "5a8e4d3172de2b2f5962",
        2079: "22b3b211409461308f1c",
        2092: "54c04a83fb19118665fe",
        2694: "816c6c29940416f316c6",
        3156: "c160c77d91faa9733a30",
        3256: "1a8e226864678862c504",
        3781: "a0d93b248f31e86cf960",
        4268: "558bc776601a931c1489",
        5278: "7ad41ee51bad4c4189d1",
        5836: "012b734f1a7ae3ee2447",
        5876: "07b3cb346c58c180dfe2",
        6635: "0d3d69f2f2bf2c25a2c8",
        6662: "16adc02a61b83373dd9b",
        6893: "b640cecb2ca8794180c2",
        6966: "a66289e969ece5d1faad",
        7561: "789dd1fbdb6c6b5c773d",
        7634: "b0bb35885b4aadc7f103",
        8138: "4eafcd050df39923be33",
        8396: "9fe38f7c04dc6be35a29",
        8521: "e5371bed29326965f77a",
        8780: "ce3c8d7fac7cd8073592",
        9118: "3882e045613436e88f87",
        9129: "e0ae5f099a75f693e3de",
        9505: "61b7e51dcdd3ba9e19fc",
        9638: "481d995ea816aab17942",
        9774: "b7ec8c46f92df25721ec",
      }[a]),
    (s.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (a) {
        if ("object" == typeof window) return window;
      }
    })()),
    (s.o = (a, e) => Object.prototype.hasOwnProperty.call(a, e)),
    (c = {}),
    (o = "community:"),
    (s.l = (a, e, n, i) => {
      if (c[a]) c[a].push(e);
      else {
        var d, l;
        if (void 0 !== n)
          for (
            var t = document.getElementsByTagName("script"), f = 0;
            f < t.length;
            f++
          ) {
            var r = t[f];
            if (
              r.getAttribute("src") == a ||
              r.getAttribute("data-webpack") == o + n
            ) {
              d = r;
              break;
            }
          }
        d ||
          ((l = !0),
          ((d = document.createElement("script")).charset = "utf-8"),
          (d.timeout = 120),
          s.nc && d.setAttribute("nonce", s.nc),
          d.setAttribute("data-webpack", o + n),
          (d.src = a)),
          (c[a] = [e]);
        var b = (e, n) => {
            (d.onerror = d.onload = null), clearTimeout(h);
            var o = c[a];
            if (
              (delete c[a],
              d.parentNode && d.parentNode.removeChild(d),
              o && o.forEach((a) => a(n)),
              e)
            )
              return e(n);
          },
          h = setTimeout(
            b.bind(null, void 0, { type: "timeout", target: d }),
            12e4,
          );
        (d.onerror = b.bind(null, d.onerror)),
          (d.onload = b.bind(null, d.onload)),
          l && document.head.appendChild(d);
      }
    }),
    (s.r = (a) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (s.nmd = (a) => ((a.paths = []), a.children || (a.children = []), a)),
    (s.p = ""),
    (() => {
      if ("undefined" != typeof document) {
        var a = (a) =>
            new Promise((e, n) => {
              var c = s.miniCssF(a),
                o = s.p + c;
              if (
                ((a, e) => {
                  for (
                    var n = document.getElementsByTagName("link"), c = 0;
                    c < n.length;
                    c++
                  ) {
                    var o =
                      (d = n[c]).getAttribute("data-href") ||
                      d.getAttribute("href");
                    if ("stylesheet" === d.rel && (o === a || o === e))
                      return d;
                  }
                  var i = document.getElementsByTagName("style");
                  for (c = 0; c < i.length; c++) {
                    var d;
                    if (
                      (o = (d = i[c]).getAttribute("data-href")) === a ||
                      o === e
                    )
                      return d;
                  }
                })(c, o)
              )
                return e();
              ((a, e, n, c, o) => {
                var i = document.createElement("link");
                (i.rel = "stylesheet"),
                  (i.type = "text/css"),
                  (i.onerror = i.onload =
                    (n) => {
                      if (((i.onerror = i.onload = null), "load" === n.type))
                        c();
                      else {
                        var d = n && n.type,
                          s = (n && n.target && n.target.href) || e,
                          l = new Error(
                            "Loading CSS chunk " +
                              a +
                              " failed.\n(" +
                              d +
                              ": " +
                              s +
                              ")",
                          );
                        (l.name = "ChunkLoadError"),
                          (l.code = "CSS_CHUNK_LOAD_FAILED"),
                          (l.type = d),
                          (l.request = s),
                          i.parentNode && i.parentNode.removeChild(i),
                          o(l);
                      }
                    }),
                  (i.href = e),
                  n
                    ? n.parentNode.insertBefore(i, n.nextSibling)
                    : document.head.appendChild(i);
              })(a, o, null, e, n);
            }),
          e = { 4556: 0 };
        s.f.miniCss = (n, c) => {
          e[n]
            ? c.push(e[n])
            : 0 !== e[n] &&
              {
                91: 1,
                258: 1,
                976: 1,
                1220: 1,
                2079: 1,
                2092: 1,
                2694: 1,
                3156: 1,
                3256: 1,
                3781: 1,
                4268: 1,
                5278: 1,
                5836: 1,
                5876: 1,
                6635: 1,
                6662: 1,
                6893: 1,
                6966: 1,
                7561: 1,
                7634: 1,
                8138: 1,
                8396: 1,
                8521: 1,
                8780: 1,
                9118: 1,
                9129: 1,
                9505: 1,
                9638: 1,
                9774: 1,
              }[n] &&
              c.push(
                (e[n] = a(n).then(
                  () => {
                    e[n] = 0;
                  },
                  (a) => {
                    throw (delete e[n], a);
                  },
                )),
              );
        };
      }
    })(),
    (() => {
      var a = { 4556: 0 };
      (s.f.j = (e, n) => {
        var c = s.o(a, e) ? a[e] : void 0;
        if (0 !== c)
          if (c) n.push(c[2]);
          else if (/^(455|839)6$/.test(e)) a[e] = 0;
          else {
            var o = new Promise((n, o) => (c = a[e] = [n, o]));
            n.push((c[2] = o));
            var i = s.p + s.u(e),
              d = new Error();
            s.l(
              i,
              (n) => {
                if (s.o(a, e) && (0 !== (c = a[e]) && (a[e] = void 0), c)) {
                  var o = n && ("load" === n.type ? "missing" : n.type),
                    i = n && n.target && n.target.src;
                  (d.message =
                    "Loading chunk " + e + " failed.\n(" + o + ": " + i + ")"),
                    (d.name = "ChunkLoadError"),
                    (d.type = o),
                    (d.request = i),
                    c[1](d);
                }
              },
              "chunk-" + e,
              e,
            );
          }
      }),
        (s.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var c,
            o,
            [i, d, l] = n,
            t = 0;
          if (i.some((e) => 0 !== a[e])) {
            for (c in d) s.o(d, c) && (s.m[c] = d[c]);
            if (l) var f = l(s);
          }
          for (e && e(n); t < i.length; t++)
            (o = i[t]), s.o(a, o) && a[o] && a[o][0](), (a[o] = 0);
          return s.O(f);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();

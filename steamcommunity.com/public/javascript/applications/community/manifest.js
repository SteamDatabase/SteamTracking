/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "9282958";
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
        6804: "libraries~db3efe566",
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
        60: "eae289a496b36f075bc6",
        91: "8ce86a826dded5f9f2fe",
        129: "ccb750b316ee5e25a440",
        139: "b56aee2d5ea093a7d79c",
        198: "34302b23ea9e0ed8b7a0",
        231: "2c39c12348091b7af1b9",
        258: "409cc5d4f75e9911394d",
        286: "e87e06c87661ced615b1",
        297: "12e5f6ae019d58943b40",
        537: "276f40b767e317245ad4",
        657: "142b4e3751406be2d486",
        759: "5270930fa3056fc6ac9d",
        823: "dc034130423fe8d98783",
        831: "666b80c7808188cd744c",
        833: "474ec69d95d49edaac62",
        926: "6c4d436c76a4121b95b6",
        976: "efbea8d75b07afc73f55",
        1023: "6dacc8a84ca5a5d766b3",
        1063: "852fc96813d5241cc041",
        1220: "79e449cffd7fa4d3a3dd",
        1389: "0e05c1b4d58fc41412a2",
        1410: "9f2ee4f6bbea59ce540c",
        1423: "80702dd0007d0a972fd6",
        1551: "3dba9f0dfa28e1526aef",
        1721: "dc1616bac9b1fda9d295",
        1724: "9ba98291a1165ef20af5",
        1783: "3d4683547897dee172b9",
        1880: "aa851da20ddca6a58b4d",
        1951: "864a3575343204d4e505",
        2021: "7900cc3d63555c127de9",
        2079: "fb8e78b7edae95c4553f",
        2092: "0d7834020aad2f4de404",
        2121: "f42f21abb89b5ff27276",
        2199: "b9cc09e03aab0e771979",
        2446: "c1ea132b6c3b9748e890",
        2481: "30bf90236aef523a1543",
        2588: "fc0c9310f8dcd634531a",
        2664: "5889c0bcdb107917caa3",
        2694: "f26c32131ee5a71e040d",
        2744: "3effa60d801d964b3fac",
        2780: "c21703fe588b7d815750",
        2959: "fe6022b30a8c60c4382f",
        2974: "33b0b0d98ddf97ccf5af",
        3140: "93f4082338acb05cb7dd",
        3156: "bceac63e341854008ea4",
        3256: "8cee177784eb35c3c719",
        3589: "2c18f0d12a5c0fe3f036",
        3594: "abfa97819380c89b1d81",
        3781: "8a7dc0935b033fa9fef1",
        3867: "6f004c04fc8763f3f6de",
        3976: "358a3e8a23ed4f553158",
        4009: "7bf7a1a4ca5e82a6bff8",
        4055: "c0d51ebdbcccb52b55fd",
        4072: "7f32b25613fc00fc79a7",
        4102: "5168c9d507c7b07541f5",
        4268: "2d96f7ba8eeb43794cf9",
        4278: "6263ceb1089b30ecaeec",
        4317: "97a1dd058cba565f4c65",
        4694: "0dacac6d251e97349911",
        4922: "953a0f2e92fa7c404c03",
        4952: "6aeb5145a32c7c8fe1aa",
        5043: "e6930f790fb826071c76",
        5052: "dbfadb77ac10e76a9655",
        5082: "71a78cf07260718362fc",
        5103: "5f3f8234f27d1740fe1a",
        5184: "c36d63ebc5118baf6395",
        5263: "5109bd4d33549c370138",
        5278: "8eca1c7f6b888330ed6d",
        5366: "b9b29483ed0b2d373ea1",
        5388: "26e2d39d636c877dbb10",
        5553: "2f06990750b52934ddaa",
        5633: "2ffbf18b870ce77437bb",
        5651: "92ecde4489bbc684e557",
        5801: "50cb3092269512b25a39",
        5803: "a8bbfc36ef92920078a8",
        5836: "4f6d2aaa1045b72de866",
        5876: "172c41e58a88cb7728c9",
        5955: "e3f7fe8be2a08ebcff88",
        6120: "f847be077c475b458305",
        6209: "20f00261e96937e59edd",
        6295: "a139e68e4db080fbd6f6",
        6428: "8cc726bc713f7b5278ec",
        6430: "21fc9efb86b942e54b89",
        6466: "d7b0b0f121e0b89884bb",
        6472: "6ff1add7bfd931b6a408",
        6528: "95eb7481081563997fe1",
        6577: "12af005bf01ce4aa397c",
        6635: "cddec8bc52b0543d9b71",
        6662: "cf767c599371b57e1c5a",
        6752: "ca52528f07001fd38ad5",
        6804: "0f6e44d85093ec6bb0ae",
        6888: "c1647a529d49c8968e82",
        6893: "41ce8871251278a919ed",
        6966: "d4044771bf8f29a627b3",
        7055: "e7893b4ce48f1db03942",
        7097: "d98baaf8c5cbeb24364b",
        7121: "16016e18201c84641b69",
        7326: "8ec3a7a37e180c5b2aae",
        7345: "e19152ce3401754a6644",
        7442: "0f0c201d6805fa6b8d3e",
        7548: "a6582de0c753caec163f",
        7553: "dab53861043c33b99aa1",
        7561: "b6a3d524d2d7d31110cf",
        7634: "bb4d163ba241ac572299",
        7639: "26c8f3bdcad84cf5a059",
        7696: "4948d2739cff74c8ceb3",
        7724: "9f1308d5e4694d233a26",
        7958: "223c8d0c06cd44828b86",
        8021: "afc428a618ee0cfc0598",
        8064: "658b9a40bf55123d7e16",
        8138: "85ea9c018e1b3fc7fc3d",
        8239: "bae2c329b732d83e286e",
        8291: "7795c4c52edf53008687",
        8396: "4f9f3e6de142eed796e4",
        8443: "18012b8dff03f4a1f5e5",
        8453: "1240171dffb23dcf2a14",
        8521: "f1bb6b12998d54186fa2",
        8522: "d2f6f39bd3b96076254a",
        8541: "016f9ba3ba670aa990f5",
        8547: "e150fd1cbf2bdaa09ee4",
        8674: "6d27b13be7942257d3a4",
        8724: "c2ffd99bdc1e24aecb4c",
        8732: "a6d735474407aa081e1b",
        8749: "e316ed023f23a9872784",
        8780: "5d0b9c0ed70a762928e7",
        8872: "93cd9b9b583f5972d58e",
        9053: "d05c7b90144e968c6a24",
        9118: "8f87a921199a19354a32",
        9129: "6514052cc058168496a1",
        9298: "2d189654316cd8860e74",
        9367: "845683fc8c049e8c827f",
        9387: "b50f3d61199205cd04f1",
        9402: "8d18d84791d390e31061",
        9436: "d39b1552486bed62398e",
        9453: "d5387e10586d7237e130",
        9505: "a48e5cdc8aeb377c2436",
        9515: "381dc1b2d83fae56ca77",
        9517: "c6d5ccf63ca4fe43b4d7",
        9536: "a10ce205e6881135acb3",
        9617: "3e5cb211c045c9e969c2",
        9638: "cbf4efe798e6bdbc91c6",
        9743: "ca9a1e883744b73bccf7",
        9774: "4fa515b6a87493d2d89a",
        9783: "ebfe4f52800ac3318949",
        9855: "50072256868cae351114",
        9857: "a98f3198d6a172e40be9",
        9869: "6ce33014f39ab5e72b50",
        9870: "08f8be36f838e3c2c76d",
        9914: "31c03facee91279d7475",
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
        1220: "77d6314c47e6acb268e7",
        2079: "22b3b211409461308f1c",
        2092: "54c04a83fb19118665fe",
        2694: "816c6c29940416f316c6",
        3156: "29993b512a86e345e2d3",
        3256: "1a8e226864678862c504",
        3781: "a0d93b248f31e86cf960",
        4268: "558bc776601a931c1489",
        5278: "7ad41ee51bad4c4189d1",
        5836: "012b734f1a7ae3ee2447",
        5876: "07b3cb346c58c180dfe2",
        6635: "8a47d89b9c2405919d78",
        6662: "1fbf29eee1d5fae3ba3d",
        6893: "b640cecb2ca8794180c2",
        6966: "a66289e969ece5d1faad",
        7561: "789dd1fbdb6c6b5c773d",
        7634: "b0bb35885b4aadc7f103",
        8138: "4eafcd050df39923be33",
        8396: "9fe38f7c04dc6be35a29",
        8521: "e5371bed29326965f77a",
        8780: "63e7157e5a86c99ce121",
        9118: "1f50a27862ba6c50f050",
        9129: "e0ae5f099a75f693e3de",
        9505: "61b7e51dcdd3ba9e19fc",
        9638: "6b4d26925341d8a6abb1",
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

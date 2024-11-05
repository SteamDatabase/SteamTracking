/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "9317807";
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
        for (t = 0; t < a.length; t++) {
          for (var [n, c, o] = a[t], d = !0, f = 0; f < n.length; f++)
            (!1 & o || i >= o) && Object.keys(s.O).every((a) => s.O[a](n[f]))
              ? n.splice(f--, 1)
              : ((d = !1), o < i && (i = o));
          if (d) {
            a.splice(t--, 1);
            var l = c();
            void 0 !== l && (e = l);
          }
        }
        return e;
      }
      o = o || 0;
      for (var t = a.length; t > 0 && a[t - 1][2] > o; t--) a[t] = a[t - 1];
      a[t] = [n, c, o];
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
        60: "d378ccd5616701950cf4",
        91: "8ce86a826dded5f9f2fe",
        129: "91742a505bb7aa245bb5",
        139: "0f4da7bd6c1f3042ee1c",
        198: "28951108df27f1695c4f",
        231: "2c39c12348091b7af1b9",
        258: "409cc5d4f75e9911394d",
        286: "e703ef23c34b02fce4bc",
        297: "12e5f6ae019d58943b40",
        537: "276f40b767e317245ad4",
        657: "142b4e3751406be2d486",
        759: "47ec9fe8f24262b411b8",
        823: "8c647b1ff78a2e8bb2c9",
        831: "5cf02d172257685906d0",
        833: "6b8ea59797648c63a335",
        926: "6c4d436c76a4121b95b6",
        976: "efbea8d75b07afc73f55",
        1023: "ecda4d68442fb98f041e",
        1063: "852fc96813d5241cc041",
        1220: "79e449cffd7fa4d3a3dd",
        1389: "c9f6b3b611d3bad06613",
        1410: "9f2ee4f6bbea59ce540c",
        1423: "fc9b05e5800517985eb7",
        1551: "3dba9f0dfa28e1526aef",
        1721: "dc1616bac9b1fda9d295",
        1724: "d7fb337c0a15d83c63ce",
        1783: "3d4683547897dee172b9",
        1880: "aa851da20ddca6a58b4d",
        1951: "864a3575343204d4e505",
        2021: "cbd5b9683e65317bdeca",
        2079: "e180292baf4a30e0e29f",
        2092: "9e706664c8705de53b85",
        2121: "f42f21abb89b5ff27276",
        2199: "5eac3ba9b1294a2be4e9",
        2446: "492b06f884b8740d7d0c",
        2481: "067a993a961d95781d2b",
        2588: "fc0c9310f8dcd634531a",
        2664: "f86b73049b0e92761ce8",
        2694: "f26c32131ee5a71e040d",
        2744: "3effa60d801d964b3fac",
        2780: "c21703fe588b7d815750",
        2959: "d7bc1b7e81abf251aab0",
        2974: "33b0b0d98ddf97ccf5af",
        3140: "27be68a6a8822981ff19",
        3156: "207b14753ce45e1f291f",
        3256: "8cee177784eb35c3c719",
        3589: "6fb03f0b915262101382",
        3594: "a5af704760877e684d74",
        3781: "8a7dc0935b033fa9fef1",
        3867: "e8d45564f3bb2c86c02e",
        3976: "358a3e8a23ed4f553158",
        4009: "7bf7a1a4ca5e82a6bff8",
        4055: "c0d51ebdbcccb52b55fd",
        4072: "7f32b25613fc00fc79a7",
        4102: "98a80a53be99ff60a4dd",
        4268: "2d96f7ba8eeb43794cf9",
        4278: "6263ceb1089b30ecaeec",
        4317: "97a1dd058cba565f4c65",
        4694: "dcfa4cc4b070e339e529",
        4922: "953a0f2e92fa7c404c03",
        4952: "c878724acb03a90556d2",
        5043: "e6930f790fb826071c76",
        5052: "7682f949362c4a945bcb",
        5082: "71a78cf07260718362fc",
        5103: "78b06b4bbe08a7f589de",
        5184: "c36d63ebc5118baf6395",
        5263: "5109bd4d33549c370138",
        5278: "8eca1c7f6b888330ed6d",
        5366: "b9b29483ed0b2d373ea1",
        5388: "699d66a47233d903e807",
        5553: "bbc77ab421d07e56f1d4",
        5633: "2ffbf18b870ce77437bb",
        5651: "92ecde4489bbc684e557",
        5801: "50cb3092269512b25a39",
        5803: "8afaf369a21878b5c30c",
        5836: "4f6d2aaa1045b72de866",
        5876: "c8ce32cdb3eed674d9ec",
        5955: "e3f7fe8be2a08ebcff88",
        6120: "06822cbce6847d670e60",
        6209: "20f00261e96937e59edd",
        6295: "a139e68e4db080fbd6f6",
        6428: "421a12948673ea08eb80",
        6430: "695d57db2949e9c43ad8",
        6466: "d7b0b0f121e0b89884bb",
        6472: "3a269c4981b9504e36a8",
        6528: "95eb7481081563997fe1",
        6577: "f034856959db8d09ff4e",
        6635: "beb12d07f1328bdbacee",
        6662: "7a172248df4f3bd3d0a5",
        6752: "3ab96316c271ff2389c7",
        6804: "0f6e44d85093ec6bb0ae",
        6888: "f7b7f496109a7d4775ea",
        6893: "41ce8871251278a919ed",
        6966: "d4044771bf8f29a627b3",
        7055: "e7893b4ce48f1db03942",
        7097: "d98baaf8c5cbeb24364b",
        7121: "29df14385ff6360f69a5",
        7326: "8ec3a7a37e180c5b2aae",
        7345: "c97fad850cccdbc3004b",
        7442: "c70ccabd7d0d850e06eb",
        7548: "a6582de0c753caec163f",
        7553: "131d36c5533d4aaca981",
        7561: "b6a3d524d2d7d31110cf",
        7634: "bb4d163ba241ac572299",
        7639: "26c8f3bdcad84cf5a059",
        7696: "e0a24309a4e90b5f15c4",
        7724: "ccb9c1ae2880bacbbc85",
        7958: "223c8d0c06cd44828b86",
        8021: "8c07a58d5edd936fc90a",
        8064: "658b9a40bf55123d7e16",
        8138: "cda4d720cc5a6c6f6693",
        8239: "bae2c329b732d83e286e",
        8291: "315428fa3af11927f1e0",
        8396: "4f9f3e6de142eed796e4",
        8443: "25d38da42ceaadae035d",
        8453: "1240171dffb23dcf2a14",
        8521: "a86a68708c29eeb18485",
        8522: "e35a27769bc8fed24d1d",
        8541: "016f9ba3ba670aa990f5",
        8547: "b6c9af058279c38978c0",
        8674: "572b7796ba382ca4436a",
        8724: "153c4045a1db1493246a",
        8732: "a6d735474407aa081e1b",
        8749: "7324bc7273b589a0d9f7",
        8780: "fd341cf81c8fbcec8fc4",
        8872: "7013c591635ad2af73d6",
        9053: "2ea7951fd0655db77bb0",
        9118: "14d75013645a6abf93af",
        9129: "6514052cc058168496a1",
        9298: "2a37f7d7ceb155665a15",
        9367: "845683fc8c049e8c827f",
        9387: "b963267b6cf02b232451",
        9402: "8d18d84791d390e31061",
        9436: "d39b1552486bed62398e",
        9453: "b20a67cbe494288f125e",
        9505: "df0551e25e7e4cea218f",
        9515: "c13b95d5aae831dc29f6",
        9517: "6dca66d1fd9aaabdb698",
        9536: "a10ce205e6881135acb3",
        9617: "3e5cb211c045c9e969c2",
        9638: "ece9e0d89475f9724b77",
        9743: "ca9a1e883744b73bccf7",
        9774: "019ca0c0677f6ee2fef8",
        9783: "2499ff4a8db28945da0c",
        9855: "50072256868cae351114",
        9857: "a4d18c7881bef914b746",
        9869: "f227a0dfbc02b4b51cd0",
        9870: "f13eb53fd804ee8caad1",
        9914: "2d0e5fedf15a3ff142ee",
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
        1220: "44416eda4247499c7a86",
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
        6635: "0d3d69f2f2bf2c25a2c8",
        6662: "16adc02a61b83373dd9b",
        6893: "b640cecb2ca8794180c2",
        6966: "a66289e969ece5d1faad",
        7561: "789dd1fbdb6c6b5c773d",
        7634: "b0bb35885b4aadc7f103",
        8138: "4eafcd050df39923be33",
        8396: "9fe38f7c04dc6be35a29",
        8521: "e5371bed29326965f77a",
        8780: "0ce9fd059702ad3e3bc9",
        9118: "eb6c0e5c5ff299129baf",
        9129: "e0ae5f099a75f693e3de",
        9505: "61b7e51dcdd3ba9e19fc",
        9638: "b5b9699fe299e9b0b2a5",
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
        var d, f;
        if (void 0 !== n)
          for (
            var l = document.getElementsByTagName("script"), t = 0;
            t < l.length;
            t++
          ) {
            var r = l[t];
            if (
              r.getAttribute("src") == a ||
              r.getAttribute("data-webpack") == o + n
            ) {
              d = r;
              break;
            }
          }
        d ||
          ((f = !0),
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
          f && document.head.appendChild(d);
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
                          f = new Error(
                            "Loading CSS chunk " +
                              a +
                              " failed.\n(" +
                              d +
                              ": " +
                              s +
                              ")",
                          );
                        (f.name = "ChunkLoadError"),
                          (f.code = "CSS_CHUNK_LOAD_FAILED"),
                          (f.type = d),
                          (f.request = s),
                          i.parentNode && i.parentNode.removeChild(i),
                          o(f);
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
            [i, d, f] = n,
            l = 0;
          if (i.some((e) => 0 !== a[e])) {
            for (c in d) s.o(d, c) && (s.m[c] = d[c]);
            if (f) var t = f(s);
          }
          for (e && e(n); l < i.length; l++)
            (o = i[l]), s.o(a, o) && a[o] && a[o][0](), (a[o] = 0);
          return s.O(t);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();

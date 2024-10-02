/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "9226050";
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
        2744: "localization/sales_latam-json",
        2780: "localization/sales_sc_schinese-json",
        2959: "chunk~75a560490",
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
        5340: "localization/shared_polish-json",
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
        7872: "libraries~c18a43282",
        7958: "localization/sales_polish-json",
        8021: "localization/main_russian-json",
        8064: "localization/sales_japanese-json",
        8117: "chunk~05c551cad",
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
        60: "bda340a488834373de64",
        91: "8ce86a826dded5f9f2fe",
        129: "400755accb12de014e13",
        139: "cb38854165c1d98b4a33",
        198: "129a17c738a21e634065",
        231: "2c39c12348091b7af1b9",
        258: "35dbb484d3f2ff55a4e5",
        286: "4384c227cf57ece95605",
        297: "12e5f6ae019d58943b40",
        537: "276f40b767e317245ad4",
        657: "25ed654fc5126a719f96",
        759: "dc4a2fdb49b4b90b319b",
        823: "039d317d2f02bdbbeaab",
        831: "25cd40a6917611d25a26",
        833: "688e57c5229fcc52aebc",
        926: "6c4d436c76a4121b95b6",
        976: "b4706b1765cd9cdb4718",
        1023: "19dce2a8978d2c1b5bcd",
        1063: "852fc96813d5241cc041",
        1220: "d5098c04a7ee91d90864",
        1389: "71e10278d8e925826c6e",
        1410: "9f2ee4f6bbea59ce540c",
        1423: "2b876c262bad8b480b1a",
        1551: "3dba9f0dfa28e1526aef",
        1721: "dc1616bac9b1fda9d295",
        1724: "c89d8d1b61ed9ea1e9c1",
        1783: "3d4683547897dee172b9",
        1880: "aa851da20ddca6a58b4d",
        1951: "864a3575343204d4e505",
        2021: "39b666f58ce258563463",
        2079: "115120858be3fcc4368a",
        2092: "b977e52950258a540535",
        2121: "de527f968b3b10a4440b",
        2199: "1e67705b56999cd67267",
        2446: "3833f49f772359f9338a",
        2481: "d21da55f022c1650cc0d",
        2588: "c232e73edeaaec94378d",
        2664: "ade675f2082ea61d58fd",
        2744: "3effa60d801d964b3fac",
        2780: "c21703fe588b7d815750",
        2959: "5e41ebb35610aac71cab",
        2974: "33b0b0d98ddf97ccf5af",
        3140: "50f41b8ea1361a2c3ca8",
        3156: "9bbc4ef97bf410f13676",
        3256: "a6e72443127e057cfdac",
        3589: "d6691a8889f5e4737d75",
        3594: "781458ba01abef4f066b",
        3781: "579e56a68d8e64bcfaae",
        3867: "fd20f0e0c157217ad325",
        3976: "21f986d41d352f37ba94",
        4009: "7bf7a1a4ca5e82a6bff8",
        4055: "c0d51ebdbcccb52b55fd",
        4072: "77d757a00e0f40e28a42",
        4102: "2ab6ec08eb43ee2dbdc4",
        4268: "5e3c161aa96bf125f1bf",
        4278: "6263ceb1089b30ecaeec",
        4317: "97a1dd058cba565f4c65",
        4694: "96687cfc70b42eef7ad6",
        4922: "953a0f2e92fa7c404c03",
        4952: "9ec105ce7a6ac6393afa",
        5043: "e6930f790fb826071c76",
        5052: "57d05ea87ba9248eee59",
        5082: "71a78cf07260718362fc",
        5103: "5f3f8234f27d1740fe1a",
        5184: "c36d63ebc5118baf6395",
        5263: "7d874d1157c1ee4ebb08",
        5278: "8eca1c7f6b888330ed6d",
        5340: "adb05b4f613f9f271ae6",
        5366: "b9b29483ed0b2d373ea1",
        5388: "bf607941d0dbb9bbd29c",
        5553: "06d8c683ee01ca356ced",
        5633: "2ffbf18b870ce77437bb",
        5651: "91567d8d4f868ac7613e",
        5801: "257c8ba09cbedfeb2b65",
        5803: "2469170f179bbcc4b682",
        5836: "466f657c684be6334f3a",
        5876: "70b06c6d3825a684eb56",
        5955: "e3f7fe8be2a08ebcff88",
        6120: "b3f65284d4ccad5f0ded",
        6209: "0b1491f56fd4e4f78075",
        6295: "a139e68e4db080fbd6f6",
        6428: "7264aaef342733817f71",
        6430: "3867837046850be92d01",
        6466: "d7b0b0f121e0b89884bb",
        6472: "8cf8015485f45b4309b4",
        6528: "95eb7481081563997fe1",
        6577: "41e2df07b310d53dab4d",
        6635: "d94693a000b346c2c3ab",
        6662: "6933b59667b5e4b2cb66",
        6752: "2f078a497d03052c3b2f",
        6804: "0f6e44d85093ec6bb0ae",
        6888: "e21b73df019bf96259c0",
        6893: "5a7baaf499bf7dde0f96",
        6966: "d4044771bf8f29a627b3",
        7055: "e7893b4ce48f1db03942",
        7097: "d98baaf8c5cbeb24364b",
        7121: "16016e18201c84641b69",
        7326: "8ec3a7a37e180c5b2aae",
        7345: "00e045e7c3ab841519a2",
        7442: "24c19e275576efdeeb9f",
        7548: "a6582de0c753caec163f",
        7553: "6f4d8de677ac8e7df7ea",
        7561: "b6a3d524d2d7d31110cf",
        7634: "bb4d163ba241ac572299",
        7639: "26c8f3bdcad84cf5a059",
        7696: "e1fb5ccc40176abfac1c",
        7724: "d027a4da0284609aa010",
        7872: "0351b7502ed8bfee018e",
        7958: "223c8d0c06cd44828b86",
        8021: "23e1b41d457f1cf1aeab",
        8064: "658b9a40bf55123d7e16",
        8117: "096be0cbdcdaa23f2a13",
        8138: "ef40d6ff45e137386c8a",
        8239: "bae2c329b732d83e286e",
        8291: "1b532ff1914da66ab0bf",
        8396: "0a4dd71be1afa4a7cff6",
        8443: "18012b8dff03f4a1f5e5",
        8453: "1240171dffb23dcf2a14",
        8521: "7304fad00256ae6b0a95",
        8522: "cc85aefbda73301f0c6f",
        8541: "016f9ba3ba670aa990f5",
        8547: "d1056b5783cac702cd1f",
        8674: "13623b8d84193f87811c",
        8724: "09a65d8dfef44c808bc2",
        8732: "a6d735474407aa081e1b",
        8749: "117cf2f4528cac9a9040",
        8780: "3a254244fa94943e09c1",
        8872: "f9b5d7054cab4022a64f",
        9053: "98809df402fe11e1a285",
        9118: "76df9af4594dd894a166",
        9129: "d0e6e23f69e9e7497053",
        9298: "0ad415d4567fa5ea4c92",
        9367: "845683fc8c049e8c827f",
        9387: "a01d6c2a59420b1e6fa8",
        9402: "8d18d84791d390e31061",
        9436: "349e034b7e6c5db12d45",
        9453: "a74abb7c61b9a3a4d801",
        9505: "fa688bfd9a65115ccd10",
        9515: "7aabab7ed20fb3dbc5d1",
        9517: "969262fb7aac7642fa39",
        9536: "b5bfdf3dd4f48bb33eb3",
        9617: "3e5cb211c045c9e969c2",
        9638: "bb53fbcb27f487950e1e",
        9743: "ca9a1e883744b73bccf7",
        9774: "854c19a24bdcbebf46af",
        9783: "998f2ca8b3ccce536807",
        9855: "e79e5cd6f8d15747ca3c",
        9857: "926f640f5d78c286525e",
        9869: "bc042f4cb18f47afd9e6",
        9870: "08f8be36f838e3c2c76d",
        9914: "f1c2d81076b5a4561b0f",
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
        2079: "92d1a8050fe7bc035b62",
        2092: "54c04a83fb19118665fe",
        3156: "29993b512a86e345e2d3",
        3256: "c862342a585835e80c54",
        3781: "a0d93b248f31e86cf960",
        4268: "558bc776601a931c1489",
        5278: "7ad41ee51bad4c4189d1",
        5836: "012b734f1a7ae3ee2447",
        5876: "07b3cb346c58c180dfe2",
        6635: "8a47d89b9c2405919d78",
        6662: "4053fd10f49380796351",
        6893: "b640cecb2ca8794180c2",
        6966: "a66289e969ece5d1faad",
        7561: "789dd1fbdb6c6b5c773d",
        7634: "b0bb35885b4aadc7f103",
        8138: "4eafcd050df39923be33",
        8396: "9fe38f7c04dc6be35a29",
        8521: "e5371bed29326965f77a",
        8780: "a964ca3138d3e5ca7954",
        9118: "b31eb7b912dea12abf0c",
        9129: "e0ae5f099a75f693e3de",
        9505: "60c352e8d534fddd2005",
        9638: "105f574e8284d92d90cc",
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
            var b = l[t];
            if (
              b.getAttribute("src") == a ||
              b.getAttribute("data-webpack") == o + n
            ) {
              d = b;
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
        var r = (e, n) => {
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
            r.bind(null, void 0, { type: "timeout", target: d }),
            12e4,
          );
        (d.onerror = r.bind(null, d.onerror)),
          (d.onload = r.bind(null, d.onload)),
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
          else if (4556 != e) {
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
          } else a[e] = 0;
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

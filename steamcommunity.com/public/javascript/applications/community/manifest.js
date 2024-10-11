/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "9251177";
(() => {
  "use strict";
  var a,
    e,
    n,
    o,
    c,
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
    (s.O = (e, n, o, c) => {
      if (!n) {
        var i = 1 / 0;
        for (t = 0; t < a.length; t++) {
          for (var [n, o, c] = a[t], d = !0, f = 0; f < n.length; f++)
            (!1 & c || i >= c) && Object.keys(s.O).every((a) => s.O[a](n[f]))
              ? n.splice(f--, 1)
              : ((d = !1), c < i && (i = c));
          if (d) {
            a.splice(t--, 1);
            var l = o();
            void 0 !== l && (e = l);
          }
        }
        return e;
      }
      c = c || 0;
      for (var t = a.length; t > 0 && a[t - 1][2] > c; t--) a[t] = a[t - 1];
      a[t] = [n, o, c];
    }),
    (s.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return s.d(e, { a: e }), e;
    }),
    (n = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (s.t = function (a, o) {
      if ((1 & o && (a = this(a)), 8 & o)) return a;
      if ("object" == typeof a && a) {
        if (4 & o && a.__esModule) return a;
        if (16 & o && "function" == typeof a.then) return a;
      }
      var c = Object.create(null);
      s.r(c);
      var i = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var d = 2 & o && a; "object" == typeof d && !~e.indexOf(d); d = n(d))
        Object.getOwnPropertyNames(d).forEach((e) => (i[e] = () => a[e]));
      return (i.default = () => a), s.d(c, i), c;
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
        60: "73613e0fb5e8dd8bb5d8",
        91: "8ce86a826dded5f9f2fe",
        129: "b68c0b74feae3ae5f278",
        139: "3cc2ee8ebc9e63d33afe",
        198: "811dc50609ba54ad137e",
        231: "2c39c12348091b7af1b9",
        258: "409cc5d4f75e9911394d",
        286: "e2d12aea25d18be131c0",
        297: "12e5f6ae019d58943b40",
        537: "276f40b767e317245ad4",
        657: "3b415bc0fa0b659b37ca",
        759: "dbd8db4ad8e2be24db28",
        823: "ff2c2d084a11ed4ca15b",
        831: "a56a9e7112696aaa2e0d",
        833: "3afbd8eede8f4ea7a244",
        926: "6c4d436c76a4121b95b6",
        976: "b4706b1765cd9cdb4718",
        1023: "19dce2a8978d2c1b5bcd",
        1063: "852fc96813d5241cc041",
        1220: "01c3576b77b397becdae",
        1389: "15acfd49bca477ef8c7e",
        1410: "9f2ee4f6bbea59ce540c",
        1423: "2f96736bce26f292e90c",
        1551: "3dba9f0dfa28e1526aef",
        1721: "dc1616bac9b1fda9d295",
        1724: "553ead3710bb60e4cc03",
        1783: "3d4683547897dee172b9",
        1880: "aa851da20ddca6a58b4d",
        1951: "864a3575343204d4e505",
        2021: "82642fd33032852dd977",
        2079: "6b178ab5c6f019916de8",
        2092: "2da470ebbd0e4dc484ed",
        2121: "c735f39eb04685e91bec",
        2199: "165ba29f0edad5212edd",
        2446: "55dc3fa23d12e25ea423",
        2481: "c1b9cb0c9dbf81f885b4",
        2588: "c232e73edeaaec94378d",
        2664: "0c426ff3730373519501",
        2694: "787daa8e98efe58ef781",
        2744: "3effa60d801d964b3fac",
        2780: "c21703fe588b7d815750",
        2959: "7b267d28650e92365152",
        2974: "33b0b0d98ddf97ccf5af",
        3140: "43548a5bebb748374e73",
        3156: "3c5c4e51d37b82a1bdf9",
        3256: "915e7416389410db8326",
        3589: "3bb204ce2e81918b8966",
        3594: "d67ca3a2690a56ea5760",
        3781: "8a7dc0935b033fa9fef1",
        3867: "01012f315f7bd75e0f6d",
        3976: "21f986d41d352f37ba94",
        4009: "7bf7a1a4ca5e82a6bff8",
        4055: "c0d51ebdbcccb52b55fd",
        4072: "7f32b25613fc00fc79a7",
        4102: "0bc29f3bb863c7257232",
        4268: "5e3c161aa96bf125f1bf",
        4278: "6263ceb1089b30ecaeec",
        4317: "97a1dd058cba565f4c65",
        4694: "b3d39c9d87c5d7b5fdf9",
        4922: "953a0f2e92fa7c404c03",
        4952: "cbb61a66b6847d37ed0b",
        5043: "e6930f790fb826071c76",
        5052: "67171e521acd9d7c1082",
        5082: "71a78cf07260718362fc",
        5103: "5f3f8234f27d1740fe1a",
        5184: "c36d63ebc5118baf6395",
        5263: "98ac999144a0d02ad3d0",
        5278: "8eca1c7f6b888330ed6d",
        5366: "b9b29483ed0b2d373ea1",
        5388: "55510957d1a94f22bf7d",
        5553: "c93c903a95fe3c75cf81",
        5633: "2ffbf18b870ce77437bb",
        5651: "91567d8d4f868ac7613e",
        5801: "0b8bab051e2bd3aca20c",
        5803: "8c33ec3541b73da7bc00",
        5836: "4f6d2aaa1045b72de866",
        5876: "aa858853921ff5e7ef32",
        5955: "e3f7fe8be2a08ebcff88",
        6120: "5c119cee7405e82b6f0c",
        6209: "0b1491f56fd4e4f78075",
        6295: "a139e68e4db080fbd6f6",
        6428: "cb6573768f45d2bee1a9",
        6430: "fdc678a17ae983248992",
        6466: "d7b0b0f121e0b89884bb",
        6472: "8a816700ec0287a43859",
        6528: "95eb7481081563997fe1",
        6577: "f3e9e8a3db5126abee07",
        6635: "19e4168f5632bed216b0",
        6662: "160fe2baf7bd9eb2fb5c",
        6752: "1f1ee16c0e6da6a6233e",
        6804: "0f6e44d85093ec6bb0ae",
        6888: "1ee1a1fb132a5b461681",
        6893: "a05b91a4398024d02e8f",
        6966: "d4044771bf8f29a627b3",
        7055: "e7893b4ce48f1db03942",
        7097: "d98baaf8c5cbeb24364b",
        7121: "16016e18201c84641b69",
        7326: "8ec3a7a37e180c5b2aae",
        7345: "5c6d6afda3af45a21992",
        7442: "7db70209c01e94affe80",
        7548: "a6582de0c753caec163f",
        7553: "32eb5806fab9c05e3961",
        7561: "b6a3d524d2d7d31110cf",
        7634: "bb4d163ba241ac572299",
        7639: "26c8f3bdcad84cf5a059",
        7696: "2234b097fa52b66170af",
        7724: "26819767189b89c62905",
        7872: "0351b7502ed8bfee018e",
        7958: "223c8d0c06cd44828b86",
        8021: "74da63c83bc95948fcb8",
        8064: "658b9a40bf55123d7e16",
        8138: "03cee4d60d833abd5e1f",
        8239: "bae2c329b732d83e286e",
        8291: "5e98f68bd5b9429bf121",
        8396: "4f9f3e6de142eed796e4",
        8443: "18012b8dff03f4a1f5e5",
        8453: "1240171dffb23dcf2a14",
        8521: "e85f00565a051cab2dc7",
        8522: "abe456510b36d4a68a88",
        8541: "016f9ba3ba670aa990f5",
        8547: "fb60285727f781543daa",
        8674: "aa368fddeb7358ba7873",
        8724: "d2feb0b770d8053b9f26",
        8732: "a6d735474407aa081e1b",
        8749: "5d12bf7b3bb06186511f",
        8780: "76576e16cf2aa38d31a0",
        8872: "99532a1187f5ad0a65c1",
        9053: "a269c80e85c6a94cb66b",
        9118: "9ee90005a4efd3d6bce5",
        9129: "cc80414b2b3f2c96a2f3",
        9298: "569c4559d27040d4a41b",
        9367: "845683fc8c049e8c827f",
        9387: "dcd0c6014ca542a916c0",
        9402: "8d18d84791d390e31061",
        9436: "d39b1552486bed62398e",
        9453: "2bbc2c4d1a45a7514d25",
        9505: "ba62292c54adf93eec54",
        9515: "32b96c69d519e35a446c",
        9517: "969262fb7aac7642fa39",
        9536: "b5bfdf3dd4f48bb33eb3",
        9617: "3e5cb211c045c9e969c2",
        9638: "0258e9ab52702e540cac",
        9743: "ca9a1e883744b73bccf7",
        9774: "a98edd2ac8dedfba2de7",
        9783: "50dc44aa6f743c532c2b",
        9855: "50072256868cae351114",
        9857: "31212f6c138750ed7c1f",
        9869: "66d7170d4f3170e72b25",
        9870: "08f8be36f838e3c2c76d",
        9914: "354abe532d5988a5df5c",
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
        6662: "36aac12095dfcde17f0b",
        6893: "b640cecb2ca8794180c2",
        6966: "a66289e969ece5d1faad",
        7561: "789dd1fbdb6c6b5c773d",
        7634: "b0bb35885b4aadc7f103",
        8138: "4eafcd050df39923be33",
        8396: "9fe38f7c04dc6be35a29",
        8521: "e5371bed29326965f77a",
        8780: "25d80c0e5648109e4b2e",
        9118: "b31eb7b912dea12abf0c",
        9129: "e0ae5f099a75f693e3de",
        9505: "61b7e51dcdd3ba9e19fc",
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
    (o = {}),
    (c = "community:"),
    (s.l = (a, e, n, i) => {
      if (o[a]) o[a].push(e);
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
              b.getAttribute("data-webpack") == c + n
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
          d.setAttribute("data-webpack", c + n),
          (d.src = a)),
          (o[a] = [e]);
        var r = (e, n) => {
            (d.onerror = d.onload = null), clearTimeout(h);
            var c = o[a];
            if (
              (delete o[a],
              d.parentNode && d.parentNode.removeChild(d),
              c && c.forEach((a) => a(n)),
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
              var o = s.miniCssF(a),
                c = s.p + o;
              if (
                ((a, e) => {
                  for (
                    var n = document.getElementsByTagName("link"), o = 0;
                    o < n.length;
                    o++
                  ) {
                    var c =
                      (d = n[o]).getAttribute("data-href") ||
                      d.getAttribute("href");
                    if ("stylesheet" === d.rel && (c === a || c === e))
                      return d;
                  }
                  var i = document.getElementsByTagName("style");
                  for (o = 0; o < i.length; o++) {
                    var d;
                    if (
                      (c = (d = i[o]).getAttribute("data-href")) === a ||
                      c === e
                    )
                      return d;
                  }
                })(o, c)
              )
                return e();
              ((a, e, n, o, c) => {
                var i = document.createElement("link");
                (i.rel = "stylesheet"),
                  (i.type = "text/css"),
                  (i.onerror = i.onload =
                    (n) => {
                      if (((i.onerror = i.onload = null), "load" === n.type))
                        o();
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
                          c(f);
                      }
                    }),
                  (i.href = e),
                  n
                    ? n.parentNode.insertBefore(i, n.nextSibling)
                    : document.head.appendChild(i);
              })(a, c, null, e, n);
            }),
          e = { 4556: 0 };
        s.f.miniCss = (n, o) => {
          e[n]
            ? o.push(e[n])
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
              o.push(
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
        var o = s.o(a, e) ? a[e] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (/^(455|839)6$/.test(e)) a[e] = 0;
          else {
            var c = new Promise((n, c) => (o = a[e] = [n, c]));
            n.push((o[2] = c));
            var i = s.p + s.u(e),
              d = new Error();
            s.l(
              i,
              (n) => {
                if (s.o(a, e) && (0 !== (o = a[e]) && (a[e] = void 0), o)) {
                  var c = n && ("load" === n.type ? "missing" : n.type),
                    i = n && n.target && n.target.src;
                  (d.message =
                    "Loading chunk " + e + " failed.\n(" + c + ": " + i + ")"),
                    (d.name = "ChunkLoadError"),
                    (d.type = c),
                    (d.request = i),
                    o[1](d);
                }
              },
              "chunk-" + e,
              e,
            );
          }
      }),
        (s.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var o,
            c,
            [i, d, f] = n,
            l = 0;
          if (i.some((e) => 0 !== a[e])) {
            for (o in d) s.o(d, o) && (s.m[o] = d[o]);
            if (f) var t = f(s);
          }
          for (e && e(n); l < i.length; l++)
            (c = i[l]), s.o(a, c) && a[c] && a[c][0](), (a[c] = 0);
          return s.O(t);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();

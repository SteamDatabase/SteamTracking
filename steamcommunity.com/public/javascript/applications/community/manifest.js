/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "9181640";
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
        for (f = 0; f < a.length; f++) {
          for (var [n, o, c] = a[f], d = !0, l = 0; l < n.length; l++)
            (!1 & c || i >= c) && Object.keys(s.O).every((a) => s.O[a](n[l]))
              ? n.splice(l--, 1)
              : ((d = !1), c < i && (i = c));
          if (d) {
            a.splice(f--, 1);
            var t = o();
            void 0 !== t && (e = t);
          }
        }
        return e;
      }
      c = c || 0;
      for (var f = a.length; f > 0 && a[f - 1][2] > c; f--) a[f] = a[f - 1];
      a[f] = [n, o, c];
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
        60: "ae3ca4c41696c4c50492",
        91: "8ce86a826dded5f9f2fe",
        129: "cb3228420ed4cf9f3df1",
        139: "c07d4a0d73d48acc1ffb",
        198: "b81ee12ade145af85ca3",
        231: "2c39c12348091b7af1b9",
        258: "fe9755994dfdac180e0b",
        286: "762ba9de9f2440b1735b",
        297: "12e5f6ae019d58943b40",
        537: "276f40b767e317245ad4",
        657: "41c5a78c5733ddb6375e",
        759: "37be23bbeb84679d0042",
        823: "222fe3a18dfdcd3b98b8",
        831: "f8ffeb6098e8c7c2faaf",
        833: "8ce87641f0ba8633697e",
        926: "6c4d436c76a4121b95b6",
        976: "1ebf04803c9ad78173d8",
        1023: "19dce2a8978d2c1b5bcd",
        1063: "9ecf9cc6c78d0325aaf3",
        1220: "89e5357aa73579385cec",
        1389: "8f490b25c2c5edff9845",
        1410: "9f2ee4f6bbea59ce540c",
        1423: "4b36d2d8916361d059d5",
        1551: "3dba9f0dfa28e1526aef",
        1721: "dc1616bac9b1fda9d295",
        1724: "70cdb86fa6e36c51b053",
        1783: "3d4683547897dee172b9",
        1880: "aa851da20ddca6a58b4d",
        1951: "864a3575343204d4e505",
        2021: "c3f431741d5df216b3ca",
        2079: "594b74a050f7cfd2357e",
        2092: "91a4d34cf4743c7faead",
        2121: "f1bb87abbb896001608d",
        2199: "e729f36236dff10ca054",
        2446: "33d5237c3b05a18b6818",
        2481: "fa666dc3db8f5cac69ae",
        2588: "c232e73edeaaec94378d",
        2664: "1f4ff429cd8ba33d17b5",
        2744: "3effa60d801d964b3fac",
        2780: "c21703fe588b7d815750",
        2959: "9efcf1b4c3600aa56e33",
        2974: "aa83a0d48099ce1cef85",
        3140: "f7c10d4d7949850b05e4",
        3156: "5e60872818258462c06e",
        3256: "23959a2cc34255e4e843",
        3589: "4045d2742a898b88a733",
        3594: "f7290e122e50d195dd4e",
        3781: "579e56a68d8e64bcfaae",
        3867: "7bb34d14ac0270eb19a5",
        3976: "21f986d41d352f37ba94",
        4009: "7bf7a1a4ca5e82a6bff8",
        4055: "c0d51ebdbcccb52b55fd",
        4072: "77d757a00e0f40e28a42",
        4102: "c1cdad448aea9dc633cf",
        4268: "e5cc69286fc8e6f98822",
        4278: "6263ceb1089b30ecaeec",
        4317: "97a1dd058cba565f4c65",
        4694: "f9e4b9bf93e706da87b6",
        4922: "953a0f2e92fa7c404c03",
        4952: "a89de7f6bbf3b79386c6",
        5043: "96bb5b7f2a70b2e2be8b",
        5052: "1b4b36f0521a36dc041d",
        5082: "71a78cf07260718362fc",
        5103: "5f3f8234f27d1740fe1a",
        5184: "c36d63ebc5118baf6395",
        5263: "51caa1631ab05afef7f0",
        5278: "8eca1c7f6b888330ed6d",
        5340: "ed634639faf77ab7c48b",
        5366: "b9b29483ed0b2d373ea1",
        5388: "78e2c53a39943f4934f4",
        5553: "505d676fc0f5acf50575",
        5633: "2ffbf18b870ce77437bb",
        5651: "91567d8d4f868ac7613e",
        5801: "bddf050a7983e562f908",
        5803: "b56c77d134fd3dbcb284",
        5836: "466f657c684be6334f3a",
        5876: "12b8cc955998ffdb7202",
        5955: "e3f7fe8be2a08ebcff88",
        6120: "8739236ae699f91be968",
        6209: "13479c8cb6328fd93b67",
        6295: "a139e68e4db080fbd6f6",
        6428: "0deaf8abfd1d6b3a061e",
        6430: "560c24b22ef02f870d2f",
        6466: "d7b0b0f121e0b89884bb",
        6472: "86fe6ea614f366c14dc3",
        6528: "95eb7481081563997fe1",
        6577: "32675b0f50d4f3406c24",
        6635: "b52199bbd23236a06459",
        6662: "aa4e0c1822713758d5ff",
        6752: "3b299bfd315476f22d81",
        6804: "0f6e44d85093ec6bb0ae",
        6888: "f15ea4e7c7d4068747c5",
        6893: "089bf13cca9579c041f3",
        6966: "d4044771bf8f29a627b3",
        7097: "d98baaf8c5cbeb24364b",
        7121: "16016e18201c84641b69",
        7326: "8ec3a7a37e180c5b2aae",
        7345: "39a4e87f063dd6141d82",
        7442: "7b8eb79fe5e1c938c143",
        7548: "a6582de0c753caec163f",
        7553: "870d096a979d610084a9",
        7561: "b6a3d524d2d7d31110cf",
        7634: "b44e77790a33844bb8d9",
        7639: "26c8f3bdcad84cf5a059",
        7696: "d06cf9ebfdd0f9c27a28",
        7724: "a74cc955a4e138f9e55f",
        7872: "0351b7502ed8bfee018e",
        7958: "223c8d0c06cd44828b86",
        8021: "34b7368b3ef17654e8ae",
        8064: "658b9a40bf55123d7e16",
        8138: "e46a968b5d32b9bcc0ee",
        8239: "bae2c329b732d83e286e",
        8291: "715527ca51ed45e4ff06",
        8396: "0a4dd71be1afa4a7cff6",
        8443: "18012b8dff03f4a1f5e5",
        8453: "fdb8d5bf310a7307da45",
        8521: "d9c4676d36dc17cbbe8a",
        8522: "5d36138093c478261283",
        8541: "016f9ba3ba670aa990f5",
        8547: "d2baf68daad065c83633",
        8674: "922d248a2e7d9e263f55",
        8724: "0884ad238b4d53f4debd",
        8732: "a6d735474407aa081e1b",
        8749: "722e0797d9abb0190f97",
        8780: "63203a964a5dcbdb0d83",
        8872: "061cf37c5f86e94e5773",
        9053: "cc704c74ddd8b9c3e4df",
        9118: "a99f15add69715a44aac",
        9129: "067c87b5aa299e40c4e9",
        9298: "95ce67e3f0e764efafe0",
        9367: "845683fc8c049e8c827f",
        9387: "a5eaadddb12aa734a93d",
        9402: "8d18d84791d390e31061",
        9436: "88468d0cee2de1c5150f",
        9453: "d5e10ef95fc65eb4b2d9",
        9505: "49f998b51b335318fd79",
        9515: "145e92eef6d48f4079ab",
        9517: "4e6d32d82eea5345fd46",
        9536: "b5bfdf3dd4f48bb33eb3",
        9617: "3e5cb211c045c9e969c2",
        9638: "1e41dd2f1612a148a48e",
        9743: "ca9a1e883744b73bccf7",
        9774: "fadaeaf377113927f777",
        9783: "2d8a64e5f77b968e86ee",
        9855: "e79e5cd6f8d15747ca3c",
        9857: "11552fb3f9efb9839b86",
        9869: "f522c16a96818914eb61",
        9870: "08f8be36f838e3c2c76d",
        9914: "b9e9dc7bc4b1fc64aa6a",
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
        976: "1bff2b3fd2fea33990f1",
        1220: "cf983cece3417dc3006f",
        2079: "92d1a8050fe7bc035b62",
        2092: "54c04a83fb19118665fe",
        3156: "2780311ab6164bb1ed67",
        3256: "c862342a585835e80c54",
        3781: "a0d93b248f31e86cf960",
        4268: "558bc776601a931c1489",
        5278: "7ad41ee51bad4c4189d1",
        5836: "012b734f1a7ae3ee2447",
        5876: "07b3cb346c58c180dfe2",
        6635: "8a47d89b9c2405919d78",
        6662: "6036898710d5c5dcef13",
        6893: "b640cecb2ca8794180c2",
        6966: "a66289e969ece5d1faad",
        7561: "789dd1fbdb6c6b5c773d",
        7634: "b0bb35885b4aadc7f103",
        8138: "4eafcd050df39923be33",
        8396: "9fe38f7c04dc6be35a29",
        8521: "e5371bed29326965f77a",
        8780: "f882a990a1975d713eba",
        9118: "197910a7dcee5b972bd3",
        9129: "e0ae5f099a75f693e3de",
        9505: "60c352e8d534fddd2005",
        9638: "84c03d8834d0da1ed4bc",
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
        var d, l;
        if (void 0 !== n)
          for (
            var t = document.getElementsByTagName("script"), f = 0;
            f < t.length;
            f++
          ) {
            var b = t[f];
            if (
              b.getAttribute("src") == a ||
              b.getAttribute("data-webpack") == c + n
            ) {
              d = b;
              break;
            }
          }
        d ||
          ((l = !0),
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
                          c(l);
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
          else if (4556 != e) {
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
          } else a[e] = 0;
      }),
        (s.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var o,
            c,
            [i, d, l] = n,
            t = 0;
          if (i.some((e) => 0 !== a[e])) {
            for (o in d) s.o(d, o) && (s.m[o] = d[o]);
            if (l) var f = l(s);
          }
          for (e && e(n); t < i.length; t++)
            (c = i[t]), s.o(a, c) && a[c] && a[c][0](), (a[c] = 0);
          return s.O(f);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();

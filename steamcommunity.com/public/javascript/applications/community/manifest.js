/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "9220308";
(() => {
  "use strict";
  var a,
    e,
    n,
    o,
    c,
    i = {},
    d = {};
  function f(a) {
    var e = d[a];
    if (void 0 !== e) return e.exports;
    var n = (d[a] = { id: a, loaded: !1, exports: {} });
    return i[a].call(n.exports, n, n.exports, f), (n.loaded = !0), n.exports;
  }
  (f.m = i),
    (f.amdO = {}),
    (a = []),
    (f.O = (e, n, o, c) => {
      if (!n) {
        var i = 1 / 0;
        for (t = 0; t < a.length; t++) {
          for (var [n, o, c] = a[t], d = !0, s = 0; s < n.length; s++)
            (!1 & c || i >= c) && Object.keys(f.O).every((a) => f.O[a](n[s]))
              ? n.splice(s--, 1)
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
    (f.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return f.d(e, { a: e }), e;
    }),
    (n = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (f.t = function (a, o) {
      if ((1 & o && (a = this(a)), 8 & o)) return a;
      if ("object" == typeof a && a) {
        if (4 & o && a.__esModule) return a;
        if (16 & o && "function" == typeof a.then) return a;
      }
      var c = Object.create(null);
      f.r(c);
      var i = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var d = 2 & o && a; "object" == typeof d && !~e.indexOf(d); d = n(d))
        Object.getOwnPropertyNames(d).forEach((e) => (i[e] = () => a[e]));
      return (i.default = () => a), f.d(c, i), c;
    }),
    (f.d = (a, e) => {
      for (var n in e)
        f.o(e, n) &&
          !f.o(a, n) &&
          Object.defineProperty(a, n, { enumerable: !0, get: e[n] });
    }),
    (f.f = {}),
    (f.e = (a) =>
      Promise.all(Object.keys(f.f).reduce((e, n) => (f.f[n](a, e), e), []))),
    (f.u = (a) =>
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
        60: "b065a15a64b69d288b9b",
        91: "8ce86a826dded5f9f2fe",
        129: "bf8646b164ee59737bda",
        139: "cac37a5d34a58c9947ac",
        198: "a8b460c869f7ad3c84dd",
        231: "2c39c12348091b7af1b9",
        258: "fe9755994dfdac180e0b",
        286: "2e3ffeeb49a032f867a8",
        297: "12e5f6ae019d58943b40",
        537: "276f40b767e317245ad4",
        657: "41c5a78c5733ddb6375e",
        759: "946dd8db23eb07367a75",
        823: "d132f73e6161ab382f2f",
        831: "f1b06bc98095d4048b1c",
        833: "142e6897f17ad42b24e5",
        926: "6c4d436c76a4121b95b6",
        976: "bd428730774832d690de",
        1023: "19dce2a8978d2c1b5bcd",
        1063: "9ecf9cc6c78d0325aaf3",
        1220: "29a80b5c8f5efc468247",
        1389: "b847c56f8c9cca0d43b2",
        1410: "9f2ee4f6bbea59ce540c",
        1423: "a84d0c57fe0a486e4791",
        1551: "3dba9f0dfa28e1526aef",
        1721: "dc1616bac9b1fda9d295",
        1724: "ec430b426f0e3feea4fa",
        1783: "3d4683547897dee172b9",
        1880: "aa851da20ddca6a58b4d",
        1951: "864a3575343204d4e505",
        2021: "40e8348b23daf0db1d49",
        2079: "dbd91193aa56b41d368a",
        2092: "91a4d34cf4743c7faead",
        2121: "f1bb87abbb896001608d",
        2199: "3bdac825c20b74eaedd8",
        2446: "29b09f35e9635a9b3073",
        2481: "69f34464d4a7bc7c0f5c",
        2588: "c232e73edeaaec94378d",
        2664: "27dc8008da835d1d9671",
        2744: "3effa60d801d964b3fac",
        2780: "c21703fe588b7d815750",
        2959: "9efcf1b4c3600aa56e33",
        2974: "33b0b0d98ddf97ccf5af",
        3140: "55a5826215792de0804e",
        3156: "57a2ab40bd2e65c90cfe",
        3256: "23959a2cc34255e4e843",
        3589: "7eca513ed00adb549c06",
        3594: "d250bbef80de6d22d7f1",
        3781: "579e56a68d8e64bcfaae",
        3867: "69ea4fc8e9b217e9c463",
        3976: "21f986d41d352f37ba94",
        4009: "7bf7a1a4ca5e82a6bff8",
        4055: "c0d51ebdbcccb52b55fd",
        4072: "77d757a00e0f40e28a42",
        4102: "0ce24248c3c1d6f4f705",
        4268: "421958db38f184b8da0c",
        4278: "6263ceb1089b30ecaeec",
        4317: "97a1dd058cba565f4c65",
        4694: "4717006fb9e73173b3bd",
        4922: "953a0f2e92fa7c404c03",
        4952: "cd346051fecb695e0aef",
        5043: "96bb5b7f2a70b2e2be8b",
        5052: "14d0b5db0ac770ecc75a",
        5082: "71a78cf07260718362fc",
        5103: "5f3f8234f27d1740fe1a",
        5184: "c36d63ebc5118baf6395",
        5263: "51caa1631ab05afef7f0",
        5278: "8eca1c7f6b888330ed6d",
        5340: "e9c431fd6efe0b751858",
        5366: "b9b29483ed0b2d373ea1",
        5388: "6d54576925787e14256e",
        5553: "c3a912e6588948e99d6e",
        5633: "2ffbf18b870ce77437bb",
        5651: "91567d8d4f868ac7613e",
        5801: "bddf050a7983e562f908",
        5803: "5774baa099ebba92ccf9",
        5836: "466f657c684be6334f3a",
        5876: "aaef7e47bea16aef7325",
        5955: "e3f7fe8be2a08ebcff88",
        6120: "a911ed9cb7bf09fbde9e",
        6209: "a907013e6a31268a0681",
        6295: "a139e68e4db080fbd6f6",
        6428: "5abc6745a030e9804e7b",
        6430: "32d2d86c9eeac9886075",
        6466: "d7b0b0f121e0b89884bb",
        6472: "0d43e0661e15011fc1f0",
        6528: "95eb7481081563997fe1",
        6577: "9fc74566975cb24e3cc7",
        6635: "cd3d6e394daeee8b6f2a",
        6662: "6f265b9b6cdf59c7a889",
        6752: "42eb3e010f47cfdfeae2",
        6804: "0f6e44d85093ec6bb0ae",
        6888: "58f3635a025a6f7c9640",
        6893: "089bf13cca9579c041f3",
        6966: "d4044771bf8f29a627b3",
        7055: "e7893b4ce48f1db03942",
        7097: "d98baaf8c5cbeb24364b",
        7121: "16016e18201c84641b69",
        7326: "8ec3a7a37e180c5b2aae",
        7345: "92197224d2a822db2163",
        7442: "bb1627a4c7469005c075",
        7548: "a6582de0c753caec163f",
        7553: "dfc8f030b0cf474d873c",
        7561: "b6a3d524d2d7d31110cf",
        7634: "e104c06e0f9c55276022",
        7639: "26c8f3bdcad84cf5a059",
        7696: "6c7c29352a2513242c9e",
        7724: "23b36a6eeec547475adc",
        7872: "0351b7502ed8bfee018e",
        7958: "223c8d0c06cd44828b86",
        8021: "b1d34d3b19fe7e7a9006",
        8064: "658b9a40bf55123d7e16",
        8138: "e46a968b5d32b9bcc0ee",
        8239: "bae2c329b732d83e286e",
        8291: "f196ec5e71120d41b347",
        8396: "0a4dd71be1afa4a7cff6",
        8443: "18012b8dff03f4a1f5e5",
        8453: "fdb8d5bf310a7307da45",
        8521: "46dd28be5bfcdd6d8212",
        8522: "8835dbaf444388c67d25",
        8541: "016f9ba3ba670aa990f5",
        8547: "2fbeaf1c03b29317bf75",
        8674: "5645cead10ef29cf60cf",
        8724: "fdb237e5960980fff70b",
        8732: "a6d735474407aa081e1b",
        8749: "abc22ec287f05788f1e1",
        8780: "e5b87db8344013a51c6e",
        8872: "19b31e6f90f2eb9c2840",
        9053: "a316396ddefb19d36b6c",
        9118: "f1fad216dabb042af332",
        9129: "067c87b5aa299e40c4e9",
        9298: "7b2afc696c9a7e12bebf",
        9367: "845683fc8c049e8c827f",
        9387: "f11fd3392800b798b4c8",
        9402: "8d18d84791d390e31061",
        9436: "88468d0cee2de1c5150f",
        9453: "4b34540191238deebc7e",
        9505: "a20b118f38a68b4ce483",
        9515: "eff1037fe2ddf5e7cf84",
        9517: "688a2da5ee0244fdbb3d",
        9536: "b5bfdf3dd4f48bb33eb3",
        9617: "3e5cb211c045c9e969c2",
        9638: "41a1cbeb268b928d0920",
        9743: "ca9a1e883744b73bccf7",
        9774: "73c77b04cf543dc2ba44",
        9783: "e75e0a8a23ce1867e25d",
        9855: "e79e5cd6f8d15747ca3c",
        9857: "f3a13e65edf011350b26",
        9869: "37eabcfb938215083322",
        9870: "08f8be36f838e3c2c76d",
        9914: "ea34f90b56e1914104b6",
      }[a]),
    (f.miniCssF = (a) =>
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
        3156: "832763fad125022e3457",
        3256: "c862342a585835e80c54",
        3781: "a0d93b248f31e86cf960",
        4268: "558bc776601a931c1489",
        5278: "7ad41ee51bad4c4189d1",
        5836: "012b734f1a7ae3ee2447",
        5876: "07b3cb346c58c180dfe2",
        6635: "8a47d89b9c2405919d78",
        6662: "4ad447c861db0fe1b63d",
        6893: "b640cecb2ca8794180c2",
        6966: "a66289e969ece5d1faad",
        7561: "789dd1fbdb6c6b5c773d",
        7634: "b0bb35885b4aadc7f103",
        8138: "4eafcd050df39923be33",
        8396: "9fe38f7c04dc6be35a29",
        8521: "e5371bed29326965f77a",
        8780: "ca0badd36e5471da9d77",
        9118: "197910a7dcee5b972bd3",
        9129: "e0ae5f099a75f693e3de",
        9505: "60c352e8d534fddd2005",
        9638: "44a5d3dd2f0f81100e05",
        9774: "b7ec8c46f92df25721ec",
      }[a]),
    (f.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (a) {
        if ("object" == typeof window) return window;
      }
    })()),
    (f.o = (a, e) => Object.prototype.hasOwnProperty.call(a, e)),
    (o = {}),
    (c = "community:"),
    (f.l = (a, e, n, i) => {
      if (o[a]) o[a].push(e);
      else {
        var d, s;
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
          ((s = !0),
          ((d = document.createElement("script")).charset = "utf-8"),
          (d.timeout = 120),
          f.nc && d.setAttribute("nonce", f.nc),
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
          s && document.head.appendChild(d);
      }
    }),
    (f.r = (a) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (f.nmd = (a) => ((a.paths = []), a.children || (a.children = []), a)),
    (f.p = ""),
    (() => {
      if ("undefined" != typeof document) {
        var a = (a) =>
            new Promise((e, n) => {
              var o = f.miniCssF(a),
                c = f.p + o;
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
                          f = (n && n.target && n.target.href) || e,
                          s = new Error(
                            "Loading CSS chunk " +
                              a +
                              " failed.\n(" +
                              d +
                              ": " +
                              f +
                              ")",
                          );
                        (s.name = "ChunkLoadError"),
                          (s.code = "CSS_CHUNK_LOAD_FAILED"),
                          (s.type = d),
                          (s.request = f),
                          i.parentNode && i.parentNode.removeChild(i),
                          c(s);
                      }
                    }),
                  (i.href = e),
                  n
                    ? n.parentNode.insertBefore(i, n.nextSibling)
                    : document.head.appendChild(i);
              })(a, c, null, e, n);
            }),
          e = { 4556: 0 };
        f.f.miniCss = (n, o) => {
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
      (f.f.j = (e, n) => {
        var o = f.o(a, e) ? a[e] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (4556 != e) {
            var c = new Promise((n, c) => (o = a[e] = [n, c]));
            n.push((o[2] = c));
            var i = f.p + f.u(e),
              d = new Error();
            f.l(
              i,
              (n) => {
                if (f.o(a, e) && (0 !== (o = a[e]) && (a[e] = void 0), o)) {
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
        (f.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var o,
            c,
            [i, d, s] = n,
            l = 0;
          if (i.some((e) => 0 !== a[e])) {
            for (o in d) f.o(d, o) && (f.m[o] = d[o]);
            if (s) var t = s(f);
          }
          for (e && e(n); l < i.length; l++)
            (c = i[l]), f.o(a, c) && a[c] && a[c][0](), (a[c] = 0);
          return f.O(t);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();

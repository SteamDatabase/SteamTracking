/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "9190056";
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
        60: "ad6c3209b3843eb212af",
        91: "8ce86a826dded5f9f2fe",
        129: "322ec5050d365c3e8185",
        139: "42b8b957c832d0931c06",
        198: "8d251881caa05a8a74f8",
        231: "2c39c12348091b7af1b9",
        258: "fe9755994dfdac180e0b",
        286: "6069d892367df0dd4834",
        297: "12e5f6ae019d58943b40",
        537: "276f40b767e317245ad4",
        657: "41c5a78c5733ddb6375e",
        759: "5e67e85ba1759125daa7",
        823: "9435922455963ef56127",
        831: "bc3a4aa57dcf933fdde0",
        833: "11e81d8cd0f74d125694",
        926: "6c4d436c76a4121b95b6",
        976: "1ebf04803c9ad78173d8",
        1023: "19dce2a8978d2c1b5bcd",
        1063: "9ecf9cc6c78d0325aaf3",
        1220: "29a80b5c8f5efc468247",
        1389: "415675081aa34c8c9501",
        1410: "9f2ee4f6bbea59ce540c",
        1423: "bed73703d5ab1b3276fd",
        1551: "3dba9f0dfa28e1526aef",
        1721: "dc1616bac9b1fda9d295",
        1724: "f13b1fbee8dee5a8a62b",
        1783: "3d4683547897dee172b9",
        1880: "aa851da20ddca6a58b4d",
        1951: "864a3575343204d4e505",
        2021: "b2b5b55c737b75bbff2e",
        2079: "22af7834d349ed76b446",
        2092: "91a4d34cf4743c7faead",
        2121: "f1bb87abbb896001608d",
        2199: "a3888234774715dc9012",
        2446: "4b11235a41a8ce6f8b34",
        2481: "efde1f19629276d9d5c8",
        2588: "c232e73edeaaec94378d",
        2664: "fd55e5f3bcc4a41495db",
        2744: "3effa60d801d964b3fac",
        2780: "c21703fe588b7d815750",
        2959: "9efcf1b4c3600aa56e33",
        2974: "aa83a0d48099ce1cef85",
        3140: "e2427ed023c7ab9fbc6f",
        3156: "89a48616607c652834a2",
        3256: "23959a2cc34255e4e843",
        3589: "56668cd9994e04a5f058",
        3594: "7700df719e9d36144956",
        3781: "579e56a68d8e64bcfaae",
        3867: "3d5e454a935eeb3dfa81",
        3976: "21f986d41d352f37ba94",
        4009: "7bf7a1a4ca5e82a6bff8",
        4055: "c0d51ebdbcccb52b55fd",
        4072: "77d757a00e0f40e28a42",
        4102: "e89088263a299889827f",
        4268: "421958db38f184b8da0c",
        4278: "6263ceb1089b30ecaeec",
        4317: "97a1dd058cba565f4c65",
        4694: "d545388c8e193deaed77",
        4922: "953a0f2e92fa7c404c03",
        4952: "6a65d8d4c310ed7cff79",
        5043: "96bb5b7f2a70b2e2be8b",
        5052: "a96ced05daeea2c843ac",
        5082: "71a78cf07260718362fc",
        5103: "5f3f8234f27d1740fe1a",
        5184: "c36d63ebc5118baf6395",
        5263: "51caa1631ab05afef7f0",
        5278: "8eca1c7f6b888330ed6d",
        5340: "6b76d87fa45a2d54e328",
        5366: "b9b29483ed0b2d373ea1",
        5388: "2cea5ec9d7a7d179ce80",
        5553: "0d3cee05efc196c5f29b",
        5633: "2ffbf18b870ce77437bb",
        5651: "91567d8d4f868ac7613e",
        5801: "bddf050a7983e562f908",
        5803: "451b8d23e4a148557e17",
        5836: "466f657c684be6334f3a",
        5876: "12b8cc955998ffdb7202",
        5955: "e3f7fe8be2a08ebcff88",
        6120: "4fed9b0a3f087f968eec",
        6209: "4d3b99d49d0377c9dbae",
        6295: "a139e68e4db080fbd6f6",
        6428: "00897f41f922da1565b5",
        6430: "c392d9985c53fde32309",
        6466: "d7b0b0f121e0b89884bb",
        6472: "62a913255ea181f4ba33",
        6528: "95eb7481081563997fe1",
        6577: "b7d3fa709732e54b6643",
        6635: "b52199bbd23236a06459",
        6662: "93b9305831468d90640f",
        6752: "11c8653d803dae1b801c",
        6804: "0f6e44d85093ec6bb0ae",
        6888: "5a823cac9cfaea5af999",
        6893: "089bf13cca9579c041f3",
        6966: "d4044771bf8f29a627b3",
        7097: "d98baaf8c5cbeb24364b",
        7121: "16016e18201c84641b69",
        7326: "8ec3a7a37e180c5b2aae",
        7345: "be310b8d57f7ae594c38",
        7442: "12be295a5500e1749821",
        7548: "a6582de0c753caec163f",
        7553: "ac284f44e8ea023c14c2",
        7561: "b6a3d524d2d7d31110cf",
        7634: "b44e77790a33844bb8d9",
        7639: "26c8f3bdcad84cf5a059",
        7696: "a40cd34d80ddcd55a732",
        7724: "e0852f0c1f3b0212bb4e",
        7872: "0351b7502ed8bfee018e",
        7958: "223c8d0c06cd44828b86",
        8021: "c9c9390e6bda98a61f5f",
        8064: "658b9a40bf55123d7e16",
        8138: "e46a968b5d32b9bcc0ee",
        8239: "bae2c329b732d83e286e",
        8291: "c3a371958f68284169c9",
        8396: "0a4dd71be1afa4a7cff6",
        8443: "18012b8dff03f4a1f5e5",
        8453: "fdb8d5bf310a7307da45",
        8521: "46dd28be5bfcdd6d8212",
        8522: "9dfc7c4133aeb942f31b",
        8541: "016f9ba3ba670aa990f5",
        8547: "24c5999cdba7c5932b4f",
        8674: "123cc258485490f5ee92",
        8724: "b99d497fb55433f1164f",
        8732: "a6d735474407aa081e1b",
        8749: "9770ada5c0051c63989a",
        8780: "8450bac00192f34a427f",
        8872: "45f5e1aa498644b22a1d",
        9053: "3419d249ee18471df849",
        9118: "c13607e9b272151e371b",
        9129: "067c87b5aa299e40c4e9",
        9298: "8cab080e0b26d94a8332",
        9367: "845683fc8c049e8c827f",
        9387: "9a5a159016689c646d92",
        9402: "8d18d84791d390e31061",
        9436: "88468d0cee2de1c5150f",
        9453: "9f9ebb36036321962a1d",
        9505: "10dbe3edf173d3d24db3",
        9515: "a6cfd082e0bb3b16e0b2",
        9517: "4e6d32d82eea5345fd46",
        9536: "b5bfdf3dd4f48bb33eb3",
        9617: "3e5cb211c045c9e969c2",
        9638: "3f022be09b7bb9867b19",
        9743: "ca9a1e883744b73bccf7",
        9774: "fadaeaf377113927f777",
        9783: "f6b8e9176bdc8e2094d9",
        9855: "e79e5cd6f8d15747ca3c",
        9857: "34216df5e33197744454",
        9869: "e0778114fa6a202c3a28",
        9870: "08f8be36f838e3c2c76d",
        9914: "d7fbe7277166b1f44115",
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
        1220: "77d6314c47e6acb268e7",
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
        6662: "4ad447c861db0fe1b63d",
        6893: "b640cecb2ca8794180c2",
        6966: "a66289e969ece5d1faad",
        7561: "789dd1fbdb6c6b5c773d",
        7634: "b0bb35885b4aadc7f103",
        8138: "4eafcd050df39923be33",
        8396: "9fe38f7c04dc6be35a29",
        8521: "e5371bed29326965f77a",
        8780: "daec37da99460dc302a4",
        9118: "197910a7dcee5b972bd3",
        9129: "e0ae5f099a75f693e3de",
        9505: "60c352e8d534fddd2005",
        9638: "44a5d3dd2f0f81100e05",
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
            var r = l[t];
            if (
              r.getAttribute("src") == a ||
              r.getAttribute("data-webpack") == c + n
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
          d.setAttribute("data-webpack", c + n),
          (d.src = a)),
          (o[a] = [e]);
        var b = (e, n) => {
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

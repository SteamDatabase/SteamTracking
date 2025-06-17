/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "9838752";
(() => {
  "use strict";
  var a,
    e,
    n,
    c,
    o,
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
    (f.O = (e, n, c, o) => {
      if (!n) {
        var i = 1 / 0;
        for (t = 0; t < a.length; t++) {
          for (var [n, c, o] = a[t], d = !0, s = 0; s < n.length; s++)
            (!1 & o || i >= o) && Object.keys(f.O).every((a) => f.O[a](n[s]))
              ? n.splice(s--, 1)
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
    (f.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return f.d(e, { a: e }), e;
    }),
    (n = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (f.t = function (a, c) {
      if ((1 & c && (a = this(a)), 8 & c)) return a;
      if ("object" == typeof a && a) {
        if (4 & c && a.__esModule) return a;
        if (16 & c && "function" == typeof a.then) return a;
      }
      var o = Object.create(null);
      f.r(o);
      var i = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var d = 2 & c && a; "object" == typeof d && !~e.indexOf(d); d = n(d))
        Object.getOwnPropertyNames(d).forEach((e) => (i[e] = () => a[e]));
      return (i.default = () => a), f.d(o, i), o;
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
        258: "eventinternal",
        286: "localization/main_ukrainian-json",
        297: "localization/sales_german-json",
        349: "itemscollection",
        466: "chunk~c59481a89",
        537: "localization/sales_brazilian-json",
        638: "chunk~c795c70e7",
        657: "chunk~03410565e",
        759: "localization/main_koreana-json",
        823: "localization/shared_portuguese-json",
        831: "localization/main_danish-json",
        833: "localization/main_vietnamese-json",
        926: "localization/sales_danish-json",
        976: "greenenvelope",
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
        2156: "libraries~5dc0f3ae9",
        2199: "localization/shared_finnish-json",
        2446: "localization/main_brazilian-json",
        2481: "localization/shared_bulgarian-json",
        2588: "localization/sales_finnish-json",
        2664: "localization/shared_english-json",
        2694: "chunk~52ce742d4",
        2744: "localization/sales_latam-json",
        2754: "libraries~9e353dc2d",
        2780: "localization/sales_sc_schinese-json",
        2959: "localization/shared_polish-json",
        2979: "chunk~4bfe428b8",
        3008: "chunk~9e353dc2d",
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
        4102: "localization/main_indonesian-json",
        4268: "events",
        4278: "localization/sales_hungarian-json",
        4317: "chunk~c7a3fa389",
        4558: "chunk~5dc0f3ae9",
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
        6541: "chunk~8c78b763c",
        6577: "localization/shared_russian-json",
        6635: "chunk~f036ce556",
        6662: "eventeditor",
        6752: "localization/shared_spanish-json",
        6888: "localization/shared_german-json",
        6893: "notifications",
        6966: "login",
        7097: "localization/sales_ukrainian-json",
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
        8026: "libraries~05a83ef84",
        8064: "localization/sales_japanese-json",
        8104: "chunk~05a83ef84",
        8138: "profile",
        8239: "localization/sales_turkish-json",
        8291: "localization/shared_danish-json",
        8396: "broadcast",
        8443: "localization/shared_sc_schinese-json",
        8453: "chunk~8e45aed72",
        8502: "monaco",
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
        9436: "libraries~69438e232",
        9453: "localization/main_swedish-json",
        9505: "chunk~d2dd7ecf6",
        9515: "localization/main_czech-json",
        9517: "chunk~d3aa4b017",
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
        60: "b62ad9bef760abbdda34",
        91: "1e84d945270f207e8647",
        129: "b89393de988d6e9a4f38",
        139: "7db4b7d082f3e816514f",
        198: "3a0d836eeefca73a4543",
        258: "420386e11674213f536f",
        286: "e2be6fd940c88be164c3",
        297: "e2821c113200b0a88a6c",
        349: "5e7396eee926ff4d4adc",
        466: "2a1794388cfd40bdde4d",
        537: "aff6676ce2858f3dba5c",
        638: "c9bfc5c7937d1caf456c",
        657: "885e3e3c5fd2be6bd519",
        759: "7b344f5e5ba31dc7b79b",
        823: "ccab4585d46b3d70f4b9",
        831: "5f14f86c8fc765528ffd",
        833: "42074112f128b40179b3",
        926: "0719dd3d557b76434f55",
        976: "93eb5987f6df714b0cc3",
        1063: "e5a989f5e86a4c008105",
        1220: "74f7fd8fd501da025689",
        1389: "1626fabb64a23835dea4",
        1410: "3198d43878966886b436",
        1423: "12b42a196918d80eb015",
        1551: "8cfb5af805c9554fced3",
        1721: "dc1616bac9b1fda9d295",
        1724: "d7ab2a40d07a9a00f1bc",
        1783: "1aa4e05bb0c41cf3bd16",
        1880: "241e3d6a1f6ef36930c0",
        1951: "369324979d7e884818d1",
        1985: "c5c85ef23daea3bbafd4",
        2021: "24c3357a61968ef781fd",
        2079: "26a840a4e7c6ccc2e324",
        2092: "b5394e4c7fba407011a3",
        2156: "04d139ca2823d3739fd1",
        2199: "940ee3ff5df23de2e9d8",
        2395: "df2d2182ce4be4d93ff0",
        2446: "f8172845b3076991729b",
        2450: "42023e6343d570f4e3ed",
        2481: "5d151af7446c099dd969",
        2588: "05a87dabff1cd6227321",
        2664: "27796a918c4985f74a72",
        2694: "a5d8d1be8d98ca6d9104",
        2744: "f921ad9dee4cef66967c",
        2754: "ca3e6cedca1bbb5c085a",
        2780: "6b71d59bc576b4ed735a",
        2959: "59edca030112510fff69",
        2979: "4114d0ffdcb83fa1b446",
        3008: "54690d52a73c2867a67d",
        3140: "62a72b0fb13e4748d499",
        3156: "aae16acdf812897d5c38",
        3256: "14186821532aeaff3397",
        3418: "dbe77d927a861b4d641a",
        3589: "b62cbc57509cd6c2eca4",
        3594: "7a724171a1cd89d3e2dc",
        3781: "dcd94ae6c8631f441afa",
        3867: "2b16f115c88b4a3310ba",
        3976: "e8f0df2cc1c09f9725ce",
        4009: "ec51675ec9a408c62b1b",
        4055: "bb3137e10c6d7c73ae82",
        4102: "efc8ebf84aaffbfe4d9f",
        4268: "38a27a215fa9a012459b",
        4278: "6cc7df6e5227f6be8be2",
        4317: "e4af14e9af40751aa7fd",
        4558: "4313a1e54601d6756dd4",
        4694: "a8fd6668b200d3f74a21",
        4922: "953a0f2e92fa7c404c03",
        4952: "531e1d1db0886902302b",
        5043: "445cbb7f84e9897c7848",
        5052: "107501fed154f64dd407",
        5082: "8ffb3c43812397edea97",
        5103: "27b62fc86a628faa9228",
        5184: "b8d78da8dcdd224ff0ea",
        5263: "d81a7032cdb2cdf7bddb",
        5278: "711a3587070d3252cdb7",
        5366: "be12f7197fd24d7313bd",
        5388: "f9d329ef4c66ca7426e3",
        5553: "7d59f8d75123236dc7e2",
        5633: "24595cd4fcc8e64a5962",
        5651: "8ab1d3bd7aaec93c6111",
        5803: "439b340e1b990c5b1159",
        5834: "37079716f2f7098c2132",
        5836: "009b862ce20b81b012a6",
        5876: "00397f5e44a8fc8c1eb0",
        5955: "7f940c4c852309ceacb1",
        6120: "e0e708153a7e128fe65c",
        6200: "7dcb0ec47d708a7a1dca",
        6209: "6c1fa0406e660401098c",
        6295: "6459987be818472ed2b1",
        6428: "2f6bc4497ff04cc05323",
        6430: "6735eca7cde4ad650d00",
        6466: "379bd5196612f67560e9",
        6472: "83cadaaeb4d2440ac087",
        6528: "29542f61947d0478b771",
        6541: "b3ed85aedbbbb562b4ef",
        6577: "0041ea3205e2bf511005",
        6635: "860465f260fcc54354d6",
        6662: "8677266cc452bc31e12c",
        6688: "dc30e077d1ff0a9d7e36",
        6752: "b5caa4a63babdcb29179",
        6888: "b1a91579487a7e364af0",
        6893: "ec8b60ff23601823682c",
        6966: "d4044771bf8f29a627b3",
        7082: "bc31c2da38a7ecacce4e",
        7097: "f9e399f0aa47159a7933",
        7326: "90c56dc1684f621d0682",
        7345: "0813c3bebd49cc4f1aa4",
        7442: "113037c47621b0ef82d1",
        7548: "a6582de0c753caec163f",
        7553: "085d30ce56c1172dd603",
        7561: "b6a3d524d2d7d31110cf",
        7634: "5290685c8763db355d75",
        7639: "7c216d015f7418363b39",
        7679: "78cb0557705b33f3188c",
        7696: "c1a855cb886d6e5dbf79",
        7724: "cf2d2a79b724573926ef",
        7760: "b920ec45401af12eb4b5",
        7872: "8e590e034d0fd4fed343",
        7958: "bc1c416358ae578661ae",
        8021: "af8d52308e80088ca6a0",
        8026: "e04d8dd96d444e4ebc92",
        8064: "aeac389cea466657bd10",
        8104: "b76131478e71af40196a",
        8138: "5d33b88329dbbe68fae6",
        8239: "0a024b96b79e82807956",
        8291: "6e1bdcd1224b9aa49305",
        8396: "4f9f3e6de142eed796e4",
        8443: "44c47593a5225a54b4a8",
        8453: "ff008394a662af8cd7ec",
        8502: "99d11baf4be505c08e94",
        8521: "35053dcce714d03d5112",
        8522: "a2d0b3c7a06d586b3b1a",
        8541: "f2ac11c021a8e1fa84b9",
        8547: "6c1c617ffa4fe41a0a14",
        8674: "16fbe75a6a1ec6f1f592",
        8724: "4d4177618f7b8ea1b3b9",
        8732: "d91d5d41490a3efd5220",
        8749: "c5a2a9e783967798f07b",
        8780: "14b1374fa0092da4470a",
        8872: "83e34a584326402e1bff",
        8889: "0519d7d321b21a926c50",
        9053: "7b3c96e42bddbdc1ba00",
        9118: "05ab566faf1774d6f0fe",
        9129: "489672153001d923d960",
        9298: "cde46d2a7e9054ef263e",
        9367: "23c9c959a6b41d387c8f",
        9387: "028da0fcba57ef000f05",
        9390: "ccdf3a8b8810a9979953",
        9402: "eedbe784e46da2423cb5",
        9436: "65bc568705df53d2ad3a",
        9453: "bd13f2b309af262d4dca",
        9505: "25d31b9deec4ed89f647",
        9515: "f24d785402e7e868d39a",
        9517: "acdb88210a0db2b9fe83",
        9617: "3e5cb211c045c9e969c2",
        9638: "b97d0b8671105c6afe6f",
        9743: "b2d9587e4009a994b616",
        9774: "d453de34a8222b1403d2",
        9783: "880d1b39c92b56a9d087",
        9855: "b9b59b28dbca93fef1b8",
        9857: "b233e60585c38a3ed280",
        9869: "13f8b2b5800dd3b734be",
        9870: "552788d5dbebfc53e4cd",
        9914: "c0f91bcdbf5cda9a838e",
      }[a]),
    (f.miniCssF = (a) =>
      "css/applications/community/" +
      ({
        91: "libraries~362728d1f",
        258: "eventinternal",
        349: "itemscollection",
        976: "greenenvelope",
        1220: "gamenotes",
        2079: "broadcasts",
        2092: "communityhomeheader",
        2694: "chunk~52ce742d4",
        3156: "gr",
        3256: "chunk~7a7b104fb",
        3781: "communityfaqs",
        4268: "events",
        4558: "chunk~5dc0f3ae9",
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
      }[a] || a) +
      ".css?contenthash=" +
      {
        91: "0bea5cb2f0cd89a8b828",
        258: "c82658532a547a6c0b32",
        349: "a8e26c7493b258280504",
        976: "31af4ce18cebd2b3857f",
        1220: "8ea54cadb8eb42226114",
        2079: "b09f8d76c4af8c5f2c00",
        2092: "54c04a83fb19118665fe",
        2694: "816c6c29940416f316c6",
        3156: "a76dc33b5e94d2acd794",
        3256: "1a8e226864678862c504",
        3418: "a6c633ebde05717707fa",
        3781: "fcd3b641e75ba36b82d3",
        4268: "558bc776601a931c1489",
        4558: "a2137453d8bac6c98114",
        5278: "7ad41ee51bad4c4189d1",
        5836: "383dc495c4c2102cb1ec",
        5876: "9ca3a4842a7ed096746b",
        6635: "0d3d69f2f2bf2c25a2c8",
        6662: "7e632cd6e9c982fc273c",
        6688: "93ca90b9dd015cb7b457",
        6893: "8d682a3ae9e9f5bfaa84",
        6966: "a66289e969ece5d1faad",
        7561: "789dd1fbdb6c6b5c773d",
        7634: "1a410fef2253df6a0a34",
        7760: "f7f32c445744d4afc333",
        8138: "1b89ac2550a5ae29c0d5",
        8396: "e53dd7f5e3feba02531b",
        8521: "21d9a32d7ca591f5741b",
        8780: "c7b3a5bf41c2140cf55b",
        9118: "16148154beaf28569e5e",
        9129: "e0ae5f099a75f693e3de",
        9390: "008342030b808c44b1da",
        9505: "38fbd48d93238aa239f0",
        9638: "81a36b31753d566ca447",
        9774: "72805dcba4f1768a93a1",
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
    (c = {}),
    (o = "community:"),
    (f.l = (a, e, n, i) => {
      if (c[a]) c[a].push(e);
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
              b.getAttribute("data-webpack") == o + n
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
              var c = f.miniCssF(a),
                o = f.p + c;
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
                          o(s);
                      }
                    }),
                  (i.href = e),
                  n
                    ? n.parentNode.insertBefore(i, n.nextSibling)
                    : document.head.appendChild(i);
              })(a, o, null, e, n);
            }),
          e = { 4556: 0 };
        f.f.miniCss = (n, c) => {
          e[n]
            ? c.push(e[n])
            : 0 !== e[n] &&
              {
                91: 1,
                258: 1,
                349: 1,
                976: 1,
                1220: 1,
                2079: 1,
                2092: 1,
                2694: 1,
                3156: 1,
                3256: 1,
                3418: 1,
                3781: 1,
                4268: 1,
                4558: 1,
                5278: 1,
                5836: 1,
                5876: 1,
                6635: 1,
                6662: 1,
                6688: 1,
                6893: 1,
                6966: 1,
                7561: 1,
                7634: 1,
                7760: 1,
                8138: 1,
                8396: 1,
                8521: 1,
                8780: 1,
                9118: 1,
                9129: 1,
                9390: 1,
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
      (f.f.j = (e, n) => {
        var c = f.o(a, e) ? a[e] : void 0;
        if (0 !== c)
          if (c) n.push(c[2]);
          else if (/^(4556|6688|8396)$/.test(e)) a[e] = 0;
          else {
            var o = new Promise((n, o) => (c = a[e] = [n, o]));
            n.push((c[2] = o));
            var i = f.p + f.u(e),
              d = new Error();
            f.l(
              i,
              (n) => {
                if (f.o(a, e) && (0 !== (c = a[e]) && (a[e] = void 0), c)) {
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
        (f.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var c,
            o,
            [i, d, s] = n,
            l = 0;
          if (i.some((e) => 0 !== a[e])) {
            for (c in d) f.o(d, c) && (f.m[c] = d[c]);
            if (s) var t = s(f);
          }
          for (e && e(n); l < i.length; l++)
            (o = i[l]), f.o(a, o) && a[o] && a[o][0](), (a[o] = 0);
          return f.O(t);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();

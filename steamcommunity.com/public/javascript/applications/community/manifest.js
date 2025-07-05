/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "9879855";
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
        6577: "localization/shared_russian-json",
        6635: "chunk~f036ce556",
        6662: "eventeditor",
        6752: "localization/shared_spanish-json",
        6888: "localization/shared_german-json",
        6893: "notifications",
        6966: "login",
        7055: "libraries~69438e232",
        7097: "localization/sales_ukrainian-json",
        7326: "localization/sales_swedish-json",
        7345: "localization/main_hungarian-json",
        7442: "localization/shared_schinese-json",
        7553: "localization/main_romanian-json",
        7561: "communityawardsapp",
        7596: "libraries~7bb437d7f",
        7634: "chunk~8f4f68fd6",
        7639: "localization/sales_french-json",
        7696: "localization/shared_italian-json",
        7724: "localization/main_thai-json",
        7958: "localization/sales_polish-json",
        8021: "localization/main_russian-json",
        8024: "chunk~ce004a4b9",
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
        60: "716df654fc6719fe4604",
        91: "1e84d945270f207e8647",
        129: "f9d58fffbc884737c394",
        139: "b7b41e581c20b1e33112",
        198: "3304d4e1f08d6ff8ad5a",
        258: "420386e11674213f536f",
        286: "a19d77a345d2b4bd3f2b",
        297: "e2821c113200b0a88a6c",
        349: "5e7396eee926ff4d4adc",
        466: "2a1794388cfd40bdde4d",
        537: "aff6676ce2858f3dba5c",
        638: "d5b1a01df39db01f3316",
        657: "885e3e3c5fd2be6bd519",
        759: "780234cae738ff2829c1",
        823: "766bb9e5ae9c3f4895c8",
        831: "4754d0387cf7bce6fa62",
        833: "cf3e7f9c496dae880034",
        926: "0719dd3d557b76434f55",
        976: "93eb5987f6df714b0cc3",
        1063: "e5a989f5e86a4c008105",
        1220: "462f67031dffa24a2fa6",
        1389: "20cf4c762978761518cb",
        1410: "3198d43878966886b436",
        1423: "9aec2a77e50faac57737",
        1551: "8cfb5af805c9554fced3",
        1721: "dc1616bac9b1fda9d295",
        1724: "c54654312464375aab3c",
        1783: "1aa4e05bb0c41cf3bd16",
        1880: "241e3d6a1f6ef36930c0",
        1951: "369324979d7e884818d1",
        1985: "c5c85ef23daea3bbafd4",
        2021: "4245051e5fbcc6736ce7",
        2079: "26a840a4e7c6ccc2e324",
        2092: "b5394e4c7fba407011a3",
        2156: "b974b3b1b92054ae1da0",
        2199: "164a125d4878c4f3fc75",
        2395: "b0206e71a95abe706847",
        2446: "b2c34f5c6ee5a314f185",
        2450: "42023e6343d570f4e3ed",
        2481: "fea860d7ff8d87a81cbd",
        2588: "05a87dabff1cd6227321",
        2664: "0fe3d67dbee879588525",
        2694: "a5d8d1be8d98ca6d9104",
        2744: "f921ad9dee4cef66967c",
        2754: "24c4518b7a21337e3eca",
        2780: "6b71d59bc576b4ed735a",
        2959: "efa53638aa82208b19df",
        3140: "c0122de32d1619eb37d5",
        3156: "aae16acdf812897d5c38",
        3256: "14186821532aeaff3397",
        3418: "dbe77d927a861b4d641a",
        3589: "d415b855139fdcb1e01d",
        3594: "00b28fa4598900216850",
        3781: "7e69e9da7f9d695802d7",
        3867: "e5298e8ecc1d974bb269",
        3976: "e8f0df2cc1c09f9725ce",
        4009: "ec51675ec9a408c62b1b",
        4055: "bb3137e10c6d7c73ae82",
        4072: "569a6301e6b27661440a",
        4102: "ed214bfa231fe7dd0a30",
        4268: "38a27a215fa9a012459b",
        4278: "6cc7df6e5227f6be8be2",
        4317: "e4af14e9af40751aa7fd",
        4558: "05f7dc463771dec51c47",
        4694: "caf8f0a1c1b58ec69767",
        4922: "953a0f2e92fa7c404c03",
        4952: "a27a5710496debd6c359",
        5043: "445cbb7f84e9897c7848",
        5052: "833ab8a1ddff7382af63",
        5082: "8ffb3c43812397edea97",
        5103: "27b62fc86a628faa9228",
        5184: "b8d78da8dcdd224ff0ea",
        5263: "d81a7032cdb2cdf7bddb",
        5278: "711a3587070d3252cdb7",
        5366: "be12f7197fd24d7313bd",
        5388: "74beff152f7df9eb9334",
        5553: "47593eb457759ddf2275",
        5633: "24595cd4fcc8e64a5962",
        5651: "8ab1d3bd7aaec93c6111",
        5803: "e41bbac9dd2cbe5c7c27",
        5834: "37079716f2f7098c2132",
        5836: "d7b2a9271008bda37d2d",
        5876: "fd880cd25b65ad6bf338",
        5955: "05e72d6282624b349b27",
        6120: "0d679bbdcb367301a3fa",
        6200: "7dcb0ec47d708a7a1dca",
        6209: "6c1fa0406e660401098c",
        6295: "6459987be818472ed2b1",
        6428: "49b99045e09b7539d7c6",
        6430: "1da966edf2fd514987c3",
        6466: "379bd5196612f67560e9",
        6472: "eaf35e9dcc18e41d9019",
        6528: "29542f61947d0478b771",
        6577: "c0189431efc95e4b3a10",
        6635: "860465f260fcc54354d6",
        6662: "589362ae0d36f16f2a91",
        6688: "dc30e077d1ff0a9d7e36",
        6752: "b9d449acb86f3b82eaea",
        6888: "ffe4b9249969d22f65c7",
        6893: "ec8b60ff23601823682c",
        6966: "d4044771bf8f29a627b3",
        7055: "d9af88ce19c4ba05f2c8",
        7082: "bc31c2da38a7ecacce4e",
        7097: "f9e399f0aa47159a7933",
        7326: "90c56dc1684f621d0682",
        7345: "12550904b7e705fafeac",
        7442: "36991a772c5207d97521",
        7548: "a6582de0c753caec163f",
        7553: "66f8080ed323410ce859",
        7561: "b6a3d524d2d7d31110cf",
        7596: "73d157c290dbb8f064ce",
        7634: "e6c48466bd992943117f",
        7639: "7c216d015f7418363b39",
        7679: "78cb0557705b33f3188c",
        7696: "18aa50e93c145e6cb99e",
        7724: "2f3ddbc633845bf50afc",
        7760: "50342a7b937afee862bd",
        7933: "5e11ec92831c72d5c079",
        7958: "bc1c416358ae578661ae",
        8021: "4e2ed7b651dd48a27668",
        8024: "7a40bbc393af55a4704d",
        8026: "e04d8dd96d444e4ebc92",
        8064: "aeac389cea466657bd10",
        8104: "b76131478e71af40196a",
        8138: "d4befe19eab4b50063dd",
        8239: "0a024b96b79e82807956",
        8291: "38ed8b79797dcad7490e",
        8396: "4f9f3e6de142eed796e4",
        8443: "44c47593a5225a54b4a8",
        8453: "ff008394a662af8cd7ec",
        8502: "99d11baf4be505c08e94",
        8521: "35053dcce714d03d5112",
        8522: "d32ea8dbbd4ab662996b",
        8541: "f2ac11c021a8e1fa84b9",
        8547: "e84794ec2b1e4e0c9211",
        8674: "7231c43e5a914a3eb873",
        8724: "68aeb0a9f78a1dc43e99",
        8732: "d91d5d41490a3efd5220",
        8749: "3deec4db237dfdb1cdb5",
        8780: "64888da3cd1468cfea71",
        8872: "674ca5cacc301f687ce1",
        8889: "0519d7d321b21a926c50",
        9053: "c15695c6356e2d86357c",
        9118: "8d30264181a5b2787c07",
        9129: "489672153001d923d960",
        9298: "65bdcede54d79058e92e",
        9367: "23c9c959a6b41d387c8f",
        9387: "2682d58b2d48b928033d",
        9402: "eedbe784e46da2423cb5",
        9436: "a2e8dd41aa4c806d6095",
        9453: "c970c7a2bd25e0bdbfba",
        9505: "25d31b9deec4ed89f647",
        9515: "bcf4f7bab3a90458a799",
        9517: "acdb88210a0db2b9fe83",
        9536: "7443223555ee884ece01",
        9617: "3e5cb211c045c9e969c2",
        9638: "6b199d33060f7cec4be8",
        9743: "b2d9587e4009a994b616",
        9774: "f404d6e6a139893cc87e",
        9783: "3b98b086463ee12ac6e0",
        9855: "d8c556facc9be5fe8f98",
        9857: "9b9f51695c2e5d6be58d",
        9869: "8459fcd6605c8bdb8c62",
        9870: "07c5f4cfa5a809131d8b",
        9914: "c364ba2f79e68a701900",
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
        4558: "6ec3b5ce68230a08c2de",
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
        7933: "9befb5322fa18d2c9184",
        8138: "fc73abfe79a665f196e8",
        8396: "e53dd7f5e3feba02531b",
        8521: "21d9a32d7ca591f5741b",
        8780: "412a784971d0fc8a26d6",
        9118: "b6ef7bbd3b0010d9d796",
        9129: "e0ae5f099a75f693e3de",
        9505: "38fbd48d93238aa239f0",
        9774: "98614276c31f580b0b09",
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
                7933: 1,
                8138: 1,
                8396: 1,
                8521: 1,
                8780: 1,
                9118: 1,
                9129: 1,
                9505: 1,
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

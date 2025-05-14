/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "9743614";
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
        9436: "chunk~0c880f568",
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
        60: "4e521486c2b87288481f",
        91: "1e84d945270f207e8647",
        129: "edf087349f08cbd3f9eb",
        139: "0d8c5d1dbd9a875a81db",
        198: "f2f04120505656c49ad1",
        258: "420386e11674213f536f",
        286: "9378a122cba03259ce1b",
        297: "e2821c113200b0a88a6c",
        349: "321bcbd07725065397dc",
        466: "2a1794388cfd40bdde4d",
        537: "aff6676ce2858f3dba5c",
        638: "4a413de101a4ab53edf0",
        657: "fbf8b99b6f0fc277daf1",
        759: "4d247cade552f196be57",
        823: "22ac5110e536cd2ab67e",
        831: "13c72f1722b1a6e2d268",
        833: "3cb8402439c667aeb1d6",
        926: "0719dd3d557b76434f55",
        976: "3bf52c406f2deb376fd7",
        1023: "d4b6545aceaad8e6a54f",
        1063: "6631edb202014152fe60",
        1220: "68f7cb6de13fd5ed25db",
        1389: "0b5ac45a08803ddf7954",
        1410: "3198d43878966886b436",
        1423: "2666705b51c064bed102",
        1551: "8cfb5af805c9554fced3",
        1721: "dc1616bac9b1fda9d295",
        1724: "182ec2ef46046565cca0",
        1783: "1aa4e05bb0c41cf3bd16",
        1880: "241e3d6a1f6ef36930c0",
        1951: "369324979d7e884818d1",
        1985: "c5c85ef23daea3bbafd4",
        2021: "8d06da2adf11f4983a70",
        2079: "c86d4185a967ece2b70f",
        2092: "b5394e4c7fba407011a3",
        2156: "ee8b5f09a0830208ec4e",
        2199: "a815b537f7c5eb9dbfe2",
        2395: "a9f6d0fde3d1c1995476",
        2446: "1cec308307487e14a50f",
        2450: "42023e6343d570f4e3ed",
        2481: "ab6088598a5a8f58247f",
        2588: "05a87dabff1cd6227321",
        2664: "45342b18ed9dd1eca9d0",
        2694: "a5d8d1be8d98ca6d9104",
        2744: "f921ad9dee4cef66967c",
        2754: "b6e1bbd86070e9cee366",
        2780: "6b71d59bc576b4ed735a",
        2959: "f1414c582fa2e10d3834",
        3008: "9141ad040c98a8053194",
        3140: "20dd590495e20bb37587",
        3156: "79c69ddb7fc3ff748e19",
        3256: "3059fa50734b554a0d57",
        3418: "dbe77d927a861b4d641a",
        3589: "60191746995708da8db4",
        3594: "03022f94dd3e9edfce27",
        3781: "19d3b72c10900dab7435",
        3867: "71dd4a7c91a9d147360c",
        3976: "e8f0df2cc1c09f9725ce",
        4009: "ec51675ec9a408c62b1b",
        4055: "bb3137e10c6d7c73ae82",
        4072: "569a6301e6b27661440a",
        4102: "9a3247fe073abe637dd5",
        4268: "c32b8fccf3bb3e735d88",
        4278: "6cc7df6e5227f6be8be2",
        4292: "e6c990b5dcb7cbeac2b1",
        4317: "e4af14e9af40751aa7fd",
        4496: "5f22b1a1763a5d23e35a",
        4558: "b1be88f80233cf697d65",
        4694: "207e325aa5329ae8b782",
        4922: "953a0f2e92fa7c404c03",
        4952: "83d5bfb37160ae4af276",
        5043: "445cbb7f84e9897c7848",
        5052: "ac787266b0dd34b26203",
        5082: "7e2183ffab5f1ca8e5e9",
        5103: "27b62fc86a628faa9228",
        5184: "db8d7a057144c589ef6a",
        5263: "d81a7032cdb2cdf7bddb",
        5278: "711a3587070d3252cdb7",
        5366: "be12f7197fd24d7313bd",
        5388: "827edb581ef8062fabd8",
        5553: "1ab60374e6dd68cedfe3",
        5633: "5a24a3e70a2d28b91a7b",
        5651: "8ab1d3bd7aaec93c6111",
        5803: "f4b7cac78f0ca021c07b",
        5834: "37079716f2f7098c2132",
        5836: "1c2b261d16f6c1f9d8df",
        5876: "24f339c45abb141651e3",
        5955: "8206b24a01f6934b313d",
        6120: "3146d5a77828711a5d08",
        6209: "12bea4b9c71d97cbfead",
        6295: "6459987be818472ed2b1",
        6428: "f588504ab35535866f76",
        6430: "060742cdb53cb7e3c5d3",
        6466: "379bd5196612f67560e9",
        6472: "866484fb2f7deff27024",
        6528: "29542f61947d0478b771",
        6577: "83447976c14d49bb4a6a",
        6635: "77fa6109dd4adab5f971",
        6662: "ca7a1d6f8a5f47eb4785",
        6688: "dc30e077d1ff0a9d7e36",
        6752: "ac1043e4b45241fa476f",
        6888: "b5ab33040174bca726ca",
        6893: "56bdc458f224eb3f462c",
        6966: "d4044771bf8f29a627b3",
        7055: "d9af88ce19c4ba05f2c8",
        7082: "bc31c2da38a7ecacce4e",
        7097: "f9e399f0aa47159a7933",
        7326: "90c56dc1684f621d0682",
        7345: "558c20a3f8831a3c8672",
        7442: "d40eceb501ae68766797",
        7548: "a6582de0c753caec163f",
        7553: "1fdd02508c606c0141a7",
        7561: "b6a3d524d2d7d31110cf",
        7634: "b334c1c8da5f419f2452",
        7639: "7c216d015f7418363b39",
        7679: "e1976521f489081b6bb8",
        7696: "b8edc5a5aaff29d1a9c4",
        7724: "c51f5f382022119a3e5d",
        7872: "be594f44a63d27e3ca83",
        7958: "bc1c416358ae578661ae",
        8021: "6553173ad200bc0bee3d",
        8026: "1be5aa1cb4a42ac17dee",
        8064: "aeac389cea466657bd10",
        8104: "c89bf5c9b85f43c259ac",
        8138: "e91422b64800d6abf28e",
        8239: "0a024b96b79e82807956",
        8291: "7df3e8adf3212a289e3b",
        8396: "4f9f3e6de142eed796e4",
        8443: "44c47593a5225a54b4a8",
        8453: "0844bbef69ab58253053",
        8502: "99d11baf4be505c08e94",
        8521: "cd314579f239eed43dbe",
        8522: "2dd1738af3ecae58d5b1",
        8541: "f2ac11c021a8e1fa84b9",
        8547: "c66448168236e43b6ed3",
        8674: "d73ad1a0110d61f364cc",
        8724: "f81d0b40bbad6f837705",
        8732: "d91d5d41490a3efd5220",
        8749: "01556b38573f3cec0068",
        8780: "b3e1969af6c893830dd7",
        8872: "4dc1b61cdc12589ff167",
        8889: "0519d7d321b21a926c50",
        9053: "6944f99be4ce741bac8d",
        9118: "52272e5a3875a66fa5d1",
        9129: "84638c21b3caabfe3fdc",
        9298: "d59713b28b859747269b",
        9367: "23c9c959a6b41d387c8f",
        9387: "08a10323ebbdc38f8c07",
        9402: "20b96aeef4aa0f1c82e1",
        9436: "11791d800f40eb49675c",
        9453: "942d37025851bca144dc",
        9505: "399bf70031326abd6802",
        9515: "accb38fa7c638ede8098",
        9517: "6753b00aee48609d915f",
        9617: "3e5cb211c045c9e969c2",
        9638: "fa725fcb3b6cd821ed2a",
        9681: "83deac2500c904242291",
        9743: "b2d9587e4009a994b616",
        9774: "feef2963b39ece6c3e38",
        9783: "8a5880c8ba56a2f571b3",
        9855: "b094acfd3cddb4213a5f",
        9857: "9abdd4d395773f183696",
        9869: "c41df07e8db2948bd9e5",
        9870: "488f20aae4a3b3c992f5",
        9914: "0214499ac9f161c721ea",
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
        1220: "4b9732bae7c509479c96",
        2079: "49e68626d2a9bcdab7ae",
        2092: "54c04a83fb19118665fe",
        2694: "816c6c29940416f316c6",
        3156: "a76dc33b5e94d2acd794",
        3256: "1a8e226864678862c504",
        3418: "a6c633ebde05717707fa",
        3781: "fcd3b641e75ba36b82d3",
        4268: "558bc776601a931c1489",
        4496: "d90c92163b81e4a1cd5f",
        4558: "1eb85d66129aaba19341",
        5278: "7ad41ee51bad4c4189d1",
        5836: "69531fc8619b34894f50",
        5876: "9ca3a4842a7ed096746b",
        6635: "0d3d69f2f2bf2c25a2c8",
        6662: "604ed199011c310449f2",
        6688: "93ca90b9dd015cb7b457",
        6893: "8d682a3ae9e9f5bfaa84",
        6966: "a66289e969ece5d1faad",
        7561: "789dd1fbdb6c6b5c773d",
        7634: "1a410fef2253df6a0a34",
        8138: "f13e0aca0599c6553ab2",
        8396: "e53dd7f5e3feba02531b",
        8521: "663ab836630c0f460577",
        8780: "8281ff275543f3089cc5",
        9118: "16148154beaf28569e5e",
        9129: "e0ae5f099a75f693e3de",
        9505: "315e2a92e1f1edc406bb",
        9638: "3a4a0176716c84903e98",
        9681: "db81aecaefd2998f69bb",
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
                4496: 1,
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
                8138: 1,
                8396: 1,
                8521: 1,
                8780: 1,
                9118: 1,
                9129: 1,
                9505: 1,
                9638: 1,
                9681: 1,
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

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "10066541";
(() => {
  "use strict";
  var a,
    e,
    c,
    n,
    o,
    i = {},
    d = {};
  function f(a) {
    var e = d[a];
    if (void 0 !== e) return e.exports;
    var c = (d[a] = { id: a, loaded: !1, exports: {} });
    return i[a].call(c.exports, c, c.exports, f), (c.loaded = !0), c.exports;
  }
  (f.m = i),
    (f.amdO = {}),
    (a = []),
    (f.O = (e, c, n, o) => {
      if (!c) {
        var i = 1 / 0;
        for (t = 0; t < a.length; t++) {
          for (var [c, n, o] = a[t], d = !0, s = 0; s < c.length; s++)
            (!1 & o || i >= o) && Object.keys(f.O).every((a) => f.O[a](c[s]))
              ? c.splice(s--, 1)
              : ((d = !1), o < i && (i = o));
          if (d) {
            a.splice(t--, 1);
            var l = n();
            void 0 !== l && (e = l);
          }
        }
        return e;
      }
      o = o || 0;
      for (var t = a.length; t > 0 && a[t - 1][2] > o; t--) a[t] = a[t - 1];
      a[t] = [c, n, o];
    }),
    (f.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return f.d(e, { a: e }), e;
    }),
    (c = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (f.t = function (a, n) {
      if ((1 & n && (a = this(a)), 8 & n)) return a;
      if ("object" == typeof a && a) {
        if (4 & n && a.__esModule) return a;
        if (16 & n && "function" == typeof a.then) return a;
      }
      var o = Object.create(null);
      f.r(o);
      var i = {};
      e = e || [null, c({}), c([]), c(c)];
      for (var d = 2 & n && a; "object" == typeof d && !~e.indexOf(d); d = c(d))
        Object.getOwnPropertyNames(d).forEach((e) => (i[e] = () => a[e]));
      return (i.default = () => a), f.d(o, i), o;
    }),
    (f.d = (a, e) => {
      for (var c in e)
        f.o(e, c) &&
          !f.o(a, c) &&
          Object.defineProperty(a, c, { enumerable: !0, get: e[c] });
    }),
    (f.f = {}),
    (f.e = (a) =>
      Promise.all(Object.keys(f.f).reduce((e, c) => (f.f[c](a, e), e), []))),
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
        1602: "localization/main_arabic-json",
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
        3003: "localization/sales_arabic-json",
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
        60: "4890e058ecaa6524e65b",
        91: "1e84d945270f207e8647",
        129: "6f0660b5e55985b82455",
        139: "2fda6fa366da3a4ac3bb",
        198: "f83ff57d83116a70ba76",
        258: "f0cc5ac5d620f1be4e67",
        286: "715d2e8cc7d58e4d6e47",
        297: "e2821c113200b0a88a6c",
        349: "f686d3323daec19faa06",
        466: "2a1794388cfd40bdde4d",
        537: "aff6676ce2858f3dba5c",
        638: "7c7cd0a92607a055e08b",
        657: "885e3e3c5fd2be6bd519",
        759: "c3fe7efcba8fe96b0227",
        823: "c6515057fa429dd37cbb",
        831: "e853d11cdc638c9ee9fb",
        833: "bace7f76e533b8d7fffa",
        926: "0719dd3d557b76434f55",
        976: "3bcd83e6fa5eba4f0937",
        1023: "4830861c0c726fc64740",
        1063: "5f1c602fb1c3b912e1aa",
        1220: "8c5df1fe154a0231e132",
        1389: "b89a77d7c7188c4300f1",
        1410: "165681cf7931025c0b66",
        1423: "6a0213639288ad76f02e",
        1602: "20514175dd6399edf2fa",
        1721: "afd809b8b988fbf1c46e",
        1724: "ebb8190465bd9786c3ea",
        1783: "1aa4e05bb0c41cf3bd16",
        1880: "241e3d6a1f6ef36930c0",
        1951: "369324979d7e884818d1",
        1985: "7964b37ca86895206e62",
        2021: "49b998053c8910b7cc57",
        2079: "6cbc026322520aa4b29b",
        2092: "0bd3fdaa28e0b9d7d9b4",
        2156: "b974b3b1b92054ae1da0",
        2199: "1fa0eb0b9cb2e0f70bb6",
        2446: "e11585b4d3b6efd8df52",
        2449: "42a8efe9cc48ae0ff335",
        2481: "820b4d53055516f13883",
        2588: "05a87dabff1cd6227321",
        2664: "45a6ba129e5fcbd1d6db",
        2694: "a5d8d1be8d98ca6d9104",
        2744: "f921ad9dee4cef66967c",
        2754: "24c4518b7a21337e3eca",
        2780: "6b71d59bc576b4ed735a",
        2959: "3c9333a8fb8ebb052ab9",
        3003: "5e34097580b221c2fdf0",
        3140: "f0d00b238b8213fecb60",
        3156: "a103c6f3c69a5b77f120",
        3256: "97f6bb6f845f7a3b6698",
        3418: "dbe77d927a861b4d641a",
        3589: "2dd34dfa2697ec3587be",
        3594: "2615af1d9f7154572fb1",
        3781: "60d8461636f4da6f97d9",
        3867: "19fdb7a762ea8e27e7fc",
        3976: "e8f0df2cc1c09f9725ce",
        4009: "ec51675ec9a408c62b1b",
        4055: "bb3137e10c6d7c73ae82",
        4072: "e55e0daed63f2770cd7e",
        4102: "784589356499c2fc0811",
        4268: "2f6db7461c2e254eb377",
        4278: "6cc7df6e5227f6be8be2",
        4317: "e4af14e9af40751aa7fd",
        4558: "ec076357ddf2e96689fe",
        4694: "ad21a3bc0138c155f0bf",
        4922: "953a0f2e92fa7c404c03",
        4952: "f91409552d0a903fb5c5",
        5043: "445cbb7f84e9897c7848",
        5052: "26b9d7382289c5d38acb",
        5082: "357cb563ddc1e95612d8",
        5103: "27b62fc86a628faa9228",
        5184: "4ce7b09a872e9d627190",
        5263: "d81a7032cdb2cdf7bddb",
        5278: "711a3587070d3252cdb7",
        5366: "be12f7197fd24d7313bd",
        5388: "a9bc4d83243110b8244f",
        5435: "3c8eb4e5713d72a2eb83",
        5553: "40122434309681e62947",
        5633: "24595cd4fcc8e64a5962",
        5651: "8ab1d3bd7aaec93c6111",
        5803: "4df2c5df07ecf9ac5f5e",
        5834: "37079716f2f7098c2132",
        5836: "d7b2a9271008bda37d2d",
        5876: "b2b8cf1f096e8b020d99",
        5955: "05e72d6282624b349b27",
        6120: "00fcd25ca35c1a082fcd",
        6200: "eb3d3862e66f3c1b6ea2",
        6209: "6c1fa0406e660401098c",
        6295: "6459987be818472ed2b1",
        6428: "e7c3ea6a96105fa0794e",
        6430: "3bb66fdcba02d37f9b1f",
        6466: "379bd5196612f67560e9",
        6472: "640f3edfa7beab30613b",
        6528: "29542f61947d0478b771",
        6577: "9f1fca853e83626a279a",
        6635: "1109774643b8ea88e074",
        6662: "bd10208cf86798ffdfad",
        6688: "dc30e077d1ff0a9d7e36",
        6752: "0ec6651d4fb3b8db1a8d",
        6888: "92d5a6270eab474e0a21",
        6893: "ec8b60ff23601823682c",
        6966: "d4044771bf8f29a627b3",
        7055: "d9af88ce19c4ba05f2c8",
        7082: "bc31c2da38a7ecacce4e",
        7097: "f9e399f0aa47159a7933",
        7326: "90c56dc1684f621d0682",
        7345: "10f7f1bf0dd0844e2be2",
        7442: "35e2f0d3c80397ff62a2",
        7548: "a6582de0c753caec163f",
        7553: "616b3e4dfddb971e66a1",
        7561: "b6a3d524d2d7d31110cf",
        7596: "73d157c290dbb8f064ce",
        7634: "b5ff461ce6e714973799",
        7639: "7c216d015f7418363b39",
        7679: "18d5a37b264a12ad8dc2",
        7696: "69a5cd0d051e707fbaee",
        7724: "1f6fcf6a70c8856198b0",
        7760: "431152041c7afd872535",
        7958: "bc1c416358ae578661ae",
        8021: "88a771aa3086a07f51db",
        8024: "0f67eb24c6b544fab2a9",
        8026: "e04d8dd96d444e4ebc92",
        8064: "aeac389cea466657bd10",
        8104: "dd05e96f7c73250a5cdd",
        8138: "b6366482d192960debe0",
        8239: "0a024b96b79e82807956",
        8291: "f3cb1343804a2a9f45e2",
        8396: "4f9f3e6de142eed796e4",
        8443: "44c47593a5225a54b4a8",
        8453: "ff008394a662af8cd7ec",
        8502: "99d11baf4be505c08e94",
        8505: "b8266f0eed63d91480d5",
        8521: "c754dfcbf7206fa2df32",
        8522: "40b95f6f425933de11cf",
        8541: "f2ac11c021a8e1fa84b9",
        8547: "c5e9dfe7b95d5a3f6bad",
        8674: "4d9ec67caadf5a1df890",
        8724: "9ba47eb2e86145f45e76",
        8732: "d91d5d41490a3efd5220",
        8749: "1979f371460d7b260b2a",
        8780: "453c20a05bd36c45b52e",
        8872: "cad9e58bcd05dcd6a30d",
        9053: "24d36accb3c48ecfaa1c",
        9118: "763fe260ecb1ee700a64",
        9129: "489672153001d923d960",
        9298: "ccd42e7759f74af6df14",
        9367: "23c9c959a6b41d387c8f",
        9387: "e464c218057e566198ad",
        9402: "7998683bde34611d7072",
        9436: "a2e8dd41aa4c806d6095",
        9453: "fbd69c23aadc04472015",
        9505: "7d96f23844fe634334e8",
        9515: "c6b19f327acbae9136c2",
        9517: "a17f398ec37972c6d7e6",
        9560: "a59cc10fb09ae508a699",
        9617: "3e5cb211c045c9e969c2",
        9638: "b3471988526e123694a4",
        9743: "b2d9587e4009a994b616",
        9774: "958c28fdcaf2f49f9900",
        9783: "1fb8daea7b65b9fb7e7a",
        9855: "8d275a456cdf36fc7e7f",
        9857: "c984431c6b81d7ef9e2a",
        9869: "e88fff4fac53ea4096cc",
        9870: "981c7d65b65f4e2b8a91",
        9914: "9c31f02aa4e5cdff3d88",
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
        2079: "642f6f61eadc360bc324",
        2092: "54c04a83fb19118665fe",
        2694: "816c6c29940416f316c6",
        3156: "a76dc33b5e94d2acd794",
        3256: "1a8e226864678862c504",
        3418: "a6c633ebde05717707fa",
        3781: "2a240210c545516580db",
        4268: "558bc776601a931c1489",
        4558: "68b3b9debc1af1f2bfd7",
        5278: "7ad41ee51bad4c4189d1",
        5836: "383dc495c4c2102cb1ec",
        5876: "e783560ec43be0c01999",
        6635: "0c1505481373fe7e7ab1",
        6662: "9246345f0d11a4d941a1",
        6688: "93ca90b9dd015cb7b457",
        6893: "9f40dc5dd1637aeb728e",
        6966: "a66289e969ece5d1faad",
        7561: "789dd1fbdb6c6b5c773d",
        7634: "1a410fef2253df6a0a34",
        7760: "f4738f3ea12191e1ddd6",
        8138: "fc73abfe79a665f196e8",
        8396: "e53dd7f5e3feba02531b",
        8521: "c3bd3df95f41619e69ad",
        8780: "d5f1cb015acefe525490",
        9118: "d1baf8ee58b71d71c419",
        9129: "a8eba3f2971cf6f666e3",
        9505: "a7253a343557e71f98eb",
        9560: "a0af1a8e084a1491b3f3",
        9774: "fc03a831e46a5f3a4c71",
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
    (n = {}),
    (o = "community:"),
    (f.l = (a, e, c, i) => {
      if (n[a]) n[a].push(e);
      else {
        var d, s;
        if (void 0 !== c)
          for (
            var l = document.getElementsByTagName("script"), t = 0;
            t < l.length;
            t++
          ) {
            var b = l[t];
            if (
              b.getAttribute("src") == a ||
              b.getAttribute("data-webpack") == o + c
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
          d.setAttribute("data-webpack", o + c),
          (d.src = a)),
          (n[a] = [e]);
        var r = (e, c) => {
            (d.onerror = d.onload = null), clearTimeout(h);
            var o = n[a];
            if (
              (delete n[a],
              d.parentNode && d.parentNode.removeChild(d),
              o && o.forEach((a) => a(c)),
              e)
            )
              return e(c);
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
            new Promise((e, c) => {
              var n = f.miniCssF(a),
                o = f.p + n;
              if (
                ((a, e) => {
                  for (
                    var c = document.getElementsByTagName("link"), n = 0;
                    n < c.length;
                    n++
                  ) {
                    var o =
                      (d = c[n]).getAttribute("data-href") ||
                      d.getAttribute("href");
                    if ("stylesheet" === d.rel && (o === a || o === e))
                      return d;
                  }
                  var i = document.getElementsByTagName("style");
                  for (n = 0; n < i.length; n++) {
                    var d;
                    if (
                      (o = (d = i[n]).getAttribute("data-href")) === a ||
                      o === e
                    )
                      return d;
                  }
                })(n, o)
              )
                return e();
              ((a, e, c, n, o) => {
                var i = document.createElement("link");
                (i.rel = "stylesheet"),
                  (i.type = "text/css"),
                  (i.onerror = i.onload =
                    (c) => {
                      if (((i.onerror = i.onload = null), "load" === c.type))
                        n();
                      else {
                        var d = c && c.type,
                          f = (c && c.target && c.target.href) || e,
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
                  c
                    ? c.parentNode.insertBefore(i, c.nextSibling)
                    : document.head.appendChild(i);
              })(a, o, null, e, c);
            }),
          e = { 4556: 0 };
        f.f.miniCss = (c, n) => {
          e[c]
            ? n.push(e[c])
            : 0 !== e[c] &&
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
                9505: 1,
                9560: 1,
                9774: 1,
              }[c] &&
              n.push(
                (e[c] = a(c).then(
                  () => {
                    e[c] = 0;
                  },
                  (a) => {
                    throw (delete e[c], a);
                  },
                )),
              );
        };
      }
    })(),
    (() => {
      var a = { 4556: 0 };
      (f.f.j = (e, c) => {
        var n = f.o(a, e) ? a[e] : void 0;
        if (0 !== n)
          if (n) c.push(n[2]);
          else if (/^(4556|6688|8396)$/.test(e)) a[e] = 0;
          else {
            var o = new Promise((c, o) => (n = a[e] = [c, o]));
            c.push((n[2] = o));
            var i = f.p + f.u(e),
              d = new Error();
            f.l(
              i,
              (c) => {
                if (f.o(a, e) && (0 !== (n = a[e]) && (a[e] = void 0), n)) {
                  var o = c && ("load" === c.type ? "missing" : c.type),
                    i = c && c.target && c.target.src;
                  (d.message =
                    "Loading chunk " + e + " failed.\n(" + o + ": " + i + ")"),
                    (d.name = "ChunkLoadError"),
                    (d.type = o),
                    (d.request = i),
                    n[1](d);
                }
              },
              "chunk-" + e,
              e,
            );
          }
      }),
        (f.O.j = (e) => 0 === a[e]);
      var e = (e, c) => {
          var n,
            o,
            [i, d, s] = c,
            l = 0;
          if (i.some((e) => 0 !== a[e])) {
            for (n in d) f.o(d, n) && (f.m[n] = d[n]);
            if (s) var t = s(f);
          }
          for (e && e(c); l < i.length; l++)
            (o = i[l]), f.o(a, o) && a[o] && a[o][0](), (a[o] = 0);
          return f.O(t);
        },
        c = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      c.forEach(e.bind(null, 0)), (c.push = e.bind(null, c.push.bind(c)));
    })();
})();

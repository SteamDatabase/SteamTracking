/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8858690";
(() => {
  "use strict";
  var e,
    a,
    n,
    s,
    c,
    d = {},
    r = {};
  function i(e) {
    var a = r[e];
    if (void 0 !== a) return a.exports;
    var n = (r[e] = { id: e, loaded: !1, exports: {} });
    return d[e].call(n.exports, n, n.exports, i), (n.loaded = !0), n.exports;
  }
  (i.m = d),
    (e = []),
    (i.O = (a, n, s, c) => {
      if (!n) {
        var d = 1 / 0;
        for (f = 0; f < e.length; f++) {
          for (var [n, s, c] = e[f], r = !0, b = 0; b < n.length; b++)
            (!1 & c || d >= c) && Object.keys(i.O).every((e) => i.O[e](n[b]))
              ? n.splice(b--, 1)
              : ((r = !1), c < d && (d = c));
          if (r) {
            e.splice(f--, 1);
            var o = s();
            void 0 !== o && (a = o);
          }
        }
        return a;
      }
      c = c || 0;
      for (var f = e.length; f > 0 && e[f - 1][2] > c; f--) e[f] = e[f - 1];
      e[f] = [n, s, c];
    }),
    (i.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return i.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (i.t = function (e, s) {
      if ((1 & s && (e = this(e)), 8 & s)) return e;
      if ("object" == typeof e && e) {
        if (4 & s && e.__esModule) return e;
        if (16 & s && "function" == typeof e.then) return e;
      }
      var c = Object.create(null);
      i.r(c);
      var d = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var r = 2 & s && e; "object" == typeof r && !~a.indexOf(r); r = n(r))
        Object.getOwnPropertyNames(r).forEach((a) => (d[a] = () => e[a]));
      return (d.default = () => e), i.d(c, d), c;
    }),
    (i.d = (e, a) => {
      for (var n in a)
        i.o(a, n) &&
          !i.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: a[n] });
    }),
    (i.f = {}),
    (i.e = (e) =>
      Promise.all(Object.keys(i.f).reduce((a, n) => (i.f[n](e, a), a), []))),
    (i.u = (e) =>
      "javascript/applications/appmgmt/" +
      {
        61: "sales_russian-json",
        77: "sales_vietnamese-json",
        101: "sales_dutch-json",
        584: "sales_koreana-json",
        647: "main_czech-json",
        698: "main_dutch-json",
        727: "main_japanese-json",
        746: "libraries~eae36f74a",
        799: "main_german-json",
        819: "marketing_turkish-json",
        874: "marketing_dutch-json",
        903: "marketing_russian-json",
        979: "libraries~29ddc6b39",
        1012: "sales_romanian-json",
        1043: "sales_schinese-json",
        1117: "main_french-json",
        1162: "shared_thai-json",
        1164: "sales_norwegian-json",
        1313: "shared_bulgarian-json",
        1478: "libraries~46fbcd11a",
        1643: "chunk~60681c765",
        1722: "sales_czech-json",
        2029: "shared_sc_schinese-json",
        2136: "events",
        2167: "chunk~b4cf1c116",
        2431: "shared_arabic-json",
        2443: "shared_latam-json",
        2448: "marketing_polish-json",
        2522: "logoedtior",
        2529: "pricingtool",
        2537: "shared_schinese-json",
        2581: "marketing_danish-json",
        2601: "marketing_spanish-json",
        2681: "sales_indonesian-json",
        2706: "libraries~b58ccb787",
        2715: "chunk~eae36f74a",
        2767: "main_polish-json",
        2824: "marketing_german-json",
        2844: "shared_japanese-json",
        2848: "main_ukrainian-json",
        2942: "main_tchinese-json",
        3059: "libraries~60681c765",
        3112: "shared_french-json",
        3174: "sales_spanish-json",
        3185: "main_swedish-json",
        3252: "shared_polish-json",
        3277: "main_romanian-json",
        3313: "sales_finnish-json",
        3323: "main_danish-json",
        3359: "main_bulgarian-json",
        3453: "marketing_czech-json",
        3552: "libraries~3caf4ca8a",
        3557: "shared_finnish-json",
        3599: "adminpromoreviewdashboard",
        3634: "sales_bulgarian-json",
        3685: "sales_german-json",
        3710: "chunk~9d4f35afa",
        3768: "main_finnish-json",
        3863: "publisherdashboard",
        4033: "marketing_schinese-json",
        4103: "navevents",
        4108: "shared_norwegian-json",
        4166: "sales_thai-json",
        4171: "marketing_koreana-json",
        4189: "shared_czech-json",
        4199: "marketing_french-json",
        4238: "marketing_thai-json",
        4248: "sales_polish-json",
        4297: "shared_greek-json",
        4447: "sales_greek-json",
        4458: "marketing_brazilian-json",
        4535: "login",
        4601: "broadcast",
        4650: "chunk~7c4d46a11",
        4682: "sales_latam-json",
        4722: "main_koreana-json",
        4812: "sales_brazilian-json",
        4823: "shared_romanian-json",
        4860: "main_russian-json",
        4929: "marketing_english-json",
        4935: "sdrconnections",
        4961: "sales_danish-json",
        4964: "shared_vietnamese-json",
        5117: "libraries~511d96142",
        5257: "marketing_portuguese-json",
        5414: "sales_portuguese-json",
        5438: "shared_turkish-json",
        5612: "libraries~bb3891c52",
        5625: "shared_swedish-json",
        5676: "steamlearn",
        5706: "contenthubpages",
        5849: "shared_portuguese-json",
        5855: "sales_swedish-json",
        5925: "shared_dutch-json",
        5933: "shared_italian-json",
        5948: "shared_hungarian-json",
        6007: "shared_german-json",
        6019: "marketing_swedish-json",
        6035: "marketing_ukrainian-json",
        6087: "main_latam-json",
        6169: "marketing_norwegian-json",
        6234: "libraries~7c4d46a11",
        6375: "libraries~b4cf1c116",
        6492: "shared_spanish-json",
        6542: "shared_koreana-json",
        6630: "libraries~24bb3772d",
        6693: "sales_italian-json",
        6699: "steamdeck",
        6762: "sales_sc_schinese-json",
        6808: "resquemsg",
        6815: "main_english-json",
        6817: "main_spanish-json",
        6846: "marketing_vietnamese-json",
        6853: "chunk~ec4f762b0",
        7072: "main_indonesian-json",
        7082: "marketing_japanese-json",
        7094: "sales_japanese-json",
        7181: "sales_tchinese-json",
        7236: "main_portuguese-json",
        7240: "chunk~786255bbb",
        7485: "chunk~38155a7b8",
        7602: "shared_tchinese-json",
        7682: "chunk~2b6b77689",
        7724: "sales_french-json",
        7762: "steamml",
        7781: "shared_ukrainian-json",
        7871: "marketing_greek-json",
        7890: "main_thai-json",
        7934: "sales_ukrainian-json",
        7942: "marketing_finnish-json",
        7951: "main_norwegian-json",
        7952: "sales_english-json",
        7975: "shared_english-json",
        8001: "marketing_italian-json",
        8051: "main_hungarian-json",
        8155: "main_italian-json",
        8168: "main_vietnamese-json",
        8385: "shared_brazilian-json",
        8399: "marketing_indonesian-json",
        8754: "shared_indonesian-json",
        8767: "sales_turkish-json",
        8774: "marketing_romanian-json",
        8960: "marketing_bulgarian-json",
        8974: "storeadmin",
        8993: "sales_hungarian-json",
        8994: "marketing_hungarian-json",
        9062: "shared_russian-json",
        9129: "libraries~9d4f35afa",
        9431: "main_brazilian-json",
        9568: "main_greek-json",
        9603: "libraries~82d50d904",
        9645: "libraries~f1126aa1a",
        9663: "main_turkish-json",
        9753: "shared_danish-json",
        9784: "chunk~0efb0496c",
        9828: "libraries~38155a7b8",
        9899: "marketing_latam-json",
        9903: "marketing_tchinese-json",
        9919: "marketing_sc_schinese-json",
        9980: "main_schinese-json",
      }[e] +
      ".js?contenthash=" +
      {
        61: "ec46fa8bcebf5340e631",
        77: "60767c0605357fc856ca",
        101: "a2068cf79b724087534e",
        584: "0d62f1709eef35196942",
        647: "ee1d27ef19dafbb08feb",
        698: "7bcb9d3b23a1a1305a15",
        727: "8b028ec8fab48706f9bf",
        746: "90fa94e635b4f6647e63",
        799: "f9cd2bc4ef3bee721132",
        819: "08aafc2c151efdb2cb78",
        874: "673c99f3f2ca2e9f3d91",
        903: "a7b92c2222f1d7c2e50a",
        979: "398530aa26f56f13c423",
        1012: "a94687869ea4380e2ede",
        1043: "a65118491a23cfff1a7e",
        1117: "9f8d189c4326df7ab238",
        1162: "d0cd363b6bc4ea25637c",
        1164: "8f8e482754f9ce3aa203",
        1313: "3dd39d110cb6071d476c",
        1478: "c4d3af53b43e62ff7421",
        1643: "bcabd1c4c08ac77bcfdd",
        1722: "9505761fface8382716d",
        2029: "e48b98396bc03a67237f",
        2136: "6724213533f2dcd87e21",
        2167: "0cb75c87c262c003b8b7",
        2431: "1ddbbdb2c0edc00865c7",
        2443: "05b1e7cf21991dfd1b41",
        2448: "950fec106f4427bacd12",
        2522: "17dae4e004521f1604e7",
        2529: "9d87fca51cf2727aba5b",
        2537: "a5efdfa870fa44f1b610",
        2581: "4b5fcf399ce0cc645d00",
        2601: "58f5680b3ac085ae05c8",
        2681: "8cfb15607311eba8878b",
        2706: "cb1a7dfb676460bae171",
        2715: "24ffb3bbdc01fe2fb09c",
        2767: "073286deb822a6544975",
        2824: "6815dc47a7f80aabc8fa",
        2844: "215d6f36b7f779646fb6",
        2848: "ab4e629d96add026f28f",
        2942: "8e16609f35ce97e7c0d7",
        3059: "9aedac609f188076eabd",
        3112: "099a7ef8bc1af4c61d82",
        3174: "3226ea34fb41a159f816",
        3185: "1854a0da83a383ba3b7b",
        3252: "544d93c7e2125238b454",
        3277: "b5417b382475bb14699d",
        3313: "ddf7a00ebdac1fde18bf",
        3323: "bdafa645eaef90b691fe",
        3359: "453bd79bb13ed720f549",
        3453: "1ee9fe588b9503c078eb",
        3552: "023fe6eedec463110cd2",
        3557: "74ca3bffaa9b6b8a54d5",
        3599: "62ba2a2deca1bc20c44f",
        3634: "5857a1ab8407a3cce870",
        3685: "450f53961a3afbbd89bc",
        3710: "05d4d4ef7f5f66b332b1",
        3768: "a353312e5d736c7ab8d9",
        3863: "c4818fe84432ab5cb201",
        4033: "506b0f00fc5f025edb11",
        4103: "2155cd507f33f5bb4426",
        4108: "cf2782700d5ce0df3520",
        4166: "723e2bc16eaf49996400",
        4171: "2d4f0e6527954f6ac811",
        4189: "7d5586926ccd7376fe9c",
        4199: "ed1af2b319bbc29946d0",
        4238: "2efe44511c434b28ad7a",
        4248: "88171067b55eef9c0b32",
        4297: "199c345964c42eb940fe",
        4447: "25613b490862a77c33f8",
        4458: "553058aa249435b8b7d8",
        4535: "541ae45584ba28badacd",
        4601: "e0b36a5951273492f78b",
        4650: "55f806a57ee99f46682e",
        4682: "b280ea34de7ce1d4b50e",
        4722: "65a57b33eacfac22d0d1",
        4812: "7602c8b963a72ce5333f",
        4823: "2f5f0642b35c9e8a75f7",
        4860: "d8e2b4e1fd95a1359e06",
        4929: "f8e2c7b654dc580ffc2e",
        4935: "c92c353bc10f2d841522",
        4961: "95d66bb6c14dc045a71f",
        4964: "eea49d1fbc48d1d8c5e1",
        5117: "1d19c8fa49b812f162c1",
        5257: "30deca15c0194ac68988",
        5414: "c607339de8ed4c2b0048",
        5438: "71b89b67b19747cb9b79",
        5612: "68d764a90dc8c236411b",
        5625: "07b77d46019bf5bd5492",
        5676: "09f6b68efec8e55d85f3",
        5706: "bc072298165c2664cfea",
        5849: "a734419d6bef4c9d8d9b",
        5855: "1039c5f93bd4e4a0f8a1",
        5925: "7f4ec4a2e3f5a76b285d",
        5933: "192ddc039e5a3bfbea01",
        5948: "6b6b8541a8749e9421f9",
        6007: "4001c1d44b73142594c1",
        6019: "f99d5f9789b5d8d39426",
        6035: "d04fe460cb8602e4908a",
        6087: "82ca0980667524beae92",
        6169: "8412393c3463399b84b9",
        6234: "17aaea1e591c4f816cc9",
        6375: "4d16a41e3261ecbcead3",
        6492: "d5fe9a4e87d4922d7cf8",
        6542: "5d6948106e4be659a576",
        6630: "01e28ccabaf5ac451e66",
        6693: "4e5eb4f0cfc8743c7ef7",
        6699: "fc6b3031f4fffe956723",
        6762: "2e1f0ab367e4a170f0e4",
        6808: "017e50899c4db1711216",
        6815: "7747bbd6d25d95fb407a",
        6817: "60a4655df2c550937275",
        6846: "3a9655b07db61db0d332",
        6853: "92040ae7ab16192770af",
        7072: "f4efccf9ec350c036b6f",
        7082: "25be304e4e5a36ac28f0",
        7094: "56d18d53309247c36c9d",
        7181: "e0d39ef216608c27445f",
        7236: "99615e13841dc6b03b77",
        7240: "f3387d356ae04632d159",
        7485: "330c5dc96c1c312300ed",
        7602: "452245583bc9660ac95d",
        7682: "e1a03a02efc05c5c7093",
        7724: "c8322269d2d47d1e5178",
        7762: "4deb4b8af0cb6d8e09f0",
        7781: "78db15b6c777b0f39b6e",
        7871: "d035543d382251e5f0e8",
        7890: "8382baa1a29da0c91c40",
        7934: "bb44a349eff7c79360ba",
        7942: "973249e9d95e3d22b64a",
        7951: "9e5403656f6e3c534892",
        7952: "e32d610cbf3f4e6cba77",
        7975: "692437ec25f0085a2e8d",
        8001: "9e2eb06e9ed1704a9239",
        8051: "27e664f90de7b5beb718",
        8155: "78d72708a29845c2aa97",
        8168: "1cdec2bff4bc1203e881",
        8385: "7dbbd684c76daf380c5d",
        8399: "2d43b86e44d82e170da0",
        8754: "303504edfcd5c07a3697",
        8767: "98061182cc26791bc0c4",
        8774: "935c452dc6ebb2a7dfbd",
        8960: "9bd7556cc9bdcb948993",
        8974: "98e907f0b5dc2b9c4ca0",
        8993: "ae2a7883c5e6d76ecf9d",
        8994: "f9e6e54bc5f99287682d",
        9062: "28639ee942beb13e2462",
        9129: "c37d416e8b8feacc00f8",
        9431: "c26785e8debc15e958df",
        9568: "078398850b812030258e",
        9603: "5ffcebd7bf5c32c8b237",
        9645: "05968e6a945d6f7e1911",
        9663: "fc39fd48fb252a40b2c0",
        9753: "09672227998bdd64b8ad",
        9784: "f8ef3412405289a72291",
        9828: "e911602cb4c9b1eff105",
        9899: "1f48f5aedcc9093f4b36",
        9903: "cd4a78393b471e50f3c5",
        9919: "de58d247468b7de2b3d0",
        9980: "3a1fc64361776c90a278",
      }[e]),
    (i.miniCssF = (e) =>
      "css/applications/appmgmt/" +
      {
        746: "libraries~eae36f74a",
        1643: "chunk~60681c765",
        2136: "events",
        2522: "logoedtior",
        2529: "pricingtool",
        3599: "adminpromoreviewdashboard",
        3710: "chunk~9d4f35afa",
        3863: "publisherdashboard",
        4601: "broadcast",
        4935: "sdrconnections",
        5676: "steamlearn",
        6699: "steamdeck",
        6808: "resquemsg",
        6853: "chunk~ec4f762b0",
        7485: "chunk~38155a7b8",
        7762: "steamml",
        8974: "storeadmin",
      }[e] +
      ".css?contenthash=" +
      {
        746: "da3b05b688206293fc3e",
        1643: "ffc5c15d247365d7522c",
        2136: "fe967e7cf6246b2db162",
        2522: "0657d544e37c72c3ae45",
        2529: "a445f11c7c6247c41201",
        3599: "7d397c627b354e1a49cf",
        3710: "50b7f0db36e641a95545",
        3863: "a9af3a17c48476c7764c",
        4601: "f294db5e57c6dfd50f7b",
        4935: "33eb9d66d0507e03ca68",
        5676: "10bdc403af74fb02fc2d",
        6699: "4694d750def959727f73",
        6808: "7fdbc85de533f923151d",
        6853: "969278b06eb0eb83065e",
        7485: "11eb60521e41ef187526",
        7762: "61877d984bfcf3e7f40f",
        8974: "bad51c71b6eba6ffe9e4",
      }[e]),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (s = {}),
    (c = "appmgmt-storeadmin:"),
    (i.l = (e, a, n, d) => {
      if (s[e]) s[e].push(a);
      else {
        var r, b;
        if (void 0 !== n)
          for (
            var o = document.getElementsByTagName("script"), f = 0;
            f < o.length;
            f++
          ) {
            var t = o[f];
            if (
              t.getAttribute("src") == e ||
              t.getAttribute("data-webpack") == c + n
            ) {
              r = t;
              break;
            }
          }
        r ||
          ((b = !0),
          ((r = document.createElement("script")).charset = "utf-8"),
          (r.timeout = 120),
          i.nc && r.setAttribute("nonce", i.nc),
          r.setAttribute("data-webpack", c + n),
          (r.src = e)),
          (s[e] = [a]);
        var l = (a, n) => {
            (r.onerror = r.onload = null), clearTimeout(h);
            var c = s[e];
            if (
              (delete s[e],
              r.parentNode && r.parentNode.removeChild(r),
              c && c.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          h = setTimeout(
            l.bind(null, void 0, { type: "timeout", target: r }),
            12e4,
          );
        (r.onerror = l.bind(null, r.onerror)),
          (r.onload = l.bind(null, r.onload)),
          b && document.head.appendChild(r);
      }
    }),
    (i.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (i.p = ""),
    (() => {
      if ("undefined" != typeof document) {
        var e = (e) =>
            new Promise((a, n) => {
              var s = i.miniCssF(e),
                c = i.p + s;
              if (
                ((e, a) => {
                  for (
                    var n = document.getElementsByTagName("link"), s = 0;
                    s < n.length;
                    s++
                  ) {
                    var c =
                      (r = n[s]).getAttribute("data-href") ||
                      r.getAttribute("href");
                    if ("stylesheet" === r.rel && (c === e || c === a))
                      return r;
                  }
                  var d = document.getElementsByTagName("style");
                  for (s = 0; s < d.length; s++) {
                    var r;
                    if (
                      (c = (r = d[s]).getAttribute("data-href")) === e ||
                      c === a
                    )
                      return r;
                  }
                })(s, c)
              )
                return a();
              ((e, a, n, s, c) => {
                var d = document.createElement("link");
                (d.rel = "stylesheet"),
                  (d.type = "text/css"),
                  (d.onerror = d.onload =
                    (n) => {
                      if (((d.onerror = d.onload = null), "load" === n.type))
                        s();
                      else {
                        var r = n && n.type,
                          i = (n && n.target && n.target.href) || a,
                          b = new Error(
                            "Loading CSS chunk " +
                              e +
                              " failed.\n(" +
                              r +
                              ": " +
                              i +
                              ")",
                          );
                        (b.name = "ChunkLoadError"),
                          (b.code = "CSS_CHUNK_LOAD_FAILED"),
                          (b.type = r),
                          (b.request = i),
                          d.parentNode && d.parentNode.removeChild(d),
                          c(b);
                      }
                    }),
                  (d.href = a),
                  n
                    ? n.parentNode.insertBefore(d, n.nextSibling)
                    : document.head.appendChild(d);
              })(e, c, null, a, n);
            }),
          a = { 6700: 0 };
        i.f.miniCss = (n, s) => {
          a[n]
            ? s.push(a[n])
            : 0 !== a[n] &&
              {
                746: 1,
                1643: 1,
                2136: 1,
                2522: 1,
                2529: 1,
                3599: 1,
                3710: 1,
                3863: 1,
                4601: 1,
                4935: 1,
                5676: 1,
                6699: 1,
                6808: 1,
                6853: 1,
                7485: 1,
                7762: 1,
                8974: 1,
              }[n] &&
              s.push(
                (a[n] = e(n).then(
                  () => {
                    a[n] = 0;
                  },
                  (e) => {
                    throw (delete a[n], e);
                  },
                )),
              );
        };
      }
    })(),
    (() => {
      var e = { 6700: 0 };
      (i.f.j = (a, n) => {
        var s = i.o(e, a) ? e[a] : void 0;
        if (0 !== s)
          if (s) n.push(s[2]);
          else if (/^6(700|853)$/.test(a)) e[a] = 0;
          else {
            var c = new Promise((n, c) => (s = e[a] = [n, c]));
            n.push((s[2] = c));
            var d = i.p + i.u(a),
              r = new Error();
            i.l(
              d,
              (n) => {
                if (i.o(e, a) && (0 !== (s = e[a]) && (e[a] = void 0), s)) {
                  var c = n && ("load" === n.type ? "missing" : n.type),
                    d = n && n.target && n.target.src;
                  (r.message =
                    "Loading chunk " + a + " failed.\n(" + c + ": " + d + ")"),
                    (r.name = "ChunkLoadError"),
                    (r.type = c),
                    (r.request = d),
                    s[1](r);
                }
              },
              "chunk-" + a,
              a,
            );
          }
      }),
        (i.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var s,
            c,
            [d, r, b] = n,
            o = 0;
          if (d.some((a) => 0 !== e[a])) {
            for (s in r) i.o(r, s) && (i.m[s] = r[s]);
            if (b) var f = b(i);
          }
          for (a && a(n); o < d.length; o++)
            (c = d[o]), i.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
          return i.O(f);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();

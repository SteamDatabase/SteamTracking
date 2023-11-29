/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8528847";
(() => {
  "use strict";
  var a,
    e,
    n,
    i,
    o,
    c,
    s,
    t = {},
    f = {};
  function l(a) {
    var e = f[a];
    if (void 0 !== e) return e.exports;
    var n = (f[a] = { id: a, loaded: !1, exports: {} });
    return t[a].call(n.exports, n, n.exports, l), (n.loaded = !0), n.exports;
  }
  (l.m = t),
    (a = []),
    (l.O = (e, n, i, o) => {
      if (!n) {
        var c = 1 / 0;
        for (d = 0; d < a.length; d++) {
          for (var [n, i, o] = a[d], s = !0, t = 0; t < n.length; t++)
            (!1 & o || c >= o) && Object.keys(l.O).every((a) => l.O[a](n[t]))
              ? n.splice(t--, 1)
              : ((s = !1), o < c && (c = o));
          if (s) {
            a.splice(d--, 1);
            var f = i();
            void 0 !== f && (e = f);
          }
        }
        return e;
      }
      o = o || 0;
      for (var d = a.length; d > 0 && a[d - 1][2] > o; d--) a[d] = a[d - 1];
      a[d] = [n, i, o];
    }),
    (l.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return l.d(e, { a: e }), e;
    }),
    (n = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (l.t = function (a, i) {
      if ((1 & i && (a = this(a)), 8 & i)) return a;
      if ("object" == typeof a && a) {
        if (4 & i && a.__esModule) return a;
        if (16 & i && "function" == typeof a.then) return a;
      }
      var o = Object.create(null);
      l.r(o);
      var c = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var s = 2 & i && a; "object" == typeof s && !~e.indexOf(s); s = n(s))
        Object.getOwnPropertyNames(s).forEach((e) => (c[e] = () => a[e]));
      return (c.default = () => a), l.d(o, c), o;
    }),
    (l.d = (a, e) => {
      for (var n in e)
        l.o(e, n) &&
          !l.o(a, n) &&
          Object.defineProperty(a, n, { enumerable: !0, get: e[n] });
    }),
    (l.f = {}),
    (l.e = (a) =>
      Promise.all(Object.keys(l.f).reduce((e, n) => (l.f[n](a, e), e), []))),
    (l.u = (a) =>
      "javascript/applications/community/" +
      {
        27: "localization/shared_japanese-json",
        113: "localization/main_romanian-json",
        131: "localization/shared_english-json",
        146: "localization/shared_indonesian-json",
        238: "communityawardsapp",
        301: "localization/main_russian-json",
        312: "communityhomeheader",
        400: "chunk~b1f9f17fd",
        483: "libraries~c18a43282",
        508: "chunk~d2dd7ecf6",
        543: "libraries~9dbf41906",
        617: "localization/main_portuguese-json",
        755: "localization/shared_schinese-json",
        867: "localization/sales_hungarian-json",
        908: "qanda",
        960: "localization/sales_norwegian-json",
        961: "localization/sales_spanish-json",
        1133: "localization/main_bulgarian-json",
        1195: "localization/main_tchinese-json",
        1261: "localization/shared_norwegian-json",
        1311: "localization/main_greek-json",
        1496: "chunk~af55cc5d1",
        1546: "localization/sales_english-json",
        1579: "localization/shared_ukrainian-json",
        1649: "chunk~03410565e",
        1909: "notifications",
        1953: "localization/shared_finnish-json",
        2136: "events",
        2138: "localization/shared_thai-json",
        2235: "localization/sales_french-json",
        2329: "avatarcrop",
        2351: "localization/main_swedish-json",
        2373: "localization/sales_schinese-json",
        2449: "chunk~7a7b104fb",
        2468: "libraries~d2dd7ecf6",
        2530: "chunk~f036ce556",
        2557: "localization/main_ukrainian-json",
        2603: "localization/main_indonesian-json",
        2723: "localization/sales_polish-json",
        2738: "localization/shared_turkish-json",
        2745: "localization/sales_ukrainian-json",
        2805: "chunk~4b330692b",
        2822: "localization/shared_greek-json",
        2829: "libraries~5a92743e8",
        2832: "chunk~d3aa4b017",
        2837: "libraries~8e45aed72",
        3007: "localization/sales_finnish-json",
        3038: "localization/main_french-json",
        3068: "greenenvelope",
        3070: "libraries~7a7b104fb",
        3175: "libraries~dd2720453",
        3202: "localization/sales_vietnamese-json",
        3275: "libraries~c7a3fa389",
        3298: "localization/shared_brazilian-json",
        3352: "eventinternal",
        3499: "communityfaqs",
        3520: "chunk~8f4f68fd6",
        3591: "localization/sales_bulgarian-json",
        3602: "localization/shared_dutch-json",
        3801: "libraries~c1dfbefd5",
        3863: "libraries~de0610989",
        3903: "games",
        3973: "chunk~4e3b43bb2",
        4040: "chunk~c1dfbefd5",
        4097: "localization/shared_spanish-json",
        4183: "localization/shared_danish-json",
        4264: "libraries~7bb437d7f",
        4293: "localization/sales_german-json",
        4358: "localization/shared_sc_schinese-json",
        4445: "localization/shared_german-json",
        4469: "localization/shared_koreana-json",
        4487: "localization/shared_swedish-json",
        4513: "localization/shared_italian-json",
        4535: "login",
        4601: "broadcast",
        4729: "localization/shared_french-json",
        4819: "localization/sales_tchinese-json",
        4979: "localization/sales_italian-json",
        5012: "localization/main_italian-json",
        5119: "chunk~1935d6e28",
        5277: "localization/main_latam-json",
        5279: "localization/shared_hungarian-json",
        5436: "broadcasts",
        5439: "localization/sales_koreana-json",
        5493: "localization/main_thai-json",
        5494: "localization/sales_czech-json",
        5503: "chunk~44d969a12",
        5710: "gr",
        5757: "localization/main_norwegian-json",
        6091: "localization/main_koreana-json",
        6148: "libraries~4b330692b",
        6272: "conference",
        6378: "chunk~0012678b1",
        6403: "localization/shared_russian-json",
        6415: "localization/main_brazilian-json",
        6457: "localization/main_turkish-json",
        6588: "libraries~f036ce556",
        6656: "libraries~642602239",
        6658: "localization/sales_portuguese-json",
        6715: "localization/sales_sc_schinese-json",
        6844: "localization/shared_polish-json",
        6845: "profile",
        6932: "localization/sales_turkish-json",
        6962: "localization/main_dutch-json",
        7192: "localization/sales_indonesian-json",
        7629: "localization/main_schinese-json",
        7660: "localization/shared_romanian-json",
        7769: "localization/main_german-json",
        7781: "localization/shared_bulgarian-json",
        7832: "localization/shared_arabic-json",
        7901: "localization/main_vietnamese-json",
        7924: "localization/sales_latam-json",
        7948: "libraries~9e353dc2d",
        7971: "localization/sales_greek-json",
        7978: "libraries~69438e232",
        8085: "localization/shared_czech-json",
        8120: "chunk~8e45aed72",
        8274: "localization/main_hungarian-json",
        8282: "localization/main_czech-json",
        8291: "localization/main_polish-json",
        8427: "localization/main_finnish-json",
        8433: "localization/shared_vietnamese-json",
        8525: "localization/main_spanish-json",
        8592: "localization/main_danish-json",
        8647: "managefriends",
        8691: "libraries~9714d9815",
        8805: "localization/sales_russian-json",
        8931: "chunk~c18a43282",
        9167: "localization/sales_thai-json",
        9233: "localization/main_japanese-json",
        9295: "libraries~8f4f68fd6",
        9316: "localization/sales_romanian-json",
        9348: "chunk~69438e232",
        9349: "eventeditor",
        9389: "localization/main_sc_schinese-json",
        9427: "chunk~642602239",
        9513: "localization/sales_brazilian-json",
        9547: "localization/shared_tchinese-json",
        9561: "localization/sales_danish-json",
        9665: "localization/main_english-json",
        9828: "localization/sales_dutch-json",
        9854: "localization/shared_portuguese-json",
        9888: "localization/sales_swedish-json",
        9951: "localization/shared_latam-json",
        9991: "localization/sales_japanese-json",
      }[a] +
      ".js?contenthash=" +
      {
        27: "8c12709170907ae1be8d",
        113: "16f975d297081fa0c276",
        131: "2f9ad1f7d6db821e4dc1",
        146: "f21a1ca3e7c4c65a9562",
        238: "95d564736deb0443ccbe",
        301: "0aa50defe029dd3f6715",
        312: "7766518f8a92f9e53c93",
        400: "6a61e5f423354c874c1f",
        483: "6d2109442d8c0805c29c",
        508: "3ccf1f55b8e73a9559e4",
        543: "6989a74fcd173e8342a3",
        617: "14250da27c4328c9dcac",
        755: "814d440f2a5003be4ea6",
        867: "4c53b80015c5e793b8ed",
        908: "3f04c50c7397ff7007e6",
        960: "96b677dee5dba5af0c9b",
        961: "c2c17fc8b989d1951a72",
        1133: "33e537433c2a0c26b453",
        1195: "e8e0b989eeced6816703",
        1261: "662d9ecb769956a18f19",
        1311: "c370d42f93bdd025fa2f",
        1496: "b75715b6102baafbf4bb",
        1546: "b2a1a3c13151e2f5fcf2",
        1579: "96ff915fabab91908833",
        1649: "9dbd422ab263fa39aa04",
        1909: "dbe5194e5dd25f9bd709",
        1953: "ad12f87daa636b33dbfc",
        2136: "20ba9ede9d69e2e61c6c",
        2138: "817b0f9c5636df054738",
        2235: "16419fabdeaad073b82c",
        2329: "580cb569c2aa0f29227b",
        2351: "56b9205fcee86ce84287",
        2373: "a1a7d963fa6136e929d0",
        2449: "f52d718df523bac7df08",
        2468: "ddb17ea97a5f872e4d90",
        2530: "2f9bcccb4b4acc49366e",
        2557: "c0860a0475c2431ca6df",
        2603: "7d567adb5d3f52b1f388",
        2723: "b3c857cf44cc5ece0d6c",
        2738: "8b656fc7829da1975dd4",
        2745: "3022689731c9a79fdf5c",
        2805: "339cb522c730a5ae8afa",
        2822: "79182c539d6ab408023c",
        2829: "67d8b98ab69f4b27f1a1",
        2832: "4328005948ed1c7fd80b",
        2837: "38c9629a44598d574097",
        3007: "282bd235eadb115052a5",
        3038: "c35628947b3947d8f257",
        3068: "b91c0d199da1f458ca4a",
        3070: "8ab6d1a63fe826b6f317",
        3175: "87f11de90aff6ba54eb4",
        3202: "58e229aa024c3b8854c1",
        3275: "6be9f29df6e12fe13a3f",
        3298: "1f6ec86b3b7735908c76",
        3352: "aa5d11758934afb34c2a",
        3499: "e4690ff7c493d20f0550",
        3520: "1b7926ebee3a97ebecdb",
        3591: "43fabcc1d8f2b4d51ce7",
        3602: "5b0ee98a24ad1aebe98d",
        3801: "935d6dca83a89dfba995",
        3863: "ecb58ed8d691c868e065",
        3903: "0240987f6a663535e51b",
        3973: "4d4549e7d652f3d01402",
        4040: "132536d1c8a0b466f040",
        4097: "fed826837732458ad0cf",
        4183: "f3c1268a4b0e91a6e9dc",
        4264: "a73bf41a6c9068e085c7",
        4293: "983af9245621e6c9cc7a",
        4358: "7521a895cf2b89d2c95c",
        4445: "6b952d346c17d600837c",
        4469: "e64d2b6caff6af71c55f",
        4487: "b540c11141a4dc905811",
        4513: "471d27a51be2fcf2f3f5",
        4535: "63699afa514f1a967beb",
        4601: "ab32db48e97a45dc1e89",
        4729: "e40ee21c53c7f5aa0b76",
        4819: "7ca3b9bd3da96559ea15",
        4979: "b97ecdb354e5c12e8dcd",
        5012: "daa5a99c250894a68f88",
        5119: "5e9448909a21d6339db4",
        5277: "0e862e6ec57b28396634",
        5279: "d69791f52e5d0b4275e7",
        5436: "464440205384dfb8c9cf",
        5439: "febb9e2796fc9a1ad626",
        5493: "0215bd1919e7233b6314",
        5494: "e5368959f4c0c8579d6b",
        5503: "459b9e7d80ee8e084e7f",
        5710: "59b46b06bea3360be762",
        5757: "13743bd6ed5b61111b3e",
        6091: "3050bdc1983f08dacfe8",
        6148: "1ca0a59911794d934b2b",
        6272: "f226e717038efc1bde4f",
        6378: "e2c51ec34674063a0b4d",
        6403: "c447722a03c21d80e24e",
        6415: "fae7e1b58e778c573b84",
        6457: "ea73446e57e59fd57aa7",
        6588: "ce006eff3b1651207873",
        6656: "2bb99cd964501b9dd153",
        6658: "b2367e2c8ecc693018a1",
        6715: "b546f627254ec8397a36",
        6844: "368806a2da4ddc619881",
        6845: "542c2e7ffadc6a15db34",
        6932: "9c4311a4e140f9eb4e7c",
        6962: "8afba0f1fbef039c221b",
        7192: "f10a9c622bf551107448",
        7629: "d7003b515da7aa2dd1da",
        7660: "6ae4be48e82cc8ebc9ea",
        7769: "0fbade2798d2b71cf0a6",
        7781: "acbe56b6835cfab64371",
        7832: "e8085db9d08270eac33d",
        7901: "8819d631e09f8537bf0f",
        7924: "fcf931fc6521466c6413",
        7948: "5b55653852c85d64c578",
        7971: "d56d45a24acdbef97927",
        7978: "4af9807bc0dd762cc377",
        8085: "ba6b860e30c4974fb4a8",
        8120: "022aef5f32a7c9ca7b6e",
        8274: "f1dd001cb00ae6006444",
        8282: "dc799517768eb93a366b",
        8291: "9c949065c1d59467dcc0",
        8427: "fcbd32b86884b09c1d95",
        8433: "0d859e3413bd9d83d229",
        8525: "5ccb5a5d6a516702fa32",
        8592: "29aa86168637bfebe131",
        8647: "5bf29a3a2d097b05bd6c",
        8691: "5f8c6308e15a113f3e35",
        8805: "635a80d36263e5617027",
        8931: "d979d860a87a90f75a94",
        9167: "19f2dd6f3c2cef8f819e",
        9233: "74a9bd02c55f91a10def",
        9295: "c3c83aac1159390e1137",
        9316: "cca068c4d06cd07d9b66",
        9348: "c316481d96593303253d",
        9349: "aa044e683891d27e011d",
        9389: "f05dc25da8f7fd2bb88e",
        9427: "14d8141cce13b8ca661d",
        9513: "63043d11ac02e6363363",
        9547: "f8929a2354e1afd856d7",
        9561: "52e5ab440f5458087f99",
        9665: "5ed0c48ae42519c3c5b1",
        9828: "b9a61d3a282716bc6111",
        9854: "6216fd0514a4933745f7",
        9888: "d40f7a31feca675777d3",
        9951: "100ab077605172f1ebf9",
        9991: "34aa35f3646786aa094d",
      }[a]),
    (l.miniCssF = (a) =>
      "css/applications/community/" +
      {
        238: "communityawardsapp",
        312: "communityhomeheader",
        400: "chunk~b1f9f17fd",
        508: "chunk~d2dd7ecf6",
        908: "qanda",
        1909: "notifications",
        2136: "events",
        2329: "avatarcrop",
        2449: "chunk~7a7b104fb",
        2530: "chunk~f036ce556",
        3068: "greenenvelope",
        3352: "eventinternal",
        3499: "communityfaqs",
        3520: "chunk~8f4f68fd6",
        3903: "games",
        4535: "login",
        4601: "broadcast",
        5436: "broadcasts",
        6272: "conference",
        6845: "profile",
        8647: "managefriends",
        8931: "chunk~c18a43282",
        9348: "chunk~69438e232",
        9349: "eventeditor",
        9427: "chunk~642602239",
      }[a] +
      ".css?contenthash=" +
      {
        238: "9d553a26b9e194868478",
        312: "62d9d3172e8a21ccf304",
        400: "d3b0cceec53860b4d22c",
        508: "04f5d4e77bf9b4cd8019",
        908: "f802d50d6c3e94c89cff",
        1909: "2fca35912c0825f76d76",
        2136: "8c359fa0555fa2bd2c5d",
        2329: "a969564f4cdabf0c473e",
        2449: "73bf2444e0d5af416667",
        2530: "bad700c313ffaf7c2d59",
        3068: "b6e4e0dc417d633111af",
        3352: "f3838685918d3c88bdc3",
        3499: "f66814af59f83abee010",
        3520: "ecbab5cdec397713533e",
        3903: "ada073e77d3d84945cb9",
        4535: "120ef11d3786830c5571",
        4601: "fd94d248a892c0493422",
        5436: "671dce66cf8a63ffd3ac",
        6272: "54f6373c553646633f48",
        6845: "c5991fafb114f811dc73",
        8647: "2aa199fdf547121332be",
        8931: "7fc12270f0bbcbd30d65",
        9348: "e9a00325ee5334aaacb5",
        9349: "c88d816a31f37d59ca1d",
        9427: "f5083def34917808087a",
      }[a]),
    (l.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (a) {
        if ("object" == typeof window) return window;
      }
    })()),
    (l.o = (a, e) => Object.prototype.hasOwnProperty.call(a, e)),
    (i = {}),
    (o = "community:"),
    (l.l = (a, e, n, c) => {
      if (i[a]) i[a].push(e);
      else {
        var s, t;
        if (void 0 !== n)
          for (
            var f = document.getElementsByTagName("script"), d = 0;
            d < f.length;
            d++
          ) {
            var r = f[d];
            if (
              r.getAttribute("src") == a ||
              r.getAttribute("data-webpack") == o + n
            ) {
              s = r;
              break;
            }
          }
        s ||
          ((t = !0),
          ((s = document.createElement("script")).charset = "utf-8"),
          (s.timeout = 120),
          l.nc && s.setAttribute("nonce", l.nc),
          s.setAttribute("data-webpack", o + n),
          (s.src = a)),
          (i[a] = [e]);
        var b = (e, n) => {
            (s.onerror = s.onload = null), clearTimeout(h);
            var o = i[a];
            if (
              (delete i[a],
              s.parentNode && s.parentNode.removeChild(s),
              o && o.forEach((a) => a(n)),
              e)
            )
              return e(n);
          },
          h = setTimeout(
            b.bind(null, void 0, { type: "timeout", target: s }),
            12e4,
          );
        (s.onerror = b.bind(null, s.onerror)),
          (s.onload = b.bind(null, s.onload)),
          t && document.head.appendChild(s);
      }
    }),
    (l.r = (a) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (l.nmd = (a) => ((a.paths = []), a.children || (a.children = []), a)),
    (() => {
      var a;
      l.g.importScripts && (a = l.g.location + "");
      var e = l.g.document;
      if (!a && e && (e.currentScript && (a = e.currentScript.src), !a)) {
        var n = e.getElementsByTagName("script");
        n.length && (a = n[n.length - 1].src);
      }
      if (!a)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (a = a
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (l.p = a + "../../../");
    })(),
    (c = (a) =>
      new Promise((e, n) => {
        var i = l.miniCssF(a),
          o = l.p + i;
        if (
          ((a, e) => {
            for (
              var n = document.getElementsByTagName("link"), i = 0;
              i < n.length;
              i++
            ) {
              var o =
                (s = n[i]).getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (o === a || o === e)) return s;
            }
            var c = document.getElementsByTagName("style");
            for (i = 0; i < c.length; i++) {
              var s;
              if ((o = (s = c[i]).getAttribute("data-href")) === a || o === e)
                return s;
            }
          })(i, o)
        )
          return e();
        ((a, e, n, i) => {
          var o = document.createElement("link");
          (o.rel = "stylesheet"),
            (o.type = "text/css"),
            (o.onerror = o.onload =
              (c) => {
                if (((o.onerror = o.onload = null), "load" === c.type)) n();
                else {
                  var s = c && ("load" === c.type ? "missing" : c.type),
                    t = (c && c.target && c.target.href) || e,
                    f = new Error(
                      "Loading CSS chunk " + a + " failed.\n(" + t + ")",
                    );
                  (f.code = "CSS_CHUNK_LOAD_FAILED"),
                    (f.type = s),
                    (f.request = t),
                    o.parentNode.removeChild(o),
                    i(f);
                }
              }),
            (o.href = e),
            document.head.appendChild(o);
        })(a, o, e, n);
      })),
    (s = { 6700: 0 }),
    (l.f.miniCss = (a, e) => {
      s[a]
        ? e.push(s[a])
        : 0 !== s[a] &&
          {
            238: 1,
            312: 1,
            400: 1,
            508: 1,
            908: 1,
            1909: 1,
            2136: 1,
            2329: 1,
            2449: 1,
            2530: 1,
            3068: 1,
            3352: 1,
            3499: 1,
            3520: 1,
            3903: 1,
            4535: 1,
            4601: 1,
            5436: 1,
            6272: 1,
            6845: 1,
            8647: 1,
            8931: 1,
            9348: 1,
            9349: 1,
            9427: 1,
          }[a] &&
          e.push(
            (s[a] = c(a).then(
              () => {
                s[a] = 0;
              },
              (e) => {
                throw (delete s[a], e);
              },
            )),
          );
    }),
    (() => {
      var a = { 6700: 0 };
      (l.f.j = (e, n) => {
        var i = l.o(a, e) ? a[e] : void 0;
        if (0 !== i)
          if (i) n.push(i[2]);
          else if (/^(4601|6700)$/.test(e)) a[e] = 0;
          else {
            var o = new Promise((n, o) => (i = a[e] = [n, o]));
            n.push((i[2] = o));
            var c = l.p + l.u(e),
              s = new Error();
            l.l(
              c,
              (n) => {
                if (l.o(a, e) && (0 !== (i = a[e]) && (a[e] = void 0), i)) {
                  var o = n && ("load" === n.type ? "missing" : n.type),
                    c = n && n.target && n.target.src;
                  (s.message =
                    "Loading chunk " + e + " failed.\n(" + o + ": " + c + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = o),
                    (s.request = c),
                    i[1](s);
                }
              },
              "chunk-" + e,
              e,
            );
          }
      }),
        (l.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var i,
            o,
            [c, s, t] = n,
            f = 0;
          if (c.some((e) => 0 !== a[e])) {
            for (i in s) l.o(s, i) && (l.m[i] = s[i]);
            if (t) var d = t(l);
          }
          for (e && e(n); f < c.length; f++)
            (o = c[f]), l.o(a, o) && a[o] && a[o][0](), (a[o] = 0);
          return l.O(d);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();

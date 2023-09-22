/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8360360";
(() => {
  "use strict";
  var a,
    e,
    n,
    c,
    o,
    i,
    d,
    s = {},
    t = {};
  function l(a) {
    var e = t[a];
    if (void 0 !== e) return e.exports;
    var n = (t[a] = { id: a, loaded: !1, exports: {} });
    return s[a].call(n.exports, n, n.exports, l), (n.loaded = !0), n.exports;
  }
  (l.m = s),
    (a = []),
    (l.O = (e, n, c, o) => {
      if (!n) {
        var i = 1 / 0;
        for (r = 0; r < a.length; r++) {
          for (var [n, c, o] = a[r], d = !0, s = 0; s < n.length; s++)
            (!1 & o || i >= o) && Object.keys(l.O).every((a) => l.O[a](n[s]))
              ? n.splice(s--, 1)
              : ((d = !1), o < i && (i = o));
          if (d) {
            a.splice(r--, 1);
            var t = c();
            void 0 !== t && (e = t);
          }
        }
        return e;
      }
      o = o || 0;
      for (var r = a.length; r > 0 && a[r - 1][2] > o; r--) a[r] = a[r - 1];
      a[r] = [n, c, o];
    }),
    (l.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return l.d(e, { a: e }), e;
    }),
    (n = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (l.t = function (a, c) {
      if ((1 & c && (a = this(a)), 8 & c)) return a;
      if ("object" == typeof a && a) {
        if (4 & c && a.__esModule) return a;
        if (16 & c && "function" == typeof a.then) return a;
      }
      var o = Object.create(null);
      l.r(o);
      var i = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var d = 2 & c && a; "object" == typeof d && !~e.indexOf(d); d = n(d))
        Object.getOwnPropertyNames(d).forEach((e) => (i[e] = () => a[e]));
      return (i.default = () => a), l.d(o, i), o;
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
        2832: "chunk~d3aa4b017",
        3007: "localization/sales_finnish-json",
        3038: "localization/main_french-json",
        3068: "greenenvelope",
        3202: "localization/sales_vietnamese-json",
        3298: "localization/shared_brazilian-json",
        3352: "eventinternal",
        3499: "communityfaqs",
        3520: "chunk~8f4f68fd6",
        3591: "localization/sales_bulgarian-json",
        3602: "localization/shared_dutch-json",
        3742: "chunk~c7a3fa389",
        3903: "games",
        3973: "chunk~4e3b43bb2",
        4040: "chunk~c1dfbefd5",
        4097: "localization/shared_spanish-json",
        4183: "localization/shared_danish-json",
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
        7942: "chunk~5a92743e8",
        7948: "libraries~9e353dc2d",
        7971: "localization/sales_greek-json",
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
        9949: "chunk~9e353dc2d",
        9951: "localization/shared_latam-json",
        9991: "localization/sales_japanese-json",
      }[a] +
      ".js?contenthash=" +
      {
        27: "13365314f74bfdf38a47",
        113: "0343ecf4070471233801",
        131: "eecdc3951129ee663d71",
        146: "cc7c97772379c2056f8c",
        238: "95d564736deb0443ccbe",
        301: "b7fbbde1aa2c7c82a758",
        312: "edfed8940515937f78fc",
        400: "4c4d811ae230ae9fe28b",
        483: "e439fa5133b101be247c",
        508: "decd10c855fc74bc8d9f",
        543: "1c28d7dbf6692226edde",
        617: "860ff002ec3ff993b04b",
        755: "e2e82fe2e7d5fc562d7b",
        867: "b0c04c083285a7f92448",
        908: "2e1ba4342dd8df7eb7a3",
        960: "3326285853e7099cb1f9",
        961: "23fbd958d24ef4c2ceb6",
        1133: "066172f507da62542ac8",
        1195: "e59e57e2d4dbbae660cc",
        1261: "2fc12d8a8ac1274c1e0c",
        1311: "c02d6dc393758a28c4f7",
        1496: "456f9aef77d62bb80442",
        1546: "7afbe5a34c83f6b271dc",
        1579: "48fc16a387fd35990fe0",
        1649: "b6b632eee739e5b974c5",
        1909: "290f21221655f9bbbce5",
        1953: "601090c3f710075b6367",
        2136: "ebfb59a21e0a9b4f2189",
        2138: "d459297dfc471dd46eef",
        2235: "e17e32729e6df354e462",
        2329: "6ede7831cd4300fb2f63",
        2351: "39a43b37e47fb901bfc5",
        2373: "f523a58c4b4aafb6fb5b",
        2449: "c8d2748a2af5e7d75122",
        2468: "e087a3a20f163276b3fe",
        2530: "3ea5f1bd11127e1e623e",
        2557: "cf49b4d8bec7d54d8a1b",
        2603: "c7f4f20454484ea05dad",
        2723: "eeee73954621805996fb",
        2738: "509edc4110163f4c65ac",
        2745: "7f2aa37721c6f25ff870",
        2805: "bf0cf3cfd0a095629017",
        2822: "66da1aeae3e1a8a0526e",
        2832: "ffcddd4c5814b7eeb905",
        3007: "5d7e8afcac5f64a946c0",
        3038: "ad16c949914d6e641ff0",
        3068: "12390f8bdb0655883993",
        3202: "da131651a9d0462853ea",
        3298: "06fd1f9d7c26212a80d9",
        3352: "d756a9d5f29196808a9c",
        3499: "6a6fa8bde0d7884d35e6",
        3520: "3491dfd49074535f8d7b",
        3591: "d2529dd968843003fe8b",
        3602: "a7081f45a4758169d667",
        3742: "ee4d76a5b1d5d05beb62",
        3903: "8d2cb74073453242498a",
        3973: "76d9d7808882637f67b7",
        4040: "829624a8c243e2fc3b59",
        4097: "1356d227a56439893f58",
        4183: "1ac83b3eb2447eaf54be",
        4293: "c2e155281de0793e57f3",
        4358: "4ce9455e11438082e71f",
        4445: "bb98927e50e87e1b218a",
        4469: "d4dfa27833e603aff6ba",
        4487: "7c4cb384a51767e05f21",
        4513: "c499e0ab91e35db28602",
        4535: "cfcf2cb7a2ca623e29ad",
        4601: "d614ec7b3a1b81aeaf5b",
        4729: "1d6f5e303b11337c85c5",
        4819: "8dff8e3f8d747e467d6d",
        4979: "d9aa94a61366cb4eedc7",
        5012: "e144db4670e5175ed62e",
        5119: "66d920f8746f56b5cce4",
        5277: "84d4dc28a3b9958f7402",
        5279: "73b79db14bc16a6c2b33",
        5436: "e3bfe5afea21c72cf1c7",
        5439: "2fe1217a4449d2a33e41",
        5493: "d7741ab808961671ee26",
        5494: "a9268ea7f645c39bd670",
        5503: "0dee05ed3761dff5a610",
        5757: "856a28d5ed16d92569d4",
        6091: "0891ec8be8913f946458",
        6148: "1ca0a59911794d934b2b",
        6272: "22e59eac2730d2551417",
        6378: "e330fd6c04ee78f54250",
        6403: "ce5b3f5165ca179119d3",
        6415: "d4ef56759be6592a1362",
        6457: "b473c57f963d1c25ca2e",
        6588: "a5373e3d0e90ce9f0ed8",
        6656: "0620cc0db36da685d691",
        6658: "cb50e4de9152ebd0b97f",
        6715: "73ed36e62793e7039801",
        6844: "98661dd003e5d7f2ec89",
        6845: "0d1cca6cefac86729018",
        6932: "301cddc49417c10c61d8",
        6962: "0f2d1f9699f472e909bb",
        7192: "6de79a157e69a99ecbc1",
        7629: "d2d37447bf4b908f1040",
        7660: "8d017c16e04ec19088fc",
        7769: "3d50d223406b38f764cb",
        7781: "d4d53e110b1762c27f94",
        7832: "6028229c5663ec81b618",
        7901: "3324e93bda37fb8a0d32",
        7924: "8a82f884626a64637806",
        7942: "85058c22a912ab193afc",
        7948: "4701980ccbf99473c130",
        7971: "cb835939a127f041568d",
        8085: "42f73bfd31b8ffed8da7",
        8120: "7bc94c4985c7354351a2",
        8274: "4379d43b045998684d08",
        8282: "708d02cfd66a3aaa8fcd",
        8291: "524cc5574451d1b75e11",
        8427: "66de80739d208bb27b27",
        8433: "f567ca965aca64cd4d80",
        8525: "db2f05b2278370f8d3aa",
        8592: "3e7a7f5ec82e0e4f64a3",
        8647: "b6390c7ad92839ff7328",
        8691: "5f8c6308e15a113f3e35",
        8805: "49abd8b1b7471bdd5998",
        8931: "0284fd7db5d9075a9bce",
        9167: "628cc5f8c8b69806f831",
        9233: "9763733eec1a513d16e0",
        9316: "666cac3de59b62d01c6a",
        9348: "844f2faf05abbfc00950",
        9349: "8ab7038c304021f562d0",
        9389: "060bc6a83ca76626d72f",
        9427: "8160e7e646bf0b2ea946",
        9513: "35258c7dc2109892991a",
        9547: "e9f400df53a99e878112",
        9561: "1305a3080afa6184fd82",
        9665: "3b8cc22b69e3c006e3e1",
        9828: "8e0d79f2738e34655b51",
        9854: "20be236ba91db88be3f7",
        9888: "5fa48ac333e39a23de8e",
        9949: "fd7f67eb28f4865d8074",
        9951: "1bcb630429c7f8ff562b",
        9991: "701f2f894029509c1633",
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
        400: "d3b3b8dd557d28493c21",
        508: "c65998e1ad195a04606d",
        908: "4410eb623c003680bd1f",
        1909: "2fca35912c0825f76d76",
        2136: "8c359fa0555fa2bd2c5d",
        2329: "a969564f4cdabf0c473e",
        2449: "0d5e907913e9b6c322c3",
        2530: "e544311e04b182a5f6c4",
        3068: "b6e4e0dc417d633111af",
        3352: "f3838685918d3c88bdc3",
        3499: "f66814af59f83abee010",
        3520: "116799bd164c280d9ce6",
        3903: "fd3f85ef3102d792b6b0",
        4535: "120ef11d3786830c5571",
        4601: "7051786867362f304840",
        5436: "671dce66cf8a63ffd3ac",
        6272: "421aa9f56f19d4e59fdb",
        6845: "c5991fafb114f811dc73",
        8647: "2aa199fdf547121332be",
        8931: "4ca1ae04c77a330d340d",
        9348: "26d803a4798502279180",
        9349: "191ac183cba18bd1b386",
        9427: "f0a65a70165224eb6bab",
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
    (c = {}),
    (o = "community:"),
    (l.l = (a, e, n, i) => {
      if (c[a]) c[a].push(e);
      else {
        var d, s;
        if (void 0 !== n)
          for (
            var t = document.getElementsByTagName("script"), r = 0;
            r < t.length;
            r++
          ) {
            var f = t[r];
            if (
              f.getAttribute("src") == a ||
              f.getAttribute("data-webpack") == o + n
            ) {
              d = f;
              break;
            }
          }
        d ||
          ((s = !0),
          ((d = document.createElement("script")).charset = "utf-8"),
          (d.timeout = 120),
          l.nc && d.setAttribute("nonce", l.nc),
          d.setAttribute("data-webpack", o + n),
          (d.src = a)),
          (c[a] = [e]);
        var b = (e, n) => {
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
            b.bind(null, void 0, { type: "timeout", target: d }),
            12e4,
          );
        (d.onerror = b.bind(null, d.onerror)),
          (d.onload = b.bind(null, d.onload)),
          s && document.head.appendChild(d);
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
    (i = (a) =>
      new Promise((e, n) => {
        var c = l.miniCssF(a),
          o = l.p + c;
        if (
          ((a, e) => {
            for (
              var n = document.getElementsByTagName("link"), c = 0;
              c < n.length;
              c++
            ) {
              var o =
                (d = n[c]).getAttribute("data-href") || d.getAttribute("href");
              if ("stylesheet" === d.rel && (o === a || o === e)) return d;
            }
            var i = document.getElementsByTagName("style");
            for (c = 0; c < i.length; c++) {
              var d;
              if ((o = (d = i[c]).getAttribute("data-href")) === a || o === e)
                return d;
            }
          })(c, o)
        )
          return e();
        ((a, e, n, c) => {
          var o = document.createElement("link");
          (o.rel = "stylesheet"),
            (o.type = "text/css"),
            (o.onerror = o.onload =
              (i) => {
                if (((o.onerror = o.onload = null), "load" === i.type)) n();
                else {
                  var d = i && ("load" === i.type ? "missing" : i.type),
                    s = (i && i.target && i.target.href) || e,
                    t = new Error(
                      "Loading CSS chunk " + a + " failed.\n(" + s + ")",
                    );
                  (t.code = "CSS_CHUNK_LOAD_FAILED"),
                    (t.type = d),
                    (t.request = s),
                    o.parentNode.removeChild(o),
                    c(t);
                }
              }),
            (o.href = e),
            document.head.appendChild(o);
        })(a, o, e, n);
      })),
    (d = { 6700: 0 }),
    (l.f.miniCss = (a, e) => {
      d[a]
        ? e.push(d[a])
        : 0 !== d[a] &&
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
            (d[a] = i(a).then(
              () => {
                d[a] = 0;
              },
              (e) => {
                throw (delete d[a], e);
              },
            )),
          );
    }),
    (() => {
      var a = { 6700: 0 };
      (l.f.j = (e, n) => {
        var c = l.o(a, e) ? a[e] : void 0;
        if (0 !== c)
          if (c) n.push(c[2]);
          else if (/^(4601|6700)$/.test(e)) a[e] = 0;
          else {
            var o = new Promise((n, o) => (c = a[e] = [n, o]));
            n.push((c[2] = o));
            var i = l.p + l.u(e),
              d = new Error();
            l.l(
              i,
              (n) => {
                if (l.o(a, e) && (0 !== (c = a[e]) && (a[e] = void 0), c)) {
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
        (l.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var c,
            o,
            [i, d, s] = n,
            t = 0;
          if (i.some((e) => 0 !== a[e])) {
            for (c in d) l.o(d, c) && (l.m[c] = d[c]);
            if (s) var r = s(l);
          }
          for (e && e(n); t < i.length; t++)
            (o = i[t]), l.o(a, o) && a[o] && a[o][0](), (a[o] = 0);
          return l.O(r);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();

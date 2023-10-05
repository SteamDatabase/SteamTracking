/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8396638";
(() => {
  "use strict";
  var a,
    e,
    n,
    c,
    i,
    o,
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
    (l.O = (e, n, c, i) => {
      if (!n) {
        var o = 1 / 0;
        for (f = 0; f < a.length; f++) {
          for (var [n, c, i] = a[f], d = !0, s = 0; s < n.length; s++)
            (!1 & i || o >= i) && Object.keys(l.O).every((a) => l.O[a](n[s]))
              ? n.splice(s--, 1)
              : ((d = !1), i < o && (o = i));
          if (d) {
            a.splice(f--, 1);
            var t = c();
            void 0 !== t && (e = t);
          }
        }
        return e;
      }
      i = i || 0;
      for (var f = a.length; f > 0 && a[f - 1][2] > i; f--) a[f] = a[f - 1];
      a[f] = [n, c, i];
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
      var i = Object.create(null);
      l.r(i);
      var o = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var d = 2 & c && a; "object" == typeof d && !~e.indexOf(d); d = n(d))
        Object.getOwnPropertyNames(d).forEach((e) => (o[e] = () => a[e]));
      return (o.default = () => a), l.d(i, o), i;
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
        6313: "libraries~af55cc5d1",
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
        9949: "chunk~9e353dc2d",
        9951: "localization/shared_latam-json",
        9991: "localization/sales_japanese-json",
      }[a] +
      ".js?contenthash=" +
      {
        27: "1e014df910076ac82677",
        113: "0343ecf4070471233801",
        131: "4dd86b3c22be57e5abf0",
        146: "7e666a9aa9357e947ff4",
        238: "95d564736deb0443ccbe",
        301: "e07626498cd428d3a94b",
        312: "a016f9a1ab7dba9596a4",
        400: "76feca9a486f97dac9e8",
        483: "51e3f38da1ceea4b7163",
        508: "f6025645035e70322fec",
        543: "1c28d7dbf6692226edde",
        617: "860ff002ec3ff993b04b",
        755: "692e46d5af0b0fb5e1c0",
        867: "b0c04c083285a7f92448",
        908: "5d184a480d800dd021a4",
        960: "3326285853e7099cb1f9",
        961: "23fbd958d24ef4c2ceb6",
        1133: "7abffead40756ec6a907",
        1195: "e59e57e2d4dbbae660cc",
        1261: "96792b390d8041cf28ba",
        1311: "75cc85a14927984c259e",
        1496: "1adb3edc58c38eab7586",
        1546: "7afbe5a34c83f6b271dc",
        1579: "5ef3fd09ea61186c3bb2",
        1649: "f050cece0ac11fbf45ce",
        1909: "f76be888844a34cc568b",
        1953: "4c159738108c21da94b3",
        2136: "16c76857022a7f1b8d74",
        2138: "cb57c05543560f214152",
        2235: "e17e32729e6df354e462",
        2329: "6ede7831cd4300fb2f63",
        2351: "39a43b37e47fb901bfc5",
        2373: "f523a58c4b4aafb6fb5b",
        2449: "42424e8c3f0c5f9d99c9",
        2468: "4206716472a30ba9a4af",
        2530: "88067b1746c959272779",
        2557: "cf49b4d8bec7d54d8a1b",
        2603: "9a1b3b2825cb2eb87ceb",
        2723: "eeee73954621805996fb",
        2738: "eb344810789921763c34",
        2745: "7f2aa37721c6f25ff870",
        2805: "cd74282e2679c30236a5",
        2822: "096e2e157fcbc6bc4cb8",
        2829: "92995b0dc4568eaf314e",
        2832: "c1af5b11e47bd8c52468",
        2837: "f122cb522e468f8218ef",
        3007: "5d7e8afcac5f64a946c0",
        3038: "ad16c949914d6e641ff0",
        3068: "eb028b8eca57adc87d7d",
        3070: "458aa3935fb0b29005ba",
        3175: "47c6c348041e1d3cd66f",
        3202: "da131651a9d0462853ea",
        3275: "ee11f1babb660b966c00",
        3298: "416f42463ec0642d62a0",
        3352: "8c6adb2d86ddac2c33c5",
        3499: "632208729dfe8875ce7a",
        3520: "7aa4be5be7bd976e1ad3",
        3591: "d2529dd968843003fe8b",
        3602: "0ceb06d2ffa05d9542cd",
        3801: "5fd773bb8aeb2af7cac1",
        3903: "5d5fb1f370fe6c32dc78",
        3973: "3ee49f563d805e4ea457",
        4040: "70cd3b1b4587cadd2ccd",
        4097: "cd561da956e7ab9f009e",
        4183: "47965aeb51ed3dba69d9",
        4293: "c2e155281de0793e57f3",
        4358: "4ce9455e11438082e71f",
        4445: "bda8b08c4248df1e3864",
        4469: "0ca438113842465e5111",
        4487: "399f2b3b2b6a5771e96c",
        4513: "83473fdaa6e803157379",
        4535: "9567e17c46c30d2a2a6f",
        4601: "e77f4484ccc5b001b131",
        4729: "0f1b9205fffb9d52aa3b",
        4819: "8dff8e3f8d747e467d6d",
        4979: "d9aa94a61366cb4eedc7",
        5012: "e144db4670e5175ed62e",
        5119: "66d920f8746f56b5cce4",
        5277: "84d4dc28a3b9958f7402",
        5279: "e7d8769fe990e9a33c4b",
        5436: "8cbccea0ba63dd8016cd",
        5439: "2fe1217a4449d2a33e41",
        5493: "d7741ab808961671ee26",
        5494: "a9268ea7f645c39bd670",
        5503: "3c60b202452b8d773e08",
        5757: "856a28d5ed16d92569d4",
        6091: "0891ec8be8913f946458",
        6148: "1ca0a59911794d934b2b",
        6272: "e4582179b9279479ad78",
        6313: "e187bfd41b8080de68ee",
        6378: "84f282c00660307da92a",
        6403: "1f354d69427ab75894b1",
        6415: "d4ef56759be6592a1362",
        6457: "b473c57f963d1c25ca2e",
        6588: "56426a5e1bb62f4487d1",
        6656: "39aa1ec83012ae955c0c",
        6658: "cb50e4de9152ebd0b97f",
        6715: "73ed36e62793e7039801",
        6844: "d5918eee427fb61b1c06",
        6845: "0f9274a81d54df3b5e2d",
        6932: "301cddc49417c10c61d8",
        6962: "0f2d1f9699f472e909bb",
        7192: "6de79a157e69a99ecbc1",
        7629: "d2d37447bf4b908f1040",
        7660: "43479e3890b77e80f5a1",
        7769: "3d50d223406b38f764cb",
        7781: "2a1ea805ab94e2b7aaad",
        7832: "6028229c5663ec81b618",
        7901: "09eefae1d0a9bc8ec07f",
        7924: "8a82f884626a64637806",
        7948: "4701980ccbf99473c130",
        7971: "cb835939a127f041568d",
        7978: "dff50df0b634e667c3c7",
        8085: "2f8b4a46614be6004e2c",
        8120: "0788661c0641dcc54639",
        8274: "4379d43b045998684d08",
        8282: "708d02cfd66a3aaa8fcd",
        8291: "524cc5574451d1b75e11",
        8427: "41270e2627c3da1f4271",
        8433: "0492c9cb81feb3fcbbb1",
        8525: "db2f05b2278370f8d3aa",
        8592: "3e7a7f5ec82e0e4f64a3",
        8647: "2042c237b59f5422b159",
        8691: "5f8c6308e15a113f3e35",
        8805: "49abd8b1b7471bdd5998",
        8931: "c099596d6f759d97a503",
        9167: "628cc5f8c8b69806f831",
        9233: "9763733eec1a513d16e0",
        9295: "80524d4ec0f7088db02a",
        9316: "666cac3de59b62d01c6a",
        9348: "990c49836b01873a62f6",
        9349: "896d26a270e629e424f4",
        9389: "060bc6a83ca76626d72f",
        9427: "417e71c8c93494990b62",
        9513: "35258c7dc2109892991a",
        9547: "f3c322405e90bd12a23b",
        9561: "1305a3080afa6184fd82",
        9665: "3b8cc22b69e3c006e3e1",
        9828: "8e0d79f2738e34655b51",
        9854: "aa987ecde6882c595c83",
        9888: "5fa48ac333e39a23de8e",
        9949: "6b8df81848f32e4688f2",
        9951: "9269f52e0fcafcc0121f",
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
        9949: "chunk~9e353dc2d",
      }[a] +
      ".css?contenthash=" +
      {
        238: "9d553a26b9e194868478",
        312: "62d9d3172e8a21ccf304",
        400: "9263a34eb81a1af0e29d",
        508: "94777a3f8620a9dceffc",
        908: "0e081bbb135c85d95ae8",
        1909: "2fca35912c0825f76d76",
        2136: "8c359fa0555fa2bd2c5d",
        2329: "a969564f4cdabf0c473e",
        2449: "98424c5985a2042f2690",
        2530: "e544311e04b182a5f6c4",
        3068: "b6e4e0dc417d633111af",
        3352: "f3838685918d3c88bdc3",
        3499: "f66814af59f83abee010",
        3520: "e4cc2b2c0e542eb973b7",
        3903: "fd3f85ef3102d792b6b0",
        4535: "120ef11d3786830c5571",
        4601: "7051786867362f304840",
        5436: "671dce66cf8a63ffd3ac",
        6272: "421aa9f56f19d4e59fdb",
        6845: "c5991fafb114f811dc73",
        8647: "2aa199fdf547121332be",
        8931: "762ad39d9d9173903980",
        9348: "0aef8f7f9177ee5f8011",
        9349: "191ac183cba18bd1b386",
        9427: "3c0257d998c7b3442024",
        9949: "987e045eefabcb9970e8",
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
    (i = "community:"),
    (l.l = (a, e, n, o) => {
      if (c[a]) c[a].push(e);
      else {
        var d, s;
        if (void 0 !== n)
          for (
            var t = document.getElementsByTagName("script"), f = 0;
            f < t.length;
            f++
          ) {
            var r = t[f];
            if (
              r.getAttribute("src") == a ||
              r.getAttribute("data-webpack") == i + n
            ) {
              d = r;
              break;
            }
          }
        d ||
          ((s = !0),
          ((d = document.createElement("script")).charset = "utf-8"),
          (d.timeout = 120),
          l.nc && d.setAttribute("nonce", l.nc),
          d.setAttribute("data-webpack", i + n),
          (d.src = a)),
          (c[a] = [e]);
        var b = (e, n) => {
            (d.onerror = d.onload = null), clearTimeout(h);
            var i = c[a];
            if (
              (delete c[a],
              d.parentNode && d.parentNode.removeChild(d),
              i && i.forEach((a) => a(n)),
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
    (o = (a) =>
      new Promise((e, n) => {
        var c = l.miniCssF(a),
          i = l.p + c;
        if (
          ((a, e) => {
            for (
              var n = document.getElementsByTagName("link"), c = 0;
              c < n.length;
              c++
            ) {
              var i =
                (d = n[c]).getAttribute("data-href") || d.getAttribute("href");
              if ("stylesheet" === d.rel && (i === a || i === e)) return d;
            }
            var o = document.getElementsByTagName("style");
            for (c = 0; c < o.length; c++) {
              var d;
              if ((i = (d = o[c]).getAttribute("data-href")) === a || i === e)
                return d;
            }
          })(c, i)
        )
          return e();
        ((a, e, n, c) => {
          var i = document.createElement("link");
          (i.rel = "stylesheet"),
            (i.type = "text/css"),
            (i.onerror = i.onload =
              (o) => {
                if (((i.onerror = i.onload = null), "load" === o.type)) n();
                else {
                  var d = o && ("load" === o.type ? "missing" : o.type),
                    s = (o && o.target && o.target.href) || e,
                    t = new Error(
                      "Loading CSS chunk " + a + " failed.\n(" + s + ")",
                    );
                  (t.code = "CSS_CHUNK_LOAD_FAILED"),
                    (t.type = d),
                    (t.request = s),
                    i.parentNode.removeChild(i),
                    c(t);
                }
              }),
            (i.href = e),
            document.head.appendChild(i);
        })(a, i, e, n);
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
            9949: 1,
          }[a] &&
          e.push(
            (d[a] = o(a).then(
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
            var i = new Promise((n, i) => (c = a[e] = [n, i]));
            n.push((c[2] = i));
            var o = l.p + l.u(e),
              d = new Error();
            l.l(
              o,
              (n) => {
                if (l.o(a, e) && (0 !== (c = a[e]) && (a[e] = void 0), c)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    o = n && n.target && n.target.src;
                  (d.message =
                    "Loading chunk " + e + " failed.\n(" + i + ": " + o + ")"),
                    (d.name = "ChunkLoadError"),
                    (d.type = i),
                    (d.request = o),
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
            i,
            [o, d, s] = n,
            t = 0;
          if (o.some((e) => 0 !== a[e])) {
            for (c in d) l.o(d, c) && (l.m[c] = d[c]);
            if (s) var f = s(l);
          }
          for (e && e(n); t < o.length; t++)
            (i = o[t]), l.o(a, i) && a[i] && a[i][0](), (a[i] = 0);
          return l.O(f);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();

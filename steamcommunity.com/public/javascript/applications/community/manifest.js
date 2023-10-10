/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8408317";
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
        27: "9d44ac5d828f780f1690",
        113: "0343ecf4070471233801",
        131: "be7c5f78eb8684a3d236",
        146: "188211de4ad6f661480f",
        238: "95d564736deb0443ccbe",
        301: "e07626498cd428d3a94b",
        312: "a016f9a1ab7dba9596a4",
        400: "76feca9a486f97dac9e8",
        483: "51e3f38da1ceea4b7163",
        508: "f689823450444674a2b7",
        543: "1c28d7dbf6692226edde",
        617: "860ff002ec3ff993b04b",
        755: "bf1f80ed3b06c2f2069c",
        867: "8988baa5fe8c00d207ed",
        908: "c3c9e792336ced239cb3",
        960: "0821f80277a8d5eaa703",
        961: "706c8bbb344a5b5f012f",
        1133: "7abffead40756ec6a907",
        1195: "e59e57e2d4dbbae660cc",
        1261: "6eaedfd4e45e90ec9cf3",
        1311: "1bb2bbd859878c7d4a22",
        1496: "1adb3edc58c38eab7586",
        1546: "66fa680c5f641af586b2",
        1579: "18228a9a6c221c0fc78d",
        1649: "f050cece0ac11fbf45ce",
        1909: "f76be888844a34cc568b",
        1953: "6e5ba5d04373c6425ce8",
        2136: "16c76857022a7f1b8d74",
        2138: "41a4bd9aee2d90ee073c",
        2235: "bcc6b9b85d27f950ad62",
        2329: "6ede7831cd4300fb2f63",
        2351: "39a43b37e47fb901bfc5",
        2373: "4d6f2e26f0d4ab138144",
        2449: "42424e8c3f0c5f9d99c9",
        2468: "4206716472a30ba9a4af",
        2530: "ac03edb408dbe839c029",
        2557: "cf49b4d8bec7d54d8a1b",
        2603: "9a1b3b2825cb2eb87ceb",
        2723: "4bd23e80ff27844b4ba7",
        2738: "e544c37d02e7f2ce26e2",
        2745: "119eeb7c6f63becd53ca",
        2805: "cd74282e2679c30236a5",
        2822: "11a2e3cdf93b5a7dad65",
        2829: "92995b0dc4568eaf314e",
        2832: "c1af5b11e47bd8c52468",
        2837: "f122cb522e468f8218ef",
        3007: "818f010c268b50f57720",
        3038: "ad16c949914d6e641ff0",
        3068: "eb028b8eca57adc87d7d",
        3070: "458aa3935fb0b29005ba",
        3175: "47c6c348041e1d3cd66f",
        3202: "970a06ac97d0560d2536",
        3275: "ee11f1babb660b966c00",
        3298: "d0a1f418d3c89e514406",
        3352: "8c6adb2d86ddac2c33c5",
        3499: "632208729dfe8875ce7a",
        3520: "fa51c94d795572f50924",
        3591: "b1c80589c1fc90631f13",
        3602: "d0f3653ffdfdda6450ab",
        3801: "c4b06c5472c2eb194034",
        3903: "5d5fb1f370fe6c32dc78",
        3973: "3ee49f563d805e4ea457",
        4040: "70cd3b1b4587cadd2ccd",
        4097: "a9ef5f961aec137694c2",
        4183: "ed17d53acf8c56d68cb1",
        4293: "aed620f88a02414ce8c5",
        4358: "4ce9455e11438082e71f",
        4445: "7347906e724b3e0edb40",
        4469: "7d6b42be0f41efe0df1f",
        4487: "c83f802ea3ae0605c5f8",
        4513: "466f7bc207065074a4cd",
        4535: "9567e17c46c30d2a2a6f",
        4601: "e77f4484ccc5b001b131",
        4729: "6358ea6328cf6138bdc5",
        4819: "f194e1388626823c50aa",
        4979: "afa3168a3e6123cd9122",
        5012: "e144db4670e5175ed62e",
        5119: "66d920f8746f56b5cce4",
        5277: "84d4dc28a3b9958f7402",
        5279: "c9d640f301756249777f",
        5436: "8cbccea0ba63dd8016cd",
        5439: "c3a9b19335bd0aed37ef",
        5493: "d7741ab808961671ee26",
        5494: "5312b6f887f9f7acee3d",
        5503: "3c60b202452b8d773e08",
        5757: "856a28d5ed16d92569d4",
        6091: "0891ec8be8913f946458",
        6148: "1ca0a59911794d934b2b",
        6272: "e4582179b9279479ad78",
        6313: "e187bfd41b8080de68ee",
        6378: "84f282c00660307da92a",
        6403: "ae69a5df41a9d291b4d9",
        6415: "d4ef56759be6592a1362",
        6457: "b473c57f963d1c25ca2e",
        6588: "56426a5e1bb62f4487d1",
        6656: "39aa1ec83012ae955c0c",
        6658: "45570c32466498e40e81",
        6715: "73ed36e62793e7039801",
        6844: "41717298936c0c772522",
        6845: "0f9274a81d54df3b5e2d",
        6932: "826558c89582f9d315b4",
        6962: "0f2d1f9699f472e909bb",
        7192: "4c8b00368c3b472f5554",
        7629: "d2d37447bf4b908f1040",
        7660: "f35153492e324dfc992d",
        7769: "3d50d223406b38f764cb",
        7781: "6458dcd9a63e7bd827ec",
        7832: "6028229c5663ec81b618",
        7901: "09eefae1d0a9bc8ec07f",
        7924: "c6dbae3dffe9939d6432",
        7948: "4701980ccbf99473c130",
        7971: "94afb3bd9dfcdfc7985f",
        7978: "b82fb3e6572974baac13",
        8085: "a1fe3af7593de08ffb8d",
        8120: "0788661c0641dcc54639",
        8274: "4379d43b045998684d08",
        8282: "2523e7f6c67546b0aae2",
        8291: "524cc5574451d1b75e11",
        8427: "41270e2627c3da1f4271",
        8433: "edc5a82a3fb705af5ce1",
        8525: "db2f05b2278370f8d3aa",
        8592: "3e7a7f5ec82e0e4f64a3",
        8647: "e4f391991cf3e7474299",
        8691: "5f8c6308e15a113f3e35",
        8805: "caa72a9232b96e35693c",
        8931: "c099596d6f759d97a503",
        9167: "815a57383d822d16938b",
        9233: "9763733eec1a513d16e0",
        9295: "80524d4ec0f7088db02a",
        9316: "34454dcceef53591d595",
        9348: "b166ecd5a1e20506ce3b",
        9349: "896d26a270e629e424f4",
        9389: "060bc6a83ca76626d72f",
        9427: "417e71c8c93494990b62",
        9513: "bdbc374d75d5bfb16b82",
        9547: "5c1d69b8e72507cae785",
        9561: "8b07e227ebf2479bf4b5",
        9665: "3b8cc22b69e3c006e3e1",
        9828: "8c2c2e678cb2cb7f5778",
        9854: "4b5be735457c95c88134",
        9888: "01afd9ff82cbf554fe11",
        9949: "6b8df81848f32e4688f2",
        9951: "c69a9ec330531e0d38c6",
        9991: "6b25c69e0aac0a6ab085",
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
        2530: "abbdd20a2e9abb001e29",
        3068: "b6e4e0dc417d633111af",
        3352: "f3838685918d3c88bdc3",
        3499: "f66814af59f83abee010",
        3520: "4a2d1a22720e77772d7a",
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

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8481116";
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
        for (r = 0; r < a.length; r++) {
          for (var [n, c, i] = a[r], d = !0, s = 0; s < n.length; s++)
            (!1 & i || o >= i) && Object.keys(l.O).every((a) => l.O[a](n[s]))
              ? n.splice(s--, 1)
              : ((d = !1), i < o && (o = i));
          if (d) {
            a.splice(r--, 1);
            var t = c();
            void 0 !== t && (e = t);
          }
        }
        return e;
      }
      i = i || 0;
      for (var r = a.length; r > 0 && a[r - 1][2] > i; r--) a[r] = a[r - 1];
      a[r] = [n, c, i];
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
        1421: "libraries~b1f9f17fd",
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
        3295: "WSLDEDIT",
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
        5757: "localization/main_norwegian-json",
        5988: "WSLD",
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
        27: "594df0038109ab07d960",
        113: "ffbe9d645f92ff3ac76e",
        131: "7882298ee340c78483a9",
        146: "9f3ef79b02380008664a",
        238: "95d564736deb0443ccbe",
        301: "5f9909982bb9a5da6d1e",
        312: "429e3275b66e91a9640d",
        400: "0aaeaa36c8191a39aae0",
        483: "869e6b3fb6579de1d7e6",
        508: "06ad3bb732efa391d7d6",
        543: "1c28d7dbf6692226edde",
        617: "67cdf4b0f6302041eaba",
        755: "255800edd3f2e30da01b",
        867: "8d15a205537876ebd875",
        908: "f03a5acd6f90f37eb256",
        960: "68b440135d09be55a3f1",
        961: "d470d8abaf75d3967419",
        1133: "d4579d5692ce13725df8",
        1195: "e2851a6d248f6f9a5a84",
        1261: "f2610f3544cdca51efe5",
        1311: "6ffc2e8077100a2d4eca",
        1421: "fe9492cc25e53226a1e8",
        1496: "456f9aef77d62bb80442",
        1546: "7be828603eea5e5d8c73",
        1579: "e6e3c4cda9f2ce61d47c",
        1649: "9dbd422ab263fa39aa04",
        1909: "89386b6829c051eb71ab",
        1953: "77917255f5d72a9627da",
        2136: "7060047d8c3fe70b95da",
        2138: "2c8c4e7698a256e00c12",
        2235: "cf99af3c233388e25cf6",
        2329: "580cb569c2aa0f29227b",
        2351: "31b105c8f50a188d31b0",
        2373: "02f06e09befcbafe91af",
        2449: "c5b1e56e0793a71b362b",
        2468: "ceda98e0ffce0514cf47",
        2530: "9ba83e78999a6d58e502",
        2557: "4acbba7ea1f38c2ea27a",
        2603: "7d7e25424d213a7ba555",
        2723: "29cad6652e2ea5539208",
        2738: "e7fe6ba12505524b3e02",
        2745: "21ee6ea7e2a2b464e700",
        2805: "c833e2a9e6459ea3bb7b",
        2822: "e8a9e4c92d4b222d080a",
        2829: "67d8b98ab69f4b27f1a1",
        2832: "d46d64ceb5288a3a8c14",
        2837: "38c9629a44598d574097",
        3007: "4e45fd4e3f952b26dbc2",
        3038: "363bfc2d46c3e170e41b",
        3068: "c55a3c93c14e4270173a",
        3070: "8ab6d1a63fe826b6f317",
        3175: "634a978d512e0f204a41",
        3202: "7b59783416ccb2ad0bae",
        3275: "6be9f29df6e12fe13a3f",
        3295: "0c2aae354b29f129baa7",
        3298: "a3dd0c1ff92cb0bae912",
        3352: "161f0e6ef5975076b907",
        3499: "95aca13c0465dff4aa1b",
        3520: "0f6c5b0257d4e11bdfd2",
        3591: "fe550d8c815714b8cd52",
        3602: "0f450959b094ac950da0",
        3801: "c2a3b91fbb2172e138a2",
        3903: "1c285d6ad46828c322a1",
        3973: "4d4549e7d652f3d01402",
        4040: "3e9d94bdd6b8fddbe9f2",
        4097: "eb367ec588be334ec7cc",
        4183: "716f864184cf9c27e3de",
        4264: "a73bf41a6c9068e085c7",
        4293: "c1c0a2b1e2b4aa34f59f",
        4358: "7521a895cf2b89d2c95c",
        4445: "021081a5165ab48bf71d",
        4469: "69d99b2a0786abbc946c",
        4487: "f62393f54b3156d817a5",
        4513: "eee5e5fa76a136e247f4",
        4535: "63699afa514f1a967beb",
        4601: "e77f4484ccc5b001b131",
        4729: "9b5d5bf2b2cbd95133bd",
        4819: "81962c369cb3ddf0d911",
        4979: "e219f2553659401148c7",
        5012: "2571784bf3016ca0e7fa",
        5119: "66d920f8746f56b5cce4",
        5277: "a315f06ba5e342652955",
        5279: "97ec6427ec1fdbf9a5b6",
        5436: "9688dd26243a27aa38a6",
        5439: "d6c84fd80e85f64553d8",
        5493: "3787e53ad0886fe117f2",
        5494: "7ad93d69fa251e511263",
        5503: "7db32a79454e69617349",
        5757: "d83ca5314be890f68498",
        5988: "6f764c60239ca6e13213",
        6091: "eb28d488a7f7fdd1dc92",
        6148: "1ca0a59911794d934b2b",
        6272: "3f5cf612074168128c73",
        6378: "e2c51ec34674063a0b4d",
        6403: "bc5c2b13d5f5fcc1eef8",
        6415: "f99dfc87c1529bfb3bf9",
        6457: "006c1a8c81de5ee28bdb",
        6588: "ce006eff3b1651207873",
        6656: "2bb99cd964501b9dd153",
        6658: "3dbe3fa10f553c54df6d",
        6715: "b546f627254ec8397a36",
        6844: "7002f27284ffed13971b",
        6845: "bc59162b5dc0393a20d9",
        6932: "cbf2d0c4f834e0caa401",
        6962: "d34412e03734adb8e5ba",
        7192: "22ece8d6e6a1ca549919",
        7629: "c545b8e76ca1f7a38e86",
        7660: "b5a595dd7dcfd3d785a6",
        7769: "16978fbbbaca0c7b9e40",
        7781: "902c4112f597c10cee37",
        7832: "e8085db9d08270eac33d",
        7901: "a2f2a2f2cd57669d9af3",
        7924: "22e1c32d65d84fb2ce96",
        7948: "5b55653852c85d64c578",
        7971: "0150ce581c0422c8747c",
        7978: "0d1260e456115cdd35b1",
        8085: "6910b8e193c5a7ea85ec",
        8120: "4611337513e3920c9a30",
        8274: "947f5bfaf279931cb03d",
        8282: "43e90abcf097c7a00d75",
        8291: "b09decafbb16cae2be63",
        8427: "85c75daeb495f8abd63f",
        8433: "1e2027ade1756ce95cd5",
        8525: "393f0bc7e8193a5342fb",
        8592: "06424103a5cd0fdb2548",
        8647: "f48dec97646b49f08f52",
        8691: "5f8c6308e15a113f3e35",
        8805: "be36f4dfced6109d64cf",
        8931: "06c319916280f39bac87",
        9167: "3540bec15f1231180916",
        9233: "a0bb3796f6c9039a5aa8",
        9295: "791fcfa717767cef8281",
        9316: "25f404f0d4d943821a2f",
        9348: "b879eaf80421cb193f01",
        9349: "1268cec60aa5a4703f8c",
        9389: "f05dc25da8f7fd2bb88e",
        9427: "175419f8d76dce32191b",
        9513: "249fe683c9e584dc844d",
        9547: "30498aea16f9c95afa13",
        9561: "170efa8ef862ebd083f3",
        9665: "f2d7453cef7bf5dca0e7",
        9828: "c5d63960a817505821a7",
        9854: "54aa4a6c070ed9436772",
        9888: "352437ee78eaff320c1b",
        9951: "a221c2b5f53c796768ed",
        9991: "4667e70a4b4d8a282eb6",
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
        400: "2620043a2a7d9173fbf8",
        508: "4a1da954ae23cc203a6b",
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
        8931: "392e13c4463783777e46",
        9348: "31e8df4cbedea0b4c8db",
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
    (c = {}),
    (i = "community:"),
    (l.l = (a, e, n, o) => {
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
              f.getAttribute("data-webpack") == i + n
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
            if (s) var r = s(l);
          }
          for (e && e(n); t < o.length; t++)
            (i = o[t]), l.o(a, i) && a[i] && a[i][0](), (a[i] = 0);
          return l.O(r);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();

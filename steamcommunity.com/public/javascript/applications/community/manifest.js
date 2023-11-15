/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8495969";
(() => {
  "use strict";
  var a,
    e,
    n,
    c,
    i,
    o,
    s,
    d = {},
    t = {};
  function l(a) {
    var e = t[a];
    if (void 0 !== e) return e.exports;
    var n = (t[a] = { id: a, loaded: !1, exports: {} });
    return d[a].call(n.exports, n, n.exports, l), (n.loaded = !0), n.exports;
  }
  (l.m = d),
    (a = []),
    (l.O = (e, n, c, i) => {
      if (!n) {
        var o = 1 / 0;
        for (r = 0; r < a.length; r++) {
          for (var [n, c, i] = a[r], s = !0, d = 0; d < n.length; d++)
            (!1 & i || o >= i) && Object.keys(l.O).every((a) => l.O[a](n[d]))
              ? n.splice(d--, 1)
              : ((s = !1), i < o && (o = i));
          if (s) {
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
      for (var s = 2 & c && a; "object" == typeof s && !~e.indexOf(s); s = n(s))
        Object.getOwnPropertyNames(s).forEach((e) => (o[e] = () => a[e]));
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
        27: "1f4a865caab7f37e610b",
        113: "ffbe9d645f92ff3ac76e",
        131: "c05ac25139c4c8be658e",
        146: "334948c52db33d68b60b",
        238: "95d564736deb0443ccbe",
        301: "5f9909982bb9a5da6d1e",
        312: "429e3275b66e91a9640d",
        400: "df6fca8a890790ab5f9a",
        483: "0a361f061c82e5ddb570",
        508: "7d068f4691c027bb38ea",
        543: "1c28d7dbf6692226edde",
        617: "67cdf4b0f6302041eaba",
        755: "19f487b0fc83f038896c",
        867: "8d15a205537876ebd875",
        908: "3f04c50c7397ff7007e6",
        960: "68b440135d09be55a3f1",
        961: "d470d8abaf75d3967419",
        1133: "d4579d5692ce13725df8",
        1195: "e2851a6d248f6f9a5a84",
        1261: "c52e44895be27ed59c20",
        1311: "eb5e47a2f4fb8f922705",
        1421: "a139376308c44803ed78",
        1496: "b75715b6102baafbf4bb",
        1546: "7be828603eea5e5d8c73",
        1579: "1abd1dbb388749548e46",
        1649: "9dbd422ab263fa39aa04",
        1909: "0f39269e64927a24a90e",
        1953: "099605d2d9853abea4bf",
        2136: "20ba9ede9d69e2e61c6c",
        2138: "cb26ecaac9cff3578f2c",
        2235: "cf99af3c233388e25cf6",
        2329: "580cb569c2aa0f29227b",
        2351: "31b105c8f50a188d31b0",
        2373: "02f06e09befcbafe91af",
        2449: "0165b834de226bc348a9",
        2468: "ceda98e0ffce0514cf47",
        2530: "90e614f79ca0a2b60659",
        2557: "6cca7d5eb33f1f296dbf",
        2603: "e001275b01aefa60e817",
        2723: "29cad6652e2ea5539208",
        2738: "eae2fe5392c27430d147",
        2745: "21ee6ea7e2a2b464e700",
        2805: "6a39875e7a070910ec0e",
        2822: "4cd22db5323dbd3f38dd",
        2829: "67d8b98ab69f4b27f1a1",
        2832: "4328005948ed1c7fd80b",
        2837: "38c9629a44598d574097",
        3007: "4e45fd4e3f952b26dbc2",
        3038: "363bfc2d46c3e170e41b",
        3068: "3a29d5997bf8fc3728a2",
        3070: "8ab6d1a63fe826b6f317",
        3175: "634a978d512e0f204a41",
        3202: "7b59783416ccb2ad0bae",
        3275: "6be9f29df6e12fe13a3f",
        3298: "09bed1c0d7bd031fdae8",
        3352: "aa5d11758934afb34c2a",
        3499: "6ac37d7bab352328ecd2",
        3520: "d994a7fb30cf98727c3d",
        3591: "fe550d8c815714b8cd52",
        3602: "5a435e905cf681c100b7",
        3801: "049336c5eb4278d2bae7",
        3903: "1c285d6ad46828c322a1",
        3973: "4d4549e7d652f3d01402",
        4040: "1507515406e707b1f84a",
        4097: "776bec87cf077ddc78a6",
        4183: "fd66c3636635ed08e129",
        4264: "a73bf41a6c9068e085c7",
        4293: "c1c0a2b1e2b4aa34f59f",
        4358: "7521a895cf2b89d2c95c",
        4445: "e1b8bc24818872952587",
        4469: "13757b53f34b55304323",
        4487: "50fcd5f1b34aaf3f6485",
        4513: "2da5ee551eb5762bc7e7",
        4535: "63699afa514f1a967beb",
        4601: "ab32db48e97a45dc1e89",
        4729: "86a30516e316398b70f4",
        4819: "81962c369cb3ddf0d911",
        4979: "e219f2553659401148c7",
        5012: "2571784bf3016ca0e7fa",
        5119: "5e9448909a21d6339db4",
        5277: "a315f06ba5e342652955",
        5279: "039ecb5befa9889d6f1c",
        5436: "02c8b7cad65d9f5a596b",
        5439: "d6c84fd80e85f64553d8",
        5493: "3787e53ad0886fe117f2",
        5494: "7ad93d69fa251e511263",
        5503: "459b9e7d80ee8e084e7f",
        5757: "d83ca5314be890f68498",
        6091: "45b9a26d79dc85a0b41d",
        6148: "1ca0a59911794d934b2b",
        6272: "f226e717038efc1bde4f",
        6378: "e2c51ec34674063a0b4d",
        6403: "ba94217d60d9e71d810f",
        6415: "f99dfc87c1529bfb3bf9",
        6457: "006c1a8c81de5ee28bdb",
        6588: "ce006eff3b1651207873",
        6656: "2bb99cd964501b9dd153",
        6658: "3dbe3fa10f553c54df6d",
        6715: "b546f627254ec8397a36",
        6844: "24d21f43331e3bd8f0d8",
        6845: "542c2e7ffadc6a15db34",
        6932: "cbf2d0c4f834e0caa401",
        6962: "d34412e03734adb8e5ba",
        7192: "22ece8d6e6a1ca549919",
        7629: "c545b8e76ca1f7a38e86",
        7660: "941ac8a939795dbfbff8",
        7769: "16978fbbbaca0c7b9e40",
        7781: "7e86fd946f3e47a3d1cb",
        7832: "e8085db9d08270eac33d",
        7901: "a2f2a2f2cd57669d9af3",
        7924: "22e1c32d65d84fb2ce96",
        7948: "5b55653852c85d64c578",
        7971: "0150ce581c0422c8747c",
        7978: "0d1260e456115cdd35b1",
        8085: "65e2cbe5145184513195",
        8120: "0e985022908bb918d934",
        8274: "947f5bfaf279931cb03d",
        8282: "43e90abcf097c7a00d75",
        8291: "b09decafbb16cae2be63",
        8427: "85c75daeb495f8abd63f",
        8433: "4f9993c3b27d11717e3a",
        8525: "393f0bc7e8193a5342fb",
        8592: "06424103a5cd0fdb2548",
        8647: "5bf29a3a2d097b05bd6c",
        8691: "5f8c6308e15a113f3e35",
        8805: "be36f4dfced6109d64cf",
        8931: "e00bf9ab06e19035b578",
        9167: "3540bec15f1231180916",
        9233: "a0bb3796f6c9039a5aa8",
        9295: "52f6626a29b988c52ba9",
        9316: "25f404f0d4d943821a2f",
        9348: "0fb0b4a8834b1748d7dc",
        9349: "615a75c3a9857bc13523",
        9389: "f05dc25da8f7fd2bb88e",
        9427: "3a1bb9ec93b86c09b628",
        9513: "249fe683c9e584dc844d",
        9547: "51895c783cf8648d1085",
        9561: "170efa8ef862ebd083f3",
        9665: "5ed0c48ae42519c3c5b1",
        9828: "c5d63960a817505821a7",
        9854: "f569795f345fbb1a16d7",
        9888: "352437ee78eaff320c1b",
        9951: "c9a87ed21c78e9f179f0",
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
        400: "86dfb36698c8d842388e",
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
        8931: "2ff101993fa632f9cbeb",
        9348: "910e9b89ea282b4995ad",
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
        var s, d;
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
              s = f;
              break;
            }
          }
        s ||
          ((d = !0),
          ((s = document.createElement("script")).charset = "utf-8"),
          (s.timeout = 120),
          l.nc && s.setAttribute("nonce", l.nc),
          s.setAttribute("data-webpack", i + n),
          (s.src = a)),
          (c[a] = [e]);
        var b = (e, n) => {
            (s.onerror = s.onload = null), clearTimeout(h);
            var i = c[a];
            if (
              (delete c[a],
              s.parentNode && s.parentNode.removeChild(s),
              i && i.forEach((a) => a(n)),
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
          d && document.head.appendChild(s);
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
                (s = n[c]).getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (i === a || i === e)) return s;
            }
            var o = document.getElementsByTagName("style");
            for (c = 0; c < o.length; c++) {
              var s;
              if ((i = (s = o[c]).getAttribute("data-href")) === a || i === e)
                return s;
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
                  var s = o && ("load" === o.type ? "missing" : o.type),
                    d = (o && o.target && o.target.href) || e,
                    t = new Error(
                      "Loading CSS chunk " + a + " failed.\n(" + d + ")",
                    );
                  (t.code = "CSS_CHUNK_LOAD_FAILED"),
                    (t.type = s),
                    (t.request = d),
                    i.parentNode.removeChild(i),
                    c(t);
                }
              }),
            (i.href = e),
            document.head.appendChild(i);
        })(a, i, e, n);
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
            (s[a] = o(a).then(
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
        var c = l.o(a, e) ? a[e] : void 0;
        if (0 !== c)
          if (c) n.push(c[2]);
          else if (/^(4601|6700)$/.test(e)) a[e] = 0;
          else {
            var i = new Promise((n, i) => (c = a[e] = [n, i]));
            n.push((c[2] = i));
            var o = l.p + l.u(e),
              s = new Error();
            l.l(
              o,
              (n) => {
                if (l.o(a, e) && (0 !== (c = a[e]) && (a[e] = void 0), c)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    o = n && n.target && n.target.src;
                  (s.message =
                    "Loading chunk " + e + " failed.\n(" + i + ": " + o + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = i),
                    (s.request = o),
                    c[1](s);
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
            [o, s, d] = n,
            t = 0;
          if (o.some((e) => 0 !== a[e])) {
            for (c in s) l.o(s, c) && (l.m[c] = s[c]);
            if (d) var r = d(l);
          }
          for (e && e(n); t < o.length; t++)
            (i = o[t]), l.o(a, i) && a[i] && a[i][0](), (a[i] = 0);
          return l.O(r);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();

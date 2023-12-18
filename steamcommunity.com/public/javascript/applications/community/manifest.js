/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8594344";
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
    l = {};
  function t(a) {
    var e = l[a];
    if (void 0 !== e) return e.exports;
    var n = (l[a] = { id: a, loaded: !1, exports: {} });
    return d[a].call(n.exports, n, n.exports, t), (n.loaded = !0), n.exports;
  }
  (t.m = d),
    (a = []),
    (t.O = (e, n, c, i) => {
      if (!n) {
        var o = 1 / 0;
        for (f = 0; f < a.length; f++) {
          for (var [n, c, i] = a[f], s = !0, d = 0; d < n.length; d++)
            (!1 & i || o >= i) && Object.keys(t.O).every((a) => t.O[a](n[d]))
              ? n.splice(d--, 1)
              : ((s = !1), i < o && (o = i));
          if (s) {
            a.splice(f--, 1);
            var l = c();
            void 0 !== l && (e = l);
          }
        }
        return e;
      }
      i = i || 0;
      for (var f = a.length; f > 0 && a[f - 1][2] > i; f--) a[f] = a[f - 1];
      a[f] = [n, c, i];
    }),
    (t.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return t.d(e, { a: e }), e;
    }),
    (n = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (t.t = function (a, c) {
      if ((1 & c && (a = this(a)), 8 & c)) return a;
      if ("object" == typeof a && a) {
        if (4 & c && a.__esModule) return a;
        if (16 & c && "function" == typeof a.then) return a;
      }
      var i = Object.create(null);
      t.r(i);
      var o = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var s = 2 & c && a; "object" == typeof s && !~e.indexOf(s); s = n(s))
        Object.getOwnPropertyNames(s).forEach((e) => (o[e] = () => a[e]));
      return (o.default = () => a), t.d(i, o), i;
    }),
    (t.d = (a, e) => {
      for (var n in e)
        t.o(e, n) &&
          !t.o(a, n) &&
          Object.defineProperty(a, n, { enumerable: !0, get: e[n] });
    }),
    (t.f = {}),
    (t.e = (a) =>
      Promise.all(Object.keys(t.f).reduce((e, n) => (t.f[n](a, e), e), []))),
    (t.u = (a) =>
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
        4074: "chunk~430e541cc",
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
        7901: "chunk~2d6f640d9",
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
        9604: "localization/main_vietnamese-json",
        9665: "localization/main_english-json",
        9828: "localization/sales_dutch-json",
        9854: "localization/shared_portuguese-json",
        9888: "localization/sales_swedish-json",
        9951: "localization/shared_latam-json",
        9991: "localization/sales_japanese-json",
      }[a] +
      ".js?contenthash=" +
      {
        27: "be590301afd3b5f60b96",
        113: "4f6f158695ec35b02ed3",
        131: "a7fecc57ca16bdbe5a30",
        146: "5a40b3872e4e2cbd1d49",
        238: "95d564736deb0443ccbe",
        301: "28f776054097dca40f7a",
        312: "7766518f8a92f9e53c93",
        400: "fac83d7ad8fa17eab217",
        483: "6d2109442d8c0805c29c",
        508: "0d06f71b789f9db03870",
        543: "6989a74fcd173e8342a3",
        617: "3d928b950e6c6fbbb081",
        755: "bec5544a7958855b5ef4",
        867: "7930bb89cf44d20c06c9",
        908: "3f04c50c7397ff7007e6",
        960: "7cdd3b15383509fa87b5",
        961: "5527316db658c9cf041d",
        1133: "96c38d93d0d4b91242bf",
        1195: "75c2c4966a844668d737",
        1261: "2edc8d0ef6d268a7d1bf",
        1311: "dc40b3b2c5dc57a9de50",
        1496: "b75715b6102baafbf4bb",
        1546: "30efecedf1dddb60012e",
        1579: "afd0b4f5b6cb43f50ce3",
        1649: "9dbd422ab263fa39aa04",
        1909: "3d8a4be52b2bb48f070b",
        1953: "502671aac9e0a6c510b4",
        2136: "20ba9ede9d69e2e61c6c",
        2138: "9a4a93541e9ff19340c7",
        2235: "2b16a719ad9229f4e56a",
        2329: "580cb569c2aa0f29227b",
        2351: "91e7bcf68b4992ed5425",
        2373: "40f5e1c2ea8efd5ee051",
        2449: "f187b4c3c7291709cd79",
        2468: "5c1d7412a69b504eda49",
        2530: "86c0c2c8557241f4305f",
        2557: "40dfc52a1fbb8a92db0b",
        2603: "1794b39710279edbddd3",
        2723: "3f285f68313fcac04f4e",
        2738: "b3b6e2230d41a18b0cb4",
        2745: "70c788e17c7d89d5f1f2",
        2805: "339cb522c730a5ae8afa",
        2822: "458882373c40346cf632",
        2829: "67d8b98ab69f4b27f1a1",
        2832: "6fb693c2bd63c53f23c1",
        2837: "38c9629a44598d574097",
        3007: "33b5774d4a8ee9c3f390",
        3038: "a920c8f2499635ad5414",
        3068: "66f47f37d5a758c37294",
        3070: "8ab6d1a63fe826b6f317",
        3175: "1594c5f98aa22549156c",
        3202: "0c9570c579172af2c6ed",
        3275: "6be9f29df6e12fe13a3f",
        3298: "13aab421ed34dc249f89",
        3352: "aa5d11758934afb34c2a",
        3499: "e4690ff7c493d20f0550",
        3520: "26b829366322df563569",
        3591: "d7b40f3c04fb16792f2b",
        3602: "d7c4d2008d97734f9684",
        3801: "f1c26a4bb17136e785db",
        3863: "c7a1895e14912fc0781a",
        3903: "4eea19dc8f3a263a7299",
        3973: "4d4549e7d652f3d01402",
        4040: "5dfadd0a23d7a3b71b63",
        4074: "67210888922a5c6a3da6",
        4097: "4f51b087bc835a2de2d4",
        4183: "6742e99f27ea744fe8be",
        4264: "a73bf41a6c9068e085c7",
        4293: "ec803fa7c0f617723882",
        4358: "48898253414819940026",
        4445: "be23ccd664f2650f712e",
        4469: "158d81041edc24c41e82",
        4487: "3ed99ddb2a659867541b",
        4513: "31fe118ba0d10ae7578c",
        4535: "63699afa514f1a967beb",
        4601: "b478ea01baf93933327b",
        4729: "4fb087b587e4b3848d2c",
        4819: "f9f6d16238b14de0ee13",
        4979: "6986777ce5fdda53a961",
        5012: "521b31668cf4a9c1f089",
        5119: "5e9448909a21d6339db4",
        5277: "925ced887be9de81c99c",
        5279: "a0227df04ea630cc684c",
        5436: "85a2412a877165093e37",
        5439: "ecbad4eea7d773731ea4",
        5493: "c8894b5bf29b5b18eb85",
        5494: "3c0abfa9307c7ebd63a2",
        5503: "459b9e7d80ee8e084e7f",
        5710: "88d2db1ef5d4824dcbcf",
        5757: "5e2249d39ded5b4996b5",
        6091: "a5c39255b4219255eed7",
        6148: "1ca0a59911794d934b2b",
        6272: "f226e717038efc1bde4f",
        6403: "1d98c4f6663487d30d69",
        6415: "7dadd7c244ee7816b678",
        6457: "6873aa42fbfb9642c7cc",
        6588: "ce006eff3b1651207873",
        6656: "2bb99cd964501b9dd153",
        6658: "be94501351943f4beabb",
        6715: "1b45f099bad01622b896",
        6844: "cc4d1eb5134a7ed5297a",
        6845: "9747d8e3d6a5af274e2c",
        6932: "ce93a458e94db431e9e0",
        6962: "7b8acefb03d8ece871b9",
        7192: "52cfa940d0f0385db9f6",
        7629: "bd813257a215ae385bb0",
        7660: "da121793e8c0e501feb9",
        7769: "b5fca1a3a77b259aff37",
        7781: "f55f28e79bc679a8108d",
        7832: "e8085db9d08270eac33d",
        7901: "4e75499ccaf20102b459",
        7924: "11734f632ed92f4e2f90",
        7948: "5b55653852c85d64c578",
        7971: "4c4fbfcd51848b60e27a",
        7978: "0c13b76ec72a2cbdbf2f",
        8085: "597f5b1f50fff94baef9",
        8120: "022aef5f32a7c9ca7b6e",
        8274: "2c38fefd221fc76562e7",
        8282: "7e7b6e437e3fced6c54e",
        8291: "3d9dc8e1fb8810511fac",
        8427: "758e7da81fa4b6788e39",
        8433: "c1d6ec7bb542be45977d",
        8525: "dcd8149adb1b2c430713",
        8592: "55aecfb879d2a31a4bf6",
        8647: "5bf29a3a2d097b05bd6c",
        8691: "5f8c6308e15a113f3e35",
        8805: "605470811711ab995df2",
        8931: "72f8feb2a3ea7f248cd1",
        9167: "f13fe9f7bad535804f05",
        9233: "639a87fdcb1fc6ff3c5f",
        9295: "73ac0594fa9b5703f5af",
        9316: "dab7beab0497f11559df",
        9348: "41a92bb56043a641559a",
        9349: "aa044e683891d27e011d",
        9389: "51e83b6f1a4c1d699aa4",
        9427: "13f468ac94242f0926bc",
        9513: "e5c65fc09e5dedf1335b",
        9547: "d42cd0283039261b3d4e",
        9561: "17e0d10560deedb28edc",
        9604: "e4cd320d2bdbf655f152",
        9665: "92f2dbccc4f0da71fa55",
        9828: "690be705b892b8962e1f",
        9854: "32a835544edc25d53bda",
        9888: "d141dcbe7edbeee65493",
        9951: "e31ccb9a6eb534b96726",
        9991: "df114cde1dd955b86b06",
      }[a]),
    (t.miniCssF = (a) =>
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
        3863: "libraries~de0610989",
        3903: "games",
        4535: "login",
        4601: "broadcast",
        5436: "broadcasts",
        5710: "gr",
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
        508: "e07cdd39fcb8484c985d",
        908: "f802d50d6c3e94c89cff",
        1909: "2fca35912c0825f76d76",
        2136: "8c359fa0555fa2bd2c5d",
        2329: "a969564f4cdabf0c473e",
        2449: "73bf2444e0d5af416667",
        2530: "bad700c313ffaf7c2d59",
        3068: "9aa65f0b38cf470af191",
        3352: "f3838685918d3c88bdc3",
        3499: "f66814af59f83abee010",
        3520: "cea2faf4144e290ed96e",
        3863: "e490ead9ec47f691eb23",
        3903: "ada073e77d3d84945cb9",
        4535: "120ef11d3786830c5571",
        4601: "fd94d248a892c0493422",
        5436: "671dce66cf8a63ffd3ac",
        5710: "d76d897261c8b23ae686",
        6272: "54f6373c553646633f48",
        6845: "1fb319ab2a10b04db40a",
        8647: "2aa199fdf547121332be",
        8931: "660441eb28a95783d253",
        9348: "e9a00325ee5334aaacb5",
        9349: "c88d816a31f37d59ca1d",
        9427: "f5083def34917808087a",
      }[a]),
    (t.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (a) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = (a, e) => Object.prototype.hasOwnProperty.call(a, e)),
    (c = {}),
    (i = "community:"),
    (t.l = (a, e, n, o) => {
      if (c[a]) c[a].push(e);
      else {
        var s, d;
        if (void 0 !== n)
          for (
            var l = document.getElementsByTagName("script"), f = 0;
            f < l.length;
            f++
          ) {
            var r = l[f];
            if (
              r.getAttribute("src") == a ||
              r.getAttribute("data-webpack") == i + n
            ) {
              s = r;
              break;
            }
          }
        s ||
          ((d = !0),
          ((s = document.createElement("script")).charset = "utf-8"),
          (s.timeout = 120),
          t.nc && s.setAttribute("nonce", t.nc),
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
    (t.r = (a) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (t.nmd = (a) => ((a.paths = []), a.children || (a.children = []), a)),
    (() => {
      var a;
      t.g.importScripts && (a = t.g.location + "");
      var e = t.g.document;
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
        (t.p = a + "../../../");
    })(),
    (o = (a) =>
      new Promise((e, n) => {
        var c = t.miniCssF(a),
          i = t.p + c;
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
                    l = new Error(
                      "Loading CSS chunk " + a + " failed.\n(" + d + ")",
                    );
                  (l.code = "CSS_CHUNK_LOAD_FAILED"),
                    (l.type = s),
                    (l.request = d),
                    i.parentNode.removeChild(i),
                    c(l);
                }
              }),
            (i.href = e),
            document.head.appendChild(i);
        })(a, i, e, n);
      })),
    (s = { 6700: 0 }),
    (t.f.miniCss = (a, e) => {
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
            3863: 1,
            3903: 1,
            4535: 1,
            4601: 1,
            5436: 1,
            5710: 1,
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
      (t.f.j = (e, n) => {
        var c = t.o(a, e) ? a[e] : void 0;
        if (0 !== c)
          if (c) n.push(c[2]);
          else if (/^(4601|6700)$/.test(e)) a[e] = 0;
          else {
            var i = new Promise((n, i) => (c = a[e] = [n, i]));
            n.push((c[2] = i));
            var o = t.p + t.u(e),
              s = new Error();
            t.l(
              o,
              (n) => {
                if (t.o(a, e) && (0 !== (c = a[e]) && (a[e] = void 0), c)) {
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
        (t.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var c,
            i,
            [o, s, d] = n,
            l = 0;
          if (o.some((e) => 0 !== a[e])) {
            for (c in s) t.o(s, c) && (t.m[c] = s[c]);
            if (d) var f = d(t);
          }
          for (e && e(n); l < o.length; l++)
            (i = o[l]), t.o(a, i) && a[i] && a[i][0](), (a[i] = 0);
          return t.O(f);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();

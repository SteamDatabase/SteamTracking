/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8588246";
(() => {
  "use strict";
  var a,
    e,
    n,
    i,
    c,
    o,
    d,
    s = {},
    l = {};
  function t(a) {
    var e = l[a];
    if (void 0 !== e) return e.exports;
    var n = (l[a] = { id: a, loaded: !1, exports: {} });
    return s[a].call(n.exports, n, n.exports, t), (n.loaded = !0), n.exports;
  }
  (t.m = s),
    (a = []),
    (t.O = (e, n, i, c) => {
      if (!n) {
        var o = 1 / 0;
        for (b = 0; b < a.length; b++) {
          for (var [n, i, c] = a[b], d = !0, s = 0; s < n.length; s++)
            (!1 & c || o >= c) && Object.keys(t.O).every((a) => t.O[a](n[s]))
              ? n.splice(s--, 1)
              : ((d = !1), c < o && (o = c));
          if (d) {
            a.splice(b--, 1);
            var l = i();
            void 0 !== l && (e = l);
          }
        }
        return e;
      }
      c = c || 0;
      for (var b = a.length; b > 0 && a[b - 1][2] > c; b--) a[b] = a[b - 1];
      a[b] = [n, i, c];
    }),
    (t.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return t.d(e, { a: e }), e;
    }),
    (n = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (t.t = function (a, i) {
      if ((1 & i && (a = this(a)), 8 & i)) return a;
      if ("object" == typeof a && a) {
        if (4 & i && a.__esModule) return a;
        if (16 & i && "function" == typeof a.then) return a;
      }
      var c = Object.create(null);
      t.r(c);
      var o = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var d = 2 & i && a; "object" == typeof d && !~e.indexOf(d); d = n(d))
        Object.getOwnPropertyNames(d).forEach((e) => (o[e] = () => a[e]));
      return (o.default = () => a), t.d(c, o), c;
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
        27: "f7f713a15b4777c00d62",
        113: "e6c492bf1220f5bcb6d8",
        131: "a7fecc57ca16bdbe5a30",
        146: "0ed2562281ea47552c90",
        238: "95d564736deb0443ccbe",
        301: "0aa50defe029dd3f6715",
        312: "7766518f8a92f9e53c93",
        400: "fac83d7ad8fa17eab217",
        483: "6d2109442d8c0805c29c",
        508: "0d06f71b789f9db03870",
        543: "6989a74fcd173e8342a3",
        617: "14250da27c4328c9dcac",
        755: "31fde48d5c8fddc1d7ac",
        867: "7ce5eae9e90c78fc42fa",
        908: "3f04c50c7397ff7007e6",
        960: "e778472b0afb29394489",
        961: "0da3cf3a599568f22eca",
        1133: "a435e37ad4b5e71f6dae",
        1195: "e8e0b989eeced6816703",
        1261: "71d279ef8e5200c338d5",
        1311: "1b6ced9a7afc3ea13d07",
        1496: "b75715b6102baafbf4bb",
        1546: "8e10892b6fcd6420f1cf",
        1579: "d934ef0f80ed347d8099",
        1649: "9dbd422ab263fa39aa04",
        1909: "3d8a4be52b2bb48f070b",
        1953: "bd78eab0556866831ff4",
        2136: "20ba9ede9d69e2e61c6c",
        2138: "5b30b2856f1b02f944e2",
        2235: "a348d7bcfa56b92f3fc4",
        2329: "580cb569c2aa0f29227b",
        2351: "56b9205fcee86ce84287",
        2373: "a6e95fd3aa37ad3b7b5b",
        2449: "f187b4c3c7291709cd79",
        2468: "5c1d7412a69b504eda49",
        2530: "86c0c2c8557241f4305f",
        2557: "c0860a0475c2431ca6df",
        2603: "7d567adb5d3f52b1f388",
        2723: "21f43d7fe8c7ba08853a",
        2738: "9060943fd10ffeade5ab",
        2745: "b87c8244bbfc84f92547",
        2805: "339cb522c730a5ae8afa",
        2822: "5eab7a9d72dd12a9e619",
        2829: "67d8b98ab69f4b27f1a1",
        2832: "6fb693c2bd63c53f23c1",
        2837: "38c9629a44598d574097",
        3007: "728837fdbf5692338f30",
        3038: "0119d51030dc64c11ef7",
        3068: "66f47f37d5a758c37294",
        3070: "8ab6d1a63fe826b6f317",
        3175: "1594c5f98aa22549156c",
        3202: "68ea8f52f31f76cbfed8",
        3275: "6be9f29df6e12fe13a3f",
        3298: "c07dd8a80aac8169a684",
        3352: "aa5d11758934afb34c2a",
        3499: "e4690ff7c493d20f0550",
        3520: "26b829366322df563569",
        3591: "00670f2aaacaf53e0b2f",
        3602: "2165dc2b07f0bffe3748",
        3801: "f1c26a4bb17136e785db",
        3863: "c7a1895e14912fc0781a",
        3903: "4eea19dc8f3a263a7299",
        3973: "4d4549e7d652f3d01402",
        4040: "5dfadd0a23d7a3b71b63",
        4074: "67210888922a5c6a3da6",
        4097: "b1cea86f136b5511fe84",
        4183: "493e51ab84ef73eebbed",
        4264: "a73bf41a6c9068e085c7",
        4293: "08ab899bbedb84d4fa22",
        4358: "48898253414819940026",
        4445: "8c9b04f5e9b7582be2f9",
        4469: "ce036a08d8b56d1f8678",
        4487: "e25243a2133d9b800075",
        4513: "616af0598e6422304f6f",
        4535: "63699afa514f1a967beb",
        4601: "b478ea01baf93933327b",
        4729: "2a38488f9d0f0eb5e5d7",
        4819: "bda337f797f2252a4677",
        4979: "68630a50f53aa2b44300",
        5012: "daa5a99c250894a68f88",
        5119: "5e9448909a21d6339db4",
        5277: "66da2f00bc86bac69bfc",
        5279: "fe2cbaf00e77ab7916d9",
        5436: "85a2412a877165093e37",
        5439: "9d4acad03a91b068f5b0",
        5493: "0215bd1919e7233b6314",
        5494: "8c467e1929ae9b5484f6",
        5503: "459b9e7d80ee8e084e7f",
        5710: "88d2db1ef5d4824dcbcf",
        5757: "13743bd6ed5b61111b3e",
        6091: "f53293f3174111c7fa6e",
        6148: "1ca0a59911794d934b2b",
        6272: "f226e717038efc1bde4f",
        6403: "2ef688b1c12e87318994",
        6415: "fae7e1b58e778c573b84",
        6457: "ea73446e57e59fd57aa7",
        6588: "ce006eff3b1651207873",
        6656: "2bb99cd964501b9dd153",
        6658: "25baea1227bd6427c3ee",
        6715: "1b45f099bad01622b896",
        6844: "8d1250e8bbcc373d464b",
        6845: "542c2e7ffadc6a15db34",
        6932: "587a5ce27d8a35b8f73a",
        6962: "8afba0f1fbef039c221b",
        7192: "0c8ea6b57cbf308c2f85",
        7629: "d7003b515da7aa2dd1da",
        7660: "4aa760b5ae9d50cb22fa",
        7769: "0fbade2798d2b71cf0a6",
        7781: "d901416d5387de3a3318",
        7832: "e8085db9d08270eac33d",
        7901: "4e75499ccaf20102b459",
        7924: "09a38b2741678b746c0c",
        7948: "5b55653852c85d64c578",
        7971: "68b1c60a120c7e4ec385",
        7978: "0c13b76ec72a2cbdbf2f",
        8085: "45d849fa8f61eeea9fb7",
        8120: "022aef5f32a7c9ca7b6e",
        8274: "f1dd001cb00ae6006444",
        8282: "dc799517768eb93a366b",
        8291: "9c949065c1d59467dcc0",
        8427: "fcbd32b86884b09c1d95",
        8433: "f4891f4bf6f9e8ff55c1",
        8525: "5ccb5a5d6a516702fa32",
        8592: "29aa86168637bfebe131",
        8647: "5bf29a3a2d097b05bd6c",
        8691: "5f8c6308e15a113f3e35",
        8805: "035b578b9adbfd1f0102",
        8931: "72f8feb2a3ea7f248cd1",
        9167: "fa3eae14132c8fafc627",
        9233: "74a9bd02c55f91a10def",
        9295: "73ac0594fa9b5703f5af",
        9316: "5b3035eab4fb7798acf2",
        9348: "41a92bb56043a641559a",
        9349: "aa044e683891d27e011d",
        9389: "51e83b6f1a4c1d699aa4",
        9427: "13f468ac94242f0926bc",
        9513: "598fe8b23f4c00cb722e",
        9547: "9b30016b336c3d222f90",
        9561: "ca96c29d1394e1c3ad36",
        9604: "12a65373d997a5b8628a",
        9665: "5ed0c48ae42519c3c5b1",
        9828: "0ead28f468b437317356",
        9854: "6e8c2f264bc99d311de8",
        9888: "77b9a272516c6d844dd3",
        9951: "ee0eed5d66db573ed8f5",
        9991: "ba8107158c86a6f3c1a1",
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
        6845: "c5991fafb114f811dc73",
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
    (i = {}),
    (c = "community:"),
    (t.l = (a, e, n, o) => {
      if (i[a]) i[a].push(e);
      else {
        var d, s;
        if (void 0 !== n)
          for (
            var l = document.getElementsByTagName("script"), b = 0;
            b < l.length;
            b++
          ) {
            var f = l[b];
            if (
              f.getAttribute("src") == a ||
              f.getAttribute("data-webpack") == c + n
            ) {
              d = f;
              break;
            }
          }
        d ||
          ((s = !0),
          ((d = document.createElement("script")).charset = "utf-8"),
          (d.timeout = 120),
          t.nc && d.setAttribute("nonce", t.nc),
          d.setAttribute("data-webpack", c + n),
          (d.src = a)),
          (i[a] = [e]);
        var r = (e, n) => {
            (d.onerror = d.onload = null), clearTimeout(h);
            var c = i[a];
            if (
              (delete i[a],
              d.parentNode && d.parentNode.removeChild(d),
              c && c.forEach((a) => a(n)),
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
        var i = t.miniCssF(a),
          c = t.p + i;
        if (
          ((a, e) => {
            for (
              var n = document.getElementsByTagName("link"), i = 0;
              i < n.length;
              i++
            ) {
              var c =
                (d = n[i]).getAttribute("data-href") || d.getAttribute("href");
              if ("stylesheet" === d.rel && (c === a || c === e)) return d;
            }
            var o = document.getElementsByTagName("style");
            for (i = 0; i < o.length; i++) {
              var d;
              if ((c = (d = o[i]).getAttribute("data-href")) === a || c === e)
                return d;
            }
          })(i, c)
        )
          return e();
        ((a, e, n, i) => {
          var c = document.createElement("link");
          (c.rel = "stylesheet"),
            (c.type = "text/css"),
            (c.onerror = c.onload =
              (o) => {
                if (((c.onerror = c.onload = null), "load" === o.type)) n();
                else {
                  var d = o && ("load" === o.type ? "missing" : o.type),
                    s = (o && o.target && o.target.href) || e,
                    l = new Error(
                      "Loading CSS chunk " + a + " failed.\n(" + s + ")",
                    );
                  (l.code = "CSS_CHUNK_LOAD_FAILED"),
                    (l.type = d),
                    (l.request = s),
                    c.parentNode.removeChild(c),
                    i(l);
                }
              }),
            (c.href = e),
            document.head.appendChild(c);
        })(a, c, e, n);
      })),
    (d = { 6700: 0 }),
    (t.f.miniCss = (a, e) => {
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
      (t.f.j = (e, n) => {
        var i = t.o(a, e) ? a[e] : void 0;
        if (0 !== i)
          if (i) n.push(i[2]);
          else if (/^(4601|6700)$/.test(e)) a[e] = 0;
          else {
            var c = new Promise((n, c) => (i = a[e] = [n, c]));
            n.push((i[2] = c));
            var o = t.p + t.u(e),
              d = new Error();
            t.l(
              o,
              (n) => {
                if (t.o(a, e) && (0 !== (i = a[e]) && (a[e] = void 0), i)) {
                  var c = n && ("load" === n.type ? "missing" : n.type),
                    o = n && n.target && n.target.src;
                  (d.message =
                    "Loading chunk " + e + " failed.\n(" + c + ": " + o + ")"),
                    (d.name = "ChunkLoadError"),
                    (d.type = c),
                    (d.request = o),
                    i[1](d);
                }
              },
              "chunk-" + e,
              e,
            );
          }
      }),
        (t.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var i,
            c,
            [o, d, s] = n,
            l = 0;
          if (o.some((e) => 0 !== a[e])) {
            for (i in d) t.o(d, i) && (t.m[i] = d[i]);
            if (s) var b = s(t);
          }
          for (e && e(n); l < o.length; l++)
            (c = o[l]), t.o(a, c) && a[c] && a[c][0](), (a[c] = 0);
          return t.O(b);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();

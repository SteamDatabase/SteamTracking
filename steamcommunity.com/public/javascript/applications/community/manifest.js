/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8576833";
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
    l = {};
  function t(a) {
    var e = l[a];
    if (void 0 !== e) return e.exports;
    var n = (l[a] = { id: a, loaded: !1, exports: {} });
    return s[a].call(n.exports, n, n.exports, t), (n.loaded = !0), n.exports;
  }
  (t.m = s),
    (a = []),
    (t.O = (e, n, c, i) => {
      if (!n) {
        var o = 1 / 0;
        for (f = 0; f < a.length; f++) {
          for (var [n, c, i] = a[f], d = !0, s = 0; s < n.length; s++)
            (!1 & i || o >= i) && Object.keys(t.O).every((a) => t.O[a](n[s]))
              ? n.splice(s--, 1)
              : ((d = !1), i < o && (o = i));
          if (d) {
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
      for (var d = 2 & c && a; "object" == typeof d && !~e.indexOf(d); d = n(d))
        Object.getOwnPropertyNames(d).forEach((e) => (o[e] = () => a[e]));
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
        27: "75786cc258ff01e3406b",
        113: "e6c492bf1220f5bcb6d8",
        131: "a7fecc57ca16bdbe5a30",
        146: "2987c29217528138ac60",
        238: "95d564736deb0443ccbe",
        301: "0aa50defe029dd3f6715",
        312: "7766518f8a92f9e53c93",
        400: "fac83d7ad8fa17eab217",
        483: "6d2109442d8c0805c29c",
        508: "0d06f71b789f9db03870",
        543: "6989a74fcd173e8342a3",
        617: "14250da27c4328c9dcac",
        755: "10cabb21d073b00c991d",
        867: "69cc0b27c733d6e6f7b0",
        908: "3f04c50c7397ff7007e6",
        960: "597fdc91e420034f1a59",
        961: "78fca4c5876e06b0474c",
        1133: "a435e37ad4b5e71f6dae",
        1195: "e8e0b989eeced6816703",
        1261: "b59e7add595a03fdd3a1",
        1311: "1b6ced9a7afc3ea13d07",
        1496: "b75715b6102baafbf4bb",
        1546: "c76502c700cf2a3c1aa3",
        1579: "ff97383edae18eab63b8",
        1649: "9dbd422ab263fa39aa04",
        1909: "3d8a4be52b2bb48f070b",
        1953: "36f670b841ce88cc9414",
        2136: "20ba9ede9d69e2e61c6c",
        2138: "b7dbb7d01f588ee1169b",
        2235: "bd4543a35c2c06d7bd76",
        2329: "580cb569c2aa0f29227b",
        2351: "56b9205fcee86ce84287",
        2373: "7d9f915dd96492874f5e",
        2449: "f187b4c3c7291709cd79",
        2468: "5c1d7412a69b504eda49",
        2530: "86c0c2c8557241f4305f",
        2557: "c0860a0475c2431ca6df",
        2603: "7d567adb5d3f52b1f388",
        2723: "6409b41f042de5cc4be1",
        2738: "44f78cd8ba875f25f78e",
        2745: "27a9dcd9a5722565a07f",
        2805: "339cb522c730a5ae8afa",
        2822: "eb2928a86e724dd82cf0",
        2829: "67d8b98ab69f4b27f1a1",
        2832: "6fb693c2bd63c53f23c1",
        2837: "38c9629a44598d574097",
        3007: "c2a33616e8d2ebde628c",
        3038: "0119d51030dc64c11ef7",
        3068: "66f47f37d5a758c37294",
        3070: "8ab6d1a63fe826b6f317",
        3175: "d92cd7214cb5f28559be",
        3202: "f04396926597d5a3617b",
        3275: "6be9f29df6e12fe13a3f",
        3298: "9a7295fbb0ffbebfafb0",
        3352: "aa5d11758934afb34c2a",
        3499: "e4690ff7c493d20f0550",
        3520: "26b829366322df563569",
        3591: "d63b3d6674098ad6b3ff",
        3602: "a6d87e8dcafaf3239430",
        3801: "f1c26a4bb17136e785db",
        3863: "c7a1895e14912fc0781a",
        3903: "4eea19dc8f3a263a7299",
        3973: "4d4549e7d652f3d01402",
        4040: "5dfadd0a23d7a3b71b63",
        4074: "67210888922a5c6a3da6",
        4097: "5a6747df271b7b2ef6b8",
        4183: "a8a08ab686a02c6ae317",
        4264: "a73bf41a6c9068e085c7",
        4293: "a1411508f3a0d2cb306e",
        4358: "48898253414819940026",
        4445: "2e5f1ddb0d82ea555bd4",
        4469: "04c0888396c3b2a83160",
        4487: "011726a1e4bbb37875de",
        4513: "be96e5210152255a0802",
        4535: "63699afa514f1a967beb",
        4601: "b478ea01baf93933327b",
        4729: "56d100139ad76476ac02",
        4819: "278c977b1dcec6580c98",
        4979: "87670f8227304b73fb8c",
        5012: "daa5a99c250894a68f88",
        5119: "5e9448909a21d6339db4",
        5277: "66da2f00bc86bac69bfc",
        5279: "d1f82c12910cda198000",
        5436: "85a2412a877165093e37",
        5439: "a6c0c37e2366037555a6",
        5493: "0215bd1919e7233b6314",
        5494: "f0bf483916c3cf43ac2c",
        5503: "459b9e7d80ee8e084e7f",
        5710: "88d2db1ef5d4824dcbcf",
        5757: "13743bd6ed5b61111b3e",
        6091: "70e4d3aa3c59c8ce409f",
        6148: "1ca0a59911794d934b2b",
        6272: "f226e717038efc1bde4f",
        6403: "e4aabd135bd3f075d29c",
        6415: "fae7e1b58e778c573b84",
        6457: "ea73446e57e59fd57aa7",
        6588: "ce006eff3b1651207873",
        6656: "2bb99cd964501b9dd153",
        6658: "ce1b19e696af45cd6292",
        6715: "1b45f099bad01622b896",
        6844: "bbf064f34dbfdc16c093",
        6845: "542c2e7ffadc6a15db34",
        6932: "7ab4a228fbaf526db175",
        6962: "8afba0f1fbef039c221b",
        7192: "7f830ced7efa26006cb1",
        7629: "d7003b515da7aa2dd1da",
        7660: "28044a7ceb24a1fc5119",
        7769: "0fbade2798d2b71cf0a6",
        7781: "eddd1d4145ccca71191e",
        7832: "e8085db9d08270eac33d",
        7901: "4e75499ccaf20102b459",
        7924: "dc86f4b85cc72372589c",
        7948: "5b55653852c85d64c578",
        7971: "c1bcc63313f79d2ddb23",
        7978: "0c13b76ec72a2cbdbf2f",
        8085: "f2ec80cba3ca88f81599",
        8120: "022aef5f32a7c9ca7b6e",
        8274: "f1dd001cb00ae6006444",
        8282: "dc799517768eb93a366b",
        8291: "9c949065c1d59467dcc0",
        8427: "fcbd32b86884b09c1d95",
        8433: "9bb392a09c0f9788e4d3",
        8525: "5ccb5a5d6a516702fa32",
        8592: "29aa86168637bfebe131",
        8647: "5bf29a3a2d097b05bd6c",
        8691: "5f8c6308e15a113f3e35",
        8805: "97a8e0a8fa629490c5a3",
        8931: "c7d1e4a5b6389e8bd83a",
        9167: "289e9feee63706ff96b2",
        9233: "74a9bd02c55f91a10def",
        9295: "73ac0594fa9b5703f5af",
        9316: "e92085f07d5a12bb7e73",
        9348: "89887f93594894aacade",
        9349: "aa044e683891d27e011d",
        9389: "51e83b6f1a4c1d699aa4",
        9427: "13f468ac94242f0926bc",
        9513: "54f6ec8965a1e7036302",
        9547: "5ec5753f2a86413a2943",
        9561: "7838db097cf794ec0af6",
        9604: "12a65373d997a5b8628a",
        9665: "5ed0c48ae42519c3c5b1",
        9828: "00973465841b5d9cc58f",
        9854: "65e96bb34c24002bf9b0",
        9888: "7c7d91debf4572335444",
        9951: "a86fd548547b9129c30a",
        9991: "32a263c1b47f0c283a9b",
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
    (c = {}),
    (i = "community:"),
    (t.l = (a, e, n, o) => {
      if (c[a]) c[a].push(e);
      else {
        var d, s;
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
              d = r;
              break;
            }
          }
        d ||
          ((s = !0),
          ((d = document.createElement("script")).charset = "utf-8"),
          (d.timeout = 120),
          t.nc && d.setAttribute("nonce", t.nc),
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
                    l = new Error(
                      "Loading CSS chunk " + a + " failed.\n(" + s + ")",
                    );
                  (l.code = "CSS_CHUNK_LOAD_FAILED"),
                    (l.type = d),
                    (l.request = s),
                    i.parentNode.removeChild(i),
                    c(l);
                }
              }),
            (i.href = e),
            document.head.appendChild(i);
        })(a, i, e, n);
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
        var c = t.o(a, e) ? a[e] : void 0;
        if (0 !== c)
          if (c) n.push(c[2]);
          else if (/^(4601|6700)$/.test(e)) a[e] = 0;
          else {
            var i = new Promise((n, i) => (c = a[e] = [n, i]));
            n.push((c[2] = i));
            var o = t.p + t.u(e),
              d = new Error();
            t.l(
              o,
              (n) => {
                if (t.o(a, e) && (0 !== (c = a[e]) && (a[e] = void 0), c)) {
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
        (t.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var c,
            i,
            [o, d, s] = n,
            l = 0;
          if (o.some((e) => 0 !== a[e])) {
            for (c in d) t.o(d, c) && (t.m[c] = d[c]);
            if (s) var f = s(t);
          }
          for (e && e(n); l < o.length; l++)
            (i = o[l]), t.o(a, i) && a[i] && a[i][0](), (a[i] = 0);
          return t.O(f);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();

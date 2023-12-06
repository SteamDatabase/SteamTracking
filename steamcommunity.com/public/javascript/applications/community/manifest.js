/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8556775";
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
        27: "89cc9b2e5d28f54db691",
        113: "16f975d297081fa0c276",
        131: "95372ccc7dbafd26b28d",
        146: "43bfdbed77d98f5efd78",
        238: "95d564736deb0443ccbe",
        301: "0aa50defe029dd3f6715",
        312: "7766518f8a92f9e53c93",
        400: "6a61e5f423354c874c1f",
        483: "6d2109442d8c0805c29c",
        508: "e91077d32cde3aa7acc4",
        543: "6989a74fcd173e8342a3",
        617: "14250da27c4328c9dcac",
        755: "281f48796eff2af53bfe",
        867: "3397882d3a1a0c77f9b1",
        908: "3f04c50c7397ff7007e6",
        960: "5d7c046ba0553223235d",
        961: "adc49bf95abc1bd91b19",
        1133: "a435e37ad4b5e71f6dae",
        1195: "e8e0b989eeced6816703",
        1261: "f4b245b1615e36c509a7",
        1311: "1b6ced9a7afc3ea13d07",
        1496: "b75715b6102baafbf4bb",
        1546: "4f90a2a688423690562a",
        1579: "5f89ef00584bc3e66468",
        1649: "9dbd422ab263fa39aa04",
        1909: "a210cf0ddf9dbf14f663",
        1953: "9d809df086a594297001",
        2136: "20ba9ede9d69e2e61c6c",
        2138: "798d9776ce399251115a",
        2235: "7613b1b6ed207c9e9aef",
        2329: "580cb569c2aa0f29227b",
        2351: "56b9205fcee86ce84287",
        2373: "0452559965bb6dd0dccc",
        2449: "f52d718df523bac7df08",
        2468: "5c1d7412a69b504eda49",
        2530: "2f9bcccb4b4acc49366e",
        2557: "c0860a0475c2431ca6df",
        2603: "7d567adb5d3f52b1f388",
        2723: "e1e408b86fd8625edbd1",
        2738: "fcb164d2ac8ca31ecef6",
        2745: "937245c0936f5ef3effa",
        2805: "339cb522c730a5ae8afa",
        2822: "29bfe48d69ea94c5571c",
        2829: "67d8b98ab69f4b27f1a1",
        2832: "ea4dca8b3de08b2dffa7",
        2837: "38c9629a44598d574097",
        3007: "65623d32a7ecaed59393",
        3038: "c35628947b3947d8f257",
        3068: "a8abd696c2be413ed33d",
        3070: "8ab6d1a63fe826b6f317",
        3175: "d92cd7214cb5f28559be",
        3202: "41491531d641e369f977",
        3275: "6be9f29df6e12fe13a3f",
        3298: "dfe48b2120c5ebc61186",
        3352: "aa5d11758934afb34c2a",
        3499: "e4690ff7c493d20f0550",
        3520: "c6a3c815fbc0363ab6d1",
        3591: "3f0bf868274593972b8b",
        3602: "8a72b9ba9dc75bbdd421",
        3801: "f1c26a4bb17136e785db",
        3863: "b82092013ed131fed30d",
        3903: "671d60ce77248632f40c",
        3973: "4d4549e7d652f3d01402",
        4040: "132536d1c8a0b466f040",
        4097: "927f7d75eebe5b3d5c7c",
        4183: "f0783f182de785857ccb",
        4264: "a73bf41a6c9068e085c7",
        4293: "8c88f9a861b2ba3df0bb",
        4358: "48898253414819940026",
        4445: "89411c3b0cab518574c0",
        4469: "dd6fcc2969d3b15487e9",
        4487: "f2b8d7bdf8842b79e156",
        4513: "023a5c6c759cd012f7b0",
        4535: "63699afa514f1a967beb",
        4601: "ab32db48e97a45dc1e89",
        4729: "cdf85390765f5f9df78e",
        4819: "5e7858017d47807248ee",
        4979: "94f4696c4a94ff39d74d",
        5012: "daa5a99c250894a68f88",
        5119: "5e9448909a21d6339db4",
        5277: "0e862e6ec57b28396634",
        5279: "2c4a5ab47d12a57c8a75",
        5436: "464440205384dfb8c9cf",
        5439: "0a1dd0a70f96480a3937",
        5493: "0215bd1919e7233b6314",
        5494: "09ac68a7b4bef8574dbe",
        5503: "459b9e7d80ee8e084e7f",
        5710: "59b46b06bea3360be762",
        5757: "13743bd6ed5b61111b3e",
        6091: "3050bdc1983f08dacfe8",
        6148: "1ca0a59911794d934b2b",
        6272: "f226e717038efc1bde4f",
        6378: "e2c51ec34674063a0b4d",
        6403: "d83fab68397a4a512365",
        6415: "fae7e1b58e778c573b84",
        6457: "ea73446e57e59fd57aa7",
        6588: "ce006eff3b1651207873",
        6656: "2bb99cd964501b9dd153",
        6658: "8d38ad363801a53278b8",
        6715: "98935a3cb8699d9b0375",
        6844: "3af13f83e407d0c7620e",
        6845: "542c2e7ffadc6a15db34",
        6932: "55595aa9ba5e186b7ad2",
        6962: "8afba0f1fbef039c221b",
        7192: "67af931cbd640dba9f05",
        7629: "d7003b515da7aa2dd1da",
        7660: "29eff5a6618c2af46c21",
        7769: "0fbade2798d2b71cf0a6",
        7781: "93d351b2a5c719643a4c",
        7832: "e8085db9d08270eac33d",
        7901: "8819d631e09f8537bf0f",
        7924: "f751610da58014e4047d",
        7948: "5b55653852c85d64c578",
        7971: "4238ec9b9c11c81b521d",
        7978: "db44d4e003fdc4755f01",
        8085: "31e64e2a734f5b009894",
        8120: "022aef5f32a7c9ca7b6e",
        8274: "f1dd001cb00ae6006444",
        8282: "dc799517768eb93a366b",
        8291: "9c949065c1d59467dcc0",
        8427: "fcbd32b86884b09c1d95",
        8433: "e6f28d5e6606ac37a795",
        8525: "5ccb5a5d6a516702fa32",
        8592: "29aa86168637bfebe131",
        8647: "5bf29a3a2d097b05bd6c",
        8691: "5f8c6308e15a113f3e35",
        8805: "6f07bf069f7635e7ae85",
        8931: "4826b4168b458cad01fd",
        9167: "cbe5271d18a1a3864b23",
        9233: "74a9bd02c55f91a10def",
        9295: "dabc53793ca3faa4a8d8",
        9316: "f4f248d9852bd5ace747",
        9348: "224532ee397dd1642084",
        9349: "aa044e683891d27e011d",
        9389: "51e83b6f1a4c1d699aa4",
        9427: "13f468ac94242f0926bc",
        9513: "66cc41b53e00226e840f",
        9547: "4db6e76f619ec4370f97",
        9561: "94dc49242a96ba1b445d",
        9665: "5ed0c48ae42519c3c5b1",
        9828: "7c84a58dbf068c943f7f",
        9854: "2b347f9e72e864dd89a7",
        9888: "52722bad12f7820337b4",
        9951: "077c9ebdf538d37a9c85",
        9991: "c220b3e4f3b583e8b7ac",
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
        3903: "ada073e77d3d84945cb9",
        4535: "120ef11d3786830c5571",
        4601: "fd94d248a892c0493422",
        5436: "671dce66cf8a63ffd3ac",
        6272: "54f6373c553646633f48",
        6845: "c5991fafb114f811dc73",
        8647: "2aa199fdf547121332be",
        8931: "1e5c3063844f53b34c13",
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

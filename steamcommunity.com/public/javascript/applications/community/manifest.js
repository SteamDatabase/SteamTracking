/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8125927";
(() => {
  "use strict";
  var a,
    e,
    n,
    c,
    o,
    i,
    s,
    t = {},
    d = {};
  function l(a) {
    var e = d[a];
    if (void 0 !== e) return e.exports;
    var n = (d[a] = { id: a, loaded: !1, exports: {} });
    return t[a].call(n.exports, n, n.exports, l), (n.loaded = !0), n.exports;
  }
  (l.m = t),
    (a = []),
    (l.O = (e, n, c, o) => {
      if (!n) {
        var i = 1 / 0;
        for (f = 0; f < a.length; f++) {
          for (var [n, c, o] = a[f], s = !0, t = 0; t < n.length; t++)
            (!1 & o || i >= o) && Object.keys(l.O).every((a) => l.O[a](n[t]))
              ? n.splice(t--, 1)
              : ((s = !1), o < i && (i = o));
          if (s) {
            a.splice(f--, 1);
            var d = c();
            void 0 !== d && (e = d);
          }
        }
        return e;
      }
      o = o || 0;
      for (var f = a.length; f > 0 && a[f - 1][2] > o; f--) a[f] = a[f - 1];
      a[f] = [n, c, o];
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
      for (var s = 2 & c && a; "object" == typeof s && !~e.indexOf(s); s = n(s))
        Object.getOwnPropertyNames(s).forEach((e) => (i[e] = () => a[e]));
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
        27: "dfab4e6624f86a3e682b",
        113: "53852112a74e095c81d9",
        131: "b464e7feb0fcd854ac71",
        238: "95d564736deb0443ccbe",
        301: "afe21e26d1d0ef1733d4",
        312: "387262bad5b8aaf3a76f",
        400: "7d27e966bbee70874875",
        483: "e439fa5133b101be247c",
        508: "7668ff27b9c755b36f7a",
        543: "92596e2ccfaa7bc641ca",
        617: "79e69f216b928f0f4058",
        755: "1a93033d2c6e1240210d",
        867: "4714f6280064a9c5c47a",
        908: "fbbab534056444ed0899",
        960: "64b316d460408524b18d",
        961: "b85bcae9a592e38a54a5",
        1133: "1869b1746ae370ed7303",
        1195: "0686d928b848d087a4d9",
        1261: "d57cffe54f00fa0578df",
        1311: "6a62d35c817c8cd77c23",
        1496: "456f9aef77d62bb80442",
        1546: "c0deefd8c12becfec077",
        1579: "2a2f2406225ecb7ce852",
        1649: "9e115a535d3cdeee48fe",
        1909: "21a99c3a08978009e986",
        1953: "d8fb54cded03ac70571a",
        2136: "cc5c6e584acf93d07798",
        2138: "b6d9467f46bd7703cdb8",
        2235: "bf05678d0d6c76c42b84",
        2329: "580cb569c2aa0f29227b",
        2351: "0a9afeb744615c583767",
        2373: "00e91189db07db2938d8",
        2449: "7d6d75537be214156c85",
        2468: "2d5e27cefd495455ecb3",
        2530: "9f8f456f4457a8a9fb86",
        2557: "6e49d6ff02aafd1e94bc",
        2723: "f93b75b2df1fd725cf33",
        2738: "79961a97acab4767be04",
        2745: "d73daedb49974fa3546a",
        2805: "353dd7d374cc54785cd5",
        2822: "18f11f371dacf15f183c",
        2832: "7592f3d618a1c86c34db",
        3007: "abac6d3ade686d483d9f",
        3038: "07d6ffbfbb8664f2d550",
        3068: "84da090c9712953734e9",
        3202: "839415dd5538aa9fff41",
        3298: "1eb079af17b976e8ce32",
        3352: "161f0e6ef5975076b907",
        3499: "041625ebc050687c3074",
        3520: "dec8032da623e8aee13b",
        3591: "dda6f830ef55043e0ff3",
        3602: "abdad44d8ad962e6df58",
        3742: "f81347ed7773a3277376",
        3903: "0dd68e091524ed0d0cd9",
        3973: "8124f60010ba4eb629e2",
        4040: "f67f311de50b77f325e7",
        4097: "e4260fddbc5b964ab546",
        4183: "4881bc29d6027992d632",
        4293: "47086b899b3d7b50835b",
        4358: "1fa57011b01736c2aa5f",
        4445: "1473e125a80328b1a2e7",
        4469: "3a07caa1969eeef1f27a",
        4487: "10c91a2b87b089890482",
        4513: "06b63c3dc3c08c73dc33",
        4535: "693d89a79df82579cc10",
        4601: "d614ec7b3a1b81aeaf5b",
        4729: "da3c14d1add7d028d5ea",
        4819: "00e75c317fee97addd7d",
        4979: "539b3fc2d8cc1416b424",
        5012: "d886dc9aeae04a168418",
        5119: "66d920f8746f56b5cce4",
        5277: "462ec1ced657d0cb0009",
        5279: "631a55805f26aa7867c5",
        5436: "6486e5f272345aea4c44",
        5439: "71354ff8192165945f48",
        5493: "f0721338c9551c26be9f",
        5494: "c7f3f3916dab71f85860",
        5503: "1550d7e6d96474191bf3",
        5757: "9e52b229515326275e1f",
        6091: "532d655ff0ffa7fc2a8d",
        6148: "1ca0a59911794d934b2b",
        6272: "1226b519b1c2b9deacf0",
        6378: "f32ee16901175b5852d0",
        6403: "db1ee1dffeeac2416fdb",
        6415: "b7ef272b08060855eeac",
        6457: "4f1a4fa677db2bc6b0dc",
        6588: "a5373e3d0e90ce9f0ed8",
        6656: "0620cc0db36da685d691",
        6658: "c17f503c4b160224e518",
        6715: "b546f627254ec8397a36",
        6844: "6de012f580c980487ed2",
        6845: "cf03a1b26daae24b25cc",
        6932: "d53756bb6a97321755d6",
        6962: "07df4daa52bdaa93a17a",
        7629: "bfb323be5679073f120c",
        7660: "02c9e5ef87365b0d0f92",
        7769: "3ba08fdefb871f842b90",
        7781: "2fd804e313eb8d0fd77b",
        7832: "e8085db9d08270eac33d",
        7901: "715ce74911ff7352cda8",
        7924: "02257f9a3371c8e7315b",
        7942: "ac7def959a434c9b08da",
        7948: "4701980ccbf99473c130",
        7971: "6a51dc5e61f0f589f50a",
        8085: "90ed788dbdfc2cd383cd",
        8120: "a7ed78872ed872170d95",
        8274: "f6ba210c6ccb2e5df314",
        8282: "b7c813c763fb72f0c584",
        8291: "6a789d305d6483a3a497",
        8427: "691ba38e24c7cad8af7c",
        8433: "2021032417213421e959",
        8525: "eba471733a3b5a8b8a22",
        8592: "b9f8f53ed001e3394202",
        8647: "2d5f223e49f8efca8057",
        8691: "5f8c6308e15a113f3e35",
        8805: "7e7cebe54b432edcc531",
        8931: "4c8efdb3bd5383721a44",
        9167: "81e3145cf3688ea25dbb",
        9233: "df4783e646f7a70511d4",
        9316: "bbc41c1dbdcf8b3dab55",
        9348: "e559489b67549ca24dd7",
        9349: "0f52d9c326a090d46444",
        9389: "152010686104e8901643",
        9427: "3a79890efb35367c2601",
        9513: "124e58afc893e3873513",
        9547: "057e4f1cd9116cf7871e",
        9561: "8a942f1802689aeef7f1",
        9665: "4e84fe931897947b7ba8",
        9828: "0916ec6dfd053fb2ad59",
        9854: "f804ae7d2562fa34a22d",
        9888: "47b33592c4e63e466525",
        9949: "d415b3feff7bb81242fc",
        9951: "a44fba24630cc43af517",
        9991: "36cd46ba70258f7aa38e",
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
        400: "36e68f11f59a215d157e",
        508: "94f77ada275d2d10cef1",
        908: "9844515e07566417856e",
        1909: "2fca35912c0825f76d76",
        2136: "8c359fa0555fa2bd2c5d",
        2329: "a969564f4cdabf0c473e",
        2449: "5f84fb007eba38212c79",
        2530: "110cc55c61f202628d1b",
        3068: "8950716d95d9a9ab218a",
        3352: "f3838685918d3c88bdc3",
        3499: "f66814af59f83abee010",
        3520: "f07f4d7f2de709629026",
        3903: "fd3f85ef3102d792b6b0",
        4535: "120ef11d3786830c5571",
        4601: "7051786867362f304840",
        5436: "671dce66cf8a63ffd3ac",
        6272: "421aa9f56f19d4e59fdb",
        6845: "c9d51c8f2ad7a6c297a0",
        8647: "2aa199fdf547121332be",
        8931: "8859628e2387f439514e",
        9348: "26d803a4798502279180",
        9349: "f4977652404f75e5d337",
        9427: "c6891b4c206c0e0b8832",
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
        var s, t;
        if (void 0 !== n)
          for (
            var d = document.getElementsByTagName("script"), f = 0;
            f < d.length;
            f++
          ) {
            var r = d[f];
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
          (c[a] = [e]);
        var b = (e, n) => {
            (s.onerror = s.onload = null), clearTimeout(h);
            var o = c[a];
            if (
              (delete c[a],
              s.parentNode && s.parentNode.removeChild(s),
              o && o.forEach((a) => a(n)),
              e)
            )
              return e(n);
          },
          h = setTimeout(
            b.bind(null, void 0, { type: "timeout", target: s }),
            12e4
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
          "Automatic publicPath is not supported in this browser"
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
                (s = n[c]).getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (o === a || o === e)) return s;
            }
            var i = document.getElementsByTagName("style");
            for (c = 0; c < i.length; c++) {
              var s;
              if ((o = (s = i[c]).getAttribute("data-href")) === a || o === e)
                return s;
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
                  var s = i && ("load" === i.type ? "missing" : i.type),
                    t = (i && i.target && i.target.href) || e,
                    d = new Error(
                      "Loading CSS chunk " + a + " failed.\n(" + t + ")"
                    );
                  (d.code = "CSS_CHUNK_LOAD_FAILED"),
                    (d.type = s),
                    (d.request = t),
                    o.parentNode.removeChild(o),
                    c(d);
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
            (s[a] = i(a).then(
              () => {
                s[a] = 0;
              },
              (e) => {
                throw (delete s[a], e);
              }
            ))
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
              s = new Error();
            l.l(
              i,
              (n) => {
                if (l.o(a, e) && (0 !== (c = a[e]) && (a[e] = void 0), c)) {
                  var o = n && ("load" === n.type ? "missing" : n.type),
                    i = n && n.target && n.target.src;
                  (s.message =
                    "Loading chunk " + e + " failed.\n(" + o + ": " + i + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = o),
                    (s.request = i),
                    c[1](s);
                }
              },
              "chunk-" + e,
              e
            );
          }
      }),
        (l.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var c,
            o,
            [i, s, t] = n,
            d = 0;
          if (i.some((e) => 0 !== a[e])) {
            for (c in s) l.o(s, c) && (l.m[c] = s[c]);
            if (t) var f = t(l);
          }
          for (e && e(n); d < i.length; d++)
            (o = i[d]), l.o(a, o) && a[o] && a[o][0](), (a[o] = 0);
          return l.O(f);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();

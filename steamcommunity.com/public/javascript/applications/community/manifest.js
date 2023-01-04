/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7757556";
(() => {
  "use strict";
  var a,
    e,
    n,
    o,
    c,
    i,
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
    (l.O = (e, n, o, c) => {
      if (!n) {
        var i = 1 / 0;
        for (r = 0; r < a.length; r++) {
          for (var [n, o, c] = a[r], s = !0, d = 0; d < n.length; d++)
            (!1 & c || i >= c) && Object.keys(l.O).every((a) => l.O[a](n[d]))
              ? n.splice(d--, 1)
              : ((s = !1), c < i && (i = c));
          if (s) {
            a.splice(r--, 1);
            var t = o();
            void 0 !== t && (e = t);
          }
        }
        return e;
      }
      c = c || 0;
      for (var r = a.length; r > 0 && a[r - 1][2] > c; r--) a[r] = a[r - 1];
      a[r] = [n, o, c];
    }),
    (l.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return l.d(e, { a: e }), e;
    }),
    (n = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (l.t = function (a, o) {
      if ((1 & o && (a = this(a)), 8 & o)) return a;
      if ("object" == typeof a && a) {
        if (4 & o && a.__esModule) return a;
        if (16 & o && "function" == typeof a.then) return a;
      }
      var c = Object.create(null);
      l.r(c);
      var i = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var s = 2 & o && a; "object" == typeof s && !~e.indexOf(s); s = n(s))
        Object.getOwnPropertyNames(s).forEach((e) => (i[e] = () => a[e]));
      return (i.default = () => a), l.d(c, i), c;
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
        1338: "chunk~87d496b58",
        1546: "localization/sales_english-json",
        1579: "localization/shared_ukrainian-json",
        1649: "chunk~03410565e",
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
        2677: "chunk~3593b01ab",
        2723: "localization/sales_polish-json",
        2738: "localization/shared_turkish-json",
        2745: "localization/sales_ukrainian-json",
        2805: "chunk~4b330692b",
        2822: "localization/shared_greek-json",
        2829: "libraries~5a92743e8",
        2832: "chunk~d3aa4b017",
        3007: "localization/sales_finnish-json",
        3038: "localization/main_french-json",
        3202: "localization/sales_vietnamese-json",
        3298: "localization/shared_brazilian-json",
        3352: "eventinternal",
        3499: "communityfaqs",
        3591: "localization/sales_bulgarian-json",
        3602: "localization/shared_dutch-json",
        3742: "chunk~c7a3fa389",
        3903: "games",
        3973: "chunk~4e3b43bb2",
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
        6403: "localization/shared_russian-json",
        6415: "localization/main_brazilian-json",
        6457: "localization/main_turkish-json",
        6588: "libraries~f036ce556",
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
        27: "8b836b5efa7c705a69f3",
        113: "0dd487760e6812ebfb13",
        131: "96052dc43c00f2af2e0a",
        238: "602fa14425f0a94b78d2",
        301: "e77a507a4ca3f7016053",
        312: "f43bd3c1dfc86bad2dbb",
        400: "8982881bf3e55397b810",
        483: "022e81030e2fadf7a189",
        508: "4675aa76609c2d4df52c",
        543: "45872255803922b928e0",
        617: "de34fa86f853525c45dc",
        755: "83faf0c846e720e9cf2a",
        867: "483a5ffa3d48a12e4102",
        908: "e517e834d1784ae4d297",
        960: "db6b7d71cd8e0a0b0a62",
        961: "76ce7b8da29e4dae7c60",
        1133: "4ec51e2b55fc5927a86e",
        1195: "72decae909e1ed226a26",
        1261: "b750bcc7aa4cfc05e2bf",
        1311: "db1c7c60ab281bccdff3",
        1338: "0164ce95f5f39e8900bf",
        1546: "099d38b21e167e12c941",
        1579: "570f56551de281aa1ab1",
        1649: "9fac579e9d6367e3bbc4",
        1953: "6d95cd7363728208ef05",
        2136: "87f9989332d113934ab9",
        2138: "89b1d6b605ff2b806b04",
        2235: "90e6d363c1c5dbe87c6a",
        2329: "cd3c1b3a4d5d92ff9833",
        2351: "9b0b8e6eccc799453cd4",
        2373: "219dea55ba816e2e3bab",
        2449: "c98911557b87093dcd50",
        2468: "e862323e7b0b2c2ae5ba",
        2530: "cac1f422f42bfd8f92cb",
        2557: "0460aad3017d70420038",
        2677: "0e674a7037aadf04f444",
        2723: "f04f80e62ecf82eb79fe",
        2738: "8e91b23ff35e3f6cf7ff",
        2745: "0f741bceff38b7a5a7f4",
        2805: "1ef1ebb9772c53bea3b4",
        2822: "44de87bbe2c7e34d750d",
        2829: "72043b0ea613daece606",
        2832: "ebe307612981ea515d1c",
        3007: "16e3c2f0e40aab7d5e6e",
        3038: "6a48f1c6a762eb2abadf",
        3202: "0170c0d97cdac9f4fcf2",
        3298: "291235ed3646d550f534",
        3352: "6bafba4930b19cf19738",
        3499: "66ec3e1daf425c6c19ea",
        3591: "7ba374b35317f51aa849",
        3602: "4b86cf5410f5288d5873",
        3742: "b6e83ff0f1502132ce42",
        3903: "f5660ca080373e8b3d36",
        3973: "fa73d5b3915f9b917a3c",
        4097: "6305613f37abb4a2f50a",
        4183: "5c8da6cc4f8d0d5b8038",
        4264: "2dcafd22e245d6583b96",
        4293: "b0cb7d8bf4e6cb12dccd",
        4358: "40b3bb9f248f9ed15809",
        4445: "dfc5bbec1f4c3f3a13e3",
        4469: "bd7154ce8732ed050a9b",
        4487: "bb0f9524047e43ae7a33",
        4513: "5c32c00ef9b8fed1e419",
        4535: "1f23cbf49e2bf7fb8e0d",
        4601: "aef74b8d830c657366f6",
        4729: "db3f7f01337c0dfb6fb5",
        4819: "066fa817f9dd66765433",
        4979: "ea49b2b057231b0452c9",
        5012: "d72ae8180c1a8a779c31",
        5277: "43e76b77eebc0105df4c",
        5279: "1382534a70af8a5f13df",
        5436: "c6a1675af4c9245ece73",
        5439: "644848f55f3d62a0b051",
        5493: "a357fa6b9d77d5f0233b",
        5494: "e7b4a834eabbbfaf6f45",
        5503: "3351e50e201cac4c34c1",
        5757: "c1df083e8d6c2d868621",
        6091: "f4414acac3117396db67",
        6148: "5aca2d35a443fd3058d9",
        6272: "5428b30d7a8beb80959e",
        6403: "87cc7b49de8819c9cf36",
        6415: "15680a8ff46a7be72870",
        6457: "03eb9aa2f55a3ba68f8b",
        6588: "f25524c9f86bd49a56bf",
        6658: "2bb161a7f514579e0bf6",
        6715: "ab5337832d5eb8f1f322",
        6844: "ffbfc76637f34154690e",
        6845: "4963c7ec66b0534d4506",
        6932: "d00400162afd4667229e",
        6962: "a6ef693172c9c82212e0",
        7629: "c70ce5e95d06ea3ef1a3",
        7660: "ceb1b6f7ae99caa10f00",
        7769: "b40a3c4f9f46f231338b",
        7781: "fe371731f8911f0f365f",
        7832: "6d3214c50ca68865f871",
        7901: "f23ad866de3712c2edfc",
        7924: "1aab1db5c8ebad024e24",
        7948: "fa171af40bb71a200a06",
        7971: "828521ab6809b843e7db",
        8085: "48e35bf58ec21e4493f5",
        8120: "a4dd7715b72f098ab3d8",
        8274: "56b5670f564326c78fac",
        8282: "8e65dfac8e7068bb5864",
        8291: "4e04f2c8c3b67f8f0bec",
        8427: "9f51d31c075e3a03214a",
        8433: "4a591a6409b281941630",
        8525: "f1217d9cad55f6b2b32c",
        8592: "ed2c2ff28c696eb75287",
        8647: "685f5b04d7debb628eb5",
        8691: "9422b45f35c587cbb992",
        8805: "2cc6b98228d17f24911c",
        8931: "e99535cbee876c265a74",
        9167: "1c50385d2f95f44914fe",
        9233: "504300c2a8fbe6b86b22",
        9316: "25f66e9f88a11338e1eb",
        9348: "a482619837bc778d8799",
        9349: "1910361dfd51ae51e9ef",
        9389: "b9f9911550161883a3b5",
        9427: "99f3d58d33af7fcfb7d1",
        9513: "5b3be9c5c1b40a3a6d8b",
        9547: "fae1e6836b702bc2679f",
        9561: "e208c775bd41af5d87e4",
        9665: "db29169e6042a1eb656c",
        9828: "2b5c750d205a24d42f33",
        9854: "c1e2747ba64dcdc6a717",
        9888: "180fd17bb19addc02daa",
        9949: "f984d693802b2990bc38",
        9951: "25f135ba46d77de810be",
        9991: "2a90911c4b1e86a648f5",
      }[a]),
    (l.miniCssF = (a) =>
      "css/applications/community/" +
      {
        238: "communityawardsapp",
        312: "communityhomeheader",
        400: "chunk~b1f9f17fd",
        508: "chunk~d2dd7ecf6",
        908: "qanda",
        2136: "events",
        2329: "avatarcrop",
        2449: "chunk~7a7b104fb",
        2530: "chunk~f036ce556",
        3352: "eventinternal",
        3499: "communityfaqs",
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
        238: "82877e2cea30622a4345",
        312: "9e6bee6632888a265236",
        400: "f8c97596bb5fe12eecc2",
        508: "81d38e67efcab4dad1b3",
        908: "9eb8961d1f3806c1951c",
        2136: "7677775ce82ff87c079e",
        2329: "70358f02752594d6bf7b",
        2449: "daa7e074383347bf1c8d",
        2530: "00ea47a57fc28d15f8c2",
        3352: "f3838685918d3c88bdc3",
        3499: "ceabdd14fa2e8fac8cdf",
        3903: "dda801381beb72b87e28",
        4535: "120ef11d3786830c5571",
        4601: "5b02011896f2f5b3d01b",
        5436: "6eca1d3524672f585c5a",
        6272: "96937946e427750774e4",
        6845: "c97ddaebddd7c4860a46",
        8647: "413bbe35d505feb2a7be",
        8931: "82f2926b8230cc850196",
        9348: "c324699991d59e2004e3",
        9349: "f4977652404f75e5d337",
        9427: "7d416d79a5b966032c63",
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
    (o = {}),
    (c = "community:"),
    (l.l = (a, e, n, i) => {
      if (o[a]) o[a].push(e);
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
              f.getAttribute("data-webpack") == c + n
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
          s.setAttribute("data-webpack", c + n),
          (s.src = a)),
          (o[a] = [e]);
        var b = (e, n) => {
            (s.onerror = s.onload = null), clearTimeout(h);
            var c = o[a];
            if (
              (delete o[a],
              s.parentNode && s.parentNode.removeChild(s),
              c && c.forEach((a) => a(n)),
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
        var o = l.miniCssF(a),
          c = l.p + o;
        if (
          ((a, e) => {
            for (
              var n = document.getElementsByTagName("link"), o = 0;
              o < n.length;
              o++
            ) {
              var c =
                (s = n[o]).getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (c === a || c === e)) return s;
            }
            var i = document.getElementsByTagName("style");
            for (o = 0; o < i.length; o++) {
              var s;
              if ((c = (s = i[o]).getAttribute("data-href")) === a || c === e)
                return s;
            }
          })(o, c)
        )
          return e();
        ((a, e, n, o) => {
          var c = document.createElement("link");
          (c.rel = "stylesheet"),
            (c.type = "text/css"),
            (c.onerror = c.onload =
              (i) => {
                if (((c.onerror = c.onload = null), "load" === i.type)) n();
                else {
                  var s = i && ("load" === i.type ? "missing" : i.type),
                    d = (i && i.target && i.target.href) || e,
                    t = new Error(
                      "Loading CSS chunk " + a + " failed.\n(" + d + ")"
                    );
                  (t.code = "CSS_CHUNK_LOAD_FAILED"),
                    (t.type = s),
                    (t.request = d),
                    c.parentNode.removeChild(c),
                    o(t);
                }
              }),
            (c.href = e),
            document.head.appendChild(c);
        })(a, c, e, n);
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
            2136: 1,
            2329: 1,
            2449: 1,
            2530: 1,
            3352: 1,
            3499: 1,
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
        var o = l.o(a, e) ? a[e] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (/^(4601|6700)$/.test(e)) a[e] = 0;
          else {
            var c = new Promise((n, c) => (o = a[e] = [n, c]));
            n.push((o[2] = c));
            var i = l.p + l.u(e),
              s = new Error();
            l.l(
              i,
              (n) => {
                if (l.o(a, e) && (0 !== (o = a[e]) && (a[e] = void 0), o)) {
                  var c = n && ("load" === n.type ? "missing" : n.type),
                    i = n && n.target && n.target.src;
                  (s.message =
                    "Loading chunk " + e + " failed.\n(" + c + ": " + i + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = c),
                    (s.request = i),
                    o[1](s);
                }
              },
              "chunk-" + e,
              e
            );
          }
      }),
        (l.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var o,
            c,
            [i, s, d] = n,
            t = 0;
          if (i.some((e) => 0 !== a[e])) {
            for (o in s) l.o(s, o) && (l.m[o] = s[o]);
            if (d) var r = d(l);
          }
          for (e && e(n); t < i.length; t++)
            (c = i[t]), l.o(a, c) && a[c] && a[c][0](), (a[c] = 0);
          return l.O(r);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();

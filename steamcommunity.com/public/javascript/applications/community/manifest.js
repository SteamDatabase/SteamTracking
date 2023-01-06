/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7763081";
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
    l = {};
  function d(a) {
    var e = l[a];
    if (void 0 !== e) return e.exports;
    var n = (l[a] = { id: a, loaded: !1, exports: {} });
    return t[a].call(n.exports, n, n.exports, d), (n.loaded = !0), n.exports;
  }
  (d.m = t),
    (a = []),
    (d.O = (e, n, c, o) => {
      if (!n) {
        var i = 1 / 0;
        for (r = 0; r < a.length; r++) {
          for (var [n, c, o] = a[r], s = !0, t = 0; t < n.length; t++)
            (!1 & o || i >= o) && Object.keys(d.O).every((a) => d.O[a](n[t]))
              ? n.splice(t--, 1)
              : ((s = !1), o < i && (i = o));
          if (s) {
            a.splice(r--, 1);
            var l = c();
            void 0 !== l && (e = l);
          }
        }
        return e;
      }
      o = o || 0;
      for (var r = a.length; r > 0 && a[r - 1][2] > o; r--) a[r] = a[r - 1];
      a[r] = [n, c, o];
    }),
    (d.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return d.d(e, { a: e }), e;
    }),
    (n = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (d.t = function (a, c) {
      if ((1 & c && (a = this(a)), 8 & c)) return a;
      if ("object" == typeof a && a) {
        if (4 & c && a.__esModule) return a;
        if (16 & c && "function" == typeof a.then) return a;
      }
      var o = Object.create(null);
      d.r(o);
      var i = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var s = 2 & c && a; "object" == typeof s && !~e.indexOf(s); s = n(s))
        Object.getOwnPropertyNames(s).forEach((e) => (i[e] = () => a[e]));
      return (i.default = () => a), d.d(o, i), o;
    }),
    (d.d = (a, e) => {
      for (var n in e)
        d.o(e, n) &&
          !d.o(a, n) &&
          Object.defineProperty(a, n, { enumerable: !0, get: e[n] });
    }),
    (d.f = {}),
    (d.e = (a) =>
      Promise.all(Object.keys(d.f).reduce((e, n) => (d.f[n](a, e), e), []))),
    (d.u = (a) =>
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
        27: "8f9b33fd188ee0a2fa69",
        113: "efb3dd32d9f944c13fba",
        131: "9d852092bf808f3c9b16",
        238: "602fa14425f0a94b78d2",
        301: "73e945e2845b0e643528",
        312: "f43bd3c1dfc86bad2dbb",
        400: "16f459ab588de88610b9",
        483: "022e81030e2fadf7a189",
        508: "3665c7695aaf4a5772b9",
        543: "45872255803922b928e0",
        617: "0ddb81d4ff3ddd85a85f",
        755: "84829e199c700cfd1bcd",
        867: "dbe91ddb7c79254d2561",
        908: "e517e834d1784ae4d297",
        960: "2c8137443eb62b973ac7",
        961: "b90a5fd895bde720cd5d",
        1133: "154f3307a2e74668e1fa",
        1195: "86ac9a5dd65d8a2f6ec2",
        1261: "8be74c2024f5b1198821",
        1311: "27619de3aa440078f2c6",
        1338: "634df8b0cabb4ab4a13e",
        1546: "b086b90ca075857d592c",
        1579: "f4a3dff2c30032f70069",
        1649: "9fac579e9d6367e3bbc4",
        1953: "79e745b18962e1ce318f",
        2136: "6a1fb633844a445d2d1f",
        2138: "a180fa997e7de655c6c5",
        2235: "e4639e0eae32fc60dede",
        2329: "cd3c1b3a4d5d92ff9833",
        2351: "579cc3b5c0cff583a8f6",
        2373: "1d92fe3fa4106bd9e23d",
        2449: "c98911557b87093dcd50",
        2468: "d5eea64fdc8ccc12adb3",
        2530: "9d2cc156d8afa6104ba9",
        2557: "28c006850652fd038c8b",
        2677: "0e674a7037aadf04f444",
        2723: "7dea74bcf9894917d2b8",
        2738: "ebddc1c56154f90eb691",
        2745: "0ee183cfc2149c5db2ea",
        2805: "1ef1ebb9772c53bea3b4",
        2822: "f77f2a43a01615bd8101",
        2832: "ebe307612981ea515d1c",
        3007: "0417ecf74a90e0dd358c",
        3038: "f07ab3eb3a45dca4f297",
        3202: "681dd766d6f76eab509a",
        3298: "e0dc82798f677589a19c",
        3352: "6bafba4930b19cf19738",
        3499: "518e73fd24a2a791a2fe",
        3591: "343be32681285e3fcc20",
        3602: "c6a5c1a3b2d7cba05c49",
        3742: "b6e83ff0f1502132ce42",
        3903: "40fba7969873c69d4b6c",
        3973: "fa73d5b3915f9b917a3c",
        4097: "b494080b07472258bd53",
        4183: "8324c46f6650b4f499d2",
        4264: "2dcafd22e245d6583b96",
        4293: "48bc6d7ac09918355a2c",
        4358: "40b3bb9f248f9ed15809",
        4445: "52ace646a502602b1908",
        4469: "ad0d7a54a89f95f9ed2f",
        4487: "9b1204f9a52bc5cdb2de",
        4513: "42a013833a8db8ef023e",
        4535: "450473224cdd51271e62",
        4601: "aef74b8d830c657366f6",
        4729: "0684afcdf31d1631ce88",
        4819: "83467ea21e47a70c6f7f",
        4979: "e59f81b62f899ae24461",
        5012: "d2188007933107316566",
        5277: "42140934869e9eddab6b",
        5279: "c424aabb9a8ceab83ef0",
        5436: "c6a1675af4c9245ece73",
        5439: "16baa12ec54daa8ded6a",
        5493: "22d199c7a33179d7d606",
        5494: "d2b1888623dfa560881e",
        5503: "3351e50e201cac4c34c1",
        5757: "87e6016cab2fa4984060",
        6091: "b5eb0b255fefce199ad0",
        6148: "5aca2d35a443fd3058d9",
        6272: "a50bb9c8a6f14c03a11e",
        6403: "95a81ac3c5cebdfe3c86",
        6415: "39f56f983fad3477a3bd",
        6457: "2cfc7051a18c256854be",
        6588: "f25524c9f86bd49a56bf",
        6658: "4a7e1d51e3bfbdc6bb6c",
        6715: "c66a5d57898996692d39",
        6844: "d653f45b7159d7fc7a9a",
        6845: "4963c7ec66b0534d4506",
        6932: "c414c1108810bdbb9dc2",
        6962: "fd7803b57236f846cfc2",
        7629: "c888e8880daa8cb407b4",
        7660: "e85e68f30001c72885b7",
        7769: "509e2a2743ca672c8dd7",
        7781: "a5f60eb7ec18d2eac4b9",
        7832: "6d3214c50ca68865f871",
        7901: "e80668613986658dad2d",
        7924: "0a1a9915d2b653c09d08",
        7948: "fa171af40bb71a200a06",
        7971: "78ba4acfa7cc2afac067",
        8085: "16b47a4f4839169287e6",
        8120: "a4dd7715b72f098ab3d8",
        8274: "9295cc916843688c7152",
        8282: "510467a43171f3451922",
        8291: "e6ed1443ad8dd032f951",
        8427: "36903d369b35c4888197",
        8433: "b27868fae6ae96fc768e",
        8525: "b00dbad472dcf6247b91",
        8592: "c90f4eccfe5530a244eb",
        8647: "685f5b04d7debb628eb5",
        8691: "9422b45f35c587cbb992",
        8805: "9bd27977cf06daabeefd",
        8931: "c15a1d171f7cf83106e0",
        9167: "755d0caa14214610e6c8",
        9233: "36f32268a2f8872984f1",
        9316: "b6a1989ad55461b11487",
        9348: "a482619837bc778d8799",
        9349: "96e2b3bc99ded6722ede",
        9389: "b9f9911550161883a3b5",
        9427: "968fad02399f246cb291",
        9513: "d54d09dc14a67f547e35",
        9547: "ef7ecdb3beb8fe113136",
        9561: "071acbbbe0c1be0ee1d0",
        9665: "a91c5b3e039cc3a01e94",
        9828: "c1a876b4501674834c50",
        9854: "ef2465c581beb1c39ec2",
        9888: "36f847c077671e8c11b3",
        9949: "fe941f09558f537a5b1d",
        9951: "4644d5b5fc482515929a",
        9991: "e711b8ec50b99f7bbdc0",
      }[a]),
    (d.miniCssF = (a) =>
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
        400: "e65ee62404cd600d244e",
        508: "ea9bd61ee5b873b0fb79",
        908: "9eb8961d1f3806c1951c",
        2136: "7677775ce82ff87c079e",
        2329: "70358f02752594d6bf7b",
        2449: "daa7e074383347bf1c8d",
        2530: "00ea47a57fc28d15f8c2",
        3352: "f3838685918d3c88bdc3",
        3499: "f66814af59f83abee010",
        3903: "8454498c4301ebe5b12c",
        4535: "120ef11d3786830c5571",
        4601: "5b02011896f2f5b3d01b",
        5436: "6eca1d3524672f585c5a",
        6272: "96937946e427750774e4",
        6845: "c97ddaebddd7c4860a46",
        8647: "413bbe35d505feb2a7be",
        8931: "b376f75fb05d616b789c",
        9348: "396fc23edcce6bef2d51",
        9349: "f4977652404f75e5d337",
        9427: "6748952a23ee5e4faca1",
      }[a]),
    (d.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (a) {
        if ("object" == typeof window) return window;
      }
    })()),
    (d.o = (a, e) => Object.prototype.hasOwnProperty.call(a, e)),
    (c = {}),
    (o = "community:"),
    (d.l = (a, e, n, i) => {
      if (c[a]) c[a].push(e);
      else {
        var s, t;
        if (void 0 !== n)
          for (
            var l = document.getElementsByTagName("script"), r = 0;
            r < l.length;
            r++
          ) {
            var f = l[r];
            if (
              f.getAttribute("src") == a ||
              f.getAttribute("data-webpack") == o + n
            ) {
              s = f;
              break;
            }
          }
        s ||
          ((t = !0),
          ((s = document.createElement("script")).charset = "utf-8"),
          (s.timeout = 120),
          d.nc && s.setAttribute("nonce", d.nc),
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
    (d.r = (a) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (d.nmd = (a) => ((a.paths = []), a.children || (a.children = []), a)),
    (() => {
      var a;
      d.g.importScripts && (a = d.g.location + "");
      var e = d.g.document;
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
        (d.p = a + "../../../");
    })(),
    (i = (a) =>
      new Promise((e, n) => {
        var c = d.miniCssF(a),
          o = d.p + c;
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
                    l = new Error(
                      "Loading CSS chunk " + a + " failed.\n(" + t + ")"
                    );
                  (l.code = "CSS_CHUNK_LOAD_FAILED"),
                    (l.type = s),
                    (l.request = t),
                    o.parentNode.removeChild(o),
                    c(l);
                }
              }),
            (o.href = e),
            document.head.appendChild(o);
        })(a, o, e, n);
      })),
    (s = { 6700: 0 }),
    (d.f.miniCss = (a, e) => {
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
      (d.f.j = (e, n) => {
        var c = d.o(a, e) ? a[e] : void 0;
        if (0 !== c)
          if (c) n.push(c[2]);
          else if (/^(4601|6700)$/.test(e)) a[e] = 0;
          else {
            var o = new Promise((n, o) => (c = a[e] = [n, o]));
            n.push((c[2] = o));
            var i = d.p + d.u(e),
              s = new Error();
            d.l(
              i,
              (n) => {
                if (d.o(a, e) && (0 !== (c = a[e]) && (a[e] = void 0), c)) {
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
        (d.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var c,
            o,
            [i, s, t] = n,
            l = 0;
          if (i.some((e) => 0 !== a[e])) {
            for (c in s) d.o(s, c) && (d.m[c] = s[c]);
            if (t) var r = t(d);
          }
          for (e && e(n); l < i.length; l++)
            (o = i[l]), d.o(a, o) && a[o] && a[o][0](), (a[o] = 0);
          return d.O(r);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();

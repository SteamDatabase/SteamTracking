/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8096870";
(() => {
  "use strict";
  var a,
    e,
    n,
    o,
    c,
    i,
    s,
    t = {},
    l = {};
  function f(a) {
    var e = l[a];
    if (void 0 !== e) return e.exports;
    var n = (l[a] = { id: a, loaded: !1, exports: {} });
    return t[a].call(n.exports, n, n.exports, f), (n.loaded = !0), n.exports;
  }
  (f.m = t),
    (a = []),
    (f.O = (e, n, o, c) => {
      if (!n) {
        var i = 1 / 0;
        for (d = 0; d < a.length; d++) {
          for (var [n, o, c] = a[d], s = !0, t = 0; t < n.length; t++)
            (!1 & c || i >= c) && Object.keys(f.O).every((a) => f.O[a](n[t]))
              ? n.splice(t--, 1)
              : ((s = !1), c < i && (i = c));
          if (s) {
            a.splice(d--, 1);
            var l = o();
            void 0 !== l && (e = l);
          }
        }
        return e;
      }
      c = c || 0;
      for (var d = a.length; d > 0 && a[d - 1][2] > c; d--) a[d] = a[d - 1];
      a[d] = [n, o, c];
    }),
    (f.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return f.d(e, { a: e }), e;
    }),
    (n = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (f.t = function (a, o) {
      if ((1 & o && (a = this(a)), 8 & o)) return a;
      if ("object" == typeof a && a) {
        if (4 & o && a.__esModule) return a;
        if (16 & o && "function" == typeof a.then) return a;
      }
      var c = Object.create(null);
      f.r(c);
      var i = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var s = 2 & o && a; "object" == typeof s && !~e.indexOf(s); s = n(s))
        Object.getOwnPropertyNames(s).forEach((e) => (i[e] = () => a[e]));
      return (i.default = () => a), f.d(c, i), c;
    }),
    (f.d = (a, e) => {
      for (var n in e)
        f.o(e, n) &&
          !f.o(a, n) &&
          Object.defineProperty(a, n, { enumerable: !0, get: e[n] });
    }),
    (f.f = {}),
    (f.e = (a) =>
      Promise.all(Object.keys(f.f).reduce((e, n) => (f.f[n](a, e), e), []))),
    (f.u = (a) =>
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
        27: "1344aa4bbff745432bb1",
        113: "6cd46a1654ba67a84b0b",
        131: "fe4745e4383acd7d2e1c",
        238: "95d564736deb0443ccbe",
        301: "0dd45f009707c40dfa39",
        312: "387262bad5b8aaf3a76f",
        400: "6e869e838e5e14b34a99",
        483: "e439fa5133b101be247c",
        508: "71290c1791da9ae6aaee",
        543: "92596e2ccfaa7bc641ca",
        617: "da7a6990e6608c5102f9",
        755: "4d4ce8f87db2972406fc",
        867: "4714f6280064a9c5c47a",
        908: "fbbab534056444ed0899",
        960: "64b316d460408524b18d",
        961: "b85bcae9a592e38a54a5",
        1133: "bf06d8572f48f941f092",
        1195: "a8baf510d37fde065bee",
        1261: "90077d3fa934f1166b2f",
        1311: "d2752ef5455de7dfcf1c",
        1496: "456f9aef77d62bb80442",
        1546: "c0deefd8c12becfec077",
        1579: "ed90c223e0c7802da5e0",
        1649: "e40310be951515fefeeb",
        1909: "5a82ffc9269c4e2a913c",
        1953: "9a7c1edc845e372cc020",
        2136: "cc5c6e584acf93d07798",
        2138: "88b7b5e0c17468866109",
        2235: "bf05678d0d6c76c42b84",
        2329: "580cb569c2aa0f29227b",
        2351: "0c827c50f505069be66f",
        2373: "00e91189db07db2938d8",
        2449: "7d6d75537be214156c85",
        2468: "2d5e27cefd495455ecb3",
        2530: "5bcee0077fcccf3aeecd",
        2557: "69e6850a456b80132b9a",
        2723: "f93b75b2df1fd725cf33",
        2738: "3216504297c96df59dd9",
        2745: "d73daedb49974fa3546a",
        2805: "49bb66cbe6c67716d81c",
        2822: "e2d3402032d38472b16e",
        2832: "397ffa33540a0fcc9062",
        3007: "abac6d3ade686d483d9f",
        3038: "5721adb062bdb8e434d4",
        3068: "1c8a0f5b246d12091c3c",
        3202: "839415dd5538aa9fff41",
        3298: "d2e0d2dd5c27505bc9e9",
        3352: "1edbdfcfcb6d7d608a22",
        3499: "a103dc66d28bf4c34ccb",
        3520: "25b76164485ba56b0b8b",
        3591: "dda6f830ef55043e0ff3",
        3602: "e01b9e73beaf0fdbc938",
        3742: "f81347ed7773a3277376",
        3903: "92bc3fde3f880c59eb4d",
        3973: "8124f60010ba4eb629e2",
        4040: "f67f311de50b77f325e7",
        4097: "0e780fda6e293e1e5e36",
        4183: "a9bc54b369bcd8497b8c",
        4293: "47086b899b3d7b50835b",
        4358: "1fa57011b01736c2aa5f",
        4445: "4ee780f80bdf3d9c0e17",
        4469: "79cc44f7c3bb8007fa1f",
        4487: "47739895a763432ff5fb",
        4513: "a3352898faa0bdfc58d6",
        4535: "693d89a79df82579cc10",
        4601: "d614ec7b3a1b81aeaf5b",
        4729: "d420f117b4d5b2a138de",
        4819: "00e75c317fee97addd7d",
        4979: "539b3fc2d8cc1416b424",
        5012: "ebfe147a520d2dd9b0d9",
        5119: "66d920f8746f56b5cce4",
        5277: "82fc0151a85a580bada6",
        5279: "a277b4ee6fec6d9f6905",
        5436: "22cd85d66d88572337ef",
        5439: "71354ff8192165945f48",
        5493: "2e687745d84ac32bd24a",
        5494: "c7f3f3916dab71f85860",
        5503: "3c915bff2ef68f552aa7",
        5757: "3c001ff27acc1231862e",
        6091: "06361afe700f435b121b",
        6148: "1ca0a59911794d934b2b",
        6272: "bee4a6b81b21a06623dd",
        6378: "f32ee16901175b5852d0",
        6403: "d688d1cd4e8253683b32",
        6415: "33108eb82407f565814e",
        6457: "12be2f634dc6db62acc8",
        6588: "a5373e3d0e90ce9f0ed8",
        6656: "0620cc0db36da685d691",
        6658: "c17f503c4b160224e518",
        6715: "b546f627254ec8397a36",
        6844: "c92011aad393d0673d81",
        6845: "0e4b2b43ae5cb71ccf9b",
        6932: "d53756bb6a97321755d6",
        6962: "8e068e9c1632e2a5be00",
        7629: "23255e52a343ba088018",
        7660: "c857c832784b61220840",
        7769: "98017a165a3c167091ac",
        7781: "a118919ff8715d2036db",
        7832: "e8085db9d08270eac33d",
        7901: "2c1b822f58700d3406a4",
        7924: "02257f9a3371c8e7315b",
        7942: "ac7def959a434c9b08da",
        7948: "4701980ccbf99473c130",
        7971: "6a51dc5e61f0f589f50a",
        8085: "8aa929cd6065d521a978",
        8120: "a7ed78872ed872170d95",
        8274: "bbe1c785b09293e169cd",
        8282: "30ade136b7183dcad234",
        8291: "e56102cb914d6d1f98b0",
        8427: "0606cfdd43a6dbf84089",
        8433: "034f966adf0756c691e6",
        8525: "9f83791933356d488093",
        8592: "73e2418820154a3f886c",
        8647: "2d5f223e49f8efca8057",
        8691: "5f8c6308e15a113f3e35",
        8805: "7e7cebe54b432edcc531",
        8931: "be8e5d5a498b7d8bc7f4",
        9167: "81e3145cf3688ea25dbb",
        9233: "e9c2c506980bb1ed0540",
        9316: "bbc41c1dbdcf8b3dab55",
        9348: "e4ecf0a6c1400674bd38",
        9349: "4e9837e3d3518519d6dd",
        9389: "152010686104e8901643",
        9427: "6a850471db20f3e5a5a3",
        9513: "124e58afc893e3873513",
        9547: "cdbab237c93afc6ba91a",
        9561: "8a942f1802689aeef7f1",
        9665: "19eb8d24b44abf7ebcd9",
        9828: "0916ec6dfd053fb2ad59",
        9854: "3fbec03432f595bd6e2f",
        9888: "47b33592c4e63e466525",
        9949: "d415b3feff7bb81242fc",
        9951: "6d3f8debc313482f7f70",
        9991: "36cd46ba70258f7aa38e",
      }[a]),
    (f.miniCssF = (a) =>
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
        400: "6000c03cf6f39fe69cc1",
        508: "b01ad4ecfc82427ed562",
        908: "9844515e07566417856e",
        1909: "2fca35912c0825f76d76",
        2136: "8c359fa0555fa2bd2c5d",
        2329: "a969564f4cdabf0c473e",
        2449: "5f84fb007eba38212c79",
        2530: "110cc55c61f202628d1b",
        3068: "03599c23580d532ecfea",
        3352: "f3838685918d3c88bdc3",
        3499: "f66814af59f83abee010",
        3520: "b885ebfc19cd8361f0f5",
        3903: "fd3f85ef3102d792b6b0",
        4535: "120ef11d3786830c5571",
        4601: "7051786867362f304840",
        5436: "671dce66cf8a63ffd3ac",
        6272: "421aa9f56f19d4e59fdb",
        6845: "c9d51c8f2ad7a6c297a0",
        8647: "2aa199fdf547121332be",
        8931: "fc8d07e16102206d0ea0",
        9348: "dc7b7625b90a01869e1d",
        9349: "f4977652404f75e5d337",
        9427: "c6891b4c206c0e0b8832",
      }[a]),
    (f.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (a) {
        if ("object" == typeof window) return window;
      }
    })()),
    (f.o = (a, e) => Object.prototype.hasOwnProperty.call(a, e)),
    (o = {}),
    (c = "community:"),
    (f.l = (a, e, n, i) => {
      if (o[a]) o[a].push(e);
      else {
        var s, t;
        if (void 0 !== n)
          for (
            var l = document.getElementsByTagName("script"), d = 0;
            d < l.length;
            d++
          ) {
            var r = l[d];
            if (
              r.getAttribute("src") == a ||
              r.getAttribute("data-webpack") == c + n
            ) {
              s = r;
              break;
            }
          }
        s ||
          ((t = !0),
          ((s = document.createElement("script")).charset = "utf-8"),
          (s.timeout = 120),
          f.nc && s.setAttribute("nonce", f.nc),
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
          t && document.head.appendChild(s);
      }
    }),
    (f.r = (a) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (f.nmd = (a) => ((a.paths = []), a.children || (a.children = []), a)),
    (() => {
      var a;
      f.g.importScripts && (a = f.g.location + "");
      var e = f.g.document;
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
        (f.p = a + "../../../");
    })(),
    (i = (a) =>
      new Promise((e, n) => {
        var o = f.miniCssF(a),
          c = f.p + o;
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
                    t = (i && i.target && i.target.href) || e,
                    l = new Error(
                      "Loading CSS chunk " + a + " failed.\n(" + t + ")"
                    );
                  (l.code = "CSS_CHUNK_LOAD_FAILED"),
                    (l.type = s),
                    (l.request = t),
                    c.parentNode.removeChild(c),
                    o(l);
                }
              }),
            (c.href = e),
            document.head.appendChild(c);
        })(a, c, e, n);
      })),
    (s = { 6700: 0 }),
    (f.f.miniCss = (a, e) => {
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
      (f.f.j = (e, n) => {
        var o = f.o(a, e) ? a[e] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (/^(4601|6700)$/.test(e)) a[e] = 0;
          else {
            var c = new Promise((n, c) => (o = a[e] = [n, c]));
            n.push((o[2] = c));
            var i = f.p + f.u(e),
              s = new Error();
            f.l(
              i,
              (n) => {
                if (f.o(a, e) && (0 !== (o = a[e]) && (a[e] = void 0), o)) {
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
        (f.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var o,
            c,
            [i, s, t] = n,
            l = 0;
          if (i.some((e) => 0 !== a[e])) {
            for (o in s) f.o(s, o) && (f.m[o] = s[o]);
            if (t) var d = t(f);
          }
          for (e && e(n); l < i.length; l++)
            (c = i[l]), f.o(a, c) && a[c] && a[c][0](), (a[c] = 0);
          return f.O(d);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();

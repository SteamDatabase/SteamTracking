/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8191292";
(() => {
  "use strict";
  var a,
    e,
    n,
    o,
    i,
    c,
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
    (l.O = (e, n, o, i) => {
      if (!n) {
        var c = 1 / 0;
        for (f = 0; f < a.length; f++) {
          for (var [n, o, i] = a[f], s = !0, t = 0; t < n.length; t++)
            (!1 & i || c >= i) && Object.keys(l.O).every((a) => l.O[a](n[t]))
              ? n.splice(t--, 1)
              : ((s = !1), i < c && (c = i));
          if (s) {
            a.splice(f--, 1);
            var d = o();
            void 0 !== d && (e = d);
          }
        }
        return e;
      }
      i = i || 0;
      for (var f = a.length; f > 0 && a[f - 1][2] > i; f--) a[f] = a[f - 1];
      a[f] = [n, o, i];
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
      var i = Object.create(null);
      l.r(i);
      var c = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var s = 2 & o && a; "object" == typeof s && !~e.indexOf(s); s = n(s))
        Object.getOwnPropertyNames(s).forEach((e) => (c[e] = () => a[e]));
      return (c.default = () => a), l.d(i, c), i;
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
        27: "96ebf5a6589bb2ecbf6d",
        113: "b916bc1c40ca94db5198",
        131: "888528d7622168f7705d",
        238: "95d564736deb0443ccbe",
        301: "623bfc6517ba0834a223",
        312: "41e23c2e506a08af2081",
        400: "61721af61ee88a6a913c",
        483: "e439fa5133b101be247c",
        508: "5c05efe83f0955ee86ed",
        543: "92596e2ccfaa7bc641ca",
        617: "f0a260724027171aad48",
        755: "74d66e656f50a96659b7",
        867: "4714f6280064a9c5c47a",
        908: "f87568df22d95593bb43",
        960: "64b316d460408524b18d",
        961: "b85bcae9a592e38a54a5",
        1133: "28a817d7ed6afb9b7c6a",
        1195: "146f2676cb528e8a16c7",
        1261: "f4aef07276a2634bf4c8",
        1311: "06374da452432e14a22e",
        1496: "456f9aef77d62bb80442",
        1546: "c0deefd8c12becfec077",
        1579: "f3b982be19c3ad9fb1ee",
        1649: "362c3fddd91e18132790",
        1909: "71fc7214e730622df625",
        1953: "10e50110928a5327b8d7",
        2136: "99e46f14a50b4e55c780",
        2138: "61e461e23b28d33251b5",
        2235: "bf05678d0d6c76c42b84",
        2329: "580cb569c2aa0f29227b",
        2351: "3480143c0b32336e9753",
        2373: "00e91189db07db2938d8",
        2449: "cf3919e0f4e6d3fe16b0",
        2468: "2d5e27cefd495455ecb3",
        2530: "ea534c4a709c262bcfda",
        2557: "78ef30a9d17909e1f1a0",
        2723: "f93b75b2df1fd725cf33",
        2738: "b87e2b653d8a1e29a692",
        2745: "d73daedb49974fa3546a",
        2805: "21dd50ccb8e57020855b",
        2822: "fb5c42c6b0c574b026dd",
        2832: "cbdaeb0c2e1613ca3a98",
        3007: "abac6d3ade686d483d9f",
        3038: "de6ae68c3c6b29fb6117",
        3068: "35c00e695b03b6494597",
        3202: "839415dd5538aa9fff41",
        3298: "e47797bb77e4527e413c",
        3352: "039a52981cc82551b011",
        3499: "998bda7a1c7bfbdb89e9",
        3520: "d85762503af1ff94c8cc",
        3591: "46ca71d1afafa4c857f2",
        3602: "76abe62f87950991fa35",
        3742: "f81347ed7773a3277376",
        3903: "12f01aef1aad079f88dc",
        3973: "96e51b8fef7c8ed042fd",
        4040: "378216532da09e7986af",
        4097: "28348b1f1c2933a6e706",
        4183: "cb2d82c05bb44d28adb2",
        4293: "47086b899b3d7b50835b",
        4358: "1fa57011b01736c2aa5f",
        4445: "95ff44b7ca6c54af9c4f",
        4469: "2df29fe3dc8425296d92",
        4487: "5724c15575f75403bb39",
        4513: "2b03a8274beba0e1ed5d",
        4535: "693d89a79df82579cc10",
        4601: "d614ec7b3a1b81aeaf5b",
        4729: "26141a45cf9a3a557cd1",
        4819: "00e75c317fee97addd7d",
        4979: "539b3fc2d8cc1416b424",
        5012: "c7a8b038473c255c4831",
        5119: "66d920f8746f56b5cce4",
        5277: "9bffb9d950960deb86c1",
        5279: "55be2e496ac85411d5e4",
        5436: "066d9fd26980013e3fad",
        5439: "71354ff8192165945f48",
        5493: "37cb4c4cb3cb49104f15",
        5494: "c7f3f3916dab71f85860",
        5503: "1550d7e6d96474191bf3",
        5757: "6b1267a09ad81c547077",
        6091: "f530c74164f7e04bd051",
        6148: "1ca0a59911794d934b2b",
        6272: "df998a97c3be48f0165d",
        6378: "fc7e652545bb9f9365fb",
        6403: "1d6a41bdf238f6f92a3e",
        6415: "8ae84c603b6549b5164e",
        6457: "5a08fcc90078e298ba33",
        6588: "a5373e3d0e90ce9f0ed8",
        6656: "0620cc0db36da685d691",
        6658: "c17f503c4b160224e518",
        6715: "b546f627254ec8397a36",
        6844: "840ff0f752f7050f784c",
        6845: "ead842c19573de03aaba",
        6932: "d53756bb6a97321755d6",
        6962: "b095388b2743e419b856",
        7629: "11711c1c567d88a0ac21",
        7660: "8d03b583f88d7c47bbca",
        7769: "0dc7bd73341a654c29ab",
        7781: "c0c5ffbcb7f6a1b75ebe",
        7832: "e8085db9d08270eac33d",
        7901: "edd5338eea7b5f39ddad",
        7924: "02257f9a3371c8e7315b",
        7942: "ac7def959a434c9b08da",
        7948: "4701980ccbf99473c130",
        7971: "6a51dc5e61f0f589f50a",
        8085: "fd8e07def98bf6dcf36b",
        8120: "a7ed78872ed872170d95",
        8274: "cdfce1816b6df2023550",
        8282: "9bc9114e62ddc8a8bcbd",
        8291: "12d3525fe601f55a44f5",
        8427: "a1d95f759671ab45e939",
        8433: "51769211261099e6d1ba",
        8525: "bebb6cbbfd225dd98352",
        8592: "35ec90eefb6fa47656bd",
        8647: "468486ab8340bae64bad",
        8691: "5f8c6308e15a113f3e35",
        8805: "eeec002b5bdc20754c76",
        8931: "7ac16a57dff35ca598df",
        9167: "81e3145cf3688ea25dbb",
        9233: "5b27eedd9d9a0bdf4dc7",
        9316: "bbc41c1dbdcf8b3dab55",
        9348: "0e6ea0b5402395280858",
        9349: "f089a84f1ca32b088528",
        9389: "152010686104e8901643",
        9427: "e5e376fcd758bc64f6c0",
        9513: "124e58afc893e3873513",
        9547: "39b91529fc47607d0a0c",
        9561: "8a942f1802689aeef7f1",
        9665: "cfeed12508fae1d568ca",
        9828: "0916ec6dfd053fb2ad59",
        9854: "dab0223029f23fb8fa77",
        9888: "47b33592c4e63e466525",
        9949: "b1c47ddcad6acab48ca2",
        9951: "67c55f531344f0205fdb",
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
        400: "86fd7a44bbbd21df02dc",
        508: "506606ed29624b511bbd",
        908: "b86ed4b55fea07007e9e",
        1909: "2fca35912c0825f76d76",
        2136: "8c359fa0555fa2bd2c5d",
        2329: "a969564f4cdabf0c473e",
        2449: "0d5e907913e9b6c322c3",
        2530: "fbe4933f4e331dc0e58a",
        3068: "b6e4e0dc417d633111af",
        3352: "f3838685918d3c88bdc3",
        3499: "f66814af59f83abee010",
        3520: "f07f4d7f2de709629026",
        3903: "fd3f85ef3102d792b6b0",
        4535: "120ef11d3786830c5571",
        4601: "7051786867362f304840",
        5436: "671dce66cf8a63ffd3ac",
        6272: "421aa9f56f19d4e59fdb",
        6845: "c5991fafb114f811dc73",
        8647: "2aa199fdf547121332be",
        8931: "dcb6c7cedb6b2fabe3ce",
        9348: "26d803a4798502279180",
        9349: "f4977652404f75e5d337",
        9427: "150d99c79eb8c3ddebdf",
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
    (i = "community:"),
    (l.l = (a, e, n, c) => {
      if (o[a]) o[a].push(e);
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
              r.getAttribute("data-webpack") == i + n
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
          s.setAttribute("data-webpack", i + n),
          (s.src = a)),
          (o[a] = [e]);
        var b = (e, n) => {
            (s.onerror = s.onload = null), clearTimeout(h);
            var i = o[a];
            if (
              (delete o[a],
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
          "Automatic publicPath is not supported in this browser",
        );
      (a = a
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (l.p = a + "../../../");
    })(),
    (c = (a) =>
      new Promise((e, n) => {
        var o = l.miniCssF(a),
          i = l.p + o;
        if (
          ((a, e) => {
            for (
              var n = document.getElementsByTagName("link"), o = 0;
              o < n.length;
              o++
            ) {
              var i =
                (s = n[o]).getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (i === a || i === e)) return s;
            }
            var c = document.getElementsByTagName("style");
            for (o = 0; o < c.length; o++) {
              var s;
              if ((i = (s = c[o]).getAttribute("data-href")) === a || i === e)
                return s;
            }
          })(o, i)
        )
          return e();
        ((a, e, n, o) => {
          var i = document.createElement("link");
          (i.rel = "stylesheet"),
            (i.type = "text/css"),
            (i.onerror = i.onload =
              (c) => {
                if (((i.onerror = i.onload = null), "load" === c.type)) n();
                else {
                  var s = c && ("load" === c.type ? "missing" : c.type),
                    t = (c && c.target && c.target.href) || e,
                    d = new Error(
                      "Loading CSS chunk " + a + " failed.\n(" + t + ")",
                    );
                  (d.code = "CSS_CHUNK_LOAD_FAILED"),
                    (d.type = s),
                    (d.request = t),
                    i.parentNode.removeChild(i),
                    o(d);
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
            (s[a] = c(a).then(
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
        var o = l.o(a, e) ? a[e] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (/^(4601|6700)$/.test(e)) a[e] = 0;
          else {
            var i = new Promise((n, i) => (o = a[e] = [n, i]));
            n.push((o[2] = i));
            var c = l.p + l.u(e),
              s = new Error();
            l.l(
              c,
              (n) => {
                if (l.o(a, e) && (0 !== (o = a[e]) && (a[e] = void 0), o)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    c = n && n.target && n.target.src;
                  (s.message =
                    "Loading chunk " + e + " failed.\n(" + i + ": " + c + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = i),
                    (s.request = c),
                    o[1](s);
                }
              },
              "chunk-" + e,
              e,
            );
          }
      }),
        (l.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var o,
            i,
            [c, s, t] = n,
            d = 0;
          if (c.some((e) => 0 !== a[e])) {
            for (o in s) l.o(s, o) && (l.m[o] = s[o]);
            if (t) var f = t(l);
          }
          for (e && e(n); d < c.length; d++)
            (i = c[d]), l.o(a, i) && a[i] && a[i][0](), (a[i] = 0);
          return l.O(f);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();

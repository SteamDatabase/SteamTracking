/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "6747640";
!(function (t) {
  function a(a) {
    for (
      var n, e, o = a[0], i = a[1], c = a[2], l = 0, s = [];
      l < o.length;
      l++
    )
      (e = o[l]),
        Object.prototype.hasOwnProperty.call(b, e) && b[e] && s.push(b[e][0]),
        (b[e] = 0);
    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
    for (j && j(a); s.length; ) s.shift()();
    return r.push.apply(r, c || []), d();
  }
  function d() {
    for (var a, n = 0; n < r.length; n++) {
      for (var e = r[n], o = !0, i = 1; i < e.length; i++) {
        var c = e[i];
        0 !== b[c] && (o = !1);
      }
      o && (r.splice(n--, 1), (a = h((h.s = e[0]))));
    }
    return a;
  }
  var e = {},
    f = { 62: 0 },
    b = { 62: 0 },
    r = [];
  function h(a) {
    if (e[a]) return e[a].exports;
    var n = (e[a] = { i: a, l: !1, exports: {} });
    return t[a].call(n.exports, n, n.exports, h), (n.l = !0), n.exports;
  }
  (h.e = function (r) {
    var a = [];
    f[r]
      ? a.push(f[r])
      : 0 !== f[r] &&
        { 0: 1 }[r] &&
        a.push(
          (f[r] = new Promise(function (a, e) {
            for (
              var n =
                  "css/applications/help/" +
                  ({
                    0: "broadcast",
                    2: "localization/main_brazilian-json",
                    3: "localization/main_bulgarian-json",
                    4: "localization/main_czech-json",
                    5: "localization/main_danish-json",
                    6: "localization/main_dutch-json",
                    7: "localization/main_english-json",
                    8: "localization/main_finnish-json",
                    9: "localization/main_french-json",
                    10: "localization/main_german-json",
                    11: "localization/main_greek-json",
                    12: "localization/main_hungarian-json",
                    13: "localization/main_italian-json",
                    14: "localization/main_japanese-json",
                    15: "localization/main_koreana-json",
                    16: "localization/main_latam-json",
                    17: "localization/main_norwegian-json",
                    18: "localization/main_polish-json",
                    19: "localization/main_portuguese-json",
                    20: "localization/main_romanian-json",
                    21: "localization/main_russian-json",
                    22: "localization/main_sc_schinese-json",
                    23: "localization/main_schinese-json",
                    24: "localization/main_spanish-json",
                    25: "localization/main_swedish-json",
                    26: "localization/main_tchinese-json",
                    27: "localization/main_thai-json",
                    28: "localization/main_turkish-json",
                    29: "localization/main_ukrainian-json",
                    30: "localization/main_vietnamese-json",
                    31: "localization/shared_arabic-json",
                    32: "localization/shared_brazilian-json",
                    33: "localization/shared_bulgarian-json",
                    34: "localization/shared_czech-json",
                    35: "localization/shared_danish-json",
                    36: "localization/shared_dutch-json",
                    37: "localization/shared_english-json",
                    38: "localization/shared_finnish-json",
                    39: "localization/shared_french-json",
                    40: "localization/shared_german-json",
                    41: "localization/shared_greek-json",
                    42: "localization/shared_hungarian-json",
                    43: "localization/shared_italian-json",
                    44: "localization/shared_japanese-json",
                    45: "localization/shared_koreana-json",
                    46: "localization/shared_latam-json",
                    47: "localization/shared_norwegian-json",
                    48: "localization/shared_polish-json",
                    49: "localization/shared_portuguese-json",
                    50: "localization/shared_romanian-json",
                    51: "localization/shared_russian-json",
                    52: "localization/shared_sc_schinese-json",
                    53: "localization/shared_schinese-json",
                    54: "localization/shared_spanish-json",
                    55: "localization/shared_swedish-json",
                    56: "localization/shared_tchinese-json",
                    57: "localization/shared_thai-json",
                    58: "localization/shared_turkish-json",
                    59: "localization/shared_ukrainian-json",
                    60: "localization/shared_vietnamese-json",
                  }[r] || r) +
                  ".css?contenthash=" +
                  {
                    0: "d9c8cda4de7dcf4e9137",
                    2: "31d6cfe0d16ae931b73c",
                    3: "31d6cfe0d16ae931b73c",
                    4: "31d6cfe0d16ae931b73c",
                    5: "31d6cfe0d16ae931b73c",
                    6: "31d6cfe0d16ae931b73c",
                    7: "31d6cfe0d16ae931b73c",
                    8: "31d6cfe0d16ae931b73c",
                    9: "31d6cfe0d16ae931b73c",
                    10: "31d6cfe0d16ae931b73c",
                    11: "31d6cfe0d16ae931b73c",
                    12: "31d6cfe0d16ae931b73c",
                    13: "31d6cfe0d16ae931b73c",
                    14: "31d6cfe0d16ae931b73c",
                    15: "31d6cfe0d16ae931b73c",
                    16: "31d6cfe0d16ae931b73c",
                    17: "31d6cfe0d16ae931b73c",
                    18: "31d6cfe0d16ae931b73c",
                    19: "31d6cfe0d16ae931b73c",
                    20: "31d6cfe0d16ae931b73c",
                    21: "31d6cfe0d16ae931b73c",
                    22: "31d6cfe0d16ae931b73c",
                    23: "31d6cfe0d16ae931b73c",
                    24: "31d6cfe0d16ae931b73c",
                    25: "31d6cfe0d16ae931b73c",
                    26: "31d6cfe0d16ae931b73c",
                    27: "31d6cfe0d16ae931b73c",
                    28: "31d6cfe0d16ae931b73c",
                    29: "31d6cfe0d16ae931b73c",
                    30: "31d6cfe0d16ae931b73c",
                    31: "31d6cfe0d16ae931b73c",
                    32: "31d6cfe0d16ae931b73c",
                    33: "31d6cfe0d16ae931b73c",
                    34: "31d6cfe0d16ae931b73c",
                    35: "31d6cfe0d16ae931b73c",
                    36: "31d6cfe0d16ae931b73c",
                    37: "31d6cfe0d16ae931b73c",
                    38: "31d6cfe0d16ae931b73c",
                    39: "31d6cfe0d16ae931b73c",
                    40: "31d6cfe0d16ae931b73c",
                    41: "31d6cfe0d16ae931b73c",
                    42: "31d6cfe0d16ae931b73c",
                    43: "31d6cfe0d16ae931b73c",
                    44: "31d6cfe0d16ae931b73c",
                    45: "31d6cfe0d16ae931b73c",
                    46: "31d6cfe0d16ae931b73c",
                    47: "31d6cfe0d16ae931b73c",
                    48: "31d6cfe0d16ae931b73c",
                    49: "31d6cfe0d16ae931b73c",
                    50: "31d6cfe0d16ae931b73c",
                    51: "31d6cfe0d16ae931b73c",
                    52: "31d6cfe0d16ae931b73c",
                    53: "31d6cfe0d16ae931b73c",
                    54: "31d6cfe0d16ae931b73c",
                    55: "31d6cfe0d16ae931b73c",
                    56: "31d6cfe0d16ae931b73c",
                    57: "31d6cfe0d16ae931b73c",
                    58: "31d6cfe0d16ae931b73c",
                    59: "31d6cfe0d16ae931b73c",
                    60: "31d6cfe0d16ae931b73c",
                  }[r],
                o = h.p + n,
                i = document.getElementsByTagName("link"),
                c = 0;
              c < i.length;
              c++
            ) {
              var l =
                (s = i[c]).getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (l === n || l === o)) return a();
            }
            for (
              var s, t = document.getElementsByTagName("style"), c = 0;
              c < t.length;
              c++
            )
              if ((l = (s = t[c]).getAttribute("data-href")) === n || l === o)
                return a();
            var d = document.createElement("link");
            (d.rel = "stylesheet"),
              (d.type = "text/css"),
              (d.onload = a),
              (d.onerror = function (a) {
                var n = (a && a.target && a.target.src) || o,
                  a = new Error(
                    "Loading CSS chunk " + r + " failed.\n(" + n + ")"
                  );
                (a.code = "CSS_CHUNK_LOAD_FAILED"),
                  (a.request = n),
                  delete f[r],
                  d.parentNode.removeChild(d),
                  e(a);
              }),
              (d.href = o),
              document.getElementsByTagName("head")[0].appendChild(d);
          }).then(function () {
            f[r] = 0;
          }))
        );
    var o,
      i,
      n,
      c,
      e,
      l = b[r];
    return (
      0 !== l &&
        (l
          ? a.push(l[2])
          : ((e = new Promise(function (a, n) {
              l = b[r] = [a, n];
            })),
            a.push((l[2] = e)),
            ((o = document.createElement("script")).charset = "utf-8"),
            (o.timeout = 120),
            h.nc && o.setAttribute("nonce", h.nc),
            (o.src =
              h.p +
              "javascript/applications/help/" +
              ({
                0: "broadcast",
                2: "localization/main_brazilian-json",
                3: "localization/main_bulgarian-json",
                4: "localization/main_czech-json",
                5: "localization/main_danish-json",
                6: "localization/main_dutch-json",
                7: "localization/main_english-json",
                8: "localization/main_finnish-json",
                9: "localization/main_french-json",
                10: "localization/main_german-json",
                11: "localization/main_greek-json",
                12: "localization/main_hungarian-json",
                13: "localization/main_italian-json",
                14: "localization/main_japanese-json",
                15: "localization/main_koreana-json",
                16: "localization/main_latam-json",
                17: "localization/main_norwegian-json",
                18: "localization/main_polish-json",
                19: "localization/main_portuguese-json",
                20: "localization/main_romanian-json",
                21: "localization/main_russian-json",
                22: "localization/main_sc_schinese-json",
                23: "localization/main_schinese-json",
                24: "localization/main_spanish-json",
                25: "localization/main_swedish-json",
                26: "localization/main_tchinese-json",
                27: "localization/main_thai-json",
                28: "localization/main_turkish-json",
                29: "localization/main_ukrainian-json",
                30: "localization/main_vietnamese-json",
                31: "localization/shared_arabic-json",
                32: "localization/shared_brazilian-json",
                33: "localization/shared_bulgarian-json",
                34: "localization/shared_czech-json",
                35: "localization/shared_danish-json",
                36: "localization/shared_dutch-json",
                37: "localization/shared_english-json",
                38: "localization/shared_finnish-json",
                39: "localization/shared_french-json",
                40: "localization/shared_german-json",
                41: "localization/shared_greek-json",
                42: "localization/shared_hungarian-json",
                43: "localization/shared_italian-json",
                44: "localization/shared_japanese-json",
                45: "localization/shared_koreana-json",
                46: "localization/shared_latam-json",
                47: "localization/shared_norwegian-json",
                48: "localization/shared_polish-json",
                49: "localization/shared_portuguese-json",
                50: "localization/shared_romanian-json",
                51: "localization/shared_russian-json",
                52: "localization/shared_sc_schinese-json",
                53: "localization/shared_schinese-json",
                54: "localization/shared_spanish-json",
                55: "localization/shared_swedish-json",
                56: "localization/shared_tchinese-json",
                57: "localization/shared_thai-json",
                58: "localization/shared_turkish-json",
                59: "localization/shared_ukrainian-json",
                60: "localization/shared_vietnamese-json",
              }[(e = r)] || e) +
              ".js?contenthash=" +
              {
                0: "6c43e54f492a1d4cf116",
                2: "b248be581439055f4ed5",
                3: "1c21a5a0744d883ca2aa",
                4: "de4e048738b9b98a9528",
                5: "f9eb44478972d2375757",
                6: "175ff1f1908ab4dcf1c4",
                7: "245499c9ddd16667fcf9",
                8: "10952d2163758313cd53",
                9: "7c4524fa392d17d0548f",
                10: "575623c520347c6a630f",
                11: "26a4ac2c7ede2f4b19e4",
                12: "a0118c8c5b77a68569d8",
                13: "00723789b9950d8a4658",
                14: "203d9118eea23ea3c568",
                15: "a69fb0a1016504121a4f",
                16: "12794123688c04e2813a",
                17: "bd6f8a43f387a530047f",
                18: "75640b98ac9a21dce321",
                19: "bc2c184c566b2c6baca3",
                20: "f79b121563bb41a3bdb2",
                21: "5b62ffbcb0a1d502d945",
                22: "29a1a49b25dea8892737",
                23: "42b345424d180ed00680",
                24: "8c3bf576c9604d3648b5",
                25: "08f27ce326be5eba0509",
                26: "0ca6c5f5c95b2e2a37ec",
                27: "676bbb79b0b7b3e67979",
                28: "ba10143ce7e4acaa3915",
                29: "6dcf71e7a511b60cd4c4",
                30: "470cb4e4fd658e6eeff3",
                31: "334080c9e200a7f3ffab",
                32: "b37a567a9524d041bbdc",
                33: "07ba4591e46a62d5c130",
                34: "2eb77192674de194f29e",
                35: "41b1b4117942ed248d27",
                36: "e45ec488c1a23f0480c4",
                37: "aeaa7c3b03b05f6cbb56",
                38: "427385d0eb2325e947d5",
                39: "c8f166bc8f420bbcc28e",
                40: "cb91fabe346609ed64c3",
                41: "7a8c8337b47ebebedd44",
                42: "1d7cef88282259b605f2",
                43: "fb6327ee86455365283d",
                44: "30f28624de6e00b999cf",
                45: "1135fdc0ed5c257b07f1",
                46: "e03217c5a6f02600be3f",
                47: "e3ef301bc6144f5035d7",
                48: "e075da3bba0deb636ef4",
                49: "940da6e2481870373424",
                50: "a93f23cd09e707695d15",
                51: "8e14a076b2129fbd2f1c",
                52: "621ba62623e931903a57",
                53: "997c447af15b27b42f34",
                54: "a3399cd97dafd487d3bb",
                55: "c1d2cb659ff528f79148",
                56: "4095cbf98a91b29029a2",
                57: "99a1999c56a2eacf8639",
                58: "1f301a4a6bcf7dac681a",
                59: "3d0ae15f13a4262e2823",
                60: "917484f52e9479779a0a",
              }[e]),
            (i = new Error()),
            (n = function (a) {
              (o.onerror = o.onload = null), clearTimeout(c);
              var n,
                e = b[r];
              0 !== e &&
                (e &&
                  ((n = a && ("load" === a.type ? "missing" : a.type)),
                  (a = a && a.target && a.target.src),
                  (i.message =
                    "Loading chunk " + r + " failed.\n(" + n + ": " + a + ")"),
                  (i.name = "ChunkLoadError"),
                  (i.type = n),
                  (i.request = a),
                  e[1](i)),
                (b[r] = void 0));
            }),
            (c = setTimeout(function () {
              n({ type: "timeout", target: o });
            }, 12e4)),
            (o.onerror = o.onload = n),
            document.head.appendChild(o))),
      Promise.all(a)
    );
  }),
    (h.m = t),
    (h.c = e),
    (h.d = function (a, n, e) {
      h.o(a, n) || Object.defineProperty(a, n, { enumerable: !0, get: e });
    }),
    (h.r = function (a) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (h.t = function (n, a) {
      if ((1 & a && (n = h(n)), 8 & a)) return n;
      if (4 & a && "object" == typeof n && n && n.__esModule) return n;
      var e = Object.create(null);
      if (
        (h.r(e),
        Object.defineProperty(e, "default", { enumerable: !0, value: n }),
        2 & a && "string" != typeof n)
      )
        for (var o in n)
          h.d(
            e,
            o,
            function (a) {
              return n[a];
            }.bind(null, o)
          );
      return e;
    }),
    (h.n = function (a) {
      var n =
        a && a.__esModule
          ? function () {
              return a.default;
            }
          : function () {
              return a;
            };
      return h.d(n, "a", n), n;
    }),
    (h.o = function (a, n) {
      return Object.prototype.hasOwnProperty.call(a, n);
    }),
    (h.p = ""),
    (h.oe = function (a) {
      throw (console.error(a), a);
    });
  var n = (o = window.webpackJsonp = window.webpackJsonp || []).push.bind(o);
  o.push = a;
  for (var o = o.slice(), i = 0; i < o.length; i++) a(o[i]);
  var j = n;
  d();
})([]);

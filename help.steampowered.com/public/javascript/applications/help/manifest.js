/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7126163";
!(function (d) {
  function a(a) {
    for (
      var e, n, o = a[0], i = a[1], c = a[2], l = 0, s = [];
      l < o.length;
      l++
    )
      (n = o[l]),
        Object.prototype.hasOwnProperty.call(b, n) && b[n] && s.push(b[n][0]),
        (b[n] = 0);
    for (e in i) Object.prototype.hasOwnProperty.call(i, e) && (d[e] = i[e]);
    for (j && j(a); s.length; ) s.shift()();
    return r.push.apply(r, c || []), t();
  }
  function t() {
    for (var a, e = 0; e < r.length; e++) {
      for (var n = r[e], o = !0, i = 1; i < n.length; i++) {
        var c = n[i];
        0 !== b[c] && (o = !1);
      }
      o && (r.splice(e--, 1), (a = h((h.s = n[0]))));
    }
    return a;
  }
  var n = {},
    f = { 62: 0 },
    b = { 62: 0 },
    r = [];
  function h(a) {
    if (n[a]) return n[a].exports;
    var e = (n[a] = { i: a, l: !1, exports: {} });
    return d[a].call(e.exports, e, e.exports, h), (e.l = !0), e.exports;
  }
  (h.e = function (r) {
    var a = [];
    f[r]
      ? a.push(f[r])
      : 0 !== f[r] &&
        { 0: 1 }[r] &&
        a.push(
          (f[r] = new Promise(function (a, n) {
            for (
              var e =
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
                    0: "0933fa999db9ad3f8f7e",
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
                o = h.p + e,
                i = document.getElementsByTagName("link"),
                c = 0;
              c < i.length;
              c++
            ) {
              var l =
                (s = i[c]).getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (l === e || l === o)) return a();
            }
            for (
              var s, d = document.getElementsByTagName("style"), c = 0;
              c < d.length;
              c++
            )
              if ((l = (s = d[c]).getAttribute("data-href")) === e || l === o)
                return a();
            var t = document.createElement("link");
            (t.rel = "stylesheet"),
              (t.type = "text/css"),
              (t.onload = a),
              (t.onerror = function (a) {
                var e = (a && a.target && a.target.src) || o,
                  a = new Error(
                    "Loading CSS chunk " + r + " failed.\n(" + e + ")"
                  );
                (a.code = "CSS_CHUNK_LOAD_FAILED"),
                  (a.request = e),
                  delete f[r],
                  t.parentNode.removeChild(t),
                  n(a);
              }),
              (t.href = o),
              document.getElementsByTagName("head")[0].appendChild(t);
          }).then(function () {
            f[r] = 0;
          }))
        );
    var o,
      i,
      e,
      c,
      n,
      l = b[r];
    return (
      0 !== l &&
        (l
          ? a.push(l[2])
          : ((n = new Promise(function (a, e) {
              l = b[r] = [a, e];
            })),
            a.push((l[2] = n)),
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
              }[(n = r)] || n) +
              ".js?contenthash=" +
              {
                0: "34f6cead17d5edab2cfe",
                2: "2231a24a7ddea3fa52ab",
                3: "3f34c0a89bdab2220f9e",
                4: "d4c5543356915893672e",
                5: "376e069d1775288b9123",
                6: "ef5e31ffba90c1279c39",
                7: "44516b22fd586e517545",
                8: "f653c66d258bcda9e046",
                9: "6647a3ac74ff10943f7d",
                10: "d0f6bfd8bf559ddb8116",
                11: "8d105235ecaee0e50e0b",
                12: "5976fc7a4bfd14a32999",
                13: "3710b8ade3d4e5480873",
                14: "a779fb722f128f498e90",
                15: "6c4897916a8f9a73467b",
                16: "886c29627d88a58c06ae",
                17: "f259a96f9ec19ef58a22",
                18: "16b21257d505d6f2aca5",
                19: "f1bd7f503c8bc5198684",
                20: "e2ce0918f6d7e35e557f",
                21: "c0e38d1a3ffcb6a5f6ff",
                22: "4eb21a7603c55791420e",
                23: "7dce868756b10068ca95",
                24: "95b5544c6cb801e2c5a4",
                25: "9970b3bf55327fe20477",
                26: "1a19da0de3395d6d1671",
                27: "4c41623cda9ab163e4db",
                28: "8ddc2492694261838def",
                29: "d2ae063bffbdfebab696",
                30: "b291ebad9e72104e4b66",
                31: "5ecdae187ad2372276ba",
                32: "5abaf5c6f537f12beee0",
                33: "36b31aa44b0f7f9d67ef",
                34: "89a406b476201951b10d",
                35: "2cbf53e8a7a8162775a3",
                36: "a0bae987afae92dae823",
                37: "b9d2b47b494c7beaf7fe",
                38: "6f506c53ff15d4bbb20e",
                39: "eddafd0d40f5177c82c7",
                40: "1de30f2c09bd2dd23904",
                41: "510ffa012c0af1093edc",
                42: "7491a3098c157f2361e5",
                43: "6e7e794d2b54eb1cd988",
                44: "e80d6545db2e7bdb7ac1",
                45: "6fec699b245fc65b8d97",
                46: "979394dbe87bb98626b9",
                47: "2e935b48b10fb3dc0f5a",
                48: "15f11854b27b7fb661e9",
                49: "0f82358707f7807c34c9",
                50: "cac092a3c4498d688585",
                51: "2a40be3e37945e8d19ad",
                52: "134651dca88319e39d03",
                53: "56cc399d1b54b65a2849",
                54: "17a09a79411f113efcfc",
                55: "40a8b0e81b4121cfa9a1",
                56: "3dc150295107fc2986b9",
                57: "ee884f8b92b13fff4f66",
                58: "9a1f73d37f2b5bbdd71b",
                59: "5fd8042868565bf80b16",
                60: "8fa54c0849bad333283d",
              }[n]),
            (i = new Error()),
            (e = function (a) {
              (o.onerror = o.onload = null), clearTimeout(c);
              var e,
                n = b[r];
              0 !== n &&
                (n &&
                  ((e = a && ("load" === a.type ? "missing" : a.type)),
                  (a = a && a.target && a.target.src),
                  (i.message =
                    "Loading chunk " + r + " failed.\n(" + e + ": " + a + ")"),
                  (i.name = "ChunkLoadError"),
                  (i.type = e),
                  (i.request = a),
                  n[1](i)),
                (b[r] = void 0));
            }),
            (c = setTimeout(function () {
              e({ type: "timeout", target: o });
            }, 12e4)),
            (o.onerror = o.onload = e),
            document.head.appendChild(o))),
      Promise.all(a)
    );
  }),
    (h.m = d),
    (h.c = n),
    (h.d = function (a, e, n) {
      h.o(a, e) || Object.defineProperty(a, e, { enumerable: !0, get: n });
    }),
    (h.r = function (a) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (h.t = function (e, a) {
      if ((1 & a && (e = h(e)), 8 & a)) return e;
      if (4 & a && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (h.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & a && "string" != typeof e)
      )
        for (var o in e)
          h.d(
            n,
            o,
            function (a) {
              return e[a];
            }.bind(null, o)
          );
      return n;
    }),
    (h.n = function (a) {
      var e =
        a && a.__esModule
          ? function () {
              return a.default;
            }
          : function () {
              return a;
            };
      return h.d(e, "a", e), e;
    }),
    (h.o = function (a, e) {
      return Object.prototype.hasOwnProperty.call(a, e);
    }),
    (h.p = ""),
    (h.oe = function (a) {
      throw (console.error(a), a);
    });
  var e = (o = window.webpackJsonp = window.webpackJsonp || []).push.bind(o);
  o.push = a;
  for (var o = o.slice(), i = 0; i < o.length; i++) a(o[i]);
  var j = e;
  t();
})([]);

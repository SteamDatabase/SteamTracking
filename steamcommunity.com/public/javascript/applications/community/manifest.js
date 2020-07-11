/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "5984471";
!(function(l) {
  function a(a) {
    for (
      var e, n, i = a[0], o = a[1], c = a[2], d = 0, s = [];
      d < i.length;
      d++
    )
      (n = i[d]), b[n] && s.push(b[n][0]), (b[n] = 0);
    for (e in o) Object.prototype.hasOwnProperty.call(o, e) && (l[e] = o[e]);
    for (z && z(a); s.length; ) s.shift()();
    return r.push.apply(r, c || []), t();
  }
  function t() {
    for (var a, e = 0; e < r.length; e++) {
      for (var n = r[e], i = !0, o = 1; o < n.length; o++) {
        var c = n[o];
        0 !== b[c] && (i = !1);
      }
      i && (r.splice(e--, 1), (a = j((j.s = n[0]))));
    }
    return a;
  }
  var n = {},
    f = { 6: 0 },
    b = { 6: 0 },
    r = [];
  function j(a) {
    if (n[a]) return n[a].exports;
    var e = (n[a] = { i: a, l: !1, exports: {} });
    return l[a].call(e.exports, e, e.exports, j), (e.l = !0), e.exports;
  }
  (j.e = function(r) {
    var a = [];
    f[r]
      ? a.push(f[r])
      : 0 !== f[r] &&
        { 3: 1, 7: 1, 8: 1, 9: 1, 94: 1, 97: 1 }[r] &&
        a.push(
          (f[r] = new Promise(function(a, i) {
            for (
              var e =
                  "css/applications/community/" +
                  ({
                    1: "events~profile~ugcrewards~userreviewrewards",
                    2: "localization/shared_english-json",
                    3: "events~profile",
                    4: "localization/main_english-json",
                    5: "localization/managefriends_english-json",
                    7: "ugcrewards~userreviewrewards",
                    8: "broadcast",
                    9: "events",
                    10: "localization/main_brazilian-json",
                    11: "localization/main_bulgarian-json",
                    12: "localization/main_czech-json",
                    13: "localization/main_danish-json",
                    14: "localization/main_dutch-json",
                    15: "localization/main_finnish-json",
                    16: "localization/main_french-json",
                    17: "localization/main_german-json",
                    18: "localization/main_greek-json",
                    19: "localization/main_hungarian-json",
                    20: "localization/main_italian-json",
                    21: "localization/main_japanese-json",
                    22: "localization/main_koreana-json",
                    23: "localization/main_latam-json",
                    24: "localization/main_norwegian-json",
                    25: "localization/main_polish-json",
                    26: "localization/main_portuguese-json",
                    27: "localization/main_romanian-json",
                    28: "localization/main_russian-json",
                    29: "localization/main_schinese-json",
                    30: "localization/main_spanish-json",
                    31: "localization/main_swedish-json",
                    32: "localization/main_tchinese-json",
                    33: "localization/main_thai-json",
                    34: "localization/main_turkish-json",
                    35: "localization/main_ukrainian-json",
                    36: "localization/main_vietnamese-json",
                    37: "localization/managefriends_brazilian-json",
                    38: "localization/managefriends_bulgarian-json",
                    39: "localization/managefriends_czech-json",
                    40: "localization/managefriends_danish-json",
                    41: "localization/managefriends_dutch-json",
                    42: "localization/managefriends_finnish-json",
                    43: "localization/managefriends_french-json",
                    44: "localization/managefriends_german-json",
                    45: "localization/managefriends_greek-json",
                    46: "localization/managefriends_hungarian-json",
                    47: "localization/managefriends_italian-json",
                    48: "localization/managefriends_japanese-json",
                    49: "localization/managefriends_koreana-json",
                    50: "localization/managefriends_latam-json",
                    51: "localization/managefriends_norwegian-json",
                    52: "localization/managefriends_polish-json",
                    53: "localization/managefriends_portuguese-json",
                    54: "localization/managefriends_romanian-json",
                    55: "localization/managefriends_russian-json",
                    56: "localization/managefriends_schinese-json",
                    57: "localization/managefriends_spanish-json",
                    58: "localization/managefriends_swedish-json",
                    59: "localization/managefriends_tchinese-json",
                    60: "localization/managefriends_thai-json",
                    61: "localization/managefriends_turkish-json",
                    62: "localization/managefriends_ukrainian-json",
                    63: "localization/managefriends_vietnamese-json",
                    64: "localization/shared_arabic-json",
                    65: "localization/shared_brazilian-json",
                    66: "localization/shared_bulgarian-json",
                    67: "localization/shared_czech-json",
                    68: "localization/shared_danish-json",
                    69: "localization/shared_dutch-json",
                    70: "localization/shared_finnish-json",
                    71: "localization/shared_french-json",
                    72: "localization/shared_german-json",
                    73: "localization/shared_greek-json",
                    74: "localization/shared_hungarian-json",
                    75: "localization/shared_italian-json",
                    76: "localization/shared_japanese-json",
                    77: "localization/shared_koreana-json",
                    78: "localization/shared_latam-json",
                    79: "localization/shared_norwegian-json",
                    80: "localization/shared_polish-json",
                    81: "localization/shared_portuguese-json",
                    82: "localization/shared_romanian-json",
                    83: "localization/shared_russian-json",
                    84: "localization/shared_schinese-json",
                    85: "localization/shared_spanish-json",
                    86: "localization/shared_swedish-json",
                    87: "localization/shared_tchinese-json",
                    88: "localization/shared_thai-json",
                    89: "localization/shared_turkish-json",
                    90: "localization/shared_ukrainian-json",
                    91: "localization/shared_vietnamese-json",
                    94: "profile",
                    95: "ugcrewards",
                    96: "userreviewrewards",
                    97: "vendors~events"
                  }[r] || r) +
                  ".css?contenthash=" +
                  {
                    1: "31d6cfe0d16ae931b73c",
                    2: "31d6cfe0d16ae931b73c",
                    3: "9f640cd7ec8d33627fec",
                    4: "31d6cfe0d16ae931b73c",
                    5: "31d6cfe0d16ae931b73c",
                    7: "9e59b3bbc059c5405066",
                    8: "dfe0aedc10147c3f5a48",
                    9: "b9fc48d5ce98db1b9ead",
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
                    61: "31d6cfe0d16ae931b73c",
                    62: "31d6cfe0d16ae931b73c",
                    63: "31d6cfe0d16ae931b73c",
                    64: "31d6cfe0d16ae931b73c",
                    65: "31d6cfe0d16ae931b73c",
                    66: "31d6cfe0d16ae931b73c",
                    67: "31d6cfe0d16ae931b73c",
                    68: "31d6cfe0d16ae931b73c",
                    69: "31d6cfe0d16ae931b73c",
                    70: "31d6cfe0d16ae931b73c",
                    71: "31d6cfe0d16ae931b73c",
                    72: "31d6cfe0d16ae931b73c",
                    73: "31d6cfe0d16ae931b73c",
                    74: "31d6cfe0d16ae931b73c",
                    75: "31d6cfe0d16ae931b73c",
                    76: "31d6cfe0d16ae931b73c",
                    77: "31d6cfe0d16ae931b73c",
                    78: "31d6cfe0d16ae931b73c",
                    79: "31d6cfe0d16ae931b73c",
                    80: "31d6cfe0d16ae931b73c",
                    81: "31d6cfe0d16ae931b73c",
                    82: "31d6cfe0d16ae931b73c",
                    83: "31d6cfe0d16ae931b73c",
                    84: "31d6cfe0d16ae931b73c",
                    85: "31d6cfe0d16ae931b73c",
                    86: "31d6cfe0d16ae931b73c",
                    87: "31d6cfe0d16ae931b73c",
                    88: "31d6cfe0d16ae931b73c",
                    89: "31d6cfe0d16ae931b73c",
                    90: "31d6cfe0d16ae931b73c",
                    91: "31d6cfe0d16ae931b73c",
                    94: "976a192296394d4ad879",
                    95: "31d6cfe0d16ae931b73c",
                    96: "31d6cfe0d16ae931b73c",
                    97: "8447d69ae3584c50ebee"
                  }[r],
                o = j.p + e,
                n = document.getElementsByTagName("link"),
                c = 0;
              c < n.length;
              c++
            ) {
              var d =
                (s = n[c]).getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (d === e || d === o)) return a();
            }
            for (
              var s, l = document.getElementsByTagName("style"), c = 0;
              c < l.length;
              c++
            ) {
              if ((d = (s = l[c]).getAttribute("data-href")) === e || d === o)
                return a();
            }
            var t = document.createElement("link");
            (t.rel = "stylesheet"),
              (t.type = "text/css"),
              (t.onload = a),
              (t.onerror = function(a) {
                var e = (a && a.target && a.target.src) || o,
                  n = new Error(
                    "Loading CSS chunk " + r + " failed.\n(" + e + ")"
                  );
                (n.code = "CSS_CHUNK_LOAD_FAILED"),
                  (n.request = e),
                  delete f[r],
                  t.parentNode.removeChild(t),
                  i(n);
              }),
              (t.href = o),
              document.getElementsByTagName("head")[0].appendChild(t);
          }).then(function() {
            f[r] = 0;
          }))
        );
    var e,
      c,
      n,
      d,
      i,
      o = b[r];
    return (
      0 !== o &&
        (o
          ? a.push(o[2])
          : ((e = new Promise(function(a, e) {
              o = b[r] = [a, e];
            })),
            a.push((o[2] = e)),
            ((c = document.createElement("script")).charset = "utf-8"),
            (c.timeout = 120),
            j.nc && c.setAttribute("nonce", j.nc),
            (c.src =
              j.p +
              "javascript/applications/community/" +
              ({
                1: "events~profile~ugcrewards~userreviewrewards",
                2: "localization/shared_english-json",
                3: "events~profile",
                4: "localization/main_english-json",
                5: "localization/managefriends_english-json",
                7: "ugcrewards~userreviewrewards",
                8: "broadcast",
                9: "events",
                10: "localization/main_brazilian-json",
                11: "localization/main_bulgarian-json",
                12: "localization/main_czech-json",
                13: "localization/main_danish-json",
                14: "localization/main_dutch-json",
                15: "localization/main_finnish-json",
                16: "localization/main_french-json",
                17: "localization/main_german-json",
                18: "localization/main_greek-json",
                19: "localization/main_hungarian-json",
                20: "localization/main_italian-json",
                21: "localization/main_japanese-json",
                22: "localization/main_koreana-json",
                23: "localization/main_latam-json",
                24: "localization/main_norwegian-json",
                25: "localization/main_polish-json",
                26: "localization/main_portuguese-json",
                27: "localization/main_romanian-json",
                28: "localization/main_russian-json",
                29: "localization/main_schinese-json",
                30: "localization/main_spanish-json",
                31: "localization/main_swedish-json",
                32: "localization/main_tchinese-json",
                33: "localization/main_thai-json",
                34: "localization/main_turkish-json",
                35: "localization/main_ukrainian-json",
                36: "localization/main_vietnamese-json",
                37: "localization/managefriends_brazilian-json",
                38: "localization/managefriends_bulgarian-json",
                39: "localization/managefriends_czech-json",
                40: "localization/managefriends_danish-json",
                41: "localization/managefriends_dutch-json",
                42: "localization/managefriends_finnish-json",
                43: "localization/managefriends_french-json",
                44: "localization/managefriends_german-json",
                45: "localization/managefriends_greek-json",
                46: "localization/managefriends_hungarian-json",
                47: "localization/managefriends_italian-json",
                48: "localization/managefriends_japanese-json",
                49: "localization/managefriends_koreana-json",
                50: "localization/managefriends_latam-json",
                51: "localization/managefriends_norwegian-json",
                52: "localization/managefriends_polish-json",
                53: "localization/managefriends_portuguese-json",
                54: "localization/managefriends_romanian-json",
                55: "localization/managefriends_russian-json",
                56: "localization/managefriends_schinese-json",
                57: "localization/managefriends_spanish-json",
                58: "localization/managefriends_swedish-json",
                59: "localization/managefriends_tchinese-json",
                60: "localization/managefriends_thai-json",
                61: "localization/managefriends_turkish-json",
                62: "localization/managefriends_ukrainian-json",
                63: "localization/managefriends_vietnamese-json",
                64: "localization/shared_arabic-json",
                65: "localization/shared_brazilian-json",
                66: "localization/shared_bulgarian-json",
                67: "localization/shared_czech-json",
                68: "localization/shared_danish-json",
                69: "localization/shared_dutch-json",
                70: "localization/shared_finnish-json",
                71: "localization/shared_french-json",
                72: "localization/shared_german-json",
                73: "localization/shared_greek-json",
                74: "localization/shared_hungarian-json",
                75: "localization/shared_italian-json",
                76: "localization/shared_japanese-json",
                77: "localization/shared_koreana-json",
                78: "localization/shared_latam-json",
                79: "localization/shared_norwegian-json",
                80: "localization/shared_polish-json",
                81: "localization/shared_portuguese-json",
                82: "localization/shared_romanian-json",
                83: "localization/shared_russian-json",
                84: "localization/shared_schinese-json",
                85: "localization/shared_spanish-json",
                86: "localization/shared_swedish-json",
                87: "localization/shared_tchinese-json",
                88: "localization/shared_thai-json",
                89: "localization/shared_turkish-json",
                90: "localization/shared_ukrainian-json",
                91: "localization/shared_vietnamese-json",
                94: "profile",
                95: "ugcrewards",
                96: "userreviewrewards",
                97: "vendors~events"
              }[(i = r)] || i) +
              ".js?contenthash=" +
              {
                1: "92cb27627edbf2a7bcc7",
                2: "3f9eed72197fb1ddb5b7",
                3: "a823357746ef8badaaa2",
                4: "28d49b9348ec3e8df12c",
                5: "0ef495c9e7e0fd050e1c",
                7: "bc921a00edd0091a85dc",
                8: "34463fdb464872d3ca3e",
                9: "52f14a470b15630e1184",
                10: "36caac52926bd2b035bd",
                11: "3f161aa500fc1dab4c16",
                12: "863dc4ed689c4c4242c4",
                13: "9ed8b2281df155723164",
                14: "d749dced03f21c9342a2",
                15: "1c97edfbdecc746ee884",
                16: "a703eba55d72e5585a41",
                17: "8d7837f6994d5e75dc44",
                18: "3f78c6d2c7a4a754c396",
                19: "13dfb99bcddab4426503",
                20: "1082ea34cde38eadf2f4",
                21: "e3fe6cb9abd22029ae9c",
                22: "e0ac00169bd0178eae73",
                23: "5562d4b76db0732cb997",
                24: "db14dd13ca4522f58524",
                25: "7dd03f751dd93aca7dd4",
                26: "932af146b63b46c61c73",
                27: "49afe4e729e76dfed529",
                28: "ea17dec61b333d926d62",
                29: "cea9ee7baf04071faca1",
                30: "f0ab317470daeee9635a",
                31: "7bffe5c9a49a47920ecf",
                32: "180ee7409963cf62a986",
                33: "60fecad6443b9915cc26",
                34: "d82db859247d716b28db",
                35: "5f4c290de70aa0eeed55",
                36: "5d40314900b5939450ca",
                37: "1b5218dc37ce25924031",
                38: "aadb2532aeee2ce239b4",
                39: "097d635920ec6b2c94b9",
                40: "a33c3b04559eb3f88065",
                41: "cb7588a2e140d745b74e",
                42: "47d8fa556f9aeb9a244c",
                43: "6f4e82181c30c9f6e5b0",
                44: "bb935c2fb3736ab6dd32",
                45: "c3c352085273ff9ac998",
                46: "39f40f27882511d07c02",
                47: "631c1f8cf4d7ae1c174d",
                48: "eb42e94f7f2f9cb980bb",
                49: "b844ca898500ca5e390c",
                50: "aa1ee3880f2dccac6c49",
                51: "cbac758c2aca7921ecaf",
                52: "dffc262e710bf28fe3fb",
                53: "ab84704085b5dbcd20e9",
                54: "1e37d9aa316d07c68d1b",
                55: "849681ca8f11a5c8287c",
                56: "791e15482a2eedb8df99",
                57: "6cefb3966c039d85d47b",
                58: "205ad4efe6c9761f2c75",
                59: "970e0e62c75ff262ec28",
                60: "9d4af327b6777056ceb9",
                61: "aefa474c3ecbbfca9385",
                62: "312d92d0e5b34348de4c",
                63: "1f06f391542329ff6b1c",
                64: "9adb915952a2b5bebc17",
                65: "875966810acbcb71f1f8",
                66: "8b2b056c2f95599e059c",
                67: "d54cb78b6cbe413f3f40",
                68: "05600872c728e9b8e801",
                69: "9f0087d60833ac1fad0b",
                70: "b8055db2851c2094a5cd",
                71: "28dd9966588d28bb5c65",
                72: "4d7680a727c03fe67028",
                73: "dfe65e98fac824e1f537",
                74: "df19afbe5038496a9eeb",
                75: "c0cf32b045ec894f6bca",
                76: "e5aebe3f4425b914511e",
                77: "59eb0024a39414504696",
                78: "b5b918d9f70f8cd1006c",
                79: "7e56b0b33edef3f80391",
                80: "5ab8b892005b1be76344",
                81: "dc3e26cdd1534e7d9bfd",
                82: "e380306c3828522d90e2",
                83: "d9544b95eede042d5a45",
                84: "df67ec3c2c43c42e97a3",
                85: "14b8e33e6bbe31fe9038",
                86: "a48b7657c18fd5bc5fcc",
                87: "ef450a1173456b8a614d",
                88: "e513e868a903f7d689e1",
                89: "f7b5994b0e22c0405e1f",
                90: "44d7fbcbdf4dedfcff10",
                91: "f4efd6cd48a470db935d",
                94: "3bedee403b66337459e1",
                95: "d02a3fc309f191b02e44",
                96: "a5c1a3efcb22a733f9d0",
                97: "0fd0a87bcf5f968b61f5"
              }[i]),
            (n = function(a) {
              (c.onerror = c.onload = null), clearTimeout(d);
              var e,
                n,
                i,
                o = b[r];
              0 !== o &&
                (o &&
                  ((e = a && ("load" === a.type ? "missing" : a.type)),
                  (n = a && a.target && a.target.src),
                  ((i = new Error(
                    "Loading chunk " + r + " failed.\n(" + e + ": " + n + ")"
                  )).type = e),
                  (i.request = n),
                  o[1](i)),
                (b[r] = void 0));
            }),
            (d = setTimeout(function() {
              n({ type: "timeout", target: c });
            }, 12e4)),
            (c.onerror = c.onload = n),
            document.head.appendChild(c))),
      Promise.all(a)
    );
  }),
    (j.m = l),
    (j.c = n),
    (j.d = function(a, e, n) {
      j.o(a, e) || Object.defineProperty(a, e, { enumerable: !0, get: n });
    }),
    (j.r = function(a) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (j.t = function(e, a) {
      if ((1 & a && (e = j(e)), 8 & a)) return e;
      if (4 & a && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (j.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & a && "string" != typeof e)
      )
        for (var i in e)
          j.d(
            n,
            i,
            function(a) {
              return e[a];
            }.bind(null, i)
          );
      return n;
    }),
    (j.n = function(a) {
      var e =
        a && a.__esModule
          ? function() {
              return a.default;
            }
          : function() {
              return a;
            };
      return j.d(e, "a", e), e;
    }),
    (j.o = function(a, e) {
      return Object.prototype.hasOwnProperty.call(a, e);
    }),
    (j.p = ""),
    (j.oe = function(a) {
      throw (console.error(a), a);
    });
  var e = (window.webpackJsonp = window.webpackJsonp || []),
    i = e.push.bind(e);
  (e.push = a), (e = e.slice());
  for (var o = 0; o < e.length; o++) a(e[o]);
  var z = i;
  t();
})([]);

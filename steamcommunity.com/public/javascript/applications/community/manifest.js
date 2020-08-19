/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "6049077";
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
    f = { 5: 0 },
    b = { 5: 0 },
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
        { 2: 1, 6: 1, 7: 1, 8: 1, 9: 1, 94: 1, 97: 1 }[r] &&
        a.push(
          (f[r] = new Promise(function(a, i) {
            for (
              var e =
                  "css/applications/community/" +
                  ({
                    1: "localization/shared_english-json",
                    2: "events~profile",
                    3: "localization/main_english-json",
                    4: "localization/managefriends_english-json",
                    6: "ugcrewards~userreviewrewards",
                    7: "avatarcrop",
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
                    2: "40d80fb81dd672e9dd5e",
                    3: "31d6cfe0d16ae931b73c",
                    4: "31d6cfe0d16ae931b73c",
                    6: "9e59b3bbc059c5405066",
                    7: "809fe643725703fdacbf",
                    8: "6aef4bdfd24024f24a37",
                    9: "86956b08a03042010faf",
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
                    94: "98c85b43e3e21e0c9024",
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
                1: "localization/shared_english-json",
                2: "events~profile",
                3: "localization/main_english-json",
                4: "localization/managefriends_english-json",
                6: "ugcrewards~userreviewrewards",
                7: "avatarcrop",
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
                1: "e06f19a98b69fa9bd41c",
                2: "02503b8319fce076ce76",
                3: "7bc90aeef04fa62ba0ef",
                4: "5702a71d0ac6950b402d",
                6: "53790e6f8e4ccf70db29",
                7: "678053a2f8647da5bb8f",
                8: "61c287a0fce8ce489329",
                9: "eec9a606a68e1f172ca5",
                10: "9ce12b849ef625358dfb",
                11: "84f632dee93cf7d7fa07",
                12: "5e976320170574e5f13f",
                13: "73e36b3c67d6b153deef",
                14: "e1cbfc7bab2a77c20652",
                15: "97761cb2b1179ccd1c8e",
                16: "18393a80b830fdfe3359",
                17: "e1dc1de57b75a6ad26fd",
                18: "fb0956da599fe29556ee",
                19: "d11d4d4f5806316856a4",
                20: "f9af258115b04842784b",
                21: "35c50dfe7dcfea249002",
                22: "8e3f6ce2f39fabce73ec",
                23: "05d8c1c352ae4498dba6",
                24: "31e7d25099bdcbd46ec7",
                25: "36372d1410d2181af09a",
                26: "84f0253e49faa80cdc98",
                27: "b7e14c3c4e1b40ee8a09",
                28: "105dd025eed120341ddb",
                29: "197fb167e8dd07886929",
                30: "b5007b778d0bc0d51c51",
                31: "509e01524333d192f87f",
                32: "15e4f6b09e0cecbc8c3e",
                33: "0c0ceae21aa5f11e7a51",
                34: "cff3670a46ece30acb26",
                35: "dc81bf8d45407d9006a4",
                36: "ff5c3de0e6e14a4fdc2d",
                37: "1b5218dc37ce25924031",
                38: "aadb2532aeee2ce239b4",
                39: "097d635920ec6b2c94b9",
                40: "a33c3b04559eb3f88065",
                41: "cb7588a2e140d745b74e",
                42: "47d8fa556f9aeb9a244c",
                43: "99b7bcbf2281e743cbd2",
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
                65: "6136f1da747a4c211758",
                66: "7ec242f5396ad4c94933",
                67: "b08e7f07ca19d56a71c2",
                68: "10c7628920ab38e0e60a",
                69: "6510f4bb63d627d3a341",
                70: "a3de38de0ea60ade1fea",
                71: "57ee400135548151965a",
                72: "f7057a1ba458407a38bd",
                73: "4ca65b16e22a0adb5316",
                74: "1bfc68311467296e467b",
                75: "2d95cdbc253cf0cfcc0c",
                76: "c45d2ca199367b5c3083",
                77: "ee34a8725ba3c054cc4b",
                78: "09ad2d5cf880f4672426",
                79: "f27a93c2257f689991a1",
                80: "f3009ddb959f844ff983",
                81: "9237bdd073529d46c29d",
                82: "905804dbb6e5eba37316",
                83: "86fb22c5015fcc39c5ee",
                84: "c8cf70e49b73f7ebc682",
                85: "91a461568ab0141e5277",
                86: "b8e8216142d42173e51e",
                87: "39304217f4a74461da78",
                88: "3592d5e2cf800642fd86",
                89: "ed2d10224cc9ed23432a",
                90: "35d8feafe04a263d4881",
                91: "3fcdec54bbae035733eb",
                94: "d1fa93719cf0bb2db818",
                95: "0ced1b2fd9e2279f6072",
                96: "c16d2add3f0215dec2b5",
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

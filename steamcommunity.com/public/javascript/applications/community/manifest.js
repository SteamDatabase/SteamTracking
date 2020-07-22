/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "6007218";
!(function(l) {
  function a(a) {
    for (
      var n, e, i = a[0], o = a[1], c = a[2], d = 0, s = [];
      d < i.length;
      d++
    )
      (e = i[d]), b[e] && s.push(b[e][0]), (b[e] = 0);
    for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (l[n] = o[n]);
    for (z && z(a); s.length; ) s.shift()();
    return r.push.apply(r, c || []), t();
  }
  function t() {
    for (var a, n = 0; n < r.length; n++) {
      for (var e = r[n], i = !0, o = 1; o < e.length; o++) {
        var c = e[o];
        0 !== b[c] && (i = !1);
      }
      i && (r.splice(n--, 1), (a = j((j.s = e[0]))));
    }
    return a;
  }
  var e = {},
    f = { 5: 0 },
    b = { 5: 0 },
    r = [];
  function j(a) {
    if (e[a]) return e[a].exports;
    var n = (e[a] = { i: a, l: !1, exports: {} });
    return l[a].call(n.exports, n, n.exports, j), (n.l = !0), n.exports;
  }
  (j.e = function(r) {
    var a = [];
    f[r]
      ? a.push(f[r])
      : 0 !== f[r] &&
        { 2: 1, 6: 1, 7: 1, 8: 1, 93: 1, 96: 1 }[r] &&
        a.push(
          (f[r] = new Promise(function(a, i) {
            for (
              var n =
                  "css/applications/community/" +
                  ({
                    1: "localization/shared_english-json",
                    2: "events~profile",
                    3: "localization/main_english-json",
                    4: "localization/managefriends_english-json",
                    6: "ugcrewards~userreviewrewards",
                    7: "broadcast",
                    8: "events",
                    9: "localization/main_brazilian-json",
                    10: "localization/main_bulgarian-json",
                    11: "localization/main_czech-json",
                    12: "localization/main_danish-json",
                    13: "localization/main_dutch-json",
                    14: "localization/main_finnish-json",
                    15: "localization/main_french-json",
                    16: "localization/main_german-json",
                    17: "localization/main_greek-json",
                    18: "localization/main_hungarian-json",
                    19: "localization/main_italian-json",
                    20: "localization/main_japanese-json",
                    21: "localization/main_koreana-json",
                    22: "localization/main_latam-json",
                    23: "localization/main_norwegian-json",
                    24: "localization/main_polish-json",
                    25: "localization/main_portuguese-json",
                    26: "localization/main_romanian-json",
                    27: "localization/main_russian-json",
                    28: "localization/main_schinese-json",
                    29: "localization/main_spanish-json",
                    30: "localization/main_swedish-json",
                    31: "localization/main_tchinese-json",
                    32: "localization/main_thai-json",
                    33: "localization/main_turkish-json",
                    34: "localization/main_ukrainian-json",
                    35: "localization/main_vietnamese-json",
                    36: "localization/managefriends_brazilian-json",
                    37: "localization/managefriends_bulgarian-json",
                    38: "localization/managefriends_czech-json",
                    39: "localization/managefriends_danish-json",
                    40: "localization/managefriends_dutch-json",
                    41: "localization/managefriends_finnish-json",
                    42: "localization/managefriends_french-json",
                    43: "localization/managefriends_german-json",
                    44: "localization/managefriends_greek-json",
                    45: "localization/managefriends_hungarian-json",
                    46: "localization/managefriends_italian-json",
                    47: "localization/managefriends_japanese-json",
                    48: "localization/managefriends_koreana-json",
                    49: "localization/managefriends_latam-json",
                    50: "localization/managefriends_norwegian-json",
                    51: "localization/managefriends_polish-json",
                    52: "localization/managefriends_portuguese-json",
                    53: "localization/managefriends_romanian-json",
                    54: "localization/managefriends_russian-json",
                    55: "localization/managefriends_schinese-json",
                    56: "localization/managefriends_spanish-json",
                    57: "localization/managefriends_swedish-json",
                    58: "localization/managefriends_tchinese-json",
                    59: "localization/managefriends_thai-json",
                    60: "localization/managefriends_turkish-json",
                    61: "localization/managefriends_ukrainian-json",
                    62: "localization/managefriends_vietnamese-json",
                    63: "localization/shared_arabic-json",
                    64: "localization/shared_brazilian-json",
                    65: "localization/shared_bulgarian-json",
                    66: "localization/shared_czech-json",
                    67: "localization/shared_danish-json",
                    68: "localization/shared_dutch-json",
                    69: "localization/shared_finnish-json",
                    70: "localization/shared_french-json",
                    71: "localization/shared_german-json",
                    72: "localization/shared_greek-json",
                    73: "localization/shared_hungarian-json",
                    74: "localization/shared_italian-json",
                    75: "localization/shared_japanese-json",
                    76: "localization/shared_koreana-json",
                    77: "localization/shared_latam-json",
                    78: "localization/shared_norwegian-json",
                    79: "localization/shared_polish-json",
                    80: "localization/shared_portuguese-json",
                    81: "localization/shared_romanian-json",
                    82: "localization/shared_russian-json",
                    83: "localization/shared_schinese-json",
                    84: "localization/shared_spanish-json",
                    85: "localization/shared_swedish-json",
                    86: "localization/shared_tchinese-json",
                    87: "localization/shared_thai-json",
                    88: "localization/shared_turkish-json",
                    89: "localization/shared_ukrainian-json",
                    90: "localization/shared_vietnamese-json",
                    93: "profile",
                    94: "ugcrewards",
                    95: "userreviewrewards",
                    96: "vendors~events"
                  }[r] || r) +
                  ".css?contenthash=" +
                  {
                    1: "31d6cfe0d16ae931b73c",
                    2: "9f640cd7ec8d33627fec",
                    3: "31d6cfe0d16ae931b73c",
                    4: "31d6cfe0d16ae931b73c",
                    6: "9e59b3bbc059c5405066",
                    7: "dfe0aedc10147c3f5a48",
                    8: "6745901df85d8affffb1",
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
                    93: "976a192296394d4ad879",
                    94: "31d6cfe0d16ae931b73c",
                    95: "31d6cfe0d16ae931b73c",
                    96: "8447d69ae3584c50ebee"
                  }[r],
                o = j.p + n,
                e = document.getElementsByTagName("link"),
                c = 0;
              c < e.length;
              c++
            ) {
              var d =
                (s = e[c]).getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (d === n || d === o)) return a();
            }
            for (
              var s, l = document.getElementsByTagName("style"), c = 0;
              c < l.length;
              c++
            ) {
              if ((d = (s = l[c]).getAttribute("data-href")) === n || d === o)
                return a();
            }
            var t = document.createElement("link");
            (t.rel = "stylesheet"),
              (t.type = "text/css"),
              (t.onload = a),
              (t.onerror = function(a) {
                var n = (a && a.target && a.target.src) || o,
                  e = new Error(
                    "Loading CSS chunk " + r + " failed.\n(" + n + ")"
                  );
                (e.code = "CSS_CHUNK_LOAD_FAILED"),
                  (e.request = n),
                  delete f[r],
                  t.parentNode.removeChild(t),
                  i(e);
              }),
              (t.href = o),
              document.getElementsByTagName("head")[0].appendChild(t);
          }).then(function() {
            f[r] = 0;
          }))
        );
    var n,
      c,
      e,
      d,
      i,
      o = b[r];
    return (
      0 !== o &&
        (o
          ? a.push(o[2])
          : ((n = new Promise(function(a, n) {
              o = b[r] = [a, n];
            })),
            a.push((o[2] = n)),
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
                7: "broadcast",
                8: "events",
                9: "localization/main_brazilian-json",
                10: "localization/main_bulgarian-json",
                11: "localization/main_czech-json",
                12: "localization/main_danish-json",
                13: "localization/main_dutch-json",
                14: "localization/main_finnish-json",
                15: "localization/main_french-json",
                16: "localization/main_german-json",
                17: "localization/main_greek-json",
                18: "localization/main_hungarian-json",
                19: "localization/main_italian-json",
                20: "localization/main_japanese-json",
                21: "localization/main_koreana-json",
                22: "localization/main_latam-json",
                23: "localization/main_norwegian-json",
                24: "localization/main_polish-json",
                25: "localization/main_portuguese-json",
                26: "localization/main_romanian-json",
                27: "localization/main_russian-json",
                28: "localization/main_schinese-json",
                29: "localization/main_spanish-json",
                30: "localization/main_swedish-json",
                31: "localization/main_tchinese-json",
                32: "localization/main_thai-json",
                33: "localization/main_turkish-json",
                34: "localization/main_ukrainian-json",
                35: "localization/main_vietnamese-json",
                36: "localization/managefriends_brazilian-json",
                37: "localization/managefriends_bulgarian-json",
                38: "localization/managefriends_czech-json",
                39: "localization/managefriends_danish-json",
                40: "localization/managefriends_dutch-json",
                41: "localization/managefriends_finnish-json",
                42: "localization/managefriends_french-json",
                43: "localization/managefriends_german-json",
                44: "localization/managefriends_greek-json",
                45: "localization/managefriends_hungarian-json",
                46: "localization/managefriends_italian-json",
                47: "localization/managefriends_japanese-json",
                48: "localization/managefriends_koreana-json",
                49: "localization/managefriends_latam-json",
                50: "localization/managefriends_norwegian-json",
                51: "localization/managefriends_polish-json",
                52: "localization/managefriends_portuguese-json",
                53: "localization/managefriends_romanian-json",
                54: "localization/managefriends_russian-json",
                55: "localization/managefriends_schinese-json",
                56: "localization/managefriends_spanish-json",
                57: "localization/managefriends_swedish-json",
                58: "localization/managefriends_tchinese-json",
                59: "localization/managefriends_thai-json",
                60: "localization/managefriends_turkish-json",
                61: "localization/managefriends_ukrainian-json",
                62: "localization/managefriends_vietnamese-json",
                63: "localization/shared_arabic-json",
                64: "localization/shared_brazilian-json",
                65: "localization/shared_bulgarian-json",
                66: "localization/shared_czech-json",
                67: "localization/shared_danish-json",
                68: "localization/shared_dutch-json",
                69: "localization/shared_finnish-json",
                70: "localization/shared_french-json",
                71: "localization/shared_german-json",
                72: "localization/shared_greek-json",
                73: "localization/shared_hungarian-json",
                74: "localization/shared_italian-json",
                75: "localization/shared_japanese-json",
                76: "localization/shared_koreana-json",
                77: "localization/shared_latam-json",
                78: "localization/shared_norwegian-json",
                79: "localization/shared_polish-json",
                80: "localization/shared_portuguese-json",
                81: "localization/shared_romanian-json",
                82: "localization/shared_russian-json",
                83: "localization/shared_schinese-json",
                84: "localization/shared_spanish-json",
                85: "localization/shared_swedish-json",
                86: "localization/shared_tchinese-json",
                87: "localization/shared_thai-json",
                88: "localization/shared_turkish-json",
                89: "localization/shared_ukrainian-json",
                90: "localization/shared_vietnamese-json",
                93: "profile",
                94: "ugcrewards",
                95: "userreviewrewards",
                96: "vendors~events"
              }[(i = r)] || i) +
              ".js?contenthash=" +
              {
                1: "e3854ada57d9dae05f26",
                2: "90340a3555b7961b7b47",
                3: "3f89c0fa19e589a5bb92",
                4: "5702a71d0ac6950b402d",
                6: "fd16f6f8ca972e055d64",
                7: "1b6715bf16935aec77b5",
                8: "63ab370d72ea84d51b7d",
                9: "5895b156756398e35c13",
                10: "8707aa842e6d4a2a0ea3",
                11: "4e763d4db460810738e1",
                12: "3db9731dabab511a6f50",
                13: "06dcea7732ddac00beda",
                14: "156eb5d039b3f6ab8d04",
                15: "691f5581ad9ee33a68e5",
                16: "c2456cae26f0ab1d560f",
                17: "8bb23903b7b1204aa7d1",
                18: "a0a1f9dbdb1c3b9b06af",
                19: "156fd753e22679c4455f",
                20: "40efedfda2e340f744c9",
                21: "47c5ece3b45c6c586441",
                22: "9932f6b68f3e7e946c72",
                23: "73f5eb3f65420b9de6ba",
                24: "4a49739fbcc1c2651a42",
                25: "5fc8caed054316a28a92",
                26: "ad0acf6f00c437622b07",
                27: "61bab183406ed5f31991",
                28: "cfdbc580d9a5cebb180f",
                29: "717edbbbf7ef62844079",
                30: "084bda4550927ac5edc9",
                31: "3abc0c0ea3f2d69bd162",
                32: "cecf16576e826759cc73",
                33: "6dea3330f0501aa293ba",
                34: "b5e35157fc5a3ddfb420",
                35: "ed9963aa7c460882f751",
                36: "830812d731a124a392eb",
                37: "f87f4fd1bff04ff234c0",
                38: "994985026c9524b95814",
                39: "a97cc0086b3344e8fcdd",
                40: "f4ceea79a392e2749b67",
                41: "6c17e5b7b70949b97a4d",
                42: "8fe161135bd249ad421c",
                43: "9e56caa259c2aca6e94d",
                44: "761132ac7f62bdf016be",
                45: "3a507b5dad06b97dfb13",
                46: "acc61034fbce1600ff9d",
                47: "6837326d46388a30d1bd",
                48: "3a5f97fadb2fd93fff53",
                49: "bdd6ff71f9c0a2a76770",
                50: "6c6a68aa3c198291abce",
                51: "778d7d7d2ee95b9b3040",
                52: "9494a1dfc11f6c14123f",
                53: "9d082739423eb7956ff0",
                54: "495570307b801f166f5f",
                55: "709ae39fcd736b9c3961",
                56: "1f8390aa3ac80a9b578f",
                57: "86bc7a30f4fc79f6d196",
                58: "de69b7d7b20dd4afe149",
                59: "1597b48b3cd64a26feb6",
                60: "42c3f143f91877e06bac",
                61: "26f94951433a2929f635",
                62: "0d4d6dc85d468039c40f",
                63: "47aabbf9168e6b44c651",
                64: "164658ce95f674ba4cf9",
                65: "f6a2530231294fcb4cbc",
                66: "921315544a3df6251ae1",
                67: "36a4c40f19184d35ab37",
                68: "a5547bc919f41cdcca19",
                69: "b4f104a18b05b1f03034",
                70: "67946dd7c82c04c5f6ac",
                71: "0b8afcd26daba6209984",
                72: "6721bcb32d5a45705388",
                73: "2fe78083c4147808900b",
                74: "dbedbd3d583f091640bf",
                75: "872939147af4a0729a1f",
                76: "e9c3399a91ada0754533",
                77: "bd502ba3fb6c80876816",
                78: "dcbb9a2567e9fe04c411",
                79: "39c927d5a0f39bd15706",
                80: "dd9649d9e00ee529ccef",
                81: "5af90edf482326a9abb3",
                82: "a5aa49d0020eabc9ef7c",
                83: "5b1aab8ebf1dcf4044b5",
                84: "812119c1283faddf64c2",
                85: "726e206ab434960e6b0d",
                86: "5cf049df744fb86d34d9",
                87: "b8b83f91a5ecde92dec1",
                88: "68f99ef0bea6072b9b68",
                89: "795732808e15b8e8267d",
                90: "e859df23b9b82534ed8d",
                93: "e370b3a305ef20fe834a",
                94: "9b6157eb99ab552d3cb1",
                95: "5aa58d3fab400cecd649",
                96: "73c5d7ae63c5af0ed6fb"
              }[i]),
            (e = function(a) {
              (c.onerror = c.onload = null), clearTimeout(d);
              var n,
                e,
                i,
                o = b[r];
              0 !== o &&
                (o &&
                  ((n = a && ("load" === a.type ? "missing" : a.type)),
                  (e = a && a.target && a.target.src),
                  ((i = new Error(
                    "Loading chunk " + r + " failed.\n(" + n + ": " + e + ")"
                  )).type = n),
                  (i.request = e),
                  o[1](i)),
                (b[r] = void 0));
            }),
            (d = setTimeout(function() {
              e({ type: "timeout", target: c });
            }, 12e4)),
            (c.onerror = c.onload = e),
            document.head.appendChild(c))),
      Promise.all(a)
    );
  }),
    (j.m = l),
    (j.c = e),
    (j.d = function(a, n, e) {
      j.o(a, n) || Object.defineProperty(a, n, { enumerable: !0, get: e });
    }),
    (j.r = function(a) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (j.t = function(n, a) {
      if ((1 & a && (n = j(n)), 8 & a)) return n;
      if (4 & a && "object" == typeof n && n && n.__esModule) return n;
      var e = Object.create(null);
      if (
        (j.r(e),
        Object.defineProperty(e, "default", { enumerable: !0, value: n }),
        2 & a && "string" != typeof n)
      )
        for (var i in n)
          j.d(
            e,
            i,
            function(a) {
              return n[a];
            }.bind(null, i)
          );
      return e;
    }),
    (j.n = function(a) {
      var n =
        a && a.__esModule
          ? function() {
              return a.default;
            }
          : function() {
              return a;
            };
      return j.d(n, "a", n), n;
    }),
    (j.o = function(a, n) {
      return Object.prototype.hasOwnProperty.call(a, n);
    }),
    (j.p = ""),
    (j.oe = function(a) {
      throw (console.error(a), a);
    });
  var n = (window.webpackJsonp = window.webpackJsonp || []),
    i = n.push.bind(n);
  (n.push = a), (n = n.slice());
  for (var o = 0; o < n.length; o++) a(n[o]);
  var z = i;
  t();
})([]);

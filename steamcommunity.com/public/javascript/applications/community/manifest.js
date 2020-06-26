/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "5952370";
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
        { 2: 1, 6: 1, 7: 1, 8: 1, 93: 1, 96: 1 }[r] &&
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
                    2: "27b7b3ba7ea446809e32",
                    3: "31d6cfe0d16ae931b73c",
                    4: "31d6cfe0d16ae931b73c",
                    6: "9e59b3bbc059c5405066",
                    7: "dfe0aedc10147c3f5a48",
                    8: "7a186b7f4ffc1227e823",
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
                    93: "685c8e7b3d3ac2557003",
                    94: "31d6cfe0d16ae931b73c",
                    95: "31d6cfe0d16ae931b73c",
                    96: "8447d69ae3584c50ebee"
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
                1: "73090cf95dd7984e799d",
                2: "a7667cf66a75ebbd25f7",
                3: "dc72d92b6291cb7b6e78",
                4: "5702a71d0ac6950b402d",
                6: "bf796f618a8938605d19",
                7: "ef6869dc880a37482266",
                8: "325f9f29b4e540635bd9",
                9: "4f62860eb857c9970042",
                10: "fe88d0902952ead46347",
                11: "25176910c60fae192ace",
                12: "3b36651330fe4fef211f",
                13: "c30ab39ab93a4275f751",
                14: "c972362475edbc1e5bf6",
                15: "83692d9f76cab0fcea44",
                16: "a248e862afd8e6fd4fd2",
                17: "151fd2ece3aa45c65c2d",
                18: "fd62e8cd01fef6c76970",
                19: "4aaa8407482eec96e2ab",
                20: "7710653b72aad3aaf004",
                21: "74e7327179764d8b38e2",
                22: "cf42b791f079a0549230",
                23: "61b4cf70235592a7aa03",
                24: "3ab84a51b889ede882c1",
                25: "9d17fcab27643c06a1ce",
                26: "e6d4f7437689d2e10be4",
                27: "7169d5ad2e91a53f355b",
                28: "736d43d223cac5b6b7d7",
                29: "b17ec4a8dc997d4cc7fb",
                30: "e1c297bd18436eea80cd",
                31: "85777ce46de468ec4936",
                32: "5cf6a026dd9f23cdce7d",
                33: "a1f596885ce8c1864f15",
                34: "c63d33541f67e56f71ee",
                35: "c170a49257018d001034",
                36: "830812d731a124a392eb",
                37: "f87f4fd1bff04ff234c0",
                38: "994985026c9524b95814",
                39: "a97cc0086b3344e8fcdd",
                40: "f4ceea79a392e2749b67",
                41: "6c17e5b7b70949b97a4d",
                42: "68decac48fcfc82049ad",
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
                64: "4fbbd26a800d4f4635fe",
                65: "46488b26d249a3e63350",
                66: "d17f1004a0bf30292104",
                67: "3312dd5bdef4e93ff581",
                68: "61b058c96ad36b2def7f",
                69: "6f6ab007581765e89ed7",
                70: "478f6fd3df00865d88cd",
                71: "8a96c27aff591e40a70e",
                72: "32538f05009574ba1697",
                73: "5d98a0edd76afe6661f8",
                74: "f85ef50408c3e21867ff",
                75: "339d03b6495a46e89b3c",
                76: "1bae65f2e45620f841e0",
                77: "829c379b965accd0c654",
                78: "d83d7262fa9c62d4cd12",
                79: "07b682a4fc0d574a0314",
                80: "d57ee03afbd09d047f30",
                81: "3a9655fed783fad2180b",
                82: "d81288d3a2ff216e2776",
                83: "a36f6ef287f73f40081e",
                84: "1d0e7b304fe4c721b8a6",
                85: "3cc1ca009a4a3256c870",
                86: "22abef571f991f4584b0",
                87: "6307bc56c89c77107d2e",
                88: "84e80cf341f966cd1f30",
                89: "b4270cc07d06e9fd6f92",
                90: "7085459da16afa3e7c54",
                93: "0b6eb79604e78e54bf33",
                94: "9b6157eb99ab552d3cb1",
                95: "5aa58d3fab400cecd649",
                96: "73c5d7ae63c5af0ed6fb"
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

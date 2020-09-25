/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "6110070";
!(function(l) {
  function a(a) {
    for (
      var e, n, i = a[0], o = a[1], c = a[2], d = 0, s = [];
      d < i.length;
      d++
    )
      (n = i[d]), b[n] && s.push(b[n][0]), (b[n] = 0);
    for (e in o) Object.prototype.hasOwnProperty.call(o, e) && (l[e] = o[e]);
    for (_ && _(a); s.length; ) s.shift()();
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
    f = { 3: 0 },
    b = { 3: 0 },
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
        { 1: 1, 2: 1, 4: 1, 6: 1, 7: 1, 8: 1, 9: 1, 99: 1 }[r] &&
        a.push(
          (f[r] = new Promise(function(a, i) {
            for (
              var e =
                  "css/applications/community/" +
                  ({
                    1: "broadcasts~events~profile",
                    2: "broadcasts~events",
                    4: "ugcrewards~userreviewrewards",
                    5: "vendors~broadcasts~events",
                    6: "avatarcrop",
                    7: "broadcast",
                    8: "broadcasts",
                    9: "events",
                    10: "localization/main_brazilian-json",
                    11: "localization/main_bulgarian-json",
                    12: "localization/main_czech-json",
                    13: "localization/main_danish-json",
                    14: "localization/main_dutch-json",
                    15: "localization/main_english-json",
                    16: "localization/main_finnish-json",
                    17: "localization/main_french-json",
                    18: "localization/main_german-json",
                    19: "localization/main_greek-json",
                    20: "localization/main_hungarian-json",
                    21: "localization/main_italian-json",
                    22: "localization/main_japanese-json",
                    23: "localization/main_koreana-json",
                    24: "localization/main_latam-json",
                    25: "localization/main_norwegian-json",
                    26: "localization/main_polish-json",
                    27: "localization/main_portuguese-json",
                    28: "localization/main_romanian-json",
                    29: "localization/main_russian-json",
                    30: "localization/main_sc_schinese-json",
                    31: "localization/main_schinese-json",
                    32: "localization/main_spanish-json",
                    33: "localization/main_swedish-json",
                    34: "localization/main_tchinese-json",
                    35: "localization/main_thai-json",
                    36: "localization/main_turkish-json",
                    37: "localization/main_ukrainian-json",
                    38: "localization/main_vietnamese-json",
                    39: "localization/managefriends_brazilian-json",
                    40: "localization/managefriends_bulgarian-json",
                    41: "localization/managefriends_czech-json",
                    42: "localization/managefriends_danish-json",
                    43: "localization/managefriends_dutch-json",
                    44: "localization/managefriends_english-json",
                    45: "localization/managefriends_finnish-json",
                    46: "localization/managefriends_french-json",
                    47: "localization/managefriends_german-json",
                    48: "localization/managefriends_greek-json",
                    49: "localization/managefriends_hungarian-json",
                    50: "localization/managefriends_italian-json",
                    51: "localization/managefriends_japanese-json",
                    52: "localization/managefriends_koreana-json",
                    53: "localization/managefriends_latam-json",
                    54: "localization/managefriends_norwegian-json",
                    55: "localization/managefriends_polish-json",
                    56: "localization/managefriends_portuguese-json",
                    57: "localization/managefriends_romanian-json",
                    58: "localization/managefriends_russian-json",
                    59: "localization/managefriends_schinese-json",
                    60: "localization/managefriends_spanish-json",
                    61: "localization/managefriends_swedish-json",
                    62: "localization/managefriends_tchinese-json",
                    63: "localization/managefriends_thai-json",
                    64: "localization/managefriends_turkish-json",
                    65: "localization/managefriends_ukrainian-json",
                    66: "localization/managefriends_vietnamese-json",
                    67: "localization/shared_arabic-json",
                    68: "localization/shared_brazilian-json",
                    69: "localization/shared_bulgarian-json",
                    70: "localization/shared_czech-json",
                    71: "localization/shared_danish-json",
                    72: "localization/shared_dutch-json",
                    73: "localization/shared_english-json",
                    74: "localization/shared_finnish-json",
                    75: "localization/shared_french-json",
                    76: "localization/shared_german-json",
                    77: "localization/shared_greek-json",
                    78: "localization/shared_hungarian-json",
                    79: "localization/shared_italian-json",
                    80: "localization/shared_japanese-json",
                    81: "localization/shared_koreana-json",
                    82: "localization/shared_latam-json",
                    83: "localization/shared_norwegian-json",
                    84: "localization/shared_polish-json",
                    85: "localization/shared_portuguese-json",
                    86: "localization/shared_romanian-json",
                    87: "localization/shared_russian-json",
                    88: "localization/shared_sc_schinese-json",
                    89: "localization/shared_schinese-json",
                    90: "localization/shared_spanish-json",
                    91: "localization/shared_swedish-json",
                    92: "localization/shared_tchinese-json",
                    93: "localization/shared_thai-json",
                    94: "localization/shared_turkish-json",
                    95: "localization/shared_ukrainian-json",
                    96: "localization/shared_vietnamese-json",
                    99: "profile",
                    100: "ugcrewards",
                    101: "userreviewrewards"
                  }[r] || r) +
                  ".css?contenthash=" +
                  {
                    1: "d5fb2f3ed5fc3c82c09d",
                    2: "7830c5bb9739a8314450",
                    4: "9e59b3bbc059c5405066",
                    5: "31d6cfe0d16ae931b73c",
                    6: "809fe643725703fdacbf",
                    7: "498f9d7eba019ff18f6d",
                    8: "41bc25b4f3b7af526c15",
                    9: "eea5931719a583bd72ae",
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
                    92: "31d6cfe0d16ae931b73c",
                    93: "31d6cfe0d16ae931b73c",
                    94: "31d6cfe0d16ae931b73c",
                    95: "31d6cfe0d16ae931b73c",
                    96: "31d6cfe0d16ae931b73c",
                    99: "98c85b43e3e21e0c9024",
                    100: "31d6cfe0d16ae931b73c",
                    101: "31d6cfe0d16ae931b73c"
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
                1: "broadcasts~events~profile",
                2: "broadcasts~events",
                4: "ugcrewards~userreviewrewards",
                5: "vendors~broadcasts~events",
                6: "avatarcrop",
                7: "broadcast",
                8: "broadcasts",
                9: "events",
                10: "localization/main_brazilian-json",
                11: "localization/main_bulgarian-json",
                12: "localization/main_czech-json",
                13: "localization/main_danish-json",
                14: "localization/main_dutch-json",
                15: "localization/main_english-json",
                16: "localization/main_finnish-json",
                17: "localization/main_french-json",
                18: "localization/main_german-json",
                19: "localization/main_greek-json",
                20: "localization/main_hungarian-json",
                21: "localization/main_italian-json",
                22: "localization/main_japanese-json",
                23: "localization/main_koreana-json",
                24: "localization/main_latam-json",
                25: "localization/main_norwegian-json",
                26: "localization/main_polish-json",
                27: "localization/main_portuguese-json",
                28: "localization/main_romanian-json",
                29: "localization/main_russian-json",
                30: "localization/main_sc_schinese-json",
                31: "localization/main_schinese-json",
                32: "localization/main_spanish-json",
                33: "localization/main_swedish-json",
                34: "localization/main_tchinese-json",
                35: "localization/main_thai-json",
                36: "localization/main_turkish-json",
                37: "localization/main_ukrainian-json",
                38: "localization/main_vietnamese-json",
                39: "localization/managefriends_brazilian-json",
                40: "localization/managefriends_bulgarian-json",
                41: "localization/managefriends_czech-json",
                42: "localization/managefriends_danish-json",
                43: "localization/managefriends_dutch-json",
                44: "localization/managefriends_english-json",
                45: "localization/managefriends_finnish-json",
                46: "localization/managefriends_french-json",
                47: "localization/managefriends_german-json",
                48: "localization/managefriends_greek-json",
                49: "localization/managefriends_hungarian-json",
                50: "localization/managefriends_italian-json",
                51: "localization/managefriends_japanese-json",
                52: "localization/managefriends_koreana-json",
                53: "localization/managefriends_latam-json",
                54: "localization/managefriends_norwegian-json",
                55: "localization/managefriends_polish-json",
                56: "localization/managefriends_portuguese-json",
                57: "localization/managefriends_romanian-json",
                58: "localization/managefriends_russian-json",
                59: "localization/managefriends_schinese-json",
                60: "localization/managefriends_spanish-json",
                61: "localization/managefriends_swedish-json",
                62: "localization/managefriends_tchinese-json",
                63: "localization/managefriends_thai-json",
                64: "localization/managefriends_turkish-json",
                65: "localization/managefriends_ukrainian-json",
                66: "localization/managefriends_vietnamese-json",
                67: "localization/shared_arabic-json",
                68: "localization/shared_brazilian-json",
                69: "localization/shared_bulgarian-json",
                70: "localization/shared_czech-json",
                71: "localization/shared_danish-json",
                72: "localization/shared_dutch-json",
                73: "localization/shared_english-json",
                74: "localization/shared_finnish-json",
                75: "localization/shared_french-json",
                76: "localization/shared_german-json",
                77: "localization/shared_greek-json",
                78: "localization/shared_hungarian-json",
                79: "localization/shared_italian-json",
                80: "localization/shared_japanese-json",
                81: "localization/shared_koreana-json",
                82: "localization/shared_latam-json",
                83: "localization/shared_norwegian-json",
                84: "localization/shared_polish-json",
                85: "localization/shared_portuguese-json",
                86: "localization/shared_romanian-json",
                87: "localization/shared_russian-json",
                88: "localization/shared_sc_schinese-json",
                89: "localization/shared_schinese-json",
                90: "localization/shared_spanish-json",
                91: "localization/shared_swedish-json",
                92: "localization/shared_tchinese-json",
                93: "localization/shared_thai-json",
                94: "localization/shared_turkish-json",
                95: "localization/shared_ukrainian-json",
                96: "localization/shared_vietnamese-json",
                99: "profile",
                100: "ugcrewards",
                101: "userreviewrewards"
              }[(i = r)] || i) +
              ".js?contenthash=" +
              {
                1: "4a4c37f01403b6af523a",
                2: "2fa6bd519895aecc4c4e",
                4: "bc8dd869c51fc330e106",
                5: "1d066f6290f0e551c366",
                6: "135983ca289b2e742628",
                7: "9cde8aee71d7f3009da7",
                8: "ad88266b1828cbc0a6d8",
                9: "62a049e4c6b03614333c",
                10: "004081b94d907fde994d",
                11: "67af2f34f83945d684c3",
                12: "86cf8bcdec577320999a",
                13: "275697d49ecce5b3b5ab",
                14: "c4d13e42ff3726bd7691",
                15: "a34cff9607e516ba0e41",
                16: "bba586dfb66dedb5dd84",
                17: "3977a5eb38674cf1b7a5",
                18: "42216ca9050ba60a2790",
                19: "8f45d740080f0dc0bf76",
                20: "275c9de197fe99cad88d",
                21: "45be386aaf02355b1d84",
                22: "fb7dca694b41021530ad",
                23: "f496379a9e68a71c41fe",
                24: "248b1f0ad3823627ca17",
                25: "fd7526a68334da4d1e24",
                26: "85425728bb99bf92d838",
                27: "d425fd44a1c07ea9338b",
                28: "6f112a4cbcab70a00664",
                29: "8ef397411308a2408e14",
                30: "d03e7a33651d0332839c",
                31: "c213bd1bbc7ed51d207a",
                32: "3254a9cc0c792772aeab",
                33: "08ea083cc68d8b02c537",
                34: "ac40488a9358080b7255",
                35: "3558e49b65badf59f6f0",
                36: "481eb7a55ef6c38ab50c",
                37: "06066b33e247dddfacaa",
                38: "17f7f76c40eae2bdcb2d",
                39: "851acb6f5b4436f784f5",
                40: "2a123c6e86493cc9baea",
                41: "2959cbc9c7b07cc45cdd",
                42: "3d68929ff05c05b3c570",
                43: "c3799e0fff4e35c0e6ad",
                44: "46e98d4e3ce77d6e5b3f",
                45: "81289bedfcfaac6ef83d",
                46: "46a0f201de180a6e19f1",
                47: "89c3b0149b596ca968c2",
                48: "6665616d92196f5941cc",
                49: "6fcefec0e93a3ea48403",
                50: "4c8893b02e95d845294b",
                51: "9b0a7ce793d134f80dcc",
                52: "7d289f1584c787dbf06b",
                53: "e9a590017a6d4e27cacc",
                54: "909837158123402d7cc4",
                55: "36af21b225a8678e7954",
                56: "7080f6076fc9720886b1",
                57: "7cf27ebe72d2873069c7",
                58: "12ceb14d4b44bc190863",
                59: "c77f70f245a67df250b8",
                60: "df170270eea9338f5e32",
                61: "79525c7c3c8e92675a09",
                62: "39ca9805bfd2ed0b2275",
                63: "c8a8df8997bb436f18ea",
                64: "1e954a1df983a37ab6aa",
                65: "694f642dc71262e550e1",
                66: "06825f761ba25a365c16",
                67: "016c98b07855eca9fef7",
                68: "48c8fc57c9e6b4ff6278",
                69: "8af175617fa58e68a121",
                70: "ae8cd7038899c828a6da",
                71: "fe185697c69d8f130356",
                72: "c887c84353740fd4a438",
                73: "f449debdb888e2b316e7",
                74: "6ea5dd3061c0305b0ed9",
                75: "8d23efa2a097c12a5c61",
                76: "230bee220a247e0de10c",
                77: "7ef2cdb06c24d4ae9e15",
                78: "55b87b2bd656be62775c",
                79: "bbf6c0cb80f3c67d169a",
                80: "4461ff3614666bb3a23f",
                81: "de2b4d32c758ff82d07d",
                82: "2c7779e475a3995b82e4",
                83: "78096c476bb63f25ff44",
                84: "031057b1a080367ad0d9",
                85: "9a78b0e38cfb40e9082e",
                86: "3c3974fc670b034b2e84",
                87: "a48693116f58bfb3cbff",
                88: "84e1ddaddabe7854d594",
                89: "7c1dd5b83ce4fba238d4",
                90: "8d3d179b973dff7aac4f",
                91: "c3b5820777e914140c2f",
                92: "9a8783c644fa4be67cba",
                93: "07beb5266b7df2e676d1",
                94: "3bec4abb495c7d2c85af",
                95: "400de9c6605c3b904963",
                96: "558ef4680cb453b8aa58",
                99: "16e4f50eb7481d012df4",
                100: "eacd3a525d93c5e4a9a9",
                101: "0dcabd49ee5cad487196"
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
  var _ = i;
  t();
})([]);

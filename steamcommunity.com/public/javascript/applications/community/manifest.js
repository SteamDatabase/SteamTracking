/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "6130852";
!(function(l) {
  function a(a) {
    for (
      var e, n, i = a[0], o = a[1], c = a[2], s = 0, d = [];
      s < i.length;
      s++
    )
      (n = i[s]), b[n] && d.push(b[n][0]), (b[n] = 0);
    for (e in o) Object.prototype.hasOwnProperty.call(o, e) && (l[e] = o[e]);
    for (_ && _(a); d.length; ) d.shift()();
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
        { 1: 1, 4: 1, 6: 1, 7: 1, 8: 1, 9: 1, 99: 1 }[r] &&
        a.push(
          (f[r] = new Promise(function(a, i) {
            for (
              var e =
                  "css/applications/community/" +
                  ({
                    1: "broadcasts~events~profile",
                    2: "broadcast~broadcasts~profile",
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
                    2: "31d6cfe0d16ae931b73c",
                    4: "9e59b3bbc059c5405066",
                    5: "31d6cfe0d16ae931b73c",
                    6: "809fe643725703fdacbf",
                    7: "c9a5118ec12e6c29a2ce",
                    8: "2203737aa14d2ce83fea",
                    9: "fa821d64686cf8927091",
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
              var s =
                (d = n[c]).getAttribute("data-href") || d.getAttribute("href");
              if ("stylesheet" === d.rel && (s === e || s === o)) return a();
            }
            for (
              var d, l = document.getElementsByTagName("style"), c = 0;
              c < l.length;
              c++
            ) {
              if ((s = (d = l[c]).getAttribute("data-href")) === e || s === o)
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
      s,
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
                2: "broadcast~broadcasts~profile",
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
                1: "e40950f0c96fa4c4897c",
                2: "6b5e608638404fd7e59e",
                4: "ad7da15d13ff75550802",
                5: "1d066f6290f0e551c366",
                6: "40e202262b1945a54ae6",
                7: "f20b3a1c764f3badd213",
                8: "306fbae75c39ebae01cd",
                9: "c6bfb2349eff44d11f66",
                10: "6e793424b50c84bcfac8",
                11: "c4cab70d0434a864420e",
                12: "556f3e460b1de76eea8b",
                13: "9db82b718d23df304324",
                14: "7546555f467d31d8e979",
                15: "67d15fe3986013ac4ffe",
                16: "12db7f1d67040c7a47bb",
                17: "9ab0c89905d0cc203da6",
                18: "c6251885fd4b5e82d529",
                19: "e2fc14de1e264f8b882a",
                20: "a2697595c3d42984bd6c",
                21: "04aa104ad5ec15713be4",
                22: "f231eba5c06b43b54f99",
                23: "66a5f6b0e493e945db39",
                24: "49e2cf6949cad3a5b079",
                25: "0c20fd3628134aa2fc2e",
                26: "f784ab8303393629482f",
                27: "ae19e914f8cc325cd035",
                28: "6f112a4cbcab70a00664",
                29: "2ab881a0a14de37049f0",
                30: "d03e7a33651d0332839c",
                31: "f1fdafb0b97c3e54a4ea",
                32: "b591baddc43eecb78d24",
                33: "8697ab04cb842b5ab28a",
                34: "99a4e3bedd66df0bfa38",
                35: "421f8aa8db33139c7f8e",
                36: "3623aa64d611122c247e",
                37: "fc3c30eec5f9c580ef32",
                38: "3012d8486fd85d7503b8",
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
                68: "4758b8c565aea29ac4cc",
                69: "ecdfe5dc18615274933a",
                70: "b9a0c769392192e14cee",
                71: "fc949c7ab858d84c6daf",
                72: "ba834144d3e6a18a86fc",
                73: "2b172d5a711d80e89b1e",
                74: "cf7120258c6a866486e2",
                75: "7ea449d82601945cd1ec",
                76: "1efbf4ecb126bba08f8b",
                77: "c163cb07ede87cd9cf55",
                78: "7b85e7cb414cf284e2ee",
                79: "845a71e926c845609748",
                80: "6a45e379bb2e10294f1d",
                81: "e9570cdb8ee74795244c",
                82: "b25a4d923a5ed05531fc",
                83: "2105fa925ec8af97aea3",
                84: "bd98c75ffa3e920fce7b",
                85: "a591e254ed9842d83f7e",
                86: "644631302acb2deb94bb",
                87: "b8985bebaff9e2b5fa10",
                88: "84e1ddaddabe7854d594",
                89: "8424c7e6d67b0ec7ca8d",
                90: "7e033a18e2a3642858cd",
                91: "45989864d1642ab1aed7",
                92: "a654d13a8d32d17d94cc",
                93: "f9b90bee14c0ee77f2aa",
                94: "dbd88a69cfa29be11614",
                95: "cf7a772e2b9f5c3692c4",
                96: "8c2e3ac0ac0d9b10f547",
                99: "0f6e155b2f1f33237af3",
                100: "23d72a516fddcd2c269a",
                101: "746683895c1f1099bc89"
              }[i]),
            (n = function(a) {
              (c.onerror = c.onload = null), clearTimeout(s);
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
            (s = setTimeout(function() {
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

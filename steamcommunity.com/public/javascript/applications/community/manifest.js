/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "5957554";
!(function(l) {
  function a(a) {
    for (
      var e, n, i = a[0], o = a[1], c = a[2], s = 0, d = [];
      s < i.length;
      s++
    )
      (n = i[s]), b[n] && d.push(b[n][0]), (b[n] = 0);
    for (e in o) Object.prototype.hasOwnProperty.call(o, e) && (l[e] = o[e]);
    for (z && z(a); d.length; ) d.shift()();
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
                    9: "046747740319c746c60b",
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
                    94: "1853b79184100ec3c0a5",
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
                1: "225c38f38f8e9ab8a5c8",
                2: "59d5ac21aa4e3c54cf24",
                3: "29d7eb3fd48fcaa0cd15",
                4: "ceb933c5ab359508e7b3",
                5: "0ef495c9e7e0fd050e1c",
                7: "14971e41dbb7ac072870",
                8: "b45946ba5afaba1ecd7c",
                9: "4cc909477f12e9655773",
                10: "c3932255aec03a3d5b84",
                11: "eb5bb63abf17766933cb",
                12: "e88bc0e144fea1380216",
                13: "fd69c835592ac7199117",
                14: "067f548a99409b0159b5",
                15: "7b919f01eb503e85c501",
                16: "10ddf0ba2f0607953751",
                17: "7a33b10b555fb42c0ce4",
                18: "5851f2d0cd7d9d1e21e5",
                19: "a3bb0dd74fc3b263f165",
                20: "9331c2bea70775be34a3",
                21: "f6a8ccfe1432f1d0bf64",
                22: "e3cd14aa7f1f1387a0f2",
                23: "bbcb25d29b78fdd4b852",
                24: "da7f8c455ed5c1fed7b6",
                25: "02e96ea51a81e440453e",
                26: "57ad7f341978e5926ec7",
                27: "30b524a5c0f4aeada8d3",
                28: "542b096a7bc7cda8d7d2",
                29: "7acf690c584184f95e1b",
                30: "89605d8191300c8b1c51",
                31: "9dc2e110c20deb613d28",
                32: "a22974dff273fb94389c",
                33: "4445768a205fc5fb98cb",
                34: "8cea8a3f49d0e0ed6182",
                35: "4fba38b5a7fe77aa2e80",
                36: "4a2a06a53118cf9c3082",
                37: "1b5218dc37ce25924031",
                38: "aadb2532aeee2ce239b4",
                39: "097d635920ec6b2c94b9",
                40: "a33c3b04559eb3f88065",
                41: "cb7588a2e140d745b74e",
                42: "47d8fa556f9aeb9a244c",
                43: "2baaa813e54094c570b3",
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
                65: "e12fe8536e89c17f0558",
                66: "94f29fca47f8a33e4d9a",
                67: "bc3512a0f61fae8b5bdb",
                68: "f656d9a8f21fad226cba",
                69: "be0987f59677c98a54b7",
                70: "05a65a73fa005d6c8ed7",
                71: "bb522216d5697b59c8b5",
                72: "42b02c4baab39b6c5dd0",
                73: "023544409f4f572f96f2",
                74: "b3bef74c7fd61664bbe0",
                75: "aaf928f12751e6b4ecb1",
                76: "d6ff2b6a8839523c525e",
                77: "3667d15a4eef7a15c144",
                78: "d0418f47ab84574bc5af",
                79: "ac4f3ce2257c21734cbb",
                80: "530a7b1eb4a2f458b058",
                81: "594367dd96352393a08b",
                82: "05df7540487f3fbd7041",
                83: "462c830f70afc2a80a36",
                84: "14a36059bb065818a777",
                85: "3aba854fb1e1c7e7c04f",
                86: "2645f94b254a6754898d",
                87: "c6f31ab899e77983815c",
                88: "500316f757542418168d",
                89: "81c6d26a0cae7c98538d",
                90: "1151cf4e6b4ee8a43b0e",
                91: "10eda1e4236cab14821d",
                94: "d4bd08c96689a86fad2d",
                95: "d02a3fc309f191b02e44",
                96: "a5c1a3efcb22a733f9d0",
                97: "0fd0a87bcf5f968b61f5"
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
  var z = i;
  t();
})([]);

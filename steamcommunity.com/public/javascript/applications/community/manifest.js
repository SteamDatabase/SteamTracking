/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "6077348";
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
    f = { 4: 0 },
    b = { 4: 0 },
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
        { 5: 1, 6: 1, 7: 1, 8: 1, 93: 1, 96: 1 }[r] &&
        a.push(
          (f[r] = new Promise(function(a, i) {
            for (
              var n =
                  "css/applications/community/" +
                  ({
                    1: "localization/shared_english-json",
                    2: "localization/main_english-json",
                    3: "localization/managefriends_english-json",
                    5: "ugcrewards~userreviewrewards",
                    6: "avatarcrop",
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
                    2: "31d6cfe0d16ae931b73c",
                    3: "31d6cfe0d16ae931b73c",
                    5: "9e59b3bbc059c5405066",
                    6: "809fe643725703fdacbf",
                    7: "6aef4bdfd24024f24a37",
                    8: "7085da37932143d3d0b8",
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
                    93: "98c85b43e3e21e0c9024",
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
                2: "localization/main_english-json",
                3: "localization/managefriends_english-json",
                5: "ugcrewards~userreviewrewards",
                6: "avatarcrop",
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
                1: "f8e5de6dfd7dba89ae9d",
                2: "0816c218a14206e4a621",
                3: "dfbcf23fdd66b96b777b",
                5: "1b21f1dcf460fac0b094",
                6: "9d892fe01ff02a567088",
                7: "d2510f9052d3f6dff600",
                8: "23c86ee1fce349a05a53",
                9: "1549e8802fe89110c064",
                10: "48a454f4a3250f806bf4",
                11: "65fd63c49a0ebaad8232",
                12: "ca4de5331cca8b85f3c2",
                13: "8858e741dad82d16f2b0",
                14: "e4c901c73cb743766ed8",
                15: "18e7e3b009b6fb2235e9",
                16: "468d6e03c9fd708566f0",
                17: "22c49890ec51ca6fa684",
                18: "63c90b2e7b779413dc84",
                19: "a81ca6b385158aeff8dd",
                20: "dacd7dfe4ca191e371ec",
                21: "00a7ad932206c0101a6b",
                22: "f87c8b9477b287cd5fe3",
                23: "856d9831f989c70283be",
                24: "5d6846648fa9074c0449",
                25: "0613bd6c5ffd775b15c7",
                26: "873d35a61095df1873ff",
                27: "1063c3e0a9a7bfa0a838",
                28: "218655d7450550c36b1b",
                29: "8720cc09551df8274256",
                30: "1880a34833ffaea7e159",
                31: "ac50147c919c09337d60",
                32: "f9f7dd5cd5860ace0de4",
                33: "44c949641c4d144e2f62",
                34: "ab845d0ef6dbb6ea43ea",
                35: "6366631599b87698f018",
                36: "830812d731a124a392eb",
                37: "f87f4fd1bff04ff234c0",
                38: "994985026c9524b95814",
                39: "a97cc0086b3344e8fcdd",
                40: "f4ceea79a392e2749b67",
                41: "6c17e5b7b70949b97a4d",
                42: "9597a6ff5a4c57e69f07",
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
                64: "f316bfab48bf6ff39e2f",
                65: "4de662a0a95cb00ba84e",
                66: "a83bc820a10c98ea232e",
                67: "ffcb2c7c83d2112f276f",
                68: "5b1ab3cf38639090d512",
                69: "cd9e9b082a5d915f7792",
                70: "439fa06301d1a8cf0d25",
                71: "b50f4de5031e205be88e",
                72: "6eaa6250309f68970b11",
                73: "7effdb1cb1cf377a1807",
                74: "71643baa96abff6c8f14",
                75: "f75e009b2099a6ebb3fd",
                76: "0c7e6e1303b476c0f6ad",
                77: "2e484d9dcbcd02c97e19",
                78: "11d41e625a7e015277cf",
                79: "168481a515af854e3a95",
                80: "09a378b037fea9c27a93",
                81: "f9f03b5673fa1418259f",
                82: "551526618ee21a46a3c2",
                83: "600065eb2e144021e811",
                84: "b7d915b3c4b47c7f177e",
                85: "f8828904f46b6e1052f7",
                86: "0bc7a968ff55e5014d19",
                87: "66071ca758ddef15cade",
                88: "aa48855787d6d5916140",
                89: "1e9b5280d2054036059a",
                90: "741cc0655171a732c1a2",
                93: "777c0ac48cbfbb1348fa",
                94: "b9b4d0a18f4d2344ca96",
                95: "d4ea59e8edf9106b28c1",
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

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8456329";
(() => {
  "use strict";
  var a,
    e,
    n,
    c,
    i,
    o,
    s,
    d = {},
    t = {};
  function l(a) {
    var e = t[a];
    if (void 0 !== e) return e.exports;
    var n = (t[a] = { id: a, loaded: !1, exports: {} });
    return d[a].call(n.exports, n, n.exports, l), (n.loaded = !0), n.exports;
  }
  (l.m = d),
    (a = []),
    (l.O = (e, n, c, i) => {
      if (!n) {
        var o = 1 / 0;
        for (f = 0; f < a.length; f++) {
          for (var [n, c, i] = a[f], s = !0, d = 0; d < n.length; d++)
            (!1 & i || o >= i) && Object.keys(l.O).every((a) => l.O[a](n[d]))
              ? n.splice(d--, 1)
              : ((s = !1), i < o && (o = i));
          if (s) {
            a.splice(f--, 1);
            var t = c();
            void 0 !== t && (e = t);
          }
        }
        return e;
      }
      i = i || 0;
      for (var f = a.length; f > 0 && a[f - 1][2] > i; f--) a[f] = a[f - 1];
      a[f] = [n, c, i];
    }),
    (l.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return l.d(e, { a: e }), e;
    }),
    (n = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (l.t = function (a, c) {
      if ((1 & c && (a = this(a)), 8 & c)) return a;
      if ("object" == typeof a && a) {
        if (4 & c && a.__esModule) return a;
        if (16 & c && "function" == typeof a.then) return a;
      }
      var i = Object.create(null);
      l.r(i);
      var o = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var s = 2 & c && a; "object" == typeof s && !~e.indexOf(s); s = n(s))
        Object.getOwnPropertyNames(s).forEach((e) => (o[e] = () => a[e]));
      return (o.default = () => a), l.d(i, o), i;
    }),
    (l.d = (a, e) => {
      for (var n in e)
        l.o(e, n) &&
          !l.o(a, n) &&
          Object.defineProperty(a, n, { enumerable: !0, get: e[n] });
    }),
    (l.f = {}),
    (l.e = (a) =>
      Promise.all(Object.keys(l.f).reduce((e, n) => (l.f[n](a, e), e), []))),
    (l.u = (a) =>
      "javascript/applications/community/" +
      {
        27: "localization/shared_japanese-json",
        113: "localization/main_romanian-json",
        131: "localization/shared_english-json",
        146: "localization/shared_indonesian-json",
        238: "communityawardsapp",
        301: "localization/main_russian-json",
        312: "communityhomeheader",
        400: "chunk~b1f9f17fd",
        483: "libraries~c18a43282",
        508: "chunk~d2dd7ecf6",
        543: "libraries~9dbf41906",
        617: "localization/main_portuguese-json",
        755: "localization/shared_schinese-json",
        867: "localization/sales_hungarian-json",
        908: "qanda",
        960: "localization/sales_norwegian-json",
        961: "localization/sales_spanish-json",
        1133: "localization/main_bulgarian-json",
        1195: "localization/main_tchinese-json",
        1261: "localization/shared_norwegian-json",
        1311: "localization/main_greek-json",
        1496: "chunk~af55cc5d1",
        1546: "localization/sales_english-json",
        1579: "localization/shared_ukrainian-json",
        1649: "chunk~03410565e",
        1909: "notifications",
        1953: "localization/shared_finnish-json",
        2136: "events",
        2138: "localization/shared_thai-json",
        2235: "localization/sales_french-json",
        2329: "avatarcrop",
        2351: "localization/main_swedish-json",
        2373: "localization/sales_schinese-json",
        2449: "chunk~7a7b104fb",
        2468: "libraries~d2dd7ecf6",
        2530: "chunk~f036ce556",
        2557: "localization/main_ukrainian-json",
        2603: "localization/main_indonesian-json",
        2723: "localization/sales_polish-json",
        2738: "localization/shared_turkish-json",
        2745: "localization/sales_ukrainian-json",
        2805: "chunk~4b330692b",
        2822: "localization/shared_greek-json",
        2829: "libraries~5a92743e8",
        2832: "chunk~d3aa4b017",
        2837: "libraries~8e45aed72",
        3007: "localization/sales_finnish-json",
        3038: "localization/main_french-json",
        3068: "greenenvelope",
        3070: "libraries~7a7b104fb",
        3175: "libraries~dd2720453",
        3202: "localization/sales_vietnamese-json",
        3275: "libraries~c7a3fa389",
        3298: "localization/shared_brazilian-json",
        3352: "eventinternal",
        3499: "communityfaqs",
        3520: "chunk~8f4f68fd6",
        3591: "localization/sales_bulgarian-json",
        3602: "localization/shared_dutch-json",
        3801: "libraries~c1dfbefd5",
        3903: "games",
        3973: "chunk~4e3b43bb2",
        4040: "chunk~c1dfbefd5",
        4097: "localization/shared_spanish-json",
        4183: "localization/shared_danish-json",
        4293: "localization/sales_german-json",
        4358: "localization/shared_sc_schinese-json",
        4445: "localization/shared_german-json",
        4469: "localization/shared_koreana-json",
        4487: "localization/shared_swedish-json",
        4513: "localization/shared_italian-json",
        4535: "login",
        4601: "broadcast",
        4729: "localization/shared_french-json",
        4819: "localization/sales_tchinese-json",
        4979: "localization/sales_italian-json",
        5012: "localization/main_italian-json",
        5119: "chunk~1935d6e28",
        5277: "localization/main_latam-json",
        5279: "localization/shared_hungarian-json",
        5436: "broadcasts",
        5439: "localization/sales_koreana-json",
        5493: "localization/main_thai-json",
        5494: "localization/sales_czech-json",
        5503: "chunk~44d969a12",
        5757: "localization/main_norwegian-json",
        6091: "localization/main_koreana-json",
        6148: "libraries~4b330692b",
        6272: "conference",
        6313: "libraries~af55cc5d1",
        6378: "chunk~0012678b1",
        6403: "localization/shared_russian-json",
        6415: "localization/main_brazilian-json",
        6457: "localization/main_turkish-json",
        6588: "libraries~f036ce556",
        6656: "libraries~642602239",
        6658: "localization/sales_portuguese-json",
        6715: "localization/sales_sc_schinese-json",
        6844: "localization/shared_polish-json",
        6845: "profile",
        6932: "localization/sales_turkish-json",
        6962: "localization/main_dutch-json",
        7192: "localization/sales_indonesian-json",
        7629: "localization/main_schinese-json",
        7660: "localization/shared_romanian-json",
        7769: "localization/main_german-json",
        7781: "localization/shared_bulgarian-json",
        7832: "localization/shared_arabic-json",
        7901: "localization/main_vietnamese-json",
        7924: "localization/sales_latam-json",
        7948: "libraries~9e353dc2d",
        7971: "localization/sales_greek-json",
        7978: "libraries~69438e232",
        8085: "localization/shared_czech-json",
        8120: "chunk~8e45aed72",
        8274: "localization/main_hungarian-json",
        8282: "localization/main_czech-json",
        8291: "localization/main_polish-json",
        8427: "localization/main_finnish-json",
        8433: "localization/shared_vietnamese-json",
        8525: "localization/main_spanish-json",
        8592: "localization/main_danish-json",
        8647: "managefriends",
        8691: "libraries~9714d9815",
        8805: "localization/sales_russian-json",
        8931: "chunk~c18a43282",
        9167: "localization/sales_thai-json",
        9233: "localization/main_japanese-json",
        9295: "libraries~8f4f68fd6",
        9316: "localization/sales_romanian-json",
        9348: "chunk~69438e232",
        9349: "eventeditor",
        9389: "localization/main_sc_schinese-json",
        9427: "chunk~642602239",
        9513: "localization/sales_brazilian-json",
        9547: "localization/shared_tchinese-json",
        9561: "localization/sales_danish-json",
        9665: "localization/main_english-json",
        9828: "localization/sales_dutch-json",
        9854: "localization/shared_portuguese-json",
        9888: "localization/sales_swedish-json",
        9949: "chunk~9e353dc2d",
        9951: "localization/shared_latam-json",
        9991: "localization/sales_japanese-json",
      }[a] +
      ".js?contenthash=" +
      {
        27: "5f8d2a5662689fc3be5d",
        113: "dd2442d4f7626889e104",
        131: "7b917bcf42abcf2ea66b",
        146: "fb239a29469eb8e44487",
        238: "95d564736deb0443ccbe",
        301: "aa0145477f03e0ead974",
        312: "a016f9a1ab7dba9596a4",
        400: "e8a0f9ea86a1c5f3246f",
        483: "259c5bfc425f296bd77a",
        508: "26f069cfafbeba0be3cc",
        543: "1c28d7dbf6692226edde",
        617: "cb9c2d564ab35eb86bc9",
        755: "340323489b8b6e186cf9",
        867: "90d9a8221370330ee2e8",
        908: "c3c9e792336ced239cb3",
        960: "544b2344e9dd13b32f7c",
        961: "a25329a2c9cce36e88f8",
        1133: "7cdaedb888d09486d035",
        1195: "9d060fee619f2603b60f",
        1261: "175d8032c411cd6ba2f5",
        1311: "62b8665b0c1f0954706d",
        1496: "1adb3edc58c38eab7586",
        1546: "66fa680c5f641af586b2",
        1579: "3801d8a9eb48fc752eec",
        1649: "16c8d2414bfbd6156ae6",
        1909: "f76be888844a34cc568b",
        1953: "5c9279f87088df1a5528",
        2136: "5db5aff851f0d6e64294",
        2138: "21f5d2cee8fb4a7f5ec7",
        2235: "f0ad2cfbc01c99e4406f",
        2329: "6ede7831cd4300fb2f63",
        2351: "ae01a6bb3e76474a41ab",
        2373: "9e6e28c7da38a58d9d87",
        2449: "d74c1d381dd74940ea0b",
        2468: "4206716472a30ba9a4af",
        2530: "ac03edb408dbe839c029",
        2557: "498316a178501c632b54",
        2603: "27ed1dcc3a055ce028e3",
        2723: "3c487cffd729d4feee89",
        2738: "ea842e611589e3f44faa",
        2745: "b0e59deb677664fdd623",
        2805: "cd74282e2679c30236a5",
        2822: "989c42a390a0796b6ce7",
        2829: "92995b0dc4568eaf314e",
        2832: "7b072cfa4d9cb1b8357c",
        2837: "f122cb522e468f8218ef",
        3007: "2f88535150509d21660e",
        3038: "270a3ccc96763c87fbb3",
        3068: "a9f43577c64c55cb16e9",
        3070: "458aa3935fb0b29005ba",
        3175: "47c6c348041e1d3cd66f",
        3202: "02c9fb7737629bc298ec",
        3275: "ee11f1babb660b966c00",
        3298: "8a1a4ada8ea5a790e8e1",
        3352: "8c6adb2d86ddac2c33c5",
        3499: "0f2a5b2b38755e0dd2b6",
        3520: "e339bfb23cdf6338e16e",
        3591: "813c20399b0909ea6d5a",
        3602: "8b65482c0515c0ce2cdc",
        3801: "c4b06c5472c2eb194034",
        3903: "5d5fb1f370fe6c32dc78",
        3973: "3ee49f563d805e4ea457",
        4040: "70cd3b1b4587cadd2ccd",
        4097: "648e1381ec615c793f1c",
        4183: "17e08cda7d50a312db32",
        4293: "6d836229777289fc1ef8",
        4358: "4ce9455e11438082e71f",
        4445: "6d59628b720d4729c1fb",
        4469: "ee9c8f4263d2892d55eb",
        4487: "ddcf4eb10c2de39d71cb",
        4513: "33264ae43e08a2f79b51",
        4535: "9567e17c46c30d2a2a6f",
        4601: "e77f4484ccc5b001b131",
        4729: "3b48ada1aa6248e2abb0",
        4819: "70bb9df3851fa361d7e9",
        4979: "9bbb19a86f4c1cdfb2c0",
        5012: "fdb4254739e9755b05ff",
        5119: "66d920f8746f56b5cce4",
        5277: "067b9ac262599ba54a36",
        5279: "f73125504e7b379eb3a1",
        5436: "2a98873b17ef7064333e",
        5439: "c1a903f97f665ef92114",
        5493: "9eba7fb7912b5382995a",
        5494: "e1ab146b3b5fe33d5870",
        5503: "3c60b202452b8d773e08",
        5757: "501f7649ad38acbcfd6a",
        6091: "060ea0a4f0f367a76874",
        6148: "1ca0a59911794d934b2b",
        6272: "27118a76dbdede4a37c4",
        6313: "e187bfd41b8080de68ee",
        6378: "84f282c00660307da92a",
        6403: "32ae3d79f90dd17cac4c",
        6415: "47f8ff9bfa19945ecfe3",
        6457: "4548e290c0c0bf220afd",
        6588: "5db8d117336870d619b6",
        6656: "39aa1ec83012ae955c0c",
        6658: "45570c32466498e40e81",
        6715: "73ed36e62793e7039801",
        6844: "f903985ff78e5f1ecb5b",
        6845: "0f9274a81d54df3b5e2d",
        6932: "257c5664f2f90ae2e7bf",
        6962: "8e4826dbe1d7911fe6a7",
        7192: "07367469cc1af37f17a5",
        7629: "87dc4f599fd9222a9521",
        7660: "ff85736300b2238e85bb",
        7769: "944912955623e1a2166a",
        7781: "5f340bc016cf3bfa9780",
        7832: "6028229c5663ec81b618",
        7901: "719ce6ea77f2f3b38418",
        7924: "ee6ddf7d9be9b199bbd9",
        7948: "4701980ccbf99473c130",
        7971: "39e4599547bccaafffe7",
        7978: "764632b8f3e75414df63",
        8085: "be86c45077f7e07766ab",
        8120: "0788661c0641dcc54639",
        8274: "49e5bd363d52c74e54b5",
        8282: "24b133c56acc6cf07fae",
        8291: "cb3e6c37667ca765968c",
        8427: "41a48aeea073b76cc2af",
        8433: "6c455a4f7dc46877fc94",
        8525: "e8aa898ecbdd1c0f33f2",
        8592: "90cb03fb8df641f59ec1",
        8647: "e4f391991cf3e7474299",
        8691: "5f8c6308e15a113f3e35",
        8805: "daaa778645c361fe67c6",
        8931: "f903aa86223bcc990ce1",
        9167: "2a93a0fd1f2dbb705b92",
        9233: "0c3ad15c34fc57c814fb",
        9295: "18548179eb983f32f337",
        9316: "e0ca75769a4bc69461f0",
        9348: "6e85c8bdc33e775c63ce",
        9349: "c01505e14f94053578de",
        9389: "060bc6a83ca76626d72f",
        9427: "c0a5ffa1be20fca5134e",
        9513: "8d055aa3258c09178dd0",
        9547: "7e8ece6e926f4871b675",
        9561: "00dca97fe8a01afae45b",
        9665: "1677c4549d6264782145",
        9828: "39f9e449678c1fe99109",
        9854: "bdc6e4b6a03d59829e89",
        9888: "04a7b6776ba500c2e0f0",
        9949: "6c4c9deb6aab2bf06a42",
        9951: "1f3f9c503e9f5562c179",
        9991: "f994b6627085556029b1",
      }[a]),
    (l.miniCssF = (a) =>
      "css/applications/community/" +
      {
        238: "communityawardsapp",
        312: "communityhomeheader",
        400: "chunk~b1f9f17fd",
        508: "chunk~d2dd7ecf6",
        908: "qanda",
        1909: "notifications",
        2136: "events",
        2329: "avatarcrop",
        2449: "chunk~7a7b104fb",
        2530: "chunk~f036ce556",
        3068: "greenenvelope",
        3352: "eventinternal",
        3499: "communityfaqs",
        3520: "chunk~8f4f68fd6",
        3903: "games",
        4535: "login",
        4601: "broadcast",
        5436: "broadcasts",
        6272: "conference",
        6845: "profile",
        8647: "managefriends",
        8931: "chunk~c18a43282",
        9348: "chunk~69438e232",
        9349: "eventeditor",
        9427: "chunk~642602239",
        9949: "chunk~9e353dc2d",
      }[a] +
      ".css?contenthash=" +
      {
        238: "9d553a26b9e194868478",
        312: "62d9d3172e8a21ccf304",
        400: "df7e520b5fde495b1401",
        508: "b8d744bbe7b31fae8108",
        908: "0e081bbb135c85d95ae8",
        1909: "2fca35912c0825f76d76",
        2136: "8c359fa0555fa2bd2c5d",
        2329: "a969564f4cdabf0c473e",
        2449: "73bf2444e0d5af416667",
        2530: "bad700c313ffaf7c2d59",
        3068: "b6e4e0dc417d633111af",
        3352: "f3838685918d3c88bdc3",
        3499: "f66814af59f83abee010",
        3520: "ecbab5cdec397713533e",
        3903: "fd3f85ef3102d792b6b0",
        4535: "120ef11d3786830c5571",
        4601: "7051786867362f304840",
        5436: "671dce66cf8a63ffd3ac",
        6272: "421aa9f56f19d4e59fdb",
        6845: "c5991fafb114f811dc73",
        8647: "2aa199fdf547121332be",
        8931: "762ad39d9d9173903980",
        9348: "31e8df4cbedea0b4c8db",
        9349: "c88d816a31f37d59ca1d",
        9427: "f0a65a70165224eb6bab",
        9949: "01c0f0dbc85e5018eeee",
      }[a]),
    (l.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (a) {
        if ("object" == typeof window) return window;
      }
    })()),
    (l.o = (a, e) => Object.prototype.hasOwnProperty.call(a, e)),
    (c = {}),
    (i = "community:"),
    (l.l = (a, e, n, o) => {
      if (c[a]) c[a].push(e);
      else {
        var s, d;
        if (void 0 !== n)
          for (
            var t = document.getElementsByTagName("script"), f = 0;
            f < t.length;
            f++
          ) {
            var r = t[f];
            if (
              r.getAttribute("src") == a ||
              r.getAttribute("data-webpack") == i + n
            ) {
              s = r;
              break;
            }
          }
        s ||
          ((d = !0),
          ((s = document.createElement("script")).charset = "utf-8"),
          (s.timeout = 120),
          l.nc && s.setAttribute("nonce", l.nc),
          s.setAttribute("data-webpack", i + n),
          (s.src = a)),
          (c[a] = [e]);
        var b = (e, n) => {
            (s.onerror = s.onload = null), clearTimeout(h);
            var i = c[a];
            if (
              (delete c[a],
              s.parentNode && s.parentNode.removeChild(s),
              i && i.forEach((a) => a(n)),
              e)
            )
              return e(n);
          },
          h = setTimeout(
            b.bind(null, void 0, { type: "timeout", target: s }),
            12e4,
          );
        (s.onerror = b.bind(null, s.onerror)),
          (s.onload = b.bind(null, s.onload)),
          d && document.head.appendChild(s);
      }
    }),
    (l.r = (a) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (l.nmd = (a) => ((a.paths = []), a.children || (a.children = []), a)),
    (() => {
      var a;
      l.g.importScripts && (a = l.g.location + "");
      var e = l.g.document;
      if (!a && e && (e.currentScript && (a = e.currentScript.src), !a)) {
        var n = e.getElementsByTagName("script");
        n.length && (a = n[n.length - 1].src);
      }
      if (!a)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (a = a
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (l.p = a + "../../../");
    })(),
    (o = (a) =>
      new Promise((e, n) => {
        var c = l.miniCssF(a),
          i = l.p + c;
        if (
          ((a, e) => {
            for (
              var n = document.getElementsByTagName("link"), c = 0;
              c < n.length;
              c++
            ) {
              var i =
                (s = n[c]).getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (i === a || i === e)) return s;
            }
            var o = document.getElementsByTagName("style");
            for (c = 0; c < o.length; c++) {
              var s;
              if ((i = (s = o[c]).getAttribute("data-href")) === a || i === e)
                return s;
            }
          })(c, i)
        )
          return e();
        ((a, e, n, c) => {
          var i = document.createElement("link");
          (i.rel = "stylesheet"),
            (i.type = "text/css"),
            (i.onerror = i.onload =
              (o) => {
                if (((i.onerror = i.onload = null), "load" === o.type)) n();
                else {
                  var s = o && ("load" === o.type ? "missing" : o.type),
                    d = (o && o.target && o.target.href) || e,
                    t = new Error(
                      "Loading CSS chunk " + a + " failed.\n(" + d + ")",
                    );
                  (t.code = "CSS_CHUNK_LOAD_FAILED"),
                    (t.type = s),
                    (t.request = d),
                    i.parentNode.removeChild(i),
                    c(t);
                }
              }),
            (i.href = e),
            document.head.appendChild(i);
        })(a, i, e, n);
      })),
    (s = { 6700: 0 }),
    (l.f.miniCss = (a, e) => {
      s[a]
        ? e.push(s[a])
        : 0 !== s[a] &&
          {
            238: 1,
            312: 1,
            400: 1,
            508: 1,
            908: 1,
            1909: 1,
            2136: 1,
            2329: 1,
            2449: 1,
            2530: 1,
            3068: 1,
            3352: 1,
            3499: 1,
            3520: 1,
            3903: 1,
            4535: 1,
            4601: 1,
            5436: 1,
            6272: 1,
            6845: 1,
            8647: 1,
            8931: 1,
            9348: 1,
            9349: 1,
            9427: 1,
            9949: 1,
          }[a] &&
          e.push(
            (s[a] = o(a).then(
              () => {
                s[a] = 0;
              },
              (e) => {
                throw (delete s[a], e);
              },
            )),
          );
    }),
    (() => {
      var a = { 6700: 0 };
      (l.f.j = (e, n) => {
        var c = l.o(a, e) ? a[e] : void 0;
        if (0 !== c)
          if (c) n.push(c[2]);
          else if (/^(4601|6700)$/.test(e)) a[e] = 0;
          else {
            var i = new Promise((n, i) => (c = a[e] = [n, i]));
            n.push((c[2] = i));
            var o = l.p + l.u(e),
              s = new Error();
            l.l(
              o,
              (n) => {
                if (l.o(a, e) && (0 !== (c = a[e]) && (a[e] = void 0), c)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    o = n && n.target && n.target.src;
                  (s.message =
                    "Loading chunk " + e + " failed.\n(" + i + ": " + o + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = i),
                    (s.request = o),
                    c[1](s);
                }
              },
              "chunk-" + e,
              e,
            );
          }
      }),
        (l.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var c,
            i,
            [o, s, d] = n,
            t = 0;
          if (o.some((e) => 0 !== a[e])) {
            for (c in s) l.o(s, c) && (l.m[c] = s[c]);
            if (d) var f = d(l);
          }
          for (e && e(n); t < o.length; t++)
            (i = o[t]), l.o(a, i) && a[i] && a[i][0](), (a[i] = 0);
          return l.O(f);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();

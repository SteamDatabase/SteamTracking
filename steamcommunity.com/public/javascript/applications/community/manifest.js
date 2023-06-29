/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8161723";
(() => {
  "use strict";
  var a,
    e,
    n,
    c,
    o,
    i,
    s,
    t = {},
    l = {};
  function d(a) {
    var e = l[a];
    if (void 0 !== e) return e.exports;
    var n = (l[a] = { id: a, loaded: !1, exports: {} });
    return t[a].call(n.exports, n, n.exports, d), (n.loaded = !0), n.exports;
  }
  (d.m = t),
    (a = []),
    (d.O = (e, n, c, o) => {
      if (!n) {
        var i = 1 / 0;
        for (f = 0; f < a.length; f++) {
          for (var [n, c, o] = a[f], s = !0, t = 0; t < n.length; t++)
            (!1 & o || i >= o) && Object.keys(d.O).every((a) => d.O[a](n[t]))
              ? n.splice(t--, 1)
              : ((s = !1), o < i && (i = o));
          if (s) {
            a.splice(f--, 1);
            var l = c();
            void 0 !== l && (e = l);
          }
        }
        return e;
      }
      o = o || 0;
      for (var f = a.length; f > 0 && a[f - 1][2] > o; f--) a[f] = a[f - 1];
      a[f] = [n, c, o];
    }),
    (d.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return d.d(e, { a: e }), e;
    }),
    (n = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (d.t = function (a, c) {
      if ((1 & c && (a = this(a)), 8 & c)) return a;
      if ("object" == typeof a && a) {
        if (4 & c && a.__esModule) return a;
        if (16 & c && "function" == typeof a.then) return a;
      }
      var o = Object.create(null);
      d.r(o);
      var i = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var s = 2 & c && a; "object" == typeof s && !~e.indexOf(s); s = n(s))
        Object.getOwnPropertyNames(s).forEach((e) => (i[e] = () => a[e]));
      return (i.default = () => a), d.d(o, i), o;
    }),
    (d.d = (a, e) => {
      for (var n in e)
        d.o(e, n) &&
          !d.o(a, n) &&
          Object.defineProperty(a, n, { enumerable: !0, get: e[n] });
    }),
    (d.f = {}),
    (d.e = (a) =>
      Promise.all(Object.keys(d.f).reduce((e, n) => (d.f[n](a, e), e), []))),
    (d.u = (a) =>
      "javascript/applications/community/" +
      {
        27: "localization/shared_japanese-json",
        113: "localization/main_romanian-json",
        131: "localization/shared_english-json",
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
        2723: "localization/sales_polish-json",
        2738: "localization/shared_turkish-json",
        2745: "localization/sales_ukrainian-json",
        2805: "chunk~4b330692b",
        2822: "localization/shared_greek-json",
        2832: "chunk~d3aa4b017",
        3007: "localization/sales_finnish-json",
        3038: "localization/main_french-json",
        3068: "greenenvelope",
        3202: "localization/sales_vietnamese-json",
        3298: "localization/shared_brazilian-json",
        3352: "eventinternal",
        3499: "communityfaqs",
        3520: "chunk~8f4f68fd6",
        3591: "localization/sales_bulgarian-json",
        3602: "localization/shared_dutch-json",
        3742: "chunk~c7a3fa389",
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
        7629: "localization/main_schinese-json",
        7660: "localization/shared_romanian-json",
        7769: "localization/main_german-json",
        7781: "localization/shared_bulgarian-json",
        7832: "localization/shared_arabic-json",
        7901: "localization/main_vietnamese-json",
        7924: "localization/sales_latam-json",
        7942: "chunk~5a92743e8",
        7948: "libraries~9e353dc2d",
        7971: "localization/sales_greek-json",
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
        27: "7d1698d8d6d85c54aa3a",
        113: "b916bc1c40ca94db5198",
        131: "b464e7feb0fcd854ac71",
        238: "95d564736deb0443ccbe",
        301: "fa19dd3b2660002be7c2",
        312: "41e23c2e506a08af2081",
        400: "5915dfcaf51ac194259a",
        483: "e439fa5133b101be247c",
        508: "2e0b0e71872fb98fd85f",
        543: "92596e2ccfaa7bc641ca",
        617: "aaa55af6c36ff9957ab0",
        755: "d7efaf9cb5ee49a90eae",
        867: "4714f6280064a9c5c47a",
        908: "fbbab534056444ed0899",
        960: "64b316d460408524b18d",
        961: "b85bcae9a592e38a54a5",
        1133: "24d24a73bf13a74efcd2",
        1195: "b3ef696ed67df45f4b07",
        1261: "6c7de968707b1fe121d4",
        1311: "b10dcb5b81c917962705",
        1496: "456f9aef77d62bb80442",
        1546: "c0deefd8c12becfec077",
        1579: "88212b6a75ded9eb7b21",
        1649: "cec69b3f39e1c74969fa",
        1909: "e16acd1a150aba94eb7a",
        1953: "edb18d2978d74eec3387",
        2136: "f8e43093d8dcaafc86f9",
        2138: "a9d49944ff7f0fd43b1c",
        2235: "bf05678d0d6c76c42b84",
        2329: "580cb569c2aa0f29227b",
        2351: "1d1d38a31998ea5856c1",
        2373: "00e91189db07db2938d8",
        2449: "fee6ec2d6077ce1a6e39",
        2468: "2d5e27cefd495455ecb3",
        2530: "2daf8c6cc4570548d79f",
        2557: "edae6c90d8103cfbb659",
        2723: "f93b75b2df1fd725cf33",
        2738: "5d349b4e5de602b47de3",
        2745: "d73daedb49974fa3546a",
        2805: "c85e3480872cac482b6e",
        2822: "c175ab89ccbcdd48e2aa",
        2832: "b5a1ab25275ad5c62003",
        3007: "abac6d3ade686d483d9f",
        3038: "eb617fb29f00c26ac94a",
        3068: "515eee17c20575ac4c85",
        3202: "839415dd5538aa9fff41",
        3298: "06235dfd10f95dc3a9c5",
        3352: "5661b5acdb6d984ad771",
        3499: "1be969caf721d2118f60",
        3520: "0586cf2779870c66fd1b",
        3591: "09edf0dfabbbfeda1427",
        3602: "a71829a073a927357810",
        3742: "f81347ed7773a3277376",
        3903: "c8d9bb451bce8e451a60",
        3973: "96e51b8fef7c8ed042fd",
        4040: "f67f311de50b77f325e7",
        4097: "fb56e617c234f2cfa11d",
        4183: "ef0d2329a6b69bd97a1b",
        4293: "47086b899b3d7b50835b",
        4358: "1fa57011b01736c2aa5f",
        4445: "2a52c6cf0dddbf1f26b7",
        4469: "2677b7a58f5615f15527",
        4487: "0b568032dd802802587a",
        4513: "ca1bd00b6cc7130ad20e",
        4535: "693d89a79df82579cc10",
        4601: "d614ec7b3a1b81aeaf5b",
        4729: "4900c4f566319c744ffd",
        4819: "00e75c317fee97addd7d",
        4979: "539b3fc2d8cc1416b424",
        5012: "aef424eb2f8b93e09077",
        5119: "66d920f8746f56b5cce4",
        5277: "4450fb0ada34f36e10cf",
        5279: "4f5ada50dee414d64b8c",
        5436: "393cdcfd8447015871a0",
        5439: "71354ff8192165945f48",
        5493: "fe22a1a43103f17702d2",
        5494: "c7f3f3916dab71f85860",
        5503: "1550d7e6d96474191bf3",
        5757: "251dd4961abbfde81fcf",
        6091: "1f80185bf171da0a2cd2",
        6148: "1ca0a59911794d934b2b",
        6272: "cfe8e2e496383c0c4b48",
        6378: "f32ee16901175b5852d0",
        6403: "45ca6715ecea5f37644d",
        6415: "c5ae60ac9046c1a5bc37",
        6457: "a9e3182444df49149384",
        6588: "a5373e3d0e90ce9f0ed8",
        6656: "0620cc0db36da685d691",
        6658: "c17f503c4b160224e518",
        6715: "b546f627254ec8397a36",
        6844: "0d5a6e7713373a70e4da",
        6845: "ead842c19573de03aaba",
        6932: "d53756bb6a97321755d6",
        6962: "e7d2049c7cf67c4b57c2",
        7629: "503a1956ebe76eb9c53d",
        7660: "b3445a8b2679e90b5b3f",
        7769: "eae6ceb15e4cf880a61b",
        7781: "e42e59bd8fbcb3eb4496",
        7832: "e8085db9d08270eac33d",
        7901: "050281a2081ddd2f403a",
        7924: "02257f9a3371c8e7315b",
        7942: "ac7def959a434c9b08da",
        7948: "4701980ccbf99473c130",
        7971: "6a51dc5e61f0f589f50a",
        8085: "90ed788dbdfc2cd383cd",
        8120: "a7ed78872ed872170d95",
        8274: "27fbc555ad09926f29cb",
        8282: "9f8921e04af6f5c28851",
        8291: "acb7081eeec4439f7d14",
        8427: "49a6562b935887de3d96",
        8433: "90bde5dd611b90440e7a",
        8525: "9957c0fb359cb4361127",
        8592: "84e30694dc993c0c9a28",
        8647: "04d4ecc24b4c3f861467",
        8691: "5f8c6308e15a113f3e35",
        8805: "7e7cebe54b432edcc531",
        8931: "26932f736825bdf6a3b5",
        9167: "81e3145cf3688ea25dbb",
        9233: "15fd19fddfedaf44be75",
        9316: "bbc41c1dbdcf8b3dab55",
        9348: "04eb1a7e02c3bd5821db",
        9349: "ef470b3938c4c56720d1",
        9389: "152010686104e8901643",
        9427: "ec62a3391d5729f52fd8",
        9513: "124e58afc893e3873513",
        9547: "5e0173c91c0822b84353",
        9561: "8a942f1802689aeef7f1",
        9665: "cfeed12508fae1d568ca",
        9828: "0916ec6dfd053fb2ad59",
        9854: "d3bd4302e5e09ce986f2",
        9888: "47b33592c4e63e466525",
        9949: "d415b3feff7bb81242fc",
        9951: "4c29b1b489281247ec81",
        9991: "36cd46ba70258f7aa38e",
      }[a]),
    (d.miniCssF = (a) =>
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
      }[a] +
      ".css?contenthash=" +
      {
        238: "9d553a26b9e194868478",
        312: "62d9d3172e8a21ccf304",
        400: "cddb6c34b06e447fe549",
        508: "506606ed29624b511bbd",
        908: "9844515e07566417856e",
        1909: "2fca35912c0825f76d76",
        2136: "8c359fa0555fa2bd2c5d",
        2329: "a969564f4cdabf0c473e",
        2449: "e7da7db021c54561d38b",
        2530: "f6d17b2829b203bc8b63",
        3068: "b6e4e0dc417d633111af",
        3352: "f3838685918d3c88bdc3",
        3499: "f66814af59f83abee010",
        3520: "f07f4d7f2de709629026",
        3903: "fd3f85ef3102d792b6b0",
        4535: "120ef11d3786830c5571",
        4601: "7051786867362f304840",
        5436: "671dce66cf8a63ffd3ac",
        6272: "421aa9f56f19d4e59fdb",
        6845: "c5991fafb114f811dc73",
        8647: "2aa199fdf547121332be",
        8931: "c555ce2c12a20ee34d35",
        9348: "26d803a4798502279180",
        9349: "f4977652404f75e5d337",
        9427: "150d99c79eb8c3ddebdf",
      }[a]),
    (d.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (a) {
        if ("object" == typeof window) return window;
      }
    })()),
    (d.o = (a, e) => Object.prototype.hasOwnProperty.call(a, e)),
    (c = {}),
    (o = "community:"),
    (d.l = (a, e, n, i) => {
      if (c[a]) c[a].push(e);
      else {
        var s, t;
        if (void 0 !== n)
          for (
            var l = document.getElementsByTagName("script"), f = 0;
            f < l.length;
            f++
          ) {
            var r = l[f];
            if (
              r.getAttribute("src") == a ||
              r.getAttribute("data-webpack") == o + n
            ) {
              s = r;
              break;
            }
          }
        s ||
          ((t = !0),
          ((s = document.createElement("script")).charset = "utf-8"),
          (s.timeout = 120),
          d.nc && s.setAttribute("nonce", d.nc),
          s.setAttribute("data-webpack", o + n),
          (s.src = a)),
          (c[a] = [e]);
        var b = (e, n) => {
            (s.onerror = s.onload = null), clearTimeout(h);
            var o = c[a];
            if (
              (delete c[a],
              s.parentNode && s.parentNode.removeChild(s),
              o && o.forEach((a) => a(n)),
              e)
            )
              return e(n);
          },
          h = setTimeout(
            b.bind(null, void 0, { type: "timeout", target: s }),
            12e4
          );
        (s.onerror = b.bind(null, s.onerror)),
          (s.onload = b.bind(null, s.onload)),
          t && document.head.appendChild(s);
      }
    }),
    (d.r = (a) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (d.nmd = (a) => ((a.paths = []), a.children || (a.children = []), a)),
    (() => {
      var a;
      d.g.importScripts && (a = d.g.location + "");
      var e = d.g.document;
      if (!a && e && (e.currentScript && (a = e.currentScript.src), !a)) {
        var n = e.getElementsByTagName("script");
        n.length && (a = n[n.length - 1].src);
      }
      if (!a)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (a = a
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (d.p = a + "../../../");
    })(),
    (i = (a) =>
      new Promise((e, n) => {
        var c = d.miniCssF(a),
          o = d.p + c;
        if (
          ((a, e) => {
            for (
              var n = document.getElementsByTagName("link"), c = 0;
              c < n.length;
              c++
            ) {
              var o =
                (s = n[c]).getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (o === a || o === e)) return s;
            }
            var i = document.getElementsByTagName("style");
            for (c = 0; c < i.length; c++) {
              var s;
              if ((o = (s = i[c]).getAttribute("data-href")) === a || o === e)
                return s;
            }
          })(c, o)
        )
          return e();
        ((a, e, n, c) => {
          var o = document.createElement("link");
          (o.rel = "stylesheet"),
            (o.type = "text/css"),
            (o.onerror = o.onload =
              (i) => {
                if (((o.onerror = o.onload = null), "load" === i.type)) n();
                else {
                  var s = i && ("load" === i.type ? "missing" : i.type),
                    t = (i && i.target && i.target.href) || e,
                    l = new Error(
                      "Loading CSS chunk " + a + " failed.\n(" + t + ")"
                    );
                  (l.code = "CSS_CHUNK_LOAD_FAILED"),
                    (l.type = s),
                    (l.request = t),
                    o.parentNode.removeChild(o),
                    c(l);
                }
              }),
            (o.href = e),
            document.head.appendChild(o);
        })(a, o, e, n);
      })),
    (s = { 6700: 0 }),
    (d.f.miniCss = (a, e) => {
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
          }[a] &&
          e.push(
            (s[a] = i(a).then(
              () => {
                s[a] = 0;
              },
              (e) => {
                throw (delete s[a], e);
              }
            ))
          );
    }),
    (() => {
      var a = { 6700: 0 };
      (d.f.j = (e, n) => {
        var c = d.o(a, e) ? a[e] : void 0;
        if (0 !== c)
          if (c) n.push(c[2]);
          else if (/^(4601|6700)$/.test(e)) a[e] = 0;
          else {
            var o = new Promise((n, o) => (c = a[e] = [n, o]));
            n.push((c[2] = o));
            var i = d.p + d.u(e),
              s = new Error();
            d.l(
              i,
              (n) => {
                if (d.o(a, e) && (0 !== (c = a[e]) && (a[e] = void 0), c)) {
                  var o = n && ("load" === n.type ? "missing" : n.type),
                    i = n && n.target && n.target.src;
                  (s.message =
                    "Loading chunk " + e + " failed.\n(" + o + ": " + i + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = o),
                    (s.request = i),
                    c[1](s);
                }
              },
              "chunk-" + e,
              e
            );
          }
      }),
        (d.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var c,
            o,
            [i, s, t] = n,
            l = 0;
          if (i.some((e) => 0 !== a[e])) {
            for (c in s) d.o(s, c) && (d.m[c] = s[c]);
            if (t) var f = t(d);
          }
          for (e && e(n); l < i.length; l++)
            (o = i[l]), d.o(a, o) && a[o] && a[o][0](), (a[o] = 0);
          return d.O(f);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();

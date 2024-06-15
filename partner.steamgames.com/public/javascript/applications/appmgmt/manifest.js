/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8976998";
(() => {
  "use strict";
  var e,
    a,
    n,
    s,
    d,
    c = {},
    r = {};
  function f(e) {
    var a = r[e];
    if (void 0 !== a) return a.exports;
    var n = (r[e] = { id: e, loaded: !1, exports: {} });
    return c[e].call(n.exports, n, n.exports, f), (n.loaded = !0), n.exports;
  }
  (f.m = c),
    (e = []),
    (f.O = (a, n, s, d) => {
      if (!n) {
        var c = 1 / 0;
        for (t = 0; t < e.length; t++) {
          for (var [n, s, d] = e[t], r = !0, i = 0; i < n.length; i++)
            (!1 & d || c >= d) && Object.keys(f.O).every((e) => f.O[e](n[i]))
              ? n.splice(i--, 1)
              : ((r = !1), d < c && (c = d));
          if (r) {
            e.splice(t--, 1);
            var o = s();
            void 0 !== o && (a = o);
          }
        }
        return a;
      }
      d = d || 0;
      for (var t = e.length; t > 0 && e[t - 1][2] > d; t--) e[t] = e[t - 1];
      e[t] = [n, s, d];
    }),
    (f.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return f.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (f.t = function (e, s) {
      if ((1 & s && (e = this(e)), 8 & s)) return e;
      if ("object" == typeof e && e) {
        if (4 & s && e.__esModule) return e;
        if (16 & s && "function" == typeof e.then) return e;
      }
      var d = Object.create(null);
      f.r(d);
      var c = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var r = 2 & s && e; "object" == typeof r && !~a.indexOf(r); r = n(r))
        Object.getOwnPropertyNames(r).forEach((a) => (c[a] = () => e[a]));
      return (c.default = () => e), f.d(d, c), d;
    }),
    (f.d = (e, a) => {
      for (var n in a)
        f.o(a, n) &&
          !f.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: a[n] });
    }),
    (f.f = {}),
    (f.e = (e) =>
      Promise.all(Object.keys(f.f).reduce((a, n) => (f.f[n](e, a), a), []))),
    (f.u = (e) =>
      "javascript/applications/appmgmt/" +
      {
        61: "sales_russian-json",
        77: "sales_vietnamese-json",
        101: "sales_dutch-json",
        256: "chunk~68d776eed",
        584: "sales_koreana-json",
        647: "main_czech-json",
        665: "chunk~c4b714e2c",
        698: "main_dutch-json",
        727: "main_japanese-json",
        768: "libraries~01f083eeb",
        799: "main_german-json",
        819: "marketing_turkish-json",
        874: "marketing_dutch-json",
        903: "marketing_russian-json",
        1012: "sales_romanian-json",
        1043: "sales_schinese-json",
        1117: "main_french-json",
        1162: "shared_thai-json",
        1164: "sales_norwegian-json",
        1275: "libraries~3c8297a47",
        1313: "shared_bulgarian-json",
        1722: "sales_czech-json",
        1892: "libraries~45b6949a4",
        2029: "shared_sc_schinese-json",
        2136: "events",
        2431: "shared_arabic-json",
        2443: "shared_latam-json",
        2448: "marketing_polish-json",
        2522: "logoedtior",
        2529: "pricingtool",
        2537: "shared_schinese-json",
        2581: "marketing_danish-json",
        2601: "marketing_spanish-json",
        2681: "sales_indonesian-json",
        2706: "libraries~b58ccb787",
        2767: "main_polish-json",
        2824: "marketing_german-json",
        2844: "shared_japanese-json",
        2848: "main_ukrainian-json",
        2942: "main_tchinese-json",
        3112: "shared_french-json",
        3174: "sales_spanish-json",
        3185: "main_swedish-json",
        3252: "shared_polish-json",
        3277: "main_romanian-json",
        3313: "sales_finnish-json",
        3323: "main_danish-json",
        3334: "chunk~b22481b0d",
        3359: "main_bulgarian-json",
        3453: "marketing_czech-json",
        3557: "shared_finnish-json",
        3599: "adminpromoreviewdashboard",
        3634: "sales_bulgarian-json",
        3655: "libraries~5da2a553c",
        3685: "sales_german-json",
        3768: "main_finnish-json",
        3863: "publisherdashboard",
        4033: "marketing_schinese-json",
        4055: "libraries~4b4a4243d",
        4103: "navevents",
        4108: "shared_norwegian-json",
        4166: "sales_thai-json",
        4171: "marketing_koreana-json",
        4189: "shared_czech-json",
        4199: "marketing_french-json",
        4238: "marketing_thai-json",
        4248: "sales_polish-json",
        4297: "shared_greek-json",
        4447: "sales_greek-json",
        4458: "marketing_brazilian-json",
        4535: "login",
        4601: "broadcast",
        4682: "sales_latam-json",
        4722: "main_koreana-json",
        4812: "sales_brazilian-json",
        4823: "shared_romanian-json",
        4839: "libraries~9e65e27a0",
        4860: "main_russian-json",
        4929: "marketing_english-json",
        4935: "sdrconnections",
        4961: "sales_danish-json",
        4964: "shared_vietnamese-json",
        5117: "libraries~511d96142",
        5257: "marketing_portuguese-json",
        5414: "sales_portuguese-json",
        5438: "shared_turkish-json",
        5572: "chunk~5da2a553c",
        5625: "shared_swedish-json",
        5631: "chunk~bb5324543",
        5676: "steamlearn",
        5706: "contenthubpages",
        5849: "shared_portuguese-json",
        5855: "sales_swedish-json",
        5925: "shared_dutch-json",
        5933: "shared_italian-json",
        5948: "shared_hungarian-json",
        6007: "shared_german-json",
        6019: "marketing_swedish-json",
        6035: "marketing_ukrainian-json",
        6087: "main_latam-json",
        6169: "marketing_norwegian-json",
        6317: "libraries~3ac1cf899",
        6319: "libraries~e459d0d7a",
        6492: "shared_spanish-json",
        6542: "shared_koreana-json",
        6693: "sales_italian-json",
        6699: "steamdeck",
        6762: "sales_sc_schinese-json",
        6808: "resquemsg",
        6815: "main_english-json",
        6817: "main_spanish-json",
        6846: "marketing_vietnamese-json",
        7072: "main_indonesian-json",
        7082: "marketing_japanese-json",
        7094: "sales_japanese-json",
        7181: "sales_tchinese-json",
        7201: "libraries~9d44baec0",
        7234: "libraries~c4b714e2c",
        7236: "main_portuguese-json",
        7346: "chunk~e9c7aadaf",
        7486: "shared_indonesian-json",
        7602: "shared_tchinese-json",
        7660: "chunk~9e65e27a0",
        7724: "sales_french-json",
        7762: "steamml",
        7781: "shared_ukrainian-json",
        7871: "marketing_greek-json",
        7890: "main_thai-json",
        7934: "sales_ukrainian-json",
        7942: "marketing_finnish-json",
        7951: "main_norwegian-json",
        7952: "sales_english-json",
        7975: "shared_english-json",
        8001: "marketing_italian-json",
        8051: "main_hungarian-json",
        8072: "libraries~e9c7aadaf",
        8155: "main_italian-json",
        8168: "main_vietnamese-json",
        8385: "shared_brazilian-json",
        8399: "marketing_indonesian-json",
        8644: "chunk~4ec87c66d",
        8676: "recappages",
        8751: "libraries~c7992ef56",
        8754: "libraries~68d776eed",
        8767: "sales_turkish-json",
        8774: "marketing_romanian-json",
        8960: "marketing_bulgarian-json",
        8974: "storeadmin",
        8993: "sales_hungarian-json",
        8994: "marketing_hungarian-json",
        9062: "shared_russian-json",
        9154: "libraries~4ec87c66d",
        9431: "main_brazilian-json",
        9568: "main_greek-json",
        9603: "libraries~82d50d904",
        9663: "main_turkish-json",
        9753: "shared_danish-json",
        9845: "chunk~01f083eeb",
        9899: "marketing_latam-json",
        9903: "marketing_tchinese-json",
        9919: "marketing_sc_schinese-json",
        9980: "main_schinese-json",
      }[e] +
      ".js?contenthash=" +
      {
        61: "ec46fa8bcebf5340e631",
        77: "c4afab9f5dcd578e4461",
        101: "a2068cf79b724087534e",
        256: "d600d80ce86bcd2dd66f",
        584: "e1edc835aed6bfafcd07",
        647: "63edde13a17aac1926cd",
        665: "19bc104ff59daeca9bd7",
        698: "7be36dbd46b4abeb5a23",
        727: "c8a6f309a47c307791cd",
        768: "405b03a06776d5cbea96",
        799: "dfc2d9e33fd10ae27080",
        819: "08aafc2c151efdb2cb78",
        874: "673c99f3f2ca2e9f3d91",
        903: "0cd9f4f727ba454b5c77",
        1012: "a94687869ea4380e2ede",
        1043: "a65118491a23cfff1a7e",
        1117: "e9fd082aa729bffd1783",
        1162: "aef23b82c20b3d81597b",
        1164: "8f8e482754f9ce3aa203",
        1275: "382ecb527bed9b6d9bcd",
        1313: "717102684511147cfd44",
        1722: "9505761fface8382716d",
        1892: "34e3d5efe9e9689bf307",
        2029: "1f8815b3233836c06278",
        2136: "d2a4ec48bfa6d864ba98",
        2431: "1ddbbdb2c0edc00865c7",
        2443: "87c41dd129e20c659404",
        2448: "950fec106f4427bacd12",
        2522: "17dae4e004521f1604e7",
        2529: "9d87fca51cf2727aba5b",
        2537: "b69104087c2950dd26c3",
        2581: "4b5fcf399ce0cc645d00",
        2601: "58f5680b3ac085ae05c8",
        2681: "8cfb15607311eba8878b",
        2706: "cb1a7dfb676460bae171",
        2767: "1a7edb972132ace53c48",
        2824: "6490ccbc1f93dc7629f9",
        2844: "bad2a5b9fc36c7588b8e",
        2848: "e06be7015f1b1551d822",
        2942: "dec10a1b80854fcac418",
        3112: "6533772801ee3069cc12",
        3174: "3226ea34fb41a159f816",
        3185: "2121fb9e99ece7f77307",
        3252: "12ca6e1b45913bb7665e",
        3277: "6a7ef8e0cff6ddf252f9",
        3313: "ddf7a00ebdac1fde18bf",
        3323: "99aecc8e3ee90af44934",
        3334: "33010818531412c5f82e",
        3359: "7f7ab4464f27f22087ec",
        3453: "1ee9fe588b9503c078eb",
        3557: "7d51b795aca720b77fee",
        3599: "62ba2a2deca1bc20c44f",
        3634: "5857a1ab8407a3cce870",
        3655: "124e422b2b32ef3be531",
        3685: "450f53961a3afbbd89bc",
        3768: "a175079fc8e7948a1871",
        3863: "a007dc12d7fc8b25ba27",
        4033: "d89a5e38ca96c416b51c",
        4055: "dd561832c50d3e8515ec",
        4103: "9709b66dc05bd8b1deaa",
        4108: "6684e1f853670d7d4a48",
        4166: "723e2bc16eaf49996400",
        4171: "7eb6fed96c0717ba5fb0",
        4189: "39771ee76432675d2661",
        4199: "ed1af2b319bbc29946d0",
        4238: "2efe44511c434b28ad7a",
        4248: "88171067b55eef9c0b32",
        4297: "80406f89f7f153d46edf",
        4447: "25613b490862a77c33f8",
        4458: "bf77ef4a422413560ff1",
        4535: "541ae45584ba28badacd",
        4601: "4adceebfd2b9549e4c5b",
        4682: "b280ea34de7ce1d4b50e",
        4722: "49381971a9857a8e5dbd",
        4812: "7602c8b963a72ce5333f",
        4823: "9a509488a617fb2e60d2",
        4839: "eae275ac639a470582ed",
        4860: "bf4857ce3f375c2b4d72",
        4929: "f8e2c7b654dc580ffc2e",
        4935: "c92c353bc10f2d841522",
        4961: "95d66bb6c14dc045a71f",
        4964: "8e43aaafbdb9604bdf16",
        5117: "77d1a7b403d213f3a698",
        5257: "30deca15c0194ac68988",
        5414: "c607339de8ed4c2b0048",
        5438: "da661f56442e0dcb77e7",
        5572: "c4b0bb6ae0a6abb90975",
        5625: "cf532c65746598bfff5f",
        5631: "a32aaca3083ee0953bdb",
        5676: "fa099018c374ebd2c855",
        5706: "8ef6ff6dab65c5912411",
        5849: "442b1ee977a867774752",
        5855: "1039c5f93bd4e4a0f8a1",
        5925: "42ad036c8e71f5675baa",
        5933: "54145195a4d9ed643eea",
        5948: "a4d0f76c82121b2fa7f9",
        6007: "bb0e75bef45e45f65a05",
        6019: "56d01082e9c689b214e7",
        6035: "d04fe460cb8602e4908a",
        6087: "b852a7323419f1513fa1",
        6169: "8412393c3463399b84b9",
        6317: "01a41d177dc9101d5747",
        6319: "7613f0e78076440c8f27",
        6492: "5e2e62f3c02ff3fcbb73",
        6542: "de6cff02c9c1c4b5c0ac",
        6693: "4e5eb4f0cfc8743c7ef7",
        6699: "fc6b3031f4fffe956723",
        6762: "2e1f0ab367e4a170f0e4",
        6808: "44a4e8459ee97d86ea0c",
        6815: "dd91e2a445d804011a45",
        6817: "edbceb62b177345f9c36",
        6846: "f358fb1bb6d34498bbb8",
        7072: "280c4da852359eddb755",
        7082: "25be304e4e5a36ac28f0",
        7094: "56d18d53309247c36c9d",
        7181: "e0d39ef216608c27445f",
        7201: "a8d13707ce072144824c",
        7234: "e4d9f073ad7d4af0440e",
        7236: "d0126de3922757d542b4",
        7346: "d10f03fc1e751fef3941",
        7486: "06e83835cc9e13b204e1",
        7602: "d3f5f399219bcfbb3d87",
        7660: "17cd59f4512025adcd99",
        7724: "c8322269d2d47d1e5178",
        7762: "4deb4b8af0cb6d8e09f0",
        7781: "e7e8d6b386210bc4f503",
        7871: "189f4a4e4590fbbfc8b4",
        7890: "40780823ea6f60930ef9",
        7934: "bb44a349eff7c79360ba",
        7942: "0b0bd122a16d8e3ed219",
        7951: "17393f37c62d281f8beb",
        7952: "e32d610cbf3f4e6cba77",
        7975: "e43c8710fd46f7d48eeb",
        8001: "9e2eb06e9ed1704a9239",
        8051: "1889852be85e8f1f4d0b",
        8072: "264efebd8078b7c1e1a5",
        8155: "bef15dad642c74bca36a",
        8168: "be25e63012e67ba983c3",
        8385: "ec2604a6190451ec3fd9",
        8399: "832fd84c7ce2c24de085",
        8644: "098f7e412c328560d5a9",
        8676: "e0dbcf874aa4ff895d56",
        8751: "5cc9794503657bb8c5e2",
        8754: "55cc9a288192405bc156",
        8767: "98061182cc26791bc0c4",
        8774: "935c452dc6ebb2a7dfbd",
        8960: "9bd7556cc9bdcb948993",
        8974: "a1566bee518ff28eb9c8",
        8993: "ae2a7883c5e6d76ecf9d",
        8994: "f9e6e54bc5f99287682d",
        9062: "e410a2c12d94005ce42d",
        9154: "657dbc3599cdba2c835c",
        9431: "801d8715860ea61c2147",
        9568: "23a065ebe5978bce7469",
        9603: "5ffcebd7bf5c32c8b237",
        9663: "388eb0b2df9a75915d71",
        9753: "f78a9167f85468262c3d",
        9845: "3257d3a6ac28dda1b8cc",
        9899: "1f48f5aedcc9093f4b36",
        9903: "cd4a78393b471e50f3c5",
        9919: "de58d247468b7de2b3d0",
        9980: "d03ca2e80604f96d6d01",
      }[e]),
    (f.miniCssF = (e) =>
      "css/applications/appmgmt/" +
      {
        256: "chunk~68d776eed",
        2136: "events",
        2522: "logoedtior",
        2529: "pricingtool",
        3599: "adminpromoreviewdashboard",
        3655: "libraries~5da2a553c",
        3863: "publisherdashboard",
        4601: "broadcast",
        4935: "sdrconnections",
        5676: "steamlearn",
        6699: "steamdeck",
        6808: "resquemsg",
        7346: "chunk~e9c7aadaf",
        7660: "chunk~9e65e27a0",
        7762: "steamml",
        8644: "chunk~4ec87c66d",
        8974: "storeadmin",
      }[e] +
      ".css?contenthash=" +
      {
        256: "ffc5c15d247365d7522c",
        2136: "fe967e7cf6246b2db162",
        2522: "0657d544e37c72c3ae45",
        2529: "31b64e05b78ee07ade37",
        3599: "7d397c627b354e1a49cf",
        3655: "da3b05b688206293fc3e",
        3863: "35d7730f4c05b10b8330",
        4601: "f294db5e57c6dfd50f7b",
        4935: "33eb9d66d0507e03ca68",
        5676: "23d50183bb3539918f2b",
        6699: "4694d750def959727f73",
        6808: "7fdbc85de533f923151d",
        7346: "808c7d44cbd909698220",
        7660: "e085c9d6c8fafd085c4e",
        7762: "61877d984bfcf3e7f40f",
        8644: "e3389b8a5d95da6005c9",
        8974: "ef97f0938dd4f9cdcf4a",
      }[e]),
    (f.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (f.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (s = {}),
    (d = "appmgmt-storeadmin:"),
    (f.l = (e, a, n, c) => {
      if (s[e]) s[e].push(a);
      else {
        var r, i;
        if (void 0 !== n)
          for (
            var o = document.getElementsByTagName("script"), t = 0;
            t < o.length;
            t++
          ) {
            var b = o[t];
            if (
              b.getAttribute("src") == e ||
              b.getAttribute("data-webpack") == d + n
            ) {
              r = b;
              break;
            }
          }
        r ||
          ((i = !0),
          ((r = document.createElement("script")).charset = "utf-8"),
          (r.timeout = 120),
          f.nc && r.setAttribute("nonce", f.nc),
          r.setAttribute("data-webpack", d + n),
          (r.src = e)),
          (s[e] = [a]);
        var l = (a, n) => {
            (r.onerror = r.onload = null), clearTimeout(h);
            var d = s[e];
            if (
              (delete s[e],
              r.parentNode && r.parentNode.removeChild(r),
              d && d.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          h = setTimeout(
            l.bind(null, void 0, { type: "timeout", target: r }),
            12e4,
          );
        (r.onerror = l.bind(null, r.onerror)),
          (r.onload = l.bind(null, r.onload)),
          i && document.head.appendChild(r);
      }
    }),
    (f.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (f.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (f.p = ""),
    (() => {
      if ("undefined" != typeof document) {
        var e = (e) =>
            new Promise((a, n) => {
              var s = f.miniCssF(e),
                d = f.p + s;
              if (
                ((e, a) => {
                  for (
                    var n = document.getElementsByTagName("link"), s = 0;
                    s < n.length;
                    s++
                  ) {
                    var d =
                      (r = n[s]).getAttribute("data-href") ||
                      r.getAttribute("href");
                    if ("stylesheet" === r.rel && (d === e || d === a))
                      return r;
                  }
                  var c = document.getElementsByTagName("style");
                  for (s = 0; s < c.length; s++) {
                    var r;
                    if (
                      (d = (r = c[s]).getAttribute("data-href")) === e ||
                      d === a
                    )
                      return r;
                  }
                })(s, d)
              )
                return a();
              ((e, a, n, s, d) => {
                var c = document.createElement("link");
                (c.rel = "stylesheet"),
                  (c.type = "text/css"),
                  (c.onerror = c.onload =
                    (n) => {
                      if (((c.onerror = c.onload = null), "load" === n.type))
                        s();
                      else {
                        var r = n && n.type,
                          f = (n && n.target && n.target.href) || a,
                          i = new Error(
                            "Loading CSS chunk " +
                              e +
                              " failed.\n(" +
                              r +
                              ": " +
                              f +
                              ")",
                          );
                        (i.name = "ChunkLoadError"),
                          (i.code = "CSS_CHUNK_LOAD_FAILED"),
                          (i.type = r),
                          (i.request = f),
                          c.parentNode && c.parentNode.removeChild(c),
                          d(i);
                      }
                    }),
                  (c.href = a),
                  n
                    ? n.parentNode.insertBefore(c, n.nextSibling)
                    : document.head.appendChild(c);
              })(e, d, null, a, n);
            }),
          a = { 6700: 0 };
        f.f.miniCss = (n, s) => {
          a[n]
            ? s.push(a[n])
            : 0 !== a[n] &&
              {
                256: 1,
                2136: 1,
                2522: 1,
                2529: 1,
                3599: 1,
                3655: 1,
                3863: 1,
                4601: 1,
                4935: 1,
                5676: 1,
                6699: 1,
                6808: 1,
                7346: 1,
                7660: 1,
                7762: 1,
                8644: 1,
                8974: 1,
              }[n] &&
              s.push(
                (a[n] = e(n).then(
                  () => {
                    a[n] = 0;
                  },
                  (e) => {
                    throw (delete a[n], e);
                  },
                )),
              );
        };
      }
    })(),
    (() => {
      var e = { 6700: 0 };
      (f.f.j = (a, n) => {
        var s = f.o(e, a) ? e[a] : void 0;
        if (0 !== s)
          if (s) n.push(s[2]);
          else if (/^(6700|7346)$/.test(a)) e[a] = 0;
          else {
            var d = new Promise((n, d) => (s = e[a] = [n, d]));
            n.push((s[2] = d));
            var c = f.p + f.u(a),
              r = new Error();
            f.l(
              c,
              (n) => {
                if (f.o(e, a) && (0 !== (s = e[a]) && (e[a] = void 0), s)) {
                  var d = n && ("load" === n.type ? "missing" : n.type),
                    c = n && n.target && n.target.src;
                  (r.message =
                    "Loading chunk " + a + " failed.\n(" + d + ": " + c + ")"),
                    (r.name = "ChunkLoadError"),
                    (r.type = d),
                    (r.request = c),
                    s[1](r);
                }
              },
              "chunk-" + a,
              a,
            );
          }
      }),
        (f.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var s,
            d,
            [c, r, i] = n,
            o = 0;
          if (c.some((a) => 0 !== e[a])) {
            for (s in r) f.o(r, s) && (f.m[s] = r[s]);
            if (i) var t = i(f);
          }
          for (a && a(n); o < c.length; o++)
            (d = c[o]), f.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return f.O(t);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();

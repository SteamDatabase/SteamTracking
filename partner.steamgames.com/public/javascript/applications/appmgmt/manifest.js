/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8995522";
(() => {
  "use strict";
  var e,
    a,
    n,
    s,
    d,
    c = {},
    r = {};
  function i(e) {
    var a = r[e];
    if (void 0 !== a) return a.exports;
    var n = (r[e] = { id: e, loaded: !1, exports: {} });
    return c[e].call(n.exports, n, n.exports, i), (n.loaded = !0), n.exports;
  }
  (i.m = c),
    (e = []),
    (i.O = (a, n, s, d) => {
      if (!n) {
        var c = 1 / 0;
        for (b = 0; b < e.length; b++) {
          for (var [n, s, d] = e[b], r = !0, f = 0; f < n.length; f++)
            (!1 & d || c >= d) && Object.keys(i.O).every((e) => i.O[e](n[f]))
              ? n.splice(f--, 1)
              : ((r = !1), d < c && (c = d));
          if (r) {
            e.splice(b--, 1);
            var o = s();
            void 0 !== o && (a = o);
          }
        }
        return a;
      }
      d = d || 0;
      for (var b = e.length; b > 0 && e[b - 1][2] > d; b--) e[b] = e[b - 1];
      e[b] = [n, s, d];
    }),
    (i.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return i.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (i.t = function (e, s) {
      if ((1 & s && (e = this(e)), 8 & s)) return e;
      if ("object" == typeof e && e) {
        if (4 & s && e.__esModule) return e;
        if (16 & s && "function" == typeof e.then) return e;
      }
      var d = Object.create(null);
      i.r(d);
      var c = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var r = 2 & s && e; "object" == typeof r && !~a.indexOf(r); r = n(r))
        Object.getOwnPropertyNames(r).forEach((a) => (c[a] = () => e[a]));
      return (c.default = () => e), i.d(d, c), d;
    }),
    (i.d = (e, a) => {
      for (var n in a)
        i.o(a, n) &&
          !i.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: a[n] });
    }),
    (i.f = {}),
    (i.e = (e) =>
      Promise.all(Object.keys(i.f).reduce((a, n) => (i.f[n](e, a), a), []))),
    (i.u = (e) =>
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
        256: "a8cb2431c1a97888ef22",
        584: "e1edc835aed6bfafcd07",
        647: "4c92a2ff10fb7c7b9889",
        665: "19bc104ff59daeca9bd7",
        698: "67efb12d30264b1ff3c3",
        727: "30fbfca3999347758fc9",
        768: "405b03a06776d5cbea96",
        799: "7d24b947213db67ec356",
        819: "08aafc2c151efdb2cb78",
        874: "673c99f3f2ca2e9f3d91",
        903: "0cd9f4f727ba454b5c77",
        1012: "a94687869ea4380e2ede",
        1043: "a65118491a23cfff1a7e",
        1117: "acca0e2661b82d955054",
        1162: "ac5f60891ca5f41e5409",
        1164: "8f8e482754f9ce3aa203",
        1275: "382ecb527bed9b6d9bcd",
        1313: "f7a2c0f536e8c71b6d6c",
        1722: "9505761fface8382716d",
        1892: "34e3d5efe9e9689bf307",
        2029: "1f8815b3233836c06278",
        2136: "f95c7503297a6a43a696",
        2431: "1ddbbdb2c0edc00865c7",
        2443: "7f4600c48024a3a40297",
        2448: "950fec106f4427bacd12",
        2522: "17dae4e004521f1604e7",
        2529: "9d87fca51cf2727aba5b",
        2537: "26fcceda08dc4d959943",
        2581: "4b5fcf399ce0cc645d00",
        2601: "58f5680b3ac085ae05c8",
        2681: "8cfb15607311eba8878b",
        2706: "cb1a7dfb676460bae171",
        2767: "c8e81f118590a418c877",
        2824: "6490ccbc1f93dc7629f9",
        2844: "c3e3e7ecbeda94a8ed2f",
        2848: "2041726fb81605ae2d3a",
        2942: "b53cf48cf4cac7b76ee8",
        3112: "3d2dcc60333bd6f97b67",
        3174: "3226ea34fb41a159f816",
        3185: "d9c51b513cc3aa1db6e0",
        3252: "6eccb4e6d821fc59863f",
        3277: "f9f911fd015297040265",
        3313: "ddf7a00ebdac1fde18bf",
        3323: "142a00dd5ada4eee02f4",
        3334: "33010818531412c5f82e",
        3359: "1896bb76d1642f849174",
        3453: "8165f7b1f23431bb2c0b",
        3557: "a8cebf98bf5c32bd9ae5",
        3599: "62ba2a2deca1bc20c44f",
        3634: "318531ddd806aee009fc",
        3655: "124e422b2b32ef3be531",
        3685: "450f53961a3afbbd89bc",
        3768: "7cca886c6fe38cd53ff2",
        3863: "0c4a28205185e672de29",
        4033: "d89a5e38ca96c416b51c",
        4055: "dd561832c50d3e8515ec",
        4103: "9709b66dc05bd8b1deaa",
        4108: "905fb99d7e17150bc5c6",
        4166: "723e2bc16eaf49996400",
        4171: "7eb6fed96c0717ba5fb0",
        4189: "fd303c904daf6ac44d9f",
        4199: "ed1af2b319bbc29946d0",
        4238: "2efe44511c434b28ad7a",
        4248: "88171067b55eef9c0b32",
        4297: "ca1e7037f161ccc36df3",
        4447: "438633e331ec98f6136e",
        4458: "bf77ef4a422413560ff1",
        4535: "541ae45584ba28badacd",
        4601: "2471ab2fcf2f8b6fee54",
        4682: "b280ea34de7ce1d4b50e",
        4722: "4d773fe9ed647f61e7cf",
        4812: "7602c8b963a72ce5333f",
        4823: "d7634d7cfae224eed46f",
        4839: "eae275ac639a470582ed",
        4860: "12a400ad3247b55a76b1",
        4929: "f8e2c7b654dc580ffc2e",
        4935: "c92c353bc10f2d841522",
        4961: "95d66bb6c14dc045a71f",
        4964: "b48bd444bd3253c35a15",
        5117: "53ca2ec95ad87166e656",
        5257: "30deca15c0194ac68988",
        5414: "c607339de8ed4c2b0048",
        5438: "e37f04c1a145952dd11e",
        5572: "3a8442c201a47e83b459",
        5625: "6203885cbb51966113dc",
        5631: "a32aaca3083ee0953bdb",
        5676: "fa099018c374ebd2c855",
        5706: "8ef6ff6dab65c5912411",
        5849: "c424847a47a7b3c32e14",
        5855: "1039c5f93bd4e4a0f8a1",
        5925: "42ad036c8e71f5675baa",
        5933: "d090d6240803d7a9fd33",
        5948: "a4ea025a7cadab4e0a6b",
        6007: "2b8beb4d82c992d699ed",
        6019: "56d01082e9c689b214e7",
        6035: "d04fe460cb8602e4908a",
        6087: "ed3debc61a40ac49e6ab",
        6169: "8412393c3463399b84b9",
        6317: "01a41d177dc9101d5747",
        6319: "7613f0e78076440c8f27",
        6492: "d15ab2bd8b370d218056",
        6542: "b5f6430c1fd593bf8ff8",
        6693: "4e5eb4f0cfc8743c7ef7",
        6699: "fc6b3031f4fffe956723",
        6762: "2e1f0ab367e4a170f0e4",
        6808: "44a4e8459ee97d86ea0c",
        6815: "2e25c7e1670ca85fdb27",
        6817: "02f5d4cf0a77af9f0f27",
        6846: "f358fb1bb6d34498bbb8",
        7072: "9c248e1fb66499ad6ee4",
        7082: "25be304e4e5a36ac28f0",
        7094: "56d18d53309247c36c9d",
        7181: "e0d39ef216608c27445f",
        7201: "a8d13707ce072144824c",
        7234: "e4d9f073ad7d4af0440e",
        7236: "9e34ccbc34347411d9e8",
        7346: "d10f03fc1e751fef3941",
        7486: "1f880592ce78630a95b2",
        7602: "542ecaa30f99c6b5518b",
        7660: "ba7ea616f0161bb8b367",
        7724: "c8322269d2d47d1e5178",
        7762: "4deb4b8af0cb6d8e09f0",
        7781: "97e9017f465f1d9b0772",
        7871: "189f4a4e4590fbbfc8b4",
        7890: "56674e6c4c338b9c2c1a",
        7934: "bb44a349eff7c79360ba",
        7942: "0b0bd122a16d8e3ed219",
        7951: "b92ccfb9887700755052",
        7952: "e32d610cbf3f4e6cba77",
        7975: "776ca1c5e4456b6b0c6a",
        8001: "9e2eb06e9ed1704a9239",
        8051: "634383c20f9cfef4f994",
        8072: "264efebd8078b7c1e1a5",
        8155: "f7bb91400831ecb732d4",
        8168: "09e495b9ff0ad47f154d",
        8385: "15a0ea487b0dfa13d82d",
        8399: "832fd84c7ce2c24de085",
        8644: "8d720804070cc2c771e5",
        8676: "dca2297b3bfd99e27abe",
        8751: "5cc9794503657bb8c5e2",
        8754: "55cc9a288192405bc156",
        8767: "98061182cc26791bc0c4",
        8774: "935c452dc6ebb2a7dfbd",
        8960: "9bd7556cc9bdcb948993",
        8974: "a1566bee518ff28eb9c8",
        8993: "ae2a7883c5e6d76ecf9d",
        8994: "f9e6e54bc5f99287682d",
        9062: "3e7808d1669c290f5d03",
        9154: "1b3bd26e68639d145520",
        9431: "fcf57b62bb50891ffba0",
        9568: "6755c8bb41d17f739b5f",
        9603: "5ffcebd7bf5c32c8b237",
        9663: "e9869b6a177115f0c16a",
        9753: "ef82d93e2e2f132a7cfc",
        9845: "3257d3a6ac28dda1b8cc",
        9899: "1f48f5aedcc9093f4b36",
        9903: "cd4a78393b471e50f3c5",
        9919: "de58d247468b7de2b3d0",
        9980: "b9cc64e6cedc3b86fd4a",
      }[e]),
    (i.miniCssF = (e) =>
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
        3863: "90eccc821cbff66b81dd",
        4601: "f294db5e57c6dfd50f7b",
        4935: "33eb9d66d0507e03ca68",
        5676: "23d50183bb3539918f2b",
        6699: "4694d750def959727f73",
        6808: "7fdbc85de533f923151d",
        7346: "808c7d44cbd909698220",
        7660: "e085c9d6c8fafd085c4e",
        7762: "61877d984bfcf3e7f40f",
        8644: "4f4fcf437400eeaea4c4",
        8974: "ef97f0938dd4f9cdcf4a",
      }[e]),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (s = {}),
    (d = "appmgmt-storeadmin:"),
    (i.l = (e, a, n, c) => {
      if (s[e]) s[e].push(a);
      else {
        var r, f;
        if (void 0 !== n)
          for (
            var o = document.getElementsByTagName("script"), b = 0;
            b < o.length;
            b++
          ) {
            var t = o[b];
            if (
              t.getAttribute("src") == e ||
              t.getAttribute("data-webpack") == d + n
            ) {
              r = t;
              break;
            }
          }
        r ||
          ((f = !0),
          ((r = document.createElement("script")).charset = "utf-8"),
          (r.timeout = 120),
          i.nc && r.setAttribute("nonce", i.nc),
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
          f && document.head.appendChild(r);
      }
    }),
    (i.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (i.p = ""),
    (() => {
      if ("undefined" != typeof document) {
        var e = (e) =>
            new Promise((a, n) => {
              var s = i.miniCssF(e),
                d = i.p + s;
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
                          i = (n && n.target && n.target.href) || a,
                          f = new Error(
                            "Loading CSS chunk " +
                              e +
                              " failed.\n(" +
                              r +
                              ": " +
                              i +
                              ")",
                          );
                        (f.name = "ChunkLoadError"),
                          (f.code = "CSS_CHUNK_LOAD_FAILED"),
                          (f.type = r),
                          (f.request = i),
                          c.parentNode && c.parentNode.removeChild(c),
                          d(f);
                      }
                    }),
                  (c.href = a),
                  n
                    ? n.parentNode.insertBefore(c, n.nextSibling)
                    : document.head.appendChild(c);
              })(e, d, null, a, n);
            }),
          a = { 6700: 0 };
        i.f.miniCss = (n, s) => {
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
      (i.f.j = (a, n) => {
        var s = i.o(e, a) ? e[a] : void 0;
        if (0 !== s)
          if (s) n.push(s[2]);
          else if (/^(6700|7346)$/.test(a)) e[a] = 0;
          else {
            var d = new Promise((n, d) => (s = e[a] = [n, d]));
            n.push((s[2] = d));
            var c = i.p + i.u(a),
              r = new Error();
            i.l(
              c,
              (n) => {
                if (i.o(e, a) && (0 !== (s = e[a]) && (e[a] = void 0), s)) {
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
        (i.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var s,
            d,
            [c, r, f] = n,
            o = 0;
          if (c.some((a) => 0 !== e[a])) {
            for (s in r) i.o(r, s) && (i.m[s] = r[s]);
            if (f) var b = f(i);
          }
          for (a && a(n); o < c.length; o++)
            (d = c[o]), i.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return i.O(b);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();

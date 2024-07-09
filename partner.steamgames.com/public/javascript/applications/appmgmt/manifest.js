/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "9026475";
(() => {
  "use strict";
  var e,
    a,
    n,
    s,
    d,
    c = {},
    r = {};
  function b(e) {
    var a = r[e];
    if (void 0 !== a) return a.exports;
    var n = (r[e] = { id: e, loaded: !1, exports: {} });
    return c[e].call(n.exports, n, n.exports, b), (n.loaded = !0), n.exports;
  }
  (b.m = c),
    (e = []),
    (b.O = (a, n, s, d) => {
      if (!n) {
        var c = 1 / 0;
        for (o = 0; o < e.length; o++) {
          for (var [n, s, d] = e[o], r = !0, i = 0; i < n.length; i++)
            (!1 & d || c >= d) && Object.keys(b.O).every((e) => b.O[e](n[i]))
              ? n.splice(i--, 1)
              : ((r = !1), d < c && (c = d));
          if (r) {
            e.splice(o--, 1);
            var f = s();
            void 0 !== f && (a = f);
          }
        }
        return a;
      }
      d = d || 0;
      for (var o = e.length; o > 0 && e[o - 1][2] > d; o--) e[o] = e[o - 1];
      e[o] = [n, s, d];
    }),
    (b.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return b.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (b.t = function (e, s) {
      if ((1 & s && (e = this(e)), 8 & s)) return e;
      if ("object" == typeof e && e) {
        if (4 & s && e.__esModule) return e;
        if (16 & s && "function" == typeof e.then) return e;
      }
      var d = Object.create(null);
      b.r(d);
      var c = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var r = 2 & s && e; "object" == typeof r && !~a.indexOf(r); r = n(r))
        Object.getOwnPropertyNames(r).forEach((a) => (c[a] = () => e[a]));
      return (c.default = () => e), b.d(d, c), d;
    }),
    (b.d = (e, a) => {
      for (var n in a)
        b.o(a, n) &&
          !b.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: a[n] });
    }),
    (b.f = {}),
    (b.e = (e) =>
      Promise.all(Object.keys(b.f).reduce((a, n) => (b.f[n](e, a), a), []))),
    (b.u = (e) =>
      "javascript/applications/appmgmt/" +
      ({
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
        1264: "libraries~4eb095478",
        1275: "libraries~3c8297a47",
        1313: "shared_bulgarian-json",
        1722: "sales_czech-json",
        1892: "libraries~45b6949a4",
        2029: "shared_sc_schinese-json",
        2136: "events",
        2431: "shared_arabic-json",
        2443: "shared_latam-json",
        2448: "marketing_polish-json",
        2468: "chunk~9393bd9c1",
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
        3418: "chunk~962e493ff",
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
        5665: "chunk~76dd87ac4",
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
        8165: "libraries~fbdfc9496",
        8168: "main_vietnamese-json",
        8385: "shared_brazilian-json",
        8399: "marketing_indonesian-json",
        8644: "chunk~4ec87c66d",
        8676: "recappages",
        8751: "libraries~c7992ef56",
        8754: "libraries~68d776eed",
        8767: "sales_turkish-json",
        8774: "marketing_romanian-json",
        8820: "timelinemarkers",
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
      }[e] || e) +
      ".js?contenthash=" +
      {
        61: "ec46fa8bcebf5340e631",
        77: "c4afab9f5dcd578e4461",
        101: "a2068cf79b724087534e",
        256: "b5c713f2f367fb225908",
        584: "e1edc835aed6bfafcd07",
        647: "19273ca327a362a86080",
        665: "5dbf5322ed9ec0bdefef",
        698: "8dd6034299c62debbbc7",
        727: "2f3b256944429f41c3ce",
        768: "405b03a06776d5cbea96",
        799: "e32c18f5f99704b85304",
        819: "08aafc2c151efdb2cb78",
        874: "673c99f3f2ca2e9f3d91",
        903: "0cd9f4f727ba454b5c77",
        1012: "83b832742e9b0ad84f56",
        1043: "a65118491a23cfff1a7e",
        1117: "4c89ee55c6ce737f3dae",
        1162: "e9748a067ec5880afeae",
        1164: "8f8e482754f9ce3aa203",
        1264: "d55444228de0ac01d94e",
        1275: "382ecb527bed9b6d9bcd",
        1313: "0e84ffe165db349d5e8d",
        1722: "9505761fface8382716d",
        1892: "9d08e3665c3e12c4e64f",
        2029: "a7fb6b41ff0428bdaa46",
        2136: "c4f11754a6f9eb887036",
        2431: "1ddbbdb2c0edc00865c7",
        2443: "bb48cd9c2022700c82bf",
        2448: "950fec106f4427bacd12",
        2468: "b17c219fb7fb1c0a187f",
        2522: "656e408fb8d3240bd875",
        2529: "34bb884eab853b23d528",
        2537: "8e07c6191fe6b999726d",
        2581: "4b5fcf399ce0cc645d00",
        2601: "58f5680b3ac085ae05c8",
        2681: "8cfb15607311eba8878b",
        2706: "caf6b62de0c685d9f314",
        2767: "1326c5914e7af4c6fca6",
        2824: "6490ccbc1f93dc7629f9",
        2844: "b03a9aad131d17ccb83e",
        2848: "539fc89b889cb1f673ae",
        2942: "4264d74bfbd78f7bcc02",
        3102: "609c1811401c132eab3e",
        3112: "cbb7122ad7866cde91db",
        3174: "3226ea34fb41a159f816",
        3185: "0fb9e51ee1100d7ddb70",
        3252: "38f5bc4ec3206aa9d388",
        3277: "38278e454571a3079ca6",
        3313: "ddf7a00ebdac1fde18bf",
        3323: "59731051f7e504cf86e6",
        3334: "81ace1c8a340c0d49fbe",
        3359: "f950e46f82c8363f8bbd",
        3418: "584f42d1a307f4d85638",
        3453: "8165f7b1f23431bb2c0b",
        3557: "cc6ec3f8397e76969af9",
        3599: "72c8f349eb4f00729c1e",
        3634: "318531ddd806aee009fc",
        3655: "124e422b2b32ef3be531",
        3685: "450f53961a3afbbd89bc",
        3768: "4ae3fb122e40f44350eb",
        3863: "1ae0acda79343268173b",
        4033: "d89a5e38ca96c416b51c",
        4055: "dd561832c50d3e8515ec",
        4103: "9709b66dc05bd8b1deaa",
        4108: "f8e578f01b7c00911379",
        4166: "723e2bc16eaf49996400",
        4171: "7eb6fed96c0717ba5fb0",
        4189: "3d2e262d48faff2e985c",
        4199: "ed1af2b319bbc29946d0",
        4238: "2efe44511c434b28ad7a",
        4248: "88171067b55eef9c0b32",
        4297: "5f9e52c577b0522839b1",
        4447: "438633e331ec98f6136e",
        4458: "bf77ef4a422413560ff1",
        4535: "541ae45584ba28badacd",
        4601: "69788d69c21444585261",
        4682: "b280ea34de7ce1d4b50e",
        4722: "0328778a15c6c6d87e93",
        4812: "7602c8b963a72ce5333f",
        4823: "7aaceeb9fc6b6db03f5b",
        4839: "13417a17836d97d30957",
        4860: "f4cf4167fce1ee855011",
        4929: "f8e2c7b654dc580ffc2e",
        4935: "d0414c07685ee3699cd7",
        4961: "95d66bb6c14dc045a71f",
        4964: "cd5828474e110707bae1",
        5117: "2e6ed35f9b5efa536305",
        5257: "30deca15c0194ac68988",
        5414: "c607339de8ed4c2b0048",
        5438: "8b36ef0bc850040e53b9",
        5572: "80515fa95789ce3cc34a",
        5625: "3bd3741fc99273c55752",
        5631: "f3288e3400857f8f921b",
        5665: "8b1010d8b3a7db4b7fef",
        5676: "c1687465031e201b4dc5",
        5706: "a668320dcfe4e0df4b53",
        5849: "255a87487788786c789d",
        5855: "1039c5f93bd4e4a0f8a1",
        5925: "b3073dab891f1342738b",
        5933: "0f276bfb700cd768da80",
        5948: "88f3324a249f220a8fc8",
        6007: "81e3874bcf6de5fbcb14",
        6019: "56d01082e9c689b214e7",
        6035: "d04fe460cb8602e4908a",
        6087: "13e9c239c548171e47bc",
        6169: "8412393c3463399b84b9",
        6317: "2ad1f4f4dee45a21f991",
        6319: "36f7f19add304fd5c6e8",
        6492: "64aa5d88d1b4b604fa42",
        6542: "80fb86594e9fc714ece7",
        6693: "4e5eb4f0cfc8743c7ef7",
        6699: "6584d87e306ce3acc239",
        6762: "2e1f0ab367e4a170f0e4",
        6808: "4ee46da93a73fd31720f",
        6815: "588b5f04c433ff929096",
        6817: "24d05c489f93925b90dc",
        6846: "f358fb1bb6d34498bbb8",
        7072: "bb5ee6a06b8efb26f670",
        7082: "25be304e4e5a36ac28f0",
        7094: "56d18d53309247c36c9d",
        7181: "e0d39ef216608c27445f",
        7201: "a8d13707ce072144824c",
        7234: "5f877c01476946193fb1",
        7236: "47128815f415f8f74278",
        7486: "0b255c95fb3868a4e789",
        7602: "72892e757f64109d9408",
        7660: "43e16cc383758814aa4e",
        7724: "c8322269d2d47d1e5178",
        7762: "48ff5e099d24b40f523e",
        7781: "a263ab7432198ed05341",
        7871: "189f4a4e4590fbbfc8b4",
        7890: "37785cb4d0ab5ea6a8b7",
        7934: "bb44a349eff7c79360ba",
        7942: "0b0bd122a16d8e3ed219",
        7951: "cac89756fb2ec7898686",
        7952: "e32d610cbf3f4e6cba77",
        7975: "43cca9be1e8e7d52368d",
        8001: "9e2eb06e9ed1704a9239",
        8051: "628ef3df67b4ace38ff3",
        8072: "db88583ab685050905b3",
        8155: "45e7e76518178c803b1b",
        8165: "88ee5246342f8732022b",
        8168: "87dacae6b32cf5bd488f",
        8385: "d39413da95c1c97f0b95",
        8399: "832fd84c7ce2c24de085",
        8644: "3a4d8bf5a646d38c117e",
        8676: "b895733611060e33a8a1",
        8751: "5cc9794503657bb8c5e2",
        8754: "21198aeba253e32e6155",
        8767: "98061182cc26791bc0c4",
        8774: "935c452dc6ebb2a7dfbd",
        8820: "1929f29f8f0dd1c3829c",
        8960: "9bd7556cc9bdcb948993",
        8974: "43ba293135ed6672b046",
        8993: "ae2a7883c5e6d76ecf9d",
        8994: "f9e6e54bc5f99287682d",
        9062: "83be9e2daeb762eee77d",
        9154: "38e15bd909334c232ac7",
        9431: "a7c2728e3e775ec2329e",
        9568: "917ba076930944fc235e",
        9603: "000491081777b7712f30",
        9663: "58388d39e23d4ffab15a",
        9753: "3355718b1f2f0fb60f18",
        9845: "3071c58bad2160f6d8ee",
        9899: "1f48f5aedcc9093f4b36",
        9903: "29a994d74f516f2b18a4",
        9919: "de58d247468b7de2b3d0",
        9980: "7515630c6900b686766c",
      }[e]),
    (b.miniCssF = (e) =>
      "css/applications/appmgmt/" +
      {
        256: "chunk~68d776eed",
        1264: "libraries~4eb095478",
        2136: "events",
        2522: "logoedtior",
        2529: "pricingtool",
        3599: "adminpromoreviewdashboard",
        3655: "libraries~5da2a553c",
        3863: "publisherdashboard",
        4601: "broadcast",
        4935: "sdrconnections",
        5665: "chunk~76dd87ac4",
        5676: "steamlearn",
        6699: "steamdeck",
        6808: "resquemsg",
        7660: "chunk~9e65e27a0",
        7762: "steamml",
        8644: "chunk~4ec87c66d",
        8820: "timelinemarkers",
        8974: "storeadmin",
      }[e] +
      ".css?contenthash=" +
      {
        256: "ffc5c15d247365d7522c",
        1264: "7a9ed4301844918d1462",
        2136: "fe967e7cf6246b2db162",
        2522: "0657d544e37c72c3ae45",
        2529: "31b64e05b78ee07ade37",
        3599: "7d397c627b354e1a49cf",
        3655: "da3b05b688206293fc3e",
        3863: "f0b7f7158ac22f476a81",
        4601: "f294db5e57c6dfd50f7b",
        4935: "33eb9d66d0507e03ca68",
        5665: "808c7d44cbd909698220",
        5676: "b68398df6582aa322851",
        6699: "4694d750def959727f73",
        6808: "7fdbc85de533f923151d",
        7660: "72d8277c8fd3124cef03",
        7762: "61877d984bfcf3e7f40f",
        8644: "a205f9504f3568b88efa",
        8820: "0a722b24101ad400bc53",
        8974: "ef97f0938dd4f9cdcf4a",
      }[e]),
    (b.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (b.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (s = {}),
    (d = "appmgmt-storeadmin:"),
    (b.l = (e, a, n, c) => {
      if (s[e]) s[e].push(a);
      else {
        var r, i;
        if (void 0 !== n)
          for (
            var f = document.getElementsByTagName("script"), o = 0;
            o < f.length;
            o++
          ) {
            var t = f[o];
            if (
              t.getAttribute("src") == e ||
              t.getAttribute("data-webpack") == d + n
            ) {
              r = t;
              break;
            }
          }
        r ||
          ((i = !0),
          ((r = document.createElement("script")).charset = "utf-8"),
          (r.timeout = 120),
          b.nc && r.setAttribute("nonce", b.nc),
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
    (b.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (b.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (b.p = ""),
    (() => {
      if ("undefined" != typeof document) {
        var e = (e) =>
            new Promise((a, n) => {
              var s = b.miniCssF(e),
                d = b.p + s;
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
                          b = (n && n.target && n.target.href) || a,
                          i = new Error(
                            "Loading CSS chunk " +
                              e +
                              " failed.\n(" +
                              r +
                              ": " +
                              b +
                              ")",
                          );
                        (i.name = "ChunkLoadError"),
                          (i.code = "CSS_CHUNK_LOAD_FAILED"),
                          (i.type = r),
                          (i.request = b),
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
        b.f.miniCss = (n, s) => {
          a[n]
            ? s.push(a[n])
            : 0 !== a[n] &&
              {
                256: 1,
                1264: 1,
                2136: 1,
                2522: 1,
                2529: 1,
                3599: 1,
                3655: 1,
                3863: 1,
                4601: 1,
                4935: 1,
                5665: 1,
                5676: 1,
                6699: 1,
                6808: 1,
                7660: 1,
                7762: 1,
                8644: 1,
                8820: 1,
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
      (b.f.j = (a, n) => {
        var s = b.o(e, a) ? e[a] : void 0;
        if (0 !== s)
          if (s) n.push(s[2]);
          else if (/^(5665|6700)$/.test(a)) e[a] = 0;
          else {
            var d = new Promise((n, d) => (s = e[a] = [n, d]));
            n.push((s[2] = d));
            var c = b.p + b.u(a),
              r = new Error();
            b.l(
              c,
              (n) => {
                if (b.o(e, a) && (0 !== (s = e[a]) && (e[a] = void 0), s)) {
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
        (b.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var s,
            d,
            [c, r, i] = n,
            f = 0;
          if (c.some((a) => 0 !== e[a])) {
            for (s in r) b.o(r, s) && (b.m[s] = r[s]);
            if (i) var o = i(b);
          }
          for (a && a(n); f < c.length; f++)
            (d = c[f]), b.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return b.O(o);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();

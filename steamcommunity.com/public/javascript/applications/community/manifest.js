/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8284923";
(() => {
  "use strict";
  var a,
    e,
    n,
    o,
    c,
    i,
    s,
    t = {},
    d = {};
  function l(a) {
    var e = d[a];
    if (void 0 !== e) return e.exports;
    var n = (d[a] = { id: a, loaded: !1, exports: {} });
    return t[a].call(n.exports, n, n.exports, l), (n.loaded = !0), n.exports;
  }
  (l.m = t),
    (a = []),
    (l.O = (e, n, o, c) => {
      if (!n) {
        var i = 1 / 0;
        for (f = 0; f < a.length; f++) {
          for (var [n, o, c] = a[f], s = !0, t = 0; t < n.length; t++)
            (!1 & c || i >= c) && Object.keys(l.O).every((a) => l.O[a](n[t]))
              ? n.splice(t--, 1)
              : ((s = !1), c < i && (i = c));
          if (s) {
            a.splice(f--, 1);
            var d = o();
            void 0 !== d && (e = d);
          }
        }
        return e;
      }
      c = c || 0;
      for (var f = a.length; f > 0 && a[f - 1][2] > c; f--) a[f] = a[f - 1];
      a[f] = [n, o, c];
    }),
    (l.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return l.d(e, { a: e }), e;
    }),
    (n = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (l.t = function (a, o) {
      if ((1 & o && (a = this(a)), 8 & o)) return a;
      if ("object" == typeof a && a) {
        if (4 & o && a.__esModule) return a;
        if (16 & o && "function" == typeof a.then) return a;
      }
      var c = Object.create(null);
      l.r(c);
      var i = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var s = 2 & o && a; "object" == typeof s && !~e.indexOf(s); s = n(s))
        Object.getOwnPropertyNames(s).forEach((e) => (i[e] = () => a[e]));
      return (i.default = () => a), l.d(c, i), c;
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
        7192: "localization/sales_indonesian-json",
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
        27: "ceaf137a8143b0dd9173",
        113: "f035a7cdc7a7f866f345",
        131: "eecdc3951129ee663d71",
        146: "89b8486a77f09a3236db",
        238: "95d564736deb0443ccbe",
        301: "be7ea3171092da1b378d",
        312: "edfed8940515937f78fc",
        400: "a48995e70304d5c57877",
        483: "e439fa5133b101be247c",
        508: "1596968e35b2ed7dea1d",
        543: "92596e2ccfaa7bc641ca",
        617: "d901a082c4d9abc8f203",
        755: "df91f32f2cb90935de97",
        867: "b0c04c083285a7f92448",
        908: "2e1ba4342dd8df7eb7a3",
        960: "3326285853e7099cb1f9",
        961: "23fbd958d24ef4c2ceb6",
        1133: "a76920f47f83d1697276",
        1195: "48fe58b9002bc2fc1456",
        1261: "44c71ab0d19712eefe5a",
        1311: "f2711b02cc3052772c33",
        1496: "456f9aef77d62bb80442",
        1546: "7afbe5a34c83f6b271dc",
        1579: "8f14dc3d01baecc430ec",
        1649: "b6b632eee739e5b974c5",
        1909: "290f21221655f9bbbce5",
        1953: "a0c5941e1014fa877635",
        2136: "ebfb59a21e0a9b4f2189",
        2138: "540d50c8133a1bd34916",
        2235: "e17e32729e6df354e462",
        2329: "6ede7831cd4300fb2f63",
        2351: "5178f596884bc8b15093",
        2373: "f523a58c4b4aafb6fb5b",
        2449: "a47694abb9cfda8f1120",
        2468: "2d5e27cefd495455ecb3",
        2530: "c38b02abfff697952e30",
        2557: "f45a6b8636082747adab",
        2603: "5ee5743c9ecfa2e819c9",
        2723: "eeee73954621805996fb",
        2738: "c508873846320665f178",
        2745: "7f2aa37721c6f25ff870",
        2805: "bf0cf3cfd0a095629017",
        2822: "8627b93adaaaa716f5ce",
        2832: "ffcddd4c5814b7eeb905",
        3007: "5d7e8afcac5f64a946c0",
        3038: "d12ed7a673cff36ccabe",
        3068: "9f29231fef904aed6302",
        3202: "da131651a9d0462853ea",
        3298: "f33d1a163b67bf14dfac",
        3352: "d756a9d5f29196808a9c",
        3499: "6a6fa8bde0d7884d35e6",
        3520: "e2394e5454a2c94c0448",
        3591: "d2529dd968843003fe8b",
        3602: "476aaa429ec2084e3f22",
        3742: "12cdefe151723eba3003",
        3903: "a0efbdc0262e5aa9f3a7",
        3973: "76d9d7808882637f67b7",
        4040: "629427225439baab1193",
        4097: "8ba5b5794b6cc6d26dd8",
        4183: "248e8ebcf38b7dba79c0",
        4293: "c2e155281de0793e57f3",
        4358: "7278bd69b77586272185",
        4445: "d8823f15b8664fc1fcdd",
        4469: "38aca5b2f3740c4c883a",
        4487: "39fe62af5044b1ed716e",
        4513: "b698dd3d5114fed1292f",
        4535: "cfcf2cb7a2ca623e29ad",
        4601: "d614ec7b3a1b81aeaf5b",
        4729: "31df6e7584790f237129",
        4819: "8dff8e3f8d747e467d6d",
        4979: "d9aa94a61366cb4eedc7",
        5012: "472475dcd52871496da4",
        5119: "66d920f8746f56b5cce4",
        5277: "09dc2597ae18a577ced4",
        5279: "e9c3fa92c76aa49207c1",
        5436: "9c3ec0525cbf2e1a26ff",
        5439: "2fe1217a4449d2a33e41",
        5493: "0650c53aa95de1260475",
        5494: "a9268ea7f645c39bd670",
        5503: "7296fe86f98a5631ac0a",
        5757: "2700897b899f360e0993",
        6091: "a299fbb54180e1bdc81b",
        6148: "1ca0a59911794d934b2b",
        6272: "22e59eac2730d2551417",
        6378: "e330fd6c04ee78f54250",
        6403: "fa3a11a5ae0912e628e9",
        6415: "10e10e5f3f15585a5d8b",
        6457: "26678640371b94d19186",
        6588: "a5373e3d0e90ce9f0ed8",
        6656: "0620cc0db36da685d691",
        6658: "cb50e4de9152ebd0b97f",
        6715: "42f0cd146ea9e56a62e3",
        6844: "aae774be963a2c047dba",
        6845: "0d1cca6cefac86729018",
        6932: "e0903c22e069b8a1d266",
        6962: "21ad53a39ab57da6c735",
        7192: "3b011eb513c22009f9f5",
        7629: "8df718a4d27021d094c1",
        7660: "1bc707e62234674cae58",
        7769: "c1ff7ebac15ee2bb5298",
        7781: "17a4ff1e4203ddcc1cd9",
        7832: "6028229c5663ec81b618",
        7901: "b73da3debcabe1560bf1",
        7924: "908b08cb01f7d697699a",
        7942: "d6d580e1779f596635a8",
        7948: "4701980ccbf99473c130",
        7971: "cb835939a127f041568d",
        8085: "3305e691a4f9332fa3a0",
        8120: "c6af11e9ba26740862ce",
        8274: "2e26bc2eaaab2eac4324",
        8282: "c23ab284d03470295a24",
        8291: "9ca162a085d25939de47",
        8427: "09282f3b206f8df21b5f",
        8433: "a0974718698960f71f24",
        8525: "47078cb532273c848596",
        8592: "b985ae96e6215442125b",
        8647: "b6390c7ad92839ff7328",
        8691: "5f8c6308e15a113f3e35",
        8805: "49abd8b1b7471bdd5998",
        8931: "7b4331b3cf09aeeebf61",
        9167: "628cc5f8c8b69806f831",
        9233: "0f2483476ae5abf81659",
        9316: "666cac3de59b62d01c6a",
        9348: "22528a6b9eeb097ad655",
        9349: "8ab7038c304021f562d0",
        9389: "8175f3f3a907b6c22b96",
        9427: "0f5daed3adf6455d97e2",
        9513: "35258c7dc2109892991a",
        9547: "923f1a0e6ee6a57fe324",
        9561: "1305a3080afa6184fd82",
        9665: "a91a49230dc2400dd7ce",
        9828: "8e0d79f2738e34655b51",
        9854: "c8f7c4747ce57616f5e1",
        9888: "5fa48ac333e39a23de8e",
        9949: "fd7f67eb28f4865d8074",
        9951: "159a22b85e79d0c1545b",
        9991: "701f2f894029509c1633",
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
      }[a] +
      ".css?contenthash=" +
      {
        238: "9d553a26b9e194868478",
        312: "62d9d3172e8a21ccf304",
        400: "cd88e19d2c36d8397cda",
        508: "1a1c4b8f2b95850c7bfc",
        908: "4410eb623c003680bd1f",
        1909: "2fca35912c0825f76d76",
        2136: "8c359fa0555fa2bd2c5d",
        2329: "a969564f4cdabf0c473e",
        2449: "0d5e907913e9b6c322c3",
        2530: "e544311e04b182a5f6c4",
        3068: "b6e4e0dc417d633111af",
        3352: "f3838685918d3c88bdc3",
        3499: "f66814af59f83abee010",
        3520: "725e5c785d98d0c97dbe",
        3903: "fd3f85ef3102d792b6b0",
        4535: "120ef11d3786830c5571",
        4601: "7051786867362f304840",
        5436: "671dce66cf8a63ffd3ac",
        6272: "421aa9f56f19d4e59fdb",
        6845: "c5991fafb114f811dc73",
        8647: "2aa199fdf547121332be",
        8931: "4ca1ae04c77a330d340d",
        9348: "26d803a4798502279180",
        9349: "191ac183cba18bd1b386",
        9427: "150d99c79eb8c3ddebdf",
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
    (o = {}),
    (c = "community:"),
    (l.l = (a, e, n, i) => {
      if (o[a]) o[a].push(e);
      else {
        var s, t;
        if (void 0 !== n)
          for (
            var d = document.getElementsByTagName("script"), f = 0;
            f < d.length;
            f++
          ) {
            var r = d[f];
            if (
              r.getAttribute("src") == a ||
              r.getAttribute("data-webpack") == c + n
            ) {
              s = r;
              break;
            }
          }
        s ||
          ((t = !0),
          ((s = document.createElement("script")).charset = "utf-8"),
          (s.timeout = 120),
          l.nc && s.setAttribute("nonce", l.nc),
          s.setAttribute("data-webpack", c + n),
          (s.src = a)),
          (o[a] = [e]);
        var b = (e, n) => {
            (s.onerror = s.onload = null), clearTimeout(h);
            var c = o[a];
            if (
              (delete o[a],
              s.parentNode && s.parentNode.removeChild(s),
              c && c.forEach((a) => a(n)),
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
          t && document.head.appendChild(s);
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
    (i = (a) =>
      new Promise((e, n) => {
        var o = l.miniCssF(a),
          c = l.p + o;
        if (
          ((a, e) => {
            for (
              var n = document.getElementsByTagName("link"), o = 0;
              o < n.length;
              o++
            ) {
              var c =
                (s = n[o]).getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (c === a || c === e)) return s;
            }
            var i = document.getElementsByTagName("style");
            for (o = 0; o < i.length; o++) {
              var s;
              if ((c = (s = i[o]).getAttribute("data-href")) === a || c === e)
                return s;
            }
          })(o, c)
        )
          return e();
        ((a, e, n, o) => {
          var c = document.createElement("link");
          (c.rel = "stylesheet"),
            (c.type = "text/css"),
            (c.onerror = c.onload =
              (i) => {
                if (((c.onerror = c.onload = null), "load" === i.type)) n();
                else {
                  var s = i && ("load" === i.type ? "missing" : i.type),
                    t = (i && i.target && i.target.href) || e,
                    d = new Error(
                      "Loading CSS chunk " + a + " failed.\n(" + t + ")",
                    );
                  (d.code = "CSS_CHUNK_LOAD_FAILED"),
                    (d.type = s),
                    (d.request = t),
                    c.parentNode.removeChild(c),
                    o(d);
                }
              }),
            (c.href = e),
            document.head.appendChild(c);
        })(a, c, e, n);
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
          }[a] &&
          e.push(
            (s[a] = i(a).then(
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
        var o = l.o(a, e) ? a[e] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (/^(4601|6700)$/.test(e)) a[e] = 0;
          else {
            var c = new Promise((n, c) => (o = a[e] = [n, c]));
            n.push((o[2] = c));
            var i = l.p + l.u(e),
              s = new Error();
            l.l(
              i,
              (n) => {
                if (l.o(a, e) && (0 !== (o = a[e]) && (a[e] = void 0), o)) {
                  var c = n && ("load" === n.type ? "missing" : n.type),
                    i = n && n.target && n.target.src;
                  (s.message =
                    "Loading chunk " + e + " failed.\n(" + c + ": " + i + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = c),
                    (s.request = i),
                    o[1](s);
                }
              },
              "chunk-" + e,
              e,
            );
          }
      }),
        (l.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var o,
            c,
            [i, s, t] = n,
            d = 0;
          if (i.some((e) => 0 !== a[e])) {
            for (o in s) l.o(s, o) && (l.m[o] = s[o]);
            if (t) var f = t(l);
          }
          for (e && e(n); d < i.length; d++)
            (c = i[d]), l.o(a, c) && a[c] && a[c][0](), (a[c] = 0);
          return l.O(f);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();

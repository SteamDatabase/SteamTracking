/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7591892";
(() => {
  "use strict";
  var a,
    e,
    n,
    o,
    i,
    c,
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
    (d.O = (e, n, o, i) => {
      if (!n) {
        var c = 1 / 0;
        for (r = 0; r < a.length; r++) {
          for (var [n, o, i] = a[r], s = !0, t = 0; t < n.length; t++)
            (!1 & i || c >= i) && Object.keys(d.O).every((a) => d.O[a](n[t]))
              ? n.splice(t--, 1)
              : ((s = !1), i < c && (c = i));
          if (s) {
            a.splice(r--, 1);
            var l = o();
            void 0 !== l && (e = l);
          }
        }
        return e;
      }
      i = i || 0;
      for (var r = a.length; r > 0 && a[r - 1][2] > i; r--) a[r] = a[r - 1];
      a[r] = [n, o, i];
    }),
    (d.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return d.d(e, { a: e }), e;
    }),
    (n = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (d.t = function (a, o) {
      if ((1 & o && (a = this(a)), 8 & o)) return a;
      if ("object" == typeof a && a) {
        if (4 & o && a.__esModule) return a;
        if (16 & o && "function" == typeof a.then) return a;
      }
      var i = Object.create(null);
      d.r(i);
      var c = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var s = 2 & o && a; "object" == typeof s && !~e.indexOf(s); s = n(s))
        Object.getOwnPropertyNames(s).forEach((e) => (c[e] = () => a[e]));
      return (c.default = () => a), d.d(i, c), i;
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
        1421: "libraries~b1f9f17fd",
        1437: "libraries~3e64a5bb8",
        1546: "localization/sales_english-json",
        1579: "localization/shared_ukrainian-json",
        1649: "chunk~03410565e",
        1953: "localization/shared_finnish-json",
        2136: "events",
        2138: "localization/shared_thai-json",
        2235: "localization/sales_french-json",
        2329: "avatarcrop",
        2351: "localization/main_swedish-json",
        2373: "localization/sales_schinese-json",
        2468: "libraries~d2dd7ecf6",
        2557: "localization/main_ukrainian-json",
        2723: "localization/sales_polish-json",
        2738: "localization/shared_turkish-json",
        2745: "localization/sales_ukrainian-json",
        2805: "chunk~4b330692b",
        2822: "localization/shared_greek-json",
        3007: "localization/sales_finnish-json",
        3038: "localization/main_french-json",
        3058: "chunk~3e64a5bb8",
        3202: "localization/sales_vietnamese-json",
        3298: "localization/shared_brazilian-json",
        3352: "eventinternal",
        3499: "communityfaqs",
        3591: "localization/sales_bulgarian-json",
        3602: "localization/shared_dutch-json",
        3742: "chunk~c7a3fa389",
        3973: "chunk~4e3b43bb2",
        4097: "localization/shared_spanish-json",
        4183: "localization/shared_danish-json",
        4264: "libraries~7bb437d7f",
        4293: "localization/sales_german-json",
        4358: "localization/shared_sc_schinese-json",
        4445: "localization/shared_german-json",
        4469: "localization/shared_koreana-json",
        4487: "localization/shared_swedish-json",
        4513: "localization/shared_italian-json",
        4535: "login",
        4729: "localization/shared_french-json",
        4819: "localization/sales_tchinese-json",
        4979: "localization/sales_italian-json",
        5012: "localization/main_italian-json",
        5253: "chunk~7bb437d7f",
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
        6403: "localization/shared_russian-json",
        6415: "localization/main_brazilian-json",
        6437: "libraries~215b3e016",
        6457: "localization/main_turkish-json",
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
        8919: "chunk~215b3e016",
        9167: "localization/sales_thai-json",
        9233: "localization/main_japanese-json",
        9316: "localization/sales_romanian-json",
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
        9920: "chunk~6b6cfcb8f",
        9951: "localization/shared_latam-json",
        9991: "localization/sales_japanese-json",
      }[a] +
      ".js?contenthash=" +
      {
        27: "50152627ba65b7379b08",
        113: "8353b4e3860381a77ee6",
        131: "3fc0d7124ffacddb7500",
        238: "5711d8e8dd2f2351048d",
        301: "337ebe8eed90493b4277",
        312: "d998d8ed5dec6d11de48",
        400: "4c3558b0842104d76a3f",
        508: "ddd012d69d2bc011aca9",
        543: "7e04eee5a698b6b9ff11",
        617: "ef0ab84a9fecc5770019",
        755: "75e4c56b487b9631f274",
        867: "e4aaa649779c61def34f",
        908: "77f23d53c2282948f121",
        960: "9177f9bc01e55bfbf2d5",
        961: "d169ed195c760bf5472d",
        1133: "683c7531e2d5bc9b1601",
        1195: "af13a3ac50889ce1d8f3",
        1261: "a432c14ed6e0dbebf142",
        1311: "2a3f5f6eaa9f53a561db",
        1421: "ff32a78bb5b9198b59d1",
        1437: "e9c90791141b86a5609c",
        1546: "828e9c360f07290c4b9a",
        1579: "afd62bc5476608010fbf",
        1649: "37298c13dffbf9f91726",
        1953: "d341a1ad98e56ddf64ee",
        2136: "b37d12e95e4d8370c0e2",
        2138: "aa2b212e1cfce3279808",
        2235: "4e42fad4dab05d34aa6b",
        2329: "cd3c1b3a4d5d92ff9833",
        2351: "2f4d852fe7eada41c5b6",
        2373: "06251fd1a88d5e5852c4",
        2468: "40c30f97fc9888dc8641",
        2557: "c5055826d39f204acfa5",
        2723: "3774ba2b4701e88c8211",
        2738: "bfa7414cb4611497f9c8",
        2745: "0c6e64566e4b3c90d95b",
        2805: "651dadc986df604bf418",
        2822: "9b524169fdf1f41bee76",
        3007: "a34481d10a48c32d3923",
        3038: "c00e9d459c34a73917f8",
        3058: "fc0fcfdeba176f56310d",
        3202: "19d060b19bc21838d625",
        3298: "01b6c623a85182024d22",
        3352: "48befb0ce0b7282209ee",
        3499: "d57de60af34eb90a8e01",
        3591: "b971a2a6a62c1c00a12a",
        3602: "e1ad24f790fc298cc46f",
        3742: "1c69cb29f71f4489aba4",
        3973: "a615acabe3fa32a02752",
        4097: "eb2294bbd78c6f7b17a4",
        4183: "00f653a6118ffeeaa921",
        4264: "15461a535d2ba266df46",
        4293: "9a8be31db0af4246a123",
        4358: "f3dbe34a95fd4be51bb6",
        4445: "7a0fe80b39b0dfd6f101",
        4469: "bf3b3486d82d981136db",
        4487: "1b01d93f66331bf1959e",
        4513: "a7b94d08dc43cb90bf11",
        4535: "24da8b95e5a39ec4016a",
        4729: "38b8d0a87c183cfb8567",
        4819: "9fd6da0552df7f5a3d2a",
        4979: "16e78d33b1473245cc37",
        5012: "d4caa204db29356d3fde",
        5253: "83dc503329809b97892a",
        5277: "b0c0189f689a7b08646c",
        5279: "addac8b00ab1a703b13f",
        5436: "28ba227b74f615fa6ecc",
        5439: "ab8938bd06fb93a8566c",
        5493: "a34862c470533d4fa329",
        5494: "2897c946bb61da3dd35b",
        5503: "35e11901f59da58dda04",
        5757: "93f7b25c28dccfff1145",
        6091: "6d6677821073e985fbd3",
        6148: "5aca2d35a443fd3058d9",
        6272: "b9543292b680f6da11ad",
        6403: "b1e3cdea7805f01027a4",
        6415: "7c682c4f65acf019ee0a",
        6437: "caa49d3d01d07f13aeea",
        6457: "fa175c0f68275cd198d7",
        6656: "0feae8ebcbb7d0260166",
        6658: "80a98b3f2c0d35a00a06",
        6715: "ab5337832d5eb8f1f322",
        6844: "89508299cabd6160244c",
        6845: "32d99c940b4a277fd134",
        6932: "334e1af9e40ee3dad97d",
        6962: "f2fa4b366b9818415ea5",
        7629: "9de07f9a1a3ea1f4a8b4",
        7660: "f31c2070e6cc8c9ad0da",
        7769: "5cb1e211e4dd771b990f",
        7781: "5002fb812e13ed72d715",
        7832: "6d3214c50ca68865f871",
        7901: "49fcdcb452254b5c8da6",
        7924: "364f693b5dbac8eb7fdd",
        7971: "c5f36b8b1ee8cffc56cb",
        8085: "30941d1e02c452ca47fc",
        8120: "a725f04922216949c761",
        8274: "4495afc5fab13779499f",
        8282: "1bd0c80f2c8b2581ba5a",
        8291: "5baedae116bb28e5b50d",
        8427: "b7cd063717407e833ce1",
        8433: "678d8e115307b3805823",
        8525: "52c154092957401691b3",
        8592: "418f2359f42e875e6245",
        8647: "862ca126429db89196a9",
        8691: "9422b45f35c587cbb992",
        8805: "19027c3be0c0cbf16553",
        8919: "03149dab85d666818107",
        9167: "7b02d5ac7b50aa12061d",
        9233: "ee59823ea24da6d680d9",
        9316: "66488a79dddc2a6878ea",
        9349: "beab7eb6a3c36394ed6b",
        9389: "9807bdc2c8f977930af3",
        9427: "d23e5da02d6e70244e50",
        9513: "608ab4189971f6b78e5e",
        9547: "6492777e26f1bf8d4236",
        9561: "eaa6fe2cc381f1f30034",
        9665: "53cb5c08353c563dcc71",
        9828: "220d8afe7210f42ba6ac",
        9854: "f7801a3de663e351f643",
        9888: "2a883fbb25478d5822da",
        9920: "0df543503888b6e322a3",
        9951: "b4fa96d69b7ccec490db",
        9991: "dec68400ee17f6b34ffd",
      }[a]),
    (d.miniCssF = (a) =>
      "css/applications/community/" +
      {
        238: "communityawardsapp",
        312: "communityhomeheader",
        400: "chunk~b1f9f17fd",
        508: "chunk~d2dd7ecf6",
        908: "qanda",
        2136: "events",
        2329: "avatarcrop",
        3058: "chunk~3e64a5bb8",
        3352: "eventinternal",
        3499: "communityfaqs",
        3973: "chunk~4e3b43bb2",
        4535: "login",
        5253: "chunk~7bb437d7f",
        5436: "broadcasts",
        6272: "conference",
        6845: "profile",
        8647: "managefriends",
        8919: "chunk~215b3e016",
        9349: "eventeditor",
        9427: "chunk~642602239",
      }[a] +
      ".css?contenthash=" +
      {
        238: "e083c44bb9e2d8c48b8a",
        312: "d7d01e034284e686fbe9",
        400: "d97b692ec156f12123ff",
        508: "fb7a5ee6fc9cea849bbe",
        908: "402d6864700943e3ed5f",
        2136: "7677775ce82ff87c079e",
        2329: "70358f02752594d6bf7b",
        3058: "7103368f84cdee74a331",
        3352: "f3838685918d3c88bdc3",
        3499: "ceabdd14fa2e8fac8cdf",
        3973: "db54bbdbcf5df9c6132a",
        4535: "120ef11d3786830c5571",
        5253: "e0e1d877f0623e46d596",
        5436: "91056006a3e4d09e2c02",
        6272: "1c42df2359f38faeec7c",
        6845: "3f3faaebf755f0c5e867",
        8647: "67fdc171f31b8ee41a06",
        8919: "d9392781d4decd8ba27f",
        9349: "051a518f3e92dd04dbcc",
        9427: "0f337eeb47ed687f98ec",
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
    (o = {}),
    (i = "community:"),
    (d.l = (a, e, n, c) => {
      if (o[a]) o[a].push(e);
      else {
        var s, t;
        if (void 0 !== n)
          for (
            var l = document.getElementsByTagName("script"), r = 0;
            r < l.length;
            r++
          ) {
            var b = l[r];
            if (
              b.getAttribute("src") == a ||
              b.getAttribute("data-webpack") == i + n
            ) {
              s = b;
              break;
            }
          }
        s ||
          ((t = !0),
          ((s = document.createElement("script")).charset = "utf-8"),
          (s.timeout = 120),
          d.nc && s.setAttribute("nonce", d.nc),
          s.setAttribute("data-webpack", i + n),
          (s.src = a)),
          (o[a] = [e]);
        var f = (e, n) => {
            (s.onerror = s.onload = null), clearTimeout(h);
            var i = o[a];
            if (
              (delete o[a],
              s.parentNode && s.parentNode.removeChild(s),
              i && i.forEach((a) => a(n)),
              e)
            )
              return e(n);
          },
          h = setTimeout(
            f.bind(null, void 0, { type: "timeout", target: s }),
            12e4
          );
        (s.onerror = f.bind(null, s.onerror)),
          (s.onload = f.bind(null, s.onload)),
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
    (c = (a) =>
      new Promise((e, n) => {
        var o = d.miniCssF(a),
          i = d.p + o;
        if (
          ((a, e) => {
            for (
              var n = document.getElementsByTagName("link"), o = 0;
              o < n.length;
              o++
            ) {
              var i =
                (s = n[o]).getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (i === a || i === e)) return s;
            }
            var c = document.getElementsByTagName("style");
            for (o = 0; o < c.length; o++) {
              var s;
              if ((i = (s = c[o]).getAttribute("data-href")) === a || i === e)
                return s;
            }
          })(o, i)
        )
          return e();
        ((a, e, n, o) => {
          var i = document.createElement("link");
          (i.rel = "stylesheet"),
            (i.type = "text/css"),
            (i.onerror = i.onload =
              (c) => {
                if (((i.onerror = i.onload = null), "load" === c.type)) n();
                else {
                  var s = c && ("load" === c.type ? "missing" : c.type),
                    t = (c && c.target && c.target.href) || e,
                    l = new Error(
                      "Loading CSS chunk " + a + " failed.\n(" + t + ")"
                    );
                  (l.code = "CSS_CHUNK_LOAD_FAILED"),
                    (l.type = s),
                    (l.request = t),
                    i.parentNode.removeChild(i),
                    o(l);
                }
              }),
            (i.href = e),
            document.head.appendChild(i);
        })(a, i, e, n);
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
            2136: 1,
            2329: 1,
            3058: 1,
            3352: 1,
            3499: 1,
            3973: 1,
            4535: 1,
            5253: 1,
            5436: 1,
            6272: 1,
            6845: 1,
            8647: 1,
            8919: 1,
            9349: 1,
            9427: 1,
          }[a] &&
          e.push(
            (s[a] = c(a).then(
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
        var o = d.o(a, e) ? a[e] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (6700 != e) {
            var i = new Promise((n, i) => (o = a[e] = [n, i]));
            n.push((o[2] = i));
            var c = d.p + d.u(e),
              s = new Error();
            d.l(
              c,
              (n) => {
                if (d.o(a, e) && (0 !== (o = a[e]) && (a[e] = void 0), o)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    c = n && n.target && n.target.src;
                  (s.message =
                    "Loading chunk " + e + " failed.\n(" + i + ": " + c + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = i),
                    (s.request = c),
                    o[1](s);
                }
              },
              "chunk-" + e,
              e
            );
          } else a[e] = 0;
      }),
        (d.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var o,
            i,
            [c, s, t] = n,
            l = 0;
          if (c.some((e) => 0 !== a[e])) {
            for (o in s) d.o(s, o) && (d.m[o] = s[o]);
            if (t) var r = t(d);
          }
          for (e && e(n); l < c.length; l++)
            (i = c[l]), d.o(a, i) && a[i] && a[i][0](), (a[i] = 0);
          return d.O(r);
        },
        n = (self.webpackChunkcommunity = self.webpackChunkcommunity || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();

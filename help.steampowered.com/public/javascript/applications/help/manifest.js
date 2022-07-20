/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7385740";
!(function (s) {
  function a(a) {
    for (
      var n, e, o = a[0], i = a[1], c = a[2], t = 0, l = [];
      t < o.length;
      t++
    )
      (e = o[t]),
        Object.prototype.hasOwnProperty.call(d, e) && d[e] && l.push(d[e][0]),
        (d[e] = 0);
    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (s[n] = i[n]);
    for (h && h(a); l.length; ) l.shift()();
    return f.push.apply(f, c || []), r();
  }
  function r() {
    for (var a, n = 0; n < f.length; n++) {
      for (var e = f[n], o = !0, i = 1; i < e.length; i++) {
        var c = e[i];
        0 !== d[c] && (o = !1);
      }
      o && (f.splice(n--, 1), (a = b((b.s = e[0]))));
    }
    return a;
  }
  var e = {},
    d = { 61: 0 },
    f = [];
  function b(a) {
    if (e[a]) return e[a].exports;
    var n = (e[a] = { i: a, l: !1, exports: {} });
    return s[a].call(n.exports, n, n.exports, b), (n.l = !0), n.exports;
  }
  (b.e = function (o) {
    var i,
      c,
      a,
      t,
      n,
      e = [],
      l = d[o];
    return (
      0 !== l &&
        (l
          ? e.push(l[2])
          : ((n = new Promise(function (a, n) {
              l = d[o] = [a, n];
            })),
            e.push((l[2] = n)),
            ((i = document.createElement("script")).charset = "utf-8"),
            (i.timeout = 120),
            b.nc && i.setAttribute("nonce", b.nc),
            (i.src =
              b.p +
              "javascript/applications/help/" +
              ({
                1: "localization/main_brazilian-json",
                2: "localization/main_bulgarian-json",
                3: "localization/main_czech-json",
                4: "localization/main_danish-json",
                5: "localization/main_dutch-json",
                6: "localization/main_english-json",
                7: "localization/main_finnish-json",
                8: "localization/main_french-json",
                9: "localization/main_german-json",
                10: "localization/main_greek-json",
                11: "localization/main_hungarian-json",
                12: "localization/main_italian-json",
                13: "localization/main_japanese-json",
                14: "localization/main_koreana-json",
                15: "localization/main_latam-json",
                16: "localization/main_norwegian-json",
                17: "localization/main_polish-json",
                18: "localization/main_portuguese-json",
                19: "localization/main_romanian-json",
                20: "localization/main_russian-json",
                21: "localization/main_sc_schinese-json",
                22: "localization/main_schinese-json",
                23: "localization/main_spanish-json",
                24: "localization/main_swedish-json",
                25: "localization/main_tchinese-json",
                26: "localization/main_thai-json",
                27: "localization/main_turkish-json",
                28: "localization/main_ukrainian-json",
                29: "localization/main_vietnamese-json",
                30: "localization/shared_arabic-json",
                31: "localization/shared_brazilian-json",
                32: "localization/shared_bulgarian-json",
                33: "localization/shared_czech-json",
                34: "localization/shared_danish-json",
                35: "localization/shared_dutch-json",
                36: "localization/shared_english-json",
                37: "localization/shared_finnish-json",
                38: "localization/shared_french-json",
                39: "localization/shared_german-json",
                40: "localization/shared_greek-json",
                41: "localization/shared_hungarian-json",
                42: "localization/shared_italian-json",
                43: "localization/shared_japanese-json",
                44: "localization/shared_koreana-json",
                45: "localization/shared_latam-json",
                46: "localization/shared_norwegian-json",
                47: "localization/shared_polish-json",
                48: "localization/shared_portuguese-json",
                49: "localization/shared_romanian-json",
                50: "localization/shared_russian-json",
                51: "localization/shared_sc_schinese-json",
                52: "localization/shared_schinese-json",
                53: "localization/shared_spanish-json",
                54: "localization/shared_swedish-json",
                55: "localization/shared_tchinese-json",
                56: "localization/shared_thai-json",
                57: "localization/shared_turkish-json",
                58: "localization/shared_ukrainian-json",
                59: "localization/shared_vietnamese-json",
              }[(n = o)] || n) +
              ".js?contenthash=" +
              {
                1: "4efb97a8c23314ab1be4",
                2: "5332336935aed0efab68",
                3: "bfa923cf82f6f8a70928",
                4: "553d5409c79e8d6a45b1",
                5: "3ee8289c0896d07e7495",
                6: "0effc6ede768f17aa540",
                7: "0831d43e08e41b9d839d",
                8: "b0997e4b01c1e6a26154",
                9: "38d16855171f8d4e3b6e",
                10: "6d86af1a7af73292cf45",
                11: "170a8e558668092ffcff",
                12: "d5ce7b2a006c2036101e",
                13: "bf3b04a5b1f19f4d7844",
                14: "bf8eb0a567102494391d",
                15: "2f48cac146e347c71cce",
                16: "125447437e1870e503c8",
                17: "71f8cc4b7071d9cadd4d",
                18: "a48559a21a1ecb4e6274",
                19: "1ab02426ace5ad13c729",
                20: "39d288bdfba3df7ab1bf",
                21: "24ce77d3745487fd2392",
                22: "50f1a1f5c9c4e22292af",
                23: "6ee35b5672b119130ce9",
                24: "eb173002528a9a051b19",
                25: "db9088cfc3e4a338b997",
                26: "9d80b17fa35ade9aefb4",
                27: "dfe9f621c0bcd00a56ce",
                28: "d74e940972fe0d731d7f",
                29: "2705c0d47f1cf0496db5",
                30: "0945c679f8315e9cee04",
                31: "0eaccbf36526a2c79256",
                32: "891886a19ab4492b7c18",
                33: "f19ab52ecbec8ee0f302",
                34: "83e220ba9bfd7b10e606",
                35: "4d324502aa6490792f93",
                36: "40efed8d70157377c56a",
                37: "ec2255e76e6a83c31a06",
                38: "9c35d9060f9b67567033",
                39: "f1271813c63ab4d9b50f",
                40: "35f08f2c9c7c3dffd621",
                41: "453a4409c5545efc1482",
                42: "2f38072097efa5c34cc3",
                43: "180207f4029ed9147997",
                44: "820dbeb0bd641e7ba80e",
                45: "af630dbfd49978ef1f61",
                46: "5eb0f9372b4d1632f363",
                47: "1e0847e6a8c6df5452bb",
                48: "803799f6ad6bf1455162",
                49: "1bb5346b9a17e5d4a907",
                50: "c2b1fa0302dd55ec9c50",
                51: "441068202592e757ce83",
                52: "2394e9c933b8799e6d81",
                53: "95319eae2772d44d4680",
                54: "61531a86e8674763cebd",
                55: "9893330e810d56198ddc",
                56: "f556cb9101038a3cf9b6",
                57: "97996aded49aa21c066e",
                58: "55c69b64b2bfe634008a",
                59: "6de50215019d8382c5cb",
              }[n]),
            (c = new Error()),
            (a = function (a) {
              (i.onerror = i.onload = null), clearTimeout(t);
              var n,
                e = d[o];
              0 !== e &&
                (e &&
                  ((n = a && ("load" === a.type ? "missing" : a.type)),
                  (a = a && a.target && a.target.src),
                  (c.message =
                    "Loading chunk " + o + " failed.\n(" + n + ": " + a + ")"),
                  (c.name = "ChunkLoadError"),
                  (c.type = n),
                  (c.request = a),
                  e[1](c)),
                (d[o] = void 0));
            }),
            (t = setTimeout(function () {
              a({ type: "timeout", target: i });
            }, 12e4)),
            (i.onerror = i.onload = a),
            document.head.appendChild(i))),
      Promise.all(e)
    );
  }),
    (b.m = s),
    (b.c = e),
    (b.d = function (a, n, e) {
      b.o(a, n) || Object.defineProperty(a, n, { enumerable: !0, get: e });
    }),
    (b.r = function (a) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (b.t = function (n, a) {
      if ((1 & a && (n = b(n)), 8 & a)) return n;
      if (4 & a && "object" == typeof n && n && n.__esModule) return n;
      var e = Object.create(null);
      if (
        (b.r(e),
        Object.defineProperty(e, "default", { enumerable: !0, value: n }),
        2 & a && "string" != typeof n)
      )
        for (var o in n)
          b.d(
            e,
            o,
            function (a) {
              return n[a];
            }.bind(null, o)
          );
      return e;
    }),
    (b.n = function (a) {
      var n =
        a && a.__esModule
          ? function () {
              return a.default;
            }
          : function () {
              return a;
            };
      return b.d(n, "a", n), n;
    }),
    (b.o = function (a, n) {
      return Object.prototype.hasOwnProperty.call(a, n);
    }),
    (b.p = ""),
    (b.oe = function (a) {
      throw (console.error(a), a);
    });
  var n = (o = window.webpackJsonp = window.webpackJsonp || []).push.bind(o);
  o.push = a;
  for (var o = o.slice(), i = 0; i < o.length; i++) a(o[i]);
  var h = n;
  r();
})([]);

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7354766";
!(function (s) {
  function a(a) {
    for (
      var n, o, e = a[0], i = a[1], c = a[2], t = 0, l = [];
      t < e.length;
      t++
    )
      (o = e[t]),
        Object.prototype.hasOwnProperty.call(d, o) && d[o] && l.push(d[o][0]),
        (d[o] = 0);
    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (s[n] = i[n]);
    for (b && b(a); l.length; ) l.shift()();
    return f.push.apply(f, c || []), r();
  }
  function r() {
    for (var a, n = 0; n < f.length; n++) {
      for (var o = f[n], e = !0, i = 1; i < o.length; i++) {
        var c = o[i];
        0 !== d[c] && (e = !1);
      }
      e && (f.splice(n--, 1), (a = h((h.s = o[0]))));
    }
    return a;
  }
  var o = {},
    d = { 61: 0 },
    f = [];
  function h(a) {
    if (o[a]) return o[a].exports;
    var n = (o[a] = { i: a, l: !1, exports: {} });
    return s[a].call(n.exports, n, n.exports, h), (n.l = !0), n.exports;
  }
  (h.e = function (e) {
    var i,
      c,
      a,
      t,
      n,
      o = [],
      l = d[e];
    return (
      0 !== l &&
        (l
          ? o.push(l[2])
          : ((n = new Promise(function (a, n) {
              l = d[e] = [a, n];
            })),
            o.push((l[2] = n)),
            ((i = document.createElement("script")).charset = "utf-8"),
            (i.timeout = 120),
            h.nc && i.setAttribute("nonce", h.nc),
            (i.src =
              h.p +
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
              }[(n = e)] || n) +
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
                31: "cc1a0fed4b80209c271c",
                32: "32c244aa1cca545888d7",
                33: "5dc31f7918c887b181d5",
                34: "a2ae6eb418d55cbb5aa4",
                35: "5505109ac90966c1752d",
                36: "fc9faa48f006afca184f",
                37: "827181672a4e6d3622e9",
                38: "74a3978918a6a7988d4e",
                39: "fc29da9aba69c5eb7f01",
                40: "1380d6382e7d7533f919",
                41: "3514229409eeba4f0a21",
                42: "5f809cc6ece2fd77e8c2",
                43: "77e8cd181aa79fc95d45",
                44: "b387d6519551348d048b",
                45: "2223616d79f17ff8c9c0",
                46: "ae9023d358ce10c8e2a4",
                47: "99ff3f97c814657a0cc9",
                48: "981fcf93e71cdb48625c",
                49: "fb87b94b94c5cac31d31",
                50: "947a8a94d0071ecb5179",
                51: "441068202592e757ce83",
                52: "8d7c94f12a7cbe48a8c4",
                53: "28c9a6e7b347dd42e6fa",
                54: "deec662c27e58c01e63d",
                55: "ec81b5a790f27b102141",
                56: "e3fa29b81fb38b9f4166",
                57: "be80a0fd95fe88829f96",
                58: "e750038e931fcf2f1a24",
                59: "0dd7e87058408b2a8a98",
              }[n]),
            (c = new Error()),
            (a = function (a) {
              (i.onerror = i.onload = null), clearTimeout(t);
              var n,
                o = d[e];
              0 !== o &&
                (o &&
                  ((n = a && ("load" === a.type ? "missing" : a.type)),
                  (a = a && a.target && a.target.src),
                  (c.message =
                    "Loading chunk " + e + " failed.\n(" + n + ": " + a + ")"),
                  (c.name = "ChunkLoadError"),
                  (c.type = n),
                  (c.request = a),
                  o[1](c)),
                (d[e] = void 0));
            }),
            (t = setTimeout(function () {
              a({ type: "timeout", target: i });
            }, 12e4)),
            (i.onerror = i.onload = a),
            document.head.appendChild(i))),
      Promise.all(o)
    );
  }),
    (h.m = s),
    (h.c = o),
    (h.d = function (a, n, o) {
      h.o(a, n) || Object.defineProperty(a, n, { enumerable: !0, get: o });
    }),
    (h.r = function (a) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (h.t = function (n, a) {
      if ((1 & a && (n = h(n)), 8 & a)) return n;
      if (4 & a && "object" == typeof n && n && n.__esModule) return n;
      var o = Object.create(null);
      if (
        (h.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: n }),
        2 & a && "string" != typeof n)
      )
        for (var e in n)
          h.d(
            o,
            e,
            function (a) {
              return n[a];
            }.bind(null, e)
          );
      return o;
    }),
    (h.n = function (a) {
      var n =
        a && a.__esModule
          ? function () {
              return a.default;
            }
          : function () {
              return a;
            };
      return h.d(n, "a", n), n;
    }),
    (h.o = function (a, n) {
      return Object.prototype.hasOwnProperty.call(a, n);
    }),
    (h.p = ""),
    (h.oe = function (a) {
      throw (console.error(a), a);
    });
  var n = (e = window.webpackJsonp = window.webpackJsonp || []).push.bind(e);
  e.push = a;
  for (var e = e.slice(), i = 0; i < e.length; i++) a(e[i]);
  var b = n;
  r();
})([]);

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8949063";
(() => {
  "use strict";
  var e,
    a,
    n,
    s,
    d,
    c = {},
    b = {};
  function f(e) {
    var a = b[e];
    if (void 0 !== a) return a.exports;
    var n = (b[e] = { id: e, loaded: !1, exports: {} });
    return c[e].call(n.exports, n, n.exports, f), (n.loaded = !0), n.exports;
  }
  (f.m = c),
    (e = []),
    (f.O = (a, n, s, d) => {
      if (!n) {
        var c = 1 / 0;
        for (i = 0; i < e.length; i++) {
          for (var [n, s, d] = e[i], b = !0, o = 0; o < n.length; o++)
            (!1 & d || c >= d) && Object.keys(f.O).every((e) => f.O[e](n[o]))
              ? n.splice(o--, 1)
              : ((b = !1), d < c && (c = d));
          if (b) {
            e.splice(i--, 1);
            var r = s();
            void 0 !== r && (a = r);
          }
        }
        return a;
      }
      d = d || 0;
      for (var i = e.length; i > 0 && e[i - 1][2] > d; i--) e[i] = e[i - 1];
      e[i] = [n, s, d];
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
      for (var b = 2 & s && e; "object" == typeof b && !~a.indexOf(b); b = n(b))
        Object.getOwnPropertyNames(b).forEach((a) => (c[a] = () => e[a]));
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
      "javascript/applications/store/" +
      ({
        40: "steamawardsvote",
        61: "sales_russian-json",
        77: "sales_vietnamese-json",
        101: "sales_dutch-json",
        102: "loyalty_czech-json",
        230: "shoppingcart_dutch-json",
        259: "chunk~25b223c3b",
        291: "loyalty_portuguese-json",
        298: "loyalty_greek-json",
        319: "shoppingcart_swedish-json",
        388: "loyalty_tchinese-json",
        484: "loyalty_latam-json",
        556: "discoveryqueue",
        579: "shoppingcart_finnish-json",
        584: "sales_koreana-json",
        591: "loyalty_thai-json",
        627: "loyalty_japanese-json",
        639: "shoppingcart_greek-json",
        647: "main_czech-json",
        680: "saledisplay",
        686: "loyalty_russian-json",
        691: "chunk~618b6ee4b",
        698: "main_dutch-json",
        727: "main_japanese-json",
        799: "main_german-json",
        819: "marketing_turkish-json",
        874: "marketing_dutch-json",
        903: "marketing_russian-json",
        938: "messages_custom",
        988: "reviewaward",
        1012: "sales_romanian-json",
        1043: "sales_schinese-json",
        1117: "main_french-json",
        1162: "shared_thai-json",
        1164: "sales_norwegian-json",
        1236: "shoppingcart_portuguese-json",
        1313: "shared_bulgarian-json",
        1501: "gamemixer",
        1503: "shoppingcart_german-json",
        1712: "libraries~0f0129d36",
        1722: "sales_czech-json",
        1825: "deckverified",
        1918: "summersale2021story",
        2029: "shared_sc_schinese-json",
        2136: "events",
        2276: "libraries~52b0bef65",
        2301: "profileshowcases",
        2306: "loyalty_sc_schinese-json",
        2318: "shoppingcart_hungarian-json",
        2431: "shared_arabic-json",
        2443: "shared_latam-json",
        2448: "marketing_polish-json",
        2537: "shared_schinese-json",
        2581: "marketing_danish-json",
        2601: "marketing_spanish-json",
        2681: "sales_indonesian-json",
        2706: "libraries~b58ccb787",
        2730: "shoppingcart_sc_schinese-json",
        2767: "main_polish-json",
        2776: "shoppingcart_turkish-json",
        2814: "labssandbox",
        2824: "marketing_german-json",
        2844: "shared_japanese-json",
        2848: "main_ukrainian-json",
        2849: "shoppingcart_italian-json",
        2908: "shoppingcart_czech-json",
        2942: "main_tchinese-json",
        3035: "loyalty_brazilian-json",
        3068: "greenenvelope",
        3112: "shared_french-json",
        3143: "libraries~a5f6d3d85",
        3174: "sales_spanish-json",
        3185: "main_swedish-json",
        3207: "curatorreviewlistlanding",
        3238: "chunk~e78445ea0",
        3245: "libraries~9050a80be",
        3252: "shared_polish-json",
        3277: "main_romanian-json",
        3313: "sales_finnish-json",
        3321: "libraries~eededdba4",
        3323: "main_danish-json",
        3359: "main_bulgarian-json",
        3363: "loyalty_vietnamese-json",
        3369: "crossplatformjoin",
        3373: "libraries~17f3467db",
        3413: "pointsbundles",
        3424: "loyalty_polish-json",
        3453: "marketing_czech-json",
        3557: "shared_finnish-json",
        3634: "sales_bulgarian-json",
        3661: "libraries~618b6ee4b",
        3685: "sales_german-json",
        3711: "loyalty_spanish-json",
        3759: "loyalty_english-json",
        3766: "shoppingcart_english-json",
        3768: "main_finnish-json",
        3805: "steamawards",
        3807: "libraries~502f1f57b",
        3934: "loyalty_dutch-json",
        3935: "shoppingcart_thai-json",
        4033: "marketing_schinese-json",
        4103: "navevents",
        4108: "shared_norwegian-json",
        4118: "openindesktopclient",
        4158: "messages",
        4166: "sales_thai-json",
        4171: "marketing_koreana-json",
        4189: "shared_czech-json",
        4199: "marketing_french-json",
        4238: "marketing_thai-json",
        4248: "sales_polish-json",
        4297: "shared_greek-json",
        4385: "loyalty_ukrainian-json",
        4447: "sales_greek-json",
        4457: "loyalty_schinese-json",
        4458: "marketing_brazilian-json",
        4513: "shoppingcart_romanian-json",
        4535: "login",
        4566: "loyalty_italian-json",
        4601: "broadcast",
        4682: "sales_latam-json",
        4722: "main_koreana-json",
        4801: "libraries~d055c6576",
        4812: "sales_brazilian-json",
        4823: "shared_romanian-json",
        4860: "main_russian-json",
        4929: "marketing_english-json",
        4961: "sales_danish-json",
        4964: "shared_vietnamese-json",
        4965: "loyalty_bulgarian-json",
        4970: "chunk~0f0129d36",
        5024: "libraries~ecdbd68f7",
        5257: "marketing_portuguese-json",
        5331: "steamcharts",
        5414: "sales_portuguese-json",
        5438: "shared_turkish-json",
        5567: "loyalty_swedish-json",
        5575: "loyalty_indonesian-json",
        5625: "shared_swedish-json",
        5800: "fmgmt",
        5817: "shoppingcart_indonesian-json",
        5821: "accountpreferences",
        5831: "loyalty_french-json",
        5849: "shared_portuguese-json",
        5855: "sales_swedish-json",
        5925: "shared_dutch-json",
        5933: "shared_italian-json",
        5948: "shared_hungarian-json",
        6002: "chunk~ecdbd68f7",
        6007: "shared_german-json",
        6019: "marketing_swedish-json",
        6035: "marketing_ukrainian-json",
        6087: "main_latam-json",
        6099: "libraries~7815682d6",
        6169: "marketing_norwegian-json",
        6481: "loyalty_finnish-json",
        6492: "shared_spanish-json",
        6542: "shared_koreana-json",
        6571: "chunk~6377c4c7a",
        6693: "sales_italian-json",
        6762: "sales_sc_schinese-json",
        6802: "shoppingcart_bulgarian-json",
        6815: "main_english-json",
        6817: "main_spanish-json",
        6846: "marketing_vietnamese-json",
        6909: "libraries~1bf5a09d4",
        7072: "main_indonesian-json",
        7082: "marketing_japanese-json",
        7094: "sales_japanese-json",
        7117: "shoppingcart_polish-json",
        7131: "shoppingcart_koreana-json",
        7136: "shoppingcart_russian-json",
        7181: "sales_tchinese-json",
        7200: "libraries~c8d26a341",
        7236: "main_portuguese-json",
        7254: "loyalty_romanian-json",
        7280: "requestpurchase",
        7311: "shoppingcart",
        7323: "shoppingcart_schinese-json",
        7400: "libraries~6377c4c7a",
        7533: "main_sc_schinese-json",
        7548: "shoppingcart_brazilian-json",
        7586: "shoppingcart_ukrainian-json",
        7602: "shared_tchinese-json",
        7606: "shoppingcart_latam-json",
        7608: "loyalty_turkish-json",
        7724: "sales_french-json",
        7734: "loyalty_norwegian-json",
        7781: "shared_ukrainian-json",
        7814: "loyalty_koreana-json",
        7871: "marketing_greek-json",
        7890: "main_thai-json",
        7934: "sales_ukrainian-json",
        7942: "marketing_finnish-json",
        7951: "main_norwegian-json",
        7952: "sales_english-json",
        7975: "shared_english-json",
        8001: "marketing_italian-json",
        8038: "chunk~79213aea9",
        8051: "main_hungarian-json",
        8087: "yearinreview",
        8155: "main_italian-json",
        8168: "main_vietnamese-json",
        8359: "libraries~76eed14ef",
        8385: "shared_brazilian-json",
        8399: "marketing_indonesian-json",
        8429: "libraries~25b223c3b",
        8436: "libraries~78f3ad994",
        8443: "loyalty_danish-json",
        8589: "shoppingcart_danish-json",
        8754: "shared_indonesian-json",
        8767: "sales_turkish-json",
        8774: "marketing_romanian-json",
        8820: "libraries~3ee10b9cb",
        8873: "shoppingcart_spanish-json",
        8960: "marketing_bulgarian-json",
        8986: "loyaltystore",
        8993: "sales_hungarian-json",
        8994: "marketing_hungarian-json",
        9046: "loyalty_hungarian-json",
        9062: "shared_russian-json",
        9177: "libraries~e78445ea0",
        9197: "loyalty_german-json",
        9202: "shoppingcart_french-json",
        9429: "shoppingcart_vietnamese-json",
        9431: "main_brazilian-json",
        9568: "main_greek-json",
        9663: "main_turkish-json",
        9682: "interactiverecommender",
        9753: "shared_danish-json",
        9788: "eventadmin",
        9803: "shoppingcart_japanese-json",
        9830: "shoppingcart_tchinese-json",
        9899: "marketing_latam-json",
        9903: "marketing_tchinese-json",
        9919: "marketing_sc_schinese-json",
        9980: "main_schinese-json",
        9994: "shoppingcart_norwegian-json",
      }[e] || e) +
      ".js?contenthash=" +
      {
        40: "6c0a469e0759987aca6e",
        61: "5a342e380fa7236cd8a7",
        77: "86251872882c4851c662",
        101: "f63fa6c5af487b017e71",
        102: "f5e1526daa40b148d844",
        230: "b2c611c5983793d7f9a6",
        259: "dd4756b16b61eb4d6cde",
        291: "5d6c3ed79d04f457e023",
        298: "49ff6dd34f2615fc80d8",
        319: "0b0ad192f10235fce590",
        388: "645bedb9c8468b9718f9",
        460: "82571d7875dea9c593c3",
        484: "bdd0695928ca2fbae412",
        556: "9fc60580435acb513bbc",
        579: "6133be255b1d635b8bb0",
        584: "0aee0666368c879ac2dc",
        591: "70643159713404b1f0d4",
        627: "97773ec662a1765285fa",
        639: "2192100acdc52c74da0c",
        647: "ddda23f7334f495c5dc5",
        680: "63d218c03fbf0e36e1ce",
        686: "712c74fea4d5a097bba4",
        691: "067a7e79a73f3163644d",
        698: "76e2415eef0c409a59c8",
        708: "f38e8c85291489de5262",
        727: "c18cccdb7dca5ce586eb",
        799: "6232cd6ecc079a642a45",
        819: "1ca3cf2e6b44f54c81d7",
        874: "85d13a9fc16a70c2e3d9",
        903: "b4edb9215bb370c2c92b",
        938: "d117e3edfcb523a3156d",
        988: "50d727f4882b13847598",
        1012: "07988dd985032b4d589f",
        1043: "56659231420cca86300f",
        1117: "a5da83a532ea74e32353",
        1162: "410e53b07b2ca04f7efb",
        1164: "074e4f118c8bf0d088b1",
        1213: "b7ce0b893b90735b91aa",
        1236: "b017b98d3bca5131fba9",
        1313: "2236421fd07f86b942e3",
        1501: "c5111074f7f3602cfff5",
        1503: "4aa97b9e5c075e8c431c",
        1712: "ad058e4fce0ae57ec9a0",
        1722: "fad30277644854aa9604",
        1825: "f097962f1deae80205a1",
        1915: "99684bd0118d502971a0",
        1918: "e85db107548b1db1859a",
        2029: "ed8374477ac487741861",
        2136: "77b4b9f08e40265957f5",
        2276: "1108a339fa93a05747e7",
        2301: "4f2aaf88f7ddd4a3ba28",
        2306: "70cf206bb43caf3f0e25",
        2318: "36f6566b524fb93e57a7",
        2365: "782baa6afcb04e1f0949",
        2431: "e0ddd7268d4abe190256",
        2443: "6510e1b6199cab11f5ae",
        2448: "98d2484ee0563f242804",
        2537: "1aadcd8892fb24be4c10",
        2581: "074310775b4554ba3be5",
        2601: "ef3da0485d9c2de5499e",
        2681: "46cc1e31e9076307f34b",
        2706: "1bd8a6a887f233511739",
        2730: "9bacf5f280a5359fe694",
        2767: "729622788cc0b478b186",
        2776: "c1b1a32dcc866dab9df7",
        2814: "823e9669fa8c2c97b8fe",
        2824: "604eead12adb1df0e017",
        2844: "c47361f22f63528fbf27",
        2848: "0802afb3828bda383a9a",
        2849: "3140622edc63af15d92e",
        2908: "cc474b3b992c417f458f",
        2942: "7a7f18da60888fdb454f",
        3035: "a9c402defb1322f48941",
        3068: "5ca799a453a5334edf0d",
        3112: "89b985fda0ca3ab08b8c",
        3143: "4925b250da264491d35e",
        3174: "41bec3b51f5fab007057",
        3185: "c9b3f967927c1a4c53c4",
        3207: "24f79da23bd24469d42f",
        3238: "8f9d21b64c4f8ad667d0",
        3245: "b2541292e1bdc82d6ca1",
        3252: "475492b133f606a31ba3",
        3277: "3c9049eee0fef76da5f6",
        3313: "d5c330b3b097614ea35f",
        3321: "efd148350cbcf496ec0d",
        3323: "dc6c9ccb18f64f35bfec",
        3344: "95dd96dfc3a781c939ef",
        3359: "e423634eed4075f095bf",
        3363: "c0657c747fa8063a4565",
        3369: "458a114242b01c4c6eaa",
        3373: "884515c27baa03d92e33",
        3375: "b9abd9027f6dfe27bc3e",
        3398: "5fc6453855caf4cf8a33",
        3413: "99060f45058eec0eccff",
        3424: "3cd32d41867d2a2ff833",
        3425: "1c17d4cea6dd2f53a1c2",
        3453: "8d2e83423ab431f48e41",
        3540: "4ba1bc126862763a22fa",
        3557: "59dca65245be9f93b56b",
        3634: "a98d36593e9f1d43de25",
        3661: "5decc4f26601907fff51",
        3685: "7896098ade5695d101df",
        3711: "38bda0d14ecf6bca9d58",
        3759: "f16b144790ba94a71c37",
        3766: "26885e48dbbf2b4acbc2",
        3768: "ea9a852c35452ab5592d",
        3805: "763069a3dcc6d5f112cb",
        3807: "e151a4654de3652229c8",
        3934: "7024149ba49da9d486da",
        3935: "ac1d8f14dd1bf812271d",
        4033: "8f40b856bcd4b4d7f650",
        4103: "a4eb1ee72718a7bf1c88",
        4108: "8ad211e3ff00428eca05",
        4118: "da4addb2f9c6db0b0ffb",
        4158: "8e738cc77a95f7251029",
        4166: "2196da9e1218f80fd72f",
        4171: "93785f66875e3a4e1d13",
        4189: "ae667aafed553df93b11",
        4199: "4f92c8a0cdf60482c18c",
        4238: "873262d53951cc5665bd",
        4248: "24d4d76499a4dd26a929",
        4297: "1f4b77d3a2780535e011",
        4385: "d370eaa8c3ca22554c90",
        4447: "5d3ace3304722dd186c8",
        4457: "b456bb0013acda3752c8",
        4458: "450554341d52d5c573ef",
        4513: "779e53ee75095e1a5ed4",
        4535: "91407ead080f1c8a8e4c",
        4566: "0e4af289506346794988",
        4601: "38eb25fcc2070ade0463",
        4682: "cb7c7c0e0cf3d9499b31",
        4722: "264ad172381d8234a1f1",
        4801: "20cb3c7b30413242fd4d",
        4812: "d4df11a7aff07060ace9",
        4823: "6abf32ec4feb840638d2",
        4860: "a4aa421a79cbf6b42045",
        4929: "deef5c040fa6e28f22c9",
        4961: "4bba87ffdd1d61c7e7d3",
        4964: "11b8d6934ff9e7399c67",
        4965: "e137de29cfd60822137a",
        4970: "f2414e3798f1f910f187",
        5024: "173d60ebaa0408c01026",
        5164: "ebf4017f951a97a967d8",
        5257: "bacb32e0668815e9cdae",
        5331: "31e0a70a80e6e1551d09",
        5414: "95b7e118c5b336b67326",
        5438: "a17dcae00d11d8f5e339",
        5567: "2db7004f895d81b20c58",
        5575: "71baf24a0ff898fbceda",
        5625: "d6bccceb5a091e658468",
        5800: "85a86a9d3eaa0d093c22",
        5817: "7a120b0a2ab0137c870b",
        5821: "0eb0c5e379cd57e60615",
        5831: "633223b2c0769ce1a679",
        5849: "c5a044877dc71421e831",
        5855: "420f2219c6fcff783eaa",
        5925: "d5e261b0bbbeccdbb775",
        5933: "16bc3c03671b4fac5860",
        5944: "b26f0ec0e199f27f02df",
        5948: "361c2ace090dde61e9a7",
        6002: "1aa8df56646b44c72aee",
        6007: "0861dcd4733f44150358",
        6019: "64161299583608a95d61",
        6035: "4dad63b8f2767795376b",
        6087: "bc4cfec48986dccb7773",
        6099: "b0609819d693ff5e6b1f",
        6169: "4d54ef068feef0ab6497",
        6470: "4b5c03c8c1710ee35209",
        6481: "f60cbdb34282e805d5a8",
        6492: "7b5a72751506963e6161",
        6520: "efb10dc01188cfd7e8d7",
        6542: "4cda0ab03f25b05c2606",
        6571: "17287d25be7cdf695f68",
        6693: "63ad91d58170230dc84d",
        6762: "7651c5171f7a64459d7a",
        6802: "deca9f888dc24bca2bc0",
        6815: "66063d6776a38f9c00d5",
        6817: "3fd370e632cca9bd7745",
        6846: "bcd218418a2df7fcb0d6",
        6882: "5d95b6913c0da291e28a",
        6909: "de4f2d117cd4b36c2014",
        6957: "facb9a31c7175de6555e",
        7072: "dfac84c7101b8d671bd4",
        7082: "af50980ceb94a46fbfed",
        7094: "755ea5118ef88ad9e2df",
        7117: "066bdc89c5e950a95787",
        7131: "a2c2b1fae94678bb85e4",
        7136: "b694900a38845bdc4de4",
        7181: "2a9e80c468a3a26957b4",
        7200: "de55e3720e4bee45a995",
        7236: "a6636d6e0c6d449291da",
        7247: "4ed17150d6dd88abb853",
        7254: "5b7e2867a3a4fec5726e",
        7280: "e53c01d03dff3c63dbff",
        7311: "4576f321fc6c0a6d035e",
        7323: "277438f592a241ea5dce",
        7400: "3f5e48f5bc73e6ff906b",
        7533: "921eec24e54a4a4372e8",
        7548: "64c0af85afdd27382412",
        7586: "b3be29dbe9d0cb55d48b",
        7602: "fb9c9e1615c46fe7eec7",
        7606: "30a3003775bb7163b02f",
        7608: "b3aa16e398f84185ce2e",
        7695: "3eebddbb6c214077bfe1",
        7724: "62ded6370eda523dd75a",
        7734: "674a7c502dce75bd2fdc",
        7781: "42fae82918bbcd7499ef",
        7814: "869a65ebc0909a9733af",
        7871: "94f52d299c211755ac2b",
        7890: "ffaf9785748ccb4f3a20",
        7934: "a7189a0594d0e25e1e23",
        7942: "cbab886824c048dd6fe8",
        7951: "5fca3ca2c1e36710fb17",
        7952: "2427041da1c36f76f959",
        7975: "083949c85a2b910e8325",
        8001: "8fb7df1113425bc050d0",
        8015: "6d4dbc06e1ed4a215116",
        8038: "31bcd3959b81e49418b2",
        8051: "3a564e5adcadb4f0ee99",
        8087: "ccde31cbc4eada6c1717",
        8155: "e104f19155ca8cb88ee2",
        8168: "cec25ba9f16d0d31dfe8",
        8359: "40701b803819d5a00d28",
        8385: "b8e3fda48c691b17198b",
        8399: "9d6e9f0bbf31438d74e3",
        8429: "c4d76087672ad57f4d86",
        8436: "4b5ea1ef3c8e8658e064",
        8443: "4815fe5c8367b1755034",
        8589: "2bc29cbf0bf56bbf53aa",
        8754: "08d519ef97454b5612f3",
        8767: "be7d03764f2a6b932f52",
        8774: "180f990527cb0aaa93ac",
        8820: "1b0bf7f28457f26ab2d6",
        8873: "538f3658b321a534db72",
        8960: "4699d9195ff023b35173",
        8973: "3b5258e904ce4541e0df",
        8986: "039f94bf209017fd8dce",
        8993: "3e366ba95d755a78a8ec",
        8994: "bdc8b20479f09fecdb23",
        9046: "a2bf9beb73b025b5a012",
        9062: "07093584683bae8a34ea",
        9177: "fc36cd4cbcb4c87d1986",
        9197: "86f6bcc5d096d0bf0d3b",
        9202: "4756dcf6548ec373b77b",
        9424: "e3fdc3a6467ad6881798",
        9429: "ed8945fea7c8820014f6",
        9431: "6f8c28677a5180eecf9e",
        9568: "38629c5e946dab74eb2a",
        9663: "5f305e64ee6334146c06",
        9682: "4245d07dba3f06c90fab",
        9702: "43b2999f9a0d39ef91b5",
        9753: "7971e640642c51aedfdb",
        9766: "15948c5efdc437742490",
        9788: "3ef8afe78afe71def169",
        9803: "a7e3b475905c5bbb387f",
        9830: "1635bf56590e4c448a22",
        9899: "7ed8cb862fc309e14cc7",
        9903: "3f33786bf1e501553fb0",
        9919: "9e9efb89c425708e56fd",
        9980: "2c3252aac6953a7c1235",
        9994: "09a4c67edf7a9be2fc16",
      }[e]),
    (f.miniCssF = (e) =>
      "css/applications/store/" +
      ({
        40: "steamawardsvote",
        259: "chunk~25b223c3b",
        556: "discoveryqueue",
        680: "saledisplay",
        691: "chunk~618b6ee4b",
        938: "messages_custom",
        988: "reviewaward",
        1501: "gamemixer",
        1825: "deckverified",
        1918: "summersale2021story",
        2136: "events",
        2301: "profileshowcases",
        2814: "labssandbox",
        3068: "greenenvelope",
        3207: "curatorreviewlistlanding",
        3369: "crossplatformjoin",
        3413: "pointsbundles",
        3805: "steamawards",
        4118: "openindesktopclient",
        4158: "messages",
        4535: "login",
        4601: "broadcast",
        5331: "steamcharts",
        5800: "fmgmt",
        5821: "accountpreferences",
        7280: "requestpurchase",
        8038: "chunk~79213aea9",
        8087: "yearinreview",
        8986: "loyaltystore",
        9682: "interactiverecommender",
        9788: "eventadmin",
      }[e] || e) +
      ".css?contenthash=" +
      {
        40: "910c6b69ac682a78e937",
        259: "78115f5da4a287049766",
        556: "ed6fc8b95318136d4c4d",
        680: "1cbbc9892b1ce52bef59",
        691: "7a46e4c6d9b367ef3457",
        938: "4c262aa325de436f4eb2",
        988: "9697f81cbeeb8cd9b3dc",
        1501: "2b1461b106e19b8c5bdb",
        1825: "841fbcb9d567332b674c",
        1918: "26e16e826f71acbe014e",
        2136: "aef462affd99465c09ab",
        2301: "71a720367bf869035355",
        2365: "b0638531713eb6a85f4b",
        2814: "a5428a087e227eb83002",
        3068: "3d4d6b19dcf9ba69e58a",
        3207: "dcc9e4626bd98d1cb4bf",
        3369: "df7f69a8c3c1854555cc",
        3375: "85e2ebf349dd1b3a0dcb",
        3413: "007c6d51f7f7cf8bfb4c",
        3805: "8c566b99f98bcc81b2c3",
        4118: "04b4536fa97e978490cd",
        4158: "bc5c2553780f4cedd424",
        4535: "31a1587a28aa962de04a",
        4601: "f21789579b4fa4283541",
        5331: "bb1d5883f28cc01f7a79",
        5800: "92dcb0feabcb1d9e517a",
        5821: "97c40bcaeb4257f1498b",
        6470: "987fa2cb54097ed0b59a",
        7280: "85e2ebf349dd1b3a0dcb",
        8038: "d5405041da1a89efdf74",
        8087: "b05df96d865ed2f5e7c3",
        8986: "569fdb6caf4d93dca67c",
        9424: "65008c72e7e5586e0c2d",
        9682: "eed397d2384ce4c9efa6",
        9702: "3f63c9da7911b0c5c7b0",
        9788: "62ab65874cf8e4e802cb",
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
    (d = "store:"),
    (f.l = (e, a, n, c) => {
      if (s[e]) s[e].push(a);
      else {
        var b, o;
        if (void 0 !== n)
          for (
            var r = document.getElementsByTagName("script"), i = 0;
            i < r.length;
            i++
          ) {
            var t = r[i];
            if (
              t.getAttribute("src") == e ||
              t.getAttribute("data-webpack") == d + n
            ) {
              b = t;
              break;
            }
          }
        b ||
          ((o = !0),
          ((b = document.createElement("script")).charset = "utf-8"),
          (b.timeout = 120),
          f.nc && b.setAttribute("nonce", f.nc),
          b.setAttribute("data-webpack", d + n),
          (b.src = e)),
          (s[e] = [a]);
        var l = (a, n) => {
            (b.onerror = b.onload = null), clearTimeout(h);
            var d = s[e];
            if (
              (delete s[e],
              b.parentNode && b.parentNode.removeChild(b),
              d && d.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          h = setTimeout(
            l.bind(null, void 0, { type: "timeout", target: b }),
            12e4,
          );
        (b.onerror = l.bind(null, b.onerror)),
          (b.onload = l.bind(null, b.onload)),
          o && document.head.appendChild(b);
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
                      (b = n[s]).getAttribute("data-href") ||
                      b.getAttribute("href");
                    if ("stylesheet" === b.rel && (d === e || d === a))
                      return b;
                  }
                  var c = document.getElementsByTagName("style");
                  for (s = 0; s < c.length; s++) {
                    var b;
                    if (
                      (d = (b = c[s]).getAttribute("data-href")) === e ||
                      d === a
                    )
                      return b;
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
                        var b = n && n.type,
                          f = (n && n.target && n.target.href) || a,
                          o = new Error(
                            "Loading CSS chunk " +
                              e +
                              " failed.\n(" +
                              b +
                              ": " +
                              f +
                              ")",
                          );
                        (o.name = "ChunkLoadError"),
                          (o.code = "CSS_CHUNK_LOAD_FAILED"),
                          (o.type = b),
                          (o.request = f),
                          c.parentNode && c.parentNode.removeChild(c),
                          d(o);
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
                40: 1,
                259: 1,
                556: 1,
                680: 1,
                691: 1,
                938: 1,
                988: 1,
                1501: 1,
                1825: 1,
                1918: 1,
                2136: 1,
                2301: 1,
                2365: 1,
                2814: 1,
                3068: 1,
                3207: 1,
                3369: 1,
                3375: 1,
                3413: 1,
                3805: 1,
                4118: 1,
                4158: 1,
                4535: 1,
                4601: 1,
                5331: 1,
                5800: 1,
                5821: 1,
                6470: 1,
                7280: 1,
                8038: 1,
                8087: 1,
                8986: 1,
                9424: 1,
                9682: 1,
                9702: 1,
                9788: 1,
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
          else if (/^(3375|6700)$/.test(a)) e[a] = 0;
          else {
            var d = new Promise((n, d) => (s = e[a] = [n, d]));
            n.push((s[2] = d));
            var c = f.p + f.u(a),
              b = new Error();
            f.l(
              c,
              (n) => {
                if (f.o(e, a) && (0 !== (s = e[a]) && (e[a] = void 0), s)) {
                  var d = n && ("load" === n.type ? "missing" : n.type),
                    c = n && n.target && n.target.src;
                  (b.message =
                    "Loading chunk " + a + " failed.\n(" + d + ": " + c + ")"),
                    (b.name = "ChunkLoadError"),
                    (b.type = d),
                    (b.request = c),
                    s[1](b);
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
            [c, b, o] = n,
            r = 0;
          if (c.some((a) => 0 !== e[a])) {
            for (s in b) f.o(b, s) && (f.m[s] = b[s]);
            if (o) var i = o(f);
          }
          for (a && a(n); r < c.length; r++)
            (d = c[r]), f.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return f.O(i);
        },
        n = (self.webpackChunkstore = self.webpackChunkstore || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();

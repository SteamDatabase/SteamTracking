/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8875751";
(() => {
  "use strict";
  var e,
    a,
    n,
    s,
    d,
    c = {},
    f = {};
  function b(e) {
    var a = f[e];
    if (void 0 !== a) return a.exports;
    var n = (f[e] = { id: e, loaded: !1, exports: {} });
    return c[e].call(n.exports, n, n.exports, b), (n.loaded = !0), n.exports;
  }
  (b.m = c),
    (e = []),
    (b.O = (a, n, s, d) => {
      if (!n) {
        var c = 1 / 0;
        for (i = 0; i < e.length; i++) {
          for (var [n, s, d] = e[i], f = !0, o = 0; o < n.length; o++)
            (!1 & d || c >= d) && Object.keys(b.O).every((e) => b.O[e](n[o]))
              ? n.splice(o--, 1)
              : ((f = !1), d < c && (c = d));
          if (f) {
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
      for (var f = 2 & s && e; "object" == typeof f && !~a.indexOf(f); f = n(f))
        Object.getOwnPropertyNames(f).forEach((a) => (c[a] = () => e[a]));
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
        7161: "chunk~76eed14ef",
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
        40: "69e54e97227c80c190d4",
        61: "5a342e380fa7236cd8a7",
        77: "22c2d10de6100c378492",
        101: "f63fa6c5af487b017e71",
        102: "f5e1526daa40b148d844",
        230: "b2c611c5983793d7f9a6",
        259: "27a7e95b6158d1be9fbc",
        291: "5d6c3ed79d04f457e023",
        298: "49ff6dd34f2615fc80d8",
        319: "a8cf13351fa0a774d63c",
        344: "95b7550a32c811920611",
        388: "645bedb9c8468b9718f9",
        460: "82571d7875dea9c593c3",
        484: "c6f012d077297f20f800",
        556: "0aa3dce77476aac07ebc",
        579: "6133be255b1d635b8bb0",
        584: "4343c67d6821c962ed4e",
        591: "70643159713404b1f0d4",
        627: "97773ec662a1765285fa",
        639: "2192100acdc52c74da0c",
        647: "342dfc5eefd8b5114bf1",
        680: "3667800e43f5f013164d",
        686: "702b5ed734f4f213ae39",
        691: "431ca3c45c36feb43c17",
        698: "5e9d4214cbb17a6b0a31",
        727: "0f56ed8b93f37abd7cd6",
        799: "6cc5c0a0fe4118925340",
        819: "1ca3cf2e6b44f54c81d7",
        874: "85d13a9fc16a70c2e3d9",
        886: "7a1a53ca0dac712736bd",
        903: "30c4c0bb291bcd1c7cf3",
        938: "d117e3edfcb523a3156d",
        988: "50d727f4882b13847598",
        1012: "07988dd985032b4d589f",
        1021: "03069e0609d4e415db0a",
        1043: "56659231420cca86300f",
        1117: "a405a5af3b365ef034d8",
        1162: "f8669d9be78ab8f072c2",
        1164: "074e4f118c8bf0d088b1",
        1213: "b7ce0b893b90735b91aa",
        1236: "b017b98d3bca5131fba9",
        1313: "b0f57c384bdf326c8871",
        1503: "4aa97b9e5c075e8c431c",
        1712: "ad058e4fce0ae57ec9a0",
        1722: "fad30277644854aa9604",
        1825: "f097962f1deae80205a1",
        1915: "99684bd0118d502971a0",
        1918: "e85db107548b1db1859a",
        2029: "ed8374477ac487741861",
        2136: "6da8c695dd691627ead4",
        2276: "729544501b9c6e0461cf",
        2301: "4f2aaf88f7ddd4a3ba28",
        2306: "70cf206bb43caf3f0e25",
        2318: "36f6566b524fb93e57a7",
        2431: "e0ddd7268d4abe190256",
        2443: "3630e0954d5250759248",
        2448: "98d2484ee0563f242804",
        2537: "aad2b5ad15a70ea8a23f",
        2581: "074310775b4554ba3be5",
        2601: "ef3da0485d9c2de5499e",
        2681: "46cc1e31e9076307f34b",
        2706: "1bd8a6a887f233511739",
        2730: "9bacf5f280a5359fe694",
        2767: "e0695249f66dfdcf9b38",
        2776: "c1b1a32dcc866dab9df7",
        2814: "f4e64c4f5c3a1c33721c",
        2824: "604eead12adb1df0e017",
        2844: "5c6b36f07823746c1e75",
        2848: "65365e333c94f027742f",
        2849: "3140622edc63af15d92e",
        2908: "cc474b3b992c417f458f",
        2942: "1c50f34cd5d1270ae8af",
        3035: "a9c402defb1322f48941",
        3068: "b7acdf40e37f0ba6d0d4",
        3112: "f18b0ef1f029d62ca95d",
        3143: "4925b250da264491d35e",
        3174: "41bec3b51f5fab007057",
        3185: "fdf4f99bb0a43309583f",
        3207: "81bc78ff27590c7dbac2",
        3238: "8f9d21b64c4f8ad667d0",
        3243: "fc19ee2e98228834b1f2",
        3245: "b2541292e1bdc82d6ca1",
        3252: "9fb2eab60e4319e80ea8",
        3277: "4e7da634b12973f05b96",
        3313: "d5c330b3b097614ea35f",
        3321: "efd148350cbcf496ec0d",
        3323: "fcc978d617409eff6198",
        3344: "95dd96dfc3a781c939ef",
        3359: "9851f179963225a0ebcd",
        3363: "c0657c747fa8063a4565",
        3369: "91f7fa03d0dca44d2ab3",
        3373: "884515c27baa03d92e33",
        3375: "b9abd9027f6dfe27bc3e",
        3413: "99060f45058eec0eccff",
        3424: "ad1d533ca965a5d9c60e",
        3425: "1c17d4cea6dd2f53a1c2",
        3453: "8d2e83423ab431f48e41",
        3540: "4ba1bc126862763a22fa",
        3557: "d3618e17dbc3919db43b",
        3634: "a98d36593e9f1d43de25",
        3661: "51247272a7e6f22b072d",
        3685: "7896098ade5695d101df",
        3711: "60e8bbfc1e433f9a9031",
        3759: "f16b144790ba94a71c37",
        3766: "26885e48dbbf2b4acbc2",
        3768: "94a04f32109b94d7086e",
        3805: "adaf4ebd4a31338ab272",
        3807: "e151a4654de3652229c8",
        3934: "7024149ba49da9d486da",
        3935: "ac1d8f14dd1bf812271d",
        4033: "8f40b856bcd4b4d7f650",
        4103: "a4eb1ee72718a7bf1c88",
        4108: "5442a22ef81760eb97ea",
        4118: "b5a8bd93d2b9c6aff306",
        4158: "64ee4b40e7cf5afda7b6",
        4166: "2196da9e1218f80fd72f",
        4171: "fc511a4fa0eebb4e8739",
        4189: "0ebd072f28bc60cd2c62",
        4199: "4f92c8a0cdf60482c18c",
        4238: "873262d53951cc5665bd",
        4248: "24d4d76499a4dd26a929",
        4297: "8381533d4c3238cff282",
        4385: "d370eaa8c3ca22554c90",
        4447: "5d3ace3304722dd186c8",
        4457: "b456bb0013acda3752c8",
        4458: "a9c5be4e053c5253566a",
        4513: "779e53ee75095e1a5ed4",
        4535: "91407ead080f1c8a8e4c",
        4566: "0e4af289506346794988",
        4601: "2e4419518cfff7c2ea80",
        4682: "cb7c7c0e0cf3d9499b31",
        4722: "41dd25e29a71e0549dbd",
        4801: "20cb3c7b30413242fd4d",
        4812: "d4df11a7aff07060ace9",
        4823: "26f36567b085b978c8de",
        4860: "31f4cbb394e0d5b755f3",
        4929: "deef5c040fa6e28f22c9",
        4961: "4bba87ffdd1d61c7e7d3",
        4964: "6723063d32e0790bb64c",
        4965: "e137de29cfd60822137a",
        4970: "8c2196d061775d5eee9b",
        5024: "173d60ebaa0408c01026",
        5257: "bacb32e0668815e9cdae",
        5331: "834792dd0aeba7ad1086",
        5414: "95b7e118c5b336b67326",
        5438: "c7af1ac5c041368bcaa4",
        5567: "2db7004f895d81b20c58",
        5575: "71baf24a0ff898fbceda",
        5625: "243a173068b40ad5b59b",
        5800: "5816f94f6e6ec682e254",
        5817: "7a120b0a2ab0137c870b",
        5821: "984bb1040c19635c4e98",
        5831: "633223b2c0769ce1a679",
        5849: "70b9c3ea962c436207c3",
        5855: "420f2219c6fcff783eaa",
        5925: "547d3d81975f82c4b086",
        5933: "383a415ac2c495eb269b",
        5944: "b26f0ec0e199f27f02df",
        5948: "27c8069132871e584779",
        6002: "371287ccc5e460037b82",
        6007: "8d34a7e4a0bde2d6362b",
        6019: "febcb927ca907ed77ae9",
        6035: "4dad63b8f2767795376b",
        6087: "f08c52bb60e7475c6559",
        6099: "b0609819d693ff5e6b1f",
        6169: "4d54ef068feef0ab6497",
        6470: "4b5c03c8c1710ee35209",
        6481: "f60cbdb34282e805d5a8",
        6492: "3ae6ae560629dd88b411",
        6542: "577f9d5994d124186a41",
        6571: "17287d25be7cdf695f68",
        6693: "63ad91d58170230dc84d",
        6762: "7651c5171f7a64459d7a",
        6802: "deca9f888dc24bca2bc0",
        6815: "ed401e2e43b3ff14e127",
        6817: "430ac020d1b39b0a344e",
        6846: "e435deb8a5f7c8d35d08",
        6882: "5d95b6913c0da291e28a",
        6909: "de4f2d117cd4b36c2014",
        6957: "facb9a31c7175de6555e",
        7072: "9c9df6157e9d95f64de3",
        7082: "af50980ceb94a46fbfed",
        7094: "755ea5118ef88ad9e2df",
        7117: "066bdc89c5e950a95787",
        7131: "a2c2b1fae94678bb85e4",
        7136: "b694900a38845bdc4de4",
        7161: "f5e0736200511a4cb8eb",
        7181: "2a9e80c468a3a26957b4",
        7200: "de55e3720e4bee45a995",
        7236: "6d129525218250e2fc84",
        7247: "4ed17150d6dd88abb853",
        7254: "5b7e2867a3a4fec5726e",
        7280: "e53c01d03dff3c63dbff",
        7311: "4576f321fc6c0a6d035e",
        7323: "277438f592a241ea5dce",
        7400: "3f5e48f5bc73e6ff906b",
        7533: "921eec24e54a4a4372e8",
        7548: "64c0af85afdd27382412",
        7586: "b3be29dbe9d0cb55d48b",
        7602: "1a3150de27b9219ded0b",
        7606: "30a3003775bb7163b02f",
        7608: "b3aa16e398f84185ce2e",
        7695: "3eebddbb6c214077bfe1",
        7724: "62ded6370eda523dd75a",
        7734: "674a7c502dce75bd2fdc",
        7781: "41935a05d4afada54722",
        7814: "869a65ebc0909a9733af",
        7871: "f8001293b6a9b88fe5e0",
        7890: "f589838c0178156f353f",
        7934: "a7189a0594d0e25e1e23",
        7942: "49c6fde8b0084ce41b40",
        7951: "0179da824f72e7257e6a",
        7952: "2427041da1c36f76f959",
        7975: "5d5695fb396c15f460bf",
        8001: "8fb7df1113425bc050d0",
        8015: "6d4dbc06e1ed4a215116",
        8038: "220448c3d15e0135c528",
        8051: "b8ef13268a9962c434df",
        8087: "a1e2d3bf3dfd448d86ae",
        8155: "20a3bce4df4e833ad040",
        8168: "c5a9ca6a750b99ee065b",
        8359: "40701b803819d5a00d28",
        8385: "f07b2b4f28701bebadb4",
        8399: "83fc0e68256cf514483a",
        8436: "4b5ea1ef3c8e8658e064",
        8443: "4815fe5c8367b1755034",
        8589: "2bc29cbf0bf56bbf53aa",
        8754: "ffde1dbd20cb17923f08",
        8767: "be7d03764f2a6b932f52",
        8774: "180f990527cb0aaa93ac",
        8820: "1b0bf7f28457f26ab2d6",
        8873: "538f3658b321a534db72",
        8960: "4699d9195ff023b35173",
        8973: "3b5258e904ce4541e0df",
        8986: "7771730cbff1b2857068",
        8993: "3e366ba95d755a78a8ec",
        8994: "bdc8b20479f09fecdb23",
        9046: "a2bf9beb73b025b5a012",
        9062: "1d413ef2fd1e8ebcb8b5",
        9177: "888b8d200ded115bf4d8",
        9197: "86f6bcc5d096d0bf0d3b",
        9202: "4756dcf6548ec373b77b",
        9424: "b2fd7a2d61c6e49d9951",
        9429: "ed8945fea7c8820014f6",
        9431: "7d7ddb173e29ba7bc47e",
        9568: "5cd9e4bde043c1ba57a9",
        9663: "01bcfd1a177b916c8a59",
        9682: "a8a90cfb916c1132ccb5",
        9702: "032353180a759e198a0a",
        9753: "aef5719849aa448a1a9e",
        9766: "15948c5efdc437742490",
        9788: "3ef8afe78afe71def169",
        9803: "a7e3b475905c5bbb387f",
        9830: "1635bf56590e4c448a22",
        9868: "524a615e3228adeef46c",
        9899: "7ed8cb862fc309e14cc7",
        9903: "3f33786bf1e501553fb0",
        9919: "9e9efb89c425708e56fd",
        9980: "2c0302ba80c3d4ac8b43",
        9994: "09a4c67edf7a9be2fc16",
      }[e]),
    (b.miniCssF = (e) =>
      "css/applications/store/" +
      ({
        40: "steamawardsvote",
        259: "chunk~25b223c3b",
        556: "discoveryqueue",
        680: "saledisplay",
        691: "chunk~618b6ee4b",
        938: "messages_custom",
        988: "reviewaward",
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
        259: "6ba90b2e6e58b1faf6d0",
        344: "b0638531713eb6a85f4b",
        556: "ed6fc8b95318136d4c4d",
        680: "1cbbc9892b1ce52bef59",
        691: "7a46e4c6d9b367ef3457",
        938: "4c262aa325de436f4eb2",
        988: "9697f81cbeeb8cd9b3dc",
        1825: "841fbcb9d567332b674c",
        1918: "26e16e826f71acbe014e",
        2136: "aef462affd99465c09ab",
        2301: "71a720367bf869035355",
        2814: "a5428a087e227eb83002",
        3068: "d34c816ae669e9d8a0b4",
        3207: "dcc9e4626bd98d1cb4bf",
        3369: "df7f69a8c3c1854555cc",
        3375: "85e2ebf349dd1b3a0dcb",
        3413: "007c6d51f7f7cf8bfb4c",
        3805: "8c566b99f98bcc81b2c3",
        4118: "04b4536fa97e978490cd",
        4158: "bc5c2553780f4cedd424",
        4535: "31a1587a28aa962de04a",
        4601: "f21789579b4fa4283541",
        5331: "8bfd6705caf477afa46f",
        5800: "c099d17863f80a1226a2",
        5821: "76564da35838461144c0",
        6470: "987fa2cb54097ed0b59a",
        7280: "85e2ebf349dd1b3a0dcb",
        8038: "d5405041da1a89efdf74",
        8087: "b05df96d865ed2f5e7c3",
        8986: "8255c2e6b86cfc971804",
        9424: "65008c72e7e5586e0c2d",
        9682: "eed397d2384ce4c9efa6",
        9702: "3f63c9da7911b0c5c7b0",
        9788: "62ab65874cf8e4e802cb",
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
    (d = "store:"),
    (b.l = (e, a, n, c) => {
      if (s[e]) s[e].push(a);
      else {
        var f, o;
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
              f = t;
              break;
            }
          }
        f ||
          ((o = !0),
          ((f = document.createElement("script")).charset = "utf-8"),
          (f.timeout = 120),
          b.nc && f.setAttribute("nonce", b.nc),
          f.setAttribute("data-webpack", d + n),
          (f.src = e)),
          (s[e] = [a]);
        var l = (a, n) => {
            (f.onerror = f.onload = null), clearTimeout(h);
            var d = s[e];
            if (
              (delete s[e],
              f.parentNode && f.parentNode.removeChild(f),
              d && d.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          h = setTimeout(
            l.bind(null, void 0, { type: "timeout", target: f }),
            12e4,
          );
        (f.onerror = l.bind(null, f.onerror)),
          (f.onload = l.bind(null, f.onload)),
          o && document.head.appendChild(f);
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
                      (f = n[s]).getAttribute("data-href") ||
                      f.getAttribute("href");
                    if ("stylesheet" === f.rel && (d === e || d === a))
                      return f;
                  }
                  var c = document.getElementsByTagName("style");
                  for (s = 0; s < c.length; s++) {
                    var f;
                    if (
                      (d = (f = c[s]).getAttribute("data-href")) === e ||
                      d === a
                    )
                      return f;
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
                        var f = n && n.type,
                          b = (n && n.target && n.target.href) || a,
                          o = new Error(
                            "Loading CSS chunk " +
                              e +
                              " failed.\n(" +
                              f +
                              ": " +
                              b +
                              ")",
                          );
                        (o.name = "ChunkLoadError"),
                          (o.code = "CSS_CHUNK_LOAD_FAILED"),
                          (o.type = f),
                          (o.request = b),
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
        b.f.miniCss = (n, s) => {
          a[n]
            ? s.push(a[n])
            : 0 !== a[n] &&
              {
                40: 1,
                259: 1,
                344: 1,
                556: 1,
                680: 1,
                691: 1,
                938: 1,
                988: 1,
                1825: 1,
                1918: 1,
                2136: 1,
                2301: 1,
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
      (b.f.j = (a, n) => {
        var s = b.o(e, a) ? e[a] : void 0;
        if (0 !== s)
          if (s) n.push(s[2]);
          else if (/^(3375|6700)$/.test(a)) e[a] = 0;
          else {
            var d = new Promise((n, d) => (s = e[a] = [n, d]));
            n.push((s[2] = d));
            var c = b.p + b.u(a),
              f = new Error();
            b.l(
              c,
              (n) => {
                if (b.o(e, a) && (0 !== (s = e[a]) && (e[a] = void 0), s)) {
                  var d = n && ("load" === n.type ? "missing" : n.type),
                    c = n && n.target && n.target.src;
                  (f.message =
                    "Loading chunk " + a + " failed.\n(" + d + ": " + c + ")"),
                    (f.name = "ChunkLoadError"),
                    (f.type = d),
                    (f.request = c),
                    s[1](f);
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
            [c, f, o] = n,
            r = 0;
          if (c.some((a) => 0 !== e[a])) {
            for (s in f) b.o(f, s) && (b.m[s] = f[s]);
            if (o) var i = o(b);
          }
          for (a && a(n); r < c.length; r++)
            (d = c[r]), b.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return b.O(i);
        },
        n = (self.webpackChunkstore = self.webpackChunkstore || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();

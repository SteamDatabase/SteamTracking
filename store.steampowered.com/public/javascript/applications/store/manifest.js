/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8999272";
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
        61: "libraries~90d3fcf3a",
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
        1659: "libraries~53a2d5efe",
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
        4375: "sales_russian-json",
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
        7698: "libraries~a58353866",
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
        40: "0eef829d0ee373c07fc3",
        61: "bf85ecccaea9f775c709",
        77: "fdb6cb2e05c7ae0837b1",
        101: "f63fa6c5af487b017e71",
        102: "f5e1526daa40b148d844",
        230: "32fc49d6cf4ca274071a",
        259: "23d7200d0114b53c4a07",
        291: "5d6c3ed79d04f457e023",
        298: "49ff6dd34f2615fc80d8",
        319: "ffca06c99bd76fbdceea",
        388: "645bedb9c8468b9718f9",
        460: "cdacaecab1945afa6c49",
        484: "bdd0695928ca2fbae412",
        556: "e779c5416c9c20f2c5b8",
        579: "0021be6d1b00d9f71596",
        584: "0aee0666368c879ac2dc",
        591: "70643159713404b1f0d4",
        627: "97773ec662a1765285fa",
        639: "dffbbe3d31f7be5e5a9a",
        647: "3c06e227827579ab4454",
        680: "4aae007710b02b364d97",
        686: "712c74fea4d5a097bba4",
        691: "83a59011b5151e2037e6",
        698: "15250d6ee14555dbf911",
        708: "c45ea7f2b21fa587eca3",
        727: "f50d722a020c1252e571",
        799: "2c5e75bf12022d7d9d4e",
        819: "1ca3cf2e6b44f54c81d7",
        874: "85d13a9fc16a70c2e3d9",
        903: "b4edb9215bb370c2c92b",
        938: "a05c7732bb045d710a9f",
        988: "70555fa5710466364922",
        1012: "50da761fc47dfe1302de",
        1043: "56659231420cca86300f",
        1117: "a5da83a532ea74e32353",
        1162: "ef6f9c19c32a3265e32e",
        1164: "074e4f118c8bf0d088b1",
        1236: "091098b3c92316782c8d",
        1313: "8d5c8172b1b90055adc2",
        1501: "60c2b195d54a7b70a618",
        1503: "e3c531aefb9a2ef1a09b",
        1659: "bf1f0fd5a9747df6b715",
        1712: "ad058e4fce0ae57ec9a0",
        1722: "fad30277644854aa9604",
        1825: "8ba92b9d8ddb28daec7d",
        1915: "156d095ede4a92e54e2a",
        1918: "7f13dc3b9210decd99db",
        2029: "77726d9ae619d042b470",
        2136: "adad31cc277f4cfa811d",
        2276: "4b11e9f8f7ca252b2a18",
        2301: "4febfc13e44026c047f1",
        2306: "70cf206bb43caf3f0e25",
        2318: "226555c6210824f9438e",
        2365: "9eb3c6b2fafa04de4e51",
        2431: "e0ddd7268d4abe190256",
        2443: "464ed0d44dd29f8438ab",
        2448: "98d2484ee0563f242804",
        2537: "c88aac07388d1a2752e1",
        2581: "074310775b4554ba3be5",
        2601: "ef3da0485d9c2de5499e",
        2681: "46cc1e31e9076307f34b",
        2706: "50d3d280b7dd5edf7e76",
        2730: "9bacf5f280a5359fe694",
        2767: "729622788cc0b478b186",
        2776: "803d2c0197a7921e8348",
        2814: "5b8702a422f80e01cd3c",
        2824: "77058f91b9d9841aa511",
        2844: "ac82bb21d1f89eb3ee33",
        2848: "7cfde7324ceb160c6122",
        2849: "25d98461296bcf46e068",
        2908: "14feae0c53eadcbed830",
        2915: "91989307ea893f9371e6",
        2942: "82ad27e511b30b93ea9b",
        3035: "a9c402defb1322f48941",
        3068: "cd88d05d1b2b54508ea9",
        3112: "714b420d67425875f647",
        3143: "1157de96654aa3d281ae",
        3174: "41bec3b51f5fab007057",
        3185: "40e1caab0029dcb306aa",
        3207: "cb00bc30152e089febfa",
        3238: "02ec06e3106e67fc18a3",
        3245: "de8a5c7d692a0d631fd4",
        3252: "3e0bb72d46f16f7b8ee4",
        3277: "8fea269a38bb566dbfea",
        3313: "d5c330b3b097614ea35f",
        3321: "6e75e82a6b3a67bc3165",
        3323: "73da34e441f4299d65e5",
        3344: "95dd96dfc3a781c939ef",
        3359: "e423634eed4075f095bf",
        3363: "47849c5624ade5446cb6",
        3369: "c075cc224a1bc76e2a85",
        3373: "9a1dde4959a9b4fda6a2",
        3375: "b9abd9027f6dfe27bc3e",
        3398: "0b55af363e49f621e61c",
        3413: "99060f45058eec0eccff",
        3424: "3cd32d41867d2a2ff833",
        3425: "729953baff1d20d53426",
        3453: "2d5d1e1b08873948712c",
        3557: "8ff244d6eb7d97e987cb",
        3634: "25c863c0a775053b5cb4",
        3685: "7896098ade5695d101df",
        3711: "7bc839a3cbcf754bc7cd",
        3759: "f16b144790ba94a71c37",
        3766: "7f0ef56d271561a7d269",
        3768: "ea9a852c35452ab5592d",
        3805: "880cd194fd794171af03",
        3807: "29c93359dcb1fcf68f91",
        3934: "7024149ba49da9d486da",
        3935: "27220bf449a96fb439af",
        4033: "d76e33fca427e7505e4f",
        4103: "a4eb1ee72718a7bf1c88",
        4108: "7b1afaef8c467dd896dd",
        4118: "b022eb2b10538b552994",
        4158: "51f7d13198a1bfe2bb0f",
        4166: "2196da9e1218f80fd72f",
        4171: "cbcc401ae87efa2452d8",
        4189: "3f15d6670f382d60f976",
        4199: "4f92c8a0cdf60482c18c",
        4238: "873262d53951cc5665bd",
        4248: "24d4d76499a4dd26a929",
        4297: "2466f8c8aa0b0313bd40",
        4375: "654330ff0430daf0c794",
        4385: "d370eaa8c3ca22554c90",
        4447: "2f68fb01603912ccb010",
        4457: "b456bb0013acda3752c8",
        4458: "450554341d52d5c573ef",
        4513: "99f24a50ec979a52187f",
        4535: "91407ead080f1c8a8e4c",
        4566: "0e4af289506346794988",
        4601: "cb8892baaf785fb12f96",
        4682: "cb7c7c0e0cf3d9499b31",
        4722: "264ad172381d8234a1f1",
        4801: "c29aa74f6b45dc4c9b99",
        4812: "d4df11a7aff07060ace9",
        4823: "fec7a5347a373a0b24c2",
        4860: "a4aa421a79cbf6b42045",
        4929: "deef5c040fa6e28f22c9",
        4961: "4bba87ffdd1d61c7e7d3",
        4964: "272599730b74e46e251d",
        4965: "fd2b7a6456b11f34e5ba",
        4970: "f391f1e910f19d14ad43",
        5024: "24d4ee150ff5800e2bd3",
        5164: "7a251adb6773ab240567",
        5257: "bacb32e0668815e9cdae",
        5331: "6b1837b0b016804e9779",
        5414: "95b7e118c5b336b67326",
        5438: "2e183f37bd40fc0c1a48",
        5567: "2db7004f895d81b20c58",
        5575: "71baf24a0ff898fbceda",
        5625: "3b47fccbf800661e499d",
        5800: "257780590a6332705fc5",
        5817: "375d63cddee4027221cd",
        5821: "b23ee2ed79f00c10b565",
        5831: "633223b2c0769ce1a679",
        5849: "3594be8ccd9224a36c07",
        5855: "420f2219c6fcff783eaa",
        5925: "bad829f9231ca5c35448",
        5933: "4ba81593446eed6c7647",
        5944: "e340f1b5c2f31f6c64f8",
        5948: "7521146cdcd15137a643",
        6002: "51fe252f98f18a28a407",
        6007: "0b8d17f94498f945f0f2",
        6019: "64161299583608a95d61",
        6035: "4dad63b8f2767795376b",
        6087: "2c73bf2132fd6328eb65",
        6099: "e425f89ce8524b06849e",
        6169: "4d54ef068feef0ab6497",
        6470: "55994777822ffc0e7bd1",
        6481: "f60cbdb34282e805d5a8",
        6492: "02a85c137fc8b2c578ca",
        6520: "9d39d911c046a0484dce",
        6542: "3a805b5e13520ff01c71",
        6571: "3da95e61256356a13994",
        6693: "63ad91d58170230dc84d",
        6762: "7651c5171f7a64459d7a",
        6802: "8c8e23d26ac48b6d9041",
        6815: "1fcd65a6b4db3194ab49",
        6817: "3fd370e632cca9bd7745",
        6846: "bcd218418a2df7fcb0d6",
        6882: "5d95b6913c0da291e28a",
        6909: "381fc7c5fd59d1e9ffe9",
        6957: "c8a4da0d6276ff1110d1",
        7072: "32940164cf6376be651b",
        7082: "af50980ceb94a46fbfed",
        7094: "755ea5118ef88ad9e2df",
        7117: "753b71c4536dcad0ff47",
        7131: "dfef0ec91ee1d4a9ae37",
        7136: "b39e0e0abe2450f612d4",
        7181: "2a9e80c468a3a26957b4",
        7200: "de55e3720e4bee45a995",
        7236: "a6636d6e0c6d449291da",
        7247: "57b5e018f19671a05a6b",
        7254: "5b7e2867a3a4fec5726e",
        7280: "e53c01d03dff3c63dbff",
        7311: "bdccd9e79e28db100665",
        7323: "531cdb15cfe25503dc5b",
        7344: "249e38311c0b8052c50f",
        7400: "3f5e48f5bc73e6ff906b",
        7533: "73750005a33b0094e9e4",
        7548: "835acb4b9301b23d87ca",
        7586: "3482ae8abc0f8b9f6502",
        7602: "00096261352a3c1949f9",
        7606: "ab23db11a1f028fae094",
        7608: "b3aa16e398f84185ce2e",
        7695: "7d2d8896afa77b2f210a",
        7698: "0f6dbd2c31da7d598f1e",
        7724: "62ded6370eda523dd75a",
        7734: "674a7c502dce75bd2fdc",
        7781: "3683982444631dc2727b",
        7814: "869a65ebc0909a9733af",
        7871: "94f52d299c211755ac2b",
        7890: "ffaf9785748ccb4f3a20",
        7934: "a7189a0594d0e25e1e23",
        7942: "cbab886824c048dd6fe8",
        7951: "5fca3ca2c1e36710fb17",
        7952: "2427041da1c36f76f959",
        7975: "0d0d8076b260278b8915",
        8001: "8fb7df1113425bc050d0",
        8015: "2df9e794677b4a9f62ad",
        8051: "3a564e5adcadb4f0ee99",
        8087: "0e881f2fc998dc745712",
        8155: "e104f19155ca8cb88ee2",
        8168: "cec25ba9f16d0d31dfe8",
        8359: "e24640adfcee4c0a0d0d",
        8385: "540640a9cfe91f909981",
        8399: "c2e99921886d7334f55c",
        8429: "588d8d7a7c29e3083f8d",
        8436: "98bc5a65db7a945ff19a",
        8443: "4815fe5c8367b1755034",
        8589: "8dd5b12094d750e51bcf",
        8754: "dc50f429bf1f345b9bee",
        8767: "be7d03764f2a6b932f52",
        8774: "180f990527cb0aaa93ac",
        8820: "57baada171ddcec3aabc",
        8873: "057d153b364157820338",
        8960: "4699d9195ff023b35173",
        8973: "3b5258e904ce4541e0df",
        8986: "543cd47d413e3706907f",
        8993: "3e366ba95d755a78a8ec",
        8994: "bdc8b20479f09fecdb23",
        9046: "a2bf9beb73b025b5a012",
        9062: "ecc1a33a75e66c3b0a62",
        9177: "f12d6afd120591a36394",
        9197: "86f6bcc5d096d0bf0d3b",
        9202: "6fbbcf42cb26898d0340",
        9424: "207a8839b0299017be81",
        9429: "ed17bad9863c718a925c",
        9431: "2f474d7bdef2c7150a74",
        9568: "b12a2f2fd783972d5d86",
        9663: "5f305e64ee6334146c06",
        9682: "c7584b937a1481ad50f6",
        9702: "16aeabbc056e3bf5ba41",
        9753: "df373deabf5aebb003cc",
        9766: "15948c5efdc437742490",
        9788: "f053e3f662734d1bd46e",
        9803: "4f648f72a079bea0985d",
        9830: "fc39230bfa7287465ef8",
        9899: "7ed8cb862fc309e14cc7",
        9903: "f569f53df672563f110a",
        9919: "9e9efb89c425708e56fd",
        9980: "36a3d3bdcb48588f9172",
        9994: "b952c1bd3642adc1d218",
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
        4970: "chunk~0f0129d36",
        5331: "steamcharts",
        5800: "fmgmt",
        5821: "accountpreferences",
        7280: "requestpurchase",
        8087: "yearinreview",
        8986: "loyaltystore",
        9682: "interactiverecommender",
        9788: "eventadmin",
      }[e] || e) +
      ".css?contenthash=" +
      {
        40: "c4bb2949d6bf1cda2863",
        259: "78115f5da4a287049766",
        556: "ed6fc8b95318136d4c4d",
        680: "54e3323e6145cd128bf1",
        691: "d6f19ddd805a1b54c9f7",
        938: "4c262aa325de436f4eb2",
        988: "9697f81cbeeb8cd9b3dc",
        1501: "2b1461b106e19b8c5bdb",
        1825: "841fbcb9d567332b674c",
        1918: "26e16e826f71acbe014e",
        2136: "aef462affd99465c09ab",
        2301: "71a720367bf869035355",
        2365: "72c0320319db6705b03d",
        2814: "a5428a087e227eb83002",
        3068: "3d4d6b19dcf9ba69e58a",
        3207: "dcc9e4626bd98d1cb4bf",
        3369: "df7f69a8c3c1854555cc",
        3375: "85e2ebf349dd1b3a0dcb",
        3413: "007c6d51f7f7cf8bfb4c",
        3805: "bc19873440e3d62f8e92",
        4118: "04b4536fa97e978490cd",
        4158: "bc5c2553780f4cedd424",
        4535: "31a1587a28aa962de04a",
        4601: "f21789579b4fa4283541",
        4970: "35c9453fcd3c28e02be6",
        5331: "094569e4c4d5f2e1075f",
        5800: "92dcb0feabcb1d9e517a",
        5821: "97c40bcaeb4257f1498b",
        6470: "987fa2cb54097ed0b59a",
        7280: "85e2ebf349dd1b3a0dcb",
        8087: "a3b97d2d1b89656de34b",
        8986: "569fdb6caf4d93dca67c",
        9424: "65008c72e7e5586e0c2d",
        9682: "eed397d2384ce4c9efa6",
        9702: "4a05d562b0719a6fff1c",
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
                4970: 1,
                5331: 1,
                5800: 1,
                5821: 1,
                6470: 1,
                7280: 1,
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

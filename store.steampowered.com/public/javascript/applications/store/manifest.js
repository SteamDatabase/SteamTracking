/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "9266032";
(() => {
  "use strict";
  var e,
    a,
    n,
    s,
    c,
    d = {},
    b = {};
  function o(e) {
    var a = b[e];
    if (void 0 !== a) return a.exports;
    var n = (b[e] = { id: e, loaded: !1, exports: {} });
    return d[e].call(n.exports, n, n.exports, o), (n.loaded = !0), n.exports;
  }
  (o.m = d),
    (o.amdO = {}),
    (e = []),
    (o.O = (a, n, s, c) => {
      if (!n) {
        var d = 1 / 0;
        for (i = 0; i < e.length; i++) {
          for (var [n, s, c] = e[i], b = !0, f = 0; f < n.length; f++)
            (!1 & c || d >= c) && Object.keys(o.O).every((e) => o.O[e](n[f]))
              ? n.splice(f--, 1)
              : ((b = !1), c < d && (d = c));
          if (b) {
            e.splice(i--, 1);
            var r = s();
            void 0 !== r && (a = r);
          }
        }
        return a;
      }
      c = c || 0;
      for (var i = e.length; i > 0 && e[i - 1][2] > c; i--) e[i] = e[i - 1];
      e[i] = [n, s, c];
    }),
    (o.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return o.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (o.t = function (e, s) {
      if ((1 & s && (e = this(e)), 8 & s)) return e;
      if ("object" == typeof e && e) {
        if (4 & s && e.__esModule) return e;
        if (16 & s && "function" == typeof e.then) return e;
      }
      var c = Object.create(null);
      o.r(c);
      var d = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var b = 2 & s && e; "object" == typeof b && !~a.indexOf(b); b = n(b))
        Object.getOwnPropertyNames(b).forEach((a) => (d[a] = () => e[a]));
      return (d.default = () => e), o.d(c, d), c;
    }),
    (o.d = (e, a) => {
      for (var n in a)
        o.o(a, n) &&
          !o.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: a[n] });
    }),
    (o.f = {}),
    (o.e = (e) =>
      Promise.all(Object.keys(o.f).reduce((a, n) => (o.f[n](e, a), a), []))),
    (o.u = (e) =>
      "javascript/applications/store/" +
      ({
        67: "main_czech-json",
        144: "marketing_japanese-json",
        195: "chunk~c62cf5bb4",
        209: "shoppingcart_ukrainian-json",
        311: "shoppingcart_english-json",
        407: "marketing_indonesian-json",
        414: "sales_polish-json",
        423: "shoppingcart_spanish-json",
        478: "marketing_danish-json",
        494: "sales_hungarian-json",
        516: "loyalty_russian-json",
        539: "main_finnish-json",
        576: "libraries~3ee10b9cb",
        614: "marketing_hungarian-json",
        651: "loyalty_thai-json",
        716: "curatorreviewlistlanding",
        809: "marketing_thai-json",
        915: "chunk~ea83716ea",
        927: "libraries~e78445ea0",
        934: "sales_danish-json",
        970: "eventadmin",
        976: "greenenvelope",
        1048: "sales_japanese-json",
        1065: "marketing_brazilian-json",
        1192: "shoppingcart_japanese-json",
        1216: "loyalty_danish-json",
        1225: "shared_swedish-json",
        1227: "sales_greek-json",
        1337: "main_japanese-json",
        1351: "sales_turkish-json",
        1369: "main_vietnamese-json",
        1396: "sales_sc_schinese-json",
        1398: "shoppingcart_swedish-json",
        1449: "shared_bulgarian-json",
        1531: "shared_italian-json",
        1543: "sales_spanish-json",
        1559: "shoppingcart_turkish-json",
        1606: "main_brazilian-json",
        1804: "labssandbox",
        1838: "loyalty_vietnamese-json",
        1853: "loyalty_schinese-json",
        1973: "shared_japanese-json",
        1998: "loyalty_romanian-json",
        2095: "shoppingcart_italian-json",
        2184: "shoppingcart_koreana-json",
        2206: "sales_russian-json",
        2209: "shoppingcart_thai-json",
        2256: "shared_english-json",
        2320: "shared_norwegian-json",
        2414: "steamcharts",
        2435: "shared_latam-json",
        2484: "shoppingcart_romanian-json",
        2500: "main_spanish-json",
        2516: "interactiverecommender",
        2543: "main_latam-json",
        2568: "shoppingcart_tchinese-json",
        2575: "loyalty_ukrainian-json",
        2608: "chunk~adb1a40ab",
        2632: "shared_spanish-json",
        2634: "accountpreferences",
        2702: "main_french-json",
        2708: "main_italian-json",
        2726: "marketing_polish-json",
        2749: "shared_romanian-json",
        2753: "shoppingcart_german-json",
        2828: "chunk~4acf96157",
        2842: "sales_portuguese-json",
        2855: "marketing_norwegian-json",
        2907: "shoppingcart_schinese-json",
        2954: "shared_ukrainian-json",
        2960: "loyalty_bulgarian-json",
        2964: "shoppingcart_finnish-json",
        2965: "shoppingcart",
        2992: "marketing_koreana-json",
        3027: "steamawards",
        3167: "shoppingcart_norwegian-json",
        3216: "sales_czech-json",
        3236: "gamemixer",
        3266: "main_dutch-json",
        3303: "decktopplayedappbanner",
        3374: "main_schinese-json",
        3397: "loyalty_greek-json",
        3436: "marketing_finnish-json",
        3449: "loyalty_french-json",
        3562: "sales_bulgarian-json",
        3569: "sales_thai-json",
        3587: "libraries~6377c4c7a",
        3645: "chunk~90d3fcf3a",
        3679: "shoppingcart_french-json",
        3701: "main_swedish-json",
        3710: "shared_arabic-json",
        3730: "loyalty_finnish-json",
        3833: "marketing_ukrainian-json",
        3872: "marketing_tchinese-json",
        3912: "marketing_vietnamese-json",
        3940: "main_thai-json",
        4039: "loyalty_brazilian-json",
        4112: "loyalty_polish-json",
        4113: "loyalty_spanish-json",
        4150: "loyalty_tchinese-json",
        4153: "main_romanian-json",
        4156: "loyalty_hungarian-json",
        4182: "sales_swedish-json",
        4268: "events",
        4372: "sales_finnish-json",
        4419: "main_portuguese-json",
        4630: "shoppingcart_danish-json",
        4657: "chunk~e78445ea0",
        4868: "shoppingcart_sc_schinese-json",
        4893: "main_bulgarian-json",
        4917: "main_tchinese-json",
        4977: "shoppingcart_brazilian-json",
        5004: "profileshowcases",
        5018: "shared_french-json",
        5066: "shoppingcart_portuguese-json",
        5068: "crossplatformjoin",
        5110: "shared_dutch-json",
        5134: "loyalty_sc_schinese-json",
        5139: "seasonpass",
        5183: "sales_norwegian-json",
        5189: "loyalty_indonesian-json",
        5231: "marketing_english-json",
        5232: "sales_latam-json",
        5240: "sales_tchinese-json",
        5241: "shared_tchinese-json",
        5397: "loyalty_norwegian-json",
        5422: "libraries~eededdba4",
        5484: "main_greek-json",
        5552: "shoppingcart_vietnamese-json",
        5579: "shoppingcart_greek-json",
        5605: "sales_dutch-json",
        5791: "sales_indonesian-json",
        5831: "loyalty_german-json",
        5871: "messages",
        5961: "loyalty_english-json",
        5979: "libraries~ee808b7d2",
        6031: "shared_finnish-json",
        6103: "sales_english-json",
        6149: "shared_vietnamese-json",
        6159: "main_koreana-json",
        6165: "shared_hungarian-json",
        6208: "shared_german-json",
        6224: "sales_vietnamese-json",
        6236: "main_german-json",
        6239: "shared_portuguese-json",
        6337: "marketing_swedish-json",
        6341: "chunk~43ff28f39",
        6383: "sales_italian-json",
        6403: "marketing_schinese-json",
        6417: "loyalty_italian-json",
        6459: "sales_schinese-json",
        6523: "shared_danish-json",
        6525: "libraries~a58353866",
        6562: "shared_brazilian-json",
        6589: "main_russian-json",
        6592: "shoppingcart_latam-json",
        6606: "shoppingcart_polish-json",
        6649: "chunk~ecdbd68f7",
        6664: "loyalty_swedish-json",
        6716: "marketing_sc_schinese-json",
        6728: "marketing_latam-json",
        6759: "marketing_italian-json",
        6771: "shoppingcart_czech-json",
        6814: "loyaltystore",
        6845: "marketing_dutch-json",
        6854: "chunk~79213aea9",
        6855: "saledisplay",
        6948: "main_norwegian-json",
        6958: "loyalty_koreana-json",
        6966: "login",
        6979: "main_polish-json",
        7064: "marketing_czech-json",
        7072: "fmgmt",
        7138: "loyalty_czech-json",
        7174: "loyalty_latam-json",
        7233: "chunk~618b6ee4b",
        7246: "reviewaward",
        7252: "chunk~71ab62b0a",
        7276: "libraries~53a2d5efe",
        7328: "chunk~1eac2f983",
        7382: "chunk~9cf594598",
        7439: "marketing_spanish-json",
        7502: "shoppingcart_russian-json",
        7539: "shared_koreana-json",
        7591: "shared_czech-json",
        7625: "main_hungarian-json",
        7631: "sales_french-json",
        7633: "sales_brazilian-json",
        7681: "sales_ukrainian-json",
        7725: "chunk~6377c4c7a",
        7772: "loyalty_portuguese-json",
        7786: "shared_schinese-json",
        7796: "main_turkish-json",
        7798: "main_ukrainian-json",
        7819: "summersale2021story",
        7926: "marketing_russian-json",
        7929: "loyalty_turkish-json",
        8019: "chunk~549106c78",
        8025: "shared_russian-json",
        8163: "steamawardsvote",
        8199: "main_sc_schinese-json",
        8287: "messages_custom",
        8294: "chunk~0369cc7c6",
        8306: "shared_indonesian-json",
        8396: "broadcast",
        8516: "deckverified",
        8585: "marketing_german-json",
        8595: "shared_thai-json",
        8639: "loyalty_dutch-json",
        8680: "libraries~a5f6d3d85",
        8685: "pointsbundles",
        8709: "shoppingcart_dutch-json",
        8718: "loyalty_japanese-json",
        8755: "marketing_greek-json",
        8801: "sales_german-json",
        8843: "openindesktopclient",
        8967: "shared_polish-json",
        8987: "requestpurchase",
        9027: "shared_sc_schinese-json",
        9050: "shoppingcart_bulgarian-json",
        9152: "shared_turkish-json",
        9188: "main_english-json",
        9207: "marketing_french-json",
        9236: "libraries~c8d26a341",
        9297: "yearinreview",
        9326: "shoppingcart_hungarian-json",
        9391: "marketing_turkish-json",
        9431: "main_danish-json",
        9566: "main_indonesian-json",
        9569: "libraries~549106c78",
        9650: "marketing_bulgarian-json",
        9672: "discoveryqueue",
        9712: "shared_greek-json",
        9730: "marketing_portuguese-json",
        9790: "libraries~502f1f57b",
        9812: "sales_romanian-json",
        9916: "marketing_romanian-json",
        9935: "shoppingcart_indonesian-json",
        9992: "sales_koreana-json",
      }[e] || e) +
      ".js?contenthash=" +
      {
        67: "575fa894d9f15e6518d9",
        144: "0498831538342f45cd2b",
        195: "5e502b781d0342f9d209",
        209: "5add4fcc3aab1211baa4",
        311: "d98903a4871f90af2515",
        407: "3985df4a4bfc87d22ad6",
        414: "201a144af15ed2ba0c2f",
        423: "30aff681c60fbde849a8",
        478: "f40c03115679b2759263",
        494: "4d81d58bdb3de37ead2b",
        516: "84cfd38707e80c4aa865",
        539: "c10dd648fd1f244c16a1",
        576: "ab190c48a6c8cee739c0",
        614: "552a55035f53bbf7d772",
        651: "c1d75c63fd3dd743d410",
        716: "b0044ecba80475ac550e",
        774: "06acfbaa2b8784ecbec9",
        809: "5b755a59eda635da3ac6",
        915: "a3c4df4e89772a17a9f8",
        927: "3306e20a85bd6a312c50",
        934: "b26fbbd6398e7c021aa5",
        970: "237013d781ce78f673e2",
        976: "064bedc076ae2205b94b",
        1006: "3beba7a28b9459519eed",
        1048: "c015c357dc90c4ab64ba",
        1065: "2feb30c4d4171be45f80",
        1192: "1678bc0ec4edaff63184",
        1216: "bdca5c010feb15de3dd3",
        1225: "3bcd1afd07aa8b84786f",
        1227: "cf772216e53de67c6b90",
        1337: "8c6b8e702b0163d1d4c3",
        1351: "d55c83c6d8bd561324dd",
        1369: "f4adf21ccbfc9ed3f53b",
        1396: "53d7f5550e4564863daf",
        1398: "d84d6aa72f8ea10b2861",
        1449: "2402620814b81b94f94b",
        1531: "55917014e2e0112c99a5",
        1543: "315e0dba7300d8617da5",
        1559: "6702adc62ca386acf46a",
        1606: "1414615073f5b601d4e5",
        1804: "ab4feff1180ed3687e85",
        1838: "ffae208bb416498e0851",
        1853: "f9cfd579ac4f8c82b175",
        1973: "9088dca874d726b61896",
        1998: "d6a6d5f8416703ddca94",
        2095: "19c206f4d9a6ec46bed8",
        2184: "1a14cda0917832cff5be",
        2206: "de638a4621620aaa486d",
        2209: "8a35962b6f589b9340f8",
        2256: "d13953217d6ecc706dcf",
        2298: "12088e93f39c4869b5a3",
        2320: "9ea4204ba49129bd5f97",
        2414: "f8bf7c2342e7e8e53db6",
        2435: "f417ee8c2cd3d84e5e87",
        2484: "faa6cb9dba12baf4007f",
        2500: "01b4649c9ba33ff6b860",
        2516: "3067dad1228449f9a56c",
        2543: "ff9f3532c97725ad5fd8",
        2568: "8437f2534864ea0fa150",
        2575: "cfaed3787c2fe75512bb",
        2608: "65b448418fbc3332970b",
        2632: "c2db6fb190eaf728c0f8",
        2634: "e2f528d3c943a71a0977",
        2702: "762137845e91e16a8578",
        2708: "ff1f6eacf8bb9cfafffe",
        2726: "0cc2b898e3a822219f24",
        2749: "133623e675b741e5f293",
        2753: "c763a58bc5469642466a",
        2828: "e4f410a84078d657eade",
        2842: "a5530e816da8a3f2e9b8",
        2855: "50b814127eef27cce236",
        2907: "87af3ebe3a97c49b6300",
        2954: "7650397e8cb91fcfbe54",
        2960: "6e1ded326a4a18c346bf",
        2964: "a0486615b0b3058cfb9e",
        2965: "3cb78fcf77ec9452ce39",
        2992: "075f8687f6cb365785ee",
        3027: "8093eed367623b856c8a",
        3164: "0ef81dcc40699d8283dd",
        3167: "15c86a49a553a69c8491",
        3216: "4e6337d051f11b51e8b3",
        3236: "beac72a8952d68428393",
        3266: "51dae98855b8cce13cbf",
        3303: "abfc23f50622783017e4",
        3374: "0c5d26a495064012d2e9",
        3397: "f59d243a2747f5a5f696",
        3436: "40d029141af8e8d00b30",
        3449: "22e2f3e9ada2c8fdaa36",
        3562: "1994ef6500c112e94990",
        3569: "35348f7e4ed25ceac5d8",
        3587: "b300b702b1b38dbb9b17",
        3645: "954263a073ee750f8ca7",
        3679: "4e8b6feed278f743e202",
        3701: "ddb7e043eded10ea6e7f",
        3710: "ef9ad73cdc93cf8428d9",
        3730: "674ec3c5974377030da3",
        3833: "604601f2a4d065d89046",
        3872: "3f128f8b13592ae0ab2a",
        3912: "0f16cc7889ee806c0183",
        3940: "df2e51294cf4a21660a0",
        4039: "83d4afc1033bcdec0a28",
        4112: "9523480e95cb8f6e60a5",
        4113: "bee6079bce99d39d4d4b",
        4150: "94794091916edea3ba03",
        4153: "100b7f2586518c50c20a",
        4156: "57c4cd447e8903d9ea72",
        4182: "c2a0de3eddc58922edc3",
        4268: "06e7086343c4dd98bcaf",
        4336: "a55b5c85d98b3edf5e2f",
        4372: "7b2cb17e991a3ef62e1a",
        4419: "4c3a2c1232b9374bf267",
        4630: "9e5bb56d4e28d15d148a",
        4657: "76fa186420478c3ffd6e",
        4868: "0ad7c4aba50e539a9d33",
        4893: "8ca2560ff0fd1fe5f876",
        4917: "8bb6c9222d1bfbbe10e0",
        4977: "1df244fc42b4909c0ae7",
        5004: "32496fa9c4f1f0b1a270",
        5018: "541145320ad4dad806bb",
        5066: "63b6c2d8e3758aad3499",
        5068: "7ed7b4989cd23e4e538f",
        5110: "9ab7aeae09f66a7ab9d6",
        5134: "9596c47c17800a45cc56",
        5139: "8ac0311e6683b39ce5e5",
        5183: "b2064bc9920af333cf72",
        5189: "219ceca289df2109ab34",
        5231: "2724d0de18cba8996ab6",
        5232: "7e447176bd8be6994d99",
        5240: "4cd0cbb471554bd41e17",
        5241: "782e214c504ac563af26",
        5397: "ebbbeec80a8a70b58d36",
        5422: "b26f4bfaabc19761ccab",
        5484: "efeda492e0fd65adae85",
        5552: "b2d21e6b748fa2cb10e1",
        5579: "20ada61fcd6132d89682",
        5605: "c0d04530eca6d7f74180",
        5791: "0b284c17bae2edf16fb5",
        5831: "2b23b9fbb82bd5138681",
        5871: "3c84de36a3ac33c50a95",
        5894: "4823f561fccd8d772443",
        5961: "2c70439641af4aacbd5b",
        5979: "7ff8dff154030cab0621",
        6031: "179326443d4433d65709",
        6103: "3e3b65fabec655df899a",
        6149: "ba0f01097c0bdb0ca901",
        6159: "0f2aec1ed43af3287cbc",
        6165: "86257f4a801920d1fde8",
        6208: "69c630cb588e4f91107e",
        6224: "a77a37cb632e140a6581",
        6236: "d72f9feac66e5d24042c",
        6239: "b821e4e713061022cac7",
        6337: "a46d4ed490d31ab09548",
        6341: "e80f46cb9fef87be41c2",
        6383: "87163ce8ea07ad7a01ba",
        6403: "2caaa3d29afb2f6ee07d",
        6417: "7a066d684eec1591c4a8",
        6459: "8a735c65dbe0369f1a1d",
        6523: "5bead1dc4ee9a8d5adf2",
        6525: "c7b7ab8fe401cb3837bf",
        6562: "570565a9a6084bb109b9",
        6589: "6a8e2cb57f1f3877e47f",
        6592: "12c40de36d3f3a45884b",
        6606: "d8277afa8eaf05469002",
        6649: "8e37615bf5a427bec351",
        6664: "d04f9962227a63d3c6c7",
        6716: "a473630582e6a6660b82",
        6728: "a175aa3f115fa1743f9d",
        6759: "f262ee569c99e4442f34",
        6771: "4f4bde20fa6ece6de46c",
        6814: "042943b79f8e6b9cd50d",
        6845: "1ef399101ccc089a5708",
        6854: "a7631733fd770e59cf5a",
        6855: "a5638bb333ecd4115f1c",
        6948: "df8c9bb5a7cf2e8c1631",
        6958: "2b023c5714b8eee5a586",
        6966: "a191782b1270c963e3b1",
        6979: "95d682d37ea68bff9da6",
        7064: "52aee32ff5900bdd48da",
        7072: "e93bda13f69e425395fc",
        7138: "dd7723ae9aa9371eccec",
        7174: "361da43086f073637173",
        7233: "4c537d27670c3cbf549c",
        7246: "9484e0df57b4dc2cffee",
        7252: "07c972ec8688274f982d",
        7276: "84b5ce9875e14c25231c",
        7328: "4bce4346cb63d0476f02",
        7368: "0d8e541ccbf2db93fec8",
        7382: "6fb4971b3330f48e4580",
        7439: "29574a4c9c79b8eb7654",
        7502: "c63c35aae9b515bcf7a1",
        7539: "0bd52d0ba4147c2beca2",
        7576: "62e4b2b5184932def761",
        7591: "b4d8d3ada7b5be50d1e7",
        7625: "95b734c7cf661565128f",
        7631: "77956f1070f631daac37",
        7633: "501a0ca8caa622200d58",
        7681: "efa681bd6e009e2ad743",
        7725: "be6022c06af5db3343dc",
        7772: "fa28451ff83193118df2",
        7786: "663bed9727766088b416",
        7796: "31dcc3ccc45d03a763c3",
        7798: "bfba3a30303b6b36f766",
        7819: "ffb828c8597e1b6116a2",
        7926: "9d724e69039458b8eb3a",
        7929: "086d775c77953660b7dc",
        7937: "40c860313d8d0ac716db",
        8019: "f7cfd5b07673ce716316",
        8025: "73e07081c64a542f1975",
        8163: "45254e710b8084b083c8",
        8199: "5f211fe0a44ded513717",
        8287: "c1e0e8180177a6699996",
        8294: "b87fc9754661feb2128b",
        8306: "f4a9f94c8ce5661f1fe7",
        8396: "3f6b34dbd7a6077f1872",
        8516: "f4b102a7f1efbe2052c8",
        8567: "9694fef5c1cc2e4101e4",
        8585: "a3091aaef02e6a282e81",
        8595: "a17a464d639cbfb96ee9",
        8639: "bd16365a2f027c1db00c",
        8662: "aa05ecb45c23a26201bb",
        8680: "6cde70248fca1c867777",
        8685: "840abc0daf0f3617087b",
        8709: "8a514eec17d2f01c76d5",
        8718: "f5a1ae16f915002c779e",
        8755: "6d53ff56e650af850f69",
        8801: "90d60a53ab0c9d0c6cc4",
        8843: "4b23759050ff89e5f915",
        8967: "6d3ea7ad6e993915de8a",
        8987: "01e8ba2df22df2b57466",
        9027: "d9aabbca8ab6bdcdba81",
        9050: "622661c26772828eb0fb",
        9152: "1ad58488c408d2b71add",
        9188: "7c90784b0aa6f4daeaa2",
        9207: "048395ad629a9382164a",
        9236: "769eed8fb31399c6fe30",
        9297: "68b8314e6aa677390633",
        9326: "e72c3de1b1401f82e4ab",
        9391: "ece8f9eea70235a3a2df",
        9431: "f414644441bfd1af71d8",
        9566: "539b87391c740de65876",
        9569: "a86ceb79daa9643d2bcd",
        9650: "1b0e39eea2f429cb3beb",
        9672: "1c1c90e28673f84c72ef",
        9712: "89c638631b8ef86c259b",
        9730: "323cb03db84d9019eb50",
        9790: "79acde9db0ae9e19b87a",
        9812: "5b5daff40b636dc83472",
        9916: "c086b534baf277a81048",
        9935: "5818689bc3257122c8db",
        9992: "5d38958019c07711ed67",
      }[e]),
    (o.miniCssF = (e) =>
      "css/applications/store/" +
      ({
        716: "curatorreviewlistlanding",
        970: "eventadmin",
        976: "greenenvelope",
        1804: "labssandbox",
        2414: "steamcharts",
        2516: "interactiverecommender",
        2634: "accountpreferences",
        3027: "steamawards",
        3236: "gamemixer",
        3303: "decktopplayedappbanner",
        4268: "events",
        5004: "profileshowcases",
        5068: "crossplatformjoin",
        5139: "seasonpass",
        5871: "messages",
        6341: "chunk~43ff28f39",
        6814: "loyaltystore",
        6855: "saledisplay",
        6966: "login",
        7072: "fmgmt",
        7233: "chunk~618b6ee4b",
        7246: "reviewaward",
        7328: "chunk~1eac2f983",
        7819: "summersale2021story",
        8019: "chunk~549106c78",
        8163: "steamawardsvote",
        8287: "messages_custom",
        8396: "broadcast",
        8516: "deckverified",
        8685: "pointsbundles",
        8843: "openindesktopclient",
        8987: "requestpurchase",
        9297: "yearinreview",
        9672: "discoveryqueue",
      }[e] || e) +
      ".css?contenthash=" +
      {
        716: "9670eea37c7ece33b53c",
        774: "fe4c6a9b4b57a37d5fe8",
        970: "a0099daf5c40630c4db6",
        976: "f4e354d7929f8cfe5b96",
        1804: "e25f82202db486f7b15f",
        2414: "c2e87b7e90956768e271",
        2516: "eb86ec2e3e954902513b",
        2634: "0dbf216f809400872fd3",
        3027: "f629e1a5230b85511fb2",
        3236: "2b1461b106e19b8c5bdb",
        3303: "65d80f01cfa3342f2df7",
        4268: "0d6d9129e2f70da9e4c7",
        5004: "71a720367bf869035355",
        5068: "df7f69a8c3c1854555cc",
        5139: "f97dcc8cd4bfe4c64efe",
        5871: "911de2a114a82e795c0e",
        5894: "8a4fa050a652c325c149",
        6341: "d509dae7af1db259d3a4",
        6814: "20494e459d82f957490d",
        6855: "f6adca2561b53d1f5e9f",
        6966: "31a1587a28aa962de04a",
        7072: "77002f6592508e7f28f8",
        7233: "cba732e8fb9e2e2e1dfd",
        7246: "2216da1d3aca1c1c28f3",
        7328: "25ac4b022435e54a7a49",
        7368: "a25cdd104276a8dc3c6f",
        7819: "26e16e826f71acbe014e",
        8019: "3b4e2a42ee0761315489",
        8163: "3a7f7c4548a7b91a2ef8",
        8287: "4c262aa325de436f4eb2",
        8396: "388fe8041cb102d26b42",
        8516: "a57373470d4b21ce9e72",
        8685: "007c6d51f7f7cf8bfb4c",
        8843: "ffd03d85eb78f89758fc",
        8987: "8a4fa050a652c325c149",
        9297: "84fa889e07eb5089c15d",
        9672: "d2e7b57b4aecc4885976",
      }[e]),
    (o.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (o.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (s = {}),
    (c = "store:"),
    (o.l = (e, a, n, d) => {
      if (s[e]) s[e].push(a);
      else {
        var b, f;
        if (void 0 !== n)
          for (
            var r = document.getElementsByTagName("script"), i = 0;
            i < r.length;
            i++
          ) {
            var t = r[i];
            if (
              t.getAttribute("src") == e ||
              t.getAttribute("data-webpack") == c + n
            ) {
              b = t;
              break;
            }
          }
        b ||
          ((f = !0),
          ((b = document.createElement("script")).charset = "utf-8"),
          (b.timeout = 120),
          o.nc && b.setAttribute("nonce", o.nc),
          b.setAttribute("data-webpack", c + n),
          (b.src = e)),
          (s[e] = [a]);
        var l = (a, n) => {
            (b.onerror = b.onload = null), clearTimeout(h);
            var c = s[e];
            if (
              (delete s[e],
              b.parentNode && b.parentNode.removeChild(b),
              c && c.forEach((e) => e(n)),
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
          f && document.head.appendChild(b);
      }
    }),
    (o.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (o.p = ""),
    (() => {
      if ("undefined" != typeof document) {
        var e = (e) =>
            new Promise((a, n) => {
              var s = o.miniCssF(e),
                c = o.p + s;
              if (
                ((e, a) => {
                  for (
                    var n = document.getElementsByTagName("link"), s = 0;
                    s < n.length;
                    s++
                  ) {
                    var c =
                      (b = n[s]).getAttribute("data-href") ||
                      b.getAttribute("href");
                    if ("stylesheet" === b.rel && (c === e || c === a))
                      return b;
                  }
                  var d = document.getElementsByTagName("style");
                  for (s = 0; s < d.length; s++) {
                    var b;
                    if (
                      (c = (b = d[s]).getAttribute("data-href")) === e ||
                      c === a
                    )
                      return b;
                  }
                })(s, c)
              )
                return a();
              ((e, a, n, s, c) => {
                var d = document.createElement("link");
                (d.rel = "stylesheet"),
                  (d.type = "text/css"),
                  (d.onerror = d.onload =
                    (n) => {
                      if (((d.onerror = d.onload = null), "load" === n.type))
                        s();
                      else {
                        var b = n && n.type,
                          o = (n && n.target && n.target.href) || a,
                          f = new Error(
                            "Loading CSS chunk " +
                              e +
                              " failed.\n(" +
                              b +
                              ": " +
                              o +
                              ")",
                          );
                        (f.name = "ChunkLoadError"),
                          (f.code = "CSS_CHUNK_LOAD_FAILED"),
                          (f.type = b),
                          (f.request = o),
                          d.parentNode && d.parentNode.removeChild(d),
                          c(f);
                      }
                    }),
                  (d.href = a),
                  n
                    ? n.parentNode.insertBefore(d, n.nextSibling)
                    : document.head.appendChild(d);
              })(e, c, null, a, n);
            }),
          a = { 4556: 0 };
        o.f.miniCss = (n, s) => {
          a[n]
            ? s.push(a[n])
            : 0 !== a[n] &&
              {
                716: 1,
                774: 1,
                970: 1,
                976: 1,
                1804: 1,
                2414: 1,
                2516: 1,
                2634: 1,
                3027: 1,
                3236: 1,
                3303: 1,
                4268: 1,
                5004: 1,
                5068: 1,
                5139: 1,
                5871: 1,
                5894: 1,
                6341: 1,
                6814: 1,
                6855: 1,
                6966: 1,
                7072: 1,
                7233: 1,
                7246: 1,
                7328: 1,
                7368: 1,
                7819: 1,
                8019: 1,
                8163: 1,
                8287: 1,
                8396: 1,
                8516: 1,
                8685: 1,
                8843: 1,
                8987: 1,
                9297: 1,
                9672: 1,
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
      var e = { 4556: 0 };
      (o.f.j = (a, n) => {
        var s = o.o(e, a) ? e[a] : void 0;
        if (0 !== s)
          if (s) n.push(s[2]);
          else if (/^(4556|5894|7368|8163)$/.test(a)) e[a] = 0;
          else {
            var c = new Promise((n, c) => (s = e[a] = [n, c]));
            n.push((s[2] = c));
            var d = o.p + o.u(a),
              b = new Error();
            o.l(
              d,
              (n) => {
                if (o.o(e, a) && (0 !== (s = e[a]) && (e[a] = void 0), s)) {
                  var c = n && ("load" === n.type ? "missing" : n.type),
                    d = n && n.target && n.target.src;
                  (b.message =
                    "Loading chunk " + a + " failed.\n(" + c + ": " + d + ")"),
                    (b.name = "ChunkLoadError"),
                    (b.type = c),
                    (b.request = d),
                    s[1](b);
                }
              },
              "chunk-" + a,
              a,
            );
          }
      }),
        (o.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var s,
            c,
            [d, b, f] = n,
            r = 0;
          if (d.some((a) => 0 !== e[a])) {
            for (s in b) o.o(b, s) && (o.m[s] = b[s]);
            if (f) var i = f(o);
          }
          for (a && a(n); r < d.length; r++)
            (c = d[r]), o.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
          return o.O(i);
        },
        n = (self.webpackChunkstore = self.webpackChunkstore || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();

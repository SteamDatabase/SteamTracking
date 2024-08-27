/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "9141450";
(() => {
  "use strict";
  var e,
    a,
    n,
    s,
    c,
    d = {},
    b = {};
  function f(e) {
    var a = b[e];
    if (void 0 !== a) return a.exports;
    var n = (b[e] = { id: e, loaded: !1, exports: {} });
    return d[e].call(n.exports, n, n.exports, f), (n.loaded = !0), n.exports;
  }
  (f.m = d),
    (f.amdO = {}),
    (e = []),
    (f.O = (a, n, s, c) => {
      if (!n) {
        var d = 1 / 0;
        for (i = 0; i < e.length; i++) {
          for (var [n, s, c] = e[i], b = !0, o = 0; o < n.length; o++)
            (!1 & c || d >= c) && Object.keys(f.O).every((e) => f.O[e](n[o]))
              ? n.splice(o--, 1)
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
      var c = Object.create(null);
      f.r(c);
      var d = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var b = 2 & s && e; "object" == typeof b && !~a.indexOf(b); b = n(b))
        Object.getOwnPropertyNames(b).forEach((a) => (d[a] = () => e[a]));
      return (d.default = () => e), f.d(c, d), c;
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
        3586: "libraries~adb1a40ab",
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
        67: "76e3166a932cc7df96f9",
        144: "0498831538342f45cd2b",
        195: "5e502b781d0342f9d209",
        209: "3ec389421e8c604b53b4",
        311: "f501b78658f28386ce52",
        407: "3985df4a4bfc87d22ad6",
        414: "201a144af15ed2ba0c2f",
        423: "95e84c1ad3947c9e44be",
        478: "f40c03115679b2759263",
        494: "4d81d58bdb3de37ead2b",
        516: "84cfd38707e80c4aa865",
        539: "4c4d77408e44eb614e92",
        576: "fbb224a14012ffac8fdc",
        582: "5c631c967bb5466cc361",
        614: "552a55035f53bbf7d772",
        651: "c1d75c63fd3dd743d410",
        716: "ed3bb2cd06be0ac4bdab",
        809: "5b755a59eda635da3ac6",
        927: "96acdf5319ec81aa616d",
        934: "b26fbbd6398e7c021aa5",
        970: "f458b9788f85a31236cf",
        976: "3b40444857f830faf01f",
        1006: "1a63511abfa480e173d3",
        1048: "c015c357dc90c4ab64ba",
        1065: "2feb30c4d4171be45f80",
        1192: "382a54ab2464c14dc7e1",
        1216: "bdca5c010feb15de3dd3",
        1225: "0c1fa1032043e7f14b61",
        1227: "0f5e6789a4ea35a6ad7d",
        1337: "6aeb3dd352be55467443",
        1351: "d55c83c6d8bd561324dd",
        1369: "5a8faa4781abb5592865",
        1396: "53d7f5550e4564863daf",
        1398: "2f296ccd1e69335508f1",
        1449: "f13e00b67e5b5745bc52",
        1531: "73c99c783a3bacb4ef16",
        1543: "315e0dba7300d8617da5",
        1559: "06222691ee24df51f226",
        1606: "e64b603faeb908e5d480",
        1804: "d55b3b804b8cf1cd4443",
        1838: "ffae208bb416498e0851",
        1853: "f9cfd579ac4f8c82b175",
        1973: "e6e195fa16b26fd34fd5",
        1998: "d6a6d5f8416703ddca94",
        2095: "cec8d9cb7a175a3c027e",
        2184: "8d069413a50bde2e3118",
        2206: "de638a4621620aaa486d",
        2209: "856b890987f892366c2c",
        2256: "8743829e84e3a48bfc34",
        2298: "12088e93f39c4869b5a3",
        2320: "c1feeaf839c525bb7c67",
        2414: "ad69db44778c3fd8f585",
        2435: "3529f26a25593cbbab44",
        2484: "eaae6bbfcae11698799f",
        2500: "a450785ec759a7d103bb",
        2516: "c2c93d832da2bc9088d2",
        2543: "4b11a6be72f5027cd704",
        2568: "904830bc76a00e62666a",
        2575: "cfaed3787c2fe75512bb",
        2608: "eee4cd0101f188aeb39c",
        2632: "0d1653cd571a39b15f27",
        2634: "22744dcb8cee3fcc0335",
        2702: "ce8b848959907a77ab29",
        2708: "78187193eff07d147b6c",
        2726: "0cc2b898e3a822219f24",
        2749: "24ccccfaaa9f251d5b68",
        2753: "272b3583cc560cf03dad",
        2797: "6ad00f4bbb01fd9c8a39",
        2842: "a5530e816da8a3f2e9b8",
        2855: "50b814127eef27cce236",
        2907: "7be5f247e3881f1ab486",
        2954: "726c68cdf579681f08b8",
        2960: "6e1ded326a4a18c346bf",
        2964: "05f2675981e4bb12fead",
        2965: "90427d39e723b0f1ddad",
        2992: "075f8687f6cb365785ee",
        3027: "b015e0534b5ea60aaa03",
        3164: "d4c4a90753aaaa26bc99",
        3167: "83955532dddadb827ea4",
        3216: "4e6337d051f11b51e8b3",
        3236: "b96c81e582ae698a892c",
        3266: "3d11b8a570125adb3768",
        3303: "48c646e57f335bce0204",
        3374: "fab39e16985cebbcb69e",
        3397: "e4ded92d2d051830fc40",
        3436: "0db930cc322e813608ed",
        3449: "22e2f3e9ada2c8fdaa36",
        3562: "1994ef6500c112e94990",
        3569: "35348f7e4ed25ceac5d8",
        3586: "43ce71ecefc75d2ac577",
        3587: "94bef3f7f7b2f6029f8e",
        3645: "bd4dc4faec18938faaed",
        3679: "0224a531c399fa613adf",
        3701: "3ad23d6aa47bca2120c6",
        3710: "ef9ad73cdc93cf8428d9",
        3730: "674ec3c5974377030da3",
        3833: "604601f2a4d065d89046",
        3872: "3f128f8b13592ae0ab2a",
        3912: "1f2173baec92f2527fe7",
        3940: "1393d3d0ba3eee9d1b2f",
        4039: "83d4afc1033bcdec0a28",
        4112: "9523480e95cb8f6e60a5",
        4113: "2f55e29f8d3d497e441b",
        4150: "94794091916edea3ba03",
        4153: "88ead4b7948310f5790b",
        4156: "57c4cd447e8903d9ea72",
        4182: "c2a0de3eddc58922edc3",
        4268: "8efb8b91832e19cf1b69",
        4336: "520fb2200baa427d7b41",
        4372: "1e512079974620cf7e9f",
        4419: "dcb233b145a6c4866735",
        4571: "daa602ecc49f980771b3",
        4630: "176a99eb477f95116352",
        4657: "cea247c8e8b8c76a0dd3",
        4717: "290b544d240a6e380602",
        4796: "7109a1d656f85ae231f3",
        4868: "9b6005e0f4d781a9515c",
        4893: "d891ff048d7bfddc5d6e",
        4917: "f6adebc7b99f0982a874",
        4977: "104e01418b62be8219ad",
        5004: "32496fa9c4f1f0b1a270",
        5018: "bede9108658cd046cae2",
        5066: "03305a5a001e563107b3",
        5068: "15fec993db8128e9fe15",
        5110: "fc00b1354dd9be6b7c23",
        5134: "9596c47c17800a45cc56",
        5139: "d11e4c6b2489c93511c0",
        5183: "b2064bc9920af333cf72",
        5189: "219ceca289df2109ab34",
        5231: "2724d0de18cba8996ab6",
        5232: "7e447176bd8be6994d99",
        5240: "4cd0cbb471554bd41e17",
        5241: "38e792fa991ff5c7adf3",
        5397: "ebbbeec80a8a70b58d36",
        5422: "a2e119bdccc9dfc646cf",
        5484: "85e30c26faf3c14ad559",
        5552: "98f2dc781fc880171959",
        5579: "57852c2d9bfb117ee0b6",
        5605: "c0d04530eca6d7f74180",
        5791: "0b284c17bae2edf16fb5",
        5831: "2b23b9fbb82bd5138681",
        5871: "fc500d0cccc48c651283",
        5894: "420232b33da97c9b7690",
        5961: "2c70439641af4aacbd5b",
        6031: "5d6cc25ebb5f1a88d97a",
        6049: "5e610a5665ff4eac4270",
        6103: "3e3b65fabec655df899a",
        6149: "3b10ee30ba4dff255afa",
        6159: "625b0cd3c0d05d529228",
        6165: "70d75f530f13420c32cd",
        6173: "ee2d2c9b8dae57e51e43",
        6208: "b7be3908578bc6c5ec89",
        6224: "d5320c73491054d5aa0f",
        6236: "0f72bb8369ef44b1c20a",
        6239: "2e1d7f8048469276d366",
        6337: "c8083acfa2fd1c806666",
        6383: "87163ce8ea07ad7a01ba",
        6403: "2caaa3d29afb2f6ee07d",
        6417: "7a066d684eec1591c4a8",
        6459: "f01ae1ab12b36b0e562c",
        6523: "e7a3174338ff31257778",
        6525: "c7b7ab8fe401cb3837bf",
        6562: "24347d4ed104675b1fd8",
        6589: "a5cd70c751874e96ea4c",
        6592: "824968a2183f26ce5cc6",
        6597: "15fd615d90973d212f80",
        6606: "67867a736c154177c3e8",
        6649: "d5acfc118e6fa770c013",
        6664: "4a4f9856206d5afab769",
        6716: "a473630582e6a6660b82",
        6728: "a175aa3f115fa1743f9d",
        6759: "f262ee569c99e4442f34",
        6771: "6397fff9b84f2497d9b1",
        6814: "ebd3be618b79eb58d387",
        6845: "1ef399101ccc089a5708",
        6855: "755c12029dbc672501ab",
        6948: "e36d79fc052ee0089f50",
        6958: "7aa55393cb714028d342",
        6966: "0fa6b715930f5dbdb6b9",
        6979: "cc6737cfc4360eab2516",
        7064: "52aee32ff5900bdd48da",
        7072: "198cdb51747521de9bad",
        7138: "dd7723ae9aa9371eccec",
        7174: "361da43086f073637173",
        7233: "6e9a7dd71cc4fa15a105",
        7246: "99ce1fdcae966e0d956b",
        7252: "07c972ec8688274f982d",
        7276: "84b5ce9875e14c25231c",
        7328: "81cb93a3f6e5c47d7309",
        7368: "e298b59cfea565834249",
        7382: "0e16f12433792ef5ae66",
        7403: "d70bd8c3d3225f727d97",
        7436: "c97c284756ed7af866a0",
        7439: "29574a4c9c79b8eb7654",
        7502: "f878b3d8eae95c017f15",
        7539: "bc23aa3e5e53f2eceddd",
        7576: "62e4b2b5184932def761",
        7591: "d7f928b5f06fc4dc0695",
        7625: "6adf8fd6e4b1091b2e77",
        7631: "77956f1070f631daac37",
        7633: "501a0ca8caa622200d58",
        7681: "efa681bd6e009e2ad743",
        7725: "4539e3a0eabd52ea97e3",
        7772: "6570d97ff463225f625b",
        7786: "01357dd7c2c2910e2116",
        7796: "e3eed4668b87ceb3cb26",
        7798: "0e261ba3bf087510f3b2",
        7817: "2bddf04b7734cee48def",
        7819: "ffb828c8597e1b6116a2",
        7908: "af8d3dab956cc7a984ab",
        7926: "9d724e69039458b8eb3a",
        7929: "086d775c77953660b7dc",
        7937: "577349ac3f598d694a35",
        8019: "ccb49e4db061dbf80d52",
        8025: "abec1ea492f726f2065e",
        8163: "71f64de76d4b23b0f726",
        8199: "5f211fe0a44ded513717",
        8287: "2927f05c53f042a41b51",
        8294: "b87fc9754661feb2128b",
        8306: "d8e703a5499f3649ae88",
        8396: "513e0df29ac9b17c8101",
        8516: "f4b102a7f1efbe2052c8",
        8567: "9694fef5c1cc2e4101e4",
        8585: "b5f8ebf7aef48cd8638b",
        8595: "122818308d38490799e5",
        8639: "bd16365a2f027c1db00c",
        8680: "3e06f8e525937a0d239f",
        8685: "840abc0daf0f3617087b",
        8709: "fd1a1d6f9a9512832d69",
        8718: "f5a1ae16f915002c779e",
        8755: "6d53ff56e650af850f69",
        8801: "90d60a53ab0c9d0c6cc4",
        8843: "4b23759050ff89e5f915",
        8967: "40f11db393b3faa96d7a",
        8970: "1ea30209d5d93b9d727f",
        8987: "01e8ba2df22df2b57466",
        9027: "d9aabbca8ab6bdcdba81",
        9050: "c0f000fefef1e29cb1df",
        9152: "50fcc08f40ee35b373ae",
        9188: "e7272e92ecc91d0d4540",
        9207: "048395ad629a9382164a",
        9236: "769eed8fb31399c6fe30",
        9297: "f1028b6292499b230371",
        9326: "9dd2cef5abf0268ec58f",
        9391: "ece8f9eea70235a3a2df",
        9431: "a6e68186b32f40471c9c",
        9566: "72daf6050ede92a6a8fe",
        9650: "1b0e39eea2f429cb3beb",
        9672: "aeadf1cb238639c7a4f2",
        9712: "278431fba4346811ed62",
        9730: "323cb03db84d9019eb50",
        9790: "0aa0baacc0048fab01f4",
        9812: "5b5daff40b636dc83472",
        9916: "c086b534baf277a81048",
        9935: "fbc0a96aa212302ebc0e",
        9992: "5d38958019c07711ed67",
      }[e]),
    (f.miniCssF = (e) =>
      "css/applications/store/" +
      ({
        716: "curatorreviewlistlanding",
        970: "eventadmin",
        976: "greenenvelope",
        1804: "labssandbox",
        2414: "steamcharts",
        2516: "interactiverecommender",
        2608: "chunk~adb1a40ab",
        2634: "accountpreferences",
        3027: "steamawards",
        3236: "gamemixer",
        3303: "decktopplayedappbanner",
        4268: "events",
        5004: "profileshowcases",
        5068: "crossplatformjoin",
        5139: "seasonpass",
        5871: "messages",
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
        716: "b6c0098103ded0e35f10",
        970: "a0099daf5c40630c4db6",
        976: "b6bf74d280182417b6e7",
        1804: "61bd4dfbacb022ec30ac",
        2414: "78cc48c0a55d32625bf0",
        2516: "77edea8790497f7695a2",
        2608: "5974e1d14f380b4fb62b",
        2634: "0c9c03e181765e3ff009",
        3027: "f5c915c29b7efb5891a0",
        3236: "6578e23a536e67e70e83",
        3303: "65d80f01cfa3342f2df7",
        4268: "0d6d9129e2f70da9e4c7",
        4571: "d20ae989a3153ba9ecdd",
        5004: "71a720367bf869035355",
        5068: "1246eafe3809bada7e72",
        5139: "115c475da714adbac8a6",
        5871: "e230e640364b4b0d22b8",
        5894: "8a4fa050a652c325c149",
        6049: "0ca893008bbacb2fe1f0",
        6173: "df2c0c68dff108767e0b",
        6814: "c7cdb96305fd6eaaf5b6",
        6855: "2f33844fabf24ec4840b",
        6966: "97e5d483fbd8b12e9f34",
        7072: "77002f6592508e7f28f8",
        7233: "e51a509b0e7fc25699ec",
        7246: "789dd1fbdb6c6b5c773d",
        7328: "ac3d542da104667b7275",
        7368: "a25cdd104276a8dc3c6f",
        7436: "36f12bdcd4a8ae076443",
        7819: "26e16e826f71acbe014e",
        8019: "a35aadaed6fd3eca6016",
        8163: "3407cdbd29d91debebf6",
        8287: "4c262aa325de436f4eb2",
        8396: "3ae1e1cb3de59b5db9be",
        8516: "3bfbce9eea5a17e70921",
        8685: "007c6d51f7f7cf8bfb4c",
        8843: "ffd03d85eb78f89758fc",
        8987: "8a4fa050a652c325c149",
        9297: "b766fe3b0ddb794f611d",
        9672: "fd4f754183e5e57aea2e",
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
    (c = "store:"),
    (f.l = (e, a, n, d) => {
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
              t.getAttribute("data-webpack") == c + n
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
                c = f.p + s;
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
                          d.parentNode && d.parentNode.removeChild(d),
                          c(o);
                      }
                    }),
                  (d.href = a),
                  n
                    ? n.parentNode.insertBefore(d, n.nextSibling)
                    : document.head.appendChild(d);
              })(e, c, null, a, n);
            }),
          a = { 4556: 0 };
        f.f.miniCss = (n, s) => {
          a[n]
            ? s.push(a[n])
            : 0 !== a[n] &&
              {
                716: 1,
                970: 1,
                976: 1,
                1804: 1,
                2414: 1,
                2516: 1,
                2608: 1,
                2634: 1,
                3027: 1,
                3236: 1,
                3303: 1,
                4268: 1,
                4571: 1,
                5004: 1,
                5068: 1,
                5139: 1,
                5871: 1,
                5894: 1,
                6049: 1,
                6173: 1,
                6814: 1,
                6855: 1,
                6966: 1,
                7072: 1,
                7233: 1,
                7246: 1,
                7328: 1,
                7368: 1,
                7436: 1,
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
      (f.f.j = (a, n) => {
        var s = f.o(e, a) ? e[a] : void 0;
        if (0 !== s)
          if (s) n.push(s[2]);
          else if (/^(4556|5894|7368)$/.test(a)) e[a] = 0;
          else {
            var c = new Promise((n, c) => (s = e[a] = [n, c]));
            n.push((s[2] = c));
            var d = f.p + f.u(a),
              b = new Error();
            f.l(
              d,
              (n) => {
                if (f.o(e, a) && (0 !== (s = e[a]) && (e[a] = void 0), s)) {
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
        (f.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var s,
            c,
            [d, b, o] = n,
            r = 0;
          if (d.some((a) => 0 !== e[a])) {
            for (s in b) f.o(b, s) && (f.m[s] = b[s]);
            if (o) var i = o(f);
          }
          for (a && a(n); r < d.length; r++)
            (c = d[r]), f.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
          return f.O(i);
        },
        n = (self.webpackChunkstore = self.webpackChunkstore || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();

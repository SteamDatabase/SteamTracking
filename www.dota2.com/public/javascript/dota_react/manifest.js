/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "9550242";
(() => {
  "use strict";
  var e,
    a,
    d,
    f,
    c,
    b = {},
    r = {};
  function t(e) {
    var a = r[e];
    if (void 0 !== a) return a.exports;
    var d = (r[e] = { id: e, loaded: !1, exports: {} });
    return b[e].call(d.exports, d, d.exports, t), (d.loaded = !0), d.exports;
  }
  (t.m = b),
    (t.amdO = {}),
    (e = []),
    (t.O = (a, d, f, c) => {
      if (!d) {
        var b = 1 / 0;
        for (s = 0; s < e.length; s++) {
          for (var [d, f, c] = e[s], r = !0, n = 0; n < d.length; n++)
            (!1 & c || b >= c) && Object.keys(t.O).every((e) => t.O[e](d[n]))
              ? d.splice(n--, 1)
              : ((r = !1), c < b && (b = c));
          if (r) {
            e.splice(s--, 1);
            var o = f();
            void 0 !== o && (a = o);
          }
        }
        return a;
      }
      c = c || 0;
      for (var s = e.length; s > 0 && e[s - 1][2] > c; s--) e[s] = e[s - 1];
      e[s] = [d, f, c];
    }),
    (t.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return t.d(a, { a }), a;
    }),
    (d = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (t.t = function (e, f) {
      if ((1 & f && (e = this(e)), 8 & f)) return e;
      if ("object" == typeof e && e) {
        if (4 & f && e.__esModule) return e;
        if (16 & f && "function" == typeof e.then) return e;
      }
      var c = Object.create(null);
      t.r(c);
      var b = {};
      a = a || [null, d({}), d([]), d(d)];
      for (var r = 2 & f && e; "object" == typeof r && !~a.indexOf(r); r = d(r))
        Object.getOwnPropertyNames(r).forEach((a) => (b[a] = () => e[a]));
      return (b.default = () => e), t.d(c, b), c;
    }),
    (t.d = (e, a) => {
      for (var d in a)
        t.o(a, d) &&
          !t.o(e, d) &&
          Object.defineProperty(e, d, { enumerable: !0, get: a[d] });
    }),
    (t.f = {}),
    (t.e = (e) =>
      Promise.all(Object.keys(t.f).reduce((a, d) => (t.f[d](e, a), a), []))),
    (t.u = (e) =>
      "javascript/dota_react/" +
      ({
        189: "libraries~32268aa13",
        976: "shared_thai-json",
        1225: "shared_swedish-json",
        1449: "shared_bulgarian-json",
        1973: "shared_japanese-json",
        2256: "shared_english-json",
        2320: "shared_norwegian-json",
        2435: "shared_latam-json",
        2632: "shared_spanish-json",
        2749: "shared_romanian-json",
        2954: "shared_ukrainian-json",
        3710: "shared_arabic-json",
        3912: "shared_italian-json",
        5018: "shared_french-json",
        5110: "shared_dutch-json",
        5241: "shared_tchinese-json",
        6031: "shared_finnish-json",
        6149: "shared_vietnamese-json",
        6165: "shared_hungarian-json",
        6208: "shared_german-json",
        6239: "shared_portuguese-json",
        6523: "shared_danish-json",
        6562: "shared_brazilian-json",
        7084: "AdminPages",
        7539: "shared_koreana-json",
        7591: "shared_czech-json",
        7786: "shared_schinese-json",
        8025: "shared_russian-json",
        8306: "shared_indonesian-json",
        8967: "shared_polish-json",
        9027: "shared_sc_schinese-json",
        9152: "shared_turkish-json",
        9712: "shared_greek-json",
      }[e] || e) +
      ".js?contenthash=" +
      {
        17: "595312680935f8b6addb",
        45: "f5e8ecf5a9ddd61b20de",
        74: "5b6547203d9b10438218",
        117: "1a54e4e2532a0ee03e25",
        151: "419b4be97275bcd14cae",
        182: "e16ddd7e6e03c73f3711",
        189: "621b539900e41b827330",
        203: "182639b25c176d208002",
        208: "21c4d052e99912c284ba",
        258: "6b2e6ca2c0487d104018",
        264: "65fcaf14f05dd7ab891f",
        276: "786e6151c064e3c7536f",
        280: "34c3560014874887c4fa",
        287: "9fa653e67099b092bf3d",
        362: "678c45354878c2aed134",
        436: "92b3a64c8dae0cd4539e",
        445: "361f53521811267f1d21",
        470: "03f83c1f0deae808caa5",
        485: "0c676e87d6ad35151825",
        551: "68333ffd0f33bfcfe696",
        568: "abf383125befa396929f",
        618: "fe436429cfe63182a297",
        629: "9882fbfa42f8349375ac",
        657: "85c64120948e68d6036c",
        663: "dfe8d80fcf3f53b16fef",
        777: "3a463365691ec8316a54",
        795: "aa225748d3ec83181d99",
        809: "74c2bebc3507a751c25e",
        868: "2e6e61af459a5003dfee",
        902: "89acdf27158b9928f8cb",
        909: "86ed045c6fe567f3120b",
        976: "5a402e09a69c5fd7a8d1",
        1020: "9b72c1b674d994090ec2",
        1040: "b40b9ceca241873c3a97",
        1073: "af8ffc644c0587630033",
        1116: "b7ace0a57c32f63a5daf",
        1159: "02ea4bca0306bd47722b",
        1225: "fd195a5cd0ced5cef8c6",
        1255: "44401cf94b31e45f4f11",
        1259: "a85a5ea7159020e1a489",
        1336: "4728efe4d64639b7c0bd",
        1378: "ef2042b665683ef771e2",
        1413: "223723df83ebaab903f1",
        1448: "e072fa3f8bf7f202ed7d",
        1449: "3d007dd06ceb5df35cd3",
        1482: "5f0afa2ad2ffba8d2d1b",
        1504: "f3297b1ece0ca5f3f276",
        1520: "c72d65158c851fef2f39",
        1529: "06e6426aed4047f92b55",
        1547: "72296425c6fc7942a549",
        1552: "1b7b9ee220952cfb68ef",
        1564: "f857745f23e434bc962f",
        1580: "43b69b9d9f5c79e51a5b",
        1601: "ddc24ecd4d1b9bc51af6",
        1620: "3c99d2265a800b81adfc",
        1649: "30a35d8823530cd09ba9",
        1665: "8e8e815802349725a41f",
        1707: "abce34411930359e0cb2",
        1716: "33d9ce167b01ae87709a",
        1730: "91e1ca83aba0fe92b0f3",
        1748: "8f21e3fb26f575e80157",
        1762: "eef4e1e88ae61d086a34",
        1765: "d2d7a5d132fef9baf359",
        1773: "4910d554ba9ee49f3c64",
        1815: "e26242ea9ae3d5b8f288",
        1821: "31af8351e40631ff15c7",
        1831: "8d26511f63421848e0e7",
        1926: "3a1a8e3903289d3ad728",
        1947: "e80adb03ce7ade38f93f",
        1954: "7350b59235d0fa693a8f",
        1957: "89d6ed88c38ca7d759d7",
        1973: "8a1cd863514f65bf1252",
        1987: "a84960666e1c74badf0f",
        2006: "9aed8e1dc75e192c3396",
        2076: "ef0b178caf8ddfe94084",
        2162: "e0fd080e02f23288432c",
        2181: "c7cdd4366a5f1fa57fa2",
        2198: "06bb8c0012c047f08b45",
        2222: "5aeea6deeeb7270c1ad1",
        2225: "d74922cf8bf84c627f2d",
        2233: "823033e1f2ee63856568",
        2255: "9137482b99cfb22b33e6",
        2256: "bbd0298124357035d942",
        2305: "974890122d40e9a8aa4e",
        2320: "59336b5987b521b6a89d",
        2336: "ee7bef6873d3987b9697",
        2339: "c1aa77897836ed26f880",
        2345: "2cbac0563665cd8b0be5",
        2405: "8ac837616087ac1f7acd",
        2408: "2918d8e99cbef400c4c4",
        2416: "b409a11f6afeb1847e37",
        2419: "c42d3ae743697c5d2fcb",
        2420: "5b756a83bcad25868f7c",
        2435: "109dc73d00a02e8b89ed",
        2467: "0335a447eae627ea4ba6",
        2505: "1e62824f16ab48fd49aa",
        2509: "bbe3d0b83605ba628c6d",
        2533: "85ff5e47edd5d8030df4",
        2555: "7e70a3be8c87dfc9585d",
        2632: "6d1def4ac39e2c0a26a5",
        2637: "bb36572d285c77685b33",
        2671: "eae3f634723129a2cab8",
        2692: "9d984d329831cf4bce97",
        2711: "7283ed2b705d4da50756",
        2749: "c73ad7de675d2320dc57",
        2780: "799275094be1ad6aec8b",
        2805: "2efe421eff9c4763598f",
        2865: "8969bca1e6b86076a384",
        2876: "ded68a3ec848d4419c0a",
        2896: "11f99ac8ab6a768dfce8",
        2902: "5aea5466805dccacbe0f",
        2925: "4b0cb87a79b1ce581d96",
        2938: "98975205d455ecde1e68",
        2949: "01e6b755376cddc04a88",
        2954: "59b13429538587a80910",
        2966: "e70e6882de141bbe32bd",
        2986: "3c174b954588a5eee7c9",
        3035: "b484a01e116d6857054e",
        3038: "2128630515d72743d0ef",
        3100: "a455155ef1cb9e37b820",
        3106: "89997739327df9b973e3",
        3144: "6f5ba9c5aea4d5c21273",
        3147: "0aa0c5b79f813b4e58e6",
        3161: "56ae6e400bbc8d3a6aef",
        3174: "b26ca261c6e1fd7b902e",
        3186: "37894ca504bcc123e614",
        3190: "a7747f1797bc1eb25689",
        3227: "28d379cf98c40e41d14f",
        3283: "90f658fb30bb215250d5",
        3286: "53de27d3e2e368cd9772",
        3294: "aea658d4047ef9d1f84f",
        3396: "0e8a2c63cc123fa1f0d5",
        3404: "c4ebe7a6669e0159ab3f",
        3465: "7ab82d5dc689d99e3a57",
        3468: "12876da5bf843eeaecb9",
        3515: "dfb320a310b2724b420b",
        3526: "d5cd32f4f51d74846212",
        3562: "bbc3f1559949fad0a9b4",
        3579: "70b3443dfb8f1a8f0250",
        3630: "3e2c4bd789c0496cfc58",
        3654: "22a5422f5b7dded43691",
        3678: "1702346eebbf073f00ff",
        3695: "a21047669ee04dcd136c",
        3710: "eba3d4f77820a21e3cfa",
        3742: "21984393b7e8cb6f38f2",
        3746: "ea645d099d936afc0b58",
        3748: "b8fe84d7ae2041978ed0",
        3755: "e93804b40cdb1e30a83e",
        3819: "7539fe93385658b129a7",
        3860: "9eba22d1dfd8ea4273e8",
        3889: "097bdecfee03a8250d4f",
        3903: "a48caa3440564692cac4",
        3912: "0605d78e5f8e9596c193",
        4030: "96f0b162891c9017bef4",
        4037: "db039a56c00b66e951f4",
        4064: "8f15eea8437b30181644",
        4065: "4fb8014ee530e65b3561",
        4105: "7957a8d7eefbe9db2d9e",
        4165: "acb8ed8a8f67ff38ac41",
        4172: "ad3d6ab7666041378a63",
        4187: "bf83a5012fb96e29092d",
        4197: "35536e0f7760ee76c4e8",
        4242: "a6c7cd944be040d89707",
        4249: "f875e1520692ca16cbaf",
        4298: "7531236be39c2491a9b4",
        4317: "db55baffb373dffcf5cb",
        4333: "6fd7c09dcb87c9eb16e2",
        4338: "dd19456c9ee5518b2e9f",
        4345: "f7dbf9f228297b5d3514",
        4349: "b5dd8a16e240e615ef4d",
        4353: "747088f660b028dfd584",
        4398: "2a75abf22b8a9f77b00a",
        4406: "edcab4e2dfdfee45e7e0",
        4442: "9559ebef88870a7d6b7f",
        4498: "e3ba635bed57be4a9d7d",
        4504: "8c5fb88f86d7b64f240d",
        4523: "0524936d8821757e643d",
        4531: "bd85b0841e028b0ad907",
        4551: "db1f44866b4b004afd12",
        4561: "c6897bb114282ffcbb90",
        4565: "fe1e5351143f702b73a9",
        4570: "7361d442a4969caa7b09",
        4605: "3162bef1af6e6e803fe5",
        4606: "bb8dfd73efb1d85ddbfa",
        4610: "b3f7946dd9f255e2eb92",
        4697: "72a3ed137fdea662626a",
        4723: "6b71474659ba7219212a",
        4747: "0878a0003fd3cb7fed95",
        4763: "09d3f1b7bf3f19493a3b",
        4769: "0d869df9e294f1a8267f",
        4774: "8a0a95dce76562e98213",
        4823: "d3261357bc2f1d957e65",
        4830: "b559a44792e70798838f",
        4848: "452bfd459c8ce1f2ad3e",
        4854: "753b30237b9f8c3c80b8",
        4855: "a2329d570986647df4f7",
        4856: "1b26db964d7cf026a4e4",
        4863: "82a7e2577ea5ffe0ccad",
        4925: "31ef30d269e9987abe82",
        4927: "fc051208d9b987900383",
        4933: "fc9c19f2b4a2cf287c2c",
        4955: "09746e9111396ead9a1f",
        5004: "5b70d4d2b9dc71a5c76d",
        5018: "6281b7bf7ae592043863",
        5024: "dff9232c50675605c9fa",
        5034: "8b32f8aa4ea195ce0b7f",
        5046: "ef8a1dfa2ac734eafaf8",
        5075: "5b483b564d4f0f77dee8",
        5088: "5bb53664806fb791cbf7",
        5110: "b15fd93efa77fee2a309",
        5140: "918060be2e52abbb022e",
        5147: "2c5dbdf9f4c27ba90a5b",
        5165: "54f74c3b2068ada211ed",
        5212: "22b45047b5eaf75ac13f",
        5241: "ca183b7508c8dcb0eb5b",
        5243: "5ad9fffc61b0c159e2da",
        5254: "db46ace4825aaea51f7c",
        5256: "f0ec44e6f2a823d64410",
        5302: "8b7133c3c7d5daba01c4",
        5353: "dd56b0a090d6e1b5212a",
        5362: "d2db3bd034f7ad0e3b75",
        5395: "465dcd79f460f6f069fd",
        5397: "a094ac465f6e56ed6bab",
        5441: "91704e2d6ff0b6d44219",
        5480: "fc5aeb5f26e9fda50303",
        5499: "26077e6e3957863f0fe0",
        5509: "43358da2ead13190e633",
        5513: "633dac6240de8cc83c6a",
        5527: "b36ea9af4d3e9f8e1463",
        5586: "2436d239327ef8b06828",
        5662: "ad9f0ee7f9a8fdcdeefb",
        5665: "c7bec812c85788f566c3",
        5708: "07ee592eec6be0bbce88",
        5732: "942d35f428be04f09377",
        5744: "f03e0edc7f6dddb55327",
        5755: "e4c679657bff540dcb2d",
        5765: "27ec4a3b37429342930f",
        5794: "2c16677c4b321d42047a",
        5836: "5e377959aa3ab1434af6",
        5844: "3c25af6599d420116bca",
        5847: "871643975f71499c88ea",
        5873: "777a43edebf0934474fa",
        5918: "0638621bef2f237a69ad",
        5926: "07a74c9adbd0df2a5e1b",
        5928: "78c6dbbe1721a81cee15",
        5963: "7021b725eadbef0f42d7",
        5995: "8be6279bda05c6c6cdea",
        5998: "6a8335e0695dc9eae61c",
        6031: "db599b7ab9132a1a002d",
        6091: "ed7b3bf4b9f6d5e76eba",
        6115: "6f226864c03d788468a7",
        6146: "3ed679f6388a66450f17",
        6147: "0de253db2ea128f619c2",
        6149: "2d3e926cbfc13d966523",
        6165: "b6353138d65ad515a315",
        6182: "0b0254795633becee989",
        6187: "3ac9bbc6e060a651e10f",
        6208: "962d3dfe79d87adea026",
        6239: "097dbcf278335eb7520c",
        6242: "39ac3e9fea0c131ef6f4",
        6274: "ea6673a8f537989ecfcb",
        6278: "8325780abe2808b15718",
        6288: "623301dd9e92a13082b1",
        6315: "e1251d7e61352e4240be",
        6338: "bced723b3131727b9988",
        6345: "4dec7e7f7cfac484ea1c",
        6484: "d0bb5040eeea08b5c1d4",
        6515: "492ab7056ed9d46ef2c3",
        6523: "94526b53fb0ea6b14216",
        6553: "66337588e8c1747d179c",
        6562: "119c0ccf1f328254c79d",
        6601: "2d22cfcf5770c5630210",
        6603: "ea1ecddd475bb7fc7cf6",
        6654: "4cc56b1dccfe54a95453",
        6684: "04b6f5a9af0944099804",
        6686: "b1c7996d815b550805c1",
        6691: "bfad92f690f430b04494",
        6707: "cda44cac763c9047be6e",
        6708: "ad48e6112aa4245306e2",
        6726: "60cbe09555dc063db2c3",
        6745: "b4fb24d6bf52da51a818",
        6761: "a772f7f798d8a4fd9315",
        6784: "ec31e344c4adc807311f",
        6841: "a1e3b6b9fbce95e7ab80",
        6855: "16ea89cefc57628d09a3",
        6858: "00d54baeaba8a81731b2",
        6889: "97310a12005cd726e8b2",
        6891: "57797e32a5dc27591f06",
        6900: "462a4e143eabf3ebb5b3",
        6911: "21f4f9ef078db5392011",
        6921: "bc092e89a114c0395e2b",
        6936: "2a8fb45873b141f4bdf7",
        6949: "2e7cc62f7d1bbdb7f0eb",
        6983: "a5114eed9c1e268b5bdd",
        6987: "6eba67e075906e7eb052",
        6990: "165239d997f07137bab7",
        7040: "0b8294c85388678d795d",
        7084: "9552a130adc193fc9766",
        7092: "cbc052502096b4a84ee6",
        7116: "d7069c97ee565cfabbe7",
        7133: "9ea1bcbfcf102aa1be5c",
        7138: "91a83226384c800b899d",
        7168: "035dc0710843d428d8cd",
        7174: "315aa32aea853df87c21",
        7243: "5aba27141775bd722817",
        7244: "69b5e7e8c90d8be8107b",
        7253: "46daa84dc0ace002ade0",
        7256: "f1678691201d4524eae0",
        7257: "0b4c16a1cd143b54328c",
        7281: "b1880c6abad434d9fc7b",
        7329: "9724235539fe282309ff",
        7333: "382d796ba13fa49c4e98",
        7352: "5fe2cf3f927f3aa697de",
        7364: "4a873c0860eeae565ab4",
        7370: "fc616eade70d40caa3e0",
        7402: "18ce6b6c6da1b794e350",
        7445: "0e68302edf3f669def0e",
        7460: "b0dda6ae320bbe03d1dd",
        7462: "577659c2bb2d2a40aa35",
        7522: "9ef3a7d15217c4221287",
        7539: "269fdd9f1d3e48c31099",
        7577: "55b9e0f63f1f568e42a0",
        7590: "a6090339d63d1441f758",
        7591: "331be5a10cd3dcf90cb1",
        7610: "72f7bc828e355ea8f955",
        7616: "43c92e204d05ad547ff2",
        7624: "b774a7c4928a7dbcaf9a",
        7659: "8f86f4e10b9625561600",
        7673: "2ee54de4c26ff3b58844",
        7674: "952493baae361b0ad319",
        7726: "8df1d5dcb81290cd07c2",
        7749: "495d808d9dc7c3815788",
        7776: "086ca7d4f4a906b833cd",
        7782: "76b914fdd1662eabdfea",
        7786: "514344fbaa04d81919c7",
        7794: "b0ed11e07a7570e7146e",
        7826: "848fa011aa7423a8d286",
        7856: "4b9ecec9551106b78284",
        7890: "2e78d372cee06bc0015c",
        7898: "52b3f2866264840a7fb2",
        7906: "3442072c92f87f430f2b",
        7925: "7e8170d8e63d6ab438dc",
        7944: "a4d54e18a2b5575da512",
        7977: "86a4c8ffd45f353289fa",
        7998: "c73865245984f6b0a5da",
        8010: "4cc3c67fffea19863454",
        8025: "c5ecdf1ca714709f9160",
        8031: "f38c59960cf6f3da94cc",
        8076: "ca9bfcb0ed858d0bec97",
        8102: "1b04f3c7c70ae740e852",
        8180: "2229f130bad4825313a0",
        8194: "46a18b1d3c510553d1c0",
        8206: "3011bd4dc6612458557c",
        8267: "62f9e8d1c918542c2b61",
        8284: "197efc5b1940a9df63cd",
        8287: "40620168868da527c57b",
        8306: "9a2860ddf22527ec2f27",
        8320: "9207adcd8a2921764006",
        8326: "68f0d7bd14b276109106",
        8328: "7fb31726f7c957f94bef",
        8331: "347c16cceb2154bb70b0",
        8363: "6dae4e4f5a0db9099709",
        8402: "fedf774289149f5bdb0e",
        8499: "96bd5d76ca953fb8b7cb",
        8517: "9281b56610d6d985bb14",
        8519: "2ce0ab40152d086c8871",
        8528: "6ae7a7c69f6d3352830c",
        8539: "3205004c25a13e633ae0",
        8699: "05b6ddaf3a9b9b5fc828",
        8739: "9792416887b4c38743c3",
        8770: "ee118eac586804ada37b",
        8786: "e080acd8ad0bfa26cc0e",
        8862: "516fbdfbaff486ca0d9a",
        8914: "51635e2932decb70b710",
        8927: "e1aa9f73e34cc80ef608",
        8934: "f90ddba2ddec79900031",
        8960: "13debd8e61c4e27dcf4d",
        8967: "43ade93b189ed5c46541",
        8992: "e94d80bd0f6dcbd07d39",
        9005: "6780d05c4576d0526e9a",
        9027: "201e7564b3dc7baa7629",
        9029: "b8eedfb6befeb18d24a1",
        9033: "79aa880deece5452b65e",
        9049: "e77591e6b62428e94c07",
        9079: "4070ce625f4072969a3c",
        9102: "007ac48f219be579a348",
        9111: "ee13897c61d9662e57ef",
        9152: "7b0f1ebec8bea9be20ba",
        9159: "dc0dfddd537e6992a1e6",
        9203: "6dd69847ffae1002009d",
        9236: "dafd57cab51794cb39ba",
        9281: "6330c7af52134cd8eba1",
        9333: "436cfe504e6e0cf196f5",
        9343: "e806961d3efc76cf529d",
        9364: "20f43121941f70683fc1",
        9394: "e6e8e3f87eec9f4a2e94",
        9405: "18be24d98017e0074c7d",
        9409: "27bd66ca72a6ee1b0681",
        9458: "169a1697ec6068b0bddc",
        9467: "8f466c64052006806216",
        9474: "7cc3b039c4c782722f27",
        9497: "84f681635b070d9c303c",
        9505: "05a51801adcaa1334c0e",
        9520: "da91caaa58842c55e91e",
        9540: "10bb6669e06ed4ec4d4c",
        9542: "0abf4cc7380f80fb3e4a",
        9553: "7319b2943a8ccc051755",
        9642: "e31af0fac002b4efb3a0",
        9643: "15b86977c088a4302601",
        9695: "c7a230cf6d750b00d54e",
        9700: "d94af77cdf8caef53cf9",
        9712: "5c73e7676600b5b5ac4f",
        9727: "dbf44e6b24695175ee44",
        9747: "fd5015b3e36e6b22d5e0",
        9780: "b02a69447ae0ba7b8860",
        9793: "aff177f36018d5b86ed5",
        9801: "e3efc9cd2392bd645894",
        9831: "1487b0fca9c297ea189a",
        9863: "a8b9921f3b1154894ad0",
        9911: "c3cfa1470d707070b340",
        9983: "a1190b261c8a0b6c6294",
      }[e]),
    (t.miniCssF = (e) =>
      "css/dota_react/" +
      (7084 === e ? "AdminPages" : e) +
      ".css?contenthash=" +
      {
        151: "047bd5abef9449d6a939",
        1448: "7c937b24b913c84a1f24",
        1649: "3df20ec49db6ce6552b9",
        1831: "4c3e788f6d77f52f83b4",
        2805: "cd7d590a5bb0f7e5ce40",
        2896: "6ad213cd4c98695cce6a",
        3038: "0bc69266a337c66eeac6",
        3903: "f68ee9ecbc3291f94d65",
        4172: "cae744648961e17b6fcb",
        4349: "1c6671f3ed61dd276bd9",
        4398: "9fcda8515278691375f5",
        4605: "877e178cc1bb0444e138",
        4848: "dd33ee20d54d4de530bf",
        5046: "23187d7e760046dcb7d1",
        5665: "d4d72925109be87dfe6f",
        6745: "2bff5232c2ba85d9cfd1",
        6858: "fc4ba7be2790715b8ce8",
        7084: "2d8ec30cddeb2eb69738",
        7460: "1812655d4117fc60d216",
        9467: "bd0dee478dd54e6c8625",
        9831: "bdf590ca701ce9085eb4",
        9863: "e8fc1fd48e7611dad9ad",
      }[e]),
    (t.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (f = {}),
    (c = "dota_react:"),
    (t.l = (e, a, d, b) => {
      if (f[e]) f[e].push(a);
      else {
        var r, n;
        if (void 0 !== d)
          for (
            var o = document.getElementsByTagName("script"), s = 0;
            s < o.length;
            s++
          ) {
            var i = o[s];
            if (
              i.getAttribute("src") == e ||
              i.getAttribute("data-webpack") == c + d
            ) {
              r = i;
              break;
            }
          }
        r ||
          ((n = !0),
          ((r = document.createElement("script")).charset = "utf-8"),
          (r.timeout = 120),
          t.nc && r.setAttribute("nonce", t.nc),
          r.setAttribute("data-webpack", c + d),
          (r.src = e)),
          (f[e] = [a]);
        var h = (a, d) => {
            (r.onerror = r.onload = null), clearTimeout(l);
            var c = f[e];
            if (
              (delete f[e],
              r.parentNode && r.parentNode.removeChild(r),
              c && c.forEach((e) => e(d)),
              a)
            )
              return a(d);
          },
          l = setTimeout(
            h.bind(null, void 0, { type: "timeout", target: r }),
            12e4,
          );
        (r.onerror = h.bind(null, r.onerror)),
          (r.onload = h.bind(null, r.onload)),
          n && document.head.appendChild(r);
      }
    }),
    (t.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (t.p = ""),
    (() => {
      if ("undefined" != typeof document) {
        var e = (e) =>
            new Promise((a, d) => {
              var f = t.miniCssF(e),
                c = t.p + f;
              if (
                ((e, a) => {
                  for (
                    var d = document.getElementsByTagName("link"), f = 0;
                    f < d.length;
                    f++
                  ) {
                    var c =
                      (r = d[f]).getAttribute("data-href") ||
                      r.getAttribute("href");
                    if ("stylesheet" === r.rel && (c === e || c === a))
                      return r;
                  }
                  var b = document.getElementsByTagName("style");
                  for (f = 0; f < b.length; f++) {
                    var r;
                    if (
                      (c = (r = b[f]).getAttribute("data-href")) === e ||
                      c === a
                    )
                      return r;
                  }
                })(f, c)
              )
                return a();
              ((e, a, d, f, c) => {
                var b = document.createElement("link");
                (b.rel = "stylesheet"),
                  (b.type = "text/css"),
                  (b.onerror = b.onload =
                    (d) => {
                      if (((b.onerror = b.onload = null), "load" === d.type))
                        f();
                      else {
                        var r = d && d.type,
                          t = (d && d.target && d.target.href) || a,
                          n = new Error(
                            "Loading CSS chunk " +
                              e +
                              " failed.\n(" +
                              r +
                              ": " +
                              t +
                              ")",
                          );
                        (n.name = "ChunkLoadError"),
                          (n.code = "CSS_CHUNK_LOAD_FAILED"),
                          (n.type = r),
                          (n.request = t),
                          b.parentNode && b.parentNode.removeChild(b),
                          c(n);
                      }
                    }),
                  (b.href = a),
                  d
                    ? d.parentNode.insertBefore(b, d.nextSibling)
                    : document.head.appendChild(b);
              })(e, c, null, a, d);
            }),
          a = { 4556: 0 };
        t.f.miniCss = (d, f) => {
          a[d]
            ? f.push(a[d])
            : 0 !== a[d] &&
              {
                151: 1,
                1448: 1,
                1649: 1,
                1831: 1,
                2805: 1,
                2896: 1,
                3038: 1,
                3903: 1,
                4172: 1,
                4349: 1,
                4398: 1,
                4605: 1,
                4848: 1,
                5046: 1,
                5665: 1,
                6745: 1,
                6858: 1,
                7084: 1,
                7460: 1,
                9467: 1,
                9831: 1,
                9863: 1,
              }[d] &&
              f.push(
                (a[d] = e(d).then(
                  () => {
                    a[d] = 0;
                  },
                  (e) => {
                    throw (delete a[d], e);
                  },
                )),
              );
        };
      }
    })(),
    (() => {
      var e = { 4556: 0 };
      (t.f.j = (a, d) => {
        var f = t.o(e, a) ? e[a] : void 0;
        if (0 !== f)
          if (f) d.push(f[2]);
          else if (/^(4556|6745)$/.test(a)) e[a] = 0;
          else {
            var c = new Promise((d, c) => (f = e[a] = [d, c]));
            d.push((f[2] = c));
            var b = t.p + t.u(a),
              r = new Error();
            t.l(
              b,
              (d) => {
                if (t.o(e, a) && (0 !== (f = e[a]) && (e[a] = void 0), f)) {
                  var c = d && ("load" === d.type ? "missing" : d.type),
                    b = d && d.target && d.target.src;
                  (r.message =
                    "Loading chunk " + a + " failed.\n(" + c + ": " + b + ")"),
                    (r.name = "ChunkLoadError"),
                    (r.type = c),
                    (r.request = b),
                    f[1](r);
                }
              },
              "chunk-" + a,
              a,
            );
          }
      }),
        (t.O.j = (a) => 0 === e[a]);
      var a = (a, d) => {
          var f,
            c,
            [b, r, n] = d,
            o = 0;
          if (b.some((a) => 0 !== e[a])) {
            for (f in r) t.o(r, f) && (t.m[f] = r[f]);
            if (n) var s = n(t);
          }
          for (a && a(d); o < b.length; o++)
            (c = b[o]), t.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
          return t.O(s);
        },
        d = (self.webpackChunkdota_react = self.webpackChunkdota_react || []);
      d.forEach(a.bind(null, 0)), (d.push = a.bind(null, d.push.bind(d)));
    })();
})();

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "9178103";
(() => {
  "use strict";
  var e,
    a,
    d,
    c,
    f,
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
    (t.O = (a, d, c, f) => {
      if (!d) {
        var b = 1 / 0;
        for (s = 0; s < e.length; s++) {
          for (var [d, c, f] = e[s], r = !0, n = 0; n < d.length; n++)
            (!1 & f || b >= f) && Object.keys(t.O).every((e) => t.O[e](d[n]))
              ? d.splice(n--, 1)
              : ((r = !1), f < b && (b = f));
          if (r) {
            e.splice(s--, 1);
            var o = c();
            void 0 !== o && (a = o);
          }
        }
        return a;
      }
      f = f || 0;
      for (var s = e.length; s > 0 && e[s - 1][2] > f; s--) e[s] = e[s - 1];
      e[s] = [d, c, f];
    }),
    (t.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return t.d(a, { a }), a;
    }),
    (d = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (t.t = function (e, c) {
      if ((1 & c && (e = this(e)), 8 & c)) return e;
      if ("object" == typeof e && e) {
        if (4 & c && e.__esModule) return e;
        if (16 & c && "function" == typeof e.then) return e;
      }
      var f = Object.create(null);
      t.r(f);
      var b = {};
      a = a || [null, d({}), d([]), d(d)];
      for (var r = 2 & c && e; "object" == typeof r && !~a.indexOf(r); r = d(r))
        Object.getOwnPropertyNames(r).forEach((a) => (b[a] = () => e[a]));
      return (b.default = () => e), t.d(f, b), f;
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
        117: "7e571e6bd4a792599b5c",
        151: "045d69164de19416bd8c",
        182: "ddc4067a971c02da96c5",
        189: "be2a65c57433e584c60e",
        203: "182639b25c176d208002",
        258: "6b2e6ca2c0487d104018",
        264: "0e1800b16251c9d14596",
        276: "786e6151c064e3c7536f",
        287: "4c8c1ba6d84e21159036",
        436: "32f4a753fab922c4d928",
        445: "361f53521811267f1d21",
        470: "90711831d2e0bf0fee52",
        551: "68333ffd0f33bfcfe696",
        618: "fe436429cfe63182a297",
        629: "9882fbfa42f8349375ac",
        657: "17e993bc3764c4afaf02",
        663: "dfe8d80fcf3f53b16fef",
        777: "3a463365691ec8316a54",
        809: "2fce526aa07de0ed163c",
        868: "2e6e61af459a5003dfee",
        909: "86ed045c6fe567f3120b",
        976: "d48d8a7d129bd045450b",
        1040: "b40b9ceca241873c3a97",
        1116: "b7ace0a57c32f63a5daf",
        1159: "02ea4bca0306bd47722b",
        1225: "ac3a62277a1435876cf8",
        1255: "d8ffee13b421ac6c43c9",
        1259: "a85a5ea7159020e1a489",
        1336: "4728efe4d64639b7c0bd",
        1378: "ef2042b665683ef771e2",
        1413: "223723df83ebaab903f1",
        1449: "9501ec58147bf8ce596e",
        1482: "5f0afa2ad2ffba8d2d1b",
        1504: "f3297b1ece0ca5f3f276",
        1520: "c72d65158c851fef2f39",
        1547: "72296425c6fc7942a549",
        1601: "ddc24ecd4d1b9bc51af6",
        1620: "3c99d2265a800b81adfc",
        1649: "10059374922400190c1e",
        1665: "8e8e815802349725a41f",
        1716: "33d9ce167b01ae87709a",
        1730: "91e1ca83aba0fe92b0f3",
        1748: "db3cac4d16880852d851",
        1765: "d2d7a5d132fef9baf359",
        1773: "6efa77b3e31ec812e804",
        1815: "e26242ea9ae3d5b8f288",
        1821: "31af8351e40631ff15c7",
        1831: "1572beffe29f253c2d36",
        1926: "3a1a8e3903289d3ad728",
        1947: "e80adb03ce7ade38f93f",
        1954: "7350b59235d0fa693a8f",
        1957: "89d6ed88c38ca7d759d7",
        1973: "b8e5f1449eb8d4041bfc",
        1987: "a84960666e1c74badf0f",
        2006: "9aed8e1dc75e192c3396",
        2076: "b58fb060e82f91aa9e1b",
        2162: "e0fd080e02f23288432c",
        2181: "7a6bb79c34e325325874",
        2198: "06bb8c0012c047f08b45",
        2222: "5aeea6deeeb7270c1ad1",
        2233: "823033e1f2ee63856568",
        2256: "ed532ea72fb89ea9d1d5",
        2305: "974890122d40e9a8aa4e",
        2320: "2a2b2d40174858b6bf6f",
        2336: "ee7bef6873d3987b9697",
        2345: "84f748a9601d948fdec9",
        2416: "b409a11f6afeb1847e37",
        2420: "479aa5bdfb4329242d73",
        2435: "b27ecda6dc4a923e327d",
        2467: "0335a447eae627ea4ba6",
        2505: "1e62824f16ab48fd49aa",
        2533: "85ff5e47edd5d8030df4",
        2555: "7e70a3be8c87dfc9585d",
        2632: "6390e201dc6821474996",
        2653: "01c9b6e51e4b37242fa7",
        2671: "eae3f634723129a2cab8",
        2692: "9d984d329831cf4bce97",
        2711: "7283ed2b705d4da50756",
        2749: "8f6002f049147357a326",
        2780: "799275094be1ad6aec8b",
        2925: "3684c0b0d7b914b0220a",
        2938: "51b7e7cb3e210f853bb1",
        2949: "01e6b755376cddc04a88",
        2954: "b90681cfa84fc3c64e09",
        2966: "e70e6882de141bbe32bd",
        2986: "c551fb425628b7d0f803",
        3035: "b484a01e116d6857054e",
        3038: "2128630515d72743d0ef",
        3100: "a455155ef1cb9e37b820",
        3106: "d8e48c6fb0a794202fa3",
        3144: "6f5ba9c5aea4d5c21273",
        3147: "c01e50eb942a779f07bb",
        3161: "21e0ca429dfdb011abdb",
        3174: "b26ca261c6e1fd7b902e",
        3186: "37894ca504bcc123e614",
        3227: "271a7e6639fb7a989468",
        3283: "90f658fb30bb215250d5",
        3286: "53de27d3e2e368cd9772",
        3294: "aea658d4047ef9d1f84f",
        3396: "0e8a2c63cc123fa1f0d5",
        3404: "c4ebe7a6669e0159ab3f",
        3468: "12876da5bf843eeaecb9",
        3515: "dfb320a310b2724b420b",
        3526: "d5cd32f4f51d74846212",
        3562: "bbc3f1559949fad0a9b4",
        3630: "3e2c4bd789c0496cfc58",
        3654: "fdbec817490473a799b0",
        3678: "1702346eebbf073f00ff",
        3710: "eba3d4f77820a21e3cfa",
        3742: "0c42af2d1d80fc048f37",
        3746: "ea645d099d936afc0b58",
        3755: "e93804b40cdb1e30a83e",
        3819: "7539fe93385658b129a7",
        3860: "5cc65421f4589db5ee5b",
        3889: "097bdecfee03a8250d4f",
        3912: "3d83f6ee2414d11f7885",
        4037: "db039a56c00b66e951f4",
        4065: "4fb8014ee530e65b3561",
        4105: "7957a8d7eefbe9db2d9e",
        4165: "acb8ed8a8f67ff38ac41",
        4197: "2030553575a6deea5362",
        4242: "4fb41bc672397032d492",
        4298: "7531236be39c2491a9b4",
        4317: "db55baffb373dffcf5cb",
        4333: "c2c12ad9e83a61d81be6",
        4338: "dd19456c9ee5518b2e9f",
        4345: "f7dbf9f228297b5d3514",
        4349: "9ac8ff8bcc2fad1b75fe",
        4398: "fdca1b13968554348628",
        4442: "9559ebef88870a7d6b7f",
        4498: "877cd22317bcbce4f383",
        4504: "542b7d285a597bab5d10",
        4523: "dc81691cf0d8bfe86cae",
        4531: "bd85b0841e028b0ad907",
        4551: "db1f44866b4b004afd12",
        4561: "2cfe09268f87609d27ef",
        4565: "d32514487d4978697c95",
        4570: "f2d415fe52864f1577ef",
        4605: "3162bef1af6e6e803fe5",
        4610: "b3f7946dd9f255e2eb92",
        4697: "118f5664d677fd16d918",
        4723: "6b71474659ba7219212a",
        4747: "0878a0003fd3cb7fed95",
        4763: "09d3f1b7bf3f19493a3b",
        4774: "8a0a95dce76562e98213",
        4823: "63e3b496595ebc0f2d2a",
        4830: "b559a44792e70798838f",
        4848: "93ea327dabc8f7834c14",
        4855: "a2329d570986647df4f7",
        4863: "82a7e2577ea5ffe0ccad",
        4925: "31ef30d269e9987abe82",
        4927: "fc051208d9b987900383",
        4933: "fc9c19f2b4a2cf287c2c",
        4955: "09746e9111396ead9a1f",
        5004: "5b70d4d2b9dc71a5c76d",
        5018: "7a299574d5d58dec5324",
        5034: "8b32f8aa4ea195ce0b7f",
        5046: "fc7a6148af984c614877",
        5075: "5b483b564d4f0f77dee8",
        5088: "5bb53664806fb791cbf7",
        5110: "f60134c0f6f63093b832",
        5140: "918060be2e52abbb022e",
        5147: "2c5dbdf9f4c27ba90a5b",
        5165: "54f74c3b2068ada211ed",
        5212: "22b45047b5eaf75ac13f",
        5241: "097d8ae3f78311b610be",
        5243: "c0b8a3f0cc8743fdb897",
        5254: "db46ace4825aaea51f7c",
        5256: "f0ec44e6f2a823d64410",
        5353: "dd56b0a090d6e1b5212a",
        5362: "d2db3bd034f7ad0e3b75",
        5395: "465dcd79f460f6f069fd",
        5397: "a094ac465f6e56ed6bab",
        5441: "59610a3b94771e24dcf1",
        5480: "fc5aeb5f26e9fda50303",
        5499: "26077e6e3957863f0fe0",
        5509: "27fea7ec687abe79286d",
        5513: "633dac6240de8cc83c6a",
        5527: "b36ea9af4d3e9f8e1463",
        5586: "2436d239327ef8b06828",
        5665: "13b18e7a77ab0ef33e90",
        5732: "942d35f428be04f09377",
        5744: "f03e0edc7f6dddb55327",
        5755: "e4c679657bff540dcb2d",
        5765: "27ec4a3b37429342930f",
        5794: "2c16677c4b321d42047a",
        5836: "5e377959aa3ab1434af6",
        5847: "871643975f71499c88ea",
        5873: "777a43edebf0934474fa",
        5918: "0638621bef2f237a69ad",
        5928: "267b7944b14faf297b65",
        5963: "7021b725eadbef0f42d7",
        5998: "6a8335e0695dc9eae61c",
        6031: "467cd00ad75d33cabc91",
        6091: "ed7b3bf4b9f6d5e76eba",
        6115: "6f226864c03d788468a7",
        6149: "056768a9adbdac07ed57",
        6165: "eb8d0ac4dd4b3959c6c1",
        6182: "0b0254795633becee989",
        6208: "e483933ce8aa3cf7b191",
        6239: "837f82d6ff33e9d8e3c1",
        6242: "3ff645462bf181fc03f5",
        6274: "77525e83f8c81a2f4ef9",
        6278: "8325780abe2808b15718",
        6288: "623301dd9e92a13082b1",
        6338: "bced723b3131727b9988",
        6345: "4dec7e7f7cfac484ea1c",
        6484: "d0bb5040eeea08b5c1d4",
        6515: "eae10d1c8c2c85bbd7fb",
        6523: "a0a3104619230d2b9c1f",
        6553: "1be8feb3a344991cba5e",
        6562: "56af81cb1e287215189f",
        6603: "11e1bf86fa7513224c41",
        6654: "4cc56b1dccfe54a95453",
        6684: "04b6f5a9af0944099804",
        6686: "b1c7996d815b550805c1",
        6691: "bfad92f690f430b04494",
        6707: "cda44cac763c9047be6e",
        6708: "e898a4a6d1a5ea275ca8",
        6726: "60cbe09555dc063db2c3",
        6745: "886eb51355a87a6c07e4",
        6761: "a772f7f798d8a4fd9315",
        6784: "ec31e344c4adc807311f",
        6858: "df45d2ccbbdd58c631e7",
        6889: "97310a12005cd726e8b2",
        6891: "57797e32a5dc27591f06",
        6900: "462a4e143eabf3ebb5b3",
        6911: "21f4f9ef078db5392011",
        6921: "bc092e89a114c0395e2b",
        6936: "2a8fb45873b141f4bdf7",
        6987: "6eba67e075906e7eb052",
        7040: "9d19a3cb704d9318c020",
        7084: "6cda6ae8872f30de6ce3",
        7092: "cbc052502096b4a84ee6",
        7116: "d7069c97ee565cfabbe7",
        7133: "9ea1bcbfcf102aa1be5c",
        7138: "91a83226384c800b899d",
        7168: "7c257920f544b4e25085",
        7174: "315aa32aea853df87c21",
        7243: "e9e2b52353c39e1cbca4",
        7244: "69b5e7e8c90d8be8107b",
        7253: "46daa84dc0ace002ade0",
        7256: "f1678691201d4524eae0",
        7257: "0b4c16a1cd143b54328c",
        7281: "b1880c6abad434d9fc7b",
        7329: "9724235539fe282309ff",
        7333: "382d796ba13fa49c4e98",
        7352: "8097325279dadff08b67",
        7402: "09c4bd1bbb4d5b9b39ab",
        7445: "0e68302edf3f669def0e",
        7460: "eed65ca58c404faff1dc",
        7539: "6724c316371c9482ee03",
        7590: "a6090339d63d1441f758",
        7591: "5eeed1e36ca4d0dd1505",
        7610: "279767b4e18a93244927",
        7616: "43c92e204d05ad547ff2",
        7624: "86d5fb6d2cca3bb240c7",
        7659: "8f86f4e10b9625561600",
        7673: "2ee54de4c26ff3b58844",
        7674: "952493baae361b0ad319",
        7726: "8df1d5dcb81290cd07c2",
        7749: "495d808d9dc7c3815788",
        7776: "086ca7d4f4a906b833cd",
        7782: "76b914fdd1662eabdfea",
        7786: "0021e4a7f9a2d32436ea",
        7826: "848fa011aa7423a8d286",
        7856: "4b9ecec9551106b78284",
        7890: "2e78d372cee06bc0015c",
        7925: "7e8170d8e63d6ab438dc",
        7944: "a4d54e18a2b5575da512",
        7977: "86a4c8ffd45f353289fa",
        7998: "c73865245984f6b0a5da",
        8025: "7624212f18e9cbfc28de",
        8031: "f38c59960cf6f3da94cc",
        8076: "e62c6b24ad6ad140e741",
        8102: "1b04f3c7c70ae740e852",
        8180: "2229f130bad4825313a0",
        8194: "46a18b1d3c510553d1c0",
        8206: "82b114218d0e15a744c6",
        8267: "62f9e8d1c918542c2b61",
        8284: "23ad54c493c9bc394ee1",
        8287: "40620168868da527c57b",
        8306: "05e0a48d21ec08e15103",
        8326: "68f0d7bd14b276109106",
        8328: "7fb31726f7c957f94bef",
        8331: "347c16cceb2154bb70b0",
        8363: "6dae4e4f5a0db9099709",
        8517: "c3097b242653cb0f2f43",
        8519: "c23859465aeaae3376ae",
        8699: "05b6ddaf3a9b9b5fc828",
        8770: "1ae795b1ea2dcbd9c60f",
        8862: "516fbdfbaff486ca0d9a",
        8914: "51635e2932decb70b710",
        8927: "7c2ce273b18bc830dc20",
        8960: "13debd8e61c4e27dcf4d",
        8967: "9895ad07a98fe692ce47",
        8992: "e94d80bd0f6dcbd07d39",
        9005: "0d106e491cf750ea8d73",
        9027: "a267aeda329e42861e11",
        9029: "b8eedfb6befeb18d24a1",
        9033: "79aa880deece5452b65e",
        9049: "e77591e6b62428e94c07",
        9102: "a529aad5df7d1324d100",
        9111: "ee13897c61d9662e57ef",
        9152: "7ba018c54d357273b935",
        9236: "593df1a5f705f9be7b1a",
        9281: "6330c7af52134cd8eba1",
        9333: "436cfe504e6e0cf196f5",
        9364: "b1e5235c1ea60fbfc39b",
        9405: "18be24d98017e0074c7d",
        9458: "169a1697ec6068b0bddc",
        9467: "4fc26f02c91e067ab8a2",
        9474: "7cc3b039c4c782722f27",
        9540: "10bb6669e06ed4ec4d4c",
        9542: "0abf4cc7380f80fb3e4a",
        9553: "ea11695498a635ec3f91",
        9642: "e31af0fac002b4efb3a0",
        9643: "ee8c2cd2cc4518d21228",
        9695: "c7a230cf6d750b00d54e",
        9700: "d94af77cdf8caef53cf9",
        9712: "afbccf4e02ddda7e528e",
        9727: "dbf44e6b24695175ee44",
        9747: "fd5015b3e36e6b22d5e0",
        9780: "b02a69447ae0ba7b8860",
        9801: "6b7f11099726bae1fe13",
        9831: "c12262330ce4bb272805",
        9863: "9517eece06912e1d3f00",
        9911: "c3cfa1470d707070b340",
        9983: "a1190b261c8a0b6c6294",
      }[e]),
    (t.miniCssF = (e) =>
      "css/dota_react/" +
      (7084 === e ? "AdminPages" : e) +
      ".css?contenthash=" +
      {
        151: "4bb92e8c6610d1a64537",
        1649: "63acebe8b15ec44c0532",
        1831: "3a50a0dd0488858972c6",
        2653: "d08df9bc03dde287bcca",
        3038: "60050076c28b1898a4f5",
        4349: "c46a45e2aad7767975ec",
        4398: "161d490a23f5ca168bcf",
        4605: "ce70bf8b915c7db8c78a",
        4848: "be780b1331e69b28e4be",
        5046: "af43231fa13b55321f67",
        5665: "3ae90191b09d11597aa4",
        6745: "c05495b00ea44abadec9",
        6858: "0900e5799623f8c69032",
        7084: "595a9d7c0df3f327154a",
        7460: "052c81e7de84524a1fc0",
        9467: "78cf053350cd8e1752a8",
        9831: "b21c232faa3fe7999166",
        9863: "4ac02107f440edca166e",
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
    (c = {}),
    (f = "dota_react:"),
    (t.l = (e, a, d, b) => {
      if (c[e]) c[e].push(a);
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
              i.getAttribute("data-webpack") == f + d
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
          r.setAttribute("data-webpack", f + d),
          (r.src = e)),
          (c[e] = [a]);
        var h = (a, d) => {
            (r.onerror = r.onload = null), clearTimeout(l);
            var f = c[e];
            if (
              (delete c[e],
              r.parentNode && r.parentNode.removeChild(r),
              f && f.forEach((e) => e(d)),
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
              var c = t.miniCssF(e),
                f = t.p + c;
              if (
                ((e, a) => {
                  for (
                    var d = document.getElementsByTagName("link"), c = 0;
                    c < d.length;
                    c++
                  ) {
                    var f =
                      (r = d[c]).getAttribute("data-href") ||
                      r.getAttribute("href");
                    if ("stylesheet" === r.rel && (f === e || f === a))
                      return r;
                  }
                  var b = document.getElementsByTagName("style");
                  for (c = 0; c < b.length; c++) {
                    var r;
                    if (
                      (f = (r = b[c]).getAttribute("data-href")) === e ||
                      f === a
                    )
                      return r;
                  }
                })(c, f)
              )
                return a();
              ((e, a, d, c, f) => {
                var b = document.createElement("link");
                (b.rel = "stylesheet"),
                  (b.type = "text/css"),
                  (b.onerror = b.onload =
                    (d) => {
                      if (((b.onerror = b.onload = null), "load" === d.type))
                        c();
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
                          f(n);
                      }
                    }),
                  (b.href = a),
                  d
                    ? d.parentNode.insertBefore(b, d.nextSibling)
                    : document.head.appendChild(b);
              })(e, f, null, a, d);
            }),
          a = { 4556: 0 };
        t.f.miniCss = (d, c) => {
          a[d]
            ? c.push(a[d])
            : 0 !== a[d] &&
              {
                151: 1,
                1649: 1,
                1831: 1,
                2653: 1,
                3038: 1,
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
              c.push(
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
        var c = t.o(e, a) ? e[a] : void 0;
        if (0 !== c)
          if (c) d.push(c[2]);
          else if (/^(4556|6745)$/.test(a)) e[a] = 0;
          else {
            var f = new Promise((d, f) => (c = e[a] = [d, f]));
            d.push((c[2] = f));
            var b = t.p + t.u(a),
              r = new Error();
            t.l(
              b,
              (d) => {
                if (t.o(e, a) && (0 !== (c = e[a]) && (e[a] = void 0), c)) {
                  var f = d && ("load" === d.type ? "missing" : d.type),
                    b = d && d.target && d.target.src;
                  (r.message =
                    "Loading chunk " + a + " failed.\n(" + f + ": " + b + ")"),
                    (r.name = "ChunkLoadError"),
                    (r.type = f),
                    (r.request = b),
                    c[1](r);
                }
              },
              "chunk-" + a,
              a,
            );
          }
      }),
        (t.O.j = (a) => 0 === e[a]);
      var a = (a, d) => {
          var c,
            f,
            [b, r, n] = d,
            o = 0;
          if (b.some((a) => 0 !== e[a])) {
            for (c in r) t.o(r, c) && (t.m[c] = r[c]);
            if (n) var s = n(t);
          }
          for (a && a(d); o < b.length; o++)
            (f = b[o]), t.o(e, f) && e[f] && e[f][0](), (e[f] = 0);
          return t.O(s);
        },
        d = (self.webpackChunkdota_react = self.webpackChunkdota_react || []);
      d.forEach(a.bind(null, 0)), (d.push = a.bind(null, d.push.bind(d)));
    })();
})();

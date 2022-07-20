/*! This file includes third-party software, governed by the licenses described here: https://steamcommunity.com/public/javascript/webui/chathelpers.licenses.txt */

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7385738";
!(function (e) {
  function t(t) {
    for (
      var r, s, a = t[0], c = t[1], u = t[2], d = 0, f = [];
      d < a.length;
      d++
    )
      (s = a[d]),
        Object.prototype.hasOwnProperty.call(i, s) && i[s] && f.push(i[s][0]),
        (i[s] = 0);
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    for (l && l(t); f.length; ) f.shift()();
    return o.push.apply(o, u || []), n();
  }
  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], r = !0, a = 1; a < n.length; a++) {
        var c = n[a];
        0 !== i[c] && (r = !1);
      }
      r && (o.splice(t--, 1), (e = s((s.s = n[0]))));
    }
    return e;
  }
  var r = {},
    i = { 4: 0 },
    o = [];
  function s(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.e = function (e) {
    var t = [],
      n = i[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var r = new Promise(function (t, r) {
          n = i[e] = [t, r];
        });
        t.push((n[2] = r));
        var o,
          a = document.createElement("script");
        (a.charset = "utf-8"),
          (a.timeout = 120),
          s.nc && a.setAttribute("nonce", s.nc),
          (a.src = (function (e) {
            return (
              s.p +
              "javascript/webui/" +
              ({
                8: "friendsui_arabic-json",
                9: "friendsui_brazilian-json",
                10: "friendsui_bulgarian-json",
                11: "friendsui_czech-json",
                12: "friendsui_danish-json",
                13: "friendsui_dutch-json",
                14: "friendsui_english-json",
                15: "friendsui_finnish-json",
                16: "friendsui_french-json",
                17: "friendsui_german-json",
                18: "friendsui_greek-json",
                19: "friendsui_hungarian-json",
                20: "friendsui_italian-json",
                21: "friendsui_japanese-json",
                22: "friendsui_koreana-json",
                23: "friendsui_latam-json",
                24: "friendsui_norwegian-json",
                25: "friendsui_polish-json",
                26: "friendsui_portuguese-json",
                27: "friendsui_romanian-json",
                28: "friendsui_russian-json",
                29: "friendsui_sc_schinese-json",
                30: "friendsui_schinese-json",
                31: "friendsui_spanish-json",
                32: "friendsui_swedish-json",
                33: "friendsui_tchinese-json",
                34: "friendsui_thai-json",
                35: "friendsui_turkish-json",
                36: "friendsui_ukrainian-json",
                37: "friendsui_vietnamese-json",
                38: "shared_arabic-json",
                39: "shared_brazilian-json",
                40: "shared_bulgarian-json",
                41: "shared_czech-json",
                42: "shared_danish-json",
                43: "shared_dutch-json",
                44: "shared_english-json",
                45: "shared_finnish-json",
                46: "shared_french-json",
                47: "shared_german-json",
                48: "shared_greek-json",
                49: "shared_hungarian-json",
                50: "shared_italian-json",
                51: "shared_japanese-json",
                52: "shared_koreana-json",
                53: "shared_latam-json",
                54: "shared_norwegian-json",
                55: "shared_polish-json",
                56: "shared_portuguese-json",
                57: "shared_romanian-json",
                58: "shared_russian-json",
                59: "shared_sc_schinese-json",
                60: "shared_schinese-json",
                61: "shared_spanish-json",
                62: "shared_swedish-json",
                63: "shared_tchinese-json",
                64: "shared_thai-json",
                65: "shared_turkish-json",
                66: "shared_ukrainian-json",
                67: "shared_vietnamese-json",
              }[e] || e) +
              ".js?contenthash=" +
              {
                8: "7f48182463765343374f",
                9: "3d384cd4ee5035b17193",
                10: "cfe1517f78a25579b8aa",
                11: "0dd2112ea1028866372c",
                12: "a5090d3fd3ef9f45671a",
                13: "1080824877e355c09249",
                14: "9e0c6e9165c568bcf19f",
                15: "736c8e547374be567d5e",
                16: "294bd4ca2c11cd6dd97c",
                17: "8c76dfc1d2b58ed14bf9",
                18: "20242ef0956612166d3c",
                19: "753a67079830eff42b31",
                20: "7e97057fc5ed05ef6ced",
                21: "c0cd8062fa0894c04b34",
                22: "fcc36f3d614b2072f9b9",
                23: "28cb6fd0979d5e3994f1",
                24: "c6836e24e4f5af434b07",
                25: "da136aef3ae77124f922",
                26: "ddd7bd23d8380f3e5c1a",
                27: "8c3247e842b8f2a0f0ec",
                28: "d5c01c003e6afa1ef527",
                29: "f4b7d71b7d80031ffc11",
                30: "1aa5cc408049bf6d3314",
                31: "4c44bd421f8d0c296f3a",
                32: "ad9dce3ca2f810e18ece",
                33: "76bc4d3b486a79e48c60",
                34: "9ac2910b4db4493a29ed",
                35: "431f7cbef59ead06f9c8",
                36: "9777a68ecddfc269d5bb",
                37: "04ba25c68c3b0df5a784",
                38: "22a5a4c7e4378bd531f5",
                39: "21f58d182c6de3966fc6",
                40: "7509ee8a37144b1d5a32",
                41: "efaaeba81a6c1ddf4bc6",
                42: "c5fed291871bc4f3a846",
                43: "ea1f86da59d212036cdc",
                44: "ddc09c0099dc1d6e65b0",
                45: "652e2c12aceb59ea24ba",
                46: "7405c1f4611e3016323e",
                47: "71c5e2e53822a9cf50f9",
                48: "02b5c43d86dc4d591cfa",
                49: "f35e06e6f1db289ee33b",
                50: "c22d062385fddd2caac7",
                51: "8d151c72ae9035961bf4",
                52: "dac9bc45ac40109ee50c",
                53: "6516a37dfaacda33cd0c",
                54: "900eaf29aa12de1da4aa",
                55: "b51fa50470f4b1c2d7d4",
                56: "1b3a13f2ed6f6705542d",
                57: "fab284c97ffbfc664fc2",
                58: "fc95eeae29733fd896d4",
                59: "eae17d6c18038567cb04",
                60: "10171c027d6a91f73813",
                61: "812675bf373f0b1508af",
                62: "7a5633f7df14b8507352",
                63: "db4d48943ec166e383e9",
                64: "480990d4eff0d8cc4fdf",
                65: "1e0d515a5c390e06cc71",
                66: "bdc63186114e6bc803b0",
                67: "ba0f751f00836fa9be97",
              }[e]
            );
          })(e));
        var c = new Error();
        o = function (t) {
          (a.onerror = a.onload = null), clearTimeout(u);
          var n = i[e];
          if (0 !== n) {
            if (n) {
              var r = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src;
              (c.message =
                "Loading chunk " + e + " failed.\n(" + r + ": " + o + ")"),
                (c.name = "ChunkLoadError"),
                (c.type = r),
                (c.request = o),
                n[1](c);
            }
            i[e] = void 0;
          }
        };
        var u = setTimeout(function () {
          o({ type: "timeout", target: a });
        }, 12e4);
        (a.onerror = a.onload = o), document.head.appendChild(a);
      }
    return Promise.all(t);
  }),
    (s.m = e),
    (s.c = r),
    (s.d = function (e, t, n) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (s.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function (e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          s.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (s.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return s.d(t, "a", t), t;
    }),
    (s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = ""),
    (s.oe = function (e) {
      throw (console.error(e), e);
    });
  var a = (window.webpackJsonp = window.webpackJsonp || []),
    c = a.push.bind(a);
  (a.push = t), (a = a.slice());
  for (var u = 0; u < a.length; u++) t(a[u]);
  var l = c;
  o.push(["qM/t", 2, 0, 1]), n();
})({
  "+gJN": function (e, t, n) {
    "use strict";
    n("ldtI");
  },
  "+xJ3": function (e, t) {},
  "/6ik": function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return r;
    }),
      n.d(t, "a", function () {
        return i;
      });
    var r, i;
    !(function (e) {
      (e[(e.k_EComputerActiveStateInvalid = 0)] =
        "k_EComputerActiveStateInvalid"),
        (e[(e.k_EComputerActiveStateActive = 1)] =
          "k_EComputerActiveStateActive"),
        (e[(e.k_EComputerActiveStateIdle = 2)] = "k_EComputerActiveStateIdle");
    })(r || (r = {})),
      (function (e) {
        (e[(e.k_EClientUsedInputTypeKeyboard = 0)] =
          "k_EClientUsedInputTypeKeyboard"),
          (e[(e.k_EClientUsedInputTypeMouse = 1)] =
            "k_EClientUsedInputTypeMouse"),
          (e[(e.k_EClientUsedInputTypeController = 2)] =
            "k_EClientUsedInputTypeController"),
          (e[(e.k_EClientUsedInputTypeMax = 3)] = "k_EClientUsedInputTypeMax");
      })(i || (i = {}));
  },
  "/7KC": function (e, t, n) {
    "use strict";
    function r(e, t) {
      return (
        (e = Math.ceil(e)),
        (t = Math.floor(t)),
        Math.floor(Math.random() * (t - e + 1)) + e
      );
    }
    function i(e, t, n) {
      return null == e || isNaN(e) ? e : Math.max(t, Math.min(n, e));
    }
    function o(e, t, n, r, i) {
      return r + ((i - r) * (e - t)) / (n - t);
    }
    n.d(t, "b", function () {
      return r;
    }),
      n.d(t, "a", function () {
        return i;
      }),
      n.d(t, "c", function () {
        return o;
      });
  },
  "0D2c": function (e, t, n) {
    "use strict";
    var r;
    !(function (e) {
      (e[(e.k_BluetoothDeviceType_Invalid = 0)] =
        "k_BluetoothDeviceType_Invalid"),
        (e[(e.k_BluetoothDeviceType_Unknown = 1)] =
          "k_BluetoothDeviceType_Unknown"),
        (e[(e.k_BluetoothDeviceType_Phone = 2)] =
          "k_BluetoothDeviceType_Phone"),
        (e[(e.k_BluetoothDeviceType_Computer = 3)] =
          "k_BluetoothDeviceType_Computer"),
        (e[(e.k_BluetoothDeviceType_Headset = 4)] =
          "k_BluetoothDeviceType_Headset"),
        (e[(e.k_BluetoothDeviceType_Headphones = 5)] =
          "k_BluetoothDeviceType_Headphones"),
        (e[(e.k_BluetoothDeviceType_Speakers = 6)] =
          "k_BluetoothDeviceType_Speakers"),
        (e[(e.k_BluetoothDeviceType_OtherAudio = 7)] =
          "k_BluetoothDeviceType_OtherAudio"),
        (e[(e.k_BluetoothDeviceType_Mouse = 8)] =
          "k_BluetoothDeviceType_Mouse"),
        (e[(e.k_BluetoothDeviceType_Joystick = 9)] =
          "k_BluetoothDeviceType_Joystick"),
        (e[(e.k_BluetoothDeviceType_Gamepad = 10)] =
          "k_BluetoothDeviceType_Gamepad"),
        (e[(e.k_BluetoothDeviceType_Keyboard = 11)] =
          "k_BluetoothDeviceType_Keyboard");
    })(r || (r = {}));
  },
  "0N1H": function (e, t, n) {
    "use strict";
    function r(e) {
      return 3 == e || 6 == e;
    }
    function i(e) {
      return 5 == e || 6 == e;
    }
    n.d(t, "b", function () {
      return r;
    }),
      n.d(t, "a", function () {
        return i;
      }),
      n.d(t, "q", function () {
        return o;
      }),
      n.d(t, "r", function () {
        return s;
      }),
      n.d(t, "p", function () {
        return a;
      }),
      n.d(t, "j", function () {
        return c;
      }),
      n.d(t, "k", function () {
        return u;
      }),
      n.d(t, "l", function () {
        return l;
      }),
      n.d(t, "m", function () {
        return d;
      }),
      n.d(t, "o", function () {
        return f;
      }),
      n.d(t, "n", function () {
        return _;
      }),
      n.d(t, "g", function () {
        return h;
      }),
      n.d(t, "i", function () {
        return m;
      }),
      n.d(t, "h", function () {
        return p;
      }),
      n.d(t, "d", function () {
        return b;
      }),
      n.d(t, "e", function () {
        return g;
      }),
      n.d(t, "c", function () {
        return E;
      }),
      n.d(t, "f", function () {
        return k;
      });
    const o = 1,
      s = 4,
      a = 7,
      c = 750,
      u = 799,
      l = 250820,
      d = 330050,
      f = 358510,
      _ = 366490,
      h = "18446744073709551615",
      m = 0,
      p = 2147483647;
    function b(e, t = "en") {
      switch (e) {
        case 0:
          return "en";
        case 1:
          return "de";
        case 2:
          return "fr";
        case 3:
          return "it";
        case 4:
          return "ko";
        case 5:
          return "es";
        case 6:
          return "zh-cn";
        case 7:
          return "zh-tw";
        case 8:
          return "ru";
        case 9:
          return "th";
        case 10:
          return "ja";
        case 11:
          return "pt";
        case 12:
          return "pl";
        case 13:
          return "da";
        case 14:
          return "nl";
        case 15:
          return "fi";
        case 16:
          return "no";
        case 17:
          return "sv";
        case 18:
          return "hu";
        case 19:
          return "cs";
        case 20:
          return "ro";
        case 21:
          return "tr";
        case 25:
          return "ar";
        case 22:
          return "pt-br";
        case 23:
          return "bg";
        case 24:
          return "el";
        case 26:
          return "uk";
        case 27:
          return "es-419";
        case 28:
          return "vn";
        case 29:
          return "sc-sc";
        default:
          return t;
      }
    }
    const g = (e) => ("koreana" === e ? "korean" : e);
    function E(e, t = "") {
      switch (e) {
        case 0:
          return "english";
        case 1:
          return "german";
        case 2:
          return "french";
        case 3:
          return "italian";
        case 4:
          return "koreana";
        case 5:
          return "spanish";
        case 6:
          return "schinese";
        case 7:
          return "tchinese";
        case 8:
          return "russian";
        case 9:
          return "thai";
        case 10:
          return "japanese";
        case 11:
          return "portuguese";
        case 12:
          return "polish";
        case 13:
          return "danish";
        case 14:
          return "dutch";
        case 15:
          return "finnish";
        case 16:
          return "norwegian";
        case 17:
          return "swedish";
        case 18:
          return "hungarian";
        case 19:
          return "czech";
        case 20:
          return "romanian";
        case 21:
          return "turkish";
        case 25:
          return "arabic";
        case 22:
          return "brazilian";
        case 23:
          return "bulgarian";
        case 24:
          return "greek";
        case 26:
          return "ukrainian";
        case 27:
          return "latam";
        case 28:
          return "vietnamese";
        case 29:
          return "sc_schinese";
        default:
          return t;
      }
    }
    function k(e, t = 0) {
      switch (e) {
        case "english":
          return 0;
        case "german":
          return 1;
        case "french":
          return 2;
        case "italian":
          return 3;
        case "korean":
        case "koreana":
          return 4;
        case "spanish":
          return 5;
        case "schinese":
          return 6;
        case "tchinese":
          return 7;
        case "russian":
          return 8;
        case "thai":
          return 9;
        case "japanese":
          return 10;
        case "portuguese":
          return 11;
        case "polish":
          return 12;
        case "danish":
          return 13;
        case "dutch":
          return 14;
        case "finnish":
          return 15;
        case "norwegian":
          return 16;
        case "swedish":
          return 17;
        case "hungarian":
          return 18;
        case "czech":
          return 19;
        case "romanian":
          return 20;
        case "turkish":
          return 21;
        case "arabic":
          return 25;
        case "brazilian":
          return 22;
        case "bulgarian":
          return 23;
        case "greek":
          return 24;
        case "ukrainian":
          return 26;
        case "latam":
          return 27;
        case "vietnamese":
          return 28;
        case "sc_schinese":
          return 29;
        default:
          return t;
      }
    }
    var C, S, v, T, y, I, R;
    !(function (e) {
      (e[(e.k_EConnectivityTestResult_Unknown = 0)] =
        "k_EConnectivityTestResult_Unknown"),
        (e[(e.k_EConnectivityTestResult_Connected = 1)] =
          "k_EConnectivityTestResult_Connected"),
        (e[(e.k_EConnectivityTestResult_CaptivePortal = 2)] =
          "k_EConnectivityTestResult_CaptivePortal"),
        (e[(e.k_EConnectivityTestResult_TimedOut = 3)] =
          "k_EConnectivityTestResult_TimedOut"),
        (e[(e.k_EConnectivityTestResult_Failed = 4)] =
          "k_EConnectivityTestResult_Failed"),
        (e[(e.k_EConnectivityTestResult_WifiDisabled = 5)] =
          "k_EConnectivityTestResult_WifiDisabled"),
        (e[(e.k_EConnectivityTestResult_NoLAN = 6)] =
          "k_EConnectivityTestResult_NoLAN");
    })(C || (C = {})),
      (function (e) {
        (e[(e.k_ENetFakeLocalSystemState_Normal = 0)] =
          "k_ENetFakeLocalSystemState_Normal"),
          (e[(e.k_ENetFakeLocalSystemState_NoLAN = 1)] =
            "k_ENetFakeLocalSystemState_NoLAN"),
          (e[(e.k_ENetFakeLocalSystemState_CaptivePortal_Redirected = 2)] =
            "k_ENetFakeLocalSystemState_CaptivePortal_Redirected"),
          (e[(e.k_ENetFakeLocalSystemState_CaptivePortal_InPlace = 3)] =
            "k_ENetFakeLocalSystemState_CaptivePortal_InPlace"),
          (e[(e.k_ENetFakeLocalSystemState_NoInternet = 4)] =
            "k_ENetFakeLocalSystemState_NoInternet"),
          (e[(e.k_ENetFakeLocalSystemState_NoSteam = 5)] =
            "k_ENetFakeLocalSystemState_NoSteam");
      })(S || (S = {})),
      (function (e) {
        (e[(e.k_ESuspendResumeProgressState_Invalid = 0)] =
          "k_ESuspendResumeProgressState_Invalid"),
          (e[(e.k_ESuspendResumeProgressState_Complete = 1)] =
            "k_ESuspendResumeProgressState_Complete"),
          (e[(e.k_ESuspendResumeProgressState_CloudSync = 2)] =
            "k_ESuspendResumeProgressState_CloudSync"),
          (e[(e.k_ESuspendResumeProgressState_LoggingIn = 3)] =
            "k_ESuspendResumeProgressState_LoggingIn"),
          (e[(e.k_ESuspendResumeProgressState_WaitingForApp = 4)] =
            "k_ESuspendResumeProgressState_WaitingForApp"),
          (e[(e.k_ESuspendResumeProgressState_Working = 5)] =
            "k_ESuspendResumeProgressState_Working");
      })(v || (v = {})),
      (function (e) {
        (e[(e.k_EFloatingGamepadTextInputModeModeSingleLine = 0)] =
          "k_EFloatingGamepadTextInputModeModeSingleLine"),
          (e[(e.k_EFloatingGamepadTextInputModeModeMultipleLines = 1)] =
            "k_EFloatingGamepadTextInputModeModeMultipleLines"),
          (e[(e.k_EFloatingGamepadTextInputModeModeEmail = 2)] =
            "k_EFloatingGamepadTextInputModeModeEmail"),
          (e[(e.k_EFloatingGamepadTextInputModeModeNumeric = 3)] =
            "k_EFloatingGamepadTextInputModeModeNumeric");
      })(T || (T = {})),
      (function (e) {
        (e[(e.k_EAppUpdateContentType_Content = 0)] =
          "k_EAppUpdateContentType_Content"),
          (e[(e.k_EAppUpdateContentType_Workshop = 1)] =
            "k_EAppUpdateContentType_Workshop"),
          (e[(e.k_EAppUpdateContentType_Shader = 2)] =
            "k_EAppUpdateContentType_Shader"),
          (e[(e.k_EAppUpdateContentType_Max = 3)] =
            "k_EAppUpdateContentType_Max");
      })(y || (y = {})),
      (function (e) {
        (e[(e.k_EOverlayToStoreFlag_None = 0)] = "k_EOverlayToStoreFlag_None"),
          (e[(e.k_EOverlayToStoreFlag_AddToCart = 1)] =
            "k_EOverlayToStoreFlag_AddToCart"),
          (e[(e.k_EOverlayToStoreFlag_AddToCartAndShow = 2)] =
            "k_EOverlayToStoreFlag_AddToCartAndShow");
      })(I || (I = {})),
      (function (e) {
        (e[(e.k_EActivateGameOverlayToWebPageMode_Default = 0)] =
          "k_EActivateGameOverlayToWebPageMode_Default"),
          (e[(e.k_EActivateGameOverlayToWebPageMode_Modal = 1)] =
            "k_EActivateGameOverlayToWebPageMode_Modal");
      })(R || (R = {}));
  },
  "1n9R": function (e, t, n) {
    "use strict";
    n.d(t, "d", function () {
      return o;
    }),
      n.d(t, "k", function () {
        return s;
      }),
      n.d(t, "b", function () {
        return a;
      }),
      n.d(t, "c", function () {
        return c;
      }),
      n.d(t, "g", function () {
        return d;
      }),
      n.d(t, "a", function () {
        return f;
      }),
      n.d(t, "j", function () {
        return _;
      }),
      n.d(t, "h", function () {
        return m;
      }),
      n.d(t, "i", function () {
        return p;
      }),
      n.d(t, "e", function () {
        return g;
      }),
      n.d(t, "f", function () {
        return E;
      });
    n("mrSG");
    var r = n("/7KC"),
      i = n("YlSc");
    n("0N1H");
    const o = {
        EUNIVERSE: 0,
        WEB_UNIVERSE: "",
        LANGUAGE: "english",
        SUPPORTED_LANGUAGES: [],
        COUNTRY: "",
        AVATAR_BASE_URL: "",
        MEDIA_CDN_COMMUNITY_URL: "",
        MEDIA_CDN_URL: "",
        COMMUNITY_CDN_URL: "",
        COMMUNITY_CDN_ASSET_URL: "",
        STORE_CDN_URL: "",
        PUBLIC_SHARED_URL: "",
        COMMUNITY_BASE_URL: "",
        CHAT_BASE_URL: "",
        STORE_BASE_URL: "",
        LOGIN_BASE_URL: "",
        STORE_ICON_BASE_URL: "",
        IMG_URL: "",
        STEAMTV_BASE_URL: "",
        HELP_BASE_URL: "",
        PARTNER_BASE_URL: "",
        STATS_BASE_URL: "",
        INTERNAL_STATS_BASE_URL: "",
        BASE_URL_STORE_CDN_ASSETS: "",
        IN_CLIENT: !1,
        USE_POPUPS: !1,
        IN_MOBILE: !1,
        IN_TENFOOT: !1,
        PLATFORM: "",
        SNR: "",
        LAUNCHER_TYPE: 0,
        EREALM: 0,
        IN_CHROMEOS: !1,
        LOCAL_HOSTNAME: "",
        WEBAPI_BASE_URL: "",
        TOKEN_URL: "",
        BUILD_TIMESTAMP: 0,
        PAGE_TIMESTAMP: 0,
        FROM_WEB: !1,
        get SESSIONID() {
          return (function () {
            if (!Object(i.a)()) return l || (l = d()), l;
            let e = Object(i.b)("sessionid");
            e || (e = d());
            return e;
          })();
        },
        FRIENDSUI_BETA: !1,
        STEAM_TV: !1,
        DEV_MODE: !1,
        IN_LIBRARY: !1,
        IN_GAMEPADUI: !1,
        ON_DECK: !1,
        IN_LOGIN: !1,
        IN_STANDALONE_KEYBOARD: !1,
      },
      s = {
        logged_in: !1,
        steamid: "",
        accountid: 0,
        account_name: "",
        token: void 0,
        token_use_id: void 0,
        webapi_token: "",
        authwgtoken: "",
        is_support: !1,
        is_limited: !1,
        is_partner_member: !1,
        short_url: "",
        country_code: "",
      },
      a = { steamid: "", clanid: 0, listid: 0 },
      c = {
        CLANSTEAMID: "",
        CLANACCOUNTID: 0,
        APPID: 0,
        VANITY_ID: "",
        IS_CREATOR_HOME: !1,
        IS_CURATOR: !1,
        IS_OGG: !1,
        CAN_UPLOAD_IMAGES: !1,
        APP_NAME: "",
        HEADER_IMAGE: "",
        HAS_ADULT_CONTENT: !1,
        HAS_ADULT_CONTENT_SEX: !1,
        HAS_ADULT_CONTENT_VIOLENCE: !1,
        IS_VALVE_GROUP: !1,
        IS_ALLOWED_SC: !1,
      },
      u = { ANNOUNCEMENT_GID: "", TAKEOVER_ANNOUNCEMENT_GID: "" };
    let l;
    function d() {
      let e = (function () {
        let e = "";
        for (let t = 0; t < 24; t++) e += Object(r.b)(0, 35).toString(36);
        return e;
      })();
      return Object(i.c)("sessionid", e, 0), e;
    }
    function f() {
      let e = null;
      return (
        Object(i.a)() && (e = Object(i.b)("presentation_mode")),
        Boolean(e && 1 === Number.parseInt(e))
      );
    }
    function _(e = "webui_config") {
      const t = {},
        n = m("config", e);
      n && (delete n.SESSIONID, Object.assign(o, n), (t.config = !0));
      const r = m("userinfo", e);
      r &&
        (Object.assign(s, r),
        (t.userConfig = !0),
        s.is_support && f() && (s.is_support = !1));
      const i = m("broadcast", e);
      i && (Object.assign(a, i), (t.broadcastConfig = !0));
      const l = m("community", e);
      l && (Object.assign(c, l), (t.communityConfig = !0));
      const d = m("event", e);
      return d && (Object.assign(u, d), (t.eventConfig = !0)), t;
    }
    function h(e, t = "webui_config", n) {
      let r;
      if (
        ((r =
          "string" == typeof t
            ? !Object({
                NODE_ENV: "production",
                STEAM_BUILD: "buildbot",
                VALVE_BUILD: "false",
              }).MOBILE_BUILD && document.getElementById(t)
            : t),
        r)
      )
        try {
          if (r.hasAttribute("data-" + e)) {
            return JSON.parse(r.getAttribute("data-" + e));
          }
          return null;
        } catch (e) {
          console.error("Failed to parse config", e);
        }
      else n && console.error("Missing config element #", t);
    }
    function m(e, t = "webui_config") {
      return h(e, t, !0);
    }
    function p(e, t = "webui_config") {
      return h(e, t, !1);
    }
    function b(e, t) {
      return 0 != t.length && e.startsWith(t);
    }
    function g() {
      if (!window || !window.location || !window.location.href)
        return console.warn("Unable to determine base url!"), "unknown";
      const e = window.location.href;
      return b(e, o.STORE_BASE_URL)
        ? o.STORE_BASE_URL
        : b(e, o.COMMUNITY_BASE_URL)
        ? o.COMMUNITY_BASE_URL
        : b(e, o.CHAT_BASE_URL)
        ? o.CHAT_BASE_URL
        : b(e, o.PARTNER_BASE_URL)
        ? o.PARTNER_BASE_URL
        : b(e, o.HELP_BASE_URL)
        ? o.HELP_BASE_URL
        : b(e, o.STEAMTV_BASE_URL)
        ? o.STEAMTV_BASE_URL
        : b(e, o.STATS_BASE_URL)
        ? o.STATS_BASE_URL
        : b(e, o.INTERNAL_STATS_BASE_URL)
        ? o.INTERNAL_STATS_BASE_URL
        : b(e, "https://steamloopback.host")
        ? "https://steamloopback.host"
        : "";
    }
    function E() {
      const e = window.location.href;
      return e.startsWith(o.STORE_BASE_URL)
        ? "store"
        : e.startsWith(o.COMMUNITY_BASE_URL)
        ? "community"
        : e.startsWith(o.PARTNER_BASE_URL)
        ? "partnerweb"
        : e.startsWith(o.HELP_BASE_URL)
        ? "help"
        : e.startsWith(o.STEAMTV_BASE_URL)
        ? "steamtv"
        : e.startsWith(o.STATS_BASE_URL) ||
          e.startsWith(o.INTERNAL_STATS_BASE_URL)
        ? "stats"
        : "";
    }
  },
  "61mD": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return i;
    }),
      n.d(t, "e", function () {
        return o;
      }),
      n.d(t, "d", function () {
        return s;
      }),
      n.d(t, "b", function () {
        return a;
      }),
      n.d(t, "f", function () {
        return c;
      }),
      n.d(t, "c", function () {
        return u;
      });
    var r = n("cDcd");
    n("E7zH");
    function i(e, t, n) {
      return [e, t, n];
    }
    function o(e, t, n) {
      const [i, o] = r.useState(n);
      return (
        r.useEffect(() => {
          let t = !0;
          const n = e();
          return (
            n &&
              n.then((e) => {
                t && o(e);
              }),
            () => {
              t = !1;
            }
          );
        }, t),
        i
      );
    }
    function s() {
      const [, e] = r.useState(0);
      return r.useCallback(() => e((e) => e + 1), []);
    }
    function a(e, t) {
      r.useLayoutEffect(() => {
        if (!t || !e) return;
        let n = e.Register(t);
        return () => n.Unregister();
      }, [e, t]);
    }
    function c(e) {
      const [t, n] = r.useState(null == e ? void 0 : e.Value);
      return (
        r.useEffect(() => {
          if (null == e) return () => {};
          const r = e.Subscribe(n);
          return (
            t !== e.Value && n(e.Value), null == r ? void 0 : r.Unsubscribe
          );
        }, [e]),
        t
      );
    }
    function u(e, t, n = 1e3) {
      const i = r.useRef(t);
      i.current = t;
      const [o, s] = r.useState(e),
        [a, c] = r.useState(!1),
        u = r.useCallback(() => {
          s(e), c(!1);
        }, [e, s]),
        { fnStopTimer: l, fnRestartTimer: d } = (function (e, t, n = !0) {
          const i = r.useRef(t);
          i.current = t;
          const [o, s] = r.useState(!1),
            a = r.useRef(0),
            c = r.useCallback(() => {
              s(!0), i.current && i.current();
            }, []),
            u = r.useCallback(() => {
              window.clearTimeout(a.current);
            }, []),
            l = r.useCallback(() => {
              s(!1), u(), (a.current = window.setTimeout(c, e));
            }, [u, e, c]),
            d = r.useCallback(() => {
              n && l();
            }, [n, l]);
          return (
            r.useEffect(d, [e, d]),
            r.useEffect(() => u, [u]),
            { bTimerCompleted: o, fnStopTimer: u, fnRestartTimer: l }
          );
        })(n, u, !1),
        f = r.useCallback(
          (e) => {
            d(), s(e), c(!0), i.current && i.current(e);
          },
          [s, d]
        );
      return [a ? o : e, f];
    }
  },
  "79S0": function (e, t, n) {
    var r = {
      "./friendsui_arabic.json": ["C1RR", 8],
      "./friendsui_brazilian.json": ["s2l5", 9],
      "./friendsui_bulgarian.json": ["sXfD", 10],
      "./friendsui_czech.json": ["TcQ7", 11],
      "./friendsui_danish.json": ["lvoG", 12],
      "./friendsui_dutch.json": ["6ght", 13],
      "./friendsui_english.json": ["n/Sq", 14],
      "./friendsui_finnish.json": ["A6os", 15],
      "./friendsui_french.json": ["qtmt", 16],
      "./friendsui_german.json": ["a23T", 17],
      "./friendsui_greek.json": ["N3te", 18],
      "./friendsui_hungarian.json": ["kOaF", 19],
      "./friendsui_italian.json": ["5jaL", 20],
      "./friendsui_japanese.json": ["MoM5", 21],
      "./friendsui_koreana.json": ["omEY", 22],
      "./friendsui_latam.json": ["uDNJ", 23],
      "./friendsui_norwegian.json": ["oQbv", 24],
      "./friendsui_polish.json": ["EhcC", 25],
      "./friendsui_portuguese.json": ["bXmq", 26],
      "./friendsui_romanian.json": ["EFxq", 27],
      "./friendsui_russian.json": ["7jnr", 28],
      "./friendsui_sc_schinese.json": ["tKeK", 29],
      "./friendsui_schinese.json": ["gEsF", 30],
      "./friendsui_spanish.json": ["yMyD", 31],
      "./friendsui_swedish.json": ["w8HU", 32],
      "./friendsui_tchinese.json": ["tgEv", 33],
      "./friendsui_thai.json": ["5Ip8", 34],
      "./friendsui_turkish.json": ["1E74", 35],
      "./friendsui_ukrainian.json": ["JXOb", 36],
      "./friendsui_vietnamese.json": ["bFjG", 37],
    };
    function i(e) {
      if (!n.o(r, e))
        return Promise.resolve().then(function () {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        });
      var t = r[e],
        i = t[0];
      return n.e(t[1]).then(function () {
        return n.t(i, 3);
      });
    }
    (i.keys = function () {
      return Object.keys(r);
    }),
      (i.id = "79S0"),
      (e.exports = i);
  },
  "7ERL": function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return r.a;
    }),
      n.d(t, "j", function () {
        return r.e;
      }),
      n.d(t, "g", function () {
        return r.d;
      }),
      n.d(t, "e", function () {
        return r.b;
      }),
      n.d(t, "n", function () {
        return r.f;
      }),
      n.d(t, "f", function () {
        return r.c;
      }),
      n.d(t, "d", function () {
        return o;
      }),
      n.d(t, "h", function () {
        return s;
      }),
      n.d(t, "a", function () {
        return a;
      }),
      n.d(t, "l", function () {
        return c;
      }),
      n.d(t, "k", function () {
        return u;
      }),
      n.d(t, "m", function () {
        return f;
      }),
      n.d(t, "i", function () {
        return _;
      }),
      n.d(t, "b", function () {
        return h.a;
      });
    var r = n("61mD"),
      i = n("cDcd");
    function o(e, t) {
      null != e &&
        ("function" == typeof e ? e(t) : "current" in e && (e.current = t));
    }
    function s(...e) {
      return i.useCallback((t) => {
        for (const n of e) o(n, t);
      }, e);
    }
    function a(...e) {
      if (e && 0 !== e.length)
        return 1 === e.length
          ? e[0]
          : (t) =>
              e.forEach((e) => {
                e && ("function" == typeof e ? e(t) : (e.current = t));
              });
    }
    function c(e, t) {
      const n = i.useRef();
      return i.useCallback((t) => {
        n.current && n.current(), (n.current = e(t));
      }, t);
    }
    function u(e) {
      const t = i.useRef(null);
      return { refWithValue: t, refForElement: s(e, t) };
    }
    var l = n("XaMz");
    function d(e, t) {
      return c(
        (n) => {
          if (!n) return;
          const r = t((t) => {
            e(t[0]);
          });
          return r.observe(n), () => r.unobserve(n);
        },
        [e, t]
      );
    }
    function f(e) {
      return d(
        e,
        i.useCallback(
          (e) =>
            "undefined" != typeof ResizeObserver
              ? new ResizeObserver(e)
              : (Object(l.a)(!1, "ResizeObserver is not available"),
                {
                  observe: () => {},
                  unobserve: () => {},
                  disconnect: () => {},
                }),
          []
        )
      );
    }
    function _() {
      const [e, t] = i.useState(0),
        n = i.useCallback(
          (n) => {
            const r = n.target.clientHeight;
            r > e && t(r);
          },
          [e]
        );
      return { strMinHeightStyle: e + "px", refForResizeObserver: f(n) };
    }
    var h = n("y3Ls");
  },
  "9Lmx": function (e, t, n) {
    var r = {
      "./shared_arabic.json": ["nqme", 38],
      "./shared_brazilian.json": ["f72x", 39],
      "./shared_bulgarian.json": ["+RpC", 40],
      "./shared_czech.json": ["R6Nw", 41],
      "./shared_danish.json": ["GK4l", 42],
      "./shared_dutch.json": ["7VLV", 43],
      "./shared_english.json": ["qlTB", 44],
      "./shared_finnish.json": ["t0Wk", 45],
      "./shared_french.json": ["KB2W", 46],
      "./shared_german.json": ["SP05", 47],
      "./shared_greek.json": ["m6XH", 48],
      "./shared_hungarian.json": ["cNDp", 49],
      "./shared_italian.json": ["82/m", 50],
      "./shared_japanese.json": ["i10C", 51],
      "./shared_koreana.json": ["+pE0", 52],
      "./shared_latam.json": ["/6Od", 53],
      "./shared_norwegian.json": ["wpCC", 54],
      "./shared_polish.json": ["dmUA", 55],
      "./shared_portuguese.json": ["AM9g", 56],
      "./shared_romanian.json": ["rCBS", 57],
      "./shared_russian.json": ["ur1L", 58],
      "./shared_sc_schinese.json": ["TcHa", 59],
      "./shared_schinese.json": ["25it", 60],
      "./shared_spanish.json": ["2NJD", 61],
      "./shared_swedish.json": ["YZF4", 62],
      "./shared_tchinese.json": ["TBOT", 63],
      "./shared_thai.json": ["4+X1", 64],
      "./shared_turkish.json": ["w87n", 65],
      "./shared_ukrainian.json": ["6eLe", 66],
      "./shared_vietnamese.json": ["AKAV", 67],
    };
    function i(e) {
      if (!n.o(r, e))
        return Promise.resolve().then(function () {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        });
      var t = r[e],
        i = t[0];
      return n.e(t[1]).then(function () {
        return n.t(i, 3);
      });
    }
    (i.keys = function () {
      return Object.keys(r);
    }),
      (i.id = "9Lmx"),
      (e.exports = i);
  },
  "9ysx": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return i;
      }),
      n.d(t, "d", function () {
        return o;
      }),
      n.d(t, "c", function () {
        return s;
      });
    class r {
      constructor() {
        (this.broadcastid = "0"),
          (this.nViewers = 0),
          (this.nRequests = 0),
          (this.bIsBroadcasting = !1),
          (this.bIsRecordingDesktop = !1),
          (this.bBroadcastCapable = !1);
      }
    }
    class i {}
    class o {}
    var s;
    !(function (e) {
      (e[(e.k_EPending = 0)] = "k_EPending"),
        (e[(e.k_EAccepted = 1)] = "k_EAccepted"),
        (e[(e.k_ERejected = 2)] = "k_ERejected");
    })(s || (s = {}));
  },
  B5xR: function (e, t, n) {
    "use strict";
  },
  CqEE: function (e, t, n) {
    "use strict";
    var r, i;
    !(function (e) {
      (e[(e.Input = 0)] = "Input"), (e[(e.Output = 1)] = "Output");
    })(r || (r = {})),
      (function (e) {
        (e[(e.Input = 0)] = "Input"),
          (e[(e.AllOutput = 1)] = "AllOutput"),
          (e[(e.Left = 2)] = "Left"),
          (e[(e.Right = 3)] = "Right"),
          (e[(e.Sub = 4)] = "Sub"),
          (e[(e.BackLeft = 5)] = "BackLeft"),
          (e[(e.BackRight = 6)] = "BackRight");
      })(i || (i = {}));
  },
  Dvx3: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    });
    var r;
    !(function (e) {
      (e[(e.k_ERemoteClientLaunchOK = 1)] = "k_ERemoteClientLaunchOK"),
        (e[(e.k_ERemoteClientLaunchFail = 2)] = "k_ERemoteClientLaunchFail"),
        (e[(e.k_ERemoteClientLaunchRequiresUI = 3)] =
          "k_ERemoteClientLaunchRequiresUI"),
        (e[(e.k_ERemoteClientLaunchRequiresLaunchOption = 4)] =
          "k_ERemoteClientLaunchRequiresLaunchOption"),
        (e[(e.k_ERemoteClientLaunchRequiresEULA = 5)] =
          "k_ERemoteClientLaunchRequiresEULA"),
        (e[(e.k_ERemoteClientLaunchTimeout = 6)] =
          "k_ERemoteClientLaunchTimeout"),
        (e[(e.k_ERemoteClientLaunchStreamTimeout = 7)] =
          "k_ERemoteClientLaunchStreamTimeout"),
        (e[(e.k_ERemoteClientLaunchStreamClientFail = 8)] =
          "k_ERemoteClientLaunchStreamClientFail"),
        (e[(e.k_ERemoteClientLaunchOtherGameRunning = 9)] =
          "k_ERemoteClientLaunchOtherGameRunning"),
        (e[(e.k_ERemoteClientLaunchDownloadStarted = 10)] =
          "k_ERemoteClientLaunchDownloadStarted"),
        (e[(e.k_ERemoteClientLaunchDownloadNoSpace = 11)] =
          "k_ERemoteClientLaunchDownloadNoSpace"),
        (e[(e.k_ERemoteClientLaunchDownloadFiltered = 12)] =
          "k_ERemoteClientLaunchDownloadFiltered"),
        (e[(e.k_ERemoteClientLaunchDownloadRequiresUI = 13)] =
          "k_ERemoteClientLaunchDownloadRequiresUI"),
        (e[(e.k_ERemoteClientLaunchAccessDenied = 14)] =
          "k_ERemoteClientLaunchAccessDenied"),
        (e[(e.k_ERemoteClientLaunchNetworkError = 15)] =
          "k_ERemoteClientLaunchNetworkError"),
        (e[(e.k_ERemoteClientLaunchProgress = 16)] =
          "k_ERemoteClientLaunchProgress"),
        (e[(e.k_ERemoteClientLaunchParentalUnlockFailed = 17)] =
          "k_ERemoteClientLaunchParentalUnlockFailed"),
        (e[(e.k_ERemoteClientLaunchScreenLocked = 18)] =
          "k_ERemoteClientLaunchScreenLocked"),
        (e[(e.k_ERemoteClientLaunchUnsupported = 19)] =
          "k_ERemoteClientLaunchUnsupported"),
        (e[(e.k_ERemoteClientLaunchDisabledLocal = 20)] =
          "k_ERemoteClientLaunchDisabledLocal"),
        (e[(e.k_ERemoteClientLaunchDisabledRemote = 21)] =
          "k_ERemoteClientLaunchDisabledRemote"),
        (e[(e.k_ERemoteClientLaunchBroadcasting = 22)] =
          "k_ERemoteClientLaunchBroadcasting"),
        (e[(e.k_ERemoteClientLaunchBusy = 23)] = "k_ERemoteClientLaunchBusy"),
        (e[(e.k_ERemoteClientLaunchDriversNotInstalled = 24)] =
          "k_ERemoteClientLaunchDriversNotInstalled"),
        (e[(e.k_ERemoteClientLaunchTransportUnavailable = 25)] =
          "k_ERemoteClientLaunchTransportUnavailable"),
        (e[(e.k_ERemoteClientLaunchCanceled = 26)] =
          "k_ERemoteClientLaunchCanceled"),
        (e[(e.k_ERemoteClientLaunchInvisible = 27)] =
          "k_ERemoteClientLaunchInvisible"),
        (e[(e.k_ERemoteClientLaunchRestrictedCountry = 28)] =
          "k_ERemoteClientLaunchRestrictedCountry");
    })(r || (r = {}));
  },
  E6du: function (e, t, n) {
    "use strict";
  },
  E7zH: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return s;
    }),
      n.d(t, "e", function () {
        return c;
      }),
      n.d(t, "b", function () {
        return u;
      }),
      n.d(t, "c", function () {
        return l;
      }),
      n.d(t, "d", function () {
        return d;
      });
    var r = n("mrSG"),
      i = n("UqDm"),
      o = n("y3Ls");
    class s {
      constructor() {
        this.m_vecCallbacks = [];
      }
      Register(e) {
        this.m_vecCallbacks.push(e);
        return {
          Unregister: () => {
            i.c(this.m_vecCallbacks, e);
          },
        };
      }
      Dispatch(...e) {
        for (const t of Array.from(this.m_vecCallbacks)) t(...e);
      }
      ClearAllCallbacks() {
        this.m_vecCallbacks = [];
      }
      CountRegistered() {
        return this.m_vecCallbacks.length;
      }
    }
    class a {
      constructor(e) {
        (this.m_callbacks = new s()), (this.m_currentValue = e);
      }
      Set(e) {
        (this.m_currentValue = e), this.m_callbacks.Dispatch(e);
      }
      get Value() {
        return this.m_currentValue;
      }
      Subscribe(e) {
        return { Unsubscribe: this.m_callbacks.Register(e).Unregister };
      }
    }
    function c(e) {
      return new a(e);
    }
    class u {
      Schedule(e, t) {
        this.IsScheduled() && this.Cancel(),
          (this.m_fnCallback = t),
          (this.m_schTimer = window.setTimeout(this.ScheduledInternal, e));
      }
      IsScheduled() {
        return void 0 !== this.m_schTimer;
      }
      Cancel() {
        this.m_schTimer &&
          (clearTimeout(this.m_schTimer), (this.m_schTimer = void 0));
      }
      ScheduledInternal() {
        this.m_schTimer = void 0;
        let e = this.m_fnCallback;
        (this.m_fnCallback = void 0), e();
      }
    }
    Object(r.b)([o.a], u.prototype, "ScheduledInternal", null);
    class l {
      constructor() {
        this.m_rgListeners = [];
      }
      AddEventListener(e, t, n) {
        e.addEventListener(t, n),
          this.m_rgListeners.push({ element: e, type: t, listener: n });
      }
      Unregister() {
        for (let e of this.m_rgListeners)
          e.element.removeEventListener(e.type, e.listener);
        this.m_rgListeners = [];
      }
    }
    function d(e) {
      return Object(r.a)(this, void 0, void 0, function* () {
        let t = [];
        const n = Object.keys(e);
        n.forEach((n) => t.push(e[n]));
        return (yield Promise.all(t)).reduce(
          (e, t, r) => ((e[n[r]] = t), e),
          {}
        );
      });
    }
  },
  Ezvv: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    }),
      n.d(t, "b", function () {
        return a;
      });
    n("0N1H");
    var r = n("1n9R");
    let i = { success: !0, result: 1 };
    class o {
      constructor() {
        (this.m_connection = new s()),
          (this.m_bAllowAccountMismatch = !1),
          (this.m_mapCacheSubscribedApp = new Map());
      }
      FailureResult(e = 2) {
        let t = { success: !1, result: e };
        return (
          this.m_connection &&
            !this.m_connection.browser_supported &&
            (t.browser_unsupported = !0),
          this.m_connection &&
            !this.m_connection.connected_to_client &&
            (t.connect_failed = !0),
          7 == e && (t.call_unsupported = !0),
          t
        );
      }
      SetAllowAccountMismatch(e) {
        this.m_bAllowAccountMismatch = e;
      }
      BClientConnected() {
        return this.m_connection.Connect().then(
          () => i,
          () => this.FailureResult()
        );
      }
      BClientSupportsMessage(e) {
        return (
          !(
            !this.m_connection.connected_to_client || !this.m_connection.ready
          ) &&
          -1 !== this.m_connection.ClientInfo.rgSupportedMessages.indexOf(e)
        );
      }
      OpenFriendChatDialog(e) {
        let t = { message: "ShowFriendChatDialog", steamid: e };
        return this.GenericEResultCall(t);
      }
      OpenChatRoomGroupDialog(e, t) {
        let n = { message: "ShowChatRoomGroupDialog", chat_group_id: e };
        return t && (n.chat_room_id = t), this.GenericEResultCall(n);
      }
      ShowChatRoomGroupInvite(e) {
        let t = { message: "ShowChatRoomGroupInvite", invite_code: e };
        return this.GenericEResultCall(t);
      }
      OpenJoinGameDialog(e) {
        let t = { message: "ShowJoinGameDialog", friend_id: e };
        return this.GenericEResultCall(t);
      }
      BIsSubscribedApp(e) {
        if (this.m_mapCacheSubscribedApp.has(e))
          return Promise.resolve(this.m_mapCacheSubscribedApp.get(e));
        let t = { message: "IsSubscribedApp", appid: e };
        return this.GenericEResultCall(t).then((t) => {
          if (t.connect_failed) return;
          let n = 1 == t.result;
          return this.m_mapCacheSubscribedApp.set(e, n), n;
        });
      }
      ViewGameInfoForSteamID(e) {
        let t = { message: "ViewGameInfoForSteamID", steamid: e };
        return this.GenericEResultCall(t);
      }
      OpenFriendsDialog() {
        return this.GenericEResultCall({ message: "OpenFriendsDialog" });
      }
      BClientAccountMatches() {
        return (
          !r.k.logged_in ||
          r.k.accountid == this.m_connection.ClientInfo.unAccountID
        );
      }
      GenericEResultCall(e) {
        return this.m_connection
          .Connect()
          .then(() =>
            this.m_bAllowAccountMismatch || this.BClientAccountMatches()
              ? this.m_connection
                  .SendMsgAndAwaitResponse(e)
                  .then((e) =>
                    1 === e.success ? i : this.FailureResult(e.success)
                  )
              : { success: !1, result: 19, account_mismatch: !0 }
          )
          .catch(() => this.FailureResult());
      }
    }
    class s {
      constructor() {
        (this.m_mapWaitingCallbacks = new Map()),
          (this.m_iCallSeq = 1),
          (this.m_bReady = !1),
          (this.m_bClientConnectionFailed = !1),
          (this.m_bSecurityException = !1),
          (this.m_ClientInfo = {
            ulVersion: "",
            bFriendsUIEnabled: !1,
            unAccountID: 0,
            rgSupportedMessages: [],
          });
      }
      get ClientInfo() {
        return this.m_ClientInfo;
      }
      get ready() {
        return this.m_bReady;
      }
      get browser_supported() {
        return !this.m_bSecurityException;
      }
      get connected_to_client() {
        return this.m_socket && this.m_socket.readyState == WebSocket.OPEN;
      }
      SendMsgAndAwaitResponse(e) {
        return new Promise((t, n) => {
          let r = this.m_iCallSeq++;
          this.BSendMsg(e, r)
            ? this.m_mapWaitingCallbacks.set(r, {
                iSeq: r,
                fnCallback: t,
                fnError: n,
              })
            : n();
        });
      }
      BSendMsg(e, t) {
        if (!this.m_socket || this.m_socket.readyState != WebSocket.OPEN)
          return !1;
        let n = Object.assign({}, e, {
          universe: r.d.EUNIVERSE,
          accountid: r.k.accountid,
        });
        void 0 !== t && (n.sequenceid = t);
        try {
          return this.m_socket.send(JSON.stringify(n)), !0;
        } catch (e) {
          return !1;
        }
      }
      OnSocketMessage(e) {
        try {
          let t = JSON.parse(e.data);
          if (t.sequenceid) {
            let e = this.m_mapWaitingCallbacks.get(t.sequenceid);
            if (e)
              return (
                this.m_mapWaitingCallbacks.delete(t.sequenceid),
                void e.fnCallback(t)
              );
          }
        } catch (e) {
          console.error("exception parsing response", e);
        }
      }
      Connect() {
        if (this.m_bReady && this.m_socket.readyState == WebSocket.OPEN)
          return Promise.resolve();
        if (this.m_promiseConnect) return this.m_promiseConnect;
        let e = new Promise((e, t) => {
          try {
            this.m_socket = new WebSocket("ws://127.0.0.1:27060/clientsocket/");
          } catch (e) {
            return (this.m_bSecurityException = !0), void t(e);
          }
          (this.m_socket.onerror = (e) => {
            t();
          }),
            (this.m_socket.onmessage = this.OnSocketMessage.bind(this)),
            (this.m_socket.onopen = () => {
              this.SendMsgAndAwaitResponse({ message: "GetClientInfo" })
                .then((n) => {
                  1 == n.success
                    ? ((this.m_ClientInfo.ulVersion = n.clientversion),
                      (this.m_ClientInfo.bFriendsUIEnabled = !!n.friendsui),
                      (this.m_ClientInfo.unAccountID = n.accountid),
                      n.supported_messages &&
                        (this.m_ClientInfo.rgSupportedMessages =
                          n.supported_messages),
                      e())
                    : t();
                })
                .catch(t);
            });
        });
        return (
          (this.m_promiseConnect = e),
          this.m_promiseConnect
            .then(() => {
              (this.m_bReady = !0), (this.m_promiseConnect = void 0);
            })
            .catch(() => {
              (this.m_bClientConnectionFailed = !0),
                (this.m_promiseConnect = void 0);
            }),
          this.m_promiseConnect
        );
      }
    }
    let a = new o();
    window.ClientConnectionAPI = a;
  },
  J0bI: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return a;
    }),
      n.d(t, "a", function () {
        return c;
      });
    var r = n("mrSG"),
      i = n("2vnA"),
      o = n("0N1H"),
      s = n("tkkQ");
    class a {
      constructor(e) {
        (this.m_bReady = !1), (this.m_bValid = !1), (this.m_strInviteCode = e);
      }
      BIsReady() {
        return this.m_bReady;
      }
      BIsValid() {
        return this.m_bValid;
      }
      BIsInviteLink() {
        return !!this.m_strInviteCode;
      }
      GetInviteCode() {
        return this.m_strInviteCode;
      }
      BNeverExpires() {
        return this.m_rtTimeExpires == o.h;
      }
      GetChatRoomGroupID() {
        return this.m_ulChatRoomGroupID;
      }
      BIsVoiceChatInvite() {
        return !!this.m_ulChatID;
      }
      GetChatID() {
        return this.m_ulChatID;
      }
      GetURL() {
        return this.m_strInviteCode ? c(this.m_strInviteCode) : null;
      }
      BIsUserBanned() {
        return this.m_bIsBanned;
      }
      GetTimeKickExpires() {
        return this.m_rtKickExpires;
      }
      get time_expires() {
        return this.m_rtTimeExpires;
      }
      InitInvalid() {
        (this.m_bValid = !1), (this.m_bReady = !0);
      }
      InitDirectInvite(e, t, n = !1, r) {
        (this.m_ulChatRoomGroupID = e),
          (this.m_ulChatID = t),
          (this.m_bIsBanned = n),
          (this.m_rtKickExpires = r),
          (this.m_rtTimeExpires = o.h),
          (this.m_bValid = !0),
          (this.m_bReady = !0);
      }
    }
    function c(e) {
      return "public" == s.a.WEB_UNIVERSE
        ? "https://s.team/chat/" + e
        : `${s.a.COMMUNITY_BASE_URL}chat/invite/${e}`;
    }
    Object(r.b)([i.C], a.prototype, "m_bReady", void 0),
      Object(r.b)([i.k], a.prototype, "InitInvalid", null),
      Object(r.b)([i.k], a.prototype, "InitDirectInvite", null);
  },
  Kcgk: function (e, t, n) {
    "use strict";
    n.d(t, "g", function () {
      return a;
    }),
      n.d(t, "e", function () {
        return c;
      }),
      n.d(t, "f", function () {
        return u;
      }),
      n.d(t, "b", function () {
        return _;
      }),
      n.d(t, "d", function () {
        return g;
      }),
      n.d(t, "c", function () {
        return E;
      }),
      n.d(t, "a", function () {
        return C;
      });
    var r,
      i = n("oh5H"),
      o = n("ujHl"),
      s = n("Gp1o");
    function a(e, t, n) {
      let s;
      if ("boolean" == typeof t) {
        s = {
          eSuffix: t ? r.None : r.Ago,
          bForceSingleUnits: n,
          bHighGranularity: !1,
        };
      } else
        s = Object.assign(
          { eSuffix: r.Ago, bForceSingleUnits: !1, bHighGranularity: !1 },
          t
        );
      let a = "#TimeInterval_";
      if (
        (s.eSuffix == r.Ago
          ? (a = "#TimeSince_")
          : s.eSuffix == r.Remaining && (a = "#TimeRemaining_"),
        e >= 2 * o.d.PerYear)
      )
        return Object(i.f)(a + "XYears", Math.floor(e / o.d.PerYear));
      if (e >= o.d.PerYear)
        return (e -= o.d.PerYear) >= 2 * o.d.PerMonth && !s.bForceSingleUnits
          ? Object(i.f)(a + "1YearXMonths", Math.floor(e / o.d.PerMonth))
          : Object(i.f)(a + "1Year");
      if (e >= 2 * o.d.PerMonth)
        return Object(i.f)(a + "XMonths", Math.floor(e / o.d.PerMonth));
      if (e >= 2 * o.d.PerWeek)
        return Object(i.f)(a + "XWeeks", Math.floor(e / o.d.PerWeek));
      if (e >= o.d.PerWeek)
        return Object(i.f)(a + "1Week", Math.floor(e / o.d.PerWeek));
      if (e >= 2 * o.d.PerDay)
        return Object(i.f)(a + "XDays", Math.floor(e / o.d.PerDay));
      if (e >= o.d.PerDay)
        return (e -= o.d.PerDay) >= 2 * o.d.PerHour && !s.bForceSingleUnits
          ? Object(i.f)(a + "1DayXHours", Math.floor(e / o.d.PerHour))
          : Object(i.f)(a + "1Day");
      if (e >= 2 * o.d.PerHour)
        return Object(i.f)(a + "XHours", Math.floor(e / o.d.PerHour));
      if (e >= o.d.PerHour)
        return (e -= o.d.PerHour) >= 2 * o.d.PerMinute && !s.bForceSingleUnits
          ? Object(i.f)(a + "1HourXMinutes", Math.floor(e / o.d.PerMinute))
          : Object(i.f)(a + "1Hour");
      if (e >= 2 * o.d.PerMinute) {
        const t = Math.floor(e / o.d.PerMinute),
          n = e % o.d.PerMinute;
        return s.bHighGranularity && 0 != n
          ? 1 == n
            ? Object(i.f)(a + "XMinutes1Second", t)
            : Object(i.f)(a + "XMinutesXSeconds", t, n)
          : Object(i.f)(a + "XMinutes", t);
      }
      if (e >= o.d.PerMinute) {
        const t = e % o.d.PerMinute;
        return s.bHighGranularity && 0 != t
          ? 1 == t
            ? Object(i.f)(a + "1Minute1Second")
            : Object(i.f)(a + "1MinuteXSeconds", t)
          : Object(i.f)(a + "1Minute");
      }
      return s.bHighGranularity
        ? 1 == e
          ? Object(i.f)(a + "1Second")
          : Object(i.f)(a + "XSeconds", e)
        : Object(i.f)(a + "LessThanAMinute");
    }
    function c(e, t, n) {
      const r = {
        weekday: n ? "long" : "short",
        month: "long",
        day: "numeric",
        year: t ? void 0 : "numeric",
      };
      return new Date(1e3 * e).toLocaleDateString(i.e.GetPreferredLocales(), r);
    }
    function u(e) {
      let t = new Date(1e3 * e);
      const n = t.setHours(0, 0, 0, 0);
      let r = f.get(n);
      if (r) return r;
      return (
        (r = t.toLocaleDateString(i.e.GetPreferredLocales(), {
          year: "numeric",
          month: "short",
          day: "numeric",
        })),
        f.set(n, r),
        r
      );
    }
    !(function (e) {
      (e[(e.None = 0)] = "None"),
        (e[(e.Ago = 1)] = "Ago"),
        (e[(e.Remaining = 2)] = "Remaining");
    })(r || (r = {}));
    new Map();
    const l = new Map();
    function d(e, t) {
      const n = new Date(1e3 * e),
        r = i.e.GetPreferredLocales(),
        o =
          t.bForce24HourClock ||
          (function (e) {
            let t = l.get(e);
            if (!0 === t || !1 === t) return t;
            const n = new Date();
            return (
              n.setHours(15),
              (t =
                n.toLocaleTimeString(e, { hour: "numeric" }) ==
                n.toLocaleTimeString(e, { hour: "numeric", hour12: !1 })),
              l.set(e, t),
              t
            );
          })(r[0]);
      return n.toLocaleTimeString(
        r,
        o
          ? { hour: "numeric", minute: "2-digit", hourCycle: "h23" }
          : { hour: "numeric", minute: "2-digit" }
      );
    }
    const f = new Map();
    new Map();
    function _(e, t) {
      const n = new Date(1e3 * e),
        r = new Date(),
        a = Object.assign(
          {
            bGranularFutureTime: !1,
            bGranularTodayTimeOnly: !1,
            bGranularToday: !1,
            bGranularYesterday: !1,
            bGranularWeek: !1,
            bGranularPast: !1,
            bAbbreviateDayOfWeek: !1,
            bForce24HourClock: !1,
          },
          t
        );
      if (n > r) {
        if (!a.bGranularFutureTime)
          return (
            s.a(n.getTime() - r.getTime()),
            n.getFullYear() == r.getFullYear() ? k(n) : C(n)
          );
        s.a(new Date().setHours(24, 0, 0, 0) - r.getTime());
        let e = new Date();
        return (
          e.setHours(0, 0, 0, 0),
          e.setDate(e.getDate() + 1),
          n < e
            ? Object(i.f)("#Time_Today")
            : (e.setDate(e.getDate() + 1),
              n < e
                ? Object(i.f)("#Time_Tomorrow")
                : (e.setDate(e.getDate() + 5),
                  n < e ? E(n) : g(n, !0, a.bAbbreviateDayOfWeek)))
        );
      }
      s.a(new Date().setHours(24, 0, 0, 0) - r.getTime());
      let u = new Date();
      if ((u.setHours(0, 0, 0, 0), n >= u))
        return a.bGranularToday
          ? a.bGranularTodayTimeOnly
            ? d(e, { bForce24HourClock: a.bForce24HourClock })
            : Object(i.f)(
                "#Time_Today_At",
                d(e, { bForce24HourClock: a.bForce24HourClock })
              )
          : Object(i.f)("#Time_Today");
      if ((u.setDate(r.getDate() - 1), n >= u))
        return a.bGranularYesterday
          ? Object(i.f)(
              "#Time_Yesterday_At",
              d(e, { bForce24HourClock: a.bForce24HourClock })
            )
          : Object(i.f)("#Time_Yesterday");
      u.setDate(r.getDate() - 6);
      const l = new Date(u);
      if (a.bGranularWeek && n >= l) return g(n, !1, !a.bAbbreviateDayOfWeek);
      if (a.bGranularPast)
        return Object(i.f)(
          "#Time_Past_At",
          c(e, n.getFullYear() == r.getFullYear(), !a.bAbbreviateDayOfWeek),
          d(e, { bForce24HourClock: a.bForce24HourClock })
        );
      if (n >= l) return Object(i.f)("#TimeSince_ThisWeek");
      if (n.getMonth() == r.getMonth() && n.getFullYear() == r.getFullYear()) {
        const e =
          Math.floor((l.valueOf() - n.valueOf()) / (1e3 * o.d.PerWeek)) + 1;
        return 1 == e
          ? Object(i.f)("#TimeSince_1Week")
          : Object(i.f)("#TimeSince_XWeeks", e);
      }
      return n.getFullYear() == r.getFullYear() ? k(n) : C(n);
    }
    const h = new Map(),
      m = new Map(),
      p = (new Map(), new Map()),
      b = new Map();
    function g(e, t = !1, n = !0) {
      const r = {
          weekday: n ? "long" : "short",
          day: "numeric",
          month: t ? "long" : "short",
        },
        o = e.setHours(0, 0, 0, 0) + r.weekday + r.month;
      let s = b.get(o);
      return (
        s ||
        ((s = e.toLocaleDateString(i.e.GetPreferredLocales(), r)),
        b.set(o, s),
        s)
      );
    }
    function E(e) {
      let t = h.get(e.getDay());
      return (
        t ||
        ((t = e.toLocaleDateString(i.e.GetPreferredLocales(), {
          weekday: "long",
        })),
        h.set(e.getDay(), t),
        t)
      );
    }
    function k(e) {
      let t = m.get(e.getMonth());
      return (
        t ||
        ((t = e.toLocaleDateString(i.e.GetPreferredLocales(), {
          month: "long",
        })),
        m.set(e.getMonth(), t),
        t)
      );
    }
    function C(e) {
      const t = e.getMonth() + 12 * e.getFullYear();
      let n = p.get(t);
      return (
        n ||
        ((n = e.toLocaleDateString(i.e.GetPreferredLocales(), {
          month: "long",
          year: "numeric",
        })),
        p.set(t, n),
        n)
      );
    }
  },
  NJki: function (e, t, n) {
    "use strict";
    n("l4ti");
  },
  NMF7: function (e, t, n) {
    "use strict";
    var r = n("0N1H");
    n.d(t, "ELanguagePchLanguage", function () {
      return r.c;
    }),
      n.d(t, "ELanguagePchWebLanguageCode", function () {
        return r.d;
      }),
      n.d(t, "MapKoreanaToKorean", function () {
        return r.e;
      }),
      n.d(t, "PchLanguageToELanguage", function () {
        return r.f;
      });
    n("B5xR"), n("CqEE");
    var i = n("bbDT");
    n.d(t, "BIsChinaRealm", function () {
      return i.a;
    }),
      n.d(t, "ESteamRealm", function () {
        return i.b;
      });
    n("0D2c"), n("NJki");
    var o = n("l4ti");
    n.d(t, "BOpenVROverlayBrowser", function () {
      return o.a;
    }),
      n.d(t, "EBrowserType", function () {
        return o.b;
      }),
      n.d(t, "ESystemUISystemKey", function () {
        return o.c;
      });
    var s = n("9ysx");
    n.d(t, "BroadcastStatus", function () {
      return s.a;
    }),
      n.d(t, "CommunityPreferences", function () {
        return s.b;
      }),
      n.d(t, "EBroadcastViewRequestState", function () {
        return s.c;
      }),
      n.d(t, "TextFilterPreferences", function () {
        return s.d;
      });
    n("dOeV"), n("bpGV");
    var a = n("Dvx3");
    n.d(t, "ERemoteClientLaunchResult", function () {
      return a.a;
    });
    n("gJ0y"), n("+gJN"), n("E6du");
    var c = n("Uf5Q");
    n.d(t, "EWirelessEndpointStrength", function () {
      return c.a;
    });
    var u = n("ldtI");
    n.d(t, "EClientUINotificationType", function () {
      return u.a;
    });
    var l = n("S4yt");
    n.o(l, "BIsSaleItemType") &&
      n.d(t, "BIsSaleItemType", function () {
        return l.BIsSaleItemType;
      }),
      n.o(l, "DefaultFriendsSettings") &&
        n.d(t, "DefaultFriendsSettings", function () {
          return l.DefaultFriendsSettings;
        }),
      n.o(l, "EClientUsedInputType") &&
        n.d(t, "EClientUsedInputType", function () {
          return l.EClientUsedInputType;
        }),
      n.o(l, "EComputerActiveState") &&
        n.d(t, "EComputerActiveState", function () {
          return l.EComputerActiveState;
        });
    n("dPTY");
    var d = n("iE8r");
    n.d(t, "DefaultFriendsSettings", function () {
      return d.a;
    });
    var f = n("YtLl");
    n.d(t, "BIsSaleItemType", function () {
      return f.a;
    });
    var _ = n("/6ik");
    n.d(t, "EClientUsedInputType", function () {
      return _.a;
    }),
      n.d(t, "EComputerActiveState", function () {
        return _.b;
      });
  },
  O0sN: function (e, t, n) {
    "use strict";
    "VALVE_PUBLIC_PATH" in window
      ? (n.p = window.VALVE_PUBLIC_PATH)
      : console.error(
          "VALVE_PUBLIC_PATH not defined; check for a call to CHTMLHelpers::WebpackConfigScriptlet"
        ),
      console.assert(
        123 === Array.from(new Set([123]))[0],
        "Should not include prototypejs."
      );
  },
  S4yt: function (e, t) {},
  Uf5Q: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    });
    n("0N1H");
    var r, i, o, s, a;
    !(function (e) {
      (e[(e.Unknown = 0)] = "Unknown"),
        (e[(e.Wired = 1)] = "Wired"),
        (e[(e.Wireless = 2)] = "Wireless"),
        (e[(e.Virtual = 3)] = "Virtual");
    })(r || (r = {})),
      (function (e) {
        (e[(e.NotPresent = 0)] = "NotPresent"),
          (e[(e.Failed = 1)] = "Failed"),
          (e[(e.Disconnected = 2)] = "Disconnected"),
          (e[(e.Disconnecting = 3)] = "Disconnecting"),
          (e[(e.Connecting = 4)] = "Connecting"),
          (e[(e.Connected = 5)] = "Connected"),
          (e[(e.Retrying = 6)] = "Retrying");
      })(i || (i = {})),
      (function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Weak = 1)] = "Weak"),
          (e[(e.Ok = 2)] = "Ok"),
          (e[(e.Good = 3)] = "Good"),
          (e[(e.Excellent = 4)] = "Excellent");
      })(o || (o = {})),
      (function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.StaticWep = 1)] = "StaticWep"),
          (e[(e.DynamicWep = 2)] = "DynamicWep"),
          (e[(e.Wpa = 4)] = "Wpa"),
          (e[(e.WpaEnterprise = 8)] = "WpaEnterprise"),
          (e[(e.Wpa2 = 16)] = "Wpa2"),
          (e[(e.Wpa2Enterprise = 32)] = "Wpa2Enterprise"),
          (e[(e.Unsupported = 32768)] = "Unsupported");
      })(s || (s = {})),
      (function (e) {
        (e[(e.k_EHTTPProxyMode_Invalid = 0)] = "k_EHTTPProxyMode_Invalid"),
          (e[(e.k_EHTTPProxyMode_None = 1)] = "k_EHTTPProxyMode_None"),
          (e[(e.k_EHTTPProxyMode_Manual = 2)] = "k_EHTTPProxyMode_Manual"),
          (e[(e.k_EHTTPProxyMode_Automatic = 3)] =
            "k_EHTTPProxyMode_Automatic");
      })(a || (a = {}));
  },
  UqDm: function (e, t, n) {
    "use strict";
    n.d(t, "g", function () {
      return r;
    }),
      n.d(t, "e", function () {
        return i;
      }),
      n.d(t, "c", function () {
        return o;
      }),
      n.d(t, "d", function () {
        return s;
      }),
      n.d(t, "b", function () {
        return a;
      }),
      n.d(t, "a", function () {
        return c;
      }),
      n.d(t, "h", function () {
        return u;
      }),
      n.d(t, "i", function () {
        return l;
      }),
      n.d(t, "f", function () {
        return d;
      });
    n("XaMz");
    function r(e) {
      if ((null == e ? void 0 : e.length) > 1) {
        let t = e.length;
        for (; 0 !== t; ) {
          let n = Math.floor(Math.random() * t);
          t -= 1;
          let r = e[t];
          (e[t] = e[n]), (e[n] = r);
        }
      }
    }
    function i(e, t, n) {
      t < 0 ||
        n < 0 ||
        (n >= e.length && (e[n] = void 0), e.splice(n, 0, e.splice(t, 1)[0]));
    }
    function o(e, t) {
      return s(e, (e) => t == e);
    }
    function s(e, t) {
      let n = e.findIndex(t);
      return n >= 0 && (e.splice(n, 1), !0);
    }
    function a(e, t) {
      return e.reduce((e, n, r, i) => e + (t(n, r, i) ? 1 : 0), 0);
    }
    function c(e, t) {
      return e.filter((e) => t !== e);
    }
    function u(e, t, n) {
      let r = 0,
        i = e.length - 1;
      for (; r <= i; ) {
        let o = Math.floor((r + i) / 2),
          s = n(e[o], t);
        if (s < 0) r = o + 1;
        else if (s > 0) i = o - 1;
        else {
          if (i == o) return o;
          if (o == r) return i > o && n(t, e[o + 1]) < 0 ? o : o + 1;
          r = o;
        }
      }
      return i;
    }
    function l(e, t, n) {
      let r = u(e, t, n);
      e.splice(r + 1, 0, t);
    }
    function d(e, t, n) {
      return (
        e ||
          console.error(
            "array should be defined for us to fill in the missing indexes"
          ),
        e.length < t ? e.concat(Array(t - e.length).fill(n)) : e
      );
    }
  },
  XaMz: function (e, t, n) {
    "use strict";
    function r(e, t, ...n) {
      console.assert
        ? 0 == n.length
          ? console.assert(!!e, t)
          : console.assert(!!e, t, ...n)
        : e || console.warn(t, ...n);
    }
    n.d(t, "a", function () {
      return r;
    });
  },
  Y3TG: function (e, t, n) {
    "use strict";
    n("vDqi");
  },
  YlSc: function (e, t, n) {
    "use strict";
    function r(e) {
      if (!o() || !window.document.cookie) return null;
      let t = document.cookie.match("(^|; )" + e + "=([^;]*)");
      return t && t[2] ? decodeURIComponent(t[2]) : null;
    }
    function i(e, t, n, r) {
      if (!o()) return;
      r || (r = "/");
      let i = "";
      if (void 0 !== n && n) {
        let e = new Date();
        e.setTime(e.getTime() + 864e5 * n),
          (i = "; expires=" + e.toUTCString());
      }
      document.cookie =
        encodeURIComponent(e) + "=" + encodeURIComponent(t) + i + ";path=" + r;
    }
    function o() {
      return !!window.document;
    }
    n.d(t, "b", function () {
      return r;
    }),
      n.d(t, "c", function () {
        return i;
      }),
      n.d(t, "a", function () {
        return o;
      });
  },
  YtLl: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    });
    n("wd0Q"), n("fzER");
    function r(e) {
      return (
        "game" === e ||
        "dlc" === e ||
        "software" === e ||
        "music" === e ||
        "application" === e ||
        "demo" === e ||
        "hardware" === e ||
        "mod" === e ||
        "video" == e ||
        "beta" === e ||
        "advertising" === e
      );
    }
  },
  bbDT: function (e, t, n) {
    "use strict";
    var r;
    function i(e) {
      return e === r.k_ESteamRealmChina;
    }
    n.d(t, "b", function () {
      return r;
    }),
      n.d(t, "a", function () {
        return i;
      }),
      (function (e) {
        (e[(e.k_ESteamRealmUnknown = 0)] = "k_ESteamRealmUnknown"),
          (e[(e.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
          (e[(e.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina");
      })(r || (r = {}));
  },
  bpGV: function (e, t, n) {
    "use strict";
    n("0N1H");
  },
  cDcd: function (e, t) {
    e.exports = React;
  },
  dOeV: function (e, t, n) {
    "use strict";
    var r;
    n("m5X/");
    !(function (e) {
      (e[(e.k_EControllerBindingType_None = 0)] =
        "k_EControllerBindingType_None"),
        (e[(e.k_EControllerBindingType_Key = 1)] =
          "k_EControllerBindingType_Key"),
        (e[(e.k_EControllerBindingType_MouseButton = 2)] =
          "k_EControllerBindingType_MouseButton"),
        (e[(e.k_EControllerBindingType_Gamepad = 3)] =
          "k_EControllerBindingType_Gamepad"),
        (e[(e.k_EControllerBindingType_Mousewheel = 4)] =
          "k_EControllerBindingType_Mousewheel"),
        (e[(e.k_EControllerBindingType_Modeshift = 5)] =
          "k_EControllerBindingType_Modeshift"),
        (e[(e.k_EControllerBindingType_GameAction = 6)] =
          "k_EControllerBindingType_GameAction"),
        (e[(e.k_EControllerBindingType_ControllerAction = 7)] =
          "k_EControllerBindingType_ControllerAction");
    })(r || (r = {}));
  },
  dPTY: function (e, t, n) {
    "use strict";
  },
  faye: function (e, t) {
    e.exports = ReactDOM;
  },
  gJ0y: function (e, t, n) {
    "use strict";
  },
  iE8r: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    });
    function r() {
      return {
        bNotifications_ShowIngame: !0,
        bNotifications_ShowOnline: !1,
        bNotifications_ShowMessage: !0,
        bNotifications_EventsAndAnnouncements: !0,
        bSounds_PlayIngame: !1,
        bSounds_PlayOnline: !1,
        bSounds_PlayMessage: !0,
        bSounds_EventsAndAnnouncements: !1,
        bAlwaysNewChatWindow: !1,
        bForceAlphabeticFriendSorting: !1,
        nChatFlashMode: 0,
        bRememberOpenChats: !0,
        bCompactQuickAccess: !1,
        bCompactFriendsList: !1,
        bNotifications_ShowChatRoomNotification: !0,
        bSounds_PlayChatRoomNotification: !0,
        bHideOfflineFriendsInTagGroups: !1,
        bHideCategorizedFriends: !1,
        bCategorizeInGameFriendsByGame: !0,
        nChatFontSize: 2,
        b24HourClock: !1,
        bDoNotDisturbMode: !1,
        bDisableEmbedInlining: !1,
        bSignIntoFriends: !0,
        bDisableSpellcheck: !1,
        bDisableRoomEffects: !1,
        bAnimatedAvatars: !0,
        featuresEnabled: {},
      };
    }
  },
  l4ti: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return r;
    }),
      n.d(t, "a", function () {
        return s;
      }),
      n.d(t, "c", function () {
        return i;
      });
    var r, i, o;
    function s(e) {
      return (
        e == r.EBrowserType_OpenVROverlay ||
        e == r.EBrowserType_OpenVROverlay_Dashboard
      );
    }
    !(function (e) {
      (e[(e.EBrowserType_OffScreen = 0)] = "EBrowserType_OffScreen"),
        (e[(e.EBrowserType_OpenVROverlay = 1)] = "EBrowserType_OpenVROverlay"),
        (e[(e.EBrowserType_OpenVROverlay_Dashboard = 2)] =
          "EBrowserType_OpenVROverlay_Dashboard"),
        (e[(e.EBrowserType_DirectHWND = 3)] = "EBrowserType_DirectHWND"),
        (e[(e.EBrowserType_DirectHWND_Borderless = 4)] =
          "EBrowserType_DirectHWND_Borderless"),
        (e[(e.EBrowserType_DirectHWND_Hidden = 5)] =
          "EBrowserType_DirectHWND_Hidden"),
        (e[(e.EBrowserType_ChildHWNDNative = 6)] =
          "EBrowserType_ChildHWNDNative"),
        (e[(e.EBrowserType_Transparent_Toplevel = 7)] =
          "EBrowserType_Transparent_Toplevel"),
        (e[(e.EBrowserType_OffScreen_SharedTexture = 8)] =
          "EBrowserType_OffScreen_SharedTexture"),
        (e[(e.EBrowserType_OffScreen_GameOverlay = 9)] =
          "EBrowserType_OffScreen_GameOverlay"),
        (e[(e.EBrowserType_OffScreen_GameOverlay_SharedTexture = 10)] =
          "EBrowserType_OffScreen_GameOverlay_SharedTexture"),
        (e[(e.EBrowserType_Offscreen_FriendsUI = 11)] =
          "EBrowserType_Offscreen_FriendsUI"),
        (e[(e.EBrowserType_MAX = 12)] = "EBrowserType_MAX");
    })(r || (r = {})),
      (function (e) {
        (e[(e.SystemKey0 = 0)] = "SystemKey0"),
          (e[(e.SystemKey1 = 1)] = "SystemKey1");
      })(i || (i = {})),
      (function (e) {
        (e[(e.Hidden = 0)] = "Hidden"),
          (e[(e.Notification = 1)] = "Notification"),
          (e[(e.Overlay = 2)] = "Overlay"),
          (e[(e.Opaque = 3)] = "Opaque"),
          (e[(e.OverlayKeyboard = 4)] = "OverlayKeyboard");
      })(o || (o = {}));
  },
  ldtI: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return r;
    }),
      n.d(t, "a", function () {
        return i;
      });
    class r {
      constructor() {
        (this.comments = 0),
          (this.inventory_items = 0),
          (this.invites = 0),
          (this.gifts = 0),
          (this.offline_messages = 0),
          (this.trade_offers = 0),
          (this.async_game_updates = 0),
          (this.moderator_messages = 0),
          (this.help_request_replies = 0);
      }
    }
    var i;
    !(function (e) {
      (e[(e.k_EClientUINotificationGroupChatMessage = 1)] =
        "k_EClientUINotificationGroupChatMessage"),
        (e[(e.k_EClientUINotificationFriendChatMessage = 2)] =
          "k_EClientUINotificationFriendChatMessage"),
        (e[(e.k_EClientUINotificationFriendPersonaState = 3)] =
          "k_EClientUINotificationFriendPersonaState");
    })(i || (i = {}));
  },
  mrSG: function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return i;
      }),
      n.d(t, "a", function () {
        return o;
      });
    function r(e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
            (n[r[i]] = e[r[i]]);
      }
      return n;
    }
    function i(e, t, n, r) {
      var i,
        o = arguments.length,
        s =
          o < 3
            ? t
            : null === r
            ? (r = Object.getOwnPropertyDescriptor(t, n))
            : r;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, n, r);
      else
        for (var a = e.length - 1; a >= 0; a--)
          (i = e[a]) &&
            (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
      return o > 3 && s && Object.defineProperty(t, n, s), s;
    }
    function o(e, t, n, r) {
      return new (n || (n = Promise))(function (i, o) {
        function s(e) {
          try {
            c(r.next(e));
          } catch (e) {
            o(e);
          }
        }
        function a(e) {
          try {
            c(r.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function c(e) {
          var t;
          e.done
            ? i(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(s, a);
        }
        c((r = r.apply(e, t || [])).next());
      });
    }
  },
  oh5H: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return l;
    }),
      n.d(t, "f", function () {
        return d;
      }),
      n.d(t, "m", function () {
        return f;
      }),
      n.d(t, "k", function () {
        return _;
      }),
      n.d(t, "l", function () {
        return m;
      }),
      n.d(t, "a", function () {
        return b;
      }),
      n.d(t, "d", function () {
        return E;
      }),
      n.d(t, "c", function () {
        return k;
      }),
      n.d(t, "e", function () {
        return C;
      });
    var r = n("cDcd"),
      i = n("0N1H"),
      o = n("NMF7"),
      s = n("1n9R"),
      a = n("UqDm"),
      c = (n("XaMz"), n("+xJ3"), n("E7zH")),
      u = n("Kcgk");
    n.d(t, "g", function () {
      return u.b;
    }),
      n.d(t, "h", function () {
        return u.c;
      }),
      n.d(t, "j", function () {
        return u.e;
      }),
      n.d(t, "n", function () {
        return u.f;
      }),
      n.d(t, "o", function () {
        return u.g;
      }),
      n.d(t, "i", function () {
        return u.d;
      });
    class l {
      constructor() {
        (this.m_mapTokens = new Map()),
          (this.m_mapFallbackTokens = new Map()),
          (this.m_cbkTokensChanged = new c.a());
      }
      static InstallErrorReportingStore(e) {
        this.sm_ErrorReportingStore = e;
      }
      static GetLanguageFallback(e) {
        return "sc_schinese" === e ? "schinese" : "english";
      }
      static GetELanguageFallback(e) {
        return 29 === e ? 6 : 0;
      }
      static IsELanguageValidInRealm(e, t) {
        return (
          t ===
          (29 === e
            ? o.ESteamRealm.k_ESteamRealmChina
            : o.ESteamRealm.k_ESteamRealmGlobal)
        );
      }
      static GetLanguageListForRealms(e) {
        const t = new Array();
        for (let n = 0; n < 30; n++)
          for (const r of e)
            if (this.IsELanguageValidInRealm(n, r)) {
              t.push(n);
              break;
            }
        return t;
      }
      InitFromObjects(e, t, n, r, i) {
        i || this.m_mapTokens.clear();
        const o = Object.assign(Object.assign({}, n || {}), e),
          s = Object.assign(Object.assign({}, r || {}), t || {});
        this.AddTokens(o, s), this.m_cbkTokensChanged.Dispatch();
      }
      InitDirect(e, t) {
        this.m_mapTokens.clear(),
          this.m_mapFallbackTokens.clear(),
          this.AddTokens(e, t),
          this.m_cbkTokensChanged.Dispatch();
      }
      AddTokens(e, t) {
        Object.keys(e).forEach((t) => {
          this.m_mapTokens.set(t, e[t]);
        }),
          t &&
            Object.keys(t).forEach((e) => {
              this.m_mapTokens.has(e) || this.m_mapTokens.set(e, t[e]),
                this.m_mapFallbackTokens.set(e, t[e]);
            });
      }
      GetTokensChangedCallbackList() {
        return this.m_cbkTokensChanged;
      }
      GetPreferredLocales() {
        return this.m_rgLocalesToUse
          ? this.m_rgLocalesToUse
          : navigator && navigator.languages
          ? navigator.languages
          : ["en-US"];
      }
      GetELanguageFallbackOrder(e = null) {
        let t = new Array();
        if (
          (t.push(Object(i.f)(s.d.LANGUAGE)),
          (s.d.SUPPORTED_LANGUAGES || []).forEach((e) => {
            e.value != s.d.LANGUAGE && t.push(Object(i.f)(e.value));
          }),
          e)
        ) {
          l.GetLanguageListForRealms(e).forEach((e) => {
            -1 == t.indexOf(e) && t.push(e);
          });
        }
        return t;
      }
      SetPreferredLocales(e) {
        this.m_rgLocalesToUse = e;
      }
      LocalizeString(e, t) {
        if (!e || 0 == e.length || "#" != e.charAt(0)) return;
        let n = this.m_mapTokens.get(e.substring(1));
        if (void 0 !== n) return n;
        !t &&
          l.sm_ErrorReportingStore &&
          l.sm_ErrorReportingStore.ReportError(
            new Error(
              `Unable to find localization token '${e}' for language '${s.d.LANGUAGE}', ${this.m_mapTokens.size} tokens in map`
            ),
            { bIncludeMessageInIdentifier: !0 }
          );
      }
      LocalizeStringFromFallback(e) {
        if (!e || 0 == e.length || "#" != e.charAt(0)) return;
        let t = this.m_mapFallbackTokens.get(e.substring(1));
        return void 0 !== t ? t : void 0;
      }
    }
    function d(e, ...t) {
      let n = C.LocalizeString(e);
      return void 0 === n ? e : p(n, ...t);
    }
    function f(e, ...t) {
      let n = C.LocalizeString(e);
      if (void 0 === n) return e;
      let i,
        o = [],
        s = /(.*?)%(\d+)\$s/g,
        a = 0;
      for (; (i = s.exec(n)); ) {
        (a += i[0].length), o.push(i[1]);
        let e = parseInt(i[2]);
        e >= 1 && e <= t.length && o.push(t[e - 1]);
      }
      return o.push(n.substr(a)), r.createElement(r.Fragment, null, ...o);
    }
    function _(e, ...t) {
      let n = C.LocalizeString(e);
      return void 0 === n ? e : h(n, ...t);
    }
    function h(e, ...t) {
      let n,
        i = [],
        o = /(.*?)<(\d+)>(.*)<\/(\2)>/g,
        s = 0;
      for (; (n = o.exec(e)); ) {
        (s += n[0].length), i.push(n[1]);
        let e = parseInt(n[2]),
          o = n[3] || "",
          a = (e >= 1 && e <= t.length ? t[e - 1] : null)
            ? r.cloneElement(t[e - 1], {}, [o])
            : o;
        i.push(a);
      }
      return i.push(e.substr(s)), r.createElement(r.Fragment, null, ...i);
    }
    function m(e, t, ...n) {
      return 1 === t || "1" === t ? d(e, t, ...n) : d(e + "_Plural", t, ...n);
    }
    function p(e, ...t) {
      return 0 == t.length
        ? e
        : (e = e.replace(/%(?:(\d+)\$)?s/g, function (e, n) {
            if (n <= t.length && n >= 1) {
              let e = t[n - 1];
              return String(null == e ? "" : e);
            }
            return e;
          }));
    }
    class b {
      static Set(e, t, n) {
        if (e.length <= t) {
          if (t >= 30) return e;
          e = Object(a.f)(e, t + 1, null);
        }
        return (e[t] = n), e;
      }
      static Get(e, t) {
        return (e && e.length > t && e[t]) || "";
      }
      static GetWithFallback(e, t) {
        if (e) {
          return b.Get(e, t) || b.Get(e, l.GetELanguageFallback(t));
        }
        return null;
      }
    }
    const g = {
        english: "en",
        german: "de",
        french: "fr",
        italian: "it",
        korean: "ko",
        latam: "es-419",
        spanish: "es",
        schinese: "zh-cn",
        tchinese: "zh-tw",
        russian: "ru",
        thai: "th",
        japanese: "ja",
        brazilian: "pt-br",
        portuguese: "pt",
        polish: "pl",
        danish: "da",
        dutch: "nl",
        finnish: "fi",
        norwegian: "no",
        swedish: "sv",
        hungarian: "hu",
        czech: "cs",
        romanian: "ro",
        turkish: "tr",
        arabic: "ar",
        bulgarian: "bg",
        greek: "el",
        ukrainian: "uk",
        vietnamese: "vn",
        sc_schinese: "zh-cn",
        koreana: "ko",
      },
      E = {
        "en-US": 0,
        "de-DE": 1,
        "fr-FR": 2,
        "it-IT": 3,
        "ko-KR": 4,
        "es-ES": 5,
        "zh-CH": 6,
        "zh-CN": 7,
        "ru-RU": 8,
        "th-TH": 9,
        "ja-JP": 10,
        "pt-PT": 11,
        "pl-PL": 12,
        "da-DK": 13,
        "nl-NL": 14,
        "fi-FI": 15,
        "nb-NO": 16,
        "sv-SE": 17,
        "hu-HU": 18,
        "cs-CZ": 19,
        "ro-RO": 20,
        "tr-TR": 21,
        "pt-BR": 22,
        "bg-BG": 23,
        "el-GR": 24,
        "ar-SA": 25,
        "uk-UA": 26,
        "es-419": 27,
        "vi-VN": 28,
      };
    function k() {
      return g[s.d.LANGUAGE] || null;
    }
    const C = new l();
    window.LocalizationManager = C;
  },
  "qM/t": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n("mrSG"),
      i = (n("O0sN"), n("cDcd")),
      o = n("faye"),
      s = n("tkkQ"),
      a = n("Ezvv"),
      c = (n("Y3TG"), n("oh5H")),
      u = n("XaMz"),
      l = n("2vnA"),
      d = n("TyAF"),
      f = n("J0bI"),
      _ = n("s+DT");
    var h = n("7ERL"),
      m = n("K4CH");
    n("RBVV");
    class p extends f.b {
      BIsExpired() {
        return b.sm_rtTimeCur >= this.m_rtTimeExpires;
      }
      InitFromPHPInviteLinkInfo(e) {
        this.m_ulChatID = e.chat_id;
        let t = new _.a(e.steamid_sender);
        t.BIsIndividualAccount() &&
          (this.m_unAccountIDInviter = t.GetAccountID()),
          (this.m_rtTimeExpires = e.time_expires),
          (this.m_bIsBanned = e.banned),
          (this.m_rtKickExpires = e.time_kick_expire),
          e.group_summary &&
            (this.m_ulChatRoomGroupID = e.group_summary.chat_group_id),
          (this.m_bValid = !0),
          (this.m_bReady = !0);
      }
    }
    Object(r.b)([l.k], p.prototype, "InitFromPHPInviteLinkInfo", null);
    class b {
      constructor(e) {
        (this.m_bConnectingToClient = !1),
          (this.m_invite = new p(e.strInviteCode)),
          e.Invite
            ? this.m_invite.InitFromPHPInviteLinkInfo(e.Invite)
            : this.m_invite.InitInvalid(),
          (this.m_htmlPreRendered = e.render),
          this.SendInviteToClient();
      }
      BIsInviteValid() {
        return this.m_invite.BIsValid() && !this.m_invite.BIsExpired();
      }
      GetInvite() {
        return this.m_invite;
      }
      BIsConnectingToClient() {
        return this.m_bConnectingToClient;
      }
      GetConnectResults() {
        return this.m_connectResult;
      }
      GetPreRenderedHTML() {
        return this.m_htmlPreRendered;
      }
      LaunchWebChat() {
        !(function (e) {
          let t = window.open("", "SteamWebChat", "");
          if (!t) return;
          let n = !1,
            r = !1;
          try {
            n = "about:blank" == t.location.href;
          } catch (e) {
            r = !0;
          }
          if (n) {
            if (e) {
              let n = function (r) {
                let i = s.a.COMMUNITY_BASE_URL.replace(
                  /(https?:\/\/[^/]*).*$/,
                  "$1"
                );
                r.source == t &&
                  "FriendsUIReady" == r.data &&
                  r.origin == i &&
                  (t.postMessage(e, s.a.COMMUNITY_BASE_URL),
                  window.removeEventListener("message", n));
              };
              window.addEventListener("message", n);
            }
            t.location.href = s.a.COMMUNITY_BASE_URL + "chat/";
          } else e && t.postMessage(e, s.a.COMMUNITY_BASE_URL);
          t.focus();
        })({
          command: "ShowChatRoomGroupInvite",
          invite_code: this.m_invite.GetInviteCode(),
        });
      }
      LaunchSteamIgnoreAccount() {
        a.b.SetAllowAccountMismatch(!0), this.SendInviteToClient();
      }
      ForceLaunchSteamClient() {
        window.location.href =
          "steam://friends/ShowChatRoomGroupInvite/" +
          this.m_invite.GetInviteCode();
      }
      SendInviteToClient() {
        this.m_invite.BIsValid() &&
          !this.m_invite.BIsExpired() &&
          ((this.m_bConnectingToClient = !0),
          a.b
            .ShowChatRoomGroupInvite(this.m_invite.GetInviteCode())
            .then((e) => {
              Object(l.G)(() => {
                (this.m_bConnectingToClient = !1),
                  (this.m_connectResult = e),
                  console.log(e);
              });
            }));
      }
    }
    Object(r.b)([l.C], b.prototype, "m_bConnectingToClient", void 0),
      Object(r.b)([l.C], b.prototype, "m_connectResult", void 0);
    let g = class extends i.Component {
      render() {
        return i.createElement(
          "div",
          { className: "InviteLandingRoot" },
          this.props.controller.BIsInviteValid()
            ? i.createElement(E, { controller: this.props.controller })
            : i.createElement(k, { controller: this.props.controller })
        );
      }
    };
    g = Object(r.b)([d.a], g);
    let E = class extends i.Component {
      constructor() {
        super(...arguments), (this.m_bTriedToLaunchSteam = !1);
      }
      LaunchWebChat() {
        this.props.controller.LaunchWebChat();
      }
      OpenInSteamIgnoreAccount() {
        this.props.controller.LaunchSteamIgnoreAccount();
      }
      LaunchSteamClient() {
        this.props.controller.ForceLaunchSteamClient(),
          window.setTimeout(() => {
            this.m_bTriedToLaunchSteam = !0;
          }, 1e3);
      }
      IsMobileDevice() {
        switch (new m.UAParser(navigator.userAgent).getResult().os.name) {
          case "iOS":
          case "Android":
          case "BlackBerry":
            return !0;
        }
        return !1;
      }
      render() {
        if (this.props.controller.BIsConnectingToClient())
          return i.createElement(
            "div",
            { className: "ChatMessageInvite RequestingInfo NoColumns" },
            i.createElement(
              "div",
              { className: "postedExpiredInvite" },
              Object(c.f)("#bbcode_invite_requesting_info")
            )
          );
        let e = this.props.controller.GetConnectResults(),
          t = this.props.controller.GetInvite(),
          n = (s.a.COMMUNITY_BASE_URL, this.IsMobileDevice()),
          r = "inviteButton inviteButtonJoinChat";
        return (
          t.BIsVoiceChatInvite() && (r += " inviteButtonJoinVoice"),
          e.success
            ? i.createElement(
                "div",
                { className: "ChatMessageInvite NoColumns" },
                i.createElement(
                  "div",
                  { className: "groupName" },
                  Object(c.f)("#InviteLanding_SentToSteam")
                ),
                i.createElement(
                  "div",
                  { className: "inviteLabel" },
                  Object(c.m)(
                    "#InviteLanding_SentToSteam_Desc",
                    i.createElement(
                      "a",
                      {
                        href: "javascript:void(0);",
                        onClick: this.LaunchWebChat,
                      },
                      Object(c.f)(
                        "#InviteLanding_SentToSteam_Desc_LaunchWebChat"
                      )
                    )
                  )
                )
              )
            : e.account_mismatch
            ? i.createElement(
                C,
                { render: this.props.controller.GetPreRenderedHTML() },
                i.createElement(
                  "div",
                  { className: "inviteLabel" },
                  Object(c.f)("#InviteLanding_AccountMismatch")
                ),
                i.createElement(
                  "div",
                  { className: "inviteLabel" },
                  i.createElement(
                    "button",
                    {
                      className: r,
                      type: "button",
                      onClick: this.OpenInSteamIgnoreAccount,
                    },
                    Object(c.f)("#InviteLanding_OpenInSteam")
                  ),
                  i.createElement(
                    "button",
                    {
                      className: r,
                      type: "button",
                      onClick: this.LaunchWebChat,
                    },
                    Object(c.f)("#InviteLanding_OpenInWebChat")
                  )
                )
              )
            : e.call_unsupported
            ? i.createElement(
                "div",
                { className: "ChatMessageInvite" },
                i.createElement(
                  "div",
                  { className: "groupName" },
                  Object(c.f)("#InviteLanding_SentToSteam")
                ),
                i.createElement(
                  "div",
                  { className: "inviteLabel" },
                  Object(c.m)(
                    "#InviteLanding_SentToSteam_Desc",
                    i.createElement(
                      "a",
                      {
                        href: "javascript:void(0);",
                        onClick: this.LaunchWebChat,
                      },
                      Object(c.f)(
                        "#InviteLanding_SentToSteam_Desc_LaunchWebChat"
                      )
                    )
                  )
                )
              )
            : i.createElement(
                C,
                { render: this.props.controller.GetPreRenderedHTML() },
                i.createElement(
                  "div",
                  { className: "inviteLabel inviteLabelButtons" },
                  !n &&
                    i.createElement(
                      "button",
                      {
                        className: r,
                        type: "button",
                        onClick: this.LaunchSteamClient,
                      },
                      Object(c.f)("#InviteLanding_OpenInSteam")
                    ),
                  i.createElement(
                    "button",
                    {
                      className: r,
                      type: "button",
                      onClick: this.LaunchWebChat,
                    },
                    Object(c.f)("#InviteLanding_OpenInWebChat")
                  )
                ),
                this.m_bTriedToLaunchSteam &&
                  i.createElement(
                    "div",
                    { className: "inviteLabel inviteLabelLaunchPrompt" },
                    Object(c.f)("#InviteLanding_OpenInSteam_Help")
                  )
              )
        );
      }
    };
    Object(r.b)([l.C], E.prototype, "m_bTriedToLaunchSteam", void 0),
      Object(r.b)([h.b], E.prototype, "LaunchWebChat", null),
      Object(r.b)([h.b], E.prototype, "OpenInSteamIgnoreAccount", null),
      Object(r.b)([h.b], E.prototype, "LaunchSteamClient", null),
      (E = Object(r.b)([d.a], E));
    class k extends i.Component {
      render() {
        return i.createElement(
          "div",
          { className: "ChatMessageInvite" },
          i.createElement(
            "div",
            { className: "postedExpiredInvite" },
            Object(c.f)("#InviteLanding_ExpiredOrInvalid")
          )
        );
      }
    }
    function C(e) {
      return i.createElement(
        "div",
        { className: "ChatMessageInvite" },
        i.createElement("div", {
          className: "leftInviteContainer",
          dangerouslySetInnerHTML: { __html: e.render.strAvatarHTML },
        }),
        i.createElement(
          "div",
          { className: "rightInviteContainer" },
          i.createElement(
            "div",
            { className: "inviteLabel" },
            Object(c.m)(
              "#bbcode_invite_description",
              i.createElement("span", {
                dangerouslySetInnerHTML: {
                  __html: e.render.strInviterNameLinkHTML,
                },
              })
            )
          ),
          i.createElement(
            "div",
            { className: "groupName" },
            e.render.strChatRoomGroupName
          ),
          e.children
        )
      );
    }
    window.AssertMsg = u.a;
    let S = new a.a();
    function v(e) {
      let t;
      try {
        t = JSON.parse(e.getAttribute("data-inviteinfo"));
      } catch (e) {}
      b.sm_rtTimeCur = t.rtTimeCur;
      let n = new b(t);
      o.render(i.createElement(g, { controller: n }), e);
    }
    (window.ClientConnectionAPI = S),
      document.addEventListener("DOMContentLoaded", function () {
        return Object(r.a)(this, void 0, void 0, function* () {
          Object(s.c)(),
            yield (function (e) {
              return Object(r.a)(this, void 0, void 0, function* () {
                const t = c.b.GetLanguageFallback(e),
                  r = e === t,
                  [i, o, s, a] = yield Promise.all([
                    n("9Lmx")(`./shared_${e}.json`),
                    n("79S0")(`./friendsui_${e}.json`),
                    r ? {} : n("9Lmx")(`./shared_${t}.json`),
                    r ? {} : n("79S0")(`./friendsui_${t}.json`),
                  ]);
                c.e.AddTokens(
                  Object.assign(Object.assign({}, i), o),
                  Object.assign(Object.assign({}, s), a)
                );
              });
            })(s.a.LANGUAGE),
            (function () {
              let e = document.querySelectorAll(".ChatReactRoot");
              for (let t = 0; t < e.length; t++) {
                let n = e[t],
                  r = n.getAttribute("data-component");
                switch (r) {
                  case "ChatInvite":
                    v(n);
                    break;
                  default:
                    Object(u.a)(!1, `unknown component: "${r}"`);
                }
              }
            })();
        });
      });
  },
  "s+DT": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    });
    var r = n("2lpH"),
      i = n.n(r),
      o = n("0N1H"),
      s = n("1n9R");
    n("XaMz");
    class a {
      constructor(e = 0, t, n, r) {
        e instanceof a
          ? (this.m_ulSteamID = e.m_ulSteamID)
          : "string" == typeof e
          ? (this.m_ulSteamID = i.a.fromString(e, !0))
          : t && n && void 0 !== r
          ? this.SetFromComponents(e, r, n, t)
          : (this.m_ulSteamID = e ? i.a.fromNumber(e, !0) : i.a.UZERO);
      }
      static InitFromAccountID(e) {
        return new a(Number(e), s.d.EUNIVERSE, 1, o.q);
      }
      static InitFromClanID(e) {
        return new a(Number(e), s.d.EUNIVERSE, 7, 0);
      }
      GetAccountID() {
        return this.m_ulSteamID.getLowBitsUnsigned();
      }
      GetInstance() {
        return 1048575 & this.m_ulSteamID.getHighBitsUnsigned();
      }
      GetAccountType() {
        return (this.m_ulSteamID.getHighBitsUnsigned() >> 20) & 15;
      }
      GetUniverse() {
        return (this.m_ulSteamID.getHighBitsUnsigned() >> 24) & 255;
      }
      ConvertTo64BitString() {
        return this.m_ulSteamID.toString();
      }
      Render() {
        switch (this.GetAccountType()) {
          case 0:
            return "[I:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
          case 7:
            return "[g:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
          case 4:
            return (
              "[A:" +
              this.GetUniverse() +
              ":" +
              this.GetAccountID() +
              ":" +
              this.GetInstance() +
              "]"
            );
          case 3:
            return "[G:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
          case 2:
            return (
              "[M:" +
              this.GetUniverse() +
              ":" +
              this.GetAccountID() +
              ":" +
              this.GetInstance() +
              "]"
            );
          case 5:
            return "[P:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
          case 6:
            return "[C:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
          default:
            return "[U:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
        }
      }
      BIsValid() {
        let e = this.GetAccountType();
        if (e <= 0 || e >= 11) return !1;
        let t = this.GetUniverse();
        if (t <= 0 || t >= 5) return !1;
        if (1 == e) {
          if (0 == this.GetAccountID() || this.GetInstance() > o.r) return !1;
        } else if (7 == e) {
          if (0 == this.GetAccountID() || 0 != this.GetInstance()) return !1;
        } else if (3 == e && 0 == this.GetAccountID()) return !1;
        return !0;
      }
      BIsIndividualAccount() {
        return 1 == this.GetAccountType();
      }
      BIsClanAccount() {
        return 7 == this.GetAccountType();
      }
      SetAccountID(e) {
        this.m_ulSteamID = new i.a(
          e,
          this.m_ulSteamID.getHighBitsUnsigned(),
          !0
        );
      }
      SetInstance(e) {
        this.SetFromComponents(
          this.GetAccountID(),
          e,
          this.GetAccountType(),
          this.GetUniverse()
        );
      }
      SetAccountType(e) {
        this.SetFromComponents(
          this.GetAccountID(),
          this.GetInstance(),
          e,
          this.GetUniverse()
        );
      }
      SetUniverse(e) {
        this.SetFromComponents(
          this.GetAccountID(),
          this.GetInstance(),
          this.GetAccountType(),
          e
        );
      }
      SetFromComponents(e, t, n, r) {
        let o = ((255 & r) << 24) + ((15 & n) << 20) + (1048575 & t),
          s = 4294967295 & e;
        this.m_ulSteamID = new i.a(s, o, !0);
      }
    }
  },
  sQq0: function (e, t, n) {
    "use strict";
    n.d(t, "d", function () {
      return i;
    }),
      n.d(t, "h", function () {
        return o;
      }),
      n.d(t, "e", function () {
        return s;
      }),
      n.d(t, "c", function () {
        return a;
      }),
      n.d(t, "g", function () {
        return c;
      }),
      n.d(t, "b", function () {
        return u;
      }),
      n.d(t, "f", function () {
        return l;
      }),
      n.d(t, "a", function () {
        return d;
      });
    var r = n("hRO2");
    const i = r.BinaryReader.prototype,
      o = r.BinaryWriter.prototype;
    function s(e) {
      let t = {};
      const { fields: n } = e;
      for (let e in n) {
        const r = n[e];
        t[r.n] = r;
      }
      return t;
    }
    function a(e, t) {
      const { proto: n, fields: i } = e,
        o = new n();
      for (let e in i) {
        const { n: n, c: s, r: a, d: c, q: u } = i[e];
        if (!t.hasOwnProperty(e)) continue;
        const l = t[e];
        s
          ? a
            ? r.Message.setRepeatedWrapperField(
                o,
                n,
                Array.isArray(l) ? l.map((e) => s.fromObject(e)) : []
              )
            : r.Message.setWrapperField(o, n, s.fromObject(l))
          : r.Message.setField(o, n, l);
      }
      return o;
    }
    function c(e, t, n) {
      const { proto: i, fields: o } = e;
      let s = {};
      for (let e in o) {
        const { n: i, c: a, r: c, d: u, q: l } = o[e];
        if (a)
          if (c)
            s[e] = r.Message.toObjectList(
              r.Message.getRepeatedWrapperField(n, a, i),
              a.toObject,
              t
            );
          else {
            const o = r.Message.getWrapperField(n, a, i, l ? 1 : 0);
            o && (s[e] = a.toObject(t, o));
          }
        else {
          const t = r.Message.getFieldWithDefault(
            n,
            i,
            void 0 !== u ? u : null
          );
          (null !== t || l) && (s[e] = t);
        }
      }
      return t && (s.$jspbMessageInstance = n), s;
    }
    function u(e, t, n) {
      for (; n.nextField() && !n.isEndGroup(); ) {
        const i = e[n.getFieldNumber()];
        if (i) {
          const { n: e, c: o, r: s, d: a, q: c, br: u } = i;
          if (o) {
            const i = new o();
            n.readMessage(i, o.deserializeBinaryFromReader),
              s
                ? r.Message.addToRepeatedWrapperField(t, e, i, o)
                : r.Message.setWrapperField(t, e, i);
          } else if (u) {
            const i = u.call(n);
            s
              ? r.Message.addToRepeatedField(t, e, i)
              : r.Message.setField(t, e, i);
          } else
            console.assert(
              u,
              `Reader func not set for field number ${e} in class ${o}`
            ),
              n.skipField();
        } else n.skipField();
      }
      return t;
    }
    function l(e, t, n) {
      const { fields: i } = e;
      for (let e in i) {
        const { n: o, c: s, r: a, d: c, q: u, bw: l } = i[e];
        if (s)
          if (a) {
            const e = r.Message.getRepeatedWrapperField(t, s, o);
            ((e && e.length) || u) &&
              n.writeRepeatedMessage(o, e, s.serializeBinaryToWriter);
          } else {
            const e = r.Message.getWrapperField(t, s, o, u ? 1 : 0);
            e && n.writeMessage(o, e, s.serializeBinaryToWriter);
          }
        else if (l) {
          const e = r.Message.getField(t, o);
          void 0 !== e && l.call(n, o, e);
        } else
          console.assert(
            l,
            `Writer func not set for field number ${o} in class ${s}`
          );
      }
    }
    function d(e) {
      const t = e.proto;
      for (const n in e.fields) {
        const i = e.fields[n],
          { n: o, c: s, r: a, d: c, q: u } = i;
        i.hasOwnProperty("d")
          ? (t.prototype[n] = f(r.Message.getFieldWithDefault, o, c))
          : (t.prototype[n] = s
              ? a
                ? f(r.Message.getRepeatedWrapperField, s, o)
                : _(s, o)
              : f(r.Message.getField, o)),
          (t.prototype["set_" + n] = h(
            s
              ? a
                ? r.Message.setRepeatedWrapperField
                : r.Message.setWrapperField
              : r.Message.setField,
            o
          )),
          a && (t.prototype["add_" + n] = m(o, s));
      }
    }
    function f(e, ...t) {
      return function () {
        return e(this, ...t);
      };
    }
    function _(e, t) {
      return function (n = !0) {
        return r.Message.getWrapperField(this, e, t, n ? 1 : 0);
      };
    }
    function h(e, t) {
      return function (n) {
        return e(this, t, n);
      };
    }
    function m(e, t) {
      return t
        ? function (n, i) {
            return r.Message.addToRepeatedWrapperField(this, e, n, t, i);
          }
        : function (t, n) {
            r.Message.addToRepeatedField(this, e, t, n);
          };
    }
  },
  tkkQ: function (e, t, n) {
    "use strict";
    var r = n("1n9R");
    n.d(t, "a", function () {
      return r.d;
    }),
      n.d(t, "d", function () {
        return r.k;
      }),
      n.d(t, "c", function () {
        return r.j;
      }),
      n.d(t, "b", function () {
        return r.e;
      });
  },
  ujHl: function (e, t, n) {
    "use strict";
    n.d(t, "d", function () {
      return r;
    }),
      n.d(t, "a", function () {
        return i;
      }),
      n.d(t, "b", function () {
        return o;
      }),
      n.d(t, "c", function () {
        return s;
      }),
      n.d(t, "e", function () {
        return a;
      });
    const r = {
      PerYear: 31536e3,
      PerMonth: 2628e3,
      PerWeek: 604800,
      PerDay: 86400,
      PerHour: 3600,
      PerMinute: 60,
    };
    function i(e, t) {
      return (
        e.getFullYear() == t.getFullYear() &&
        e.getMonth() == t.getMonth() &&
        e.getDate() == t.getDate()
      );
    }
    function o(e, t) {
      return e.getFullYear() == t.getFullYear();
    }
    function s(e) {
      return new Date(e.getFullYear(), e.getMonth(), 1, 0, 0, 0, 0);
    }
    function a(e) {
      return new Promise((t) => setTimeout(t, e));
    }
  },
  y3Ls: function (e, t, n) {
    "use strict";
    function r(e, t, n) {
      return {
        get() {
          let e = n.value.bind(this);
          return (
            this.hasOwnProperty(t) ||
              Object.defineProperty(this, t, { value: e }),
            e
          );
        },
      };
    }
    n.d(t, "a", function () {
      return r;
    });
  },
});

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "6132552";
(window.webpackJsonp = window.webpackJsonp || []).push([
  [97],
  {
    "+jbA": function(e, t, n) {
      e.exports = {
        ContextMenuMouseOverlay: "contextmenu_ContextMenuMouseOverlay_3Knd7",
        ContextMenuFocusContainer:
          "contextmenu_ContextMenuFocusContainer_1S6CC",
        contextMenu: "contextmenu_contextMenu_PP7LM",
        ContextMenuPopup: "contextmenu_ContextMenuPopup_14wqd",
        contextMenuContents: "contextmenu_contextMenuContents_2EstN",
        contextMenuItem: "contextmenu_contextMenuItem_1n7Wl",
        active: "contextmenu_active_18z-3",
        MenuSectionHeader: "contextmenu_MenuSectionHeader_2Bb4J",
        StrongerSeparation: "contextmenu_StrongerSeparation_1BNck",
        UpperCase: "contextmenu_UpperCase_uz1Xm",
        SubMenu: "contextmenu_SubMenu_2RlEO",
        Label: "contextmenu_Label_2qdHl",
        Arrow: "contextmenu_Arrow_114nF",
        PopoutSubMenu: "contextmenu_PopoutSubMenu_Baq37",
        PopoutSubMenuItems: "contextmenu_PopoutSubMenuItems_2fZ_e"
      };
    },
    "2i24": function(e, t, n) {
      e.exports = {
        LoadingWrapper: "throbber_LoadingWrapper_2wAKy",
        Static: "throbber_Static_1Qfwp",
        none: "throbber_none_1F0lz",
        bottomCircle: "throbber_bottomCircle_2qjZm",
        noString: "throbber_noString_1Sy0p",
        Throbber: "throbber_Throbber_lYUEj",
        throbber_small: "throbber_throbber_small_2zbyh",
        throbber_medium: "throbber_throbber_medium_2CphU",
        throbber_large: "throbber_throbber_large_1x18v",
        throbber_center_wrapper: "throbber_throbber_center_wrapper_3IYPz",
        ThrobberText: "throbber_ThrobberText_21nVi",
        blur: "throbber_blur_1ctjA",
        ThrobberRoundLoop: "throbber_ThrobberRoundLoop_1O-cW",
        roundOuterOutline: "throbber_roundOuterOutline_1Vv--",
        roundOuter: "throbber_roundOuter_2K0Lz",
        roundFill: "throbber_roundFill_3sQFk",
        ThrobberFillLoop: "throbber_ThrobberFillLoop_ofdi9",
        topCircle: "throbber_topCircle_1LZff",
        circlePulse: "throbber_circlePulse_1XN6Z",
        ThrobberTopCircleLoop: "throbber_ThrobberTopCircleLoop_1jALk",
        ThrobberBottomCircleLoop: "throbber_ThrobberBottomCircleLoop_1KvOg",
        roundThrobber15: "throbber_roundThrobber15_2LGHp",
        roundThrobber14: "throbber_roundThrobber14_2FGCn",
        roundThrobber13: "throbber_roundThrobber13_1X-5j",
        roundThrobber12: "throbber_roundThrobber12_1pj1Q",
        roundThrobber11: "throbber_roundThrobber11_xFmZa",
        roundThrobber10: "throbber_roundThrobber10_3MGYo",
        roundThrobber09: "throbber_roundThrobber09_ktVJ4",
        roundThrobber08: "throbber_roundThrobber08_3s_7m",
        roundThrobber07: "throbber_roundThrobber07_11MVp",
        roundThrobber06: "throbber_roundThrobber06_2cl-m",
        roundThrobber05: "throbber_roundThrobber05_3-JE0",
        roundThrobber04: "throbber_roundThrobber04_1xNIK",
        roundThrobber03: "throbber_roundThrobber03_1S17y",
        roundThrobber02: "throbber_roundThrobber02_1-oUJ",
        roundThrobber01: "throbber_roundThrobber01_2tXge",
        ThrobberRoundLoopThickness: "throbber_ThrobberRoundLoopThickness_1fs4R",
        throbber_xlarge: "throbber_throbber_xlarge_1gYeZ",
        throbber_xxlarge: "throbber_throbber_xxlarge_3j-p4"
      };
    },
    "5izx": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return l;
      });
      var r = n("wd/R"),
        o = n.n(r),
        i = n("s4NR"),
        a = n.n(i),
        s = n("Jnrd"),
        c = n("lkRc"),
        l = new ((function() {
          function e() {
            (this.bOpenEventLandingPage = !1),
              (this.bIncludeFeaturedAsGameSource = !0),
              (this.nOverrideDateNow = void 0);
          }
          return (
            Object.defineProperty(e.prototype, "bUseCustomCollectionHeaders", {
              get: function() {
                return this.bIncludeCurators;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "bInSteamLabs", {
              get: function() {
                return !this.bUseSlashNews;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "bUseSlashNews", {
              get: function() {
                return (
                  "dev" == c.b.WEB_UNIVERSE ||
                  "beta" == c.b.WEB_UNIVERSE ||
                  "true" == Object(s.b)("preferNewsHub")
                );
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "bIncludeCurators", {
              get: function() {
                return !0;
              },
              enumerable: !1,
              configurable: !0
            }),
            (e.prototype.GetTimeNowWithOverride = function() {
              return this.nOverrideDateNow
                ? this.nOverrideDateNow
                : Date.now() / 1e3;
            }),
            (e.prototype.GetTimeNowWithOverrideAsDate = function() {
              return this.nOverrideDateNow
                ? new Date(1e3 * this.nOverrideDateNow)
                : new Date();
            }),
            (e.prototype.BHasTimeOverride = function() {
              return Boolean(this.nOverrideDateNow);
            }),
            (e.prototype.ParseDevOverrides = function(e) {
              var t, n;
              e &&
                0 != e.length &&
                ("string" !=
                  typeof (t = a.a.parse("?" == e[0] ? e.substring(1) : e)).t ||
                  ("dev" != c.b.WEB_UNIVERSE && "beta" != c.b.WEB_UNIVERSE) ||
                  ((n = /^\d+$/.test(t.t)
                    ? o.a.unix(Number.parseInt(t.t))
                    : o()(t.t)),
                  (this.nOverrideDateNow = Math.floor(n.unix())),
                  console.log(
                    "CEventCalendarDevFeatures overriding partner event time: " +
                      this.nOverrideDateNow +
                      " " +
                      n.format()
                  )));
            }),
            e
          );
        })())();
      window.g_EventCalendarDevFeatures = l;
    },
    "6Y59": function(e, t, n) {
      "use strict";
      n.d(t, "G", function() {
        return c;
      }),
        n.d(t, "j", function() {
          return l;
        }),
        n.d(t, "u", function() {
          return u;
        }),
        n.d(t, "l", function() {
          return p;
        }),
        n.d(t, "I", function() {
          return m;
        }),
        n.d(t, "P", function() {
          return d;
        }),
        n.d(t, "Q", function() {
          return h;
        }),
        n.d(t, "M", function() {
          return f;
        }),
        n.d(t, "z", function() {
          return v;
        }),
        n.d(t, "N", function() {
          return b;
        }),
        n.d(t, "B", function() {
          return g;
        }),
        n.d(t, "A", function() {
          return _;
        }),
        n.d(t, "e", function() {
          return y;
        }),
        n.d(t, "h", function() {
          return E;
        }),
        n.d(t, "s", function() {
          return O;
        }),
        n.d(t, "J", function() {
          return w;
        }),
        n.d(t, "b", function() {
          return S;
        }),
        n.d(t, "a", function() {
          return C;
        }),
        n.d(t, "g", function() {
          return D;
        }),
        n.d(t, "i", function() {
          return M;
        }),
        n.d(t, "v", function() {
          return x;
        }),
        n.d(t, "x", function() {
          return A;
        }),
        n.d(t, "D", function() {
          return k;
        }),
        n.d(t, "o", function() {
          return j;
        }),
        n.d(t, "w", function() {
          return I;
        }),
        n.d(t, "H", function() {
          return N;
        }),
        n.d(t, "L", function() {
          return R;
        }),
        n.d(t, "E", function() {
          return T;
        }),
        n.d(t, "F", function() {
          return L;
        }),
        n.d(t, "c", function() {
          return B;
        }),
        n.d(t, "y", function() {
          return F;
        }),
        n.d(t, "K", function() {
          return P;
        }),
        n.d(t, "r", function() {
          return G;
        }),
        n.d(t, "m", function() {
          return U;
        }),
        n.d(t, "d", function() {
          return H;
        }),
        n.d(t, "f", function() {
          return W;
        }),
        n.d(t, "k", function() {
          return z;
        }),
        n.d(t, "q", function() {
          return V;
        }),
        n.d(t, "n", function() {
          return Y;
        }),
        n.d(t, "p", function() {
          return K;
        }),
        n.d(t, "t", function() {
          return X;
        }),
        n.d(t, "C", function() {
          return q;
        }),
        n.d(t, "O", function() {
          return J;
        });
      var r = n("mrSG"),
        o = n("q1tI"),
        i = n("2i24"),
        a = n.n(i),
        s = n("exH9");
      n("YyVH"), n("Z7Ow");
      function c() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Settings",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "-305.5 396.5 256 256",
            enableBackground: "new -305.5 396.5 256 256"
          },
          o.createElement("path", {
            d:
              "M-232.755,589.942l3.103,2.408c5.78,4.492,11.973,8.18,18.409,10.959l3.581,1.547l2.276,33.783 c0.089,1.33,1.385,2.54,2.715,2.54h48.62c1.355,0,2.745-1.273,2.852-2.621l2.74-33.284l3.602-1.496 c6.406-2.656,12.646-6.262,18.554-10.707l3.137-2.366l30.578,15.009c1.155,0.571,2.924,0.017,3.563-1.087l24.303-42.1 c0.674-1.173,0.265-3.014-0.852-3.785l-27.872-19.309l0.469-3.832c0.495-4.032,0.725-7.395,0.725-10.57 c0-3.129-0.227-6.5-0.687-10.307l-0.469-3.896l28.699-19.253c1.112-0.741,1.509-2.473,0.84-3.627l-24.3-42.104 c-0.657-1.139-2.502-1.727-3.7-1.155l-31.208,14.748l-3.091-2.341c-5.571-4.224-11.466-7.688-17.522-10.306l-3.58-1.548 l-2.34-34.887c-0.089-1.33-1.381-2.536-2.715-2.536h-48.617c-1.355,0-2.74,1.274-2.851,2.626l-2.834,34.371l-3.593,1.501 c-6.082,2.535-12.028,5.924-17.667,10.071l-3.124,2.302l-31.392-15.413c-1.168-0.575-2.924-0.025-3.559,1.074l-24.309,42.107 c-0.678,1.172-0.264,3.014,0.848,3.781l28.068,19.444l-0.524,3.883c-0.592,4.378-0.865,8.018-0.865,11.462 c0,2.988,0.179,6.065,0.55,9.403l0.431,3.853l-28.528,19.125c-1.108,0.742-1.509,2.468-0.84,3.632l24.308,42.1 c0.656,1.142,2.489,1.726,3.7,1.154L-232.755,589.942z M-177.498,560.051c-19.311,0-35.02-15.709-35.02-35.02 s15.709-35.02,35.02-35.02s35.02,15.709,35.02,35.02S-158.188,560.051-177.498,560.051z"
          })
        );
      }
      function l() {
        return o.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_DownArrowContextMenu",
            "data-name": "Layer 1",
            viewBox: "0 0 128 128",
            x: "0px",
            y: "0px"
          },
          o.createElement("polygon", {
            points:
              "50 59.49 13.21 22.89 4.74 31.39 50 76.41 95.26 31.39 86.79 22.89 50 59.49"
          })
        );
      }
      function u(e) {
        var t = "SVGIcon_Button SVGIcon_MagnifyingGlass";
        return (
          e.className && (t += " " + e.className),
          o.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: t,
              version: "1.1",
              x: "0px",
              y: "0px",
              viewBox: "0 0 100 100"
            },
            o.createElement(
              "g",
              { transform: "translate(0,-952.36218)" },
              o.createElement("path", {
                className: "ColorSelector",
                d:
                  "m 40.99855,964.36216 c -15.9798,0 -28.9986,13.01864 -28.9986,28.99862 0,15.97992 13.0188,28.99862 28.9986,28.99862 6.9189,0 13.2881,-2.4349 18.2803,-6.4997 l 23.5927,23.6239 c 1.1714,1.1714 3.0784,1.1715 4.2498,0 1.1716,-1.1715 1.1716,-3.0783 0,-4.2498 l -23.6239,-23.5926 c 4.0649,-4.9923 6.4997,-11.3615 6.4997,-18.28042 0,-15.97998 -13.0187,-28.99862 -28.9986,-28.99862 z m 0,5.99972 c 12.7374,0 22.9989,10.26145 22.9989,22.9989 0,12.73732 -10.2615,22.99892 -22.9989,22.99892 -12.7374,0 -22.9989,-10.2616 -22.9989,-22.99892 0,-12.73745 10.2615,-22.9989 22.9989,-22.9989 z",
                fill: "#ffffff",
                fillOpacity: "1",
                stroke: "none",
                visibility: "visible",
                display: "inline",
                overflow: "visible"
              })
            )
          )
        );
      }
      function p() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Emoticon",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement("circle", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "12",
            strokeMiterlimit: "10",
            cx: "128",
            cy: "128",
            r: "107.5"
          }),
          o.createElement("path", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "12",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d:
              "M74.484,145.945 c0,0,12.996,37.533,53.514,37.533c38.084,0,53.499-37.533,53.499-37.533"
          }),
          o.createElement("line", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "12",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            x1: "94.5",
            y1: "97.5",
            x2: "94.5",
            y2: "109.5"
          }),
          o.createElement("line", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "12",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            x1: "160.5",
            y1: "97.5",
            x2: "160.5",
            y2: "109.5"
          })
        );
      }
      function m() {
        return o.createElement(
          "svg",
          {
            fill: "#FFFFFF",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Submit",
            version: "1.1",
            x: "0px",
            y: "0px",
            viewBox: "0 0 100 100"
          },
          o.createElement(
            "g",
            { transform: "translate(0,-952.36218)" },
            o.createElement("path", {
              d:
                "m 92.115057,974.14842 a 2.0001999,2.0001999 0 0 0 -1.96764,2.02965 l 0.0376,31.19553 -77.475501,0 16.161909,-15.73013 a 2.0002746,2.0002746 0 1 0 -2.790355,-2.8667 L 6.3913393,1007.9405 a 2.0001999,2.0001999 0 0 0 -0.0011,2.8646 l 19.6896957,19.2036 a 2.0002671,2.0002671 0 1 0 2.792551,-2.8646 l -16.170767,-15.771 79.153048,0 a 2.0001999,2.0001999 0 0 0 1.72959,-0.5437 2.0001999,2.0001999 0 0 0 0.0598,-0.058 2.0001999,2.0001999 0 0 0 0.54259,-1.7218 l -0.0388,-32.87638 a 2.0001999,2.0001999 0 0 0 -2.03297,-2.02522 z",
              fill: "#FFFFFF",
              fillOpacity: "1",
              fillRule: "evenodd",
              stroke: "none",
              visibility: "visible",
              display: "inline",
              overflow: "visible"
            })
          )
        );
      }
      function d(e) {
        return o.createElement(
          "svg",
          Object(r.a)(
            {
              fill: "#FFFFFF",
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_X",
              version: "1.1",
              x: "0px",
              y: "0px",
              viewBox: "-165 95 100 100"
            },
            e
          ),
          o.createElement(
            "g",
            null,
            o.createElement("polygon", {
              points:
                "-74.9,117.2 -102.2,145 -74.9,172.8 -89.1,186.8 -116.2,159.3 -143.2,186.8 -157.5,172.8 -130.2,145 -157.5,117.2 -143.2,103.2 -116.2,130.7 -89.1,103.2"
            })
          )
        );
      }
      function h() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_X_Line",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement("line", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "45",
            strokeMiterlimit: "10",
            x1: "212",
            y1: "212",
            x2: "44",
            y2: "44"
          }),
          o.createElement("line", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "45",
            strokeMiterlimit: "10",
            x1: "44",
            y1: "212",
            x2: "212",
            y2: "44"
          })
        );
      }
      function f(e) {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_VoiceRoom",
            x: "0px",
            y: "0px",
            width: "64px",
            height: "64px",
            viewBox: "0 0 64 64",
            enableBackground: "new 0 0 64 64"
          },
          !e.exitOnly &&
            o.createElement(
              "g",
              null,
              o.createElement("path", {
                className: "Bubble",
                fill: "none",
                strokeMiterlimit: "1",
                strokeWidth: "2.5px",
                d:
                  "M60.1,32.3c0,15.1-12.3,27.3-27.4,27.3 c-5,0-9.7-1.4-13.8-3.7c-1.8-1.1-15,5.4-13.8,3.4c1.7-2.9,5.9-10.3,4.7-12C7,43,5.3,37.8,5.3,32.3C5.3,17.2,17.6,5,32.7,5 C47.8,5,60.1,17.2,60.1,32.3z"
              })
            ),
          !e.exitOnly &&
            o.createElement(
              "g",
              null,
              o.createElement("path", {
                className: "AudioLines",
                opacity: "0",
                strokeWidth: "1px",
                d:
                  "M37.2,51.1c-0.5,0-1-0.1-1.3-0.4c-0.7-0.5-0.7-1.3,0-1.8c6.3-4.4,9.8-10.2,9.8-16.4c0-6.2-3.5-12-9.8-16.4 c-0.7-0.5-0.7-1.3,0-1.8s1.9-0.5,2.6,0c7.1,4.9,10.9,11.4,10.9,18.3c0,6.9-3.9,13.4-10.9,18.3C38.2,51,37.7,51.1,37.2,51.1 M21.4,40.2c0.5,0,0.9-0.1,1.3-0.4c2.8-2,4.3-4.6,4.3-7.3s-1.5-5.4-4.3-7.3c-0.7-0.5-1.9-0.5-2.6,0c-0.7,0.5-0.7,1.3,0,1.8 c2.1,1.5,3.3,3.4,3.3,5.5c0,2.1-1.2,4-3.3,5.5c-0.7,0.5-0.7,1.3,0,1.8C20.4,40.1,20.9,40.2,21.4,40.2 M29.3,45.7 c0.5,0,1-0.1,1.3-0.4c4.9-3.4,7.7-7.9,7.7-12.7c0-4.8-2.7-9.3-7.7-12.7c-0.7-0.5-1.9-0.5-2.6,0c-0.7,0.5-0.7,1.3,0,1.8 c4.2,2.9,6.6,6.8,6.6,10.9c0,4.1-2.3,8-6.6,10.9c-0.7,0.5-0.7,1.3,0,1.8C28.4,45.5,28.8,45.7,29.3,45.7"
              })
            ),
          o.createElement(
            "g",
            { className: "Arrow", opacity: e.exitOnly ? 1 : 0 },
            o.createElement("polyline", {
              fill: "none",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              points: "41,30.7 14.5,30.7 23.5,19.4 "
            }),
            o.createElement("polyline", {
              fill: "none",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              points: "41,30.7 14.5,30.7 23.5,42 "
            })
          ),
          o.createElement(
            "g",
            null,
            o.createElement("polyline", {
              className: "ExitDoor",
              opacity: e.exitOnly ? 1 : 0,
              strokeLinecap: "round",
              strokeMiterlimit: "1",
              strokeWidth: "2px",
              fill: "none",
              points:
                "32.5,22.1 32.5,17.7 47.7,17.7 47.7,43.8 32.5,43.8 32.5,39.5"
            })
          ),
          !e.exitOnly &&
            o.createElement(
              "g",
              { className: "Microphone" },
              o.createElement("path", {
                d:
                  "M40.971,28.593v6.278c0,4.007-4.023,7.284-8.971,7.284c-2.693,0-5.126-0.974-6.765-2.516 c-1.379-1.28-2.207-2.952-2.207-4.769v-6.278l0,0H21.05v6.278c0,0.536,0.064,1.055,0.162,1.573 c0.357,1.752,1.281,3.325,2.627,4.592c1.801,1.702,4.332,2.839,7.17,3.049v4.072H25.3c-0.341,0-0.616,0.438-0.616,0.989 c0,0.552,0.275,0.99,0.616,0.99h5.759h1.882H38.7c0.341,0,0.616-0.438,0.616-0.99c0-0.551-0.275-0.989-0.616-0.989h-5.71v-4.072 c5.58-0.422,9.96-4.396,9.96-9.214v-6.278H40.971z"
              }),
              o.createElement(
                "g",
                null,
                o.createElement("path", {
                  d:
                    "M32,39.841c-3.493,0-6.343-2.344-6.343-5.213v-17.85c0-2.871,2.85-5.213,6.343-5.213s6.343,2.342,6.343,5.213v17.85,C38.343,37.497,35.493,39.841,32,39.841z"
                })
              )
            )
        );
      }
      function v() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_5",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Paperclip",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement("path", {
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d:
              "M167.768,62.647 l-0.012,123.052c0,24.729-19.334,44.856-43.096,44.866c-23.765-0.006-43.099-20.134-43.096-44.872L81.557,48.851 c0-15.345,14.483-27.827,29.83-27.83c15.342,0.003,27.827,12.488,27.833,27.833l-0.002,139.245 c0.003,6.376-8.546,12.925-14.925,12.925c0,0-13.929-0.166-13.929-12.928l0.003-124.839"
          })
        );
      }
      function b(e) {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Volume",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "255.999px",
            viewBox: "0 0 256 255.999"
          },
          o.createElement(
            "g",
            { className: "Speaker" },
            o.createElement("path", {
              d:
                "M93.785,52.265c-0.946,0-2.357,0.63-3.304,1.577L40.284,98.022c-0.947,0.789-2.831,1.578-4.093,1.578H9.367 C8.104,99.6,7,100.706,7,101.967v52.069c0,1.264,1.104,2.367,2.367,2.367H36.19c1.262,0,3.146,0.632,4.093,1.578l50.197,44.181 c0.947,0.789,2.516,1.578,3.304,1.578s1.578-1.104,1.578-2.367V54.631C95.363,53.369,94.731,52.265,93.785,52.265z"
            })
          ),
          !e.muted &&
            o.createElement(
              "g",
              { className: "SoundWaves" },
              o.createElement("path", {
                className: "SoundWavesHighest",
                d:
                  "M193.826,30.402c24.959,24.958,40.349,59.403,40.349,97.604c0,38.199-15.388,72.645-40.349,97.603l9.916,9.916 c28.067-28.067,44.263-64.673,44.263-107.521c0-42.847-16.196-79.455-44.263-107.521"
              }),
              o.createElement("path", {
                className: "SoundWavesHigh",
                d:
                  "M175.737,47.628l-8.924,8.924c18.271,18.27,29.536,43.484,29.536,71.448s-11.264,53.178-29.536,71.448l8.924,8.924 c20.546-20.546,33.234-49.008,33.234-80.374c0-31.366-12.688-59.829-33.234-80.374V47.628z"
              }),
              o.createElement("path", {
                className: "SoundWavesMed",
                d:
                  "M148.913,74.454l-8.925,8.925c11.488,11.488,18.491,27.236,18.491,44.624c0,17.388-7.054,33.281-18.491,44.575l8.875,8.975 c13.811-13.635,22.239-32.753,22.239-53.55c0-20.797-8.432-39.793-22.189-53.55V74.454z"
              }),
              o.createElement("path", {
                className: "SoundWavesLow",
                d:
                  "M121.989,101.229l-8.778,9.073c4.641,4.516,7.397,10.706,7.397,17.702c0,6.995-2.755,13.186-7.397,17.702l8.778,9.073 c7.035-6.844,11.243-16.413,11.243-26.775C133.232,117.643,129.024,108.075,121.989,101.229z"
              })
            ),
          o.createElement(
            "g",
            { className: "SoundX" },
            o.createElement("line", {
              fill: "none",
              strokeWidth: e.muted ? 10 : 0,
              stroke: "#fff",
              strokeMiterlimit: "10",
              x1: "137",
              y1: "170.667",
              x2: "223.167",
              y2: "84.5"
            }),
            o.createElement("line", {
              fill: "none",
              strokeWidth: e.muted ? 10 : 0,
              stroke: "#fff",
              strokeMiterlimit: "10",
              x1: "137",
              y1: "84.5",
              x2: "223.167",
              y2: "170.667"
            })
          )
        );
      }
      function g() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Play",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement("path", {
            className: "playTriangle",
            d:
              "M65.321,33.521c-11.274-6.615-20.342-1.471-20.342,11.52V210.96c0,12.989,9.068,18.135,20.342,11.521l137.244-82.348 c11.274-6.618,11.274-17.646,0-24.509L65.321,33.521z"
          })
        );
      }
      function _() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Pause",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement("path", {
            d:
              "M44.979,219.364c0,3.3,2.7,6,6,6h49.753c3.3,0,6-2.7,6-6V36.5c0-3.3-2.7-6-6-6H50.979c-3.3,0-6,2.7-6,6V219.364z"
          }),
          o.createElement("path", {
            d:
              "M149.267,219.364c0,3.3,2.7,6,6,6h49.753c3.3,0,6-2.7,6-6V36.5c0-3.3-2.7-6-6-6h-49.753c-3.3,0-6,2.7-6,6V219.364z"
          })
        );
      }
      function y() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Check",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement("polyline", {
            fill: "none",
            stroke: "#fff",
            strokeWidth: "24",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "49.5,147.75 95,210.75 206.5,45.25 "
          })
        );
      }
      function E(e) {
        var t = e.highlightColor || "#00ccff",
          n = e.color || "#2d73ff";
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_DialogCheck",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement(
            "defs",
            null,
            o.createElement(
              "linearGradient",
              { id: "linear", x1: "0%", y1: "0%", x2: "100%", y2: "100%" },
              o.createElement("stop", {
                id: "stop0",
                offset: "0%",
                stopColor: t
              }),
              o.createElement("stop", {
                id: "stop1",
                offset: "100%",
                stopColor: n
              })
            ),
            o.createElement(
              "filter",
              { id: "f1", x: "0", y: "0", width: "200%", height: "200%" },
              o.createElement("feOffset", {
                result: "offOut",
                in: "SourceAlpha",
                dx: "20",
                dy: "20"
              }),
              o.createElement("feGaussianBlur", {
                result: "blurOut",
                in: "offOut",
                stdDeviation: "10"
              }),
              o.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "blurOut",
                mode: "normal"
              })
            )
          ),
          o.createElement("path", {
            fill: "none",
            stroke: "url(#linear)",
            strokeWidth: "24",
            strokeLinecap: "round",
            strokeLinejoin: "miter",
            strokeMiterlimit: "10",
            d: "M206.5,45.25L95,210.75l-45.5-63",
            strokeDasharray: "365.19 365.19",
            strokeDashoffset: "0.00"
          }),
          o.createElement("path", {
            fill: "none",
            opacity: ".2",
            filter: "url(#f1)",
            stroke: "url(#linear)",
            strokeWidth: "24",
            strokeLinecap: "round",
            strokeLinejoin: "miter",
            strokeMiterlimit: "10",
            d: "M206.5,45.25L95,210.75l-45.5-63",
            strokeDasharray: "365.19 365.19",
            strokeDashoffset: "0.00"
          })
        );
      }
      function O() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Lock",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement("path", {
            className: "topLock",
            d:
              "M203.553,197.794c0,21.929-17.778,39.706-39.706,39.706H92.154c-21.929,0-39.706-17.777-39.706-39.706v-71.693 c0-21.928,17.778-39.706,39.706-39.706h71.692c21.928,0,39.706,17.778,39.706,39.706V197.794z M128.001,129.664 c-8.941,0-16.19,7.248-16.19,16.189c0,5.589,2.833,10.518,7.137,13.427c2.066,1.395,0.318,23.508,0.318,32.842 c0,2.292-0.078,3.65,8.734,3.65c8.676,0,8.75-1.221,8.75-3.654c0-9.348-1.708-31.469,0.368-32.886 c4.269-2.916,7.071-7.821,7.071-13.38C144.191,136.912,136.941,129.664,128.001,129.664z"
          }),
          o.createElement("path", {
            className: "baseLock",
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "22",
            strokeMiterlimit: "10",
            d:
              "M84.813,172.74V73.688l0,0 c0-23.85,19.335-43.188,43.187-43.188l0,0c23.852,0,43.188,19.337,43.188,43.188l0,0v23.885"
          })
        );
      }
      function w(e) {
        var t = "SVGIcon_Button SVGIcon_Throbber ";
        return (
          e.className && (t += e.className),
          o.createElement(
            "svg",
            {
              version: "1.1",
              id: "base",
              xmlns: "http://www.w3.org/2000/svg",
              className: t,
              x: "0px",
              y: "0px",
              width: "256px",
              height: "256px",
              viewBox: "0 0 256 256"
            },
            o.createElement(
              "g",
              { className: a.a.partCircle },
              o.createElement("path", {
                className: a.a.roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895"
              }),
              o.createElement("path", {
                className: a.a.roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M201.432,101.166"
              }),
              o.createElement("path", {
                className: a.a.roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754"
              })
            ),
            o.createElement(
              "g",
              { className: a.a.mainOutline },
              o.createElement("path", {
                className: a.a.roundFill,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              o.createElement("path", {
                className: a.a.roundOuterOutline,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              o.createElement("path", {
                className: a.a.roundThrobber01,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              o.createElement("path", {
                className: a.a.roundThrobber02,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              o.createElement("path", {
                className: a.a.roundThrobber03,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              o.createElement("path", {
                className: a.a.roundThrobber04,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              o.createElement("path", {
                className: a.a.roundThrobber05,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              o.createElement("path", {
                className: a.a.roundThrobber06,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              o.createElement("path", {
                className: a.a.roundThrobber07,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              o.createElement("path", {
                className: a.a.roundThrobber08,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              o.createElement("path", {
                className: a.a.roundThrobber09,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              o.createElement("path", {
                className: a.a.roundThrobber10,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              o.createElement("path", {
                className: a.a.roundThrobber11,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              o.createElement("path", {
                className: a.a.roundThrobber12,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              o.createElement("path", {
                className: a.a.roundThrobber13,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              o.createElement("path", {
                className: a.a.roundThrobber14,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              o.createElement("path", {
                className: a.a.roundThrobber15,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              })
            ),
            o.createElement(
              "g",
              { className: a.a.bottomCircle },
              o.createElement("path", {
                fill: "#ffffff",
                d:
                  "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579"
              })
            ),
            o.createElement(
              "g",
              { className: a.a.topCircle },
              o.createElement("circle", {
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                cx: "161.731",
                cy: "101.274",
                r: "23.019"
              })
            )
          )
        );
      }
      function S() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Bell",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement("path", {
            d:
              "M107.785,33.965c-34.875,8.972-60.644,40.618-60.644,78.308v53.903c0,4.965-4.035,8.99-8.975,8.99 c-9.929,0-17.978,8.066-17.978,17.971c0,9.924,8.059,17.969,18.013,17.969h179.598c9.948,0,18.014-8.066,18.014-17.969 c0-9.926-8.087-17.971-17.979-17.971c-4.956,0-8.975-3.993-8.975-8.99v-53.903c0-37.676-25.763-69.333-60.644-78.308v-9.281 c0-11.193-9.052-20.219-20.215-20.219c-11.143,0-20.215,9.052-20.215,20.219V33.965L107.785,33.965z M96.554,220.09h62.891 c0,17.366-14.079,31.445-31.445,31.445C110.633,251.535,96.554,237.458,96.554,220.09z"
          })
        );
      }
      function C(e) {
        return o.createElement(
          "svg",
          {
            style: { transform: "rotate(" + e.angle + "deg)" },
            version: "1.1",
            id: "arrowBase",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Arrow",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement("polyline", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "128,247.688 128,8.313 181.061,61.674 "
          }),
          o.createElement("polyline", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "128,247.688 128,8.313 74.939,61.674 "
          })
        );
      }
      function D() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            width: "50px",
            height: "100px",
            viewBox: "0 0 50 100"
          },
          o.createElement("polygon", {
            fill: "#ffffff",
            points:
              "0,0.093 0,25.702 24.323,50.026 0,74.349 0,99.955 49.929,50.026 "
          })
        );
      }
      function M(e) {
        return o.createElement(
          "svg",
          {
            style: { transform: "rotate(" + e.angle + "deg)" },
            version: "1.1",
            id: "arrowBase",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_DoubleArrow",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement("polyline", {
            className: "Arrow1",
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "23",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            points: "135.65,21.667 30.081,127.235 137.18,234.333 "
          }),
          !e.singlearrow &&
            o.createElement("polyline", {
              className: "Arrow2",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "23",
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              points: "224.389,21.667 118.821,127.235 225.92,234.333 "
            })
        );
      }
      function x() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Maximize",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement("rect", {
            x: "24",
            y: "42.167",
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "18",
            strokeMiterlimit: "10",
            width: "208",
            height: "171.667"
          }),
          o.createElement("line", {
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "42",
            strokeMiterlimit: "10",
            x1: "24",
            y1: "54.01",
            x2: "232",
            y2: "54.01"
          })
        );
      }
      function A() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Minimize",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement("line", {
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "18",
            strokeMiterlimit: "10",
            x1: "24",
            y1: "209.01",
            x2: "232",
            y2: "209.01"
          })
        );
      }
      function k() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Restore",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement("polyline", {
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "12",
            strokeMiterlimit: "10",
            points: "83,90.861 83,42.167 232,42.167 232,165.14 173,165.14 "
          }),
          o.createElement("rect", {
            x: "24",
            y: "90.861",
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "18",
            strokeMiterlimit: "10",
            width: "149",
            height: "122.973"
          })
        );
      }
      function j(e) {
        return o.createElement(
          "svg",
          {
            style: { transform: "rotate(" + e.angle + "deg)" },
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_FlatArrow",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement("polygon", {
            points: "13.913,141 128,59 242.087,141 ",
            fill: "#ffffff"
          })
        );
      }
      function I(e) {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            style: {
              transform: "scaleX(" + (e.bFlipHorizontal ? -1 : 1) + ")"
            },
            className: "SVGIcon_Button SVGIcon_MediaControls",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement("path", {
            className: "Arrow",
            d:
              "M77.003,54.763h32.784c3.794,0,9.113,2.181,11.814,4.848l63.604,62.773c2.703,2.667,2.727,7.054,0.05,9.748 l-63.705,64.206c-2.674,2.693-7.968,4.898-11.763,4.898H77.003"
          }),
          o.createElement("polyline", {
            className: "preArrowBox",
            opacity: e.bHidePreArrow ? "0" : "1",
            points: "6.833,54.763 46.71,54.763 46.71,201.236 6.833,201.236 \t"
          }),
          o.createElement("polyline", {
            className: "jumpAheadBox",
            opacity: e.bShowJumpAheadBox ? "1" : "0",
            points: "6.833,54.764 86.386,54.764 86.386,201.236 6.833,201.236 \t"
          }),
          o.createElement("polyline", {
            className: "postArrowBox",
            opacity: e.bHidePostArrow ? "0" : "1",
            points:
              "209.29,54.763 249.167,54.763 249.167,201.236 209.29,201.236 \t"
          })
        );
      }
      function N(e) {
        var t = Object(s.a)(
          "SVGIcon_Button",
          "SVGIcon_SteamLogo",
          e && e.className
        );
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            x: "0px",
            y: "0px",
            viewBox: "0 0 256 256"
          },
          o.createElement("path", {
            fill: "#ffffff",
            d:
              "M127.374,5.355c-64.404,0-117.167,49.661-122.18,112.77l65.712,27.171 c5.567-3.808,12.293-6.032,19.53-6.032c0.649,0,1.294,0.017,1.934,0.051l29.226-42.354c0-0.202-0.005-0.399-0.005-0.598 c0-25.496,20.74-46.241,46.237-46.241c25.498,0,46.238,20.745,46.238,46.241c0,25.494-20.74,46.242-46.238,46.242 c-0.352,0-0.698-0.011-1.047-0.021l-41.68,29.741c0.022,0.546,0.041,1.095,0.041,1.644c0,19.141-15.569,34.707-34.706,34.707 c-16.796,0-30.843-11.99-34.026-27.869l-46.993-19.43c14.55,51.464,61.831,89.189,117.957,89.189 c67.713,0,122.604-54.893,122.604-122.604C249.979,60.244,195.086,5.355,127.374,5.355"
          }),
          o.createElement("path", {
            fill: "#ffffff",
            d:
              "M82.026,191.387l-15.061-6.22c2.67,5.56,7.285,10.208,13.418,12.767 c13.25,5.521,28.531-0.771,34.054-14.027c2.674-6.416,2.694-13.5,0.04-19.93c-2.646-6.431-7.64-11.451-14.063-14.129 c-6.371-2.647-13.196-2.552-19.198-0.291l15.561,6.437c9.776,4.073,14.396,15.299,10.324,25.071 C103.031,190.841,91.801,195.464,82.026,191.387"
          }),
          o.createElement("path", {
            fill: "#ffffff",
            d:
              "M198.639,96.359c0-16.987-13.82-30.809-30.809-30.809c-16.987,0-30.813,13.821-30.813,30.809 c0,16.988,13.824,30.806,30.813,30.806S198.639,113.347,198.639,96.359 M144.736,96.306c0-12.783,10.363-23.142,23.145-23.142 c12.783,0,23.145,10.359,23.145,23.142c0,12.783-10.36,23.142-23.145,23.142C155.1,119.447,144.736,109.089,144.736,96.306"
          })
        );
      }
      function R() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Viewers",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement("path", {
            className: "frontGuy",
            fill: "#666666",
            d:
              "M181.732,53.151c-17.255,0-31.321,13.316-31.321,32.634v25.132 c0,18.005,24.006,21.006,24.382,21.381c-10.691,2.813-30.947,8.252-40.888,15.566c-8.252,6.003-11.44,18.005-13.128,22.882 c-0.75,2.063-1.688,5.064-1.688,7.127c0,0,0,9.94,0,19.881s12.941,16.505,18.005,16.505h89.65c4.877,0,18.006-5.627,18.006-16.505 s0-19.881,0-19.881c0-2.251-0.938-5.627-1.688-7.689c-4.313-10.878-4.688-16.316-13.315-22.319 c-9.941-6.939-30.009-12.19-40.512-15.004c0.374-0.563,24.193-4.127,24.193-22.131V85.785 C213.053,66.467,198.986,53.151,181.732,53.151L181.732,53.151z"
          }),
          o.createElement("path", {
            className: "backGuy",
            fill: "rgb(144, 153, 161)",
            d:
              "M84.204,34.396c-20.068,0-36.385,15.38-36.385,38.074v29.258c0,20.818,27.945,24.382,28.32,24.944 c-12.378,3.189-36.01,9.565-47.638,18.006c-9.753,7.127-13.504,21.006-15.379,26.632c-0.75,2.251-1.876,6.002-1.876,8.253  c0,0,0,11.44,0,23.257c0,11.815,15.004,19.13,20.819,19.13h104.279c5.814,0,20.818-6.564,20.818-19.13c0-12.566,0-23.257,0-23.257 c0-2.438-1.125-6.564-2.063-8.815c-5.063-12.566-5.438-18.942-15.566-26.069c-11.628-8.065-34.885-14.067-47.076-17.443 c0.375-0.563,28.133-4.876,28.133-25.695V72.469C120.59,49.775,104.272,34.396,84.204,34.396L84.204,34.396z"
          })
        );
      }
      function T() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_STVTimelineGrabber",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement(
            "g",
            { className: "leftarrow", opacity: "0" },
            o.createElement("polygon", {
              points: "127.817,4.403 4,128 127.817,251.598"
            })
          ),
          o.createElement(
            "g",
            { className: "rightarrow", opacity: "0" },
            o.createElement("polygon", {
              points: "127.816,4.403 251.633,128 127.816,251.598"
            })
          ),
          o.createElement(
            "g",
            { className: "grabber" },
            o.createElement("polygon", {
              points:
                "145.692,22.132 145.692,234.361 127.817,251.598 110.307,234.361 110.307,22.132 127.817,4.403"
            })
          )
        );
      }
      function L() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_STVTimelineMarker",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement("polygon", {
            className: "pointer",
            points:
              "128,154.979 46.374,230.548 46.374,253.333 209.626,253.333 209.626,230.548 \t"
          }),
          o.createElement("rect", {
            className: "line",
            x: "116.271",
            y: "3.168",
            width: "23.459",
            height: "137.332"
          })
        );
      }
      function B() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_BigPicture",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement("path", {
            fill: "#ffffff",
            d:
              "M213.771,68.659c-4.108-7.066-46.007-7.231-49.293-7.231H128H91.522c-3.286,0-45.186,0.165-49.293,7.231 c-19.555,29.248-27.385,100.263-27.276,104.01c0.238,8.294,2.11,24.583,16.595,35.162c9.201,6.72,22.183,8.709,29.083,3.614 c4.989-3.682,11.995-19.224,19.061-32.204c7.064-12.981,9.202-11.174,12.98-12.159c3.78-0.986,36.066-0.74,36.066-0.74 s30.809-0.247,34.588,0.74c3.777,0.985,5.915-0.822,12.98,12.159c7.064,12.98,14.07,28.522,19.061,32.204 c6.9,5.095,19.882,3.106,29.083-3.614c14.485-10.58,16.356-26.868,16.595-35.162C241.154,168.922,233.325,97.906,213.771,68.659z M67.251,128.14c-14.974,0-27.112-12.137-27.112-27.111c0-14.975,12.137-27.112,27.112-27.112 c14.973,0,27.111,12.137,27.111,27.112C94.362,116.003,82.224,128.14,67.251,128.14z M188.749,128.14 c-14.974,0-27.111-12.137-27.111-27.111c0-14.975,12.138-27.112,27.111-27.112c14.973,0,27.111,12.137,27.111,27.112 C215.86,116.003,203.722,128.14,188.749,128.14z"
          })
        );
      }
      function F() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_MobilePhone",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement("path", {
            d:
              "M165.693,45.186H91.368c-7.963,0-14.41,6.447-14.41,14.41V210.9c0,7.964,6.447,14.41,14.41,14.41h74.134 c7.965,0,14.41-6.447,14.41-14.41V59.596C180.102,51.633,173.657,45.186,165.693,45.186z M113.172,57.509h30.717 c1.707,0,3.223,1.327,3.223,3.224c0,1.896-1.328,3.223-3.223,3.223h-30.717c-1.707,0-3.223-1.328-3.223-3.223 C109.949,58.837,111.465,57.509,113.172,57.509z M128.529,213.554c-4.551,0-8.152-3.603-8.152-8.153c0-4.55,3.604-8.152,8.152-8.152 s8.151,3.603,8.151,8.152C136.682,209.761,133.081,213.554,128.529,213.554z M169.105,186.819h-81.15V74.384h81.15V186.819 L169.105,186.819z"
          })
        );
      }
      function P() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_VR",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement("path", {
            d:
              "M224.389,62.411H31.613c-10.147,0-18.36,8.214-18.36,18.36v94.453c0,10.147,8.215,18.359,18.36,18.359h192.775 c10.146,0.241,18.358-7.968,18.358-18.116V80.771C242.747,70.625,234.534,62.411,224.389,62.411z M92.317,175.026H71.646 L35.472,79.832h21.895l25.022,72.484l24.343-72.484h21.895L92.317,175.026z M195.264,175.026l-19.175-32.095h-2.176h-14.279 v32.095h-19.991V79.832h35.63c13.056,0,22.664,2.607,28.831,7.819c6.164,5.215,9.247,12.49,9.247,21.827 c0,7.343-1.61,13.463-4.828,18.359c-3.219,4.896-7.729,8.614-13.531,11.151l22.575,36.038H195.264z"
          }),
          o.createElement("path", {
            d:
              "M187.784,100.298c-2.812-2.312-7.391-3.468-13.735-3.468h-14.415v28.966h15.639c5.257,0,9.36-1.336,12.308-4.012 c2.945-2.673,4.42-6.368,4.42-11.083C192,106.078,190.593,102.61,187.784,100.298z"
          })
        );
      }
      function G() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_LargeMobilePhone",
            x: "0px",
            y: "0px",
            width: "128px",
            height: "255px",
            viewBox: "0 0 128 255"
          },
          o.createElement("rect", {
            className: "screen",
            x: "7.756",
            y: "5.518",
            fill: "#292D33",
            width: "112.144",
            height: "234.357"
          }),
          o.createElement("path", {
            className: "frame",
            fill: "#3C414B",
            d:
              "M40.334,15.72h47.237c3.957,0,7.164-3.259,7.164-7.28c0-1.113,0.889-2.017,1.984-2.017h9.746 c7.417,0,13.432,6.108,13.432,13.646v206.156c0,7.538-6.015,13.647-13.431,13.647H21.459c-7.417,0-13.429-6.109-13.429-13.647 V20.071c0-7.536,6.013-13.646,13.429-13.646h9.728c1.096,0,1.983,0.903,1.983,2.017C33.17,12.461,36.377,15.72,40.334,15.72 M107.057,0.001H20.87c-9.922,0-17.965,8.174-17.965,18.256v217.505c0,10.082,8.043,18.256,17.965,18.256h86.188 c9.923,0,17.966-8.174,17.966-18.256V18.257C125.022,8.175,116.979,0.001,107.057,0.001"
          }),
          o.createElement("path", {
            fill: "#3C414B",
            d:
              "M0.826,33.349C0.369,33.349,0,33.725,0,34.189v7.616c0,0.464,0.37,0.84,0.826,0.84s0.827-0.376,0.827-0.84 v-7.617C1.653,33.725,1.283,33.349,0.826,33.349"
          }),
          o.createElement("path", {
            fill: "#3C414B",
            d:
              "M0.826,51.56C0.369,51.56,0,51.936,0,52.4v16.8c0,0.465,0.37,0.841,0.826,0.841s0.827-0.376,0.827-0.841 V52.4C1.653,51.936,1.283,51.56,0.826,51.56"
          }),
          o.createElement("path", {
            fill: "#3C414B",
            d:
              "M0.826,75.304C0.369,75.304,0,75.68,0,76.144v15.904c0,0.464,0.37,0.84,0.826,0.84s0.827-0.376,0.827-0.84 V76.144C1.653,75.68,1.283,75.304,0.826,75.304"
          }),
          o.createElement("path", {
            fill: "#3C414B",
            d:
              "M127.617,58.056c-0.457,0-0.827,0.376-0.827,0.84v27.328c0,0.464,0.37,0.84,0.827,0.84 c0.456,0,0.826-0.376,0.826-0.84V58.896C128.443,58.432,128.073,58.056,127.617,58.056"
          })
        );
      }
      function U() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Envelope",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement("polygon", {
            fill: "#3C414B",
            points: "3.167,48.809 127.22,128 252.833,48.809 "
          }),
          o.createElement("polygon", {
            fill: "#3C414B",
            points: "252.833,203.68 252.833,55.439 185.151,99.131 "
          }),
          o.createElement("polygon", {
            fill: "#3C414B",
            points:
              "247.958,207.191 180.47,101.472 128.001,134.24 75.142,101.472 7.849,207.191 "
          }),
          o.createElement("polygon", {
            fill: "#3C414B",
            points: "3.167,203.682 3.167,55.441 70.851,99.132 "
          })
        );
      }
      function H() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_CSGO",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M236.979,138.059c0.548,0.078,6.91,0.101,7.772,0.032 c1.215-0.095,1.396,0.068,1.388,0.708c-0.01,0.397,0.012,3.039-2.365,7.32c-3.301,5.948-12.079,10.436-12.55,10.672 c-0.47,0.233-0.53,0.484-0.136,0.75c0.434,0.295,8.068,1.454,9.084,1.611c1.017,0.154,0.637,1.001,0.637,1.001 s-0.704,2.621-2.895,5.36c-2.189,2.738-9.311,6.123-8.583,6.123c0.731,0,7.187,0.159,6.181,1.422 c-3.019,3.786-13.603,9.528-18.43,13.813c-13.388,11.885-13.217,12.864-15.52,15.09c-0.983-3.298-3.02-12.658-3.02-12.658 l-6.105-11.467c4.413,0.18,6.364,0.081,8.952,0.081c9.214,0,17.525-2.185,22.234-5.841l2.371-1.843l-2.911-0.728 c-2.131-0.528-7.121-1.782-11.896-2.979c2.184-0.104,10.803-1.299,14.413-5.339c0.136-0.151,0.276-0.321,0.406-0.494l1.245-1.664 l-2.404-0.735c-2.607-0.799-5.948-1.682-8.517-2.335c3.173-1.572,7.585-3.942,10.048-6.088c4.83-4.203,7.226-9.709,7.322-9.943 l0.9-2.098l-10.772,0.318c1.503-1.483,3.218-3.197,3.939-3.991c1.43-1.571,4.053-6.221,4.198-9.896l0.072-1.787l-1.763,0.288 c-1.979,0.322-5.301,1.279-8.179,2.173c2.025-2.193,4.296-4.767,5.46-6.484c2.687-3.964,2.76-8.371,2.597-12.916l-0.104-2.881 l-2.261,1.79c-2.559,2.028-7.595,5.031-11.097,7.047c1.538-3.644,3.54-8.752,3.813-11.276c0.5-4.681-0.248-10.196-0.248-10.196 l-10.76,9.394c0.885-1.953,1.684-4.013,2.117-5.832c1.735-7.29,0.055-17.892-0.021-18.338l-0.452-2.807l-7.777,7.739 c0.722-3.535,1.465-8.253,1.23-11.789c-0.426-6.321-2.278-10.517-2.359-10.694l-1.01-2.251l-6.465,8.577 c0.231-4.285,0.27-10.24-0.948-13.547c-1.934-5.262-3.651-8.007-3.723-8.121l-1.232-1.958l-3.057,4.85 c0.018-2.967-0.11-6.475-0.69-8.68c-1.202-4.543-2.825-6.396-3.002-6.592l-1.325-1.433l-1.623,2.705 c-0.278-3.19-1.112-7.084-3.343-9.478l-0.814-0.872l-1.012,0.623c-0.327,0.201-0.714,0.497-1.104,0.823 c-0.154-1.135-0.365-2.451-0.639-3.691c0.563-4.733,1.186-10.03,1.206-10.452c0.027-0.547,0.274-0.767,1.017-0.391 c0.898,0.452,3.156,2.064,5.187,6.133c2.036,4.067,3.132,11.324,3.117,12.044c-0.009,0.383,0.291,0.757,0.438,0.151 c0.145-0.607,0.478-7.591,0.623-8.312c0.081-0.383,0.199-0.484,0.737-0.212c0.496,0.249,2.959,2.181,4.899,6.463 c1.179,2.599,1.634,11.946,1.574,12.653c-0.106,1.278,0.313,0.891,0.339,0.883c-0.009,0.013-0.025,0.04-0.03,0.049 c0.03-0.041,0.036-0.049,0.03-0.049c0.573-0.841,4.21-8.99,4.519-9.377c0.313-0.39,0.521-0.395,0.835,0.002 c0.262,0.33,2.095,1.717,4.049,10.088c1.902,8.135,1.949,11.542,1.848,12.682c-0.08,0.86,0.339,0.993,0.731,0.524 c0.389-0.47,5.104-9.201,5.497-9.515c0.389-0.313,0.613-0.309,0.927,0.161c0.312,0.469,2.718,4.762,3.684,11.448 c0.861,5.947,0.608,13.599,0.375,14.381c-0.235,0.782-0.135,1.077,0.493,0.53c0.623-0.548,10.299-8.412,11.004-9.038 c0.703-0.627,1.18-0.65,1.34-0.046c0.172,0.654,0.822,8.654,0.275,15.225c-0.549,6.571-2.626,12.752-2.94,13.145 c-0.312,0.391,0.087,0.712,0.478,0.555c0.394-0.157,11.902-10.018,12.645-10.402c0.711-0.367,1.043,0.005,1.105,0.507 c0.068,0.544,0.966,3.098-0.419,11.269c-0.959,5.65-3.54,11.876-3.855,12.033c-0.313,0.157-0.077,0.336,0.234,0.259 c0.315-0.079,8.324-3.488,8.872-3.567c0.546-0.079,0.671,0.339,0.514,0.808c-0.158,0.469-0.458,6.273-2.534,11.639 c-2.603,6.732-6.056,11.001-6.056,11.001s-0.252,0.519,0.217,0.519s9.266-0.186,9.813-0.263c0.547-0.079,0.627,0.156,0.547,0.704 c-0.077,0.547,0.858,9.116-8.624,14.601C236.524,137.734,236.432,137.979,236.979,138.059z M174.473,24.823 c1.981,3.34,2.018,9.248,1.836,11.469l-0.52,6.238l5.25-8.744c0.395,0.843,0.85,2.003,1.25,3.524 c1.02,3.877,0.422,13.082,0.417,13.173l-0.384,5.752l6.435-10.212c0.628,1.27,1.45,3.097,2.32,5.459 c1.466,3.983,0.772,13.806,0.381,17.257l-0.602,5.308l9.568-12.69c0.493,1.707,1.058,4.21,1.259,7.227 c0.39,5.821-2.272,15.731-2.299,15.83l-1.428,5.26l11.125-11.068c0.377,3.586,0.772,9.774-0.304,14.302 c-1.2,5.057-5.778,12.588-5.823,12.664l-1.806,3.992l16.878-14.09c-0.116,1.366-0.262,2.944-0.423,4.435 c-0.312,2.935-3.954,11.389-5.335,14.399l-1.827,4.002l3.856-2.115c0.381-0.208,8.027-4.41,12.979-7.778 c-0.039,3.484-0.537,6.042-2.139,8.4c-2.189,3.234-9.05,10.198-9.118,10.268l-4.352,4.408l5.861-2.004 c0.08-0.025,6.868-2.34,11.188-3.41c-0.675,2.445-2.208,5.125-3.11,6.118c-1.319,1.449-6.429,6.429-6.48,6.482l-2.682,2.614 l13.475-0.404c-1.06,1.837-2.89,4.549-5.457,6.783c-3.727,3.244-12.956,7.341-13.048,7.383l-3.952,1.746l4.201,1.008 c0.062,0.015,5.637,1.354,10.266,2.67c-3.412,2.191-9.291,3.081-10.948,3.138c-2.06,0.072-11.075,0.125-11.075,0.125l-11.51,0.069 l11.162,2.804c0,0,12.587,3.164,19.486,4.894c-4.398,2.216-10.717,3.493-17.657,3.493c-3.102,0-10.335-0.284-15.048-0.483 c4.064,6.069,7.041,11.004,7.992,13.681c2.813,7.915,6.777,28.269,6.889,48.907c0.039,6.572-1.081,11.649-9.022,11.649 c-0.288,0-0.597-0.038-0.908-0.092c-1.846,0.339-4.351,0.595-5.438-0.095c-1.805-1.149-3.163-2.627-3.544-3.957 c-0.383-1.334-1.146-9.374-3.106-20.675c-1.92-11.046-4.038-19.431-4.237-19.525c-1.535-0.731-9.358-18.45-9.358-18.45 l-37.23-47.615c0,0-20.737,23.917-37.455,47.8c-0.867,1.235-5.994,11.251-9.275,17.989c-0.212,0.437-0.181,0.475-0.281,0.808 c-0.604,2.015-2.396,9.525-4.039,18.994c-1.962,11.301-2.725,19.341-3.105,20.675c-0.384,1.33-1.74,2.808-3.546,3.957 c-1.085,0.689-3.592,0.434-5.437,0.095c-0.313,0.054-0.621,0.092-0.909,0.092c-7.941,0-9.061-5.077-9.024-11.649 c0.114-20.639,4.078-40.992,6.892-48.907c0.95-2.677,3.926-7.611,7.993-13.681c-4.714,0.199-11.946,0.483-15.051,0.483 c-6.939,0-13.26-1.277-17.653-3.493c6.896-1.729,19.486-4.894,19.486-4.894l11.159-2.804l-11.508-0.069 c0,0-9.019-0.053-11.076-0.125c-1.66-0.057-7.537-0.946-10.949-3.138c4.629-1.315,10.202-2.655,10.264-2.67l4.201-1.008l-3.95-1.746 c-0.094-0.042-9.324-4.139-13.049-7.383c-2.566-2.234-4.397-4.946-5.458-6.783l13.477,0.404l-2.684-2.614 c-0.05-0.054-5.16-5.033-6.48-6.482c-0.9-0.993-2.436-3.673-3.108-6.118c4.319,1.069,11.108,3.384,11.188,3.41l5.861,2.004 l-4.352-4.408c-0.069-0.069-6.928-7.033-9.12-10.268c-1.601-2.358-2.099-4.916-2.139-8.4c4.953,3.368,12.601,7.57,12.98,7.778 l3.858,2.115l-1.829-4.002c-1.379-3.011-5.022-11.465-5.334-14.399c-0.161-1.491-0.305-3.068-0.421-4.435l16.877,14.09l-1.806-3.992 c-0.046-0.076-4.622-7.607-5.821-12.664c-1.078-4.528-0.682-10.716-0.307-14.302L58.57,89.672l-1.426-5.26 c-0.025-0.098-2.688-10.008-2.3-15.83c0.203-3.017,0.767-5.52,1.26-7.227l9.566,12.69l-0.601-5.308 c-0.391-3.451-1.083-13.274,0.381-17.257c0.871-2.362,1.693-4.189,2.32-5.459l6.435,10.212l-0.382-5.752 c-0.006-0.091-0.604-9.295,0.416-13.173c0.401-1.521,0.854-2.681,1.251-3.524l5.249,8.744l-0.52-6.238 c-0.181-2.221-0.144-8.129,1.836-11.469c0.596,0.522,1.248,1.148,1.67,1.575l2.215,2.245l0.276-3.142 c0.162-1.838,0.783-7.003,1.703-8.813c1.342-2.635,4.69-3.91,7.104-4.505c-6.691,13.614-36.889,77.59-36.889,122.937 c0,23.658,16.206,23.931,16.368,23.931c4.881,0,6.947-7.914,6.947-11.063V133.45c0-2.744,1.148-2.744,1.835-2.744 c5.807,0,10.48,3.196,13.855,6.69c8.813-11.615,15.81-20.526,15.81-20.526s0.16-0.182,0.248-0.345 c-1.03-2.443-7.165-16.995-7.165-16.995l1.708-43.717c0,0-0.278-3.797,1.044-6.052c1.314-2.245,4.247-3.175,4.247-3.175 l13.307,41.443c0,0-4.107,0.866-4.107,5.585c0,2.982,2.658,4.99,6.227,5.013c3.572-0.022,6.227-2.031,6.227-5.013 c0-4.719-4.109-5.585-4.109-5.585l13.311-41.443c0,0,2.93,0.93,4.245,3.175c1.322,2.255,1.043,6.052,1.043,6.052l1.709,43.717 l-7.309,17.34c0,0,6.997,8.911,15.809,20.526c3.375-3.494,8.048-6.69,13.855-6.69c0.687,0,1.833,0,1.833,2.744v14.538 c0,3.148,2.068,11.063,6.95,11.063c0.159,0,16.367-0.272,16.367-23.931c0-45.347-30.197-109.322-36.888-122.937 c2.412,0.595,5.761,1.87,7.104,4.505c0.92,1.809,1.541,6.975,1.705,8.813l0.275,3.142l2.213-2.245 C173.226,25.972,173.875,25.345,174.473,24.823z M176.157,181.396c-1.644-2.189-41.07-55.856-41.07-55.856l-6.723,8.809 l-0.946-1.233l-0.829-1.082l-5.053-6.594l-0.095,0.101c0,0-39.427,53.667-41.07,55.856c-1.643,2.191-4.777,6.708-6.058,9.322 c-1.279,2.614-8.946,39.306-8.946,42.592c0,2.005,0.041,8.618,0.071,13.47c1.536,0.2,3.411,0.761,4.357,0.125 c1.624-1.093,2.363-2.323,2.491-3.372c0.128-1.048,1.367-12.969,2.69-20.812c1.779-10.547,4.571-19.005,4.415-18.97 c3.213-6.672,8.966-17.938,9.887-19.252c17.808-25.439,38.994-49.947,38.994-49.947s21.166,24.502,38.978,49.947 c0.921,1.313,6.672,12.58,9.888,19.252c-0.158-0.035,2.635,8.423,4.414,18.97c1.322,7.843,2.562,19.764,2.688,20.812 c0.131,1.049,0.87,2.279,2.493,3.372c0.944,0.636,2.818,0.075,4.355-0.125c0.032-4.852,0.073-11.465,0.073-13.47 c0-3.286-7.667-39.978-8.948-42.592C180.936,188.104,177.801,183.588,176.157,181.396z M82.538,21.517l-1.014-0.623l-0.813,0.872 c-2.231,2.394-3.063,6.287-3.342,9.478l-1.624-2.705l-1.323,1.433c-0.179,0.197-1.801,2.049-3.004,6.592 c-0.581,2.205-0.709,5.712-0.689,8.68l-3.057-4.85l-1.234,1.958c-0.072,0.114-1.787,2.859-3.722,8.121 c-1.22,3.307-1.179,9.262-0.949,13.547l-6.463-8.577l-1.012,2.251c-0.08,0.177-1.934,4.373-2.359,10.694 c-0.234,3.536,0.51,8.253,1.231,11.789l-7.778-7.739l-0.453,2.807c-0.073,0.446-1.754,11.048-0.02,18.338 c0.433,1.819,1.231,3.879,2.117,5.832l-10.759-9.394c0,0-0.749,5.515-0.248,10.196c0.271,2.523,2.272,7.632,3.813,11.276 c-3.503-2.016-8.539-5.019-11.099-7.047l-2.259-1.79l-0.106,2.881c-0.162,4.545-0.087,8.952,2.6,12.916 c1.161,1.717,3.433,4.291,5.459,6.484c-2.877-0.894-6.201-1.851-8.179-2.173l-1.763-0.288l0.071,1.787 c0.148,3.675,2.771,8.324,4.198,9.896c0.723,0.794,2.436,2.508,3.941,3.991L21.93,137.83l0.896,2.098 c0.1,0.234,2.493,5.74,7.324,9.943c2.464,2.146,6.876,4.516,10.047,6.088c-2.57,0.653-5.908,1.536-8.518,2.335l-2.402,0.735 l1.246,1.664c0.13,0.173,0.27,0.343,0.407,0.494c3.608,4.04,12.229,5.234,14.412,5.339c-4.774,1.197-9.767,2.451-11.896,2.979 l-2.911,0.728l2.371,1.843c4.708,3.656,13.02,5.841,22.233,5.841c2.588,0,4.539,0.099,8.954-0.081l-6.105,11.467 c0,0-2.038,9.36-3.02,12.658c-2.304-2.226-2.133-3.205-15.52-15.09c-4.829-4.284-15.411-10.026-18.429-13.813 c-1.005-1.263,5.449-1.422,6.179-1.422c0.73,0-6.393-3.385-8.582-6.123c-2.191-2.739-2.895-5.36-2.895-5.36s-0.38-0.847,0.637-1.001 c1.018-0.157,8.65-1.316,9.084-1.611c0.395-0.266,0.332-0.517-0.137-0.75c-0.469-0.236-9.248-4.724-12.548-10.672 c-2.375-4.281-2.357-6.923-2.364-7.32c-0.01-0.64,0.17-0.803,1.385-0.708c0.862,0.068,7.226,0.046,7.774-0.032 c0.546-0.08,0.453-0.324,0.019-0.576c-9.483-5.484-8.546-14.054-8.624-14.601c-0.079-0.548,0-0.783,0.548-0.704 c0.546,0.077,9.342,0.263,9.812,0.263c0.469,0,0.218-0.519,0.218-0.519s-3.452-4.27-6.056-11.001 c-2.077-5.366-2.377-11.169-2.533-11.639c-0.157-0.469-0.034-0.887,0.514-0.808c0.549,0.079,8.558,3.488,8.87,3.567 c0.313,0.077,0.548-0.103,0.235-0.259c-0.314-0.157-2.896-6.383-3.855-12.033c-1.384-8.17-0.488-10.725-0.42-11.269 c0.063-0.502,0.397-0.874,1.105-0.507c0.743,0.385,12.255,10.245,12.646,10.402c0.391,0.157,0.79-0.164,0.477-0.555 c-0.313-0.392-2.392-6.574-2.938-13.145c-0.548-6.571,0.1-14.571,0.274-15.225c0.161-0.604,0.635-0.581,1.339,0.046 c0.704,0.626,10.381,8.489,11.006,9.038c0.625,0.547,0.727,0.252,0.492-0.53c-0.235-0.782-0.484-8.435,0.375-14.381 c0.965-6.686,3.372-10.979,3.685-11.448s0.536-0.474,0.927-0.161c0.391,0.313,5.106,9.045,5.497,9.515 c0.391,0.469,0.809,0.336,0.732-0.524c-0.104-1.14-0.057-4.547,1.845-12.682c1.956-8.371,3.789-9.758,4.052-10.088 c0.313-0.396,0.521-0.392,0.833-0.002c0.309,0.387,3.945,8.536,4.519,9.377c-0.005,0,0,0.008,0.031,0.049 c-0.007-0.009-0.022-0.036-0.031-0.049c0.025,0.008,0.446,0.395,0.34-0.883c-0.058-0.707,0.396-10.055,1.574-12.653 c1.941-4.282,4.404-6.214,4.899-6.463c0.54-0.272,0.658-0.171,0.737,0.212c0.146,0.721,0.478,7.705,0.625,8.312 c0.146,0.606,0.444,0.232,0.437-0.151c-0.015-0.72,1.081-7.977,3.115-12.044c2.033-4.069,4.292-5.681,5.188-6.133 c0.742-0.376,0.989-0.156,1.018,0.391c0.022,0.422,0.645,5.719,1.206,10.452c-0.272,1.24-0.484,2.556-0.639,3.691 C83.251,22.014,82.866,21.718,82.538,21.517z M127.35,141.814c-1.158,12.032-4.978,23.045-6.326,29.486 c-1.643,7.849-4.788,18.061-6.793,20.931c-4.433,6.343-18.036,18.547-20.403,19.732c-1.094,0.547-6.376-4.115-6.56-4.846 c-0.182-0.728,2.883-3.993,2.154-3.627c-0.731,0.364-4.104,0.906-5.06,0.87c-0.753-0.026,0.633-2.728,0.633-2.728 s-1.484,2.217-3.021,2.947c-0.03,0.015,9.433-18.119,9.433-18.119S127.52,140.043,127.35,141.814z M119.7,169.39l3.104-10.647 l-1.869-0.559l-3.152,10.656L119.7,169.39z M114.072,167.242l4.687-10.051l-1.764-0.838l-4.735,10.055L114.072,167.242z  M126.961,159.319l-0.82,11.06l-1.991-0.139l0.867-11.079L126.961,159.319z M131.727,170.391l-1.986,0.167l-0.828-11.078 l1.944-0.144L131.727,170.391z M164.422,186.462c0,0,9.463,18.134,9.434,18.119c-1.54-0.73-3.021-2.947-3.021-2.947 s1.384,2.701,0.633,2.728c-0.957,0.036-4.33-0.506-5.06-0.87c-0.731-0.366,2.334,2.899,2.153,3.627 c-0.185,0.73-5.467,5.393-6.56,4.846c-2.368-1.186-15.973-13.39-20.404-19.732c-2.007-2.87-5.149-13.082-6.792-20.931 c-1.349-6.441-4.621-17.127-5.778-29.16C128.854,140.373,164.422,186.462,164.422,186.462z M142.029,167.242l1.813-0.834 l-4.735-10.055l-1.762,0.838L142.029,167.242z M136.402,169.39l1.917-0.55l-3.152-10.656l-1.868,0.559L136.402,169.39z"
          })
        );
      }
      function W() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_ClosedCaption",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement("path", {
            className: "CCBox",
            fill: "none",
            stroke: "#000000",
            strokeWidth: "10",
            strokeMiterlimit: "10",
            d:
              "M238,210c0,6.627-5.373,12-12,12H30 c-6.627,0-12-5.373-12-12V46c0-6.627,5.373-12,12-12h196c6.627,0,12,5.373,12,12V210z"
          }),
          o.createElement("path", {
            className: "C1",
            d:
              "M90.505,173.207c11.431,0,22.338-4.276,30.72-12.036c2.6-2.407,2.753-6.47,0.347-9.068c-2.41-2.604-6.47-2.757-9.072-0.349 c-5.998,5.559-13.811,8.62-21.995,8.62c-17.852,0-32.373-14.524-32.373-32.372c0-17.849,14.521-32.373,32.373-32.373 c8.177,0,15.981,3.055,21.979,8.603c2.603,2.407,6.662,2.25,9.072-0.353c2.407-2.602,2.249-6.662-0.353-9.068 c-8.375-7.751-19.276-12.019-30.694-12.019c-24.931,0-45.209,20.281-45.209,45.209C45.3,152.93,65.574,173.207,90.505,173.207z"
          }),
          o.createElement("path", {
            className: "C1",
            d:
              "M177.926,173.207c11.431,0,22.338-4.276,30.721-12.036c2.6-2.407,2.754-6.47,0.347-9.068 c-2.41-2.604-6.47-2.757-9.072-0.349c-5.998,5.559-13.812,8.62-21.995,8.62c-17.852,0-32.372-14.524-32.372-32.372 c0-17.849,14.521-32.373,32.372-32.373c8.178,0,15.981,3.055,21.979,8.603c2.604,2.407,6.663,2.25,9.072-0.353 c2.407-2.602,2.25-6.662-0.353-9.068c-8.375-7.751-19.277-12.019-30.694-12.019c-24.932,0-45.209,20.281-45.209,45.209 C132.721,152.93,152.996,173.207,177.926,173.207z"
          })
        );
      }
      function z() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Edit",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement("path", {
            d:
              "M16.757,233.795c-1.324,3.973,2.455,7.752,6.427,6.428l50.912-16.971l-40.368-40.367L16.757,233.795z"
          }),
          o.createElement("rect", {
            x: "83.614",
            y: "75.466",
            transform:
              "matrix(-0.7071 -0.7071 0.7071 -0.7071 93.7468 324.5916)",
            width: "60.971",
            height: "134.827"
          }),
          o.createElement("rect", {
            x: "149.28",
            y: "68.116",
            transform:
              "matrix(-0.7071 -0.7071 0.7071 -0.7071 252.0431 259.4951)",
            width: "60.971",
            height: "18.862"
          }),
          o.createElement("path", {
            d:
              "M233.545,37.803l-14.368-14.369c-7.928-7.928-20.846-7.897-28.809,0.064l-14.305,14.307l43.112,43.111l14.306-14.305 C241.511,58.582,241.513,45.771,233.545,37.803z"
          })
        );
      }
      function V() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Information",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement("polyline", {
            className: "I",
            points:
              "86.883,110.957 152.894,110.957 152.894,181.406 177.117,181.406 177.117,202.485 86.883,202.485 86.883,181.775 109.441,181.775 109.441,130.372 86.883,130.372 "
          }),
          o.createElement("circle", {
            className: "I",
            cx: "128.47",
            cy: "67.607",
            r: "25.517"
          }),
          o.createElement("circle", {
            fill: "none",
            stroke: "#000000",
            strokeWidth: "14",
            strokeMiterlimit: "10",
            cx: "128",
            cy: "128",
            r: "116.833"
          })
        );
      }
      function Y() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Flag",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Information",
            height: "100px",
            width: "100px",
            x: "0px",
            y: "0px",
            viewBox: "0 0 100 100"
          },
          o.createElement("path", {
            d:
              "M82.5,10.8c-0.8-0.7-1.9-0.8-2.9-0.7l-7.2,1.8c-7.3,1.8-15.1,1.4-22.3-1.2h-0.1c-7.8-2.9-16.2-3.5-24.2-1.9l-2.8,0.6V8.5  c0-1.9-1.5-3.5-3.5-3.5S16,6.5,16,8.5v5.1v38.8v39.2c0,1.9,1.5,3.5,3.5,3.5s3.5-1.5,3.5-3.5V55.1l4-0.8c6.9-1.4,14-0.8,20.5,1.7  l0.3,0.1c5,1.8,10.2,2.8,15.5,2.8c3.6,0,7.3-0.4,10.9-1.4l7.2-1.8c1.5-0.4,2.6-1.8,2.6-3.3V13.6C83.9,12.5,83.3,11.5,82.5,10.8z"
          })
        );
      }
      function K() {
        return o.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 100 100",
            x: "0px",
            y: "0px"
          },
          o.createElement("title", null, "help and info"),
          o.createElement("path", {
            d:
              "M50,7A43,43,0,1,1,7,50,43,43,0,0,1,50,7m0-7a50,50,0,1,0,50,50A50,50,0,0,0,50,0h0Z"
          }),
          o.createElement("path", {
            d:
              "M50.79,25a45.51,45.51,0,0,1,5.29.87c5.33,1.51,8.5,5.77,8.9,11.43a10.4,10.4,0,0,1-4.21,9.5c-1.42,1.1-2.91,2.1-4.34,3.18a7.06,7.06,0,0,0-3.18,6.3,4,4,0,0,1-2.88,4,4.42,4.42,0,0,1-5.18-1.55,4.19,4.19,0,0,1-.59-2.07A13.89,13.89,0,0,1,50.3,45,41.55,41.55,0,0,0,54.83,41,5,5,0,0,0,56,38.19c0.23-2.83-1.59-4.65-4.52-4.84-3.54-.23-6.52.69-8.6,3.82a4.19,4.19,0,0,1-4.35,2c-3-.5-4.29-2.94-3.06-5.75a12.84,12.84,0,0,1,6.25-6.2A21.71,21.71,0,0,1,50.79,25Z"
          }),
          o.createElement("path", {
            d:
              "M53.78,69.88C53.8,73.09,52,75,48.85,75s-5.25-1.84-5.26-4.53c0-3.73,1.67-5.59,5-5.69C51.3,64.7,54.12,66.36,53.78,69.88Z"
          })
        );
      }
      function X(e) {
        var t = e.className;
        Object(r.f)(e, ["className"]);
        return o.createElement(
          "svg",
          {
            className: t,
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          },
          o.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "16",
            fill: "#BDCCDB"
          }),
          o.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "16",
            fill: "url(#paint0_linear)"
          }),
          o.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "14.2745",
            fill: "#98A8B7"
          }),
          o.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "14.2745",
            fill: "url(#paint1_linear)"
          }),
          o.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "14.2745",
            stroke: "#7A92A9"
          }),
          o.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "11.1309",
            fill: "#BDCCDB"
          }),
          o.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "11.1309",
            fill: "url(#paint2_linear)"
          }),
          o.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "10.2107",
            fill: "#5792C8"
          }),
          o.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "10.2107",
            fill: "url(#paint3_linear)"
          }),
          o.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M20.6016 17.9523C22.8425 17.9523 24.6591 16.1357 24.6591 13.8948C24.6591 11.6539 22.8425 9.83727 20.6016 9.83727C18.3607 9.83727 16.5441 11.6539 16.5441 13.8948C16.5441 13.9609 16.5457 14.0266 16.5488 14.0919L14.0477 17.6314C14.0205 17.6306 13.9933 17.6303 13.966 17.6303C13.2606 17.6303 12.6127 17.8767 12.1038 18.2882L6.33398 15.9235C6.33398 17.4638 6.62381 19.1438 6.97803 19.5302C7.16531 19.7345 9.1256 20.4564 11.0502 21.127C11.3013 22.5093 12.5112 23.5574 13.966 23.5574C15.6027 23.5574 16.9296 22.2306 16.9296 20.5939C16.9296 20.5326 16.9277 20.4717 16.924 20.4113L20.2613 17.9382C20.3735 17.9475 20.487 17.9523 20.6016 17.9523ZM12.1995 21.5232C12.5338 22.1572 13.1994 22.5894 13.966 22.5894C15.0681 22.5894 15.9615 21.696 15.9615 20.5939C15.9615 19.4917 15.0681 18.5983 13.966 18.5983C13.7007 18.5983 13.4475 18.65 13.216 18.744L14.1914 19.1438L14.1886 19.1617C14.8832 19.2688 15.4151 19.8692 15.4151 20.5939C15.4151 21.3942 14.7663 22.043 13.966 22.043C13.8901 22.043 13.8157 22.0371 13.743 22.0259L13.7405 22.042L13.6136 21.9998C13.5414 21.9818 13.4713 21.9583 13.4038 21.9299C13.0402 21.8084 12.6309 21.6704 12.1995 21.5232ZM20.6016 16.5998C22.0956 16.5998 23.3066 15.3887 23.3066 13.8948C23.3066 12.4008 22.0956 11.1898 20.6016 11.1898C19.1077 11.1898 17.8966 12.4008 17.8966 13.8948C17.8966 15.3887 19.1077 16.5998 20.6016 16.5998ZM22.4 13.8948C22.4 14.888 21.5948 15.6932 20.6016 15.6932C19.6083 15.6932 18.8032 14.888 18.8032 13.8948C18.8032 12.9015 19.6083 12.0964 20.6016 12.0964C21.5948 12.0964 22.4 12.9015 22.4 13.8948Z",
            fill: "#BDCCDB"
          }),
          o.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M20.6016 17.9523C22.8425 17.9523 24.6591 16.1357 24.6591 13.8948C24.6591 11.6539 22.8425 9.83727 20.6016 9.83727C18.3607 9.83727 16.5441 11.6539 16.5441 13.8948C16.5441 13.9609 16.5457 14.0266 16.5488 14.0919L14.0477 17.6314C14.0205 17.6306 13.9933 17.6303 13.966 17.6303C13.2606 17.6303 12.6127 17.8767 12.1038 18.2882L6.33398 15.9235C6.33398 17.4638 6.62381 19.1438 6.97803 19.5302C7.16531 19.7345 9.1256 20.4564 11.0502 21.127C11.3013 22.5093 12.5112 23.5574 13.966 23.5574C15.6027 23.5574 16.9296 22.2306 16.9296 20.5939C16.9296 20.5326 16.9277 20.4717 16.924 20.4113L20.2613 17.9382C20.3735 17.9475 20.487 17.9523 20.6016 17.9523ZM12.1995 21.5232C12.5338 22.1572 13.1994 22.5894 13.966 22.5894C15.0681 22.5894 15.9615 21.696 15.9615 20.5939C15.9615 19.4917 15.0681 18.5983 13.966 18.5983C13.7007 18.5983 13.4475 18.65 13.216 18.744L14.1914 19.1438L14.1886 19.1617C14.8832 19.2688 15.4151 19.8692 15.4151 20.5939C15.4151 21.3942 14.7663 22.043 13.966 22.043C13.8901 22.043 13.8157 22.0371 13.743 22.0259L13.7405 22.042L13.6136 21.9998C13.5414 21.9818 13.4713 21.9583 13.4038 21.9299C13.0402 21.8084 12.6309 21.6704 12.1995 21.5232ZM20.6016 16.5998C22.0956 16.5998 23.3066 15.3887 23.3066 13.8948C23.3066 12.4008 22.0956 11.1898 20.6016 11.1898C19.1077 11.1898 17.8966 12.4008 17.8966 13.8948C17.8966 15.3887 19.1077 16.5998 20.6016 16.5998ZM22.4 13.8948C22.4 14.888 21.5948 15.6932 20.6016 15.6932C19.6083 15.6932 18.8032 14.888 18.8032 13.8948C18.8032 12.9015 19.6083 12.0964 20.6016 12.0964C21.5948 12.0964 22.4 12.9015 22.4 13.8948Z",
            fill: "url(#paint4_linear)"
          }),
          o.createElement(
            "defs",
            null,
            o.createElement(
              "linearGradient",
              {
                id: "paint0_linear",
                x1: "8.4375",
                y1: "1.75",
                x2: "23.1875",
                y2: "22.9375",
                gradientUnits: "userSpaceOnUse"
              },
              o.createElement("stop", {
                stopColor: "white",
                stopOpacity: "0.54"
              }),
              o.createElement("stop", {
                offset: "1",
                stopColor: "white",
                stopOpacity: "0"
              })
            ),
            o.createElement(
              "linearGradient",
              {
                id: "paint1_linear",
                x1: "9",
                y1: "3.125",
                x2: "22.4375",
                y2: "24.625",
                gradientUnits: "userSpaceOnUse"
              },
              o.createElement("stop", {
                stopColor: "white",
                stopOpacity: "0.25"
              }),
              o.createElement("stop", {
                offset: "1",
                stopColor: "white",
                stopOpacity: "0"
              })
            ),
            o.createElement(
              "linearGradient",
              {
                id: "paint2_linear",
                x1: "10.3125",
                y1: "6.375",
                x2: "19.6875",
                y2: "23.125",
                gradientUnits: "userSpaceOnUse"
              },
              o.createElement("stop", {
                stopColor: "white",
                stopOpacity: "0.65"
              }),
              o.createElement("stop", {
                offset: "1",
                stopColor: "white",
                stopOpacity: "0"
              })
            ),
            o.createElement(
              "linearGradient",
              {
                id: "paint3_linear",
                x1: "10",
                y1: "8",
                x2: "20.5",
                y2: "26.2107",
                gradientUnits: "userSpaceOnUse"
              },
              o.createElement("stop", { stopColor: "#72A5D3" }),
              o.createElement("stop", { offset: "1", stopColor: "#4F7294" })
            ),
            o.createElement(
              "linearGradient",
              {
                id: "paint4_linear",
                x1: "12.1875",
                y1: "13.5625",
                x2: "18.5625",
                y2: "23.5574",
                gradientUnits: "userSpaceOnUse"
              },
              o.createElement("stop", {
                stopColor: "white",
                stopOpacity: "0.44"
              }),
              o.createElement("stop", {
                offset: "1",
                stopColor: "white",
                stopOpacity: "0"
              })
            )
          )
        );
      }
      function q() {
        return o.createElement(
          "svg",
          {
            height: "100px",
            width: "100px",
            fill: "#000000",
            x: "0px",
            y: "0px",
            viewBox: "0 0 101 101",
            enableBackground: "new 0 0 101 101",
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1"
          },
          o.createElement(
            "g",
            null,
            o.createElement("path", {
              d:
                "M16.929,30.115 M84.446,84.262c0-37.271-30.323-67.613-67.587-67.613l0,0l0.069,13.467   c29.777,0.039,53.995,24.256,54.051,54.042L84.446,84.262z"
            }),
            o.createElement("path", {
              d:
                "M16.843,53.089 M61.472,84.262c0-24.616-20.026-44.639-44.628-44.639l0,0v13.466c17.182,0,31.161,13.984,31.161,31.173   H61.472z"
            }),
            o.createElement("circle", {
              cx: "26.695",
              cy: "74.305",
              r: "9.812"
            })
          )
        );
      }
      function J(e) {
        return o.createElement(
          "svg",
          Object(r.a)({}, e, {
            height: "24px",
            width: "24px",
            viewBox: "0 0 24 24",
            x: "0px",
            y: "0px"
          }),
          o.createElement("path", {
            fill: "white",
            d:
              "M3.3,0.5v23h17.5v-23H3.3z M10.2,9.6l-3-2.2h3.7L12,3.9l1.2,3.6H17l-3,2.2l1.2,3.6L12,11l-3,2.2L10.2,9.6z M17.3,16.1 M17.4,18H6.6v-1.2h10.7L17.4,18L17.4,18z M17.3,19.9"
          })
        );
      }
    },
    AvbV: function(e, t, r) {
      var o = {
        "./main_brazilian.json": ["TFAN", 10],
        "./main_bulgarian.json": ["c2SO", 11],
        "./main_czech.json": ["peP3", 12],
        "./main_danish.json": ["0bnV", 13],
        "./main_dutch.json": ["wcLc", 14],
        "./main_english.json": ["/rNK", 15],
        "./main_finnish.json": ["iywU", 16],
        "./main_french.json": ["Xnpc", 17],
        "./main_german.json": ["pmKi", 18],
        "./main_greek.json": ["mTRv", 19],
        "./main_hungarian.json": ["WkHb", 20],
        "./main_italian.json": ["Jz5U", 21],
        "./main_japanese.json": ["3Dk9", 22],
        "./main_koreana.json": ["neQD", 23],
        "./main_latam.json": ["6oHD", 24],
        "./main_norwegian.json": ["2OvS", 25],
        "./main_polish.json": ["3pwE", 26],
        "./main_portuguese.json": ["hY40", 27],
        "./main_romanian.json": ["Q95+", 28],
        "./main_russian.json": ["bsPT", 29],
        "./main_sc_schinese.json": ["GOaQ", 30],
        "./main_schinese.json": ["B/Zz", 31],
        "./main_spanish.json": ["U6iL", 32],
        "./main_swedish.json": ["4uPU", 33],
        "./main_tchinese.json": ["rgC9", 34],
        "./main_thai.json": ["87dp", 35],
        "./main_turkish.json": ["yMpO", 36],
        "./main_ukrainian.json": ["zTWm", 37],
        "./main_vietnamese.json": ["wqiy", 38]
      };
      function n(t) {
        var n = o[t];
        return n
          ? r.e(n[1]).then(function() {
              var e = n[0];
              return r.t(e, 3);
            })
          : Promise.resolve().then(function() {
              var e = new Error("Cannot find module '" + t + "'");
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            });
      }
      (n.keys = function() {
        return Object.keys(o);
      }),
        (n.id = "AvbV"),
        (e.exports = n);
    },
    CdLH: function(e, t, n) {
      "use strict";
      n.d(t, "e", function() {
        return r;
      }),
        n.d(t, "b", function() {
          return o;
        }),
        n.d(t, "c", function() {
          return i;
        }),
        n.d(t, "d", function() {
          return a;
        }),
        n.d(t, "f", function() {
          return s;
        }),
        n.d(t, "a", function() {
          return c;
        });
      var r = {
        PerYear: 31536e3,
        PerMonth: 2628e3,
        PerWeek: 604800,
        PerDay: 86400,
        PerHour: 3600,
        PerMinute: 60
      };
      function o(e, t) {
        return (
          e.getFullYear() == t.getFullYear() &&
          e.getMonth() == t.getMonth() &&
          e.getDate() == t.getDate()
        );
      }
      function i(e, t) {
        return e.getFullYear() == t.getFullYear();
      }
      function a(e) {
        return new Date(e.getFullYear(), e.getMonth(), 1, 0, 0, 0, 0);
      }
      function s(t) {
        return new Promise(function(e) {
          return setTimeout(e, t);
        });
      }
      function c() {
        return Math.floor(Date.now() / 1e3);
      }
    },
    D4wO: function(e, t, n) {
      "use strict";
      function r(a) {
        return function(e, o, t) {
          var i = t.value;
          t.value = function() {
            for (var e = this, t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            var r = this[o + "_DebounceProperties"];
            void 0 === r &&
              (r = this[o + "_DebounceProperties"] = {
                hTimer: void 0,
                nPending: 0
              }),
              void 0 === r.hTimer
                ? (i.apply(this, t),
                  (r.hTimer = window.setInterval(function() {
                    0 < r.nPending
                      ? (i.apply(e, t), (r.nPending = 0))
                      : (window.clearInterval(r.hTimer), (r.hTimer = void 0));
                  }, a)))
                : (r.nPending += 1);
          };
        };
      }
      n.d(t, "a", function() {
        return r;
      });
    },
    "IjL/": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return i;
      });
      var r = n("mrSG"),
        s = n("q1tI"),
        o = n("bxiW"),
        i = (function(t) {
          function a() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), e;
          }
          return (
            Object(r.d)(a, t),
            (a.InstallErrorReportingStore = function(e) {
              this.sm_ErrorReportingStore = e;
            }),
            (a.prototype.componentDidCatch = function(e, t) {
              var n = this,
                r = a.sm_ErrorReportingStore;
              r
                ? r.ReportError(e).then(function(e) {
                    return (
                      e && n.setState({ identifierHash: e.identifierHash })
                    );
                  })
                : console.warn(
                    "No ErrorReportingStore - use ErrorReportingStore().Init() to configure error reporting to server"
                  ),
                this.setState({ error: { error: e, info: t } });
            }),
            (a.prototype.Reset = function() {
              this.setState({ error: null });
            }),
            (a.prototype.render = function() {
              var e = this.props,
                t = e.children,
                n = e.fallback,
                r = this.state,
                o = r.error,
                i = r.identifierHash;
              return o
                ? void 0 !== n
                  ? "function" == typeof n
                    ? n(o.error)
                    : n
                  : a.sm_ErrorReportingStore &&
                    a.sm_ErrorReportingStore.reporting_enabled
                  ? s.createElement(l, {
                      error: o,
                      identifierHash: i,
                      store: a.sm_ErrorReportingStore,
                      onRefresh: this.Reset
                    })
                  : s.createElement(c, { error: o, onDismiss: this.Reset })
                : t;
            }),
            Object(r.c)([o.a], a.prototype, "Reset", null),
            a
          );
        })(s.Component),
        c = function(e) {
          var t = e.error,
            n = e.onDismiss,
            r = t.error ? t.error.stack : "Stack missing",
            o = t.info ? t.info.componentStack : "",
            i = (t.error && t.error.message) || "unknown error";
          return s.createElement(
            u,
            null,
            s.createElement(p, null, 'Error: "', i, '"'),
            "   ",
            s.createElement(
              "span",
              {
                style: { textDecoration: "underline", cursor: "pointer" },
                onClick: n
              },
              "(x) Dismiss"
            ),
            s.createElement("br", null),
            s.createElement(m, null, r),
            s.createElement(m, null, "The error occurred while rendering:", o)
          );
        },
        l = function(e) {
          var t = e.error,
            n = e.onRefresh,
            r = e.identifierHash,
            o = e.store,
            i = (t.error && t.error.message) || "unknown error",
            a = o.product + "_" + o.version + "_" + r;
          return s.createElement(
            u,
            null,
            s.createElement(
              p,
              null,
              "Something went wrong while displaying this content. ",
              s.createElement(
                "span",
                {
                  style: { textDecoration: "underline", cursor: "pointer" },
                  onClick: n
                },
                "Refresh"
              )
            ),
            s.createElement(m, null, "Error Reference: ", a),
            s.createElement(m, null, i)
          );
        },
        u = function(e) {
          var t = e.children;
          return s.createElement(
            "div",
            {
              style: {
                overflow: "auto",
                marginLeft: "15px",
                color: "white",
                fontSize: "16px"
              }
            },
            t
          );
        },
        p = function(e) {
          var t = e.children;
          return s.createElement(
            "h1",
            {
              style: {
                fontSize: "20px",
                display: "inline-block",
                marginTop: "15px"
              }
            },
            t
          );
        },
        m = function(e) {
          var t = e.children;
          return s.createElement(
            "pre",
            { style: { marginTop: "15px", opacity: 0.7 } },
            t
          );
        };
    },
    "JJA/": function(e, t, n) {
      e.exports = {
        BodyNoScroll: "modals_BodyNoScroll_32ZiC",
        BodyNoScrollDialog: "modals_BodyNoScrollDialog_105OB",
        OverlayModal: "modals_OverlayModal_1yDps"
      };
    },
    JMS6: function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return c;
      }),
        n.d(t, "a", function() {
          return v;
        });
      var c,
        r,
        o = n("mrSG"),
        i = n("2vnA"),
        a = n("i8i4"),
        s = n("Kw0F"),
        l = n("D4wO"),
        u = n("bxiW"),
        p = n("kyHq"),
        m = n("TLQK"),
        d = n("lkRc"),
        f = n("r64O");
      ((r = c = c || {})[(r.Minimized = 1)] = "Minimized"),
        (r[(r.Hidden = 2)] = "Hidden"),
        (r[(r.Tooltip = 4)] = "Tooltip"),
        (r[(r.ContextMenu = 8)] = "ContextMenu"),
        (r[(r.Resizable = 16)] = "Resizable");
      var h = (function() {
          function e(e, t) {
            (this.m_rgLoadingLinks = []), (this.m_rgLoadingLinks = []);
            for (
              var n = e.document.getElementsByTagName("link"), r = 0;
              r < n.length;
              r++
            ) {
              var o = n[r];
              o.addEventListener("load", this.OnLinkLoad),
                this.m_rgLoadingLinks.push(o);
            }
          }
          return (
            (e.prototype.SetTarget = function(e) {
              (this.m_fnRender = e),
                0 == this.m_rgLoadingLinks.length &&
                  (this.m_fnRender(), (this.m_fnRender = void 0));
            }),
            (e.prototype.OnLinkLoad = function(e) {
              e.currentTarget.removeEventListener("load", this.OnLinkLoad),
                s.c(this.m_rgLoadingLinks, e.currentTarget),
                0 == this.m_rgLoadingLinks.length &&
                  (this.m_fnRender(), (this.m_fnRender = void 0));
            }),
            Object(o.c)([u.a], e.prototype, "OnLinkLoad", null),
            e
          );
        })(),
        v = (function() {
          function e(e, t) {
            (this.m_bFocused = !1),
              (this.m_strName = e),
              (this.m_rgParams = t),
              this.m_rgParams.target_browser &&
                (this.m_strName +=
                  "_pid" + this.m_rgParams.target_browser.m_unPID),
              (this.m_strTitle = t.title),
              delete this.m_rgParams.title;
          }
          return (
            (e.prototype.UpdateParamsBeforeShow = function(e) {
              return e;
            }),
            (e.prototype.OnDrop = function(e) {
              console.log("Ignoring drop onto toplevel window", e),
                e.preventDefault(),
                e.stopPropagation();
            }),
            (e.prototype.OnDragOver = function(e) {
              e.preventDefault(),
                (e.dataTransfer.dropEffect = "none"),
                e.stopPropagation();
            }),
            (e.prototype.OnMessage = function(e) {
              "window_moved" == e.data && this.OnResize();
            }),
            (e.prototype.Show = function(e, t) {
              var n,
                r = this;
              void 0 === e && (e = !0),
                void 0 === t && (t = !1),
                window.SteamClient &&
                  (this.m_rgParams.eCreationFlags |= c.Hidden),
                this.m_rgParams.eCreationFlags & c.Tooltip && (e = !1),
                this.BIsValid() &&
                  (this.BIsClosed()
                    ? ((this.m_popup = void 0), (this.m_element = void 0))
                    : e && this.Focus(t));
              var o,
                i,
                a,
                s = g.GetExistingPopup(this.m_strName);
              (s && !this.m_rgParams.replace_existing_popup) ||
                ((this.m_rgParams = this.UpdateParamsBeforeShow(
                  this.m_rgParams
                )),
                s
                  ? ((i = s.m_element),
                    (o = s.m_popup),
                    s.ReleasePopup(),
                    (a = s.m_renderWhenReady),
                    g.RemoveTrackedPopup(s),
                    o.removeEventListener(
                      "beforeunload",
                      s.OnBeforeUnloadEvent
                    ),
                    o.removeEventListener("unload", s.OnUnload),
                    o.removeEventListener("resize", s.OnResizeEvent),
                    o.removeEventListener("focus", this.OnFocusInternal),
                    o.removeEventListener("blur", this.OnBlurInternal),
                    o.removeEventListener("drop", s.OnDrop),
                    o.removeEventListener("dragover", s.OnDragOver),
                    o.removeEventListener("message", this.OnMessage))
                  : ((o = (n = b.CreatePopup(this.m_strName, this.m_rgParams))
                      .popup),
                    (i = n.element),
                    (a = new h(o, i))),
                o &&
                  i &&
                  ((o.document.title = this.m_strTitle),
                  o.addEventListener("beforeunload", this.OnBeforeUnloadEvent),
                  o.addEventListener("unload", this.OnUnload),
                  o.addEventListener("resize", this.OnResizeEvent),
                  o.addEventListener("focus", this.OnFocusInternal),
                  o.addEventListener("blur", this.OnBlurInternal),
                  o.addEventListener("drop", this.OnDrop),
                  o.addEventListener("dragover", this.OnDragOver),
                  o.addEventListener("message", this.OnMessage),
                  d.b.LANGUAGE &&
                    o.document.documentElement.setAttribute(
                      "lang",
                      Object(m.c)()
                    ),
                  (this.m_popup = o),
                  (this.m_element = i),
                  (this.m_renderWhenReady = a),
                  this.m_renderWhenReady.SetTarget(function() {
                    return r.RenderInternal(r.m_popup, r.m_element, e);
                  })),
                g.AddTrackedPopup(this),
                s && e && this.Focus());
            }),
            (e.prototype.RemoveEventListeners = function() {
              this.window.removeEventListener(
                "beforeunload",
                this.OnBeforeUnloadEvent
              ),
                this.window.removeEventListener("unload", this.OnUnload),
                this.window.removeEventListener("resize", this.OnResizeEvent),
                this.window.removeEventListener("focus", this.OnFocusInternal),
                this.window.removeEventListener("blur", this.OnBlurInternal),
                this.window.removeEventListener("drop", this.OnDrop),
                this.window.removeEventListener("dragover", this.OnDragOver),
                this.window.removeEventListener("message", this.OnMessage);
            }),
            (e.prototype.RenderInternal = function(e, t, n) {
              var r;
              !this.browser_info ||
                ((r = this.browser_info).m_eBrowserType !=
                  p.d.EBrowserType_OpenVROverlay &&
                  r.m_eBrowserType !=
                    p.d.EBrowserType_OpenVROverlay_Dashboard) ||
                (t.ownerDocument.body.className += " VR"),
                this.Render(e, t),
                this.OnLoad(),
                e.SteamClient &&
                  (n
                    ? e.SteamClient.Window.BringToFront()
                    : e.SteamClient.Window.ShowWindow());
            }),
            (e.prototype.OnResizeEvent = function() {
              this.OnResize();
            }),
            (e.prototype.OnBeforeUnloadEvent = function() {
              this.OnBeforeUnload();
            }),
            (e.prototype.OnUnload = function() {
              this.RemoveEventListeners(),
                g.RemoveTrackedPopup(this),
                this.OnClose(),
                a.unmountComponentAtNode(this.m_element);
            }),
            Object.defineProperty(e.prototype, "browser_info", {
              get: function() {
                return this.m_rgParams.target_browser;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "window", {
              get: function() {
                return this.m_popup;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "root_element", {
              get: function() {
                return this.m_element;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "title", {
              get: function() {
                return this.m_strTitle;
              },
              set: function(e) {
                (this.m_strTitle = e),
                  this.m_popup &&
                    (this.m_popup.document.title = this.m_strTitle);
              },
              enumerable: !1,
              configurable: !0
            }),
            (e.prototype.Focus = function(e) {
              void 0 === e && (e = !1),
                this.m_popup &&
                void 0 !== this.m_popup.SteamClient &&
                void 0 !== this.m_popup.SteamClient.Window
                  ? e
                    ? this.m_popup.SteamClient.Window.SetForegroundWindow()
                    : this.m_popup.SteamClient.Window.BringToFront()
                  : this.m_popup && this.m_popup.focus();
            }),
            (e.prototype.Close = function() {
              this.m_popup && this.m_popup.close();
            }),
            (e.prototype.GetName = function() {
              return this.m_strName;
            }),
            (e.prototype.BIsValid = function() {
              return !!this.m_popup;
            }),
            (e.prototype.BIsClosed = function() {
              return !this.m_popup || this.m_popup.closed;
            }),
            (e.prototype.BIsVisible = function() {
              return (
                this.m_popup &&
                !this.m_popup.closed &&
                "visible" == this.m_popup.document.visibilityState
              );
            }),
            (e.prototype.BIsFocused = function() {
              return this.BIsVisible() && this.m_popup.document.hasFocus();
            }),
            (e.prototype.OnFocusInternal = function() {
              (this.m_bFocused = !0), this.OnFocus();
            }),
            (e.prototype.OnBlurInternal = function() {
              (this.m_bFocused = !1), this.OnBlur();
            }),
            Object.defineProperty(e.prototype, "focused", {
              get: function() {
                return this.m_bFocused;
              },
              enumerable: !1,
              configurable: !0
            }),
            (e.prototype.GetWindowRestoreDetails = function() {
              var n = this;
              return this.m_popup &&
                !this.m_popup.closed &&
                this.m_popup.SteamClient
                ? new Promise(function(t, e) {
                    n.m_popup.SteamClient.Window.GetWindowRestoreDetails(
                      function(e) {
                        t(e);
                      }
                    );
                  })
                : Promise.resolve("");
            }),
            (e.prototype.IsMinimized = function() {
              var n = this;
              return this.m_popup &&
                !this.m_popup.closed &&
                this.m_popup.SteamClient &&
                this.m_popup.SteamClient.Window &&
                this.m_popup.SteamClient.Window.IsWindowMinimized
                ? new Promise(function(t, e) {
                    n.m_popup.SteamClient.Window.IsWindowMinimized(function(e) {
                      t(e);
                    });
                  })
                : Promise.resolve(!1);
            }),
            (e.prototype.ReleasePopup = function() {
              this.OnClose(), (this.m_popup = null);
            }),
            (e.prototype.OnBeforeUnload = function() {}),
            (e.prototype.OnFocus = function() {}),
            (e.prototype.OnBlur = function() {}),
            Object(o.c)([i.C], e.prototype, "m_bFocused", void 0),
            Object(o.c)([u.a], e.prototype, "OnMessage", null),
            Object(o.c)([u.a], e.prototype, "OnResizeEvent", null),
            Object(o.c)([u.a], e.prototype, "OnBeforeUnloadEvent", null),
            Object(o.c)([u.a], e.prototype, "OnUnload", null),
            Object(o.c)([u.a], e.prototype, "OnFocusInternal", null),
            Object(o.c)([u.a], e.prototype, "OnBlurInternal", null),
            e
          );
        })(),
        b = (function() {
          function h() {
            var e,
              s = this;
            (this.m_bShuttingDown = !1),
              (this.m_mapPopups = new Map()),
              (this.m_rgShutdownCallbacks = []),
              (this.m_rgPopupCreatedCallbacks = []),
              (this.m_unCurrentAccountID = 0),
              (this.m_mapRestoreDetails = new Map()),
              (this.m_bSaveRequired = !1),
              Object({ NODE_ENV: "production", STEAM_BUILD: "buildbot" })
                .MOBILE_BUILD ||
                (window.addEventListener("beforeunload", function(e) {
                  s.m_bShuttingDown = !0;
                  for (
                    var t = 0, n = s.m_rgShutdownCallbacks;
                    t < n.length;
                    t++
                  ) {
                    (0, n[t])();
                  }
                  var r = [];
                  s.m_mapPopups.forEach(function(e) {
                    e.BIsValid() && !e.BIsClosed() && r.push(e);
                  });
                  for (var o = 0, i = r; o < i.length; o++) {
                    i[o].Close();
                  }
                  s.m_bSaveRequired && s.SaveSavedDimensionStore(),
                    s.m_mapPopups.clear();
                }),
                (e = document.querySelector("head")),
                Object(f.a)(e, "Couldn't find head element"),
                e &&
                  ((this.m_DynamicCSSObserver = new MutationObserver(function(
                    e
                  ) {
                    for (var t = [], n = 0, r = e; n < r.length; n++)
                      for (var o = r[n], i = 0; i < o.addedNodes.length; i++) {
                        var a = o.addedNodes[i];
                        a.nodeType == Node.ELEMENT_NODE &&
                          "LINK" == a.nodeName &&
                          t.push(a);
                      }
                    t &&
                      (console.log("adding dynamic CSS to child popups", t),
                      s.m_mapPopups.forEach(function(e) {
                        h.CopyCSSLinksToPopup(e.window, t);
                      }));
                  })),
                  this.m_DynamicCSSObserver.observe(e, { childList: !0 })));
          }
          return (
            (h.prototype.SetCurrentLoggedInAccountID = function(e) {
              (this.m_unCurrentAccountID = e)
                ? this.LoadSavedDimensionStore()
                : this.ClearSavedDimensionStore();
            }),
            (h.prototype.AddShutdownCallback = function(e) {
              this.m_rgShutdownCallbacks.push(e);
            }),
            (h.prototype.AddPopupCreatedCallback = function(e) {
              this.m_rgPopupCreatedCallbacks.push(e);
            }),
            (h.prototype.AddTrackedPopup = function(e) {
              this.m_mapPopups.set(e.GetName(), e);
              for (
                var t = 0, n = this.m_rgPopupCreatedCallbacks;
                t < n.length;
                t++
              ) {
                (0, n[t])(e);
              }
            }),
            (h.prototype.RemoveTrackedPopup = function(e) {
              this.m_mapPopups.delete(e.GetName());
            }),
            (h.prototype.GetExistingPopup = function(e) {
              return this.m_mapPopups.get(e);
            }),
            (h.prototype.GetPopups = function() {
              return this.m_mapPopups.values();
            }),
            (h.prototype.ClosePopupsOwnedByBrowser = function(t) {
              this.m_mapPopups.forEach(function(e) {
                e.browser_info &&
                  e.browser_info.m_nBrowserID == t.m_nBrowserID &&
                  e.browser_info.m_unPID == t.m_unPID &&
                  e.Close();
              });
            }),
            (h.CreatePopup = function(e, t) {
              var n = t.dimensions || {},
                r = n.width || 300,
                o = n.height || 300,
                i = t.title,
                a = "width=" + r + ",height=" + o;
              void 0 !== n.left && (a += ",left=" + n.left),
                void 0 !== n.top && (a += ",top=" + n.top),
                (a += ",resizeable,status=0,toolbar=0,menubar=0,location=0");
              var s = "about:blank",
                c = [];
              c.push("createflags=" + t.eCreationFlags),
                t.minWidth && c.push("minwidth=" + t.minWidth),
                t.minHeight && c.push("minheight=" + t.minHeight),
                t.target_browser &&
                  (c.push("pid=" + t.target_browser.m_unPID),
                  c.push("browser=" + t.target_browser.m_nBrowserID),
                  c.push("browserType=" + t.target_browser.m_eBrowserType),
                  t.availscreenwidth &&
                    t.availscreenheight &&
                    (c.push("screenavailwidth=" + t.availscreenwidth),
                    c.push("screenavailheight=" + t.availscreenheight))),
                t.strVROverlayKey &&
                  c.push("vrOverlayKey=" + t.strVROverlayKey),
                t.strRestoreDetails &&
                  c.push("restoredetails=" + t.strRestoreDetails),
                c && (s += "?" + c.join("&"));
              var l = (t.owner_window || window).open(s, e, a, !0);
              if (!l)
                return (
                  console.log(
                    "Failed to create popup.. browser popup blocker enabled?"
                  ),
                  {}
                );
              var u = "";
              t.html_class && (u = 'class="' + t.html_class + '"');
              var p = "";
              t.body_class && (p = 'class="' + t.body_class + '"');
              var m =
                "<!DOCTYPE html><html " +
                u +
                "><head><title></title></head><body " +
                p +
                '><div id="popup_target"></div></body></html>';
              l.document.write(m), (l.document.title = i);
              var d = document.getElementsByTagName("link");
              return (
                h.CopyCSSLinksToPopup(l, d),
                { popup: l, element: l.document.getElementById("popup_target") }
              );
            }),
            (h.CopyCSSLinksToPopup = function(e, t) {
              for (
                var n = e.document.getElementsByTagName("head")[0], r = 0;
                r < t.length;
                r++
              ) {
                var o = t[r];
                if ("stylesheet" == o.rel) {
                  for (
                    var i = e.document.createElement("link"), a = 0;
                    a < o.attributes.length;
                    a++
                  ) {
                    var s = o.attributes.item(a);
                    i.setAttribute(s.name, s.value);
                  }
                  n.appendChild(i);
                }
              }
            }),
            (h.prototype.BShuttingDown = function() {
              return this.m_bShuttingDown;
            }),
            (h.prototype.GetLocalStorageKey = function() {
              return "PopupSavedDimensions_" + this.m_unCurrentAccountID;
            }),
            (h.prototype.LoadSavedDimensionStore = function() {
              if (this.m_unCurrentAccountID) {
                var e = this.GetLocalStorageKey();
                this.m_mapRestoreDetails = void 0;
                var t = window.localStorage.getItem(e);
                if (t)
                  try {
                    var n = JSON.parse(t);
                    this.m_mapRestoreDetails = new Map(n);
                  } catch (e) {}
                this.m_mapRestoreDetails ||
                  (this.m_mapRestoreDetails = new Map());
              }
            }),
            (h.prototype.SaveSavedDimensionStore = function() {
              var e, t;
              this.m_unCurrentAccountID &&
                this.m_bSaveRequired &&
                ((e = this.GetLocalStorageKey()),
                (t = JSON.stringify(Array.from(this.m_mapRestoreDetails))),
                window.localStorage.setItem(e, t),
                (this.m_bSaveRequired = !1));
            }),
            (h.prototype.DebouncedSaveSavedDimensionStore = function() {
              this.SaveSavedDimensionStore();
            }),
            (h.prototype.ClearSavedDimensionStore = function() {
              this.m_mapRestoreDetails.clear(), (this.m_bSaveRequired = !1);
            }),
            (h.prototype.GetRestoreDetails = function(e) {
              if (!this.m_mapRestoreDetails.has(e)) return "";
              var t = this.m_mapRestoreDetails.get(e);
              return (
                (t.last_used = Date.now()),
                (this.m_bSaveRequired = !0),
                t.strRestoreDetails
              );
            }),
            (h.prototype.SetRestoreDetails = function(e, t, n) {
              if (e) {
                if (t) {
                  if (50 < this.m_mapRestoreDetails.size) {
                    for (
                      var r = null,
                        o = Date.now(),
                        i = 0,
                        a = Array.from(this.m_mapRestoreDetails.keys());
                      i < a.length;
                      i++
                    ) {
                      var s = a[i],
                        c = this.m_mapRestoreDetails.get(s);
                      c.last_used < o &&
                        c.bExpires &&
                        ((o = c.last_used), (r = s));
                    }
                    r && this.m_mapRestoreDetails.delete(r);
                  }
                  var l = {
                    strRestoreDetails: t,
                    last_used: Date.now(),
                    bExpires: n
                  };
                  this.m_mapRestoreDetails.set(e, l);
                } else this.m_mapRestoreDetails.delete(e);
                (this.m_bSaveRequired = !0),
                  this.m_bShuttingDown
                    ? this.SaveSavedDimensionStore()
                    : this.DebouncedSaveSavedDimensionStore();
              }
            }),
            Object(o.c)(
              [u.a, Object(l.a)(100)],
              h.prototype,
              "DebouncedSaveSavedDimensionStore",
              null
            ),
            h
          );
        })(),
        g = new b();
      window.g_PopupManager = g;
    },
    Jnrd: function(e, t, n) {
      "use strict";
      function r(e) {
        if (!a() || !window.document.cookie) return null;
        var t = document.cookie.match("(^|; )" + e + "=([^;]*)");
        return t && t[2] ? decodeURIComponent(t[2]) : null;
      }
      function o(e, t, n, r) {
        var o, i;
        a() &&
          ((r = r || "/"),
          (o = ""),
          void 0 !== n &&
            n &&
            ((i = new Date()).setTime(i.getTime() + 864e5 * n),
            (o = "; expires=" + i.toUTCString())),
          (document.cookie =
            encodeURIComponent(e) +
            "=" +
            encodeURIComponent(t) +
            o +
            ";path=" +
            r));
      }
      function a() {
        return !!window.document;
      }
      n.d(t, "b", function() {
        return r;
      }),
        n.d(t, "c", function() {
          return o;
        }),
        n.d(t, "a", function() {
          return a;
        });
    },
    "Jqb/": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return b;
      }),
        n.d(t, "g", function() {
          return g;
        }),
        n.d(t, "h", function() {
          return _;
        }),
        n.d(t, "c", function() {
          return y;
        }),
        n.d(t, "d", function() {
          return E;
        }),
        n.d(t, "e", function() {
          return O;
        }),
        n.d(t, "b", function() {
          return w;
        }),
        n.d(t, "f", function() {
          return C;
        });
      var l = n("mrSG"),
        u = n("q1tI"),
        o = n("X3Ds"),
        p = n("TLQK"),
        m = n("Mgs7"),
        i = n("IjL/"),
        r = n("bxiW"),
        a = n("6Y59"),
        s = n("TyAF"),
        c = n("exH9"),
        d = n("JJA/"),
        h = n.n(d),
        f = n("r64O");
      var v = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.componentWillUnmount = function() {
              this.HideModal();
            }),
            (t.prototype.HideModal = function() {
              this.m_ModalHandle && this.m_ModalHandle.Close(),
                (this.m_ModalHandle = null);
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.active,
                n = e.children;
              return (
                t
                  ? this.m_ModalHandle
                    ? this.m_ModalHandle.Update(n)
                    : (this.m_ModalHandle = C(window).ShowModal(n))
                  : this.HideModal(),
                null
              );
            }),
            t
          );
        })(u.Component),
        b = function(e) {
          var t = e.active,
            n = e.onDismiss,
            r = e.className,
            o = e.modalClassName,
            i = e.children;
          return u.createElement(
            v,
            { active: t },
            u.createElement(
              g,
              { onEscKeypress: n, className: o },
              u.createElement(m.f, { className: r }, i)
            )
          );
        };
      function g(t) {
        var e,
          n = {};
        t.onEscKeypress &&
          ((n.tabIndex = 0),
          (n.onKeyDown = function(e) {
            27 == e.keyCode && t.onEscKeypress();
          }),
          (n.onMouseDown = function(e) {
            e.currentTarget !== e.target ||
              t.bDisableBackgroundDismiss ||
              t.onEscKeypress();
          }),
          (e = function(e) {
            e && (o.c(e, e.ownerDocument.activeElement) || e.focus());
          }));
        var r = ["ModalPosition"];
        return (
          t.className && r.push(t.className),
          t.bDestructiveWarning && r.push("Destructive"),
          u.createElement(
            "div",
            Object(l.a)({ className: r.join(" ") }, n, { ref: e }),
            u.createElement(
              "div",
              { className: "ModalPosition_Content" },
              !t.hideTopBar &&
                u.createElement("div", { className: "ModalPosition_TopBar" }),
              t.onEscKeypress &&
                !t.bHideCloseIcon &&
                u.createElement(
                  "div",
                  { className: "ModalPosition_Dismiss" },
                  u.createElement(
                    "div",
                    { className: "closeButton", onClick: t.onEscKeypress },
                    u.createElement(a.Q, null)
                  )
                ),
              u.createElement(i.a, null, t.children)
            )
          )
        );
      }
      var _ = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { bShowModal: !1 }), (e.m_refParent = u.createRef()), e
            );
          }
          return (
            Object(l.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var e = this.GetBodyElement();
              e && e.classList.add(h.a.BodyNoScroll);
            }),
            (e.prototype.componentWillUnmount = function() {
              var e = this.GetBodyElement();
              e && e.classList.remove(h.a.BodyNoScroll);
            }),
            (e.prototype.GetBodyElement = function() {
              return this.m_refParent.current
                ? this.m_refParent.current.closest("body")
                : null;
            }),
            (e.prototype.render = function() {
              return u.createElement(
                "div",
                {
                  ref: this.m_refParent,
                  className: Object(c.a)(h.a.OverlayModal, this.props.className)
                },
                this.props.children
              );
            }),
            e
          );
        })(u.Component),
        y = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.Cancel = function() {
              this.props.onCancel && this.props.onCancel(),
                this.props.closeModal && this.props.closeModal();
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.strTitle,
                n = e.strDescription,
                r = e.strOKButtonText,
                o = e.strCancelButtonText,
                i = e.bAlertDialog,
                a = e.children,
                s = Object(l.f)(e, [
                  "strTitle",
                  "strDescription",
                  "strOKButtonText",
                  "strCancelButtonText",
                  "bAlertDialog",
                  "children"
                ]),
                c = r || Object(p.f)("#Button_Close");
              return u.createElement(
                E,
                Object(l.a)({}, s),
                u.createElement(m.k, null, " ", t, " "),
                u.createElement(
                  m.b,
                  null,
                  u.createElement(m.c, null, n, a),
                  u.createElement(
                    m.j,
                    null,
                    i
                      ? u.createElement(m.q, null, c)
                      : u.createElement(m.n, {
                          bOKDisabled: this.props.bOKDisabled,
                          strOKText: r,
                          onCancel: this.Cancel,
                          strCancelText: o
                        })
                  )
                )
              );
            }),
            Object(l.c)([r.a], t.prototype, "Cancel", null),
            (t = Object(l.c)([s.a], t))
          );
        })(u.Component),
        E = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.Cancel = function() {
              this.props.onCancel && this.props.onCancel(),
                this.props.closeModal && this.props.closeModal();
            }),
            (t.prototype.OK = function() {
              this.props.bOKDisabled ||
                (this.props.onOK && this.props.onOK(),
                this.props.closeModal && this.props.closeModal());
            }),
            (t.prototype.render = function() {
              return u.createElement(
                g,
                {
                  onEscKeypress: this.Cancel,
                  bDestructiveWarning: this.props.bDestructiveWarning,
                  bDisableBackgroundDismiss: this.props
                    .bDisableBackgroundDismiss,
                  bHideCloseIcon: this.props.bHideCloseIcon
                },
                u.createElement(
                  m.g,
                  {
                    classNameContent: Object(c.a)(
                      "GenericConfirmDialog",
                      this.props.bAllowFullSize && "DialogContentFullSize",
                      this.props.className
                    ),
                    onSubmit: this.OK,
                    bCenterVertically: !0
                  },
                  this.props.children
                )
              );
            }),
            Object(l.c)([r.a], t.prototype, "Cancel", null),
            Object(l.c)([r.a], t.prototype, "OK", null),
            (t = Object(l.c)([s.a], t))
          );
        })(u.Component),
        O = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.render = function() {
              var e = Object(l.a)(
                {
                  strTitle: Object(p.f)("#Error_FailureNotice"),
                  strDescription: Object(p.f)(
                    "#Error_GenericFailureDescription"
                  ),
                  bAlertDialog: !0,
                  bDestructiveWarning: !0,
                  onOK: function() {},
                  onCancel: function() {}
                },
                this.props
              );
              return u.createElement(y, Object(l.a)({}, e));
            }),
            (t = Object(l.c)([s.a], t))
          );
        })(u.Component),
        w = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.componentDidUpdate = function() {
              var e = this.props.ModalManager.modals;
              e && e.length
                ? document.body.classList.add(h.a.BodyNoScrollDialog)
                : document.body.classList.remove(h.a.BodyNoScrollDialog);
            }),
            (t.prototype.componentDidMount = function() {
              this.props.ModalManager.RegisterOverlay(this);
            }),
            (t.prototype.componentWillUnmount = function() {
              this.props.ModalManager.UnregisterOverlay(this);
            }),
            (t.prototype.OnActiveRef = function(e) {
              var t;
              !e || ((t = e.firstChild) && t.focus && t.focus());
            }),
            (t.prototype.render = function() {
              var o = this,
                e = this.props.ModalManager.modals;
              if (!e || !e.length) return null;
              var i = this.props.ModalManager.active_modal,
                t = e.map(function(e, t) {
                  var n = e == i,
                    r = n ? "active" : "inactive";
                  return u.createElement(
                    "div",
                    {
                      className: Object(c.a)("ModalOverlayContent", r),
                      key: "modal-" + t,
                      ref: n ? o.OnActiveRef : null,
                      tabIndex: -1
                    },
                    e.element
                  );
                });
              return u.createElement(
                "div",
                { className: "FullModalOverlay" },
                u.createElement("div", {
                  className: "ModalOverlayContent ModalOverlayBackground"
                }),
                t
              );
            }),
            t
          );
        })(u.Component),
        S = (function() {
          function e() {
            (this.m_bUsePopups = !0),
              (this.m_rgModals = []),
              (this.m_ActiveOverlay = null);
          }
          return (
            (e.prototype.RegisterOverlay = function(e) {
              Object(f.a)(!this.m_ActiveOverlay, "Registering second overlay"),
                (this.m_ActiveOverlay = e);
            }),
            (e.prototype.UnregisterOverlay = function(e) {
              Object(f.a)(this.m_ActiveOverlay == e, "Active overlay mismatch"),
                this.m_ActiveOverlay == e && (this.m_ActiveOverlay = null);
            }),
            (e.prototype.ForceUpdate = function() {
              var e = this;
              this.m_ActiveOverlay
                ? window.setTimeout(function() {
                    return e.m_ActiveOverlay.forceUpdate();
                  }, 1)
                : Object(f.a)(
                    !1,
                    "Modal action was taken, but there is no <DialogOverlay> element to show it in"
                  );
            }),
            Object.defineProperty(e.prototype, "modals", {
              get: function() {
                return this.m_rgModals;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "active_modal", {
              get: function() {
                return this.m_rgModals.length
                  ? this.m_rgModals[this.m_rgModals.length - 1]
                  : void 0;
              },
              enumerable: !1,
              configurable: !0
            }),
            (e.prototype.ShowModal = function(e) {
              var t = this,
                n = { element: e };
              return (
                this.m_rgModals.push(n),
                this.ForceUpdate(),
                {
                  Close: function() {
                    var e = t.m_rgModals.indexOf(n);
                    -1 != e && t.m_rgModals.splice(e, 1), t.ForceUpdate();
                  },
                  Update: function(e) {
                    (n.element = e), t.ForceUpdate();
                  }
                }
              );
            }),
            (e.prototype.SetUsePopups = function(e) {
              this.m_bUsePopups = e;
            }),
            (e.prototype.BUsePopups = function() {
              return this.m_bUsePopups;
            }),
            e
          );
        })();
      function C(e) {
        var t = D.get(e);
        return t || ((t = new S()), D.set(e, t)), t;
      }
      var D = new WeakMap();
    },
    Kw0F: function(e, t, n) {
      "use strict";
      n.d(t, "h", function() {
        return r;
      }),
        n.d(t, "f", function() {
          return o;
        }),
        n.d(t, "a", function() {
          return i;
        }),
        n.d(t, "c", function() {
          return a;
        }),
        n.d(t, "d", function() {
          return s;
        }),
        n.d(t, "b", function() {
          return c;
        }),
        n.d(t, "i", function() {
          return l;
        }),
        n.d(t, "g", function() {
          return u;
        }),
        n.d(t, "e", function() {
          return p;
        });
      n("r64O");
      function r(e) {
        for (var t = e.length; 0 !== t; ) {
          var n = Math.floor(Math.random() * t),
            r = e[--t];
          (e[t] = e[n]), (e[n] = r);
        }
      }
      function o(e, t, n) {
        t < 0 ||
          n < 0 ||
          (n >= e.length && (e[n] = void 0), e.splice(n, 0, e.splice(t, 1)[0]));
      }
      function i(e, t) {
        if (!e && !t) return !0;
        if (!e || !t) return !1;
        if (e.length != t.length) return !1;
        for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function a(e, t) {
        return s(e, function(e) {
          return t == e;
        });
      }
      function s(e, t) {
        var n = e.findIndex(t);
        return 0 <= n && (e.splice(n, 1), !0);
      }
      function c(e, t) {
        return e.filter(function(e) {
          return t !== e;
        });
      }
      function l(e, t, n) {
        for (var r = 0, o = e.length - 1; r <= o; ) {
          var i = Math.floor((r + o) / 2),
            a = n(e[i], t);
          if (a < 0) r = i + 1;
          else if (0 < a) o = i - 1;
          else {
            if (o == i) return i;
            if (i == r) return i < o && n(t, e[i + 1]) < 0 ? i : i + 1;
            r = i;
          }
        }
        return o;
      }
      function u(e, t, n) {
        return (
          e ||
            console.error(
              "array should be defined for us to fill in the missing indexes"
            ),
          e.length < t ? e.concat(Array(t - e.length).fill(n)) : e
        );
      }
      function p(e, t) {
        if (t)
          for (var n = e.length - 1; 0 <= n; --n) {
            var r = e[n];
            if (t(r, n, e)) return r;
          }
      }
    },
    Mgs7: function(e, t, n) {
      "use strict";
      function r(e) {
        var t = e.value,
          n = e.onChange,
          r = e.disabled;
        return o.a.createElement(
          "div",
          {
            className: Object(c.a)(s.a.Toggle, r && s.a.Disabled),
            onClick: function() {
              return !r && n(!t);
            }
          },
          o.a.createElement("div", { className: s.a.ToggleRail }),
          o.a.createElement("div", {
            className: Object(c.a)(
              s.a.ToggleRail,
              s.a.Highlight,
              t ? s.a.On : s.a.Off
            )
          }),
          o.a.createElement("div", {
            className: Object(c.a)(s.a.ToggleSwitch, t ? s.a.On : s.a.Off)
          })
        );
      }
      var h = n("mrSG"),
        f = n("q1tI"),
        o = n.n(f),
        v = n("6Y59"),
        b = n("TLQK"),
        i = n("bxiW"),
        c = n("exH9"),
        a = n("umRa"),
        s = n.n(a),
        l = R("DialogHeader"),
        u = R("DialogSubHeader"),
        p = R("DialogFooter"),
        m = R("DialogLabel _DialogLayout"),
        d = R("DialogBodyText"),
        g = R("DialogBody"),
        _ = (R("DialogInnerBody"), R("DialogBodyNotificationBar")),
        y = R("DialogTwoColLayout _DialogColLayout"),
        E = R("DialogThreeColLayout _DialogColLayout");
      R("DialogTwoThirdColLayout _DialogColLayout"),
        R("DialogColumn _DialogLayout");
      function O(e) {
        var t = e.children,
          n = e.bCenterVertically,
          r = Object(h.f)(e, ["children", "bCenterVertically"]),
          o =
            "DialogContent _DialogLayout" +
            (e.className ? " " + e.className : "");
        return (
          n && (o += " _DialogCenterVertically"),
          f.createElement(
            "div",
            Object(h.a)({}, r, { className: o }),
            f.createElement("div", { className: "DialogContent_InnerWidth" }, t)
          )
        );
      }
      var w = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(h.d)(t, e),
          (t.prototype.OnSubmit = function(e) {
            e.preventDefault(), this.props.onSubmit && this.props.onSubmit(e);
          }),
          (t.prototype.render = function() {
            return f.createElement(
              "form",
              Object(h.a)({}, this.props, { onSubmit: this.OnSubmit })
            );
          }),
          Object(h.c)([i.a], t.prototype, "OnSubmit", null),
          t
        );
      })(f.Component);
      function S(e) {
        var t = e.classNameContent,
          n = e.bCenterVertically,
          r = Object(h.f)(e, ["classNameContent", "bCenterVertically"]);
        return f.createElement(
          O,
          { className: t, bCenterVertically: n },
          f.createElement(w, Object(h.a)({}, r))
        );
      }
      function C(e) {
        e.svgicon;
        var t,
          n = Object(h.f)(e, ["svgicon"]),
          r =
            "DialogButton _DialogLayout Primary" +
            (e.className ? " " + e.className : ""),
          o = void 0 !== e.svgicon;
        return (
          o && ((r += " hasSVGIcon"), (t = e.svgicon)),
          f.createElement(
            "button",
            Object(h.a)({ type: e.onClick ? "button" : "submit" }, n, {
              className: r
            }),
            o && f.createElement(t, null),
            e.children
          )
        );
      }
      function D(e) {
        e.svgicon;
        var t,
          n = Object(h.f)(e, ["svgicon"]),
          r =
            "DialogButton _DialogLayout Secondary" +
            (e.className ? " " + e.className : ""),
          o = void 0 !== e.svgicon;
        return (
          o && ((r += " hasSVGIcon"), (t = e.svgicon)),
          f.createElement(
            "button",
            Object(h.a)({ type: "button" }, n, { className: r }),
            o && f.createElement(t, null),
            e.children
          )
        );
      }
      function M(e) {
        e.svgicon;
        var t,
          n = Object(h.f)(e, ["svgicon"]),
          r =
            "DialogButton _DialogLayout Small" +
            (e.className ? " " + e.className : ""),
          o = void 0 !== e.svgicon;
        return (
          o && ((r += " hasSVGIcon"), (t = e.svgicon)),
          f.createElement(
            "button",
            Object(h.a)({ type: "button" }, n, { className: r }),
            o && f.createElement(t, null),
            e.children
          )
        );
      }
      function x(e) {
        return f.createElement(
          y,
          null,
          f.createElement(
            C,
            { onClick: e.onOK, disabled: e.bOKDisabled },
            e.strOKText || Object(b.f)("#Button_Confirm"),
            " "
          ),
          f.createElement(
            D,
            { onClick: e.onCancel },
            e.strCancelText || Object(b.f)("#Button_Cancel")
          )
        );
      }
      function A(e) {
        return f.createElement(
          E,
          null,
          f.createElement(
            C,
            { onClick: e.onOK, disabled: e.bOKDisabled },
            e.strOKText || Object(b.f)("#Button_Confirm"),
            " "
          ),
          f.createElement(
            C,
            { onClick: e.onUpdate, disabled: e.bUpdateDisabled },
            e.strUpdateText || Object(b.f)("#Button_Update"),
            " "
          ),
          f.createElement(
            D,
            { onClick: e.onCancel },
            e.strCancelText || Object(b.f)("#Button_Cancel")
          )
        );
      }
      var k = (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return (t.state = { checked: e.checked, disabled: e.disabled }), t;
          }
          return (
            Object(h.d)(e, n),
            (e.prototype.componentDidUpdate = function(e) {
              e.checked != this.props.checked &&
                this.props.checked != this.state.checked &&
                this.setState({ checked: this.props.checked }),
                e.disabled != this.props.disabled &&
                  this.props.disabled != this.state.disabled &&
                  this.setState({ disabled: this.props.disabled });
            }),
            (e.prototype.shouldComponentUpdate = function(e, t) {
              return (
                e.label != this.props.label ||
                e.description != this.props.description ||
                e.onChange != this.props.onChange ||
                e.disabled != this.props.disabled ||
                e.checked != this.state.checked ||
                t.checked != this.state.checked
              );
            }),
            Object.defineProperty(e.prototype, "checked", {
              get: function() {
                return this.state.checked;
              },
              enumerable: !1,
              configurable: !0
            }),
            (e.prototype.GetElementProps = function() {
              return {
                tabIndex: this.props.tabIndex || 0,
                onClick: this.Toggle,
                onKeyDown: this.KeyDown
              };
            }),
            (e.prototype.Toggle = function() {
              var e;
              this.props.disabled ||
                ((e = !this.state.checked),
                this.setState({ checked: e }),
                this.props.onChange && this.props.onChange(e));
            }),
            (e.prototype.KeyDown = function(e) {
              32 == e.keyCode &&
                (this.Toggle(), e.preventDefault(), e.stopPropagation());
            }),
            Object(h.c)([i.a], e.prototype, "Toggle", null),
            Object(h.c)([i.a], e.prototype, "KeyDown", null),
            e
          );
        })(f.Component),
        j = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(h.d)(t, e),
            (t.prototype.render = function() {
              var e = "DialogCheckbox" + (this.state.checked ? " Active" : "");
              return (
                1 == this.state.disabled && (e += " Disabled"),
                this.props.label
                  ? f.createElement(
                      "div",
                      Object(h.a)(
                        {
                          className:
                            "DialogCheckbox_Container _DialogLayout " +
                            (this.props.classname ? this.props.classname : "")
                        },
                        this.GetElementProps()
                      ),
                      f.createElement(
                        "div",
                        { className: e },
                        f.createElement(v.h, {
                          color: this.props.color,
                          highlightColor: this.props.highlightColor
                        })
                      ),
                      f.createElement(
                        "div",
                        { className: "DialogToggle_Label" },
                        f.createElement("span", null, this.props.label),
                        this.props.tooltip &&
                          f.createElement(
                            "span",
                            { "data-tooltip-text": this.props.tooltip },
                            " (?)"
                          )
                      ),
                      f.createElement("div", { style: { clear: "left" } }),
                      this.props.description &&
                        f.createElement(
                          "div",
                          { className: "DialogToggle_Description" },
                          this.props.description
                        )
                    )
                  : f.createElement(
                      "div",
                      Object(h.a)({ className: e }, this.GetElementProps()),
                      f.createElement(v.h, null)
                    )
              );
            }),
            t
          );
        })(k),
        I = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(h.d)(t, e),
            (t.prototype.render = function() {
              var e = this.state.checked ? " Active" : "";
              return f.createElement(
                "div",
                Object(h.a)(
                  {
                    className: Object(c.a)(
                      "DialogRoundCheckbox_Container",
                      this.props.classname,
                      this.props.label ? "WithLabel" : ""
                    )
                  },
                  this.GetElementProps()
                ),
                f.createElement(
                  "div",
                  { className: "DialogRoundCheckbox" },
                  f.createElement(
                    "div",
                    { className: "DialogRoundCheckbox_Control" + e },
                    f.createElement(
                      "div",
                      { className: "DialogRoundCheckbox_OuterCircle" },
                      f.createElement("div", {
                        className: "DialogRoundCheckbox_InnerCircle"
                      })
                    )
                  )
                ),
                this.props.label &&
                  f.createElement(
                    "div",
                    { className: "DialogToggle_Label" },
                    f.createElement("span", null, this.props.label),
                    this.props.tooltip &&
                      f.createElement(
                        "span",
                        { "data-tooltip-text": this.props.tooltip },
                        " (?)"
                      )
                  )
              );
            }),
            t
          );
        })(k),
        N = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(h.d)(t, e),
            (t.prototype.OnOffKeyDown = function(e) {
              (37 == e.keyCode && this.state.checked) ||
              (39 == e.keyCode && !this.state.checked)
                ? (this.Toggle(), e.preventDefault(), e.stopPropagation())
                : this.KeyDown(e);
            }),
            (t.prototype.OnNewUIToggle = function(e) {
              e !== this.state.checked && this.Toggle();
            }),
            (t.prototype.render = function() {
              var e =
                "DialogOnOffToggle _DialogInputContainer _DialogLayout " +
                (this.props.classname ? this.props.classname : "");
              return (
                this.props.disabled && (e += " Disabled"),
                f.createElement(
                  "div",
                  {
                    className: e,
                    tabIndex: this.props.tabIndex || 0,
                    onKeyDown: this.OnOffKeyDown
                  },
                  f.createElement(
                    "div",
                    { className: "displayColumn alignSelfCenter" },
                    f.createElement(
                      "div",
                      { className: "DialogToggle_Label" },
                      f.createElement("span", null, this.props.label),
                      this.props.tooltip &&
                        f.createElement(
                          "span",
                          { "data-tooltip-text": this.props.tooltip },
                          " (?)"
                        )
                    ),
                    this.props.description &&
                      f.createElement(
                        "div",
                        { className: "DialogToggle_Description" },
                        this.props.description
                      ),
                    this.props.children
                  ),
                  this.props.useToggleRail
                    ? f.createElement(
                        "div",
                        { className: "DialogOnOffToggle_NewUIContainer" },
                        f.createElement(r, {
                          onChange: this.OnNewUIToggle,
                          value: this.state.checked
                        })
                      )
                    : f.createElement(
                        "div",
                        {
                          className: "DialogOnOffToggle_Control",
                          onClick: this.Toggle
                        },
                        f.createElement(
                          "div",
                          {
                            className:
                              "DialogOnOffToggle_Option Off" +
                              (this.state.checked ? "" : " Active")
                          },
                          Object(b.f)("#Dialog_Off")
                        ),
                        f.createElement(
                          "div",
                          {
                            className:
                              "DialogOnOffToggle_Option On" +
                              (this.state.checked ? " Active" : "")
                          },
                          Object(b.f)("#Dialog_On")
                        )
                      )
                )
              );
            }),
            Object(h.c)([i.a], t.prototype, "OnOffKeyDown", null),
            Object(h.c)([i.a], t.prototype, "OnNewUIToggle", null),
            t
          );
        })(k);
      function R(n) {
        return function(e) {
          var t = n + (e.className ? " " + e.className : "");
          return f.createElement("div", Object(h.a)({}, e, { className: t }));
        };
      }
      var T = n("hJxo"),
        L = n("r64O"),
        B = (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return (
              t.CheckProps(e),
              (t.state = {
                m_CopiedYPos: 0,
                m_bPlayingCopiedAnimation: !1,
                m_bCompletedCopiedAnimation: !1,
                m_bNumberBelowMinRange: !1,
                m_bNumberAboveMaxRange: !1,
                m_bIsNotNumeric: !1,
                m_bIsInvalidURL: !1,
                m_bIsInvalidEmail: !1
              }),
              t
            );
          }
          return (
            Object(h.d)(e, n),
            (e.prototype.componentDidUpdate = function(e) {
              this.CheckProps(this.props);
            }),
            (e.prototype.OnInputRef = function(e) {
              (this.m_elInput = e),
                this.m_elInput &&
                  this.props.focusOnMount &&
                  this.m_elInput.focus();
            }),
            Object.defineProperty(e.prototype, "element", {
              get: function() {
                return this.m_elInput;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "value", {
              get: function() {
                return this.m_elInput && this.m_elInput.value;
              },
              enumerable: !1,
              configurable: !0
            }),
            (e.validateUrl = function(e) {
              return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
                e
              );
            }),
            (e.validateEmail = function(e) {
              return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                e.toLowerCase()
              );
            }),
            (e.prototype.Validate = function() {
              this.setState({
                m_bNumberBelowMinRange:
                  null !== this.props.rangeMin &&
                  void 0 !== this.props.rangeMin &&
                  Number(this.m_elInput.value) < this.props.rangeMin,
                m_bNumberAboveMaxRange:
                  null !== this.props.rangeMax &&
                  void 0 !== this.props.rangeMax &&
                  Number(this.m_elInput.value) > this.props.rangeMax,
                m_bIsNotNumeric:
                  1 == this.props.mustBeNumeric &&
                  isNaN(Number(this.m_elInput.value)),
                m_bIsInvalidURL:
                  1 == this.props.mustBeURL &&
                  !e.validateUrl(this.m_elInput.value),
                m_bIsInvalidEmail:
                  1 == this.props.mustBeEmail &&
                  !e.validateEmail(this.m_elInput.value)
              });
            }),
            (e.prototype.OnChanged = function(e) {
              this.props.onChange && this.props.onChange(e), this.Validate();
            }),
            (e.prototype.OnCopyClick = function(e) {
              var t,
                n = this;
              this.m_elInput &&
                (this.m_elInput.select(),
                (t = this.m_elInput.ownerDocument).queryCommandEnabled(
                  "copy"
                ) &&
                  (t.execCommand("copy"),
                  e.currentTarget.focus(),
                  this.m_CopiedAnimation && this.m_CopiedAnimation.Cancel(),
                  this.setState({ m_bCompletedCopiedAnimation: !1 }),
                  this.setState({ m_CopiedYPos: -4 }, function() {
                    (n.m_CopiedAnimation = new T.b(
                      n,
                      { m_CopiedYPos: -24 },
                      {
                        msDuration: 300,
                        timing: "sine",
                        setStateOnComplete: { m_bCompletedCopiedAnimation: !0 }
                      }
                    )),
                      n.m_CopiedAnimation.Start();
                  })));
            }),
            (e.prototype.OnClearClick = function(e) {
              this.m_elInput &&
                this.m_elInput.value &&
                (Object.getOwnPropertyDescriptor(
                  window.HTMLInputElement.prototype,
                  "value"
                ).set.call(this.m_elInput, ""),
                this.m_elInput.dispatchEvent(
                  new Event("input", { bubbles: !0 })
                ));
            }),
            (e.prototype.CheckProps = function(e) {
              Object(L.a)(
                !(e.bShowClearAction || e.bAlwaysShowClearAction) || e.onChange,
                "In order for bShowClearAction to work correctly, you should be handling onChange and passing value to the Dialog.Input."
              );
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = e.label,
                n = e.explainer,
                r = (e.requiredLabel, e.bShowCopyAction),
                o = e.bShowClearAction,
                i = e.bAlwaysShowClearAction,
                a = e.bIsPassword,
                s = (e.rangeMin,
                e.rangeMax,
                e.mustBeNumeric,
                e.mustBeURL,
                e.mustBeEmail,
                e.focusOnMount,
                e.tooltip,
                Object(h.f)(e, [
                  "label",
                  "explainer",
                  "requiredLabel",
                  "bShowCopyAction",
                  "bShowClearAction",
                  "bAlwaysShowClearAction",
                  "bIsPassword",
                  "rangeMin",
                  "rangeMax",
                  "mustBeNumeric",
                  "mustBeURL",
                  "mustBeEmail",
                  "focusOnMount",
                  "tooltip"
                ])),
                c =
                  "DialogInput DialogInputPlaceholder DialogTextInputBase" +
                  (s.className ? " " + s.className : ""),
                l = "copiedAnimation",
                u = this.state.m_bCompletedCopiedAnimation;
              this.m_CopiedAnimation &&
                (l = "copiedAnimation animationPlaying"),
                u && (l = "copiedAnimation animationComplete");
              var p = {};
              void 0 !== this.state.m_CopiedYPos &&
                (p.transform = "translateY(" + this.state.m_CopiedYPos + "px)");
              var m = void 0;
              n &&
                (m = f.createElement(
                  "div",
                  { className: "DialogLabelExplainer" },
                  n
                ));
              var d = f.createElement(
                f.Fragment,
                null,
                f.createElement(
                  "div",
                  { className: "DialogInput_Wrapper _DialogLayout" },
                  f.createElement(
                    "input",
                    Object(h.a)({ type: a ? "password" : "text" }, s, {
                      className: c,
                      ref: this.OnInputRef,
                      onChange: this.OnChanged
                    })
                  ),
                  r &&
                    f.createElement(
                      "div",
                      { className: "displayRow" },
                      f.createElement(
                        D,
                        {
                          className: "DialogInput_CopyAction Primary",
                          onClick: this.OnCopyClick
                        },
                        Object(b.f)("#Button_CopyLink")
                      ),
                      f.createElement(
                        "div",
                        { style: p, className: l },
                        "Link Copied"
                      )
                    ),
                  (i || (o && s.value)) &&
                    f.createElement(
                      "div",
                      {
                        className: "DialogInput_ClearAction",
                        onClick: this.OnClearClick
                      },
                      f.createElement(v.Q, null)
                    )
                ),
                m
              );
              return t
                ? f.createElement(
                    "div",
                    { className: "DialogInputLabelGroup _DialogLayout " },
                    f.createElement(
                      "label",
                      null,
                      f.createElement(
                        "div",
                        { className: "DialogLabel" },
                        t,
                        " ",
                        this.props.tooltip &&
                          f.createElement(
                            "span",
                            { "data-tooltip-text": this.props.tooltip },
                            " (?)"
                          ),
                        f.createElement(
                          "span",
                          { className: "DialogInputRequirementLabel" },
                          this.props.requiredLabel
                        ),
                        " "
                      ),
                      d,
                      this.state.m_bNumberBelowMinRange
                        ? f.createElement(
                            "div",
                            null,
                            " ",
                            Object(b.f)("#Input_Error_NumberTooSmall"),
                            " "
                          )
                        : null,
                      this.state.m_bNumberAboveMaxRange
                        ? f.createElement(
                            "div",
                            null,
                            " ",
                            Object(b.f)("#Input_Error_NumberTooLarge"),
                            " "
                          )
                        : null,
                      this.state.m_bIsInvalidURL
                        ? f.createElement(
                            "div",
                            null,
                            " ",
                            Object(b.f)("#Input_Error_MustBeURL"),
                            " "
                          )
                        : null,
                      this.state.m_bIsInvalidEmail
                        ? f.createElement(
                            "div",
                            null,
                            " ",
                            Object(b.f)("#Input_Error_MustBeEmail"),
                            " "
                          )
                        : null,
                      this.state.m_bIsNotNumeric
                        ? f.createElement(
                            "div",
                            null,
                            " ",
                            Object(b.f)("#Input_Error_MustBeNumber"),
                            " "
                          )
                        : null
                    )
                  )
                : d;
            }),
            Object(h.c)([i.a], e.prototype, "OnInputRef", null),
            Object(h.c)([i.a], e.prototype, "OnChanged", null),
            Object(h.c)([i.a], e.prototype, "OnCopyClick", null),
            Object(h.c)([i.a], e.prototype, "OnClearClick", null),
            e
          );
        })(f.PureComponent),
        F = (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return (t.state = { value: t.ClampValue(e.value) }), t;
          }
          return (
            Object(h.d)(e, n),
            Object.defineProperty(e.prototype, "value", {
              get: function() {
                return this.state.value;
              },
              enumerable: !1,
              configurable: !0
            }),
            (e.prototype.ClampValue = function(e) {
              return void 0 === e || isNaN(e) || e < this.props.min
                ? this.props.min
                : e > this.props.max
                ? this.props.max
                : e;
            }),
            (e.prototype.BPropsValid = function() {
              return this.props.max > this.props.min;
            }),
            (e.prototype.shouldComponentUpdate = function(e, t) {
              return (
                t.value != this.state.value ||
                (e.max !== this.props.max ||
                  e.min !== this.props.min ||
                  (e.value !== this.state.value &&
                    e.value !== this.props.value) ||
                  e.onChange !== this.props.onChange)
              );
            }),
            (e.prototype.componentDidUpdate = function(e) {
              e.value != this.props.value &&
                this.setState({ value: this.props.value });
            }),
            (e.prototype.OnMouseDown = function(e) {
              (this.m_elSlider = e.currentTarget),
                (this.m_rectSlider = this.m_elSlider.getBoundingClientRect()),
                this.AdjustSliderForClientX(e.clientX),
                this.m_elSlider.ownerDocument.defaultView.addEventListener(
                  "mousemove",
                  this.OnMouseMove
                ),
                this.m_elSlider.ownerDocument.defaultView.addEventListener(
                  "mouseup",
                  this.OnMouseUp
                );
            }),
            (e.prototype.OnMouseMove = function(e) {
              this.AdjustSliderForClientX(e.clientX);
            }),
            (e.prototype.OnMouseUp = function(e) {
              this.m_elSlider.ownerDocument.defaultView.removeEventListener(
                "mousemove",
                this.OnMouseMove
              ),
                this.m_elSlider.ownerDocument.defaultView.removeEventListener(
                  "mouseup",
                  this.OnMouseUp
                );
            }),
            (e.prototype.OnTouchStart = function(e) {
              (this.m_elSlider = e.currentTarget),
                (this.m_rectSlider = this.m_elSlider.getBoundingClientRect()),
                this.AdjustSliderForClientX(e.touches[0].clientX),
                this.m_elSlider.ownerDocument.defaultView.addEventListener(
                  "touchmove",
                  this.OnTouchMove
                ),
                this.m_elSlider.ownerDocument.defaultView.addEventListener(
                  "touchend",
                  this.OnTouchEnd
                );
            }),
            (e.prototype.OnTouchMove = function(e) {
              this.AdjustSliderForClientX(e.touches[0].clientX);
            }),
            (e.prototype.OnTouchEnd = function(e) {
              this.m_elSlider.ownerDocument.defaultView.removeEventListener(
                "touchmove",
                this.OnTouchMove
              ),
                this.m_elSlider.ownerDocument.defaultView.removeEventListener(
                  "touchend",
                  this.OnTouchEnd
                );
            }),
            (e.prototype.OnKeyDown = function(e) {
              var t = 1;
              e.ctrlKey &&
                (t = Math.max(
                  1,
                  Math.floor(0.1 * (this.props.max - this.props.min) + 0.5)
                )),
                37 == e.keyCode
                  ? (this.IncrementValue(-1 * t), e.preventDefault())
                  : 39 == e.keyCode &&
                    (this.IncrementValue(+t), e.preventDefault());
            }),
            (e.prototype.AdjustSliderForClientX = function(e) {
              var t =
                  ((e - this.m_rectSlider.left) /
                    (this.m_rectSlider.right - this.m_rectSlider.left)) *
                    (this.props.max - this.props.min) +
                  this.props.min,
                t = Math.floor(t + 0.5),
                n = this.ClampValue(t);
              n != this.state.value &&
                (this.setState({ value: n }),
                this.props.onChange && this.props.onChange(n));
            }),
            (e.prototype.IncrementValue = function(e) {
              var t = this.ClampValue(this.state.value + e);
              t != this.state.value &&
                (this.setState({ value: t }),
                this.props.onChange && this.props.onChange(t));
            }),
            (e.prototype.render = function() {
              var e,
                t = {},
                n = {};
              this.BPropsValid() &&
                ((e =
                  (100 * (this.state.value - this.props.min)) /
                    (this.props.max - this.props.min) +
                  "%"),
                (t.width = e),
                (n.left = e));
              var r = this.props,
                o = r.label,
                i = r.explainer,
                a = r.tooltip,
                s = (Object(h.f)(r, ["label", "explainer", "tooltip"]), void 0);
              return (
                i &&
                  (s = f.createElement(
                    "div",
                    { className: "DialogLabelExplainer" },
                    i
                  )),
                f.createElement(
                  "div",
                  {
                    className:
                      "DialogSlider_Container _DialogInputContainer _DialogLayout" +
                      (this.props.classname ? " " + this.props.classname : ""),
                    onKeyDown: this.OnKeyDown,
                    tabIndex: this.props.tabIndex || 0
                  },
                  o &&
                    f.createElement(
                      "div",
                      { className: "DialogLabel" },
                      o,
                      Boolean(a) &&
                        f.createElement(
                          "span",
                          { "data-tooltip-text": a },
                          " (?)"
                        )
                    ),
                  f.createElement(
                    "div",
                    {
                      className: "DialogSlider_Slider",
                      onMouseDown: this.OnMouseDown,
                      onTouchStart: this.OnTouchStart
                    },
                    f.createElement("div", {
                      className: "DialogSlider_Value",
                      style: t
                    }),
                    f.createElement("div", {
                      className: "DialogSlider_Grabber",
                      style: n
                    })
                  ),
                  this.props.bShowValue
                    ? f.createElement(
                        "div",
                        { className: "DialogLabelExplainer" },
                        this.state.value
                      )
                    : null,
                  s
                )
              );
            }),
            Object(h.c)([i.a], e.prototype, "OnMouseDown", null),
            Object(h.c)([i.a], e.prototype, "OnMouseMove", null),
            Object(h.c)([i.a], e.prototype, "OnMouseUp", null),
            Object(h.c)([i.a], e.prototype, "OnTouchStart", null),
            Object(h.c)([i.a], e.prototype, "OnTouchMove", null),
            Object(h.c)([i.a], e.prototype, "OnTouchEnd", null),
            Object(h.c)([i.a], e.prototype, "OnKeyDown", null),
            e
          );
        })(f.Component),
        P = n("TtDX"),
        G = (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return (
              (t.m_bRebuildMenu = !1),
              (t.state = {
                iSelectedOption: t.FindActiveOptionIndex(e.selectedOption),
                bOpened: !1
              }),
              t
            );
          }
          return (
            Object(h.d)(e, n),
            (e.prototype.FindAndSetActiveOption = function(e) {
              var t = this.FindActiveOptionIndex(e);
              t !== this.state.iSelectedOption &&
                this.setState({ iSelectedOption: t });
            }),
            (e.prototype.FindActiveOptionIndex = function(e) {
              for (var t = 0; t < this.props.rgOptions.length; t++)
                if (this.props.rgOptions[t].data === e) return t;
            }),
            Object.defineProperty(e.prototype, "value", {
              get: function() {
                return void 0 !== this.state.iSelectedOption
                  ? this.props.rgOptions[this.state.iSelectedOption]
                  : void 0;
              },
              enumerable: !1,
              configurable: !0
            }),
            (e.prototype.SetSelectedOption = function(e) {
              null != e
                ? this.FindAndSetActiveOption(e)
                : this.setState({ iSelectedOption: void 0 });
            }),
            (e.prototype.shouldComponentUpdate = function(e, t, n) {
              if (e.selectedOption != this.props.selectedOption) {
                this.FindActiveOptionIndex(e.selectedOption);
                if (this.state.iSelectedOption !== t.iSelectedOption) return !0;
              }
              if (e.disabled != this.props.disabled) return !0;
              if (e.postDropdownElement != this.props.postDropdownElement)
                return !0;
              if (e.postOptionElement != this.props.postOptionElement)
                return !0;
              if (
                t.bOpened !== this.state.bOpened ||
                t.iSelectedOption !== this.state.iSelectedOption
              )
                return !0;
              for (
                var r = 0,
                  o = [
                    "label",
                    "tooltip",
                    "selectedOption",
                    "tabIndex",
                    "onChange",
                    "strDefaultLabel"
                  ];
                r < o.length;
                r++
              ) {
                var i = o[r];
                if (e[i] !== this.props[i]) return !0;
              }
              return !(
                !this.state.bOpened || !this.DoOptionsDiffer(e.rgOptions)
              );
            }),
            (e.prototype.DoOptionsDiffer = function(e) {
              if (e.length != this.props.rgOptions.length) return !0;
              for (var t = 0; t < e.length; t++)
                if (e[t].label !== this.props.rgOptions[t].label) return !0;
              return !1;
            }),
            (e.prototype.componentDidUpdate = function(e) {
              var t;
              this.DoOptionsDiffer(e.rgOptions)
                ? (void 0 === this.state.iSelectedOption ||
                    ((t = e.rgOptions[this.state.iSelectedOption]) &&
                      this.FindAndSetActiveOption(t.data)),
                  this.state.bOpened
                    ? (this.m_iMenuInstance.SetOnHideCallback(null),
                      this.m_iMenuInstance.Hide(),
                      (this.m_iMenuInstance = void 0),
                      this.BuildMenu())
                    : this.m_iMenuInstance &&
                      (this.m_iMenuInstance.SetOnHideCallback(null),
                      (this.m_iMenuInstance = void 0)))
                : e.selectedOption !== this.props.selectedOption &&
                  this.FindAndSetActiveOption(this.props.selectedOption);
            }),
            (e.prototype.OnInputRef = function(e) {
              this.m_elInput = e;
            }),
            (e.prototype.ToggleMenu = function() {
              this.state.bOpened ? this.HideMenu() : this.ShowMenu();
            }),
            (e.prototype.OnItemSelected = function(e, t) {
              this.HideMenu(),
                this.setState({ iSelectedOption: e }),
                this.props.onChange &&
                  this.props.onChange(
                    void 0 !== e ? this.props.rgOptions[e] : void 0,
                    this
                  );
            }),
            (e.prototype.BuildMenu = function() {
              var e = "DialogMenuPosition";
              this.props.strDropDownClassName &&
                (e += " " + this.props.strDropDownClassName);
              var t = Object(h.a)(
                {
                  bOverlapHorizontal: !0,
                  bMatchWidth: !0,
                  bFitToWindow: !0,
                  strClassName: e,
                  bDisableMouseOverlay: this.props.bDisableMouseOverlay
                },
                this.props.contextMenuPositionOptions
              );
              (this.m_iMenuInstance = Object(P.a)(
                f.createElement(U, {
                  rgOptions: this.props.rgOptions,
                  fnOnItemSelected: this.OnItemSelected,
                  strDropDownItemClassName: this.props.strDropDownItemClassName,
                  renderMenuContainer: this.props.renderMenuContainer,
                  renderMenuItem: this.props.renderMenuItem
                }),
                this.m_elInput,
                t
              )),
                this.m_iMenuInstance.SetOnHideCallback(this.HideMenu);
            }),
            (e.prototype.ShowMenu = function() {
              this.m_iMenuInstance
                ? this.m_iMenuInstance.Show()
                : this.BuildMenu(),
                this.props.onMenuOpened && this.props.onMenuOpened(),
                this.setState({ bOpened: !0 });
            }),
            (e.prototype.HideMenu = function() {
              this.m_iMenuInstance && this.m_iMenuInstance.Hide(),
                this.setState({ bOpened: !1 });
            }),
            (e.prototype.render = function() {
              var e =
                  void 0 !== this.state.iSelectedOption &&
                  this.props.rgOptions[this.state.iSelectedOption],
                t = e ? e.label : this.props.strDefaultLabel,
                n = "DialogDropDown _DialogInputContainer",
                r = "DialogInputLabelGroup _DialogLayout";
              this.state.bOpened && (n += " Active"),
                this.props.disabled && (n += " Disabled"),
                this.props.strClassName && (r += " " + this.props.strClassName);
              var o = f.createElement(
                f.Fragment,
                null,
                this.props.postDropdownElement,
                !this.props.disabled &&
                  f.createElement(
                    "div",
                    { className: "DialogDropDown_Arrow" },
                    f.createElement(v.j, null)
                  ),
                this.props.postOptionElement,
                f.createElement(
                  "div",
                  { className: "DialogDropDown_CurrentDisplay" },
                  t
                )
              );
              return f.createElement(
                "div",
                { className: r },
                this.props.label &&
                  f.createElement(
                    "div",
                    { className: "DialogLabel" },
                    this.props.label,
                    Boolean(this.props.tooltip) &&
                      f.createElement(
                        "span",
                        { "data-tooltip-text": this.props.tooltip },
                        " (?)"
                      )
                  ),
                this.props.fnRenderControl
                  ? this.props.fnRenderControl({
                      className: n,
                      tabIndex: this.props.tabIndex || 0,
                      onClick: this.props.disabled ? void 0 : this.ToggleMenu,
                      htmlElementRef: this.OnInputRef,
                      children: o
                    })
                  : f.createElement(
                      "div",
                      {
                        className: n,
                        tabIndex: this.props.tabIndex || 0,
                        onClick: this.props.disabled ? void 0 : this.ToggleMenu,
                        ref: this.OnInputRef
                      },
                      o
                    )
              );
            }),
            Object(h.c)([i.a], e.prototype, "OnInputRef", null),
            Object(h.c)([i.a], e.prototype, "ToggleMenu", null),
            Object(h.c)([i.a], e.prototype, "OnItemSelected", null),
            Object(h.c)([i.a], e.prototype, "ShowMenu", null),
            Object(h.c)([i.a], e.prototype, "HideMenu", null),
            e
          );
        })(f.Component),
        U = (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return (t.state = { iFocus: 0 }), t;
          }
          return (
            Object(h.d)(e, n),
            (e.prototype.OnItemClicked = function(e) {
              var t = parseInt(
                e.currentTarget.getAttribute("data-dropdown-index")
              );
              (t || 0 === t) &&
                0 <= t &&
                t < this.props.rgOptions.length &&
                this.props.fnOnItemSelected(t, this.props.rgOptions[t]);
            }),
            (e.prototype.render = function() {
              var n = this,
                r = "DialogDropDownMenu_Item";
              this.props.strDropDownItemClassName &&
                (r += " " + this.props.strDropDownItemClassName);
              var o = this.props.renderMenuItem || "div",
                e = this.props.rgOptions.map(function(e, t) {
                  return f.createElement(
                    o,
                    {
                      className: r + " " + e.strOptionClass,
                      key: t,
                      "data-dropdown-index": t,
                      onClick: n.OnItemClicked
                    },
                    e.label
                  );
                }),
                t = this.props.renderMenuContainer || "div";
              return f.createElement(
                t,
                { className: "DialogDropDownMenu _DialogInputContainer" },
                e
              );
            }),
            Object(h.c)([i.a], e.prototype, "OnItemClicked", null),
            e
          );
        })(f.Component),
        H = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { rgOptions: void 0 }), e;
          }
          return (
            Object(h.d)(e, t),
            (e.prototype.OnMenuOpened = function() {
              return Object(h.b)(this, void 0, void 0, function() {
                var t;
                return Object(h.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.state.rgOptions
                        ? [3, 2]
                        : [4, this.props.fnLoadOptions()];
                    case 1:
                      (t = e.sent()),
                        this.setState({ rgOptions: t }),
                        (e.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.componentDidMount = function() {}),
            (e.prototype.render = function() {
              var e = this.props,
                t = (e.fnLoadOptions, e.strInitialDisplay),
                n = e.initialValue,
                r = Object(h.f)(e, [
                  "fnLoadOptions",
                  "strInitialDisplay",
                  "initialValue"
                ]),
                o = this.state.rgOptions;
              return (
                void 0 === o &&
                  (t || n
                    ? ((o = [{ label: t, data: n }]), (r.selectedOption = n))
                    : (o = [])),
                f.createElement(
                  G,
                  Object(h.a)({}, r, {
                    rgOptions: o,
                    onMenuOpened: this.OnMenuOpened
                  })
                )
              );
            }),
            Object(h.c)([i.a], e.prototype, "OnMenuOpened", null),
            e
          );
        })(f.Component),
        W = n("2vnA"),
        z = n("sUmc"),
        V = n("Kw0F"),
        Y = n("YyVH"),
        K = n("UPxs");
      f.Component;
      function X(e, t, n, r) {
        return r
          ? n && e > n.left && e < n.right && t > n.top && t < n.bottom
          : n && e >= n.left && e <= n.right && t >= n.top && t <= n.bottom;
      }
      var q = (function() {
          function e() {
            (this.m_embeddedElement = new z.a("DragGhosts")),
              (this.m_rgDropRegions = []),
              (this.m_rgActiveDropRegions = []);
          }
          return (
            (e.prototype.RegisterDropRegion = function(e) {
              this.m_rgDropRegions.push(e),
                this.m_activeDraggable &&
                  e.BAcceptDraggable(this.m_activeDraggable) &&
                  (e.OnDragStarted(this.m_activeDraggable),
                  this.m_rgActiveDropRegions.push(e));
            }),
            (e.prototype.UnregisterDropRegion = function(e) {
              V.c(this.m_rgDropRegions, e),
                V.c(this.m_rgActiveDropRegions, e),
                this.m_activeDropRegion == e &&
                  ((this.m_activeDropRegion = void 0),
                  this.m_activeDraggable && this.ShowDragGhost());
            }),
            (e.prototype.OnDragGhostRef = function(e) {
              this.m_dragGhost = e;
            }),
            (e.prototype.ShowDragGhost = function() {
              var e = this.m_activeDraggable.renderDragGhost(),
                t = Object(c.a)(
                  e.props.className,
                  !!this.m_activeDropRegion && "DraggedOverActiveDrop"
                ),
                n = f.cloneElement(e, {
                  ref: this.OnDragGhostRef,
                  className: t
                });
              this.m_embeddedElement.ShowElement(
                this.m_activeDraggable.GetDragDocument(),
                n,
                this.m_activeDraggable
              );
            }),
            (e.prototype.HideDragGhost = function() {
              this.m_embeddedElement.HideElement(
                this.m_activeDraggable.GetDragDocument(),
                this.m_activeDraggable
              );
            }),
            (e.prototype.OnDragStart = function(e) {
              (this.m_activeDraggable = e), (this.m_rgActiveDropRegions = []);
              for (var t = 0, n = this.m_rgDropRegions; t < n.length; t++) {
                var r = n[t];
                r.BAcceptDraggable(e) &&
                  (r.OnDragStarted(e), this.m_rgActiveDropRegions.push(r));
              }
              this.ShowDragGhost();
            }),
            (e.prototype.EndDrag = function() {
              if (this.m_activeDraggable) {
                this.HideDragGhost(),
                  this.m_activeDropRegion &&
                    this.m_activeDropRegion.OnDrop(this.m_activeDraggable);
                for (
                  var e = 0, t = this.m_rgActiveDropRegions;
                  e < t.length;
                  e++
                ) {
                  t[e].OnDragEnded(this.m_activeDraggable);
                }
                (this.m_activeDraggable = void 0),
                  (this.m_dropGhost = void 0),
                  (this.m_rgActiveDropRegions = []);
              }
            }),
            (e.prototype.FindBestActiveDropRegionForPoint = function(e, t) {
              var n,
                r,
                o = this.m_activeDraggable.GetDragDocument();
              if (
                ("elementsFromPoint" in o
                  ? (r = o.elementsFromPoint(e, t))
                  : "msElementsFromPoint" in o &&
                    ((n = o.msElementsFromPoint), (r = Array.from(n(e, t)))),
                r)
              ) {
                var i = new Map();
                this.m_rgActiveDropRegions.forEach(function(e) {
                  return i.set(e.GetElement(), e);
                });
                for (var a = 0, s = r; a < s.length; a++) {
                  var c = s[a],
                    l = i.get(c);
                  if (l) return l;
                }
              } else {
                if (
                  this.m_activeDropRegion &&
                  this.m_activeDropRegion.BDraggableInRegion(
                    e,
                    t,
                    this.m_activeDraggable
                  )
                )
                  return this.m_activeDropRegion;
                for (
                  var u = this.m_rgActiveDropRegions.length - 1;
                  0 <= u;
                  u--
                ) {
                  var p = this.m_rgActiveDropRegions[u];
                  if (p.BDraggableInRegion(e, t, this.m_activeDraggable))
                    return p;
                }
              }
              return null;
            }),
            (e.prototype.OnDrag = function(e, t, n) {
              var r,
                o,
                i,
                a,
                s,
                c = this,
                l = void 0 === t ? 0 : t - this.m_dragGhost.state.clientX,
                u = void 0 === n ? 0 : n - this.m_dragGhost.state.clientY;
              e.props.bEnableHTMLDrag &&
                this.m_dragOffWindowTimer &&
                window.clearTimeout(this.m_dragOffWindowTimer),
                this.m_dragGhost &&
                  (this.m_dragGhost.setState({
                    clientX: t,
                    clientY: n,
                    clientXDelta: l,
                    clientYDelta: u,
                    bVisible: !0
                  }),
                  e.props.bEnableHTMLDrag &&
                    (l || u) &&
                    ((r = t + l),
                    (o = n + u),
                    X(
                      t,
                      n,
                      (i = e.GetDragDocument().body.getBoundingClientRect())
                    ) &&
                      !X(r, o, i, !0) &&
                      ((a = Y.c(
                        r,
                        i.left,
                        i.right,
                        i.left - 200,
                        i.right + 200
                      )),
                      (s = Y.c(
                        o,
                        i.top,
                        i.bottom,
                        i.top - 100,
                        i.bottom + 100
                      )),
                      (this.m_dragOffWindowTimer = window.setTimeout(
                        function() {
                          e == c.m_activeDraggable && c.OnDrag(e, a, s);
                        },
                        50
                      )))));
              var p = this.FindBestActiveDropRegionForPoint(t, n);
              !!this.m_activeDropRegion != !!p &&
                (this.ShowDragGhost(),
                this.m_dropGhost ||
                  (this.m_dropGhost = this.m_activeDraggable.renderDropGhost())),
                this.m_activeDropRegion &&
                  this.m_activeDropRegion != p &&
                  this.m_activeDropRegion.OnDragLeave(this.m_activeDraggable),
                p &&
                  this.m_activeDropRegion != p &&
                  p.OnDragEnter(this.m_activeDraggable, this.m_dropGhost),
                (this.m_activeDropRegion = p),
                this.m_activeDropRegion &&
                  this.m_activeDropRegion.OnDragMove(
                    t,
                    n,
                    this.m_activeDraggable
                  );
            }),
            Object(h.c)([i.a], e.prototype, "OnDragGhostRef", null),
            e
          );
        })(),
        J = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_DragInfo = {
                bStarted: !1,
                startClientX: void 0,
                startClientY: void 0,
                startOffsetX: void 0,
                startOffsetY: void 0,
                startWidth: void 0,
                startHeight: void 0,
                ownerWin: void 0
              }),
              (e.m_divRef = f.createRef()),
              e
            );
          }
          return (
            Object(h.d)(e, t),
            (e.prototype.GetDragDocument = function() {
              return (
                this.m_DragInfo.ownerWin && this.m_DragInfo.ownerWin.document
              );
            }),
            (e.prototype.RecordDragStart = function(e, t, n) {
              (this.m_DragInfo.startClientX = t),
                (this.m_DragInfo.startClientY = n);
              var r = e.getBoundingClientRect();
              (this.m_DragInfo.startOffsetX = t - r.left),
                (this.m_DragInfo.startOffsetY = n - r.top),
                (this.m_DragInfo.startWidth = r.width),
                (this.m_DragInfo.startHeight = r.height),
                (this.m_DragInfo.ownerWin = e.ownerDocument.defaultView);
            }),
            (e.prototype.ProcessDragMove = function(e) {
              var t,
                n =
                  "touches" in (t = e)
                    ? [t.touches[0].clientX, t.touches[0].clientY]
                    : [t.clientX, t.clientY],
                r = n[0],
                o = n[1];
              if (this.m_DragInfo.bStarted) {
                if (this.props.bEnableHTMLDrag && 0 == r && 0 == o) return;
                this.props.coordinator.OnDrag(this, r, o);
              } else
                25 <=
                  Math.pow(r - this.m_DragInfo.startClientX, 2) +
                    Math.pow(o - this.m_DragInfo.startClientY, 2) &&
                  ((this.m_DragInfo.bStarted = !0),
                  this.forceUpdate(),
                  this.props.fnOnDragStart && this.props.fnOnDragStart(),
                  this.props.coordinator.OnDragStart(this),
                  this.props.coordinator.OnDrag(this, r, o));
            }),
            (e.prototype.OnMouseDown = function(e) {
              this.m_DragInfo.bStarted ||
                0 != e.button ||
                (this.RecordDragStart(e.currentTarget, e.clientX, e.clientY),
                this.m_DragInfo.ownerWin.addEventListener(
                  "mousemove",
                  this.ProcessDragMove
                ),
                this.m_DragInfo.ownerWin.addEventListener(
                  "mouseup",
                  this.OnMouseUp
                ));
            }),
            (e.prototype.OnMouseUp = function(e) {
              this.m_DragInfo.ownerWin.removeEventListener(
                "mousemove",
                this.ProcessDragMove
              ),
                this.m_DragInfo.ownerWin.removeEventListener(
                  "mouseup",
                  this.OnMouseUp
                ),
                this.ResetDragState();
            }),
            (e.prototype.OnTouchStart = function(e) {
              this.m_DragInfo.bStarted ||
                (this.RecordDragStart(
                  e.currentTarget,
                  e.touches[0].clientX,
                  e.touches[0].clientY
                ),
                this.m_DragInfo.ownerWin.addEventListener(
                  "touchmove",
                  this.ProcessDragMove
                ),
                this.m_DragInfo.ownerWin.addEventListener(
                  "touchend",
                  this.OnTouchEnd
                ));
            }),
            (e.prototype.OnTouchEnd = function(e) {
              this.m_DragInfo.ownerWin.removeEventListener(
                "touchmove",
                this.ProcessDragMove
              ),
                this.m_DragInfo.ownerWin.removeEventListener(
                  "touchend",
                  this.OnTouchEnd
                ),
                this.ResetDragState();
            }),
            (e.prototype.ResetDragState = function() {
              this.m_DragInfo.bStarted &&
                (this.props.coordinator.EndDrag(),
                this.props.fnOnDragEnd && this.props.fnOnDragEnd()),
                (this.m_DragInfo.bStarted = !1),
                (this.m_DragInfo.startClientX = void 0),
                (this.m_DragInfo.startClientY = void 0),
                (this.m_DragInfo.startOffsetX = void 0),
                (this.m_DragInfo.startOffsetY = void 0),
                (this.m_DragInfo.ownerWin = void 0),
                this.forceUpdate();
            }),
            (e.prototype.OnHTMLDragStart = function(n) {
              (n.dataTransfer.effectAllowed = "copyMove"),
                this.props.strHTMLDragData &&
                  this.props.strHTMLDragData.forEach(function(e, t) {
                    return n.dataTransfer.setData(t, e);
                  }),
                n.dataTransfer.getData("text/plain") ||
                  n.dataTransfer.setData(
                    "text/plain",
                    this.props.data.toString()
                  );
              var e = new Image();
              n.dataTransfer.setDragImage(e, 0, 0),
                this.RecordDragStart(n.currentTarget, n.clientX, n.clientY);
            }),
            (e.prototype.OnHTMLDragEnd = function() {
              this.ResetDragState();
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = (e.coordinator, e.data, e.bEnableHTMLDrag),
                n = (e.strHTMLDragData,
                e.fnOnDragStart,
                e.fnOnDragEnd,
                e.fnRenderDragGhost,
                e.fnRenderDropGhost,
                e.className),
                r = e.strActiveClassName,
                o = e.children,
                i = Object(h.f)(e, [
                  "coordinator",
                  "data",
                  "bEnableHTMLDrag",
                  "strHTMLDragData",
                  "fnOnDragStart",
                  "fnOnDragEnd",
                  "fnRenderDragGhost",
                  "fnRenderDropGhost",
                  "className",
                  "strActiveClassName",
                  "children"
                ]),
                a = {},
                s = n || "DialogDraggable";
              return (
                this.m_DragInfo.bStarted
                  ? ((s = Object(c.a)(s, r || "DraggedOut")),
                    t &&
                      (a = {
                        onDrag: this.ProcessDragMove,
                        onDragEnd: this.OnHTMLDragEnd
                      }))
                  : (a = t
                      ? {
                          onDragStart: this.OnHTMLDragStart,
                          onDrag: this.ProcessDragMove,
                          onDragEnd: this.OnHTMLDragEnd
                        }
                      : {
                          onMouseDown: this.OnMouseDown,
                          onTouchStart: this.OnTouchStart
                        }),
                f.createElement(
                  "div",
                  Object(h.a)({ ref: this.m_divRef, className: s }, a, i, {
                    draggable: t
                  }),
                  o
                )
              );
            }),
            (e.prototype.renderDropGhost = function() {
              return this.props.fnRenderDropGhost
                ? this.props.fnRenderDropGhost()
                : f.createElement(Q, { elContent: this.GetClone() });
            }),
            (e.prototype.renderDragGhost = function() {
              return this.props.fnRenderDragGhost
                ? this.props.fnRenderDragGhost()
                : f.createElement(Z, {
                    elContent: this.GetClone(),
                    offsetX: this.m_DragInfo.startOffsetX,
                    offsetY: this.m_DragInfo.startOffsetY,
                    width: this.m_DragInfo.startWidth,
                    height: this.m_DragInfo.startHeight
                  });
            }),
            (e.prototype.GetClone = function() {
              var e,
                t = this.m_divRef.current;
              if (t && t.childElementCount)
                if (1 == t.childElementCount)
                  e = t.firstElementChild.cloneNode(!0);
                else {
                  e = document.createElement("div");
                  for (var n = t.firstChild; n; n = n.nextSibling)
                    e.appendChild(n.cloneNode(!0));
                }
              return e;
            }),
            Object(h.c)([i.a], e.prototype, "ProcessDragMove", null),
            Object(h.c)([i.a], e.prototype, "OnMouseDown", null),
            Object(h.c)([i.a], e.prototype, "OnMouseUp", null),
            Object(h.c)([i.a], e.prototype, "OnTouchStart", null),
            Object(h.c)([i.a], e.prototype, "OnTouchEnd", null),
            Object(h.c)([W.k], e.prototype, "ResetDragState", null),
            Object(h.c)([i.a], e.prototype, "OnHTMLDragStart", null),
            Object(h.c)([i.a], e.prototype, "OnHTMLDragEnd", null),
            e
          );
        })(f.Component),
        Q = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(h.d)(t, e),
            (t.prototype.OnRef = function(e) {
              e && e.appendChild(this.props.elContent);
            }),
            (t.prototype.render = function() {
              return f.createElement("div", {
                className: "DialogDraggable_DropGhost",
                ref: this.OnRef
              });
            }),
            Object(h.c)([i.a], t.prototype, "OnRef", null),
            t
          );
        })(f.Component),
        Z = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                clientX: void 0,
                clientY: void 0,
                bVisible: !0,
                clientXDelta: void 0,
                clientYDelta: void 0
              }),
              e
            );
          }
          return (
            Object(h.d)(e, t),
            (e.prototype.OnRef = function(e) {
              e && e.appendChild(this.props.elContent);
            }),
            (e.prototype.CalculateRotationDegrees = function(e) {
              return !e || Math.abs(e) < 4
                ? 0
                : (0 < e ? 7.5 : -7.5) * Math.sqrt(Math.abs(e));
            }),
            (e.prototype.render = function() {
              if (
                !this.state.bVisible ||
                void 0 === this.state.clientX ||
                void 0 === this.state.clientY
              )
                return f.createElement("div", null);
              var e = {
                  left: this.state.clientX - (this.props.offsetX || 0),
                  top: this.state.clientY - (this.props.offsetY || 0),
                  width: this.props.width || "auto",
                  height: this.props.height || "auto",
                  perspective: "600px"
                },
                t = Y.c(
                  this.CalculateRotationDegrees(this.state.clientYDelta),
                  -90,
                  90,
                  2,
                  0
                ),
                n = {
                  transform:
                    "rotateX(" +
                    this.CalculateRotationDegrees(
                      -1 * this.state.clientYDelta
                    ) +
                    "deg) rotateY( " +
                    this.CalculateRotationDegrees(this.state.clientXDelta) +
                    "deg)",
                  transition: "transform .16s ease-out, filter .16s ease-out",
                  filter: "brightness(" + t + ")"
                },
                r = this.props.className || "DialogDraggable_DragGhost";
              return f.createElement(
                "div",
                { className: r, style: e },
                f.createElement("div", { ref: this.OnRef, style: n })
              );
            }),
            Object(h.c)([i.a], e.prototype, "OnRef", null),
            e
          );
        })(f.Component),
        $ = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(h.d)(t, e),
            (t.prototype.BDraggableInRegion = function(e, t, n) {
              var r = this.GetClientRect();
              return (
                !!r &&
                (e >= r.left &&
                  e <= r.right &&
                  t >= r.top - 20 &&
                  t <= r.bottom + 20)
              );
            }),
            t
          );
        })(
          (function(n) {
            function e(e) {
              var t = n.call(this, e) || this;
              return (t.m_divRef = f.createRef()), (t.state = {}), t;
            }
            return (
              Object(h.d)(e, n),
              (e.prototype.componentDidMount = function() {
                this.props.coordinator.RegisterDropRegion(this);
              }),
              (e.prototype.componentWillUnmount = function() {
                this.props.coordinator.UnregisterDropRegion(this);
              }),
              (e.prototype.OnDragStarted = function(e) {
                this.setState({ bDraggableActive: !0 });
              }),
              (e.prototype.OnDragEnded = function(e) {
                this.setState({ bDraggableActive: !1 });
              }),
              (e.prototype.OnDragEnter = function(e, t) {
                this.setState({ dropGhost: t }),
                  this.props.fnOnDragEnter && this.props.fnOnDragEnter(e);
              }),
              (e.prototype.OnDragLeave = function(e) {
                this.setState({ dropGhost: void 0 }),
                  this.props.fnOnDragLeave && this.props.fnOnDragLeave(e);
              }),
              (e.prototype.OnDragMove = function(e, t, n) {}),
              (e.prototype.OnDrop = function(e) {
                this.setState({ dropGhost: void 0 }), this.props.fnOnDrop(e);
              }),
              (e.prototype.BAcceptDraggable = function(e) {
                return (
                  !this.props.fnBAcceptDraggable ||
                  this.props.fnBAcceptDraggable(e)
                );
              }),
              (e.prototype.BDraggableInRegion = function(e, t, n) {
                return X(e, t, this.GetClientRect());
              }),
              (e.prototype.GetElement = function() {
                return this.m_divRef.current;
              }),
              (e.prototype.GetClientRect = function() {
                return (
                  this.m_divRef.current &&
                  this.m_divRef.current.getBoundingClientRect()
                );
              }),
              (e.prototype.render = function() {
                var e = this.props,
                  t = (e.coordinator,
                  e.fnBAcceptDraggable,
                  e.fnOnDrop,
                  e.fnOnDragEnter,
                  e.fnOnDragLeave,
                  e.className),
                  n = e.strActiveClassName,
                  r = e.children,
                  o = Object(h.f)(e, [
                    "coordinator",
                    "fnBAcceptDraggable",
                    "fnOnDrop",
                    "fnOnDragEnter",
                    "fnOnDragLeave",
                    "className",
                    "strActiveClassName",
                    "children"
                  ]),
                  i = Object(c.a)(
                    t || "DialogDropRegion",
                    this.state.bDraggableActive && (n || "Active")
                  );
                return f.createElement(
                  K.a,
                  Object(h.a)(
                    { htmlElementRef: this.m_divRef, className: i },
                    o,
                    { navStop: o.navStop || !!o.onClick }
                  ),
                  this.state.dropGhost,
                  r
                );
              }),
              e
            );
          })(f.Component)
        ),
        ee = (f.Component,
        f.Component,
        (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_refTextArea = f.createRef()),
              (e.m_cEntryLength = Number.MAX_VALUE),
              e
            );
          }
          return (
            Object(h.d)(e, t),
            Object.defineProperty(e.prototype, "textarea", {
              get: function() {
                return this.m_refTextArea.current;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "value", {
              get: function() {
                return (
                  this.m_refTextArea.current && this.m_refTextArea.current.value
                );
              },
              enumerable: !1,
              configurable: !0
            }),
            (e.prototype.focus = function() {
              this.m_refTextArea.current.focus();
            }),
            (e.prototype.InternalOnInput = function() {
              var e,
                t,
                n = this.m_refTextArea.current,
                r = this.GetMinHeight(),
                o = this.GetMaxHeight(),
                i = n.value.length;
              void 0 === this.m_nTextAreaPadding && this.CalculatePadding(),
                i < this.m_cEntryLength &&
                  ((e = window.scrollY), (n.style.height = r + "px")),
                n.scrollHeight > o
                  ? ((n.style.height = o + "px"), (n.style.overflow = "auto"))
                  : n.scrollHeight != n.clientHeight &&
                    ((t = Math.max(n.scrollHeight, r)),
                    (n.style.height = t - this.m_nTextAreaPadding + "px"),
                    "auto" == n.style.overflow &&
                      (n.style.overflow = "hidden")),
                void 0 !== e && window.scrollTo(window.scrollX, e),
                (this.m_cEntryLength = i);
            }),
            (e.prototype.CalculatePadding = function() {
              var e = getComputedStyle(this.m_refTextArea.current);
              this.m_nTextAreaPadding =
                parseFloat(e.paddingTop) + parseFloat(e.paddingBottom);
            }),
            (e.prototype.GetMinHeight = function() {
              return this.props.nMinHeight || 20;
            }),
            (e.prototype.GetMaxHeight = function() {
              return this.props.nMaxHeight || 500;
            }),
            (e.prototype.DeferredInternalOnInput = function() {
              window.setTimeout(this.InternalOnInput, 1);
            }),
            (e.prototype.OnKeyUp = function(e) {
              this.InternalOnInput(),
                this.props.onKeyUp && this.props.onKeyUp(e);
            }),
            (e.prototype.OnBlur = function(e) {
              this.DeferredInternalOnInput(),
                this.props.onBlur && this.props.onBlur(e);
            }),
            (e.prototype.OnClick = function(e) {
              this.InternalOnInput(),
                this.props.onClick && this.props.onClick(e);
            }),
            (e.prototype.OnPaste = function(e) {
              this.DeferredInternalOnInput(),
                this.props.onPaste && this.props.onPaste(e);
            }),
            (e.prototype.OnCut = function(e) {
              this.InternalOnInput(), this.props.onCut && this.props.onCut(e);
            }),
            (e.prototype.componentDidMount = function() {
              (this.m_refTextArea.current.style.overflow = "hidden"),
                (this.m_refTextArea.current.style.resize = "none"),
                this.InternalOnInput();
            }),
            (e.prototype.componentDidUpdate = function(e) {
              (e.nMinHeight == this.props.nMinHeight &&
                e.nMaxHeight == this.props.nMaxHeight) ||
                (this.m_cEntryLength = Number.MAX_VALUE),
                this.m_refTextArea.current.value.length !=
                  this.m_cEntryLength && this.InternalOnInput();
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = (e.nMinHeight,
                e.nMaxHeight,
                Object(h.f)(e, ["nMinHeight", "nMaxHeight"]));
              return f.createElement(
                "textarea",
                Object(h.a)({}, t, {
                  ref: this.m_refTextArea,
                  onKeyUp: this.OnKeyUp,
                  onBlur: this.OnBlur,
                  onClick: this.OnClick,
                  onPaste: this.OnPaste,
                  onCut: this.OnCut
                })
              );
            }),
            Object(h.c)([i.a], e.prototype, "InternalOnInput", null),
            Object(h.c)([i.a], e.prototype, "OnKeyUp", null),
            Object(h.c)([i.a], e.prototype, "OnBlur", null),
            Object(h.c)([i.a], e.prototype, "OnClick", null),
            Object(h.c)([i.a], e.prototype, "OnPaste", null),
            Object(h.c)([i.a], e.prototype, "OnCut", null),
            e
          );
        })(f.Component));
      n.d(t, "k", function() {
        return l;
      }),
        n.d(t, "u", function() {
          return u;
        }),
        n.d(t, "j", function() {
          return p;
        }),
        n.d(t, "m", function() {
          return m;
        }),
        n.d(t, "c", function() {
          return d;
        }),
        n.d(t, "b", function() {
          return g;
        }),
        n.d(t, "v", function() {
          return y;
        }),
        n.d(t, "f", function() {
          return O;
        }),
        n.d(t, "g", function() {
          return S;
        }),
        n.d(t, "q", function() {
          return C;
        }),
        n.d(t, "d", function() {
          return D;
        }),
        n.d(t, "t", function() {
          return M;
        }),
        n.d(t, "n", function() {
          return x;
        }),
        n.d(t, "o", function() {
          return A;
        }),
        n.d(t, "e", function() {
          return j;
        }),
        n.d(t, "r", function() {
          return I;
        }),
        n.d(t, "p", function() {
          return N;
        }),
        n.d(t, "l", function() {
          return B;
        }),
        n.d(t, "s", function() {
          return F;
        }),
        n.d(t, "h", function() {
          return G;
        }),
        n.d(t, "i", function() {
          return H;
        }),
        n.d(t, "a", function() {
          return ee;
        });
    },
    OS8t: function(e, t, n) {
      "use strict";
      n.d(t, "d", function() {
        return o;
      }),
        n.d(t, "h", function() {
          return i;
        }),
        n.d(t, "e", function() {
          return a;
        }),
        n.d(t, "c", function() {
          return s;
        }),
        n.d(t, "g", function() {
          return c;
        }),
        n.d(t, "b", function() {
          return l;
        }),
        n.d(t, "f", function() {
          return u;
        }),
        n.d(t, "a", function() {
          return p;
        });
      var r = n("mrSG"),
        h = n("hRO2"),
        o = h.BinaryReader.prototype,
        i = h.BinaryWriter.prototype;
      function a(e) {
        var t = {},
          n = e.fields;
        for (var r in n) {
          var o = n[r];
          t[o.n] = o;
        }
        return t;
      }
      function s(e, a) {
        var t = e.proto,
          s = e.fields,
          c = new t();
        for (var n in s)
          !(function(e) {
            var t = s[e],
              n = t.n,
              r = t.c,
              o = t.r;
            t.d, t.q;
            if (!a.hasOwnProperty(e)) return;
            var i = a[e];
            r
              ? o
                ? h.Message.setRepeatedWrapperField(
                    c,
                    n,
                    (Array.isArray(i) ? i : []).map(function(e) {
                      return r.fromObject(e);
                    })
                  )
                : h.Message.setWrapperField(c, n, r.fromObject(i))
              : h.Message.setField(c, n, i);
          })(n);
        return c;
      }
      function c(e, t, n) {
        e.proto;
        var r = e.fields,
          o = {};
        for (var i in r) {
          var a,
            s,
            c = r[i],
            l = c.n,
            u = c.c,
            p = c.r,
            m = c.d,
            d = c.q;
          u
            ? p
              ? (o[i] = h.Message.toObjectList(
                  h.Message.getRepeatedWrapperField(n, u, l),
                  u.toObject,
                  t
                ))
              : (a = h.Message.getWrapperField(n, u, l, d ? 1 : 0)) &&
                (o[i] = u.toObject(t, a))
            : (null ===
                (s = h.Message.getFieldWithDefault(
                  n,
                  l,
                  void 0 !== m ? m : null
                )) &&
                !d) ||
              (o[i] = s);
        }
        return t && (o.$jspbMessageInstance = n), o;
      }
      function l(e, t, n) {
        for (; n.nextField() && !n.isEndGroup(); ) {
          var r,
            o,
            i,
            a,
            s,
            c = e[n.getFieldNumber()];
          c
            ? ((r = c.n),
              (o = c.c),
              (i = c.r),
              c.d,
              c.q,
              (a = c.br),
              o
                ? ((s = new o()),
                  n.readMessage(s, o.deserializeBinaryFromReader),
                  i
                    ? h.Message.addToRepeatedWrapperField(t, r, s, o)
                    : h.Message.setWrapperField(t, r, s))
                : a
                ? ((s = a.call(n)),
                  i
                    ? h.Message.addToRepeatedField(t, r, s)
                    : h.Message.setField(t, r, s))
                : (console.assert(
                    a,
                    "Reader func not set for field number " +
                      r +
                      " in class " +
                      o
                  ),
                  n.skipField()))
            : n.skipField();
        }
        return t;
      }
      function u(e, t, n) {
        var r = e.fields;
        for (var o in r) {
          var i,
            a = r[o],
            s = a.n,
            c = a.c,
            l = a.r,
            u = (a.d, a.q),
            p = a.bw;
          c
            ? l
              ? (((i = h.Message.getRepeatedWrapperField(t, c, s)) &&
                  i.length) ||
                  u) &&
                n.writeRepeatedMessage(s, i, c.serializeBinaryToWriter)
              : (i = h.Message.getWrapperField(t, c, s, u ? 1 : 0)) &&
                n.writeMessage(s, i, c.serializeBinaryToWriter)
            : p
            ? void 0 !== (i = h.Message.getField(t, s)) && p.call(n, s, i)
            : console.assert(
                p,
                "Writer func not set for field number " + s + " in class " + c
              );
        }
      }
      function p(e) {
        var t = e.proto;
        for (var n in e.fields) {
          var r = e.fields[n],
            o = r.n,
            i = r.c,
            a = r.r,
            s = r.d;
          r.q;
          r.hasOwnProperty("d")
            ? (t.prototype[n] = m(h.Message.getFieldWithDefault, o, s))
            : (t.prototype[n] = i
                ? a
                  ? m(h.Message.getRepeatedWrapperField, i, o)
                  : (function(t, n) {
                      return function(e) {
                        return (
                          void 0 === e && (e = !0),
                          h.Message.getWrapperField(this, t, n, e ? 1 : 0)
                        );
                      };
                    })(i, o)
                : m(h.Message.getField, o)),
            (t.prototype["set_" + n] = d(
              i
                ? a
                  ? h.Message.setRepeatedWrapperField
                  : h.Message.setWrapperField
                : h.Message.setField,
              o
            )),
            a &&
              (t.prototype["add_" + n] = (function(n, r) {
                return r
                  ? function(e, t) {
                      return h.Message.addToRepeatedWrapperField(
                        this,
                        n,
                        e,
                        r,
                        t
                      );
                    }
                  : function(e, t) {
                      h.Message.addToRepeatedField(this, n, e, t);
                    };
              })(o, i));
        }
      }
      function m(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        return function() {
          return e.apply(void 0, Object(r.g)([this], t));
        };
      }
      function d(t, n) {
        return function(e) {
          return t(this, n, e);
        };
      }
    },
    "RD/U": function(e, t, n) {
      "use strict";
      n.d(t, "c", function() {
        return r;
      }),
        n.d(t, "d", function() {
          return c;
        }),
        n.d(t, "a", function() {
          return l;
        }),
        n.d(t, "b", function() {
          return p;
        });
      var o = n("mrSG"),
        i = n("hRO2"),
        a = n("OS8t"),
        s = i.Message;
      var r = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.v4 || a.a(r.M()),
              s.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(o.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      v4: { n: 1, br: a.d.readFixed32, bw: a.h.writeFixed32 },
                      v6: { n: 2, br: a.d.readBytes, bw: a.h.writeBytes }
                    }
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function() {
              return r.sm_mbf || (r.sm_mbf = a.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              return a.g(r.M(), e, t);
            }),
            (r.fromObject = function(e) {
              return a.c(r.M(), e);
            }),
            (r.deserializeBinary = function(e) {
              var t = new i.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new i.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CMsgIPAddress";
            }),
            r
          );
        })(s),
        c = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.steamid || a.a(r.M()),
              s.initialize(t, e, 0, -1, [27], null),
              t
            );
          }
          return (
            Object(o.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      steamid: {
                        n: 1,
                        br: a.d.readFixed64String,
                        bw: a.h.writeFixed64String
                      },
                      client_sessionid: {
                        n: 2,
                        br: a.d.readInt32,
                        bw: a.h.writeInt32
                      },
                      routing_appid: {
                        n: 3,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32
                      },
                      jobid_source: {
                        n: 10,
                        d: "18446744073709551615",
                        br: a.d.readFixed64String,
                        bw: a.h.writeFixed64String
                      },
                      jobid_target: {
                        n: 11,
                        d: "18446744073709551615",
                        br: a.d.readFixed64String,
                        bw: a.h.writeFixed64String
                      },
                      target_job_name: {
                        n: 12,
                        br: a.d.readString,
                        bw: a.h.writeString
                      },
                      seq_num: { n: 24, br: a.d.readInt32, bw: a.h.writeInt32 },
                      eresult: {
                        n: 13,
                        d: 2,
                        br: a.d.readInt32,
                        bw: a.h.writeInt32
                      },
                      error_message: {
                        n: 14,
                        br: a.d.readString,
                        bw: a.h.writeString
                      },
                      ip: { n: 15, br: a.d.readUint32, bw: a.h.writeUint32 },
                      ip_v6: { n: 29, br: a.d.readBytes, bw: a.h.writeBytes },
                      auth_account_flags: {
                        n: 16,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32
                      },
                      token_source: {
                        n: 22,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32
                      },
                      admin_spoofing_user: {
                        n: 23,
                        br: a.d.readBool,
                        bw: a.h.writeBool
                      },
                      transport_error: {
                        n: 17,
                        d: 1,
                        br: a.d.readInt32,
                        bw: a.h.writeInt32
                      },
                      messageid: {
                        n: 18,
                        d: "18446744073709551615",
                        br: a.d.readUint64String,
                        bw: a.h.writeUint64String
                      },
                      publisher_group_id: {
                        n: 19,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32
                      },
                      sysid: { n: 20, br: a.d.readUint32, bw: a.h.writeUint32 },
                      trace_tag: {
                        n: 21,
                        br: a.d.readUint64String,
                        bw: a.h.writeUint64String
                      },
                      webapi_key_id: {
                        n: 25,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32
                      },
                      is_from_external_source: {
                        n: 26,
                        br: a.d.readBool,
                        bw: a.h.writeBool
                      },
                      forward_to_sysid: {
                        n: 27,
                        r: !0,
                        q: !0,
                        br: a.d.readUint32,
                        bw: a.h.writeRepeatedUint32
                      },
                      cm_sysid: {
                        n: 28,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32
                      },
                      wg_token: {
                        n: 30,
                        br: a.d.readString,
                        bw: a.h.writeString
                      },
                      launcher_type: {
                        n: 31,
                        d: 0,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32
                      },
                      realm: {
                        n: 32,
                        d: 0,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32
                      }
                    }
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function() {
              return r.sm_mbf || (r.sm_mbf = a.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              return a.g(r.M(), e, t);
            }),
            (r.fromObject = function(e) {
              return a.c(r.M(), e);
            }),
            (r.deserializeBinary = function(e) {
              var t = new i.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new i.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CMsgProtoBufHeader";
            }),
            r
          );
        })(s),
        l = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.appid || a.a(r.M()),
              s.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(o.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      appid: { n: 1, br: a.d.readUint32, bw: a.h.writeUint32 },
                      name: { n: 2, br: a.d.readString, bw: a.h.writeString },
                      icon: { n: 3, br: a.d.readString, bw: a.h.writeString },
                      logo: { n: 4, br: a.d.readString, bw: a.h.writeString },
                      logo_small: {
                        n: 5,
                        br: a.d.readString,
                        bw: a.h.writeString
                      },
                      tool: { n: 6, br: a.d.readBool, bw: a.h.writeBool },
                      demo: { n: 7, br: a.d.readBool, bw: a.h.writeBool },
                      media: { n: 8, br: a.d.readBool, bw: a.h.writeBool },
                      community_visible_stats: {
                        n: 9,
                        br: a.d.readBool,
                        bw: a.h.writeBool
                      },
                      friendly_name: {
                        n: 10,
                        br: a.d.readString,
                        bw: a.h.writeString
                      },
                      propagation: {
                        n: 11,
                        br: a.d.readString,
                        bw: a.h.writeString
                      },
                      has_adult_content: {
                        n: 12,
                        br: a.d.readBool,
                        bw: a.h.writeBool
                      },
                      is_visible_in_steam_china: {
                        n: 13,
                        br: a.d.readBool,
                        bw: a.h.writeBool
                      }
                    }
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function() {
              return r.sm_mbf || (r.sm_mbf = a.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              return a.g(r.M(), e, t);
            }),
            (r.fromObject = function(e) {
              return a.c(r.M(), e);
            }),
            (r.deserializeBinary = function(e) {
              var t = new i.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new i.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CCDDBAppDetailCommon";
            }),
            r
          );
        })(s),
        u = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.clanid || a.a(r.M()),
              s.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(o.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      clanid: { n: 1, br: a.d.readUint32, bw: a.h.writeUint32 },
                      event_gid: {
                        n: 2,
                        br: a.d.readFixed64String,
                        bw: a.h.writeFixed64String
                      },
                      announcement_gid: {
                        n: 3,
                        br: a.d.readFixed64String,
                        bw: a.h.writeFixed64String
                      },
                      rtime_start: {
                        n: 4,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32
                      },
                      rtime_end: {
                        n: 5,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32
                      },
                      priority_score: {
                        n: 6,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32
                      },
                      type: { n: 7, br: a.d.readUint32, bw: a.h.writeUint32 },
                      clamp_range_slot: {
                        n: 8,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32
                      },
                      appid: { n: 9, br: a.d.readUint32, bw: a.h.writeUint32 },
                      rtime32_last_modified: {
                        n: 10,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32
                      }
                    }
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function() {
              return r.sm_mbf || (r.sm_mbf = a.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              return a.g(r.M(), e, t);
            }),
            (r.fromObject = function(e) {
              return a.c(r.M(), e);
            }),
            (r.deserializeBinary = function(e) {
              var t = new i.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new i.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CClanEventUserNewsTuple";
            }),
            r
          );
        })(s),
        p = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.rtime_before || a.a(r.M()),
              s.initialize(t, e, 0, -1, [4], null),
              t
            );
          }
          return (
            Object(o.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      rtime_before: {
                        n: 1,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32
                      },
                      rtime_after: {
                        n: 2,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32
                      },
                      qualified: {
                        n: 3,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32
                      },
                      events: { n: 4, c: u, r: !0, q: !0 }
                    }
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function() {
              return r.sm_mbf || (r.sm_mbf = a.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              return a.g(r.M(), e, t);
            }),
            (r.fromObject = function(e) {
              return a.c(r.M(), e);
            }),
            (r.deserializeBinary = function(e) {
              var t = new i.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new i.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CClanMatchEventByRange";
            }),
            r
          );
        })(s);
    },
    RnhZ: function(e, t, n) {
      var r = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };
      function o(e) {
        var t = i(e);
        return n(t);
      }
      function i(e) {
        var t = r[e];
        if (t + 1) return t;
        var n = new Error("Cannot find module '" + e + "'");
        throw ((n.code = "MODULE_NOT_FOUND"), n);
      }
      (o.keys = function() {
        return Object.keys(r);
      }),
        (o.resolve = i),
        ((e.exports = o).id = "RnhZ");
    },
    SQr7: function(e, t, n) {
      "use strict";
      "VALVE_PUBLIC_PATH" in window
        ? (n.p = window.VALVE_PUBLIC_PATH)
        : console.error(
            "VALVE_PUBLIC_PATH not defined; check for a call to CHTMLHelpers::WebpackConfigScriptlet"
          );
    },
    SxtR: function(e, t, n) {
      "use strict";
      var o = n("mrSG"),
        i = n("hRO2"),
        a = n("OS8t");
      i.Message;
      n.d(t, "a", function() {
        return l;
      }),
        n.d(t, "b", function() {
          return u;
        }),
        n.d(t, "c", function() {
          return r;
        });
      var s = i.Message;
      var r,
        c,
        l = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.product || a.a(r.M()),
              s.initialize(t, e, 0, -1, [3], null),
              t
            );
          }
          return (
            Object(o.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      product: {
                        n: 1,
                        br: a.d.readString,
                        bw: a.h.writeString
                      },
                      version: {
                        n: 2,
                        br: a.d.readString,
                        bw: a.h.writeString
                      },
                      errors: { n: 3, c: u, r: !0, q: !0 }
                    }
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function() {
              return r.sm_mbf || (r.sm_mbf = a.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              return a.g(r.M(), e, t);
            }),
            (r.fromObject = function(e) {
              return a.c(r.M(), e);
            }),
            (r.deserializeBinary = function(e) {
              var t = new i.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new i.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CClientMetrics_ReportClientError_Notification";
            }),
            r
          );
        })(s),
        u = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.identifier || a.a(r.M()),
              s.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(o.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      identifier: {
                        n: 1,
                        br: a.d.readString,
                        bw: a.h.writeString
                      },
                      message: {
                        n: 2,
                        br: a.d.readString,
                        bw: a.h.writeString
                      },
                      count: { n: 3, br: a.d.readUint32, bw: a.h.writeUint32 }
                    }
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function() {
              return r.sm_mbf || (r.sm_mbf = a.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              return a.g(r.M(), e, t);
            }),
            (r.fromObject = function(e) {
              return a.c(r.M(), e);
            }),
            (r.deserializeBinary = function(e) {
              var t = new i.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new i.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CClientMetrics_ReportClientError_Notification_Error";
            }),
            r
          );
        })(s);
      ((c = r = r || {}).ClientAppInterfaceStatsReport = function(e, t) {
        return e.SendNotification(
          "ClientMetrics.ClientAppInterfaceStatsReport#1",
          t,
          { ePrivilege: 1 }
        );
      }),
        (c.ClientIPv6ConnectivityReport = function(e, t) {
          return e.SendNotification(
            "ClientMetrics.ClientIPv6ConnectivityReport#1",
            t,
            { ePrivilege: 1 }
          );
        }),
        (c.SteamPipeWorkStatsReport = function(e, t) {
          return e.SendNotification(
            "ClientMetrics.SteamPipeWorkStatsReport#1",
            t,
            { ePrivilege: 1 }
          );
        }),
        (c.ReportClientError = function(e, t) {
          return e.SendNotification("ClientMetrics.ReportClientError#1", t, {
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1
          });
        }),
        (c.ClientBootstrapReport = function(e, t) {
          return e.SendNotification(
            "ClientMetrics.ClientBootstrapReport#1",
            t,
            { ePrivilege: 1 }
          );
        });
    },
    TLQK: function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return c;
      }),
        n.d(t, "f", function() {
          return p;
        }),
        n.d(t, "m", function() {
          return m;
        }),
        n.d(t, "k", function() {
          return d;
        }),
        n.d(t, "a", function() {
          return h;
        }),
        n.d(t, "d", function() {
          return v;
        }),
        n.d(t, "c", function() {
          return b;
        }),
        n.d(t, "e", function() {
          return g;
        });
      var l = n("mrSG"),
        u = n("q1tI"),
        r = n("mgoM"),
        o = n("kyHq"),
        i = n("lkRc"),
        a = n("Kw0F"),
        s = (n("r64O"), n("Z1oF"));
      n.d(t, "g", function() {
        return s.a;
      }),
        n.d(t, "h", function() {
          return s.b;
        }),
        n.d(t, "j", function() {
          return s.d;
        }),
        n.d(t, "l", function() {
          return s.e;
        }),
        n.d(t, "n", function() {
          return s.g;
        }),
        n.d(t, "o", function() {
          return s.h;
        }),
        n.d(t, "p", function() {
          return s.i;
        }),
        n.d(t, "i", function() {
          return s.c;
        });
      var c = (function() {
        function n() {
          (this.m_mapTokens = new Map()),
            (this.m_mapFallbackTokens = new Map());
        }
        return (
          (n.GetLanguageFallback = function(e) {
            return "sc_schinese" === e ? "schinese" : "english";
          }),
          (n.GetELanguageFallback = function(e) {
            return 29 === e ? 6 : 0;
          }),
          (n.IsELanguageValidInRealm = function(e, t) {
            return (
              t ===
              (29 === e ? o.e.k_ESteamRealmChina : o.e.k_ESteamRealmGlobal)
            );
          }),
          (n.GetLanguageListForRealms = function(e) {
            for (var t = new Array(), n = 0; n < 30; n++)
              for (var r = 0, o = e; r < o.length; r++) {
                var i = o[r];
                if (this.IsELanguageValidInRealm(n, i)) {
                  t.push(n);
                  break;
                }
              }
            return t;
          }),
          (n.prototype.InitFromObjects = function(e, t, n, r, o) {
            o || this.m_mapTokens.clear();
            var i = Object(l.a)(Object(l.a)({}, n || {}), e),
              a = Object(l.a)(Object(l.a)({}, r || {}), t || {});
            this.AddTokens(i, a);
          }),
          (n.prototype.InitDirect = function(e, t) {
            this.m_mapTokens.clear(),
              this.m_mapFallbackTokens.clear(),
              this.AddTokens(e, t);
          }),
          (n.prototype.AddTokens = function(t, n) {
            var r = this;
            Object.keys(t).forEach(function(e) {
              r.m_mapTokens.set(e, t[e]);
            }),
              n &&
                Object.keys(n).forEach(function(e) {
                  r.m_mapTokens.has(e) || r.m_mapTokens.set(e, n[e]),
                    r.m_mapFallbackTokens.set(e, n[e]);
                });
          }),
          (n.prototype.GetPreferredLocales = function() {
            return this.m_rgLocalesToUse
              ? this.m_rgLocalesToUse
              : navigator && navigator.languages
              ? navigator.languages
              : ["en-US"];
          }),
          (n.prototype.GetELanguageFallbackOrder = function(e) {
            void 0 === e && (e = null);
            var t = new Array();
            return (
              t.push(Object(r.d)(i.b.LANGUAGE)),
              (i.b.SUPPORTED_LANGUAGES || []).forEach(function(e) {
                e.value != i.b.LANGUAGE && t.push(Object(r.d)(e.value));
              }),
              e &&
                n.GetLanguageListForRealms(e).forEach(function(e) {
                  -1 == t.indexOf(e) && t.push(e);
                }),
              t
            );
          }),
          (n.prototype.SetPreferredLocales = function(e) {
            this.m_rgLocalesToUse = e;
          }),
          (n.prototype.LocalizeString = function(e) {
            if ((0, e && 0 != e.length && "#" == e.charAt(0))) {
              var t = this.m_mapTokens.get(e.substring(1));
              if (void 0 !== t) return t;
            }
          }),
          (n.prototype.LocalizeStringFromFallback = function(e) {
            if (e && 0 != e.length && "#" == e.charAt(0)) {
              var t = this.m_mapFallbackTokens.get(e.substring(1));
              if (void 0 !== t) return t;
            }
          }),
          n
        );
      })();
      function p(e) {
        for (var r = [], t = 1; t < arguments.length; t++)
          r[t - 1] = arguments[t];
        var n = g.LocalizeString(e);
        return void 0 === n
          ? e
          : (0 < r.length &&
              (n = n.replace(/%(?:(\d+)\$)?s/g, function(e, t) {
                if (t <= r.length && 1 <= t) {
                  var n = r[t - 1];
                  return String(null == n ? "" : n);
                }
                return e;
              })),
            n);
      }
      function m(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        var r = g.LocalizeString(e);
        if (void 0 === r) return e;
        for (var o, i = [], a = /(.*?)%(\d+)\$s/g, s = 0; (o = a.exec(r)); ) {
          (s += o[0].length), i.push(o[1]);
          var c = parseInt(o[2]);
          1 <= c && c <= t.length && i.push(t[c - 1]);
        }
        return (
          i.push(r.substr(s)),
          u.createElement.apply(u, Object(l.g)([u.Fragment, null], i))
        );
      }
      function d(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        return p.apply(
          void 0,
          1 === t || "1" === t
            ? Object(l.g)([e, t], n)
            : Object(l.g)([e + "_Plural", t], n)
        );
      }
      var h = (function() {
          function n() {}
          return (
            (n.Set = function(e, t, n) {
              if (e.length <= t) {
                if (30 <= t) return e;
                e = Object(a.g)(e, t + 1, null);
              }
              return (e[t] = n), e;
            }),
            (n.Get = function(e, t) {
              return (e && e.length > t && e[t]) || "";
            }),
            (n.GetWithFallback = function(e, t) {
              return n.Get(e, t) || n.Get(e, c.GetELanguageFallback(t));
            }),
            n
          );
        })(),
        f = {
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
          koreana: "ko"
        },
        v = {
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
          "vi-VN": 28
        };
      function b() {
        return f[i.b.LANGUAGE] || null;
      }
      var g = new c();
      window.LocalizationManager = g;
    },
    TtDX: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return p;
      });
      var r = n("mrSG"),
        o = n("q1tI"),
        i = n("X3Ds"),
        a = n("y+6m"),
        c = n("sUmc"),
        s = n("2vnA"),
        l = (function() {
          function e() {}
          return (
            (e.GetBrowserInfoForPopup = function(e) {
              return null;
            }),
            (e.prototype.SetTakeFocus = function(e) {
              this.m_fnTakeFocus = e;
            }),
            Object(r.c)([s.C], e.prototype, "m_refContextMenu", void 0),
            e
          );
        })(),
        u = (function() {
          function e() {}
          return (
            (e.CreateContextMenuInstance = function(e, t, n, r, o) {
              return new d(e, t, n, r, o);
            }),
            e
          );
        })();
      function p(e, t, n) {
        var r,
          o = void 0,
          i = void 0,
          a = t;
        if (a.preventDefault && a.stopPropagation) {
          if (a.shiftKey) return null;
          a.preventDefault(),
            a.stopPropagation(),
            (r = a.currentTarget),
            (o = a.clientX),
            (i = a.clientY);
        } else r = t;
        var s = u.CreateContextMenuInstance(e, r, o, i, n);
        return s.Show(), s;
      }
      var m = (function(n) {
          function e(e) {
            var t = n.call(this) || this;
            return (
              (t.m_bVisible = !1),
              (t.m_elSubmenuItem = null),
              (t.m_timerHideSubMenu = 0),
              (t.m_ownerWindow = e),
              t
            );
          }
          return (
            Object(r.d)(e, n),
            (e.prototype.RenderElements = function(e, t) {
              0 == this.presentation &&
              (e.options.bForcePopup || this.m_ownerWindow.innerWidth) < 400 &&
              this.m_ownerWindow.SteamClient &&
              this.m_ownerWindow.SteamClient.Window
                ? (this.m_popupContextMenu = new a.a(
                    e,
                    t,
                    l.GetBrowserInfoForPopup(this.m_ownerWindow)
                  ))
                : ((this.m_embeddedElementInstance = Object(c.b)(
                    this.m_ownerWindow.document
                  )),
                  (this.m_rctElement = o.createElement(a.f, e, t)));
            }),
            (e.prototype.SetOnHideCallback = function(e) {
              this.m_fnOnHideCallback = e;
            }),
            (e.prototype.Show = function() {
              this.m_rctElement
                ? this.m_embeddedElementInstance.Show(this.m_rctElement)
                : this.m_popupContextMenu.Show(),
                (this.m_bVisible = !0);
            }),
            (e.prototype.Hide = function() {
              this.InternalHide();
            }),
            (e.prototype.HideIfNotInFocus = function() {
              this.BHasFocus() ||
                this.BIsFocusInChildHierarchy() ||
                this.Hide();
            }),
            (e.prototype.InternalHide = function() {
              this.m_bVisible &&
                ((this.m_bVisible = !1),
                this.InternalHideSubMenu(),
                this.m_fnOnHideCallback && this.m_fnOnHideCallback(),
                this.m_embeddedElementInstance
                  ? this.m_embeddedElementInstance.Hide(300)
                  : this.m_popupContextMenu.Close());
            }),
            Object.defineProperty(e.prototype, "visible", {
              get: function() {
                return this.m_bVisible;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "options", {
              get: function() {
                return this.m_options;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "presentation", {
              get: function() {
                return 0;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "owner_window", {
              get: function() {
                return this.m_ownerWindow;
              },
              enumerable: !1,
              configurable: !0
            }),
            (e.prototype.ShowSubMenu = function(e, t) {
              return this.m_elSubmenuItem == e
                ? (this.CancelHideSubMenuTimer(),
                  this.m_submenu.TakeFocus(),
                  null)
                : (this.InternalHideSubMenu(),
                  (this.m_elSubmenuItem = e),
                  (this.m_submenu = new h(this, t(), e)),
                  this.m_submenu.Show(),
                  this.m_submenu);
            }),
            (e.prototype.CancelHideSubMenuTimer = function() {
              0 < this.m_timerHideSubMenu &&
                (clearTimeout(this.m_timerHideSubMenu),
                (this.m_timerHideSubMenu = 0));
            }),
            (e.prototype.HideSubMenu = function() {
              var e = this;
              this.m_submenu
                ? 0 < this.m_timerHideSubMenu ||
                  (this.m_timerHideSubMenu = window.setTimeout(function() {
                    e.InternalHideSubMenu(), (e.m_timerHideSubMenu = 0);
                  }, 150))
                : this.CancelHideSubMenuTimer();
            }),
            (e.prototype.HideSelf = function() {
              this.InternalHide();
            }),
            (e.prototype.InternalHideSubMenu = function() {
              this.CancelHideSubMenuTimer(),
                this.m_submenu &&
                  (this.BIsFocusInChildHierarchy() && this.TakeFocus(),
                  (this.m_elSubmenuItem = null),
                  this.m_submenu.InternalHide(),
                  (this.m_submenu = null));
            }),
            (e.prototype.TakeFocus = function() {
              this.m_popupContextMenu && this.m_popupContextMenu.Focus(),
                this.m_fnTakeFocus && this.m_fnTakeFocus();
            }),
            (e.prototype.BInternalElementInParentHierarchy = function(e) {
              return (
                this.m_parentInstance &&
                (this.m_parentInstance.BIsChildElement(e) ||
                  this.m_parentInstance.BInternalElementInParentHierarchy(e))
              );
            }),
            (e.prototype.BInternalElementInChildHierarchy = function(e) {
              return (
                this.m_submenu &&
                (this.m_submenu.BIsChildElement(e) ||
                  this.m_submenu.BInternalElementInChildHierarchy(e))
              );
            }),
            (e.prototype.BIsChildElement = function(e) {
              return this.m_embeddedElementInstance
                ? this.m_embeddedElementInstance.BIsChildElement(e)
                : i.c(this.m_popupContextMenu.root_element, e);
            }),
            (e.prototype.BHasFocus = function() {
              return this.m_embeddedElementInstance
                ? this.m_embeddedElementInstance.BIsChildElement(
                    this.m_ownerWindow.document.activeElement
                  )
                : this.m_popupContextMenu.focused;
            }),
            (e.prototype.BIsFocusInChildHierarchy = function() {
              return (
                this.m_submenu &&
                (this.m_submenu.BHasFocus() ||
                  this.m_submenu.BIsFocusInChildHierarchy())
              );
            }),
            (e.prototype.BIsElementInMenuHierarchy = function(e) {
              return (
                this.BInternalElementInParentHierarchy(e) ||
                this.BInternalElementInChildHierarchy(e)
              );
            }),
            (e.prototype.BIsSubMenuVisible = function() {
              return !!this.m_submenu;
            }),
            (e.prototype.SetLabel = function(e) {}),
            Object(r.c)([s.C], e.prototype, "m_bVisible", void 0),
            e
          );
        })(l),
        d = (function(s) {
          function e(e, t, n, r, o) {
            var i = s.call(this, t.ownerDocument.defaultView) || this;
            l.sm_iActiveContextMenuInstance &&
              l.sm_iActiveContextMenuInstance.Hide(),
              ((l.sm_iActiveContextMenuInstance = i).m_options = o || {});
            var a = {
              element: t,
              clientX: n,
              clientY: r,
              instance: i,
              options: i.m_options,
              fnOnMenuItemSelected: function() {
                i.Hide();
              }
            };
            return i.RenderElements(a, e), i;
          }
          return (
            Object(r.d)(e, s),
            (e.prototype.Show = function() {
              this.m_options.bDisableMouseOverlay ||
                ((this.m_embeddedElementInstanceOverlay = Object(c.b)(
                  this.m_ownerWindow.document
                )),
                this.m_embeddedElementInstanceOverlay.Show(
                  o.createElement(a.e)
                )),
                s.prototype.Show.call(this);
            }),
            (e.prototype.Hide = function() {
              this.m_embeddedElementInstanceOverlay &&
                this.m_embeddedElementInstanceOverlay.Hide(0),
                s.prototype.Hide.call(this);
            }),
            (e.prototype.BIsSubMenu = function() {
              return !1;
            }),
            e
          );
        })(m),
        h = (function(i) {
          function e(e, t, n) {
            var r = i.call(this, n.ownerDocument.defaultView) || this;
            (r.m_parentInstance = e),
              (r.m_options = {
                bOverlapVertical: !0,
                bUseWebStyles: e.options.bUseWebStyles,
                strClassName: e.options.strClassName,
                bFitToWindow: e.options.bFitToWindow,
                bShiftToFitWindow: e.options.bShiftToFitWindow
              });
            var o = {
              element: n,
              clientX: null,
              clientY: null,
              instance: r,
              options: r.m_options,
              fnOnMenuItemSelected: function() {
                r.Hide();
              },
              bSubmenu: !0
            };
            return r.RenderElements(o, t), r;
          }
          return (
            Object(r.d)(e, i),
            (e.prototype.Hide = function() {
              var e = this;
              this.m_popupContextMenu
                ? window.setTimeout(function() {
                    e.m_parentInstance.HideIfNotInFocus();
                  }, 10)
                : this.m_parentInstance.Hide();
            }),
            (e.prototype.BIsSubMenu = function() {
              return !0;
            }),
            e
          );
        })(m);
    },
    UPxs: function(e, t, n) {
      "use strict";
      var c = n("mrSG"),
        l = n("q1tI"),
        u = n("exH9"),
        r = n("bxiW"),
        z = { x: "y", y: "x" };
      function V() {
        return { x: 0, y: 0 };
      }
      function B(e, t) {
        return e.x * t.x + e.y * t.y;
      }
      function Y(e, t) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function K(e, t) {
        return { x: e.x + t.x, y: e.y + t.y };
      }
      function X(e, t) {
        return { x: e.x * t, y: e.y * t };
      }
      function o(e) {
        return (e.min + e.max) / 2;
      }
      function q(e, t) {
        return !(e.max < t.min || t.max < e.min);
      }
      var F = n("Kw0F"),
        f = n("r64O"),
        J = n("X3Ds");
      var i = (function() {
          function e() {
            (this.m_itemCounts = new Map()), (this.m_nSize = 0);
          }
          return (
            (e.prototype.add = function(e) {
              var t = this.m_itemCounts.get(e),
                n = null == t ? 1 : t + 1;
              return this.m_itemCounts.set(e, n), ++this.m_nSize, this;
            }),
            (e.prototype.clear = function() {
              this.m_itemCounts.clear(), (this.m_nSize = 0);
            }),
            (e.prototype.delete = function(e) {
              var t = this.m_itemCounts.get(e);
              return (
                0 == (null == t ? 0 : t - 1) && this.m_itemCounts.delete(e),
                --this.m_nSize,
                void 0 !== t
              );
            }),
            (e.prototype.has = function(e) {
              return this.m_itemCounts.has(e);
            }),
            Object.defineProperty(e.prototype, "size", {
              get: function() {
                return this.m_nSize;
              },
              enumerable: !1,
              configurable: !0
            }),
            (e.prototype.entries = function() {
              return this.m_itemCounts.entries();
            }),
            (e.prototype.keys = function() {
              return this.m_itemCounts.keys();
            }),
            e
          );
        })(),
        b = n("w9XT");
      n.d(t, "a", function() {
        return ce;
      });
      var d,
        a,
        h,
        s,
        Q,
        p,
        m = "Focusable",
        v = "FocusGroup",
        g = "NavArea",
        _ = (function() {
          function t() {}
          return (
            Object.defineProperty(t, "IsNavEnabled", {
              get: function() {
                return t.s_bIsNavEnabled;
              },
              set: function(e) {
                t.s_bIsNavEnabled = e;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(t, "IsLoggingToConsole", {
              get: function() {
                return !1;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(t, "IsDebuggingNavAddresses", {
              get: function() {
                return !1;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(t, "IsPointerVisible", {
              get: function() {
                return !1;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(t, "IsFocusMarkerAlwaysVisible", {
              get: function() {
                return !1;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(t, "IsDefaultFocusMarkerVisible", {
              get: function() {
                return !1;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(t, "IsDocumentUsingZoom", {
              get: function() {
                return !0;
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.s_bIsNavEnabled = !1),
            t
          );
        })(),
        y = 0;
      function Z() {
        for (var e, t = [], n = 0; n < arguments.length; n++)
          t[n] = arguments[n];
        _.IsLoggingToConsole &&
          (0 < t.length && "string" == typeof t[0]
            ? ((e = t.shift()),
              console.log.apply(console, Object(c.g)(["\t".repeat(y) + e], t)))
            : console.log.apply(console, t));
      }
      function E(e, t, n) {
        if (!_.IsLoggingToConsole) return n;
        var r = n.value;
        return (
          (n.value = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            ++y;
            try {
              var n = r.apply(this, e);
              return --y, n;
            } catch (e) {
              throw (--y, e);
            }
          }),
          n
        );
      }
      function $(e) {
        return te(e) ? "#'" + e.id + "'.'" + e.className + "'" : "#?.?";
      }
      function ee(e) {
        return null == e ? "(?, ?)" : "(" + e.x + ", " + e.y + ")";
      }
      function te(e) {
        return null != e && void 0 !== e.focus;
      }
      function O(e) {
        for (
          var t = 1, n = e.ownerDocument.defaultView, r = e;
          null != r;
          r = r.parentElement
        ) {
          var o = parseFloat(n.getComputedStyle(r).zoom);
          0 < o && (t *= o);
        }
        return t;
      }
      function ne(e) {
        if (_.IsDocumentUsingZoom) {
          var t = O(e),
            n = e.getBoundingClientRect();
          return {
            x: { min: n.left * t, max: n.right * t },
            y: { min: n.top * t, max: n.bottom * t }
          };
        }
        return {
          x: { min: (r = e.getBoundingClientRect()).left, max: r.right },
          y: { min: r.top, max: r.bottom }
        };
        var r;
      }
      function re(e) {
        return { x: o((t = ne(e)).x), y: o(t.y) };
        var t;
      }
      function w(e, t) {
        e && ("function" == typeof e ? e(t) : (e.current = t));
      }
      function S(e, t, n) {
        var r = e,
          o = null != r.getAttribute("data-nav"),
          i = o ? r.getAttribute("data-nav-scroll-axes") : void 0;
        if (o && i !== h.XY && i !== t) return d.None;
        var a =
            "x" === t
              ? [r.scrollLeft, r.scrollWidth, r.clientWidth]
              : [r.scrollTop, r.scrollHeight, r.clientHeight],
          s = a[0],
          c = a[1],
          l = a[2],
          u = -1 === n ? Math.abs(s) < 1 : Math.abs(s + l - c) <= 1;
        if (o) return u ? d.AtEnd : d.Scrollable;
        if (!u && c <= l) return d.None;
        var p = r.ownerDocument.defaultView.getComputedStyle(r),
          m = "x" === t ? p.overflowX : p.overflowY;
        return "auto" === m || "scroll" === m
          ? u
            ? d.AtEnd
            : d.Scrollable
          : d.None;
      }
      ((a = d = d || {})[(a.None = 2)] = "None"),
        (a[(a.Scrollable = 1)] = "Scrollable"),
        (a[(a.AtEnd = 3)] = "AtEnd"),
        ((s = h = h || {}).X = "x"),
        (s.Y = "y"),
        (s.XY = "xy"),
        ((p = Q = Q || {}).Area = "area"),
        (p.Group = "group"),
        (p.Stop = "stop"),
        (p.Click = "click");
      var C = l.createContext(null);
      function D(e) {
        for (var t = [], n = e; null != n; n = n.parent) t.push(n.key);
        return t.reverse(), JSON.stringify(t);
      }
      var M,
        x,
        A = l.createContext(void 0),
        k = l.createContext(void 0),
        j = l.createContext(void 0);
      function I(e, o, i) {
        var a = null != e.navKey ? e.navKey : void 0;
        return null != a && _.IsNavEnabled
          ? l.createElement(k.Consumer, null, function(r) {
              return l.createElement(j.Consumer, null, function(n) {
                return l.createElement(A.Consumer, null, function(e) {
                  var t = { parent: e, key: a };
                  return (
                    "function" == typeof i && i(t, r, n),
                    l.createElement(A.Provider, { value: t }, o)
                  );
                });
              });
            })
          : o;
      }
      ((x = M = M || {}).Lazy = "lazy"),
        (x.Start = "start"),
        (x.Center = "center"),
        (x.End = "end"),
        (x.Nearest = "nearest");
      var N = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_containerRef = l.createRef()), e;
          }
          return (
            Object(c.d)(e, t),
            (e.prototype.IsEventSource = function(e) {
              var t = this.m_containerRef.current;
              return null != t && t.contains(e.target);
            }),
            (e.prototype.HandleOnFocusChanged = function(e, t, n, r) {
              var o,
                i,
                a = this.m_containerRef.current;
              a
                ? ((o = O(a)),
                  null != r
                    ? ((a.style.opacity = n ? "100%" : "75%"),
                      (a.style.left = r.x / o + "px"),
                      (a.style.top = r.y / o + "px"))
                    : null != t
                    ? ((i = ne(t)),
                      (a.style.opacity = n
                        ? "100%"
                        : _.IsFocusMarkerAlwaysVisible
                        ? "25%"
                        : "0%"),
                      (a.style.left = i.x.min / o + "px"),
                      (a.style.top = i.y.min / o + "px"))
                    : (a.style.opacity = "33%"))
                : (a.style.display = "none");
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = e.children,
                n = e.style,
                r = Object(c.f)(e, ["children", "style"]);
              return l.createElement(
                "div",
                Object(c.a)(
                  {
                    ref: this.m_containerRef,
                    style: Object(c.a)(Object(c.a)({}, n), {
                      position: "absolute",
                      willChange: "left, top"
                    })
                  },
                  r
                ),
                t
              );
            }),
            Object(c.c)([E], e.prototype, "HandleOnFocusChanged", null),
            e
          );
        })(l.Component),
        R = (function() {
          function e(e, t) {
            (this.m_bNeedsUpdate = !1),
              (this.m_containerRef = e),
              (this.m_nPaddingPx = t || 0);
          }
          return (
            (e.prototype.IsEventSource = function(e) {
              var t = this.m_containerRef.current;
              return null != t && t.contains(e.target);
            }),
            (e.prototype.HandleOnFocusChanged = function(e, t, n) {
              var r;
              (!0 !== e &&
                this.m_focusedElement == t &&
                this.m_bDisplay == n) ||
                ((this.m_focusedElement = t),
                (this.m_bDisplay = n),
                this.m_bNeedsUpdate ||
                  ((r = (
                    (this.m_containerRef.current || {}).ownerDocument || {}
                  ).defaultView),
                  (this.m_bNeedsUpdate = !0),
                  r && r.requestAnimationFrame(this.HandleOnAnimationFrame)));
            }),
            (e.prototype.HandleOnAnimationFrame = function() {
              var e,
                t,
                n = "BoxFM.HandleOnAnimationFrame",
                r = this.m_containerRef.current;
              (this.m_bNeedsUpdate = !1),
                null == this.m_focusedElement
                  ? (Z(n + " none"), (r.style.display = "none"))
                  : null != this.m_focusedElement &&
                    ((e = ne(this.m_focusedElement)),
                    (t = O(r)),
                    Z(
                      n +
                        " (" +
                        e.x.min +
                        ", " +
                        e.y.min +
                        ")-(" +
                        e.x.max +
                        ", " +
                        e.y.max +
                        ")"
                    ),
                    (r.style.display = "unset"),
                    (r.style.opacity = this.m_bDisplay
                      ? "100%"
                      : _.IsFocusMarkerAlwaysVisible
                      ? "25%"
                      : "0%"),
                    (r.style.left = e.x.min / t - this.m_nPaddingPx + "px"),
                    (r.style.top = e.y.min / t - this.m_nPaddingPx + "px"),
                    (r.style.width =
                      (e.x.max - e.x.min) / t + 2 * this.m_nPaddingPx + "px"),
                    (r.style.height =
                      (e.y.max - e.y.min) / t + 2 * this.m_nPaddingPx + "px"));
            }),
            Object(c.c)([E], e.prototype, "HandleOnFocusChanged", null),
            Object(c.c)([r.a], e.prototype, "HandleOnAnimationFrame", null),
            e
          );
        })(),
        T = (function() {
          function e() {}
          return (
            (e.prototype.FocusableElementAttributes = function(e) {
              var t = {};
              return (
                _.IsNavEnabled && e.navStop && (t.tabIndex = -2),
                "number" == typeof e.tabStop && (t.tabIndex = e.tabStop),
                !0 === e.tabStop && (t.tabIndex = 0),
                t
              );
            }),
            e
          );
        })(),
        L = (function(r) {
          function e(e) {
            var t = r.call(this) || this;
            (t.m_focusListeners = new Map()),
              (t.m_blurListeners = new Map()),
              Z("HDFC.constructor"),
              (t.m_doc = e);
            var n = t.m_doc.defaultView;
            return n ? (t.m_win = n) : Z("- No window!"), t;
          }
          return (
            Object(c.d)(e, r),
            (e.prototype.GetFocus = function() {
              return void 0 !== this.m_doc && te(this.m_doc.activeElement)
                ? this.m_doc.activeElement
                : null;
            }),
            (e.prototype.Focus = function(e, t) {
              null != e
                ? (Z("HDFC Focus e.focus {", e), e.focus(t), Z("+ }"))
                : te(this.m_doc.activeElement) &&
                  (Z("HDFC Focus null with active IsHTMLElement e.blur() {", e),
                  this.m_doc.activeElement.blur(),
                  Z("+ }"));
            }),
            (e.prototype.Click = function(e) {
              Z("HDFC Click: e.click {"), e.click(), Z("+ }");
            }),
            (e.prototype.AddFocusListener = function(t) {
              Z("CHtmlDomFocusController AddFocusListener");
              function e(e) {
                te(e.target) &&
                  (Z("HDFC focus listener {"), t(e.target), Z("+ }"));
              }
              this.m_focusListeners.set(t, e),
                this.m_win.addEventListener("focus", e, !0);
            }),
            (e.prototype.RemoveFocusListener = function(e) {
              Z("CHtmlDomFocusController RemoveFocusListener");
              var t = this.m_focusListeners.get(e);
              this.m_doc.removeEventListener("focus", t, !0),
                this.m_focusListeners.delete(e);
            }),
            (e.prototype.AddBlurListener = function(t) {
              Z("CHtmlDomFocusController AddBlurListener");
              function e(e) {
                te(e.target) &&
                  (Z("HDFC blur listener {"), t(e.target), Z("+ }"));
              }
              this.m_blurListeners.set(t, e),
                this.m_win.addEventListener("blur", e, !0);
            }),
            (e.prototype.RemoveBlurListener = function(e) {
              Z("CHtmlDomFocusController RemoveBlurListener");
              var t = this.m_blurListeners.get(e);
              this.m_doc.removeEventListener("blur", t, !0),
                this.m_blurListeners.delete(e);
            }),
            Object(c.c)([E], e.prototype, "Focus", null),
            Object(c.c)([E], e.prototype, "Click", null),
            Object(c.c)([E], e.prototype, "AddFocusListener", null),
            Object(c.c)([E], e.prototype, "RemoveFocusListener", null),
            Object(c.c)([E], e.prototype, "AddBlurListener", null),
            Object(c.c)([E], e.prototype, "RemoveBlurListener", null),
            e
          );
        })(T);
      function P(e, t) {
        e.navScrollX && (t["data-nav-scroll-snap-type-x"] = e.navScrollX),
          e.navScrollY && (t["data-nav-scroll-snap-type-y"] = e.navScrollY),
          e.navScrollMarginX &&
            (t["data-nav-scroll-snap-margin-x"] = e.navScrollMarginX),
          e.navScrollMarginY &&
            (t["data-nav-scroll-snap-margin-y"] = e.navScrollMarginY);
      }
      var G = new Map();
      function U(e, t) {
        G.set(e, t);
      }
      function H(e) {
        G.delete(e);
      }
      function oe(e) {
        return G.get(e);
      }
      var ie,
        W,
        ae = (function() {
          function e() {}
          return (
            (e.Attributes = function(e, t) {
              var n = {};
              if (
                (_.IsNavEnabled &&
                  (e.navClick && (n["data-nav"] = Q.Click),
                  !e.navClick && e.navStop && (n["data-nav"] = Q.Stop),
                  !e.navClick &&
                    e.navStop &&
                    e.noPrimaryAction &&
                    (n["data-nav-npa"] = "true"),
                  !e.navClick &&
                    e.preferredNavStop &&
                    (n["data-nav-preferred"] = "true"),
                  P(e, n)),
                !t)
              )
                return n;
              var r = t.FocusableElementAttributes(e);
              return r ? Object(c.a)(Object(c.a)({}, n), r) : n;
            }),
            Object.defineProperty(e, "navStopClass", {
              get: function() {
                return _.IsNavEnabled ? m : void 0;
              },
              enumerable: !1,
              configurable: !0
            }),
            e
          );
        })(),
        se = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(c.d)(t, e),
            (t.prototype.NeedsComponentFromElement = function() {
              return !0;
            }),
            (t.prototype.SetRef = function(e) {
              null == e
                ? H(this.m_htmlElement)
                : ((this.m_htmlElement = e),
                  this.NeedsComponentFromElement && U(this.m_htmlElement, this),
                  w(this.props.htmlElementRef, e));
            }),
            (t.prototype.assembleAttributes = function(e) {
              e.navKey,
                e.navStop,
                e.noPrimaryAction,
                e.preferredNavStop,
                e.tabStop,
                e.navClick;
              var t = e.startFocused,
                n = (e.navScrollX,
                e.navScrollY,
                e.navScrollMarginX,
                e.navScrollMarginY,
                e.htmlElementRef),
                r = e.className,
                o = (e.children,
                Object(c.f)(e, [
                  "navKey",
                  "navStop",
                  "noPrimaryAction",
                  "preferredNavStop",
                  "tabStop",
                  "navClick",
                  "startFocused",
                  "navScrollX",
                  "navScrollY",
                  "navScrollMarginX",
                  "navScrollMarginY",
                  "htmlElementRef",
                  "className",
                  "children"
                ]));
              return null != this.context && _.IsNavEnabled
                ? Object(c.a)(
                    Object(c.a)(
                      Object(c.a)(
                        {},
                        ae.Attributes(
                          e,
                          this.context.GetFocusControllerDomIntegrator()
                        )
                      ),
                      {
                        className: Object(u.a)(ae.navStopClass, r),
                        ref:
                          t || this.NeedsComponentFromElement ? this.SetRef : n
                      }
                    ),
                    o
                  )
                : Object(c.a)({ className: r, ref: n }, o);
            }),
            (t.prototype.GotFocus = function() {
              null != this.m_navAddress &&
                null != this.m_currentNavEpoch &&
                this.m_currentNavEpoch.SetFocusAddress(this.m_navAddress);
            }),
            (t.prototype.componentDidMount = function() {
              var e, t, n;
              _.IsDebuggingNavAddresses &&
                null != this.m_htmlElement &&
                null != this.m_navAddress &&
                this.m_htmlElement.setAttribute(
                  "data-nav-addr",
                  D(this.m_navAddress)
                ),
                null !=
                  (null === (e = this.m_currentNavEpoch) || void 0 === e
                    ? void 0
                    : e.GetFocusAddress()) ||
                  ((null !=
                  (n =
                    null === (t = this.m_recalledNavEpoch) || void 0 === t
                      ? void 0
                      : t.GetFocusAddress())
                    ? (function(e, t) {
                        for (
                          var n = [e, t], r = n[0], o = n[1];
                          ;
                          r = r.parent, o = o.parent
                        ) {
                          if (null == r && null == o) return 1;
                          if (null == r || null == o || r.key !== o.key) return;
                        }
                      })(n, this.m_navAddress)
                    : this.props.startFocused &&
                      this.m_htmlElement &&
                      this.context) &&
                    this.context.ClaimFocus(this.m_htmlElement));
            }),
            (t.prototype.render = function() {
              var r = this;
              return l.createElement(b.a.Consumer, null, function(e) {
                return (
                  (r.m_actionDescriptionContext = e),
                  I(
                    r.props,
                    l.createElement(
                      r.m_elementType,
                      r.assembleAttributes(r.props),
                      r.props.children
                    ),
                    function(e, t, n) {
                      (r.m_navAddress = e),
                        (r.m_recalledNavEpoch = t),
                        (r.m_currentNavEpoch = n);
                    }
                  )
                );
              });
            }),
            (t.contextType = C),
            (t.defaultProps = { navStop: !1, tabStop: !1 }),
            Object(c.c)([r.a], t.prototype, "SetRef", null),
            t
          );
        })(l.Component),
        ce = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_elementType = "div"), e;
          }
          return Object(c.d)(e, t), e;
        })(se);
      ((W = ie = ie || {}).Geometry = "Geometry"),
        (W.DomOrder = "DomOrder"),
        (W.ReverseDomOrder = "ReverseDomOrder");
      var le = (function(e) {
        function a() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(c.d)(a, e),
          (a.GetOnNavOut = function(e) {
            var t = oe(e);
            if (t && t instanceof a) return t.props.onNavOut;
          }),
          (a.Attributes = function(e) {
            if (!_.IsNavEnabled) return {};
            var t = { "data-nav": Q.Group };
            return (
              e.xOrder && (t["data-nav-xorder"] = e.xOrder),
              e.yOrder && (t["data-nav-yorder"] = e.yOrder),
              e.scrollAxes && (t["data-nav-scroll-axes"] = e.scrollAxes),
              e.preferredNavStopWithin && (t["data-nav-preferred"] = "true"),
              e.enterAsScrolledAxes &&
                (t["data-nav-enter-as-scrolled-axes"] = e.enterAsScrolledAxes),
              P(e, t),
              t
            );
          }),
          (a.prototype.NeedsComponentFromElement = function() {
            return !!this.props.onNavOut || null != this.props.navKey;
          }),
          (a.prototype.SetRef = function(e) {
            null == e
              ? H(this.m_htmlElement)
              : ((this.m_htmlElement = e),
                this.NeedsComponentFromElement && U(this.m_htmlElement, this),
                w(this.props.htmlElementRef, e));
          }),
          (a.prototype.FocusWithin = function() {
            this.m_htmlElement && pe.FocusWithin(this.m_htmlElement);
          }),
          (a.prototype.UpdateScrollPos = function() {
            var e,
              t = this.m_htmlElement;
            null != t &&
              null != this.m_navAddress &&
              null != this.m_currentNavEpoch &&
              ((e = { x: t.scrollLeft, y: t.scrollTop }),
              this.m_currentNavEpoch.SetNavAddressScroll(this.m_navAddress, e));
          }),
          (a.prototype.componentDidMount = function() {
            var e, t, n;
            _.IsDebuggingNavAddresses &&
              null != this.m_htmlElement &&
              null != this.m_navAddress &&
              this.m_htmlElement.setAttribute(
                "data-nav-addr",
                D(this.m_navAddress)
              ),
              null == this.m_htmlElement ||
                null == this.m_navAddress ||
                null !=
                  (null === (e = this.m_currentNavEpoch) || void 0 === e
                    ? void 0
                    : e.GetNavAddressScroll(this.m_navAddress)) ||
                (null !=
                  (n =
                    null === (t = this.m_recalledNavEpoch) || void 0 === t
                      ? void 0
                      : t.GetNavAddressScroll(this.m_navAddress)) &&
                  ((this.m_htmlElement.scrollLeft = n.x),
                  (this.m_htmlElement.scrollTop = n.y)));
          }),
          (a.prototype.componentWillUnmount = function() {
            this.m_currentNavEpoch &&
              this.m_currentNavEpoch.SetNavAddressScroll(
                this.m_navAddress,
                void 0
              );
          }),
          (a.prototype.render = function() {
            var r = this,
              e = this.props,
              t = (e.navKey,
              e.xOrder,
              e.yOrder,
              e.preferredNavStopWithin,
              e.scrollAxes,
              e.enterAsScrolledAxes,
              e.navScrollX,
              e.navScrollY,
              e.navScrollMarginX,
              e.navScrollMarginY,
              e.onNavOut,
              e.htmlElementRef),
              n = e.className,
              o = e.children,
              i = Object(c.f)(e, [
                "navKey",
                "xOrder",
                "yOrder",
                "preferredNavStopWithin",
                "scrollAxes",
                "enterAsScrolledAxes",
                "navScrollX",
                "navScrollY",
                "navScrollMarginX",
                "navScrollMarginY",
                "onNavOut",
                "htmlElementRef",
                "className",
                "children"
              ]);
            return null != this.context && _.IsNavEnabled
              ? I(
                  this.props,
                  l.createElement(
                    "div",
                    Object(c.a)(
                      { ref: this.SetRef },
                      a.Attributes(this.props),
                      { className: Object(u.a)(v, n) },
                      i
                    ),
                    o
                  ),
                  function(e, t, n) {
                    (r.m_navAddress = e),
                      (r.m_recalledNavEpoch = t),
                      (r.m_currentNavEpoch = n);
                  }
                )
              : l.createElement(
                  "div",
                  Object(c.a)({ ref: t, className: n }, i),
                  o
                );
          }),
          (a.contextType = C),
          Object(c.c)([r.a], a.prototype, "SetRef", null),
          Object(c.c)([E], a, "GetOnNavOut", null),
          a
        );
      })(l.Component);
      var ue = (function() {
          function e(e) {
            (this.m_navAreaStack = []),
              (this.m_elementNavAreaMap = new Map()),
              (this.m_focusControllers = new i()),
              (this.m_focusMarkers = new i()),
              (this.m_defaultFocusController = new L(e));
          }
          return (
            Object.defineProperty(e.prototype, "isEmpty", {
              get: function() {
                return (
                  0 === this.m_navAreaStack.length &&
                  0 === this.m_elementNavAreaMap.size &&
                  0 === this.m_focusControllers.size &&
                  0 === this.m_focusMarkers.size
                );
              },
              enumerable: !1,
              configurable: !0
            }),
            e
          );
        })(),
        pe = (function(n) {
          function W(e) {
            var t = n.call(this, e) || this;
            return (
              (t.m_navAreaDivRef = l.createRef()),
              (t.m_inFocusCallType = null),
              (t.m_focusClaimElement = void 0),
              (t.m_focusedHtmlElement = null),
              (t.m_focusPos = null),
              (t.m_focusPosOffsetFromAnchorElement = null),
              (t.m_lastFocusedHtmlElement = null),
              (t.m_lastFocusPosOffsetFromAnchorElement = null),
              (t.m_pointerFocusMarkerRef = l.createRef()),
              (t.m_boxFocusMarkerDivRef = l.createRef()),
              void 0 !== e &&
                void 0 === W.sm_htmlDomFocusControllerDomIntegrator &&
                (W.sm_htmlDomFocusControllerDomIntegrator = new T()),
              t
            );
          }
          return (
            Object(c.d)(W, n),
            (W.FocusWithin = function(e) {
              var t,
                n = W.GetNavAreaObjects(e, "NavArea.FocusWithin", {
                  target: !0,
                  navArea: !0,
                  activeNavArea: !1
                }),
                r = n.navArea,
                o = n.navAreaElement,
                i = (n.activeNavArea, n.activeNavAreaElement);
              n.dn;
              null != r &&
                (Z("NavArea.FocusWithin", e),
                (null != i && i == o) ||
                  (Z(
                    "+ (" +
                      i.id +
                      ") is active, but FG in (" +
                      r.props.id +
                      "); activating."
                  ),
                  r.Activate()),
                null != (t = r.FindBestNavStopFocus(e)) &&
                  (Z("+ focusing:", t.htmlElement, t.pos),
                  r.SetFocus(t.htmlElement, t.pos)));
            }),
            (W.HandleKeyDown = function(t) {
              var e,
                n = "NavArea.HandleKeyDown",
                r = this.GetNavAreaObjects(t.target, n, {
                  target: !1,
                  navArea: !1,
                  activeNavArea: !1
                }),
                o = r.navArea,
                i = r.activeNavArea,
                a = (r.doc, r.dn);
              if (null != i) {
                (i.m_focusClaimElement = void 0),
                  Z(
                    n +
                      " '" +
                      t.key +
                      "' target in:" +
                      (o ? o.props.id : "-") +
                      " active:(" +
                      (i ? i.props.id : "-") +
                      ")"
                  ),
                  this.SetIsDoingKeyNav(a, !0);
                var s = function() {
                    null != t.preventDefault && t.preventDefault(),
                      null != t.stopPropagation && t.stopPropagation();
                  },
                  c = i.GetFocusedElement(),
                  l = c && oe(c),
                  u = null == l ? void 0 : l.m_actionDescriptionContext,
                  p =
                    null === (e = null == u ? void 0 : u.currentActions) ||
                    void 0 === e
                      ? void 0
                      : e.find(function(e) {
                          return (
                            e.button ===
                            (function(e) {
                              if ((console.info("pressed " + e.key), e.ctrlKey))
                                switch (e.key) {
                                  case "1":
                                    return b.c.Menu;
                                  default:
                                    return;
                                }
                              switch (e.key) {
                                case "Enter":
                                  return b.c.A;
                                case "Escape":
                                  return b.c.B;
                                case "Backspace":
                                  return b.c.X;
                                case " ":
                                  return b.c.Y;
                                case "ArrowLeft":
                                  return b.c.Left;
                                case "ArrowRight":
                                  return b.c.Right;
                                case "ArrowUp":
                                  return b.c.Up;
                                case "ArrowDown":
                                  return b.c.Down;
                                default:
                                  return;
                              }
                            })(t)
                          );
                        });
                if (p)
                  return (
                    Z("+ actionDescription {"), p.action(), s(), void Z("+ }")
                  );
                var m,
                  d = W.k_KeyNavigationDirections[t.key];
                if (!d)
                  return (
                    Z("+ Non-Arrow Key."),
                    void ("Enter" === t.key
                      ? (null != (m = i.GetFocusedElement()) &&
                          "true" == m.getAttribute("data-nav-npa")) ||
                        !i.ClickFocusedElement() ||
                        s()
                      : "Escape" === t.key
                      ? i.props.onGoBack &&
                        (Z("+ onGoBack {"), i.props.onGoBack(), s(), Z("+ }"))
                      : "1" === t.key &&
                        t.ctrlKey &&
                        i.props.onHome &&
                        (Z("+ onHome {"), i.props.onHome(), s(), Z("+ }")))
                  );
                Z("+ Arrow Key.");
                var h = d[0],
                  f = d[1],
                  v = i.FindNextNavStop(h, f);
                v &&
                  this.IsTargetable(v.htmlElement) &&
                  (i.SetFocus(v.htmlElement, v.pos), s());
              } else Z(n + ": no active nav area.");
            }),
            (W.SetDefaultFocusMarker = function(e) {
              W.sm_defaultFocusMarker = e;
            }),
            (W.GetDocumentNavState = function(e) {
              return W.sm_documentStates.get(e);
            }),
            (W.GetActiveNavArea = function(e) {
              var t = e.m_navAreaStack;
              if (0 !== t.length) return t[t.length - 1];
            }),
            (W.SetIsDoingKeyNav = function(e, t) {
              W.sm_bIsDoingKeyNav = t;
            }),
            (W.GetIsDoingKeyNav = function(e) {
              return W.sm_bIsDoingKeyNav;
            }),
            (W.GetNavAreaObjects = function(r, o, i) {
              if (!_.IsNavEnabled) return {};
              if (!te(r))
                return (
                  Object(f.a)(
                    !0 !== i.target,
                    o + " expects target is HTML element."
                  ),
                  {}
                );
              var e = r,
                a = e.ownerDocument;
              if (null == a)
                return (
                  Object(f.a)(
                    !0 !== i.target,
                    o + " expects target has ownerDocument.",
                    e
                  ),
                  {}
                );
              if (!a.contains(r))
                return (
                  Object(f.a)(
                    !0 !== i.target,
                    o + " expects target is in document."
                  ),
                  {}
                );
              var s = W.GetDocumentNavState(a);
              if (null == s)
                return (
                  Object(f.a)(!1, o + " expects target document nav state"), {}
                );
              var t =
                  null == i.navArea
                    ? {}
                    : (function() {
                        var e = W.FindAncestorNavAreaElement(r);
                        if (null == e)
                          return (
                            Object(f.a)(
                              !0 !== i.navArea,
                              o + " expects target has nav area ancestor."
                            ),
                            {}
                          );
                        var t = e.ownerDocument;
                        if (null == t)
                          return (
                            Object(f.a)(
                              !0 !== i.navArea,
                              o + " expects target nav area has ownerDocument."
                            ),
                            {}
                          );
                        if (!t.contains(e))
                          return (
                            Object(f.a)(
                              !0 !== i.navArea,
                              o + " expects target nav area is in document."
                            ),
                            {}
                          );
                        if (!(t === a))
                          return (
                            Object(f.a)(
                              !0 !== i.navArea,
                              o +
                                " expects target and target nav area are in same document."
                            ),
                            {}
                          );
                        var n = s.m_elementNavAreaMap.get(e);
                        return null == n
                          ? (Object(f.a)(
                              !0 !== i.navArea,
                              o + " expects target nav area is registered."
                            ),
                            {})
                          : { navArea: n, navAreaElement: e };
                      })(),
                n = t.navArea,
                c = void 0 === n ? void 0 : n,
                l = t.navAreaElement,
                u = void 0 === l ? void 0 : l,
                p =
                  null == i.activeNavArea
                    ? {}
                    : (function() {
                        var e = W.GetActiveNavArea(s);
                        if (null == e)
                          return (
                            Object(f.a)(
                              !0 !== i.activeNavArea,
                              o + " expects nav area is registered."
                            ),
                            {}
                          );
                        var t = e.m_navAreaDivRef.current,
                          n = t.ownerDocument;
                        return null == n
                          ? (Object(f.a)(
                              !0 !== i.activeNavArea,
                              o + " expects nav area has ownerDocument."
                            ),
                            {})
                          : n.contains(t)
                          ? n === a
                            ? { activeNavArea: e, activeNavAreaElement: t }
                            : (Object(f.a)(
                                !0 !== i.navArea,
                                o +
                                  " expects target and active nav area are in same document."
                              ),
                              {})
                          : (Object(f.a)(
                              !0 !== i.activeNavArea,
                              o + " expects nav area is in document."
                            ),
                            {});
                      })(),
                m = p.activeNavArea,
                d = void 0 === m ? void 0 : m,
                h = p.activeNavAreaElement;
              return {
                navArea: c,
                navAreaElement: u,
                activeNavArea: d,
                activeNavAreaElement: void 0 === h ? void 0 : h,
                doc: a,
                dn: s
              };
            }),
            (W.FindAncestorNavAreaElement = function(e) {
              return Object(J.j)(e, function(e) {
                return e.getAttribute("data-nav") === Q.Area;
              });
            }),
            (W.IsTargetable = function(e) {
              var t = e.getAttribute("data-nav");
              return t === Q.Stop || t === Q.Click;
            }),
            (W.IsFocusable = function(e) {
              return e.getAttribute("data-nav") === Q.Stop;
            }),
            (W.IsClickable = function(e) {
              return e.getAttribute("data-nav") === Q.Stop;
            }),
            (W.FindAnchorElement = function(e) {
              return e;
            }),
            (W.GetScrollOffset = function(e, t, n) {
              var r = e,
                o = r.getAttribute("data-nav-enter-as-scrolled-axes");
              if (o === h.XY || o === t) return null;
              var i = null != r.getAttribute("data-nav"),
                a = i ? r.getAttribute("data-nav-scroll-axes") : void 0;
              return i && a !== h.XY && a !== t
                ? null
                : "x" === t
                ? { x: r.scrollLeft, y: 0 }
                : { x: 0, y: r.scrollTop };
            }),
            (W.UpdateFocusPosAfterLayoutChange = function(e, t) {
              for (
                var n = e;
                null != n;
                n = W.FindAncestorNavAreaElement(n.parentElement)
              ) {
                var r = t.m_elementNavAreaMap.get(n),
                  o = r.m_focusPos,
                  i = r.GetFocusPos();
                o !== i && ((r.m_focusPos = i), r.UpdateFocusMarker(!0));
              }
            }),
            (W.FindNextNavStopInContainer = function(c, e, l, u, p, t, n) {
              Z(
                "NavArea.FindNextNavStopInContainer c:" +
                  $(c) +
                  " foc:" +
                  $(e) +
                  " " +
                  ee(l)
              );
              var r,
                o,
                i =
                  "x" === u
                    ? "data-nav-xorder"
                    : "y" === u
                    ? "data-nav-yorder"
                    : void 0,
                a = c.getAttribute(i),
                s = a === ie.Geometry || null == a,
                m = a === ie.ReverseDomOrder,
                d = n ? W.GetScrollOffset(c, u, p) : null,
                h = d ? X(d, -1) : null,
                f = h ? K(l, h) : l,
                v = z[u],
                b = -1 === (V()[u] = p) ? "max" : "min",
                g = { min: f[v], max: f[v] },
                _ =
                  t && te(e)
                    ? ((r = g),
                      (o = ne(e)[v]),
                      {
                        min: r.min < o.min ? r.min : o.min,
                        max: r.max > o.max ? r.max : o.max
                      })
                    : g,
                y = null,
                E = null,
                O = 1 / 0,
                w = Object(J.k)(c, "data-nav");
              m != (-1 === p) && w.reverse();
              for (
                var S = [], C = null == e ? 0 : null, D = 0, M = w;
                D < M.length;
                D++
              ) {
                if ((G = M[D]) !== e) {
                  if (
                    (null !== C && ++C, G.getAttribute("data-nav") !== Q.Area)
                  ) {
                    n &&
                      null === y &&
                      "true" === G.getAttribute("data-nav-preferred") &&
                      (y = G);
                    var x = 0;
                    if (s) {
                      var A = ne(G),
                        k = f[u],
                        j = p * (A[u][b] - k);
                      if (j < 0) continue;
                      var I = f[v],
                        N = A[v].min,
                        R = A[v].max,
                        T = I < N ? I - N : R < I ? I - R : 0;
                      if (t) if (!q(_, { min: N, max: R })) continue;
                      var L = { x: 0, y: 0 };
                      (L[u] = A[u][b]), (L[v] = I + T);
                      var B = Y(f, L),
                        x = (j * j + T * T) / Math.abs(B[u]);
                    } else {
                      if (null == C) continue;
                      x = C;
                    }
                    x < O && ((O = x), (E = G)),
                      S.push({ score: x, element: G });
                  }
                } else C = 0;
              }
              function F(e, t) {
                void 0 === t && (t = !1);
                var n = e.getAttribute("data-nav");
                if (n === Q.Stop || n === Q.Click) {
                  if (te(e)) {
                    var r = e,
                      o = re(r),
                      i = !l || t ? o : { x: l.x, y: l.y };
                    i[u] = o[u];
                    var a = { htmlElement: r, pos: i };
                    return d && (a.onscreenTestElement = c), a;
                  }
                  return null;
                }
                if (n === Q.Group) {
                  var s = W.FindNextNavStopInContainer(
                    e,
                    null,
                    f,
                    u,
                    p,
                    !1,
                    !0
                  );
                  if (s) return s;
                }
                return null;
              }
              var P;
              if (
                (Z("+ Searching " + w.length + " elements:", w, S, y, E), y) &&
                (P = F(y, !0))
              )
                return P;
              if (E) {
                if ((P = F(E))) return P;
                S.sort(function(e, t) {
                  return e.score - t.score;
                });
                for (var G, U = 0; U < S.length; ++U) {
                  if ((G = S[U].element) !== E) {
                    var H = F(G);
                    if (H) return H;
                  }
                }
              }
              return null;
            }),
            (W.FindNextNavStopWithinAndAcrossContainers = function(
              e,
              t,
              n,
              r,
              o
            ) {
              Z(
                "NavArea.FindNextNavStopWithinAndAcrossContainers root:#" +
                  e.id +
                  ".'" +
                  e.className +
                  "' focus:#" +
                  t.id +
                  ".'" +
                  t.className +
                  "'"
              );
              for (var i = t; ; ) {
                var a = Object(J.i)(e, i, "data-nav"),
                  s = W.FindNextNavStopInContainer(a, i, n, r, o, !0, !1);
                if (null !== s) return s;
                if (a === e) return null;
                for (var c = i.parentElement; c && c !== a; ) {
                  if (S(c, r, o) === d.Scrollable) return null;
                  c = c.parentElement;
                }
                if (!c) return null;
                if (c === a && S(c, r, o) === d.Scrollable) return null;
                var l = le.GetOnNavOut(a);
                if (l) {
                  Z("+ onNavOut {");
                  var u = V();
                  u[r] = o;
                  var p = l(u);
                  if ((Z("+ } => " + p), !1 === p)) return null;
                }
                i = a;
              }
            }),
            (W.AddEventListeners = function(e) {
              for (var t = 0, n = W.k_EventListeners; t < n.length; t++) {
                var r = n[t],
                  o = r[0],
                  i = r[1];
                e.addEventListener(o, i, !0);
              }
            }),
            (W.RemoveEventListeners = function(e) {
              for (var t = 0, n = this.k_EventListeners; t < n.length; t++) {
                var r = n[t],
                  o = r[0],
                  i = r[1];
                e.removeEventListener(o, i, !0);
              }
            }),
            (W.HandleAllOnKeyDown = function(e) {
              Z("NavArea.HandleAllOnKeyDown " + e.key),
                W.HandleKeyDown({
                  target: e.target,
                  key: e.key,
                  ctrlKey: e.ctrlKey,
                  stopPropagation: function() {
                    return e.stopImmediatePropagation();
                  },
                  preventDefault: function() {
                    return e.preventDefault();
                  }
                });
            }),
            (W.HandleAllOnScroll = function(e) {
              var t,
                n = "NavArea.HandleAllOnScroll",
                r = W.GetNavAreaObjects(e.target, n, {
                  target: !0,
                  navArea: !1
                }),
                o = r.navArea,
                i = r.navAreaElement,
                a = r.dn;
              null != o &&
                (Z(n + " (" + o.props.id + ") " + $(e.target)),
                null != (t = oe(e.target)) &&
                  t instanceof le &&
                  t.UpdateScrollPos(),
                W.UpdateFocusPosAfterLayoutChange(i, a));
            }),
            (W.HandleAllOnAnimationStart = function(e) {}),
            (W.HandleAllOnAnimationEnd = function(e) {
              var t = W.GetNavAreaObjects(
                  e.target,
                  "NavArea.HandleAllOnAnimationEnd",
                  { target: !0, navArea: !1 }
                ),
                n = t.navArea,
                r = t.navAreaElement,
                o = t.dn;
              null != n && W.UpdateFocusPosAfterLayoutChange(r, o);
            }),
            (W.HandleAllOnTransitionStart = function(e) {}),
            (W.HandleAllOnTransitionEnd = function(e) {
              var t = W.GetNavAreaObjects(
                  e.target,
                  "NavArea.HandleAllOnTransitionEnd",
                  { target: !0, navArea: !1 }
                ),
                n = t.navArea,
                r = t.navAreaElement,
                o = t.dn;
              null != n &&
                (n.m_focusMarker.IsEventSource(e) ||
                  W.UpdateFocusPosAfterLayoutChange(r, o));
            }),
            (W.HandleAllOnMouseDown = function(e) {
              var t,
                n = "NavArea.HandleAllOnMouseDown",
                r = W.GetNavAreaObjects(e.target, n, {
                  target: !0,
                  navArea: !1
                }),
                o = r.navArea,
                i = r.dn;
              null != o &&
                (Z(n + " (" + o.props.id + "):", e.target),
                W.SetIsDoingKeyNav(i, !1),
                null !=
                  (null == (t = o.GetFocusController())
                    ? void 0
                    : t.HandleNavStopClick) &&
                  (Z("+ preventDefault"), e.preventDefault()));
            }),
            (W.HandleAllOnClick = function(e) {
              var t,
                n,
                r,
                o = "NavArea.HandleAllOnClick",
                i = W.GetNavAreaObjects(e.target, o, {
                  target: !0,
                  navArea: !1
                }).navArea;
              null != i &&
                (Z(o + " (" + i.props.id + "):", e.target),
                null !=
                (n =
                  null == (t = i.GetFocusController())
                    ? void 0
                    : t.HandleNavStopClick)
                  ? (r = e.target).getAttribute("data-nav") === Q.Stop &&
                    (Z("+ handleNavStopClick {"), n(e, r), Z("+ }"))
                  : Z("+ nop."));
            }),
            (W.HandleFocusControllerOnFocus = function(e) {
              var t,
                n,
                r,
                o = "NavArea.HandleFocusControllerOnFocus",
                i = oe(e),
                a = null == i ? void 0 : i.m_actionDescriptionContext;
              a && a.setCurrentActions(a.focusActions),
                null != e.ownerDocument &&
                  ((n = (t = W.GetNavAreaObjects(e, o, {
                    target: !0,
                    navArea: !1
                  })).navArea),
                  (r = t.dn),
                  null != n &&
                    (Z(o + " (" + n.props.id + ")", e),
                    n !== W.GetActiveNavArea(r) && n.Activate(),
                    n.UpdateFocus(e)));
            }),
            (W.HandleFocusControllerOnBlur = function(e) {
              var t,
                n = "NavArea.HandleFocusControllerOnBlur",
                r = oe(e),
                o = null == r ? void 0 : r.m_actionDescriptionContext;
              o && o.setCurrentActions(void 0),
                null == e.ownerDocument ||
                  (null !=
                    (t = W.GetNavAreaObjects(e, n, { target: !0, navArea: !1 })
                      .navArea) &&
                    (Z(n + " (" + t.props.id + ")", e), t.UpdateFocus(null)));
            }),
            (W.prototype.HandleKeyDown = function(e) {
              W.HandleKeyDown({
                target: this.m_navAreaDivRef.current,
                key: e.key,
                ctrlKey: e.ctrlKey,
                stopPropagation: function() {
                  return e.stopPropagation();
                },
                preventDefault: function() {
                  return e.preventDefault();
                }
              });
            }),
            (W.prototype.GetFocusedElement = function() {
              var e = "NavArea.GetFocusedElement";
              if (
                (Z(e + " (" + this.props.id + ")"),
                null != this.GetElementDocState(e).dn)
              )
                return this.GetFocusController().GetFocus();
            }),
            (W.prototype.ClickFocusedElement = function() {
              Z("NavArea.ClickFocusedElement (" + this.props.id + ")");
              var e = this.GetFocusedElement();
              return null != e && (this.GetFocusController().Click(e), !0);
            }),
            (W.prototype.Blur = function(e) {
              var t = "NavArea.Blur";
              Z(t + " (" + this.props.id + ")");
              var n,
                r = this.GetElementDocState(t).dn;
              null != r &&
                ((n = this.m_inFocusCallType),
                (this.m_inFocusCallType = "blur"),
                (this.m_focusClaimElement = void 0),
                (this.m_lastFocusedHtmlElement = null),
                (this.m_lastFocusPosOffsetFromAnchorElement = null),
                (this.m_focusedHtmlElement = null),
                (this.m_focusPos = null),
                (this.m_focusPosOffsetFromAnchorElement = null),
                this === W.GetActiveNavArea(r) &&
                  this.GetFocusController().Focus(null),
                (this.m_inFocusCallType = n));
            }),
            (W.prototype.Activate = function() {
              var e = "NavArea.Activate";
              Z(
                e +
                  " (" +
                  this.props.id +
                  ") " +
                  (this.props.startInactive ? "startInactive" : "")
              );
              var t,
                n,
                r,
                o,
                i,
                a,
                s = this.GetElementDocState(e),
                c = s.thisElement,
                l = s.dn;
              null != l &&
                (null != (t = W.GetActiveNavArea(l)) &&
                  t != this &&
                  (Z(
                    "+ remembering last focused element:",
                    t.m_focusedHtmlElement,
                    t.m_focusPos
                  ),
                  (t.m_lastFocusedHtmlElement = t.m_focusedHtmlElement),
                  (t.m_lastFocusPosOffsetFromAnchorElement =
                    t.m_focusPosOffsetFromAnchorElement),
                  (t.m_focusedHtmlElement = null),
                  (t.m_focusPosOffsetFromAnchorElement = null)),
                (l.m_navAreaStack = Object(F.b)(l.m_navAreaStack, this)),
                c.setAttribute("data-nav-area-active", "true"),
                l.m_navAreaStack.push(this),
                null != (n = this.m_lastFocusedHtmlElement) && W.IsFocusable(n)
                  ? (Z("+ focusing last:", n, this.m_focusPos),
                    (r = W.FindAnchorElement(n))
                      ? ((o = re(r)),
                        this.SetFocus(
                          n,
                          K(o, this.m_lastFocusPosOffsetFromAnchorElement)
                        ))
                      : this.SetFocus(n, void 0))
                  : null !==
                      (i = this.FindBestNavStopFocus(
                        this.m_navAreaDivRef.current,
                        void 0,
                        void 0
                      )) && W.IsFocusable(i.htmlElement)
                  ? (Z("+ focusing found:", i.htmlElement, i.pos),
                    this.SetFocus(i.htmlElement, i.pos))
                  : Z("+ no focus found."),
                null != (a = this.props.onActivate) &&
                  (Z("+ onActivate {"), a(), Z("+ }")));
            }),
            (W.prototype.Deactivate = function() {
              var e = "NavArea.Deactivate";
              Z(
                e +
                  " (" +
                  this.props.id +
                  ") " +
                  (this.props.startInactive ? "startInactive" : "")
              );
              var t,
                n,
                r = this.GetElementDocState(e),
                o = r.thisElement,
                i = r.dn;
              null != i &&
                (this.Blur(),
                o.setAttribute("data-nav-area-active", "false"),
                (i.m_navAreaStack = Object(F.b)(i.m_navAreaStack, this)),
                null != (t = W.GetActiveNavArea(i)) && t.Activate(),
                Z("+ now active: " + (null != t ? t.props.id : "-")),
                null != (n = this.props.onDeactivate) &&
                  (Z("+ onDeactivate {"), n(), Z("+ }")));
            }),
            (W.prototype.GetFocusControllerDomIntegrator = function() {
              return null != this.props.focusController
                ? this.props.focusController
                : W.sm_htmlDomFocusControllerDomIntegrator;
            }),
            (W.prototype.GetFocusController = function() {
              return this.m_focusController;
            }),
            (W.prototype.ClaimFocus = function(e) {
              var t = "NavArea.ClaimFocus";
              null != this.m_navAreaDivRef.current
                ? null !== this.m_focusClaimElement
                  ? (Z(t + " first claim now."),
                    this.SetFocus(e, void 0),
                    (this.m_focusClaimElement = null))
                  : Z(t + " already claimed now, ignored.")
                : null == this.m_focusClaimElement
                ? (Z(t + " first claim delay."), (this.m_focusClaimElement = e))
                : Z(t + " already claimed delay, ignored.");
            }),
            (W.prototype.GetElementDoc = function(e) {
              if (!_.IsNavEnabled) return {};
              var t = this.m_navAreaDivRef.current;
              if (null == t)
                return Object(f.a)(!1, e + " expects nav area ref."), {};
              var n = t.ownerDocument;
              return null == n
                ? (Object(f.a)(!1, e + " expects nav area ownerDocument."), {})
                : n.contains(t)
                ? { thisElement: t, doc: n }
                : (Object(f.a)(!1, e + " expects nav area to be in document."),
                  {});
            }),
            (W.prototype.GetElementDocState = function(e) {
              var t = this.GetElementDoc(e),
                n = t.thisElement,
                r = t.doc;
              if (null == r) return {};
              var o = W.GetDocumentNavState(r);
              return null == o
                ? (Object(f.a)(!1, e + " expects document nav state."), {})
                : { thisElement: n, doc: r, dn: o };
            }),
            (W.prototype.SetFocus = function(r, e) {
              var t, n, o, i, a, s, c, l, u, p, m, b, d;
              r.ownerDocument.contains(r)
                ? ((t = this.GetFocusController()),
                  r.getAttribute("data-nav") !== Q.Click
                    ? ((n = this.m_inFocusCallType),
                      (this.m_inFocusCallType = "focus"),
                      Z(
                        "NavArea.SetFocus (" +
                          this.m_navAreaDivRef.current.id +
                          ") " +
                          ee(e),
                        r
                      ),
                      this.UpdateFocus(r, e),
                      (a = (i = (o = function(t, e) {
                        var n = Object(J.j)(r, function(e) {
                          return null != e.getAttribute(t);
                        });
                        return null == n
                          ? [void 0, void 0, void 0]
                          : [
                              n,
                              n.getAttribute(t),
                              parseFloat(n.getAttribute(e) || "0")
                            ];
                      })(
                        "data-nav-scroll-snap-type-x",
                        "data-nav-scroll-snap-margin-x"
                      ))[0]),
                      (s = i[1]),
                      (c = i[2]),
                      (u = (l = o(
                        "data-nav-scroll-snap-type-y",
                        "data-nav-scroll-snap-margin-y"
                      ))[0]),
                      (p = l[1]),
                      (m = l[2]),
                      s || p
                        ? (t.Focus(r, { preventScroll: !0 }),
                          (b = r.ownerDocument.defaultView),
                          (d = function(e, t, n, r) {
                            if (null != t)
                              for (
                                var o = ne(t),
                                  i = O(t),
                                  a = o[e].min - r * i,
                                  s = o[e].max + r * i,
                                  c = t.parentElement;
                                null != c;
                                c = c.parentElement
                              ) {
                                var l =
                                  "x" === e
                                    ? [
                                        c.scrollLeft,
                                        c.scrollWidth,
                                        c.clientWidth
                                      ]
                                    : [
                                        c.scrollTop,
                                        c.scrollHeight,
                                        c.clientHeight
                                      ];
                                if (!(l[1] <= l[2])) {
                                  var u = b.getComputedStyle(c),
                                    p = "x" === e ? u.overflowX : u.overflowY;
                                  if ("auto" === p || "scroll" === p) {
                                    var m = ne(c);
                                    if (
                                      n === M.Lazy &&
                                      m[e].min <= a &&
                                      m[e].max >= s
                                    )
                                      return;
                                    var d = {
                                        min: a - m[e].min,
                                        max: s - m[e].max
                                      },
                                      h =
                                        n === M.Start
                                          ? 0
                                          : n === M.Center
                                          ? 0.5
                                          : n !== M.End &&
                                            Math.abs(d.min) <= Math.abs(d.max)
                                          ? 0
                                          : 1,
                                      f = O(c),
                                      v = ((1 - h) * d.min + h * d.max) / f;
                                    return (
                                      Z(
                                        "+ snap " +
                                          e +
                                          ": " +
                                          n +
                                          " [ " +
                                          d.min +
                                          " -- " +
                                          h +
                                          " -- " +
                                          d.max +
                                          " ]"
                                      ),
                                      void ("x" === e
                                        ? (c.scrollLeft += v)
                                        : (c.scrollTop += v))
                                    );
                                  }
                                }
                              }
                          })("x", a, s, c),
                          d("y", u, p, m))
                        : t.Focus(r),
                      (this.m_inFocusCallType = n))
                    : t.Click(r))
                : Z(
                    "NavArea.SetFocus ** LOST ELEMENT ** (" +
                      this.m_navAreaDivRef.current.id +
                      ") " +
                      ee(e),
                    r
                  );
            }),
            (W.prototype.UpdateFocus = function(e, t) {
              var n, r;
              null == t &&
                null != e &&
                e != this.m_focusedHtmlElement &&
                (t = re(e)),
                Z("NavArea.UpdateFocus (" + this.props.id + ") " + ee(t), e),
                e != this.m_focusedHtmlElement &&
                  (Z("+ updating last focus element"),
                  null != (n = W.FindAnchorElement(e))
                    ? ((r = re(n)),
                      (this.m_focusPosOffsetFromAnchorElement = Y(r, t)))
                    : (this.m_focusPosOffsetFromAnchorElement = null),
                  (this.m_focusedHtmlElement = e),
                  (this.m_focusPos = null != t ? t : null));
              var o = oe(e);
              o instanceof se && o.GotFocus(), this.UpdateFocusMarker(!1);
            }),
            (W.prototype.UpdateFocusMarker = function(e) {
              var t;
              Z("NavArea.UpdateFocusMarker " + $(this.m_navAreaDivRef.current)),
                null != this.m_focusMarker &&
                  ((t = W.GetIsDoingKeyNav(this.m_docNavState)),
                  this.m_focusMarker.HandleOnFocusChanged(
                    e,
                    this.m_focusedHtmlElement,
                    t,
                    this.GetFocusPos()
                  ),
                  null != this.m_pointerFocusMarkerRef.current &&
                    this.m_pointerFocusMarkerRef.current.HandleOnFocusChanged(
                      e,
                      this.m_focusedHtmlElement,
                      t,
                      this.GetFocusPos()
                    ));
            }),
            (W.prototype.GetFocusPos = function() {
              var e = this.m_navAreaDivRef.current,
                t = this.m_focusedHtmlElement,
                n = this.m_focusPosOffsetFromAnchorElement;
              if (e && t && e.contains(t) && n) {
                var r = W.FindAnchorElement(t);
                if (r) return K(re(r), n);
              }
              return this.m_focusPos;
            }),
            (W.prototype.FindBestNavStopFocus = function(e, t, n) {
              var r = "NavArea.FindBestNavStopFocus";
              if (!e) return null;
              var o = e.ownerDocument;
              if (!o) return null;
              Z(r + " #" + e.id + ".'" + e.className + "'");
              var i = this.m_focusClaimElement;
              if (
                ((this.m_focusClaimElement = void 0),
                null != i &&
                  o.contains(i) &&
                  e.contains(i) &&
                  i.getAttribute("data-nav") === Q.Stop)
              )
                return { htmlElement: i, pos: re(i) };
              var a = this.m_focusedHtmlElement,
                s = this.GetFocusPos();
              if (
                a &&
                o.contains(a) &&
                e.contains(a) &&
                a.getAttribute("data-nav") === Q.Stop
              )
                return { htmlElement: a, pos: s || re(a) };
              var c = Object(J.k)(e, "data-nav").filter(function(e) {
                return te(e) && "true" === e.getAttribute("data-nav-preferred");
              });
              if (0 < c.length) {
                var l = c[0],
                  u = l.getAttribute("data-nav");
                if (u === Q.Group) {
                  var p = this.FindBestNavStopFocus(l, t, n);
                  if (p) return p;
                } else if (u === Q.Stop) {
                  return { htmlElement: l, pos: re(l) };
                }
              }
              var m = Array.from(
                e.querySelectorAll(
                  "[data-nav='" + Q.Stop + "'],[data-nav='" + Q.Click + "]"
                )
              ).filter(te);
              if (!m || 0 === m.length) return null;
              var d = W.GetNavAreaObjects(e, r, {
                  target: !0,
                  activeNavArea: !0
                }),
                h = d.activeNavArea,
                f = (d.activeNavAreaElement, d.dn);
              if (void 0 === f) return null;
              if (h.props.initFromBoundary && void 0 !== t && void 0 !== n) {
                var v =
                    "x" === t
                      ? "data-nav-xorder"
                      : "y" === t
                      ? "data-nav-yorder"
                      : void 0,
                  b = e.getAttribute(v);
                if (!(b === ie.Geometry || null == b)) {
                  var g =
                    (b === ie.ReverseDomOrder) != (-1 === n)
                      ? m[m.length - 1]
                      : m[0];
                  return { htmlElement: g, pos: re(g) };
                }
                for (
                  var _ = -1 === n ? "max" : "min",
                    y = null,
                    E = 1 / 0,
                    O = 0,
                    w = m;
                  O < w.length;
                  O++
                ) {
                  var S = n * ne((N = w[O]))[t][_];
                  S < E && ((E = S), (y = N));
                }
                if (null !== y) return { htmlElement: y, pos: re(y) };
              }
              var C,
                D = f.m_navAreaStack,
                M = Object(F.e)(D, function(e) {
                  return null !== e.m_focusPos;
                });
              if (M) {
                for (
                  var x = M.GetFocusPos(),
                    A = Number.POSITIVE_INFINITY,
                    k = null,
                    j = 0,
                    I = m;
                  j < I.length;
                  j++
                ) {
                  var N,
                    R = re((N = I[j])),
                    T = ((C = Y(x, R)), Math.sqrt(B(C, C)));
                  T < A && ((A = T), (k = N));
                }
                if (k) return { htmlElement: k, pos: re(k) };
              }
              var L = m[0];
              return L
                ? { htmlElement: L, pos: re(L) }
                : (Z("+ found no nav stop."), null);
            }),
            (W.prototype.FindNextNavStop = function(e, t) {
              var n = "NavArea.FindNextNavStop";
              Z(n + " (" + this.props.id + ")");
              var r = this.m_navAreaDivRef.current;
              if (!r) return null;
              var o = r.ownerDocument;
              if (!o || o !== this.m_document || !o.contains(r)) return null;
              var i,
                a,
                s,
                c,
                l,
                u = null,
                p = this.GetFocusController().GetFocus();
              if (
                (te(p) && o.contains(p) && p !== r && r.contains(p)
                  ? ((i =
                      (null !== this.m_focusPos &&
                        this.m_focusedHtmlElement === p &&
                        this.GetFocusPos()) ||
                      re(p)),
                    (s = W.FindNextNavStopWithinAndAcrossContainers(
                      r,
                      p,
                      i,
                      e,
                      t
                    )) ||
                      (Z(
                        n + ": Navigated to self (shouldn't happen!); retrying"
                      ),
                      (a = re(p)),
                      (s = W.FindNextNavStopWithinAndAcrossContainers(
                        r,
                        p,
                        a,
                        e,
                        t
                      ))),
                    s && (u = s))
                  : (u = this.FindBestNavStopFocus(
                      this.m_navAreaDivRef.current,
                      e,
                      t
                    )),
                null !== u)
              ) {
                var m = o.defaultView;
                if (!m) return null;
                var d =
                    parseFloat(m.getComputedStyle(o.firstElementChild).zoom) ||
                    1,
                  h = {
                    x: { min: -40 * d, max: (m.innerWidth + 40) * d },
                    y: { min: -40 * d, max: (m.innerHeight + 40) * d }
                  },
                  f = ne(u.onscreenTestElement || u.htmlElement);
                if (q((c = h).x, (l = f).x) && q(c.y, l.y)) return u;
              }
              return null;
            }),
            (W.prototype.Register = function() {
              var e = "NavArea.Register";
              Z(e + " (" + this.props.id + ")");
              var t,
                n,
                r,
                o = this.GetElementDoc(e),
                i = o.thisElement,
                a = o.doc;
              null != a &&
                ((t = (function() {
                  var e = W.GetDocumentNavState(a);
                  if (null != e) return e;
                  Z("+ creating new DocumentNavState");
                  var t = new ue(a);
                  return (
                    W.AddEventListeners(a), W.sm_documentStates.set(a, t), t
                  );
                })()),
                (this.m_document = a),
                (this.m_docNavState = t),
                null !=
                  (n =
                    this.props.focusController || t.m_defaultFocusController) &&
                  (t.m_focusControllers.has(n) ||
                    (n.AddFocusListener(W.HandleFocusControllerOnFocus),
                    n.AddBlurListener(W.HandleFocusControllerOnBlur)),
                  t.m_focusControllers.add(n)),
                (this.m_focusController = n),
                null !=
                  (r =
                    this.props.focusMarker ||
                    W.sm_defaultFocusMarker ||
                    (null != this.m_boxFocusMarker
                      ? this.m_boxFocusMarker
                      : (this.m_boxFocusMarker = new R(
                          this.m_boxFocusMarkerDivRef
                        )))) && t.m_focusMarkers.add(r),
                (this.m_focusMarker = r),
                t.m_elementNavAreaMap.set(i, this),
                this.props.startInactive || this.Activate());
            }),
            (W.prototype.Unregister = function() {
              var e = "NavArea.Unregister";
              Z(e + " (" + this.props.id + ")");
              var t,
                n,
                r = this.GetElementDocState(e),
                o = r.thisElement,
                i = r.doc,
                a = r.dn;
              null != a &&
                (this.Deactivate(),
                a.m_elementNavAreaMap.delete(o),
                null != (t = this.m_focusMarker) && a.m_focusMarkers.delete(t),
                null != (n = this.m_focusController) &&
                  (a.m_focusControllers.delete(n),
                  a.m_focusControllers.has(n) ||
                    (n.RemoveFocusListener(W.HandleFocusControllerOnFocus),
                    n.RemoveBlurListener(W.HandleFocusControllerOnBlur))),
                a.isEmpty &&
                  (W.RemoveEventListeners(i), W.sm_documentStates.delete(i)));
            }),
            (W.prototype.componentDidMount = function() {
              Z("NavArea.componentDidMount (" + this.props.id + ")"),
                this.Register();
            }),
            (W.prototype.componentWillUnmount = function() {
              Z("NavArea.componentWillUnmount (" + this.props.id + ")"),
                this.Unregister();
            }),
            (W.prototype.render = function() {
              var e = this.props,
                t = e.className,
                n = e.children,
                r = (e.initFromBoundary,
                e.onActivate,
                e.onDeactivate,
                e.onGoBack,
                e.onHome,
                e.focusController,
                e.focusMarker,
                e.startInactive),
                o = Object(c.f)(e, [
                  "className",
                  "children",
                  "initFromBoundary",
                  "onActivate",
                  "onDeactivate",
                  "onGoBack",
                  "onHome",
                  "focusController",
                  "focusMarker",
                  "startInactive"
                ]),
                i = _.IsNavEnabled,
                a = _.IsPointerVisible,
                s = _.IsDefaultFocusMarkerVisible;
              return i
                ? l.createElement(
                    C.Provider,
                    { value: this },
                    l.createElement(
                      "div",
                      Object(c.a)(
                        {
                          "data-nav": Q.Area,
                          "data-nav-area-active": "false",
                          "data-nav-area-pass": r ? "true" : void 0,
                          ref: this.m_navAreaDivRef,
                          className: Object(u.a)(g, t)
                        },
                        o
                      ),
                      i &&
                        a &&
                        l.createElement(N, {
                          ref: this.m_pointerFocusMarkerRef,
                          className: "nav-area-pointer-fm",
                          style: {
                            margin: 0,
                            padding: 0,
                            background:
                              "linear-gradient( -45deg, rgba( 0, 0, 0, 0 ) 0%, rgba( 0, 0, 0, 0 ) 50%, rgba( 255, 0, 0, 0.95 ) 75% )",
                            borderTop: "3px solid black",
                            borderLeft: "3px solid black",
                            width: "30px",
                            height: "30px",
                            zIndex: 1e6
                          }
                        }),
                      i &&
                        s &&
                        l.createElement("div", {
                          ref: this.m_boxFocusMarkerDivRef,
                          className: "nav-area-box-fm",
                          style: {
                            position: "absolute",
                            boxSizing: "border-box",
                            pointerEvents: "none",
                            margin: "0",
                            border: "4px solid magenta",
                            padding: "4px",
                            width: "10px",
                            height: "10px",
                            zIndex: 1e5,
                            willChange: "left, top, width, height"
                          }
                        }),
                      n
                    )
                  )
                : l.createElement(
                    "div",
                    Object(c.a)({ ref: this.m_navAreaDivRef, className: t }, o),
                    n
                  );
            }),
            (W.sm_documentStates = new Map()),
            (W.sm_bIsDoingKeyNav = !0),
            (W.k_EventListeners = [
              ["keydown", W.HandleAllOnKeyDown],
              ["scroll", W.HandleAllOnScroll],
              ["mousedown", W.HandleAllOnMouseDown],
              ["click", W.HandleAllOnClick],
              ["animationstart", W.HandleAllOnAnimationStart],
              ["animationend", W.HandleAllOnAnimationEnd],
              ["transitionstart", W.HandleAllOnTransitionStart],
              ["transitionend", W.HandleAllOnTransitionEnd]
            ]),
            (W.k_KeyNavigationDirections = {
              ArrowLeft: ["x", -1],
              ArrowRight: ["x", 1],
              ArrowUp: ["y", -1],
              ArrowDown: ["y", 1]
            }),
            Object(c.c)([E], W.prototype, "HandleKeyDown", null),
            Object(c.c)([E], W.prototype, "GetFocusedElement", null),
            Object(c.c)([E], W.prototype, "ClickFocusedElement", null),
            Object(c.c)([E], W.prototype, "Blur", null),
            Object(c.c)([E], W.prototype, "Activate", null),
            Object(c.c)([E], W.prototype, "Deactivate", null),
            Object(c.c)([E], W.prototype, "ClaimFocus", null),
            Object(c.c)([E], W.prototype, "SetFocus", null),
            Object(c.c)([E], W.prototype, "UpdateFocus", null),
            Object(c.c)([E], W.prototype, "UpdateFocusMarker", null),
            Object(c.c)([E], W.prototype, "FindBestNavStopFocus", null),
            Object(c.c)([E], W.prototype, "FindNextNavStop", null),
            Object(c.c)([E], W.prototype, "Register", null),
            Object(c.c)([E], W.prototype, "Unregister", null),
            Object(c.c)([E], W.prototype, "componentDidMount", null),
            Object(c.c)([E], W.prototype, "componentWillUnmount", null),
            Object(c.c)([E], W, "FocusWithin", null),
            Object(c.c)([E], W, "HandleKeyDown", null),
            Object(c.c)([E], W, "GetScrollOffset", null),
            Object(c.c)([E], W, "UpdateFocusPosAfterLayoutChange", null),
            Object(c.c)([E], W, "FindNextNavStopInContainer", null),
            Object(c.c)(
              [E],
              W,
              "FindNextNavStopWithinAndAcrossContainers",
              null
            ),
            Object(c.c)([E], W, "HandleAllOnKeyDown", null),
            Object(c.c)([E], W, "HandleAllOnScroll", null),
            Object(c.c)([E], W, "HandleAllOnAnimationStart", null),
            Object(c.c)([E], W, "HandleAllOnAnimationEnd", null),
            Object(c.c)([E], W, "HandleAllOnTransitionStart", null),
            Object(c.c)([E], W, "HandleAllOnTransitionEnd", null),
            Object(c.c)([E], W, "HandleAllOnMouseDown", null),
            Object(c.c)([E], W, "HandleAllOnClick", null),
            Object(c.c)([E], W, "HandleFocusControllerOnFocus", null),
            Object(c.c)([E], W, "HandleFocusControllerOnBlur", null),
            W
          );
        })(l.Component);
    },
    WBba: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return a;
      });
      var p = n("mrSG"),
        m = n("H7XF"),
        u = n("hRO2"),
        d = n("bxBv"),
        r = n("bxiW"),
        o = n("vDqi"),
        h = n.n(o),
        f = n("mC9v"),
        i = n("kLLr"),
        a = (function() {
          function e(e, t, n) {
            void 0 === n && (n = !1),
              (this.m_webApiAccessToken = ""),
              (this.m_bJsonMode = !1),
              (this.m_strWebAPIBaseURL = e),
              (this.m_webApiAccessToken = t),
              (this.m_bJsonMode = n),
              this.ConstructServiceTransport();
          }
          return (
            (e.prototype.WaitUntilLoggedOn = function() {
              return Promise.resolve();
            }),
            (e.prototype.GetServerRTime32 = function() {
              return Number(new Date());
            }),
            Object.defineProperty(e.prototype, "steamid", {
              get: function() {
                return new i.a();
              },
              enumerable: !1,
              configurable: !0
            }),
            (e.prototype.RTime32ToDate = function(e) {
              return new Date(1e3 * e);
            }),
            (e.prototype.GetServiceTransport = function() {
              return this.m_ServiceTransport;
            }),
            (e.prototype.GetAnonymousServiceTransport = function() {
              return this.m_AnonymousServiceTransport;
            }),
            (e.prototype.ConstructServiceTransport = function() {
              (this.m_ServiceTransport = {
                SendMsg: this.SendMsgAndAwaitResponse.bind(this, {
                  bSendAuth: !0
                }),
                SendNotification: this.SendNotification.bind(this, {
                  bSendAuth: !0
                })
              }),
                (this.m_AnonymousServiceTransport = {
                  SendMsg: this.SendMsgAndAwaitResponse.bind(this, {
                    bSendAuth: !1
                  }),
                  SendNotification: this.SendNotification.bind(this, {
                    bSendAuth: !1
                  })
                });
            }),
            (e.prototype.SendMsgAndAwaitResponse = function(i, a, s, c, l) {
              return Object(p.b)(this, void 0, void 0, function() {
                var t, n, r, o;
                return Object(p.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = null), (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]), [4, this.Send(i, a, s, l)]
                      );
                    case 2:
                      if (200 != (n = e.sent()).status || !n.data)
                        throw new Error("Request Error");
                      return (
                        (t = d.a.Init(c, 147)),
                        n.headers &&
                          (n.headers["x-eresult"] &&
                            t
                              .Hdr()
                              .set_eresult(parseInt(n.headers["x-eresult"])),
                          n.headers["x-error_message"] &&
                            t
                              .Hdr()
                              .set_error_message(n.headers["x-error_message"])),
                        this.m_bJsonMode
                          ? t.SetBodyJSON(n.data.response)
                          : ((r = new f.a(n.data)),
                            (o = new u.BinaryReader(
                              r.GetPacket(),
                              r.TellGet(),
                              r.GetCountBytesRemaining()
                            )),
                            c.deserializeBinaryFromReader(t.Body(), o)),
                        [3, 4]
                      );
                    case 3:
                      return (
                        e.sent(),
                        (t = this.CreateFailedMsgProtobuf(c, 3, null)),
                        [3, 4]
                      );
                    case 4:
                      return [2, t];
                  }
                });
              });
            }),
            (e.prototype.SendNotification = function(e, t, n, r) {
              return this.Send(e, t, n, r), !0;
            }),
            (e.prototype.Send = function(e, t, n, r) {
              var o = this.CreateWebAPIURL(t),
                i = n.SerializeBody(),
                a = m.fromByteArray(i),
                s = r.eWebAPIKeyRequirement,
                c = 0 == r.ePrivilege && 1 == s,
                l = {
                  responseType: this.m_bJsonMode ? "json" : "arraybuffer",
                  params: {}
                };
              if (
                (e.bSendAuth ||
                  1 == s ||
                  console.error(
                    "Attempting to invoke service " +
                      t +
                      " without auth, but auth is required."
                  ),
                this.m_webApiAccessToken &&
                  e.bSendAuth &&
                  !c &&
                  (l.params.access_token = this.m_webApiAccessToken),
                r.bConstMethod)
              )
                return (
                  this.m_bJsonMode
                    ? (l.params = Object(p.a)(Object(p.a)({}, l.params), {
                        input_json: JSON.stringify(n.Body().toObject())
                      }))
                    : (l.params = Object(p.a)(Object(p.a)({}, l.params), {
                        input_protobuf_encoded: a
                      })),
                  h.a.get(o, l)
                );
              var u = new FormData();
              return (
                this.m_bJsonMode
                  ? u.append("input_json", JSON.stringify(n.Body().toObject()))
                  : u.append("input_protobuf_encoded", a),
                h.a.post(o, u, l)
              );
            }),
            (e.prototype.CreateWebAPIURL = function(e) {
              var t = e.match(/([^\.]+)\.(.+)#(\d+)/);
              return t && 4 == t.length
                ? this.m_strWebAPIBaseURL +
                    "I" +
                    t[1] +
                    "Service/" +
                    t[2] +
                    "/v" +
                    t[3]
                : null;
            }),
            (e.prototype.CreateFailedMsgProtobuf = function(e, t, n) {
              var r = d.a.Init(e);
              return (
                r.Hdr().set_eresult(2),
                r.Hdr().set_transport_error(t),
                n && r.Hdr().set_error_message(n),
                r
              );
            }),
            Object(p.c)([r.a], e.prototype, "SendMsgAndAwaitResponse", null),
            Object(p.c)([r.a], e.prototype, "SendNotification", null),
            Object(p.c)([r.a], e.prototype, "Send", null),
            e
          );
        })();
    },
    X3Ds: function(e, t, n) {
      "use strict";
      n.d(t, "c", function() {
        return r;
      }),
        n.d(t, "b", function() {
          return o;
        }),
        n.d(t, "f", function() {
          return a;
        }),
        n.d(t, "m", function() {
          return s;
        }),
        n.d(t, "l", function() {
          return c;
        }),
        n.d(t, "g", function() {
          return l;
        }),
        n.d(t, "h", function() {
          return u;
        }),
        n.d(t, "a", function() {
          return p;
        }),
        n.d(t, "n", function() {
          return m;
        }),
        n.d(t, "e", function() {
          return d;
        }),
        n.d(t, "d", function() {
          return h;
        }),
        n.d(t, "i", function() {
          return f;
        }),
        n.d(t, "k", function() {
          return v;
        }),
        n.d(t, "j", function() {
          return b;
        }),
        n.d(t, "o", function() {
          return g;
        });
      var i = n("mrSG");
      n("Kw0F"), n("r64O");
      function r(e, t) {
        for (; t; ) {
          if (
            (t.parentNode.nodeType == Node.DOCUMENT_FRAGMENT_NODE &&
              (t = t.parentNode.host),
            t == e)
          )
            return !0;
          t = t.parentElement;
        }
        return !1;
      }
      function o(e, t) {
        for (; t; ) if ((t = t.parentElement) == e) return !0;
        return !1;
      }
      function a(e, t) {
        return {
          width: t.width,
          height: t.height,
          top: e.screenTop + t.top,
          bottom: e.screenTop + t.bottom,
          left: e.screenLeft + t.left,
          right: e.screenLeft + t.right
        };
      }
      function s(e) {
        var t = void 0;
        return (
          e &&
            e.currentTarget &&
            (t = e.currentTarget.ownerDocument.defaultView),
          t
        );
      }
      function c(e) {
        var t = void 0;
        return e && (t = e.ownerDocument.defaultView), t;
      }
      function l(e) {
        var t = document.createElement("textarea");
        (t.textContent = e),
          (t.style.position = "fixed"),
          document.body.appendChild(t),
          t.select();
        try {
          document.execCommand("copy");
        } catch (e) {
          console.warn("Copy to clipboard failed.", e);
        } finally {
          document.body.removeChild(t);
        }
      }
      function u(e) {
        var t = "steam://openurl/";
        e.startsWith(t) && (e = e.slice(t.length)), l(e);
      }
      function p(e) {
        var t = e.ownerDocument;
        return (
          t.fullscreen ||
          t.webkitIsFullScreen ||
          t.mozFullScreen ||
          t.msFullscreenElement
        );
      }
      function m(e, t) {
        var n = e;
        n.requestFullscreen
          ? n.requestFullscreen()
          : n.webkitRequestFullscreen
          ? n.webkitRequestFullscreen()
          : t && t.webkitSetPresentationMode
          ? t.webkitSetPresentationMode("fullscreen")
          : n.mozRequestFullScreen
          ? n.mozRequestFullScreen()
          : n.msRequestFullscreen && n.msRequestFullscreen();
      }
      function d(e) {
        var t = e.ownerDocument;
        t.cancelFullscreen
          ? t.cancelFullscreen()
          : t.webkitCancelFullScreen
          ? t.webkitCancelFullScreen()
          : t.mozCancelFullScreen
          ? t.mozCancelFullScreen()
          : t.msExitFullscreen && t.msExitFullscreen();
      }
      function h(e, t) {
        var n = e;
        return (
          (n.lastModifiedDate = new Date()),
          (n.name = t || Date.now().toString()),
          e
        );
      }
      function f(e, t, n) {
        for (var r = t.parentElement; r && r !== e && !r.hasAttribute(n); )
          r = r.parentElement;
        return r || e;
      }
      function v(e, t) {
        for (
          var n = [], r = Array.prototype.slice.call(e.children).reverse();
          0 < r.length;

        ) {
          var o = r.pop();
          o.hasAttribute(t)
            ? n.push(o)
            : r.push.apply(r, Array.prototype.slice.call(o.children).reverse());
        }
        return n;
      }
      function b(e, t) {
        for (; e; ) {
          if (t(e)) return e;
          e = e.parentElement;
        }
      }
      function g(r, o) {
        return Object(i.b)(this, void 0, void 0, function() {
          var t, n;
          return Object(i.e)(this, function(e) {
            switch (e.label) {
              case 0:
                return [
                  4,
                  new Promise(function(e) {
                    (t = e), r.addEventListener(o, e);
                  })
                ];
              case 1:
                return (n = e.sent()), r.removeEventListener(o, t), [2, n];
            }
          });
        });
      }
    },
    YyVH: function(e, t, n) {
      "use strict";
      function r(e, t) {
        return (
          (e = Math.ceil(e)),
          (t = Math.floor(t)),
          Math.floor(Math.random() * (t - e + 1)) + e
        );
      }
      function o(e, t, n) {
        return Math.max(t, Math.min(n, e));
      }
      function i(e, t, n, r, o) {
        return r + ((o - r) * (e - t)) / (n - t);
      }
      n.d(t, "b", function() {
        return r;
      }),
        n.d(t, "a", function() {
          return o;
        }),
        n.d(t, "c", function() {
          return i;
        });
    },
    Z1oF: function(e, t, n) {
      "use strict";
      n.d(t, "i", function() {
        return r;
      }),
        n.d(t, "d", function() {
          return o;
        }),
        n.d(t, "g", function() {
          return c;
        }),
        n.d(t, "e", function() {
          return i;
        }),
        n.d(t, "f", function() {
          return s;
        }),
        n.d(t, "h", function() {
          return f;
        }),
        n.d(t, "a", function() {
          return v;
        }),
        n.d(t, "c", function() {
          return E;
        }),
        n.d(t, "b", function() {
          return O;
        });
      var l = n("mrSG"),
        u = n("TLQK"),
        p = n("CdLH"),
        m = n("Gp1o");
      function r(e, t, n) {
        var r =
            "boolean" == typeof t
              ? { bExcludeAgo: t, bForceSingleUnits: n, bHighGranularity: !1 }
              : Object(l.a)(
                  {
                    bExcludeAgo: !1,
                    bForceSingleUnits: !1,
                    bHighGranularity: !1
                  },
                  t
                ),
          o = r.bExcludeAgo ? "#TimeInterval_" : "#TimeSince_";
        if (e >= 2 * p.e.PerYear)
          return Object(u.f)(o + "XYears", Math.floor(e / p.e.PerYear));
        if (e >= p.e.PerYear)
          return (e -= p.e.PerYear) >= 2 * p.e.PerMonth && !r.bForceSingleUnits
            ? Object(u.f)(o + "1YearXMonths", Math.floor(e / p.e.PerMonth))
            : Object(u.f)(o + "1Year");
        if (e >= 2 * p.e.PerMonth)
          return Object(u.f)(o + "XMonths", Math.floor(e / p.e.PerMonth));
        if (e >= 2 * p.e.PerWeek)
          return Object(u.f)(o + "XWeeks", Math.floor(e / p.e.PerWeek));
        if (e >= p.e.PerWeek)
          return Object(u.f)(o + "1Week", Math.floor(e / p.e.PerWeek));
        if (e >= 2 * p.e.PerDay)
          return Object(u.f)(o + "XDays", Math.floor(e / p.e.PerDay));
        if (e >= p.e.PerDay)
          return (e -= p.e.PerDay) >= 2 * p.e.PerHour && !r.bForceSingleUnits
            ? Object(u.f)(o + "1DayXHours", Math.floor(e / p.e.PerHour))
            : Object(u.f)(o + "1Day");
        if (e >= 2 * p.e.PerHour)
          return Object(u.f)(o + "XHours", Math.floor(e / p.e.PerHour));
        if (e >= p.e.PerHour)
          return (e -= p.e.PerHour) >= 2 * p.e.PerMinute && !r.bForceSingleUnits
            ? Object(u.f)(o + "1HourXMinutes", Math.floor(e / p.e.PerMinute))
            : Object(u.f)(o + "1Hour");
        if (e >= 2 * p.e.PerMinute) {
          var i = Math.floor(e / p.e.PerMinute),
            a = e % p.e.PerMinute;
          return r.bHighGranularity && 0 != a
            ? 1 == a
              ? Object(u.f)(o + "XMinutes1Second", i)
              : Object(u.f)(o + "XMinutesXSeconds", i, a)
            : Object(u.f)(o + "XMinutes", i);
        }
        if (e >= p.e.PerMinute) {
          a = e % p.e.PerMinute;
          return r.bHighGranularity && 0 != a
            ? 1 == a
              ? Object(u.f)(o + "1Minute1Second")
              : Object(u.f)(o + "1MinuteXSeconds", a)
            : Object(u.f)(o + "1Minute");
        }
        return r.bHighGranularity
          ? 1 == e
            ? Object(u.f)(o + "1Second")
            : Object(u.f)(o + "XSeconds", e)
          : Object(u.f)(o + "LessThanAMinute");
      }
      function o(e, t) {
        var n = {
          weekday: "short",
          month: "long",
          day: "numeric",
          year: t ? void 0 : "numeric"
        };
        return new Date(1e3 * e).toLocaleDateString(
          u.e.GetPreferredLocales(),
          n
        );
      }
      function c(e) {
        var t = new Date(1e3 * e),
          n = t.setHours(0, 0, 0, 0);
        if ((r = d.get(n))) return r;
        var r = t.toLocaleDateString(u.e.GetPreferredLocales(), {
          year: "numeric",
          month: "short",
          day: "numeric"
        });
        return d.set(n, r), r;
      }
      function i(e) {
        return new Date(1e3 * e).toLocaleTimeString(u.e.GetPreferredLocales(), {
          hour: "numeric",
          minute: "numeric"
        });
      }
      var a = new Map();
      function s(e) {
        var t = new Date(1e3 * e),
          n = u.e.GetPreferredLocales(),
          r = (function(e) {
            if (!0 === (n = a.get(e)) || !1 === n) return n;
            var t = new Date();
            t.setHours(15);
            var n =
              t.toLocaleTimeString(e, { hour: "numeric" }) ==
              t.toLocaleTimeString(e, { hour: "numeric", hour12: !1 });
            return a.set(e, n), n;
          })(n[0]);
        return t.toLocaleTimeString(
          n,
          r
            ? { hour: "numeric", minute: "numeric" }
            : { hour: "numeric", hour12: !0 }
        );
      }
      var d = new Map(),
        h = new Map();
      function f(e, t) {
        var n = new Date(),
          r = new Date(1e3 * e);
        if (r.getFullYear() != n.getFullYear()) return c(e);
        m.b(new Date().setHours(24, 0, 0, 0) - n.getTime());
        var o = new Date();
        if ((o.setHours(0, 0, 0, 0), o <= r)) {
          if ((o.setDate(o.getDate() + 1), r < o))
            return Object(u.f)("#Time_Today");
          if ((o.setDate(o.getDate() + 1), r < o))
            return Object(u.f)("#Time_Tomorrow");
        } else if ((o.setDate(o.getDate() - 1), o <= r))
          return Object(u.f)("#Time_Yesterday");
        var i = { month: t ? "long" : "short", day: "numeric" },
          a = r.setHours(0, 0, 0, 0) + i.month,
          s = h.get(a);
        return (
          s ||
          ((s = r.toLocaleDateString(u.e.GetPreferredLocales(), i)),
          h.set(a, s),
          s)
        );
      }
      function v(e, t) {
        var n = new Date(1e3 * e),
          r = new Date(),
          o = Object(l.a)({ bGranularFutureTime: !1 }, t);
        if (r < n) {
          if (!o.bGranularFutureTime)
            return (
              m.b(n.getTime() - r.getTime()),
              (n.getFullYear() == r.getFullYear() ? w : S)(n)
            );
          m.b(new Date().setHours(24, 0, 0, 0) - r.getTime());
          var i = new Date();
          return (i.setHours(0, 0, 0, 0), i.setDate(i.getDate() + 1), n < i)
            ? Object(u.f)("#Time_Today")
            : (i.setDate(i.getDate() + 1),
              n < i
                ? Object(u.f)("#Time_Tomorrow")
                : (i.setDate(i.getDate() + 5), n < i ? O(n) : E(n, !0)));
        }
        m.b(new Date().setHours(24, 0, 0, 0) - r.getTime());
        var a = new Date();
        if ((a.setHours(0, 0, 0, 0), a <= n)) return Object(u.f)("#Time_Today");
        if ((a.setDate(a.getDate() - 1), a <= n))
          return Object(u.f)("#Time_Yesterday");
        if ((a.setDate(a.getDate() - 5), a <= n))
          return Object(u.f)("#TimeSince_ThisWeek");
        var s = new Date(a);
        if (
          (a.setDate(a.getDate() - 21),
          a <= n ||
            (n.getMonth() == r.getMonth() &&
              n.getFullYear() == r.getFullYear()))
        ) {
          var c =
            Math.floor((s.valueOf() - n.valueOf()) / (1e3 * p.e.PerWeek)) + 1;
          return 1 == c
            ? Object(u.f)("#TimeSince_1Week")
            : Object(u.f)("#TimeSince_XWeeks", c);
        }
        return (n.getFullYear() == r.getFullYear() ? w : S)(n);
      }
      var b = new Map(),
        g = new Map(),
        _ = (new Map(), new Map()),
        y = new Map();
      function E(e, t) {
        void 0 === t && (t = !1);
        var n = e.getDate() + 31 * (e.getMonth() + 12 * e.getFullYear()),
          r = y.get(n);
        return (
          r ||
          ((r = e.toLocaleDateString(u.e.GetPreferredLocales(), {
            weekday: "long",
            day: "numeric",
            month: t ? "long" : "short"
          })),
          y.set(n, r),
          r)
        );
      }
      function O(e) {
        var t = b.get(e.getDay());
        return (
          t ||
          ((t = e.toLocaleDateString(u.e.GetPreferredLocales(), {
            weekday: "long"
          })),
          b.set(e.getDay(), t),
          t)
        );
      }
      function w(e) {
        var t = g.get(e.getMonth());
        return (
          t ||
          ((t = e.toLocaleDateString(u.e.GetPreferredLocales(), {
            month: "long"
          })),
          g.set(e.getMonth(), t),
          t)
        );
      }
      function S(e) {
        var t = e.getMonth() + 12 * e.getFullYear(),
          n = _.get(t);
        return (
          n ||
          ((n = e.toLocaleDateString(u.e.GetPreferredLocales(), {
            month: "long",
            year: "numeric"
          })),
          _.set(t, n),
          n)
        );
      }
    },
    Z7Ow: function(e, t, n) {
      e.exports = {
        EmoticonBow: "shared_svg_library_EmoticonBow_2Llzt",
        EmoticonBow_st0: "shared_svg_library_EmoticonBow_st0_Fw2WG",
        EmoticonBow_st1: "shared_svg_library_EmoticonBow_st1_luj0t"
      };
    },
    bxBv: function(e, t, n) {
      "use strict";
      var r = n("mrSG"),
        i = n("mC9v"),
        a = n("hRO2");
      a.Message;
      var s = n("RD/U");
      n("kLLr");
      n.d(t, "a", function() {
        return o;
      });
      var o = (function(o) {
        function n(e, t, n, r) {
          return void 0 === t && (t = 0), o.call(this, t, n, e, r) || this;
        }
        return (
          Object(r.d)(n, o),
          (n.InitFromPacket = function(e, t) {
            return new n(e, 0, t);
          }),
          (n.InitFromMsg = function(e, t) {
            return new n(e, void 0, void 0, t);
          }),
          (n.Init = function(e, t) {
            return new n(e, t);
          }),
          (n.prototype.Body = function() {
            return o.prototype.Body.call(this);
          }),
          (n.prototype.SetBodyFields = function(e) {
            var n = this,
              r = this;
            for (var t in e)
              !(function(t) {
                Array.isArray(e[t])
                  ? r.Body()["add_" + t] &&
                    e[t].forEach(function(e) {
                      n.Body()["add_" + t](e);
                    })
                  : r.Body()["set_" + t] && r.Body()["set_" + t](e[t]);
              })(t);
          }),
          n
        );
      })(
        (function() {
          function t(e, t, n, r, o) {
            if (r)
              (this.m_eMsg = r.m_eMsg),
                (this.m_bValid = r.m_bValid),
                this.m_bValid &&
                  ((this.m_netPacket = r.m_netPacket),
                  (this.m_cubHeader = r.m_cubHeader),
                  (this.m_header = r.m_header),
                  this.InitForType(n));
            else {
              if (((this.m_header = new s.d(null)), (this.m_bValid = !0), t))
                if (
                  ((this.m_netPacket = t),
                  this.m_netPacket.SeekGetHead(),
                  (this.m_eMsg = this.m_netPacket.GetUint32()),
                  2147483648 & this.m_eMsg)
                ) {
                  (this.m_eMsg = 2147483647 & this.m_eMsg),
                    (this.m_cubHeader = this.m_netPacket.GetUint32());
                  try {
                    s.d.deserializeBinaryFromReader(
                      this.m_header,
                      new a.BinaryReader(
                        this.m_netPacket.GetPacket(),
                        this.m_netPacket.TellGet(),
                        this.m_cubHeader
                      )
                    ),
                      this.m_netPacket.SeekGetCurrent(this.m_cubHeader),
                      n && this.InitForType(n);
                  } catch (e) {
                    console.error("Exception deserializing protobuf", e),
                      (this.m_bValid = !1);
                  }
                } else this.m_bValid = !1;
              else e && (this.m_eMsg = e), n && (this.m_body = new n());
              o && this.m_header.set_jobid_target(o.Hdr().jobid_target());
            }
          }
          return (
            (t.InitHeaderFromPacket = function(e) {
              return new t(void 0, e);
            }),
            (t.prototype.InitForType = function(e) {
              if (((this.m_body = new e()), this.m_netPacket)) {
                this.m_netPacket.SeekGetHead(8 + this.m_cubHeader);
                try {
                  e.deserializeBinaryFromReader(
                    this.m_body,
                    new a.BinaryReader(
                      this.m_netPacket.GetPacket(),
                      this.m_netPacket.TellGet(),
                      this.m_netPacket.GetCountBytesRemaining()
                    )
                  );
                } catch (e) {
                  (this.m_bValid = !1),
                    console.error(
                      "Exception parsing protobuf message body.  Definitions may be out of sync with server version."
                    ),
                    console.log(e.stack || e);
                }
              }
            }),
            (t.prototype.BIsValid = function() {
              return this.m_bValid;
            }),
            (t.prototype.Body = function() {
              return this.m_body;
            }),
            (t.prototype.SetBodyJSON = function(e) {
              (e.toObject = function() {
                return e;
              }),
                (this.m_body = e);
            }),
            (t.prototype.Hdr = function() {
              return this.m_header;
            }),
            (t.prototype.GetEMsg = function() {
              return this.m_eMsg;
            }),
            (t.prototype.SetEMsg = function(e) {
              this.m_eMsg = e;
            }),
            (t.prototype.GetEResult = function() {
              return this.Hdr().eresult();
            }),
            (t.prototype.Serialize = function() {
              var e = this.m_header.serializeBinary(),
                t = this.m_body.serializeBinary(),
                n = 2147483648 | this.m_eMsg,
                r = new Uint8Array(8 + e.length + t.length),
                o = new i.a(r);
              return (
                o.PutUint32(n),
                o.PutUint32(e.length),
                o.PutBytes(e),
                o.PutBytes(t),
                r
              );
            }),
            (t.prototype.SerializeBody = function() {
              var e = this.m_body.serializeBinary(),
                t = new Uint8Array(e.length);
              return new i.a(t).PutBytes(e), t;
            }),
            (t.prototype.DEBUG_ToObject = function() {
              return {};
            }),
            (t.prototype.DEBUG_LogToConsole = function() {}),
            t
          );
        })()
      );
    },
    bxiW: function(e, t, n) {
      "use strict";
      function r(e, t, n) {
        return {
          get: function() {
            var e = n.value.bind(this);
            return (
              this.hasOwnProperty(t) ||
                Object.defineProperty(this, t, { value: e }),
              e
            );
          }
        };
      }
      function o(e, t, n) {
        return [e, t, n];
      }
      n.d(t, "a", function() {
        return r;
      }),
        n.d(t, "b", function() {
          return o;
        });
    },
    eDP5: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return a;
      }),
        n.d(t, "b", function() {
          return s;
        });
      var r = n("mrSG"),
        o = n("q1tI"),
        i = n("lkRc"),
        a = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.render = function() {
              if ("dev" !== i.b.WEB_UNIVERSE) return null;
              var t = document.getElementById(this.props.strConfigID);
              if (!t) return null;
              var n = new Array();
              return (
                t.getAttributeNames().forEach(function(e) {
                  e.toLocaleLowerCase().startsWith("data-") &&
                    (n.push(o.createElement("h1", { key: "header-" + e }, e)),
                    n.push(
                      o.createElement(s, {
                        key: "body-" + e,
                        data: JSON.parse(t.getAttribute(e))
                      })
                    ));
                }),
                o.createElement("div", null, n)
              );
            }),
            t
          );
        })(o.Component),
        s = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.render = function() {
              return o.createElement(
                "div",
                null,
                o.createElement(
                  "pre",
                  null,
                  JSON.stringify(this.props.data, null, 2)
                )
              );
            }),
            t
          );
        })(o.Component);
    },
    exH9: function(e, t, n) {
      "use strict";
      function r(n) {
        return Object.keys(n).reduce(function(e, t) {
          return n[t] ? (e ? e + " " + t : t) : e;
        }, "");
      }
      t.a = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return e.reduce(function(e, t) {
          return t
            ? "string" == typeof t
              ? e
                ? e + " " + t
                : t
              : "object" == typeof t
              ? e
                ? e + " " + r(t)
                : r(t)
              : e
            : e;
        }, "");
      };
    },
    gfbn: function(e, t, m) {
      "use strict";
      m.r(t);
      var d = m("mrSG"),
        n = (m("SQr7"), m("Wr5T"), m("nmPn")),
        r = m("q1tI"),
        o = m.n(r),
        i = m("i8i4"),
        a = m.n(i),
        h = (m("mRR+"), m("TLQK"));
      m("mgoM");
      var s = m("lkRc"),
        c = m("r64O"),
        l = m("WBba"),
        u = m("uobO");
      m("5izx"), m("xnZ7"), m("idvb");
      document.addEventListener("DOMContentLoaded", function() {
        return Object(d.b)(this, void 0, void 0, function() {
          return Object(d.e)(this, function(e) {
            switch (e.label) {
              case 0:
                return (
                  document.getElementById("application_config")
                    ? Object(s.f)("application_config")
                    : Object(s.f)(),
                  Object(u.a)().Init(
                    "Community",
                    CLSTAMP,
                    new l.a(s.b.WEBAPI_BASE_URL).GetServiceTransport()
                  ),
                  [
                    4,
                    (function(p) {
                      return Object(d.b)(this, void 0, void 0, function() {
                        var t, n, r, o, i, a, s, c, l, u;
                        return Object(d.e)(this, function(e) {
                          switch (e.label) {
                            case 0:
                              return [3, 2];
                            case 1:
                              return e.sent(), [3, 4];
                            case 2:
                              return (
                                (t = h.b.GetLanguageFallback(p)),
                                (n = p === t),
                                [
                                  4,
                                  Promise.all([
                                    m("rCDf")("./shared_" + p + ".json").then(
                                      function(e) {
                                        return e.default;
                                      }
                                    ),
                                    m("AvbV")("./main_" + p + ".json").then(
                                      function(e) {
                                        return e.default;
                                      }
                                    ),
                                    n
                                      ? {}
                                      : m("rCDf")(
                                          "./shared_" + t + ".json"
                                        ).then(function(e) {
                                          return e.default;
                                        }),
                                    n
                                      ? {}
                                      : m("AvbV")("./main_" + t + ".json").then(
                                          function(e) {
                                            return e.default;
                                          }
                                        )
                                  ])
                                ]
                              );
                            case 3:
                              (r = e.sent()),
                                (o = r[0]),
                                (i = r[1]),
                                (a = r[2]),
                                (s = r[3]),
                                h.e.InitFromObjects(i, s, o, a),
                                (e.label = 4);
                            case 4:
                              for (c = 0, l = f; c < l.length; c++)
                                (u = l[c]), h.e.AddTokens(u);
                              return (f = void 0), [2];
                          }
                        });
                      });
                    })(s.b.LANGUAGE)
                  ]
                );
              case 1:
                return (
                  e.sent(),
                  document.getElementById("application_root") &&
                    a.a.render(
                      o.a.createElement(n.a, {}),
                      document.getElementById("application_root")
                    ),
                  [2]
                );
            }
          });
        });
      });
      var f = [];
      window.LocalizationManifestReady = function(e, t, n) {
        Object(c.a)("manifest" === t, 'Expected manifest not "' + t + '"'),
          void 0 !== f ? f.push(n) : h.e.AddTokens(n);
      };
    },
    hJxo: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return s;
      }),
        n.d(t, "b", function() {
          return c;
        });
      var r = n("mrSG"),
        i = n("i8i4"),
        a = n("X3Ds"),
        o = (function() {
          function e(e, t) {
            (this.m_bActive = !1),
              (this.m_fnBoundAnimationFunc = void 0),
              (this.m_window = e),
              (this.m_options = Object.assign({ timing: "sine" }, t));
          }
          return (
            (e.prototype.Start = function() {
              var e;
              switch (
                ((this.m_msStart = performance.now()),
                (this.m_msEnd = this.m_msStart + this.m_options.msDuration),
                this.m_options.timing)
              ) {
                case "linear":
                  e = function(e) {
                    return e;
                  };
                  break;
                case "cubic-in-out":
                  e = function(e) {
                    return e < 0.5
                      ? 4 * e * e * e
                      : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
                  };
                  break;
                case "sine":
                default:
                  e = function(e) {
                    return 0.5 - Math.cos(e * Math.PI) / 2;
                  };
              }
              (this.m_bActive = !0),
                (this.m_fnBoundAnimationFunc = this.OnInterval.bind(this, e)),
                this.m_window.requestAnimationFrame(
                  this.m_fnBoundAnimationFunc
                );
            }),
            (e.prototype.BIsActive = function() {
              return this.m_bActive;
            }),
            (e.prototype.End = function() {
              this.m_bActive &&
                (this.Update(1), this.ClearInterval(), this.FireOnComplete());
            }),
            (e.prototype.FireOnComplete = function() {
              this.m_options.onComplete && this.m_options.onComplete();
            }),
            (e.prototype.Cancel = function() {
              this.m_bActive = !1;
            }),
            (e.prototype.OnInterval = function(e) {
              var t, n;
              this.m_bActive &&
                ((t = performance.now() - this.m_msStart) >=
                this.m_options.msDuration
                  ? this.End()
                  : ((n = t / this.m_options.msDuration),
                    this.Update(e(n)),
                    this.m_window.requestAnimationFrame(
                      this.m_fnBoundAnimationFunc
                    )));
            }),
            (e.prototype.ClearInterval = function() {
              this.m_bActive = !1;
            }),
            e
          );
        })(),
        s = (function(o) {
          function e(e, t, n) {
            var r = o.call(this, a.l(e), n) || this;
            return (r.m_props = {}), (r.m_object = e), (r.m_propTargets = t), r;
          }
          return (
            Object(r.d)(e, o),
            (e.prototype.Start = function() {
              for (var e in ((this.m_props = {}), this.m_propTargets)) {
                var t = parseFloat(this.m_object[e]) || 0,
                  n = this.m_propTargets[e];
                t != n && (this.m_props[e] = { start: t, end: n });
              }
              o.prototype.Start.call(this);
            }),
            (e.prototype.Update = function(e) {
              for (var t in this.m_props) {
                var n = this.m_props[t],
                  r = n.start + (n.end - n.start) * e;
                this.m_object[t] = r;
              }
            }),
            e
          );
        })(o),
        c = (function(o) {
          function e(e, t, n) {
            var r = o.call(this, a.l(i.findDOMNode(e)), n) || this;
            return (
              (r.m_props = {}),
              (r.m_component = e),
              (r.m_propTargets = t),
              (r.m_setStateOnComplete = n.setStateOnComplete),
              r
            );
          }
          return (
            Object(r.d)(e, o),
            (e.prototype.Start = function() {
              for (var e in ((this.m_props = {}), this.m_propTargets)) {
                var t = parseFloat(this.m_component.state[e]) || 0,
                  n = this.m_propTargets[e];
                t != n && (this.m_props[e] = { start: t, end: n });
              }
              o.prototype.Start.call(this);
            }),
            (e.prototype.Update = function(e) {
              var t = {};
              for (var n in this.m_props) {
                var r = this.m_props[n],
                  o = r.start + (r.end - r.start) * e;
                t[n] = o;
              }
              this.m_component.setState(t);
            }),
            (e.prototype.FireOnComplete = function() {
              o.prototype.FireOnComplete.call(this),
                this.m_setStateOnComplete &&
                  this.m_component.setState(this.m_setStateOnComplete);
            }),
            e
          );
        })(o);
    },
    idvb: function(e, t, n) {},
    kLLr: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return o;
      });
      var r = n("2lpH"),
        a = n.n(r),
        i = n("mgoM"),
        s = n("lkRc"),
        o = (function() {
          function o(e, t, n, r) {
            void 0 === e && (e = 0),
              e instanceof o
                ? (this.m_ulSteamID = e.m_ulSteamID)
                : "string" == typeof e
                ? (this.m_ulSteamID = a.a.fromString(e, !0))
                : t && n && void 0 !== r
                ? this.SetFromComponents(e, r, n, t)
                : (this.m_ulSteamID = e ? a.a.fromNumber(e, !0) : a.a.UZERO);
          }
          return (
            (o.InitFromAccountID = function(e) {
              return new o(Number(e), s.b.EUNIVERSE, 1, i.f);
            }),
            (o.InitFromClanID = function(e) {
              return new o(Number(e), s.b.EUNIVERSE, 7, 0);
            }),
            (o.prototype.GetAccountID = function() {
              return this.m_ulSteamID.getLowBitsUnsigned();
            }),
            (o.prototype.GetInstance = function() {
              return 1048575 & this.m_ulSteamID.getHighBitsUnsigned();
            }),
            (o.prototype.GetAccountType = function() {
              return (this.m_ulSteamID.getHighBitsUnsigned() >> 20) & 15;
            }),
            (o.prototype.GetUniverse = function() {
              return (this.m_ulSteamID.getHighBitsUnsigned() >> 24) & 255;
            }),
            (o.prototype.ConvertTo64BitString = function() {
              return this.m_ulSteamID.toString();
            }),
            (o.prototype.Render = function() {
              switch (this.GetAccountType()) {
                case 0:
                  return (
                    "[I:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                  );
                case 7:
                  return (
                    "[g:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                  );
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
                  return (
                    "[G:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                  );
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
                  return (
                    "[P:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                  );
                case 6:
                  return (
                    "[C:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                  );
                default:
                  return (
                    "[U:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                  );
              }
            }),
            (o.prototype.BIsValid = function() {
              var e = this.GetAccountType();
              if (e <= 0 || 11 <= e) return !1;
              var t = this.GetUniverse();
              if (t <= 0 || 5 <= t) return !1;
              if (1 == e) {
                if (0 == this.GetAccountID() || this.GetInstance() > i.g)
                  return !1;
              } else if (7 == e) {
                if (0 == this.GetAccountID() || 0 != this.GetInstance())
                  return !1;
              } else if (3 == e && 0 == this.GetAccountID()) return !1;
              return !0;
            }),
            (o.prototype.BIsIndividualAccount = function() {
              return 1 == this.GetAccountType();
            }),
            (o.prototype.BIsClanAccount = function() {
              return 7 == this.GetAccountType();
            }),
            (o.prototype.SetAccountID = function(e) {
              this.m_ulSteamID = new a.a(
                e,
                this.m_ulSteamID.getHighBitsUnsigned(),
                !0
              );
            }),
            (o.prototype.SetInstance = function(e) {
              this.SetFromComponents(
                this.GetAccountID(),
                e,
                this.GetAccountType(),
                this.GetUniverse()
              );
            }),
            (o.prototype.SetAccountType = function(e) {
              this.SetFromComponents(
                this.GetAccountID(),
                this.GetInstance(),
                e,
                this.GetUniverse()
              );
            }),
            (o.prototype.SetUniverse = function(e) {
              this.SetFromComponents(
                this.GetAccountID(),
                this.GetInstance(),
                this.GetAccountType(),
                e
              );
            }),
            (o.prototype.SetFromComponents = function(e, t, n, r) {
              var o = ((255 & r) << 24) + ((15 & n) << 20) + (1048575 & t),
                i = 4294967295 & e;
              this.m_ulSteamID = new a.a(i, o, !0);
            }),
            o
          );
        })();
    },
    kyHq: function(e, t, n) {
      "use strict";
      n.d(t, "d", function() {
        return o;
      }),
        n.d(t, "g", function() {
          return m;
        }),
        n.d(t, "c", function() {
          return d;
        }),
        n.d(t, "e", function() {
          return g;
        }),
        n.d(t, "b", function() {
          return y;
        });
      n("mrSG");
      var r = n("mgoM");
      n.d(t, "a", function() {
        return r.a;
      }),
        n.d(t, "f", function() {
          return r.d;
        });
      n("2vnA");
      var o, i;
      ((i = o = o || {})[(i.EBrowserType_OffScreen = 0)] =
        "EBrowserType_OffScreen"),
        (i[(i.EBrowserType_OpenVROverlay = 1)] = "EBrowserType_OpenVROverlay"),
        (i[(i.EBrowserType_OpenVROverlay_Dashboard = 2)] =
          "EBrowserType_OpenVROverlay_Dashboard"),
        (i[(i.EBrowserType_DirectHWND = 3)] = "EBrowserType_DirectHWND"),
        (i[(i.EBrowserType_DirectHWND_Borderless = 4)] =
          "EBrowserType_DirectHWND_Borderless"),
        (i[(i.EBrowserType_DirectHWND_Hidden = 5)] =
          "EBrowserType_DirectHWND_Hidden"),
        (i[(i.EBrowserType_ChildHWNDNative = 6)] =
          "EBrowserType_ChildHWNDNative"),
        (i[(i.EBrowserType_Transparent_Toplevel = 7)] =
          "EBrowserType_Transparent_Toplevel"),
        (i[(i.EBrowserType_OffScreen_SharedTexture = 8)] =
          "EBrowserType_OffScreen_SharedTexture"),
        (i[(i.EBrowserType_OffScreen_GameOverlay = 9)] =
          "EBrowserType_OffScreen_GameOverlay"),
        (i[(i.EBrowserType_OffScreen_GameOverlay_SharedTexture = 10)] =
          "EBrowserType_OffScreen_GameOverlay_SharedTexture"),
        (i[(i.EBrowserType_Offscreen_FriendsUI = 11)] =
          "EBrowserType_Offscreen_FriendsUI"),
        (i[(i.EBrowserType_MAX = 12)] = "EBrowserType_MAX");
      var a, s, c, l;
      ((s = a = a || {})[(s.k_EClientUINotificationGroupChatMessage = 1)] =
        "k_EClientUINotificationGroupChatMessage"),
        (s[(s.k_EClientUINotificationFriendChatMessage = 2)] =
          "k_EClientUINotificationFriendChatMessage"),
        (s[(s.k_EClientUINotificationFriendPersonaState = 3)] =
          "k_EClientUINotificationFriendPersonaState"),
        ((l = c = c || {})[(l.k_EComputerActiveStateInvalid = 0)] =
          "k_EComputerActiveStateInvalid"),
        (l[(l.k_EComputerActiveStateActive = 1)] =
          "k_EComputerActiveStateActive"),
        (l[(l.k_EComputerActiveStateIdle = 2)] = "k_EComputerActiveStateIdle");
      var u,
        p,
        m = (function() {
          return function() {};
        })();
      ((p = u = u || {})[(p.k_EPending = 0)] = "k_EPending"),
        (p[(p.k_EAccepted = 1)] = "k_EAccepted"),
        (p[(p.k_ERejected = 2)] = "k_ERejected");
      function d(e) {
        return (
          "game" === e ||
          "dlc" === e ||
          "software" === e ||
          "music" === e ||
          "application" === e ||
          "demo" === e ||
          "hardware" === e
        );
      }
      var h, f, v, b;
      ((f = h = h || {})[(f.k_EClientUsedInputTypeKeyboard = 0)] =
        "k_EClientUsedInputTypeKeyboard"),
        (f[(f.k_EClientUsedInputTypeMouse = 1)] =
          "k_EClientUsedInputTypeMouse"),
        (f[(f.k_EClientUsedInputTypeController = 2)] =
          "k_EClientUsedInputTypeController"),
        (f[(f.k_EClientUsedInputTypeMax = 3)] = "k_EClientUsedInputTypeMax"),
        ((b = v = v || {})[(b.k_ERemoteClientLaunchOK = 1)] =
          "k_ERemoteClientLaunchOK"),
        (b[(b.k_ERemoteClientLaunchFail = 2)] = "k_ERemoteClientLaunchFail"),
        (b[(b.k_ERemoteClientLaunchRequiresUI = 3)] =
          "k_ERemoteClientLaunchRequiresUI"),
        (b[(b.k_ERemoteClientLaunchRequiresLaunchOption = 4)] =
          "k_ERemoteClientLaunchRequiresLaunchOption"),
        (b[(b.k_ERemoteClientLaunchRequiresEULA = 5)] =
          "k_ERemoteClientLaunchRequiresEULA"),
        (b[(b.k_ERemoteClientLaunchTimeout = 6)] =
          "k_ERemoteClientLaunchTimeout"),
        (b[(b.k_ERemoteClientLaunchStreamTimeout = 7)] =
          "k_ERemoteClientLaunchStreamTimeout"),
        (b[(b.k_ERemoteClientLaunchStreamClientFail = 8)] =
          "k_ERemoteClientLaunchStreamClientFail"),
        (b[(b.k_ERemoteClientLaunchOtherGameRunning = 9)] =
          "k_ERemoteClientLaunchOtherGameRunning"),
        (b[(b.k_ERemoteClientLaunchDownloadStarted = 10)] =
          "k_ERemoteClientLaunchDownloadStarted"),
        (b[(b.k_ERemoteClientLaunchDownloadNoSpace = 11)] =
          "k_ERemoteClientLaunchDownloadNoSpace"),
        (b[(b.k_ERemoteClientLaunchDownloadFiltered = 12)] =
          "k_ERemoteClientLaunchDownloadFiltered"),
        (b[(b.k_ERemoteClientLaunchDownloadRequiresUI = 13)] =
          "k_ERemoteClientLaunchDownloadRequiresUI"),
        (b[(b.k_ERemoteClientLaunchAccessDenied = 14)] =
          "k_ERemoteClientLaunchAccessDenied"),
        (b[(b.k_ERemoteClientLaunchNetworkError = 15)] =
          "k_ERemoteClientLaunchNetworkError"),
        (b[(b.k_ERemoteClientLaunchProgress = 16)] =
          "k_ERemoteClientLaunchProgress"),
        (b[(b.k_ERemoteClientLaunchParentalUnlockFailed = 17)] =
          "k_ERemoteClientLaunchParentalUnlockFailed"),
        (b[(b.k_ERemoteClientLaunchScreenLocked = 18)] =
          "k_ERemoteClientLaunchScreenLocked"),
        (b[(b.k_ERemoteClientLaunchUnsupported = 19)] =
          "k_ERemoteClientLaunchUnsupported"),
        (b[(b.k_ERemoteClientLaunchDisabledLocal = 20)] =
          "k_ERemoteClientLaunchDisabledLocal"),
        (b[(b.k_ERemoteClientLaunchDisabledRemote = 21)] =
          "k_ERemoteClientLaunchDisabledRemote"),
        (b[(b.k_ERemoteClientLaunchBroadcasting = 22)] =
          "k_ERemoteClientLaunchBroadcasting"),
        (b[(b.k_ERemoteClientLaunchBusy = 23)] = "k_ERemoteClientLaunchBusy"),
        (b[(b.k_ERemoteClientLaunchDriversNotInstalled = 24)] =
          "k_ERemoteClientLaunchDriversNotInstalled"),
        (b[(b.k_ERemoteClientLaunchTransportUnavailable = 25)] =
          "k_ERemoteClientLaunchTransportUnavailable"),
        (b[(b.k_ERemoteClientLaunchCanceled = 26)] =
          "k_ERemoteClientLaunchCanceled"),
        (b[(b.k_ERemoteClientLaunchInvisible = 27)] =
          "k_ERemoteClientLaunchInvisible"),
        (b[(b.k_ERemoteClientLaunchRestrictedCountry = 28)] =
          "k_ERemoteClientLaunchRestrictedCountry");
      var g, _;
      function y(e) {
        return e === g.k_ESteamRealmChina;
      }
      ((_ = g = g || {})[(_.k_ESteamRealmUnknown = 0)] =
        "k_ESteamRealmUnknown"),
        (_[(_.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
        (_[(_.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina");
      var E, O, w, S, C, D;
      ((O = E = E || {})[(O.Unknown = 0)] = "Unknown"),
        (O[(O.Wired = 1)] = "Wired"),
        (O[(O.Wireless = 2)] = "Wireless"),
        ((S = w = w || {})[(S.NotPresent = 0)] = "NotPresent"),
        (S[(S.Failed = 1)] = "Failed"),
        (S[(S.Disconnected = 2)] = "Disconnected"),
        (S[(S.Disconnecting = 3)] = "Disconnecting"),
        (S[(S.Connecting = 4)] = "Connecting"),
        (S[(S.Connected = 5)] = "Connected"),
        (S[(S.Retrying = 6)] = "Retrying"),
        ((D = C = C || {})[(D.None = 0)] = "None"),
        (D[(D.StaticWep = 1)] = "StaticWep"),
        (D[(D.DynamicWep = 2)] = "DynamicWep"),
        (D[(D.Wpa = 4)] = "Wpa"),
        (D[(D.WpaEnterprise = 8)] = "WpaEnterprise"),
        (D[(D.Wpa2 = 16)] = "Wpa2"),
        (D[(D.Wpa2Enterprise = 32)] = "Wpa2Enterprise"),
        (D[(D.Unsupported = 32768)] = "Unsupported");
    },
    lkRc: function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return a;
      }),
        n.d(t, "g", function() {
          return s;
        }),
        n.d(t, "a", function() {
          return l;
        }),
        n.d(t, "f", function() {
          return m;
        }),
        n.d(t, "e", function() {
          return d;
        }),
        n.d(t, "c", function() {
          return h;
        }),
        n.d(t, "d", function() {
          return f;
        });
      n("mrSG");
      var r,
        o = n("YyVH"),
        i = n("Jnrd"),
        a = {
          EUNIVERSE: 0,
          WEB_UNIVERSE: "",
          LANGUAGE: "english",
          SUPPORTED_LANGUAGES: [],
          COUNTRY: "",
          MEDIA_CDN_COMMUNITY_URL: "",
          MEDIA_CDN_URL: "",
          COMMUNITY_CDN_URL: "",
          COMMUNITY_CDN_ASSET_URL: "",
          STORE_CDN_URL: "",
          PUBLIC_SHARED_URL: "",
          COMMUNITY_BASE_URL: "",
          CHAT_BASE_URL: "",
          STORE_BASE_URL: "",
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
          LOCAL_HOSTNAME: "",
          WEBAPI_BASE_URL: "",
          TOKEN_URL: "",
          BUILD_TIMESTAMP: 0,
          PAGE_TIMESTAMP: 0,
          get SESSIONID() {
            return (function() {
              if (!Object(i.a)()) return (r = r || p());
              var e = Object(i.b)("sessionid");
              e = e || p();
              return e;
            })();
          },
          FRIENDSUI_BETA: !1,
          STEAM_TV: !1,
          DEV_MODE: !1,
          OFFLINE_MODE: !1,
          IN_LIBRARY: !1
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
          short_url: "",
          country_code: ""
        },
        c = { steamid: "", clanid: 0, listid: 0 },
        l = {
          CLANSTEAMID: "",
          CLANACCOUNTID: 0,
          ANNOUNCEMENT_GID: "",
          IMG_URL: "",
          APPID: 0,
          VANITY_ID: "",
          IS_CREATOR_HOME: !1,
          IS_CURATOR: !1,
          IS_OGG: !1,
          CAN_UPLOAD_IMAGES: !1,
          HEADER_IMAGE: "",
          APP_NAME: "",
          HAS_ADULT_CONTENT: !1,
          HAS_ADULT_CONTENT_SEX: !1,
          HAS_ADULT_CONTENT_VIOLENCE: !1
        },
        u = "webui_config";
      function p() {
        var e = (function() {
          for (var e = "", t = 0; t < 24; t++)
            e += Object(o.b)(0, 35).toString(36);
          return e;
        })();
        return Object(i.c)("sessionid", e, 0), e;
      }
      function m(e) {
        void 0 === e && (e = u);
        var t = {},
          n = d("config", e);
        n && (delete n.SESSIONID, Object.assign(a, n), (t.config = !0));
        var r = d("userinfo", e);
        r && (Object.assign(s, r), (t.userConfig = !0));
        var o = d("broadcast", e);
        o && (Object.assign(c, o), (t.broadcastConfig = !0));
        var i = d("community", e);
        return i && (Object.assign(l, i), (t.communityConfig = !0)), t;
      }
      function d(e, t) {
        var n;
        if (
          (void 0 === t && (t = u),
          (n = "string" == typeof t ? document.getElementById(t) : t))
        )
          try {
            return n.hasAttribute("data-" + e)
              ? JSON.parse(n.getAttribute("data-" + e))
              : null;
          } catch (e) {
            console.error("Failed to parse config", e);
          }
        else console.error("Missing config element #", t);
      }
      function h() {
        if (!window || !window.location || !window.location.href)
          return console.warn("Unable to determine base url!"), "unknown";
        var e = window.location.href;
        return e.startsWith(a.STORE_BASE_URL)
          ? a.STORE_BASE_URL
          : e.startsWith(a.COMMUNITY_BASE_URL)
          ? a.COMMUNITY_BASE_URL
          : e.startsWith(a.CHAT_BASE_URL)
          ? a.CHAT_BASE_URL
          : e.startsWith(a.PARTNER_BASE_URL)
          ? a.PARTNER_BASE_URL
          : e.startsWith(a.HELP_BASE_URL)
          ? a.HELP_BASE_URL
          : e.startsWith(a.STEAMTV_BASE_URL)
          ? a.STEAMTV_BASE_URL
          : e.startsWith(a.STATS_BASE_URL)
          ? a.STATS_BASE_URL
          : e.startsWith(a.INTERNAL_STATS_BASE_URL)
          ? a.INTERNAL_STATS_BASE_URL
          : "";
      }
      function f() {
        var e = window.location.href;
        return e.startsWith(a.STORE_BASE_URL)
          ? "store"
          : e.startsWith(a.COMMUNITY_BASE_URL)
          ? "community"
          : e.startsWith(a.PARTNER_BASE_URL)
          ? "partnerweb"
          : e.startsWith(a.HELP_BASE_URL)
          ? "help"
          : e.startsWith(a.STEAMTV_BASE_URL)
          ? "steamtv"
          : e.startsWith(a.STATS_BASE_URL) ||
            e.startsWith(a.INTERNAL_STATS_BASE_URL)
          ? "stats"
          : "";
      }
    },
    mC9v: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return r;
      });
      var r = (function() {
        function e(e, t, n) {
          void 0 === t && (t = 0),
            (this.m_nOffset = t || 0),
            e instanceof Uint8Array || e instanceof DataView
              ? ((this.m_nLength = n || e.byteLength - this.m_nOffset),
                (this.m_nOffset += e.byteOffset),
                (this.m_viewPacket = new DataView(
                  e.buffer,
                  this.m_nOffset,
                  this.m_nLength
                )))
              : ((this.m_nLength = n || e.byteLength - this.m_nOffset),
                (this.m_viewPacket = new DataView(
                  e,
                  this.m_nOffset,
                  this.m_nLength
                ))),
            (this.m_rgubPacket = new Uint8Array(
              this.m_viewPacket.buffer,
              this.m_viewPacket.byteOffset,
              this.m_viewPacket.byteLength
            )),
            (this.m_iGet = 0),
            (this.m_iPut = 0);
        }
        return (
          (e.prototype.TellGet = function() {
            return this.m_iGet + this.m_viewPacket.byteOffset;
          }),
          (e.prototype.GetPacket = function() {
            return this.m_viewPacket.buffer;
          }),
          (e.prototype.GetUint8 = function() {
            return this.m_viewPacket.getUint8(this.m_iGet++);
          }),
          (e.prototype.GetUint32 = function(e) {
            void 0 === e && (e = !0);
            var t = this.m_viewPacket.getUint32(this.m_iGet, e);
            return (this.m_iGet += 4), t;
          }),
          (e.prototype.SeekGetHead = function(e) {
            void 0 === e && (e = 0), (this.m_iGet = e || 0);
          }),
          (e.prototype.SeekGetCurrent = function(e) {
            this.m_iGet += e;
          }),
          (e.prototype.TellPut = function() {
            return this.m_iPut + this.m_viewPacket.byteOffset;
          }),
          (e.prototype.TellMaxPut = function() {
            return this.m_viewPacket.byteLength;
          }),
          (e.prototype.PutUint8 = function(e) {
            this.m_viewPacket.setUint8(this.m_iPut++, e);
          }),
          (e.prototype.PutUint32 = function(e, t) {
            void 0 === t && (t = !0),
              this.m_viewPacket.setUint32(this.m_iPut, e, t),
              (this.m_iPut += 4);
          }),
          (e.prototype.PutBytes = function(e) {
            this.m_rgubPacket.set(e, this.m_iPut), (this.m_iPut += e.length);
          }),
          (e.prototype.SeekPut = function(e) {
            this.m_iPut += e;
          }),
          (e.prototype.GetCountBytesRemaining = function() {
            return this.m_viewPacket.byteLength - this.m_iGet;
          }),
          e
        );
      })();
    },
    "mRR+": function(e, t, n) {
      "use strict";
      n("vDqi");
    },
    mgoM: function(e, t, n) {
      "use strict";
      n.d(t, "f", function() {
        return r;
      }),
        n.d(t, "g", function() {
          return o;
        }),
        n.d(t, "e", function() {
          return i;
        }),
        n.d(t, "c", function() {
          return a;
        }),
        n.d(t, "b", function() {
          return s;
        }),
        n.d(t, "d", function() {
          return c;
        }),
        n.d(t, "a", function() {
          return l;
        });
      var r = 1,
        o = 4,
        i = "18446744073709551615";
      function a(e, t) {
        switch ((void 0 === t && (t = "en"), e)) {
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
            return "zn-cn";
          case 7:
            return "zn-tw";
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
      function s(e, t) {
        switch ((void 0 === t && (t = ""), e)) {
          case 0:
            return "english";
          case 1:
            return "german";
          case 2:
            return "french";
          case 3:
            return "italian";
          case 4:
            return "korean";
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
      function c(e, t) {
        switch ((void 0 === t && (t = 0), e)) {
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
      function l(e) {
        switch (e) {
          case 4:
          case 1:
          case 7:
          case 8:
            return !0;
        }
        return !1;
      }
    },
    nmPn: function(e, t, n) {
      "use strict";
      function r(e) {
        var o = e.config;
        return a.a.createElement(
          a.a.Fragment,
          null,
          Object.keys(o || {}).map(function(r) {
            var e = document.querySelectorAll("[data-featuretarget=" + r);
            return e.length
              ? Array.from(e).map(function(e, t) {
                  var n = (function(e, t) {
                    if (!e) return {};
                    try {
                      var n = JSON.parse(e);
                      if (!n || "object" != typeof n || Array.isArray(n))
                        throw new Error();
                      return n;
                    } catch (e) {
                      return (
                        console.error(
                          'There was a problem parsing props for feature target "' +
                            t +
                            '"'
                        ),
                        {}
                      );
                    }
                  })(e.getAttribute("data-props"), r);
                  return Object(m.createPortal)(o[r](n), e, "" + r + t);
                })
              : null;
          })
        );
      }
      var o = n("mrSG"),
        i = n("q1tI"),
        a = n.n(i),
        s = n("55Ip"),
        c = n("Ty5D"),
        l = n("sUmc"),
        u = n("eDP5"),
        p = n("Jqb/"),
        m = n("i8i4");
      var d = n("lkRc");
      n.d(t, "a", function() {
        return T;
      }),
        n.d(t, "b", function() {
          return L;
        });
      function h() {
        return d.a.IS_CREATOR_HOME || d.a.IS_CURATOR ? "groups" : "games";
      }
      var f,
        v = a.a.lazy(function() {
          return Promise.all([n.e(2), n.e(1), n.e(99)]).then(
            n.bind(null, "GEPe")
          );
        }),
        b = a.a.lazy(function() {
          return Promise.all([n.e(0), n.e(5), n.e(1), n.e(9)]).then(
            n.bind(null, "IY+y")
          );
        }),
        g = a.a.lazy(function() {
          return Promise.all([n.e(0), n.e(4), n.e(100)]).then(
            n.bind(null, "JLV8")
          );
        }),
        _ = a.a.lazy(function() {
          return Promise.all([n.e(0), n.e(4), n.e(101)]).then(
            n.bind(null, "PDjT")
          );
        }),
        y = a.a.lazy(function() {
          return Promise.all([n.e(0), n.e(5), n.e(2), n.e(1), n.e(8)]).then(
            n.bind(null, "8zUZ")
          );
        }),
        E = function() {
          return "/" + h() + "/:anything*/diagdata";
        },
        O = function() {
          return "/migrate";
        },
        w = function(e) {
          return "/" + h() + "/" + e + "/(partnerevents|events|announcements)";
        },
        S = function(e) {
          return "/app/" + e + "(/workshop/)?";
        },
        C = function(e) {
          return "/groups/" + e + "/";
        },
        D = function(e) {
          return "/id/" + e + "/";
        },
        M = function(e) {
          return "/profiles/" + e + "/";
        },
        x = function() {
          return "/:anything/filedetails";
        },
        A = function() {
          return "/id/:vanity_url/recommended/:appid/";
        },
        k = function() {
          return "/profiles/:steamid/recommended/:appid/";
        },
        j = function() {
          return "/profiles/:steamid/recommended/";
        },
        I = function() {
          return "/id/:vanity_url/recommended/";
        },
        N = function() {
          return "/broadcast";
        },
        R = function() {
          return "/";
        },
        T = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.d)(t, e),
            (t.prototype.componentDidMount = function() {
              f ||
                (f = Object(l.b)(document)).Show(
                  a.a.createElement(p.b, { ModalManager: Object(p.f)(window) })
                );
            }),
            (t.prototype.render = function() {
              return a.a.createElement(
                s.a,
                {
                  basename: (function() {
                    var e = document.createElement("a");
                    e.href = d.b.COMMUNITY_BASE_URL;
                    var t = e.pathname;
                    t.endsWith("/") || (t += "/");
                    return t;
                  })()
                },
                a.a.createElement(
                  a.a.Suspense,
                  { fallback: a.a.createElement("div", null) },
                  a.a.createElement(
                    c.e,
                    null,
                    a.a.createElement(c.c, {
                      exact: !0,
                      path: E(),
                      render: function(e) {
                        return a.a.createElement(
                          u.a,
                          Object(o.a)({}, e, {
                            key: e.match.params.gid,
                            strConfigID: "application_config"
                          })
                        );
                      }
                    }),
                    a.a.createElement(c.c, {
                      path: w(":appid_or_vanity_str"),
                      component: b
                    }),
                    a.a.createElement(c.c, { path: O(), component: b }),
                    a.a.createElement(c.c, { path: N(), component: y }),
                    a.a.createElement(c.c, {
                      path: S(":appid"),
                      render: function(e) {
                        return a.a.createElement(r, {
                          config: {
                            "apphub-events": function() {
                              return a.a.createElement(b, null);
                            },
                            "apphub-ugcrewards": function() {
                              return a.a.createElement(g, Object(o.a)({}, e));
                            }
                          }
                        });
                      }
                    }),
                    a.a.createElement(c.c, {
                      path: C(":groupid_or_vanity_str"),
                      render: function(e) {
                        return a.a.createElement(b, null);
                      }
                    }),
                    a.a.createElement(c.c, {
                      path: A(),
                      render: function(e) {
                        return a.a.createElement(_, Object(o.a)({}, e));
                      }
                    }),
                    a.a.createElement(c.c, {
                      path: k(),
                      render: function(e) {
                        return a.a.createElement(_, Object(o.a)({}, e));
                      }
                    }),
                    a.a.createElement(c.c, {
                      path: I(),
                      render: function(e) {
                        return a.a.createElement(_, Object(o.a)({}, e));
                      }
                    }),
                    a.a.createElement(c.c, {
                      path: j(),
                      render: function(e) {
                        return a.a.createElement(_, Object(o.a)({}, e));
                      }
                    }),
                    a.a.createElement(c.c, {
                      path: D(":vanity_url"),
                      render: function(e) {
                        return a.a.createElement(v, Object(o.a)({}, e));
                      }
                    }),
                    a.a.createElement(c.c, {
                      path: M(":steamid"),
                      render: function(e) {
                        return a.a.createElement(v, Object(o.a)({}, e));
                      }
                    }),
                    a.a.createElement(c.c, {
                      path: x(),
                      render: function(e) {
                        return a.a.createElement(g, Object(o.a)({}, e));
                      }
                    }),
                    a.a.createElement(c.c, {
                      path: R(),
                      render: function(e) {
                        return a.a.createElement(r, {
                          config: {
                            "apphub-events": function() {
                              return a.a.createElement(b, null);
                            },
                            "apphub-ugcrewards": function() {
                              return a.a.createElement(g, Object(o.a)({}, e));
                            }
                          }
                        });
                      }
                    }),
                    a.a.createElement(c.c, { component: L })
                  )
                )
              );
            }),
            t
          );
        })(a.a.Component);
      function L(e) {
        return "dev" == d.b.WEB_UNIVERSE
          ? a.a.createElement("div", null, "Dev Universe: Unknown Path")
          : a.a.createElement(c.b, { push: !0, to: d.b.COMMUNITY_BASE_URL });
      }
    },
    r64O: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return r;
      });
      var o = n("mrSG");
      function r(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        console.assert
          ? 0 == n.length
            ? console.assert(!!e, t)
            : console.assert.apply(console, Object(o.g)([!!e, t], n))
          : e || console.warn.apply(console, Object(o.g)([t], n));
      }
    },
    rCDf: function(e, t, r) {
      var o = {
        "./shared_arabic.json": ["d1TB", 67],
        "./shared_brazilian.json": ["Pg9r", 68],
        "./shared_bulgarian.json": ["ENge", 69],
        "./shared_czech.json": ["Ts6V", 70],
        "./shared_danish.json": ["9oiU", 71],
        "./shared_dutch.json": ["nxN4", 72],
        "./shared_english.json": ["TYjx", 73],
        "./shared_finnish.json": ["NuB8", 74],
        "./shared_french.json": ["bOPj", 75],
        "./shared_german.json": ["svuF", 76],
        "./shared_greek.json": ["eJKB", 77],
        "./shared_hungarian.json": ["T7i2", 78],
        "./shared_italian.json": ["w96W", 79],
        "./shared_japanese.json": ["XQ4S", 80],
        "./shared_koreana.json": ["4hyI", 81],
        "./shared_latam.json": ["3qrw", 82],
        "./shared_norwegian.json": ["XA4Q", 83],
        "./shared_polish.json": ["TpXn", 84],
        "./shared_portuguese.json": ["Q8UV", 85],
        "./shared_romanian.json": ["Eme1", 86],
        "./shared_russian.json": ["BUiO", 87],
        "./shared_sc_schinese.json": ["O0N/", 88],
        "./shared_schinese.json": ["3UpY", 89],
        "./shared_spanish.json": ["4Fxc", 90],
        "./shared_swedish.json": ["0JhB", 91],
        "./shared_tchinese.json": ["OYRc", 92],
        "./shared_thai.json": ["lhAZ", 93],
        "./shared_turkish.json": ["RSoU", 94],
        "./shared_ukrainian.json": ["lNXI", 95],
        "./shared_vietnamese.json": ["RSmC", 96]
      };
      function n(t) {
        var n = o[t];
        return n
          ? r.e(n[1]).then(function() {
              var e = n[0];
              return r.t(e, 3);
            })
          : Promise.resolve().then(function() {
              var e = new Error("Cannot find module '" + t + "'");
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            });
      }
      (n.keys = function() {
        return Object.keys(o);
      }),
        (n.id = "rCDf"),
        (e.exports = n);
    },
    sUmc: function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return a;
      }),
        n.d(t, "a", function() {
          return c;
        });
      var r = n("i8i4"),
        o = n("X3Ds"),
        i = (function() {
          return function(e) {
            this.instance = new s(e, !1);
          };
        })();
      function a(e) {
        return new s(e.body, !0);
      }
      var s = (function() {
          function e(e, t) {
            void 0 === t && (t = !0),
              (this.m_parent = e),
              (this.m_window = e.ownerDocument.defaultView),
              (this.m_bRemoveOnHide = t);
          }
          return (
            (e.prototype.Show = function(n, r) {
              var o = this;
              return (
                this.CancelShowInterval(),
                r
                  ? new Promise(function(t, e) {
                      o.iIntervalShow = o.m_window.setTimeout(function() {
                        var e = o.m_parent.ownerDocument;
                        e.defaultView &&
                          !e.defaultView.closed &&
                          (o.InternalShow(n), t());
                      }, r);
                    })
                  : (this.InternalShow(n), Promise.resolve())
              );
            }),
            (e.prototype.InternalShow = function(e) {
              this.m_container ||
                ((this.m_container = this.m_parent.ownerDocument.createElement(
                  "div"
                )),
                this.m_parent.appendChild(this.m_container)),
                r.render(e, this.m_container);
            }),
            (e.prototype.Hide = function(e) {
              var t = this;
              this.CancelShowInterval(),
                e
                  ? (this.iIntervalShow = this.m_window.setTimeout(function() {
                      t.InternalHide();
                    }, e))
                  : this.InternalHide();
            }),
            (e.prototype.InternalHide = function() {
              this.m_container &&
                (r.unmountComponentAtNode(this.m_container),
                this.m_bRemoveOnHide &&
                  (this.m_parent.removeChild(this.m_container),
                  (this.m_container = null)));
            }),
            (e.prototype.CancelShowInterval = function() {
              void 0 !== this.iIntervalShow &&
                (this.m_window.clearInterval(this.iIntervalShow),
                (this.iIntervalShow = void 0));
            }),
            (e.prototype.BIsChildElement = function(e) {
              return this.m_container && o.c(this.m_container, e);
            }),
            e
          );
        })(),
        c = (function() {
          function e(e) {
            (this.m_mapEmbeddedHovers = new WeakMap()),
              (this.m_strUniqueID = e);
          }
          return (
            (e.prototype.ShowElementDelayed = function(e, t, n, r) {
              var o = this.GetEmbeddedElement(e);
              return (o.activeObject = r), o.instance.Show(n, t);
            }),
            (e.prototype.ShowElement = function(e, t, n) {
              var r = this.GetEmbeddedElement(e);
              (r.activeObject = n), r.instance.Show(t);
            }),
            (e.prototype.HideElement = function(e, t, n) {
              var r = this.GetEmbeddedElement(e);
              r.activeObject == t &&
                ((r.activeObject = void 0), r.instance.Hide(n));
            }),
            (e.prototype.GetEmbeddedElement = function(e) {
              var t = this.m_mapEmbeddedHovers.get(e);
              return (
                t || ((t = new i(e.body)), this.m_mapEmbeddedHovers.set(e, t)),
                t
              );
            }),
            e
          );
        })();
    },
    umRa: function(e, t, n) {
      e.exports = {
        Toggle: "toggle_Toggle_3POJz",
        Disabled: "toggle_Disabled_1jIKG",
        ToggleRail: "toggle_ToggleRail_3DiLY",
        Highlight: "toggle_Highlight_2FNJu",
        On: "toggle_On_3N31m",
        Off: "toggle_Off_1Qa-r",
        ToggleSwitch: "toggle_ToggleSwitch_21X4K",
        ToggleRow: "toggle_ToggleRow_NnxzA",
        Label: "toggle_Label_xK7Vv"
      };
    },
    uobO: function(e, g, _) {
      "use strict";
      (function(e) {
        _.d(g, "a", function() {
          return v;
        });
        var t,
          l = _("mrSG"),
          r = _("bxBv"),
          a = _("SxtR"),
          n = _("IjL/"),
          o =
            window.addEventListener ||
            (e && e.addEventListener) ||
            function() {},
          i = [],
          s = function(e, t) {
            return i.push({ error: e, cCallsitesToIgnore: t });
          },
          c = console.assert;
        console.assert = function(e, t) {
          for (var n = [], r = 2; r < arguments.length; r++)
            n[r - 2] = arguments[r];
          e || s(new Error(m.apply(void 0, Object(l.g)([t], n))), 2),
            c.apply(console, Object(l.g)([e, t], n));
        };
        var u = console.error;
        (console.error = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          s(new Error(m.apply(void 0, Object(l.g)([e], t))), 1),
            u.apply(console, Object(l.g)([e], t));
        }),
          o("error", function(e) {
            s(e.error, 0);
          }),
          (t = window.setTimeout(function() {
            (i = []), (s = function() {});
          }, 3e4));
        var p = (function() {
          function e(e) {
            var r = this;
            void 0 === e && (e = !0),
              (this.m_transport = null),
              (this.m_rgErrorQueue = []),
              (this.m_bEnabled = !0),
              (this.m_bInitialized = !1),
              (s = e
                ? (i.forEach(function(e) {
                    var t = e.error,
                      n = e.cCallsitesToIgnore;
                    return r.ReportError(t, n);
                  }),
                  function(e, t) {
                    return r.ReportError(e, t);
                  })
                : function() {}),
              (i = []),
              clearTimeout(t),
              window.setTimeout(function() {
                r.m_bInitialized ||
                  ((r.m_bEnabled = !1), (r.m_rgErrorQueue = []));
              }, 3e4);
          }
          return (
            (e.prototype.Init = function(e, t, n) {
              (this.m_bInitialized = !0),
                (this.m_strProduct = e),
                (this.m_strVersion = t),
                (this.m_transport = n),
                this.m_bEnabled ||
                  (console.error(
                    "Error reporting was initialized after being disabled, possibly dropping errors."
                  ),
                  (this.m_bEnabled = !0)),
                this.m_rgErrorQueue.length &&
                  (this.SendErrorReports(this.m_rgErrorQueue),
                  (this.m_rgErrorQueue = []));
            }),
            (e.prototype.ReportError = function(r, o) {
              return (
                void 0 === o && (o = 0),
                Object(l.b)(this, void 0, void 0, function() {
                  var t, n;
                  return Object(l.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return (e.trys.push([0, 2, , 3]), this.m_bEnabled)
                          ? [
                              4,
                              (function(e, t) {
                                void 0 === t && (t = 0);
                                try {
                                  return e.stack && e.stack.match(h)
                                    ? (function(s, c) {
                                        void 0 === c && (c = 0);
                                        return Object(l.b)(
                                          this,
                                          void 0,
                                          void 0,
                                          function() {
                                            var n, r, o, i, a;
                                            return Object(l.e)(this, function(
                                              e
                                            ) {
                                              switch (e.label) {
                                                case 0:
                                                  return (
                                                    (n = s.stack.split("\n")),
                                                    (r = n.filter(function(e) {
                                                      return !!e.match(h);
                                                    })),
                                                    (t = r[c]),
                                                    (o = (function(e) {
                                                      var t = e.indexOf(
                                                        "https://"
                                                      );
                                                      if (-1 === t) return e;
                                                      var n = e.indexOf(
                                                        "/",
                                                        t + "https://".length
                                                      );
                                                      return -1 === n
                                                        ? e
                                                        : e.slice(0, t) +
                                                            e.slice(n);
                                                    })(
                                                      (function(e) {
                                                        var t = e.lastIndexOf(
                                                          "?"
                                                        );
                                                        if (-1 === t) return e;
                                                        var n = e.indexOf(
                                                          ":",
                                                          t
                                                        );
                                                        return -1 === n
                                                          ? e
                                                          : e.slice(0, t) +
                                                              e.slice(n);
                                                      })(t)
                                                    )),
                                                    (i = n
                                                      .map(function(e) {
                                                        var t = e.match(
                                                          /(.*)\((.*):(\d+):(\d+)\)/
                                                        );
                                                        if (!t) return e;
                                                        if (5 === t.length) {
                                                          t[0];
                                                          var n = t[1],
                                                            r = t[2],
                                                            o = t[3],
                                                            i = t[4],
                                                            a = parseInt(o),
                                                            s = parseInt(i);
                                                          if (
                                                            !isNaN(a) &&
                                                            !isNaN(s)
                                                          )
                                                            return [n, r, a, s];
                                                        }
                                                        return e;
                                                      })
                                                      .filter(function(e) {
                                                        return !!e;
                                                      })),
                                                    (a = { identifier: o }),
                                                    [
                                                      4,
                                                      (function(r) {
                                                        return Object(l.b)(
                                                          this,
                                                          void 0,
                                                          void 0,
                                                          function() {
                                                            var n;
                                                            return Object(l.e)(
                                                              this,
                                                              function(e) {
                                                                switch (
                                                                  e.label
                                                                ) {
                                                                  case 0:
                                                                    return (
                                                                      e.trys.push(
                                                                        [
                                                                          0,
                                                                          2,
                                                                          ,
                                                                          3
                                                                        ]
                                                                      ),
                                                                      [
                                                                        4,
                                                                        window.crypto.subtle.digest(
                                                                          "SHA-256",
                                                                          (function(
                                                                            e
                                                                          ) {
                                                                            for (
                                                                              var t = new ArrayBuffer(
                                                                                  2 *
                                                                                    e.length
                                                                                ),
                                                                                n = new Uint16Array(
                                                                                  t
                                                                                ),
                                                                                r = 0,
                                                                                o =
                                                                                  e.length;
                                                                              r <
                                                                              o;
                                                                              r++
                                                                            )
                                                                              n[
                                                                                r
                                                                              ] = e.charCodeAt(
                                                                                r
                                                                              );
                                                                            return t;
                                                                          })(r)
                                                                        )
                                                                      ]
                                                                    );
                                                                  case 1:
                                                                    return (
                                                                      (n = e.sent()),
                                                                      (t = n),
                                                                      [
                                                                        2,
                                                                        Array.prototype.map
                                                                          .call(
                                                                            new Uint8Array(
                                                                              t
                                                                            ),
                                                                            function(
                                                                              e
                                                                            ) {
                                                                              return (
                                                                                "00" +
                                                                                e.toString(
                                                                                  16
                                                                                )
                                                                              ).slice(
                                                                                -2
                                                                              );
                                                                            }
                                                                          )
                                                                          .join(
                                                                            ""
                                                                          )
                                                                          .slice(
                                                                            0,
                                                                            16
                                                                          )
                                                                      ]
                                                                    );
                                                                  case 2:
                                                                    return (
                                                                      e.sent(),
                                                                      [2, ""]
                                                                    );
                                                                  case 3:
                                                                    return [2];
                                                                }
                                                                var t;
                                                              }
                                                            );
                                                          }
                                                        );
                                                      })(o)
                                                    ]
                                                  );
                                                case 1:
                                                  return [
                                                    2,
                                                    ((a.identifierHash = e.sent()),
                                                    (a.message = i),
                                                    a)
                                                  ];
                                              }
                                              var t;
                                            });
                                          }
                                        );
                                      })(e, t)
                                    : e.stack && e.stack.match(f)
                                    ? (function(e) {
                                        void 0 === e && (e = 0);
                                        return Object(l.b)(
                                          this,
                                          void 0,
                                          void 0,
                                          function() {
                                            return Object(l.e)(this, function(
                                              e
                                            ) {
                                              return [2, null];
                                            });
                                          }
                                        );
                                      })(t)
                                    : null;
                                } catch (e) {
                                  return (
                                    console.warn(
                                      "Failed to normalize error stack: " + e
                                    ),
                                    null
                                  );
                                }
                              })(r, o)
                            ]
                          : [2, null];
                      case 1:
                        return (t = e.sent())
                          ? (this.SendErrorReport(t), [2, t])
                          : [2, null];
                      case 2:
                        return (
                          (n = e.sent()),
                          console.log("Failed to report error: " + n),
                          [2, null]
                        );
                      case 3:
                        return [2];
                    }
                  });
                })
              );
            }),
            (e.prototype.SendErrorReport = function(e) {
              this.m_transport
                ? this.SendErrorReports([e])
                : this.m_rgErrorQueue.push(e);
            }),
            (e.prototype.SendErrorReports = function(e) {
              var t, i, n;
              e &&
                e.length &&
                ((t = r.a.Init(a.a)),
                (i = e.reduce(function(e, t) {
                  return (
                    e[t.identifier]
                      ? e[t.identifier].count++
                      : (e[t.identifier] = { report: t, count: 1 }),
                    e
                  );
                }, {})),
                (n = Object.keys(i).map(function(e) {
                  var t = i[e],
                    n = t.report,
                    r = t.count,
                    o = new a.b();
                  return (
                    o.set_count(r),
                    o.set_identifier(n.identifier + " " + n.identifierHash),
                    o.set_message(JSON.stringify(n.message)),
                    o
                  );
                })),
                t.Body().set_product(this.m_strProduct),
                t.Body().set_version(this.m_strVersion),
                t.Body().set_errors(n),
                a.c.ReportClientError(this.m_transport, t));
            }),
            Object.defineProperty(e.prototype, "version", {
              get: function() {
                return this.m_strVersion;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "product", {
              get: function() {
                return this.m_strProduct;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "reporting_enabled", {
              get: function() {
                return !0;
              },
              enumerable: !1,
              configurable: !0
            }),
            e
          );
        })();
        function m(e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          return "string" == typeof e && 0 === t.length
            ? e
            : Object(l.g)([e], t)
                .map(function(e) {
                  try {
                    return String(e);
                  } catch (e) {
                    return "[Stringify Error]";
                  }
                })
                .join(", ");
        }
        var d,
          h = /^\s*at .*(\S+:\d+|\(native\))/m,
          f = /(^|@)\S+:\d+/;
        var v = function() {
            return d || b(new p()), d;
          },
          b = function(e) {
            (d = e), n.a.InstallErrorReportingStore(d);
          };
      }.call(this, _("yLpj")));
    },
    w9XT: function(e, t, n) {
      "use strict";
      n.d(t, "c", function() {
        return r;
      }),
        n.d(t, "a", function() {
          return s;
        }),
        n.d(t, "b", function() {
          return c;
        });
      var r,
        o,
        i = n("q1tI"),
        a = n.n(i);
      ((o = r = r || {})[(o.A = 0)] = "A"),
        (o[(o.B = 1)] = "B"),
        (o[(o.X = 2)] = "X"),
        (o[(o.Y = 3)] = "Y"),
        (o[(o.Menu = 4)] = "Menu"),
        (o[(o.Left = 5)] = "Left"),
        (o[(o.Right = 6)] = "Right"),
        (o[(o.Up = 7)] = "Up"),
        (o[(o.Down = 8)] = "Down");
      var s = a.a.createContext(void 0);
      function c(e) {
        var t = Object(i.useContext)(s);
        if (!t || !t.focusActions)
          return a.a.createElement(a.a.Fragment, null, e.children);
        var n = [];
        if (e.boundActions) {
          e.boundActions.forEach(function(e) {
            return n.push(e);
          });
          for (var r = 0, o = t.focusActions; r < o.length; r++) {
            !(function(t) {
              var e = n.find(function(e) {
                return e.button === t.button;
              });
              e
                ? (!e.action && t.action && (e.action = t.action),
                  !e.description &&
                    t.description &&
                    (e.description = t.description))
                : n.push(t);
            })(o[r]);
          }
        } else
          t.focusActions.forEach(function(e) {
            return n.push(e);
          });
        return a.a.createElement(
          s.Provider,
          {
            value: {
              focusActions: n,
              setCurrentActions: t.setCurrentActions,
              currentActions: t.currentActions
            }
          },
          e.children
        );
      }
    },
    xnZ7: function(e, t, n) {
      e.exports = {
        v6: "shared_common_v6_2Lxgd",
        SubText: "shared_common_SubText_vg0EO",
        AvatarImageContainer: "shared_common_AvatarImageContainer_33hdF",
        GameImageContainer: "shared_common_GameImageContainer_2OYAD",
        AvatarImage: "shared_common_AvatarImage_2CQYc",
        STV_HomeGridPreviewDetails:
          "shared_common_STV_HomeGridPreviewDetails_Yncr-",
        ChatAvatarImage: "shared_common_ChatAvatarImage_1cUR_",
        EditButton: "shared_common_EditButton_VsZ-b",
        Small: "shared_common_Small_3M4j8",
        FlexCenter: "shared_common_FlexCenter_1R3yc",
        ThrobberCtn: "shared_common_ThrobberCtn_3m7p6",
        MarkdownLink: "shared_common_MarkdownLink_1Wqum",
        SummaryTextArea: "shared_common_SummaryTextArea_cNMZ-",
        RemoveIcon: "shared_common_RemoveIcon_3NeLW"
      };
    },
    "y+6m": function(e, t, n) {
      "use strict";
      n.d(t, "c", function() {
        return _;
      }),
        n.d(t, "d", function() {
          return y;
        }),
        n.d(t, "b", function() {
          return E;
        }),
        n.d(t, "f", function() {
          return O;
        }),
        n.d(t, "a", function() {
          return w;
        }),
        n.d(t, "e", function() {
          return S;
        }),
        n.d(t, "g", function() {
          return C;
        });
      var a = n("mrSG"),
        r = n("TyAF"),
        s = n("q1tI"),
        c = n("i8i4"),
        l = n("TtDX"),
        u = n("JMS6"),
        I = n("X3Ds"),
        o = n("bxiW"),
        i = n("6Y59"),
        p = n("D4wO"),
        m = n("TLQK"),
        d = n("lkRc"),
        h = n("+jbA"),
        f = n.n(h),
        v = n("exH9"),
        b = n("w9XT"),
        g = (n("UPxs"), s.createContext(null)),
        _ = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.componentDidMount = function() {
              this.context &&
                (this.context.m_refContextMenu = this).context.SetLabel(
                  this.props.label
                );
            }),
            (t.prototype.componentDidUpdate = function(e) {
              e.label !== this.props.label &&
                this.context &&
                this.context.SetLabel(this.props.label);
            }),
            (t.prototype.render = function() {
              var e,
                t = this.props,
                n = t.children,
                r = t.className,
                o = (t.label,
                Object(a.f)(t, ["children", "className", "label"])),
                i =
                  this.context &&
                  this.context.options &&
                  this.context.options.bUseWebStyles;
              return s.createElement(
                "div",
                Object(a.a)({}, o, {
                  className: Object(v.a)(
                    (((e = { popup_menu: i, popup_body: i })[
                      f.a.contextMenuContents
                    ] = !i),
                    (e[f.a.hasSubMenu] =
                      this.context && this.context.BIsSubMenuVisible()),
                    e),
                    r
                  )
                }),
                n
              );
            }),
            (t.contextType = g),
            (t = Object(a.c)([r.a], t))
          );
        })(s.Component),
        y = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_ref = s.createRef()), e;
          }
          return (
            Object(a.d)(e, t),
            Object.defineProperty(e.prototype, "element", {
              get: function() {
                return this.m_ref.current;
              },
              enumerable: !1,
              configurable: !0
            }),
            (e.prototype.OnClick = function(e) {
              this.props.disabled ||
                (this.props.onClick && this.props.onClick(e),
                this.props.bInteractableItem ||
                  (this.props.onSelected && this.props.onSelected(e),
                  this.context && this.context.Hide()));
            }),
            (e.prototype.OnMouseEnter = function(e) {
              this.context &&
                0 == this.context.presentation &&
                this.context.HideSubMenu();
            }),
            (e.prototype.Focus = function() {
              this.m_ref.current && this.m_ref.current.focus();
            }),
            (e.prototype.render = function() {
              var e,
                t = this.props,
                n = (t.onSelected,
                t.bInteractableItem,
                Object(a.f)(t, ["onSelected", "bInteractableItem"])),
                r =
                  this.context &&
                  this.context.options &&
                  this.context.options.bUseWebStyles;
              return s.createElement(
                "div",
                Object(a.a)(
                  { ref: this.m_ref, onMouseEnter: this.OnMouseEnter },
                  n,
                  {
                    onClick: this.OnClick,
                    unselectable: this.props.unselectable,
                    className: Object(v.a)(
                      this.props.className,
                      (((e = { popup_menu_item: r })[f.a.contextMenuItem] = !r),
                      (e.contextMenuItem = !r),
                      (e.disabled = !!this.props.disabled),
                      e)
                    )
                  }
                ),
                this.props.children
              );
            }),
            (e.contextType = g),
            Object(a.c)([o.a], e.prototype, "OnClick", null),
            Object(a.c)([o.a], e.prototype, "OnMouseEnter", null),
            Object(a.c)([o.a], e.prototype, "Focus", null),
            e
          );
        })(s.PureComponent),
        E = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.bChecked,
                n = e.children,
                r = e.className,
                o = Object(a.f)(e, ["bChecked", "children", "className"]);
              return s.createElement(
                y,
                Object(a.a)({}, o, {
                  className: Object(v.a)(r, t && "menuChecked")
                }),
                s.createElement("div", { className: "contextMenuCheckMark" }),
                n
              );
            }),
            t
          );
        })(s.PureComponent),
        O = (s.PureComponent,
        (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return (
              (t.m_elMenu = void 0),
              (t.m_cReenteranceGuard = 1),
              (t.state = {
                ready: !1,
                menuLeft: void 0,
                menuTop: void 0,
                menuRight: void 0,
                menuBottom: void 0,
                menuWidth: void 0,
                menuHeight: void 0
              }),
              (t.m_mutationObserver = new MutationObserver(t.OnMenuMutation)),
              t
            );
          }
          return (
            Object(a.d)(e, n),
            (e.prototype.BindMenuElement = function(e) {
              var t = this;
              this.m_elMenu &&
                (this.m_mutationObserver.disconnect(),
                this.props.popup ||
                  this.m_elMenu.ownerDocument.defaultView.removeEventListener(
                    "resize",
                    this.OnWindowResize
                  )),
                e &&
                  (this.m_mutationObserver.observe(e, {
                    childList: !0,
                    subtree: !0
                  }),
                  this.props.popup ||
                    e.ownerDocument.defaultView.addEventListener(
                      "resize",
                      this.OnWindowResize
                    )),
                (this.m_elMenu = e || void 0),
                this.PositionMenu(),
                this.state.ready ||
                  (this.props.instance.SetTakeFocus(this.TakeFocus.bind(this)),
                  this.setState({ ready: !0 }, function() {
                    t.TakeFocus();
                  }));
            }),
            (e.prototype.OnMenuMutation = function(e, t) {
              this.PositionMenu();
            }),
            (e.prototype.OnWindowResize = function() {
              this.PositionMenu();
            }),
            (e.prototype.OnBlur = function(e) {
              (e.relatedTarget && I.c(e.currentTarget, e.relatedTarget)) ||
                (e.relatedTarget &&
                  this.props.instance.BIsElementInMenuHierarchy(
                    e.relatedTarget
                  )) ||
                this.props.instance.BIsSubMenuVisible() ||
                (this.state.ready &&
                  this.props.instance.visible &&
                  this.props.instance.Hide());
            }),
            (e.prototype.OnKeyDown = function(e) {
              27 == e.keyCode &&
                this.state.ready &&
                (this.props.instance.Hide(),
                e.preventDefault(),
                e.stopPropagation());
            }),
            (e.prototype.componentDidUpdate = function() {
              0 < this.m_cReenteranceGuard--
                ? this.PositionMenu()
                : (this.m_cReenteranceGuard = 2);
            }),
            (e.prototype.TakeFocus = function() {
              var e;
              this.m_elMenu &&
                this.state.ready &&
                this.props.instance.visible &&
                ((!this.props.popup &&
                  I.c(
                    this.m_elMenu,
                    this.m_elMenu.ownerDocument.activeElement
                  )) ||
                  ((e = this.m_elMenu.querySelector(".ContextMenuAutoFocus")) &&
                  e.focus
                    ? e.focus()
                    : this.m_elMenu.focus()));
            }),
            (e.prototype.PositionMenu = function() {
              var e,
                t,
                n,
                r,
                o,
                i,
                a,
                s,
                c,
                l,
                u,
                p,
                m,
                d,
                h,
                f,
                v,
                b,
                g,
                _,
                y,
                E,
                O,
                w,
                S,
                C,
                D,
                M,
                x,
                A,
                k = this.m_elMenu,
                j = this.props.element;
              k &&
                j &&
                ((e = j.ownerDocument.defaultView),
                (k.ownerDocument.defaultView.CtxUpdate = this.PositionMenu.bind(
                  this
                )),
                (t = j.getBoundingClientRect()),
                (n = k.getBoundingClientRect()),
                (r = null != this.props.popup),
                (o = this.props.options),
                (i = {
                  menuLeft: void 0,
                  menuRight: void 0,
                  menuTop: void 0,
                  menuBottom: void 0,
                  menuWidth: void 0,
                  menuHeight: void 0
                }),
                (a = this.props.clientX),
                (s = this.props.clientY),
                (c = e.innerWidth),
                (l = e.innerHeight),
                r &&
                  (this.props.options.bScreenCoordinates ||
                    ((a += e.screenLeft), (s += e.screenTop)),
                  (t = I.f(e, t)),
                  (m = p = 0),
                  (u = e.screen).availLeft && (p = u.availLeft),
                  u.availTop && (m = u.availTop),
                  (c = p + u.availWidth),
                  (l = m + u.availHeight)),
                (o.bOverlapHorizontal || o.bOverlapVertical) &&
                  (a = s = void 0),
                (d = a || t.left),
                (h = a || t.right),
                (f = n.width),
                o.bMatchWidth && ((f = h - d), (i.menuWidth = f)),
                (b = 0 < (v = (o.bOverlapHorizontal ? h : d) - f)),
                (_ = 0 < (g = c - (o.bOverlapHorizontal ? d : h) - f)),
                (y = (o.bPreferPopLeft || !_) && b),
                b ||
                  _ ||
                  ((y = _ < b),
                  o.bFitToWindow &&
                    ((f += (y ? v : g) - 8), (i.menuWidth = f))),
                (!o.bPreferPopLeft && _) || !b
                  ? (i.menuLeft = o.bOverlapHorizontal ? d : h)
                  : (i.menuRight = c - (o.bOverlapHorizontal ? h : d)),
                (E = s || t.top),
                (O = s || t.bottom),
                (w = k.scrollHeight),
                o.bMatchHeight && ((w = O - E), (i.menuHeight = w)),
                (C = 0 < (S = (o.bOverlapVertical ? O : E) - w)),
                (M = 0 < (D = l - (o.bOverlapVertical ? E : O) - w)),
                (A = (o.bPreferPopTop || !M) && C && !o.bDisablePopTop),
                C ||
                  M ||
                  ((x =
                    void 0 !== o.bShiftToFitWindow
                      ? o.bShiftToFitWindow
                      : o.bFitToWindow && !o.bOverlapHorizontal),
                  (A = D < S && !o.bDisablePopTop),
                  x && (A ? (i.menuTop = 4) : (i.menuBottom = 4)),
                  o.bFitToWindow &&
                    (x ? (w = Math.min(w, l - 8)) : (w += A ? S : D),
                    (i.menuHeight = w - 8))),
                void 0 === i.menuBottom &&
                  void 0 === i.menuTop &&
                  (A
                    ? (i.menuBottom = l - (o.bOverlapVertical ? O : E))
                    : (i.menuTop = o.bOverlapVertical ? E : O)),
                r
                  ? (i.menuHeight || (i.menuHeight = n.height),
                    i.menuWidth || (i.menuWidth = n.width),
                    i.menuBottom &&
                      !i.menuTop &&
                      ((i.menuTop = l - i.menuBottom - i.menuHeight),
                      (i.menuBottom = void 0)),
                    i.menuRight &&
                      !i.menuLeft &&
                      ((i.menuLeft = c - i.menuRight - i.menuWidth),
                      (i.menuRight = void 0)))
                  : (i.menuLeft && (i.menuLeft += e.scrollX),
                    i.menuTop && (i.menuTop += e.scrollY),
                    i.menuBottom &&
                      (i.menuBottom +=
                        e.document.body.clientHeight -
                        e.scrollY -
                        e.innerHeight),
                    i.menuRight &&
                      (i.menuRight +=
                        e.document.body.clientWidth -
                        e.scrollX -
                        e.innerWidth)),
                (i.menuLeft === this.state.menuLeft &&
                  i.menuRight === this.state.menuRight &&
                  i.menuTop === this.state.menuTop &&
                  i.menuBottom === this.state.menuBottom &&
                  i.menuWidth === this.state.menuWidth &&
                  i.menuHeight === this.state.menuHeight) ||
                  this.setState(i));
            }),
            (e.prototype.render = function() {
              var o,
                i = this,
                e = { visibility: this.state.ready ? "visible" : "hidden" };
              this.props.popup
                ? ((o = this.props.element.ownerDocument.defaultView),
                  void 0 !== this.state.menuLeft &&
                    void 0 !== this.state.menuTop &&
                    void 0 !== this.state.menuWidth &&
                    void 0 !== this.state.menuHeight &&
                    o.SteamClient.Window.GetWindowRestoreDetails(function(e) {
                      var t = i.props.popup.window,
                        n = i.state.menuLeft - o.screenX,
                        r = i.state.menuTop - o.screenY;
                      try {
                        t.SteamClient.Window.PositionWindowRelative(
                          e,
                          n,
                          r,
                          i.state.menuWidth,
                          i.state.menuHeight
                        );
                      } catch (e) {
                        console.error(e);
                      }
                    }))
                : (void 0 !== this.state.menuTop
                    ? (e.top = this.state.menuTop)
                    : void 0 !== this.state.menuBottom &&
                      (e.bottom = this.state.menuBottom),
                  void 0 !== this.state.menuLeft
                    ? (e.left = this.state.menuLeft)
                    : void 0 !== this.state.menuRight &&
                      (e.right = this.state.menuRight),
                  void 0 !== this.state.menuHeight &&
                    (e.height = this.state.menuHeight),
                  void 0 !== this.state.menuWidth &&
                    (e.width = this.state.menuWidth));
              var t =
                this.props.options.strClassName ||
                (this.props.options.bUseWebStyles
                  ? "popup_block_new popup_block_hidden_until_visible"
                  : f.a.contextMenu);
              return (
                this.props.instance.visible &&
                  this.state.ready &&
                  (t += " visible"),
                (t += " " + f.a.ContextMenuFocusContainer),
                s.createElement(
                  g.Provider,
                  { value: this.props.instance },
                  s.createElement(
                    "div",
                    {
                      className: t,
                      ref: this.BindMenuElement,
                      style: e,
                      onBlur: this.OnBlur,
                      onKeyDown: this.OnKeyDown,
                      tabIndex: 0
                    },
                    this.props.children
                  )
                )
              );
            }),
            Object(a.c)([o.a], e.prototype, "BindMenuElement", null),
            Object(a.c)(
              [o.a, Object(p.a)(100)],
              e.prototype,
              "OnMenuMutation",
              null
            ),
            Object(a.c)([o.a], e.prototype, "OnWindowResize", null),
            Object(a.c)([o.a], e.prototype, "OnBlur", null),
            Object(a.c)([o.a], e.prototype, "OnKeyDown", null),
            (e = Object(a.c)([r.a], e))
          );
        })(s.Component)),
        w = (function(o) {
          function i(e, t, n) {
            var r =
              o.call(this, "contextmenu_" + i.sm_iContextMenuInstance++, {
                title: "Menu",
                html_class: f.a.ContextMenuPopup + " client_chat_frame",
                body_class: "ContextMenuPopupBody",
                replace_existing_popup: !1,
                target_browser: n,
                eCreationFlags: u.b.ContextMenu
              }) || this;
            return (r.m_menuProps = e), (r.m_children = t), r;
          }
          return (
            Object(a.d)(i, o),
            (i.prototype.UpdateParamsBeforeShow = function(e) {
              var t;
              return (
                this.m_menuProps.options.bScreenCoordinates
                  ? (e.dimensions = {
                      left: this.m_menuProps.clientX,
                      top: this.m_menuProps.clientY,
                      width: 350,
                      height: 1
                    })
                  : ((t = I.f(
                      this.m_menuProps.element.ownerDocument.defaultView,
                      this.m_menuProps.element.getBoundingClientRect()
                    )),
                    (e.dimensions = {
                      left: t.right,
                      top: t.top,
                      width: 350,
                      height: 1
                    })),
                (e.availscreenwidth = this.m_menuProps.element.ownerDocument.defaultView.screen.availWidth),
                (e.availscreenheight = this.m_menuProps.element.ownerDocument.defaultView.screen.availHeight),
                e
              );
            }),
            (i.prototype.Render = function(e, t) {
              c.render(
                s.createElement(
                  O,
                  Object(a.a)({}, this.m_menuProps, { popup: this }),
                  this.m_children
                ),
                t
              );
            }),
            (i.prototype.OnBlur = function() {}),
            (i.prototype.OnFocus = function() {}),
            (i.prototype.OnLoad = function() {}),
            (i.prototype.OnResize = function() {}),
            (i.prototype.OnClose = function() {}),
            (i.sm_iContextMenuInstance = 0),
            i
          );
        })(u.a);
      function S(e) {
        return s.createElement("div", {
          className: f.a.ContextMenuMouseOverlay
        });
      }
      function C(e) {
        var t = [],
          n = I.m(e),
          r = n.getSelection(),
          o = r && 0 < r.rangeCount && 0 < r.toString().length,
          i = e.target,
          a = !1;
        if (
          (i &&
            "tagName" in i &&
            (("INPUT" != i.tagName && "TEXTAREA" != i.tagName) || (a = !0)),
          (n.document.queryCommandEnabled("cut") || (o && a)) &&
            t.push(
              s.createElement(
                y,
                {
                  key: "cut",
                  onSelected: function() {
                    n.document.execCommand("cut");
                  }
                },
                Object(m.f)("#ContextMenu_Cut")
              )
            ),
          (document.queryCommandEnabled("copy") || o) &&
            t.push(
              s.createElement(
                y,
                {
                  key: "copy",
                  onSelected: function() {
                    n.document.execCommand("copy");
                  }
                },
                Object(m.f)("#ContextMenu_Copy")
              )
            ),
          d.b.IN_CLIENT &&
            a &&
            t.push(
              s.createElement(
                y,
                {
                  key: "paste",
                  onSelected: function() {
                    i.focus(), n.SteamClient._internal.Paste();
                  }
                },
                Object(m.f)("#ContextMenu_Paste")
              )
            ),
          t.length)
        )
          Object(l.a)(s.createElement(_, null, t), e);
        else {
          if (e.shiftKey) return;
          e.preventDefault(), e.stopPropagation();
        }
      }
    }
  },
  [["gfbn", 3, 0]]
]);

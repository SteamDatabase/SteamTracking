/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "5981780";
(window.webpackJsonp = window.webpackJsonp || []).push([
  [92],
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
        return c;
      });
      var r = n("wd/R"),
        o = n.n(r),
        i = n("s4NR"),
        a = n.n(i),
        s = n("lkRc"),
        c = new ((function() {
          function e() {
            (this.bOpenEventLandingPage = !1),
              (this.bIncludeFeaturedAsGameSource = !0),
              (this.nOverrideDateNow = void 0);
          }
          return (
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
                  ("dev" != s.b.WEB_UNIVERSE && "beta" != s.b.WEB_UNIVERSE) ||
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
      window.g_EventCalendarDevFeatures = c;
    },
    "6Y59": function(e, t, n) {
      "use strict";
      n.d(t, "B", function() {
        return c;
      }),
        n.d(t, "j", function() {
          return l;
        }),
        n.d(t, "q", function() {
          return u;
        }),
        n.d(t, "k", function() {
          return p;
        }),
        n.d(t, "D", function() {
          return m;
        }),
        n.d(t, "J", function() {
          return h;
        }),
        n.d(t, "H", function() {
          return d;
        }),
        n.d(t, "v", function() {
          return f;
        }),
        n.d(t, "I", function() {
          return v;
        }),
        n.d(t, "x", function() {
          return g;
        }),
        n.d(t, "w", function() {
          return b;
        }),
        n.d(t, "e", function() {
          return _;
        }),
        n.d(t, "h", function() {
          return y;
        }),
        n.d(t, "o", function() {
          return E;
        }),
        n.d(t, "E", function() {
          return O;
        }),
        n.d(t, "b", function() {
          return w;
        }),
        n.d(t, "a", function() {
          return C;
        }),
        n.d(t, "g", function() {
          return D;
        }),
        n.d(t, "i", function() {
          return S;
        }),
        n.d(t, "r", function() {
          return x;
        }),
        n.d(t, "t", function() {
          return M;
        }),
        n.d(t, "y", function() {
          return k;
        }),
        n.d(t, "m", function() {
          return I;
        }),
        n.d(t, "s", function() {
          return j;
        }),
        n.d(t, "C", function() {
          return T;
        }),
        n.d(t, "G", function() {
          return L;
        }),
        n.d(t, "z", function() {
          return N;
        }),
        n.d(t, "A", function() {
          return R;
        }),
        n.d(t, "c", function() {
          return A;
        }),
        n.d(t, "u", function() {
          return B;
        }),
        n.d(t, "F", function() {
          return P;
        }),
        n.d(t, "n", function() {
          return F;
        }),
        n.d(t, "l", function() {
          return H;
        }),
        n.d(t, "d", function() {
          return G;
        }),
        n.d(t, "f", function() {
          return U;
        }),
        n.d(t, "p", function() {
          return W;
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
      function d(e) {
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
      function f() {
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
      function v(e) {
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
      function b() {
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
      function _() {
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
      function y(e) {
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
      function E() {
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
      function O(e) {
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
      function w() {
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
      function S(e) {
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
      function M() {
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
      function I(e) {
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
      function j(e) {
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
      function T(e) {
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
      function L() {
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
      function N() {
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
      function R() {
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
      function A() {
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
      function B() {
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
      function F() {
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
      function H() {
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
      function G() {
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
      function U() {
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
      function W(e) {
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
    },
    AvbV: function(e, t, r) {
      var o = {
        "./main_brazilian.json": ["TFAN", 10],
        "./main_bulgarian.json": ["c2SO", 11],
        "./main_czech.json": ["peP3", 12],
        "./main_danish.json": ["0bnV", 13],
        "./main_dutch.json": ["wcLc", 14],
        "./main_english.json": ["/rNK", 4],
        "./main_finnish.json": ["iywU", 15],
        "./main_french.json": ["Xnpc", 16],
        "./main_german.json": ["pmKi", 17],
        "./main_greek.json": ["mTRv", 18],
        "./main_hungarian.json": ["WkHb", 19],
        "./main_italian.json": ["Jz5U", 20],
        "./main_japanese.json": ["3Dk9", 21],
        "./main_koreana.json": ["neQD", 22],
        "./main_latam.json": ["6oHD", 23],
        "./main_norwegian.json": ["2OvS", 24],
        "./main_polish.json": ["3pwE", 25],
        "./main_portuguese.json": ["hY40", 26],
        "./main_romanian.json": ["Q95+", 27],
        "./main_russian.json": ["bsPT", 28],
        "./main_schinese.json": ["B/Zz", 29],
        "./main_spanish.json": ["U6iL", 30],
        "./main_swedish.json": ["4uPU", 31],
        "./main_tchinese.json": ["rgC9", 32],
        "./main_thai.json": ["87dp", 33],
        "./main_turkish.json": ["yMpO", 34],
        "./main_ukrainian.json": ["zTWm", 35],
        "./main_vietnamese.json": ["wqiy", 36]
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
        return r;
      });
      var o = n("mrSG"),
        a = n("q1tI"),
        i = n("bxiW"),
        r = (function(t) {
          function r() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), e;
          }
          return (
            Object(o.d)(r, t),
            (r.InstallErrorReportingStore = function(e) {
              this.sm_ErrorReportingStore = e;
            }),
            (r.prototype.componentDidCatch = function(e, t) {
              var n = r.sm_ErrorReportingStore;
              n
                ? n.ReportError(e)
                : console.warn(
                    "No ErrorReportingStore - use ErrorReportingStore().Init() to configure error reporting to server"
                  ),
                this.setState({ error: { error: e, info: t } });
            }),
            (r.prototype.Reset = function() {
              this.setState({ error: null });
            }),
            (r.prototype.render = function() {
              var e = this.props,
                t = e.children,
                n = e.fallback,
                r = this.state.error;
              return r
                ? void 0 !== n
                  ? "function" == typeof n
                    ? n(r.error)
                    : n
                  : a.createElement(s, { error: r, onDismiss: this.Reset })
                : t;
            }),
            Object(o.c)([i.a], r.prototype, "Reset", null),
            r
          );
        })(a.Component),
        s = function(e) {
          var t = e.error,
            n = e.onDismiss,
            r = t.error ? t.error.stack : "Stack missing",
            o = t.info ? t.info.componentStack : "",
            i = (t.error && t.error.message) || "unknown error";
          return a.createElement(
            "div",
            { style: { overflow: "auto" } },
            a.createElement(
              "h1",
              {
                style: {
                  marginTop: "15px",
                  marginLeft: "15px",
                  color: "white",
                  fontSize: "20px",
                  display: "inline-block"
                }
              },
              'Error: "',
              i,
              '"'
            ),
            "   ",
            a.createElement(
              "span",
              {
                style: { textDecoration: "underline", cursor: "pointer" },
                onClick: n
              },
              "(x) Dismiss"
            ),
            a.createElement("br", null),
            a.createElement(
              "pre",
              {
                style: {
                  marginTop: "15px",
                  marginLeft: "15px",
                  color: "white",
                  fontSize: "16px"
                }
              },
              r
            ),
            a.createElement(
              "pre",
              {
                style: {
                  marginTop: "15px",
                  marginLeft: "15px",
                  color: "white",
                  fontSize: "16px"
                }
              },
              "The error occurred while rendering:",
              o
            )
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
        return l;
      }),
        n.d(t, "a", function() {
          return f;
        });
      var l,
        r,
        o = n("mrSG"),
        i = n("2vnA"),
        a = n("i8i4"),
        s = n("Kw0F"),
        c = n("D4wO"),
        u = n("bxiW"),
        p = n("kyHq"),
        m = n("TLQK"),
        h = n("lkRc");
      ((r = l = l || {})[(r.Minimized = 1)] = "Minimized"),
        (r[(r.Hidden = 2)] = "Hidden"),
        (r[(r.Tooltip = 4)] = "Tooltip"),
        (r[(r.ContextMenu = 8)] = "ContextMenu"),
        (r[(r.Resizable = 16)] = "Resizable");
      var d = (function() {
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
                s.b(this.m_rgLoadingLinks, e.currentTarget),
                0 == this.m_rgLoadingLinks.length &&
                  (this.m_fnRender(), (this.m_fnRender = void 0));
            }),
            Object(o.c)([u.a], e.prototype, "OnLinkLoad", null),
            e
          );
        })(),
        f = (function() {
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
                  (this.m_rgParams.eCreationFlags |= l.Hidden),
                this.m_rgParams.eCreationFlags & l.Tooltip && (e = !1),
                this.BIsValid() &&
                  (this.BIsClosed()
                    ? ((this.m_popup = void 0), (this.m_element = void 0))
                    : e && this.Focus(t));
              var o,
                i,
                a,
                s,
                c = g.GetExistingPopup(this.m_strName);
              (c && !this.m_rgParams.replace_existing_popup) ||
                ((this.m_rgParams = this.UpdateParamsBeforeShow(
                  this.m_rgParams
                )),
                c
                  ? ((i = c.m_element),
                    (o = c.m_popup),
                    c.ReleasePopup(),
                    (a = c.m_renderWhenReady),
                    g.RemoveTrackedPopup(c),
                    o.removeEventListener(
                      "beforeunload",
                      c.OnBeforeUnloadEvent
                    ),
                    o.removeEventListener("unload", c.OnUnload),
                    o.removeEventListener("resize", c.OnResizeEvent),
                    o.removeEventListener("focus", this.OnFocusInternal),
                    o.removeEventListener("blur", this.OnBlurInternal),
                    o.removeEventListener("drop", c.OnDrop),
                    o.removeEventListener("dragover", c.OnDragOver),
                    o.removeEventListener("message", this.OnMessage))
                  : ((o = (n = v.CreatePopup(this.m_strName, this.m_rgParams))
                      .popup),
                    (i = n.element),
                    (a = new d(o, i))),
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
                  h.b.LANGUAGE &&
                    ((s = "koreana" == h.b.LANGUAGE ? "korean" : h.b.LANGUAGE),
                    o.document.documentElement.setAttribute("lang", m.b[s])),
                  (this.m_popup = o),
                  (this.m_element = i),
                  (this.m_renderWhenReady = a),
                  this.m_renderWhenReady.SetTarget(function() {
                    return r.RenderInternal(r.m_popup, r.m_element, e);
                  })),
                g.AddTrackedPopup(this),
                c && e && this.Focus());
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
                  p.b.EBrowserType_OpenVROverlay &&
                  r.m_eBrowserType !=
                    p.b.EBrowserType_OpenVROverlay_Dashboard) ||
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
            Object(o.c)([i.x], e.prototype, "m_bFocused", void 0),
            Object(o.c)([u.a], e.prototype, "OnMessage", null),
            Object(o.c)([u.a], e.prototype, "OnResizeEvent", null),
            Object(o.c)([u.a], e.prototype, "OnBeforeUnloadEvent", null),
            Object(o.c)([u.a], e.prototype, "OnUnload", null),
            Object(o.c)([u.a], e.prototype, "OnFocusInternal", null),
            Object(o.c)([u.a], e.prototype, "OnBlurInternal", null),
            e
          );
        })(),
        v = (function() {
          function e() {
            var a = this;
            (this.m_bShuttingDown = !1),
              (this.m_mapPopups = new Map()),
              (this.m_rgShutdownCallbacks = []),
              (this.m_rgPopupCreatedCallbacks = []),
              (this.m_unCurrentAccountID = 0),
              (this.m_mapRestoreDetails = new Map()),
              (this.m_bSaveRequired = !1),
              Object({ NODE_ENV: "production", STEAM_BUILD: "buildbot" })
                .MOBILE_BUILD ||
                window.addEventListener("beforeunload", function(e) {
                  a.m_bShuttingDown = !0;
                  for (
                    var t = 0, n = a.m_rgShutdownCallbacks;
                    t < n.length;
                    t++
                  ) {
                    (0, n[t])();
                  }
                  var r = [];
                  a.m_mapPopups.forEach(function(e) {
                    e.BIsValid() && !e.BIsClosed() && r.push(e);
                  });
                  for (var o = 0, i = r; o < i.length; o++) {
                    i[o].Close();
                  }
                  a.m_bSaveRequired && a.SaveSavedDimensionStore(),
                    a.m_mapPopups.clear();
                });
          }
          return (
            (e.prototype.SetCurrentLoggedInAccountID = function(e) {
              (this.m_unCurrentAccountID = e)
                ? this.LoadSavedDimensionStore()
                : this.ClearSavedDimensionStore();
            }),
            (e.prototype.AddShutdownCallback = function(e) {
              this.m_rgShutdownCallbacks.push(e);
            }),
            (e.prototype.AddPopupCreatedCallback = function(e) {
              this.m_rgPopupCreatedCallbacks.push(e);
            }),
            (e.prototype.AddTrackedPopup = function(e) {
              this.m_mapPopups.set(e.GetName(), e);
              for (
                var t = 0, n = this.m_rgPopupCreatedCallbacks;
                t < n.length;
                t++
              ) {
                (0, n[t])(e);
              }
            }),
            (e.prototype.RemoveTrackedPopup = function(e) {
              this.m_mapPopups.delete(e.GetName());
            }),
            (e.prototype.GetExistingPopup = function(e) {
              return this.m_mapPopups.get(e);
            }),
            (e.prototype.GetPopups = function() {
              return this.m_mapPopups.values();
            }),
            (e.prototype.ClosePopupsOwnedByBrowser = function(t) {
              this.m_mapPopups.forEach(function(e) {
                e.browser_info &&
                  e.browser_info.m_nBrowserID == t.m_nBrowserID &&
                  e.browser_info.m_unPID == t.m_unPID &&
                  e.Close();
              });
            }),
            (e.CreatePopup = function(e, t) {
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
              for (
                var h = l.document.getElementsByTagName("head")[0],
                  d = document.getElementsByTagName("link"),
                  f = 0;
                f < d.length;
                f++
              ) {
                var v = d[f];
                if ("stylesheet" == v.rel) {
                  for (
                    var g = l.document.createElement("link"), b = 0;
                    b < v.attributes.length;
                    b++
                  ) {
                    var _ = v.attributes.item(b);
                    g.setAttribute(_.name, _.value);
                  }
                  h.appendChild(g);
                }
              }
              return {
                popup: l,
                element: l.document.getElementById("popup_target")
              };
            }),
            (e.prototype.BShuttingDown = function() {
              return this.m_bShuttingDown;
            }),
            (e.prototype.GetLocalStorageKey = function() {
              return "PopupSavedDimensions_" + this.m_unCurrentAccountID;
            }),
            (e.prototype.LoadSavedDimensionStore = function() {
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
            (e.prototype.SaveSavedDimensionStore = function() {
              var e, t;
              this.m_unCurrentAccountID &&
                this.m_bSaveRequired &&
                ((e = this.GetLocalStorageKey()),
                (t = JSON.stringify(Array.from(this.m_mapRestoreDetails))),
                window.localStorage.setItem(e, t),
                (this.m_bSaveRequired = !1));
            }),
            (e.prototype.DebouncedSaveSavedDimensionStore = function() {
              this.SaveSavedDimensionStore();
            }),
            (e.prototype.ClearSavedDimensionStore = function() {
              this.m_mapRestoreDetails.clear(), (this.m_bSaveRequired = !1);
            }),
            (e.prototype.GetRestoreDetails = function(e) {
              if (!this.m_mapRestoreDetails.has(e)) return "";
              var t = this.m_mapRestoreDetails.get(e);
              return (
                (t.last_used = Date.now()),
                (this.m_bSaveRequired = !0),
                t.strRestoreDetails
              );
            }),
            (e.prototype.SetRestoreDetails = function(e, t, n) {
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
              [u.a, Object(c.a)(100)],
              e.prototype,
              "DebouncedSaveSavedDimensionStore",
              null
            ),
            e
          );
        })(),
        g = new v();
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
        return g;
      }),
        n.d(t, "g", function() {
          return b;
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
          return D;
        });
      var l = n("mrSG"),
        u = n("q1tI"),
        o = n("X3Ds"),
        p = n("TLQK"),
        m = n("Mgs7"),
        i = n("IjL/"),
        r = n("bxiW"),
        a = n("6Y59"),
        s = n("okNM"),
        c = n("exH9"),
        h = n("JJA/"),
        d = n.n(h),
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
                    : (this.m_ModalHandle = D(window).ShowModal(n))
                  : this.HideModal(),
                null
              );
            }),
            t
          );
        })(u.Component),
        g = function(e) {
          var t = e.active,
            n = e.onDismiss,
            r = e.className,
            o = e.modalClassName,
            i = e.children;
          return u.createElement(
            v,
            { active: t },
            u.createElement(
              b,
              { onEscKeypress: n, className: o },
              u.createElement(m.f, { className: r }, i)
            )
          );
        };
      function b(t) {
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
                    u.createElement(a.J, null)
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
              e && e.classList.add(d.a.BodyNoScroll);
            }),
            (e.prototype.componentWillUnmount = function() {
              var e = this.GetBodyElement();
              e && e.classList.remove(d.a.BodyNoScroll);
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
                  className: d.a.OverlayModal + " " + this.props.className
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
                c = r || Object(p.d)("#Button_Close");
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
                b,
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
                  strTitle: Object(p.d)("#Error_FailureNotice"),
                  strDescription: Object(p.d)(
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
                ? document.body.classList.add(d.a.BodyNoScrollDialog)
                : document.body.classList.remove(d.a.BodyNoScrollDialog);
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
        C = (function() {
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
      function D(e) {
        var t = S.get(e);
        return t || ((t = new C()), S.set(e, t)), t;
      }
      var S = new WeakMap();
    },
    Kw0F: function(e, t, n) {
      "use strict";
      n.d(t, "g", function() {
        return r;
      }),
        n.d(t, "e", function() {
          return o;
        }),
        n.d(t, "b", function() {
          return i;
        }),
        n.d(t, "c", function() {
          return a;
        }),
        n.d(t, "a", function() {
          return s;
        }),
        n.d(t, "h", function() {
          return c;
        }),
        n.d(t, "f", function() {
          return l;
        }),
        n.d(t, "d", function() {
          return u;
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
        return a(e, function(e) {
          return t == e;
        });
      }
      function a(e, t) {
        var n = e.findIndex(t);
        return 0 <= n && (e.splice(n, 1), !0);
      }
      function s(e, t) {
        return e.filter(function(e) {
          return t !== e;
        });
      }
      function c(e, t, n) {
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
      function l(e, t, n) {
        return (
          e ||
            console.error(
              "array should be defined for us to fill in the missing indexes"
            ),
          e.length < t ? e.concat(Array(t - e.length).fill(n)) : e
        );
      }
      function u(e, t) {
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
      var d = n("mrSG"),
        f = n("q1tI"),
        o = n.n(f),
        v = n("6Y59"),
        g = n("TLQK"),
        i = n("bxiW"),
        c = n("exH9"),
        a = n("umRa"),
        s = n.n(a),
        l = N("DialogHeader"),
        u = N("DialogSubHeader"),
        p = N("DialogFooter"),
        m = N("DialogLabel _DialogLayout"),
        h = N("DialogBodyText"),
        b = N("DialogBody"),
        _ = (N("DialogInnerBody"), N("DialogBodyNotificationBar")),
        y = N("DialogTwoColLayout _DialogColLayout"),
        E = N("DialogThreeColLayout _DialogColLayout");
      N("DialogTwoThirdColLayout _DialogColLayout"),
        N("DialogColumn _DialogLayout");
      function O(e) {
        var t = e.children,
          n = e.bCenterVertically,
          r = Object(d.f)(e, ["children", "bCenterVertically"]),
          o =
            "DialogContent _DialogLayout" +
            (e.className ? " " + e.className : "");
        return (
          n && (o += " _DialogCenterVertically"),
          f.createElement(
            "div",
            Object(d.a)({}, r, { className: o }),
            f.createElement("div", { className: "DialogContent_InnerWidth" }, t)
          )
        );
      }
      var w = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(d.d)(t, e),
          (t.prototype.OnSubmit = function(e) {
            e.preventDefault(), this.props.onSubmit && this.props.onSubmit(e);
          }),
          (t.prototype.render = function() {
            return f.createElement(
              "form",
              Object(d.a)({}, this.props, { onSubmit: this.OnSubmit })
            );
          }),
          Object(d.c)([i.a], t.prototype, "OnSubmit", null),
          t
        );
      })(f.Component);
      function C(e) {
        var t = e.classNameContent,
          n = e.bCenterVertically,
          r = Object(d.f)(e, ["classNameContent", "bCenterVertically"]);
        return f.createElement(
          O,
          { className: t, bCenterVertically: n },
          f.createElement(w, Object(d.a)({}, r))
        );
      }
      function D(e) {
        e.svgicon;
        var t,
          n = Object(d.f)(e, ["svgicon"]),
          r =
            "DialogButton _DialogLayout Primary" +
            (e.className ? " " + e.className : ""),
          o = void 0 !== e.svgicon;
        return (
          o && ((r += " hasSVGIcon"), (t = e.svgicon)),
          f.createElement(
            "button",
            Object(d.a)({ type: e.onClick ? "button" : "submit" }, n, {
              className: r
            }),
            o && f.createElement(t, null),
            e.children
          )
        );
      }
      function S(e) {
        e.svgicon;
        var t,
          n = Object(d.f)(e, ["svgicon"]),
          r =
            "DialogButton _DialogLayout Secondary" +
            (e.className ? " " + e.className : ""),
          o = void 0 !== e.svgicon;
        return (
          o && ((r += " hasSVGIcon"), (t = e.svgicon)),
          f.createElement(
            "button",
            Object(d.a)({ type: "button" }, n, { className: r }),
            o && f.createElement(t, null),
            e.children
          )
        );
      }
      function x(e) {
        e.svgicon;
        var t,
          n = Object(d.f)(e, ["svgicon"]),
          r =
            "DialogButton _DialogLayout Small" +
            (e.className ? " " + e.className : ""),
          o = void 0 !== e.svgicon;
        return (
          o && ((r += " hasSVGIcon"), (t = e.svgicon)),
          f.createElement(
            "button",
            Object(d.a)({ type: "button" }, n, { className: r }),
            o && f.createElement(t, null),
            e.children
          )
        );
      }
      function M(e) {
        return f.createElement(
          y,
          null,
          f.createElement(
            D,
            { onClick: e.onOK, disabled: e.bOKDisabled },
            e.strOKText || Object(g.d)("#Button_Confirm"),
            " "
          ),
          f.createElement(
            S,
            { onClick: e.onCancel },
            e.strCancelText || Object(g.d)("#Button_Cancel")
          )
        );
      }
      function k(e) {
        return f.createElement(
          E,
          null,
          f.createElement(
            D,
            { onClick: e.onOK, disabled: e.bOKDisabled },
            e.strOKText || Object(g.d)("#Button_Confirm"),
            " "
          ),
          f.createElement(
            D,
            { onClick: e.onUpdate, disabled: e.bUpdateDisabled },
            e.strUpdateText || Object(g.d)("#Button_Update"),
            " "
          ),
          f.createElement(
            S,
            { onClick: e.onCancel },
            e.strCancelText || Object(g.d)("#Button_Cancel")
          )
        );
      }
      var I = (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return (t.state = { checked: e.checked, disabled: e.disabled }), t;
          }
          return (
            Object(d.d)(e, n),
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
            Object(d.c)([i.a], e.prototype, "Toggle", null),
            Object(d.c)([i.a], e.prototype, "KeyDown", null),
            e
          );
        })(f.Component),
        j = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(d.d)(t, e),
            (t.prototype.render = function() {
              var e = "DialogCheckbox" + (this.state.checked ? " Active" : "");
              return (
                1 == this.state.disabled && (e += " Disabled"),
                this.props.label
                  ? f.createElement(
                      "div",
                      Object(d.a)(
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
                      Object(d.a)({ className: e }, this.GetElementProps()),
                      f.createElement(v.h, null)
                    )
              );
            }),
            t
          );
        })(I),
        T = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(d.d)(t, e),
            (t.prototype.render = function() {
              var e = this.state.checked ? " Active" : "";
              return f.createElement(
                "div",
                Object(d.a)(
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
        })(I),
        L = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(d.d)(t, e),
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
                          Object(g.d)("#Dialog_Off")
                        ),
                        f.createElement(
                          "div",
                          {
                            className:
                              "DialogOnOffToggle_Option On" +
                              (this.state.checked ? " Active" : "")
                          },
                          Object(g.d)("#Dialog_On")
                        )
                      )
                )
              );
            }),
            Object(d.c)([i.a], t.prototype, "OnOffKeyDown", null),
            Object(d.c)([i.a], t.prototype, "OnNewUIToggle", null),
            t
          );
        })(I);
      function N(n) {
        return function(e) {
          var t = n + (e.className ? " " + e.className : "");
          return f.createElement("div", Object(d.a)({}, e, { className: t }));
        };
      }
      var R = n("hJxo"),
        A = n("r64O"),
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
            Object(d.d)(e, n),
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
                    (n.m_CopiedAnimation = new R.b(
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
              Object(A.a)(
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
                Object(d.f)(e, [
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
              var h = f.createElement(
                f.Fragment,
                null,
                f.createElement(
                  "div",
                  { className: "DialogInput_Wrapper _DialogLayout" },
                  f.createElement(
                    "input",
                    Object(d.a)({ type: a ? "password" : "text" }, s, {
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
                        S,
                        {
                          className: "DialogInput_CopyAction Primary",
                          onClick: this.OnCopyClick
                        },
                        Object(g.d)("#Button_CopyLink")
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
                      f.createElement(v.J, null)
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
                      h,
                      this.state.m_bNumberBelowMinRange
                        ? f.createElement(
                            "div",
                            null,
                            " ",
                            Object(g.d)("#Input_Error_NumberTooSmall"),
                            " "
                          )
                        : null,
                      this.state.m_bNumberAboveMaxRange
                        ? f.createElement(
                            "div",
                            null,
                            " ",
                            Object(g.d)("#Input_Error_NumberTooLarge"),
                            " "
                          )
                        : null,
                      this.state.m_bIsInvalidURL
                        ? f.createElement(
                            "div",
                            null,
                            " ",
                            Object(g.d)("#Input_Error_MustBeURL"),
                            " "
                          )
                        : null,
                      this.state.m_bIsInvalidEmail
                        ? f.createElement(
                            "div",
                            null,
                            " ",
                            Object(g.d)("#Input_Error_MustBeEmail"),
                            " "
                          )
                        : null,
                      this.state.m_bIsNotNumeric
                        ? f.createElement(
                            "div",
                            null,
                            " ",
                            Object(g.d)("#Input_Error_MustBeNumber"),
                            " "
                          )
                        : null
                    )
                  )
                : h;
            }),
            Object(d.c)([i.a], e.prototype, "OnInputRef", null),
            Object(d.c)([i.a], e.prototype, "OnChanged", null),
            Object(d.c)([i.a], e.prototype, "OnCopyClick", null),
            Object(d.c)([i.a], e.prototype, "OnClearClick", null),
            e
          );
        })(f.PureComponent),
        P = (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return (t.state = { value: t.ClampValue(e.value) }), t;
          }
          return (
            Object(d.d)(e, n),
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
                s = (Object(d.f)(r, ["label", "explainer", "tooltip"]), void 0);
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
            Object(d.c)([i.a], e.prototype, "OnMouseDown", null),
            Object(d.c)([i.a], e.prototype, "OnMouseMove", null),
            Object(d.c)([i.a], e.prototype, "OnMouseUp", null),
            Object(d.c)([i.a], e.prototype, "OnTouchStart", null),
            Object(d.c)([i.a], e.prototype, "OnTouchMove", null),
            Object(d.c)([i.a], e.prototype, "OnTouchEnd", null),
            Object(d.c)([i.a], e.prototype, "OnKeyDown", null),
            e
          );
        })(f.Component),
        F = n("TtDX"),
        H = (function(n) {
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
            Object(d.d)(e, n),
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
              e.selectedOption !== this.props.selectedOption &&
                this.FindAndSetActiveOption(this.props.selectedOption),
                this.DoOptionsDiffer(e.rgOptions) &&
                  this.state.bOpened &&
                  (this.m_iMenuInstance.SetOnHideCallback(null),
                  this.m_iMenuInstance.Hide(),
                  (this.m_iMenuInstance = void 0),
                  this.BuildMenu());
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
              var t = Object(d.a)(
                {
                  bOverlapHorizontal: !0,
                  bMatchWidth: !0,
                  bFitToWindow: !0,
                  strClassName: e,
                  bDisableMouseOverlay: this.props.bDisableMouseOverlay
                },
                this.props.contextMenuPositionOptions
              );
              (this.m_iMenuInstance = Object(F.a)(
                f.createElement(G, {
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
            Object(d.c)([i.a], e.prototype, "OnInputRef", null),
            Object(d.c)([i.a], e.prototype, "ToggleMenu", null),
            Object(d.c)([i.a], e.prototype, "OnItemSelected", null),
            Object(d.c)([i.a], e.prototype, "ShowMenu", null),
            Object(d.c)([i.a], e.prototype, "HideMenu", null),
            e
          );
        })(f.Component),
        G = (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return (t.state = { iFocus: 0 }), t;
          }
          return (
            Object(d.d)(e, n),
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
            Object(d.c)([i.a], e.prototype, "OnItemClicked", null),
            e
          );
        })(f.Component),
        U = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { rgOptions: void 0 }), e;
          }
          return (
            Object(d.d)(e, t),
            (e.prototype.OnMenuOpened = function() {
              return Object(d.b)(this, void 0, void 0, function() {
                var t;
                return Object(d.e)(this, function(e) {
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
                r = Object(d.f)(e, [
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
                  H,
                  Object(d.a)({}, r, {
                    rgOptions: o,
                    onMenuOpened: this.OnMenuOpened
                  })
                )
              );
            }),
            Object(d.c)([i.a], e.prototype, "OnMenuOpened", null),
            e
          );
        })(f.Component),
        W = n("2vnA"),
        V = n("sUmc"),
        z = n("Kw0F"),
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
            (this.m_embeddedElement = new V.a("DragGhosts")),
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
              z.b(this.m_rgDropRegions, e),
                z.b(this.m_rgActiveDropRegions, e),
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
            Object(d.c)([i.a], e.prototype, "OnDragGhostRef", null),
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
            Object(d.d)(e, t),
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
                i = Object(d.f)(e, [
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
                  Object(d.a)({ ref: this.m_divRef, className: s }, a, i, {
                    draggable: t
                  }),
                  o
                )
              );
            }),
            (e.prototype.renderDropGhost = function() {
              return this.props.fnRenderDropGhost
                ? this.props.fnRenderDropGhost()
                : f.createElement(Z, { elContent: this.GetClone() });
            }),
            (e.prototype.renderDragGhost = function() {
              return this.props.fnRenderDragGhost
                ? this.props.fnRenderDragGhost()
                : f.createElement(Q, {
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
            Object(d.c)([i.a], e.prototype, "ProcessDragMove", null),
            Object(d.c)([i.a], e.prototype, "OnMouseDown", null),
            Object(d.c)([i.a], e.prototype, "OnMouseUp", null),
            Object(d.c)([i.a], e.prototype, "OnTouchStart", null),
            Object(d.c)([i.a], e.prototype, "OnTouchEnd", null),
            Object(d.c)([W.f], e.prototype, "ResetDragState", null),
            Object(d.c)([i.a], e.prototype, "OnHTMLDragStart", null),
            Object(d.c)([i.a], e.prototype, "OnHTMLDragEnd", null),
            e
          );
        })(f.Component),
        Z = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(d.d)(t, e),
            (t.prototype.OnRef = function(e) {
              e && e.appendChild(this.props.elContent);
            }),
            (t.prototype.render = function() {
              return f.createElement("div", {
                className: "DialogDraggable_DropGhost",
                ref: this.OnRef
              });
            }),
            Object(d.c)([i.a], t.prototype, "OnRef", null),
            t
          );
        })(f.Component),
        Q = (function(t) {
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
            Object(d.d)(e, t),
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
            Object(d.c)([i.a], e.prototype, "OnRef", null),
            e
          );
        })(f.Component),
        $ = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(d.d)(t, e),
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
              Object(d.d)(e, n),
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
                  o = Object(d.f)(e, [
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
                  Object(d.a)(
                    {
                      navStop: !!o.onClick,
                      htmlElementRef: this.m_divRef,
                      className: i
                    },
                    o
                  ),
                  this.state.dropGhost,
                  r
                );
              }),
              e
            );
          })(f.Component)
        ),
        ee = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return Object(d.d)(t, e), t;
        })(f.Component),
        te = (f.Component,
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
            Object(d.d)(e, t),
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
                Object(d.f)(e, ["nMinHeight", "nMaxHeight"]));
              return f.createElement(
                "textarea",
                Object(d.a)({}, t, {
                  ref: this.m_refTextArea,
                  onKeyUp: this.OnKeyUp,
                  onBlur: this.OnBlur,
                  onClick: this.OnClick,
                  onPaste: this.OnPaste,
                  onCut: this.OnCut
                })
              );
            }),
            Object(d.c)([i.a], e.prototype, "InternalOnInput", null),
            Object(d.c)([i.a], e.prototype, "OnKeyUp", null),
            Object(d.c)([i.a], e.prototype, "OnBlur", null),
            Object(d.c)([i.a], e.prototype, "OnClick", null),
            Object(d.c)([i.a], e.prototype, "OnPaste", null),
            Object(d.c)([i.a], e.prototype, "OnCut", null),
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
          return h;
        }),
        n.d(t, "b", function() {
          return b;
        }),
        n.d(t, "f", function() {
          return O;
        }),
        n.d(t, "g", function() {
          return C;
        }),
        n.d(t, "q", function() {
          return D;
        }),
        n.d(t, "d", function() {
          return S;
        }),
        n.d(t, "t", function() {
          return x;
        }),
        n.d(t, "n", function() {
          return M;
        }),
        n.d(t, "o", function() {
          return k;
        }),
        n.d(t, "e", function() {
          return j;
        }),
        n.d(t, "r", function() {
          return T;
        }),
        n.d(t, "p", function() {
          return L;
        }),
        n.d(t, "l", function() {
          return B;
        }),
        n.d(t, "s", function() {
          return P;
        }),
        n.d(t, "h", function() {
          return H;
        }),
        n.d(t, "i", function() {
          return U;
        }),
        n.d(t, "a", function() {
          return te;
        });
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
    TLQK: function(e, t, n) {
      "use strict";
      n.d(t, "d", function() {
        return a;
      }),
        n.d(t, "k", function() {
          return s;
        }),
        n.d(t, "i", function() {
          return c;
        }),
        n.d(t, "b", function() {
          return p;
        }),
        n.d(t, "a", function() {
          return m;
        }),
        n.d(t, "c", function() {
          return h;
        });
      var l = n("mrSG"),
        u = n("q1tI"),
        r = n("mgoM"),
        o = n("lkRc"),
        i = (n("r64O"), n("Z1oF"));
      function a(e) {
        for (var r = [], t = 1; t < arguments.length; t++)
          r[t - 1] = arguments[t];
        var n = h.LocalizeString(e);
        return n
          ? (0 < r.length &&
              (n = n.replace(/%(?:(\d+)\$)?s/g, function(e, t) {
                if (t <= r.length && 1 <= t) {
                  var n = r[t - 1];
                  return String(null == n ? "" : n);
                }
                return e;
              })),
            n)
          : e;
      }
      function s(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        var r = h.LocalizeString(e);
        if (!r) return e;
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
      function c(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        return a.apply(
          void 0,
          1 === t || "1" === t
            ? Object(l.g)([e, t], n)
            : Object(l.g)([e + "_Plural", t], n)
        );
      }
      n.d(t, "e", function() {
        return i.a;
      }),
        n.d(t, "f", function() {
          return i.b;
        }),
        n.d(t, "h", function() {
          return i.d;
        }),
        n.d(t, "j", function() {
          return i.e;
        }),
        n.d(t, "l", function() {
          return i.g;
        }),
        n.d(t, "m", function() {
          return i.h;
        }),
        n.d(t, "n", function() {
          return i.i;
        }),
        n.d(t, "g", function() {
          return i.c;
        });
      var p = {
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
        vietnamese: "vn"
      };
      function m() {
        var e = "koreana" == o.b.LANGUAGE ? "korean" : o.b.LANGUAGE;
        return p[e] || null;
      }
      var h = new ((function() {
        function e() {
          (this.m_mapTokens = new Map()),
            (this.m_mapFallbackTokens = new Map());
        }
        return (
          (e.prototype.InitFromObjects = function(e, t, n, r, o) {
            o || this.m_mapTokens.clear();
            var i = Object(l.a)(Object(l.a)({}, n || {}), e),
              a = Object(l.a)(Object(l.a)({}, r || {}), t || {});
            this.AddTokens(i, a);
          }),
          (e.prototype.InitDirect = function(e, t) {
            this.m_mapTokens.clear(),
              this.m_mapFallbackTokens.clear(),
              this.AddTokens(e, t);
          }),
          (e.prototype.AddTokens = function(t, n) {
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
          (e.prototype.GetPreferredLocales = function() {
            return this.m_rgLocalesToUse
              ? this.m_rgLocalesToUse
              : navigator && navigator.languages
              ? navigator.languages
              : ["en-US"];
          }),
          (e.prototype.GetELanguageFallbackOrder = function() {
            var t = new Array();
            return (
              t.push(Object(r.c)(o.b.LANGUAGE)),
              (o.b.SUPPORTED_LANGUAGES || []).forEach(function(e) {
                e.value != o.b.LANGUAGE && t.push(Object(r.c)(e.value));
              }),
              t
            );
          }),
          (e.prototype.SetPreferredLocales = function(e) {
            this.m_rgLocalesToUse = e;
          }),
          (e.prototype.LocalizeString = function(e) {
            if ((0, !e || 0 == e.length || "#" != e.charAt(0))) return "";
            var t = this.m_mapTokens.get(e.substring(1));
            return void 0 === t ? "" : t;
          }),
          (e.prototype.LocalizeStringFromFallback = function(e) {
            if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
            var t = this.m_mapFallbackTokens.get(e.substring(1));
            return void 0 === t ? "" : t;
          }),
          e
        );
      })())();
      window.LocalizationManager = h;
    },
    TtDX: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return u;
      });
      var r = n("mrSG"),
        o = n("q1tI"),
        i = n("X3Ds"),
        a = n("y+6m"),
        l = n("sUmc"),
        s = n("2vnA"),
        c = (function() {
          function e() {}
          return (
            (e.GetBrowserInfoForPopup = function(e) {
              return null;
            }),
            (e.prototype.SetTakeFocus = function(e) {
              this.m_fnTakeFocus = e;
            }),
            e
          );
        })();
      function u(e, t, n) {
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
        var s = new m(e, r, o, i, n);
        return s.Show(), s;
      }
      var p = (function(n) {
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
            (e.prototype.Init = function(e, t) {
              (e.options.bForcePopup || this.m_ownerWindow.innerWidth) < 400 &&
              this.m_ownerWindow.SteamClient &&
              this.m_ownerWindow.SteamClient.Window
                ? (this.m_popupContextMenu = new a.a(
                    e,
                    t,
                    c.GetBrowserInfoForPopup(this.m_ownerWindow)
                  ))
                : ((this.m_embeddedElementInstance = Object(l.b)(
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
            Object(r.c)([s.x], e.prototype, "m_bVisible", void 0),
            e
          );
        })(c),
        m = (function(s) {
          function c(e, t, n, r, o) {
            var i = s.call(this, t.ownerDocument.defaultView) || this;
            c.sm_iActiveContextMenuInstance &&
              c.sm_iActiveContextMenuInstance.Hide(),
              ((c.sm_iActiveContextMenuInstance = i).m_options = o || {});
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
            return i.Init(a, e), i;
          }
          return (
            Object(r.d)(c, s),
            (c.prototype.Show = function() {
              this.m_options.bDisableMouseOverlay ||
                ((this.m_embeddedElementInstanceOverlay = Object(l.b)(
                  this.m_ownerWindow.document
                )),
                this.m_embeddedElementInstanceOverlay.Show(
                  o.createElement(a.e)
                )),
                s.prototype.Show.call(this);
            }),
            (c.prototype.Hide = function() {
              this.m_embeddedElementInstanceOverlay &&
                this.m_embeddedElementInstanceOverlay.Hide(0),
                s.prototype.Hide.call(this);
            }),
            c
          );
        })(p),
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
            return r.Init(o, t), r;
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
            e
          );
        })(p);
    },
    UPxs: function(e, t, n) {
      "use strict";
      var l = n("mrSG"),
        u = n("q1tI"),
        r = n("okNM"),
        p = n("exH9"),
        o = n("bxiW"),
        V = { x: "y", y: "x" };
      function z() {
        return { x: 0, y: 0 };
      }
      function N(e, t) {
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
      function i(e) {
        return (e.min + e.max) / 2;
      }
      function q(e, t) {
        return !(e.max < t.min || t.max < e.min);
      }
      var R = n("Kw0F"),
        J = n("X3Ds");
      n.d(t, "a", function() {
        return x;
      });
      var a = "Focusable",
        s = "FocusGroup",
        m = "NavArea";
      function h() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      }
      var d,
        c,
        f,
        v,
        Z,
        g,
        b = (function() {
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
            Object.defineProperty(t, "IsPointerVisible", {
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
        })();
      function Q(e) {
        return null != e && void 0 !== e.focus;
      }
      function _(e) {
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
      function $(e) {
        if (b.IsDocumentUsingZoom) {
          var t = _(e),
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
      function ee(e) {
        return { x: i((t = $(e)).x), y: i(t.y) };
        var t;
      }
      function y(e, t) {
        e && ("function" == typeof e ? e(t) : (e.current = t));
      }
      function E(e, t, n) {
        var r = e,
          o = null != r.getAttribute("data-nav"),
          i = o ? r.getAttribute("data-nav-scroll-axes") : void 0;
        if (o && i !== f.XY && i !== t) return d.None;
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
      ((c = d = d || {})[(c.None = 2)] = "None"),
        (c[(c.Scrollable = 1)] = "Scrollable"),
        (c[(c.AtEnd = 3)] = "AtEnd"),
        ((v = f = f || {}).X = "x"),
        (v.Y = "y"),
        (v.XY = "xy"),
        ((g = Z = Z || {}).Area = "area"),
        (g.Group = "group"),
        (g.Stop = "stop"),
        (g.Click = "click");
      var te,
        O,
        w = u.createContext(null),
        C = (function() {
          function e() {
            this.m_listeners = new Map();
          }
          return (
            (e.prototype.Initialize = function(e) {
              this.m_document = e;
            }),
            (e.prototype.GetFocus = function() {
              return void 0 !== this.m_document &&
                Q(this.m_document.activeElement)
                ? this.m_document.activeElement
                : null;
            }),
            (e.prototype.Focus = function(e, t) {
              null != e
                ? (h("HDFC Focus", e), e.focus(t))
                : Q(this.m_document.activeElement) &&
                  (h("HDFC Focus IsHTMLElement e.blur()", e),
                  this.m_document.activeElement.blur());
            }),
            (e.prototype.Click = function(e) {
              e.click();
            }),
            (e.prototype.FocusableElementAttributes = function(e) {
              var t = {};
              return (
                b.IsNavEnabled && e.navStop && (t.tabIndex = -2),
                "number" == typeof e.tabStop && (t.tabIndex = e.tabStop),
                !0 === e.tabStop && (t.tabIndex = 0),
                t
              );
            }),
            (e.prototype.AddBlurListener = function(t) {
              h("CHtmlDomFocusController AddBlurListener");
              function e(e) {
                return Q(e.target) && t(e.target);
              }
              this.m_listeners.set(t, e),
                this.m_document.addEventListener("blur", e, !0);
            }),
            (e.prototype.RemoveBlurListener = function(e) {
              h("CHtmlDomFocusController RemoveBlurListener");
              var t = this.m_listeners.get(e);
              this.m_document.removeEventListener("blur", t, !0),
                this.m_listeners.delete(e);
            }),
            e
          );
        })(),
        D = (function() {
          function e() {}
          return (
            (e.Attributes = function(e, t) {
              var n = {};
              if (
                (b.IsNavEnabled &&
                  (e.navClick && (n["data-nav"] = Z.Click),
                  !e.navClick && e.navStop && (n["data-nav"] = Z.Stop),
                  !e.navClick &&
                    e.preferredNavStop &&
                    (n["data-nav-preferred"] = "true"),
                  e.scrollToX && (n["data-nav-scroll-x"] = e.scrollToX),
                  e.scrollToY && (n["data-nav-scroll-y"] = e.scrollToY)),
                !t)
              )
                return n;
              var r = t.FocusableElementAttributes(e);
              return r ? Object(l.a)(Object(l.a)({}, n), r) : n;
            }),
            Object.defineProperty(e, "navStopClass", {
              get: function() {
                return b.IsNavEnabled ? a : void 0;
              },
              enumerable: !1,
              configurable: !0
            }),
            e
          );
        })(),
        S = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.SetRef = function(e) {
              (this.m_htmlElement = e), y(this.props.htmlElementRef, e);
            }),
            (t.prototype.assembleAttributes = function() {
              var e = this.props,
                t = (e.navStop,
                e.preferredNavStop,
                e.tabStop,
                e.navClick,
                e.scrollToX,
                e.scrollToY,
                e.startFocused),
                n = e.htmlElementRef,
                r = e.className,
                o = (e.children,
                Object(l.f)(e, [
                  "navStop",
                  "preferredNavStop",
                  "tabStop",
                  "navClick",
                  "scrollToX",
                  "scrollToY",
                  "startFocused",
                  "htmlElementRef",
                  "className",
                  "children"
                ]));
              return null != this.context && b.IsNavEnabled
                ? Object(l.a)(
                    Object(l.a)(
                      Object(l.a)({}, D.Attributes(this.props, this.context)),
                      {
                        className: Object(p.a)(D.navStopClass, r),
                        ref: t ? this.SetRef : n
                      }
                    ),
                    o
                  )
                : Object(l.a)({ className: r, ref: n }, o);
            }),
            (t.prototype.componentDidMount = function() {
              this.props.startFocused &&
                this.m_htmlElement &&
                this.context &&
                this.context.Focus(this.m_htmlElement);
            }),
            (t.prototype.render = function() {
              return u.createElement(
                this.m_elementType,
                this.assembleAttributes(),
                this.props.children
              );
            }),
            (t.contextType = w),
            (t.defaultProps = { navStop: !1, tabStop: !1 }),
            Object(l.c)([o.a], t.prototype, "SetRef", null),
            t
          );
        })(u.Component),
        x = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_elementType = "div"), e;
          }
          return Object(l.d)(e, t), (e = Object(l.c)([r.a], e));
        })(S);
      ((O = te = te || {}).Geometry = "Geometry"),
        (O.DomOrder = "DomOrder"),
        (O.ReverseDomOrder = "ReverseDomOrder");
      u.Component;
      var M = (function(n) {
        function e(e) {
          var t = n.call(this, e) || this;
          return (
            (t.m_navAreaDivRef = u.createRef()),
            (t.m_inFocusCallType = null),
            (t.m_lastFocusedHtmlElement = null),
            (t.m_focusPos = null),
            (t.m_focusPosOffsetFromAnchorElement = null),
            (t.m_focusPosPointerRef = u.createRef()),
            void 0 !== e && (t.m_htmlDomFocusController = new C()),
            t
          );
        }
        var L;
        return (
          Object(l.d)(e, n),
          ((L = e).GetActiveNavArea = function() {
            var e = L.sm_navAreaStack;
            return 0 === e.length ? null : e[e.length - 1];
          }),
          (e.GetActiveNavAreaElement = function() {
            var e = L.GetActiveNavArea();
            return (e && e.m_navAreaDivRef.current) || null;
          }),
          (e.FocusWithin = function(e) {
            var t, n, r, o;
            h("KFNA.FocusWithin", e),
              !b.IsNavEnabled ||
                ((t = L.GetActiveNavAreaElement()) &&
                  (((n = Object(J.k)(e, function(e) {
                    return e.getAttribute("data-nav") === Z.Area;
                  })) !== t &&
                    "true" !== n.getAttribute("data-nav-area-awfw")) ||
                    (void 0 !== (r = L.sm_inactiveNavAreaMap.get(n)) &&
                      (n !== t &&
                        (h(
                          "KFNA.FocusWithin: KFNA '" +
                            t.id +
                            "' active, but FG in '" +
                            n.id +
                            "'; activating."
                        ),
                        r.Activate()),
                      (o = r.FindBestNavStopFocus(e)) &&
                        r.SetFocus(o.htmlElement, o.pos)))));
          }),
          (e.prototype.GetFocusController = function() {
            return this.props.focusController || this.m_htmlDomFocusController;
          }),
          (e.prototype.SetFocus = function(e, t) {
            var n,
              r,
              o,
              i,
              a = this.GetFocusController();
            e.getAttribute("data-nav") !== Z.Click
              ? ((n = this.m_inFocusCallType),
                (this.m_inFocusCallType = "focus"),
                h(
                  "KFNA '" +
                    this.m_navAreaDivRef.current.id +
                    "' SetFocus (" +
                    t.x +
                    ", " +
                    t.y +
                    ")",
                  e
                ),
                (r = e.getAttribute("data-nav-scroll-x")),
                (o = e.getAttribute("data-nav-scroll-y")),
                r || o
                  ? (this.GetFocusController().Focus(e, { preventScroll: !0 }),
                    (i = { behavior: "auto" }),
                    r && (i.inline = r),
                    o && (i.block = o),
                    e.scrollIntoView(i))
                  : a.Focus(e),
                a.GetFocus() === e
                  ? this.UpdateFocus(e, t)
                  : h(
                      "KFNA '" +
                        this.m_navAreaDivRef.current.id +
                        " SetFocus rejected",
                      e
                    ),
                (this.m_inFocusCallType = n))
              : a.Click(e);
          }),
          (e.prototype.UpdateFocus = function(e, t) {
            h(
              "KFNA id='" +
                this.m_navAreaDivRef.current.id +
                "' UpdateFocus (" +
                t.x +
                ", " +
                t.y +
                ")",
              e
            );
            var n,
              r = L.FindAnchorElement(e);
            r
              ? ((n = ee(r)),
                (this.m_focusPosOffsetFromAnchorElement = Y(n, t)))
              : (this.m_focusPosOffsetFromAnchorElement = null),
              (this.m_focusPos = t),
              (this.m_lastFocusedHtmlElement = e),
              this.UpdatePointer();
          }),
          (e.prototype.UpdatePointer = function() {
            var e,
              t = this.m_focusPos,
              n = this.m_focusPosPointerRef.current,
              r = this.m_navAreaDivRef.current;
            t &&
              n &&
              r &&
              ((e = _(n)),
              (n.style.left = t.x / e + "px"),
              (n.style.top = t.y / e + "px"));
          }),
          (e.prototype.GetFocusPos = function() {
            var e = this.m_navAreaDivRef.current,
              t = this.m_lastFocusedHtmlElement,
              n = this.m_focusPosOffsetFromAnchorElement;
            if (e && t && e.contains(t) && n) {
              var r = L.FindAnchorElement(t);
              if (r) return K(ee(r), n);
            }
            return this.m_focusPos;
          }),
          (e.FindAnchorElement = function(e) {
            return e;
          }),
          (e.prototype.FindBestNavStopFocus = function(e, t, n) {
            if (!e) return null;
            var r = e.ownerDocument;
            if (!r) return null;
            var o = this.m_lastFocusedHtmlElement,
              i = this.GetFocusPos();
            if (
              o &&
              r.contains(o) &&
              e.contains(o) &&
              o.getAttribute("data-nav") === Z.Stop
            )
              return { htmlElement: o, pos: i || ee(o) };
            var a = Object(J.l)(e, "data-nav").filter(function(e) {
              return Q(e) && "true" === e.getAttribute("data-nav-preferred");
            });
            if (0 < a.length) {
              var s = a[0],
                c = s.getAttribute("data-nav");
              if (c === Z.Group) {
                var l = this.FindBestNavStopFocus(s, t, n);
                if (l) return l;
              } else if (c === Z.Stop) {
                return { htmlElement: s, pos: ee(s) };
              }
            }
            var u = Array.from(
              e.querySelectorAll(
                "[data-nav='" + Z.Stop + "'],[data-nav='" + Z.Click + "]"
              )
            ).filter(Q);
            if (!u || 0 === u.length) return null;
            var p = L.GetActiveNavArea();
            if (null == p) return null;
            if (null == p.m_navAreaDivRef.current) return null;
            if (p.props.initFromBoundary && void 0 !== t && void 0 !== n) {
              var m =
                  "x" === t
                    ? "data-nav-xorder"
                    : "y" === t
                    ? "data-nav-yorder"
                    : void 0,
                h = e.getAttribute(m);
              if (!(h === te.Geometry || null == h)) {
                var d =
                  (h === te.ReverseDomOrder) != (-1 === n)
                    ? u[u.length - 1]
                    : u[0];
                return { htmlElement: d, pos: ee(d) };
              }
              for (
                var f = -1 === n ? "max" : "min",
                  v = null,
                  g = 1 / 0,
                  b = 0,
                  _ = u;
                b < _.length;
                b++
              ) {
                var y = n * $((k = _[b]))[t][f];
                y < g && ((g = y), (v = k));
              }
              if (null !== v) return { htmlElement: v, pos: ee(v) };
            }
            var E,
              O = L.sm_navAreaStack,
              w = Object(R.d)(O, function(e) {
                return null !== e.m_focusPos;
              });
            if (w) {
              for (
                var C = w.m_focusPos,
                  D = Number.POSITIVE_INFINITY,
                  S = null,
                  x = 0,
                  M = u;
                x < M.length;
                x++
              ) {
                var k,
                  I = ee((k = M[x])),
                  j = ((E = Y(C, I)), Math.sqrt(N(E, E)));
                j < D && ((D = j), (S = k));
              }
              if (S) return { htmlElement: S, pos: ee(S) };
            }
            var T = u[0];
            return T ? { htmlElement: T, pos: ee(T) } : null;
          }),
          (e.prototype.GetScrollOffset = function(e, t, n) {
            var r = e,
              o = r.getAttribute("data-nav-enter-as-scrolled-axes");
            if (o === f.XY || o === t) return null;
            var i = null != r.getAttribute("data-nav"),
              a = i ? r.getAttribute("data-nav-scroll-axes") : void 0;
            return i && a !== f.XY && a !== t
              ? null
              : "x" === t
              ? { x: r.scrollLeft, y: 0 }
              : { x: 0, y: r.scrollTop };
          }),
          (e.prototype.FindNextNavStopInContainer = function(
            c,
            e,
            l,
            u,
            p,
            t,
            n
          ) {
            var r,
              o,
              m = this,
              i =
                "x" === u
                  ? "data-nav-xorder"
                  : "y" === u
                  ? "data-nav-yorder"
                  : void 0,
              a = c.getAttribute(i),
              s = a === te.Geometry || null == a,
              h = a === te.ReverseDomOrder,
              d = n ? this.GetScrollOffset(c, u, p) : null,
              f = d ? X(d, -1) : null,
              v = f ? K(l, f) : l,
              g = V[u],
              b = -1 === (z()[u] = p) ? "max" : "min",
              _ = { min: v[g], max: v[g] },
              y =
                t && Q(e)
                  ? ((r = _),
                    (o = $(e)[g]),
                    {
                      min: r.min < o.min ? r.min : o.min,
                      max: r.max > o.max ? r.max : o.max
                    })
                  : _,
              E = null,
              O = null,
              w = 1 / 0,
              C = Object(J.l)(c, "data-nav");
            h != (-1 === p) && C.reverse();
            for (
              var D = [], S = null == e ? 0 : null, x = 0, M = C;
              x < M.length;
              x++
            ) {
              if ((G = M[x]) !== e) {
                if (
                  (null !== S && ++S, G.getAttribute("data-nav") !== Z.Area)
                ) {
                  n &&
                    null === E &&
                    "true" === G.getAttribute("data-nav-preferred") &&
                    (E = G);
                  var k = 0;
                  if (s) {
                    var I = $(G),
                      j = v[u],
                      T = p * (I[u][b] - j);
                    if (T < 0) continue;
                    var L = v[g],
                      N = I[g].min,
                      R = I[g].max,
                      A = L < N ? L - N : R < L ? L - R : 0;
                    if (t) if (!q(y, { min: N, max: R })) continue;
                    var B = { x: 0, y: 0 };
                    (B[u] = I[u][b]), (B[g] = L + A);
                    var P = Y(v, B),
                      k = (T * T + A * A) / Math.abs(P[u]);
                  } else {
                    if (null == S) continue;
                    k = S;
                  }
                  k < w && ((w = k), (O = G)), D.push({ score: k, element: G });
                }
              } else S = 0;
            }
            function F(e, t) {
              void 0 === t && (t = !1);
              var n = e.getAttribute("data-nav");
              if (n === Z.Stop || n === Z.Click) {
                if (Q(e)) {
                  var r = e,
                    o = ee(r),
                    i = !l || t ? o : { x: l.x, y: l.y };
                  i[u] = o[u];
                  var a = { htmlElement: r, pos: i };
                  return d && (a.onscreenTestElement = c), a;
                }
                return null;
              }
              if (n === Z.Group) {
                var s = m.FindNextNavStopInContainer(e, null, v, u, p, !1, !0);
                if (s) return s;
              }
              return null;
            }
            var H;
            if (E && (H = F(E, !0))) return H;
            if (O) {
              if ((H = F(O))) return H;
              D.sort(function(e, t) {
                return e.score - t.score;
              });
              for (var G, U = 0; U < D.length; ++U) {
                if ((G = D[U].element) !== O) {
                  var W = F(G);
                  if (W) return W;
                }
              }
            }
            return null;
          }),
          (e.prototype.FindNextNavStopWithinAndAcrossContainers = function(
            e,
            t,
            n,
            r,
            o
          ) {
            for (var i = t; ; ) {
              var a = Object(J.j)(e, i, "data-nav"),
                s = this.FindNextNavStopInContainer(a, i, n, r, o, !0, !1);
              if (null !== s) return s;
              if (a === e) return null;
              for (var c = i.parentElement; c && c !== a; ) {
                if (E(c, r, o) === d.Scrollable) return null;
                c = c.parentElement;
              }
              if (!c) return null;
              if (c === a && E(c, r, o) === d.Scrollable) return null;
              i = a;
            }
          }),
          (e.prototype.FindNextNavStop = function(e, t) {
            var n = this.m_navAreaDivRef.current;
            if (!n) return null;
            var r = n.ownerDocument;
            if (!r || r !== this.m_document) return null;
            var o,
              i,
              a,
              s,
              c,
              l = null,
              u = this.GetFocusController().GetFocus();
            if (
              (Q(u) && u !== n && n.contains(u)
                ? ((o =
                    (null !== this.m_focusPos &&
                      this.m_lastFocusedHtmlElement === u &&
                      this.GetFocusPos()) ||
                    ee(u)),
                  (a = this.FindNextNavStopWithinAndAcrossContainers(
                    n,
                    u,
                    o,
                    e,
                    t
                  )) ||
                    ((i = ee(u)),
                    (a = this.FindNextNavStopWithinAndAcrossContainers(
                      n,
                      u,
                      i,
                      e,
                      t
                    ))),
                  a && (l = a))
                : (l = this.FindBestNavStopFocus(
                    this.m_navAreaDivRef.current,
                    e,
                    t
                  )),
              null !== l)
            ) {
              var p = r.defaultView;
              if (!p) return null;
              var m =
                  parseFloat(p.getComputedStyle(r.firstElementChild).zoom) || 1,
                h = {
                  x: { min: -40 * m, max: (p.innerWidth + 40) * m },
                  y: { min: -40 * m, max: (p.innerHeight + 40) * m }
                },
                d = $(l.onscreenTestElement || l.htmlElement);
              if (q((s = h).x, (c = d).x) && q(s.y, c.y)) return l;
            }
            return null;
          }),
          (e.prototype.HandleKeyDown = function(e) {
            if (b.IsNavEnabled) {
              var t = this.m_navAreaDivRef.current;
              if (t) {
                var n = L.GetActiveNavAreaElement();
                if (null != n && n === t) {
                  var r = L.k_KeyNavigationDirections[e.key];
                  if (r) {
                    var o = r[0],
                      i = r[1],
                      a = this.FindNextNavStop(o, i);
                    a &&
                      (this.SetFocus(a.htmlElement, a.pos),
                      e.stopPropagation(),
                      e.preventDefault());
                  } else if ("Enter" === e.key) {
                    var s = t.ownerDocument;
                    if (!s || s !== this.m_document) return;
                    var c = this.GetFocusController().GetFocus();
                    c &&
                      c.getAttribute("data-nav") === Z.Stop &&
                      Q(c) &&
                      (this.GetFocusController().Click(c),
                      e.preventDefault(),
                      e.stopPropagation());
                  }
                }
              }
            }
          }),
          (e.HandleDocumentKeyDown = function(e) {
            if (b.IsNavEnabled) {
              var t = L.GetActiveNavArea();
              if (null != t) {
                var n = t.m_navAreaDivRef.current;
                if (n) {
                  var r = L.k_KeyNavigationDirections[e.key];
                  if (r) {
                    var o = n.ownerDocument;
                    if (o && o === t.m_document) {
                      var i = t.GetFocusController().GetFocus();
                      if (i) {
                        var a = t.m_navAreaDivRef.current;
                        if (!a || a.contains(i)) return;
                      }
                      var s = r[0],
                        c = r[1],
                        l = t.FindNextNavStop(s, c);
                      l &&
                        (t.SetFocus(l.htmlElement, l.pos),
                        e.stopPropagation(),
                        e.preventDefault());
                    }
                  } else
                    "Escape" === e.key
                      ? t.props.onGoBack &&
                        (h("KFNA Back Key id='" + n.id + "'"),
                        t.props.onGoBack(),
                        e.stopPropagation(),
                        e.preventDefault())
                      : "1" === e.key &&
                        e.ctrlKey &&
                        t.props.onHome &&
                        (h("KFNA Home Key id='" + n.id + "'"),
                        t.props.onHome(),
                        e.stopPropagation(),
                        e.preventDefault());
                }
              }
            }
          }),
          (e.prototype.HandleFocusCapture = function(e) {}),
          (e.prototype.HandleScrollCapture = function() {
            var e = this.m_focusPos,
              t = this.GetFocusPos();
            e !== t && ((this.m_focusPos = t), this.UpdatePointer());
          }),
          (e.prototype.HandleMouseDownCapture = function(e) {
            this.props.focusController &&
              this.props.focusController.HandleNavStopClick &&
              Q(e.target) &&
              e.preventDefault();
          }),
          (e.prototype.HandleClickCapture = function(e) {
            h(
              "Nav Area '" +
                this.m_navAreaDivRef.current.id +
                "': handle click capture: ",
              e.target
            );
            var t,
              n,
              r =
                this.props.focusController &&
                this.props.focusController.HandleNavStopClick;
            r &&
              (!Q((t = e.target)) ||
                ((n = t).getAttribute("data-nav") === Z.Stop && r(e, n)));
          }),
          (e.prototype.HandleFocusControllerOnBlur = function(e) {
            var t, n;
            h(
              "KFNA '" +
                this.m_navAreaDivRef.current.id +
                "' HandleFocusControllerOnBlur in=" +
                (this.m_inFocusCallType || "none"),
              e
            ),
              "focus" !== this.m_inFocusCallType &&
                (null == (t = L.GetActiveNavArea()) ||
                  t !== this ||
                  ((n = t.m_navAreaDivRef.current) &&
                    "true" === n.getAttribute("data-nav-area-awfw") &&
                    n.contains(e) &&
                    (h('KFNA " HandleFocusControllerOnBlur AWFW Deactivate', e),
                    t.Deactivate())));
          }),
          (e.prototype.ClickFocusedElement = function() {
            this.m_lastFocusedHtmlElement &&
              this.GetFocusController().Click(this.m_lastFocusedHtmlElement);
          }),
          (e.prototype.Blur = function() {
            var e = this.m_inFocusCallType;
            (this.m_inFocusCallType = "blur"),
              h("KFNA '" + this.m_navAreaDivRef.current.id + "' Blur"),
              (this.m_lastFocusedHtmlElement = null),
              (this.m_focusPos = null),
              (this.m_focusPosOffsetFromAnchorElement = null);
            var t,
              n = this.m_navAreaDivRef.current;
            !n ||
              ((t = n.ownerDocument) &&
                t === this.m_document &&
                (h('KFNA " Blur GFC Focus null'),
                this.GetFocusController().Focus(null))),
              (this.m_inFocusCallType = e);
          }),
          (e.prototype.Activate = function() {
            if (
              (h(
                "KFNA activate '" +
                  this.props.id +
                  "' " +
                  (this.props.activeWhenFocusWithin ? "awfw" : "")
              ),
              b.IsNavEnabled)
            ) {
              if (!this.m_navAreaDivRef.current) return;
              var e = this.m_navAreaDivRef.current.ownerDocument;
              if (!e) return;
              (this.m_document && this.m_document === e) ||
                ((this.m_document = e),
                this.m_htmlDomFocusController &&
                  this.m_htmlDomFocusController.Initialize(e)),
                0 === L.sm_navAreaStack.length &&
                  (e.addEventListener("scroll", this.HandleScrollCapture, !0),
                  this.props.focusController ||
                    e.addEventListener("keydown", L.HandleDocumentKeyDown, !1)),
                this.GetFocusController().AddBlurListener(
                  this.HandleFocusControllerOnBlur
                );
            }
            (L.sm_navAreaStack = Object(R.a)(L.sm_navAreaStack, this)),
              this.m_navAreaDivRef.current.setAttribute(
                "data-nav-area-active",
                "true"
              ),
              L.sm_navAreaStack.push(this);
          }),
          (e.prototype.Deactivate = function() {
            if (
              (h(
                "KFNA deactivate '" +
                  this.props.id +
                  "' " +
                  (this.props.activeWhenFocusWithin ? "awfw" : "")
              ),
              this.m_navAreaDivRef.current.setAttribute(
                "data-nav-area-active",
                "false"
              ),
              (L.sm_navAreaStack = Object(R.a)(L.sm_navAreaStack, this)),
              0 === L.sm_navAreaStack.length)
            ) {
              if (!this.m_navAreaDivRef.current) return;
              var e = this.m_document;
              if (!e) return;
              e.removeEventListener("scroll", this.HandleScrollCapture, !0),
                e.removeEventListener("keydown", L.HandleDocumentKeyDown, !1);
            }
            this.GetFocusController().RemoveBlurListener(
              this.HandleFocusControllerOnBlur
            );
          }),
          (e.prototype.componentDidMount = function() {
            this.props.activeWhenFocusWithin
              ? L.sm_inactiveNavAreaMap.set(this.m_navAreaDivRef.current, this)
              : this.Activate();
          }),
          (e.prototype.componentWillUnmount = function() {
            this.Deactivate(),
              L.sm_inactiveNavAreaMap.delete(this.m_navAreaDivRef.current);
          }),
          (e.prototype.render = function() {
            var e = this.props,
              t = e.className,
              n = e.children,
              r = (e.initFromBoundary, e.onGoBack, e.onHome, e.focusController),
              o = e.activeWhenFocusWithin,
              i = Object(l.f)(e, [
                "className",
                "children",
                "initFromBoundary",
                "onGoBack",
                "onHome",
                "focusController",
                "activeWhenFocusWithin"
              ]),
              a = b.IsNavEnabled,
              s = b.IsPointerVisible,
              c = a
                ? {
                    onKeyDown: this.HandleKeyDown,
                    onFocusCapture: this.HandleFocusCapture
                  }
                : {};
            return (
              r &&
                r.HandleNavStopClick &&
                ((c.onMouseDownCapture = this.HandleMouseDownCapture),
                (c.onClickCapture = this.HandleClickCapture)),
              a
                ? u.createElement(
                    w.Provider,
                    { value: r || this.m_htmlDomFocusController || null },
                    u.createElement(
                      "div",
                      Object(l.a)(
                        {
                          "data-nav": Z.Area,
                          "data-nav-area-active": "false",
                          "data-nav-area-awfw": o ? "true" : void 0,
                          ref: this.m_navAreaDivRef,
                          className: Object(p.a)(m, t)
                        },
                        i,
                        c
                      ),
                      a &&
                        s &&
                        u.createElement("div", {
                          ref: this.m_focusPosPointerRef,
                          style: {
                            position: "absolute",
                            background:
                              "linear-gradient( -45deg, rgba( 0, 0, 0, 0 ) 0%, rgba( 0, 0, 0, 0 ) 50%, rgba( 255, 0, 0, 0.95 ) 75% )",
                            borderTop: "3px solid black",
                            borderLeft: "3px solid black",
                            width: "30px",
                            height: "30px",
                            zIndex: 1e6
                          }
                        }),
                      n
                    )
                  )
                : u.createElement(
                    "div",
                    Object(l.a)({ ref: this.m_navAreaDivRef, className: t }, i),
                    n
                  )
            );
          }),
          (e.sm_navAreaStack = []),
          (e.sm_inactiveNavAreaMap = new Map()),
          (e.k_KeyNavigationDirections = {
            ArrowLeft: ["x", -1],
            ArrowRight: ["x", 1],
            ArrowUp: ["y", -1],
            ArrowDown: ["y", 1]
          }),
          Object(l.c)([o.a], e.prototype, "HandleKeyDown", null),
          Object(l.c)([o.a], e.prototype, "HandleFocusCapture", null),
          Object(l.c)([o.a], e.prototype, "HandleScrollCapture", null),
          Object(l.c)([o.a], e.prototype, "HandleMouseDownCapture", null),
          Object(l.c)([o.a], e.prototype, "HandleClickCapture", null),
          Object(l.c)([o.a], e.prototype, "HandleFocusControllerOnBlur", null),
          Object(l.c)([o.a], e, "HandleDocumentKeyDown", null),
          (e = L = Object(l.c)([r.a], e))
        );
      })(u.Component);
    },
    X3Ds: function(e, t, n) {
      "use strict";
      n.d(t, "c", function() {
        return o;
      }),
        n.d(t, "b", function() {
          return i;
        }),
        n.d(t, "g", function() {
          return a;
        }),
        n.d(t, "o", function() {
          return s;
        }),
        n.d(t, "n", function() {
          return c;
        }),
        n.d(t, "h", function() {
          return l;
        }),
        n.d(t, "i", function() {
          return u;
        }),
        n.d(t, "a", function() {
          return p;
        }),
        n.d(t, "p", function() {
          return m;
        }),
        n.d(t, "f", function() {
          return h;
        }),
        n.d(t, "e", function() {
          return d;
        }),
        n.d(t, "d", function() {
          return f;
        }),
        n.d(t, "j", function() {
          return v;
        }),
        n.d(t, "l", function() {
          return g;
        }),
        n.d(t, "m", function() {
          return b;
        }),
        n.d(t, "k", function() {
          return _;
        });
      var r = n("Kw0F");
      n("r64O");
      function o(e, t) {
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
      function i(e, t) {
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
      function h(e) {
        var t = e.ownerDocument;
        t.cancelFullscreen
          ? t.cancelFullscreen()
          : t.webkitCancelFullScreen
          ? t.webkitCancelFullScreen()
          : t.mozCancelFullScreen
          ? t.mozCancelFullScreen()
          : t.msExitFullscreen && t.msExitFullscreen();
      }
      var d = (function() {
        function e(e) {
          var i = this;
          (this.m_bNeedSort = !1),
            (this.m_bOffsetsInvalidated = !1),
            (this.m_rgChildren = []),
            (this.RecomputeVisibility = function() {
              var e = i.m_elParent.scrollTop - i.m_nBufferPx,
                t =
                  i.m_elParent.scrollTop +
                  i.m_elParent.clientHeight +
                  i.m_nBufferPx;
              i.EnsureSort();
              for (var n = 0, r = i.m_rgChildren; n < r.length; n++) {
                var o = r[n];
                if (!(o.yOffset < e)) {
                  if (o.yOffset > t) break;
                  o.fnCallback(!0);
                }
              }
              (i.m_nLastYMin = e), (i.m_nLastYMax = t);
            }),
            (this.m_nBufferPx = e);
        }
        return (
          (e.prototype.SetParent = function(e) {
            this.m_elParent &&
              this.m_elParent.ownerDocument.defaultView.removeEventListener(
                "resize",
                this.RecomputeVisibility
              ),
              (this.m_elParent = e),
              this.m_elParent &&
                this.m_elParent.ownerDocument.defaultView.addEventListener(
                  "resize",
                  this.RecomputeVisibility
                );
          }),
          (e.prototype.InvalidateOffsetsAndRecompute = function() {
            (this.m_bOffsetsInvalidated = !0), this.RecomputeVisibility();
          }),
          (e.prototype.EnsureSort = function() {
            if (this.m_bOffsetsInvalidated) {
              for (var e = 0; e < this.m_rgChildren.length; e++)
                this.m_rgChildren[e].yOffset = this.m_rgChildren[
                  e
                ].element.offsetTop;
              this.m_bOffsetsInvalidated = !1;
            }
            this.m_bNeedSort &&
              (this.m_rgChildren.sort(function(e, t) {
                return e.yOffset - t.yOffset;
              }),
              (this.m_bNeedSort = !1));
          }),
          (e.prototype.RegisterChild = function(e, t) {
            this.m_rgChildren.push({
              element: e,
              yOffset: e.offsetTop,
              fnCallback: t
            }),
              (this.m_bNeedSort = !0),
              void 0 !== this.m_nLastYMin &&
                void 0 !== this.m_nLastYMax &&
                e.offsetTop >= this.m_nLastYMin &&
                e.offsetTop <= this.m_nLastYMax &&
                t(!0);
          }),
          (e.prototype.UnregisterChild = function(t) {
            r.c(this.m_rgChildren, function(e) {
              return e.element == t;
            });
          }),
          e
        );
      })();
      function f(e, t) {
        var n = e;
        return (
          (n.lastModifiedDate = new Date()),
          (n.name = t || Date.now().toString()),
          e
        );
      }
      function v(e, t, n) {
        for (var r = t.parentElement; r && r !== e && !r.hasAttribute(n); )
          r = r.parentElement;
        return r || e;
      }
      function g(e, t) {
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
      function b(e) {
        for (var t = e.parentElement; t; ) {
          var n = window.getComputedStyle(t).overflowY;
          if ("scroll" == n || "auto" == n) break;
          t = t.parentElement;
        }
        return t;
      }
      function _(e, t) {
        for (; e; ) {
          if (t(e)) return e;
          e = e.parentElement;
        }
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
          return u;
        }),
        n.d(t, "e", function() {
          return i;
        }),
        n.d(t, "f", function() {
          return p;
        }),
        n.d(t, "h", function() {
          return d;
        }),
        n.d(t, "a", function() {
          return f;
        }),
        n.d(t, "c", function() {
          return y;
        }),
        n.d(t, "b", function() {
          return E;
        });
      var c = n("TLQK"),
        a = n("CdLH"),
        l = n("Gp1o");
      function r(e, t) {
        void 0 === t && (t = !1);
        var n = t ? "#TimeInterval_" : "#TimeSince_";
        return e >= 2 * a.e.PerYear
          ? Object(c.d)(n + "XYears", Math.floor(e / a.e.PerYear))
          : e >= a.e.PerYear
          ? (e -= a.e.PerYear) >= 2 * a.e.PerMonth
            ? Object(c.d)(n + "1YearXMonths", Math.floor(e / a.e.PerMonth))
            : Object(c.d)(n + "1Year")
          : e >= 2 * a.e.PerMonth
          ? Object(c.d)(n + "XMonths", Math.floor(e / a.e.PerMonth))
          : e >= 2 * a.e.PerWeek
          ? Object(c.d)(n + "XWeeks", Math.floor(e / a.e.PerWeek))
          : e >= a.e.PerWeek
          ? Object(c.d)(n + "1Week", Math.floor(e / a.e.PerWeek))
          : e >= 2 * a.e.PerDay
          ? Object(c.d)(n + "XDays", Math.floor(e / a.e.PerDay))
          : e >= a.e.PerDay
          ? (e -= a.e.PerDay) >= 2 * a.e.PerHour
            ? Object(c.d)(n + "1DayXHours", Math.floor(e / a.e.PerHour))
            : Object(c.d)(n + "1Day")
          : e >= 2 * a.e.PerHour
          ? Object(c.d)(n + "XHours", Math.floor(e / a.e.PerHour))
          : e >= a.e.PerHour
          ? (e -= a.e.PerHour) >= 2 * a.e.PerMinute
            ? Object(c.d)(n + "1HourXMinutes", Math.floor(e / a.e.PerMinute))
            : Object(c.d)(n + "1Hour")
          : e >= 2 * a.e.PerMinute
          ? Object(c.d)(n + "XMinutes", Math.floor(e / a.e.PerMinute))
          : e >= a.e.PerMinute
          ? Object(c.d)(n + "1Minute")
          : Object(c.d)(n + "LessThanAMinute");
      }
      function o(e, t) {
        var n = {
          weekday: "short",
          month: "long",
          day: "numeric",
          year: t ? void 0 : "numeric"
        };
        return new Date(1e3 * e).toLocaleDateString(
          c.c.GetPreferredLocales(),
          n
        );
      }
      function u(e) {
        var t = new Date(1e3 * e),
          n = t.setHours(0, 0, 0, 0);
        if ((r = m.get(n))) return r;
        var r = t.toLocaleDateString(c.c.GetPreferredLocales(), {
          year: "numeric",
          month: "short",
          day: "numeric"
        });
        return m.set(n, r), r;
      }
      function i(e) {
        return new Date(1e3 * e).toLocaleTimeString(c.c.GetPreferredLocales(), {
          hour: "numeric",
          minute: "numeric"
        });
      }
      var s = new Map();
      function p(e) {
        var t = new Date(1e3 * e),
          n = c.c.GetPreferredLocales(),
          r = (function(e) {
            if (!0 === (n = s.get(e)) || !1 === n) return n;
            var t = new Date();
            t.setHours(15);
            var n =
              t.toLocaleTimeString(e, { hour: "numeric" }) ==
              t.toLocaleTimeString(e, { hour: "numeric", hour12: !1 });
            return s.set(e, n), n;
          })(n[0]);
        return t.toLocaleTimeString(
          n,
          r
            ? { hour: "numeric", minute: "numeric" }
            : { hour: "numeric", hour12: !0 }
        );
      }
      var m = new Map(),
        h = new Map();
      function d(e, t) {
        var n = new Date(),
          r = new Date(1e3 * e);
        if (r.getFullYear() != n.getFullYear()) return u(e);
        l.b(new Date().setHours(24, 0, 0, 0) - n.getTime());
        var o = new Date();
        if ((o.setHours(0, 0, 0, 0), o <= r)) {
          if ((o.setDate(o.getDate() + 1), r < o))
            return Object(c.d)("#Time_Today");
          if ((o.setDate(o.getDate() + 1), r < o))
            return Object(c.d)("#Time_Tomorrow");
        } else if ((o.setDate(o.getDate() - 1), o <= r))
          return Object(c.d)("#Time_Yesterday");
        var i = { month: t ? "long" : "short", day: "numeric" },
          a = r.setHours(0, 0, 0, 0) + i.month,
          s = h.get(a);
        return (
          s ||
          ((s = r.toLocaleDateString(c.c.GetPreferredLocales(), i)),
          h.set(a, s),
          s)
        );
      }
      function f(e) {
        var t = new Date(1e3 * e),
          n = new Date();
        if (n < t)
          return (
            l.b(t.getTime() - n.getTime()),
            (t.getFullYear() == n.getFullYear() ? O : w)(t)
          );
        l.b(new Date().setHours(24, 0, 0, 0) - n.getTime());
        var r = new Date();
        if ((r.setHours(0, 0, 0, 0), r <= t)) return Object(c.d)("#Time_Today");
        if ((r.setDate(r.getDate() - 1), r <= t))
          return Object(c.d)("#Time_Yesterday");
        if ((r.setDate(r.getDate() - 5), r <= t))
          return Object(c.d)("#TimeSince_ThisWeek");
        var o = new Date(r);
        if (
          (r.setDate(r.getDate() - 21),
          r <= t ||
            (t.getMonth() == n.getMonth() &&
              t.getFullYear() == n.getFullYear()))
        ) {
          var i =
            Math.floor((o.valueOf() - t.valueOf()) / (1e3 * a.e.PerWeek)) + 1;
          return 1 == i
            ? Object(c.d)("#TimeSince_1Week")
            : Object(c.d)("#TimeSince_XWeeks", i);
        }
        return (t.getFullYear() == n.getFullYear() ? O : w)(t);
      }
      var v = new Map(),
        g = new Map(),
        b = (new Map(), new Map()),
        _ = new Map();
      function y(e, t) {
        void 0 === t && (t = !1);
        var n = e.getDate() + 31 * (e.getMonth() + 12 * e.getFullYear()),
          r = _.get(n);
        return (
          r ||
          ((r = e.toLocaleDateString(c.c.GetPreferredLocales(), {
            weekday: "long",
            day: "numeric",
            month: t ? "long" : "short"
          })),
          _.set(n, r),
          r)
        );
      }
      function E(e) {
        var t = v.get(e.getDay());
        return (
          t ||
          ((t = e.toLocaleDateString(c.c.GetPreferredLocales(), {
            weekday: "long"
          })),
          v.set(e.getDay(), t),
          t)
        );
      }
      function O(e) {
        var t = g.get(e.getMonth());
        return (
          t ||
          ((t = e.toLocaleDateString(c.c.GetPreferredLocales(), {
            month: "long"
          })),
          g.set(e.getMonth(), t),
          t)
        );
      }
      function w(e) {
        var t = e.getMonth() + 12 * e.getFullYear(),
          n = b.get(t);
        return (
          n ||
          ((n = e.toLocaleDateString(c.c.GetPreferredLocales(), {
            month: "long",
            year: "numeric"
          })),
          b.set(t, n),
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
    gfbn: function(e, t, p) {
      "use strict";
      p.r(t);
      function n(e) {
        var o = e.config;
        return i.a.createElement(
          i.a.Fragment,
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
                  return Object(h.createPortal)(o[r](n), e, "" + r + t);
                })
              : null;
          })
        );
      }
      var m = p("mrSG"),
        r = (p("Wr5T"), p("q1tI")),
        i = p.n(r),
        o = p("55Ip"),
        a = p("Ty5D"),
        s = p("eDP5"),
        c = p("Jqb/"),
        l = p("lkRc"),
        u = p("sUmc"),
        h = p("i8i4"),
        d = p.n(h);
      function f() {
        return l.a.IS_CREATOR_HOME || l.a.IS_CURATOR ? "groups" : "games";
      }
      var v,
        g = i.a.lazy(function() {
          return Promise.all([p.e(0), p.e(1), p.e(3), p.e(94)]).then(
            p.bind(null, "GEPe")
          );
        }),
        b = i.a.lazy(function() {
          return Promise.all([p.e(0), p.e(97), p.e(1), p.e(3), p.e(9)]).then(
            p.bind(null, "IY+y")
          );
        }),
        _ = i.a.lazy(function() {
          return Promise.all([p.e(0), p.e(1), p.e(7), p.e(95)]).then(
            p.bind(null, "JLV8")
          );
        }),
        y = i.a.lazy(function() {
          return Promise.all([p.e(0), p.e(1), p.e(7), p.e(96)]).then(
            p.bind(null, "PDjT")
          );
        }),
        E = function() {
          return "/" + f() + "/:anything*/diagdata";
        },
        O = function(e) {
          return "/" + f() + "/" + e + "/(partnerevents|events|announcements)";
        },
        w = function(e) {
          return "/app/" + e + "(/workshop/)?";
        },
        C = function(e) {
          return "/groups/" + e + "/";
        },
        D = function(e) {
          return "/id/" + e + "/";
        },
        S = function(e) {
          return "/profiles/" + e + "/";
        },
        x = function() {
          return "/:anything/filedetails";
        },
        M = function() {
          return "/id/:vanity_url/recommended/:appid/";
        },
        k = function() {
          return "/profiles/:steamid/recommended/:appid/";
        },
        I = function() {
          return "/profiles/:steamid/recommended/";
        },
        j = function() {
          return "/id/:vanity_url/recommended/";
        },
        T = function() {
          return "/";
        },
        L = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(m.d)(t, e),
            (t.prototype.componentDidMount = function() {
              v ||
                (v = Object(u.b)(document)).Show(
                  i.a.createElement(c.b, { ModalManager: Object(c.f)(window) })
                );
            }),
            (t.prototype.render = function() {
              return i.a.createElement(
                o.a,
                {
                  basename: (function() {
                    var e = document.createElement("a");
                    e.href = l.b.COMMUNITY_BASE_URL;
                    var t = e.pathname;
                    t.endsWith("/") || (t += "/");
                    return t;
                  })()
                },
                i.a.createElement(
                  i.a.Suspense,
                  { fallback: i.a.createElement("div", null) },
                  i.a.createElement(
                    a.e,
                    null,
                    i.a.createElement(a.c, {
                      exact: !0,
                      path: E(),
                      render: function(e) {
                        return i.a.createElement(
                          s.a,
                          Object(m.a)({}, e, {
                            key: e.match.params.gid,
                            strConfigID: "application_config"
                          })
                        );
                      }
                    }),
                    i.a.createElement(a.c, {
                      path: O(":appid_or_vanity_str"),
                      render: function(e) {
                        return i.a.createElement(b, null);
                      }
                    }),
                    i.a.createElement(a.c, {
                      path: w(":appid"),
                      render: function(e) {
                        return i.a.createElement(n, {
                          config: {
                            "apphub-events": function() {
                              return i.a.createElement(b, null);
                            },
                            "apphub-ugcrewards": function() {
                              return i.a.createElement(_, Object(m.a)({}, e));
                            }
                          }
                        });
                      }
                    }),
                    i.a.createElement(a.c, {
                      path: C(":groupid_or_vanity_str"),
                      render: function(e) {
                        return i.a.createElement(b, null);
                      }
                    }),
                    i.a.createElement(a.c, {
                      path: M(),
                      render: function(e) {
                        return i.a.createElement(y, Object(m.a)({}, e));
                      }
                    }),
                    i.a.createElement(a.c, {
                      path: k(),
                      render: function(e) {
                        return i.a.createElement(y, Object(m.a)({}, e));
                      }
                    }),
                    i.a.createElement(a.c, {
                      path: j(),
                      render: function(e) {
                        return i.a.createElement(y, Object(m.a)({}, e));
                      }
                    }),
                    i.a.createElement(a.c, {
                      path: I(),
                      render: function(e) {
                        return i.a.createElement(y, Object(m.a)({}, e));
                      }
                    }),
                    i.a.createElement(a.c, {
                      path: D(":vanity_url"),
                      render: function(e) {
                        return i.a.createElement(g, Object(m.a)({}, e));
                      }
                    }),
                    i.a.createElement(a.c, {
                      path: S(":steamid"),
                      render: function(e) {
                        return i.a.createElement(g, Object(m.a)({}, e));
                      }
                    }),
                    i.a.createElement(a.c, {
                      path: x(),
                      render: function(e) {
                        return i.a.createElement(_, Object(m.a)({}, e));
                      }
                    }),
                    i.a.createElement(a.c, {
                      path: T(),
                      render: function(e) {
                        return i.a.createElement(n, {
                          config: {
                            "apphub-events": function() {
                              return i.a.createElement(b, null);
                            },
                            "apphub-ugcrewards": function() {
                              return i.a.createElement(_, Object(m.a)({}, e));
                            }
                          }
                        });
                      }
                    }),
                    i.a.createElement(a.c, { component: N })
                  )
                )
              );
            }),
            t
          );
        })(i.a.Component);
      function N(e) {
        return i.a.createElement(a.b, { push: !0, to: l.b.COMMUNITY_BASE_URL });
      }
      p("mRR+");
      var R = p("TLQK");
      p("mgoM");
      var A = p("r64O");
      p("5izx"), p("xnZ7"), p("idvb");
      document.addEventListener("DOMContentLoaded", function() {
        return Object(m.b)(this, void 0, void 0, function() {
          return Object(m.e)(this, function(e) {
            switch (e.label) {
              case 0:
                return (
                  document.getElementById("application_config")
                    ? Object(l.f)("application_config")
                    : Object(l.f)(),
                  (p.p = l.b.COMMUNITY_CDN_URL + "public/"),
                  [
                    4,
                    (function(u) {
                      return Object(m.b)(this, void 0, void 0, function() {
                        var t, n, r, o, i, a, s, c, l;
                        return Object(m.e)(this, function(e) {
                          switch (e.label) {
                            case 0:
                              return [3, 2];
                            case 1:
                              return e.sent(), [3, 4];
                            case 2:
                              return (
                                (t = "english" === u),
                                [
                                  4,
                                  Promise.all([
                                    p("rCDf")("./shared_" + u + ".json").then(
                                      function(e) {
                                        return e.default;
                                      }
                                    ),
                                    p("AvbV")("./main_" + u + ".json").then(
                                      function(e) {
                                        return e.default;
                                      }
                                    ),
                                    t
                                      ? {}
                                      : p
                                          .e(2)
                                          .then(p.t.bind(null, "TYjx", 3))
                                          .then(function(e) {
                                            return e.default;
                                          }),
                                    t
                                      ? {}
                                      : p
                                          .e(4)
                                          .then(p.t.bind(null, "/rNK", 3))
                                          .then(function(e) {
                                            return e.default;
                                          })
                                  ])
                                ]
                              );
                            case 3:
                              (n = e.sent()),
                                (r = n[0]),
                                (o = n[1]),
                                (i = n[2]),
                                (a = n[3]),
                                R.c.InitFromObjects(o, a, r, i),
                                (e.label = 4);
                            case 4:
                              for (s = 0, c = B; s < c.length; s++)
                                (l = c[s]), R.c.AddTokens(l);
                              return (B = void 0), [2];
                          }
                        });
                      });
                    })(l.b.LANGUAGE)
                  ]
                );
              case 1:
                return (
                  e.sent(),
                  document.getElementById("application_root") &&
                    d.a.render(
                      i.a.createElement(L, {}),
                      document.getElementById("application_root")
                    ),
                  [2]
                );
            }
          });
        });
      });
      var B = [];
      window.LocalizationManifestReady = function(e, t, n) {
        Object(A.a)("manifest" === t, 'Expected manifest not "' + t + '"'),
          void 0 !== B ? B.push(n) : R.c.AddTokens(n);
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
            var r = o.call(this, a.n(e), n) || this;
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
            var r = o.call(this, a.n(i.findDOMNode(e)), n) || this;
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
    kyHq: function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return o;
      }),
        n.d(t, "a", function() {
          return m;
        });
      n("mrSG");
      var r = n("mgoM");
      n.d(t, "c", function() {
        return r.c;
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
      var u, p;
      ((p = u = u || {})[(p.k_EPending = 0)] = "k_EPending"),
        (p[(p.k_EAccepted = 1)] = "k_EAccepted"),
        (p[(p.k_ERejected = 2)] = "k_ERejected");
      function m(e) {
        return (
          "game" === e ||
          "dlc" === e ||
          "software" === e ||
          "music" === e ||
          "application" === e
        );
      }
      var h, d, f, v;
      ((d = h = h || {})[(d.k_EClientUsedInputTypeKeyboard = 0)] =
        "k_EClientUsedInputTypeKeyboard"),
        (d[(d.k_EClientUsedInputTypeMouse = 1)] =
          "k_EClientUsedInputTypeMouse"),
        (d[(d.k_EClientUsedInputTypeController = 2)] =
          "k_EClientUsedInputTypeController"),
        (d[(d.k_EClientUsedInputTypeMax = 3)] = "k_EClientUsedInputTypeMax"),
        ((v = f = f || {})[(v.k_ERemoteClientLaunchOK = 1)] =
          "k_ERemoteClientLaunchOK"),
        (v[(v.k_ERemoteClientLaunchFail = 2)] = "k_ERemoteClientLaunchFail"),
        (v[(v.k_ERemoteClientLaunchRequiresUI = 3)] =
          "k_ERemoteClientLaunchRequiresUI"),
        (v[(v.k_ERemoteClientLaunchRequiresLaunchOption = 4)] =
          "k_ERemoteClientLaunchRequiresLaunchOption"),
        (v[(v.k_ERemoteClientLaunchRequiresEULA = 5)] =
          "k_ERemoteClientLaunchRequiresEULA"),
        (v[(v.k_ERemoteClientLaunchTimeout = 6)] =
          "k_ERemoteClientLaunchTimeout"),
        (v[(v.k_ERemoteClientLaunchStreamTimeout = 7)] =
          "k_ERemoteClientLaunchStreamTimeout"),
        (v[(v.k_ERemoteClientLaunchStreamClientFail = 8)] =
          "k_ERemoteClientLaunchStreamClientFail"),
        (v[(v.k_ERemoteClientLaunchOtherGameRunning = 9)] =
          "k_ERemoteClientLaunchOtherGameRunning"),
        (v[(v.k_ERemoteClientLaunchDownloadStarted = 10)] =
          "k_ERemoteClientLaunchDownloadStarted"),
        (v[(v.k_ERemoteClientLaunchDownloadNoSpace = 11)] =
          "k_ERemoteClientLaunchDownloadNoSpace"),
        (v[(v.k_ERemoteClientLaunchDownloadFiltered = 12)] =
          "k_ERemoteClientLaunchDownloadFiltered"),
        (v[(v.k_ERemoteClientLaunchDownloadRequiresUI = 13)] =
          "k_ERemoteClientLaunchDownloadRequiresUI"),
        (v[(v.k_ERemoteClientLaunchAccessDenied = 14)] =
          "k_ERemoteClientLaunchAccessDenied"),
        (v[(v.k_ERemoteClientLaunchNetworkError = 15)] =
          "k_ERemoteClientLaunchNetworkError"),
        (v[(v.k_ERemoteClientLaunchProgress = 16)] =
          "k_ERemoteClientLaunchProgress"),
        (v[(v.k_ERemoteClientLaunchParentalUnlockFailed = 17)] =
          "k_ERemoteClientLaunchParentalUnlockFailed"),
        (v[(v.k_ERemoteClientLaunchScreenLocked = 18)] =
          "k_ERemoteClientLaunchScreenLocked"),
        (v[(v.k_ERemoteClientLaunchUnsupported = 19)] =
          "k_ERemoteClientLaunchUnsupported"),
        (v[(v.k_ERemoteClientLaunchDisabledLocal = 20)] =
          "k_ERemoteClientLaunchDisabledLocal"),
        (v[(v.k_ERemoteClientLaunchDisabledRemote = 21)] =
          "k_ERemoteClientLaunchDisabledRemote"),
        (v[(v.k_ERemoteClientLaunchBroadcasting = 22)] =
          "k_ERemoteClientLaunchBroadcasting"),
        (v[(v.k_ERemoteClientLaunchBusy = 23)] = "k_ERemoteClientLaunchBusy"),
        (v[(v.k_ERemoteClientLaunchDriversNotInstalled = 24)] =
          "k_ERemoteClientLaunchDriversNotInstalled"),
        (v[(v.k_ERemoteClientLaunchTransportUnavailable = 25)] =
          "k_ERemoteClientLaunchTransportUnavailable"),
        (v[(v.k_ERemoteClientLaunchCanceled = 26)] =
          "k_ERemoteClientLaunchCanceled"),
        (v[(v.k_ERemoteClientLaunchInvisible = 27)] =
          "k_ERemoteClientLaunchInvisible"),
        (v[(v.k_ERemoteClientLaunchRestrictedCountry = 28)] =
          "k_ERemoteClientLaunchRestrictedCountry");
      var g, b;
      ((b = g = g || {})[(b.k_ESteamRealmUnknown = 0)] =
        "k_ESteamRealmUnknown"),
        (b[(b.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
        (b[(b.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina");
      var _, y, E, O, w, C;
      ((y = _ = _ || {})[(y.Unknown = 0)] = "Unknown"),
        (y[(y.Wired = 1)] = "Wired"),
        (y[(y.Wireless = 2)] = "Wireless"),
        ((O = E = E || {})[(O.NotPresent = 0)] = "NotPresent"),
        (O[(O.Failed = 1)] = "Failed"),
        (O[(O.Disconnected = 2)] = "Disconnected"),
        (O[(O.Disconnecting = 3)] = "Disconnecting"),
        (O[(O.Connecting = 4)] = "Connecting"),
        (O[(O.Connected = 5)] = "Connected"),
        (O[(O.Retrying = 6)] = "Retrying"),
        ((C = w = w || {})[(C.None = 0)] = "None"),
        (C[(C.StaticWep = 1)] = "StaticWep"),
        (C[(C.DynamicWep = 2)] = "DynamicWep"),
        (C[(C.Wpa = 4)] = "Wpa"),
        (C[(C.WpaEnterprise = 8)] = "WpaEnterprise"),
        (C[(C.Wpa2 = 16)] = "Wpa2"),
        (C[(C.Wpa2Enterprise = 32)] = "Wpa2Enterprise"),
        (C[(C.Unsupported = 32768)] = "Unsupported");
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
          return h;
        }),
        n.d(t, "c", function() {
          return d;
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
          CDN_URL: "",
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
          BASE_URL_STORE_CDN_ASSETS: "",
          IN_CLIENT: !1,
          USE_POPUPS: !1,
          IN_MOBILE: !1,
          IN_TENFOOT: !1,
          PLATFORM: "",
          SNR: "",
          LAUNCHER_TYPE: 0,
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
          n = h("config", e);
        n && (delete n.SESSIONID, Object.assign(a, n), (t.config = !0));
        var r = h("userinfo", e);
        r && (Object.assign(s, r), (t.userConfig = !0));
        var o = h("broadcast", e);
        o && (Object.assign(c, o), (t.broadcastConfig = !0));
        var i = h("community", e);
        return i && (Object.assign(l, i), (t.communityConfig = !0)), t;
      }
      function h(e, t) {
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
      function d() {
        var e = window.location.href;
        return e.startsWith(a.STORE_BASE_URL)
          ? a.STORE_BASE_URL
          : e.startsWith(a.COMMUNITY_BASE_URL)
          ? a.COMMUNITY_BASE_URL
          : e.startsWith(a.PARTNER_BASE_URL)
          ? a.PARTNER_BASE_URL
          : e.startsWith(a.HELP_BASE_URL)
          ? a.HELP_BASE_URL
          : e.startsWith(a.STEAMTV_BASE_URL)
          ? a.STEAMTV_BASE_URL
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
          : "";
      }
    },
    "mRR+": function(e, t, n) {
      "use strict";
      n("vDqi");
    },
    mgoM: function(e, t, n) {
      "use strict";
      n.d(t, "e", function() {
        return r;
      }),
        n.d(t, "f", function() {
          return o;
        }),
        n.d(t, "d", function() {
          return i;
        }),
        n.d(t, "b", function() {
          return a;
        }),
        n.d(t, "a", function() {
          return s;
        }),
        n.d(t, "c", function() {
          return c;
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
          default:
            return t;
        }
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
        "./shared_arabic.json": ["d1TB", 64],
        "./shared_brazilian.json": ["Pg9r", 65],
        "./shared_bulgarian.json": ["ENge", 66],
        "./shared_czech.json": ["Ts6V", 67],
        "./shared_danish.json": ["9oiU", 68],
        "./shared_dutch.json": ["nxN4", 69],
        "./shared_english.json": ["TYjx", 2],
        "./shared_finnish.json": ["NuB8", 70],
        "./shared_french.json": ["bOPj", 71],
        "./shared_german.json": ["svuF", 72],
        "./shared_greek.json": ["eJKB", 73],
        "./shared_hungarian.json": ["T7i2", 74],
        "./shared_italian.json": ["w96W", 75],
        "./shared_japanese.json": ["XQ4S", 76],
        "./shared_koreana.json": ["4hyI", 77],
        "./shared_latam.json": ["3qrw", 78],
        "./shared_norwegian.json": ["XA4Q", 79],
        "./shared_polish.json": ["TpXn", 80],
        "./shared_portuguese.json": ["Q8UV", 81],
        "./shared_romanian.json": ["Eme1", 82],
        "./shared_russian.json": ["BUiO", 83],
        "./shared_schinese.json": ["3UpY", 84],
        "./shared_spanish.json": ["4Fxc", 85],
        "./shared_swedish.json": ["0JhB", 86],
        "./shared_tchinese.json": ["OYRc", 87],
        "./shared_thai.json": ["lhAZ", 88],
        "./shared_turkish.json": ["RSoU", 89],
        "./shared_ukrainian.json": ["lNXI", 90],
        "./shared_vietnamese.json": ["RSmC", 91]
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
        return g;
      }),
        n.d(t, "d", function() {
          return b;
        }),
        n.d(t, "b", function() {
          return _;
        }),
        n.d(t, "f", function() {
          return y;
        }),
        n.d(t, "a", function() {
          return E;
        }),
        n.d(t, "e", function() {
          return O;
        }),
        n.d(t, "g", function() {
          return w;
        });
      var s = n("mrSG"),
        r = n("okNM"),
        c = n("q1tI"),
        a = n("i8i4"),
        l = n("TtDX"),
        u = n("JMS6"),
        T = n("X3Ds"),
        o = n("bxiW"),
        i = n("6Y59"),
        p = n("D4wO"),
        m = n("TLQK"),
        h = n("lkRc"),
        d = n("+jbA"),
        f = n.n(d),
        v = n("exH9"),
        g = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(s.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.children,
                n = e.className,
                r = e.renderMenuContainer,
                o = Object(s.f)(e, [
                  "children",
                  "className",
                  "renderMenuContainer"
                ]),
                i =
                  this.context.contextMenuInstance &&
                  this.context.contextMenuInstance.options.bUseWebStyles
                    ? "popup_menu popup_body"
                    : f.a.contextMenuContents;
              n && (i += " " + n);
              var a = r || "div";
              return c.createElement(
                a,
                Object(s.a)({}, o, { className: i }),
                t
              );
            }),
            (t.contextTypes = {
              contextMenuInstance: function() {
                return null;
              }
            }),
            t
          );
        })(c.PureComponent),
        b = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(s.d)(t, e),
            (t.prototype.OnClick = function(e) {
              this.props.disabled ||
                (this.props.onClick && this.props.onClick(e),
                this.props.bInteractableItem ||
                  (this.props.onSelected && this.props.onSelected(e),
                  this.context.contextMenuInstance &&
                    this.context.contextMenuInstance.Hide()));
            }),
            (t.prototype.OnMouseEnter = function(e) {
              this.context.contextMenuInstance &&
                this.context.contextMenuInstance.HideSubMenu();
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = (e.onSelected, e.bInteractableItem, e.renderMenuItem),
                n = Object(s.f)(e, [
                  "onSelected",
                  "bInteractableItem",
                  "renderMenuItem"
                ]),
                r = [];
              this.context.contextMenuInstance &&
              this.context.contextMenuInstance.options.bUseWebStyles
                ? r.push("popup_menu_item")
                : r.push(f.a.contextMenuItem, "contextMenuItem"),
                this.props.className && r.push(this.props.className),
                this.props.disabled && r.push("disabled");
              var o = t || "div";
              return c.createElement(
                o,
                Object(s.a)({ onMouseEnter: this.OnMouseEnter }, n, {
                  onClick: this.OnClick,
                  unselectable: this.props.unselectable,
                  className: v.a.apply(void 0, r)
                }),
                this.props.children
              );
            }),
            (t.contextTypes = {
              contextMenuInstance: function() {
                return null;
              }
            }),
            Object(s.c)([o.a], t.prototype, "OnClick", null),
            Object(s.c)([o.a], t.prototype, "OnMouseEnter", null),
            t
          );
        })(c.PureComponent),
        _ = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(s.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.bChecked,
                n = e.children,
                r = e.className,
                o = Object(s.f)(e, ["bChecked", "children", "className"]);
              return c.createElement(
                b,
                Object(s.a)({}, o, {
                  className: Object(v.a)(r, t && "menuChecked")
                }),
                c.createElement("div", { className: "contextMenuCheckMark" }),
                n
              );
            }),
            t
          );
        })(c.PureComponent),
        y = (c.PureComponent,
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
            Object(s.d)(e, n),
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
              (e.relatedTarget && T.c(e.currentTarget, e.relatedTarget)) ||
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
            (e.prototype.getChildContext = function() {
              return { contextMenuInstance: this.props.instance };
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
                  T.c(
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
                h,
                d,
                f,
                v,
                g,
                b,
                _,
                y,
                E,
                O,
                w,
                C,
                D,
                S,
                x,
                M,
                k,
                I = this.m_elMenu,
                j = this.props.element;
              I &&
                j &&
                ((e = j.ownerDocument.defaultView),
                (I.ownerDocument.defaultView.CtxUpdate = this.PositionMenu.bind(
                  this
                )),
                (t = j.getBoundingClientRect()),
                (n = I.getBoundingClientRect()),
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
                  (t = T.g(e, t)),
                  (m = p = 0),
                  (u = e.screen).availLeft && (p = u.availLeft),
                  u.availTop && (m = u.availTop),
                  (c = p + u.availWidth),
                  (l = m + u.availHeight)),
                (o.bOverlapHorizontal || o.bOverlapVertical) &&
                  (a = s = void 0),
                (h = a || t.left),
                (d = a || t.right),
                (f = n.width),
                o.bMatchWidth && ((f = d - h), (i.menuWidth = f)),
                (g = 0 < (v = (o.bOverlapHorizontal ? d : h) - f)),
                (_ = 0 < (b = c - (o.bOverlapHorizontal ? h : d) - f)),
                (y = (o.bPreferPopLeft || !_) && g),
                g ||
                  _ ||
                  ((y = _ < g),
                  o.bFitToWindow &&
                    ((f += (y ? v : b) - 8), (i.menuWidth = f))),
                (!o.bPreferPopLeft && _) || !g
                  ? (i.menuLeft = o.bOverlapHorizontal ? h : d)
                  : (i.menuRight = c - (o.bOverlapHorizontal ? d : h)),
                (E = s || t.top),
                (O = s || t.bottom),
                (w = I.scrollHeight),
                o.bMatchHeight && ((w = O - E), (i.menuHeight = w)),
                (D = 0 < (C = (o.bOverlapVertical ? O : E) - w)),
                (x = 0 < (S = l - (o.bOverlapVertical ? E : O) - w)),
                (k = (o.bPreferPopTop || !x) && D && !o.bDisablePopTop),
                D ||
                  x ||
                  ((M =
                    void 0 !== o.bShiftToFitWindow
                      ? o.bShiftToFitWindow
                      : o.bFitToWindow && !o.bOverlapHorizontal),
                  (k = S < C && !o.bDisablePopTop),
                  M && (k ? (i.menuTop = 4) : (i.menuBottom = 4)),
                  o.bFitToWindow &&
                    (M ? (w = Math.min(w, l - 8)) : (w += k ? C : S),
                    (i.menuHeight = w - 8))),
                void 0 === i.menuBottom &&
                  void 0 === i.menuTop &&
                  (k
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
                c.createElement(
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
              );
            }),
            (e.childContextTypes = {
              contextMenuInstance: function() {
                return null;
              },
              context: function() {
                return null;
              }
            }),
            Object(s.c)([o.a], e.prototype, "BindMenuElement", null),
            Object(s.c)(
              [o.a, Object(p.a)(100)],
              e.prototype,
              "OnMenuMutation",
              null
            ),
            Object(s.c)([o.a], e.prototype, "OnWindowResize", null),
            Object(s.c)([o.a], e.prototype, "OnBlur", null),
            Object(s.c)([o.a], e.prototype, "OnKeyDown", null),
            (e = Object(s.c)([r.a], e))
          );
        })(c.Component)),
        E = (function(o) {
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
            Object(s.d)(i, o),
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
                  : ((t = T.g(
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
              a.render(
                c.createElement(
                  y,
                  Object(s.a)({}, this.m_menuProps, { popup: this }),
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
      function O(e) {
        return c.createElement("div", {
          className: f.a.ContextMenuMouseOverlay
        });
      }
      function w(e) {
        var t = [],
          n = T.o(e),
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
              c.createElement(
                b,
                {
                  key: "cut",
                  onSelected: function() {
                    n.document.execCommand("cut");
                  }
                },
                Object(m.d)("#ContextMenu_Cut")
              )
            ),
          (document.queryCommandEnabled("copy") || o) &&
            t.push(
              c.createElement(
                b,
                {
                  key: "copy",
                  onSelected: function() {
                    n.document.execCommand("copy");
                  }
                },
                Object(m.d)("#ContextMenu_Copy")
              )
            ),
          h.b.IN_CLIENT &&
            a &&
            t.push(
              c.createElement(
                b,
                {
                  key: "paste",
                  onSelected: function() {
                    i.focus(), n.SteamClient._internal.Paste();
                  }
                },
                Object(m.d)("#ContextMenu_Paste")
              )
            ),
          t.length)
        )
          Object(l.a)(c.createElement(g, null, t), e);
        else {
          if (e.shiftKey) return;
          e.preventDefault(), e.stopPropagation();
        }
      }
    }
  },
  [["gfbn", 6, 0]]
]);

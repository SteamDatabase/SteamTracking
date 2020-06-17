/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "5934230";
(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
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
        i = n.n(r),
        o = n("s4NR"),
        s = n.n(o),
        a = n("lkRc"),
        c = new ((function() {
          function e() {
            (this.bOpenEventLandingPage = !1),
              (this.bIncludeFeaturedAsGameSource = !0),
              (this.nOverrideDateNow = void 0);
          }
          return (
            Object.defineProperty(e.prototype, "bEnableSteamGameFestival", {
              get: function() {
                return !0;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "bEnableNewsHubMayUpdate", {
              get: function() {
                return !0;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "bForceReadArtistStateents", {
              get: function() {
                return "dev" == a.c.WEB_UNIVERSE || "beta" == a.c.WEB_UNIVERSE;
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
                  typeof (t = s.a.parse("?" == e[0] ? e.substring(1) : e)).t ||
                  ("dev" != a.c.WEB_UNIVERSE && "beta" != a.c.WEB_UNIVERSE) ||
                  ((n = /^\d+$/.test(t.t)
                    ? i.a.unix(Number.parseInt(t.t))
                    : i()(t.t)),
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
    "6TF7": function(e, t, n) {
      e.exports = { App: "app_App_2uHYt" };
    },
    "6Y59": function(e, t, n) {
      "use strict";
      n.d(t, "y", function() {
        return a;
      }),
        n.d(t, "i", function() {
          return c;
        }),
        n.d(t, "j", function() {
          return l;
        }),
        n.d(t, "B", function() {
          return u;
        }),
        n.d(t, "J", function() {
          return p;
        }),
        n.d(t, "H", function() {
          return d;
        }),
        n.d(t, "r", function() {
          return m;
        }),
        n.d(t, "I", function() {
          return h;
        }),
        n.d(t, "F", function() {
          return f;
        }),
        n.d(t, "u", function() {
          return g;
        }),
        n.d(t, "t", function() {
          return _;
        }),
        n.d(t, "c", function() {
          return v;
        }),
        n.d(t, "g", function() {
          return b;
        }),
        n.d(t, "n", function() {
          return y;
        }),
        n.d(t, "C", function() {
          return M;
        }),
        n.d(t, "f", function() {
          return w;
        }),
        n.d(t, "h", function() {
          return O;
        }),
        n.d(t, "o", function() {
          return F;
        }),
        n.d(t, "q", function() {
          return E;
        }),
        n.d(t, "v", function() {
          return S;
        }),
        n.d(t, "l", function() {
          return C;
        }),
        n.d(t, "p", function() {
          return k;
        }),
        n.d(t, "A", function() {
          return j;
        }),
        n.d(t, "G", function() {
          return D;
        }),
        n.d(t, "z", function() {
          return B;
        }),
        n.d(t, "w", function() {
          return R;
        }),
        n.d(t, "x", function() {
          return I;
        }),
        n.d(t, "E", function() {
          return x;
        }),
        n.d(t, "m", function() {
          return A;
        }),
        n.d(t, "k", function() {
          return T;
        }),
        n.d(t, "b", function() {
          return L;
        }),
        n.d(t, "d", function() {
          return N;
        }),
        n.d(t, "s", function() {
          return P;
        }),
        n.d(t, "a", function() {
          return z;
        }),
        n.d(t, "e", function() {
          return G;
        }),
        n.d(t, "D", function() {
          return U;
        });
      n("mrSG");
      var r = n("q1tI"),
        i = n("2i24"),
        o = n.n(i),
        s = n("exH9");
      n("YyVH"), n("Z7Ow");
      function a() {
        return r.createElement(
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
          r.createElement("path", {
            d:
              "M-232.755,589.942l3.103,2.408c5.78,4.492,11.973,8.18,18.409,10.959l3.581,1.547l2.276,33.783 c0.089,1.33,1.385,2.54,2.715,2.54h48.62c1.355,0,2.745-1.273,2.852-2.621l2.74-33.284l3.602-1.496 c6.406-2.656,12.646-6.262,18.554-10.707l3.137-2.366l30.578,15.009c1.155,0.571,2.924,0.017,3.563-1.087l24.303-42.1 c0.674-1.173,0.265-3.014-0.852-3.785l-27.872-19.309l0.469-3.832c0.495-4.032,0.725-7.395,0.725-10.57 c0-3.129-0.227-6.5-0.687-10.307l-0.469-3.896l28.699-19.253c1.112-0.741,1.509-2.473,0.84-3.627l-24.3-42.104 c-0.657-1.139-2.502-1.727-3.7-1.155l-31.208,14.748l-3.091-2.341c-5.571-4.224-11.466-7.688-17.522-10.306l-3.58-1.548 l-2.34-34.887c-0.089-1.33-1.381-2.536-2.715-2.536h-48.617c-1.355,0-2.74,1.274-2.851,2.626l-2.834,34.371l-3.593,1.501 c-6.082,2.535-12.028,5.924-17.667,10.071l-3.124,2.302l-31.392-15.413c-1.168-0.575-2.924-0.025-3.559,1.074l-24.309,42.107 c-0.678,1.172-0.264,3.014,0.848,3.781l28.068,19.444l-0.524,3.883c-0.592,4.378-0.865,8.018-0.865,11.462 c0,2.988,0.179,6.065,0.55,9.403l0.431,3.853l-28.528,19.125c-1.108,0.742-1.509,2.468-0.84,3.632l24.308,42.1 c0.656,1.142,2.489,1.726,3.7,1.154L-232.755,589.942z M-177.498,560.051c-19.311,0-35.02-15.709-35.02-35.02 s15.709-35.02,35.02-35.02s35.02,15.709,35.02,35.02S-158.188,560.051-177.498,560.051z"
          })
        );
      }
      function c() {
        return r.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_DownArrowContextMenu",
            "data-name": "Layer 1",
            viewBox: "0 0 128 128",
            x: "0px",
            y: "0px"
          },
          r.createElement("polygon", {
            points:
              "50 59.49 13.21 22.89 4.74 31.39 50 76.41 95.26 31.39 86.79 22.89 50 59.49"
          })
        );
      }
      function l() {
        return r.createElement(
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
          r.createElement("circle", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "12",
            strokeMiterlimit: "10",
            cx: "128",
            cy: "128",
            r: "107.5"
          }),
          r.createElement("path", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "12",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d:
              "M74.484,145.945 c0,0,12.996,37.533,53.514,37.533c38.084,0,53.499-37.533,53.499-37.533"
          }),
          r.createElement("line", {
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
          r.createElement("line", {
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
      function u() {
        return r.createElement(
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
          r.createElement(
            "g",
            { transform: "translate(0,-952.36218)" },
            r.createElement("path", {
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
      function p() {
        return r.createElement(
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
          r.createElement("line", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "45",
            strokeMiterlimit: "10",
            x1: "212",
            y1: "212",
            x2: "44",
            y2: "44"
          }),
          r.createElement("line", {
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
        return r.createElement(
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
            r.createElement(
              "g",
              null,
              r.createElement("path", {
                className: "Bubble",
                fill: "none",
                strokeMiterlimit: "1",
                strokeWidth: "2.5px",
                d:
                  "M60.1,32.3c0,15.1-12.3,27.3-27.4,27.3 c-5,0-9.7-1.4-13.8-3.7c-1.8-1.1-15,5.4-13.8,3.4c1.7-2.9,5.9-10.3,4.7-12C7,43,5.3,37.8,5.3,32.3C5.3,17.2,17.6,5,32.7,5 C47.8,5,60.1,17.2,60.1,32.3z"
              })
            ),
          !e.exitOnly &&
            r.createElement(
              "g",
              null,
              r.createElement("path", {
                className: "AudioLines",
                opacity: "0",
                strokeWidth: "1px",
                d:
                  "M37.2,51.1c-0.5,0-1-0.1-1.3-0.4c-0.7-0.5-0.7-1.3,0-1.8c6.3-4.4,9.8-10.2,9.8-16.4c0-6.2-3.5-12-9.8-16.4 c-0.7-0.5-0.7-1.3,0-1.8s1.9-0.5,2.6,0c7.1,4.9,10.9,11.4,10.9,18.3c0,6.9-3.9,13.4-10.9,18.3C38.2,51,37.7,51.1,37.2,51.1 M21.4,40.2c0.5,0,0.9-0.1,1.3-0.4c2.8-2,4.3-4.6,4.3-7.3s-1.5-5.4-4.3-7.3c-0.7-0.5-1.9-0.5-2.6,0c-0.7,0.5-0.7,1.3,0,1.8 c2.1,1.5,3.3,3.4,3.3,5.5c0,2.1-1.2,4-3.3,5.5c-0.7,0.5-0.7,1.3,0,1.8C20.4,40.1,20.9,40.2,21.4,40.2 M29.3,45.7 c0.5,0,1-0.1,1.3-0.4c4.9-3.4,7.7-7.9,7.7-12.7c0-4.8-2.7-9.3-7.7-12.7c-0.7-0.5-1.9-0.5-2.6,0c-0.7,0.5-0.7,1.3,0,1.8 c4.2,2.9,6.6,6.8,6.6,10.9c0,4.1-2.3,8-6.6,10.9c-0.7,0.5-0.7,1.3,0,1.8C28.4,45.5,28.8,45.7,29.3,45.7"
              })
            ),
          r.createElement(
            "g",
            { className: "Arrow", opacity: e.exitOnly ? 1 : 0 },
            r.createElement("polyline", {
              fill: "none",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              points: "41,30.7 14.5,30.7 23.5,19.4 "
            }),
            r.createElement("polyline", {
              fill: "none",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              points: "41,30.7 14.5,30.7 23.5,42 "
            })
          ),
          r.createElement(
            "g",
            null,
            r.createElement("polyline", {
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
            r.createElement(
              "g",
              { className: "Microphone" },
              r.createElement("path", {
                d:
                  "M40.971,28.593v6.278c0,4.007-4.023,7.284-8.971,7.284c-2.693,0-5.126-0.974-6.765-2.516 c-1.379-1.28-2.207-2.952-2.207-4.769v-6.278l0,0H21.05v6.278c0,0.536,0.064,1.055,0.162,1.573 c0.357,1.752,1.281,3.325,2.627,4.592c1.801,1.702,4.332,2.839,7.17,3.049v4.072H25.3c-0.341,0-0.616,0.438-0.616,0.989 c0,0.552,0.275,0.99,0.616,0.99h5.759h1.882H38.7c0.341,0,0.616-0.438,0.616-0.99c0-0.551-0.275-0.989-0.616-0.989h-5.71v-4.072 c5.58-0.422,9.96-4.396,9.96-9.214v-6.278H40.971z"
              }),
              r.createElement(
                "g",
                null,
                r.createElement("path", {
                  d:
                    "M32,39.841c-3.493,0-6.343-2.344-6.343-5.213v-17.85c0-2.871,2.85-5.213,6.343-5.213s6.343,2.342,6.343,5.213v17.85,C38.343,37.497,35.493,39.841,32,39.841z"
                })
              )
            )
        );
      }
      function m() {
        return r.createElement(
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
          r.createElement("path", {
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d:
              "M167.768,62.647 l-0.012,123.052c0,24.729-19.334,44.856-43.096,44.866c-23.765-0.006-43.099-20.134-43.096-44.872L81.557,48.851 c0-15.345,14.483-27.827,29.83-27.83c15.342,0.003,27.827,12.488,27.833,27.833l-0.002,139.245 c0.003,6.376-8.546,12.925-14.925,12.925c0,0-13.929-0.166-13.929-12.928l0.003-124.839"
          })
        );
      }
      function h(e) {
        return r.createElement(
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
          r.createElement(
            "g",
            { className: "Speaker" },
            r.createElement("path", {
              d:
                "M93.785,52.265c-0.946,0-2.357,0.63-3.304,1.577L40.284,98.022c-0.947,0.789-2.831,1.578-4.093,1.578H9.367 C8.104,99.6,7,100.706,7,101.967v52.069c0,1.264,1.104,2.367,2.367,2.367H36.19c1.262,0,3.146,0.632,4.093,1.578l50.197,44.181 c0.947,0.789,2.516,1.578,3.304,1.578s1.578-1.104,1.578-2.367V54.631C95.363,53.369,94.731,52.265,93.785,52.265z"
            })
          ),
          !e.muted &&
            r.createElement(
              "g",
              { className: "SoundWaves" },
              r.createElement("path", {
                className: "SoundWavesHighest",
                d:
                  "M193.826,30.402c24.959,24.958,40.349,59.403,40.349,97.604c0,38.199-15.388,72.645-40.349,97.603l9.916,9.916 c28.067-28.067,44.263-64.673,44.263-107.521c0-42.847-16.196-79.455-44.263-107.521"
              }),
              r.createElement("path", {
                className: "SoundWavesHigh",
                d:
                  "M175.737,47.628l-8.924,8.924c18.271,18.27,29.536,43.484,29.536,71.448s-11.264,53.178-29.536,71.448l8.924,8.924 c20.546-20.546,33.234-49.008,33.234-80.374c0-31.366-12.688-59.829-33.234-80.374V47.628z"
              }),
              r.createElement("path", {
                className: "SoundWavesMed",
                d:
                  "M148.913,74.454l-8.925,8.925c11.488,11.488,18.491,27.236,18.491,44.624c0,17.388-7.054,33.281-18.491,44.575l8.875,8.975 c13.811-13.635,22.239-32.753,22.239-53.55c0-20.797-8.432-39.793-22.189-53.55V74.454z"
              }),
              r.createElement("path", {
                className: "SoundWavesLow",
                d:
                  "M121.989,101.229l-8.778,9.073c4.641,4.516,7.397,10.706,7.397,17.702c0,6.995-2.755,13.186-7.397,17.702l8.778,9.073 c7.035-6.844,11.243-16.413,11.243-26.775C133.232,117.643,129.024,108.075,121.989,101.229z"
              })
            ),
          r.createElement(
            "g",
            { className: "SoundX" },
            r.createElement("line", {
              fill: "none",
              strokeWidth: e.muted ? 10 : 0,
              stroke: "#fff",
              strokeMiterlimit: "10",
              x1: "137",
              y1: "170.667",
              x2: "223.167",
              y2: "84.5"
            }),
            r.createElement("line", {
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
      function f() {
        return r.createElement(
          "svg",
          { width: "50px", height: "25px", viewBox: "0 0 50 25" },
          r.createElement("path", {
            d:
              "M46 0H4C1.8 0 0 1.8 0 4v17c0 2.2 1.8 4 4 4h42c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM21 18.916V5.084L32.805 12 21 18.916z"
          })
        );
      }
      function g() {
        return r.createElement(
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
          r.createElement("path", {
            className: "playTriangle",
            d:
              "M65.321,33.521c-11.274-6.615-20.342-1.471-20.342,11.52V210.96c0,12.989,9.068,18.135,20.342,11.521l137.244-82.348 c11.274-6.618,11.274-17.646,0-24.509L65.321,33.521z"
          })
        );
      }
      function _() {
        return r.createElement(
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
          r.createElement("path", {
            d:
              "M44.979,219.364c0,3.3,2.7,6,6,6h49.753c3.3,0,6-2.7,6-6V36.5c0-3.3-2.7-6-6-6H50.979c-3.3,0-6,2.7-6,6V219.364z"
          }),
          r.createElement("path", {
            d:
              "M149.267,219.364c0,3.3,2.7,6,6,6h49.753c3.3,0,6-2.7,6-6V36.5c0-3.3-2.7-6-6-6h-49.753c-3.3,0-6,2.7-6,6V219.364z"
          })
        );
      }
      function v() {
        return r.createElement(
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
          r.createElement("polyline", {
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
      function b(e) {
        var t = e.highlightColor || "#00ccff",
          n = e.color || "#2d73ff";
        return r.createElement(
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
          r.createElement(
            "defs",
            null,
            r.createElement(
              "linearGradient",
              { id: "linear", x1: "0%", y1: "0%", x2: "100%", y2: "100%" },
              r.createElement("stop", {
                id: "stop0",
                offset: "0%",
                stopColor: t
              }),
              r.createElement("stop", {
                id: "stop1",
                offset: "100%",
                stopColor: n
              })
            ),
            r.createElement(
              "filter",
              { id: "f1", x: "0", y: "0", width: "200%", height: "200%" },
              r.createElement("feOffset", {
                result: "offOut",
                in: "SourceAlpha",
                dx: "20",
                dy: "20"
              }),
              r.createElement("feGaussianBlur", {
                result: "blurOut",
                in: "offOut",
                stdDeviation: "10"
              }),
              r.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "blurOut",
                mode: "normal"
              })
            )
          ),
          r.createElement("path", {
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
          r.createElement("path", {
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
      function y() {
        return r.createElement(
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
          r.createElement("path", {
            className: "topLock",
            d:
              "M203.553,197.794c0,21.929-17.778,39.706-39.706,39.706H92.154c-21.929,0-39.706-17.777-39.706-39.706v-71.693 c0-21.928,17.778-39.706,39.706-39.706h71.692c21.928,0,39.706,17.778,39.706,39.706V197.794z M128.001,129.664 c-8.941,0-16.19,7.248-16.19,16.189c0,5.589,2.833,10.518,7.137,13.427c2.066,1.395,0.318,23.508,0.318,32.842 c0,2.292-0.078,3.65,8.734,3.65c8.676,0,8.75-1.221,8.75-3.654c0-9.348-1.708-31.469,0.368-32.886 c4.269-2.916,7.071-7.821,7.071-13.38C144.191,136.912,136.941,129.664,128.001,129.664z"
          }),
          r.createElement("path", {
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
      function M(e) {
        var t = "SVGIcon_Button SVGIcon_Throbber ";
        return (
          e.className && (t += e.className),
          r.createElement(
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
            r.createElement(
              "g",
              { className: o.a.partCircle },
              r.createElement("path", {
                className: o.a.roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895"
              }),
              r.createElement("path", {
                className: o.a.roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M201.432,101.166"
              }),
              r.createElement("path", {
                className: o.a.roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754"
              })
            ),
            r.createElement(
              "g",
              { className: o.a.mainOutline },
              r.createElement("path", {
                className: o.a.roundFill,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              r.createElement("path", {
                className: o.a.roundOuterOutline,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              r.createElement("path", {
                className: o.a.roundThrobber01,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              r.createElement("path", {
                className: o.a.roundThrobber02,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              r.createElement("path", {
                className: o.a.roundThrobber03,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              r.createElement("path", {
                className: o.a.roundThrobber04,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              r.createElement("path", {
                className: o.a.roundThrobber05,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              r.createElement("path", {
                className: o.a.roundThrobber06,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              r.createElement("path", {
                className: o.a.roundThrobber07,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              r.createElement("path", {
                className: o.a.roundThrobber08,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              r.createElement("path", {
                className: o.a.roundThrobber09,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              r.createElement("path", {
                className: o.a.roundThrobber10,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              r.createElement("path", {
                className: o.a.roundThrobber11,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              r.createElement("path", {
                className: o.a.roundThrobber12,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              r.createElement("path", {
                className: o.a.roundThrobber13,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              r.createElement("path", {
                className: o.a.roundThrobber14,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              r.createElement("path", {
                className: o.a.roundThrobber15,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              })
            ),
            r.createElement(
              "g",
              { className: o.a.bottomCircle },
              r.createElement("path", {
                fill: "#ffffff",
                d:
                  "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579"
              })
            ),
            r.createElement(
              "g",
              { className: o.a.topCircle },
              r.createElement("circle", {
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
        return r.createElement(
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
          r.createElement("polygon", {
            fill: "#ffffff",
            points:
              "0,0.093 0,25.702 24.323,50.026 0,74.349 0,99.955 49.929,50.026 "
          })
        );
      }
      function O(e) {
        return r.createElement(
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
          r.createElement("polyline", {
            className: "Arrow1",
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "23",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            points: "135.65,21.667 30.081,127.235 137.18,234.333 "
          }),
          !e.singlearrow &&
            r.createElement("polyline", {
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
      function F() {
        return r.createElement(
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
          r.createElement("rect", {
            x: "24",
            y: "42.167",
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "18",
            strokeMiterlimit: "10",
            width: "208",
            height: "171.667"
          }),
          r.createElement("line", {
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
      function E() {
        return r.createElement(
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
          r.createElement("line", {
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
      function S() {
        return r.createElement(
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
          r.createElement("polyline", {
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "12",
            strokeMiterlimit: "10",
            points: "83,90.861 83,42.167 232,42.167 232,165.14 173,165.14 "
          }),
          r.createElement("rect", {
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
      function C(e) {
        return r.createElement(
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
          r.createElement("polygon", {
            points: "13.913,141 128,59 242.087,141 ",
            fill: "#ffffff"
          })
        );
      }
      function k(e) {
        return r.createElement(
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
          r.createElement("path", {
            className: "Arrow",
            d:
              "M77.003,54.763h32.784c3.794,0,9.113,2.181,11.814,4.848l63.604,62.773c2.703,2.667,2.727,7.054,0.05,9.748 l-63.705,64.206c-2.674,2.693-7.968,4.898-11.763,4.898H77.003"
          }),
          r.createElement("polyline", {
            className: "preArrowBox",
            opacity: e.bHidePreArrow ? "0" : "1",
            points: "6.833,54.763 46.71,54.763 46.71,201.236 6.833,201.236 \t"
          }),
          r.createElement("polyline", {
            className: "jumpAheadBox",
            opacity: e.bShowJumpAheadBox ? "1" : "0",
            points: "6.833,54.764 86.386,54.764 86.386,201.236 6.833,201.236 \t"
          }),
          r.createElement("polyline", {
            className: "postArrowBox",
            opacity: e.bHidePostArrow ? "0" : "1",
            points:
              "209.29,54.763 249.167,54.763 249.167,201.236 209.29,201.236 \t"
          })
        );
      }
      function j(e) {
        var t = Object(s.a)(
          "SVGIcon_Button",
          "SVGIcon_SteamLogo",
          e && e.className
        );
        return r.createElement(
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
          r.createElement("path", {
            fill: "#ffffff",
            d:
              "M127.374,5.355c-64.404,0-117.167,49.661-122.18,112.77l65.712,27.171 c5.567-3.808,12.293-6.032,19.53-6.032c0.649,0,1.294,0.017,1.934,0.051l29.226-42.354c0-0.202-0.005-0.399-0.005-0.598 c0-25.496,20.74-46.241,46.237-46.241c25.498,0,46.238,20.745,46.238,46.241c0,25.494-20.74,46.242-46.238,46.242 c-0.352,0-0.698-0.011-1.047-0.021l-41.68,29.741c0.022,0.546,0.041,1.095,0.041,1.644c0,19.141-15.569,34.707-34.706,34.707 c-16.796,0-30.843-11.99-34.026-27.869l-46.993-19.43c14.55,51.464,61.831,89.189,117.957,89.189 c67.713,0,122.604-54.893,122.604-122.604C249.979,60.244,195.086,5.355,127.374,5.355"
          }),
          r.createElement("path", {
            fill: "#ffffff",
            d:
              "M82.026,191.387l-15.061-6.22c2.67,5.56,7.285,10.208,13.418,12.767 c13.25,5.521,28.531-0.771,34.054-14.027c2.674-6.416,2.694-13.5,0.04-19.93c-2.646-6.431-7.64-11.451-14.063-14.129 c-6.371-2.647-13.196-2.552-19.198-0.291l15.561,6.437c9.776,4.073,14.396,15.299,10.324,25.071 C103.031,190.841,91.801,195.464,82.026,191.387"
          }),
          r.createElement("path", {
            fill: "#ffffff",
            d:
              "M198.639,96.359c0-16.987-13.82-30.809-30.809-30.809c-16.987,0-30.813,13.821-30.813,30.809 c0,16.988,13.824,30.806,30.813,30.806S198.639,113.347,198.639,96.359 M144.736,96.306c0-12.783,10.363-23.142,23.145-23.142 c12.783,0,23.145,10.359,23.145,23.142c0,12.783-10.36,23.142-23.145,23.142C155.1,119.447,144.736,109.089,144.736,96.306"
          })
        );
      }
      function D() {
        return r.createElement(
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
          r.createElement("path", {
            className: "frontGuy",
            fill: "#666666",
            d:
              "M181.732,53.151c-17.255,0-31.321,13.316-31.321,32.634v25.132 c0,18.005,24.006,21.006,24.382,21.381c-10.691,2.813-30.947,8.252-40.888,15.566c-8.252,6.003-11.44,18.005-13.128,22.882 c-0.75,2.063-1.688,5.064-1.688,7.127c0,0,0,9.94,0,19.881s12.941,16.505,18.005,16.505h89.65c4.877,0,18.006-5.627,18.006-16.505 s0-19.881,0-19.881c0-2.251-0.938-5.627-1.688-7.689c-4.313-10.878-4.688-16.316-13.315-22.319 c-9.941-6.939-30.009-12.19-40.512-15.004c0.374-0.563,24.193-4.127,24.193-22.131V85.785 C213.053,66.467,198.986,53.151,181.732,53.151L181.732,53.151z"
          }),
          r.createElement("path", {
            className: "backGuy",
            fill: "rgb(144, 153, 161)",
            d:
              "M84.204,34.396c-20.068,0-36.385,15.38-36.385,38.074v29.258c0,20.818,27.945,24.382,28.32,24.944 c-12.378,3.189-36.01,9.565-47.638,18.006c-9.753,7.127-13.504,21.006-15.379,26.632c-0.75,2.251-1.876,6.002-1.876,8.253  c0,0,0,11.44,0,23.257c0,11.815,15.004,19.13,20.819,19.13h104.279c5.814,0,20.818-6.564,20.818-19.13c0-12.566,0-23.257,0-23.257 c0-2.438-1.125-6.564-2.063-8.815c-5.063-12.566-5.438-18.942-15.566-26.069c-11.628-8.065-34.885-14.067-47.076-17.443 c0.375-0.563,28.133-4.876,28.133-25.695V72.469C120.59,49.775,104.272,34.396,84.204,34.396L84.204,34.396z"
          })
        );
      }
      function B() {
        return r.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_5",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 64 64"
          },
          r.createElement(
            "g",
            null,
            r.createElement("path", {
              d:
                "M40.6,32.7l15.1-15.1c2.6-2.6,2.6-6.7,0-9.3c-2.6-2.6-6.7-2.6-9.3,0L31.3,23.4L16.2,8.3c-2.6-2.6-6.7-2.6-9.3,0c-2.6,2.6-2.6,6.7,0,9.3L22,32.7L6.9,47.8c-2.6,2.6-2.6,6.7,0,9.3c1.3,1.3,3,1.9,4.7,1.9s3.4-0.6,4.7-1.9L31.3,42l15.1,15.1c1.3,1.3,3,1.9,4.7,1.9s3.4-0.6,4.7-1.9c2.6-2.6,2.6-6.7,0-9.3L40.6,32.7z"
            })
          )
        );
      }
      function R() {
        return r.createElement(
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
          r.createElement(
            "g",
            { className: "leftarrow", opacity: "0" },
            r.createElement("polygon", {
              points: "127.817,4.403 4,128 127.817,251.598"
            })
          ),
          r.createElement(
            "g",
            { className: "rightarrow", opacity: "0" },
            r.createElement("polygon", {
              points: "127.816,4.403 251.633,128 127.816,251.598"
            })
          ),
          r.createElement(
            "g",
            { className: "grabber" },
            r.createElement("polygon", {
              points:
                "145.692,22.132 145.692,234.361 127.817,251.598 110.307,234.361 110.307,22.132 127.817,4.403"
            })
          )
        );
      }
      function I() {
        return r.createElement(
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
          r.createElement("polygon", {
            className: "pointer",
            points:
              "128,154.979 46.374,230.548 46.374,253.333 209.626,253.333 209.626,230.548 \t"
          }),
          r.createElement("rect", {
            className: "line",
            x: "116.271",
            y: "3.168",
            width: "23.459",
            height: "137.332"
          })
        );
      }
      function x() {
        return r.createElement(
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
          r.createElement("path", {
            d:
              "M224.389,62.411H31.613c-10.147,0-18.36,8.214-18.36,18.36v94.453c0,10.147,8.215,18.359,18.36,18.359h192.775 c10.146,0.241,18.358-7.968,18.358-18.116V80.771C242.747,70.625,234.534,62.411,224.389,62.411z M92.317,175.026H71.646 L35.472,79.832h21.895l25.022,72.484l24.343-72.484h21.895L92.317,175.026z M195.264,175.026l-19.175-32.095h-2.176h-14.279 v32.095h-19.991V79.832h35.63c13.056,0,22.664,2.607,28.831,7.819c6.164,5.215,9.247,12.49,9.247,21.827 c0,7.343-1.61,13.463-4.828,18.359c-3.219,4.896-7.729,8.614-13.531,11.151l22.575,36.038H195.264z"
          }),
          r.createElement("path", {
            d:
              "M187.784,100.298c-2.812-2.312-7.391-3.468-13.735-3.468h-14.415v28.966h15.639c5.257,0,9.36-1.336,12.308-4.012 c2.945-2.673,4.42-6.368,4.42-11.083C192,106.078,190.593,102.61,187.784,100.298z"
          })
        );
      }
      function A() {
        return r.createElement(
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
          r.createElement("rect", {
            className: "screen",
            x: "7.756",
            y: "5.518",
            fill: "#292D33",
            width: "112.144",
            height: "234.357"
          }),
          r.createElement("path", {
            className: "frame",
            fill: "#3C414B",
            d:
              "M40.334,15.72h47.237c3.957,0,7.164-3.259,7.164-7.28c0-1.113,0.889-2.017,1.984-2.017h9.746 c7.417,0,13.432,6.108,13.432,13.646v206.156c0,7.538-6.015,13.647-13.431,13.647H21.459c-7.417,0-13.429-6.109-13.429-13.647 V20.071c0-7.536,6.013-13.646,13.429-13.646h9.728c1.096,0,1.983,0.903,1.983,2.017C33.17,12.461,36.377,15.72,40.334,15.72 M107.057,0.001H20.87c-9.922,0-17.965,8.174-17.965,18.256v217.505c0,10.082,8.043,18.256,17.965,18.256h86.188 c9.923,0,17.966-8.174,17.966-18.256V18.257C125.022,8.175,116.979,0.001,107.057,0.001"
          }),
          r.createElement("path", {
            fill: "#3C414B",
            d:
              "M0.826,33.349C0.369,33.349,0,33.725,0,34.189v7.616c0,0.464,0.37,0.84,0.826,0.84s0.827-0.376,0.827-0.84 v-7.617C1.653,33.725,1.283,33.349,0.826,33.349"
          }),
          r.createElement("path", {
            fill: "#3C414B",
            d:
              "M0.826,51.56C0.369,51.56,0,51.936,0,52.4v16.8c0,0.465,0.37,0.841,0.826,0.841s0.827-0.376,0.827-0.841 V52.4C1.653,51.936,1.283,51.56,0.826,51.56"
          }),
          r.createElement("path", {
            fill: "#3C414B",
            d:
              "M0.826,75.304C0.369,75.304,0,75.68,0,76.144v15.904c0,0.464,0.37,0.84,0.826,0.84s0.827-0.376,0.827-0.84 V76.144C1.653,75.68,1.283,75.304,0.826,75.304"
          }),
          r.createElement("path", {
            fill: "#3C414B",
            d:
              "M127.617,58.056c-0.457,0-0.827,0.376-0.827,0.84v27.328c0,0.464,0.37,0.84,0.827,0.84 c0.456,0,0.826-0.376,0.826-0.84V58.896C128.443,58.432,128.073,58.056,127.617,58.056"
          })
        );
      }
      function T() {
        return r.createElement(
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
          r.createElement("polygon", {
            fill: "#3C414B",
            points: "3.167,48.809 127.22,128 252.833,48.809 "
          }),
          r.createElement("polygon", {
            fill: "#3C414B",
            points: "252.833,203.68 252.833,55.439 185.151,99.131 "
          }),
          r.createElement("polygon", {
            fill: "#3C414B",
            points:
              "247.958,207.191 180.47,101.472 128.001,134.24 75.142,101.472 7.849,207.191 "
          }),
          r.createElement("polygon", {
            fill: "#3C414B",
            points: "3.167,203.682 3.167,55.441 70.851,99.132 "
          })
        );
      }
      function L() {
        return r.createElement(
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
          r.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M236.979,138.059c0.548,0.078,6.91,0.101,7.772,0.032 c1.215-0.095,1.396,0.068,1.388,0.708c-0.01,0.397,0.012,3.039-2.365,7.32c-3.301,5.948-12.079,10.436-12.55,10.672 c-0.47,0.233-0.53,0.484-0.136,0.75c0.434,0.295,8.068,1.454,9.084,1.611c1.017,0.154,0.637,1.001,0.637,1.001 s-0.704,2.621-2.895,5.36c-2.189,2.738-9.311,6.123-8.583,6.123c0.731,0,7.187,0.159,6.181,1.422 c-3.019,3.786-13.603,9.528-18.43,13.813c-13.388,11.885-13.217,12.864-15.52,15.09c-0.983-3.298-3.02-12.658-3.02-12.658 l-6.105-11.467c4.413,0.18,6.364,0.081,8.952,0.081c9.214,0,17.525-2.185,22.234-5.841l2.371-1.843l-2.911-0.728 c-2.131-0.528-7.121-1.782-11.896-2.979c2.184-0.104,10.803-1.299,14.413-5.339c0.136-0.151,0.276-0.321,0.406-0.494l1.245-1.664 l-2.404-0.735c-2.607-0.799-5.948-1.682-8.517-2.335c3.173-1.572,7.585-3.942,10.048-6.088c4.83-4.203,7.226-9.709,7.322-9.943 l0.9-2.098l-10.772,0.318c1.503-1.483,3.218-3.197,3.939-3.991c1.43-1.571,4.053-6.221,4.198-9.896l0.072-1.787l-1.763,0.288 c-1.979,0.322-5.301,1.279-8.179,2.173c2.025-2.193,4.296-4.767,5.46-6.484c2.687-3.964,2.76-8.371,2.597-12.916l-0.104-2.881 l-2.261,1.79c-2.559,2.028-7.595,5.031-11.097,7.047c1.538-3.644,3.54-8.752,3.813-11.276c0.5-4.681-0.248-10.196-0.248-10.196 l-10.76,9.394c0.885-1.953,1.684-4.013,2.117-5.832c1.735-7.29,0.055-17.892-0.021-18.338l-0.452-2.807l-7.777,7.739 c0.722-3.535,1.465-8.253,1.23-11.789c-0.426-6.321-2.278-10.517-2.359-10.694l-1.01-2.251l-6.465,8.577 c0.231-4.285,0.27-10.24-0.948-13.547c-1.934-5.262-3.651-8.007-3.723-8.121l-1.232-1.958l-3.057,4.85 c0.018-2.967-0.11-6.475-0.69-8.68c-1.202-4.543-2.825-6.396-3.002-6.592l-1.325-1.433l-1.623,2.705 c-0.278-3.19-1.112-7.084-3.343-9.478l-0.814-0.872l-1.012,0.623c-0.327,0.201-0.714,0.497-1.104,0.823 c-0.154-1.135-0.365-2.451-0.639-3.691c0.563-4.733,1.186-10.03,1.206-10.452c0.027-0.547,0.274-0.767,1.017-0.391 c0.898,0.452,3.156,2.064,5.187,6.133c2.036,4.067,3.132,11.324,3.117,12.044c-0.009,0.383,0.291,0.757,0.438,0.151 c0.145-0.607,0.478-7.591,0.623-8.312c0.081-0.383,0.199-0.484,0.737-0.212c0.496,0.249,2.959,2.181,4.899,6.463 c1.179,2.599,1.634,11.946,1.574,12.653c-0.106,1.278,0.313,0.891,0.339,0.883c-0.009,0.013-0.025,0.04-0.03,0.049 c0.03-0.041,0.036-0.049,0.03-0.049c0.573-0.841,4.21-8.99,4.519-9.377c0.313-0.39,0.521-0.395,0.835,0.002 c0.262,0.33,2.095,1.717,4.049,10.088c1.902,8.135,1.949,11.542,1.848,12.682c-0.08,0.86,0.339,0.993,0.731,0.524 c0.389-0.47,5.104-9.201,5.497-9.515c0.389-0.313,0.613-0.309,0.927,0.161c0.312,0.469,2.718,4.762,3.684,11.448 c0.861,5.947,0.608,13.599,0.375,14.381c-0.235,0.782-0.135,1.077,0.493,0.53c0.623-0.548,10.299-8.412,11.004-9.038 c0.703-0.627,1.18-0.65,1.34-0.046c0.172,0.654,0.822,8.654,0.275,15.225c-0.549,6.571-2.626,12.752-2.94,13.145 c-0.312,0.391,0.087,0.712,0.478,0.555c0.394-0.157,11.902-10.018,12.645-10.402c0.711-0.367,1.043,0.005,1.105,0.507 c0.068,0.544,0.966,3.098-0.419,11.269c-0.959,5.65-3.54,11.876-3.855,12.033c-0.313,0.157-0.077,0.336,0.234,0.259 c0.315-0.079,8.324-3.488,8.872-3.567c0.546-0.079,0.671,0.339,0.514,0.808c-0.158,0.469-0.458,6.273-2.534,11.639 c-2.603,6.732-6.056,11.001-6.056,11.001s-0.252,0.519,0.217,0.519s9.266-0.186,9.813-0.263c0.547-0.079,0.627,0.156,0.547,0.704 c-0.077,0.547,0.858,9.116-8.624,14.601C236.524,137.734,236.432,137.979,236.979,138.059z M174.473,24.823 c1.981,3.34,2.018,9.248,1.836,11.469l-0.52,6.238l5.25-8.744c0.395,0.843,0.85,2.003,1.25,3.524 c1.02,3.877,0.422,13.082,0.417,13.173l-0.384,5.752l6.435-10.212c0.628,1.27,1.45,3.097,2.32,5.459 c1.466,3.983,0.772,13.806,0.381,17.257l-0.602,5.308l9.568-12.69c0.493,1.707,1.058,4.21,1.259,7.227 c0.39,5.821-2.272,15.731-2.299,15.83l-1.428,5.26l11.125-11.068c0.377,3.586,0.772,9.774-0.304,14.302 c-1.2,5.057-5.778,12.588-5.823,12.664l-1.806,3.992l16.878-14.09c-0.116,1.366-0.262,2.944-0.423,4.435 c-0.312,2.935-3.954,11.389-5.335,14.399l-1.827,4.002l3.856-2.115c0.381-0.208,8.027-4.41,12.979-7.778 c-0.039,3.484-0.537,6.042-2.139,8.4c-2.189,3.234-9.05,10.198-9.118,10.268l-4.352,4.408l5.861-2.004 c0.08-0.025,6.868-2.34,11.188-3.41c-0.675,2.445-2.208,5.125-3.11,6.118c-1.319,1.449-6.429,6.429-6.48,6.482l-2.682,2.614 l13.475-0.404c-1.06,1.837-2.89,4.549-5.457,6.783c-3.727,3.244-12.956,7.341-13.048,7.383l-3.952,1.746l4.201,1.008 c0.062,0.015,5.637,1.354,10.266,2.67c-3.412,2.191-9.291,3.081-10.948,3.138c-2.06,0.072-11.075,0.125-11.075,0.125l-11.51,0.069 l11.162,2.804c0,0,12.587,3.164,19.486,4.894c-4.398,2.216-10.717,3.493-17.657,3.493c-3.102,0-10.335-0.284-15.048-0.483 c4.064,6.069,7.041,11.004,7.992,13.681c2.813,7.915,6.777,28.269,6.889,48.907c0.039,6.572-1.081,11.649-9.022,11.649 c-0.288,0-0.597-0.038-0.908-0.092c-1.846,0.339-4.351,0.595-5.438-0.095c-1.805-1.149-3.163-2.627-3.544-3.957 c-0.383-1.334-1.146-9.374-3.106-20.675c-1.92-11.046-4.038-19.431-4.237-19.525c-1.535-0.731-9.358-18.45-9.358-18.45 l-37.23-47.615c0,0-20.737,23.917-37.455,47.8c-0.867,1.235-5.994,11.251-9.275,17.989c-0.212,0.437-0.181,0.475-0.281,0.808 c-0.604,2.015-2.396,9.525-4.039,18.994c-1.962,11.301-2.725,19.341-3.105,20.675c-0.384,1.33-1.74,2.808-3.546,3.957 c-1.085,0.689-3.592,0.434-5.437,0.095c-0.313,0.054-0.621,0.092-0.909,0.092c-7.941,0-9.061-5.077-9.024-11.649 c0.114-20.639,4.078-40.992,6.892-48.907c0.95-2.677,3.926-7.611,7.993-13.681c-4.714,0.199-11.946,0.483-15.051,0.483 c-6.939,0-13.26-1.277-17.653-3.493c6.896-1.729,19.486-4.894,19.486-4.894l11.159-2.804l-11.508-0.069 c0,0-9.019-0.053-11.076-0.125c-1.66-0.057-7.537-0.946-10.949-3.138c4.629-1.315,10.202-2.655,10.264-2.67l4.201-1.008l-3.95-1.746 c-0.094-0.042-9.324-4.139-13.049-7.383c-2.566-2.234-4.397-4.946-5.458-6.783l13.477,0.404l-2.684-2.614 c-0.05-0.054-5.16-5.033-6.48-6.482c-0.9-0.993-2.436-3.673-3.108-6.118c4.319,1.069,11.108,3.384,11.188,3.41l5.861,2.004 l-4.352-4.408c-0.069-0.069-6.928-7.033-9.12-10.268c-1.601-2.358-2.099-4.916-2.139-8.4c4.953,3.368,12.601,7.57,12.98,7.778 l3.858,2.115l-1.829-4.002c-1.379-3.011-5.022-11.465-5.334-14.399c-0.161-1.491-0.305-3.068-0.421-4.435l16.877,14.09l-1.806-3.992 c-0.046-0.076-4.622-7.607-5.821-12.664c-1.078-4.528-0.682-10.716-0.307-14.302L58.57,89.672l-1.426-5.26 c-0.025-0.098-2.688-10.008-2.3-15.83c0.203-3.017,0.767-5.52,1.26-7.227l9.566,12.69l-0.601-5.308 c-0.391-3.451-1.083-13.274,0.381-17.257c0.871-2.362,1.693-4.189,2.32-5.459l6.435,10.212l-0.382-5.752 c-0.006-0.091-0.604-9.295,0.416-13.173c0.401-1.521,0.854-2.681,1.251-3.524l5.249,8.744l-0.52-6.238 c-0.181-2.221-0.144-8.129,1.836-11.469c0.596,0.522,1.248,1.148,1.67,1.575l2.215,2.245l0.276-3.142 c0.162-1.838,0.783-7.003,1.703-8.813c1.342-2.635,4.69-3.91,7.104-4.505c-6.691,13.614-36.889,77.59-36.889,122.937 c0,23.658,16.206,23.931,16.368,23.931c4.881,0,6.947-7.914,6.947-11.063V133.45c0-2.744,1.148-2.744,1.835-2.744 c5.807,0,10.48,3.196,13.855,6.69c8.813-11.615,15.81-20.526,15.81-20.526s0.16-0.182,0.248-0.345 c-1.03-2.443-7.165-16.995-7.165-16.995l1.708-43.717c0,0-0.278-3.797,1.044-6.052c1.314-2.245,4.247-3.175,4.247-3.175 l13.307,41.443c0,0-4.107,0.866-4.107,5.585c0,2.982,2.658,4.99,6.227,5.013c3.572-0.022,6.227-2.031,6.227-5.013 c0-4.719-4.109-5.585-4.109-5.585l13.311-41.443c0,0,2.93,0.93,4.245,3.175c1.322,2.255,1.043,6.052,1.043,6.052l1.709,43.717 l-7.309,17.34c0,0,6.997,8.911,15.809,20.526c3.375-3.494,8.048-6.69,13.855-6.69c0.687,0,1.833,0,1.833,2.744v14.538 c0,3.148,2.068,11.063,6.95,11.063c0.159,0,16.367-0.272,16.367-23.931c0-45.347-30.197-109.322-36.888-122.937 c2.412,0.595,5.761,1.87,7.104,4.505c0.92,1.809,1.541,6.975,1.705,8.813l0.275,3.142l2.213-2.245 C173.226,25.972,173.875,25.345,174.473,24.823z M176.157,181.396c-1.644-2.189-41.07-55.856-41.07-55.856l-6.723,8.809 l-0.946-1.233l-0.829-1.082l-5.053-6.594l-0.095,0.101c0,0-39.427,53.667-41.07,55.856c-1.643,2.191-4.777,6.708-6.058,9.322 c-1.279,2.614-8.946,39.306-8.946,42.592c0,2.005,0.041,8.618,0.071,13.47c1.536,0.2,3.411,0.761,4.357,0.125 c1.624-1.093,2.363-2.323,2.491-3.372c0.128-1.048,1.367-12.969,2.69-20.812c1.779-10.547,4.571-19.005,4.415-18.97 c3.213-6.672,8.966-17.938,9.887-19.252c17.808-25.439,38.994-49.947,38.994-49.947s21.166,24.502,38.978,49.947 c0.921,1.313,6.672,12.58,9.888,19.252c-0.158-0.035,2.635,8.423,4.414,18.97c1.322,7.843,2.562,19.764,2.688,20.812 c0.131,1.049,0.87,2.279,2.493,3.372c0.944,0.636,2.818,0.075,4.355-0.125c0.032-4.852,0.073-11.465,0.073-13.47 c0-3.286-7.667-39.978-8.948-42.592C180.936,188.104,177.801,183.588,176.157,181.396z M82.538,21.517l-1.014-0.623l-0.813,0.872 c-2.231,2.394-3.063,6.287-3.342,9.478l-1.624-2.705l-1.323,1.433c-0.179,0.197-1.801,2.049-3.004,6.592 c-0.581,2.205-0.709,5.712-0.689,8.68l-3.057-4.85l-1.234,1.958c-0.072,0.114-1.787,2.859-3.722,8.121 c-1.22,3.307-1.179,9.262-0.949,13.547l-6.463-8.577l-1.012,2.251c-0.08,0.177-1.934,4.373-2.359,10.694 c-0.234,3.536,0.51,8.253,1.231,11.789l-7.778-7.739l-0.453,2.807c-0.073,0.446-1.754,11.048-0.02,18.338 c0.433,1.819,1.231,3.879,2.117,5.832l-10.759-9.394c0,0-0.749,5.515-0.248,10.196c0.271,2.523,2.272,7.632,3.813,11.276 c-3.503-2.016-8.539-5.019-11.099-7.047l-2.259-1.79l-0.106,2.881c-0.162,4.545-0.087,8.952,2.6,12.916 c1.161,1.717,3.433,4.291,5.459,6.484c-2.877-0.894-6.201-1.851-8.179-2.173l-1.763-0.288l0.071,1.787 c0.148,3.675,2.771,8.324,4.198,9.896c0.723,0.794,2.436,2.508,3.941,3.991L21.93,137.83l0.896,2.098 c0.1,0.234,2.493,5.74,7.324,9.943c2.464,2.146,6.876,4.516,10.047,6.088c-2.57,0.653-5.908,1.536-8.518,2.335l-2.402,0.735 l1.246,1.664c0.13,0.173,0.27,0.343,0.407,0.494c3.608,4.04,12.229,5.234,14.412,5.339c-4.774,1.197-9.767,2.451-11.896,2.979 l-2.911,0.728l2.371,1.843c4.708,3.656,13.02,5.841,22.233,5.841c2.588,0,4.539,0.099,8.954-0.081l-6.105,11.467 c0,0-2.038,9.36-3.02,12.658c-2.304-2.226-2.133-3.205-15.52-15.09c-4.829-4.284-15.411-10.026-18.429-13.813 c-1.005-1.263,5.449-1.422,6.179-1.422c0.73,0-6.393-3.385-8.582-6.123c-2.191-2.739-2.895-5.36-2.895-5.36s-0.38-0.847,0.637-1.001 c1.018-0.157,8.65-1.316,9.084-1.611c0.395-0.266,0.332-0.517-0.137-0.75c-0.469-0.236-9.248-4.724-12.548-10.672 c-2.375-4.281-2.357-6.923-2.364-7.32c-0.01-0.64,0.17-0.803,1.385-0.708c0.862,0.068,7.226,0.046,7.774-0.032 c0.546-0.08,0.453-0.324,0.019-0.576c-9.483-5.484-8.546-14.054-8.624-14.601c-0.079-0.548,0-0.783,0.548-0.704 c0.546,0.077,9.342,0.263,9.812,0.263c0.469,0,0.218-0.519,0.218-0.519s-3.452-4.27-6.056-11.001 c-2.077-5.366-2.377-11.169-2.533-11.639c-0.157-0.469-0.034-0.887,0.514-0.808c0.549,0.079,8.558,3.488,8.87,3.567 c0.313,0.077,0.548-0.103,0.235-0.259c-0.314-0.157-2.896-6.383-3.855-12.033c-1.384-8.17-0.488-10.725-0.42-11.269 c0.063-0.502,0.397-0.874,1.105-0.507c0.743,0.385,12.255,10.245,12.646,10.402c0.391,0.157,0.79-0.164,0.477-0.555 c-0.313-0.392-2.392-6.574-2.938-13.145c-0.548-6.571,0.1-14.571,0.274-15.225c0.161-0.604,0.635-0.581,1.339,0.046 c0.704,0.626,10.381,8.489,11.006,9.038c0.625,0.547,0.727,0.252,0.492-0.53c-0.235-0.782-0.484-8.435,0.375-14.381 c0.965-6.686,3.372-10.979,3.685-11.448s0.536-0.474,0.927-0.161c0.391,0.313,5.106,9.045,5.497,9.515 c0.391,0.469,0.809,0.336,0.732-0.524c-0.104-1.14-0.057-4.547,1.845-12.682c1.956-8.371,3.789-9.758,4.052-10.088 c0.313-0.396,0.521-0.392,0.833-0.002c0.309,0.387,3.945,8.536,4.519,9.377c-0.005,0,0,0.008,0.031,0.049 c-0.007-0.009-0.022-0.036-0.031-0.049c0.025,0.008,0.446,0.395,0.34-0.883c-0.058-0.707,0.396-10.055,1.574-12.653 c1.941-4.282,4.404-6.214,4.899-6.463c0.54-0.272,0.658-0.171,0.737,0.212c0.146,0.721,0.478,7.705,0.625,8.312 c0.146,0.606,0.444,0.232,0.437-0.151c-0.015-0.72,1.081-7.977,3.115-12.044c2.033-4.069,4.292-5.681,5.188-6.133 c0.742-0.376,0.989-0.156,1.018,0.391c0.022,0.422,0.645,5.719,1.206,10.452c-0.272,1.24-0.484,2.556-0.639,3.691 C83.251,22.014,82.866,21.718,82.538,21.517z M127.35,141.814c-1.158,12.032-4.978,23.045-6.326,29.486 c-1.643,7.849-4.788,18.061-6.793,20.931c-4.433,6.343-18.036,18.547-20.403,19.732c-1.094,0.547-6.376-4.115-6.56-4.846 c-0.182-0.728,2.883-3.993,2.154-3.627c-0.731,0.364-4.104,0.906-5.06,0.87c-0.753-0.026,0.633-2.728,0.633-2.728 s-1.484,2.217-3.021,2.947c-0.03,0.015,9.433-18.119,9.433-18.119S127.52,140.043,127.35,141.814z M119.7,169.39l3.104-10.647 l-1.869-0.559l-3.152,10.656L119.7,169.39z M114.072,167.242l4.687-10.051l-1.764-0.838l-4.735,10.055L114.072,167.242z  M126.961,159.319l-0.82,11.06l-1.991-0.139l0.867-11.079L126.961,159.319z M131.727,170.391l-1.986,0.167l-0.828-11.078 l1.944-0.144L131.727,170.391z M164.422,186.462c0,0,9.463,18.134,9.434,18.119c-1.54-0.73-3.021-2.947-3.021-2.947 s1.384,2.701,0.633,2.728c-0.957,0.036-4.33-0.506-5.06-0.87c-0.731-0.366,2.334,2.899,2.153,3.627 c-0.185,0.73-5.467,5.393-6.56,4.846c-2.368-1.186-15.973-13.39-20.404-19.732c-2.007-2.87-5.149-13.082-6.792-20.931 c-1.349-6.441-4.621-17.127-5.778-29.16C128.854,140.373,164.422,186.462,164.422,186.462z M142.029,167.242l1.813-0.834 l-4.735-10.055l-1.762,0.838L142.029,167.242z M136.402,169.39l1.917-0.55l-3.152-10.656l-1.868,0.559L136.402,169.39z"
          })
        );
      }
      function N() {
        return r.createElement(
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
          r.createElement("path", {
            className: "CCBox",
            fill: "none",
            stroke: "#000000",
            strokeWidth: "10",
            strokeMiterlimit: "10",
            d:
              "M238,210c0,6.627-5.373,12-12,12H30 c-6.627,0-12-5.373-12-12V46c0-6.627,5.373-12,12-12h196c6.627,0,12,5.373,12,12V210z"
          }),
          r.createElement("path", {
            className: "C1",
            d:
              "M90.505,173.207c11.431,0,22.338-4.276,30.72-12.036c2.6-2.407,2.753-6.47,0.347-9.068c-2.41-2.604-6.47-2.757-9.072-0.349 c-5.998,5.559-13.811,8.62-21.995,8.62c-17.852,0-32.373-14.524-32.373-32.372c0-17.849,14.521-32.373,32.373-32.373 c8.177,0,15.981,3.055,21.979,8.603c2.603,2.407,6.662,2.25,9.072-0.353c2.407-2.602,2.249-6.662-0.353-9.068 c-8.375-7.751-19.276-12.019-30.694-12.019c-24.931,0-45.209,20.281-45.209,45.209C45.3,152.93,65.574,173.207,90.505,173.207z"
          }),
          r.createElement("path", {
            className: "C1",
            d:
              "M177.926,173.207c11.431,0,22.338-4.276,30.721-12.036c2.6-2.407,2.754-6.47,0.347-9.068 c-2.41-2.604-6.47-2.757-9.072-0.349c-5.998,5.559-13.812,8.62-21.995,8.62c-17.852,0-32.372-14.524-32.372-32.372 c0-17.849,14.521-32.373,32.372-32.373c8.178,0,15.981,3.055,21.979,8.603c2.604,2.407,6.663,2.25,9.072-0.353 c2.407-2.602,2.25-6.662-0.353-9.068c-8.375-7.751-19.277-12.019-30.694-12.019c-24.932,0-45.209,20.281-45.209,45.209 C132.721,152.93,152.996,173.207,177.926,173.207z"
          })
        );
      }
      function P() {
        return r.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Patch",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          r.createElement("path", {
            d:
              "M171.176,136.219c-5.516-5.516-14.166-5.948-20.223-1.406L92.125,75.984l-8.002-29.738c-0.324-1.406-1.73-3.027-3.028-3.785 L46.49,24.186c-1.298-0.648-3.136-0.433-4.218,0.648L25.295,41.813c-0.974,0.973-1.298,2.92-0.649,4.217l18.276,34.605 c0.648,1.297,2.379,2.596,3.785,3.027l29.739,8.003l58.828,58.828c-4.542,6.056-4.109,14.707,1.405,20.222l56.882,56.882 c6.056,6.056,15.896,6.056,21.845,0l12.544-12.544c6.056-6.056,6.056-15.788,0-21.845L171.176,136.219z"
          }),
          r.createElement("path", {
            d:
              "M153.116,122.16c2.271-0.648,4.65-0.973,7.138-0.973c0.865,0,1.622,0,2.486,0.107l26.928-26.927 c12.328,2.92,25.846-0.324,35.361-9.948c9.517-9.625,12.869-23.034,9.949-35.254l-20.33,20.33l-21.845-5.84l-5.84-21.952 l20.331-20.33c-12.221-2.92-25.738,0.324-35.254,9.948c-9.625,9.625-12.869,23.143-9.949,35.362L129.866,98.91L153.116,122.16z"
          }),
          r.createElement("path", {
            d:
              "M99.371,129.406l-32.226,32.226c-12.328-2.92-25.845,0.324-35.362,9.948c-9.517,9.625-12.869,23.034-9.949,35.254 l20.331-20.33l21.953,5.84l5.839,21.952l-20.331,20.33c12.22,2.92,25.737-0.324,35.254-9.949 c9.625-9.624,12.869-23.142,9.949-35.361l27.035-27.035c-0.325-3.136,0-6.38,0.865-9.517L99.371,129.406z"
          })
        );
      }
      function z() {
        return r.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_3_copy",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 256 256"
          },
          r.createElement(
            "g",
            { id: "Layer_3_copy" },
            r.createElement(
              "g",
              { id: "g4768_1_", transform: "translate(-6.9308024,-10)" },
              r.createElement("g", { id: "g4763_1_" })
            ),
            r.createElement("path", {
              d:
                "M206.3,36.6c-19.4,0-35.8,14.1-40.3,33H24.8c-6,0-10.8,4.8-10.8,10.8s4.8,10.8,10.8,10.8h141.3\r\n\t\t\t\tc4.7,18.6,20.9,32.4,40.2,32.4c22.9,0,41.5-19.5,41.5-43.5C247.9,56.2,229.2,36.6,206.3,36.6z M206.3,109.7\r\n\t\t\t\tc-15.2,0-27.5-13.2-27.5-29.5c0-16.3,12.4-29.5,27.5-29.5s27.5,13.2,27.5,29.5C233.9,96.4,221.5,109.7,206.3,109.7z"
            }),
            r.createElement("path", {
              d:
                "M230.4,157.3H107.9c-4.6-14.6-18.3-25.2-34.3-25.2s-29.7,10.6-34.3,25.2H24.8c-6,0-10.8,4.8-10.8,10.8\r\n\t\t\t\tS18.9,179,24.8,179h14.3c4.6,14.6,18.3,25.2,34.3,25.2s29.7-10.6,34.3-25.2h122.5c6,0,10.8-4.8,10.8-10.8S236.4,157.3,230.4,157.3z\r\n\t\t\t\tM73.5,189.8c-8,0-14.9-4.3-18.7-10.8l0,0c-0.7-1.2-1.3-2.4-1.7-3.7c0,0,0-0.1,0-0.1c-0.1-0.4-0.2-0.8-0.4-1.2c0-0.1,0-0.1,0-0.2\r\n\t\t\t\tc-0.2-0.8-0.4-1.7-0.5-2.6c0-0.1,0-0.2,0-0.3c0-0.3-0.1-0.7-0.1-1c0-0.1,0-0.2,0-0.4c0-0.4,0-0.9,0-1.3s0-0.9,0-1.3\r\n\t\t\t\tc0-0.1,0-0.2,0-0.4c0-0.3,0.1-0.7,0.1-1c0-0.1,0-0.2,0-0.3c0.1-0.9,0.3-1.8,0.5-2.6c0-0.1,0-0.1,0-0.2c0.1-0.4,0.2-0.8,0.4-1.2\r\n\t\t\t\tc0,0,0-0.1,0-0.1c0.5-1.3,1-2.6,1.7-3.7c3.7-6.4,10.7-10.8,18.7-10.8c8,0,14.9,4.3,18.7,10.8c0.7,1.2,1.3,2.4,1.7,3.7\r\n\t\t\t\tc0,0,0,0.1,0,0.1c0.1,0.4,0.3,0.8,0.4,1.2c0,0.1,0,0.1,0,0.2c0.2,0.8,0.4,1.7,0.5,2.6c0,0.1,0,0.2,0,0.3c0,0.3,0.1,0.7,0.1,1\r\n\t\t\t\tc0,0.1,0,0.2,0,0.4c0,0.4,0,0.9,0,1.3s0,0.9,0,1.3c0,0.1,0,0.2,0,0.4c0,0.3-0.1,0.7-0.1,1c0,0.1,0,0.2,0,0.3\r\n\t\t\t\tc-0.1,0.9-0.3,1.8-0.5,2.6c0,0.1,0,0.1,0,0.2c-0.1,0.4-0.2,0.8-0.4,1.2c0,0,0,0.1,0,0.1c-0.5,1.3-1,2.6-1.7,3.7l0,0\r\n\t\t\t\tC88.5,185.4,81.5,189.8,73.5,189.8z"
            })
          )
        );
      }
      function G(e) {
        return r.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: e.className,
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 409.6 409.6"
          },
          r.createElement("path", {
            d:
              "M109.9,96.2H302c16.3,0,29.6,13,29.6,29v101.4c0,16-13.2,29-29.6,29h-90.1l-57.6,57.9L138,255.6h-28.1\r\n\t\t\t\tc-16.3,0-29.6-13-29.6-29V125.2C80.4,109.2,93.6,96.2,109.9,96.2z"
          })
        );
      }
      function U(e) {
        return r.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: e.className,
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 409.6 409.6"
          },
          r.createElement("path", {
            d:
              "M225.1,328.8c-12.6,0-15.3-1.9-29.5-5.3c-18.7-4.8-35.3-6.3-51-5.3c-3.5,0.5-7.1,0.5-10.6,1l-7.6,1\r\n\t\t\t\tc-2.5,0.5-4.5-1-5.6-3.4c-12.6-36.2-16.6-74.7-11.6-117.6c0-2.4,2-3.9,4.5-4.3l4.5-0.5c3.5-0.5,6.6-1,10.1-1c5-0.5,9.6-2.9,13.1-7.2\r\n\t\t\t\tl0.5-1c0.5-0.5,1-1.4,1.5-2.4c9.1-14.5,22.2-25.6,36.8-37.6c7.6-6.3,14.1-12.5,20.2-18.3c6.6-7.2,10.1-16.4,10.6-27\r\n\t\t\t\tc0-9.6,5.6-15.4,16.1-16.4c13.6-1,22.7,3.9,27.8,15.9c7.6,16.4-4.4,33.3-13.9,50.6c-2,3.9-4.5,7.2-7.1,10.6c-1,1.4-2,2.9-3,4.3\r\n\t\t\t\tl-3.5,4.8c-1.5,1.9-3,3.9-4.5,6.3c4,0,7.6,0,11.6,0c11.1-0.5,34.6-0.5,46.7,1.4c7.6,1,13.6,4.8,17.7,10.1c3.5,4.8,4.5,11.1,3,17.8\r\n\t\t\t\tc-0.5,2.9-2,5.8-5,9.2c-1.5,1.9-14.4,3.9-16.5,5.3h10.9c2.5,1.9,5,3.9,7.1,6.3c4,4.3,5.6,9.2,5,14.9c-0.5,5.3-3,10.6-7.6,14\r\n\t\t\t\tc-2.5,1.9-16,3.9-18.5,5.3c5,5.3,18,12.1,16.5,19.3c-2,9.6-7.6,15.4-18.2,17.8c2.5,3.9,3,8.7,1.5,13.5c-0.5,2.4-1.5,4.3-2.5,6.3\r\n\t\t\t\tc-2.5,5.3-6.6,8.2-13.1,9.6C253.2,327.8,233.7,328.8,225.1,328.8z"
          })
        );
      }
    },
    "8H1D": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return r;
      });
      var i = n("lkRc"),
        o = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function r(e, t) {
        var n = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = o),
          44 == e.length && ((n = e.substr(-4)), (e = e.substr(0, 40)));
        var r = i.c.MEDIA_CDN_COMMUNITY_URL + "images/avatars/";
        return (
          (r += e.substr(0, 2) + "/" + e),
          t && "small" != t && (r += "_" + t),
          (r += n)
        );
      }
    },
    AvbV: function(e, t, r) {
      var i = {
        "./main_brazilian.json": ["TFAN", 9],
        "./main_bulgarian.json": ["c2SO", 10],
        "./main_czech.json": ["peP3", 11],
        "./main_danish.json": ["0bnV", 12],
        "./main_dutch.json": ["wcLc", 13],
        "./main_english.json": ["/rNK", 2],
        "./main_finnish.json": ["iywU", 14],
        "./main_french.json": ["Xnpc", 15],
        "./main_german.json": ["pmKi", 16],
        "./main_greek.json": ["mTRv", 17],
        "./main_hungarian.json": ["WkHb", 18],
        "./main_italian.json": ["Jz5U", 19],
        "./main_japanese.json": ["3Dk9", 20],
        "./main_koreana.json": ["neQD", 21],
        "./main_latam.json": ["6oHD", 22],
        "./main_norwegian.json": ["2OvS", 23],
        "./main_polish.json": ["3pwE", 24],
        "./main_portuguese.json": ["hY40", 25],
        "./main_romanian.json": ["Q95+", 26],
        "./main_russian.json": ["bsPT", 27],
        "./main_schinese.json": ["B/Zz", 28],
        "./main_spanish.json": ["U6iL", 29],
        "./main_swedish.json": ["4uPU", 30],
        "./main_tchinese.json": ["rgC9", 31],
        "./main_thai.json": ["87dp", 32],
        "./main_turkish.json": ["yMpO", 33],
        "./main_ukrainian.json": ["zTWm", 34],
        "./main_vietnamese.json": ["wqiy", 35]
      };
      function n(t) {
        if (!r.o(i, t))
          return Promise.resolve().then(function() {
            var e = new Error("Cannot find module '" + t + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          });
        var e = i[t],
          n = e[0];
        return r.e(e[1]).then(function() {
          return r.t(n, 3);
        });
      }
      (n.keys = function() {
        return Object.keys(i);
      }),
        (n.id = "AvbV"),
        (e.exports = n);
    },
    CdLH: function(e, t, n) {
      "use strict";
      n.d(t, "d", function() {
        return r;
      }),
        n.d(t, "a", function() {
          return i;
        }),
        n.d(t, "b", function() {
          return o;
        }),
        n.d(t, "c", function() {
          return s;
        }),
        n.d(t, "e", function() {
          return a;
        });
      var r = {
        PerYear: 31536e3,
        PerMonth: 2628e3,
        PerWeek: 604800,
        PerDay: 86400,
        PerHour: 3600,
        PerMinute: 60
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
      function a(t) {
        return new Promise(function(e) {
          return setTimeout(e, t);
        });
      }
    },
    D4wO: function(e, t, n) {
      "use strict";
      function r(s) {
        return function(e, i, t) {
          var o = t.value;
          t.value = function() {
            for (var e = this, t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            var r = this[i + "_DebounceProperties"];
            void 0 === r &&
              (r = this[i + "_DebounceProperties"] = {
                hTimer: void 0,
                nPending: 0
              }),
              void 0 === r.hTimer
                ? (o.apply(this, t),
                  (r.hTimer = window.setInterval(function() {
                    0 < r.nPending
                      ? (o.apply(e, t), (r.nPending = 0))
                      : (window.clearInterval(r.hTimer), (r.hTimer = void 0));
                  }, s)))
                : (r.nPending += 1);
          };
        };
      }
      n.d(t, "a", function() {
        return r;
      });
    },
    "Hny+": function(e, t, n) {
      "use strict";
      n.r(t);
      var y = n("mrSG"),
        r = n("q1tI"),
        g = n.n(r),
        _ = n("NcpY"),
        a = n("Mgs7"),
        c = n("kyHq"),
        l = n("qD+2"),
        i = n("WBba"),
        u = n("lkRc"),
        o = n("2vnA"),
        s = n("bxiW"),
        p = n("vDqi"),
        d = n.n(p),
        m = (function() {
          function e() {
            this.rgModelNames = [];
          }
          return (
            (e.prototype.Init = function() {
              var o = this;
              l.a.Init(new i.a(u.c.WEBAPI_BASE_URL, u.i.webapi_token));
              var e = u.c.STORE_BASE_URL + "labs/ajaxgetsimilaritymodelnames";
              d.a.get(e).then(function(e) {
                if (e.data) {
                  for (var t = [], n = 0, r = e.data; n < r.length; n++) {
                    var i = r[n];
                    "default" != i && t.push(i);
                  }
                  t.sort(),
                    (t = Object(y.g)(["default"], t)),
                    (o.rgModelNames = t);
                }
              });
            }),
            (e.prototype.ComputePathBetweenApps = function(
              l,
              u,
              p,
              d,
              m,
              h,
              f
            ) {
              return Object(y.b)(this, void 0, void 0, function() {
                var s,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  c = this;
                return Object(y.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (s = Math.acos(p)),
                        [
                          4,
                          new v(
                            function(o) {
                              return Object(y.b)(c, void 0, void 0, function() {
                                var t, n, r, i;
                                return Object(y.e)(this, function(e) {
                                  switch (e.label) {
                                    case 0:
                                      return [4, this.GetNeighbors(o)];
                                    case 1:
                                      for (
                                        t = e.sent(), n = [], r = 0;
                                        r < t.length &&
                                        ((i = t[r]),
                                        (d && !(n.length > d)) ||
                                          !(
                                            i.cost > s ||
                                            (m && n.length >= m)
                                          ));
                                        r++
                                      )
                                        n.push(i);
                                      return [2, n];
                                  }
                                });
                              });
                            },
                            this.EstimateCosts,
                            function(e, t) {
                              return e == t;
                            },
                            f
                          ).FindPath(l, u, h || 10)
                        ]
                      );
                    case 1:
                      if ((t = e.sent()).path) {
                        for (n = [], i = r = 0; i < t.path.length; i++)
                          (o = t.path[i]),
                            (a = o.cost - r),
                            (r = o.cost),
                            n.push({ appid: o.node, similarity: Math.cos(a) });
                        return [2, n];
                      }
                      throw new Error("Unable to compute path.");
                  }
                });
              });
            }),
            (e.prototype.GetNeighbors = function(o) {
              return Object(y.b)(this, void 0, void 0, function() {
                var t, n, r, i;
                return Object(y.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          u.c.STORE_BASE_URL +
                          "labs/ajaxgetsimilarapps?appid=" +
                          o),
                        [4, d.a.get(t)]
                      );
                    case 1:
                      if (
                        ((n = e.sent()), (r = []), n.data && n.data.appid == o)
                      )
                        for (i = 0; i < n.data.similar_appids.length; i++)
                          r.push({
                            node: n.data.similar_appids[i],
                            cost: Math.acos(n.data.similarity_scores[i])
                          });
                      return [2, r];
                  }
                });
              });
            }),
            (e.prototype.EstimateCosts = function(r, i) {
              return Object(y.b)(this, void 0, void 0, function() {
                var t, n;
                return Object(y.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          u.c.STORE_BASE_URL +
                          "labs/ajaxgetappsimilarities?appidtarget=" +
                          i +
                          "&" +
                          r
                            .map(function(e) {
                              return "appid[]=" + e.toString();
                            })
                            .join("&")),
                        [4, d.a.get(t)]
                      );
                    case 1:
                      if ((n = e.sent()).data && n.data.similarity_scores)
                        return [
                          2,
                          n.data.similarity_scores.map(function(e) {
                            return Math.acos(parseFloat(e));
                          })
                        ];
                      throw new Error("Unable to fetch cost estimates");
                  }
                });
              });
            }),
            Object(y.c)([o.x], e.prototype, "rgModelNames", void 0),
            Object(y.c)([s.a], e.prototype, "GetNeighbors", null),
            Object(y.c)([s.a], e.prototype, "EstimateCosts", null),
            e
          );
        })(),
        M = (function() {
          function e(e) {
            (this.m_Heap = []), (this.m_Length = 0), (this.m_fnCompare = e);
          }
          return (
            Object.defineProperty(e.prototype, "length", {
              get: function() {
                return this.m_Length;
              },
              enumerable: !1,
              configurable: !0
            }),
            (e.prototype.Clear = function() {
              (this.m_Heap = []), (this.m_Length = 0);
            }),
            (e.prototype.Peek = function() {
              return 0 < this.m_Length ? this.m_Heap[0] : void 0;
            }),
            (e.prototype.Pop = function() {
              if (0 != this.m_Length) {
                var e = this.m_Heap[0];
                return (
                  (this.m_Heap[0] = this.m_Heap[this.m_Length - 1]),
                  this.m_Length--,
                  this.BubbleDown(),
                  e
                );
              }
            }),
            (e.prototype.Push = function(e) {
              this.m_Heap.length == this.m_Length
                ? this.m_Heap.push(e)
                : (this.m_Heap[this.m_Length] = e),
                this.m_Length++,
                this.BubbleUp();
            }),
            (e.prototype.FindElement = function(e) {
              for (var t = 0; t < this.m_Length; t++)
                if (e(this.m_Heap[t]))
                  return { index: t, element: this.m_Heap[t] };
            }),
            (e.prototype.LowerPriorityOfElement = function(e, t) {
              (this.m_Heap[e] = t), this.BubbleUp(e);
            }),
            (e.prototype.BubbleDown = function() {
              var e = 0;
              do {
                var t = 2 * e + 1,
                  n = 2 * e + 2,
                  r = e;
                if (
                  (t < this.m_Length &&
                    0 < this.m_fnCompare(this.m_Heap[r], this.m_Heap[t]) &&
                    (r = t),
                  n < this.m_Length &&
                    0 < this.m_fnCompare(this.m_Heap[r], this.m_Heap[n]) &&
                    (r = n),
                  r == e)
                )
                  break;
                var i = this.m_Heap[e];
                (this.m_Heap[e] = this.m_Heap[r]),
                  (this.m_Heap[r] = i),
                  (e = r);
              } while (e < this.m_Length);
            }),
            (e.prototype.BubbleUp = function(e) {
              for (var t = e || this.m_Length - 1; 0 < t; ) {
                var n = (t - 1) >> 1;
                if (!(0 < this.m_fnCompare(this.m_Heap[n], this.m_Heap[t])))
                  break;
                var r = this.m_Heap[n];
                (this.m_Heap[n] = this.m_Heap[t]),
                  (this.m_Heap[t] = r),
                  (t = n);
              }
            }),
            e
          );
        })(),
        v = (function() {
          function e(e, t, n, r) {
            (this.m_fnGetNeighbors = e),
              (this.m_fnEstimateCosts = t),
              (this.m_fnEquality = n),
              (this.m_fnIterationCallback = r);
          }
          return (
            (e.prototype.FindPath = function(_, v, b) {
              return Object(y.b)(this, void 0, void 0, function() {
                var o, s, a, c, l, t, n, u, r, i, p, d, m, h, f, g;
                return Object(y.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (o = new M(function(e, t) {
                          return e.cost - t.cost;
                        })),
                        (s = new Set()),
                        o.Push({ node: _, cost: 0 }),
                        (a = new Map()),
                        (c = new Map()),
                        (l = new Map()),
                        [4, this.m_fnEstimateCosts([_], v)]
                      );
                    case 1:
                      (t = e.sent()[0]),
                        a.set(_, t),
                        c.set(_, 0),
                        (n = 0),
                        (e.label = 2);
                    case 2:
                      if (!(0 < o.length && n < b)) return [3, 6];
                      if (((u = o.Pop()), this.m_fnEquality(u.node, v))) {
                        for (r = [], i = u.node; l.has(i); )
                          r.push(i), (i = l.get(i));
                        for (p = [], g = r.length - 1; 0 <= g; g--)
                          p.push({ node: r[g], cost: c.get(r[g]) });
                        return [2, { path: p }];
                      }
                      return s.add(u.node), [4, this.m_fnGetNeighbors(u.node)];
                    case 3:
                      return 0 < (d = e.sent()).length
                        ? [
                            4,
                            this.m_fnEstimateCosts(
                              d.map(function(e) {
                                return e.node;
                              }),
                              v
                            )
                          ]
                        : [3, 5];
                    case 4:
                      if ((m = e.sent()).length != d.length)
                        return (
                          console.warn(
                            "Failed to fetch expected number of cost estimates. Failing pathfinding."
                          ),
                          [2, {}]
                        );
                      for (
                        h = c.get(u.node),
                          f = function(e) {
                            var t,
                              n,
                              r = d[e],
                              i = h + r.cost;
                            (!c.has(r.node) || i < c.get(r.node)) &&
                              (l.set(r.node, u.node),
                              c.set(r.node, i),
                              a.set(r.node, r.cost + m[e]),
                              s.has(r.node) ||
                                ((t = r.cost + m[e]),
                                (n = o.FindElement(function(e) {
                                  return e.node == r.node;
                                }))
                                  ? n.element.cost > t &&
                                    o.LowerPriorityOfElement(n.index, {
                                      node: r.node,
                                      cost: t
                                    })
                                  : o.Push({ node: r.node, cost: t })));
                          },
                          g = 0;
                        g < d.length;
                        g++
                      )
                        f(g);
                      e.label = 5;
                    case 5:
                      return (
                        n++,
                        this.m_fnIterationCallback &&
                          this.m_fnIterationCallback(),
                        [3, 2]
                      );
                    case 6:
                      throw new Error("No path found.");
                  }
                });
              });
            }),
            e
          );
        })(),
        b = new m();
      window.g_LabsSandbox = b;
      var h = n("TyAF"),
        w = n("ZApo"),
        f = n("exH9"),
        O = (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return (
              (t.state = {
                appid: 0,
                appinfo: null,
                mode: "display",
                strSearch: "",
                rgSuggestions: []
              }),
              (t.m_currentRequest = 0),
              t.props.appidInitial &&
                (l.a
                  .EnsureAppInfoForAppIDs([t.props.appidInitial])
                  .then(function() {
                    l.a.GetAppInfo(t.props.appidInitial);
                    t.setState({
                      appid: t.props.appidInitial,
                      appinfo: l.a.GetAppInfo(t.props.appidInitial)
                    });
                  }),
                (t.state.appid = t.props.appidInitial)),
              t
            );
          }
          return (
            Object(y.d)(e, n),
            (e.prototype.OnDisplayClicked = function() {
              this.setState({ mode: "select" });
            }),
            (e.prototype.UpdateAppSuggestions = function(n) {
              return Object(y.b)(this, void 0, void 0, function() {
                var a,
                  t = this;
                return Object(y.e)(this, function(e) {
                  return (
                    null != (a = n.target.value && n.target.value.trim()) &&
                    a.length
                      ? (window.clearTimeout(this.m_currentRequest),
                        (this.m_currentRequest = window.setTimeout(function() {
                          return Object(y.b)(t, void 0, void 0, function() {
                            var t,
                              n,
                              r,
                              i,
                              o,
                              s = this;
                            return Object(y.e)(this, function(e) {
                              switch (e.label) {
                                case 0:
                                  return (
                                    (t = {
                                      cc: u.c.COUNTRY,
                                      l: u.c.LANGUAGE,
                                      realm: c.d.k_ESteamRealmGlobal,
                                      f: "jsonfull",
                                      term: a.replace(" ", "+"),
                                      require_type: "game",
                                      excluded_tags: [],
                                      excluded_content_descriptors: []
                                    }),
                                    (n = u.c.STORE_BASE_URL + "search/suggest"),
                                    [
                                      4,
                                      d.a.get(n, {
                                        params: t,
                                        withCredentials: !0
                                      })
                                    ]
                                  );
                                case 1:
                                  return (
                                    (r = e.sent()),
                                    (i =
                                      null !==
                                        (o = null == r ? void 0 : r.data) &&
                                      void 0 !== o &&
                                      o.length
                                        ? r.data.map(function(e) {
                                            return g.a.createElement(
                                              "div",
                                              {
                                                className: _.Suggestion,
                                                key: "suggestion-" + e.id,
                                                onClickCapture: function() {
                                                  return s.SetSelectedApp(
                                                    parseInt(e.id)
                                                  );
                                                }
                                              },
                                              g.a.createElement("img", {
                                                src: e.img,
                                                className: _.LogoImage
                                              }),
                                              g.a.createElement(
                                                "div",
                                                { className: _.AppName },
                                                e.name +
                                                  (s.props.showAppIds
                                                    ? " (" + e.id + ")"
                                                    : "")
                                              )
                                            );
                                          })
                                        : []),
                                    this.setState({
                                      strSearch: a,
                                      rgSuggestions: i
                                    }),
                                    [2]
                                  );
                              }
                            });
                          });
                        }, 250)))
                      : this.setState({ strSearch: "", rgSuggestions: null }),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.SetSelectedApp = function(e) {
              var t = this;
              e && 0 != e
                ? l.a.EnsureAppInfoForAppIDs([e]).then(function() {
                    l.a.GetAppInfo(e);
                    t.setState({
                      appid: e,
                      appinfo: l.a.GetAppInfo(e),
                      mode: "display"
                    }),
                      t.props.fnOnSelection && t.props.fnOnSelection(e, t);
                  })
                : this.setState({ appid: 0, appinfo: null, mode: "display" });
            }),
            (e.prototype.OnKeyUp = function(e) {
              27 == e.keyCode && this.setState({ mode: "display" });
            }),
            (e.prototype.render = function() {
              var e,
                t,
                n,
                r,
                i =
                  null !== (e = this.props.classOverride) && void 0 !== e
                    ? e
                    : _.AppSelector,
                o = null,
                s = g.a.createElement(a.j, {
                  type: "text",
                  onChange: this.UpdateAppSuggestions
                });
              return (
                "display" == this.state.mode
                  ? ((n = this.state.appinfo
                      ? this.state.appinfo.name +
                        (this.props.showAppIds
                          ? " (" + this.state.appid + ")"
                          : "")
                      : null !== (t = this.props.strPrompt) && void 0 !== t
                      ? t
                      : "Select game"),
                    (o = g.a.createElement(
                      "div",
                      { className: _.AppDisplay },
                      this.state.appinfo &&
                        g.a.createElement("img", {
                          src: this.state.appinfo.header_image_url,
                          className: _.LogoImage
                        }),
                      g.a.createElement("div", { className: _.AppName }, n)
                    )))
                  : "select" == this.state.mode &&
                    ((r = 0 < this.state.strSearch.length),
                    (o = g.a.createElement(
                      "div",
                      { className: _.AppSelect },
                      s,
                      r &&
                        g.a.createElement(
                          "div",
                          { className: _.Suggestions },
                          this.state.rgSuggestions
                        )
                    ))),
                g.a.createElement(
                  "div",
                  {
                    className: i,
                    onClick: this.OnDisplayClicked,
                    onKeyUpCapture: this.OnKeyUp
                  },
                  o
                )
              );
            }),
            Object(y.c)([s.a], e.prototype, "OnDisplayClicked", null),
            Object(y.c)([s.a], e.prototype, "UpdateAppSuggestions", null),
            Object(y.c)([s.a], e.prototype, "OnKeyUp", null),
            e
          );
        })(g.a.Component),
        F = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(y.d)(t, e),
            (t.prototype.render = function() {
              var e = this;
              if (0 == this.props.appid)
                return g.a.createElement("div", { className: _.SimilarApp });
              var t = l.a.GetAppInfo(this.props.appid);
              if (!t || !t.is_valid)
                return g.a.createElement("div", { className: _.SimilarApp });
              var n,
                r = [];
              this.props.score &&
                (r.push(
                  g.a.createElement("div", {
                    className: _.Spacer,
                    key: "score-spacer"
                  })
                ),
                (n = Math.round(100 * this.props.score).toString() + "%"),
                r.push(
                  g.a.createElement(
                    "div",
                    { className: _.Score, key: "score-value" },
                    n
                  )
                ));
              var i = t.name + " (" + this.props.appid.toString() + ")",
                o = this.props.fnOnSelected
                  ? this.props.fnOnSelected
                  : function(e) {};
              return g.a.createElement(
                "div",
                {
                  className: _.SimilarApp,
                  onClick: function() {
                    return o(e.props.appid);
                  }
                },
                g.a.createElement("img", {
                  src: t.header_image_url,
                  className: _.LogoImage
                }),
                g.a.createElement("div", { className: _.AppName }, i),
                r
              );
            }),
            t
          );
        })(g.a.Component),
        E = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {}),
              (e.ref_app_a = g.a.createRef()),
              (e.ref_app_b = g.a.createRef()),
              e
            );
          }
          return (
            Object(y.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.OnAppSelected();
            }),
            (e.prototype.OnAppSelected = function() {
              var e,
                t,
                n,
                r = this;
              this.ref_app_a.current &&
                this.ref_app_b.current &&
                this.ref_app_a.current.state.appid &&
                this.ref_app_b.current.state.appid &&
                ((e = this.ref_app_a.current.state.appid),
                (t = this.ref_app_b.current.state.appid),
                (n =
                  u.c.STORE_BASE_URL +
                  "labs/ajaxgetappsimilarities?appidtarget=" +
                  e +
                  "&appid[]=" +
                  t),
                d.a.get(n).then(function(e) {
                  e.data && e.data.similarity_scores
                    ? r.setState({ score: e.data.similarity_scores[0] })
                    : r.setState({ score: null });
                }));
            }),
            (e.prototype.render = function() {
              var e = this.state.score
                ? (100 * this.state.score).toFixed(1) + "%"
                : "";
              return g.a.createElement(
                "div",
                { className: _.LabsSimilarity },
                g.a.createElement(O, {
                  fnOnSelection: this.OnAppSelected,
                  ref: this.ref_app_a,
                  showAppIds: !0,
                  appidInitial: 268500,
                  key: "similar_app_a"
                }),
                g.a.createElement("div", { className: _.HorizontalSpacer }),
                g.a.createElement("div", { className: _.Score }, e),
                g.a.createElement("div", { className: _.HorizontalSpacer }),
                g.a.createElement(O, {
                  fnOnSelection: this.OnAppSelected,
                  ref: this.ref_app_b,
                  showAppIds: !0,
                  appidInitial: 200510,
                  key: "similar_app_b"
                })
              );
            }),
            Object(y.c)([s.a], e.prototype, "OnAppSelected", null),
            e
          );
        })(g.a.Component),
        S = (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return (
              (t.selected_app = 0),
              (t.similar_apps = []),
              (t.similarity_scores = []),
              (t.similarity_model = "default"),
              (t.app_selector_ref = g.a.createRef()),
              e.default_app && t.SetSelectedApp(e.default_app),
              t
            );
          }
          return (
            Object(y.d)(e, n),
            (e.prototype.componentDidMount = function() {
              this.app_selector_ref.current &&
                this.SetSelectedApp(this.app_selector_ref.current.state.appid);
            }),
            (e.prototype.OnSelectedApp = function(e) {
              e && this.SetSelectedApp(e);
            }),
            (e.prototype.SetSelectedApp = function(e, t) {
              var n,
                r = this;
              (!t && e == this.selected_app) ||
                ((this.similar_apps = []),
                (this.selected_app = e),
                this.app_selector_ref.current &&
                  this.app_selector_ref.current.SetSelectedApp(e),
                (n =
                  u.c.STORE_BASE_URL +
                  "labs/ajaxgetsimilarapps?appid=" +
                  e +
                  "&model=" +
                  this.similarity_model),
                d.a.get(n).then(function(e) {
                  var t;
                  e.data &&
                    e.data.appid == r.selected_app &&
                    ((t = new Set(
                      e.data.similar_appids.slice(0, r.props.max_similar)
                    )).add(e.data.appid),
                    l.a.EnsureAppInfoForAppIDs(t).then(function() {
                      (r.similar_apps = e.data.similar_appids),
                        (r.similarity_scores = e.data.similarity_scores);
                    }));
                }));
            }),
            (e.prototype.OnModelChanged = function(e, t) {
              (this.similarity_model = e.data),
                this.SetSelectedApp(this.selected_app, !0);
            }),
            (e.prototype.render = function() {
              for (
                var e = [],
                  t = Math.min(
                    this.similar_apps.length,
                    this.similarity_scores.length,
                    this.props.max_similar
                  ),
                  n = 0;
                n < t;
                n++
              ) {
                var r = this.similar_apps[n],
                  i = this.similarity_scores[n];
                e.push(
                  g.a.createElement(F, {
                    appid: r,
                    score: i,
                    key: r,
                    fnOnSelected: this.SetSelectedApp
                  })
                );
              }
              for (var o = [], s = 0, a = b.rgModelNames; s < a.length; s++) {
                var c = a[s],
                  l = {
                    label: g.a.createElement("div", { key: c }, c),
                    data: c
                  };
                o.push(l);
              }
              return g.a.createElement(
                "div",
                { className: _.LabsSimilarGames },
                g.a.createElement(w.a, {
                  rgOptions: o,
                  onChange: this.OnModelChanged,
                  selectedOption: "default"
                }),
                g.a.createElement("h1", null, "Games similar to:"),
                g.a.createElement(O, {
                  fnOnSelection: this.OnSelectedApp,
                  ref: this.app_selector_ref,
                  appidInitial: 268500,
                  showAppIds: !0
                }),
                g.a.createElement("div", { className: _.SimilarApps }, e)
              );
            }),
            Object(y.c)([o.x], e.prototype, "selected_app", void 0),
            Object(y.c)([o.x], e.prototype, "similar_apps", void 0),
            Object(y.c)([o.x], e.prototype, "similarity_scores", void 0),
            Object(y.c)([o.x], e.prototype, "similarity_model", void 0),
            Object(y.c)([s.a], e.prototype, "OnSelectedApp", null),
            Object(y.c)([s.a], e.prototype, "SetSelectedApp", null),
            Object(y.c)([s.a], e.prototype, "OnModelChanged", null),
            (e = Object(y.c)([h.a], e))
          );
        })(g.a.Component),
        C = (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return (
              (t.selected_app = e.app), (t.selected_operator = e.operator), t
            );
          }
          return (
            Object(y.d)(e, n),
            (e.prototype.OnSelectedApp = function(e) {
              e &&
                e != this.selected_app &&
                ((this.selected_app = e),
                this.props.fnOnChange && this.props.fnOnChange());
            }),
            (e.prototype.OnSelectedOperator = function(e, t) {
              (this.selected_operator = e.data),
                this.props.fnOnChange && this.props.fnOnChange();
            }),
            (e.prototype.render = function() {
              var e = [
                {
                  label: g.a.createElement("div", { key: "Plus" }, "Plus"),
                  data: "Plus"
                },
                {
                  label: g.a.createElement("div", { key: "Minus" }, "Minus"),
                  data: "Minus"
                }
              ];
              return g.a.createElement(
                "div",
                { className: _.Operand },
                g.a.createElement(
                  "div",
                  { className: _.OperatorSelect },
                  g.a.createElement(w.a, {
                    rgOptions: e,
                    onChange: this.OnSelectedOperator,
                    selectedOption: "Plus"
                  })
                ),
                g.a.createElement(O, { fnOnSelection: this.OnSelectedApp })
              );
            }),
            Object(y.c)([o.x], e.prototype, "selected_app", void 0),
            Object(y.c)([o.x], e.prototype, "selected_operator", void 0),
            Object(y.c)([s.a], e.prototype, "OnSelectedApp", null),
            Object(y.c)([s.a], e.prototype, "OnSelectedOperator", null),
            (e = Object(y.c)([h.a], e))
          );
        })(g.a.Component),
        k = (function(r) {
          function e(e) {
            var t = r.call(this, e) || this;
            (t.operands = []),
              (t.similarity_model = "default"),
              (t.similar_apps = []),
              (t.similarity_scores = []),
              (t.operand_refs = []);
            for (var n = 0; n < e.max_operands; n++)
              t.operand_refs.push(g.a.createRef());
            return t;
          }
          return (
            Object(y.d)(e, r),
            (e.prototype.OnModelChanged = function(e, t) {
              (this.similarity_model = e.data), this.RecomputeExpression();
            }),
            (e.prototype.OnAddOperand = function() {
              this.operands.length < this.props.max_operands &&
                this.operands.push({
                  app: 0,
                  operator: 0 < this.operands.length ? "Plus" : void 0
                });
            }),
            (e.prototype.OnOperandChanged = function() {
              for (var e = 0; e < this.operands.length; e++) {
                var t = this.operand_refs[e].current;
                (this.operands[e].app = t.selected_app),
                  (this.operands[e].operator = t.selected_operator);
              }
              this.RecomputeExpression();
            }),
            (e.prototype.RecomputeExpression = function() {
              var e,
                t,
                a = this;
              0 != this.operands.length &&
                ((e = this.operands.map(function(e) {
                  return "appid[]=" + e.app.toString();
                })),
                (t =
                  u.c.STORE_BASE_URL +
                  "labs/ajaxgetappvectors?" +
                  e.join("&") +
                  "&model=" +
                  this.similarity_model),
                d.a.get(t).then(function(t) {
                  if (
                    ((a.similar_apps = []),
                    (a.similarity_scores = []),
                    t.data && t.data.length == a.operands.length)
                  ) {
                    for (
                      var r = t.data[0].components.map(function(e) {
                          return parseFloat(e);
                        }),
                        e = 1;
                      e < a.operands.length;
                      e++
                    )
                      !(function(e) {
                        var n = t.data[e].components.map(function(e) {
                          return parseFloat(e);
                        });
                        "Plus" == a.operands[e].operator
                          ? (r = r.map(function(e, t) {
                              return e + n[t];
                            }))
                          : "Minus" == a.operands[e].operator
                          ? (r = r.map(function(e, t) {
                              return e - n[t];
                            }))
                          : console.log(
                              "Unexpected operator " + a.operands[e].operator
                            );
                      })(e);
                    var n,
                      i,
                      o = r
                        .map(function(e) {
                          return e * e;
                        })
                        .reduce(function(e, t) {
                          return e + t;
                        }, 0),
                      s = Math.sqrt(o);
                    1e-4 < s &&
                      ((n = r
                        .map(function(e) {
                          return e / s;
                        })
                        .map(function(e) {
                          return "x[]=" + e;
                        })
                        .join("&")),
                      (i =
                        u.c.STORE_BASE_URL +
                        "labs/ajaxgetmostsimilarappstovector?" +
                        n +
                        "&model=" +
                        a.similarity_model),
                      d.a.get(i).then(function(e) {
                        var t = new Set(
                          e.data.similar_appids.slice(0, a.props.max_similar)
                        );
                        l.a.EnsureAppInfoForAppIDs(t).then(function() {
                          (a.similar_apps = e.data.similar_appids),
                            (a.similarity_scores = e.data.similarity_scores);
                        });
                      }));
                  }
                }));
            }),
            (e.prototype.render = function() {
              for (var e = [], t = 0, n = b.rgModelNames; t < n.length; t++) {
                var r = n[t],
                  i = {
                    label: g.a.createElement("div", { key: r }, r),
                    data: r
                  };
                e.push(i);
              }
              for (
                var o = [], s = 0, a = 0, c = this.operands;
                a < c.length;
                a++
              ) {
                var l = c[a];
                o.push(
                  g.a.createElement(C, {
                    app: l.app,
                    operator: l.operator,
                    key: s,
                    fnOnChange: this.OnOperandChanged,
                    ref: this.operand_refs[s]
                  })
                ),
                  s++;
              }
              var u = null;
              this.operands.length < this.props.max_operands &&
                (u = g.a.createElement(
                  "div",
                  { className: _.AddOperand, onClick: this.OnAddOperand },
                  "+"
                ));
              for (
                var p = [],
                  d = Math.min(
                    this.similar_apps.length,
                    this.similarity_scores.length,
                    this.props.max_similar
                  ),
                  m = 0;
                m < d;
                m++
              ) {
                var h = this.similar_apps[m],
                  f = this.similarity_scores[m];
                p.push(g.a.createElement(F, { appid: h, score: f, key: h }));
              }
              return g.a.createElement(
                "div",
                { className: _.LabsMixer },
                g.a.createElement(w.a, {
                  rgOptions: e,
                  onChange: this.OnModelChanged,
                  selectedOption: "default"
                }),
                g.a.createElement("h1", null, "Mixture"),
                o,
                u,
                g.a.createElement("h1", null, "Games similar to mixture"),
                g.a.createElement("div", { className: _.SimilarApps }, p)
              );
            }),
            Object(y.c)([o.x], e.prototype, "operands", void 0),
            Object(y.c)([o.x], e.prototype, "similarity_model", void 0),
            Object(y.c)([o.x], e.prototype, "similar_apps", void 0),
            Object(y.c)([o.x], e.prototype, "similarity_scores", void 0),
            Object(y.c)([s.a], e.prototype, "OnModelChanged", null),
            Object(y.c)([s.a], e.prototype, "OnAddOperand", null),
            Object(y.c)([s.a], e.prototype, "OnOperandChanged", null),
            (e = Object(y.c)([h.a], e))
          );
        })(g.a.Component),
        j = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.app_start = 0),
              (e.app_end = 0),
              (e.in_progress = !1),
              (e.progress_iteration = 0),
              (e.found_path = void 0),
              e
            );
          }
          return (
            Object(y.d)(e, t),
            (e.prototype.IterationCallback = function() {
              this.progress_iteration++;
            }),
            (e.prototype.Pathfind = function() {
              var t = this;
              this.in_progress ||
                ((this.in_progress = !0),
                (this.progress_iteration = 0),
                (this.found_path = void 0),
                b
                  .ComputePathBetweenApps(
                    this.app_start,
                    this.app_end,
                    0.75,
                    3,
                    10,
                    200,
                    this.IterationCallback
                  )
                  .then(function(e) {
                    (t.in_progress = !1),
                      l.a
                        .EnsureAppInfoForAppIDs(
                          e.map(function(e) {
                            return e.appid;
                          })
                        )
                        .then(function() {
                          t.found_path = e;
                        });
                  })
                  .catch(function(e) {
                    console.warn(
                      "Caught pathfinding failure because: " + e.toString()
                    ),
                      (t.in_progress = !1),
                      (t.found_path = void 0);
                  }));
            }),
            (e.prototype.OnSelectedStartApp = function(e) {
              var t = this;
              l.a.EnsureAppInfoForAppIDs([e]).then(function() {
                t.app_start = e;
              });
            }),
            (e.prototype.OnSelectedEndApp = function(e) {
              var t = this;
              l.a.EnsureAppInfoForAppIDs([e]).then(function() {
                t.app_end = e;
              });
            }),
            (e.prototype.render = function() {
              var e =
                  0 != this.app_start &&
                  0 != this.app_end &&
                  !this.in_progress &&
                  this.app_start != this.app_end,
                t = e
                  ? _.ComputeButton
                  : Object(f.a)(_.ComputeButton, _.Disable),
                n = null,
                n = this.in_progress
                  ? g.a.createElement(
                      "div",
                      { className: _.ProgressMessage },
                      "Finding path, step " + this.progress_iteration
                    )
                  : this.found_path
                  ? g.a.createElement(
                      "div",
                      { className: _.ProgressMessage },
                      "Found path"
                    )
                  : g.a.createElement(
                      "div",
                      { className: _.ProgressMessage },
                      "No path found"
                    ),
                r = [];
              if (this.found_path)
                for (var i = 0; i < this.found_path.length; i++) {
                  var o = this.found_path[i];
                  r.push(
                    g.a.createElement(F, {
                      appid: o.appid,
                      score: o.similarity,
                      key: "pathstep" + i
                    })
                  );
                }
              return g.a.createElement(
                "div",
                { className: _.LabsPathfinder },
                g.a.createElement(
                  "div",
                  { className: _.SelectEndpoints },
                  g.a.createElement(O, {
                    fnOnSelection: this.OnSelectedStartApp,
                    strPrompt: "Select start game"
                  }),
                  g.a.createElement(O, {
                    fnOnSelection: this.OnSelectedEndApp,
                    strPrompt: "Select end game"
                  })
                ),
                g.a.createElement(
                  "div",
                  { className: t, onClick: e ? this.Pathfind : function() {} },
                  "Pathfind!"
                ),
                n,
                g.a.createElement("div", { className: _.Path }, r)
              );
            }),
            Object(y.c)([o.x], e.prototype, "app_start", void 0),
            Object(y.c)([o.x], e.prototype, "app_end", void 0),
            Object(y.c)([o.x], e.prototype, "in_progress", void 0),
            Object(y.c)([o.x], e.prototype, "progress_iteration", void 0),
            Object(y.c)([o.x], e.prototype, "found_path", void 0),
            Object(y.c)([s.a], e.prototype, "IterationCallback", null),
            Object(y.c)([s.a], e.prototype, "Pathfind", null),
            Object(y.c)([s.a], e.prototype, "OnSelectedStartApp", null),
            Object(y.c)([s.a], e.prototype, "OnSelectedEndApp", null),
            (e = Object(y.c)([h.a], e))
          );
        })(g.a.Component),
        D = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { ready_to_run: !1 }), e;
          }
          return (
            Object(y.d)(e, t),
            (e.prototype.componentDidMount = function() {
              b.Init(), this.setState({ ready_to_run: !0 });
            }),
            (e.prototype.render = function() {
              return this.state.ready_to_run
                ? g.a.createElement(
                    "div",
                    { className: _.App },
                    g.a.createElement(
                      "div",
                      { className: _.Container },
                      g.a.createElement(
                        "div",
                        { className: _.TopSection },
                        g.a.createElement(
                          "div",
                          { className: _.Header },
                          "Labs Sandbox"
                        ),
                        g.a.createElement(
                          "div",
                          { className: _.Body },
                          "Internal testbed page for Steam Labs experiments"
                        )
                      ),
                      g.a.createElement(
                        "div",
                        { className: _.SandboxSection },
                        g.a.createElement("h1", null, "Similar Games"),
                        g.a.createElement(S, { max_similar: 10 }),
                        g.a.createElement("div", { className: _.Spacer }),
                        g.a.createElement("h1", null, "Similarity"),
                        g.a.createElement(E, null),
                        g.a.createElement("div", { className: _.Spacer }),
                        g.a.createElement("h1", null, "Mixer"),
                        g.a.createElement(k, {
                          max_similar: 10,
                          max_operands: 6
                        }),
                        g.a.createElement("div", { className: _.Spacer }),
                        g.a.createElement("h1", null, "Pathfinder"),
                        g.a.createElement(j, null)
                      )
                    )
                  )
                : g.a.createElement("div", { className: _.App });
            }),
            e
          );
        })(g.a.Component);
      t.default = D;
    },
    "IjL/": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return r;
      });
      var i = n("mrSG"),
        s = n("q1tI"),
        o = n("bxiW"),
        r = (function(t) {
          function r() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), e;
          }
          return (
            Object(i.d)(r, t),
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
                  : s.createElement(a, { error: r, onDismiss: this.Reset })
                : t;
            }),
            Object(i.c)([o.a], r.prototype, "Reset", null),
            r
          );
        })(s.Component),
        a = function(e) {
          var t = e.error,
            n = e.onDismiss,
            r = t.error ? t.error.stack : "Stack missing",
            i = t.info ? t.info.componentStack : "",
            o = (t.error && t.error.message) || "unknown error";
          return s.createElement(
            "div",
            { style: { overflow: "auto" } },
            s.createElement(
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
              o,
              '"'
            ),
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
            s.createElement(
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
            s.createElement(
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
              i
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
        i = n("mrSG"),
        o = n("2vnA"),
        s = n("i8i4"),
        a = n("Kw0F"),
        c = n("D4wO"),
        u = n("bxiW"),
        p = n("kyHq"),
        d = n("TLQK"),
        m = n("lkRc");
      ((r = l = l || {})[(r.Minimized = 1)] = "Minimized"),
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
              var i = n[r];
              i.addEventListener("load", this.OnLinkLoad),
                this.m_rgLoadingLinks.push(i);
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
                a.b(this.m_rgLoadingLinks, e.currentTarget),
                0 == this.m_rgLoadingLinks.length &&
                  (this.m_fnRender(), (this.m_fnRender = void 0));
            }),
            Object(i.c)([u.a], e.prototype, "OnLinkLoad", null),
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
              var i,
                o,
                s,
                a,
                c = _.GetExistingPopup(this.m_strName);
              (c && !this.m_rgParams.replace_existing_popup) ||
                ((this.m_rgParams = this.UpdateParamsBeforeShow(
                  this.m_rgParams
                )),
                c
                  ? ((o = c.m_element),
                    (i = c.m_popup),
                    c.ReleasePopup(),
                    (s = c.m_renderWhenReady),
                    _.RemoveTrackedPopup(c),
                    i.removeEventListener(
                      "beforeunload",
                      c.OnBeforeUnloadEvent
                    ),
                    i.removeEventListener("unload", c.OnUnload),
                    i.removeEventListener("resize", c.OnResizeEvent),
                    i.removeEventListener("focus", this.OnFocusInternal),
                    i.removeEventListener("blur", this.OnBlurInternal),
                    i.removeEventListener("drop", c.OnDrop),
                    i.removeEventListener("dragover", c.OnDragOver),
                    i.removeEventListener("message", this.OnMessage))
                  : ((i = (n = g.CreatePopup(this.m_strName, this.m_rgParams))
                      .popup),
                    (o = n.element),
                    (s = new h(i, o))),
                i &&
                  o &&
                  ((i.document.title = this.m_strTitle),
                  i.addEventListener("beforeunload", this.OnBeforeUnloadEvent),
                  i.addEventListener("unload", this.OnUnload),
                  i.addEventListener("resize", this.OnResizeEvent),
                  i.addEventListener("focus", this.OnFocusInternal),
                  i.addEventListener("blur", this.OnBlurInternal),
                  i.addEventListener("drop", this.OnDrop),
                  i.addEventListener("dragover", this.OnDragOver),
                  i.addEventListener("message", this.OnMessage),
                  m.c.LANGUAGE &&
                    ((a = "koreana" == m.c.LANGUAGE ? "korean" : m.c.LANGUAGE),
                    i.document.documentElement.setAttribute("lang", d.b[a])),
                  (this.m_popup = i),
                  (this.m_element = o),
                  (this.m_renderWhenReady = s),
                  this.m_renderWhenReady.SetTarget(function() {
                    return r.RenderInternal(r.m_popup, r.m_element, e);
                  })),
                _.AddTrackedPopup(this),
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
                _.RemoveTrackedPopup(this),
                this.OnClose(),
                s.unmountComponentAtNode(this.m_element);
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
            Object(i.c)([o.x], e.prototype, "m_bFocused", void 0),
            Object(i.c)([u.a], e.prototype, "OnMessage", null),
            Object(i.c)([u.a], e.prototype, "OnResizeEvent", null),
            Object(i.c)([u.a], e.prototype, "OnBeforeUnloadEvent", null),
            Object(i.c)([u.a], e.prototype, "OnUnload", null),
            Object(i.c)([u.a], e.prototype, "OnFocusInternal", null),
            Object(i.c)([u.a], e.prototype, "OnBlurInternal", null),
            e
          );
        })(),
        g = (function() {
          function e() {
            var s = this;
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
                  for (var i = 0, o = r; i < o.length; i++) {
                    o[i].Close();
                  }
                  s.m_bSaveRequired && s.SaveSavedDimensionStore(),
                    s.m_mapPopups.clear();
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
                i = n.height || 300,
                o = t.title,
                s = "width=" + r + ",height=" + i;
              void 0 !== n.left && (s += ",left=" + n.left),
                void 0 !== n.top && (s += ",top=" + n.top),
                (s += ",resizeable,status=0,toolbar=0,menubar=0,location=0");
              var a = "about:blank",
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
                c && (a += "?" + c.join("&"));
              var l = (t.owner_window || window).open(a, e, s, !0);
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
              var d =
                "<!DOCTYPE html><html " +
                u +
                "><head><title></title></head><body " +
                p +
                '><div id="popup_target"></div></body></html>';
              l.document.write(d), (l.document.title = o);
              for (
                var m = l.document.getElementsByTagName("head")[0],
                  h = document.getElementsByTagName("link"),
                  f = 0;
                f < h.length;
                f++
              ) {
                var g = h[f];
                if ("stylesheet" == g.rel) {
                  for (
                    var _ = l.document.createElement("link"), v = 0;
                    v < g.attributes.length;
                    v++
                  ) {
                    var b = g.attributes.item(v);
                    _.setAttribute(b.name, b.value);
                  }
                  m.appendChild(_);
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
                        i = Date.now(),
                        o = 0,
                        s = Array.from(this.m_mapRestoreDetails.keys());
                      o < s.length;
                      o++
                    ) {
                      var a = s[o],
                        c = this.m_mapRestoreDetails.get(a);
                      c.last_used < i &&
                        c.bExpires &&
                        ((i = c.last_used), (r = a));
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
            Object(i.c)(
              [u.a, Object(c.a)(100)],
              e.prototype,
              "DebouncedSaveSavedDimensionStore",
              null
            ),
            e
          );
        })(),
        _ = new g();
      window.g_PopupManager = _;
    },
    Jnrd: function(e, t, n) {
      "use strict";
      function r(e) {
        if (!s() || !window.document.cookie) return null;
        var t = document.cookie.match("(^|; )" + e + "=([^;]*)");
        return t && t[2] ? decodeURIComponent(t[2]) : null;
      }
      function i(e, t, n, r) {
        var i, o;
        s() &&
          ((r = r || "/"),
          (i = ""),
          void 0 !== n &&
            n &&
            ((o = new Date()).setTime(o.getTime() + 864e5 * n),
            (i = "; expires=" + o.toUTCString())),
          (document.cookie =
            encodeURIComponent(e) +
            "=" +
            encodeURIComponent(t) +
            i +
            ";path=" +
            r));
      }
      function s() {
        return !!window.document;
      }
      n.d(t, "b", function() {
        return r;
      }),
        n.d(t, "c", function() {
          return i;
        }),
        n.d(t, "a", function() {
          return s;
        });
    },
    "Jqb/": function(e, t, n) {
      "use strict";
      n.d(t, "f", function() {
        return g;
      }),
        n.d(t, "g", function() {
          return _;
        }),
        n.d(t, "b", function() {
          return v;
        }),
        n.d(t, "c", function() {
          return b;
        }),
        n.d(t, "d", function() {
          return y;
        }),
        n.d(t, "a", function() {
          return M;
        }),
        n.d(t, "e", function() {
          return O;
        });
      var l = n("mrSG"),
        u = n("q1tI"),
        i = n("X3Ds"),
        p = n("TLQK"),
        d = n("Mgs7"),
        o = n("IjL/"),
        r = n("bxiW"),
        s = n("6Y59"),
        a = n("TyAF"),
        c = n("exH9"),
        m = n("JJA/"),
        h = n.n(m),
        f = n("r64O");
      u.Component;
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
            e && (i.c(e, e.ownerDocument.activeElement) || e.focus());
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
                    u.createElement(s.J, null)
                  )
                ),
              u.createElement(o.a, null, t.children)
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
                  className: h.a.OverlayModal + " " + this.props.className
                },
                this.props.children
              );
            }),
            e
          );
        })(u.Component),
        v = (function(e) {
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
                i = e.strCancelButtonText,
                o = e.bAlertDialog,
                s = e.children,
                a = Object(l.f)(e, [
                  "strTitle",
                  "strDescription",
                  "strOKButtonText",
                  "strCancelButtonText",
                  "bAlertDialog",
                  "children"
                ]),
                c = r || Object(p.d)("#Button_Close");
              return u.createElement(
                b,
                Object(l.a)({}, a),
                u.createElement(d.i, null, " ", t, " "),
                u.createElement(
                  d.a,
                  null,
                  u.createElement(d.b, null, n, s),
                  u.createElement(
                    d.h,
                    null,
                    o
                      ? u.createElement(d.o, null, c)
                      : u.createElement(d.l, {
                          bOKDisabled: this.props.bOKDisabled,
                          strOKText: r,
                          onCancel: this.Cancel,
                          strCancelText: i
                        })
                  )
                )
              );
            }),
            Object(l.c)([r.a], t.prototype, "Cancel", null),
            (t = Object(l.c)([a.a], t))
          );
        })(u.Component),
        b = (function(e) {
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
                  d.f,
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
            (t = Object(l.c)([a.a], t))
          );
        })(u.Component),
        y = (function(e) {
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
              return u.createElement(v, Object(l.a)({}, e));
            }),
            (t = Object(l.c)([a.a], t))
          );
        })(u.Component),
        M = (function(e) {
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
              var i = this,
                e = this.props.ModalManager.modals;
              if (!e || !e.length) return null;
              var o = this.props.ModalManager.active_modal,
                t = e.map(function(e, t) {
                  var n = e == o,
                    r = n ? "active" : "inactive";
                  return u.createElement(
                    "div",
                    {
                      className: Object(c.a)("ModalOverlayContent", r),
                      key: "modal-" + t,
                      ref: n ? i.OnActiveRef : null,
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
        w = (function() {
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
      function O(e) {
        var t = F.get(e);
        return t || ((t = new w()), F.set(e, t)), t;
      }
      var F = new WeakMap();
    },
    Kw0F: function(e, t, n) {
      "use strict";
      n.d(t, "f", function() {
        return r;
      }),
        n.d(t, "b", function() {
          return i;
        }),
        n.d(t, "c", function() {
          return o;
        }),
        n.d(t, "a", function() {
          return s;
        }),
        n.d(t, "g", function() {
          return a;
        }),
        n.d(t, "e", function() {
          return c;
        }),
        n.d(t, "d", function() {
          return l;
        });
      n("r64O");
      function r(e) {
        for (var t = e.length; 0 !== t; ) {
          var n = Math.floor(Math.random() * t),
            r = e[--t];
          (e[t] = e[n]), (e[n] = r);
        }
      }
      function i(e, t) {
        return o(e, function(e) {
          return t == e;
        });
      }
      function o(e, t) {
        var n = e.findIndex(t);
        return 0 <= n && (e.splice(n, 1), !0);
      }
      function s(e, t) {
        return e.filter(function(e) {
          return t !== e;
        });
      }
      function a(e, t, n) {
        for (var r = 0, i = e.length - 1; r <= i; ) {
          var o = Math.floor((r + i) / 2),
            s = n(e[o], t);
          if (s < 0) r = o + 1;
          else if (0 < s) i = o - 1;
          else {
            if (i == o) return o;
            if (o == r) return o < i && n(t, e[o + 1]) < 0 ? o : o + 1;
            r = o;
          }
        }
        return i;
      }
      function c(e, t, n) {
        return (
          e ||
            console.error(
              "array should be defined for us to fill in the missing indexes"
            ),
          e.length < t ? e.concat(Array(t - e.length).fill(n)) : e
        );
      }
      function l(e, t) {
        if (t)
          for (var n = e.length - 1; 0 <= n; --n) {
            var r = e[n];
            if (t(r, n, e)) return r;
          }
      }
    },
    M1X1: function(e, t, n) {},
    MUT6: function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return c;
      }),
        n.d(t, "a", function() {
          return u;
        }),
        n.d(t, "f", function() {
          return y;
        }),
        n.d(t, "c", function() {
          return w;
        }),
        n.d(t, "d", function() {
          return T;
        }),
        n.d(t, "e", function() {
          return L;
        }),
        n.d(t, "g", function() {
          return r;
        });
      var i = n("mrSG"),
        o = n("hRO2"),
        s = n("RD/U");
      var r,
        a,
        c = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, [1], null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.appids = function() {
              return o.Message.getField(this, 1);
            }),
            (r.prototype.set_appids = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (r.prototype.add_appids = function(e, t) {
              o.Message.addToRepeatedField(this, 1, e, t);
            }),
            (r.prototype.language = function() {
              return o.Message.getField(this, 2);
            }),
            (r.prototype.set_language = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                appids: o.Message.getField(t, 1),
                language: o.Message.getField(t, 2)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return t.set_appids(e.appids), t.set_language(e.language), t;
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.add_appids(t.readInt32());
                    break;
                  case 2:
                    e.set_language(t.readUint32());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = o.Message.getField(e, 1);
              void 0 !== n && t.writeRepeatedInt32(1, n),
                void 0 !== (n = o.Message.getField(e, 2)) &&
                  t.writeUint32(2, n);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetApps_Request";
            }),
            r
          );
        })(o.Message),
        l = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, [1], null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.apps = function() {
              return o.Message.getRepeatedWrapperField(this, s.a, 1);
            }),
            (r.prototype.set_apps = function(e) {
              o.Message.setRepeatedWrapperField(this, 1, e);
            }),
            (r.prototype.add_apps = function(e, t) {
              return o.Message.addToRepeatedWrapperField(this, 1, e, s.a, t);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                apps: o.Message.toObjectList(t.apps(), s.a.toObject, e)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_apps(
                  (Array.isArray(e.apps) ? e.apps : []).map(function(e) {
                    return s.a.fromObject(e);
                  })
                ),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    var n = new s.a();
                    t.readMessage(n, s.a.deserializeBinaryFromReader),
                      e.add_apps(n);
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = e.apps();
              0 < n.length &&
                t.writeRepeatedMessage(1, n, s.a.serializeBinaryToWriter);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetApps_Response";
            }),
            r
          );
        })(o.Message),
        u = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.appid = function() {
              return o.Message.getField(this, 1);
            }),
            (r.prototype.set_appid = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (r.prototype.language = function() {
              return o.Message.getField(this, 2);
            }),
            (r.prototype.set_language = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                appid: o.Message.getField(t, 1),
                language: o.Message.getField(t, 2)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return t.set_appid(e.appid), t.set_language(e.language), t;
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_appid(t.readInt32());
                    break;
                  case 2:
                    e.set_language(t.readString());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = o.Message.getField(e, 1);
              void 0 !== n && t.writeInt32(1, n),
                void 0 !== (n = o.Message.getField(e, 2)) &&
                  t.writeString(2, n);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetAppRichPresenceLocalization_Request";
            }),
            r
          );
        })(o.Message),
        p = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, [2], null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.appid = function() {
              return o.Message.getField(this, 1);
            }),
            (r.prototype.set_appid = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (r.prototype.token_lists = function() {
              return o.Message.getRepeatedWrapperField(this, m, 2);
            }),
            (r.prototype.set_token_lists = function(e) {
              o.Message.setRepeatedWrapperField(this, 2, e);
            }),
            (r.prototype.add_token_lists = function(e, t) {
              return o.Message.addToRepeatedWrapperField(this, 2, e, m, t);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                appid: o.Message.getField(t, 1),
                token_lists: o.Message.toObjectList(
                  t.token_lists(),
                  m.toObject,
                  e
                )
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_appid(e.appid),
                t.set_token_lists(
                  (Array.isArray(e.token_lists) ? e.token_lists : []).map(
                    function(e) {
                      return m.fromObject(e);
                    }
                  )
                ),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_appid(t.readInt32());
                    break;
                  case 2:
                    var n = new m();
                    t.readMessage(n, m.deserializeBinaryFromReader),
                      e.add_token_lists(n);
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = o.Message.getField(e, 1);
              void 0 !== n && t.writeInt32(1, n),
                0 < (n = e.token_lists()).length &&
                  t.writeRepeatedMessage(2, n, m.serializeBinaryToWriter);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetAppRichPresenceLocalization_Response";
            }),
            r
          );
        })(o.Message),
        d = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.name = function() {
              return o.Message.getField(this, 1);
            }),
            (r.prototype.set_name = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (r.prototype.value = function() {
              return o.Message.getField(this, 2);
            }),
            (r.prototype.set_value = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                name: o.Message.getField(t, 1),
                value: o.Message.getField(t, 2)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return t.set_name(e.name), t.set_value(e.value), t;
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_name(t.readString());
                    break;
                  case 2:
                    e.set_value(t.readString());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = o.Message.getField(e, 1);
              void 0 !== n && t.writeString(1, n),
                void 0 !== (n = o.Message.getField(e, 2)) &&
                  t.writeString(2, n);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetAppRichPresenceLocalization_Response_Token";
            }),
            r
          );
        })(o.Message),
        m = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, [2], null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.language = function() {
              return o.Message.getField(this, 1);
            }),
            (r.prototype.set_language = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (r.prototype.tokens = function() {
              return o.Message.getRepeatedWrapperField(this, d, 2);
            }),
            (r.prototype.set_tokens = function(e) {
              o.Message.setRepeatedWrapperField(this, 2, e);
            }),
            (r.prototype.add_tokens = function(e, t) {
              return o.Message.addToRepeatedWrapperField(this, 2, e, d, t);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                language: o.Message.getField(t, 1),
                tokens: o.Message.toObjectList(t.tokens(), d.toObject, e)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_language(e.language),
                t.set_tokens(
                  (Array.isArray(e.tokens) ? e.tokens : []).map(function(e) {
                    return d.fromObject(e);
                  })
                ),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_language(t.readString());
                    break;
                  case 2:
                    var n = new d();
                    t.readMessage(n, d.deserializeBinaryFromReader),
                      e.add_tokens(n);
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = o.Message.getField(e, 1);
              void 0 !== n && t.writeString(1, n),
                0 < (n = e.tokens()).length &&
                  t.writeRepeatedMessage(2, n, d.serializeBinaryToWriter);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetAppRichPresenceLocalization_Response_TokenList";
            }),
            r
          );
        })(o.Message),
        h = (o.Message,
        (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.gidcomment = function() {
              return o.Message.getField(this, 1);
            }),
            (r.prototype.set_gidcomment = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (r.prototype.steamid = function() {
              return o.Message.getField(this, 2);
            }),
            (r.prototype.set_steamid = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (r.prototype.timestamp = function() {
              return o.Message.getField(this, 3);
            }),
            (r.prototype.set_timestamp = function(e) {
              o.Message.setField(this, 3, e);
            }),
            (r.prototype.text = function() {
              return o.Message.getField(this, 4);
            }),
            (r.prototype.set_text = function(e) {
              o.Message.setField(this, 4, e);
            }),
            (r.prototype.upvotes = function() {
              return o.Message.getField(this, 5);
            }),
            (r.prototype.set_upvotes = function(e) {
              o.Message.setField(this, 5, e);
            }),
            (r.prototype.hidden = function() {
              return o.Message.getField(this, 6);
            }),
            (r.prototype.set_hidden = function(e) {
              o.Message.setField(this, 6, e);
            }),
            (r.prototype.hidden_by_user = function() {
              return o.Message.getField(this, 7);
            }),
            (r.prototype.set_hidden_by_user = function(e) {
              o.Message.setField(this, 7, e);
            }),
            (r.prototype.deleted = function() {
              return o.Message.getField(this, 8);
            }),
            (r.prototype.set_deleted = function(e) {
              o.Message.setField(this, 8, e);
            }),
            (r.prototype.ipaddress = function(e) {
              return (
                void 0 === e && (e = !0),
                o.Message.getWrapperField(this, s.c, 9, e ? 1 : 0)
              );
            }),
            (r.prototype.set_ipaddress = function(e) {
              o.Message.setWrapperField(this, 9, e);
            }),
            (r.prototype.total_hidden = function() {
              return o.Message.getField(this, 10);
            }),
            (r.prototype.set_total_hidden = function(e) {
              o.Message.setField(this, 10, e);
            }),
            (r.prototype.upvoted_by_user = function() {
              return o.Message.getField(this, 11);
            }),
            (r.prototype.set_upvoted_by_user = function(e) {
              o.Message.setField(this, 11, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n,
                r = {
                  gidcomment: o.Message.getField(t, 1),
                  steamid: o.Message.getField(t, 2),
                  timestamp: o.Message.getField(t, 3),
                  text: o.Message.getField(t, 4),
                  upvotes: o.Message.getField(t, 5),
                  hidden: o.Message.getField(t, 6),
                  hidden_by_user: o.Message.getField(t, 7),
                  deleted: o.Message.getField(t, 8),
                  ipaddress: (n = t.ipaddress(!1)) && s.c.toObject(e, n),
                  total_hidden: o.Message.getField(t, 10),
                  upvoted_by_user: o.Message.getField(t, 11)
                };
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_gidcomment(e.gidcomment),
                t.set_steamid(e.steamid),
                t.set_timestamp(e.timestamp),
                t.set_text(e.text),
                t.set_upvotes(e.upvotes),
                t.set_hidden(e.hidden),
                t.set_hidden_by_user(e.hidden_by_user),
                t.set_deleted(e.deleted),
                t.set_ipaddress(s.c.fromObject(e.ipaddress)),
                t.set_total_hidden(e.total_hidden),
                t.set_upvoted_by_user(e.upvoted_by_user),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_gidcomment(t.readFixed64String());
                    break;
                  case 2:
                    e.set_steamid(t.readFixed64String());
                    break;
                  case 3:
                    e.set_timestamp(t.readUint32());
                    break;
                  case 4:
                    e.set_text(t.readString());
                    break;
                  case 5:
                    e.set_upvotes(t.readInt32());
                    break;
                  case 6:
                    e.set_hidden(t.readBool());
                    break;
                  case 7:
                    e.set_hidden_by_user(t.readBool());
                    break;
                  case 8:
                    e.set_deleted(t.readBool());
                    break;
                  case 9:
                    var n = new s.c();
                    t.readMessage(n, s.c.deserializeBinaryFromReader),
                      e.set_ipaddress(n);
                    break;
                  case 10:
                    e.set_total_hidden(t.readInt32());
                    break;
                  case 11:
                    e.set_upvoted_by_user(t.readBool());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = o.Message.getField(e, 1);
              void 0 !== n && t.writeFixed64String(1, n),
                void 0 !== (n = o.Message.getField(e, 2)) &&
                  t.writeFixed64String(2, n),
                void 0 !== (n = o.Message.getField(e, 3)) &&
                  t.writeUint32(3, n),
                void 0 !== (n = o.Message.getField(e, 4)) &&
                  t.writeString(4, n),
                void 0 !== (n = o.Message.getField(e, 5)) && t.writeInt32(5, n),
                void 0 !== (n = o.Message.getField(e, 6)) && t.writeBool(6, n),
                void 0 !== (n = o.Message.getField(e, 7)) && t.writeBool(7, n),
                void 0 !== (n = o.Message.getField(e, 8)) && t.writeBool(8, n),
                null != (n = e.ipaddress(!1)) &&
                  t.writeMessage(9, n, s.c.serializeBinaryToWriter),
                void 0 !== (n = o.Message.getField(e, 10)) &&
                  t.writeInt32(10, n),
                void 0 !== (n = o.Message.getField(e, 11)) &&
                  t.writeBool(11, n);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_Comment";
            }),
            r
          );
        })(o.Message)),
        f = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, [1, 2, 9], null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.comments = function() {
              return o.Message.getRepeatedWrapperField(this, h, 1);
            }),
            (r.prototype.set_comments = function(e) {
              o.Message.setRepeatedWrapperField(this, 1, e);
            }),
            (r.prototype.add_comments = function(e, t) {
              return o.Message.addToRepeatedWrapperField(this, 1, e, h, t);
            }),
            (r.prototype.deleted_comments = function() {
              return o.Message.getRepeatedWrapperField(this, h, 2);
            }),
            (r.prototype.set_deleted_comments = function(e) {
              o.Message.setRepeatedWrapperField(this, 2, e);
            }),
            (r.prototype.add_deleted_comments = function(e, t) {
              return o.Message.addToRepeatedWrapperField(this, 2, e, h, t);
            }),
            (r.prototype.steamid = function() {
              return o.Message.getField(this, 3);
            }),
            (r.prototype.set_steamid = function(e) {
              o.Message.setField(this, 3, e);
            }),
            (r.prototype.commentthreadid = function() {
              return o.Message.getField(this, 4);
            }),
            (r.prototype.set_commentthreadid = function(e) {
              o.Message.setField(this, 4, e);
            }),
            (r.prototype.start = function() {
              return o.Message.getField(this, 5);
            }),
            (r.prototype.set_start = function(e) {
              o.Message.setField(this, 5, e);
            }),
            (r.prototype.count = function() {
              return o.Message.getField(this, 6);
            }),
            (r.prototype.set_count = function(e) {
              o.Message.setField(this, 6, e);
            }),
            (r.prototype.total_count = function() {
              return o.Message.getField(this, 7);
            }),
            (r.prototype.set_total_count = function(e) {
              o.Message.setField(this, 7, e);
            }),
            (r.prototype.upvotes = function() {
              return o.Message.getField(this, 8);
            }),
            (r.prototype.set_upvotes = function(e) {
              o.Message.setField(this, 8, e);
            }),
            (r.prototype.upvoters = function() {
              return o.Message.getField(this, 9);
            }),
            (r.prototype.set_upvoters = function(e) {
              o.Message.setField(this, 9, e);
            }),
            (r.prototype.add_upvoters = function(e, t) {
              o.Message.addToRepeatedField(this, 9, e, t);
            }),
            (r.prototype.user_subscribed = function() {
              return o.Message.getField(this, 10);
            }),
            (r.prototype.set_user_subscribed = function(e) {
              o.Message.setField(this, 10, e);
            }),
            (r.prototype.user_upvoted = function() {
              return o.Message.getField(this, 11);
            }),
            (r.prototype.set_user_upvoted = function(e) {
              o.Message.setField(this, 11, e);
            }),
            (r.prototype.answer_commentid = function() {
              return o.Message.getField(this, 12);
            }),
            (r.prototype.set_answer_commentid = function(e) {
              o.Message.setField(this, 12, e);
            }),
            (r.prototype.answer_actor = function() {
              return o.Message.getField(this, 13);
            }),
            (r.prototype.set_answer_actor = function(e) {
              o.Message.setField(this, 13, e);
            }),
            (r.prototype.answer_actor_rank = function() {
              return o.Message.getField(this, 14);
            }),
            (r.prototype.set_answer_actor_rank = function(e) {
              o.Message.setField(this, 14, e);
            }),
            (r.prototype.can_post = function() {
              return o.Message.getField(this, 15);
            }),
            (r.prototype.set_can_post = function(e) {
              o.Message.setField(this, 15, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                comments: o.Message.toObjectList(t.comments(), h.toObject, e),
                deleted_comments: o.Message.toObjectList(
                  t.deleted_comments(),
                  h.toObject,
                  e
                ),
                steamid: o.Message.getField(t, 3),
                commentthreadid: o.Message.getField(t, 4),
                start: o.Message.getField(t, 5),
                count: o.Message.getField(t, 6),
                total_count: o.Message.getField(t, 7),
                upvotes: o.Message.getField(t, 8),
                upvoters: o.Message.getField(t, 9),
                user_subscribed: o.Message.getField(t, 10),
                user_upvoted: o.Message.getField(t, 11),
                answer_commentid: o.Message.getField(t, 12),
                answer_actor: o.Message.getField(t, 13),
                answer_actor_rank: o.Message.getField(t, 14),
                can_post: o.Message.getField(t, 15)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_comments(
                  (Array.isArray(e.comments) ? e.comments : []).map(function(
                    e
                  ) {
                    return h.fromObject(e);
                  })
                ),
                t.set_deleted_comments(
                  (Array.isArray(e.deleted_comments)
                    ? e.deleted_comments
                    : []
                  ).map(function(e) {
                    return h.fromObject(e);
                  })
                ),
                t.set_steamid(e.steamid),
                t.set_commentthreadid(e.commentthreadid),
                t.set_start(e.start),
                t.set_count(e.count),
                t.set_total_count(e.total_count),
                t.set_upvotes(e.upvotes),
                t.set_upvoters(e.upvoters),
                t.set_user_subscribed(e.user_subscribed),
                t.set_user_upvoted(e.user_upvoted),
                t.set_answer_commentid(e.answer_commentid),
                t.set_answer_actor(e.answer_actor),
                t.set_answer_actor_rank(e.answer_actor_rank),
                t.set_can_post(e.can_post),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    var n = new h();
                    t.readMessage(n, h.deserializeBinaryFromReader),
                      e.add_comments(n);
                    break;
                  case 2:
                    n = new h();
                    t.readMessage(n, h.deserializeBinaryFromReader),
                      e.add_deleted_comments(n);
                    break;
                  case 3:
                    e.set_steamid(t.readFixed64String());
                    break;
                  case 4:
                    e.set_commentthreadid(t.readFixed64String());
                    break;
                  case 5:
                    e.set_start(t.readInt32());
                    break;
                  case 6:
                    e.set_count(t.readInt32());
                    break;
                  case 7:
                    e.set_total_count(t.readInt32());
                    break;
                  case 8:
                    e.set_upvotes(t.readInt32());
                    break;
                  case 9:
                    e.add_upvoters(t.readUint32());
                    break;
                  case 10:
                    e.set_user_subscribed(t.readBool());
                    break;
                  case 11:
                    e.set_user_upvoted(t.readBool());
                    break;
                  case 12:
                    e.set_answer_commentid(t.readFixed64String());
                    break;
                  case 13:
                    e.set_answer_actor(t.readUint32());
                    break;
                  case 14:
                    e.set_answer_actor_rank(t.readInt32());
                    break;
                  case 15:
                    e.set_can_post(t.readBool());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = e.comments();
              0 < n.length &&
                t.writeRepeatedMessage(1, n, h.serializeBinaryToWriter),
                0 < (n = e.deleted_comments()).length &&
                  t.writeRepeatedMessage(2, n, h.serializeBinaryToWriter),
                void 0 !== (n = o.Message.getField(e, 3)) &&
                  t.writeFixed64String(3, n),
                void 0 !== (n = o.Message.getField(e, 4)) &&
                  t.writeFixed64String(4, n),
                void 0 !== (n = o.Message.getField(e, 5)) && t.writeInt32(5, n),
                void 0 !== (n = o.Message.getField(e, 6)) && t.writeInt32(6, n),
                void 0 !== (n = o.Message.getField(e, 7)) && t.writeInt32(7, n),
                void 0 !== (n = o.Message.getField(e, 8)) && t.writeInt32(8, n),
                void 0 !== (n = o.Message.getField(e, 9)) &&
                  t.writeRepeatedUint32(9, n),
                void 0 !== (n = o.Message.getField(e, 10)) &&
                  t.writeBool(10, n),
                void 0 !== (n = o.Message.getField(e, 11)) &&
                  t.writeBool(11, n),
                void 0 !== (n = o.Message.getField(e, 12)) &&
                  t.writeFixed64String(12, n),
                void 0 !== (n = o.Message.getField(e, 13)) &&
                  t.writeUint32(13, n),
                void 0 !== (n = o.Message.getField(e, 14)) &&
                  t.writeInt32(14, n),
                void 0 !== (n = o.Message.getField(e, 15)) &&
                  t.writeBool(15, n);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetCommentThread_Response";
            }),
            r
          );
        })(o.Message),
        g = (o.Message,
        (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.gidcomment = function() {
              return o.Message.getField(this, 1);
            }),
            (r.prototype.set_gidcomment = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (r.prototype.commentthreadid = function() {
              return o.Message.getField(this, 2);
            }),
            (r.prototype.set_commentthreadid = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (r.prototype.count = function() {
              return o.Message.getField(this, 3);
            }),
            (r.prototype.set_count = function(e) {
              o.Message.setField(this, 3, e);
            }),
            (r.prototype.upvotes = function() {
              return o.Message.getField(this, 4);
            }),
            (r.prototype.set_upvotes = function(e) {
              o.Message.setField(this, 4, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                gidcomment: o.Message.getField(t, 1),
                commentthreadid: o.Message.getField(t, 2),
                count: o.Message.getField(t, 3),
                upvotes: o.Message.getField(t, 4)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_gidcomment(e.gidcomment),
                t.set_commentthreadid(e.commentthreadid),
                t.set_count(e.count),
                t.set_upvotes(e.upvotes),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_gidcomment(t.readFixed64String());
                    break;
                  case 2:
                    e.set_commentthreadid(t.readFixed64String());
                    break;
                  case 3:
                    e.set_count(t.readInt32());
                    break;
                  case 4:
                    e.set_upvotes(t.readInt32());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = o.Message.getField(e, 1);
              void 0 !== n && t.writeFixed64String(1, n),
                void 0 !== (n = o.Message.getField(e, 2)) &&
                  t.writeFixed64String(2, n),
                void 0 !== (n = o.Message.getField(e, 3)) && t.writeInt32(3, n),
                void 0 !== (n = o.Message.getField(e, 4)) && t.writeInt32(4, n);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_PostCommentToThread_Response";
            }),
            r
          );
        })(o.Message)),
        _ = (o.Message,
        (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {};
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              return new r();
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                t.getFieldNumber();
                t.skipField();
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {}),
            (r.prototype.getClassName = function() {
              return "CCommunity_DeleteCommentFromThread_Response";
            }),
            r
          );
        })(o.Message)),
        v = (o.Message,
        (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.gidcomment = function() {
              return o.Message.getField(this, 1);
            }),
            (r.prototype.set_gidcomment = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (r.prototype.commentthreadid = function() {
              return o.Message.getField(this, 2);
            }),
            (r.prototype.set_commentthreadid = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (r.prototype.count = function() {
              return o.Message.getField(this, 3);
            }),
            (r.prototype.set_count = function(e) {
              o.Message.setField(this, 3, e);
            }),
            (r.prototype.upvotes = function() {
              return o.Message.getField(this, 4);
            }),
            (r.prototype.set_upvotes = function(e) {
              o.Message.setField(this, 4, e);
            }),
            (r.prototype.has_upvoted = function() {
              return o.Message.getField(this, 5);
            }),
            (r.prototype.set_has_upvoted = function(e) {
              o.Message.setField(this, 5, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                gidcomment: o.Message.getField(t, 1),
                commentthreadid: o.Message.getField(t, 2),
                count: o.Message.getField(t, 3),
                upvotes: o.Message.getField(t, 4),
                has_upvoted: o.Message.getField(t, 5)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_gidcomment(e.gidcomment),
                t.set_commentthreadid(e.commentthreadid),
                t.set_count(e.count),
                t.set_upvotes(e.upvotes),
                t.set_has_upvoted(e.has_upvoted),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_gidcomment(t.readUint64String());
                    break;
                  case 2:
                    e.set_commentthreadid(t.readUint64String());
                    break;
                  case 3:
                    e.set_count(t.readUint32());
                    break;
                  case 4:
                    e.set_upvotes(t.readUint32());
                    break;
                  case 5:
                    e.set_has_upvoted(t.readBool());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = o.Message.getField(e, 1);
              void 0 !== n && t.writeUint64String(1, n),
                void 0 !== (n = o.Message.getField(e, 2)) &&
                  t.writeUint64String(2, n),
                void 0 !== (n = o.Message.getField(e, 3)) &&
                  t.writeUint32(3, n),
                void 0 !== (n = o.Message.getField(e, 4)) &&
                  t.writeUint32(4, n),
                void 0 !== (n = o.Message.getField(e, 5)) && t.writeBool(5, n);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_RateCommentThread_Response";
            }),
            r
          );
        })(o.Message)),
        b = (o.Message,
        (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, [5], null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.commentthreadid = function() {
              return o.Message.getField(this, 1);
            }),
            (r.prototype.set_commentthreadid = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (r.prototype.gidcomment = function() {
              return o.Message.getField(this, 2);
            }),
            (r.prototype.set_gidcomment = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (r.prototype.upvotes = function() {
              return o.Message.getField(this, 3);
            }),
            (r.prototype.set_upvotes = function(e) {
              o.Message.setField(this, 3, e);
            }),
            (r.prototype.has_upvoted = function() {
              return o.Message.getField(this, 4);
            }),
            (r.prototype.set_has_upvoted = function(e) {
              o.Message.setField(this, 4, e);
            }),
            (r.prototype.upvoter_accountids = function() {
              return o.Message.getField(this, 5);
            }),
            (r.prototype.set_upvoter_accountids = function(e) {
              o.Message.setField(this, 5, e);
            }),
            (r.prototype.add_upvoter_accountids = function(e, t) {
              o.Message.addToRepeatedField(this, 5, e, t);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                commentthreadid: o.Message.getField(t, 1),
                gidcomment: o.Message.getField(t, 2),
                upvotes: o.Message.getField(t, 3),
                has_upvoted: o.Message.getField(t, 4),
                upvoter_accountids: o.Message.getField(t, 5)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_commentthreadid(e.commentthreadid),
                t.set_gidcomment(e.gidcomment),
                t.set_upvotes(e.upvotes),
                t.set_has_upvoted(e.has_upvoted),
                t.set_upvoter_accountids(e.upvoter_accountids),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_commentthreadid(t.readUint64String());
                    break;
                  case 2:
                    e.set_gidcomment(t.readUint64String());
                    break;
                  case 3:
                    e.set_upvotes(t.readUint32());
                    break;
                  case 4:
                    e.set_has_upvoted(t.readBool());
                    break;
                  case 5:
                    e.add_upvoter_accountids(t.readUint32());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = o.Message.getField(e, 1);
              void 0 !== n && t.writeUint64String(1, n),
                void 0 !== (n = o.Message.getField(e, 2)) &&
                  t.writeUint64String(2, n),
                void 0 !== (n = o.Message.getField(e, 3)) &&
                  t.writeUint32(3, n),
                void 0 !== (n = o.Message.getField(e, 4)) && t.writeBool(4, n),
                void 0 !== (n = o.Message.getField(e, 5)) &&
                  t.writeRepeatedUint32(5, n);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetCommentThreadRatings_Response";
            }),
            r
          );
        })(o.Message)),
        y = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.announcementid = function() {
              return o.Message.getField(this, 1);
            }),
            (r.prototype.set_announcementid = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (r.prototype.vote_up = function() {
              return o.Message.getField(this, 2);
            }),
            (r.prototype.set_vote_up = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (r.prototype.clan_accountid = function() {
              return o.Message.getField(this, 3);
            }),
            (r.prototype.set_clan_accountid = function(e) {
              o.Message.setField(this, 3, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                announcementid: o.Message.getField(t, 1),
                vote_up: o.Message.getField(t, 2),
                clan_accountid: o.Message.getField(t, 3)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_announcementid(e.announcementid),
                t.set_vote_up(e.vote_up),
                t.set_clan_accountid(e.clan_accountid),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_announcementid(t.readUint64String());
                    break;
                  case 2:
                    e.set_vote_up(t.readBool());
                    break;
                  case 3:
                    e.set_clan_accountid(t.readUint32());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = o.Message.getField(e, 1);
              void 0 !== n && t.writeUint64String(1, n),
                void 0 !== (n = o.Message.getField(e, 2)) && t.writeBool(2, n),
                void 0 !== (n = o.Message.getField(e, 3)) &&
                  t.writeUint32(3, n);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_RateClanAnnouncement_Request";
            }),
            r
          );
        })(o.Message),
        M = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {};
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              return new r();
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                t.getFieldNumber();
                t.skipField();
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {}),
            (r.prototype.getClassName = function() {
              return "CCommunity_RateClanAnnouncement_Response";
            }),
            r
          );
        })(o.Message),
        w = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.announcementid = function() {
              return o.Message.getField(this, 1);
            }),
            (r.prototype.set_announcementid = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = { announcementid: o.Message.getField(t, 1) };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return t.set_announcementid(e.announcementid), t;
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_announcementid(t.readUint64String());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = o.Message.getField(e, 1);
              void 0 !== n && t.writeUint64String(1, n);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetClanAnnouncementVoteForUser_Request";
            }),
            r
          );
        })(o.Message),
        O = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.voted_up = function() {
              return o.Message.getField(this, 1);
            }),
            (r.prototype.set_voted_up = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (r.prototype.voted_down = function() {
              return o.Message.getField(this, 2);
            }),
            (r.prototype.set_voted_down = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                voted_up: o.Message.getField(t, 1),
                voted_down: o.Message.getField(t, 2)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_voted_up(e.voted_up), t.set_voted_down(e.voted_down), t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_voted_up(t.readBool());
                    break;
                  case 2:
                    e.set_voted_down(t.readBool());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = o.Message.getField(e, 1);
              void 0 !== n && t.writeBool(1, n),
                void 0 !== (n = o.Message.getField(e, 2)) && t.writeBool(2, n);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetClanAnnouncementVoteForUser_Response";
            }),
            r
          );
        })(o.Message),
        F = (o.Message,
        (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, [1], null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.avatars = function() {
              return o.Message.getRepeatedWrapperField(this, E, 1);
            }),
            (r.prototype.set_avatars = function(e) {
              o.Message.setRepeatedWrapperField(this, 1, e);
            }),
            (r.prototype.add_avatars = function(e, t) {
              return o.Message.addToRepeatedWrapperField(this, 1, e, E, t);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                avatars: o.Message.toObjectList(t.avatars(), E.toObject, e)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_avatars(
                  (Array.isArray(e.avatars) ? e.avatars : []).map(function(e) {
                    return E.fromObject(e);
                  })
                ),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    var n = new E();
                    t.readMessage(n, E.deserializeBinaryFromReader),
                      e.add_avatars(n);
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = e.avatars();
              0 < n.length &&
                t.writeRepeatedMessage(1, n, E.serializeBinaryToWriter);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetAvatarHistory_Response";
            }),
            r
          );
        })(o.Message)),
        E = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.avatar_sha1 = function() {
              return o.Message.getField(this, 1);
            }),
            (r.prototype.set_avatar_sha1 = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (r.prototype.user_uploaded = function() {
              return o.Message.getField(this, 2);
            }),
            (r.prototype.set_user_uploaded = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (r.prototype.timestamp = function() {
              return o.Message.getField(this, 3);
            }),
            (r.prototype.set_timestamp = function(e) {
              o.Message.setField(this, 3, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                avatar_sha1: o.Message.getField(t, 1),
                user_uploaded: o.Message.getField(t, 2),
                timestamp: o.Message.getField(t, 3)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_avatar_sha1(e.avatar_sha1),
                t.set_user_uploaded(e.user_uploaded),
                t.set_timestamp(e.timestamp),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_avatar_sha1(t.readString());
                    break;
                  case 2:
                    e.set_user_uploaded(t.readBool());
                    break;
                  case 3:
                    e.set_timestamp(t.readUint32());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = o.Message.getField(e, 1);
              void 0 !== n && t.writeString(1, n),
                void 0 !== (n = o.Message.getField(e, 2)) && t.writeBool(2, n),
                void 0 !== (n = o.Message.getField(e, 3)) &&
                  t.writeUint32(3, n);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetAvatarHistory_Response_AvatarData";
            }),
            r
          );
        })(o.Message),
        S = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, [2], null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.priority = function() {
              return o.Message.getField(this, 1);
            }),
            (r.prototype.set_priority = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (r.prototype.appid = function() {
              return o.Message.getField(this, 2);
            }),
            (r.prototype.set_appid = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (r.prototype.add_appid = function(e, t) {
              o.Message.addToRepeatedField(this, 2, e, t);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                priority: o.Message.getField(t, 1),
                appid: o.Message.getField(t, 2)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return t.set_priority(e.priority), t.set_appid(e.appid), t;
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_priority(t.readUint32());
                    break;
                  case 2:
                    e.add_appid(t.readUint32());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = o.Message.getField(e, 1);
              void 0 !== n && t.writeUint32(1, n),
                void 0 !== (n = o.Message.getField(e, 2)) &&
                  t.writeRepeatedUint32(2, n);
            }),
            (r.prototype.getClassName = function() {
              return "CAppPriority";
            }),
            r
          );
        })(o.Message),
        C = (o.Message,
        (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, [1], null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.results = function() {
              return o.Message.getRepeatedWrapperField(this, s.b, 1);
            }),
            (r.prototype.set_results = function(e) {
              o.Message.setRepeatedWrapperField(this, 1, e);
            }),
            (r.prototype.add_results = function(e, t) {
              return o.Message.addToRepeatedWrapperField(this, 1, e, s.b, t);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                results: o.Message.toObjectList(t.results(), s.b.toObject, e)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_results(
                  (Array.isArray(e.results) ? e.results : []).map(function(e) {
                    return s.b.fromObject(e);
                  })
                ),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    var n = new s.b();
                    t.readMessage(n, s.b.deserializeBinaryFromReader),
                      e.add_results(n);
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = e.results();
              0 < n.length &&
                t.writeRepeatedMessage(1, n, s.b.serializeBinaryToWriter);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetUserPartnerEventNews_Response";
            }),
            r
          );
        })(o.Message)),
        k = (o.Message,
        (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.clanid = function() {
              return o.Message.getField(this, 1);
            }),
            (r.prototype.set_clanid = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (r.prototype.event_gid = function() {
              return o.Message.getField(this, 2);
            }),
            (r.prototype.set_event_gid = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (r.prototype.announcement_gid = function() {
              return o.Message.getField(this, 3);
            }),
            (r.prototype.set_announcement_gid = function(e) {
              o.Message.setField(this, 3, e);
            }),
            (r.prototype.appid = function() {
              return o.Message.getField(this, 4);
            }),
            (r.prototype.set_appid = function(e) {
              o.Message.setField(this, 4, e);
            }),
            (r.prototype.possible_takeover = function() {
              return o.Message.getField(this, 5);
            }),
            (r.prototype.set_possible_takeover = function(e) {
              o.Message.setField(this, 5, e);
            }),
            (r.prototype.rtime32_last_modified = function() {
              return o.Message.getFieldWithDefault(this, 6, 0);
            }),
            (r.prototype.set_rtime32_last_modified = function(e) {
              o.Message.setField(this, 6, e);
            }),
            (r.prototype.user_app_priority = function() {
              return o.Message.getField(this, 7);
            }),
            (r.prototype.set_user_app_priority = function(e) {
              o.Message.setField(this, 7, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                clanid: o.Message.getField(t, 1),
                event_gid: o.Message.getField(t, 2),
                announcement_gid: o.Message.getField(t, 3),
                appid: o.Message.getField(t, 4),
                possible_takeover: o.Message.getField(t, 5),
                rtime32_last_modified: o.Message.getFieldWithDefault(t, 6, 0),
                user_app_priority: o.Message.getField(t, 7)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_clanid(e.clanid),
                t.set_event_gid(e.event_gid),
                t.set_announcement_gid(e.announcement_gid),
                t.set_appid(e.appid),
                t.set_possible_takeover(e.possible_takeover),
                t.set_rtime32_last_modified(e.rtime32_last_modified),
                t.set_user_app_priority(e.user_app_priority),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_clanid(t.readUint32());
                    break;
                  case 2:
                    e.set_event_gid(t.readFixed64String());
                    break;
                  case 3:
                    e.set_announcement_gid(t.readFixed64String());
                    break;
                  case 4:
                    e.set_appid(t.readUint32());
                    break;
                  case 5:
                    e.set_possible_takeover(t.readBool());
                    break;
                  case 6:
                    e.set_rtime32_last_modified(t.readUint32());
                    break;
                  case 7:
                    e.set_user_app_priority(t.readInt32());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = o.Message.getField(e, 1);
              void 0 !== n && t.writeUint32(1, n),
                void 0 !== (n = o.Message.getField(e, 2)) &&
                  t.writeFixed64String(2, n),
                void 0 !== (n = o.Message.getField(e, 3)) &&
                  t.writeFixed64String(3, n),
                void 0 !== (n = o.Message.getField(e, 4)) &&
                  t.writeUint32(4, n),
                void 0 !== (n = o.Message.getField(e, 5)) && t.writeBool(5, n),
                void 0 !== (n = o.Message.getField(e, 6)) &&
                  t.writeUint32(6, n),
                void 0 !== (n = o.Message.getField(e, 7)) && t.writeInt32(7, n);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_PartnerEventResult";
            }),
            r
          );
        })(o.Message)),
        j = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, [1], null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.results = function() {
              return o.Message.getRepeatedWrapperField(this, k, 1);
            }),
            (r.prototype.set_results = function(e) {
              o.Message.setRepeatedWrapperField(this, 1, e);
            }),
            (r.prototype.add_results = function(e, t) {
              return o.Message.addToRepeatedWrapperField(this, 1, e, k, t);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                results: o.Message.toObjectList(t.results(), k.toObject, e)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_results(
                  (Array.isArray(e.results) ? e.results : []).map(function(e) {
                    return k.fromObject(e);
                  })
                ),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    var n = new k();
                    t.readMessage(n, k.deserializeBinaryFromReader),
                      e.add_results(n);
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = e.results();
              0 < n.length &&
                t.writeRepeatedMessage(1, n, k.serializeBinaryToWriter);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetBestEventsForUser_Response";
            }),
            r
          );
        })(o.Message),
        D = (o.Message,
        (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {};
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              return new r();
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                t.getFieldNumber();
                t.skipField();
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {}),
            (r.prototype.getClassName = function() {
              return "CCommunity_ClearUserPartnerEventsAppPriorities_Response";
            }),
            r
          );
        })(o.Message)),
        B = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.appid = function() {
              return o.Message.getField(this, 1);
            }),
            (r.prototype.set_appid = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (r.prototype.user_app_priority = function() {
              return o.Message.getField(this, 2);
            }),
            (r.prototype.set_user_app_priority = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                appid: o.Message.getField(t, 1),
                user_app_priority: o.Message.getField(t, 2)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_appid(e.appid),
                t.set_user_app_priority(e.user_app_priority),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_appid(t.readUint32());
                    break;
                  case 2:
                    e.set_user_app_priority(t.readInt32());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = o.Message.getField(e, 1);
              void 0 !== n && t.writeUint32(1, n),
                void 0 !== (n = o.Message.getField(e, 2)) && t.writeInt32(2, n);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_PartnerEventsAppPriority";
            }),
            r
          );
        })(o.Message),
        R = (o.Message,
        (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, [1], null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.priorities = function() {
              return o.Message.getRepeatedWrapperField(this, B, 1);
            }),
            (r.prototype.set_priorities = function(e) {
              o.Message.setRepeatedWrapperField(this, 1, e);
            }),
            (r.prototype.add_priorities = function(e, t) {
              return o.Message.addToRepeatedWrapperField(this, 1, e, B, t);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                priorities: o.Message.toObjectList(
                  t.priorities(),
                  B.toObject,
                  e
                )
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_priorities(
                  (Array.isArray(e.priorities) ? e.priorities : []).map(
                    function(e) {
                      return B.fromObject(e);
                    }
                  )
                ),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    var n = new B();
                    t.readMessage(n, B.deserializeBinaryFromReader),
                      e.add_priorities(n);
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = e.priorities();
              0 < n.length &&
                t.writeRepeatedMessage(1, n, B.serializeBinaryToWriter);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetUserPartnerEventsAppPriorities_Response";
            }),
            r
          );
        })(o.Message)),
        I = (o.Message,
        (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {};
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              return new r();
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                t.getFieldNumber();
                t.skipField();
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {}),
            (r.prototype.getClassName = function() {
              return "CCommunity_ClearSinglePartnerEventsAppPriority_Response";
            }),
            r
          );
        })(o.Message)),
        x = (o.Message,
        (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {};
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              return new r();
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                t.getFieldNumber();
                t.skipField();
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {}),
            (r.prototype.getClassName = function() {
              return "CCommunity_PartnerEventsShowMoreForApp_Response";
            }),
            r
          );
        })(o.Message)),
        A = (o.Message,
        (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {};
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              return new r();
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                t.getFieldNumber();
                t.skipField();
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {}),
            (r.prototype.getClassName = function() {
              return "CCommunity_PartnerEventsShowLessForApp_Response";
            }),
            r
          );
        })(o.Message)),
        T = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, [1], null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.markings = function() {
              return o.Message.getRepeatedWrapperField(this, L, 1);
            }),
            (r.prototype.set_markings = function(e) {
              o.Message.setRepeatedWrapperField(this, 1, e);
            }),
            (r.prototype.add_markings = function(e, t) {
              return o.Message.addToRepeatedWrapperField(this, 1, e, L, t);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                markings: o.Message.toObjectList(t.markings(), L.toObject, e)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_markings(
                  (Array.isArray(e.markings) ? e.markings : []).map(function(
                    e
                  ) {
                    return L.fromObject(e);
                  })
                ),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    var n = new L();
                    t.readMessage(n, L.deserializeBinaryFromReader),
                      e.add_markings(n);
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = e.markings();
              0 < n.length &&
                t.writeRepeatedMessage(1, n, L.serializeBinaryToWriter);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_MarkPartnerEventsForUser_Request";
            }),
            r
          );
        })(o.Message),
        L = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.clanid = function() {
              return o.Message.getField(this, 1);
            }),
            (r.prototype.set_clanid = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (r.prototype.event_gid = function() {
              return o.Message.getField(this, 2);
            }),
            (r.prototype.set_event_gid = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (r.prototype.display_location = function() {
              return o.Message.getField(this, 3);
            }),
            (r.prototype.set_display_location = function(e) {
              o.Message.setField(this, 3, e);
            }),
            (r.prototype.mark_shown = function() {
              return o.Message.getField(this, 4);
            }),
            (r.prototype.set_mark_shown = function(e) {
              o.Message.setField(this, 4, e);
            }),
            (r.prototype.mark_read = function() {
              return o.Message.getField(this, 5);
            }),
            (r.prototype.set_mark_read = function(e) {
              o.Message.setField(this, 5, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                clanid: o.Message.getField(t, 1),
                event_gid: o.Message.getField(t, 2),
                display_location: o.Message.getField(t, 3),
                mark_shown: o.Message.getField(t, 4),
                mark_read: o.Message.getField(t, 5)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_clanid(e.clanid),
                t.set_event_gid(e.event_gid),
                t.set_display_location(e.display_location),
                t.set_mark_shown(e.mark_shown),
                t.set_mark_read(e.mark_read),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_clanid(t.readUint32());
                    break;
                  case 2:
                    e.set_event_gid(t.readFixed64String());
                    break;
                  case 3:
                    e.set_display_location(t.readEnum());
                    break;
                  case 4:
                    e.set_mark_shown(t.readBool());
                    break;
                  case 5:
                    e.set_mark_read(t.readBool());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = o.Message.getField(e, 1);
              void 0 !== n && t.writeUint32(1, n),
                void 0 !== (n = o.Message.getField(e, 2)) &&
                  t.writeFixed64String(2, n),
                void 0 !== (n = o.Message.getField(e, 3)) && t.writeEnum(3, n),
                void 0 !== (n = o.Message.getField(e, 4)) && t.writeBool(4, n),
                void 0 !== (n = o.Message.getField(e, 5)) && t.writeBool(5, n);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_MarkPartnerEventsForUser_Request_PartnerEventMarking";
            }),
            r
          );
        })(o.Message),
        N = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {};
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              return new r();
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                t.getFieldNumber();
                t.skipField();
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {}),
            (r.prototype.getClassName = function() {
              return "CCommunity_MarkPartnerEventsForUser_Response";
            }),
            r
          );
        })(o.Message),
        P = (o.Message,
        (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, [1], null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.events = function() {
              return o.Message.getRepeatedWrapperField(this, z, 1);
            }),
            (r.prototype.set_events = function(e) {
              o.Message.setRepeatedWrapperField(this, 1, e);
            }),
            (r.prototype.add_events = function(e, t) {
              return o.Message.addToRepeatedWrapperField(this, 1, e, z, t);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                events: o.Message.toObjectList(t.events(), z.toObject, e)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_events(
                  (Array.isArray(e.events) ? e.events : []).map(function(e) {
                    return z.fromObject(e);
                  })
                ),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    var n = new z();
                    t.readMessage(n, z.deserializeBinaryFromReader),
                      e.add_events(n);
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = e.events();
              0 < n.length &&
                t.writeRepeatedMessage(1, n, z.serializeBinaryToWriter);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetUserPartnerEventViewStatus_Response";
            }),
            r
          );
        })(o.Message)),
        z = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.event_gid = function() {
              return o.Message.getField(this, 1);
            }),
            (r.prototype.set_event_gid = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (r.prototype.last_shown_time = function() {
              return o.Message.getField(this, 2);
            }),
            (r.prototype.set_last_shown_time = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (r.prototype.last_read_time = function() {
              return o.Message.getField(this, 3);
            }),
            (r.prototype.set_last_read_time = function(e) {
              o.Message.setField(this, 3, e);
            }),
            (r.prototype.clan_account_id = function() {
              return o.Message.getField(this, 4);
            }),
            (r.prototype.set_clan_account_id = function(e) {
              o.Message.setField(this, 4, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                event_gid: o.Message.getField(t, 1),
                last_shown_time: o.Message.getField(t, 2),
                last_read_time: o.Message.getField(t, 3),
                clan_account_id: o.Message.getField(t, 4)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_event_gid(e.event_gid),
                t.set_last_shown_time(e.last_shown_time),
                t.set_last_read_time(e.last_read_time),
                t.set_clan_account_id(e.clan_account_id),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_event_gid(t.readFixed64String());
                    break;
                  case 2:
                    e.set_last_shown_time(t.readUint32());
                    break;
                  case 3:
                    e.set_last_read_time(t.readUint32());
                    break;
                  case 4:
                    e.set_clan_account_id(t.readUint32());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = o.Message.getField(e, 1);
              void 0 !== n && t.writeFixed64String(1, n),
                void 0 !== (n = o.Message.getField(e, 2)) &&
                  t.writeUint32(2, n),
                void 0 !== (n = o.Message.getField(e, 3)) &&
                  t.writeUint32(3, n),
                void 0 !== (n = o.Message.getField(e, 4)) &&
                  t.writeUint32(4, n);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetUserPartnerEventViewStatus_Response_PartnerEvent";
            }),
            r
          );
        })(o.Message);
      ((a = r = r || {}).GetApps = function(e, t) {
        return e.SendMsg("Community.GetApps#1", t, l, { bConstMethod: !0 });
      }),
        (a.GetAppRichPresenceLocalization = function(e, t) {
          return e.SendMsg(
            "Community.GetAppRichPresenceLocalization#1",
            t,
            p,
            {}
          );
        }),
        (a.GetCommentThread = function(e, t) {
          return e.SendMsg("Community.GetCommentThread#1", t, f, {});
        }),
        (a.PostCommentToThread = function(e, t) {
          return e.SendMsg("Community.PostCommentToThread#1", t, g, {});
        }),
        (a.DeleteCommentFromThread = function(e, t) {
          return e.SendMsg("Community.DeleteCommentFromThread#1", t, _, {});
        }),
        (a.RateCommentThread = function(e, t) {
          return e.SendMsg("Community.RateCommentThread#1", t, v, {});
        }),
        (a.GetCommentThreadRatings = function(e, t) {
          return e.SendMsg("Community.GetCommentThreadRatings#1", t, b, {});
        }),
        (a.RateClanAnnouncement = function(e, t) {
          return e.SendMsg("Community.RateClanAnnouncement#1", t, M, {});
        }),
        (a.GetClanAnnouncementVoteForUser = function(e, t) {
          return e.SendMsg(
            "Community.GetClanAnnouncementVoteForUser#1",
            t,
            O,
            {}
          );
        }),
        (a.GetAvatarHistory = function(e, t) {
          return e.SendMsg("Community.GetAvatarHistory#1", t, F, {});
        }),
        (a.GetUserPartnerEventNews = function(e, t) {
          return e.SendMsg("Community.GetUserPartnerEventNews#1", t, C, {
            bConstMethod: !0
          });
        }),
        (a.GetBestEventsForUser = function(e, t) {
          return e.SendMsg("Community.GetBestEventsForUser#1", t, j, {
            bConstMethod: !0
          });
        }),
        (a.MarkPartnerEventsForUser = function(e, t) {
          return e.SendMsg("Community.MarkPartnerEventsForUser#1", t, N, {});
        }),
        (a.GetUserPartnerEventViewStatus = function(e, t) {
          return e.SendMsg("Community.GetUserPartnerEventViewStatus#1", t, P, {
            bConstMethod: !0
          });
        }),
        (a.PartnerEventsShowMoreForApp = function(e, t) {
          return e.SendMsg("Community.PartnerEventsShowMoreForApp#1", t, x, {});
        }),
        (a.PartnerEventsShowLessForApp = function(e, t) {
          return e.SendMsg("Community.PartnerEventsShowLessForApp#1", t, A, {});
        }),
        (a.ClearUserPartnerEventsAppPriorities = function(e, t) {
          return e.SendMsg(
            "Community.ClearUserPartnerEventsAppPriorities#1",
            t,
            D,
            {}
          );
        }),
        (a.GetUserPartnerEventsAppPriorities = function(e, t) {
          return e.SendMsg(
            "Community.GetUserPartnerEventsAppPriorities#1",
            t,
            R,
            {}
          );
        }),
        (a.ClearSinglePartnerEventsAppPriority = function(e, t) {
          return e.SendMsg(
            "Community.ClearSinglePartnerEventsAppPriority#1",
            t,
            I,
            {}
          );
        });
    },
    Mgs7: function(e, t, n) {
      "use strict";
      n.d(t, "i", function() {
        return l;
      }),
        n.d(t, "h", function() {
          return u;
        }),
        n.d(t, "k", function() {
          return p;
        }),
        n.d(t, "b", function() {
          return d;
        }),
        n.d(t, "a", function() {
          return m;
        }),
        n.d(t, "e", function() {
          return M;
        }),
        n.d(t, "f", function() {
          return O;
        }),
        n.d(t, "o", function() {
          return F;
        }),
        n.d(t, "c", function() {
          return E;
        }),
        n.d(t, "l", function() {
          return S;
        }),
        n.d(t, "m", function() {
          return C;
        }),
        n.d(t, "d", function() {
          return j;
        }),
        n.d(t, "n", function() {
          return D;
        }),
        n.d(t, "j", function() {
          return x;
        }),
        n.d(t, "g", function() {
          return A.a;
        });
      function r(e) {
        var t = e.value,
          n = e.onChange,
          r = e.disabled;
        return i.a.createElement(
          "div",
          {
            className: Object(c.a)(a.a.Toggle, r && a.a.Disabled),
            onClick: function() {
              return !r && n(!t);
            }
          },
          i.a.createElement("div", { className: a.a.ToggleRail }),
          i.a.createElement("div", {
            className: Object(c.a)(
              a.a.ToggleRail,
              a.a.Highlight,
              t ? a.a.On : a.a.Off
            )
          }),
          i.a.createElement("div", {
            className: Object(c.a)(a.a.ToggleSwitch, t ? a.a.On : a.a.Off)
          })
        );
      }
      var h = n("mrSG"),
        f = n("q1tI"),
        i = n.n(f),
        g = n("6Y59"),
        _ = n("TLQK"),
        o = n("bxiW"),
        c = n("exH9"),
        s = n("umRa"),
        a = n.n(s),
        l = B("DialogHeader"),
        u = (B("DialogSubHeader"), B("DialogFooter")),
        p = B("DialogLabel _DialogLayout"),
        d = B("DialogBodyText"),
        m = B("DialogBody"),
        v = (B("DialogInnerBody"), B("DialogBodyNotificationBar")),
        b = B("DialogTwoColLayout _DialogColLayout"),
        y = B("DialogThreeColLayout _DialogColLayout");
      B("DialogTwoThirdColLayout _DialogColLayout"),
        B("DialogColumn _DialogLayout");
      function M(e) {
        var t = e.children,
          n = e.bCenterVertically,
          r = Object(h.f)(e, ["children", "bCenterVertically"]),
          i =
            "DialogContent _DialogLayout" +
            (e.className ? " " + e.className : "");
        return (
          n && (i += " _DialogCenterVertically"),
          f.createElement(
            "div",
            Object(h.a)({}, r, { className: i }),
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
          Object(h.c)([o.a], t.prototype, "OnSubmit", null),
          t
        );
      })(f.Component);
      function O(e) {
        var t = e.classNameContent,
          n = e.bCenterVertically,
          r = Object(h.f)(e, ["classNameContent", "bCenterVertically"]);
        return f.createElement(
          M,
          { className: t, bCenterVertically: n },
          f.createElement(w, Object(h.a)({}, r))
        );
      }
      function F(e) {
        e.svgicon;
        var t,
          n = Object(h.f)(e, ["svgicon"]),
          r =
            "DialogButton _DialogLayout Primary" +
            (e.className ? " " + e.className : ""),
          i = void 0 !== e.svgicon;
        return (
          i && ((r += " hasSVGIcon"), (t = e.svgicon)),
          f.createElement(
            "button",
            Object(h.a)({ type: e.onClick ? "button" : "submit" }, n, {
              className: r
            }),
            i && f.createElement(t, null),
            e.children
          )
        );
      }
      function E(e) {
        e.svgicon;
        var t,
          n = Object(h.f)(e, ["svgicon"]),
          r =
            "DialogButton _DialogLayout Secondary" +
            (e.className ? " " + e.className : ""),
          i = void 0 !== e.svgicon;
        return (
          i && ((r += " hasSVGIcon"), (t = e.svgicon)),
          f.createElement(
            "button",
            Object(h.a)({ type: "button" }, n, { className: r }),
            i && f.createElement(t, null),
            e.children
          )
        );
      }
      function S(e) {
        return f.createElement(
          b,
          null,
          f.createElement(
            F,
            { onClick: e.onOK, disabled: e.bOKDisabled },
            e.strOKText || Object(_.d)("#Button_Confirm"),
            " "
          ),
          f.createElement(
            E,
            { onClick: e.onCancel },
            e.strCancelText || Object(_.d)("#Button_Cancel")
          )
        );
      }
      function C(e) {
        return f.createElement(
          y,
          null,
          f.createElement(
            F,
            { onClick: e.onOK, disabled: e.bOKDisabled },
            e.strOKText || Object(_.d)("#Button_Confirm"),
            " "
          ),
          f.createElement(
            F,
            { onClick: e.onUpdate, disabled: e.bUpdateDisabled },
            e.strUpdateText || Object(_.d)("#Button_Update"),
            " "
          ),
          f.createElement(
            E,
            { onClick: e.onCancel },
            e.strCancelText || Object(_.d)("#Button_Cancel")
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
            Object(h.c)([o.a], e.prototype, "Toggle", null),
            Object(h.c)([o.a], e.prototype, "KeyDown", null),
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
                        f.createElement(g.g, {
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
                      f.createElement(g.g, null)
                    )
              );
            }),
            t
          );
        })(k),
        D = (function(e) {
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
                          Object(_.d)("#Dialog_Off")
                        ),
                        f.createElement(
                          "div",
                          {
                            className:
                              "DialogOnOffToggle_Option On" +
                              (this.state.checked ? " Active" : "")
                          },
                          Object(_.d)("#Dialog_On")
                        )
                      )
                )
              );
            }),
            Object(h.c)([o.a], t.prototype, "OnOffKeyDown", null),
            Object(h.c)([o.a], t.prototype, "OnNewUIToggle", null),
            t
          );
        })(k);
      function B(n) {
        return function(e) {
          var t = n + (e.className ? " " + e.className : "");
          return f.createElement("div", Object(h.a)({}, e, { className: t }));
        };
      }
      var R = n("hJxo"),
        I = n("r64O"),
        x = (function(n) {
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
              Object(I.a)(
                !(e.bShowClearAction || e.bAlwaysShowClearAction) || e.onChange,
                "In order for bShowClearAction to work correctly, you should be handling onChange and passing value to the Dialog.Input."
              );
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = e.label,
                n = e.explainer,
                r = (e.requiredLabel, e.bShowCopyAction),
                i = e.bShowClearAction,
                o = e.bAlwaysShowClearAction,
                s = e.bIsPassword,
                a = (e.rangeMin,
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
                  (a.className ? " " + a.className : ""),
                l = "copiedAnimation",
                u = this.state.m_bCompletedCopiedAnimation;
              this.m_CopiedAnimation &&
                (l = "copiedAnimation animationPlaying"),
                u && (l = "copiedAnimation animationComplete");
              var p = {};
              void 0 !== this.state.m_CopiedYPos &&
                (p.transform = "translateY(" + this.state.m_CopiedYPos + "px)");
              var d = void 0;
              n &&
                (d = f.createElement(
                  "div",
                  { className: "DialogLabelExplainer" },
                  n
                ));
              var m = f.createElement(
                f.Fragment,
                null,
                f.createElement(
                  "div",
                  { className: "DialogInput_Wrapper _DialogLayout" },
                  f.createElement(
                    "input",
                    Object(h.a)({ type: s ? "password" : "text" }, a, {
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
                        E,
                        {
                          className: "DialogInput_CopyAction Primary",
                          onClick: this.OnCopyClick
                        },
                        Object(_.d)("#Button_CopyLink")
                      ),
                      f.createElement(
                        "div",
                        { style: p, className: l },
                        "Link Copied"
                      )
                    ),
                  (o || (i && a.value)) &&
                    f.createElement(
                      "div",
                      {
                        className: "DialogInput_ClearAction",
                        onClick: this.OnClearClick
                      },
                      f.createElement(g.J, null)
                    )
                ),
                d
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
                      m,
                      this.state.m_bNumberBelowMinRange
                        ? f.createElement(
                            "div",
                            null,
                            " ",
                            Object(_.d)("#Input_Error_NumberTooSmall"),
                            " "
                          )
                        : null,
                      this.state.m_bNumberAboveMaxRange
                        ? f.createElement(
                            "div",
                            null,
                            " ",
                            Object(_.d)("#Input_Error_NumberTooLarge"),
                            " "
                          )
                        : null,
                      this.state.m_bIsInvalidURL
                        ? f.createElement(
                            "div",
                            null,
                            " ",
                            Object(_.d)("#Input_Error_MustBeURL"),
                            " "
                          )
                        : null,
                      this.state.m_bIsInvalidEmail
                        ? f.createElement(
                            "div",
                            null,
                            " ",
                            Object(_.d)("#Input_Error_MustBeEmail"),
                            " "
                          )
                        : null,
                      this.state.m_bIsNotNumeric
                        ? f.createElement(
                            "div",
                            null,
                            " ",
                            Object(_.d)("#Input_Error_MustBeNumber"),
                            " "
                          )
                        : null
                    )
                  )
                : m;
            }),
            Object(h.c)([o.a], e.prototype, "OnInputRef", null),
            Object(h.c)([o.a], e.prototype, "OnChanged", null),
            Object(h.c)([o.a], e.prototype, "OnCopyClick", null),
            Object(h.c)([o.a], e.prototype, "OnClearClick", null),
            e
          );
        })(f.PureComponent),
        A = (f.Component, n("ZApo")),
        T = n("2vnA"),
        L = n("sUmc"),
        N = n("Kw0F"),
        P = n("YyVH"),
        z = n("UPxs");
      f.Component;
      function G(e, t, n, r) {
        return r
          ? n && e > n.left && e < n.right && t > n.top && t < n.bottom
          : n && e >= n.left && e <= n.right && t >= n.top && t <= n.bottom;
      }
      var U = (function() {
          function e() {
            (this.m_embeddedElement = new L.a("DragGhosts")),
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
              N.b(this.m_rgDropRegions, e),
                N.b(this.m_rgActiveDropRegions, e),
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
                i = this.m_activeDraggable.GetDragDocument();
              if (
                ("elementsFromPoint" in i
                  ? (r = i.elementsFromPoint(e, t))
                  : "msElementsFromPoint" in i &&
                    ((n = i.msElementsFromPoint), (r = Array.from(n(e, t)))),
                r)
              ) {
                var o = new Map();
                this.m_rgActiveDropRegions.forEach(function(e) {
                  return o.set(e.GetElement(), e);
                });
                for (var s = 0, a = r; s < a.length; s++) {
                  var c = a[s],
                    l = o.get(c);
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
                i,
                o,
                s,
                a,
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
                    (i = n + u),
                    G(
                      t,
                      n,
                      (o = e.GetDragDocument().body.getBoundingClientRect())
                    ) &&
                      !G(r, i, o, !0) &&
                      ((s = P.c(
                        r,
                        o.left,
                        o.right,
                        o.left - 200,
                        o.right + 200
                      )),
                      (a = P.c(
                        i,
                        o.top,
                        o.bottom,
                        o.top - 100,
                        o.bottom + 100
                      )),
                      (this.m_dragOffWindowTimer = window.setTimeout(
                        function() {
                          e == c.m_activeDraggable && c.OnDrag(e, s, a);
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
            Object(h.c)([o.a], e.prototype, "OnDragGhostRef", null),
            e
          );
        })(),
        W = (function(t) {
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
                i = n[1];
              if (this.m_DragInfo.bStarted) {
                if (this.props.bEnableHTMLDrag && 0 == r && 0 == i) return;
                this.props.coordinator.OnDrag(this, r, i);
              } else
                25 <=
                  Math.pow(r - this.m_DragInfo.startClientX, 2) +
                    Math.pow(i - this.m_DragInfo.startClientY, 2) &&
                  ((this.m_DragInfo.bStarted = !0),
                  this.forceUpdate(),
                  this.props.fnOnDragStart && this.props.fnOnDragStart(),
                  this.props.coordinator.OnDragStart(this),
                  this.props.coordinator.OnDrag(this, r, i));
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
                i = e.children,
                o = Object(h.f)(e, [
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
                s = {},
                a = n || "DialogDraggable";
              return (
                this.m_DragInfo.bStarted
                  ? ((a = Object(c.a)(a, r || "DraggedOut")),
                    t &&
                      (s = {
                        onDrag: this.ProcessDragMove,
                        onDragEnd: this.OnHTMLDragEnd
                      }))
                  : (s = t
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
                  Object(h.a)({ ref: this.m_divRef, className: a }, s, o, {
                    draggable: t
                  }),
                  i
                )
              );
            }),
            (e.prototype.renderDropGhost = function() {
              return this.props.fnRenderDropGhost
                ? this.props.fnRenderDropGhost()
                : f.createElement(H, { elContent: this.GetClone() });
            }),
            (e.prototype.renderDragGhost = function() {
              return this.props.fnRenderDragGhost
                ? this.props.fnRenderDragGhost()
                : f.createElement(V, {
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
            Object(h.c)([o.a], e.prototype, "ProcessDragMove", null),
            Object(h.c)([o.a], e.prototype, "OnMouseDown", null),
            Object(h.c)([o.a], e.prototype, "OnMouseUp", null),
            Object(h.c)([o.a], e.prototype, "OnTouchStart", null),
            Object(h.c)([o.a], e.prototype, "OnTouchEnd", null),
            Object(h.c)([T.h], e.prototype, "ResetDragState", null),
            Object(h.c)([o.a], e.prototype, "OnHTMLDragStart", null),
            Object(h.c)([o.a], e.prototype, "OnHTMLDragEnd", null),
            e
          );
        })(f.Component),
        H = (function(e) {
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
            Object(h.c)([o.a], t.prototype, "OnRef", null),
            t
          );
        })(f.Component),
        V = (function(t) {
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
                t = P.c(
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
            Object(h.c)([o.a], e.prototype, "OnRef", null),
            e
          );
        })(f.Component),
        Y = (function(e) {
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
                return G(e, t, this.GetClientRect());
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
                  i = Object(h.f)(e, [
                    "coordinator",
                    "fnBAcceptDraggable",
                    "fnOnDrop",
                    "fnOnDragEnter",
                    "fnOnDragLeave",
                    "className",
                    "strActiveClassName",
                    "children"
                  ]),
                  o = Object(c.a)(
                    t || "DialogDropRegion",
                    this.state.bDraggableActive && (n || "Active")
                  );
                return f.createElement(
                  z.a,
                  Object(h.a)(
                    {
                      navStop: !!i.onClick,
                      htmlElementRef: this.m_divRef,
                      className: o
                    },
                    i
                  ),
                  this.state.dropGhost,
                  r
                );
              }),
              e
            );
          })(f.Component)
        ),
        K = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return Object(h.d)(t, e), t;
        })(f.Component);
      f.Component, f.Component;
    },
    NcpY: function(e, t, n) {
      e.exports = {
        AppSelector: "labssandbox_AppSelector_1pgZO",
        AppDisplay: "labssandbox_AppDisplay_2XO4P",
        LogoImage: "labssandbox_LogoImage_3dAyv",
        AppName: "labssandbox_AppName_hmKFR",
        AppSelect: "labssandbox_AppSelect_3-kXB",
        Suggestions: "labssandbox_Suggestions_2MtdO",
        Suggestion: "labssandbox_Suggestion_tpLtW",
        SimilarApp: "labssandbox_SimilarApp_2PsH-",
        Spacer: "labssandbox_Spacer_tDH9c",
        Score: "labssandbox_Score_1lIfF",
        App: "labssandbox_App_1VZYE",
        Container: "labssandbox_Container_6h9Y0",
        TopSection: "labssandbox_TopSection_1U77S",
        Header: "labssandbox_Header_2ik9w",
        Body: "labssandbox_Body_1DtzS",
        SandboxSection: "labssandbox_SandboxSection_8ubor",
        LabsSimilarGames: "labssandbox_LabsSimilarGames_lEu0I",
        AppSelection: "labssandbox_AppSelection_iMFZ7",
        SimilarApps: "labssandbox_SimilarApps_3FIt6",
        LabsSimilarity: "labssandbox_LabsSimilarity_1ws_I",
        HorizontalSpacer: "labssandbox_HorizontalSpacer_eu_96",
        LabsPathfinder: "labssandbox_LabsPathfinder_3tOWu",
        SelectEndpoints: "labssandbox_SelectEndpoints_1tLfT",
        ComputeButton: "labssandbox_ComputeButton_1T-bu",
        Disabled: "labssandbox_Disabled_2-44k",
        ProgressMessage: "labssandbox_ProgressMessage_20sjY",
        Path: "labssandbox_Path_3B3IN",
        LabsMixer: "labssandbox_LabsMixer_GNX0k",
        Operand: "labssandbox_Operand_gFTV8",
        OperatorSelect: "labssandbox_OperatorSelect_2X8ZZ",
        AddOperand: "labssandbox_AddOperand_2Boka"
      };
    },
    NtSG: function(e, t, n) {
      "use strict";
      function r(e) {
        return "unknown EMsg ( " + e + " )";
      }
      n.d(t, "a", function() {
        return r;
      });
    },
    "RD/U": function(e, t, n) {
      "use strict";
      n.d(t, "c", function() {
        return r;
      }),
        n.d(t, "d", function() {
          return s;
        }),
        n.d(t, "a", function() {
          return a;
        }),
        n.d(t, "b", function() {
          return l;
        });
      var i = n("mrSG"),
        o = n("hRO2");
      var r = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.v4 = function() {
              return o.Message.getField(this, 1);
            }),
            (r.prototype.set_v4 = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (r.prototype.v6 = function() {
              return o.Message.getField(this, 2);
            }),
            (r.prototype.set_v6 = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                v4: o.Message.getField(t, 1),
                v6: o.Message.getField(t, 2)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return t.set_v4(e.v4), t.set_v6(e.v6), t;
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_v4(t.readFixed32());
                    break;
                  case 2:
                    e.set_v6(t.readBytes());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = o.Message.getField(e, 1);
              void 0 !== n && t.writeFixed32(1, n),
                void 0 !== (n = o.Message.getField(e, 2)) && t.writeBytes(2, n);
            }),
            (r.prototype.getClassName = function() {
              return "CMsgIPAddress";
            }),
            r
          );
        })(o.Message),
        s = (o.Message,
        (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, [27], null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.steamid = function() {
              return o.Message.getField(this, 1);
            }),
            (r.prototype.set_steamid = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (r.prototype.client_sessionid = function() {
              return o.Message.getField(this, 2);
            }),
            (r.prototype.set_client_sessionid = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (r.prototype.routing_appid = function() {
              return o.Message.getField(this, 3);
            }),
            (r.prototype.set_routing_appid = function(e) {
              o.Message.setField(this, 3, e);
            }),
            (r.prototype.jobid_source = function() {
              return o.Message.getFieldWithDefault(
                this,
                10,
                "18446744073709551615"
              );
            }),
            (r.prototype.set_jobid_source = function(e) {
              o.Message.setField(this, 10, e);
            }),
            (r.prototype.jobid_target = function() {
              return o.Message.getFieldWithDefault(
                this,
                11,
                "18446744073709551615"
              );
            }),
            (r.prototype.set_jobid_target = function(e) {
              o.Message.setField(this, 11, e);
            }),
            (r.prototype.target_job_name = function() {
              return o.Message.getField(this, 12);
            }),
            (r.prototype.set_target_job_name = function(e) {
              o.Message.setField(this, 12, e);
            }),
            (r.prototype.seq_num = function() {
              return o.Message.getField(this, 24);
            }),
            (r.prototype.set_seq_num = function(e) {
              o.Message.setField(this, 24, e);
            }),
            (r.prototype.eresult = function() {
              return o.Message.getFieldWithDefault(this, 13, 2);
            }),
            (r.prototype.set_eresult = function(e) {
              o.Message.setField(this, 13, e);
            }),
            (r.prototype.error_message = function() {
              return o.Message.getField(this, 14);
            }),
            (r.prototype.set_error_message = function(e) {
              o.Message.setField(this, 14, e);
            }),
            (r.prototype.ip = function() {
              return o.Message.getField(this, 15);
            }),
            (r.prototype.set_ip = function(e) {
              o.Message.setField(this, 15, e);
            }),
            (r.prototype.ip_v6 = function() {
              return o.Message.getField(this, 29);
            }),
            (r.prototype.set_ip_v6 = function(e) {
              o.Message.setField(this, 29, e);
            }),
            (r.prototype.auth_account_flags = function() {
              return o.Message.getField(this, 16);
            }),
            (r.prototype.set_auth_account_flags = function(e) {
              o.Message.setField(this, 16, e);
            }),
            (r.prototype.token_source = function() {
              return o.Message.getField(this, 22);
            }),
            (r.prototype.set_token_source = function(e) {
              o.Message.setField(this, 22, e);
            }),
            (r.prototype.admin_spoofing_user = function() {
              return o.Message.getField(this, 23);
            }),
            (r.prototype.set_admin_spoofing_user = function(e) {
              o.Message.setField(this, 23, e);
            }),
            (r.prototype.transport_error = function() {
              return o.Message.getFieldWithDefault(this, 17, 1);
            }),
            (r.prototype.set_transport_error = function(e) {
              o.Message.setField(this, 17, e);
            }),
            (r.prototype.messageid = function() {
              return o.Message.getFieldWithDefault(
                this,
                18,
                "18446744073709551615"
              );
            }),
            (r.prototype.set_messageid = function(e) {
              o.Message.setField(this, 18, e);
            }),
            (r.prototype.publisher_group_id = function() {
              return o.Message.getField(this, 19);
            }),
            (r.prototype.set_publisher_group_id = function(e) {
              o.Message.setField(this, 19, e);
            }),
            (r.prototype.sysid = function() {
              return o.Message.getField(this, 20);
            }),
            (r.prototype.set_sysid = function(e) {
              o.Message.setField(this, 20, e);
            }),
            (r.prototype.trace_tag = function() {
              return o.Message.getField(this, 21);
            }),
            (r.prototype.set_trace_tag = function(e) {
              o.Message.setField(this, 21, e);
            }),
            (r.prototype.webapi_key_id = function() {
              return o.Message.getField(this, 25);
            }),
            (r.prototype.set_webapi_key_id = function(e) {
              o.Message.setField(this, 25, e);
            }),
            (r.prototype.is_from_external_source = function() {
              return o.Message.getField(this, 26);
            }),
            (r.prototype.set_is_from_external_source = function(e) {
              o.Message.setField(this, 26, e);
            }),
            (r.prototype.forward_to_sysid = function() {
              return o.Message.getField(this, 27);
            }),
            (r.prototype.set_forward_to_sysid = function(e) {
              o.Message.setField(this, 27, e);
            }),
            (r.prototype.add_forward_to_sysid = function(e, t) {
              o.Message.addToRepeatedField(this, 27, e, t);
            }),
            (r.prototype.cm_sysid = function() {
              return o.Message.getField(this, 28);
            }),
            (r.prototype.set_cm_sysid = function(e) {
              o.Message.setField(this, 28, e);
            }),
            (r.prototype.wg_token = function() {
              return o.Message.getField(this, 30);
            }),
            (r.prototype.set_wg_token = function(e) {
              o.Message.setField(this, 30, e);
            }),
            (r.prototype.launcher_type = function() {
              return o.Message.getFieldWithDefault(this, 31, 0);
            }),
            (r.prototype.set_launcher_type = function(e) {
              o.Message.setField(this, 31, e);
            }),
            (r.prototype.realm = function() {
              return o.Message.getFieldWithDefault(this, 32, 0);
            }),
            (r.prototype.set_realm = function(e) {
              o.Message.setField(this, 32, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                steamid: o.Message.getField(t, 1),
                client_sessionid: o.Message.getField(t, 2),
                routing_appid: o.Message.getField(t, 3),
                jobid_source: o.Message.getFieldWithDefault(
                  t,
                  10,
                  "18446744073709551615"
                ),
                jobid_target: o.Message.getFieldWithDefault(
                  t,
                  11,
                  "18446744073709551615"
                ),
                target_job_name: o.Message.getField(t, 12),
                seq_num: o.Message.getField(t, 24),
                eresult: o.Message.getFieldWithDefault(t, 13, 2),
                error_message: o.Message.getField(t, 14),
                ip: o.Message.getField(t, 15),
                ip_v6: o.Message.getField(t, 29),
                auth_account_flags: o.Message.getField(t, 16),
                token_source: o.Message.getField(t, 22),
                admin_spoofing_user: o.Message.getField(t, 23),
                transport_error: o.Message.getFieldWithDefault(t, 17, 1),
                messageid: o.Message.getFieldWithDefault(
                  t,
                  18,
                  "18446744073709551615"
                ),
                publisher_group_id: o.Message.getField(t, 19),
                sysid: o.Message.getField(t, 20),
                trace_tag: o.Message.getField(t, 21),
                webapi_key_id: o.Message.getField(t, 25),
                is_from_external_source: o.Message.getField(t, 26),
                forward_to_sysid: o.Message.getField(t, 27),
                cm_sysid: o.Message.getField(t, 28),
                wg_token: o.Message.getField(t, 30),
                launcher_type: o.Message.getFieldWithDefault(t, 31, 0),
                realm: o.Message.getFieldWithDefault(t, 32, 0)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_steamid(e.steamid),
                t.set_client_sessionid(e.client_sessionid),
                t.set_routing_appid(e.routing_appid),
                t.set_jobid_source(e.jobid_source),
                t.set_jobid_target(e.jobid_target),
                t.set_target_job_name(e.target_job_name),
                t.set_seq_num(e.seq_num),
                t.set_eresult(e.eresult),
                t.set_error_message(e.error_message),
                t.set_ip(e.ip),
                t.set_ip_v6(e.ip_v6),
                t.set_auth_account_flags(e.auth_account_flags),
                t.set_token_source(e.token_source),
                t.set_admin_spoofing_user(e.admin_spoofing_user),
                t.set_transport_error(e.transport_error),
                t.set_messageid(e.messageid),
                t.set_publisher_group_id(e.publisher_group_id),
                t.set_sysid(e.sysid),
                t.set_trace_tag(e.trace_tag),
                t.set_webapi_key_id(e.webapi_key_id),
                t.set_is_from_external_source(e.is_from_external_source),
                t.set_forward_to_sysid(e.forward_to_sysid),
                t.set_cm_sysid(e.cm_sysid),
                t.set_wg_token(e.wg_token),
                t.set_launcher_type(e.launcher_type),
                t.set_realm(e.realm),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_steamid(t.readFixed64String());
                    break;
                  case 2:
                    e.set_client_sessionid(t.readInt32());
                    break;
                  case 3:
                    e.set_routing_appid(t.readUint32());
                    break;
                  case 10:
                    e.set_jobid_source(t.readFixed64String());
                    break;
                  case 11:
                    e.set_jobid_target(t.readFixed64String());
                    break;
                  case 12:
                    e.set_target_job_name(t.readString());
                    break;
                  case 24:
                    e.set_seq_num(t.readInt32());
                    break;
                  case 13:
                    e.set_eresult(t.readInt32());
                    break;
                  case 14:
                    e.set_error_message(t.readString());
                    break;
                  case 15:
                    e.set_ip(t.readUint32());
                    break;
                  case 29:
                    e.set_ip_v6(t.readBytes());
                    break;
                  case 16:
                    e.set_auth_account_flags(t.readUint32());
                    break;
                  case 22:
                    e.set_token_source(t.readUint32());
                    break;
                  case 23:
                    e.set_admin_spoofing_user(t.readBool());
                    break;
                  case 17:
                    e.set_transport_error(t.readInt32());
                    break;
                  case 18:
                    e.set_messageid(t.readUint64String());
                    break;
                  case 19:
                    e.set_publisher_group_id(t.readUint32());
                    break;
                  case 20:
                    e.set_sysid(t.readUint32());
                    break;
                  case 21:
                    e.set_trace_tag(t.readUint64String());
                    break;
                  case 25:
                    e.set_webapi_key_id(t.readUint32());
                    break;
                  case 26:
                    e.set_is_from_external_source(t.readBool());
                    break;
                  case 27:
                    e.add_forward_to_sysid(t.readUint32());
                    break;
                  case 28:
                    e.set_cm_sysid(t.readUint32());
                    break;
                  case 30:
                    e.set_wg_token(t.readString());
                    break;
                  case 31:
                    e.set_launcher_type(t.readUint32());
                    break;
                  case 32:
                    e.set_realm(t.readUint32());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = o.Message.getField(e, 1);
              void 0 !== n && t.writeFixed64String(1, n),
                void 0 !== (n = o.Message.getField(e, 2)) && t.writeInt32(2, n),
                void 0 !== (n = o.Message.getField(e, 3)) &&
                  t.writeUint32(3, n),
                void 0 !== (n = o.Message.getField(e, 10)) &&
                  t.writeFixed64String(10, n),
                void 0 !== (n = o.Message.getField(e, 11)) &&
                  t.writeFixed64String(11, n),
                void 0 !== (n = o.Message.getField(e, 12)) &&
                  t.writeString(12, n),
                void 0 !== (n = o.Message.getField(e, 24)) &&
                  t.writeInt32(24, n),
                void 0 !== (n = o.Message.getField(e, 13)) &&
                  t.writeInt32(13, n),
                void 0 !== (n = o.Message.getField(e, 14)) &&
                  t.writeString(14, n),
                void 0 !== (n = o.Message.getField(e, 15)) &&
                  t.writeUint32(15, n),
                void 0 !== (n = o.Message.getField(e, 29)) &&
                  t.writeBytes(29, n),
                void 0 !== (n = o.Message.getField(e, 16)) &&
                  t.writeUint32(16, n),
                void 0 !== (n = o.Message.getField(e, 22)) &&
                  t.writeUint32(22, n),
                void 0 !== (n = o.Message.getField(e, 23)) &&
                  t.writeBool(23, n),
                void 0 !== (n = o.Message.getField(e, 17)) &&
                  t.writeInt32(17, n),
                void 0 !== (n = o.Message.getField(e, 18)) &&
                  t.writeUint64String(18, n),
                void 0 !== (n = o.Message.getField(e, 19)) &&
                  t.writeUint32(19, n),
                void 0 !== (n = o.Message.getField(e, 20)) &&
                  t.writeUint32(20, n),
                void 0 !== (n = o.Message.getField(e, 21)) &&
                  t.writeUint64String(21, n),
                void 0 !== (n = o.Message.getField(e, 25)) &&
                  t.writeUint32(25, n),
                void 0 !== (n = o.Message.getField(e, 26)) &&
                  t.writeBool(26, n),
                void 0 !== (n = o.Message.getField(e, 27)) &&
                  t.writeRepeatedUint32(27, n),
                void 0 !== (n = o.Message.getField(e, 28)) &&
                  t.writeUint32(28, n),
                void 0 !== (n = o.Message.getField(e, 30)) &&
                  t.writeString(30, n),
                void 0 !== (n = o.Message.getField(e, 31)) &&
                  t.writeUint32(31, n),
                void 0 !== (n = o.Message.getField(e, 32)) &&
                  t.writeUint32(32, n);
            }),
            (r.prototype.getClassName = function() {
              return "CMsgProtoBufHeader";
            }),
            r
          );
        })(o.Message)),
        a = (o.Message,
        o.Message,
        o.Message,
        (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.appid = function() {
              return o.Message.getField(this, 1);
            }),
            (r.prototype.set_appid = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (r.prototype.name = function() {
              return o.Message.getField(this, 2);
            }),
            (r.prototype.set_name = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (r.prototype.icon = function() {
              return o.Message.getField(this, 3);
            }),
            (r.prototype.set_icon = function(e) {
              o.Message.setField(this, 3, e);
            }),
            (r.prototype.logo = function() {
              return o.Message.getField(this, 4);
            }),
            (r.prototype.set_logo = function(e) {
              o.Message.setField(this, 4, e);
            }),
            (r.prototype.logo_small = function() {
              return o.Message.getField(this, 5);
            }),
            (r.prototype.set_logo_small = function(e) {
              o.Message.setField(this, 5, e);
            }),
            (r.prototype.tool = function() {
              return o.Message.getField(this, 6);
            }),
            (r.prototype.set_tool = function(e) {
              o.Message.setField(this, 6, e);
            }),
            (r.prototype.demo = function() {
              return o.Message.getField(this, 7);
            }),
            (r.prototype.set_demo = function(e) {
              o.Message.setField(this, 7, e);
            }),
            (r.prototype.media = function() {
              return o.Message.getField(this, 8);
            }),
            (r.prototype.set_media = function(e) {
              o.Message.setField(this, 8, e);
            }),
            (r.prototype.community_visible_stats = function() {
              return o.Message.getField(this, 9);
            }),
            (r.prototype.set_community_visible_stats = function(e) {
              o.Message.setField(this, 9, e);
            }),
            (r.prototype.friendly_name = function() {
              return o.Message.getField(this, 10);
            }),
            (r.prototype.set_friendly_name = function(e) {
              o.Message.setField(this, 10, e);
            }),
            (r.prototype.propagation = function() {
              return o.Message.getField(this, 11);
            }),
            (r.prototype.set_propagation = function(e) {
              o.Message.setField(this, 11, e);
            }),
            (r.prototype.has_adult_content = function() {
              return o.Message.getField(this, 12);
            }),
            (r.prototype.set_has_adult_content = function(e) {
              o.Message.setField(this, 12, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                appid: o.Message.getField(t, 1),
                name: o.Message.getField(t, 2),
                icon: o.Message.getField(t, 3),
                logo: o.Message.getField(t, 4),
                logo_small: o.Message.getField(t, 5),
                tool: o.Message.getField(t, 6),
                demo: o.Message.getField(t, 7),
                media: o.Message.getField(t, 8),
                community_visible_stats: o.Message.getField(t, 9),
                friendly_name: o.Message.getField(t, 10),
                propagation: o.Message.getField(t, 11),
                has_adult_content: o.Message.getField(t, 12)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_appid(e.appid),
                t.set_name(e.name),
                t.set_icon(e.icon),
                t.set_logo(e.logo),
                t.set_logo_small(e.logo_small),
                t.set_tool(e.tool),
                t.set_demo(e.demo),
                t.set_media(e.media),
                t.set_community_visible_stats(e.community_visible_stats),
                t.set_friendly_name(e.friendly_name),
                t.set_propagation(e.propagation),
                t.set_has_adult_content(e.has_adult_content),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_appid(t.readUint32());
                    break;
                  case 2:
                    e.set_name(t.readString());
                    break;
                  case 3:
                    e.set_icon(t.readString());
                    break;
                  case 4:
                    e.set_logo(t.readString());
                    break;
                  case 5:
                    e.set_logo_small(t.readString());
                    break;
                  case 6:
                    e.set_tool(t.readBool());
                    break;
                  case 7:
                    e.set_demo(t.readBool());
                    break;
                  case 8:
                    e.set_media(t.readBool());
                    break;
                  case 9:
                    e.set_community_visible_stats(t.readBool());
                    break;
                  case 10:
                    e.set_friendly_name(t.readString());
                    break;
                  case 11:
                    e.set_propagation(t.readString());
                    break;
                  case 12:
                    e.set_has_adult_content(t.readBool());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = o.Message.getField(e, 1);
              void 0 !== n && t.writeUint32(1, n),
                void 0 !== (n = o.Message.getField(e, 2)) &&
                  t.writeString(2, n),
                void 0 !== (n = o.Message.getField(e, 3)) &&
                  t.writeString(3, n),
                void 0 !== (n = o.Message.getField(e, 4)) &&
                  t.writeString(4, n),
                void 0 !== (n = o.Message.getField(e, 5)) &&
                  t.writeString(5, n),
                void 0 !== (n = o.Message.getField(e, 6)) && t.writeBool(6, n),
                void 0 !== (n = o.Message.getField(e, 7)) && t.writeBool(7, n),
                void 0 !== (n = o.Message.getField(e, 8)) && t.writeBool(8, n),
                void 0 !== (n = o.Message.getField(e, 9)) && t.writeBool(9, n),
                void 0 !== (n = o.Message.getField(e, 10)) &&
                  t.writeString(10, n),
                void 0 !== (n = o.Message.getField(e, 11)) &&
                  t.writeString(11, n),
                void 0 !== (n = o.Message.getField(e, 12)) &&
                  t.writeBool(12, n);
            }),
            (r.prototype.getClassName = function() {
              return "CCDDBAppDetailCommon";
            }),
            r
          );
        })(o.Message)),
        c = (o.Message,
        o.Message,
        o.Message,
        (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.clanid = function() {
              return o.Message.getField(this, 1);
            }),
            (r.prototype.set_clanid = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (r.prototype.event_gid = function() {
              return o.Message.getField(this, 2);
            }),
            (r.prototype.set_event_gid = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (r.prototype.announcement_gid = function() {
              return o.Message.getField(this, 3);
            }),
            (r.prototype.set_announcement_gid = function(e) {
              o.Message.setField(this, 3, e);
            }),
            (r.prototype.rtime_start = function() {
              return o.Message.getField(this, 4);
            }),
            (r.prototype.set_rtime_start = function(e) {
              o.Message.setField(this, 4, e);
            }),
            (r.prototype.rtime_end = function() {
              return o.Message.getField(this, 5);
            }),
            (r.prototype.set_rtime_end = function(e) {
              o.Message.setField(this, 5, e);
            }),
            (r.prototype.priority_score = function() {
              return o.Message.getField(this, 6);
            }),
            (r.prototype.set_priority_score = function(e) {
              o.Message.setField(this, 6, e);
            }),
            (r.prototype.type = function() {
              return o.Message.getField(this, 7);
            }),
            (r.prototype.set_type = function(e) {
              o.Message.setField(this, 7, e);
            }),
            (r.prototype.clamp_range_slot = function() {
              return o.Message.getField(this, 8);
            }),
            (r.prototype.set_clamp_range_slot = function(e) {
              o.Message.setField(this, 8, e);
            }),
            (r.prototype.appid = function() {
              return o.Message.getField(this, 9);
            }),
            (r.prototype.set_appid = function(e) {
              o.Message.setField(this, 9, e);
            }),
            (r.prototype.rtime32_last_modified = function() {
              return o.Message.getField(this, 10);
            }),
            (r.prototype.set_rtime32_last_modified = function(e) {
              o.Message.setField(this, 10, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                clanid: o.Message.getField(t, 1),
                event_gid: o.Message.getField(t, 2),
                announcement_gid: o.Message.getField(t, 3),
                rtime_start: o.Message.getField(t, 4),
                rtime_end: o.Message.getField(t, 5),
                priority_score: o.Message.getField(t, 6),
                type: o.Message.getField(t, 7),
                clamp_range_slot: o.Message.getField(t, 8),
                appid: o.Message.getField(t, 9),
                rtime32_last_modified: o.Message.getField(t, 10)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_clanid(e.clanid),
                t.set_event_gid(e.event_gid),
                t.set_announcement_gid(e.announcement_gid),
                t.set_rtime_start(e.rtime_start),
                t.set_rtime_end(e.rtime_end),
                t.set_priority_score(e.priority_score),
                t.set_type(e.type),
                t.set_clamp_range_slot(e.clamp_range_slot),
                t.set_appid(e.appid),
                t.set_rtime32_last_modified(e.rtime32_last_modified),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_clanid(t.readUint32());
                    break;
                  case 2:
                    e.set_event_gid(t.readFixed64String());
                    break;
                  case 3:
                    e.set_announcement_gid(t.readFixed64String());
                    break;
                  case 4:
                    e.set_rtime_start(t.readUint32());
                    break;
                  case 5:
                    e.set_rtime_end(t.readUint32());
                    break;
                  case 6:
                    e.set_priority_score(t.readUint32());
                    break;
                  case 7:
                    e.set_type(t.readUint32());
                    break;
                  case 8:
                    e.set_clamp_range_slot(t.readUint32());
                    break;
                  case 9:
                    e.set_appid(t.readUint32());
                    break;
                  case 10:
                    e.set_rtime32_last_modified(t.readUint32());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = o.Message.getField(e, 1);
              void 0 !== n && t.writeUint32(1, n),
                void 0 !== (n = o.Message.getField(e, 2)) &&
                  t.writeFixed64String(2, n),
                void 0 !== (n = o.Message.getField(e, 3)) &&
                  t.writeFixed64String(3, n),
                void 0 !== (n = o.Message.getField(e, 4)) &&
                  t.writeUint32(4, n),
                void 0 !== (n = o.Message.getField(e, 5)) &&
                  t.writeUint32(5, n),
                void 0 !== (n = o.Message.getField(e, 6)) &&
                  t.writeUint32(6, n),
                void 0 !== (n = o.Message.getField(e, 7)) &&
                  t.writeUint32(7, n),
                void 0 !== (n = o.Message.getField(e, 8)) &&
                  t.writeUint32(8, n),
                void 0 !== (n = o.Message.getField(e, 9)) &&
                  t.writeUint32(9, n),
                void 0 !== (n = o.Message.getField(e, 10)) &&
                  t.writeUint32(10, n);
            }),
            (r.prototype.getClassName = function() {
              return "CClanEventUserNewsTuple";
            }),
            r
          );
        })(o.Message)),
        l = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, [4], null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.rtime_before = function() {
              return o.Message.getField(this, 1);
            }),
            (r.prototype.set_rtime_before = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (r.prototype.rtime_after = function() {
              return o.Message.getField(this, 2);
            }),
            (r.prototype.set_rtime_after = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (r.prototype.qualified = function() {
              return o.Message.getField(this, 3);
            }),
            (r.prototype.set_qualified = function(e) {
              o.Message.setField(this, 3, e);
            }),
            (r.prototype.events = function() {
              return o.Message.getRepeatedWrapperField(this, c, 4);
            }),
            (r.prototype.set_events = function(e) {
              o.Message.setRepeatedWrapperField(this, 4, e);
            }),
            (r.prototype.add_events = function(e, t) {
              return o.Message.addToRepeatedWrapperField(this, 4, e, c, t);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                rtime_before: o.Message.getField(t, 1),
                rtime_after: o.Message.getField(t, 2),
                qualified: o.Message.getField(t, 3),
                events: o.Message.toObjectList(t.events(), c.toObject, e)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_rtime_before(e.rtime_before),
                t.set_rtime_after(e.rtime_after),
                t.set_qualified(e.qualified),
                t.set_events(
                  (Array.isArray(e.events) ? e.events : []).map(function(e) {
                    return c.fromObject(e);
                  })
                ),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_rtime_before(t.readUint32());
                    break;
                  case 2:
                    e.set_rtime_after(t.readUint32());
                    break;
                  case 3:
                    e.set_qualified(t.readUint32());
                    break;
                  case 4:
                    var n = new c();
                    t.readMessage(n, c.deserializeBinaryFromReader),
                      e.add_events(n);
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = o.Message.getField(e, 1);
              void 0 !== n && t.writeUint32(1, n),
                void 0 !== (n = o.Message.getField(e, 2)) &&
                  t.writeUint32(2, n),
                void 0 !== (n = o.Message.getField(e, 3)) &&
                  t.writeUint32(3, n),
                0 < (n = e.events()).length &&
                  t.writeRepeatedMessage(4, n, c.serializeBinaryToWriter);
            }),
            (r.prototype.getClassName = function() {
              return "CClanMatchEventByRange";
            }),
            r
          );
        })(o.Message),
        u = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, [9], null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.gid = function() {
              return o.Message.getField(this, 1);
            }),
            (r.prototype.set_gid = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (r.prototype.clanid = function() {
              return o.Message.getField(this, 2);
            }),
            (r.prototype.set_clanid = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (r.prototype.posterid = function() {
              return o.Message.getField(this, 3);
            }),
            (r.prototype.set_posterid = function(e) {
              o.Message.setField(this, 3, e);
            }),
            (r.prototype.headline = function() {
              return o.Message.getField(this, 4);
            }),
            (r.prototype.set_headline = function(e) {
              o.Message.setField(this, 4, e);
            }),
            (r.prototype.posttime = function() {
              return o.Message.getField(this, 5);
            }),
            (r.prototype.set_posttime = function(e) {
              o.Message.setField(this, 5, e);
            }),
            (r.prototype.updatetime = function() {
              return o.Message.getField(this, 6);
            }),
            (r.prototype.set_updatetime = function(e) {
              o.Message.setField(this, 6, e);
            }),
            (r.prototype.body = function() {
              return o.Message.getField(this, 7);
            }),
            (r.prototype.set_body = function(e) {
              o.Message.setField(this, 7, e);
            }),
            (r.prototype.commentcount = function() {
              return o.Message.getField(this, 8);
            }),
            (r.prototype.set_commentcount = function(e) {
              o.Message.setField(this, 8, e);
            }),
            (r.prototype.tags = function() {
              return o.Message.getField(this, 9);
            }),
            (r.prototype.set_tags = function(e) {
              o.Message.setField(this, 9, e);
            }),
            (r.prototype.add_tags = function(e, t) {
              o.Message.addToRepeatedField(this, 9, e, t);
            }),
            (r.prototype.language = function() {
              return o.Message.getField(this, 10);
            }),
            (r.prototype.set_language = function(e) {
              o.Message.setField(this, 10, e);
            }),
            (r.prototype.hidden = function() {
              return o.Message.getField(this, 11);
            }),
            (r.prototype.set_hidden = function(e) {
              o.Message.setField(this, 11, e);
            }),
            (r.prototype.forum_topic_id = function() {
              return o.Message.getField(this, 12);
            }),
            (r.prototype.set_forum_topic_id = function(e) {
              o.Message.setField(this, 12, e);
            }),
            (r.prototype.event_gid = function() {
              return o.Message.getField(this, 13);
            }),
            (r.prototype.set_event_gid = function(e) {
              o.Message.setField(this, 13, e);
            }),
            (r.prototype.voteupcount = function() {
              return o.Message.getField(this, 14);
            }),
            (r.prototype.set_voteupcount = function(e) {
              o.Message.setField(this, 14, e);
            }),
            (r.prototype.votedowncount = function() {
              return o.Message.getField(this, 15);
            }),
            (r.prototype.set_votedowncount = function(e) {
              o.Message.setField(this, 15, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                gid: o.Message.getField(t, 1),
                clanid: o.Message.getField(t, 2),
                posterid: o.Message.getField(t, 3),
                headline: o.Message.getField(t, 4),
                posttime: o.Message.getField(t, 5),
                updatetime: o.Message.getField(t, 6),
                body: o.Message.getField(t, 7),
                commentcount: o.Message.getField(t, 8),
                tags: o.Message.getField(t, 9),
                language: o.Message.getField(t, 10),
                hidden: o.Message.getField(t, 11),
                forum_topic_id: o.Message.getField(t, 12),
                event_gid: o.Message.getField(t, 13),
                voteupcount: o.Message.getField(t, 14),
                votedowncount: o.Message.getField(t, 15)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_gid(e.gid),
                t.set_clanid(e.clanid),
                t.set_posterid(e.posterid),
                t.set_headline(e.headline),
                t.set_posttime(e.posttime),
                t.set_updatetime(e.updatetime),
                t.set_body(e.body),
                t.set_commentcount(e.commentcount),
                t.set_tags(e.tags),
                t.set_language(e.language),
                t.set_hidden(e.hidden),
                t.set_forum_topic_id(e.forum_topic_id),
                t.set_event_gid(e.event_gid),
                t.set_voteupcount(e.voteupcount),
                t.set_votedowncount(e.votedowncount),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_gid(t.readUint64String());
                    break;
                  case 2:
                    e.set_clanid(t.readUint64String());
                    break;
                  case 3:
                    e.set_posterid(t.readUint64String());
                    break;
                  case 4:
                    e.set_headline(t.readString());
                    break;
                  case 5:
                    e.set_posttime(t.readUint32());
                    break;
                  case 6:
                    e.set_updatetime(t.readUint32());
                    break;
                  case 7:
                    e.set_body(t.readString());
                    break;
                  case 8:
                    e.set_commentcount(t.readInt32());
                    break;
                  case 9:
                    e.add_tags(t.readString());
                    break;
                  case 10:
                    e.set_language(t.readInt32());
                    break;
                  case 11:
                    e.set_hidden(t.readBool());
                    break;
                  case 12:
                    e.set_forum_topic_id(t.readFixed64String());
                    break;
                  case 13:
                    e.set_event_gid(t.readFixed64String());
                    break;
                  case 14:
                    e.set_voteupcount(t.readInt32());
                    break;
                  case 15:
                    e.set_votedowncount(t.readInt32());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n = o.Message.getField(e, 1);
              void 0 !== n && t.writeUint64String(1, n),
                void 0 !== (n = o.Message.getField(e, 2)) &&
                  t.writeUint64String(2, n),
                void 0 !== (n = o.Message.getField(e, 3)) &&
                  t.writeUint64String(3, n),
                void 0 !== (n = o.Message.getField(e, 4)) &&
                  t.writeString(4, n),
                void 0 !== (n = o.Message.getField(e, 5)) &&
                  t.writeUint32(5, n),
                void 0 !== (n = o.Message.getField(e, 6)) &&
                  t.writeUint32(6, n),
                void 0 !== (n = o.Message.getField(e, 7)) &&
                  t.writeString(7, n),
                void 0 !== (n = o.Message.getField(e, 8)) && t.writeInt32(8, n),
                void 0 !== (n = o.Message.getField(e, 9)) &&
                  t.writeRepeatedString(9, n),
                void 0 !== (n = o.Message.getField(e, 10)) &&
                  t.writeInt32(10, n),
                void 0 !== (n = o.Message.getField(e, 11)) &&
                  t.writeBool(11, n),
                void 0 !== (n = o.Message.getField(e, 12)) &&
                  t.writeFixed64String(12, n),
                void 0 !== (n = o.Message.getField(e, 13)) &&
                  t.writeFixed64String(13, n),
                void 0 !== (n = o.Message.getField(e, 14)) &&
                  t.writeInt32(14, n),
                void 0 !== (n = o.Message.getField(e, 15)) &&
                  t.writeInt32(15, n);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_ClanAnnouncementInfo";
            }),
            r
          );
        })(o.Message);
      o.Message, o.Message;
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
      function i(e) {
        var t = o(e);
        return n(t);
      }
      function o(e) {
        if (n.o(r, e)) return r[e];
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      (i.keys = function() {
        return Object.keys(r);
      }),
        (i.resolve = o),
        ((e.exports = i).id = "RnhZ");
    },
    TLQK: function(e, t, n) {
      "use strict";
      n.d(t, "d", function() {
        return s;
      }),
        n.d(t, "k", function() {
          return a;
        }),
        n.d(t, "b", function() {
          return c;
        }),
        n.d(t, "a", function() {
          return p;
        }),
        n.d(t, "c", function() {
          return d;
        });
      var l = n("mrSG"),
        u = n("q1tI"),
        r = n("mgoM"),
        i = n("lkRc"),
        o = (n("r64O"), n("Z1oF"));
      function s(e) {
        for (var r = [], t = 1; t < arguments.length; t++)
          r[t - 1] = arguments[t];
        var n = d.LocalizeString(e);
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
      function a(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        var r = d.LocalizeString(e);
        if (!r) return e;
        for (var i, o = [], s = /(.*?)%(\d+)\$s/g, a = 0; (i = s.exec(r)); ) {
          (a += i[0].length), o.push(i[1]);
          var c = parseInt(i[2]);
          1 <= c && c <= t.length && o.push(t[c - 1]);
        }
        return (
          o.push(r.substr(a)),
          u.createElement.apply(u, Object(l.g)([u.Fragment, null], o))
        );
      }
      n.d(t, "e", function() {
        return o.a;
      }),
        n.d(t, "f", function() {
          return o.b;
        }),
        n.d(t, "h", function() {
          return o.d;
        }),
        n.d(t, "i", function() {
          return o.e;
        }),
        n.d(t, "j", function() {
          return o.f;
        }),
        n.d(t, "l", function() {
          return o.h;
        }),
        n.d(t, "m", function() {
          return o.i;
        }),
        n.d(t, "n", function() {
          return o.j;
        }),
        n.d(t, "g", function() {
          return o.c;
        });
      var c = {
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
      function p() {
        var e = "koreana" == i.c.LANGUAGE ? "korean" : i.c.LANGUAGE;
        return c[e] || null;
      }
      var d = new ((function() {
        function e() {
          (this.m_mapTokens = new Map()),
            (this.m_mapFallbackTokens = new Map());
        }
        return (
          (e.prototype.InitFromObjects = function(e, t, n, r, i) {
            i || this.m_mapTokens.clear();
            var o = Object(l.a)(Object(l.a)({}, n || {}), e),
              s = Object(l.a)(Object(l.a)({}, r || {}), t || {});
            this.AddTokens(o, s);
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
              t.push(Object(r.d)(i.c.LANGUAGE)),
              (i.c.SUPPORTED_LANGUAGES || []).forEach(function(e) {
                e.value != i.c.LANGUAGE && t.push(Object(r.d)(e.value));
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
      window.LocalizationManager = d;
    },
    TtDX: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return u;
      });
      var r = n("mrSG"),
        i = n("q1tI"),
        o = n("X3Ds"),
        s = n("y+6m"),
        l = n("sUmc"),
        a = n("2vnA"),
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
          i = void 0,
          o = void 0,
          s = t;
        if (s.preventDefault && s.stopPropagation) {
          if (s.shiftKey) return null;
          s.preventDefault(),
            s.stopPropagation(),
            (r = s.currentTarget),
            (i = s.clientX),
            (o = s.clientY);
        } else r = t;
        var a = new d(e, r, i, o, n);
        return a.Show(), a;
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
                ? (this.m_popupContextMenu = new s.a(
                    e,
                    t,
                    c.GetBrowserInfoForPopup(this.m_ownerWindow)
                  ))
                : ((this.m_embeddedElementInstance = Object(l.b)(
                    this.m_ownerWindow.document
                  )),
                  (this.m_rctElement = i.createElement(s.f, e, t)));
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
                  (this.m_submenu = new m(this, t(), e)),
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
                : o.c(this.m_popupContextMenu.root_element, e);
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
            Object(r.c)([a.x], e.prototype, "m_bVisible", void 0),
            e
          );
        })(c),
        d = (function(a) {
          function c(e, t, n, r, i) {
            var o = a.call(this, t.ownerDocument.defaultView) || this;
            c.sm_iActiveContextMenuInstance &&
              c.sm_iActiveContextMenuInstance.Hide(),
              ((c.sm_iActiveContextMenuInstance = o).m_options = i || {});
            var s = {
              element: t,
              clientX: n,
              clientY: r,
              instance: o,
              options: o.m_options,
              fnOnMenuItemSelected: function() {
                o.Hide();
              }
            };
            return o.Init(s, e), o;
          }
          return (
            Object(r.d)(c, a),
            (c.prototype.Show = function() {
              this.m_options.bDisableMouseOverlay ||
                ((this.m_embeddedElementInstanceOverlay = Object(l.b)(
                  this.m_ownerWindow.document
                )),
                this.m_embeddedElementInstanceOverlay.Show(
                  i.createElement(s.e)
                )),
                a.prototype.Show.call(this);
            }),
            (c.prototype.Hide = function() {
              this.m_embeddedElementInstanceOverlay &&
                this.m_embeddedElementInstanceOverlay.Hide(0),
                a.prototype.Hide.call(this);
            }),
            c
          );
        })(p),
        m = (function(o) {
          function e(e, t, n) {
            var r = o.call(this, n.ownerDocument.defaultView) || this;
            (r.m_parentInstance = e),
              (r.m_options = {
                bOverlapVertical: !0,
                bUseWebStyles: e.options.bUseWebStyles,
                strClassName: e.options.strClassName,
                bFitToWindow: e.options.bFitToWindow,
                bShiftToFitWindow: e.options.bShiftToFitWindow
              });
            var i = {
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
            return r.Init(i, t), r;
          }
          return (
            Object(r.d)(e, o),
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
      n.d(t, "a", function() {
        return S;
      });
      var l = n("mrSG"),
        u = n("q1tI"),
        r = n("TyAF"),
        p = n("exH9"),
        i = n("bxiW"),
        H = { x: "y", y: "x" };
      function V() {
        return { x: 0, y: 0 };
      }
      function x(e, t) {
        return e.x * t.x + e.y * t.y;
      }
      function Y(e, t) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function K(e, t) {
        return { x: e.x + t.x, y: e.y + t.y };
      }
      function q(e, t) {
        return { x: e.x * t, y: e.y * t };
      }
      function o(e) {
        return (e.min + e.max) / 2;
      }
      function X(e, t) {
        return !(e.max < t.min || t.max < e.min);
      }
      var m,
        s,
        h,
        a,
        J,
        c,
        A = n("Kw0F"),
        Q = n("X3Ds"),
        d = "Focusable",
        f = "FocusGroup",
        g = "NavArea";
      function _() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      }
      function Z(e) {
        return null != e && void 0 !== e.focus;
      }
      function $(e) {
        return {
          x: { min: (t = e.getBoundingClientRect()).left, max: t.right },
          y: { min: t.top, max: t.bottom }
        };
        var t;
      }
      function ee(e) {
        return { x: o((t = $(e)).x), y: o(t.y) };
        var t;
      }
      function v(e, t) {
        e && ("function" == typeof e ? e(t) : (e.current = t));
      }
      function b(e, t, n) {
        var r = e,
          i = null != r.getAttribute("data-nav"),
          o = i ? r.getAttribute("data-nav-scroll-axes") : void 0;
        if (i && o !== h.XY && o !== t) return m.None;
        var s =
            "x" === t
              ? [r.scrollLeft, r.scrollWidth, r.clientWidth]
              : [r.scrollTop, r.scrollHeight, r.clientHeight],
          a = s[0],
          c = s[1],
          l = s[2],
          u = -1 === n ? Math.abs(a) < 1 : Math.abs(a + l - c) <= 1;
        if (i) return u ? m.AtEnd : m.Scrollable;
        if (!u && c <= l) return m.None;
        var p = getComputedStyle(r),
          d = "x" === t ? p.overflowX : p.overflowY;
        return "auto" === d || "scroll" === d
          ? u
            ? m.AtEnd
            : m.Scrollable
          : m.None;
      }
      ((s = m = m || {})[(s.None = 2)] = "None"),
        (s[(s.Scrollable = 1)] = "Scrollable"),
        (s[(s.AtEnd = 3)] = "AtEnd"),
        ((a = h = h || {}).X = "x"),
        (a.Y = "y"),
        (a.XY = "xy"),
        ((c = J = J || {}).Area = "area"),
        (c.Group = "group"),
        (c.Stop = "stop"),
        (c.Click = "click");
      var te,
        y,
        M = (function() {
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
            (t.s_bIsNavEnabled = !1),
            t
          );
        })(),
        w = u.createContext(null),
        O = (function() {
          function e() {
            this.m_listeners = new Map();
          }
          return (
            (e.prototype.Initialize = function(e) {
              this.m_document = e;
            }),
            (e.prototype.GetFocus = function() {
              return void 0 !== this.m_document &&
                Z(this.m_document.activeElement)
                ? this.m_document.activeElement
                : null;
            }),
            (e.prototype.Focus = function(e, t) {
              null != e
                ? (_("HDFC Focus", e), e.focus(t))
                : Z(this.m_document.activeElement) &&
                  (_("HDFC Focus IsHTMLElement e.blur()", e),
                  this.m_document.activeElement.blur());
            }),
            (e.prototype.Click = function(e) {
              e.click();
            }),
            (e.prototype.FocusableElementAttributes = function(e) {
              var t = {};
              return (
                M.IsNavEnabled && e.navStop && (t.tabIndex = -2),
                "number" == typeof e.tabStop && (t.tabIndex = e.tabStop),
                !0 === e.tabStop && (t.tabIndex = 0),
                t
              );
            }),
            (e.prototype.AddBlurListener = function(t) {
              _("CHtmlDomFocusController AddBlurListener");
              function e(e) {
                return Z(e.target) && t(e.target);
              }
              this.m_listeners.set(t, e),
                this.m_document.addEventListener("blur", e, !0);
            }),
            (e.prototype.RemoveBlurListener = function(e) {
              _("CHtmlDomFocusController RemoveBlurListener");
              var t = this.m_listeners.get(e);
              this.m_document.removeEventListener("blur", t, !0),
                this.m_listeners.delete(e);
            }),
            e
          );
        })(),
        F = (function() {
          function e() {}
          return (
            (e.Attributes = function(e, t) {
              var n = {};
              if (
                (M.IsNavEnabled &&
                  (e.navClick && (n["data-nav"] = J.Click),
                  !e.navClick && e.navStop && (n["data-nav"] = J.Stop),
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
                return M.IsNavEnabled ? d : void 0;
              },
              enumerable: !1,
              configurable: !0
            }),
            e
          );
        })(),
        E = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.SetRef = function(e) {
              (this.m_htmlElement = e), v(this.props.htmlElementRef, e);
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
                i = (e.children,
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
              return null != this.context && M.IsNavEnabled
                ? Object(l.a)(
                    Object(l.a)(
                      Object(l.a)({}, F.Attributes(this.props, this.context)),
                      {
                        className: Object(p.a)(F.navStopClass, r),
                        ref: t ? this.SetRef : n
                      }
                    ),
                    i
                  )
                : Object(l.a)({ className: r, ref: n }, i);
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
            Object(l.c)([i.a], t.prototype, "SetRef", null),
            t
          );
        })(u.Component),
        S = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_elementType = "div"), e;
          }
          return Object(l.d)(e, t), (e = Object(l.c)([r.a], e));
        })(E);
      ((y = te = te || {}).Geometry = "Geometry"),
        (y.DomOrder = "DomOrder"),
        (y.ReverseDomOrder = "ReverseDomOrder");
      u.Component;
      var C = (function(n) {
        function e(e) {
          var t = n.call(this, e) || this;
          return (
            (t.m_navAreaDivRef = u.createRef()),
            (t.m_inFocusCallType = null),
            (t.m_lastFocusedHtmlElement = null),
            (t.m_focusPos = null),
            (t.m_focusPosOffsetFromAnchorElement = null),
            (t.m_focusPosPointerRef = u.createRef()),
            void 0 !== e && (t.m_htmlDomFocusController = new O()),
            t
          );
        }
        var I;
        return (
          Object(l.d)(e, n),
          ((I = e).GetActiveNavArea = function() {
            var e = I.sm_navAreaStack;
            return 0 === e.length ? null : e[e.length - 1];
          }),
          (e.GetActiveNavAreaElement = function() {
            var e = I.GetActiveNavArea();
            return (e && e.m_navAreaDivRef.current) || null;
          }),
          (e.FocusWithin = function(e) {
            var t, n, r, i;
            _("KFNA.FocusWithin", e),
              !M.IsNavEnabled ||
                ((t = I.GetActiveNavAreaElement()) &&
                  (((n = Object(Q.k)(e, function(e) {
                    return e.getAttribute("data-nav") === J.Area;
                  })) !== t &&
                    "true" !== n.getAttribute("data-nav-area-awfw")) ||
                    (void 0 !== (r = I.sm_inactiveNavAreaMap.get(n)) &&
                      (n !== t &&
                        (_(
                          "KFNA.FocusWithin: KFNA '" +
                            t.id +
                            "' active, but FG in '" +
                            n.id +
                            "'; activating."
                        ),
                        r.Activate()),
                      (i = r.FindBestNavStopFocus(e)) &&
                        r.SetFocus(i.htmlElement, i.pos)))));
          }),
          (e.prototype.GetFocusController = function() {
            return this.props.focusController || this.m_htmlDomFocusController;
          }),
          (e.prototype.SetFocus = function(e, t) {
            var n,
              r,
              i,
              o,
              s = this.GetFocusController();
            e.getAttribute("data-nav") !== J.Click
              ? ((n = this.m_inFocusCallType),
                (this.m_inFocusCallType = "focus"),
                _(
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
                (i = e.getAttribute("data-nav-scroll-y")),
                r || i
                  ? (this.GetFocusController().Focus(e, { preventScroll: !0 }),
                    (o = { behavior: "auto" }),
                    r && (o.inline = r),
                    i && (o.block = i),
                    e.scrollIntoView(o))
                  : s.Focus(e),
                s.GetFocus() === e
                  ? this.UpdateFocus(e, t)
                  : _(
                      "KFNA '" +
                        this.m_navAreaDivRef.current.id +
                        " SetFocus rejected",
                      e
                    ),
                (this.m_inFocusCallType = n))
              : s.Click(e);
          }),
          (e.prototype.UpdateFocus = function(e, t) {
            _(
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
              r = I.FindAnchorElement(e);
            r
              ? ((n = ee(r)),
                (this.m_focusPosOffsetFromAnchorElement = Y(n, t)))
              : (this.m_focusPosOffsetFromAnchorElement = null),
              (this.m_focusPos = t),
              (this.m_lastFocusedHtmlElement = e),
              this.UpdatePointer();
          }),
          (e.prototype.UpdatePointer = function() {
            var e = this.m_focusPos,
              t = this.m_focusPosPointerRef.current,
              n = this.m_navAreaDivRef.current;
            e &&
              t &&
              n &&
              ((t.style.left = e.x + "px"), (t.style.top = e.y + "px"));
          }),
          (e.prototype.GetFocusPos = function() {
            var e = this.m_navAreaDivRef.current,
              t = this.m_lastFocusedHtmlElement,
              n = this.m_focusPosOffsetFromAnchorElement;
            if (e && t && e.contains(t) && n) {
              var r = I.FindAnchorElement(t);
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
            var i = this.m_lastFocusedHtmlElement,
              o = this.GetFocusPos();
            if (
              i &&
              r.contains(i) &&
              e.contains(i) &&
              i.getAttribute("data-nav") === J.Stop
            )
              return { htmlElement: i, pos: o || ee(i) };
            var s = Object(Q.l)(e, "data-nav").filter(function(e) {
              return Z(e) && "true" === e.getAttribute("data-nav-preferred");
            });
            if (0 < s.length) {
              var a = s[0],
                c = a.getAttribute("data-nav");
              if (c === J.Group) {
                var l = this.FindBestNavStopFocus(a, t, n);
                if (l) return l;
              } else if (c === J.Stop) {
                return { htmlElement: a, pos: ee(a) };
              }
            }
            var u = Array.from(
              e.querySelectorAll(
                "[data-nav='" + J.Stop + "'],[data-nav='" + J.Click + "]"
              )
            ).filter(Z);
            if (!u || 0 === u.length) return null;
            var p = I.GetActiveNavArea();
            if (null == p) return null;
            if (null == p.m_navAreaDivRef.current) return null;
            if (p.props.initFromBoundary && void 0 !== t && void 0 !== n) {
              var d =
                  "x" === t
                    ? "data-nav-xorder"
                    : "y" === t
                    ? "data-nav-yorder"
                    : void 0,
                m = e.getAttribute(d);
              if (!(m === te.Geometry || null == m)) {
                var h =
                  (m === te.ReverseDomOrder) != (-1 === n)
                    ? u[u.length - 1]
                    : u[0];
                return { htmlElement: h, pos: ee(h) };
              }
              for (
                var f = -1 === n ? "max" : "min",
                  g = null,
                  _ = 1 / 0,
                  v = 0,
                  b = u;
                v < b.length;
                v++
              ) {
                var y = n * $((j = b[v]))[t][f];
                y < _ && ((_ = y), (g = j));
              }
              if (null !== g) return { htmlElement: g, pos: ee(g) };
            }
            var M,
              w = I.sm_navAreaStack,
              O = Object(A.d)(w, function(e) {
                return null !== e.m_focusPos;
              });
            if (O) {
              for (
                var F = O.m_focusPos,
                  E = Number.POSITIVE_INFINITY,
                  S = null,
                  C = 0,
                  k = u;
                C < k.length;
                C++
              ) {
                var j,
                  D = ee((j = k[C])),
                  B = ((M = Y(F, D)), Math.sqrt(x(M, M)));
                B < E && ((E = B), (S = j));
              }
              if (S) return { htmlElement: S, pos: ee(S) };
            }
            var R = u[0];
            return R ? { htmlElement: R, pos: ee(R) } : null;
          }),
          (e.prototype.GetScrollOffset = function(e, t, n) {
            var r = e,
              i = r.getAttribute("data-nav-enter-as-scrolled-axes");
            if (i === h.XY || i === t) return null;
            var o = null != r.getAttribute("data-nav"),
              s = o ? r.getAttribute("data-nav-scroll-axes") : void 0;
            return o && s !== h.XY && s !== t
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
              i,
              d = this,
              o =
                "x" === u
                  ? "data-nav-xorder"
                  : "y" === u
                  ? "data-nav-yorder"
                  : void 0,
              s = c.getAttribute(o),
              a = s === te.Geometry || null == s,
              m = s === te.ReverseDomOrder,
              h = n ? this.GetScrollOffset(c, u, p) : null,
              f = h ? q(h, -1) : null,
              g = f ? K(l, f) : l,
              _ = H[u],
              v = -1 === (V()[u] = p) ? "max" : "min",
              b = { min: g[_], max: g[_] },
              y =
                t && Z(e)
                  ? ((r = b),
                    (i = $(e)[_]),
                    {
                      min: r.min < i.min ? r.min : i.min,
                      max: r.max > i.max ? r.max : i.max
                    })
                  : b,
              M = null,
              w = null,
              O = 1 / 0,
              F = Object(Q.l)(c, "data-nav");
            m != (-1 === p) && F.reverse();
            for (
              var E = [], S = null == e ? 0 : null, C = 0, k = F;
              C < k.length;
              C++
            ) {
              if ((G = k[C]) !== e) {
                if (
                  (null !== S && ++S, G.getAttribute("data-nav") !== J.Area)
                ) {
                  n &&
                    null === M &&
                    "true" === G.getAttribute("data-nav-preferred") &&
                    (M = G);
                  var j = 0;
                  if (a) {
                    var D = $(G),
                      B = g[u],
                      R = p * (D[u][v] - B);
                    if (R < 0) continue;
                    var I = g[_],
                      x = D[_].min,
                      A = D[_].max,
                      T = I < x ? I - x : A < I ? I - A : 0;
                    if (t) if (!X(y, { min: x, max: A })) continue;
                    var L = { x: 0, y: 0 };
                    (L[u] = D[u][v]), (L[_] = I + T);
                    var N = Y(g, L),
                      j = (R * R + T * T) / Math.abs(N[u]);
                  } else {
                    if (null == S) continue;
                    j = S;
                  }
                  j < O && ((O = j), (w = G)), E.push({ score: j, element: G });
                }
              } else S = 0;
            }
            function P(e, t) {
              void 0 === t && (t = !1);
              var n = e.getAttribute("data-nav");
              if (n === J.Stop || n === J.Click) {
                if (Z(e)) {
                  var r = e,
                    i = ee(r),
                    o = !l || t ? i : { x: l.x, y: l.y };
                  o[u] = i[u];
                  var s = { htmlElement: r, pos: o };
                  return h && (s.onscreenTestElement = c), s;
                }
                return null;
              }
              if (n === J.Group) {
                var a = d.FindNextNavStopInContainer(e, null, g, u, p, !1, !0);
                if (a) return a;
              }
              return null;
            }
            var z;
            if (M && (z = P(M, !0))) return z;
            if (w) {
              if ((z = P(w))) return z;
              E.sort(function(e, t) {
                return e.score - t.score;
              });
              for (var G, U = 0; U < E.length; ++U) {
                if ((G = E[U].element) !== w) {
                  var W = P(G);
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
            i
          ) {
            for (var o = t; ; ) {
              var s = Object(Q.j)(e, o, "data-nav"),
                a = this.FindNextNavStopInContainer(s, o, n, r, i, !0, !1);
              if (null !== a) return a;
              if (s === e) return null;
              for (var c = o.parentElement; c && c !== s; ) {
                if (b(c, r, i) === m.Scrollable) return null;
                c = c.parentElement;
              }
              if (!c) return null;
              if (c === s && b(c, r, i) === m.Scrollable) return null;
              o = s;
            }
          }),
          (e.prototype.FindNextNavStop = function(e, t) {
            var n = this.m_navAreaDivRef.current;
            if (!n) return null;
            var r = n.ownerDocument;
            if (!r || r !== this.m_document) return null;
            var i,
              o,
              s,
              a,
              c,
              l = null,
              u = this.GetFocusController().GetFocus();
            if (
              (Z(u) && u !== n && n.contains(u)
                ? ((i =
                    (null !== this.m_focusPos &&
                      this.m_lastFocusedHtmlElement === u &&
                      this.GetFocusPos()) ||
                    ee(u)),
                  (s = this.FindNextNavStopWithinAndAcrossContainers(
                    n,
                    u,
                    i,
                    e,
                    t
                  )) ||
                    ((o = ee(u)),
                    (s = this.FindNextNavStopWithinAndAcrossContainers(
                      n,
                      u,
                      o,
                      e,
                      t
                    ))),
                  s && (l = s))
                : (l = this.FindBestNavStopFocus(
                    this.m_navAreaDivRef.current,
                    e,
                    t
                  )),
              null !== l)
            ) {
              var p = r.defaultView;
              if (!p) return null;
              var d = {
                  x: { min: -40, max: p.innerWidth + 40 },
                  y: { min: -40, max: p.innerHeight + 40 }
                },
                m = $(l.onscreenTestElement || l.htmlElement);
              if (X((a = d).x, (c = m).x) && X(a.y, c.y)) return l;
            }
            return null;
          }),
          (e.prototype.HandleKeyDown = function(e) {
            if (M.IsNavEnabled) {
              var t = this.m_navAreaDivRef.current;
              if (t) {
                var n = I.GetActiveNavAreaElement();
                if (null != n && n === t) {
                  var r = I.k_KeyNavigationDirections[e.key];
                  if (r) {
                    var i = r[0],
                      o = r[1],
                      s = this.FindNextNavStop(i, o);
                    s &&
                      (this.SetFocus(s.htmlElement, s.pos),
                      e.stopPropagation(),
                      e.preventDefault());
                  } else if ("Enter" === e.key) {
                    var a = t.ownerDocument;
                    if (!a || a !== this.m_document) return;
                    var c = this.GetFocusController().GetFocus();
                    c &&
                      c.getAttribute("data-nav") === J.Stop &&
                      Z(c) &&
                      (this.GetFocusController().Click(c),
                      e.preventDefault(),
                      e.stopPropagation());
                  }
                }
              }
            }
          }),
          (e.HandleDocumentKeyDown = function(e) {
            if (M.IsNavEnabled) {
              var t = I.GetActiveNavArea();
              if (null != t) {
                var n = t.m_navAreaDivRef.current;
                if (n) {
                  var r = I.k_KeyNavigationDirections[e.key];
                  if (r) {
                    var i = n.ownerDocument;
                    if (i && i === t.m_document) {
                      var o = t.GetFocusController().GetFocus();
                      if (o) {
                        var s = t.m_navAreaDivRef.current;
                        if (!s || s.contains(o)) return;
                      }
                      var a = r[0],
                        c = r[1],
                        l = t.FindNextNavStop(a, c);
                      l &&
                        (t.SetFocus(l.htmlElement, l.pos),
                        e.stopPropagation(),
                        e.preventDefault());
                    }
                  } else
                    "Escape" === e.key
                      ? t.props.onGoBack &&
                        (_("KFNA Back Key id='" + n.id + "'"),
                        t.props.onGoBack(),
                        e.stopPropagation(),
                        e.preventDefault())
                      : "`" === e.key &&
                        t.props.onHome &&
                        (_("KFNA Home Key id='" + n.id + "'"),
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
              Z(e.target) &&
              e.preventDefault();
          }),
          (e.prototype.HandleClickCapture = function(e) {
            _(
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
              (!Z((t = e.target)) ||
                ((n = t).getAttribute("data-nav") === J.Stop && r(e, n)));
          }),
          (e.prototype.HandleFocusControllerOnBlur = function(e) {
            var t, n;
            _(
              "KFNA '" +
                this.m_navAreaDivRef.current.id +
                "' HandleFocusControllerOnBlur in=" +
                (this.m_inFocusCallType || "none"),
              e
            ),
              "focus" !== this.m_inFocusCallType &&
                (null == (t = I.GetActiveNavArea()) ||
                  t !== this ||
                  ((n = t.m_navAreaDivRef.current) &&
                    "true" === n.getAttribute("data-nav-area-awfw") &&
                    n.contains(e) &&
                    (_('KFNA " HandleFocusControllerOnBlur AWFW Deactivate', e),
                    t.Deactivate())));
          }),
          (e.prototype.ClickFocusedElement = function() {
            this.m_lastFocusedHtmlElement &&
              this.GetFocusController().Click(this.m_lastFocusedHtmlElement);
          }),
          (e.prototype.Blur = function() {
            var e = this.m_inFocusCallType;
            (this.m_inFocusCallType = "blur"),
              _("KFNA '" + this.m_navAreaDivRef.current.id + "' Blur"),
              (this.m_lastFocusedHtmlElement = null),
              (this.m_focusPos = null),
              (this.m_focusPosOffsetFromAnchorElement = null);
            var t,
              n = this.m_navAreaDivRef.current;
            !n ||
              ((t = n.ownerDocument) &&
                t === this.m_document &&
                (_('KFNA " Blur GFC Focus null'),
                this.GetFocusController().Focus(null))),
              (this.m_inFocusCallType = e);
          }),
          (e.prototype.Activate = function() {
            if (
              (_(
                "KFNA activate '" +
                  this.props.id +
                  "' " +
                  (this.props.activeWhenFocusWithin ? "awfw" : "")
              ),
              M.IsNavEnabled)
            ) {
              if (!this.m_navAreaDivRef.current) return;
              var e = this.m_navAreaDivRef.current.ownerDocument;
              if (!e) return;
              (this.m_document && this.m_document === e) ||
                ((this.m_document = e),
                this.m_htmlDomFocusController &&
                  this.m_htmlDomFocusController.Initialize(e)),
                0 === I.sm_navAreaStack.length &&
                  (e.addEventListener("scroll", this.HandleScrollCapture, !0),
                  this.props.focusController ||
                    e.addEventListener("keydown", I.HandleDocumentKeyDown, !1)),
                this.GetFocusController().AddBlurListener(
                  this.HandleFocusControllerOnBlur
                );
            }
            this.props.focusController ||
              ((I.sm_navAreaStack = Object(A.a)(I.sm_navAreaStack, this)),
              this.m_navAreaDivRef.current.setAttribute(
                "data-nav-area-active",
                "true"
              ),
              I.sm_navAreaStack.push(this));
          }),
          (e.prototype.Deactivate = function() {
            if (
              (_(
                "KFNA deactivate '" +
                  this.props.id +
                  "' " +
                  (this.props.activeWhenFocusWithin ? "awfw" : "")
              ),
              this.m_navAreaDivRef.current.setAttribute(
                "data-nav-area-active",
                "false"
              ),
              (I.sm_navAreaStack = Object(A.a)(I.sm_navAreaStack, this)),
              0 === I.sm_navAreaStack.length)
            ) {
              if (!this.m_navAreaDivRef.current) return;
              var e = this.m_document;
              if (!e) return;
              e.removeEventListener("scroll", this.HandleScrollCapture, !0),
                e.removeEventListener("keydown", I.HandleDocumentKeyDown, !1);
            }
            this.GetFocusController().RemoveBlurListener(
              this.HandleFocusControllerOnBlur
            );
          }),
          (e.prototype.componentDidMount = function() {
            this.props.activeWhenFocusWithin
              ? I.sm_inactiveNavAreaMap.set(this.m_navAreaDivRef.current, this)
              : this.Activate();
          }),
          (e.prototype.componentWillUnmount = function() {
            this.Deactivate(),
              I.sm_inactiveNavAreaMap.delete(this.m_navAreaDivRef.current);
          }),
          (e.prototype.render = function() {
            var e = this.props,
              t = e.className,
              n = e.children,
              r = (e.initFromBoundary, e.onGoBack, e.onHome, e.focusController),
              i = e.activeWhenFocusWithin,
              o = Object(l.f)(e, [
                "className",
                "children",
                "initFromBoundary",
                "onGoBack",
                "onHome",
                "focusController",
                "activeWhenFocusWithin"
              ]),
              s = M.IsNavEnabled,
              a = M.IsPointerVisible,
              c = s
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
              s
                ? u.createElement(
                    w.Provider,
                    { value: r || this.m_htmlDomFocusController || null },
                    u.createElement(
                      "div",
                      Object(l.a)(
                        {
                          "data-nav": J.Area,
                          "data-nav-area-active": "false",
                          "data-nav-area-awfw": i ? "true" : void 0,
                          ref: this.m_navAreaDivRef,
                          className: Object(p.a)(g, t)
                        },
                        o,
                        c
                      ),
                      s &&
                        a &&
                        u.createElement("div", {
                          ref: this.m_focusPosPointerRef,
                          style: {
                            position: "fixed",
                            background:
                              "linear-gradient( -45deg, rgba( 0, 0, 0, 0 ) 0%, rgba( 0, 0, 0, 0 ) 50%, rgba( 255, 64, 0, 0.75 ) 100% )",
                            width: "20px",
                            height: "20px",
                            zIndex: 1e3
                          }
                        }),
                      n
                    )
                  )
                : u.createElement(
                    "div",
                    Object(l.a)({ ref: this.m_navAreaDivRef, className: t }, o),
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
          Object(l.c)([i.a], e.prototype, "HandleKeyDown", null),
          Object(l.c)([i.a], e.prototype, "HandleFocusCapture", null),
          Object(l.c)([i.a], e.prototype, "HandleScrollCapture", null),
          Object(l.c)([i.a], e.prototype, "HandleMouseDownCapture", null),
          Object(l.c)([i.a], e.prototype, "HandleClickCapture", null),
          Object(l.c)([i.a], e.prototype, "HandleFocusControllerOnBlur", null),
          Object(l.c)([i.a], e, "HandleDocumentKeyDown", null),
          (e = I = Object(l.c)([r.a], e))
        );
      })(u.Component);
    },
    WBba: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return s;
      });
      var l = n("mrSG"),
        c = n("H7XF"),
        u = n("hRO2"),
        p = n("bxBv"),
        r = n("bxiW"),
        i = n("vDqi"),
        d = n.n(i),
        m = n("mC9v"),
        o = n("kLLr"),
        s = (function() {
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
                return new o.a();
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
            (e.prototype.ConstructServiceTransport = function() {
              this.m_ServiceTransport = {
                SendMsg: this.SendMsgAndAwaitResponse,
                SendNotification: this.SendNotification
              };
            }),
            (e.prototype.SendMsgAndAwaitResponse = function(o, s, a, c) {
              return Object(l.b)(this, void 0, void 0, function() {
                var t, n, r, i;
                return Object(l.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = null), (e.label = 1);
                    case 1:
                      return e.trys.push([1, 3, , 4]), [4, this.Send(o, s, c)];
                    case 2:
                      if (200 != (n = e.sent()).status || !n.data)
                        throw new Error("Request Error");
                      return (
                        (t = p.a.Init(a, 147)),
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
                          : ((r = new m.a(n.data)),
                            (i = new u.BinaryReader(
                              r.GetPacket(),
                              r.TellGet(),
                              r.GetCountBytesRemaining()
                            )),
                            a.deserializeBinaryFromReader(t.Body(), i)),
                        [3, 4]
                      );
                    case 3:
                      return (
                        e.sent(),
                        (t = this.CreateFailedMsgProtobuf(a, 3, null)),
                        [3, 4]
                      );
                    case 4:
                      return [2, t];
                  }
                });
              });
            }),
            (e.prototype.SendNotification = function(e, t) {
              return this.Send(e, t), !0;
            }),
            (e.prototype.Send = function(e, t, n) {
              var r = this.CreateWebAPIURL(e),
                i = t.SerializeBody(),
                o = c.fromByteArray(i),
                s = {
                  responseType: this.m_bJsonMode ? "json" : "arraybuffer",
                  params: {}
                };
              if (
                (this.m_webApiAccessToken &&
                  (s.params.access_token = this.m_webApiAccessToken),
                n.bConstMethod)
              )
                return (
                  this.m_bJsonMode
                    ? (s.params = Object(l.a)(Object(l.a)({}, s.params), {
                        input_json: JSON.stringify(t.Body().toObject())
                      }))
                    : (s.params = Object(l.a)(Object(l.a)({}, s.params), {
                        input_protobuf_encoded: o
                      })),
                  d.a.get(r, s)
                );
              var a = new FormData();
              return (
                this.m_bJsonMode
                  ? a.append("input_json", JSON.stringify(t.Body().toObject()))
                  : a.append("input_protobuf_encoded", o),
                d.a.post(r, a, s)
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
              var r = p.a.Init(e);
              return (
                r.Hdr().set_eresult(2),
                r.Hdr().set_transport_error(t),
                n && r.Hdr().set_error_message(n),
                r
              );
            }),
            Object(l.c)([r.a], e.prototype, "SendMsgAndAwaitResponse", null),
            Object(l.c)([r.a], e.prototype, "SendNotification", null),
            Object(l.c)([r.a], e.prototype, "Send", null),
            e
          );
        })();
    },
    X3Ds: function(e, t, n) {
      "use strict";
      n.d(t, "c", function() {
        return i;
      }),
        n.d(t, "b", function() {
          return o;
        }),
        n.d(t, "g", function() {
          return s;
        }),
        n.d(t, "o", function() {
          return a;
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
          return d;
        }),
        n.d(t, "f", function() {
          return m;
        }),
        n.d(t, "q", function() {
          return h;
        }),
        n.d(t, "e", function() {
          return f;
        }),
        n.d(t, "d", function() {
          return g;
        }),
        n.d(t, "j", function() {
          return _;
        }),
        n.d(t, "l", function() {
          return v;
        }),
        n.d(t, "m", function() {
          return b;
        }),
        n.d(t, "k", function() {
          return y;
        });
      var r = n("Kw0F");
      n("r64O");
      function i(e, t) {
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
      function s(e, t) {
        return {
          width: t.width,
          height: t.height,
          top: e.screenTop + t.top,
          bottom: e.screenTop + t.bottom,
          left: e.screenLeft + t.left,
          right: e.screenLeft + t.right
        };
      }
      function a(e) {
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
      function d(e, t) {
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
      function m(e) {
        var t = e.ownerDocument;
        t.cancelFullscreen
          ? t.cancelFullscreen()
          : t.webkitCancelFullScreen
          ? t.webkitCancelFullScreen()
          : t.mozCancelFullScreen
          ? t.mozCancelFullScreen()
          : t.msExitFullscreen && t.msExitFullscreen();
      }
      function h(e) {
        "loading" == document.readyState
          ? document.addEventListener("DOMContentLoaded", e)
          : e();
      }
      var f = (function() {
        function e(e) {
          var o = this;
          (this.m_bNeedSort = !1),
            (this.m_bOffsetsInvalidated = !1),
            (this.m_rgChildren = []),
            (this.RecomputeVisibility = function() {
              var e = o.m_elParent.scrollTop - o.m_nBufferPx,
                t =
                  o.m_elParent.scrollTop +
                  o.m_elParent.clientHeight +
                  o.m_nBufferPx;
              o.EnsureSort();
              for (var n = 0, r = o.m_rgChildren; n < r.length; n++) {
                var i = r[n];
                if (!(i.yOffset < e)) {
                  if (i.yOffset > t) break;
                  i.fnCallback(!0);
                }
              }
              (o.m_nLastYMin = e), (o.m_nLastYMax = t);
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
      function g(e, t) {
        var n = e;
        return (
          (n.lastModifiedDate = new Date()),
          (n.name = t || Date.now().toString()),
          e
        );
      }
      function _(e, t, n) {
        for (var r = t.parentElement; r && r !== e && !r.hasAttribute(n); )
          r = r.parentElement;
        return r || e;
      }
      function v(e, t) {
        for (
          var n = [], r = Array.prototype.slice.call(e.children).reverse();
          0 < r.length;

        ) {
          var i = r.pop();
          i.hasAttribute(t)
            ? n.push(i)
            : r.push.apply(r, Array.prototype.slice.call(i.children).reverse());
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
      function y(e, t) {
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
      function i(e, t, n) {
        return Math.max(t, Math.min(n, e));
      }
      function o(e, t, n, r, i) {
        return r + ((i - r) * (e - t)) / (n - t);
      }
      n.d(t, "b", function() {
        return r;
      }),
        n.d(t, "a", function() {
          return i;
        }),
        n.d(t, "c", function() {
          return o;
        });
    },
    Z1oF: function(e, t, n) {
      "use strict";
      n.d(t, "j", function() {
        return r;
      }),
        n.d(t, "e", function() {
          return i;
        }),
        n.d(t, "h", function() {
          return u;
        }),
        n.d(t, "f", function() {
          return o;
        }),
        n.d(t, "g", function() {
          return p;
        }),
        n.d(t, "i", function() {
          return h;
        }),
        n.d(t, "a", function() {
          return f;
        }),
        n.d(t, "c", function() {
          return M;
        }),
        n.d(t, "b", function() {
          return w;
        }),
        n.d(t, "d", function() {
          return F;
        });
      var c = n("TLQK"),
        s = n("CdLH"),
        l = n("Gp1o");
      function r(e, t) {
        void 0 === t && (t = !1);
        var n = t ? "#TimeInterval_" : "#TimeSince_";
        return e >= 2 * s.d.PerYear
          ? Object(c.d)(n + "XYears", Math.floor(e / s.d.PerYear))
          : e >= s.d.PerYear
          ? (e -= s.d.PerYear) >= 2 * s.d.PerMonth
            ? Object(c.d)(n + "1YearXMonths", Math.floor(e / s.d.PerMonth))
            : Object(c.d)(n + "1Year")
          : e >= 2 * s.d.PerMonth
          ? Object(c.d)(n + "XMonths", Math.floor(e / s.d.PerMonth))
          : e >= 2 * s.d.PerWeek
          ? Object(c.d)(n + "XWeeks", Math.floor(e / s.d.PerWeek))
          : e >= s.d.PerWeek
          ? Object(c.d)(n + "1Week", Math.floor(e / s.d.PerWeek))
          : e >= 2 * s.d.PerDay
          ? Object(c.d)(n + "XDays", Math.floor(e / s.d.PerDay))
          : e >= s.d.PerDay
          ? (e -= s.d.PerDay) >= 2 * s.d.PerHour
            ? Object(c.d)(n + "1DayXHours", Math.floor(e / s.d.PerHour))
            : Object(c.d)(n + "1Day")
          : e >= 2 * s.d.PerHour
          ? Object(c.d)(n + "XHours", Math.floor(e / s.d.PerHour))
          : e >= s.d.PerHour
          ? (e -= s.d.PerHour) >= 2 * s.d.PerMinute
            ? Object(c.d)(n + "1HourXMinutes", Math.floor(e / s.d.PerMinute))
            : Object(c.d)(n + "1Hour")
          : e >= 2 * s.d.PerMinute
          ? Object(c.d)(n + "XMinutes", Math.floor(e / s.d.PerMinute))
          : e >= s.d.PerMinute
          ? Object(c.d)(n + "1Minute")
          : Object(c.d)(n + "LessThanAMinute");
      }
      function i(e, t) {
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
        if ((r = d.get(n))) return r;
        var r = t.toLocaleDateString(c.c.GetPreferredLocales(), {
          year: "numeric",
          month: "short",
          day: "numeric"
        });
        return d.set(n, r), r;
      }
      function o(e) {
        return new Date(1e3 * e).toLocaleTimeString(c.c.GetPreferredLocales(), {
          hour: "numeric",
          minute: "numeric"
        });
      }
      var a = new Map();
      function p(e) {
        var t = new Date(1e3 * e),
          n = c.c.GetPreferredLocales(),
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
        m = new Map();
      function h(e, t) {
        var n = new Date(),
          r = new Date(1e3 * e);
        if (r.getFullYear() != n.getFullYear()) return u(e);
        l.b(new Date().setHours(24, 0, 0, 0) - n.getTime());
        var i = new Date();
        if ((i.setHours(0, 0, 0, 0), i <= r)) {
          if ((i.setDate(i.getDate() + 1), r < i))
            return Object(c.d)("#Time_Today");
          if ((i.setDate(i.getDate() + 1), r < i))
            return Object(c.d)("#Time_Tomorrow");
        } else if ((i.setDate(i.getDate() - 1), i <= r))
          return Object(c.d)("#Time_Yesterday");
        var o = { month: t ? "long" : "short", day: "numeric" },
          s = r.setHours(0, 0, 0, 0) + o.month,
          a = m.get(s);
        return (
          a ||
          ((a = r.toLocaleDateString(c.c.GetPreferredLocales(), o)),
          m.set(s, a),
          a)
        );
      }
      function f(e) {
        var t = new Date(1e3 * e),
          n = new Date();
        if (n < t)
          return (
            l.b(t.getTime() - n.getTime()),
            (t.getFullYear() == n.getFullYear() ? O : E)(t)
          );
        l.b(new Date().setHours(24, 0, 0, 0) - n.getTime());
        var r = new Date();
        if ((r.setHours(0, 0, 0, 0), r <= t)) return Object(c.d)("#Time_Today");
        if ((r.setDate(r.getDate() - 1), r <= t))
          return Object(c.d)("#Time_Yesterday");
        if ((r.setDate(r.getDate() - 5), r <= t))
          return Object(c.d)("#TimeSince_ThisWeek");
        var i = new Date(r);
        if (
          (r.setDate(r.getDate() - 21),
          r <= t ||
            (t.getMonth() == n.getMonth() &&
              t.getFullYear() == n.getFullYear()))
        ) {
          var o =
            Math.floor((i.valueOf() - t.valueOf()) / (1e3 * s.d.PerWeek)) + 1;
          return 1 == o
            ? Object(c.d)("#TimeSince_1Week")
            : Object(c.d)("#TimeSince_XWeeks", o);
        }
        return (t.getFullYear() == n.getFullYear() ? O : E)(t);
      }
      var g = new Map(),
        _ = new Map(),
        v = new Map(),
        b = new Map(),
        y = new Map();
      function M(e, t) {
        void 0 === t && (t = !1);
        var n = e.getDate() + 31 * (e.getMonth() + 12 * e.getFullYear()),
          r = y.get(n);
        return (
          r ||
          ((r = e.toLocaleDateString(c.c.GetPreferredLocales(), {
            weekday: "long",
            day: "numeric",
            month: t ? "long" : "short"
          })),
          y.set(n, r),
          r)
        );
      }
      function w(e) {
        var t = g.get(e.getDay());
        return (
          t ||
          ((t = e.toLocaleDateString(c.c.GetPreferredLocales(), {
            weekday: "long"
          })),
          g.set(e.getDay(), t),
          t)
        );
      }
      function O(e) {
        var t = _.get(e.getMonth());
        return (
          t ||
          ((t = e.toLocaleDateString(c.c.GetPreferredLocales(), {
            month: "long"
          })),
          _.set(e.getMonth(), t),
          t)
        );
      }
      function F(e) {
        var t = v.get(e.getFullYear());
        return (
          t ||
          ((t = e.toLocaleDateString(c.c.GetPreferredLocales(), {
            year: "numeric"
          })),
          v.set(e.getFullYear(), t),
          t)
        );
      }
      function E(e) {
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
    ZApo: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return c;
      });
      var r = n("mrSG"),
        o = n("q1tI"),
        i = n("TtDX"),
        s = n("6Y59"),
        a = n("bxiW"),
        c = (function(n) {
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
            Object(r.d)(e, n),
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
                  i = [
                    "label",
                    "tooltip",
                    "selectedOption",
                    "tabIndex",
                    "onChange",
                    "strDefaultLabel"
                  ];
                r < i.length;
                r++
              ) {
                var o = i[r];
                if (e[o] !== this.props[o]) return !0;
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
              var t = Object(r.a)(
                {
                  bOverlapHorizontal: !0,
                  bMatchWidth: !0,
                  bFitToWindow: !0,
                  strClassName: e,
                  bDisableMouseOverlay: this.props.bDisableMouseOverlay
                },
                this.props.contextMenuPositionOptions
              );
              (this.m_iMenuInstance = Object(i.a)(
                o.createElement(l, {
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
              var i = o.createElement(
                o.Fragment,
                null,
                this.props.postDropdownElement,
                !this.props.disabled &&
                  o.createElement(
                    "div",
                    { className: "DialogDropDown_Arrow" },
                    o.createElement(s.i, null)
                  ),
                this.props.postOptionElement,
                o.createElement(
                  "div",
                  { className: "DialogDropDown_CurrentDisplay" },
                  t
                )
              );
              return o.createElement(
                "div",
                { className: r },
                this.props.label &&
                  o.createElement(
                    "div",
                    { className: "DialogLabel" },
                    this.props.label,
                    Boolean(this.props.tooltip) &&
                      o.createElement(
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
                      children: i
                    })
                  : o.createElement(
                      "div",
                      {
                        className: n,
                        tabIndex: this.props.tabIndex || 0,
                        onClick: this.props.disabled ? void 0 : this.ToggleMenu,
                        ref: this.OnInputRef
                      },
                      i
                    )
              );
            }),
            Object(r.c)([a.a], e.prototype, "OnInputRef", null),
            Object(r.c)([a.a], e.prototype, "ToggleMenu", null),
            Object(r.c)([a.a], e.prototype, "OnItemSelected", null),
            Object(r.c)([a.a], e.prototype, "ShowMenu", null),
            Object(r.c)([a.a], e.prototype, "HideMenu", null),
            e
          );
        })(o.Component),
        l = (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return (t.state = { iFocus: 0 }), t;
          }
          return (
            Object(r.d)(e, n),
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
              var i = this.props.renderMenuItem || "div",
                e = this.props.rgOptions.map(function(e, t) {
                  return o.createElement(
                    i,
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
              return o.createElement(
                t,
                { className: "DialogDropDownMenu _DialogInputContainer" },
                e
              );
            }),
            Object(r.c)([a.a], e.prototype, "OnItemClicked", null),
            e
          );
        })(o.Component);
      o.Component;
    },
    bxBv: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return i;
      });
      var r = n("mrSG"),
        o = n("mC9v"),
        s = n("hRO2"),
        a = (n("NtSG"), n("RD/U")),
        i = (n("kLLr"),
        (function(i) {
          function n(e, t, n, r) {
            return void 0 === t && (t = 0), i.call(this, t, n, e, r) || this;
          }
          return (
            Object(r.d)(n, i),
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
              return i.prototype.Body.call(this);
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
            function t(e, t, n, r, i) {
              if (r)
                (this.m_eMsg = r.m_eMsg),
                  (this.m_bValid = r.m_bValid),
                  this.m_bValid &&
                    ((this.m_netPacket = r.m_netPacket),
                    (this.m_cubHeader = r.m_cubHeader),
                    (this.m_header = r.m_header),
                    this.InitForType(n));
              else {
                if (((this.m_header = new a.d(null)), (this.m_bValid = !0), t))
                  if (
                    ((this.m_netPacket = t),
                    this.m_netPacket.SeekGetHead(),
                    (this.m_eMsg = this.m_netPacket.GetUint32()),
                    2147483648 & this.m_eMsg)
                  ) {
                    (this.m_eMsg = 2147483647 & this.m_eMsg),
                      (this.m_cubHeader = this.m_netPacket.GetUint32());
                    try {
                      a.d.deserializeBinaryFromReader(
                        this.m_header,
                        new s.BinaryReader(
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
                i && this.m_header.set_jobid_target(i.Hdr().jobid_target());
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
                      new s.BinaryReader(
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
                  i = new o.a(r);
                return (
                  i.PutUint32(n),
                  i.PutUint32(e.length),
                  i.PutBytes(e),
                  i.PutBytes(t),
                  r
                );
              }),
              (t.prototype.SerializeBody = function() {
                var e = this.m_body.serializeBinary(),
                  t = new Uint8Array(e.length);
                return new o.a(t).PutBytes(e), t;
              }),
              (t.prototype.DEBUG_ToObject = function() {
                return {};
              }),
              (t.prototype.DEBUG_LogToConsole = function() {}),
              t
            );
          })()
        ));
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
      function i(e, t, n) {
        return [e, t, n];
      }
      n.d(t, "a", function() {
        return r;
      }),
        n.d(t, "b", function() {
          return i;
        });
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
    gfbn: function(e, t, c) {
      "use strict";
      c.r(t);
      var l = c("mrSG"),
        o = c("i8i4"),
        n = c.n(o),
        s = c("q1tI"),
        a = c.n(s),
        r = c("vDqi"),
        i = c.n(r),
        u = (c("5izx"), c("lkRc"));
      var p = c("TLQK");
      c("mgoM");
      var d = {},
        m = Object(l.a)(
          Object(l.a)(
            Object(l.a)(
              Object(l.a)(
                Object(l.a)(
                  {
                    Home: function() {
                      return "/";
                    },
                    AppStorePage: function() {
                      return "/app/:appid(\\d+)/:gamename?";
                    },
                    PackageStorePage: function() {
                      return "/sub/:subid(\\d+)/:packagename?";
                    },
                    BundleStorePage: function() {
                      return "/bundle/:bundleid(\\d+)/:bundlename?";
                    },
                    SaleLandingPage: function() {
                      return "/sale/:salePageName";
                    },
                    RemotePlay: function() {
                      return "/remoteplay_hub/";
                    },
                    RemotePlayTogether: function() {
                      return "/together/";
                    },
                    CreatorSaleLandingPage: function() {
                      return "/(curator|publisher|pub|dev|developer|franchise)/:creatorPageName/sale/:salePageName?";
                    },
                    CuratorPage: function() {
                      return "/curator/:curatorPageName/(list)?/:listid?";
                    },
                    CreatorPage: function() {
                      return "/(publisher|pub|dev|developer|franchise)/:creatorPageName/(list)?/:listid?";
                    }
                  },
                  {
                    NewsHub: function() {
                      return "/(newshub|events)";
                    },
                    NewsHubApp: function(e, t) {
                      return "/(newshub|events)/app/" + e + "/" + t;
                    },
                    NewsHubGroup: function(e, t) {
                      return "/(newshub|events)/group/" + e + "/" + t;
                    },
                    NewsHubCollection: function(e, t) {
                      return "/(newshub|events)/collection/" + e + "/" + t;
                    },
                    EventViewByApp: function(e, t, n) {
                      return (
                        "/(newshub|events)/app/" +
                        e +
                        "/:viewtype(view|inline)/" +
                        t +
                        "/" +
                        n
                      );
                    },
                    EventViewByGroup: function(e, t, n) {
                      return (
                        "/(newshub|events)/group/" +
                        e +
                        "/:viewtype(view|inline)/" +
                        t +
                        "/" +
                        n
                      );
                    },
                    OldAnnouncementViewByApp: function(e, t, n) {
                      return (
                        "/(newshub|events)/app/" +
                        e +
                        "/:viewtype(old_view|old_inline)/" +
                        t +
                        "/" +
                        n
                      );
                    },
                    OldAnnouncementViewByGroup: function(e, t, n) {
                      return (
                        "/(newshub|events)/group/" +
                        e +
                        "/:viewtype(old_view|old_inline)/" +
                        t +
                        "/" +
                        n
                      );
                    }
                  }
                ),
                {
                  EventAdmin: function() {
                    return "/events_admin";
                  },
                  EventModeration: function() {
                    return "/events_admin/(moderate)?/:appid(\\d+)?/";
                  },
                  EventBackfill: function() {
                    return "/events_admin/backfill/";
                  }
                }
              ),
              {
                EventModeration: function() {
                  return "/events_admin/(moderate)?/:appid(\\d+)?/";
                },
                EventBackfill: function() {
                  return "/events_admin/backfill/";
                },
                EventGameFestivalDebug: function() {
                  return "/events_admin/gamefestival/:clanacountid(\\d+)/:claneventgid(\\d+)";
                },
                InteractiveRecommender: function() {
                  return "/recommender/:steamid(\\d+)?/";
                },
                LabsSandbox: function() {
                  return "/labs/sandbox";
                },
                TopSellers: function() {
                  return "/topsellers/:date?";
                }
              }
            ),
            d
          ),
          {
            DiagData: function() {
              return "/:anything*/diagdata";
            }
          }
        );
      function h(e) {
        var i = e.config;
        return a.a.createElement(
          a.a.Fragment,
          null,
          Object.keys(i || {}).map(function(r) {
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
                  return Object(o.createPortal)(i[r](n), e, "" + r + t);
                })
              : null;
          })
        );
      }
      var f = c("6TF7"),
        g = c.n(f),
        _ = c("wd/R"),
        v = c("55Ip"),
        b = c("Ty5D"),
        y = c("kyHq"),
        M = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.render = function() {
              if ("dev" !== u.c.WEB_UNIVERSE) return null;
              var t = document.getElementById(this.props.strConfigID);
              if (!t) return null;
              var n = new Array();
              return (
                t.getAttributeNames().forEach(function(e) {
                  e.toLocaleLowerCase().startsWith("data-") &&
                    (n.push(s.createElement("h1", { key: "header-" + e }, e)),
                    n.push(
                      s.createElement(w, {
                        key: "body-" + e,
                        data: JSON.parse(t.getAttribute(e))
                      })
                    ));
                }),
                s.createElement("div", null, n)
              );
            }),
            t
          );
        })(s.Component),
        w = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.render = function() {
              return s.createElement(
                "div",
                null,
                s.createElement(
                  "pre",
                  null,
                  JSON.stringify(this.props.data, null, 2)
                )
              );
            }),
            t
          );
        })(s.Component),
        O = c("Jqb/");
      var F = c("r64O"),
        E = c("kLLr");
      function S(i) {
        return function(t) {
          var e = Object(s.useState)(null),
            n = e[0],
            r = e[1];
          return (
            n ||
            (Promise.all([c.e(0), c.e(1), c.e(6)])
              .then(c.bind(null, "Wym2"))
              .then(function(e) {
                r(a.a.createElement(e[i], t));
              }),
            null)
          );
        };
      }
      function C() {
        return a.a.createElement(
          b.d,
          null,
          a.a.createElement(b.b, {
            exact: !0,
            path: m.EventViewByApp(
              ":appid(\\d+)",
              ":event_gid(\\d+)",
              ":vanity?"
            ),
            render: function(e) {
              return a.a.createElement(
                x,
                Object(l.a)(
                  { key: "detailview_" + e.match.params.event_gid },
                  e,
                  {
                    appid: e.match.params.appid,
                    event_gid: e.match.params.event_gid,
                    bInfiniteScroll: "inline" == e.match.params.viewtype
                  }
                )
              );
            }
          }),
          a.a.createElement(b.b, {
            exact: !0,
            path: m.EventViewByGroup(
              ":groupid(\\d+)",
              ":event_gid(\\d+)",
              ":vanity?"
            ),
            render: function(e) {
              return a.a.createElement(
                x,
                Object(l.a)(
                  { key: "detailview_" + e.match.params.event_gid },
                  e,
                  {
                    clansteamid: new E.a(e.match.params.groupid),
                    event_gid: e.match.params.event_gid,
                    bInfiniteScroll: "inline" == e.match.params.viewtype
                  }
                )
              );
            }
          }),
          a.a.createElement(b.b, {
            exact: !0,
            path: m.OldAnnouncementViewByApp(
              ":appid(\\d+)",
              ":announcement_gid(\\d+)",
              ":vanity?"
            ),
            render: function(e) {
              return a.a.createElement(
                x,
                Object(l.a)(
                  { key: "detailoldview_" + e.match.params.announcement_gid },
                  e,
                  {
                    appid: e.match.params.appid,
                    announcement_gid: e.match.params.announcement_gid,
                    bInfiniteScroll: "old_inline" == e.match.params.viewtype
                  }
                )
              );
            }
          }),
          a.a.createElement(b.b, {
            exact: !0,
            path: m.OldAnnouncementViewByGroup(
              ":groupid(\\d+)",
              ":announcement_gid(\\d+)",
              ":vanity?"
            ),
            render: function(e) {
              return a.a.createElement(
                x,
                Object(l.a)(
                  { key: "detailoldview_" + e.match.params.announcement_gid },
                  e,
                  {
                    clansteamid: new E.a(e.match.params.groupid),
                    announcement_gid: e.match.params.announcement_gid,
                    bInfiniteScroll: "old_inline" == e.match.params.viewtype
                  }
                )
              );
            }
          }),
          a.a.createElement(b.b, {
            exact: !0,
            path: m.NewsHubApp(":appid(\\d+)", ":vanity?"),
            render: function(e) {
              return a.a.createElement(
                I,
                Object(l.a)({ key: e.match.params.appid }, e, {
                  filter_to_appids: [Number(e.match.params.appid)]
                })
              );
            }
          }),
          a.a.createElement(b.b, {
            exact: !0,
            path: m.NewsHubGroup(":groupid(\\d+)", ":vanity?"),
            render: function(e) {
              return a.a.createElement(
                I,
                Object(l.a)({ key: e.match.params.groupid }, e, {
                  filter_to_clanids: [Number(e.match.params.groupid)]
                })
              );
            }
          }),
          a.a.createElement(b.b, {
            exact: !0,
            path: m.NewsHubCollection(":collectionid", ":vanity?"),
            render: function(e) {
              return a.a.createElement(
                I,
                Object(l.a)({ key: e.match.params.collectionid }, e, {
                  filter_to_collection: e.match.params.collectionid
                })
              );
            }
          }),
          a.a.createElement(b.b, {
            exact: !0,
            path: m.NewsHub(),
            render: function(e) {
              return a.a.createElement(I, Object(l.a)({ key: "global" }, e));
            }
          })
        );
      }
      function k() {
        return a.a.createElement(
          b.d,
          null,
          a.a.createElement(b.b, {
            path: m.EventGameFestivalDebug(),
            render: function(e) {
              return a.a.createElement(
                T,
                Object(l.a)({}, e, {
                  clanAccountID: e.match.params.clanacountid,
                  clanEventGID: e.match.params.claneventgid
                })
              );
            }
          }),
          a.a.createElement(b.b, {
            exact: !0,
            path: m.EventBackfill(),
            render: function(e) {
              return a.a.createElement(B, Object(l.a)({}, e));
            }
          }),
          a.a.createElement(b.b, {
            path: m.EventModeration(),
            render: function(e) {
              return a.a.createElement(
                D,
                Object(l.a)({}, e, { appid: e.match.params.appid })
              );
            }
          })
        );
      }
      function j() {
        return a.a.createElement("div", null);
      }
      var D = S("EventModerationLanding"),
        B = S("EventBackfillLanding"),
        R = S("EventSaleDisplay"),
        I = S("EventCalendar"),
        x = S("EventDetailView"),
        A = S("Events"),
        T = S("EventSteamGameFestivalDebug"),
        L = c("Hny+"),
        N = (a.a.lazy(function() {
          return c.e(65).then(c.bind(null, "jHcm"));
        }),
        a.a.lazy(function() {
          return Promise.all([c.e(0), c.e(1), c.e(7)]).then(
            c.bind(null, "3WEt")
          );
        })),
        P = a.a.lazy(function() {
          return Promise.all([c.e(0), c.e(1), c.e(4)]).then(
            c.bind(null, "NIbt")
          );
        }),
        z = a.a.lazy(function() {
          return Promise.all([c.e(0), c.e(1), c.e(5)]).then(
            c.bind(null, "3rT3")
          );
        }),
        G = (a.a.lazy(function() {
          return Promise.resolve().then(c.bind(null, "Hny+"));
        }),
        (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.componentDidMount = function() {
              var e = Object(p.a)();
              e &&
                (document.documentElement.setAttribute("lang", e),
                p.c.SetPreferredLocales([e]),
                _.locale(e));
            }),
            (t.prototype.render = function() {
              return (
                Object(F.a)(
                  null == window.Prototype,
                  "Should not include prototypejs."
                ),
                a.a.createElement(
                  v.a,
                  {
                    basename: (function() {
                      var e = document.createElement("a");
                      e.href = u.c.STORE_BASE_URL;
                      var t = e.pathname;
                      return t.endsWith("/") || (t += "/"), t;
                    })()
                  },
                  a.a.createElement(
                    "div",
                    { className: g.a.App },
                    a.a.createElement(
                      a.a.Suspense,
                      { fallback: a.a.createElement("div", null) },
                      a.a.createElement(
                        b.d,
                        null,
                        a.a.createElement(b.b, {
                          exact: !0,
                          path: m.DiagData(),
                          render: function(e) {
                            return a.a.createElement(
                              M,
                              Object(l.a)({}, e, {
                                key: "diab_data_" + e.match.params.gid,
                                strConfigID: "application_config"
                              })
                            );
                          }
                        }),
                        a.a.createElement(b.b, {
                          exact: !0,
                          path: m.AppStorePage(),
                          render: function(e) {
                            var t = e.match.params.appid;
                            return a.a.createElement(h, {
                              config: {
                                "events-row": function() {
                                  return a.a.createElement(A, {
                                    key: "appeventrow" + t,
                                    appid: t
                                  });
                                },
                                "review-award": function() {
                                  return a.a.createElement(j, {
                                    key: "appawardmodal" + t
                                  });
                                },
                                "broadcast-embed": function() {
                                  return a.a.createElement(
                                    P,
                                    Object(l.a)(
                                      { key: "appbroadcastcast_" + t },
                                      e,
                                      { appid: t }
                                    )
                                  );
                                }
                              }
                            });
                          }
                        }),
                        a.a.createElement(b.b, {
                          exact: !0,
                          path: m.SaleLandingPage(),
                          render: function(e) {
                            var t = e.match.params.salePagename;
                            return a.a.createElement(h, {
                              config: {
                                "sale-display": function() {
                                  return a.a.createElement(R, {
                                    key: "sale_" + t,
                                    promotionName: "sale_" + t,
                                    language: Object(y.e)(u.c.LANGUAGE)
                                  });
                                },
                                "broadcast-embed": function() {
                                  return a.a.createElement(
                                    P,
                                    Object(l.a)(
                                      { key: "broadcastsale_" + t },
                                      e,
                                      { promotionName: t }
                                    )
                                  );
                                }
                              }
                            });
                          }
                        }),
                        a.a.createElement(b.b, {
                          path:
                            "/(curator|pub|publisher|dev|developer|franchise)/:curator_vanity/admin",
                          component: z
                        }),
                        a.a.createElement(b.b, {
                          exact: !0,
                          path: m.CreatorSaleLandingPage(),
                          render: function(e) {
                            return a.a.createElement(h, {
                              config: {
                                "sale-display": function() {
                                  return a.a.createElement(R, {
                                    key:
                                      "salecreator_" +
                                      e.match.params.creatorPageName +
                                      "_" +
                                      e.match.params.salePageName,
                                    promotionName:
                                      "sale_" + e.match.params.salePageName,
                                    language: Object(y.e)(u.c.LANGUAGE)
                                  });
                                }
                              }
                            });
                          }
                        }),
                        a.a.createElement(b.b, {
                          path: m.RemotePlay(),
                          render: function(e) {
                            return a.a.createElement(h, {
                              config: {
                                "sale-display": function() {
                                  return a.a.createElement(R, {
                                    key: "sale_remoteplaylanding",
                                    promotionName: "remoteplaylanding",
                                    language: Object(y.e)(u.c.LANGUAGE)
                                  });
                                }
                              }
                            });
                          }
                        }),
                        a.a.createElement(b.b, {
                          path: m.RemotePlayTogether(),
                          render: function(e) {
                            return a.a.createElement(h, {
                              config: {
                                "sale-display": function() {
                                  return a.a.createElement(R, {
                                    key: "sale_together",
                                    promotionName: "sale_together",
                                    language: Object(y.e)(u.c.LANGUAGE)
                                  });
                                }
                              }
                            });
                          }
                        }),
                        a.a.createElement(b.b, {
                          exact: !0,
                          path: m.CuratorPage(),
                          render: function(e) {
                            return a.a.createElement(
                              P,
                              Object(l.a)(
                                {
                                  key:
                                    "curatorbroadcast_" +
                                    u.a.clanid +
                                    "_" +
                                    u.a.listid
                                },
                                e,
                                { clanid: u.a.clanid, listid: u.a.listid }
                              )
                            );
                          }
                        }),
                        a.a.createElement(b.b, {
                          exact: !0,
                          path: m.CreatorPage(),
                          render: function(e) {
                            return a.a.createElement(
                              P,
                              Object(l.a)(
                                {
                                  key:
                                    "creatorbroadcast_" +
                                    u.a.clanid +
                                    "_" +
                                    u.a.listid
                                },
                                e,
                                { clanid: u.a.clanid, listid: u.a.listid }
                              )
                            );
                          }
                        }),
                        a.a.createElement(b.b, {
                          exact: !0,
                          path: m.PackageStorePage(),
                          render: function(e) {
                            return a.a.createElement(P, {
                              key: "packagebroadcast_" + e.match.params.subid,
                              subid: e.match.params.subid
                            });
                          }
                        }),
                        a.a.createElement(b.b, {
                          exact: !0,
                          path: m.BundleStorePage(),
                          render: function(e) {
                            return a.a.createElement(P, {
                              key: "bundlebroadcast_" + e.match.params.bundleid,
                              bundleid: e.match.params.bundleid
                            });
                          }
                        }),
                        a.a.createElement(b.b, {
                          path: m.NewsHub(),
                          render: function(e) {
                            return a.a.createElement(C, null);
                          }
                        }),
                        a.a.createElement(b.b, {
                          path: m.EventAdmin(),
                          render: function(e) {
                            return a.a.createElement(k, null);
                          }
                        }),
                        a.a.createElement(b.b, {
                          exact: !0,
                          path: m.InteractiveRecommender(),
                          render: function(e) {
                            return a.a.createElement(N, null);
                          }
                        }),
                        a.a.createElement(b.b, {
                          exact: !0,
                          path: m.LabsSandbox(),
                          render: function(e) {
                            return a.a.createElement(L.default, null);
                          }
                        }),
                        a.a.createElement(b.b, {
                          exact: !0,
                          path: m.TopSellers(),
                          render: function(e) {
                            return !1;
                          }
                        }),
                        !1,
                        a.a.createElement(b.b, null, !1)
                      )
                    ),
                    a.a.createElement(O.a, {
                      ModalManager: Object(O.e)(window)
                    })
                  )
                )
              );
            }),
            t
          );
        })(a.a.Component)),
        U = c("X3Ds");
      c("xnZ7"), c("idvb"), c("M1X1");
      U.q(function() {
        return Object(l.b)(this, void 0, void 0, function() {
          return Object(l.e)(this, function(e) {
            switch (e.label) {
              case 0:
                return Object(u.g)("application_config").userConfig
                  ? [3, 2]
                  : [
                      4,
                      Object(u.h)(i.a, u.c.STORE_BASE_URL + "actions/", {
                        userConfig: !0
                      })
                    ];
              case 1:
                e.sent(), (e.label = 2);
              case 2:
                return (
                  (c.p =
                    u.c.STORE_CDN_URL +
                    "public/javascript/applications/store/"),
                  [
                    4,
                    (function(a) {
                      return Object(l.b)(this, void 0, void 0, function() {
                        var t, n, r, i, o, s;
                        return Object(l.e)(this, function(e) {
                          switch (e.label) {
                            case 0:
                              return [3, 2];
                            case 1:
                              return e.sent(), [2];
                            case 2:
                              return (
                                (t = "english" === a),
                                [
                                  4,
                                  Promise.all([
                                    c("rCDf")("./shared_" + a + ".json"),
                                    c("AvbV")("./main_" + a + ".json"),
                                    t
                                      ? {}
                                      : c.e(3).then(c.t.bind(null, "TYjx", 3)),
                                    t
                                      ? {}
                                      : c.e(2).then(c.t.bind(null, "/rNK", 3))
                                  ])
                                ]
                              );
                            case 3:
                              return (
                                (n = e.sent()),
                                (r = n[0]),
                                (i = n[1]),
                                (o = n[2]),
                                (s = n[3]),
                                p.c.AddTokens(
                                  Object(l.a)(Object(l.a)({}, r), i),
                                  Object(l.a)(Object(l.a)({}, o), s)
                                ),
                                [2]
                              );
                          }
                        });
                      });
                    })(u.c.LANGUAGE)
                  ]
                );
              case 3:
                return (
                  e.sent(),
                  document.getElementById("application_root")
                    ? n.a.render(
                        a.a.createElement(G),
                        document.getElementById("application_root")
                      )
                    : console.error(
                        'No "application_root" was found to target'
                      ),
                  [2]
                );
            }
          });
        });
      });
    },
    hJxo: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return a;
      }),
        n.d(t, "b", function() {
          return c;
        });
      var r = n("mrSG"),
        o = n("i8i4"),
        s = n("X3Ds"),
        i = (function() {
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
        a = (function(i) {
          function e(e, t, n) {
            var r = i.call(this, s.n(e), n) || this;
            return (r.m_props = {}), (r.m_object = e), (r.m_propTargets = t), r;
          }
          return (
            Object(r.d)(e, i),
            (e.prototype.Start = function() {
              for (var e in ((this.m_props = {}), this.m_propTargets)) {
                var t = parseFloat(this.m_object[e]) || 0,
                  n = this.m_propTargets[e];
                t != n && (this.m_props[e] = { start: t, end: n });
              }
              i.prototype.Start.call(this);
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
        })(i),
        c = (function(i) {
          function e(e, t, n) {
            var r = i.call(this, s.n(o.findDOMNode(e)), n) || this;
            return (
              (r.m_props = {}),
              (r.m_component = e),
              (r.m_propTargets = t),
              (r.m_setStateOnComplete = n.setStateOnComplete),
              r
            );
          }
          return (
            Object(r.d)(e, i),
            (e.prototype.Start = function() {
              for (var e in ((this.m_props = {}), this.m_propTargets)) {
                var t = parseFloat(this.m_component.state[e]) || 0,
                  n = this.m_propTargets[e];
                t != n && (this.m_props[e] = { start: t, end: n });
              }
              i.prototype.Start.call(this);
            }),
            (e.prototype.Update = function(e) {
              var t = {};
              for (var n in this.m_props) {
                var r = this.m_props[n],
                  i = r.start + (r.end - r.start) * e;
                t[n] = i;
              }
              this.m_component.setState(t);
            }),
            (e.prototype.FireOnComplete = function() {
              i.prototype.FireOnComplete.call(this),
                this.m_setStateOnComplete &&
                  this.m_component.setState(this.m_setStateOnComplete);
            }),
            e
          );
        })(i);
    },
    idvb: function(e, t, n) {},
    kLLr: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return i;
      });
      var r = n("2lpH"),
        s = n.n(r),
        o = n("mgoM"),
        a = n("lkRc"),
        i = (function() {
          function i(e, t, n, r) {
            void 0 === e && (e = 0),
              e instanceof i
                ? (this.m_ulSteamID = e.m_ulSteamID)
                : "string" == typeof e
                ? (this.m_ulSteamID = s.a.fromString(e, !0))
                : t && n && void 0 !== r
                ? this.SetFromComponents(e, r, n, t)
                : (this.m_ulSteamID = e ? s.a.fromNumber(e, !0) : s.a.UZERO);
          }
          return (
            (i.InitFromAccountID = function(e) {
              return new i(Number(e), a.c.EUNIVERSE, 1, o.f);
            }),
            (i.InitFromClanID = function(e) {
              return new i(Number(e), a.c.EUNIVERSE, 7, 0);
            }),
            (i.prototype.GetAccountID = function() {
              return this.m_ulSteamID.getLowBitsUnsigned();
            }),
            (i.prototype.GetInstance = function() {
              return 1048575 & this.m_ulSteamID.getHighBitsUnsigned();
            }),
            (i.prototype.GetAccountType = function() {
              return (this.m_ulSteamID.getHighBitsUnsigned() >> 20) & 15;
            }),
            (i.prototype.GetUniverse = function() {
              return (this.m_ulSteamID.getHighBitsUnsigned() >> 24) & 255;
            }),
            (i.prototype.ConvertTo64BitString = function() {
              return this.m_ulSteamID.toString();
            }),
            (i.prototype.Render = function() {
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
            (i.prototype.BIsValid = function() {
              var e = this.GetAccountType();
              if (e <= 0 || 11 <= e) return !1;
              var t = this.GetUniverse();
              if (t <= 0 || 5 <= t) return !1;
              if (1 == e) {
                if (0 == this.GetAccountID() || this.GetInstance() > o.g)
                  return !1;
              } else if (7 == e) {
                if (0 == this.GetAccountID() || 0 != this.GetInstance())
                  return !1;
              } else if (3 == e && 0 == this.GetAccountID()) return !1;
              return !0;
            }),
            (i.prototype.BIsIndividualAccount = function() {
              return 1 == this.GetAccountType();
            }),
            (i.prototype.BIsClanAccount = function() {
              return 7 == this.GetAccountType();
            }),
            (i.prototype.SetAccountID = function(e) {
              this.m_ulSteamID = new s.a(
                e,
                this.m_ulSteamID.getHighBitsUnsigned(),
                !0
              );
            }),
            (i.prototype.SetInstance = function(e) {
              this.SetFromComponents(
                this.GetAccountID(),
                e,
                this.GetAccountType(),
                this.GetUniverse()
              );
            }),
            (i.prototype.SetAccountType = function(e) {
              this.SetFromComponents(
                this.GetAccountID(),
                this.GetInstance(),
                e,
                this.GetUniverse()
              );
            }),
            (i.prototype.SetUniverse = function(e) {
              this.SetFromComponents(
                this.GetAccountID(),
                this.GetInstance(),
                this.GetAccountType(),
                e
              );
            }),
            (i.prototype.SetFromComponents = function(e, t, n, r) {
              var i = ((255 & r) << 24) + ((15 & n) << 20) + (1048575 & t),
                o = 4294967295 & e;
              this.m_ulSteamID = new s.a(o, i, !0);
            }),
            i
          );
        })();
    },
    kyHq: function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return i;
      }),
        n.d(t, "a", function() {
          return d;
        }),
        n.d(t, "d", function() {
          return _;
        });
      n("mrSG");
      var r = n("mgoM");
      n.d(t, "c", function() {
        return r.a;
      }),
        n.d(t, "e", function() {
          return r.d;
        });
      n("2vnA");
      var i, o;
      ((o = i = i || {})[(o.EBrowserType_OffScreen = 0)] =
        "EBrowserType_OffScreen"),
        (o[(o.EBrowserType_OpenVROverlay = 1)] = "EBrowserType_OpenVROverlay"),
        (o[(o.EBrowserType_OpenVROverlay_Dashboard = 2)] =
          "EBrowserType_OpenVROverlay_Dashboard"),
        (o[(o.EBrowserType_DirectHWND = 3)] = "EBrowserType_DirectHWND"),
        (o[(o.EBrowserType_DirectHWND_Borderless = 4)] =
          "EBrowserType_DirectHWND_Borderless"),
        (o[(o.EBrowserType_DirectHWND_Hidden = 5)] =
          "EBrowserType_DirectHWND_Hidden"),
        (o[(o.EBrowserType_ChildHWNDNative = 6)] =
          "EBrowserType_ChildHWNDNative"),
        (o[(o.EBrowserType_Transparent_Toplevel = 7)] =
          "EBrowserType_Transparent_Toplevel"),
        (o[(o.EBrowserType_OffScreen_SharedTexture = 8)] =
          "EBrowserType_OffScreen_SharedTexture"),
        (o[(o.EBrowserType_OffScreen_GameOverlay = 9)] =
          "EBrowserType_OffScreen_GameOverlay"),
        (o[(o.EBrowserType_OffScreen_GameOverlay_SharedTexture = 10)] =
          "EBrowserType_OffScreen_GameOverlay_SharedTexture"),
        (o[(o.EBrowserType_Offscreen_FriendsUI = 11)] =
          "EBrowserType_Offscreen_FriendsUI"),
        (o[(o.EBrowserType_MAX = 12)] = "EBrowserType_MAX");
      var s, a, c, l;
      ((a = s = s || {})[(a.k_EClientUINotificationGroupChatMessage = 1)] =
        "k_EClientUINotificationGroupChatMessage"),
        (a[(a.k_EClientUINotificationFriendChatMessage = 2)] =
          "k_EClientUINotificationFriendChatMessage"),
        (a[(a.k_EClientUINotificationFriendPersonaState = 3)] =
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
      function d(e) {
        return (
          "game" === e ||
          "dlc" === e ||
          "software" === e ||
          "music" === e ||
          "application" === e
        );
      }
      var m, h, f, g;
      ((h = m = m || {})[(h.k_EClientUsedInputTypeKeyboard = 0)] =
        "k_EClientUsedInputTypeKeyboard"),
        (h[(h.k_EClientUsedInputTypeMouse = 1)] =
          "k_EClientUsedInputTypeMouse"),
        (h[(h.k_EClientUsedInputTypeController = 2)] =
          "k_EClientUsedInputTypeController"),
        (h[(h.k_EClientUsedInputTypeMax = 3)] = "k_EClientUsedInputTypeMax"),
        ((g = f = f || {})[(g.k_ERemoteClientLaunchOK = 1)] =
          "k_ERemoteClientLaunchOK"),
        (g[(g.k_ERemoteClientLaunchFail = 2)] = "k_ERemoteClientLaunchFail"),
        (g[(g.k_ERemoteClientLaunchRequiresUI = 3)] =
          "k_ERemoteClientLaunchRequiresUI"),
        (g[(g.k_ERemoteClientLaunchRequiresLaunchOption = 4)] =
          "k_ERemoteClientLaunchRequiresLaunchOption"),
        (g[(g.k_ERemoteClientLaunchRequiresEULA = 5)] =
          "k_ERemoteClientLaunchRequiresEULA"),
        (g[(g.k_ERemoteClientLaunchTimeout = 6)] =
          "k_ERemoteClientLaunchTimeout"),
        (g[(g.k_ERemoteClientLaunchStreamTimeout = 7)] =
          "k_ERemoteClientLaunchStreamTimeout"),
        (g[(g.k_ERemoteClientLaunchStreamClientFail = 8)] =
          "k_ERemoteClientLaunchStreamClientFail"),
        (g[(g.k_ERemoteClientLaunchOtherGameRunning = 9)] =
          "k_ERemoteClientLaunchOtherGameRunning"),
        (g[(g.k_ERemoteClientLaunchDownloadStarted = 10)] =
          "k_ERemoteClientLaunchDownloadStarted"),
        (g[(g.k_ERemoteClientLaunchDownloadNoSpace = 11)] =
          "k_ERemoteClientLaunchDownloadNoSpace"),
        (g[(g.k_ERemoteClientLaunchDownloadFiltered = 12)] =
          "k_ERemoteClientLaunchDownloadFiltered"),
        (g[(g.k_ERemoteClientLaunchDownloadRequiresUI = 13)] =
          "k_ERemoteClientLaunchDownloadRequiresUI"),
        (g[(g.k_ERemoteClientLaunchAccessDenied = 14)] =
          "k_ERemoteClientLaunchAccessDenied"),
        (g[(g.k_ERemoteClientLaunchNetworkError = 15)] =
          "k_ERemoteClientLaunchNetworkError"),
        (g[(g.k_ERemoteClientLaunchProgress = 16)] =
          "k_ERemoteClientLaunchProgress"),
        (g[(g.k_ERemoteClientLaunchParentalUnlockFailed = 17)] =
          "k_ERemoteClientLaunchParentalUnlockFailed"),
        (g[(g.k_ERemoteClientLaunchScreenLocked = 18)] =
          "k_ERemoteClientLaunchScreenLocked"),
        (g[(g.k_ERemoteClientLaunchUnsupported = 19)] =
          "k_ERemoteClientLaunchUnsupported"),
        (g[(g.k_ERemoteClientLaunchDisabledLocal = 20)] =
          "k_ERemoteClientLaunchDisabledLocal"),
        (g[(g.k_ERemoteClientLaunchDisabledRemote = 21)] =
          "k_ERemoteClientLaunchDisabledRemote"),
        (g[(g.k_ERemoteClientLaunchBroadcasting = 22)] =
          "k_ERemoteClientLaunchBroadcasting"),
        (g[(g.k_ERemoteClientLaunchBusy = 23)] = "k_ERemoteClientLaunchBusy"),
        (g[(g.k_ERemoteClientLaunchDriversNotInstalled = 24)] =
          "k_ERemoteClientLaunchDriversNotInstalled"),
        (g[(g.k_ERemoteClientLaunchTransportUnavailable = 25)] =
          "k_ERemoteClientLaunchTransportUnavailable"),
        (g[(g.k_ERemoteClientLaunchCanceled = 26)] =
          "k_ERemoteClientLaunchCanceled"),
        (g[(g.k_ERemoteClientLaunchInvisible = 27)] =
          "k_ERemoteClientLaunchInvisible"),
        (g[(g.k_ERemoteClientLaunchRestrictedCountry = 28)] =
          "k_ERemoteClientLaunchRestrictedCountry");
      var _, v;
      ((v = _ = _ || {})[(v.k_ESteamRealmUnknown = 0)] =
        "k_ESteamRealmUnknown"),
        (v[(v.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
        (v[(v.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina");
      var b, y, M, w, O, F;
      ((y = b = b || {})[(y.Unknown = 0)] = "Unknown"),
        (y[(y.Wired = 1)] = "Wired"),
        (y[(y.Wireless = 2)] = "Wireless"),
        ((w = M = M || {})[(w.NotPresent = 0)] = "NotPresent"),
        (w[(w.Failed = 1)] = "Failed"),
        (w[(w.Disconnected = 2)] = "Disconnected"),
        (w[(w.Disconnecting = 3)] = "Disconnecting"),
        (w[(w.Connecting = 4)] = "Connecting"),
        (w[(w.Connected = 5)] = "Connected"),
        (w[(w.Retrying = 6)] = "Retrying"),
        ((F = O = O || {})[(F.None = 0)] = "None"),
        (F[(F.StaticWep = 1)] = "StaticWep"),
        (F[(F.DynamicWep = 2)] = "DynamicWep"),
        (F[(F.Wpa = 4)] = "Wpa"),
        (F[(F.WpaEnterprise = 8)] = "WpaEnterprise"),
        (F[(F.Wpa2 = 16)] = "Wpa2"),
        (F[(F.Wpa2Enterprise = 32)] = "Wpa2Enterprise"),
        (F[(F.Unsupported = 32768)] = "Unsupported");
    },
    lkRc: function(e, t, n) {
      "use strict";
      n.d(t, "c", function() {
        return m;
      }),
        n.d(t, "i", function() {
          return h;
        }),
        n.d(t, "a", function() {
          return f;
        }),
        n.d(t, "b", function() {
          return g;
        }),
        n.d(t, "g", function() {
          return c;
        }),
        n.d(t, "h", function() {
          return l;
        }),
        n.d(t, "f", function() {
          return u;
        }),
        n.d(t, "d", function() {
          return p;
        }),
        n.d(t, "e", function() {
          return _;
        });
      var r,
        d = n("mrSG"),
        i = n("YyVH"),
        o = n("Jnrd"),
        m = {
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
              if (!Object(o.a)()) return (r = r || a());
              var e = Object(o.b)("sessionid");
              e = e || a();
              return e;
            })();
          },
          FRIENDSUI_BETA: !1,
          STEAM_TV: !1,
          DEV_MODE: !1,
          OFFLINE_MODE: !1
        },
        h = {
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
        f = { steamid: "", clanid: 0, listid: 0 },
        g = {
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
        s = "webui_config";
      function a() {
        var e = (function() {
          for (var e = "", t = 0; t < 24; t++)
            e += Object(i.b)(0, 35).toString(36);
          return e;
        })();
        return Object(o.c)("sessionid", e, 0), e;
      }
      function c(e) {
        void 0 === e && (e = s);
        var t = {},
          n = u("config", e);
        n && (delete n.SESSIONID, Object.assign(m, n), (t.config = !0));
        var r = u("userinfo", e);
        r && (Object.assign(h, r), (t.userConfig = !0));
        var i = u("broadcast", e);
        i && (Object.assign(f, i), (t.broadcastConfig = !0));
        var o = u("community", e);
        return o && (Object.assign(g, o), (t.communityConfig = !0)), t;
      }
      function l(l, u, p) {
        return Object(d.b)(this, void 0, void 0, function() {
          var t, n, r, i, o, s, a, c;
          return Object(d.e)(this, function(e) {
            switch (e.label) {
              case 0:
                return p.config ? [4, l.get(u + "ajaxgetconfig")] : [3, 2];
              case 1:
                (t = e.sent()),
                  (n = t.data) && (delete n.SESSIONID, Object.assign(m, n)),
                  (e.label = 2);
              case 2:
                return p.userConfig
                  ? [4, l.get(u + "ajaxgetuserconfig", { withCredentials: !0 })]
                  : [3, 4];
              case 3:
                (r = e.sent()),
                  (i = r.data) && Object.assign(h, i),
                  (e.label = 4);
              case 4:
                return p.broadcastConfig
                  ? [4, l.get(u + "ajaxgetbroadcastconfig")]
                  : [3, 6];
              case 5:
                (o = e.sent()),
                  (s = o.data) && Object.assign(f, s),
                  (e.label = 6);
              case 6:
                return p.communityConfig
                  ? [4, l.get(u + "ajaxgetcommunityconfig")]
                  : [3, 8];
              case 7:
                (a = e.sent()),
                  (c = a.data) && Object.assign(g, c),
                  (e.label = 8);
              case 8:
                return [2];
            }
          });
        });
      }
      function u(e, t) {
        var n;
        if (
          (void 0 === t && (t = s),
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
      function p() {
        var e = window.location.href;
        return e.startsWith(m.STORE_BASE_URL)
          ? m.STORE_BASE_URL
          : e.startsWith(m.COMMUNITY_BASE_URL)
          ? m.COMMUNITY_BASE_URL
          : e.startsWith(m.PARTNER_BASE_URL)
          ? m.PARTNER_BASE_URL
          : e.startsWith(m.HELP_BASE_URL)
          ? m.HELP_BASE_URL
          : e.startsWith(m.STEAMTV_BASE_URL)
          ? m.STEAMTV_BASE_URL
          : "";
      }
      function _() {
        var e = window.location.href;
        return e.startsWith(m.STORE_BASE_URL)
          ? "store"
          : e.startsWith(m.COMMUNITY_BASE_URL)
          ? "community"
          : e.startsWith(m.PARTNER_BASE_URL)
          ? "partnerweb"
          : e.startsWith(m.HELP_BASE_URL)
          ? "help"
          : e.startsWith(m.STEAMTV_BASE_URL)
          ? "steamtv"
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
    mgoM: function(e, t, n) {
      "use strict";
      n.d(t, "f", function() {
        return r;
      }),
        n.d(t, "g", function() {
          return i;
        }),
        n.d(t, "e", function() {
          return o;
        }),
        n.d(t, "c", function() {
          return s;
        }),
        n.d(t, "b", function() {
          return a;
        }),
        n.d(t, "d", function() {
          return c;
        }),
        n.d(t, "a", function() {
          return l;
        });
      var r = 1,
        i = 4,
        o = "18446744073709551615";
      function s(e, t) {
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
      function a(e, t) {
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
      var l = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        31,
        32,
        34,
        35
      ];
    },
    "qD+2": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return _;
      });
      var c = n("mrSG"),
        r = n("2vnA"),
        l = n("kyHq"),
        u = n("bxBv"),
        p = n("lkRc"),
        i = n("8H1D"),
        a = n("r64O"),
        d = (function() {
          function e(e) {
            (this.m_bInitialized = !1), (this.m_unAppID = e);
          }
          return (
            Object.defineProperty(e.prototype, "appid", {
              get: function() {
                return this.m_unAppID;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "is_initialized", {
              get: function() {
                return this.m_bInitialized;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "is_valid", {
              get: function() {
                return this.m_bInitialized && !!this.m_strName;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "name", {
              get: function() {
                return this.m_strName;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "header_image_url", {
              get: function() {
                return (
                  p.c.MEDIA_CDN_URL +
                  ("steam/apps/" + this.m_unAppID) +
                  "/header.jpg"
                );
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "icon_url", {
              get: function() {
                return this.BuildAppURL(
                  this.m_strIconURL,
                  "061818254b2c99ac49e6626adb128ed1282a392f"
                );
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "logo_url", {
              get: function() {
                return this.BuildAppURL(
                  this.m_strLogoURL,
                  "338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif"
                );
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "time_updated_from_server", {
              get: function() {
                return this.m_dtUpdatedFromServer;
              },
              enumerable: !1,
              configurable: !0
            }),
            (e.prototype.BuildAppURL = function(e, t) {
              return e
                ? p.c.MEDIA_CDN_COMMUNITY_URL +
                    "images/apps/" +
                    this.appid +
                    "/" +
                    e +
                    ".jpg"
                : Object(i.a)(t);
            }),
            (e.prototype.DeserializeFromMessage = function(e) {
              (this.m_bInitialized = !0),
                (this.m_strName = e.name()),
                (this.m_strIconURL = e.icon()),
                (this.m_strLogoURL = e.logo()),
                (this.m_dtUpdatedFromServer = new Date());
            }),
            (e.prototype.DeserializeFromAppOverview = function(e) {
              e.logo_hash() && 1073741824 != e.app_type()
                ? ((this.m_bInitialized = !0),
                  (this.m_strName = e.display_name()),
                  (this.m_strIconURL = e.icon_hash()),
                  (this.m_strLogoURL = e.logo_hash()),
                  (this.m_dtUpdatedFromServer = new Date()))
                : (this.m_bInitialized = !1);
            }),
            (e.prototype.DeserializeFromCacheObject = function(e) {
              try {
                (this.m_strName = e.strName),
                  (this.m_strIconURL = e.strIconURL),
                  (this.m_strLogoURL = e.strLogoURL),
                  (this.m_dtUpdatedFromServer = new Date(
                    e.strUpdatedFromServer
                  )),
                  (this.m_bInitialized = !0);
              } catch (e) {}
            }),
            (e.prototype.SerializeToCacheObject = function() {
              return (
                Object(a.a)(
                  this.m_bInitialized,
                  "Attempting to serialize an uninitialized AppInfo object for caching!"
                ),
                this.m_bInitialized
                  ? {
                      strName: this.m_strName,
                      strIconURL: this.m_strIconURL,
                      strLogoURL: this.m_strLogoURL,
                      strUpdatedFromServer: this.m_dtUpdatedFromServer.toJSON()
                    }
                  : null
              );
            }),
            e
          );
        })(),
        o = (function() {
          function e(e) {
            (this.m_nLastUpdated = 0),
              (this.m_mapLanguages = r.x.map()),
              (this.m_fetching = null),
              (this.m_appid = e);
          }
          return (
            (e.prototype.GetAppID = function() {
              return this.m_appid;
            }),
            (e.prototype.GetTokenList = function(e) {
              return this.m_mapLanguages.has(e)
                ? this.m_mapLanguages.get(e)
                : null;
            }),
            (e.prototype.Localize = function(e, t) {
              var n = p.c.LANGUAGE;
              return m(
                e,
                this.GetTokenList(n),
                "english" != n ? this.GetTokenList("english") : null,
                this.m_appid,
                t
              );
            }),
            (e.prototype.SubstituteParams = function(e, t) {
              var n = p.c.LANGUAGE;
              return h(
                e,
                this.GetTokenList(n),
                "english" != n ? this.GetTokenList("english") : null,
                this.m_appid,
                t
              );
            }),
            e
          );
        })();
      function m(e, t, n, r, i) {
        if (!e.startsWith("#"))
          return console.log("Token doesn't start with #:", e), "";
        var o = e;
        e = e.toLowerCase();
        var s = "";
        if (
          (t && t.has(e) && (s = t.get(e)),
          !s && n && n.has(e) && (s = n.get(e)),
          s)
        )
          s = h(s, t, n, r, i);
        else if (
          ((t || n) &&
            console.log(
              "No loc found for appid",
              r,
              o,
              "Tokens:",
              t,
              "Fallback:",
              n
            ),
          t && 1 != p.c.EUNIVERSE)
        )
          return e;
        return s;
      }
      function h(e, t, n, r, i) {
        var o = e.match(/{[A-za-z0-9_%#:]+}/g);
        if (o)
          for (var s = 0, a = o; s < a.length; s++) {
            var c = a[s],
              l = m(f(c.slice(1, -1), i), t, n, r, i);
            if (!l) return "";
            e = e.replace(c, l);
          }
        return (e = f(e, i));
      }
      function f(e, t) {
        var n = e.match(/%[A-Za-z0-9_:]+%/g);
        if (n)
          for (var r = 0, i = n; r < i.length; r++) {
            var o = i[r],
              s = o.slice(1, -1).toLowerCase(),
              a = t.get(s);
            null == a
              ? console.log("No rich presence found for", s)
              : (e = e.replace(o, a));
          }
        return e;
      }
      var g = n("MUT6"),
        s = n("qiKp"),
        _ = new ((function() {
          function e() {
            (this.m_mapAppInfo = r.x.map()),
              (this.m_mapRichPresenceLoc = r.x.map()),
              (this.m_cAppInfoRequestsInFlight = 0),
              (this.m_setPendingAppInfo = new Set()),
              (this.m_CacheStorage = null),
              (this.m_fnCallbackOnAppInfoLoaded = new s.a());
          }
          return (
            (e.prototype.Init = function(e) {
              this.m_CMInterface = e;
            }),
            (e.prototype.BHavePendingAppInfoRequests = function() {
              return (
                0 < this.m_setPendingAppInfo.size ||
                0 < this.m_cAppInfoRequestsInFlight
              );
            }),
            Object.defineProperty(e.prototype, "CMInterface", {
              get: function() {
                return this.m_CMInterface;
              },
              enumerable: !1,
              configurable: !0
            }),
            (e.prototype.RegisterCallbackOnLoad = function(e) {
              if (!this.BHavePendingAppInfoRequests())
                return (
                  Object(a.a)(
                    !1,
                    "Registering for callback on appinfo load, but nothing queued"
                  ),
                  void e()
                );
              this.m_fnCallbackOnAppInfoLoaded.Register(e);
            }),
            (e.prototype.IsLoadingAppID = function(e) {
              return this.m_setPendingAppInfo.has(e);
            }),
            (e.prototype.GetAppInfo = function(e) {
              var t;
              return (
                Object(a.a)(
                  this.m_CMInterface,
                  "CAppInfoStore.GetAppInfo called before Init"
                ),
                Object(a.a)(e, "Requesting App ID 0, which won't ever exist"),
                this.m_mapAppInfo.has(e) ||
                  ((t = new d(e)),
                  this.m_mapAppInfo.set(e, t),
                  this.QueueAppInfoRequest(e)),
                this.m_mapAppInfo.get(e)
              );
            }),
            (e.prototype.QueueAppInfoRequest = function(e) {
              var t = this;
              return e
                ? (this.m_setPendingAppInfo.size ||
                    ((this.m_PendingAppInfoPromise = new Promise(function(e) {
                      return (t.m_PendingAppInfoResolve = e);
                    })),
                    window.setTimeout(function() {
                      return t.FlushPendingAppInfo();
                    }, 25)),
                  this.m_setPendingAppInfo.add(e),
                  this.m_PendingAppInfoPromise)
                : Promise.resolve();
            }),
            (e.prototype.FlushPendingAppInfo = function() {
              return Object(c.b)(this, void 0, void 0, function() {
                var t, n;
                return Object(c.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.m_PendingAppInfoResolve),
                        (n = Array.from(this.m_setPendingAppInfo)),
                        (this.m_PendingAppInfoPromise = void 0),
                        (this.m_PendingAppInfoResolve = void 0),
                        this.m_setPendingAppInfo.clear(),
                        [4, this.LoadAppInfoBatch(n)]
                      );
                    case 1:
                      return e.sent(), t(), [2];
                  }
                });
              });
            }),
            (e.prototype.LoadAppInfoBatch = function(a) {
              return Object(c.b)(this, void 0, void 0, function() {
                var t, n, r, i, o, s;
                return Object(c.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        this.m_cAppInfoRequestsInFlight++,
                        [4, this.LoadAppInfoBatchFromLocalCache(a)]
                      );
                    case 1:
                      return (t = e.sent()).length
                        ? (console.log(
                            "Loading batch of App Info from Steam: ",
                            t
                          ),
                          [4, this.m_CMInterface.WaitUntilLoggedOn()])
                        : [3, 5];
                    case 2:
                      e.sent(),
                        (n = u.a.Init(g.b))
                          .Body()
                          .set_language(Object(l.e)(p.c.LANGUAGE)),
                        (r = 50),
                        (e.label = 3);
                    case 3:
                      return 0 < t.length
                        ? ((i = Math.min(r, t.length)),
                          (o = t.slice(0, i)),
                          (t = t.slice(i)),
                          n.Body().set_appids(o),
                          [
                            4,
                            g.g.GetApps(
                              this.m_CMInterface.GetServiceTransport(),
                              n
                            )
                          ])
                        : [3, 5];
                    case 4:
                      return (
                        1 == (s = e.sent()).GetEResult()
                          ? this.OnGetAppsResponse(s)
                          : console.error(
                              "Error when calling CommunityService.GetApps: EResult=" +
                                s.GetEResult() +
                                ", AppIDs:",
                              o
                            ),
                        [3, 3]
                      );
                    case 5:
                      return (
                        0 == --this.m_cAppInfoRequestsInFlight &&
                          0 == this.m_setPendingAppInfo.size &&
                          (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
                          this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks()),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.OnGetAppsResponse = function(e) {
              for (var t = [], n = 0, r = e.Body().apps(); n < r.length; n++) {
                var i = r[n],
                  o = this.m_mapAppInfo.get(i.appid());
                Object(a.a)(
                  o,
                  "Got AppInfo response for unrequested AppID: " + i.appid()
                ),
                  o &&
                    ((o = new d(i.appid())).DeserializeFromMessage(i),
                    this.m_mapAppInfo.set(i.appid(), o),
                    t.push(o));
              }
              this.SaveAppInfoBatchToLocalCache(t);
            }),
            (e.prototype.OnAppOverviewChange = function(e) {
              for (var t = 0, n = e; t < n.length; t++) {
                var r = n[t],
                  i = new d(r.appid());
                i.DeserializeFromAppOverview(r),
                  this.m_mapAppInfo.set(r.appid(), i);
              }
            }),
            (e.prototype.EnsureAppInfoForAppIDs = function(t) {
              return Object(c.b)(this, void 0, void 0, function() {
                var n,
                  r = this;
                return Object(c.e)(this, function(e) {
                  return (
                    (n = !1),
                    t.forEach(function(e) {
                      var t = r.m_mapAppInfo.get(e);
                      t
                        ? t.is_valid || (n = !0)
                        : ((t = new d(e)),
                          r.m_mapAppInfo.set(e, t),
                          r.QueueAppInfoRequest(e),
                          (n = !0));
                    }),
                    n && void 0 !== this.m_PendingAppInfoPromise
                      ? [2, this.m_PendingAppInfoPromise]
                      : [2, Promise.resolve()]
                  );
                });
              });
            }),
            (e.prototype.SetCacheStorage = function(e) {
              this.m_CacheStorage = e;
            }),
            (e.prototype.GetCacheKeyForAppID = function(e) {
              return "APPINFO_" + e;
            }),
            (e.prototype.LoadAppInfoBatchFromLocalCache = function(s) {
              return Object(c.b)(this, void 0, void 0, function() {
                var i,
                  t,
                  n,
                  r,
                  o = this;
                return Object(c.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_CacheStorage
                        ? (console.log(
                            "Loading batch of App Info from Local Cache: ",
                            s
                          ),
                          (i = new Date(new Date().getTime() - 12096e5)),
                          (t = function(r) {
                            return Object(c.b)(o, void 0, void 0, function() {
                              var t, n;
                              return Object(c.e)(this, function(e) {
                                switch (e.label) {
                                  case 0:
                                    return [
                                      4,
                                      this.m_CacheStorage.GetObject(
                                        this.GetCacheKeyForAppID(r)
                                      )
                                    ];
                                  case 1:
                                    return (t = e.sent())
                                      ? ((n = this.m_mapAppInfo.get(r)),
                                        Object(a.a)(
                                          n,
                                          "Didn't find AppInfo in our map when loading from cache but it should've been there?"
                                        ),
                                        n
                                          ? ((n = new d(
                                              r
                                            )).DeserializeFromCacheObject(t),
                                            n.is_initialized
                                              ? (this.m_mapAppInfo.set(r, n),
                                                n.time_updated_from_server < i
                                                  ? [2, r]
                                                  : [2, null])
                                              : (console.warn(
                                                  "Failed to deserialize cached App Info: ",
                                                  r,
                                                  t
                                                ),
                                                [2, r]))
                                          : [2, r])
                                      : [2, r];
                                }
                              });
                            });
                          }),
                          (n = s.map(t)),
                          [4, Promise.all(n)])
                        : [2, s];
                    case 1:
                      return (
                        (r = e.sent()),
                        [
                          2,
                          r.filter(function(e) {
                            return null !== e;
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.SaveAppInfoBatchToLocalCache = function(o) {
              return Object(c.b)(this, void 0, void 0, function() {
                var t, n, r, i;
                return Object(c.e)(this, function(e) {
                  if (!this.m_CacheStorage) return [2];
                  for (
                    console.log(
                      "Saving batch of App Info to Local Cache: ",
                      o.map(function(e) {
                        return e.appid;
                      })
                    ),
                      t = 0,
                      n = o;
                    t < n.length;
                    t++
                  )
                    (r = n[t]),
                      (i = r.SerializeToCacheObject()) &&
                        this.m_CacheStorage.StoreObject(
                          this.GetCacheKeyForAppID(r.appid),
                          i
                        );
                  return [2];
                });
              });
            }),
            (e.prototype.Localize = function(e, t, n) {
              var r = this.GetRichPresenceLoc(e);
              return r
                ? r.Localize(t, n)
                : 1 != p.c.EUNIVERSE
                ? (console.log(
                    "Unable to find app localization information for app " +
                      e +
                      " token " +
                      t +
                      ", this may not have had a chance to load yet"
                  ),
                  t)
                : "";
            }),
            (e.prototype.GetRichPresenceLoc = function(e) {
              if (this.m_mapRichPresenceLoc.has(e.toString())) {
                var t = this.m_mapRichPresenceLoc.get(e.toString());
                return (
                  t.m_nLastUpdated + 72e5 < Date.now() &&
                    this.QueueRichPresenceLocRequest(t),
                  t
                );
              }
              var n = new o(e);
              return (
                this.m_mapRichPresenceLoc.set(e.toString(), n),
                this.QueueRichPresenceLocRequest(n),
                n
              );
            }),
            (e.prototype.GetRichPresenceLocAsync = function(e) {
              var t = this.GetRichPresenceLoc(e);
              return t.m_nLastUpdated ? Promise.resolve(t) : t.m_fetching;
            }),
            (e.prototype.OnRichPresenceLocUpdate = function(e, t) {
              e.m_nLastUpdated = Date.now();
              for (var n = 0, r = t; n < r.length; n++) {
                var i = r[n],
                  o = i.language(),
                  s = e.m_mapLanguages.get(o);
                s
                  ? s.clear()
                  : (e.m_mapLanguages.set(o, new Map()),
                    (s = e.m_mapLanguages.get(o)));
                for (var a = 0, c = i.tokens(); a < c.length; a++) {
                  var l = c[a];
                  s.set(l.name().toLowerCase(), l.value());
                }
              }
            }),
            (e.prototype.QueueRichPresenceLocRequest = function(t) {
              var n = this;
              return (
                t.m_fetching ||
                  ((t.m_fetching = this.m_CMInterface
                    .WaitUntilLoggedOn()
                    .then(function() {
                      var e = u.a.Init(g.a);
                      return (
                        e.Body().set_appid(t.GetAppID()),
                        e.Body().set_language(p.c.LANGUAGE),
                        g.g.GetAppRichPresenceLocalization(
                          n.m_CMInterface.GetServiceTransport(),
                          e
                        )
                      );
                    })
                    .then(function(e) {
                      return (
                        (t.m_fetching = null),
                        1 != e.GetEResult()
                          ? Promise.reject()
                          : (n.OnRichPresenceLocUpdate(
                              t,
                              e.Body().token_lists()
                            ),
                            Promise.resolve(t))
                      );
                    })),
                  t.m_fetching.catch(function() {
                    t.m_fetching = null;
                  })),
                t.m_fetching
              );
            }),
            Object(c.c)([r.h], e.prototype, "OnGetAppsResponse", null),
            Object(c.c)([r.h], e.prototype, "OnRichPresenceLocUpdate", null),
            e
          );
        })())();
    },
    qiKp: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return o;
      }),
        n.d(t, "b", function() {
          return a;
        }),
        n.d(t, "c", function() {
          return c;
        }),
        n.d(t, "d", function() {
          return l;
        });
      var s = n("mrSG"),
        r = n("Kw0F"),
        i = n("bxiW"),
        o = (function() {
          function e() {
            this.m_vecCallbacks = [];
          }
          return (
            (e.prototype.Register = function(e) {
              var t = this;
              this.m_vecCallbacks.push(e);
              return {
                Unregister: function() {
                  r.b(t.m_vecCallbacks, e);
                }
              };
            }),
            (e.prototype.Dispatch = function() {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              for (var n = 0, r = this.m_vecCallbacks; n < r.length; n++) {
                r[n].apply(void 0, e);
              }
            }),
            (e.prototype.ClearAllCallbacks = function() {
              this.m_vecCallbacks = [];
            }),
            e
          );
        })(),
        a = (function() {
          function e() {}
          return (
            (e.prototype.Schedule = function(e, t) {
              this.IsScheduled() && this.Cancel(),
                (this.m_fnCallback = t),
                (this.m_schTimer = window.setTimeout(
                  this.ScheduledInternal,
                  e
                ));
            }),
            (e.prototype.IsScheduled = function() {
              return void 0 !== this.m_schTimer;
            }),
            (e.prototype.Cancel = function() {
              this.m_schTimer &&
                (clearTimeout(this.m_schTimer), (this.m_schTimer = void 0));
            }),
            (e.prototype.ScheduledInternal = function() {
              this.m_schTimer = void 0;
              var e = this.m_fnCallback;
              (this.m_fnCallback = void 0), e();
            }),
            Object(s.c)([i.a], e.prototype, "ScheduledInternal", null),
            e
          );
        })(),
        c = (function() {
          function e() {
            this.m_rgListeners = [];
          }
          return (
            (e.prototype.AddEventListener = function(e, t, n) {
              e.addEventListener(t, n),
                this.m_rgListeners.push({ element: e, type: t, listener: n });
            }),
            (e.prototype.Unregister = function() {
              for (var e = 0, t = this.m_rgListeners; e < t.length; e++) {
                var n = t[e];
                n.element.removeEventListener(n.type, n.listener);
              }
              this.m_rgListeners = [];
            }),
            e
          );
        })();
      function l(o) {
        return Object(s.b)(this, void 0, void 0, function() {
          var t, r, n, i;
          return Object(s.e)(this, function(e) {
            switch (e.label) {
              case 0:
                return (
                  (t = []),
                  (r = Object.keys(o)).forEach(function(e) {
                    return t.push(o[e]);
                  }),
                  [4, Promise.all(t)]
                );
              case 1:
                return (
                  (n = e.sent()),
                  (i = {}),
                  [
                    2,
                    n.reduce(function(e, t, n) {
                      return (e[r[n]] = t), e;
                    }, i)
                  ]
                );
            }
          });
        });
      }
    },
    r64O: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return r;
      });
      var i = n("mrSG");
      function r(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        console.assert
          ? 0 == n.length
            ? console.assert(!!e, t)
            : console.assert.apply(console, Object(i.g)([!!e, t], n))
          : e || console.warn.apply(console, Object(i.g)([t], n));
      }
    },
    rCDf: function(e, t, r) {
      var i = {
        "./shared_arabic.json": ["d1TB", 37],
        "./shared_brazilian.json": ["Pg9r", 38],
        "./shared_bulgarian.json": ["ENge", 39],
        "./shared_czech.json": ["Ts6V", 40],
        "./shared_danish.json": ["9oiU", 41],
        "./shared_dutch.json": ["nxN4", 42],
        "./shared_english.json": ["TYjx", 3],
        "./shared_finnish.json": ["NuB8", 43],
        "./shared_french.json": ["bOPj", 44],
        "./shared_german.json": ["svuF", 45],
        "./shared_greek.json": ["eJKB", 46],
        "./shared_hungarian.json": ["T7i2", 47],
        "./shared_italian.json": ["w96W", 48],
        "./shared_japanese.json": ["XQ4S", 49],
        "./shared_koreana.json": ["4hyI", 50],
        "./shared_latam.json": ["3qrw", 51],
        "./shared_norwegian.json": ["XA4Q", 52],
        "./shared_polish.json": ["TpXn", 53],
        "./shared_portuguese.json": ["Q8UV", 54],
        "./shared_romanian.json": ["Eme1", 55],
        "./shared_russian.json": ["BUiO", 56],
        "./shared_schinese.json": ["3UpY", 57],
        "./shared_spanish.json": ["4Fxc", 58],
        "./shared_swedish.json": ["0JhB", 59],
        "./shared_tchinese.json": ["OYRc", 60],
        "./shared_thai.json": ["lhAZ", 61],
        "./shared_turkish.json": ["RSoU", 62],
        "./shared_ukrainian.json": ["lNXI", 63],
        "./shared_vietnamese.json": ["RSmC", 64]
      };
      function n(t) {
        if (!r.o(i, t))
          return Promise.resolve().then(function() {
            var e = new Error("Cannot find module '" + t + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          });
        var e = i[t],
          n = e[0];
        return r.e(e[1]).then(function() {
          return r.t(n, 3);
        });
      }
      (n.keys = function() {
        return Object.keys(i);
      }),
        (n.id = "rCDf"),
        (e.exports = n);
    },
    sUmc: function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return s;
      }),
        n.d(t, "a", function() {
          return c;
        });
      var r = n("i8i4"),
        i = n("X3Ds"),
        o = (function() {
          return function(e) {
            this.instance = new a(e, !1);
          };
        })();
      function s(e) {
        return new a(e.body, !0);
      }
      var a = (function() {
          function e(e, t) {
            void 0 === t && (t = !0),
              (this.m_parent = e),
              (this.m_window = e.ownerDocument.defaultView),
              (this.m_bRemoveOnHide = t);
          }
          return (
            (e.prototype.Show = function(n, r) {
              var i = this;
              return (
                this.CancelShowInterval(),
                r
                  ? new Promise(function(t, e) {
                      i.iIntervalShow = i.m_window.setTimeout(function() {
                        var e = i.m_parent.ownerDocument;
                        e.defaultView &&
                          !e.defaultView.closed &&
                          (i.InternalShow(n), t());
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
              return this.m_container && i.c(this.m_container, e);
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
              var i = this.GetEmbeddedElement(e);
              return (i.activeObject = r), i.instance.Show(n, t);
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
                t || ((t = new o(e.body)), this.m_mapEmbeddedHovers.set(e, t)),
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
        return _;
      }),
        n.d(t, "d", function() {
          return v;
        }),
        n.d(t, "b", function() {
          return b;
        }),
        n.d(t, "f", function() {
          return y;
        }),
        n.d(t, "a", function() {
          return M;
        }),
        n.d(t, "e", function() {
          return w;
        }),
        n.d(t, "g", function() {
          return O;
        });
      var a = n("mrSG"),
        r = n("TyAF"),
        c = n("q1tI"),
        s = n("i8i4"),
        l = n("TtDX"),
        u = n("JMS6"),
        R = n("X3Ds"),
        i = n("bxiW"),
        o = n("6Y59"),
        p = n("D4wO"),
        d = n("TLQK"),
        m = n("lkRc"),
        h = n("+jbA"),
        f = n.n(h),
        g = n("exH9"),
        _ = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.children,
                n = e.className,
                r = e.renderMenuContainer,
                i = Object(a.f)(e, [
                  "children",
                  "className",
                  "renderMenuContainer"
                ]),
                o =
                  this.context.contextMenuInstance &&
                  this.context.contextMenuInstance.options.bUseWebStyles
                    ? "popup_menu popup_body"
                    : f.a.contextMenuContents;
              n && (o += " " + n);
              var s = r || "div";
              return c.createElement(
                s,
                Object(a.a)({}, i, { className: o }),
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
        v = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
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
                n = Object(a.f)(e, [
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
              var i = t || "div";
              return c.createElement(
                i,
                Object(a.a)({ onMouseEnter: this.OnMouseEnter }, n, {
                  onClick: this.OnClick,
                  unselectable: this.props.unselectable,
                  className: g.a.apply(void 0, r)
                }),
                this.props.children
              );
            }),
            (t.contextTypes = {
              contextMenuInstance: function() {
                return null;
              }
            }),
            Object(a.c)([i.a], t.prototype, "OnClick", null),
            Object(a.c)([i.a], t.prototype, "OnMouseEnter", null),
            t
          );
        })(c.PureComponent),
        b = (function(e) {
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
                i = Object(a.f)(e, ["bChecked", "children", "className"]);
              return c.createElement(
                v,
                Object(a.a)({}, i, {
                  className: Object(g.a)(r, t && "menuChecked")
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
              (e.relatedTarget && R.c(e.currentTarget, e.relatedTarget)) ||
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
                  R.c(
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
                i,
                o,
                s,
                a,
                c,
                l,
                u,
                p,
                d,
                m,
                h,
                f,
                g,
                _,
                v,
                b,
                y,
                M,
                w,
                O,
                F,
                E,
                S,
                C,
                k,
                j,
                D = this.m_elMenu,
                B = this.props.element;
              D &&
                B &&
                ((e = B.ownerDocument.defaultView),
                (D.ownerDocument.defaultView.CtxUpdate = this.PositionMenu.bind(
                  this
                )),
                (t = B.getBoundingClientRect()),
                (n = D.getBoundingClientRect()),
                (r = null != this.props.popup),
                (i = this.props.options),
                (o = {
                  menuLeft: void 0,
                  menuRight: void 0,
                  menuTop: void 0,
                  menuBottom: void 0,
                  menuWidth: void 0,
                  menuHeight: void 0
                }),
                (s = this.props.clientX),
                (a = this.props.clientY),
                (c = e.innerWidth),
                (l = e.innerHeight),
                r &&
                  (this.props.options.bScreenCoordinates ||
                    ((s += e.screenLeft), (a += e.screenTop)),
                  (t = R.g(e, t)),
                  (d = p = 0),
                  (u = e.screen).availLeft && (p = u.availLeft),
                  u.availTop && (d = u.availTop),
                  (c = p + u.availWidth),
                  (l = d + u.availHeight)),
                (i.bOverlapHorizontal || i.bOverlapVertical) &&
                  (s = a = void 0),
                (m = s || t.left),
                (h = s || t.right),
                (f = n.width),
                i.bMatchWidth && ((f = h - m), (o.menuWidth = f)),
                (_ = 0 < (g = (i.bOverlapHorizontal ? h : m) - f)),
                (b = 0 < (v = c - (i.bOverlapHorizontal ? m : h) - f)),
                (y = (i.bPreferPopLeft || !b) && _),
                _ ||
                  b ||
                  ((y = b < _),
                  i.bFitToWindow &&
                    ((f += (y ? g : v) - 8), (o.menuWidth = f))),
                (!i.bPreferPopLeft && b) || !_
                  ? (o.menuLeft = i.bOverlapHorizontal ? m : h)
                  : (o.menuRight = c - (i.bOverlapHorizontal ? h : m)),
                (M = a || t.top),
                (w = a || t.bottom),
                (O = D.scrollHeight),
                i.bMatchHeight && ((O = w - M), (o.menuHeight = O)),
                (E = 0 < (F = (i.bOverlapVertical ? w : M) - O)),
                (C = 0 < (S = l - (i.bOverlapVertical ? M : w) - O)),
                (j = (i.bPreferPopTop || !C) && E && !i.bDisablePopTop),
                E ||
                  C ||
                  ((k =
                    void 0 !== i.bShiftToFitWindow
                      ? i.bShiftToFitWindow
                      : i.bFitToWindow && !i.bOverlapHorizontal),
                  (j = S < F && !i.bDisablePopTop),
                  k && (j ? (o.menuTop = 4) : (o.menuBottom = 4)),
                  i.bFitToWindow &&
                    (k ? (O = Math.min(O, l - 8)) : (O += j ? F : S),
                    (o.menuHeight = O - 8))),
                void 0 === o.menuBottom &&
                  void 0 === o.menuTop &&
                  (j
                    ? (o.menuBottom = l - (i.bOverlapVertical ? w : M))
                    : (o.menuTop = i.bOverlapVertical ? M : w)),
                r
                  ? (o.menuHeight || (o.menuHeight = n.height),
                    o.menuWidth || (o.menuWidth = n.width),
                    o.menuBottom &&
                      !o.menuTop &&
                      ((o.menuTop = l - o.menuBottom - o.menuHeight),
                      (o.menuBottom = void 0)),
                    o.menuRight &&
                      !o.menuLeft &&
                      ((o.menuLeft = c - o.menuRight - o.menuWidth),
                      (o.menuRight = void 0)))
                  : (o.menuLeft && (o.menuLeft += e.scrollX),
                    o.menuTop && (o.menuTop += e.scrollY),
                    o.menuBottom &&
                      (o.menuBottom +=
                        e.document.body.clientHeight -
                        e.scrollY -
                        e.innerHeight),
                    o.menuRight &&
                      (o.menuRight +=
                        e.document.body.clientWidth -
                        e.scrollX -
                        e.innerWidth)),
                (o.menuLeft === this.state.menuLeft &&
                  o.menuRight === this.state.menuRight &&
                  o.menuTop === this.state.menuTop &&
                  o.menuBottom === this.state.menuBottom &&
                  o.menuWidth === this.state.menuWidth &&
                  o.menuHeight === this.state.menuHeight) ||
                  this.setState(o));
            }),
            (e.prototype.render = function() {
              var i,
                o = this,
                e = { visibility: this.state.ready ? "visible" : "hidden" };
              this.props.popup
                ? ((i = this.props.element.ownerDocument.defaultView),
                  void 0 !== this.state.menuLeft &&
                    void 0 !== this.state.menuTop &&
                    void 0 !== this.state.menuWidth &&
                    void 0 !== this.state.menuHeight &&
                    i.SteamClient.Window.GetWindowRestoreDetails(function(e) {
                      var t = o.props.popup.window,
                        n = o.state.menuLeft - i.screenX,
                        r = o.state.menuTop - i.screenY;
                      try {
                        t.SteamClient.Window.PositionWindowRelative(
                          e,
                          n,
                          r,
                          o.state.menuWidth,
                          o.state.menuHeight
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
            Object(a.c)([i.a], e.prototype, "BindMenuElement", null),
            Object(a.c)(
              [i.a, Object(p.a)(100)],
              e.prototype,
              "OnMenuMutation",
              null
            ),
            Object(a.c)([i.a], e.prototype, "OnWindowResize", null),
            Object(a.c)([i.a], e.prototype, "OnBlur", null),
            Object(a.c)([i.a], e.prototype, "OnKeyDown", null),
            (e = Object(a.c)([r.a], e))
          );
        })(c.Component)),
        M = (function(i) {
          function o(e, t, n) {
            var r =
              i.call(this, "contextmenu_" + o.sm_iContextMenuInstance++, {
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
            Object(a.d)(o, i),
            (o.prototype.UpdateParamsBeforeShow = function(e) {
              var t;
              return (
                this.m_menuProps.options.bScreenCoordinates
                  ? (e.dimensions = {
                      left: this.m_menuProps.clientX,
                      top: this.m_menuProps.clientY,
                      width: 350,
                      height: 1
                    })
                  : ((t = R.g(
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
            (o.prototype.Render = function(e, t) {
              s.render(
                c.createElement(
                  y,
                  Object(a.a)({}, this.m_menuProps, { popup: this }),
                  this.m_children
                ),
                t
              );
            }),
            (o.prototype.OnBlur = function() {}),
            (o.prototype.OnFocus = function() {}),
            (o.prototype.OnLoad = function() {}),
            (o.prototype.OnResize = function() {}),
            (o.prototype.OnClose = function() {}),
            (o.sm_iContextMenuInstance = 0),
            o
          );
        })(u.a);
      function w(e) {
        return c.createElement("div", {
          className: f.a.ContextMenuMouseOverlay
        });
      }
      function O(e) {
        var t = [],
          n = R.o(e),
          r = n.getSelection(),
          i = r && 0 < r.rangeCount && 0 < r.toString().length,
          o = e.target,
          s = !1;
        if (
          (o &&
            "tagName" in o &&
            (("INPUT" != o.tagName && "TEXTAREA" != o.tagName) || (s = !0)),
          (n.document.queryCommandEnabled("cut") || (i && s)) &&
            t.push(
              c.createElement(
                v,
                {
                  key: "cut",
                  onSelected: function() {
                    n.document.execCommand("cut");
                  }
                },
                Object(d.d)("#ContextMenu_Cut")
              )
            ),
          (document.queryCommandEnabled("copy") || i) &&
            t.push(
              c.createElement(
                v,
                {
                  key: "copy",
                  onSelected: function() {
                    n.document.execCommand("copy");
                  }
                },
                Object(d.d)("#ContextMenu_Copy")
              )
            ),
          m.c.IN_CLIENT &&
            s &&
            t.push(
              c.createElement(
                v,
                {
                  key: "paste",
                  onSelected: function() {
                    o.focus(), n.SteamClient._internal.Paste();
                  }
                },
                Object(d.d)("#ContextMenu_Paste")
              )
            ),
          t.length)
        )
          Object(l.a)(c.createElement(_, null, t), e);
        else {
          if (e.shiftKey) return;
          e.preventDefault(), e.stopPropagation();
        }
      }
    }
  },
  [["gfbn", 36, 0]]
]);

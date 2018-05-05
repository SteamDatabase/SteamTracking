/*! This file includes third-party software, governed by the licenses described here: https://steamcommunity.com/public/javascript/webui/profile.licenses.txt */

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
webpackJsonp(
  [3],
  {
    "3gXU": function(e, t) {},
    "4Dav": function(e, t, n) {
      "use strict";
      function i(e, t) {
        for (var n = [], i = 2; i < arguments.length; i++)
          n[i - 2] = arguments[i];
        console.assert
          ? 0 == n.length
            ? console.assert(!!e, t)
            : console.assert.apply(console, [!!e, t].concat(n))
          : e && console.warn.apply(console, [t].concat(n));
      }
      t.a = i;
    },
    "5Pz3": function(e, t, n) {
      "use strict";
      function i() {
        return B.createElement(
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
          B.createElement("path", {
            d:
              "M-232.755,589.942l3.103,2.408c5.78,4.492,11.973,8.18,18.409,10.959l3.581,1.547l2.276,33.783 c0.089,1.33,1.385,2.54,2.715,2.54h48.62c1.355,0,2.745-1.273,2.852-2.621l2.74-33.284l3.602-1.496 c6.406-2.656,12.646-6.262,18.554-10.707l3.137-2.366l30.578,15.009c1.155,0.571,2.924,0.017,3.563-1.087l24.303-42.1 c0.674-1.173,0.265-3.014-0.852-3.785l-27.872-19.309l0.469-3.832c0.495-4.032,0.725-7.395,0.725-10.57 c0-3.129-0.227-6.5-0.687-10.307l-0.469-3.896l28.699-19.253c1.112-0.741,1.509-2.473,0.84-3.627l-24.3-42.104 c-0.657-1.139-2.502-1.727-3.7-1.155l-31.208,14.748l-3.091-2.341c-5.571-4.224-11.466-7.688-17.522-10.306l-3.58-1.548 l-2.34-34.887c-0.089-1.33-1.381-2.536-2.715-2.536h-48.617c-1.355,0-2.74,1.274-2.851,2.626l-2.834,34.371l-3.593,1.501 c-6.082,2.535-12.028,5.924-17.667,10.071l-3.124,2.302l-31.392-15.413c-1.168-0.575-2.924-0.025-3.559,1.074l-24.309,42.107 c-0.678,1.172-0.264,3.014,0.848,3.781l28.068,19.444l-0.524,3.883c-0.592,4.378-0.865,8.018-0.865,11.462 c0,2.988,0.179,6.065,0.55,9.403l0.431,3.853l-28.528,19.125c-1.108,0.742-1.509,2.468-0.84,3.632l24.308,42.1 c0.656,1.142,2.489,1.726,3.7,1.154L-232.755,589.942z M-177.498,560.051c-19.311,0-35.02-15.709-35.02-35.02 s15.709-35.02,35.02-35.02s35.02,15.709,35.02,35.02S-158.188,560.051-177.498,560.051z"
          })
        );
      }
      function r() {
        return B.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_ChatSettings",
            version: "1.1",
            x: "0px",
            y: "0px",
            viewBox: "0 0 600 600"
          },
          B.createElement(
            "g",
            null,
            B.createElement("path", {
              d:
                "M256,0C126.6,0,21.3,104.7,21.3,233.7c0,65.9,26.5,125.4,74.7,168.3v99.3c0,3.8,2,7.4,5.3,9.2c1.7,1,3.5,1.5,5.3,1.5   c1.8,0,3.7-0.5,5.4-1.5l85.8-50.3c18.9,4.8,38.4,7.3,58.1,7.3c129.4,0,234.7-104.9,234.7-233.7C490.7,104.7,385.4,0,256,0z    M405.3,254.1L370,260c-3,13.5-8.3,26-15.5,37.3l20.8,29.2L347.8,354l-29.2-20.8c-11.3,7.2-23.8,12.5-37.3,15.5l-5.9,35.3h-39   l-5.9-35.3c-13.5-3-26-8.3-37.3-15.5L164.2,354l-27.5-27.5l20.8-29.2C150.3,286,145,273.5,142,260l-35.3-5.9v-39l35.3-5.9   c3-13.5,8.3-26,15.5-37.3l-20.8-29.2l27.5-27.5l29.2,20.8c11.3-7.2,23.8-12.5,37.3-15.5l5.9-35.3h39l5.9,35.3   c13.5,3,26,8.3,37.3,15.5l29.2-20.8l27.5,27.5L354.5,172c7.2,11.3,12.5,23.8,15.5,37.3l35.3,5.9V254.1z"
            }),
            B.createElement("circle", { cx: "256", cy: "234.6", r: "45.9" })
          )
        );
      }
      function o() {
        return B.createElement(
          "svg",
          {
            version: "1.1",
            className: "SVGIcon_Button SVGIcon_CopyToClipboard",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          B.createElement("polyline", {
            fill: "none",
            className: "line",
            strokeWidth: "12",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points:
              "178.25,197.25 247,197.25 247,82.5 175,10.25 111.5,10.25 111.5,56 "
          }),
          B.createElement("polygon", {
            fill: "none",
            className: "line",
            strokeWidth: "12",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "155,133 83,60.75 11,60.75 11,247.75 155,247.75 "
          }),
          B.createElement("polyline", {
            fill: "none",
            className: "line",
            strokeWidth: "12",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "83,60.75 83,133 155,133 "
          }),
          B.createElement("polyline", {
            fill: "none",
            className: "line",
            strokeWidth: "12",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "175,10.25 175,82.5 247,82.5 "
          })
        );
      }
      function s() {
        return B.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_DownArrowContextMenu",
            "data-name": "Layer 1",
            viewBox: "0 0 128 128",
            x: "0px",
            y: "0px"
          },
          B.createElement("polygon", {
            points:
              "50 59.49 13.21 22.89 4.74 31.39 50 76.41 95.26 31.39 86.79 22.89 50 59.49"
          })
        );
      }
      function a() {
        return B.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_MagnifyingGlass",
            version: "1.1",
            x: "0px",
            y: "0px",
            viewBox: "0 0 100 100"
          },
          B.createElement(
            "g",
            { transform: "translate(0,-952.36218)" },
            B.createElement("path", {
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
        );
      }
      function c(e) {
        var t = "SVGIcon_Button SVGIcon_Microphone";
        return (
          e.className && (t += " " + e.className),
          B.createElement(
            "svg",
            {
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              className: t,
              x: "0px",
              y: "0px",
              width: "256px",
              height: "256px",
              viewBox: "-127.5 664.5 256 256"
            },
            B.createElement(
              "g",
              { className: "MicBase" },
              B.createElement(
                "g",
                null,
                B.createElement(
                  "g",
                  null,
                  B.createElement("path", {
                    d:
                      "M-64.7,826.3c-0.5-2.9-0.8-5.8-0.8-8.7v-38.2h11.2v36.5L-64.7,826.3z"
                  }),
                  B.createElement("path", {
                    d:
                      "M-54.8,779.9v35.8l-9.6,9.6c-0.4-2.6-0.6-5.1-0.6-7.6v-37.7H-54.8 M-53.8,778.9H-66v38.7c0,3.3,0.4,6.5,1,9.7l11.2-11.2 V778.9L-53.8,778.9z"
                  })
                ),
                B.createElement(
                  "g",
                  null,
                  B.createElement("path", {
                    d:
                      "M56.8,817.6c0,24.7-24.8,44.9-55.3,44.9c-16.6,0-31.6-6-41.7-15.5l-8.6,8.6c11.1,10.5,26.7,17.5,44.2,18.8v25.1h-35.2 c-2.1,0-3.8,2.7-3.8,6.1c0,3.4,1.7,6.1,3.8,6.1h35.5H7.3h35.5c2.1,0,3.8-2.7,3.8-6.1c0-3.4-1.7-6.1-3.8-6.1H7.6v-25.1 C42,871.8,69,847.3,69,817.6v-38.7H56.8V817.6z"
                  }),
                  B.createElement("path", {
                    d:
                      "M69,778.9H56.8v38.7c0,24.7-24.8,44.9-55.3,44.9c-16.6,0-31.6-6-41.7-15.5l-8.6,8.6c11.1,10.5,26.7,17.5,44.2,18.8v25.1 h-35.2c-2.1,0-3.8,2.7-3.8,6.1c0,3.4,1.7,6.1,3.8,6.1h35.5H7.3h35.5c2.1,0,3.8-2.7,3.8-6.1c0-3.4-1.7-6.1-3.8-6.1H7.6v-25.1 C42,871.8,69,847.3,69,817.6V778.9L69,778.9z"
                  })
                )
              ),
              B.createElement(
                "g",
                null,
                B.createElement("path", {
                  d:
                    "M40.6,712.5c0-21.6-17.5-39.1-39.1-39.1c-21.6,0-39.1,17.5-39.1,39.1v87.4l10-10v-72.4h0v-5c0-16.1,13.1-29.1,29.1-29.1 c16.1,0,29.1,13.1,29.1,29.1v5v14.1l10-10V712.5z"
                })
              ),
              B.createElement(
                "g",
                null,
                B.createElement("path", {
                  d:
                    "M-4.7,835.4c-2.2-0.5-4.4-1.2-6.4-2.2C-9.1,834.2-6.9,834.9-4.7,835.4z"
                }),
                B.createElement("path", {
                  d: "M-0.1,836c-0.2,0-0.4,0-0.6,0C-0.6,836-0.4,836-0.1,836z"
                }),
                B.createElement("path", {
                  d: "M30.6,806.9C30.6,806.9,30.6,806.9,30.6,806.9v-16.6"
                }),
                B.createElement("path", {
                  d:
                    "M-11.9,832.8c0.2,0.1,0.5,0.2,0.7,0.3C-11.4,833-11.7,832.9-11.9,832.8L-11.9,832.8z"
                }),
                B.createElement("path", {
                  d:
                    "M-1.7,835.9c-0.3,0-0.5-0.1-0.8-0.1C-2.3,835.8-2,835.8-1.7,835.9z"
                }),
                B.createElement("path", {
                  d:
                    "M-3.3,835.7c-0.3-0.1-0.6-0.1-1-0.2C-3.9,835.6-3.6,835.6-3.3,835.7z"
                }),
                B.createElement("path", {
                  d:
                    "M30.6,776.1v14.1v16.6c0,0,0,0,0,0s0,0,0,0c0,16.1-13,29.1-29.1,29.1c-0.5,0-1.1,0-1.6,0c-0.2,0-0.4,0-0.6,0 c-0.3,0-0.6,0-1-0.1c-0.3,0-0.5-0.1-0.8-0.1c-0.2,0-0.5-0.1-0.7-0.1c-0.3-0.1-0.6-0.1-1-0.2c-0.2,0-0.3-0.1-0.5-0.1 c-2.2-0.5-4.4-1.2-6.4-2.2c0,0-0.1,0-0.1,0c-0.2-0.1-0.5-0.2-0.7-0.3l0,0c-3-1.6-5.7-3.6-8-6.1l-7.1,7.1 c7.1,7.6,17.3,12.3,28.5,12.3c21.6,0,39.1-17.5,39.1-39.1v-40.8L30.6,776.1z"
                }),
                B.createElement("path", {
                  d:
                    "M-0.8,836c-0.3,0-0.6-0.1-1-0.1C-1.4,835.9-1.1,835.9-0.8,836z"
                }),
                B.createElement("path", {
                  d:
                    "M1.5,836.1c-0.5,0-1.1,0-1.6,0C0.4,836,0.9,836.1,1.5,836.1z"
                }),
                B.createElement("path", {
                  d:
                    "M-2.6,835.8c-0.2,0-0.5-0.1-0.7-0.1C-3,835.7-2.8,835.7-2.6,835.8z"
                }),
                B.createElement("path", {
                  d:
                    "M1.5,836.1c16.1,0,29.1-13,29.1-29.1c0,0,0,0,0,0C30.6,823,17.6,836.1,1.5,836.1z"
                }),
                B.createElement("path", {
                  d:
                    "M-4.2,835.5c-0.2,0-0.3-0.1-0.5-0.1C-4.5,835.4-4.4,835.5-4.2,835.5z"
                }),
                B.createElement("path", {
                  d:
                    "M-11.1,833.2C-11.1,833.2-11.2,833.2-11.1,833.2C-11.2,833.2-11.1,833.2-11.1,833.2z"
                })
              )
            ),
            B.createElement(
              "g",
              { className: "MicFill" },
              B.createElement(
                "g",
                null,
                B.createElement("path", {
                  d:
                    "M-53.8,816.1L-65,827.3c2.2,10.8,7.9,20.5,16.2,28.3l8.6-8.6c-8.5-7.9-13.6-18.2-13.6-29.4V816.1L-53.8,816.1z"
                })
              ),
              B.createElement(
                "g",
                null,
                B.createElement("path", {
                  d:
                    "M1.5,834.6c-15.2,0-27.6-12.4-27.6-27.6v-94.5c0-15.2,12.4-27.6,27.6-27.6c15.2,0,27.6,12.4,27.6,27.6v94.5 C29.1,822.2,16.7,834.6,1.5,834.6z"
                }),
                B.createElement("path", {
                  d:
                    "M1.5,696.3c8.9,0,16.1,7.2,16.1,16.1v94.5c0,8.9-7.2,16.1-16.1,16.1c-8.9,0-16.1-7.2-16.1-16.1v-94.5 C-14.6,703.6-7.4,696.3,1.5,696.3 M1.5,673.3c-21.6,0-39.1,17.5-39.1,39.1v94.5c0,21.6,17.5,39.1,39.1,39.1s39.1-17.5,39.1-39.1 v-94.5C40.6,690.8,23.1,673.3,1.5,673.3L1.5,673.3z"
                })
              )
            ),
            B.createElement(
              "g",
              { className: "MicStrike", fill: "none", strokeWidth: "1" },
              B.createElement("line", {
                x1: "-82.5",
                y1: "866.5",
                x2: "83.5",
                y2: "700.4"
              })
            )
          )
        );
      }
      function l() {
        return B.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Emoticon",
            version: "1.1",
            x: "0px",
            y: "0px",
            viewBox: "0 0 100 100"
          },
          B.createElement("path", {
            d:
              "M50,94.8c25,0,45.3-20.1,45.3-44.8S75,5.2,50,5.2S4.7,25.3,4.7,50S25,94.8,50,94.8z M50,9.8c22.5,0,40.7,18.1,40.7,40.2  S72.5,90.2,50,90.2S9.3,72.2,9.3,50S27.5,9.8,50,9.8z"
          }),
          B.createElement("path", {
            d:
              "M24.7,43c1.1,0,2-0.9,2-2c0-2.5,2.1-4.6,4.6-4.6S36,38.5,36,41c0,1.1,0.9,2,2,2s2-0.9,2-2c0-4.8-3.9-8.6-8.6-8.6  s-8.6,3.9-8.6,8.6C22.7,42.1,23.6,43,24.7,43z"
          }),
          B.createElement("path", {
            d:
              "M62,43c1.1,0,2-0.9,2-2c0-2.5,2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6c0,1.1,0.9,2,2,2s2-0.9,2-2c0-4.8-3.9-8.6-8.6-8.6  S60,36.2,60,41C60,42.1,60.9,43,62,43z"
          }),
          B.createElement("path", {
            d:
              "M50,84.5c16.4,0,29.8-13.3,29.8-29.8c0-1.1-0.9-2-2-2H22.2c-1.1,0-2,0.9-2,2C20.2,71.2,33.6,84.5,50,84.5z M75.7,56.8  C74.6,70,63.5,80.5,50,80.5S25.4,70,24.3,56.8H75.7z"
          })
        );
      }
      function u() {
        return B.createElement(
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
          B.createElement(
            "g",
            { transform: "translate(0,-952.36218)" },
            B.createElement("path", {
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
      function m() {
        return B.createElement(
          "svg",
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_ResizeIcon",
            x: "0px",
            y: "0px",
            viewBox: "0 0 256 256"
          },
          B.createElement(
            "g",
            null,
            B.createElement("path", {
              fill: "#020202",
              d:
                "M115.512,137.263l21.6-21.6c0,0,25.5,25.5,45.8,45.8l35-35v91.6h-91.6l35-35 C141.012,162.763,115.512,137.263,115.512,137.263z"
            }),
            B.createElement("path", {
              fill: "#020202",
              d:
                "M108.312,129.763c-20.3-20.3-35.8-35.8-35.8-35.8l21.6-21.601c0,0,15.5,15.5,35.8,35.801L108.312,129.763z"
            }),
            B.createElement("path", {
              fill: "#020202",
              d:
                "M54.312,75.763c-20.3-20.3-15.8-15.8-15.8-15.8l21.6-21.601c0,0-4.5-4.5,15.8,15.801L54.312,75.763z"
            })
          )
        );
      }
      function p() {
        return B.createElement(
          "svg",
          {
            fill: "#FFFFFF",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Popout",
            viewBox: "0 0 8 8",
            x: "0px",
            y: "0px"
          },
          B.createElement("path", {
            d:
              "M0 0v8h8v-2h-1v1h-6v-6h1v-1h-2zm4 0l1.5 1.5-2.5 2.5 1 1 2.5-2.5 1.5 1.5v-4h-4z"
          })
        );
      }
      function h() {
        return B.createElement(
          "svg",
          {
            fill: "#FFFFFF",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_X",
            version: "1.1",
            x: "0px",
            y: "0px",
            viewBox: "-165 95 100 100"
          },
          B.createElement(
            "g",
            null,
            B.createElement("polygon", {
              points:
                "-74.9,117.2 -102.2,145 -74.9,172.8 -89.1,186.8 -116.2,159.3 -143.2,186.8 -157.5,172.8 -130.2,145 -157.5,117.2 -143.2,103.2 -116.2,130.7 -89.1,103.2"
            })
          )
        );
      }
      function d() {
        return B.createElement(
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
          B.createElement("line", {
            fill: "none",
            stroke: "#000000",
            strokeWidth: "45",
            strokeMiterlimit: "10",
            x1: "212",
            y1: "212",
            x2: "44",
            y2: "44"
          }),
          B.createElement("line", {
            fill: "none",
            stroke: "#000000",
            strokeWidth: "45",
            strokeMiterlimit: "10",
            x1: "44",
            y1: "212",
            x2: "212",
            y2: "44"
          })
        );
      }
      function v() {
        return B.createElement(
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
          B.createElement(
            "g",
            null,
            B.createElement("path", {
              className: "Bubble",
              fill: "none",
              strokeMiterlimit: "1",
              strokeWidth: "2.5px",
              d:
                "M60.1,32.3c0,15.1-12.3,27.3-27.4,27.3 c-5,0-9.7-1.4-13.8-3.7c-1.8-1.1-15,5.4-13.8,3.4c1.7-2.9,5.9-10.3,4.7-12C7,43,5.3,37.8,5.3,32.3C5.3,17.2,17.6,5,32.7,5 C47.8,5,60.1,17.2,60.1,32.3z"
            })
          ),
          B.createElement(
            "g",
            null,
            B.createElement("path", {
              className: "AudioLines",
              opacity: "0",
              strokeWidth: "1px",
              d:
                "M37.2,51.1c-0.5,0-1-0.1-1.3-0.4c-0.7-0.5-0.7-1.3,0-1.8c6.3-4.4,9.8-10.2,9.8-16.4c0-6.2-3.5-12-9.8-16.4 c-0.7-0.5-0.7-1.3,0-1.8s1.9-0.5,2.6,0c7.1,4.9,10.9,11.4,10.9,18.3c0,6.9-3.9,13.4-10.9,18.3C38.2,51,37.7,51.1,37.2,51.1 M21.4,40.2c0.5,0,0.9-0.1,1.3-0.4c2.8-2,4.3-4.6,4.3-7.3s-1.5-5.4-4.3-7.3c-0.7-0.5-1.9-0.5-2.6,0c-0.7,0.5-0.7,1.3,0,1.8 c2.1,1.5,3.3,3.4,3.3,5.5c0,2.1-1.2,4-3.3,5.5c-0.7,0.5-0.7,1.3,0,1.8C20.4,40.1,20.9,40.2,21.4,40.2 M29.3,45.7 c0.5,0,1-0.1,1.3-0.4c4.9-3.4,7.7-7.9,7.7-12.7c0-4.8-2.7-9.3-7.7-12.7c-0.7-0.5-1.9-0.5-2.6,0c-0.7,0.5-0.7,1.3,0,1.8 c4.2,2.9,6.6,6.8,6.6,10.9c0,4.1-2.3,8-6.6,10.9c-0.7,0.5-0.7,1.3,0,1.8C28.4,45.5,28.8,45.7,29.3,45.7"
            })
          ),
          B.createElement(
            "g",
            { className: "Arrow", opacity: "0" },
            B.createElement("polyline", {
              fill: "none",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              points: "41,30.7 14.5,30.7 23.5,19.4 "
            }),
            B.createElement("polyline", {
              fill: "none",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              points: "41,30.7 14.5,30.7 23.5,42 "
            })
          ),
          B.createElement(
            "g",
            null,
            B.createElement("polyline", {
              className: "ExitDoor",
              opacity: "0",
              strokeLinecap: "round",
              strokeMiterlimit: "1",
              strokeWidth: "2px",
              fill: "none",
              points:
                "32.5,22.1 32.5,17.7 47.7,17.7 47.7,43.8 32.5,43.8 32.5,39.5"
            })
          ),
          B.createElement(
            "g",
            { className: "Microphone" },
            B.createElement("path", {
              d:
                "M40.971,28.593v6.278c0,4.007-4.023,7.284-8.971,7.284c-2.693,0-5.126-0.974-6.765-2.516 c-1.379-1.28-2.207-2.952-2.207-4.769v-6.278l0,0H21.05v6.278c0,0.536,0.064,1.055,0.162,1.573 c0.357,1.752,1.281,3.325,2.627,4.592c1.801,1.702,4.332,2.839,7.17,3.049v4.072H25.3c-0.341,0-0.616,0.438-0.616,0.989 c0,0.552,0.275,0.99,0.616,0.99h5.759h1.882H38.7c0.341,0,0.616-0.438,0.616-0.99c0-0.551-0.275-0.989-0.616-0.989h-5.71v-4.072 c5.58-0.422,9.96-4.396,9.96-9.214v-6.278H40.971z"
            }),
            B.createElement(
              "g",
              null,
              B.createElement("path", {
                d:
                  "M32,39.841c-3.493,0-6.343-2.344-6.343-5.213v-17.85c0-2.871,2.85-5.213,6.343-5.213s6.343,2.342,6.343,5.213v17.85,C38.343,37.497,35.493,39.841,32,39.841z"
              })
            )
          )
        );
      }
      function f() {
        return B.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_TextRoom",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
            stroke: "#000",
            strokeWidth: "10px"
          },
          B.createElement("path", {
            className: "Bubble",
            d:
              "M237,127.8c0,59.1-48.1,107-107.4,107c-19.7,0-38.2-5.3-54.1-14.5c-7.2-4.2-58.8,21.2-54.2,13.4 c6.7-11.3,23-40.3,18.5-47.2c-11.1-16.9-17.6-37-17.6-58.7c0-59.1,48.1-107,107.4-107C188.9,20.8,237,68.7,237,127.8z"
          }),
          B.createElement(
            "g",
            { className: "ScratchPad" },
            B.createElement("path", {
              fill: "none",
              strokeWidth: "0",
              strokeMiterlimit: "10",
              d:
                "M179.751,40.994h14.869 c8.388,0,15.25,6.862,15.25,15.25v141.193c0,8.388-6.862,15.25-15.25,15.25H57.37c-8.388,0-15.25-6.862-15.25-15.25V56.244 c0-8.388,6.862-15.25,15.25-15.25h14.869H179.751z"
            }),
            B.createElement("line", {
              fill: "none",
              strokeWidth: "0",
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              x1: "74.495",
              y1: "27.313",
              x2: "74.495",
              y2: "54.063"
            }),
            B.createElement("line", {
              fill: "none",
              strokeWidth: "0",
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              x1: "124.495",
              y1: "27.313",
              x2: "124.495",
              y2: "54.063"
            }),
            B.createElement("line", {
              fill: "none",
              strokeWidth: "0",
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              x1: "174.745",
              y1: "27.313",
              x2: "174.745",
              y2: "54.063"
            })
          ),
          B.createElement("line", {
            className: "TextLines",
            x1: "71.6",
            y1: "115.4",
            x2: "179.4",
            y2: "115.4"
          }),
          B.createElement("line", {
            className: "TextLines",
            x1: "71.6",
            y1: "145.8",
            x2: "143.3",
            y2: "145.8"
          }),
          B.createElement("line", {
            className: "TextLines",
            x1: "71.6",
            y1: "175.9",
            x2: "179.4",
            y2: "175.9"
          }),
          B.createElement("line", {
            className: "TextLines",
            x1: "73.7",
            y1: "82.7",
            x2: "166.8",
            y2: "82.7"
          })
        );
      }
      function y(e) {
        var t = "SVGIcon_Button SVGIcon_Headphones";
        return (
          e.className && (t += " " + e.className),
          B.createElement(
            "svg",
            {
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              className: t,
              x: "0px",
              y: "0px",
              width: "256px",
              height: "256px",
              viewBox: "-305.5 396.5 256 256"
            },
            B.createElement(
              "g",
              { className: "HeadPhonesBase" },
              B.createElement(
                "g",
                null,
                B.createElement("path", {
                  fill: "none",
                  d:
                    "M-176.5,418.7c-37,0-69.5,30.2-69.5,64.5v25.3c11.3,2.3,19.9,12.3,19.9,24.3v8.6l100.9-100.9 C-138.2,427.3-156.7,418.7-176.5,418.7z"
                }),
                B.createElement("path", {
                  d:
                    "M-226.2,532.9c0-12-8.5-22-19.9-24.3v-25.3c0-34.4,32.5-64.5,69.5-64.5c19.8,0,38.3,8.6,51.2,21.9l6.9-6.9 c-14.8-15.1-35.7-24.9-58.2-24.9c-42.3,0-79.4,34.8-79.4,74.5v25.3c-11.3,2.3-19.9,12.3-19.9,24.3v29.8c0,7.8,3.6,14.7,9.2,19.3 l40.5-40.5V532.9z"
                }),
                B.createElement("path", {
                  d:
                    "M-97.1,508.6v-25.3c0-7.5-1.3-14.8-3.8-21.8l-7.9,7.9c1.2,4.5,1.8,9.1,1.8,13.9v25.3c-11.3,2.3-19.9,12.3-19.9,24.3v29.8 c0,13.7,11.1,24.8,24.8,24.8c13.7,0,24.8-11.1,24.8-24.8v-29.8C-77.2,520.9-85.8,510.9-97.1,508.6z"
                })
              )
            ),
            B.createElement(
              "g",
              { className: "HeadphonesStrike" },
              B.createElement("line", {
                fill: "none",
                x1: "-260.5",
                y1: "598.5",
                x2: "-94.5",
                y2: "432.4"
              })
            ),
            B.createElement(
              "g",
              { className: "HeadPhonesFill" },
              B.createElement("path", {
                d:
                  "M-226.2,562.7v-21.2l-40.5,40.5c4.3,3.5,9.7,5.6,15.6,5.6C-237.3,587.5-226.2,576.4-226.2,562.7z"
              }),
              B.createElement("path", {
                d:
                  "M-118.3,433.7l-6.9,6.9c7.9,8.1,13.7,18,16.5,28.8l7.9-7.9C-104.5,451.1-110.5,441.6-118.3,433.7z"
              })
            )
          )
        );
      }
      function _() {
        return B.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_5",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Group",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          B.createElement(
            "g",
            { transform: "translate(0,-952.36218)" },
            B.createElement("path", {
              d:
                "M58.6,970.4c-15.4,0-28.1,12.7-28.1,28.1c0,15.4,12.7,28.1,28.1,28.1s28.1-12.7,28.1-28.1\tC86.7,983,74,970.4,58.6,970.4z M202.1,970.4c-15.4,0-28.1,12.7-28.1,28.1c0,15.4,12.7,28.1,28.1,28.1s28.1-12.7,28.1-28.1 C230.2,983,217.6,970.4,202.1,970.4z M130.4,986c-15.4,0-28.1,12.7-28.1,28.1c0,15.4,12.7,28.1,28.1,28.1s28.1-12.7,28.1-28.1 C158.5,998.6,145.8,986,130.4,986z M242.8,1110.6c0-0.1,0-17.9,0-18l-0.1-16.1c0-22.4-18.2-40.6-40.6-40.6 c-17.8,0-30,7.7-36.3,18.8c-2,3.5-3.4,7.3-4.5,11.1c-7.5-8.7-18.6-14.3-31-14.3s-23.5,5.6-31,14.3c-1.1-3.9-2.5-7.6-4.5-11.1 c-6.3-11.1-18.4-18.8-36.3-18.8c-22.4,0-40.6,18.2-40.6,40.6v46.8c0,3.4,2.8,6.2,6.2,6.2h12.5v31.2c0,3.4,2.8,6.2,6.2,6.2h31.2 c3.4,0,6.2-2.8,6.2-6.2v-31.2h9.4v9.4c0,3.4,2.8,6.2,6.2,6.2h12.5v31.2c0,3.4,2.8,6.2,6.2,6.2H146c3.4,0,6.2-2.8,6.2-6.2v-31.2 h12.5c3.4,0,6.2-2.8,6.2-6.2v-9.4h9.4v31.2c0,3.4,2.8,6.2,6.2,6.2h31.2c3.4,0,6.2-2.8,6.2-6.2v-31.2h12.5c3.4,0,6.3-2.7,6.3-6.2\tV1110.6z"
            })
          )
        );
      }
      function b() {
        return B.createElement(
          "svg",
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_PlusCircle",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          B.createElement("circle", {
            fill: "none",
            strokeWidth: "10",
            strokeMiterlimit: "10",
            cx: "128",
            cy: "128",
            r: "95.333"
          }),
          B.createElement("line", {
            className: "horizontalLine",
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            x1: "73.333",
            y1: "128",
            x2: "183.333",
            y2: "128"
          }),
          B.createElement("line", {
            className: "verticalLine",
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            x1: "128.333",
            y1: "73.335",
            x2: "128.333",
            y2: "183.333"
          })
        );
      }
      function g() {
        return B.createElement(
          "svg",
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_AddFriend",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "-305.5 396.5 256 256",
            enableBackground: "new -305.5 396.5 256 256"
          },
          B.createElement(
            "g",
            {
              className: "friendHead",
              transform: "matrix(1.34048,0,0,1.34048,-10.0942,-5.50445)"
            },
            B.createElement("circle", {
              cx: "-146.829",
              cy: "343.911",
              r: "33.526"
            })
          ),
          B.createElement("path", {
            className: "friendBody",
            d:
              "M-212.147,568.323c0-23.589,10.397-44.736,26.843-59.152c-3.352-0.423-6.774-0.65-10.258-0.65h-22.707 c-39.775,0-56.481,28.271-56.481,63.099V613.5c0,0-0.3,16.369,35.917,21.813s73.652,5,73.652,5 C-192.834,628.122-212.147,600.485-212.147,568.323z"
          }),
          B.createElement("path", {
            className: "plusCircle",
            d:
              "M-133.49,501.333c-36.998,0-66.99,29.992-66.99,66.99s29.993,66.99,66.99,66.99s66.99-29.992,66.99-66.99 S-96.492,501.333-133.49,501.333z M-94.607,573.323h-33.648v33.882c0,2.762-2.239,5-5,5s-5-2.238-5-5v-33.882h-33.648 c-2.761,0-5-2.238-5-5s2.239-5,5-5h33.648v-33.412c0-2.762,2.239-5,5-5s5,2.238,5,5v33.412h33.648c2.761,0,5,2.238,5,5 S-91.846,573.323-94.607,573.323z"
          })
        );
      }
      function w() {
        return B.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_5",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Invite",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "255.999px",
            viewBox: "0 0 256 255.999"
          },
          B.createElement("path", {
            d:
              "M165.678,20.535c-17.251,0-31.386,14.135-31.386,31.386c0,17.252,14.135,31.386,31.386,31.386 c17.251,0,31.386-14.134,31.386-31.386C197.063,34.67,182.929,20.535,165.678,20.535z"
          }),
          B.createElement("path", {
            d:
              "M165.678,93.121c24.995,0,45.335,20.34,45.335,45.335v52.31c0,3.853-3.123,6.975-6.975,6.975h-13.95v34.874 c0,3.852-3.123,6.974-6.974,6.975h-34.874c-3.852-0.001-6.974-3.123-6.975-6.975v-34.874h-13.95c-3.852,0-6.974-3.123-6.974-6.975 v-52.31C120.343,113.461,140.683,93.121,165.678,93.121z"
          }),
          B.createElement(
            "g",
            { className: "invitePlus" },
            B.createElement("line", {
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "22",
              strokeMiterlimit: "10",
              x1: "14",
              y1: "128",
              x2: "101.5",
              y2: "128"
            }),
            B.createElement("line", {
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "22",
              strokeMiterlimit: "10",
              x1: "57.75",
              y1: "84.25",
              x2: "57.75",
              y2: "171.75"
            })
          )
        );
      }
      function S() {
        return B.createElement(
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
          B.createElement("path", {
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d:
              "M167.768,62.647 l-0.012,123.052c0,24.729-19.334,44.856-43.096,44.866c-23.765-0.006-43.099-20.134-43.096-44.872L81.557,48.851 c0-15.345,14.483-27.827,29.83-27.83c15.342,0.003,27.827,12.488,27.833,27.833l-0.002,139.245 c0.003,6.376-8.546,12.925-14.925,12.925c0,0-13.929-0.166-13.929-12.928l0.003-124.839"
          })
        );
      }
      function E() {
        return B.createElement(
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
          B.createElement(
            "g",
            { className: "Speaker" },
            B.createElement("path", {
              d:
                "M93.785,52.265c-0.946,0-2.357,0.63-3.304,1.577L40.284,98.022c-0.947,0.789-2.831,1.578-4.093,1.578H9.367 C8.104,99.6,7,100.706,7,101.967v52.069c0,1.264,1.104,2.367,2.367,2.367H36.19c1.262,0,3.146,0.632,4.093,1.578l50.197,44.181 c0.947,0.789,2.516,1.578,3.304,1.578s1.578-1.104,1.578-2.367V54.631C95.363,53.369,94.731,52.265,93.785,52.265z"
            })
          ),
          B.createElement(
            "g",
            { className: "SoundWaves" },
            B.createElement("path", {
              className: "SoundWavesHighest",
              d:
                "M193.826,30.402c24.959,24.958,40.349,59.403,40.349,97.604c0,38.199-15.388,72.645-40.349,97.603l9.916,9.916 c28.067-28.067,44.263-64.673,44.263-107.521c0-42.847-16.196-79.455-44.263-107.521"
            }),
            B.createElement("path", {
              className: "SoundWavesHigh",
              d:
                "M175.737,47.628l-8.924,8.924c18.271,18.27,29.536,43.484,29.536,71.448s-11.264,53.178-29.536,71.448l8.924,8.924 c20.546-20.546,33.234-49.008,33.234-80.374c0-31.366-12.688-59.829-33.234-80.374V47.628z"
            }),
            B.createElement("path", {
              className: "SoundWavesMed",
              d:
                "M148.913,74.454l-8.925,8.925c11.488,11.488,18.491,27.236,18.491,44.624c0,17.388-7.054,33.281-18.491,44.575l8.875,8.975 c13.811-13.635,22.239-32.753,22.239-53.55c0-20.797-8.432-39.793-22.189-53.55V74.454z"
            }),
            B.createElement("path", {
              className: "SoundWavesLow",
              d:
                "M121.989,101.229l-8.778,9.073c4.641,4.516,7.397,10.706,7.397,17.702c0,6.995-2.755,13.186-7.397,17.702l8.778,9.073 c7.035-6.844,11.243-16.413,11.243-26.775C133.232,117.643,129.024,108.075,121.989,101.229z"
            })
          ),
          B.createElement(
            "g",
            { className: "SoundX" },
            B.createElement("line", {
              fill: "none",
              strokeWidth: "0",
              strokeMiterlimit: "10",
              x1: "137",
              y1: "170.667",
              x2: "223.167",
              y2: "84.5"
            }),
            B.createElement("line", {
              fill: "none",
              strokeWidth: "0",
              strokeMiterlimit: "10",
              x1: "137",
              y1: "84.5",
              x2: "223.167",
              y2: "170.667"
            })
          )
        );
      }
      function P() {
        return B.createElement(
          "svg",
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_NewChatGroup",
            x: "0px",
            y: "0px",
            viewBox: "0 0 256 256"
          },
          B.createElement("path", {
            className: "Bubble",
            strokeWidth: "12",
            strokeMiterlimit: "10",
            d:
              "M127.393,10.833 c64.854,0,117.46,52.609,117.46,117.013c0,24.035-7.254,45.804-19.5,63.943c-4.99,7.711,13.15,39.457,20.408,51.705 c4.989,8.612-51.701-19.05-59.412-14.514c-17.233,9.979-37.188,15.872-58.957,15.872c-64.859,0-117.465-52.607-117.465-117.008 C9.928,63.442,62.534,10.833,127.393,10.833z"
          }),
          B.createElement("line", {
            strokeWidth: "22",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            x1: "83.5",
            y1: "128.886",
            x2: "176.184",
            y2: "128.886"
          }),
          B.createElement("line", {
            strokeWidth: "22",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            x1: "129.842",
            y1: "82.544",
            x2: "129.842",
            y2: "175.228"
          })
        );
      }
      function x() {
        return B.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Crown",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          B.createElement(
            "g",
            null,
            B.createElement("path", {
              d:
                "M239.874,94.963l-31.115,21.325c-18.18,12.586-43.351,5.594-52.44-14.333l-23.772-50.692c-2.099-4.194-8.041-4.194-9.789,0 l-23.074,50.343c-9.439,20.627-35.31,27.27-53.49,13.983L16.128,93.565c-4.195-3.147-10.139,1.049-8.391,6.293l31.464,106.628 c0.35,1.049,1.398,1.397,2.098,1.397h173.752c1.049,0,1.749-0.698,2.098-1.397l31.115-104.53 C250.012,96.36,244.068,91.816,239.874,94.963z"
            })
          )
        );
      }
      function C() {
        return B.createElement(
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
          B.createElement("path", {
            className: "playTriangle",
            d:
              "M65.321,33.521c-11.274-6.615-20.342-1.471-20.342,11.52V210.96c0,12.989,9.068,18.135,20.342,11.521l137.244-82.348 c11.274-6.618,11.274-17.646,0-24.509L65.321,33.521z"
          })
        );
      }
      function M() {
        return B.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_SortBy",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          B.createElement(
            "g",
            { className: "time" },
            B.createElement("circle", {
              fill: "none",
              strokeWidth: "10",
              strokeMiterlimit: "10",
              cx: "91.735",
              cy: "128.014",
              r: "64"
            }),
            B.createElement("polyline", {
              fill: "none",
              strokeWidth: "10",
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              points: "91.735,90.833 91.735,128.014 116.58,152.086 \t"
            })
          ),
          B.createElement(
            "g",
            { className: "arrow" },
            B.createElement("polyline", {
              fill: "none",
              strokeWidth: "10",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              points: "199.735,63.66 199.735,192.366 171.207,163.675"
            }),
            B.createElement("polyline", {
              fill: "none",
              strokeWidth: "10",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              points: "199.735,63.66 199.735,192.366 228.266,163.675"
            })
          ),
          B.createElement(
            "g",
            { className: "alphabet" },
            B.createElement("polyline", {
              fill: "none",
              strokeWidth: "10",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              points: "70.268,109.934 94.483,63.635 119.77,109.934"
            }),
            B.createElement("line", {
              fill: "none",
              strokeWidth: "10",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              x1: "77.458",
              y1: "97.861",
              x2: "112.135",
              y2: "97.861"
            }),
            B.createElement("polyline", {
              fill: "none",
              strokeWidth: "10",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              points:
                "70.045,145.379 119.547,145.379 70.045,192.032 119.547,192.032"
            })
          )
        );
      }
      function k() {
        return B.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Notification",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          B.createElement(
            "g",
            { className: "topFlap" },
            B.createElement("polyline", {
              fill: "#FFFFFF",
              strokeWidth: "10",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              points: "234.667,94.167 128.667,26.5 21.333,94.167"
            })
          ),
          B.createElement(
            "g",
            { className: "note" },
            B.createElement("rect", {
              x: "58.666",
              y: "50",
              fill: "#FFFFFF",
              strokeWidth: "10",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              width: "138.667",
              height: "119.334"
            })
          ),
          B.createElement(
            "g",
            { className: "baseEnvelope" },
            B.createElement("polygon", {
              fill: "#FFFFFF",
              strokeWidth: "10",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              points:
                "21.333,94.167 21.333,229.501 234.667,229.501 234.667,94.167 127.333,161.834 \t"
            }),
            B.createElement("line", {
              fill: "none",
              strokeWidth: "10",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              x1: "86.326",
              y1: "135.656",
              x2: "21.333",
              y2: "229.501"
            }),
            B.createElement("line", {
              fill: "none",
              strokeWidth: "10",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              x1: "169.674",
              y1: "135.656",
              x2: "234.667",
              y2: "229.501"
            })
          )
        );
      }
      function I() {
        return B.createElement(
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
          B.createElement("polyline", {
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
      function O() {
        return B.createElement(
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
          B.createElement(
            "defs",
            null,
            B.createElement(
              "linearGradient",
              { id: "linear", x1: "0%", y1: "0%", x2: "100%", y2: "100%" },
              B.createElement("stop", {
                id: "stop0",
                offset: "0%",
                stopColor: "#00ccff"
              }),
              B.createElement("stop", {
                id: "stop1",
                offset: "100%",
                stopColor: "#2d73ff"
              })
            ),
            B.createElement(
              "filter",
              { id: "f1", x: "0", y: "0", width: "200%", height: "200%" },
              B.createElement("feOffset", {
                result: "offOut",
                in: "SourceAlpha",
                dx: "20",
                dy: "20"
              }),
              B.createElement("feGaussianBlur", {
                result: "blurOut",
                in: "offOut",
                stdDeviation: "10"
              }),
              B.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "blurOut",
                mode: "normal"
              })
            )
          ),
          B.createElement("path", {
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
          B.createElement("path", {
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
      function L() {
        return B.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Caution",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          B.createElement(
            "g",
            { className: "triangle" },
            B.createElement("path", {
              stroke: "#020202",
              strokeWidth: "16",
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              d: "M127.9,76.632"
            }),
            B.createElement("path", {
              fill: "none",
              stroke: "#020202",
              strokeWidth: "11",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "5",
              d:
                "M128.001,226.606c42.507,0,81.538,0,87.756,0c31.222,0,36.95-14.974,24.045-34.771c-6.921-10.617-78.297-122.962-89.163-140.254\tC141.859,37.613,138.542,29.393,128,29.393l0,0c-10.543,0-13.86,8.222-22.639,22.189C94.495,68.874,23.119,181.219,16.198,191.836 c-12.905,19.797-7.175,34.771,24.045,34.771C46.463,226.606,85.494,226.606,128.001,226.606"
            }),
            B.createElement("path", { fill: "#020202", d: "M127.9,208.12" })
          ),
          B.createElement(
            "g",
            { className: "exclamation" },
            B.createElement("line", {
              fill: "none",
              stroke: "#020202",
              strokeWidth: "16",
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              x1: "127.9",
              y1: "76.632",
              x2: "127.9",
              y2: "160.07"
            }),
            B.createElement("path", {
              fill: "#020202",
              d:
                "M127.9,208.12c-6.377,0-11.548-5.17-11.548-11.548c0-6.377,5.17-11.547,11.548-11.547 c6.377,0,11.547,5.17,11.547,11.547C139.447,202.95,134.277,208.12,127.9,208.12"
            })
          )
        );
      }
      (t.v = i),
        (t.c = r),
        (t.e = o),
        (t.h = s),
        (t.m = a),
        (t.n = c),
        (t.i = l),
        (t.x = u),
        (t.u = m),
        (t.t = p),
        (t.B = h),
        (t.C = d),
        (t.z = v),
        (t.y = f),
        (t.k = y),
        (t.j = _),
        (t.s = b),
        (t.a = g),
        (t.l = w),
        (t.q = S),
        (t.A = E),
        (t.o = P),
        (t.f = x),
        (t.r = C),
        (t.w = M),
        (t.p = k),
        (t.d = I),
        (t.g = O),
        (t.b = L);
      var B = n("Jmof");
      n.n(B);
    },
    EqgU: function(e, t, n) {
      "use strict";
      function i(e) {
        if (!(e.clientX || e.clientY || e.screenX || e.screenY)) return !0;
        if (e.relatedTarget) return !r(e.currentTarget, e.relatedTarget);
        var t = e.currentTarget.getBoundingClientRect();
        return (
          (e.clientX <= t.left ||
            e.clientX >= t.right ||
            e.clientY <= t.top ||
            e.clientY >= t.bottom) &&
          (console.log(
            e.clientX +
              " <= " +
              t.left +
              " || " +
              e.clientX +
              " >= " +
              t.right +
              " ||\n\t\t\t\t" +
              e.clientY +
              " <= " +
              t.top +
              " || " +
              e.clientY +
              " >= " +
              t.bottom
          ),
          !0)
        );
      }
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
        var n = e.offsetTop;
        e.offsetParent != t && (n -= t.offsetTop),
          n < t.scrollTop
            ? e.scrollIntoView(!0)
            : n + e.offsetHeight > t.scrollTop + t.offsetHeight &&
              e.scrollIntoView(!1);
      }
      function s(e, t, n) {
        var i = 0,
          r = 0;
        return (
          t < e.left ? (i = e.left - t) : t > e.right && (i = t - e.right),
          n < e.top ? (r = e.top - n) : n > e.bottom && (r = n - e.bottom),
          Math.sqrt(i * i + r * r)
        );
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
      (t.a = i),
        (t.b = r),
        (t.g = o),
        (t.e = s),
        (t.c = a),
        (t.f = c),
        (t.d = l);
    },
    HxNj: function(e, t, n) {
      "use strict";
      function i(e) {
        switch (e) {
          case 1:
            return Object(b.b)("#Privacy_Private");
          case 2:
            return Object(b.b)("#Privacy_FriendsOnly");
          case 3:
            return Object(b.b)("#Privacy_Public");
          default:
            return "";
        }
      }
      function r(e) {
        switch (e) {
          case 0:
            return Object(b.b)("#Privacy_FriendsOnly");
          case 1:
            return Object(b.b)("#Privacy_Public");
          case 2:
            return Object(b.b)("#Privacy_Private");
          default:
            return "";
        }
      }
      function o(e, t) {
        return e < t ? e : t;
      }
      function s(e, t) {
        return 1 == t ? 2 : 2 == t && 1 == e ? 0 : e;
      }
      function a(e) {
        var t;
        return (
          (t = e.strReadOnlySetting
            ? f.createElement(m, { strLabel: e.strReadOnlySetting })
            : f.createElement(B, {
                PrivacyStore: e.PrivacyStore,
                PrivacyKey: e.PrivacyKey,
                LimitPrivacyKey: e.LimitPrivacyKey
              })),
          f.createElement(
            f.Fragment,
            null,
            f.createElement(c, null, e.strLabel, ":", t),
            f.createElement(l, null, e.children)
          )
        );
      }
      function c(e) {
        return f.createElement(
          "div",
          { className: "ProfilePrivacyHeader" },
          e.children
        );
      }
      function l(e) {
        return f.createElement(
          "div",
          { className: "ProfilePrivacyDesc" },
          e.children
        );
      }
      function u(e) {
        switch (e.eSaveState) {
          case 1:
            return f.createElement(
              "div",
              { className: "PrivacySaveNotice Saving" },
              Object(b.b)("#Shared_Saving")
            );
          case 3:
            return f.createElement(
              "div",
              { className: "PrivacySaveNotice Error" },
              Object(b.b)("#Error_Error")
            );
          case 2:
            return f.createElement(
              "div",
              { className: "PrivacySaveNotice Saved" },
              Object(b.b)("#Shared_Saved")
            );
          case 0:
          default:
            return null;
        }
      }
      function m(e) {
        return f.createElement(
          "div",
          { className: "ProfilePrivacyDropDown readonly" },
          e.strLabel
        );
      }
      function p() {
        var e = Object(_.b)("config", "profile_config");
        e && Object.assign(x, e);
      }
      function h() {
        for (
          var e = document.querySelectorAll(".ProfileReactRoot"), t = 0;
          t < e.length;
          t++
        ) {
          var n = e[t],
            i = n.getAttribute("data-component");
          switch (i) {
            case "ProfilePrivacySettings":
              d(n);
              break;
            default:
              Object(g.a)(!1, 'unknown component: "' + i + '"');
          }
        }
      }
      function d(e) {
        var t;
        try {
          t = JSON.parse(e.getAttribute("data-privacysettings"));
        } catch (e) {}
        var n = new C(t.PrivacySettings, t.eCommentPermission);
        y.render(f.createElement(L, { PrivacyStore: n }), e);
      }
      function v(e, t, n) {
        Object(g.a)("manifest" === t, 'Expected manifest not "' + t + '"'),
          b.a.InitDirect(n);
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f = n("Jmof"),
        y = n("wLXD"),
        _ = n("m5yx"),
        b = n("sVhq"),
        g = n("4Dav"),
        w = (n("kllU"), n("TToO")),
        S = n("y986"),
        E = n("mtWM"),
        P = n.n(E),
        x = { ProfileURL: "" },
        C = (function() {
          function e(e, t) {
            (this.m_eSaveStateByKey = new Map()),
              (this.m_eCommentSaveState = 0),
              (this.m_PrivacySettings = e),
              (this.m_eCommentPermission = t);
          }
          return (
            (e.prototype.GetPrivacySetting = function(e) {
              return "PrivacyOwnedGames" == e
                ? o(
                    this.m_PrivacySettings.PrivacyProfile,
                    this.m_PrivacySettings.PrivacyOwnedGames
                  )
                : "PrivacyPlaytime" == e
                  ? o(
                      this.GetPrivacySetting("PrivacyOwnedGames"),
                      this.m_PrivacySettings.PrivacyPlaytime
                    )
                  : "PrivacyInventory" == e
                    ? o(
                        this.m_PrivacySettings.PrivacyProfile,
                        this.m_PrivacySettings.PrivacyInventory
                      )
                    : "PrivacyInventoryGifts" == e
                      ? o(
                          this.GetPrivacySetting("PrivacyInventory"),
                          this.m_PrivacySettings.PrivacyInventoryGifts
                        )
                      : this.m_PrivacySettings[e];
            }),
            Object.defineProperty(e.prototype, "CommentPermission", {
              get: function() {
                return this.m_eCommentPermission;
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype.GetSaveState = function(e) {
              return this.m_eSaveStateByKey.get(e) || 0;
            }),
            (e.prototype.GetCommentSaveState = function() {
              return this.m_eCommentSaveState;
            }),
            (e.prototype.ChangePrivacySetting = function(e, t, n) {
              var i = this;
              if (this.m_PrivacySettings[e] != t) {
                this.m_PrivacySettings[e] = t;
                var r = this.SavePrivacy(),
                  o = n || e;
                r
                  ? (this.m_eSaveStateByKey.set(o, 1),
                    r.then(function(e) {
                      e
                        ? i.m_eSaveStateByKey.set(o, 2)
                        : i.m_eSaveStateByKey.set(o, 3);
                    }))
                  : this.m_eSaveStateByKey.set(o, 0);
              }
            }),
            (e.prototype.ChangeCommentPermission = function(e) {
              var t = this;
              if (this.m_eCommentPermission != e) {
                this.m_eCommentPermission = e;
                var n = this.SavePrivacy();
                n
                  ? ((this.m_eCommentSaveState = 1),
                    n.then(function(e) {
                      t.m_eCommentSaveState = e ? 2 : 3;
                    }))
                  : (this.m_eCommentSaveState = 0);
              }
            }),
            (e.prototype.SavePrivacy = function() {
              var e = this,
                t = new FormData();
              return (
                t.set("sessionid", _.a.SESSIONID),
                t.set("Privacy", JSON.stringify(this.m_PrivacySettings)),
                t.set(
                  "eCommentPermission",
                  JSON.stringify(this.m_eCommentPermission)
                ),
                P.a
                  .post(x.ProfileURL + "ajaxsetprivacy/", t)
                  .then(function(t) {
                    var n = t.data;
                    if (1 != n.success)
                      return (
                        ShowAlertDialog(
                          Object(b.b)("#Error_Error"),
                          Object(b.b)("#Error_CommentEditFailed")
                        ),
                        !1
                      );
                    var i = n.Privacy;
                    return (
                      i &&
                        i.PrivacySettings &&
                        i.eCommentPermission &&
                        Object(S.runInAction)(function() {
                          (e.m_PrivacySettings = i.PrivacySettings),
                            (e.m_eCommentPermission = i.eCommentPermission);
                        }),
                      !0
                    );
                  })
                  .catch(function(e) {
                    return (
                      ShowAlertDialog(
                        Object(b.b)("#Error_Error"),
                        Object(b.b)("#Error_CommentEditFailed")
                      ),
                      !1
                    );
                  })
              );
            }),
            w.b([S.observable], e.prototype, "m_PrivacySettings", void 0),
            w.b([S.observable], e.prototype, "m_eCommentPermission", void 0),
            w.b([S.observable], e.prototype, "m_eSaveStateByKey", void 0),
            w.b([S.observable], e.prototype, "m_eCommentSaveState", void 0),
            e
          );
        })(),
        M = n("KLxG"),
        k = n("JyW5"),
        I = n("aMRU"),
        O = n("Mn8c"),
        L = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            w.c(t, e),
            (t.prototype.render = function() {
              var e = this.props.PrivacyStore;
              return f.createElement(
                "div",
                { className: "ProfilePrivacyRoot" },
                f.createElement(
                  a,
                  {
                    PrivacyStore: e,
                    strLabel: Object(b.b)("#ProfilePrivacy_BasicDetails"),
                    strReadOnlySetting: i(3)
                  },
                  Object(b.b)("#ProfilePrivacy_BasicDetails_Desc")
                ),
                f.createElement("div", { className: "ProfilePrivacyHR" }),
                f.createElement(
                  a,
                  {
                    PrivacyStore: e,
                    strLabel: Object(b.b)("#ProfilePrivacy_Profile"),
                    PrivacyKey: "PrivacyProfile"
                  },
                  f.createElement(
                    "p",
                    null,
                    Object(b.b)("#ProfilePrivacy_Profile_Desc")
                  ),
                  f.createElement(
                    "p",
                    null,
                    Object(b.b)("#ProfilePrivacy_Profile_Desc2")
                  )
                ),
                f.createElement(
                  "div",
                  { className: "ProfilePrivacyRoot_Indent" },
                  f.createElement(
                    a,
                    {
                      PrivacyStore: e,
                      strLabel: Object(b.b)("#ProfilePrivacy_GameLibrary"),
                      PrivacyKey: "PrivacyOwnedGames",
                      LimitPrivacyKey: "PrivacyProfile"
                    },
                    Object(b.b)("#ProfilePrivacy_GameLibrary_Desc"),
                    1 != e.GetPrivacySetting("PrivacyOwnedGames") &&
                      f.createElement(
                        D,
                        {
                          PrivacyStore: e,
                          PrivacyKey: "PrivacyPlaytime",
                          LimitPrivacyKey: "PrivacyOwnedGames"
                        },
                        Object(b.b)("#ProfilePrivacy_Playtime")
                      )
                  ),
                  f.createElement("div", { className: "ProfilePrivacyHR" }),
                  f.createElement(
                    a,
                    {
                      PrivacyStore: e,
                      strLabel: Object(b.b)("#ProfilePrivacy_Inventory"),
                      PrivacyKey: "PrivacyInventory",
                      LimitPrivacyKey: "PrivacyProfile"
                    },
                    Object(b.d)(
                      "#ProfilePrivacy_Inventory_Desc",
                      f.createElement(
                        "a",
                        { href: x.ProfileURL + "inventory/" },
                        Object(b.b)("#ProfilePrivacy_Inventory_Inventory")
                      ),
                      f.createElement(
                        "a",
                        { href: x.ProfileURL + "inventory/#753_6" },
                        Object(b.b)("#ProfilePrivacy_Inventory_TradingCards")
                      )
                    ),
                    1 != e.GetPrivacySetting("PrivacyInventory") &&
                      f.createElement(
                        D,
                        {
                          PrivacyStore: e,
                          PrivacyKey: "PrivacyInventoryGifts",
                          LimitPrivacyKey: "PrivacyInventory"
                        },
                        Object(b.b)("#ProfilePrivacy_Gifts")
                      )
                  ),
                  f.createElement("div", { className: "ProfilePrivacyHR" }),
                  f.createElement(
                    c,
                    null,
                    Object(b.b)("#ProfilePrivacy_Comments"),
                    ":",
                    f.createElement(N, { PrivacyStore: e })
                  ),
                  f.createElement("div", { className: "ProfilePrivacyHR" }),
                  f.createElement(
                    a,
                    {
                      PrivacyStore: e,
                      strLabel: Object(b.b)("#ProfilePrivacy_UGC"),
                      strReadOnlySetting: Object(b.b)("#Privacy_PerItem")
                    },
                    Object(b.d)(
                      "#ProfilePrivacy_UGC_Desc",
                      f.createElement(
                        "a",
                        { href: x.ProfileURL + "screenshots/" },
                        Object(b.b)("#ProfilePrivacy_UGC_Desc_Screenshots")
                      ),
                      f.createElement(
                        "a",
                        { href: x.ProfileURL + "myworkshopfiles/" },
                        Object(b.b)("#ProfilePrivacy_UGC_Desc_WorkshopItems")
                      )
                    )
                  )
                )
              );
            }),
            (t = w.b([O.observer], t))
          );
        })(f.Component),
        B = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            w.c(t, e),
            (t.prototype.OnClick = function(e) {
              var t = this.props.PrivacyStore.GetPrivacySetting(
                this.props.PrivacyKey
              );
              Object(k.a)(
                f.createElement(H, {
                  OnChange: this.OnSettingChanged,
                  eCurrentPrivacy: t,
                  eMinPrivacy: this.GetMinPrivacy()
                }),
                e,
                { bOverlapHorizontal: !0, bUseWebStyles: !0 }
              );
            }),
            (t.prototype.OnSettingChanged = function(e) {
              this.props.PrivacyStore.ChangePrivacySetting(
                this.props.PrivacyKey,
                e
              );
            }),
            (t.prototype.GetMinPrivacy = function() {
              if (this.props.LimitPrivacyKey)
                return this.props.PrivacyStore.GetPrivacySetting(
                  this.props.LimitPrivacyKey
                );
            }),
            (t.prototype.render = function() {
              var e = this.props.PrivacyStore.GetPrivacySetting(
                  this.props.PrivacyKey
                ),
                t = i(e);
              return f.createElement(
                f.Fragment,
                null,
                f.createElement(
                  "div",
                  {
                    className: "ProfilePrivacyDropDown",
                    onClick: this.OnClick
                  },
                  t,
                  f.createElement("img", {
                    className: "ProfilePrivacyDropDown_Arrow",
                    src:
                      _.a.COMMUNITY_CDN_URL +
                      "public/images/skin_1/actionArrowDnWhite.gif"
                  })
                ),
                f.createElement(u, {
                  eSaveState: this.props.PrivacyStore.GetSaveState(
                    this.props.PrivacyKey
                  )
                })
              );
            }),
            w.b([M.a], t.prototype, "OnClick", null),
            w.b([M.a], t.prototype, "OnSettingChanged", null),
            (t = w.b([O.observer], t))
          );
        })(f.Component),
        D = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            w.c(t, e),
            (t.prototype.OnCheckboxChecked = function(e) {
              var t = e.currentTarget.checked ? 1 : 3;
              this.props.PrivacyStore.ChangePrivacySetting(
                this.props.PrivacyKey,
                t,
                this.props.LimitPrivacyKey
              );
            }),
            (t.prototype.render = function() {
              var e = this.props.PrivacyStore.GetPrivacySetting(
                  this.props.PrivacyKey
                ),
                t = 1 == e;
              return f.createElement(
                "div",
                { className: "ProfilePrivacyCheckbox" },
                f.createElement(
                  "label",
                  null,
                  f.createElement("input", {
                    className: "ProfilePrivacyCheckbox_Input",
                    type: "checkbox",
                    checked: t,
                    onChange: this.OnCheckboxChecked
                  }),
                  f.createElement(
                    "div",
                    { className: "ProfilePrivacyCheckbox_Desc" },
                    this.props.children
                  )
                )
              );
            }),
            w.b([M.a], t.prototype, "OnCheckboxChecked", null),
            (t = w.b([O.observer], t))
          );
        })(B),
        N = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (n.state = { eSaveState: 0 }), n;
          }
          return (
            w.c(t, e),
            (t.prototype.OnClick = function(e) {
              var t = this.props.PrivacyStore.CommentPermission;
              Object(k.a)(
                f.createElement(T, {
                  OnChange: this.OnSettingChanged,
                  eCurrentPermission: t,
                  eMinPrivacy: this.props.PrivacyStore.GetPrivacySetting(
                    "PrivacyProfile"
                  )
                }),
                e,
                { bOverlapHorizontal: !0, bUseWebStyles: !0 }
              );
            }),
            (t.prototype.OnSettingChanged = function(e) {
              this.props.PrivacyStore.ChangeCommentPermission(e);
            }),
            (t.prototype.render = function() {
              var e = this.props.PrivacyStore.CommentPermission,
                t = this.props.PrivacyStore.GetPrivacySetting("PrivacyProfile"),
                n = r(s(e, t));
              return f.createElement(
                f.Fragment,
                null,
                f.createElement(
                  "div",
                  {
                    className: "ProfilePrivacyDropDown",
                    onClick: this.OnClick
                  },
                  n,
                  f.createElement("img", {
                    className: "ProfilePrivacyDropDown_Arrow",
                    src:
                      _.a.COMMUNITY_CDN_URL +
                      "public/images/skin_1/actionArrowDnWhite.gif"
                  })
                ),
                f.createElement(u, {
                  eSaveState: this.props.PrivacyStore.GetCommentSaveState()
                })
              );
            }),
            w.b([M.a], t.prototype, "OnClick", null),
            w.b([M.a], t.prototype, "OnSettingChanged", null),
            (t = w.b([O.observer], t))
          );
        })(f.Component),
        H = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            w.c(t, e),
            (t.prototype.render = function() {
              var e = this,
                t = this.props.eMinPrivacy;
              return f.createElement(
                I.c,
                null,
                (!t || t >= 3) &&
                  f.createElement(
                    I.d,
                    {
                      onSelected: function() {
                        return e.props.OnChange(3);
                      }
                    },
                    Object(b.b)("#Privacy_Public")
                  ),
                (!t || t >= 2) &&
                  f.createElement(
                    I.d,
                    {
                      onSelected: function() {
                        return e.props.OnChange(2);
                      }
                    },
                    Object(b.b)("#Privacy_FriendsOnly")
                  ),
                f.createElement(
                  I.d,
                  {
                    onSelected: function() {
                      return e.props.OnChange(1);
                    }
                  },
                  Object(b.b)("#Privacy_Private")
                )
              );
            }),
            t
          );
        })(f.Component),
        T = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            w.c(t, e),
            (t.prototype.render = function() {
              var e = this,
                t = this.props.eMinPrivacy;
              return f.createElement(
                I.c,
                null,
                (!t || t >= 3) &&
                  f.createElement(
                    I.d,
                    {
                      onSelected: function() {
                        return e.props.OnChange(1);
                      },
                      title: Object(b.b)(
                        "#Profile_CommentPermission_Public_Desc"
                      )
                    },
                    Object(b.b)("#Privacy_Public")
                  ),
                (!t || t >= 2) &&
                  f.createElement(
                    I.d,
                    {
                      onSelected: function() {
                        return e.props.OnChange(0);
                      },
                      title: Object(b.b)(
                        "#Profile_CommentPermission_FriendsOnly_Desc"
                      )
                    },
                    Object(b.b)("#Privacy_FriendsOnly")
                  ),
                f.createElement(
                  I.d,
                  {
                    onSelected: function() {
                      return e.props.OnChange(2);
                    },
                    title: Object(b.b)(
                      "#Profile_CommentPermission_Private_Desc"
                    )
                  },
                  Object(b.b)("#Privacy_Private")
                )
              );
            }),
            t
          );
        })(f.Component);
      n("3gXU"),
        (window.AssertMsg = g.a),
        document.addEventListener("DOMContentLoaded", function() {
          Object(_.c)(), p(), h();
        }),
        (window.LocalizationManifestReady = v);
    },
    JyW5: function(e, t, n) {
      "use strict";
      function i(e, t, n) {
        var i,
          r = void 0,
          o = void 0,
          s = t;
        if (s.preventDefault && s.stopPropagation) {
          if (s.shiftKey) return null;
          s.preventDefault(),
            s.stopPropagation(),
            (i = s.currentTarget),
            (r = s.clientX),
            (o = s.clientY);
        } else i = t;
        var a = new p(e, i, r, o, n);
        return a.Show(), a;
      }
      n.d(t, "b", function() {
        return u;
      }),
        (t.a = i);
      var r = n("TToO"),
        o = n("Jmof"),
        s = (n.n(o), n("EqgU")),
        a = n("aMRU"),
        c = n("Y6cV"),
        l = n("y986"),
        u = (function() {
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
        })(),
        m = (function(e) {
          function t(t) {
            var n = e.call(this) || this;
            return (
              (n.m_bVisible = !1),
              (n.m_elSubmenuItem = null),
              (n.m_timerHideSubMenu = 0),
              (n.m_ownerWindow = t),
              n
            );
          }
          return (
            r.c(t, e),
            (t.prototype.Init = function(e, t) {
              this.m_ownerWindow.innerWidth < 400 &&
              this.m_ownerWindow.SteamClient &&
              this.m_ownerWindow.SteamClient.Window
                ? (this.m_popupContextMenu = new a.a(
                    e,
                    t,
                    u.GetBrowserInfoForPopup(this.m_ownerWindow)
                  ))
                : ((this.m_embeddedElementInstance = Object(c.b)(
                    this.m_ownerWindow.document
                  )),
                  (this.m_rctElement = o.createElement(a.g, e, t)));
            }),
            (t.prototype.SetOnHideCallback = function(e) {
              this.m_fnOnHideCallback = e;
            }),
            (t.prototype.Show = function() {
              this.m_rctElement
                ? this.m_embeddedElementInstance.Show(this.m_rctElement)
                : this.m_popupContextMenu.Show(),
                (this.m_bVisible = !0);
            }),
            (t.prototype.Hide = function() {
              this.InternalHide();
            }),
            (t.prototype.HideIfNotInFocus = function() {
              this.BHasFocus() ||
                this.BIsFocusInChildHierarchy() ||
                this.Hide();
            }),
            (t.prototype.InternalHide = function() {
              this.m_bVisible &&
                ((this.m_bVisible = !1),
                this.InternalHideSubMenu(),
                this.m_fnOnHideCallback && this.m_fnOnHideCallback(),
                this.m_embeddedElementInstance
                  ? this.m_embeddedElementInstance.Hide(300)
                  : this.m_popupContextMenu.Close());
            }),
            Object.defineProperty(t.prototype, "visible", {
              get: function() {
                return this.m_bVisible;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, "options", {
              get: function() {
                return this.m_options;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, "owner_window", {
              get: function() {
                return this.m_ownerWindow;
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.ShowSubMenu = function(e, t) {
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
            (t.prototype.CancelHideSubMenuTimer = function() {
              this.m_timerHideSubMenu > 0 &&
                (clearTimeout(this.m_timerHideSubMenu),
                (this.m_timerHideSubMenu = 0));
            }),
            (t.prototype.HideSubMenu = function() {
              var e = this;
              if (!this.m_submenu) return void this.CancelHideSubMenuTimer();
              this.m_timerHideSubMenu > 0 ||
                (this.m_timerHideSubMenu = window.setTimeout(function() {
                  e.InternalHideSubMenu(), (e.m_timerHideSubMenu = 0);
                }, 500));
            }),
            (t.prototype.InternalHideSubMenu = function() {
              this.CancelHideSubMenuTimer(),
                this.m_submenu &&
                  (this.BIsFocusInChildHierarchy() && this.TakeFocus(),
                  (this.m_elSubmenuItem = null),
                  this.m_submenu.InternalHide(),
                  (this.m_submenu = null));
            }),
            (t.prototype.TakeFocus = function() {
              this.m_popupContextMenu && this.m_popupContextMenu.Focus(),
                this.m_fnTakeFocus && this.m_fnTakeFocus();
            }),
            (t.prototype.BInternalElementInParentHierarchy = function(e) {
              return (
                this.m_parentInstance &&
                (this.m_parentInstance.BIsChildElement(e) ||
                  this.m_parentInstance.BInternalElementInParentHierarchy(e))
              );
            }),
            (t.prototype.BInternalElementInChildHierarchy = function(e) {
              return (
                this.m_submenu &&
                (this.m_submenu.BIsChildElement(e) ||
                  this.m_submenu.BInternalElementInChildHierarchy(e))
              );
            }),
            (t.prototype.BIsChildElement = function(e) {
              return this.m_embeddedElementInstance
                ? this.m_embeddedElementInstance.BIsChildElement(e)
                : s.b(this.m_popupContextMenu.root_element, e);
            }),
            (t.prototype.BHasFocus = function() {
              return this.m_embeddedElementInstance
                ? this.m_embeddedElementInstance.BIsChildElement(
                    this.m_ownerWindow.document.activeElement
                  )
                : this.m_popupContextMenu.focused;
            }),
            (t.prototype.BIsFocusInChildHierarchy = function() {
              return (
                this.m_submenu &&
                (this.m_submenu.BHasFocus() ||
                  this.m_submenu.BIsFocusInChildHierarchy())
              );
            }),
            (t.prototype.BIsElementInMenuHierarchy = function(e) {
              return (
                this.BInternalElementInParentHierarchy(e) ||
                this.BInternalElementInChildHierarchy(e)
              );
            }),
            (t.prototype.BIsSubMenuVisible = function() {
              return !!this.m_submenu;
            }),
            r.b([l.observable], t.prototype, "m_bVisible", void 0),
            t
          );
        })(u),
        p = (function(e) {
          function t(n, i, r, o, s) {
            var a = e.call(this, i.ownerDocument.defaultView) || this;
            t.sm_iActiveContextMenuInstance &&
              t.sm_iActiveContextMenuInstance.Hide(),
              (t.sm_iActiveContextMenuInstance = a),
              (a.m_options = s || {});
            var c = {
              element: i,
              clientX: r,
              clientY: o,
              instance: a,
              options: a.m_options,
              fnOnMenuItemSelected: function() {
                a.Hide();
              }
            };
            return a.Init(c, n), a;
          }
          return (
            r.c(t, e),
            (t.prototype.Show = function() {
              t.sm_mapEmbeddedMouseOverlays.ShowElement(
                this.m_ownerWindow.document,
                o.createElement(a.f),
                this
              ),
                e.prototype.Show.call(this);
            }),
            (t.prototype.Hide = function() {
              t.sm_mapEmbeddedMouseOverlays.HideElement(
                this.m_ownerWindow.document,
                this
              ),
                e.prototype.Hide.call(this);
            }),
            (t.sm_mapEmbeddedMouseOverlays = new c.a(
              "ContextMenuMouseOverlay"
            )),
            t
          );
        })(m),
        h = (function(e) {
          function t(t, n, i) {
            var r = e.call(this, i.ownerDocument.defaultView) || this;
            (r.m_parentInstance = t),
              (r.m_options = {
                bOverlapVertical: !0,
                bUseWebStyles: t.options.bUseWebStyles
              });
            var o = {
              element: i,
              clientX: null,
              clientY: null,
              instance: r,
              options: r.m_options,
              fnOnMenuItemSelected: function() {
                r.Hide();
              },
              bSubmenu: !0
            };
            return r.Init(o, n), r;
          }
          return (
            r.c(t, e),
            (t.prototype.Hide = function() {
              var e = this;
              this.m_popupContextMenu
                ? window.setTimeout(function() {
                    e.m_parentInstance.HideIfNotInFocus();
                  }, 10)
                : this.m_parentInstance.Hide();
            }),
            t
          );
        })(m);
    },
    KLxG: function(e, t, n) {
      "use strict";
      function i(e, t, n) {
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
      t.a = i;
    },
    TToO: function(e, t, n) {
      "use strict";
      function i(e, t) {
        function n() {
          this.constructor = e;
        }
        s(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      function r(e, t) {
        var n = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) &&
            t.indexOf(i) < 0 &&
            (n[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var r = 0, i = Object.getOwnPropertySymbols(e);
            r < i.length;
            r++
          )
            t.indexOf(i[r]) < 0 && (n[i[r]] = e[i[r]]);
        return n;
      }
      function o(e, t, n, i) {
        var r,
          o = arguments.length,
          s =
            o < 3
              ? t
              : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, n, i);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (r = e[a]) &&
              (s = (o < 3 ? r(s) : o > 3 ? r(t, n, s) : r(t, n)) || s);
        return o > 3 && s && Object.defineProperty(t, n, s), s;
      }
      (t.c = i),
        n.d(t, "a", function() {
          return a;
        }),
        (t.d = r),
        (t.b = o); /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
      var s =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t;
            }) ||
          function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          },
        a =
          Object.assign ||
          function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++) {
              t = arguments[n];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          };
    },
    Y6cV: function(e, t, n) {
      "use strict";
      function i(e) {
        return new a(e.body, !0);
      }
      (t.b = i),
        n.d(t, "a", function() {
          return c;
        });
      var r = n("wLXD"),
        o = (n.n(r), n("EqgU")),
        s = (function() {
          function e(e) {
            this.instance = new a(e, !1);
          }
          return e;
        })(),
        a = (function() {
          function e(e, t) {
            void 0 === t && (t = !0),
              (this.m_parent = e),
              (this.m_bRemoveOnHide = t);
          }
          return (
            (e.prototype.Show = function(e, t) {
              var n = this;
              return (
                this.CancelShowInterval(),
                t
                  ? new Promise(function(i, r) {
                      n.iIntervalShow = window.setTimeout(function() {
                        var t = n.m_parent.ownerDocument;
                        t.defaultView &&
                          !t.defaultView.closed &&
                          (n.InternalShow(e), i());
                      }, t);
                    })
                  : (this.InternalShow(e), Promise.resolve())
              );
            }),
            (e.prototype.InternalShow = function(e) {
              this.m_container
                ? r.unmountComponentAtNode(this.m_container)
                : ((this.m_container = this.m_parent.ownerDocument.createElement(
                    "div"
                  )),
                  this.m_parent.appendChild(this.m_container)),
                r.render(e, this.m_container);
            }),
            (e.prototype.Hide = function(e) {
              var t = this;
              this.CancelShowInterval(),
                e
                  ? (this.iIntervalShow = window.setTimeout(function() {
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
                (window.clearInterval(this.iIntervalShow),
                (this.iIntervalShow = void 0));
            }),
            (e.prototype.BIsChildElement = function(e) {
              return this.m_container && o.b(this.m_container, e);
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
            (e.prototype.ShowElementDelayed = function(e, t, n, i) {
              var r = this.GetEmbeddedElement(e);
              return (r.activeObject = i), r.instance.Show(n, t);
            }),
            (e.prototype.ShowElement = function(e, t, n) {
              var i = this.GetEmbeddedElement(e);
              (i.activeObject = n), i.instance.Show(t);
            }),
            (e.prototype.HideElement = function(e, t, n) {
              var i = this.GetEmbeddedElement(e);
              i.activeObject == t &&
                ((i.activeObject = void 0), i.instance.Hide(n));
            }),
            (e.prototype.GetEmbeddedElement = function(e) {
              var t = this.m_mapEmbeddedHovers.get(e);
              return (
                t || ((t = new s(e.body)), this.m_mapEmbeddedHovers.set(e, t)),
                t
              );
            }),
            e
          );
        })();
    },
    aMRU: function(e, t, n) {
      "use strict";
      function i(e) {
        return c.createElement("div", { className: "ContextMenuMouseOverlay" });
      }
      function r() {
        return (
          window.sessionStorage && "true" == window.sessionStorage.getItem(g)
        );
      }
      function o(e) {
        e
          ? window.sessionStorage.setItem(g, "true")
          : window.sessionStorage.removeItem(g);
      }
      n.d(t, "c", function() {
        return d;
      }),
        n.d(t, "d", function() {
          return v;
        }),
        n.d(t, "b", function() {
          return f;
        }),
        n.d(t, "e", function() {
          return y;
        }),
        n.d(t, "g", function() {
          return _;
        }),
        n.d(t, "a", function() {
          return b;
        }),
        (t.f = i),
        (t.h = r),
        (t.i = o);
      var s = n("TToO"),
        a = n("Mn8c"),
        c = n("Jmof"),
        l = (n.n(c), n("wLXD")),
        u = (n.n(l), n("z9An")),
        m = n("EqgU"),
        p = n("KLxG"),
        h = n("5Pz3"),
        d = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            s.c(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.children,
                n = e.className,
                i = s.d(e, ["children", "className"]),
                r =
                  this.context.contextMenuInstance &&
                  this.context.contextMenuInstance.options.bUseWebStyles,
                o = r ? "popup_menu popup_body" : "contextMenuContents";
              return (
                n && (o += " " + n),
                c.createElement("div", s.a({}, i, { className: o }), t)
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
            s.c(t, e),
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
                t = (e.onSelected,
                e.bInteractableItem,
                s.d(e, ["onSelected", "bInteractableItem"])),
                n =
                  this.context.contextMenuInstance &&
                  this.context.contextMenuInstance.options.bUseWebStyles,
                i = [n ? "popup_menu_item" : "contextMenuItem"];
              return (
                this.props.className && i.push(this.props.className),
                this.props.disabled && i.push("disabled"),
                c.createElement(
                  "div",
                  s.a({ onMouseEnter: this.OnMouseEnter }, t, {
                    onClick: this.OnClick,
                    unselectable: this.props.unselectable,
                    className: i.join(" ")
                  }),
                  this.props.children
                )
              );
            }),
            (t.contextTypes = {
              contextMenuInstance: function() {
                return null;
              }
            }),
            s.b([p.a], t.prototype, "OnClick", null),
            s.b([p.a], t.prototype, "OnMouseEnter", null),
            t
          );
        })(c.PureComponent),
        f = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            s.c(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.bChecked,
                n = e.children,
                i = s.d(e, ["bChecked", "children"]);
              return c.createElement(
                v,
                s.a({}, i),
                c.createElement("div", {
                  className: "contextMenuCheckMark" + (t && " menuChecked")
                }),
                n
              );
            }),
            t
          );
        })(c.PureComponent),
        y = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (n.state = { bActive: !1 }), n;
          }
          return (
            s.c(t, e),
            (t.prototype.OnSubMenuMouseEnter = function() {
              this.context.contextMenuInstance.CancelHideSubMenuTimer();
            }),
            (t.prototype.RenderSubMenu = function() {
              return c.createElement(
                d,
                { onMouseEnter: this.OnSubMenuMouseEnter },
                this.props.children
              );
            }),
            (t.prototype.OnMouseEnter = function(e) {
              var t = this;
              if (this.context.contextMenuInstance) {
                var n = this.context.contextMenuInstance.ShowSubMenu(
                  e.currentTarget,
                  this.RenderSubMenu
                );
                n &&
                  (this.setState({ bActive: !0 }),
                  n.SetOnHideCallback(function() {
                    t.setState({ bActive: !1 });
                  }));
              }
            }),
            (t.prototype.OnClick = function(e) {
              this.OnMouseEnter(e), this.props.onClick && this.props.onClick(e);
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.label,
                n = (e.children, e.className),
                i = s.d(e, ["label", "children", "className"]);
              return (
                this.state.bActive && (n = (n || "") + " active"),
                c.createElement(
                  v,
                  s.a({}, i, {
                    onClick: this.OnClick,
                    className: n,
                    onMouseEnter: this.OnMouseEnter,
                    onSelected: null,
                    bInteractableItem: !0
                  }),
                  t,
                  " ",
                  c.createElement(h.h, null)
                )
              );
            }),
            (t.contextTypes = {
              contextMenuInstance: function() {
                return null;
              }
            }),
            s.b([p.a], t.prototype, "OnSubMenuMouseEnter", null),
            s.b([p.a], t.prototype, "RenderSubMenu", null),
            s.b([p.a], t.prototype, "OnMouseEnter", null),
            s.b([p.a], t.prototype, "OnClick", null),
            t
          );
        })(c.PureComponent),
        _ = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.m_elMenu = void 0),
              (n.m_cReenteranceGuard = 1),
              (n.state = {
                ready: !1,
                menuLeft: void 0,
                menuTop: void 0,
                menuRight: void 0,
                menuBottom: void 0,
                menuWidth: void 0,
                menuHeight: void 0
              }),
              n
            );
          }
          return (
            s.c(t, e),
            (t.prototype.BindMenuElement = function(e) {
              var t = this;
              (this.m_elMenu = e || void 0),
                this.PositionMenu(),
                this.state.ready ||
                  (this.props.instance.SetTakeFocus(this.TakeFocus.bind(this)),
                  this.setState({ ready: !0 }, function() {
                    t.TakeFocus();
                  }));
            }),
            (t.prototype.OnBlur = function(e) {
              (e.relatedTarget && m.b(e.currentTarget, e.relatedTarget)) ||
                (e.relatedTarget &&
                  this.props.instance.BIsElementInMenuHierarchy(
                    e.relatedTarget
                  )) ||
                this.props.instance.BIsSubMenuVisible() ||
                (this.state.ready &&
                  this.props.instance.visible &&
                  this.props.instance.Hide());
            }),
            (t.prototype.OnKeyDown = function(e) {
              27 == e.keyCode &&
                this.state.ready &&
                (this.props.instance.Hide(),
                e.preventDefault(),
                e.stopPropagation());
            }),
            (t.prototype.getChildContext = function() {
              return { contextMenuInstance: this.props.instance };
            }),
            (t.prototype.componentDidUpdate = function() {
              this.m_cReenteranceGuard-- > 0
                ? this.PositionMenu()
                : (this.m_cReenteranceGuard = 2);
            }),
            (t.prototype.TakeFocus = function() {
              if (
                this.m_elMenu &&
                this.state.ready &&
                this.props.instance.visible &&
                (this.props.popup ||
                  !m.b(
                    this.m_elMenu,
                    this.m_elMenu.ownerDocument.activeElement
                  ))
              ) {
                var e = this.m_elMenu.querySelector(".ContextMenuAutoFocus");
                e && e.focus ? e.focus() : this.m_elMenu.focus();
              }
            }),
            (t.prototype.PositionMenu = function() {
              var e = this.m_elMenu,
                t = this.props.element;
              if (e && t) {
                var n = t.ownerDocument.defaultView;
                e.ownerDocument.defaultView.CtxUpdate = this.PositionMenu.bind(
                  this
                );
                var i = t.getBoundingClientRect(),
                  r = e.getBoundingClientRect(),
                  o = null != this.props.popup,
                  s = this.props.options,
                  a = {
                    menuLeft: void 0,
                    menuRight: void 0,
                    menuTop: void 0,
                    menuBottom: void 0,
                    menuWidth: void 0,
                    menuHeight: void 0
                  },
                  c = this.props.clientX,
                  l = this.props.clientY,
                  u = n.innerWidth,
                  p = n.innerHeight;
                if (o) {
                  (c += n.screenLeft), (l += n.screenTop), (i = m.c(n, i));
                  var h = n.screen,
                    d = 0,
                    v = 0;
                  h.availLeft && (d = h.availLeft),
                    h.availTop && (v = h.availTop),
                    (u = d + h.availWidth),
                    (p = v + h.availHeight);
                }
                (s.bOverlapHorizontal || s.bOverlapVertical) &&
                  (c = l = void 0);
                var f = c || i.left,
                  y = c || i.right,
                  _ = r.width;
                s.bMatchWidth && ((_ = y - f), (a.menuWidth = _));
                var b = (s.bOverlapHorizontal ? y : f) - _,
                  g = b > 0,
                  w = u - (s.bOverlapHorizontal ? f : y) - _,
                  S = w > 0,
                  E = (s.bPreferPopLeft || !S) && g;
                g ||
                  S ||
                  ((E = g > S),
                  s.bFitToWindow &&
                    ((_ += (E ? b : w) - 8), (a.menuWidth = _))),
                  (!s.bPreferPopLeft && S) || !g
                    ? (a.menuLeft = s.bOverlapHorizontal ? f : y)
                    : (a.menuRight = u - (s.bOverlapHorizontal ? y : f));
                var P = l || i.top,
                  x = l || i.bottom,
                  C = r.height;
                s.bMatchHeight && ((C = x - P), (a.menuHeight = C));
                var M = (s.bOverlapVertical ? x : P) - C,
                  k = M > 0,
                  I = p - (s.bOverlapVertical ? P : x) - C,
                  O = I > 0,
                  L = (s.bPreferPopTop || !O) && k;
                k ||
                  O ||
                  ((L = M > I),
                  s.bFitToWindow &&
                    ((C += (L ? M : I) - 8), (a.menuHeight = C))),
                  L
                    ? (a.menuBottom = p - (s.bOverlapVertical ? x : P))
                    : (a.menuTop = s.bOverlapVertical ? P : x),
                  o
                    ? (a.menuHeight || (a.menuHeight = r.height),
                      a.menuWidth || (a.menuWidth = r.width),
                      a.menuBottom &&
                        !a.menuTop &&
                        ((a.menuTop = p - a.menuBottom - a.menuHeight),
                        (a.menuBottom = void 0)),
                      a.menuRight &&
                        !a.menuLeft &&
                        ((a.menuLeft = u - a.menuRight - a.menuWidth),
                        (a.menuRight = void 0)))
                    : (a.menuLeft && (a.menuLeft += n.scrollX),
                      a.menuTop && (a.menuTop += n.scrollY),
                      a.menuBottom &&
                        (a.menuBottom +=
                          n.document.body.scrollHeight -
                          n.scrollY -
                          n.innerHeight),
                      a.menuRight &&
                        (a.menuRight +=
                          n.document.body.scrollWidth -
                          n.scrollX -
                          n.innerWidth)),
                  (a.menuLeft === this.state.menuLeft &&
                    a.menuRight === this.state.menuRight &&
                    a.menuTop === this.state.menuTop &&
                    a.menuBottom === this.state.menuBottom &&
                    a.menuWidth === this.state.menuWidth &&
                    a.menuHeight === this.state.menuHeight) ||
                    this.setState(a);
              }
            }),
            (t.prototype.componentDidMount = function() {}),
            (t.prototype.render = function() {
              var e = this,
                t = { visibility: this.state.ready ? "visible" : "hidden" };
              if (this.props.popup) {
                var n = this.props.element.ownerDocument.defaultView;
                void 0 !== this.state.menuLeft &&
                  void 0 !== this.state.menuTop &&
                  void 0 !== this.state.menuWidth &&
                  void 0 !== this.state.menuHeight &&
                  n.SteamClient.Window.GetWindowRestoreDetails(function(t) {
                    var i = e.props.popup.window,
                      r = e.state.menuLeft - n.screenX,
                      o = e.state.menuTop - n.screenY;
                    try {
                      i.SteamClient.Window.PositionWindowRelative(
                        t,
                        r,
                        o,
                        e.state.menuWidth,
                        e.state.menuHeight
                      );
                    } catch (e) {
                      console.error(e);
                    }
                  });
              } else
                void 0 !== this.state.menuTop
                  ? (t.top = this.state.menuTop)
                  : void 0 !== this.state.menuBottom &&
                    (t.bottom = this.state.menuBottom),
                  void 0 !== this.state.menuLeft
                    ? (t.left = this.state.menuLeft)
                    : void 0 !== this.state.menuRight &&
                      (t.right = this.state.menuRight),
                  void 0 !== this.state.menuHeight &&
                    (t.height = this.state.menuHeight),
                  void 0 !== this.state.menuWidth &&
                    (t.width = this.state.menuWidth);
              var i =
                this.props.options.strClassName ||
                (this.props.options.bUseWebStyles
                  ? "popup_block_new popup_block_hidden_until_visible"
                  : "contextMenu");
              return (
                this.props.instance.visible &&
                  this.state.ready &&
                  (i += " visible"),
                (i += " ContextMenuFocusContainer"),
                c.createElement(
                  "div",
                  {
                    className: i,
                    ref: this.BindMenuElement,
                    style: t,
                    onBlur: this.OnBlur,
                    onKeyDown: this.OnKeyDown,
                    tabIndex: 0
                  },
                  this.props.children
                )
              );
            }),
            (t.childContextTypes = {
              contextMenuInstance: function() {
                return null;
              },
              context: function() {
                return null;
              }
            }),
            s.b([p.a], t.prototype, "BindMenuElement", null),
            s.b([p.a], t.prototype, "OnBlur", null),
            s.b([p.a], t.prototype, "OnKeyDown", null),
            (t = s.b([a.observer], t))
          );
        })(c.Component),
        b = (function(e) {
          function t(n, i, r) {
            var o =
              e.call(this, "contextmenu_" + t.sm_iContextMenuInstance++, {
                title: "Menu",
                html_class: "ContextMenuPopup client_chat_frame",
                body_class: "ContextMenuPopupBody",
                replace_existing_popup: !1,
                target_browser: r,
                eCreationFlags: u.c.ContextMenu
              }) || this;
            return (o.m_menuProps = n), (o.m_children = i), o;
          }
          return (
            s.c(t, e),
            (t.prototype.UpdateParamsBeforeShow = function(e) {
              var t = m.c(
                this.m_menuProps.element.ownerDocument.defaultView,
                this.m_menuProps.element.getBoundingClientRect()
              );
              return (
                (e.dimensions = {
                  left: t.right,
                  top: t.top,
                  width: 350,
                  height: 1
                }),
                (e.availscreenwidth = this.m_menuProps.element.ownerDocument.defaultView.screen.availWidth),
                (e.availscreenheight = this.m_menuProps.element.ownerDocument.defaultView.screen.availHeight),
                e
              );
            }),
            (t.prototype.Render = function(e, t) {
              l.render(
                c.createElement(
                  _,
                  s.a({}, this.m_menuProps, { popup: this }),
                  this.m_children
                ),
                t
              );
            }),
            (t.prototype.OnBlur = function() {}),
            (t.prototype.OnFocus = function() {}),
            (t.prototype.OnLoad = function() {}),
            (t.prototype.OnResize = function() {}),
            (t.prototype.OnClose = function() {}),
            (t.sm_iContextMenuInstance = 0),
            t
          );
        })(u.a),
        g = "DEBUG_StickyContextMenus";
    },
    kllU: function(e, t, n) {
      "use strict";
      var i = n("mtWM");
      n.n(i), n("m5yx"), n("z9An");
    },
    m5yx: function(e, t, n) {
      "use strict";
      function i() {
        var e = r("config");
        e && Object.assign(o, e);
        var t = r("userinfo");
        t && Object.assign(s, t), (n.p = o.CDN_URL);
      }
      function r(e, t) {
        void 0 === t && (t = a);
        var n = document.getElementById(t);
        if (n)
          try {
            return JSON.parse(n.getAttribute("data-" + e) || "");
          } catch (e) {
            console.error("Failed to parse config", e);
          }
        else console.error("Missing config element #" + t);
      }
      n.d(t, "a", function() {
        return o;
      }),
        n.d(t, "d", function() {
          return s;
        }),
        (t.c = i),
        (t.b = r);
      var o = {
          EUNIVERSE: 0,
          WEB_UNIVERSE: "",
          LANGUAGE: "english",
          CDN_URL: "",
          MEDIA_CDN_COMMUNITY_URL: "",
          MEDIA_CDN_URL: "",
          COMMUNITY_CDN_URL: "",
          PUBLIC_SHARED_URL: "",
          COMMUNITY_BASE_URL: "",
          STORE_BASE_URL: "",
          STORE_ICON_BASE_URL: "",
          IN_CLIENT: !1,
          USE_POPUPS: !1,
          IN_MOBILE: !1,
          WEBAPI_BASE_URL: "",
          TOKEN_URL: "",
          SESSIONID: ""
        },
        s = {
          logged_in: !1,
          steamid: "",
          accountid: 0,
          account_name: "",
          token: void 0,
          token_use_id: void 0
        },
        a = "webui_config";
    },
    sVhq: function(e, t, n) {
      "use strict";
      function i(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        var i = f.LocalizeString(e);
        return i
          ? (t.length > 0 &&
              (i = i.replace(/%(\d+)\$s/g, function(e, n) {
                if (n <= t.length && n >= 1) {
                  var i = t[n - 1];
                  return String(void 0 === i || null === i ? "" : i);
                }
                return e;
              })),
            i)
          : e;
      }
      function r(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        var i = f.LocalizeString(e);
        if (!i) return e;
        for (var r, o = [], s = /(.*?)%(\d+)\$s/g, a = 0; (r = s.exec(i)); ) {
          (a += r[0].length), o.push(r[1]);
          var l = parseInt(r[2]);
          l >= 1 && l <= t.length && o.push(t[l - 1]);
        }
        return (
          o.push(i.substr(a)),
          c.createElement.apply(c, [c.Fragment, null].concat(o))
        );
      }
      function o(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        return 1 === t || "1" === t
          ? i.apply(void 0, [e, t].concat(n))
          : i.apply(void 0, [e + "_Plural", t].concat(n));
      }
      function s(e, t) {
        return void 0 === t && (t = !1), a(e, !t);
      }
      function a(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !0);
        var r = t ? "#TimeSince_" : "#TimeInterval_";
        return e >= 2 * u
          ? i(r + "XYears", Math.floor(e / u))
          : e >= u
            ? ((e -= u),
              e >= 2 * m
                ? i(r + "1YearXMonths", Math.floor(e / m))
                : i(r + "1Year"))
            : e >= 2 * m
              ? i(r + "XMonths", Math.floor(e / m))
              : e >= 2 * p
                ? i(r + "XWeeks", Math.floor(e / p))
                : e >= 2 * h
                  ? i(r + "XDays", Math.floor(e / h))
                  : e >= h
                    ? ((e -= h),
                      e >= 2 * d
                        ? i(r + "1DayXHours", Math.floor(e / d))
                        : i(r + "1Day"))
                    : e >= 2 * d
                      ? i(r + "XHours", Math.floor(e / d))
                      : e >= d
                        ? ((e -= d),
                          e >= 2 * v && n
                            ? i(r + "1HourXMinutes", Math.floor(e / v))
                            : i(r + "1Hour"))
                        : n
                          ? e >= 2 * v
                            ? i(r + "XMinutes", Math.floor(e / v))
                            : i(e >= v ? r + "1Minute" : r + "LessThanAMinute")
                          : i(r + "LessThanAnHour");
      }
      (t.b = i),
        (t.d = r),
        (t.c = o),
        (t.e = s),
        n.d(t, "a", function() {
          return f;
        });
      var c = n("Jmof"),
        l = (n.n(c),
        (function() {
          function e() {
            (this.m_mapTokens = new Map()),
              (this.m_mapFallbackTokens = new Map());
          }
          return (
            (e.prototype.InitFromObjects = function(e, t, n, i) {
              var r = this;
              this.m_mapTokens.clear(),
                Object.keys(n).forEach(function(e, t) {
                  r.m_mapTokens.set(e, n[e]);
                }),
                Object.keys(e).forEach(function(t, n) {
                  r.m_mapTokens.set(t, e[t]);
                }),
                t &&
                  Object.keys(t).forEach(function(e, n) {
                    r.m_mapTokens.has(e) || r.m_mapTokens.set(e, t[e]),
                      r.m_mapFallbackTokens.set(e, t[e]);
                  }),
                i &&
                  Object.keys(i).forEach(function(e, t) {
                    r.m_mapTokens.has(e) || r.m_mapTokens.set(e, i[e]),
                      r.m_mapFallbackTokens.has(e) ||
                        r.m_mapFallbackTokens.set(e, i[e]);
                  });
            }),
            (e.prototype.InitDirect = function(e) {
              var t = this;
              this.m_mapTokens.clear(),
                this.m_mapFallbackTokens.clear(),
                Object.keys(e).forEach(function(n, i) {
                  t.m_mapTokens.set(n, e[n]);
                });
            }),
            (e.prototype.LocalizeString = function(e) {
              if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
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
        })()),
        u = 31536e3,
        m = 2628e3,
        p = 604800,
        h = 86400,
        d = 3600,
        v = 60,
        f = new l();
      window.LocalizationManager = f;
    },
    vwkX: function(e, t, n) {
      "use strict";
      function i(e, t, n) {
        t < 0 ||
          n < 0 ||
          (n >= e.length && (e[n] = void 0), e.splice(n, 0, e.splice(t, 1)[0]));
      }
      function r(e, t) {
        return o(e, function(e) {
          return t == e;
        });
      }
      function o(e, t) {
        var n = e.findIndex(t);
        return n >= 0 && (e.splice(n, 1), !0);
      }
      function s(e, t) {
        return e.filter(function(e) {
          return t !== e;
        });
      }
      function a(e, t) {
        if (e.length != t.length) return !1;
        for (var n = 0; n < e.length; n++) if (e[n] != t[n]) return !1;
        return !0;
      }
      (t.d = i), (t.b = r), (t.c = o), (t.a = s), (t.e = a);
    },
    z9An: function(e, t, n) {
      "use strict";
      n.d(t, "c", function() {
        return i;
      }),
        n.d(t, "a", function() {
          return l;
        }),
        n.d(t, "b", function() {
          return u;
        }),
        n.d(t, "d", function() {
          return p;
        });
      var i,
        r = n("TToO"),
        o = n("vwkX"),
        s = n("KLxG"),
        a = n("y986");
      !(function(e) {
        (e[(e.Minimized = 1)] = "Minimized"),
          (e[(e.Hidden = 2)] = "Hidden"),
          (e[(e.Tooltip = 4)] = "Tooltip"),
          (e[(e.ContextMenu = 8)] = "ContextMenu"),
          (e[(e.Resizable = 16)] = "Resizable");
      })(i || (i = {}));
      var c = (function() {
          function e(e, t) {
            (this.m_rgLoadingLinks = []), (this.m_rgLoadingLinks = []);
            for (
              var n = e.document.getElementsByTagName("link"), i = 0;
              i < n.length;
              i++
            ) {
              var r = n[i];
              r.addEventListener("load", this.OnLinkLoad),
                this.m_rgLoadingLinks.push(r);
            }
          }
          return (
            (e.prototype.SetTarget = function(e) {
              (this.m_fnRender = e),
                0 == this.m_rgLoadingLinks.length && this.m_fnRender();
            }),
            (e.prototype.OnLinkLoad = function(e) {
              e.currentTarget.removeEventListener("load", this.OnLinkLoad),
                o.b(this.m_rgLoadingLinks, e.currentTarget),
                0 == this.m_rgLoadingLinks.length && this.m_fnRender();
            }),
            r.b([s.a], e.prototype, "OnLinkLoad", null),
            e
          );
        })(),
        l = (function() {
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
            (e.prototype.Show = function(e) {
              var t = this;
              void 0 === e && (e = !0),
                window.SteamClient &&
                  (this.m_rgParams.eCreationFlags |= i.Hidden),
                this.m_rgParams.eCreationFlags & i.Tooltip && (e = !1),
                this.BIsValid() &&
                  (this.BIsClosed()
                    ? ((this.m_popup = void 0), (this.m_element = void 0))
                    : e && this.Focus());
              var n = p.GetExistingPopup(this.m_strName);
              if (!n || this.m_rgParams.replace_existing_popup) {
                this.m_rgParams = this.UpdateParamsBeforeShow(this.m_rgParams);
                var r, o, s;
                n
                  ? ((o = n.m_element),
                    (r = n.m_popup),
                    n.ReleasePopup(),
                    (s = n.m_renderWhenReady),
                    p.RemoveTrackedPopup(n),
                    r.removeEventListener("beforeunload", n.OnUnload),
                    r.removeEventListener("resize", n.OnResizeEvent),
                    r.removeEventListener("focus", this.OnFocusInternal),
                    r.removeEventListener("blur", this.OnBlurInternal),
                    r.removeEventListener("drop", n.OnDrop),
                    r.removeEventListener("dragover", n.OnDragOver))
                  : ((a = m.CreatePopup(this.m_strName, this.m_rgParams)),
                    (r = a.popup),
                    (o = a.element),
                    (s = new c(r, o))),
                  r &&
                    o &&
                    ((r.document.title = this.m_strTitle),
                    r.addEventListener("beforeunload", this.OnUnload),
                    r.addEventListener("resize", this.OnResizeEvent),
                    r.addEventListener("focus", this.OnFocusInternal),
                    r.addEventListener("blur", this.OnBlurInternal),
                    r.addEventListener("drop", this.OnDrop),
                    r.addEventListener("dragover", this.OnDragOver),
                    (this.m_popup = r),
                    (this.m_element = o),
                    (this.m_renderWhenReady = s),
                    this.m_renderWhenReady.SetTarget(function() {
                      return t.RenderInternal(t.m_popup, t.m_element, e);
                    })),
                  p.AddTrackedPopup(this),
                  n && e && this.Focus();
                var a;
              }
            }),
            (e.prototype.RenderInternal = function(e, t, n) {
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
            (e.prototype.OnUnload = function() {
              p.RemoveTrackedPopup(this), this.OnClose();
            }),
            Object.defineProperty(e.prototype, "browser_info", {
              get: function() {
                return this.m_rgParams.target_browser;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "window", {
              get: function() {
                return this.m_popup;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "root_element", {
              get: function() {
                return this.m_element;
              },
              enumerable: !0,
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
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype.Focus = function() {
              this.m_popup &&
              void 0 !== this.m_popup.SteamClient &&
              void 0 !== this.m_popup.SteamClient.Window
                ? this.m_popup.SteamClient.Window.BringToFront()
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
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype.GetWindowRestoreDetails = function() {
              var e = this;
              return this.m_popup &&
                !this.m_popup.closed &&
                this.m_popup.SteamClient
                ? new Promise(function(t, n) {
                    e.m_popup.SteamClient.Window.GetWindowRestoreDetails(
                      function(e) {
                        t(e);
                      }
                    );
                  })
                : Promise.resolve("");
            }),
            (e.prototype.ReleasePopup = function() {
              this.OnClose(), (this.m_popup = null);
            }),
            (e.prototype.OnFocus = function() {}),
            (e.prototype.OnBlur = function() {}),
            r.b([a.observable], e.prototype, "m_bFocused", void 0),
            r.b([s.a], e.prototype, "OnResizeEvent", null),
            r.b([s.a], e.prototype, "OnUnload", null),
            r.b([s.a], e.prototype, "OnFocusInternal", null),
            r.b([s.a], e.prototype, "OnBlurInternal", null),
            r.b([a.computed], e.prototype, "focused", null),
            e
          );
        })(),
        u = (function(e) {
          function t(t, n, i, r) {
            var o = e.call(this, t, i) || this;
            return o.SetSavedDimensionsKey(n), (o.m_bExpires = r), o;
          }
          return (
            r.c(t, e),
            (t.prototype.SetSavedDimensionsKey = function(e) {
              this.browser_info &&
              this.browser_info != { m_unPID: 0, m_nBrowserID: -1 }
                ? (this.m_strSavedDimensionsKey = "Overlay_" + e)
                : (this.m_strSavedDimensionsKey = e);
            }),
            (t.prototype.UpdateParamsBeforeShow = function(e) {
              return (
                !this.m_strSavedDimensionsKey ||
                e.bIgnoreSavedDimensions ||
                e.strRestoreDetails
                  ? e.strRestoreDetails &&
                    p.SetRestoreDetails(
                      this.m_strSavedDimensionsKey,
                      e.strRestoreDetails,
                      this.m_bExpires
                    )
                  : (e.strRestoreDetails = p.GetRestoreDetails(
                      this.m_strSavedDimensionsKey
                    )),
                e
              );
            }),
            (t.prototype.OnLoad = function() {
              var e = this;
              this.GetWindowRestoreDetails().then(function(t) {
                e.m_strInitialRestoreDetails = t;
              });
            }),
            (t.prototype.OnResize = function() {}),
            (t.prototype.OnClose = function() {
              var e = this;
              this.BIsVisible() &&
                this.GetWindowRestoreDetails().then(function(t) {
                  var n = e.m_strInitialRestoreDetails == t;
                  e.m_popup &&
                    e.m_strSavedDimensionsKey &&
                    !n &&
                    p.SetRestoreDetails(
                      e.m_strSavedDimensionsKey,
                      t,
                      e.m_bExpires
                    );
                });
            }),
            t
          );
        })(l),
        m = (function() {
          function e() {
            var e = this;
            (this.m_bShuttingDown = !1),
              (this.m_mapPopups = new Map()),
              (this.m_rgShutdownCallbacks = []),
              (this.m_rgPopupCreatedCallbacks = []),
              (this.m_unCurrentAccountID = 0),
              (this.m_mapRestoreDetails = new Map()),
              (this.m_bSaveRequired = !1),
              Object({ NODE_ENV: "production", STEAM_BUILD: "buildbot" })
                .MOBILE_BUILD ||
                window.addEventListener("beforeunload", function(t) {
                  e.m_bShuttingDown = !0;
                  for (
                    var n = 0, i = e.m_rgShutdownCallbacks;
                    n < i.length;
                    n++
                  )
                    (0, i[n])();
                  var r = [];
                  e.m_mapPopups.forEach(function(e) {
                    e.BIsValid() && !e.BIsClosed() && r.push(e);
                  });
                  for (var o = 0, s = r; o < s.length; o++) s[o].Close();
                  e.m_bSaveRequired && e.SaveSavedDimensionStore(),
                    e.m_mapPopups.clear();
                });
          }
          return (
            (e.prototype.SetCurrentLoggedInAccountID = function(e) {
              (this.m_unCurrentAccountID = e),
                e
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
              )
                (0, n[t])(e);
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
            (e.prototype.ClosePopupsOwnedByBrowser = function(e) {
              this.m_mapPopups.forEach(function(t) {
                t.browser_info &&
                  t.browser_info.m_nBrowserID == e.m_nBrowserID &&
                  t.browser_info.m_unPID == e.m_unPID &&
                  t.Close();
              });
            }),
            (e.CreatePopup = function(e, t) {
              var n = t.dimensions || {},
                i = n.width || 300,
                r = n.height || 300,
                o = t.title,
                s = "width=" + i + ",height=" + r;
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
                  t.availscreenwidth &&
                    t.availscreenheight &&
                    (c.push("screenavailwidth=" + t.availscreenwidth),
                    c.push("screenavailheight=" + t.availscreenheight))),
                t.strRestoreDetails &&
                  c.push("restoredetails=" + t.strRestoreDetails),
                c && (a += "?" + c.join("&"));
              var l = t.owner_window || window,
                u = l.open(a, e, s, !0);
              if (!u)
                return (
                  console.log(
                    "Failed to create popup.. browser popup blocker enabled?"
                  ),
                  {}
                );
              var m = "";
              t.html_class && (m = 'class="' + t.html_class + '"');
              var p = "";
              t.body_class && (p = 'class="' + t.body_class + '"');
              var h =
                "<!DOCTYPE html><html " +
                m +
                "><head><title></title></head><body " +
                p +
                '><div id="popup_target"></div></body></html>';
              u.document.write(h), (u.document.title = o);
              for (
                var d = u.document.getElementsByTagName("head")[0],
                  v = document.getElementsByTagName("link"),
                  f = 0;
                f < v.length;
                f++
              ) {
                var y = v[f];
                if ("stylesheet" == y.rel) {
                  for (
                    var _ = u.document.createElement("link"), b = 0;
                    b < y.attributes.length;
                    b++
                  ) {
                    var g = y.attributes.item(b);
                    _.setAttribute(g.name, g.value);
                  }
                  d.appendChild(_);
                }
              }
              return {
                popup: u,
                element: u.document.getElementById("popup_target")
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
                this.m_mapRestoreDetails = new Map();
                var t = window.localStorage.getItem(e);
                if (t)
                  try {
                    var n = JSON.parse(t);
                    if (n)
                      for (var i = 0, r = n; i < r.length; i++) {
                        var o = r[i];
                        this.m_mapRestoreDetails.set(o[0], o[1]);
                      }
                  } catch (e) {}
              }
            }),
            (e.prototype.SaveSavedDimensionStore = function() {
              if (this.m_unCurrentAccountID && this.m_bSaveRequired) {
                var e = this.GetLocalStorageKey();
                window.localStorage.setItem(
                  e,
                  JSON.stringify(this.m_mapRestoreDetails)
                ),
                  (this.m_bSaveRequired = !1);
              }
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
                  if (this.m_mapRestoreDetails.size > 50) {
                    for (
                      var i = null,
                        r = Date.now(),
                        o = 0,
                        s = Array.from(this.m_mapRestoreDetails.keys());
                      o < s.length;
                      o++
                    ) {
                      var a = s[o],
                        c = this.m_mapRestoreDetails.get(a);
                      c.last_used < r &&
                        c.bExpires &&
                        ((r = c.last_used), (i = a));
                    }
                    i && this.m_mapRestoreDetails.delete(i);
                  }
                  var l = {
                    strRestoreDetails: t,
                    last_used: Date.now(),
                    bExpires: n
                  };
                  this.m_mapRestoreDetails.set(e, l);
                } else this.m_mapRestoreDetails.delete(e);
                (this.m_bSaveRequired = !0),
                  this.m_bShuttingDown && this.SaveSavedDimensionStore();
              }
            }),
            e
          );
        })(),
        p = new m();
    }
  },
  ["HxNj"]
);

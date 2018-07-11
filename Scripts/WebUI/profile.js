/*! This file includes third-party software, governed by the licenses described here: https://steamcommunity.com/public/javascript/webui/profile.licenses.txt */

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
webpackJsonp(
  [3],
  {
    "3gXU": function(e, t) {},
    "4Dav": function(e, t, n) {
      "use strict";
      function r(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        console.assert
          ? 0 == n.length
            ? console.assert(!!e, t)
            : console.assert.apply(console, [!!e, t].concat(n))
          : e && console.warn.apply(console, [t].concat(n));
      }
      t.a = r;
    },
    "5Pz3": function(e, t, n) {
      "use strict";
      function r() {
        return q.createElement(
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
          q.createElement("path", {
            d:
              "M-232.755,589.942l3.103,2.408c5.78,4.492,11.973,8.18,18.409,10.959l3.581,1.547l2.276,33.783 c0.089,1.33,1.385,2.54,2.715,2.54h48.62c1.355,0,2.745-1.273,2.852-2.621l2.74-33.284l3.602-1.496 c6.406-2.656,12.646-6.262,18.554-10.707l3.137-2.366l30.578,15.009c1.155,0.571,2.924,0.017,3.563-1.087l24.303-42.1 c0.674-1.173,0.265-3.014-0.852-3.785l-27.872-19.309l0.469-3.832c0.495-4.032,0.725-7.395,0.725-10.57 c0-3.129-0.227-6.5-0.687-10.307l-0.469-3.896l28.699-19.253c1.112-0.741,1.509-2.473,0.84-3.627l-24.3-42.104 c-0.657-1.139-2.502-1.727-3.7-1.155l-31.208,14.748l-3.091-2.341c-5.571-4.224-11.466-7.688-17.522-10.306l-3.58-1.548 l-2.34-34.887c-0.089-1.33-1.381-2.536-2.715-2.536h-48.617c-1.355,0-2.74,1.274-2.851,2.626l-2.834,34.371l-3.593,1.501 c-6.082,2.535-12.028,5.924-17.667,10.071l-3.124,2.302l-31.392-15.413c-1.168-0.575-2.924-0.025-3.559,1.074l-24.309,42.107 c-0.678,1.172-0.264,3.014,0.848,3.781l28.068,19.444l-0.524,3.883c-0.592,4.378-0.865,8.018-0.865,11.462 c0,2.988,0.179,6.065,0.55,9.403l0.431,3.853l-28.528,19.125c-1.108,0.742-1.509,2.468-0.84,3.632l24.308,42.1 c0.656,1.142,2.489,1.726,3.7,1.154L-232.755,589.942z M-177.498,560.051c-19.311,0-35.02-15.709-35.02-35.02 s15.709-35.02,35.02-35.02s35.02,15.709,35.02,35.02S-158.188,560.051-177.498,560.051z"
          })
        );
      }
      function i() {
        return q.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_ChatSettings",
            version: "1.1",
            x: "0px",
            y: "0px",
            viewBox: "0 0 600 600"
          },
          q.createElement(
            "g",
            null,
            q.createElement("path", {
              d:
                "M256,0C126.6,0,21.3,104.7,21.3,233.7c0,65.9,26.5,125.4,74.7,168.3v99.3c0,3.8,2,7.4,5.3,9.2c1.7,1,3.5,1.5,5.3,1.5   c1.8,0,3.7-0.5,5.4-1.5l85.8-50.3c18.9,4.8,38.4,7.3,58.1,7.3c129.4,0,234.7-104.9,234.7-233.7C490.7,104.7,385.4,0,256,0z    M405.3,254.1L370,260c-3,13.5-8.3,26-15.5,37.3l20.8,29.2L347.8,354l-29.2-20.8c-11.3,7.2-23.8,12.5-37.3,15.5l-5.9,35.3h-39   l-5.9-35.3c-13.5-3-26-8.3-37.3-15.5L164.2,354l-27.5-27.5l20.8-29.2C150.3,286,145,273.5,142,260l-35.3-5.9v-39l35.3-5.9   c3-13.5,8.3-26,15.5-37.3l-20.8-29.2l27.5-27.5l29.2,20.8c11.3-7.2,23.8-12.5,37.3-15.5l5.9-35.3h39l5.9,35.3   c13.5,3,26,8.3,37.3,15.5l29.2-20.8l27.5,27.5L354.5,172c7.2,11.3,12.5,23.8,15.5,37.3l35.3,5.9V254.1z"
            }),
            q.createElement("circle", { cx: "256", cy: "234.6", r: "45.9" })
          )
        );
      }
      function o() {
        return q.createElement(
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
          q.createElement("polyline", {
            fill: "none",
            className: "line",
            strokeWidth: "12",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points:
              "178.25,197.25 247,197.25 247,82.5 175,10.25 111.5,10.25 111.5,56 "
          }),
          q.createElement("polygon", {
            fill: "none",
            className: "line",
            strokeWidth: "12",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "155,133 83,60.75 11,60.75 11,247.75 155,247.75 "
          }),
          q.createElement("polyline", {
            fill: "none",
            className: "line",
            strokeWidth: "12",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "83,60.75 83,133 155,133 "
          }),
          q.createElement("polyline", {
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
        return q.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_DownArrowContextMenu",
            "data-name": "Layer 1",
            viewBox: "0 0 128 128",
            x: "0px",
            y: "0px"
          },
          q.createElement("polygon", {
            points:
              "50 59.49 13.21 22.89 4.74 31.39 50 76.41 95.26 31.39 86.79 22.89 50 59.49"
          })
        );
      }
      function c() {
        return q.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_MagnifyingGlass",
            version: "1.1",
            x: "0px",
            y: "0px",
            viewBox: "0 0 100 100"
          },
          q.createElement(
            "g",
            { transform: "translate(0,-952.36218)" },
            q.createElement("path", {
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
      function a(e) {
        var t = "SVGIcon_Button SVGIcon_Microphone";
        return (
          e.className && (t += " " + e.className),
          q.createElement(
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
            q.createElement(
              "g",
              { className: "MicBase" },
              q.createElement(
                "g",
                null,
                q.createElement(
                  "g",
                  null,
                  q.createElement("path", {
                    d:
                      "M-64.7,826.3c-0.5-2.9-0.8-5.8-0.8-8.7v-38.2h11.2v36.5L-64.7,826.3z"
                  }),
                  q.createElement("path", {
                    d:
                      "M-54.8,779.9v35.8l-9.6,9.6c-0.4-2.6-0.6-5.1-0.6-7.6v-37.7H-54.8 M-53.8,778.9H-66v38.7c0,3.3,0.4,6.5,1,9.7l11.2-11.2 V778.9L-53.8,778.9z"
                  })
                ),
                q.createElement(
                  "g",
                  null,
                  q.createElement("path", {
                    d:
                      "M56.8,817.6c0,24.7-24.8,44.9-55.3,44.9c-16.6,0-31.6-6-41.7-15.5l-8.6,8.6c11.1,10.5,26.7,17.5,44.2,18.8v25.1h-35.2 c-2.1,0-3.8,2.7-3.8,6.1c0,3.4,1.7,6.1,3.8,6.1h35.5H7.3h35.5c2.1,0,3.8-2.7,3.8-6.1c0-3.4-1.7-6.1-3.8-6.1H7.6v-25.1 C42,871.8,69,847.3,69,817.6v-38.7H56.8V817.6z"
                  }),
                  q.createElement("path", {
                    d:
                      "M69,778.9H56.8v38.7c0,24.7-24.8,44.9-55.3,44.9c-16.6,0-31.6-6-41.7-15.5l-8.6,8.6c11.1,10.5,26.7,17.5,44.2,18.8v25.1 h-35.2c-2.1,0-3.8,2.7-3.8,6.1c0,3.4,1.7,6.1,3.8,6.1h35.5H7.3h35.5c2.1,0,3.8-2.7,3.8-6.1c0-3.4-1.7-6.1-3.8-6.1H7.6v-25.1 C42,871.8,69,847.3,69,817.6V778.9L69,778.9z"
                  })
                )
              ),
              q.createElement(
                "g",
                null,
                q.createElement("path", {
                  d:
                    "M40.6,712.5c0-21.6-17.5-39.1-39.1-39.1c-21.6,0-39.1,17.5-39.1,39.1v87.4l10-10v-72.4h0v-5c0-16.1,13.1-29.1,29.1-29.1 c16.1,0,29.1,13.1,29.1,29.1v5v14.1l10-10V712.5z"
                })
              ),
              q.createElement(
                "g",
                null,
                q.createElement("path", {
                  d:
                    "M-4.7,835.4c-2.2-0.5-4.4-1.2-6.4-2.2C-9.1,834.2-6.9,834.9-4.7,835.4z"
                }),
                q.createElement("path", {
                  d: "M-0.1,836c-0.2,0-0.4,0-0.6,0C-0.6,836-0.4,836-0.1,836z"
                }),
                q.createElement("path", {
                  d: "M30.6,806.9C30.6,806.9,30.6,806.9,30.6,806.9v-16.6"
                }),
                q.createElement("path", {
                  d:
                    "M-11.9,832.8c0.2,0.1,0.5,0.2,0.7,0.3C-11.4,833-11.7,832.9-11.9,832.8L-11.9,832.8z"
                }),
                q.createElement("path", {
                  d:
                    "M-1.7,835.9c-0.3,0-0.5-0.1-0.8-0.1C-2.3,835.8-2,835.8-1.7,835.9z"
                }),
                q.createElement("path", {
                  d:
                    "M-3.3,835.7c-0.3-0.1-0.6-0.1-1-0.2C-3.9,835.6-3.6,835.6-3.3,835.7z"
                }),
                q.createElement("path", {
                  d:
                    "M30.6,776.1v14.1v16.6c0,0,0,0,0,0s0,0,0,0c0,16.1-13,29.1-29.1,29.1c-0.5,0-1.1,0-1.6,0c-0.2,0-0.4,0-0.6,0 c-0.3,0-0.6,0-1-0.1c-0.3,0-0.5-0.1-0.8-0.1c-0.2,0-0.5-0.1-0.7-0.1c-0.3-0.1-0.6-0.1-1-0.2c-0.2,0-0.3-0.1-0.5-0.1 c-2.2-0.5-4.4-1.2-6.4-2.2c0,0-0.1,0-0.1,0c-0.2-0.1-0.5-0.2-0.7-0.3l0,0c-3-1.6-5.7-3.6-8-6.1l-7.1,7.1 c7.1,7.6,17.3,12.3,28.5,12.3c21.6,0,39.1-17.5,39.1-39.1v-40.8L30.6,776.1z"
                }),
                q.createElement("path", {
                  d:
                    "M-0.8,836c-0.3,0-0.6-0.1-1-0.1C-1.4,835.9-1.1,835.9-0.8,836z"
                }),
                q.createElement("path", {
                  d:
                    "M1.5,836.1c-0.5,0-1.1,0-1.6,0C0.4,836,0.9,836.1,1.5,836.1z"
                }),
                q.createElement("path", {
                  d:
                    "M-2.6,835.8c-0.2,0-0.5-0.1-0.7-0.1C-3,835.7-2.8,835.7-2.6,835.8z"
                }),
                q.createElement("path", {
                  d:
                    "M1.5,836.1c16.1,0,29.1-13,29.1-29.1c0,0,0,0,0,0C30.6,823,17.6,836.1,1.5,836.1z"
                }),
                q.createElement("path", {
                  d:
                    "M-4.2,835.5c-0.2,0-0.3-0.1-0.5-0.1C-4.5,835.4-4.4,835.5-4.2,835.5z"
                }),
                q.createElement("path", {
                  d:
                    "M-11.1,833.2C-11.1,833.2-11.2,833.2-11.1,833.2C-11.2,833.2-11.1,833.2-11.1,833.2z"
                })
              )
            ),
            q.createElement(
              "g",
              { className: "MicFill" },
              q.createElement(
                "g",
                null,
                q.createElement("path", {
                  d:
                    "M-53.8,816.1L-65,827.3c2.2,10.8,7.9,20.5,16.2,28.3l8.6-8.6c-8.5-7.9-13.6-18.2-13.6-29.4V816.1L-53.8,816.1z"
                })
              ),
              q.createElement(
                "g",
                null,
                q.createElement("path", {
                  d:
                    "M1.5,834.6c-15.2,0-27.6-12.4-27.6-27.6v-94.5c0-15.2,12.4-27.6,27.6-27.6c15.2,0,27.6,12.4,27.6,27.6v94.5 C29.1,822.2,16.7,834.6,1.5,834.6z"
                }),
                q.createElement("path", {
                  d:
                    "M1.5,696.3c8.9,0,16.1,7.2,16.1,16.1v94.5c0,8.9-7.2,16.1-16.1,16.1c-8.9,0-16.1-7.2-16.1-16.1v-94.5 C-14.6,703.6-7.4,696.3,1.5,696.3 M1.5,673.3c-21.6,0-39.1,17.5-39.1,39.1v94.5c0,21.6,17.5,39.1,39.1,39.1s39.1-17.5,39.1-39.1 v-94.5C40.6,690.8,23.1,673.3,1.5,673.3L1.5,673.3z"
                })
              )
            ),
            q.createElement(
              "g",
              { className: "MicStrike", fill: "none", strokeWidth: "1" },
              q.createElement("line", {
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
        return q.createElement(
          "svg",
          {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Emoticon",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          q.createElement("path", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "12",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d:
              "M127.5,13.712 c63.714,0,115.252,51.253,115.252,113.836c0,62.582-51.538,113.837-115.252,113.837S12.248,190.413,12.248,127.548 S63.786,13.712,127.5,13.712z"
          }),
          q.createElement("path", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "12",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d:
              "M103.81,102.063 c0-13.593-11.044-24.354-24.353-24.354c-13.31,0-24.353,11.045-24.353,24.354"
          }),
          q.createElement("path", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "12",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d:
              "M199.896,102.063 c0-13.593-11.043-24.354-24.354-24.354c-13.309,0-24.354,10.761-24.354,24.354"
          }),
          q.createElement("path", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "12",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d:
              "M200.275,146.804 c-3.115,37.379-34.547,67.112-72.775,67.112c-38.229,0-69.661-29.733-72.776-67.112H200.275z"
          })
        );
      }
      function m() {
        return q.createElement(
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
          q.createElement(
            "g",
            { transform: "translate(0,-952.36218)" },
            q.createElement("path", {
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
      function u() {
        return q.createElement(
          "svg",
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_ResizeIcon",
            x: "0px",
            y: "0px",
            viewBox: "0 0 256 256"
          },
          q.createElement(
            "g",
            null,
            q.createElement("path", {
              fill: "#020202",
              d:
                "M115.512,137.263l21.6-21.6c0,0,25.5,25.5,45.8,45.8l35-35v91.6h-91.6l35-35 C141.012,162.763,115.512,137.263,115.512,137.263z"
            }),
            q.createElement("path", {
              fill: "#020202",
              d:
                "M108.312,129.763c-20.3-20.3-35.8-35.8-35.8-35.8l21.6-21.601c0,0,15.5,15.5,35.8,35.801L108.312,129.763z"
            }),
            q.createElement("path", {
              fill: "#020202",
              d:
                "M54.312,75.763c-20.3-20.3-15.8-15.8-15.8-15.8l21.6-21.601c0,0-4.5-4.5,15.8,15.801L54.312,75.763z"
            })
          )
        );
      }
      function p() {
        return q.createElement(
          "svg",
          {
            fill: "#FFFFFF",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Popout",
            viewBox: "0 0 8 8",
            x: "0px",
            y: "0px"
          },
          q.createElement("path", {
            d:
              "M0 0v8h8v-2h-1v1h-6v-6h1v-1h-2zm4 0l1.5 1.5-2.5 2.5 1 1 2.5-2.5 1.5 1.5v-4h-4z"
          })
        );
      }
      function h() {
        return q.createElement(
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
          q.createElement(
            "g",
            null,
            q.createElement("polygon", {
              points:
                "-74.9,117.2 -102.2,145 -74.9,172.8 -89.1,186.8 -116.2,159.3 -143.2,186.8 -157.5,172.8 -130.2,145 -157.5,117.2 -143.2,103.2 -116.2,130.7 -89.1,103.2"
            })
          )
        );
      }
      function d() {
        return q.createElement(
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
          q.createElement("line", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "45",
            strokeMiterlimit: "10",
            x1: "212",
            y1: "212",
            x2: "44",
            y2: "44"
          }),
          q.createElement("line", {
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
        return q.createElement(
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
            q.createElement(
              "g",
              null,
              q.createElement("path", {
                className: "Bubble",
                fill: "none",
                strokeMiterlimit: "1",
                strokeWidth: "2.5px",
                d:
                  "M60.1,32.3c0,15.1-12.3,27.3-27.4,27.3 c-5,0-9.7-1.4-13.8-3.7c-1.8-1.1-15,5.4-13.8,3.4c1.7-2.9,5.9-10.3,4.7-12C7,43,5.3,37.8,5.3,32.3C5.3,17.2,17.6,5,32.7,5 C47.8,5,60.1,17.2,60.1,32.3z"
              })
            ),
          !e.exitOnly &&
            q.createElement(
              "g",
              null,
              q.createElement("path", {
                className: "AudioLines",
                opacity: "0",
                strokeWidth: "1px",
                d:
                  "M37.2,51.1c-0.5,0-1-0.1-1.3-0.4c-0.7-0.5-0.7-1.3,0-1.8c6.3-4.4,9.8-10.2,9.8-16.4c0-6.2-3.5-12-9.8-16.4 c-0.7-0.5-0.7-1.3,0-1.8s1.9-0.5,2.6,0c7.1,4.9,10.9,11.4,10.9,18.3c0,6.9-3.9,13.4-10.9,18.3C38.2,51,37.7,51.1,37.2,51.1 M21.4,40.2c0.5,0,0.9-0.1,1.3-0.4c2.8-2,4.3-4.6,4.3-7.3s-1.5-5.4-4.3-7.3c-0.7-0.5-1.9-0.5-2.6,0c-0.7,0.5-0.7,1.3,0,1.8 c2.1,1.5,3.3,3.4,3.3,5.5c0,2.1-1.2,4-3.3,5.5c-0.7,0.5-0.7,1.3,0,1.8C20.4,40.1,20.9,40.2,21.4,40.2 M29.3,45.7 c0.5,0,1-0.1,1.3-0.4c4.9-3.4,7.7-7.9,7.7-12.7c0-4.8-2.7-9.3-7.7-12.7c-0.7-0.5-1.9-0.5-2.6,0c-0.7,0.5-0.7,1.3,0,1.8 c4.2,2.9,6.6,6.8,6.6,10.9c0,4.1-2.3,8-6.6,10.9c-0.7,0.5-0.7,1.3,0,1.8C28.4,45.5,28.8,45.7,29.3,45.7"
              })
            ),
          q.createElement(
            "g",
            { className: "Arrow", opacity: e.exitOnly ? 1 : 0 },
            q.createElement("polyline", {
              fill: "none",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              points: "41,30.7 14.5,30.7 23.5,19.4 "
            }),
            q.createElement("polyline", {
              fill: "none",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              points: "41,30.7 14.5,30.7 23.5,42 "
            })
          ),
          q.createElement(
            "g",
            null,
            q.createElement("polyline", {
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
            q.createElement(
              "g",
              { className: "Microphone" },
              q.createElement("path", {
                d:
                  "M40.971,28.593v6.278c0,4.007-4.023,7.284-8.971,7.284c-2.693,0-5.126-0.974-6.765-2.516 c-1.379-1.28-2.207-2.952-2.207-4.769v-6.278l0,0H21.05v6.278c0,0.536,0.064,1.055,0.162,1.573 c0.357,1.752,1.281,3.325,2.627,4.592c1.801,1.702,4.332,2.839,7.17,3.049v4.072H25.3c-0.341,0-0.616,0.438-0.616,0.989 c0,0.552,0.275,0.99,0.616,0.99h5.759h1.882H38.7c0.341,0,0.616-0.438,0.616-0.99c0-0.551-0.275-0.989-0.616-0.989h-5.71v-4.072 c5.58-0.422,9.96-4.396,9.96-9.214v-6.278H40.971z"
              }),
              q.createElement(
                "g",
                null,
                q.createElement("path", {
                  d:
                    "M32,39.841c-3.493,0-6.343-2.344-6.343-5.213v-17.85c0-2.871,2.85-5.213,6.343-5.213s6.343,2.342,6.343,5.213v17.85,C38.343,37.497,35.493,39.841,32,39.841z"
                })
              )
            )
        );
      }
      function v() {
        return q.createElement(
          "svg",
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_ExitIcon",
            x: "0px",
            y: "0px",
            width: "64px",
            height: "64px",
            viewBox: "0 0 64 64",
            enableBackground: "new 0 0 64 64"
          },
          q.createElement(
            "g",
            { className: "Arrow" },
            q.createElement("polyline", {
              fill: "none",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              points: "41,30.7 14.5,30.7 23.5,19.4 "
            }),
            q.createElement("polyline", {
              fill: "none",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              points: "41,30.7 14.5,30.7 23.5,42 "
            })
          ),
          q.createElement(
            "g",
            null,
            q.createElement("polyline", {
              className: "ExitDoor",
              strokeLinecap: "round",
              strokeMiterlimit: "1",
              strokeWidth: "2px",
              fill: "none",
              points:
                "32.5,22.1 32.5,17.7 47.7,17.7 47.7,43.8 32.5,43.8 32.5,39.5"
            })
          )
        );
      }
      function y() {
        return q.createElement(
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
          q.createElement(
            "g",
            { className: "ScratchPad" },
            q.createElement("path", {
              fill: "none",
              strokeWidth: "0",
              strokeMiterlimit: "10",
              d:
                "M179.751,40.994h14.869 c8.388,0,15.25,6.862,15.25,15.25v141.193c0,8.388-6.862,15.25-15.25,15.25H57.37c-8.388,0-15.25-6.862-15.25-15.25V56.244 c0-8.388,6.862-15.25,15.25-15.25h14.869H179.751z"
            }),
            q.createElement("line", {
              fill: "none",
              strokeWidth: "0",
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              x1: "74.495",
              y1: "27.313",
              x2: "74.495",
              y2: "54.063"
            }),
            q.createElement("line", {
              fill: "none",
              strokeWidth: "0",
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              x1: "124.495",
              y1: "27.313",
              x2: "124.495",
              y2: "54.063"
            }),
            q.createElement("line", {
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
          q.createElement("line", {
            className: "TextLines",
            x1: "71.6",
            y1: "115.4",
            x2: "179.4",
            y2: "115.4"
          }),
          q.createElement("line", {
            className: "TextLines",
            x1: "71.6",
            y1: "145.8",
            x2: "143.3",
            y2: "145.8"
          }),
          q.createElement("line", {
            className: "TextLines",
            x1: "71.6",
            y1: "175.9",
            x2: "179.4",
            y2: "175.9"
          }),
          q.createElement("line", {
            className: "TextLines",
            x1: "73.7",
            y1: "82.7",
            x2: "166.8",
            y2: "82.7"
          })
        );
      }
      function g(e) {
        var t = "SVGIcon_Button SVGIcon_Headphones";
        return (
          e.className && (t += " " + e.className),
          q.createElement(
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
            q.createElement(
              "g",
              { className: "HeadPhonesBase" },
              q.createElement(
                "g",
                null,
                q.createElement("path", {
                  fill: "none",
                  d:
                    "M-176.5,418.7c-37,0-69.5,30.2-69.5,64.5v25.3c11.3,2.3,19.9,12.3,19.9,24.3v8.6l100.9-100.9 C-138.2,427.3-156.7,418.7-176.5,418.7z"
                }),
                q.createElement("path", {
                  d:
                    "M-226.2,532.9c0-12-8.5-22-19.9-24.3v-25.3c0-34.4,32.5-64.5,69.5-64.5c19.8,0,38.3,8.6,51.2,21.9l6.9-6.9 c-14.8-15.1-35.7-24.9-58.2-24.9c-42.3,0-79.4,34.8-79.4,74.5v25.3c-11.3,2.3-19.9,12.3-19.9,24.3v29.8c0,7.8,3.6,14.7,9.2,19.3 l40.5-40.5V532.9z"
                }),
                q.createElement("path", {
                  d:
                    "M-97.1,508.6v-25.3c0-7.5-1.3-14.8-3.8-21.8l-7.9,7.9c1.2,4.5,1.8,9.1,1.8,13.9v25.3c-11.3,2.3-19.9,12.3-19.9,24.3v29.8 c0,13.7,11.1,24.8,24.8,24.8c13.7,0,24.8-11.1,24.8-24.8v-29.8C-77.2,520.9-85.8,510.9-97.1,508.6z"
                })
              )
            ),
            q.createElement(
              "g",
              { className: "HeadphonesStrike" },
              q.createElement("line", {
                fill: "none",
                x1: "-260.5",
                y1: "598.5",
                x2: "-94.5",
                y2: "432.4"
              })
            ),
            q.createElement(
              "g",
              { className: "HeadPhonesFill" },
              q.createElement("path", {
                d:
                  "M-226.2,562.7v-21.2l-40.5,40.5c4.3,3.5,9.7,5.6,15.6,5.6C-237.3,587.5-226.2,576.4-226.2,562.7z"
              }),
              q.createElement("path", {
                d:
                  "M-118.3,433.7l-6.9,6.9c7.9,8.1,13.7,18,16.5,28.8l7.9-7.9C-104.5,451.1-110.5,441.6-118.3,433.7z"
              })
            )
          )
        );
      }
      function _() {
        return q.createElement(
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
          q.createElement(
            "g",
            { transform: "translate(0,-952.36218)" },
            q.createElement("path", {
              d:
                "M58.6,970.4c-15.4,0-28.1,12.7-28.1,28.1c0,15.4,12.7,28.1,28.1,28.1s28.1-12.7,28.1-28.1\tC86.7,983,74,970.4,58.6,970.4z M202.1,970.4c-15.4,0-28.1,12.7-28.1,28.1c0,15.4,12.7,28.1,28.1,28.1s28.1-12.7,28.1-28.1 C230.2,983,217.6,970.4,202.1,970.4z M130.4,986c-15.4,0-28.1,12.7-28.1,28.1c0,15.4,12.7,28.1,28.1,28.1s28.1-12.7,28.1-28.1 C158.5,998.6,145.8,986,130.4,986z M242.8,1110.6c0-0.1,0-17.9,0-18l-0.1-16.1c0-22.4-18.2-40.6-40.6-40.6 c-17.8,0-30,7.7-36.3,18.8c-2,3.5-3.4,7.3-4.5,11.1c-7.5-8.7-18.6-14.3-31-14.3s-23.5,5.6-31,14.3c-1.1-3.9-2.5-7.6-4.5-11.1 c-6.3-11.1-18.4-18.8-36.3-18.8c-22.4,0-40.6,18.2-40.6,40.6v46.8c0,3.4,2.8,6.2,6.2,6.2h12.5v31.2c0,3.4,2.8,6.2,6.2,6.2h31.2 c3.4,0,6.2-2.8,6.2-6.2v-31.2h9.4v9.4c0,3.4,2.8,6.2,6.2,6.2h12.5v31.2c0,3.4,2.8,6.2,6.2,6.2H146c3.4,0,6.2-2.8,6.2-6.2v-31.2 h12.5c3.4,0,6.2-2.8,6.2-6.2v-9.4h9.4v31.2c0,3.4,2.8,6.2,6.2,6.2h31.2c3.4,0,6.2-2.8,6.2-6.2v-31.2h12.5c3.4,0,6.3-2.7,6.3-6.2\tV1110.6z"
            })
          )
        );
      }
      function w() {
        return q.createElement(
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
          q.createElement("circle", {
            fill: "none",
            strokeWidth: "10",
            strokeMiterlimit: "10",
            cx: "128",
            cy: "128",
            r: "95.333"
          }),
          q.createElement("line", {
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
          q.createElement("line", {
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
      function b() {
        return q.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_AddFriend",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          q.createElement(
            "g",
            {
              className: "friendHead",
              transform: "matrix(1.34048,0,0,1.34048,-10.0942,-5.50445)"
            },
            q.createElement("circle", {
              cx: "86.296",
              cy: "47.419",
              r: "33.526"
            })
          ),
          q.createElement("path", {
            className: "friendBody",
            d:
              "M100.353,170.882c0-23.589,10.397-44.736,26.842-59.152c-3.352-0.423-6.773-0.649-10.257-0.649H94.231\tc-39.775,0-56.481,28.271-56.481,63.099v41.88c0,0-0.3,16.369,35.917,21.813c36.217,5.444,73.651,5,73.651,5 C119.666,230.681,100.353,203.044,100.353,170.882z"
          }),
          q.createElement("path", {
            className: "plusCircle",
            d:
              "M179.01,103.892c-36.998,0-66.99,29.992-66.99,66.99s29.994,66.989,66.99,66.989c36.997,0,66.99-29.991,66.99-66.989 S216.008,103.892,179.01,103.892z M217.893,175.882h-33.647v33.882c0,2.762-2.239,5-5,5s-5-2.238-5-5v-33.882h-33.647 c-2.762,0-5-2.238-5-5c0-2.763,2.238-5,5-5h33.647V132.47c0-2.762,2.239-5,5-5s5,2.238,5,5v33.412h33.647c2.762,0,5,2.237,5,5 C222.893,173.643,220.654,175.882,217.893,175.882z"
          })
        );
      }
      function E() {
        return q.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_4",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_FriendRequest",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          q.createElement(
            "g",
            {
              className: "friendHead",
              transform: "matrix(1.34048,0,0,1.34048,-10.0942,-5.50445)"
            },
            q.createElement("circle", {
              cx: "85.923",
              cy: "47.419",
              r: "33.526"
            })
          ),
          q.createElement("path", {
            className: "friendBody",
            d:
              "M100.353,170.882c0-23.589,10.397-44.736,26.842-59.152c-3.352-0.423-6.773-0.649-10.257-0.649H94.231\tc-39.775,0-56.481,28.271-56.481,63.099v41.88c0,0-0.3,16.369,35.917,21.813c36.217,5.444,73.651,5,73.651,5 C119.666,230.681,100.353,203.044,100.353,170.882z"
          }),
          q.createElement("path", {
            className: "friendArm",
            d:
              "M18.167,63.833c6.53-0.734,39.348,39.127,50.007,47.647s21.327,16.686,15.16,25.353s-20.646,16.74-36.167,2.5 S-1.349,90.532,0,85.333S8.599,64.909,18.167,63.833z"
          }),
          q.createElement("path", {
            className: "redCircle",
            d:
              "M178.51,103.892c-36.998,0-66.99,29.992-66.99,66.99s29.994,66.99,66.99,66.99c36.997,0,66.99-29.992,66.99-66.99 S215.508,103.892,178.51,103.892z"
          })
        );
      }
      function x() {
        return q.createElement(
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
          q.createElement("path", {
            d:
              "M165.678,20.535c-17.251,0-31.386,14.135-31.386,31.386c0,17.252,14.135,31.386,31.386,31.386 c17.251,0,31.386-14.134,31.386-31.386C197.063,34.67,182.929,20.535,165.678,20.535z"
          }),
          q.createElement("path", {
            d:
              "M165.678,93.121c24.995,0,45.335,20.34,45.335,45.335v52.31c0,3.853-3.123,6.975-6.975,6.975h-13.95v34.874 c0,3.852-3.123,6.974-6.974,6.975h-34.874c-3.852-0.001-6.974-3.123-6.975-6.975v-34.874h-13.95c-3.852,0-6.974-3.123-6.974-6.975 v-52.31C120.343,113.461,140.683,93.121,165.678,93.121z"
          }),
          q.createElement(
            "g",
            { className: "invitePlus" },
            q.createElement("line", {
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "22",
              strokeMiterlimit: "10",
              x1: "14",
              y1: "128",
              x2: "101.5",
              y2: "128"
            }),
            q.createElement("line", {
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
        return q.createElement(
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
          q.createElement("path", {
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d:
              "M167.768,62.647 l-0.012,123.052c0,24.729-19.334,44.856-43.096,44.866c-23.765-0.006-43.099-20.134-43.096-44.872L81.557,48.851 c0-15.345,14.483-27.827,29.83-27.83c15.342,0.003,27.827,12.488,27.833,27.833l-0.002,139.245 c0.003,6.376-8.546,12.925-14.925,12.925c0,0-13.929-0.166-13.929-12.928l0.003-124.839"
          })
        );
      }
      function k() {
        return q.createElement(
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
          q.createElement(
            "g",
            { className: "Speaker" },
            q.createElement("path", {
              d:
                "M93.785,52.265c-0.946,0-2.357,0.63-3.304,1.577L40.284,98.022c-0.947,0.789-2.831,1.578-4.093,1.578H9.367 C8.104,99.6,7,100.706,7,101.967v52.069c0,1.264,1.104,2.367,2.367,2.367H36.19c1.262,0,3.146,0.632,4.093,1.578l50.197,44.181 c0.947,0.789,2.516,1.578,3.304,1.578s1.578-1.104,1.578-2.367V54.631C95.363,53.369,94.731,52.265,93.785,52.265z"
            })
          ),
          q.createElement(
            "g",
            { className: "SoundWaves" },
            q.createElement("path", {
              className: "SoundWavesHighest",
              d:
                "M193.826,30.402c24.959,24.958,40.349,59.403,40.349,97.604c0,38.199-15.388,72.645-40.349,97.603l9.916,9.916 c28.067-28.067,44.263-64.673,44.263-107.521c0-42.847-16.196-79.455-44.263-107.521"
            }),
            q.createElement("path", {
              className: "SoundWavesHigh",
              d:
                "M175.737,47.628l-8.924,8.924c18.271,18.27,29.536,43.484,29.536,71.448s-11.264,53.178-29.536,71.448l8.924,8.924 c20.546-20.546,33.234-49.008,33.234-80.374c0-31.366-12.688-59.829-33.234-80.374V47.628z"
            }),
            q.createElement("path", {
              className: "SoundWavesMed",
              d:
                "M148.913,74.454l-8.925,8.925c11.488,11.488,18.491,27.236,18.491,44.624c0,17.388-7.054,33.281-18.491,44.575l8.875,8.975 c13.811-13.635,22.239-32.753,22.239-53.55c0-20.797-8.432-39.793-22.189-53.55V74.454z"
            }),
            q.createElement("path", {
              className: "SoundWavesLow",
              d:
                "M121.989,101.229l-8.778,9.073c4.641,4.516,7.397,10.706,7.397,17.702c0,6.995-2.755,13.186-7.397,17.702l8.778,9.073 c7.035-6.844,11.243-16.413,11.243-26.775C133.232,117.643,129.024,108.075,121.989,101.229z"
            })
          ),
          q.createElement(
            "g",
            { className: "SoundX" },
            q.createElement("line", {
              fill: "none",
              strokeWidth: "0",
              strokeMiterlimit: "10",
              x1: "137",
              y1: "170.667",
              x2: "223.167",
              y2: "84.5"
            }),
            q.createElement("line", {
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
      function M() {
        return q.createElement(
          "svg",
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_NewChatGroup",
            x: "0px",
            y: "0px",
            viewBox: "0 0 256 256"
          },
          q.createElement("path", {
            className: "Bubble",
            strokeWidth: "12",
            strokeMiterlimit: "10",
            d:
              "M127.393,10.833 c64.854,0,117.46,52.609,117.46,117.013c0,24.035-7.254,45.804-19.5,63.943c-4.99,7.711,13.15,39.457,20.408,51.705 c4.989,8.612-51.701-19.05-59.412-14.514c-17.233,9.979-37.188,15.872-58.957,15.872c-64.859,0-117.465-52.607-117.465-117.008 C9.928,63.442,62.534,10.833,127.393,10.833z"
          }),
          q.createElement("line", {
            strokeWidth: "22",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            x1: "83.5",
            y1: "128.886",
            x2: "176.184",
            y2: "128.886"
          }),
          q.createElement("line", {
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
      function P() {
        return q.createElement(
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
          q.createElement(
            "g",
            null,
            q.createElement("path", {
              d:
                "M239.874,94.963l-31.115,21.325c-18.18,12.586-43.351,5.594-52.44-14.333l-23.772-50.692c-2.099-4.194-8.041-4.194-9.789,0 l-23.074,50.343c-9.439,20.627-35.31,27.27-53.49,13.983L16.128,93.565c-4.195-3.147-10.139,1.049-8.391,6.293l31.464,106.628 c0.35,1.049,1.398,1.397,2.098,1.397h173.752c1.049,0,1.749-0.698,2.098-1.397l31.115-104.53 C250.012,96.36,244.068,91.816,239.874,94.963z"
            })
          )
        );
      }
      function C() {
        return q.createElement(
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
          q.createElement("path", {
            className: "playTriangle",
            d:
              "M65.321,33.521c-11.274-6.615-20.342-1.471-20.342,11.52V210.96c0,12.989,9.068,18.135,20.342,11.521l137.244-82.348 c11.274-6.618,11.274-17.646,0-24.509L65.321,33.521z"
          })
        );
      }
      function I() {
        return q.createElement(
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
          q.createElement(
            "g",
            { className: "time" },
            q.createElement("circle", {
              fill: "none",
              strokeWidth: "10",
              strokeMiterlimit: "10",
              cx: "91.735",
              cy: "128.014",
              r: "64"
            }),
            q.createElement("polyline", {
              fill: "none",
              strokeWidth: "10",
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              points: "91.735,90.833 91.735,128.014 116.58,152.086 \t"
            })
          ),
          q.createElement(
            "g",
            { className: "arrow" },
            q.createElement("polyline", {
              fill: "none",
              strokeWidth: "10",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              points: "199.735,63.66 199.735,192.366 171.207,163.675"
            }),
            q.createElement("polyline", {
              fill: "none",
              strokeWidth: "10",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              points: "199.735,63.66 199.735,192.366 228.266,163.675"
            })
          ),
          q.createElement(
            "g",
            { className: "alphabet" },
            q.createElement("polyline", {
              fill: "none",
              strokeWidth: "10",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              points: "70.268,109.934 94.483,63.635 119.77,109.934"
            }),
            q.createElement("line", {
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
            q.createElement("polyline", {
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
      function L() {
        return q.createElement(
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
          q.createElement("polyline", {
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
        return q.createElement(
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
          q.createElement(
            "defs",
            null,
            q.createElement(
              "linearGradient",
              { id: "linear", x1: "0%", y1: "0%", x2: "100%", y2: "100%" },
              q.createElement("stop", {
                id: "stop0",
                offset: "0%",
                stopColor: "#00ccff"
              }),
              q.createElement("stop", {
                id: "stop1",
                offset: "100%",
                stopColor: "#2d73ff"
              })
            ),
            q.createElement(
              "filter",
              { id: "f1", x: "0", y: "0", width: "200%", height: "200%" },
              q.createElement("feOffset", {
                result: "offOut",
                in: "SourceAlpha",
                dx: "20",
                dy: "20"
              }),
              q.createElement("feGaussianBlur", {
                result: "blurOut",
                in: "offOut",
                stdDeviation: "10"
              }),
              q.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "blurOut",
                mode: "normal"
              })
            )
          ),
          q.createElement("path", {
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
          q.createElement("path", {
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
      function N() {
        return q.createElement(
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
          q.createElement(
            "g",
            { className: "triangle" },
            q.createElement("path", {
              stroke: "#020202",
              strokeWidth: "16",
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              d: "M127.9,76.632"
            }),
            q.createElement("path", {
              fill: "none",
              stroke: "#020202",
              strokeWidth: "11",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "5",
              d:
                "M128.001,226.606c42.507,0,81.538,0,87.756,0c31.222,0,36.95-14.974,24.045-34.771c-6.921-10.617-78.297-122.962-89.163-140.254\tC141.859,37.613,138.542,29.393,128,29.393l0,0c-10.543,0-13.86,8.222-22.639,22.189C94.495,68.874,23.119,181.219,16.198,191.836 c-12.905,19.797-7.175,34.771,24.045,34.771C46.463,226.606,85.494,226.606,128.001,226.606"
            }),
            q.createElement("path", { fill: "#020202", d: "M127.9,208.12" })
          ),
          q.createElement(
            "g",
            { className: "exclamation" },
            q.createElement("line", {
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
            q.createElement("path", {
              fill: "#020202",
              d:
                "M127.9,208.12c-6.377,0-11.548-5.17-11.548-11.548c0-6.377,5.17-11.547,11.548-11.547 c6.377,0,11.547,5.17,11.547,11.547C139.447,202.95,134.277,208.12,127.9,208.12"
            })
          )
        );
      }
      function B() {
        return q.createElement(
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
          q.createElement("path", {
            className: "topLock",
            d:
              "M203.553,197.794c0,21.929-17.778,39.706-39.706,39.706H92.154c-21.929,0-39.706-17.777-39.706-39.706v-71.693 c0-21.928,17.778-39.706,39.706-39.706h71.692c21.928,0,39.706,17.778,39.706,39.706V197.794z M128.001,129.664 c-8.941,0-16.19,7.248-16.19,16.189c0,5.589,2.833,10.518,7.137,13.427c2.066,1.395,0.318,23.508,0.318,32.842 c0,2.292-0.078,3.65,8.734,3.65c8.676,0,8.75-1.221,8.75-3.654c0-9.348-1.708-31.469,0.368-32.886 c4.269-2.916,7.071-7.821,7.071-13.38C144.191,136.912,136.941,129.664,128.001,129.664z"
          }),
          q.createElement("path", {
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
      function D(e) {
        return q.createElement(
          "svg",
          {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className:
              "SVGIcon_Button SVGIcon_Throbber " + (e.className && e.className),
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          q.createElement(
            "g",
            { id: "partCircle" },
            q.createElement("path", {
              className: "roundOuter",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895"
            }),
            q.createElement("path", {
              className: "roundOuter",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M201.432,101.166"
            }),
            q.createElement("path", {
              className: "roundOuter",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754"
            })
          ),
          q.createElement(
            "g",
            { id: "mainOutline" },
            q.createElement("path", {
              className: "roundFill",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            q.createElement("path", {
              className: "roundOuterOutline",
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            q.createElement("path", {
              className: "roundThrobber01",
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            q.createElement("path", {
              className: "roundThrobber02",
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            q.createElement("path", {
              className: "roundThrobber03",
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            q.createElement("path", {
              className: "roundThrobber04",
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            q.createElement("path", {
              className: "roundThrobber05",
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            q.createElement("path", {
              className: "roundThrobber06",
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            q.createElement("path", {
              className: "roundThrobber07",
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            q.createElement("path", {
              className: "roundThrobber08",
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            q.createElement("path", {
              className: "roundThrobber09",
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            q.createElement("path", {
              className: "roundThrobber10",
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            q.createElement("path", {
              className: "roundThrobber11",
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            q.createElement("path", {
              className: "roundThrobber12",
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            q.createElement("path", {
              className: "roundThrobber13",
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            q.createElement("path", {
              className: "roundThrobber14",
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            q.createElement("path", {
              className: "roundThrobber15",
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            })
          ),
          q.createElement(
            "g",
            { id: "bottomCircle" },
            q.createElement("path", {
              fill: "#ffffff",
              d:
                "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579"
            })
          ),
          q.createElement(
            "g",
            { id: "topCircle" },
            q.createElement("circle", {
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              cx: "161.731",
              cy: "101.274",
              r: "23.019"
            })
          )
        );
      }
      function V() {
        return q.createElement(
          "svg",
          {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Video",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          q.createElement("path", {
            className: "videoPlayButton",
            d:
              "M165.399,124.063L109.118,92.06c-1.399-0.797-3.118-0.787-4.508,0.026c-1.39,0.805-2.25,2.295-2.25,3.905v64.008 c0,1.609,0.86,3.1,2.25,3.913c0.705,0.412,1.491,0.613,2.277,0.613c0.768,0,1.546-0.191,2.241-0.596l56.283-32.003 c1.416-0.806,2.285-2.306,2.285-3.934C167.694,126.368,166.816,124.869,165.399,124.063z"
          }),
          q.createElement("path", {
            d:
              "M238.069,40.646H214.25h-28.82h-28.82h-28.458h-0.36H99.333H70.536H41.727h-23.82c-3.184,0-5.773,2.59-5.773,5.772v23.856 v120.441v18.867c0,3.184,2.589,5.771,5.773,5.771h2.415h21.394h28.82h28.82h28.459h0.361h28.457h28.82h28.82h23.82 c3.184,0,5.773-2.589,5.773-5.771v-18.867V70.274V46.418C243.844,43.223,241.254,40.646,238.069,40.646z M191.215,47.181h17.273  V64.5h-17.273V47.181L191.215,47.181z M162.396,47.181h17.272V64.5h-17.272V47.181z M133.938,47.181h16.912V64.5h-16.912V47.181z\tM105.128,47.181h16.912V64.5h-16.912V47.181z M76.309,47.181h17.273V64.5H76.309V47.181z M47.488,47.181h17.273V64.5H47.488V47.181 z M18.681,47.181h17.273V64.5H18.681V47.181z M35.954,208.811H18.681v-17.319h17.273V208.811z M64.763,208.811H47.489v-17.319 h17.273V208.811L64.763,208.811z M93.583,208.811H76.31v-17.319h17.273V208.811z M122.041,208.811h-16.912v-17.319h16.912V208.811z M150.849,208.811h-16.912v-17.319h16.912V208.811z M179.668,208.811h-17.272v-17.319h17.272V208.811z M208.488,208.811h-17.273 v-17.319h17.273V208.811z M237.297,208.811h-17.273v-17.319h17.273V208.811L237.297,208.811z M237.297,184.943H214.25h-28.819 h-28.82h-28.458h-0.361H99.333H70.537H41.728H18.682V71.047h23.046h28.82h28.82h28.458h0.36h28.458h28.82h28.82h23.045v113.896 H237.297z M237.297,64.5h-17.273V47.181h17.273V64.5L237.297,64.5z"
          })
        );
      }
      function W() {
        return q.createElement(
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
          q.createElement("path", {
            d:
              "M107.785,33.965c-34.875,8.972-60.644,40.618-60.644,78.308v53.903c0,4.965-4.035,8.99-8.975,8.99 c-9.929,0-17.978,8.066-17.978,17.971c0,9.924,8.059,17.969,18.013,17.969h179.598c9.948,0,18.014-8.066,18.014-17.969 c0-9.926-8.087-17.971-17.979-17.971c-4.956,0-8.975-3.993-8.975-8.99v-53.903c0-37.676-25.763-69.333-60.644-78.308v-9.281 c0-11.193-9.052-20.219-20.215-20.219c-11.143,0-20.215,9.052-20.215,20.219V33.965L107.785,33.965z M96.554,220.09h62.891 c0,17.366-14.079,31.445-31.445,31.445C110.633,251.535,96.554,237.458,96.554,220.09z"
          })
        );
      }
      function T(e) {
        return q.createElement(
          "svg",
          {
            version: "1.1",
            transform: "rotate(" + e.angle + ")",
            id: "arrowBase",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Arrow",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          q.createElement("polyline", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "128,247.688 128,8.313 181.061,61.674 "
          }),
          q.createElement("polyline", {
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
      function H(e) {
        var t = "";
        return (
          e.angle && (t = "rotate(" + e.angle + ")"),
          q.createElement(
            "svg",
            {
              transform: t,
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
            q.createElement("polyline", {
              className: "Arrow1",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "23",
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              points: "135.65,21.667 30.081,127.235 137.18,234.333 "
            }),
            q.createElement("polyline", {
              className: "Arrow2",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "23",
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              points: "224.389,21.667 118.821,127.235 225.92,234.333 "
            })
          )
        );
      }
      function G() {
        return q.createElement(
          "svg",
          {
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
          q.createElement("polyline", {
            className: "Arrow1",
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "23",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            points: "135.65,21.667 30.081,127.235 137.18,234.333 "
          }),
          q.createElement("polyline", {
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
      function z() {
        return q.createElement(
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
          q.createElement("rect", {
            x: "24",
            y: "42.167",
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "18",
            strokeMiterlimit: "10",
            width: "208",
            height: "171.667"
          }),
          q.createElement("line", {
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
      function R() {
        return q.createElement(
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
          q.createElement("line", {
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
      function j() {
        return q.createElement(
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
          q.createElement("polyline", {
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "12",
            strokeMiterlimit: "10",
            points: "83,90.861 83,42.167 232,42.167 232,165.14 173,165.14 "
          }),
          q.createElement("rect", {
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
      function F() {
        return q.createElement(
          "svg",
          {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_SingleWindowToggle",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          q.createElement(
            "g",
            { className: "mainBox" },
            q.createElement("rect", {
              x: "90",
              y: "42.167",
              fill: "none",
              stroke: "rgb(120, 138, 146)",
              strokeWidth: "18",
              strokeMiterlimit: "10",
              width: "142",
              height: "171.667"
            }),
            q.createElement("line", {
              fill: "none",
              stroke: "rgb(120, 138, 146)",
              strokeWidth: "42",
              strokeMiterlimit: "10",
              x1: "90",
              y1: "54.01",
              x2: "232",
              y2: "54.01"
            })
          ),
          q.createElement(
            "g",
            { className: "leftBox" },
            q.createElement("rect", {
              x: "28",
              y: "42.167",
              fill: "none",
              stroke: "rgb(120, 138, 146)",
              strokeWidth: "18",
              strokeMiterlimit: "10",
              width: "62",
              height: "171.667"
            }),
            q.createElement("line", {
              fill: "none",
              stroke: "rgb(120, 138, 146)",
              strokeWidth: "42",
              strokeMiterlimit: "10",
              x1: "28",
              y1: "54.01",
              x2: "90",
              y2: "54.01"
            })
          )
        );
      }
      function A() {
        return q.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Reload",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          q.createElement("path", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "30",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d:
              "M229.809,147.639 c-9.178,47.863-51.27,84.027-101.809,84.027c-57.253,0-103.667-46.412-103.667-103.666S70.747,24.334,128,24.334 c34.107,0,64.368,16.472,83.261,41.895"
          }),
          q.createElement("polygon", {
            points: "147.639,108.361 245.755,10.166 245.834,108.361 "
          })
        );
      }
      function U() {
        return q.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Trade",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          q.createElement("path", {
            d:
              "M132.025,162.943h40.246c0,0,3.219,56.879-31.303,79.599c-12.298,8.094,71.103-6.708,75.574-79.599h35.775l-60.146-74.681 L132.025,162.943z"
          }),
          q.createElement("path", {
            d:
              "M123.975,93.056H83.729c0,0-3.219-56.879,31.303-79.599c12.298-8.094-71.103,6.708-75.574,79.599H3.682l60.146,74.681 L123.975,93.056z"
          })
        );
      }
      function K() {
        return q.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Trash",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          q.createElement(
            "g",
            { className: "base" },
            q.createElement("path", {
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "10",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d:
                "M216.773,43.909 l-7.399,177.589c-0.37,8.893-7.919,16.1-16.812,16.1H63.437c-8.914,0-16.442-7.24-16.812-16.1L39.226,43.909"
            })
          ),
          q.createElement(
            "g",
            { className: "lines" },
            q.createElement("path", {
              className: "line1",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "10",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M128,68.12v137.197"
            }),
            q.createElement("path", {
              className: "line2",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "10",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M83.613,68.12 l4.035,137.197"
            }),
            q.createElement("path", {
              className: "line3",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "10",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M172.387,68.12 l-4.035,137.197"
            })
          ),
          q.createElement(
            "g",
            { className: "lid" },
            q.createElement("path", {
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "10",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M27.121,38.577H228.88"
            }),
            q.createElement("path", {
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "10",
              d:
                "M87.648,38.577l4.319-10.796c2.072-5.181,8.292-9.379,13.84-9.379h44.386 c5.572,0,11.761,4.18,13.841,9.379l4.319,10.796"
            })
          )
        );
      }
      function X() {
        return q.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Scroll",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          q.createElement(
            "g",
            { transform: "translate(0,-952.36215)" },
            q.createElement("path", {
              d:
                "M49.624,963.362c-20.72,0-37.667,14.78-37.667,32.806c0,3.589,3.353,6.499,7.486,6.499l52.407-0.305v162.5 c0,18.134,17.404,32.5,38.018,32.5h96.508c20.612,0,37.667-14.475,37.667-32.5c0-3.59-3.354-6.499-7.486-6.5H217.84V996.168 c0-18.024-16.947-32.806-37.667-32.806H49.624z M49.624,976.362h2.223c0.569,0.162,1.158,0.265,1.754,0.306 c8.159,1.274,14.426,6.085,16.962,12.694l-42.112,0.306C31.513,981.897,39.656,976.362,49.624,976.362z M79.337,976.362h100.836 c12.587,0,22.694,8.77,22.694,19.806v162.194H139.23c-4.135,0.001-7.486,2.91-7.488,6.5c0,4.609-1.43,7.796-4.21,10.765 c-2.78,2.972-7.203,5.757-13.686,7.923c-0.624,0.201-1.214,0.476-1.755,0.813h-2.223c-12.695,0-23.044-8.573-23.044-19.5v-169 C86.824,988.529,84.023,981.812,79.337,976.362z M108.582,1005.611c-4.135,0.169-7.33,3.216-7.135,6.807 c0.193,3.59,3.702,6.363,7.837,6.194h71.123c4.135,0.051,7.535-2.817,7.592-6.407c0.059-3.591-3.246-6.542-7.381-6.594 c-0.069,0-0.141,0-0.211,0h-71.123C109.05,1005.603,108.816,1005.603,108.582,1005.611z M108.582,1044.612 c-4.135,0.169-7.33,3.215-7.135,6.807c0.193,3.588,3.702,6.362,7.837,6.192h71.123c4.135,0.051,7.535-2.816,7.592-6.407 c0.059-3.59-3.246-6.542-7.381-6.592c-0.069,0-0.141,0-0.211,0h-71.123C109.05,1044.603,108.816,1044.603,108.582,1044.612z M108.582,1083.612c-4.135,0.169-7.33,3.216-7.135,6.806c0.193,3.589,3.702,6.363,7.837,6.193h71.123 c4.135,0.052,7.535-2.816,7.592-6.407c0.059-3.59-3.246-6.541-7.381-6.592c-0.069-0.001-0.141-0.001-0.211,0h-71.123 C109.05,1083.602,108.816,1083.602,108.582,1083.612z M108.582,1122.611c-4.135,0.17-7.33,3.216-7.135,6.806 c0.193,3.591,3.702,6.364,7.837,6.195h71.123c4.135,0.05,7.535-2.818,7.592-6.408c0.059-3.591-3.246-6.541-7.381-6.593 c-0.069,0-0.141,0-0.211,0h-71.123C109.05,1122.602,108.816,1122.602,108.582,1122.611z M145.547,1171.363h82.002 c-3.09,7.604-11.189,12.999-21.173,12.999h-67.849c0.196-0.197,0.512-0.306,0.703-0.509 C142.576,1180.277,144.436,1175.973,145.547,1171.363z"
            })
          )
        );
      }
      function Y(e) {
        return q.createElement(
          "svg",
          {
            transform: "rotate(" + e.angle + ")",
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
          q.createElement("polygon", {
            points: "13.913,141 128,59 242.087,141 ",
            fill: "#ffffff"
          })
        );
      }
      (t.G = r),
        (t.e = i),
        (t.g = o),
        (t.k = s),
        (t.t = c),
        (t.v = a),
        (t.l = l),
        (t.J = m),
        (t.D = u),
        (t.B = p),
        (t.S = h),
        (t.T = d),
        (t.Q = f),
        (t.m = v),
        (t.L = y),
        (t.q = g),
        (t.p = _),
        (t.A = w),
        (t.a = b),
        (t.o = E),
        (t.r = x),
        (t.y = S),
        (t.R = k),
        (t.x = M),
        (t.h = P),
        (t.z = C),
        (t.I = I),
        (t.f = L),
        (t.i = O),
        (t.d = N),
        (t.s = B),
        (t.M = D),
        (t.P = V),
        (t.c = W),
        (t.b = T),
        (t.j = H),
        (t.K = G),
        (t.u = z),
        (t.w = R),
        (t.E = j),
        (t.H = F),
        (t.C = A),
        (t.N = U),
        (t.O = K),
        (t.F = X),
        (t.n = Y);
      var q = n("Jmof");
      n.n(q);
    },
    EqgU: function(e, t, n) {
      "use strict";
      function r(e) {
        if (!(e.clientX || e.clientY || e.screenX || e.screenY)) return !0;
        if (e.relatedTarget) return !i(e.currentTarget, e.relatedTarget);
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
      function o(e) {
        if (!window.getSelection) return !1;
        for (
          var t = window.getSelection(), n = 0, r = 0;
          r < t.rangeCount;
          r++
        ) {
          var o = t.getRangeAt(r);
          o.startOffset != o.endOffset &&
            i(e, o.commonAncestorContainer) &&
            n++;
        }
        return t.rangeCount > 0 && t.rangeCount == n;
      }
      function s(e, t) {
        var n = e.offsetTop;
        e.offsetParent != t && (n -= t.offsetTop),
          n < t.scrollTop
            ? e.scrollIntoView(!0)
            : n + e.offsetHeight > t.scrollTop + t.offsetHeight &&
              e.scrollIntoView(!1);
      }
      function c(e, t, n) {
        var r = 0,
          i = 0;
        return (
          t < e.left ? (r = e.left - t) : t > e.right && (r = t - e.right),
          n < e.top ? (i = e.top - n) : n > e.bottom && (i = n - e.bottom),
          Math.sqrt(r * r + i * i)
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
      function l(e) {
        var t = void 0;
        return e && (t = e.ownerDocument.defaultView), t;
      }
      function m(e) {
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
        e.startsWith("steam://openurl/") &&
          (e = e.slice("steam://openurl/".length)),
          m(e);
      }
      (t.b = r),
        (t.c = i),
        (t.a = o),
        (t.i = s),
        (t.g = c),
        (t.e = a),
        (t.h = l),
        (t.f = u),
        n.d(t, "d", function() {
          return h;
        });
      var p = n("vwkX"),
        h = (function() {
          function e(e) {
            var t = this;
            (this.m_bNeedSort = !1),
              (this.m_bOffsetsInvalidated = !1),
              (this.m_rgChildren = []),
              (this.RecomputeVisibility = function() {
                var e = t.m_elParent.scrollTop - t.m_nBufferPx,
                  n =
                    t.m_elParent.scrollTop +
                    t.m_elParent.clientHeight +
                    t.m_nBufferPx;
                t.EnsureSort();
                for (var r = 0, i = t.m_rgChildren; r < i.length; r++) {
                  var o = i[r];
                  if (!(o.yOffset < e)) {
                    if (o.yOffset > n) break;
                    o.fnCallback(!0);
                  }
                }
                (t.m_nLastYMin = e), (t.m_nLastYMax = n);
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
            (e.prototype.UnregisterChild = function(e) {
              p.c(this.m_rgChildren, function(t) {
                return t.element == e;
              });
            }),
            e
          );
        })();
    },
    HxNj: function(e, t, n) {
      "use strict";
      function r(e) {
        switch (e) {
          case 1:
            return Object(_.b)("#Privacy_Private");
          case 2:
            return Object(_.b)("#Privacy_FriendsOnly");
          case 3:
            return Object(_.b)("#Privacy_Public");
          default:
            return "";
        }
      }
      function i(e) {
        switch (e) {
          case 0:
            return Object(_.b)("#Privacy_FriendsOnly");
          case 1:
            return Object(_.b)("#Privacy_Public");
          case 2:
            return Object(_.b)("#Privacy_Private");
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
      function c(e) {
        var t;
        return (
          (t = e.strReadOnlySetting
            ? v.createElement(u, { strLabel: e.strReadOnlySetting })
            : v.createElement(N, {
                PrivacyStore: e.PrivacyStore,
                PrivacyKey: e.PrivacyKey,
                LimitPrivacyKey: e.LimitPrivacyKey
              })),
          v.createElement(
            v.Fragment,
            null,
            v.createElement(a, null, e.strLabel, ":", t),
            v.createElement(l, null, e.children)
          )
        );
      }
      function a(e) {
        return v.createElement(
          "div",
          { className: "ProfilePrivacyHeader" },
          e.children
        );
      }
      function l(e) {
        return v.createElement(
          "div",
          { className: "ProfilePrivacyDesc" },
          e.children
        );
      }
      function m(e) {
        switch (e.eSaveState) {
          case 1:
            return v.createElement(
              "div",
              { className: "PrivacySaveNotice Saving" },
              Object(_.b)("#Shared_Saving")
            );
          case 3:
            return v.createElement(
              "div",
              { className: "PrivacySaveNotice Error" },
              Object(_.b)("#Error_Error")
            );
          case 2:
            return v.createElement(
              "div",
              { className: "PrivacySaveNotice Saved" },
              Object(_.b)("#Shared_Saved")
            );
          case 0:
          default:
            return null;
        }
      }
      function u(e) {
        return v.createElement(
          "div",
          { className: "ProfilePrivacyDropDown readonly" },
          e.strLabel
        );
      }
      function p() {
        var e = Object(g.b)("config", "profile_config");
        e && Object.assign(k, e);
      }
      function h() {
        for (
          var e = document.querySelectorAll(".ProfileReactRoot"), t = 0;
          t < e.length;
          t++
        ) {
          var n = e[t],
            r = n.getAttribute("data-component");
          switch (r) {
            case "ProfilePrivacySettings":
              d(n);
              break;
            default:
              Object(w.a)(!1, 'unknown component: "' + r + '"');
          }
        }
      }
      function d(e) {
        var t;
        try {
          t = JSON.parse(e.getAttribute("data-privacysettings"));
        } catch (e) {}
        var n = new M(t.PrivacySettings, t.eCommentPermission);
        y.render(v.createElement(O, { PrivacyStore: n }), e);
      }
      function f(e, t, n) {
        Object(w.a)("manifest" === t, 'Expected manifest not "' + t + '"'),
          _.a.InitDirect(n);
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var v = n("Jmof"),
        y = n("wLXD"),
        g = n("m5yx"),
        _ = n("sVhq"),
        w = n("4Dav"),
        b = (n("kllU"), n("TToO")),
        E = n("y986"),
        x = n("mtWM"),
        S = n.n(x),
        k = { ProfileURL: "" },
        M = (function() {
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
              var r = this;
              if (this.m_PrivacySettings[e] != t) {
                this.m_PrivacySettings[e] = t;
                var i = this.SavePrivacy(),
                  o = n || e;
                i
                  ? (this.m_eSaveStateByKey.set(o, 1),
                    i.then(function(e) {
                      e
                        ? r.m_eSaveStateByKey.set(o, 2)
                        : r.m_eSaveStateByKey.set(o, 3);
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
                t.append("sessionid", g.a.SESSIONID),
                t.append("Privacy", JSON.stringify(this.m_PrivacySettings)),
                t.append(
                  "eCommentPermission",
                  JSON.stringify(this.m_eCommentPermission)
                ),
                S.a
                  .post(k.ProfileURL + "ajaxsetprivacy/", t)
                  .then(function(t) {
                    var n = t.data;
                    if (1 != n.success)
                      return (
                        ShowAlertDialog(
                          Object(_.b)("#Error_Error"),
                          Object(_.b)("#Error_CommentEditFailed")
                        ),
                        !1
                      );
                    var r = n.Privacy;
                    return (
                      r &&
                        r.PrivacySettings &&
                        r.eCommentPermission &&
                        Object(E.runInAction)(function() {
                          (e.m_PrivacySettings = r.PrivacySettings),
                            (e.m_eCommentPermission = r.eCommentPermission);
                        }),
                      !0
                    );
                  })
                  .catch(function(e) {
                    return (
                      ShowAlertDialog(
                        Object(_.b)("#Error_Error"),
                        Object(_.b)("#Error_CommentEditFailed")
                      ),
                      !1
                    );
                  })
              );
            }),
            b.c([E.observable], e.prototype, "m_PrivacySettings", void 0),
            b.c([E.observable], e.prototype, "m_eCommentPermission", void 0),
            b.c([E.observable], e.prototype, "m_eSaveStateByKey", void 0),
            b.c([E.observable], e.prototype, "m_eCommentSaveState", void 0),
            e
          );
        })(),
        P = n("KLxG"),
        C = n("JyW5"),
        I = n("aMRU"),
        L = n("Mn8c"),
        O = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            b.d(t, e),
            (t.prototype.render = function() {
              var e = this.props.PrivacyStore;
              return v.createElement(
                "div",
                { className: "ProfilePrivacyRoot" },
                v.createElement(
                  c,
                  {
                    PrivacyStore: e,
                    strLabel: Object(_.b)("#ProfilePrivacy_BasicDetails"),
                    strReadOnlySetting: r(3)
                  },
                  Object(_.b)("#ProfilePrivacy_BasicDetails_Desc")
                ),
                v.createElement("div", { className: "ProfilePrivacyHR" }),
                v.createElement(
                  c,
                  {
                    PrivacyStore: e,
                    strLabel: Object(_.b)("#ProfilePrivacy_Profile"),
                    PrivacyKey: "PrivacyProfile"
                  },
                  v.createElement(
                    "p",
                    null,
                    Object(_.b)("#ProfilePrivacy_Profile_Desc")
                  ),
                  v.createElement(
                    "p",
                    null,
                    Object(_.b)("#ProfilePrivacy_Profile_Desc2")
                  )
                ),
                v.createElement(
                  "div",
                  { className: "ProfilePrivacyRoot_Indent" },
                  v.createElement(
                    c,
                    {
                      PrivacyStore: e,
                      strLabel: Object(_.b)("#ProfilePrivacy_GameLibrary"),
                      PrivacyKey: "PrivacyOwnedGames",
                      LimitPrivacyKey: "PrivacyProfile"
                    },
                    Object(_.b)("#ProfilePrivacy_GameLibrary_Desc"),
                    1 != e.GetPrivacySetting("PrivacyOwnedGames") &&
                      v.createElement(
                        B,
                        {
                          PrivacyStore: e,
                          PrivacyKey: "PrivacyPlaytime",
                          LimitPrivacyKey: "PrivacyOwnedGames"
                        },
                        Object(_.b)("#ProfilePrivacy_Playtime")
                      )
                  ),
                  v.createElement("div", { className: "ProfilePrivacyHR" }),
                  v.createElement(
                    c,
                    {
                      PrivacyStore: e,
                      strLabel: Object(_.b)("#ProfilePrivacy_Inventory"),
                      PrivacyKey: "PrivacyInventory",
                      LimitPrivacyKey: "PrivacyProfile"
                    },
                    Object(_.d)(
                      "#ProfilePrivacy_Inventory_Desc",
                      v.createElement(
                        "a",
                        { href: k.ProfileURL + "inventory/" },
                        Object(_.b)("#ProfilePrivacy_Inventory_Inventory")
                      ),
                      v.createElement(
                        "a",
                        { href: k.ProfileURL + "inventory/#753_6" },
                        Object(_.b)("#ProfilePrivacy_Inventory_TradingCards")
                      )
                    ),
                    1 != e.GetPrivacySetting("PrivacyInventory") &&
                      v.createElement(
                        B,
                        {
                          PrivacyStore: e,
                          PrivacyKey: "PrivacyInventoryGifts",
                          LimitPrivacyKey: "PrivacyInventory"
                        },
                        Object(_.b)("#ProfilePrivacy_Gifts")
                      )
                  ),
                  v.createElement("div", { className: "ProfilePrivacyHR" }),
                  v.createElement(
                    a,
                    null,
                    Object(_.b)("#ProfilePrivacy_Comments"),
                    ":",
                    v.createElement(D, { PrivacyStore: e })
                  ),
                  v.createElement("div", { className: "ProfilePrivacyHR" }),
                  v.createElement(
                    c,
                    {
                      PrivacyStore: e,
                      strLabel: Object(_.b)("#ProfilePrivacy_UGC"),
                      strReadOnlySetting: Object(_.b)("#Privacy_PerItem")
                    },
                    Object(_.d)(
                      "#ProfilePrivacy_UGC_Desc",
                      v.createElement(
                        "a",
                        { href: k.ProfileURL + "screenshots/" },
                        Object(_.b)("#ProfilePrivacy_UGC_Desc_Screenshots")
                      ),
                      v.createElement(
                        "a",
                        { href: k.ProfileURL + "myworkshopfiles/" },
                        Object(_.b)("#ProfilePrivacy_UGC_Desc_WorkshopItems")
                      )
                    )
                  )
                )
              );
            }),
            (t = b.c([L.observer], t))
          );
        })(v.Component),
        N = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            b.d(t, e),
            (t.prototype.OnClick = function(e) {
              var t = this.props.PrivacyStore.GetPrivacySetting(
                this.props.PrivacyKey
              );
              Object(C.a)(
                v.createElement(V, {
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
                t = r(e);
              return v.createElement(
                v.Fragment,
                null,
                v.createElement(
                  "div",
                  {
                    className: "ProfilePrivacyDropDown",
                    onClick: this.OnClick
                  },
                  t,
                  v.createElement("img", {
                    className: "ProfilePrivacyDropDown_Arrow",
                    src:
                      g.a.COMMUNITY_CDN_URL +
                      "public/images/skin_1/actionArrowDnWhite.gif"
                  })
                ),
                v.createElement(m, {
                  eSaveState: this.props.PrivacyStore.GetSaveState(
                    this.props.PrivacyKey
                  )
                })
              );
            }),
            b.c([P.a], t.prototype, "OnClick", null),
            b.c([P.a], t.prototype, "OnSettingChanged", null),
            (t = b.c([L.observer], t))
          );
        })(v.Component),
        B = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            b.d(t, e),
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
              return v.createElement(
                "div",
                { className: "ProfilePrivacyCheckbox" },
                v.createElement(
                  "label",
                  null,
                  v.createElement("input", {
                    className: "ProfilePrivacyCheckbox_Input",
                    type: "checkbox",
                    checked: t,
                    onChange: this.OnCheckboxChecked
                  }),
                  v.createElement(
                    "div",
                    { className: "ProfilePrivacyCheckbox_Desc" },
                    this.props.children
                  )
                )
              );
            }),
            b.c([P.a], t.prototype, "OnCheckboxChecked", null),
            (t = b.c([L.observer], t))
          );
        })(N),
        D = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (n.state = { eSaveState: 0 }), n;
          }
          return (
            b.d(t, e),
            (t.prototype.OnClick = function(e) {
              var t = this.props.PrivacyStore.CommentPermission;
              Object(C.a)(
                v.createElement(W, {
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
                n = i(s(e, t));
              return v.createElement(
                v.Fragment,
                null,
                v.createElement(
                  "div",
                  {
                    className: "ProfilePrivacyDropDown",
                    onClick: this.OnClick
                  },
                  n,
                  v.createElement("img", {
                    className: "ProfilePrivacyDropDown_Arrow",
                    src:
                      g.a.COMMUNITY_CDN_URL +
                      "public/images/skin_1/actionArrowDnWhite.gif"
                  })
                ),
                v.createElement(m, {
                  eSaveState: this.props.PrivacyStore.GetCommentSaveState()
                })
              );
            }),
            b.c([P.a], t.prototype, "OnClick", null),
            b.c([P.a], t.prototype, "OnSettingChanged", null),
            (t = b.c([L.observer], t))
          );
        })(v.Component),
        V = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            b.d(t, e),
            (t.prototype.render = function() {
              var e = this,
                t = this.props.eMinPrivacy;
              return v.createElement(
                I.c,
                null,
                (!t || t >= 3) &&
                  v.createElement(
                    I.d,
                    {
                      onSelected: function() {
                        return e.props.OnChange(3);
                      }
                    },
                    Object(_.b)("#Privacy_Public")
                  ),
                (!t || t >= 2) &&
                  v.createElement(
                    I.d,
                    {
                      onSelected: function() {
                        return e.props.OnChange(2);
                      }
                    },
                    Object(_.b)("#Privacy_FriendsOnly")
                  ),
                v.createElement(
                  I.d,
                  {
                    onSelected: function() {
                      return e.props.OnChange(1);
                    }
                  },
                  Object(_.b)("#Privacy_Private")
                )
              );
            }),
            t
          );
        })(v.Component),
        W = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            b.d(t, e),
            (t.prototype.render = function() {
              var e = this,
                t = this.props.eMinPrivacy;
              return v.createElement(
                I.c,
                null,
                (!t || t >= 3) &&
                  v.createElement(
                    I.d,
                    {
                      onSelected: function() {
                        return e.props.OnChange(1);
                      },
                      title: Object(_.b)(
                        "#Profile_CommentPermission_Public_Desc"
                      )
                    },
                    Object(_.b)("#Privacy_Public")
                  ),
                (!t || t >= 2) &&
                  v.createElement(
                    I.d,
                    {
                      onSelected: function() {
                        return e.props.OnChange(0);
                      },
                      title: Object(_.b)(
                        "#Profile_CommentPermission_FriendsOnly_Desc"
                      )
                    },
                    Object(_.b)("#Privacy_FriendsOnly")
                  ),
                v.createElement(
                  I.d,
                  {
                    onSelected: function() {
                      return e.props.OnChange(2);
                    },
                    title: Object(_.b)(
                      "#Profile_CommentPermission_Private_Desc"
                    )
                  },
                  Object(_.b)("#Privacy_Private")
                )
              );
            }),
            t
          );
        })(v.Component);
      n("3gXU"),
        (window.AssertMsg = w.a),
        document.addEventListener("DOMContentLoaded", function() {
          Object(g.c)(), p(), h();
        }),
        (window.LocalizationManifestReady = f);
    },
    JyW5: function(e, t, n) {
      "use strict";
      function r(e, t, n) {
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
        var c = new p(e, r, i, o, n);
        return c.Show(), c;
      }
      n.d(t, "b", function() {
        return m;
      }),
        (t.a = r);
      var i = n("TToO"),
        o = n("Jmof"),
        s = (n.n(o), n("EqgU")),
        c = n("aMRU"),
        a = n("Y6cV"),
        l = n("y986"),
        m = (function() {
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
        u = (function(e) {
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
            i.d(t, e),
            (t.prototype.Init = function(e, t) {
              this.m_ownerWindow.innerWidth < 400 &&
              this.m_ownerWindow.SteamClient &&
              this.m_ownerWindow.SteamClient.Window
                ? (this.m_popupContextMenu = new c.a(
                    e,
                    t,
                    m.GetBrowserInfoForPopup(this.m_ownerWindow)
                  ))
                : ((this.m_embeddedElementInstance = Object(a.b)(
                    this.m_ownerWindow.document
                  )),
                  (this.m_rctElement = o.createElement(c.g, e, t)));
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
                : s.c(this.m_popupContextMenu.root_element, e);
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
            i.c([l.observable], t.prototype, "m_bVisible", void 0),
            t
          );
        })(m),
        p = (function(e) {
          function t(n, r, i, o, s) {
            var c = e.call(this, r.ownerDocument.defaultView) || this;
            t.sm_iActiveContextMenuInstance &&
              t.sm_iActiveContextMenuInstance.Hide(),
              (t.sm_iActiveContextMenuInstance = c),
              (c.m_options = s || {});
            var a = {
              element: r,
              clientX: i,
              clientY: o,
              instance: c,
              options: c.m_options,
              fnOnMenuItemSelected: function() {
                c.Hide();
              }
            };
            return c.Init(a, n), c;
          }
          return (
            i.d(t, e),
            (t.prototype.Show = function() {
              t.sm_mapEmbeddedMouseOverlays.ShowElement(
                this.m_ownerWindow.document,
                o.createElement(c.f),
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
            (t.sm_mapEmbeddedMouseOverlays = new a.a(
              "ContextMenuMouseOverlay"
            )),
            t
          );
        })(u),
        h = (function(e) {
          function t(t, n, r) {
            var i = e.call(this, r.ownerDocument.defaultView) || this;
            (i.m_parentInstance = t),
              (i.m_options = {
                bOverlapVertical: !0,
                bUseWebStyles: t.options.bUseWebStyles
              });
            var o = {
              element: r,
              clientX: null,
              clientY: null,
              instance: i,
              options: i.m_options,
              fnOnMenuItemSelected: function() {
                i.Hide();
              },
              bSubmenu: !0
            };
            return i.Init(o, n), i;
          }
          return (
            i.d(t, e),
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
        })(u);
    },
    KLxG: function(e, t, n) {
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
      t.a = r;
    },
    TToO: function(e, t, n) {
      "use strict";
      function r(e, t) {
        function n() {
          this.constructor = e;
        }
        a(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      function i(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var i = 0, r = Object.getOwnPropertySymbols(e);
            i < r.length;
            i++
          )
            t.indexOf(r[i]) < 0 && (n[r[i]] = e[r[i]]);
        return n;
      }
      function o(e, t, n, r) {
        var i,
          o = arguments.length,
          s =
            o < 3
              ? t
              : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, n, r);
        else
          for (var c = e.length - 1; c >= 0; c--)
            (i = e[c]) &&
              (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
        return o > 3 && s && Object.defineProperty(t, n, s), s;
      }
      function s(e, t, n, r) {
        return new (n || (n = Promise))(function(i, o) {
          function s(e) {
            try {
              a(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function c(e) {
            try {
              a(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function a(e) {
            e.done
              ? i(e.value)
              : new n(function(t) {
                  t(e.value);
                }).then(s, c);
          }
          a((r = r.apply(e, t || [])).next());
        });
      }
      function c(e, t) {
        function n(e) {
          return function(t) {
            return r([e, t]);
          };
        }
        function r(n) {
          if (i) throw new TypeError("Generator is already executing.");
          for (; a; )
            try {
              if (
                ((i = 1),
                o &&
                  (s =
                    2 & n[0]
                      ? o.return
                      : n[0]
                        ? o.throw || ((s = o.return) && s.call(o), 0)
                        : o.next) &&
                  !(s = s.call(o, n[1])).done)
              )
                return s;
              switch (((o = 0), s && (n = [2 & n[0], s.value]), n[0])) {
                case 0:
                case 1:
                  s = n;
                  break;
                case 4:
                  return a.label++, { value: n[1], done: !1 };
                case 5:
                  a.label++, (o = n[1]), (n = [0]);
                  continue;
                case 7:
                  (n = a.ops.pop()), a.trys.pop();
                  continue;
                default:
                  if (
                    ((s = a.trys),
                    !(s = s.length > 0 && s[s.length - 1]) &&
                      (6 === n[0] || 2 === n[0]))
                  ) {
                    a = 0;
                    continue;
                  }
                  if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                    a.label = n[1];
                    break;
                  }
                  if (6 === n[0] && a.label < s[1]) {
                    (a.label = s[1]), (s = n);
                    break;
                  }
                  if (s && a.label < s[2]) {
                    (a.label = s[2]), a.ops.push(n);
                    break;
                  }
                  s[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }
              n = t.call(e, a);
            } catch (e) {
              (n = [6, e]), (o = 0);
            } finally {
              i = s = 0;
            }
          if (5 & n[0]) throw n[1];
          return { value: n[0] ? n[1] : void 0, done: !0 };
        }
        var i,
          o,
          s,
          c,
          a = {
            label: 0,
            sent: function() {
              if (1 & s[0]) throw s[1];
              return s[1];
            },
            trys: [],
            ops: []
          };
        return (
          (c = { next: n(0), throw: n(1), return: n(2) }),
          "function" == typeof Symbol &&
            (c[Symbol.iterator] = function() {
              return this;
            }),
          c
        );
      }
      (t.d = r),
        n.d(t, "a", function() {
          return l;
        }),
        (t.f = i),
        (t.c = o),
        (t.b = s),
        (t.e = c); /*! *****************************************************************************
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
      var a = function(e, t) {
          return (a =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(e, t) {
                e.__proto__ = t;
              }) ||
            function(e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        },
        l = function() {
          return (
            (l =
              Object.assign ||
              function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++) {
                  t = arguments[n];
                  for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                }
                return e;
              }),
            l.apply(this, arguments)
          );
        };
    },
    Y6cV: function(e, t, n) {
      "use strict";
      function r(e) {
        return new c(e.body, !0);
      }
      (t.b = r),
        n.d(t, "a", function() {
          return a;
        });
      var i = n("wLXD"),
        o = (n.n(i), n("EqgU")),
        s = (function() {
          function e(e) {
            this.instance = new c(e, !1);
          }
          return e;
        })(),
        c = (function() {
          function e(e, t) {
            void 0 === t && (t = !0),
              (this.m_parent = e),
              (this.m_window = e.ownerDocument.defaultView),
              (this.m_bRemoveOnHide = t);
          }
          return (
            (e.prototype.Show = function(e, t) {
              var n = this;
              return (
                this.CancelShowInterval(),
                t
                  ? new Promise(function(r, i) {
                      n.iIntervalShow = n.m_window.setTimeout(function() {
                        var t = n.m_parent.ownerDocument;
                        t.defaultView &&
                          !t.defaultView.closed &&
                          (n.InternalShow(e), r());
                      }, t);
                    })
                  : (this.InternalShow(e), Promise.resolve())
              );
            }),
            (e.prototype.InternalShow = function(e) {
              this.m_container
                ? i.unmountComponentAtNode(this.m_container)
                : ((this.m_container = this.m_parent.ownerDocument.createElement(
                    "div"
                  )),
                  this.m_parent.appendChild(this.m_container)),
                i.render(e, this.m_container);
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
                (i.unmountComponentAtNode(this.m_container),
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
        a = (function() {
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
      function r(e) {
        return function(t, n, r) {
          var i = r.value;
          r.value = function() {
            for (var t = this, r = [], o = 0; o < arguments.length; o++)
              r[o] = arguments[o];
            var s = this[n + "_DebounceProperties"];
            void 0 === s &&
              (s = this[n + "_DebounceProperties"] = {
                hTimer: void 0,
                nPending: 0
              }),
              void 0 === s.hTimer
                ? (i.apply(this, r),
                  (s.hTimer = window.setInterval(function() {
                    s.nPending > 0
                      ? (i.apply(t, r), (s.nPending = 0))
                      : (window.clearInterval(s.hTimer), (s.hTimer = void 0));
                  }, e)))
                : (s.nPending += 1);
          };
        };
      }
      function i(e) {
        return l.createElement("div", { className: "ContextMenuMouseOverlay" });
      }
      function o() {
        return (
          window.sessionStorage && "true" == window.sessionStorage.getItem(b)
        );
      }
      function s(e) {
        e
          ? window.sessionStorage.setItem(b, "true")
          : window.sessionStorage.removeItem(b);
      }
      var c = n("TToO"),
        a = n("Mn8c"),
        l = n("Jmof"),
        m = n("wLXD"),
        u = n("z9An"),
        p = n("EqgU"),
        h = n("KLxG"),
        d = n("5Pz3");
      n.d(t, "c", function() {
        return f;
      }),
        n.d(t, "d", function() {
          return v;
        }),
        n.d(t, "b", function() {
          return y;
        }),
        n.d(t, "e", function() {
          return g;
        }),
        n.d(t, "g", function() {
          return _;
        }),
        n.d(t, "a", function() {
          return w;
        }),
        (t.f = i),
        (t.h = o),
        (t.i = s);
      var f = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            c.d(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.children,
                n = e.className,
                r = c.f(e, ["children", "className"]),
                i =
                  this.context.contextMenuInstance &&
                  this.context.contextMenuInstance.options.bUseWebStyles,
                o = i ? "popup_menu popup_body" : "contextMenuContents";
              return (
                n && (o += " " + n),
                l.createElement("div", c.a({}, r, { className: o }), t)
              );
            }),
            (t.contextTypes = {
              contextMenuInstance: function() {
                return null;
              }
            }),
            t
          );
        })(l.PureComponent),
        v = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            c.d(t, e),
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
                c.f(e, ["onSelected", "bInteractableItem"])),
                n =
                  this.context.contextMenuInstance &&
                  this.context.contextMenuInstance.options.bUseWebStyles,
                r = [n ? "popup_menu_item" : "contextMenuItem"];
              return (
                this.props.className && r.push(this.props.className),
                this.props.disabled && r.push("disabled"),
                l.createElement(
                  "div",
                  c.a({ onMouseEnter: this.OnMouseEnter }, t, {
                    onClick: this.OnClick,
                    unselectable: this.props.unselectable,
                    className: r.join(" ")
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
            c.c([h.a], t.prototype, "OnClick", null),
            c.c([h.a], t.prototype, "OnMouseEnter", null),
            t
          );
        })(l.PureComponent),
        y = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            c.d(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.bChecked,
                n = e.children,
                r = c.f(e, ["bChecked", "children"]);
              return l.createElement(
                v,
                c.a({}, r),
                l.createElement("div", {
                  className: "contextMenuCheckMark" + (t && " menuChecked")
                }),
                n
              );
            }),
            t
          );
        })(l.PureComponent),
        g = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (n.state = { bActive: !1 }), n;
          }
          return (
            c.d(t, e),
            (t.prototype.OnSubMenuMouseEnter = function() {
              this.context.contextMenuInstance.CancelHideSubMenuTimer();
            }),
            (t.prototype.RenderSubMenu = function() {
              return l.createElement(
                f,
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
                r = c.f(e, ["label", "children", "className"]);
              return (
                this.state.bActive && (n = (n || "") + " active"),
                l.createElement(
                  v,
                  c.a({}, r, {
                    onClick: this.OnClick,
                    className: n,
                    onMouseEnter: this.OnMouseEnter,
                    onSelected: null,
                    bInteractableItem: !0
                  }),
                  t,
                  " ",
                  l.createElement(d.k, null)
                )
              );
            }),
            (t.contextTypes = {
              contextMenuInstance: function() {
                return null;
              }
            }),
            c.c([h.a], t.prototype, "OnSubMenuMouseEnter", null),
            c.c([h.a], t.prototype, "RenderSubMenu", null),
            c.c([h.a], t.prototype, "OnMouseEnter", null),
            c.c([h.a], t.prototype, "OnClick", null),
            t
          );
        })(l.PureComponent),
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
              (n.m_mutationObserver = new MutationObserver(n.OnMenuMutation)),
              n
            );
          }
          return (
            c.d(t, e),
            (t.prototype.BindMenuElement = function(e) {
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
            (t.prototype.OnMenuMutation = function(e, t) {
              this.PositionMenu();
            }),
            (t.prototype.OnWindowResize = function() {
              this.PositionMenu();
            }),
            (t.prototype.OnBlur = function(e) {
              (e.relatedTarget && p.c(e.currentTarget, e.relatedTarget)) ||
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
                  !p.c(
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
                var r = t.getBoundingClientRect(),
                  i = e.getBoundingClientRect(),
                  o = null != this.props.popup,
                  s = this.props.options,
                  c = {
                    menuLeft: void 0,
                    menuRight: void 0,
                    menuTop: void 0,
                    menuBottom: void 0,
                    menuWidth: void 0,
                    menuHeight: void 0
                  },
                  a = this.props.clientX,
                  l = this.props.clientY,
                  m = n.innerWidth,
                  u = n.innerHeight;
                if (o) {
                  (a += n.screenLeft), (l += n.screenTop), (r = p.e(n, r));
                  var h = n.screen,
                    d = 0,
                    f = 0;
                  h.availLeft && (d = h.availLeft),
                    h.availTop && (f = h.availTop),
                    (m = d + h.availWidth),
                    (u = f + h.availHeight);
                }
                (s.bOverlapHorizontal || s.bOverlapVertical) &&
                  (a = l = void 0);
                var v = a || r.left,
                  y = a || r.right,
                  g = i.width;
                s.bMatchWidth && ((g = y - v), (c.menuWidth = g));
                var _ = (s.bOverlapHorizontal ? y : v) - g,
                  w = _ > 0,
                  b = m - (s.bOverlapHorizontal ? v : y) - g,
                  E = b > 0,
                  x = (s.bPreferPopLeft || !E) && w;
                w ||
                  E ||
                  ((x = w > E),
                  s.bFitToWindow &&
                    ((g += (x ? _ : b) - 8), (c.menuWidth = g))),
                  (!s.bPreferPopLeft && E) || !w
                    ? (c.menuLeft = s.bOverlapHorizontal ? v : y)
                    : (c.menuRight = m - (s.bOverlapHorizontal ? y : v));
                var S = l || r.top,
                  k = l || r.bottom,
                  M = i.height;
                s.bMatchHeight && ((M = k - S), (c.menuHeight = M));
                var P = (s.bOverlapVertical ? k : S) - M,
                  C = P > 0,
                  I = u - (s.bOverlapVertical ? S : k) - M,
                  L = I > 0,
                  O = (s.bPreferPopTop || !L) && C;
                C ||
                  L ||
                  ((O = P > I),
                  s.bFitToWindow &&
                    ((M += (O ? P : I) - 8), (c.menuHeight = M))),
                  O
                    ? (c.menuBottom = u - (s.bOverlapVertical ? k : S))
                    : (c.menuTop = s.bOverlapVertical ? S : k),
                  o
                    ? (c.menuHeight || (c.menuHeight = i.height),
                      c.menuWidth || (c.menuWidth = i.width),
                      c.menuBottom &&
                        !c.menuTop &&
                        ((c.menuTop = u - c.menuBottom - c.menuHeight),
                        (c.menuBottom = void 0)),
                      c.menuRight &&
                        !c.menuLeft &&
                        ((c.menuLeft = m - c.menuRight - c.menuWidth),
                        (c.menuRight = void 0)))
                    : (c.menuLeft && (c.menuLeft += n.scrollX),
                      c.menuTop && (c.menuTop += n.scrollY),
                      c.menuBottom &&
                        (c.menuBottom +=
                          n.document.body.scrollHeight -
                          n.scrollY -
                          n.innerHeight),
                      c.menuRight &&
                        (c.menuRight +=
                          n.document.body.scrollWidth -
                          n.scrollX -
                          n.innerWidth)),
                  (c.menuLeft === this.state.menuLeft &&
                    c.menuRight === this.state.menuRight &&
                    c.menuTop === this.state.menuTop &&
                    c.menuBottom === this.state.menuBottom &&
                    c.menuWidth === this.state.menuWidth &&
                    c.menuHeight === this.state.menuHeight) ||
                    this.setState(c);
              }
            }),
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
                    var r = e.props.popup.window,
                      i = e.state.menuLeft - n.screenX,
                      o = e.state.menuTop - n.screenY;
                    try {
                      r.SteamClient.Window.PositionWindowRelative(
                        t,
                        i,
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
              var r =
                this.props.options.strClassName ||
                (this.props.options.bUseWebStyles
                  ? "popup_block_new popup_block_hidden_until_visible"
                  : "contextMenu");
              return (
                this.props.instance.visible &&
                  this.state.ready &&
                  (r += " visible"),
                (r += " ContextMenuFocusContainer"),
                l.createElement(
                  "div",
                  {
                    className: r,
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
            c.c([h.a], t.prototype, "BindMenuElement", null),
            c.c([h.a, r(100)], t.prototype, "OnMenuMutation", null),
            c.c([h.a], t.prototype, "OnWindowResize", null),
            c.c([h.a], t.prototype, "OnBlur", null),
            c.c([h.a], t.prototype, "OnKeyDown", null),
            (t = c.c([a.observer], t))
          );
        })(l.Component),
        w = (function(e) {
          function t(n, r, i) {
            var o =
              e.call(this, "contextmenu_" + t.sm_iContextMenuInstance++, {
                title: "Menu",
                html_class: "ContextMenuPopup client_chat_frame",
                body_class: "ContextMenuPopupBody",
                replace_existing_popup: !1,
                target_browser: i,
                eCreationFlags: u.c.ContextMenu
              }) || this;
            return (o.m_menuProps = n), (o.m_children = r), o;
          }
          return (
            c.d(t, e),
            (t.prototype.UpdateParamsBeforeShow = function(e) {
              var t = p.e(
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
              m.render(
                l.createElement(
                  _,
                  c.a({}, this.m_menuProps, { popup: this }),
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
        b = "DEBUG_StickyContextMenus";
    },
    kllU: function(e, t, n) {
      "use strict";
      var r = n("mtWM");
      n.n(r), n("m5yx"), n("z9An");
    },
    m5yx: function(e, t, n) {
      "use strict";
      function r() {
        var e = i("config");
        e && Object.assign(o, e);
        var t = i("userinfo");
        t && Object.assign(s, t), (n.p = o.CDN_URL);
      }
      function i(e, t) {
        void 0 === t && (t = c);
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
        (t.c = r),
        (t.b = i);
      var o = {
          EUNIVERSE: 0,
          WEB_UNIVERSE: "",
          LANGUAGE: "english",
          CDN_URL: "",
          MEDIA_CDN_COMMUNITY_URL: "",
          MEDIA_CDN_URL: "",
          COMMUNITY_CDN_URL: "",
          COMMUNITY_CDN_ASSET_URL: "",
          PUBLIC_SHARED_URL: "",
          COMMUNITY_BASE_URL: "",
          STORE_BASE_URL: "",
          STORE_ICON_BASE_URL: "",
          IN_CLIENT: !1,
          USE_POPUPS: !1,
          IN_MOBILE: !1,
          WEBAPI_BASE_URL: "",
          TOKEN_URL: "",
          SESSIONID: "",
          BUILD_TIMESTAMP: 0
        },
        s = {
          logged_in: !1,
          steamid: "",
          accountid: 0,
          account_name: "",
          token: void 0,
          token_use_id: void 0
        },
        c = "webui_config";
    },
    sVhq: function(e, t, n) {
      "use strict";
      function r(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        var r = v.LocalizeString(e);
        return r
          ? (t.length > 0 &&
              (r = r.replace(/%(\d+)\$s/g, function(e, n) {
                if (n <= t.length && n >= 1) {
                  var r = t[n - 1];
                  return String(void 0 === r || null === r ? "" : r);
                }
                return e;
              })),
            r)
          : e;
      }
      function i(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        var r = v.LocalizeString(e);
        if (!r) return e;
        for (var i, o = [], s = /(.*?)%(\d+)\$s/g, c = 0; (i = s.exec(r)); ) {
          (c += i[0].length), o.push(i[1]);
          var l = parseInt(i[2]);
          l >= 1 && l <= t.length && o.push(t[l - 1]);
        }
        return (
          o.push(r.substr(c)),
          a.createElement.apply(a, [a.Fragment, null].concat(o))
        );
      }
      function o(e, t) {
        for (var n = [], i = 2; i < arguments.length; i++)
          n[i - 2] = arguments[i];
        return 1 === t || "1" === t
          ? r.apply(void 0, [e, t].concat(n))
          : r.apply(void 0, [e + "_Plural", t].concat(n));
      }
      function s(e, t) {
        return void 0 === t && (t = !1), c(e, !t);
      }
      function c(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !0);
        var i = t ? "#TimeSince_" : "#TimeInterval_";
        return e >= 2 * m
          ? r(i + "XYears", Math.floor(e / m))
          : e >= m
            ? ((e -= m),
              e >= 2 * u
                ? r(i + "1YearXMonths", Math.floor(e / u))
                : r(i + "1Year"))
            : e >= 2 * u
              ? r(i + "XMonths", Math.floor(e / u))
              : e >= 2 * p
                ? r(i + "XWeeks", Math.floor(e / p))
                : e >= 2 * h
                  ? r(i + "XDays", Math.floor(e / h))
                  : e >= h
                    ? ((e -= h),
                      e >= 2 * d
                        ? r(i + "1DayXHours", Math.floor(e / d))
                        : r(i + "1Day"))
                    : e >= 2 * d
                      ? r(i + "XHours", Math.floor(e / d))
                      : e >= d
                        ? ((e -= d),
                          e >= 2 * f && n
                            ? r(i + "1HourXMinutes", Math.floor(e / f))
                            : r(i + "1Hour"))
                        : n
                          ? e >= 2 * f
                            ? r(i + "XMinutes", Math.floor(e / f))
                            : r(e >= f ? i + "1Minute" : i + "LessThanAMinute")
                          : r(i + "LessThanAnHour");
      }
      (t.b = r),
        (t.d = i),
        (t.c = o),
        (t.e = s),
        n.d(t, "a", function() {
          return v;
        });
      var a = n("Jmof"),
        l = (n.n(a),
        (function() {
          function e() {
            (this.m_mapTokens = new Map()),
              (this.m_mapFallbackTokens = new Map());
          }
          return (
            (e.prototype.InitFromObjects = function(e, t, n, r) {
              var i = this;
              this.m_mapTokens.clear(),
                Object.keys(n).forEach(function(e, t) {
                  i.m_mapTokens.set(e, n[e]);
                }),
                Object.keys(e).forEach(function(t, n) {
                  i.m_mapTokens.set(t, e[t]);
                }),
                t &&
                  Object.keys(t).forEach(function(e, n) {
                    i.m_mapTokens.has(e) || i.m_mapTokens.set(e, t[e]),
                      i.m_mapFallbackTokens.set(e, t[e]);
                  }),
                r &&
                  Object.keys(r).forEach(function(e, t) {
                    i.m_mapTokens.has(e) || i.m_mapTokens.set(e, r[e]),
                      i.m_mapFallbackTokens.has(e) ||
                        i.m_mapFallbackTokens.set(e, r[e]);
                  });
            }),
            (e.prototype.InitDirect = function(e) {
              var t = this;
              this.m_mapTokens.clear(),
                this.m_mapFallbackTokens.clear(),
                Object.keys(e).forEach(function(n, r) {
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
        m = 31536e3,
        u = 2628e3,
        p = 604800,
        h = 86400,
        d = 3600,
        f = 60,
        v = new l();
      window.LocalizationManager = v;
    },
    vwkX: function(e, t, n) {
      "use strict";
      function r(e, t, n) {
        t < 0 ||
          n < 0 ||
          (n >= e.length && (e[n] = void 0), e.splice(n, 0, e.splice(t, 1)[0]));
      }
      function i(e, t) {
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
      function c(e, t) {
        if (e.length != t.length) return !1;
        for (var n = 0; n < e.length; n++) if (e[n] != t[n]) return !1;
        return !0;
      }
      function a(e, t, n) {
        for (var r = 0, i = e.length - 1; r <= i; ) {
          var o = Math.floor((r + i) / 2),
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
        var r = a(e, t, n);
        e.splice(r + 1, 0, t);
      }
      (t.d = r), (t.b = i), (t.c = o), (t.a = s), (t.e = c), (t.f = l);
    },
    z9An: function(e, t, n) {
      "use strict";
      n.d(t, "c", function() {
        return r;
      }),
        n.d(t, "a", function() {
          return l;
        }),
        n.d(t, "b", function() {
          return m;
        }),
        n.d(t, "d", function() {
          return p;
        });
      var r,
        i = n("TToO"),
        o = n("vwkX"),
        s = n("KLxG"),
        c = n("y986");
      !(function(e) {
        (e[(e.Minimized = 1)] = "Minimized"),
          (e[(e.Hidden = 2)] = "Hidden"),
          (e[(e.Tooltip = 4)] = "Tooltip"),
          (e[(e.ContextMenu = 8)] = "ContextMenu"),
          (e[(e.Resizable = 16)] = "Resizable");
      })(r || (r = {}));
      var a = (function() {
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
                o.b(this.m_rgLoadingLinks, e.currentTarget),
                0 == this.m_rgLoadingLinks.length &&
                  (this.m_fnRender(), (this.m_fnRender = void 0));
            }),
            i.c([s.a], e.prototype, "OnLinkLoad", null),
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
            (e.prototype.OnMessage = function(e) {
              "window_moved" == e.data && this.OnResize();
            }),
            (e.prototype.Show = function(e) {
              var t = this;
              void 0 === e && (e = !0);
              var n;
              window.SteamClient &&
                (this.m_rgParams.eCreationFlags |= r.Hidden),
                this.m_rgParams.eCreationFlags & r.Tooltip && (e = !1),
                this.BIsValid() &&
                  (this.BIsClosed()
                    ? ((this.m_popup = void 0), (this.m_element = void 0))
                    : e && this.Focus());
              var i = p.GetExistingPopup(this.m_strName);
              if (!i || this.m_rgParams.replace_existing_popup) {
                this.m_rgParams = this.UpdateParamsBeforeShow(this.m_rgParams);
                var o, s, c;
                i
                  ? ((s = i.m_element),
                    (o = i.m_popup),
                    i.ReleasePopup(),
                    (c = i.m_renderWhenReady),
                    p.RemoveTrackedPopup(i),
                    o.removeEventListener("beforeunload", i.OnUnload),
                    o.removeEventListener("resize", i.OnResizeEvent),
                    o.removeEventListener("focus", this.OnFocusInternal),
                    o.removeEventListener("blur", this.OnBlurInternal),
                    o.removeEventListener("drop", i.OnDrop),
                    o.removeEventListener("dragover", i.OnDragOver),
                    o.removeEventListener("message", this.OnMessage))
                  : ((n = u.CreatePopup(this.m_strName, this.m_rgParams)),
                    (o = n.popup),
                    (s = n.element),
                    (c = new a(o, s))),
                  o &&
                    s &&
                    ((o.document.title = this.m_strTitle),
                    o.addEventListener("beforeunload", this.OnUnload),
                    o.addEventListener("resize", this.OnResizeEvent),
                    o.addEventListener("focus", this.OnFocusInternal),
                    o.addEventListener("blur", this.OnBlurInternal),
                    o.addEventListener("drop", this.OnDrop),
                    o.addEventListener("dragover", this.OnDragOver),
                    o.addEventListener("message", this.OnMessage),
                    (this.m_popup = o),
                    (this.m_element = s),
                    (this.m_renderWhenReady = c),
                    this.m_renderWhenReady.SetTarget(function() {
                      return t.RenderInternal(t.m_popup, t.m_element, e);
                    })),
                  p.AddTrackedPopup(this),
                  i && e && this.Focus();
              }
            }),
            (e.prototype.RemoveEventListeners = function() {
              this.window.removeEventListener("beforeunload", this.OnUnload),
                this.window.removeEventListener("resize", this.OnResizeEvent),
                this.window.removeEventListener("focus", this.OnFocusInternal),
                this.window.removeEventListener("blur", this.OnBlurInternal),
                this.window.removeEventListener("drop", this.OnDrop),
                this.window.removeEventListener("dragover", this.OnDragOver),
                this.window.removeEventListener("message", this.OnMessage);
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
              this.RemoveEventListeners(),
                p.RemoveTrackedPopup(this),
                this.OnClose();
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
            (e.prototype.IsMinimized = function() {
              var e = this;
              return this.m_popup &&
                !this.m_popup.closed &&
                this.m_popup.SteamClient &&
                this.m_popup.SteamClient.Window &&
                this.m_popup.SteamClient.Window.IsWindowMinimized
                ? new Promise(function(t, n) {
                    e.m_popup.SteamClient.Window.IsWindowMinimized(function(e) {
                      t(e);
                    });
                  })
                : Promise.resolve(!1);
            }),
            (e.prototype.ReleasePopup = function() {
              this.OnClose(), (this.m_popup = null);
            }),
            (e.prototype.OnFocus = function() {}),
            (e.prototype.OnBlur = function() {}),
            i.c([c.observable], e.prototype, "m_bFocused", void 0),
            i.c([s.a], e.prototype, "OnMessage", null),
            i.c([s.a], e.prototype, "OnResizeEvent", null),
            i.c([s.a], e.prototype, "OnUnload", null),
            i.c([s.a], e.prototype, "OnFocusInternal", null),
            i.c([s.a], e.prototype, "OnBlurInternal", null),
            i.c([c.computed], e.prototype, "focused", null),
            e
          );
        })(),
        m = (function(e) {
          function t(t, n, r, i) {
            var o = e.call(this, t, r) || this;
            return o.SetSavedDimensionsKey(n), (o.m_bExpires = i), o;
          }
          return (
            i.d(t, e),
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
            (t.prototype.OnResize = function() {
              this.QueryAndStoreWindowPosition();
            }),
            (t.prototype.QueryAndStoreWindowPosition = function() {
              var e = this;
              this.m_strInitialRestoreDetails &&
                this.GetWindowRestoreDetails().then(function(t) {
                  var n = e.m_strInitialRestoreDetails == t;
                  e.m_popup &&
                    e.m_strSavedDimensionsKey &&
                    !n &&
                    (p.SetRestoreDetails(
                      e.m_strSavedDimensionsKey,
                      t,
                      e.m_bExpires
                    ),
                    (e.m_rgParams.strRestoreDetails = t));
                });
            }),
            (t.prototype.OnClose = function() {
              this.QueryAndStoreWindowPosition();
            }),
            i.c([s.a], t.prototype, "QueryAndStoreWindowPosition", null),
            t
          );
        })(l),
        u = (function() {
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
                    var n = 0, r = e.m_rgShutdownCallbacks;
                    n < r.length;
                    n++
                  )
                    (0, r[n])();
                  var i = [];
                  e.m_mapPopups.forEach(function(e) {
                    e.BIsValid() && !e.BIsClosed() && i.push(e);
                  });
                  for (var o = 0, s = i; o < s.length; o++) s[o].Close();
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
                r = n.width || 300,
                i = n.height || 300,
                o = t.title,
                s = "width=" + r + ",height=" + i;
              void 0 !== n.left && (s += ",left=" + n.left),
                void 0 !== n.top && (s += ",top=" + n.top),
                (s += ",resizeable,status=0,toolbar=0,menubar=0,location=0");
              var c = "about:blank",
                a = [];
              a.push("createflags=" + t.eCreationFlags),
                t.minWidth && a.push("minwidth=" + t.minWidth),
                t.minHeight && a.push("minheight=" + t.minHeight),
                t.target_browser &&
                  (a.push("pid=" + t.target_browser.m_unPID),
                  a.push("browser=" + t.target_browser.m_nBrowserID),
                  t.availscreenwidth &&
                    t.availscreenheight &&
                    (a.push("screenavailwidth=" + t.availscreenwidth),
                    a.push("screenavailheight=" + t.availscreenheight))),
                t.strRestoreDetails &&
                  a.push("restoredetails=" + t.strRestoreDetails),
                a && (c += "?" + a.join("&"));
              var l = t.owner_window || window,
                m = l.open(c, e, s, !0);
              if (!m)
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
              var h =
                "<!DOCTYPE html><html " +
                u +
                "><head><title></title></head><body " +
                p +
                '><div id="popup_target"></div></body></html>';
              m.document.write(h), (m.document.title = o);
              for (
                var d = m.document.getElementsByTagName("head")[0],
                  f = document.getElementsByTagName("link"),
                  v = 0;
                v < f.length;
                v++
              ) {
                var y = f[v];
                if ("stylesheet" == y.rel) {
                  for (
                    var g = m.document.createElement("link"), _ = 0;
                    _ < y.attributes.length;
                    _++
                  ) {
                    var w = y.attributes.item(_);
                    g.setAttribute(w.name, w.value);
                  }
                  d.appendChild(g);
                }
              }
              return {
                popup: m,
                element: m.document.getElementById("popup_target")
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
                      for (var r = 0, i = n; r < i.length; r++) {
                        var o = i[r];
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
                      var r = null,
                        i = Date.now(),
                        o = 0,
                        s = Array.from(this.m_mapRestoreDetails.keys());
                      o < s.length;
                      o++
                    ) {
                      var c = s[o],
                        a = this.m_mapRestoreDetails.get(c);
                      a.last_used < i &&
                        a.bExpires &&
                        ((i = a.last_used), (r = c));
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
                  this.m_bShuttingDown && this.SaveSavedDimensionStore();
              }
            }),
            e
          );
        })(),
        p = new u();
    }
  },
  ["HxNj"]
);

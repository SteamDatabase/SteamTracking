/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "6108057";
(window.webpackJsonp = window.webpackJsonp || []).push([
  [37],
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
    "1fPh": function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return s;
      }),
        n.d(t, "a", function() {
          return c;
        });
      var r = n("mrSG"),
        i = n("lkRc"),
        o = {},
        a = {},
        s = Object(r.a)(
          Object(r.a)(
            Object(r.a)(
              Object(r.a)(
                Object(r.a)(
                  Object(r.a)(
                    Object(r.a)(
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
                        SubscriptionPlanLandingPage: function() {
                          return "/subscriptions/:salePageName";
                        },
                        CuratorPage: function() {
                          return "/curator/:curatorPageName/(list)?/:listid?";
                        },
                        CreatorPage: function() {
                          return "/(publisher|pub|dev|developer|franchise|subscriptions)/:creatorPageName/(list)?/:listid?";
                        }
                      },
                      {
                        NewsHub: function() {
                          return "/(news|newshub|events)";
                        },
                        NewsHubApp: function(e, t) {
                          return "/(news|newshub|events)/app/" + e + "/" + t;
                        },
                        NewsHubGroup: function(e, t) {
                          return "/(news|newshub|events)/group/" + e + "/" + t;
                        },
                        NewsHubCollection: function(e, t) {
                          return (
                            "/(news|newshub|events)/collection/" + e + "/" + t
                          );
                        },
                        NewsHubSale: function(e, t) {
                          return "/(news|newshub|events)/sale/" + e + "/" + t;
                        },
                        EventViewByApp: function(e, t, n) {
                          return (
                            "/(news|newshub|events)/app/" +
                            e +
                            "/:viewtype(view|inline)/" +
                            t +
                            "/" +
                            n
                          );
                        },
                        EventViewByGroup: function(e, t, n) {
                          return (
                            "/(news|newshub|events)/group/" +
                            e +
                            "/:viewtype(view|inline)/" +
                            t +
                            "/" +
                            n
                          );
                        },
                        OldAnnouncementViewByApp: function(e, t, n) {
                          return (
                            "/(news|newshub|events)/app/" +
                            e +
                            "/:viewtype(old_view|old_inline)/" +
                            t +
                            "/" +
                            n
                          );
                        },
                        OldAnnouncementViewByGroup: function(e, t, n) {
                          return (
                            "/(news|newshub|events)/group/" +
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
                    }
                  }
                ),
                a
              ),
              {
                Loyalty: function() {
                  return "/points";
                },
                LoyaltyStore: function() {
                  return "/points/shop";
                },
                LoyaltyGetPoints: function() {
                  return "/points/getpoints";
                },
                LoyaltyHowItWorks: function() {
                  return "/points/howitworks";
                },
                LoyaltyStickers: function() {
                  return "/points/shop/c/stickers";
                },
                LoyaltyEmoticons: function() {
                  return "/points/shop/c/emoticons";
                },
                LoyaltyChatEffects: function() {
                  return "/points/shop/c/chateffects";
                },
                LoyaltyBackgrounds: function() {
                  return "/points/shop/c/backgrounds";
                },
                LoyaltyProfile: function() {
                  return "/points/shop/c/profile";
                },
                LoyaltyAvatar: function() {
                  return "/points/shop/c/avatar";
                },
                LoyaltySteamBadge: function() {
                  return "/points/shop/c/steambadge";
                },
                LoyaltyByGame: function() {
                  return "/points/shop/c/games";
                },
                LoyaltyGiveawayRules: function() {
                  return "/points/giveawayrules";
                }
              }
            ),
            o
          ),
          {
            DiagData: function() {
              return "/:anything*/diagdata";
            }
          }
        );
      function c() {
        var e = document.createElement("a");
        e.href = i.c.STORE_BASE_URL;
        var t = e.pathname;
        return t.endsWith("/") || (t += "/"), t;
      }
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
        i = n.n(r),
        o = n("s4NR"),
        a = n.n(o),
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
                  "dev" == c.c.WEB_UNIVERSE ||
                  "beta" == c.c.WEB_UNIVERSE ||
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
                  ("dev" != c.c.WEB_UNIVERSE && "beta" != c.c.WEB_UNIVERSE) ||
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
      window.g_EventCalendarDevFeatures = l;
    },
    "6TF7": function(e, t, n) {
      e.exports = { App: "app_App_2uHYt" };
    },
    "6Y59": function(e, t, n) {
      "use strict";
      n.d(t, "P", function() {
        return c;
      }),
        n.d(t, "s", function() {
          return l;
        }),
        n.d(t, "A", function() {
          return u;
        }),
        n.d(t, "l", function() {
          return p;
        }),
        n.d(t, "t", function() {
          return m;
        }),
        n.d(t, "S", function() {
          return d;
        }),
        n.d(t, "cb", function() {
          return h;
        }),
        n.d(t, "Z", function() {
          return f;
        }),
        n.d(t, "G", function() {
          return b;
        }),
        n.d(t, "ab", function() {
          return v;
        }),
        n.d(t, "X", function() {
          return _;
        }),
        n.d(t, "J", function() {
          return g;
        }),
        n.d(t, "I", function() {
          return y;
        }),
        n.d(t, "k", function() {
          return w;
        }),
        n.d(t, "p", function() {
          return O;
        }),
        n.d(t, "y", function() {
          return E;
        }),
        n.d(t, "T", function() {
          return C;
        }),
        n.d(t, "d", function() {
          return S;
        }),
        n.d(t, "o", function() {
          return M;
        }),
        n.d(t, "r", function() {
          return A;
        }),
        n.d(t, "B", function() {
          return B;
        }),
        n.d(t, "E", function() {
          return j;
        }),
        n.d(t, "L", function() {
          return D;
        }),
        n.d(t, "v", function() {
          return x;
        }),
        n.d(t, "q", function() {
          return L;
        }),
        n.d(t, "C", function() {
          return I;
        }),
        n.d(t, "R", function() {
          return k;
        }),
        n.d(t, "Y", function() {
          return R;
        }),
        n.d(t, "g", function() {
          return N;
        }),
        n.d(t, "Q", function() {
          return F;
        }),
        n.d(t, "N", function() {
          return T;
        }),
        n.d(t, "O", function() {
          return P;
        }),
        n.d(t, "e", function() {
          return z;
        }),
        n.d(t, "F", function() {
          return G;
        }),
        n.d(t, "W", function() {
          return U;
        }),
        n.d(t, "x", function() {
          return H;
        }),
        n.d(t, "u", function() {
          return W;
        }),
        n.d(t, "f", function() {
          return V;
        }),
        n.d(t, "m", function() {
          return Y;
        }),
        n.d(t, "w", function() {
          return K;
        }),
        n.d(t, "H", function() {
          return q;
        }),
        n.d(t, "a", function() {
          return X;
        }),
        n.d(t, "D", function() {
          return Z;
        }),
        n.d(t, "n", function() {
          return J;
        }),
        n.d(t, "U", function() {
          return Q;
        }),
        n.d(t, "j", function() {
          return $;
        }),
        n.d(t, "i", function() {
          return ee;
        }),
        n.d(t, "h", function() {
          return te;
        }),
        n.d(t, "b", function() {
          return ne;
        }),
        n.d(t, "c", function() {
          return re;
        }),
        n.d(t, "V", function() {
          return ie;
        }),
        n.d(t, "M", function() {
          return oe;
        }),
        n.d(t, "z", function() {
          return ae;
        }),
        n.d(t, "K", function() {
          return se;
        }),
        n.d(t, "bb", function() {
          return ce;
        });
      var r = n("mrSG"),
        i = n("q1tI"),
        o = n("2i24"),
        a = n.n(o),
        s = n("exH9");
      n("YyVH"), n("Z7Ow");
      function c() {
        return i.createElement(
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
          i.createElement("path", {
            d:
              "M-232.755,589.942l3.103,2.408c5.78,4.492,11.973,8.18,18.409,10.959l3.581,1.547l2.276,33.783 c0.089,1.33,1.385,2.54,2.715,2.54h48.62c1.355,0,2.745-1.273,2.852-2.621l2.74-33.284l3.602-1.496 c6.406-2.656,12.646-6.262,18.554-10.707l3.137-2.366l30.578,15.009c1.155,0.571,2.924,0.017,3.563-1.087l24.303-42.1 c0.674-1.173,0.265-3.014-0.852-3.785l-27.872-19.309l0.469-3.832c0.495-4.032,0.725-7.395,0.725-10.57 c0-3.129-0.227-6.5-0.687-10.307l-0.469-3.896l28.699-19.253c1.112-0.741,1.509-2.473,0.84-3.627l-24.3-42.104 c-0.657-1.139-2.502-1.727-3.7-1.155l-31.208,14.748l-3.091-2.341c-5.571-4.224-11.466-7.688-17.522-10.306l-3.58-1.548 l-2.34-34.887c-0.089-1.33-1.381-2.536-2.715-2.536h-48.617c-1.355,0-2.74,1.274-2.851,2.626l-2.834,34.371l-3.593,1.501 c-6.082,2.535-12.028,5.924-17.667,10.071l-3.124,2.302l-31.392-15.413c-1.168-0.575-2.924-0.025-3.559,1.074l-24.309,42.107 c-0.678,1.172-0.264,3.014,0.848,3.781l28.068,19.444l-0.524,3.883c-0.592,4.378-0.865,8.018-0.865,11.462 c0,2.988,0.179,6.065,0.55,9.403l0.431,3.853l-28.528,19.125c-1.108,0.742-1.509,2.468-0.84,3.632l24.308,42.1 c0.656,1.142,2.489,1.726,3.7,1.154L-232.755,589.942z M-177.498,560.051c-19.311,0-35.02-15.709-35.02-35.02 s15.709-35.02,35.02-35.02s35.02,15.709,35.02,35.02S-158.188,560.051-177.498,560.051z"
          })
        );
      }
      function l() {
        return i.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_DownArrowContextMenu",
            "data-name": "Layer 1",
            viewBox: "0 0 128 128",
            x: "0px",
            y: "0px"
          },
          i.createElement("polygon", {
            points:
              "50 59.49 13.21 22.89 4.74 31.39 50 76.41 95.26 31.39 86.79 22.89 50 59.49"
          })
        );
      }
      function u(e) {
        var t = "SVGIcon_Button SVGIcon_MagnifyingGlass";
        return (
          e.className && (t += " " + e.className),
          i.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: t,
              version: "1.1",
              x: "0px",
              y: "0px",
              viewBox: "0 0 100 100"
            },
            i.createElement(
              "g",
              { transform: "translate(0,-952.36218)" },
              i.createElement("path", {
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
        return i.createElement(
          "svg",
          {
            className: "SVGIcon_Button SVGIcon_Clock",
            version: "1.1",
            x: "0px",
            y: "0px",
            width: "20px",
            height: "20px",
            viewBox: "0 0 20 20"
          },
          i.createElement("path", {
            d:
              "M15.999 15c-.15 0-.303-.034-.446-.105l-4-2A1.001 1.001 0 0111 12V5a1 1 0 012 0v6.382l3.447 1.724A1 1 0 0115.999 15zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"
          })
        );
      }
      function m() {
        return i.createElement(
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
          i.createElement("circle", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "12",
            strokeMiterlimit: "10",
            cx: "128",
            cy: "128",
            r: "107.5"
          }),
          i.createElement("path", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "12",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d:
              "M74.484,145.945 c0,0,12.996,37.533,53.514,37.533c38.084,0,53.499-37.533,53.499-37.533"
          }),
          i.createElement("line", {
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
          i.createElement("line", {
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
      function d() {
        return i.createElement(
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
          i.createElement(
            "g",
            { transform: "translate(0,-952.36218)" },
            i.createElement("path", {
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
        return i.createElement(
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
          i.createElement("line", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "45",
            strokeMiterlimit: "10",
            x1: "212",
            y1: "212",
            x2: "44",
            y2: "44"
          }),
          i.createElement("line", {
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
        return i.createElement(
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
            i.createElement(
              "g",
              null,
              i.createElement("path", {
                className: "Bubble",
                fill: "none",
                strokeMiterlimit: "1",
                strokeWidth: "2.5px",
                d:
                  "M60.1,32.3c0,15.1-12.3,27.3-27.4,27.3 c-5,0-9.7-1.4-13.8-3.7c-1.8-1.1-15,5.4-13.8,3.4c1.7-2.9,5.9-10.3,4.7-12C7,43,5.3,37.8,5.3,32.3C5.3,17.2,17.6,5,32.7,5 C47.8,5,60.1,17.2,60.1,32.3z"
              })
            ),
          !e.exitOnly &&
            i.createElement(
              "g",
              null,
              i.createElement("path", {
                className: "AudioLines",
                opacity: "0",
                strokeWidth: "1px",
                d:
                  "M37.2,51.1c-0.5,0-1-0.1-1.3-0.4c-0.7-0.5-0.7-1.3,0-1.8c6.3-4.4,9.8-10.2,9.8-16.4c0-6.2-3.5-12-9.8-16.4 c-0.7-0.5-0.7-1.3,0-1.8s1.9-0.5,2.6,0c7.1,4.9,10.9,11.4,10.9,18.3c0,6.9-3.9,13.4-10.9,18.3C38.2,51,37.7,51.1,37.2,51.1 M21.4,40.2c0.5,0,0.9-0.1,1.3-0.4c2.8-2,4.3-4.6,4.3-7.3s-1.5-5.4-4.3-7.3c-0.7-0.5-1.9-0.5-2.6,0c-0.7,0.5-0.7,1.3,0,1.8 c2.1,1.5,3.3,3.4,3.3,5.5c0,2.1-1.2,4-3.3,5.5c-0.7,0.5-0.7,1.3,0,1.8C20.4,40.1,20.9,40.2,21.4,40.2 M29.3,45.7 c0.5,0,1-0.1,1.3-0.4c4.9-3.4,7.7-7.9,7.7-12.7c0-4.8-2.7-9.3-7.7-12.7c-0.7-0.5-1.9-0.5-2.6,0c-0.7,0.5-0.7,1.3,0,1.8 c4.2,2.9,6.6,6.8,6.6,10.9c0,4.1-2.3,8-6.6,10.9c-0.7,0.5-0.7,1.3,0,1.8C28.4,45.5,28.8,45.7,29.3,45.7"
              })
            ),
          i.createElement(
            "g",
            { className: "Arrow", opacity: e.exitOnly ? 1 : 0 },
            i.createElement("polyline", {
              fill: "none",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              points: "41,30.7 14.5,30.7 23.5,19.4 "
            }),
            i.createElement("polyline", {
              fill: "none",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              points: "41,30.7 14.5,30.7 23.5,42 "
            })
          ),
          i.createElement(
            "g",
            null,
            i.createElement("polyline", {
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
            i.createElement(
              "g",
              { className: "Microphone" },
              i.createElement("path", {
                d:
                  "M40.971,28.593v6.278c0,4.007-4.023,7.284-8.971,7.284c-2.693,0-5.126-0.974-6.765-2.516 c-1.379-1.28-2.207-2.952-2.207-4.769v-6.278l0,0H21.05v6.278c0,0.536,0.064,1.055,0.162,1.573 c0.357,1.752,1.281,3.325,2.627,4.592c1.801,1.702,4.332,2.839,7.17,3.049v4.072H25.3c-0.341,0-0.616,0.438-0.616,0.989 c0,0.552,0.275,0.99,0.616,0.99h5.759h1.882H38.7c0.341,0,0.616-0.438,0.616-0.99c0-0.551-0.275-0.989-0.616-0.989h-5.71v-4.072 c5.58-0.422,9.96-4.396,9.96-9.214v-6.278H40.971z"
              }),
              i.createElement(
                "g",
                null,
                i.createElement("path", {
                  d:
                    "M32,39.841c-3.493,0-6.343-2.344-6.343-5.213v-17.85c0-2.871,2.85-5.213,6.343-5.213s6.343,2.342,6.343,5.213v17.85,C38.343,37.497,35.493,39.841,32,39.841z"
                })
              )
            )
        );
      }
      function b() {
        return i.createElement(
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
          i.createElement("path", {
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
        return i.createElement(
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
          i.createElement(
            "g",
            { className: "Speaker" },
            i.createElement("path", {
              d:
                "M93.785,52.265c-0.946,0-2.357,0.63-3.304,1.577L40.284,98.022c-0.947,0.789-2.831,1.578-4.093,1.578H9.367 C8.104,99.6,7,100.706,7,101.967v52.069c0,1.264,1.104,2.367,2.367,2.367H36.19c1.262,0,3.146,0.632,4.093,1.578l50.197,44.181 c0.947,0.789,2.516,1.578,3.304,1.578s1.578-1.104,1.578-2.367V54.631C95.363,53.369,94.731,52.265,93.785,52.265z"
            })
          ),
          !e.muted &&
            i.createElement(
              "g",
              { className: "SoundWaves" },
              i.createElement("path", {
                className: "SoundWavesHighest",
                d:
                  "M193.826,30.402c24.959,24.958,40.349,59.403,40.349,97.604c0,38.199-15.388,72.645-40.349,97.603l9.916,9.916 c28.067-28.067,44.263-64.673,44.263-107.521c0-42.847-16.196-79.455-44.263-107.521"
              }),
              i.createElement("path", {
                className: "SoundWavesHigh",
                d:
                  "M175.737,47.628l-8.924,8.924c18.271,18.27,29.536,43.484,29.536,71.448s-11.264,53.178-29.536,71.448l8.924,8.924 c20.546-20.546,33.234-49.008,33.234-80.374c0-31.366-12.688-59.829-33.234-80.374V47.628z"
              }),
              i.createElement("path", {
                className: "SoundWavesMed",
                d:
                  "M148.913,74.454l-8.925,8.925c11.488,11.488,18.491,27.236,18.491,44.624c0,17.388-7.054,33.281-18.491,44.575l8.875,8.975 c13.811-13.635,22.239-32.753,22.239-53.55c0-20.797-8.432-39.793-22.189-53.55V74.454z"
              }),
              i.createElement("path", {
                className: "SoundWavesLow",
                d:
                  "M121.989,101.229l-8.778,9.073c4.641,4.516,7.397,10.706,7.397,17.702c0,6.995-2.755,13.186-7.397,17.702l8.778,9.073 c7.035-6.844,11.243-16.413,11.243-26.775C133.232,117.643,129.024,108.075,121.989,101.229z"
              })
            ),
          i.createElement(
            "g",
            { className: "SoundX" },
            i.createElement("line", {
              fill: "none",
              strokeWidth: e.muted ? 10 : 0,
              stroke: "#fff",
              strokeMiterlimit: "10",
              x1: "137",
              y1: "170.667",
              x2: "223.167",
              y2: "84.5"
            }),
            i.createElement("line", {
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
      function _() {
        return i.createElement(
          "svg",
          { width: "50px", height: "25px", viewBox: "0 0 50 25" },
          i.createElement("path", {
            d:
              "M46 0H4C1.8 0 0 1.8 0 4v17c0 2.2 1.8 4 4 4h42c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM21 18.916V5.084L32.805 12 21 18.916z"
          })
        );
      }
      function g() {
        return i.createElement(
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
          i.createElement("path", {
            className: "playTriangle",
            d:
              "M65.321,33.521c-11.274-6.615-20.342-1.471-20.342,11.52V210.96c0,12.989,9.068,18.135,20.342,11.521l137.244-82.348 c11.274-6.618,11.274-17.646,0-24.509L65.321,33.521z"
          })
        );
      }
      function y() {
        return i.createElement(
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
          i.createElement("path", {
            d:
              "M44.979,219.364c0,3.3,2.7,6,6,6h49.753c3.3,0,6-2.7,6-6V36.5c0-3.3-2.7-6-6-6H50.979c-3.3,0-6,2.7-6,6V219.364z"
          }),
          i.createElement("path", {
            d:
              "M149.267,219.364c0,3.3,2.7,6,6,6h49.753c3.3,0,6-2.7,6-6V36.5c0-3.3-2.7-6-6-6h-49.753c-3.3,0-6,2.7-6,6V219.364z"
          })
        );
      }
      function w() {
        return i.createElement(
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
          i.createElement("polyline", {
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
      function O(e) {
        var t = e.highlightColor || "#00ccff",
          n = e.color || "#2d73ff";
        return i.createElement(
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
          i.createElement(
            "defs",
            null,
            i.createElement(
              "linearGradient",
              { id: "linear", x1: "0%", y1: "0%", x2: "100%", y2: "100%" },
              i.createElement("stop", {
                id: "stop0",
                offset: "0%",
                stopColor: t
              }),
              i.createElement("stop", {
                id: "stop1",
                offset: "100%",
                stopColor: n
              })
            ),
            i.createElement(
              "filter",
              { id: "f1", x: "0", y: "0", width: "200%", height: "200%" },
              i.createElement("feOffset", {
                result: "offOut",
                in: "SourceAlpha",
                dx: "20",
                dy: "20"
              }),
              i.createElement("feGaussianBlur", {
                result: "blurOut",
                in: "offOut",
                stdDeviation: "10"
              }),
              i.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "blurOut",
                mode: "normal"
              })
            )
          ),
          i.createElement("path", {
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
          i.createElement("path", {
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
        return i.createElement(
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
          i.createElement("path", {
            className: "topLock",
            d:
              "M203.553,197.794c0,21.929-17.778,39.706-39.706,39.706H92.154c-21.929,0-39.706-17.777-39.706-39.706v-71.693 c0-21.928,17.778-39.706,39.706-39.706h71.692c21.928,0,39.706,17.778,39.706,39.706V197.794z M128.001,129.664 c-8.941,0-16.19,7.248-16.19,16.189c0,5.589,2.833,10.518,7.137,13.427c2.066,1.395,0.318,23.508,0.318,32.842 c0,2.292-0.078,3.65,8.734,3.65c8.676,0,8.75-1.221,8.75-3.654c0-9.348-1.708-31.469,0.368-32.886 c4.269-2.916,7.071-7.821,7.071-13.38C144.191,136.912,136.941,129.664,128.001,129.664z"
          }),
          i.createElement("path", {
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
      function C(e) {
        var t = "SVGIcon_Button SVGIcon_Throbber ";
        return (
          e.className && (t += e.className),
          i.createElement(
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
            i.createElement(
              "g",
              { className: a.a.partCircle },
              i.createElement("path", {
                className: a.a.roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895"
              }),
              i.createElement("path", {
                className: a.a.roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M201.432,101.166"
              }),
              i.createElement("path", {
                className: a.a.roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754"
              })
            ),
            i.createElement(
              "g",
              { className: a.a.mainOutline },
              i.createElement("path", {
                className: a.a.roundFill,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              i.createElement("path", {
                className: a.a.roundOuterOutline,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              i.createElement("path", {
                className: a.a.roundThrobber01,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              i.createElement("path", {
                className: a.a.roundThrobber02,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              i.createElement("path", {
                className: a.a.roundThrobber03,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              i.createElement("path", {
                className: a.a.roundThrobber04,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              i.createElement("path", {
                className: a.a.roundThrobber05,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              i.createElement("path", {
                className: a.a.roundThrobber06,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              i.createElement("path", {
                className: a.a.roundThrobber07,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              i.createElement("path", {
                className: a.a.roundThrobber08,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              i.createElement("path", {
                className: a.a.roundThrobber09,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              i.createElement("path", {
                className: a.a.roundThrobber10,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              i.createElement("path", {
                className: a.a.roundThrobber11,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              i.createElement("path", {
                className: a.a.roundThrobber12,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              i.createElement("path", {
                className: a.a.roundThrobber13,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              i.createElement("path", {
                className: a.a.roundThrobber14,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
              }),
              i.createElement("path", {
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
            i.createElement(
              "g",
              { className: a.a.bottomCircle },
              i.createElement("path", {
                fill: "#ffffff",
                d:
                  "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579"
              })
            ),
            i.createElement(
              "g",
              { className: a.a.topCircle },
              i.createElement("circle", {
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
        return i.createElement(
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
          i.createElement("path", {
            d:
              "M107.785,33.965c-34.875,8.972-60.644,40.618-60.644,78.308v53.903c0,4.965-4.035,8.99-8.975,8.99 c-9.929,0-17.978,8.066-17.978,17.971c0,9.924,8.059,17.969,18.013,17.969h179.598c9.948,0,18.014-8.066,18.014-17.969 c0-9.926-8.087-17.971-17.979-17.971c-4.956,0-8.975-3.993-8.975-8.99v-53.903c0-37.676-25.763-69.333-60.644-78.308v-9.281 c0-11.193-9.052-20.219-20.215-20.219c-11.143,0-20.215,9.052-20.215,20.219V33.965L107.785,33.965z M96.554,220.09h62.891 c0,17.366-14.079,31.445-31.445,31.445C110.633,251.535,96.554,237.458,96.554,220.09z"
          })
        );
      }
      function M() {
        return i.createElement(
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
          i.createElement("polygon", {
            fill: "#ffffff",
            points:
              "0,0.093 0,25.702 24.323,50.026 0,74.349 0,99.955 49.929,50.026 "
          })
        );
      }
      function A(e) {
        return i.createElement(
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
          i.createElement("polyline", {
            className: "Arrow1",
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "23",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            points: "135.65,21.667 30.081,127.235 137.18,234.333 "
          }),
          !e.singlearrow &&
            i.createElement("polyline", {
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
      function B() {
        return i.createElement(
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
          i.createElement("rect", {
            x: "24",
            y: "42.167",
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "18",
            strokeMiterlimit: "10",
            width: "208",
            height: "171.667"
          }),
          i.createElement("line", {
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
      function j() {
        return i.createElement(
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
          i.createElement("line", {
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
      function D() {
        return i.createElement(
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
          i.createElement("polyline", {
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "12",
            strokeMiterlimit: "10",
            points: "83,90.861 83,42.167 232,42.167 232,165.14 173,165.14 "
          }),
          i.createElement("rect", {
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
      function x(e) {
        return i.createElement(
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
          i.createElement("polygon", {
            points: "13.913,141 128,59 242.087,141 ",
            fill: "#ffffff"
          })
        );
      }
      function L() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_DoNotDisturb",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          i.createElement("circle", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "24",
            strokeMiterlimit: "10",
            cx: "128",
            cy: "128",
            r: "101.5"
          }),
          i.createElement("line", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "24",
            strokeMiterlimit: "10",
            x1: "73",
            y1: "128",
            x2: "183",
            y2: "128"
          })
        );
      }
      function I(e) {
        return i.createElement(
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
          i.createElement("path", {
            className: "Arrow",
            d:
              "M77.003,54.763h32.784c3.794,0,9.113,2.181,11.814,4.848l63.604,62.773c2.703,2.667,2.727,7.054,0.05,9.748 l-63.705,64.206c-2.674,2.693-7.968,4.898-11.763,4.898H77.003"
          }),
          i.createElement("polyline", {
            className: "preArrowBox",
            opacity: e.bHidePreArrow ? "0" : "1",
            points: "6.833,54.763 46.71,54.763 46.71,201.236 6.833,201.236 \t"
          }),
          i.createElement("polyline", {
            className: "jumpAheadBox",
            opacity: e.bShowJumpAheadBox ? "1" : "0",
            points: "6.833,54.764 86.386,54.764 86.386,201.236 6.833,201.236 \t"
          }),
          i.createElement("polyline", {
            className: "postArrowBox",
            opacity: e.bHidePostArrow ? "0" : "1",
            points:
              "209.29,54.763 249.167,54.763 249.167,201.236 209.29,201.236 \t"
          })
        );
      }
      function k(e) {
        var t = Object(s.a)(
          "SVGIcon_Button",
          "SVGIcon_SteamLogo",
          e && e.className
        );
        return i.createElement(
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
          i.createElement("path", {
            fill: "#ffffff",
            d:
              "M127.374,5.355c-64.404,0-117.167,49.661-122.18,112.77l65.712,27.171 c5.567-3.808,12.293-6.032,19.53-6.032c0.649,0,1.294,0.017,1.934,0.051l29.226-42.354c0-0.202-0.005-0.399-0.005-0.598 c0-25.496,20.74-46.241,46.237-46.241c25.498,0,46.238,20.745,46.238,46.241c0,25.494-20.74,46.242-46.238,46.242 c-0.352,0-0.698-0.011-1.047-0.021l-41.68,29.741c0.022,0.546,0.041,1.095,0.041,1.644c0,19.141-15.569,34.707-34.706,34.707 c-16.796,0-30.843-11.99-34.026-27.869l-46.993-19.43c14.55,51.464,61.831,89.189,117.957,89.189 c67.713,0,122.604-54.893,122.604-122.604C249.979,60.244,195.086,5.355,127.374,5.355"
          }),
          i.createElement("path", {
            fill: "#ffffff",
            d:
              "M82.026,191.387l-15.061-6.22c2.67,5.56,7.285,10.208,13.418,12.767 c13.25,5.521,28.531-0.771,34.054-14.027c2.674-6.416,2.694-13.5,0.04-19.93c-2.646-6.431-7.64-11.451-14.063-14.129 c-6.371-2.647-13.196-2.552-19.198-0.291l15.561,6.437c9.776,4.073,14.396,15.299,10.324,25.071 C103.031,190.841,91.801,195.464,82.026,191.387"
          }),
          i.createElement("path", {
            fill: "#ffffff",
            d:
              "M198.639,96.359c0-16.987-13.82-30.809-30.809-30.809c-16.987,0-30.813,13.821-30.813,30.809 c0,16.988,13.824,30.806,30.813,30.806S198.639,113.347,198.639,96.359 M144.736,96.306c0-12.783,10.363-23.142,23.145-23.142 c12.783,0,23.145,10.359,23.145,23.142c0,12.783-10.36,23.142-23.145,23.142C155.1,119.447,144.736,109.089,144.736,96.306"
          })
        );
      }
      function R() {
        return i.createElement(
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
          i.createElement("path", {
            className: "frontGuy",
            fill: "#666666",
            d:
              "M181.732,53.151c-17.255,0-31.321,13.316-31.321,32.634v25.132 c0,18.005,24.006,21.006,24.382,21.381c-10.691,2.813-30.947,8.252-40.888,15.566c-8.252,6.003-11.44,18.005-13.128,22.882 c-0.75,2.063-1.688,5.064-1.688,7.127c0,0,0,9.94,0,19.881s12.941,16.505,18.005,16.505h89.65c4.877,0,18.006-5.627,18.006-16.505 s0-19.881,0-19.881c0-2.251-0.938-5.627-1.688-7.689c-4.313-10.878-4.688-16.316-13.315-22.319 c-9.941-6.939-30.009-12.19-40.512-15.004c0.374-0.563,24.193-4.127,24.193-22.131V85.785 C213.053,66.467,198.986,53.151,181.732,53.151L181.732,53.151z"
          }),
          i.createElement("path", {
            className: "backGuy",
            fill: "rgb(144, 153, 161)",
            d:
              "M84.204,34.396c-20.068,0-36.385,15.38-36.385,38.074v29.258c0,20.818,27.945,24.382,28.32,24.944 c-12.378,3.189-36.01,9.565-47.638,18.006c-9.753,7.127-13.504,21.006-15.379,26.632c-0.75,2.251-1.876,6.002-1.876,8.253  c0,0,0,11.44,0,23.257c0,11.815,15.004,19.13,20.819,19.13h104.279c5.814,0,20.818-6.564,20.818-19.13c0-12.566,0-23.257,0-23.257 c0-2.438-1.125-6.564-2.063-8.815c-5.063-12.566-5.438-18.942-15.566-26.069c-11.628-8.065-34.885-14.067-47.076-17.443 c0.375-0.563,28.133-4.876,28.133-25.695V72.469C120.59,49.775,104.272,34.396,84.204,34.396L84.204,34.396z"
          })
        );
      }
      function N() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_5",
            className: "SVGIcon_Button SVGIcon_ChatBubble",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 64 64"
          },
          i.createElement(
            "g",
            null,
            i.createElement("path", {
              d:
                "M33,5C18.7,5,7.1,16.6,7.1,30.9c0,5.2,1.5,10.1,4.2,14.1c-0.6,3.7-4.5,10.5-6.2,13.5c-1.3,2.2,11.4-3.8,16.3-4.5c3.5,1.8,7.5,2.8,11.7,2.8c14.3,0,25.9-11.6,25.9-25.9S47.3,5,33,5z"
            })
          )
        );
      }
      function F() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_5",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 64 64"
          },
          i.createElement(
            "g",
            null,
            i.createElement("path", {
              d:
                "M40.6,32.7l15.1-15.1c2.6-2.6,2.6-6.7,0-9.3c-2.6-2.6-6.7-2.6-9.3,0L31.3,23.4L16.2,8.3c-2.6-2.6-6.7-2.6-9.3,0c-2.6,2.6-2.6,6.7,0,9.3L22,32.7L6.9,47.8c-2.6,2.6-2.6,6.7,0,9.3c1.3,1.3,3,1.9,4.7,1.9s3.4-0.6,4.7-1.9L31.3,42l15.1,15.1c1.3,1.3,3,1.9,4.7,1.9s3.4-0.6,4.7-1.9c2.6-2.6,2.6-6.7,0-9.3L40.6,32.7z"
            })
          )
        );
      }
      function T() {
        return i.createElement(
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
          i.createElement(
            "g",
            { className: "leftarrow", opacity: "0" },
            i.createElement("polygon", {
              points: "127.817,4.403 4,128 127.817,251.598"
            })
          ),
          i.createElement(
            "g",
            { className: "rightarrow", opacity: "0" },
            i.createElement("polygon", {
              points: "127.816,4.403 251.633,128 127.816,251.598"
            })
          ),
          i.createElement(
            "g",
            { className: "grabber" },
            i.createElement("polygon", {
              points:
                "145.692,22.132 145.692,234.361 127.817,251.598 110.307,234.361 110.307,22.132 127.817,4.403"
            })
          )
        );
      }
      function P() {
        return i.createElement(
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
          i.createElement("polygon", {
            className: "pointer",
            points:
              "128,154.979 46.374,230.548 46.374,253.333 209.626,253.333 209.626,230.548 \t"
          }),
          i.createElement("rect", {
            className: "line",
            x: "116.271",
            y: "3.168",
            width: "23.459",
            height: "137.332"
          })
        );
      }
      function z() {
        return i.createElement(
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
          i.createElement("path", {
            fill: "#ffffff",
            d:
              "M213.771,68.659c-4.108-7.066-46.007-7.231-49.293-7.231H128H91.522c-3.286,0-45.186,0.165-49.293,7.231 c-19.555,29.248-27.385,100.263-27.276,104.01c0.238,8.294,2.11,24.583,16.595,35.162c9.201,6.72,22.183,8.709,29.083,3.614 c4.989-3.682,11.995-19.224,19.061-32.204c7.064-12.981,9.202-11.174,12.98-12.159c3.78-0.986,36.066-0.74,36.066-0.74 s30.809-0.247,34.588,0.74c3.777,0.985,5.915-0.822,12.98,12.159c7.064,12.98,14.07,28.522,19.061,32.204 c6.9,5.095,19.882,3.106,29.083-3.614c14.485-10.58,16.356-26.868,16.595-35.162C241.154,168.922,233.325,97.906,213.771,68.659z M67.251,128.14c-14.974,0-27.112-12.137-27.112-27.111c0-14.975,12.137-27.112,27.112-27.112 c14.973,0,27.111,12.137,27.111,27.112C94.362,116.003,82.224,128.14,67.251,128.14z M188.749,128.14 c-14.974,0-27.111-12.137-27.111-27.111c0-14.975,12.138-27.112,27.111-27.112c14.973,0,27.111,12.137,27.111,27.112 C215.86,116.003,203.722,128.14,188.749,128.14z"
          })
        );
      }
      function G() {
        return i.createElement(
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
          i.createElement("path", {
            d:
              "M165.693,45.186H91.368c-7.963,0-14.41,6.447-14.41,14.41V210.9c0,7.964,6.447,14.41,14.41,14.41h74.134 c7.965,0,14.41-6.447,14.41-14.41V59.596C180.102,51.633,173.657,45.186,165.693,45.186z M113.172,57.509h30.717 c1.707,0,3.223,1.327,3.223,3.224c0,1.896-1.328,3.223-3.223,3.223h-30.717c-1.707,0-3.223-1.328-3.223-3.223 C109.949,58.837,111.465,57.509,113.172,57.509z M128.529,213.554c-4.551,0-8.152-3.603-8.152-8.153c0-4.55,3.604-8.152,8.152-8.152 s8.151,3.603,8.151,8.152C136.682,209.761,133.081,213.554,128.529,213.554z M169.105,186.819h-81.15V74.384h81.15V186.819 L169.105,186.819z"
          })
        );
      }
      function U() {
        return i.createElement(
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
          i.createElement("path", {
            d:
              "M224.389,62.411H31.613c-10.147,0-18.36,8.214-18.36,18.36v94.453c0,10.147,8.215,18.359,18.36,18.359h192.775 c10.146,0.241,18.358-7.968,18.358-18.116V80.771C242.747,70.625,234.534,62.411,224.389,62.411z M92.317,175.026H71.646 L35.472,79.832h21.895l25.022,72.484l24.343-72.484h21.895L92.317,175.026z M195.264,175.026l-19.175-32.095h-2.176h-14.279 v32.095h-19.991V79.832h35.63c13.056,0,22.664,2.607,28.831,7.819c6.164,5.215,9.247,12.49,9.247,21.827 c0,7.343-1.61,13.463-4.828,18.359c-3.219,4.896-7.729,8.614-13.531,11.151l22.575,36.038H195.264z"
          }),
          i.createElement("path", {
            d:
              "M187.784,100.298c-2.812-2.312-7.391-3.468-13.735-3.468h-14.415v28.966h15.639c5.257,0,9.36-1.336,12.308-4.012 c2.945-2.673,4.42-6.368,4.42-11.083C192,106.078,190.593,102.61,187.784,100.298z"
          })
        );
      }
      function H() {
        return i.createElement(
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
          i.createElement("rect", {
            className: "screen",
            x: "7.756",
            y: "5.518",
            fill: "#292D33",
            width: "112.144",
            height: "234.357"
          }),
          i.createElement("path", {
            className: "frame",
            fill: "#3C414B",
            d:
              "M40.334,15.72h47.237c3.957,0,7.164-3.259,7.164-7.28c0-1.113,0.889-2.017,1.984-2.017h9.746 c7.417,0,13.432,6.108,13.432,13.646v206.156c0,7.538-6.015,13.647-13.431,13.647H21.459c-7.417,0-13.429-6.109-13.429-13.647 V20.071c0-7.536,6.013-13.646,13.429-13.646h9.728c1.096,0,1.983,0.903,1.983,2.017C33.17,12.461,36.377,15.72,40.334,15.72 M107.057,0.001H20.87c-9.922,0-17.965,8.174-17.965,18.256v217.505c0,10.082,8.043,18.256,17.965,18.256h86.188 c9.923,0,17.966-8.174,17.966-18.256V18.257C125.022,8.175,116.979,0.001,107.057,0.001"
          }),
          i.createElement("path", {
            fill: "#3C414B",
            d:
              "M0.826,33.349C0.369,33.349,0,33.725,0,34.189v7.616c0,0.464,0.37,0.84,0.826,0.84s0.827-0.376,0.827-0.84 v-7.617C1.653,33.725,1.283,33.349,0.826,33.349"
          }),
          i.createElement("path", {
            fill: "#3C414B",
            d:
              "M0.826,51.56C0.369,51.56,0,51.936,0,52.4v16.8c0,0.465,0.37,0.841,0.826,0.841s0.827-0.376,0.827-0.841 V52.4C1.653,51.936,1.283,51.56,0.826,51.56"
          }),
          i.createElement("path", {
            fill: "#3C414B",
            d:
              "M0.826,75.304C0.369,75.304,0,75.68,0,76.144v15.904c0,0.464,0.37,0.84,0.826,0.84s0.827-0.376,0.827-0.84 V76.144C1.653,75.68,1.283,75.304,0.826,75.304"
          }),
          i.createElement("path", {
            fill: "#3C414B",
            d:
              "M127.617,58.056c-0.457,0-0.827,0.376-0.827,0.84v27.328c0,0.464,0.37,0.84,0.827,0.84 c0.456,0,0.826-0.376,0.826-0.84V58.896C128.443,58.432,128.073,58.056,127.617,58.056"
          })
        );
      }
      function W() {
        return i.createElement(
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
          i.createElement("polygon", {
            fill: "#3C414B",
            points: "3.167,48.809 127.22,128 252.833,48.809 "
          }),
          i.createElement("polygon", {
            fill: "#3C414B",
            points: "252.833,203.68 252.833,55.439 185.151,99.131 "
          }),
          i.createElement("polygon", {
            fill: "#3C414B",
            points:
              "247.958,207.191 180.47,101.472 128.001,134.24 75.142,101.472 7.849,207.191 "
          }),
          i.createElement("polygon", {
            fill: "#3C414B",
            points: "3.167,203.682 3.167,55.441 70.851,99.132 "
          })
        );
      }
      function V() {
        return i.createElement(
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
          i.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M236.979,138.059c0.548,0.078,6.91,0.101,7.772,0.032 c1.215-0.095,1.396,0.068,1.388,0.708c-0.01,0.397,0.012,3.039-2.365,7.32c-3.301,5.948-12.079,10.436-12.55,10.672 c-0.47,0.233-0.53,0.484-0.136,0.75c0.434,0.295,8.068,1.454,9.084,1.611c1.017,0.154,0.637,1.001,0.637,1.001 s-0.704,2.621-2.895,5.36c-2.189,2.738-9.311,6.123-8.583,6.123c0.731,0,7.187,0.159,6.181,1.422 c-3.019,3.786-13.603,9.528-18.43,13.813c-13.388,11.885-13.217,12.864-15.52,15.09c-0.983-3.298-3.02-12.658-3.02-12.658 l-6.105-11.467c4.413,0.18,6.364,0.081,8.952,0.081c9.214,0,17.525-2.185,22.234-5.841l2.371-1.843l-2.911-0.728 c-2.131-0.528-7.121-1.782-11.896-2.979c2.184-0.104,10.803-1.299,14.413-5.339c0.136-0.151,0.276-0.321,0.406-0.494l1.245-1.664 l-2.404-0.735c-2.607-0.799-5.948-1.682-8.517-2.335c3.173-1.572,7.585-3.942,10.048-6.088c4.83-4.203,7.226-9.709,7.322-9.943 l0.9-2.098l-10.772,0.318c1.503-1.483,3.218-3.197,3.939-3.991c1.43-1.571,4.053-6.221,4.198-9.896l0.072-1.787l-1.763,0.288 c-1.979,0.322-5.301,1.279-8.179,2.173c2.025-2.193,4.296-4.767,5.46-6.484c2.687-3.964,2.76-8.371,2.597-12.916l-0.104-2.881 l-2.261,1.79c-2.559,2.028-7.595,5.031-11.097,7.047c1.538-3.644,3.54-8.752,3.813-11.276c0.5-4.681-0.248-10.196-0.248-10.196 l-10.76,9.394c0.885-1.953,1.684-4.013,2.117-5.832c1.735-7.29,0.055-17.892-0.021-18.338l-0.452-2.807l-7.777,7.739 c0.722-3.535,1.465-8.253,1.23-11.789c-0.426-6.321-2.278-10.517-2.359-10.694l-1.01-2.251l-6.465,8.577 c0.231-4.285,0.27-10.24-0.948-13.547c-1.934-5.262-3.651-8.007-3.723-8.121l-1.232-1.958l-3.057,4.85 c0.018-2.967-0.11-6.475-0.69-8.68c-1.202-4.543-2.825-6.396-3.002-6.592l-1.325-1.433l-1.623,2.705 c-0.278-3.19-1.112-7.084-3.343-9.478l-0.814-0.872l-1.012,0.623c-0.327,0.201-0.714,0.497-1.104,0.823 c-0.154-1.135-0.365-2.451-0.639-3.691c0.563-4.733,1.186-10.03,1.206-10.452c0.027-0.547,0.274-0.767,1.017-0.391 c0.898,0.452,3.156,2.064,5.187,6.133c2.036,4.067,3.132,11.324,3.117,12.044c-0.009,0.383,0.291,0.757,0.438,0.151 c0.145-0.607,0.478-7.591,0.623-8.312c0.081-0.383,0.199-0.484,0.737-0.212c0.496,0.249,2.959,2.181,4.899,6.463 c1.179,2.599,1.634,11.946,1.574,12.653c-0.106,1.278,0.313,0.891,0.339,0.883c-0.009,0.013-0.025,0.04-0.03,0.049 c0.03-0.041,0.036-0.049,0.03-0.049c0.573-0.841,4.21-8.99,4.519-9.377c0.313-0.39,0.521-0.395,0.835,0.002 c0.262,0.33,2.095,1.717,4.049,10.088c1.902,8.135,1.949,11.542,1.848,12.682c-0.08,0.86,0.339,0.993,0.731,0.524 c0.389-0.47,5.104-9.201,5.497-9.515c0.389-0.313,0.613-0.309,0.927,0.161c0.312,0.469,2.718,4.762,3.684,11.448 c0.861,5.947,0.608,13.599,0.375,14.381c-0.235,0.782-0.135,1.077,0.493,0.53c0.623-0.548,10.299-8.412,11.004-9.038 c0.703-0.627,1.18-0.65,1.34-0.046c0.172,0.654,0.822,8.654,0.275,15.225c-0.549,6.571-2.626,12.752-2.94,13.145 c-0.312,0.391,0.087,0.712,0.478,0.555c0.394-0.157,11.902-10.018,12.645-10.402c0.711-0.367,1.043,0.005,1.105,0.507 c0.068,0.544,0.966,3.098-0.419,11.269c-0.959,5.65-3.54,11.876-3.855,12.033c-0.313,0.157-0.077,0.336,0.234,0.259 c0.315-0.079,8.324-3.488,8.872-3.567c0.546-0.079,0.671,0.339,0.514,0.808c-0.158,0.469-0.458,6.273-2.534,11.639 c-2.603,6.732-6.056,11.001-6.056,11.001s-0.252,0.519,0.217,0.519s9.266-0.186,9.813-0.263c0.547-0.079,0.627,0.156,0.547,0.704 c-0.077,0.547,0.858,9.116-8.624,14.601C236.524,137.734,236.432,137.979,236.979,138.059z M174.473,24.823 c1.981,3.34,2.018,9.248,1.836,11.469l-0.52,6.238l5.25-8.744c0.395,0.843,0.85,2.003,1.25,3.524 c1.02,3.877,0.422,13.082,0.417,13.173l-0.384,5.752l6.435-10.212c0.628,1.27,1.45,3.097,2.32,5.459 c1.466,3.983,0.772,13.806,0.381,17.257l-0.602,5.308l9.568-12.69c0.493,1.707,1.058,4.21,1.259,7.227 c0.39,5.821-2.272,15.731-2.299,15.83l-1.428,5.26l11.125-11.068c0.377,3.586,0.772,9.774-0.304,14.302 c-1.2,5.057-5.778,12.588-5.823,12.664l-1.806,3.992l16.878-14.09c-0.116,1.366-0.262,2.944-0.423,4.435 c-0.312,2.935-3.954,11.389-5.335,14.399l-1.827,4.002l3.856-2.115c0.381-0.208,8.027-4.41,12.979-7.778 c-0.039,3.484-0.537,6.042-2.139,8.4c-2.189,3.234-9.05,10.198-9.118,10.268l-4.352,4.408l5.861-2.004 c0.08-0.025,6.868-2.34,11.188-3.41c-0.675,2.445-2.208,5.125-3.11,6.118c-1.319,1.449-6.429,6.429-6.48,6.482l-2.682,2.614 l13.475-0.404c-1.06,1.837-2.89,4.549-5.457,6.783c-3.727,3.244-12.956,7.341-13.048,7.383l-3.952,1.746l4.201,1.008 c0.062,0.015,5.637,1.354,10.266,2.67c-3.412,2.191-9.291,3.081-10.948,3.138c-2.06,0.072-11.075,0.125-11.075,0.125l-11.51,0.069 l11.162,2.804c0,0,12.587,3.164,19.486,4.894c-4.398,2.216-10.717,3.493-17.657,3.493c-3.102,0-10.335-0.284-15.048-0.483 c4.064,6.069,7.041,11.004,7.992,13.681c2.813,7.915,6.777,28.269,6.889,48.907c0.039,6.572-1.081,11.649-9.022,11.649 c-0.288,0-0.597-0.038-0.908-0.092c-1.846,0.339-4.351,0.595-5.438-0.095c-1.805-1.149-3.163-2.627-3.544-3.957 c-0.383-1.334-1.146-9.374-3.106-20.675c-1.92-11.046-4.038-19.431-4.237-19.525c-1.535-0.731-9.358-18.45-9.358-18.45 l-37.23-47.615c0,0-20.737,23.917-37.455,47.8c-0.867,1.235-5.994,11.251-9.275,17.989c-0.212,0.437-0.181,0.475-0.281,0.808 c-0.604,2.015-2.396,9.525-4.039,18.994c-1.962,11.301-2.725,19.341-3.105,20.675c-0.384,1.33-1.74,2.808-3.546,3.957 c-1.085,0.689-3.592,0.434-5.437,0.095c-0.313,0.054-0.621,0.092-0.909,0.092c-7.941,0-9.061-5.077-9.024-11.649 c0.114-20.639,4.078-40.992,6.892-48.907c0.95-2.677,3.926-7.611,7.993-13.681c-4.714,0.199-11.946,0.483-15.051,0.483 c-6.939,0-13.26-1.277-17.653-3.493c6.896-1.729,19.486-4.894,19.486-4.894l11.159-2.804l-11.508-0.069 c0,0-9.019-0.053-11.076-0.125c-1.66-0.057-7.537-0.946-10.949-3.138c4.629-1.315,10.202-2.655,10.264-2.67l4.201-1.008l-3.95-1.746 c-0.094-0.042-9.324-4.139-13.049-7.383c-2.566-2.234-4.397-4.946-5.458-6.783l13.477,0.404l-2.684-2.614 c-0.05-0.054-5.16-5.033-6.48-6.482c-0.9-0.993-2.436-3.673-3.108-6.118c4.319,1.069,11.108,3.384,11.188,3.41l5.861,2.004 l-4.352-4.408c-0.069-0.069-6.928-7.033-9.12-10.268c-1.601-2.358-2.099-4.916-2.139-8.4c4.953,3.368,12.601,7.57,12.98,7.778 l3.858,2.115l-1.829-4.002c-1.379-3.011-5.022-11.465-5.334-14.399c-0.161-1.491-0.305-3.068-0.421-4.435l16.877,14.09l-1.806-3.992 c-0.046-0.076-4.622-7.607-5.821-12.664c-1.078-4.528-0.682-10.716-0.307-14.302L58.57,89.672l-1.426-5.26 c-0.025-0.098-2.688-10.008-2.3-15.83c0.203-3.017,0.767-5.52,1.26-7.227l9.566,12.69l-0.601-5.308 c-0.391-3.451-1.083-13.274,0.381-17.257c0.871-2.362,1.693-4.189,2.32-5.459l6.435,10.212l-0.382-5.752 c-0.006-0.091-0.604-9.295,0.416-13.173c0.401-1.521,0.854-2.681,1.251-3.524l5.249,8.744l-0.52-6.238 c-0.181-2.221-0.144-8.129,1.836-11.469c0.596,0.522,1.248,1.148,1.67,1.575l2.215,2.245l0.276-3.142 c0.162-1.838,0.783-7.003,1.703-8.813c1.342-2.635,4.69-3.91,7.104-4.505c-6.691,13.614-36.889,77.59-36.889,122.937 c0,23.658,16.206,23.931,16.368,23.931c4.881,0,6.947-7.914,6.947-11.063V133.45c0-2.744,1.148-2.744,1.835-2.744 c5.807,0,10.48,3.196,13.855,6.69c8.813-11.615,15.81-20.526,15.81-20.526s0.16-0.182,0.248-0.345 c-1.03-2.443-7.165-16.995-7.165-16.995l1.708-43.717c0,0-0.278-3.797,1.044-6.052c1.314-2.245,4.247-3.175,4.247-3.175 l13.307,41.443c0,0-4.107,0.866-4.107,5.585c0,2.982,2.658,4.99,6.227,5.013c3.572-0.022,6.227-2.031,6.227-5.013 c0-4.719-4.109-5.585-4.109-5.585l13.311-41.443c0,0,2.93,0.93,4.245,3.175c1.322,2.255,1.043,6.052,1.043,6.052l1.709,43.717 l-7.309,17.34c0,0,6.997,8.911,15.809,20.526c3.375-3.494,8.048-6.69,13.855-6.69c0.687,0,1.833,0,1.833,2.744v14.538 c0,3.148,2.068,11.063,6.95,11.063c0.159,0,16.367-0.272,16.367-23.931c0-45.347-30.197-109.322-36.888-122.937 c2.412,0.595,5.761,1.87,7.104,4.505c0.92,1.809,1.541,6.975,1.705,8.813l0.275,3.142l2.213-2.245 C173.226,25.972,173.875,25.345,174.473,24.823z M176.157,181.396c-1.644-2.189-41.07-55.856-41.07-55.856l-6.723,8.809 l-0.946-1.233l-0.829-1.082l-5.053-6.594l-0.095,0.101c0,0-39.427,53.667-41.07,55.856c-1.643,2.191-4.777,6.708-6.058,9.322 c-1.279,2.614-8.946,39.306-8.946,42.592c0,2.005,0.041,8.618,0.071,13.47c1.536,0.2,3.411,0.761,4.357,0.125 c1.624-1.093,2.363-2.323,2.491-3.372c0.128-1.048,1.367-12.969,2.69-20.812c1.779-10.547,4.571-19.005,4.415-18.97 c3.213-6.672,8.966-17.938,9.887-19.252c17.808-25.439,38.994-49.947,38.994-49.947s21.166,24.502,38.978,49.947 c0.921,1.313,6.672,12.58,9.888,19.252c-0.158-0.035,2.635,8.423,4.414,18.97c1.322,7.843,2.562,19.764,2.688,20.812 c0.131,1.049,0.87,2.279,2.493,3.372c0.944,0.636,2.818,0.075,4.355-0.125c0.032-4.852,0.073-11.465,0.073-13.47 c0-3.286-7.667-39.978-8.948-42.592C180.936,188.104,177.801,183.588,176.157,181.396z M82.538,21.517l-1.014-0.623l-0.813,0.872 c-2.231,2.394-3.063,6.287-3.342,9.478l-1.624-2.705l-1.323,1.433c-0.179,0.197-1.801,2.049-3.004,6.592 c-0.581,2.205-0.709,5.712-0.689,8.68l-3.057-4.85l-1.234,1.958c-0.072,0.114-1.787,2.859-3.722,8.121 c-1.22,3.307-1.179,9.262-0.949,13.547l-6.463-8.577l-1.012,2.251c-0.08,0.177-1.934,4.373-2.359,10.694 c-0.234,3.536,0.51,8.253,1.231,11.789l-7.778-7.739l-0.453,2.807c-0.073,0.446-1.754,11.048-0.02,18.338 c0.433,1.819,1.231,3.879,2.117,5.832l-10.759-9.394c0,0-0.749,5.515-0.248,10.196c0.271,2.523,2.272,7.632,3.813,11.276 c-3.503-2.016-8.539-5.019-11.099-7.047l-2.259-1.79l-0.106,2.881c-0.162,4.545-0.087,8.952,2.6,12.916 c1.161,1.717,3.433,4.291,5.459,6.484c-2.877-0.894-6.201-1.851-8.179-2.173l-1.763-0.288l0.071,1.787 c0.148,3.675,2.771,8.324,4.198,9.896c0.723,0.794,2.436,2.508,3.941,3.991L21.93,137.83l0.896,2.098 c0.1,0.234,2.493,5.74,7.324,9.943c2.464,2.146,6.876,4.516,10.047,6.088c-2.57,0.653-5.908,1.536-8.518,2.335l-2.402,0.735 l1.246,1.664c0.13,0.173,0.27,0.343,0.407,0.494c3.608,4.04,12.229,5.234,14.412,5.339c-4.774,1.197-9.767,2.451-11.896,2.979 l-2.911,0.728l2.371,1.843c4.708,3.656,13.02,5.841,22.233,5.841c2.588,0,4.539,0.099,8.954-0.081l-6.105,11.467 c0,0-2.038,9.36-3.02,12.658c-2.304-2.226-2.133-3.205-15.52-15.09c-4.829-4.284-15.411-10.026-18.429-13.813 c-1.005-1.263,5.449-1.422,6.179-1.422c0.73,0-6.393-3.385-8.582-6.123c-2.191-2.739-2.895-5.36-2.895-5.36s-0.38-0.847,0.637-1.001 c1.018-0.157,8.65-1.316,9.084-1.611c0.395-0.266,0.332-0.517-0.137-0.75c-0.469-0.236-9.248-4.724-12.548-10.672 c-2.375-4.281-2.357-6.923-2.364-7.32c-0.01-0.64,0.17-0.803,1.385-0.708c0.862,0.068,7.226,0.046,7.774-0.032 c0.546-0.08,0.453-0.324,0.019-0.576c-9.483-5.484-8.546-14.054-8.624-14.601c-0.079-0.548,0-0.783,0.548-0.704 c0.546,0.077,9.342,0.263,9.812,0.263c0.469,0,0.218-0.519,0.218-0.519s-3.452-4.27-6.056-11.001 c-2.077-5.366-2.377-11.169-2.533-11.639c-0.157-0.469-0.034-0.887,0.514-0.808c0.549,0.079,8.558,3.488,8.87,3.567 c0.313,0.077,0.548-0.103,0.235-0.259c-0.314-0.157-2.896-6.383-3.855-12.033c-1.384-8.17-0.488-10.725-0.42-11.269 c0.063-0.502,0.397-0.874,1.105-0.507c0.743,0.385,12.255,10.245,12.646,10.402c0.391,0.157,0.79-0.164,0.477-0.555 c-0.313-0.392-2.392-6.574-2.938-13.145c-0.548-6.571,0.1-14.571,0.274-15.225c0.161-0.604,0.635-0.581,1.339,0.046 c0.704,0.626,10.381,8.489,11.006,9.038c0.625,0.547,0.727,0.252,0.492-0.53c-0.235-0.782-0.484-8.435,0.375-14.381 c0.965-6.686,3.372-10.979,3.685-11.448s0.536-0.474,0.927-0.161c0.391,0.313,5.106,9.045,5.497,9.515 c0.391,0.469,0.809,0.336,0.732-0.524c-0.104-1.14-0.057-4.547,1.845-12.682c1.956-8.371,3.789-9.758,4.052-10.088 c0.313-0.396,0.521-0.392,0.833-0.002c0.309,0.387,3.945,8.536,4.519,9.377c-0.005,0,0,0.008,0.031,0.049 c-0.007-0.009-0.022-0.036-0.031-0.049c0.025,0.008,0.446,0.395,0.34-0.883c-0.058-0.707,0.396-10.055,1.574-12.653 c1.941-4.282,4.404-6.214,4.899-6.463c0.54-0.272,0.658-0.171,0.737,0.212c0.146,0.721,0.478,7.705,0.625,8.312 c0.146,0.606,0.444,0.232,0.437-0.151c-0.015-0.72,1.081-7.977,3.115-12.044c2.033-4.069,4.292-5.681,5.188-6.133 c0.742-0.376,0.989-0.156,1.018,0.391c0.022,0.422,0.645,5.719,1.206,10.452c-0.272,1.24-0.484,2.556-0.639,3.691 C83.251,22.014,82.866,21.718,82.538,21.517z M127.35,141.814c-1.158,12.032-4.978,23.045-6.326,29.486 c-1.643,7.849-4.788,18.061-6.793,20.931c-4.433,6.343-18.036,18.547-20.403,19.732c-1.094,0.547-6.376-4.115-6.56-4.846 c-0.182-0.728,2.883-3.993,2.154-3.627c-0.731,0.364-4.104,0.906-5.06,0.87c-0.753-0.026,0.633-2.728,0.633-2.728 s-1.484,2.217-3.021,2.947c-0.03,0.015,9.433-18.119,9.433-18.119S127.52,140.043,127.35,141.814z M119.7,169.39l3.104-10.647 l-1.869-0.559l-3.152,10.656L119.7,169.39z M114.072,167.242l4.687-10.051l-1.764-0.838l-4.735,10.055L114.072,167.242z  M126.961,159.319l-0.82,11.06l-1.991-0.139l0.867-11.079L126.961,159.319z M131.727,170.391l-1.986,0.167l-0.828-11.078 l1.944-0.144L131.727,170.391z M164.422,186.462c0,0,9.463,18.134,9.434,18.119c-1.54-0.73-3.021-2.947-3.021-2.947 s1.384,2.701,0.633,2.728c-0.957,0.036-4.33-0.506-5.06-0.87c-0.731-0.366,2.334,2.899,2.153,3.627 c-0.185,0.73-5.467,5.393-6.56,4.846c-2.368-1.186-15.973-13.39-20.404-19.732c-2.007-2.87-5.149-13.082-6.792-20.931 c-1.349-6.441-4.621-17.127-5.778-29.16C128.854,140.373,164.422,186.462,164.422,186.462z M142.029,167.242l1.813-0.834 l-4.735-10.055l-1.762,0.838L142.029,167.242z M136.402,169.39l1.917-0.55l-3.152-10.656l-1.868,0.559L136.402,169.39z"
          })
        );
      }
      function Y() {
        return i.createElement(
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
          i.createElement("path", {
            className: "CCBox",
            fill: "none",
            stroke: "#000000",
            strokeWidth: "10",
            strokeMiterlimit: "10",
            d:
              "M238,210c0,6.627-5.373,12-12,12H30 c-6.627,0-12-5.373-12-12V46c0-6.627,5.373-12,12-12h196c6.627,0,12,5.373,12,12V210z"
          }),
          i.createElement("path", {
            className: "C1",
            d:
              "M90.505,173.207c11.431,0,22.338-4.276,30.72-12.036c2.6-2.407,2.753-6.47,0.347-9.068c-2.41-2.604-6.47-2.757-9.072-0.349 c-5.998,5.559-13.811,8.62-21.995,8.62c-17.852,0-32.373-14.524-32.373-32.372c0-17.849,14.521-32.373,32.373-32.373 c8.177,0,15.981,3.055,21.979,8.603c2.603,2.407,6.662,2.25,9.072-0.353c2.407-2.602,2.249-6.662-0.353-9.068 c-8.375-7.751-19.276-12.019-30.694-12.019c-24.931,0-45.209,20.281-45.209,45.209C45.3,152.93,65.574,173.207,90.505,173.207z"
          }),
          i.createElement("path", {
            className: "C1",
            d:
              "M177.926,173.207c11.431,0,22.338-4.276,30.721-12.036c2.6-2.407,2.754-6.47,0.347-9.068 c-2.41-2.604-6.47-2.757-9.072-0.349c-5.998,5.559-13.812,8.62-21.995,8.62c-17.852,0-32.372-14.524-32.372-32.372 c0-17.849,14.521-32.373,32.372-32.373c8.178,0,15.981,3.055,21.979,8.603c2.604,2.407,6.663,2.25,9.072-0.353 c2.407-2.602,2.25-6.662-0.353-9.068c-8.375-7.751-19.277-12.019-30.694-12.019c-24.932,0-45.209,20.281-45.209,45.209 C132.721,152.93,152.996,173.207,177.926,173.207z"
          })
        );
      }
      function K() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Hidden",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          i.createElement("path", {
            fill: "none",
            stroke: "#FFFFFF",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d: "M62.499,172.263 c-32.755-16.197-47.415-39.509-47.415-39.509"
          }),
          i.createElement("path", {
            fill: "none",
            stroke: "#FFFFFF",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d:
              "M177.948,85.392 c48.213,14.998,68.451,47.362,68.451,47.362s-36.393,54.737-115.689,54.737c-17.938,0-33.591-2.671-47.096-6.832"
          }),
          i.createElement("path", {
            fill: "none",
            stroke: "#FFFFFF",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d:
              "M15.084,132.754 c0,0,32.933-56.576,115.674-54.785c8.505,0.185,16.486,0.913,23.96,2.072"
          }),
          i.createElement("path", {
            fill: "none",
            stroke: "#FFFFFF",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d:
              "M93.981,141.131 c-0.475-2.385-0.725-4.852-0.725-7.377c0-20.711,16.789-37.5,37.5-37.5c2.42,0,4.787,0.229,7.08,0.668"
          }),
          i.createElement("path", {
            fill: "none",
            stroke: "#FFFFFF",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d:
              "M156.528,106.512 c7.223,6.836,11.729,16.513,11.729,27.242c0,20.711-16.789,37.5-37.5,37.5c-10.609,0-20.189-4.405-27.012-11.487"
          }),
          i.createElement("line", {
            fill: "none",
            stroke: "#FFFFFF",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            x1: "53.007",
            y1: "210.504",
            x2: "208.507",
            y2: "55.004"
          })
        );
      }
      function q() {
        return i.createElement(
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
          i.createElement("path", {
            d:
              "M171.176,136.219c-5.516-5.516-14.166-5.948-20.223-1.406L92.125,75.984l-8.002-29.738c-0.324-1.406-1.73-3.027-3.028-3.785 L46.49,24.186c-1.298-0.648-3.136-0.433-4.218,0.648L25.295,41.813c-0.974,0.973-1.298,2.92-0.649,4.217l18.276,34.605 c0.648,1.297,2.379,2.596,3.785,3.027l29.739,8.003l58.828,58.828c-4.542,6.056-4.109,14.707,1.405,20.222l56.882,56.882 c6.056,6.056,15.896,6.056,21.845,0l12.544-12.544c6.056-6.056,6.056-15.788,0-21.845L171.176,136.219z"
          }),
          i.createElement("path", {
            d:
              "M153.116,122.16c2.271-0.648,4.65-0.973,7.138-0.973c0.865,0,1.622,0,2.486,0.107l26.928-26.927 c12.328,2.92,25.846-0.324,35.361-9.948c9.517-9.625,12.869-23.034,9.949-35.254l-20.33,20.33l-21.845-5.84l-5.84-21.952 l20.331-20.33c-12.221-2.92-25.738,0.324-35.254,9.948c-9.625,9.625-12.869,23.143-9.949,35.362L129.866,98.91L153.116,122.16z"
          }),
          i.createElement("path", {
            d:
              "M99.371,129.406l-32.226,32.226c-12.328-2.92-25.845,0.324-35.362,9.948c-9.517,9.625-12.869,23.034-9.949,35.254 l20.331-20.33l21.953,5.84l5.839,21.952l-20.331,20.33c12.22,2.92,25.737-0.324,35.254-9.949 c9.625-9.624,12.869-23.142,9.949-35.361l27.035-27.035c-0.325-3.136,0-6.38,0.865-9.517L99.371,129.406z"
          })
        );
      }
      function X() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_3_copy",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 256 256"
          },
          i.createElement(
            "g",
            { id: "Layer_3_copy" },
            i.createElement(
              "g",
              { id: "g4768_1_", transform: "translate(-6.9308024,-10)" },
              i.createElement("g", { id: "g4763_1_" })
            ),
            i.createElement("path", {
              d:
                "M206.3,36.6c-19.4,0-35.8,14.1-40.3,33H24.8c-6,0-10.8,4.8-10.8,10.8s4.8,10.8,10.8,10.8h141.3\r\n\t\t\t\tc4.7,18.6,20.9,32.4,40.2,32.4c22.9,0,41.5-19.5,41.5-43.5C247.9,56.2,229.2,36.6,206.3,36.6z M206.3,109.7\r\n\t\t\t\tc-15.2,0-27.5-13.2-27.5-29.5c0-16.3,12.4-29.5,27.5-29.5s27.5,13.2,27.5,29.5C233.9,96.4,221.5,109.7,206.3,109.7z"
            }),
            i.createElement("path", {
              d:
                "M230.4,157.3H107.9c-4.6-14.6-18.3-25.2-34.3-25.2s-29.7,10.6-34.3,25.2H24.8c-6,0-10.8,4.8-10.8,10.8\r\n\t\t\t\tS18.9,179,24.8,179h14.3c4.6,14.6,18.3,25.2,34.3,25.2s29.7-10.6,34.3-25.2h122.5c6,0,10.8-4.8,10.8-10.8S236.4,157.3,230.4,157.3z\r\n\t\t\t\tM73.5,189.8c-8,0-14.9-4.3-18.7-10.8l0,0c-0.7-1.2-1.3-2.4-1.7-3.7c0,0,0-0.1,0-0.1c-0.1-0.4-0.2-0.8-0.4-1.2c0-0.1,0-0.1,0-0.2\r\n\t\t\t\tc-0.2-0.8-0.4-1.7-0.5-2.6c0-0.1,0-0.2,0-0.3c0-0.3-0.1-0.7-0.1-1c0-0.1,0-0.2,0-0.4c0-0.4,0-0.9,0-1.3s0-0.9,0-1.3\r\n\t\t\t\tc0-0.1,0-0.2,0-0.4c0-0.3,0.1-0.7,0.1-1c0-0.1,0-0.2,0-0.3c0.1-0.9,0.3-1.8,0.5-2.6c0-0.1,0-0.1,0-0.2c0.1-0.4,0.2-0.8,0.4-1.2\r\n\t\t\t\tc0,0,0-0.1,0-0.1c0.5-1.3,1-2.6,1.7-3.7c3.7-6.4,10.7-10.8,18.7-10.8c8,0,14.9,4.3,18.7,10.8c0.7,1.2,1.3,2.4,1.7,3.7\r\n\t\t\t\tc0,0,0,0.1,0,0.1c0.1,0.4,0.3,0.8,0.4,1.2c0,0.1,0,0.1,0,0.2c0.2,0.8,0.4,1.7,0.5,2.6c0,0.1,0,0.2,0,0.3c0,0.3,0.1,0.7,0.1,1\r\n\t\t\t\tc0,0.1,0,0.2,0,0.4c0,0.4,0,0.9,0,1.3s0,0.9,0,1.3c0,0.1,0,0.2,0,0.4c0,0.3-0.1,0.7-0.1,1c0,0.1,0,0.2,0,0.3\r\n\t\t\t\tc-0.1,0.9-0.3,1.8-0.5,2.6c0,0.1,0,0.1,0,0.2c-0.1,0.4-0.2,0.8-0.4,1.2c0,0,0,0.1,0,0.1c-0.5,1.3-1,2.6-1.7,3.7l0,0\r\n\t\t\t\tC88.5,185.4,81.5,189.8,73.5,189.8z"
            })
          )
        );
      }
      function Z() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 256 256"
          },
          i.createElement("circle", { cx: "126", cy: "134", r: "20.6" }),
          i.createElement("circle", { cx: "189.4", cy: "134", r: "20.6" }),
          i.createElement("circle", { cx: "62.6", cy: "134", r: "20.6" })
        );
      }
      function J(e) {
        return i.createElement(
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
          i.createElement("path", {
            d:
              "M109.9,96.2H302c16.3,0,29.6,13,29.6,29v101.4c0,16-13.2,29-29.6,29h-90.1l-57.6,57.9L138,255.6h-28.1\r\n\t\t\t\tc-16.3,0-29.6-13-29.6-29V125.2C80.4,109.2,93.6,96.2,109.9,96.2z"
          })
        );
      }
      function Q(e) {
        return i.createElement(
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
          i.createElement("path", {
            d:
              "M225.1,328.8c-12.6,0-15.3-1.9-29.5-5.3c-18.7-4.8-35.3-6.3-51-5.3c-3.5,0.5-7.1,0.5-10.6,1l-7.6,1\r\n\t\t\t\tc-2.5,0.5-4.5-1-5.6-3.4c-12.6-36.2-16.6-74.7-11.6-117.6c0-2.4,2-3.9,4.5-4.3l4.5-0.5c3.5-0.5,6.6-1,10.1-1c5-0.5,9.6-2.9,13.1-7.2\r\n\t\t\t\tl0.5-1c0.5-0.5,1-1.4,1.5-2.4c9.1-14.5,22.2-25.6,36.8-37.6c7.6-6.3,14.1-12.5,20.2-18.3c6.6-7.2,10.1-16.4,10.6-27\r\n\t\t\t\tc0-9.6,5.6-15.4,16.1-16.4c13.6-1,22.7,3.9,27.8,15.9c7.6,16.4-4.4,33.3-13.9,50.6c-2,3.9-4.5,7.2-7.1,10.6c-1,1.4-2,2.9-3,4.3\r\n\t\t\t\tl-3.5,4.8c-1.5,1.9-3,3.9-4.5,6.3c4,0,7.6,0,11.6,0c11.1-0.5,34.6-0.5,46.7,1.4c7.6,1,13.6,4.8,17.7,10.1c3.5,4.8,4.5,11.1,3,17.8\r\n\t\t\t\tc-0.5,2.9-2,5.8-5,9.2c-1.5,1.9-14.4,3.9-16.5,5.3h10.9c2.5,1.9,5,3.9,7.1,6.3c4,4.3,5.6,9.2,5,14.9c-0.5,5.3-3,10.6-7.6,14\r\n\t\t\t\tc-2.5,1.9-16,3.9-18.5,5.3c5,5.3,18,12.1,16.5,19.3c-2,9.6-7.6,15.4-18.2,17.8c2.5,3.9,3,8.7,1.5,13.5c-0.5,2.4-1.5,4.3-2.5,6.3\r\n\t\t\t\tc-2.5,5.3-6.6,8.2-13.1,9.6C253.2,327.8,233.7,328.8,225.1,328.8z"
          })
        );
      }
      function $(e) {
        var t = e.className;
        Object(r.f)(e, ["className"]);
        return i.createElement(
          "svg",
          {
            className: Object(s.a)(t, "SVGIcon_Button"),
            width: "59px",
            height: "59px",
            viewBox: "0 0 59 59",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          },
          i.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M57.9907 30.2382L57.9932 30.1318L23.3635 58.4652L23.159 58.2152L23.0596 58.295C9.86456 55.3567 0 43.5804 0 29.5C0 13.2076 13.2076 0 29.5 0C45.7683 0 58.9609 13.1684 59 29.4275L57.9907 30.2382ZM57.9886 28.6833C52.956 26.4605 41.9077 24.7254 31.9404 33.2687C22.1502 41.6604 21.6264 52.0873 22.7598 57.1984C10.2728 54.1704 1 42.9181 1 29.5C1 13.7599 13.7599 1 29.5 1C44.967 1 57.5563 13.3209 57.9886 28.6833ZM57.2445 29.4523L23.7148 56.8857C22.676 52.0493 23.1845 42.0909 32.5912 34.028C41.9759 25.984 52.3311 27.4183 57.2445 29.4523Z",
            fill: ""
          })
        );
      }
      function ee(e) {
        var t = e.className;
        Object(r.f)(e, ["className"]);
        return i.createElement(
          "svg",
          {
            className: Object(s.a)(t, "SVGIcon_Button"),
            width: "60px",
            height: "52px",
            viewBox: "0 0 60 52",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          },
          i.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M0.5 5.5C0.5 2.46243 2.96243 0 6 0H54C57.0376 0 59.5 2.46243 59.5 5.5V35C59.5 38.0376 57.0376 40.5 54 40.5H52.5C51.6716 40.5 51 41.1716 51 42V50.0858C51 51.4221 49.3843 52.0914 48.4393 51.1464L37.7929 40.5H6C2.96243 40.5 0.5 38.0376 0.5 35V5.5ZM6 1C3.51472 1 1.5 3.01472 1.5 5.5V35C1.5 37.4853 3.51472 39.5 6 39.5H38H38.2071L38.3536 39.6464L49.1464 50.4393C49.4614 50.7543 50 50.5312 50 50.0858V42C50 40.6193 51.1193 39.5 52.5 39.5H54C56.4853 39.5 58.5 37.4853 58.5 35V5.5C58.5 3.01472 56.4853 1 54 1H6ZM30 32C36.6274 32 42 26.6274 42 20C42 13.3726 36.6274 8 30 8C23.3726 8 18 13.3726 18 20C18 26.6274 23.3726 32 30 32ZM30 33C37.1797 33 43 27.1797 43 20C43 12.8203 37.1797 7 30 7C22.8203 7 17 12.8203 17 20C17 27.1797 22.8203 33 30 33ZM26.5 18C27.3284 18 28 17.3284 28 16.5C28 15.6716 27.3284 15 26.5 15C25.6716 15 25 15.6716 25 16.5C25 17.3284 25.6716 18 26.5 18ZM35 16.5C35 17.3284 34.3284 18 33.5 18C32.6716 18 32 17.3284 32 16.5C32 15.6716 32.6716 15 33.5 15C34.3284 15 35 15.6716 35 16.5ZM24.5 22C24.5 24.4853 26.5147 26.5 29 26.5H31C33.4853 26.5 35.5 24.4853 35.5 22H34.5C34.5 23.933 32.933 25.5 31 25.5H29C27.067 25.5 25.5 23.933 25.5 22H24.5Z",
            fill: ""
          })
        );
      }
      function te(e) {
        var t = e.className;
        Object(r.f)(e, ["className"]);
        return i.createElement(
          "svg",
          {
            className: Object(s.a)(t, "SVGIcon_Button"),
            width: "60px",
            height: "52px",
            viewBox: "0 0 60 52",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          },
          i.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M6 0C2.96243 0 0.5 2.46243 0.5 5.5V35C0.5 38.0376 2.96243 40.5 6 40.5H37.7929L48.4393 51.1464C49.3843 52.0914 51 51.4221 51 50.0858V42C51 41.1716 51.6716 40.5 52.5 40.5H54C57.0376 40.5 59.5 38.0376 59.5 35V5.5C59.5 2.46243 57.0376 0 54 0H6ZM1.5 5.5C1.5 3.01472 3.51472 1 6 1H54C56.4853 1 58.5 3.01472 58.5 5.5V35C58.5 37.4853 56.4853 39.5 54 39.5H52.5C51.1193 39.5 50 40.6193 50 42V50.0858C50 50.5312 49.4614 50.7543 49.1464 50.4393L38.3536 39.6464L38.2071 39.5H38H6C3.51472 39.5 1.5 37.4853 1.5 35V5.5ZM16 8.88154L17.8736 13.9448C18.0761 14.4922 18.5078 14.9239 19.0552 15.1264L24.1185 17L19.0552 18.8736C18.5078 19.0761 18.0761 19.5078 17.8736 20.0552L16 25.1185L14.1264 20.0552C13.9239 19.5078 13.4922 19.0761 12.9448 18.8736L7.88154 17L12.9448 15.1264C13.4922 14.9239 13.9239 14.4922 14.1264 13.9448L16 8.88154ZM15.0621 8.53451C15.3843 7.66389 16.6157 7.66389 16.9379 8.5345L18.8114 13.5978C18.9127 13.8715 19.1285 14.0873 19.4022 14.1886L24.4655 16.0621C25.3361 16.3843 25.3361 17.6157 24.4655 17.9379L19.4022 19.8114C19.1285 19.9127 18.9127 20.1285 18.8114 20.4022L16.9379 25.4655C16.6157 26.3361 15.3843 26.3361 15.0621 25.4655L13.1886 20.4022C13.0873 20.1285 12.8715 19.9127 12.5978 19.8114L7.53451 17.9379C6.66389 17.6157 6.66389 16.3843 7.5345 16.0621L12.5978 14.1886C12.8715 14.0873 13.0873 13.8715 13.1886 13.5978L15.0621 8.53451ZM32.8736 23.9448L31 18.8815L29.1264 23.9448C28.9239 24.4922 28.4922 24.9239 27.9448 25.1264L22.8815 27L27.9448 28.8736C28.4922 29.0761 28.9239 29.5078 29.1264 30.0552L31 35.1185L32.8736 30.0552C33.0761 29.5078 33.5078 29.0761 34.0552 28.8736L39.1185 27L34.0552 25.1264C33.5078 24.9239 33.0761 24.4922 32.8736 23.9448ZM31.9379 18.5345C31.6157 17.6639 30.3843 17.6639 30.0621 18.5345L28.1886 23.5978C28.0873 23.8715 27.8715 24.0873 27.5978 24.1886L22.5345 26.0621C21.6639 26.3843 21.6639 27.6157 22.5345 27.9379L27.5978 29.8114C27.8715 29.9127 28.0873 30.1285 28.1886 30.4022L30.0621 35.4655C30.3843 36.3361 31.6157 36.3361 31.9379 35.4655L33.8114 30.4022C33.9127 30.1285 34.1285 29.9127 34.4022 29.8114L39.4655 27.9379C40.3361 27.6157 40.3361 26.3843 39.4655 26.0621L34.4022 24.1886C34.1285 24.0873 33.9127 23.8715 33.8114 23.5978L31.9379 18.5345ZM43 4.88154L44.8736 9.9448C45.0761 10.4922 45.5078 10.9239 46.0552 11.1264L51.1185 13L46.0552 14.8736C45.5078 15.0761 45.0761 15.5078 44.8736 16.0552L43 21.1185L41.1264 16.0552C40.9239 15.5078 40.4922 15.0761 39.9448 14.8736L34.8815 13L39.9448 11.1264C40.4922 10.9239 40.9239 10.4922 41.1264 9.9448L43 4.88154ZM42.0621 4.53451C42.3843 3.66389 43.6157 3.66389 43.9379 4.5345L45.8114 9.59776C45.9127 9.87148 46.1285 10.0873 46.4022 10.1886L51.4655 12.0621C52.3361 12.3843 52.3361 13.6157 51.4655 13.9379L46.4022 15.8114C46.1285 15.9127 45.9127 16.1285 45.8114 16.4022L43.9379 21.4655C43.6157 22.3361 42.3843 22.3361 42.0621 21.4655L40.1886 16.4022C40.0873 16.1285 39.8715 15.9127 39.5978 15.8114L34.5345 13.9379C33.6639 13.6157 33.6639 12.3843 34.5345 12.0621L39.5978 10.1886C39.8715 10.0873 40.0873 9.87148 40.1886 9.59776L42.0621 4.53451Z",
            fill: ""
          })
        );
      }
      function ne(e) {
        var t = e.className;
        Object(r.f)(e, ["className"]);
        return i.createElement(
          "svg",
          {
            className: Object(s.a)(t, "SVGIcon_Button"),
            width: "78px",
            height: "59px",
            viewBox: "0 0 78 59",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          },
          i.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M3 2H75C75.5523 2 76 2.44772 76 3V25.6362L68.5063 32.7893L55.6643 18.4365L54.9851 17.6774L54.2386 18.3705L47.6334 24.504L33.3138 11.2072L32.6449 10.5861L31.9655 11.1958L17.0936 24.5423L12.5854 20.7277L11.9914 20.2251L11.3582 20.6773L2 27.3618V3C2 2.44772 2.44772 2 3 2ZM2 44.3885V55.898C2 56.4502 2.44772 56.898 3 56.898H75C75.5523 56.898 76 56.4502 76 55.898V44.4179L70.3673 42.7281C69.6315 42.5074 68.8478 42.5032 68.1097 42.716L62.7717 44.2552C61.5774 44.5995 60.3057 44.5645 59.1323 44.1549L55.3406 42.8316C54.5367 42.5511 53.6643 42.5343 52.8502 42.7838L48.1375 44.2284C46.9576 44.5901 45.6948 44.5791 44.5213 44.197L40.1648 42.7783C39.397 42.5283 38.5714 42.5165 37.7968 42.7446L32.6112 44.271C31.4845 44.6027 30.2852 44.5963 29.162 44.2528L24.2385 42.7469C23.483 42.5158 22.6759 42.5137 21.9192 42.7407L16.9269 44.2384C15.7429 44.5936 14.4782 44.5744 13.3055 44.1835L9.22505 42.8234C8.40398 42.5497 7.5163 42.5497 6.69523 42.8234L2 44.3885ZM2 42.2803L6.06277 40.926C7.29438 40.5155 8.62591 40.5155 9.85751 40.926L13.9379 42.2862C14.7197 42.5468 15.5629 42.5595 16.3522 42.3227L21.3445 40.8251C22.4796 40.4845 23.6902 40.4878 24.8235 40.8344L29.747 42.3403C30.4957 42.5693 31.2953 42.5735 32.0464 42.3524L37.232 40.826C38.394 40.4839 39.6323 40.5016 40.7841 40.8766L45.1406 42.2953C45.9229 42.55 46.7647 42.5573 47.5514 42.3162L52.2641 40.8716C53.4852 40.4974 54.7938 40.5225 55.9996 40.9433L59.7913 42.2667C60.5736 42.5397 61.4214 42.563 62.2176 42.3335L67.5556 40.7943C68.6627 40.4751 69.8383 40.4814 70.942 40.8125L76 42.3299V28.4011L69.1402 34.9491L68.3931 35.6622L67.7044 34.8925L54.8531 20.5292L44.4567 30.183L43.0958 28.7174L46.1637 25.8686L32.6219 13.294L18.6349 25.8464L22.9324 29.4828L21.6405 31.0095L16.467 26.632L11.8875 22.7571L2 29.8196V42.2803ZM0 3C0 1.34315 1.34315 0 3 0H75C76.6569 0 78 1.34315 78 3V55.898C78 57.5548 76.6569 58.898 75 58.898H3C1.34315 58.898 0 57.5548 0 55.898V3ZM17.6094 13.1832C18.414 11.5742 18.9328 10.7593 19.4551 10.3118C19.8967 9.93322 20.4163 9.75659 21.4905 9.75659C22.0428 9.75659 22.4905 9.30888 22.4905 8.75659C22.4905 8.20431 22.0428 7.75659 21.4905 7.75659C20.177 7.75659 19.1047 7.97793 18.1535 8.79321C17.4662 9.38227 16.9009 10.2384 16.3059 11.3474C13.8336 10.1236 11.0561 10.2073 9.15781 11.0209C8.65018 11.2384 8.41503 11.8263 8.63259 12.334C8.85014 12.8416 9.43802 13.0767 9.94565 12.8592C11.5101 12.1887 14.0696 12.1744 16.1604 13.568L17.1028 14.1963L17.6094 13.1832ZM62.8781 15.5106C64.8505 15.5106 66.4495 13.9116 66.4495 11.9392C66.4495 9.96674 64.8505 8.36776 62.8781 8.36776C60.9056 8.36776 59.3066 9.96674 59.3066 11.9392C59.3066 13.9116 60.9056 15.5106 62.8781 15.5106ZM62.8781 17.5106C65.9551 17.5106 68.4495 15.0162 68.4495 11.9392C68.4495 8.86217 65.9551 6.36776 62.8781 6.36776C59.8011 6.36776 57.3066 8.86217 57.3066 11.9392C57.3066 15.0162 59.8011 17.5106 62.8781 17.5106Z",
            fill: ""
          })
        );
      }
      function re(e) {
        var t = e.className;
        Object(r.f)(e, ["className"]);
        return i.createElement(
          "svg",
          {
            className: Object(s.a)(t, "SVGIcon_Button"),
            width: "46px",
            height: "62px",
            viewBox: "0 0 46 62",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          },
          i.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M24.425 1.87316L27.6636 5.16235C28.5084 6.02034 29.6947 6.45213 30.8934 6.33789L35.4885 5.89995C36.6002 5.794 37.5833 6.61889 37.672 7.73207L38.0386 12.3335C38.1343 13.5337 38.7655 14.6271 39.7571 15.31L43.5587 17.9282C44.4784 18.5616 44.7013 19.8255 44.0537 20.7352L41.3768 24.4958C40.6786 25.4767 40.4594 26.72 40.78 27.8806L42.0092 32.3299C42.3066 33.4063 41.6649 34.5176 40.5841 34.7983L36.1163 35.9584C34.9508 36.261 33.9837 37.0725 33.4833 38.1677L31.565 42.3662C31.101 43.3819 29.895 43.8208 28.8867 43.341L24.7184 41.3579C23.6311 40.8405 22.3687 40.8405 21.2814 41.3579L17.1131 43.341C16.1047 43.8208 14.8988 43.3819 14.4347 42.3662L12.5164 38.1677C12.0161 37.0725 11.0489 36.261 9.88351 35.9584L5.41569 34.7983C4.33483 34.5176 3.69318 33.4063 3.99056 32.3299L5.21979 27.8806C5.54043 26.72 5.32121 25.4767 4.62295 24.4958L1.9461 20.7352C1.29852 19.8255 1.52136 18.5617 2.44105 17.9282L6.24264 15.31C7.23429 14.6271 7.86553 13.5337 7.96117 12.3335L8.32782 7.73206C8.41652 6.61889 9.39959 5.794 10.5112 5.89995L15.1064 6.33789C16.305 6.45213 17.4914 6.02034 18.3362 5.16235L21.5748 1.87316C22.3582 1.07744 23.6415 1.07744 24.425 1.87316ZM20.8622 1.17156C22.0374 -0.0220298 23.9624 -0.0220289 25.1376 1.17156L28.3762 4.46075C29.0098 5.10424 29.8995 5.42808 30.7985 5.34241L35.3937 4.90446C37.0612 4.74554 38.5358 5.98288 38.6688 7.65264L39.0355 12.254C39.1072 13.1542 39.5806 13.9742 40.3243 14.4865L44.1259 17.1047C45.5055 18.0548 45.8397 19.9505 44.8684 21.3151L42.1915 25.0757C41.6678 25.8114 41.5034 26.7438 41.7439 27.6143L42.9731 32.0636C43.4192 33.6782 42.4567 35.3452 40.8354 35.7662L36.3676 36.9263C36.0989 36.9961 35.8442 37.1019 35.6095 37.2389L42.0805 56.2205C42.5334 57.5492 41.0763 58.7164 39.8785 57.9845L34.3458 54.6034C34.0661 54.4324 33.7003 54.5724 33.6061 54.8863L31.865 60.6901C31.4472 62.0828 29.4909 62.126 29.012 60.7531L22.9999 43.5185L16.9878 60.7531C16.5089 62.126 14.5526 62.0828 14.1348 60.6901L12.3936 54.8863C12.2994 54.5724 11.9337 54.4324 11.654 54.6034L6.12127 57.9845C4.9235 58.7164 3.46639 57.5492 3.91933 56.2205L10.3903 37.2389C10.1556 37.1019 9.90091 36.9961 9.63218 36.9263L5.16437 35.7662C3.54308 35.3452 2.5806 33.6782 3.02667 32.0636L4.2559 27.6143C4.49638 26.7439 4.33196 25.8114 3.80827 25.0757L1.13142 21.3151C0.160044 19.9505 0.494311 18.0548 1.87384 17.1047L5.67543 14.4865C6.41917 13.9742 6.8926 13.1542 6.96433 12.254L7.33098 7.65263C7.46402 5.98288 8.93863 4.74554 10.6061 4.90446L15.2013 5.34241C16.1003 5.42808 16.99 5.10424 17.6236 4.46075L20.8622 1.17156ZM34.3929 38.5833C34.4993 38.3504 34.6338 38.1347 34.7919 37.9398L41.1339 56.5432C41.2849 56.9861 40.7992 57.3752 40.4 57.1312L34.8672 53.7501C34.0281 53.2373 32.9309 53.6571 32.6483 54.599L30.9072 60.4027C30.7679 60.867 30.1158 60.8814 29.9562 60.4238L23.5356 42.0181C23.7936 42.0649 24.047 42.1458 24.2888 42.2609L28.457 44.244C29.9696 44.9637 31.7785 44.3053 32.4746 42.7818L34.3929 38.5833ZM22.9999 42.0004L22.9156 41.9711C22.9718 41.9695 23.028 41.9695 23.0841 41.9711L22.9999 42.0004ZM11.2079 37.9398L4.86584 56.5432C4.71486 56.9861 5.20057 57.3752 5.59982 57.1312L11.1326 53.7501C11.9716 53.2373 13.0689 53.6571 13.3515 54.599L15.0926 60.4027C15.2319 60.867 15.884 60.8814 16.0436 60.4238L22.4642 42.0181C22.2061 42.0649 21.9528 42.1458 21.711 42.2609L17.5428 44.244C16.0302 44.9637 14.2213 44.3053 13.5252 42.7818L11.6069 38.5833C11.5005 38.3504 11.366 38.1347 11.2079 37.9398ZM33.9999 23.0004C33.9999 29.0756 29.075 34.0005 22.9999 34.0005C16.9248 34.0005 11.9999 29.0756 11.9999 23.0004C11.9999 16.9253 16.9248 12.0004 22.9999 12.0004C29.075 12.0004 33.9999 16.9253 33.9999 23.0004ZM34.9999 23.0004C34.9999 29.6279 29.6273 35.0005 22.9999 35.0005C16.3725 35.0005 10.9999 29.6279 10.9999 23.0004C10.9999 16.373 16.3725 11.0004 22.9999 11.0004C29.6273 11.0004 34.9999 16.373 34.9999 23.0004Z"
          })
        );
      }
      function ie(e) {
        return i.createElement(
          "svg",
          Object(r.a)(
            {
              width: "29",
              height: "26",
              viewBox: "0 0 29 26",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            },
            e
          ),
          i.createElement("path", {
            d:
              "M18.6753 0C13.7187 0 9.58825 3.59513 8.90967 8.25443C9.11619 8.22567 9.32272 8.19691 9.55875 8.19691C11.1224 8.19691 12.5681 9.00221 13.3647 10.2965L18.7934 19.1836C24.163 19.0974 28.5 14.8407 28.5 9.57744C28.5295 4.31416 24.104 0 18.6753 0ZM22.7468 10.6704H18.6753C18.0558 10.6704 17.5837 10.1814 17.5837 9.6062V4.63053C17.5837 4.02655 18.0853 3.56637 18.6753 3.56637C19.2949 3.56637 19.767 4.05531 19.767 4.63053V8.54204H22.7468C23.3664 8.54204 23.8385 9.03098 23.8385 9.6062C23.868 10.2102 23.3664 10.6704 22.7468 10.6704Z",
            fill: "#E1E7EA"
          }),
          i.createElement("path", {
            d:
              "M11.3288 11.5332C10.5322 10.2389 8.58496 10.2389 7.78836 11.5332L0.796018 22.9801C-0.0300818 24.3031 0.973039 26 2.56623 26H16.5804C18.1736 26 19.1472 24.3031 18.3506 22.9801L11.3288 11.5332ZM9.47007 14.1217C10.1191 14.0642 10.6797 14.5243 10.7092 15.1571C10.7092 15.2146 10.7092 15.3009 10.7092 15.3584L10.3257 19.6438C10.2962 20.0465 9.91262 20.3628 9.49957 20.3341C9.11602 20.3053 8.82099 20.0177 8.79148 19.6438L8.40794 15.3584C8.34893 14.7257 8.82099 14.1792 9.47007 14.1217ZM9.55858 23.6704C8.87999 23.6704 8.31943 23.1239 8.31943 22.4624C8.31943 21.8009 8.87999 21.2544 9.55858 21.2544C10.2372 21.2544 10.7977 21.8009 10.7977 22.4624C10.7977 23.1239 10.2372 23.6704 9.55858 23.6704Z",
            fill: "#E1E7EA"
          })
        );
      }
      function oe(e) {
        var t = e.className,
          n = Object(r.f)(e, ["className"]);
        return i.createElement(
          "svg",
          Object(r.a)(
            {
              className: Object(s.a)(t, "SVGIcon_Button"),
              width: "1em",
              height: "1em",
              viewBox: "0 0 148 148",
              fill: "none"
            },
            n
          ),
          i.createElement("path", {
            d:
              "M151.309 62.585L87.852.305 25.31 63.348l12.204 12.365 50.338-49.458 63.457 61.059V62.585z",
            fill: "#189AD3"
          }),
          i.createElement("path", {
            d:
              "M151.309 62.585L87.852.305 25.31 63.348l12.204 12.365 50.338-49.458 63.457 61.059V62.585z",
            fill: "url(#prefix__paint0_linear)"
          }),
          i.createElement("path", {
            d:
              "M151.309 62.585L87.852.305 25.31 63.348l12.204 12.365 50.338-49.458 63.457 61.059V62.585z",
            fill: "url(#prefix__paint1_linear)"
          }),
          i.createElement("path", {
            d:
              "M88.31 0H63.444L.294 63.501l62.236 62.891 13.424-12.823L25.31 63.501 88.31 0z",
            fill: "#B1AEAE"
          }),
          i.createElement("path", {
            d:
              "M88.31 0H63.444L.294 63.501l62.236 62.891 13.424-12.823L25.31 63.501 88.31 0z",
            fill: "url(#prefix__paint2_linear)"
          }),
          i.createElement("path", {
            d:
              "M88.31 0H63.444L.294 63.501l62.236 62.891 13.424-12.823L25.31 63.501 88.31 0z",
            fill: "url(#prefix__paint3_linear)"
          }),
          i.createElement("path", {
            d:
              "M87.547 26.255L75.954 38.162l50.033 49.152-63.457 63.501h25.017l63.914-63.501-63.914-61.059z",
            fill: "#B1AEAE"
          }),
          i.createElement("path", {
            d:
              "M87.547 26.255L75.954 38.162l50.033 49.152-63.457 63.501h25.017l63.914-63.501-63.914-61.059z",
            fill: "url(#prefix__paint4_linear)"
          }),
          i.createElement("path", {
            d:
              "M87.547 26.255L75.954 38.162l50.033 49.152-63.457 63.501h25.017l63.914-63.501-63.914-61.059z",
            fill: "url(#prefix__paint5_linear)"
          }),
          i.createElement("path", {
            d:
              "M.904 88.23V63.5l61.931 62.585 51.406-50.22 11.746 11.448-63.152 63.196L.904 88.23z",
            fill: "#1351CB"
          }),
          i.createElement("path", {
            d:
              "M.904 88.23V63.5l61.931 62.585 51.406-50.22 11.746 11.448-63.152 63.196L.904 88.23z",
            fill: "url(#prefix__paint6_linear)"
          }),
          i.createElement("path", {
            d:
              "M.904 88.23V63.5l61.931 62.585 51.406-50.22 11.746 11.448-63.152 63.196L.904 88.23z",
            fill: "url(#prefix__paint7_linear)"
          }),
          i.createElement(
            "defs",
            null,
            i.createElement(
              "linearGradient",
              {
                id: "prefix__paint0_linear",
                x1: 88.309,
                y1: 0.305,
                x2: 39.697,
                y2: 70.698,
                gradientUnits: "userSpaceOnUse"
              },
              i.createElement("stop", { offset: 0.458, stopColor: "#2682D7" }),
              i.createElement("stop", { offset: 0.88, stopColor: "#13538E" }),
              i.createElement("stop", { offset: 1, stopColor: "#0F2C64" })
            ),
            i.createElement(
              "linearGradient",
              {
                id: "prefix__paint1_linear",
                x1: 151.461,
                y1: 63.725,
                x2: 113.241,
                y2: 31.243,
                gradientUnits: "userSpaceOnUse"
              },
              i.createElement("stop", { offset: 0.005, stopColor: "#114B82" }),
              i.createElement("stop", { offset: 0.672, stopColor: "#1974C7" }),
              i.createElement("stop", {
                offset: 1,
                stopColor: "#166588",
                stopOpacity: 0
              })
            ),
            i.createElement(
              "linearGradient",
              {
                id: "prefix__paint2_linear",
                x1: 72.598,
                y1: 0,
                x2: 151.522,
                y2: 89.161,
                gradientUnits: "userSpaceOnUse"
              },
              i.createElement("stop", { stopColor: "#9D99A9" }),
              i.createElement("stop", { offset: 0.484, stopColor: "#DFDEE1" }),
              i.createElement("stop", { offset: 0.734, stopColor: "#6D6B74" }),
              i.createElement("stop", { offset: 1, stopColor: "#22202D" })
            ),
            i.createElement(
              "linearGradient",
              {
                id: "prefix__paint3_linear",
                x1: 65.886,
                y1: 141.046,
                x2: 80.542,
                y2: 158.743,
                gradientUnits: "userSpaceOnUse"
              },
              i.createElement("stop", {
                offset: 0.531,
                stopColor: "#7B7474",
                stopOpacity: 0
              }),
              i.createElement("stop", { offset: 1, stopColor: "#535661" })
            ),
            i.createElement(
              "linearGradient",
              {
                id: "prefix__paint4_linear",
                x1: 72.598,
                y1: 0,
                x2: 151.522,
                y2: 89.161,
                gradientUnits: "userSpaceOnUse"
              },
              i.createElement("stop", { stopColor: "#9D99A9" }),
              i.createElement("stop", { offset: 0.484, stopColor: "#DFDEE1" }),
              i.createElement("stop", { offset: 0.734, stopColor: "#6D6B74" }),
              i.createElement("stop", { offset: 1, stopColor: "#22202D" })
            ),
            i.createElement(
              "linearGradient",
              {
                id: "prefix__paint5_linear",
                x1: 65.886,
                y1: 141.046,
                x2: 80.542,
                y2: 158.743,
                gradientUnits: "userSpaceOnUse"
              },
              i.createElement("stop", {
                offset: 0.531,
                stopColor: "#7B7474",
                stopOpacity: 0
              }),
              i.createElement("stop", { offset: 1, stopColor: "#535661" })
            ),
            i.createElement(
              "linearGradient",
              {
                id: "prefix__paint6_linear",
                x1: 0.904,
                y1: 81.208,
                x2: 80.116,
                y2: 82.127,
                gradientUnits: "userSpaceOnUse"
              },
              i.createElement("stop", { stopColor: "#234BB3" }),
              i.createElement("stop", { offset: 0.068, stopColor: "#032939" }),
              i.createElement("stop", {
                offset: 0.547,
                stopColor: "#45556D",
                stopOpacity: 0.737
              }),
              i.createElement("stop", {
                offset: 1,
                stopColor: "#fff",
                stopOpacity: 0
              })
            ),
            i.createElement(
              "linearGradient",
              {
                id: "prefix__paint7_linear",
                x1: 126.031,
                y1: 88.506,
                x2: 75.005,
                y2: 136.736,
                gradientUnits: "userSpaceOnUse"
              },
              i.createElement("stop", { offset: 0.089, stopColor: "#0D66A6" }),
              i.createElement("stop", { offset: 0.402, stopColor: "#6699D5" }),
              i.createElement("stop", {
                offset: 1,
                stopColor: "#fff",
                stopOpacity: 0
              })
            )
          )
        );
      }
      function ae(e) {
        var t = e.className;
        Object(r.f)(e, ["className"]);
        return i.createElement(
          "svg",
          {
            className: t,
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          },
          i.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "16",
            fill: "#BDCCDB"
          }),
          i.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "16",
            fill: "url(#paint0_linear)"
          }),
          i.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "14.2745",
            fill: "#98A8B7"
          }),
          i.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "14.2745",
            fill: "url(#paint1_linear)"
          }),
          i.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "14.2745",
            stroke: "#7A92A9"
          }),
          i.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "11.1309",
            fill: "#BDCCDB"
          }),
          i.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "11.1309",
            fill: "url(#paint2_linear)"
          }),
          i.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "10.2107",
            fill: "#5792C8"
          }),
          i.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "10.2107",
            fill: "url(#paint3_linear)"
          }),
          i.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M20.6016 17.9523C22.8425 17.9523 24.6591 16.1357 24.6591 13.8948C24.6591 11.6539 22.8425 9.83727 20.6016 9.83727C18.3607 9.83727 16.5441 11.6539 16.5441 13.8948C16.5441 13.9609 16.5457 14.0266 16.5488 14.0919L14.0477 17.6314C14.0205 17.6306 13.9933 17.6303 13.966 17.6303C13.2606 17.6303 12.6127 17.8767 12.1038 18.2882L6.33398 15.9235C6.33398 17.4638 6.62381 19.1438 6.97803 19.5302C7.16531 19.7345 9.1256 20.4564 11.0502 21.127C11.3013 22.5093 12.5112 23.5574 13.966 23.5574C15.6027 23.5574 16.9296 22.2306 16.9296 20.5939C16.9296 20.5326 16.9277 20.4717 16.924 20.4113L20.2613 17.9382C20.3735 17.9475 20.487 17.9523 20.6016 17.9523ZM12.1995 21.5232C12.5338 22.1572 13.1994 22.5894 13.966 22.5894C15.0681 22.5894 15.9615 21.696 15.9615 20.5939C15.9615 19.4917 15.0681 18.5983 13.966 18.5983C13.7007 18.5983 13.4475 18.65 13.216 18.744L14.1914 19.1438L14.1886 19.1617C14.8832 19.2688 15.4151 19.8692 15.4151 20.5939C15.4151 21.3942 14.7663 22.043 13.966 22.043C13.8901 22.043 13.8157 22.0371 13.743 22.0259L13.7405 22.042L13.6136 21.9998C13.5414 21.9818 13.4713 21.9583 13.4038 21.9299C13.0402 21.8084 12.6309 21.6704 12.1995 21.5232ZM20.6016 16.5998C22.0956 16.5998 23.3066 15.3887 23.3066 13.8948C23.3066 12.4008 22.0956 11.1898 20.6016 11.1898C19.1077 11.1898 17.8966 12.4008 17.8966 13.8948C17.8966 15.3887 19.1077 16.5998 20.6016 16.5998ZM22.4 13.8948C22.4 14.888 21.5948 15.6932 20.6016 15.6932C19.6083 15.6932 18.8032 14.888 18.8032 13.8948C18.8032 12.9015 19.6083 12.0964 20.6016 12.0964C21.5948 12.0964 22.4 12.9015 22.4 13.8948Z",
            fill: "#BDCCDB"
          }),
          i.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M20.6016 17.9523C22.8425 17.9523 24.6591 16.1357 24.6591 13.8948C24.6591 11.6539 22.8425 9.83727 20.6016 9.83727C18.3607 9.83727 16.5441 11.6539 16.5441 13.8948C16.5441 13.9609 16.5457 14.0266 16.5488 14.0919L14.0477 17.6314C14.0205 17.6306 13.9933 17.6303 13.966 17.6303C13.2606 17.6303 12.6127 17.8767 12.1038 18.2882L6.33398 15.9235C6.33398 17.4638 6.62381 19.1438 6.97803 19.5302C7.16531 19.7345 9.1256 20.4564 11.0502 21.127C11.3013 22.5093 12.5112 23.5574 13.966 23.5574C15.6027 23.5574 16.9296 22.2306 16.9296 20.5939C16.9296 20.5326 16.9277 20.4717 16.924 20.4113L20.2613 17.9382C20.3735 17.9475 20.487 17.9523 20.6016 17.9523ZM12.1995 21.5232C12.5338 22.1572 13.1994 22.5894 13.966 22.5894C15.0681 22.5894 15.9615 21.696 15.9615 20.5939C15.9615 19.4917 15.0681 18.5983 13.966 18.5983C13.7007 18.5983 13.4475 18.65 13.216 18.744L14.1914 19.1438L14.1886 19.1617C14.8832 19.2688 15.4151 19.8692 15.4151 20.5939C15.4151 21.3942 14.7663 22.043 13.966 22.043C13.8901 22.043 13.8157 22.0371 13.743 22.0259L13.7405 22.042L13.6136 21.9998C13.5414 21.9818 13.4713 21.9583 13.4038 21.9299C13.0402 21.8084 12.6309 21.6704 12.1995 21.5232ZM20.6016 16.5998C22.0956 16.5998 23.3066 15.3887 23.3066 13.8948C23.3066 12.4008 22.0956 11.1898 20.6016 11.1898C19.1077 11.1898 17.8966 12.4008 17.8966 13.8948C17.8966 15.3887 19.1077 16.5998 20.6016 16.5998ZM22.4 13.8948C22.4 14.888 21.5948 15.6932 20.6016 15.6932C19.6083 15.6932 18.8032 14.888 18.8032 13.8948C18.8032 12.9015 19.6083 12.0964 20.6016 12.0964C21.5948 12.0964 22.4 12.9015 22.4 13.8948Z",
            fill: "url(#paint4_linear)"
          }),
          i.createElement(
            "defs",
            null,
            i.createElement(
              "linearGradient",
              {
                id: "paint0_linear",
                x1: "8.4375",
                y1: "1.75",
                x2: "23.1875",
                y2: "22.9375",
                gradientUnits: "userSpaceOnUse"
              },
              i.createElement("stop", {
                stopColor: "white",
                stopOpacity: "0.54"
              }),
              i.createElement("stop", {
                offset: "1",
                stopColor: "white",
                stopOpacity: "0"
              })
            ),
            i.createElement(
              "linearGradient",
              {
                id: "paint1_linear",
                x1: "9",
                y1: "3.125",
                x2: "22.4375",
                y2: "24.625",
                gradientUnits: "userSpaceOnUse"
              },
              i.createElement("stop", {
                stopColor: "white",
                stopOpacity: "0.25"
              }),
              i.createElement("stop", {
                offset: "1",
                stopColor: "white",
                stopOpacity: "0"
              })
            ),
            i.createElement(
              "linearGradient",
              {
                id: "paint2_linear",
                x1: "10.3125",
                y1: "6.375",
                x2: "19.6875",
                y2: "23.125",
                gradientUnits: "userSpaceOnUse"
              },
              i.createElement("stop", {
                stopColor: "white",
                stopOpacity: "0.65"
              }),
              i.createElement("stop", {
                offset: "1",
                stopColor: "white",
                stopOpacity: "0"
              })
            ),
            i.createElement(
              "linearGradient",
              {
                id: "paint3_linear",
                x1: "10",
                y1: "8",
                x2: "20.5",
                y2: "26.2107",
                gradientUnits: "userSpaceOnUse"
              },
              i.createElement("stop", { stopColor: "#72A5D3" }),
              i.createElement("stop", { offset: "1", stopColor: "#4F7294" })
            ),
            i.createElement(
              "linearGradient",
              {
                id: "paint4_linear",
                x1: "12.1875",
                y1: "13.5625",
                x2: "18.5625",
                y2: "23.5574",
                gradientUnits: "userSpaceOnUse"
              },
              i.createElement("stop", {
                stopColor: "white",
                stopOpacity: "0.44"
              }),
              i.createElement("stop", {
                offset: "1",
                stopColor: "white",
                stopOpacity: "0"
              })
            )
          )
        );
      }
      function se() {
        return i.createElement(
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
          i.createElement(
            "g",
            null,
            i.createElement("path", {
              d:
                "M16.929,30.115 M84.446,84.262c0-37.271-30.323-67.613-67.587-67.613l0,0l0.069,13.467   c29.777,0.039,53.995,24.256,54.051,54.042L84.446,84.262z"
            }),
            i.createElement("path", {
              d:
                "M16.843,53.089 M61.472,84.262c0-24.616-20.026-44.639-44.628-44.639l0,0v13.466c17.182,0,31.161,13.984,31.161,31.173   H61.472z"
            }),
            i.createElement("circle", {
              cx: "26.695",
              cy: "74.305",
              r: "9.812"
            })
          )
        );
      }
      function ce(e) {
        return i.createElement(
          "svg",
          Object(r.a)({}, e, {
            height: "24px",
            width: "24px",
            viewBox: "0 0 24 24",
            x: "0px",
            y: "0px"
          }),
          i.createElement("path", {
            fill: "white",
            d:
              "M3.3,0.5v23h17.5v-23H3.3z M10.2,9.6l-3-2.2h3.7L12,3.9l1.2,3.6H17l-3,2.2l1.2,3.6L12,11l-3,2.2L10.2,9.6z M17.3,16.1 M17.4,18H6.6v-1.2h10.7L17.4,18L17.4,18z M17.3,19.9"
          })
        );
      }
    },
    "8H1D": function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return o;
      }),
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
        "./main_brazilian.json": ["TFAN", 38],
        "./main_bulgarian.json": ["c2SO", 39],
        "./main_czech.json": ["peP3", 40],
        "./main_danish.json": ["0bnV", 41],
        "./main_dutch.json": ["wcLc", 42],
        "./main_english.json": ["/rNK", 43],
        "./main_finnish.json": ["iywU", 44],
        "./main_french.json": ["Xnpc", 45],
        "./main_german.json": ["pmKi", 46],
        "./main_greek.json": ["mTRv", 47],
        "./main_hungarian.json": ["WkHb", 48],
        "./main_italian.json": ["Jz5U", 49],
        "./main_japanese.json": ["3Dk9", 50],
        "./main_koreana.json": ["neQD", 51],
        "./main_latam.json": ["6oHD", 52],
        "./main_norwegian.json": ["2OvS", 53],
        "./main_polish.json": ["3pwE", 54],
        "./main_portuguese.json": ["hY40", 55],
        "./main_romanian.json": ["Q95+", 56],
        "./main_russian.json": ["bsPT", 57],
        "./main_sc_schinese.json": ["GOaQ", 58],
        "./main_schinese.json": ["B/Zz", 59],
        "./main_spanish.json": ["U6iL", 60],
        "./main_swedish.json": ["4uPU", 61],
        "./main_tchinese.json": ["rgC9", 62],
        "./main_thai.json": ["87dp", 63],
        "./main_turkish.json": ["yMpO", 64],
        "./main_ukrainian.json": ["zTWm", 65],
        "./main_vietnamese.json": ["wqiy", 66]
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
          return a;
        }),
        n.d(t, "e", function() {
          return s;
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
      function a(e) {
        return new Date(e.getFullYear(), e.getMonth(), 1, 0, 0, 0, 0);
      }
      function s(t) {
        return new Promise(function(e) {
          return setTimeout(e, t);
        });
      }
    },
    D4wO: function(e, t, n) {
      "use strict";
      function r(a) {
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
                  }, a)))
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
        b = n.n(r),
        v = n("NcpY"),
        s = n("Mgs7"),
        c = n("kyHq"),
        l = n("qD+2"),
        i = n("WBba"),
        u = n("lkRc"),
        o = n("2vnA"),
        a = n("bxiW"),
        p = n("vDqi"),
        m = n.n(p),
        d = (function() {
          function e() {
            this.rgModelNames = [];
          }
          return (
            (e.prototype.Init = function() {
              var o = this;
              l.a.Init(new i.a(u.c.WEBAPI_BASE_URL, u.i.webapi_token));
              var e = u.c.STORE_BASE_URL + "labs/ajaxgetsimilaritymodelnames";
              m.a.get(e).then(function(e) {
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
              m,
              d,
              h,
              f
            ) {
              return Object(y.b)(this, void 0, void 0, function() {
                var a,
                  t,
                  n,
                  r,
                  i,
                  o,
                  s,
                  c = this;
                return Object(y.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (a = Math.acos(p)),
                        [
                          4,
                          new _(
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
                                        (m && !(n.length > m)) ||
                                          !(
                                            i.cost > a ||
                                            (d && n.length >= d)
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
                            (s = o.cost - r),
                            (r = o.cost),
                            n.push({ appid: o.node, similarity: Math.cos(s) });
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
                        [4, m.a.get(t)]
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
                        [4, m.a.get(t)]
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
            Object(y.c)([o.C], e.prototype, "rgModelNames", void 0),
            Object(y.c)([a.a], e.prototype, "GetNeighbors", null),
            Object(y.c)([a.a], e.prototype, "EstimateCosts", null),
            e
          );
        })(),
        w = (function() {
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
        _ = (function() {
          function e(e, t, n, r) {
            (this.m_fnGetNeighbors = e),
              (this.m_fnEstimateCosts = t),
              (this.m_fnEquality = n),
              (this.m_fnIterationCallback = r);
          }
          return (
            (e.prototype.FindPath = function(v, _, g) {
              return Object(y.b)(this, void 0, void 0, function() {
                var o, a, s, c, l, t, n, u, r, i, p, m, d, h, f, b;
                return Object(y.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (o = new w(function(e, t) {
                          return e.cost - t.cost;
                        })),
                        (a = new Set()),
                        o.Push({ node: v, cost: 0 }),
                        (s = new Map()),
                        (c = new Map()),
                        (l = new Map()),
                        [4, this.m_fnEstimateCosts([v], _)]
                      );
                    case 1:
                      (t = e.sent()[0]),
                        s.set(v, t),
                        c.set(v, 0),
                        (n = 0),
                        (e.label = 2);
                    case 2:
                      if (!(0 < o.length && n < g)) return [3, 6];
                      if (((u = o.Pop()), this.m_fnEquality(u.node, _))) {
                        for (r = [], i = u.node; l.has(i); )
                          r.push(i), (i = l.get(i));
                        for (p = [], b = r.length - 1; 0 <= b; b--)
                          p.push({ node: r[b], cost: c.get(r[b]) });
                        return [2, { path: p }];
                      }
                      return a.add(u.node), [4, this.m_fnGetNeighbors(u.node)];
                    case 3:
                      return 0 < (m = e.sent()).length
                        ? [
                            4,
                            this.m_fnEstimateCosts(
                              m.map(function(e) {
                                return e.node;
                              }),
                              _
                            )
                          ]
                        : [3, 5];
                    case 4:
                      if ((d = e.sent()).length != m.length)
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
                              r = m[e],
                              i = h + r.cost;
                            (!c.has(r.node) || i < c.get(r.node)) &&
                              (l.set(r.node, u.node),
                              c.set(r.node, i),
                              s.set(r.node, r.cost + d[e]),
                              a.has(r.node) ||
                                ((t = r.cost + d[e]),
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
                          b = 0;
                        b < m.length;
                        b++
                      )
                        f(b);
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
        g = new d();
      window.g_LabsSandbox = g;
      var h = n("TyAF"),
        O = n("ZApo"),
        f = n("exH9"),
        E = (function(n) {
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
                var s,
                  t = this;
                return Object(y.e)(this, function(e) {
                  return (
                    null != (s = n.target.value && n.target.value.trim()) &&
                    s.length
                      ? (window.clearTimeout(this.m_currentRequest),
                        (this.m_currentRequest = window.setTimeout(function() {
                          return Object(y.b)(t, void 0, void 0, function() {
                            var t,
                              n,
                              r,
                              i,
                              o,
                              a = this;
                            return Object(y.e)(this, function(e) {
                              switch (e.label) {
                                case 0:
                                  return (
                                    (t = {
                                      cc: u.c.COUNTRY,
                                      l: u.c.LANGUAGE,
                                      realm: c.f.k_ESteamRealmGlobal,
                                      f: "jsonfull",
                                      term: s.replace(" ", "+"),
                                      require_type: "game",
                                      excluded_tags: [],
                                      excluded_content_descriptors: []
                                    }),
                                    (n = u.c.STORE_BASE_URL + "search/suggest"),
                                    [
                                      4,
                                      m.a.get(n, {
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
                                            return b.a.createElement(
                                              "div",
                                              {
                                                className: v.Suggestion,
                                                key: "suggestion-" + e.id,
                                                onClickCapture: function() {
                                                  return a.SetSelectedApp(
                                                    parseInt(e.id)
                                                  );
                                                }
                                              },
                                              b.a.createElement("img", {
                                                src: e.img,
                                                className: v.LogoImage
                                              }),
                                              b.a.createElement(
                                                "div",
                                                { className: v.AppName },
                                                e.name +
                                                  (a.props.showAppIds
                                                    ? " (" + e.id + ")"
                                                    : "")
                                              )
                                            );
                                          })
                                        : []),
                                    this.setState({
                                      strSearch: s,
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
                    : v.AppSelector,
                o = null,
                a = b.a.createElement(s.j, {
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
                    (o = b.a.createElement(
                      "div",
                      { className: v.AppDisplay },
                      this.state.appinfo &&
                        b.a.createElement("img", {
                          src: this.state.appinfo.header_image_url,
                          className: v.LogoImage
                        }),
                      b.a.createElement("div", { className: v.AppName }, n)
                    )))
                  : "select" == this.state.mode &&
                    ((r = 0 < this.state.strSearch.length),
                    (o = b.a.createElement(
                      "div",
                      { className: v.AppSelect },
                      a,
                      r &&
                        b.a.createElement(
                          "div",
                          { className: v.Suggestions },
                          this.state.rgSuggestions
                        )
                    ))),
                b.a.createElement(
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
            Object(y.c)([a.a], e.prototype, "OnDisplayClicked", null),
            Object(y.c)([a.a], e.prototype, "UpdateAppSuggestions", null),
            Object(y.c)([a.a], e.prototype, "OnKeyUp", null),
            e
          );
        })(b.a.Component),
        C = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(y.d)(t, e),
            (t.prototype.render = function() {
              var e = this;
              if (0 == this.props.appid)
                return b.a.createElement("div", { className: v.SimilarApp });
              var t = l.a.GetAppInfo(this.props.appid);
              if (!t || !t.is_valid)
                return b.a.createElement("div", { className: v.SimilarApp });
              var n,
                r = [];
              this.props.score &&
                (r.push(
                  b.a.createElement("div", {
                    className: v.Spacer,
                    key: "score-spacer"
                  })
                ),
                (n = Math.round(100 * this.props.score).toString() + "%"),
                r.push(
                  b.a.createElement(
                    "div",
                    { className: v.Score, key: "score-value" },
                    n
                  )
                ));
              var i = t.name + " (" + this.props.appid.toString() + ")",
                o = this.props.fnOnSelected
                  ? this.props.fnOnSelected
                  : function(e) {};
              return b.a.createElement(
                "div",
                {
                  className: v.SimilarApp,
                  onClick: function() {
                    return o(e.props.appid);
                  }
                },
                b.a.createElement("img", {
                  src: t.header_image_url,
                  className: v.LogoImage
                }),
                b.a.createElement("div", { className: v.AppName }, i),
                r
              );
            }),
            t
          );
        })(b.a.Component),
        S = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {}),
              (e.ref_app_a = b.a.createRef()),
              (e.ref_app_b = b.a.createRef()),
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
                m.a.get(n).then(function(e) {
                  e.data && e.data.similarity_scores
                    ? r.setState({ score: e.data.similarity_scores[0] })
                    : r.setState({ score: null });
                }));
            }),
            (e.prototype.render = function() {
              var e = this.state.score
                ? (100 * this.state.score).toFixed(1) + "%"
                : "";
              return b.a.createElement(
                "div",
                { className: v.LabsSimilarity },
                b.a.createElement(E, {
                  fnOnSelection: this.OnAppSelected,
                  ref: this.ref_app_a,
                  showAppIds: !0,
                  appidInitial: 268500,
                  key: "similar_app_a"
                }),
                b.a.createElement("div", { className: v.HorizontalSpacer }),
                b.a.createElement("div", { className: v.Score }, e),
                b.a.createElement("div", { className: v.HorizontalSpacer }),
                b.a.createElement(E, {
                  fnOnSelection: this.OnAppSelected,
                  ref: this.ref_app_b,
                  showAppIds: !0,
                  appidInitial: 200510,
                  key: "similar_app_b"
                })
              );
            }),
            Object(y.c)([a.a], e.prototype, "OnAppSelected", null),
            e
          );
        })(b.a.Component),
        M = (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return (
              (t.selected_app = 0),
              (t.similar_apps = []),
              (t.similarity_scores = []),
              (t.similarity_model = "default"),
              (t.app_selector_ref = b.a.createRef()),
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
                m.a.get(n).then(function(e) {
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
                  b.a.createElement(C, {
                    appid: r,
                    score: i,
                    key: r,
                    fnOnSelected: this.SetSelectedApp
                  })
                );
              }
              for (var o = [], a = 0, s = g.rgModelNames; a < s.length; a++) {
                var c = s[a],
                  l = {
                    label: b.a.createElement("div", { key: c }, c),
                    data: c
                  };
                o.push(l);
              }
              return b.a.createElement(
                "div",
                { className: v.LabsSimilarGames },
                b.a.createElement(O.a, {
                  rgOptions: o,
                  onChange: this.OnModelChanged,
                  selectedOption: "default"
                }),
                b.a.createElement("h1", null, "Games similar to:"),
                b.a.createElement(E, {
                  fnOnSelection: this.OnSelectedApp,
                  ref: this.app_selector_ref,
                  appidInitial: 268500,
                  showAppIds: !0
                }),
                b.a.createElement("div", { className: v.SimilarApps }, e)
              );
            }),
            Object(y.c)([o.C], e.prototype, "selected_app", void 0),
            Object(y.c)([o.C], e.prototype, "similar_apps", void 0),
            Object(y.c)([o.C], e.prototype, "similarity_scores", void 0),
            Object(y.c)([o.C], e.prototype, "similarity_model", void 0),
            Object(y.c)([a.a], e.prototype, "OnSelectedApp", null),
            Object(y.c)([a.a], e.prototype, "SetSelectedApp", null),
            Object(y.c)([a.a], e.prototype, "OnModelChanged", null),
            (e = Object(y.c)([h.a], e))
          );
        })(b.a.Component),
        A = (function(n) {
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
                  label: b.a.createElement("div", { key: "Plus" }, "Plus"),
                  data: "Plus"
                },
                {
                  label: b.a.createElement("div", { key: "Minus" }, "Minus"),
                  data: "Minus"
                }
              ];
              return b.a.createElement(
                "div",
                { className: v.Operand },
                b.a.createElement(
                  "div",
                  { className: v.OperatorSelect },
                  b.a.createElement(O.a, {
                    rgOptions: e,
                    onChange: this.OnSelectedOperator,
                    selectedOption: "Plus"
                  })
                ),
                b.a.createElement(E, { fnOnSelection: this.OnSelectedApp })
              );
            }),
            Object(y.c)([o.C], e.prototype, "selected_app", void 0),
            Object(y.c)([o.C], e.prototype, "selected_operator", void 0),
            Object(y.c)([a.a], e.prototype, "OnSelectedApp", null),
            Object(y.c)([a.a], e.prototype, "OnSelectedOperator", null),
            (e = Object(y.c)([h.a], e))
          );
        })(b.a.Component),
        B = (function(r) {
          function e(e) {
            var t = r.call(this, e) || this;
            (t.operands = []),
              (t.similarity_model = "default"),
              (t.similar_apps = []),
              (t.similarity_scores = []),
              (t.operand_refs = []);
            for (var n = 0; n < e.max_operands; n++)
              t.operand_refs.push(b.a.createRef());
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
                s = this;
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
                m.a.get(t).then(function(t) {
                  if (
                    ((s.similar_apps = []),
                    (s.similarity_scores = []),
                    t.data && t.data.length == s.operands.length)
                  ) {
                    for (
                      var r = t.data[0].components.map(function(e) {
                          return parseFloat(e);
                        }),
                        e = 1;
                      e < s.operands.length;
                      e++
                    )
                      !(function(e) {
                        var n = t.data[e].components.map(function(e) {
                          return parseFloat(e);
                        });
                        "Plus" == s.operands[e].operator
                          ? (r = r.map(function(e, t) {
                              return e + n[t];
                            }))
                          : "Minus" == s.operands[e].operator
                          ? (r = r.map(function(e, t) {
                              return e - n[t];
                            }))
                          : console.log(
                              "Unexpected operator " + s.operands[e].operator
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
                      a = Math.sqrt(o);
                    1e-4 < a &&
                      ((n = r
                        .map(function(e) {
                          return e / a;
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
                        s.similarity_model),
                      m.a.get(i).then(function(e) {
                        var t = new Set(
                          e.data.similar_appids.slice(0, s.props.max_similar)
                        );
                        l.a.EnsureAppInfoForAppIDs(t).then(function() {
                          (s.similar_apps = e.data.similar_appids),
                            (s.similarity_scores = e.data.similarity_scores);
                        });
                      }));
                  }
                }));
            }),
            (e.prototype.render = function() {
              for (var e = [], t = 0, n = g.rgModelNames; t < n.length; t++) {
                var r = n[t],
                  i = {
                    label: b.a.createElement("div", { key: r }, r),
                    data: r
                  };
                e.push(i);
              }
              for (
                var o = [], a = 0, s = 0, c = this.operands;
                s < c.length;
                s++
              ) {
                var l = c[s];
                o.push(
                  b.a.createElement(A, {
                    app: l.app,
                    operator: l.operator,
                    key: a,
                    fnOnChange: this.OnOperandChanged,
                    ref: this.operand_refs[a]
                  })
                ),
                  a++;
              }
              var u = null;
              this.operands.length < this.props.max_operands &&
                (u = b.a.createElement(
                  "div",
                  { className: v.AddOperand, onClick: this.OnAddOperand },
                  "+"
                ));
              for (
                var p = [],
                  m = Math.min(
                    this.similar_apps.length,
                    this.similarity_scores.length,
                    this.props.max_similar
                  ),
                  d = 0;
                d < m;
                d++
              ) {
                var h = this.similar_apps[d],
                  f = this.similarity_scores[d];
                p.push(b.a.createElement(C, { appid: h, score: f, key: h }));
              }
              return b.a.createElement(
                "div",
                { className: v.LabsMixer },
                b.a.createElement(O.a, {
                  rgOptions: e,
                  onChange: this.OnModelChanged,
                  selectedOption: "default"
                }),
                b.a.createElement("h1", null, "Mixture"),
                o,
                u,
                b.a.createElement("h1", null, "Games similar to mixture"),
                b.a.createElement("div", { className: v.SimilarApps }, p)
              );
            }),
            Object(y.c)([o.C], e.prototype, "operands", void 0),
            Object(y.c)([o.C], e.prototype, "similarity_model", void 0),
            Object(y.c)([o.C], e.prototype, "similar_apps", void 0),
            Object(y.c)([o.C], e.prototype, "similarity_scores", void 0),
            Object(y.c)([a.a], e.prototype, "OnModelChanged", null),
            Object(y.c)([a.a], e.prototype, "OnAddOperand", null),
            Object(y.c)([a.a], e.prototype, "OnOperandChanged", null),
            (e = Object(y.c)([h.a], e))
          );
        })(b.a.Component),
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
                g
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
                  ? v.ComputeButton
                  : Object(f.a)(v.ComputeButton, v.Disable),
                n = null,
                n = this.in_progress
                  ? b.a.createElement(
                      "div",
                      { className: v.ProgressMessage },
                      "Finding path, step " + this.progress_iteration
                    )
                  : this.found_path
                  ? b.a.createElement(
                      "div",
                      { className: v.ProgressMessage },
                      "Found path"
                    )
                  : b.a.createElement(
                      "div",
                      { className: v.ProgressMessage },
                      "No path found"
                    ),
                r = [];
              if (this.found_path)
                for (var i = 0; i < this.found_path.length; i++) {
                  var o = this.found_path[i];
                  r.push(
                    b.a.createElement(C, {
                      appid: o.appid,
                      score: o.similarity,
                      key: "pathstep" + i
                    })
                  );
                }
              return b.a.createElement(
                "div",
                { className: v.LabsPathfinder },
                b.a.createElement(
                  "div",
                  { className: v.SelectEndpoints },
                  b.a.createElement(E, {
                    fnOnSelection: this.OnSelectedStartApp,
                    strPrompt: "Select start game"
                  }),
                  b.a.createElement(E, {
                    fnOnSelection: this.OnSelectedEndApp,
                    strPrompt: "Select end game"
                  })
                ),
                b.a.createElement(
                  "div",
                  { className: t, onClick: e ? this.Pathfind : function() {} },
                  "Pathfind!"
                ),
                n,
                b.a.createElement("div", { className: v.Path }, r)
              );
            }),
            Object(y.c)([o.C], e.prototype, "app_start", void 0),
            Object(y.c)([o.C], e.prototype, "app_end", void 0),
            Object(y.c)([o.C], e.prototype, "in_progress", void 0),
            Object(y.c)([o.C], e.prototype, "progress_iteration", void 0),
            Object(y.c)([o.C], e.prototype, "found_path", void 0),
            Object(y.c)([a.a], e.prototype, "IterationCallback", null),
            Object(y.c)([a.a], e.prototype, "Pathfind", null),
            Object(y.c)([a.a], e.prototype, "OnSelectedStartApp", null),
            Object(y.c)([a.a], e.prototype, "OnSelectedEndApp", null),
            (e = Object(y.c)([h.a], e))
          );
        })(b.a.Component),
        D = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { ready_to_run: !1 }), e;
          }
          return (
            Object(y.d)(e, t),
            (e.prototype.componentDidMount = function() {
              g.Init(), this.setState({ ready_to_run: !0 });
            }),
            (e.prototype.render = function() {
              return this.state.ready_to_run
                ? b.a.createElement(
                    "div",
                    { className: v.App },
                    b.a.createElement(
                      "div",
                      { className: v.Container },
                      b.a.createElement(
                        "div",
                        { className: v.TopSection },
                        b.a.createElement(
                          "div",
                          { className: v.Header },
                          "Labs Sandbox"
                        ),
                        b.a.createElement(
                          "div",
                          { className: v.Body },
                          "Internal testbed page for Steam Labs experiments"
                        )
                      ),
                      b.a.createElement(
                        "div",
                        { className: v.SandboxSection },
                        b.a.createElement("h1", null, "Similar Games"),
                        b.a.createElement(M, { max_similar: 10 }),
                        b.a.createElement("div", { className: v.Spacer }),
                        b.a.createElement("h1", null, "Similarity"),
                        b.a.createElement(S, null),
                        b.a.createElement("div", { className: v.Spacer }),
                        b.a.createElement("h1", null, "Mixer"),
                        b.a.createElement(B, {
                          max_similar: 10,
                          max_operands: 6
                        }),
                        b.a.createElement("div", { className: v.Spacer }),
                        b.a.createElement("h1", null, "Pathfinder"),
                        b.a.createElement(j, null)
                      )
                    )
                  )
                : b.a.createElement("div", { className: v.App });
            }),
            e
          );
        })(b.a.Component);
      t.default = D;
    },
    "IjL/": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return o;
      });
      var r = n("mrSG"),
        s = n("q1tI"),
        i = n("bxiW"),
        o = (function(t) {
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
                i = r.error,
                o = r.identifierHash;
              return i
                ? void 0 !== n
                  ? "function" == typeof n
                    ? n(i.error)
                    : n
                  : a.sm_ErrorReportingStore &&
                    a.sm_ErrorReportingStore.reporting_enabled
                  ? s.createElement(l, {
                      error: i,
                      identifierHash: o,
                      store: a.sm_ErrorReportingStore,
                      onRefresh: this.Reset
                    })
                  : s.createElement(c, { error: i, onDismiss: this.Reset })
                : t;
            }),
            Object(r.c)([i.a], a.prototype, "Reset", null),
            a
          );
        })(s.Component),
        c = function(e) {
          var t = e.error,
            n = e.onDismiss,
            r = t.error ? t.error.stack : "Stack missing",
            i = t.info ? t.info.componentStack : "",
            o = (t.error && t.error.message) || "unknown error";
          return s.createElement(
            u,
            null,
            s.createElement(p, null, 'Error: "', o, '"'),
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
            s.createElement(m, null, "The error occurred while rendering:", i)
          );
        },
        l = function(e) {
          var t = e.error,
            n = e.onRefresh,
            r = e.identifierHash,
            i = e.store,
            o = (t.error && t.error.message) || "unknown error",
            a = i.product + "_" + i.version + "_" + r;
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
            s.createElement(m, null, o)
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
        return l;
      }),
        n.d(t, "a", function() {
          return b;
        });
      var l,
        r,
        i = n("mrSG"),
        o = n("2vnA"),
        a = n("i8i4"),
        s = n("Kw0F"),
        c = n("D4wO"),
        u = n("bxiW"),
        p = n("kyHq"),
        m = n("TLQK"),
        d = n("lkRc"),
        f = n("r64O");
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
                s.b(this.m_rgLoadingLinks, e.currentTarget),
                0 == this.m_rgLoadingLinks.length &&
                  (this.m_fnRender(), (this.m_fnRender = void 0));
            }),
            Object(i.c)([u.a], e.prototype, "OnLinkLoad", null),
            e
          );
        })(),
        b = (function() {
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
                a,
                s,
                c = _.GetExistingPopup(this.m_strName);
              (c && !this.m_rgParams.replace_existing_popup) ||
                ((this.m_rgParams = this.UpdateParamsBeforeShow(
                  this.m_rgParams
                )),
                c
                  ? ((o = c.m_element),
                    (i = c.m_popup),
                    c.ReleasePopup(),
                    (a = c.m_renderWhenReady),
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
                  : ((i = (n = v.CreatePopup(this.m_strName, this.m_rgParams))
                      .popup),
                    (o = n.element),
                    (a = new h(i, o))),
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
                  d.c.LANGUAGE &&
                    ((s = "koreana" == d.c.LANGUAGE ? "korean" : d.c.LANGUAGE),
                    i.document.documentElement.setAttribute("lang", m.c[s])),
                  (this.m_popup = i),
                  (this.m_element = o),
                  (this.m_renderWhenReady = a),
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
                _.RemoveTrackedPopup(this),
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
            Object(i.c)([o.C], e.prototype, "m_bFocused", void 0),
            Object(i.c)([u.a], e.prototype, "OnMessage", null),
            Object(i.c)([u.a], e.prototype, "OnResizeEvent", null),
            Object(i.c)([u.a], e.prototype, "OnBeforeUnloadEvent", null),
            Object(i.c)([u.a], e.prototype, "OnUnload", null),
            Object(i.c)([u.a], e.prototype, "OnFocusInternal", null),
            Object(i.c)([u.a], e.prototype, "OnBlurInternal", null),
            e
          );
        })(),
        v = (function() {
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
                  for (var i = 0, o = r; i < o.length; i++) {
                    o[i].Close();
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
                      for (var i = r[n], o = 0; o < i.addedNodes.length; o++) {
                        var a = i.addedNodes[o];
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
                i = n.height || 300,
                o = t.title,
                a = "width=" + r + ",height=" + i;
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
              l.document.write(m), (l.document.title = o);
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
                var i = t[r];
                if ("stylesheet" == i.rel) {
                  for (
                    var o = e.document.createElement("link"), a = 0;
                    a < i.attributes.length;
                    a++
                  ) {
                    var s = i.attributes.item(a);
                    o.setAttribute(s.name, s.value);
                  }
                  n.appendChild(o);
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
                        i = Date.now(),
                        o = 0,
                        a = Array.from(this.m_mapRestoreDetails.keys());
                      o < a.length;
                      o++
                    ) {
                      var s = a[o],
                        c = this.m_mapRestoreDetails.get(s);
                      c.last_used < i &&
                        c.bExpires &&
                        ((i = c.last_used), (r = s));
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
              h.prototype,
              "DebouncedSaveSavedDimensionStore",
              null
            ),
            h
          );
        })(),
        _ = new v();
      window.g_PopupManager = _;
    },
    Jnrd: function(e, t, n) {
      "use strict";
      function r(e) {
        if (!a() || !window.document.cookie) return null;
        var t = document.cookie.match("(^|; )" + e + "=([^;]*)");
        return t && t[2] ? decodeURIComponent(t[2]) : null;
      }
      function i(e, t, n, r) {
        var i, o;
        a() &&
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
      function a() {
        return !!window.document;
      }
      n.d(t, "b", function() {
        return r;
      }),
        n.d(t, "c", function() {
          return i;
        }),
        n.d(t, "a", function() {
          return a;
        });
    },
    "Jqb/": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return v;
      }),
        n.d(t, "g", function() {
          return _;
        }),
        n.d(t, "h", function() {
          return g;
        }),
        n.d(t, "c", function() {
          return y;
        }),
        n.d(t, "d", function() {
          return w;
        }),
        n.d(t, "e", function() {
          return O;
        }),
        n.d(t, "b", function() {
          return E;
        }),
        n.d(t, "f", function() {
          return S;
        });
      var l = n("mrSG"),
        u = n("q1tI"),
        i = n("X3Ds"),
        p = n("TLQK"),
        m = n("Mgs7"),
        o = n("IjL/"),
        r = n("bxiW"),
        a = n("6Y59"),
        s = n("TyAF"),
        c = n("exH9"),
        d = n("JJA/"),
        h = n.n(d),
        f = n("r64O");
      var b = (function(e) {
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
                    : (this.m_ModalHandle = S(window).ShowModal(n))
                  : this.HideModal(),
                null
              );
            }),
            t
          );
        })(u.Component),
        v = function(e) {
          var t = e.active,
            n = e.onDismiss,
            r = e.className,
            i = e.modalClassName,
            o = e.children;
          return u.createElement(
            b,
            { active: t },
            u.createElement(
              _,
              { onEscKeypress: n, className: i },
              u.createElement(m.e, { className: r }, o)
            )
          );
        };
      function _(t) {
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
                    u.createElement(a.cb, null)
                  )
                ),
              u.createElement(o.a, null, t.children)
            )
          )
        );
      }
      var g = (function(t) {
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
                i = e.strCancelButtonText,
                o = e.bAlertDialog,
                a = e.children,
                s = Object(l.f)(e, [
                  "strTitle",
                  "strDescription",
                  "strOKButtonText",
                  "strCancelButtonText",
                  "bAlertDialog",
                  "children"
                ]),
                c = r || Object(p.e)("#Button_Close");
              return u.createElement(
                w,
                Object(l.a)({}, s),
                u.createElement(m.i, null, " ", t, " "),
                u.createElement(
                  m.a,
                  null,
                  u.createElement(m.b, null, n, a),
                  u.createElement(
                    m.h,
                    null,
                    o
                      ? u.createElement(m.o, null, c)
                      : u.createElement(m.l, {
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
            (t = Object(l.c)([s.a], t))
          );
        })(u.Component),
        w = (function(e) {
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
                _,
                {
                  onEscKeypress: this.Cancel,
                  bDestructiveWarning: this.props.bDestructiveWarning,
                  bDisableBackgroundDismiss: this.props
                    .bDisableBackgroundDismiss,
                  bHideCloseIcon: this.props.bHideCloseIcon
                },
                u.createElement(
                  m.f,
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
                  strTitle: Object(p.e)("#Error_FailureNotice"),
                  strDescription: Object(p.e)(
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
        E = (function(e) {
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
      function S(e) {
        var t = M.get(e);
        return t || ((t = new C()), M.set(e, t)), t;
      }
      var M = new WeakMap();
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
          return a;
        }),
        n.d(t, "g", function() {
          return s;
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
      function a(e, t) {
        return e.filter(function(e) {
          return t !== e;
        });
      }
      function s(e, t, n) {
        for (var r = 0, i = e.length - 1; r <= i; ) {
          var o = Math.floor((r + i) / 2),
            a = n(e[o], t);
          if (a < 0) r = o + 1;
          else if (0 < a) i = o - 1;
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
        return u;
      }),
        n.d(t, "a", function() {
          return m;
        }),
        n.d(t, "f", function() {
          return O;
        }),
        n.d(t, "c", function() {
          return C;
        }),
        n.d(t, "d", function() {
          return F;
        }),
        n.d(t, "e", function() {
          return T;
        }),
        n.d(t, "g", function() {
          return r;
        });
      var i = n("mrSG"),
        o = n("hRO2"),
        a = n("OS8t"),
        s = n("RD/U"),
        c = o.Message;
      var r,
        l,
        u = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.appids || a.a(r.M()),
              c.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(i.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      appids: {
                        n: 1,
                        r: !0,
                        q: !0,
                        br: a.d.readInt32,
                        bw: a.h.writeRepeatedInt32
                      },
                      language: {
                        n: 2,
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
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetApps_Request";
            }),
            r
          );
        })(c),
        p = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.apps || a.a(r.M()),
              c.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(i.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: { apps: { n: 1, c: s.a, r: !0, q: !0 } }
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
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetApps_Response";
            }),
            r
          );
        })(c),
        m = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.appid || a.a(r.M()),
              c.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(i.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      appid: { n: 1, br: a.d.readInt32, bw: a.h.writeInt32 },
                      language: {
                        n: 2,
                        br: a.d.readString,
                        bw: a.h.writeString
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
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetAppRichPresenceLocalization_Request";
            }),
            r
          );
        })(c),
        d = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.appid || a.a(r.M()),
              c.initialize(t, e, 0, -1, [2], null),
              t
            );
          }
          return (
            Object(i.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      appid: { n: 1, br: a.d.readInt32, bw: a.h.writeInt32 },
                      token_lists: { n: 2, c: f, r: !0, q: !0 }
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
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetAppRichPresenceLocalization_Response";
            }),
            r
          );
        })(c),
        h = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.name || a.a(r.M()),
              c.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(i.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      name: { n: 1, br: a.d.readString, bw: a.h.writeString },
                      value: { n: 2, br: a.d.readString, bw: a.h.writeString }
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
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetAppRichPresenceLocalization_Response_Token";
            }),
            r
          );
        })(c),
        f = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.language || a.a(r.M()),
              c.initialize(t, e, 0, -1, [2], null),
              t
            );
          }
          return (
            Object(i.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      language: {
                        n: 1,
                        br: a.d.readString,
                        bw: a.h.writeString
                      },
                      tokens: { n: 2, c: h, r: !0, q: !0 }
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
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetAppRichPresenceLocalization_Response_TokenList";
            }),
            r
          );
        })(c),
        b = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.gidcomment || a.a(r.M()),
              c.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(i.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      gidcomment: {
                        n: 1,
                        br: a.d.readFixed64String,
                        bw: a.h.writeFixed64String
                      },
                      steamid: {
                        n: 2,
                        br: a.d.readFixed64String,
                        bw: a.h.writeFixed64String
                      },
                      timestamp: {
                        n: 3,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32
                      },
                      text: { n: 4, br: a.d.readString, bw: a.h.writeString },
                      upvotes: { n: 5, br: a.d.readInt32, bw: a.h.writeInt32 },
                      hidden: { n: 6, br: a.d.readBool, bw: a.h.writeBool },
                      hidden_by_user: {
                        n: 7,
                        br: a.d.readBool,
                        bw: a.h.writeBool
                      },
                      deleted: { n: 8, br: a.d.readBool, bw: a.h.writeBool },
                      ipaddress: { n: 9, c: s.c },
                      total_hidden: {
                        n: 10,
                        br: a.d.readInt32,
                        bw: a.h.writeInt32
                      },
                      upvoted_by_user: {
                        n: 11,
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
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_Comment";
            }),
            r
          );
        })(c),
        v = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.comments || a.a(r.M()),
              c.initialize(t, e, 0, -1, [1, 2, 9], null),
              t
            );
          }
          return (
            Object(i.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      comments: { n: 1, c: b, r: !0, q: !0 },
                      deleted_comments: { n: 2, c: b, r: !0, q: !0 },
                      steamid: {
                        n: 3,
                        br: a.d.readFixed64String,
                        bw: a.h.writeFixed64String
                      },
                      commentthreadid: {
                        n: 4,
                        br: a.d.readFixed64String,
                        bw: a.h.writeFixed64String
                      },
                      start: { n: 5, br: a.d.readInt32, bw: a.h.writeInt32 },
                      count: { n: 6, br: a.d.readInt32, bw: a.h.writeInt32 },
                      total_count: {
                        n: 7,
                        br: a.d.readInt32,
                        bw: a.h.writeInt32
                      },
                      upvotes: { n: 8, br: a.d.readInt32, bw: a.h.writeInt32 },
                      upvoters: {
                        n: 9,
                        r: !0,
                        q: !0,
                        br: a.d.readUint32,
                        bw: a.h.writeRepeatedUint32
                      },
                      user_subscribed: {
                        n: 10,
                        br: a.d.readBool,
                        bw: a.h.writeBool
                      },
                      user_upvoted: {
                        n: 11,
                        br: a.d.readBool,
                        bw: a.h.writeBool
                      },
                      answer_commentid: {
                        n: 12,
                        br: a.d.readFixed64String,
                        bw: a.h.writeFixed64String
                      },
                      answer_actor: {
                        n: 13,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32
                      },
                      answer_actor_rank: {
                        n: 14,
                        br: a.d.readInt32,
                        bw: a.h.writeInt32
                      },
                      can_post: { n: 15, br: a.d.readBool, bw: a.h.writeBool },
                      comment_thread_type: {
                        n: 16,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32
                      },
                      gidfeature: {
                        n: 17,
                        br: a.d.readFixed64String,
                        bw: a.h.writeFixed64String
                      },
                      gidfeature2: {
                        n: 18,
                        br: a.d.readFixed64String,
                        bw: a.h.writeFixed64String
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
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetCommentThread_Response";
            }),
            r
          );
        })(c),
        _ = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.gidcomment || a.a(r.M()),
              c.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(i.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      gidcomment: {
                        n: 1,
                        br: a.d.readFixed64String,
                        bw: a.h.writeFixed64String
                      },
                      commentthreadid: {
                        n: 2,
                        br: a.d.readFixed64String,
                        bw: a.h.writeFixed64String
                      },
                      count: { n: 3, br: a.d.readInt32, bw: a.h.writeInt32 },
                      upvotes: { n: 4, br: a.d.readInt32, bw: a.h.writeInt32 }
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
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_PostCommentToThread_Response";
            }),
            r
          );
        })(c),
        g = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return c.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              return e ? { $jspbMessageInstance: t } : {};
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
        })(c),
        y = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.gidcomment || a.a(r.M()),
              c.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(i.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      gidcomment: {
                        n: 1,
                        br: a.d.readUint64String,
                        bw: a.h.writeUint64String
                      },
                      commentthreadid: {
                        n: 2,
                        br: a.d.readUint64String,
                        bw: a.h.writeUint64String
                      },
                      count: { n: 3, br: a.d.readUint32, bw: a.h.writeUint32 },
                      upvotes: {
                        n: 4,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32
                      },
                      has_upvoted: { n: 5, br: a.d.readBool, bw: a.h.writeBool }
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
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_RateCommentThread_Response";
            }),
            r
          );
        })(c),
        w = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.commentthreadid || a.a(r.M()),
              c.initialize(t, e, 0, -1, [5], null),
              t
            );
          }
          return (
            Object(i.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      commentthreadid: {
                        n: 1,
                        br: a.d.readUint64String,
                        bw: a.h.writeUint64String
                      },
                      gidcomment: {
                        n: 2,
                        br: a.d.readUint64String,
                        bw: a.h.writeUint64String
                      },
                      upvotes: {
                        n: 3,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32
                      },
                      has_upvoted: {
                        n: 4,
                        br: a.d.readBool,
                        bw: a.h.writeBool
                      },
                      upvoter_accountids: {
                        n: 5,
                        r: !0,
                        q: !0,
                        br: a.d.readUint32,
                        bw: a.h.writeRepeatedUint32
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
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetCommentThreadRatings_Response";
            }),
            r
          );
        })(c),
        O = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.announcementid || a.a(r.M()),
              c.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(i.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      announcementid: {
                        n: 1,
                        br: a.d.readUint64String,
                        bw: a.h.writeUint64String
                      },
                      vote_up: { n: 2, br: a.d.readBool, bw: a.h.writeBool },
                      clan_accountid: {
                        n: 3,
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
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_RateClanAnnouncement_Request";
            }),
            r
          );
        })(c),
        E = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return c.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              return e ? { $jspbMessageInstance: t } : {};
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
        })(c),
        C = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.announcementid || a.a(r.M()),
              c.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(i.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      announcementid: {
                        n: 1,
                        br: a.d.readUint64String,
                        bw: a.h.writeUint64String
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
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetClanAnnouncementVoteForUser_Request";
            }),
            r
          );
        })(c),
        S = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.voted_up || a.a(r.M()),
              c.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(i.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      voted_up: { n: 1, br: a.d.readBool, bw: a.h.writeBool },
                      voted_down: { n: 2, br: a.d.readBool, bw: a.h.writeBool }
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
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetClanAnnouncementVoteForUser_Response";
            }),
            r
          );
        })(c),
        M = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.avatars || a.a(r.M()),
              c.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(i.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: { avatars: { n: 1, c: A, r: !0, q: !0 } }
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
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetAvatarHistory_Response";
            }),
            r
          );
        })(c),
        A = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.avatar_sha1 || a.a(r.M()),
              c.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(i.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      avatar_sha1: {
                        n: 1,
                        br: a.d.readString,
                        bw: a.h.writeString
                      },
                      user_uploaded: {
                        n: 2,
                        br: a.d.readBool,
                        bw: a.h.writeBool
                      },
                      timestamp: {
                        n: 3,
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
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetAvatarHistory_Response_AvatarData";
            }),
            r
          );
        })(c),
        B = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.results || a.a(r.M()),
              c.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(i.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: { results: { n: 1, c: s.b, r: !0, q: !0 } }
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
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetUserPartnerEventNews_Response";
            }),
            r
          );
        })(c),
        j = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.clanid || a.a(r.M()),
              c.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(i.d)(r, n),
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
                      appid: { n: 4, br: a.d.readUint32, bw: a.h.writeUint32 },
                      possible_takeover: {
                        n: 5,
                        br: a.d.readBool,
                        bw: a.h.writeBool
                      },
                      rtime32_last_modified: {
                        n: 6,
                        d: 0,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32
                      },
                      user_app_priority: {
                        n: 7,
                        br: a.d.readInt32,
                        bw: a.h.writeInt32
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
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_PartnerEventResult";
            }),
            r
          );
        })(c),
        D = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.results || a.a(r.M()),
              c.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(i.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: { results: { n: 1, c: j, r: !0, q: !0 } }
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
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetBestEventsForUser_Response";
            }),
            r
          );
        })(c),
        x = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return c.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              return e ? { $jspbMessageInstance: t } : {};
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
        })(c),
        L = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.appid || a.a(r.M()),
              c.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(i.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      appid: { n: 1, br: a.d.readUint32, bw: a.h.writeUint32 },
                      user_app_priority: {
                        n: 2,
                        br: a.d.readInt32,
                        bw: a.h.writeInt32
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
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_PartnerEventsAppPriority";
            }),
            r
          );
        })(c),
        I = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.priorities || a.a(r.M()),
              c.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(i.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: { priorities: { n: 1, c: L, r: !0, q: !0 } }
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
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetUserPartnerEventsAppPriorities_Response";
            }),
            r
          );
        })(c),
        k = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return c.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              return e ? { $jspbMessageInstance: t } : {};
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
        })(c),
        R = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return c.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              return e ? { $jspbMessageInstance: t } : {};
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
        })(c),
        N = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return c.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              return e ? { $jspbMessageInstance: t } : {};
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
        })(c),
        F = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.markings || a.a(r.M()),
              c.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(i.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: { markings: { n: 1, c: T, r: !0, q: !0 } }
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
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_MarkPartnerEventsForUser_Request";
            }),
            r
          );
        })(c),
        T = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.clanid || a.a(r.M()),
              c.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(i.d)(r, n),
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
                      display_location: {
                        n: 3,
                        br: a.d.readEnum,
                        bw: a.h.writeEnum
                      },
                      mark_shown: { n: 4, br: a.d.readBool, bw: a.h.writeBool },
                      mark_read: { n: 5, br: a.d.readBool, bw: a.h.writeBool }
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
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_MarkPartnerEventsForUser_Request_PartnerEventMarking";
            }),
            r
          );
        })(c),
        P = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return c.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(i.d)(r, n),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              return e ? { $jspbMessageInstance: t } : {};
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
        })(c),
        z = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.events || a.a(r.M()),
              c.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(i.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: { events: { n: 1, c: G, r: !0, q: !0 } }
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
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetUserPartnerEventViewStatus_Response";
            }),
            r
          );
        })(c),
        G = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.event_gid || a.a(r.M()),
              c.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(i.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      event_gid: {
                        n: 1,
                        br: a.d.readFixed64String,
                        bw: a.h.writeFixed64String
                      },
                      last_shown_time: {
                        n: 2,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32
                      },
                      last_read_time: {
                        n: 3,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32
                      },
                      clan_account_id: {
                        n: 4,
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
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              a.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CCommunity_GetUserPartnerEventViewStatus_Response_PartnerEvent";
            }),
            r
          );
        })(c);
      ((l = r = r || {}).GetApps = function(e, t) {
        return e.SendMsg("Community.GetApps#1", t, p, {
          bConstMethod: !0,
          ePrivilege: 2,
          eWebAPIKeyRequirement: 1
        });
      }),
        (l.GetAppRichPresenceLocalization = function(e, t) {
          return e.SendMsg("Community.GetAppRichPresenceLocalization#1", t, d, {
            ePrivilege: 1
          });
        }),
        (l.GetCommentThread = function(e, t) {
          return e.SendMsg("Community.GetCommentThread#1", t, v, {
            ePrivilege: 1
          });
        }),
        (l.PostCommentToThread = function(e, t) {
          return e.SendMsg("Community.PostCommentToThread#1", t, _, {
            ePrivilege: 3
          });
        }),
        (l.DeleteCommentFromThread = function(e, t) {
          return e.SendMsg("Community.DeleteCommentFromThread#1", t, g, {
            ePrivilege: 1
          });
        }),
        (l.RateCommentThread = function(e, t) {
          return e.SendMsg("Community.RateCommentThread#1", t, y, {
            ePrivilege: 3
          });
        }),
        (l.GetCommentThreadRatings = function(e, t) {
          return e.SendMsg("Community.GetCommentThreadRatings#1", t, w, {
            ePrivilege: 2
          });
        }),
        (l.RateClanAnnouncement = function(e, t) {
          return e.SendMsg("Community.RateClanAnnouncement#1", t, E, {
            ePrivilege: 3
          });
        }),
        (l.GetClanAnnouncementVoteForUser = function(e, t) {
          return e.SendMsg("Community.GetClanAnnouncementVoteForUser#1", t, S, {
            ePrivilege: 1
          });
        }),
        (l.GetAvatarHistory = function(e, t) {
          return e.SendMsg("Community.GetAvatarHistory#1", t, M, {
            ePrivilege: 1
          });
        }),
        (l.GetUserPartnerEventNews = function(e, t) {
          return e.SendMsg("Community.GetUserPartnerEventNews#1", t, B, {
            bConstMethod: !0,
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2
          });
        }),
        (l.GetBestEventsForUser = function(e, t) {
          return e.SendMsg("Community.GetBestEventsForUser#1", t, D, {
            bConstMethod: !0,
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2
          });
        }),
        (l.MarkPartnerEventsForUser = function(e, t) {
          return e.SendMsg("Community.MarkPartnerEventsForUser#1", t, P, {
            ePrivilege: 1
          });
        }),
        (l.GetUserPartnerEventViewStatus = function(e, t) {
          return e.SendMsg("Community.GetUserPartnerEventViewStatus#1", t, z, {
            bConstMethod: !0,
            ePrivilege: 1
          });
        }),
        (l.PartnerEventsShowMoreForApp = function(e, t) {
          return e.SendMsg("Community.PartnerEventsShowMoreForApp#1", t, R, {
            ePrivilege: 1
          });
        }),
        (l.PartnerEventsShowLessForApp = function(e, t) {
          return e.SendMsg("Community.PartnerEventsShowLessForApp#1", t, N, {
            ePrivilege: 1
          });
        }),
        (l.ClearUserPartnerEventsAppPriorities = function(e, t) {
          return e.SendMsg(
            "Community.ClearUserPartnerEventsAppPriorities#1",
            t,
            x,
            { ePrivilege: 1 }
          );
        }),
        (l.GetUserPartnerEventsAppPriorities = function(e, t) {
          return e.SendMsg(
            "Community.GetUserPartnerEventsAppPriorities#1",
            t,
            I,
            { ePrivilege: 1 }
          );
        }),
        (l.ClearSinglePartnerEventsAppPriority = function(e, t) {
          return e.SendMsg(
            "Community.ClearSinglePartnerEventsAppPriority#1",
            t,
            k,
            { ePrivilege: 1 }
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
          return m;
        }),
        n.d(t, "a", function() {
          return d;
        }),
        n.d(t, "e", function() {
          return w;
        }),
        n.d(t, "f", function() {
          return E;
        }),
        n.d(t, "o", function() {
          return C;
        }),
        n.d(t, "c", function() {
          return S;
        }),
        n.d(t, "l", function() {
          return M;
        }),
        n.d(t, "m", function() {
          return A;
        }),
        n.d(t, "d", function() {
          return j;
        }),
        n.d(t, "n", function() {
          return D;
        }),
        n.d(t, "j", function() {
          return k;
        }),
        n.d(t, "g", function() {
          return R.a;
        });
      function r(e) {
        var t = e.value,
          n = e.onChange,
          r = e.disabled;
        return i.a.createElement(
          "div",
          {
            className: Object(c.a)(s.a.Toggle, r && s.a.Disabled),
            onClick: function() {
              return !r && n(!t);
            }
          },
          i.a.createElement("div", { className: s.a.ToggleRail }),
          i.a.createElement("div", {
            className: Object(c.a)(
              s.a.ToggleRail,
              s.a.Highlight,
              t ? s.a.On : s.a.Off
            )
          }),
          i.a.createElement("div", {
            className: Object(c.a)(s.a.ToggleSwitch, t ? s.a.On : s.a.Off)
          })
        );
      }
      var h = n("mrSG"),
        f = n("q1tI"),
        i = n.n(f),
        b = n("6Y59"),
        v = n("TLQK"),
        o = n("bxiW"),
        c = n("exH9"),
        a = n("umRa"),
        s = n.n(a),
        l = x("DialogHeader"),
        u = (x("DialogSubHeader"), x("DialogFooter")),
        p = x("DialogLabel _DialogLayout"),
        m = x("DialogBodyText"),
        d = x("DialogBody"),
        _ = (x("DialogInnerBody"), x("DialogBodyNotificationBar")),
        g = x("DialogTwoColLayout _DialogColLayout"),
        y = x("DialogThreeColLayout _DialogColLayout");
      x("DialogTwoThirdColLayout _DialogColLayout"),
        x("DialogColumn _DialogLayout");
      function w(e) {
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
      var O = (function(e) {
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
      function E(e) {
        var t = e.classNameContent,
          n = e.bCenterVertically,
          r = Object(h.f)(e, ["classNameContent", "bCenterVertically"]);
        return f.createElement(
          w,
          { className: t, bCenterVertically: n },
          f.createElement(O, Object(h.a)({}, r))
        );
      }
      function C(e) {
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
      function S(e) {
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
      function M(e) {
        return f.createElement(
          g,
          null,
          f.createElement(
            C,
            { onClick: e.onOK, disabled: e.bOKDisabled },
            e.strOKText || Object(v.e)("#Button_Confirm"),
            " "
          ),
          f.createElement(
            S,
            { onClick: e.onCancel },
            e.strCancelText || Object(v.e)("#Button_Cancel")
          )
        );
      }
      function A(e) {
        return f.createElement(
          y,
          null,
          f.createElement(
            C,
            { onClick: e.onOK, disabled: e.bOKDisabled },
            e.strOKText || Object(v.e)("#Button_Confirm"),
            " "
          ),
          f.createElement(
            C,
            { onClick: e.onUpdate, disabled: e.bUpdateDisabled },
            e.strUpdateText || Object(v.e)("#Button_Update"),
            " "
          ),
          f.createElement(
            S,
            { onClick: e.onCancel },
            e.strCancelText || Object(v.e)("#Button_Cancel")
          )
        );
      }
      var B = (function(n) {
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
                        f.createElement(b.p, {
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
                      f.createElement(b.p, null)
                    )
              );
            }),
            t
          );
        })(B),
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
                          Object(v.e)("#Dialog_Off")
                        ),
                        f.createElement(
                          "div",
                          {
                            className:
                              "DialogOnOffToggle_Option On" +
                              (this.state.checked ? " Active" : "")
                          },
                          Object(v.e)("#Dialog_On")
                        )
                      )
                )
              );
            }),
            Object(h.c)([o.a], t.prototype, "OnOffKeyDown", null),
            Object(h.c)([o.a], t.prototype, "OnNewUIToggle", null),
            t
          );
        })(B);
      function x(n) {
        return function(e) {
          var t = n + (e.className ? " " + e.className : "");
          return f.createElement("div", Object(h.a)({}, e, { className: t }));
        };
      }
      var L = n("hJxo"),
        I = n("r64O"),
        k = (function(n) {
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
                    (n.m_CopiedAnimation = new L.b(
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
                        S,
                        {
                          className: "DialogInput_CopyAction Primary",
                          onClick: this.OnCopyClick
                        },
                        Object(v.e)("#Button_CopyLink")
                      ),
                      f.createElement(
                        "div",
                        { style: p, className: l },
                        "Link Copied"
                      )
                    ),
                  (o || (i && s.value)) &&
                    f.createElement(
                      "div",
                      {
                        className: "DialogInput_ClearAction",
                        onClick: this.OnClearClick
                      },
                      f.createElement(b.cb, null)
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
                            Object(v.e)("#Input_Error_NumberTooSmall"),
                            " "
                          )
                        : null,
                      this.state.m_bNumberAboveMaxRange
                        ? f.createElement(
                            "div",
                            null,
                            " ",
                            Object(v.e)("#Input_Error_NumberTooLarge"),
                            " "
                          )
                        : null,
                      this.state.m_bIsInvalidURL
                        ? f.createElement(
                            "div",
                            null,
                            " ",
                            Object(v.e)("#Input_Error_MustBeURL"),
                            " "
                          )
                        : null,
                      this.state.m_bIsInvalidEmail
                        ? f.createElement(
                            "div",
                            null,
                            " ",
                            Object(v.e)("#Input_Error_MustBeEmail"),
                            " "
                          )
                        : null,
                      this.state.m_bIsNotNumeric
                        ? f.createElement(
                            "div",
                            null,
                            " ",
                            Object(v.e)("#Input_Error_MustBeNumber"),
                            " "
                          )
                        : null
                    )
                  )
                : d;
            }),
            Object(h.c)([o.a], e.prototype, "OnInputRef", null),
            Object(h.c)([o.a], e.prototype, "OnChanged", null),
            Object(h.c)([o.a], e.prototype, "OnCopyClick", null),
            Object(h.c)([o.a], e.prototype, "OnClearClick", null),
            e
          );
        })(f.PureComponent),
        R = (f.Component, n("ZApo")),
        N = n("2vnA"),
        F = n("sUmc"),
        T = n("Kw0F"),
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
            (this.m_embeddedElement = new F.a("DragGhosts")),
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
              T.b(this.m_rgDropRegions, e),
                T.b(this.m_rgActiveDropRegions, e),
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
                for (var a = 0, s = r; a < s.length; a++) {
                  var c = s[a],
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
                    (i = n + u),
                    G(
                      t,
                      n,
                      (o = e.GetDragDocument().body.getBoundingClientRect())
                    ) &&
                      !G(r, i, o, !0) &&
                      ((a = P.c(
                        r,
                        o.left,
                        o.right,
                        o.left - 200,
                        o.right + 200
                      )),
                      (s = P.c(
                        i,
                        o.top,
                        o.bottom,
                        o.top - 100,
                        o.bottom + 100
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
            Object(h.c)([o.a], e.prototype, "OnDragGhostRef", null),
            e
          );
        })(),
        H = (function(t) {
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
                  Object(h.a)({ ref: this.m_divRef, className: s }, a, o, {
                    draggable: t
                  }),
                  i
                )
              );
            }),
            (e.prototype.renderDropGhost = function() {
              return this.props.fnRenderDropGhost
                ? this.props.fnRenderDropGhost()
                : f.createElement(W, { elContent: this.GetClone() });
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
            Object(h.c)([N.k], e.prototype, "ResetDragState", null),
            Object(h.c)([o.a], e.prototype, "OnHTMLDragStart", null),
            Object(h.c)([o.a], e.prototype, "OnHTMLDragEnd", null),
            e
          );
        })(f.Component),
        W = (function(e) {
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
                    { htmlElementRef: this.m_divRef, className: o },
                    i,
                    { navStop: i.navStop || !!i.onClick }
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
      n.d(t, "a", function() {
        return i;
      });
      var r = n("hRO2");
      r.Message;
      function i(e) {
        return "unknown EMsg ( " + e + " )";
      }
    },
    OS8t: function(e, t, n) {
      "use strict";
      n.d(t, "d", function() {
        return i;
      }),
        n.d(t, "h", function() {
          return o;
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
        i = h.BinaryReader.prototype,
        o = h.BinaryWriter.prototype;
      function a(e) {
        var t = {},
          n = e.fields;
        for (var r in n) {
          var i = n[r];
          t[i.n] = i;
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
              i = t.r;
            t.d, t.q;
            if (!a.hasOwnProperty(e)) return;
            var o = a[e];
            r
              ? i
                ? h.Message.setRepeatedWrapperField(
                    c,
                    n,
                    (Array.isArray(o) ? o : []).map(function(e) {
                      return r.fromObject(e);
                    })
                  )
                : h.Message.setWrapperField(c, n, r.fromObject(o))
              : h.Message.setField(c, n, o);
          })(n);
        return c;
      }
      function c(e, t, n) {
        e.proto;
        var r = e.fields,
          i = {};
        for (var o in r) {
          var a,
            s,
            c = r[o],
            l = c.n,
            u = c.c,
            p = c.r,
            m = c.d,
            d = c.q;
          u
            ? p
              ? (i[o] = h.Message.toObjectList(
                  h.Message.getRepeatedWrapperField(n, u, l),
                  u.toObject,
                  t
                ))
              : (a = h.Message.getWrapperField(n, u, l, d ? 1 : 0)) &&
                (i[o] = u.toObject(t, a))
            : (null ===
                (s = h.Message.getFieldWithDefault(
                  n,
                  l,
                  void 0 !== m ? m : null
                )) &&
                !d) ||
              (i[o] = s);
        }
        return t && (i.$jspbMessageInstance = n), i;
      }
      function l(e, t, n) {
        for (; n.nextField() && !n.isEndGroup(); ) {
          var r,
            i,
            o,
            a,
            s,
            c = e[n.getFieldNumber()];
          c
            ? ((r = c.n),
              (i = c.c),
              (o = c.r),
              c.d,
              c.q,
              (a = c.br),
              i
                ? ((s = new i()),
                  n.readMessage(s, i.deserializeBinaryFromReader),
                  o
                    ? h.Message.addToRepeatedWrapperField(t, r, s, i)
                    : h.Message.setWrapperField(t, r, s))
                : a
                ? ((s = a.call(n)),
                  o
                    ? h.Message.addToRepeatedField(t, r, s)
                    : h.Message.setField(t, r, s))
                : (console.assert(
                    a,
                    "Reader func not set for field number " +
                      r +
                      " in class " +
                      i
                  ),
                  n.skipField()))
            : n.skipField();
        }
        return t;
      }
      function u(e, t, n) {
        var r = e.fields;
        for (var i in r) {
          var o,
            a = r[i],
            s = a.n,
            c = a.c,
            l = a.r,
            u = (a.d, a.q),
            p = a.bw;
          c
            ? l
              ? (((o = h.Message.getRepeatedWrapperField(t, c, s)) &&
                  o.length) ||
                  u) &&
                n.writeRepeatedMessage(s, o, c.serializeBinaryToWriter)
              : (o = h.Message.getWrapperField(t, c, s, u ? 1 : 0)) &&
                n.writeMessage(s, o, c.serializeBinaryToWriter)
            : p
            ? void 0 !== (o = h.Message.getField(t, s)) && p.call(n, s, o)
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
            i = r.n,
            o = r.c,
            a = r.r,
            s = r.d;
          r.q;
          r.hasOwnProperty("d")
            ? (t.prototype[n] = m(h.Message.getFieldWithDefault, i, s))
            : (t.prototype[n] = o
                ? a
                  ? m(h.Message.getRepeatedWrapperField, o, i)
                  : (function(t, n) {
                      return function(e) {
                        return (
                          void 0 === e && (e = !0),
                          h.Message.getWrapperField(this, t, n, e ? 1 : 0)
                        );
                      };
                    })(o, i)
                : m(h.Message.getField, i)),
            (t.prototype["set_" + n] = d(
              o
                ? a
                  ? h.Message.setRepeatedWrapperField
                  : h.Message.setWrapperField
                : h.Message.setField,
              i
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
              })(i, o));
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
      var i = n("mrSG"),
        o = n("hRO2"),
        a = n("OS8t"),
        s = o.Message;
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
            Object(i.d)(r, n),
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
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
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
            Object(i.d)(r, n),
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
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
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
            Object(i.d)(r, n),
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
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
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
            Object(i.d)(r, n),
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
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
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
            Object(i.d)(r, n),
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
              var t = new o.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return a.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
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
      n.d(t, "a", function() {
        return a;
      }),
        n.d(t, "e", function() {
          return s;
        }),
        n.d(t, "m", function() {
          return c;
        }),
        n.d(t, "k", function() {
          return p;
        }),
        n.d(t, "c", function() {
          return m;
        }),
        n.d(t, "b", function() {
          return d;
        }),
        n.d(t, "d", function() {
          return h;
        });
      var l = n("mrSG"),
        u = n("q1tI"),
        r = n("mgoM"),
        i = n("lkRc"),
        o = (n("r64O"), n("Z1oF"));
      n.d(t, "f", function() {
        return o.a;
      }),
        n.d(t, "g", function() {
          return o.b;
        }),
        n.d(t, "i", function() {
          return o.d;
        }),
        n.d(t, "j", function() {
          return o.e;
        }),
        n.d(t, "l", function() {
          return o.f;
        }),
        n.d(t, "n", function() {
          return o.h;
        }),
        n.d(t, "o", function() {
          return o.i;
        }),
        n.d(t, "p", function() {
          return o.j;
        }),
        n.d(t, "h", function() {
          return o.c;
        });
      var a = (function() {
        function e() {
          (this.m_mapTokens = new Map()),
            (this.m_mapFallbackTokens = new Map());
        }
        return (
          (e.GetLanguageFallback = function(e) {
            return "sc_schinese" === e ? "schinese" : "english";
          }),
          (e.prototype.InitFromObjects = function(e, t, n, r, i) {
            i || this.m_mapTokens.clear();
            var o = Object(l.a)(Object(l.a)({}, n || {}), e),
              a = Object(l.a)(Object(l.a)({}, r || {}), t || {});
            this.AddTokens(o, a);
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
          (e.prototype.GetELanguageFallbackOrder = function(e) {
            void 0 === e && (e = !1);
            var t = new Array();
            return (
              t.push(Object(r.g)(i.c.LANGUAGE)),
              (i.c.SUPPORTED_LANGUAGES || []).forEach(function(e) {
                e.value != i.c.LANGUAGE && t.push(Object(r.g)(e.value));
              }),
              e &&
                r.h.forEach(function(e) {
                  -1 == t.indexOf(e) && t.push(e);
                }),
              t
            );
          }),
          (e.prototype.SetPreferredLocales = function(e) {
            this.m_rgLocalesToUse = e;
          }),
          (e.prototype.LocalizeString = function(e) {
            if ((0, e && 0 != e.length && "#" == e.charAt(0))) {
              var t = this.m_mapTokens.get(e.substring(1));
              if (void 0 !== t) return t;
            }
          }),
          (e.prototype.LocalizeStringFromFallback = function(e) {
            if (e && 0 != e.length && "#" == e.charAt(0)) {
              var t = this.m_mapFallbackTokens.get(e.substring(1));
              if (void 0 !== t) return t;
            }
          }),
          e
        );
      })();
      function s(e) {
        for (var r = [], t = 1; t < arguments.length; t++)
          r[t - 1] = arguments[t];
        var n = h.LocalizeString(e);
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
      function c(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        var r = h.LocalizeString(e);
        if (void 0 === r) return e;
        for (var i, o = [], a = /(.*?)%(\d+)\$s/g, s = 0; (i = a.exec(r)); ) {
          (s += i[0].length), o.push(i[1]);
          var c = parseInt(i[2]);
          1 <= c && c <= t.length && o.push(t[c - 1]);
        }
        return (
          o.push(r.substr(s)),
          u.createElement.apply(u, Object(l.g)([u.Fragment, null], o))
        );
      }
      function p(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        return s.apply(
          void 0,
          1 === t || "1" === t
            ? Object(l.g)([e, t], n)
            : Object(l.g)([e + "_Plural", t], n)
        );
      }
      var m = {
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
      function d() {
        var e = "koreana" == i.c.LANGUAGE ? "korean" : i.c.LANGUAGE;
        return m[e] || null;
      }
      var h = new a();
      window.LocalizationManager = h;
    },
    TtDX: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return u;
      });
      var r = n("mrSG"),
        i = n("q1tI"),
        o = n("X3Ds"),
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
          i = void 0,
          o = void 0,
          a = t;
        if (a.preventDefault && a.stopPropagation) {
          if (a.shiftKey) return null;
          a.preventDefault(),
            a.stopPropagation(),
            (r = a.currentTarget),
            (i = a.clientX),
            (o = a.clientY);
        } else r = t;
        var s = new m(e, r, i, o, n);
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
                  (this.m_rctElement = i.createElement(a.f, e, t)));
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
                  (this.m_submenu = new d(this, t(), e)),
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
            Object(r.c)([s.C], e.prototype, "m_bVisible", void 0),
            e
          );
        })(c),
        m = (function(s) {
          function c(e, t, n, r, i) {
            var o = s.call(this, t.ownerDocument.defaultView) || this;
            c.sm_iActiveContextMenuInstance &&
              c.sm_iActiveContextMenuInstance.Hide(),
              ((c.sm_iActiveContextMenuInstance = o).m_options = i || {});
            var a = {
              element: t,
              clientX: n,
              clientY: r,
              instance: o,
              options: o.m_options,
              fnOnMenuItemSelected: function() {
                o.Hide();
              }
            };
            return o.Init(a, e), o;
          }
          return (
            Object(r.d)(c, s),
            (c.prototype.Show = function() {
              this.m_options.bDisableMouseOverlay ||
                ((this.m_embeddedElementInstanceOverlay = Object(l.b)(
                  this.m_ownerWindow.document
                )),
                this.m_embeddedElementInstanceOverlay.Show(
                  i.createElement(a.e)
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
        d = (function(o) {
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
        return pe;
      });
      var c = n("mrSG"),
        l = n("q1tI"),
        r = n.n(l),
        u = n("exH9"),
        i = n("bxiW"),
        W = { x: "y", y: "x" };
      function V() {
        return { x: 0, y: 0 };
      }
      function F(e, t) {
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
      var T = n("Kw0F"),
        f = n("r64O"),
        Z = n("X3Ds");
      var v,
        a,
        s = (function() {
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
        })();
      ((a = v = v || {})[(a.A = 0)] = "A"),
        (a[(a.B = 1)] = "B"),
        (a[(a.X = 2)] = "X"),
        (a[(a.Y = 3)] = "Y"),
        (a[(a.Menu = 4)] = "Menu");
      var p = r.a.createContext(void 0);
      var d,
        m,
        h,
        b,
        J,
        _,
        g = "Focusable",
        y = "FocusGroup",
        w = "NavArea",
        O = (function() {
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
        E = 0;
      function Q() {
        for (var e, t = [], n = 0; n < arguments.length; n++)
          t[n] = arguments[n];
        O.IsLoggingToConsole &&
          (0 < t.length && "string" == typeof t[0]
            ? ((e = t.shift()),
              console.log.apply(console, Object(c.g)(["\t".repeat(E) + e], t)))
            : console.log.apply(console, t));
      }
      function C(e, t, n) {
        if (!O.IsLoggingToConsole) return n;
        var r = n.value;
        return (
          (n.value = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            ++E;
            try {
              var n = r.apply(this, e);
              return --E, n;
            } catch (e) {
              throw (--E, e);
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
      function S(e) {
        for (
          var t = 1, n = e.ownerDocument.defaultView, r = e;
          null != r;
          r = r.parentElement
        ) {
          var i = parseFloat(n.getComputedStyle(r).zoom);
          0 < i && (t *= i);
        }
        return t;
      }
      function ne(e) {
        if (O.IsDocumentUsingZoom) {
          var t = S(e),
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
      function M(e, t) {
        e && ("function" == typeof e ? e(t) : (e.current = t));
      }
      function A(e, t, n) {
        var r = e,
          i = null != r.getAttribute("data-nav"),
          o = i ? r.getAttribute("data-nav-scroll-axes") : void 0;
        if (i && o !== h.XY && o !== t) return d.None;
        var a =
            "x" === t
              ? [r.scrollLeft, r.scrollWidth, r.clientWidth]
              : [r.scrollTop, r.scrollHeight, r.clientHeight],
          s = a[0],
          c = a[1],
          l = a[2],
          u = -1 === n ? Math.abs(s) < 1 : Math.abs(s + l - c) <= 1;
        if (i) return u ? d.AtEnd : d.Scrollable;
        if (!u && c <= l) return d.None;
        var p = r.ownerDocument.defaultView.getComputedStyle(r),
          m = "x" === t ? p.overflowX : p.overflowY;
        return "auto" === m || "scroll" === m
          ? u
            ? d.AtEnd
            : d.Scrollable
          : d.None;
      }
      ((m = d = d || {})[(m.None = 2)] = "None"),
        (m[(m.Scrollable = 1)] = "Scrollable"),
        (m[(m.AtEnd = 3)] = "AtEnd"),
        ((b = h = h || {}).X = "x"),
        (b.Y = "y"),
        (b.XY = "xy"),
        ((_ = J = J || {}).Area = "area"),
        (_.Group = "group"),
        (_.Stop = "stop"),
        (_.Click = "click");
      var B = l.createContext(null);
      function j(e) {
        for (var t = [], n = e; null != n; n = n.parent) t.push(n.key);
        return t.reverse(), JSON.stringify(t);
      }
      var D,
        x,
        L = l.createContext(void 0),
        I = l.createContext(void 0),
        k = l.createContext(void 0);
      function R(e, i, o) {
        var a = null != e.navKey ? e.navKey : void 0;
        return null != a && O.IsNavEnabled
          ? l.createElement(I.Consumer, null, function(r) {
              return l.createElement(k.Consumer, null, function(n) {
                return l.createElement(L.Consumer, null, function(e) {
                  var t = { parent: e, key: a };
                  return (
                    "function" == typeof o && o(t, r, n),
                    l.createElement(L.Provider, { value: t }, i)
                  );
                });
              });
            })
          : i;
      }
      ((x = D = D || {}).Lazy = "lazy"),
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
              var i,
                o,
                a = this.m_containerRef.current;
              a
                ? ((i = S(a)),
                  null != r
                    ? ((a.style.opacity = n ? "100%" : "75%"),
                      (a.style.left = r.x / i + "px"),
                      (a.style.top = r.y / i + "px"))
                    : null != t
                    ? ((o = ne(t)),
                      (a.style.opacity = n
                        ? "100%"
                        : O.IsFocusMarkerAlwaysVisible
                        ? "25%"
                        : "0%"),
                      (a.style.left = o.x.min / i + "px"),
                      (a.style.top = o.y.min / i + "px"))
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
            Object(c.c)([C], e.prototype, "HandleOnFocusChanged", null),
            e
          );
        })(l.Component),
        P = (function() {
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
                  ? (Q(n + " none"), (r.style.display = "none"))
                  : null != this.m_focusedElement &&
                    ((e = ne(this.m_focusedElement)),
                    (t = S(r)),
                    Q(
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
                      : O.IsFocusMarkerAlwaysVisible
                      ? "25%"
                      : "0%"),
                    (r.style.left = e.x.min / t - this.m_nPaddingPx + "px"),
                    (r.style.top = e.y.min / t - this.m_nPaddingPx + "px"),
                    (r.style.width =
                      (e.x.max - e.x.min) / t + 2 * this.m_nPaddingPx + "px"),
                    (r.style.height =
                      (e.y.max - e.y.min) / t + 2 * this.m_nPaddingPx + "px"));
            }),
            Object(c.c)([C], e.prototype, "HandleOnFocusChanged", null),
            Object(c.c)([i.a], e.prototype, "HandleOnAnimationFrame", null),
            e
          );
        })(),
        z = (function() {
          function e() {}
          return (
            (e.prototype.FocusableElementAttributes = function(e) {
              var t = {};
              return (
                O.IsNavEnabled && e.navStop && (t.tabIndex = -2),
                "number" == typeof e.tabStop && (t.tabIndex = e.tabStop),
                !0 === e.tabStop && (t.tabIndex = 0),
                t
              );
            }),
            e
          );
        })(),
        G = (function(r) {
          function e(e) {
            var t = r.call(this) || this;
            (t.m_focusListeners = new Map()),
              (t.m_blurListeners = new Map()),
              Q("HDFC.constructor"),
              (t.m_doc = e);
            var n = t.m_doc.defaultView;
            return n ? (t.m_win = n) : Q("- No window!"), t;
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
                ? (Q("HDFC Focus e.focus {", e), e.focus(t), Q("+ }"))
                : te(this.m_doc.activeElement) &&
                  (Q("HDFC Focus null with active IsHTMLElement e.blur() {", e),
                  this.m_doc.activeElement.blur(),
                  Q("+ }"));
            }),
            (e.prototype.Click = function(e) {
              Q("HDFC Click: e.click {"), e.click(), Q("+ }");
            }),
            (e.prototype.AddFocusListener = function(t) {
              Q("CHtmlDomFocusController AddFocusListener");
              function e(e) {
                te(e.target) &&
                  (Q("HDFC focus listener {"), t(e.target), Q("+ }"));
              }
              this.m_focusListeners.set(t, e),
                this.m_win.addEventListener("focus", e, !0);
            }),
            (e.prototype.RemoveFocusListener = function(e) {
              Q("CHtmlDomFocusController RemoveFocusListener");
              var t = this.m_focusListeners.get(e);
              this.m_doc.removeEventListener("focus", t, !0),
                this.m_focusListeners.delete(e);
            }),
            (e.prototype.AddBlurListener = function(t) {
              Q("CHtmlDomFocusController AddBlurListener");
              function e(e) {
                te(e.target) &&
                  (Q("HDFC blur listener {"), t(e.target), Q("+ }"));
              }
              this.m_blurListeners.set(t, e),
                this.m_win.addEventListener("blur", e, !0);
            }),
            (e.prototype.RemoveBlurListener = function(e) {
              Q("CHtmlDomFocusController RemoveBlurListener");
              var t = this.m_blurListeners.get(e);
              this.m_doc.removeEventListener("blur", t, !0),
                this.m_blurListeners.delete(e);
            }),
            Object(c.c)([C], e.prototype, "Focus", null),
            Object(c.c)([C], e.prototype, "Click", null),
            Object(c.c)([C], e.prototype, "AddFocusListener", null),
            Object(c.c)([C], e.prototype, "RemoveFocusListener", null),
            Object(c.c)([C], e.prototype, "AddBlurListener", null),
            Object(c.c)([C], e.prototype, "RemoveBlurListener", null),
            e
          );
        })(z);
      function U(e, t) {
        e.navScrollX && (t["data-nav-scroll-snap-type-x"] = e.navScrollX),
          e.navScrollY && (t["data-nav-scroll-snap-type-y"] = e.navScrollY),
          e.navScrollMarginX &&
            (t["data-nav-scroll-snap-margin-x"] = e.navScrollMarginX),
          e.navScrollMarginY &&
            (t["data-nav-scroll-snap-margin-y"] = e.navScrollMarginY);
      }
      var H = new Map();
      function ie(e, t) {
        H.set(e, t);
      }
      function oe(e) {
        H.delete(e);
      }
      function ae(e) {
        return H.get(e);
      }
      var se,
        ce,
        le = (function() {
          function e() {}
          return (
            (e.Attributes = function(e, t) {
              var n = {};
              if (
                (O.IsNavEnabled &&
                  (e.navClick && (n["data-nav"] = J.Click),
                  !e.navClick && e.navStop && (n["data-nav"] = J.Stop),
                  !e.navClick &&
                    e.navStop &&
                    e.noPrimaryAction &&
                    (n["data-nav-npa"] = "true"),
                  !e.navClick &&
                    e.preferredNavStop &&
                    (n["data-nav-preferred"] = "true"),
                  U(e, n)),
                !t)
              )
                return n;
              var r = t.FocusableElementAttributes(e);
              return r ? Object(c.a)(Object(c.a)({}, n), r) : n;
            }),
            Object.defineProperty(e, "navStopClass", {
              get: function() {
                return O.IsNavEnabled ? g : void 0;
              },
              enumerable: !1,
              configurable: !0
            }),
            e
          );
        })(),
        ue = (function(e) {
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
                ? oe(this.m_htmlElement)
                : ((this.m_htmlElement = e),
                  this.NeedsComponentFromElement &&
                    ie(this.m_htmlElement, this),
                  M(this.props.htmlElementRef, e));
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
                i = (e.children,
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
              return null != this.context && O.IsNavEnabled
                ? Object(c.a)(
                    Object(c.a)(
                      Object(c.a)(
                        {},
                        le.Attributes(
                          e,
                          this.context.GetFocusControllerDomIntegrator()
                        )
                      ),
                      {
                        className: Object(u.a)(le.navStopClass, r),
                        ref:
                          t || this.NeedsComponentFromElement ? this.SetRef : n
                      }
                    ),
                    i
                  )
                : Object(c.a)({ className: r, ref: n }, i);
            }),
            (t.prototype.GotFocus = function() {
              null != this.m_navAddress &&
                null != this.m_currentNavEpoch &&
                this.m_currentNavEpoch.SetFocusAddress(this.m_navAddress);
            }),
            (t.prototype.componentDidMount = function() {
              var e, t, n;
              O.IsDebuggingNavAddresses &&
                null != this.m_htmlElement &&
                null != this.m_navAddress &&
                this.m_htmlElement.setAttribute(
                  "data-nav-addr",
                  j(this.m_navAddress)
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
                          var n = [e, t], r = n[0], i = n[1];
                          ;
                          r = r.parent, i = i.parent
                        ) {
                          if (null == r && null == i) return 1;
                          if (null == r || null == i || r.key !== i.key) return;
                        }
                      })(n, this.m_navAddress)
                    : this.props.startFocused &&
                      this.m_htmlElement &&
                      this.context) &&
                    this.context.ClaimFocus(this.m_htmlElement));
            }),
            (t.prototype.render = function() {
              var r = this;
              return l.createElement(p.Consumer, null, function(e) {
                return (
                  (r.m_actionDescriptionContext = e),
                  R(
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
            (t.contextType = B),
            (t.defaultProps = { navStop: !1, tabStop: !1 }),
            Object(c.c)([i.a], t.prototype, "SetRef", null),
            t
          );
        })(l.Component),
        pe = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_elementType = "div"), e;
          }
          return Object(c.d)(e, t), e;
        })(ue);
      ((ce = se = se || {}).Geometry = "Geometry"),
        (ce.DomOrder = "DomOrder"),
        (ce.ReverseDomOrder = "ReverseDomOrder");
      var me = (function(e) {
        function a() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(c.d)(a, e),
          (a.GetOnNavOut = function(e) {
            var t = ae(e);
            if (t && t instanceof a) return t.props.onNavOut;
          }),
          (a.Attributes = function(e) {
            if (!O.IsNavEnabled) return {};
            var t = { "data-nav": J.Group };
            return (
              e.xOrder && (t["data-nav-xorder"] = e.xOrder),
              e.yOrder && (t["data-nav-yorder"] = e.yOrder),
              e.scrollAxes && (t["data-nav-scroll-axes"] = e.scrollAxes),
              e.preferredNavStopWithin && (t["data-nav-preferred"] = "true"),
              e.enterAsScrolledAxes &&
                (t["data-nav-enter-as-scrolled-axes"] = e.enterAsScrolledAxes),
              U(e, t),
              t
            );
          }),
          (a.prototype.NeedsComponentFromElement = function() {
            return !!this.props.onNavOut || null != this.props.navKey;
          }),
          (a.prototype.SetRef = function(e) {
            null == e
              ? oe(this.m_htmlElement)
              : ((this.m_htmlElement = e),
                this.NeedsComponentFromElement && ie(this.m_htmlElement, this),
                M(this.props.htmlElementRef, e));
          }),
          (a.prototype.FocusWithin = function() {
            this.m_htmlElement && he.FocusWithin(this.m_htmlElement);
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
            O.IsDebuggingNavAddresses &&
              null != this.m_htmlElement &&
              null != this.m_navAddress &&
              this.m_htmlElement.setAttribute(
                "data-nav-addr",
                j(this.m_navAddress)
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
              i = e.children,
              o = Object(c.f)(e, [
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
            return null != this.context && O.IsNavEnabled
              ? R(
                  this.props,
                  l.createElement(
                    "div",
                    Object(c.a)(
                      { ref: this.SetRef },
                      a.Attributes(this.props),
                      { className: Object(u.a)(y, n) },
                      o
                    ),
                    i
                  ),
                  function(e, t, n) {
                    (r.m_navAddress = e),
                      (r.m_recalledNavEpoch = t),
                      (r.m_currentNavEpoch = n);
                  }
                )
              : l.createElement(
                  "div",
                  Object(c.a)({ ref: t, className: n }, o),
                  i
                );
          }),
          (a.contextType = B),
          Object(c.c)([i.a], a.prototype, "SetRef", null),
          Object(c.c)([C], a, "GetOnNavOut", null),
          a
        );
      })(l.Component);
      var de = (function() {
          function e(e) {
            (this.m_navAreaStack = []),
              (this.m_elementNavAreaMap = new Map()),
              (this.m_focusControllers = new s()),
              (this.m_focusMarkers = new s()),
              (this.m_defaultFocusController = new G(e));
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
        he = (function(n) {
          function H(e) {
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
                void 0 === H.sm_htmlDomFocusControllerDomIntegrator &&
                (H.sm_htmlDomFocusControllerDomIntegrator = new z()),
              t
            );
          }
          return (
            Object(c.d)(H, n),
            (H.FocusWithin = function(e) {
              var t,
                n = H.GetNavAreaObjects(e, "NavArea.FocusWithin", {
                  target: !0,
                  navArea: !0,
                  activeNavArea: !1
                }),
                r = n.navArea,
                i = n.navAreaElement,
                o = (n.activeNavArea, n.activeNavAreaElement);
              n.dn;
              null != r &&
                (Q("NavArea.FocusWithin", e),
                (null != o && o == i) ||
                  (Q(
                    "+ (" +
                      o.id +
                      ") is active, but FG in (" +
                      r.props.id +
                      "); activating."
                  ),
                  r.Activate()),
                null != (t = r.FindBestNavStopFocus(e)) &&
                  (Q("+ focusing:", t.htmlElement, t.pos),
                  r.SetFocus(t.htmlElement, t.pos)));
            }),
            (H.HandleKeyDown = function(t) {
              var e,
                n,
                r,
                i,
                o,
                a,
                s,
                c,
                l,
                u,
                p,
                m = "NavArea.HandleKeyDown",
                d = this.GetNavAreaObjects(t.target, m, {
                  target: !1,
                  navArea: !1,
                  activeNavArea: !1
                }),
                h = d.navArea,
                f = d.activeNavArea,
                b = (d.doc, d.dn);
              null != f
                ? ((f.m_focusClaimElement = void 0),
                  Q(
                    m +
                      " '" +
                      t.key +
                      "' target in:" +
                      (h ? h.props.id : "-") +
                      " active:(" +
                      (f ? f.props.id : "-") +
                      ")"
                  ),
                  this.SetIsDoingKeyNav(b, !0),
                  (n = function() {
                    null != t.preventDefault && t.preventDefault(),
                      null != t.stopPropagation && t.stopPropagation();
                  }),
                  (r = H.k_KeyNavigationDirections[t.key])
                    ? (Q("+ Arrow Key."),
                      (i = r[0]),
                      (o = r[1]),
                      (a = f.FindNextNavStop(i, o)) &&
                        this.IsTargetable(a.htmlElement) &&
                        (f.SetFocus(a.htmlElement, a.pos), n()))
                    : (Q("+ Non-Arrow Key."),
                      (u =
                        null ===
                          (e =
                            null ==
                            (l =
                              null == (c = (s = f.GetFocusedElement()) && ae(s))
                                ? void 0
                                : c.m_actionDescriptionContext)
                              ? void 0
                              : l.currentActions) || void 0 === e
                          ? void 0
                          : e.find(function(e) {
                              return (
                                e.button ===
                                (function(e) {
                                  if (
                                    (console.info("pressed " + e.key),
                                    e.ctrlKey)
                                  )
                                    switch (e.key) {
                                      case "1":
                                        return v.Menu;
                                      default:
                                        return;
                                    }
                                  switch (e.key) {
                                    case "Enter":
                                      return v.A;
                                    case "Escape":
                                      return v.B;
                                    case "backspace":
                                      return v.X;
                                    case " ":
                                      return v.Y;
                                    default:
                                      return;
                                  }
                                })(t)
                              );
                            }))
                        ? (Q("+ actionDescription {"),
                          u.action(),
                          n(),
                          Q("+ }"))
                        : "Enter" === t.key
                        ? (null != (p = f.GetFocusedElement()) &&
                            "true" == p.getAttribute("data-nav-npa")) ||
                          !f.ClickFocusedElement() ||
                          n()
                        : "Escape" === t.key
                        ? f.props.onGoBack &&
                          (Q("+ onGoBack {"), f.props.onGoBack(), n(), Q("+ }"))
                        : "1" === t.key &&
                          t.ctrlKey &&
                          f.props.onHome &&
                          (Q("+ onHome {"), f.props.onHome(), n(), Q("+ }"))))
                : Q(m + ": no active nav area.");
            }),
            (H.SetDefaultFocusMarker = function(e) {
              H.sm_defaultFocusMarker = e;
            }),
            (H.GetDocumentNavState = function(e) {
              return H.sm_documentStates.get(e);
            }),
            (H.GetActiveNavArea = function(e) {
              var t = e.m_navAreaStack;
              if (0 !== t.length) return t[t.length - 1];
            }),
            (H.SetIsDoingKeyNav = function(e, t) {
              H.sm_bIsDoingKeyNav = t;
            }),
            (H.GetIsDoingKeyNav = function(e) {
              return H.sm_bIsDoingKeyNav;
            }),
            (H.GetNavAreaObjects = function(r, i, o) {
              if (!O.IsNavEnabled) return {};
              if (!te(r))
                return (
                  Object(f.a)(
                    !0 !== o.target,
                    i + " expects target is HTML element."
                  ),
                  {}
                );
              var e = r,
                a = e.ownerDocument;
              if (null == a)
                return (
                  Object(f.a)(
                    !0 !== o.target,
                    i + " expects target has ownerDocument.",
                    e
                  ),
                  {}
                );
              if (!a.contains(r))
                return (
                  Object(f.a)(
                    !0 !== o.target,
                    i + " expects target is in document."
                  ),
                  {}
                );
              var s = H.GetDocumentNavState(a);
              if (null == s)
                return (
                  Object(f.a)(!1, i + " expects target document nav state"), {}
                );
              var t =
                  null == o.navArea
                    ? {}
                    : (function() {
                        var e = H.FindAncestorNavAreaElement(r);
                        if (null == e)
                          return (
                            Object(f.a)(
                              !0 !== o.navArea,
                              i + " expects target has nav area ancestor."
                            ),
                            {}
                          );
                        var t = e.ownerDocument;
                        if (null == t)
                          return (
                            Object(f.a)(
                              !0 !== o.navArea,
                              i + " expects target nav area has ownerDocument."
                            ),
                            {}
                          );
                        if (!t.contains(e))
                          return (
                            Object(f.a)(
                              !0 !== o.navArea,
                              i + " expects target nav area is in document."
                            ),
                            {}
                          );
                        if (!(t === a))
                          return (
                            Object(f.a)(
                              !0 !== o.navArea,
                              i +
                                " expects target and target nav area are in same document."
                            ),
                            {}
                          );
                        var n = s.m_elementNavAreaMap.get(e);
                        return null == n
                          ? (Object(f.a)(
                              !0 !== o.navArea,
                              i + " expects target nav area is registered."
                            ),
                            {})
                          : { navArea: n, navAreaElement: e };
                      })(),
                n = t.navArea,
                c = void 0 === n ? void 0 : n,
                l = t.navAreaElement,
                u = void 0 === l ? void 0 : l,
                p =
                  null == o.activeNavArea
                    ? {}
                    : (function() {
                        var e = H.GetActiveNavArea(s);
                        if (null == e)
                          return (
                            Object(f.a)(
                              !0 !== o.activeNavArea,
                              i + " expects nav area is registered."
                            ),
                            {}
                          );
                        var t = e.m_navAreaDivRef.current,
                          n = t.ownerDocument;
                        return null == n
                          ? (Object(f.a)(
                              !0 !== o.activeNavArea,
                              i + " expects nav area has ownerDocument."
                            ),
                            {})
                          : n.contains(t)
                          ? n === a
                            ? { activeNavArea: e, activeNavAreaElement: t }
                            : (Object(f.a)(
                                !0 !== o.navArea,
                                i +
                                  " expects target and active nav area are in same document."
                              ),
                              {})
                          : (Object(f.a)(
                              !0 !== o.activeNavArea,
                              i + " expects nav area is in document."
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
            (H.FindAncestorNavAreaElement = function(e) {
              return Object(Z.j)(e, function(e) {
                return e.getAttribute("data-nav") === J.Area;
              });
            }),
            (H.IsTargetable = function(e) {
              var t = e.getAttribute("data-nav");
              return t === J.Stop || t === J.Click;
            }),
            (H.IsFocusable = function(e) {
              return e.getAttribute("data-nav") === J.Stop;
            }),
            (H.IsClickable = function(e) {
              return e.getAttribute("data-nav") === J.Stop;
            }),
            (H.FindAnchorElement = function(e) {
              return e;
            }),
            (H.GetScrollOffset = function(e, t, n) {
              var r = e,
                i = r.getAttribute("data-nav-enter-as-scrolled-axes");
              if (i === h.XY || i === t) return null;
              var o = null != r.getAttribute("data-nav"),
                a = o ? r.getAttribute("data-nav-scroll-axes") : void 0;
              return o && a !== h.XY && a !== t
                ? null
                : "x" === t
                ? { x: r.scrollLeft, y: 0 }
                : { x: 0, y: r.scrollTop };
            }),
            (H.UpdateFocusPosAfterLayoutChange = function(e, t) {
              for (
                var n = e;
                null != n;
                n = H.FindAncestorNavAreaElement(n.parentElement)
              ) {
                var r = t.m_elementNavAreaMap.get(n),
                  i = r.m_focusPos,
                  o = r.GetFocusPos();
                i !== o && ((r.m_focusPos = o), r.UpdateFocusMarker(!0));
              }
            }),
            (H.FindNextNavStopInContainer = function(c, e, l, u, p, t, n) {
              Q(
                "NavArea.FindNextNavStopInContainer c:" +
                  $(c) +
                  " foc:" +
                  $(e) +
                  " " +
                  ee(l)
              );
              var r,
                i,
                o =
                  "x" === u
                    ? "data-nav-xorder"
                    : "y" === u
                    ? "data-nav-yorder"
                    : void 0,
                a = c.getAttribute(o),
                s = a === se.Geometry || null == a,
                m = a === se.ReverseDomOrder,
                d = n ? H.GetScrollOffset(c, u, p) : null,
                h = d ? q(d, -1) : null,
                f = h ? K(l, h) : l,
                b = W[u],
                v = -1 === (V()[u] = p) ? "max" : "min",
                _ = { min: f[b], max: f[b] },
                g =
                  t && te(e)
                    ? ((r = _),
                      (i = ne(e)[b]),
                      {
                        min: r.min < i.min ? r.min : i.min,
                        max: r.max > i.max ? r.max : i.max
                      })
                    : _,
                y = null,
                w = null,
                O = 1 / 0,
                E = Object(Z.k)(c, "data-nav");
              m != (-1 === p) && E.reverse();
              for (
                var C = [], S = null == e ? 0 : null, M = 0, A = E;
                M < A.length;
                M++
              ) {
                if ((z = A[M]) !== e) {
                  if (
                    (null !== S && ++S, z.getAttribute("data-nav") !== J.Area)
                  ) {
                    n &&
                      null === y &&
                      "true" === z.getAttribute("data-nav-preferred") &&
                      (y = z);
                    var B = 0;
                    if (s) {
                      var j = ne(z),
                        D = f[u],
                        x = p * (j[u][v] - D);
                      if (x < 0) continue;
                      var L = f[b],
                        I = j[b].min,
                        k = j[b].max,
                        R = L < I ? L - I : k < L ? L - k : 0;
                      if (t) if (!X(g, { min: I, max: k })) continue;
                      var N = { x: 0, y: 0 };
                      (N[u] = j[u][v]), (N[b] = L + R);
                      var F = Y(f, N),
                        B = (x * x + R * R) / Math.abs(F[u]);
                    } else {
                      if (null == S) continue;
                      B = S;
                    }
                    B < O && ((O = B), (w = z)),
                      C.push({ score: B, element: z });
                  }
                } else S = 0;
              }
              function T(e, t) {
                void 0 === t && (t = !1);
                var n = e.getAttribute("data-nav");
                if (n === J.Stop || n === J.Click) {
                  if (te(e)) {
                    var r = e,
                      i = re(r),
                      o = !l || t ? i : { x: l.x, y: l.y };
                    o[u] = i[u];
                    var a = { htmlElement: r, pos: o };
                    return d && (a.onscreenTestElement = c), a;
                  }
                  return null;
                }
                if (n === J.Group) {
                  var s = H.FindNextNavStopInContainer(
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
                (Q("+ Searching " + E.length + " elements:", E, C, y, w), y) &&
                (P = T(y, !0))
              )
                return P;
              if (w) {
                if ((P = T(w))) return P;
                C.sort(function(e, t) {
                  return e.score - t.score;
                });
                for (var z, G = 0; G < C.length; ++G) {
                  if ((z = C[G].element) !== w) {
                    var U = T(z);
                    if (U) return U;
                  }
                }
              }
              return null;
            }),
            (H.FindNextNavStopWithinAndAcrossContainers = function(
              e,
              t,
              n,
              r,
              i
            ) {
              Q(
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
              for (var o = t; ; ) {
                var a = Object(Z.i)(e, o, "data-nav"),
                  s = H.FindNextNavStopInContainer(a, o, n, r, i, !0, !1);
                if (null !== s) return s;
                if (a === e) return null;
                for (var c = o.parentElement; c && c !== a; ) {
                  if (A(c, r, i) === d.Scrollable) return null;
                  c = c.parentElement;
                }
                if (!c) return null;
                if (c === a && A(c, r, i) === d.Scrollable) return null;
                var l = me.GetOnNavOut(a);
                if (l) {
                  Q("+ onNavOut {");
                  var u = V();
                  u[r] = i;
                  var p = l(u);
                  if ((Q("+ } => " + p), !1 === p)) return null;
                }
                o = a;
              }
            }),
            (H.AddEventListeners = function(e) {
              for (var t = 0, n = H.k_EventListeners; t < n.length; t++) {
                var r = n[t],
                  i = r[0],
                  o = r[1];
                e.addEventListener(i, o, !0);
              }
            }),
            (H.RemoveEventListeners = function(e) {
              for (var t = 0, n = this.k_EventListeners; t < n.length; t++) {
                var r = n[t],
                  i = r[0],
                  o = r[1];
                e.removeEventListener(i, o, !0);
              }
            }),
            (H.HandleAllOnKeyDown = function(e) {
              Q("NavArea.HandleAllOnKeyDown " + e.key),
                H.HandleKeyDown({
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
            (H.HandleAllOnScroll = function(e) {
              var t,
                n = "NavArea.HandleAllOnScroll",
                r = H.GetNavAreaObjects(e.target, n, {
                  target: !0,
                  navArea: !1
                }),
                i = r.navArea,
                o = r.navAreaElement,
                a = r.dn;
              null != i &&
                (Q(n + " (" + i.props.id + ") " + $(e.target)),
                null != (t = ae(e.target)) &&
                  t instanceof me &&
                  t.UpdateScrollPos(),
                H.UpdateFocusPosAfterLayoutChange(o, a));
            }),
            (H.HandleAllOnAnimationStart = function(e) {}),
            (H.HandleAllOnAnimationEnd = function(e) {
              var t = H.GetNavAreaObjects(
                  e.target,
                  "NavArea.HandleAllOnAnimationEnd",
                  { target: !0, navArea: !1 }
                ),
                n = t.navArea,
                r = t.navAreaElement,
                i = t.dn;
              null != n && H.UpdateFocusPosAfterLayoutChange(r, i);
            }),
            (H.HandleAllOnTransitionStart = function(e) {}),
            (H.HandleAllOnTransitionEnd = function(e) {
              var t = H.GetNavAreaObjects(
                  e.target,
                  "NavArea.HandleAllOnTransitionEnd",
                  { target: !0, navArea: !1 }
                ),
                n = t.navArea,
                r = t.navAreaElement,
                i = t.dn;
              null != n &&
                (n.m_focusMarker.IsEventSource(e) ||
                  H.UpdateFocusPosAfterLayoutChange(r, i));
            }),
            (H.HandleAllOnMouseDown = function(e) {
              var t,
                n = "NavArea.HandleAllOnMouseDown",
                r = H.GetNavAreaObjects(e.target, n, {
                  target: !0,
                  navArea: !1
                }),
                i = r.navArea,
                o = r.dn;
              null != i &&
                (Q(n + " (" + i.props.id + "):", e.target),
                H.SetIsDoingKeyNav(o, !1),
                null !=
                  (null == (t = i.GetFocusController())
                    ? void 0
                    : t.HandleNavStopClick) &&
                  (Q("+ preventDefault"), e.preventDefault()));
            }),
            (H.HandleAllOnClick = function(e) {
              var t,
                n,
                r,
                i = "NavArea.HandleAllOnClick",
                o = H.GetNavAreaObjects(e.target, i, {
                  target: !0,
                  navArea: !1
                }).navArea;
              null != o &&
                (Q(i + " (" + o.props.id + "):", e.target),
                null !=
                (n =
                  null == (t = o.GetFocusController())
                    ? void 0
                    : t.HandleNavStopClick)
                  ? (r = e.target).getAttribute("data-nav") === J.Stop &&
                    (Q("+ handleNavStopClick {"), n(e, r), Q("+ }"))
                  : Q("+ nop."));
            }),
            (H.HandleFocusControllerOnFocus = function(e) {
              var t,
                n,
                r,
                i = "NavArea.HandleFocusControllerOnFocus",
                o = ae(e),
                a = null == o ? void 0 : o.m_actionDescriptionContext;
              a && a.setCurrentActions(a.focusActions),
                null != e.ownerDocument &&
                  ((n = (t = H.GetNavAreaObjects(e, i, {
                    target: !0,
                    navArea: !1
                  })).navArea),
                  (r = t.dn),
                  null != n &&
                    (Q(i + " (" + n.props.id + ")", e),
                    n !== H.GetActiveNavArea(r) && n.Activate(),
                    n.UpdateFocus(e)));
            }),
            (H.HandleFocusControllerOnBlur = function(e) {
              var t,
                n = "NavArea.HandleFocusControllerOnBlur",
                r = ae(e),
                i = null == r ? void 0 : r.m_actionDescriptionContext;
              i && i.setCurrentActions(void 0),
                null == e.ownerDocument ||
                  (null !=
                    (t = H.GetNavAreaObjects(e, n, { target: !0, navArea: !1 })
                      .navArea) &&
                    (Q(n + " (" + t.props.id + ")", e), t.UpdateFocus(null)));
            }),
            (H.prototype.HandleKeyDown = function(e) {
              H.HandleKeyDown({
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
            (H.prototype.GetFocusedElement = function() {
              var e = "NavArea.GetFocusedElement";
              if (
                (Q(e + " (" + this.props.id + ")"),
                null != this.GetElementDocState(e).dn)
              )
                return this.GetFocusController().GetFocus();
            }),
            (H.prototype.ClickFocusedElement = function() {
              Q("NavArea.ClickFocusedElement (" + this.props.id + ")");
              var e = this.GetFocusedElement();
              return null != e && (this.GetFocusController().Click(e), !0);
            }),
            (H.prototype.Blur = function(e) {
              var t = "NavArea.Blur";
              Q(t + " (" + this.props.id + ")");
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
                this === H.GetActiveNavArea(r) &&
                  this.GetFocusController().Focus(null),
                (this.m_inFocusCallType = n));
            }),
            (H.prototype.Activate = function() {
              var e = "NavArea.Activate";
              Q(
                e +
                  " (" +
                  this.props.id +
                  ") " +
                  (this.props.startInactive ? "startInactive" : "")
              );
              var t,
                n,
                r,
                i,
                o,
                a,
                s = this.GetElementDocState(e),
                c = s.thisElement,
                l = s.dn;
              null != l &&
                (null != (t = H.GetActiveNavArea(l)) &&
                  t != this &&
                  (Q(
                    "+ remembering last focused element:",
                    t.m_focusedHtmlElement,
                    t.m_focusPos
                  ),
                  (t.m_lastFocusedHtmlElement = t.m_focusedHtmlElement),
                  (t.m_lastFocusPosOffsetFromAnchorElement =
                    t.m_focusPosOffsetFromAnchorElement),
                  (t.m_focusedHtmlElement = null),
                  (t.m_focusPosOffsetFromAnchorElement = null)),
                (l.m_navAreaStack = Object(T.a)(l.m_navAreaStack, this)),
                c.setAttribute("data-nav-area-active", "true"),
                l.m_navAreaStack.push(this),
                null != (n = this.m_lastFocusedHtmlElement) && H.IsFocusable(n)
                  ? (Q("+ focusing last:", n, this.m_focusPos),
                    (r = H.FindAnchorElement(n))
                      ? ((i = re(r)),
                        this.SetFocus(
                          n,
                          K(i, this.m_lastFocusPosOffsetFromAnchorElement)
                        ))
                      : this.SetFocus(n, void 0))
                  : null !==
                      (o = this.FindBestNavStopFocus(
                        this.m_navAreaDivRef.current,
                        void 0,
                        void 0
                      )) && H.IsFocusable(o.htmlElement)
                  ? (Q("+ focusing found:", o.htmlElement, o.pos),
                    this.SetFocus(o.htmlElement, o.pos))
                  : Q("+ no focus found."),
                null != (a = this.props.onActivate) &&
                  (Q("+ onActivate {"), a(), Q("+ }")));
            }),
            (H.prototype.Deactivate = function() {
              var e = "NavArea.Deactivate";
              Q(
                e +
                  " (" +
                  this.props.id +
                  ") " +
                  (this.props.startInactive ? "startInactive" : "")
              );
              var t,
                n,
                r = this.GetElementDocState(e),
                i = r.thisElement,
                o = r.dn;
              null != o &&
                (this.Blur(),
                i.setAttribute("data-nav-area-active", "false"),
                (o.m_navAreaStack = Object(T.a)(o.m_navAreaStack, this)),
                null != (t = H.GetActiveNavArea(o)) && t.Activate(),
                Q("+ now active: " + (null != t ? t.props.id : "-")),
                null != (n = this.props.onDeactivate) &&
                  (Q("+ onDeactivate {"), n(), Q("+ }")));
            }),
            (H.prototype.GetFocusControllerDomIntegrator = function() {
              return null != this.props.focusController
                ? this.props.focusController
                : H.sm_htmlDomFocusControllerDomIntegrator;
            }),
            (H.prototype.GetFocusController = function() {
              return this.m_focusController;
            }),
            (H.prototype.ClaimFocus = function(e) {
              var t = "NavArea.ClaimFocus";
              null != this.m_navAreaDivRef.current
                ? null !== this.m_focusClaimElement
                  ? (Q(t + " first claim now."),
                    this.SetFocus(e, void 0),
                    (this.m_focusClaimElement = null))
                  : Q(t + " already claimed now, ignored.")
                : null == this.m_focusClaimElement
                ? (Q(t + " first claim delay."), (this.m_focusClaimElement = e))
                : Q(t + " already claimed delay, ignored.");
            }),
            (H.prototype.GetElementDoc = function(e) {
              if (!O.IsNavEnabled) return {};
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
            (H.prototype.GetElementDocState = function(e) {
              var t = this.GetElementDoc(e),
                n = t.thisElement,
                r = t.doc;
              if (null == r) return {};
              var i = H.GetDocumentNavState(r);
              return null == i
                ? (Object(f.a)(!1, e + " expects document nav state."), {})
                : { thisElement: n, doc: r, dn: i };
            }),
            (H.prototype.SetFocus = function(r, e) {
              var t, n, i, o, a, s, c, l, u, p, m, v, d;
              r.ownerDocument.contains(r)
                ? ((t = this.GetFocusController()),
                  r.getAttribute("data-nav") !== J.Click
                    ? ((n = this.m_inFocusCallType),
                      (this.m_inFocusCallType = "focus"),
                      Q(
                        "NavArea.SetFocus (" +
                          this.m_navAreaDivRef.current.id +
                          ") " +
                          ee(e),
                        r
                      ),
                      this.UpdateFocus(r, e),
                      (a = (o = (i = function(t, e) {
                        var n = Object(Z.j)(r, function(e) {
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
                      (s = o[1]),
                      (c = o[2]),
                      (u = (l = i(
                        "data-nav-scroll-snap-type-y",
                        "data-nav-scroll-snap-margin-y"
                      ))[0]),
                      (p = l[1]),
                      (m = l[2]),
                      s || p
                        ? (t.Focus(r, { preventScroll: !0 }),
                          (v = r.ownerDocument.defaultView),
                          (d = function(e, t, n, r) {
                            if (null != t)
                              for (
                                var i = ne(t),
                                  o = S(t),
                                  a = i[e].min - r * o,
                                  s = i[e].max + r * o,
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
                                  var u = v.getComputedStyle(c),
                                    p = "x" === e ? u.overflowX : u.overflowY;
                                  if ("auto" === p || "scroll" === p) {
                                    var m = ne(c);
                                    if (
                                      n === D.Lazy &&
                                      m[e].min <= a &&
                                      m[e].max >= s
                                    )
                                      return;
                                    var d = {
                                        min: a - m[e].min,
                                        max: s - m[e].max
                                      },
                                      h =
                                        n === D.Start
                                          ? 0
                                          : n === D.Center
                                          ? 0.5
                                          : n !== D.End &&
                                            Math.abs(d.min) <= Math.abs(d.max)
                                          ? 0
                                          : 1,
                                      f = S(c),
                                      b = ((1 - h) * d.min + h * d.max) / f;
                                    return (
                                      Q(
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
                                        ? (c.scrollLeft += b)
                                        : (c.scrollTop += b))
                                    );
                                  }
                                }
                              }
                          })("x", a, s, c),
                          d("y", u, p, m))
                        : t.Focus(r),
                      (this.m_inFocusCallType = n))
                    : t.Click(r))
                : Q(
                    "NavArea.SetFocus ** LOST ELEMENT ** (" +
                      this.m_navAreaDivRef.current.id +
                      ") " +
                      ee(e),
                    r
                  );
            }),
            (H.prototype.UpdateFocus = function(e, t) {
              var n, r;
              null == t &&
                null != e &&
                e != this.m_focusedHtmlElement &&
                (t = re(e)),
                Q("NavArea.UpdateFocus (" + this.props.id + ") " + ee(t), e),
                e != this.m_focusedHtmlElement &&
                  (Q("+ updating last focus element"),
                  null != (n = H.FindAnchorElement(e))
                    ? ((r = re(n)),
                      (this.m_focusPosOffsetFromAnchorElement = Y(r, t)))
                    : (this.m_focusPosOffsetFromAnchorElement = null),
                  (this.m_focusedHtmlElement = e),
                  (this.m_focusPos = null != t ? t : null));
              var i = ae(e);
              i instanceof ue && i.GotFocus(), this.UpdateFocusMarker(!1);
            }),
            (H.prototype.UpdateFocusMarker = function(e) {
              var t;
              Q("NavArea.UpdateFocusMarker " + $(this.m_navAreaDivRef.current)),
                null != this.m_focusMarker &&
                  ((t = H.GetIsDoingKeyNav(this.m_docNavState)),
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
            (H.prototype.GetFocusPos = function() {
              var e = this.m_navAreaDivRef.current,
                t = this.m_focusedHtmlElement,
                n = this.m_focusPosOffsetFromAnchorElement;
              if (e && t && e.contains(t) && n) {
                var r = H.FindAnchorElement(t);
                if (r) return K(re(r), n);
              }
              return this.m_focusPos;
            }),
            (H.prototype.FindBestNavStopFocus = function(e, t, n) {
              var r = "NavArea.FindBestNavStopFocus";
              if (!e) return null;
              var i = e.ownerDocument;
              if (!i) return null;
              Q(r + " #" + e.id + ".'" + e.className + "'");
              var o = this.m_focusClaimElement;
              if (
                ((this.m_focusClaimElement = void 0),
                null != o &&
                  i.contains(o) &&
                  e.contains(o) &&
                  o.getAttribute("data-nav") === J.Stop)
              )
                return { htmlElement: o, pos: re(o) };
              var a = this.m_focusedHtmlElement,
                s = this.GetFocusPos();
              if (
                a &&
                i.contains(a) &&
                e.contains(a) &&
                a.getAttribute("data-nav") === J.Stop
              )
                return { htmlElement: a, pos: s || re(a) };
              var c = Object(Z.k)(e, "data-nav").filter(function(e) {
                return te(e) && "true" === e.getAttribute("data-nav-preferred");
              });
              if (0 < c.length) {
                var l = c[0],
                  u = l.getAttribute("data-nav");
                if (u === J.Group) {
                  var p = this.FindBestNavStopFocus(l, t, n);
                  if (p) return p;
                } else if (u === J.Stop) {
                  return { htmlElement: l, pos: re(l) };
                }
              }
              var m = Array.from(
                e.querySelectorAll(
                  "[data-nav='" + J.Stop + "'],[data-nav='" + J.Click + "]"
                )
              ).filter(te);
              if (!m || 0 === m.length) return null;
              var d = H.GetNavAreaObjects(e, r, {
                  target: !0,
                  activeNavArea: !0
                }),
                h = d.activeNavArea,
                f = (d.activeNavAreaElement, d.dn);
              if (void 0 === f) return null;
              if (h.props.initFromBoundary && void 0 !== t && void 0 !== n) {
                var b =
                    "x" === t
                      ? "data-nav-xorder"
                      : "y" === t
                      ? "data-nav-yorder"
                      : void 0,
                  v = e.getAttribute(b);
                if (!(v === se.Geometry || null == v)) {
                  var _ =
                    (v === se.ReverseDomOrder) != (-1 === n)
                      ? m[m.length - 1]
                      : m[0];
                  return { htmlElement: _, pos: re(_) };
                }
                for (
                  var g = -1 === n ? "max" : "min",
                    y = null,
                    w = 1 / 0,
                    O = 0,
                    E = m;
                  O < E.length;
                  O++
                ) {
                  var C = n * ne((I = E[O]))[t][g];
                  C < w && ((w = C), (y = I));
                }
                if (null !== y) return { htmlElement: y, pos: re(y) };
              }
              var S,
                M = f.m_navAreaStack,
                A = Object(T.d)(M, function(e) {
                  return null !== e.m_focusPos;
                });
              if (A) {
                for (
                  var B = A.GetFocusPos(),
                    j = Number.POSITIVE_INFINITY,
                    D = null,
                    x = 0,
                    L = m;
                  x < L.length;
                  x++
                ) {
                  var I,
                    k = re((I = L[x])),
                    R = ((S = Y(B, k)), Math.sqrt(F(S, S)));
                  R < j && ((j = R), (D = I));
                }
                if (D) return { htmlElement: D, pos: re(D) };
              }
              var N = m[0];
              return N
                ? { htmlElement: N, pos: re(N) }
                : (Q("+ found no nav stop."), null);
            }),
            (H.prototype.FindNextNavStop = function(e, t) {
              var n = "NavArea.FindNextNavStop";
              Q(n + " (" + this.props.id + ")");
              var r = this.m_navAreaDivRef.current;
              if (!r) return null;
              var i = r.ownerDocument;
              if (!i || i !== this.m_document || !i.contains(r)) return null;
              var o,
                a,
                s,
                c,
                l,
                u = null,
                p = this.GetFocusController().GetFocus();
              if (
                (te(p) && i.contains(p) && p !== r && r.contains(p)
                  ? ((o =
                      (null !== this.m_focusPos &&
                        this.m_focusedHtmlElement === p &&
                        this.GetFocusPos()) ||
                      re(p)),
                    (s = H.FindNextNavStopWithinAndAcrossContainers(
                      r,
                      p,
                      o,
                      e,
                      t
                    )) ||
                      (Q(
                        n + ": Navigated to self (shouldn't happen!); retrying"
                      ),
                      (a = re(p)),
                      (s = H.FindNextNavStopWithinAndAcrossContainers(
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
                var m = i.defaultView;
                if (!m) return null;
                var d =
                    parseFloat(m.getComputedStyle(i.firstElementChild).zoom) ||
                    1,
                  h = {
                    x: { min: -40 * d, max: (m.innerWidth + 40) * d },
                    y: { min: -40 * d, max: (m.innerHeight + 40) * d }
                  },
                  f = ne(u.onscreenTestElement || u.htmlElement);
                if (X((c = h).x, (l = f).x) && X(c.y, l.y)) return u;
              }
              return null;
            }),
            (H.prototype.Register = function() {
              var e = "NavArea.Register";
              Q(e + " (" + this.props.id + ")");
              var t,
                n,
                r,
                i = this.GetElementDoc(e),
                o = i.thisElement,
                a = i.doc;
              null != a &&
                ((t = (function() {
                  var e = H.GetDocumentNavState(a);
                  if (null != e) return e;
                  Q("+ creating new DocumentNavState");
                  var t = new de(a);
                  return (
                    H.AddEventListeners(a), H.sm_documentStates.set(a, t), t
                  );
                })()),
                (this.m_document = a),
                (this.m_docNavState = t),
                null !=
                  (n =
                    this.props.focusController || t.m_defaultFocusController) &&
                  (t.m_focusControllers.has(n) ||
                    (n.AddFocusListener(H.HandleFocusControllerOnFocus),
                    n.AddBlurListener(H.HandleFocusControllerOnBlur)),
                  t.m_focusControllers.add(n)),
                (this.m_focusController = n),
                null !=
                  (r =
                    this.props.focusMarker ||
                    H.sm_defaultFocusMarker ||
                    (null != this.m_boxFocusMarker
                      ? this.m_boxFocusMarker
                      : (this.m_boxFocusMarker = new P(
                          this.m_boxFocusMarkerDivRef
                        )))) && t.m_focusMarkers.add(r),
                (this.m_focusMarker = r),
                t.m_elementNavAreaMap.set(o, this),
                this.props.startInactive || this.Activate());
            }),
            (H.prototype.Unregister = function() {
              var e = "NavArea.Unregister";
              Q(e + " (" + this.props.id + ")");
              var t,
                n,
                r = this.GetElementDocState(e),
                i = r.thisElement,
                o = r.doc,
                a = r.dn;
              null != a &&
                (this.Deactivate(),
                a.m_elementNavAreaMap.delete(i),
                null != (t = this.m_focusMarker) && a.m_focusMarkers.delete(t),
                null != (n = this.m_focusController) &&
                  (a.m_focusControllers.delete(n),
                  a.m_focusControllers.has(n) ||
                    (n.RemoveFocusListener(H.HandleFocusControllerOnFocus),
                    n.RemoveBlurListener(H.HandleFocusControllerOnBlur))),
                a.isEmpty &&
                  (H.RemoveEventListeners(o), H.sm_documentStates.delete(o)));
            }),
            (H.prototype.componentDidMount = function() {
              Q("NavArea.componentDidMount (" + this.props.id + ")"),
                this.Register();
            }),
            (H.prototype.componentWillUnmount = function() {
              Q("NavArea.componentWillUnmount (" + this.props.id + ")"),
                this.Unregister();
            }),
            (H.prototype.render = function() {
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
                i = Object(c.f)(e, [
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
                o = O.IsNavEnabled,
                a = O.IsPointerVisible,
                s = O.IsDefaultFocusMarkerVisible;
              return o
                ? l.createElement(
                    B.Provider,
                    { value: this },
                    l.createElement(
                      "div",
                      Object(c.a)(
                        {
                          "data-nav": J.Area,
                          "data-nav-area-active": "false",
                          "data-nav-area-pass": r ? "true" : void 0,
                          ref: this.m_navAreaDivRef,
                          className: Object(u.a)(w, t)
                        },
                        i
                      ),
                      o &&
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
                      o &&
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
                    Object(c.a)({ ref: this.m_navAreaDivRef, className: t }, i),
                    n
                  );
            }),
            (H.sm_documentStates = new Map()),
            (H.sm_bIsDoingKeyNav = !0),
            (H.k_EventListeners = [
              ["keydown", H.HandleAllOnKeyDown],
              ["scroll", H.HandleAllOnScroll],
              ["mousedown", H.HandleAllOnMouseDown],
              ["click", H.HandleAllOnClick],
              ["animationstart", H.HandleAllOnAnimationStart],
              ["animationend", H.HandleAllOnAnimationEnd],
              ["transitionstart", H.HandleAllOnTransitionStart],
              ["transitionend", H.HandleAllOnTransitionEnd]
            ]),
            (H.k_KeyNavigationDirections = {
              ArrowLeft: ["x", -1],
              ArrowRight: ["x", 1],
              ArrowUp: ["y", -1],
              ArrowDown: ["y", 1]
            }),
            Object(c.c)([C], H.prototype, "HandleKeyDown", null),
            Object(c.c)([C], H.prototype, "GetFocusedElement", null),
            Object(c.c)([C], H.prototype, "ClickFocusedElement", null),
            Object(c.c)([C], H.prototype, "Blur", null),
            Object(c.c)([C], H.prototype, "Activate", null),
            Object(c.c)([C], H.prototype, "Deactivate", null),
            Object(c.c)([C], H.prototype, "ClaimFocus", null),
            Object(c.c)([C], H.prototype, "SetFocus", null),
            Object(c.c)([C], H.prototype, "UpdateFocus", null),
            Object(c.c)([C], H.prototype, "UpdateFocusMarker", null),
            Object(c.c)([C], H.prototype, "FindBestNavStopFocus", null),
            Object(c.c)([C], H.prototype, "FindNextNavStop", null),
            Object(c.c)([C], H.prototype, "Register", null),
            Object(c.c)([C], H.prototype, "Unregister", null),
            Object(c.c)([C], H.prototype, "componentDidMount", null),
            Object(c.c)([C], H.prototype, "componentWillUnmount", null),
            Object(c.c)([C], H, "FocusWithin", null),
            Object(c.c)([C], H, "HandleKeyDown", null),
            Object(c.c)([C], H, "GetScrollOffset", null),
            Object(c.c)([C], H, "UpdateFocusPosAfterLayoutChange", null),
            Object(c.c)([C], H, "FindNextNavStopInContainer", null),
            Object(c.c)(
              [C],
              H,
              "FindNextNavStopWithinAndAcrossContainers",
              null
            ),
            Object(c.c)([C], H, "HandleAllOnKeyDown", null),
            Object(c.c)([C], H, "HandleAllOnScroll", null),
            Object(c.c)([C], H, "HandleAllOnAnimationStart", null),
            Object(c.c)([C], H, "HandleAllOnAnimationEnd", null),
            Object(c.c)([C], H, "HandleAllOnTransitionStart", null),
            Object(c.c)([C], H, "HandleAllOnTransitionEnd", null),
            Object(c.c)([C], H, "HandleAllOnMouseDown", null),
            Object(c.c)([C], H, "HandleAllOnClick", null),
            Object(c.c)([C], H, "HandleFocusControllerOnFocus", null),
            Object(c.c)([C], H, "HandleFocusControllerOnBlur", null),
            H
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
        i = n("vDqi"),
        h = n.n(i),
        f = n("mC9v"),
        o = n("kLLr"),
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
            (e.prototype.SendMsgAndAwaitResponse = function(o, a, s, c, l) {
              return Object(p.b)(this, void 0, void 0, function() {
                var t, n, r, i;
                return Object(p.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = null), (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]), [4, this.Send(o, a, s, l)]
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
                            (i = new u.BinaryReader(
                              r.GetPacket(),
                              r.TellGet(),
                              r.GetCountBytesRemaining()
                            )),
                            c.deserializeBinaryFromReader(t.Body(), i)),
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
              var i = this.CreateWebAPIURL(t),
                o = n.SerializeBody(),
                a = m.fromByteArray(o),
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
                  h.a.get(i, l)
                );
              var u = new FormData();
              return (
                this.m_bJsonMode
                  ? u.append("input_json", JSON.stringify(n.Body().toObject()))
                  : u.append("input_protobuf_encoded", a),
                h.a.post(i, u, l)
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
          return i;
        }),
        n.d(t, "f", function() {
          return o;
        }),
        n.d(t, "m", function() {
          return a;
        }),
        n.d(t, "l", function() {
          return s;
        }),
        n.d(t, "g", function() {
          return c;
        }),
        n.d(t, "h", function() {
          return l;
        }),
        n.d(t, "a", function() {
          return u;
        }),
        n.d(t, "n", function() {
          return p;
        }),
        n.d(t, "e", function() {
          return m;
        }),
        n.d(t, "o", function() {
          return d;
        }),
        n.d(t, "d", function() {
          return h;
        }),
        n.d(t, "i", function() {
          return f;
        }),
        n.d(t, "k", function() {
          return b;
        }),
        n.d(t, "j", function() {
          return v;
        });
      n("mrSG"), n("Kw0F"), n("r64O");
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
      function i(e, t) {
        for (; t; ) if ((t = t.parentElement) == e) return !0;
        return !1;
      }
      function o(e, t) {
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
      function s(e) {
        var t = void 0;
        return e && (t = e.ownerDocument.defaultView), t;
      }
      function c(e) {
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
      function l(e) {
        var t = "steam://openurl/";
        e.startsWith(t) && (e = e.slice(t.length)), c(e);
      }
      function u(e) {
        var t = e.ownerDocument;
        return (
          t.fullscreen ||
          t.webkitIsFullScreen ||
          t.mozFullScreen ||
          t.msFullscreenElement
        );
      }
      function p(e, t) {
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
      function d(e) {
        "loading" == document.readyState
          ? document.addEventListener("DOMContentLoaded", e)
          : e();
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
      function b(e, t) {
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
      function v(e, t) {
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
          return c;
        }),
        n.d(t, "f", function() {
          return o;
        }),
        n.d(t, "g", function() {
          return s;
        }),
        n.d(t, "i", function() {
          return f;
        }),
        n.d(t, "a", function() {
          return b;
        }),
        n.d(t, "c", function() {
          return O;
        }),
        n.d(t, "b", function() {
          return E;
        }),
        n.d(t, "d", function() {
          return S;
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
          i = r.bExcludeAgo ? "#TimeInterval_" : "#TimeSince_";
        if (e >= 2 * p.d.PerYear)
          return Object(u.e)(i + "XYears", Math.floor(e / p.d.PerYear));
        if (e >= p.d.PerYear)
          return (e -= p.d.PerYear) >= 2 * p.d.PerMonth && !r.bForceSingleUnits
            ? Object(u.e)(i + "1YearXMonths", Math.floor(e / p.d.PerMonth))
            : Object(u.e)(i + "1Year");
        if (e >= 2 * p.d.PerMonth)
          return Object(u.e)(i + "XMonths", Math.floor(e / p.d.PerMonth));
        if (e >= 2 * p.d.PerWeek)
          return Object(u.e)(i + "XWeeks", Math.floor(e / p.d.PerWeek));
        if (e >= p.d.PerWeek)
          return Object(u.e)(i + "1Week", Math.floor(e / p.d.PerWeek));
        if (e >= 2 * p.d.PerDay)
          return Object(u.e)(i + "XDays", Math.floor(e / p.d.PerDay));
        if (e >= p.d.PerDay)
          return (e -= p.d.PerDay) >= 2 * p.d.PerHour && !r.bForceSingleUnits
            ? Object(u.e)(i + "1DayXHours", Math.floor(e / p.d.PerHour))
            : Object(u.e)(i + "1Day");
        if (e >= 2 * p.d.PerHour)
          return Object(u.e)(i + "XHours", Math.floor(e / p.d.PerHour));
        if (e >= p.d.PerHour)
          return (e -= p.d.PerHour) >= 2 * p.d.PerMinute && !r.bForceSingleUnits
            ? Object(u.e)(i + "1HourXMinutes", Math.floor(e / p.d.PerMinute))
            : Object(u.e)(i + "1Hour");
        if (e >= 2 * p.d.PerMinute) {
          var o = Math.floor(e / p.d.PerMinute),
            a = e % p.d.PerMinute;
          return r.bHighGranularity && 0 != a
            ? 1 == a
              ? Object(u.e)(i + "XMinutes1Second", o)
              : Object(u.e)(i + "XMinutesXSeconds", o, a)
            : Object(u.e)(i + "XMinutes", o);
        }
        if (e >= p.d.PerMinute) {
          a = e % p.d.PerMinute;
          return r.bHighGranularity && 0 != a
            ? 1 == a
              ? Object(u.e)(i + "1Minute1Second")
              : Object(u.e)(i + "1MinuteXSeconds", a)
            : Object(u.e)(i + "1Minute");
        }
        return r.bHighGranularity
          ? 1 == e
            ? Object(u.e)(i + "1Second")
            : Object(u.e)(i + "XSeconds", e)
          : Object(u.e)(i + "LessThanAMinute");
      }
      function i(e, t) {
        var n = {
          weekday: "short",
          month: "long",
          day: "numeric",
          year: t ? void 0 : "numeric"
        };
        return new Date(1e3 * e).toLocaleDateString(
          u.d.GetPreferredLocales(),
          n
        );
      }
      function c(e) {
        var t = new Date(1e3 * e),
          n = t.setHours(0, 0, 0, 0);
        if ((r = d.get(n))) return r;
        var r = t.toLocaleDateString(u.d.GetPreferredLocales(), {
          year: "numeric",
          month: "short",
          day: "numeric"
        });
        return d.set(n, r), r;
      }
      function o(e) {
        return new Date(1e3 * e).toLocaleTimeString(u.d.GetPreferredLocales(), {
          hour: "numeric",
          minute: "numeric"
        });
      }
      var a = new Map();
      function s(e) {
        var t = new Date(1e3 * e),
          n = u.d.GetPreferredLocales(),
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
        var i = new Date();
        if ((i.setHours(0, 0, 0, 0), i <= r)) {
          if ((i.setDate(i.getDate() + 1), r < i))
            return Object(u.e)("#Time_Today");
          if ((i.setDate(i.getDate() + 1), r < i))
            return Object(u.e)("#Time_Tomorrow");
        } else if ((i.setDate(i.getDate() - 1), i <= r))
          return Object(u.e)("#Time_Yesterday");
        var o = { month: t ? "long" : "short", day: "numeric" },
          a = r.setHours(0, 0, 0, 0) + o.month,
          s = h.get(a);
        return (
          s ||
          ((s = r.toLocaleDateString(u.d.GetPreferredLocales(), o)),
          h.set(a, s),
          s)
        );
      }
      function b(e, t) {
        var n = new Date(1e3 * e),
          r = new Date(),
          i = Object(l.a)({ bGranularFutureTime: !1 }, t);
        if (r < n) {
          if (!i.bGranularFutureTime)
            return (
              m.b(n.getTime() - r.getTime()),
              (n.getFullYear() == r.getFullYear() ? C : M)(n)
            );
          m.b(new Date().setHours(24, 0, 0, 0) - r.getTime());
          var o = new Date();
          return (o.setHours(0, 0, 0, 0), o.setDate(o.getDate() + 1), n < o)
            ? Object(u.e)("#Time_Today")
            : (o.setDate(o.getDate() + 1),
              n < o
                ? Object(u.e)("#Time_Tomorrow")
                : (o.setDate(o.getDate() + 5), n < o ? E(n) : O(n, !0)));
        }
        m.b(new Date().setHours(24, 0, 0, 0) - r.getTime());
        var a = new Date();
        if ((a.setHours(0, 0, 0, 0), a <= n)) return Object(u.e)("#Time_Today");
        if ((a.setDate(a.getDate() - 1), a <= n))
          return Object(u.e)("#Time_Yesterday");
        if ((a.setDate(a.getDate() - 5), a <= n))
          return Object(u.e)("#TimeSince_ThisWeek");
        var s = new Date(a);
        if (
          (a.setDate(a.getDate() - 21),
          a <= n ||
            (n.getMonth() == r.getMonth() &&
              n.getFullYear() == r.getFullYear()))
        ) {
          var c =
            Math.floor((s.valueOf() - n.valueOf()) / (1e3 * p.d.PerWeek)) + 1;
          return 1 == c
            ? Object(u.e)("#TimeSince_1Week")
            : Object(u.e)("#TimeSince_XWeeks", c);
        }
        return (n.getFullYear() == r.getFullYear() ? C : M)(n);
      }
      var v = new Map(),
        _ = new Map(),
        g = new Map(),
        y = new Map(),
        w = new Map();
      function O(e, t) {
        void 0 === t && (t = !1);
        var n = e.getDate() + 31 * (e.getMonth() + 12 * e.getFullYear()),
          r = w.get(n);
        return (
          r ||
          ((r = e.toLocaleDateString(u.d.GetPreferredLocales(), {
            weekday: "long",
            day: "numeric",
            month: t ? "long" : "short"
          })),
          w.set(n, r),
          r)
        );
      }
      function E(e) {
        var t = v.get(e.getDay());
        return (
          t ||
          ((t = e.toLocaleDateString(u.d.GetPreferredLocales(), {
            weekday: "long"
          })),
          v.set(e.getDay(), t),
          t)
        );
      }
      function C(e) {
        var t = _.get(e.getMonth());
        return (
          t ||
          ((t = e.toLocaleDateString(u.d.GetPreferredLocales(), {
            month: "long"
          })),
          _.set(e.getMonth(), t),
          t)
        );
      }
      function S(e) {
        var t = g.get(e.getFullYear());
        return (
          t ||
          ((t = e.toLocaleDateString(u.d.GetPreferredLocales(), {
            year: "numeric"
          })),
          g.set(e.getFullYear(), t),
          t)
        );
      }
      function M(e) {
        var t = e.getMonth() + 12 * e.getFullYear(),
          n = y.get(t);
        return (
          n ||
          ((n = e.toLocaleDateString(u.d.GetPreferredLocales(), {
            month: "long",
            year: "numeric"
          })),
          y.set(t, n),
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
        a = n("6Y59"),
        s = n("bxiW"),
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
                    o.createElement(a.s, null)
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
            Object(r.c)([s.a], e.prototype, "OnInputRef", null),
            Object(r.c)([s.a], e.prototype, "ToggleMenu", null),
            Object(r.c)([s.a], e.prototype, "OnItemSelected", null),
            Object(r.c)([s.a], e.prototype, "ShowMenu", null),
            Object(r.c)([s.a], e.prototype, "HideMenu", null),
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
            Object(r.c)([s.a], e.prototype, "OnItemClicked", null),
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
        a = n("hRO2"),
        s = (n("NtSG"), n("RD/U")),
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
    gfbn: function(e, t, l) {
      "use strict";
      l.r(t);
      var u = l("mrSG"),
        o = (l("Wr5T"), l("i8i4")),
        n = l.n(o),
        a = l("q1tI"),
        s = l.n(a),
        r = l("vDqi"),
        i = l.n(r),
        c = (l("5izx"), l("lkRc"));
      var p = l("TLQK");
      l("mgoM");
      function m(e) {
        var i = e.config;
        return s.a.createElement(
          s.a.Fragment,
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
      var d = l("1fPh"),
        h = l("6TF7"),
        f = l.n(h),
        b = l("wd/R"),
        v = l("55Ip"),
        _ = l("Ty5D"),
        g = l("kyHq"),
        y = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(u.d)(t, e),
            (t.prototype.render = function() {
              if ("dev" !== c.c.WEB_UNIVERSE) return null;
              var t = document.getElementById(this.props.strConfigID);
              if (!t) return null;
              var n = new Array();
              return (
                t.getAttributeNames().forEach(function(e) {
                  e.toLocaleLowerCase().startsWith("data-") &&
                    (n.push(a.createElement("h1", { key: "header-" + e }, e)),
                    n.push(
                      a.createElement(w, {
                        key: "body-" + e,
                        data: JSON.parse(t.getAttribute(e))
                      })
                    ));
                }),
                a.createElement("div", null, n)
              );
            }),
            t
          );
        })(a.Component),
        w = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(u.d)(t, e),
            (t.prototype.render = function() {
              return a.createElement(
                "div",
                null,
                a.createElement(
                  "pre",
                  null,
                  JSON.stringify(this.props.data, null, 2)
                )
              );
            }),
            t
          );
        })(a.Component),
        O = l("Jqb/");
      var E = l("r64O"),
        C = l("kLLr");
      function S(i) {
        return function(t) {
          var e = Object(a.useState)(null),
            n = e[0],
            r = e[1];
          return (
            n ||
            (Promise.all([l.e(0), l.e(1), l.e(6)])
              .then(l.bind(null, "Wym2"))
              .then(function(e) {
                r(s.a.createElement(e[i], t));
              }),
            null)
          );
        };
      }
      function M() {
        return s.a.createElement(
          _.d,
          null,
          s.a.createElement(_.b, {
            exact: !0,
            path: d.b.EventViewByApp(
              ":appid(\\d+)",
              ":event_gid(\\d+)",
              ":vanity?"
            ),
            render: function(e) {
              return s.a.createElement(
                L,
                Object(u.a)(
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
          s.a.createElement(_.b, {
            exact: !0,
            path: d.b.EventViewByGroup(
              ":groupid(\\d+)",
              ":event_gid(\\d+)",
              ":vanity?"
            ),
            render: function(e) {
              return s.a.createElement(
                L,
                Object(u.a)(
                  { key: "detailview_" + e.match.params.event_gid },
                  e,
                  {
                    clansteamid: new C.a(e.match.params.groupid),
                    event_gid: e.match.params.event_gid,
                    bInfiniteScroll: "inline" == e.match.params.viewtype
                  }
                )
              );
            }
          }),
          s.a.createElement(_.b, {
            exact: !0,
            path: d.b.OldAnnouncementViewByApp(
              ":appid(\\d+)",
              ":announcement_gid(\\d+)",
              ":vanity?"
            ),
            render: function(e) {
              return s.a.createElement(
                L,
                Object(u.a)(
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
          s.a.createElement(_.b, {
            exact: !0,
            path: d.b.OldAnnouncementViewByGroup(
              ":groupid(\\d+)",
              ":announcement_gid(\\d+)",
              ":vanity?"
            ),
            render: function(e) {
              return s.a.createElement(
                L,
                Object(u.a)(
                  { key: "detailoldview_" + e.match.params.announcement_gid },
                  e,
                  {
                    clansteamid: new C.a(e.match.params.groupid),
                    announcement_gid: e.match.params.announcement_gid,
                    bInfiniteScroll: "old_inline" == e.match.params.viewtype
                  }
                )
              );
            }
          }),
          s.a.createElement(_.b, {
            exact: !0,
            path: d.b.NewsHubApp(":appid(\\d+)", ":vanity?"),
            render: function(e) {
              return s.a.createElement(
                x,
                Object(u.a)({ key: e.match.params.appid }, e, {
                  filter_to_appids: [Number(e.match.params.appid)]
                })
              );
            }
          }),
          s.a.createElement(_.b, {
            exact: !0,
            path: d.b.NewsHubGroup(":groupid(\\d+)", ":vanity?"),
            render: function(e) {
              return s.a.createElement(
                x,
                Object(u.a)({ key: e.match.params.groupid }, e, {
                  filter_to_clanids: [Number(e.match.params.groupid)]
                })
              );
            }
          }),
          s.a.createElement(_.b, {
            exact: !0,
            path: d.b.NewsHubCollection(":collectionid", ":vanity?"),
            render: function(e) {
              return s.a.createElement(
                x,
                Object(u.a)({ key: e.match.params.collectionid }, e, {
                  filter_to_collection: e.match.params.collectionid
                })
              );
            }
          }),
          s.a.createElement(_.b, {
            exact: !0,
            path: d.b.NewsHubSale(":saleid", ":vanity?"),
            render: function(e) {
              return s.a.createElement(
                x,
                Object(u.a)({ key: e.match.params.saleid }, e, {
                  filter_to_saleid: e.match.params.saleid
                })
              );
            }
          }),
          s.a.createElement(_.b, {
            exact: !0,
            path: d.b.NewsHub(),
            render: function(e) {
              return s.a.createElement(x, Object(u.a)({ key: "global" }, e));
            }
          })
        );
      }
      function A() {
        return s.a.createElement(
          _.d,
          null,
          s.a.createElement(_.b, {
            path: d.b.EventGameFestivalDebug(),
            render: function(e) {
              return s.a.createElement(
                k,
                Object(u.a)({}, e, {
                  clanAccountID: e.match.params.clanacountid,
                  clanEventGID: e.match.params.claneventgid
                })
              );
            }
          }),
          s.a.createElement(_.b, {
            exact: !0,
            path: d.b.EventBackfill(),
            render: function(e) {
              return s.a.createElement(j, Object(u.a)({}, e));
            }
          }),
          s.a.createElement(_.b, {
            path: d.b.EventModeration(),
            render: function(e) {
              return s.a.createElement(
                B,
                Object(u.a)({}, e, { appid: e.match.params.appid })
              );
            }
          })
        );
      }
      var B = S("EventModerationLanding"),
        j = S("EventBackfillLanding"),
        D = S("EventSaleDisplay"),
        x = S("EventCalendar"),
        L = S("EventDetailView"),
        I = S("Events"),
        k = S("EventSteamGameFestivalDebug"),
        R = l("Hny+"),
        N = s.a.lazy(function() {
          return Promise.all([l.e(0), l.e(1), l.e(7)]).then(
            l.bind(null, "3WEt")
          );
        }),
        F = s.a.lazy(function() {
          return Promise.all([l.e(0), l.e(1), l.e(3), l.e(36)]).then(
            l.bind(null, "CGeh")
          );
        }),
        T = s.a.lazy(function() {
          return Promise.all([l.e(0), l.e(1), l.e(3), l.e(68)]).then(
            l.bind(null, "tPo2")
          );
        }),
        P = s.a.lazy(function() {
          return Promise.all([l.e(0), l.e(1), l.e(4)]).then(
            l.bind(null, "NIbt")
          );
        }),
        z = s.a.lazy(function() {
          return Promise.all([l.e(0), l.e(1), l.e(5)]).then(
            l.bind(null, "3rT3")
          );
        }),
        G = (s.a.lazy(function() {
          return Promise.resolve().then(l.bind(null, "Hny+"));
        }),
        (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(u.d)(t, e),
            (t.prototype.componentDidMount = function() {
              var e = Object(p.b)();
              e &&
                (document.documentElement.setAttribute("lang", e),
                p.d.SetPreferredLocales([e]),
                b.locale(e));
            }),
            (t.prototype.render = function() {
              return (
                Object(E.a)(
                  null == window.Prototype,
                  "Should not include prototypejs."
                ),
                s.a.createElement(
                  v.a,
                  { basename: Object(d.a)() },
                  s.a.createElement(
                    "div",
                    { className: f.a.App },
                    s.a.createElement(
                      s.a.Suspense,
                      { fallback: s.a.createElement("div", null) },
                      s.a.createElement(
                        _.d,
                        null,
                        s.a.createElement(_.b, {
                          exact: !0,
                          path: d.b.DiagData(),
                          render: function(e) {
                            return s.a.createElement(
                              y,
                              Object(u.a)({}, e, {
                                key: "diab_data_" + e.match.params.gid,
                                strConfigID: "application_config"
                              })
                            );
                          }
                        }),
                        s.a.createElement(_.b, {
                          exact: !0,
                          path: d.b.AppStorePage(),
                          render: function(e) {
                            var t = e.match.params.appid;
                            return s.a.createElement(m, {
                              config: {
                                "events-row": function() {
                                  return s.a.createElement(I, {
                                    key: "appeventrow" + t,
                                    appid: t
                                  });
                                },
                                "review-award": function() {
                                  return s.a.createElement(T, {
                                    key: "appawardmodal" + t
                                  });
                                },
                                "broadcast-embed": function() {
                                  return s.a.createElement(
                                    P,
                                    Object(u.a)(
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
                        s.a.createElement(_.b, {
                          exact: !0,
                          path: d.b.SaleLandingPage(),
                          render: function(e) {
                            var t = e.match.params.salePagename;
                            return s.a.createElement(m, {
                              config: {
                                "sale-display": function() {
                                  return s.a.createElement(D, {
                                    key: "sale_" + t,
                                    promotionName: "sale_" + t,
                                    language: Object(g.g)(c.c.LANGUAGE)
                                  });
                                },
                                "broadcast-embed": function() {
                                  return s.a.createElement(
                                    P,
                                    Object(u.a)(
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
                        s.a.createElement(_.b, {
                          path:
                            "/(curator|pub|publisher|dev|developer|franchise)/:curator_vanity/admin",
                          component: z
                        }),
                        s.a.createElement(_.b, {
                          exact: !0,
                          path: d.b.CreatorSaleLandingPage(),
                          render: function(e) {
                            return s.a.createElement(m, {
                              config: {
                                "sale-display": function() {
                                  return s.a.createElement(D, {
                                    key:
                                      "salecreator_" +
                                      e.match.params.creatorPageName +
                                      "_" +
                                      e.match.params.salePageName,
                                    promotionName:
                                      "sale_" + e.match.params.salePageName,
                                    language: Object(g.g)(c.c.LANGUAGE)
                                  });
                                }
                              }
                            });
                          }
                        }),
                        s.a.createElement(_.b, {
                          exact: !0,
                          path: d.b.SubscriptionPlanLandingPage(),
                          render: function(e) {
                            return s.a.createElement(m, {
                              config: {
                                "sale-display": function() {
                                  return s.a.createElement(D, {
                                    key:
                                      "subscription_plan_" +
                                      e.match.params.salePageName,
                                    promotionName:
                                      "sale_" + e.match.params.salePageName,
                                    language: Object(g.g)(c.c.LANGUAGE)
                                  });
                                }
                              }
                            });
                          }
                        }),
                        s.a.createElement(_.b, {
                          path: d.b.RemotePlay(),
                          render: function(e) {
                            return s.a.createElement(m, {
                              config: {
                                "sale-display": function() {
                                  return s.a.createElement(D, {
                                    key: "sale_remoteplaylanding",
                                    promotionName: "remoteplaylanding",
                                    language: Object(g.g)(c.c.LANGUAGE)
                                  });
                                }
                              }
                            });
                          }
                        }),
                        s.a.createElement(_.b, {
                          path: d.b.RemotePlayTogether(),
                          render: function(e) {
                            return s.a.createElement(m, {
                              config: {
                                "sale-display": function() {
                                  return s.a.createElement(D, {
                                    key: "sale_together",
                                    promotionName: "sale_together",
                                    language: Object(g.g)(c.c.LANGUAGE)
                                  });
                                }
                              }
                            });
                          }
                        }),
                        s.a.createElement(_.b, {
                          exact: !0,
                          path: d.b.CuratorPage(),
                          render: function(e) {
                            return s.a.createElement(
                              P,
                              Object(u.a)(
                                {
                                  key:
                                    "curatorbroadcast_" +
                                    c.a.clanid +
                                    "_" +
                                    c.a.listid
                                },
                                e,
                                { clanid: c.a.clanid, listid: c.a.listid }
                              )
                            );
                          }
                        }),
                        s.a.createElement(_.b, {
                          exact: !0,
                          path: d.b.CreatorPage(),
                          render: function(e) {
                            return s.a.createElement(
                              P,
                              Object(u.a)(
                                {
                                  key:
                                    "creatorbroadcast_" +
                                    c.a.clanid +
                                    "_" +
                                    c.a.listid
                                },
                                e,
                                { clanid: c.a.clanid, listid: c.a.listid }
                              )
                            );
                          }
                        }),
                        s.a.createElement(_.b, {
                          exact: !0,
                          path: d.b.PackageStorePage(),
                          render: function(e) {
                            return s.a.createElement(P, {
                              key: "packagebroadcast_" + e.match.params.subid,
                              subid: e.match.params.subid
                            });
                          }
                        }),
                        s.a.createElement(_.b, {
                          exact: !0,
                          path: d.b.BundleStorePage(),
                          render: function(e) {
                            return s.a.createElement(P, {
                              key: "bundlebroadcast_" + e.match.params.bundleid,
                              bundleid: e.match.params.bundleid
                            });
                          }
                        }),
                        s.a.createElement(_.b, {
                          path: d.b.NewsHub(),
                          render: function(e) {
                            return s.a.createElement(M, null);
                          }
                        }),
                        s.a.createElement(_.b, {
                          path: d.b.EventAdmin(),
                          render: function(e) {
                            return s.a.createElement(A, null);
                          }
                        }),
                        s.a.createElement(_.b, {
                          exact: !0,
                          path: d.b.InteractiveRecommender(),
                          render: function(e) {
                            return s.a.createElement(N, null);
                          }
                        }),
                        s.a.createElement(_.b, {
                          exact: !0,
                          path: d.b.LabsSandbox(),
                          render: function(e) {
                            return s.a.createElement(R.default, null);
                          }
                        }),
                        !1,
                        s.a.createElement(_.b, {
                          path: d.b.Loyalty(),
                          render: function() {
                            return s.a.createElement(F, null);
                          }
                        }),
                        s.a.createElement(_.b, null, !1)
                      )
                    ),
                    s.a.createElement(O.b, {
                      ModalManager: Object(O.f)(window)
                    })
                  )
                )
              );
            }),
            t
          );
        })(s.a.Component)),
        U = l("WBba"),
        H = l("bxBv"),
        W = l("hRO2"),
        V = l("OS8t"),
        Y = (W.Message, W.Message);
      var K,
        q,
        X = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.product || V.a(r.M()),
              Y.initialize(t, e, 0, -1, [3], null),
              t
            );
          }
          return (
            Object(u.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      product: {
                        n: 1,
                        br: V.d.readString,
                        bw: V.h.writeString
                      },
                      version: {
                        n: 2,
                        br: V.d.readString,
                        bw: V.h.writeString
                      },
                      errors: { n: 3, c: Z, r: !0, q: !0 }
                    }
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function() {
              return r.sm_mbf || (r.sm_mbf = V.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              return V.g(r.M(), e, t);
            }),
            (r.fromObject = function(e) {
              return V.c(r.M(), e);
            }),
            (r.deserializeBinary = function(e) {
              var t = new W.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return V.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new W.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              V.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CClientMetrics_ReportClientError_Notification";
            }),
            r
          );
        })(Y),
        Z = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.identifier || V.a(r.M()),
              Y.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(u.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      identifier: {
                        n: 1,
                        br: V.d.readString,
                        bw: V.h.writeString
                      },
                      message: {
                        n: 2,
                        br: V.d.readString,
                        bw: V.h.writeString
                      },
                      count: { n: 3, br: V.d.readUint32, bw: V.h.writeUint32 }
                    }
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function() {
              return r.sm_mbf || (r.sm_mbf = V.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              return V.g(r.M(), e, t);
            }),
            (r.fromObject = function(e) {
              return V.c(r.M(), e);
            }),
            (r.deserializeBinary = function(e) {
              var t = new W.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return V.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new W.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              V.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CClientMetrics_ReportClientError_Notification_Error";
            }),
            r
          );
        })(Y);
      ((q = K = K || {}).ClientAppInterfaceStatsReport = function(e, t) {
        return e.SendNotification(
          "ClientMetrics.ClientAppInterfaceStatsReport#1",
          t,
          { ePrivilege: 1 }
        );
      }),
        (q.ClientIPv6ConnectivityReport = function(e, t) {
          return e.SendNotification(
            "ClientMetrics.ClientIPv6ConnectivityReport#1",
            t,
            { ePrivilege: 1 }
          );
        }),
        (q.SteamPipeWorkStatsReport = function(e, t) {
          return e.SendNotification(
            "ClientMetrics.SteamPipeWorkStatsReport#1",
            t,
            { ePrivilege: 1 }
          );
        }),
        (q.ReportClientError = function(e, t) {
          return e.SendNotification("ClientMetrics.ReportClientError#1", t, {
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1
          });
        }),
        (q.ClientBootstrapReport = function(e, t) {
          return e.SendNotification(
            "ClientMetrics.ClientBootstrapReport#1",
            t,
            { ePrivilege: 1 }
          );
        });
      var J,
        Q = l("IjL/"),
        $ = [],
        ee = function(e, t) {
          return $.push({ error: e, cCallsitesToIgnore: t });
        },
        te = console.assert;
      console.assert = function(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        e || ee(new Error(ie.apply(void 0, Object(u.g)([t], n))), 2),
          te.apply(console, Object(u.g)([e, t], n));
      };
      var ne = console.error;
      (console.error = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        ee(new Error(ie.apply(void 0, Object(u.g)([e], t))), 1),
          ne.apply(console, Object(u.g)([e], t));
      }),
        window.addEventListener("error", function(e) {
          ee(e.error, 0);
        }),
        (J = window.setTimeout(function() {
          ($ = []), (ee = function() {});
        }, 3e4));
      var re = (function() {
        function e(e) {
          var r = this;
          void 0 === e && (e = !0),
            (this.m_transport = null),
            (this.m_rgErrorQueue = []),
            (this.m_bEnabled = !0),
            (this.m_bInitialized = !1),
            (ee = e
              ? ($.forEach(function(e) {
                  var t = e.error,
                    n = e.cCallsitesToIgnore;
                  return r.ReportError(t, n);
                }),
                function(e, t) {
                  return r.ReportError(e, t);
                })
              : function() {}),
            ($ = []),
            clearTimeout(J),
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
          (e.prototype.ReportError = function(r, i) {
            return (
              void 0 === i && (i = 0),
              Object(u.b)(this, void 0, void 0, function() {
                var t, n;
                return Object(u.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (e.trys.push([0, 2, , 3]), this.m_bEnabled)
                        ? [
                            4,
                            (function(e, t) {
                              void 0 === t && (t = 0);
                              try {
                                return e.stack && e.stack.match(ae)
                                  ? (function(s, c) {
                                      void 0 === c && (c = 0);
                                      return Object(u.b)(
                                        this,
                                        void 0,
                                        void 0,
                                        function() {
                                          var n, r, i, o, a;
                                          return Object(u.e)(this, function(e) {
                                            switch (e.label) {
                                              case 0:
                                                return (
                                                  (n = s.stack.split("\n")),
                                                  (r = n.filter(function(e) {
                                                    return !!e.match(ae);
                                                  })),
                                                  (t = r[c]),
                                                  (i = (function(e) {
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
                                                      var n = e.indexOf(":", t);
                                                      return -1 === n
                                                        ? e
                                                        : e.slice(0, t) +
                                                            e.slice(n);
                                                    })(t)
                                                  )),
                                                  (o = n
                                                    .map(function(e) {
                                                      var t = e.match(
                                                        /(.*)\((.*):(\d+):(\d+)\)/
                                                      );
                                                      if (!t) return e;
                                                      if (5 === t.length) {
                                                        t[0];
                                                        var n = t[1],
                                                          r = t[2],
                                                          i = t[3],
                                                          o = t[4],
                                                          a = parseInt(i),
                                                          s = parseInt(o);
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
                                                  (a = { identifier: i }),
                                                  [
                                                    4,
                                                    (function(r) {
                                                      return Object(u.b)(
                                                        this,
                                                        void 0,
                                                        void 0,
                                                        function() {
                                                          var n;
                                                          return Object(u.e)(
                                                            this,
                                                            function(e) {
                                                              switch (e.label) {
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
                                                                              i =
                                                                                e.length;
                                                                            r <
                                                                            i;
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
                                                    })(i)
                                                  ]
                                                );
                                              case 1:
                                                return [
                                                  2,
                                                  ((a.identifierHash = e.sent()),
                                                  (a.message = o),
                                                  a)
                                                ];
                                            }
                                            var t;
                                          });
                                        }
                                      );
                                    })(e, t)
                                  : e.stack && e.stack.match(se)
                                  ? (function(e) {
                                      void 0 === e && (e = 0);
                                      return Object(u.b)(
                                        this,
                                        void 0,
                                        void 0,
                                        function() {
                                          return Object(u.e)(this, function(e) {
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
                            })(r, i)
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
            var t, o, n;
            e &&
              e.length &&
              ((t = H.a.Init(X)),
              (o = e.reduce(function(e, t) {
                return (
                  e[t.identifier]
                    ? e[t.identifier].count++
                    : (e[t.identifier] = { report: t, count: 1 }),
                  e
                );
              }, {})),
              (n = Object.keys(o).map(function(e) {
                var t = o[e],
                  n = t.report,
                  r = t.count,
                  i = new Z();
                return (
                  i.set_count(r),
                  i.set_identifier(n.identifier + " " + n.identifierHash),
                  i.set_message(JSON.stringify(n.message)),
                  i
                );
              })),
              t.Body().set_product(this.m_strProduct),
              t.Body().set_version(this.m_strVersion),
              t.Body().set_errors(n),
              K.ReportClientError(this.m_transport, t));
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
      function ie(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        return "string" == typeof e && 0 === t.length
          ? e
          : Object(u.g)([e], t)
              .map(function(e) {
                try {
                  return String(e);
                } catch (e) {
                  return "[Stringify Error]";
                }
              })
              .join(", ");
      }
      var oe,
        ae = /^\s*at .*(\S+:\d+|\(native\))/m,
        se = /(^|@)\S+:\d+/;
      var ce = function(e) {
        (oe = e), Q.a.InstallErrorReportingStore(oe);
      };
      var le = l("X3Ds");
      l("xnZ7"), l("idvb"), l("M1X1");
      le.o(function() {
        return Object(u.b)(this, void 0, void 0, function() {
          return Object(u.e)(this, function(e) {
            switch (e.label) {
              case 0:
                return Object(c.g)("application_config").userConfig
                  ? [3, 2]
                  : [
                      4,
                      Object(c.h)(i.a, c.c.STORE_BASE_URL + "actions/", {
                        userConfig: !0
                      })
                    ];
              case 1:
                e.sent(), (e.label = 2);
              case 2:
                return (
                  (l.p =
                    c.c.STORE_CDN_URL +
                    "public/javascript/applications/store/"),
                  oe || ce(new re()),
                  oe.Init(
                    "Store",
                    CLSTAMP,
                    new U.a(c.c.WEBAPI_BASE_URL).GetServiceTransport()
                  ),
                  [
                    4,
                    (function(c) {
                      return Object(u.b)(this, void 0, void 0, function() {
                        var t, n, r, i, o, a, s;
                        return Object(u.e)(this, function(e) {
                          switch (e.label) {
                            case 0:
                              return [3, 2];
                            case 1:
                              return e.sent(), [2];
                            case 2:
                              return (
                                (t = p.a.GetLanguageFallback(c)),
                                (n = c === t),
                                [
                                  4,
                                  Promise.all([
                                    l("rCDf")("./shared_" + c + ".json"),
                                    l("AvbV")("./main_" + c + ".json"),
                                    n
                                      ? {}
                                      : l("rCDf")("./shared_" + t + ".json"),
                                    n ? {} : l("AvbV")("./main_" + t + ".json")
                                  ])
                                ]
                              );
                            case 3:
                              return (
                                (r = e.sent()),
                                (i = r[0]),
                                (o = r[1]),
                                (a = r[2]),
                                (s = r[3]),
                                p.d.AddTokens(
                                  Object(u.a)(Object(u.a)({}, i), o),
                                  Object(u.a)(Object(u.a)({}, a), s)
                                ),
                                [2]
                              );
                          }
                        });
                      });
                    })(c.c.LANGUAGE)
                  ]
                );
              case 3:
                return (
                  e.sent(),
                  document.getElementById("application_root")
                    ? n.a.render(
                        s.a.createElement(G),
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
        return s;
      }),
        n.d(t, "b", function() {
          return c;
        });
      var r = n("mrSG"),
        o = n("i8i4"),
        a = n("X3Ds"),
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
        s = (function(i) {
          function e(e, t, n) {
            var r = i.call(this, a.l(e), n) || this;
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
            var r = i.call(this, a.l(o.findDOMNode(e)), n) || this;
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
        a = n.n(r),
        o = n("mgoM"),
        s = n("lkRc"),
        i = (function() {
          function i(e, t, n, r) {
            void 0 === e && (e = 0),
              e instanceof i
                ? (this.m_ulSteamID = e.m_ulSteamID)
                : "string" == typeof e
                ? (this.m_ulSteamID = a.a.fromString(e, !0))
                : t && n && void 0 !== r
                ? this.SetFromComponents(e, r, n, t)
                : (this.m_ulSteamID = e ? a.a.fromNumber(e, !0) : a.a.UZERO);
          }
          return (
            (i.InitFromAccountID = function(e) {
              return new i(Number(e), s.c.EUNIVERSE, 1, o.j);
            }),
            (i.InitFromClanID = function(e) {
              return new i(Number(e), s.c.EUNIVERSE, 7, 0);
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
                if (0 == this.GetAccountID() || this.GetInstance() > o.k)
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
              this.m_ulSteamID = new a.a(
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
              this.m_ulSteamID = new a.a(o, i, !0);
            }),
            i
          );
        })();
    },
    kyHq: function(e, t, n) {
      "use strict";
      n.d(t, "d", function() {
        return i;
      }),
        n.d(t, "c", function() {
          return m;
        }),
        n.d(t, "f", function() {
          return v;
        }),
        n.d(t, "b", function() {
          return g;
        });
      n("mrSG");
      var r = n("mgoM");
      n.d(t, "a", function() {
        return r.a;
      }),
        n.d(t, "e", function() {
          return r.d;
        }),
        n.d(t, "g", function() {
          return r.g;
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
          "application" === e ||
          "demo" === e
        );
      }
      var d, h, f, b;
      ((h = d = d || {})[(h.k_EClientUsedInputTypeKeyboard = 0)] =
        "k_EClientUsedInputTypeKeyboard"),
        (h[(h.k_EClientUsedInputTypeMouse = 1)] =
          "k_EClientUsedInputTypeMouse"),
        (h[(h.k_EClientUsedInputTypeController = 2)] =
          "k_EClientUsedInputTypeController"),
        (h[(h.k_EClientUsedInputTypeMax = 3)] = "k_EClientUsedInputTypeMax"),
        ((b = f = f || {})[(b.k_ERemoteClientLaunchOK = 1)] =
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
      var v, _;
      function g(e) {
        return e === v.k_ESteamRealmChina;
      }
      ((_ = v = v || {})[(_.k_ESteamRealmUnknown = 0)] =
        "k_ESteamRealmUnknown"),
        (_[(_.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
        (_[(_.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina");
      var y, w, O, E, C, S;
      ((w = y = y || {})[(w.Unknown = 0)] = "Unknown"),
        (w[(w.Wired = 1)] = "Wired"),
        (w[(w.Wireless = 2)] = "Wireless"),
        ((E = O = O || {})[(E.NotPresent = 0)] = "NotPresent"),
        (E[(E.Failed = 1)] = "Failed"),
        (E[(E.Disconnected = 2)] = "Disconnected"),
        (E[(E.Disconnecting = 3)] = "Disconnecting"),
        (E[(E.Connecting = 4)] = "Connecting"),
        (E[(E.Connected = 5)] = "Connected"),
        (E[(E.Retrying = 6)] = "Retrying"),
        ((S = C = C || {})[(S.None = 0)] = "None"),
        (S[(S.StaticWep = 1)] = "StaticWep"),
        (S[(S.DynamicWep = 2)] = "DynamicWep"),
        (S[(S.Wpa = 4)] = "Wpa"),
        (S[(S.WpaEnterprise = 8)] = "WpaEnterprise"),
        (S[(S.Wpa2 = 16)] = "Wpa2"),
        (S[(S.Wpa2Enterprise = 32)] = "Wpa2Enterprise"),
        (S[(S.Unsupported = 32768)] = "Unsupported");
    },
    lkRc: function(e, t, n) {
      "use strict";
      n.d(t, "c", function() {
        return d;
      }),
        n.d(t, "i", function() {
          return h;
        }),
        n.d(t, "a", function() {
          return f;
        }),
        n.d(t, "b", function() {
          return b;
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
          return v;
        });
      var r,
        m = n("mrSG"),
        i = n("YyVH"),
        o = n("Jnrd"),
        d = {
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
              if (!Object(o.a)()) return (r = r || s());
              var e = Object(o.b)("sessionid");
              e = e || s();
              return e;
            })();
          },
          FRIENDSUI_BETA: !1,
          STEAM_TV: !1,
          DEV_MODE: !1,
          OFFLINE_MODE: !1,
          IN_LIBRARY: !1
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
        b = {
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
        a = "webui_config";
      function s() {
        var e = (function() {
          for (var e = "", t = 0; t < 24; t++)
            e += Object(i.b)(0, 35).toString(36);
          return e;
        })();
        return Object(o.c)("sessionid", e, 0), e;
      }
      function c(e) {
        void 0 === e && (e = a);
        var t = {},
          n = u("config", e);
        n && (delete n.SESSIONID, Object.assign(d, n), (t.config = !0));
        var r = u("userinfo", e);
        r && (Object.assign(h, r), (t.userConfig = !0));
        var i = u("broadcast", e);
        i && (Object.assign(f, i), (t.broadcastConfig = !0));
        var o = u("community", e);
        return o && (Object.assign(b, o), (t.communityConfig = !0)), t;
      }
      function l(l, u, p) {
        return Object(m.b)(this, void 0, void 0, function() {
          var t, n, r, i, o, a, s, c;
          return Object(m.e)(this, function(e) {
            switch (e.label) {
              case 0:
                return p.config ? [4, l.get(u + "ajaxgetconfig")] : [3, 2];
              case 1:
                (t = e.sent()),
                  (n = t.data) && (delete n.SESSIONID, Object.assign(d, n)),
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
                  (a = o.data) && Object.assign(f, a),
                  (e.label = 6);
              case 6:
                return p.communityConfig
                  ? [4, l.get(u + "ajaxgetcommunityconfig")]
                  : [3, 8];
              case 7:
                (s = e.sent()),
                  (c = s.data) && Object.assign(b, c),
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
          (void 0 === t && (t = a),
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
        if (!window || !window.location || !window.location.href)
          return console.warn("Unable to determine base url!"), "unknown";
        var e = window.location.href;
        return e.startsWith(d.STORE_BASE_URL)
          ? d.STORE_BASE_URL
          : e.startsWith(d.COMMUNITY_BASE_URL)
          ? d.COMMUNITY_BASE_URL
          : e.startsWith(d.CHAT_BASE_URL)
          ? d.CHAT_BASE_URL
          : e.startsWith(d.PARTNER_BASE_URL)
          ? d.PARTNER_BASE_URL
          : e.startsWith(d.HELP_BASE_URL)
          ? d.HELP_BASE_URL
          : e.startsWith(d.STEAMTV_BASE_URL)
          ? d.STEAMTV_BASE_URL
          : e.startsWith(d.STATS_BASE_URL)
          ? d.STATS_BASE_URL
          : e.startsWith(d.INTERNAL_STATS_BASE_URL)
          ? d.INTERNAL_STATS_BASE_URL
          : "";
      }
      function v() {
        var e = window.location.href;
        return e.startsWith(d.STORE_BASE_URL)
          ? "store"
          : e.startsWith(d.COMMUNITY_BASE_URL)
          ? "community"
          : e.startsWith(d.PARTNER_BASE_URL)
          ? "partnerweb"
          : e.startsWith(d.HELP_BASE_URL)
          ? "help"
          : e.startsWith(d.STEAMTV_BASE_URL)
          ? "steamtv"
          : e.startsWith(d.STATS_BASE_URL) ||
            e.startsWith(d.INTERNAL_STATS_BASE_URL)
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
    mgoM: function(e, t, n) {
      "use strict";
      function r(e) {
        return 3 == e || 6 == e;
      }
      function i(e) {
        return 5 == e || 6 == e;
      }
      n.d(t, "c", function() {
        return r;
      }),
        n.d(t, "b", function() {
          return i;
        }),
        n.d(t, "j", function() {
          return o;
        }),
        n.d(t, "k", function() {
          return a;
        }),
        n.d(t, "i", function() {
          return s;
        }),
        n.d(t, "h", function() {
          return c;
        }),
        n.d(t, "f", function() {
          return l;
        }),
        n.d(t, "e", function() {
          return u;
        }),
        n.d(t, "g", function() {
          return p;
        }),
        n.d(t, "d", function() {
          return m;
        }),
        n.d(t, "a", function() {
          return d;
        });
      var o = 1,
        a = 4,
        s = "18446744073709551615",
        c = [
          0,
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
          28
        ];
      function l(e, t) {
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
      function u(e, t) {
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
      function p(e, t) {
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
      var m = [
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
      function d(e) {
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
    "qD+2": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return v;
      });
      var c = n("mrSG"),
        r = n("2vnA"),
        l = n("kyHq"),
        u = n("bxBv"),
        p = n("lkRc"),
        i = n("8H1D"),
        s = n("r64O"),
        m = (function() {
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
                Object(s.a)(
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
              (this.m_mapLanguages = r.C.map()),
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
              return d(
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
      function d(e, t, n, r, i) {
        if (!e.startsWith("#"))
          return console.log("Token doesn't start with #:", e), "";
        var o = e;
        e = e.toLowerCase();
        var a = "";
        if (
          (t && t.has(e) && (a = t.get(e)),
          !a && n && n.has(e) && (a = n.get(e)),
          a)
        )
          a = h(a, t, n, r, i);
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
        return a;
      }
      function h(e, t, n, r, i) {
        var o = e.match(/{[A-za-z0-9_%#:]+}/g);
        if (o)
          for (var a = 0, s = o; a < s.length; a++) {
            var c = s[a],
              l = d(f(c.slice(1, -1), i), t, n, r, i);
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
              a = o.slice(1, -1).toLowerCase(),
              s = t.get(a);
            null == s
              ? console.log("No rich presence found for", a)
              : (e = e.replace(o, s));
          }
        return e;
      }
      var b = n("MUT6"),
        a = n("qiKp"),
        v = new ((function() {
          function e() {
            (this.m_mapAppInfo = r.C.map()),
              (this.m_mapRichPresenceLoc = r.C.map()),
              (this.m_cAppInfoRequestsInFlight = 0),
              (this.m_setPendingAppInfo = new Set()),
              (this.m_CacheStorage = null),
              (this.m_fnCallbackOnAppInfoLoaded = new a.a());
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
                  Object(s.a)(
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
                Object(s.a)(
                  this.m_CMInterface,
                  "CAppInfoStore.GetAppInfo called before Init"
                ),
                Object(s.a)(e, "Requesting App ID 0, which won't ever exist"),
                this.m_mapAppInfo.has(e) ||
                  ((t = new m(e)),
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
            (e.prototype.LoadAppInfoBatch = function(s) {
              return Object(c.b)(this, void 0, void 0, function() {
                var t, n, r, i, o, a;
                return Object(c.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        this.m_cAppInfoRequestsInFlight++,
                        [4, this.LoadAppInfoBatchFromLocalCache(s)]
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
                        (n = u.a.Init(b.b))
                          .Body()
                          .set_language(Object(l.g)(p.c.LANGUAGE)),
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
                            b.g.GetApps(
                              this.m_CMInterface.GetServiceTransport(),
                              n
                            )
                          ])
                        : [3, 5];
                    case 4:
                      return (
                        1 == (a = e.sent()).GetEResult()
                          ? this.OnGetAppsResponse(a)
                          : console.error(
                              "Error when calling CommunityService.GetApps: EResult=" +
                                a.GetEResult() +
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
                Object(s.a)(
                  o,
                  "Got AppInfo response for unrequested AppID: " + i.appid()
                ),
                  o &&
                    ((o = new m(i.appid())).DeserializeFromMessage(i),
                    this.m_mapAppInfo.set(i.appid(), o),
                    t.push(o));
              }
              this.SaveAppInfoBatchToLocalCache(t);
            }),
            (e.prototype.OnAppOverviewChange = function(e) {
              for (var t = 0, n = e; t < n.length; t++) {
                var r = n[t],
                  i = new m(r.appid());
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
                        : ((t = new m(e)),
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
            (e.prototype.LoadAppInfoBatchFromLocalCache = function(a) {
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
                            a
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
                                        Object(s.a)(
                                          n,
                                          "Didn't find AppInfo in our map when loading from cache but it should've been there?"
                                        ),
                                        n
                                          ? ((n = new m(
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
                          (n = a.map(t)),
                          [4, Promise.all(n)])
                        : [2, a];
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
                  a = e.m_mapLanguages.get(o);
                a
                  ? a.clear()
                  : (e.m_mapLanguages.set(o, new Map()),
                    (a = e.m_mapLanguages.get(o)));
                for (var s = 0, c = i.tokens(); s < c.length; s++) {
                  var l = c[s];
                  a.set(l.name().toLowerCase(), l.value());
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
                      var e = u.a.Init(b.a);
                      return (
                        e.Body().set_appid(t.GetAppID()),
                        e.Body().set_language(p.c.LANGUAGE),
                        b.g.GetAppRichPresenceLocalization(
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
            Object(c.c)([r.k], e.prototype, "OnGetAppsResponse", null),
            Object(c.c)([r.k], e.prototype, "OnRichPresenceLocUpdate", null),
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
          return s;
        }),
        n.d(t, "c", function() {
          return c;
        }),
        n.d(t, "d", function() {
          return l;
        });
      var a = n("mrSG"),
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
        s = (function() {
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
            Object(a.c)([i.a], e.prototype, "ScheduledInternal", null),
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
        return Object(a.b)(this, void 0, void 0, function() {
          var t, r, n, i;
          return Object(a.e)(this, function(e) {
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
        "./shared_arabic.json": ["d1TB", 69],
        "./shared_brazilian.json": ["Pg9r", 70],
        "./shared_bulgarian.json": ["ENge", 71],
        "./shared_czech.json": ["Ts6V", 72],
        "./shared_danish.json": ["9oiU", 73],
        "./shared_dutch.json": ["nxN4", 74],
        "./shared_english.json": ["TYjx", 75],
        "./shared_finnish.json": ["NuB8", 76],
        "./shared_french.json": ["bOPj", 77],
        "./shared_german.json": ["svuF", 78],
        "./shared_greek.json": ["eJKB", 79],
        "./shared_hungarian.json": ["T7i2", 80],
        "./shared_italian.json": ["w96W", 81],
        "./shared_japanese.json": ["XQ4S", 82],
        "./shared_koreana.json": ["4hyI", 83],
        "./shared_latam.json": ["3qrw", 84],
        "./shared_norwegian.json": ["XA4Q", 85],
        "./shared_polish.json": ["TpXn", 86],
        "./shared_portuguese.json": ["Q8UV", 87],
        "./shared_romanian.json": ["Eme1", 88],
        "./shared_russian.json": ["BUiO", 89],
        "./shared_sc_schinese.json": ["O0N/", 90],
        "./shared_schinese.json": ["3UpY", 91],
        "./shared_spanish.json": ["4Fxc", 92],
        "./shared_swedish.json": ["0JhB", 93],
        "./shared_tchinese.json": ["OYRc", 94],
        "./shared_thai.json": ["lhAZ", 95],
        "./shared_turkish.json": ["RSoU", 96],
        "./shared_ukrainian.json": ["lNXI", 97],
        "./shared_vietnamese.json": ["RSmC", 98]
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
        return a;
      }),
        n.d(t, "a", function() {
          return c;
        });
      var r = n("i8i4"),
        i = n("X3Ds"),
        o = (function() {
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
          return g;
        }),
        n.d(t, "b", function() {
          return y;
        }),
        n.d(t, "f", function() {
          return w;
        }),
        n.d(t, "a", function() {
          return O;
        }),
        n.d(t, "e", function() {
          return E;
        }),
        n.d(t, "g", function() {
          return C;
        });
      var s = n("mrSG"),
        r = n("TyAF"),
        c = n("q1tI"),
        a = n("i8i4"),
        l = n("TtDX"),
        u = n("JMS6"),
        L = n("X3Ds"),
        i = n("bxiW"),
        o = n("6Y59"),
        p = n("D4wO"),
        m = n("TLQK"),
        d = n("lkRc"),
        h = n("+jbA"),
        f = n.n(h),
        b = n("exH9"),
        v = c.createContext(null),
        _ = (function(e) {
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
                i = Object(s.f)(e, [
                  "children",
                  "className",
                  "renderMenuContainer"
                ]),
                o =
                  this.context && this.context.options.bUseWebStyles
                    ? "popup_menu popup_body"
                    : f.a.contextMenuContents;
              n && (o += " " + n);
              var a = r || "div";
              return c.createElement(
                a,
                Object(s.a)({}, i, { className: o }),
                t
              );
            }),
            (t.contextType = v),
            t
          );
        })(c.PureComponent),
        g = (function(e) {
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
                  this.context && this.context.Hide()));
            }),
            (t.prototype.OnMouseEnter = function(e) {
              this.context && this.context.HideSubMenu();
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
              this.context && this.context.options.bUseWebStyles
                ? r.push("popup_menu_item")
                : r.push(f.a.contextMenuItem, "contextMenuItem"),
                this.props.className && r.push(this.props.className),
                this.props.disabled && r.push("disabled");
              var i = t || "div";
              return c.createElement(
                i,
                Object(s.a)({ onMouseEnter: this.OnMouseEnter }, n, {
                  onClick: this.OnClick,
                  unselectable: this.props.unselectable,
                  className: b.a.apply(void 0, r)
                }),
                this.props.children
              );
            }),
            (t.contextType = v),
            Object(s.c)([i.a], t.prototype, "OnClick", null),
            Object(s.c)([i.a], t.prototype, "OnMouseEnter", null),
            t
          );
        })(c.PureComponent),
        y = (function(e) {
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
                i = Object(s.f)(e, ["bChecked", "children", "className"]);
              return c.createElement(
                g,
                Object(s.a)({}, i, {
                  className: Object(b.a)(r, t && "menuChecked")
                }),
                c.createElement("div", { className: "contextMenuCheckMark" }),
                n
              );
            }),
            t
          );
        })(c.PureComponent),
        w = (c.PureComponent,
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
              (e.relatedTarget && L.c(e.currentTarget, e.relatedTarget)) ||
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
                  L.c(
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
                b,
                v,
                _,
                g,
                y,
                w,
                O,
                E,
                C,
                S,
                M,
                A,
                B,
                j,
                D = this.m_elMenu,
                x = this.props.element;
              D &&
                x &&
                ((e = x.ownerDocument.defaultView),
                (D.ownerDocument.defaultView.CtxUpdate = this.PositionMenu.bind(
                  this
                )),
                (t = x.getBoundingClientRect()),
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
                (a = this.props.clientX),
                (s = this.props.clientY),
                (c = e.innerWidth),
                (l = e.innerHeight),
                r &&
                  (this.props.options.bScreenCoordinates ||
                    ((a += e.screenLeft), (s += e.screenTop)),
                  (t = L.f(e, t)),
                  (m = p = 0),
                  (u = e.screen).availLeft && (p = u.availLeft),
                  u.availTop && (m = u.availTop),
                  (c = p + u.availWidth),
                  (l = m + u.availHeight)),
                (i.bOverlapHorizontal || i.bOverlapVertical) &&
                  (a = s = void 0),
                (d = a || t.left),
                (h = a || t.right),
                (f = n.width),
                i.bMatchWidth && ((f = h - d), (o.menuWidth = f)),
                (v = 0 < (b = (i.bOverlapHorizontal ? h : d) - f)),
                (g = 0 < (_ = c - (i.bOverlapHorizontal ? d : h) - f)),
                (y = (i.bPreferPopLeft || !g) && v),
                v ||
                  g ||
                  ((y = g < v),
                  i.bFitToWindow &&
                    ((f += (y ? b : _) - 8), (o.menuWidth = f))),
                (!i.bPreferPopLeft && g) || !v
                  ? (o.menuLeft = i.bOverlapHorizontal ? d : h)
                  : (o.menuRight = c - (i.bOverlapHorizontal ? h : d)),
                (w = s || t.top),
                (O = s || t.bottom),
                (E = D.scrollHeight),
                i.bMatchHeight && ((E = O - w), (o.menuHeight = E)),
                (S = 0 < (C = (i.bOverlapVertical ? O : w) - E)),
                (A = 0 < (M = l - (i.bOverlapVertical ? w : O) - E)),
                (j = (i.bPreferPopTop || !A) && S && !i.bDisablePopTop),
                S ||
                  A ||
                  ((B =
                    void 0 !== i.bShiftToFitWindow
                      ? i.bShiftToFitWindow
                      : i.bFitToWindow && !i.bOverlapHorizontal),
                  (j = M < C && !i.bDisablePopTop),
                  B && (j ? (o.menuTop = 4) : (o.menuBottom = 4)),
                  i.bFitToWindow &&
                    (B ? (E = Math.min(E, l - 8)) : (E += j ? C : M),
                    (o.menuHeight = E - 8))),
                void 0 === o.menuBottom &&
                  void 0 === o.menuTop &&
                  (j
                    ? (o.menuBottom = l - (i.bOverlapVertical ? O : w))
                    : (o.menuTop = i.bOverlapVertical ? w : O)),
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
                  v.Provider,
                  { value: this.props.instance },
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
                )
              );
            }),
            Object(s.c)([i.a], e.prototype, "BindMenuElement", null),
            Object(s.c)(
              [i.a, Object(p.a)(100)],
              e.prototype,
              "OnMenuMutation",
              null
            ),
            Object(s.c)([i.a], e.prototype, "OnWindowResize", null),
            Object(s.c)([i.a], e.prototype, "OnBlur", null),
            Object(s.c)([i.a], e.prototype, "OnKeyDown", null),
            (e = Object(s.c)([r.a], e))
          );
        })(c.Component)),
        O = (function(i) {
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
            Object(s.d)(o, i),
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
                  : ((t = L.f(
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
              a.render(
                c.createElement(
                  w,
                  Object(s.a)({}, this.m_menuProps, { popup: this }),
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
      function E(e) {
        return c.createElement("div", {
          className: f.a.ContextMenuMouseOverlay
        });
      }
      function C(e) {
        var t = [],
          n = L.m(e),
          r = n.getSelection(),
          i = r && 0 < r.rangeCount && 0 < r.toString().length,
          o = e.target,
          a = !1;
        if (
          (o &&
            "tagName" in o &&
            (("INPUT" != o.tagName && "TEXTAREA" != o.tagName) || (a = !0)),
          (n.document.queryCommandEnabled("cut") || (i && a)) &&
            t.push(
              c.createElement(
                g,
                {
                  key: "cut",
                  onSelected: function() {
                    n.document.execCommand("cut");
                  }
                },
                Object(m.e)("#ContextMenu_Cut")
              )
            ),
          (document.queryCommandEnabled("copy") || i) &&
            t.push(
              c.createElement(
                g,
                {
                  key: "copy",
                  onSelected: function() {
                    n.document.execCommand("copy");
                  }
                },
                Object(m.e)("#ContextMenu_Copy")
              )
            ),
          d.c.IN_CLIENT &&
            a &&
            t.push(
              c.createElement(
                g,
                {
                  key: "paste",
                  onSelected: function() {
                    o.focus(), n.SteamClient._internal.Paste();
                  }
                },
                Object(m.e)("#ContextMenu_Paste")
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
  [["gfbn", 67, 0]]
]);

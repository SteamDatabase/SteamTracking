/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "6284445";
(window.webpackJsonp = window.webpackJsonp || []).push([
  [68],
  {
    "+d9t": function(e, t, n) {
      "use strict";
      n.d(t, "e", function() {
        return p;
      }),
        n.d(t, "b", function() {
          return m;
        }),
        n.d(t, "d", function() {
          return f;
        }),
        n.d(t, "f", function() {
          return v;
        }),
        n.d(t, "a", function() {
          return g;
        }),
        n.d(t, "c", function() {
          return b;
        });
      var c = n("mrSG"),
        l = n("q1tI"),
        r = n("y+6m"),
        o = n("TLQK"),
        i = n("X3Ds"),
        a = n("TtDX"),
        s = n("lkRc"),
        u = (n("2vnA"), n("riab"), n("exH9"));
      function p(e, t) {
        var n =
          "currentTarget" in e ? e.currentTarget.ownerDocument.defaultView : e;
        0 == t.indexOf("steam://")
          ? (n.location.href = t)
          : n.open(
              t,
              null,
              "menubar,location,resizable,scrollbars,status,noopener"
            );
      }
      function m(e) {
        var t = e.bDisableContextMenu,
          n = e.onContextMenu,
          r = e.bForceExternal,
          o = e.href,
          i = e.bUseLinkFilter,
          a = Object(c.f)(e, [
            "bDisableContextMenu",
            "onContextMenu",
            "bForceExternal",
            "href",
            "bUseLinkFilter"
          ]);
        return (
          t || n || (n = h),
          i &&
            o &&
            (o =
              (s.b.IN_CLIENT ? "steam://openurl_external/" : "") +
              s.b.COMMUNITY_BASE_URL +
              "linkfilter/?url=" +
              o),
          l.createElement(
            "a",
            Object(c.a)({}, a, {
              href: o,
              onClick: function(e) {
                e.preventDefault(),
                  f(window, o, { bForceExternal: !!r, bUseLinkFilter: !!i });
              },
              onContextMenu: n,
              rel: i ? "noopener noreferrer" : void 0
            }),
            e.children
          )
        );
      }
      function d(e) {
        var t = e.strURL,
          n = e.unPID;
        return l.createElement(
          l.Fragment,
          null,
          l.createElement(
            r.d,
            {
              onSelected: function() {
                i.h(t);
              }
            },
            Object(o.f)("#ContextMenu_CopyLinkURL")
          ),
          l.createElement(
            r.d,
            {
              onSelected: function(e) {
                f(e, t, { unPID: n });
              }
            },
            Object(o.f)("#ContextMenu_OpenLinkInNewWindow")
          )
        );
      }
      function h(e, t) {
        var n = e.currentTarget;
        return Object(a.a)(
          l.createElement(
            r.c,
            null,
            l.createElement(d, { strURL: n.href, unPID: t })
          ),
          e
        );
      }
      function f(e, t, n) {
        void 0 === n && (n = {});
        var r = n.bForceExternal,
          o = n.unPID,
          i = n.bUseLinkFilter,
          a =
            "currentTarget" in e
              ? e.currentTarget.ownerDocument.defaultView
              : e;
        "undefined" != typeof SteamClient && void 0 !== SteamClient.WebChat
          ? SteamClient.WebChat.OpenURLInClient(t, o || 0, !!r)
          : 0 == t.indexOf("steam://") &&
            0 != t.indexOf("steam://remoteplay/connect")
          ? (a.location.href = t)
          : a.open(
              t,
              null,
              "menubar,location,resizable,scrollbars,status,noopener" +
                (i ? ",noreferrer" : "")
            );
      }
      function v(e) {
        var t = e.component,
          n = e.fallback,
          r = Object(c.f)(e, ["component", "fallback"]),
          o = l.useState([t, n])[0],
          i = o[0],
          a = o[1],
          s = null != i ? i : a;
        return l.createElement(s, r);
      }
      var g = function(e) {
        return l.createElement(
          l.Fragment,
          null,
          Boolean(e.condition) ? e.wrap(e.children) : e.children
        );
      };
      function b(t) {
        return function(e) {
          return l.createElement(
            "div",
            Object(c.a)({}, e, { className: Object(u.a)(t, e.className) })
          );
        };
      }
    },
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
    "5E+2": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return u;
      });
      var f = n("mrSG"),
        v = n("q1tI"),
        r = n("sUmc"),
        g = n("UPxs"),
        o = n("exH9"),
        i = n("DWPT"),
        a = n("TLQK"),
        s = n("bxiW"),
        c = n("LY6W"),
        l = n.n(c),
        u = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(f.d)(t, e),
            (t.prototype.TryHide = function() {
              this.m_fnHide && this.m_fnHide(), (this.m_fnHide = null);
            }),
            (t.prototype.componentWillUnmount = function() {
              this.TryHide();
            }),
            (t.prototype.render = function() {
              var e,
                t = this,
                n = this.props,
                r = n.toolTipContent,
                o = n.nDelayShowMS,
                i = n.bDisabled,
                a = n.direction,
                s = n.nBodyAlignment,
                c = n.nBodyDistance,
                l = n.nAllowOffscreenPx,
                u = n.nMaxLateralMoveOnScreen,
                p = n.strTooltipClassname,
                m = Object(f.f)(n, [
                  "toolTipContent",
                  "nDelayShowMS",
                  "bDisabled",
                  "direction",
                  "nBodyAlignment",
                  "nBodyDistance",
                  "nAllowOffscreenPx",
                  "nMaxLateralMoveOnScreen",
                  "strTooltipClassname"
                ]),
                d = {
                  direction: a,
                  nBodyAlignment: s,
                  nBodyDistance: c,
                  nAllowOffscreenPx: l,
                  nMaxLateralMoveOnScreen: u,
                  className: p
                },
                h = null;
              return (
                i ||
                  ((e = function(e) {
                    return (t.m_fnHide = e);
                  }),
                  (h =
                    "string" == typeof r
                      ? b.ForText(r, e, o, d)
                      : b.ForReactNode(r, e, o, d))),
                v.createElement(
                  g.a,
                  Object(f.a)(
                    {
                      navStop: !!m.onClick,
                      onMouseEnter: h ? h.ShowToolTip : null,
                      onMouseLeave: this.TryHide
                    },
                    m
                  ),
                  this.props.children
                )
              );
            }),
            (t.defaultProps = { nDelayShowMS: 300 }),
            Object(f.c)([s.a], t.prototype, "TryHide", null),
            t
          );
        })(v.Component),
        b = (v.Component,
        v.Component,
        v.Component,
        (function() {
          function o(e, t, n, r) {
            (this.m_rctContent = e),
              (this.m_nDelayShowMS = n),
              (this.m_hoverPositionProps = r),
              (this.m_strKey = "tooltip-" + Math.floor(1e8 * Math.random())),
              (this.m_fnOnShow = t);
          }
          return (
            (o.ForReactNode = function(e, t, n, r) {
              return new o(e, t, n, r);
            }),
            (o.ForText = function(e, t, n, r) {
              return new o(
                v.createElement(
                  "div",
                  { className: l.a.TextToolTip },
                  Object(a.f)(e)
                ),
                t,
                n,
                r
              );
            }),
            (o.prototype.ShowToolTip = function(e) {
              var t = this,
                n = e.currentTarget || e,
                r = { target: n };
              o.sm_embeddedElements.ShowElementDelayed(
                n.ownerDocument,
                this.m_nDelayShowMS,
                v.createElement(
                  i.a,
                  Object(f.a)({}, r, this.m_hoverPositionProps),
                  this.m_rctContent
                ),
                this.m_strKey
              ),
                this.m_fnOnShow &&
                  this.m_fnOnShow(function() {
                    return t.HideToolTip(n);
                  });
            }),
            (o.prototype.HideToolTip = function(e) {
              var t = e.currentTarget || e;
              o.sm_embeddedElements.HideElement(t.ownerDocument, this.m_strKey);
            }),
            (o.sm_embeddedElements = new r.a("ignored-id-tooltip-map")),
            Object(f.c)([s.a], o.prototype, "ShowToolTip", null),
            Object(f.c)([s.a], o.prototype, "HideToolTip", null),
            o
          );
        })());
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
            Object.defineProperty(
              e.prototype,
              "bRequireAllEventsLoadedInTimeBlock",
              {
                get: function() {
                  return !1;
                },
                enumerable: !1,
                configurable: !0
              }
            ),
            Object.defineProperty(e.prototype, "bInSteamLabs", {
              get: function() {
                return !1;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "bUseSlashNews", {
              get: function() {
                return !0;
              },
              enumerable: !1,
              configurable: !0
            }),
            (e.prototype.GetTimeNowWithOverride = function() {
              return this.nOverrideDateNow
                ? this.nOverrideDateNow
                : Math.floor(Date.now() / 1e3);
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
    "6+2x": function(e, t, n) {
      e.exports = {
        HoverPosition: "hoverposition_HoverPosition_3vg1v",
        Ready: "hoverposition_Ready_1Ye_0",
        NoSpace: "hoverposition_NoSpace_pxVZH",
        EnablePointerEvents: "hoverposition_EnablePointerEvents_2b9OE",
        HoverAboveModal: "hoverposition_HoverAboveModal_EQqOx"
      };
    },
    "6Y59": function(e, t, n) {
      "use strict";
      n.d(t, "R", function() {
        return c;
      }),
        n.d(t, "p", function() {
          return l;
        }),
        n.d(t, "t", function() {
          return u;
        }),
        n.d(t, "D", function() {
          return p;
        }),
        n.d(t, "r", function() {
          return m;
        }),
        n.d(t, "U", function() {
          return d;
        }),
        n.d(t, "z", function() {
          return h;
        }),
        n.d(t, "eb", function() {
          return f;
        }),
        n.d(t, "fb", function() {
          return v;
        }),
        n.d(t, "J", function() {
          return g;
        }),
        n.d(t, "cb", function() {
          return b;
        }),
        n.d(t, "ab", function() {
          return _;
        }),
        n.d(t, "M", function() {
          return y;
        }),
        n.d(t, "L", function() {
          return w;
        }),
        n.d(t, "j", function() {
          return E;
        }),
        n.d(t, "n", function() {
          return O;
        }),
        n.d(t, "B", function() {
          return S;
        }),
        n.d(t, "V", function() {
          return C;
        }),
        n.d(t, "c", function() {
          return D;
        }),
        n.d(t, "b", function() {
          return x;
        }),
        n.d(t, "m", function() {
          return M;
        }),
        n.d(t, "o", function() {
          return A;
        }),
        n.d(t, "E", function() {
          return k;
        }),
        n.d(t, "H", function() {
          return j;
        }),
        n.d(t, "O", function() {
          return T;
        }),
        n.d(t, "w", function() {
          return I;
        }),
        n.d(t, "F", function() {
          return N;
        }),
        n.d(t, "T", function() {
          return L;
        }),
        n.d(t, "bb", function() {
          return R;
        }),
        n.d(t, "i", function() {
          return B;
        }),
        n.d(t, "S", function() {
          return F;
        }),
        n.d(t, "P", function() {
          return P;
        }),
        n.d(t, "Q", function() {
          return G;
        }),
        n.d(t, "d", function() {
          return H;
        }),
        n.d(t, "I", function() {
          return U;
        }),
        n.d(t, "Z", function() {
          return W;
        }),
        n.d(t, "A", function() {
          return z;
        }),
        n.d(t, "s", function() {
          return V;
        }),
        n.d(t, "Y", function() {
          return Y;
        }),
        n.d(t, "X", function() {
          return K;
        }),
        n.d(t, "h", function() {
          return X;
        }),
        n.d(t, "k", function() {
          return q;
        }),
        n.d(t, "u", function() {
          return J;
        }),
        n.d(t, "q", function() {
          return Z;
        }),
        n.d(t, "y", function() {
          return Q;
        }),
        n.d(t, "v", function() {
          return $;
        }),
        n.d(t, "K", function() {
          return ee;
        }),
        n.d(t, "a", function() {
          return te;
        }),
        n.d(t, "G", function() {
          return ne;
        }),
        n.d(t, "x", function() {
          return re;
        }),
        n.d(t, "l", function() {
          return oe;
        }),
        n.d(t, "W", function() {
          return ie;
        }),
        n.d(t, "C", function() {
          return ae;
        }),
        n.d(t, "N", function() {
          return se;
        }),
        n.d(t, "db", function() {
          return ce;
        }),
        n.d(t, "g", function() {
          return le;
        }),
        n.d(t, "f", function() {
          return ue;
        }),
        n.d(t, "e", function() {
          return pe;
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
        return o.createElement(
          "svg",
          {
            style: { transform: "rotate(" + e.angle + "deg)" },
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            width: "24.833px",
            height: "21.917px",
            viewBox: "0 0 24.833 21.917"
          },
          o.createElement("polygon", {
            points:
              "12.5,14.873 3.302,5.723 1.185,7.848 12.5,19.103 23.814,7.848 21.697,5.723 "
          })
        );
      }
      function p(e) {
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
      function m() {
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
      function d() {
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
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            width: "100px",
            height: "91.582px",
            viewBox: "0 0 100 91.582",
            enableBackground: "new 0 0 100 91.582"
          },
          o.createElement(
            "g",
            null,
            o.createElement("path", {
              clipPath: "url(#SVGID_2_)",
              d:
                "M88.853,29.724H62.271V11.351C62.262,5.18,57.26,0.179,51.089,0.169H11.255\r\n\t\t\t\tC5.085,0.179,0.085,5.18,0.074,11.351v24.908c-0.001,2.207,0.657,4.36,1.888,6.19c3.942,7.586,22.118,18.799,22.314,18.916\r\n\t\t\t\tc0.389,0.229,0.83,0.354,1.281,0.361c1.351,0.01,2.455-1.074,2.468-2.426c0.003-0.329-0.062-0.654-0.187-0.958\r\n\t\t\t\tc-1.319-3.565-2.341-7.233-3.053-10.968h13.135v18.389C37.93,71.9,42.882,76.882,49.02,76.928H75.29\r\n\t\t\t\tc-0.715,3.724-1.737,7.379-3.054,10.936c-0.517,1.248,0.076,2.678,1.323,3.196c0.303,0.125,0.63,0.188,0.959,0.186\r\n\t\t\t\tc0.451-0.006,0.894-0.13,1.279-0.361c0.197-0.115,18.373-11.329,22.314-18.914c1.235-1.834,1.894-3.997,1.888-6.207V40.906\r\n\t\t\t\tC99.99,34.746,95.01,29.751,88.853,29.724 M32.797,42.449H21.831c-0.721,0.01-1.4,0.327-1.873,0.869\r\n\t\t\t\tc-0.464,0.544-0.669,1.265-0.558,1.973c0,0.228,0.59,3.79,1.641,8.028c-5.517-3.842-12.773-9.425-14.776-13.136\r\n\t\t\t\tc-0.067-0.162-0.149-0.314-0.247-0.46c-0.738-1.033-1.13-2.276-1.116-3.546V11.351c0.008-3.463,2.825-6.264,6.288-6.255h0.065\r\n\t\t\t\th39.833c3.45,0.007,6.246,2.804,6.255,6.255v18.373H49.02c-3.223,0.005-6.286,1.399-8.406,3.825\r\n\t\t\t\tc-1.744-0.054-3.464-0.427-5.074-1.101c2.588-3.257,4.169-7.2,4.548-11.345h1.33c1.359,0,2.463-1.103,2.463-2.463\r\n\t\t\t\tc0-1.361-1.104-2.461-2.463-2.461h-7.784v-4.384c0-1.36-1.102-2.464-2.461-2.464c-1.361,0-2.463,1.104-2.463,2.464v4.384h-7.668\r\n\t\t\t\tc-1.361,0-2.462,1.1-2.462,2.461c0,1.36,1.102,2.463,2.462,2.463H35.13c-0.348,3.137-1.604,6.104-3.613,8.538\r\n\t\t\t\tc-1.439-1.598-2.553-3.46-3.284-5.482c-0.489-1.271-1.916-1.903-3.185-1.414c-1.27,0.489-1.902,1.917-1.412,3.185\r\n\t\t\t\tc0.892,2.395,2.192,4.619,3.841,6.57c-2.017,0.812-4.178,1.208-6.354,1.165c-1.359,0-2.463,1.102-2.463,2.461\r\n\t\t\t\tc0,1.362,1.104,2.465,2.463,2.465c3.647,0.07,7.244-0.868,10.393-2.71c2.032,1.239,4.293,2.049,6.649,2.38\r\n\t\t\t\tc-0.218,0.859-0.327,1.741-0.327,2.627v1.641L32.797,42.449z M95.19,65.763c0.013,1.271-0.379,2.514-1.117,3.547\r\n\t\t\t\tc-0.097,0.138-0.181,0.287-0.246,0.443c-1.938,3.678-9.211,9.277-14.776,13.135c1.099-4.236,1.64-7.799,1.64-8.03\r\n\t\t\t\tc0.111-0.704-0.091-1.425-0.558-1.969c-0.462-0.548-1.138-0.871-1.854-0.887H49.02c-3.447,0-6.246-2.791-6.255-6.239V40.906\r\n\t\t\t\tc0.009-3.452,2.805-6.249,6.255-6.257h39.833c3.449,0.008,6.246,2.805,6.256,6.257L95.19,65.763z M77.834,56.635L77.834,56.635\r\n\t\t\t\tl-6.564-16.42c-0.037-0.092-0.081-0.18-0.133-0.262l-0.099-0.165c-0.047-0.078-0.102-0.15-0.164-0.214l-0.132-0.164l-0.182-0.147\r\n\t\t\t\tl-0.195-0.099c-0.056-0.043-0.116-0.076-0.182-0.098l-0.246-0.132c-0.06-0.009-0.121-0.009-0.18,0l-0.248-0.082h-0.245h-0.231\r\n\t\t\t\th-0.261h-0.214l-0.279,0.082c-0.055-0.007-0.109-0.007-0.164,0l-0.246,0.132l-0.247,0.098c-0.064,0.044-0.124,0.095-0.18,0.147\r\n\t\t\t\tl-0.182,0.148l-0.149,0.166c-0.056,0.066-0.113,0.138-0.161,0.211v0.166l-0.149,0.263l-6.567,16.418l-3.282,8.21\r\n\t\t\t\tc-0.546,1.246,0.026,2.697,1.272,3.24c0.036,0.016,0.072,0.029,0.105,0.042c0.29,0.127,0.604,0.189,0.919,0.182\r\n\t\t\t\tc1.005-0.006,1.905-0.616,2.283-1.544l2.657-6.665h9.854l2.66,6.665c0.383,0.931,1.291,1.54,2.298,1.544\r\n\t\t\t\tc0.31,0.003,0.619-0.059,0.904-0.182c1.269-0.485,1.906-1.907,1.422-3.18c-0.014-0.034-0.028-0.069-0.044-0.103L77.834,56.635z\r\n\t\t\t\tM66.062,55.123l2.939-7.323l2.923,7.323H66.062z"
            })
          )
        );
      }
      function f(e) {
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
      function v() {
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
      function g() {
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
      function _() {
        return o.createElement(
          "svg",
          { width: "50px", height: "25px", viewBox: "0 0 50 25" },
          o.createElement("path", {
            d:
              "M46 0H4C1.8 0 0 1.8 0 4v17c0 2.2 1.8 4 4 4h42c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM21 18.916V5.084L32.805 12 21 18.916z"
          })
        );
      }
      function y() {
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
      function w() {
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
      function E() {
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
      function O(e) {
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
      function S() {
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
      function C(e) {
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
      function D() {
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
      function x(e) {
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
      function M() {
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
      function A(e) {
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
      function k() {
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
      function j() {
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
      function T() {
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
      function N(e) {
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
      function L(e) {
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
      function B() {
        return o.createElement(
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
          o.createElement(
            "g",
            null,
            o.createElement("path", {
              d:
                "M33,5C18.7,5,7.1,16.6,7.1,30.9c0,5.2,1.5,10.1,4.2,14.1c-0.6,3.7-4.5,10.5-6.2,13.5c-1.3,2.2,11.4-3.8,16.3-4.5c3.5,1.8,7.5,2.8,11.7,2.8c14.3,0,25.9-11.6,25.9-25.9S47.3,5,33,5z"
            })
          )
        );
      }
      function F() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_5",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 64 64"
          },
          o.createElement(
            "g",
            null,
            o.createElement("path", {
              d:
                "M40.6,32.7l15.1-15.1c2.6-2.6,2.6-6.7,0-9.3c-2.6-2.6-6.7-2.6-9.3,0L31.3,23.4L16.2,8.3c-2.6-2.6-6.7-2.6-9.3,0c-2.6,2.6-2.6,6.7,0,9.3L22,32.7L6.9,47.8c-2.6,2.6-2.6,6.7,0,9.3c1.3,1.3,3,1.9,4.7,1.9s3.4-0.6,4.7-1.9L31.3,42l15.1,15.1c1.3,1.3,3,1.9,4.7,1.9s3.4-0.6,4.7-1.9c2.6-2.6,2.6-6.7,0-9.3L40.6,32.7z"
            })
          )
        );
      }
      function P() {
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
      function G() {
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
      function H() {
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
      function U() {
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
      function W() {
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
      function z() {
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
      function V() {
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
      function Y() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_3",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Twitter",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement("path", {
            d:
              "M250.151,128.021c0,67.418-54.604,122.022-122.022,122.022S6.107,195.439,6.107,128.021C6.107,60.604,60.712,6,128.129,6 S250.151,60.604,250.151,128.021z M105.799,192.389c54.117,0,83.707-44.842,83.707-83.707c0-1.282,0-2.563-0.062-3.783 c5.736-4.148,10.739-9.335,14.705-15.252c-5.247,2.318-10.922,3.905-16.901,4.637c6.103-3.661,10.738-9.396,12.936-16.29 c-5.675,3.355-11.959,5.796-18.67,7.138c-5.369-5.734-12.995-9.273-21.477-9.273c-16.228,0-29.406,13.179-29.406,29.407 c0,2.318,0.243,4.576,0.793,6.711c-24.466-1.22-46.125-12.934-60.646-30.75c-2.501,4.332-3.965,9.396-3.965,14.765 c0,10.189,5.186,19.218,13.117,24.465c-4.819-0.122-9.334-1.464-13.3-3.661c0,0.122,0,0.244,0,0.366 c0,14.275,10.128,26.113,23.611,28.857c-2.44,0.672-5.064,1.039-7.748,1.039c-1.892,0-3.723-0.184-5.553-0.551 c3.722,11.714,14.581,20.195,27.455,20.44c-10.067,7.868-22.757,12.566-36.546,12.566c-2.379,0-4.697-0.122-7.016-0.427 C73.707,187.507,89.204,192.389,105.799,192.389"
          })
        );
      }
      function K() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_3",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_TwitchTV",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement("path", {
            d:
              "M28.176,8.026L11.763,49.97v171.427h58.358v31.003h32.826l31.003-31.003h47.414l63.829-63.829V8.026H28.176z M223.311,146.625l-36.474,36.474h-58.359l-31.002,31.003v-31.003H48.237V29.91h175.074V146.625z M186.837,71.855v63.829h-21.885 V71.855H186.837z M128.478,71.855v63.829h-21.883V71.855H128.478z"
          })
        );
      }
      function X() {
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
      function q() {
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
      function J() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_3",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Filter",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          o.createElement("path", {
            d:
              "M236.445,23.522c-1.085-2.35-3.438-3.855-6.025-3.855H25.58c-2.586,0-4.936,1.501-6.024,3.855 c-1.08,2.349-0.698,5.112,0.983,7.083l80.328,94.039v104.181c0,2.74,1.682,5.194,4.237,6.188c0.778,0.3,1.588,0.445,2.392,0.445 c1.832,0,3.626-0.762,4.91-2.17l41.012-45.13c1.111-1.219,1.724-2.811,1.724-4.459v-59.054l80.325-94.04 C237.144,28.634,237.526,25.867,236.445,23.522z"
          })
        );
      }
      function Z() {
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
      function Q() {
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
      function $() {
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
      function ee() {
        return o.createElement(
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
          o.createElement("path", {
            d:
              "M171.176,136.219c-5.516-5.516-14.166-5.948-20.223-1.406L92.125,75.984l-8.002-29.738c-0.324-1.406-1.73-3.027-3.028-3.785 L46.49,24.186c-1.298-0.648-3.136-0.433-4.218,0.648L25.295,41.813c-0.974,0.973-1.298,2.92-0.649,4.217l18.276,34.605 c0.648,1.297,2.379,2.596,3.785,3.027l29.739,8.003l58.828,58.828c-4.542,6.056-4.109,14.707,1.405,20.222l56.882,56.882 c6.056,6.056,15.896,6.056,21.845,0l12.544-12.544c6.056-6.056,6.056-15.788,0-21.845L171.176,136.219z"
          }),
          o.createElement("path", {
            d:
              "M153.116,122.16c2.271-0.648,4.65-0.973,7.138-0.973c0.865,0,1.622,0,2.486,0.107l26.928-26.927 c12.328,2.92,25.846-0.324,35.361-9.948c9.517-9.625,12.869-23.034,9.949-35.254l-20.33,20.33l-21.845-5.84l-5.84-21.952 l20.331-20.33c-12.221-2.92-25.738,0.324-35.254,9.948c-9.625,9.625-12.869,23.143-9.949,35.362L129.866,98.91L153.116,122.16z"
          }),
          o.createElement("path", {
            d:
              "M99.371,129.406l-32.226,32.226c-12.328-2.92-25.845,0.324-35.362,9.948c-9.517,9.625-12.869,23.034-9.949,35.254 l20.331-20.33l21.953,5.84l5.839,21.952l-20.331,20.33c12.22,2.92,25.737-0.324,35.254-9.949 c9.625-9.624,12.869-23.142,9.949-35.361l27.035-27.035c-0.325-3.136,0-6.38,0.865-9.517L99.371,129.406z"
          })
        );
      }
      function te() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_3_copy",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 256 256"
          },
          o.createElement(
            "g",
            { id: "Layer_3_copy" },
            o.createElement(
              "g",
              { id: "g4768_1_", transform: "translate(-6.9308024,-10)" },
              o.createElement("g", { id: "g4763_1_" })
            ),
            o.createElement("path", {
              d:
                "M206.3,36.6c-19.4,0-35.8,14.1-40.3,33H24.8c-6,0-10.8,4.8-10.8,10.8s4.8,10.8,10.8,10.8h141.3\r\n\t\t\t\tc4.7,18.6,20.9,32.4,40.2,32.4c22.9,0,41.5-19.5,41.5-43.5C247.9,56.2,229.2,36.6,206.3,36.6z M206.3,109.7\r\n\t\t\t\tc-15.2,0-27.5-13.2-27.5-29.5c0-16.3,12.4-29.5,27.5-29.5s27.5,13.2,27.5,29.5C233.9,96.4,221.5,109.7,206.3,109.7z"
            }),
            o.createElement("path", {
              d:
                "M230.4,157.3H107.9c-4.6-14.6-18.3-25.2-34.3-25.2s-29.7,10.6-34.3,25.2H24.8c-6,0-10.8,4.8-10.8,10.8\r\n\t\t\t\tS18.9,179,24.8,179h14.3c4.6,14.6,18.3,25.2,34.3,25.2s29.7-10.6,34.3-25.2h122.5c6,0,10.8-4.8,10.8-10.8S236.4,157.3,230.4,157.3z\r\n\t\t\t\tM73.5,189.8c-8,0-14.9-4.3-18.7-10.8l0,0c-0.7-1.2-1.3-2.4-1.7-3.7c0,0,0-0.1,0-0.1c-0.1-0.4-0.2-0.8-0.4-1.2c0-0.1,0-0.1,0-0.2\r\n\t\t\t\tc-0.2-0.8-0.4-1.7-0.5-2.6c0-0.1,0-0.2,0-0.3c0-0.3-0.1-0.7-0.1-1c0-0.1,0-0.2,0-0.4c0-0.4,0-0.9,0-1.3s0-0.9,0-1.3\r\n\t\t\t\tc0-0.1,0-0.2,0-0.4c0-0.3,0.1-0.7,0.1-1c0-0.1,0-0.2,0-0.3c0.1-0.9,0.3-1.8,0.5-2.6c0-0.1,0-0.1,0-0.2c0.1-0.4,0.2-0.8,0.4-1.2\r\n\t\t\t\tc0,0,0-0.1,0-0.1c0.5-1.3,1-2.6,1.7-3.7c3.7-6.4,10.7-10.8,18.7-10.8c8,0,14.9,4.3,18.7,10.8c0.7,1.2,1.3,2.4,1.7,3.7\r\n\t\t\t\tc0,0,0,0.1,0,0.1c0.1,0.4,0.3,0.8,0.4,1.2c0,0.1,0,0.1,0,0.2c0.2,0.8,0.4,1.7,0.5,2.6c0,0.1,0,0.2,0,0.3c0,0.3,0.1,0.7,0.1,1\r\n\t\t\t\tc0,0.1,0,0.2,0,0.4c0,0.4,0,0.9,0,1.3s0,0.9,0,1.3c0,0.1,0,0.2,0,0.4c0,0.3-0.1,0.7-0.1,1c0,0.1,0,0.2,0,0.3\r\n\t\t\t\tc-0.1,0.9-0.3,1.8-0.5,2.6c0,0.1,0,0.1,0,0.2c-0.1,0.4-0.2,0.8-0.4,1.2c0,0,0,0.1,0,0.1c-0.5,1.3-1,2.6-1.7,3.7l0,0\r\n\t\t\t\tC88.5,185.4,81.5,189.8,73.5,189.8z"
            })
          )
        );
      }
      function ne() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 256 256"
          },
          o.createElement("circle", { cx: "126", cy: "134", r: "20.6" }),
          o.createElement("circle", { cx: "189.4", cy: "134", r: "20.6" }),
          o.createElement("circle", { cx: "62.6", cy: "134", r: "20.6" })
        );
      }
      function re() {
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
      function oe(e) {
        return o.createElement(
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
          o.createElement("path", {
            d:
              "M109.9,96.2H302c16.3,0,29.6,13,29.6,29v101.4c0,16-13.2,29-29.6,29h-90.1l-57.6,57.9L138,255.6h-28.1\r\n\t\t\t\tc-16.3,0-29.6-13-29.6-29V125.2C80.4,109.2,93.6,96.2,109.9,96.2z"
          })
        );
      }
      function ie(e) {
        return o.createElement(
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
          o.createElement("path", {
            d:
              "M225.1,328.8c-12.6,0-15.3-1.9-29.5-5.3c-18.7-4.8-35.3-6.3-51-5.3c-3.5,0.5-7.1,0.5-10.6,1l-7.6,1\r\n\t\t\t\tc-2.5,0.5-4.5-1-5.6-3.4c-12.6-36.2-16.6-74.7-11.6-117.6c0-2.4,2-3.9,4.5-4.3l4.5-0.5c3.5-0.5,6.6-1,10.1-1c5-0.5,9.6-2.9,13.1-7.2\r\n\t\t\t\tl0.5-1c0.5-0.5,1-1.4,1.5-2.4c9.1-14.5,22.2-25.6,36.8-37.6c7.6-6.3,14.1-12.5,20.2-18.3c6.6-7.2,10.1-16.4,10.6-27\r\n\t\t\t\tc0-9.6,5.6-15.4,16.1-16.4c13.6-1,22.7,3.9,27.8,15.9c7.6,16.4-4.4,33.3-13.9,50.6c-2,3.9-4.5,7.2-7.1,10.6c-1,1.4-2,2.9-3,4.3\r\n\t\t\t\tl-3.5,4.8c-1.5,1.9-3,3.9-4.5,6.3c4,0,7.6,0,11.6,0c11.1-0.5,34.6-0.5,46.7,1.4c7.6,1,13.6,4.8,17.7,10.1c3.5,4.8,4.5,11.1,3,17.8\r\n\t\t\t\tc-0.5,2.9-2,5.8-5,9.2c-1.5,1.9-14.4,3.9-16.5,5.3h10.9c2.5,1.9,5,3.9,7.1,6.3c4,4.3,5.6,9.2,5,14.9c-0.5,5.3-3,10.6-7.6,14\r\n\t\t\t\tc-2.5,1.9-16,3.9-18.5,5.3c5,5.3,18,12.1,16.5,19.3c-2,9.6-7.6,15.4-18.2,17.8c2.5,3.9,3,8.7,1.5,13.5c-0.5,2.4-1.5,4.3-2.5,6.3\r\n\t\t\t\tc-2.5,5.3-6.6,8.2-13.1,9.6C253.2,327.8,233.7,328.8,225.1,328.8z"
          })
        );
      }
      function ae(e) {
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
      function se() {
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
      function ce(e) {
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
      function le() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 32 32",
            enableBackground: "new 0 0 32 32"
          },
          o.createElement("path", {
            fill: "white",
            d:
              "M24.68,19.53l6.9-5.69c0.98-0.81,0.47-2.39-0.81-2.46l-8.89-0.54c-0.54-0.03-1.01-0.37-1.21-0.88L17.4,1.61\r\n\t\t\tc-0.47-1.18-2.12-1.18-2.59,0l-3.27,8.32c-0.2,0.51-0.67,0.84-1.21,0.88l-8.92,0.54c-1.28,0.07-1.78,1.65-0.81,2.46l6.9,5.66\r\n\t\t\tc0.4,0.34,0.61,0.91,0.47,1.41l-2.26,8.65c-0.3,1.21,1.01,2.19,2.09,1.52l7.51-4.81c0.47-0.3,1.04-0.3,1.48,0l7.54,4.81\r\n\t\t\tc1.08,0.67,2.39-0.3,2.09-1.52l-2.26-8.62C24.07,20.4,24.24,19.86,24.68,19.53z"
          })
        );
      }
      function ue() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 32 32",
            enableBackground: "new 0 0 32 32"
          },
          o.createElement(
            "g",
            null,
            o.createElement("path", {
              fill: "white",
              d:
                "M28.4,1.49H3.79c-1.99,0-3.6,1.61-3.6,3.6v14.88c0,1.99,1.61,3.6,3.6,3.6h2.37c0,1.61-0.38,3.7-1.51,5.88\r\n\t\t\tc-0.28,0.57-0.19,1.33,0.19,1.8c0.28,0.38,0.76,0.47,1.14,0.47c0.19,0,0.38,0,0.57-0.09c4.07-1.61,7.57-5.59,9.47-8.05h12.4\r\n\t\t\tc1.99,0,3.6-1.61,3.6-3.6V5.1C31.91,3.11,30.3,1.49,28.4,1.49z M8.23,14.97c-1.33,0-2.37-1.04-2.37-2.37s1.04-2.37,2.37-2.37\r\n\t\t\ts2.37,1.04,2.37,2.37S9.56,14.97,8.23,14.97z M15.99,14.97c-1.33,0-2.37-1.04-2.37-2.37s1.04-2.37,2.37-2.37\r\n\t\t\tc1.33,0,2.37,1.04,2.37,2.37S17.32,14.97,15.99,14.97z M23.85,14.97c-1.33,0-2.37-1.04-2.37-2.37s1.04-2.37,2.37-2.37\r\n\t\t\tc1.33,0,2.37,1.04,2.37,2.37S25.18,14.97,23.85,14.97z"
            })
          )
        );
      }
      function pe() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 32 32",
            enableBackground: "new 0 0 32 32"
          },
          o.createElement(
            "g",
            null,
            o.createElement("path", {
              fill: "white",
              d:
                "M23.32,28.28C23,25.55,20.68,23.52,18,23.52h-3.78c-2.73,0-5,2.03-5.33,4.76L8.56,30.8h15.09L23.32,28.28z"
            }),
            o.createElement("path", {
              fill: "white",
              d:
                "M16.08,22.15c2.82,0,5.1-2.28,5.1-5.1c0-2.82-2.28-5.1-5.1-5.1s-5.1,2.28-5.1,5.1\r\n\t\t\tC10.98,19.86,13.27,22.15,16.08,22.15z"
            }),
            o.createElement(
              "g",
              null,
              o.createElement("path", {
                fill: "white",
                d:
                  "M24.09,10.21c-0.94-1.22-2.18-2.23-3.57-2.9c-1.39-0.68-2.94-1.02-4.48-1.01l-0.02,0L16,6.3\r\n\t\t\t\tc-0.03,0-0.05,0-0.08,0c-1.52,0-3.04,0.35-4.4,1.01c-1.39,0.68-2.62,1.68-3.57,2.9c-0.94,1.22-1.6,2.67-1.91,4.18\r\n\t\t\t\tc-0.3,1.51-0.25,3.1,0.15,4.59c0.14,0.55,0.62,0.92,1.18,0.92c0.01,0,0.02,0,0.04,0h0.27l0.03-0.01c0.32-0.08,0.59-0.29,0.76-0.57\r\n\t\t\t\tl0.07-0.1c0.14-0.21,0.18-0.46,0.11-0.7L8.6,18.38c-0.18-0.62-0.27-1.27-0.29-1.92c0-4.24,3.45-7.68,7.69-7.68h0.04\r\n\t\t\t\tc4.24,0,7.69,3.45,7.69,7.68c-0.02,0.65-0.11,1.3-0.29,1.92l-0.04,0.15c-0.07,0.24-0.03,0.49,0.11,0.7l0.07,0.1\r\n\t\t\t\tc0.17,0.28,0.44,0.49,0.76,0.57l0.03,0.01l0.26,0c0.01,0,0.02,0,0.04,0c0.56,0,1.04-0.37,1.18-0.92c0.4-1.49,0.46-3.08,0.15-4.59\r\n\t\t\t\tC25.69,12.88,25.04,11.44,24.09,10.21z"
              }),
              o.createElement("path", {
                fill: "white",
                d:
                  "M16.02,0.68c-8.83,0-15.99,7.16-16,15.99h0.01c-0.02,2.68,0.74,5.31,2.18,7.57l0,0.01l0.01,0.01\r\n\t\t\t\tc0.37,0.43,1,0.51,1.47,0.19c0.47-0.32,0.62-0.94,0.36-1.44l0,0l0,0c-1.19-1.89-1.81-4.09-1.79-6.32v0v0\r\n\t\t\t\tc0-7.6,6.16-13.76,13.76-13.76c7.6,0,13.76,6.16,13.76,13.76v0v0c0.03,2.24-0.59,4.43-1.79,6.32l0,0l0,0\r\n\t\t\t\tc-0.26,0.5-0.11,1.12,0.36,1.44c0.47,0.32,1.1,0.24,1.47-0.19l0.01-0.01l0-0.01c1.45-2.26,2.2-4.89,2.18-7.57h0.01\r\n\t\t\t\tC32.02,7.84,24.86,0.68,16.02,0.68"
              })
            )
          )
        );
      }
    },
    AvbV: function(e, t, r) {
      var o = {
        "./main_brazilian.json": ["TFAN", 9],
        "./main_bulgarian.json": ["c2SO", 10],
        "./main_czech.json": ["peP3", 11],
        "./main_danish.json": ["0bnV", 12],
        "./main_dutch.json": ["wcLc", 13],
        "./main_english.json": ["/rNK", 14],
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
        "./main_sc_schinese.json": ["GOaQ", 29],
        "./main_schinese.json": ["B/Zz", 30],
        "./main_spanish.json": ["U6iL", 31],
        "./main_swedish.json": ["4uPU", 32],
        "./main_tchinese.json": ["rgC9", 33],
        "./main_thai.json": ["87dp", 34],
        "./main_turkish.json": ["yMpO", 35],
        "./main_ukrainian.json": ["zTWm", 36],
        "./main_vietnamese.json": ["wqiy", 37]
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
      n.d(t, "f", function() {
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
        n.d(t, "e", function() {
          return s;
        }),
        n.d(t, "g", function() {
          return c;
        }),
        n.d(t, "a", function() {
          return l;
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
        return new Date(
          e.getFullYear(),
          e.getMonth(),
          e.getDate(),
          e.getHours(),
          0,
          0,
          0
        );
      }
      function s(e) {
        return new Date(e.getFullYear(), e.getMonth(), 1, 0, 0, 0, 0);
      }
      function c(t) {
        return new Promise(function(e) {
          return setTimeout(e, t);
        });
      }
      function l() {
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
    DWPT: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return s;
      });
      var l = n("mrSG"),
        u = n("q1tI"),
        r = n("bxiW"),
        o = n("TyAF"),
        i = n("qiKp"),
        p = n("exH9"),
        a = n("6+2x"),
        m = n.n(a),
        s = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_listeners = new i.c()),
              (e.m_bNoSpace = !1),
              (e.state = { x: void 0, y: void 0, hoverPositionReady: !1 }),
              e
            );
          }
          return (
            Object(l.d)(e, t),
            (e.prototype.bindHover = function(e) {
              (this.m_elHover = e || void 0), this.positionHover();
            }),
            (e.prototype.componentDidMount = function() {
              this.m_listeners.AddEventListener(
                window,
                "blur",
                this.OnWindowBlur
              );
            }),
            (e.prototype.componentDidUpdate = function() {
              this.positionHover();
            }),
            (e.prototype.componentWillUnmount = function() {
              this.m_listeners.Unregister();
            }),
            (e.prototype.OnWindowBlur = function(e) {
              this.props.onWindowBlur && this.props.onWindowBlur(e);
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = (e.target, e.visibilityObserver),
                n = e.className,
                r = e.style,
                o = e.bEnablePointerEvents,
                i = (e.direction,
                e.nBodyAlignment,
                e.nBodyDistance,
                e.nAllowOffscreenPx,
                e.nMaxLateralMoveOnScreen,
                e.children),
                a = (e.onNoSpace,
                e.onWindowBlur,
                Object(l.f)(e, [
                  "target",
                  "visibilityObserver",
                  "className",
                  "style",
                  "bEnablePointerEvents",
                  "direction",
                  "nBodyAlignment",
                  "nBodyDistance",
                  "nAllowOffscreenPx",
                  "nMaxLateralMoveOnScreen",
                  "children",
                  "onNoSpace",
                  "onWindowBlur"
                ])),
                s = Object.assign({ left: this.state.x, top: this.state.y }, r),
                c = !t || t.visible;
              return u.createElement(
                "div",
                Object(l.a)({}, a, {
                  className: Object(p.a)(
                    n,
                    m.a.HoverPosition,
                    c && this.state.hoverPositionReady && m.a.Ready,
                    this.m_bNoSpace && m.a.NoSpace,
                    o && m.a.EnablePointerEvents
                  ),
                  style: s,
                  ref: this.bindHover
                }),
                i
              );
            }),
            (e.prototype.positionHover = function() {
              var e,
                t = this.m_elHover,
                n = this.props.target;
              if (
                t &&
                n &&
                (!this.state.hoverPositionReady ||
                  !this.props.visibilityObserver ||
                  this.props.visibilityObserver.visible)
              ) {
                var r = n.ownerDocument.defaultView;
                if (r && !r.closed) {
                  var o = t.querySelector(".hover_arrow.left"),
                    i = t.querySelector(".hover_arrow.right"),
                    a = t.querySelector(".hover_arrow.top"),
                    s = t.querySelector(".hover_arrow.bottom"),
                    c = n.getBoundingClientRect(),
                    l = t.getBoundingClientRect(),
                    u =
                      "overlay" == this.props.direction ||
                      "overlay-center" == this.props.direction;
                  o && o.setAttribute("style", "display: none;"),
                    i && i.setAttribute("style", "display: none;"),
                    a && a.setAttribute("style", "display: none;"),
                    s && s.setAttribute("style", "display: none;");
                  var p = this.props.direction,
                    m = S(
                      p,
                      this.props.nBodyAlignment,
                      this.props.nBodyDistance,
                      c,
                      l,
                      r.innerWidth,
                      r.innerHeight
                    ),
                    d = m.nLeft,
                    h = m.nTop,
                    f = m.nOverflow,
                    v = m.nLateralOverflow;
                  if (f > this.props.nAllowOffscreenPx && !u) {
                    var g = (function(e) {
                        switch (e) {
                          case "right":
                            return "left";
                          case "left":
                            return "right";
                          case "bottom":
                            return "top";
                          case "top":
                            return "bottom";
                          case "overlay":
                            return "overlay";
                          case "overlay-center":
                            return "overlay-center";
                        }
                      })(this.props.direction),
                      b = S(
                        g,
                        this.props.nBodyAlignment,
                        this.props.nBodyDistance,
                        c,
                        l,
                        r.innerWidth,
                        r.innerHeight
                      ),
                      _ = b.nLeft,
                      y = b.nTop,
                      w = b.nOverflow,
                      E = b.nLateralOverflow;
                    if (
                      (w < f && ((p = g), (d = _), (h = y), (f = w), (v = E)),
                      f > this.props.nAllowOffscreenPx)
                    )
                      return (
                        t.setAttribute("style", "display: none;"),
                        (this.m_bNoSpace = !0),
                        void (this.props.onNoSpace && this.props.onNoSpace())
                      );
                  }
                  0 === this.props.nMaxLateralMoveOnScreen ||
                    u ||
                    ((h = (e = (function(e, t, n, r, o) {
                      var i = Math.max(t[0], t[1]);
                      void 0 !== e && (i = Math.min(e, i));
                      i = Math.max(0, i);
                      var a = t[0] > t[1] ? i : -i;
                      "left" === n || "right" === n ? (r += a) : (o += a);
                      return [r, o];
                    })(this.props.nMaxLateralMoveOnScreen, v, p, h, d))[0]),
                    (d = e[1]));
                  var O = null;
                  switch (p) {
                    case "left":
                      O = i;
                      break;
                    case "right":
                      O = o;
                      break;
                    case "top":
                      O = s;
                      break;
                    case "bottom":
                      O = a;
                  }
                  O && O.setAttribute("style", ""),
                    d != this.state.x && this.setState({ x: d }),
                    h != this.state.y && this.setState({ y: h }),
                    this.state.hoverPositionReady ||
                      this.setState({ hoverPositionReady: !0 });
                }
              }
            }),
            (e.defaultProps = {
              direction: "right",
              nBodyAlignment: 0.5,
              nAllowOffscreenPx: 10,
              nBodyDistance: 8,
              nMaxLateralMoveOnScreen: void 0
            }),
            Object(l.c)([r.a], e.prototype, "bindHover", null),
            Object(l.c)([r.a], e.prototype, "OnWindowBlur", null),
            (e = Object(l.c)([o.a], e))
          );
        })(u.Component);
      function S(e, t, n, r, o, i, a) {
        var s,
          c,
          l,
          u,
          p = i,
          m = a;
        switch (e) {
          case "right":
            (s = r.right + n),
              (c = d(r.top, r.height, o.height, t)),
              (l = Math.max(0, s + o.width - p)),
              (u = [Math.max(0, 0 - c), Math.max(0, c + o.height - m)]);
            break;
          case "left":
            (s = r.left - n - o.width),
              (c = d(r.top, r.height, o.height, t)),
              (l = Math.max(0, 0 - s)),
              (u = [Math.max(0, 0 - c), Math.max(0, c + o.height - m)]);
            break;
          case "bottom":
            (s = d(r.left, r.width, o.width, t)),
              (c = r.bottom + n),
              (l = Math.max(0, c + o.height - m)),
              (u = [Math.max(0, 0 - s), Math.max(0, s + o.width - p)]);
            break;
          case "top":
            (s = d(r.left, r.width, o.width, t)),
              (c = r.top - n - o.height),
              (l = Math.max(0, 0 - c)),
              (u = [Math.max(0, 0 - s), Math.max(0, s + o.width - p)]);
            break;
          case "overlay":
            (s = r.left), (c = r.top), (u = [(l = 0), 0]);
            break;
          case "overlay-center":
            (s = r.left + 0.5 * r.width - 0.5 * o.width),
              (c = r.top + 0.5 * r.height - 0.5 * o.height),
              (u = [(l = 0), 0]);
        }
        return { nLeft: s, nTop: c, nOverflow: l, nLateralOverflow: u };
      }
      function d(e, t, n, r) {
        return Math.max(0, Math.min(1, r)) * (t - n) + e;
      }
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
        h = n("r64O");
      ((r = c = c || {})[(r.Minimized = 1)] = "Minimized"),
        (r[(r.Hidden = 2)] = "Hidden"),
        (r[(r.Tooltip = 4)] = "Tooltip"),
        (r[(r.ContextMenu = 8)] = "ContextMenu"),
        (r[(r.Resizable = 16)] = "Resizable");
      var f = (function() {
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
                s = _.GetExistingPopup(this.m_strName);
              (s && !this.m_rgParams.replace_existing_popup) ||
                ((this.m_rgParams = this.UpdateParamsBeforeShow(
                  this.m_rgParams
                )),
                s
                  ? ((i = s.m_element),
                    (o = s.m_popup),
                    s.ReleasePopup(),
                    (a = s.m_renderWhenReady),
                    _.RemoveTrackedPopup(s),
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
                  : ((o = (n = g.CreatePopup(this.m_strName, this.m_rgParams))
                      .popup),
                    (i = n.element),
                    (a = new f(o, i))),
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
                _.AddTrackedPopup(this),
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
                  p.c.EBrowserType_OpenVROverlay &&
                  r.m_eBrowserType !=
                    p.c.EBrowserType_OpenVROverlay_Dashboard) ||
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
        g = (function() {
          function d() {
            var e,
              a = this;
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
                }),
                (e = document.querySelector("head")),
                Object(h.a)(e, "Couldn't find head element"),
                e &&
                  ((this.m_DynamicCSSObserver = new MutationObserver(
                    function() {
                      var t = b(e);
                      a.m_mapPopups.forEach(function(e) {
                        d.SetStylesheetsForPopup(e.window, t);
                      });
                    }
                  )),
                  this.m_DynamicCSSObserver.observe(e, { childList: !0 })));
          }
          return (
            (d.prototype.SetCurrentLoggedInAccountID = function(e) {
              (this.m_unCurrentAccountID = e)
                ? this.LoadSavedDimensionStore()
                : this.ClearSavedDimensionStore();
            }),
            (d.prototype.AddShutdownCallback = function(e) {
              this.m_rgShutdownCallbacks.push(e);
            }),
            (d.prototype.AddPopupCreatedCallback = function(e) {
              this.m_rgPopupCreatedCallbacks.push(e);
            }),
            (d.prototype.AddTrackedPopup = function(e) {
              this.m_mapPopups.set(e.GetName(), e);
              for (
                var t = 0, n = this.m_rgPopupCreatedCallbacks;
                t < n.length;
                t++
              ) {
                (0, n[t])(e);
              }
            }),
            (d.prototype.RemoveTrackedPopup = function(e) {
              this.m_mapPopups.delete(e.GetName());
            }),
            (d.prototype.GetExistingPopup = function(e) {
              return this.m_mapPopups.get(e);
            }),
            (d.prototype.GetPopups = function() {
              return this.m_mapPopups.values();
            }),
            (d.prototype.ClosePopupsOwnedByBrowser = function(t) {
              this.m_mapPopups.forEach(function(e) {
                e.browser_info &&
                  e.browser_info.m_nBrowserID == t.m_nBrowserID &&
                  e.browser_info.m_unPID == t.m_unPID &&
                  e.Close();
              });
            }),
            (d.CreatePopup = function(e, t) {
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
              return (
                l.document.write(m),
                (l.document.title = i),
                d.SetStylesheetsForPopup(l, b(document.querySelector("head"))),
                { popup: l, element: l.document.getElementById("popup_target") }
              );
            }),
            (d.SetStylesheetsForPopup = function(e, t) {
              for (
                var n = Object.assign({}, t),
                  r = e.document.getElementsByTagName("head")[0],
                  o = r.getElementsByTagName("link"),
                  i = o.length,
                  a = 0;
                a < i;
                ++a
              ) {
                var s = o[a];
                n[s.href] ? delete n[s.href] : s.parentNode.removeChild(s);
              }
              for (var c in n) {
                for (
                  var l = n[c], u = e.document.createElement("link"), p = 0;
                  p < l.attributes.length;
                  p++
                ) {
                  var m = l.attributes.item(p);
                  u.setAttribute(m.name, m.value);
                }
                r.appendChild(u);
              }
            }),
            (d.prototype.BShuttingDown = function() {
              return this.m_bShuttingDown;
            }),
            (d.prototype.GetLocalStorageKey = function() {
              return "PopupSavedDimensions_" + this.m_unCurrentAccountID;
            }),
            (d.prototype.LoadSavedDimensionStore = function() {
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
            (d.prototype.SaveSavedDimensionStore = function() {
              var e, t;
              this.m_unCurrentAccountID &&
                this.m_bSaveRequired &&
                ((e = this.GetLocalStorageKey()),
                (t = JSON.stringify(Array.from(this.m_mapRestoreDetails))),
                window.localStorage.setItem(e, t),
                (this.m_bSaveRequired = !1));
            }),
            (d.prototype.DebouncedSaveSavedDimensionStore = function() {
              this.SaveSavedDimensionStore();
            }),
            (d.prototype.ClearSavedDimensionStore = function() {
              this.m_mapRestoreDetails.clear(), (this.m_bSaveRequired = !1);
            }),
            (d.prototype.GetRestoreDetails = function(e) {
              if (!this.m_mapRestoreDetails.has(e)) return "";
              var t = this.m_mapRestoreDetails.get(e);
              return (
                (t.last_used = Date.now()),
                (this.m_bSaveRequired = !0),
                t.strRestoreDetails
              );
            }),
            (d.prototype.SetRestoreDetails = function(e, t, n) {
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
              d.prototype,
              "DebouncedSaveSavedDimensionStore",
              null
            ),
            d
          );
        })();
      function b(e) {
        for (
          var t = {}, n = e.getElementsByTagName("link"), r = 0;
          r < n.length;
          r++
        ) {
          var o = n[r];
          "stylesheet" === o.rel && (t[o.href] = o);
        }
        return t;
      }
      var _ = new g();
      window.g_PopupManager = _;
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
        return y;
      }),
        n.d(t, "g", function() {
          return w;
        }),
        n.d(t, "h", function() {
          return O;
        }),
        n.d(t, "c", function() {
          return S;
        }),
        n.d(t, "d", function() {
          return C;
        }),
        n.d(t, "e", function() {
          return D;
        }),
        n.d(t, "b", function() {
          return x;
        }),
        n.d(t, "f", function() {
          return A;
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
        f = n("r64O"),
        v = n("+d9t"),
        g = u.createContext({}),
        b = function() {
          return u.useContext(g);
        };
      var _ = (function(e) {
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
                    : (this.m_ModalHandle = A(window).ShowModal(n))
                  : this.HideModal(),
                null
              );
            }),
            t
          );
        })(u.Component),
        y = function(e) {
          var t = e.active,
            n = e.onDismiss,
            r = e.className,
            o = e.modalClassName,
            i = e.children;
          return u.createElement(
            _,
            { active: t },
            u.createElement(
              w,
              { onEscKeypress: n, className: o },
              u.createElement(m.f, { className: r }, i)
            )
          );
        };
      function w(e) {
        var t = b();
        return u.createElement(
          v.f,
          Object(l.a)({ component: t.ModalPosition, fallback: E }, e)
        );
      }
      function E(t) {
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
                    u.createElement(a.fb, null)
                  )
                ),
              u.createElement(i.a, null, t.children)
            )
          )
        );
      }
      var O = (function(t) {
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
        S = (function(e) {
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
                C,
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
        C = (function(e) {
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
                w,
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
        D = (function(e) {
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
              return u.createElement(S, Object(l.a)({}, e));
            }),
            (t = Object(l.c)([s.a], t))
          );
        })(u.Component),
        x = (function(e) {
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
                {
                  className: Object(c.a)(
                    this.props.className,
                    "FullModalOverlay"
                  )
                },
                u.createElement("div", {
                  className: "ModalOverlayContent ModalOverlayBackground"
                }),
                t
              );
            }),
            t
          );
        })(u.Component),
        M = (function() {
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
      function A(e) {
        var t = k.get(e);
        return t || ((t = new M()), k.set(e, t)), t;
      }
      var k = new WeakMap();
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
    LY6W: function(e, t, n) {
      e.exports = {
        TextToolTip: "tooltip_TextToolTip_2FxbH",
        ToolTipCustom: "tooltip_ToolTipCustom_3XGRk",
        ToolTipTitle: "tooltip_ToolTipTitle_1LhVf",
        Center: "tooltip_Center_2ZDqE",
        ToolTipInsetContent: "tooltip_ToolTipInsetContent_i4LuY"
      };
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
            className: Object(y.a)(s.a.Toggle, r && s.a.Disabled),
            onClick: function() {
              return !r && n(!t);
            }
          },
          o.a.createElement("div", { className: s.a.ToggleRail }),
          o.a.createElement("div", {
            className: Object(y.a)(
              s.a.ToggleRail,
              s.a.Highlight,
              t ? s.a.On : s.a.Off
            )
          }),
          o.a.createElement("div", {
            className: Object(y.a)(s.a.ToggleSwitch, t ? s.a.On : s.a.Off)
          })
        );
      }
      var h = n("mrSG"),
        g = n("q1tI"),
        o = n.n(g),
        b = n("6Y59"),
        _ = n("TLQK"),
        i = n("bxiW"),
        y = n("exH9"),
        a = n("umRa"),
        s = n.n(a),
        c = g.createContext({}),
        l = function() {
          return g.useContext(c);
        },
        w = n("+d9t"),
        E = Object(w.c)("DialogHeader"),
        u = Object(w.c)("DialogSubHeader"),
        p = Object(w.c)("DialogFooter"),
        m = Object(w.c)("DialogLabel _DialogLayout"),
        d = Object(w.c)("DialogBodyText"),
        f = Object(w.c)("DialogBody"),
        O = (Object(w.c)("DialogInnerBody"),
        Object(w.c)("DialogControlsSection"),
        Object(w.c)("DialogControlsSectionHeader"),
        Object(w.c)("DialogBodyNotificationBar")),
        v = Object(w.c)("DialogTwoColLayout _DialogColLayout"),
        S = Object(w.c)("DialogThreeColLayout _DialogColLayout");
      Object(w.c)("DialogTwoThirdColLayout _DialogColLayout"),
        Object(w.c)("DialogColumn _DialogLayout");
      function C(e) {
        var t = l();
        return g.createElement(
          w.f,
          Object(h.a)({ component: t.Content, fallback: D }, e)
        );
      }
      function D(e) {
        var t = e.children,
          n = e.bCenterVertically,
          r = e.renderDialogContentDiv,
          o = e.renderDialogContentInnerDiv,
          i = Object(h.f)(e, [
            "children",
            "bCenterVertically",
            "renderDialogContentDiv",
            "renderDialogContentInnerDiv"
          ]),
          a =
            "DialogContent _DialogLayout" +
            (e.className ? " " + e.className : "");
        return (
          n && (a += " _DialogCenterVertically"),
          g.createElement(
            w.f,
            Object(h.a)({ component: r, fallback: "div" }, i, { className: a }),
            g.createElement(
              w.f,
              {
                component: o,
                fallback: "div",
                className: "DialogContent_InnerWidth"
              },
              t
            )
          )
        );
      }
      var x = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(h.d)(t, e),
          (t.prototype.OnSubmit = function(e) {
            e.preventDefault(), this.props.onSubmit && this.props.onSubmit(e);
          }),
          (t.prototype.render = function() {
            return g.createElement(
              "form",
              Object(h.a)({}, this.props, { onSubmit: this.OnSubmit })
            );
          }),
          Object(h.c)([i.a], t.prototype, "OnSubmit", null),
          t
        );
      })(g.Component);
      function M(e) {
        var t = e.classNameContent,
          n = e.bCenterVertically,
          r = Object(h.f)(e, ["classNameContent", "bCenterVertically"]);
        return g.createElement(
          C,
          { className: t, bCenterVertically: n },
          g.createElement(x, Object(h.a)({}, r))
        );
      }
      function A(e) {
        var t = l();
        return g.createElement(
          w.f,
          Object(h.a)({ component: t.BaseButton, fallback: k }, e)
        );
      }
      function k(e) {
        var t = e.svgicon,
          n = (e.primary, e.renderButtonElement),
          r = Object(h.f)(e, ["svgicon", "primary", "renderButtonElement"]),
          o = Object(y.a)(e.className, { hasSVGIcon: void 0 !== t });
        return g.createElement(
          w.f,
          Object(h.a)({ component: n, fallback: "button" }, r, {
            className: o
          }),
          t && t(),
          e.children
        );
      }
      function j(e) {
        return g.createElement(
          A,
          Object(h.a)(
            { primary: !0, type: e.onClick ? "button" : "submit" },
            e,
            {
              className: Object(y.a)(
                e.className,
                "DialogButton",
                "_DialogLayout",
                "Primary"
              )
            }
          )
        );
      }
      function T(e) {
        return g.createElement(
          A,
          Object(h.a)({ type: "button" }, e, {
            className: Object(y.a)(
              e.className,
              "DialogButton",
              "_DialogLayout",
              "Secondary"
            )
          })
        );
      }
      function I(e) {
        return g.createElement(
          A,
          Object(h.a)({ type: "button" }, e, {
            className: Object(y.a)(
              e.className,
              "DialogButton _DialogLayout Small"
            )
          })
        );
      }
      function N(e) {
        return g.createElement(
          v,
          null,
          g.createElement(
            j,
            { onClick: e.onOK, disabled: e.bOKDisabled },
            e.strOKText || Object(_.f)("#Button_Confirm"),
            " "
          ),
          g.createElement(
            T,
            { onClick: e.onCancel },
            e.strCancelText || Object(_.f)("#Button_Cancel")
          )
        );
      }
      function L(e) {
        return g.createElement(
          S,
          null,
          g.createElement(
            j,
            { onClick: e.onOK, disabled: e.bOKDisabled },
            e.strOKText || Object(_.f)("#Button_Confirm"),
            " "
          ),
          g.createElement(
            j,
            { onClick: e.onUpdate, disabled: e.bUpdateDisabled },
            e.strUpdateText || Object(_.f)("#Button_Update"),
            " "
          ),
          g.createElement(
            T,
            { onClick: e.onCancel },
            e.strCancelText || Object(_.f)("#Button_Cancel")
          )
        );
      }
      function R(e) {
        var t = l();
        return g.createElement(
          w.f,
          Object(h.a)({ component: t.OnOffToggle, fallback: G }, e)
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
            Object(h.c)([i.a], e.prototype, "Toggle", null),
            Object(h.c)([i.a], e.prototype, "KeyDown", null),
            e
          );
        })(g.Component),
        F = (function(e) {
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
                  ? g.createElement(
                      "div",
                      Object(h.a)(
                        {
                          className:
                            "DialogCheckbox_Container _DialogLayout " +
                            (this.props.classname ? this.props.classname : "")
                        },
                        this.GetElementProps()
                      ),
                      g.createElement(
                        "div",
                        { className: e },
                        g.createElement(b.n, {
                          color: this.props.color,
                          highlightColor: this.props.highlightColor
                        })
                      ),
                      g.createElement(
                        "div",
                        { className: "DialogToggle_Label" },
                        g.createElement("span", null, this.props.label),
                        this.props.tooltip &&
                          g.createElement(
                            "span",
                            { "data-tooltip-text": this.props.tooltip },
                            " (?)"
                          )
                      ),
                      g.createElement("div", { style: { clear: "left" } }),
                      this.props.description &&
                        g.createElement(
                          "div",
                          { className: "DialogToggle_Description" },
                          this.props.description
                        )
                    )
                  : g.createElement(
                      "div",
                      Object(h.a)({ className: e }, this.GetElementProps()),
                      g.createElement(b.n, null)
                    )
              );
            }),
            t
          );
        })(B),
        P = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(h.d)(t, e),
            (t.prototype.render = function() {
              var e = this.state.checked ? " Active" : "";
              return g.createElement(
                "div",
                Object(h.a)(
                  {
                    className: Object(y.a)(
                      "DialogRoundCheckbox_Container",
                      this.props.classname,
                      this.props.label ? "WithLabel" : ""
                    )
                  },
                  this.GetElementProps()
                ),
                g.createElement(
                  "div",
                  { className: "DialogRoundCheckbox" },
                  g.createElement(
                    "div",
                    { className: "DialogRoundCheckbox_Control" + e },
                    g.createElement(
                      "div",
                      { className: "DialogRoundCheckbox_OuterCircle" },
                      g.createElement("div", {
                        className: "DialogRoundCheckbox_InnerCircle"
                      })
                    )
                  )
                ),
                this.props.label &&
                  g.createElement(
                    "div",
                    { className: "DialogToggle_Label" },
                    g.createElement("span", null, this.props.label),
                    this.props.tooltip &&
                      g.createElement(
                        "span",
                        { "data-tooltip-text": this.props.tooltip },
                        " (?)"
                      )
                  )
              );
            }),
            t
          );
        })(B),
        G = (function(e) {
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
                g.createElement(
                  "div",
                  {
                    className: e,
                    tabIndex: this.props.tabIndex || 0,
                    onKeyDown: this.OnOffKeyDown
                  },
                  g.createElement(
                    "div",
                    { className: "displayColumn alignSelfCenter" },
                    g.createElement(
                      "div",
                      { className: "DialogToggle_Label" },
                      g.createElement("span", null, this.props.label),
                      this.props.tooltip &&
                        g.createElement(
                          "span",
                          { "data-tooltip-text": this.props.tooltip },
                          " (?)"
                        )
                    ),
                    this.props.description &&
                      g.createElement(
                        "div",
                        { className: "DialogToggle_Description" },
                        this.props.description
                      ),
                    this.props.children
                  ),
                  this.props.useToggleRail
                    ? g.createElement(
                        "div",
                        { className: "DialogOnOffToggle_NewUIContainer" },
                        g.createElement(r, {
                          onChange: this.OnNewUIToggle,
                          value: this.state.checked
                        })
                      )
                    : g.createElement(
                        "div",
                        {
                          className: "DialogOnOffToggle_Control",
                          onClick: this.Toggle
                        },
                        g.createElement(
                          "div",
                          {
                            className:
                              "DialogOnOffToggle_Option Off" +
                              (this.state.checked ? "" : " Active")
                          },
                          Object(_.f)("#Dialog_Off")
                        ),
                        g.createElement(
                          "div",
                          {
                            className:
                              "DialogOnOffToggle_Option On" +
                              (this.state.checked ? " Active" : "")
                          },
                          Object(_.f)("#Dialog_On")
                        )
                      )
                )
              );
            }),
            Object(h.c)([i.a], t.prototype, "OnOffKeyDown", null),
            Object(h.c)([i.a], t.prototype, "OnNewUIToggle", null),
            t
          );
        })(B),
        H = n("hJxo"),
        U = n("r64O"),
        W = (function(n) {
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
                    (n.m_CopiedAnimation = new H.b(
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
              Object(U.a)(
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
                (m = g.createElement(
                  "div",
                  { className: "DialogLabelExplainer" },
                  n
                ));
              var d = g.createElement(
                g.Fragment,
                null,
                g.createElement(
                  "div",
                  { className: "DialogInput_Wrapper _DialogLayout" },
                  g.createElement(
                    "input",
                    Object(h.a)({ type: a ? "password" : "text" }, s, {
                      className: c,
                      ref: this.OnInputRef,
                      onChange: this.OnChanged
                    })
                  ),
                  r &&
                    g.createElement(
                      "div",
                      { className: "displayRow" },
                      g.createElement(
                        T,
                        {
                          className: "DialogInput_CopyAction Primary",
                          onClick: this.OnCopyClick
                        },
                        Object(_.f)("#Button_CopyLink")
                      ),
                      g.createElement(
                        "div",
                        { style: p, className: l },
                        "Link Copied"
                      )
                    ),
                  (i || (o && s.value)) &&
                    g.createElement(
                      "div",
                      {
                        className: "DialogInput_ClearAction",
                        onClick: this.OnClearClick
                      },
                      g.createElement(b.fb, null)
                    )
                ),
                m
              );
              return t
                ? g.createElement(
                    "div",
                    { className: "DialogInputLabelGroup _DialogLayout " },
                    g.createElement(
                      "label",
                      null,
                      g.createElement(
                        "div",
                        { className: "DialogLabel" },
                        t,
                        " ",
                        this.props.tooltip &&
                          g.createElement(
                            "span",
                            { "data-tooltip-text": this.props.tooltip },
                            " (?)"
                          ),
                        g.createElement(
                          "span",
                          { className: "DialogInputRequirementLabel" },
                          this.props.requiredLabel
                        ),
                        " "
                      ),
                      d,
                      this.state.m_bNumberBelowMinRange
                        ? g.createElement(
                            "div",
                            null,
                            " ",
                            Object(_.f)("#Input_Error_NumberTooSmall"),
                            " "
                          )
                        : null,
                      this.state.m_bNumberAboveMaxRange
                        ? g.createElement(
                            "div",
                            null,
                            " ",
                            Object(_.f)("#Input_Error_NumberTooLarge"),
                            " "
                          )
                        : null,
                      this.state.m_bIsInvalidURL
                        ? g.createElement(
                            "div",
                            null,
                            " ",
                            Object(_.f)("#Input_Error_MustBeURL"),
                            " "
                          )
                        : null,
                      this.state.m_bIsInvalidEmail
                        ? g.createElement(
                            "div",
                            null,
                            " ",
                            Object(_.f)("#Input_Error_MustBeEmail"),
                            " "
                          )
                        : null,
                      this.state.m_bIsNotNumeric
                        ? g.createElement(
                            "div",
                            null,
                            " ",
                            Object(_.f)("#Input_Error_MustBeNumber"),
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
        })(g.PureComponent),
        z = (function(n) {
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
                  (s = g.createElement(
                    "div",
                    { className: "DialogLabelExplainer" },
                    i
                  )),
                g.createElement(
                  "div",
                  {
                    className:
                      "DialogSlider_Container _DialogInputContainer _DialogLayout" +
                      (this.props.classname ? " " + this.props.classname : ""),
                    onKeyDown: this.OnKeyDown,
                    tabIndex: this.props.tabIndex || 0
                  },
                  o &&
                    g.createElement(
                      "div",
                      { className: "DialogLabel" },
                      o,
                      Boolean(a) &&
                        g.createElement(
                          "span",
                          { "data-tooltip-text": a },
                          " (?)"
                        )
                    ),
                  g.createElement(
                    "div",
                    {
                      className: "DialogSlider_Slider",
                      onMouseDown: this.OnMouseDown,
                      onTouchStart: this.OnTouchStart
                    },
                    g.createElement("div", {
                      className: "DialogSlider_Value",
                      style: t
                    }),
                    g.createElement("div", {
                      className: "DialogSlider_Grabber",
                      style: n
                    })
                  ),
                  this.props.bShowValue
                    ? g.createElement(
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
        })(g.Component),
        V = n("TtDX"),
        Y = n("P++D"),
        K = n.n(Y),
        X = n("5E+2"),
        q = n("6+2x"),
        J = n.n(q),
        Z = (function(n) {
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
              var e,
                t,
                n = "DialogMenuPosition";
              this.props.strDropDownClassName &&
                (n += " " + this.props.strDropDownClassName);
              var r = Object(h.a)(
                {
                  bOverlapHorizontal: !0,
                  bMatchWidth: !0,
                  bFitToWindow: !0,
                  strClassName: n,
                  bDisableMouseOverlay: this.props.bDisableMouseOverlay
                },
                this.props.contextMenuPositionOptions
              );
              (this.m_iMenuInstance = Object(V.a)(
                g.createElement(
                  c.Provider,
                  { value: this.context },
                  g.createElement(Q, {
                    rgOptions: this.props.rgOptions,
                    fnOnItemSelected: this.OnItemSelected,
                    strDropDownItemClassName: this.props
                      .strDropDownItemClassName
                  })
                ),
                this.m_elInput,
                r
              )),
                this.m_iMenuInstance.SetLabel(
                  null !==
                    (t =
                      null !== (e = this.props.menuLabel) && void 0 !== e
                        ? e
                        : this.props.label) && void 0 !== t
                    ? t
                    : "string" == typeof this.props.strDefaultLabel &&
                        this.props.strDefaultLabel
                ),
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
              var o = g.createElement(
                g.Fragment,
                null,
                this.props.postDropdownElement,
                !this.props.disabled &&
                  g.createElement(
                    "div",
                    { className: "DialogDropDown_Arrow" },
                    g.createElement(b.p, null)
                  ),
                this.props.postOptionElement,
                g.createElement(
                  "div",
                  { className: "DialogDropDown_CurrentDisplay" },
                  t
                )
              );
              return g.createElement(
                "div",
                { className: r },
                this.props.label &&
                  g.createElement(
                    "div",
                    { className: "DialogLabel" },
                    this.props.label,
                    Boolean(this.props.tooltip) &&
                      g.createElement(
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
                  : g.createElement(
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
            (e.contextType = c),
            Object(h.c)([i.a], e.prototype, "OnInputRef", null),
            Object(h.c)([i.a], e.prototype, "ToggleMenu", null),
            Object(h.c)([i.a], e.prototype, "OnItemSelected", null),
            Object(h.c)([i.a], e.prototype, "ShowMenu", null),
            Object(h.c)([i.a], e.prototype, "HideMenu", null),
            e
          );
        })(g.Component);
      function Q(e) {
        var t = l();
        return g.createElement(
          w.f,
          Object(h.a)({ component: t.DropDownMenu, fallback: $ }, e)
        );
      }
      function $(n) {
        function r(e) {
          var t = parseInt(e.currentTarget.getAttribute("data-dropdown-index"));
          (t || 0 === t) &&
            0 <= t &&
            t < n.rgOptions.length &&
            n.fnOnItemSelected(t, n.rgOptions[t]);
        }
        var o = Object(y.a)(
            K.a.DialogDropDownMenu_Item,
            n.strDropDownItemClassName
          ),
          e = n.rgOptions.map(function(e, t) {
            return g.createElement(
              w.f,
              {
                component: n.renderMenuItem,
                fallback: "div",
                key: t,
                className: Object(y.a)(o, e.strOptionClass),
                "data-dropdown-index": t,
                onClick: r
              },
              Boolean(e.tooltip)
                ? g.createElement(
                    X.a,
                    {
                      toolTipContent: e.tooltip,
                      strTooltipClassname: J.a.HoverAboveModal
                    },
                    e.label
                  )
                : g.createElement(g.Fragment, null, e.label)
            );
          });
        return g.createElement(
          w.f,
          {
            component: n.renderMenuContainer,
            fallback: "div",
            className: Object(y.a)(
              K.a.DialogDropDownMenu,
              "_DialogInputContainer"
            )
          },
          e
        );
      }
      var ee = (function(t) {
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
                g.createElement(
                  Z,
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
        })(g.Component),
        te = n("2vnA"),
        ne = n("sUmc"),
        re = n("Kw0F"),
        oe = n("YyVH"),
        ie = n("UPxs");
      g.Component;
      function ae(e, t, n, r) {
        return r
          ? n && e > n.left && e < n.right && t > n.top && t < n.bottom
          : n && e >= n.left && e <= n.right && t >= n.top && t <= n.bottom;
      }
      var se = (function() {
          function e() {
            (this.m_embeddedElement = new ne.a("DragGhosts")),
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
              re.c(this.m_rgDropRegions, e),
                re.c(this.m_rgActiveDropRegions, e),
                this.m_activeDropRegion == e &&
                  ((this.m_activeDropRegion = void 0),
                  this.m_activeDraggable && this.ShowDragGhost());
            }),
            (e.prototype.OnDragGhostRef = function(e) {
              this.m_dragGhost = e;
            }),
            (e.prototype.ShowDragGhost = function() {
              var e = this.m_activeDraggable.renderDragGhost(),
                t = Object(y.a)(
                  e.props.className,
                  !!this.m_activeDropRegion && "DraggedOverActiveDrop"
                ),
                n = g.cloneElement(e, {
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
                    ae(
                      t,
                      n,
                      (i = e.GetDragDocument().body.getBoundingClientRect())
                    ) &&
                      !ae(r, o, i, !0) &&
                      ((a = oe.c(
                        r,
                        i.left,
                        i.right,
                        i.left - 200,
                        i.right + 200
                      )),
                      (s = oe.c(
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
        ce = (function(t) {
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
              (e.m_divRef = g.createRef()),
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
                  ? ((s = Object(y.a)(s, r || "DraggedOut")),
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
                g.createElement(
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
                : g.createElement(le, { elContent: this.GetClone() });
            }),
            (e.prototype.renderDragGhost = function() {
              return this.props.fnRenderDragGhost
                ? this.props.fnRenderDragGhost()
                : g.createElement(ue, {
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
            Object(h.c)([te.k], e.prototype, "ResetDragState", null),
            Object(h.c)([i.a], e.prototype, "OnHTMLDragStart", null),
            Object(h.c)([i.a], e.prototype, "OnHTMLDragEnd", null),
            e
          );
        })(g.Component),
        le = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(h.d)(t, e),
            (t.prototype.OnRef = function(e) {
              e && e.appendChild(this.props.elContent);
            }),
            (t.prototype.render = function() {
              return g.createElement("div", {
                className: "DialogDraggable_DropGhost",
                ref: this.OnRef
              });
            }),
            Object(h.c)([i.a], t.prototype, "OnRef", null),
            t
          );
        })(g.Component),
        ue = (function(t) {
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
                return g.createElement("div", null);
              var e = {
                  left: this.state.clientX - (this.props.offsetX || 0),
                  top: this.state.clientY - (this.props.offsetY || 0),
                  width: this.props.width || "auto",
                  height: this.props.height || "auto",
                  perspective: "600px"
                },
                t = oe.c(
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
              return g.createElement(
                "div",
                { className: r, style: e },
                g.createElement("div", { ref: this.OnRef, style: n })
              );
            }),
            Object(h.c)([i.a], e.prototype, "OnRef", null),
            e
          );
        })(g.Component),
        pe = (function(e) {
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
              return (t.m_divRef = g.createRef()), (t.state = {}), t;
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
                return ae(e, t, this.GetClientRect());
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
                  i = Object(y.a)(
                    t || "DialogDropRegion",
                    this.state.bDraggableActive && (n || "Active")
                  );
                return g.createElement(
                  ie.a,
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
          })(g.Component)
        ),
        me = n("zBSo"),
        de = n.n(me);
      function he(e) {
        return g.createElement("div", Object(h.a)({}, e));
      }
      function fe(e) {
        var t = e.title,
          n = (e.active, Object(h.f)(e, ["title", "active"]));
        return g.createElement("div", Object(h.a)({}, n), t);
      }
      g.forwardRef(function(o, e) {
        var t,
          n,
          i = null !== (t = o.stylesheet) && void 0 !== t ? t : de.a,
          r =
            null != o.startingPage
              ? o.pages
                  .map(function(e) {
                    return e.identifier;
                  })
                  .indexOf(o.startingPage)
              : -1,
          a = null == o.page,
          s = g.useState(r),
          c = s[0],
          l = s[1],
          u = a
            ? c
            : o.pages.findIndex(function(e) {
                return e.identifier === o.page;
              }),
          p = u < 0 || u >= o.pages.length ? 0 : u,
          m = o.pages[p],
          d = o.pages.map(function(e, t) {
            var n,
              r = e == m;
            return g.createElement(w.f, {
              component: o.renderPageListItem,
              fallback: fe,
              className: Object(y.a)(
                i.PagedSettingsDialog_PageListItem,
                (((n = {})[i.Active] = r), n)
              ),
              key: e.title,
              onClick: function() {
                o.onPageRequested && o.onPageRequested(e.identifier),
                  e.click ? e.click() : a && t != c && l(t);
              },
              title: e.title,
              active: r
            });
          }),
          h = m.hideTitle,
          f = !1 !== m.enabled,
          v = null === (n = o.showTitle) || void 0 === n || n;
        return g.createElement(
          "div",
          {
            className: Object(y.a)(i.PagedSettingsDialog, o.className),
            ref: e
          },
          g.createElement(
            "div",
            { className: i.PagedSettingsDialog_PageListColumn },
            v &&
              g.createElement(
                "div",
                { className: i.PagedSettingsDialog_Title },
                o.title
              ),
            g.createElement(
              w.f,
              {
                component: o.renderPageList,
                fallback: he,
                className: i.PagedSettingsDialog_PageList
              },
              d
            )
          ),
          g.createElement(
            "div",
            { className: "DialogContentTransition" },
            m &&
              g.createElement(
                C,
                {
                  className: Object(y.a)(
                    i.PagedSettingsDialog_PageContent,
                    m.pageClassName,
                    { noPermission: !f }
                  )
                },
                !h &&
                  g.createElement(
                    E,
                    null,
                    m.title,
                    g.createElement(
                      O,
                      null,
                      !f &&
                        g.createElement(
                          g.Fragment,
                          null,
                          g.createElement(b.B, null),
                          Object(_.f)("#Chat_Settings_Permission_Denied")
                        )
                    )
                  ),
                null != m.content && g.cloneElement(m.content)
              )
          )
        );
      });
      var ve = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (
            (e.m_refTextArea = g.createRef()),
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
                  "auto" == n.style.overflow && (n.style.overflow = "hidden")),
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
            this.InternalOnInput(), this.props.onKeyUp && this.props.onKeyUp(e);
          }),
          (e.prototype.OnBlur = function(e) {
            this.DeferredInternalOnInput(),
              this.props.onBlur && this.props.onBlur(e);
          }),
          (e.prototype.OnClick = function(e) {
            this.InternalOnInput(), this.props.onClick && this.props.onClick(e);
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
              this.m_refTextArea.current.value.length != this.m_cEntryLength &&
                this.InternalOnInput();
          }),
          (e.prototype.render = function() {
            var e = this.props,
              t = (e.nMinHeight,
              e.nMaxHeight,
              Object(h.f)(e, ["nMinHeight", "nMaxHeight"]));
            return g.createElement(
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
      })(g.Component);
      n.d(t, "k", function() {
        return E;
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
          return f;
        }),
        n.d(t, "v", function() {
          return v;
        }),
        n.d(t, "f", function() {
          return C;
        }),
        n.d(t, "g", function() {
          return M;
        }),
        n.d(t, "q", function() {
          return j;
        }),
        n.d(t, "d", function() {
          return T;
        }),
        n.d(t, "t", function() {
          return I;
        }),
        n.d(t, "n", function() {
          return N;
        }),
        n.d(t, "o", function() {
          return L;
        }),
        n.d(t, "e", function() {
          return F;
        }),
        n.d(t, "r", function() {
          return P;
        }),
        n.d(t, "p", function() {
          return R;
        }),
        n.d(t, "l", function() {
          return W;
        }),
        n.d(t, "s", function() {
          return z;
        }),
        n.d(t, "h", function() {
          return Z;
        }),
        n.d(t, "i", function() {
          return ee;
        }),
        n.d(t, "a", function() {
          return ve;
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
                    Array.isArray(i)
                      ? i.map(function(e) {
                          return r.fromObject(e);
                        })
                      : []
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
    "P++D": function(e, t, n) {
      e.exports = {
        DialogDropDownMenu_Item: "dropdown_DialogDropDownMenu_Item_2oAiZ",
        DialogDropDownMenu: "dropdown_DialogDropDownMenu_30wJO"
      };
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
        n.d(t, "n", function() {
          return m;
        }),
        n.d(t, "l", function() {
          return d;
        }),
        n.d(t, "a", function() {
          return h;
        }),
        n.d(t, "d", function() {
          return v;
        }),
        n.d(t, "c", function() {
          return g;
        }),
        n.d(t, "e", function() {
          return b;
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
        n.d(t, "k", function() {
          return s.e;
        }),
        n.d(t, "m", function() {
          return s.f;
        }),
        n.d(t, "o", function() {
          return s.h;
        }),
        n.d(t, "p", function() {
          return s.i;
        }),
        n.d(t, "q", function() {
          return s.j;
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
              (29 === e ? o.d.k_ESteamRealmChina : o.d.k_ESteamRealmGlobal)
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
        var n = b.LocalizeString(e);
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
        var r = b.LocalizeString(e);
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
      function g() {
        return f[i.b.LANGUAGE] || null;
      }
      var b = new c();
      window.LocalizationManager = b;
    },
    TtDX: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return d;
      });
      var r = n("mrSG"),
        o = n("q1tI"),
        i = n("X3Ds"),
        a = n("y+6m"),
        c = n("sUmc"),
        s = n("2vnA"),
        l = n("+jbA"),
        u = n.n(l),
        p = (function() {
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
        m = (function() {
          function e() {}
          return (
            (e.CreateContextMenuInstance = function(e, t, n, r, o) {
              return new f(e, t, n, r, o);
            }),
            e
          );
        })();
      function d(e, t, n) {
        var r,
          o = void 0,
          i = void 0,
          a = t;
        if (null != a && a.preventDefault && null != a && a.stopPropagation) {
          if (a.shiftKey) return null;
          a.preventDefault(),
            a.stopPropagation(),
            (r = a.currentTarget),
            (o = a.clientX),
            (i = a.clientY);
        } else r = t;
        var s = m.CreateContextMenuInstance(e, r, o, i, n);
        return s.Show(), s;
      }
      var h = (function(n) {
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
                    p.GetBrowserInfoForPopup(this.m_ownerWindow)
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
            Object.defineProperty(e.prototype, "styles", {
              get: function() {
                return u.a;
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
                  (this.m_submenu = new v(this, t(), e)),
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
        })(p),
        f = (function(s) {
          function e(e, t, n, r, o) {
            var i = s.call(this, t.ownerDocument.defaultView) || this;
            p.sm_iActiveContextMenuInstance &&
              p.sm_iActiveContextMenuInstance.Hide(),
              ((p.sm_iActiveContextMenuInstance = i).m_options = o || {});
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
        })(h),
        v = (function(i) {
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
        })(h);
    },
    UPxs: function(e, t, n) {
      "use strict";
      var u = n("mrSG"),
        p = n("q1tI"),
        m = n("exH9"),
        r = n("bxiW"),
        Y = { x: "y", y: "x" };
      function K() {
        return { x: 0, y: 0 };
      }
      function F(e, t) {
        return e.x * t.x + e.y * t.y;
      }
      function X(e, t) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function q(e, t) {
        return { x: e.x + t.x, y: e.y + t.y };
      }
      function J(e, t) {
        return { x: e.x * t, y: e.y * t };
      }
      function o(e) {
        return (e.min + e.max) / 2;
      }
      function Z(e, t) {
        return !(e.max < t.min || t.max < e.min);
      }
      var P = n("Kw0F"),
        f = n("r64O"),
        Q = n("X3Ds");
      var $,
        i,
        a = (function() {
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
        g = n("w9XT");
      n.d(t, "a", function() {
        return ue;
      }),
        ((i = $ = $ || {}).Type = "data-nav-type"),
        (i.TargetFocuses = "data-nav-target-focuses"),
        (i.TargetClicks = "data-nav-target-clicks"),
        (i.PreferFirstNavStop = "data-nav-prefer-first-nav-stop"),
        (i.Preferred = "data-nav-preferred"),
        (i.NoPrimaryAction = "data-nav-npa"),
        (i.NoFocusMarker = "data-nav-no-focus-marker"),
        (i.XOrder = "data-nav-xorder"),
        (i.YOrder = "data-nav-yorder"),
        (i.ScrollAxes = "data-nav-scroll-axes"),
        (i.EnterAsScrolledAxes = "data-nav-enter-as-scrolled-axes"),
        (i.Address = "data-nav-addr"),
        (i.AreaActive = "data-nav-area-active"),
        (i.AreaPass = "data-nav-area-pass"),
        (i.ScrollSnapTypeX = "data-nav-scroll-snap-type-x"),
        (i.ScrollSnapTypeY = "data-nav-scroll-snap-type-y"),
        (i.ScrollSnapMarginX = "data-nav-scroll-snap-margin-x"),
        (i.ScrollSnapMarginY = "data-nav-scroll-snap-margin-y"),
        (i.Focus = "data-nav-focus");
      var d,
        s,
        h,
        c,
        ee,
        l,
        v = "Focusable",
        b = "FocusGroup",
        _ = "NavArea",
        y = (function() {
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
            Object.defineProperty(t, "IsNotSettingFocus", {
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
        w = 0;
      function te() {
        for (var e, t = [], n = 0; n < arguments.length; n++)
          t[n] = arguments[n];
        y.IsLoggingToConsole &&
          (0 < t.length && "string" == typeof t[0]
            ? ((e = t.shift()),
              console.log.apply(console, Object(u.g)(["\t".repeat(w) + e], t)))
            : console.log.apply(console, t));
      }
      function E(e, t, n) {
        if (!y.IsLoggingToConsole) return n;
        var r = n.value;
        return (
          (n.value = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            ++w;
            try {
              var n = r.apply(this, e);
              return --w, n;
            } catch (e) {
              throw (--w, e);
            }
          }),
          n
        );
      }
      function ne(e) {
        return oe(e) ? "#'" + e.id + "'.'" + e.className + "'" : "#?.?";
      }
      function re(e) {
        return null == e ? "(?, ?)" : "(" + e.x + ", " + e.y + ")";
      }
      function oe(e) {
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
      function ie(e) {
        if (y.IsDocumentUsingZoom) {
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
      function ae(e) {
        return { x: o((t = ie(e)).x), y: o(t.y) };
        var t;
      }
      function S(e, t) {
        e && ("function" == typeof e ? e(t) : (e.current = t));
      }
      function C(e, t, n) {
        var r = e,
          o = null != r.getAttribute($.Type),
          i = o ? r.getAttribute($.ScrollAxes) : void 0;
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
      ((s = d = d || {})[(s.None = 2)] = "None"),
        (s[(s.Scrollable = 1)] = "Scrollable"),
        (s[(s.AtEnd = 3)] = "AtEnd"),
        ((c = h = h || {}).X = "x"),
        (c.Y = "y"),
        (c.XY = "xy"),
        ((l = ee = ee || {}).Area = "area"),
        (l.Group = "group"),
        (l.Target = "target");
      var D = p.createContext(null);
      function x(e) {
        for (var t = [], n = e; null != n; n = n.parent) t.push(n.key);
        return t.reverse(), JSON.stringify(t);
      }
      var M,
        A,
        k = p.createContext(void 0),
        j = p.createContext(void 0),
        T = p.createContext(void 0);
      function I(e, o, i) {
        var a = null != e.navKey ? e.navKey : void 0;
        return null != a && y.IsNavEnabled
          ? p.createElement(j.Consumer, null, function(r) {
              return p.createElement(T.Consumer, null, function(n) {
                return p.createElement(k.Consumer, null, function(e) {
                  var t = { parent: e, key: a };
                  return (
                    "function" == typeof i && i(t, r, n),
                    p.createElement(k.Provider, { value: t }, o)
                  );
                });
              });
            })
          : o;
      }
      ((A = M = M || {}).Lazy = "lazy"),
        (A.Start = "start"),
        (A.Center = "center"),
        (A.End = "end"),
        (A.Nearest = "nearest");
      var N = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_containerRef = p.createRef()), e;
          }
          return (
            Object(u.d)(e, t),
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
                    ? ((i = ie(t)),
                      (a.style.opacity = n
                        ? "100%"
                        : y.IsFocusMarkerAlwaysVisible
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
                r = Object(u.f)(e, ["children", "style"]);
              return p.createElement(
                "div",
                Object(u.a)(
                  {
                    ref: this.m_containerRef,
                    style: Object(u.a)(Object(u.a)({}, n), {
                      position: "absolute",
                      willChange: "left, top"
                    })
                  },
                  r
                ),
                t
              );
            }),
            Object(u.c)([E], e.prototype, "HandleOnFocusChanged", null),
            e
          );
        })(p.Component),
        L = (function() {
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
                  ? (te(n + " none"), (r.style.display = "none"))
                  : null != this.m_focusedElement &&
                    ((e = ie(this.m_focusedElement)),
                    (t = O(r)),
                    te(
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
                      : y.IsFocusMarkerAlwaysVisible
                      ? "25%"
                      : "0%"),
                    (r.style.left = e.x.min / t - this.m_nPaddingPx + "px"),
                    (r.style.top = e.y.min / t - this.m_nPaddingPx + "px"),
                    (r.style.width =
                      (e.x.max - e.x.min) / t + 2 * this.m_nPaddingPx + "px"),
                    (r.style.height =
                      (e.y.max - e.y.min) / t + 2 * this.m_nPaddingPx + "px"));
            }),
            Object(u.c)([E], e.prototype, "HandleOnFocusChanged", null),
            Object(u.c)([r.a], e.prototype, "HandleOnAnimationFrame", null),
            e
          );
        })(),
        R = (function() {
          function e() {}
          return (
            (e.prototype.FocusableElementAttributes = function(e) {
              var t = {};
              return (
                y.IsNavEnabled && e.navStop && (t.tabIndex = -2),
                "number" == typeof e.tabStop && (t.tabIndex = e.tabStop),
                !0 === e.tabStop && (t.tabIndex = 0),
                t
              );
            }),
            e
          );
        })(),
        B = (function(r) {
          function e(e) {
            var t = r.call(this) || this;
            (t.m_focusListeners = new Map()),
              (t.m_blurListeners = new Map()),
              te("HDFC.constructor"),
              (t.m_doc = e);
            var n = t.m_doc.defaultView;
            return n ? (t.m_win = n) : te("- No window!"), t;
          }
          return (
            Object(u.d)(e, r),
            (e.prototype.GetFocus = function() {
              return void 0 !== this.m_doc && oe(this.m_doc.activeElement)
                ? this.m_doc.activeElement
                : null;
            }),
            (e.prototype.Focus = function(e, t) {
              null != e
                ? (te("HDFC Focus e.focus {", e), e.focus(t), te("+ }"))
                : oe(this.m_doc.activeElement) &&
                  (te(
                    "HDFC Focus null with active IsHTMLElement e.blur() {",
                    e
                  ),
                  this.m_doc.activeElement.blur(),
                  te("+ }"));
            }),
            (e.prototype.Click = function(e) {
              te("HDFC Click: e.click {"), e.click(), te("+ }");
            }),
            (e.prototype.AddFocusListener = function(t) {
              te("CHtmlDomFocusController AddFocusListener");
              function e(e) {
                oe(e.target) &&
                  (te("HDFC focus listener {"), t(e.target), te("+ }"));
              }
              this.m_focusListeners.set(t, e),
                this.m_win.addEventListener("focus", e, !0);
            }),
            (e.prototype.RemoveFocusListener = function(e) {
              te("CHtmlDomFocusController RemoveFocusListener");
              var t = this.m_focusListeners.get(e);
              this.m_doc.removeEventListener("focus", t, !0),
                this.m_focusListeners.delete(e);
            }),
            (e.prototype.AddBlurListener = function(t) {
              te("CHtmlDomFocusController AddBlurListener");
              function e(e) {
                oe(e.target) &&
                  (te("HDFC blur listener {"), t(e.target), te("+ }"));
              }
              this.m_blurListeners.set(t, e),
                this.m_win.addEventListener("blur", e, !0);
            }),
            (e.prototype.RemoveBlurListener = function(e) {
              te("CHtmlDomFocusController RemoveBlurListener");
              var t = this.m_blurListeners.get(e);
              this.m_doc.removeEventListener("blur", t, !0),
                this.m_blurListeners.delete(e);
            }),
            Object(u.c)([E], e.prototype, "Focus", null),
            Object(u.c)([E], e.prototype, "Click", null),
            Object(u.c)([E], e.prototype, "AddFocusListener", null),
            Object(u.c)([E], e.prototype, "RemoveFocusListener", null),
            Object(u.c)([E], e.prototype, "AddBlurListener", null),
            Object(u.c)([E], e.prototype, "RemoveBlurListener", null),
            e
          );
        })(R);
      function G(e, t) {
        e.navScrollX && (t[$.ScrollSnapTypeX] = e.navScrollX),
          e.navScrollY && (t[$.ScrollSnapTypeY] = e.navScrollY),
          e.navScrollMarginX && (t[$.ScrollSnapMarginX] = e.navScrollMarginX),
          e.navScrollMarginY && (t[$.ScrollSnapMarginY] = e.navScrollMarginY);
      }
      var H = new Map();
      function U(e, t) {
        H.set(e, t);
      }
      function W(e) {
        H.delete(e);
      }
      function z(e) {
        return H.get(e);
      }
      var se,
        V,
        ce = (function() {
          function e() {}
          return (
            (e.Attributes = function(e, t) {
              var n,
                r,
                o,
                i,
                a = {};
              if (
                (y.IsNavEnabled &&
                  ((o = null !== (n = e.navStop) && void 0 !== n && n),
                  (i = null !== (r = e.navClick) && void 0 !== r && r),
                  (o || i) && (a[$.Type] = ee.Target),
                  o && (a[$.TargetFocuses] = "true"),
                  i && (a[$.TargetClicks] = "true"),
                  e.noPrimaryAction && (a[$.NoPrimaryAction] = "true"),
                  e.noFocusMarker && (a[$.NoFocusMarker] = "true"),
                  e.preferredNavStop && (a[$.Preferred] = "true"),
                  G(e, a)),
                !t)
              )
                return a;
              var s = t.FocusableElementAttributes(e);
              return s ? Object(u.a)(Object(u.a)({}, a), s) : a;
            }),
            Object.defineProperty(e, "targetClass", {
              get: function() {
                return y.IsNavEnabled ? v : void 0;
              },
              enumerable: !1,
              configurable: !0
            }),
            e
          );
        })(),
        le = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(u.d)(t, e),
            (t.prototype.NeedsComponentFromElement = function() {
              return !0;
            }),
            (t.prototype.SetRef = function(e) {
              null == e
                ? W(this.m_htmlElement)
                : ((this.m_htmlElement = e),
                  this.NeedsComponentFromElement && U(this.m_htmlElement, this),
                  S(this.props.htmlElementRef, e));
            }),
            (t.prototype.assembleAttributes = function(e) {
              e.navKey,
                e.navStop,
                e.noPrimaryAction,
                e.noFocusMarker,
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
                Object(u.f)(e, [
                  "navKey",
                  "navStop",
                  "noPrimaryAction",
                  "noFocusMarker",
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
              return null != this.context && y.IsNavEnabled
                ? Object(u.a)(
                    Object(u.a)(
                      Object(u.a)(
                        {},
                        ce.Attributes(
                          e,
                          this.context.GetFocusControllerDomIntegrator()
                        )
                      ),
                      {
                        className: Object(m.a)(ce.targetClass, r),
                        ref:
                          t || this.NeedsComponentFromElement ? this.SetRef : n
                      }
                    ),
                    o
                  )
                : Object(u.a)({ className: r, ref: n }, o);
            }),
            (t.prototype.GotFocus = function() {
              null != this.m_navAddress &&
                null != this.m_currentNavEpoch &&
                this.m_currentNavEpoch.SetFocusAddress(this.m_navAddress);
            }),
            (t.prototype.componentDidMount = function() {
              var e, t, n;
              y.IsDebuggingNavAddresses &&
                null != this.m_htmlElement &&
                null != this.m_navAddress &&
                this.m_htmlElement.setAttribute(
                  $.Address,
                  x(this.m_navAddress)
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
              return p.createElement(g.a.Consumer, null, function(e) {
                return (
                  (r.m_actionDescriptionContext = e),
                  I(
                    r.props,
                    p.createElement(
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
            (t.contextType = D),
            (t.defaultProps = { navStop: !1, tabStop: !1 }),
            Object(u.c)([r.a], t.prototype, "SetRef", null),
            t
          );
        })(p.Component),
        ue = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_elementType = "div"), e;
          }
          return Object(u.d)(e, t), e;
        })(le);
      ((V = se = se || {}).Geometry = "Geometry"),
        (V.DomOrder = "DomOrder"),
        (V.ReverseDomOrder = "ReverseDomOrder");
      var pe = (function(e) {
        function a() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(u.d)(a, e),
          (a.GetOnNavOut = function(e) {
            var t = z(e);
            if (t && t instanceof a) return t.props.onNavOut;
          }),
          (a.Attributes = function(e) {
            var t;
            if (!y.IsNavEnabled) return {};
            var n = (((t = {})[$.Type] = ee.Group), t);
            return (
              e.xOrder && (n[$.XOrder] = e.xOrder),
              e.yOrder && (n[$.YOrder] = e.yOrder),
              e.scrollAxes && (n[$.ScrollAxes] = e.scrollAxes),
              e.preferFirstNavStop && (n[$.PreferFirstNavStop] = "true"),
              e.preferredNavStopWithin && (n[$.Preferred] = "true"),
              e.enterAsScrolledAxes &&
                (n[$.EnterAsScrolledAxes] = e.enterAsScrolledAxes),
              G(e, n),
              n
            );
          }),
          (a.prototype.NeedsComponentFromElement = function() {
            return !!this.props.onNavOut || null != this.props.navKey;
          }),
          (a.prototype.SetRef = function(e) {
            null == e
              ? W(this.m_htmlElement)
              : ((this.m_htmlElement = e),
                this.NeedsComponentFromElement && U(this.m_htmlElement, this),
                S(this.props.htmlElementRef, e));
          }),
          (a.prototype.HasFocusWithin = function() {
            var e, t;
            return (
              null !==
                (t =
                  null === (e = this.m_htmlElement) || void 0 === e
                    ? void 0
                    : e.contains(
                        this.m_htmlElement.ownerDocument.activeElement
                      )) &&
              void 0 !== t &&
              t
            );
          }),
          (a.prototype.FocusWithin = function() {
            this.m_htmlElement && de.FocusWithin(this.m_htmlElement);
          }),
          (a.prototype.BlurWithin = function(e) {
            this.m_htmlElement && de.BlurWithin(this.m_htmlElement, e);
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
            y.IsDebuggingNavAddresses &&
              null != this.m_htmlElement &&
              null != this.m_navAddress &&
              this.m_htmlElement.setAttribute($.Address, x(this.m_navAddress)),
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
              e.preferFirstNavStop,
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
              i = Object(u.f)(e, [
                "navKey",
                "xOrder",
                "yOrder",
                "preferFirstNavStop",
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
            return null != this.context && y.IsNavEnabled
              ? I(
                  this.props,
                  p.createElement(
                    "div",
                    Object(u.a)(
                      { ref: this.SetRef },
                      a.Attributes(this.props),
                      { className: Object(m.a)(b, n) },
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
              : p.createElement(
                  "div",
                  Object(u.a)({ ref: t, className: n }, i),
                  o
                );
          }),
          (a.contextType = D),
          Object(u.c)([r.a], a.prototype, "SetRef", null),
          Object(u.c)([E], a, "GetOnNavOut", null),
          a
        );
      })(p.Component);
      var me = (function() {
          function e(e) {
            (this.m_navAreaStack = []),
              (this.m_elementNavAreaMap = new Map()),
              (this.m_focusControllers = new a()),
              (this.m_focusMarkers = new a()),
              (this.m_defaultFocusController = new B(e));
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
        de = (function(n) {
          function V(e) {
            var t = n.call(this, e) || this;
            return (
              (t.m_navAreaDivRef = p.createRef()),
              (t.m_inFocusCallType = null),
              (t.m_focusClaimElement = void 0),
              (t.m_focusedHtmlElement = null),
              (t.m_focusPos = null),
              (t.m_focusPosOffsetFromAnchorElement = null),
              (t.m_lastFocusedHtmlElement = null),
              (t.m_lastFocusPosOffsetFromAnchorElement = null),
              (t.m_pointerFocusMarkerRef = p.createRef()),
              (t.m_boxFocusMarkerDivRef = p.createRef()),
              void 0 !== e &&
                void 0 === V.sm_htmlDomFocusControllerDomIntegrator &&
                (V.sm_htmlDomFocusControllerDomIntegrator = new R()),
              t
            );
          }
          return (
            Object(u.d)(V, n),
            (V.DocumentElementHasFocus = function(e) {
              return e && null != e.activeElement && e.activeElement !== e.body;
            }),
            (V.FocusWithin = function(e) {
              var t,
                n = V.GetNavAreaObjects(e, "NavArea.FocusWithin", {
                  target: !0,
                  navArea: !0,
                  activeNavArea: !1
                }),
                r = n.navArea,
                o = n.navAreaElement,
                i = n.activeNavAreaElement;
              n.dn;
              null != r &&
                (te("NavArea.FocusWithin", e),
                (null != i && i == o) ||
                  (te(
                    "+ (" +
                      i.id +
                      ") is active, but FG in (" +
                      r.props.id +
                      "); activating."
                  ),
                  r.Activate()),
                null != (t = r.FindBestFocusableTarget(e)) &&
                  (te("+ focusing:", t.htmlElement, t.pos),
                  r.NavigateTo(t.htmlElement, t.pos, !1)));
            }),
            (V.BlurWithin = function(e, t) {
              var n,
                r = V.GetNavAreaObjects(e, "NavArea.FocusWithin", {
                  target: !0,
                  navArea: !0
                }).navArea;
              null != r &&
                (te("NavArea.BlurWithin", e),
                (n = r.GetFocusController().GetFocus()),
                e.contains(n) && r.Blur(t));
            }),
            (V.HandleKeyDown = function(t) {
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
                  te(
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
                  l = c && z(c),
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
                                    return g.c.Menu;
                                  default:
                                    return;
                                }
                              switch (e.key) {
                                case "Enter":
                                  return g.c.A;
                                case "Escape":
                                  return g.c.B;
                                case "Backspace":
                                  return g.c.X;
                                case " ":
                                  return g.c.Y;
                                case "ArrowLeft":
                                  return g.c.Left;
                                case "ArrowRight":
                                  return g.c.Right;
                                case "ArrowUp":
                                  return g.c.Up;
                                case "ArrowDown":
                                  return g.c.Down;
                                default:
                                  return;
                              }
                            })(t)
                          );
                        });
                if (p)
                  return (
                    te("+ actionDescription {"), p.action(), s(), void te("+ }")
                  );
                var m,
                  d = V.k_KeyNavigationDirections[t.key];
                if (!d)
                  return (
                    te("+ Non-Arrow Key."),
                    void ("Enter" === t.key
                      ? (null != (m = i.GetFocusedElement()) &&
                          "true" == m.getAttribute($.NoPrimaryAction)) ||
                        !i.ClickFocusedElement() ||
                        s()
                      : "Escape" === t.key
                      ? i.props.onGoBack &&
                        (te("+ onGoBack {"), i.props.onGoBack(), s(), te("+ }"))
                      : "1" === t.key &&
                        t.ctrlKey &&
                        i.props.onHome &&
                        (te("+ onHome {"), i.props.onHome(), s(), te("+ }")))
                  );
                te("+ Arrow Key.");
                var h = d[0],
                  f = d[1],
                  v = i.FindNextNavTarget(h, f);
                v &&
                  this.IsElementTarget(v.htmlElement) &&
                  (i.NavigateTo(v.htmlElement, v.pos, !1), s());
              } else te(n + ": no active nav area.");
            }),
            (V.SetDefaultFocusMarker = function(e) {
              V.sm_defaultFocusMarker = e;
            }),
            (V.GetDocumentNavState = function(e) {
              return V.sm_documentStates.get(e);
            }),
            (V.GetActiveNavArea = function(e) {
              var t = e.m_navAreaStack;
              if (0 !== t.length) return t[t.length - 1];
            }),
            (V.SetIsDoingKeyNav = function(e, t) {
              V.sm_bIsDoingKeyNav = t;
            }),
            (V.GetIsDoingKeyNav = function(e) {
              return V.sm_bIsDoingKeyNav;
            }),
            (V.GetNavAreaObjects = function(r, o, i) {
              if (!y.IsNavEnabled) return {};
              if (!oe(r))
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
              var s = V.GetDocumentNavState(a);
              if (null == s)
                return (
                  Object(f.a)(!1, o + " expects target document nav state"), {}
                );
              var t =
                  null == i.navArea
                    ? {}
                    : (function() {
                        var e = V.FindAncestorNavAreaElement(r);
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
                        var e = V.GetActiveNavArea(s);
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
            (V.FindAncestorNavAreaElement = function(e) {
              return Object(Q.j)(e, function(e) {
                return e.getAttribute($.Type) === ee.Area;
              });
            }),
            (V.IsElementTarget = function(e) {
              return (null == e ? void 0 : e.getAttribute($.Type)) == ee.Target;
            }),
            (V.IsElementTargetThatFocuses = function(e) {
              return (
                this.IsElementTarget(e) &&
                "true" == (null == e ? void 0 : e.getAttribute($.TargetFocuses))
              );
            }),
            (V.IsElementTargetThatClicks = function(e) {
              return (
                this.IsElementTarget(e) &&
                "true" == (null == e ? void 0 : e.getAttribute($.TargetClicks))
              );
            }),
            (V.FindAnchorElement = function(e) {
              return e;
            }),
            (V.GetScrollOffset = function(e, t, n) {
              var r = e,
                o = r.getAttribute($.EnterAsScrolledAxes);
              if (o === h.XY || o === t) return null;
              var i = null != r.getAttribute($.Type),
                a = i ? r.getAttribute($.ScrollAxes) : void 0;
              return i && a !== h.XY && a !== t
                ? null
                : "x" === t
                ? { x: r.scrollLeft, y: 0 }
                : { x: 0, y: r.scrollTop };
            }),
            (V.UpdateFocusPosAfterLayoutChange = function(e, t) {
              for (
                var n = e;
                null != n;
                n = V.FindAncestorNavAreaElement(n.parentElement)
              ) {
                var r = t.m_elementNavAreaMap.get(n),
                  o = r.m_focusPos,
                  i = r.GetFocusPos();
                o !== i && ((r.m_focusPos = i), r.UpdateFocusMarker(!0));
              }
            }),
            (V.FindNextNavTargetInContainer = function(s, e, c, l, u, t, n) {
              var r;
              te(
                "NavArea.FindNextTargetInContainer c:" +
                  ne(s) +
                  " foc:" +
                  ne(e) +
                  " " +
                  re(c)
              );
              var o,
                i,
                a = "x" === l ? $.XOrder : "y" === l ? $.YOrder : void 0,
                p =
                  null !== (r = s.getAttribute(a)) && void 0 !== r
                    ? r
                    : se.Geometry,
                m = p === se.Geometry,
                d = p === se.ReverseDomOrder,
                h = "true" === s.getAttribute($.PreferFirstNavStop),
                f = n ? V.GetScrollOffset(s, l, u) : null,
                v = f ? J(f, -1) : null,
                g = v ? q(c, v) : c,
                b = Y[l],
                _ = -1 === (K()[l] = u) ? "max" : "min",
                y = { min: g[b], max: g[b] },
                w =
                  t && oe(e)
                    ? ((o = y),
                      (i = ie(e)[b]),
                      {
                        min: o.min < i.min ? o.min : i.min,
                        max: o.max > i.max ? o.max : i.max
                      })
                    : y,
                E = null,
                O = null,
                S = 1 / 0,
                C = Object(Q.k)(s, $.Type);
              d != (-1 === u) && C.reverse();
              for (
                var D = [], x = null == e ? 0 : null, M = 0, A = C;
                M < A.length;
                M++
              ) {
                if ((U = A[M]) !== e) {
                  if (U.getAttribute($.Type) !== ee.Area) {
                    n &&
                      null === E &&
                      ("true" === U.getAttribute($.Preferred) ||
                        (h && 0 == x)) &&
                      (E = U),
                      null !== x && ++x;
                    var k = 0;
                    if (m) {
                      var j = ie(U),
                        T = g[l],
                        I = u * (j[l][_] - T);
                      if (I < 0) continue;
                      var N = g[b],
                        L = j[b].min,
                        R = j[b].max,
                        B = N < L ? N - L : R < N ? N - R : 0;
                      if (t) if (!Z(w, { min: L, max: R })) continue;
                      var F = { x: 0, y: 0 };
                      (F[l] = j[l][_]), (F[b] = N + B);
                      var P = X(g, F),
                        k = (I * I + B * B) / Math.abs(P[l]);
                    } else {
                      if (null == x) continue;
                      k = x;
                    }
                    k < S && ((S = k), (O = U)),
                      D.push({ score: k, element: U });
                  }
                } else x = 0;
              }
              function G(e, t) {
                if ((void 0 === t && (t = !1), V.IsElementTarget(e))) {
                  if (oe(e)) {
                    var n = e,
                      r = ae(n),
                      o = !c || t ? r : { x: c.x, y: c.y };
                    o[l] = r[l];
                    var i = { htmlElement: n, pos: o };
                    return f && (i.onscreenTestElement = s), i;
                  }
                  return null;
                }
                if (e.getAttribute($.Type) === ee.Group) {
                  var a = V.FindNextNavTargetInContainer(
                    e,
                    null,
                    g,
                    l,
                    u,
                    !1,
                    !0
                  );
                  if (a) return a;
                }
                return null;
              }
              var H;
              if (
                (te("+ Searching " + C.length + " elements:", C, D, E, O), E) &&
                (H = G(E, !0))
              )
                return H;
              if (O) {
                if ((H = G(O))) return H;
                D.sort(function(e, t) {
                  return e.score - t.score;
                });
                for (var U, W = 0; W < D.length; ++W) {
                  if ((U = D[W].element) !== O) {
                    var z = G(U);
                    if (z) return z;
                  }
                }
              }
              return null;
            }),
            (V.FindNextNavTargetWithinAndAcrossContainers = function(
              e,
              t,
              n,
              r,
              o
            ) {
              te(
                "NavArea.FindNextTargetWithinAndAcrossContainers root:#" +
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
                var a = Object(Q.i)(e, i, $.Type),
                  s = V.FindNextNavTargetInContainer(a, i, n, r, o, !0, !1);
                if (null !== s) return s;
                if (a === e) return null;
                for (var c = i.parentElement; c && c !== a; ) {
                  if (C(c, r, o) === d.Scrollable) return null;
                  c = c.parentElement;
                }
                if (!c) return null;
                if (c === a && C(c, r, o) === d.Scrollable) return null;
                var l = pe.GetOnNavOut(a);
                if (l) {
                  te("+ onNavOut {");
                  var u = K();
                  u[r] = o;
                  var p = l(u);
                  if ((te("+ } => " + p), !1 === p)) return null;
                }
                i = a;
              }
            }),
            (V.AddEventListeners = function(e) {
              for (var t = 0, n = V.k_EventListeners; t < n.length; t++) {
                var r = n[t],
                  o = r[0],
                  i = r[1];
                e.addEventListener(o, i, !0);
              }
            }),
            (V.RemoveEventListeners = function(e) {
              for (var t = 0, n = this.k_EventListeners; t < n.length; t++) {
                var r = n[t],
                  o = r[0],
                  i = r[1];
                e.removeEventListener(o, i, !0);
              }
            }),
            (V.HandleAllOnKeyDown = function(e) {
              te("NavArea.HandleAllOnKeyDown " + e.key),
                V.HandleKeyDown({
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
            (V.HandleAllOnScroll = function(e) {
              var t,
                n = "NavArea.HandleAllOnScroll",
                r = V.GetNavAreaObjects(e.target, n, {
                  target: !0,
                  navArea: !1
                }),
                o = r.navArea,
                i = r.navAreaElement,
                a = r.dn;
              null != o &&
                (te(n + " (" + o.props.id + ") " + ne(e.target)),
                null != (t = z(e.target)) &&
                  t instanceof pe &&
                  t.UpdateScrollPos(),
                V.UpdateFocusPosAfterLayoutChange(i, a));
            }),
            (V.HandleAllOnAnimationStart = function(e) {}),
            (V.HandleAllOnAnimationEnd = function(e) {
              var t = V.GetNavAreaObjects(
                  e.target,
                  "NavArea.HandleAllOnAnimationEnd",
                  { target: !0, navArea: !1 }
                ),
                n = t.navArea,
                r = t.navAreaElement,
                o = t.dn;
              null != n && V.UpdateFocusPosAfterLayoutChange(r, o);
            }),
            (V.HandleAllOnTransitionStart = function(e) {}),
            (V.HandleAllOnTransitionEnd = function(e) {
              var t,
                n = V.GetNavAreaObjects(
                  e.target,
                  "NavArea.HandleAllOnTransitionEnd",
                  { target: !0, navArea: !1 }
                ),
                r = n.navArea,
                o = n.navAreaElement,
                i = n.dn;
              null != r &&
                ((null !== (t = r.m_focusMarker) &&
                  void 0 !== t &&
                  t.IsEventSource(e)) ||
                  V.UpdateFocusPosAfterLayoutChange(o, i));
            }),
            (V.HandleAllOnMouseDown = function(e) {
              var t,
                n = "NavArea.HandleAllOnMouseDown",
                r = V.GetNavAreaObjects(e.target, n, {
                  target: !0,
                  navArea: !1
                }),
                o = r.navArea,
                i = r.dn;
              null != o &&
                (te(n + " (" + o.props.id + "):", e.target),
                V.SetIsDoingKeyNav(i, !1),
                null !=
                  (null == (t = o.GetFocusController())
                    ? void 0
                    : t.HandleNavStopClick) &&
                  (te("+ preventDefault"), e.preventDefault()));
            }),
            (V.HandleAllOnClick = function(e) {
              var t,
                n,
                r,
                o = "NavArea.HandleAllOnClick",
                i = V.GetNavAreaObjects(e.target, o, {
                  target: !0,
                  navArea: !1
                }).navArea;
              null != i &&
                (te(o + " (" + i.props.id + "):", e.target),
                null !=
                (n =
                  null == (t = i.GetFocusController())
                    ? void 0
                    : t.HandleNavStopClick)
                  ? ((r = e.target),
                    V.IsElementTargetThatFocuses(r) &&
                      (te("+ handleNavStopClick {"), n(e, r), te("+ }")))
                  : te("+ nop."));
            }),
            (V.HandleFocusControllerOnFocus = function(e) {
              var t,
                n,
                r,
                o = "NavArea.HandleFocusControllerOnFocus",
                i = z(e),
                a = null == i ? void 0 : i.m_actionDescriptionContext;
              a && a.setCurrentActions(a.focusActions),
                null != e.ownerDocument &&
                  ((n = (t = V.GetNavAreaObjects(e, o, {
                    target: !0,
                    navArea: !1,
                    activeNavArea: !1
                  })).navArea),
                  (r = t.activeNavArea),
                  t.dn,
                  null != n &&
                    (te(o + " (" + n.props.id + ")", e),
                    n !== r &&
                      (te(
                        "+ Activating Nav Area with element as initial focus."
                      ),
                      n.Activate(e)),
                    n.UpdateFocus(e)));
            }),
            (V.HandleFocusControllerOnBlur = function(e) {
              var t,
                n = "NavArea.HandleFocusControllerOnBlur",
                r = z(e),
                o = null == r ? void 0 : r.m_actionDescriptionContext;
              o && o.setCurrentActions(void 0),
                null == e.ownerDocument ||
                  (null !=
                    (t = V.GetNavAreaObjects(e, n, { target: !0, navArea: !1 })
                      .navArea) &&
                    (te(n + " (" + t.props.id + ")", e), t.UpdateFocus(null)));
            }),
            (V.prototype.HandleKeyDown = function(e) {
              V.HandleKeyDown({
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
            (V.prototype.GetFocusedElement = function() {
              var e = "NavArea.GetFocusedElement";
              if (
                (te(e + " (" + this.props.id + ")"),
                null != this.GetElementDocState(e).dn)
              )
                return this.GetFocusController().GetFocus();
            }),
            (V.prototype.ClickFocusedElement = function() {
              te("NavArea.ClickFocusedElement (" + this.props.id + ")");
              var e = this.GetFocusedElement();
              return null != e && (this.GetFocusController().Click(e), !0);
            }),
            (V.prototype.Blur = function(e) {
              var t = "NavArea.Blur";
              te(t + " (" + this.props.id + ")");
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
                this === V.GetActiveNavArea(r) &&
                  (te("+ setting focus to null"),
                  this.GetFocusController().Focus(null)),
                (this.m_inFocusCallType = n));
            }),
            (V.prototype.Activate = function(e) {
              var t = "NavArea.Activate";
              te(
                t +
                  " (" +
                  this.props.id +
                  ") " +
                  (this.props.startInactive ? "startInactive" : "")
              );
              var n,
                r,
                o,
                i,
                a,
                s,
                c = this.GetElementDocState(t),
                l = c.thisElement,
                u = c.dn;
              null != u &&
                (null != (n = V.GetActiveNavArea(u)) &&
                  n != this &&
                  (te(
                    "+ saving last focused element:",
                    n.m_focusedHtmlElement,
                    n.m_focusPos
                  ),
                  (n.m_lastFocusedHtmlElement = n.m_focusedHtmlElement),
                  (n.m_lastFocusPosOffsetFromAnchorElement =
                    n.m_focusPosOffsetFromAnchorElement),
                  (n.m_focusedHtmlElement = null),
                  (n.m_focusPosOffsetFromAnchorElement = null)),
                (u.m_navAreaStack = Object(P.b)(u.m_navAreaStack, this)),
                l.setAttribute($.AreaActive, "true"),
                u.m_navAreaStack.push(this),
                (r = this.m_lastFocusedHtmlElement),
                null != e && V.IsElementTargetThatFocuses(r)
                  ? (te("+ focusing new:", e), this.NavigateTo(e, void 0, !1))
                  : null != r && V.IsElementTargetThatFocuses(r)
                  ? (te("+ focusing last:", r, this.m_focusPos),
                    (o = V.FindAnchorElement(r))
                      ? ((i = ae(o)),
                        this.NavigateTo(
                          r,
                          q(i, this.m_lastFocusPosOffsetFromAnchorElement),
                          !0
                        ))
                      : this.NavigateTo(r, void 0, !0))
                  : null !==
                      (a = this.FindBestFocusableTarget(
                        this.m_navAreaDivRef.current,
                        void 0,
                        void 0
                      )) && V.IsElementTargetThatFocuses(a.htmlElement)
                  ? (te("+ focusing found:", a.htmlElement, a.pos),
                    this.NavigateTo(a.htmlElement, a.pos, !1))
                  : te("+ no focus found."),
                null != (s = this.props.onActivate) &&
                  (te("+ onActivate {"), s(), te("+ }")));
            }),
            (V.prototype.Deactivate = function() {
              var e = "NavArea.Deactivate";
              te(
                e +
                  " (" +
                  this.props.id +
                  ") " +
                  (this.props.startInactive ? "startInactive" : "")
              );
              var t,
                n,
                r,
                o = this.GetElementDocState(e),
                i = o.thisElement,
                a = o.dn;
              null != a &&
                (a.m_navAreaStack.includes(this)
                  ? (this.Blur(),
                    (t = V.GetActiveNavArea(a) === this),
                    i.setAttribute($.AreaActive, "false"),
                    (a.m_navAreaStack = Object(P.b)(a.m_navAreaStack, this)),
                    t &&
                      (null != (n = V.GetActiveNavArea(a)) && n.Activate(),
                      te("+ now active: " + (null != n ? n.props.id : "-"))),
                    null != (r = this.props.onDeactivate) &&
                      (te("+ onDeactivate {"), r(), te("+ }")))
                  : te("+ nop; not actually active."));
            }),
            (V.prototype.GetFocusControllerDomIntegrator = function() {
              return null != this.props.focusController
                ? this.props.focusController
                : V.sm_htmlDomFocusControllerDomIntegrator;
            }),
            (V.prototype.GetFocusController = function() {
              return this.m_focusController;
            }),
            (V.prototype.ClaimFocus = function(e) {
              var t = "NavArea.ClaimFocus";
              y.IsNotSettingFocus
                ? te(t + " NOT claiming focus.", e)
                : null != this.m_navAreaDivRef.current
                ? null !== this.m_focusClaimElement
                  ? (te(t + " first claim now."),
                    this.NavigateTo(e, void 0, !1),
                    (this.m_focusClaimElement = null))
                  : te(t + " already claimed now, ignored.")
                : null == this.m_focusClaimElement
                ? (te(t + " first claim delay."),
                  (this.m_focusClaimElement = e))
                : te(t + " already claimed delay, ignored.");
            }),
            (V.prototype.GetElementDoc = function(e) {
              if (!y.IsNavEnabled) return {};
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
            (V.prototype.GetElementDocState = function(e) {
              var t = this.GetElementDoc(e),
                n = t.thisElement,
                r = t.doc;
              if (null == r) return {};
              var o = V.GetDocumentNavState(r);
              return null == o
                ? (Object(f.a)(!1, e + " expects document nav state."), {})
                : { thisElement: n, doc: r, dn: o };
            }),
            (V.prototype.NavigateTo = function(r, e, t) {
              var n, o, i, a, s, c, l, u, p, m, d, g, h;
              y.IsNotSettingFocus
                ? te(
                    "NavArea.SetTarget NOT setting target (" +
                      this.m_navAreaDivRef.current.id +
                      ") " +
                      re(e),
                    r
                  )
                : r.ownerDocument.contains(r)
                ? ((n = this.GetFocusController()),
                  V.IsElementTargetThatFocuses(r) &&
                    ((o = this.m_inFocusCallType),
                    (this.m_inFocusCallType = "focus"),
                    te(
                      "NavArea.SetTarget (" +
                        this.m_navAreaDivRef.current.id +
                        ") " +
                        re(e),
                      r
                    ),
                    this.UpdateFocus(r, e),
                    (s = (a = (i = function(t, e) {
                      var n = Object(Q.j)(r, function(e) {
                        return null != e.getAttribute(t);
                      });
                      return null == n
                        ? [void 0, void 0, void 0]
                        : [
                            n,
                            n.getAttribute(t),
                            parseFloat(n.getAttribute(e) || "0")
                          ];
                    })($.ScrollSnapTypeX, $.ScrollSnapMarginX))[0]),
                    (c = a[1]),
                    (l = a[2]),
                    (p = (u = i($.ScrollSnapTypeY, $.ScrollSnapMarginY))[0]),
                    (m = u[1]),
                    (d = u[2]),
                    c || m
                      ? (te("+ scroll-snapping (" + c + ", " + m + ")"),
                        n.Focus(r, { preventScroll: !0 }),
                        (g = r.ownerDocument.defaultView),
                        (h = function(e, t, n, r) {
                          if (null != t)
                            for (
                              var o = ie(t),
                                i = O(t),
                                a = o[e].min - r * i,
                                s = o[e].max + r * i,
                                c = t.parentElement;
                              null != c;
                              c = c.parentElement
                            ) {
                              var l =
                                "x" === e
                                  ? [c.scrollLeft, c.scrollWidth, c.clientWidth]
                                  : [
                                      c.scrollTop,
                                      c.scrollHeight,
                                      c.clientHeight
                                    ];
                              if (!(l[1] <= l[2])) {
                                var u = g.getComputedStyle(c),
                                  p = "x" === e ? u.overflowX : u.overflowY;
                                if ("auto" === p || "scroll" === p) {
                                  var m = ie(c);
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
                                    te(
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
                        })("x", s, c, l),
                        h("y", p, m, d))
                      : n.Focus(r),
                    (this.m_inFocusCallType = o)),
                  !t &&
                    V.IsElementTargetThatClicks(r) &&
                    (te(
                      "NavArea.SetFocus " +
                        ne(this.m_navAreaDivRef.current) +
                        " CLICK",
                      r
                    ),
                    n.Click(r)))
                : te(
                    "NavArea.SetTarget ** LOST ELEMENT ** (" +
                      this.m_navAreaDivRef.current.id +
                      ") " +
                      re(e),
                    r
                  );
            }),
            (V.prototype.UpdateFocus = function(e, t) {
              var n, r;
              null == t &&
                null != e &&
                e != this.m_focusedHtmlElement &&
                (t = ae(e)),
                te("NavArea.UpdateFocus (" + this.props.id + ") " + re(t), e),
                e != this.m_focusedHtmlElement &&
                  (te("+ updating last focus element"),
                  null != (n = V.FindAnchorElement(e))
                    ? ((r = ae(n)),
                      (this.m_focusPosOffsetFromAnchorElement = X(r, t)))
                    : (this.m_focusPosOffsetFromAnchorElement = null),
                  (this.m_focusedHtmlElement = e),
                  (this.m_focusPos = null != t ? t : null));
              var o = z(e);
              o instanceof le && o.GotFocus(), this.UpdateFocusMarker(!1);
            }),
            (V.prototype.UpdateFocusMarker = function(e) {
              var t, n;
              te(
                "NavArea.UpdateFocusMarker " + ne(this.m_navAreaDivRef.current)
              ),
                null != this.m_focusMarker &&
                  ((n =
                    V.GetIsDoingKeyNav(this.m_docNavState) &&
                    "true" !==
                      (null === (t = this.m_focusedHtmlElement) || void 0 === t
                        ? void 0
                        : t.getAttribute($.NoFocusMarker))),
                  this.m_focusMarker.HandleOnFocusChanged(
                    e,
                    this.m_focusedHtmlElement,
                    n,
                    this.GetFocusPos()
                  ),
                  null != this.m_pointerFocusMarkerRef.current &&
                    this.m_pointerFocusMarkerRef.current.HandleOnFocusChanged(
                      e,
                      this.m_focusedHtmlElement,
                      n,
                      this.GetFocusPos()
                    ));
            }),
            (V.prototype.GetFocusPos = function() {
              var e = this.m_navAreaDivRef.current,
                t = this.m_focusedHtmlElement,
                n = this.m_focusPosOffsetFromAnchorElement;
              if (e && t && e.contains(t) && n) {
                var r = V.FindAnchorElement(t);
                if (r) return q(ae(r), n);
              }
              return this.m_focusPos;
            }),
            (V.prototype.FindBestFocusableTarget = function(e, t, n) {
              var r = "NavArea.FindBestNavStopFocus";
              if (!e) return null;
              var o = e.ownerDocument;
              if (!o) return null;
              te(r + " #" + e.id + ".'" + e.className + "'");
              var i = this.m_focusClaimElement;
              if (
                ((this.m_focusClaimElement = void 0),
                null != i &&
                  o.contains(i) &&
                  e.contains(i) &&
                  V.IsElementTargetThatFocuses(i))
              )
                return { htmlElement: i, pos: ae(i) };
              var a = this.m_focusedHtmlElement,
                s = this.GetFocusPos();
              if (
                a &&
                o.contains(a) &&
                e.contains(a) &&
                V.IsElementTargetThatFocuses(a)
              )
                return { htmlElement: a, pos: s || ae(a) };
              var c = Object(Q.k)(e, $.Type).filter(function(e) {
                return (
                  oe(e) &&
                  "true" === e.getAttribute($.Preferred) &&
                  (e.getAttribute($.Type) === ee.Group ||
                    V.IsElementTargetThatFocuses(e))
                );
              });
              if (0 < c.length) {
                var l = c[0],
                  u = l.getAttribute($.Type);
                if (V.IsElementTargetThatFocuses(l))
                  return { htmlElement: l, pos: ae(l) };
                if (u === ee.Group) {
                  var p = this.FindBestFocusableTarget(l, t, n);
                  if (p) return p;
                }
              }
              var m = Array.from(
                e.querySelectorAll(
                  "[" +
                    $.Type +
                    "=" +
                    ee.Target +
                    "][" +
                    $.TargetFocuses +
                    "=" +
                    !0 +
                    "]"
                )
              ).filter(oe);
              if (!m || 0 === m.length) return null;
              var d = V.GetNavAreaObjects(e, r, {
                  target: !0,
                  activeNavArea: !0
                }),
                h = d.activeNavArea,
                f = (d.activeNavAreaElement, d.dn);
              if (void 0 === f) return null;
              if (h.props.initFromBoundary && void 0 !== t && void 0 !== n) {
                var v = "x" === t ? $.XOrder : "y" === t ? $.YOrder : void 0,
                  g = e.getAttribute(v);
                if (!(g === se.Geometry || null == g)) {
                  var b =
                    (g === se.ReverseDomOrder) != (-1 === n)
                      ? m[m.length - 1]
                      : m[0];
                  return { htmlElement: b, pos: ae(b) };
                }
                for (
                  var _ = -1 === n ? "max" : "min",
                    y = null,
                    w = 1 / 0,
                    E = 0,
                    O = m;
                  E < O.length;
                  E++
                ) {
                  var S = O[E],
                    C = n * ie(S)[t][_];
                  C < w && ((w = C), (y = S));
                }
                if (null !== y) return { htmlElement: y, pos: ae(y) };
              }
              var D,
                x = f.m_navAreaStack,
                M = Object(P.e)(x, function(e) {
                  return null !== e.m_focusPos;
                });
              if (M) {
                for (
                  var A = M.GetFocusPos(),
                    k = Number.POSITIVE_INFINITY,
                    j = null,
                    T = 0,
                    I = m;
                  T < I.length;
                  T++
                ) {
                  var N = I[T],
                    L = ae(N),
                    R = ((D = X(A, L)), Math.sqrt(F(D, D)));
                  R < k && ((k = R), (j = N));
                }
                if (j) return { htmlElement: j, pos: ae(j) };
              }
              var B = m[0];
              return B
                ? { htmlElement: B, pos: ae(B) }
                : (te("+ found no nav target."), null);
            }),
            (V.prototype.FindNextNavTarget = function(e, t) {
              var n = "NavArea.FindNextNavStop";
              te(n + " (" + this.props.id + ")");
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
                (oe(p) && o.contains(p) && p !== r && r.contains(p)
                  ? ((i =
                      (null !== this.m_focusPos &&
                        this.m_focusedHtmlElement === p &&
                        this.GetFocusPos()) ||
                      ae(p)),
                    (s = V.FindNextNavTargetWithinAndAcrossContainers(
                      r,
                      p,
                      i,
                      e,
                      t
                    )) ||
                      (te(
                        n + ": Navigated to self (shouldn't happen!); retrying"
                      ),
                      (a = ae(p)),
                      (s = V.FindNextNavTargetWithinAndAcrossContainers(
                        r,
                        p,
                        a,
                        e,
                        t
                      ))),
                    s && (u = s))
                  : (u = this.FindBestFocusableTarget(
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
                  f = ie(u.onscreenTestElement || u.htmlElement);
                if (Z((c = h).x, (l = f).x) && Z(c.y, l.y)) return u;
              }
              return null;
            }),
            (V.prototype.Register = function() {
              var e,
                t,
                n,
                r = "NavArea.Register";
              te(r + " (" + this.props.id + ")");
              var o,
                i,
                a,
                s = this.GetElementDoc(r),
                c = s.thisElement,
                l = s.doc;
              null != l &&
                ((o = (function() {
                  var e = V.GetDocumentNavState(l);
                  if (null != e) return e;
                  te("+ creating new DocumentNavState");
                  var t = new me(l);
                  return (
                    V.AddEventListeners(l), V.sm_documentStates.set(l, t), t
                  );
                })()),
                (this.m_document = l),
                (this.m_docNavState = o),
                null !=
                  (i =
                    this.props.focusController || o.m_defaultFocusController) &&
                  (o.m_focusControllers.has(i) ||
                    (i.AddFocusListener(V.HandleFocusControllerOnFocus),
                    i.AddBlurListener(V.HandleFocusControllerOnBlur)),
                  o.m_focusControllers.add(i)),
                (this.m_focusController = i),
                null !=
                  (a =
                    null === this.props.focusMarker
                      ? void 0
                      : null !==
                          (n =
                            null !==
                              (t =
                                null !== (e = this.props.focusMarker) &&
                                void 0 !== e
                                  ? e
                                  : V.sm_defaultFocusMarker) && void 0 !== t
                              ? t
                              : this.m_boxFocusMarker) && void 0 !== n
                      ? n
                      : (this.m_boxFocusMarker = new L(
                          this.m_boxFocusMarkerDivRef
                        ))) && o.m_focusMarkers.add(a),
                (this.m_focusMarker = a),
                o.m_elementNavAreaMap.set(c, this),
                this.props.startInactive || this.Activate());
            }),
            (V.prototype.Unregister = function() {
              var e = "NavArea.Unregister";
              te(e + " (" + this.props.id + ")");
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
                    (n.RemoveFocusListener(V.HandleFocusControllerOnFocus),
                    n.RemoveBlurListener(V.HandleFocusControllerOnBlur))),
                a.isEmpty &&
                  (V.RemoveEventListeners(i), V.sm_documentStates.delete(i)));
            }),
            (V.prototype.componentDidMount = function() {
              te("NavArea.componentDidMount (" + this.props.id + ")"),
                this.Register();
            }),
            (V.prototype.componentDidUpdate = function() {
              te("NavArea.componentDidUpdate (" + this.props.id + ")");
            }),
            (V.prototype.componentWillUnmount = function() {
              te("NavArea.componentWillUnmount (" + this.props.id + ")"),
                this.Unregister();
            }),
            (V.prototype.render = function() {
              var e,
                t = this.props,
                n = t.className,
                r = t.children,
                o = (t.initFromBoundary,
                t.onActivate,
                t.onDeactivate,
                t.onGoBack,
                t.onHome,
                t.focusController,
                t.focusMarker,
                t.startInactive),
                i = Object(u.f)(t, [
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
                a = y.IsNavEnabled;
              if (!a)
                return p.createElement(
                  "div",
                  Object(u.a)({ ref: this.m_navAreaDivRef, className: n }, i),
                  r
                );
              var s = y.IsPointerVisible,
                c = y.IsDefaultFocusMarkerVisible,
                l = (((e = {})[$.Type] = ee.Area),
                (e[$.AreaActive] = "false"),
                (e[$.AreaPass] = o ? "true" : void 0),
                e);
              return p.createElement(
                D.Provider,
                { value: this },
                p.createElement(
                  "div",
                  Object(u.a)(
                    { ref: this.m_navAreaDivRef, className: Object(m.a)(_, n) },
                    l,
                    i
                  ),
                  a &&
                    s &&
                    p.createElement(N, {
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
                  a &&
                    c &&
                    p.createElement("div", {
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
                  r
                )
              );
            }),
            (V.sm_documentStates = new Map()),
            (V.sm_bIsDoingKeyNav = !0),
            (V.k_EventListeners = [
              ["keydown", V.HandleAllOnKeyDown],
              ["scroll", V.HandleAllOnScroll],
              ["mousedown", V.HandleAllOnMouseDown],
              ["click", V.HandleAllOnClick],
              ["animationstart", V.HandleAllOnAnimationStart],
              ["animationend", V.HandleAllOnAnimationEnd],
              ["transitionstart", V.HandleAllOnTransitionStart],
              ["transitionend", V.HandleAllOnTransitionEnd]
            ]),
            (V.k_KeyNavigationDirections = {
              ArrowLeft: ["x", -1],
              ArrowRight: ["x", 1],
              ArrowUp: ["y", -1],
              ArrowDown: ["y", 1]
            }),
            Object(u.c)([E], V.prototype, "HandleKeyDown", null),
            Object(u.c)([E], V.prototype, "GetFocusedElement", null),
            Object(u.c)([E], V.prototype, "ClickFocusedElement", null),
            Object(u.c)([E], V.prototype, "Blur", null),
            Object(u.c)([E], V.prototype, "Activate", null),
            Object(u.c)([E], V.prototype, "Deactivate", null),
            Object(u.c)([E], V.prototype, "ClaimFocus", null),
            Object(u.c)([E], V.prototype, "NavigateTo", null),
            Object(u.c)([E], V.prototype, "UpdateFocus", null),
            Object(u.c)([E], V.prototype, "UpdateFocusMarker", null),
            Object(u.c)([E], V.prototype, "FindBestFocusableTarget", null),
            Object(u.c)([E], V.prototype, "FindNextNavTarget", null),
            Object(u.c)([E], V.prototype, "Register", null),
            Object(u.c)([E], V.prototype, "Unregister", null),
            Object(u.c)([E], V.prototype, "componentDidMount", null),
            Object(u.c)([E], V.prototype, "componentDidUpdate", null),
            Object(u.c)([E], V.prototype, "componentWillUnmount", null),
            Object(u.c)([E], V, "FocusWithin", null),
            Object(u.c)([E], V, "BlurWithin", null),
            Object(u.c)([E], V, "HandleKeyDown", null),
            Object(u.c)([E], V, "GetScrollOffset", null),
            Object(u.c)([E], V, "UpdateFocusPosAfterLayoutChange", null),
            Object(u.c)([E], V, "FindNextNavTargetInContainer", null),
            Object(u.c)(
              [E],
              V,
              "FindNextNavTargetWithinAndAcrossContainers",
              null
            ),
            Object(u.c)([E], V, "HandleAllOnKeyDown", null),
            Object(u.c)([E], V, "HandleAllOnScroll", null),
            Object(u.c)([E], V, "HandleAllOnAnimationStart", null),
            Object(u.c)([E], V, "HandleAllOnAnimationEnd", null),
            Object(u.c)([E], V, "HandleAllOnTransitionStart", null),
            Object(u.c)([E], V, "HandleAllOnTransitionEnd", null),
            Object(u.c)([E], V, "HandleAllOnMouseDown", null),
            Object(u.c)([E], V, "HandleAllOnClick", null),
            Object(u.c)([E], V, "HandleFocusControllerOnFocus", null),
            Object(u.c)([E], V, "HandleFocusControllerOnBlur", null),
            V
          );
        })(p.Component);
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
    WplJ: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return o;
      });
      var r = n("q1tI"),
        i = n.n(r),
        a = n("i8i4"),
        o = function(e) {
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
                    return Object(a.createPortal)(o[r](n), e, "" + r + t);
                  })
                : null;
            })
          );
        };
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
        n.d(t, "o", function() {
          return h;
        }),
        n.d(t, "d", function() {
          return f;
        }),
        n.d(t, "i", function() {
          return v;
        }),
        n.d(t, "k", function() {
          return g;
        }),
        n.d(t, "j", function() {
          return b;
        }),
        n.d(t, "p", function() {
          return _;
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
      function h(e) {
        "loading" == document.readyState
          ? document.addEventListener("DOMContentLoaded", e)
          : e();
      }
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
      function b(e, t) {
        for (; e; ) {
          if (t(e)) return e;
          e = e.parentElement;
        }
      }
      function _(r, o) {
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
      n.d(t, "j", function() {
        return r;
      }),
        n.d(t, "e", function() {
          return d;
        }),
        n.d(t, "h", function() {
          return c;
        }),
        n.d(t, "f", function() {
          return h;
        }),
        n.d(t, "g", function() {
          return i;
        }),
        n.d(t, "i", function() {
          return s;
        }),
        n.d(t, "a", function() {
          return v;
        }),
        n.d(t, "c", function() {
          return E;
        }),
        n.d(t, "b", function() {
          return O;
        }),
        n.d(t, "d", function() {
          return C;
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
        if (e >= 2 * p.f.PerYear)
          return Object(u.f)(o + "XYears", Math.floor(e / p.f.PerYear));
        if (e >= p.f.PerYear)
          return (e -= p.f.PerYear) >= 2 * p.f.PerMonth && !r.bForceSingleUnits
            ? Object(u.f)(o + "1YearXMonths", Math.floor(e / p.f.PerMonth))
            : Object(u.f)(o + "1Year");
        if (e >= 2 * p.f.PerMonth)
          return Object(u.f)(o + "XMonths", Math.floor(e / p.f.PerMonth));
        if (e >= 2 * p.f.PerWeek)
          return Object(u.f)(o + "XWeeks", Math.floor(e / p.f.PerWeek));
        if (e >= p.f.PerWeek)
          return Object(u.f)(o + "1Week", Math.floor(e / p.f.PerWeek));
        if (e >= 2 * p.f.PerDay)
          return Object(u.f)(o + "XDays", Math.floor(e / p.f.PerDay));
        if (e >= p.f.PerDay)
          return (e -= p.f.PerDay) >= 2 * p.f.PerHour && !r.bForceSingleUnits
            ? Object(u.f)(o + "1DayXHours", Math.floor(e / p.f.PerHour))
            : Object(u.f)(o + "1Day");
        if (e >= 2 * p.f.PerHour)
          return Object(u.f)(o + "XHours", Math.floor(e / p.f.PerHour));
        if (e >= p.f.PerHour)
          return (e -= p.f.PerHour) >= 2 * p.f.PerMinute && !r.bForceSingleUnits
            ? Object(u.f)(o + "1HourXMinutes", Math.floor(e / p.f.PerMinute))
            : Object(u.f)(o + "1Hour");
        if (e >= 2 * p.f.PerMinute) {
          var i = Math.floor(e / p.f.PerMinute),
            a = e % p.f.PerMinute;
          return r.bHighGranularity && 0 != a
            ? 1 == a
              ? Object(u.f)(o + "XMinutes1Second", i)
              : Object(u.f)(o + "XMinutesXSeconds", i, a)
            : Object(u.f)(o + "XMinutes", i);
        }
        if (e >= p.f.PerMinute) {
          a = e % p.f.PerMinute;
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
      function d(e, t) {
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
        if ((r = a.get(n))) return r;
        var r = t.toLocaleDateString(u.e.GetPreferredLocales(), {
          year: "numeric",
          month: "short",
          day: "numeric"
        });
        return a.set(n, r), r;
      }
      function h(e) {
        return new Date(1e3 * e).toLocaleTimeString(u.e.GetPreferredLocales(), {
          hour: "numeric",
          minute: "numeric"
        });
      }
      var o = new Map();
      function i(e) {
        var t = new Date(1e3 * e),
          n = u.e.GetPreferredLocales(),
          r = (function(e) {
            if (!0 === (n = o.get(e)) || !1 === n) return n;
            var t = new Date();
            t.setHours(15);
            var n =
              t.toLocaleTimeString(e, { hour: "numeric" }) ==
              t.toLocaleTimeString(e, { hour: "numeric", hour12: !1 });
            return o.set(e, n), n;
          })(n[0]);
        return t.toLocaleTimeString(
          n,
          r
            ? { hour: "numeric", minute: "numeric" }
            : { hour: "numeric", hour12: !0 }
        );
      }
      var a = new Map(),
        f = new Map();
      function s(e, t) {
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
          s = f.get(a);
        return (
          s ||
          ((s = r.toLocaleDateString(u.e.GetPreferredLocales(), i)),
          f.set(a, s),
          s)
        );
      }
      function v(e, t) {
        var n = new Date(1e3 * e),
          r = new Date(),
          o = Object(l.a)(
            {
              bGranularFutureTime: !1,
              bGranularToday: !1,
              bGranularYesterday: !1,
              bGranularPast: !1
            },
            t
          );
        if (r < n) {
          if (!o.bGranularFutureTime)
            return (
              m.b(n.getTime() - r.getTime()),
              (n.getFullYear() == r.getFullYear() ? S : D)(n)
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
        if ((a.setHours(0, 0, 0, 0), a <= n))
          return o.bGranularToday
            ? Object(u.f)("#Time_Today_At", h(e))
            : Object(u.f)("#Time_Today");
        if ((a.setDate(a.getDate() - 1), a <= n))
          return o.bGranularYesterday
            ? Object(u.f)("#Time_Yesterday_At", h(e))
            : Object(u.f)("#Time_Yesterday");
        if (o.bGranularPast)
          return Object(u.f)(
            "#Time_Past_At",
            d(e, n.getFullYear() == r.getFullYear()),
            h(e)
          );
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
            Math.floor((s.valueOf() - n.valueOf()) / (1e3 * p.f.PerWeek)) + 1;
          return 1 == c
            ? Object(u.f)("#TimeSince_1Week")
            : Object(u.f)("#TimeSince_XWeeks", c);
        }
        return (n.getFullYear() == r.getFullYear() ? S : D)(n);
      }
      var g = new Map(),
        b = new Map(),
        _ = new Map(),
        y = new Map(),
        w = new Map();
      function E(e, t) {
        void 0 === t && (t = !1);
        var n = e.getDate() + 31 * (e.getMonth() + 12 * e.getFullYear()),
          r = w.get(n);
        return (
          r ||
          ((r = e.toLocaleDateString(u.e.GetPreferredLocales(), {
            weekday: "long",
            day: "numeric",
            month: t ? "long" : "short"
          })),
          w.set(n, r),
          r)
        );
      }
      function O(e) {
        var t = g.get(e.getDay());
        return (
          t ||
          ((t = e.toLocaleDateString(u.e.GetPreferredLocales(), {
            weekday: "long"
          })),
          g.set(e.getDay(), t),
          t)
        );
      }
      function S(e) {
        var t = b.get(e.getMonth());
        return (
          t ||
          ((t = e.toLocaleDateString(u.e.GetPreferredLocales(), {
            month: "long"
          })),
          b.set(e.getMonth(), t),
          t)
        );
      }
      function C(e) {
        var t = _.get(e.getFullYear());
        return (
          t ||
          ((t = e.toLocaleDateString(u.e.GetPreferredLocales(), {
            year: "numeric"
          })),
          _.set(e.getFullYear(), t),
          t)
        );
      }
      function D(e) {
        var t = e.getMonth() + 12 * e.getFullYear(),
          n = y.get(t);
        return (
          n ||
          ((n = e.toLocaleDateString(u.e.GetPreferredLocales(), {
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
      n.d(t, "a", function() {
        return r;
      }),
        n.d(t, "b", function() {
          return o;
        });
      n("q1tI");
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
        u = m("uobO"),
        p = (m("5izx"), m("X3Ds"));
      m("xnZ7"), m("idvb");
      Object(p.o)(function() {
        return Object(d.b)(void 0, void 0, void 0, function() {
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
      n.d(t, "c", function() {
        return o;
      }),
        n.d(t, "f", function() {
          return m;
        }),
        n.d(t, "b", function() {
          return d;
        }),
        n.d(t, "d", function() {
          return b;
        }),
        n.d(t, "a", function() {
          return y;
        });
      n("mrSG");
      var r = n("mgoM");
      n.d(t, "e", function() {
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
      var h, f, v, g;
      ((f = h = h || {})[(f.k_EClientUsedInputTypeKeyboard = 0)] =
        "k_EClientUsedInputTypeKeyboard"),
        (f[(f.k_EClientUsedInputTypeMouse = 1)] =
          "k_EClientUsedInputTypeMouse"),
        (f[(f.k_EClientUsedInputTypeController = 2)] =
          "k_EClientUsedInputTypeController"),
        (f[(f.k_EClientUsedInputTypeMax = 3)] = "k_EClientUsedInputTypeMax"),
        ((g = v = v || {})[(g.k_ERemoteClientLaunchOK = 1)] =
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
      var b, _;
      function y(e) {
        return e === b.k_ESteamRealmChina;
      }
      ((_ = b = b || {})[(_.k_ESteamRealmUnknown = 0)] =
        "k_ESteamRealmUnknown"),
        (_[(_.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
        (_[(_.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina");
      var w, E, O, S, C, D, x, M, A, k, j, T;
      ((E = w = w || {})[(E.Unknown = 0)] = "Unknown"),
        (E[(E.Wired = 1)] = "Wired"),
        (E[(E.Wireless = 2)] = "Wireless"),
        ((S = O = O || {})[(S.NotPresent = 0)] = "NotPresent"),
        (S[(S.Failed = 1)] = "Failed"),
        (S[(S.Disconnected = 2)] = "Disconnected"),
        (S[(S.Disconnecting = 3)] = "Disconnecting"),
        (S[(S.Connecting = 4)] = "Connecting"),
        (S[(S.Connected = 5)] = "Connected"),
        (S[(S.Retrying = 6)] = "Retrying"),
        ((D = C = C || {})[(D.None = 0)] = "None"),
        (D[(D.Weak = 1)] = "Weak"),
        (D[(D.Ok = 2)] = "Ok"),
        (D[(D.Good = 3)] = "Good"),
        (D[(D.Excellent = 4)] = "Excellent"),
        ((M = x = x || {})[(M.None = 0)] = "None"),
        (M[(M.StaticWep = 1)] = "StaticWep"),
        (M[(M.DynamicWep = 2)] = "DynamicWep"),
        (M[(M.Wpa = 4)] = "Wpa"),
        (M[(M.WpaEnterprise = 8)] = "WpaEnterprise"),
        (M[(M.Wpa2 = 16)] = "Wpa2"),
        (M[(M.Wpa2Enterprise = 32)] = "Wpa2Enterprise"),
        (M[(M.Unsupported = 32768)] = "Unsupported"),
        ((k = A = A || {})[(k.SystemKey0 = 0)] = "SystemKey0"),
        (k[(k.SystemKey1 = 1)] = "SystemKey1"),
        ((T = j = j || {})[(T.Hidden = 0)] = "Hidden"),
        (T[(T.Notification = 1)] = "Notification"),
        (T[(T.Overlay = 2)] = "Overlay"),
        (T[(T.Opaque = 3)] = "Opaque");
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
        n.d(t, "b", function() {
          return a;
        }),
        n.d(t, "c", function() {
          return s;
        }),
        n.d(t, "a", function() {
          return c;
        }),
        n.d(t, "d", function() {
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
      var s = function(e) {
        return "koreana" === e ? "korean" : e;
      };
      function c(e, t) {
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
      function l(e, t) {
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
    },
    nmPn: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return P;
      }),
        n.d(t, "b", function() {
          return G;
        });
      function r() {
        return h.a.IS_CREATOR_HOME || h.a.IS_CURATOR ? "groups" : "games";
      }
      var o,
        i = n("mrSG"),
        a = n("q1tI"),
        s = n.n(a),
        c = n("55Ip"),
        l = n("Ty5D"),
        u = n("sUmc"),
        p = n("eDP5"),
        m = n("Jqb/"),
        d = n("WplJ"),
        h = n("lkRc"),
        f = s.a.lazy(function() {
          return Promise.all([n.e(0), n.e(3), n.e(1), n.e(2), n.e(100)]).then(
            n.bind(null, "GEPe")
          );
        }),
        v = s.a.lazy(function() {
          return Promise.all([n.e(0), n.e(3), n.e(1), n.e(8)]).then(
            n.bind(null, "IY+y")
          );
        }),
        g = s.a.lazy(function() {
          return Promise.all([n.e(0), n.e(7)]).then(n.bind(null, "/u7D"));
        }),
        b = s.a.lazy(function() {
          return Promise.all([n.e(0), n.e(3), n.e(1), n.e(2), n.e(6)]).then(
            n.bind(null, "8zUZ")
          );
        }),
        _ = s.a.lazy(function() {
          return n.e(69).then(n.bind(null, "rt5e"));
        }),
        y = function() {
          return "/" + r() + "/:anything*/diagdata";
        },
        w = function() {
          return "/(migrateevents|migrate)";
        },
        E = function(e) {
          return "/" + r() + "/" + e + "/(partnerevents|events|announcements)";
        },
        O = function(e) {
          return "/app/" + e + "(/workshop/)?";
        },
        S = function(e) {
          return "/groups/" + e + "/";
        },
        C = function(e) {
          return "/id/" + e;
        },
        D = function(e) {
          return "/profiles/" + e;
        },
        x = function() {
          return "/:anything/filedetails";
        },
        M = function() {
          return "/id/:vanity_url/recommended/:appid/";
        },
        A = function() {
          return "/profiles/:steamid/recommended/:appid/";
        },
        k = function() {
          return "/profiles/:steamid/recommended/";
        },
        j = function() {
          return "/id/:vanity_url/recommended/";
        },
        T = function() {
          return "/id/:vanity_url/friends/add";
        },
        I = function() {
          return "/profiles/:id/friends/add";
        },
        N = function() {
          return "/broadcast";
        },
        L = function() {
          return "/workshop/discussions";
        },
        R = function() {
          return "/sharedfiles/filedetails/discussions";
        },
        B = function() {
          return "/discussions/forum";
        },
        F = function() {
          return "/";
        },
        P = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(i.d)(t, e),
            (t.prototype.componentDidMount = function() {
              o ||
                (o = Object(u.b)(document)).Show(
                  s.a.createElement(m.b, { ModalManager: Object(m.f)(window) })
                );
            }),
            (t.prototype.render = function() {
              return s.a.createElement(
                c.a,
                {
                  basename: (function() {
                    var e = document.createElement("a");
                    e.href = h.b.COMMUNITY_BASE_URL;
                    var t = e.pathname;
                    t.endsWith("/") || (t += "/");
                    return t;
                  })()
                },
                s.a.createElement(
                  s.a.Suspense,
                  { fallback: s.a.createElement("div", null) },
                  s.a.createElement(
                    l.e,
                    null,
                    s.a.createElement(l.c, {
                      exact: !0,
                      path: y(),
                      render: function(e) {
                        return s.a.createElement(
                          p.a,
                          Object(i.a)({}, e, {
                            key: e.match.params.gid,
                            strConfigID: "application_config"
                          })
                        );
                      }
                    }),
                    s.a.createElement(l.c, {
                      path: E(":appid_or_vanity_str"),
                      component: v
                    }),
                    s.a.createElement(l.c, { path: w(), component: v }),
                    s.a.createElement(l.c, { path: N(), component: b }),
                    s.a.createElement(l.c, {
                      path: O(":appid"),
                      render: function(e) {
                        return s.a.createElement(d.a, {
                          config: {
                            "apphub-events": function() {
                              return s.a.createElement(v, null);
                            },
                            "apphub-ugcrewards": function() {
                              return s.a.createElement(g, Object(i.a)({}, e));
                            },
                            "community-awards": function() {
                              return s.a.createElement(g, Object(i.a)({}, e));
                            }
                          }
                        });
                      }
                    }),
                    s.a.createElement(l.c, {
                      path: S(":groupid_or_vanity_str"),
                      render: function(e) {
                        return s.a.createElement(d.a, {
                          config: {
                            "apphub-events": function() {
                              return s.a.createElement(v, null);
                            },
                            "community-awards": function() {
                              return s.a.createElement(g, Object(i.a)({}, e));
                            }
                          }
                        });
                      }
                    }),
                    s.a.createElement(l.c, {
                      path: M(),
                      render: function(e) {
                        return s.a.createElement(g, Object(i.a)({}, e));
                      }
                    }),
                    s.a.createElement(l.c, {
                      path: A(),
                      render: function(e) {
                        return s.a.createElement(g, Object(i.a)({}, e));
                      }
                    }),
                    s.a.createElement(l.c, {
                      path: j(),
                      render: function(e) {
                        return s.a.createElement(g, Object(i.a)({}, e));
                      }
                    }),
                    s.a.createElement(l.c, {
                      path: k(),
                      render: function(e) {
                        return s.a.createElement(g, Object(i.a)({}, e));
                      }
                    }),
                    s.a.createElement(l.c, {
                      path: [B(), L(), R()],
                      render: function(e) {
                        return s.a.createElement(d.a, {
                          config: {
                            "community-awards": function() {
                              return s.a.createElement(g, Object(i.a)({}, e));
                            }
                          }
                        });
                      }
                    }),
                    s.a.createElement(
                      l.c,
                      { path: [T(), I()] },
                      s.a.createElement(_, null)
                    ),
                    s.a.createElement(l.c, {
                      path: C(":vanity_url"),
                      render: function(e) {
                        return s.a.createElement(f, Object(i.a)({}, e));
                      }
                    }),
                    s.a.createElement(l.c, {
                      path: D(":steamid"),
                      render: function(e) {
                        return s.a.createElement(f, Object(i.a)({}, e));
                      }
                    }),
                    s.a.createElement(l.c, {
                      path: x(),
                      render: function(e) {
                        return s.a.createElement(g, Object(i.a)({}, e));
                      }
                    }),
                    s.a.createElement(l.c, {
                      path: F(),
                      render: function(e) {
                        return s.a.createElement(d.a, {
                          config: {
                            "apphub-events": function() {
                              return s.a.createElement(v, null);
                            },
                            "apphub-ugcrewards": function() {
                              return s.a.createElement(g, Object(i.a)({}, e));
                            }
                          }
                        });
                      }
                    }),
                    s.a.createElement(l.c, { component: G })
                  )
                )
              );
            }),
            t
          );
        })(s.a.Component);
      function G(e) {
        return "dev" == h.b.WEB_UNIVERSE
          ? s.a.createElement("div", null, "Dev Universe: Unknown Path")
          : s.a.createElement(l.b, { push: !0, to: h.b.COMMUNITY_BASE_URL });
      }
    },
    qiKp: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return i;
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
        o = n("bxiW"),
        i = (function() {
          function e() {
            this.m_vecCallbacks = [];
          }
          return (
            (e.prototype.Register = function(e) {
              var t = this;
              this.m_vecCallbacks.push(e);
              return {
                Unregister: function() {
                  r.c(t.m_vecCallbacks, e);
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
            Object(a.c)([o.a], e.prototype, "ScheduledInternal", null),
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
      function l(i) {
        return Object(a.b)(this, void 0, void 0, function() {
          var t, r, n, o;
          return Object(a.e)(this, function(e) {
            switch (e.label) {
              case 0:
                return (
                  (t = []),
                  (r = Object.keys(i)).forEach(function(e) {
                    return t.push(i[e]);
                  }),
                  [4, Promise.all(t)]
                );
              case 1:
                return (
                  (n = e.sent()),
                  (o = {}),
                  [
                    2,
                    n.reduce(function(e, t, n) {
                      return (e[r[n]] = t), e;
                    }, o)
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
        "./shared_arabic.json": ["d1TB", 38],
        "./shared_brazilian.json": ["Pg9r", 39],
        "./shared_bulgarian.json": ["ENge", 40],
        "./shared_czech.json": ["Ts6V", 41],
        "./shared_danish.json": ["9oiU", 42],
        "./shared_dutch.json": ["nxN4", 43],
        "./shared_english.json": ["TYjx", 44],
        "./shared_finnish.json": ["NuB8", 45],
        "./shared_french.json": ["bOPj", 46],
        "./shared_german.json": ["svuF", 47],
        "./shared_greek.json": ["eJKB", 48],
        "./shared_hungarian.json": ["T7i2", 49],
        "./shared_italian.json": ["w96W", 50],
        "./shared_japanese.json": ["XQ4S", 51],
        "./shared_koreana.json": ["4hyI", 52],
        "./shared_latam.json": ["3qrw", 53],
        "./shared_norwegian.json": ["XA4Q", 54],
        "./shared_polish.json": ["TpXn", 55],
        "./shared_portuguese.json": ["Q8UV", 56],
        "./shared_romanian.json": ["Eme1", 57],
        "./shared_russian.json": ["BUiO", 58],
        "./shared_sc_schinese.json": ["O0N/", 59],
        "./shared_schinese.json": ["3UpY", 60],
        "./shared_spanish.json": ["4Fxc", 61],
        "./shared_swedish.json": ["0JhB", 62],
        "./shared_tchinese.json": ["OYRc", 63],
        "./shared_thai.json": ["lhAZ", 64],
        "./shared_turkish.json": ["RSoU", 65],
        "./shared_ukrainian.json": ["lNXI", 66],
        "./shared_vietnamese.json": ["RSmC", 67]
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
    uobO: function(e, b, _) {
      "use strict";
      (function(e) {
        _.d(b, "a", function() {
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
            return d || g(new p()), d;
          },
          g = function(e) {
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
          return w;
        }),
        n.d(t, "f", function() {
          return E;
        }),
        n.d(t, "a", function() {
          return O;
        }),
        n.d(t, "e", function() {
          return S;
        }),
        n.d(t, "g", function() {
          return C;
        });
      var l = n("mrSG"),
        r = n("TyAF"),
        u = n("q1tI"),
        a = n("i8i4"),
        s = n("TtDX"),
        c = n("JMS6"),
        T = n("X3Ds"),
        o = n("bxiW"),
        i = n("6Y59"),
        p = n("D4wO"),
        m = n("TLQK"),
        d = n("lkRc"),
        h = n("+jbA"),
        f = n.n(h),
        v = n("exH9"),
        g = n("w9XT"),
        b = (n("UPxs"), u.createContext(null)),
        _ = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(l.d)(t, e),
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
                t,
                n,
                r = this.props,
                o = r.children,
                i = r.className,
                a = (r.label,
                r.onCancel,
                Object(l.f)(r, ["children", "className", "label", "onCancel"])),
                s =
                  null !==
                    (n =
                      null === (t = this.context) || void 0 === t
                        ? void 0
                        : t.styles) && void 0 !== n
                    ? n
                    : f.a,
                c =
                  this.context &&
                  this.context.options &&
                  this.context.options.bUseWebStyles;
              return u.createElement(
                "div",
                Object(l.a)({}, a, {
                  className: Object(v.a)(
                    (((e = { popup_menu: c, popup_body: c })[
                      s.contextMenuContents
                    ] = !c),
                    (e[s.hasSubMenu] =
                      this.context && this.context.BIsSubMenuVisible()),
                    e),
                    i
                  )
                }),
                o
              );
            }),
            (t.contextType = b),
            (t = Object(l.c)([r.a], t))
          );
        })(u.Component),
        y = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_ref = u.createRef()), e;
          }
          return (
            Object(l.d)(e, t),
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
                t,
                n,
                r = this.props,
                o = (r.onSelected,
                r.bInteractableItem,
                Object(l.f)(r, ["onSelected", "bInteractableItem"])),
                i =
                  null !==
                    (n =
                      null === (t = this.context) || void 0 === t
                        ? void 0
                        : t.styles) && void 0 !== n
                    ? n
                    : f.a,
                a =
                  this.context &&
                  this.context.options &&
                  this.context.options.bUseWebStyles;
              return u.createElement(
                "div",
                Object(l.a)(
                  { ref: this.m_ref, onMouseEnter: this.OnMouseEnter },
                  o,
                  {
                    onClick: this.OnClick,
                    unselectable: this.props.unselectable,
                    className: Object(v.a)(
                      this.props.className,
                      (((e = { popup_menu_item: a })[i.contextMenuItem] = !a),
                      (e.contextMenuItem = !a),
                      (e.disabled = !!this.props.disabled),
                      e)
                    )
                  }
                ),
                this.props.children
              );
            }),
            (e.contextType = b),
            Object(l.c)([o.a], e.prototype, "OnClick", null),
            Object(l.c)([o.a], e.prototype, "OnMouseEnter", null),
            Object(l.c)([o.a], e.prototype, "Focus", null),
            e
          );
        })(u.PureComponent),
        w = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.bChecked,
                n = e.children,
                r = e.className,
                o = Object(l.f)(e, ["bChecked", "children", "className"]);
              return u.createElement(
                y,
                Object(l.a)({}, o, {
                  className: Object(v.a)(r, t && "menuChecked")
                }),
                u.createElement("div", { className: "contextMenuCheckMark" }),
                n
              );
            }),
            t
          );
        })(u.PureComponent),
        E = (u.PureComponent,
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
            Object(l.d)(e, n),
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
                d,
                h,
                f,
                v,
                g,
                b,
                _,
                y,
                w,
                E,
                O,
                S,
                C,
                D,
                x,
                M,
                A,
                k = this.m_elMenu,
                j = this.props.element;
              k &&
                j &&
                ("none" !==
                  (e = j.ownerDocument.defaultView).getComputedStyle(j)
                    .display &&
                  ((t = j.getBoundingClientRect()),
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
                    (t = T.f(e, t)),
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
                  (g = 0 < (v = (o.bOverlapHorizontal ? h : d) - f)),
                  (_ = 0 < (b = c - (o.bOverlapHorizontal ? d : h) - f)),
                  (y = (o.bPreferPopLeft || !_) && g),
                  g ||
                    _ ||
                    ((y = _ < g),
                    o.bFitToWindow &&
                      ((f += (y ? v : b) - 8), (i.menuWidth = f))),
                  (!o.bPreferPopLeft && _) || !g
                    ? (i.menuLeft = o.bOverlapHorizontal ? d : h)
                    : (i.menuRight = c - (o.bOverlapHorizontal ? h : d)),
                  (w = s || t.top),
                  (E = s || t.bottom),
                  (O = k.scrollHeight),
                  o.bMatchHeight && ((O = E - w), (i.menuHeight = O)),
                  (C = 0 < (S = (o.bOverlapVertical ? E : w) - O)),
                  (x = 0 < (D = l - (o.bOverlapVertical ? w : E) - O)),
                  (A = (o.bPreferPopTop || !x) && C && !o.bDisablePopTop),
                  C ||
                    x ||
                    ((M =
                      void 0 !== o.bShiftToFitWindow
                        ? o.bShiftToFitWindow
                        : o.bFitToWindow && !o.bOverlapHorizontal),
                    (A = D < S && !o.bDisablePopTop),
                    M && (A ? (i.menuTop = 4) : (i.menuBottom = 4)),
                    o.bFitToWindow &&
                      (M ? (O = Math.min(O, l - 8)) : (O += A ? S : D),
                      (i.menuHeight = O - 8))),
                  void 0 === i.menuBottom &&
                    void 0 === i.menuTop &&
                    (A
                      ? (i.menuBottom = l - (o.bOverlapVertical ? E : w))
                      : (i.menuTop = o.bOverlapVertical ? w : E)),
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
                    this.setState(i)));
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
                u.createElement(
                  b.Provider,
                  { value: this.props.instance },
                  u.createElement(
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
            Object(l.c)([o.a], e.prototype, "BindMenuElement", null),
            Object(l.c)(
              [o.a, Object(p.a)(100)],
              e.prototype,
              "OnMenuMutation",
              null
            ),
            Object(l.c)([o.a], e.prototype, "OnWindowResize", null),
            Object(l.c)([o.a], e.prototype, "OnBlur", null),
            Object(l.c)([o.a], e.prototype, "OnKeyDown", null),
            (e = Object(l.c)([r.a], e))
          );
        })(u.Component)),
        O = (function(o) {
          function i(e, t, n) {
            var r =
              o.call(this, "contextmenu_" + i.sm_iContextMenuInstance++, {
                title: "Menu",
                html_class: f.a.ContextMenuPopup + " client_chat_frame",
                body_class: "ContextMenuPopupBody",
                replace_existing_popup: !1,
                target_browser: n,
                eCreationFlags: c.b.ContextMenu
              }) || this;
            return (r.m_menuProps = e), (r.m_children = t), r;
          }
          return (
            Object(l.d)(i, o),
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
                  : ((t = T.f(
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
                u.createElement(
                  E,
                  Object(l.a)({}, this.m_menuProps, { popup: this }),
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
        })(c.a);
      function S(e) {
        return u.createElement("div", {
          className: f.a.ContextMenuMouseOverlay
        });
      }
      function C(e) {
        var t = [],
          n = T.m(e),
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
              u.createElement(
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
              u.createElement(
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
              u.createElement(
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
          Object(s.a)(u.createElement(_, null, t), e);
        else {
          if (e.shiftKey) return;
          e.preventDefault(), e.stopPropagation();
        }
      }
    },
    zBSo: function(e, t, n) {
      e.exports = {
        PagedSettingsDialog: "pagedsettings_PagedSettingsDialog_2sssI",
        PagedSettingsDialog_PageContent:
          "pagedsettings_PagedSettingsDialog_PageContent_CFTLX",
        PagedSettingsDialog_PageListColumn:
          "pagedsettings_PagedSettingsDialog_PageListColumn_2kwFF",
        PagedSettingsDialog_Title:
          "pagedsettings_PagedSettingsDialog_Title_2rjVT",
        PagedSettingsDialog_PageList:
          "pagedsettings_PagedSettingsDialog_PageList_18QCu",
        PagedSettingsDialog_PageListItem:
          "pagedsettings_PagedSettingsDialog_PageListItem_1-vlr",
        DisabledItem: "pagedsettings_DisabledItem_oUzYn",
        Active: "pagedsettings_Active_2DpXj"
      };
    }
  },
  [["gfbn", 99, 0]]
]);

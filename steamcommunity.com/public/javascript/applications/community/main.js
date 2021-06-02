/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "6575079";
(window.webpackJsonp = window.webpackJsonp || []).push([
  [71],
  {
    "+d9t": function (e, t, n) {
      "use strict";
      n.d(t, "e", function () {
        return p;
      }),
        n.d(t, "b", function () {
          return d;
        }),
        n.d(t, "d", function () {
          return f;
        }),
        n.d(t, "f", function () {
          return g;
        }),
        n.d(t, "a", function () {
          return b;
        }),
        n.d(t, "c", function () {
          return v;
        });
      var r = n("mrSG"),
        o = (n("2vnA"), n("riab"), n("q1tI")),
        i = n("TtDX"),
        a = n("exH9"),
        s = n("X3Ds"),
        c = n("TLQK"),
        l = n("lkRc"),
        u = n("y+6m");
      function p(e, t) {
        var n;
        (n =
          "currentTarget" in e ? e.currentTarget.ownerDocument.defaultView : e),
          0 == t.indexOf("steam://")
            ? (n.location.href = t)
            : n.open(
                t,
                null,
                "menubar,location,resizable,scrollbars,status,noopener"
              );
      }
      function d(e) {
        var t = e.bDisableContextMenu,
          n = e.onContextMenu,
          i = e.bForceExternal,
          a = e.href,
          s = e.bUseLinkFilter,
          c = e.getPIDFromEvent,
          u = Object(r.f)(e, [
            "bDisableContextMenu",
            "onContextMenu",
            "bForceExternal",
            "href",
            "bUseLinkFilter",
            "getPIDFromEvent",
          ]);
        return (
          t || n || (n = m),
          s &&
            a &&
            (a =
              (l.c.IN_CLIENT ? "steam://openurl_external/" : "") +
              l.c.COMMUNITY_BASE_URL +
              "linkfilter/?url=" +
              a),
          c ||
            (c = function () {
              return 0;
            }),
          o.createElement(
            "a",
            Object(r.a)({}, u, {
              href: a,
              onClick: function (e) {
                e.preventDefault(),
                  f(window, a, {
                    bForceExternal: !!i,
                    bUseLinkFilter: !!s,
                    unPID: c(e),
                  });
              },
              onContextMenu: n,
              rel: s ? "noopener noreferrer" : void 0,
            }),
            e.children
          )
        );
      }
      function h(e) {
        var t = e.strURL,
          n = e.unPID;
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            u.d,
            {
              onSelected: function () {
                s.j(t);
              },
            },
            Object(c.f)("#ContextMenu_CopyLinkURL")
          ),
          o.createElement(
            u.d,
            {
              onSelected: function (e) {
                f(e, t, { unPID: n });
              },
            },
            Object(c.f)("#ContextMenu_OpenLinkInNewWindow")
          )
        );
      }
      function m(e, t) {
        var n = e.currentTarget;
        return Object(i.a)(
          o.createElement(
            u.c,
            null,
            o.createElement(h, { strURL: n.href, unPID: t })
          ),
          e
        );
      }
      function f(e, t, n) {
        void 0 === n && (n = {});
        var r,
          o = n.bForceExternal,
          i = n.unPID,
          a = n.bUseLinkFilter;
        (r =
          "currentTarget" in e ? e.currentTarget.ownerDocument.defaultView : e),
          "undefined" != typeof SteamClient && void 0 !== SteamClient.WebChat
            ? SteamClient.WebChat.OpenURLInClient(t, i || 0, !!o)
            : 0 == t.indexOf("steam://") &&
              0 != t.indexOf("steam://remoteplay/connect")
            ? (r.location.href = t)
            : r.open(
                t,
                null,
                "menubar,location,resizable,scrollbars,status,noopener" +
                  (a ? ",noreferrer" : "")
              );
      }
      function g(e) {
        var t = e.component,
          n = e.fallback,
          i = e.componentRef,
          a = Object(r.f)(e, ["component", "fallback", "componentRef"]),
          s = o.useState([t, n])[0],
          c = s[0],
          l = s[1],
          u = null != c ? c : l;
        return o.createElement(u, Object(r.a)(Object(r.a)({}, a), { ref: i }));
      }
      var b = function (e) {
        return o.createElement(
          o.Fragment,
          null,
          Boolean(e.condition) ? e.wrap(e.children) : e.children
        );
      };
      function v(e) {
        return o.forwardRef(function (t, n) {
          return o.createElement(
            "div",
            Object(r.a)({}, t, {
              className: Object(a.a)(e, t.className),
              ref: n,
            })
          );
        });
      }
    },
    "+jbA": function (e, t, n) {
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
        ContextMenuSeparator: "contextmenu_ContextMenuSeparator_WUOrU",
        NoSeparation: "contextmenu_NoSeparation_3hRb6",
        UpperCase: "contextmenu_UpperCase_uz1Xm",
        SubMenu: "contextmenu_SubMenu_2RlEO",
        Label: "contextmenu_Label_2qdHl",
        Arrow: "contextmenu_Arrow_114nF",
        PopoutSubMenu: "contextmenu_PopoutSubMenu_Baq37",
        PopoutSubMenuItems: "contextmenu_PopoutSubMenuItems_2fZ_e",
      };
    },
    "2i24": function (e, t, n) {
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
        throbber_xxlarge: "throbber_throbber_xxlarge_3j-p4",
      };
    },
    "5E+2": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return m;
      });
      var r = n("mrSG"),
        o = n("q1tI"),
        i = n("sUmc"),
        a = n("UPxs"),
        s = n("exH9"),
        c = n("DWPT"),
        l = n("TLQK"),
        u = n("bxiW"),
        p = n("LY6W"),
        d = n.n(p),
        h = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.TryHide = function () {
              this.m_fnHide && this.m_fnHide(), (this.m_fnHide = null);
            }),
            (t.prototype.componentWillUnmount = function () {
              this.TryHide();
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.toolTipContent,
                o = t.nDelayShowMS,
                i = t.bDisabled,
                a = {
                  direction: t.direction,
                  nBodyAlignment: t.nBodyAlignment,
                  nBodyDistance: t.nBodyDistance,
                  nAllowOffscreenPx: t.nAllowOffscreenPx,
                  nMaxLateralMoveOnScreen: t.nMaxLateralMoveOnScreen,
                  className: t.strTooltipClassname,
                },
                s = null;
              if (!i) {
                var c = function (t) {
                  return (e.m_fnHide = t);
                };
                s =
                  "string" == typeof n
                    ? f.ForText(n, c, o, a)
                    : f.ForReactNode(n, c, o, a);
              }
              var l = Object(r.a)(Object(r.a)({}, this.props), {
                onMouseEnter: s ? s.ShowToolTip : null,
                onMouseLeave: this.TryHide,
              });
              return this.RenderHelper(l, s);
            }),
            (t.defaultProps = { nDelayShowMS: 300 }),
            Object(r.c)([u.a], t.prototype, "TryHide", null),
            t
          );
        })(o.Component),
        m = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.RenderHelper = function (e, t) {
              e.toolTipContent,
                e.nDelayShowMS,
                e.bDisabled,
                e.direction,
                e.nBodyAlignment,
                e.nBodyDistance,
                e.nAllowOffscreenPx,
                e.nMaxLateralMoveOnScreen,
                e.strTooltipClassname;
              var n = e.bNavStop,
                i = Object(r.f)(e, [
                  "toolTipContent",
                  "nDelayShowMS",
                  "bDisabled",
                  "direction",
                  "nBodyAlignment",
                  "nBodyDistance",
                  "nAllowOffscreenPx",
                  "nMaxLateralMoveOnScreen",
                  "strTooltipClassname",
                  "bNavStop",
                ]);
              return o.createElement(
                a.a,
                Object(r.a)(
                  { noFocusRing: !0, focusable: null != n ? n : !!i.onClick },
                  i
                ),
                e.children
              );
            }),
            t
          );
        })(h),
        f =
          (o.Component,
          o.Component,
          o.Component,
          (function () {
            function e(e, t, n, r) {
              (this.m_rctContent = e),
                (this.m_nDelayShowMS = n),
                (this.m_hoverPositionProps = r),
                (this.m_strKey = "tooltip-" + Math.floor(1e8 * Math.random())),
                (this.m_fnOnShow = t);
            }
            return (
              (e.ForReactNode = function (t, n, r, o) {
                return new e(t, n, r, o);
              }),
              (e.ForText = function (t, n, r, i) {
                return new e(
                  o.createElement(
                    "div",
                    { className: d.a.TextToolTip },
                    Object(l.f)(t)
                  ),
                  n,
                  r,
                  i
                );
              }),
              (e.prototype.ShowToolTip = function (t) {
                var n,
                  i = this,
                  a = t.currentTarget || t,
                  s = { target: a };
                if ("function" == typeof this.m_rctContent) {
                  if (!(n = this.m_rctContent())) return;
                } else n = this.m_rctContent;
                e.sm_embeddedElements.ShowElementDelayed(
                  a.ownerDocument,
                  this.m_nDelayShowMS,
                  o.createElement(
                    c.a,
                    Object(r.a)({}, s, this.m_hoverPositionProps),
                    n
                  ),
                  this.m_strKey
                ),
                  this.m_fnOnShow &&
                    this.m_fnOnShow(function () {
                      return i.HideToolTip(a);
                    });
              }),
              (e.prototype.HideToolTip = function (t) {
                var n = t.currentTarget || t;
                e.sm_embeddedElements.HideElement(
                  n.ownerDocument,
                  this.m_strKey
                );
              }),
              (e.sm_embeddedElements = new i.a("ignored-id-tooltip-map")),
              Object(r.c)([u.a], e.prototype, "ShowToolTip", null),
              Object(r.c)([u.a], e.prototype, "HideToolTip", null),
              e
            );
          })());
    },
    "5izx": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var r = n("wd/R"),
        o = n.n(r),
        i = n("s4NR"),
        a = n.n(i),
        s = n("kyHq"),
        c = n("lkRc"),
        l = new ((function () {
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
                get: function () {
                  return !1;
                },
                enumerable: !1,
                configurable: !0,
              }
            ),
            Object.defineProperty(e.prototype, "bIsFollowingEnabled", {
              get: function () {
                return c.c.EREALM != s.e.k_ESteamRealmChina;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "bIsCuratorsEnabled", {
              get: function () {
                return c.c.EREALM != s.e.k_ESteamRealmChina;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "bMigrateToStoreBrowseAPI", {
              get: function () {
                return !1;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.GetTimeNowWithOverride = function () {
              return this.nOverrideDateNow
                ? this.nOverrideDateNow
                : Math.floor(Date.now() / 1e3);
            }),
            (e.prototype.GetTimeNowWithOverrideAsDate = function () {
              return this.nOverrideDateNow
                ? new Date(1e3 * this.nOverrideDateNow)
                : new Date();
            }),
            (e.prototype.BHasTimeOverride = function () {
              return Boolean(this.nOverrideDateNow);
            }),
            (e.prototype.ParseDevOverrides = function (e) {
              if (e && 0 != e.length) {
                var t = a.a.parse("?" == e[0] ? e.substring(1) : e);
                if (
                  "string" == typeof t.t &&
                  ("dev" == c.c.WEB_UNIVERSE || "beta" == c.c.WEB_UNIVERSE)
                ) {
                  var n = /^\d+$/.test(t.t)
                    ? o.a.unix(Number.parseInt(t.t))
                    : o()(t.t);
                  (this.nOverrideDateNow = Math.floor(n.unix())),
                    console.log(
                      "CEventCalendarDevFeatures overriding partner event time: " +
                        this.nOverrideDateNow +
                        " " +
                        n.format()
                    );
                }
              }
            }),
            e
          );
        })())();
      window.g_EventCalendarDevFeatures = l;
    },
    "6+2x": function (e, t, n) {
      e.exports = {
        HoverPosition: "hoverposition_HoverPosition_3vg1v",
        Ready: "hoverposition_Ready_1Ye_0",
        NoSpace: "hoverposition_NoSpace_pxVZH",
        EnablePointerEvents: "hoverposition_EnablePointerEvents_2b9OE",
        HoverAboveModal: "hoverposition_HoverAboveModal_EQqOx",
      };
    },
    "6TF7": function (e, t, n) {
      e.exports = { Error: "app_Error_2yM3d" };
    },
    "6Y59": function (e, t, n) {
      "use strict";
      n.d(t, "U", function () {
        return c;
      }),
        n.d(t, "q", function () {
          return l;
        }),
        n.d(t, "u", function () {
          return u;
        }),
        n.d(t, "F", function () {
          return p;
        }),
        n.d(t, "s", function () {
          return d;
        }),
        n.d(t, "Y", function () {
          return h;
        }),
        n.d(t, "B", function () {
          return m;
        }),
        n.d(t, "P", function () {
          return f;
        }),
        n.d(t, "kb", function () {
          return g;
        }),
        n.d(t, "lb", function () {
          return b;
        }),
        n.d(t, "L", function () {
          return v;
        }),
        n.d(t, "hb", function () {
          return _;
        }),
        n.d(t, "fb", function () {
          return y;
        }),
        n.d(t, "O", function () {
          return O;
        }),
        n.d(t, "N", function () {
          return w;
        }),
        n.d(t, "k", function () {
          return E;
        }),
        n.d(t, "o", function () {
          return C;
        }),
        n.d(t, "D", function () {
          return S;
        }),
        n.d(t, "Z", function () {
          return D;
        }),
        n.d(t, "d", function () {
          return M;
        }),
        n.d(t, "c", function () {
          return x;
        }),
        n.d(t, "n", function () {
          return R;
        }),
        n.d(t, "p", function () {
          return I;
        }),
        n.d(t, "G", function () {
          return j;
        }),
        n.d(t, "J", function () {
          return T;
        }),
        n.d(t, "R", function () {
          return k;
        }),
        n.d(t, "y", function () {
          return B;
        }),
        n.d(t, "H", function () {
          return L;
        }),
        n.d(t, "X", function () {
          return A;
        }),
        n.d(t, "gb", function () {
          return N;
        }),
        n.d(t, "j", function () {
          return P;
        }),
        n.d(t, "W", function () {
          return F;
        }),
        n.d(t, "S", function () {
          return G;
        }),
        n.d(t, "T", function () {
          return U;
        }),
        n.d(t, "e", function () {
          return H;
        }),
        n.d(t, "K", function () {
          return W;
        }),
        n.d(t, "eb", function () {
          return V;
        }),
        n.d(t, "C", function () {
          return z;
        }),
        n.d(t, "t", function () {
          return K;
        }),
        n.d(t, "cb", function () {
          return Y;
        }),
        n.d(t, "bb", function () {
          return X;
        }),
        n.d(t, "i", function () {
          return q;
        }),
        n.d(t, "l", function () {
          return J;
        }),
        n.d(t, "w", function () {
          return Q;
        }),
        n.d(t, "r", function () {
          return Z;
        }),
        n.d(t, "A", function () {
          return $;
        }),
        n.d(t, "x", function () {
          return ee;
        }),
        n.d(t, "M", function () {
          return te;
        }),
        n.d(t, "b", function () {
          return ne;
        }),
        n.d(t, "ib", function () {
          return re;
        }),
        n.d(t, "a", function () {
          return oe;
        }),
        n.d(t, "I", function () {
          return ie;
        }),
        n.d(t, "v", function () {
          return ae;
        }),
        n.d(t, "z", function () {
          return se;
        }),
        n.d(t, "m", function () {
          return ce;
        }),
        n.d(t, "ab", function () {
          return le;
        }),
        n.d(t, "db", function () {
          return ue;
        }),
        n.d(t, "E", function () {
          return pe;
        }),
        n.d(t, "Q", function () {
          return de;
        }),
        n.d(t, "jb", function () {
          return he;
        }),
        n.d(t, "h", function () {
          return me;
        }),
        n.d(t, "g", function () {
          return fe;
        }),
        n.d(t, "f", function () {
          return ge;
        }),
        n.d(t, "V", function () {
          return be;
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
            enableBackground: "new -305.5 396.5 256 256",
          },
          o.createElement("path", {
            d:
              "M-232.755,589.942l3.103,2.408c5.78,4.492,11.973,8.18,18.409,10.959l3.581,1.547l2.276,33.783 c0.089,1.33,1.385,2.54,2.715,2.54h48.62c1.355,0,2.745-1.273,2.852-2.621l2.74-33.284l3.602-1.496 c6.406-2.656,12.646-6.262,18.554-10.707l3.137-2.366l30.578,15.009c1.155,0.571,2.924,0.017,3.563-1.087l24.303-42.1 c0.674-1.173,0.265-3.014-0.852-3.785l-27.872-19.309l0.469-3.832c0.495-4.032,0.725-7.395,0.725-10.57 c0-3.129-0.227-6.5-0.687-10.307l-0.469-3.896l28.699-19.253c1.112-0.741,1.509-2.473,0.84-3.627l-24.3-42.104 c-0.657-1.139-2.502-1.727-3.7-1.155l-31.208,14.748l-3.091-2.341c-5.571-4.224-11.466-7.688-17.522-10.306l-3.58-1.548 l-2.34-34.887c-0.089-1.33-1.381-2.536-2.715-2.536h-48.617c-1.355,0-2.74,1.274-2.851,2.626l-2.834,34.371l-3.593,1.501 c-6.082,2.535-12.028,5.924-17.667,10.071l-3.124,2.302l-31.392-15.413c-1.168-0.575-2.924-0.025-3.559,1.074l-24.309,42.107 c-0.678,1.172-0.264,3.014,0.848,3.781l28.068,19.444l-0.524,3.883c-0.592,4.378-0.865,8.018-0.865,11.462 c0,2.988,0.179,6.065,0.55,9.403l0.431,3.853l-28.528,19.125c-1.108,0.742-1.509,2.468-0.84,3.632l24.308,42.1 c0.656,1.142,2.489,1.726,3.7,1.154L-232.755,589.942z M-177.498,560.051c-19.311,0-35.02-15.709-35.02-35.02 s15.709-35.02,35.02-35.02s35.02,15.709,35.02,35.02S-158.188,560.051-177.498,560.051z",
            fill: "currentColor",
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
            y: "0px",
          },
          o.createElement("polygon", {
            points:
              "50 59.49 13.21 22.89 4.74 31.39 50 76.41 95.26 31.39 86.79 22.89 50 59.49",
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
            viewBox: "0 0 24.833 21.917",
          },
          o.createElement("polygon", {
            points:
              "12.5,14.873 3.302,5.723 1.185,7.848 12.5,19.103 23.814,7.848 21.697,5.723 ",
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
              viewBox: "0 0 100 100",
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
                overflow: "visible",
              })
            )
          )
        );
      }
      function d() {
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
            viewBox: "0 0 256 256",
          },
          o.createElement("circle", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "12",
            strokeMiterlimit: "10",
            cx: "128",
            cy: "128",
            r: "107.5",
          }),
          o.createElement("path", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "12",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d:
              "M74.484,145.945 c0,0,12.996,37.533,53.514,37.533c38.084,0,53.499-37.533,53.499-37.533",
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
            y2: "109.5",
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
            y2: "109.5",
          })
        );
      }
      function h() {
        return o.createElement(
          "svg",
          {
            fill: "#FFFFFF",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Submit",
            version: "1.1",
            x: "0px",
            y: "0px",
            viewBox: "0 0 100 100",
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
              overflow: "visible",
            })
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
            x: "0px",
            y: "0px",
            width: "100px",
            height: "91.582px",
            viewBox: "0 0 100 91.582",
            enableBackground: "new 0 0 100 91.582",
          },
          o.createElement(
            "g",
            null,
            o.createElement("path", {
              clipPath: "url(#SVGID_2_)",
              d:
                "M88.853,29.724H62.271V11.351C62.262,5.18,57.26,0.179,51.089,0.169H11.255\r\n\t\t\t\tC5.085,0.179,0.085,5.18,0.074,11.351v24.908c-0.001,2.207,0.657,4.36,1.888,6.19c3.942,7.586,22.118,18.799,22.314,18.916\r\n\t\t\t\tc0.389,0.229,0.83,0.354,1.281,0.361c1.351,0.01,2.455-1.074,2.468-2.426c0.003-0.329-0.062-0.654-0.187-0.958\r\n\t\t\t\tc-1.319-3.565-2.341-7.233-3.053-10.968h13.135v18.389C37.93,71.9,42.882,76.882,49.02,76.928H75.29\r\n\t\t\t\tc-0.715,3.724-1.737,7.379-3.054,10.936c-0.517,1.248,0.076,2.678,1.323,3.196c0.303,0.125,0.63,0.188,0.959,0.186\r\n\t\t\t\tc0.451-0.006,0.894-0.13,1.279-0.361c0.197-0.115,18.373-11.329,22.314-18.914c1.235-1.834,1.894-3.997,1.888-6.207V40.906\r\n\t\t\t\tC99.99,34.746,95.01,29.751,88.853,29.724 M32.797,42.449H21.831c-0.721,0.01-1.4,0.327-1.873,0.869\r\n\t\t\t\tc-0.464,0.544-0.669,1.265-0.558,1.973c0,0.228,0.59,3.79,1.641,8.028c-5.517-3.842-12.773-9.425-14.776-13.136\r\n\t\t\t\tc-0.067-0.162-0.149-0.314-0.247-0.46c-0.738-1.033-1.13-2.276-1.116-3.546V11.351c0.008-3.463,2.825-6.264,6.288-6.255h0.065\r\n\t\t\t\th39.833c3.45,0.007,6.246,2.804,6.255,6.255v18.373H49.02c-3.223,0.005-6.286,1.399-8.406,3.825\r\n\t\t\t\tc-1.744-0.054-3.464-0.427-5.074-1.101c2.588-3.257,4.169-7.2,4.548-11.345h1.33c1.359,0,2.463-1.103,2.463-2.463\r\n\t\t\t\tc0-1.361-1.104-2.461-2.463-2.461h-7.784v-4.384c0-1.36-1.102-2.464-2.461-2.464c-1.361,0-2.463,1.104-2.463,2.464v4.384h-7.668\r\n\t\t\t\tc-1.361,0-2.462,1.1-2.462,2.461c0,1.36,1.102,2.463,2.462,2.463H35.13c-0.348,3.137-1.604,6.104-3.613,8.538\r\n\t\t\t\tc-1.439-1.598-2.553-3.46-3.284-5.482c-0.489-1.271-1.916-1.903-3.185-1.414c-1.27,0.489-1.902,1.917-1.412,3.185\r\n\t\t\t\tc0.892,2.395,2.192,4.619,3.841,6.57c-2.017,0.812-4.178,1.208-6.354,1.165c-1.359,0-2.463,1.102-2.463,2.461\r\n\t\t\t\tc0,1.362,1.104,2.465,2.463,2.465c3.647,0.07,7.244-0.868,10.393-2.71c2.032,1.239,4.293,2.049,6.649,2.38\r\n\t\t\t\tc-0.218,0.859-0.327,1.741-0.327,2.627v1.641L32.797,42.449z M95.19,65.763c0.013,1.271-0.379,2.514-1.117,3.547\r\n\t\t\t\tc-0.097,0.138-0.181,0.287-0.246,0.443c-1.938,3.678-9.211,9.277-14.776,13.135c1.099-4.236,1.64-7.799,1.64-8.03\r\n\t\t\t\tc0.111-0.704-0.091-1.425-0.558-1.969c-0.462-0.548-1.138-0.871-1.854-0.887H49.02c-3.447,0-6.246-2.791-6.255-6.239V40.906\r\n\t\t\t\tc0.009-3.452,2.805-6.249,6.255-6.257h39.833c3.449,0.008,6.246,2.805,6.256,6.257L95.19,65.763z M77.834,56.635L77.834,56.635\r\n\t\t\t\tl-6.564-16.42c-0.037-0.092-0.081-0.18-0.133-0.262l-0.099-0.165c-0.047-0.078-0.102-0.15-0.164-0.214l-0.132-0.164l-0.182-0.147\r\n\t\t\t\tl-0.195-0.099c-0.056-0.043-0.116-0.076-0.182-0.098l-0.246-0.132c-0.06-0.009-0.121-0.009-0.18,0l-0.248-0.082h-0.245h-0.231\r\n\t\t\t\th-0.261h-0.214l-0.279,0.082c-0.055-0.007-0.109-0.007-0.164,0l-0.246,0.132l-0.247,0.098c-0.064,0.044-0.124,0.095-0.18,0.147\r\n\t\t\t\tl-0.182,0.148l-0.149,0.166c-0.056,0.066-0.113,0.138-0.161,0.211v0.166l-0.149,0.263l-6.567,16.418l-3.282,8.21\r\n\t\t\t\tc-0.546,1.246,0.026,2.697,1.272,3.24c0.036,0.016,0.072,0.029,0.105,0.042c0.29,0.127,0.604,0.189,0.919,0.182\r\n\t\t\t\tc1.005-0.006,1.905-0.616,2.283-1.544l2.657-6.665h9.854l2.66,6.665c0.383,0.931,1.291,1.54,2.298,1.544\r\n\t\t\t\tc0.31,0.003,0.619-0.059,0.904-0.182c1.269-0.485,1.906-1.907,1.422-3.18c-0.014-0.034-0.028-0.069-0.044-0.103L77.834,56.635z\r\n\t\t\t\tM66.062,55.123l2.939-7.323l2.923,7.323H66.062z",
            })
          )
        );
      }
      function f() {
        return o.createElement(
          "svg",
          {
            fill: "#FFFFFF",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Popout",
            viewBox: "0 0 8 8",
            x: "0px",
            y: "0px",
          },
          o.createElement("path", {
            d:
              "M0 0v8h8v-2h-1v1h-6v-6h1v-1h-2zm4 0l1.5 1.5-2.5 2.5 1 1 2.5-2.5 1.5 1.5v-4h-4z",
          })
        );
      }
      function g(e) {
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
              viewBox: "-165 95 100 100",
            },
            e
          ),
          o.createElement(
            "g",
            null,
            o.createElement("polygon", {
              points:
                "-74.9,117.2 -102.2,145 -74.9,172.8 -89.1,186.8 -116.2,159.3 -143.2,186.8 -157.5,172.8 -130.2,145 -157.5,117.2 -143.2,103.2 -116.2,130.7 -89.1,103.2",
            })
          )
        );
      }
      function b() {
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
            viewBox: "0 0 256 256",
          },
          o.createElement("line", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "45",
            strokeMiterlimit: "10",
            x1: "212",
            y1: "212",
            x2: "44",
            y2: "44",
          }),
          o.createElement("line", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "45",
            strokeMiterlimit: "10",
            x1: "44",
            y1: "212",
            x2: "212",
            y2: "44",
          })
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
            viewBox: "0 0 256 256",
          },
          o.createElement("path", {
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d:
              "M167.768,62.647 l-0.012,123.052c0,24.729-19.334,44.856-43.096,44.866c-23.765-0.006-43.099-20.134-43.096-44.872L81.557,48.851 c0-15.345,14.483-27.827,29.83-27.83c15.342,0.003,27.827,12.488,27.833,27.833l-0.002,139.245 c0.003,6.376-8.546,12.925-14.925,12.925c0,0-13.929-0.166-13.929-12.928l0.003-124.839",
          })
        );
      }
      function _(e) {
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
            viewBox: "0 0 256 255.999",
          },
          o.createElement(
            "g",
            { className: "Speaker" },
            o.createElement("path", {
              d:
                "M93.785,52.265c-0.946,0-2.357,0.63-3.304,1.577L40.284,98.022c-0.947,0.789-2.831,1.578-4.093,1.578H9.367 C8.104,99.6,7,100.706,7,101.967v52.069c0,1.264,1.104,2.367,2.367,2.367H36.19c1.262,0,3.146,0.632,4.093,1.578l50.197,44.181 c0.947,0.789,2.516,1.578,3.304,1.578s1.578-1.104,1.578-2.367V54.631C95.363,53.369,94.731,52.265,93.785,52.265z",
            })
          ),
          !e.muted &&
            o.createElement(
              "g",
              { className: "SoundWaves" },
              o.createElement("path", {
                className: "SoundWavesHighest",
                d:
                  "M193.826,30.402c24.959,24.958,40.349,59.403,40.349,97.604c0,38.199-15.388,72.645-40.349,97.603l9.916,9.916 c28.067-28.067,44.263-64.673,44.263-107.521c0-42.847-16.196-79.455-44.263-107.521",
              }),
              o.createElement("path", {
                className: "SoundWavesHigh",
                d:
                  "M175.737,47.628l-8.924,8.924c18.271,18.27,29.536,43.484,29.536,71.448s-11.264,53.178-29.536,71.448l8.924,8.924 c20.546-20.546,33.234-49.008,33.234-80.374c0-31.366-12.688-59.829-33.234-80.374V47.628z",
              }),
              o.createElement("path", {
                className: "SoundWavesMed",
                d:
                  "M148.913,74.454l-8.925,8.925c11.488,11.488,18.491,27.236,18.491,44.624c0,17.388-7.054,33.281-18.491,44.575l8.875,8.975 c13.811-13.635,22.239-32.753,22.239-53.55c0-20.797-8.432-39.793-22.189-53.55V74.454z",
              }),
              o.createElement("path", {
                className: "SoundWavesLow",
                d:
                  "M121.989,101.229l-8.778,9.073c4.641,4.516,7.397,10.706,7.397,17.702c0,6.995-2.755,13.186-7.397,17.702l8.778,9.073 c7.035-6.844,11.243-16.413,11.243-26.775C133.232,117.643,129.024,108.075,121.989,101.229z",
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
              y2: "84.5",
            }),
            o.createElement("line", {
              fill: "none",
              strokeWidth: e.muted ? 10 : 0,
              stroke: "#fff",
              strokeMiterlimit: "10",
              x1: "137",
              y1: "84.5",
              x2: "223.167",
              y2: "170.667",
            })
          )
        );
      }
      function y() {
        return o.createElement(
          "svg",
          { width: "50px", height: "25px", viewBox: "0 0 50 25" },
          o.createElement("path", {
            d:
              "M46 0H4C1.8 0 0 1.8 0 4v17c0 2.2 1.8 4 4 4h42c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM21 18.916V5.084L32.805 12 21 18.916z",
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
            className: "SVGIcon_Button SVGIcon_Play",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          o.createElement("path", {
            className: "playTriangle",
            d:
              "M65.321,33.521c-11.274-6.615-20.342-1.471-20.342,11.52V210.96c0,12.989,9.068,18.135,20.342,11.521l137.244-82.348 c11.274-6.618,11.274-17.646,0-24.509L65.321,33.521z",
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
            viewBox: "0 0 256 256",
          },
          o.createElement("path", {
            d:
              "M44.979,219.364c0,3.3,2.7,6,6,6h49.753c3.3,0,6-2.7,6-6V36.5c0-3.3-2.7-6-6-6H50.979c-3.3,0-6,2.7-6,6V219.364z",
          }),
          o.createElement("path", {
            d:
              "M149.267,219.364c0,3.3,2.7,6,6,6h49.753c3.3,0,6-2.7,6-6V36.5c0-3.3-2.7-6-6-6h-49.753c-3.3,0-6,2.7-6,6V219.364z",
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
            viewBox: "0 0 256 256",
          },
          o.createElement("polyline", {
            fill: "none",
            stroke: "#fff",
            strokeWidth: "24",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "49.5,147.75 95,210.75 206.5,45.25 ",
          })
        );
      }
      function C(e) {
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
            viewBox: "0 0 256 256",
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
                stopColor: t,
              }),
              o.createElement("stop", {
                id: "stop1",
                offset: "100%",
                stopColor: n,
              })
            ),
            o.createElement(
              "filter",
              { id: "f1", x: "0", y: "0", width: "200%", height: "200%" },
              o.createElement("feOffset", {
                result: "offOut",
                in: "SourceAlpha",
                dx: "20",
                dy: "20",
              }),
              o.createElement("feGaussianBlur", {
                result: "blurOut",
                in: "offOut",
                stdDeviation: "10",
              }),
              o.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "blurOut",
                mode: "normal",
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
            strokeDashoffset: "0.00",
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
            strokeDashoffset: "0.00",
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
            viewBox: "0 0 256 256",
          },
          o.createElement("path", {
            className: "topLock",
            d:
              "M203.553,197.794c0,21.929-17.778,39.706-39.706,39.706H92.154c-21.929,0-39.706-17.777-39.706-39.706v-71.693 c0-21.928,17.778-39.706,39.706-39.706h71.692c21.928,0,39.706,17.778,39.706,39.706V197.794z M128.001,129.664 c-8.941,0-16.19,7.248-16.19,16.189c0,5.589,2.833,10.518,7.137,13.427c2.066,1.395,0.318,23.508,0.318,32.842 c0,2.292-0.078,3.65,8.734,3.65c8.676,0,8.75-1.221,8.75-3.654c0-9.348-1.708-31.469,0.368-32.886 c4.269-2.916,7.071-7.821,7.071-13.38C144.191,136.912,136.941,129.664,128.001,129.664z",
          }),
          o.createElement("path", {
            className: "baseLock",
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "22",
            strokeMiterlimit: "10",
            d:
              "M84.813,172.74V73.688l0,0 c0-23.85,19.335-43.188,43.187-43.188l0,0c23.852,0,43.188,19.337,43.188,43.188l0,0v23.885",
          })
        );
      }
      function D(e) {
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
              viewBox: "0 0 256 256",
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
                  "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895",
              }),
              o.createElement("path", {
                className: a.a.roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M201.432,101.166",
              }),
              o.createElement("path", {
                className: a.a.roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754",
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
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a.a.roundOuterOutline,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a.a.roundThrobber01,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a.a.roundThrobber02,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a.a.roundThrobber03,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a.a.roundThrobber04,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a.a.roundThrobber05,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a.a.roundThrobber06,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a.a.roundThrobber07,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a.a.roundThrobber08,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a.a.roundThrobber09,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a.a.roundThrobber10,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a.a.roundThrobber11,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a.a.roundThrobber12,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a.a.roundThrobber13,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a.a.roundThrobber14,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a.a.roundThrobber15,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              })
            ),
            o.createElement(
              "g",
              { className: a.a.bottomCircle },
              o.createElement("path", {
                fill: "#ffffff",
                d:
                  "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579",
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
                r: "23.019",
              })
            )
          )
        );
      }
      function M() {
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
            viewBox: "0 0 256 256",
          },
          o.createElement("path", {
            d:
              "M107.785,33.965c-34.875,8.972-60.644,40.618-60.644,78.308v53.903c0,4.965-4.035,8.99-8.975,8.99 c-9.929,0-17.978,8.066-17.978,17.971c0,9.924,8.059,17.969,18.013,17.969h179.598c9.948,0,18.014-8.066,18.014-17.969 c0-9.926-8.087-17.971-17.979-17.971c-4.956,0-8.975-3.993-8.975-8.99v-53.903c0-37.676-25.763-69.333-60.644-78.308v-9.281 c0-11.193-9.052-20.219-20.215-20.219c-11.143,0-20.215,9.052-20.215,20.219V33.965L107.785,33.965z M96.554,220.09h62.891 c0,17.366-14.079,31.445-31.445,31.445C110.633,251.535,96.554,237.458,96.554,220.09z",
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
            viewBox: "0 0 256 256",
          },
          o.createElement("polyline", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "128,247.688 128,8.313 181.061,61.674 ",
          }),
          o.createElement("polyline", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "128,247.688 128,8.313 74.939,61.674 ",
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
            x: "0px",
            y: "0px",
            width: "50px",
            height: "100px",
            viewBox: "0 0 50 100",
          },
          o.createElement("polygon", {
            fill: "#ffffff",
            points:
              "0,0.093 0,25.702 24.323,50.026 0,74.349 0,99.955 49.929,50.026 ",
          })
        );
      }
      function I(e) {
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
            viewBox: "0 0 256 256",
          },
          o.createElement("polyline", {
            className: "Arrow1",
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "23",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            points: "135.65,21.667 30.081,127.235 137.18,234.333 ",
          }),
          !e.singlearrow &&
            o.createElement("polyline", {
              className: "Arrow2",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "23",
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              points: "224.389,21.667 118.821,127.235 225.92,234.333 ",
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
            className: "SVGIcon_Button SVGIcon_Maximize",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          o.createElement("rect", {
            x: "24",
            y: "42.167",
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "18",
            strokeMiterlimit: "10",
            width: "208",
            height: "171.667",
          }),
          o.createElement("line", {
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "42",
            strokeMiterlimit: "10",
            x1: "24",
            y1: "54.01",
            x2: "232",
            y2: "54.01",
          })
        );
      }
      function T() {
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
            viewBox: "0 0 256 256",
          },
          o.createElement("line", {
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "18",
            strokeMiterlimit: "10",
            x1: "24",
            y1: "209.01",
            x2: "232",
            y2: "209.01",
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
            viewBox: "0 0 256 256",
          },
          o.createElement("polyline", {
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "12",
            strokeMiterlimit: "10",
            points: "83,90.861 83,42.167 232,42.167 232,165.14 173,165.14 ",
          }),
          o.createElement("rect", {
            x: "24",
            y: "90.861",
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "18",
            strokeMiterlimit: "10",
            width: "149",
            height: "122.973",
          })
        );
      }
      function B(e) {
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
            viewBox: "0 0 256 256",
          },
          o.createElement("polygon", {
            points: "13.913,141 128,59 242.087,141 ",
            fill: "#ffffff",
          })
        );
      }
      function L(e) {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            style: {
              transform: "scaleX(" + (e.bFlipHorizontal ? -1 : 1) + ")",
            },
            className: "SVGIcon_Button SVGIcon_MediaControls",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          o.createElement("path", {
            className: "Arrow",
            d:
              "M77.003,54.763h32.784c3.794,0,9.113,2.181,11.814,4.848l63.604,62.773c2.703,2.667,2.727,7.054,0.05,9.748 l-63.705,64.206c-2.674,2.693-7.968,4.898-11.763,4.898H77.003",
          }),
          o.createElement("polyline", {
            className: "preArrowBox",
            opacity: e.bHidePreArrow ? "0" : "1",
            points: "6.833,54.763 46.71,54.763 46.71,201.236 6.833,201.236 \t",
          }),
          o.createElement("polyline", {
            className: "jumpAheadBox",
            opacity: e.bShowJumpAheadBox ? "1" : "0",
            points:
              "6.833,54.764 86.386,54.764 86.386,201.236 6.833,201.236 \t",
          }),
          o.createElement("polyline", {
            className: "postArrowBox",
            opacity: e.bHidePostArrow ? "0" : "1",
            points:
              "209.29,54.763 249.167,54.763 249.167,201.236 209.29,201.236 \t",
          })
        );
      }
      function A(e) {
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
            viewBox: "0 0 256 256",
          },
          o.createElement("path", {
            fill: "#ffffff",
            d:
              "M127.374,5.355c-64.404,0-117.167,49.661-122.18,112.77l65.712,27.171 c5.567-3.808,12.293-6.032,19.53-6.032c0.649,0,1.294,0.017,1.934,0.051l29.226-42.354c0-0.202-0.005-0.399-0.005-0.598 c0-25.496,20.74-46.241,46.237-46.241c25.498,0,46.238,20.745,46.238,46.241c0,25.494-20.74,46.242-46.238,46.242 c-0.352,0-0.698-0.011-1.047-0.021l-41.68,29.741c0.022,0.546,0.041,1.095,0.041,1.644c0,19.141-15.569,34.707-34.706,34.707 c-16.796,0-30.843-11.99-34.026-27.869l-46.993-19.43c14.55,51.464,61.831,89.189,117.957,89.189 c67.713,0,122.604-54.893,122.604-122.604C249.979,60.244,195.086,5.355,127.374,5.355",
          }),
          o.createElement("path", {
            fill: "#ffffff",
            d:
              "M82.026,191.387l-15.061-6.22c2.67,5.56,7.285,10.208,13.418,12.767 c13.25,5.521,28.531-0.771,34.054-14.027c2.674-6.416,2.694-13.5,0.04-19.93c-2.646-6.431-7.64-11.451-14.063-14.129 c-6.371-2.647-13.196-2.552-19.198-0.291l15.561,6.437c9.776,4.073,14.396,15.299,10.324,25.071 C103.031,190.841,91.801,195.464,82.026,191.387",
          }),
          o.createElement("path", {
            fill: "#ffffff",
            d:
              "M198.639,96.359c0-16.987-13.82-30.809-30.809-30.809c-16.987,0-30.813,13.821-30.813,30.809 c0,16.988,13.824,30.806,30.813,30.806S198.639,113.347,198.639,96.359 M144.736,96.306c0-12.783,10.363-23.142,23.145-23.142 c12.783,0,23.145,10.359,23.145,23.142c0,12.783-10.36,23.142-23.145,23.142C155.1,119.447,144.736,109.089,144.736,96.306",
          })
        );
      }
      function N() {
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
            viewBox: "0 0 256 256",
          },
          o.createElement("path", {
            className: "frontGuy",
            fill: "#666666",
            d:
              "M181.732,53.151c-17.255,0-31.321,13.316-31.321,32.634v25.132 c0,18.005,24.006,21.006,24.382,21.381c-10.691,2.813-30.947,8.252-40.888,15.566c-8.252,6.003-11.44,18.005-13.128,22.882 c-0.75,2.063-1.688,5.064-1.688,7.127c0,0,0,9.94,0,19.881s12.941,16.505,18.005,16.505h89.65c4.877,0,18.006-5.627,18.006-16.505 s0-19.881,0-19.881c0-2.251-0.938-5.627-1.688-7.689c-4.313-10.878-4.688-16.316-13.315-22.319 c-9.941-6.939-30.009-12.19-40.512-15.004c0.374-0.563,24.193-4.127,24.193-22.131V85.785 C213.053,66.467,198.986,53.151,181.732,53.151L181.732,53.151z",
          }),
          o.createElement("path", {
            className: "backGuy",
            fill: "rgb(144, 153, 161)",
            d:
              "M84.204,34.396c-20.068,0-36.385,15.38-36.385,38.074v29.258c0,20.818,27.945,24.382,28.32,24.944 c-12.378,3.189-36.01,9.565-47.638,18.006c-9.753,7.127-13.504,21.006-15.379,26.632c-0.75,2.251-1.876,6.002-1.876,8.253  c0,0,0,11.44,0,23.257c0,11.815,15.004,19.13,20.819,19.13h104.279c5.814,0,20.818-6.564,20.818-19.13c0-12.566,0-23.257,0-23.257 c0-2.438-1.125-6.564-2.063-8.815c-5.063-12.566-5.438-18.942-15.566-26.069c-11.628-8.065-34.885-14.067-47.076-17.443 c0.375-0.563,28.133-4.876,28.133-25.695V72.469C120.59,49.775,104.272,34.396,84.204,34.396L84.204,34.396z",
          })
        );
      }
      function P() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_5",
            className: "SVGIcon_Button SVGIcon_ChatBubble",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 64 64",
          },
          o.createElement(
            "g",
            null,
            o.createElement("path", {
              d:
                "M33,5C18.7,5,7.1,16.6,7.1,30.9c0,5.2,1.5,10.1,4.2,14.1c-0.6,3.7-4.5,10.5-6.2,13.5c-1.3,2.2,11.4-3.8,16.3-4.5c3.5,1.8,7.5,2.8,11.7,2.8c14.3,0,25.9-11.6,25.9-25.9S47.3,5,33,5z",
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
            viewBox: "0 0 64 64",
          },
          o.createElement(
            "g",
            null,
            o.createElement("path", {
              d:
                "M40.6,32.7l15.1-15.1c2.6-2.6,2.6-6.7,0-9.3c-2.6-2.6-6.7-2.6-9.3,0L31.3,23.4L16.2,8.3c-2.6-2.6-6.7-2.6-9.3,0c-2.6,2.6-2.6,6.7,0,9.3L22,32.7L6.9,47.8c-2.6,2.6-2.6,6.7,0,9.3c1.3,1.3,3,1.9,4.7,1.9s3.4-0.6,4.7-1.9L31.3,42l15.1,15.1c1.3,1.3,3,1.9,4.7,1.9s3.4-0.6,4.7-1.9c2.6-2.6,2.6-6.7,0-9.3L40.6,32.7z",
            })
          )
        );
      }
      function G() {
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
            viewBox: "0 0 256 256",
          },
          o.createElement(
            "g",
            { className: "leftarrow", opacity: "0" },
            o.createElement("polygon", {
              points: "127.817,4.403 4,128 127.817,251.598",
            })
          ),
          o.createElement(
            "g",
            { className: "rightarrow", opacity: "0" },
            o.createElement("polygon", {
              points: "127.816,4.403 251.633,128 127.816,251.598",
            })
          ),
          o.createElement(
            "g",
            { className: "grabber" },
            o.createElement("polygon", {
              points:
                "145.692,22.132 145.692,234.361 127.817,251.598 110.307,234.361 110.307,22.132 127.817,4.403",
            })
          )
        );
      }
      function U() {
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
            viewBox: "0 0 256 256",
          },
          o.createElement("polygon", {
            className: "pointer",
            points:
              "128,154.979 46.374,230.548 46.374,253.333 209.626,253.333 209.626,230.548 \t",
          }),
          o.createElement("rect", {
            className: "line",
            x: "116.271",
            y: "3.168",
            width: "23.459",
            height: "137.332",
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
            viewBox: "0 0 256 256",
          },
          o.createElement("path", {
            fill: "currentColor",
            d:
              "M213.771,68.659c-4.108-7.066-46.007-7.231-49.293-7.231H128H91.522c-3.286,0-45.186,0.165-49.293,7.231 c-19.555,29.248-27.385,100.263-27.276,104.01c0.238,8.294,2.11,24.583,16.595,35.162c9.201,6.72,22.183,8.709,29.083,3.614 c4.989-3.682,11.995-19.224,19.061-32.204c7.064-12.981,9.202-11.174,12.98-12.159c3.78-0.986,36.066-0.74,36.066-0.74 s30.809-0.247,34.588,0.74c3.777,0.985,5.915-0.822,12.98,12.159c7.064,12.98,14.07,28.522,19.061,32.204 c6.9,5.095,19.882,3.106,29.083-3.614c14.485-10.58,16.356-26.868,16.595-35.162C241.154,168.922,233.325,97.906,213.771,68.659z M67.251,128.14c-14.974,0-27.112-12.137-27.112-27.111c0-14.975,12.137-27.112,27.112-27.112 c14.973,0,27.111,12.137,27.111,27.112C94.362,116.003,82.224,128.14,67.251,128.14z M188.749,128.14 c-14.974,0-27.111-12.137-27.111-27.111c0-14.975,12.138-27.112,27.111-27.112c14.973,0,27.111,12.137,27.111,27.112 C215.86,116.003,203.722,128.14,188.749,128.14z",
          })
        );
      }
      function W(e) {
        var t = e.className;
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: Object(s.a)("SVGIcon_Button", "SVGIcon_MobilePhone", t),
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          o.createElement("path", {
            d:
              "M165.693,45.186H91.368c-7.963,0-14.41,6.447-14.41,14.41V210.9c0,7.964,6.447,14.41,14.41,14.41h74.134 c7.965,0,14.41-6.447,14.41-14.41V59.596C180.102,51.633,173.657,45.186,165.693,45.186z M113.172,57.509h30.717 c1.707,0,3.223,1.327,3.223,3.224c0,1.896-1.328,3.223-3.223,3.223h-30.717c-1.707,0-3.223-1.328-3.223-3.223 C109.949,58.837,111.465,57.509,113.172,57.509z M128.529,213.554c-4.551,0-8.152-3.603-8.152-8.153c0-4.55,3.604-8.152,8.152-8.152 s8.151,3.603,8.151,8.152C136.682,209.761,133.081,213.554,128.529,213.554z M169.105,186.819h-81.15V74.384h81.15V186.819 L169.105,186.819z",
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
            className: "SVGIcon_Button SVGIcon_VR",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          o.createElement("path", {
            d:
              "M224.389,62.411H31.613c-10.147,0-18.36,8.214-18.36,18.36v94.453c0,10.147,8.215,18.359,18.36,18.359h192.775 c10.146,0.241,18.358-7.968,18.358-18.116V80.771C242.747,70.625,234.534,62.411,224.389,62.411z M92.317,175.026H71.646 L35.472,79.832h21.895l25.022,72.484l24.343-72.484h21.895L92.317,175.026z M195.264,175.026l-19.175-32.095h-2.176h-14.279 v32.095h-19.991V79.832h35.63c13.056,0,22.664,2.607,28.831,7.819c6.164,5.215,9.247,12.49,9.247,21.827 c0,7.343-1.61,13.463-4.828,18.359c-3.219,4.896-7.729,8.614-13.531,11.151l22.575,36.038H195.264z",
          }),
          o.createElement("path", {
            d:
              "M187.784,100.298c-2.812-2.312-7.391-3.468-13.735-3.468h-14.415v28.966h15.639c5.257,0,9.36-1.336,12.308-4.012 c2.945-2.673,4.42-6.368,4.42-11.083C192,106.078,190.593,102.61,187.784,100.298z",
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
            viewBox: "0 0 128 255",
          },
          o.createElement("rect", {
            className: "screen",
            x: "7.756",
            y: "5.518",
            fill: "#292D33",
            width: "112.144",
            height: "234.357",
          }),
          o.createElement("path", {
            className: "frame",
            fill: "#3C414B",
            d:
              "M40.334,15.72h47.237c3.957,0,7.164-3.259,7.164-7.28c0-1.113,0.889-2.017,1.984-2.017h9.746 c7.417,0,13.432,6.108,13.432,13.646v206.156c0,7.538-6.015,13.647-13.431,13.647H21.459c-7.417,0-13.429-6.109-13.429-13.647 V20.071c0-7.536,6.013-13.646,13.429-13.646h9.728c1.096,0,1.983,0.903,1.983,2.017C33.17,12.461,36.377,15.72,40.334,15.72 M107.057,0.001H20.87c-9.922,0-17.965,8.174-17.965,18.256v217.505c0,10.082,8.043,18.256,17.965,18.256h86.188 c9.923,0,17.966-8.174,17.966-18.256V18.257C125.022,8.175,116.979,0.001,107.057,0.001",
          }),
          o.createElement("path", {
            fill: "#3C414B",
            d:
              "M0.826,33.349C0.369,33.349,0,33.725,0,34.189v7.616c0,0.464,0.37,0.84,0.826,0.84s0.827-0.376,0.827-0.84 v-7.617C1.653,33.725,1.283,33.349,0.826,33.349",
          }),
          o.createElement("path", {
            fill: "#3C414B",
            d:
              "M0.826,51.56C0.369,51.56,0,51.936,0,52.4v16.8c0,0.465,0.37,0.841,0.826,0.841s0.827-0.376,0.827-0.841 V52.4C1.653,51.936,1.283,51.56,0.826,51.56",
          }),
          o.createElement("path", {
            fill: "#3C414B",
            d:
              "M0.826,75.304C0.369,75.304,0,75.68,0,76.144v15.904c0,0.464,0.37,0.84,0.826,0.84s0.827-0.376,0.827-0.84 V76.144C1.653,75.68,1.283,75.304,0.826,75.304",
          }),
          o.createElement("path", {
            fill: "#3C414B",
            d:
              "M127.617,58.056c-0.457,0-0.827,0.376-0.827,0.84v27.328c0,0.464,0.37,0.84,0.827,0.84 c0.456,0,0.826-0.376,0.826-0.84V58.896C128.443,58.432,128.073,58.056,127.617,58.056",
          })
        );
      }
      function K() {
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
            viewBox: "0 0 256 256",
          },
          o.createElement("polygon", {
            fill: "#3C414B",
            points: "3.167,48.809 127.22,128 252.833,48.809 ",
          }),
          o.createElement("polygon", {
            fill: "#3C414B",
            points: "252.833,203.68 252.833,55.439 185.151,99.131 ",
          }),
          o.createElement("polygon", {
            fill: "#3C414B",
            points:
              "247.958,207.191 180.47,101.472 128.001,134.24 75.142,101.472 7.849,207.191 ",
          }),
          o.createElement("polygon", {
            fill: "#3C414B",
            points: "3.167,203.682 3.167,55.441 70.851,99.132 ",
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
            viewBox: "0 0 256 256",
          },
          o.createElement("path", {
            d:
              "M250.151,128.021c0,67.418-54.604,122.022-122.022,122.022S6.107,195.439,6.107,128.021C6.107,60.604,60.712,6,128.129,6 S250.151,60.604,250.151,128.021z M105.799,192.389c54.117,0,83.707-44.842,83.707-83.707c0-1.282,0-2.563-0.062-3.783 c5.736-4.148,10.739-9.335,14.705-15.252c-5.247,2.318-10.922,3.905-16.901,4.637c6.103-3.661,10.738-9.396,12.936-16.29 c-5.675,3.355-11.959,5.796-18.67,7.138c-5.369-5.734-12.995-9.273-21.477-9.273c-16.228,0-29.406,13.179-29.406,29.407 c0,2.318,0.243,4.576,0.793,6.711c-24.466-1.22-46.125-12.934-60.646-30.75c-2.501,4.332-3.965,9.396-3.965,14.765 c0,10.189,5.186,19.218,13.117,24.465c-4.819-0.122-9.334-1.464-13.3-3.661c0,0.122,0,0.244,0,0.366 c0,14.275,10.128,26.113,23.611,28.857c-2.44,0.672-5.064,1.039-7.748,1.039c-1.892,0-3.723-0.184-5.553-0.551 c3.722,11.714,14.581,20.195,27.455,20.44c-10.067,7.868-22.757,12.566-36.546,12.566c-2.379,0-4.697-0.122-7.016-0.427 C73.707,187.507,89.204,192.389,105.799,192.389",
          })
        );
      }
      function X() {
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
            viewBox: "0 0 256 256",
          },
          o.createElement("path", {
            d:
              "M28.176,8.026L11.763,49.97v171.427h58.358v31.003h32.826l31.003-31.003h47.414l63.829-63.829V8.026H28.176z M223.311,146.625l-36.474,36.474h-58.359l-31.002,31.003v-31.003H48.237V29.91h175.074V146.625z M186.837,71.855v63.829h-21.885 V71.855H186.837z M128.478,71.855v63.829h-21.883V71.855H128.478z",
          })
        );
      }
      function q() {
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
            viewBox: "0 0 256 256",
          },
          o.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M236.979,138.059c0.548,0.078,6.91,0.101,7.772,0.032 c1.215-0.095,1.396,0.068,1.388,0.708c-0.01,0.397,0.012,3.039-2.365,7.32c-3.301,5.948-12.079,10.436-12.55,10.672 c-0.47,0.233-0.53,0.484-0.136,0.75c0.434,0.295,8.068,1.454,9.084,1.611c1.017,0.154,0.637,1.001,0.637,1.001 s-0.704,2.621-2.895,5.36c-2.189,2.738-9.311,6.123-8.583,6.123c0.731,0,7.187,0.159,6.181,1.422 c-3.019,3.786-13.603,9.528-18.43,13.813c-13.388,11.885-13.217,12.864-15.52,15.09c-0.983-3.298-3.02-12.658-3.02-12.658 l-6.105-11.467c4.413,0.18,6.364,0.081,8.952,0.081c9.214,0,17.525-2.185,22.234-5.841l2.371-1.843l-2.911-0.728 c-2.131-0.528-7.121-1.782-11.896-2.979c2.184-0.104,10.803-1.299,14.413-5.339c0.136-0.151,0.276-0.321,0.406-0.494l1.245-1.664 l-2.404-0.735c-2.607-0.799-5.948-1.682-8.517-2.335c3.173-1.572,7.585-3.942,10.048-6.088c4.83-4.203,7.226-9.709,7.322-9.943 l0.9-2.098l-10.772,0.318c1.503-1.483,3.218-3.197,3.939-3.991c1.43-1.571,4.053-6.221,4.198-9.896l0.072-1.787l-1.763,0.288 c-1.979,0.322-5.301,1.279-8.179,2.173c2.025-2.193,4.296-4.767,5.46-6.484c2.687-3.964,2.76-8.371,2.597-12.916l-0.104-2.881 l-2.261,1.79c-2.559,2.028-7.595,5.031-11.097,7.047c1.538-3.644,3.54-8.752,3.813-11.276c0.5-4.681-0.248-10.196-0.248-10.196 l-10.76,9.394c0.885-1.953,1.684-4.013,2.117-5.832c1.735-7.29,0.055-17.892-0.021-18.338l-0.452-2.807l-7.777,7.739 c0.722-3.535,1.465-8.253,1.23-11.789c-0.426-6.321-2.278-10.517-2.359-10.694l-1.01-2.251l-6.465,8.577 c0.231-4.285,0.27-10.24-0.948-13.547c-1.934-5.262-3.651-8.007-3.723-8.121l-1.232-1.958l-3.057,4.85 c0.018-2.967-0.11-6.475-0.69-8.68c-1.202-4.543-2.825-6.396-3.002-6.592l-1.325-1.433l-1.623,2.705 c-0.278-3.19-1.112-7.084-3.343-9.478l-0.814-0.872l-1.012,0.623c-0.327,0.201-0.714,0.497-1.104,0.823 c-0.154-1.135-0.365-2.451-0.639-3.691c0.563-4.733,1.186-10.03,1.206-10.452c0.027-0.547,0.274-0.767,1.017-0.391 c0.898,0.452,3.156,2.064,5.187,6.133c2.036,4.067,3.132,11.324,3.117,12.044c-0.009,0.383,0.291,0.757,0.438,0.151 c0.145-0.607,0.478-7.591,0.623-8.312c0.081-0.383,0.199-0.484,0.737-0.212c0.496,0.249,2.959,2.181,4.899,6.463 c1.179,2.599,1.634,11.946,1.574,12.653c-0.106,1.278,0.313,0.891,0.339,0.883c-0.009,0.013-0.025,0.04-0.03,0.049 c0.03-0.041,0.036-0.049,0.03-0.049c0.573-0.841,4.21-8.99,4.519-9.377c0.313-0.39,0.521-0.395,0.835,0.002 c0.262,0.33,2.095,1.717,4.049,10.088c1.902,8.135,1.949,11.542,1.848,12.682c-0.08,0.86,0.339,0.993,0.731,0.524 c0.389-0.47,5.104-9.201,5.497-9.515c0.389-0.313,0.613-0.309,0.927,0.161c0.312,0.469,2.718,4.762,3.684,11.448 c0.861,5.947,0.608,13.599,0.375,14.381c-0.235,0.782-0.135,1.077,0.493,0.53c0.623-0.548,10.299-8.412,11.004-9.038 c0.703-0.627,1.18-0.65,1.34-0.046c0.172,0.654,0.822,8.654,0.275,15.225c-0.549,6.571-2.626,12.752-2.94,13.145 c-0.312,0.391,0.087,0.712,0.478,0.555c0.394-0.157,11.902-10.018,12.645-10.402c0.711-0.367,1.043,0.005,1.105,0.507 c0.068,0.544,0.966,3.098-0.419,11.269c-0.959,5.65-3.54,11.876-3.855,12.033c-0.313,0.157-0.077,0.336,0.234,0.259 c0.315-0.079,8.324-3.488,8.872-3.567c0.546-0.079,0.671,0.339,0.514,0.808c-0.158,0.469-0.458,6.273-2.534,11.639 c-2.603,6.732-6.056,11.001-6.056,11.001s-0.252,0.519,0.217,0.519s9.266-0.186,9.813-0.263c0.547-0.079,0.627,0.156,0.547,0.704 c-0.077,0.547,0.858,9.116-8.624,14.601C236.524,137.734,236.432,137.979,236.979,138.059z M174.473,24.823 c1.981,3.34,2.018,9.248,1.836,11.469l-0.52,6.238l5.25-8.744c0.395,0.843,0.85,2.003,1.25,3.524 c1.02,3.877,0.422,13.082,0.417,13.173l-0.384,5.752l6.435-10.212c0.628,1.27,1.45,3.097,2.32,5.459 c1.466,3.983,0.772,13.806,0.381,17.257l-0.602,5.308l9.568-12.69c0.493,1.707,1.058,4.21,1.259,7.227 c0.39,5.821-2.272,15.731-2.299,15.83l-1.428,5.26l11.125-11.068c0.377,3.586,0.772,9.774-0.304,14.302 c-1.2,5.057-5.778,12.588-5.823,12.664l-1.806,3.992l16.878-14.09c-0.116,1.366-0.262,2.944-0.423,4.435 c-0.312,2.935-3.954,11.389-5.335,14.399l-1.827,4.002l3.856-2.115c0.381-0.208,8.027-4.41,12.979-7.778 c-0.039,3.484-0.537,6.042-2.139,8.4c-2.189,3.234-9.05,10.198-9.118,10.268l-4.352,4.408l5.861-2.004 c0.08-0.025,6.868-2.34,11.188-3.41c-0.675,2.445-2.208,5.125-3.11,6.118c-1.319,1.449-6.429,6.429-6.48,6.482l-2.682,2.614 l13.475-0.404c-1.06,1.837-2.89,4.549-5.457,6.783c-3.727,3.244-12.956,7.341-13.048,7.383l-3.952,1.746l4.201,1.008 c0.062,0.015,5.637,1.354,10.266,2.67c-3.412,2.191-9.291,3.081-10.948,3.138c-2.06,0.072-11.075,0.125-11.075,0.125l-11.51,0.069 l11.162,2.804c0,0,12.587,3.164,19.486,4.894c-4.398,2.216-10.717,3.493-17.657,3.493c-3.102,0-10.335-0.284-15.048-0.483 c4.064,6.069,7.041,11.004,7.992,13.681c2.813,7.915,6.777,28.269,6.889,48.907c0.039,6.572-1.081,11.649-9.022,11.649 c-0.288,0-0.597-0.038-0.908-0.092c-1.846,0.339-4.351,0.595-5.438-0.095c-1.805-1.149-3.163-2.627-3.544-3.957 c-0.383-1.334-1.146-9.374-3.106-20.675c-1.92-11.046-4.038-19.431-4.237-19.525c-1.535-0.731-9.358-18.45-9.358-18.45 l-37.23-47.615c0,0-20.737,23.917-37.455,47.8c-0.867,1.235-5.994,11.251-9.275,17.989c-0.212,0.437-0.181,0.475-0.281,0.808 c-0.604,2.015-2.396,9.525-4.039,18.994c-1.962,11.301-2.725,19.341-3.105,20.675c-0.384,1.33-1.74,2.808-3.546,3.957 c-1.085,0.689-3.592,0.434-5.437,0.095c-0.313,0.054-0.621,0.092-0.909,0.092c-7.941,0-9.061-5.077-9.024-11.649 c0.114-20.639,4.078-40.992,6.892-48.907c0.95-2.677,3.926-7.611,7.993-13.681c-4.714,0.199-11.946,0.483-15.051,0.483 c-6.939,0-13.26-1.277-17.653-3.493c6.896-1.729,19.486-4.894,19.486-4.894l11.159-2.804l-11.508-0.069 c0,0-9.019-0.053-11.076-0.125c-1.66-0.057-7.537-0.946-10.949-3.138c4.629-1.315,10.202-2.655,10.264-2.67l4.201-1.008l-3.95-1.746 c-0.094-0.042-9.324-4.139-13.049-7.383c-2.566-2.234-4.397-4.946-5.458-6.783l13.477,0.404l-2.684-2.614 c-0.05-0.054-5.16-5.033-6.48-6.482c-0.9-0.993-2.436-3.673-3.108-6.118c4.319,1.069,11.108,3.384,11.188,3.41l5.861,2.004 l-4.352-4.408c-0.069-0.069-6.928-7.033-9.12-10.268c-1.601-2.358-2.099-4.916-2.139-8.4c4.953,3.368,12.601,7.57,12.98,7.778 l3.858,2.115l-1.829-4.002c-1.379-3.011-5.022-11.465-5.334-14.399c-0.161-1.491-0.305-3.068-0.421-4.435l16.877,14.09l-1.806-3.992 c-0.046-0.076-4.622-7.607-5.821-12.664c-1.078-4.528-0.682-10.716-0.307-14.302L58.57,89.672l-1.426-5.26 c-0.025-0.098-2.688-10.008-2.3-15.83c0.203-3.017,0.767-5.52,1.26-7.227l9.566,12.69l-0.601-5.308 c-0.391-3.451-1.083-13.274,0.381-17.257c0.871-2.362,1.693-4.189,2.32-5.459l6.435,10.212l-0.382-5.752 c-0.006-0.091-0.604-9.295,0.416-13.173c0.401-1.521,0.854-2.681,1.251-3.524l5.249,8.744l-0.52-6.238 c-0.181-2.221-0.144-8.129,1.836-11.469c0.596,0.522,1.248,1.148,1.67,1.575l2.215,2.245l0.276-3.142 c0.162-1.838,0.783-7.003,1.703-8.813c1.342-2.635,4.69-3.91,7.104-4.505c-6.691,13.614-36.889,77.59-36.889,122.937 c0,23.658,16.206,23.931,16.368,23.931c4.881,0,6.947-7.914,6.947-11.063V133.45c0-2.744,1.148-2.744,1.835-2.744 c5.807,0,10.48,3.196,13.855,6.69c8.813-11.615,15.81-20.526,15.81-20.526s0.16-0.182,0.248-0.345 c-1.03-2.443-7.165-16.995-7.165-16.995l1.708-43.717c0,0-0.278-3.797,1.044-6.052c1.314-2.245,4.247-3.175,4.247-3.175 l13.307,41.443c0,0-4.107,0.866-4.107,5.585c0,2.982,2.658,4.99,6.227,5.013c3.572-0.022,6.227-2.031,6.227-5.013 c0-4.719-4.109-5.585-4.109-5.585l13.311-41.443c0,0,2.93,0.93,4.245,3.175c1.322,2.255,1.043,6.052,1.043,6.052l1.709,43.717 l-7.309,17.34c0,0,6.997,8.911,15.809,20.526c3.375-3.494,8.048-6.69,13.855-6.69c0.687,0,1.833,0,1.833,2.744v14.538 c0,3.148,2.068,11.063,6.95,11.063c0.159,0,16.367-0.272,16.367-23.931c0-45.347-30.197-109.322-36.888-122.937 c2.412,0.595,5.761,1.87,7.104,4.505c0.92,1.809,1.541,6.975,1.705,8.813l0.275,3.142l2.213-2.245 C173.226,25.972,173.875,25.345,174.473,24.823z M176.157,181.396c-1.644-2.189-41.07-55.856-41.07-55.856l-6.723,8.809 l-0.946-1.233l-0.829-1.082l-5.053-6.594l-0.095,0.101c0,0-39.427,53.667-41.07,55.856c-1.643,2.191-4.777,6.708-6.058,9.322 c-1.279,2.614-8.946,39.306-8.946,42.592c0,2.005,0.041,8.618,0.071,13.47c1.536,0.2,3.411,0.761,4.357,0.125 c1.624-1.093,2.363-2.323,2.491-3.372c0.128-1.048,1.367-12.969,2.69-20.812c1.779-10.547,4.571-19.005,4.415-18.97 c3.213-6.672,8.966-17.938,9.887-19.252c17.808-25.439,38.994-49.947,38.994-49.947s21.166,24.502,38.978,49.947 c0.921,1.313,6.672,12.58,9.888,19.252c-0.158-0.035,2.635,8.423,4.414,18.97c1.322,7.843,2.562,19.764,2.688,20.812 c0.131,1.049,0.87,2.279,2.493,3.372c0.944,0.636,2.818,0.075,4.355-0.125c0.032-4.852,0.073-11.465,0.073-13.47 c0-3.286-7.667-39.978-8.948-42.592C180.936,188.104,177.801,183.588,176.157,181.396z M82.538,21.517l-1.014-0.623l-0.813,0.872 c-2.231,2.394-3.063,6.287-3.342,9.478l-1.624-2.705l-1.323,1.433c-0.179,0.197-1.801,2.049-3.004,6.592 c-0.581,2.205-0.709,5.712-0.689,8.68l-3.057-4.85l-1.234,1.958c-0.072,0.114-1.787,2.859-3.722,8.121 c-1.22,3.307-1.179,9.262-0.949,13.547l-6.463-8.577l-1.012,2.251c-0.08,0.177-1.934,4.373-2.359,10.694 c-0.234,3.536,0.51,8.253,1.231,11.789l-7.778-7.739l-0.453,2.807c-0.073,0.446-1.754,11.048-0.02,18.338 c0.433,1.819,1.231,3.879,2.117,5.832l-10.759-9.394c0,0-0.749,5.515-0.248,10.196c0.271,2.523,2.272,7.632,3.813,11.276 c-3.503-2.016-8.539-5.019-11.099-7.047l-2.259-1.79l-0.106,2.881c-0.162,4.545-0.087,8.952,2.6,12.916 c1.161,1.717,3.433,4.291,5.459,6.484c-2.877-0.894-6.201-1.851-8.179-2.173l-1.763-0.288l0.071,1.787 c0.148,3.675,2.771,8.324,4.198,9.896c0.723,0.794,2.436,2.508,3.941,3.991L21.93,137.83l0.896,2.098 c0.1,0.234,2.493,5.74,7.324,9.943c2.464,2.146,6.876,4.516,10.047,6.088c-2.57,0.653-5.908,1.536-8.518,2.335l-2.402,0.735 l1.246,1.664c0.13,0.173,0.27,0.343,0.407,0.494c3.608,4.04,12.229,5.234,14.412,5.339c-4.774,1.197-9.767,2.451-11.896,2.979 l-2.911,0.728l2.371,1.843c4.708,3.656,13.02,5.841,22.233,5.841c2.588,0,4.539,0.099,8.954-0.081l-6.105,11.467 c0,0-2.038,9.36-3.02,12.658c-2.304-2.226-2.133-3.205-15.52-15.09c-4.829-4.284-15.411-10.026-18.429-13.813 c-1.005-1.263,5.449-1.422,6.179-1.422c0.73,0-6.393-3.385-8.582-6.123c-2.191-2.739-2.895-5.36-2.895-5.36s-0.38-0.847,0.637-1.001 c1.018-0.157,8.65-1.316,9.084-1.611c0.395-0.266,0.332-0.517-0.137-0.75c-0.469-0.236-9.248-4.724-12.548-10.672 c-2.375-4.281-2.357-6.923-2.364-7.32c-0.01-0.64,0.17-0.803,1.385-0.708c0.862,0.068,7.226,0.046,7.774-0.032 c0.546-0.08,0.453-0.324,0.019-0.576c-9.483-5.484-8.546-14.054-8.624-14.601c-0.079-0.548,0-0.783,0.548-0.704 c0.546,0.077,9.342,0.263,9.812,0.263c0.469,0,0.218-0.519,0.218-0.519s-3.452-4.27-6.056-11.001 c-2.077-5.366-2.377-11.169-2.533-11.639c-0.157-0.469-0.034-0.887,0.514-0.808c0.549,0.079,8.558,3.488,8.87,3.567 c0.313,0.077,0.548-0.103,0.235-0.259c-0.314-0.157-2.896-6.383-3.855-12.033c-1.384-8.17-0.488-10.725-0.42-11.269 c0.063-0.502,0.397-0.874,1.105-0.507c0.743,0.385,12.255,10.245,12.646,10.402c0.391,0.157,0.79-0.164,0.477-0.555 c-0.313-0.392-2.392-6.574-2.938-13.145c-0.548-6.571,0.1-14.571,0.274-15.225c0.161-0.604,0.635-0.581,1.339,0.046 c0.704,0.626,10.381,8.489,11.006,9.038c0.625,0.547,0.727,0.252,0.492-0.53c-0.235-0.782-0.484-8.435,0.375-14.381 c0.965-6.686,3.372-10.979,3.685-11.448s0.536-0.474,0.927-0.161c0.391,0.313,5.106,9.045,5.497,9.515 c0.391,0.469,0.809,0.336,0.732-0.524c-0.104-1.14-0.057-4.547,1.845-12.682c1.956-8.371,3.789-9.758,4.052-10.088 c0.313-0.396,0.521-0.392,0.833-0.002c0.309,0.387,3.945,8.536,4.519,9.377c-0.005,0,0,0.008,0.031,0.049 c-0.007-0.009-0.022-0.036-0.031-0.049c0.025,0.008,0.446,0.395,0.34-0.883c-0.058-0.707,0.396-10.055,1.574-12.653 c1.941-4.282,4.404-6.214,4.899-6.463c0.54-0.272,0.658-0.171,0.737,0.212c0.146,0.721,0.478,7.705,0.625,8.312 c0.146,0.606,0.444,0.232,0.437-0.151c-0.015-0.72,1.081-7.977,3.115-12.044c2.033-4.069,4.292-5.681,5.188-6.133 c0.742-0.376,0.989-0.156,1.018,0.391c0.022,0.422,0.645,5.719,1.206,10.452c-0.272,1.24-0.484,2.556-0.639,3.691 C83.251,22.014,82.866,21.718,82.538,21.517z M127.35,141.814c-1.158,12.032-4.978,23.045-6.326,29.486 c-1.643,7.849-4.788,18.061-6.793,20.931c-4.433,6.343-18.036,18.547-20.403,19.732c-1.094,0.547-6.376-4.115-6.56-4.846 c-0.182-0.728,2.883-3.993,2.154-3.627c-0.731,0.364-4.104,0.906-5.06,0.87c-0.753-0.026,0.633-2.728,0.633-2.728 s-1.484,2.217-3.021,2.947c-0.03,0.015,9.433-18.119,9.433-18.119S127.52,140.043,127.35,141.814z M119.7,169.39l3.104-10.647 l-1.869-0.559l-3.152,10.656L119.7,169.39z M114.072,167.242l4.687-10.051l-1.764-0.838l-4.735,10.055L114.072,167.242z  M126.961,159.319l-0.82,11.06l-1.991-0.139l0.867-11.079L126.961,159.319z M131.727,170.391l-1.986,0.167l-0.828-11.078 l1.944-0.144L131.727,170.391z M164.422,186.462c0,0,9.463,18.134,9.434,18.119c-1.54-0.73-3.021-2.947-3.021-2.947 s1.384,2.701,0.633,2.728c-0.957,0.036-4.33-0.506-5.06-0.87c-0.731-0.366,2.334,2.899,2.153,3.627 c-0.185,0.73-5.467,5.393-6.56,4.846c-2.368-1.186-15.973-13.39-20.404-19.732c-2.007-2.87-5.149-13.082-6.792-20.931 c-1.349-6.441-4.621-17.127-5.778-29.16C128.854,140.373,164.422,186.462,164.422,186.462z M142.029,167.242l1.813-0.834 l-4.735-10.055l-1.762,0.838L142.029,167.242z M136.402,169.39l1.917-0.55l-3.152-10.656l-1.868,0.559L136.402,169.39z",
          })
        );
      }
      function J() {
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
            viewBox: "0 0 256 256",
          },
          o.createElement("path", {
            className: "CCBox",
            fill: "none",
            stroke: "#000000",
            strokeWidth: "10",
            strokeMiterlimit: "10",
            d:
              "M238,210c0,6.627-5.373,12-12,12H30 c-6.627,0-12-5.373-12-12V46c0-6.627,5.373-12,12-12h196c6.627,0,12,5.373,12,12V210z",
          }),
          o.createElement("path", {
            className: "C1",
            d:
              "M90.505,173.207c11.431,0,22.338-4.276,30.72-12.036c2.6-2.407,2.753-6.47,0.347-9.068c-2.41-2.604-6.47-2.757-9.072-0.349 c-5.998,5.559-13.811,8.62-21.995,8.62c-17.852,0-32.373-14.524-32.373-32.372c0-17.849,14.521-32.373,32.373-32.373 c8.177,0,15.981,3.055,21.979,8.603c2.603,2.407,6.662,2.25,9.072-0.353c2.407-2.602,2.249-6.662-0.353-9.068 c-8.375-7.751-19.276-12.019-30.694-12.019c-24.931,0-45.209,20.281-45.209,45.209C45.3,152.93,65.574,173.207,90.505,173.207z",
          }),
          o.createElement("path", {
            className: "C1",
            d:
              "M177.926,173.207c11.431,0,22.338-4.276,30.721-12.036c2.6-2.407,2.754-6.47,0.347-9.068 c-2.41-2.604-6.47-2.757-9.072-0.349c-5.998,5.559-13.812,8.62-21.995,8.62c-17.852,0-32.372-14.524-32.372-32.372 c0-17.849,14.521-32.373,32.372-32.373c8.178,0,15.981,3.055,21.979,8.603c2.604,2.407,6.663,2.25,9.072-0.353 c2.407-2.602,2.25-6.662-0.353-9.068c-8.375-7.751-19.277-12.019-30.694-12.019c-24.932,0-45.209,20.281-45.209,45.209 C132.721,152.93,152.996,173.207,177.926,173.207z",
          })
        );
      }
      function Q() {
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
            viewBox: "0 0 256 256",
          },
          o.createElement("path", {
            d:
              "M236.445,23.522c-1.085-2.35-3.438-3.855-6.025-3.855H25.58c-2.586,0-4.936,1.501-6.024,3.855 c-1.08,2.349-0.698,5.112,0.983,7.083l80.328,94.039v104.181c0,2.74,1.682,5.194,4.237,6.188c0.778,0.3,1.588,0.445,2.392,0.445 c1.832,0,3.626-0.762,4.91-2.17l41.012-45.13c1.111-1.219,1.724-2.811,1.724-4.459v-59.054l80.325-94.04 C237.144,28.634,237.526,25.867,236.445,23.522z",
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
            viewBox: "0 0 256 256",
          },
          o.createElement("path", {
            d:
              "M16.757,233.795c-1.324,3.973,2.455,7.752,6.427,6.428l50.912-16.971l-40.368-40.367L16.757,233.795z",
          }),
          o.createElement("rect", {
            x: "83.614",
            y: "75.466",
            transform:
              "matrix(-0.7071 -0.7071 0.7071 -0.7071 93.7468 324.5916)",
            width: "60.971",
            height: "134.827",
          }),
          o.createElement("rect", {
            x: "149.28",
            y: "68.116",
            transform:
              "matrix(-0.7071 -0.7071 0.7071 -0.7071 252.0431 259.4951)",
            width: "60.971",
            height: "18.862",
          }),
          o.createElement("path", {
            d:
              "M233.545,37.803l-14.368-14.369c-7.928-7.928-20.846-7.897-28.809,0.064l-14.305,14.307l43.112,43.111l14.306-14.305 C241.511,58.582,241.513,45.771,233.545,37.803z",
          })
        );
      }
      function $() {
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
            viewBox: "0 0 256 256",
          },
          o.createElement("polyline", {
            className: "I",
            points:
              "86.883,110.957 152.894,110.957 152.894,181.406 177.117,181.406 177.117,202.485 86.883,202.485 86.883,181.775 109.441,181.775 109.441,130.372 86.883,130.372 ",
          }),
          o.createElement("circle", {
            className: "I",
            cx: "128.47",
            cy: "67.607",
            r: "25.517",
          }),
          o.createElement("circle", {
            fill: "none",
            stroke: "#000000",
            strokeWidth: "14",
            strokeMiterlimit: "10",
            cx: "128",
            cy: "128",
            r: "116.833",
          })
        );
      }
      function ee() {
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
            viewBox: "0 0 100 100",
          },
          o.createElement("path", {
            d:
              "M82.5,10.8c-0.8-0.7-1.9-0.8-2.9-0.7l-7.2,1.8c-7.3,1.8-15.1,1.4-22.3-1.2h-0.1c-7.8-2.9-16.2-3.5-24.2-1.9l-2.8,0.6V8.5  c0-1.9-1.5-3.5-3.5-3.5S16,6.5,16,8.5v5.1v38.8v39.2c0,1.9,1.5,3.5,3.5,3.5s3.5-1.5,3.5-3.5V55.1l4-0.8c6.9-1.4,14-0.8,20.5,1.7  l0.3,0.1c5,1.8,10.2,2.8,15.5,2.8c3.6,0,7.3-0.4,10.9-1.4l7.2-1.8c1.5-0.4,2.6-1.8,2.6-3.3V13.6C83.9,12.5,83.3,11.5,82.5,10.8z",
          })
        );
      }
      function te() {
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
            viewBox: "0 0 256 256",
          },
          o.createElement("path", {
            d:
              "M171.176,136.219c-5.516-5.516-14.166-5.948-20.223-1.406L92.125,75.984l-8.002-29.738c-0.324-1.406-1.73-3.027-3.028-3.785 L46.49,24.186c-1.298-0.648-3.136-0.433-4.218,0.648L25.295,41.813c-0.974,0.973-1.298,2.92-0.649,4.217l18.276,34.605 c0.648,1.297,2.379,2.596,3.785,3.027l29.739,8.003l58.828,58.828c-4.542,6.056-4.109,14.707,1.405,20.222l56.882,56.882 c6.056,6.056,15.896,6.056,21.845,0l12.544-12.544c6.056-6.056,6.056-15.788,0-21.845L171.176,136.219z",
          }),
          o.createElement("path", {
            d:
              "M153.116,122.16c2.271-0.648,4.65-0.973,7.138-0.973c0.865,0,1.622,0,2.486,0.107l26.928-26.927 c12.328,2.92,25.846-0.324,35.361-9.948c9.517-9.625,12.869-23.034,9.949-35.254l-20.33,20.33l-21.845-5.84l-5.84-21.952 l20.331-20.33c-12.221-2.92-25.738,0.324-35.254,9.948c-9.625,9.625-12.869,23.143-9.949,35.362L129.866,98.91L153.116,122.16z",
          }),
          o.createElement("path", {
            d:
              "M99.371,129.406l-32.226,32.226c-12.328-2.92-25.845,0.324-35.362,9.948c-9.517,9.625-12.869,23.034-9.949,35.254 l20.331-20.33l21.953,5.84l5.839,21.952l-20.331,20.33c12.22,2.92,25.737-0.324,35.254-9.949 c9.625-9.624,12.869-23.142,9.949-35.361l27.035-27.035c-0.325-3.136,0-6.38,0.865-9.517L99.371,129.406z",
          })
        );
      }
      function ne() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_AppleLogo",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          o.createElement("path", {
            d:
              "M138.365,26.557c16.139-21.272,38.578-21.376,38.578-21.376s3.336,19.999-12.696,39.266 c-17.12,20.572-36.58,17.206-36.58,17.206S124.012,45.473,138.365,26.557z",
          }),
          o.createElement("path", {
            d:
              "M129.719,75.662c8.305,0,23.713-11.413,43.771-11.413c34.527,0,48.109,24.566,48.109,24.566s-26.565,13.583-26.565,46.54 c0,37.179,33.093,49.991,33.093,49.991s-23.134,65.112-54.38,65.112c-14.353,0-25.509-9.672-40.631-9.672 c-15.41,0-30.702,10.032-40.662,10.032c-28.533,0-64.581-61.765-64.581-111.414c0-48.849,30.512-74.474,59.13-74.474 C105.61,64.933,120.047,75.662,129.719,75.662z",
          })
        );
      }
      function re() {
        return o.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            className: "SVGIcon_Button SVGIcon_WindowsLogo",
            x: "0px",
            y: "0px",
            width: "100%",
            height: "100%",
            viewBox: "0 0 88 88",
          },
          o.createElement("path", {
            d:
              "m0,12.402,35.687-4.8602,0.0156,34.423-35.67,0.20313zm35.67,33.529,0.0277,34.453-35.67-4.9041-0.002-29.78zm4.3261-39.025,47.318-6.906,0,41.527-47.318,0.37565zm47.329,39.349-0.0111,41.34-47.318-6.6784-0.0663-34.739z",
          })
        );
      }
      function oe() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_3_copy",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 256 256",
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
                "M206.3,36.6c-19.4,0-35.8,14.1-40.3,33H24.8c-6,0-10.8,4.8-10.8,10.8s4.8,10.8,10.8,10.8h141.3\r\n\t\t\t\tc4.7,18.6,20.9,32.4,40.2,32.4c22.9,0,41.5-19.5,41.5-43.5C247.9,56.2,229.2,36.6,206.3,36.6z M206.3,109.7\r\n\t\t\t\tc-15.2,0-27.5-13.2-27.5-29.5c0-16.3,12.4-29.5,27.5-29.5s27.5,13.2,27.5,29.5C233.9,96.4,221.5,109.7,206.3,109.7z",
            }),
            o.createElement("path", {
              d:
                "M230.4,157.3H107.9c-4.6-14.6-18.3-25.2-34.3-25.2s-29.7,10.6-34.3,25.2H24.8c-6,0-10.8,4.8-10.8,10.8\r\n\t\t\t\tS18.9,179,24.8,179h14.3c4.6,14.6,18.3,25.2,34.3,25.2s29.7-10.6,34.3-25.2h122.5c6,0,10.8-4.8,10.8-10.8S236.4,157.3,230.4,157.3z\r\n\t\t\t\tM73.5,189.8c-8,0-14.9-4.3-18.7-10.8l0,0c-0.7-1.2-1.3-2.4-1.7-3.7c0,0,0-0.1,0-0.1c-0.1-0.4-0.2-0.8-0.4-1.2c0-0.1,0-0.1,0-0.2\r\n\t\t\t\tc-0.2-0.8-0.4-1.7-0.5-2.6c0-0.1,0-0.2,0-0.3c0-0.3-0.1-0.7-0.1-1c0-0.1,0-0.2,0-0.4c0-0.4,0-0.9,0-1.3s0-0.9,0-1.3\r\n\t\t\t\tc0-0.1,0-0.2,0-0.4c0-0.3,0.1-0.7,0.1-1c0-0.1,0-0.2,0-0.3c0.1-0.9,0.3-1.8,0.5-2.6c0-0.1,0-0.1,0-0.2c0.1-0.4,0.2-0.8,0.4-1.2\r\n\t\t\t\tc0,0,0-0.1,0-0.1c0.5-1.3,1-2.6,1.7-3.7c3.7-6.4,10.7-10.8,18.7-10.8c8,0,14.9,4.3,18.7,10.8c0.7,1.2,1.3,2.4,1.7,3.7\r\n\t\t\t\tc0,0,0,0.1,0,0.1c0.1,0.4,0.3,0.8,0.4,1.2c0,0.1,0,0.1,0,0.2c0.2,0.8,0.4,1.7,0.5,2.6c0,0.1,0,0.2,0,0.3c0,0.3,0.1,0.7,0.1,1\r\n\t\t\t\tc0,0.1,0,0.2,0,0.4c0,0.4,0,0.9,0,1.3s0,0.9,0,1.3c0,0.1,0,0.2,0,0.4c0,0.3-0.1,0.7-0.1,1c0,0.1,0,0.2,0,0.3\r\n\t\t\t\tc-0.1,0.9-0.3,1.8-0.5,2.6c0,0.1,0,0.1,0,0.2c-0.1,0.4-0.2,0.8-0.4,1.2c0,0,0,0.1,0,0.1c-0.5,1.3-1,2.6-1.7,3.7l0,0\r\n\t\t\t\tC88.5,185.4,81.5,189.8,73.5,189.8z",
            })
          )
        );
      }
      function ie() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 256 256",
          },
          o.createElement("circle", { cx: "126", cy: "134", r: "20.6" }),
          o.createElement("circle", { cx: "189.4", cy: "134", r: "20.6" }),
          o.createElement("circle", { cx: "62.6", cy: "134", r: "20.6" })
        );
      }
      function ae() {
        return o.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 18 18",
            version: "1.1",
            x: "0px",
            y: "0px",
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: "1.41421",
          },
          o.createElement("path", {
            d:
              "M12.621,2.491c-0.021,0.019 -0.042,0.039 -0.063,0.06l-5.125,5.201c-0.579,0.587 -0.575,1.527 -0.001,2.109l0.691,0.702c0.576,0.584 1.505,0.582 2.079,-0.001l5.126,-5.201c0.021,-0.021 0.04,-0.042 0.059,-0.063l1.573,1.595c0.573,0.582 1.04,0.386 1.04,-0.439l0,-5.957c0,-0.276 -0.219,-0.497 -0.49,-0.497l-5.87,0c-0.82,0 -1.008,0.473 -0.434,1.056l1.415,1.435Zm-9.618,-2.491c-1.665,0 -3.003,1.344 -3.003,3.003l0,11.994c0,1.665 1.344,3.003 3.003,3.003l11.994,0c1.665,0 3.003,-1.344 3.003,-3.003l0,-7.746l0,4.249l-3,-2.488l0,4.492c0,0.826 -0.671,1.496 -1.496,1.496l-9.008,0c-0.826,0 -1.496,-0.671 -1.496,-1.496l0,-9.008c0,-0.826 0.671,-1.496 1.496,-1.496l4.504,0l-2.5,-3l4.249,0l-7.746,0Z",
          })
        );
      }
      function se() {
        return o.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 100 100",
            x: "0px",
            y: "0px",
          },
          o.createElement("title", null, "help and info"),
          o.createElement("path", {
            d:
              "M50,7A43,43,0,1,1,7,50,43,43,0,0,1,50,7m0-7a50,50,0,1,0,50,50A50,50,0,0,0,50,0h0Z",
          }),
          o.createElement("path", {
            d:
              "M50.79,25a45.51,45.51,0,0,1,5.29.87c5.33,1.51,8.5,5.77,8.9,11.43a10.4,10.4,0,0,1-4.21,9.5c-1.42,1.1-2.91,2.1-4.34,3.18a7.06,7.06,0,0,0-3.18,6.3,4,4,0,0,1-2.88,4,4.42,4.42,0,0,1-5.18-1.55,4.19,4.19,0,0,1-.59-2.07A13.89,13.89,0,0,1,50.3,45,41.55,41.55,0,0,0,54.83,41,5,5,0,0,0,56,38.19c0.23-2.83-1.59-4.65-4.52-4.84-3.54-.23-6.52.69-8.6,3.82a4.19,4.19,0,0,1-4.35,2c-3-.5-4.29-2.94-3.06-5.75a12.84,12.84,0,0,1,6.25-6.2A21.71,21.71,0,0,1,50.79,25Z",
          }),
          o.createElement("path", {
            d:
              "M53.78,69.88C53.8,73.09,52,75,48.85,75s-5.25-1.84-5.26-4.53c0-3.73,1.67-5.59,5-5.69C51.3,64.7,54.12,66.36,53.78,69.88Z",
          })
        );
      }
      function ce(e) {
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
            viewBox: "0 0 409.6 409.6",
          },
          o.createElement("path", {
            d:
              "M109.9,96.2H302c16.3,0,29.6,13,29.6,29v101.4c0,16-13.2,29-29.6,29h-90.1l-57.6,57.9L138,255.6h-28.1\r\n\t\t\t\tc-16.3,0-29.6-13-29.6-29V125.2C80.4,109.2,93.6,96.2,109.9,96.2z",
          })
        );
      }
      function le(e) {
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
            viewBox: "0 0 409.6 409.6",
          },
          o.createElement("path", {
            d:
              "M225.1,328.8c-12.6,0-15.3-1.9-29.5-5.3c-18.7-4.8-35.3-6.3-51-5.3c-3.5,0.5-7.1,0.5-10.6,1l-7.6,1\r\n\t\t\t\tc-2.5,0.5-4.5-1-5.6-3.4c-12.6-36.2-16.6-74.7-11.6-117.6c0-2.4,2-3.9,4.5-4.3l4.5-0.5c3.5-0.5,6.6-1,10.1-1c5-0.5,9.6-2.9,13.1-7.2\r\n\t\t\t\tl0.5-1c0.5-0.5,1-1.4,1.5-2.4c9.1-14.5,22.2-25.6,36.8-37.6c7.6-6.3,14.1-12.5,20.2-18.3c6.6-7.2,10.1-16.4,10.6-27\r\n\t\t\t\tc0-9.6,5.6-15.4,16.1-16.4c13.6-1,22.7,3.9,27.8,15.9c7.6,16.4-4.4,33.3-13.9,50.6c-2,3.9-4.5,7.2-7.1,10.6c-1,1.4-2,2.9-3,4.3\r\n\t\t\t\tl-3.5,4.8c-1.5,1.9-3,3.9-4.5,6.3c4,0,7.6,0,11.6,0c11.1-0.5,34.6-0.5,46.7,1.4c7.6,1,13.6,4.8,17.7,10.1c3.5,4.8,4.5,11.1,3,17.8\r\n\t\t\t\tc-0.5,2.9-2,5.8-5,9.2c-1.5,1.9-14.4,3.9-16.5,5.3h10.9c2.5,1.9,5,3.9,7.1,6.3c4,4.3,5.6,9.2,5,14.9c-0.5,5.3-3,10.6-7.6,14\r\n\t\t\t\tc-2.5,1.9-16,3.9-18.5,5.3c5,5.3,18,12.1,16.5,19.3c-2,9.6-7.6,15.4-18.2,17.8c2.5,3.9,3,8.7,1.5,13.5c-0.5,2.4-1.5,4.3-2.5,6.3\r\n\t\t\t\tc-2.5,5.3-6.6,8.2-13.1,9.6C253.2,327.8,233.7,328.8,225.1,328.8z",
          })
        );
      }
      function ue(e) {
        return o.createElement(
          "svg",
          {
            className: e.className,
            height: "100px",
            width: "100px",
            version: "1.1",
            x: "0px",
            y: "0px",
            viewBox: "0 0 100 100",
            enableBackground: "new 0 0 100 100",
          },
          o.createElement(
            "g",
            { display: "none" },
            o.createElement("rect", {
              x: "-660.877",
              y: "-37.172",
              display: "inline",
              width: "1370.931",
              height: "1263.231",
            })
          ),
          o.createElement(
            "g",
            null,
            o.createElement("path", {
              d:
                "M34.367,31.803c0.49,0.443,1.228,0.404,1.698-0.06c3.869-3.823,8.894-6.045,14.425-6.337   c11.044-0.495,20.558,7.281,22.518,17.866c0.133,0.717-0.429,1.379-1.157,1.413l-4.83,0.223c-1.092,0.05-1.578,1.397-0.769,2.133   l13.999,12.733c0.502,0.456,1.279,0.419,1.734-0.084L94.68,45.676c0.733-0.809,0.123-2.1-0.967-2.048l-6.486,0.309   c-1.82-18.94-18.238-33.327-37.455-32.439c-9.122,0.484-17.619,4.28-23.984,10.844c-0.48,0.495-0.439,1.299,0.072,1.762   L34.367,31.803z",
            }),
            o.createElement("path", {
              d:
                "M6.229,53.869h6.11c0.622,0,1.132,0.468,1.207,1.085c1.029,8.437,4.787,16.288,10.854,22.357   c7.249,7.217,16.85,11.23,27.047,11.23c9.778,0.07,19.009-3.568,26.131-10.258c0.502-0.471,0.502-1.276,0.015-1.763l-9.587-9.587   c-4.379,4.389-10.288,6.838-16.559,6.838c-6.224,0-12.068-2.506-16.541-6.934c-3.179-3.179-5.282-7.178-6.168-11.481   c-0.154-0.746,0.447-1.436,1.209-1.436h5.183c1.092,0,1.639-1.319,0.869-2.092L21.572,37.352c-0.478-0.48-1.255-0.481-1.734-0.003   L5.363,51.773C4.589,52.545,5.135,53.869,6.229,53.869z",
            })
          )
        );
      }
      function pe(e) {
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
            xmlns: "http://www.w3.org/2000/svg",
          },
          o.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "16",
            fill: "#BDCCDB",
          }),
          o.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "16",
            fill: "url(#paint0_linear)",
          }),
          o.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "14.2745",
            fill: "#98A8B7",
          }),
          o.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "14.2745",
            fill: "url(#paint1_linear)",
          }),
          o.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "14.2745",
            stroke: "#7A92A9",
          }),
          o.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "11.1309",
            fill: "#BDCCDB",
          }),
          o.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "11.1309",
            fill: "url(#paint2_linear)",
          }),
          o.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "10.2107",
            fill: "#5792C8",
          }),
          o.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "10.2107",
            fill: "url(#paint3_linear)",
          }),
          o.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M20.6016 17.9523C22.8425 17.9523 24.6591 16.1357 24.6591 13.8948C24.6591 11.6539 22.8425 9.83727 20.6016 9.83727C18.3607 9.83727 16.5441 11.6539 16.5441 13.8948C16.5441 13.9609 16.5457 14.0266 16.5488 14.0919L14.0477 17.6314C14.0205 17.6306 13.9933 17.6303 13.966 17.6303C13.2606 17.6303 12.6127 17.8767 12.1038 18.2882L6.33398 15.9235C6.33398 17.4638 6.62381 19.1438 6.97803 19.5302C7.16531 19.7345 9.1256 20.4564 11.0502 21.127C11.3013 22.5093 12.5112 23.5574 13.966 23.5574C15.6027 23.5574 16.9296 22.2306 16.9296 20.5939C16.9296 20.5326 16.9277 20.4717 16.924 20.4113L20.2613 17.9382C20.3735 17.9475 20.487 17.9523 20.6016 17.9523ZM12.1995 21.5232C12.5338 22.1572 13.1994 22.5894 13.966 22.5894C15.0681 22.5894 15.9615 21.696 15.9615 20.5939C15.9615 19.4917 15.0681 18.5983 13.966 18.5983C13.7007 18.5983 13.4475 18.65 13.216 18.744L14.1914 19.1438L14.1886 19.1617C14.8832 19.2688 15.4151 19.8692 15.4151 20.5939C15.4151 21.3942 14.7663 22.043 13.966 22.043C13.8901 22.043 13.8157 22.0371 13.743 22.0259L13.7405 22.042L13.6136 21.9998C13.5414 21.9818 13.4713 21.9583 13.4038 21.9299C13.0402 21.8084 12.6309 21.6704 12.1995 21.5232ZM20.6016 16.5998C22.0956 16.5998 23.3066 15.3887 23.3066 13.8948C23.3066 12.4008 22.0956 11.1898 20.6016 11.1898C19.1077 11.1898 17.8966 12.4008 17.8966 13.8948C17.8966 15.3887 19.1077 16.5998 20.6016 16.5998ZM22.4 13.8948C22.4 14.888 21.5948 15.6932 20.6016 15.6932C19.6083 15.6932 18.8032 14.888 18.8032 13.8948C18.8032 12.9015 19.6083 12.0964 20.6016 12.0964C21.5948 12.0964 22.4 12.9015 22.4 13.8948Z",
            fill: "#BDCCDB",
          }),
          o.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M20.6016 17.9523C22.8425 17.9523 24.6591 16.1357 24.6591 13.8948C24.6591 11.6539 22.8425 9.83727 20.6016 9.83727C18.3607 9.83727 16.5441 11.6539 16.5441 13.8948C16.5441 13.9609 16.5457 14.0266 16.5488 14.0919L14.0477 17.6314C14.0205 17.6306 13.9933 17.6303 13.966 17.6303C13.2606 17.6303 12.6127 17.8767 12.1038 18.2882L6.33398 15.9235C6.33398 17.4638 6.62381 19.1438 6.97803 19.5302C7.16531 19.7345 9.1256 20.4564 11.0502 21.127C11.3013 22.5093 12.5112 23.5574 13.966 23.5574C15.6027 23.5574 16.9296 22.2306 16.9296 20.5939C16.9296 20.5326 16.9277 20.4717 16.924 20.4113L20.2613 17.9382C20.3735 17.9475 20.487 17.9523 20.6016 17.9523ZM12.1995 21.5232C12.5338 22.1572 13.1994 22.5894 13.966 22.5894C15.0681 22.5894 15.9615 21.696 15.9615 20.5939C15.9615 19.4917 15.0681 18.5983 13.966 18.5983C13.7007 18.5983 13.4475 18.65 13.216 18.744L14.1914 19.1438L14.1886 19.1617C14.8832 19.2688 15.4151 19.8692 15.4151 20.5939C15.4151 21.3942 14.7663 22.043 13.966 22.043C13.8901 22.043 13.8157 22.0371 13.743 22.0259L13.7405 22.042L13.6136 21.9998C13.5414 21.9818 13.4713 21.9583 13.4038 21.9299C13.0402 21.8084 12.6309 21.6704 12.1995 21.5232ZM20.6016 16.5998C22.0956 16.5998 23.3066 15.3887 23.3066 13.8948C23.3066 12.4008 22.0956 11.1898 20.6016 11.1898C19.1077 11.1898 17.8966 12.4008 17.8966 13.8948C17.8966 15.3887 19.1077 16.5998 20.6016 16.5998ZM22.4 13.8948C22.4 14.888 21.5948 15.6932 20.6016 15.6932C19.6083 15.6932 18.8032 14.888 18.8032 13.8948C18.8032 12.9015 19.6083 12.0964 20.6016 12.0964C21.5948 12.0964 22.4 12.9015 22.4 13.8948Z",
            fill: "url(#paint4_linear)",
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
                gradientUnits: "userSpaceOnUse",
              },
              o.createElement("stop", {
                stopColor: "white",
                stopOpacity: "0.54",
              }),
              o.createElement("stop", {
                offset: "1",
                stopColor: "white",
                stopOpacity: "0",
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
                gradientUnits: "userSpaceOnUse",
              },
              o.createElement("stop", {
                stopColor: "white",
                stopOpacity: "0.25",
              }),
              o.createElement("stop", {
                offset: "1",
                stopColor: "white",
                stopOpacity: "0",
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
                gradientUnits: "userSpaceOnUse",
              },
              o.createElement("stop", {
                stopColor: "white",
                stopOpacity: "0.65",
              }),
              o.createElement("stop", {
                offset: "1",
                stopColor: "white",
                stopOpacity: "0",
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
                gradientUnits: "userSpaceOnUse",
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
                gradientUnits: "userSpaceOnUse",
              },
              o.createElement("stop", {
                stopColor: "white",
                stopOpacity: "0.44",
              }),
              o.createElement("stop", {
                offset: "1",
                stopColor: "white",
                stopOpacity: "0",
              })
            )
          )
        );
      }
      function de() {
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
            version: "1.1",
          },
          o.createElement(
            "g",
            null,
            o.createElement("path", {
              d:
                "M16.929,30.115 M84.446,84.262c0-37.271-30.323-67.613-67.587-67.613l0,0l0.069,13.467   c29.777,0.039,53.995,24.256,54.051,54.042L84.446,84.262z",
            }),
            o.createElement("path", {
              d:
                "M16.843,53.089 M61.472,84.262c0-24.616-20.026-44.639-44.628-44.639l0,0v13.466c17.182,0,31.161,13.984,31.161,31.173   H61.472z",
            }),
            o.createElement("circle", {
              cx: "26.695",
              cy: "74.305",
              r: "9.812",
            })
          )
        );
      }
      function he(e) {
        return o.createElement(
          "svg",
          Object(r.a)({}, e, {
            height: "24px",
            width: "24px",
            viewBox: "0 0 24 24",
            x: "0px",
            y: "0px",
          }),
          o.createElement("path", {
            fill: "white",
            d:
              "M3.3,0.5v23h17.5v-23H3.3z M10.2,9.6l-3-2.2h3.7L12,3.9l1.2,3.6H17l-3,2.2l1.2,3.6L12,11l-3,2.2L10.2,9.6z M17.3,16.1 M17.4,18H6.6v-1.2h10.7L17.4,18L17.4,18z M17.3,19.9",
          })
        );
      }
      function me() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 32 32",
            enableBackground: "new 0 0 32 32",
          },
          o.createElement("path", {
            fill: "white",
            d:
              "M24.68,19.53l6.9-5.69c0.98-0.81,0.47-2.39-0.81-2.46l-8.89-0.54c-0.54-0.03-1.01-0.37-1.21-0.88L17.4,1.61\r\n\t\t\tc-0.47-1.18-2.12-1.18-2.59,0l-3.27,8.32c-0.2,0.51-0.67,0.84-1.21,0.88l-8.92,0.54c-1.28,0.07-1.78,1.65-0.81,2.46l6.9,5.66\r\n\t\t\tc0.4,0.34,0.61,0.91,0.47,1.41l-2.26,8.65c-0.3,1.21,1.01,2.19,2.09,1.52l7.51-4.81c0.47-0.3,1.04-0.3,1.48,0l7.54,4.81\r\n\t\t\tc1.08,0.67,2.39-0.3,2.09-1.52l-2.26-8.62C24.07,20.4,24.24,19.86,24.68,19.53z",
          })
        );
      }
      function fe() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 32 32",
            enableBackground: "new 0 0 32 32",
          },
          o.createElement(
            "g",
            null,
            o.createElement("path", {
              fill: "white",
              d:
                "M28.4,1.49H3.79c-1.99,0-3.6,1.61-3.6,3.6v14.88c0,1.99,1.61,3.6,3.6,3.6h2.37c0,1.61-0.38,3.7-1.51,5.88\r\n\t\t\tc-0.28,0.57-0.19,1.33,0.19,1.8c0.28,0.38,0.76,0.47,1.14,0.47c0.19,0,0.38,0,0.57-0.09c4.07-1.61,7.57-5.59,9.47-8.05h12.4\r\n\t\t\tc1.99,0,3.6-1.61,3.6-3.6V5.1C31.91,3.11,30.3,1.49,28.4,1.49z M8.23,14.97c-1.33,0-2.37-1.04-2.37-2.37s1.04-2.37,2.37-2.37\r\n\t\t\ts2.37,1.04,2.37,2.37S9.56,14.97,8.23,14.97z M15.99,14.97c-1.33,0-2.37-1.04-2.37-2.37s1.04-2.37,2.37-2.37\r\n\t\t\tc1.33,0,2.37,1.04,2.37,2.37S17.32,14.97,15.99,14.97z M23.85,14.97c-1.33,0-2.37-1.04-2.37-2.37s1.04-2.37,2.37-2.37\r\n\t\t\tc1.33,0,2.37,1.04,2.37,2.37S25.18,14.97,23.85,14.97z",
            })
          )
        );
      }
      function ge() {
        return o.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 32 32",
            enableBackground: "new 0 0 32 32",
          },
          o.createElement(
            "g",
            null,
            o.createElement("path", {
              fill: "white",
              d:
                "M23.32,28.28C23,25.55,20.68,23.52,18,23.52h-3.78c-2.73,0-5,2.03-5.33,4.76L8.56,30.8h15.09L23.32,28.28z",
            }),
            o.createElement("path", {
              fill: "white",
              d:
                "M16.08,22.15c2.82,0,5.1-2.28,5.1-5.1c0-2.82-2.28-5.1-5.1-5.1s-5.1,2.28-5.1,5.1\r\n\t\t\tC10.98,19.86,13.27,22.15,16.08,22.15z",
            }),
            o.createElement(
              "g",
              null,
              o.createElement("path", {
                fill: "white",
                d:
                  "M24.09,10.21c-0.94-1.22-2.18-2.23-3.57-2.9c-1.39-0.68-2.94-1.02-4.48-1.01l-0.02,0L16,6.3\r\n\t\t\t\tc-0.03,0-0.05,0-0.08,0c-1.52,0-3.04,0.35-4.4,1.01c-1.39,0.68-2.62,1.68-3.57,2.9c-0.94,1.22-1.6,2.67-1.91,4.18\r\n\t\t\t\tc-0.3,1.51-0.25,3.1,0.15,4.59c0.14,0.55,0.62,0.92,1.18,0.92c0.01,0,0.02,0,0.04,0h0.27l0.03-0.01c0.32-0.08,0.59-0.29,0.76-0.57\r\n\t\t\t\tl0.07-0.1c0.14-0.21,0.18-0.46,0.11-0.7L8.6,18.38c-0.18-0.62-0.27-1.27-0.29-1.92c0-4.24,3.45-7.68,7.69-7.68h0.04\r\n\t\t\t\tc4.24,0,7.69,3.45,7.69,7.68c-0.02,0.65-0.11,1.3-0.29,1.92l-0.04,0.15c-0.07,0.24-0.03,0.49,0.11,0.7l0.07,0.1\r\n\t\t\t\tc0.17,0.28,0.44,0.49,0.76,0.57l0.03,0.01l0.26,0c0.01,0,0.02,0,0.04,0c0.56,0,1.04-0.37,1.18-0.92c0.4-1.49,0.46-3.08,0.15-4.59\r\n\t\t\t\tC25.69,12.88,25.04,11.44,24.09,10.21z",
              }),
              o.createElement("path", {
                fill: "white",
                d:
                  "M16.02,0.68c-8.83,0-15.99,7.16-16,15.99h0.01c-0.02,2.68,0.74,5.31,2.18,7.57l0,0.01l0.01,0.01\r\n\t\t\t\tc0.37,0.43,1,0.51,1.47,0.19c0.47-0.32,0.62-0.94,0.36-1.44l0,0l0,0c-1.19-1.89-1.81-4.09-1.79-6.32v0v0\r\n\t\t\t\tc0-7.6,6.16-13.76,13.76-13.76c7.6,0,13.76,6.16,13.76,13.76v0v0c0.03,2.24-0.59,4.43-1.79,6.32l0,0l0,0\r\n\t\t\t\tc-0.26,0.5-0.11,1.12,0.36,1.44c0.47,0.32,1.1,0.24,1.47-0.19l0.01-0.01l0-0.01c1.45-2.26,2.2-4.89,2.18-7.57h0.01\r\n\t\t\t\tC32.02,7.84,24.86,0.68,16.02,0.68",
              })
            )
          )
        );
      }
      function be(e) {
        return o.createElement(
          "svg",
          Object(r.a)({}, e, {
            height: "100px",
            width: "100px",
            fill: "#000000",
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            viewBox: "0 0 32 32",
            x: "0px",
            y: "0px",
          }),
          o.createElement("path", {
            d:
              "M26.286 0c-3.142 0-5.714 2.572-5.714 5.714 0 0.512 0.074 1.006 0.202 1.479l-10.573 5.287c-1.049-1.332-2.67-2.194-4.487-2.194-3.142 0-5.714 2.572-5.714 5.714s2.572 5.714 5.714 5.714c1.815 0 3.437-0.862 4.486-2.193l10.574 5.287c-0.127 0.473-0.202 0.966-0.202 1.478 0 3.142 2.572 5.714 5.714 5.714s5.714-2.572 5.714-5.714c0-3.142-2.572-5.714-5.714-5.714-1.817 0-3.438 0.862-4.487 2.194l-10.573-5.287c0.128-0.473 0.202-0.967 0.202-1.479s-0.074-1.005-0.202-1.478l10.574-5.287c1.049 1.331 2.67 2.193 4.486 2.193 3.142 0 5.714-2.572 5.714-5.714s-2.572-5.714-5.714-5.714zM26.286 2.286c1.907 0 3.429 1.522 3.429 3.429s-1.522 3.429-3.429 3.429c-1.907 0-3.429-1.522-3.429-3.429s1.522-3.429 3.429-3.429zM5.714 12.571c1.907 0 3.429 1.522 3.429 3.429s-1.522 3.429-3.429 3.429c-1.907 0-3.429-1.522-3.429-3.429s1.522-3.429 3.429-3.429zM26.286 22.857c1.907 0 3.429 1.522 3.429 3.429s-1.522 3.429-3.429 3.429c-1.907 0-3.429-1.522-3.429-3.429s1.522-3.429 3.429-3.429z",
          })
        );
      }
    },
    "7Whv": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var r = n("j+5p");
      function o(e) {
        switch (e) {
          case "column":
            return r.b.COLUMN;
          case "column-reverse":
            return r.b.COLUMN_REVERSE;
          case "row":
            return r.b.ROW;
          case "row-reverse":
            return r.b.ROW_REVERSE;
          case "grid":
            return r.b.GRID;
          default:
            return r.b.NONE;
        }
      }
    },
    "8+ko": function (e, t, n) {
      e.exports = {
        FocusRingRoot: "focusring_FocusRingRoot_3m2Fo",
        FocusRing: "focusring_FocusRing_1sTuv",
      };
    },
    "8sdS": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      }),
        n.d(t, "b", function () {
          return l;
        });
      var r = n("mrSG"),
        o = n("q1tI"),
        i = n.n(o),
        a = n("BaVA");
      n("BC0X");
      function s(e, t, n) {
        void 0 === n &&
          (n = [
            e.onButtonDown,
            e.onButtonUp,
            e.onOKButton,
            e.onCancelButton,
            e.onSecondaryButton,
            e.onOptionsButton,
            e.onGamepadDirection,
            e.onGamepadFocus,
            e.onGamepadBlur,
          ]),
          i.a.useLayoutEffect(function () {
            var n = t.current,
              r = [];
            return (
              n &&
                (e.onButtonDown && r.push(Object(a.e)(n, e.onButtonDown)),
                e.onButtonUp && r.push(Object(a.f)(n, e.onButtonUp)),
                e.onOKButton && r.push(Object(a.j)(n, e.onOKButton)),
                e.onCancelButton && r.push(Object(a.g)(n, e.onCancelButton)),
                e.onSecondaryButton &&
                  r.push(Object(a.l)(n, e.onSecondaryButton)),
                e.onOptionsButton && r.push(Object(a.k)(n, e.onOptionsButton)),
                e.onGamepadDirection &&
                  r.push(Object(a.h)(n, e.onGamepadDirection)),
                e.onGamepadFocus && r.push(Object(a.i)(n, e.onGamepadFocus)),
                e.onGamepadBlur && r.push(Object(a.d)(n, e.onGamepadBlur))),
              function () {
                return r.forEach(function (e) {
                  return e();
                });
              }
            );
          }, n);
      }
      function c(e) {
        e.stopPropagation();
      }
      function l(e, t, n) {
        var o = e.onButtonDown,
          l = Object(r.f)(e, ["onButtonDown"]),
          u = i.a.useCallback(
            function (e) {
              if ((o && o(e), !e.cancelBubble)) {
                var t = Object(a.c)(e);
                t || n.FireUnhandledGamepadEventCallbacks(e),
                  e.stopPropagation();
              }
            },
            [o, n]
          );
        s(l, t),
          s(
            {
              onButtonDown: u,
              onButtonUp: c,
              onOKButton: c,
              onCancelButton: c,
              onSecondaryButton: c,
              onOptionsButton: c,
              onGamepadDirection: c,
              onGamepadFocus: c,
              onGamepadBlur: c,
            },
            t,
            [u]
          );
      }
    },
    "9cYf": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return i;
        });
      var r = { x: "y", y: "x" };
      function o(e) {
        return (e.min + e.max) / 2;
      }
      function i(e) {
        return { x: o(e.x), y: o(e.y) };
      }
    },
    AvbV: function (e, t, n) {
      var r = {
        "./main_brazilian.json": ["TFAN", 12],
        "./main_bulgarian.json": ["c2SO", 13],
        "./main_czech.json": ["peP3", 14],
        "./main_danish.json": ["0bnV", 15],
        "./main_dutch.json": ["wcLc", 16],
        "./main_english.json": ["/rNK", 17],
        "./main_finnish.json": ["iywU", 18],
        "./main_french.json": ["Xnpc", 19],
        "./main_german.json": ["pmKi", 20],
        "./main_greek.json": ["mTRv", 21],
        "./main_hungarian.json": ["WkHb", 22],
        "./main_italian.json": ["Jz5U", 23],
        "./main_japanese.json": ["3Dk9", 24],
        "./main_koreana.json": ["neQD", 25],
        "./main_latam.json": ["6oHD", 26],
        "./main_norwegian.json": ["2OvS", 27],
        "./main_polish.json": ["3pwE", 28],
        "./main_portuguese.json": ["hY40", 29],
        "./main_romanian.json": ["Q95+", 30],
        "./main_russian.json": ["bsPT", 31],
        "./main_sc_schinese.json": ["GOaQ", 32],
        "./main_schinese.json": ["B/Zz", 33],
        "./main_spanish.json": ["U6iL", 34],
        "./main_swedish.json": ["4uPU", 35],
        "./main_tchinese.json": ["rgC9", 36],
        "./main_thai.json": ["87dp", 37],
        "./main_turkish.json": ["yMpO", 38],
        "./main_ukrainian.json": ["zTWm", 39],
        "./main_vietnamese.json": ["wqiy", 40],
      };
      function o(e) {
        if (!n.o(r, e))
          return Promise.resolve().then(function () {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = r[e],
          o = t[0];
        return n.e(t[1]).then(function () {
          return n.t(o, 3);
        });
      }
      (o.keys = function () {
        return Object.keys(r);
      }),
        (o.id = "AvbV"),
        (e.exports = o);
    },
    BC0X: function (e, t, n) {
      "use strict";
      n.d(t, "f", function () {
        return d;
      }),
        n.d(t, "d", function () {
          return h;
        }),
        n.d(t, "g", function () {
          return m;
        }),
        n.d(t, "a", function () {
          return f;
        }),
        n.d(t, "b", function () {
          return g;
        }),
        n.d(t, "c", function () {
          return b;
        }),
        n.d(t, "e", function () {
          return v;
        });
      var r = n("mrSG"),
        o = n("q1tI"),
        i = n.n(o),
        a = (n("Mgs7"), n("z7tf"), n("Jqb/"), n("bxiW")),
        s = n("exH9"),
        c = n("rHSA"),
        l = n("NxAk"),
        u = (n("7Whv"), n("8sdS"));
      n("j+5p");
      v("div"), v("button");
      var p = v("input");
      v("textarea");
      n("8+ko");
      var d = i.a.createContext(null),
        h = i.a.createContext(l.g);
      i.a.forwardRef(function (e, t) {
        return i.a.createElement(p, Object(r.a)({}, e, { ref: t }));
      });
      function m(e) {
        var t = e.navRef,
          n = Object(r.f)(e, ["navRef"]),
          s = i.a.useRef(),
          c = Object(o.useContext)(d),
          l = Object(o.useContext)(h),
          u = (function (e, t) {
            var n = i.a.useRef(null);
            return (
              !e ||
                (n.current && n.current.m_Parent == e) ||
                (n.current = e.Tree.CreateNode(e, t)),
              n.current
            );
          })(c, l);
        return (
          i.a.useLayoutEffect(function () {
            u && u.SetProperties(n);
          }),
          i.a.useLayoutEffect(
            function () {
              if (c) {
                var e = c.Tree.RegisterNavigationItem(u, s.current);
                return (
                  Object(a.c)(t, u.CreateHandle()),
                  function () {
                    e(), Object(a.c)(t, null);
                  }
                );
              }
            },
            [c, u, s, t]
          ),
          { ref: s, node: u }
        );
      }
      function f(e) {
        var t = e.onButtonDown,
          n = e.onButtonUp,
          o = e.onOKButton,
          i = e.onCancelButton,
          a = e.onSecondaryButton,
          s = e.onOptionsButton,
          l = e.onGamepadDirection,
          u = e.onGamepadFocus,
          p = e.onGamepadBlur,
          d = e.onOKActionDescription,
          h = e.onCancelActionDescription,
          m = e.onSecondaryActionDescription,
          f = e.onOptionsActionDescription,
          g = e.actionDescriptionMap,
          b = Object(r.f)(e, [
            "onButtonDown",
            "onButtonUp",
            "onOKButton",
            "onCancelButton",
            "onSecondaryButton",
            "onOptionsButton",
            "onGamepadDirection",
            "onGamepadFocus",
            "onGamepadBlur",
            "onOKActionDescription",
            "onCancelActionDescription",
            "onSecondaryActionDescription",
            "onOptionsActionDescription",
            "actionDescriptionMap",
          ]),
          v = {};
        return (
          void 0 !== t && (v.onButtonDown = t),
          void 0 !== n && (v.onButtonUp = n),
          void 0 !== o && (v.onOKButton = o),
          void 0 !== i && (v.onCancelButton = i),
          void 0 !== a && (v.onSecondaryButton = a),
          void 0 !== s && (v.onOptionsButton = s),
          void 0 !== l && (v.onGamepadDirection = l),
          void 0 !== u && (v.onGamepadFocus = u),
          void 0 !== p && (v.onGamepadBlur = p),
          {
            gamepadEvents: v,
            actionDescriptions: (function (e) {
              var t = e.onOKActionDescription,
                n = e.onCancelActionDescription,
                o = e.onSecondaryActionDescription,
                i = e.onOptionsActionDescription,
                a = e.actionDescriptionMap,
                s = Object(r.a)({}, a);
              return (
                void 0 !== t && (s[c.a.OK] = t),
                void 0 !== n && (s[c.a.CANCEL] = n),
                void 0 !== o && (s[c.a.SECONDARY] = o),
                void 0 !== i && (s[c.a.OPTIONS] = i),
                s
              );
            })({
              onOKActionDescription: d,
              onCancelActionDescription: h,
              onSecondaryActionDescription: m,
              onOptionsActionDescription: f,
              actionDescriptionMap: g,
            }),
            props: b,
          }
        );
      }
      function g(e) {
        var t = {
            autoFocus: e.autoFocus,
            navKey: e.navKey,
            noFocusRing: e.noFocusRing,
            focusable: e.focusable,
            navRef: e.navRef,
            onMoveUp: e.onMoveUp,
            onMoveRight: e.onMoveRight,
            onMoveDown: e.onMoveDown,
            onMoveLeft: e.onMoveLeft,
            navScrollSnapX: e.navScrollSnapX,
            navScrollSnapOffsetX: e.navScrollSnapOffsetX,
            navScrollSnapY: e.navScrollSnapY,
            navScrollSnapOffsetY: e.navScrollSnapOffsetY,
            navEntryPreferPosition: e.navEntryPreferPosition,
          },
          n = f(
            Object(r.f)(e, [
              "autoFocus",
              "navKey",
              "noFocusRing",
              "focusable",
              "navRef",
              "onMoveUp",
              "onMoveRight",
              "onMoveDown",
              "onMoveLeft",
              "navScrollSnapX",
              "navScrollSnapOffsetX",
              "navScrollSnapY",
              "navScrollSnapOffsetY",
              "navEntryPreferPosition",
            ])
          ),
          o = n.gamepadEvents,
          i = n.actionDescriptions,
          a = n.props;
        return (
          (t.actionDescriptionMap = Object(r.a)(
            Object(r.a)({}, t.actionDescriptionMap),
            i
          )),
          { elemProps: a, navOptions: t, gamepadEvents: o }
        );
      }
      function b(e) {
        var t = e.focusClassName,
          n = e.className,
          o = e.divRef,
          c = e.node,
          l = Object(r.f)(e, ["focusClassName", "className", "divRef", "node"]),
          u = i.a.useState(c.BHasFocus()),
          p = u[0],
          d = u[1];
        return (
          Object(a.d)(c.FocusCallbackList, d),
          i.a.createElement(
            "div",
            Object(r.a)({}, l, { className: Object(s.a)(n, p && t), ref: o })
          )
        );
      }
      function v(e) {
        return i.a.forwardRef(function (t, n) {
          var c = g(t),
            l = c.elemProps,
            p = c.navOptions,
            h = c.gamepadEvents;
          void 0 === p.focusable && (p.focusable = !0);
          var f = m(Object(r.a)({}, p)),
            b = f.ref,
            v = f.node,
            _ = Object(o.useCallback)(
              function () {
                return b.current.click(), !0;
              },
              [b]
            );
          l.onClick && !h.onOKButton && (h.onOKButton = _);
          var y = i.a.useState(null == v ? void 0 : v.BHasFocus()),
            O = y[0],
            w = y[1];
          Object(a.d)(null == v ? void 0 : v.FocusCallbackList, v ? w : null),
            p.focusable && (l.tabIndex = l.tabIndex || 0),
            Object(u.a)(h, b);
          var E = Object(a.f)(n, b),
            C = l.children;
          delete l.children;
          var S = l.focusClassName;
          return (
            delete l.focusClassName,
            i.a.createElement(
              d.Provider,
              { value: v },
              i.a.createElement(
                e,
                Object(r.a)(Object(r.a)({}, l), {
                  ref: E,
                  className: Object(s.a)(l.className, "Focusable", O && S),
                }),
                C
              )
            )
          );
        });
      }
    },
    BaVA: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return o;
      }),
        n.d(t, "e", function () {
          return c;
        }),
        n.d(t, "f", function () {
          return l;
        }),
        n.d(t, "j", function () {
          return u;
        }),
        n.d(t, "g", function () {
          return p;
        }),
        n.d(t, "l", function () {
          return d;
        }),
        n.d(t, "k", function () {
          return h;
        }),
        n.d(t, "h", function () {
          return m;
        }),
        n.d(t, "i", function () {
          return f;
        }),
        n.d(t, "d", function () {
          return g;
        }),
        n.d(t, "a", function () {
          return b;
        }),
        n.d(t, "c", function () {
          return v;
        });
      var r,
        o,
        i = n("rHSA");
      !(function (e) {
        (e[(e.GAMEPAD = 0)] = "GAMEPAD"),
          (e[(e.KEYBOARD = 1)] = "KEYBOARD"),
          (e[(e.APPLICATION = 2)] = "APPLICATION"),
          (e[(e.BROWSER = 3)] = "BROWSER");
      })(o || (o = {}));
      var a =
        (((r = {})[i.a.OK] = "vgp_onok"),
        (r[i.a.CANCEL] = "vgp_oncancel"),
        (r[i.a.SECONDARY] = "vgp_onsecondaryaction"),
        (r[i.a.OPTIONS] = "vgp_onoptions"),
        r);
      function s(e, t, n) {
        return (
          e.addEventListener(t, n),
          function () {
            return (function (e, t, n) {
              e.removeEventListener(t, n);
            })(e, t, n);
          }
        );
      }
      function c(e, t) {
        return s(e, "vgp_onbuttondown", t);
      }
      function l(e, t) {
        return s(e, "vgp_onbuttonup", t);
      }
      function u(e, t) {
        return s(e, "vgp_onok", _(t));
      }
      function p(e, t) {
        return s(e, "vgp_oncancel", _(t));
      }
      function d(e, t) {
        return s(e, "vgp_onsecondaryaction", _(t));
      }
      function h(e, t) {
        return s(e, "vgp_onoptions", _(t));
      }
      function m(e, t) {
        return s(e, "vgp_ondirection", _(t));
      }
      function f(e, t) {
        return s(e, "vgp_onfocus", t);
      }
      function g(e, t) {
        return s(e, "vgp_onblur", t);
      }
      function b(e, t, n) {
        var r = new e.ownerDocument.defaultView.CustomEvent(t, {
          bubbles: !0,
          cancelable: !0,
          detail: n,
        });
        e.dispatchEvent(r);
      }
      function v(e) {
        var t = [i.a.DIR_UP, i.a.DIR_DOWN, i.a.DIR_LEFT, i.a.DIR_RIGHT],
          n = a[e.detail.button];
        return n
          ? (b(e.target, n, e.detail), !0)
          : -1 !== t.indexOf(e.detail.button) &&
              (b(e.target, "vgp_ondirection", e.detail), !0);
      }
      function _(e) {
        return function (t) {
          !1 !== e(t) && t.stopPropagation();
        };
      }
    },
    CdLH: function (e, t, n) {
      "use strict";
      n.d(t, "f", function () {
        return r;
      }),
        n.d(t, "b", function () {
          return o;
        }),
        n.d(t, "c", function () {
          return i;
        }),
        n.d(t, "d", function () {
          return a;
        }),
        n.d(t, "e", function () {
          return s;
        }),
        n.d(t, "g", function () {
          return c;
        }),
        n.d(t, "a", function () {
          return l;
        });
      var r = {
        PerYear: 31536e3,
        PerMonth: 2628e3,
        PerWeek: 604800,
        PerDay: 86400,
        PerHour: 3600,
        PerMinute: 60,
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
      function c(e) {
        return new Promise(function (t) {
          return setTimeout(t, e);
        });
      }
      function l() {
        return Math.floor(Date.now() / 1e3);
      }
    },
    D4wO: function (e, t, n) {
      "use strict";
      function r(e) {
        return function (t, n, r) {
          var o = r.value;
          r.value = function () {
            for (var t = this, r = [], i = 0; i < arguments.length; i++)
              r[i] = arguments[i];
            var a = this[n + "_DebounceProperties"];
            void 0 === a &&
              (a = this[n + "_DebounceProperties"] = {
                hTimer: void 0,
                nPending: 0,
              }),
              void 0 === a.hTimer
                ? (o.apply(this, r),
                  (a.hTimer = window.setInterval(function () {
                    a.nPending > 0
                      ? (o.apply(t, r), (a.nPending = 0))
                      : (window.clearInterval(a.hTimer), (a.hTimer = void 0));
                  }, e)))
                : (a.nPending += 1);
          };
        };
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    DWPT: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return p;
      });
      var r = n("mrSG"),
        o = n("q1tI"),
        i = n("bxiW"),
        a = n("TyAF"),
        s = n("qiKp"),
        c = n("exH9"),
        l = n("6+2x"),
        u = n.n(l),
        p = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.m_listeners = new s.c()),
              (t.m_bNoSpace = !1),
              (t.state = { x: void 0, y: void 0, hoverPositionReady: !1 }),
              t
            );
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.bindHover = function (e) {
              (this.m_elHover = e || void 0), this.positionHover();
            }),
            (t.prototype.componentDidMount = function () {
              this.m_listeners.AddEventListener(
                window,
                "blur",
                this.OnWindowBlur
              );
            }),
            (t.prototype.componentDidUpdate = function () {
              this.positionHover();
            }),
            (t.prototype.componentWillUnmount = function () {
              this.m_listeners.Unregister();
            }),
            (t.prototype.OnWindowBlur = function (e) {
              this.props.onWindowBlur && this.props.onWindowBlur(e);
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = (e.target, e.visibilityObserver),
                n = e.className,
                i = e.style,
                a = e.bEnablePointerEvents,
                s =
                  (e.direction,
                  e.nBodyAlignment,
                  e.nBodyDistance,
                  e.nAllowOffscreenPx,
                  e.nMaxLateralMoveOnScreen,
                  e.children),
                l =
                  (e.onNoSpace,
                  e.onWindowBlur,
                  Object(r.f)(e, [
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
                    "onWindowBlur",
                  ])),
                p = Object.assign({ left: this.state.x, top: this.state.y }, i),
                d = !t || t.visible;
              return o.createElement(
                "div",
                Object(r.a)({}, l, {
                  className: Object(c.a)(
                    n,
                    u.a.HoverPosition,
                    d && this.state.hoverPositionReady && u.a.Ready,
                    this.m_bNoSpace && u.a.NoSpace,
                    a && u.a.EnablePointerEvents
                  ),
                  style: p,
                  ref: this.bindHover,
                }),
                s
              );
            }),
            (t.prototype.positionHover = function () {
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
                    h = d(
                      p,
                      this.props.nBodyAlignment,
                      this.props.nBodyDistance,
                      c,
                      l,
                      r.innerWidth,
                      r.innerHeight
                    ),
                    m = h.nLeft,
                    f = h.nTop,
                    g = h.nOverflow,
                    b = h.nLateralOverflow;
                  if (g > this.props.nAllowOffscreenPx && !u) {
                    var v = (function (e) {
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
                      _ = d(
                        v,
                        this.props.nBodyAlignment,
                        this.props.nBodyDistance,
                        c,
                        l,
                        r.innerWidth,
                        r.innerHeight
                      ),
                      y = _.nLeft,
                      O = _.nTop,
                      w = _.nOverflow,
                      E = _.nLateralOverflow;
                    if (
                      (w < g && ((p = v), (m = y), (f = O), (g = w), (b = E)),
                      g > this.props.nAllowOffscreenPx)
                    )
                      return (
                        t.setAttribute("style", "display: none;"),
                        (this.m_bNoSpace = !0),
                        void (this.props.onNoSpace && this.props.onNoSpace())
                      );
                  }
                  0 === this.props.nMaxLateralMoveOnScreen ||
                    u ||
                    ((e = (function (e, t, n, r, o) {
                      var i = Math.max(t[0], t[1]);
                      void 0 !== e && (i = Math.min(e, i));
                      i = Math.max(0, i);
                      var a = t[0] > t[1] ? i : -i;
                      "left" === n || "right" === n ? (r += a) : (o += a);
                      return [r, o];
                    })(this.props.nMaxLateralMoveOnScreen, b, p, f, m)),
                    (f = e[0]),
                    (m = e[1]));
                  var C = null;
                  switch (p) {
                    case "left":
                      C = i;
                      break;
                    case "right":
                      C = o;
                      break;
                    case "top":
                      C = s;
                      break;
                    case "bottom":
                      C = a;
                  }
                  C && C.setAttribute("style", ""),
                    m != this.state.x && this.setState({ x: m }),
                    f != this.state.y && this.setState({ y: f }),
                    this.state.hoverPositionReady ||
                      this.setState({ hoverPositionReady: !0 });
                }
              }
            }),
            (t.defaultProps = {
              direction: "right",
              nBodyAlignment: 0.5,
              nAllowOffscreenPx: 10,
              nBodyDistance: 8,
              nMaxLateralMoveOnScreen: void 0,
            }),
            Object(r.c)([i.a], t.prototype, "bindHover", null),
            Object(r.c)([i.a], t.prototype, "OnWindowBlur", null),
            (t = Object(r.c)([a.a], t))
          );
        })(o.Component);
      function d(e, t, n, r, o, i, a) {
        var s,
          c,
          l,
          u,
          p = i,
          d = a;
        switch (e) {
          case "right":
            (s = r.right + n),
              (c = h(r.top, r.height, o.height, t)),
              (l = Math.max(0, s + o.width - p)),
              (u = [Math.max(0, 0 - c), Math.max(0, c + o.height - d)]);
            break;
          case "left":
            (s = r.left - n - o.width),
              (c = h(r.top, r.height, o.height, t)),
              (l = Math.max(0, 0 - s)),
              (u = [Math.max(0, 0 - c), Math.max(0, c + o.height - d)]);
            break;
          case "bottom":
            (s = h(r.left, r.width, o.width, t)),
              (c = r.bottom + n),
              (l = Math.max(0, c + o.height - d)),
              (u = [Math.max(0, 0 - s), Math.max(0, s + o.width - p)]);
            break;
          case "top":
            (s = h(r.left, r.width, o.width, t)),
              (c = r.top - n - o.height),
              (l = Math.max(0, 0 - c)),
              (u = [Math.max(0, 0 - s), Math.max(0, s + o.width - p)]);
            break;
          case "overlay":
            (s = r.left), (c = r.top), (l = 0), (u = [0, 0]);
            break;
          case "overlay-center":
            (s = r.left + 0.5 * r.width - 0.5 * o.width),
              (c = r.top + 0.5 * r.height - 0.5 * o.height),
              (l = 0),
              (u = [0, 0]);
        }
        return { nLeft: s, nTop: c, nOverflow: l, nLateralOverflow: u };
      }
      function h(e, t, n, r) {
        return Math.max(0, Math.min(1, r)) * (t - n) + e;
      }
    },
    "IjL/": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var r = n("mrSG"),
        o = n("q1tI"),
        i = n("bxiW"),
        a = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.state = {}), t;
          }
          return (
            Object(r.d)(t, e),
            (t.InstallErrorReportingStore = function (e) {
              this.sm_ErrorReportingStore = e;
            }),
            (t.prototype.componentDidCatch = function (e, n) {
              var r = this,
                o = t.sm_ErrorReportingStore;
              o
                ? o.ReportError(e).then(function (e) {
                    return (
                      e && r.setState({ identifierHash: e.identifierHash })
                    );
                  })
                : console.warn(
                    "No ErrorReportingStore - use ErrorReportingStore().Init() to configure error reporting to server"
                  ),
                this.setState({ error: { error: e, info: n } });
            }),
            (t.prototype.Reset = function () {
              this.setState({ error: null });
            }),
            (t.prototype.render = function () {
              var e = this.props,
                n = e.children,
                r = e.fallback,
                i = this.state,
                a = i.error,
                l = i.identifierHash;
              return a
                ? void 0 !== r
                  ? "function" == typeof r
                    ? r(a.error)
                    : r
                  : t.sm_ErrorReportingStore &&
                    t.sm_ErrorReportingStore.reporting_enabled
                  ? o.createElement(c, {
                      error: a,
                      identifierHash: l,
                      store: t.sm_ErrorReportingStore,
                      onRefresh: this.Reset,
                    })
                  : o.createElement(s, { error: a, onDismiss: this.Reset })
                : n;
            }),
            Object(r.c)([i.a], t.prototype, "Reset", null),
            t
          );
        })(o.Component),
        s = function (e) {
          var t = e.error,
            n = e.onDismiss,
            r = t.error ? t.error.stack : "Stack missing",
            i = t.info ? t.info.componentStack : "",
            a = (t.error && t.error.message) || "unknown error";
          return o.createElement(
            l,
            null,
            o.createElement(u, null, 'Error: "', a, '"'),
            "   ",
            o.createElement(
              "span",
              {
                style: { textDecoration: "underline", cursor: "pointer" },
                onClick: n,
              },
              "(x) Dismiss"
            ),
            o.createElement("br", null),
            o.createElement(p, null, r),
            o.createElement(p, null, "The error occurred while rendering:", i)
          );
        },
        c = function (e) {
          var t = e.error,
            n = e.onRefresh,
            r = e.identifierHash,
            i = e.store,
            a = (t.error && t.error.message) || "unknown error",
            s = i.product + "_" + i.version + "_" + r;
          return o.createElement(
            l,
            null,
            o.createElement(
              u,
              null,
              "Something went wrong while displaying this content. ",
              o.createElement(
                "span",
                {
                  style: { textDecoration: "underline", cursor: "pointer" },
                  onClick: n,
                },
                "Refresh"
              )
            ),
            o.createElement(p, null, "Error Reference: ", s),
            o.createElement(p, null, a)
          );
        },
        l = function (e) {
          var t = e.children;
          return o.createElement(
            "div",
            {
              style: {
                overflow: "auto",
                marginLeft: "15px",
                color: "white",
                fontSize: "16px",
              },
            },
            t
          );
        },
        u = function (e) {
          var t = e.children;
          return o.createElement(
            "h1",
            {
              style: {
                fontSize: "20px",
                display: "inline-block",
                marginTop: "15px",
              },
            },
            t
          );
        },
        p = function (e) {
          var t = e.children;
          return o.createElement(
            "pre",
            { style: { marginTop: "15px", opacity: 0.7 } },
            t
          );
        };
    },
    "JJA/": function (e, t, n) {
      e.exports = {
        BodyNoScroll: "modals_BodyNoScroll_32ZiC",
        BodyNoScrollDialog: "modals_BodyNoScrollDialog_105OB",
        OverlayModal: "modals_OverlayModal_1yDps",
      };
    },
    JMS6: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return g;
        });
      var r,
        o = n("mrSG"),
        i = n("2vnA"),
        a = n("i8i4"),
        s = n("X3Ds"),
        c = n("D4wO"),
        l = n("XxJJ"),
        u = n("kyHq"),
        p = n("TLQK"),
        d = n("lkRc"),
        h = n("r64O"),
        m = n("Kw0F"),
        f = (function () {
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
            (e.prototype.SetTarget = function (e) {
              (this.m_fnRender = e),
                0 == this.m_rgLoadingLinks.length &&
                  (this.m_fnRender(), (this.m_fnRender = void 0));
            }),
            (e.prototype.OnLinkLoad = function (e) {
              e.currentTarget.removeEventListener("load", this.OnLinkLoad),
                m.b(this.m_rgLoadingLinks, e.currentTarget),
                0 == this.m_rgLoadingLinks.length &&
                  (this.m_fnRender(), (this.m_fnRender = void 0));
            }),
            Object(o.c)([l.a], e.prototype, "OnLinkLoad", null),
            e
          );
        })();
      !(function (e) {
        (e[(e.Minimized = 1)] = "Minimized"),
          (e[(e.Hidden = 2)] = "Hidden"),
          (e[(e.Tooltip = 4)] = "Tooltip"),
          (e[(e.ContextMenu = 8)] = "ContextMenu"),
          (e[(e.Resizable = 16)] = "Resizable");
      })(r || (r = {}));
      var g = (function () {
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
            (e.prototype.UpdateParamsBeforeShow = function (e) {
              return e;
            }),
            (e.prototype.OnDrop = function (e) {
              console.log("Ignoring drop onto toplevel window", e),
                e.preventDefault(),
                e.stopPropagation();
            }),
            (e.prototype.OnDragOver = function (e) {
              e.preventDefault(),
                (e.dataTransfer.dropEffect = "none"),
                e.stopPropagation();
            }),
            (e.prototype.OnMessage = function (e) {
              "window_moved" == e.data && this.OnResize();
            }),
            (e.prototype.Show = function (e, t) {
              var n,
                o = this;
              void 0 === e && (e = !0),
                void 0 === t && (t = !1),
                window.SteamClient &&
                  (this.m_rgParams.eCreationFlags |= r.Hidden),
                this.m_rgParams.eCreationFlags & r.Tooltip && (e = !1),
                this.BIsValid() &&
                  (this.BIsClosed()
                    ? ((this.m_popup = void 0), (this.m_element = void 0))
                    : e && this.Focus(t));
              var i,
                a,
                s,
                c = v.GetExistingPopup(this.m_strName);
              (c && !this.m_rgParams.replace_existing_popup) ||
                ((this.m_rgParams = this.UpdateParamsBeforeShow(
                  this.m_rgParams
                )),
                c
                  ? ((a = c.m_element),
                    (i = c.m_popup),
                    c.ReleasePopup(),
                    (s = c.m_renderWhenReady),
                    v.RemoveTrackedPopup(c),
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
                  : ((i = (n = b.CreatePopup(this.m_strName, this.m_rgParams))
                      .popup),
                    (a = n.element),
                    (s = new f(i, a))),
                i &&
                  a &&
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
                    i.document.documentElement.setAttribute(
                      "lang",
                      Object(p.c)()
                    ),
                  (this.m_popup = i),
                  (this.m_element = a),
                  (this.m_renderWhenReady = s),
                  this.m_renderWhenReady.SetTarget(function () {
                    return o.RenderInternal(o.m_popup, o.m_element, e);
                  })),
                v.AddTrackedPopup(this),
                c && e && this.Focus());
            }),
            (e.prototype.RemoveEventListeners = function () {
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
            (e.prototype.RenderInternal = function (e, t, n) {
              var r;
              this.browser_info &&
                ((r = this.browser_info).m_eBrowserType ==
                  u.c.EBrowserType_OpenVROverlay ||
                  r.m_eBrowserType ==
                    u.c.EBrowserType_OpenVROverlay_Dashboard) &&
                (t.ownerDocument.body.className += " VR"),
                this.Render(e, t),
                this.OnLoad(),
                e.SteamClient &&
                  (n
                    ? e.SteamClient.Window.BringToFront()
                    : e.SteamClient.Window.ShowWindow());
            }),
            (e.prototype.OnResizeEvent = function () {
              this.OnResize();
            }),
            (e.prototype.OnBeforeUnloadEvent = function () {
              this.OnBeforeUnload();
            }),
            (e.prototype.OnUnload = function () {
              this.RemoveEventListeners(),
                v.RemoveTrackedPopup(this),
                this.OnClose(),
                a.unmountComponentAtNode(this.m_element);
            }),
            Object.defineProperty(e.prototype, "browser_info", {
              get: function () {
                return this.m_rgParams.target_browser;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "window", {
              get: function () {
                return this.m_popup;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "root_element", {
              get: function () {
                return this.m_element;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "title", {
              get: function () {
                return this.m_strTitle;
              },
              set: function (e) {
                (this.m_strTitle = e),
                  this.m_popup &&
                    (this.m_popup.document.title = this.m_strTitle);
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.Focus = function (e) {
              void 0 === e && (e = !1),
                this.m_popup &&
                void 0 !== this.m_popup.SteamClient &&
                void 0 !== this.m_popup.SteamClient.Window
                  ? e
                    ? this.m_popup.SteamClient.Window.SetForegroundWindow()
                    : this.m_popup.SteamClient.Window.BringToFront()
                  : this.m_popup && this.m_popup.focus();
            }),
            (e.prototype.Close = function () {
              this.m_popup && this.m_popup.close();
            }),
            (e.prototype.GetName = function () {
              return this.m_strName;
            }),
            (e.prototype.BIsValid = function () {
              return !!this.m_popup;
            }),
            (e.prototype.BIsClosed = function () {
              return !this.m_popup || this.m_popup.closed;
            }),
            (e.prototype.BIsVisible = function () {
              return (
                this.m_popup &&
                !this.m_popup.closed &&
                "visible" == this.m_popup.document.visibilityState
              );
            }),
            (e.prototype.BIsFocused = function () {
              return this.BIsVisible() && this.m_popup.document.hasFocus();
            }),
            (e.prototype.OnFocusInternal = function () {
              (this.m_bFocused = !0), this.OnFocus();
            }),
            (e.prototype.OnBlurInternal = function () {
              (this.m_bFocused = !1), this.OnBlur();
            }),
            Object.defineProperty(e.prototype, "focused", {
              get: function () {
                return this.m_bFocused;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.GetWindowRestoreDetails = function () {
              var e = this;
              return this.m_popup &&
                !this.m_popup.closed &&
                this.m_popup.SteamClient
                ? new Promise(function (t, n) {
                    e.m_popup.SteamClient.Window.GetWindowRestoreDetails(
                      function (e) {
                        t(e);
                      }
                    );
                  })
                : Promise.resolve("");
            }),
            (e.prototype.IsMinimized = function () {
              var e = this;
              return this.m_popup &&
                !this.m_popup.closed &&
                this.m_popup.SteamClient &&
                this.m_popup.SteamClient.Window &&
                this.m_popup.SteamClient.Window.IsWindowMinimized
                ? new Promise(function (t, n) {
                    e.m_popup.SteamClient.Window.IsWindowMinimized(function (
                      e
                    ) {
                      t(e);
                    });
                  })
                : Promise.resolve(!1);
            }),
            (e.prototype.ReleasePopup = function () {
              this.OnClose(), (this.m_popup = null);
            }),
            (e.prototype.OnBeforeUnload = function () {}),
            (e.prototype.OnFocus = function () {}),
            (e.prototype.OnBlur = function () {}),
            Object(o.c)([i.C], e.prototype, "m_bFocused", void 0),
            Object(o.c)([l.a], e.prototype, "OnMessage", null),
            Object(o.c)([l.a], e.prototype, "OnResizeEvent", null),
            Object(o.c)([l.a], e.prototype, "OnBeforeUnloadEvent", null),
            Object(o.c)([l.a], e.prototype, "OnUnload", null),
            Object(o.c)([l.a], e.prototype, "OnFocusInternal", null),
            Object(o.c)([l.a], e.prototype, "OnBlurInternal", null),
            e
          );
        })(),
        b = (function () {
          function e() {
            var e = this;
            if (
              ((this.m_bShuttingDown = !1),
              (this.m_mapPopups = new Map()),
              (this.m_rgShutdownCallbacks = []),
              (this.m_rgPopupCreatedCallbacks = []),
              (this.m_unCurrentAccountID = 0),
              (this.m_mapRestoreDetails = new Map()),
              (this.m_bSaveRequired = !1),
              !Object({ NODE_ENV: "production", STEAM_BUILD: "buildbot" })
                .MOBILE_BUILD)
            ) {
              window.addEventListener("beforeunload", function (t) {
                e.m_bShuttingDown = !0;
                for (
                  var n = 0, r = e.m_rgShutdownCallbacks;
                  n < r.length;
                  n++
                ) {
                  (0, r[n])();
                }
                var o = [];
                e.m_mapPopups.forEach(function (e) {
                  e.BIsValid() && !e.BIsClosed() && o.push(e);
                });
                for (var i = 0, a = o; i < a.length; i++) {
                  a[i].Close();
                }
                e.m_bSaveRequired && e.SaveSavedDimensionStore(),
                  e.m_mapPopups.clear();
              });
              var t = document.querySelector("head");
              Object(h.a)(t, "Couldn't find head element"),
                t &&
                  ((this.m_DynamicCSSObserver = new MutationObserver(
                    function () {
                      var t = s.n();
                      e.m_mapPopups.forEach(function (e) {
                        s.a(e.window, t);
                      });
                    }
                  )),
                  this.m_DynamicCSSObserver.observe(t, { childList: !0 }));
            }
          }
          return (
            (e.prototype.SetCurrentLoggedInAccountID = function (e) {
              (this.m_unCurrentAccountID = e),
                e
                  ? this.LoadSavedDimensionStore()
                  : this.ClearSavedDimensionStore();
            }),
            (e.prototype.AddShutdownCallback = function (e) {
              this.m_rgShutdownCallbacks.push(e);
            }),
            (e.prototype.AddPopupCreatedCallback = function (e) {
              this.m_rgPopupCreatedCallbacks.push(e);
            }),
            (e.prototype.AddTrackedPopup = function (e) {
              this.m_mapPopups.set(e.GetName(), e);
              for (
                var t = 0, n = this.m_rgPopupCreatedCallbacks;
                t < n.length;
                t++
              ) {
                (0, n[t])(e);
              }
            }),
            (e.prototype.RemoveTrackedPopup = function (e) {
              this.m_mapPopups.delete(e.GetName());
            }),
            (e.prototype.GetExistingPopup = function (e) {
              return this.m_mapPopups.get(e);
            }),
            (e.prototype.GetPopups = function () {
              return this.m_mapPopups.values();
            }),
            (e.prototype.ClosePopupsOwnedByBrowser = function (e) {
              this.m_mapPopups.forEach(function (t) {
                t.browser_info &&
                  t.browser_info.m_nBrowserID == e.m_nBrowserID &&
                  t.browser_info.m_unPID == e.m_unPID &&
                  t.Close();
              });
            }),
            (e.CreatePopup = function (e, t) {
              var n = t.dimensions || {},
                r = n.width || 300,
                o = n.height || 300,
                i = t.title,
                a = "width=" + r + ",height=" + o;
              void 0 !== n.left && (a += ",left=" + n.left),
                void 0 !== n.top && (a += ",top=" + n.top),
                (a += ",resizeable,status=0,toolbar=0,menubar=0,location=0");
              var c = "about:blank",
                l = [];
              l.push("createflags=" + t.eCreationFlags),
                t.minWidth && l.push("minwidth=" + t.minWidth),
                t.minHeight && l.push("minheight=" + t.minHeight),
                t.target_browser &&
                  (l.push("pid=" + t.target_browser.m_unPID),
                  l.push("browser=" + t.target_browser.m_nBrowserID),
                  l.push("browserType=" + t.target_browser.m_eBrowserType),
                  t.availscreenwidth &&
                    t.availscreenheight &&
                    (l.push("screenavailwidth=" + t.availscreenwidth),
                    l.push("screenavailheight=" + t.availscreenheight))),
                t.strVROverlayKey &&
                  l.push("vrOverlayKey=" + t.strVROverlayKey),
                t.strRestoreDetails &&
                  l.push("restoredetails=" + t.strRestoreDetails),
                t.window_opener_id && l.push("openerid=" + t.window_opener_id),
                l && (c += "?" + l.join("&"));
              var u = (t.owner_window || window).open(c, e, a, !0);
              if (!u)
                return (
                  console.log(
                    "Failed to create popup.. browser popup blocker enabled?"
                  ),
                  {}
                );
              var p = "";
              t.html_class && (p = 'class="' + t.html_class + '"');
              var d = "";
              t.body_class && (d = 'class="' + t.body_class + '"');
              var h =
                "<!DOCTYPE html><html " +
                p +
                "><head><title></title></head><body " +
                d +
                '><div id="popup_target"></div></body></html>';
              return (
                u.document.write(h),
                (u.document.title = i),
                s.a(u, s.n()),
                { popup: u, element: u.document.getElementById("popup_target") }
              );
            }),
            (e.prototype.BShuttingDown = function () {
              return this.m_bShuttingDown;
            }),
            (e.prototype.GetLocalStorageKey = function () {
              return "PopupSavedDimensions_" + this.m_unCurrentAccountID;
            }),
            (e.prototype.LoadSavedDimensionStore = function () {
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
            (e.prototype.SaveSavedDimensionStore = function () {
              if (this.m_unCurrentAccountID && this.m_bSaveRequired) {
                var e = this.GetLocalStorageKey(),
                  t = JSON.stringify(Array.from(this.m_mapRestoreDetails));
                window.localStorage.setItem(e, t), (this.m_bSaveRequired = !1);
              }
            }),
            (e.prototype.DebouncedSaveSavedDimensionStore = function () {
              this.SaveSavedDimensionStore();
            }),
            (e.prototype.ClearSavedDimensionStore = function () {
              this.m_mapRestoreDetails.clear(), (this.m_bSaveRequired = !1);
            }),
            (e.prototype.GetRestoreDetails = function (e) {
              if (!this.m_mapRestoreDetails.has(e)) return "";
              var t = this.m_mapRestoreDetails.get(e);
              return (
                (t.last_used = Date.now()),
                (this.m_bSaveRequired = !0),
                t.strRestoreDetails
              );
            }),
            (e.prototype.SetRestoreDetails = function (e, t, n) {
              if (e) {
                if (t) {
                  if (this.m_mapRestoreDetails.size > 50) {
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
                    bExpires: n,
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
              [l.a, Object(c.a)(100)],
              e.prototype,
              "DebouncedSaveSavedDimensionStore",
              null
            ),
            e
          );
        })(),
        v = new b();
      window.g_PopupManager = v;
    },
    Jnrd: function (e, t, n) {
      "use strict";
      function r(e) {
        if (!i() || !window.document.cookie) return null;
        var t = document.cookie.match("(^|; )" + e + "=([^;]*)");
        return t && t[2] ? decodeURIComponent(t[2]) : null;
      }
      function o(e, t, n, r) {
        if (i()) {
          r || (r = "/");
          var o = "";
          if (void 0 !== n && n) {
            var a = new Date();
            a.setTime(a.getTime() + 864e5 * n),
              (o = "; expires=" + a.toUTCString());
          }
          document.cookie =
            encodeURIComponent(e) +
            "=" +
            encodeURIComponent(t) +
            o +
            ";path=" +
            r;
        }
      }
      function i() {
        return !!window.document;
      }
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "c", function () {
          return o;
        }),
        n.d(t, "a", function () {
          return i;
        });
    },
    "Jqb/": function (e, t, n) {
      "use strict";
      n.d(t, "i", function () {
        return v;
      }),
        n.d(t, "b", function () {
          return y;
        }),
        n.d(t, "h", function () {
          return O;
        }),
        n.d(t, "a", function () {
          return w;
        }),
        n.d(t, "j", function () {
          return E;
        }),
        n.d(t, "d", function () {
          return C;
        }),
        n.d(t, "e", function () {
          return S;
        }),
        n.d(t, "f", function () {
          return D;
        }),
        n.d(t, "c", function () {
          return M;
        }),
        n.d(t, "g", function () {
          return R;
        });
      var r = n("mrSG"),
        o = n("q1tI"),
        i = n("i8i4"),
        a = n("X3Ds"),
        s = n("TLQK"),
        c = n("Mgs7"),
        l = n("IjL/"),
        u = n("bxiW"),
        p = n("6Y59"),
        d = n("TyAF"),
        h = n("exH9"),
        m = n("JJA/"),
        f = n.n(m),
        g = n("r64O"),
        b = n("+d9t"),
        v = o.createContext({});
      function _(e) {
        var t = e.active,
          n = e.children,
          r = o.useState(null),
          a = r[0],
          s = r[1],
          c = o.useRef();
        return (
          o.useEffect(
            function () {
              return (
                t && !c.current && (c.current = R(window).ShowPortaledModal(s)),
                function () {
                  c.current && (c.current.Close(), (c.current = null));
                }
              );
            },
            [t, c, s]
          ),
          a ? i.createPortal(n, a) : null
        );
      }
      var y = function (e) {
        var t = e.active,
          n = e.onDismiss,
          r = e.className,
          i = e.modalClassName,
          a = e.children;
        return o.createElement(
          _,
          { active: t },
          o.createElement(
            O,
            { onEscKeypress: n, className: i },
            o.createElement(c.f, { className: r }, a)
          )
        );
      };
      function O(e) {
        var t = o.useContext(v);
        return o.createElement(
          b.f,
          Object(r.a)({ component: t.ModalPosition, fallback: w }, e)
        );
      }
      function w(e) {
        var t,
          n = {};
        e.onEscKeypress &&
          ((n.tabIndex = 0),
          (n.onKeyDown = function (t) {
            27 == t.keyCode && e.onEscKeypress();
          }),
          (n.onMouseDown = function (t) {
            t.currentTarget !== t.target ||
              e.bDisableBackgroundDismiss ||
              e.onEscKeypress();
          }),
          (t = function (e) {
            e && (a.e(e, e.ownerDocument.activeElement) || e.focus());
          }));
        var i = ["ModalPosition"];
        e.className && i.push(e.className),
          e.bDestructiveWarning && i.push("Destructive");
        var s =
            e.renderContent ||
            function (e) {
              return o.createElement("div", Object(r.a)({}, e));
            },
          c = o.createElement(
            o.Fragment,
            null,
            !e.hideTopBar &&
              o.createElement("div", { className: "ModalPosition_TopBar" }),
            e.onEscKeypress &&
              !e.bHideCloseIcon &&
              o.createElement(
                "div",
                { className: "ModalPosition_Dismiss" },
                o.createElement(
                  "div",
                  { className: "closeButton", onClick: e.onEscKeypress },
                  o.createElement(p.lb, null)
                )
              ),
            o.createElement(l.a, null, e.children)
          );
        return o.createElement(
          "div",
          Object(r.a)({ className: i.join(" ") }, n, { ref: t }),
          s({ className: "ModalPosition_Content", children: c })
        );
      }
      var E = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = { bShowModal: !1 }), (t.m_refParent = o.createRef()), t
            );
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this.GetBodyElement();
              e && e.classList.add(f.a.BodyNoScroll);
            }),
            (t.prototype.componentWillUnmount = function () {
              var e = this.GetBodyElement();
              e && e.classList.remove(f.a.BodyNoScroll);
            }),
            (t.prototype.GetBodyElement = function () {
              return this.m_refParent.current
                ? this.m_refParent.current.closest("body")
                : null;
            }),
            (t.prototype.render = function () {
              return o.createElement(
                "div",
                {
                  ref: this.m_refParent,
                  className: Object(h.a)(
                    f.a.OverlayModal,
                    this.props.className
                  ),
                },
                this.props.children
              );
            }),
            t
          );
        })(o.Component),
        C = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.Cancel = function () {
              this.props.onCancel && this.props.onCancel(),
                this.props.closeModal && this.props.closeModal();
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.strTitle,
                n = e.strDescription,
                i = e.strOKButtonText,
                a = e.strCancelButtonText,
                l = e.bAlertDialog,
                u = e.children,
                p = Object(r.f)(e, [
                  "strTitle",
                  "strDescription",
                  "strOKButtonText",
                  "strCancelButtonText",
                  "bAlertDialog",
                  "children",
                ]),
                d = i || Object(s.f)("#Button_Close");
              return o.createElement(
                S,
                Object(r.a)({}, p),
                o.createElement(c.l, null, " ", t, " "),
                o.createElement(
                  c.b,
                  null,
                  o.createElement(c.c, null, n, u),
                  o.createElement(
                    c.k,
                    null,
                    l
                      ? o.createElement(c.r, null, d)
                      : o.createElement(c.o, {
                          bOKDisabled: this.props.bOKDisabled,
                          strOKText: i,
                          onCancel: this.Cancel,
                          strCancelText: a,
                        })
                  )
                )
              );
            }),
            Object(r.c)([u.a], t.prototype, "Cancel", null),
            (t = Object(r.c)([d.a], t))
          );
        })(o.Component),
        S = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.Cancel = function () {
              this.props.onCancel && this.props.onCancel(),
                this.props.closeModal && this.props.closeModal();
            }),
            (t.prototype.OK = function () {
              this.props.bOKDisabled ||
                (this.props.onOK && this.props.onOK(),
                this.props.closeModal && this.props.closeModal());
            }),
            (t.prototype.render = function () {
              return o.createElement(
                O,
                {
                  onEscKeypress: this.Cancel,
                  bDestructiveWarning: this.props.bDestructiveWarning,
                  bDisableBackgroundDismiss: this.props
                    .bDisableBackgroundDismiss,
                  bHideCloseIcon: this.props.bHideCloseIcon,
                },
                o.createElement(
                  c.g,
                  {
                    classNameContent: Object(h.a)(
                      "GenericConfirmDialog",
                      this.props.bAllowFullSize && "DialogContentFullSize",
                      this.props.className
                    ),
                    onSubmit: this.OK,
                    bCenterVertically: !0,
                  },
                  this.props.children
                )
              );
            }),
            Object(r.c)([u.a], t.prototype, "Cancel", null),
            Object(r.c)([u.a], t.prototype, "OK", null),
            (t = Object(r.c)([d.a], t))
          );
        })(o.Component),
        D = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.render = function () {
              var e = Object(r.a)(
                {
                  strTitle: Object(s.f)("#Error_FailureNotice"),
                  strDescription: Object(s.f)(
                    "#Error_GenericFailureDescription"
                  ),
                  bAlertDialog: !0,
                  bDestructiveWarning: !0,
                  onOK: function () {},
                  onCancel: function () {},
                },
                this.props
              );
              return o.createElement(C, Object(r.a)({}, e));
            }),
            (t = Object(r.c)([d.a], t))
          );
        })(o.Component),
        M = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.componentDidUpdate = function () {
              var e = this.props.ModalManager.modals;
              e && e.length
                ? document.body.classList.add(f.a.BodyNoScrollDialog)
                : document.body.classList.remove(f.a.BodyNoScrollDialog);
            }),
            (t.prototype.componentDidMount = function () {
              this.props.ModalManager.RegisterOverlay(this);
            }),
            (t.prototype.componentWillUnmount = function () {
              this.props.ModalManager.UnregisterOverlay(this);
            }),
            (t.prototype.OnActiveRef = function (e) {
              if (e) {
                var t = e.firstChild;
                t && t.focus && t.focus();
              }
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.ModalManager,
                i = Object(r.f)(t, ["ModalManager"]),
                a = n.modals;
              if (!a || !a.length) return null;
              var s = n.active_modal,
                c = a.map(function (t, n) {
                  var r = t == s,
                    i = r ? "active" : "inactive",
                    a = r ? e.OnActiveRef : null;
                  return (
                    t.fnRender && (a = t.fnRender),
                    o.createElement(
                      "div",
                      {
                        className: Object(h.a)("ModalOverlayContent", i),
                        key: "modal-" + n,
                        ref: a,
                        tabIndex: -1,
                      },
                      t.element
                    )
                  );
                });
              return o.createElement(
                "div",
                Object(r.a)({}, i, {
                  className: Object(h.a)(i.className, "FullModalOverlay"),
                }),
                o.createElement("div", {
                  className: "ModalOverlayContent ModalOverlayBackground",
                }),
                c
              );
            }),
            t
          );
        })(o.Component),
        x = (function () {
          function e() {
            (this.m_bUsePopups = !0),
              (this.m_rgModals = []),
              (this.m_ActiveOverlay = null);
          }
          return (
            (e.prototype.RegisterOverlay = function (e) {
              Object(g.a)(!this.m_ActiveOverlay, "Registering second overlay"),
                (this.m_ActiveOverlay = e);
            }),
            (e.prototype.UnregisterOverlay = function (e) {
              Object(g.a)(this.m_ActiveOverlay == e, "Active overlay mismatch"),
                this.m_ActiveOverlay == e && (this.m_ActiveOverlay = null);
            }),
            (e.prototype.ForceUpdate = function () {
              var e = this;
              this.m_ActiveOverlay
                ? window.setTimeout(function () {
                    return e.m_ActiveOverlay.forceUpdate();
                  }, 1)
                : Object(g.a)(
                    !1,
                    "Modal action was taken, but there is no <DialogOverlay> element to show it in"
                  );
            }),
            Object.defineProperty(e.prototype, "modals", {
              get: function () {
                return this.m_rgModals;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "active_modal", {
              get: function () {
                return this.m_rgModals.length
                  ? this.m_rgModals[this.m_rgModals.length - 1]
                  : void 0;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.ShowModal = function (e) {
              return this.ShowModalInternal({ element: e });
            }),
            (e.prototype.ShowPortaledModal = function (e) {
              return this.ShowModalInternal({ fnRender: e });
            }),
            (e.prototype.ShowModalInternal = function (e) {
              var t = this;
              return (
                this.m_rgModals.push(e),
                this.ForceUpdate(),
                {
                  Close: function () {
                    var n = t.m_rgModals.indexOf(e);
                    -1 != n && t.m_rgModals.splice(n, 1), t.ForceUpdate();
                  },
                  Update: function (n) {
                    (e.element = n), t.ForceUpdate();
                  },
                }
              );
            }),
            (e.prototype.SetUsePopups = function (e) {
              this.m_bUsePopups = e;
            }),
            (e.prototype.BUsePopups = function () {
              return this.m_bUsePopups;
            }),
            e
          );
        })();
      function R(e) {
        var t = I.get(e);
        return t || ((t = new x()), I.set(e, t)), t;
      }
      var I = new WeakMap();
    },
    Kw0F: function (e, t, n) {
      "use strict";
      n.d(t, "f", function () {
        return r;
      }),
        n.d(t, "d", function () {
          return o;
        }),
        n.d(t, "a", function () {
          return i;
        }),
        n.d(t, "b", function () {
          return a;
        }),
        n.d(t, "c", function () {
          return s;
        }),
        n.d(t, "g", function () {
          return c;
        }),
        n.d(t, "e", function () {
          return l;
        });
      n("r64O");
      function r(e) {
        if ((null == e ? void 0 : e.length) > 1)
          for (var t = e.length; 0 !== t; ) {
            var n = Math.floor(Math.random() * t),
              r = e[(t -= 1)];
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
        return s(e, function (e) {
          return t == e;
        });
      }
      function s(e, t) {
        var n = e.findIndex(t);
        return n >= 0 && (e.splice(n, 1), !0);
      }
      function c(e, t, n) {
        for (var r = 0, o = e.length - 1; r <= o; ) {
          var i = Math.floor((r + o) / 2),
            a = n(e[i], t);
          if (a < 0) r = i + 1;
          else if (a > 0) o = i - 1;
          else {
            if (o == i) return i;
            if (i == r) return o > i && n(t, e[i + 1]) < 0 ? i : i + 1;
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
    },
    LY6W: function (e, t, n) {
      e.exports = {
        TextToolTip: "tooltip_TextToolTip_2FxbH",
        ToolTipCustom: "tooltip_ToolTipCustom_3XGRk",
        ToolTipTitle: "tooltip_ToolTipTitle_1LhVf",
        Center: "tooltip_Center_2ZDqE",
        ToolTipInsetContent: "tooltip_ToolTipInsetContent_i4LuY",
      };
    },
    Mgs7: function (e, t, n) {
      "use strict";
      n.d(t, "l", function () {
        return v;
      }),
        n.d(t, "v", function () {
          return _;
        }),
        n.d(t, "k", function () {
          return y;
        }),
        n.d(t, "n", function () {
          return O;
        }),
        n.d(t, "c", function () {
          return w;
        }),
        n.d(t, "b", function () {
          return E;
        }),
        n.d(t, "w", function () {
          return S;
        }),
        n.d(t, "f", function () {
          return M;
        }),
        n.d(t, "g", function () {
          return I;
        }),
        n.d(t, "h", function () {
          return T;
        }),
        n.d(t, "r", function () {
          return k;
        }),
        n.d(t, "d", function () {
          return B;
        }),
        n.d(t, "u", function () {
          return L;
        }),
        n.d(t, "o", function () {
          return A;
        }),
        n.d(t, "p", function () {
          return N;
        }),
        n.d(t, "e", function () {
          return G;
        }),
        n.d(t, "s", function () {
          return U;
        }),
        n.d(t, "q", function () {
          return H;
        }),
        n.d(t, "m", function () {
          return X;
        }),
        n.d(t, "t", function () {
          return q;
        }),
        n.d(t, "i", function () {
          return re;
        }),
        n.d(t, "j", function () {
          return ue;
        }),
        n.d(t, "a", function () {
          return Me;
        });
      var r = n("mrSG"),
        o = n("q1tI"),
        i = n.n(o),
        a = n("6Y59"),
        s = n("TLQK"),
        c = n("bxiW"),
        l = n("exH9"),
        u = n("z7tf"),
        p = n("+d9t"),
        d = n("umRa"),
        h = n.n(d),
        m = function (e) {
          var t = Object(u.b)();
          return i.a.createElement(
            p.f,
            Object(r.a)(
              { component: null == t ? void 0 : t.Toggle, fallback: f },
              e
            )
          );
        },
        f = function (e) {
          var t = e.value,
            n = e.onChange,
            r = e.disabled;
          return i.a.createElement(
            "div",
            {
              className: Object(l.a)(h.a.Toggle, r && h.a.Disabled),
              onClick: function () {
                return !r && n && n(!t);
              },
            },
            i.a.createElement("div", { className: h.a.ToggleRail }),
            i.a.createElement("div", {
              className: Object(l.a)(
                h.a.ToggleRail,
                h.a.Highlight,
                t ? h.a.On : h.a.Off
              ),
            }),
            i.a.createElement("div", {
              className: Object(l.a)(h.a.ToggleSwitch, t ? h.a.On : h.a.Off),
            })
          );
        },
        g = n("qDk6");
      function b(e) {
        return o.forwardRef(function (t, n) {
          return o.createElement(
            g.a,
            Object(r.a)({}, t, {
              className: Object(l.a)(e, t.className),
              ref: n,
            })
          );
        });
      }
      var v = Object(p.c)("DialogHeader"),
        _ = Object(p.c)("DialogSubHeader"),
        y = Object(p.c)("DialogFooter"),
        O = Object(p.c)("DialogLabel _DialogLayout"),
        w = Object(p.c)("DialogBodyText"),
        E = Object(p.c)("DialogBody"),
        C =
          (b("DialogBody"),
          Object(p.c)("DialogInnerBody"),
          Object(p.c)("DialogControlsSection"),
          Object(p.c)("DialogControlsSectionHeader"),
          Object(p.c)("DialogBodyNotificationBar")),
        S = b("DialogTwoColLayout _DialogColLayout"),
        D = b("DialogThreeColLayout _DialogColLayout");
      b("DialogTwoThirdColLayout _DialogColLayout"),
        Object(p.c)("DialogColumn _DialogLayout");
      function M(e) {
        var t = Object(u.b)();
        return o.createElement(
          p.f,
          Object(r.a)({ component: t.Content, fallback: x }, e)
        );
      }
      function x(e) {
        var t = e.children,
          n = e.bCenterVertically,
          i = e.renderDialogContentDiv,
          a = e.renderDialogContentInnerDiv,
          s = Object(r.f)(e, [
            "children",
            "bCenterVertically",
            "renderDialogContentDiv",
            "renderDialogContentInnerDiv",
          ]),
          c =
            "DialogContent _DialogLayout" +
            (e.className ? " " + e.className : "");
        return (
          n && (c += " _DialogCenterVertically"),
          o.createElement(
            p.f,
            Object(r.a)({ component: i, fallback: "div" }, s, { className: c }),
            o.createElement(
              p.f,
              {
                component: a,
                fallback: "div",
                className: "DialogContent_InnerWidth",
              },
              t
            )
          )
        );
      }
      var R = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(r.d)(t, e),
          (t.prototype.OnSubmit = function (e) {
            e.preventDefault(), this.props.onSubmit && this.props.onSubmit(e);
          }),
          (t.prototype.render = function () {
            return o.createElement(
              "form",
              Object(r.a)({}, this.props, { onSubmit: this.OnSubmit })
            );
          }),
          Object(r.c)([c.a], t.prototype, "OnSubmit", null),
          t
        );
      })(o.Component);
      function I(e) {
        var t = e.classNameContent,
          n = e.bCenterVertically,
          i = Object(r.f)(e, ["classNameContent", "bCenterVertically"]);
        return o.createElement(
          M,
          { className: t, bCenterVertically: n },
          o.createElement(R, Object(r.a)({}, i))
        );
      }
      var j = o.forwardRef(function (e, t) {
          var n = Object(u.b)();
          return o.createElement(
            p.f,
            Object(r.a)(
              { component: n.BaseButton, fallback: T, componentRef: t },
              e
            )
          );
        }),
        T = o.forwardRef(function (e, t) {
          var n = e.svgicon,
            i = (e.primary, e.renderButtonElement),
            a = Object(r.f)(e, ["svgicon", "primary", "renderButtonElement"]),
            s = Object(l.a)(e.className, { hasSVGIcon: void 0 !== n });
          return o.createElement(
            p.f,
            Object(r.a)(
              { component: i, fallback: "button", componentRef: t },
              a,
              { className: s }
            ),
            n && n(),
            e.children
          );
        }),
        k = o.forwardRef(function (e, t) {
          return o.createElement(
            j,
            Object(r.a)(
              { primary: !0, type: e.onClick ? "button" : "submit" },
              e,
              {
                ref: t,
                className: Object(l.a)(
                  e.className,
                  "DialogButton",
                  "_DialogLayout",
                  "Primary"
                ),
              }
            )
          );
        }),
        B = o.forwardRef(function (e, t) {
          return o.createElement(
            j,
            Object(r.a)({ type: "button" }, e, {
              ref: t,
              className: Object(l.a)(
                e.className,
                "DialogButton",
                "_DialogLayout",
                "Secondary"
              ),
            })
          );
        }),
        L = o.forwardRef(function (e, t) {
          return o.createElement(
            j,
            Object(r.a)({ type: "button" }, e, {
              ref: t,
              className: Object(l.a)(
                e.className,
                "DialogButton _DialogLayout Small"
              ),
            })
          );
        });
      o.forwardRef(function (e, t) {
        return o.createElement(
          j,
          Object(r.a)({ type: "button" }, e, {
            ref: t,
            className: Object(l.a)(e.className, "TextButton"),
          })
        );
      });
      function A(e) {
        return o.createElement(
          S,
          null,
          o.createElement(
            k,
            { onClick: e.onOK, disabled: e.bOKDisabled },
            e.strOKText || Object(s.f)("#Button_Confirm"),
            " "
          ),
          o.createElement(
            B,
            { onClick: e.onCancel },
            e.strCancelText || Object(s.f)("#Button_Cancel")
          )
        );
      }
      function N(e) {
        return o.createElement(
          D,
          null,
          o.createElement(
            k,
            { onClick: e.onOK, disabled: e.bOKDisabled },
            e.strOKText || Object(s.f)("#Button_Confirm"),
            " "
          ),
          o.createElement(
            k,
            { onClick: e.onUpdate, disabled: e.bUpdateDisabled },
            e.strUpdateText || Object(s.f)("#Button_Update"),
            " "
          ),
          o.createElement(
            B,
            { onClick: e.onCancel },
            e.strCancelText || Object(s.f)("#Button_Cancel")
          )
        );
      }
      var P = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (n.state = { checked: t.checked, disabled: t.disabled }), n;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.componentDidUpdate = function (e) {
              e.checked != this.props.checked &&
                this.props.checked != this.state.checked &&
                this.setState({ checked: this.props.checked }),
                e.disabled != this.props.disabled &&
                  this.props.disabled != this.state.disabled &&
                  this.setState({ disabled: this.props.disabled });
            }),
            (t.prototype.shouldComponentUpdate = function (e, t) {
              return (
                e.label != this.props.label ||
                e.description != this.props.description ||
                e.onChange != this.props.onChange ||
                e.disabled != this.props.disabled ||
                t.disabled != this.state.disabled ||
                e.checked != this.state.checked ||
                t.checked != this.state.checked
              );
            }),
            Object.defineProperty(t.prototype, "checked", {
              get: function () {
                return this.state.checked;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.GetElementProps = function () {
              return {
                tabIndex: this.props.tabIndex || 0,
                onClick: this.Toggle,
                onKeyDown: this.KeyDown,
              };
            }),
            (t.prototype.Toggle = function () {
              if (!this.props.disabled) {
                var e = !this.state.checked;
                this.setState({ checked: e }),
                  this.props.onChange && this.props.onChange(e);
              }
            }),
            (t.prototype.KeyDown = function (e) {
              32 == e.keyCode &&
                (this.Toggle(), e.preventDefault(), e.stopPropagation());
            }),
            (t.prototype.SetChecked = function (e, t) {
              this.setState({ checked: e }),
                t && this.props.onChange && this.props.onChange(e);
            }),
            Object(r.c)([c.a], t.prototype, "Toggle", null),
            Object(r.c)([c.a], t.prototype, "KeyDown", null),
            Object(r.c)([c.a], t.prototype, "SetChecked", null),
            t
          );
        })(o.Component),
        F = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.render = function () {
              var e = "DialogCheckbox" + (this.state.checked ? " Active" : "");
              return (
                1 == this.state.disabled && (e += " Disabled"),
                this.props.label
                  ? o.createElement(
                      "div",
                      Object(r.a)(
                        {
                          className:
                            "DialogCheckbox_Container _DialogLayout " +
                            (this.props.classname ? this.props.classname : ""),
                        },
                        this.GetElementProps()
                      ),
                      o.createElement(
                        "div",
                        { className: e },
                        o.createElement(a.o, {
                          color: this.props.color,
                          highlightColor: this.props.highlightColor,
                        })
                      ),
                      o.createElement(
                        "div",
                        { className: "DialogToggle_Label" },
                        o.createElement("span", null, this.props.label),
                        this.props.tooltip &&
                          o.createElement(
                            "span",
                            { "data-tooltip-text": this.props.tooltip },
                            " (?)"
                          )
                      ),
                      o.createElement("div", { style: { clear: "left" } }),
                      this.props.description &&
                        o.createElement(
                          "div",
                          { className: "DialogToggle_Description" },
                          this.props.description
                        )
                    )
                  : o.createElement(
                      "div",
                      Object(r.a)({ className: e }, this.GetElementProps()),
                      o.createElement(a.o, null)
                    )
              );
            }),
            t
          );
        })(P),
        G = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.render = function () {
              return o.createElement(
                p.f,
                Object(r.a)(
                  { component: this.context.OnOffToggle, fallback: F },
                  this.props
                )
              );
            }),
            (t.contextType = u.a),
            t
          );
        })(P),
        U = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.render = function () {
              var e = this.state.checked ? " Active" : "";
              return o.createElement(
                "div",
                Object(r.a)(
                  {
                    className: Object(l.a)(
                      "DialogRoundCheckbox_Container",
                      this.props.classname,
                      this.props.label ? "WithLabel" : ""
                    ),
                  },
                  this.GetElementProps()
                ),
                o.createElement(
                  "div",
                  { className: "DialogRoundCheckbox" },
                  o.createElement(
                    "div",
                    { className: "DialogRoundCheckbox_Control" + e },
                    o.createElement(
                      "div",
                      { className: "DialogRoundCheckbox_OuterCircle" },
                      o.createElement("div", {
                        className: "DialogRoundCheckbox_InnerCircle",
                      })
                    )
                  )
                ),
                this.props.label &&
                  o.createElement(
                    "div",
                    { className: "DialogToggle_Label" },
                    o.createElement("span", null, this.props.label),
                    this.props.tooltip &&
                      o.createElement(
                        "span",
                        { "data-tooltip-text": this.props.tooltip },
                        " (?)"
                      )
                  )
              );
            }),
            t
          );
        })(P),
        H = o.forwardRef(function (e, t) {
          var n = Object(u.b)();
          return o.createElement(
            p.f,
            Object(r.a)(
              { component: n.OnOffToggle, fallback: W, componentRef: t },
              e
            )
          );
        }),
        W = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.OnOffKeyDown = function (e) {
              (37 == e.keyCode && this.state.checked) ||
              (39 == e.keyCode && !this.state.checked)
                ? (this.Toggle(), e.preventDefault(), e.stopPropagation())
                : this.KeyDown(e);
            }),
            (t.prototype.OnNewUIToggle = function (e) {
              e !== this.state.checked && this.Toggle();
            }),
            (t.prototype.render = function () {
              var e =
                "DialogOnOffToggle _DialogInputContainer _DialogLayout " +
                (this.props.classname ? this.props.classname : "");
              return (
                this.props.disabled && (e += " Disabled"),
                o.createElement(
                  "div",
                  {
                    className: e,
                    tabIndex: this.props.tabIndex || 0,
                    onKeyDown: this.OnOffKeyDown,
                  },
                  o.createElement(
                    "div",
                    { className: "displayColumn alignSelfCenter" },
                    o.createElement(
                      "div",
                      { className: "DialogToggle_Label" },
                      o.createElement("span", null, this.props.label),
                      this.props.tooltip &&
                        o.createElement(
                          "span",
                          { "data-tooltip-text": this.props.tooltip },
                          " (?)"
                        )
                    ),
                    this.props.description &&
                      o.createElement(
                        "div",
                        { className: "DialogToggle_Description" },
                        this.props.description
                      ),
                    this.props.children
                  ),
                  this.props.useToggleRail
                    ? o.createElement(
                        "div",
                        { className: "DialogOnOffToggle_NewUIContainer" },
                        o.createElement(m, {
                          onChange: this.OnNewUIToggle,
                          value: this.state.checked,
                        })
                      )
                    : o.createElement(
                        "div",
                        {
                          className: "DialogOnOffToggle_Control",
                          onClick: this.Toggle,
                        },
                        o.createElement(
                          "div",
                          {
                            className:
                              "DialogOnOffToggle_Option Off" +
                              (this.state.checked ? "" : " Active"),
                          },
                          Object(s.f)("#Dialog_Off")
                        ),
                        o.createElement(
                          "div",
                          {
                            className:
                              "DialogOnOffToggle_Option On" +
                              (this.state.checked ? " Active" : ""),
                          },
                          Object(s.f)("#Dialog_On")
                        )
                      )
                )
              );
            }),
            Object(r.c)([c.a], t.prototype, "OnOffKeyDown", null),
            Object(r.c)([c.a], t.prototype, "OnNewUIToggle", null),
            t
          );
        })(P),
        V = n("hJxo"),
        z = n("r64O");
      function K(e) {
        var t = e.htmlElementRef,
          n = Object(r.f)(e, ["htmlElementRef"]);
        return o.createElement("input", Object(r.a)({}, n, { ref: t }));
      }
      var Y = function (e) {
          var t = Object(u.b)();
          return o.createElement(
            p.f,
            Object(r.a)(
              { component: null == t ? void 0 : t.InputElement, fallback: K },
              e
            )
          );
        },
        X = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              n.CheckProps(t),
              (n.state = {
                m_CopiedYPos: 0,
                m_bPlayingCopiedAnimation: !1,
                m_bCompletedCopiedAnimation: !1,
                m_bNumberBelowMinRange: !1,
                m_bNumberAboveMaxRange: !1,
                m_bIsNotNumeric: !1,
                m_bIsInvalidURL: !1,
                m_bIsInvalidEmail: !1,
              }),
              n
            );
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.componentDidUpdate = function (e) {
              this.CheckProps(this.props);
            }),
            (t.prototype.OnInputRef = function (e) {
              (this.m_elInput = e),
                this.m_elInput &&
                  this.props.focusOnMount &&
                  this.m_elInput.focus();
            }),
            Object.defineProperty(t.prototype, "element", {
              get: function () {
                return this.m_elInput;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "value", {
              get: function () {
                return this.m_elInput && this.m_elInput.value;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.validateUrl = function (e) {
              return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
                e
              );
            }),
            (t.validateEmail = function (e) {
              return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                e.toLowerCase()
              );
            }),
            (t.prototype.Validate = function () {
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
                  !t.validateUrl(this.m_elInput.value),
                m_bIsInvalidEmail:
                  1 == this.props.mustBeEmail &&
                  !t.validateEmail(this.m_elInput.value),
              });
            }),
            (t.prototype.OnChanged = function (e) {
              this.props.onChange && this.props.onChange(e), this.Validate();
            }),
            (t.prototype.OnCopyClick = function (e) {
              var t = this;
              if (this.m_elInput) {
                this.m_elInput.select();
                var n = this.m_elInput.ownerDocument;
                if (n.queryCommandEnabled("copy")) {
                  n.execCommand("copy"),
                    e.currentTarget.focus(),
                    this.m_CopiedAnimation && this.m_CopiedAnimation.Cancel();
                  this.setState({ m_bCompletedCopiedAnimation: !1 }),
                    this.setState({ m_CopiedYPos: -4 }, function () {
                      (t.m_CopiedAnimation = new V.b(
                        t,
                        { m_CopiedYPos: -24 },
                        {
                          msDuration: 300,
                          timing: "sine",
                          setStateOnComplete: {
                            m_bCompletedCopiedAnimation: !0,
                          },
                        }
                      )),
                        t.m_CopiedAnimation.Start();
                    });
                }
              }
            }),
            (t.prototype.OnClearClick = function (e) {
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
            (t.prototype.CheckProps = function (e) {
              Object(z.a)(
                !(e.bShowClearAction || e.bAlwaysShowClearAction) || e.onChange,
                "In order for bShowClearAction to work correctly, you should be handling onChange and passing value to the Dialog.Input."
              );
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.label,
                n = e.explainer,
                i = (e.requiredLabel, e.bShowCopyAction),
                c = e.bShowClearAction,
                l = e.bAlwaysShowClearAction,
                u = e.bIsPassword,
                p =
                  (e.rangeMin,
                  e.rangeMax,
                  e.mustBeNumeric,
                  e.mustBeURL,
                  e.mustBeEmail,
                  e.focusOnMount,
                  e.tooltip,
                  Object(r.f)(e, [
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
                    "tooltip",
                  ])),
                d =
                  "DialogInput DialogInputPlaceholder DialogTextInputBase" +
                  (p.className ? " " + p.className : ""),
                h = "copiedAnimation",
                m = this.state.m_bCompletedCopiedAnimation;
              this.m_CopiedAnimation &&
                (h = "copiedAnimation animationPlaying"),
                m && (h = "copiedAnimation animationComplete");
              var f = {};
              void 0 !== this.state.m_CopiedYPos &&
                (f.transform = "translateY(" + this.state.m_CopiedYPos + "px)");
              var g = void 0;
              n &&
                (g = o.createElement(
                  "div",
                  { className: "DialogLabelExplainer" },
                  n
                ));
              var b = o.createElement(
                o.Fragment,
                null,
                o.createElement(
                  "div",
                  { className: "DialogInput_Wrapper _DialogLayout" },
                  o.createElement(
                    Y,
                    Object(r.a)({ type: u ? "password" : "text" }, p, {
                      className: d,
                      htmlElementRef: this.OnInputRef,
                      onChange: this.OnChanged,
                    })
                  ),
                  i &&
                    o.createElement(
                      "div",
                      { className: "displayRow" },
                      o.createElement(
                        B,
                        {
                          className: "DialogInput_CopyAction Primary",
                          onClick: this.OnCopyClick,
                        },
                        Object(s.f)("#Button_CopyLink")
                      ),
                      o.createElement(
                        "div",
                        { style: f, className: h },
                        "Link Copied"
                      )
                    ),
                  (l || (c && p.value)) &&
                    o.createElement(
                      "div",
                      {
                        className: "DialogInput_ClearAction",
                        onClick: this.OnClearClick,
                      },
                      o.createElement(a.lb, null)
                    )
                ),
                g
              );
              return t
                ? o.createElement(
                    "div",
                    { className: "DialogInputLabelGroup _DialogLayout " },
                    o.createElement(
                      "label",
                      null,
                      o.createElement(
                        "div",
                        { className: "DialogLabel" },
                        t,
                        " ",
                        this.props.tooltip &&
                          o.createElement(
                            "span",
                            { "data-tooltip-text": this.props.tooltip },
                            " (?)"
                          ),
                        o.createElement(
                          "span",
                          { className: "DialogInputRequirementLabel" },
                          this.props.requiredLabel
                        ),
                        " "
                      ),
                      b,
                      this.state.m_bNumberBelowMinRange
                        ? o.createElement(
                            "div",
                            null,
                            " ",
                            Object(s.f)("#Input_Error_NumberTooSmall"),
                            " "
                          )
                        : null,
                      this.state.m_bNumberAboveMaxRange
                        ? o.createElement(
                            "div",
                            null,
                            " ",
                            Object(s.f)("#Input_Error_NumberTooLarge"),
                            " "
                          )
                        : null,
                      this.state.m_bIsInvalidURL
                        ? o.createElement(
                            "div",
                            null,
                            " ",
                            Object(s.f)("#Input_Error_MustBeURL"),
                            " "
                          )
                        : null,
                      this.state.m_bIsInvalidEmail
                        ? o.createElement(
                            "div",
                            null,
                            " ",
                            Object(s.f)("#Input_Error_MustBeEmail"),
                            " "
                          )
                        : null,
                      this.state.m_bIsNotNumeric
                        ? o.createElement(
                            "div",
                            null,
                            " ",
                            Object(s.f)("#Input_Error_MustBeNumber"),
                            " "
                          )
                        : null
                    )
                  )
                : b;
            }),
            Object(r.c)([c.a], t.prototype, "OnInputRef", null),
            Object(r.c)([c.a], t.prototype, "OnChanged", null),
            Object(r.c)([c.a], t.prototype, "OnCopyClick", null),
            Object(r.c)([c.a], t.prototype, "OnClearClick", null),
            t
          );
        })(o.PureComponent),
        q = function (e) {
          var t = Object(u.b)();
          return o.createElement(
            p.f,
            Object(r.a)({ component: t.SliderField, fallback: J }, e)
          );
        },
        J = (function (e) {
          function t(t) {
            return e.call(this, t) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.ClampValue = function (e) {
              return void 0 === e || isNaN(e) || e < this.props.min
                ? this.props.min
                : e > this.props.max
                ? this.props.max
                : e;
            }),
            (t.prototype.BPropsValid = function () {
              return this.props.max > this.props.min;
            }),
            (t.prototype.OnMouseDown = function (e) {
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
            (t.prototype.OnMouseMove = function (e) {
              this.AdjustSliderForClientX(e.clientX);
            }),
            (t.prototype.OnMouseUp = function (e) {
              this.m_elSlider.ownerDocument.defaultView.removeEventListener(
                "mousemove",
                this.OnMouseMove
              ),
                this.m_elSlider.ownerDocument.defaultView.removeEventListener(
                  "mouseup",
                  this.OnMouseUp
                ),
                this.props.onChangeComplete && this.props.onChangeComplete();
            }),
            (t.prototype.OnTouchStart = function (e) {
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
            (t.prototype.OnTouchMove = function (e) {
              this.AdjustSliderForClientX(e.touches[0].clientX);
            }),
            (t.prototype.OnTouchEnd = function (e) {
              this.m_elSlider.ownerDocument.defaultView.removeEventListener(
                "touchmove",
                this.OnTouchMove
              ),
                this.m_elSlider.ownerDocument.defaultView.removeEventListener(
                  "touchend",
                  this.OnTouchEnd
                ),
                this.props.onChangeComplete && this.props.onChangeComplete();
            }),
            (t.prototype.OnKeyDown = function (e) {
              var t = 1;
              e.ctrlKey &&
                (t = Math.max(
                  1,
                  Math.floor(0.1 * (this.props.max - this.props.min) + 0.5)
                )),
                37 == e.keyCode
                  ? (this.IncrementValue(-1 * t), e.preventDefault())
                  : 39 == e.keyCode &&
                    (this.IncrementValue(1 * t), e.preventDefault()),
                this.props.onChangeComplete && this.props.onChangeComplete();
            }),
            (t.prototype.AdjustSliderForClientX = function (e) {
              var t =
                ((e - this.m_rectSlider.left) /
                  (this.m_rectSlider.right - this.m_rectSlider.left)) *
                  (this.props.max - this.props.min) +
                this.props.min;
              t = Math.floor(t + 0.5);
              var n = this.ClampValue(t);
              n != this.props.value &&
                this.props.onChange &&
                this.props.onChange(n);
            }),
            (t.prototype.IncrementValue = function (e) {
              var t = this.ClampValue(this.props.value + e);
              t != this.props.value &&
                this.props.onChange &&
                this.props.onChange(t);
            }),
            (t.prototype.render = function () {
              var e = {},
                t = {};
              if (this.BPropsValid()) {
                var n =
                  (100 * (this.props.value - this.props.min)) /
                    (this.props.max - this.props.min) +
                  "%";
                (e.width = n), (t.left = n);
              }
              var i = this.props,
                a = i.label,
                s = i.explainer,
                c = i.tooltip,
                l = (Object(r.f)(i, ["label", "explainer", "tooltip"]), void 0);
              return (
                s &&
                  (l = o.createElement(
                    "div",
                    { className: "DialogLabelExplainer" },
                    s
                  )),
                o.createElement(
                  "div",
                  {
                    className:
                      "DialogSlider_Container _DialogInputContainer _DialogLayout" +
                      (this.props.classname ? " " + this.props.classname : ""),
                    onKeyDown: this.OnKeyDown,
                    tabIndex: this.props.tabIndex || 0,
                  },
                  a &&
                    o.createElement(
                      "div",
                      { className: "DialogLabel" },
                      a,
                      Boolean(c) &&
                        o.createElement(
                          "span",
                          { "data-tooltip-text": c },
                          " (?)"
                        )
                    ),
                  o.createElement(
                    "div",
                    {
                      className: "DialogSlider_Slider",
                      onMouseDown: this.OnMouseDown,
                      onTouchStart: this.OnTouchStart,
                    },
                    o.createElement("div", {
                      className: "DialogSlider_Value",
                      style: e,
                    }),
                    o.createElement("div", {
                      className: "DialogSlider_Grabber",
                      style: t,
                    })
                  ),
                  this.props.showValue
                    ? o.createElement(
                        "div",
                        { className: "DialogLabelExplainer" },
                        this.props.value
                      )
                    : null,
                  l
                )
              );
            }),
            Object(r.c)([c.a], t.prototype, "OnMouseDown", null),
            Object(r.c)([c.a], t.prototype, "OnMouseMove", null),
            Object(r.c)([c.a], t.prototype, "OnMouseUp", null),
            Object(r.c)([c.a], t.prototype, "OnTouchStart", null),
            Object(r.c)([c.a], t.prototype, "OnTouchMove", null),
            Object(r.c)([c.a], t.prototype, "OnTouchEnd", null),
            Object(r.c)([c.a], t.prototype, "OnKeyDown", null),
            t
          );
        })(o.Component),
        Q = n("TtDX"),
        Z = n("P++D"),
        $ = n.n(Z),
        ee = n("5E+2"),
        te = n("6+2x"),
        ne = n.n(te);
      function re(e) {
        var t = Object(u.b)();
        return o.createElement(
          p.f,
          Object(r.a)({ component: t.DropDownField, fallback: oe }, e)
        );
      }
      function oe(e) {
        var t = e.label,
          n = e.tooltip,
          i = e.strClassName,
          a = e.dropDownControlRef,
          s = Object(r.f)(e, [
            "label",
            "tooltip",
            "strClassName",
            "dropDownControlRef",
          ]);
        return o.createElement(
          "div",
          {
            className: Object(l.a)("DialogInputLabelGroup", "_DialogLayout", i),
          },
          t &&
            o.createElement(
              "div",
              { className: "DialogLabel" },
              t,
              n && o.createElement("span", { "data-tooltip-text": n }, " (?)")
            ),
          o.createElement(se, Object(r.a)({ menuLabel: t }, s, { ref: a }))
        );
      }
      var ie = o.forwardRef(function (e, t) {
          var n = Object(u.b)();
          return o.createElement(
            p.f,
            Object(r.a)(
              {
                component: n.DropDownControlButton,
                fallback: ae,
                componentRef: t,
              },
              e
            )
          );
        }),
        ae = o.forwardRef(function (e, t) {
          return o.createElement(
            g.a,
            {
              focusable: e.focusable,
              noFocusRing: !0,
              className: Object(l.a)(
                "DialogDropDown",
                "_DialogInputContainer",
                { Active: e.opened, Disabled: e.disabled }
              ),
              tabIndex: e.tabIndex,
              onClick: e.onClick,
              ref: t,
            },
            e.children,
            !e.disabled &&
              o.createElement(
                "div",
                { className: "DialogDropDown_Arrow" },
                o.createElement(a.q, null)
              )
          );
        }),
        se = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.state = {
                iSelectedOption: n.FindActiveOptionIndex(t.selectedOption),
                bOpened: !1,
              }),
              n
            );
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.FindAndSetActiveOption = function (e) {
              var t = this.FindActiveOptionIndex(e);
              t !== this.state.iSelectedOption &&
                this.setState({ iSelectedOption: t });
            }),
            (t.prototype.FindActiveOptionIndex = function (e) {
              for (var t = 0; t < this.props.rgOptions.length; t++)
                if (this.props.rgOptions[t].data === e) return t;
            }),
            Object.defineProperty(t.prototype, "value", {
              get: function () {
                return void 0 !== this.state.iSelectedOption
                  ? this.props.rgOptions[this.state.iSelectedOption]
                  : void 0;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.SetSelectedOption = function (e) {
              null != e
                ? this.FindAndSetActiveOption(e)
                : this.setState({ iSelectedOption: void 0 });
            }),
            (t.prototype.shouldComponentUpdate = function (e, t, n) {
              if (e.selectedOption !== this.props.selectedOption) {
                var r = this.FindActiveOptionIndex(e.selectedOption);
                if (this.state.iSelectedOption !== r) return !0;
              }
              if (e.disabled != this.props.disabled) return !0;
              if (
                t.bOpened !== this.state.bOpened ||
                t.iSelectedOption !== this.state.iSelectedOption
              )
                return !0;
              for (
                var o = 0,
                  i = [
                    "selectedOption",
                    "tabIndex",
                    "onChange",
                    "strDefaultLabel",
                  ];
                o < i.length;
                o++
              ) {
                var a = i[o];
                if (e[a] !== this.props[a]) return !0;
              }
              return !(
                !this.state.bOpened || !this.DoOptionsDiffer(e.rgOptions)
              );
            }),
            (t.prototype.DoOptionsDiffer = function (e) {
              if (e.length != this.props.rgOptions.length) return !0;
              for (var t = 0; t < e.length; t++)
                if (e[t].label !== this.props.rgOptions[t].label) return !0;
              return !1;
            }),
            (t.prototype.componentDidUpdate = function (e) {
              if (this.DoOptionsDiffer(e.rgOptions)) {
                if (void 0 !== this.state.iSelectedOption) {
                  var t = e.rgOptions[this.state.iSelectedOption];
                  t && this.FindAndSetActiveOption(t.data);
                } else this.FindAndSetActiveOption(this.props.selectedOption);
                this.state.bOpened
                  ? (this.m_iMenuInstance.SetOnHideCallback(null),
                    this.m_iMenuInstance.Hide(),
                    (this.m_iMenuInstance = void 0),
                    this.BuildMenu())
                  : this.m_iMenuInstance &&
                    (this.m_iMenuInstance.SetOnHideCallback(null),
                    (this.m_iMenuInstance = void 0));
              } else
                e.selectedOption !== this.props.selectedOption &&
                  this.FindAndSetActiveOption(this.props.selectedOption);
            }),
            (t.prototype.OnInputRef = function (e) {
              this.m_elInput = e;
            }),
            Object.defineProperty(t.prototype, "element", {
              get: function () {
                return this.m_elInput;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.ToggleMenu = function () {
              this.state.bOpened ? this.HideMenu() : this.ShowMenu();
            }),
            (t.prototype.OnItemSelected = function (e, t) {
              this.HideMenu(),
                this.setState({ iSelectedOption: e }),
                this.props.onChange &&
                  this.props.onChange(
                    void 0 !== e ? this.props.rgOptions[e] : void 0,
                    this
                  );
            }),
            (t.prototype.BuildMenu = function () {
              var e,
                t = "DialogMenuPosition";
              this.props.strDropDownClassName &&
                (t += " " + this.props.strDropDownClassName);
              var n = Object(r.a)(
                {
                  bOverlapHorizontal: !0,
                  bMatchWidth: !0,
                  bFitToWindow: !0,
                  strClassName: t,
                  bDisableMouseOverlay: this.props.bDisableMouseOverlay,
                },
                this.props.contextMenuPositionOptions
              );
              (this.m_iMenuInstance = Object(Q.a)(
                o.createElement(
                  u.a.Provider,
                  { value: this.context },
                  o.createElement(ce, {
                    rgOptions: this.props.rgOptions,
                    fnOnItemSelected: this.OnItemSelected,
                    strDropDownItemClassName: this.props
                      .strDropDownItemClassName,
                  })
                ),
                this.m_elInput,
                n
              )),
                this.m_iMenuInstance.SetLabel(
                  null !== (e = this.props.menuLabel) && void 0 !== e
                    ? e
                    : "string" == typeof this.props.strDefaultLabel &&
                        this.props.strDefaultLabel
                ),
                this.m_iMenuInstance.SetOnHideCallback(this.HideMenu);
            }),
            (t.prototype.ShowMenu = function () {
              this.m_iMenuInstance
                ? this.m_iMenuInstance.Show()
                : this.BuildMenu(),
                this.props.onMenuOpened && this.props.onMenuOpened(),
                this.setState({ bOpened: !0 });
            }),
            (t.prototype.HideMenu = function () {
              this.m_iMenuInstance && this.m_iMenuInstance.Hide(),
                this.setState({ bOpened: !1 });
            }),
            (t.prototype.render = function () {
              var e,
                t,
                n,
                r,
                i =
                  void 0 !== this.state.iSelectedOption &&
                  this.props.rgOptions[this.state.iSelectedOption],
                a = o.createElement(
                  "div",
                  { className: "DialogDropDown_CurrentDisplay" },
                  null !== (e = null == i ? void 0 : i.label) && void 0 !== e
                    ? e
                    : this.props.strDefaultLabel
                ),
                s =
                  null != this.props.renderButtonValue
                    ? this.props.renderButtonValue(a)
                    : a,
                c = null === (t = this.props.focusable) || void 0 === t || t;
              return o.createElement(
                p.f,
                {
                  component: this.props.renderButton,
                  fallback: ie,
                  focusable: c,
                  disabled:
                    null !== (n = this.props.disabled) && void 0 !== n && n,
                  opened: this.state.bOpened,
                  onClick: this.props.disabled ? void 0 : this.ToggleMenu,
                  tabIndex:
                    null !== (r = this.props.tabIndex) && void 0 !== r
                      ? r
                      : c
                      ? 0
                      : null,
                  componentRef: this.OnInputRef,
                },
                s
              );
            }),
            (t.contextType = u.a),
            Object(r.c)([c.a], t.prototype, "OnInputRef", null),
            Object(r.c)([c.a], t.prototype, "ToggleMenu", null),
            Object(r.c)([c.a], t.prototype, "OnItemSelected", null),
            Object(r.c)([c.a], t.prototype, "ShowMenu", null),
            Object(r.c)([c.a], t.prototype, "HideMenu", null),
            t
          );
        })(o.Component);
      function ce(e) {
        var t = Object(u.b)();
        return o.createElement(
          p.f,
          Object(r.a)({ component: t.DropDownMenu, fallback: le }, e)
        );
      }
      function le(e) {
        var t = function (t) {
            var n = parseInt(
              t.currentTarget.getAttribute("data-dropdown-index")
            );
            (n || 0 === n) &&
              n >= 0 &&
              n < e.rgOptions.length &&
              e.fnOnItemSelected(n, e.rgOptions[n]);
          },
          n = Object(l.a)(
            $.a.DialogDropDownMenu_Item,
            e.strDropDownItemClassName
          ),
          r = e.rgOptions.map(function (r, i) {
            return o.createElement(
              p.f,
              {
                component: e.renderMenuItem,
                fallback: "div",
                key: i,
                className: Object(l.a)(n, r.strOptionClass),
                "data-dropdown-index": i,
                onClick: t,
              },
              Boolean(r.tooltip)
                ? o.createElement(
                    ee.a,
                    {
                      toolTipContent: r.tooltip,
                      strTooltipClassname: ne.a.HoverAboveModal,
                    },
                    r.label
                  )
                : o.createElement(o.Fragment, null, r.label)
            );
          });
        return o.createElement(
          p.f,
          {
            component: e.renderMenuContainer,
            fallback: "div",
            className: Object(l.a)(
              $.a.DialogDropDownMenu,
              "_DialogInputContainer"
            ),
          },
          r
        );
      }
      var ue = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.state = { rgOptions: void 0 }), t;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.OnMenuOpened = function () {
              return Object(r.b)(this, void 0, void 0, function () {
                var e;
                return Object(r.e)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return this.state.rgOptions
                        ? [3, 2]
                        : [4, this.props.fnLoadOptions()];
                    case 1:
                      (e = t.sent()),
                        this.setState({ rgOptions: e }),
                        (t.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = (e.fnLoadOptions, e.strInitialDisplay),
                n = e.initialValue,
                i = Object(r.f)(e, [
                  "fnLoadOptions",
                  "strInitialDisplay",
                  "initialValue",
                ]),
                a = this.state.rgOptions;
              return (
                void 0 === a &&
                  (t || n
                    ? ((a = [{ label: t, data: n }]), (i.selectedOption = n))
                    : (a = [])),
                o.createElement(
                  re,
                  Object(r.a)({}, i, {
                    rgOptions: a,
                    onMenuOpened: this.OnMenuOpened,
                  })
                )
              );
            }),
            Object(r.c)([c.a], t.prototype, "OnMenuOpened", null),
            t
          );
        })(o.Component),
        pe = n("2vnA"),
        de = n("sUmc"),
        he = n("Kw0F"),
        me = n("YyVH"),
        fe = n("UPxs");
      o.Component;
      function ge(e, t, n, r) {
        return r
          ? n && e > n.left && e < n.right && t > n.top && t < n.bottom
          : n && e >= n.left && e <= n.right && t >= n.top && t <= n.bottom;
      }
      var be = (function () {
          function e() {
            (this.m_embeddedElement = new de.a("DragGhosts")),
              (this.m_rgDropRegions = []),
              (this.m_rgActiveDropRegions = []);
          }
          return (
            (e.prototype.RegisterDropRegion = function (e) {
              this.m_rgDropRegions.push(e),
                this.m_activeDraggable &&
                  e.BAcceptDraggable(this.m_activeDraggable) &&
                  (e.OnDragStarted(this.m_activeDraggable),
                  this.m_rgActiveDropRegions.push(e));
            }),
            (e.prototype.UnregisterDropRegion = function (e) {
              he.b(this.m_rgDropRegions, e),
                he.b(this.m_rgActiveDropRegions, e),
                this.m_activeDropRegion == e &&
                  ((this.m_activeDropRegion = void 0),
                  this.m_activeDraggable && this.ShowDragGhost());
            }),
            (e.prototype.OnDragGhostRef = function (e) {
              this.m_dragGhost = e;
            }),
            (e.prototype.ShowDragGhost = function () {
              var e = this.m_activeDraggable.renderDragGhost(),
                t = Object(l.a)(
                  e.props.className,
                  !!this.m_activeDropRegion && "DraggedOverActiveDrop"
                ),
                n = o.cloneElement(e, {
                  ref: this.OnDragGhostRef,
                  className: t,
                });
              this.m_embeddedElement.ShowElement(
                this.m_activeDraggable.GetDragDocument(),
                n,
                this.m_activeDraggable
              );
            }),
            (e.prototype.HideDragGhost = function () {
              this.m_embeddedElement.HideElement(
                this.m_activeDraggable.GetDragDocument(),
                this.m_activeDraggable
              );
            }),
            (e.prototype.OnDragStart = function (e) {
              (this.m_activeDraggable = e), (this.m_rgActiveDropRegions = []);
              for (var t = 0, n = this.m_rgDropRegions; t < n.length; t++) {
                var r = n[t];
                r.BAcceptDraggable(e) &&
                  (r.OnDragStarted(e), this.m_rgActiveDropRegions.push(r));
              }
              this.ShowDragGhost();
            }),
            (e.prototype.EndDrag = function () {
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
            (e.prototype.FindBestActiveDropRegionForPoint = function (e, t) {
              var n,
                r = this.m_activeDraggable.GetDragDocument();
              if ("elementsFromPoint" in r) n = r.elementsFromPoint(e, t);
              else if ("msElementsFromPoint" in r) {
                var o = r.msElementsFromPoint;
                n = Array.from(o(e, t));
              }
              if (n) {
                var i = new Map();
                this.m_rgActiveDropRegions.forEach(function (e) {
                  return i.set(e.GetElement(), e);
                });
                for (var a = 0, s = n; a < s.length; a++) {
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
                  u >= 0;
                  u--
                ) {
                  var p = this.m_rgActiveDropRegions[u];
                  if (p.BDraggableInRegion(e, t, this.m_activeDraggable))
                    return p;
                }
              }
              return null;
            }),
            (e.prototype.OnDrag = function (e, t, n) {
              var r = this,
                o = void 0 === t ? 0 : t - this.m_dragGhost.state.clientX,
                i = void 0 === n ? 0 : n - this.m_dragGhost.state.clientY;
              if (
                (e.props.bEnableHTMLDrag &&
                  this.m_dragOffWindowTimer &&
                  window.clearTimeout(this.m_dragOffWindowTimer),
                this.m_dragGhost &&
                  (this.m_dragGhost.setState({
                    clientX: t,
                    clientY: n,
                    clientXDelta: o,
                    clientYDelta: i,
                    bVisible: !0,
                  }),
                  e.props.bEnableHTMLDrag && (o || i)))
              ) {
                var a = t + o,
                  s = n + i,
                  c = e.GetDragDocument().body.getBoundingClientRect();
                if (ge(t, n, c) && !ge(a, s, c, !0)) {
                  var l = me.c(a, c.left, c.right, c.left - 200, c.right + 200),
                    u = me.c(s, c.top, c.bottom, c.top - 100, c.bottom + 100);
                  this.m_dragOffWindowTimer = window.setTimeout(function () {
                    e == r.m_activeDraggable && r.OnDrag(e, l, u);
                  }, 50);
                }
              }
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
            Object(r.c)([c.a], e.prototype, "OnDragGhostRef", null),
            e
          );
        })(),
        ve = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.m_DragInfo = {
                bStarted: !1,
                startClientX: void 0,
                startClientY: void 0,
                startOffsetX: void 0,
                startOffsetY: void 0,
                startWidth: void 0,
                startHeight: void 0,
                ownerWin: void 0,
              }),
              (t.m_divRef = o.createRef()),
              t
            );
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.GetDragDocument = function () {
              return (
                this.m_DragInfo.ownerWin && this.m_DragInfo.ownerWin.document
              );
            }),
            (t.prototype.RecordDragStart = function (e, t, n) {
              (this.m_DragInfo.startClientX = t),
                (this.m_DragInfo.startClientY = n);
              var r = e.getBoundingClientRect();
              (this.m_DragInfo.startOffsetX = t - r.left),
                (this.m_DragInfo.startOffsetY = n - r.top),
                (this.m_DragInfo.startWidth = r.width),
                (this.m_DragInfo.startHeight = r.height),
                (this.m_DragInfo.ownerWin = e.ownerDocument.defaultView);
            }),
            (t.prototype.ProcessDragMove = function (e) {
              var t = (function (e) {
                  if ("touches" in e) {
                    var t = e;
                    return [t.touches[0].clientX, t.touches[0].clientY];
                  }
                  return [e.clientX, e.clientY];
                })(e),
                n = t[0],
                r = t[1];
              if (this.m_DragInfo.bStarted) {
                if (this.props.bEnableHTMLDrag && 0 == n && 0 == r) return;
                this.props.coordinator.OnDrag(this, n, r);
              } else
                Math.pow(n - this.m_DragInfo.startClientX, 2) +
                  Math.pow(r - this.m_DragInfo.startClientY, 2) >=
                  25 &&
                  ((this.m_DragInfo.bStarted = !0),
                  this.forceUpdate(),
                  this.props.fnOnDragStart && this.props.fnOnDragStart(),
                  this.props.coordinator.OnDragStart(this),
                  this.props.coordinator.OnDrag(this, n, r));
            }),
            (t.prototype.OnMouseDown = function (e) {
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
            (t.prototype.OnMouseUp = function (e) {
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
            (t.prototype.OnTouchStart = function (e) {
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
            (t.prototype.OnTouchEnd = function (e) {
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
            (t.prototype.ResetDragState = function () {
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
            (t.prototype.OnHTMLDragStart = function (e) {
              (e.dataTransfer.effectAllowed = "copyMove"),
                this.props.strHTMLDragData &&
                  this.props.strHTMLDragData.forEach(function (t, n) {
                    return e.dataTransfer.setData(n, t);
                  }),
                e.dataTransfer.getData("text/plain") ||
                  e.dataTransfer.setData(
                    "text/plain",
                    this.props.data.toString()
                  );
              var t = new Image();
              e.dataTransfer.setDragImage(t, 0, 0),
                this.RecordDragStart(e.currentTarget, e.clientX, e.clientY);
            }),
            (t.prototype.OnHTMLDragEnd = function () {
              this.ResetDragState();
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = (e.coordinator, e.data, e.bEnableHTMLDrag),
                n =
                  (e.strHTMLDragData,
                  e.fnOnDragStart,
                  e.fnOnDragEnd,
                  e.fnRenderDragGhost,
                  e.fnRenderDropGhost,
                  e.className),
                i = e.strActiveClassName,
                a = e.children,
                s = Object(r.f)(e, [
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
                  "children",
                ]),
                c = {},
                u = n || "DialogDraggable";
              return (
                this.m_DragInfo.bStarted
                  ? ((u = Object(l.a)(u, i || "DraggedOut")),
                    t &&
                      (c = {
                        onDrag: this.ProcessDragMove,
                        onDragEnd: this.OnHTMLDragEnd,
                      }))
                  : (c = t
                      ? {
                          onDragStart: this.OnHTMLDragStart,
                          onDrag: this.ProcessDragMove,
                          onDragEnd: this.OnHTMLDragEnd,
                        }
                      : {
                          onMouseDown: this.OnMouseDown,
                          onTouchStart: this.OnTouchStart,
                        }),
                o.createElement(
                  "div",
                  Object(r.a)({ ref: this.m_divRef, className: u }, c, s, {
                    draggable: t,
                  }),
                  a
                )
              );
            }),
            (t.prototype.renderDropGhost = function () {
              return this.props.fnRenderDropGhost
                ? this.props.fnRenderDropGhost()
                : o.createElement(_e, { elContent: this.GetClone() });
            }),
            (t.prototype.renderDragGhost = function () {
              return this.props.fnRenderDragGhost
                ? this.props.fnRenderDragGhost()
                : o.createElement(ye, {
                    elContent: this.GetClone(),
                    offsetX: this.m_DragInfo.startOffsetX,
                    offsetY: this.m_DragInfo.startOffsetY,
                    width: this.m_DragInfo.startWidth,
                    height: this.m_DragInfo.startHeight,
                  });
            }),
            (t.prototype.GetClone = function () {
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
            Object(r.c)([c.a], t.prototype, "ProcessDragMove", null),
            Object(r.c)([c.a], t.prototype, "OnMouseDown", null),
            Object(r.c)([c.a], t.prototype, "OnMouseUp", null),
            Object(r.c)([c.a], t.prototype, "OnTouchStart", null),
            Object(r.c)([c.a], t.prototype, "OnTouchEnd", null),
            Object(r.c)([pe.k], t.prototype, "ResetDragState", null),
            Object(r.c)([c.a], t.prototype, "OnHTMLDragStart", null),
            Object(r.c)([c.a], t.prototype, "OnHTMLDragEnd", null),
            t
          );
        })(o.Component),
        _e = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.OnRef = function (e) {
              e && e.appendChild(this.props.elContent);
            }),
            (t.prototype.render = function () {
              return o.createElement("div", {
                className: "DialogDraggable_DropGhost",
                ref: this.OnRef,
              });
            }),
            Object(r.c)([c.a], t.prototype, "OnRef", null),
            t
          );
        })(o.Component),
        ye = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                clientX: void 0,
                clientY: void 0,
                bVisible: !0,
                clientXDelta: void 0,
                clientYDelta: void 0,
              }),
              t
            );
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.OnRef = function (e) {
              e && e.appendChild(this.props.elContent);
            }),
            (t.prototype.CalculateRotationDegrees = function (e) {
              return !e || Math.abs(e) < 4
                ? 0
                : (e > 0 ? 7.5 : -7.5) * Math.sqrt(Math.abs(e));
            }),
            (t.prototype.render = function () {
              if (
                !this.state.bVisible ||
                void 0 === this.state.clientX ||
                void 0 === this.state.clientY
              )
                return o.createElement("div", null);
              var e = {
                  left: this.state.clientX - (this.props.offsetX || 0),
                  top: this.state.clientY - (this.props.offsetY || 0),
                  width: this.props.width || "auto",
                  height: this.props.height || "auto",
                  perspective: "600px",
                },
                t = me.c(
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
                  filter: "brightness(" + t + ")",
                },
                r = this.props.className || "DialogDraggable_DragGhost";
              return o.createElement(
                "div",
                { className: r, style: e },
                o.createElement("div", { ref: this.OnRef, style: n })
              );
            }),
            Object(r.c)([c.a], t.prototype, "OnRef", null),
            t
          );
        })(o.Component),
        Oe = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.BDraggableInRegion = function (e, t, n) {
              var r = this.GetClientRect();
              return (
                !!r &&
                e >= r.left &&
                e <= r.right &&
                t >= r.top - 20 &&
                t <= r.bottom + 20
              );
            }),
            t
          );
        })(
          (function (e) {
            function t(t) {
              var n = e.call(this, t) || this;
              return (n.m_divRef = o.createRef()), (n.state = {}), n;
            }
            return (
              Object(r.d)(t, e),
              (t.prototype.componentDidMount = function () {
                this.props.coordinator.RegisterDropRegion(this);
              }),
              (t.prototype.componentWillUnmount = function () {
                this.props.coordinator.UnregisterDropRegion(this);
              }),
              (t.prototype.OnDragStarted = function (e) {
                this.setState({ bDraggableActive: !0 });
              }),
              (t.prototype.OnDragEnded = function (e) {
                this.setState({ bDraggableActive: !1 });
              }),
              (t.prototype.OnDragEnter = function (e, t) {
                this.setState({ dropGhost: t }),
                  this.props.fnOnDragEnter && this.props.fnOnDragEnter(e);
              }),
              (t.prototype.OnDragLeave = function (e) {
                this.setState({ dropGhost: void 0 }),
                  this.props.fnOnDragLeave && this.props.fnOnDragLeave(e);
              }),
              (t.prototype.OnDragMove = function (e, t, n) {}),
              (t.prototype.OnDrop = function (e) {
                this.setState({ dropGhost: void 0 }), this.props.fnOnDrop(e);
              }),
              (t.prototype.BAcceptDraggable = function (e) {
                return (
                  !this.props.fnBAcceptDraggable ||
                  this.props.fnBAcceptDraggable(e)
                );
              }),
              (t.prototype.BDraggableInRegion = function (e, t, n) {
                return ge(e, t, this.GetClientRect());
              }),
              (t.prototype.GetElement = function () {
                return this.m_divRef.current;
              }),
              (t.prototype.GetClientRect = function () {
                return (
                  this.m_divRef.current &&
                  this.m_divRef.current.getBoundingClientRect()
                );
              }),
              (t.prototype.render = function () {
                var e = this.props,
                  t =
                    (e.coordinator,
                    e.fnBAcceptDraggable,
                    e.fnOnDrop,
                    e.fnOnDragEnter,
                    e.fnOnDragLeave,
                    e.className),
                  n = e.strActiveClassName,
                  i = e.children,
                  a = e.focusable,
                  s = Object(r.f)(e, [
                    "coordinator",
                    "fnBAcceptDraggable",
                    "fnOnDrop",
                    "fnOnDragEnter",
                    "fnOnDragLeave",
                    "className",
                    "strActiveClassName",
                    "children",
                    "focusable",
                  ]),
                  c = Object(l.a)(
                    t || "DialogDropRegion",
                    this.state.bDraggableActive && (n || "Active")
                  );
                return o.createElement(
                  fe.a,
                  Object(r.a)({ ref: this.m_divRef, className: c }, s, {
                    focusable: void 0 === a ? !!s.onClick : a,
                  }),
                  this.state.dropGhost,
                  i
                );
              }),
              t
            );
          })(o.Component)
        ),
        we = n("zBSo"),
        Ee = n.n(we);
      function Ce(e) {
        return o.createElement("div", Object(r.a)({}, e));
      }
      function Se(e) {
        var t = e.title,
          n = (e.icon, e.active, Object(r.f)(e, ["title", "icon", "active"]));
        return o.createElement("div", Object(r.a)({}, n), t);
      }
      function De(e) {
        return o.createElement(
          M,
          {
            className: Object(l.a)(
              e.stylesheet.PagedSettingsDialog_PageContent,
              e.activePage.pageClassName,
              { noPermission: !e.enabled }
            ),
          },
          !e.hideTitle &&
            o.createElement(
              v,
              null,
              e.activePage.title,
              o.createElement(
                C,
                null,
                !e.enabled &&
                  o.createElement(
                    o.Fragment,
                    null,
                    o.createElement(a.D, null),
                    Object(s.f)("#Chat_Settings_Permission_Denied")
                  )
              )
            ),
          null != e.activePage.content && o.cloneElement(e.activePage.content)
        );
      }
      o.forwardRef(function (e, t) {
        var n,
          r,
          i = null !== (n = e.stylesheet) && void 0 !== n ? n : Ee.a,
          a =
            null != e.startingPage
              ? e.pages
                  .map(function (e) {
                    return e.identifier;
                  })
                  .indexOf(e.startingPage)
              : -1,
          s = null == e.page,
          c = o.useState(a),
          u = c[0],
          d = c[1],
          h = s
            ? u
            : e.pages.findIndex(function (t) {
                return t.identifier === e.page;
              }),
          m = h < 0 || h >= e.pages.length ? 0 : h,
          f = e.pages[m],
          b = o.useRef(),
          v = o.useCallback(
            function () {
              return b.current.TakeFocus();
            },
            [b]
          ),
          _ = e.pages.map(function (t, n) {
            var r,
              a = t == f;
            return o.createElement(p.f, {
              component: e.renderPageListItem,
              fallback: Se,
              className: Object(l.a)(
                i.PagedSettingsDialog_PageListItem,
                ((r = {}), (r[i.Active] = a), r)
              ),
              key: t.title,
              onClick: function () {
                e.onPageRequested && e.onPageRequested(t.identifier),
                  t.click ? t.click() : s && n != u && d(n);
              },
              title: t.title,
              icon: t.icon,
              active: a,
            });
          }),
          y = f.hideTitle,
          O = !1 !== f.enabled,
          w = null === (r = e.showTitle) || void 0 === r || r;
        return o.createElement(
          g.a,
          {
            className: Object(l.a)(i.PagedSettingsDialog, e.className),
            ref: t,
          },
          o.createElement(
            g.a,
            { className: i.PagedSettingsDialog_PageListColumn, navRef: b },
            w &&
              o.createElement(
                "div",
                { className: i.PagedSettingsDialog_Title },
                e.title
              ),
            o.createElement(
              p.f,
              {
                component: e.renderPageList,
                fallback: Ce,
                className: i.PagedSettingsDialog_PageList,
              },
              _
            )
          ),
          o.createElement(
            g.a,
            { className: "DialogContentTransition", onCancelButton: v },
            f &&
              o.createElement(p.f, {
                component: e.renderActivePage,
                fallback: De,
                enabled: O,
                stylesheet: i,
                hideTitle: y,
                activePage: f,
              })
          )
        );
      });
      var Me = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t.m_refTextArea = o.createRef()),
            (t.m_cEntryLength = Number.MAX_VALUE),
            t
          );
        }
        return (
          Object(r.d)(t, e),
          Object.defineProperty(t.prototype, "textarea", {
            get: function () {
              return this.m_refTextArea.current;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "value", {
            get: function () {
              return (
                this.m_refTextArea.current && this.m_refTextArea.current.value
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.focus = function () {
            this.m_refTextArea.current.focus();
          }),
          (t.prototype.InternalOnInput = function () {
            var e,
              t = this.m_refTextArea.current,
              n = this.GetMinHeight(),
              r = this.GetMaxHeight(),
              o = t.value.length;
            if (
              (void 0 === this.m_nTextAreaPadding && this.CalculatePadding(),
              o < this.m_cEntryLength &&
                ((e = window.scrollY), (t.style.height = n + "px")),
              t.scrollHeight > r)
            )
              (t.style.height = r + "px"), (t.style.overflow = "auto");
            else if (t.scrollHeight != t.clientHeight) {
              var i = Math.max(t.scrollHeight, n);
              (t.style.height = i - this.m_nTextAreaPadding + "px"),
                "auto" == t.style.overflow && (t.style.overflow = "hidden");
            }
            void 0 !== e && window.scrollTo(window.scrollX, e),
              (this.m_cEntryLength = o);
          }),
          (t.prototype.CalculatePadding = function () {
            var e = getComputedStyle(this.m_refTextArea.current);
            this.m_nTextAreaPadding =
              parseFloat(e.paddingTop) + parseFloat(e.paddingBottom);
          }),
          (t.prototype.GetMinHeight = function () {
            return this.props.nMinHeight || 20;
          }),
          (t.prototype.GetMaxHeight = function () {
            return this.props.nMaxHeight || 500;
          }),
          (t.prototype.DeferredInternalOnInput = function () {
            window.setTimeout(this.InternalOnInput, 1);
          }),
          (t.prototype.OnKeyUp = function (e) {
            this.InternalOnInput(), this.props.onKeyUp && this.props.onKeyUp(e);
          }),
          (t.prototype.OnBlur = function (e) {
            this.DeferredInternalOnInput(),
              this.props.onBlur && this.props.onBlur(e);
          }),
          (t.prototype.OnClick = function (e) {
            this.InternalOnInput(), this.props.onClick && this.props.onClick(e);
          }),
          (t.prototype.OnPaste = function (e) {
            this.DeferredInternalOnInput(),
              this.props.onPaste && this.props.onPaste(e);
          }),
          (t.prototype.OnCut = function (e) {
            this.InternalOnInput(), this.props.onCut && this.props.onCut(e);
          }),
          (t.prototype.componentDidMount = function () {
            (this.m_refTextArea.current.style.overflow = "hidden"),
              (this.m_refTextArea.current.style.resize = "none"),
              this.InternalOnInput();
          }),
          (t.prototype.componentDidUpdate = function (e) {
            (e.nMinHeight == this.props.nMinHeight &&
              e.nMaxHeight == this.props.nMaxHeight) ||
              (this.m_cEntryLength = Number.MAX_VALUE),
              this.m_refTextArea.current.value.length != this.m_cEntryLength &&
                this.InternalOnInput();
          }),
          (t.prototype.render = function () {
            var e = this.props,
              t = (e.nMinHeight, e.nMaxHeight, e.renderTextArea),
              n = Object(r.f)(e, [
                "nMinHeight",
                "nMaxHeight",
                "renderTextArea",
              ]);
            return (
              t ||
              function (e) {
                return o.createElement("textarea", Object(r.a)({}, e));
              }
            )(
              Object(r.a)(Object(r.a)({}, n), {
                ref: this.m_refTextArea,
                onKeyUp: this.OnKeyUp,
                onBlur: this.OnBlur,
                onClick: this.OnClick,
                onPaste: this.OnPaste,
                onCut: this.OnCut,
              })
            );
          }),
          Object(r.c)([c.a], t.prototype, "InternalOnInput", null),
          Object(r.c)([c.a], t.prototype, "OnKeyUp", null),
          Object(r.c)([c.a], t.prototype, "OnBlur", null),
          Object(r.c)([c.a], t.prototype, "OnClick", null),
          Object(r.c)([c.a], t.prototype, "OnPaste", null),
          Object(r.c)([c.a], t.prototype, "OnCut", null),
          t
        );
      })(o.Component);
    },
    NxAk: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return c;
      }),
        n.d(t, "b", function () {
          return l;
        }),
        n.d(t, "c", function () {
          return u;
        }),
        n.d(t, "f", function () {
          return p;
        }),
        n.d(t, "g", function () {
          return d;
        }),
        n.d(t, "e", function () {
          return h;
        }),
        n.d(t, "a", function () {
          return m;
        });
      n("mrSG"), n("Kw0F");
      var r = n("rHSA"),
        o = n("r64O"),
        i = (n("qiKp"), n("XxJJ"), n("BaVA")),
        a = (function () {
          function e(e) {
            (this.m_rgHistory = []), (this.m_root = e);
          }
          return (
            (e.prototype.PushState = function () {
              this.m_rgHistory.push(this.SerializeNavNode(this.m_root));
            }),
            (e.prototype.PopState = function () {
              this.m_rgHistory.length &&
                (this.RestoreSerializedNavNode(
                  this.m_root,
                  this.m_rgHistory.pop()
                ),
                this.m_root.BTakeFocus(i.b.APPLICATION));
            }),
            (e.prototype.SerializeNavNode = function (e) {
              var t = this,
                n = null,
                r = e.GetChildren(),
                o = r[0],
                i = r[1];
              return (
                o.length &&
                  -1 != i &&
                  (n = o.map(function (e) {
                    return t.SerializeNavNode(e);
                  })),
                { sNavKey: e.NavKey, iActiveChild: i, rgChildren: n }
              );
            }),
            (e.prototype.RestoreSerializedNavNode = function (e, t) {
              var n = t.sNavKey,
                r = t.iActiveChild,
                i = t.rgChildren;
              if (
                (n && Object(o.a)(n == e.NavKey, "navkey mismatch"),
                e.SetActiveChild(r),
                i && i.length)
              ) {
                var a = e.GetChildren()[0],
                  s = new Map();
                a.forEach(function (e) {
                  e.NavKey && s.set(e.NavKey, e);
                });
                for (var c = 0, l = i; c < l.length; c++) {
                  var u = l[c];
                  if (u.sNavKey) {
                    var p = s.get(u.sNavKey);
                    p && this.RestoreSerializedNavNode(p, u);
                  }
                }
                if (-1 != r && i[r].sNavKey) {
                  var d = s.get(i[r].sNavKey);
                  d && e.SetActiveChild(a.indexOf(d));
                }
                for (var h = 0, m = 0; h < a.length && m < i.length; ) {
                  for (; h < a.length && a[h].NavKey; ) h++;
                  for (; m < i.length && i[m].sNavKey; ) m++;
                  if (h >= a.length || m >= i.length) break;
                  this.RestoreSerializedNavNode(a[h], i[m]), h++, m++;
                }
              }
            }),
            e
          );
        })(),
        s = n("j+5p");
      n("X3Ds");
      var c = (function () {
        function e(e) {
          (this.m_node = e), (this.m_History = new a(e));
        }
        return (
          (e.prototype.TakeFocus = function (e) {
            return this.m_node.BTakeFocus(i.b.APPLICATION, e);
          }),
          Object.defineProperty(e.prototype, "NavKey", {
            get: function () {
              return this.m_node.NavKey;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.PushState = function () {
            this.m_History.PushState();
          }),
          (e.prototype.PopState = function () {
            this.m_History && this.m_History.PopState();
          }),
          e
        );
      })();
      function l(e, t, n) {
        return "x" == e
          ? t.x + t.width > n.x && t.x < n.x + n.width
          : "y" == e
          ? t.y + t.height > n.y && t.y < n.y + n.height
          : (Object(o.a)(!1, "Invalid axis " + e), !1);
      }
      function u(e, t, n) {
        var r = t[e],
          i = (function (e, t) {
            return "x" == e
              ? { min: t.x, max: t.x + t.width }
              : "y" == e
              ? { min: t.y, max: t.y + t.height }
              : void Object(o.a)(!1, "Invalid axis " + e);
          })(e, n);
        return r < i.min ? i.min - r : r > i.max ? r - i.max : 0;
      }
      function p(e) {
        return { x: e.x, y: e.y };
      }
      var d = {
        OnBlur: function () {},
        OnFocus: function () {},
        OnFocusChange: function () {},
      };
      function h(e) {
        if (!e) return s.b.NONE;
        var t = e.ownerDocument.defaultView,
          n = t.getComputedStyle(e);
        if ("flex" == n.display)
          switch (n.flexDirection) {
            case "row":
              return "wrap" == n.flexWrap ? s.b.GRID : s.b.ROW;
            case "row-reverse":
              return s.b.ROW_REVERSE;
            case "column":
              return s.b.COLUMN;
            case "column-reverse":
              return s.b.COLUMN_REVERSE;
          }
        else {
          if ("grid" == n.display) return s.b.GRID;
          if (e.childElementCount > 0) {
            var r = t.getComputedStyle(e.firstElementChild);
            if ("left" === r.float) return s.b.ROW;
            if ("right" === r.float) return s.b.ROW_REVERSE;
            if ("inline" === r.display || "inline-block" === r.display)
              return s.b.GRID;
          }
        }
        return s.b.COLUMN;
      }
      function m(e) {
        switch (e) {
          case r.a.DIR_UP:
          case r.a.DIR_DOWN:
            return "y";
          case r.a.DIR_LEFT:
          case r.a.DIR_RIGHT:
            return "x";
          default:
            return;
        }
      }
    },
    OS8t: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return i;
      }),
        n.d(t, "h", function () {
          return a;
        }),
        n.d(t, "e", function () {
          return s;
        }),
        n.d(t, "c", function () {
          return c;
        }),
        n.d(t, "g", function () {
          return l;
        }),
        n.d(t, "b", function () {
          return u;
        }),
        n.d(t, "f", function () {
          return p;
        }),
        n.d(t, "a", function () {
          return d;
        });
      var r = n("mrSG"),
        o = n("hRO2"),
        i = o.BinaryReader.prototype,
        a = o.BinaryWriter.prototype;
      function s(e) {
        var t = {},
          n = e.fields;
        for (var r in n) {
          var o = n[r];
          t[o.n] = o;
        }
        return t;
      }
      function c(e, t) {
        var n = e.proto,
          r = e.fields,
          i = new n(),
          a = function (e) {
            var n = r[e],
              a = n.n,
              s = n.c,
              c = n.r;
            n.d, n.q;
            if (!t.hasOwnProperty(e)) return "continue";
            var l = t[e];
            s
              ? c
                ? o.Message.setRepeatedWrapperField(
                    i,
                    a,
                    Array.isArray(l)
                      ? l.map(function (e) {
                          return s.fromObject(e);
                        })
                      : []
                  )
                : o.Message.setWrapperField(i, a, s.fromObject(l))
              : o.Message.setField(i, a, l);
          };
        for (var s in r) a(s);
        return i;
      }
      function l(e, t, n) {
        e.proto;
        var r = e.fields,
          i = {};
        for (var a in r) {
          var s = r[a],
            c = s.n,
            l = s.c,
            u = s.r,
            p = s.d,
            d = s.q;
          if (l)
            if (u)
              i[a] = o.Message.toObjectList(
                o.Message.getRepeatedWrapperField(n, l, c),
                l.toObject,
                t
              );
            else {
              var h = o.Message.getWrapperField(n, l, c, d ? 1 : 0);
              h && (i[a] = l.toObject(t, h));
            }
          else {
            var m = o.Message.getFieldWithDefault(
              n,
              c,
              void 0 !== p ? p : null
            );
            (null !== m || d) && (i[a] = m);
          }
        }
        return t && (i.$jspbMessageInstance = n), i;
      }
      function u(e, t, n) {
        for (; n.nextField() && !n.isEndGroup(); ) {
          var r = e[n.getFieldNumber()];
          if (r) {
            var i = r.n,
              a = r.c,
              s = r.r,
              c = (r.d, r.q, r.br);
            if (a) {
              var l = new a();
              n.readMessage(l, a.deserializeBinaryFromReader),
                s
                  ? o.Message.addToRepeatedWrapperField(t, i, l, a)
                  : o.Message.setWrapperField(t, i, l);
            } else if (c) {
              l = c.call(n);
              s
                ? o.Message.addToRepeatedField(t, i, l)
                : o.Message.setField(t, i, l);
            } else
              console.assert(
                c,
                "Reader func not set for field number " + i + " in class " + a
              ),
                n.skipField();
          } else n.skipField();
        }
        return t;
      }
      function p(e, t, n) {
        var r = e.fields;
        for (var i in r) {
          var a,
            s = r[i],
            c = s.n,
            l = s.c,
            u = s.r,
            p = (s.d, s.q),
            d = s.bw;
          if (l)
            if (u)
              (((a = o.Message.getRepeatedWrapperField(t, l, c)) && a.length) ||
                p) &&
                n.writeRepeatedMessage(c, a, l.serializeBinaryToWriter);
            else
              (a = o.Message.getWrapperField(t, l, c, p ? 1 : 0)) &&
                n.writeMessage(c, a, l.serializeBinaryToWriter);
          else if (d)
            void 0 !== (a = o.Message.getField(t, c)) && d.call(n, c, a);
          else
            console.assert(
              d,
              "Writer func not set for field number " + c + " in class " + l
            );
        }
      }
      function d(e) {
        var t = e.proto;
        for (var n in e.fields) {
          var r = e.fields[n],
            i = r.n,
            a = r.c,
            s = r.r,
            c = r.d;
          r.q;
          r.hasOwnProperty("d")
            ? (t.prototype[n] = h(o.Message.getFieldWithDefault, i, c))
            : (t.prototype[n] = a
                ? s
                  ? h(o.Message.getRepeatedWrapperField, a, i)
                  : m(a, i)
                : h(o.Message.getField, i)),
            (t.prototype["set_" + n] = f(
              a
                ? s
                  ? o.Message.setRepeatedWrapperField
                  : o.Message.setWrapperField
                : o.Message.setField,
              i
            )),
            s && (t.prototype["add_" + n] = g(i, a));
        }
      }
      function h(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        return function () {
          return e.apply(void 0, Object(r.g)([this], t));
        };
      }
      function m(e, t) {
        return function (n) {
          return (
            void 0 === n && (n = !0),
            o.Message.getWrapperField(this, e, t, n ? 1 : 0)
          );
        };
      }
      function f(e, t) {
        return function (n) {
          return e(this, t, n);
        };
      }
      function g(e, t) {
        return t
          ? function (n, r) {
              return o.Message.addToRepeatedWrapperField(this, e, n, t, r);
            }
          : function (t, n) {
              o.Message.addToRepeatedField(this, e, t, n);
            };
      }
    },
    "P++D": function (e, t, n) {
      e.exports = {
        DialogDropDownMenu_Item: "dropdown_DialogDropDownMenu_Item_2oAiZ",
        DialogDropDownMenu: "dropdown_DialogDropDownMenu_30wJO",
      };
    },
    "RD/U": function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return s;
      }),
        n.d(t, "d", function () {
          return c;
        }),
        n.d(t, "a", function () {
          return l;
        }),
        n.d(t, "b", function () {
          return p;
        });
      var r = n("mrSG"),
        o = n("hRO2"),
        i = n("OS8t"),
        a = o.Message;
      var s = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.v4 || i.a(t.M()),
              a.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      v4: { n: 1, br: i.d.readFixed32, bw: i.h.writeFixed32 },
                      v6: { n: 2, br: i.d.readBytes, bw: i.h.writeBytes },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = i.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return i.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return i.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new o.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return i.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              i.f(t.M(), e, n);
            }),
            (t.prototype.getClassName = function () {
              return "CMsgIPAddress";
            }),
            t
          );
        })(a),
        c = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.steamid || i.a(t.M()),
              a.initialize(r, n, 0, -1, [27], null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: i.d.readFixed64String,
                        bw: i.h.writeFixed64String,
                      },
                      client_sessionid: {
                        n: 2,
                        br: i.d.readInt32,
                        bw: i.h.writeInt32,
                      },
                      routing_appid: {
                        n: 3,
                        br: i.d.readUint32,
                        bw: i.h.writeUint32,
                      },
                      jobid_source: {
                        n: 10,
                        d: "18446744073709551615",
                        br: i.d.readFixed64String,
                        bw: i.h.writeFixed64String,
                      },
                      jobid_target: {
                        n: 11,
                        d: "18446744073709551615",
                        br: i.d.readFixed64String,
                        bw: i.h.writeFixed64String,
                      },
                      target_job_name: {
                        n: 12,
                        br: i.d.readString,
                        bw: i.h.writeString,
                      },
                      seq_num: { n: 24, br: i.d.readInt32, bw: i.h.writeInt32 },
                      eresult: {
                        n: 13,
                        d: 2,
                        br: i.d.readInt32,
                        bw: i.h.writeInt32,
                      },
                      error_message: {
                        n: 14,
                        br: i.d.readString,
                        bw: i.h.writeString,
                      },
                      ip: { n: 15, br: i.d.readUint32, bw: i.h.writeUint32 },
                      ip_v6: { n: 29, br: i.d.readBytes, bw: i.h.writeBytes },
                      auth_account_flags: {
                        n: 16,
                        br: i.d.readUint32,
                        bw: i.h.writeUint32,
                      },
                      token_source: {
                        n: 22,
                        br: i.d.readUint32,
                        bw: i.h.writeUint32,
                      },
                      admin_spoofing_user: {
                        n: 23,
                        br: i.d.readBool,
                        bw: i.h.writeBool,
                      },
                      transport_error: {
                        n: 17,
                        d: 1,
                        br: i.d.readInt32,
                        bw: i.h.writeInt32,
                      },
                      messageid: {
                        n: 18,
                        d: "18446744073709551615",
                        br: i.d.readUint64String,
                        bw: i.h.writeUint64String,
                      },
                      publisher_group_id: {
                        n: 19,
                        br: i.d.readUint32,
                        bw: i.h.writeUint32,
                      },
                      sysid: { n: 20, br: i.d.readUint32, bw: i.h.writeUint32 },
                      trace_tag: {
                        n: 21,
                        br: i.d.readUint64String,
                        bw: i.h.writeUint64String,
                      },
                      webapi_key_id: {
                        n: 25,
                        br: i.d.readUint32,
                        bw: i.h.writeUint32,
                      },
                      is_from_external_source: {
                        n: 26,
                        br: i.d.readBool,
                        bw: i.h.writeBool,
                      },
                      forward_to_sysid: {
                        n: 27,
                        r: !0,
                        q: !0,
                        br: i.d.readUint32,
                        bw: i.h.writeRepeatedUint32,
                      },
                      cm_sysid: {
                        n: 28,
                        br: i.d.readUint32,
                        bw: i.h.writeUint32,
                      },
                      wg_token: {
                        n: 30,
                        br: i.d.readString,
                        bw: i.h.writeString,
                      },
                      launcher_type: {
                        n: 31,
                        d: 0,
                        br: i.d.readUint32,
                        bw: i.h.writeUint32,
                      },
                      realm: {
                        n: 32,
                        d: 0,
                        br: i.d.readUint32,
                        bw: i.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = i.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return i.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return i.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new o.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return i.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              i.f(t.M(), e, n);
            }),
            (t.prototype.getClassName = function () {
              return "CMsgProtoBufHeader";
            }),
            t
          );
        })(a),
        l = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.appid || i.a(t.M()),
              a.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      appid: { n: 1, br: i.d.readUint32, bw: i.h.writeUint32 },
                      name: { n: 2, br: i.d.readString, bw: i.h.writeString },
                      icon: { n: 3, br: i.d.readString, bw: i.h.writeString },
                      logo: { n: 4, br: i.d.readString, bw: i.h.writeString },
                      logo_small: {
                        n: 5,
                        br: i.d.readString,
                        bw: i.h.writeString,
                      },
                      tool: { n: 6, br: i.d.readBool, bw: i.h.writeBool },
                      demo: { n: 7, br: i.d.readBool, bw: i.h.writeBool },
                      media: { n: 8, br: i.d.readBool, bw: i.h.writeBool },
                      community_visible_stats: {
                        n: 9,
                        br: i.d.readBool,
                        bw: i.h.writeBool,
                      },
                      friendly_name: {
                        n: 10,
                        br: i.d.readString,
                        bw: i.h.writeString,
                      },
                      propagation: {
                        n: 11,
                        br: i.d.readString,
                        bw: i.h.writeString,
                      },
                      has_adult_content: {
                        n: 12,
                        br: i.d.readBool,
                        bw: i.h.writeBool,
                      },
                      is_visible_in_steam_china: {
                        n: 13,
                        br: i.d.readBool,
                        bw: i.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = i.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return i.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return i.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new o.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return i.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              i.f(t.M(), e, n);
            }),
            (t.prototype.getClassName = function () {
              return "CCDDBAppDetailCommon";
            }),
            t
          );
        })(a),
        u = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.clanid || i.a(t.M()),
              a.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      clanid: { n: 1, br: i.d.readUint32, bw: i.h.writeUint32 },
                      event_gid: {
                        n: 2,
                        br: i.d.readFixed64String,
                        bw: i.h.writeFixed64String,
                      },
                      announcement_gid: {
                        n: 3,
                        br: i.d.readFixed64String,
                        bw: i.h.writeFixed64String,
                      },
                      rtime_start: {
                        n: 4,
                        br: i.d.readUint32,
                        bw: i.h.writeUint32,
                      },
                      rtime_end: {
                        n: 5,
                        br: i.d.readUint32,
                        bw: i.h.writeUint32,
                      },
                      priority_score: {
                        n: 6,
                        br: i.d.readUint32,
                        bw: i.h.writeUint32,
                      },
                      type: { n: 7, br: i.d.readUint32, bw: i.h.writeUint32 },
                      clamp_range_slot: {
                        n: 8,
                        br: i.d.readUint32,
                        bw: i.h.writeUint32,
                      },
                      appid: { n: 9, br: i.d.readUint32, bw: i.h.writeUint32 },
                      rtime32_last_modified: {
                        n: 10,
                        br: i.d.readUint32,
                        bw: i.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = i.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return i.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return i.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new o.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return i.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              i.f(t.M(), e, n);
            }),
            (t.prototype.getClassName = function () {
              return "CClanEventUserNewsTuple";
            }),
            t
          );
        })(a),
        p = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.rtime_before || i.a(t.M()),
              a.initialize(r, n, 0, -1, [4], null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      rtime_before: {
                        n: 1,
                        br: i.d.readUint32,
                        bw: i.h.writeUint32,
                      },
                      rtime_after: {
                        n: 2,
                        br: i.d.readUint32,
                        bw: i.h.writeUint32,
                      },
                      qualified: {
                        n: 3,
                        br: i.d.readUint32,
                        bw: i.h.writeUint32,
                      },
                      events: { n: 4, c: u, r: !0, q: !0 },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = i.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return i.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return i.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new o.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return i.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              i.f(t.M(), e, n);
            }),
            (t.prototype.getClassName = function () {
              return "CClanMatchEventByRange";
            }),
            t
          );
        })(a);
    },
    RnhZ: function (e, t, n) {
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
        "./zh-tw.js": "kOpN",
      };
      function o(e) {
        var t = i(e);
        return n(t);
      }
      function i(e) {
        if (!n.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return r[e];
      }
      (o.keys = function () {
        return Object.keys(r);
      }),
        (o.resolve = i),
        (e.exports = o),
        (o.id = "RnhZ");
    },
    SQr7: function (e, t, n) {
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
    SxtR: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      }),
        n.d(t, "b", function () {
          return l;
        }),
        n.d(t, "c", function () {
          return s;
        });
      var r = n("mrSG"),
        o = n("hRO2"),
        i = n("OS8t"),
        a = (o.Message, o.Message);
      var s,
        c = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.product || i.a(t.M()),
              a.initialize(r, n, 0, -1, [3], null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      product: {
                        n: 1,
                        br: i.d.readString,
                        bw: i.h.writeString,
                      },
                      version: {
                        n: 2,
                        br: i.d.readString,
                        bw: i.h.writeString,
                      },
                      errors: { n: 3, c: l, r: !0, q: !0 },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = i.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return i.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return i.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new o.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return i.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              i.f(t.M(), e, n);
            }),
            (t.prototype.getClassName = function () {
              return "CClientMetrics_ReportClientError_Notification";
            }),
            t
          );
        })(a),
        l = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.identifier || i.a(t.M()),
              a.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      identifier: {
                        n: 1,
                        br: i.d.readString,
                        bw: i.h.writeString,
                      },
                      message: {
                        n: 2,
                        br: i.d.readString,
                        bw: i.h.writeString,
                      },
                      count: { n: 3, br: i.d.readUint32, bw: i.h.writeUint32 },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = i.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return i.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return i.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new o.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return i.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              i.f(t.M(), e, n);
            }),
            (t.prototype.getClassName = function () {
              return "CClientMetrics_ReportClientError_Notification_Error";
            }),
            t
          );
        })(a);
      !(function (e) {
        (e.ClientAppInterfaceStatsReport = function (e, t) {
          return e.SendNotification(
            "ClientMetrics.ClientAppInterfaceStatsReport#1",
            t,
            { ePrivilege: 1 }
          );
        }),
          (e.ClientIPv6ConnectivityReport = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ClientIPv6ConnectivityReport#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.SteamPipeWorkStatsReport = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.SteamPipeWorkStatsReport#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.ReportClientError = function (e, t) {
            return e.SendNotification("ClientMetrics.ReportClientError#1", t, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.ClientBootstrapReport = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ClientBootstrapReport#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.ClientDownloadRatesReport = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ClientDownloadRatesReport#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.ClientContentValidationReport = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ClientContentValidationReport#1",
              t,
              { ePrivilege: 1 }
            );
          });
      })(s || (s = {}));
    },
    TLQK: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return u;
      }),
        n.d(t, "f", function () {
          return p;
        }),
        n.d(t, "n", function () {
          return d;
        }),
        n.d(t, "l", function () {
          return h;
        }),
        n.d(t, "a", function () {
          return m;
        }),
        n.d(t, "d", function () {
          return g;
        }),
        n.d(t, "c", function () {
          return b;
        }),
        n.d(t, "e", function () {
          return v;
        });
      var r = n("mrSG"),
        o = n("q1tI"),
        i = n("mgoM"),
        a = n("kyHq"),
        s = n("lkRc"),
        c = n("Kw0F"),
        l = (n("r64O"), n("Z1oF"));
      n.d(t, "g", function () {
        return l.a;
      }),
        n.d(t, "h", function () {
          return l.b;
        }),
        n.d(t, "j", function () {
          return l.d;
        }),
        n.d(t, "k", function () {
          return l.e;
        }),
        n.d(t, "m", function () {
          return l.f;
        }),
        n.d(t, "o", function () {
          return l.h;
        }),
        n.d(t, "p", function () {
          return l.i;
        }),
        n.d(t, "q", function () {
          return l.j;
        }),
        n.d(t, "i", function () {
          return l.c;
        });
      var u = (function () {
        function e() {
          (this.m_mapTokens = new Map()),
            (this.m_mapFallbackTokens = new Map());
        }
        return (
          (e.InstallErrorReportingStore = function (e) {
            this.sm_ErrorReportingStore = e;
          }),
          (e.GetLanguageFallback = function (e) {
            return "sc_schinese" === e ? "schinese" : "english";
          }),
          (e.GetELanguageFallback = function (e) {
            return 29 === e ? 6 : 0;
          }),
          (e.IsELanguageValidInRealm = function (e, t) {
            return (
              t ===
              (29 === e ? a.e.k_ESteamRealmChina : a.e.k_ESteamRealmGlobal)
            );
          }),
          (e.GetLanguageListForRealms = function (e) {
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
          (e.prototype.InitFromObjects = function (e, t, n, o, i) {
            i || this.m_mapTokens.clear();
            var a = Object(r.a)(Object(r.a)({}, n || {}), e),
              s = Object(r.a)(Object(r.a)({}, o || {}), t || {});
            this.AddTokens(a, s);
          }),
          (e.prototype.InitDirect = function (e, t) {
            this.m_mapTokens.clear(),
              this.m_mapFallbackTokens.clear(),
              this.AddTokens(e, t);
          }),
          (e.prototype.AddTokens = function (e, t) {
            var n = this;
            Object.keys(e).forEach(function (t) {
              n.m_mapTokens.set(t, e[t]);
            }),
              t &&
                Object.keys(t).forEach(function (e) {
                  n.m_mapTokens.has(e) || n.m_mapTokens.set(e, t[e]),
                    n.m_mapFallbackTokens.set(e, t[e]);
                });
          }),
          (e.prototype.GetPreferredLocales = function () {
            return this.m_rgLocalesToUse
              ? this.m_rgLocalesToUse
              : navigator && navigator.languages
              ? navigator.languages
              : ["en-US"];
          }),
          (e.prototype.GetELanguageFallbackOrder = function (t) {
            void 0 === t && (t = null);
            var n = new Array();
            (n.push(Object(i.d)(s.c.LANGUAGE)),
            (s.c.SUPPORTED_LANGUAGES || []).forEach(function (e) {
              e.value != s.c.LANGUAGE && n.push(Object(i.d)(e.value));
            }),
            t) &&
              e.GetLanguageListForRealms(t).forEach(function (e) {
                -1 == n.indexOf(e) && n.push(e);
              });
            return n;
          }),
          (e.prototype.SetPreferredLocales = function (e) {
            this.m_rgLocalesToUse = e;
          }),
          (e.prototype.LocalizeString = function (t) {
            if (t && 0 != t.length && "#" == t.charAt(0)) {
              var n = this.m_mapTokens.get(t.substring(1));
              if (void 0 !== n) return n;
              e.sm_ErrorReportingStore &&
                e.sm_ErrorReportingStore.ReportError(
                  new Error(
                    "Unable to find localization token '" +
                      t +
                      "' for language '" +
                      s.c.LANGUAGE +
                      "', " +
                      this.m_mapTokens.size +
                      " tokens in map"
                  ),
                  { bIncludeMessageInIdentifier: !0 }
                );
            }
          }),
          (e.prototype.LocalizeStringFromFallback = function (e) {
            if (e && 0 != e.length && "#" == e.charAt(0)) {
              var t = this.m_mapFallbackTokens.get(e.substring(1));
              if (void 0 !== t) return t;
            }
          }),
          e
        );
      })();
      function p(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        var r = v.LocalizeString(e);
        return void 0 === r
          ? e
          : (t.length > 0 &&
              (r = r.replace(/%(?:(\d+)\$)?s/g, function (e, n) {
                if (n <= t.length && n >= 1) {
                  var r = t[n - 1];
                  return String(null == r ? "" : r);
                }
                return e;
              })),
            r);
      }
      function d(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        var i = v.LocalizeString(e);
        if (void 0 === i) return e;
        for (var a, s = [], c = /(.*?)%(\d+)\$s/g, l = 0; (a = c.exec(i)); ) {
          (l += a[0].length), s.push(a[1]);
          var u = parseInt(a[2]);
          u >= 1 && u <= t.length && s.push(t[u - 1]);
        }
        return (
          s.push(i.substr(l)),
          o.createElement.apply(o, Object(r.g)([o.Fragment, null], s))
        );
      }
      function h(e, t) {
        for (var n = [], o = 2; o < arguments.length; o++)
          n[o - 2] = arguments[o];
        return 1 === t || "1" === t
          ? p.apply(void 0, Object(r.g)([e, t], n))
          : p.apply(void 0, Object(r.g)([e + "_Plural", t], n));
      }
      var m = (function () {
          function e() {}
          return (
            (e.Set = function (e, t, n) {
              if (e.length <= t) {
                if (t >= 30) return e;
                e = Object(c.e)(e, t + 1, null);
              }
              return (e[t] = n), e;
            }),
            (e.Get = function (e, t) {
              return (e && e.length > t && e[t]) || "";
            }),
            (e.GetWithFallback = function (t, n) {
              return e.Get(t, n) || e.Get(t, u.GetELanguageFallback(n));
            }),
            e
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
          koreana: "ko",
        },
        g = {
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
      function b() {
        return f[s.c.LANGUAGE] || null;
      }
      var v = new u();
      window.LocalizationManager = v;
    },
    TtDX: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return h;
      });
      var r = n("mrSG"),
        o = n("q1tI"),
        i = n("X3Ds"),
        a = n("y+6m"),
        s = n("sUmc"),
        c = n("2vnA"),
        l = n("+jbA"),
        u = n.n(l),
        p = (function () {
          function e() {}
          return (
            (e.GetBrowserInfoForPopup = function (e) {
              return null;
            }),
            (e.prototype.SetTakeFocus = function (e) {
              this.m_fnTakeFocus = e;
            }),
            Object(r.c)([c.C], e.prototype, "m_refContextMenu", void 0),
            e
          );
        })(),
        d = (function () {
          function e() {}
          return (
            (e.CreateContextMenuInstance = function (e, t, n, r, o) {
              return new f(e, t, n, r, o);
            }),
            e
          );
        })();
      function h(e, t, n) {
        var r,
          o = void 0,
          i = void 0,
          a = t;
        if (
          (null == a ? void 0 : a.preventDefault) &&
          (null == a ? void 0 : a.stopPropagation)
        ) {
          if (a.shiftKey) return null;
          a.preventDefault(),
            a.stopPropagation(),
            (r = a.currentTarget),
            (o = a.clientX),
            (i = a.clientY);
        } else r = t;
        var s = d.CreateContextMenuInstance(e, r, o, i, n);
        return s.Show(), s;
      }
      var m = (function (e) {
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
            Object(r.d)(t, e),
            (t.prototype.RenderElements = function (e, t) {
              0 == this.presentation &&
              (e.options.bForcePopup || this.m_ownerWindow.innerWidth) < 400 &&
              this.m_ownerWindow.SteamClient &&
              this.m_ownerWindow.SteamClient.Window
                ? (this.m_popupContextMenu = new a.a(
                    e,
                    t,
                    p.GetBrowserInfoForPopup(this.m_ownerWindow)
                  ))
                : ((this.m_embeddedElementInstance = Object(s.b)(
                    this.m_ownerWindow.document
                  )),
                  (this.m_rctElement = o.createElement(a.f, e, t)));
            }),
            (t.prototype.SetOnHideCallback = function (e) {
              this.m_fnOnHideCallback = e;
            }),
            (t.prototype.Show = function () {
              this.m_rctElement
                ? this.m_embeddedElementInstance.Show(this.m_rctElement)
                : this.m_popupContextMenu.Show(),
                (this.m_bVisible = !0);
            }),
            (t.prototype.Hide = function () {
              this.InternalHide();
            }),
            (t.prototype.HideIfNotInFocus = function () {
              this.BHasFocus() ||
                this.BIsFocusInChildHierarchy() ||
                this.Hide();
            }),
            (t.prototype.InternalHide = function () {
              this.m_bVisible &&
                ((this.m_bVisible = !1),
                this.InternalHideSubMenu(),
                this.m_fnOnHideCallback && this.m_fnOnHideCallback(),
                this.m_embeddedElementInstance
                  ? this.m_embeddedElementInstance.Hide(300)
                  : this.m_popupContextMenu.Close());
            }),
            Object.defineProperty(t.prototype, "visible", {
              get: function () {
                return this.m_bVisible;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "options", {
              get: function () {
                return this.m_options;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "presentation", {
              get: function () {
                return 0;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "styles", {
              get: function () {
                return u.a;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "owner_window", {
              get: function () {
                return this.m_ownerWindow;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.ShowSubMenu = function (e, t) {
              return this.m_elSubmenuItem == e
                ? (this.CancelHideSubMenuTimer(),
                  this.m_submenu.TakeFocus(),
                  null)
                : (this.InternalHideSubMenu(),
                  (this.m_elSubmenuItem = e),
                  (this.m_submenu = new g(this, t(), e)),
                  this.m_submenu.Show(),
                  this.m_submenu);
            }),
            (t.prototype.CancelHideSubMenuTimer = function () {
              this.m_timerHideSubMenu > 0 &&
                (clearTimeout(this.m_timerHideSubMenu),
                (this.m_timerHideSubMenu = 0));
            }),
            (t.prototype.HideSubMenu = function () {
              var e = this;
              if (this.m_submenu) {
                if (!(this.m_timerHideSubMenu > 0)) {
                  this.m_timerHideSubMenu = window.setTimeout(function () {
                    e.InternalHideSubMenu(), (e.m_timerHideSubMenu = 0);
                  }, 150);
                }
              } else this.CancelHideSubMenuTimer();
            }),
            (t.prototype.HideSelf = function () {
              this.InternalHide();
            }),
            (t.prototype.InternalHideSubMenu = function () {
              this.CancelHideSubMenuTimer(),
                this.m_submenu &&
                  (this.BIsFocusInChildHierarchy() && this.TakeFocus(),
                  (this.m_elSubmenuItem = null),
                  this.m_submenu.InternalHide(),
                  (this.m_submenu = null));
            }),
            (t.prototype.TakeFocus = function () {
              this.m_popupContextMenu && this.m_popupContextMenu.Focus(),
                this.m_fnTakeFocus && this.m_fnTakeFocus();
            }),
            (t.prototype.BInternalElementInParentHierarchy = function (e) {
              return (
                this.m_parentInstance &&
                (this.m_parentInstance.BIsChildElement(e) ||
                  this.m_parentInstance.BInternalElementInParentHierarchy(e))
              );
            }),
            (t.prototype.BInternalElementInChildHierarchy = function (e) {
              return (
                this.m_submenu &&
                (this.m_submenu.BIsChildElement(e) ||
                  this.m_submenu.BInternalElementInChildHierarchy(e))
              );
            }),
            (t.prototype.BIsChildElement = function (e) {
              return this.m_embeddedElementInstance
                ? this.m_embeddedElementInstance.BIsChildElement(e)
                : i.e(this.m_popupContextMenu.root_element, e);
            }),
            (t.prototype.BHasFocus = function () {
              return this.m_embeddedElementInstance
                ? this.m_embeddedElementInstance.BIsChildElement(
                    this.m_ownerWindow.document.activeElement
                  )
                : this.m_popupContextMenu.focused;
            }),
            (t.prototype.BIsFocusInChildHierarchy = function () {
              return (
                this.m_submenu &&
                (this.m_submenu.BHasFocus() ||
                  this.m_submenu.BIsFocusInChildHierarchy())
              );
            }),
            (t.prototype.BIsElementInMenuHierarchy = function (e) {
              return (
                this.BInternalElementInParentHierarchy(e) ||
                this.BInternalElementInChildHierarchy(e)
              );
            }),
            (t.prototype.BIsSubMenuVisible = function () {
              return !!this.m_submenu;
            }),
            (t.prototype.SetLabel = function (e) {}),
            Object(r.c)([c.C], t.prototype, "m_bVisible", void 0),
            t
          );
        })(p),
        f = (function (e) {
          function t(t, n, r, o, i) {
            var a = e.call(this, n.ownerDocument.defaultView) || this;
            p.sm_iActiveContextMenuInstance &&
              p.sm_iActiveContextMenuInstance.Hide(),
              (p.sm_iActiveContextMenuInstance = a),
              (a.m_options = i || {});
            var s = {
              element: n,
              clientX: r,
              clientY: o,
              instance: a,
              options: a.m_options,
              fnOnMenuItemSelected: function () {
                a.Hide();
              },
            };
            return a.RenderElements(s, t), a;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.Show = function () {
              this.m_options.bDisableMouseOverlay ||
                ((this.m_embeddedElementInstanceOverlay = Object(s.b)(
                  this.m_ownerWindow.document
                )),
                this.m_embeddedElementInstanceOverlay.Show(
                  o.createElement(a.e)
                )),
                e.prototype.Show.call(this);
            }),
            (t.prototype.Hide = function () {
              this.m_embeddedElementInstanceOverlay &&
                this.m_embeddedElementInstanceOverlay.Hide(0),
                e.prototype.Hide.call(this);
            }),
            (t.prototype.BIsSubMenu = function () {
              return !1;
            }),
            t
          );
        })(m),
        g = (function (e) {
          function t(t, n, r) {
            var o = e.call(this, r.ownerDocument.defaultView) || this;
            (o.m_parentInstance = t),
              (o.m_options = {
                bOverlapVertical: !0,
                bUseWebStyles: t.options.bUseWebStyles,
                strClassName: t.options.strClassName,
                bFitToWindow: t.options.bFitToWindow,
                bShiftToFitWindow: t.options.bShiftToFitWindow,
              });
            var i = {
              element: r,
              clientX: null,
              clientY: null,
              instance: o,
              options: o.m_options,
              fnOnMenuItemSelected: function () {
                o.Hide();
              },
              bSubmenu: !0,
            };
            return o.RenderElements(i, n), o;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.Hide = function () {
              var e = this;
              this.m_popupContextMenu
                ? window.setTimeout(function () {
                    e.m_parentInstance.HideIfNotInFocus();
                  }, 10)
                : this.m_parentInstance.Hide();
            }),
            (t.prototype.BIsSubMenu = function () {
              return !0;
            }),
            t
          );
        })(m);
    },
    UPxs: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return b;
      });
      var r,
        o = n("mrSG"),
        i = n("q1tI"),
        a = n("BC0X"),
        s = n("qDk6");
      n("9cYf"), n("bxiW"), n("rHSA"), n("bDQf");
      !(function (e) {
        (e[(e.A = 0)] = "A"),
          (e[(e.B = 1)] = "B"),
          (e[(e.X = 2)] = "X"),
          (e[(e.Y = 3)] = "Y"),
          (e[(e.Left = 4)] = "Left"),
          (e[(e.Right = 5)] = "Right"),
          (e[(e.Up = 6)] = "Up"),
          (e[(e.Down = 7)] = "Down"),
          (e[(e.HomeMenu = 8)] = "HomeMenu"),
          (e[(e.QuickMenu = 9)] = "QuickMenu"),
          (e[(e.Select = 10)] = "Select"),
          (e[(e.Start = 11)] = "Start"),
          (e[(e.LeftBumper = 12)] = "LeftBumper"),
          (e[(e.RightBumper = 13)] = "RightBumper");
      })(r || (r = {}));
      var c;
      !(function (e) {
        (e.Type = "data-nav-type"),
          (e.TargetFocuses = "data-nav-target-focuses"),
          (e.TargetClicks = "data-nav-target-clicks"),
          (e.PreferFirstNavStop = "data-nav-prefer-first-nav-stop"),
          (e.Preferred = "data-nav-preferred"),
          (e.NoPrimaryAction = "data-nav-npa"),
          (e.NoFocusMarker = "data-nav-no-focus-marker"),
          (e.XOrder = "data-nav-xorder"),
          (e.YOrder = "data-nav-yorder"),
          (e.ScrollAxes = "data-nav-scroll-axes"),
          (e.EnterAsScrolledAxes = "data-nav-enter-as-scrolled-axes"),
          (e.Address = "data-nav-addr"),
          (e.AreaActive = "data-nav-area-active"),
          (e.AreaPass = "data-nav-area-pass"),
          (e.ScrollSnapTypeX = "data-nav-scroll-snap-type-x"),
          (e.ScrollSnapTypeY = "data-nav-scroll-snap-type-y"),
          (e.ScrollSnapMarginX = "data-nav-scroll-snap-margin-x"),
          (e.ScrollSnapMarginY = "data-nav-scroll-snap-margin-y"),
          (e.Focus = "data-nav-focus");
      })(c || (c = {}));
      var l,
        u,
        p,
        d = (function () {
          function e() {}
          return (
            Object.defineProperty(e, "IsNavEnabled", {
              get: function () {
                return e.s_bIsNavEnabled;
              },
              set: function (t) {
                e.s_bIsNavEnabled = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e, "IsLoggingToConsole", {
              get: function () {
                return !1;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e, "IsNotSettingFocus", {
              get: function () {
                return !1;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e, "IsDebuggingNavAddresses", {
              get: function () {
                return !1;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e, "IsPointerVisible", {
              get: function () {
                return !1;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e, "IsFocusMarkerAlwaysVisible", {
              get: function () {
                return !1;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e, "IsDefaultFocusMarkerVisible", {
              get: function () {
                return !1;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e, "IsDocumentUsingZoom", {
              get: function () {
                return !0;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.s_bIsNavEnabled = !1),
            e
          );
        })();
      function h(e, t, n) {
        if (!d.IsLoggingToConsole) return n;
        var r = n.value;
        return (
          (n.value = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            0;
            try {
              var n = r.apply(this, e);
              return n;
            } catch (e) {
              throw e;
            }
          }),
          n
        );
      }
      function m(e) {
        for (
          var t = 1, n = e.ownerDocument.defaultView, r = e;
          null != r;
          r = r.parentElement
        ) {
          var o = parseFloat(n.getComputedStyle(r).zoom);
          o > 0 && (t *= o);
        }
        return t;
      }
      function f(e) {
        if (d.IsDocumentUsingZoom) {
          var t = m(e),
            n = e.getBoundingClientRect();
          return {
            x: { min: n.left * t, max: n.right * t },
            y: { min: n.top * t, max: n.bottom * t },
          };
        }
        return (function (e) {
          return {
            x: { min: e.left, max: e.right },
            y: { min: e.top, max: e.bottom },
          };
        })(e.getBoundingClientRect());
      }
      !(function (e) {
        (e[(e.None = 2)] = "None"),
          (e[(e.Scrollable = 1)] = "Scrollable"),
          (e[(e.AtEnd = 3)] = "AtEnd");
      })(l || (l = {})),
        (function (e) {
          (e.X = "x"), (e.Y = "y"), (e.XY = "xy");
        })(u || (u = {})),
        (function (e) {
          (e.Area = "area"), (e.Group = "group"), (e.Target = "target");
        })(p || (p = {}));
      i.createContext(void 0), i.createContext(void 0), i.createContext(void 0);
      i.Component, new Map();
      var g,
        b = Object(a.e)("div");
      Object(a.e)("button"),
        Object(a.e)("input"),
        Object(a.e)("span"),
        Object(a.e)("textarea"),
        Object(a.e)("a"),
        Object(a.e)("input");
      !(function (e) {
        (e.Geometry = "Geometry"),
          (e.DomOrder = "DomOrder"),
          (e.ReverseDomOrder = "ReverseDomOrder");
      })(g || (g = {}));
      var v;
      i.forwardRef(function (e, t) {
        e.navKey;
        var n = e.className,
          r = e.children,
          a = Object(o.f)(e, ["navKey", "className", "children"]);
        return i.createElement(
          s.a,
          Object(o.a)({ className: n }, a, { ref: t }),
          r
        );
      });
      !(function (e) {
        (e[(e.Available = 0)] = "Available"),
          (e[(e.Preferred = 1)] = "Preferred"),
          (e[(e.StartFocused = 2)] = "StartFocused"),
          (e[(e.RestoredEpoch = 3)] = "RestoredEpoch");
      })(v || (v = {}));
    },
    WBba: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var r = n("mrSG"),
        o = n("H7XF"),
        i = n("hRO2"),
        a = n("bxBv"),
        s = n("XxJJ"),
        c = n("vDqi"),
        l = n.n(c),
        u = n("mC9v"),
        p = n("kLLr");
      var d = (function () {
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
          (e.prototype.WaitUntilLoggedOn = function () {
            return Promise.resolve();
          }),
          (e.prototype.GetServerRTime32 = function () {
            return Number(new Date());
          }),
          Object.defineProperty(e.prototype, "steamid", {
            get: function () {
              return new p.a();
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.RTime32ToDate = function (e) {
            return new Date(1e3 * e);
          }),
          (e.prototype.GetServiceTransport = function () {
            return this.m_ServiceTransport;
          }),
          (e.prototype.GetAnonymousServiceTransport = function () {
            return this.m_AnonymousServiceTransport;
          }),
          (e.prototype.ConstructServiceTransport = function () {
            (this.m_ServiceTransport = {
              SendMsg: this.SendMsgAndAwaitResponse.bind(this, {
                bSendAuth: !0,
              }),
              SendNotification: this.SendNotification.bind(this, {
                bSendAuth: !0,
              }),
            }),
              (this.m_AnonymousServiceTransport = {
                SendMsg: this.SendMsgAndAwaitResponse.bind(this, {
                  bSendAuth: !1,
                }),
                SendNotification: this.SendNotification.bind(this, {
                  bSendAuth: !1,
                }),
              });
          }),
          (e.prototype.SendMsgAndAwaitResponse = function (e, t, n, o, s) {
            return Object(r.b)(this, void 0, void 0, function () {
              var c, l, p, d;
              return Object(r.e)(this, function (r) {
                switch (r.label) {
                  case 0:
                    (c = null), (r.label = 1);
                  case 1:
                    return r.trys.push([1, 3, , 4]), [4, this.Send(e, t, n, s)];
                  case 2:
                    if (200 != (l = r.sent()).status || !l.data)
                      throw new Error("Request Error");
                    return (
                      (c = a.b.Init(o, 147)),
                      l.headers &&
                        (l.headers["x-eresult"] &&
                          c.Hdr().set_eresult(parseInt(l.headers["x-eresult"])),
                        l.headers["x-error_message"] &&
                          c
                            .Hdr()
                            .set_error_message(l.headers["x-error_message"])),
                      this.m_bJsonMode
                        ? c.SetBodyJSON(l.data.response)
                        : ((p = new u.a(l.data)),
                          (d = new i.BinaryReader(
                            p.GetPacket(),
                            p.TellGet(),
                            p.GetCountBytesRemaining()
                          )),
                          o.deserializeBinaryFromReader(c.Body(), d)),
                      [3, 4]
                    );
                  case 3:
                    return (
                      r.sent(),
                      (c = this.CreateFailedMsgProtobuf(o, 3, null)),
                      [3, 4]
                    );
                  case 4:
                    return [2, c];
                }
              });
            });
          }),
          (e.prototype.SendNotification = function (e, t, n, r) {
            return this.Send(e, t, n, r), !0;
          }),
          (e.prototype.Send = function (e, t, n, i) {
            var a = this.CreateWebAPIURL(t),
              s = n.SerializeBody(),
              c = o.fromByteArray(s),
              u = i.eWebAPIKeyRequirement,
              p = 0 == i.ePrivilege && 1 == u,
              d = {
                responseType: this.m_bJsonMode ? "json" : "arraybuffer",
                params: {},
              };
            if (
              (e.bSendAuth ||
                1 == u ||
                console.error(
                  "Attempting to invoke service " +
                    t +
                    " without auth, but auth is required."
                ),
              this.m_webApiAccessToken &&
                e.bSendAuth &&
                !p &&
                (d.params.access_token = this.m_webApiAccessToken),
              !i.bConstMethod)
            ) {
              var h = new FormData();
              return (
                this.m_bJsonMode
                  ? h.append("input_json", JSON.stringify(n.Body().toObject()))
                  : h.append("input_protobuf_encoded", c),
                l.a.post(a, h, d)
              );
            }
            return (
              this.m_bJsonMode
                ? (d.params = Object(r.a)(Object(r.a)({}, d.params), {
                    input_json: JSON.stringify(n.Body().toObject()),
                  }))
                : (d.params = Object(r.a)(Object(r.a)({}, d.params), {
                    input_protobuf_encoded: c,
                  })),
              l.a.get(a, d)
            );
          }),
          (e.prototype.CreateWebAPIURL = function (e) {
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
          (e.prototype.CreateFailedMsgProtobuf = function (e, t, n) {
            var r = a.b.Init(e);
            return (
              r.Hdr().set_eresult(2),
              r.Hdr().set_transport_error(t),
              n && r.Hdr().set_error_message(n),
              r
            );
          }),
          Object(r.c)([s.a], e.prototype, "SendMsgAndAwaitResponse", null),
          Object(r.c)([s.a], e.prototype, "SendNotification", null),
          Object(r.c)([s.a], e.prototype, "Send", null),
          e
        );
      })();
    },
    WplJ: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var r = n("q1tI"),
        o = n.n(r),
        i = n("i8i4"),
        a = function (e) {
          var t = e.config;
          return o.a.createElement(
            o.a.Fragment,
            null,
            Object.keys(t || {}).map(function (e) {
              var n = document.querySelectorAll("[data-featuretarget=" + e);
              return n.length
                ? Array.from(n).map(function (n, r) {
                    var o = (function (e, t) {
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
                    })(n.getAttribute("data-props"), e);
                    return Object(i.createPortal)(t[e](o), n, "" + e + r);
                  })
                : null;
            })
          );
        };
    },
    X3Ds: function (e, t, n) {
      "use strict";
      n.d(t, "e", function () {
        return o;
      }),
        n.d(t, "d", function () {
          return i;
        }),
        n.d(t, "h", function () {
          return a;
        }),
        n.d(t, "m", function () {
          return s;
        }),
        n.d(t, "l", function () {
          return c;
        }),
        n.d(t, "i", function () {
          return l;
        }),
        n.d(t, "j", function () {
          return u;
        }),
        n.d(t, "b", function () {
          return p;
        }),
        n.d(t, "p", function () {
          return d;
        }),
        n.d(t, "g", function () {
          return h;
        }),
        n.d(t, "q", function () {
          return m;
        }),
        n.d(t, "f", function () {
          return f;
        }),
        n.d(t, "k", function () {
          return g;
        }),
        n.d(t, "o", function () {
          return b;
        }),
        n.d(t, "c", function () {
          return v;
        }),
        n.d(t, "r", function () {
          return _;
        }),
        n.d(t, "n", function () {
          return y;
        }),
        n.d(t, "a", function () {
          return O;
        });
      var r = n("mrSG");
      n("Kw0F"), n("r64O");
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
          right: e.screenLeft + t.right,
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
      function m(e) {
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
      function g(e, t) {
        for (; e; ) {
          if (t(e)) return e;
          e = e.parentElement;
        }
      }
      function b(e) {
        for (
          var t = 1, n = e.ownerDocument.defaultView, r = e;
          null != r;
          r = r.parentElement
        ) {
          var o = parseFloat(n.getComputedStyle(r).zoom);
          0 !== o && (t *= o);
        }
        return t;
      }
      function v(e, t) {
        if ("x" === t) {
          if (e.scrollWidth <= e.clientWidth) return !1;
        } else if (e.scrollHeight <= e.clientHeight) return !1;
        var n = e.ownerDocument.defaultView.getComputedStyle(e),
          r = "x" === t ? n.overflowX : n.overflowY;
        return "auto" === r || "scroll" === r;
      }
      function _(e, t) {
        return Object(r.b)(this, void 0, void 0, function () {
          var n, o;
          return Object(r.e)(this, function (r) {
            switch (r.label) {
              case 0:
                return [
                  4,
                  new Promise(function (r) {
                    (n = r), e.addEventListener(t, r);
                  }),
                ];
              case 1:
                return (o = r.sent()), e.removeEventListener(t, n), [2, o];
            }
          });
        });
      }
      function y() {
        var e = {};
        return (
          document
            .querySelectorAll('link[rel="stylesheet"]')
            .forEach(function (t) {
              e[t.href] = t;
            }),
          e
        );
      }
      function O(e, t) {
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
            var d = l.attributes.item(p);
            u.setAttribute(d.name, d.value);
          }
          r.appendChild(u);
        }
      }
    },
    XxJJ: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return {
          get: function () {
            var e = n.value.bind(this);
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
    YyVH: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return (
          (e = Math.ceil(e)),
          (t = Math.floor(t)),
          Math.floor(Math.random() * (t - e + 1)) + e
        );
      }
      function o(e, t, n) {
        return null == e || isNaN(e) ? e : Math.max(t, Math.min(n, e));
      }
      function i(e, t, n, r, o) {
        return r + ((o - r) * (e - t)) / (n - t);
      }
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return o;
        }),
        n.d(t, "c", function () {
          return i;
        });
    },
    Z1oF: function (e, t, n) {
      "use strict";
      n.d(t, "j", function () {
        return s;
      }),
        n.d(t, "e", function () {
          return c;
        }),
        n.d(t, "h", function () {
          return l;
        }),
        n.d(t, "f", function () {
          return u;
        }),
        n.d(t, "g", function () {
          return d;
        }),
        n.d(t, "i", function () {
          return f;
        }),
        n.d(t, "a", function () {
          return g;
        }),
        n.d(t, "c", function () {
          return w;
        }),
        n.d(t, "b", function () {
          return E;
        }),
        n.d(t, "d", function () {
          return S;
        });
      var r = n("mrSG"),
        o = n("TLQK"),
        i = n("CdLH"),
        a = n("Gp1o");
      function s(e, t, n) {
        var a,
          s = (a =
            "boolean" == typeof t
              ? { bExcludeAgo: t, bForceSingleUnits: n, bHighGranularity: !1 }
              : Object(r.a)(
                  {
                    bExcludeAgo: !1,
                    bForceSingleUnits: !1,
                    bHighGranularity: !1,
                  },
                  t
                )).bExcludeAgo
            ? "#TimeInterval_"
            : "#TimeSince_";
        if (e >= 2 * i.f.PerYear)
          return Object(o.f)(s + "XYears", Math.floor(e / i.f.PerYear));
        if (e >= i.f.PerYear)
          return (e -= i.f.PerYear) >= 2 * i.f.PerMonth && !a.bForceSingleUnits
            ? Object(o.f)(s + "1YearXMonths", Math.floor(e / i.f.PerMonth))
            : Object(o.f)(s + "1Year");
        if (e >= 2 * i.f.PerMonth)
          return Object(o.f)(s + "XMonths", Math.floor(e / i.f.PerMonth));
        if (e >= 2 * i.f.PerWeek)
          return Object(o.f)(s + "XWeeks", Math.floor(e / i.f.PerWeek));
        if (e >= i.f.PerWeek)
          return Object(o.f)(s + "1Week", Math.floor(e / i.f.PerWeek));
        if (e >= 2 * i.f.PerDay)
          return Object(o.f)(s + "XDays", Math.floor(e / i.f.PerDay));
        if (e >= i.f.PerDay)
          return (e -= i.f.PerDay) >= 2 * i.f.PerHour && !a.bForceSingleUnits
            ? Object(o.f)(s + "1DayXHours", Math.floor(e / i.f.PerHour))
            : Object(o.f)(s + "1Day");
        if (e >= 2 * i.f.PerHour)
          return Object(o.f)(s + "XHours", Math.floor(e / i.f.PerHour));
        if (e >= i.f.PerHour)
          return (e -= i.f.PerHour) >= 2 * i.f.PerMinute && !a.bForceSingleUnits
            ? Object(o.f)(s + "1HourXMinutes", Math.floor(e / i.f.PerMinute))
            : Object(o.f)(s + "1Hour");
        if (e >= 2 * i.f.PerMinute) {
          var c = Math.floor(e / i.f.PerMinute),
            l = e % i.f.PerMinute;
          return a.bHighGranularity && 0 != l
            ? 1 == l
              ? Object(o.f)(s + "XMinutes1Second", c)
              : Object(o.f)(s + "XMinutesXSeconds", c, l)
            : Object(o.f)(s + "XMinutes", c);
        }
        if (e >= i.f.PerMinute) {
          l = e % i.f.PerMinute;
          return a.bHighGranularity && 0 != l
            ? 1 == l
              ? Object(o.f)(s + "1Minute1Second")
              : Object(o.f)(s + "1MinuteXSeconds", l)
            : Object(o.f)(s + "1Minute");
        }
        return a.bHighGranularity
          ? 1 == e
            ? Object(o.f)(s + "1Second")
            : Object(o.f)(s + "XSeconds", e)
          : Object(o.f)(s + "LessThanAMinute");
      }
      function c(e, t) {
        var n = {
          weekday: "short",
          month: "long",
          day: "numeric",
          year: t ? void 0 : "numeric",
        };
        return new Date(1e3 * e).toLocaleDateString(
          o.e.GetPreferredLocales(),
          n
        );
      }
      function l(e) {
        var t = new Date(1e3 * e),
          n = t.setHours(0, 0, 0, 0),
          r = h.get(n);
        if (r) return r;
        return (
          (r = t.toLocaleDateString(o.e.GetPreferredLocales(), {
            year: "numeric",
            month: "short",
            day: "numeric",
          })),
          h.set(n, r),
          r
        );
      }
      function u(e) {
        return new Date(1e3 * e).toLocaleTimeString(o.e.GetPreferredLocales(), {
          hour: "numeric",
          minute: "numeric",
        });
      }
      var p = new Map();
      function d(e) {
        var t = new Date(1e3 * e),
          n = o.e.GetPreferredLocales(),
          r = (function (e) {
            var t = p.get(e);
            if (!0 === t || !1 === t) return t;
            var n = new Date();
            return (
              n.setHours(15),
              (t =
                n.toLocaleTimeString(e, { hour: "numeric" }) ==
                n.toLocaleTimeString(e, { hour: "numeric", hour12: !1 })),
              p.set(e, t),
              t
            );
          })(n[0]);
        return t.toLocaleTimeString(
          n,
          r
            ? { hour: "numeric", minute: "numeric" }
            : { hour: "numeric", hour12: !0 }
        );
      }
      var h = new Map(),
        m = new Map();
      function f(e, t) {
        var n = new Date(),
          r = new Date(1e3 * e);
        if (r.getFullYear() != n.getFullYear()) return l(e);
        a.c(new Date().setHours(24, 0, 0, 0) - n.getTime());
        var i = new Date();
        if ((i.setHours(0, 0, 0, 0), r >= i)) {
          if ((i.setDate(i.getDate() + 1), r < i))
            return Object(o.f)("#Time_Today");
          if ((i.setDate(i.getDate() + 1), r < i))
            return Object(o.f)("#Time_Tomorrow");
        } else if ((i.setDate(i.getDate() - 1), r >= i))
          return Object(o.f)("#Time_Yesterday");
        var s = { month: t ? "long" : "short", day: "numeric" },
          c = r.setHours(0, 0, 0, 0) + s.month,
          u = m.get(c);
        return (
          u ||
          ((u = r.toLocaleDateString(o.e.GetPreferredLocales(), s)),
          m.set(c, u),
          u)
        );
      }
      function g(e, t) {
        var n = new Date(1e3 * e),
          s = new Date(),
          l = Object(r.a)(
            {
              bGranularFutureTime: !1,
              bGranularToday: !1,
              bGranularYesterday: !1,
              bGranularPast: !1,
            },
            t
          );
        if (n > s) {
          if (!l.bGranularFutureTime)
            return (
              a.c(n.getTime() - s.getTime()),
              n.getFullYear() == s.getFullYear() ? C(n) : D(n)
            );
          a.c(new Date().setHours(24, 0, 0, 0) - s.getTime());
          var p = new Date();
          return (
            p.setHours(0, 0, 0, 0),
            p.setDate(p.getDate() + 1),
            n < p
              ? Object(o.f)("#Time_Today")
              : (p.setDate(p.getDate() + 1),
                n < p
                  ? Object(o.f)("#Time_Tomorrow")
                  : (p.setDate(p.getDate() + 5), n < p ? E(n) : w(n, !0)))
          );
        }
        a.c(new Date().setHours(24, 0, 0, 0) - s.getTime());
        var d = new Date();
        if ((d.setHours(0, 0, 0, 0), n >= d))
          return l.bGranularToday
            ? Object(o.f)("#Time_Today_At", u(e))
            : Object(o.f)("#Time_Today");
        if ((d.setDate(d.getDate() - 1), n >= d))
          return l.bGranularYesterday
            ? Object(o.f)("#Time_Yesterday_At", u(e))
            : Object(o.f)("#Time_Yesterday");
        if (l.bGranularPast)
          return Object(o.f)(
            "#Time_Past_At",
            c(e, n.getFullYear() == s.getFullYear()),
            u(e)
          );
        if ((d.setDate(d.getDate() - 5), n >= d))
          return Object(o.f)("#TimeSince_ThisWeek");
        var h = new Date(d);
        if (
          (d.setDate(d.getDate() - 21),
          n >= d ||
            (n.getMonth() == s.getMonth() &&
              n.getFullYear() == s.getFullYear()))
        ) {
          var m =
            Math.floor((h.valueOf() - n.valueOf()) / (1e3 * i.f.PerWeek)) + 1;
          return 1 == m
            ? Object(o.f)("#TimeSince_1Week")
            : Object(o.f)("#TimeSince_XWeeks", m);
        }
        return n.getFullYear() == s.getFullYear() ? C(n) : D(n);
      }
      var b = new Map(),
        v = new Map(),
        _ = new Map(),
        y = new Map(),
        O = new Map();
      function w(e, t) {
        void 0 === t && (t = !1);
        var n = e.getDate() + 31 * (e.getMonth() + 12 * e.getFullYear()),
          r = O.get(n);
        return (
          r ||
          ((r = e.toLocaleDateString(o.e.GetPreferredLocales(), {
            weekday: "long",
            day: "numeric",
            month: t ? "long" : "short",
          })),
          O.set(n, r),
          r)
        );
      }
      function E(e) {
        var t = b.get(e.getDay());
        return (
          t ||
          ((t = e.toLocaleDateString(o.e.GetPreferredLocales(), {
            weekday: "long",
          })),
          b.set(e.getDay(), t),
          t)
        );
      }
      function C(e) {
        var t = v.get(e.getMonth());
        return (
          t ||
          ((t = e.toLocaleDateString(o.e.GetPreferredLocales(), {
            month: "long",
          })),
          v.set(e.getMonth(), t),
          t)
        );
      }
      function S(e) {
        var t = _.get(e.getFullYear());
        return (
          t ||
          ((t = e.toLocaleDateString(o.e.GetPreferredLocales(), {
            year: "numeric",
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
          ((n = e.toLocaleDateString(o.e.GetPreferredLocales(), {
            month: "long",
            year: "numeric",
          })),
          y.set(t, n),
          n)
        );
      }
    },
    Z7Ow: function (e, t, n) {
      e.exports = {
        EmoticonBow: "shared_svg_library_EmoticonBow_2Llzt",
        EmoticonBow_st0: "shared_svg_library_EmoticonBow_st0_Fw2WG",
        EmoticonBow_st1: "shared_svg_library_EmoticonBow_st1_luj0t",
      };
    },
    bDQf: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "a", function () {
          return s;
        });
      var r = n("mrSG"),
        o = n("vDqi"),
        i = n.n(o),
        a = (function () {
          function e(e) {
            this.idGenerator =
              e ||
              function () {
                return "";
              };
          }
          return (
            (e.prototype.LOG = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this.enabled &&
                console.log.apply(
                  console,
                  Object(r.g)([this.idGenerator() + ":"], e)
                );
            }),
            (e.create = function (t, n) {
              void 0 === n && (n = !1);
              var r = new e(t);
              return (r.enabled = n), r.LOG.bind(r);
            }),
            e
          );
        })();
      function s(e) {
        if (i.a.isCancel(e))
          return { strErrorMsg: "Action Cancelled:" + e, errorCode: 52 };
        if (
          void 0 !== e.response &&
          e.response.data &&
          "object" == typeof e.response.data
        ) {
          if ("msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.msg,
              errorCode: e.response.data.success,
            };
          if ("err_msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.err_msg,
              errorCode: e.response.data.success,
            };
          if ("message" in e.response.data)
            return {
              strErrorMsg: e.response.data.message,
              errorCode: e.response.data.success,
            };
        } else {
          if (void 0 !== e.success && void 0 !== e.msg)
            return { strErrorMsg: e.msg, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.message)
            return { strErrorMsg: e.message, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.err_msg)
            return { strErrorMsg: e.err_msg, errorCode: e.success };
          "string" == typeof e && e.length > 1024
            ? (console.groupCollapsed(
                "GetMsgAndErrorCodeFromResponse cannot parse: "
              ),
              console.error(e),
              console.groupEnd())
            : console.error("GetMsgAndErrorCodeFromResponse cannot parse: ", e);
        }
        return "object" == typeof e && "status" in e
          ? {
              strErrorMsg: "Unknown Error: " + e + "\nStatus Code:" + e.status,
              errorCode: 2,
            }
          : { strErrorMsg: "Unknown Error: " + e, errorCode: 2 };
      }
    },
    bxBv: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      }),
        n.d(t, "b", function () {
          return c;
        });
      var r = n("mrSG"),
        o = n("mC9v"),
        i = n("hRO2");
      i.Message;
      var a = n("RD/U"),
        s =
          (n("kLLr"),
          (function () {
            function e(e, t, n, r, o) {
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
                        new i.BinaryReader(
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
              (e.InstallErrorReportingStore = function (e) {
                this.sm_ErrorReportingStore = e;
              }),
              (e.InitHeaderFromPacket = function (t) {
                return new e(void 0, t);
              }),
              (e.prototype.InitForType = function (t) {
                if (((this.m_body = new t()), this.m_netPacket)) {
                  this.m_netPacket.SeekGetHead(8 + this.m_cubHeader);
                  try {
                    t.deserializeBinaryFromReader(
                      this.m_body,
                      new i.BinaryReader(
                        this.m_netPacket.GetPacket(),
                        this.m_netPacket.TellGet(),
                        this.m_netPacket.GetCountBytesRemaining()
                      )
                    );
                  } catch (t) {
                    this.m_bValid = !1;
                    var n = e.sm_ErrorReportingStore,
                      r =
                        "Exception parsing protobuf message body of type " +
                        this.m_eMsg +
                        ".  Definitions may be out of sync with server version.";
                    n &&
                      n.ReportError(new Error(r), {
                        bIncludeMessageInIdentifier: !0,
                      }),
                      console.warn(r),
                      console.log(t.stack || t);
                  }
                }
              }),
              (e.prototype.BIsValid = function () {
                return this.m_bValid;
              }),
              (e.prototype.Body = function () {
                return this.m_body;
              }),
              (e.prototype.SetBodyJSON = function (e) {
                (e.toObject = function () {
                  return e;
                }),
                  (this.m_body = e);
              }),
              (e.prototype.Hdr = function () {
                return this.m_header;
              }),
              (e.prototype.GetEMsg = function () {
                return this.m_eMsg;
              }),
              (e.prototype.SetEMsg = function (e) {
                this.m_eMsg = e;
              }),
              (e.prototype.GetEResult = function () {
                return this.Hdr().eresult();
              }),
              (e.prototype.Serialize = function () {
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
              (e.prototype.SerializeBody = function () {
                var e = this.m_body.serializeBinary(),
                  t = new Uint8Array(e.length);
                return new o.a(t).PutBytes(e), t;
              }),
              (e.prototype.DEBUG_ToObject = function () {
                return {};
              }),
              (e.prototype.DEBUG_LogToConsole = function () {}),
              e
            );
          })()),
        c = (function (e) {
          function t(t, n, r, o) {
            return void 0 === n && (n = 0), e.call(this, n, r, t, o) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.InitFromPacket = function (e, n) {
              return new t(e, 0, n);
            }),
            (t.InitFromMsg = function (e, n) {
              return new t(e, void 0, void 0, n);
            }),
            (t.Init = function (e, n) {
              return new t(e, n);
            }),
            (t.prototype.Body = function () {
              return e.prototype.Body.call(this);
            }),
            (t.prototype.SetBodyFields = function (e) {
              var t = this,
                n = function (n) {
                  Array.isArray(e[n])
                    ? r.Body()["add_" + n] &&
                      e[n].forEach(function (e) {
                        t.Body()["add_" + n](e);
                      })
                    : r.Body()["set_" + n] && r.Body()["set_" + n](e[n]);
                },
                r = this;
              for (var o in e) n(o);
            }),
            t
          );
        })(s);
    },
    bxiW: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return i;
      }),
        n.d(t, "c", function () {
          return a;
        }),
        n.d(t, "f", function () {
          return s;
        }),
        n.d(t, "e", function () {
          return c;
        }),
        n.d(t, "d", function () {
          return l;
        });
      n("mrSG"), n("Gp1o");
      var r = n("q1tI"),
        o = n("XxJJ");
      function i(e, t, n) {
        return [e, t, n];
      }
      function a(e, t) {
        null != e && ("function" == typeof e ? e(t) : (e.current = t));
      }
      function s() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return r.useCallback(function (t) {
          for (var n = 0, r = e; n < r.length; n++) {
            a(r[n], t);
          }
        }, e);
      }
      function c() {
        var e = r.useState(0),
          t = e[0],
          n = e[1];
        return function () {
          return n(t + 1);
        };
      }
      function l(e, t) {
        r.useLayoutEffect(
          function () {
            if (t) {
              var n = e.Register(t);
              return function () {
                return n.Unregister();
              };
            }
          },
          [e, t]
        );
      }
      n.d(t, "a", function () {
        return o.a;
      });
    },
    eDP5: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return s;
        });
      var r = n("mrSG"),
        o = n("q1tI"),
        i = n("lkRc"),
        a = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.render = function () {
              if ("dev" !== i.c.WEB_UNIVERSE) return null;
              var e = document.getElementById(this.props.strConfigID);
              if (!e) return null;
              var t = new Array();
              return (
                e.getAttributeNames().forEach(function (n) {
                  n.toLocaleLowerCase().startsWith("data-") &&
                    (t.push(o.createElement("h1", { key: "header-" + n }, n)),
                    t.push(
                      o.createElement(s, {
                        key: "body-" + n,
                        data: JSON.parse(e.getAttribute(n)),
                      })
                    ));
                }),
                o.createElement("div", null, t)
              );
            }),
            t
          );
        })(o.Component),
        s = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.render = function () {
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
    exH9: function (e, t, n) {
      "use strict";
      function r(e) {
        return Object.keys(e).reduce(function (t, n) {
          return e[n] ? (t ? t + " " + n : n) : t;
        }, "");
      }
      t.a = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return e.reduce(function (e, t) {
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
    gfbn: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("mrSG"),
        o = (n("SQr7"), n("Wr5T"), n("nmPn")),
        i = n("q1tI"),
        a = n.n(i),
        s = n("i8i4"),
        c = n.n(s),
        l = (n("mRR+"), n("TLQK"));
      n("mgoM");
      var u = n("lkRc"),
        p = n("r64O"),
        d = n("WBba"),
        h = n("uobO"),
        m = (n("5izx"), n("X3Ds"));
      n("xnZ7"), n("idvb");
      Object(m.q)(function () {
        return Object(r.b)(void 0, void 0, void 0, function () {
          return Object(r.e)(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  document.getElementById("application_config")
                    ? Object(u.h)("application_config")
                    : Object(u.h)(),
                  Object(h.a)().Init(
                    "Community",
                    CLSTAMP,
                    new d.a(u.c.WEBAPI_BASE_URL).GetServiceTransport()
                  ),
                  [4, g(u.c.LANGUAGE)]
                );
              case 1:
                return (
                  e.sent(),
                  document.getElementById("application_root") &&
                    c.a.render(
                      a.a.createElement(o.a, {}),
                      document.getElementById("application_root")
                    ),
                  [2]
                );
            }
          });
        });
      });
      var f = [];
      function g(e) {
        return Object(r.b)(this, void 0, void 0, function () {
          var t, o, i, a, s, c, u, p, d, h;
          return Object(r.e)(this, function (r) {
            switch (r.label) {
              case 0:
                return [3, 2];
              case 1:
                return r.sent(), [3, 4];
              case 2:
                return (
                  (t = l.b.GetLanguageFallback(e)),
                  (o = e === t),
                  [
                    4,
                    Promise.all([
                      n("rCDf")("./shared_" + e + ".json").then(function (e) {
                        return e.default;
                      }),
                      n("AvbV")("./main_" + e + ".json").then(function (e) {
                        return e.default;
                      }),
                      o
                        ? {}
                        : n("rCDf")("./shared_" + t + ".json").then(function (
                            e
                          ) {
                            return e.default;
                          }),
                      o
                        ? {}
                        : n("AvbV")("./main_" + t + ".json").then(function (e) {
                            return e.default;
                          }),
                    ]),
                  ]
                );
              case 3:
                (i = r.sent()),
                  (a = i[0]),
                  (s = i[1]),
                  (c = i[2]),
                  (u = i[3]),
                  l.e.InitFromObjects(s, u, a, c),
                  (r.label = 4);
              case 4:
                for (p = 0, d = f; p < d.length; p++)
                  (h = d[p]), l.e.AddTokens(h);
                return (f = void 0), [2];
            }
          });
        });
      }
      window.LocalizationManifestReady = function (e, t, n) {
        Object(p.a)("manifest" === t, 'Expected manifest not "' + t + '"'),
          void 0 !== f ? f.push(n) : l.e.AddTokens(n);
      };
    },
    hJxo: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      }),
        n.d(t, "b", function () {
          return c;
        });
      var r = n("mrSG"),
        o = n("i8i4"),
        i = n("X3Ds"),
        a = (function () {
          function e(e, t) {
            (this.m_bActive = !1),
              (this.m_fnBoundAnimationFunc = void 0),
              (this.m_window = e),
              (this.m_options = Object.assign({ timing: "sine" }, t));
          }
          return (
            (e.prototype.Start = function () {
              var e;
              switch (
                ((this.m_msStart = performance.now()),
                (this.m_msEnd = this.m_msStart + this.m_options.msDuration),
                this.m_options.timing)
              ) {
                case "linear":
                  e = function (e) {
                    return e;
                  };
                  break;
                case "cubic-in-out":
                  e = function (e) {
                    return e < 0.5
                      ? 4 * e * e * e
                      : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
                  };
                  break;
                case "sine":
                default:
                  e = function (e) {
                    return 0.5 - Math.cos(e * Math.PI) / 2;
                  };
              }
              (this.m_bActive = !0),
                (this.m_fnBoundAnimationFunc = this.OnInterval.bind(this, e)),
                this.m_window.requestAnimationFrame(
                  this.m_fnBoundAnimationFunc
                );
            }),
            (e.prototype.BIsActive = function () {
              return this.m_bActive;
            }),
            (e.prototype.End = function () {
              this.m_bActive &&
                (this.Update(1), this.ClearInterval(), this.FireOnComplete());
            }),
            (e.prototype.FireOnComplete = function () {
              this.m_options.onComplete && this.m_options.onComplete();
            }),
            (e.prototype.Cancel = function () {
              this.m_bActive = !1;
            }),
            (e.prototype.OnInterval = function (e) {
              if (this.m_bActive) {
                var t = performance.now() - this.m_msStart;
                if (t >= this.m_options.msDuration) this.End();
                else {
                  var n = t / this.m_options.msDuration;
                  this.Update(e(n)),
                    this.m_window.requestAnimationFrame(
                      this.m_fnBoundAnimationFunc
                    );
                }
              }
            }),
            (e.prototype.ClearInterval = function () {
              this.m_bActive = !1;
            }),
            e
          );
        })(),
        s = (function (e) {
          function t(t, n, r) {
            var o = e.call(this, i.l(t), r) || this;
            return (o.m_props = {}), (o.m_object = t), (o.m_propTargets = n), o;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.Start = function () {
              for (var t in ((this.m_props = {}), this.m_propTargets)) {
                var n = parseFloat(this.m_object[t]) || 0,
                  r = this.m_propTargets[t];
                n != r && (this.m_props[t] = { start: n, end: r });
              }
              e.prototype.Start.call(this);
            }),
            (t.prototype.Update = function (e) {
              for (var t in this.m_props) {
                var n = this.m_props[t],
                  r = n.start + (n.end - n.start) * e;
                this.m_object[t] = r;
              }
            }),
            t
          );
        })(a),
        c = (function (e) {
          function t(t, n, r) {
            var a = e.call(this, i.l(o.findDOMNode(t)), r) || this;
            return (
              (a.m_props = {}),
              (a.m_component = t),
              (a.m_propTargets = n),
              (a.m_setStateOnComplete = r.setStateOnComplete),
              a
            );
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.Start = function () {
              for (var t in ((this.m_props = {}), this.m_propTargets)) {
                var n = parseFloat(this.m_component.state[t]) || 0,
                  r = this.m_propTargets[t];
                n != r && (this.m_props[t] = { start: n, end: r });
              }
              e.prototype.Start.call(this);
            }),
            (t.prototype.Update = function (e) {
              var t = {};
              for (var n in this.m_props) {
                var r = this.m_props[n],
                  o = r.start + (r.end - r.start) * e;
                t[n] = o;
              }
              this.m_component.setState(t);
            }),
            (t.prototype.FireOnComplete = function () {
              e.prototype.FireOnComplete.call(this),
                this.m_setStateOnComplete &&
                  this.m_component.setState(this.m_setStateOnComplete);
            }),
            t
          );
        })(a);
    },
    idvb: function (e, t, n) {},
    "j+5p": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return l;
      }),
        n.d(t, "c", function () {
          return p;
        }),
        n.d(t, "a", function () {
          return f;
        });
      var r = n("mrSG"),
        o = n("rHSA"),
        i = n("9cYf"),
        a = n("r64O"),
        s = n("XxJJ"),
        c = n("qiKp");
      var l,
        u,
        p,
        d,
        h = n("BaVA"),
        m = n("NxAk");
      !(function (e) {
        (e[(e.NONE = 0)] = "NONE"),
          (e[(e.COLUMN = 1)] = "COLUMN"),
          (e[(e.ROW = 2)] = "ROW"),
          (e[(e.COLUMN_REVERSE = 3)] = "COLUMN_REVERSE"),
          (e[(e.ROW_REVERSE = 4)] = "ROW_REVERSE"),
          (e[(e.GRID = 5)] = "GRID"),
          (e[(e.GEOMETRIC = 6)] = "GEOMETRIC");
      })(l || (l = {})),
        (function (e) {
          (e[(e.FIRST = 0)] = "FIRST"),
            (e[(e.MAINTAIN_X = 1)] = "MAINTAIN_X"),
            (e[(e.MAINTAIN_Y = 2)] = "MAINTAIN_Y");
        })(u || (u = {})),
        (function (e) {
          (e[(e.LAZY = 0)] = "LAZY"),
            (e[(e.START = 1)] = "START"),
            (e[(e.CENTER = 2)] = "CENTER"),
            (e[(e.END = 3)] = "END"),
            (e[(e.NEAREST = 4)] = "NEAREST");
        })(p || (p = {})),
        (function (e) {
          (e[(e.INVALID = 0)] = "INVALID"),
            (e[(e.FORWARD = 1)] = "FORWARD"),
            (e[(e.BACKWARD = 2)] = "BACKWARD");
        })(d || (d = {}));
      var f = (function () {
        function e(e, t, n) {
          (this.m_rgChildren = []),
            (this.m_iActiveChild = -1),
            (this.m_bChildrenSorted = !1),
            (this.m_bAutoFocusChild = !1),
            (this.m_bFocused = !1),
            (this.m_FocusCallbackList = new c.a()),
            (this.m_ActionDescriptionsChangedCallbackList = new c.a()),
            (this.m_rgNavigationHandlers = []),
            (this.m_rgFocusHandlers = []),
            (this.m_Tree = e),
            (this.m_Parent = t),
            (this.m_FocusRing = n);
        }
        return (
          (e.prototype.CreateHandle = function () {
            return new m.d(this);
          }),
          Object.defineProperty(e.prototype, "Tree", {
            get: function () {
              return this.m_Tree;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "NavKey", {
            get: function () {
              return this.m_Properties && this.m_Properties.navKey;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "Element", {
            get: function () {
              return this.m_element;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "Parent", {
            get: function () {
              return this.m_Parent;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.SetProperties = function (e) {
            var t,
              n,
              r,
              o =
                ((n =
                  null === (t = this.m_Properties) || void 0 === t
                    ? void 0
                    : t.actionDescriptionMap),
                (r = null == e ? void 0 : e.actionDescriptionMap),
                !(null == n || null == r
                  ? n === r
                  : "object" == typeof n &&
                    "object" == typeof r &&
                    Object.keys(n).length === Object.keys(r).length &&
                    Object.keys(n).every(function (e) {
                      return r.hasOwnProperty(e) && n[e] === r[e];
                    })));
            (this.m_Properties = e || {}),
              o && this.m_ActionDescriptionsChangedCallbackList.Dispatch(),
              this.m_element && this.RegisterDOMEvents();
          }),
          (e.prototype.BWantsAutoFocus = function () {
            return this.m_Properties.autoFocus || this.m_bAutoFocusChild;
          }),
          (e.prototype.BWantsFocusRing = function () {
            return !this.m_Properties.noFocusRing;
          }),
          (e.prototype.GetBoundingRect = function () {
            return this.m_element && this.m_element.getBoundingClientRect();
          }),
          (e.prototype.GetScrollSnapProps = function () {
            return this.m_Properties;
          }),
          (e.prototype.SetHasFocus = function (e) {
            e != this.m_bFocused &&
              ((this.m_bFocused = e),
              this.m_FocusCallbackList.Dispatch(this.m_bFocused));
          }),
          (e.prototype.BHasFocus = function () {
            return this.m_bFocused;
          }),
          Object.defineProperty(e.prototype, "FocusCallbackList", {
            get: function () {
              return this.m_FocusCallbackList;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(
            e.prototype,
            "ActionDescriptionChangedCallbackList",
            {
              get: function () {
                return this.m_ActionDescriptionsChangedCallbackList;
              },
              enumerable: !1,
              configurable: !0,
            }
          ),
          (e.prototype.GetActiveActionDescriptions = function () {
            return this.BuildConsolidatedActionDescriptionMap({});
          }),
          (e.prototype.BuildConsolidatedActionDescriptionMap = function (e) {
            var t,
              n =
                null === (t = this.m_Properties) || void 0 === t
                  ? void 0
                  : t.actionDescriptionMap;
            if (n)
              for (var r in n) {
                var o = r;
                void 0 === e[o] && (e[o] = n[o]);
              }
            return this.m_Parent
              ? this.m_Parent.BuildConsolidatedActionDescriptionMap(e)
              : e;
          }),
          (e.prototype.AddChild = function (e) {
            this.m_rgChildren.push(e),
              (this.m_bChildrenSorted = !1),
              e.BWantsAutoFocus() && (this.m_bAutoFocusChild = !0),
              this.m_element && this.RegisterDOMEvents();
          }),
          (e.prototype.OnMount = function (e) {
            if (
              ((this.m_element = e),
              this.m_Parent
                ? this.m_Parent.AddChild(this)
                : Object(a.a)(
                    this == this.m_Tree.Root,
                    "Only root should have no parent"
                  ),
              this.RegisterDOMEvents(),
              this.m_bAutoFocusChild)
            ) {
              this.EnsureChildrenSorted();
              var t = this.m_rgChildren.findIndex(function (e) {
                return e.BWantsAutoFocus();
              });
              -1 !== t &&
                ((this.m_iActiveChild = t),
                !this.m_Parent || this.m_Parent.m_element
                  ? this.BTakeFocus(h.b.APPLICATION)
                  : (this.m_Parent.m_bAutoFocusChild = !0));
            }
          }),
          (e.prototype.OnUnmount = function () {
            this.m_bFocused && this.m_Tree.TransferFocus(h.b.APPLICATION, null),
              this.UnregisterDOMEvents(),
              this.m_Parent
                ? this.m_Parent.RemoveChild(this)
                : Object(a.a)(
                    this == this.m_Tree.Root,
                    "Only root should have no parent"
                  );
          }),
          (e.prototype.RegisterDOMEvents = function () {
            var e = this;
            !this.m_rgNavigationHandlers.length &&
              (this.GetLayout() ||
                this.m_Properties.onMoveUp ||
                this.m_Properties.onMoveRight ||
                this.m_Properties.onMoveDown ||
                this.m_Properties.onMoveLeft) &&
              (this.m_rgNavigationHandlers.push(
                Object(h.h)(this.m_element, this.OnNavigationEvent)
              ),
              this.m_element.addEventListener("focusin", this.OnFocusIn),
              this.m_rgNavigationHandlers.push(function () {
                return e.m_element.removeEventListener("focusin", e.OnFocusIn);
              })),
              this.m_rgFocusHandlers.length ||
                (!this.m_Properties.focusable &&
                  0 != this.m_rgChildren.length) ||
                (this.m_element.addEventListener("focus", this.OnDOMFocus),
                this.m_element.addEventListener("blur", this.OnDOMBlur),
                this.m_rgFocusHandlers.push(function () {
                  e.m_element.removeEventListener("focus", e.OnDOMFocus),
                    e.m_element.removeEventListener("blur", e.OnDOMBlur);
                }));
          }),
          (e.prototype.RemoveChild = function (e) {
            var t = this.m_rgChildren.indexOf(e);
            Object(a.a)(-1 !== t, "Child was not found to remove"),
              -1 !== t &&
                (t <= this.m_iActiveChild && this.m_iActiveChild--,
                this.m_rgChildren.splice(t, 1));
          }),
          (e.prototype.UnregisterDOMEvents = function () {
            this.m_rgNavigationHandlers.forEach(function (e) {
              return e();
            }),
              (this.m_rgNavigationHandlers = []),
              this.m_rgFocusHandlers.forEach(function (e) {
                return e();
              }),
              (this.m_rgFocusHandlers = []);
          }),
          (e.prototype.GetActiveChild = function () {
            return (
              this.EnsureChildrenSorted(),
              this.m_iActiveChild >= 0 &&
              this.m_iActiveChild < this.m_rgChildren.length
                ? this.m_rgChildren[this.m_iActiveChild]
                : null
            );
          }),
          (e.prototype.EnsureChildrenSorted = function (e) {
            if ((void 0 === e && (e = !1), !this.m_bChildrenSorted || e)) {
              var t = void 0;
              -1 != this.m_iActiveChild &&
                (t = this.m_rgChildren[this.m_iActiveChild]),
                this.m_rgChildren.sort(function (e, t) {
                  var n = e.m_element,
                    r = t.m_element;
                  if (!n) return r ? 1 : 0;
                  if (!r) return -1;
                  var o = n.compareDocumentPosition(r);
                  return o & Node.DOCUMENT_POSITION_PRECEDING
                    ? 1
                    : o & Node.DOCUMENT_POSITION_FOLLOWING
                    ? -1
                    : 0;
                }),
                t && (this.m_iActiveChild = this.m_rgChildren.indexOf(t)),
                (this.m_bChildrenSorted = !0);
            }
          }),
          (e.prototype.GetLastFocusElement = function () {
            var e = this.GetActiveChild();
            return e ? e.GetLastFocusElement() : this.m_element;
          }),
          (e.prototype.OnFocusIn = function (e) {
            if (this.m_rgChildren.length) {
              this.EnsureChildrenSorted();
              for (
                var t = this.m_rgChildren.map(function (e) {
                    return e.m_element;
                  }),
                  n = e.target;
                n;

              ) {
                var r = t.indexOf(n);
                if (-1 !== r) {
                  (this.m_iActiveChild = r),
                    this.m_Tree.OnChildActivated(h.b.BROWSER);
                  break;
                }
                if (n == this.m_element) {
                  (this.m_iActiveChild = -1),
                    this.m_Tree.OnChildActivated(h.b.BROWSER);
                  break;
                }
                n = n.parentElement;
              }
            }
          }),
          (e.prototype.OnDOMFocus = function (e) {
            this.m_bFocused || this.m_Tree.TransferFocus(h.b.BROWSER, this);
          }),
          (e.prototype.OnDOMBlur = function (e) {
            this.m_bFocused && this.m_Tree.TransferFocus(h.b.BROWSER, null);
          }),
          (e.prototype.RequestFocus = function () {
            this.m_Parent &&
              (this.m_Parent.SetActiveChild(this),
              this.m_Parent.RequestFocus());
          }),
          (e.prototype.BTakeFocus = function (e, t) {
            var n = Object(m.a)(t),
              r = this.m_Properties,
              o = r.focusable,
              a = r.fnCanTakeFocus;
            if (a && !a(this)) return !1;
            if (o) return this.m_Tree.TransferFocus(e, this, n), !0;
            if (this.m_rgChildren.length) {
              this.EnsureChildrenSorted();
              var s = this.m_iActiveChild;
              if (s < 0 || s >= this.m_rgChildren.length) {
                s = 0;
                var c = this.GetLayout();
                (c != l.ROW_REVERSE && c != l.COLUMN_REVERSE) ||
                  (s = this.m_rgChildren.length - 1);
              }
              var p = this.m_Properties.navEntryPreferPosition;
              if (
                (p == u.MAINTAIN_X && "y" == n) ||
                (p == u.MAINTAIN_Y && "x" == n)
              ) {
                var h = i.b[n],
                  f = this.m_Tree.GetLastFocusedMovementNode(h),
                  g = this.ComputeRelativeDirection(t, l.GRID);
                if (f) {
                  var b = Object(m.f)(f.GetBoundingRect()),
                    v = g == d.BACKWARD ? this.m_rgChildren.length - 1 : 0;
                  if (
                    this.BFocusClosestChildInNextAxiallyAlignedSet(
                      h,
                      g,
                      t,
                      b,
                      v,
                      this.m_rgChildren[v].GetBoundingRect()
                    )
                  )
                    return !0;
                }
              }
              return (
                !!this.BFocusNextChildInDirection(e, s - 1, d.FORWARD, t) ||
                !!this.BFocusNextChildInDirection(e, s, d.BACKWARD, t)
              );
            }
            return !1;
          }),
          (e.prototype.GetLayout = function () {
            return this.m_Properties.layout
              ? this.m_Properties.layout
              : this.m_rgChildren.length < 2
              ? l.NONE
              : Object(m.e)(this.m_element);
          }),
          (e.prototype.OnNavigationEvent = function (e) {
            var t = e.detail.button;
            if (this.BTryInternalNavigation(t)) return !0;
            var n = this.m_Properties,
              r = n.onMoveUp,
              i = n.onMoveRight,
              a = n.onMoveDown,
              s = n.onMoveLeft,
              c = !1;
            switch (t) {
              case o.a.DIR_UP:
                r && (c = r(e.detail));
                break;
              case o.a.DIR_RIGHT:
                i && (c = i(e.detail));
                break;
              case o.a.DIR_DOWN:
                a && (c = a(e.detail));
                break;
              case o.a.DIR_LEFT:
                s && (c = s(e.detail));
            }
            return c;
          }),
          (e.prototype.BTryInternalNavigation = function (e) {
            var t = this.GetLayout(),
              n = this.ComputeRelativeDirection(e, t);
            if (n == d.INVALID) return !1;
            if ((this.EnsureChildrenSorted(!0), t == l.GRID))
              return this.BPerformGridNavigation(this.m_iActiveChild, n, e);
            var r = this.m_iActiveChild;
            return (
              -1 == r && (r = n == d.FORWARD ? -1 : this.m_rgChildren.length),
              this.BFocusNextChildInDirection(h.b.GAMEPAD, r, n, e)
            );
          }),
          (e.prototype.ComputeRelativeDirection = function (e, t) {
            var n = t == l.ROW_REVERSE || t == l.COLUMN_REVERSE;
            switch (t) {
              case l.ROW:
              case l.ROW_REVERSE:
                switch (e) {
                  case o.a.DIR_LEFT:
                    return n ? d.FORWARD : d.BACKWARD;
                  case o.a.DIR_RIGHT:
                    return n ? d.BACKWARD : d.FORWARD;
                  default:
                    return d.INVALID;
                }
              case l.COLUMN:
              case l.COLUMN_REVERSE:
                switch (e) {
                  case o.a.DIR_UP:
                    return n ? d.FORWARD : d.BACKWARD;
                  case o.a.DIR_DOWN:
                    return n ? d.BACKWARD : d.FORWARD;
                  default:
                    return d.INVALID;
                }
              case l.GRID:
                switch (e) {
                  case o.a.DIR_LEFT:
                  case o.a.DIR_UP:
                    return n ? d.FORWARD : d.BACKWARD;
                  case o.a.DIR_RIGHT:
                  case o.a.DIR_DOWN:
                    return n ? d.BACKWARD : d.FORWARD;
                  default:
                    return d.INVALID;
                }
              default:
                return d.INVALID;
            }
          }),
          (e.prototype.AdvanceIndex = function (e, t) {
            return e + (t == d.FORWARD ? 1 : -1);
          }),
          (e.prototype.BFocusNextChildInDirection = function (e, t, n, r) {
            for (
              var o = n == d.FORWARD ? 1 : -1, i = t + o;
              i >= 0 && i < this.m_rgChildren.length;
              i += o
            ) {
              if (this.m_rgChildren[i].BTakeFocus(e, r))
                return (this.m_iActiveChild = i), !0;
            }
            return !1;
          }),
          (e.prototype.ScanChildren = function (e, t, n) {
            for (
              var r = t == d.FORWARD ? 1 : -1, o = e;
              o >= 0 && o < this.m_rgChildren.length;
              o += r
            )
              if (n(this.m_rgChildren[o], o)) return o;
            return -1;
          }),
          (e.prototype.BPerformGridNavigation = function (e, t, n) {
            var r = n == o.a.DIR_UP || n == o.a.DIR_DOWN,
              i = this.GetLastFocusElement();
            if (!i || i == this.m_element)
              return (
                !!this.BFocusNextChildInDirection(
                  h.b.GAMEPAD,
                  this.m_iActiveChild,
                  t,
                  n
                ) ||
                this.BFocusNextChildInDirection(
                  h.b.GAMEPAD,
                  this.m_iActiveChild,
                  t == d.FORWARD ? d.BACKWARD : d.FORWARD,
                  n
                )
              );
            var a = (this.GetActiveChild() || this).GetBoundingRect();
            if (n == o.a.DIR_UP || n == o.a.DIR_DOWN) {
              var s = this.m_Tree.GetLastFocusedMovementNode("x");
              if (s) {
                var c = s.GetBoundingRect();
                (a.x = c.x), (a.width = c.width);
              }
            }
            if (!r) {
              var l = !1;
              return (
                -1 !=
                  this.ScanChildren(this.AdvanceIndex(e, t), t, function (e) {
                    return Object(m.b)("y", a, e.GetBoundingRect())
                      ? e.BTakeFocus(h.b.GAMEPAD, n)
                      : ((l = !0), !0);
                  }) && !l
              );
            }
            var u = this.ScanChildren(this.AdvanceIndex(e, t), t, function (e) {
              return !Object(m.b)("y", a, e.GetBoundingRect());
            });
            if (-1 == u) return !1;
            var p = this.m_rgChildren[u].GetBoundingRect(),
              f = Object(m.f)(a);
            return !!this.BFocusClosestChildInNextAxiallyAlignedSet(
              "x",
              t,
              n,
              f,
              u,
              p
            );
          }),
          (e.prototype.BFocusClosestChildInNextAxiallyAlignedSet = function (
            e,
            t,
            n,
            r,
            o,
            a
          ) {
            (!o || o < 0) && (o = 0);
            var s = [];
            this.ScanChildren(o, t, function (t) {
              return (
                !(!a || Object(m.b)(i.b[e], a, t.GetBoundingRect())) ||
                (s.push({
                  child: t,
                  dist: Object(m.c)(e, r, t.GetBoundingRect()),
                }),
                !1)
              );
            }),
              t == d.BACKWARD && s.reverse(),
              s.sort(function (e, t) {
                return e.dist - t.dist;
              });
            for (var c = 0, l = s; c < l.length; c++) {
              if (l[c].child.BTakeFocus(h.b.GAMEPAD, n)) return !0;
            }
            return !1;
          }),
          (e.prototype.GetChildren = function () {
            return (
              this.EnsureChildrenSorted(),
              [this.m_rgChildren, this.m_iActiveChild]
            );
          }),
          (e.prototype.SetActiveChild = function (t) {
            var n;
            t instanceof e
              ? (this.EnsureChildrenSorted(),
                (n = this.m_rgChildren.indexOf(t)))
              : (n = t),
              (this.m_iActiveChild = n);
          }),
          Object(r.c)([s.a], e.prototype, "OnFocusIn", null),
          Object(r.c)([s.a], e.prototype, "OnDOMFocus", null),
          Object(r.c)([s.a], e.prototype, "OnDOMBlur", null),
          Object(r.c)([s.a], e.prototype, "OnNavigationEvent", null),
          e
        );
      })();
    },
    kLLr: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var r = n("2lpH"),
        o = n.n(r),
        i = n("mgoM"),
        a = n("lkRc"),
        s = (function () {
          function e(t, n, r, i) {
            void 0 === t && (t = 0),
              t instanceof e
                ? (this.m_ulSteamID = t.m_ulSteamID)
                : "string" == typeof t
                ? (this.m_ulSteamID = o.a.fromString(t, !0))
                : n && r && void 0 !== i
                ? this.SetFromComponents(t, i, r, n)
                : (this.m_ulSteamID = t ? o.a.fromNumber(t, !0) : o.a.UZERO);
          }
          return (
            (e.InitFromAccountID = function (t) {
              return new e(Number(t), a.c.EUNIVERSE, 1, i.f);
            }),
            (e.InitFromClanID = function (t) {
              return new e(Number(t), a.c.EUNIVERSE, 7, 0);
            }),
            (e.prototype.GetAccountID = function () {
              return this.m_ulSteamID.getLowBitsUnsigned();
            }),
            (e.prototype.GetInstance = function () {
              return 1048575 & this.m_ulSteamID.getHighBitsUnsigned();
            }),
            (e.prototype.GetAccountType = function () {
              return (this.m_ulSteamID.getHighBitsUnsigned() >> 20) & 15;
            }),
            (e.prototype.GetUniverse = function () {
              return (this.m_ulSteamID.getHighBitsUnsigned() >> 24) & 255;
            }),
            (e.prototype.ConvertTo64BitString = function () {
              return this.m_ulSteamID.toString();
            }),
            (e.prototype.Render = function () {
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
            (e.prototype.BIsValid = function () {
              var e = this.GetAccountType();
              if (e <= 0 || e >= 11) return !1;
              var t = this.GetUniverse();
              if (t <= 0 || t >= 5) return !1;
              if (1 == e) {
                if (0 == this.GetAccountID() || this.GetInstance() > i.g)
                  return !1;
              } else if (7 == e) {
                if (0 == this.GetAccountID() || 0 != this.GetInstance())
                  return !1;
              } else if (3 == e && 0 == this.GetAccountID()) return !1;
              return !0;
            }),
            (e.prototype.BIsIndividualAccount = function () {
              return 1 == this.GetAccountType();
            }),
            (e.prototype.BIsClanAccount = function () {
              return 7 == this.GetAccountType();
            }),
            (e.prototype.SetAccountID = function (e) {
              this.m_ulSteamID = new o.a(
                e,
                this.m_ulSteamID.getHighBitsUnsigned(),
                !0
              );
            }),
            (e.prototype.SetInstance = function (e) {
              this.SetFromComponents(
                this.GetAccountID(),
                e,
                this.GetAccountType(),
                this.GetUniverse()
              );
            }),
            (e.prototype.SetAccountType = function (e) {
              this.SetFromComponents(
                this.GetAccountID(),
                this.GetInstance(),
                e,
                this.GetUniverse()
              );
            }),
            (e.prototype.SetUniverse = function (e) {
              this.SetFromComponents(
                this.GetAccountID(),
                this.GetInstance(),
                this.GetAccountType(),
                e
              );
            }),
            (e.prototype.SetFromComponents = function (e, t, n, r) {
              var i = ((255 & r) << 24) + ((15 & n) << 20) + (1048575 & t),
                a = 4294967295 & e;
              this.m_ulSteamID = new o.a(a, i, !0);
            }),
            e
          );
        })();
    },
    kyHq: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return a;
      }),
        n.d(t, "g", function () {
          return u;
        }),
        n.d(t, "b", function () {
          return p;
        }),
        n.d(t, "e", function () {
          return m;
        }),
        n.d(t, "a", function () {
          return f;
        });
      n("mrSG");
      var r = n("mgoM");
      n.d(t, "d", function () {
        return r.b;
      }),
        n.d(t, "f", function () {
          return r.d;
        });
      n("2vnA");
      var o;
      !(function (e) {
        (e[(e.Input = 0)] = "Input"),
          (e[(e.AllOutput = 1)] = "AllOutput"),
          (e[(e.Left = 2)] = "Left"),
          (e[(e.Right = 3)] = "Right"),
          (e[(e.Sub = 4)] = "Sub"),
          (e[(e.BackLeft = 5)] = "BackLeft"),
          (e[(e.BackRight = 6)] = "BackRight");
      })(o || (o = {}));
      var i;
      !(function (e) {
        (e[(e.Error = -2)] = "Error"),
          (e[(e.Invalid = -1)] = "Invalid"),
          (e[(e.UpToDate = 0)] = "UpToDate"),
          (e[(e.Checking = 1)] = "Checking"),
          (e[(e.Available = 2)] = "Available"),
          (e[(e.Downloading = 3)] = "Downloading"),
          (e[(e.Downloaded = 4)] = "Downloaded"),
          (e[(e.Applying = 5)] = "Applying"),
          (e[(e.Applied = 6)] = "Applied"),
          (e[(e.ClientRestartPending = 7)] = "ClientRestartPending"),
          (e[(e.SystemRestartPending = 8)] = "SystemRestartPending");
      })(i || (i = {}));
      var a;
      !(function (e) {
        (e[(e.EBrowserType_OffScreen = 0)] = "EBrowserType_OffScreen"),
          (e[(e.EBrowserType_OpenVROverlay = 1)] =
            "EBrowserType_OpenVROverlay"),
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
      })(a || (a = {}));
      var s, c;
      !(function (e) {
        (e[(e.k_EClientUINotificationGroupChatMessage = 1)] =
          "k_EClientUINotificationGroupChatMessage"),
          (e[(e.k_EClientUINotificationFriendChatMessage = 2)] =
            "k_EClientUINotificationFriendChatMessage"),
          (e[(e.k_EClientUINotificationFriendPersonaState = 3)] =
            "k_EClientUINotificationFriendPersonaState");
      })(s || (s = {})),
        (function (e) {
          (e[(e.k_EComputerActiveStateInvalid = 0)] =
            "k_EComputerActiveStateInvalid"),
            (e[(e.k_EComputerActiveStateActive = 1)] =
              "k_EComputerActiveStateActive"),
            (e[(e.k_EComputerActiveStateIdle = 2)] =
              "k_EComputerActiveStateIdle");
        })(c || (c = {}));
      var l,
        u = (function () {
          return function () {};
        })();
      !(function (e) {
        (e[(e.k_EPending = 0)] = "k_EPending"),
          (e[(e.k_EAccepted = 1)] = "k_EAccepted"),
          (e[(e.k_ERejected = 2)] = "k_ERejected");
      })(l || (l = {}));
      function p(e) {
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
      var d, h;
      !(function (e) {
        (e[(e.k_EClientUsedInputTypeKeyboard = 0)] =
          "k_EClientUsedInputTypeKeyboard"),
          (e[(e.k_EClientUsedInputTypeMouse = 1)] =
            "k_EClientUsedInputTypeMouse"),
          (e[(e.k_EClientUsedInputTypeController = 2)] =
            "k_EClientUsedInputTypeController"),
          (e[(e.k_EClientUsedInputTypeMax = 3)] = "k_EClientUsedInputTypeMax");
      })(d || (d = {})),
        (function (e) {
          (e[(e.k_ERemoteClientLaunchOK = 1)] = "k_ERemoteClientLaunchOK"),
            (e[(e.k_ERemoteClientLaunchFail = 2)] =
              "k_ERemoteClientLaunchFail"),
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
            (e[(e.k_ERemoteClientLaunchBusy = 23)] =
              "k_ERemoteClientLaunchBusy"),
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
        })(h || (h = {}));
      var m;
      function f(e) {
        return e === m.k_ESteamRealmChina;
      }
      !(function (e) {
        (e[(e.k_ESteamRealmUnknown = 0)] = "k_ESteamRealmUnknown"),
          (e[(e.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
          (e[(e.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina");
      })(m || (m = {}));
      var g, b, v, _, y, O;
      !(function (e) {
        (e[(e.Unknown = 0)] = "Unknown"),
          (e[(e.Wired = 1)] = "Wired"),
          (e[(e.Wireless = 2)] = "Wireless"),
          (e[(e.Virtual = 3)] = "Virtual");
      })(g || (g = {})),
        (function (e) {
          (e[(e.NotPresent = 0)] = "NotPresent"),
            (e[(e.Failed = 1)] = "Failed"),
            (e[(e.Disconnected = 2)] = "Disconnected"),
            (e[(e.Disconnecting = 3)] = "Disconnecting"),
            (e[(e.Connecting = 4)] = "Connecting"),
            (e[(e.Connected = 5)] = "Connected"),
            (e[(e.Retrying = 6)] = "Retrying");
        })(b || (b = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Weak = 1)] = "Weak"),
            (e[(e.Ok = 2)] = "Ok"),
            (e[(e.Good = 3)] = "Good"),
            (e[(e.Excellent = 4)] = "Excellent");
        })(v || (v = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.StaticWep = 1)] = "StaticWep"),
            (e[(e.DynamicWep = 2)] = "DynamicWep"),
            (e[(e.Wpa = 4)] = "Wpa"),
            (e[(e.WpaEnterprise = 8)] = "WpaEnterprise"),
            (e[(e.Wpa2 = 16)] = "Wpa2"),
            (e[(e.Wpa2Enterprise = 32)] = "Wpa2Enterprise"),
            (e[(e.Unsupported = 32768)] = "Unsupported");
        })(_ || (_ = {})),
        (function (e) {
          (e[(e.SystemKey0 = 0)] = "SystemKey0"),
            (e[(e.SystemKey1 = 1)] = "SystemKey1");
        })(y || (y = {})),
        (function (e) {
          (e[(e.Hidden = 0)] = "Hidden"),
            (e[(e.Notification = 1)] = "Notification"),
            (e[(e.Overlay = 2)] = "Overlay"),
            (e[(e.Opaque = 3)] = "Opaque"),
            (e[(e.OverlayKeyboard = 4)] = "OverlayKeyboard");
        })(O || (O = {}));
    },
    lkRc: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return a;
      }),
        n.d(t, "i", function () {
          return s;
        }),
        n.d(t, "b", function () {
          return l;
        }),
        n.d(t, "d", function () {
          return u;
        }),
        n.d(t, "a", function () {
          return h;
        }),
        n.d(t, "h", function () {
          return m;
        }),
        n.d(t, "g", function () {
          return f;
        }),
        n.d(t, "e", function () {
          return g;
        }),
        n.d(t, "f", function () {
          return b;
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
            return (function () {
              if (!Object(i.a)()) return r || (r = d()), r;
              var e = Object(i.b)("sessionid");
              e || (e = d());
              return e;
            })();
          },
          FRIENDSUI_BETA: !1,
          STEAM_TV: !1,
          DEV_MODE: !1,
          IN_LIBRARY: !1,
          IN_SP: !1,
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
          country_code: "",
        },
        c = { steamid: "", clanid: 0, listid: 0 },
        l = {
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
        u = { ANNOUNCEMENT_GID: "" },
        p = "webui_config";
      function d() {
        var e = (function () {
          for (var e = "", t = 0; t < 24; t++)
            e += Object(o.b)(0, 35).toString(36);
          return e;
        })();
        return Object(i.c)("sessionid", e, 0), e;
      }
      function h() {
        var e = null;
        return (
          Object(i.a)() && (e = Object(i.b)("presentation_mode")),
          Boolean(e && 1 === Number.parseInt(e))
        );
      }
      function m(e) {
        void 0 === e && (e = p);
        var t = {},
          n = f("config", e);
        n && (delete n.SESSIONID, Object.assign(a, n), (t.config = !0));
        var r = f("userinfo", e);
        r &&
          (Object.assign(s, r),
          (t.userConfig = !0),
          s.is_support && h() && (s.is_support = !1));
        var o = f("broadcast", e);
        o && (Object.assign(c, o), (t.broadcastConfig = !0));
        var i = f("community", e);
        i && (Object.assign(l, i), (t.communityConfig = !0));
        var d = f("event", e);
        return d && (Object.assign(u, d), (t.eventConfig = !0)), t;
      }
      function f(e, t) {
        var n;
        if (
          (void 0 === t && (t = p),
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
      function g() {
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
      function b() {
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
    mC9v: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var r = (function () {
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
          (e.prototype.TellGet = function () {
            return this.m_iGet + this.m_viewPacket.byteOffset;
          }),
          (e.prototype.GetPacket = function () {
            return this.m_viewPacket.buffer;
          }),
          (e.prototype.GetUint8 = function () {
            return this.m_viewPacket.getUint8(this.m_iGet++);
          }),
          (e.prototype.GetUint32 = function (e) {
            void 0 === e && (e = !0);
            var t = this.m_viewPacket.getUint32(this.m_iGet, e);
            return (this.m_iGet += 4), t;
          }),
          (e.prototype.SeekGetHead = function (e) {
            void 0 === e && (e = 0), (this.m_iGet = e || 0);
          }),
          (e.prototype.SeekGetCurrent = function (e) {
            this.m_iGet += e;
          }),
          (e.prototype.TellPut = function () {
            return this.m_iPut + this.m_viewPacket.byteOffset;
          }),
          (e.prototype.TellMaxPut = function () {
            return this.m_viewPacket.byteLength;
          }),
          (e.prototype.PutUint8 = function (e) {
            this.m_viewPacket.setUint8(this.m_iPut++, e);
          }),
          (e.prototype.PutUint32 = function (e, t) {
            void 0 === t && (t = !0),
              this.m_viewPacket.setUint32(this.m_iPut, e, t),
              (this.m_iPut += 4);
          }),
          (e.prototype.PutBytes = function (e) {
            this.m_rgubPacket.set(e, this.m_iPut), (this.m_iPut += e.length);
          }),
          (e.prototype.SeekPut = function (e) {
            this.m_iPut += e;
          }),
          (e.prototype.GetCountBytesRemaining = function () {
            return this.m_viewPacket.byteLength - this.m_iGet;
          }),
          e
        );
      })();
    },
    "mRR+": function (e, t, n) {
      "use strict";
      n("vDqi");
    },
    mgoM: function (e, t, n) {
      "use strict";
      n.d(t, "f", function () {
        return r;
      }),
        n.d(t, "g", function () {
          return o;
        }),
        n.d(t, "e", function () {
          return i;
        }),
        n.d(t, "b", function () {
          return a;
        }),
        n.d(t, "c", function () {
          return s;
        }),
        n.d(t, "a", function () {
          return c;
        }),
        n.d(t, "d", function () {
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
      var s = function (e) {
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
    nmPn: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return W;
      }),
        n.d(t, "b", function () {
          return z;
        });
      var r = n("mrSG"),
        o = n("q1tI"),
        i = n.n(o),
        a = n("i8i4"),
        s = n.n(a),
        c = n("55Ip"),
        l = n("Ty5D"),
        u = n("eDP5"),
        p = n("Jqb/"),
        d = n("WplJ"),
        h = n("lkRc"),
        m = n("6TF7"),
        f = n.n(m),
        g = i.a.lazy(function () {
          return Promise.all([n.e(0), n.e(2), n.e(1), n.e(4), n.e(103)]).then(
            n.bind(null, "GEPe")
          );
        }),
        b = i.a.lazy(function () {
          return Promise.all([n.e(0), n.e(2), n.e(1), n.e(5), n.e(11)]).then(
            n.bind(null, "IY+y")
          );
        }),
        v = i.a.lazy(function () {
          return Promise.all([n.e(0), n.e(4), n.e(9)]).then(
            n.bind(null, "/u7D")
          );
        }),
        _ = i.a.lazy(function () {
          return Promise.all([n.e(0), n.e(2), n.e(1), n.e(3), n.e(8)]).then(
            n.bind(null, "8zUZ")
          );
        }),
        y = i.a.lazy(function () {
          return n.e(72).then(n.bind(null, "rt5e"));
        }),
        O = i.a.lazy(function () {
          return Promise.all([n.e(0), n.e(2), n.e(1), n.e(5), n.e(10)]).then(
            n.bind(null, "JZ7q")
          );
        }),
        w = function () {
          return h.b.IS_CREATOR_HOME || h.b.IS_CURATOR ? "groups" : "games";
        },
        E = function () {
          return "/" + w() + "/:anything*/diagdata";
        },
        C = function () {
          return "/(migrateevents|migrate)";
        },
        S = function (e) {
          return "/" + w() + "/" + e + "/(partnerevents|events|announcements)";
        },
        D = function (e) {
          return "/app/" + e + "(/workshop/)?";
        },
        M = function (e) {
          return "/groups/" + e + "/";
        },
        x = function (e) {
          return "/id/" + e;
        },
        R = function (e) {
          return "/profiles/" + e;
        },
        I = function () {
          return "/:anything/filedetails";
        },
        j = function () {
          return "/id/:vanity_url/recommended/:appid/";
        },
        T = function () {
          return "/profiles/:steamid/recommended/:appid/";
        },
        k = function () {
          return "/profiles/:steamid/recommended";
        },
        B = function () {
          return "/id/:vanity_url/recommended";
        },
        L = function () {
          return "/id/:vanity_url/friends/add";
        },
        A = function () {
          return "/profiles/:id/friends/add";
        },
        N = function () {
          return "/broadcast";
        },
        P = function () {
          return "/workshop/discussions";
        },
        F = function () {
          return "/sharedfiles/filedetails/discussions";
        },
        G = function () {
          return "/discussions/forum";
        },
        U = function () {
          return "/faqs/";
        },
        H = function () {
          return "/";
        },
        W = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.render = function () {
              return i.a.createElement(
                c.a,
                { basename: K() },
                i.a.createElement(
                  i.a.Suspense,
                  { fallback: i.a.createElement("div", null) },
                  i.a.createElement(
                    l.e,
                    null,
                    i.a.createElement(l.c, {
                      exact: !0,
                      path: E(),
                      render: function (e) {
                        return i.a.createElement(
                          u.a,
                          Object(r.a)({}, e, {
                            key: e.match.params.gid,
                            strConfigID: "application_config",
                          })
                        );
                      },
                    }),
                    i.a.createElement(l.c, {
                      path: S(":appid_or_vanity_str"),
                      component: b,
                    }),
                    i.a.createElement(l.c, { path: C(), component: b }),
                    i.a.createElement(l.c, { path: N(), component: _ }),
                    i.a.createElement(l.c, {
                      path: D(":appid"),
                      render: function (e) {
                        return i.a.createElement(d.a, {
                          config: {
                            "apphub-events": function () {
                              return i.a.createElement(b, null);
                            },
                            "apphub-ugcrewards": function () {
                              return i.a.createElement(v, Object(r.a)({}, e));
                            },
                            "community-awards": function () {
                              return i.a.createElement(v, Object(r.a)({}, e));
                            },
                          },
                        });
                      },
                    }),
                    i.a.createElement(l.c, {
                      path: M(":groupid_or_vanity_str"),
                      render: function (e) {
                        return i.a.createElement(d.a, {
                          config: {
                            "apphub-events": function () {
                              return i.a.createElement(b, null);
                            },
                            "community-awards": function () {
                              return i.a.createElement(v, Object(r.a)({}, e));
                            },
                          },
                        });
                      },
                    }),
                    i.a.createElement(l.c, {
                      path: j(),
                      render: function (e) {
                        return i.a.createElement(v, Object(r.a)({}, e));
                      },
                    }),
                    i.a.createElement(l.c, {
                      path: T(),
                      render: function (e) {
                        return i.a.createElement(v, Object(r.a)({}, e));
                      },
                    }),
                    i.a.createElement(l.c, {
                      path: B(),
                      render: function (e) {
                        return i.a.createElement(v, Object(r.a)({}, e));
                      },
                    }),
                    i.a.createElement(l.c, {
                      path: k(),
                      render: function (e) {
                        return i.a.createElement(v, Object(r.a)({}, e));
                      },
                    }),
                    i.a.createElement(l.c, {
                      path: [G(), P(), F()],
                      render: function (e) {
                        return i.a.createElement(d.a, {
                          config: {
                            "community-awards": function () {
                              return i.a.createElement(v, Object(r.a)({}, e));
                            },
                          },
                        });
                      },
                    }),
                    i.a.createElement(
                      l.c,
                      { path: [L(), A()] },
                      i.a.createElement(y, null)
                    ),
                    i.a.createElement(l.c, {
                      path: x(":vanity_url"),
                      render: function (e) {
                        return i.a.createElement(g, Object(r.a)({}, e));
                      },
                    }),
                    i.a.createElement(l.c, {
                      path: R(":steamid"),
                      render: function (e) {
                        return i.a.createElement(g, Object(r.a)({}, e));
                      },
                    }),
                    i.a.createElement(l.c, {
                      path: I(),
                      render: function (e) {
                        return i.a.createElement(v, Object(r.a)({}, e));
                      },
                    }),
                    i.a.createElement(l.c, { path: U(), component: O }),
                    i.a.createElement(l.c, {
                      path: H(),
                      render: function (e) {
                        return i.a.createElement(d.a, {
                          config: {
                            "apphub-events": function () {
                              return i.a.createElement(b, null);
                            },
                            "apphub-ugcrewards": function () {
                              return i.a.createElement(v, Object(r.a)({}, e));
                            },
                          },
                        });
                      },
                    }),
                    i.a.createElement(l.c, { component: z })
                  )
                ),
                i.a.createElement(V, null)
              );
            }),
            t
          );
        })(i.a.Component),
        V = function (e) {
          var t = i.a.createElement(p.c, { ModalManager: Object(p.g)(window) });
          return s.a.createPortal(t, document.body);
        };
      function z(e) {
        return "dev" == h.c.WEB_UNIVERSE
          ? i.a.createElement(
              "div",
              { className: f.a.Error },
              "Dev Universe: Unknown Path"
            )
          : i.a.createElement(l.b, { push: !0, to: "/" });
      }
      function K() {
        var e = document.createElement("a");
        e.href = h.c.COMMUNITY_BASE_URL;
        var t = e.pathname;
        return t.endsWith("/") || (t += "/"), t;
      }
    },
    qDk6: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var r = n("mrSG"),
        o = n("q1tI"),
        i = n.n(o),
        a = n("BC0X"),
        s = n("exH9"),
        c = n("bxiW"),
        l = n("j+5p"),
        u = n("8sdS"),
        p = n("7Whv"),
        d = i.a.forwardRef(function (e, t) {
          var n = e["flow-children"],
            o = e.onActivate,
            d = e.onCancel,
            h = e.focusClassName,
            m = Object(r.f)(e, [
              "flow-children",
              "onActivate",
              "onCancel",
              "focusClassName",
            ]),
            f = Object(a.b)(m),
            g = f.elemProps,
            b = f.navOptions,
            v = f.gamepadEvents,
            _ = {},
            y = Object(p.a)(n);
          y != l.b.NONE && (_.layout = y),
            o &&
              ((g.onClick = g.onClick || o),
              (v.onOKButton = v.onOKButton || o)),
            v.onOKButton && void 0 === b.focusable && (b.focusable = !0),
            b.focusable && (g.tabIndex = g.tabIndex || 0),
            d && (v.onCancelButton = v.onCancelButton || d),
            (g.className = Object(s.a)(g.className, "Panel", "Focusable"));
          var O = Object(a.g)(Object(r.a)(Object(r.a)({}, _), b)),
            w = O.ref,
            E = O.node;
          Object(u.a)(v, w);
          var C = Object(c.f)(w, t);
          return i.a.createElement(
            a.f.Provider,
            { value: E },
            E
              ? i.a.createElement(
                  a.c,
                  Object(r.a)({}, g, {
                    divRef: C,
                    node: E,
                    focusClassName: Object(s.a)(h, "gpfocus"),
                  })
                )
              : i.a.createElement("div", Object(r.a)({}, g, { ref: C }))
          );
        });
    },
    qiKp: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return s;
        }),
        n.d(t, "c", function () {
          return c;
        }),
        n.d(t, "d", function () {
          return l;
        });
      var r = n("mrSG"),
        o = n("Kw0F"),
        i = n("XxJJ"),
        a = (function () {
          function e() {
            this.m_vecCallbacks = [];
          }
          return (
            (e.prototype.Register = function (e) {
              var t = this;
              this.m_vecCallbacks.push(e);
              return {
                Unregister: function () {
                  o.b(t.m_vecCallbacks, e);
                },
              };
            }),
            (e.prototype.Dispatch = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              for (var n = 0, r = this.m_vecCallbacks; n < r.length; n++) {
                var o = r[n];
                o.apply(void 0, e);
              }
            }),
            (e.prototype.ClearAllCallbacks = function () {
              this.m_vecCallbacks = [];
            }),
            (e.prototype.CountRegistered = function () {
              return this.m_vecCallbacks.length;
            }),
            e
          );
        })();
      var s = (function () {
          function e() {}
          return (
            (e.prototype.Schedule = function (e, t) {
              this.IsScheduled() && this.Cancel(),
                (this.m_fnCallback = t),
                (this.m_schTimer = window.setTimeout(
                  this.ScheduledInternal,
                  e
                ));
            }),
            (e.prototype.IsScheduled = function () {
              return void 0 !== this.m_schTimer;
            }),
            (e.prototype.Cancel = function () {
              this.m_schTimer &&
                (clearTimeout(this.m_schTimer), (this.m_schTimer = void 0));
            }),
            (e.prototype.ScheduledInternal = function () {
              this.m_schTimer = void 0;
              var e = this.m_fnCallback;
              (this.m_fnCallback = void 0), e();
            }),
            Object(r.c)([i.a], e.prototype, "ScheduledInternal", null),
            e
          );
        })(),
        c = (function () {
          function e() {
            this.m_rgListeners = [];
          }
          return (
            (e.prototype.AddEventListener = function (e, t, n) {
              e.addEventListener(t, n),
                this.m_rgListeners.push({ element: e, type: t, listener: n });
            }),
            (e.prototype.Unregister = function () {
              for (var e = 0, t = this.m_rgListeners; e < t.length; e++) {
                var n = t[e];
                n.element.removeEventListener(n.type, n.listener);
              }
              this.m_rgListeners = [];
            }),
            e
          );
        })();
      function l(e) {
        return Object(r.b)(this, void 0, void 0, function () {
          var t, n, o, i;
          return Object(r.e)(this, function (r) {
            switch (r.label) {
              case 0:
                return (
                  (t = []),
                  (n = Object.keys(e)).forEach(function (n) {
                    return t.push(e[n]);
                  }),
                  [4, Promise.all(t)]
                );
              case 1:
                return (
                  (o = r.sent()),
                  (i = {}),
                  [
                    2,
                    o.reduce(function (e, t, r) {
                      return (e[n[r]] = t), e;
                    }, i),
                  ]
                );
            }
          });
        });
      }
    },
    r64O: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var r = n("mrSG");
      function o(e, t) {
        for (var n = [], o = 2; o < arguments.length; o++)
          n[o - 2] = arguments[o];
        console.assert
          ? 0 == n.length
            ? console.assert(!!e, t)
            : console.assert.apply(console, Object(r.g)([!!e, t], n))
          : e || console.warn.apply(console, Object(r.g)([t], n));
      }
    },
    rCDf: function (e, t, n) {
      var r = {
        "./shared_arabic.json": ["d1TB", 41],
        "./shared_brazilian.json": ["Pg9r", 42],
        "./shared_bulgarian.json": ["ENge", 43],
        "./shared_czech.json": ["Ts6V", 44],
        "./shared_danish.json": ["9oiU", 45],
        "./shared_dutch.json": ["nxN4", 46],
        "./shared_english.json": ["TYjx", 47],
        "./shared_finnish.json": ["NuB8", 48],
        "./shared_french.json": ["bOPj", 49],
        "./shared_german.json": ["svuF", 50],
        "./shared_greek.json": ["eJKB", 51],
        "./shared_hungarian.json": ["T7i2", 52],
        "./shared_italian.json": ["w96W", 53],
        "./shared_japanese.json": ["XQ4S", 54],
        "./shared_koreana.json": ["4hyI", 55],
        "./shared_latam.json": ["3qrw", 56],
        "./shared_norwegian.json": ["XA4Q", 57],
        "./shared_polish.json": ["TpXn", 58],
        "./shared_portuguese.json": ["Q8UV", 59],
        "./shared_romanian.json": ["Eme1", 60],
        "./shared_russian.json": ["BUiO", 61],
        "./shared_sc_schinese.json": ["O0N/", 62],
        "./shared_schinese.json": ["3UpY", 63],
        "./shared_spanish.json": ["4Fxc", 64],
        "./shared_swedish.json": ["0JhB", 65],
        "./shared_tchinese.json": ["OYRc", 66],
        "./shared_thai.json": ["lhAZ", 67],
        "./shared_turkish.json": ["RSoU", 68],
        "./shared_ukrainian.json": ["lNXI", 69],
        "./shared_vietnamese.json": ["RSmC", 70],
      };
      function o(e) {
        if (!n.o(r, e))
          return Promise.resolve().then(function () {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = r[e],
          o = t[0];
        return n.e(t[1]).then(function () {
          return n.t(o, 3);
        });
      }
      (o.keys = function () {
        return Object.keys(r);
      }),
        (o.id = "rCDf"),
        (e.exports = o);
    },
    rHSA: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      }),
        n.d(t, "b", function () {
          return o;
        });
      var r, o;
      n("qiKp");
      !(function (e) {
        (e[(e.INVALID = 0)] = "INVALID"),
          (e[(e.OK = 1)] = "OK"),
          (e[(e.CANCEL = 2)] = "CANCEL"),
          (e[(e.SECONDARY = 3)] = "SECONDARY"),
          (e[(e.OPTIONS = 4)] = "OPTIONS"),
          (e[(e.BUMPER_LEFT = 5)] = "BUMPER_LEFT"),
          (e[(e.BUMPER_RIGHT = 6)] = "BUMPER_RIGHT"),
          (e[(e.TRIGGER_LEFT = 7)] = "TRIGGER_LEFT"),
          (e[(e.TRIGGER_RIGHT = 8)] = "TRIGGER_RIGHT"),
          (e[(e.DIR_UP = 9)] = "DIR_UP"),
          (e[(e.DIR_DOWN = 10)] = "DIR_DOWN"),
          (e[(e.DIR_LEFT = 11)] = "DIR_LEFT"),
          (e[(e.DIR_RIGHT = 12)] = "DIR_RIGHT"),
          (e[(e.SELECT = 13)] = "SELECT"),
          (e[(e.START = 14)] = "START"),
          (e[(e.STEAM_MENU = 15)] = "STEAM_MENU"),
          (e[(e.STEAM_QUICK_MENU = 16)] = "STEAM_QUICK_MENU");
      })(r || (r = {})),
        (function (e) {
          (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
            (e[(e.GAMEPAD = 1)] = "GAMEPAD"),
            (e[(e.KEYBOARD = 2)] = "KEYBOARD");
        })(o || (o = {}));
    },
    sUmc: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "a", function () {
          return c;
        });
      var r = n("i8i4"),
        o = n("X3Ds"),
        i = (function () {
          return function (e) {
            this.instance = new s(e, !1);
          };
        })();
      function a(e) {
        return new s(e.body, !0);
      }
      var s = (function () {
          function e(e, t) {
            void 0 === t && (t = !0),
              (this.m_parent = e),
              (this.m_window = e.ownerDocument.defaultView),
              (this.m_bRemoveOnHide = t);
          }
          return (
            (e.prototype.Show = function (e, t) {
              var n = this;
              return (
                this.CancelShowInterval(),
                t
                  ? new Promise(function (r, o) {
                      n.iIntervalShow = n.m_window.setTimeout(function () {
                        var t = n.m_parent.ownerDocument;
                        t.defaultView &&
                          !t.defaultView.closed &&
                          (n.InternalShow(e), r());
                      }, t);
                    })
                  : (this.InternalShow(e), Promise.resolve())
              );
            }),
            (e.prototype.InternalShow = function (e) {
              this.m_container ||
                ((this.m_container = this.m_parent.ownerDocument.createElement(
                  "div"
                )),
                this.m_parent.appendChild(this.m_container)),
                r.render(e, this.m_container);
            }),
            (e.prototype.Hide = function (e) {
              var t = this;
              this.CancelShowInterval(),
                e
                  ? (this.iIntervalShow = this.m_window.setTimeout(function () {
                      t.InternalHide();
                    }, e))
                  : this.InternalHide();
            }),
            (e.prototype.InternalHide = function () {
              this.m_container &&
                (r.unmountComponentAtNode(this.m_container),
                this.m_bRemoveOnHide &&
                  (this.m_parent.removeChild(this.m_container),
                  (this.m_container = null)));
            }),
            (e.prototype.CancelShowInterval = function () {
              void 0 !== this.iIntervalShow &&
                (this.m_window.clearInterval(this.iIntervalShow),
                (this.iIntervalShow = void 0));
            }),
            (e.prototype.BIsChildElement = function (e) {
              return this.m_container && o.e(this.m_container, e);
            }),
            e
          );
        })(),
        c = (function () {
          function e(e) {
            (this.m_mapEmbeddedHovers = new WeakMap()),
              (this.m_strUniqueID = e);
          }
          return (
            (e.prototype.ShowElementDelayed = function (e, t, n, r) {
              var o = this.GetEmbeddedElement(e);
              return (o.activeObject = r), o.instance.Show(n, t);
            }),
            (e.prototype.ShowElement = function (e, t, n) {
              var r = this.GetEmbeddedElement(e);
              (r.activeObject = n), r.instance.Show(t);
            }),
            (e.prototype.HideElement = function (e, t, n) {
              var r = this.GetEmbeddedElement(e);
              r.activeObject == t &&
                ((r.activeObject = void 0), r.instance.Hide(n));
            }),
            (e.prototype.GetEmbeddedElement = function (e) {
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
    umRa: function (e, t, n) {
      e.exports = {
        Toggle: "toggle_Toggle_3POJz",
        Disabled: "toggle_Disabled_1jIKG",
        ToggleRail: "toggle_ToggleRail_3DiLY",
        Highlight: "toggle_Highlight_2FNJu",
        On: "toggle_On_3N31m",
        Off: "toggle_Off_1Qa-r",
        ToggleSwitch: "toggle_ToggleSwitch_21X4K",
        ToggleRow: "toggle_ToggleRow_NnxzA",
        Label: "toggle_Label_xK7Vv",
      };
    },
    uobO: function (e, t, n) {
      "use strict";
      (function (e) {
        n.d(t, "a", function () {
          return w;
        });
        var r,
          o = n("mrSG"),
          i = n("bxBv"),
          a = n("SxtR"),
          s = n("IjL/"),
          c = n("TLQK"),
          l =
            window.addEventListener ||
            (e && e.addEventListener) ||
            function () {},
          u = [],
          p = function (e, t) {
            return u.push({ error: e, cCallsitesToIgnore: t });
          },
          d = !0,
          h = console.assert;
        console.assert = function (e, t) {
          for (var n = [], r = 2; r < arguments.length; r++)
            n[r - 2] = arguments[r];
          e || p(new Error(b.apply(void 0, Object(o.g)([t], n))), 2),
            h.apply(console, Object(o.g)([e, t], n));
        };
        var m = console.error;
        (console.error = function (e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          p(new Error(b.apply(void 0, Object(o.g)([e], t))), 1),
            m.apply(console, Object(o.g)([e], t));
        }),
          l("error", function (e) {
            p(e.error, 0);
          }),
          (r = window.setTimeout(function () {
            (u = []), (p = function () {});
          }, 3e4));
        var f = { cCallsitesToIgnore: 0, bIncludeMessageInIdentifier: !1 },
          g = (function () {
            function e(e) {
              var t = this;
              void 0 === e && (e = !0),
                (this.m_transport = null),
                (this.m_rgErrorQueue = []),
                (this.m_bEnabled = !0),
                (this.m_bInitialized = !1),
                e
                  ? (u.forEach(function (e) {
                      var n = e.error,
                        r = e.cCallsitesToIgnore;
                      return t.ReportError(n, { cCallsitesToIgnore: r });
                    }),
                    (p = function (e, n) {
                      return t.ReportError(e, { cCallsitesToIgnore: n });
                    }))
                  : (p = function () {}),
                (u = []),
                clearTimeout(r),
                window.setTimeout(function () {
                  t.m_bInitialized ||
                    ((t.m_bEnabled = !1), (t.m_rgErrorQueue = []));
                }, 3e4);
            }
            return (
              (e.prototype.Init = function (e, t, n) {
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
              (e.prototype.ReportError = function (e, t) {
                return Object(o.b)(this, void 0, void 0, function () {
                  var n, r, i;
                  return Object(o.e)(this, function (a) {
                    switch (a.label) {
                      case 0:
                        return (
                          a.trys.push([0, 2, , 3]),
                          (n = Object(o.a)(Object(o.a)({}, f), t)),
                          this.m_bEnabled ? [4, O(e, n)] : [2, null]
                        );
                      case 1:
                        return (r = a.sent())
                          ? (this.SendErrorReport(r), [2, r])
                          : [2, null];
                      case 2:
                        return (
                          (i = a.sent()),
                          console.log("Failed to report error: " + i),
                          [2, null]
                        );
                      case 3:
                        return [2];
                    }
                  });
                });
              }),
              (e.prototype.SendErrorReport = function (e) {
                this.m_transport
                  ? this.SendErrorReports([e])
                  : this.m_rgErrorQueue.push(e);
              }),
              (e.prototype.SendErrorReports = function (e) {
                if (e && e.length) {
                  var t = i.b.Init(a.a),
                    n = e.reduce(function (e, t) {
                      return (
                        e[t.identifier]
                          ? e[t.identifier].count++
                          : (e[t.identifier] = { report: t, count: 1 }),
                        e
                      );
                    }, {}),
                    r = Object.keys(n).map(function (e) {
                      var t = n[e],
                        r = t.report,
                        o = t.count,
                        i = new a.b();
                      return (
                        i.set_count(o),
                        i.set_identifier(r.identifier + " " + r.identifierHash),
                        i.set_message(JSON.stringify(r.message)),
                        i
                      );
                    });
                  t.Body().set_product(this.m_strProduct),
                    t.Body().set_version(this.m_strVersion),
                    t.Body().set_errors(r),
                    a.c.ReportClientError(this.m_transport, t);
                }
              }),
              Object.defineProperty(e.prototype, "version", {
                get: function () {
                  return this.m_strVersion;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "product", {
                get: function () {
                  return this.m_strProduct;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "reporting_enabled", {
                get: function () {
                  return d;
                },
                enumerable: !1,
                configurable: !0,
              }),
              e
            );
          })();
        function b(e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          if ("string" == typeof e && 0 === t.length) return e;
          var r = Object(o.g)([e], t);
          return r
            .map(function (e) {
              try {
                return String(e);
              } catch (e) {
                return "[Stringify Error]";
              }
            })
            .join(", ");
        }
        var v,
          _ = /^\s*at .*(\S+:\d+|\(native\))/m,
          y = /(^|@)\S+:\d+/;
        function O(e, t) {
          try {
            return e.stack && e.stack.match(_)
              ? (function (e, t) {
                  return Object(o.b)(this, void 0, void 0, function () {
                    var n, r, i, a, s, c, l;
                    return Object(o.e)(this, function (o) {
                      switch (o.label) {
                        case 0:
                          return (
                            (n = t.cCallsitesToIgnore),
                            (r = t.bIncludeMessageInIdentifier),
                            (i = e.stack.split("\n")),
                            (a = i.filter(function (e) {
                              return !!e.match(_);
                            })),
                            (u = a[n]),
                            (s = (function (e) {
                              var t = "https://",
                                n = e.indexOf(t);
                              if (-1 === n) return e;
                              var r = e.indexOf("/", n + t.length);
                              return -1 === r ? e : e.slice(0, n) + e.slice(r);
                            })(
                              (function (e) {
                                var t = e.lastIndexOf("?");
                                if (-1 === t) return e;
                                var n = e.indexOf(":", t);
                                return -1 === n
                                  ? e
                                  : e.slice(0, t) + e.slice(n);
                              })(u)
                            )),
                            r && (s = s + " " + e.message),
                            (c = i
                              .map(function (e) {
                                var t = e.match(/(.*)\((.*):(\d+):(\d+)\)/);
                                if (!t) return e;
                                if (5 === t.length) {
                                  t[0];
                                  var n = t[1],
                                    r = t[2],
                                    o = t[3],
                                    i = t[4],
                                    a = parseInt(o),
                                    s = parseInt(i);
                                  if (!isNaN(a) && !isNaN(s))
                                    return [n, r, a, s];
                                }
                                return e;
                              })
                              .filter(function (e) {
                                return !!e;
                              })),
                            (l = { identifier: s }),
                            [4, C(s)]
                          );
                        case 1:
                          return [
                            2,
                            ((l.identifierHash = o.sent()), (l.message = c), l),
                          ];
                      }
                      var u;
                    });
                  });
                })(e, t)
              : e.stack && e.stack.match(y)
              ? (function (e, t) {
                  return Object(o.b)(this, void 0, void 0, function () {
                    return Object(o.e)(this, function (e) {
                      return [2, null];
                    });
                  });
                })()
              : null;
          } catch (e) {
            return console.warn("Failed to normalize error stack: " + e), null;
          }
        }
        var w = function () {
            return v || E(new g()), v;
          },
          E = function (e) {
            (v = e),
              s.a.InstallErrorReportingStore(v),
              i.a.InstallErrorReportingStore(v),
              c.b.InstallErrorReportingStore(v);
          };
        function C(e) {
          return Object(o.b)(this, void 0, void 0, function () {
            var t;
            return Object(o.e)(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    n.trys.push([0, 2, , 3]),
                    [4, window.crypto.subtle.digest("SHA-256", S(e))]
                  );
                case 1:
                  return (
                    (t = n.sent()),
                    (r = t),
                    [
                      2,
                      Array.prototype.map
                        .call(new Uint8Array(r), function (e) {
                          return ("00" + e.toString(16)).slice(-2);
                        })
                        .join("")
                        .slice(0, 16),
                    ]
                  );
                case 2:
                  return n.sent(), [2, ""];
                case 3:
                  return [2];
              }
              var r;
            });
          });
        }
        function S(e) {
          for (
            var t = new ArrayBuffer(2 * e.length),
              n = new Uint16Array(t),
              r = 0,
              o = e.length;
            r < o;
            r++
          )
            n[r] = e.charCodeAt(r);
          return t;
        }
      }.call(this, n("yLpj")));
    },
    xnZ7: function (e, t, n) {
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
        RemoveIcon: "shared_common_RemoveIcon_3NeLW",
      };
    },
    "y+6m": function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return _;
      }),
        n.d(t, "d", function () {
          return y;
        }),
        n.d(t, "b", function () {
          return O;
        }),
        n.d(t, "f", function () {
          return w;
        }),
        n.d(t, "a", function () {
          return E;
        }),
        n.d(t, "e", function () {
          return C;
        }),
        n.d(t, "g", function () {
          return S;
        });
      var r = n("mrSG"),
        o = n("TyAF"),
        i = n("q1tI"),
        a = n("i8i4"),
        s = n("TtDX"),
        c = n("JMS6"),
        l = (n("qDk6"), n("6Y59")),
        u = n("exH9"),
        p = n("D4wO"),
        d = n("X3Ds"),
        h = n("TLQK"),
        m = n("bxiW"),
        f = n("lkRc"),
        g = n("+jbA"),
        b = n.n(g),
        v = i.createContext(null),
        _ = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.componentDidMount = function () {
              this.context &&
                ((this.context.m_refContextMenu = this),
                this.context.SetLabel(this.props.label));
            }),
            (t.prototype.componentDidUpdate = function (e) {
              e.label !== this.props.label &&
                this.context &&
                this.context.SetLabel(this.props.label);
            }),
            (t.prototype.HideIfSubmenu = function () {
              return (
                !!this.context.BIsSubMenu() && (this.context.HideSelf(), !0)
              );
            }),
            (t.prototype.HideMenu = function () {
              return (
                this.context.BIsSubMenu()
                  ? this.context.HideSelf()
                  : this.context.Hide(),
                !0
              );
            }),
            (t.prototype.render = function () {
              var e,
                t,
                n,
                o = this.props,
                a = o.children,
                s = o.className,
                c =
                  (o.label,
                  o.onCancel,
                  Object(r.f)(o, [
                    "children",
                    "className",
                    "label",
                    "onCancel",
                  ])),
                l =
                  null !==
                    (n =
                      null === (t = this.context) || void 0 === t
                        ? void 0
                        : t.styles) && void 0 !== n
                    ? n
                    : b.a,
                p =
                  this.context &&
                  this.context.options &&
                  this.context.options.bUseWebStyles;
              return i.createElement(
                "div",
                Object(r.a)({}, c, {
                  className: Object(u.a)(
                    ((e = { popup_menu: p, popup_body: p }),
                    (e[l.contextMenuContents] = !p),
                    (e[l.hasSubMenu] =
                      this.context && this.context.BIsSubMenuVisible()),
                    e),
                    s
                  ),
                }),
                a
              );
            }),
            (t.contextType = v),
            Object(r.c)([m.a], t.prototype, "HideIfSubmenu", null),
            Object(r.c)([m.a], t.prototype, "HideMenu", null),
            (t = Object(r.c)([o.a], t))
          );
        })(i.Component),
        y = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.m_ref = i.createRef()), (t.m_refDiv = i.createRef()), t;
          }
          return (
            Object(r.d)(t, e),
            Object.defineProperty(t.prototype, "element", {
              get: function () {
                return this.m_refDiv.current;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.OnClick = function (e) {
              this.props.disabled ||
                (this.props.onClick && this.props.onClick(e),
                this.props.bInteractableItem ||
                  (this.props.onSelected && this.props.onSelected(e),
                  this.context && this.context.Hide()));
            }),
            (t.prototype.OnOKButton = function (e) {
              this.m_refDiv.current.click();
            }),
            (t.prototype.OnMouseEnter = function (e) {
              this.context &&
                0 == this.context.presentation &&
                this.context.HideSubMenu();
            }),
            (t.prototype.Focus = function () {
              this.m_ref.current
                ? this.m_ref.current.TakeFocus()
                : this.m_refDiv.current && this.m_refDiv.current.focus();
            }),
            (t.prototype.render = function () {
              var e,
                t,
                n,
                o = this.props,
                a =
                  (o.onSelected,
                  o.bInteractableItem,
                  o.onMoveRight,
                  Object(r.f)(o, [
                    "onSelected",
                    "bInteractableItem",
                    "onMoveRight",
                  ])),
                s =
                  null !==
                    (n =
                      null === (t = this.context) || void 0 === t
                        ? void 0
                        : t.styles) && void 0 !== n
                    ? n
                    : b.a,
                c =
                  this.context &&
                  this.context.options &&
                  this.context.options.bUseWebStyles;
              return i.createElement(
                "div",
                Object(r.a)(
                  { ref: this.m_refDiv, onMouseEnter: this.OnMouseEnter },
                  a,
                  {
                    onClick: this.OnClick,
                    unselectable: this.props.unselectable,
                    className: Object(u.a)(
                      this.props.className,
                      ((e = { popup_menu_item: c }),
                      (e[s.contextMenuItem] = !c),
                      (e.contextMenuItem = !c),
                      (e.disabled = !!this.props.disabled),
                      e)
                    ),
                  }
                ),
                this.props.children
              );
            }),
            (t.contextType = v),
            Object(r.c)([m.a], t.prototype, "OnClick", null),
            Object(r.c)([m.a], t.prototype, "OnOKButton", null),
            Object(r.c)([m.a], t.prototype, "OnMouseEnter", null),
            Object(r.c)([m.a], t.prototype, "Focus", null),
            t
          );
        })(i.PureComponent),
        O = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.bChecked,
                n = e.children,
                o = e.className,
                a = Object(r.f)(e, ["bChecked", "children", "className"]);
              return i.createElement(
                y,
                Object(r.a)({}, a, {
                  className: Object(u.a)(o, t && "menuChecked"),
                }),
                i.createElement("div", { className: "contextMenuCheckMark" }),
                n
              );
            }),
            t
          );
        })(i.PureComponent);
      i.PureComponent;
      var w = (function (e) {
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
                menuHeight: void 0,
              }),
              (n.m_mutationObserver = new MutationObserver(n.OnMenuMutation)),
              n
            );
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.BindMenuElement = function (e) {
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
                    subtree: !0,
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
                  this.setState({ ready: !0 }, function () {
                    t.TakeFocus();
                  }));
            }),
            (t.prototype.OnMenuMutation = function (e, t) {
              this.PositionMenu();
            }),
            (t.prototype.OnWindowResize = function () {
              this.PositionMenu();
            }),
            (t.prototype.OnBlur = function (e) {
              (e.relatedTarget && d.e(e.currentTarget, e.relatedTarget)) ||
                (e.relatedTarget &&
                  this.props.instance.BIsElementInMenuHierarchy(
                    e.relatedTarget
                  )) ||
                this.props.instance.BIsSubMenuVisible() ||
                (this.state.ready &&
                  this.props.instance.visible &&
                  this.props.instance.Hide());
            }),
            (t.prototype.OnKeyDown = function (e) {
              27 == e.keyCode &&
                this.state.ready &&
                (this.props.instance.Hide(),
                e.preventDefault(),
                e.stopPropagation());
            }),
            (t.prototype.componentDidUpdate = function () {
              this.m_cReenteranceGuard-- > 0
                ? this.PositionMenu()
                : (this.m_cReenteranceGuard = 2);
            }),
            (t.prototype.TakeFocus = function () {
              if (
                this.m_elMenu &&
                this.state.ready &&
                this.props.instance.visible &&
                (this.props.popup ||
                  !d.e(
                    this.m_elMenu,
                    this.m_elMenu.ownerDocument.activeElement
                  ))
              ) {
                var e = this.m_elMenu.querySelector(".ContextMenuAutoFocus");
                e && e.focus ? e.focus() : this.m_elMenu.focus();
              }
            }),
            (t.prototype.PositionMenu = function () {
              var e = this.m_elMenu,
                t = this.props.element;
              if (e && t) {
                var n = t.ownerDocument.defaultView;
                if ("none" !== n.getComputedStyle(t).display) {
                  var r = t.getBoundingClientRect(),
                    o = e.getBoundingClientRect(),
                    i = null != this.props.popup,
                    a = this.props.options,
                    s = {
                      menuLeft: void 0,
                      menuRight: void 0,
                      menuTop: void 0,
                      menuBottom: void 0,
                      menuWidth: void 0,
                      menuHeight: void 0,
                    },
                    c = this.props.clientX,
                    l = this.props.clientY,
                    u = n.innerWidth,
                    p = n.innerHeight;
                  if (i) {
                    this.props.options.bScreenCoordinates ||
                      ((c += n.screenLeft), (l += n.screenTop)),
                      (r = d.h(n, r));
                    var h = n.screen,
                      m = 0,
                      f = 0;
                    h.availLeft && (m = h.availLeft),
                      h.availTop && (f = h.availTop),
                      (u = m + h.availWidth),
                      (p = f + h.availHeight);
                  }
                  (a.bOverlapHorizontal || a.bOverlapVertical) &&
                    (c = l = void 0);
                  var g = c || r.left,
                    b = c || r.right,
                    v = o.width;
                  a.bMatchWidth && ((v = b - g), (s.menuWidth = v));
                  var _ = (a.bOverlapHorizontal ? b : g) - v,
                    y = _ > 0,
                    O = u - (a.bOverlapHorizontal ? g : b) - v,
                    w = O > 0,
                    E = (a.bPreferPopLeft || !w) && y;
                  y ||
                    w ||
                    ((E = y > w),
                    a.bFitToWindow &&
                      ((v += (E ? _ : O) - 8), (s.menuWidth = v))),
                    (!a.bPreferPopLeft && w) || !y
                      ? (s.menuLeft = a.bOverlapHorizontal ? g : b)
                      : (s.menuRight = u - (a.bOverlapHorizontal ? b : g));
                  var C = l || r.top,
                    S = l || r.bottom,
                    D = e.scrollHeight;
                  a.bMatchHeight && ((D = S - C), (s.menuHeight = D));
                  var M = (a.bOverlapVertical ? S : C) - D,
                    x = M > 0,
                    R = p - (a.bOverlapVertical ? C : S) - D,
                    I = R > 0,
                    j = (a.bPreferPopTop || !I) && x && !a.bDisablePopTop;
                  if (!x && !I) {
                    var T =
                      void 0 !== a.bShiftToFitWindow
                        ? a.bShiftToFitWindow
                        : a.bFitToWindow && !a.bOverlapHorizontal;
                    (j = M > R && !a.bDisablePopTop),
                      T && (j ? (s.menuTop = 4) : (s.menuBottom = 4)),
                      a.bFitToWindow &&
                        (T ? (D = Math.min(D, p - 8)) : (D += j ? M : R),
                        (s.menuHeight = D - 8));
                  }
                  void 0 === s.menuBottom &&
                    void 0 === s.menuTop &&
                    (j
                      ? (s.menuBottom = p - (a.bOverlapVertical ? S : C))
                      : (s.menuTop = a.bOverlapVertical ? C : S)),
                    i
                      ? (s.menuHeight || (s.menuHeight = o.height),
                        s.menuWidth || (s.menuWidth = o.width),
                        s.menuBottom &&
                          !s.menuTop &&
                          ((s.menuTop = p - s.menuBottom - s.menuHeight),
                          (s.menuBottom = void 0)),
                        s.menuRight &&
                          !s.menuLeft &&
                          ((s.menuLeft = u - s.menuRight - s.menuWidth),
                          (s.menuRight = void 0)))
                      : (s.menuLeft && (s.menuLeft += n.scrollX),
                        s.menuTop && (s.menuTop += n.scrollY),
                        s.menuBottom &&
                          (s.menuBottom +=
                            n.document.body.clientHeight -
                            n.scrollY -
                            n.innerHeight),
                        s.menuRight &&
                          (s.menuRight +=
                            n.document.body.clientWidth -
                            n.scrollX -
                            n.innerWidth)),
                    (s.menuLeft === this.state.menuLeft &&
                      s.menuRight === this.state.menuRight &&
                      s.menuTop === this.state.menuTop &&
                      s.menuBottom === this.state.menuBottom &&
                      s.menuWidth === this.state.menuWidth &&
                      s.menuHeight === this.state.menuHeight) ||
                      this.setState(s);
                }
              }
            }),
            (t.prototype.render = function () {
              var e = this,
                t = { visibility: this.state.ready ? "visible" : "hidden" };
              if (this.props.popup) {
                var n = this.props.element.ownerDocument.defaultView;
                void 0 !== this.state.menuLeft &&
                  void 0 !== this.state.menuTop &&
                  void 0 !== this.state.menuWidth &&
                  void 0 !== this.state.menuHeight &&
                  n.SteamClient.Window.GetWindowRestoreDetails(function (t) {
                    var r = e.props.popup.window,
                      o = e.state.menuLeft - n.screenX,
                      i = e.state.menuTop - n.screenY;
                    try {
                      r.SteamClient.Window.PositionWindowRelative(
                        t,
                        o,
                        i,
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
                  : b.a.contextMenu);
              return (
                this.props.instance.visible &&
                  this.state.ready &&
                  (r += " visible"),
                (r += " " + b.a.ContextMenuFocusContainer),
                i.createElement(
                  v.Provider,
                  { value: this.props.instance },
                  i.createElement(
                    "div",
                    {
                      className: r,
                      ref: this.BindMenuElement,
                      style: t,
                      onBlur: this.OnBlur,
                      onKeyDown: this.OnKeyDown,
                      tabIndex: 0,
                    },
                    this.props.children
                  )
                )
              );
            }),
            Object(r.c)([m.a], t.prototype, "BindMenuElement", null),
            Object(r.c)(
              [m.a, Object(p.a)(100)],
              t.prototype,
              "OnMenuMutation",
              null
            ),
            Object(r.c)([m.a], t.prototype, "OnWindowResize", null),
            Object(r.c)([m.a], t.prototype, "OnBlur", null),
            Object(r.c)([m.a], t.prototype, "OnKeyDown", null),
            (t = Object(r.c)([o.a], t))
          );
        })(i.Component),
        E = (function (e) {
          function t(n, r, o) {
            var i =
              e.call(this, "contextmenu_" + t.sm_iContextMenuInstance++, {
                title: "Menu",
                html_class: b.a.ContextMenuPopup + " client_chat_frame",
                body_class: "ContextMenuPopupBody",
                replace_existing_popup: !1,
                target_browser: o,
                eCreationFlags: c.b.ContextMenu,
              }) || this;
            return (i.m_menuProps = n), (i.m_children = r), i;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.UpdateParamsBeforeShow = function (e) {
              if (this.m_menuProps.options.bScreenCoordinates)
                e.dimensions = {
                  left: this.m_menuProps.clientX,
                  top: this.m_menuProps.clientY,
                  width: 350,
                  height: 1,
                };
              else {
                var t = d.h(
                  this.m_menuProps.element.ownerDocument.defaultView,
                  this.m_menuProps.element.getBoundingClientRect()
                );
                e.dimensions = {
                  left: t.right,
                  top: t.top,
                  width: 350,
                  height: 1,
                };
              }
              return (
                (e.availscreenwidth = this.m_menuProps.element.ownerDocument.defaultView.screen.availWidth),
                (e.availscreenheight = this.m_menuProps.element.ownerDocument.defaultView.screen.availHeight),
                e
              );
            }),
            (t.prototype.Render = function (e, t) {
              a.render(
                i.createElement(
                  w,
                  Object(r.a)({}, this.m_menuProps, { popup: this }),
                  this.m_children
                ),
                t
              );
            }),
            (t.prototype.OnBlur = function () {}),
            (t.prototype.OnFocus = function () {}),
            (t.prototype.OnLoad = function () {}),
            (t.prototype.OnResize = function () {}),
            (t.prototype.OnClose = function () {}),
            (t.sm_iContextMenuInstance = 0),
            t
          );
        })(c.a);
      function C(e) {
        return i.createElement("div", {
          className: b.a.ContextMenuMouseOverlay,
        });
      }
      function S(e) {
        var t = [],
          n = d.m(e),
          r = n.getSelection(),
          o = r && r.rangeCount > 0 && r.toString().length > 0,
          a = e.target,
          c = !1;
        if (
          (a &&
            "tagName" in a &&
            (("INPUT" != a.tagName && "TEXTAREA" != a.tagName) || (c = !0)),
          f.c.IN_CLIENT &&
            c &&
            n.SteamClient._internal &&
            n.SteamClient._internal.GetSpellingSuggestions &&
            n.SteamClient._internal.AddWordToDictionary)
        ) {
          var l = n.SteamClient._internal.GetSpellingSuggestions(),
            u = l[0],
            p = l.slice(1),
            m = a;
          if (
            (m &&
              p.forEach(function (e, r) {
                t.push(
                  i.createElement(
                    y,
                    {
                      key: "spelling_" + r + "_" + e,
                      onSelected: function () {
                        m.setRangeText(e),
                          (function (e, t) {
                            var n = t.createEvent("HTMLEvents");
                            n.initEvent("change", !0, !1), e.dispatchEvent(n);
                          })(m, n.document),
                          m.setSelectionRange(m.selectionEnd, m.selectionEnd),
                          a.focus();
                      },
                      className: b.a.NoSeparation,
                    },
                    e
                  )
                );
              }),
            u)
          ) {
            (u = u.trim()),
              t.push(
                i.createElement(
                  y,
                  {
                    key: "addtodictionary_" + u,
                    onSelected: function () {
                      return n.SteamClient._internal.AddWordToDictionary(u);
                    },
                  },
                  Object(h.f)(
                    "#ContextMenu_AddToDictionary",
                    u.length < 30 ? u : u.substring(0, 30) + "..."
                  )
                )
              );
          }
        }
        if (
          ((n.document.queryCommandEnabled("cut") || (o && c)) &&
            t.push(
              i.createElement(
                y,
                {
                  key: "cut",
                  onSelected: function () {
                    n.document.execCommand("cut");
                  },
                },
                Object(h.f)("#ContextMenu_Cut")
              )
            ),
          (n.document.queryCommandEnabled("copy") || o) &&
            t.push(
              i.createElement(
                y,
                {
                  key: "copy",
                  onSelected: function () {
                    n.document.execCommand("copy");
                  },
                  className: b.a.NoSeparation,
                },
                Object(h.f)("#ContextMenu_Copy")
              )
            ),
          f.c.IN_CLIENT &&
            c &&
            n.SteamClient._internal &&
            n.SteamClient._internal.Paste &&
            t.push(
              i.createElement(
                y,
                {
                  key: "paste",
                  onSelected: function () {
                    a.focus(), n.SteamClient._internal.Paste();
                  },
                  className: b.a.NoSeparation,
                },
                Object(h.f)("#ContextMenu_Paste")
              )
            ),
          t.length)
        )
          Object(s.a)(i.createElement(_, null, t), e);
        else {
          if (e.shiftKey) return;
          e.preventDefault(), e.stopPropagation();
        }
      }
    },
    z7tf: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      }),
        n.d(t, "b", function () {
          return i;
        });
      var r = n("q1tI"),
        o = r.createContext({}),
        i = function () {
          return r.useContext(o);
        };
    },
    zBSo: function (e, t, n) {
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
        Active: "pagedsettings_Active_2DpXj",
      };
    },
  },
  [["gfbn", 102, 0]],
]);

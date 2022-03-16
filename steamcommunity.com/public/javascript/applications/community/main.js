/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7154014";
(window.webpackJsonp = window.webpackJsonp || []).push([
  [99],
  {
    "+d9t": function (e, t, n) {
      "use strict";
      n.d(t, "e", function () {
        return m;
      }),
        n.d(t, "b", function () {
          return h;
        }),
        n.d(t, "d", function () {
          return f;
        }),
        n.d(t, "f", function () {
          return b;
        }),
        n.d(t, "a", function () {
          return _;
        }),
        n.d(t, "c", function () {
          return v;
        });
      var r = n("mrSG"),
        i = n("2vnA"),
        o = (n("aoTL"), n("q1tI")),
        s = (n("mgoM"), n("kyHq"), n("TtDX")),
        a = n("exH9"),
        c = n("X3Ds"),
        l = n("TLQK"),
        u = n("lkRc"),
        d = n("y+6m");
      function m(e, t) {
        let n;
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
      function h(e) {
        let {
            bDisableContextMenu: t,
            onContextMenu: n,
            bForceExternal: i,
            href: s,
            bUseLinkFilter: a,
            getPIDFromEvent: c,
          } = e,
          l = Object(r.c)(e, [
            "bDisableContextMenu",
            "onContextMenu",
            "bForceExternal",
            "href",
            "bUseLinkFilter",
            "getPIDFromEvent",
          ]);
        return (
          t || n || (n = g),
          a &&
            s &&
            (s =
              (u.c.IN_CLIENT ? "steam://openurl_external/" : "") +
              u.c.COMMUNITY_BASE_URL +
              "linkfilter/?url=" +
              s),
          c || (c = () => 0),
          o.createElement(
            "a",
            Object.assign({}, l, {
              href: s,
              onClick: (e) => {
                e.preventDefault(),
                  f(window, s, {
                    bForceExternal: !!i,
                    bUseLinkFilter: !!a,
                    unPID: c(e),
                  });
              },
              onContextMenu: n,
              rel: a ? "noopener noreferrer" : void 0,
            }),
            e.children
          )
        );
      }
      function p(e) {
        const { strURL: t, unPID: n } = e;
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            d.d,
            {
              onSelected: () => {
                c.j(t);
              },
            },
            Object(l.f)("#ContextMenu_CopyLinkURL")
          ),
          o.createElement(
            d.d,
            {
              onSelected: (e) => {
                f(e, t, { unPID: n });
              },
            },
            Object(l.f)("#ContextMenu_OpenLinkInNewWindow")
          )
        );
      }
      function g(e, t) {
        let n = e.currentTarget;
        return Object(s.a)(
          o.createElement(
            d.c,
            null,
            o.createElement(p, { strURL: n.href, unPID: t })
          ),
          e
        );
      }
      function f(e, t, n = {}) {
        const { bForceExternal: r, unPID: i, bUseLinkFilter: o } = n;
        let s;
        (s =
          "currentTarget" in e ? e.currentTarget.ownerDocument.defaultView : e),
          "undefined" != typeof SteamClient && void 0 !== SteamClient.WebChat
            ? SteamClient.WebChat.OpenURLInClient(t, i || 0, !!r)
            : 0 == t.indexOf("steam://") &&
              0 != t.indexOf("steam://remoteplay/connect")
            ? (s.location.href = t)
            : s.open(
                t,
                null,
                "menubar,location,resizable,scrollbars,status,noopener" +
                  (o ? ",noreferrer" : "")
              );
      }
      function b(e) {
        const { component: t, fallback: n, componentRef: i } = e,
          s = Object(r.c)(e, ["component", "fallback", "componentRef"]),
          [[a, c]] = o.useState([t, n]),
          l = null != a ? a : c;
        return o.createElement(
          l,
          Object.assign(Object.assign({}, s), { ref: i })
        );
      }
      const _ = (e) =>
        o.createElement(
          o.Fragment,
          null,
          Boolean(e.condition) ? e.wrap(e.children) : e.children
        );
      function v(e) {
        return o.forwardRef((t, n) =>
          o.createElement(
            "div",
            Object.assign({}, t, {
              className: Object(a.a)(e, t.className),
              ref: n,
            })
          )
        );
      }
      Object(r.b)(
        [i.C],
        class {
          constructor(e) {
            this.promise = e;
          }
          set promise(e) {
            (this.m_Promise = e),
              (this.m_Value = void 0),
              null == e ||
                e.then((t) => {
                  this.m_Promise === e && (this.m_Value = t);
                });
          }
          get promise() {
            return this.m_Promise;
          }
          get value() {
            return this.m_Value;
          }
        }.prototype,
        "m_Value",
        void 0
      );
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
    "2lL1": function (e, t, n) {
      "use strict";
      var r = n("hRO2");
      n("OS8t");
      r.Message;
    },
    "5E+2": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return h;
      });
      var r = n("mrSG"),
        i = n("q1tI"),
        o = n("sUmc"),
        s = n("av+R"),
        a = (n("exH9"), n("DWPT")),
        c = n("TLQK"),
        l = n("opsS"),
        u = n("LY6W"),
        d = n.n(u);
      class m extends i.Component {
        TryHide() {
          this.m_fnHide && this.m_fnHide(), (this.m_fnHide = null);
        }
        componentWillUnmount() {
          this.TryHide();
        }
        render() {
          const {
              toolTipContent: e,
              nDelayShowMS: t,
              bDisabled: n,
              direction: r,
              nBodyAlignment: i,
              nBodyDistance: o,
              nAllowOffscreenPx: s,
              nMaxLateralMoveOnScreen: a,
              strTooltipClassname: c,
            } = this.props,
            l = {
              direction: r,
              nBodyAlignment: i,
              nBodyDistance: o,
              nAllowOffscreenPx: s,
              nMaxLateralMoveOnScreen: a,
              className: c,
            };
          let u = null;
          if (!n) {
            const n = (e) => (this.m_fnHide = e);
            u =
              "string" == typeof e
                ? p.ForText(e, n, t, l)
                : p.ForReactNode(e, n, t, l);
          }
          const d = Object.assign(Object.assign({}, this.props), {
            onMouseEnter: u ? u.ShowToolTip : null,
            onMouseLeave: this.TryHide,
          });
          return this.RenderHelper(d, u);
        }
      }
      (m.defaultProps = { nDelayShowMS: 300 }),
        Object(r.b)([l.a], m.prototype, "TryHide", null);
      class h extends m {
        RenderHelper(e, t) {
          const {
              toolTipContent: n,
              nDelayShowMS: o,
              bDisabled: a,
              direction: c,
              nBodyAlignment: l,
              nBodyDistance: u,
              nAllowOffscreenPx: d,
              nMaxLateralMoveOnScreen: m,
              strTooltipClassname: h,
              bNavStop: p,
            } = e,
            g = Object(r.c)(e, [
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
          return i.createElement(
            s.e,
            Object.assign(
              { noFocusRing: !0, focusable: null != p ? p : !!g.onClick },
              g
            ),
            e.children
          );
        }
      }
      i.Component;
      i.Component;
      i.Component;
      class p {
        constructor(e, t, n, r) {
          (this.m_rctContent = e),
            (this.m_nDelayShowMS = n),
            (this.m_hoverPositionProps = r),
            (this.m_strKey = "tooltip-" + Math.floor(1e8 * Math.random())),
            (this.m_fnOnShow = t);
        }
        static ForReactNode(e, t, n, r) {
          return new p(e, t, n, r);
        }
        static ForText(e, t, n, r) {
          return new p(
            i.createElement(
              "div",
              { className: d.a.TextToolTip },
              Object(c.f)(e)
            ),
            t,
            n,
            r
          );
        }
        ShowToolTip(e) {
          const t = e.currentTarget || e,
            n = { target: t };
          let r;
          if ("function" == typeof this.m_rctContent) {
            if (((r = this.m_rctContent()), !r)) return;
          } else r = this.m_rctContent;
          p.sm_embeddedElements.ShowElementDelayed(
            t.ownerDocument,
            this.m_nDelayShowMS,
            i.createElement(
              a.a,
              Object.assign({}, n, this.m_hoverPositionProps),
              r
            ),
            this.m_strKey
          ),
            this.m_fnOnShow && this.m_fnOnShow(() => this.HideToolTip(t));
        }
        HideToolTip(e) {
          const t = e.currentTarget || e;
          p.sm_embeddedElements.HideElement(t.ownerDocument, this.m_strKey);
        }
      }
      (p.sm_embeddedElements = new o.a("ignored-id-tooltip-map")),
        Object(r.b)([l.a], p.prototype, "ShowToolTip", null),
        Object(r.b)([l.a], p.prototype, "HideToolTip", null);
    },
    "5h11": function (e, t) {},
    "5izx": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return g;
      }),
        n.d(t, "c", function () {
          return f;
        }),
        n.d(t, "b", function () {
          return w;
        });
      var r = n("mrSG"),
        i = n("2vnA"),
        o = n("wd/R"),
        s = n.n(o),
        a = n("s4NR"),
        c = n.n(a),
        l = n("q1tI"),
        u = n.n(l),
        d = n("kyHq"),
        m = n("X2UP"),
        h = n("lkRc");
      class p {
        constructor() {
          (this.bOpenEventLandingPage = !1),
            (this.bIncludeFeaturedAsGameSource = !0),
            (this.nOverrideDateNow = void 0);
        }
        get bRequireAllEventsLoadedInTimeBlock() {
          return !1;
        }
        get bIsFollowingEnabled() {
          return h.c.EREALM != d.g.k_ESteamRealmChina;
        }
        get bIsCuratorsEnabled() {
          return h.c.EREALM != d.g.k_ESteamRealmChina;
        }
        get bMigrateToStoreBrowseAPI() {
          return !1;
        }
        get bIncludeCurators() {
          return !0;
        }
        GetTimeNowWithOverride() {
          return this.nOverrideDateNow
            ? this.nOverrideDateNow
            : Math.floor(Date.now() / 1e3);
        }
        GetTimeNowWithOverrideAsDate() {
          return this.nOverrideDateNow
            ? new Date(1e3 * this.nOverrideDateNow)
            : new Date();
        }
        BHasTimeOverride() {
          return Boolean(this.nOverrideDateNow);
        }
        ParseDevOverrides(e) {
          if (!e || 0 == e.length) return;
          const t = c.a.parse("?" == e[0] ? e.substring(1) : e);
          if (
            "string" == typeof t.t &&
            ("dev" == h.c.WEB_UNIVERSE || "beta" == h.c.WEB_UNIVERSE)
          ) {
            let e = /^\d+$/.test(t.t)
              ? s.a.unix(Number.parseInt(t.t))
              : s()(t.t);
            (this.nOverrideDateNow = Math.floor(e.unix())),
              console.log(
                "CEventCalendarDevFeatures overriding partner event time: " +
                  this.nOverrideDateNow +
                  " " +
                  e.format()
              );
          }
        }
      }
      Object(r.b)([i.C], p.prototype, "nOverrideDateNow", void 0);
      const g = new p();
      function f(e = 1) {
        const [t, n] = u.a.useState(() => v()),
          r = Object(m.a)("useTimeNowWithOverride"),
          i = u.a.useCallback(() => {
            r.token.reason || n(v());
          }, []);
        return (
          u.a.useEffect(() => {
            const t = 1e3 * e,
              n = t - (Date.now() % t),
              r = window.setTimeout(i, n);
            return () => {
              window.clearTimeout(r);
            };
          }, [t, e, i]),
          t
        );
      }
      window.g_EventCalendarDevFeatures = g;
      const b = new Date(),
        _ = Math.floor(b.getTime() / 1e3);
      function v() {
        const e = Math.floor(Date.now() / 1e3);
        return g.nOverrideDateNow ? g.nOverrideDateNow + (e - _) : e;
      }
      function w() {
        return u.a.useMemo(() => {
          return null !== (e = g.nOverrideDateNow) && void 0 !== e ? e : _;
          var e;
        }, []);
      }
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
    "6NF1": function (e, t) {},
    "6TF7": function (e, t, n) {
      e.exports = { Error: "app_Error_2yM3d" };
    },
    "6Y59": function (e, t, n) {
      "use strict";
      n.d(t, "bb", function () {
        return d;
      }),
        n.d(t, "s", function () {
          return m;
        }),
        n.d(t, "y", function () {
          return h;
        }),
        n.d(t, "L", function () {
          return p;
        }),
        n.d(t, "w", function () {
          return g;
        }),
        n.d(t, "mb", function () {
          return f;
        }),
        n.d(t, "H", function () {
          return b;
        }),
        n.d(t, "V", function () {
          return _;
        }),
        n.d(t, "zb", function () {
          return v;
        }),
        n.d(t, "Ab", function () {
          return w;
        }),
        n.d(t, "R", function () {
          return y;
        }),
        n.d(t, "wb", function () {
          return C;
        }),
        n.d(t, "ub", function () {
          return S;
        }),
        n.d(t, "U", function () {
          return E;
        }),
        n.d(t, "T", function () {
          return O;
        }),
        n.d(t, "m", function () {
          return M;
        }),
        n.d(t, "k", function () {
          return B;
        }),
        n.d(t, "q", function () {
          return D;
        }),
        n.d(t, "J", function () {
          return R;
        }),
        n.d(t, "nb", function () {
          return T;
        }),
        n.d(t, "e", function () {
          return I;
        }),
        n.d(t, "c", function () {
          return x;
        }),
        n.d(t, "p", function () {
          return k;
        }),
        n.d(t, "r", function () {
          return L;
        }),
        n.d(t, "M", function () {
          return N;
        }),
        n.d(t, "P", function () {
          return j;
        }),
        n.d(t, "Y", function () {
          return F;
        }),
        n.d(t, "X", function () {
          return A;
        }),
        n.d(t, "pb", function () {
          return P;
        }),
        n.d(t, "C", function () {
          return G;
        }),
        n.d(t, "N", function () {
          return W;
        }),
        n.d(t, "kb", function () {
          return U;
        }),
        n.d(t, "vb", function () {
          return z;
        }),
        n.d(t, "l", function () {
          return H;
        }),
        n.d(t, "D", function () {
          return V;
        }),
        n.d(t, "eb", function () {
          return K;
        }),
        n.d(t, "Z", function () {
          return q;
        }),
        n.d(t, "ab", function () {
          return Y;
        }),
        n.d(t, "db", function () {
          return X;
        }),
        n.d(t, "f", function () {
          return $;
        }),
        n.d(t, "Q", function () {
          return Z;
        }),
        n.d(t, "tb", function () {
          return J;
        }),
        n.d(t, "I", function () {
          return Q;
        }),
        n.d(t, "x", function () {
          return ee;
        }),
        n.d(t, "rb", function () {
          return te;
        }),
        n.d(t, "qb", function () {
          return ne;
        }),
        n.d(t, "j", function () {
          return re;
        }),
        n.d(t, "n", function () {
          return ie;
        }),
        n.d(t, "fb", function () {
          return oe;
        }),
        n.d(t, "t", function () {
          return se;
        }),
        n.d(t, "A", function () {
          return ae;
        }),
        n.d(t, "v", function () {
          return ce;
        }),
        n.d(t, "F", function () {
          return le;
        }),
        n.d(t, "B", function () {
          return ue;
        }),
        n.d(t, "u", function () {
          return de;
        }),
        n.d(t, "S", function () {
          return me;
        }),
        n.d(t, "b", function () {
          return he;
        }),
        n.d(t, "xb", function () {
          return pe;
        }),
        n.d(t, "a", function () {
          return ge;
        }),
        n.d(t, "O", function () {
          return fe;
        }),
        n.d(t, "G", function () {
          return be;
        }),
        n.d(t, "z", function () {
          return _e;
        }),
        n.d(t, "E", function () {
          return ve;
        }),
        n.d(t, "o", function () {
          return we;
        }),
        n.d(t, "ob", function () {
          return ye;
        }),
        n.d(t, "sb", function () {
          return Ce;
        }),
        n.d(t, "d", function () {
          return Se;
        }),
        n.d(t, "K", function () {
          return Ee;
        }),
        n.d(t, "W", function () {
          return Oe;
        }),
        n.d(t, "yb", function () {
          return Me;
        }),
        n.d(t, "i", function () {
          return Be;
        }),
        n.d(t, "h", function () {
          return De;
        }),
        n.d(t, "g", function () {
          return Re;
        }),
        n.d(t, "cb", function () {
          return Te;
        }),
        n.d(t, "lb", function () {
          return Ie;
        }),
        n.d(t, "jb", function () {
          return xe;
        }),
        n.d(t, "gb", function () {
          return ke;
        }),
        n.d(t, "ib", function () {
          return Le;
        }),
        n.d(t, "hb", function () {
          return Ne;
        });
      var r = n("mrSG"),
        i = n("q1tI"),
        o = n("2i24"),
        s = n.n(o),
        a = n("exH9"),
        c = (n("YyVH"), n("Z7Ow")),
        l = n.n(c),
        u = n("lkRc");
      function d() {
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
            enableBackground: "new -305.5 396.5 256 256",
          },
          i.createElement("path", {
            d:
              "M-232.755,589.942l3.103,2.408c5.78,4.492,11.973,8.18,18.409,10.959l3.581,1.547l2.276,33.783 c0.089,1.33,1.385,2.54,2.715,2.54h48.62c1.355,0,2.745-1.273,2.852-2.621l2.74-33.284l3.602-1.496 c6.406-2.656,12.646-6.262,18.554-10.707l3.137-2.366l30.578,15.009c1.155,0.571,2.924,0.017,3.563-1.087l24.303-42.1 c0.674-1.173,0.265-3.014-0.852-3.785l-27.872-19.309l0.469-3.832c0.495-4.032,0.725-7.395,0.725-10.57 c0-3.129-0.227-6.5-0.687-10.307l-0.469-3.896l28.699-19.253c1.112-0.741,1.509-2.473,0.84-3.627l-24.3-42.104 c-0.657-1.139-2.502-1.727-3.7-1.155l-31.208,14.748l-3.091-2.341c-5.571-4.224-11.466-7.688-17.522-10.306l-3.58-1.548 l-2.34-34.887c-0.089-1.33-1.381-2.536-2.715-2.536h-48.617c-1.355,0-2.74,1.274-2.851,2.626l-2.834,34.371l-3.593,1.501 c-6.082,2.535-12.028,5.924-17.667,10.071l-3.124,2.302l-31.392-15.413c-1.168-0.575-2.924-0.025-3.559,1.074l-24.309,42.107 c-0.678,1.172-0.264,3.014,0.848,3.781l28.068,19.444l-0.524,3.883c-0.592,4.378-0.865,8.018-0.865,11.462 c0,2.988,0.179,6.065,0.55,9.403l0.431,3.853l-28.528,19.125c-1.108,0.742-1.509,2.468-0.84,3.632l24.308,42.1 c0.656,1.142,2.489,1.726,3.7,1.154L-232.755,589.942z M-177.498,560.051c-19.311,0-35.02-15.709-35.02-35.02 s15.709-35.02,35.02-35.02s35.02,15.709,35.02,35.02S-158.188,560.051-177.498,560.051z",
            fill: "currentColor",
          })
        );
      }
      function m() {
        return i.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_DownArrowContextMenu",
            "data-name": "Layer 1",
            viewBox: "0 0 128 128",
            x: "0px",
            y: "0px",
          },
          i.createElement("polygon", {
            points:
              "50 59.49 13.21 22.89 4.74 31.39 50 76.41 95.26 31.39 86.79 22.89 50 59.49",
          })
        );
      }
      function h(e) {
        return i.createElement(
          "svg",
          {
            style: { transform: `rotate(${e.angle}deg)` },
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            width: "24.833px",
            height: "21.917px",
            viewBox: "0 0 24.833 21.917",
          },
          i.createElement("polygon", {
            points:
              "12.5,14.873 3.302,5.723 1.185,7.848 12.5,19.103 23.814,7.848 21.697,5.723 ",
          })
        );
      }
      function p(e) {
        let t = "SVGIcon_Button SVGIcon_MagnifyingGlass";
        return (
          e.className && (t += ` ${e.className}`),
          i.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: t,
              version: "1.1",
              x: "0px",
              y: "0px",
              viewBox: "0 0 100 100",
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
                overflow: "visible",
              })
            )
          )
        );
      }
      function g() {
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
            viewBox: "0 0 256 256",
          },
          i.createElement("circle", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "12",
            strokeMiterlimit: "10",
            cx: "128",
            cy: "128",
            r: "107.5",
          }),
          i.createElement("path", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "12",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d:
              "M74.484,145.945 c0,0,12.996,37.533,53.514,37.533c38.084,0,53.499-37.533,53.499-37.533",
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
            y2: "109.5",
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
            y2: "109.5",
          })
        );
      }
      function f(e) {
        return u.c.IN_GAMEPADUI
          ? i.createElement(
              "svg",
              Object.assign(
                {
                  width: "24",
                  height: "24",
                  viewBox: "0 0 36 36",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "SVGIcon_Button SVGIcon_Submit",
                },
                e
              ),
              i.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d:
                  "M4.16683 8.982C4.10732 8.3908 3.83847 7.42693 4.15486 7.17995C4.46877 6.93489 4.7797 6.90487 5.90123 7.31306L31.1931 17.2282C32.2693 17.6503 32.2686 18.335 31.1931 18.7564L5.90123 28.6715C4.77972 29.1235 4.46864 29.0497 4.15487 28.8049C3.83836 28.5579 4.0953 27.5939 4.15484 27.0028L4.7797 21.2151C4.89862 20.0374 5.92644 18.9801 7.0706 18.854L15.467 18.4429C24.1686 17.9924 24.1686 17.9924 15.467 17.5419L7.0706 17.1313C5.92423 17.0053 4.89825 15.9476 4.7797 14.7706L4.16683 8.982Z",
                fill: "currentColor",
              })
            )
          : i.createElement(
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
                  overflow: "visible",
                })
              )
            );
      }
      function b() {
        return i.createElement(
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
          i.createElement(
            "g",
            null,
            i.createElement("path", {
              clipPath: "url(#SVGID_2_)",
              d:
                "M88.853,29.724H62.271V11.351C62.262,5.18,57.26,0.179,51.089,0.169H11.255\r\n\t\t\t\tC5.085,0.179,0.085,5.18,0.074,11.351v24.908c-0.001,2.207,0.657,4.36,1.888,6.19c3.942,7.586,22.118,18.799,22.314,18.916\r\n\t\t\t\tc0.389,0.229,0.83,0.354,1.281,0.361c1.351,0.01,2.455-1.074,2.468-2.426c0.003-0.329-0.062-0.654-0.187-0.958\r\n\t\t\t\tc-1.319-3.565-2.341-7.233-3.053-10.968h13.135v18.389C37.93,71.9,42.882,76.882,49.02,76.928H75.29\r\n\t\t\t\tc-0.715,3.724-1.737,7.379-3.054,10.936c-0.517,1.248,0.076,2.678,1.323,3.196c0.303,0.125,0.63,0.188,0.959,0.186\r\n\t\t\t\tc0.451-0.006,0.894-0.13,1.279-0.361c0.197-0.115,18.373-11.329,22.314-18.914c1.235-1.834,1.894-3.997,1.888-6.207V40.906\r\n\t\t\t\tC99.99,34.746,95.01,29.751,88.853,29.724 M32.797,42.449H21.831c-0.721,0.01-1.4,0.327-1.873,0.869\r\n\t\t\t\tc-0.464,0.544-0.669,1.265-0.558,1.973c0,0.228,0.59,3.79,1.641,8.028c-5.517-3.842-12.773-9.425-14.776-13.136\r\n\t\t\t\tc-0.067-0.162-0.149-0.314-0.247-0.46c-0.738-1.033-1.13-2.276-1.116-3.546V11.351c0.008-3.463,2.825-6.264,6.288-6.255h0.065\r\n\t\t\t\th39.833c3.45,0.007,6.246,2.804,6.255,6.255v18.373H49.02c-3.223,0.005-6.286,1.399-8.406,3.825\r\n\t\t\t\tc-1.744-0.054-3.464-0.427-5.074-1.101c2.588-3.257,4.169-7.2,4.548-11.345h1.33c1.359,0,2.463-1.103,2.463-2.463\r\n\t\t\t\tc0-1.361-1.104-2.461-2.463-2.461h-7.784v-4.384c0-1.36-1.102-2.464-2.461-2.464c-1.361,0-2.463,1.104-2.463,2.464v4.384h-7.668\r\n\t\t\t\tc-1.361,0-2.462,1.1-2.462,2.461c0,1.36,1.102,2.463,2.462,2.463H35.13c-0.348,3.137-1.604,6.104-3.613,8.538\r\n\t\t\t\tc-1.439-1.598-2.553-3.46-3.284-5.482c-0.489-1.271-1.916-1.903-3.185-1.414c-1.27,0.489-1.902,1.917-1.412,3.185\r\n\t\t\t\tc0.892,2.395,2.192,4.619,3.841,6.57c-2.017,0.812-4.178,1.208-6.354,1.165c-1.359,0-2.463,1.102-2.463,2.461\r\n\t\t\t\tc0,1.362,1.104,2.465,2.463,2.465c3.647,0.07,7.244-0.868,10.393-2.71c2.032,1.239,4.293,2.049,6.649,2.38\r\n\t\t\t\tc-0.218,0.859-0.327,1.741-0.327,2.627v1.641L32.797,42.449z M95.19,65.763c0.013,1.271-0.379,2.514-1.117,3.547\r\n\t\t\t\tc-0.097,0.138-0.181,0.287-0.246,0.443c-1.938,3.678-9.211,9.277-14.776,13.135c1.099-4.236,1.64-7.799,1.64-8.03\r\n\t\t\t\tc0.111-0.704-0.091-1.425-0.558-1.969c-0.462-0.548-1.138-0.871-1.854-0.887H49.02c-3.447,0-6.246-2.791-6.255-6.239V40.906\r\n\t\t\t\tc0.009-3.452,2.805-6.249,6.255-6.257h39.833c3.449,0.008,6.246,2.805,6.256,6.257L95.19,65.763z M77.834,56.635L77.834,56.635\r\n\t\t\t\tl-6.564-16.42c-0.037-0.092-0.081-0.18-0.133-0.262l-0.099-0.165c-0.047-0.078-0.102-0.15-0.164-0.214l-0.132-0.164l-0.182-0.147\r\n\t\t\t\tl-0.195-0.099c-0.056-0.043-0.116-0.076-0.182-0.098l-0.246-0.132c-0.06-0.009-0.121-0.009-0.18,0l-0.248-0.082h-0.245h-0.231\r\n\t\t\t\th-0.261h-0.214l-0.279,0.082c-0.055-0.007-0.109-0.007-0.164,0l-0.246,0.132l-0.247,0.098c-0.064,0.044-0.124,0.095-0.18,0.147\r\n\t\t\t\tl-0.182,0.148l-0.149,0.166c-0.056,0.066-0.113,0.138-0.161,0.211v0.166l-0.149,0.263l-6.567,16.418l-3.282,8.21\r\n\t\t\t\tc-0.546,1.246,0.026,2.697,1.272,3.24c0.036,0.016,0.072,0.029,0.105,0.042c0.29,0.127,0.604,0.189,0.919,0.182\r\n\t\t\t\tc1.005-0.006,1.905-0.616,2.283-1.544l2.657-6.665h9.854l2.66,6.665c0.383,0.931,1.291,1.54,2.298,1.544\r\n\t\t\t\tc0.31,0.003,0.619-0.059,0.904-0.182c1.269-0.485,1.906-1.907,1.422-3.18c-0.014-0.034-0.028-0.069-0.044-0.103L77.834,56.635z\r\n\t\t\t\tM66.062,55.123l2.939-7.323l2.923,7.323H66.062z",
            })
          )
        );
      }
      function _() {
        return i.createElement(
          "svg",
          {
            fill: "#FFFFFF",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Popout",
            viewBox: "0 0 8 8",
            x: "0px",
            y: "0px",
          },
          i.createElement("path", {
            d:
              "M0 0v8h8v-2h-1v1h-6v-6h1v-1h-2zm4 0l1.5 1.5-2.5 2.5 1 1 2.5-2.5 1.5 1.5v-4h-4z",
          })
        );
      }
      function v(e) {
        return i.createElement(
          "svg",
          Object.assign(
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
          i.createElement(
            "g",
            null,
            i.createElement("polygon", {
              points:
                "-74.9,117.2 -102.2,145 -74.9,172.8 -89.1,186.8 -116.2,159.3 -143.2,186.8 -157.5,172.8 -130.2,145 -157.5,117.2 -143.2,103.2 -116.2,130.7 -89.1,103.2",
            })
          )
        );
      }
      function w(e) {
        const t = e.color || "#FFFFFF";
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
            viewBox: "0 0 256 256",
          },
          i.createElement("line", {
            fill: "none",
            stroke: t,
            strokeWidth: "45",
            strokeMiterlimit: "10",
            x1: "212",
            y1: "212",
            x2: "44",
            y2: "44",
          }),
          i.createElement("line", {
            fill: "none",
            stroke: t,
            strokeWidth: "45",
            strokeMiterlimit: "10",
            x1: "44",
            y1: "212",
            x2: "212",
            y2: "44",
          })
        );
      }
      function y() {
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
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d:
              "M167.768,62.647 l-0.012,123.052c0,24.729-19.334,44.856-43.096,44.866c-23.765-0.006-43.099-20.134-43.096-44.872L81.557,48.851 c0-15.345,14.483-27.827,29.83-27.83c15.342,0.003,27.827,12.488,27.833,27.833l-0.002,139.245 c0.003,6.376-8.546,12.925-14.925,12.925c0,0-13.929-0.166-13.929-12.928l0.003-124.839",
          })
        );
      }
      function C(e) {
        const { muted: t, className: n } = e;
        return i.createElement(
          "svg",
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            className: Object(a.a)("SVGIcon_Button", "SVGIcon_Volume", n),
            x: "0px",
            y: "0px",
            width: "256px",
            height: "255.999px",
            viewBox: "0 0 256 255.999",
          },
          i.createElement(
            "g",
            { className: "Speaker" },
            i.createElement("path", {
              d:
                "M93.785,52.265c-0.946,0-2.357,0.63-3.304,1.577L40.284,98.022c-0.947,0.789-2.831,1.578-4.093,1.578H9.367 C8.104,99.6,7,100.706,7,101.967v52.069c0,1.264,1.104,2.367,2.367,2.367H36.19c1.262,0,3.146,0.632,4.093,1.578l50.197,44.181 c0.947,0.789,2.516,1.578,3.304,1.578s1.578-1.104,1.578-2.367V54.631C95.363,53.369,94.731,52.265,93.785,52.265z",
            })
          ),
          !t &&
            i.createElement(
              "g",
              { className: "SoundWaves" },
              i.createElement("path", {
                className: "SoundWavesHighest",
                d:
                  "M193.826,30.402c24.959,24.958,40.349,59.403,40.349,97.604c0,38.199-15.388,72.645-40.349,97.603l9.916,9.916 c28.067-28.067,44.263-64.673,44.263-107.521c0-42.847-16.196-79.455-44.263-107.521",
              }),
              i.createElement("path", {
                className: "SoundWavesHigh",
                d:
                  "M175.737,47.628l-8.924,8.924c18.271,18.27,29.536,43.484,29.536,71.448s-11.264,53.178-29.536,71.448l8.924,8.924 c20.546-20.546,33.234-49.008,33.234-80.374c0-31.366-12.688-59.829-33.234-80.374V47.628z",
              }),
              i.createElement("path", {
                className: "SoundWavesMed",
                d:
                  "M148.913,74.454l-8.925,8.925c11.488,11.488,18.491,27.236,18.491,44.624c0,17.388-7.054,33.281-18.491,44.575l8.875,8.975 c13.811-13.635,22.239-32.753,22.239-53.55c0-20.797-8.432-39.793-22.189-53.55V74.454z",
              }),
              i.createElement("path", {
                className: "SoundWavesLow",
                d:
                  "M121.989,101.229l-8.778,9.073c4.641,4.516,7.397,10.706,7.397,17.702c0,6.995-2.755,13.186-7.397,17.702l8.778,9.073 c7.035-6.844,11.243-16.413,11.243-26.775C133.232,117.643,129.024,108.075,121.989,101.229z",
              })
            ),
          i.createElement(
            "g",
            { className: "SoundX" },
            i.createElement("line", {
              fill: "none",
              strokeWidth: t ? 10 : 0,
              stroke: "#fff",
              strokeMiterlimit: "10",
              x1: "137",
              y1: "170.667",
              x2: "223.167",
              y2: "84.5",
            }),
            i.createElement("line", {
              fill: "none",
              strokeWidth: t ? 10 : 0,
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
      function S() {
        return i.createElement(
          "svg",
          { width: "50px", height: "25px", viewBox: "0 0 50 25" },
          i.createElement("path", {
            d:
              "M46 0H4C1.8 0 0 1.8 0 4v17c0 2.2 1.8 4 4 4h42c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM21 18.916V5.084L32.805 12 21 18.916z",
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
            className: "SVGIcon_Button SVGIcon_Play",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            className: "playTriangle",
            d:
              "M65.321,33.521c-11.274-6.615-20.342-1.471-20.342,11.52V210.96c0,12.989,9.068,18.135,20.342,11.521l137.244-82.348 c11.274-6.618,11.274-17.646,0-24.509L65.321,33.521z",
          })
        );
      }
      function O() {
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
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            d:
              "M44.979,219.364c0,3.3,2.7,6,6,6h49.753c3.3,0,6-2.7,6-6V36.5c0-3.3-2.7-6-6-6H50.979c-3.3,0-6,2.7-6,6V219.364z",
          }),
          i.createElement("path", {
            d:
              "M149.267,219.364c0,3.3,2.7,6,6,6h49.753c3.3,0,6-2.7,6-6V36.5c0-3.3-2.7-6-6-6h-49.753c-3.3,0-6,2.7-6,6V219.364z",
          })
        );
      }
      function M() {
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
            viewBox: "0 0 256 256",
          },
          i.createElement("polyline", {
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
      function B() {
        return i.createElement(
          "svg",
          {
            width: "25",
            height: "24",
            viewBox: "0 0 25 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          i.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M1.97014 2.77093H4.44345V3.97865C4.44345 5.04817 5.31099 5.91572 6.38052 5.91572C7.45004 5.91572 8.31699 5.04817 8.31699 3.97865V2.77093H16.6836V3.97865C16.6836 5.04817 17.5511 5.91572 18.6207 5.91572C19.6902 5.91572 20.5571 5.04817 20.5571 3.97865V2.77093H23.0293C24.1136 2.77093 25 3.65738 25 4.74167V21.4991C25 22.5834 24.1136 23.4698 23.0293 23.4698H1.97073C0.886445 23.4698 0 22.5834 0 21.4991V4.74167C0 3.65738 0.886445 2.77093 1.97073 2.77093H1.97014ZM23.5005 8.23961V21.4991C23.5005 21.7578 23.2879 21.9704 23.0293 21.9704H1.97073C1.71206 21.9704 1.49946 21.7583 1.49946 21.4991V8.23961H23.5005V8.23961Z",
            fill: "#717A81",
          }),
          i.createElement("path", {
            d:
              "M5.29335 1.08724C5.29335 0.486629 5.77998 0 6.38059 0C6.98061 0 7.46724 0.486629 7.46724 1.08724V3.97867C7.46724 4.57928 6.98061 5.06591 6.38059 5.06591C5.77998 5.06591 5.29335 4.57928 5.29335 3.97867V1.08724V1.08724Z",
            fill: "#717A81",
          }),
          i.createElement("path", {
            d:
              "M17.5329 1.08724C17.5329 0.486629 18.0195 0 18.6201 0C19.2201 0 19.7068 0.486629 19.7068 1.08724V3.97867C19.7068 4.57928 19.2201 5.06591 18.6201 5.06591C18.0195 5.06591 17.5329 4.57928 17.5329 3.97867V1.08724V1.08724Z",
            fill: "#717A81",
          })
        );
      }
      function D(e) {
        let t = e.highlightColor || "#00ccff",
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
            viewBox: "0 0 256 256",
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
                stopColor: t,
              }),
              i.createElement("stop", {
                id: "stop1",
                offset: "100%",
                stopColor: n,
              })
            ),
            i.createElement(
              "filter",
              { id: "f1", x: "0", y: "0", width: "200%", height: "200%" },
              i.createElement("feOffset", {
                result: "offOut",
                in: "SourceAlpha",
                dx: "20",
                dy: "20",
              }),
              i.createElement("feGaussianBlur", {
                result: "blurOut",
                in: "offOut",
                stdDeviation: "10",
              }),
              i.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "blurOut",
                mode: "normal",
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
            strokeDashoffset: "0.00",
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
            strokeDashoffset: "0.00",
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
            className: "SVGIcon_Button SVGIcon_Lock",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            className: "topLock",
            d:
              "M203.553,197.794c0,21.929-17.778,39.706-39.706,39.706H92.154c-21.929,0-39.706-17.777-39.706-39.706v-71.693 c0-21.928,17.778-39.706,39.706-39.706h71.692c21.928,0,39.706,17.778,39.706,39.706V197.794z M128.001,129.664 c-8.941,0-16.19,7.248-16.19,16.189c0,5.589,2.833,10.518,7.137,13.427c2.066,1.395,0.318,23.508,0.318,32.842 c0,2.292-0.078,3.65,8.734,3.65c8.676,0,8.75-1.221,8.75-3.654c0-9.348-1.708-31.469,0.368-32.886 c4.269-2.916,7.071-7.821,7.071-13.38C144.191,136.912,136.941,129.664,128.001,129.664z",
          }),
          i.createElement("path", {
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
      function T(e) {
        let t = "SVGIcon_Button SVGIcon_Throbber ";
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
              viewBox: "0 0 256 256",
            },
            i.createElement(
              "g",
              { className: s.a.partCircle },
              i.createElement("path", {
                className: s.a.roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895",
              }),
              i.createElement("path", {
                className: s.a.roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M201.432,101.166",
              }),
              i.createElement("path", {
                className: s.a.roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754",
              })
            ),
            i.createElement(
              "g",
              { className: s.a.mainOutline },
              i.createElement("path", {
                className: s.a.roundFill,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundOuterOutline,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundThrobber01,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundThrobber02,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundThrobber03,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundThrobber04,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundThrobber05,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundThrobber06,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundThrobber07,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundThrobber08,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundThrobber09,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundThrobber10,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundThrobber11,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundThrobber12,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundThrobber13,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundThrobber14,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: s.a.roundThrobber15,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d:
                  "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              })
            ),
            i.createElement(
              "g",
              { className: s.a.bottomCircle },
              i.createElement("path", {
                fill: "#ffffff",
                d:
                  "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579",
              })
            ),
            i.createElement(
              "g",
              { className: s.a.topCircle },
              i.createElement("circle", {
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
      function I(e) {
        return u.c.IN_GAMEPADUI
          ? i.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "SVGIcon_Button SVGIcon_Bell",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                e
              ),
              i.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d:
                  "M32 24V26H4V24L8 19V12C8 9.34784 9.05357 6.8043 10.9289 4.92893C12.8043 3.05357 15.3478 2 18 2C20.6522 2 23.1957 3.05357 25.0711 4.92893C26.9464 6.8043 28 9.34784 28 12V19L32 24ZM18 34C19.2396 33.9986 20.4483 33.6133 21.46 32.897C22.4718 32.1807 23.2368 31.1687 23.65 30H12.35C12.7632 31.1687 13.5282 32.1807 14.54 32.897C15.5517 33.6133 16.7604 33.9986 18 34Z",
                fill: "currentColor",
              })
            )
          : i.createElement(
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
              i.createElement("path", {
                d:
                  "M107.785,33.965c-34.875,8.972-60.644,40.618-60.644,78.308v53.903c0,4.965-4.035,8.99-8.975,8.99 c-9.929,0-17.978,8.066-17.978,17.971c0,9.924,8.059,17.969,18.013,17.969h179.598c9.948,0,18.014-8.066,18.014-17.969 c0-9.926-8.087-17.971-17.979-17.971c-4.956,0-8.975-3.993-8.975-8.99v-53.903c0-37.676-25.763-69.333-60.644-78.308v-9.281 c0-11.193-9.052-20.219-20.215-20.219c-11.143,0-20.215,9.052-20.215,20.219V33.965L107.785,33.965z M96.554,220.09h62.891 c0,17.366-14.079,31.445-31.445,31.445C110.633,251.535,96.554,237.458,96.554,220.09z",
              })
            );
      }
      function x(e) {
        return i.createElement(
          "svg",
          {
            style: { transform: `rotate(${e.angle}deg)` },
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
          i.createElement("polyline", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "128,247.688 128,8.313 181.061,61.674 ",
          }),
          i.createElement("polyline", {
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
      function k() {
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
            viewBox: "0 0 50 100",
          },
          i.createElement("polygon", {
            fill: "#ffffff",
            points:
              "0,0.093 0,25.702 24.323,50.026 0,74.349 0,99.955 49.929,50.026 ",
          })
        );
      }
      function L(e) {
        return i.createElement(
          "svg",
          {
            style: { transform: `rotate(${e.angle}deg)` },
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
          i.createElement("polyline", {
            className: "Arrow1",
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "23",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            points: "135.65,21.667 30.081,127.235 137.18,234.333 ",
          }),
          !e.singlearrow &&
            i.createElement("polyline", {
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
      function N() {
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
            viewBox: "0 0 256 256",
          },
          i.createElement("rect", {
            x: "24",
            y: "42.167",
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "18",
            strokeMiterlimit: "10",
            width: "208",
            height: "171.667",
          }),
          i.createElement("line", {
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
            viewBox: "0 0 256 256",
          },
          i.createElement("line", {
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
      function F() {
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
            viewBox: "0 0 256 256",
          },
          i.createElement("polyline", {
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "12",
            strokeMiterlimit: "10",
            points: "83,90.861 83,42.167 232,42.167 232,165.14 173,165.14 ",
          }),
          i.createElement("rect", {
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
      function A() {
        return i.createElement(
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
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "30",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d:
              "M229.809,147.639 c-9.178,47.863-51.27,84.027-101.809,84.027c-57.253,0-103.667-46.412-103.667-103.666S70.747,24.334,128,24.334 c34.107,0,64.368,16.472,83.261,41.895",
          }),
          i.createElement("polygon", {
            points: "147.639,108.361 245.755,10.166 245.834,108.361 ",
          })
        );
      }
      function P() {
        return i.createElement(
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
            viewBox: "0 0 256 256",
          },
          i.createElement(
            "g",
            { className: "base" },
            i.createElement("path", {
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "10",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d:
                "M216.773,43.909 l-7.399,177.589c-0.37,8.893-7.919,16.1-16.812,16.1H63.437c-8.914,0-16.442-7.24-16.812-16.1L39.226,43.909",
            })
          ),
          i.createElement(
            "g",
            { className: "lines" },
            i.createElement("path", {
              className: "line1",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "10",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M128,68.12v137.197",
            }),
            i.createElement("path", {
              className: "line2",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "10",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M83.613,68.12 l4.035,137.197",
            }),
            i.createElement("path", {
              className: "line3",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "10",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M172.387,68.12 l-4.035,137.197",
            })
          ),
          i.createElement(
            "g",
            { className: "lid" },
            i.createElement("path", {
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "10",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M27.121,38.577H228.88",
            }),
            i.createElement("path", {
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "10",
              d:
                "M87.648,38.577l4.319-10.796c2.072-5.181,8.292-9.379,13.84-9.379h44.386 c5.572,0,11.761,4.18,13.841,9.379l4.319,10.796",
            })
          )
        );
      }
      function G(e) {
        return i.createElement(
          "svg",
          {
            style: { transform: `rotate(${e.angle}deg)` },
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
          i.createElement("polygon", {
            points: "13.913,141 128,59 242.087,141 ",
            fill: "#ffffff",
          })
        );
      }
      function W(e) {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            style: { transform: `scaleX(${e.bFlipHorizontal ? -1 : 1})` },
            className: "SVGIcon_Button SVGIcon_MediaControls",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            className: "Arrow",
            d:
              "M77.003,54.763h32.784c3.794,0,9.113,2.181,11.814,4.848l63.604,62.773c2.703,2.667,2.727,7.054,0.05,9.748 l-63.705,64.206c-2.674,2.693-7.968,4.898-11.763,4.898H77.003",
          }),
          i.createElement("polyline", {
            className: "preArrowBox",
            opacity: e.bHidePreArrow ? "0" : "1",
            points: "6.833,54.763 46.71,54.763 46.71,201.236 6.833,201.236 \t",
          }),
          i.createElement("polyline", {
            className: "jumpAheadBox",
            opacity: e.bShowJumpAheadBox ? "1" : "0",
            points:
              "6.833,54.764 86.386,54.764 86.386,201.236 6.833,201.236 \t",
          }),
          i.createElement("polyline", {
            className: "postArrowBox",
            opacity: e.bHidePostArrow ? "0" : "1",
            points:
              "209.29,54.763 249.167,54.763 249.167,201.236 209.29,201.236 \t",
          })
        );
      }
      function U(e) {
        const t = Object(a.a)(
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
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            fill: "#ffffff",
            d:
              "M127.374,5.355c-64.404,0-117.167,49.661-122.18,112.77l65.712,27.171 c5.567-3.808,12.293-6.032,19.53-6.032c0.649,0,1.294,0.017,1.934,0.051l29.226-42.354c0-0.202-0.005-0.399-0.005-0.598 c0-25.496,20.74-46.241,46.237-46.241c25.498,0,46.238,20.745,46.238,46.241c0,25.494-20.74,46.242-46.238,46.242 c-0.352,0-0.698-0.011-1.047-0.021l-41.68,29.741c0.022,0.546,0.041,1.095,0.041,1.644c0,19.141-15.569,34.707-34.706,34.707 c-16.796,0-30.843-11.99-34.026-27.869l-46.993-19.43c14.55,51.464,61.831,89.189,117.957,89.189 c67.713,0,122.604-54.893,122.604-122.604C249.979,60.244,195.086,5.355,127.374,5.355",
          }),
          i.createElement("path", {
            fill: "#ffffff",
            d:
              "M82.026,191.387l-15.061-6.22c2.67,5.56,7.285,10.208,13.418,12.767 c13.25,5.521,28.531-0.771,34.054-14.027c2.674-6.416,2.694-13.5,0.04-19.93c-2.646-6.431-7.64-11.451-14.063-14.129 c-6.371-2.647-13.196-2.552-19.198-0.291l15.561,6.437c9.776,4.073,14.396,15.299,10.324,25.071 C103.031,190.841,91.801,195.464,82.026,191.387",
          }),
          i.createElement("path", {
            fill: "#ffffff",
            d:
              "M198.639,96.359c0-16.987-13.82-30.809-30.809-30.809c-16.987,0-30.813,13.821-30.813,30.809 c0,16.988,13.824,30.806,30.813,30.806S198.639,113.347,198.639,96.359 M144.736,96.306c0-12.783,10.363-23.142,23.145-23.142 c12.783,0,23.145,10.359,23.145,23.142c0,12.783-10.36,23.142-23.145,23.142C155.1,119.447,144.736,109.089,144.736,96.306",
          })
        );
      }
      function z() {
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
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            className: "frontGuy",
            fill: "#666666",
            d:
              "M181.732,53.151c-17.255,0-31.321,13.316-31.321,32.634v25.132 c0,18.005,24.006,21.006,24.382,21.381c-10.691,2.813-30.947,8.252-40.888,15.566c-8.252,6.003-11.44,18.005-13.128,22.882 c-0.75,2.063-1.688,5.064-1.688,7.127c0,0,0,9.94,0,19.881s12.941,16.505,18.005,16.505h89.65c4.877,0,18.006-5.627,18.006-16.505 s0-19.881,0-19.881c0-2.251-0.938-5.627-1.688-7.689c-4.313-10.878-4.688-16.316-13.315-22.319 c-9.941-6.939-30.009-12.19-40.512-15.004c0.374-0.563,24.193-4.127,24.193-22.131V85.785 C213.053,66.467,198.986,53.151,181.732,53.151L181.732,53.151z",
          }),
          i.createElement("path", {
            className: "backGuy",
            fill: "rgb(144, 153, 161)",
            d:
              "M84.204,34.396c-20.068,0-36.385,15.38-36.385,38.074v29.258c0,20.818,27.945,24.382,28.32,24.944 c-12.378,3.189-36.01,9.565-47.638,18.006c-9.753,7.127-13.504,21.006-15.379,26.632c-0.75,2.251-1.876,6.002-1.876,8.253  c0,0,0,11.44,0,23.257c0,11.815,15.004,19.13,20.819,19.13h104.279c5.814,0,20.818-6.564,20.818-19.13c0-12.566,0-23.257,0-23.257 c0-2.438-1.125-6.564-2.063-8.815c-5.063-12.566-5.438-18.942-15.566-26.069c-11.628-8.065-34.885-14.067-47.076-17.443 c0.375-0.563,28.133-4.876,28.133-25.695V72.469C120.59,49.775,104.272,34.396,84.204,34.396L84.204,34.396z",
          })
        );
      }
      function H() {
        return i.createElement(
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
          i.createElement(
            "g",
            null,
            i.createElement("path", {
              d:
                "M33,5C18.7,5,7.1,16.6,7.1,30.9c0,5.2,1.5,10.1,4.2,14.1c-0.6,3.7-4.5,10.5-6.2,13.5c-1.3,2.2,11.4-3.8,16.3-4.5c3.5,1.8,7.5,2.8,11.7,2.8c14.3,0,25.9-11.6,25.9-25.9S47.3,5,33,5z",
            })
          )
        );
      }
      function V() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_5",
            className: "SVGIcon_Button SVGIcon_Globe",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 64 64",
          },
          i.createElement(
            "g",
            null,
            i.createElement("path", {
              d:
                "M32.5,5C17.9,5,6,16.9,6,31.5C6,46.1,17.9,58,32.5,58S59,46.1,59,31.5C59,16.9,47.1,5,32.5,5 M32.5,54.7c-1.2,0-2.5-0.1-3.7-0.3c-1.1-1.1-2.1-2.8-3-4.8c-0.8-1.8-1.4-3.8-2-6c2.7-0.3,5.6-0.5,8.6-0.5c3,0,5.9,0.2,8.6,0.5c-0.5,2.2-1.2,4.2-2,6c-0.9,2-1.9,3.7-3,4.8C35,54.6,33.7,54.7,32.5,54.7 M32.5,41.4c-3.2,0-6.2,0.2-9,0.5c-0.6-3-0.9-6.2-1-9.6h19.9c0,3.4-0.4,6.6-1,9.6C38.7,41.6,35.7,41.4,32.5,41.4 M32.5,8.3c1.2,0,2.5,0.1,3.7,0.3c1.1,1.1,2.1,2.8,3,4.8c0.8,1.8,1.4,3.8,2,6c-2.7,0.3-5.6,0.5-8.6,0.5c-3,0-5.9-0.2-8.6-0.5c0.5-2.2,1.2-4.2,2-6c0.9-2,1.9-3.7,3-4.8C30,8.4,31.3,8.3,32.5,8.3 M32.5,21.6c3.2,0,6.2-0.2,9-0.5c0.6,3,0.9,6.2,1,9.6H22.6c0-3.4,0.4-6.6,1-9.6C26.3,21.4,29.3,21.6,32.5,21.6 M44.1,30.7c0-3.5-0.4-6.8-1-9.8c3.4-0.5,6.4-1.1,8.8-2c2.3,3.5,3.6,7.5,3.7,11.8H44.1z M20.9,30.7H9.3c0.1-4.2,1.4-8.3,3.7-11.8c2.5,0.8,5.5,1.5,8.8,2C21.3,23.9,21,27.2,20.9,30.7 M20.9,32.3c0,3.5,0.4,6.8,1,9.8c-3.4,0.5-6.4,1.1-8.8,2c-2.3-3.5-3.6-7.5-3.7-11.8H20.9z M44.1,32.3h11.6c-0.1,4.2-1.4,8.3-3.7,11.8c-2.5-0.8-5.5-1.5-8.8-2C43.7,39.1,44,35.8,44.1,32.3 M51,17.5c-0.1,0-0.2,0.1-0.3,0.1c-2.3,0.7-5,1.3-7.9,1.7c-0.9-4.1-2.3-7.6-4-10.1c3.8,1.1,7.3,3.1,10.2,5.9C49.6,15.9,50.3,16.6,51,17.5 M26.3,9.2c-1.7,2.5-3.1,6-4,10.1c-2.9-0.4-5.6-1-7.9-1.7c-0.1,0-0.2-0.1-0.3-0.1c0.6-0.8,1.3-1.6,2.1-2.4C19,12.2,22.5,10.2,26.3,9.2 M14,45.5c0.1,0,0.2-0.1,0.3-0.1c2.3-0.7,5-1.3,7.9-1.7c0.9,4.1,2.3,7.6,4,10.1c-3.8-1.1-7.3-3.1-10.2-5.9C15.4,47.1,14.7,46.4,14,45.5 M38.7,53.8c1.7-2.5,3.1-6,4-10.1c2.9,0.4,5.6,1,7.9,1.7c0.1,0,0.2,0.1,0.3,0.1c-0.6,0.8-1.3,1.6-2.1,2.4C46,50.8,42.5,52.8,38.7,53.8",
            })
          )
        );
      }
      function K() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_5",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 64 64",
          },
          i.createElement(
            "g",
            null,
            i.createElement("path", {
              d:
                "M40.6,32.7l15.1-15.1c2.6-2.6,2.6-6.7,0-9.3c-2.6-2.6-6.7-2.6-9.3,0L31.3,23.4L16.2,8.3c-2.6-2.6-6.7-2.6-9.3,0c-2.6,2.6-2.6,6.7,0,9.3L22,32.7L6.9,47.8c-2.6,2.6-2.6,6.7,0,9.3c1.3,1.3,3,1.9,4.7,1.9s3.4-0.6,4.7-1.9L31.3,42l15.1,15.1c1.3,1.3,3,1.9,4.7,1.9s3.4-0.6,4.7-1.9c2.6-2.6,2.6-6.7,0-9.3L40.6,32.7z",
            })
          )
        );
      }
      function q() {
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
            viewBox: "0 0 256 256",
          },
          i.createElement(
            "g",
            { className: "leftarrow", opacity: "0" },
            i.createElement("polygon", {
              points: "127.817,4.403 4,128 127.817,251.598",
            })
          ),
          i.createElement(
            "g",
            { className: "rightarrow", opacity: "0" },
            i.createElement("polygon", {
              points: "127.816,4.403 251.633,128 127.816,251.598",
            })
          ),
          i.createElement(
            "g",
            { className: "grabber" },
            i.createElement("polygon", {
              points:
                "145.692,22.132 145.692,234.361 127.817,251.598 110.307,234.361 110.307,22.132 127.817,4.403",
            })
          )
        );
      }
      function Y() {
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
            viewBox: "0 0 256 256",
          },
          i.createElement("polygon", {
            className: "pointer",
            points:
              "128,154.979 46.374,230.548 46.374,253.333 209.626,253.333 209.626,230.548 \t",
          }),
          i.createElement("rect", {
            className: "line",
            x: "116.271",
            y: "3.168",
            width: "23.459",
            height: "137.332",
          })
        );
      }
      function X() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_ShowBothChats",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("circle", {
            opacity: "0",
            fill: "#FFFFFF",
            strokeWidth: "0",
            cx: "166.241",
            cy: "161.906",
            r: "75.259",
          }),
          i.createElement("polyline", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "8",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            points:
              "92.367,155.634 51.311,183 51.311,150.296 23.834,150.296 23.834,19.473 140.5,19.473 140.5,91.5",
          }),
          i.createElement("line", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "8",
            strokeMiterlimit: "10",
            x1: "48.529",
            y1: "82.167",
            x2: "113.379",
            y2: "82.167",
          }),
          i.createElement("line", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "8",
            strokeMiterlimit: "10",
            x1: "48.529",
            y1: "113.167",
            x2: "113.379",
            y2: "113.167",
          }),
          i.createElement("line", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "8",
            strokeMiterlimit: "10",
            x1: "48.529",
            y1: "51.167",
            x2: "99.138",
            y2: "51.167",
          }),
          i.createElement("path", {
            d:
              "M166.241,82.167c-43.933,0-79.74,35.807-79.74,79.74c0,43.932,35.808,79.739,79.74,79.739 c43.932,0,79.739-35.808,79.739-79.739C245.98,117.975,210.173,82.167,166.241,82.167 M166.241,231.717 c-3.611,0-7.522-0.301-11.134-0.902c-3.31-3.311-6.318-8.426-9.027-14.444c-2.407-5.416-4.212-11.434-6.018-18.054  8.124-0.902,16.851-1.505,25.878-1.505c9.026,0,17.753,0.603,25.877,1.505c-1.504,6.62-3.61,12.638-6.018,18.054 c-2.708,6.019-5.718,11.134-9.027,14.444C173.764,231.416,169.852,231.717,166.241,231.717 M166.241,191.696 c-9.629,0-18.656,0.602-27.082,1.505c-1.805-9.027-2.708-18.656-3.009-28.887h59.88c0,10.23-1.203,19.859-3.009,28.887 C184.896,192.298,175.87,191.696,166.241,191.696 M166.241,92.097c3.61,0,7.522,0.301,11.133,0.903 c3.311,3.31,6.319,8.425,9.027,14.443c2.407,5.416,4.213,11.435,6.019,18.055c-8.125,0.902-16.851,1.504-25.878,1.504  s-17.753-0.602-25.878-1.504c1.505-6.62,3.611-12.639,6.019-18.055c2.708-6.018,5.717-11.133,9.026-14.443 \tC158.719,92.398,162.63,92.097,166.241,92.097 M166.241,132.117c9.629,0,18.655-0.602,27.081-1.504 \tc1.806,9.026,2.708,18.655,3.009,28.887h-59.88c0-10.231,1.204-19.86,3.01-28.887 \tC147.585,131.516,156.612,132.117,166.241,132.117 M201.146,159.5c0-10.532-1.203-20.462-3.009-29.488 c10.23-1.505,19.258-3.311,26.479-6.019c6.921,10.531,10.833,22.567,11.134,35.507H201.146z M131.336,159.5H96.432 c0.301-12.639,4.212-24.976,11.133-35.507c7.522,2.407,16.55,4.514,26.479,6.019C132.54,139.038,131.637,148.968,131.336,159.5 M131.336,164.314c0,10.531,1.204,20.461,3.01,29.488c-10.231,1.505-19.259,3.31-26.48,6.018 c-6.921-10.531-10.832-22.567-11.133-35.506H131.336z M201.146,164.314h34.905c-0.301,12.638-4.213,24.975-11.134,35.506 c-7.522-2.406-16.55-4.513-26.479-6.018C199.942,184.775,200.845,174.846,201.146,164.314 M221.908,119.78 c-0.301,0-0.602,0.301-0.903,0.301c-6.92,2.106-15.045,3.912-23.771,5.115c-2.708-12.337-6.921-22.868-12.036-30.391 c11.434,3.31,21.966,9.328,30.691,17.753C217.695,114.966,219.802,117.072,221.908,119.78 M147.585,94.806 c-5.115,7.522-9.328,18.054-12.036,30.391c-8.727-1.203-16.851-3.009-23.771-5.115c-0.301,0-0.602-0.301-0.902-0.301 c1.805-2.407,3.911-4.814,6.318-7.222C125.619,103.833,136.15,97.814,147.585,94.806 M110.574,204.033 c0.301,0,0.602-0.301,0.902-0.301c6.921-2.106,15.045-3.912,23.771-5.115c2.708,12.337,6.921,22.869,12.036,30.392 c-11.435-3.311-21.966-9.328-30.692-17.754C114.786,208.848,112.68,206.742,110.574,204.033 M184.896,229.009 c5.116-7.522,9.329-18.055,12.036-30.392c8.727,1.203,16.852,3.009,23.771,5.115c0.301,0,0.603,0.301,0.903,0.301 c-1.806,2.407-3.912,4.814-6.319,7.222C206.863,219.981,196.331,226,184.896,229.009",
          })
        );
      }
      function $() {
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
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            fill: "currentColor",
            d:
              "M213.771,68.659c-4.108-7.066-46.007-7.231-49.293-7.231H128H91.522c-3.286,0-45.186,0.165-49.293,7.231 c-19.555,29.248-27.385,100.263-27.276,104.01c0.238,8.294,2.11,24.583,16.595,35.162c9.201,6.72,22.183,8.709,29.083,3.614 c4.989-3.682,11.995-19.224,19.061-32.204c7.064-12.981,9.202-11.174,12.98-12.159c3.78-0.986,36.066-0.74,36.066-0.74 s30.809-0.247,34.588,0.74c3.777,0.985,5.915-0.822,12.98,12.159c7.064,12.98,14.07,28.522,19.061,32.204 c6.9,5.095,19.882,3.106,29.083-3.614c14.485-10.58,16.356-26.868,16.595-35.162C241.154,168.922,233.325,97.906,213.771,68.659z M67.251,128.14c-14.974,0-27.112-12.137-27.112-27.111c0-14.975,12.137-27.112,27.112-27.112 c14.973,0,27.111,12.137,27.111,27.112C94.362,116.003,82.224,128.14,67.251,128.14z M188.749,128.14 c-14.974,0-27.111-12.137-27.111-27.111c0-14.975,12.138-27.112,27.111-27.112c14.973,0,27.111,12.137,27.111,27.112 C215.86,116.003,203.722,128.14,188.749,128.14z",
          })
        );
      }
      function Z(e) {
        const { className: t } = e;
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: Object(a.a)("SVGIcon_Button", "SVGIcon_MobilePhone", t),
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            d:
              "M165.693,45.186H91.368c-7.963,0-14.41,6.447-14.41,14.41V210.9c0,7.964,6.447,14.41,14.41,14.41h74.134 c7.965,0,14.41-6.447,14.41-14.41V59.596C180.102,51.633,173.657,45.186,165.693,45.186z M113.172,57.509h30.717 c1.707,0,3.223,1.327,3.223,3.224c0,1.896-1.328,3.223-3.223,3.223h-30.717c-1.707,0-3.223-1.328-3.223-3.223 C109.949,58.837,111.465,57.509,113.172,57.509z M128.529,213.554c-4.551,0-8.152-3.603-8.152-8.153c0-4.55,3.604-8.152,8.152-8.152 s8.151,3.603,8.151,8.152C136.682,209.761,133.081,213.554,128.529,213.554z M169.105,186.819h-81.15V74.384h81.15V186.819 L169.105,186.819z",
          })
        );
      }
      function J() {
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
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            d:
              "M224.389,62.411H31.613c-10.147,0-18.36,8.214-18.36,18.36v94.453c0,10.147,8.215,18.359,18.36,18.359h192.775 c10.146,0.241,18.358-7.968,18.358-18.116V80.771C242.747,70.625,234.534,62.411,224.389,62.411z M92.317,175.026H71.646 L35.472,79.832h21.895l25.022,72.484l24.343-72.484h21.895L92.317,175.026z M195.264,175.026l-19.175-32.095h-2.176h-14.279 v32.095h-19.991V79.832h35.63c13.056,0,22.664,2.607,28.831,7.819c6.164,5.215,9.247,12.49,9.247,21.827 c0,7.343-1.61,13.463-4.828,18.359c-3.219,4.896-7.729,8.614-13.531,11.151l22.575,36.038H195.264z",
          }),
          i.createElement("path", {
            d:
              "M187.784,100.298c-2.812-2.312-7.391-3.468-13.735-3.468h-14.415v28.966h15.639c5.257,0,9.36-1.336,12.308-4.012 c2.945-2.673,4.42-6.368,4.42-11.083C192,106.078,190.593,102.61,187.784,100.298z",
          })
        );
      }
      function Q() {
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
            viewBox: "0 0 128 255",
          },
          i.createElement("rect", {
            className: "screen",
            x: "7.756",
            y: "5.518",
            fill: "#292D33",
            width: "112.144",
            height: "234.357",
          }),
          i.createElement("path", {
            className: "frame",
            fill: "#3C414B",
            d:
              "M40.334,15.72h47.237c3.957,0,7.164-3.259,7.164-7.28c0-1.113,0.889-2.017,1.984-2.017h9.746 c7.417,0,13.432,6.108,13.432,13.646v206.156c0,7.538-6.015,13.647-13.431,13.647H21.459c-7.417,0-13.429-6.109-13.429-13.647 V20.071c0-7.536,6.013-13.646,13.429-13.646h9.728c1.096,0,1.983,0.903,1.983,2.017C33.17,12.461,36.377,15.72,40.334,15.72 M107.057,0.001H20.87c-9.922,0-17.965,8.174-17.965,18.256v217.505c0,10.082,8.043,18.256,17.965,18.256h86.188 c9.923,0,17.966-8.174,17.966-18.256V18.257C125.022,8.175,116.979,0.001,107.057,0.001",
          }),
          i.createElement("path", {
            fill: "#3C414B",
            d:
              "M0.826,33.349C0.369,33.349,0,33.725,0,34.189v7.616c0,0.464,0.37,0.84,0.826,0.84s0.827-0.376,0.827-0.84 v-7.617C1.653,33.725,1.283,33.349,0.826,33.349",
          }),
          i.createElement("path", {
            fill: "#3C414B",
            d:
              "M0.826,51.56C0.369,51.56,0,51.936,0,52.4v16.8c0,0.465,0.37,0.841,0.826,0.841s0.827-0.376,0.827-0.841 V52.4C1.653,51.936,1.283,51.56,0.826,51.56",
          }),
          i.createElement("path", {
            fill: "#3C414B",
            d:
              "M0.826,75.304C0.369,75.304,0,75.68,0,76.144v15.904c0,0.464,0.37,0.84,0.826,0.84s0.827-0.376,0.827-0.84 V76.144C1.653,75.68,1.283,75.304,0.826,75.304",
          }),
          i.createElement("path", {
            fill: "#3C414B",
            d:
              "M127.617,58.056c-0.457,0-0.827,0.376-0.827,0.84v27.328c0,0.464,0.37,0.84,0.827,0.84 c0.456,0,0.826-0.376,0.826-0.84V58.896C128.443,58.432,128.073,58.056,127.617,58.056",
          })
        );
      }
      function ee() {
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
            viewBox: "0 0 256 256",
          },
          i.createElement("polygon", {
            fill: "#3C414B",
            points: "3.167,48.809 127.22,128 252.833,48.809 ",
          }),
          i.createElement("polygon", {
            fill: "#3C414B",
            points: "252.833,203.68 252.833,55.439 185.151,99.131 ",
          }),
          i.createElement("polygon", {
            fill: "#3C414B",
            points:
              "247.958,207.191 180.47,101.472 128.001,134.24 75.142,101.472 7.849,207.191 ",
          }),
          i.createElement("polygon", {
            fill: "#3C414B",
            points: "3.167,203.682 3.167,55.441 70.851,99.132 ",
          })
        );
      }
      function te() {
        return i.createElement(
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
          i.createElement("path", {
            d:
              "M250.151,128.021c0,67.418-54.604,122.022-122.022,122.022S6.107,195.439,6.107,128.021C6.107,60.604,60.712,6,128.129,6 S250.151,60.604,250.151,128.021z M105.799,192.389c54.117,0,83.707-44.842,83.707-83.707c0-1.282,0-2.563-0.062-3.783 c5.736-4.148,10.739-9.335,14.705-15.252c-5.247,2.318-10.922,3.905-16.901,4.637c6.103-3.661,10.738-9.396,12.936-16.29 c-5.675,3.355-11.959,5.796-18.67,7.138c-5.369-5.734-12.995-9.273-21.477-9.273c-16.228,0-29.406,13.179-29.406,29.407 c0,2.318,0.243,4.576,0.793,6.711c-24.466-1.22-46.125-12.934-60.646-30.75c-2.501,4.332-3.965,9.396-3.965,14.765 c0,10.189,5.186,19.218,13.117,24.465c-4.819-0.122-9.334-1.464-13.3-3.661c0,0.122,0,0.244,0,0.366 c0,14.275,10.128,26.113,23.611,28.857c-2.44,0.672-5.064,1.039-7.748,1.039c-1.892,0-3.723-0.184-5.553-0.551 c3.722,11.714,14.581,20.195,27.455,20.44c-10.067,7.868-22.757,12.566-36.546,12.566c-2.379,0-4.697-0.122-7.016-0.427 C73.707,187.507,89.204,192.389,105.799,192.389",
          })
        );
      }
      function ne() {
        return i.createElement(
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
          i.createElement("path", {
            d:
              "M28.176,8.026L11.763,49.97v171.427h58.358v31.003h32.826l31.003-31.003h47.414l63.829-63.829V8.026H28.176z M223.311,146.625l-36.474,36.474h-58.359l-31.002,31.003v-31.003H48.237V29.91h175.074V146.625z M186.837,71.855v63.829h-21.885 V71.855H186.837z M128.478,71.855v63.829h-21.883V71.855H128.478z",
          })
        );
      }
      function re() {
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
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M236.979,138.059c0.548,0.078,6.91,0.101,7.772,0.032 c1.215-0.095,1.396,0.068,1.388,0.708c-0.01,0.397,0.012,3.039-2.365,7.32c-3.301,5.948-12.079,10.436-12.55,10.672 c-0.47,0.233-0.53,0.484-0.136,0.75c0.434,0.295,8.068,1.454,9.084,1.611c1.017,0.154,0.637,1.001,0.637,1.001 s-0.704,2.621-2.895,5.36c-2.189,2.738-9.311,6.123-8.583,6.123c0.731,0,7.187,0.159,6.181,1.422 c-3.019,3.786-13.603,9.528-18.43,13.813c-13.388,11.885-13.217,12.864-15.52,15.09c-0.983-3.298-3.02-12.658-3.02-12.658 l-6.105-11.467c4.413,0.18,6.364,0.081,8.952,0.081c9.214,0,17.525-2.185,22.234-5.841l2.371-1.843l-2.911-0.728 c-2.131-0.528-7.121-1.782-11.896-2.979c2.184-0.104,10.803-1.299,14.413-5.339c0.136-0.151,0.276-0.321,0.406-0.494l1.245-1.664 l-2.404-0.735c-2.607-0.799-5.948-1.682-8.517-2.335c3.173-1.572,7.585-3.942,10.048-6.088c4.83-4.203,7.226-9.709,7.322-9.943 l0.9-2.098l-10.772,0.318c1.503-1.483,3.218-3.197,3.939-3.991c1.43-1.571,4.053-6.221,4.198-9.896l0.072-1.787l-1.763,0.288 c-1.979,0.322-5.301,1.279-8.179,2.173c2.025-2.193,4.296-4.767,5.46-6.484c2.687-3.964,2.76-8.371,2.597-12.916l-0.104-2.881 l-2.261,1.79c-2.559,2.028-7.595,5.031-11.097,7.047c1.538-3.644,3.54-8.752,3.813-11.276c0.5-4.681-0.248-10.196-0.248-10.196 l-10.76,9.394c0.885-1.953,1.684-4.013,2.117-5.832c1.735-7.29,0.055-17.892-0.021-18.338l-0.452-2.807l-7.777,7.739 c0.722-3.535,1.465-8.253,1.23-11.789c-0.426-6.321-2.278-10.517-2.359-10.694l-1.01-2.251l-6.465,8.577 c0.231-4.285,0.27-10.24-0.948-13.547c-1.934-5.262-3.651-8.007-3.723-8.121l-1.232-1.958l-3.057,4.85 c0.018-2.967-0.11-6.475-0.69-8.68c-1.202-4.543-2.825-6.396-3.002-6.592l-1.325-1.433l-1.623,2.705 c-0.278-3.19-1.112-7.084-3.343-9.478l-0.814-0.872l-1.012,0.623c-0.327,0.201-0.714,0.497-1.104,0.823 c-0.154-1.135-0.365-2.451-0.639-3.691c0.563-4.733,1.186-10.03,1.206-10.452c0.027-0.547,0.274-0.767,1.017-0.391 c0.898,0.452,3.156,2.064,5.187,6.133c2.036,4.067,3.132,11.324,3.117,12.044c-0.009,0.383,0.291,0.757,0.438,0.151 c0.145-0.607,0.478-7.591,0.623-8.312c0.081-0.383,0.199-0.484,0.737-0.212c0.496,0.249,2.959,2.181,4.899,6.463 c1.179,2.599,1.634,11.946,1.574,12.653c-0.106,1.278,0.313,0.891,0.339,0.883c-0.009,0.013-0.025,0.04-0.03,0.049 c0.03-0.041,0.036-0.049,0.03-0.049c0.573-0.841,4.21-8.99,4.519-9.377c0.313-0.39,0.521-0.395,0.835,0.002 c0.262,0.33,2.095,1.717,4.049,10.088c1.902,8.135,1.949,11.542,1.848,12.682c-0.08,0.86,0.339,0.993,0.731,0.524 c0.389-0.47,5.104-9.201,5.497-9.515c0.389-0.313,0.613-0.309,0.927,0.161c0.312,0.469,2.718,4.762,3.684,11.448 c0.861,5.947,0.608,13.599,0.375,14.381c-0.235,0.782-0.135,1.077,0.493,0.53c0.623-0.548,10.299-8.412,11.004-9.038 c0.703-0.627,1.18-0.65,1.34-0.046c0.172,0.654,0.822,8.654,0.275,15.225c-0.549,6.571-2.626,12.752-2.94,13.145 c-0.312,0.391,0.087,0.712,0.478,0.555c0.394-0.157,11.902-10.018,12.645-10.402c0.711-0.367,1.043,0.005,1.105,0.507 c0.068,0.544,0.966,3.098-0.419,11.269c-0.959,5.65-3.54,11.876-3.855,12.033c-0.313,0.157-0.077,0.336,0.234,0.259 c0.315-0.079,8.324-3.488,8.872-3.567c0.546-0.079,0.671,0.339,0.514,0.808c-0.158,0.469-0.458,6.273-2.534,11.639 c-2.603,6.732-6.056,11.001-6.056,11.001s-0.252,0.519,0.217,0.519s9.266-0.186,9.813-0.263c0.547-0.079,0.627,0.156,0.547,0.704 c-0.077,0.547,0.858,9.116-8.624,14.601C236.524,137.734,236.432,137.979,236.979,138.059z M174.473,24.823 c1.981,3.34,2.018,9.248,1.836,11.469l-0.52,6.238l5.25-8.744c0.395,0.843,0.85,2.003,1.25,3.524 c1.02,3.877,0.422,13.082,0.417,13.173l-0.384,5.752l6.435-10.212c0.628,1.27,1.45,3.097,2.32,5.459 c1.466,3.983,0.772,13.806,0.381,17.257l-0.602,5.308l9.568-12.69c0.493,1.707,1.058,4.21,1.259,7.227 c0.39,5.821-2.272,15.731-2.299,15.83l-1.428,5.26l11.125-11.068c0.377,3.586,0.772,9.774-0.304,14.302 c-1.2,5.057-5.778,12.588-5.823,12.664l-1.806,3.992l16.878-14.09c-0.116,1.366-0.262,2.944-0.423,4.435 c-0.312,2.935-3.954,11.389-5.335,14.399l-1.827,4.002l3.856-2.115c0.381-0.208,8.027-4.41,12.979-7.778 c-0.039,3.484-0.537,6.042-2.139,8.4c-2.189,3.234-9.05,10.198-9.118,10.268l-4.352,4.408l5.861-2.004 c0.08-0.025,6.868-2.34,11.188-3.41c-0.675,2.445-2.208,5.125-3.11,6.118c-1.319,1.449-6.429,6.429-6.48,6.482l-2.682,2.614 l13.475-0.404c-1.06,1.837-2.89,4.549-5.457,6.783c-3.727,3.244-12.956,7.341-13.048,7.383l-3.952,1.746l4.201,1.008 c0.062,0.015,5.637,1.354,10.266,2.67c-3.412,2.191-9.291,3.081-10.948,3.138c-2.06,0.072-11.075,0.125-11.075,0.125l-11.51,0.069 l11.162,2.804c0,0,12.587,3.164,19.486,4.894c-4.398,2.216-10.717,3.493-17.657,3.493c-3.102,0-10.335-0.284-15.048-0.483 c4.064,6.069,7.041,11.004,7.992,13.681c2.813,7.915,6.777,28.269,6.889,48.907c0.039,6.572-1.081,11.649-9.022,11.649 c-0.288,0-0.597-0.038-0.908-0.092c-1.846,0.339-4.351,0.595-5.438-0.095c-1.805-1.149-3.163-2.627-3.544-3.957 c-0.383-1.334-1.146-9.374-3.106-20.675c-1.92-11.046-4.038-19.431-4.237-19.525c-1.535-0.731-9.358-18.45-9.358-18.45 l-37.23-47.615c0,0-20.737,23.917-37.455,47.8c-0.867,1.235-5.994,11.251-9.275,17.989c-0.212,0.437-0.181,0.475-0.281,0.808 c-0.604,2.015-2.396,9.525-4.039,18.994c-1.962,11.301-2.725,19.341-3.105,20.675c-0.384,1.33-1.74,2.808-3.546,3.957 c-1.085,0.689-3.592,0.434-5.437,0.095c-0.313,0.054-0.621,0.092-0.909,0.092c-7.941,0-9.061-5.077-9.024-11.649 c0.114-20.639,4.078-40.992,6.892-48.907c0.95-2.677,3.926-7.611,7.993-13.681c-4.714,0.199-11.946,0.483-15.051,0.483 c-6.939,0-13.26-1.277-17.653-3.493c6.896-1.729,19.486-4.894,19.486-4.894l11.159-2.804l-11.508-0.069 c0,0-9.019-0.053-11.076-0.125c-1.66-0.057-7.537-0.946-10.949-3.138c4.629-1.315,10.202-2.655,10.264-2.67l4.201-1.008l-3.95-1.746 c-0.094-0.042-9.324-4.139-13.049-7.383c-2.566-2.234-4.397-4.946-5.458-6.783l13.477,0.404l-2.684-2.614 c-0.05-0.054-5.16-5.033-6.48-6.482c-0.9-0.993-2.436-3.673-3.108-6.118c4.319,1.069,11.108,3.384,11.188,3.41l5.861,2.004 l-4.352-4.408c-0.069-0.069-6.928-7.033-9.12-10.268c-1.601-2.358-2.099-4.916-2.139-8.4c4.953,3.368,12.601,7.57,12.98,7.778 l3.858,2.115l-1.829-4.002c-1.379-3.011-5.022-11.465-5.334-14.399c-0.161-1.491-0.305-3.068-0.421-4.435l16.877,14.09l-1.806-3.992 c-0.046-0.076-4.622-7.607-5.821-12.664c-1.078-4.528-0.682-10.716-0.307-14.302L58.57,89.672l-1.426-5.26 c-0.025-0.098-2.688-10.008-2.3-15.83c0.203-3.017,0.767-5.52,1.26-7.227l9.566,12.69l-0.601-5.308 c-0.391-3.451-1.083-13.274,0.381-17.257c0.871-2.362,1.693-4.189,2.32-5.459l6.435,10.212l-0.382-5.752 c-0.006-0.091-0.604-9.295,0.416-13.173c0.401-1.521,0.854-2.681,1.251-3.524l5.249,8.744l-0.52-6.238 c-0.181-2.221-0.144-8.129,1.836-11.469c0.596,0.522,1.248,1.148,1.67,1.575l2.215,2.245l0.276-3.142 c0.162-1.838,0.783-7.003,1.703-8.813c1.342-2.635,4.69-3.91,7.104-4.505c-6.691,13.614-36.889,77.59-36.889,122.937 c0,23.658,16.206,23.931,16.368,23.931c4.881,0,6.947-7.914,6.947-11.063V133.45c0-2.744,1.148-2.744,1.835-2.744 c5.807,0,10.48,3.196,13.855,6.69c8.813-11.615,15.81-20.526,15.81-20.526s0.16-0.182,0.248-0.345 c-1.03-2.443-7.165-16.995-7.165-16.995l1.708-43.717c0,0-0.278-3.797,1.044-6.052c1.314-2.245,4.247-3.175,4.247-3.175 l13.307,41.443c0,0-4.107,0.866-4.107,5.585c0,2.982,2.658,4.99,6.227,5.013c3.572-0.022,6.227-2.031,6.227-5.013 c0-4.719-4.109-5.585-4.109-5.585l13.311-41.443c0,0,2.93,0.93,4.245,3.175c1.322,2.255,1.043,6.052,1.043,6.052l1.709,43.717 l-7.309,17.34c0,0,6.997,8.911,15.809,20.526c3.375-3.494,8.048-6.69,13.855-6.69c0.687,0,1.833,0,1.833,2.744v14.538 c0,3.148,2.068,11.063,6.95,11.063c0.159,0,16.367-0.272,16.367-23.931c0-45.347-30.197-109.322-36.888-122.937 c2.412,0.595,5.761,1.87,7.104,4.505c0.92,1.809,1.541,6.975,1.705,8.813l0.275,3.142l2.213-2.245 C173.226,25.972,173.875,25.345,174.473,24.823z M176.157,181.396c-1.644-2.189-41.07-55.856-41.07-55.856l-6.723,8.809 l-0.946-1.233l-0.829-1.082l-5.053-6.594l-0.095,0.101c0,0-39.427,53.667-41.07,55.856c-1.643,2.191-4.777,6.708-6.058,9.322 c-1.279,2.614-8.946,39.306-8.946,42.592c0,2.005,0.041,8.618,0.071,13.47c1.536,0.2,3.411,0.761,4.357,0.125 c1.624-1.093,2.363-2.323,2.491-3.372c0.128-1.048,1.367-12.969,2.69-20.812c1.779-10.547,4.571-19.005,4.415-18.97 c3.213-6.672,8.966-17.938,9.887-19.252c17.808-25.439,38.994-49.947,38.994-49.947s21.166,24.502,38.978,49.947 c0.921,1.313,6.672,12.58,9.888,19.252c-0.158-0.035,2.635,8.423,4.414,18.97c1.322,7.843,2.562,19.764,2.688,20.812 c0.131,1.049,0.87,2.279,2.493,3.372c0.944,0.636,2.818,0.075,4.355-0.125c0.032-4.852,0.073-11.465,0.073-13.47 c0-3.286-7.667-39.978-8.948-42.592C180.936,188.104,177.801,183.588,176.157,181.396z M82.538,21.517l-1.014-0.623l-0.813,0.872 c-2.231,2.394-3.063,6.287-3.342,9.478l-1.624-2.705l-1.323,1.433c-0.179,0.197-1.801,2.049-3.004,6.592 c-0.581,2.205-0.709,5.712-0.689,8.68l-3.057-4.85l-1.234,1.958c-0.072,0.114-1.787,2.859-3.722,8.121 c-1.22,3.307-1.179,9.262-0.949,13.547l-6.463-8.577l-1.012,2.251c-0.08,0.177-1.934,4.373-2.359,10.694 c-0.234,3.536,0.51,8.253,1.231,11.789l-7.778-7.739l-0.453,2.807c-0.073,0.446-1.754,11.048-0.02,18.338 c0.433,1.819,1.231,3.879,2.117,5.832l-10.759-9.394c0,0-0.749,5.515-0.248,10.196c0.271,2.523,2.272,7.632,3.813,11.276 c-3.503-2.016-8.539-5.019-11.099-7.047l-2.259-1.79l-0.106,2.881c-0.162,4.545-0.087,8.952,2.6,12.916 c1.161,1.717,3.433,4.291,5.459,6.484c-2.877-0.894-6.201-1.851-8.179-2.173l-1.763-0.288l0.071,1.787 c0.148,3.675,2.771,8.324,4.198,9.896c0.723,0.794,2.436,2.508,3.941,3.991L21.93,137.83l0.896,2.098 c0.1,0.234,2.493,5.74,7.324,9.943c2.464,2.146,6.876,4.516,10.047,6.088c-2.57,0.653-5.908,1.536-8.518,2.335l-2.402,0.735 l1.246,1.664c0.13,0.173,0.27,0.343,0.407,0.494c3.608,4.04,12.229,5.234,14.412,5.339c-4.774,1.197-9.767,2.451-11.896,2.979 l-2.911,0.728l2.371,1.843c4.708,3.656,13.02,5.841,22.233,5.841c2.588,0,4.539,0.099,8.954-0.081l-6.105,11.467 c0,0-2.038,9.36-3.02,12.658c-2.304-2.226-2.133-3.205-15.52-15.09c-4.829-4.284-15.411-10.026-18.429-13.813 c-1.005-1.263,5.449-1.422,6.179-1.422c0.73,0-6.393-3.385-8.582-6.123c-2.191-2.739-2.895-5.36-2.895-5.36s-0.38-0.847,0.637-1.001 c1.018-0.157,8.65-1.316,9.084-1.611c0.395-0.266,0.332-0.517-0.137-0.75c-0.469-0.236-9.248-4.724-12.548-10.672 c-2.375-4.281-2.357-6.923-2.364-7.32c-0.01-0.64,0.17-0.803,1.385-0.708c0.862,0.068,7.226,0.046,7.774-0.032 c0.546-0.08,0.453-0.324,0.019-0.576c-9.483-5.484-8.546-14.054-8.624-14.601c-0.079-0.548,0-0.783,0.548-0.704 c0.546,0.077,9.342,0.263,9.812,0.263c0.469,0,0.218-0.519,0.218-0.519s-3.452-4.27-6.056-11.001 c-2.077-5.366-2.377-11.169-2.533-11.639c-0.157-0.469-0.034-0.887,0.514-0.808c0.549,0.079,8.558,3.488,8.87,3.567 c0.313,0.077,0.548-0.103,0.235-0.259c-0.314-0.157-2.896-6.383-3.855-12.033c-1.384-8.17-0.488-10.725-0.42-11.269 c0.063-0.502,0.397-0.874,1.105-0.507c0.743,0.385,12.255,10.245,12.646,10.402c0.391,0.157,0.79-0.164,0.477-0.555 c-0.313-0.392-2.392-6.574-2.938-13.145c-0.548-6.571,0.1-14.571,0.274-15.225c0.161-0.604,0.635-0.581,1.339,0.046 c0.704,0.626,10.381,8.489,11.006,9.038c0.625,0.547,0.727,0.252,0.492-0.53c-0.235-0.782-0.484-8.435,0.375-14.381 c0.965-6.686,3.372-10.979,3.685-11.448s0.536-0.474,0.927-0.161c0.391,0.313,5.106,9.045,5.497,9.515 c0.391,0.469,0.809,0.336,0.732-0.524c-0.104-1.14-0.057-4.547,1.845-12.682c1.956-8.371,3.789-9.758,4.052-10.088 c0.313-0.396,0.521-0.392,0.833-0.002c0.309,0.387,3.945,8.536,4.519,9.377c-0.005,0,0,0.008,0.031,0.049 c-0.007-0.009-0.022-0.036-0.031-0.049c0.025,0.008,0.446,0.395,0.34-0.883c-0.058-0.707,0.396-10.055,1.574-12.653 c1.941-4.282,4.404-6.214,4.899-6.463c0.54-0.272,0.658-0.171,0.737,0.212c0.146,0.721,0.478,7.705,0.625,8.312 c0.146,0.606,0.444,0.232,0.437-0.151c-0.015-0.72,1.081-7.977,3.115-12.044c2.033-4.069,4.292-5.681,5.188-6.133 c0.742-0.376,0.989-0.156,1.018,0.391c0.022,0.422,0.645,5.719,1.206,10.452c-0.272,1.24-0.484,2.556-0.639,3.691 C83.251,22.014,82.866,21.718,82.538,21.517z M127.35,141.814c-1.158,12.032-4.978,23.045-6.326,29.486 c-1.643,7.849-4.788,18.061-6.793,20.931c-4.433,6.343-18.036,18.547-20.403,19.732c-1.094,0.547-6.376-4.115-6.56-4.846 c-0.182-0.728,2.883-3.993,2.154-3.627c-0.731,0.364-4.104,0.906-5.06,0.87c-0.753-0.026,0.633-2.728,0.633-2.728 s-1.484,2.217-3.021,2.947c-0.03,0.015,9.433-18.119,9.433-18.119S127.52,140.043,127.35,141.814z M119.7,169.39l3.104-10.647 l-1.869-0.559l-3.152,10.656L119.7,169.39z M114.072,167.242l4.687-10.051l-1.764-0.838l-4.735,10.055L114.072,167.242z  M126.961,159.319l-0.82,11.06l-1.991-0.139l0.867-11.079L126.961,159.319z M131.727,170.391l-1.986,0.167l-0.828-11.078 l1.944-0.144L131.727,170.391z M164.422,186.462c0,0,9.463,18.134,9.434,18.119c-1.54-0.73-3.021-2.947-3.021-2.947 s1.384,2.701,0.633,2.728c-0.957,0.036-4.33-0.506-5.06-0.87c-0.731-0.366,2.334,2.899,2.153,3.627 c-0.185,0.73-5.467,5.393-6.56,4.846c-2.368-1.186-15.973-13.39-20.404-19.732c-2.007-2.87-5.149-13.082-6.792-20.931 c-1.349-6.441-4.621-17.127-5.778-29.16C128.854,140.373,164.422,186.462,164.422,186.462z M142.029,167.242l1.813-0.834 l-4.735-10.055l-1.762,0.838L142.029,167.242z M136.402,169.39l1.917-0.55l-3.152-10.656l-1.868,0.559L136.402,169.39z",
          })
        );
      }
      function ie() {
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
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            className: "CCBox",
            fill: "none",
            stroke: "#000000",
            strokeWidth: "10",
            strokeMiterlimit: "10",
            d:
              "M238,210c0,6.627-5.373,12-12,12H30 c-6.627,0-12-5.373-12-12V46c0-6.627,5.373-12,12-12h196c6.627,0,12,5.373,12,12V210z",
          }),
          i.createElement("path", {
            className: "C1",
            d:
              "M90.505,173.207c11.431,0,22.338-4.276,30.72-12.036c2.6-2.407,2.753-6.47,0.347-9.068c-2.41-2.604-6.47-2.757-9.072-0.349 c-5.998,5.559-13.811,8.62-21.995,8.62c-17.852,0-32.373-14.524-32.373-32.372c0-17.849,14.521-32.373,32.373-32.373 c8.177,0,15.981,3.055,21.979,8.603c2.603,2.407,6.662,2.25,9.072-0.353c2.407-2.602,2.249-6.662-0.353-9.068 c-8.375-7.751-19.276-12.019-30.694-12.019c-24.931,0-45.209,20.281-45.209,45.209C45.3,152.93,65.574,173.207,90.505,173.207z",
          }),
          i.createElement("path", {
            className: "C1",
            d:
              "M177.926,173.207c11.431,0,22.338-4.276,30.721-12.036c2.6-2.407,2.754-6.47,0.347-9.068 c-2.41-2.604-6.47-2.757-9.072-0.349c-5.998,5.559-13.812,8.62-21.995,8.62c-17.852,0-32.372-14.524-32.372-32.372 c0-17.849,14.521-32.373,32.372-32.373c8.178,0,15.981,3.055,21.979,8.603c2.604,2.407,6.663,2.25,9.072-0.353 c2.407-2.602,2.25-6.662-0.353-9.068c-8.375-7.751-19.277-12.019-30.694-12.019c-24.932,0-45.209,20.281-45.209,45.209 C132.721,152.93,152.996,173.207,177.926,173.207z",
          })
        );
      }
      function oe(e) {
        const t = Object(a.a)(
          "SVGIcon_Button",
          e.filled ? "SVGIcon_Star_Filled" : "SVGIcon_Star_Unfilled"
        );
        return i.createElement(
          "svg",
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            fill: e.filled ? "#currentColor" : "none",
            stroke: "#currentColor",
            strokeWidth: "10",
            strokeMiterlimit: "10",
            d:
              "M127.755,18.624 c-2.061,0.101-3.846,1.465-4.485,3.427L98.312,96.933H18.379c-2.745,0.01-4.963,2.242-4.955,4.989 c0.006,1.572,0.754,3.05,2.019,3.984l64.925,47.476L55.41,230.873c-0.848,2.612,0.582,5.417,3.192,6.265 c1.521,0.495,3.186,0.228,4.475-0.719L128,188.945l64.926,47.474c2.212,1.624,5.324,1.144,6.947-1.071 c0.944-1.29,1.211-2.954,0.719-4.475l-24.959-77.492l64.922-47.476c2.211-1.63,2.681-4.743,1.049-6.953 c-0.934-1.265-2.41-2.015-3.984-2.02H157.69l-24.959-74.882C132.033,19.917,129.997,18.513,127.755,18.624z",
          })
        );
      }
      function se() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Download",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement(
            "g",
            { className: "arrow" },
            i.createElement("line", {
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "12",
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              x1: "129",
              y1: "182",
              x2: "129",
              y2: "24",
            }),
            i.createElement("polyline", {
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "12",
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              points: "174.25,141.25 128.732,183.625 84.25,141.25",
            })
          ),
          i.createElement(
            "g",
            { className: "catch" },
            i.createElement("polyline", {
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "12",
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              points: "23.25,173.5 23.25,235.75 234.75,235.75 234.75,173.5",
            })
          )
        );
      }
      function ae() {
        return i.createElement(
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
          i.createElement("path", {
            d:
              "M236.445,23.522c-1.085-2.35-3.438-3.855-6.025-3.855H25.58c-2.586,0-4.936,1.501-6.024,3.855 c-1.08,2.349-0.698,5.112,0.983,7.083l80.328,94.039v104.181c0,2.74,1.682,5.194,4.237,6.188c0.778,0.3,1.588,0.445,2.392,0.445 c1.832,0,3.626-0.762,4.91-2.17l41.012-45.13c1.111-1.219,1.724-2.811,1.724-4.459v-59.054l80.325-94.04 C237.144,28.634,237.526,25.867,236.445,23.522z",
          })
        );
      }
      function ce() {
        return i.createElement(
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
          i.createElement("path", {
            d:
              "M16.757,233.795c-1.324,3.973,2.455,7.752,6.427,6.428l50.912-16.971l-40.368-40.367L16.757,233.795z",
          }),
          i.createElement("rect", {
            x: "83.614",
            y: "75.466",
            transform:
              "matrix(-0.7071 -0.7071 0.7071 -0.7071 93.7468 324.5916)",
            width: "60.971",
            height: "134.827",
          }),
          i.createElement("rect", {
            x: "149.28",
            y: "68.116",
            transform:
              "matrix(-0.7071 -0.7071 0.7071 -0.7071 252.0431 259.4951)",
            width: "60.971",
            height: "18.862",
          }),
          i.createElement("path", {
            d:
              "M233.545,37.803l-14.368-14.369c-7.928-7.928-20.846-7.897-28.809,0.064l-14.305,14.307l43.112,43.111l14.306-14.305 C241.511,58.582,241.513,45.771,233.545,37.803z",
          })
        );
      }
      function le() {
        return i.createElement(
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
          i.createElement("polyline", {
            className: "I",
            points:
              "86.883,110.957 152.894,110.957 152.894,181.406 177.117,181.406 177.117,202.485 86.883,202.485 86.883,181.775 109.441,181.775 109.441,130.372 86.883,130.372 ",
          }),
          i.createElement("circle", {
            className: "I",
            cx: "128.47",
            cy: "67.607",
            r: "25.517",
          }),
          i.createElement("circle", {
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
      function ue() {
        return i.createElement(
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
          i.createElement("path", {
            d:
              "M82.5,10.8c-0.8-0.7-1.9-0.8-2.9-0.7l-7.2,1.8c-7.3,1.8-15.1,1.4-22.3-1.2h-0.1c-7.8-2.9-16.2-3.5-24.2-1.9l-2.8,0.6V8.5  c0-1.9-1.5-3.5-3.5-3.5S16,6.5,16,8.5v5.1v38.8v39.2c0,1.9,1.5,3.5,3.5,3.5s3.5-1.5,3.5-3.5V55.1l4-0.8c6.9-1.4,14-0.8,20.5,1.7  l0.3,0.1c5,1.8,10.2,2.8,15.5,2.8c3.6,0,7.3-0.4,10.9-1.4l7.2-1.8c1.5-0.4,2.6-1.8,2.6-3.3V13.6C83.9,12.5,83.3,11.5,82.5,10.8z",
          })
        );
      }
      function de(e) {
        return i.createElement(
          "svg",
          {
            style: { height: e.height, width: e.height },
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_DynamicCollection",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("polyline", {
            style: { opacity: 0.2 },
            points:
              "27.875,27.875 73.692,27.893 51.91,154.75 74.672,155 62.787,227.93 27.875,228.125",
          }),
          i.createElement("polyline", {
            style: { opacity: 0.2 },
            points:
              "202.723,27.875 228.147,27.875 228.541,227.93 111.667,227.93 209.345,91.25 175.523,91.218",
          }),
          i.createElement("polygon", {
            points:
              "178.671,16.667 103.833,16.667 75.506,140.146 103.83,140.025 75.506,242.5 174.837,107.74 142.5,107.5",
          })
        );
      }
      function me() {
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
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            d:
              "M171.176,136.219c-5.516-5.516-14.166-5.948-20.223-1.406L92.125,75.984l-8.002-29.738c-0.324-1.406-1.73-3.027-3.028-3.785 L46.49,24.186c-1.298-0.648-3.136-0.433-4.218,0.648L25.295,41.813c-0.974,0.973-1.298,2.92-0.649,4.217l18.276,34.605 c0.648,1.297,2.379,2.596,3.785,3.027l29.739,8.003l58.828,58.828c-4.542,6.056-4.109,14.707,1.405,20.222l56.882,56.882 c6.056,6.056,15.896,6.056,21.845,0l12.544-12.544c6.056-6.056,6.056-15.788,0-21.845L171.176,136.219z",
          }),
          i.createElement("path", {
            d:
              "M153.116,122.16c2.271-0.648,4.65-0.973,7.138-0.973c0.865,0,1.622,0,2.486,0.107l26.928-26.927 c12.328,2.92,25.846-0.324,35.361-9.948c9.517-9.625,12.869-23.034,9.949-35.254l-20.33,20.33l-21.845-5.84l-5.84-21.952 l20.331-20.33c-12.221-2.92-25.738,0.324-35.254,9.948c-9.625,9.625-12.869,23.143-9.949,35.362L129.866,98.91L153.116,122.16z",
          }),
          i.createElement("path", {
            d:
              "M99.371,129.406l-32.226,32.226c-12.328-2.92-25.845,0.324-35.362,9.948c-9.517,9.625-12.869,23.034-9.949,35.254 l20.331-20.33l21.953,5.84l5.839,21.952l-20.331,20.33c12.22,2.92,25.737-0.324,35.254-9.949 c9.625-9.624,12.869-23.142,9.949-35.361l27.035-27.035c-0.325-3.136,0-6.38,0.865-9.517L99.371,129.406z",
          })
        );
      }
      function he() {
        return i.createElement(
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
          i.createElement("path", {
            d:
              "M138.365,26.557c16.139-21.272,38.578-21.376,38.578-21.376s3.336,19.999-12.696,39.266 c-17.12,20.572-36.58,17.206-36.58,17.206S124.012,45.473,138.365,26.557z",
          }),
          i.createElement("path", {
            d:
              "M129.719,75.662c8.305,0,23.713-11.413,43.771-11.413c34.527,0,48.109,24.566,48.109,24.566s-26.565,13.583-26.565,46.54 c0,37.179,33.093,49.991,33.093,49.991s-23.134,65.112-54.38,65.112c-14.353,0-25.509-9.672-40.631-9.672 c-15.41,0-30.702,10.032-40.662,10.032c-28.533,0-64.581-61.765-64.581-111.414c0-48.849,30.512-74.474,59.13-74.474 C105.61,64.933,120.047,75.662,129.719,75.662z",
          })
        );
      }
      function pe() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            className: "SVGIcon_Button SVGIcon_WindowsLogo",
            width: "100%",
            height: "100%",
            viewBox: "0 0 128 128",
            enableBackground: "new 0 0 128 128",
          },
          i.createElement("rect", {
            fill: "#FFFFFF",
            width: "60.834",
            height: "60.835",
          }),
          i.createElement("rect", {
            x: "67.165",
            fill: "#FFFFFF",
            width: "60.835",
            height: "60.835",
          }),
          i.createElement("rect", {
            y: "67.164",
            fill: "#FFFFFF",
            width: "60.834",
            height: "60.836",
          }),
          i.createElement("rect", {
            x: "67.165",
            y: "67.164",
            fill: "#FFFFFF",
            width: "60.835",
            height: "60.836",
          })
        );
      }
      function ge() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_3_copy",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 256 256",
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
                "M206.3,36.6c-19.4,0-35.8,14.1-40.3,33H24.8c-6,0-10.8,4.8-10.8,10.8s4.8,10.8,10.8,10.8h141.3\r\n\t\t\t\tc4.7,18.6,20.9,32.4,40.2,32.4c22.9,0,41.5-19.5,41.5-43.5C247.9,56.2,229.2,36.6,206.3,36.6z M206.3,109.7\r\n\t\t\t\tc-15.2,0-27.5-13.2-27.5-29.5c0-16.3,12.4-29.5,27.5-29.5s27.5,13.2,27.5,29.5C233.9,96.4,221.5,109.7,206.3,109.7z",
            }),
            i.createElement("path", {
              d:
                "M230.4,157.3H107.9c-4.6-14.6-18.3-25.2-34.3-25.2s-29.7,10.6-34.3,25.2H24.8c-6,0-10.8,4.8-10.8,10.8\r\n\t\t\t\tS18.9,179,24.8,179h14.3c4.6,14.6,18.3,25.2,34.3,25.2s29.7-10.6,34.3-25.2h122.5c6,0,10.8-4.8,10.8-10.8S236.4,157.3,230.4,157.3z\r\n\t\t\t\tM73.5,189.8c-8,0-14.9-4.3-18.7-10.8l0,0c-0.7-1.2-1.3-2.4-1.7-3.7c0,0,0-0.1,0-0.1c-0.1-0.4-0.2-0.8-0.4-1.2c0-0.1,0-0.1,0-0.2\r\n\t\t\t\tc-0.2-0.8-0.4-1.7-0.5-2.6c0-0.1,0-0.2,0-0.3c0-0.3-0.1-0.7-0.1-1c0-0.1,0-0.2,0-0.4c0-0.4,0-0.9,0-1.3s0-0.9,0-1.3\r\n\t\t\t\tc0-0.1,0-0.2,0-0.4c0-0.3,0.1-0.7,0.1-1c0-0.1,0-0.2,0-0.3c0.1-0.9,0.3-1.8,0.5-2.6c0-0.1,0-0.1,0-0.2c0.1-0.4,0.2-0.8,0.4-1.2\r\n\t\t\t\tc0,0,0-0.1,0-0.1c0.5-1.3,1-2.6,1.7-3.7c3.7-6.4,10.7-10.8,18.7-10.8c8,0,14.9,4.3,18.7,10.8c0.7,1.2,1.3,2.4,1.7,3.7\r\n\t\t\t\tc0,0,0,0.1,0,0.1c0.1,0.4,0.3,0.8,0.4,1.2c0,0.1,0,0.1,0,0.2c0.2,0.8,0.4,1.7,0.5,2.6c0,0.1,0,0.2,0,0.3c0,0.3,0.1,0.7,0.1,1\r\n\t\t\t\tc0,0.1,0,0.2,0,0.4c0,0.4,0,0.9,0,1.3s0,0.9,0,1.3c0,0.1,0,0.2,0,0.4c0,0.3-0.1,0.7-0.1,1c0,0.1,0,0.2,0,0.3\r\n\t\t\t\tc-0.1,0.9-0.3,1.8-0.5,2.6c0,0.1,0,0.1,0,0.2c-0.1,0.4-0.2,0.8-0.4,1.2c0,0,0,0.1,0,0.1c-0.5,1.3-1,2.6-1.7,3.7l0,0\r\n\t\t\t\tC88.5,185.4,81.5,189.8,73.5,189.8z",
            })
          )
        );
      }
      function fe() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 256 256",
          },
          i.createElement("circle", { cx: "126", cy: "134", r: "20.6" }),
          i.createElement("circle", { cx: "189.4", cy: "134", r: "20.6" }),
          i.createElement("circle", { cx: "62.6", cy: "134", r: "20.6" })
        );
      }
      function be() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Invalid",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement("path", {
            d:
              "M128.5,27.4C74.1,27.4,30,71.5,30,125.9c0,54.4,44.1,98.5,98.5,98.5s98.5-44.1,98.5-98.5C226.9,71.5,182.9,27.4,128.5,27.4 z M206.8,125.9c0,17.7-5.9,34-15.8,47.2L81.3,63.3c13.1-9.9,29.5-15.8,47.2-15.8C171.7,47.5,206.8,82.6,206.8,125.9z M50.2,125.9 c0-17.7,5.9-34,15.8-47.2l109.7,109.7c-13.1,9.9-29.5,15.8-47.2,15.8C85.2,204.2,50.2,169.1,50.2,125.9z",
          })
        );
      }
      function _e() {
        return i.createElement(
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
          i.createElement("path", {
            d:
              "M12.621,2.491c-0.021,0.019 -0.042,0.039 -0.063,0.06l-5.125,5.201c-0.579,0.587 -0.575,1.527 -0.001,2.109l0.691,0.702c0.576,0.584 1.505,0.582 2.079,-0.001l5.126,-5.201c0.021,-0.021 0.04,-0.042 0.059,-0.063l1.573,1.595c0.573,0.582 1.04,0.386 1.04,-0.439l0,-5.957c0,-0.276 -0.219,-0.497 -0.49,-0.497l-5.87,0c-0.82,0 -1.008,0.473 -0.434,1.056l1.415,1.435Zm-9.618,-2.491c-1.665,0 -3.003,1.344 -3.003,3.003l0,11.994c0,1.665 1.344,3.003 3.003,3.003l11.994,0c1.665,0 3.003,-1.344 3.003,-3.003l0,-7.746l0,4.249l-3,-2.488l0,4.492c0,0.826 -0.671,1.496 -1.496,1.496l-9.008,0c-0.826,0 -1.496,-0.671 -1.496,-1.496l0,-9.008c0,-0.826 0.671,-1.496 1.496,-1.496l4.504,0l-2.5,-3l4.249,0l-7.746,0Z",
          })
        );
      }
      function ve() {
        return i.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 100 100",
            x: "0px",
            y: "0px",
          },
          i.createElement("path", {
            d:
              "M50,7A43,43,0,1,1,7,50,43,43,0,0,1,50,7m0-7a50,50,0,1,0,50,50A50,50,0,0,0,50,0h0Z",
          }),
          i.createElement("path", {
            d:
              "M50.79,25a45.51,45.51,0,0,1,5.29.87c5.33,1.51,8.5,5.77,8.9,11.43a10.4,10.4,0,0,1-4.21,9.5c-1.42,1.1-2.91,2.1-4.34,3.18a7.06,7.06,0,0,0-3.18,6.3,4,4,0,0,1-2.88,4,4.42,4.42,0,0,1-5.18-1.55,4.19,4.19,0,0,1-.59-2.07A13.89,13.89,0,0,1,50.3,45,41.55,41.55,0,0,0,54.83,41,5,5,0,0,0,56,38.19c0.23-2.83-1.59-4.65-4.52-4.84-3.54-.23-6.52.69-8.6,3.82a4.19,4.19,0,0,1-4.35,2c-3-.5-4.29-2.94-3.06-5.75a12.84,12.84,0,0,1,6.25-6.2A21.71,21.71,0,0,1,50.79,25Z",
          }),
          i.createElement("path", {
            d:
              "M53.78,69.88C53.8,73.09,52,75,48.85,75s-5.25-1.84-5.26-4.53c0-3.73,1.67-5.59,5-5.69C51.3,64.7,54.12,66.36,53.78,69.88Z",
          })
        );
      }
      function we(e, t) {
        return u.c.IN_GAMEPADUI
          ? i.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 36 36",
                  fill: "none",
                },
                e
              ),
              i.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M2 4V16V20L7 16H24V4H2ZM12 20V32H29L34 36V32V20H12Z",
                fill: "currentColor",
              })
            )
          : i.createElement(
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
              i.createElement("path", {
                d:
                  "M109.9,96.2H302c16.3,0,29.6,13,29.6,29v101.4c0,16-13.2,29-29.6,29h-90.1l-57.6,57.9L138,255.6h-28.1\r\n\t\t\t\tc-16.3,0-29.6-13-29.6-29V125.2C80.4,109.2,93.6,96.2,109.9,96.2z",
              })
            );
      }
      function ye(e) {
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
            viewBox: "0 0 409.6 409.6",
          },
          i.createElement("path", {
            d:
              "M225.1,328.8c-12.6,0-15.3-1.9-29.5-5.3c-18.7-4.8-35.3-6.3-51-5.3c-3.5,0.5-7.1,0.5-10.6,1l-7.6,1\r\n\t\t\t\tc-2.5,0.5-4.5-1-5.6-3.4c-12.6-36.2-16.6-74.7-11.6-117.6c0-2.4,2-3.9,4.5-4.3l4.5-0.5c3.5-0.5,6.6-1,10.1-1c5-0.5,9.6-2.9,13.1-7.2\r\n\t\t\t\tl0.5-1c0.5-0.5,1-1.4,1.5-2.4c9.1-14.5,22.2-25.6,36.8-37.6c7.6-6.3,14.1-12.5,20.2-18.3c6.6-7.2,10.1-16.4,10.6-27\r\n\t\t\t\tc0-9.6,5.6-15.4,16.1-16.4c13.6-1,22.7,3.9,27.8,15.9c7.6,16.4-4.4,33.3-13.9,50.6c-2,3.9-4.5,7.2-7.1,10.6c-1,1.4-2,2.9-3,4.3\r\n\t\t\t\tl-3.5,4.8c-1.5,1.9-3,3.9-4.5,6.3c4,0,7.6,0,11.6,0c11.1-0.5,34.6-0.5,46.7,1.4c7.6,1,13.6,4.8,17.7,10.1c3.5,4.8,4.5,11.1,3,17.8\r\n\t\t\t\tc-0.5,2.9-2,5.8-5,9.2c-1.5,1.9-14.4,3.9-16.5,5.3h10.9c2.5,1.9,5,3.9,7.1,6.3c4,4.3,5.6,9.2,5,14.9c-0.5,5.3-3,10.6-7.6,14\r\n\t\t\t\tc-2.5,1.9-16,3.9-18.5,5.3c5,5.3,18,12.1,16.5,19.3c-2,9.6-7.6,15.4-18.2,17.8c2.5,3.9,3,8.7,1.5,13.5c-0.5,2.4-1.5,4.3-2.5,6.3\r\n\t\t\t\tc-2.5,5.3-6.6,8.2-13.1,9.6C253.2,327.8,233.7,328.8,225.1,328.8z",
          })
        );
      }
      function Ce(e) {
        return i.createElement(
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
          i.createElement(
            "g",
            { display: "none" },
            i.createElement("rect", {
              x: "-660.877",
              y: "-37.172",
              display: "inline",
              width: "1370.931",
              height: "1263.231",
            })
          ),
          i.createElement(
            "g",
            null,
            i.createElement("path", {
              d:
                "M34.367,31.803c0.49,0.443,1.228,0.404,1.698-0.06c3.869-3.823,8.894-6.045,14.425-6.337   c11.044-0.495,20.558,7.281,22.518,17.866c0.133,0.717-0.429,1.379-1.157,1.413l-4.83,0.223c-1.092,0.05-1.578,1.397-0.769,2.133   l13.999,12.733c0.502,0.456,1.279,0.419,1.734-0.084L94.68,45.676c0.733-0.809,0.123-2.1-0.967-2.048l-6.486,0.309   c-1.82-18.94-18.238-33.327-37.455-32.439c-9.122,0.484-17.619,4.28-23.984,10.844c-0.48,0.495-0.439,1.299,0.072,1.762   L34.367,31.803z",
            }),
            i.createElement("path", {
              d:
                "M6.229,53.869h6.11c0.622,0,1.132,0.468,1.207,1.085c1.029,8.437,4.787,16.288,10.854,22.357   c7.249,7.217,16.85,11.23,27.047,11.23c9.778,0.07,19.009-3.568,26.131-10.258c0.502-0.471,0.502-1.276,0.015-1.763l-9.587-9.587   c-4.379,4.389-10.288,6.838-16.559,6.838c-6.224,0-12.068-2.506-16.541-6.934c-3.179-3.179-5.282-7.178-6.168-11.481   c-0.154-0.746,0.447-1.436,1.209-1.436h5.183c1.092,0,1.639-1.319,0.869-2.092L21.572,37.352c-0.478-0.48-1.255-0.481-1.734-0.003   L5.363,51.773C4.589,52.545,5.135,53.869,6.229,53.869z",
            })
          )
        );
      }
      function Se(e) {
        const { className: t, color: n } = e;
        return i.createElement(
          "svg",
          {
            className: Object(a.a)(t),
            width: "13",
            height: "21",
            viewBox: "0 0 13 21",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          i.createElement("path", {
            fill: n || "#ffc83d",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M5.80814 0.197492L5.19324 0.62086C4.96265 0.774812 4.69363 0.851788 4.38619 0.8133L3.92501 0.736324C3.42541 0.697836 2.96424 0.928764 2.73365 1.39062L2.4262 2.04492C2.27248 2.31433 2.08032 2.50677 1.8113 2.62224L1.38856 2.81468C0.92739 3.00712 0.658372 3.46897 0.696803 3.96932L0.735234 4.70059C0.773665 5.00849 0.696803 5.23942 0.504648 5.47035L0.23563 5.85523C-0.0718184 6.24011 -0.0718184 6.77894 0.197199 7.20231L0.619941 7.81812C0.773665 8.04904 0.812097 8.31846 0.812097 8.62636L0.735234 9.08822C0.696803 9.58856 0.92739 10.0504 1.38856 10.2813L2.04189 10.5893C2.31091 10.7432 2.50306 10.9356 2.61836 11.2051L2.77208 11.6284C3.00267 12.0903 3.42541 12.3597 3.96344 12.3212L4.69363 12.2827C4.96265 12.2442 5.23167 12.3212 5.46226 12.5137L5.84657 12.7831C6.23088 13.091 6.76891 13.091 7.19165 12.8216L7.80655 12.3982C8.03714 12.2442 8.30616 12.2057 8.57517 12.2057L9.03635 12.2827C9.53595 12.3212 10.0356 12.0903 10.2277 11.6284L10.5736 10.9741C10.6889 10.7047 10.881 10.5123 11.1501 10.3968L11.5728 10.2429C12.034 10.0119 12.3414 9.58856 12.303 9.04973L12.2646 8.31846C12.2261 8.04904 12.303 7.77963 12.4951 7.5487L12.7642 7.16382C13.0716 6.77894 13.0716 6.24011 12.8026 5.81674L12.3798 5.20093C12.2261 4.97 12.1493 4.70059 12.1877 4.43117L12.2646 3.96932C12.303 3.46897 12.0724 2.96863 11.6112 2.77619L10.9579 2.4298C10.6889 2.31433 10.4967 2.12189 10.3814 1.85248L10.1893 1.42911C9.99712 0.967252 9.53595 0.659348 9.03635 0.697836L8.30616 0.736324C7.99871 0.774812 7.76812 0.697836 7.53753 0.505396L7.15322 0.23598C6.76891 -0.0719243 6.23088 -0.0719243 5.80814 0.197492ZM6.4999 2.69921C4.38619 2.69921 2.65679 4.39268 2.65679 6.50952C2.65679 8.62636 4.38619 10.3583 6.4999 10.3583C8.6136 10.3583 10.3046 8.62636 10.3046 6.50952C10.3046 4.39268 8.6136 2.69921 6.4999 2.69921Z",
          }),
          i.createElement("path", {
            fill: n || "#ffc83d",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M3.04084 12.7833V20.096L6.49963 17.6328L9.95843 20.096V12.7833C9.65098 12.8988 9.3051 12.9758 8.95922 12.9373L8.53648 12.8603C8.38276 12.8603 8.26746 12.8988 8.15217 12.9758L7.53727 13.3606C6.88394 13.784 6.07689 13.784 5.42356 13.3222L5.07768 13.0143C4.96239 12.9373 4.8471 12.9373 4.7318 12.9373L4.00161 12.9758C3.65573 12.9758 3.30985 12.9373 3.04084 12.7833Z",
          })
        );
      }
      function Ee(e) {
        const { className: t } = e;
        Object(r.c)(e, ["className"]);
        return i.createElement(
          "svg",
          {
            className: t,
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          i.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "16",
            fill: "#BDCCDB",
          }),
          i.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "16",
            fill: "url(#paint0_linear)",
          }),
          i.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "14.2745",
            fill: "#98A8B7",
          }),
          i.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "14.2745",
            fill: "url(#paint1_linear)",
          }),
          i.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "14.2745",
            stroke: "#7A92A9",
          }),
          i.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "11.1309",
            fill: "#BDCCDB",
          }),
          i.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "11.1309",
            fill: "url(#paint2_linear)",
          }),
          i.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "10.2107",
            fill: "#5792C8",
          }),
          i.createElement("circle", {
            cx: "16",
            cy: "16",
            r: "10.2107",
            fill: "url(#paint3_linear)",
          }),
          i.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M20.6016 17.9523C22.8425 17.9523 24.6591 16.1357 24.6591 13.8948C24.6591 11.6539 22.8425 9.83727 20.6016 9.83727C18.3607 9.83727 16.5441 11.6539 16.5441 13.8948C16.5441 13.9609 16.5457 14.0266 16.5488 14.0919L14.0477 17.6314C14.0205 17.6306 13.9933 17.6303 13.966 17.6303C13.2606 17.6303 12.6127 17.8767 12.1038 18.2882L6.33398 15.9235C6.33398 17.4638 6.62381 19.1438 6.97803 19.5302C7.16531 19.7345 9.1256 20.4564 11.0502 21.127C11.3013 22.5093 12.5112 23.5574 13.966 23.5574C15.6027 23.5574 16.9296 22.2306 16.9296 20.5939C16.9296 20.5326 16.9277 20.4717 16.924 20.4113L20.2613 17.9382C20.3735 17.9475 20.487 17.9523 20.6016 17.9523ZM12.1995 21.5232C12.5338 22.1572 13.1994 22.5894 13.966 22.5894C15.0681 22.5894 15.9615 21.696 15.9615 20.5939C15.9615 19.4917 15.0681 18.5983 13.966 18.5983C13.7007 18.5983 13.4475 18.65 13.216 18.744L14.1914 19.1438L14.1886 19.1617C14.8832 19.2688 15.4151 19.8692 15.4151 20.5939C15.4151 21.3942 14.7663 22.043 13.966 22.043C13.8901 22.043 13.8157 22.0371 13.743 22.0259L13.7405 22.042L13.6136 21.9998C13.5414 21.9818 13.4713 21.9583 13.4038 21.9299C13.0402 21.8084 12.6309 21.6704 12.1995 21.5232ZM20.6016 16.5998C22.0956 16.5998 23.3066 15.3887 23.3066 13.8948C23.3066 12.4008 22.0956 11.1898 20.6016 11.1898C19.1077 11.1898 17.8966 12.4008 17.8966 13.8948C17.8966 15.3887 19.1077 16.5998 20.6016 16.5998ZM22.4 13.8948C22.4 14.888 21.5948 15.6932 20.6016 15.6932C19.6083 15.6932 18.8032 14.888 18.8032 13.8948C18.8032 12.9015 19.6083 12.0964 20.6016 12.0964C21.5948 12.0964 22.4 12.9015 22.4 13.8948Z",
            fill: "#BDCCDB",
          }),
          i.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M20.6016 17.9523C22.8425 17.9523 24.6591 16.1357 24.6591 13.8948C24.6591 11.6539 22.8425 9.83727 20.6016 9.83727C18.3607 9.83727 16.5441 11.6539 16.5441 13.8948C16.5441 13.9609 16.5457 14.0266 16.5488 14.0919L14.0477 17.6314C14.0205 17.6306 13.9933 17.6303 13.966 17.6303C13.2606 17.6303 12.6127 17.8767 12.1038 18.2882L6.33398 15.9235C6.33398 17.4638 6.62381 19.1438 6.97803 19.5302C7.16531 19.7345 9.1256 20.4564 11.0502 21.127C11.3013 22.5093 12.5112 23.5574 13.966 23.5574C15.6027 23.5574 16.9296 22.2306 16.9296 20.5939C16.9296 20.5326 16.9277 20.4717 16.924 20.4113L20.2613 17.9382C20.3735 17.9475 20.487 17.9523 20.6016 17.9523ZM12.1995 21.5232C12.5338 22.1572 13.1994 22.5894 13.966 22.5894C15.0681 22.5894 15.9615 21.696 15.9615 20.5939C15.9615 19.4917 15.0681 18.5983 13.966 18.5983C13.7007 18.5983 13.4475 18.65 13.216 18.744L14.1914 19.1438L14.1886 19.1617C14.8832 19.2688 15.4151 19.8692 15.4151 20.5939C15.4151 21.3942 14.7663 22.043 13.966 22.043C13.8901 22.043 13.8157 22.0371 13.743 22.0259L13.7405 22.042L13.6136 21.9998C13.5414 21.9818 13.4713 21.9583 13.4038 21.9299C13.0402 21.8084 12.6309 21.6704 12.1995 21.5232ZM20.6016 16.5998C22.0956 16.5998 23.3066 15.3887 23.3066 13.8948C23.3066 12.4008 22.0956 11.1898 20.6016 11.1898C19.1077 11.1898 17.8966 12.4008 17.8966 13.8948C17.8966 15.3887 19.1077 16.5998 20.6016 16.5998ZM22.4 13.8948C22.4 14.888 21.5948 15.6932 20.6016 15.6932C19.6083 15.6932 18.8032 14.888 18.8032 13.8948C18.8032 12.9015 19.6083 12.0964 20.6016 12.0964C21.5948 12.0964 22.4 12.9015 22.4 13.8948Z",
            fill: "url(#paint4_linear)",
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
                gradientUnits: "userSpaceOnUse",
              },
              i.createElement("stop", {
                stopColor: "white",
                stopOpacity: "0.54",
              }),
              i.createElement("stop", {
                offset: "1",
                stopColor: "white",
                stopOpacity: "0",
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
                gradientUnits: "userSpaceOnUse",
              },
              i.createElement("stop", {
                stopColor: "white",
                stopOpacity: "0.25",
              }),
              i.createElement("stop", {
                offset: "1",
                stopColor: "white",
                stopOpacity: "0",
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
                gradientUnits: "userSpaceOnUse",
              },
              i.createElement("stop", {
                stopColor: "white",
                stopOpacity: "0.65",
              }),
              i.createElement("stop", {
                offset: "1",
                stopColor: "white",
                stopOpacity: "0",
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
                gradientUnits: "userSpaceOnUse",
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
                gradientUnits: "userSpaceOnUse",
              },
              i.createElement("stop", {
                stopColor: "white",
                stopOpacity: "0.44",
              }),
              i.createElement("stop", {
                offset: "1",
                stopColor: "white",
                stopOpacity: "0",
              })
            )
          )
        );
      }
      function Oe() {
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
            version: "1.1",
          },
          i.createElement(
            "g",
            null,
            i.createElement("path", {
              d:
                "M16.929,30.115 M84.446,84.262c0-37.271-30.323-67.613-67.587-67.613l0,0l0.069,13.467   c29.777,0.039,53.995,24.256,54.051,54.042L84.446,84.262z",
            }),
            i.createElement("path", {
              d:
                "M16.843,53.089 M61.472,84.262c0-24.616-20.026-44.639-44.628-44.639l0,0v13.466c17.182,0,31.161,13.984,31.161,31.173   H61.472z",
            }),
            i.createElement("circle", {
              cx: "26.695",
              cy: "74.305",
              r: "9.812",
            })
          )
        );
      }
      function Me(e) {
        return i.createElement(
          "svg",
          Object.assign({}, e, {
            height: "24px",
            width: "24px",
            viewBox: "0 0 24 24",
            x: "0px",
            y: "0px",
          }),
          i.createElement("path", {
            fill: "white",
            d:
              "M3.3,0.5v23h17.5v-23H3.3z M10.2,9.6l-3-2.2h3.7L12,3.9l1.2,3.6H17l-3,2.2l1.2,3.6L12,11l-3,2.2L10.2,9.6z M17.3,16.1 M17.4,18H6.6v-1.2h10.7L17.4,18L17.4,18z M17.3,19.9",
          })
        );
      }
      function Be() {
        return i.createElement(
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
          i.createElement("path", {
            fill: "white",
            d:
              "M24.68,19.53l6.9-5.69c0.98-0.81,0.47-2.39-0.81-2.46l-8.89-0.54c-0.54-0.03-1.01-0.37-1.21-0.88L17.4,1.61\r\n\t\t\tc-0.47-1.18-2.12-1.18-2.59,0l-3.27,8.32c-0.2,0.51-0.67,0.84-1.21,0.88l-8.92,0.54c-1.28,0.07-1.78,1.65-0.81,2.46l6.9,5.66\r\n\t\t\tc0.4,0.34,0.61,0.91,0.47,1.41l-2.26,8.65c-0.3,1.21,1.01,2.19,2.09,1.52l7.51-4.81c0.47-0.3,1.04-0.3,1.48,0l7.54,4.81\r\n\t\t\tc1.08,0.67,2.39-0.3,2.09-1.52l-2.26-8.62C24.07,20.4,24.24,19.86,24.68,19.53z",
          })
        );
      }
      function De() {
        return i.createElement(
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
          i.createElement(
            "g",
            null,
            i.createElement("path", {
              fill: "white",
              d:
                "M28.4,1.49H3.79c-1.99,0-3.6,1.61-3.6,3.6v14.88c0,1.99,1.61,3.6,3.6,3.6h2.37c0,1.61-0.38,3.7-1.51,5.88\r\n\t\t\tc-0.28,0.57-0.19,1.33,0.19,1.8c0.28,0.38,0.76,0.47,1.14,0.47c0.19,0,0.38,0,0.57-0.09c4.07-1.61,7.57-5.59,9.47-8.05h12.4\r\n\t\t\tc1.99,0,3.6-1.61,3.6-3.6V5.1C31.91,3.11,30.3,1.49,28.4,1.49z M8.23,14.97c-1.33,0-2.37-1.04-2.37-2.37s1.04-2.37,2.37-2.37\r\n\t\t\ts2.37,1.04,2.37,2.37S9.56,14.97,8.23,14.97z M15.99,14.97c-1.33,0-2.37-1.04-2.37-2.37s1.04-2.37,2.37-2.37\r\n\t\t\tc1.33,0,2.37,1.04,2.37,2.37S17.32,14.97,15.99,14.97z M23.85,14.97c-1.33,0-2.37-1.04-2.37-2.37s1.04-2.37,2.37-2.37\r\n\t\t\tc1.33,0,2.37,1.04,2.37,2.37S25.18,14.97,23.85,14.97z",
            })
          )
        );
      }
      function Re() {
        return i.createElement(
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
          i.createElement(
            "g",
            null,
            i.createElement("path", {
              fill: "white",
              d:
                "M23.32,28.28C23,25.55,20.68,23.52,18,23.52h-3.78c-2.73,0-5,2.03-5.33,4.76L8.56,30.8h15.09L23.32,28.28z",
            }),
            i.createElement("path", {
              fill: "white",
              d:
                "M16.08,22.15c2.82,0,5.1-2.28,5.1-5.1c0-2.82-2.28-5.1-5.1-5.1s-5.1,2.28-5.1,5.1\r\n\t\t\tC10.98,19.86,13.27,22.15,16.08,22.15z",
            }),
            i.createElement(
              "g",
              null,
              i.createElement("path", {
                fill: "white",
                d:
                  "M24.09,10.21c-0.94-1.22-2.18-2.23-3.57-2.9c-1.39-0.68-2.94-1.02-4.48-1.01l-0.02,0L16,6.3\r\n\t\t\t\tc-0.03,0-0.05,0-0.08,0c-1.52,0-3.04,0.35-4.4,1.01c-1.39,0.68-2.62,1.68-3.57,2.9c-0.94,1.22-1.6,2.67-1.91,4.18\r\n\t\t\t\tc-0.3,1.51-0.25,3.1,0.15,4.59c0.14,0.55,0.62,0.92,1.18,0.92c0.01,0,0.02,0,0.04,0h0.27l0.03-0.01c0.32-0.08,0.59-0.29,0.76-0.57\r\n\t\t\t\tl0.07-0.1c0.14-0.21,0.18-0.46,0.11-0.7L8.6,18.38c-0.18-0.62-0.27-1.27-0.29-1.92c0-4.24,3.45-7.68,7.69-7.68h0.04\r\n\t\t\t\tc4.24,0,7.69,3.45,7.69,7.68c-0.02,0.65-0.11,1.3-0.29,1.92l-0.04,0.15c-0.07,0.24-0.03,0.49,0.11,0.7l0.07,0.1\r\n\t\t\t\tc0.17,0.28,0.44,0.49,0.76,0.57l0.03,0.01l0.26,0c0.01,0,0.02,0,0.04,0c0.56,0,1.04-0.37,1.18-0.92c0.4-1.49,0.46-3.08,0.15-4.59\r\n\t\t\t\tC25.69,12.88,25.04,11.44,24.09,10.21z",
              }),
              i.createElement("path", {
                fill: "white",
                d:
                  "M16.02,0.68c-8.83,0-15.99,7.16-16,15.99h0.01c-0.02,2.68,0.74,5.31,2.18,7.57l0,0.01l0.01,0.01\r\n\t\t\t\tc0.37,0.43,1,0.51,1.47,0.19c0.47-0.32,0.62-0.94,0.36-1.44l0,0l0,0c-1.19-1.89-1.81-4.09-1.79-6.32v0v0\r\n\t\t\t\tc0-7.6,6.16-13.76,13.76-13.76c7.6,0,13.76,6.16,13.76,13.76v0v0c0.03,2.24-0.59,4.43-1.79,6.32l0,0l0,0\r\n\t\t\t\tc-0.26,0.5-0.11,1.12,0.36,1.44c0.47,0.32,1.1,0.24,1.47-0.19l0.01-0.01l0-0.01c1.45-2.26,2.2-4.89,2.18-7.57h0.01\r\n\t\t\t\tC32.02,7.84,24.86,0.68,16.02,0.68",
              })
            )
          )
        );
      }
      function Te(e) {
        return i.createElement(
          "svg",
          Object.assign({}, e, {
            height: "100px",
            width: "100px",
            fill: "#000000",
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            viewBox: "0 0 32 32",
            x: "0px",
            y: "0px",
          }),
          i.createElement("path", {
            d:
              "M26.286 0c-3.142 0-5.714 2.572-5.714 5.714 0 0.512 0.074 1.006 0.202 1.479l-10.573 5.287c-1.049-1.332-2.67-2.194-4.487-2.194-3.142 0-5.714 2.572-5.714 5.714s2.572 5.714 5.714 5.714c1.815 0 3.437-0.862 4.486-2.193l10.574 5.287c-0.127 0.473-0.202 0.966-0.202 1.478 0 3.142 2.572 5.714 5.714 5.714s5.714-2.572 5.714-5.714c0-3.142-2.572-5.714-5.714-5.714-1.817 0-3.438 0.862-4.487 2.194l-10.573-5.287c0.128-0.473 0.202-0.967 0.202-1.479s-0.074-1.005-0.202-1.478l10.574-5.287c1.049 1.331 2.67 2.193 4.486 2.193 3.142 0 5.714-2.572 5.714-5.714s-2.572-5.714-5.714-5.714zM26.286 2.286c1.907 0 3.429 1.522 3.429 3.429s-1.522 3.429-3.429 3.429c-1.907 0-3.429-1.522-3.429-3.429s1.522-3.429 3.429-3.429zM5.714 12.571c1.907 0 3.429 1.522 3.429 3.429s-1.522 3.429-3.429 3.429c-1.907 0-3.429-1.522-3.429-3.429s1.522-3.429 3.429-3.429zM26.286 22.857c1.907 0 3.429 1.522 3.429 3.429s-1.522 3.429-3.429 3.429c-1.907 0-3.429-1.522-3.429-3.429s1.522-3.429 3.429-3.429z",
          })
        );
      }
      function Ie() {
        return i.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 44 44",
            enableBackground: "new 0 0 44 44",
          },
          i.createElement(
            "g",
            null,
            i.createElement("path", {
              d:
                "M2 5.90007C2 5.90007 4.92505 2 11.7502 2C18.5753 2 21.5003 5.90007 21.5003 5.90007V33.2005C21.5003 33.2005 18.5753 31.2505 11.7502 31.2505C4.92505 31.2505 2 33.2005 2 33.2005V5.90007Z",
              stroke: "#fefeef",
              fill: "none",
              strokeWidth: "3",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            i.createElement("path", {
              d:
                "M21.4998 5.90007C21.4998 5.90007 24.4248 2 31.2499 2C38.075 2 41.0001 5.90007 41.0001 5.90007V33.2005C41.0001 33.2005 38.075 31.2505 31.2499 31.2505C24.4248 31.2505 21.4998 33.2005 21.4998 33.2005V5.90007Z",
              stroke: "#fefeef",
              fill: "none",
              strokeWidth: "3",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          )
        );
      }
      function xe(e) {
        const { className: t } = e,
          n = Object(r.c)(e, ["className"]);
        return i.createElement(
          "svg",
          Object.assign(
            {
              className: Object(a.a)(
                l.a.SteamDeckCompatIcon,
                l.a.SteamDeckCompatVerified,
                t
              ),
            },
            n,
            {
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            }
          ),
          i.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.33342 11.9222L14.4945 5.76667L16.4556 7.72779L8.33342 15.8556L3.26675 10.7833L5.22786 8.82223L8.33342 11.9222Z",
            fill: "currentColor",
          })
        );
      }
      function ke(e) {
        const { className: t } = e,
          n = Object(r.c)(e, ["className"]);
        return i.createElement(
          "svg",
          Object.assign(
            {
              className: Object(a.a)(
                l.a.SteamDeckCompatIcon,
                l.a.SteamDeckCompatPlayable,
                t
              ),
            },
            n,
            {
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            }
          ),
          i.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.61079 9.44444V15H11.3886V9.44444H8.61079ZM9.07372 8.05245C9.34781 8.23558 9.67004 8.33333 9.99967 8.33333C10.4417 8.33333 10.8656 8.15774 11.1782 7.84518C11.4907 7.53262 11.6663 7.10869 11.6663 6.66667C11.6663 6.33703 11.5686 6.0148 11.3855 5.74072C11.2023 5.46663 10.942 5.25301 10.6375 5.12687C10.3329 5.00072 9.99783 4.96771 9.67452 5.03202C9.35122 5.09633 9.05425 5.25507 8.82116 5.48815C8.58808 5.72124 8.42934 6.01821 8.36503 6.34152C8.30072 6.66482 8.33373 6.99993 8.45988 7.30447C8.58602 7.60902 8.79964 7.86931 9.07372 8.05245Z",
            fill: "currentColor",
          })
        );
      }
      function Le(e) {
        const { className: t } = e,
          n = Object(r.c)(e, ["className"]);
        return i.createElement(
          "svg",
          Object.assign(
            {
              className: Object(a.a)(
                l.a.SteamDeckCompatIcon,
                l.a.SteamDeckCompatUnsupported,
                t
              ),
            },
            n,
            {
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            }
          ),
          i.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M14.1931 15.6064C13.0246 16.4816 11.5733 17 10.001 17C6.13498 17 3.00098 13.866 3.00098 10C3.00098 8.42766 3.51938 6.97641 4.39459 5.80783L14.1931 15.6064ZM15.6074 14.1922C16.4826 13.0236 17.001 11.5723 17.001 10C17.001 6.13401 13.867 3 10.001 3C8.42864 3 6.97739 3.5184 5.80881 4.39362L15.6074 14.1922ZM19.001 10C19.001 14.9706 14.9715 19 10.001 19C5.03041 19 1.00098 14.9706 1.00098 10C1.00098 5.02944 5.03041 1 10.001 1C14.9715 1 19.001 5.02944 19.001 10Z",
            fill: "currentColor",
          })
        );
      }
      function Ne(e) {
        const { className: t } = e,
          n = Object(r.c)(e, ["className"]);
        return i.createElement(
          "svg",
          Object.assign(
            {
              className: Object(a.a)(
                l.a.SteamDeckCompatIcon,
                l.a.SteamDeckCompatUnknown,
                t
              ),
            },
            n,
            {
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            }
          ),
          i.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M17.3972 11.2461L18.8767 11.4932C18.9578 11.0075 19 10.5087 19 10C19 9.49131 18.9578 8.99248 18.8767 8.50682L17.3972 8.75386C17.4647 9.15821 17.5 9.57442 17.5 10C17.5 10.4256 17.4647 10.8418 17.3972 11.2461ZM17.0295 7.3783L18.4348 6.8539C18.0814 5.90668 17.5729 5.03501 16.9403 4.26971L15.7842 5.22538C16.3119 5.86387 16.7354 6.59021 17.0295 7.3783ZM14.7746 4.21582L15.7303 3.05967C14.965 2.42708 14.0933 1.91864 13.1461 1.56519L12.6217 2.97054C13.4098 3.26461 14.1361 3.68805 14.7746 4.21582ZM11.2461 2.60281L11.4932 1.1233C11.0075 1.0422 10.5087 1 10 1C9.49131 1 8.99248 1.0422 8.50682 1.1233L8.75386 2.60281C9.15821 2.5353 9.57442 2.5 10 2.5C10.4256 2.5 10.8418 2.5353 11.2461 2.60281ZM7.3783 2.97054L6.8539 1.56519C5.90668 1.91864 5.03501 2.42708 4.26971 3.05967L5.22538 4.21582C5.86387 3.68805 6.59021 3.26461 7.3783 2.97054ZM4.21582 5.22538L3.05967 4.26971C2.42708 5.03501 1.91864 5.90668 1.56519 6.8539L2.97054 7.3783C3.26461 6.59022 3.68805 5.86387 4.21582 5.22538ZM1 10C1 9.49131 1.0422 8.99248 1.1233 8.50682L2.60281 8.75386C2.5353 9.15821 2.5 9.57442 2.5 10C2.5 10.4256 2.5353 10.8418 2.60281 11.2461L1.1233 11.4932C1.0422 11.0075 1 10.5087 1 10ZM2.97054 12.6217L1.56519 13.1461C1.91864 14.0933 2.42708 14.965 3.05967 15.7303L4.21582 14.7746C3.68805 14.1361 3.26461 13.4098 2.97054 12.6217ZM5.22538 15.7842L4.26971 16.9403C5.03501 17.5729 5.90668 18.0814 6.8539 18.4348L7.3783 17.0295C6.59022 16.7354 5.86387 16.3119 5.22538 15.7842ZM8.75386 17.3972L8.50682 18.8767C8.99248 18.9578 9.49131 19 10 19C10.5087 19 11.0075 18.9578 11.4932 18.8767L11.2461 17.3972C10.8418 17.4647 10.4256 17.5 10 17.5C9.57442 17.5 9.15821 17.4647 8.75386 17.3972ZM12.6217 17.0295L13.1461 18.4348C14.0933 18.0814 14.965 17.5729 15.7303 16.9403L14.7746 15.7842C14.1361 16.3119 13.4098 16.7354 12.6217 17.0295ZM15.7842 14.7746L16.9403 15.7303C17.5729 14.965 18.0814 14.0933 18.4348 13.1461L17.0295 12.6217C16.7354 13.4098 16.3119 14.1361 15.7842 14.7746ZM9.2425 14.7702C9.46679 14.92 9.73048 15 10.0002 15C10.362 15 10.7089 14.8563 10.9646 14.6006C11.2204 14.3448 11.3641 13.998 11.3641 13.6363C11.3641 13.3666 11.2841 13.1029 11.1343 12.8787C10.9844 12.6544 10.7714 12.4796 10.5222 12.3764C10.2729 12.2732 9.99872 12.2462 9.73415 12.2988C9.46958 12.3514 9.22656 12.4813 9.03582 12.672C8.84508 12.8628 8.71518 13.1057 8.66255 13.3703C8.60993 13.6348 8.63694 13.909 8.74016 14.1582C8.84339 14.4074 9.01821 14.6203 9.2425 14.7702ZM11.0981 10.3552C11.1722 10.2348 11.2765 10.1358 11.4005 10.068C11.8099 9.82315 12.1479 9.47526 12.3808 9.05903C12.6137 8.64279 12.7333 8.17276 12.7278 7.69584C12.7223 7.21892 12.5918 6.75179 12.3493 6.34105C12.1069 5.93031 11.7609 5.59033 11.346 5.35502C10.9311 5.11972 10.4617 4.99732 9.98466 5.00004C9.50764 5.00277 9.03969 5.13052 8.62748 5.37054C8.21527 5.61057 7.87321 5.95448 7.63545 6.36796C7.39769 6.78144 7.27253 7.25004 7.27246 7.72699H9.23191C9.23191 7.6261 9.25178 7.52621 9.29039 7.43301C9.32901 7.3398 9.3856 7.25511 9.45694 7.18378C9.52829 7.11244 9.61299 7.05586 9.70621 7.01725C9.79942 6.97865 9.89933 6.95878 10.0002 6.95878C10.1659 6.96387 10.3255 7.02207 10.4556 7.12479C10.5856 7.22751 10.6792 7.3693 10.7225 7.52925C10.7658 7.6892 10.7565 7.85883 10.6961 8.01311C10.6356 8.16739 10.5271 8.29816 10.3867 8.3861C9.97322 8.62846 9.63003 8.97429 9.39088 9.38955C9.15173 9.80482 9.02487 10.2752 9.02278 10.7544V11.3635H10.9777V10.7544C10.9825 10.6131 11.024 10.4755 11.0981 10.3552Z",
            fill: "currentColor",
          })
        );
      }
    },
    "75qM": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var r = n("mrSG");
      class i {
        GetObject(e) {
          return Object(r.a)(this, void 0, void 0, function* () {
            try {
              const t = yield this.GetString(e);
              return t ? JSON.parse(t) : null;
            } catch (e) {
              return null;
            }
          });
        }
        StoreObject(e, t) {
          return Object(r.a)(this, void 0, void 0, function* () {
            return this.StoreString(e, JSON.stringify(t));
          });
        }
      }
    },
    "7Whv": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var r = n("j+5p");
      function i(e) {
        switch (e) {
          case "column":
            return r.c.COLUMN;
          case "column-reverse":
            return r.c.COLUMN_REVERSE;
          case "row":
            return r.c.ROW;
          case "row-reverse":
            return r.c.ROW_REVERSE;
          case "grid":
            return r.c.GRID;
          default:
            return r.c.NONE;
        }
      }
    },
    "8+ko": function (e, t, n) {
      e.exports = {
        FocusRingRoot: "focusring_FocusRingRoot_3m2Fo",
        FocusRing: "focusring_FocusRing_1sTuv",
        flash: "focusring_flash_15zi-",
        growOutline: "focusring_growOutline_3vSPb",
        fadeOutline: "focusring_fadeOutline_xL-jG",
        blinker: "focusring_blinker_3mURo",
        DebugFocusRing: "focusring_DebugFocusRing_1cTVW",
        FocusRingOnHiddenItem: "focusring_FocusRingOnHiddenItem_8uyqy",
      };
    },
    "8sdS": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      }),
        n.d(t, "b", function () {
          return d;
        });
      var r = n("mrSG"),
        i = n("q1tI"),
        o = n.n(i),
        s = n("BaVA"),
        a = n("bDQf");
      n("NxAk"), n("BC0X");
      const c = new a.a("GamepadEvents").Debug;
      function l(e, t, n) {
        void 0 === n &&
          (n = [
            e.onButtonDown,
            e.onButtonUp,
            e.onOKButton,
            e.onCancelButton,
            e.onSecondaryButton,
            e.onOptionsButton,
            e.onMenuButton,
            e.onGamepadDirection,
            e.onGamepadFocus,
            e.onGamepadBlur,
          ]),
          o.a.useLayoutEffect(() => {
            let n = t.current;
            const r = [];
            return (
              n &&
                (e.onButtonDown && r.push(Object(s.f)(n, e.onButtonDown)),
                e.onButtonUp && r.push(Object(s.g)(n, e.onButtonUp)),
                e.onOKButton && r.push(Object(s.l)(n, e.onOKButton)),
                e.onCancelButton && r.push(Object(s.h)(n, e.onCancelButton)),
                e.onSecondaryButton &&
                  r.push(Object(s.n)(n, e.onSecondaryButton)),
                e.onOptionsButton && r.push(Object(s.m)(n, e.onOptionsButton)),
                e.onMenuButton && r.push(Object(s.k)(n, e.onMenuButton)),
                e.onGamepadDirection &&
                  r.push(Object(s.i)(n, e.onGamepadDirection)),
                e.onGamepadFocus && r.push(Object(s.j)(n, e.onGamepadFocus)),
                e.onGamepadBlur && r.push(Object(s.e)(n, e.onGamepadBlur))),
              () => r.forEach((e) => e())
            );
          }, n);
      }
      function u(e) {
        return e.stopPropagation(), !1;
      }
      function d(e, t, n) {
        const { onButtonDown: i } = e,
          s = Object(r.c)(e, ["onButtonDown"]),
          a = o.a.useCallback(
            (e) => {
              i && i(e),
                c(
                  "Gamepad Event fired:",
                  e.detail.button,
                  ", handled:",
                  null != i,
                  ", propagation stopped:",
                  e.cancelBubble
                ),
                e.cancelBubble || n.HandleButtonDownEventAsLogicalEvent(e);
            },
            [i, n]
          );
        l(s, t);
        l(
          {
            onButtonDown: a,
            onButtonUp: u,
            onOKButton: u,
            onCancelButton: u,
            onSecondaryButton: u,
            onOptionsButton: u,
            onMenuButton: u,
            onGamepadDirection: u,
            onGamepadFocus: u,
            onGamepadBlur: u,
          },
          t,
          [a]
        );
      }
    },
    "9cYf": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      const r = { x: "y", y: "x" };
    },
    AvbV: function (e, t, n) {
      var r = {
        "./main_brazilian.json": ["TFAN", 11],
        "./main_bulgarian.json": ["c2SO", 12],
        "./main_czech.json": ["peP3", 13],
        "./main_danish.json": ["0bnV", 14],
        "./main_dutch.json": ["wcLc", 15],
        "./main_english.json": ["/rNK", 16],
        "./main_finnish.json": ["iywU", 17],
        "./main_french.json": ["Xnpc", 18],
        "./main_german.json": ["pmKi", 19],
        "./main_greek.json": ["mTRv", 20],
        "./main_hungarian.json": ["WkHb", 21],
        "./main_italian.json": ["Jz5U", 22],
        "./main_japanese.json": ["3Dk9", 23],
        "./main_koreana.json": ["neQD", 24],
        "./main_latam.json": ["6oHD", 25],
        "./main_norwegian.json": ["2OvS", 26],
        "./main_polish.json": ["3pwE", 27],
        "./main_portuguese.json": ["hY40", 28],
        "./main_romanian.json": ["Q95+", 29],
        "./main_russian.json": ["bsPT", 30],
        "./main_sc_schinese.json": ["GOaQ", 31],
        "./main_schinese.json": ["B/Zz", 32],
        "./main_spanish.json": ["U6iL", 33],
        "./main_swedish.json": ["4uPU", 34],
        "./main_tchinese.json": ["rgC9", 35],
        "./main_thai.json": ["87dp", 36],
        "./main_turkish.json": ["yMpO", 37],
        "./main_ukrainian.json": ["zTWm", 38],
        "./main_vietnamese.json": ["wqiy", 39],
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
        (i.id = "AvbV"),
        (e.exports = i);
    },
    BC0X: function (e, t, n) {
      "use strict";
      n.d(t, "g", function () {
        return w;
      }),
        n.d(t, "d", function () {
          return y;
        }),
        n.d(t, "h", function () {
          return C;
        }),
        n.d(t, "a", function () {
          return S;
        }),
        n.d(t, "b", function () {
          return E;
        }),
        n.d(t, "c", function () {
          return M;
        }),
        n.d(t, "e", function () {
          return D;
        }),
        n.d(t, "f", function () {
          return R;
        });
      var r = n("mrSG"),
        i = n("q1tI"),
        o = n.n(i),
        s = n("gQFo"),
        a = (n("z7tf"), n("Jqb/"), n("exH9")),
        c = n("opsS"),
        l = n("BaVA"),
        u = n("NxAk"),
        d = (n("j+5p"), n("av+R")),
        m = (n("yLGM"), n("8sdS"));
      n("kyHq");
      var h = n("X3Ds");
      class p {
        SetFactory(e) {
          this.m_factory = e;
        }
        CreateVirtualKeyboardRef(e) {
          return this.m_factory
            ? this.m_factory.CreateVirtualKeyboardRef(e)
            : {
                ShowVirtualKeyboard: () => {},
                SetAsCurrentVirtualKeyboardTarget: () => {},
                HideVirtualKeyboard: () => {},
                DelayHideVirtualKeyboard: () => {},
                BIsActive: () => !1,
                BIsElementValidForInput: () => !1,
              };
        }
      }
      const g = Object(s.a)("VirtualKeyboardRefFactory", () => new p());
      function f(e, t) {
        const { onTextEntered: n } = e,
          i = Object(r.c)(e, ["onTextEntered"]),
          s = o.a.useRef(),
          a = o.a.useRef({ onTextEntered: () => null });
        var u;
        Object.assign(
          a.current,
          Object.assign(Object.assign({}, i), {
            onTextEntered:
              n ||
              ((u = s),
              (e, t) => {
                if (
                  !(function (e) {
                    if ("Backspace" == e)
                      return (
                        SteamClient.Input.ControllerKeyboardSendText(""), !0
                      );
                    if ("Enter" == e)
                      return (
                        SteamClient.Input.ControllerKeyboardSendText(""), !0
                      );
                    if ("Tab" == e)
                      return (
                        SteamClient.Input.ControllerKeyboardSendText("\t"), !0
                      );
                    if (
                      1 === e.length ||
                      ("ArrowLeft" != e && "ArrowRight" != e && "Tab" != e)
                    )
                      return (
                        SteamClient.Input.ControllerKeyboardSendText(e), !0
                      );
                    return !1;
                  })(e) &&
                  u.current
                ) {
                  const n = u.current,
                    r = n.value;
                  !(function (e, t, n) {
                    const r = e,
                      i = t;
                    if (null == i) return;
                    if (
                      !r ||
                      null == r.selectionStart ||
                      null == r.selectionEnd ||
                      null == r.value ||
                      null == r.value.length
                    )
                      return;
                    const o = r.selectionStart,
                      s = r.selectionEnd,
                      a =
                        ((l = r.selectionDirection),
                        "backward" === l ? -1 : "forward" === l ? 1 : 0),
                      c = h.t(r);
                    var l;
                    if (1 === i.length || ("Enter" === i && c)) {
                      const e = "Enter" === i ? "\n" : i,
                        t = r.value;
                      Object.getOwnPropertyDescriptor(
                        window.HTMLInputElement.prototype,
                        "value"
                      ).set.call(r, t.slice(0, o) + e + t.slice(s)),
                        r.setSelectionRange(o + 1, o + 1, "none");
                    } else if ("Backspace" === i) {
                      const e = r.value;
                      o !== s
                        ? ((r.value = e.slice(0, o) + e.slice(s)),
                          r.setSelectionRange(o, o, "none"))
                        : r.selectionStart > 0 &&
                          ((r.value = e.slice(0, o - 1) + e.slice(s)),
                          r.setSelectionRange(o - 1, o - 1, "none"));
                    } else if ("ArrowLeft" === i)
                      if (n) {
                        const e = b(-1, [o, s, a], [0, r.value.length]);
                        r.setSelectionRange(e[0], e[1], _(e[2]));
                      } else
                        o === s && o > 0
                          ? r.setSelectionRange(o - 1, o - 1, "none")
                          : r.setSelectionRange(o, o, "none");
                    else if ("ArrowRight" === i)
                      if (n) {
                        const e = b(1, [o, s, a], [0, r.value.length]);
                        r.setSelectionRange(e[0], e[1], _(e[2]));
                      } else
                        o === s && s < r.value.length
                          ? r.setSelectionRange(s + 1, s + 1, "none")
                          : r.setSelectionRange(s, s, "none");
                    else
                      "ArrowUp" === i || "Home" === i
                        ? r.setSelectionRange(0, 0, "none")
                        : ("ArrowDown" !== i && "End" !== i) ||
                          r.setSelectionRange(
                            r.value.length,
                            r.value.length,
                            "none"
                          );
                  })(n, e, t);
                  const i = n.value;
                  if (r !== i) {
                    const e = new Event("input", { bubbles: !0 });
                    n.dispatchEvent(e);
                  }
                }
              }),
            BIsElementValidForInput: () =>
              s.current && document.activeElement == s.current,
          })
        );
        const d = (function (e) {
            const t = o.a.useRef();
            t.current || (t.current = g.CreateVirtualKeyboardRef(e));
            return t.current;
          })(a.current),
          m = o.a.useCallback(
            (e) => {
              (document.hasFocus() || document.activeElement != s.current) &&
                (e.currentTarget == s.current
                  ? d.BIsActive() && d.DelayHideVirtualKeyboard()
                  : console.warn(
                      "keyboard got blur event, but it's not the active element"
                    ));
            },
            [d]
          ),
          p = Object(c.g)(
            (e) => {
              s.current = e;
              const t = [];
              return (
                e &&
                  (e.addEventListener(
                    "focus",
                    d.SetAsCurrentVirtualKeyboardTarget
                  ),
                  t.push(() =>
                    e.removeEventListener(
                      "focus",
                      d.SetAsCurrentVirtualKeyboardTarget
                    )
                  ),
                  e.addEventListener("click", d.ShowVirtualKeyboard),
                  t.push(() =>
                    e.removeEventListener("click", d.ShowVirtualKeyboard)
                  ),
                  t.push(Object(l.l)(s.current, d.ShowVirtualKeyboard)),
                  t.push(Object(l.e)(s.current, m))),
                () => t.forEach((e) => e())
              );
            },
            [m, d]
          );
        return (
          o.a.useLayoutEffect(
            () => (
              Object(c.c)(t, {
                TakeFocusAndShowKeyboard: () => {
                  const e = s.current;
                  e &&
                    (document.activeElement != e && e.focus(),
                    d.ShowVirtualKeyboard());
                },
              }),
              () => Object(c.c)(t, null)
            ),
            [d, t]
          ),
          p
        );
      }
      function b(e, t, n) {
        const r = t[2],
          i = r < 0 ? 0 : 1,
          o = e < 0 ? 0 : 1,
          s = [t[0], t[1]];
        (s[i] += e), (s[i] - n[o]) * e > 0 && (s[i] = n[o]);
        return s[0] === s[1]
          ? [s[0], s[1], 0]
          : s[0] < s[1]
          ? [s[0], s[1], r]
          : [s[1], s[0], -r];
      }
      function _(e) {
        return e < 0 ? "backward" : e > 0 ? "forward" : "none";
      }
      n("lkRc");
      var v = n("d1jy");
      const w = Object(s.a)("GamepadNavigationContext", () =>
          o.a.createContext(null)
        ),
        y = Object(s.a)("FocusRingNavigationContext", () =>
          o.a.createContext(u.h)
        );
      o.a.forwardRef(function (e, t) {
        return o.a.createElement(d.f, Object.assign({}, e, { ref: t }));
      });
      function C(e) {
        const { navRef: t } = e,
          n = Object(r.c)(e, ["navRef"]),
          s = o.a.useRef(),
          a = Object(i.useContext)(w),
          l = Object(i.useContext)(y),
          u = (function (e, t) {
            let n = o.a.useRef(null);
            return (
              !e ||
                (n.current && n.current.m_Parent == e) ||
                (n.current = e.Tree.CreateNode(e, t)),
              n.current
            );
          })(a, l);
        return (
          o.a.useLayoutEffect(() => {
            u && u.SetProperties(n);
          }),
          o.a.useLayoutEffect(() => {
            if (!a) return;
            const e = a.Tree.RegisterNavigationItem(u, s.current);
            return () => {
              e();
            };
          }, [a, u, s]),
          o.a.useLayoutEffect(() => {
            if (u && t)
              return (
                Object(c.c)(t, u.CreateHandle()), () => Object(c.c)(t, null)
              );
          }, [u, t]),
          { ref: s, node: u }
        );
      }
      function S(e) {
        const {
            onButtonDown: t,
            onButtonUp: n,
            onOKButton: i,
            onCancelButton: o,
            onSecondaryButton: s,
            onOptionsButton: a,
            onGamepadDirection: c,
            onGamepadFocus: u,
            onGamepadBlur: d,
            onMenuButton: m,
            onOKActionDescription: h,
            onCancelActionDescription: p,
            onSecondaryActionDescription: g,
            onOptionsActionDescription: f,
            onMenuActionDescription: b,
            actionDescriptionMap: _,
          } = e,
          v = Object(r.c)(e, [
            "onButtonDown",
            "onButtonUp",
            "onOKButton",
            "onCancelButton",
            "onSecondaryButton",
            "onOptionsButton",
            "onGamepadDirection",
            "onGamepadFocus",
            "onGamepadBlur",
            "onMenuButton",
            "onOKActionDescription",
            "onCancelActionDescription",
            "onSecondaryActionDescription",
            "onOptionsActionDescription",
            "onMenuActionDescription",
            "actionDescriptionMap",
          ]),
          w = {};
        void 0 !== t && (w.onButtonDown = t),
          void 0 !== n && (w.onButtonUp = n),
          void 0 !== i && (w.onOKButton = i),
          void 0 !== o && (w.onCancelButton = o),
          void 0 !== s && (w.onSecondaryButton = s),
          void 0 !== a && (w.onOptionsButton = a),
          void 0 !== m && (w.onMenuButton = m),
          void 0 !== c && (w.onGamepadDirection = c),
          void 0 !== u && (w.onGamepadFocus = u),
          void 0 !== d && (w.onGamepadBlur = d);
        return {
          gamepadEvents: w,
          actionDescriptions: Object(l.a)({
            onOKActionDescription: h,
            onCancelActionDescription: p,
            onSecondaryActionDescription: g,
            onOptionsActionDescription: f,
            onMenuActionDescription: b,
            actionDescriptionMap: _,
          }),
          props: v,
        };
      }
      function E(e) {
        const {
            autoFocus: t,
            preferredFocus: n,
            disableNavSounds: i,
            fnCanTakeFocus: o,
            childFocusDisabled: s,
            retainFocus: a,
            onFocusWithin: c,
            navKey: l,
            noFocusRing: u,
            focusable: d,
            focusableIfNoChildren: m,
            navRef: h,
            actionDescriptionMap: p,
            onMoveUp: g,
            onMoveRight: f,
            onMoveDown: b,
            onMoveLeft: _,
            navEntryPreferPosition: v,
            scrollIntoViewWhenChildFocused: w,
            fnScrollIntoViewHandler: y,
            scrollIntoViewType: C,
            resetNavOnEntry: E,
          } = e,
          O = Object(r.c)(e, [
            "autoFocus",
            "preferredFocus",
            "disableNavSounds",
            "fnCanTakeFocus",
            "childFocusDisabled",
            "retainFocus",
            "onFocusWithin",
            "navKey",
            "noFocusRing",
            "focusable",
            "focusableIfNoChildren",
            "navRef",
            "actionDescriptionMap",
            "onMoveUp",
            "onMoveRight",
            "onMoveDown",
            "onMoveLeft",
            "navEntryPreferPosition",
            "scrollIntoViewWhenChildFocused",
            "fnScrollIntoViewHandler",
            "scrollIntoViewType",
            "resetNavOnEntry",
          ]),
          { gamepadEvents: M, actionDescriptions: B, props: D } = S(O);
        return {
          elemProps: D,
          navOptions: {
            autoFocus: t,
            preferredFocus: n,
            disableNavSounds: i,
            fnCanTakeFocus: o,
            childFocusDisabled: s,
            retainFocus: a,
            onFocusWithin: c,
            navKey: l,
            noFocusRing: u,
            focusable: d,
            focusableIfNoChildren: m,
            navRef: h,
            onMoveUp: g,
            onMoveRight: f,
            onMoveDown: b,
            onMoveLeft: _,
            navEntryPreferPosition: v,
            scrollIntoViewWhenChildFocused: w,
            fnScrollIntoViewHandler: y,
            scrollIntoViewType: C,
            resetNavOnEntry: E,
            actionDescriptionMap: Object.assign(Object.assign({}, p), B),
          },
          gamepadEvents: M,
        };
      }
      function O(e) {
        return function (t) {
          const {
              focusClassName: n,
              focusWithinClassName: i,
              className: s,
              divRef: l,
              node: u,
              children: d,
            } = t,
            m = Object(r.c)(t, [
              "focusClassName",
              "focusWithinClassName",
              "className",
              "divRef",
              "node",
              "children",
            ]),
            [h, p] = o.a.useState(u.BHasFocus());
          Object(c.d)(u.FocusCallbackList, p);
          const [g, f] = o.a.useState(u.BFocusWithin());
          return (
            Object(c.d)(u.FocusWithinCallbackList, f),
            o.a.createElement(
              e,
              Object.assign(Object.assign({}, m), {
                className: Object(a.a)(s, h && n, g && i),
                ref: l,
              }),
              d
            )
          );
        };
      }
      const M = O("div");
      function B(e, t, n, r) {
        const { elemProps: s, navOptions: l, gamepadEvents: u } = E(n);
        void 0 !== l.focusable || s.disabled || (l.focusable = !0);
        const { ref: d, node: h } = C(Object.assign({}, l)),
          p = Object(i.useCallback)(
            () => (v.a.PlayNavSound(v.b.DefaultOk), d.current.click(), !0),
            [d]
          );
        u.onOKButton ||
          ((s.onClick || ("button" == e && "submit" == s.type) || "a" == e) &&
            (u.onOKButton = p)),
          l.focusable && (s.tabIndex = s.tabIndex || 0),
          Object(m.a)(u, d);
        const g = Object(c.f)(r, d),
          f = s.children;
        delete s.children;
        const b = s.focusClassName;
        return (
          delete s.focusClassName,
          o.a.createElement(
            w.Provider,
            { value: h },
            h
              ? o.a.createElement(
                  t,
                  Object.assign(Object.assign({}, s), {
                    divRef: g,
                    node: h,
                    focusClassName: Object(a.a)(b, "gpfocus"),
                    focusWithinClassName: "gpfocuswithin",
                    className: Object(a.a)(s.className, "Focusable"),
                  }),
                  f
                )
              : o.a.createElement(
                  e,
                  Object.assign(Object.assign({}, s), {
                    ref: g,
                    className: Object(a.a)(s.className, "Focusable"),
                  }),
                  f
                )
          )
        );
      }
      function D(e) {
        const t = O(e);
        return o.a.forwardRef(function (n, r) {
          return B(e, t, n, r);
        });
      }
      function R(e) {
        const t = O(e);
        return o.a.forwardRef(function (n, i) {
          const o = (function (e) {
              const {
                onEnterKeyPress: t,
                strEnterKeyLabel: n,
                onKeyboardNavOut: i,
                onKeyboardShow: o,
                onKeyboardFullyVisible: s,
                onTextEntered: a,
                BIsElementValidForInput: c,
              } = e;
              return {
                virtualKeyboardProps: {
                  onEnterKeyPress: t,
                  strEnterKeyLabel: n,
                  onKeyboardNavOut: i,
                  onKeyboardShow: o,
                  onKeyboardFullyVisible: s,
                  onTextEntered: a,
                  BIsElementValidForInput: c,
                },
                props: Object(r.c)(e, [
                  "onEnterKeyPress",
                  "strEnterKeyLabel",
                  "onKeyboardNavOut",
                  "onKeyboardShow",
                  "onKeyboardFullyVisible",
                  "onTextEntered",
                  "BIsElementValidForInput",
                ]),
              };
            })(n),
            { virtualKeyboardProps: s } = o,
            a = o.props,
            { refKeyboardHandle: l } = a,
            u = Object(r.c)(a, ["refKeyboardHandle"]),
            d = f(s, l),
            m = Object(c.f)(i, d);
          return B(e, t, u, m);
        });
      }
    },
    BaVA: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return r;
      }),
        n.d(t, "f", function () {
          return a;
        }),
        n.d(t, "g", function () {
          return c;
        }),
        n.d(t, "l", function () {
          return l;
        }),
        n.d(t, "h", function () {
          return u;
        }),
        n.d(t, "n", function () {
          return d;
        }),
        n.d(t, "m", function () {
          return m;
        }),
        n.d(t, "k", function () {
          return h;
        }),
        n.d(t, "i", function () {
          return p;
        }),
        n.d(t, "j", function () {
          return g;
        }),
        n.d(t, "e", function () {
          return f;
        }),
        n.d(t, "b", function () {
          return b;
        }),
        n.d(t, "d", function () {
          return _;
        }),
        n.d(t, "a", function () {
          return w;
        });
      var r,
        i = n("rHSA");
      !(function (e) {
        (e[(e.GAMEPAD = 0)] = "GAMEPAD"),
          (e[(e.KEYBOARD = 1)] = "KEYBOARD"),
          (e[(e.APPLICATION = 2)] = "APPLICATION"),
          (e[(e.BROWSER = 3)] = "BROWSER");
      })(r || (r = {}));
      let o = {
        [i.a.OK]: "vgp_onok",
        [i.a.CANCEL]: "vgp_oncancel",
        [i.a.SECONDARY]: "vgp_onsecondaryaction",
        [i.a.OPTIONS]: "vgp_onoptions",
        [i.a.START]: "vgp_onmenu",
      };
      function s(e, t, n) {
        return (
          e.addEventListener(t, n),
          () =>
            (function (e, t, n) {
              e.removeEventListener(t, n);
            })(e, t, n)
        );
      }
      function a(e, t) {
        return s(e, "vgp_onbuttondown", t);
      }
      function c(e, t) {
        return s(e, "vgp_onbuttonup", t);
      }
      function l(e, t) {
        return s(e, "vgp_onok", v(t));
      }
      function u(e, t) {
        return s(e, "vgp_oncancel", v(t));
      }
      function d(e, t) {
        return s(e, "vgp_onsecondaryaction", v(t));
      }
      function m(e, t) {
        return s(e, "vgp_onoptions", v(t));
      }
      function h(e, t) {
        return s(e, "vgp_onmenu", v(t));
      }
      function p(e, t) {
        return s(e, "vgp_ondirection", v(t));
      }
      function g(e, t) {
        return s(e, "vgp_onfocus", t);
      }
      function f(e, t) {
        return s(e, "vgp_onblur", t);
      }
      function b(e, t, n) {
        if (null === e) return !0;
        let r = new e.ownerDocument.defaultView.CustomEvent(t, {
          bubbles: !0,
          cancelable: !0,
          detail: n,
        });
        return e.dispatchEvent(r);
      }
      function _(e) {
        const t = [i.a.DIR_UP, i.a.DIR_DOWN, i.a.DIR_LEFT, i.a.DIR_RIGHT];
        let n = !0,
          r = !1,
          s = o[e.detail.button];
        return (
          s
            ? ((r = !0), (n = b(e.target, s, e.detail)))
            : -1 !== t.indexOf(e.detail.button) &&
              ((r = !0), (n = b(e.target, "vgp_ondirection", e.detail))),
          { bUnhandled: n, bHadLogicalEventMapping: r }
        );
      }
      function v(e) {
        return (t) => {
          !1 !== e(t) && (t.stopPropagation(), t.preventDefault());
        };
      }
      function w(e) {
        const {
            onOKActionDescription: t,
            onCancelActionDescription: n,
            onSecondaryActionDescription: r,
            onOptionsActionDescription: o,
            onMenuActionDescription: s,
            actionDescriptionMap: a,
          } = e,
          c = Object.assign({}, a);
        return (
          void 0 !== t && (c[i.a.OK] = t),
          void 0 !== n && (c[i.a.CANCEL] = n),
          void 0 !== r && (c[i.a.SECONDARY] = r),
          void 0 !== o && (c[i.a.OPTIONS] = o),
          void 0 !== s && (c[i.a.START] = s),
          c
        );
      }
    },
    CdLH: function (e, t, n) {
      "use strict";
      n.d(t, "f", function () {
        return r;
      }),
        n.d(t, "b", function () {
          return i;
        }),
        n.d(t, "c", function () {
          return o;
        }),
        n.d(t, "d", function () {
          return s;
        }),
        n.d(t, "e", function () {
          return a;
        }),
        n.d(t, "g", function () {
          return c;
        }),
        n.d(t, "a", function () {
          return l;
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
      function a(e) {
        return new Date(e.getFullYear(), e.getMonth(), 1, 0, 0, 0, 0);
      }
      function c(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      function l() {
        return Math.floor(Date.now() / 1e3);
      }
    },
    D4wO: function (e, t, n) {
      "use strict";
      function r(e) {
        return function (t, n, r) {
          const i = r.value;
          r.value = function (...t) {
            let r = this[n + "_DebounceProperties"];
            void 0 === r &&
              (r = this[n + "_DebounceProperties"] = {
                hTimer: void 0,
                nPending: 0,
              }),
              void 0 === r.hTimer
                ? (i.apply(this, t),
                  (r.hTimer = window.setInterval(() => {
                    r.nPending > 0
                      ? (i.apply(this, t), (r.nPending = 0))
                      : (window.clearInterval(r.hTimer), (r.hTimer = void 0));
                  }, e)))
                : (r.nPending += 1);
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
        return d;
      });
      var r = n("mrSG"),
        i = n("q1tI"),
        o = n("opsS"),
        s = n("TyAF"),
        a = n("qiKp"),
        c = n("exH9"),
        l = n("6+2x"),
        u = n.n(l);
      let d = class extends i.Component {
        constructor() {
          super(...arguments),
            (this.m_listeners = new a.c()),
            (this.m_bNoSpace = !1),
            (this.state = { x: void 0, y: void 0, hoverPositionReady: !1 });
        }
        bindHover(e) {
          (this.m_elHover = e || void 0), this.positionHover();
        }
        componentDidMount() {
          this.m_listeners.AddEventListener(window, "blur", this.OnWindowBlur);
        }
        componentDidUpdate() {
          this.positionHover();
        }
        componentWillUnmount() {
          this.m_listeners.Unregister();
        }
        OnWindowBlur(e) {
          this.props.onWindowBlur && this.props.onWindowBlur(e);
        }
        render() {
          const e = this.props,
            {
              target: t,
              visibilityObserver: n,
              className: o,
              style: s,
              bEnablePointerEvents: a,
              direction: l,
              nBodyAlignment: d,
              nBodyDistance: m,
              nAllowOffscreenPx: h,
              nMaxLateralMoveOnScreen: p,
              children: g,
              onNoSpace: f,
              onWindowBlur: b,
            } = e,
            _ = Object(r.c)(e, [
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
            ]);
          let v = Object.assign({ left: this.state.x, top: this.state.y }, s),
            w = !n || n.visible;
          return i.createElement(
            "div",
            Object.assign({}, _, {
              className: Object(c.a)(
                o,
                u.a.HoverPosition,
                w && this.state.hoverPositionReady && u.a.Ready,
                this.m_bNoSpace && u.a.NoSpace,
                a && u.a.EnablePointerEvents
              ),
              style: v,
              ref: this.bindHover,
            }),
            g
          );
        }
        positionHover() {
          let e = this.m_elHover,
            t = this.props.target;
          if (!e || !t) return;
          if (
            this.state.hoverPositionReady &&
            this.props.visibilityObserver &&
            !this.props.visibilityObserver.visible
          )
            return;
          let n = t.ownerDocument.defaultView;
          if (!n || n.closed) return;
          const r = e.querySelector(".hover_arrow.left"),
            i = e.querySelector(".hover_arrow.right"),
            o = e.querySelector(".hover_arrow.top"),
            s = e.querySelector(".hover_arrow.bottom"),
            a = t.getBoundingClientRect(),
            c = e.getBoundingClientRect(),
            l =
              "overlay" == this.props.direction ||
              "overlay-center" == this.props.direction;
          r && r.setAttribute("style", "display: none;"),
            i && i.setAttribute("style", "display: none;"),
            o && o.setAttribute("style", "display: none;"),
            s && s.setAttribute("style", "display: none;");
          let u = this.props.direction,
            { nLeft: d, nTop: h, nOverflow: p, nLateralOverflow: g } = m(
              u,
              this.props.nBodyAlignment,
              this.props.nBodyDistance,
              a,
              c,
              n.innerWidth,
              n.innerHeight
            );
          if (p > this.props.nAllowOffscreenPx && !l) {
            const t = (function (e) {
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
              { nLeft: r, nTop: i, nOverflow: o, nLateralOverflow: s } = m(
                t,
                this.props.nBodyAlignment,
                this.props.nBodyDistance,
                a,
                c,
                n.innerWidth,
                n.innerHeight
              );
            if (
              (o < p && ((u = t), (d = r), (h = i), (p = o), (g = s)),
              p > this.props.nAllowOffscreenPx)
            )
              return (
                e.setAttribute("style", "display: none;"),
                (this.m_bNoSpace = !0),
                void (this.props.onNoSpace && this.props.onNoSpace())
              );
          }
          0 === this.props.nMaxLateralMoveOnScreen ||
            l ||
            ([h, d] = (function (e, t, n, r, i) {
              let o = Math.max(t[0], t[1]);
              void 0 !== e && (o = Math.min(e, o));
              o = Math.max(0, o);
              const s = t[0] > t[1] ? o : -o;
              "left" === n || "right" === n ? (r += s) : (i += s);
              return [r, i];
            })(this.props.nMaxLateralMoveOnScreen, g, u, h, d));
          let f = null;
          switch (u) {
            case "left":
              f = i;
              break;
            case "right":
              f = r;
              break;
            case "top":
              f = s;
              break;
            case "bottom":
              f = o;
          }
          f && f.setAttribute("style", ""),
            d != this.state.x && this.setState({ x: d }),
            h != this.state.y && this.setState({ y: h }),
            this.state.hoverPositionReady ||
              this.setState({ hoverPositionReady: !0 });
        }
      };
      function m(e, t, n, r, i, o, s) {
        const a = o,
          c = s;
        let l, u, d, m;
        switch (e) {
          case "right":
            (l = r.right + n),
              (u = h(r.top, r.height, i.height, t)),
              (d = Math.max(0, l + i.width - a)),
              (m = [Math.max(0, 0 - u), Math.max(0, u + i.height - c)]);
            break;
          case "left":
            (l = r.left - n - i.width),
              (u = h(r.top, r.height, i.height, t)),
              (d = Math.max(0, 0 - l)),
              (m = [Math.max(0, 0 - u), Math.max(0, u + i.height - c)]);
            break;
          case "bottom":
            (l = h(r.left, r.width, i.width, t)),
              (u = r.bottom + n),
              (d = Math.max(0, u + i.height - c)),
              (m = [Math.max(0, 0 - l), Math.max(0, l + i.width - a)]);
            break;
          case "top":
            (l = h(r.left, r.width, i.width, t)),
              (u = r.top - n - i.height),
              (d = Math.max(0, 0 - u)),
              (m = [Math.max(0, 0 - l), Math.max(0, l + i.width - a)]);
            break;
          case "overlay":
            (l = r.left), (u = r.top), (d = 0), (m = [0, 0]);
            break;
          case "overlay-center":
            (l = r.left + 0.5 * r.width - 0.5 * i.width),
              (u = r.top + 0.5 * r.height - 0.5 * i.height),
              (d = 0),
              (m = [0, 0]);
        }
        return { nLeft: l, nTop: u, nOverflow: d, nLateralOverflow: m };
      }
      function h(e, t, n, r) {
        return Math.max(0, Math.min(1, r)) * (t - n) + e;
      }
      (d.defaultProps = {
        direction: "right",
        nBodyAlignment: 0.5,
        nAllowOffscreenPx: 10,
        nBodyDistance: 8,
        nMaxLateralMoveOnScreen: void 0,
      }),
        Object(r.b)([o.a], d.prototype, "bindHover", null),
        Object(r.b)([o.a], d.prototype, "OnWindowBlur", null),
        (d = Object(r.b)([s.a], d));
    },
    E4Op: function (e, t, n) {
      "use strict";
    },
    FVDh: function (e, t, n) {
      "use strict";
      var r = n("hRO2");
      n("OS8t"), n("li7h");
      r.Message;
    },
    HZAb: function (e, t, n) {
      e.exports = {
        DropDownLabelContainer: "dropdownlabel_DropDownLabelContainer_uujQH",
        DropDownLabelIconContainer:
          "dropdownlabel_DropDownLabelIconContainer_3H05C",
        DropDownLabelTextColumn: "dropdownlabel_DropDownLabelTextColumn_3WTX4",
        DropDownLabelTitle: "dropdownlabel_DropDownLabelTitle_3g-QH",
        DropDownLabelUpperDescription:
          "dropdownlabel_DropDownLabelUpperDescription_2fl-T",
        DropDownLabelDescription:
          "dropdownlabel_DropDownLabelDescription_cbinv",
      };
    },
    "IjL/": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var r = n("mrSG"),
        i = n("q1tI"),
        o = (n("6NF1"), n("opsS"));
      class s extends i.Component {
        constructor(e) {
          super(e), (this.state = {}), (this.state.lastErrorKey = e.errorKey);
        }
        static InstallErrorReportingStore(e) {
          this.sm_ErrorReportingStore = e;
        }
        componentDidCatch(e, t) {
          const n = s.sm_ErrorReportingStore;
          n
            ? n
                .ReportError(e)
                .then(
                  (e) =>
                    e && this.setState({ identifierHash: e.identifierHash })
                )
            : console.warn(
                "No ErrorReportingStore - use ErrorReportingStore().Init() to configure error reporting to server"
              ),
            this.setState({
              error: { error: e, info: t },
              lastErrorKey: this.props.errorKey,
            });
        }
        Reset() {
          this.setState({ error: null });
        }
        render() {
          const { children: e, fallback: t, errorKey: n } = this.props,
            { error: r, identifierHash: o, lastErrorKey: l } = this.state;
          return r && n == l
            ? void 0 !== t
              ? "function" == typeof t
                ? t(r.error)
                : t
              : s.sm_ErrorReportingStore &&
                s.sm_ErrorReportingStore.reporting_enabled
              ? i.createElement(c, {
                  error: r,
                  identifierHash: o,
                  store: s.sm_ErrorReportingStore,
                  onRefresh: this.Reset,
                })
              : i.createElement(a, { error: r, onDismiss: this.Reset })
            : e;
        }
      }
      Object(r.b)([o.a], s.prototype, "Reset", null);
      const a = ({ error: e, onDismiss: t }) => {
          let n = e.error ? e.error.stack : "Stack missing",
            r = e.info ? e.info.componentStack : "",
            o = (e.error && e.error.message) || "unknown error";
          return i.createElement(
            l,
            null,
            i.createElement(u, null, 'Error: "', o, '"'),
            "   ",
            i.createElement(
              "span",
              {
                style: { textDecoration: "underline", cursor: "pointer" },
                onClick: t,
              },
              "(x) Dismiss"
            ),
            i.createElement("br", null),
            i.createElement(d, null, n),
            i.createElement(d, null, "The error occurred while rendering:", r)
          );
        },
        c = (e) => {
          const { error: t, onRefresh: n, identifierHash: r, store: o } = e,
            s = (t.error && t.error.message) || "unknown error",
            a = `${o.product}_${o.version}_${r}`;
          return i.createElement(
            l,
            null,
            i.createElement(
              u,
              null,
              "Something went wrong while displaying this content. ",
              i.createElement(
                "span",
                {
                  style: { textDecoration: "underline", cursor: "pointer" },
                  onClick: n,
                },
                "Refresh"
              )
            ),
            i.createElement(d, null, "Error Reference: ", a),
            i.createElement(d, null, s)
          );
        },
        l = ({ children: e }) =>
          i.createElement(
            "div",
            {
              style: {
                overflow: "auto",
                marginLeft: "15px",
                color: "white",
                fontSize: "16px",
                userSelect: "auto",
              },
              className: "ErrorBoundary",
            },
            e
          ),
        u = ({ children: e }) =>
          i.createElement(
            "h1",
            {
              style: {
                fontSize: "20px",
                display: "inline-block",
                marginTop: "15px",
                userSelect: "auto",
              },
            },
            e
          ),
        d = ({ children: e }) =>
          i.createElement(
            "pre",
            { style: { marginTop: "15px", opacity: 0.7, userSelect: "auto" } },
            e
          );
    },
    "JJA/": function (e, t, n) {
      e.exports = {
        BodyNoScroll: "modals_BodyNoScroll_32ZiC",
        BodyNoScrollDialog: "modals_BodyNoScrollDialog_105OB",
        OverlayModal: "modals_OverlayModal_1yDps",
        GamepadOnlyModalWrapper: "modals_GamepadOnlyModalWrapper_1lmXy",
        GamepadOnlyPanelWrapper: "modals_GamepadOnlyPanelWrapper_3CnZr",
      };
    },
    JMS6: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return f;
        });
      var r,
        i = n("mrSG"),
        o = n("2vnA"),
        s = n("i8i4"),
        a = n("X3Ds"),
        c = n("D4wO"),
        l = n("XxJJ"),
        u = n("kyHq"),
        d = n("TLQK"),
        m = n("lkRc"),
        h = n("r64O"),
        p = n("Kw0F");
      class g {
        constructor(e, t, n) {
          if (((this.m_rgLoadingLinks = []), (this.m_rgLoadingLinks = []), n))
            for (let e = 0; e < n.length; e++) this.AddLink(n[e], !0);
          else {
            let t = e.getElementsByTagName("link");
            for (let e = 0; e < t.length; e++) {
              let n = t[e];
              this.AddLink(n, !1);
            }
          }
        }
        AddLink(e, t) {
          if (t) {
            let t = !1;
            try {
              (e.sheet && e.sheet.cssRules && 0 != e.sheet.cssRules.length) ||
                (t = !0);
            } catch (e) {}
            t &&
              (e.addEventListener("load", this.OnLinkLoad),
              this.m_rgLoadingLinks.push(e));
          } else
            e.addEventListener("load", this.OnLinkLoad),
              this.m_rgLoadingLinks.push(e);
        }
        SetTarget(e) {
          (this.m_fnRender = e),
            0 == this.m_rgLoadingLinks.length &&
              (this.m_fnRender(), (this.m_fnRender = void 0));
        }
        OnLinkLoad(e) {
          e.currentTarget.removeEventListener("load", this.OnLinkLoad),
            p.b(this.m_rgLoadingLinks, e.currentTarget),
            0 == this.m_rgLoadingLinks.length &&
              (this.m_fnRender(), (this.m_fnRender = void 0));
        }
      }
      Object(i.b)([l.a], g.prototype, "OnLinkLoad", null),
        (function (e) {
          (e[(e.Minimized = 1)] = "Minimized"),
            (e[(e.Hidden = 2)] = "Hidden"),
            (e[(e.Tooltip = 4)] = "Tooltip"),
            (e[(e.ContextMenu = 8)] = "ContextMenu"),
            (e[(e.Resizable = 16)] = "Resizable");
        })(r || (r = {}));
      class f {
        constructor(e, t) {
          (this.m_bFocused = !1),
            Object(h.a)(
              e,
              "Name is required.  This is an internal name, different from title."
            ),
            (this.m_strName = e),
            (this.m_rgParams = t),
            this.m_rgParams.target_browser &&
              (this.m_strName +=
                "_pid" + this.m_rgParams.target_browser.m_unPID),
            (this.m_strTitle = t.title),
            delete this.m_rgParams.title;
        }
        UpdateParamsBeforeShow(e) {
          return e;
        }
        OnDrop(e) {
          console.log("Ignoring drop onto toplevel window", e),
            e.preventDefault(),
            e.stopPropagation();
        }
        OnDragOver(e) {
          e.preventDefault(),
            (e.dataTransfer.dropEffect = "none"),
            e.stopPropagation();
        }
        OnMessage(e) {
          "window_moved" == e.data && this.OnResize();
        }
        Show(e = !0, t = !1) {
          window.SteamClient && (this.m_rgParams.eCreationFlags |= r.Hidden),
            this.m_rgParams.eCreationFlags & r.Tooltip && (e = !1),
            this.BIsValid() &&
              (this.BIsClosed()
                ? ((this.m_popup = void 0), (this.m_element = void 0))
                : e && this.Focus(t));
          let n,
            i,
            o,
            s = _.GetExistingPopup(this.m_strName);
          (s && !this.m_rgParams.replace_existing_popup) ||
            ((this.m_rgParams = this.UpdateParamsBeforeShow(this.m_rgParams)),
            s
              ? ((i = s.m_element),
                (n = s.m_popup),
                s.ReleasePopup(),
                (o = s.m_renderWhenReady),
                _.RemoveTrackedPopup(s),
                n.removeEventListener("beforeunload", s.OnBeforeUnloadEvent),
                n.removeEventListener("unload", s.OnUnload),
                n.removeEventListener("resize", s.OnResizeEvent),
                n.removeEventListener("focus", this.OnFocusInternal),
                n.removeEventListener("blur", this.OnBlurInternal),
                n.removeEventListener("drop", s.OnDrop),
                n.removeEventListener("dragover", s.OnDragOver),
                n.removeEventListener("message", this.OnMessage))
              : (({ popup: n, element: i } = b.CreatePopup(
                  this.m_strName,
                  this.m_rgParams
                )),
                (o = new g(n.document, i))),
            n &&
              i &&
              ((n.document.title = this.m_strTitle),
              n.addEventListener("beforeunload", this.OnBeforeUnloadEvent),
              n.addEventListener("unload", this.OnUnload),
              n.addEventListener("resize", this.OnResizeEvent),
              n.addEventListener("focus", this.OnFocusInternal),
              n.addEventListener("blur", this.OnBlurInternal),
              n.addEventListener("drop", this.OnDrop),
              n.addEventListener("dragover", this.OnDragOver),
              n.addEventListener("message", this.OnMessage),
              m.c.LANGUAGE &&
                n.document.documentElement.setAttribute("lang", Object(d.c)()),
              (this.m_popup = n),
              (this.m_element = i),
              (this.m_renderWhenReady = o),
              this.m_renderWhenReady.SetTarget(() =>
                this.RenderInternal(this.m_popup, this.m_element, e)
              )),
            _.AddTrackedPopup(this),
            s && e && this.Focus());
        }
        RemoveEventListeners() {
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
        }
        RenderInternal(e, t, n) {
          var r;
          this.browser_info &&
            ((r = this.browser_info).m_eBrowserType ==
              u.d.EBrowserType_OpenVROverlay ||
              r.m_eBrowserType == u.d.EBrowserType_OpenVROverlay_Dashboard) &&
            (t.ownerDocument.body.className += " VR"),
            this.Render(e, t),
            this.OnLoad(),
            e.SteamClient &&
              (n
                ? e.SteamClient.Window.BringToFront()
                : e.SteamClient.Window.ShowWindow());
        }
        OnResizeEvent() {
          this.OnResize();
        }
        OnBeforeUnloadEvent() {
          this.OnBeforeUnload();
        }
        OnUnload() {
          this.RemoveEventListeners(),
            _.RemoveTrackedPopup(this),
            this.OnClose(),
            s.unmountComponentAtNode(this.m_element);
        }
        get browser_info() {
          return this.m_rgParams.target_browser;
        }
        get window() {
          return this.m_popup;
        }
        get root_element() {
          return this.m_element;
        }
        get title() {
          return this.m_strTitle;
        }
        set title(e) {
          (this.m_strTitle = e),
            this.m_popup && (this.m_popup.document.title = this.m_strTitle);
        }
        Focus(e = !1) {
          this.m_popup &&
          void 0 !== this.m_popup.SteamClient &&
          void 0 !== this.m_popup.SteamClient.Window
            ? e
              ? this.m_popup.SteamClient.Window.SetForegroundWindow()
              : this.m_popup.SteamClient.Window.BringToFront()
            : this.m_popup && this.m_popup.focus();
        }
        Close() {
          this.m_popup && this.m_popup.close();
        }
        GetName() {
          return this.m_strName;
        }
        BIsValid() {
          return !!this.m_popup;
        }
        BIsClosed() {
          return !this.m_popup || this.m_popup.closed;
        }
        BIsVisible() {
          return (
            this.m_popup &&
            !this.m_popup.closed &&
            "visible" == this.m_popup.document.visibilityState
          );
        }
        BIsFocused() {
          return this.BIsVisible() && this.m_popup.document.hasFocus();
        }
        OnFocusInternal() {
          (this.m_bFocused = !0), this.OnFocus();
        }
        OnBlurInternal() {
          (this.m_bFocused = !1), this.OnBlur();
        }
        get focused() {
          return this.m_bFocused;
        }
        GetWindowRestoreDetails() {
          return this.m_popup &&
            !this.m_popup.closed &&
            this.m_popup.SteamClient
            ? new Promise((e, t) => {
                this.m_popup.SteamClient.Window.GetWindowRestoreDetails((t) => {
                  e(t);
                });
              })
            : Promise.resolve("");
        }
        IsMinimized() {
          return this.m_popup &&
            !this.m_popup.closed &&
            this.m_popup.SteamClient &&
            this.m_popup.SteamClient.Window &&
            this.m_popup.SteamClient.Window.IsWindowMinimized
            ? new Promise((e, t) => {
                this.m_popup.SteamClient.Window.IsWindowMinimized((t) => {
                  e(t);
                });
              })
            : Promise.resolve(!1);
        }
        ReleasePopup() {
          this.OnClose(), (this.m_popup = null);
        }
        OnBeforeUnload() {}
        OnFocus() {}
        OnBlur() {}
      }
      Object(i.b)([o.C], f.prototype, "m_bFocused", void 0),
        Object(i.b)([l.a], f.prototype, "OnMessage", null),
        Object(i.b)([l.a], f.prototype, "OnResizeEvent", null),
        Object(i.b)([l.a], f.prototype, "OnBeforeUnloadEvent", null),
        Object(i.b)([l.a], f.prototype, "OnUnload", null),
        Object(i.b)([l.a], f.prototype, "OnFocusInternal", null),
        Object(i.b)([l.a], f.prototype, "OnBlurInternal", null);
      Object(i.b)(
        [l.a],
        class extends f {
          constructor(e, t, n, r) {
            super(e, n), this.SetSavedDimensionsKey(t), (this.m_bExpires = r);
          }
          BIsInOverlay() {
            return (
              this.browser_info &&
              this.browser_info != { m_unPID: 0, m_nBrowserID: -1 }
            );
          }
          SetSavedDimensionsKey(e) {
            this.m_strSavedDimensionsKey = e;
          }
          UpdateParamsBeforeShow(e) {
            return (
              !this.m_strSavedDimensionsKey ||
              e.bIgnoreSavedDimensions ||
              e.strRestoreDetails
                ? e.strRestoreDetails &&
                  ((this.m_strInitialSavedDimensionsKey = this.GetSavedDimensionsKey()),
                  _.SetRestoreDetails(
                    this.m_strInitialSavedDimensionsKey,
                    e.strRestoreDetails,
                    this.m_bExpires
                  ))
                : ((this.m_strInitialSavedDimensionsKey = this.GetSavedDimensionsKey()),
                  (e.strRestoreDetails = _.GetRestoreDetails(
                    this.m_strInitialSavedDimensionsKey
                  ))),
              e
            );
          }
          OnLoad() {
            this.GetWindowRestoreDetails().then((e) => {
              (this.m_strInitialRestoreDetails = e), this.OnResizeComplete(e);
            });
          }
          OnResize() {
            this.QueryAndStoreWindowPosition();
          }
          OnResizeComplete(e) {}
          QueryAndStoreWindowPosition() {
            if (this.m_strInitialRestoreDetails) {
              let e = this.GetSavedDimensionsKey();
              this.m_popup.setTimeout(() => {
                this.GetWindowRestoreDetails().then((t) => {
                  let n =
                    this.m_strInitialRestoreDetails == t &&
                    e == this.m_strInitialSavedDimensionsKey;
                  this.m_popup &&
                    this.m_strSavedDimensionsKey &&
                    t &&
                    !n &&
                    (_.SetRestoreDetails(e, t, this.m_bExpires),
                    (this.m_rgParams.strRestoreDetails = t),
                    (this.m_strInitialSavedDimensionsKey = e),
                    this.OnResizeComplete(t));
                });
              }, 30);
            }
          }
          OnBeforeUnload() {
            this.QueryAndStoreWindowPosition(), super.OnBeforeUnload();
          }
          OnClose() {}
          SaveWindowPosition(e) {
            _.SetRestoreDetails(this.GetSavedDimensionsKey(), e, !1),
              (this.m_rgParams.strRestoreDetails = e);
          }
        }.prototype,
        "QueryAndStoreWindowPosition",
        null
      );
      class b {
        constructor() {
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
            window.addEventListener("beforeunload", (e) => {
              this.m_bShuttingDown = !0;
              for (let e of this.m_rgShutdownCallbacks) e();
              let t = [];
              this.m_mapPopups.forEach((e) => {
                e.BIsValid() && !e.BIsClosed() && t.push(e);
              });
              for (let e of t) e.Close();
              this.m_bSaveRequired && this.SaveSavedDimensionStore(),
                this.m_mapPopups.clear();
            });
            let e = document.querySelector("head");
            Object(h.a)(e, "Couldn't find head element"),
              e &&
                ((this.m_DynamicCSSObserver = new MutationObserver(() => {
                  const e = a.p();
                  this.m_mapPopups.forEach((t) => {
                    a.a(t.window, e);
                  });
                })),
                this.m_DynamicCSSObserver.observe(e, { childList: !0 }));
          }
        }
        SetCurrentLoggedInAccountID(e) {
          (this.m_unCurrentAccountID = e),
            e
              ? this.LoadSavedDimensionStore()
              : this.ClearSavedDimensionStore();
        }
        AddShutdownCallback(e) {
          this.m_rgShutdownCallbacks.push(e);
        }
        AddPopupCreatedCallback(e) {
          this.m_rgPopupCreatedCallbacks.push(e);
        }
        AddTrackedPopup(e) {
          this.m_mapPopups.set(e.GetName(), e);
          for (let t of this.m_rgPopupCreatedCallbacks) t(e);
        }
        RemoveTrackedPopup(e) {
          this.m_mapPopups.delete(e.GetName());
        }
        GetExistingPopup(e) {
          return this.m_mapPopups.get(e);
        }
        GetPopups() {
          return this.m_mapPopups.values();
        }
        ClosePopupsOwnedByBrowser(e) {
          this.m_mapPopups.forEach((t) => {
            t.browser_info &&
              t.browser_info.m_nBrowserID == e.m_nBrowserID &&
              t.browser_info.m_unPID == e.m_unPID &&
              t.Close();
          });
        }
        static CreatePopup(e, t) {
          let n = t.dimensions || {},
            r = n.width || 300,
            i = n.height || 300,
            o = t.title,
            s = "width=" + r + ",height=" + i;
          void 0 !== n.left && (s += ",left=" + n.left),
            void 0 !== n.top && (s += ",top=" + n.top),
            (s += ",resizeable,status=0,toolbar=0,menubar=0,location=0");
          let c = "about:blank",
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
            t.strVROverlayKey && l.push("vrOverlayKey=" + t.strVROverlayKey),
            t.strRestoreDetails &&
              l.push("restoredetails=" + t.strRestoreDetails),
            t.window_opener_id && l.push("openerid=" + t.window_opener_id),
            l && (c += "?" + l.join("&"));
          let u = (t.owner_window || window).open(c, e, s, !0);
          if (!u)
            return (
              console.log(
                "Failed to create popup.. browser popup blocker enabled?"
              ),
              {}
            );
          let d = "";
          t.html_class && (d = `class="${t.html_class}"`);
          let m = "";
          t.body_class && (m = `class="${t.body_class}"`);
          let h = `<!DOCTYPE html><html ${d}><head><title></title></head><body ${m}><div id="popup_target"></div></body></html>`;
          return (
            u.document.write(h),
            (u.document.title = o),
            a.a(u, a.p()),
            { popup: u, element: u.document.getElementById("popup_target") }
          );
        }
        BShuttingDown() {
          return this.m_bShuttingDown;
        }
        GetLocalStorageKey() {
          return "PopupSavedDimensions_" + this.m_unCurrentAccountID;
        }
        LoadSavedDimensionStore() {
          if (!this.m_unCurrentAccountID) return;
          let e = this.GetLocalStorageKey();
          this.m_mapRestoreDetails = void 0;
          let t = window.localStorage.getItem(e);
          if (t)
            try {
              let e = JSON.parse(t);
              this.m_mapRestoreDetails = new Map(e);
            } catch (e) {}
          this.m_mapRestoreDetails || (this.m_mapRestoreDetails = new Map());
        }
        SaveSavedDimensionStore() {
          if (!this.m_unCurrentAccountID || !this.m_bSaveRequired) return;
          let e = this.GetLocalStorageKey(),
            t = JSON.stringify(Array.from(this.m_mapRestoreDetails));
          window.localStorage.setItem(e, t), (this.m_bSaveRequired = !1);
        }
        DebouncedSaveSavedDimensionStore() {
          this.SaveSavedDimensionStore();
        }
        ClearSavedDimensionStore() {
          this.m_mapRestoreDetails.clear(), (this.m_bSaveRequired = !1);
        }
        GetRestoreDetails(e) {
          if (!this.m_mapRestoreDetails.has(e)) return "";
          let t = this.m_mapRestoreDetails.get(e);
          return (
            (t.last_used = Date.now()),
            (this.m_bSaveRequired = !0),
            t.strRestoreDetails
          );
        }
        SetRestoreDetails(e, t, n) {
          if (e) {
            if (t) {
              if (this.m_mapRestoreDetails.size > 50) {
                let e = null,
                  t = Date.now();
                for (let n of Array.from(this.m_mapRestoreDetails.keys())) {
                  let r = this.m_mapRestoreDetails.get(n);
                  r.last_used < t && r.bExpires && ((t = r.last_used), (e = n));
                }
                e && this.m_mapRestoreDetails.delete(e);
              }
              let r = {
                strRestoreDetails: t,
                last_used: Date.now(),
                bExpires: n,
              };
              this.m_mapRestoreDetails.set(e, r);
            } else this.m_mapRestoreDetails.delete(e);
            (this.m_bSaveRequired = !0),
              this.m_bShuttingDown
                ? this.SaveSavedDimensionStore()
                : this.DebouncedSaveSavedDimensionStore();
          }
        }
      }
      Object(i.b)(
        [l.a, Object(c.a)(100)],
        b.prototype,
        "DebouncedSaveSavedDimensionStore",
        null
      );
      let _ = new b();
      window.g_PopupManager = _;
    },
    Jnrd: function (e, t, n) {
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
          encodeURIComponent(e) +
          "=" +
          encodeURIComponent(t) +
          i +
          ";path=" +
          r;
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
    "Jqb/": function (e, t, n) {
      "use strict";
      n.d(t, "j", function () {
        return S;
      }),
        n.d(t, "b", function () {
          return O;
        }),
        n.d(t, "i", function () {
          return M;
        }),
        n.d(t, "a", function () {
          return B;
        }),
        n.d(t, "k", function () {
          return D;
        }),
        n.d(t, "e", function () {
          return R;
        }),
        n.d(t, "f", function () {
          return T;
        }),
        n.d(t, "g", function () {
          return I;
        }),
        n.d(t, "c", function () {
          return x;
        }),
        n.d(t, "h", function () {
          return P;
        }),
        n.d(t, "d", function () {
          return G;
        });
      var r = n("mrSG"),
        i = n("TyAF"),
        o = n("q1tI"),
        s = (n("5h11"), n("av+R")),
        a = n("qDk6"),
        c = (n("NxAk"), n("kKgT"), n("gQFo")),
        l = n("Mgs7"),
        u = n("IjL/"),
        d = n("6Y59"),
        m = n("r64O"),
        h = n("qiKp"),
        p = n("exH9"),
        g = n("X3Ds"),
        f = n("TLQK"),
        b = n("opsS"),
        _ = n("lkRc"),
        v = n("+d9t"),
        w = n("JJA/"),
        y = (n("BaVA"), n("hwrv")),
        C = n("yLGM");
      const S = Object(c.a)("ModalPresentationContext", () =>
        o.createContext({})
      );
      function E(e) {
        const { active: t, children: n } = e,
          r = o.useRef();
        return (
          o.useLayoutEffect(
            () => (
              t && !r.current && (r.current = P(window).ShowModal(n)),
              () => {
                r.current && (r.current.Close(), (r.current = null));
              }
            ),
            [t]
          ),
          o.useLayoutEffect(() => {
            t && r.current.Update(n);
          }, [t, n]),
          null
        );
      }
      const O = ({
        active: e,
        onDismiss: t,
        className: n,
        modalClassName: r,
        children: i,
      }) =>
        o.createElement(
          E,
          { active: e },
          o.createElement(
            M,
            { onEscKeypress: t, className: r },
            o.createElement(l.f, { className: n }, i)
          )
        );
      function M(e) {
        const t = o.useContext(S);
        return o.createElement(
          v.f,
          Object.assign({ component: t.ModalPosition, fallback: B }, e)
        );
      }
      function B(e) {
        let t,
          n = {};
        e.onEscKeypress &&
          ((n.tabIndex = 0),
          (n.onKeyDown = (t) => {
            27 == t.keyCode && e.onEscKeypress();
          }),
          (n.onMouseDown = (t) => {
            t.currentTarget !== t.target ||
              e.bDisableBackgroundDismiss ||
              e.onEscKeypress();
          }),
          (t = (e) => {
            e && (g.e(e, e.ownerDocument.activeElement) || e.focus());
          }));
        let r = ["ModalPosition"];
        e.className && r.push(e.className),
          e.bDestructiveWarning && r.push("Destructive");
        const i =
            e.renderContent ||
            ((e) => o.createElement("div", Object.assign({}, e))),
          s = o.createElement(
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
                  o.createElement(d.Ab, null)
                )
              ),
            o.createElement(u.a, null, e.children)
          );
        return o.createElement(
          "div",
          Object.assign({ className: r.join(" ") }, n, { ref: t }),
          i({ className: "ModalPosition_Content", children: s })
        );
      }
      function D(e) {
        const { className: t, children: n } = e;
        return o.createElement(
          E,
          { active: !0 },
          o.createElement("div", { className: t }, n)
        );
      }
      let R = class extends o.Component {
        Cancel() {
          this.props.onCancel && this.props.onCancel(),
            this.props.closeModal && this.props.closeModal();
        }
        render() {
          const e = this.props,
            {
              strTitle: t,
              strDescription: n,
              strOKButtonText: i,
              strCancelButtonText: s,
              strMiddleButtonText: c,
              onMiddleButton: u,
              bAlertDialog: d,
              children: m,
            } = e,
            h = Object(r.c)(e, [
              "strTitle",
              "strDescription",
              "strOKButtonText",
              "strCancelButtonText",
              "strMiddleButtonText",
              "onMiddleButton",
              "bAlertDialog",
              "children",
            ]),
            p = i || Object(f.f)("#Button_Close");
          let g = o.createElement(l.o, {
            bOKDisabled: this.props.bOKDisabled,
            strOKText: i,
            onCancel: this.Cancel,
            strCancelText: s,
          });
          return (
            d
              ? (g = o.createElement(l.r, null, p))
              : u &&
                (g = o.createElement(l.p, {
                  bOKDisabled: this.props.bOKDisabled,
                  strOKText: i,
                  onCancel: this.Cancel,
                  strCancelText: s,
                  onUpdate: () => {
                    u(), this.props.closeModal && this.props.closeModal();
                  },
                  strUpdateText: c,
                  bUpdateDisabled: this.props.bMiddleDisabled,
                })),
            o.createElement(
              T,
              Object.assign({}, h),
              o.createElement(
                a.a,
                { onCancelButton: this.Cancel },
                o.createElement(
                  l.l,
                  null,
                  " ",
                  t || o.createElement(o.Fragment, null, " "),
                  " "
                ),
                o.createElement(
                  l.b,
                  null,
                  o.createElement(l.c, null, n, m),
                  o.createElement(l.k, null, g)
                )
              )
            )
          );
        }
      };
      Object(r.b)([b.a], R.prototype, "Cancel", null),
        (R = Object(r.b)([i.a], R));
      let T = class extends o.Component {
        Cancel() {
          this.props.onCancel && this.props.onCancel(),
            this.props.closeModal && this.props.closeModal();
        }
        OK() {
          return Object(r.a)(this, void 0, void 0, function* () {
            this.props.bOKDisabled ||
              (this.props.onOK && (yield this.props.onOK()),
              this.props.closeModal && this.props.closeModal());
          });
        }
        render() {
          return o.createElement(
            M,
            {
              onEscKeypress: this.Cancel,
              className: this.props.modalClassName,
              bDestructiveWarning: this.props.bDestructiveWarning,
              bDisableBackgroundDismiss: this.props.bDisableBackgroundDismiss,
              bHideCloseIcon: this.props.bHideCloseIcon,
            },
            o.createElement(
              l.g,
              {
                classNameContent: Object(p.a)(
                  "GenericConfirmDialog",
                  this.props.bAllowFullSize && "DialogContentFullSize",
                  this.props.className
                ),
                onSubmit: this.OK,
                bCenterVertically: !_.c.IN_GAMEPADUI,
              },
              this.props.children
            )
          );
        }
      };
      Object(r.b)([b.a], T.prototype, "Cancel", null),
        Object(r.b)([b.a], T.prototype, "OK", null),
        (T = Object(r.b)([i.a], T));
      let I = class extends o.Component {
        render() {
          const e = Object.assign(
            {
              strTitle: Object(f.f)("#Error_FailureNotice"),
              strDescription: Object(f.f)("#Error_GenericFailureDescription"),
              bAlertDialog: !0,
              bDestructiveWarning: !0,
              onOK: () => {},
              onCancel: () => {},
            },
            this.props
          );
          return o.createElement(R, Object.assign({}, e));
        }
      };
      function x(e) {
        const { ModalManager: t, DialogWrapper: n } = e,
          i = Object(r.c)(e, ["ModalManager", "DialogWrapper"]),
          s = t.modals,
          a = s && !!s.length,
          c = t.active_modal;
        if (
          ((function (e) {
            o.useEffect(() => {
              if (e)
                return (
                  document.body.classList.add(w.BodyNoScrollDialog),
                  () => document.body.classList.remove(w.BodyNoScrollDialog)
                );
            }, [e]);
          })(a),
          (function (e) {
            const t = Object(b.e)();
            o.useLayoutEffect(() => {
              const n = { forceUpdate: t };
              return e.RegisterOverlay(n), () => e.UnregisterOverlay(n);
            }, [e, t]);
          })(t),
          !s || !s.length)
        )
          return null;
        const l = s.map((e) =>
          o.createElement(k, {
            key: e.key,
            modal: e,
            active: e == c,
            Component: null != n ? n : L,
          })
        );
        return o.createElement(
          "div",
          Object.assign({}, i, {
            className: Object(p.a)(i.className, "FullModalOverlay"),
          }),
          o.createElement("div", {
            className: "ModalOverlayContent ModalOverlayBackground",
          }),
          l
        );
      }
      function k(e) {
        const { modal: t, active: n, Component: r } = e,
          i = Object(b.e)();
        return (
          Object(b.d)(t.ModalUpdatedCallback, i),
          o.createElement(
            u.a,
            null,
            o.createElement(
              r,
              {
                className: Object(p.a)(
                  "ModalOverlayContent",
                  n ? "active" : "inactive"
                ),
                active: n,
                modalKey: t.key,
              },
              t.element
            )
          )
        );
      }
      function L(e) {
        const { className: t, active: n, children: r } = e,
          i = o.useRef();
        return (
          o.useEffect(() => {
            const e = i.current;
            if (e && n) {
              const t = e.firstChild;
              t && t.focus && t.focus();
            }
          }, [n]),
          o.createElement("div", { ref: i, className: t, tabIndex: -1 }, r)
        );
      }
      I = Object(r.b)([i.a], I);
      class N {
        constructor(e) {
          (this.ModalUpdatedCallback = new h.a()),
            (this.key = "Modal_" + N.sm_lastKey++),
            (this.element = e);
        }
        UpdateModal(e) {
          (this.element = e), this.ModalUpdatedCallback.Dispatch();
        }
      }
      N.sm_lastKey = 0;
      class j {
        constructor() {
          (this.m_bUsePopups = !0),
            (this.m_rgModals = []),
            (this.m_ActiveOverlay = null),
            (this.m_OnModalShownCallbacks = new h.a()),
            (this.m_OnModalHiddenCallbacks = new h.a());
        }
        RegisterOverlay(e) {
          Object(m.a)(!this.m_ActiveOverlay, "Registering second overlay"),
            (this.m_ActiveOverlay = e),
            this.ForceUpdate();
        }
        UnregisterOverlay(e) {
          Object(m.a)(this.m_ActiveOverlay == e, "Active overlay mismatch"),
            this.m_ActiveOverlay == e && (this.m_ActiveOverlay = null);
        }
        RegisterOnModalShownCallback(e) {
          return this.m_OnModalShownCallbacks.Register(e);
        }
        RegisterOnModalHiddenCallback(e) {
          return this.m_OnModalHiddenCallbacks.Register(e);
        }
        get hasOverlay() {
          return null != this.m_ActiveOverlay;
        }
        ForceUpdate() {
          this.m_ActiveOverlay
            ? window.setTimeout(() => this.m_ActiveOverlay.forceUpdate(), 1)
            : Object(m.a)(
                !1,
                "Modal action was taken, but there is no <DialogOverlay> element to show it in.  Will retry when one is ready."
              );
        }
        get modals() {
          return this.m_rgModals;
        }
        get active_modal() {
          return this.m_rgModals.length
            ? this.m_rgModals[this.m_rgModals.length - 1]
            : void 0;
        }
        ShowModal(e) {
          return this.ShowModalInternal(e);
        }
        ShowModalInternal(e) {
          const t = new N(e);
          return (
            this.m_rgModals.push(t),
            this.ForceUpdate(),
            this.m_OnModalShownCallbacks.Dispatch(this.m_rgModals.length),
            {
              Close: () => {
                let e = this.m_rgModals.indexOf(t);
                -1 != e && this.m_rgModals.splice(e, 1),
                  this.ForceUpdate(),
                  this.m_OnModalHiddenCallbacks.Dispatch(
                    this.m_rgModals.length
                  );
              },
              Update: (e) => {
                t.UpdateModal(e);
              },
            }
          );
        }
        SetUsePopups(e) {
          this.m_bUsePopups = e;
        }
        BUsePopups() {
          return this.m_bUsePopups;
        }
      }
      class F {
        constructor() {
          this.m_mapModalManager = new WeakMap();
        }
        GetModalManager(e) {
          let t = this.m_mapModalManager.get(e);
          return t || ((t = new j()), this.m_mapModalManager.set(e, t)), t;
        }
      }
      const A = Object(c.a)("ModalManagerFactory", () => new F());
      function P(e) {
        return A.GetModalManager(e);
      }
      function G(e) {
        const { children: t, navID: n, closeModal: r } = e,
          i = o.createRef(),
          c = Object(y.a)(),
          l = (e) => (e.stopPropagation(), e.preventDefault(), !0);
        return _.c.IN_GAMEPADUI
          ? o.createElement(
              s.b,
              {
                navID: n,
                NavigationManager: c,
                navTreeRef: i,
                onCancelButton: r,
                className: w.GamepadOnlyModalWrapper,
              },
              o.createElement(
                C.a,
                null,
                o.createElement(
                  a.a,
                  {
                    className: w.GamepadOnlyPanelWrapper,
                    onGamepadDirection: l,
                    focusableIfNoChildren: !0,
                  },
                  t
                )
              )
            )
          : o.createElement(o.Fragment, null, t);
      }
    },
    K5Iu: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "a", function () {
          return c;
        });
      var r = n("mrSG"),
        i = n("bxBv"),
        o = (n("NtSG"), n("hRO2"), n("2vnA"));
      n("mgoM"), n("E4Op"), n("6NF1");
      class s {
        constructor() {
          (this.m_mapCallbacks = new Map()),
            (this.m_rgRegisteredEMsgs = []),
            (this.m_mapServiceMethodHandlers = new Map()),
            (this.m_rgRegisteredServiceMethodHandlers = []);
        }
        InstallErrorReportingStore(e) {
          this.m_ErrorReportingStore = e;
        }
        DispatchMsgToHandlers(e, t) {
          let n = e.GetEMsg();
          if (146 == n) {
            let n = e.Hdr().target_job_name();
            if (n) {
              let r = this.m_mapServiceMethodHandlers.get(n);
              if (r) {
                this.DEBUG_LogMessageDispatch(e, r[0]);
                for (let n of r)
                  try {
                    n.invoke(e, t);
                  } catch (e) {
                    e instanceof Error && this.m_ErrorReportingStore
                      ? this.m_ErrorReportingStore.ReportError(e)
                      : console.error(
                          "MessageHandlers failed to dispatch message to handler: ",
                          e
                        );
                  }
                return !0;
              }
            }
          } else {
            let t = this.m_mapCallbacks.get(n);
            if (t) {
              this.DEBUG_LogMessageDispatch(e, t[0]);
              for (let n of t)
                try {
                  n.invoke(e);
                } catch (e) {
                  e instanceof Error && this.m_ErrorReportingStore
                    ? this.m_ErrorReportingStore.ReportError(e)
                    : console.error(
                        "MessageHandlers failed to dispatch message to handler: ",
                        e
                      );
                }
              return !0;
            }
          }
          return !1;
        }
        DEBUG_LogMessageDispatch(e, t) {
          0;
        }
        get emsg_list() {
          return this.m_rgRegisteredEMsgs;
        }
        get servicemethod_list() {
          return this.m_rgRegisteredServiceMethodHandlers;
        }
        AddCallback(e, t, n) {
          let r = this.m_mapCallbacks.get(e);
          return (
            r ||
              ((r = []),
              this.m_mapCallbacks.set(e, r),
              this.m_rgRegisteredEMsgs.push(e)),
            r.push({ invoke: n, msgClass: t }),
            {
              invoke: n,
              unregister: () => {
                let t = this.m_mapCallbacks.get(e);
                if (t)
                  for (let e = 0; e < t.length; e++)
                    t[e].invoke == n && (t.splice(e, 1), e--);
              },
            }
          );
        }
        AddServiceMethodHandler(e, t) {
          let n = (n, r) => {
            let o = i.b.InitFromMsg(e.request, n),
              s = i.b.Init(e.response, 147),
              a = t(o, s),
              c = (e) => {
                s.Hdr().set_eresult(e), r(s);
              };
            a instanceof Promise
              ? a.then(c).catch(() => {
                  c(2);
                })
              : c(a);
          };
          return (
            this.m_mapServiceMethodHandlers.has(e.name)
              ? console.error("Duplicate registration for method " + e.name)
              : (this.m_mapServiceMethodHandlers.set(e.name, [
                  { invoke: n, msgClass: e.request },
                ]),
                this.m_rgRegisteredServiceMethodHandlers.push(e.name)),
            {
              invoke: n,
              unregister: () => {
                let t = this.m_mapServiceMethodHandlers.get(e.name);
                if (t)
                  for (let e = 0; e < t.length; e++)
                    t[e].invoke == n && (t.splice(e, 1), e--);
              },
            }
          );
        }
        AddServiceNotificationHandler(e, t) {
          let n = (n, r) => {
              let o = i.b.InitFromMsg(e.request, n);
              t(o);
            },
            r = this.m_mapServiceMethodHandlers.get(e.name);
          return (
            r ||
              ((r = []),
              this.m_mapServiceMethodHandlers.set(e.name, r),
              this.m_rgRegisteredServiceMethodHandlers.push(e.name)),
            r.push({ invoke: n, msgClass: e.request }),
            {
              invoke: n,
              unregister: () => {
                let t = this.m_mapServiceMethodHandlers.get(e.name);
                if (t)
                  for (let e = 0; e < t.length; e++)
                    t[e].invoke == n && (t.splice(e, 1), e--);
              },
            }
          );
        }
      }
      Object(r.b)([o.C], s.prototype, "m_rgRegisteredEMsgs", void 0),
        Object(r.b)(
          [o.C],
          s.prototype,
          "m_rgRegisteredServiceMethodHandlers",
          void 0
        );
      let a = new s();
      function c(e, t, n) {
        return a.AddCallback(e, t, (e) => {
          Object(o.G)(() => {
            n(i.b.InitFromMsg(t, e));
          });
        });
      }
    },
    Kw0F: function (e, t, n) {
      "use strict";
      n.d(t, "f", function () {
        return r;
      }),
        n.d(t, "d", function () {
          return i;
        }),
        n.d(t, "a", function () {
          return o;
        }),
        n.d(t, "b", function () {
          return s;
        }),
        n.d(t, "c", function () {
          return a;
        }),
        n.d(t, "g", function () {
          return c;
        }),
        n.d(t, "e", function () {
          return l;
        });
      n("r64O");
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
        if (!e && !t) return !0;
        if (!e || !t) return !1;
        if (e.length != t.length) return !1;
        for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function s(e, t) {
        return a(e, (e) => t == e);
      }
      function a(e, t) {
        let n = e.findIndex(t);
        return n >= 0 && (e.splice(n, 1), !0);
      }
      function c(e, t, n) {
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
          return w;
        }),
        n.d(t, "k", function () {
          return y;
        }),
        n.d(t, "n", function () {
          return C;
        }),
        n.d(t, "c", function () {
          return S;
        }),
        n.d(t, "b", function () {
          return E;
        }),
        n.d(t, "w", function () {
          return O;
        }),
        n.d(t, "f", function () {
          return B;
        }),
        n.d(t, "g", function () {
          return T;
        }),
        n.d(t, "r", function () {
          return x;
        }),
        n.d(t, "d", function () {
          return k;
        }),
        n.d(t, "u", function () {
          return L;
        }),
        n.d(t, "o", function () {
          return N;
        }),
        n.d(t, "p", function () {
          return j;
        }),
        n.d(t, "e", function () {
          return P;
        }),
        n.d(t, "s", function () {
          return G;
        }),
        n.d(t, "q", function () {
          return W;
        }),
        n.d(t, "m", function () {
          return X;
        }),
        n.d(t, "t", function () {
          return J;
        }),
        n.d(t, "h", function () {
          return de;
        }),
        n.d(t, "j", function () {
          return fe;
        }),
        n.d(t, "i", function () {
          return ve;
        }),
        n.d(t, "a", function () {
          return ze;
        });
      var r = n("mrSG"),
        i = n("q1tI"),
        o = n.n(i),
        s = (n("5h11"), n("6Y59")),
        a = n("TLQK"),
        c = n("opsS"),
        l = n("exH9"),
        u = n("z7tf"),
        d = n("+d9t"),
        m = n("umRa"),
        h = n.n(m);
      const p = (e) => {
          const t = Object(u.b)();
          return o.a.createElement(
            d.f,
            Object.assign(
              { component: null == t ? void 0 : t.Toggle, fallback: g },
              e
            )
          );
        },
        g = (e) => {
          const { value: t, onChange: n, disabled: r } = e;
          return o.a.createElement(
            "div",
            {
              className: Object(l.a)(h.a.Toggle, r && h.a.Disabled),
              onClick: () => !r && n && n(!t),
            },
            o.a.createElement("div", { className: h.a.ToggleRail }),
            o.a.createElement("div", {
              className: Object(l.a)(
                h.a.ToggleRail,
                h.a.Highlight,
                t ? h.a.On : h.a.Off
              ),
            }),
            o.a.createElement("div", {
              className: Object(l.a)(h.a.ToggleSwitch, t ? h.a.On : h.a.Off),
            })
          );
        };
      var f = n("qDk6"),
        b = (n("BaVA"), n("av+R"));
      function _(e) {
        return i.forwardRef(function (t, n) {
          return i.createElement(
            f.a,
            Object.assign({}, t, {
              className: Object(l.a)(e, t.className),
              ref: n,
            })
          );
        });
      }
      let v = Object(d.c)("DialogHeader"),
        w = Object(d.c)("DialogSubHeader"),
        y = Object(d.c)("DialogFooter"),
        C = Object(d.c)("DialogLabel _DialogLayout"),
        S = Object(d.c)("DialogBodyText"),
        E = Object(d.c)("DialogBody"),
        O =
          (_("DialogBody"),
          Object(d.c)("DialogInnerBody"),
          Object(d.c)("DialogControlsSection"),
          Object(d.c)("DialogControlsSectionHeader"),
          _("DialogTwoColLayout _DialogColLayout")),
        M = _("DialogThreeColLayout _DialogColLayout");
      _("DialogTwoThirdColLayout _DialogColLayout"),
        Object(d.c)("DialogColumn _DialogLayout");
      function B(e) {
        const t = Object(u.b)();
        return i.createElement(
          d.f,
          Object.assign({ component: t.Content, fallback: D }, e)
        );
      }
      function D(e) {
        let {
            children: t,
            bCenterVertically: n,
            renderDialogContentDiv: o,
            renderDialogContentInnerDiv: s,
          } = e,
          a = Object(r.c)(e, [
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
          i.createElement(
            d.f,
            Object.assign({ component: o, fallback: "div" }, a, {
              className: c,
            }),
            i.createElement(
              d.f,
              {
                component: s,
                fallback: "div",
                className: "DialogContent_InnerWidth",
              },
              t
            )
          )
        );
      }
      class R extends i.Component {
        OnSubmit(e) {
          e.preventDefault(), this.props.onSubmit && this.props.onSubmit(e);
        }
        render() {
          return i.createElement(
            "form",
            Object.assign({}, this.props, { onSubmit: this.OnSubmit })
          );
        }
      }
      function T(e) {
        const { classNameContent: t, bCenterVertically: n } = e,
          o = Object(r.c)(e, ["classNameContent", "bCenterVertically"]);
        return i.createElement(
          B,
          { className: t, bCenterVertically: n },
          i.createElement(R, Object.assign({}, o))
        );
      }
      Object(r.b)([c.a], R.prototype, "OnSubmit", null);
      const I = i.forwardRef(function (e, t) {
          const n = Object(u.b)(),
            { svgicon: o } = e,
            s = Object(r.c)(e, ["svgicon"]),
            a = Object(l.a)(
              e.className,
              void 0 !== o && "hasSVGIcon",
              s.disabled && "Disabled",
              n.strButtonClassName
            );
          return i.createElement(
            b.d,
            Object.assign(
              { ref: t, onOKActionDescription: s.disabled ? null : void 0 },
              s,
              {
                className: a,
                noFocusRing: !0,
                disabled: !1,
                onClick: s.disabled ? null : s.onClick,
                onPointerDown: s.disabled ? null : s.onPointerDown,
                onPointerUp: s.disabled ? null : s.onPointerUp,
                onPointerCancel: s.disabled ? null : s.onPointerCancel,
                onMouseDown: s.disabled ? null : s.onMouseDown,
                onMouseUp: s.disabled ? null : s.onMouseUp,
                onTouchStart: s.disabled ? null : s.onTouchStart,
                onTouchEnd: s.disabled ? null : s.onTouchEnd,
                onTouchCancel: s.disabled ? null : s.onTouchCancel,
                onSubmit: s.disabled ? null : s.onSubmit,
              }
            ),
            o && o(),
            e.children
          );
        }),
        x = i.forwardRef(function (e, t) {
          return i.createElement(
            I,
            Object.assign(
              { preferredFocus: !0, type: e.onClick ? "button" : "submit" },
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
        k = i.forwardRef(function (e, t) {
          return i.createElement(
            I,
            Object.assign({ type: "button" }, e, {
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
        L = i.forwardRef(function (e, t) {
          return i.createElement(
            I,
            Object.assign({ type: "button" }, e, {
              ref: t,
              className: Object(l.a)(
                e.className,
                "DialogButton _DialogLayout Small"
              ),
            })
          );
        });
      i.forwardRef(function (e, t) {
        return i.createElement(
          I,
          Object.assign({ type: "button" }, e, {
            ref: t,
            className: Object(l.a)(e.className, "TextButton"),
          })
        );
      });
      function N(e) {
        return i.createElement(
          O,
          null,
          i.createElement(
            x,
            {
              onClick: e.onOK,
              disabled: e.bOKDisabled,
              autoFocus: "primary" == e.focusButton,
            },
            e.strOKText || Object(a.f)("#Button_Confirm"),
            " "
          ),
          i.createElement(
            k,
            { onClick: e.onCancel, autoFocus: "secondary" == e.focusButton },
            e.strCancelText || Object(a.f)("#Button_Cancel")
          )
        );
      }
      function j(e) {
        return i.createElement(
          M,
          null,
          i.createElement(
            x,
            { onClick: e.onOK, disabled: e.bOKDisabled },
            e.strOKText || Object(a.f)("#Button_Confirm"),
            " "
          ),
          i.createElement(
            x,
            { onClick: e.onUpdate, disabled: e.bUpdateDisabled },
            e.strUpdateText || Object(a.f)("#Button_Update"),
            " "
          ),
          i.createElement(
            k,
            { onClick: e.onCancel },
            e.strCancelText || Object(a.f)("#Button_Cancel")
          )
        );
      }
      class F extends i.Component {
        constructor(e) {
          super(e), (this.state = { checked: e.checked, disabled: e.disabled });
        }
        componentDidUpdate(e) {
          e.checked != this.props.checked &&
            this.props.checked != this.state.checked &&
            this.setState({ checked: this.props.checked }),
            e.disabled != this.props.disabled &&
              this.props.disabled != this.state.disabled &&
              this.setState({ disabled: this.props.disabled });
        }
        shouldComponentUpdate(e, t) {
          return (
            e.label != this.props.label ||
            e.description != this.props.description ||
            e.onChange != this.props.onChange ||
            e.disabled != this.props.disabled ||
            t.disabled != this.state.disabled ||
            e.checked != this.state.checked ||
            t.checked != this.state.checked
          );
        }
        get checked() {
          return this.state.checked;
        }
        GetPanelElementProps() {
          return {
            tabIndex: this.props.tabIndex || 0,
            onActivate: this.Toggle,
            onKeyDown: this.KeyDown,
          };
        }
        Toggle() {
          if (this.props.disabled) return;
          let e = !this.state.checked;
          this.setState({ checked: e }),
            this.props.onChange && this.props.onChange(e);
        }
        KeyDown(e) {
          32 == e.keyCode &&
            (this.Toggle(), e.preventDefault(), e.stopPropagation());
        }
        SetChecked(e, t) {
          this.setState({ checked: e }),
            t && this.props.onChange && this.props.onChange(e);
        }
      }
      Object(r.b)([c.a], F.prototype, "Toggle", null),
        Object(r.b)([c.a], F.prototype, "KeyDown", null),
        Object(r.b)([c.a], F.prototype, "SetChecked", null);
      class A extends F {
        render() {
          let e = "DialogCheckbox" + (this.state.checked ? " Active" : "");
          return (
            1 == this.state.disabled && (e += " Disabled"),
            this.props.label
              ? i.createElement(
                  f.a,
                  Object.assign(
                    {
                      className:
                        "DialogCheckbox_Container _DialogLayout " +
                        (this.props.classname ? this.props.classname : ""),
                    },
                    this.GetPanelElementProps()
                  ),
                  i.createElement(
                    "div",
                    { className: e },
                    i.createElement(s.q, {
                      color: this.props.color,
                      highlightColor: this.props.highlightColor,
                    })
                  ),
                  i.createElement(
                    "div",
                    { className: "DialogToggle_Label" },
                    i.createElement("span", null, this.props.label),
                    this.props.tooltip &&
                      i.createElement(
                        "span",
                        { "data-tooltip-text": this.props.tooltip },
                        " (?)"
                      )
                  ),
                  i.createElement("div", { style: { clear: "left" } }),
                  this.props.description &&
                    i.createElement(
                      "div",
                      { className: "DialogToggle_Description" },
                      this.props.description
                    )
                )
              : i.createElement(
                  f.a,
                  Object.assign({ className: e }, this.GetPanelElementProps()),
                  i.createElement(s.q, null)
                )
          );
        }
      }
      class P extends F {
        render() {
          return i.createElement(
            d.f,
            Object.assign({ fallback: A }, this.props)
          );
        }
      }
      P.contextType = u.a;
      class G extends F {
        render() {
          let e = this.state.checked ? " Active" : "";
          return i.createElement(
            f.a,
            Object.assign(
              {
                className: Object(l.a)(
                  "DialogRoundCheckbox_Container",
                  this.props.classname,
                  this.props.label ? "WithLabel" : ""
                ),
              },
              this.GetPanelElementProps()
            ),
            i.createElement(
              "div",
              { className: "DialogRoundCheckbox" },
              i.createElement(
                "div",
                { className: "DialogRoundCheckbox_Control" + e },
                i.createElement(
                  "div",
                  { className: "DialogRoundCheckbox_OuterCircle" },
                  i.createElement("div", {
                    className: "DialogRoundCheckbox_InnerCircle",
                  })
                )
              )
            ),
            this.props.label &&
              i.createElement(
                "div",
                { className: "DialogToggle_Label" },
                i.createElement("span", null, this.props.label),
                this.props.tooltip &&
                  i.createElement(
                    "span",
                    { "data-tooltip-text": this.props.tooltip },
                    " (?)"
                  )
              )
          );
        }
      }
      const W = i.forwardRef(function (e, t) {
        const n = Object(u.b)();
        return i.createElement(
          d.f,
          Object.assign(
            { component: n.OnOffToggle, fallback: U, componentRef: t },
            e
          )
        );
      });
      class U extends F {
        OnOffKeyDown(e) {
          (37 == e.keyCode && this.state.checked) ||
          (39 == e.keyCode && !this.state.checked)
            ? (this.Toggle(), e.preventDefault(), e.stopPropagation())
            : this.KeyDown(e);
        }
        OnNewUIToggle(e) {
          e !== this.state.checked && this.Toggle();
        }
        render() {
          let e =
            "DialogOnOffToggle _DialogInputContainer _DialogLayout " +
            (this.props.classname ? this.props.classname : "");
          return (
            this.props.disabled && (e += " Disabled"),
            i.createElement(
              "div",
              {
                className: e,
                tabIndex: this.props.tabIndex || 0,
                onKeyDown: this.OnOffKeyDown,
              },
              i.createElement(
                "div",
                { className: "displayColumn alignSelfCenter" },
                i.createElement(
                  "div",
                  { className: "DialogToggle_Label" },
                  i.createElement("span", null, this.props.label),
                  this.props.tooltip &&
                    i.createElement(
                      "span",
                      { "data-tooltip-text": this.props.tooltip },
                      " (?)"
                    )
                ),
                this.props.description &&
                  i.createElement(
                    "div",
                    { className: "DialogToggle_Description" },
                    this.props.description
                  ),
                this.props.children
              ),
              this.props.useToggleRail
                ? i.createElement(
                    "div",
                    { className: "DialogOnOffToggle_NewUIContainer" },
                    i.createElement(p, {
                      onChange: this.OnNewUIToggle,
                      value: this.state.checked,
                    })
                  )
                : i.createElement(
                    "div",
                    {
                      className: "DialogOnOffToggle_Control",
                      onClick: this.Toggle,
                    },
                    i.createElement(
                      f.a,
                      {
                        className: "DialogOnOffToggle_OptionPanel",
                        onOKButton: this.Toggle,
                      },
                      i.createElement(
                        "div",
                        {
                          className:
                            "DialogOnOffToggle_Option Off" +
                            (this.state.checked ? "" : " Active"),
                        },
                        Object(a.f)("#Dialog_Off")
                      ),
                      i.createElement(
                        "div",
                        {
                          className:
                            "DialogOnOffToggle_Option On" +
                            (this.state.checked ? " Active" : ""),
                        },
                        Object(a.f)("#Dialog_On")
                      )
                    )
                  )
            )
          );
        }
      }
      Object(r.b)([c.a], U.prototype, "OnOffKeyDown", null),
        Object(r.b)([c.a], U.prototype, "OnNewUIToggle", null);
      var z = n("i8i4"),
        H = n("X3Ds"),
        V = n("hJxo");
      class K extends V.a {
        constructor(e, t, n) {
          super(H.n(z.findDOMNode(e)), n),
            (this.m_props = {}),
            (this.m_component = e),
            (this.m_propTargets = t),
            (this.m_setStateOnComplete = n.setStateOnComplete);
        }
        Start() {
          this.m_props = {};
          for (let e in this.m_propTargets) {
            let t = parseFloat(this.m_component.state[e]) || 0,
              n = this.m_propTargets[e];
            t != n && (this.m_props[e] = { start: t, end: n });
          }
          super.Start();
        }
        Update(e) {
          let t = {};
          for (let n in this.m_props) {
            let r = this.m_props[n],
              i = r.start + (r.end - r.start) * e;
            t[n] = i;
          }
          this.m_component.setState(t);
        }
        FireOnComplete() {
          super.FireOnComplete(),
            this.m_setStateOnComplete &&
              this.m_component.setState(this.m_setStateOnComplete);
        }
      }
      var q = n("r64O");
      const Y = i.forwardRef(function (e, t) {
        const n = Object(u.b)();
        return i.createElement(
          d.f,
          Object.assign(
            {
              component: null == n ? void 0 : n.InputElement,
              fallback: "input",
            },
            e,
            { componentRef: t }
          )
        );
      });
      class X extends i.PureComponent {
        constructor(e) {
          super(e),
            this.CheckProps(e),
            (this.state = {
              m_CopiedYPos: 0,
              m_bPlayingCopiedAnimation: !1,
              m_bCompletedCopiedAnimation: !1,
              m_bNumberBelowMinRange: !1,
              m_bNumberAboveMaxRange: !1,
              m_bIsNotNumeric: !1,
              m_bIsInvalidURL: !1,
              m_bIsInvalidEmail: !1,
            });
        }
        componentDidUpdate(e) {
          this.CheckProps(this.props);
        }
        OnInputRef(e) {
          (this.m_elInput = e),
            this.m_elInput && this.props.focusOnMount && this.m_elInput.focus();
        }
        get element() {
          return this.m_elInput;
        }
        get value() {
          return this.m_elInput && this.m_elInput.value;
        }
        static validateUrl(e) {
          return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
            e
          );
        }
        static validateEmail(e) {
          return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            e.toLowerCase()
          );
        }
        Validate() {
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
              1 == this.props.mustBeURL && !X.validateUrl(this.m_elInput.value),
            m_bIsInvalidEmail:
              1 == this.props.mustBeEmail &&
              !X.validateEmail(this.m_elInput.value),
          });
        }
        OnChanged(e) {
          this.props.onChange && this.props.onChange(e), this.Validate();
        }
        OnCopyClick(e) {
          if (!this.m_elInput) return;
          this.m_elInput.select();
          let t = this.m_elInput.ownerDocument;
          if (t.queryCommandEnabled("copy")) {
            t.execCommand("copy"),
              e.currentTarget.focus(),
              this.m_CopiedAnimation && this.m_CopiedAnimation.Cancel();
            let n = -4,
              r = -24;
            this.setState({ m_bCompletedCopiedAnimation: !1 }),
              this.setState({ m_CopiedYPos: n }, () => {
                (this.m_CopiedAnimation = new K(
                  this,
                  { m_CopiedYPos: r },
                  {
                    msDuration: 300,
                    timing: "sine",
                    setStateOnComplete: { m_bCompletedCopiedAnimation: !0 },
                  }
                )),
                  this.m_CopiedAnimation.Start();
              });
          }
        }
        OnClearClick(e) {
          if (this.m_elInput && this.m_elInput.value) {
            Object.getOwnPropertyDescriptor(
              window.HTMLInputElement.prototype,
              "value"
            ).set.call(this.m_elInput, ""),
              this.m_elInput.dispatchEvent(new Event("input", { bubbles: !0 }));
          }
        }
        CheckProps(e) {
          Object(q.a)(
            !(e.bShowClearAction || e.bAlwaysShowClearAction) || e.onChange,
            "In order for bShowClearAction to work correctly, you should be handling onChange and passing value to the Dialog.Input."
          );
        }
        render() {
          const e = this.props,
            {
              label: t,
              explainer: n,
              requiredLabel: o,
              bShowCopyAction: c,
              bShowClearAction: l,
              bAlwaysShowClearAction: u,
              bIsPassword: d,
              rangeMin: m,
              rangeMax: h,
              mustBeNumeric: p,
              mustBeURL: g,
              mustBeEmail: b,
              focusOnMount: _,
              tooltip: v,
              inlineControls: w,
            } = e,
            y = Object(r.c)(e, [
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
              "inlineControls",
            ]);
          let C =
              "DialogInput DialogInputPlaceholder DialogTextInputBase" +
              (y.className ? " " + y.className : ""),
            S = "copiedAnimation",
            E = this.state.m_bCompletedCopiedAnimation;
          this.m_CopiedAnimation && (S = "copiedAnimation animationPlaying"),
            E && (S = "copiedAnimation animationComplete");
          let O,
            M = {};
          void 0 !== this.state.m_CopiedYPos &&
            (M.transform = "translateY(" + this.state.m_CopiedYPos + "px)"),
            n &&
              (O = i.createElement(
                "div",
                { className: "DialogLabelExplainer" },
                n
              ));
          let B = i.createElement(
            i.Fragment,
            null,
            i.createElement(
              f.a,
              {
                className: "DialogInput_Wrapper _DialogLayout",
                "flow-children": "row",
              },
              i.createElement(
                Y,
                Object.assign({ type: d ? "password" : "text" }, y, {
                  className: C,
                  ref: this.OnInputRef,
                  onChange: this.OnChanged,
                })
              ),
              c &&
                i.createElement(
                  "div",
                  { className: "displayRow" },
                  i.createElement(
                    k,
                    {
                      className: "DialogInput_CopyAction Primary",
                      onClick: this.OnCopyClick,
                    },
                    Object(a.f)("#Button_CopyLink")
                  ),
                  i.createElement(
                    "div",
                    { style: M, className: S },
                    "Link Copied"
                  )
                ),
              (u || (l && y.value)) &&
                i.createElement(
                  "div",
                  {
                    className: "DialogInput_ClearAction",
                    onClick: this.OnClearClick,
                  },
                  i.createElement(s.Ab, null)
                ),
              w
            ),
            O
          );
          return t
            ? i.createElement(
                "div",
                { className: "DialogInputLabelGroup _DialogLayout " },
                i.createElement(
                  "label",
                  null,
                  i.createElement(
                    "div",
                    { className: "DialogLabel" },
                    t,
                    " ",
                    this.props.tooltip &&
                      i.createElement(
                        "span",
                        { "data-tooltip-text": this.props.tooltip },
                        " (?)"
                      ),
                    i.createElement(
                      "span",
                      { className: "DialogInputRequirementLabel" },
                      this.props.requiredLabel
                    ),
                    " "
                  ),
                  B,
                  this.state.m_bNumberBelowMinRange
                    ? i.createElement(
                        "div",
                        null,
                        " ",
                        Object(a.f)("#Input_Error_NumberTooSmall"),
                        " "
                      )
                    : null,
                  this.state.m_bNumberAboveMaxRange
                    ? i.createElement(
                        "div",
                        null,
                        " ",
                        Object(a.f)("#Input_Error_NumberTooLarge"),
                        " "
                      )
                    : null,
                  this.state.m_bIsInvalidURL
                    ? i.createElement(
                        "div",
                        null,
                        " ",
                        Object(a.f)("#Input_Error_MustBeURL"),
                        " "
                      )
                    : null,
                  this.state.m_bIsInvalidEmail
                    ? i.createElement(
                        "div",
                        null,
                        " ",
                        Object(a.f)("#Input_Error_MustBeEmail"),
                        " "
                      )
                    : null,
                  this.state.m_bIsNotNumeric
                    ? i.createElement(
                        "div",
                        null,
                        " ",
                        Object(a.f)("#Input_Error_MustBeNumber"),
                        " "
                      )
                    : null
                )
              )
            : B;
        }
      }
      Object(r.b)([c.a], X.prototype, "OnInputRef", null),
        Object(r.b)([c.a], X.prototype, "OnChanged", null),
        Object(r.b)([c.a], X.prototype, "OnCopyClick", null),
        Object(r.b)([c.a], X.prototype, "OnClearClick", null);
      class $ extends X {
        OnBackgroundClick() {
          this.m_elInput && this.m_elInput.focus();
        }
        OnInputFocus(e) {
          this.m_bFocused || ((this.m_bFocused = !0), this.forceUpdate()),
            this.props.onFocus && this.props.onFocus(e);
        }
        OnInputBlur(e) {
          this.m_bFocused && ((this.m_bFocused = !1), this.forceUpdate()),
            this.props.onBlur && this.props.onBlur(e);
        }
        render() {
          let e = this.props,
            { label: t, explainer: n, children: o, className: s } = e,
            a = Object(r.c)(e, ["label", "explainer", "children", "className"]);
          return i.createElement(
            "div",
            {
              className:
                "DialogInputLabelGroup _DialogLayout DialogListBuilderInput",
            },
            i.createElement(
              "label",
              null,
              t && i.createElement("div", { className: "DialogLabel" }, t),
              i.createElement(
                "div",
                {
                  className:
                    "_DialogInputContainer" +
                    (this.m_bFocused ? " Active" : ""),
                  onClick: this.OnBackgroundClick,
                },
                i.createElement(
                  f.a,
                  {
                    className: "DialogListBuilderInput_List",
                    "flow-children": "row",
                  },
                  i.Children.map(o, (e, t) =>
                    i.createElement(
                      "div",
                      { className: "DialogListBuilderInput_ListItem", key: t },
                      e
                    )
                  ),
                  i.createElement(
                    b.f,
                    Object.assign({ type: "text" }, a, {
                      className:
                        "DialogListBuilderInput_Input DialogInputPlaceholder",
                      ref: this.OnInputRef,
                      onFocus: this.OnInputFocus,
                      onBlur: this.OnInputBlur,
                      size: 4,
                    })
                  )
                )
              ),
              this.props.explainer &&
                i.createElement("div", { className: "DialogLabelExplainer" }, n)
            )
          );
        }
      }
      Object(r.b)([c.a], $.prototype, "OnBackgroundClick", null),
        Object(r.b)([c.a], $.prototype, "OnInputFocus", null),
        Object(r.b)([c.a], $.prototype, "OnInputBlur", null);
      const Z = (e) =>
          "" + (null != e ? Number.parseFloat(e.toFixed(2)) : null),
        J = (e) => {
          const t = Object(u.b)();
          return i.createElement(
            d.f,
            Object.assign({ component: t.SliderField, fallback: Q }, e)
          );
        };
      class Q extends i.Component {
        constructor(e) {
          super(e), (this.m_flLastSetValue = null);
        }
        ClampValue(e) {
          return void 0 === e || isNaN(e) || e < this.props.min
            ? this.props.min
            : e > this.props.max
            ? this.props.max
            : e;
        }
        BPropsValid() {
          return this.props.max > this.props.min;
        }
        OnMouseDown(e) {
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
        }
        OnMouseMove(e) {
          this.AdjustSliderForClientX(e.clientX);
        }
        OnMouseUp(e) {
          this.m_elSlider.ownerDocument.defaultView.removeEventListener(
            "mousemove",
            this.OnMouseMove
          ),
            this.m_elSlider.ownerDocument.defaultView.removeEventListener(
              "mouseup",
              this.OnMouseUp
            ),
            this.CompleteChange();
        }
        OnTouchStart(e) {
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
        }
        OnTouchMove(e) {
          this.AdjustSliderForClientX(e.touches[0].clientX);
        }
        OnTouchEnd(e) {
          this.m_elSlider.ownerDocument.defaultView.removeEventListener(
            "touchmove",
            this.OnTouchMove
          ),
            this.m_elSlider.ownerDocument.defaultView.removeEventListener(
              "touchend",
              this.OnTouchEnd
            ),
            this.CompleteChange();
        }
        OnKeyDown(e) {
          let t = 1;
          e.ctrlKey &&
            (t = Math.max(
              1,
              Math.floor(0.1 * (this.props.max - this.props.min) + 0.5)
            )),
            37 == e.keyCode
              ? (this.IncrementValue(-1 * t), e.preventDefault())
              : 39 == e.keyCode &&
                (this.IncrementValue(1 * t), e.preventDefault()),
            this.CompleteChange();
        }
        AdjustSliderForClientX(e) {
          let t =
            ((e - this.m_rectSlider.left) /
              (this.m_rectSlider.right - this.m_rectSlider.left)) *
              (this.props.max - this.props.min) +
            this.props.min;
          t = Math.floor(t + 0.5);
          let n = this.ClampValue(t);
          n != this.props.value &&
            (this.props.onChange && this.props.onChange(n),
            (this.m_flLastSetValue = n));
        }
        CompleteChange() {
          null != this.m_flLastSetValue &&
            (this.props.onChangeComplete &&
              this.props.onChangeComplete(this.m_flLastSetValue),
            (this.m_flLastSetValue = null));
        }
        IncrementValue(e) {
          let t = this.ClampValue(this.props.value + e);
          t != this.props.value &&
            (this.props.onChange && this.props.onChange(t),
            (this.m_flLastSetValue = t));
        }
        render() {
          var e;
          let t = {},
            n = {};
          if (this.BPropsValid()) {
            let e =
              (100 * (this.props.value - this.props.min)) /
                (this.props.max - this.props.min) +
              "%";
            (t.width = e), (n.left = e);
          }
          let o,
            s = this.props,
            { label: a, explainer: c, tooltip: l } = s;
          Object(r.c)(s, ["label", "explainer", "tooltip"]);
          c &&
            (o = i.createElement(
              "div",
              { className: "DialogLabelExplainer" },
              c
            ));
          const u =
            null !== (e = this.props.renderValue) && void 0 !== e ? e : Z;
          return i.createElement(
            "div",
            {
              className:
                "DialogSlider_Container _DialogInputContainer _DialogLayout" +
                (this.props.classname ? " " + this.props.classname : ""),
              onKeyDown: this.OnKeyDown,
              tabIndex: this.props.tabIndex || 0,
            },
            a &&
              i.createElement(
                "div",
                { className: "DialogLabel" },
                a,
                Boolean(l) &&
                  i.createElement("span", { "data-tooltip-text": l }, " (?)")
              ),
            i.createElement(
              "div",
              {
                className: "DialogSlider_Slider",
                onMouseDown: this.OnMouseDown,
                onTouchStart: this.OnTouchStart,
              },
              i.createElement("div", {
                className: "DialogSlider_Value",
                style: t,
              }),
              i.createElement("div", {
                className: "DialogSlider_Grabber",
                style: n,
              })
            ),
            this.props.showValue &&
              i.createElement(
                "div",
                { className: "DialogLabelExplainer" },
                u(this.props.value),
                " ",
                this.props.valueSuffix
              ),
            o
          );
        }
      }
      Object(r.b)([c.a], Q.prototype, "OnMouseDown", null),
        Object(r.b)([c.a], Q.prototype, "OnMouseMove", null),
        Object(r.b)([c.a], Q.prototype, "OnMouseUp", null),
        Object(r.b)([c.a], Q.prototype, "OnTouchStart", null),
        Object(r.b)([c.a], Q.prototype, "OnTouchMove", null),
        Object(r.b)([c.a], Q.prototype, "OnTouchEnd", null),
        Object(r.b)([c.a], Q.prototype, "OnKeyDown", null);
      var ee = n("TtDX"),
        te = (n("y+6m"), n("P++D")),
        ne = n.n(te),
        re = n("5E+2"),
        ie = n("6+2x"),
        oe = n.n(ie);
      function se(e) {
        return "object" == typeof e && "data" in e;
      }
      function ae(e) {
        return "object" == typeof e && "options" in e;
      }
      function ce(e, t) {
        if (e === t) return !0;
        if (!Array.isArray(e) || !Array.isArray(t)) return !1;
        if (e.length != t.length) return !1;
        for (let n = 0; n < e.length; n++) if (!le(e[n], t[n])) return !1;
        return !0;
      }
      function le(e, t) {
        return null == e || null == t
          ? e == t
          : e.label === t.label &&
              e.tooltip === t.tooltip &&
              ae(e) == ae(t) &&
              !(ae(e) && ae(t) && !ce(e.options, t.options)) &&
              (!se(e) || !se(t) || e.data === t.data);
      }
      function ue(e, t) {
        if (null != e)
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            if (se(r) && r.data === t) return r;
            if (ae(r)) {
              const e = ue(r.options, t);
              if (null != e) return e;
            }
          }
      }
      function de(e) {
        const t = Object(u.b)();
        return i.createElement(
          d.f,
          Object.assign({ component: t.DropDownField, fallback: me }, e)
        );
      }
      function me(e) {
        const {
            label: t,
            tooltip: n,
            strClassName: o,
            dropDownControlRef: s,
          } = e,
          a = Object(r.c)(e, [
            "label",
            "tooltip",
            "strClassName",
            "dropDownControlRef",
          ]);
        return i.createElement(
          "div",
          {
            className: Object(l.a)("DialogInputLabelGroup", "_DialogLayout", o),
          },
          t &&
            i.createElement(
              "div",
              { className: "DialogLabel" },
              t,
              n && i.createElement("span", { "data-tooltip-text": n }, " (?)")
            ),
          i.createElement(ge, Object.assign({ menuLabel: t }, a, { ref: s }))
        );
      }
      const he = i.forwardRef(function (e, t) {
          const n = Object(u.b)();
          return i.createElement(
            d.f,
            Object.assign(
              {
                component: n.DropDownControlButton,
                fallback: pe,
                componentRef: t,
              },
              e
            )
          );
        }),
        pe = i.forwardRef(function (e, t) {
          return i.createElement(
            f.a,
            {
              focusable: e.focusable,
              noFocusRing: !0,
              className: Object(l.a)(
                e.className,
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
              i.createElement(
                "div",
                { className: "DialogDropDown_Arrow" },
                i.createElement(s.s, null)
              )
          );
        });
      class ge extends i.Component {
        constructor(e) {
          super(e),
            (this.state = {
              value: ue(e.rgOptions, e.selectedOption),
              bOpened: !1,
            });
        }
        SetSelectedOption(e) {
          const t = ue(this.props.rgOptions, e);
          le(t, this.state.value) || this.setState({ value: t });
        }
        get value() {
          return this.state.value;
        }
        shouldComponentUpdate(e, t, n) {
          if (e.selectedOption !== this.props.selectedOption) return !0;
          if (e.disabled != this.props.disabled) return !0;
          if (t.bOpened !== this.state.bOpened) return !0;
          if (!ce(this.props.rgOptions, e.rgOptions)) return !0;
          if (!le(t.value, this.state.value)) return !0;
          let r = ["selectedOption", "tabIndex", "onChange", "strDefaultLabel"];
          for (let t of r) if (e[t] !== this.props[t]) return !0;
          return !1;
        }
        componentDidUpdate(e, t) {
          const n = !ce(e.rgOptions, this.props.rgOptions),
            r = e.selectedOption !== this.props.selectedOption,
            i = this.state.value !== t.value;
          (n || i || r) &&
            (r || null == this.state.value
              ? this.SetSelectedOption(this.props.selectedOption)
              : this.SetSelectedOption(this.state.value.data)),
            (n || i) &&
              (this.state.bOpened
                ? (this.m_iMenuInstance.SetOnHideCallback(null),
                  this.m_iMenuInstance.Hide(),
                  (this.m_iMenuInstance = void 0),
                  this.BuildMenu())
                : this.m_iMenuInstance &&
                  (this.m_iMenuInstance.SetOnHideCallback(null),
                  (this.m_iMenuInstance = void 0)));
        }
        OnInputRef(e) {
          this.m_elInput = e;
        }
        get element() {
          return this.m_elInput;
        }
        ToggleMenu() {
          if (this.state.bOpened) this.HideMenu();
          else {
            if (
              this.props.onMenuWillOpen &&
              0 == this.props.onMenuWillOpen(this.ShowMenu)
            )
              return;
            this.ShowMenu();
          }
        }
        OnValueSelected(e) {
          this.HideMenu(),
            this.setState({ value: e }),
            this.props.onChange && this.props.onChange(e, this);
        }
        BuildMenu() {
          var e, t, n;
          let r = "DialogMenuPosition";
          this.props.strDropDownClassName &&
            (r += " " + this.props.strDropDownClassName);
          let o = Object.assign(
              {
                bOverlapHorizontal: !0,
                bMatchWidth: !0,
                bFitToWindow: !0,
                strClassName: r,
                bDisableMouseOverlay: this.props.bDisableMouseOverlay,
              },
              this.props.contextMenuPositionOptions
            ),
            s =
              null === (e = this.props.contextMenuPositionOptions) ||
              void 0 === e
                ? void 0
                : e.onCancel;
          (this.m_iMenuInstance = Object(ee.a)(
            i.createElement(be, {
              rgOptions: this.props.rgOptions,
              onValueSelected: this.OnValueSelected,
              onCancel: s,
              selectedValue:
                null === (t = this.value) || void 0 === t ? void 0 : t.data,
              strDropDownItemClassName: this.props.strDropDownItemClassName,
            }),
            this.m_elInput,
            o
          )),
            this.m_iMenuInstance.SetLabel(
              null !== (n = this.props.menuLabel) && void 0 !== n
                ? n
                : "string" == typeof this.props.strDefaultLabel &&
                    this.props.strDefaultLabel
            ),
            this.m_iMenuInstance.SetOnHideCallback(this.HideMenu);
        }
        ShowMenu() {
          this.m_iMenuInstance ? this.m_iMenuInstance.Show() : this.BuildMenu(),
            this.props.onMenuOpened && this.props.onMenuOpened(),
            this.setState({ bOpened: !0 });
        }
        HideMenu() {
          this.m_iMenuInstance && this.m_iMenuInstance.Hide(),
            this.setState({ bOpened: !1 });
        }
        render() {
          var e, t, n, r, o;
          const s = i.createElement(
              "div",
              { className: "DialogDropDown_CurrentDisplay" },
              null !==
                (t =
                  null === (e = this.state.value) || void 0 === e
                    ? void 0
                    : e.label) && void 0 !== t
                ? t
                : this.props.strDefaultLabel
            ),
            a =
              null != this.props.renderButtonValue
                ? this.props.renderButtonValue(s)
                : s,
            c = null === (n = this.props.focusable) || void 0 === n || n;
          return i.createElement(
            d.f,
            {
              component: this.props.renderButton,
              fallback: he,
              focusable: c,
              disabled: null !== (r = this.props.disabled) && void 0 !== r && r,
              opened: this.state.bOpened,
              onClick: this.props.disabled ? void 0 : this.ToggleMenu,
              tabIndex:
                null !== (o = this.props.tabIndex) && void 0 !== o
                  ? o
                  : c
                  ? 0
                  : null,
              componentRef: this.OnInputRef,
              className: this.props.strDropDownButtonClassName,
            },
            a
          );
        }
      }
      (ge.contextType = u.a),
        Object(r.b)([c.a], ge.prototype, "OnInputRef", null),
        Object(r.b)([c.a], ge.prototype, "ToggleMenu", null),
        Object(r.b)([c.a], ge.prototype, "OnValueSelected", null),
        Object(r.b)([c.a], ge.prototype, "ShowMenu", null),
        Object(r.b)([c.a], ge.prototype, "HideMenu", null);
      const fe = i.createContext(null);
      function be(e) {
        const t = Object(u.b)();
        return i.createElement(
          fe.Provider,
          { value: {} },
          i.createElement(
            d.f,
            Object.assign({ component: t.DropDownMenu, fallback: _e }, e)
          )
        );
      }
      function _e(e) {
        var t;
        const n = [e.rgOptions],
          r = [];
        for (; n.length > 0; )
          null === (t = n.shift()) ||
            void 0 === t ||
            t.forEach((t, o) => {
              se(t)
                ? r.push(
                    i.createElement(
                      "div",
                      {
                        key: o,
                        className: Object(l.a)(
                          ne.a.DialogDropDownMenu_Item,
                          e.strDropDownItemClassName,
                          t.strOptionClass
                        ),
                        "data-dropdown-index": o,
                        onClick: () =>
                          e.onValueSelected && e.onValueSelected(t),
                      },
                      Boolean(t.tooltip)
                        ? i.createElement(
                            re.a,
                            {
                              toolTipContent: t.tooltip,
                              strTooltipClassname: oe.a.HoverAboveModal,
                            },
                            t.label
                          )
                        : i.createElement(i.Fragment, null, t.label)
                    )
                  )
                : ae(t) && n.push(t.options);
            });
        return i.createElement(
          "div",
          {
            className: Object(l.a)(
              ne.a.DialogDropDownMenu,
              "_DialogInputContainer"
            ),
          },
          r
        );
      }
      class ve extends i.Component {
        constructor() {
          super(...arguments), (this.state = { rgOptions: void 0 });
        }
        OnMenuOpened() {
          return Object(r.a)(this, void 0, void 0, function* () {
            if (!this.state.rgOptions) {
              let e = yield this.props.fnLoadOptions();
              this.setState({ rgOptions: e });
            }
          });
        }
        render() {
          const e = this.props,
            { fnLoadOptions: t, strInitialDisplay: n, initialValue: o } = e,
            s = Object(r.c)(e, [
              "fnLoadOptions",
              "strInitialDisplay",
              "initialValue",
            ]);
          let { rgOptions: a } = this.state;
          return (
            void 0 === a &&
              (n || o
                ? ((a = [{ label: n, data: o }]), (s.selectedOption = o))
                : (a = [])),
            i.createElement(
              de,
              Object.assign({}, s, {
                rgOptions: a,
                onMenuOpened: this.OnMenuOpened,
              })
            )
          );
        }
      }
      Object(r.b)([c.a], ve.prototype, "OnMenuOpened", null);
      n("HZAb");
      var we = n("2vnA"),
        ye = n("sUmc"),
        Ce = n("Kw0F"),
        Se = n("YyVH");
      class Ee extends i.Component {
        constructor() {
          super(...arguments), (this.m_coordinator = new Me());
        }
        OnDrop(e, t) {
          t > e && t--, t != e && this.props.onReorder(e, t);
        }
        render() {
          let e = [];
          return (
            e.push(
              i.createElement(Ie, {
                coordinator: this.m_coordinator,
                key: "dropregion_top",
                fnBAcceptDraggable: (e) => 0 != e.props.data,
                fnOnDrop: (e) => this.OnDrop(e.props.data, 0),
              })
            ),
            i.Children.forEach(this.props.children, (t, n) => {
              const r = t.props.id || "__list_" + n,
                o = n + 1;
              e.push(
                i.createElement(
                  Be,
                  { coordinator: this.m_coordinator, data: n, key: r },
                  t
                )
              ),
                e.push(
                  i.createElement(Ie, {
                    coordinator: this.m_coordinator,
                    key: "dropregion_" + r,
                    fnBAcceptDraggable: (e) => e.props.data != o,
                    fnOnDrop: (e) => this.OnDrop(e.props.data, o),
                  })
                );
            }),
            i.createElement("div", { className: "DialogReorderableList" }, e)
          );
        }
      }
      function Oe(e, t, n, r) {
        return r
          ? n && e > n.left && e < n.right && t > n.top && t < n.bottom
          : n && e >= n.left && e <= n.right && t >= n.top && t <= n.bottom;
      }
      Object(r.b)([c.a], Ee.prototype, "OnDrop", null);
      class Me {
        constructor() {
          (this.m_embeddedElement = new ye.a("DragGhosts")),
            (this.m_rgDropRegions = []),
            (this.m_rgActiveDropRegions = []);
        }
        RegisterDropRegion(e) {
          this.m_rgDropRegions.push(e),
            this.m_activeDraggable &&
              e.BAcceptDraggable(this.m_activeDraggable) &&
              (e.OnDragStarted(this.m_activeDraggable),
              this.m_rgActiveDropRegions.push(e));
        }
        UnregisterDropRegion(e) {
          Ce.b(this.m_rgDropRegions, e),
            Ce.b(this.m_rgActiveDropRegions, e),
            this.m_activeDropRegion == e &&
              ((this.m_activeDropRegion = void 0),
              this.m_activeDraggable && this.ShowDragGhost());
        }
        OnDragGhostRef(e) {
          this.m_dragGhost = e;
        }
        ShowDragGhost() {
          const e = this.m_activeDraggable.renderDragGhost(),
            t = Object(l.a)(
              e.props.className,
              !!this.m_activeDropRegion && "DraggedOverActiveDrop"
            ),
            n = i.cloneElement(e, { ref: this.OnDragGhostRef, className: t });
          this.m_embeddedElement.ShowElement(
            this.m_activeDraggable.GetDragDocument(),
            n,
            this.m_activeDraggable
          );
        }
        HideDragGhost() {
          this.m_embeddedElement.HideElement(
            this.m_activeDraggable.GetDragDocument(),
            this.m_activeDraggable
          );
        }
        OnDragStart(e) {
          (this.m_activeDraggable = e), (this.m_rgActiveDropRegions = []);
          for (let t of this.m_rgDropRegions)
            t.BAcceptDraggable(e) &&
              (t.OnDragStarted(e), this.m_rgActiveDropRegions.push(t));
          this.ShowDragGhost();
        }
        EndDrag() {
          if (this.m_activeDraggable) {
            this.HideDragGhost(),
              this.m_activeDropRegion &&
                this.m_activeDropRegion.OnDrop(this.m_activeDraggable);
            for (let e of this.m_rgActiveDropRegions)
              e.OnDragEnded(this.m_activeDraggable);
            (this.m_activeDraggable = void 0),
              (this.m_dropGhost = void 0),
              (this.m_rgActiveDropRegions = []);
          }
        }
        FindBestActiveDropRegionForPoint(e, t) {
          const n = this.m_activeDraggable.GetDragDocument();
          let r;
          if ("elementsFromPoint" in n) r = n.elementsFromPoint(e, t);
          else if ("msElementsFromPoint" in n) {
            const i = n.msElementsFromPoint;
            r = Array.from(i(e, t));
          }
          if (r) {
            const e = new Map();
            this.m_rgActiveDropRegions.forEach((t) => e.set(t.GetElement(), t));
            for (const t of r) {
              const n = e.get(t);
              if (n) return n;
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
            for (let n = this.m_rgActiveDropRegions.length - 1; n >= 0; n--) {
              const r = this.m_rgActiveDropRegions[n];
              if (r.BDraggableInRegion(e, t, this.m_activeDraggable)) return r;
            }
          }
          return null;
        }
        OnDrag(e, t, n) {
          const r = void 0 === t ? 0 : t - this.m_dragGhost.state.clientX,
            i = void 0 === n ? 0 : n - this.m_dragGhost.state.clientY;
          if (
            (e.props.bEnableHTMLDrag &&
              this.m_dragOffWindowTimer &&
              window.clearTimeout(this.m_dragOffWindowTimer),
            this.m_dragGhost &&
              (this.m_dragGhost.setState({
                clientX: t,
                clientY: n,
                clientXDelta: r,
                clientYDelta: i,
                bVisible: !0,
              }),
              e.props.bEnableHTMLDrag && (r || i)))
          ) {
            const o = t + r,
              s = n + i,
              a = e.GetDragDocument().body.getBoundingClientRect();
            if (Oe(t, n, a) && !Oe(o, s, a, !0)) {
              const t = Se.c(o, a.left, a.right, a.left - 200, a.right + 200),
                n = Se.c(s, a.top, a.bottom, a.top - 100, a.bottom + 100),
                r = 50;
              this.m_dragOffWindowTimer = window.setTimeout(() => {
                e == this.m_activeDraggable && this.OnDrag(e, t, n);
              }, r);
            }
          }
          const o = this.FindBestActiveDropRegionForPoint(t, n);
          !!this.m_activeDropRegion != !!o &&
            (this.ShowDragGhost(),
            this.m_dropGhost ||
              (this.m_dropGhost = this.m_activeDraggable.renderDropGhost())),
            this.m_activeDropRegion &&
              this.m_activeDropRegion != o &&
              this.m_activeDropRegion.OnDragLeave(this.m_activeDraggable),
            o &&
              this.m_activeDropRegion != o &&
              o.OnDragEnter(this.m_activeDraggable, this.m_dropGhost),
            (this.m_activeDropRegion = o),
            this.m_activeDropRegion &&
              this.m_activeDropRegion.OnDragMove(t, n, this.m_activeDraggable);
        }
      }
      Object(r.b)([c.a], Me.prototype, "OnDragGhostRef", null);
      class Be extends i.Component {
        constructor() {
          super(...arguments),
            (this.m_DragInfo = {
              bStarted: !1,
              startClientX: void 0,
              startClientY: void 0,
              startOffsetX: void 0,
              startOffsetY: void 0,
              startWidth: void 0,
              startHeight: void 0,
              ownerWin: void 0,
            }),
            (this.m_divRef = i.createRef());
        }
        GetDragDocument() {
          return this.m_DragInfo.ownerWin && this.m_DragInfo.ownerWin.document;
        }
        RecordDragStart(e, t, n) {
          (this.m_DragInfo.startClientX = t),
            (this.m_DragInfo.startClientY = n);
          let r = e.getBoundingClientRect();
          (this.m_DragInfo.startOffsetX = t - r.left),
            (this.m_DragInfo.startOffsetY = n - r.top),
            (this.m_DragInfo.startWidth = r.width),
            (this.m_DragInfo.startHeight = r.height),
            (this.m_DragInfo.ownerWin = e.ownerDocument.defaultView);
        }
        ProcessDragMove(e) {
          const [t, n] = (function (e) {
            if ("touches" in e) {
              let t = e;
              return [t.touches[0].clientX, t.touches[0].clientY];
            }
            return [e.clientX, e.clientY];
          })(e);
          if (this.m_DragInfo.bStarted) {
            if (this.props.bEnableHTMLDrag && 0 == t && 0 == n) return;
            this.props.coordinator.OnDrag(this, t, n);
          } else
            Math.pow(t - this.m_DragInfo.startClientX, 2) +
              Math.pow(n - this.m_DragInfo.startClientY, 2) >=
              25 &&
              ((this.m_DragInfo.bStarted = !0),
              this.forceUpdate(),
              this.props.fnOnDragStart && this.props.fnOnDragStart(),
              this.props.coordinator.OnDragStart(this),
              this.props.coordinator.OnDrag(this, t, n));
        }
        OnMouseDown(e) {
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
        }
        OnMouseUp(e) {
          this.m_DragInfo.ownerWin.removeEventListener(
            "mousemove",
            this.ProcessDragMove
          ),
            this.m_DragInfo.ownerWin.removeEventListener(
              "mouseup",
              this.OnMouseUp
            ),
            this.ResetDragState();
        }
        OnTouchStart(e) {
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
        }
        OnTouchEnd(e) {
          this.m_DragInfo.ownerWin.removeEventListener(
            "touchmove",
            this.ProcessDragMove
          ),
            this.m_DragInfo.ownerWin.removeEventListener(
              "touchend",
              this.OnTouchEnd
            ),
            this.ResetDragState();
        }
        ResetDragState() {
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
        }
        OnHTMLDragStart(e) {
          (e.dataTransfer.effectAllowed = "copyMove"),
            this.props.strHTMLDragData &&
              this.props.strHTMLDragData.forEach((t, n) =>
                e.dataTransfer.setData(n, t)
              ),
            e.dataTransfer.getData("text/plain") ||
              e.dataTransfer.setData("text/plain", this.props.data.toString());
          const t = new Image();
          e.dataTransfer.setDragImage(t, 0, 0),
            this.RecordDragStart(e.currentTarget, e.clientX, e.clientY);
        }
        OnHTMLDragEnd() {
          this.ResetDragState();
        }
        render() {
          const e = this.props,
            {
              coordinator: t,
              data: n,
              bEnableHTMLDrag: o,
              strHTMLDragData: s,
              fnOnDragStart: a,
              fnOnDragEnd: c,
              fnRenderDragGhost: u,
              fnRenderDropGhost: d,
              className: m,
              strActiveClassName: h,
              children: p,
            } = e,
            g = Object(r.c)(e, [
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
            ]);
          let f = {},
            b = m || "DialogDraggable";
          return (
            this.m_DragInfo.bStarted
              ? ((b = Object(l.a)(b, h || "DraggedOut")),
                o &&
                  (f = {
                    onDrag: this.ProcessDragMove,
                    onDragEnd: this.OnHTMLDragEnd,
                  }))
              : (f = o
                  ? {
                      onDragStart: this.OnHTMLDragStart,
                      onDrag: this.ProcessDragMove,
                      onDragEnd: this.OnHTMLDragEnd,
                    }
                  : {
                      onMouseDown: this.OnMouseDown,
                      onTouchStart: this.OnTouchStart,
                    }),
            i.createElement(
              "div",
              Object.assign({ ref: this.m_divRef, className: b }, f, g, {
                draggable: o,
              }),
              p
            )
          );
        }
        renderDropGhost() {
          return this.props.fnRenderDropGhost
            ? this.props.fnRenderDropGhost()
            : i.createElement(De, { elContent: this.GetClone() });
        }
        renderDragGhost() {
          return this.props.fnRenderDragGhost
            ? this.props.fnRenderDragGhost()
            : i.createElement(Re, {
                elContent: this.GetClone(),
                offsetX: this.m_DragInfo.startOffsetX,
                offsetY: this.m_DragInfo.startOffsetY,
                width: this.m_DragInfo.startWidth,
                height: this.m_DragInfo.startHeight,
              });
        }
        GetClone() {
          const e = this.m_divRef.current;
          let t;
          if (e && e.childElementCount)
            if (1 == e.childElementCount) t = e.firstElementChild.cloneNode(!0);
            else {
              t = document.createElement("div");
              for (let n = e.firstChild; n; n = n.nextSibling)
                t.appendChild(n.cloneNode(!0));
            }
          return t;
        }
      }
      Object(r.b)([c.a], Be.prototype, "ProcessDragMove", null),
        Object(r.b)([c.a], Be.prototype, "OnMouseDown", null),
        Object(r.b)([c.a], Be.prototype, "OnMouseUp", null),
        Object(r.b)([c.a], Be.prototype, "OnTouchStart", null),
        Object(r.b)([c.a], Be.prototype, "OnTouchEnd", null),
        Object(r.b)([we.k], Be.prototype, "ResetDragState", null),
        Object(r.b)([c.a], Be.prototype, "OnHTMLDragStart", null),
        Object(r.b)([c.a], Be.prototype, "OnHTMLDragEnd", null);
      class De extends i.Component {
        OnRef(e) {
          e && e.appendChild(this.props.elContent);
        }
        render() {
          return i.createElement("div", {
            className: "DialogDraggable_DropGhost",
            ref: this.OnRef,
          });
        }
      }
      Object(r.b)([c.a], De.prototype, "OnRef", null);
      class Re extends i.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              clientX: void 0,
              clientY: void 0,
              bVisible: !0,
              clientXDelta: void 0,
              clientYDelta: void 0,
            });
        }
        OnRef(e) {
          e && e.appendChild(this.props.elContent);
        }
        CalculateRotationDegrees(e) {
          if (!e || Math.abs(e) < 4) return 0;
          return (e > 0 ? 7.5 : -7.5) * Math.sqrt(Math.abs(e));
        }
        render() {
          if (
            !this.state.bVisible ||
            void 0 === this.state.clientX ||
            void 0 === this.state.clientY
          )
            return i.createElement("div", null);
          let e = {
              left: this.state.clientX - (this.props.offsetX || 0),
              top: this.state.clientY - (this.props.offsetY || 0),
              width: this.props.width || "auto",
              height: this.props.height || "auto",
              perspective: "600px",
            },
            t = Se.c(
              this.CalculateRotationDegrees(this.state.clientYDelta),
              -90,
              90,
              2,
              0
            ),
            n = {
              transform: `rotateX(${this.CalculateRotationDegrees(
                -1 * this.state.clientYDelta
              )}deg) rotateY( ${this.CalculateRotationDegrees(
                this.state.clientXDelta
              )}deg)`,
              transition: "transform .16s ease-out, filter .16s ease-out",
              filter: "brightness(" + t + ")",
            };
          const r = this.props.className || "DialogDraggable_DragGhost";
          return i.createElement(
            "div",
            { className: r, style: e },
            i.createElement("div", { ref: this.OnRef, style: n })
          );
        }
      }
      Object(r.b)([c.a], Re.prototype, "OnRef", null);
      class Te extends i.Component {
        constructor(e) {
          super(e), (this.m_divRef = i.createRef()), (this.state = {});
        }
        componentDidMount() {
          this.props.coordinator.RegisterDropRegion(this);
        }
        componentWillUnmount() {
          this.props.coordinator.UnregisterDropRegion(this);
        }
        OnDragStarted(e) {
          this.setState({ bDraggableActive: !0 });
        }
        OnDragEnded(e) {
          this.setState({ bDraggableActive: !1 });
        }
        OnDragEnter(e, t) {
          this.setState({ dropGhost: t }),
            this.props.fnOnDragEnter && this.props.fnOnDragEnter(e);
        }
        OnDragLeave(e) {
          this.setState({ dropGhost: void 0 }),
            this.props.fnOnDragLeave && this.props.fnOnDragLeave(e);
        }
        OnDragMove(e, t, n) {}
        OnDrop(e) {
          this.setState({ dropGhost: void 0 }), this.props.fnOnDrop(e);
        }
        BAcceptDraggable(e) {
          return (
            !this.props.fnBAcceptDraggable || this.props.fnBAcceptDraggable(e)
          );
        }
        BDraggableInRegion(e, t, n) {
          return Oe(e, t, this.GetClientRect());
        }
        GetElement() {
          return this.m_divRef.current;
        }
        GetClientRect() {
          return (
            this.m_divRef.current &&
            this.m_divRef.current.getBoundingClientRect()
          );
        }
        render() {
          const e = this.props,
            {
              coordinator: t,
              fnBAcceptDraggable: n,
              fnOnDrop: o,
              fnOnDragEnter: s,
              fnOnDragLeave: a,
              className: c,
              strActiveClassName: u,
              children: d,
              focusable: m,
            } = e,
            h = Object(r.c)(e, [
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
            p = Object(l.a)(
              c || "DialogDropRegion",
              this.state.bDraggableActive && (u || "Active")
            );
          return i.createElement(
            b.e,
            Object.assign({ ref: this.m_divRef, className: p }, h, {
              focusable: void 0 === m ? !!h.onClick : m,
            }),
            this.state.dropGhost,
            d
          );
        }
      }
      class Ie extends Te {
        BDraggableInRegion(e, t, n) {
          let r = this.GetClientRect();
          return (
            !!r &&
            e >= r.left &&
            e <= r.right &&
            t >= r.top - 20 &&
            t <= r.bottom + 20
          );
        }
      }
      var xe = n("rHSA"),
        ke = (n("NxAk"), n("d1jy")),
        Le = n("IjL/"),
        Ne = n("zBSo"),
        je = n.n(Ne),
        Fe = n("j+5p");
      const Ae = "separator";
      function Pe(e) {
        return i.createElement(
          f.a,
          Object.assign({ navEntryPreferPosition: Fe.d.PREFERRED_CHILD }, e)
        );
      }
      function Ge(e) {
        const { title: t, icon: n, active: o } = e,
          s = Object(r.c)(e, ["title", "icon", "active"]);
        return i.createElement("div", Object.assign({}, s), t);
      }
      function We(e) {
        var t;
        const n =
          null !== (t = e.activePage.padding) && void 0 !== t ? t : "standard";
        return i.createElement(
          B,
          {
            className: Object(l.a)(
              e.stylesheet.PagedSettingsDialog_PageContent,
              e.activePage.pageClassName,
              { [e.stylesheet.NoPadding]: "none" == n }
            ),
          },
          e.activePage.header,
          !e.hideTitle && i.createElement(v, null, e.activePage.title),
          i.createElement(
            Le.a,
            { errorKey: e.activePage.title },
            null != e.activePage.content && i.cloneElement(e.activePage.content)
          )
        );
      }
      i.forwardRef((e, t) => {
        var n, r;
        const o = null !== (n = e.stylesheet) && void 0 !== n ? n : je.a,
          s = e.pages,
          a =
            null != e.startingPage
              ? s.findIndex((t) => t != Ae && t.identifier === e.startingPage)
              : -1,
          c = null == e.page,
          [u, m] = i.useState(a);
        let h = u;
        c || (h = s.findIndex((t) => t != Ae && t.identifier === e.page)),
          (h < 0 || h >= s.length) && (h = 0);
        let p = null;
        s[h] != Ae && (p = s[h]);
        let g = (function (e) {
          let t = i.useRef(e),
            n = i.useRef("none"),
            r = t.current;
          if (r == e) return n.current;
          let o = "none";
          r < e ? (o = "down") : r > e && (o = "up");
          return (t.current = e), (n.current = o), o;
        })(h);
        const b = i.useRef(),
          _ = i.useCallback(() => b.current.TakeFocus(), [b]),
          v = s.map((t, n) => {
            if (t === Ae)
              return i.createElement(
                i.Fragment,
                { key: n },
                e.renderPageListSeparator({})
              );
            if (!1 === t.visible) return null;
            const r = t == p;
            return i.createElement(d.f, {
              component: e.renderPageListItem,
              fallback: Ge,
              className: Object(l.a)(
                o.PagedSettingsDialog_PageListItem,
                { [o.Active]: r },
                t.entryClassName
              ),
              key: t.title,
              onClick: () => {
                ke.a.PlayNavSound(ke.b.PagedNavigation),
                  e.onPageRequested && e.onPageRequested(t.identifier),
                  t.click ? t.click() : c && n != u && m(n);
              },
              title: t.title,
              icon: t.icon,
              active: r,
            });
          }),
          w = i.useRef(),
          y = p.hideTitle,
          C = null === (r = e.showTitle) || void 0 === r || r,
          S = Object(l.a)(
            "DialogContentTransition",
            o.PagedSettingDialog_ContentColumn
          );
        return i.createElement(
          f.a,
          {
            className: Object(l.a)(o.PagedSettingsDialog, e.className),
            ref: t,
          },
          i.createElement(
            f.a,
            {
              className: o.PagedSettingsDialog_PageListColumn,
              navRef: b,
              onButtonDown: (e) => {
                var t;
                e.detail.button == xe.a.OK &&
                  (null === (t = w.current) ||
                    void 0 === t ||
                    t.TakeFocus(e.detail.button));
              },
            },
            C &&
              i.createElement(
                "div",
                { className: o.PagedSettingsDialog_Title },
                e.title
              ),
            e.topControls && i.createElement("div", null, e.topControls),
            i.createElement(
              d.f,
              {
                component: e.renderPageList,
                fallback: Pe,
                className: o.PagedSettingsDialog_PageList,
              },
              v
            ),
            e.bottomControls && i.createElement("div", null, e.bottomControls)
          ),
          i.createElement(
            f.a,
            { className: S, onCancelButton: _, navRef: w },
            i.createElement(
              d.f,
              {
                component: e.renderPageAnimation,
                fallback: Ue,
                activePage: p,
                direction: g,
              },
              p &&
                i.createElement(We, {
                  key: p.identifier,
                  stylesheet: o,
                  hideTitle: y,
                  activePage: p,
                })
            )
          )
        );
      });
      function Ue(e) {
        return i.createElement(i.Fragment, null, e.children);
      }
      class ze extends i.Component {
        constructor() {
          super(...arguments),
            (this.m_refTextArea = i.createRef()),
            (this.m_cEntryLength = Number.MAX_VALUE);
        }
        get textarea() {
          return this.m_refTextArea.current;
        }
        get value() {
          return this.m_refTextArea.current && this.m_refTextArea.current.value;
        }
        focus() {
          this.m_refTextArea.current.focus();
        }
        InternalOnInput() {
          const e = this.m_refTextArea.current,
            t = this.GetMinHeight(),
            n = this.GetMaxHeight();
          let r,
            i = e.value.length;
          if (
            (void 0 === this.m_nTextAreaPadding && this.CalculatePadding(),
            i < this.m_cEntryLength &&
              ((r = window.scrollY), (e.style.height = t + "px")),
            e.scrollHeight > n)
          )
            (e.style.height = n + "px"), (e.style.overflow = "auto");
          else if (e.scrollHeight != e.clientHeight) {
            let n = Math.max(e.scrollHeight, t);
            (e.style.height = n - this.m_nTextAreaPadding + "px"),
              "auto" == e.style.overflow && (e.style.overflow = "hidden");
          }
          void 0 !== r && window.scrollTo(window.scrollX, r),
            (this.m_cEntryLength = i);
        }
        CalculatePadding() {
          const e = getComputedStyle(this.m_refTextArea.current);
          this.m_nTextAreaPadding =
            parseFloat(e.paddingTop) + parseFloat(e.paddingBottom);
        }
        GetMinHeight() {
          return this.props.nMinHeight || 20;
        }
        GetMaxHeight() {
          return this.props.nMaxHeight || 500;
        }
        DeferredInternalOnInput() {
          window.setTimeout(this.InternalOnInput, 1);
        }
        OnKeyUp(e) {
          this.InternalOnInput(), this.props.onKeyUp && this.props.onKeyUp(e);
        }
        OnBlur(e) {
          this.DeferredInternalOnInput(),
            this.props.onBlur && this.props.onBlur(e);
        }
        OnClick(e) {
          this.InternalOnInput(), this.props.onClick && this.props.onClick(e);
        }
        OnPaste(e) {
          this.DeferredInternalOnInput(),
            this.props.onPaste && this.props.onPaste(e);
        }
        OnCut(e) {
          this.InternalOnInput(), this.props.onCut && this.props.onCut(e);
        }
        componentDidMount() {
          (this.m_refTextArea.current.style.overflow = "hidden"),
            (this.m_refTextArea.current.style.resize = "none"),
            this.InternalOnInput();
        }
        componentDidUpdate(e) {
          (e.nMinHeight == this.props.nMinHeight &&
            e.nMaxHeight == this.props.nMaxHeight) ||
            (this.m_cEntryLength = Number.MAX_VALUE),
            this.m_refTextArea.current.value.length != this.m_cEntryLength &&
              this.InternalOnInput();
        }
        render() {
          const e = this.props,
            { nMinHeight: t, nMaxHeight: n, renderTextArea: o } = e,
            s = Object(r.c)(e, ["nMinHeight", "nMaxHeight", "renderTextArea"]);
          return (
            o || ((e) => i.createElement("textarea", Object.assign({}, e)))
          )(
            Object.assign(Object.assign({}, s), {
              ref: this.m_refTextArea,
              onKeyUp: this.OnKeyUp,
              onBlur: this.OnBlur,
              onClick: this.OnClick,
              onPaste: this.OnPaste,
              onCut: this.OnCut,
            })
          );
        }
      }
      Object(r.b)([c.a], ze.prototype, "InternalOnInput", null),
        Object(r.b)([c.a], ze.prototype, "OnKeyUp", null),
        Object(r.b)([c.a], ze.prototype, "OnBlur", null),
        Object(r.b)([c.a], ze.prototype, "OnClick", null),
        Object(r.b)([c.a], ze.prototype, "OnPaste", null),
        Object(r.b)([c.a], ze.prototype, "OnCut", null);
    },
    NtSG: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var r = n("hRO2");
      n("OS8t");
      r.Message;
      function i(e) {
        return "unknown EMsg ( " + e + " )";
      }
    },
    NxAk: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return l.a;
      }),
        n.d(t, "e", function () {
          return u;
        }),
        n.d(t, "b", function () {
          return d;
        }),
        n.d(t, "i", function () {
          return m;
        }),
        n.d(t, "d", function () {
          return h;
        }),
        n.d(t, "g", function () {
          return p;
        }),
        n.d(t, "h", function () {
          return g;
        }),
        n.d(t, "f", function () {
          return f;
        }),
        n.d(t, "a", function () {
          return b;
        });
      var r = n("rHSA"),
        i = (n("9cYf"), n("r64O")),
        o = n("BaVA"),
        s = n("j+5p");
      class a {
        constructor(e) {
          this.m_root = e;
        }
        static SerializeNavNode(e, t = !0, n = !0) {
          let r = null;
          const [i, o] = e.GetChildren();
          return (
            i.length &&
              -1 != o &&
              t &&
              (r = i.map((e, t) => a.SerializeNavNode(e, t == o || n, n))),
            { sNavKey: e.NavKey, iActiveChild: o, rgChildren: r }
          );
        }
        static RestoreSerializedNavNode(e, t) {
          const { sNavKey: n, iActiveChild: r, rgChildren: o } = t;
          if (
            (n && Object(i.a)(n == e.NavKey, "navkey mismatch"),
            e.SetActiveChild(r),
            o && o.length)
          ) {
            const [t] = e.GetChildren();
            let n = new Map();
            t.forEach((e) => {
              e.NavKey && n.set(e.NavKey, e);
            });
            for (const e of o) {
              if (!e.sNavKey) continue;
              const t = n.get(e.sNavKey);
              t && a.RestoreSerializedNavNode(t, e);
            }
            if (-1 != r && o[r].sNavKey) {
              const i = n.get(o[r].sNavKey);
              i && e.SetActiveChild(t.indexOf(i));
            }
            let i = 0,
              s = 0;
            for (; i < t.length && s < o.length; ) {
              for (; i < t.length && t[i].NavKey; ) i++;
              for (; s < o.length && o[s].sNavKey; ) s++;
              if (i >= t.length || s >= o.length) break;
              a.RestoreSerializedNavNode(t[i], o[s]), i++, s++;
            }
          }
        }
      }
      class c extends a {
        constructor() {
          super(...arguments), (this.m_rgHistory = []);
        }
        PushState() {
          this.m_rgHistory.push(a.SerializeNavNode(this.m_root));
        }
        PopState() {
          this.m_rgHistory.length &&
            (a.RestoreSerializedNavNode(this.m_root, this.m_rgHistory.pop()),
            this.m_root.BTakeFocus(o.c.APPLICATION));
        }
      }
      var l = n("ZFdz");
      n("kKgT");
      class u {
        constructor(e) {
          (this.m_node = e), (this.m_History = new c(e));
        }
        TakeFocus(e) {
          return this.m_node.BTakeFocus(e ? o.c.GAMEPAD : o.c.APPLICATION, e);
        }
        ParentTakeFocus(e) {
          this.m_node.Parent.BTakeFocus(e ? o.c.GAMEPAD : o.c.APPLICATION, e);
        }
        ChildTakeFocus(e) {
          return this.m_node.BChildTakeFocus(
            e ? o.c.GAMEPAD : o.c.APPLICATION,
            e
          );
        }
        FocusVisibleChild(e) {
          return this.m_node.BVisibleChildTakeFocus(e);
        }
        BHasFocus() {
          return this.m_node.BHasFocus();
        }
        BFocusWithin() {
          return this.m_node.BFocusWithin();
        }
        get NavKey() {
          return this.m_node.NavKey;
        }
        PushState() {
          this.m_History.PushState();
        }
        PopState() {
          this.m_History && this.m_History.PopState();
        }
        NavTree() {
          return this.m_node.Tree;
        }
        Node() {
          return this.m_node;
        }
      }
      function d(e, t, n) {
        return "x" == e
          ? t.x + t.width > n.x && t.x < n.x + n.width
          : "y" == e
          ? t.y + t.height > n.y && t.y < n.y + n.height
          : (Object(i.a)(!1, `Invalid axis ${e}`), !1);
      }
      function m(e, t, n) {
        let r;
        return (
          "x" == e
            ? (r = Math.min(t.x + t.width, n.x + n.width) - Math.max(t.x, n.x))
            : "y" == e
            ? (r =
                Math.min(t.y + t.height, n.y + n.height) - Math.max(t.y, n.y))
            : (Object(i.a)(!1, `Invalid axis ${e}`), (r = 0)),
          r < 0 ? 0 : r
        );
      }
      function h(e, t, n) {
        const r = t[e],
          o = (function (e, t) {
            return "x" == e
              ? { min: t.x, max: t.x + t.width }
              : "y" == e
              ? { min: t.y, max: t.y + t.height }
              : void Object(i.a)(!1, `Invalid axis ${e}`);
          })(e, n);
        return r < o.min ? o.min - r : r > o.max ? r - o.max : 0;
      }
      function p(e) {
        return { x: e.x, y: e.y };
      }
      const g = {
        OnBlur: () => {},
        OnFocus: () => {},
        OnFocusChange: () => {},
        OnForceMeasureFocusRing: () => {},
      };
      function f(e) {
        if (!e) return s.c.NONE;
        const t = e.ownerDocument.defaultView,
          n = t.getComputedStyle(e);
        if ("flex" == n.display)
          switch (n.flexDirection) {
            case "row":
              return "wrap" == n.flexWrap ? s.c.GRID : s.c.ROW;
            case "row-reverse":
              return s.c.ROW_REVERSE;
            case "column":
              return s.c.COLUMN;
            case "column-reverse":
              return s.c.COLUMN_REVERSE;
          }
        else {
          if ("grid" == n.display) return s.c.GRID;
          if (e.childElementCount > 0) {
            const n = t.getComputedStyle(e.firstElementChild);
            if ("left" === n.float) return s.c.ROW;
            if ("right" === n.float) return s.c.ROW_REVERSE;
            if ("inline" === n.display || "inline-block" === n.display)
              return s.c.GRID;
          }
        }
        return s.c.COLUMN;
      }
      function b(e) {
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
          return l;
        }),
        n.d(t, "f", function () {
          return u;
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
          const { n: n, c: s, r: a, d: c, q: l } = i[e];
          if (!t.hasOwnProperty(e)) continue;
          const u = t[e];
          s
            ? a
              ? r.Message.setRepeatedWrapperField(
                  o,
                  n,
                  Array.isArray(u) ? u.map((e) => s.fromObject(e)) : []
                )
              : r.Message.setWrapperField(o, n, s.fromObject(u))
            : r.Message.setField(o, n, u);
        }
        return o;
      }
      function c(e, t, n) {
        const { proto: i, fields: o } = e;
        let s = {};
        for (let e in o) {
          const { n: i, c: a, r: c, d: l, q: u } = o[e];
          if (a)
            if (c)
              s[e] = r.Message.toObjectList(
                r.Message.getRepeatedWrapperField(n, a, i),
                a.toObject,
                t
              );
            else {
              const o = r.Message.getWrapperField(n, a, i, u ? 1 : 0);
              o && (s[e] = a.toObject(t, o));
            }
          else {
            const t = r.Message.getFieldWithDefault(
              n,
              i,
              void 0 !== l ? l : null
            );
            (null !== t || u) && (s[e] = t);
          }
        }
        return t && (s.$jspbMessageInstance = n), s;
      }
      function l(e, t, n) {
        for (; n.nextField() && !n.isEndGroup(); ) {
          const i = e[n.getFieldNumber()];
          if (i) {
            const { n: e, c: o, r: s, d: a, q: c, br: l } = i;
            if (o) {
              const i = new o();
              n.readMessage(i, o.deserializeBinaryFromReader),
                s
                  ? r.Message.addToRepeatedWrapperField(t, e, i, o)
                  : r.Message.setWrapperField(t, e, i);
            } else if (l) {
              const i = l.call(n);
              s
                ? r.Message.addToRepeatedField(t, e, i)
                : r.Message.setField(t, e, i);
            } else
              console.assert(
                l,
                `Reader func not set for field number ${e} in class ${o}`
              ),
                n.skipField();
          } else n.skipField();
        }
        return t;
      }
      function u(e, t, n) {
        const { fields: i } = e;
        for (let e in i) {
          const { n: o, c: s, r: a, d: c, q: l, bw: u } = i[e];
          if (s)
            if (a) {
              const e = r.Message.getRepeatedWrapperField(t, s, o);
              ((e && e.length) || l) &&
                n.writeRepeatedMessage(o, e, s.serializeBinaryToWriter);
            } else {
              const e = r.Message.getWrapperField(t, s, o, l ? 1 : 0);
              e && n.writeMessage(o, e, s.serializeBinaryToWriter);
            }
          else if (u) {
            const e = r.Message.getField(t, o);
            void 0 !== e && u.call(n, o, e);
          } else
            console.assert(
              u,
              `Writer func not set for field number ${o} in class ${s}`
            );
        }
      }
      function d(e) {
        const t = e.proto;
        for (const n in e.fields) {
          const i = e.fields[n],
            { n: o, c: s, r: a, d: c, q: l } = i;
          i.hasOwnProperty("d")
            ? (t.prototype[n] = m(r.Message.getFieldWithDefault, o, c))
            : (t.prototype[n] = s
                ? a
                  ? m(r.Message.getRepeatedWrapperField, s, o)
                  : h(s, o)
                : m(r.Message.getField, o)),
            (t.prototype[`set_${n}`] = p(
              s
                ? a
                  ? r.Message.setRepeatedWrapperField
                  : r.Message.setWrapperField
                : r.Message.setField,
              o
            )),
            a && (t.prototype[`add_${n}`] = g(o, s));
        }
      }
      function m(e, ...t) {
        return function () {
          return e(this, ...t);
        };
      }
      function h(e, t) {
        return function (n = !0) {
          return r.Message.getWrapperField(this, e, t, n ? 1 : 0);
        };
      }
      function p(e, t) {
        return function (n) {
          return e(this, t, n);
        };
      }
      function g(e, t) {
        return t
          ? function (n, i) {
              return r.Message.addToRepeatedWrapperField(this, e, n, t, i);
            }
          : function (t, n) {
              r.Message.addToRepeatedField(this, e, t, n);
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
      n.d(t, "d", function () {
        return s;
      }),
        n.d(t, "f", function () {
          return a;
        }),
        n.d(t, "e", function () {
          return c;
        }),
        n.d(t, "c", function () {
          return l;
        }),
        n.d(t, "a", function () {
          return u;
        }),
        n.d(t, "b", function () {
          return m;
        });
      var r = n("hRO2"),
        i = n("OS8t");
      const o = r.Message;
      class s extends o {
        constructor(e = null) {
          super(),
            s.prototype.v4 || i.a(s.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            s.sm_m ||
              (s.sm_m = {
                proto: s,
                fields: {
                  v4: { n: 1, br: i.d.readFixed32, bw: i.h.writeFixed32 },
                  v6: { n: 2, br: i.d.readBytes, bw: i.h.writeBytes },
                },
              }),
            s.sm_m
          );
        }
        static MBF() {
          return s.sm_mbf || (s.sm_mbf = i.e(s.M())), s.sm_mbf;
        }
        toObject(e = !1) {
          return s.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(s.M(), e, t);
        }
        static fromObject(e) {
          return i.c(s.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new s();
          return s.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(s.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(s.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgIPAddress";
        }
      }
      class a extends o {
        constructor(e = null) {
          super(),
            a.prototype.steamid || i.a(a.M()),
            o.initialize(this, e, 0, -1, [27], null);
        }
        static M() {
          return (
            a.sm_m ||
              (a.sm_m = {
                proto: a,
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
                  cm_sysid: { n: 28, br: i.d.readUint32, bw: i.h.writeUint32 },
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
            a.sm_m
          );
        }
        static MBF() {
          return a.sm_mbf || (a.sm_mbf = i.e(a.M())), a.sm_mbf;
        }
        toObject(e = !1) {
          return a.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(a.M(), e, t);
        }
        static fromObject(e) {
          return i.c(a.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new a();
          return a.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(a.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(a.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgProtoBufHeader";
        }
      }
      class c extends o {
        constructor(e = null) {
          super(),
            c.prototype.size_unzipped || i.a(c.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  size_unzipped: {
                    n: 1,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  message_body: { n: 2, br: i.d.readBytes, bw: i.h.writeBytes },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = i.e(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(c.M(), e, t);
        }
        static fromObject(e) {
          return i.c(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new c();
          return c.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgMulti";
        }
      }
      class l extends o {
        constructor(e = null) {
          super(),
            l.prototype.estate || i.a(l.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  estate: { n: 1, br: i.d.readUint32, bw: i.h.writeUint32 },
                  eresult: {
                    n: 2,
                    d: 2,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  steamid: {
                    n: 3,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  gameid: {
                    n: 4,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  h_steam_pipe: {
                    n: 5,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  ticket_crc: { n: 6, br: i.d.readUint32, bw: i.h.writeUint32 },
                  ticket: { n: 7, br: i.d.readBytes, bw: i.h.writeBytes },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = i.e(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(l.M(), e, t);
        }
        static fromObject(e) {
          return i.c(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new l();
          return l.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgAuthTicket";
        }
      }
      class u extends o {
        constructor(e = null) {
          super(),
            u.prototype.appid || i.a(u.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  appid: { n: 1, br: i.d.readUint32, bw: i.h.writeUint32 },
                  name: { n: 2, br: i.d.readString, bw: i.h.writeString },
                  icon: { n: 3, br: i.d.readString, bw: i.h.writeString },
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
                  app_type: { n: 14, br: i.d.readUint32, bw: i.h.writeUint32 },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = i.e(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(u.M(), e, t);
        }
        static fromObject(e) {
          return i.c(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new u();
          return u.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCDDBAppDetailCommon";
        }
      }
      class d extends o {
        constructor(e = null) {
          super(),
            d.prototype.clanid || i.a(d.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
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
                  rtime_end: { n: 5, br: i.d.readUint32, bw: i.h.writeUint32 },
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
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = i.e(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(d.M(), e, t);
        }
        static fromObject(e) {
          return i.c(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new d();
          return d.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanEventUserNewsTuple";
        }
      }
      class m extends o {
        constructor(e = null) {
          super(),
            m.prototype.rtime_before || i.a(m.M()),
            o.initialize(this, e, 0, -1, [4], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
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
                  qualified: { n: 3, br: i.d.readUint32, bw: i.h.writeUint32 },
                  events: { n: 4, c: d, r: !0, q: !0 },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = i.e(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(m.M(), e, t);
        }
        static fromObject(e) {
          return i.c(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new m();
          return m.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanMatchEventByRange";
        }
      }
    },
    RMhI: function (e, t, n) {
      var r = {
        "./sales_brazilian.json": ["8W/b", 40],
        "./sales_bulgarian.json": ["CF5q", 41],
        "./sales_czech.json": ["O2WS", 42],
        "./sales_danish.json": ["XnEN", 43],
        "./sales_dutch.json": ["amMP", 44],
        "./sales_english.json": ["3u+3", 45],
        "./sales_finnish.json": ["4mLc", 46],
        "./sales_french.json": ["fJyv", 47],
        "./sales_german.json": ["LcuH", 48],
        "./sales_greek.json": ["7l8b", 49],
        "./sales_hungarian.json": ["L9+e", 50],
        "./sales_italian.json": ["EnBf", 51],
        "./sales_japanese.json": ["O9QH", 52],
        "./sales_koreana.json": ["hPCV", 53],
        "./sales_latam.json": ["mkfq", 54],
        "./sales_norwegian.json": ["Xzk6", 55],
        "./sales_polish.json": ["Mfbu", 56],
        "./sales_portuguese.json": ["EQQ2", 57],
        "./sales_romanian.json": ["oXR9", 58],
        "./sales_russian.json": ["kQHt", 59],
        "./sales_sc_schinese.json": ["VTAw", 60],
        "./sales_schinese.json": ["AVwL", 61],
        "./sales_spanish.json": ["lRrx", 62],
        "./sales_swedish.json": ["7tPl", 63],
        "./sales_tchinese.json": ["mQlZ", 64],
        "./sales_thai.json": ["yDdk", 65],
        "./sales_turkish.json": ["mjwq", 66],
        "./sales_ukrainian.json": ["gWvs", 67],
        "./sales_vietnamese.json": ["VsX2", 68],
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
        (i.id = "RMhI"),
        (e.exports = i);
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
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
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
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
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
        "./tk": "Wv91",
        "./tk.js": "Wv91",
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
      function i(e) {
        var t = o(e);
        return n(t);
      }
      function o(e) {
        if (!n.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return r[e];
      }
      (i.keys = function () {
        return Object.keys(r);
      }),
        (i.resolve = o),
        (e.exports = i),
        (i.id = "RnhZ");
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
    SRyh: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "c", function () {
          return o;
        }),
        n.d(t, "b", function () {
          return s;
        }),
        n.d(t, "d", function () {
          return a;
        });
      var r = n("q1tI");
      n("qiKp");
      function i(e, t, n) {
        return [e, t, n];
      }
      function o() {
        const [, e] = r.useState(0);
        return r.useCallback(() => e((e) => e + 1), []);
      }
      function s(e, t) {
        r.useLayoutEffect(() => {
          if (!t || !e) return;
          let n = e.Register(t);
          return () => n.Unregister();
        }, [e, t]);
      }
      function a(e) {
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
    },
    SgzI: function (e) {
      e.exports = JSON.parse(
        '{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}'
      );
    },
    SvTV: function (e, t, n) {
      "use strict";
      var r = n("hRO2");
      n("OS8t");
      r.Message;
    },
    SxtR: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      }),
        n.d(t, "b", function () {
          return a;
        }),
        n.d(t, "c", function () {
          return c;
        });
      var r = n("hRO2"),
        i = n("OS8t");
      r.Message;
      const o = r.Message;
      class s extends o {
        constructor(e = null) {
          super(),
            s.prototype.product || i.a(s.M()),
            o.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            s.sm_m ||
              (s.sm_m = {
                proto: s,
                fields: {
                  product: { n: 1, br: i.d.readString, bw: i.h.writeString },
                  version: { n: 2, br: i.d.readString, bw: i.h.writeString },
                  errors: { n: 3, c: a, r: !0, q: !0 },
                },
              }),
            s.sm_m
          );
        }
        static MBF() {
          return s.sm_mbf || (s.sm_mbf = i.e(s.M())), s.sm_mbf;
        }
        toObject(e = !1) {
          return s.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(s.M(), e, t);
        }
        static fromObject(e) {
          return i.c(s.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new s();
          return s.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(s.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(s.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportClientError_Notification";
        }
      }
      class a extends o {
        constructor(e = null) {
          super(),
            a.prototype.identifier || i.a(a.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            a.sm_m ||
              (a.sm_m = {
                proto: a,
                fields: {
                  identifier: { n: 1, br: i.d.readString, bw: i.h.writeString },
                  message: { n: 2, br: i.d.readString, bw: i.h.writeString },
                  count: { n: 3, br: i.d.readUint32, bw: i.h.writeUint32 },
                },
              }),
            a.sm_m
          );
        }
        static MBF() {
          return a.sm_mbf || (a.sm_mbf = i.e(a.M())), a.sm_mbf;
        }
        toObject(e = !1) {
          return a.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(a.M(), e, t);
        }
        static fromObject(e) {
          return i.c(a.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new a();
          return a.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(a.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(a.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportClientError_Notification_Error";
        }
      }
      var c;
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
          }),
          (e.ClientCloudAppSyncStats = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ClientCloudAppSyncStats#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.ClientDownloadResponseCodeCounts = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ClientDownloadResponseCodeCounts#1",
              t,
              { ePrivilege: 1 }
            );
          });
      })(c || (c = {}));
    },
    TLQK: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return u;
      }),
        n.d(t, "f", function () {
          return d;
        }),
        n.d(t, "m", function () {
          return m;
        }),
        n.d(t, "l", function () {
          return h;
        }),
        n.d(t, "a", function () {
          return g;
        }),
        n.d(t, "d", function () {
          return b;
        }),
        n.d(t, "c", function () {
          return _;
        }),
        n.d(t, "e", function () {
          return v;
        });
      var r = n("q1tI"),
        i = n("mgoM"),
        o = n("kyHq"),
        s = n("lkRc"),
        a = n("Kw0F"),
        c = (n("r64O"), n("6NF1"), n("qiKp")),
        l = n("Z1oF");
      n.d(t, "g", function () {
        return l.b;
      }),
        n.d(t, "h", function () {
          return l.c;
        }),
        n.d(t, "j", function () {
          return l.e;
        }),
        n.d(t, "k", function () {
          return l.f;
        }),
        n.d(t, "n", function () {
          return l.h;
        }),
        n.d(t, "o", function () {
          return l.i;
        }),
        n.d(t, "p", function () {
          return l.j;
        }),
        n.d(t, "i", function () {
          return l.d;
        });
      class u {
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
            t === (29 === e ? o.g.k_ESteamRealmChina : o.g.k_ESteamRealmGlobal)
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
            (t.push(Object(i.d)(s.c.LANGUAGE)),
            (s.c.SUPPORTED_LANGUAGES || []).forEach((e) => {
              e.value != s.c.LANGUAGE && t.push(Object(i.d)(e.value));
            }),
            e)
          ) {
            u.GetLanguageListForRealms(e).forEach((e) => {
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
            u.sm_ErrorReportingStore &&
            u.sm_ErrorReportingStore.ReportError(
              new Error(
                `Unable to find localization token '${e}' for language '${s.c.LANGUAGE}', ${this.m_mapTokens.size} tokens in map`
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
        let n = v.LocalizeString(e);
        return void 0 === n ? e : p(n, ...t);
      }
      function m(e, ...t) {
        let n = v.LocalizeString(e);
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
      function h(e, t, ...n) {
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
      class g {
        static Set(e, t, n) {
          if (e.length <= t) {
            if (t >= 30) return e;
            e = Object(a.e)(e, t + 1, null);
          }
          return (e[t] = n), e;
        }
        static Get(e, t) {
          return (e && e.length > t && e[t]) || "";
        }
        static GetWithFallback(e, t) {
          if (e) {
            return g.Get(e, t) || g.Get(e, u.GetELanguageFallback(t));
          }
          return null;
        }
      }
      const f = {
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
        b = {
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
      function _() {
        return f[s.c.LANGUAGE] || null;
      }
      const v = new u();
      window.LocalizationManager = v;
    },
    TtDX: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      n("q1tI");
      var r = n("ojgN"),
        i = n("gQFo");
      n("y+6m");
      class o {
        constructor() {
          this.m_ctorContextMenu = r.a;
        }
        CreateContextMenuInstance(e, t, n, r, i) {
          return new this.m_ctorContextMenu(e, t, n, r, i);
        }
        SetContextMenuConstructor(e) {
          this.m_ctorContextMenu = e;
        }
      }
      const s = Object(i.a)("ContextMenuFactory", () => new o());
      function a(e, t, n) {
        let r,
          i,
          o,
          a = t;
        if (
          (null == a ? void 0 : a.preventDefault) &&
          (null == a ? void 0 : a.stopPropagation)
        ) {
          if (a.shiftKey) return null;
          a.preventDefault(),
            a.stopPropagation(),
            (o = a.currentTarget),
            (r = a.clientX),
            (i = a.clientY);
        } else o = t;
        let c = s.CreateContextMenuInstance(e, o, r, i, n);
        return c.Show(), c;
      }
    },
    WBba: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return m;
      });
      var r = n("mrSG"),
        i = n("H7XF"),
        o = n("hRO2"),
        s = n("bxBv"),
        a = n("XxJJ"),
        c = n("vDqi"),
        l = n.n(c),
        u = (n("mgoM"), n("mC9v")),
        d = (n("NtSG"), n("kLLr"));
      n("E4Op"), n("OS8t");
      o.Message;
      class m {
        constructor(e, t, n = !1) {
          (this.m_webApiAccessToken = ""),
            (this.m_bJsonMode = !1),
            (this.m_strWebAPIBaseURL = e),
            (this.m_webApiAccessToken = t),
            (this.m_bJsonMode = n),
            this.ConstructServiceTransport();
        }
        WaitUntilLoggedOn() {
          return Promise.resolve();
        }
        GetServerRTime32() {
          return Number(new Date());
        }
        get steamid() {
          return new d.a();
        }
        RTime32ToDate(e) {
          return new Date(1e3 * e);
        }
        GetServiceTransport() {
          return this.m_ServiceTransport;
        }
        GetAnonymousServiceTransport() {
          return this.m_AnonymousServiceTransport;
        }
        ConstructServiceTransport() {
          (this.m_ServiceTransport = {
            SendMsg: this.SendMsgAndAwaitResponse.bind(this, { bSendAuth: !0 }),
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
        }
        SendMsgAndAwaitResponse(e, t, n, i, a) {
          return Object(r.a)(this, void 0, void 0, function* () {
            let r = null;
            try {
              let c = yield this.Send(e, t, n, a);
              if (200 != c.status || !c.data) throw new Error("Request Error");
              if (
                ((r = s.b.Init(i, 147)),
                c.headers &&
                  (c.headers["x-eresult"] &&
                    r.Hdr().set_eresult(parseInt(c.headers["x-eresult"])),
                  c.headers["x-error_message"] &&
                    r.Hdr().set_error_message(c.headers["x-error_message"])),
                this.m_bJsonMode)
              )
                r.SetBodyJSON(c.data.response);
              else {
                let e = new u.a(c.data),
                  t = new o.BinaryReader(
                    e.GetPacket(),
                    e.TellGet(),
                    e.GetCountBytesRemaining()
                  );
                i.deserializeBinaryFromReader(r.Body(), t);
              }
              0;
            } catch (e) {
              r = this.CreateFailedMsgProtobuf(i, 3, null);
            }
            return r;
          });
        }
        SendNotification(e, t, n, r) {
          return this.Send(e, t, n, r), !0;
        }
        Send(e, t, n, r) {
          let o = this.CreateWebAPIURL(t),
            s = n.SerializeBody(),
            a = i.fromByteArray(s);
          const c = r.eWebAPIKeyRequirement;
          let u = 0 == r.ePrivilege && 1 == c,
            d = {
              responseType: this.m_bJsonMode ? "json" : "arraybuffer",
              params: {},
            };
          if (
            (e.bSendAuth ||
              1 == c ||
              console.error(
                `Attempting to invoke service ${t} without auth, but auth is required.`
              ),
            this.m_webApiAccessToken &&
              e.bSendAuth &&
              !u &&
              (d.params.access_token = this.m_webApiAccessToken),
            !r.bConstMethod)
          ) {
            const e = new FormData();
            return (
              this.m_bJsonMode
                ? e.append("input_json", JSON.stringify(n.Body().toObject()))
                : e.append("input_protobuf_encoded", a),
              l.a.post(o, e, d)
            );
          }
          return (
            this.m_bJsonMode
              ? (d.params = Object.assign(Object.assign({}, d.params), {
                  input_json: JSON.stringify(n.Body().toObject()),
                }))
              : (d.params = Object.assign(Object.assign({}, d.params), {
                  input_protobuf_encoded: a,
                })),
            l.a.get(o, d)
          );
        }
        CreateWebAPIURL(e) {
          let t = e.match(/([^\.]+)\.(.+)#(\d+)/);
          return t && 4 == t.length
            ? `${this.m_strWebAPIBaseURL}I${t[1]}Service/${t[2]}/v${t[3]}`
            : null;
        }
        CreateFailedMsgProtobuf(e, t, n) {
          let r = s.b.Init(e);
          return (
            r.Hdr().set_eresult(2),
            r.Hdr().set_transport_error(t),
            n && r.Hdr().set_error_message(n),
            r
          );
        }
      }
      Object(r.b)([a.a], m.prototype, "SendMsgAndAwaitResponse", null),
        Object(r.b)([a.a], m.prototype, "SendNotification", null),
        Object(r.b)([a.a], m.prototype, "Send", null);
    },
    WplJ: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var r = n("q1tI"),
        i = n.n(r),
        o = n("i8i4");
      const s = ({ config: e }) =>
        i.a.createElement(
          i.a.Fragment,
          null,
          Object.keys(e || {}).map((t) => {
            const n = document.querySelectorAll(`[data-featuretarget=${t}`);
            return n.length
              ? Array.from(n).map((n, r) => {
                  const i = (function (e, t) {
                    if (!e) return {};
                    try {
                      const t = JSON.parse(e);
                      if (!t || "object" != typeof t || Array.isArray(t))
                        throw new Error();
                      return t;
                    } catch (e) {
                      return (
                        console.error(
                          `There was a problem parsing props for feature target "${t}"`
                        ),
                        {}
                      );
                    }
                  })(n.getAttribute("data-props"), t);
                  return Object(o.createPortal)(e[t](i), n, `${t}${r}`);
                })
              : null;
          })
        );
    },
    X2UP: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var r = n("vDqi"),
        i = n.n(r),
        o = n("q1tI"),
        s = n.n(o);
      function a(e) {
        const t = s.a.useRef(i.a.CancelToken.source());
        return (
          s.a.useEffect(() => {
            const n = t.current;
            return () => n.cancel(e ? `${e}: unmounting` : "unmounting");
          }, [e]),
          t.current
        );
      }
    },
    X3Ds: function (e, t, n) {
      "use strict";
      n.d(t, "q", function () {
        return i;
      }),
        n.d(t, "e", function () {
          return o;
        }),
        n.d(t, "d", function () {
          return s;
        }),
        n.d(t, "k", function () {
          return a;
        }),
        n.d(t, "h", function () {
          return c;
        }),
        n.d(t, "o", function () {
          return l;
        }),
        n.d(t, "n", function () {
          return u;
        }),
        n.d(t, "i", function () {
          return d;
        }),
        n.d(t, "j", function () {
          return m;
        }),
        n.d(t, "b", function () {
          return h;
        }),
        n.d(t, "u", function () {
          return p;
        }),
        n.d(t, "g", function () {
          return g;
        }),
        n.d(t, "s", function () {
          return f;
        }),
        n.d(t, "t", function () {
          return b;
        }),
        n.d(t, "r", function () {
          return _;
        }),
        n.d(t, "v", function () {
          return v;
        }),
        n.d(t, "f", function () {
          return w;
        }),
        n.d(t, "m", function () {
          return y;
        }),
        n.d(t, "l", function () {
          return C;
        }),
        n.d(t, "c", function () {
          return S;
        }),
        n.d(t, "w", function () {
          return E;
        }),
        n.d(t, "p", function () {
          return O;
        }),
        n.d(t, "a", function () {
          return M;
        });
      var r = n("mrSG");
      n("Kw0F"), n("r64O");
      function i(e) {
        return null != e && void 0 !== e.focus;
      }
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
      function s(e, t) {
        for (; t; ) if ((t = t.parentElement) == e) return !0;
        return !1;
      }
      function a(e, t) {
        let n = 0,
          r = 0;
        return (
          t.right < e.left
            ? (n = e.left - t.right)
            : t.left > e.right && (n = t.left - e.right),
          t.bottom < e.top
            ? (r = e.top - t.bottom)
            : t.top > e.bottom && (r = t.top - e.bottom),
          Math.sqrt(n * n + r * r)
        );
      }
      function c(e, t) {
        return {
          width: t.width,
          height: t.height,
          top: e.screenTop + t.top,
          bottom: e.screenTop + t.bottom,
          left: e.screenLeft + t.left,
          right: e.screenLeft + t.right,
        };
      }
      function l(e) {
        let t;
        return (
          e &&
            i(e.currentTarget) &&
            (t = e.currentTarget.ownerDocument.defaultView),
          t
        );
      }
      function u(e) {
        let t;
        return e && (t = e.ownerDocument.defaultView), t;
      }
      function d(e) {
        let t = window.document;
        try {
          t = window.top.document;
        } catch (e) {}
        let n = t.createElement("textarea");
        (n.textContent = e),
          (n.style.position = "fixed"),
          t.body.appendChild(n),
          n.select();
        try {
          t.execCommand("copy");
        } catch (e) {
          console.warn("Copy to clipboard failed.", e);
        } finally {
          t.body.removeChild(n);
        }
      }
      function m(e) {
        const t = "steam://openurl/";
        e.startsWith(t) && (e = e.slice(t.length)), d(e);
      }
      function h(e) {
        let t = e.ownerDocument;
        return (
          t.fullscreen ||
          t.webkitIsFullScreen ||
          t.mozFullScreen ||
          t.msFullscreenElement
        );
      }
      function p(e, t) {
        let n = e;
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
      function g(e) {
        let t = e.ownerDocument;
        t.cancelFullscreen
          ? t.cancelFullscreen()
          : t.webkitCancelFullScreen
          ? t.webkitCancelFullScreen()
          : t.mozCancelFullScreen
          ? t.mozCancelFullScreen()
          : t.msExitFullscreen && t.msExitFullscreen();
      }
      function f(e) {
        return "INPUT" === e.nodeName;
      }
      function b(e) {
        return "TEXTAREA" === e.nodeName;
      }
      function _(e, t) {
        switch (e) {
          case "TEXTAREA":
            return !0;
          case "INPUT":
            switch (t) {
              case "date":
              case "datetime-local":
              case "datetime":
              case "email":
              case "month":
              case "number":
              case "password":
              case "search":
              case "tel":
              case "text":
              case "time":
              case "url":
              case "week":
                return !0;
              default:
                return !1;
            }
          default:
            return !1;
        }
      }
      function v(e) {
        "loading" == document.readyState
          ? document.addEventListener("DOMContentLoaded", e)
          : e();
      }
      function w(e, t) {
        const n = e;
        return (
          (n.lastModifiedDate = new Date()),
          (n.name = t || Date.now().toString()),
          e
        );
      }
      function y(e, t) {
        let n = e.parentElement;
        for (; n; ) {
          if (!t || "x" == t) {
            let e = window.getComputedStyle(n).overflowX;
            if ("scroll" == e || "auto" == e) break;
          }
          if (!t || "y" == t) {
            let e = window.getComputedStyle(n).overflowY;
            if ("scroll" == e || "auto" == e) break;
          }
          n = n.parentElement;
        }
        return n;
      }
      function C(e, t) {
        for (; e; ) {
          if (t(e)) return e;
          e = e.parentElement;
        }
      }
      function S(e, t) {
        if (!("ownerDocument" in e)) return !0;
        const n = e.ownerDocument.defaultView.getComputedStyle(e),
          r = "x" === t ? n.overflowX : n.overflowY;
        return "auto" === r || "scroll" === r;
      }
      function E(e, t) {
        return Object(r.a)(this, void 0, void 0, function* () {
          let n;
          const r = new Promise((r) => {
              (n = r), e.addEventListener(t, r);
            }),
            i = yield r;
          return e.removeEventListener(t, n), i;
        });
      }
      function O() {
        return (function (e) {
          const t = {};
          return (
            e.querySelectorAll('link[rel="stylesheet"]').forEach((e) => {
              t[e.href] = e;
            }),
            t
          );
        })(document);
      }
      function M(e, t) {
        B(e.document, t, !0);
      }
      function B(e, t, n) {
        const r = Object.assign({}, t),
          i = e.getElementsByTagName("head")[0],
          o = i.getElementsByTagName("link"),
          s = o.length;
        for (let e = 0; e < s; ++e) {
          const t = o[e];
          r[t.href] ? delete r[t.href] : n && t.parentNode.removeChild(t);
        }
        let a = [];
        for (let t in r) {
          const n = r[t],
            i = e.createElement("link");
          for (let e = 0; e < n.attributes.length; e++) {
            let t = n.attributes.item(e);
            i.setAttribute(t.name, t.value);
          }
          a.push(i);
        }
        return i.prepend(...a), a;
      }
    },
    XxJJ: function (e, t, n) {
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
    YyVH: function (e, t, n) {
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
    Z1oF: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      }),
        n.d(t, "j", function () {
          return a;
        }),
        n.d(t, "f", function () {
          return c;
        }),
        n.d(t, "h", function () {
          return l;
        }),
        n.d(t, "g", function () {
          return d;
        }),
        n.d(t, "i", function () {
          return p;
        }),
        n.d(t, "b", function () {
          return g;
        }),
        n.d(t, "d", function () {
          return y;
        }),
        n.d(t, "c", function () {
          return C;
        }),
        n.d(t, "e", function () {
          return E;
        });
      var r,
        i = n("TLQK"),
        o = n("CdLH"),
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
          e >= 2 * o.f.PerYear)
        )
          return Object(i.f)(a + "XYears", Math.floor(e / o.f.PerYear));
        if (e >= o.f.PerYear)
          return (e -= o.f.PerYear) >= 2 * o.f.PerMonth && !s.bForceSingleUnits
            ? Object(i.f)(a + "1YearXMonths", Math.floor(e / o.f.PerMonth))
            : Object(i.f)(a + "1Year");
        if (e >= 2 * o.f.PerMonth)
          return Object(i.f)(a + "XMonths", Math.floor(e / o.f.PerMonth));
        if (e >= 2 * o.f.PerWeek)
          return Object(i.f)(a + "XWeeks", Math.floor(e / o.f.PerWeek));
        if (e >= o.f.PerWeek)
          return Object(i.f)(a + "1Week", Math.floor(e / o.f.PerWeek));
        if (e >= 2 * o.f.PerDay)
          return Object(i.f)(a + "XDays", Math.floor(e / o.f.PerDay));
        if (e >= o.f.PerDay)
          return (e -= o.f.PerDay) >= 2 * o.f.PerHour && !s.bForceSingleUnits
            ? Object(i.f)(a + "1DayXHours", Math.floor(e / o.f.PerHour))
            : Object(i.f)(a + "1Day");
        if (e >= 2 * o.f.PerHour)
          return Object(i.f)(a + "XHours", Math.floor(e / o.f.PerHour));
        if (e >= o.f.PerHour)
          return (e -= o.f.PerHour) >= 2 * o.f.PerMinute && !s.bForceSingleUnits
            ? Object(i.f)(a + "1HourXMinutes", Math.floor(e / o.f.PerMinute))
            : Object(i.f)(a + "1Hour");
        if (e >= 2 * o.f.PerMinute) {
          const t = Math.floor(e / o.f.PerMinute),
            n = e % o.f.PerMinute;
          return s.bHighGranularity && 0 != n
            ? 1 == n
              ? Object(i.f)(a + "XMinutes1Second", t)
              : Object(i.f)(a + "XMinutesXSeconds", t, n)
            : Object(i.f)(a + "XMinutes", t);
        }
        if (e >= o.f.PerMinute) {
          const t = e % o.f.PerMinute;
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
        return new Date(1e3 * e).toLocaleDateString(
          i.e.GetPreferredLocales(),
          r
        );
      }
      function l(e) {
        let t = new Date(1e3 * e);
        const n = t.setHours(0, 0, 0, 0);
        let r = m.get(n);
        if (r) return r;
        return (
          (r = t.toLocaleDateString(i.e.GetPreferredLocales(), {
            year: "numeric",
            month: "short",
            day: "numeric",
          })),
          m.set(n, r),
          r
        );
      }
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Ago = 1)] = "Ago"),
          (e[(e.Remaining = 2)] = "Remaining");
      })(r || (r = {}));
      const u = new Map();
      function d(e, t) {
        const n = new Date(1e3 * e),
          r = i.e.GetPreferredLocales(),
          o =
            t.bForce24HourClock ||
            (function (e) {
              let t = u.get(e);
              if (!0 === t || !1 === t) return t;
              const n = new Date();
              return (
                n.setHours(15),
                (t =
                  n.toLocaleTimeString(e, { hour: "numeric" }) ==
                  n.toLocaleTimeString(e, { hour: "numeric", hour12: !1 })),
                u.set(e, t),
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
      const m = new Map(),
        h = new Map();
      function p(e, t, n = !0, r = !0) {
        const o = new Date(),
          a = new Date(1e3 * e);
        if (a.getFullYear() != o.getFullYear()) return l(e);
        r && s.b(new Date().setHours(24, 0, 0, 0) - o.getTime());
        const c = new Date();
        if ((c.setHours(0, 0, 0, 0), n))
          if (a >= c) {
            if ((c.setDate(c.getDate() + 1), a < c))
              return Object(i.f)("#Time_Today");
            if ((c.setDate(c.getDate() + 1), a < c))
              return Object(i.f)("#Time_Tomorrow");
          } else if ((c.setDate(c.getDate() - 1), a >= c))
            return Object(i.f)("#Time_Yesterday");
        const u = { month: t ? "long" : "short", day: "numeric" },
          d = a.setHours(0, 0, 0, 0) + u.month;
        let m = h.get(d);
        return (
          m ||
          ((m = a.toLocaleDateString(i.e.GetPreferredLocales(), u)),
          h.set(d, m),
          m)
        );
      }
      function g(e, t) {
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
              s.b(n.getTime() - r.getTime()),
              n.getFullYear() == r.getFullYear() ? S(n) : O(n)
            );
          s.b(new Date().setHours(24, 0, 0, 0) - r.getTime());
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
                    n < e ? C(n) : y(n, !0, a.bAbbreviateDayOfWeek)))
          );
        }
        s.b(new Date().setHours(24, 0, 0, 0) - r.getTime());
        let l = new Date();
        if ((l.setHours(0, 0, 0, 0), n >= l))
          return a.bGranularToday
            ? a.bGranularTodayTimeOnly
              ? d(e, { bForce24HourClock: a.bForce24HourClock })
              : Object(i.f)(
                  "#Time_Today_At",
                  d(e, { bForce24HourClock: a.bForce24HourClock })
                )
            : Object(i.f)("#Time_Today");
        if ((l.setDate(l.getDate() - 1), n >= l))
          return a.bGranularYesterday
            ? Object(i.f)(
                "#Time_Yesterday_At",
                d(e, { bForce24HourClock: a.bForce24HourClock })
              )
            : Object(i.f)("#Time_Yesterday");
        if ((l.setDate(l.getDate() - 7), a.bGranularWeek && n >= l))
          return y(n, !1, !a.bAbbreviateDayOfWeek);
        if (a.bGranularPast)
          return Object(i.f)(
            "#Time_Past_At",
            c(e, n.getFullYear() == r.getFullYear(), !a.bAbbreviateDayOfWeek),
            d(e, { bForce24HourClock: a.bForce24HourClock })
          );
        if ((l.setDate(l.getDate() - 5), n >= l))
          return Object(i.f)("#TimeSince_ThisWeek");
        const u = new Date(l);
        if (
          (l.setDate(l.getDate() - 21),
          n >= l ||
            (n.getMonth() == r.getMonth() &&
              n.getFullYear() == r.getFullYear()))
        ) {
          const e =
            Math.floor((u.valueOf() - n.valueOf()) / (1e3 * o.f.PerWeek)) + 1;
          return 1 == e
            ? Object(i.f)("#TimeSince_1Week")
            : Object(i.f)("#TimeSince_XWeeks", e);
        }
        return n.getFullYear() == r.getFullYear() ? S(n) : O(n);
      }
      const f = new Map(),
        b = new Map(),
        _ = new Map(),
        v = new Map(),
        w = new Map();
      function y(e, t = !1, n = !0) {
        const r = {
            weekday: n ? "long" : "short",
            day: "numeric",
            month: t ? "long" : "short",
          },
          o = e.setHours(0, 0, 0, 0) + r.weekday + r.month;
        let s = w.get(o);
        return (
          s ||
          ((s = e.toLocaleDateString(i.e.GetPreferredLocales(), r)),
          w.set(o, s),
          s)
        );
      }
      function C(e) {
        let t = f.get(e.getDay());
        return (
          t ||
          ((t = e.toLocaleDateString(i.e.GetPreferredLocales(), {
            weekday: "long",
          })),
          f.set(e.getDay(), t),
          t)
        );
      }
      function S(e) {
        let t = b.get(e.getMonth());
        return (
          t ||
          ((t = e.toLocaleDateString(i.e.GetPreferredLocales(), {
            month: "long",
          })),
          b.set(e.getMonth(), t),
          t)
        );
      }
      function E(e) {
        let t = _.get(e.getFullYear());
        return (
          t ||
          ((t = e.toLocaleDateString(i.e.GetPreferredLocales(), {
            year: "numeric",
          })),
          _.set(e.getFullYear(), t),
          t)
        );
      }
      function O(e) {
        const t = e.getMonth() + 12 * e.getFullYear();
        let n = v.get(t);
        return (
          n ||
          ((n = e.toLocaleDateString(i.e.GetPreferredLocales(), {
            month: "long",
            year: "numeric",
          })),
          v.set(t, n),
          n)
        );
      }
    },
    Z7Ow: function (e, t, n) {
      e.exports = {
        EmoticonBow: "shared_svg_library_EmoticonBow_2Llzt",
        EmoticonBow_st0: "shared_svg_library_EmoticonBow_st0_Fw2WG",
        EmoticonBow_st1: "shared_svg_library_EmoticonBow_st1_luj0t",
        SteamDeckCompatInfo: "shared_svg_library_SteamDeckCompatInfo_3VPnv",
        SteamDeckCompatLogo: "shared_svg_library_SteamDeckCompatLogo_1dzQL",
        SteamDeckCompatIcon: "shared_svg_library_SteamDeckCompatIcon_3hAj0",
        SteamDeckCompatVerified:
          "shared_svg_library_SteamDeckCompatVerified_kEODD",
        SteamDeckCompatPlayable:
          "shared_svg_library_SteamDeckCompatPlayable_mPD42",
        SteamDeckCompatUnsupported:
          "shared_svg_library_SteamDeckCompatUnsupported_2LAax",
        SteamDeckCompatUnknown:
          "shared_svg_library_SteamDeckCompatUnknown_xBqU_",
      };
    },
    ZFdz: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return g;
      });
      var r = n("mrSG"),
        i = n("rHSA"),
        o = n("Kw0F"),
        s = n("r64O"),
        a = n("XxJJ"),
        c = n("qiKp"),
        l = n("X3Ds"),
        u = n("bDQf"),
        d = n("BaVA"),
        m = (n("j+5p"), n("kKgT"));
      const h = new u.a("FocusNavigation").Debug,
        p = (new u.a("GamepadEvents").Debug, "focus-nav-show-debug-focus-ring");
      class g {
        constructor() {
          (this.m_rgGamepadInputSources = []),
            (this.m_rgGamepadNavigationTrees = []),
            (this.m_LastActiveNavTree = null),
            (this.m_LastActiveFocusNavTree = null),
            (this.m_bGlobalEventsInitialized = !1),
            (this.m_bSuppressGamepadInput = !1),
            (this.m_FocusChangedCallbacks = new c.a()),
            (this.m_UnhandledButtonEventsCallbacks = new c.a()),
            (this.m_navigationSource = Object(c.e)({
              eActivationSourceType: i.b.UNKNOWN,
              nActiveGamepadIndex: -1,
              nLastActiveGamepadIndex: -1,
            })),
            (this.m_bShowDebugFocusRing = Object(c.e)(!1)),
            (this.m_bRestoringHistory = !1),
            (this.m_fnGamepadEventUpdateBatcher = (e) => e()),
            (this.m_iFocusChangeStack = 0),
            (window.FocusNavController = this),
            this.m_bShowDebugFocusRing.Set(
              "shown" == sessionStorage.getItem(p)
            );
        }
        SetShowDebugFocusRing(e) {
          this.m_bShowDebugFocusRing.Set(e),
            (function (e) {
              sessionStorage.setItem(p, e ? "shown" : void 0);
            })(e);
        }
        GetShowDebugFocusRing() {
          return this.m_bShowDebugFocusRing;
        }
        RegisterInputSource(e) {
          this.m_rgGamepadInputSources.push(e),
            e.RegisterForGamepadButtonDown(this.OnButtonDown),
            e.RegisterForGamepadButtonUp(this.OnButtonUp),
            e.RegisterForNavigationTypeChange(this.OnNavigationTypeChange);
        }
        SetGamepadEventUpdateBatcher(e) {
          this.m_fnGamepadEventUpdateBatcher = e;
        }
        get FocusChangedCallbacks() {
          return this.m_FocusChangedCallbacks;
        }
        get NavigationSource() {
          return this.m_navigationSource;
        }
        DispatchVirtualButtonPress(e) {
          this.OnButtonDown(e, i.b.UNKNOWN, -1);
        }
        DispatchVirtualButtonClick(e) {
          this.OnButtonDown(e, i.b.GAMEPAD, -1),
            this.OnButtonUp(e, i.b.GAMEPAD, -1);
        }
        DispatchVirtualGamepad(e, t) {
          switch (e) {
            case "vgp_onbuttondown":
              this.OnButtonDown(t.button, t.source, -1, t.is_repeat);
              break;
            case "vgp_onbuttonup":
              this.OnButtonUp(t.button, t.source, -1);
          }
        }
        BGlobalGamepadButton(e) {
          return (
            e === i.a.STEAM_GUIDE ||
            e === i.a.STEAM_QUICK_MENU ||
            e === i.a.CANCEL
          );
        }
        GetEventTarget(e, t = !1) {
          let n = document.activeElement;
          if (this.m_LastActiveNavTree) {
            let r = this.m_navigationSource.Value.eActivationSourceType;
            if (
              !(
                (r != i.b.GAMEPAD && r != i.b.KEYBOARD) ||
                this.m_LastActiveNavTree.GetLastFocusedNode() ||
                (t && this.m_LastActiveNavTree.TakeFocus(d.c.GAMEPAD, !0),
                this.BGlobalGamepadButton(e))
              )
            )
              return null;
            this.m_LastActiveNavTree.GetLastFocusedNode() &&
              (n = this.m_LastActiveNavTree.GetLastFocusedNode().Element);
          }
          return n;
        }
        ChangeNavigationSource(e, t) {
          let n = this.m_navigationSource.Value,
            r = n.nLastActiveGamepadIndex;
          n.nActiveGamepadIndex >= 0 && (r = n.nActiveGamepadIndex),
            this.m_navigationSource.Set({
              eActivationSourceType: e,
              nActiveGamepadIndex: t,
              nLastActiveGamepadIndex: r,
            });
        }
        OnButtonDown(e, t, n, r) {
          var o;
          if (this.m_bSuppressGamepadInput)
            return void h(
              "Ignoring button press - gamepad input is suppressed by parent window"
            );
          this.ChangeNavigationSource(t, n);
          const s = this.GetEventTarget(e, !0);
          h(
            `Firing ${i.a[e]} in tree ${
              null === (o = this.m_LastActiveNavTree) || void 0 === o
                ? void 0
                : o.id
            } at `,
            s
          ),
            this.BatchedUpdate(() =>
              Object(d.b)(s, "vgp_onbuttondown", {
                button: e,
                source: t,
                is_repeat: r,
              })
            );
        }
        OnButtonUp(e, t, n) {
          if (this.m_bSuppressGamepadInput) return;
          this.ChangeNavigationSource(t, n);
          const r = this.GetEventTarget();
          this.BatchedUpdate(() =>
            Object(d.b)(r, "vgp_onbuttonup", {
              button: e,
              source: t,
              is_repeat: !1,
            })
          );
        }
        BatchedUpdate(e) {
          this.m_fnGamepadEventUpdateBatcher(e);
        }
        OnNavigationTypeChange(e) {
          var t;
          if (
            (this.ChangeNavigationSource(e, -1),
            document.hasFocus() &&
              (e == i.b.MOUSE || e == i.b.TOUCH) &&
              this.m_LastActiveNavTree)
          ) {
            const e = this.m_LastActiveNavTree.GetLastFocusedNode(),
              n = (function (e) {
                if (!Object(l.q)(e)) return !1;
                const t = e.tagName,
                  n = Object(l.s)(e) ? e.type : null;
                return Object(l.r)(t, n);
              })(null == e ? void 0 : e.Element)
                ? e
                : null;
            null === (t = this.m_LastActiveNavTree) ||
              void 0 === t ||
              t.TransferFocus(d.c.BROWSER, n);
          }
        }
        NewGamepadNavigationTree(e) {
          return new m.a(this, e);
        }
        RegisterGamepadNavigationTree(e, t) {
          return (
            e.SetIsMounted(),
            t
              ? this.m_rgGamepadNavigationTrees.unshift(e)
              : (this.m_rgGamepadNavigationTrees.push(e),
                this.SetActiveNavTree(e, !0)),
            this.m_bGlobalEventsInitialized || this.BindGlobalEventHandlers(),
            () => this.UnregisterGamepadNavigationTree(e)
          );
        }
        UnregisterGamepadNavigationTree(e) {
          o.b(this.m_rgGamepadNavigationTrees, e),
            this.m_LastActiveNavTree == e &&
              ((this.m_LastActiveNavTree = null),
              this.SetActiveNavTree(null, !0));
        }
        GetGamepadNavTreeByID(e) {
          const t = this.m_rgGamepadNavigationTrees.findIndex((t) => t.id == e);
          return t >= 0 ? this.m_rgGamepadNavigationTrees[t] : null;
        }
        OnGamepadNavigationTreeActivated(e, t = !1) {
          this.SetActiveNavTree(e, t);
        }
        OnGamepadNavigationTreeFocused(e, t, n = !1) {
          e != this.m_LastActiveFocusNavTree &&
            e != this.m_LastActiveNavTree &&
            (this.m_LastActiveFocusNavTree.GetParentEmbeddedNavTree() == e ||
            e.GetParentEmbeddedNavTree() == this.m_LastActiveFocusNavTree
              ? (h(
                  `There was a focus event in ${e.id}, allowing focus transfer to activate nav tree due to parent embedded relationship`
                ),
                e.Activate())
              : h(
                  `There was a focus event in ${e.id}, but the active nav tree is ${this.m_LastActiveFocusNavTree.id} so it is being ignored.  Source: ${d.c[t]}.`
                ));
        }
        BlurNavTree(e) {
          this.m_LastActiveNavTree == e && this.SetActiveNavTree(null, !0),
            o.b(this.m_rgGamepadNavigationTrees, e),
            this.m_rgGamepadNavigationTrees.unshift(e);
        }
        IsActiveFocusNavTree(e) {
          return e == this.m_LastActiveFocusNavTree;
        }
        IsActiveNavTree(e) {
          return e == this.m_LastActiveNavTree;
        }
        SetActiveNavTree(e, t = !1) {
          if (e && this.m_LastActiveNavTree == e) return;
          const n = this.m_LastActiveNavTree;
          n && o.b(this.m_rgGamepadNavigationTrees, n),
            e ||
              (this.m_rgGamepadNavigationTrees.length &&
                (e = this.m_rgGamepadNavigationTrees[
                  this.m_rgGamepadNavigationTrees.length - 1
                ]));
          const r = this.m_LastActiveFocusNavTree == e;
          e && o.b(this.m_rgGamepadNavigationTrees, e),
            (this.m_LastActiveNavTree = e),
            (e && e.BUseVirtualFocus()) || (this.m_LastActiveFocusNavTree = e),
            h(
              `Move from nav tree ${null == n ? void 0 : n.id} to nav tree ${
                null == e ? void 0 : e.id
              } ${t ? "taking focus" : "no focus"}`
            ),
            n && this.m_rgGamepadNavigationTrees.push(n),
            e &&
              (this.m_rgGamepadNavigationTrees.push(e), e.OnActivate(!r && t)),
            n && n.OnDeactivateCallbacks.Dispatch(n, e),
            e && e.OnActivateCallbacks.Dispatch(e, n);
        }
        BindGlobalEventHandlers() {
          this.m_bGlobalEventsInitialized ||
            (this.m_bGlobalEventsInitialized = !0);
        }
        OnFocusChangeStart(e, t, n, r) {
          return (
            0 == this.m_iFocusChangeStack
              ? (this.m_ActiveFocusChange = { source: e, from: n, to: r })
              : !this.m_ActiveFocusChange.from &&
                n &&
                (this.m_ActiveFocusChange.from = n),
            this.m_iFocusChangeStack++
          );
        }
        OnFocusChangeComplete(e) {
          if (
            (this.m_iFocusChangeStack--,
            Object(s.a)(
              e == this.m_iFocusChangeStack,
              "out of order focus pop"
            ),
            0 == this.m_iFocusChangeStack)
          ) {
            const { source: e, from: t, to: n } = this.m_ActiveFocusChange;
            this.m_FocusChangedCallbacks.Dispatch(e, t, n);
          }
        }
        RegisterForUnhandledButtonDownEvents(e) {
          return this.m_UnhandledButtonEventsCallbacks.Register(e);
        }
        FireUnhandledGamepadEventCallbacks(e) {
          return (
            !this.m_UnhandledButtonEventsCallbacks.CountRegistered() ||
            (this.m_UnhandledButtonEventsCallbacks.Dispatch(e), !1)
          );
        }
        SetSuppressGamepadInput(e) {
          this.m_bSuppressGamepadInput = e;
        }
        TakeFocusChangingIFrame() {
          window.focus();
          let e = this.m_LastActiveFocusNavTree || this.m_LastActiveNavTree;
          e && e.TakeFocus(d.c.APPLICATION);
        }
        BIsRestoringHistory() {
          return this.m_bRestoringHistory;
        }
        RestoreHistoryTransaction(e) {
          return Object(r.a)(this, void 0, void 0, function* () {
            this.m_bRestoringHistory = !0;
            try {
              yield e();
            } finally {
              this.m_bRestoringHistory = !1;
            }
          });
        }
      }
      Object(r.b)([a.a], g.prototype, "OnButtonDown", null),
        Object(r.b)([a.a], g.prototype, "OnButtonUp", null),
        Object(r.b)([a.a], g.prototype, "OnNavigationTypeChange", null);
    },
    "av+R": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return u;
      }),
        n.d(t, "a", function () {
          return d;
        }),
        n.d(t, "e", function () {
          return m;
        }),
        n.d(t, "d", function () {
          return h;
        }),
        n.d(t, "c", function () {
          return p;
        }),
        n.d(t, "f", function () {
          return g;
        }),
        n.d(t, "g", function () {
          return f;
        });
      var r = n("mrSG"),
        i = n("q1tI"),
        o = n.n(i),
        s = n("BC0X"),
        a = n("opsS"),
        c = (n("BaVA"), n("NxAk"), n("j+5p"), n("7Whv")),
        l = n("8sdS");
      n("qDk6");
      const u = o.a.forwardRef(function (e, t) {
        const {
            NavigationManager: n,
            onActivated: i,
            onDeactivated: u,
            navTreeRef: d,
            secondary: m,
            virtualFocus: h,
            navID: p,
            children: g,
            "flow-children": f,
            parentEmbeddedNavTree: b,
          } = e,
          _ = Object(r.c)(e, [
            "NavigationManager",
            "onActivated",
            "onDeactivated",
            "navTreeRef",
            "secondary",
            "virtualFocus",
            "navID",
            "children",
            "flow-children",
            "parentEmbeddedNavTree",
          ]),
          { elemProps: v, navOptions: w, gamepadEvents: y } = Object(s.b)(_);
        let C = o.a.useRef(null);
        C.current || (C.current = n.NewGamepadNavigationTree(p));
        const S = C.current;
        o.a.useLayoutEffect(() => {
          const e = Object(c.a)(f);
          S.Root.SetProperties(
            Object.assign(Object.assign({}, w), { layout: e })
          );
        });
        let E = o.a.useRef();
        S.SetUseVirtualFocus(h),
          S.SetParentEmbeddedNavTree(b),
          Object(a.d)(S.OnActivateCallbacks, i),
          Object(a.d)(S.OnDeactivateCallbacks, u),
          Object(l.b)(y, E, C.current),
          o.a.useLayoutEffect(
            () => S.RegisterNavigationItem(S.Root, E.current),
            [S, E]
          ),
          o.a.useLayoutEffect(() => n.RegisterGamepadNavigationTree(S, m), [
            n,
            m,
            S,
          ]),
          o.a.useLayoutEffect(
            () => (Object(a.c)(d, S), () => Object(a.c)(d, null)),
            [d, S]
          );
        const O = Object(a.f)(E, t);
        return o.a.createElement(
          "div",
          Object.assign({}, v, { "data-react-nav-root": p, ref: O }),
          o.a.createElement(s.g.Provider, { value: S.Root }, g)
        );
      });
      function d() {
        return o.a.createRef();
      }
      const m = Object(s.e)("div"),
        h = Object(s.e)("button"),
        p = Object(s.e)("a"),
        g = Object(s.f)("input");
      Object(s.f)("textarea"), Object(s.e)("img");
      function f(e, t, n = !1) {
        o.a.useEffect(() => {
          const r = e.current;
          r && (t ? r.Activate(n) : r.Deactivate());
        }, [t, n, e]);
      }
    },
    bDQf: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      }),
        n.d(t, "b", function () {
          return u;
        });
      var r = n("mrSG"),
        i = n("XxJJ"),
        o = (n("75qM"), n("u2yL")),
        s = n("qiKp");
      const a = [
        "ActionDescription",
        "Backstack",
        "BrowserBackstack",
        "GroupMemberStore",
        "Chat",
        "ChatRoom",
        "ChatRoomGroup",
        "ChatHistory",
        "CompositionState",
        "AppOverviewImplObservable",
        "ReducedValue",
        "FocusNavigation",
        "FocusNavigationMovement",
        "GamepadEvents",
        "VirtualKeyboard",
        "UIStore/BasicUIStore",
        "SystemNetworkStore",
        "SteamClient",
        "AudioPlaybackManager",
        "LaunchStates",
        "Haptics",
      ];
      var c;
      !(function (e) {
        (e[(e.Debug = 0)] = "Debug"),
          (e[(e.Info = 1)] = "Info"),
          (e[(e.Warning = 2)] = "Warning"),
          (e[(e.Error = 3)] = "Error");
      })(c || (c = {}));
      class l {
        constructor(e, t) {
          (this.m_fnIdGenerator = null),
            (this.m_sName = e),
            (this.m_fnIdGenerator = t),
            u.Get().RegisterLogName(e);
        }
        Debug(...e) {
          this.Log(c.Debug, ...e);
        }
        Info(...e) {
          this.Log(c.Info, ...e);
        }
        Warning(...e) {
          this.Log(c.Warning, ...e);
        }
        Error(...e) {
          this.Log(c.Error, ...e);
        }
        Assert(e, ...t) {
          e || this.Log(c.Error, "Assertion failed:", ...t);
        }
        Log(e, ...t) {
          var n, r;
          if (e == c.Debug && !u.Get().IsDebugLogEnabled(this.m_sName)) return;
          let i = this.m_sName;
          const o =
            null !==
              (r =
                null === (n = this.m_fnIdGenerator) || void 0 === n
                  ? void 0
                  : n.call(this)) && void 0 !== r
              ? r
              : null;
          null != o && (i += " (" + o + ")");
          d(e, u.Get().IncludeBacktraceInLog, i, this.m_sName, ...t);
        }
      }
      Object(r.b)([i.a], l.prototype, "Debug", null),
        Object(r.b)([i.a], l.prototype, "Info", null),
        Object(r.b)([i.a], l.prototype, "Warning", null),
        Object(r.b)([i.a], l.prototype, "Error", null),
        Object(r.b)([i.a], l.prototype, "Assert", null);
      class u {
        constructor() {
          (this.m_Storage = null),
            (this.m_rgLogNames = null),
            (this.m_setEnabledDebugLogs = new Set()),
            (this.m_bIncludeBacktraceInLog = !1),
            (this.m_SettingsChangedCallback = new s.a()),
            (this.m_bLoading = !1),
            (this.m_Storage = new o.a()),
            (this.m_rgLogNames = a.slice()),
            this.LoadSettings();
        }
        LogAsLogManager(...e) {
          d(
            c.Info,
            this.IncludeBacktraceInLog,
            "LogManager",
            "LogManager",
            ...e
          );
        }
        LoadSettings() {
          return Object(r.a)(this, void 0, void 0, function* () {
            (this.m_bLoading = !0),
              (this.m_bIncludeBacktraceInLog = !!(yield this.m_Storage.GetObject(
                u.k_IncludeBacktraceInLog_StorageKey
              )));
            const e = yield this.m_Storage.GetObject(
              u.k_EnabledLogNames_StorageKey
            );
            Array.isArray(e) &&
              ((this.m_setEnabledDebugLogs = new Set(e)),
              this.LogAsLogManager(
                "Loaded debug enabled log names. Will print log messages for:",
                Array.from(this.m_setEnabledDebugLogs)
              )),
              (this.m_bLoading = !1),
              this.m_SettingsChangedCallback.Dispatch();
          });
        }
        SaveSettings() {
          return Object(r.a)(this, void 0, void 0, function* () {
            yield this.m_Storage.StoreObject(
              u.k_EnabledLogNames_StorageKey,
              Array.from(this.m_setEnabledDebugLogs)
            ),
              yield this.m_Storage.StoreObject(
                u.k_IncludeBacktraceInLog_StorageKey,
                this.m_bIncludeBacktraceInLog
              ),
              this.LogAsLogManager(
                "Saved enabled debug log names. Will print log messages for:",
                Array.from(this.m_setEnabledDebugLogs)
              );
          });
        }
        static Get() {
          return (
            null == u.s_Singleton && (u.s_Singleton = new u()), u.s_Singleton
          );
        }
        get Loading() {
          return this.m_bLoading;
        }
        get LogNames() {
          return this.m_rgLogNames;
        }
        RegisterLogName(e) {
          this.m_rgLogNames.includes(e) || this.m_rgLogNames.push(e);
        }
        IsLogName(e) {
          return this.m_rgLogNames.includes(e);
        }
        IsDebugLogEnabled(e) {
          return this.m_setEnabledDebugLogs.has(e);
        }
        ToggleDebugLogEnabled(e) {
          return Object(r.a)(this, void 0, void 0, function* () {
            this.SetDebugLogEnabled(e, !this.IsDebugLogEnabled(e));
          });
        }
        SetDebugLogEnabled(e, t) {
          return Object(r.a)(this, void 0, void 0, function* () {
            t
              ? this.m_setEnabledDebugLogs.add(e)
              : this.m_setEnabledDebugLogs.delete(e),
              this.m_SettingsChangedCallback.Dispatch(),
              yield this.SaveSettings();
          });
        }
        SetAllDebugLogsEnabled(e) {
          return Object(r.a)(this, void 0, void 0, function* () {
            (this.m_setEnabledDebugLogs = new Set(e ? a : [])),
              this.m_SettingsChangedCallback.Dispatch(),
              yield this.SaveSettings();
          });
        }
        RegisterForSettingsChanges(e) {
          return this.m_SettingsChangedCallback.Register(e);
        }
        get IncludeBacktraceInLog() {
          return this.m_bIncludeBacktraceInLog;
        }
        SetIncludeBacktraceInLog(e) {
          return Object(r.a)(this, void 0, void 0, function* () {
            (this.m_bIncludeBacktraceInLog = e),
              this.m_SettingsChangedCallback.Dispatch(),
              yield this.SaveSettings();
          });
        }
      }
      function d(e, t, n, r, ...i) {
        const o = (function (e) {
            let t = 0;
            for (let n = 0; n < e.length; n++)
              t = e.charCodeAt(n) + ((t << 5) - t);
            return [(t >> 0) & 255, (t >> 8) & 255, (t >> 16) & 255];
          })(r).map((e, t) =>
            Math.round(
              Math.max(0, Math.min(255, 255 * (0.8 * (e / 255 - 0.5) + 0.15)))
            )
          ),
          s = (299 * (a = o)[0] + 587 * a[1] + 114 * a[2]) / 1e3 >= 128;
        var a;
        let l = n;
        t &&
          (l =
            (function (e) {
              switch (e) {
                case c.Debug:
                  return String.fromCodePoint(128027);
                case c.Info:
                  return String.fromCodePoint(8505);
                case c.Warning:
                  return String.fromCodePoint(9888);
                case c.Error:
                  return String.fromCodePoint(128165);
              }
            })(e) +
            " " +
            l);
        const u = [
          `%c${l}%c:`,
          `color: ${s ? "black" : "white"}; background: rgb(${o.join(
            ","
          )}); padding: 0 1ch`,
          "color: transparent; margin-right: -1ch",
          ...i,
        ];
        if (t)
          console.groupCollapsed(...u),
            console.trace("Callstack"),
            console.groupEnd();
        else
          switch (e) {
            case c.Debug:
            case c.Info:
              console.log(...u);
              break;
            case c.Warning:
              console.warn(...u);
              break;
            case c.Error:
              console.error(...u);
          }
      }
      (u.k_EnabledLogNames_StorageKey = "EnabledWebLogs"),
        (u.k_IncludeBacktraceInLog_StorageKey = "IncludeBacktraceInLog"),
        (u.s_Singleton = null);
    },
    bxBv: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      }),
        n.d(t, "b", function () {
          return a;
        });
      n("kyHq");
      var r = n("mC9v"),
        i = n("hRO2"),
        o = (n("NtSG"), n("RD/U"));
      n("kLLr"), n("6NF1");
      class s {
        constructor(e, t, n, r, s) {
          if (r)
            (this.m_eMsg = r.m_eMsg),
              (this.m_bValid = r.m_bValid),
              this.m_bValid &&
                ((this.m_netPacket = r.m_netPacket),
                (this.m_cubHeader = r.m_cubHeader),
                (this.m_header = r.m_header),
                this.InitForType(n));
          else {
            if (((this.m_header = new o.f(null)), (this.m_bValid = !0), t))
              if (
                ((this.m_netPacket = t),
                this.m_netPacket.SeekGetHead(),
                (this.m_eMsg = this.m_netPacket.GetUint32()),
                2147483648 & this.m_eMsg)
              ) {
                (this.m_eMsg = 2147483647 & this.m_eMsg),
                  (this.m_cubHeader = this.m_netPacket.GetUint32());
                try {
                  o.f.deserializeBinaryFromReader(
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
            s && this.m_header.set_jobid_target(s.Hdr().jobid_target());
          }
        }
        static InstallErrorReportingStore(e) {
          this.sm_ErrorReportingStore = e;
        }
        static InitHeaderFromPacket(e) {
          return new s(void 0, e);
        }
        InitForType(e) {
          if (((this.m_body = new e()), this.m_netPacket)) {
            this.m_netPacket.SeekGetHead(8 + this.m_cubHeader);
            try {
              e.deserializeBinaryFromReader(
                this.m_body,
                new i.BinaryReader(
                  this.m_netPacket.GetPacket(),
                  this.m_netPacket.TellGet(),
                  this.m_netPacket.GetCountBytesRemaining()
                )
              );
            } catch (e) {
              this.m_bValid = !1;
              const t = s.sm_ErrorReportingStore,
                n = `Exception parsing protobuf message body of type ${this.m_eMsg}.  Definitions may be out of sync with server version.`;
              t &&
                t.ReportError(new Error(n), {
                  bIncludeMessageInIdentifier: !0,
                }),
                console.warn(n),
                console.log(e.stack || e);
            }
          }
        }
        BIsValid() {
          return this.m_bValid;
        }
        Body() {
          return this.m_body;
        }
        SetBodyJSON(e) {
          (e.toObject = () => e), (this.m_body = e);
        }
        Hdr() {
          return this.m_header;
        }
        GetEMsg() {
          return this.m_eMsg;
        }
        SetEMsg(e) {
          this.m_eMsg = e;
        }
        GetEResult() {
          return this.Hdr().eresult();
        }
        Serialize() {
          let e = this.m_header.serializeBinary(),
            t = this.m_body.serializeBinary(),
            n = 2147483648 | this.m_eMsg,
            i = new Uint8Array(8 + e.length + t.length),
            o = new r.a(i);
          return (
            o.PutUint32(n),
            o.PutUint32(e.length),
            o.PutBytes(e),
            o.PutBytes(t),
            i
          );
        }
        SerializeBody() {
          let e = this.m_body.serializeBinary(),
            t = new Uint8Array(e.length);
          return new r.a(t).PutBytes(e), t;
        }
        DEBUG_ToObject() {
          return {};
        }
        DEBUG_LogToConsole() {
          0;
        }
      }
      class a extends s {
        constructor(e, t = 0, n, r) {
          super(t, n, e, r);
        }
        static InitFromPacket(e, t) {
          return new a(e, 0, t);
        }
        static InitFromMsg(e, t) {
          return new a(e, void 0, void 0, t);
        }
        static Init(e, t) {
          return new a(e, t);
        }
        Body() {
          return super.Body();
        }
        SetBodyFields(e) {
          for (let t in e)
            Array.isArray(e[t])
              ? this.Body()[`add_${t}`] &&
                e[t].forEach((e) => {
                  this.Body()[`add_${t}`](e);
                })
              : this.Body()[`set_${t}`] && this.Body()[`set_${t}`](e[t]);
        }
      }
    },
    d1jy: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return o;
        });
      var r,
        i = n("qiKp");
      !(function (e) {
        (e[(e.LaunchGame = 0)] = "LaunchGame"),
          (e[(e.FriendMessage = 1)] = "FriendMessage"),
          (e[(e.ChatMention = 2)] = "ChatMention"),
          (e[(e.ChatMessage = 3)] = "ChatMessage"),
          (e[(e.ToastMessage = 4)] = "ToastMessage"),
          (e[(e.ToastAchievement = 5)] = "ToastAchievement"),
          (e[(e.ToastMisc = 6)] = "ToastMisc"),
          (e[(e.FriendOnline = 7)] = "FriendOnline"),
          (e[(e.FriendInGame = 8)] = "FriendInGame"),
          (e[(e.VolSound = 9)] = "VolSound"),
          (e[(e.ShowModal = 10)] = "ShowModal"),
          (e[(e.HideModal = 11)] = "HideModal"),
          (e[(e.IntoGameDetail = 12)] = "IntoGameDetail"),
          (e[(e.OutOfGameDetail = 13)] = "OutOfGameDetail"),
          (e[(e.PagedNavigation = 14)] = "PagedNavigation"),
          (e[(e.ToggleOn = 15)] = "ToggleOn"),
          (e[(e.ToggleOff = 16)] = "ToggleOff"),
          (e[(e.SliderUp = 17)] = "SliderUp"),
          (e[(e.SliderDown = 18)] = "SliderDown"),
          (e[(e.ChangeTabs = 19)] = "ChangeTabs"),
          (e[(e.DefaultOk = 20)] = "DefaultOk"),
          (e[(e.OpenSideMenu = 21)] = "OpenSideMenu"),
          (e[(e.CloseSideMenu = 22)] = "CloseSideMenu"),
          (e[(e.BasicNav = 23)] = "BasicNav"),
          (e[(e.FailedNav = 24)] = "FailedNav"),
          (e[(e.Typing = 25)] = "Typing");
      })(r || (r = {}));
      const o = new (class {
        constructor() {
          this.m_fnCallbackOnPlaySound = new i.a();
        }
        RegisterCallbackOnPlaySound(e) {
          return this.m_fnCallbackOnPlaySound.Register(e);
        }
        PlayNavSound(e) {
          this.m_fnCallbackOnPlaySound.Dispatch(e);
        }
      })();
    },
    eDP5: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      }),
        n.d(t, "b", function () {
          return s;
        });
      var r = n("q1tI"),
        i = n("lkRc");
      class o extends r.Component {
        render() {
          if ("dev" !== i.c.WEB_UNIVERSE) return null;
          let e = document.getElementById(this.props.strConfigID);
          if (!e) return null;
          let t = new Array();
          return (
            e.getAttributeNames().forEach((n) => {
              n.toLocaleLowerCase().startsWith("data-") &&
                (t.push(r.createElement("h1", { key: "header-" + n }, n)),
                t.push(
                  r.createElement(s, {
                    key: "body-" + n,
                    data: JSON.parse(e.getAttribute(n)),
                  })
                ));
            }),
            r.createElement("div", null, t)
          );
        }
      }
      class s extends r.Component {
        render() {
          return r.createElement(
            "div",
            null,
            r.createElement(
              "pre",
              null,
              JSON.stringify(this.props.data, null, 2)
            )
          );
        }
      }
    },
    exH9: function (e, t, n) {
      "use strict";
      function r(e) {
        return Object.keys(e).reduce(
          (t, n) => (e[n] ? (t ? `${t} ${n}` : n) : t),
          ""
        );
      }
      t.a = function (...e) {
        return e.reduce(
          (e, t) =>
            t
              ? "string" == typeof t
                ? e
                  ? `${e} ${t}`
                  : t
                : "object" == typeof t
                ? e
                  ? `${e} ${r(t)}`
                  : r(t)
                : e
              : e,
          ""
        );
      };
    },
    gCFW: function (e, t, n) {
      e.exports = {
        ManualOverlayContainer: "logsettings_ManualOverlayContainer_jKuCG",
        DropDownRow: "logsettings_DropDownRow_cv_p8",
        IconContainer: "logsettings_IconContainer_ka3_o",
        Label: "logsettings_Label_3ces1",
      };
    },
    gQFo: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      n("r64O"), n("mgoM");
      function r(e, t) {
        return t();
      }
    },
    gfbn: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("mrSG"),
        i = (n("SQr7"), n("Wr5T"), n("nmPn")),
        o = n("q1tI"),
        s = n.n(o),
        a = n("i8i4"),
        c = n.n(a),
        l = (n("mRR+"), n("TLQK"));
      n("mgoM");
      var u = n("lkRc"),
        d = n("r64O"),
        m = n("WBba"),
        h = n("uobO"),
        p = (n("5izx"), n("X3Ds"));
      n("Mgs7"),
        n("6Y59"),
        n("bDQf"),
        n("Jqb/"),
        n("ka0M"),
        n("gCFW"),
        n("SRyh");
      n("xnZ7"), n("idvb");
      Object(p.v)(() =>
        Object(r.a)(void 0, void 0, void 0, function* () {
          document.getElementById("application_config")
            ? Object(u.g)("application_config")
            : Object(u.g)(),
            Object(h.a)().Init(
              "Community",
              CLSTAMP,
              new m.a(u.c.WEBAPI_BASE_URL).GetServiceTransport()
            ),
            yield (function (e) {
              return Object(r.a)(this, void 0, void 0, function* () {
                {
                  const t = l.b.GetLanguageFallback(e),
                    r = e === t,
                    [i, o, s, a, c, u] = yield Promise.all([
                      n("rCDf")(`./shared_${e}.json`).then((e) => e.default),
                      n("RMhI")(`./sales_${e}.json`).then((e) => e.default),
                      n("AvbV")(`./main_${e}.json`).then((e) => e.default),
                      r
                        ? {}
                        : n("rCDf")(`./shared_${t}.json`).then(
                            (e) => e.default
                          ),
                      r
                        ? {}
                        : n("RMhI")(`./sales_${t}.json`).then((e) => e.default),
                      r
                        ? {}
                        : n("AvbV")(`./main_${t}.json`).then((e) => e.default),
                    ]);
                  l.e.AddTokens(
                    Object.assign(Object.assign(Object.assign({}, o), i), s),
                    Object.assign(Object.assign(Object.assign({}, c), a), u)
                  );
                }
                for (const e of g) l.e.AddTokens(e);
                g = void 0;
              });
            })(u.c.LANGUAGE),
            document.getElementById("application_root") &&
              c.a.render(
                s.a.createElement(i.a, {}),
                document.getElementById("application_root")
              );
        })
      );
      let g = [];
      window.LocalizationManifestReady = function (e, t, n) {
        Object(d.a)("manifest" === t, `Expected manifest not "${t}"`),
          void 0 !== g ? g.push(n) : l.e.AddTokens(n);
      };
    },
    hJxo: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "b", function () {
          return o;
        }),
        n.d(t, "c", function () {
          return s;
        });
      var r = n("X3Ds");
      class i {
        constructor(e, t) {
          (this.m_bActive = !1),
            (this.m_fnBoundAnimationFunc = void 0),
            (this.m_window = e),
            (this.m_options = Object.assign({ timing: "sine" }, t));
        }
        Start() {
          let e;
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
            this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
        }
        BIsActive() {
          return this.m_bActive;
        }
        End() {
          if (this.m_bActive) {
            try {
              this.Update(1);
            } catch (e) {}
            this.ClearInterval(), this.FireOnComplete();
          }
        }
        FireOnComplete() {
          this.m_options.onComplete && this.m_options.onComplete();
        }
        Cancel() {
          this.m_bActive = !1;
        }
        OnInterval(e) {
          if (!this.m_bActive) return;
          let t = performance.now() - this.m_msStart;
          if (t >= this.m_options.msDuration) return void this.End();
          let n = t / this.m_options.msDuration;
          try {
            this.Update(e(n));
          } catch (e) {}
          this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
        }
        ClearInterval() {
          this.m_bActive = !1;
        }
      }
      class o extends i {
        constructor(e, t, n) {
          super(e, t), (this.m_fnCallback = n);
        }
        Update(e) {
          this.m_fnCallback(e);
        }
      }
      class s extends i {
        constructor(e, t, n) {
          super("ownerDocument" in e ? r.n(e) : e, n),
            (this.m_props = {}),
            (this.m_object = e),
            (this.m_propTargets = t);
        }
        Start() {
          this.m_props = {};
          for (let e in this.m_propTargets) {
            let t = parseFloat(this.m_object[e]) || 0,
              n = this.m_propTargets[e];
            t != n && (this.m_props[e] = { start: t, end: n });
          }
          super.Start();
        }
        Update(e) {
          for (let t in this.m_props) {
            let n = this.m_props[t],
              r = n.start + (n.end - n.start) * e;
            this.m_object[t] = r;
          }
        }
      }
    },
    hwrv: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return _;
      });
      var r = n("mrSG"),
        i = n("rHSA"),
        o = n("XxJJ");
      let s = [
        { index: 0, type: i.a.OK, category: "action" },
        { index: 1, type: i.a.CANCEL, category: "action" },
        { index: 2, type: i.a.SECONDARY, category: "action" },
        { index: 3, type: i.a.OPTIONS, category: "action" },
        { index: 4, type: i.a.BUMPER_LEFT, category: "action" },
        { index: 5, type: i.a.BUMPER_RIGHT, category: "action" },
        { index: 6, type: i.a.TRIGGER_LEFT, category: "action" },
        { index: 7, type: i.a.TRIGGER_RIGHT, category: "action" },
        { index: 8, type: i.a.SELECT, category: "action" },
        { index: 9, type: i.a.START, category: "action" },
        { index: 10, type: i.a.LSTICK_CLICK, category: "action" },
        { index: 11, type: i.a.RSTICK_CLICK, category: "action" },
        { index: 12, type: i.a.DIR_UP, category: "navigation" },
        { index: 13, type: i.a.DIR_DOWN, category: "navigation" },
        { index: 14, type: i.a.DIR_LEFT, category: "navigation" },
        { index: 15, type: i.a.DIR_RIGHT, category: "navigation" },
        { index: 16, type: i.a.STEAM_GUIDE, category: "action" },
        { index: 17, type: i.a.SELECT, category: "action" },
      ];
      class a extends i.c {
        constructor() {
          super(),
            (this.m_rgGamepadStatus = []),
            this.SetSourceType(i.b.GAMEPAD),
            window.addEventListener("gamepadconnected", (e) => {
              this.m_bGamepadDetected ||
                (this.OnGamepadDetected(), this.PollGamepads());
            });
        }
        PollGamepads() {
          let e = navigator.getGamepads(),
            t = !1;
          for (let n = 0; n < e.length; n++) {
            let r = e[n];
            if (!r) continue;
            this.m_rgGamepadStatus[n] ||
              (this.m_rgGamepadStatus[n] = { buttons: [] });
            let i = this.m_rgGamepadStatus[n];
            for (let e = 0; e < s.length; e++) {
              let n = s[e],
                o = n.index;
              r.buttons[o] &&
                (r.buttons[o].pressed
                  ? ((t = !0),
                    i.buttons[o] ||
                      ((i.buttons[o] = !0), this.OnButtonDown(n.type)))
                  : i.buttons[o] &&
                    (this.OnButtonUp(n.type), (i.buttons[o] = !1)));
            }
          }
          document.hasFocus() || t
            ? requestAnimationFrame(this.PollGamepads)
            : (console.log("Lost focus - suspending gamepad polling"),
              window.addEventListener("focusin", this.OnWindowRegainedFocus));
        }
        OnWindowRegainedFocus() {
          window.removeEventListener("focusin", this.OnWindowRegainedFocus),
            this.PollGamepads();
        }
      }
      Object(r.b)([o.a], a.prototype, "PollGamepads", null),
        Object(r.b)([o.a], a.prototype, "OnWindowRegainedFocus", null);
      var c = n("kyHq");
      const l = {
          A: i.a.OK,
          B: i.a.CANCEL,
          X: i.a.SECONDARY,
          Y: i.a.OPTIONS,
          SELECT: i.a.SELECT,
          START: i.a.START,
          LSHOULDER: i.a.BUMPER_LEFT,
          RSHOULDER: i.a.BUMPER_RIGHT,
          LTRIGGER: i.a.TRIGGER_LEFT,
          RTRIGGER: i.a.TRIGGER_RIGHT,
          LEFTSTICK_UP: i.a.DIR_UP,
          LEFTSTICK_RIGHT: i.a.DIR_RIGHT,
          LEFTSTICK_DOWN: i.a.DIR_DOWN,
          LEFTSTICK_LEFT: i.a.DIR_LEFT,
          LEFTSTICK_CLICK: i.a.LSTICK_CLICK,
          RIGHTSTICK_CLICK: i.a.RSTICK_CLICK,
          LeftStick: i.a.LSTICK_TOUCH,
          RightStick: i.a.RSTICK_TOUCH,
          LeftTrackpad: i.a.LPAD_TOUCH,
          LeftTrackpadClick: i.a.LPAD_CLICK,
          RightTrackpad: i.a.RPAD_TOUCH,
          RightTrackpadClick: i.a.RPAD_CLICK,
          RearLeftUpper: i.a.REAR_LEFT_UPPER,
          RearLeftLower: i.a.REAR_LEFT_LOWER,
          RearRightUpper: i.a.REAR_RIGHT_UPPER,
          RearRightLower: i.a.REAR_RIGHT_LOWER,
        },
        u = {
          [c.h.SystemKey0]: i.a.STEAM_GUIDE,
          [c.h.SystemKey1]: i.a.STEAM_QUICK_MENU,
        };
      class d extends i.c {
        constructor() {
          super(),
            (this.m_rgControllers = new Map()),
            "undefined" != typeof SteamClient &&
              ((this.m_hUnregisterControllerInput = SteamClient.Input.RegisterForControllerInputMessages(
                this.HandleControllerInputMessages
              )),
              SteamClient.System.UI.RegisterForSystemKeyEvents(
                this.HandleSystemKeyEvents
              )),
            this.SetSourceType(i.b.GAMEPAD);
        }
        HandleSystemKeyEvents(e) {
          const t = u[e.eKey];
          t && this.OnSystemButtonPress(t, e.nControllerIndex);
        }
        OnSystemButtonPress(e, t) {
          this.OnButtonDown(e, t), this.OnButtonUp(e, t);
        }
        GetController(e) {
          let t = this.m_rgControllers.get(e);
          return (
            t || ((t = { activeButtons: {} }), this.m_rgControllers.set(e, t)),
            t
          );
        }
        HandleControllerInputMessages(e) {
          for (const t of e) {
            const e = l[t.strActionName];
            if (null != e) {
              const n = this.GetController(t.nController);
              t.bState && !n.activeButtons[e]
                ? ((n.activeButtons[e] = !0),
                  this.OnButtonDown(e, t.nController))
                : !t.bState &&
                  n.activeButtons[e] &&
                  ((n.activeButtons[e] = !1),
                  this.OnButtonUp(e, t.nController));
            }
          }
        }
      }
      Object(r.b)([o.a], d.prototype, "HandleSystemKeyEvents", null),
        Object(r.b)([o.a], d.prototype, "HandleControllerInputMessages", null);
      var m = n("X3Ds");
      class h extends i.c {
        constructor(e) {
          super(),
            (this.m_lastButtonDown = i.a.INVALID),
            this.SetSourceType(i.b.KEYBOARD),
            e.addEventListener("keydown", this.OnKeyDown),
            e.addEventListener("keyup", this.OnKeyUp),
            e.addEventListener("blur", this.Reset);
        }
        OnKeyDown(e) {
          if ("Tab" == e.code) return void e.preventDefault();
          const t = this.TranslateKey(e);
          t != i.a.INVALID &&
            (e.preventDefault(),
            t != this.m_lastButtonDown &&
              (this.Reset(),
              this.OnButtonDown(t),
              (this.m_lastButtonDown = t)));
        }
        OnKeyUp(e) {
          const t = this.TranslateKey(e);
          t != i.a.INVALID &&
            (this.OnButtonUp(t),
            (this.m_lastButtonDown = i.a.INVALID),
            e.preventDefault());
        }
        Reset() {
          this.m_lastButtonDown != i.a.INVALID &&
            (this.OnButtonUp(this.m_lastButtonDown),
            (this.m_lastButtonDown = i.a.INVALID));
        }
        TranslateKey(e) {
          const t = e.code,
            n = e.ctrlKey,
            r = e.shiftKey,
            o =
              m.q(e.target) &&
              ("INPUT" === e.target.nodeName ||
                "TEXTAREA" === e.target.nodeName);
          if (n && r)
            switch (t) {
              case "Digit4":
                return i.a.TRIGGER_LEFT;
              case "Digit5":
                return i.a.TRIGGER_RIGHT;
              default:
                return i.a.INVALID;
            }
          if (n)
            switch (t) {
              case "Digit1":
                return i.a.STEAM_GUIDE;
              case "Digit2":
                return i.a.STEAM_QUICK_MENU;
              case "Digit3":
                return i.a.SELECT;
              case "Digit4":
                return i.a.BUMPER_LEFT;
              case "Digit5":
                return i.a.BUMPER_RIGHT;
              case "Digit6":
                return i.a.LSTICK_CLICK;
              case "Digit7":
                return i.a.RSTICK_CLICK;
              case "Digit8":
                return i.a.OPTIONS;
              case "Digit9":
                return i.a.SELECT;
              case "Digit0":
                return i.a.START;
            }
          switch (t) {
            case "Escape":
              return i.a.CANCEL;
            case "Enter":
              return o ? i.a.INVALID : i.a.OK;
            case "Backspace":
              return o ? i.a.INVALID : i.a.SECONDARY;
            case "ArrowUp":
              return i.a.DIR_UP;
            case "ArrowDown":
              return i.a.DIR_DOWN;
            case "ArrowLeft":
              return i.a.DIR_LEFT;
            case "ArrowRight":
              return i.a.DIR_RIGHT;
          }
          return i.a.INVALID;
        }
      }
      Object(r.b)([o.a], h.prototype, "OnKeyDown", null),
        Object(r.b)([o.a], h.prototype, "OnKeyUp", null),
        Object(r.b)([o.a], h.prototype, "Reset", null);
      class p extends i.c {
        constructor(e) {
          super(),
            (this.m_nAccumulatedMouseMovement = 0),
            (this.m_bFirstMouseUpdate = !0),
            this.SetSourceType(i.b.MOUSE),
            e.addEventListener("mousedown", this.OnMouseDown),
            e.addEventListener("mousemove", this.OnMouseMove),
            e.addEventListener("blur", this.Reset);
        }
        OnMouseDown(e) {
          e.defaultPrevented || this.OnNavigationTypeChanged(i.b.MOUSE);
        }
        OnMouseMove(e) {
          if (!e.defaultPrevented) {
            if (this.m_bFirstMouseUpdate)
              return (
                (this.m_nLastScreenX = e.screenX),
                (this.m_nLastScreenY = e.screenY),
                void (this.m_bFirstMouseUpdate = !1)
              );
            (this.m_nAccumulatedMouseMovement +=
              Math.abs(e.screenX - this.m_nLastScreenX) +
              Math.abs(e.screenY - this.m_nLastScreenY)),
              this.m_nAccumulatedMouseMovement > 500 &&
                (this.Reset(), this.OnNavigationTypeChanged(i.b.MOUSE));
          }
        }
        Reset() {
          (this.m_nAccumulatedMouseMovement = 0),
            (this.m_bFirstMouseUpdate = !0);
        }
      }
      Object(r.b)([o.a], p.prototype, "OnMouseDown", null),
        Object(r.b)([o.a], p.prototype, "OnMouseMove", null),
        Object(r.b)([o.a], p.prototype, "Reset", null);
      var g = n("NxAk"),
        f = n("lkRc");
      class b {
        constructor() {
          (this.m_GamepadNavigationController = new g.c()),
            f.c.IN_GAMEPADUI &&
              (this.m_GamepadNavigationController.RegisterInputSource(new d()),
              this.m_GamepadNavigationController.RegisterInputSource(new a())),
            "dev" == f.c.WEB_UNIVERSE &&
              (this.m_GamepadNavigationController.RegisterInputSource(
                new h(window)
              ),
              this.m_GamepadNavigationController.RegisterInputSource(
                new p(window)
              ));
        }
        GetNavigationController() {
          return this.m_GamepadNavigationController;
        }
        static Get() {
          return (
            b.s_Singleton ||
              ((b.s_Singleton = new b()),
              "dev" == f.c.WEB_UNIVERSE &&
                (window.g_StoreWebNavStore = b.s_Singleton)),
            b.s_Singleton
          );
        }
      }
      function _() {
        const e = window.legacyWebFocusNavController;
        return e || b.Get().GetNavigationController();
      }
    },
    idvb: function (e, t, n) {},
    "j+5p": function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return N;
      }),
        n.d(t, "d", function () {
          return j;
        }),
        n.d(t, "e", function () {
          return F;
        }),
        n.d(t, "b", function () {
          return A;
        }),
        n.d(t, "a", function () {
          return P;
        });
      var r = n("mrSG"),
        i = n("rHSA"),
        o = n("9cYf"),
        s = n("r64O"),
        a = n("XxJJ"),
        c = n("qiKp"),
        l = n("bDQf");
      var u = n("BaVA"),
        d = n("NxAk"),
        m = n("X3Ds");
      function h(e, t, n) {
        const r = [],
          [i, o] = e.GetChildren(),
          s = e.GetActiveChild();
        let a;
        const c = s ? s.Element.getBoundingClientRect() : null;
        if (s) {
          const e = f(s, t, n);
          if (
            e &&
            !e.offScreen &&
            ((a = p(s, e, e.overlap, n)), a && !a.visibility.offScreen)
          )
            return a;
          e && r.push({ child: s, visibility: e });
        }
        const l = n || c;
        for (let e = 0; e < i.length; e++) {
          const n = i[e];
          if (n == s) continue;
          const o = f(n, t, l);
          o && r.push({ child: n, visibility: o });
        }
        let u;
        r.sort(g);
        for (const e of r) {
          const { child: n, visibility: r } = e;
          if (r.offScreen && u) {
            if (!u.visibility.offScreen) break;
            if (r.distance > u.visibility.distance) break;
          }
          const i = n == s ? a : p(n, r, r.overlap || t, l);
          i && (!u || g(i, u) < 0) && (u = i);
        }
        return u;
      }
      function p(e, t, n, r) {
        switch (e.GetFocusable()) {
          case "none":
            return null;
          case "children":
            return h(e, t.overlap || n, r);
          case "self":
            return { child: e, visibility: t };
        }
      }
      function g(e, t) {
        const n = e.visibility,
          r = t.visibility;
        return n.offScreen
          ? r.offScreen
            ? n.distance - r.distance
            : 1
          : r.offScreen
          ? -1
          : n.distance - r.distance;
      }
      function f(e, t, n) {
        const r = e.Element.getBoundingClientRect(),
          i = e.GetFocusable();
        let o;
        if ("none" == i) return null;
        if ("self" == i) {
          if (
            r.top < t.top ||
            r.right > t.right ||
            r.bottom > t.bottom ||
            r.left < t.left
          ) {
            const e = r.top + r.height / 2,
              n = r.left + r.width / 2;
            if (e < t.top) return { offScreen: "top", distance: t.top - e };
            if (n > t.right)
              return { offScreen: "right", distance: n - t.right };
            if (e > t.bottom)
              return { offScreen: "bottom", distance: e - t.bottom };
            if (n < t.left) return { offScreen: "left", distance: t.left - n };
          }
          n && (o = Object(m.k)(r, n));
        } else if ("children" == i) {
          const n = e.Element;
          if (n.scrollHeight > r.height || n.scrollWidth > r.width) {
            const e = n.ownerDocument.defaultView.getComputedStyle(n);
            if ("visible" == e.overflowX || "visible" == e.overflowY)
              return { overlap: t };
          }
          if (r.bottom < t.top)
            return { offScreen: "top", distance: t.top - r.bottom };
          if (r.left > t.right)
            return { offScreen: "right", distance: r.left - t.right };
          if (r.top > t.bottom)
            return { offScreen: "bottom", distance: r.top - t.bottom };
          if (r.right < t.left)
            return { offScreen: "left", distance: t.left - r.right };
        }
        return {
          overlap: {
            top: Math.max(r.top, t.top),
            right: Math.min(r.right, t.right),
            bottom: Math.min(r.bottom, t.bottom),
            left: Math.max(r.left, t.left),
          },
          distance: o,
        };
      }
      var b = n("YyVH"),
        _ = n("hJxo");
      const v = new l.a("ScrollSnap").Debug;
      let w = !1;
      let y;
      function C(e) {
        if (!e) return { left: 0, top: 0, right: 0, bottom: 0 };
        if (!("ownerDocument" in e))
          return {
            left: 0,
            right: e.innerWidth,
            top: 0,
            bottom: e.innerHeight,
          };
        let t = 0,
          n = 0,
          r = e;
        for (; r; ) {
          if (((t += r.offsetTop), (n += r.offsetLeft), "ownerDocument" in r)) {
            if ("fixed" === window.getComputedStyle(r).position) break;
          }
          r = r.offsetParent;
        }
        for (r = null == e ? void 0 : e.parentElement; r; ) {
          const { scrollTop: e, scrollLeft: i } = k(r);
          if (((t -= e), (n -= i), "ownerDocument" in r)) {
            if ("fixed" === window.getComputedStyle(r).position) break;
          }
          r = r.parentElement;
        }
        return {
          left: n,
          top: t,
          right: n + e.offsetWidth,
          bottom: t + e.offsetHeight,
        };
      }
      function S(e, t) {
        return "x" == t
          ? [e.left, e.right, e.right - e.left]
          : [e.top, e.bottom, e.bottom - e.top];
      }
      function E(e, t, n, r) {
        let [i, o, s] = S(e, r),
          [a, c, l] = S(t, r),
          [u, d] = S(n, r);
        return i < a && o > c
          ? 0
          : (i < a && s <= l) || (o > c && s > l)
          ? i - a - u
          : (i < a && s > l) || (o > c && s <= l)
          ? o - c + d
          : 0;
      }
      function O(e) {
        return "auto" == e
          ? 0
          : e.endsWith("px")
          ? parseInt(e)
          : (console.log("Unsupported length", e), 0);
      }
      function M(e) {
        if (!("ownerDocument" in e))
          return { left: 0, right: 0, top: 0, bottom: 0 };
        const t = e.ownerDocument.defaultView.getComputedStyle(e);
        return {
          left: O(t.scrollMarginLeft),
          right: O(t.scrollMarginRight),
          top: O(t.scrollMarginTop),
          bottom: O(t.scrollMarginBottom),
        };
      }
      function B(e, t) {
        let n = (function (e) {
          let t;
          return (
            (t =
              "ownerDocument" in e
                ? e.ownerDocument.defaultView.getComputedStyle(e)
                : e.document.defaultView.getComputedStyle(
                    window.document.documentElement
                  )),
            {
              left: O(t.scrollPaddingLeft),
              right: O(t.scrollPaddingRight),
              top: O(t.scrollPaddingTop),
              bottom: O(t.scrollPaddingBottom),
            }
          );
        })(e);
        return {
          left: Math.max(0, t.left + n.left),
          right: Math.max(0, t.right - n.right),
          top: Math.max(0, t.top + n.top),
          bottom: Math.max(0, t.bottom - n.bottom),
        };
      }
      function D(e) {
        return e > -1 && e < 1;
      }
      function R(e, t, n, r, i) {
        v(
          "----------------------------------------------------------------------------------"
        ),
          v("Scrolling Into View:", t);
        let o = [],
          s = t,
          a = C(t),
          c = null != i ? i : Number.MAX_VALUE;
        for (; s; ) {
          let e = Object(m.m)(s);
          e || (e = Object(m.n)(s));
          let t = M(s),
            n = B(e, C(e)),
            l = x(e),
            u = { element: e, left: 0, top: 0 };
          if (
            (v(
              "Checking scroll div",
              e,
              `scroll y:${l.scrollTop} of ${l.MaxScrollTop()}, x:${
                l.scrollLeft
              } of ${l.MaxScrollLeft()}, adjusted =>`,
              n,
              "target => ",
              a
            ),
            (r && "y" != r) ||
              !Object(m.c)(e, "y") ||
              ((u.top = E(a, n, t, "y")),
              (u.top = b.a(
                u.top,
                -l.scrollTop,
                l.MaxScrollTop() - l.scrollTop
              )),
              i &&
                ((u.top = Math.min(c, Math.abs(u.top)) * (u.top < 0 ? -1 : 1)),
                (c -= Math.abs(u.top))),
              v(`- checked y: ${u.top}`)),
            (r && "x" != r) ||
              !Object(m.c)(e, "x") ||
              ((u.left = E(a, n, t, "x")),
              (u.left = b.a(
                u.left,
                -l.scrollLeft,
                l.MaxScrollLeft() - l.scrollLeft
              )),
              i &&
                ((u.left =
                  Math.min(c, Math.abs(u.left)) * (u.left < 0 ? -1 : 1)),
                (c -= Math.abs(u.left))),
              v(`- checked x: ${u.left}`)),
            o.push(u),
            i && !c)
          )
            break;
          if (!("ownerDocument" in e)) break;
          (s = e),
            (a = {
              top: a.top - u.top,
              right: a.right - u.left,
              bottom: a.bottom - u.top,
              left: a.left - u.left,
            });
        }
        let l = !1;
        for (let e of o) {
          if (D(e.left) && D(e.top)) continue;
          let t = x(e.element),
            r = t.scrollTop + e.top,
            i = t.scrollLeft + e.left;
          (i = b.a(i, 0, t.MaxScrollLeft())),
            (r = b.a(r, 0, t.MaxScrollTop())),
            (D(t.scrollLeft - i) && D(t.scrollTop - r)) ||
              (t.scrollTo({ left: i, top: r, behavior: n }),
              l || (v("Scrolling:"), (l = !0)),
              v(
                `- ${e.top},${e.left} => ${r}, ${i}, behavior: ${n}`,
                e.element
              ));
        }
      }
      class T {
        constructor(e) {
          (this.m_scrollTopTarget = void 0),
            (this.m_scrollLeftTarget = void 0),
            (this.m_animation = void 0),
            "ownerDocument" in e
              ? ((this.m_element = e),
                (this.m_fnOriginalScrollTo = e.scrollTo),
                (this.m_element.scrollTo = (e, t) => {
                  "number" == typeof e
                    ? this.scrollTo({ left: e, top: t })
                    : this.scrollTo(e);
                }))
              : ((this.m_window = e),
                (this.m_element = e.document.documentElement));
        }
        ResetScrollState() {
          (this.m_scrollTopTarget = void 0),
            (this.m_scrollLeftTarget = void 0),
            this.m_window || (this.m_element.style.scrollSnapType = "");
        }
        scrollTo(e) {
          var t, n;
          if ("auto" == e.behavior)
            this.m_animation &&
              (this.m_animation.Cancel(), (this.m_animation = void 0)),
              this.m_window
                ? this.m_window.scrollTo(e)
                : this.m_fnOriginalScrollTo.apply(this.m_element, [e]),
              this.ResetScrollState();
          else {
            const r =
                null !== (t = e.left) && void 0 !== t ? t : this.scrollLeft,
              i = null !== (n = e.top) && void 0 !== n ? n : this.scrollTop;
            let o = "sine";
            this.m_animation && (this.m_animation.Cancel(), (o = "linear"));
            if (
              Math.max(
                Math.abs(this.currentScrollTop - i),
                Math.abs(this.currentScrollLeft - r)
              ) > 0
            ) {
              const e = {
                msDuration: 200,
                timing: o,
                onComplete: this.ResetScrollState,
              };
              if (this.m_window) {
                const t = this.currentScrollLeft,
                  n = this.currentScrollTop;
                this.m_animation = new _.b(this.m_window, e, (e) => {
                  this.m_window.scrollTo({
                    left: t + (r - t) * e,
                    top: n + (i - n) * e,
                    behavior: "auto",
                  });
                });
              } else
                (this.m_element.style.scrollSnapType = "initial"),
                  (this.m_animation = new _.c(
                    this.m_element,
                    { scrollTop: i, scrollLeft: r },
                    e
                  ));
              (this.m_scrollLeftTarget = r),
                (this.m_scrollTopTarget = i),
                this.m_animation.Start();
            }
          }
        }
        get clientWidth() {
          return this.m_window
            ? this.m_window.innerWidth
            : this.m_element.clientWidth;
        }
        get clientHeight() {
          return this.m_window
            ? this.m_window.innerHeight
            : this.m_element.clientHeight;
        }
        get currentScrollLeft() {
          return this.m_window
            ? this.m_window.scrollX
            : this.m_element.scrollLeft;
        }
        get currentScrollTop() {
          return this.m_window
            ? this.m_window.scrollY
            : this.m_element.scrollTop;
        }
        get scrollLeft() {
          var e;
          return null !== (e = this.m_scrollLeftTarget) && void 0 !== e
            ? e
            : this.currentScrollLeft;
        }
        get scrollTop() {
          var e;
          return null !== (e = this.m_scrollTopTarget) && void 0 !== e
            ? e
            : this.currentScrollTop;
        }
        get scrollWidth() {
          return this.m_element.scrollWidth;
        }
        get scrollHeight() {
          return this.m_element.scrollHeight;
        }
        MaxScrollTop() {
          return this.scrollHeight - this.clientHeight;
        }
        MaxScrollLeft() {
          return this.scrollWidth - this.clientWidth;
        }
      }
      Object(r.b)([a.a], T.prototype, "ResetScrollState", null);
      const I = new WeakMap();
      function x(e) {
        let t = I.get(e);
        return t || ((t = new T(e)), I.set(e, t)), t;
      }
      function k(e) {
        const t = I.get(e);
        return t
          ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
          : { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
      }
      const L = new l.a("FocusNavigationMovement").Debug;
      var N, j, F, A;
      !(function (e) {
        (e[(e.NONE = 0)] = "NONE"),
          (e[(e.COLUMN = 1)] = "COLUMN"),
          (e[(e.ROW = 2)] = "ROW"),
          (e[(e.COLUMN_REVERSE = 3)] = "COLUMN_REVERSE"),
          (e[(e.ROW_REVERSE = 4)] = "ROW_REVERSE"),
          (e[(e.GRID = 5)] = "GRID"),
          (e[(e.GEOMETRIC = 6)] = "GEOMETRIC");
      })(N || (N = {})),
        (function (e) {
          (e[(e.FIRST = 0)] = "FIRST"),
            (e[(e.LAST = 1)] = "LAST"),
            (e[(e.MAINTAIN_X = 2)] = "MAINTAIN_X"),
            (e[(e.MAINTAIN_Y = 3)] = "MAINTAIN_Y"),
            (e[(e.PREFERRED_CHILD = 4)] = "PREFERRED_CHILD");
        })(j || (j = {})),
        (function (e) {
          (e[(e.Standard = 0)] = "Standard"),
            (e[(e.NoTransform = 1)] = "NoTransform"),
            (e[(e.NoTransformSparseContent = 2)] = "NoTransformSparseContent");
        })(F || (F = {})),
        (function (e) {
          (e[(e.INVALID = 0)] = "INVALID"),
            (e[(e.FORWARD = 1)] = "FORWARD"),
            (e[(e.BACKWARD = 2)] = "BACKWARD");
        })(A || (A = {}));
      class P {
        constructor(e, t, n) {
          (this.m_rgChildren = []),
            (this.m_iActiveChild = -1),
            (this.m_bChildrenSorted = !1),
            (this.m_bAutoFocusChild = !1),
            (this.m_bMounted = !1),
            (this.m_bFocused = !1),
            (this.m_FocusCallbackList = new c.a()),
            (this.m_bFocusWithin = !1),
            (this.m_FocusWithinCallbackList = new c.a()),
            (this.m_ActionDescriptionsChangedCallbackList = new c.a()),
            (this.m_RetainFocusParent = null),
            (this.m_rgNavigationHandlers = []),
            (this.m_rgFocusHandlers = []),
            (this.m_Tree = e),
            (this.m_Parent = t),
            (this.m_FocusRing = n),
            (this.m_nDepth = t ? t.m_nDepth + 1 : 0);
        }
        CreateHandle() {
          return new d.e(this);
        }
        get Tree() {
          return this.m_Tree;
        }
        get NavKey() {
          var e, t;
          return (
            null === (e = this.m_Properties) || void 0 === e ? void 0 : e.navKey
          )
            ? this.m_Properties.navKey
            : (null === (t = this.m_element) || void 0 === t ? void 0 : t.id)
            ? this.m_element.id
            : void 0;
        }
        get Element() {
          return this.m_element;
        }
        get Parent() {
          return this.m_Parent;
        }
        SetProperties(e) {
          var t, n, r, i, o;
          const s =
            ((a =
              null === (t = this.m_Properties) || void 0 === t
                ? void 0
                : t.actionDescriptionMap),
            (c = null == e ? void 0 : e.actionDescriptionMap),
            !(null == a || null == c
              ? a === c
              : "object" == typeof a &&
                "object" == typeof c &&
                Object.keys(a).length === Object.keys(c).length &&
                Object.keys(a).every(
                  (e) => c.hasOwnProperty(e) && a[e] === c[e]
                )));
          var a, c;
          const l =
              null === (n = this.m_Properties) || void 0 === n
                ? void 0
                : n.retainFocus,
            d =
              null === (r = this.m_Properties) || void 0 === r
                ? void 0
                : r.noFocusRing;
          (this.m_Properties = e || {}),
            s && this.m_ActionDescriptionsChangedCallbackList.Dispatch(),
            this.m_Properties.retainFocus && !l
              ? this.PropagateRetainFocusParentToChildren(this)
              : !this.m_Properties.retainFocus &&
                l &&
                this.PropagateRetainFocusParentToChildren(
                  this.m_RetainFocusParent
                ),
            this.m_Properties.noFocusRing && !d && this.BHasFocus()
              ? null === (i = this.m_FocusRing) ||
                void 0 === i ||
                i.OnBlur(u.c.APPLICATION, this, this)
              : !this.m_Properties.noFocusRing &&
                d &&
                this.BHasFocus() &&
                (null === (o = this.m_FocusRing) ||
                  void 0 === o ||
                  o.OnFocus(u.c.APPLICATION, this, this)),
            this.m_element && this.RegisterDOMEvents();
        }
        BWantsAutoFocus() {
          return this.m_Properties.autoFocus || this.m_bAutoFocusChild;
        }
        BWantsPreferredFocus() {
          return this.m_Properties.preferredFocus;
        }
        BWantsFocusRing() {
          return (
            !this.m_Properties.noFocusRing ||
            this.m_Tree.Controller.GetShowDebugFocusRing().Value
          );
        }
        GetBoundingRect() {
          return this.m_element && this.m_element.getBoundingClientRect();
        }
        SetHasFocus(e) {
          e != this.m_bFocused &&
            ((this.m_bFocused = e),
            this.m_FocusCallbackList.Dispatch(this.m_bFocused));
        }
        SetFocusWithin(e) {
          var t;
          e != this.m_bFocusWithin &&
            ((this.m_bFocusWithin = e),
            this.m_FocusWithinCallbackList.Dispatch(this.m_bFocusWithin),
            (null === (t = this.m_Properties) || void 0 === t
              ? void 0
              : t.onFocusWithin) &&
              this.m_Properties.onFocusWithin(this.m_bFocusWithin));
        }
        BHasFocus() {
          return this.m_bFocused;
        }
        BFocusWithin() {
          return this.m_bFocusWithin;
        }
        get FocusCallbackList() {
          return this.m_FocusCallbackList;
        }
        get FocusWithinCallbackList() {
          return this.m_FocusWithinCallbackList;
        }
        ForceMeasureFocusRing() {
          var e;
          null === (e = this.m_FocusRing) ||
            void 0 === e ||
            e.OnForceMeasureFocusRing();
        }
        get ActionDescriptionChangedCallbackList() {
          return this.m_ActionDescriptionsChangedCallbackList;
        }
        GetActiveActionDescriptions() {
          return this.BuildConsolidatedActionDescriptionMap({});
        }
        BuildConsolidatedActionDescriptionMap(e) {
          var t;
          const n =
            null === (t = this.m_Properties) || void 0 === t
              ? void 0
              : t.actionDescriptionMap;
          if (n)
            for (const t in n) {
              const r = t;
              void 0 === e[r] && (e[r] = n[r]);
            }
          return this.m_Parent
            ? this.m_Parent.BuildConsolidatedActionDescriptionMap(e)
            : e;
        }
        AddChild(e) {
          var t;
          this.m_rgChildren.push(e),
            (this.m_bChildrenSorted = !1),
            this.m_element && this.RegisterDOMEvents(),
            (
              null === (t = this.m_Properties) || void 0 === t
                ? void 0
                : t.retainFocus
            )
              ? e.SetRetainFocusParent(this)
              : this.m_RetainFocusParent &&
                e.SetRetainFocusParent(this.m_RetainFocusParent),
            this.m_bMounted &&
              e.BFocusWithin() &&
              (Object(s.a)(
                -1 == this.m_iActiveChild && this.BFocusWithin(),
                "Invalid focus state in AddChild"
              ),
              (this.m_iActiveChild = this.m_rgChildren.length - 1));
        }
        OnMount(e) {
          (this.m_element = e),
            this.m_Parent
              ? this.m_Parent.AddChild(this)
              : Object(s.a)(
                  this == this.m_Tree.Root,
                  "Only root should have no parent"
                ),
            (this.m_bMounted = !0),
            this.RegisterDOMEvents();
          const t =
            this.m_Properties.autoFocus ||
            (this.m_RetainFocusParent && this.m_RetainFocusParent.BHasFocus());
          if (this.BWantsAutoFocus() || t) {
            let e = -1;
            this.m_rgChildren.length &&
              (this.EnsureChildrenSorted(),
              (e = this.m_rgChildren.findIndex((e) => e.BWantsAutoFocus()))),
              (this.m_Properties.autoFocus || t || -1 !== e) &&
                ((this.m_iActiveChild = e),
                !this.m_Parent || this.m_Parent.m_element
                  ? this.BTakeFocus(u.c.APPLICATION)
                  : (this.m_Parent.m_bAutoFocusChild = !0));
          } else if (this.m_rgChildren.length) {
            const e = this.m_rgChildren.findIndex((e) => e.BFocusWithin());
            -1 != e &&
              ((this.m_iActiveChild = e),
              Object(s.a)(
                this.m_bFocusWithin,
                "Child has focus, we should be m_bFocusWithin"
              ));
          }
        }
        DEV_SetDebugPropsOnElement() {}
        OnUnmount() {
          var e;
          (null === (e = this.m_Properties) || void 0 === e
            ? void 0
            : e.retainFocus) &&
            this.PropagateRetainFocusParentToChildren(this.m_RetainFocusParent),
            (this.m_bMounted = !1),
            this.m_bFocused &&
              (L(
                `The focused node is unmounting, ${
                  this.m_RetainFocusParent
                    ? "will transfer to retain focus ancestor"
                    : "will blur"
                }.`
              ),
              this.m_RetainFocusParent
                ? this.m_RetainFocusParent.OnFocusedDecendantRemoved(this)
                : this.m_Tree.TransferFocus(u.c.APPLICATION, null)),
            this.UnregisterDOMEvents(),
            this.m_Parent
              ? this.m_Parent.RemoveChild(this)
              : Object(s.a)(
                  this == this.m_Tree.Root,
                  "Only root should have no parent"
                );
        }
        RegisterDOMEvents() {
          !this.m_rgNavigationHandlers.length &&
            (this.m_rgChildren.length >= 2 ||
              this.m_Properties.layout != N.NONE ||
              this.m_Properties.onMoveUp ||
              this.m_Properties.onMoveRight ||
              this.m_Properties.onMoveDown ||
              this.m_Properties.onMoveLeft) &&
            this.m_rgNavigationHandlers.push(
              Object(u.i)(this.m_element, this.OnNavigationEvent)
            ),
            (this.m_Properties.focusable || 0 == this.m_rgChildren.length) &&
              (this.m_rgFocusHandlers.length ||
                (this.m_element.addEventListener("focus", this.OnDOMFocus),
                this.m_element.addEventListener("blur", this.OnDOMBlur),
                this.m_rgFocusHandlers.push(() => {
                  this.m_element.removeEventListener("focus", this.OnDOMFocus),
                    this.m_element.removeEventListener("blur", this.OnDOMBlur);
                })));
        }
        RemoveChild(e) {
          let t = this.m_rgChildren.indexOf(e);
          Object(s.a)(-1 !== t, "Child was not found to remove"),
            -1 !== t &&
              (t <= this.m_iActiveChild && this.m_iActiveChild--,
              this.m_rgChildren.splice(t, 1));
        }
        UnregisterDOMEvents() {
          this.m_rgNavigationHandlers.forEach((e) => e()),
            (this.m_rgNavigationHandlers = []),
            this.m_rgFocusHandlers.forEach((e) => e()),
            (this.m_rgFocusHandlers = []);
        }
        GetActiveDescendant() {
          const e = this.GetActiveChild();
          return e ? e.GetActiveDescendant() : this;
        }
        GetActiveChild() {
          return (
            this.EnsureChildrenSorted(),
            this.m_iActiveChild >= 0 &&
            this.m_iActiveChild < this.m_rgChildren.length
              ? this.m_rgChildren[this.m_iActiveChild]
              : null
          );
        }
        EnsureChildrenSorted(e = !1) {
          if (!this.m_bChildrenSorted || e) {
            let e;
            -1 != this.m_iActiveChild &&
              (e = this.m_rgChildren[this.m_iActiveChild]),
              this.m_rgChildren.sort((e, t) => {
                const n = e.m_element,
                  r = t.m_element;
                if (!n) return r ? 1 : 0;
                if (!r) return -1;
                const i = n.compareDocumentPosition(r);
                return i & Node.DOCUMENT_POSITION_PRECEDING
                  ? 1
                  : i & Node.DOCUMENT_POSITION_FOLLOWING
                  ? -1
                  : 0;
              }),
              e && (this.m_iActiveChild = this.m_rgChildren.indexOf(e)),
              (this.m_bChildrenSorted = !0);
          }
        }
        GetLastFocusElement() {
          const e = this.GetActiveChild();
          return e ? e.GetLastFocusElement() : this.m_element;
        }
        OnDOMFocus(e) {
          this.m_bFocused || this.m_Tree.TransferFocus(u.c.BROWSER, this);
        }
        OnDOMBlur(e) {
          this.m_bFocused && this.m_Tree.TransferFocus(u.c.BROWSER, null);
        }
        UpdateParentActiveChild() {
          this.m_Parent &&
            (this.m_Parent.SetActiveChild(this),
            this.m_Parent.UpdateParentActiveChild());
        }
        GetFocusable() {
          const {
            focusable: e,
            focusableIfNoChildren: t,
            childFocusDisabled: n,
            fnCanTakeFocus: r,
          } = this.m_Properties;
          return this.m_bMounted
            ? r && !r(this)
              ? "none"
              : e || (t && (n || 0 == this.m_rgChildren.length))
              ? "self"
              : !n && this.m_rgChildren.length
              ? "children"
              : "none"
            : "none";
        }
        BTakeFocus(e, t) {
          const n = this.FindFocusableNode(t);
          return this.InternalFocusDescendant(n, e, t);
        }
        FindFocusableNode(e, t) {
          switch (this.GetFocusable()) {
            case "none":
              return null;
            case "self":
              return this;
            case "children":
              return this.FindFocusableDescendant(e, t);
          }
        }
        BChildTakeFocus(e, t) {
          const n = this.FindFocusableDescendant(t);
          return this.InternalFocusDescendant(n, e, t);
        }
        BFocusFirstChild(e) {
          const t = this.FindNextFocusableChildInDirection(
            -1,
            A.FORWARD,
            i.a.INVALID
          );
          return this.InternalFocusDescendant(t, e);
        }
        BFocusLastChild(e) {
          const t = this.FindNextFocusableChildInDirection(
            this.m_rgChildren.length,
            A.BACKWARD,
            i.a.INVALID
          );
          return this.InternalFocusDescendant(t, e);
        }
        FindFocusableDescendant(e, t) {
          const n = Object(d.a)(e),
            {
              focusableIfNoChildren: r,
              childFocusDisabled: i,
            } = this.m_Properties;
          if (i) return null;
          if (this.m_rgChildren.length) {
            this.EnsureChildrenSorted();
            const {
              navEntryPreferPosition: i,
              resetNavOnEntry: s,
            } = this.m_Properties;
            let a,
              c = this.m_iActiveChild;
            if (
              (s && void 0 !== e && (c = -1),
              c < 0 || c >= this.m_rgChildren.length)
            ) {
              c = 0;
              const e = this.GetLayout();
              (e != N.ROW_REVERSE && e != N.COLUMN_REVERSE && i != j.LAST) ||
                (c = this.m_rgChildren.length - 1);
            }
            if ((i == j.MAINTAIN_X || i == j.MAINTAIN_Y || t) && n) {
              let r, s;
              i == j.MAINTAIN_X ? (r = "x") : i == j.MAINTAIN_Y && (r = "y"),
                r == o.a[n] &&
                  (s = this.m_Tree.GetLastFocusedMovementRect(o.a[n])),
                L(
                  `Taking focus while preserving ${j[i]} preserved: ${r} movement: ${n}, node:`,
                  s || t
                );
              const c = this.ComputeRelativeDirection(e, N.GRID);
              if (s || t) {
                const i = c == A.BACKWARD ? this.m_rgChildren.length - 1 : 0;
                a = this.FindClosestChildInNextAxiallyAlignedSet(
                  r || o.a[n],
                  c,
                  e,
                  s || t,
                  i,
                  this.m_rgChildren[i].GetBoundingRect()
                );
              } else if (r != o.a[n]) {
                const t = c == A.BACKWARD ? this.m_rgChildren.length : -1;
                a = this.FindNextFocusableChildInDirection(t, c, e);
              }
            } else if (i == j.PREFERRED_CHILD) {
              for (const t of this.m_rgChildren)
                if (
                  ((a = t.BWantsPreferredFocus() && t.FindFocusableNode(e)), a)
                )
                  return a;
            } else
              i == j.LAST &&
                (a = this.FindNextFocusableChildInDirection(
                  c + 1,
                  A.BACKWARD,
                  e
                ));
            return (
              a ||
                (a = this.FindNextFocusableChildInDirection(
                  c - 1,
                  A.FORWARD,
                  e
                )),
              a ||
                (a = this.FindNextFocusableChildInDirection(c, A.BACKWARD, e)),
              a || (r ? this : null)
            );
          }
          return null;
        }
        BVisibleChildTakeFocus(e) {
          var t;
          const n = h(
            this,
            this.Element
              ? this.Element.getBoundingClientRect()
              : document.body.getBoundingClientRect()
          );
          return (
            L(
              `Focusing visible child, best child match is ${
                null === (t = null == n ? void 0 : n.child) || void 0 === t
                  ? void 0
                  : t.Element.className
              } - ${JSON.stringify(null == n ? void 0 : n.visibility)}`
            ),
            !!n && n.child.BTakeFocus(e)
          );
        }
        GetLayout() {
          if (this.m_Properties.layout) return this.m_Properties.layout;
          if (this.m_rgChildren.length < 2) return N.NONE;
          return Object(d.f)(this.m_element);
        }
        OnNavigationEvent(e) {
          const t = e.detail.button;
          if (this.BTryInternalNavigation(t, e.detail.is_repeat)) return !0;
          const {
            onMoveUp: n,
            onMoveRight: r,
            onMoveDown: o,
            onMoveLeft: s,
          } = this.m_Properties;
          let a = !1;
          switch (t) {
            case i.a.DIR_UP:
              n && (a = n(e.detail, this));
              break;
            case i.a.DIR_RIGHT:
              r && (a = r(e.detail, this));
              break;
            case i.a.DIR_DOWN:
              o && (a = o(e.detail, this));
              break;
            case i.a.DIR_LEFT:
              s && (a = s(e.detail, this));
          }
          return a;
        }
        InternalFocusDescendant(e, t, n) {
          return !!e && (this.m_Tree.TransferFocus(t, e, Object(d.a)(n)), !0);
        }
        BTryInternalNavigation(e, t) {
          const n = this.GetLayout();
          let r,
            o = this.ComputeRelativeDirection(e, n);
          if (
            (L(
              `Handling navigation event ${i.a[e]} - ${N[n]} - ${A[o]}`,
              this.m_element
            ),
            o == A.INVALID)
          )
            return !1;
          if (this.m_Properties.focusable && this.m_bFocused)
            return L("Skipping navigation within focused element"), !1;
          if ((this.EnsureChildrenSorted(!0), n == N.GRID))
            r = this.FindNextFocusableChildInGrid(this.m_iActiveChild, o, e);
          else {
            let t = this.m_iActiveChild;
            -1 == t && (t = o == A.FORWARD ? -1 : this.m_rgChildren.length),
              (r = this.FindNextFocusableChildInDirection(t, o, e));
          }
          if (r) {
            const n = Object(d.a)(e);
            if (this.GetScrollIntoViewType() == F.NoTransformSparseContent) {
              const e =
                  ("y" == n ? window.innerHeight : window.innerWidth) /
                  (t ? 4.5 : 3.33),
                i = C(r.Element);
              if (
                (i.top > window.innerHeight &&
                  i.bottom > window.innerHeight + e) ||
                (i.bottom < 0 && i.top < -e) ||
                (i.left > window.innerWidth &&
                  i.right > window.innerWidth + e) ||
                (i.right < 0 && i.left < -e)
              )
                return (
                  L(`Element too far away, scrolling ${e} on ${n} axis `),
                  R(r.Element, r.Element, "smooth", n, e),
                  !0
                );
            }
            return this.m_Tree.TransferFocus(u.c.GAMEPAD, r, n), !0;
          }
          return !1;
        }
        GetScrollIntoViewType() {
          var e;
          return (
            null === (e = this.m_Properties) || void 0 === e
              ? void 0
              : e.scrollIntoViewType
          )
            ? this.m_Properties.scrollIntoViewType
            : this.m_Parent
            ? this.m_Parent.GetScrollIntoViewType()
            : F.Standard;
        }
        GetRelativeDirection(e) {
          return this.ComputeRelativeDirection(e, this.GetLayout());
        }
        ComputeRelativeDirection(e, t) {
          let n = t == N.ROW_REVERSE || t == N.COLUMN_REVERSE;
          switch (t) {
            case N.ROW:
            case N.ROW_REVERSE:
              switch (e) {
                case i.a.DIR_LEFT:
                  return n ? A.FORWARD : A.BACKWARD;
                case i.a.DIR_RIGHT:
                  return n ? A.BACKWARD : A.FORWARD;
                default:
                  return A.INVALID;
              }
            case N.COLUMN:
            case N.COLUMN_REVERSE:
              switch (e) {
                case i.a.DIR_UP:
                  return n ? A.FORWARD : A.BACKWARD;
                case i.a.DIR_DOWN:
                  return n ? A.BACKWARD : A.FORWARD;
                default:
                  return A.INVALID;
              }
            case N.GRID:
              switch (e) {
                case i.a.DIR_LEFT:
                case i.a.DIR_UP:
                  return n ? A.FORWARD : A.BACKWARD;
                case i.a.DIR_RIGHT:
                case i.a.DIR_DOWN:
                  return n ? A.BACKWARD : A.FORWARD;
                default:
                  return A.INVALID;
              }
            default:
              return A.INVALID;
          }
        }
        AdvanceIndex(e, t) {
          return e + (t == A.FORWARD ? 1 : -1);
        }
        FindNextFocusableChildInDirection(e, t, n) {
          let r = t == A.FORWARD ? 1 : -1;
          for (let t = e + r; t >= 0 && t < this.m_rgChildren.length; t += r) {
            const e = this.m_rgChildren[t].FindFocusableNode(n);
            if (e) return e;
          }
          return null;
        }
        ScanChildren(e, t, n) {
          let r = t == A.FORWARD ? 1 : -1;
          for (let t = e; t >= 0 && t < this.m_rgChildren.length; t += r)
            if (n(this.m_rgChildren[t], t)) return t;
          return -1;
        }
        FindNextFocusableChildInGrid(e, t, n) {
          const r = n == i.a.DIR_UP || n == i.a.DIR_DOWN,
            o = this.GetLastFocusElement();
          if (!o || o == this.m_element)
            return (
              Object(s.a)(
                !1,
                "No active child for grid navigation",
                this.m_iActiveChild,
                this.m_rgChildren.length,
                o
              ),
              this.FindFocusableDescendant(n)
            );
          const a = this.GetActiveDescendant().GetBoundingRect();
          if (n == i.a.DIR_UP || n == i.a.DIR_DOWN) {
            const e = this.m_Tree.GetLastFocusedMovementRect("x");
            e && ((a.x = e.x), (a.width = e.width));
          }
          if (r) {
            let r = e;
            for (; -1 != r; ) {
              const e = this.ScanChildren(
                this.AdvanceIndex(r, t),
                t,
                (e) => !Object(d.b)("y", a, e.GetBoundingRect())
              );
              if (-1 != e) {
                const r = this.m_rgChildren[e].GetBoundingRect(),
                  i = this.FindClosestChildInNextAxiallyAlignedSet(
                    "x",
                    t,
                    n,
                    a,
                    e,
                    r
                  );
                if (i) return i;
              }
              r = e;
            }
          } else {
            let r = t == A.FORWARD ? 1 : -1;
            for (
              let i = this.AdvanceIndex(e, t);
              i >= 0 && i < this.m_rgChildren.length;
              i += r
            ) {
              const e = this.m_rgChildren[i];
              if (!Object(d.b)("y", a, e.GetBoundingRect())) return null;
              let t = e.FindFocusableNode(n);
              if (t) return t;
            }
          }
          return null;
        }
        FindClosestChildInNextAxiallyAlignedSet(e, t, n, r, i, s) {
          (!i || i < 0) && (i = 0);
          let a = [];
          const c = Object(d.g)(r);
          this.ScanChildren(i, t, (t) => {
            const n = t.GetBoundingRect();
            return (
              !(!s || Object(d.b)(o.a[e], s, n)) ||
              (a.push({
                child: t,
                overlap: Object(d.i)(e, r, n),
                dist: Object(d.d)(e, c, n),
              }),
              !1)
            );
          }),
            t == A.BACKWARD && a.reverse(),
            a.sort((e, t) => {
              const n = t.overlap - e.overlap;
              return 0 != n ? n : e.dist - t.dist;
            });
          for (const { child: e } of a) {
            const t = e.FindFocusableNode(n, r);
            if (t) return t;
          }
          return null;
        }
        GetChildren() {
          return (
            this.EnsureChildrenSorted(),
            [this.m_rgChildren, this.m_iActiveChild]
          );
        }
        SetActiveChild(e) {
          let t;
          e instanceof P
            ? (this.EnsureChildrenSorted(), (t = this.m_rgChildren.indexOf(e)))
            : (t = e),
            (this.m_iActiveChild = t);
        }
        GetDepth() {
          return this.m_nDepth;
        }
        SetRetainFocusParent(e) {
          (this.m_RetainFocusParent = e),
            this.m_Properties.retainFocus ||
              this.PropagateRetainFocusParentToChildren(e);
        }
        PropagateRetainFocusParentToChildren(e) {
          for (let t = 0; t < this.m_rgChildren.length; t++)
            this.m_rgChildren[t].SetRetainFocusParent(e);
        }
        OnFocusedDecendantRemoved(e) {
          this.BChildTakeFocus(u.c.APPLICATION) ||
            this.m_Tree.TransferFocus(u.c.APPLICATION, this);
        }
        SetDOMFocusAndScroll(e, t) {
          this.UpdateParentActiveChild(),
            this.m_Tree.BIsActiveFocus()
              ? (Object(s.a)(
                  !this.m_Tree.BUseVirtualFocus(),
                  "Virtual focus tree should not have browser focus"
                ),
                this.m_element.focus({ preventScroll: !0 }))
              : this.m_Tree.BUseVirtualFocus() ||
                L(
                  `Didn't move focus to element as tree ${this.m_Tree.id} is not active focus tree`
                ),
            (function (e, t) {
              var n, r, i, o;
              const s = e.Element;
              let a = e,
                c =
                  null === (n = e.m_Properties) || void 0 === n
                    ? void 0
                    : n.scrollIntoViewType;
              for (let t = e.Parent; t; t = t.Parent)
                (null === (r = t.m_Properties) || void 0 === r
                  ? void 0
                  : r.scrollIntoViewWhenChildFocused) && (a = t),
                  void 0 === c &&
                    (c =
                      null === (i = t.m_Properties) || void 0 === i
                        ? void 0
                        : i.scrollIntoViewType);
              if ((void 0 === c && (c = w ? F.NoTransform : F.Standard), !s))
                return;
              if (
                (null === (o = a.m_Properties) || void 0 === o
                  ? void 0
                  : o.fnScrollIntoViewHandler) &&
                !1 !== a.m_Properties.fnScrollIntoViewHandler(e, t, a)
              )
                return;
              const l = a.m_element,
                u = c == F.NoTransform || c == F.NoTransformSparseContent;
              if (t) {
                const t = u ? C(l) : l.getBoundingClientRect();
                let n = !1;
                const r = Math.max(1.4 * (t.bottom - t.top), 40);
                ((y && performance.now() - y < 500) ||
                  t.bottom < -r ||
                  t.top > window.innerHeight + r) &&
                  (n = !0);
                let i = n ? "auto" : "smooth";
                n && (y = performance.now()),
                  e.Tree.Controller.BIsRestoringHistory() && (i = "auto"),
                  u
                    ? R(0, l, i)
                    : l.scrollIntoView({ behavior: i, block: "nearest" });
              } else
                u
                  ? R(0, l, "auto")
                  : l.scrollIntoView({
                      behavior: "auto",
                      block: "nearest",
                      inline: "nearest",
                    });
            })(this, t),
            this.m_Tree.OnChildActivated(e);
        }
      }
      Object(r.b)([a.a], P.prototype, "OnDOMFocus", null),
        Object(r.b)([a.a], P.prototype, "OnDOMBlur", null),
        Object(r.b)([a.a], P.prototype, "OnNavigationEvent", null);
    },
    kKgT: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      });
      var r = n("rHSA"),
        i = (n("9cYf"), n("qiKp")),
        o = n("bDQf"),
        s = n("BaVA"),
        a = (n("ZFdz"), n("NxAk"), n("j+5p"));
      const c = new o.a("FocusNavigation").Debug,
        l = new o.a("GamepadEvents").Debug;
      class u {
        constructor(e, t) {
          (this.m_onActivateCallbacks = new i.a()),
            (this.m_onDeactivateCallbacks = new i.a()),
            (this.m_lastFocusNodeXMovement = new d()),
            (this.m_lastFocusNodeYMovement = new d()),
            (this.m_Controller = e),
            (this.m_ID = t),
            (this.m_Root = new a.a(this, null, null)),
            this.m_Root.SetProperties({ layout: a.c.COLUMN }),
            (window.GamepadNavTree = this);
        }
        SetUseVirtualFocus(e) {
          this.m_bVirtualFocus = e;
        }
        get id() {
          return this.m_ID;
        }
        get Root() {
          return this.m_Root;
        }
        get Controller() {
          return this.m_Controller;
        }
        BUseVirtualFocus() {
          return this.m_bVirtualFocus;
        }
        CreateNode(e, t) {
          return new a.a(this, e, t);
        }
        RegisterNavigationItem(e, t) {
          return e.OnMount(t), () => e.OnUnmount();
        }
        OnChildActivated(e) {
          this.m_bIsMounted &&
            this.m_Controller.OnGamepadNavigationTreeFocused(this, e);
        }
        GetLastFocusedNode() {
          return this.m_lastFocusNode;
        }
        GetLastFocusedMovementRect(e) {
          return "x" == e
            ? this.m_lastFocusNodeXMovement.GetRect()
            : "y" == e
            ? this.m_lastFocusNodeYMovement.GetRect()
            : void 0;
        }
        get OnActivateCallbacks() {
          return this.m_onActivateCallbacks;
        }
        get OnDeactivateCallbacks() {
          return this.m_onDeactivateCallbacks;
        }
        OnActivate(e = !0) {
          e && this.TakeFocus(s.c.APPLICATION);
        }
        IsActiveFocusNavTree() {
          return this.m_Controller.IsActiveFocusNavTree(this);
        }
        TakeFocus(e, t = !1) {
          let n = !1;
          t
            ? (n = this.Root.BVisibleChildTakeFocus(e))
            : this.m_lastFocusNode && (n = this.m_lastFocusNode.BTakeFocus(e)),
            n || (n = this.Root.BTakeFocus(e)),
            n || this.TransferFocus(e, this.Root);
        }
        Activate(e = !1) {
          this.m_Controller.OnGamepadNavigationTreeActivated(this, e);
        }
        Deactivate() {
          this.m_Controller.BlurNavTree(this);
        }
        BIsActive() {
          return this.m_Controller.IsActiveNavTree(this);
        }
        BIsActiveFocus() {
          return this.m_Controller.IsActiveFocusNavTree(this);
        }
        SetIsMounted() {
          const e = this.m_Root.Element;
          (e.__nav_tree = this),
            e.__nav_wrapper && e.__nav_wrapper.BindTree(this),
            (this.m_bIsMounted = !0);
        }
        SetParentEmbeddedNavTree(e) {
          this.m_ParentEmbeddedNavTree = e;
        }
        GetParentEmbeddedNavTree() {
          return this.m_ParentEmbeddedNavTree;
        }
        SetOnUnhandledButtonCallback(e) {
          this.m_onUnhandledButton = e;
        }
        HandleButtonDownEventAsLogicalEvent(e) {
          let { bUnhandled: t, bHadLogicalEventMapping: n } = Object(s.d)(e);
          return (
            l(
              `Logical gamepad Event fired: ${
                r.a[e.detail.button]
              }, had logical event: ${n}, was handled: ${!t}`
            ),
            t && this.m_onUnhandledButton && (t = this.m_onUnhandledButton(e)),
            t && (t = this.m_Controller.FireUnhandledGamepadEventCallbacks(e)),
            e.stopPropagation(),
            t
          );
        }
        TransferFocus(e, t, n) {
          this.m_Controller.BatchedUpdate(() =>
            this.TransferFocusInternal(e, t, n)
          );
        }
        TransferFocusInternal(e, t, n) {
          const r = this.m_lastFocusNode;
          if (
            r == t &&
            (this.m_bWasActiveForLastFocusChange || !this.BIsActive())
          )
            return;
          c(
            `Transfer focus in ${this.id}, source: ${s.c[e]}, from/to:`,
            null == r ? void 0 : r.m_element,
            null == t ? void 0 : t.m_element
          );
          const i = { blurredNode: r, focusedNode: t, source: e },
            o = (function (e, t) {
              if (!t || !e) return null;
              let n = t,
                r = e;
              for (; n.GetDepth() > r.GetDepth() && n.Parent; ) n = n.Parent;
              for (; r.GetDepth() > n.GetDepth() && r.Parent; ) r = r.Parent;
              for (; n != r && n && r; ) (n = n.Parent), (r = r.Parent);
              return n;
            })(r, t);
          if (r) {
            r.SetHasFocus(!1);
            for (let e = r; e && e != o; e = e.Parent) e.SetFocusWithin(!1);
          }
          if (t) {
            t.SetHasFocus(!0);
            for (let e = t; e && e != o; e = e.Parent) e.SetFocusWithin(!0);
          }
          let a = this.m_Controller.OnFocusChangeStart(e, this, r, t);
          t && t.SetDOMFocusAndScroll(e, r),
            r &&
              (Object(s.b)(r.Element, "vgp_onblur", i),
              !r.m_FocusRing ||
                (t && r.m_FocusRing == t.m_FocusRing) ||
                r.m_FocusRing.OnBlur(e, r, t)),
            t &&
              (Object(s.b)(t.Element, "vgp_onfocus", i),
              t.m_FocusRing &&
                (r && t.m_FocusRing == r.m_FocusRing
                  ? t.m_FocusRing.OnFocusChange(e, r, t)
                  : t.m_FocusRing.OnFocus(e, t, r))),
            (this.m_lastFocusNode = t),
            (this.m_bWasActiveForLastFocusChange = this.BIsActive()),
            "x" == n
              ? this.m_lastFocusNodeXMovement.SetNode(t.Element)
              : "y" == n
              ? this.m_lastFocusNodeYMovement.SetNode(t.Element)
              : (this.m_lastFocusNodeXMovement.Reset(),
                this.m_lastFocusNodeYMovement.Reset()),
            this.m_Controller.OnFocusChangeComplete(a);
        }
      }
      class d {
        SetNode(e) {
          (this.m_element = e),
            (this.m_rect = e ? e.getBoundingClientRect() : void 0);
        }
        Reset() {
          this.SetNode(void 0);
        }
        GetRect() {
          var e;
          return (
            null === (e = this.m_element) || void 0 === e
              ? void 0
              : e.isConnected
          )
            ? this.m_element.getBoundingClientRect()
            : this.m_rect;
        }
      }
    },
    kLLr: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var r = n("2lpH"),
        i = n.n(r),
        o = n("mgoM"),
        s = n("lkRc");
      n("r64O");
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
          return new a(Number(e), s.c.EUNIVERSE, 1, o.f);
        }
        static InitFromClanID(e) {
          return new a(Number(e), s.c.EUNIVERSE, 7, 0);
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
        }
        BIsValid() {
          let e = this.GetAccountType();
          if (e <= 0 || e >= 11) return !1;
          let t = this.GetUniverse();
          if (t <= 0 || t >= 5) return !1;
          if (1 == e) {
            if (0 == this.GetAccountID() || this.GetInstance() > o.g) return !1;
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
    ka0M: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c.i;
      }),
        n.d(t, "b", function () {
          return g;
        }),
        n.d(t, "d", function () {
          return f;
        }),
        n.d(t, "c", function () {
          return b;
        });
      var r = n("mrSG"),
        i = n("q1tI"),
        o = n("i8i4"),
        s = n("JMS6"),
        a = n("y+6m"),
        c = n("Jqb/"),
        l = n("6Y59"),
        u = n("opsS");
      class d extends i.Component {
        constructor(e) {
          super(e), (this.state = { maximized: this.BIsMaximized() });
        }
        BIsMaximized() {
          let e =
              this.props.popup.screen.availWidth - this.props.popup.innerWidth,
            t =
              this.props.popup.screen.availHeight -
              this.props.popup.innerHeight;
          return 0 === e && 0 === t;
        }
        componentDidMount() {
          this.props.popup.addEventListener("resize", this.UpdateMaximizeState);
        }
        componentWillUnmount() {
          this.props.popup.removeEventListener(
            "resize",
            this.UpdateMaximizeState
          );
        }
        UpdateMaximizeState() {
          let e = this.BIsMaximized();
          e != this.state.maximized && this.setState({ maximized: e });
        }
        render() {
          let e = this.props.popup,
            t = "title-area-icon";
          this.state.maximized
            ? (t += " restoreButton")
            : (t += " maximizeButton");
          let n = "TitleBar title-area";
          return (
            this.props.className && (n = n + " " + this.props.className),
            i.createElement(
              "div",
              { className: n, style: this.props.style },
              i.createElement("div", { className: "title-area-highlight" }),
              i.createElement(
                "div",
                { className: "title-area-children" },
                this.props.children
              ),
              !this.props.hideActions &&
                i.createElement(
                  "div",
                  { className: "title-bar-actions" },
                  i.createElement(
                    "div",
                    {
                      className: "title-area-icon closeButton",
                      onClick: () => {
                        e && e.close();
                      },
                    },
                    i.createElement(l.Ab, null)
                  ),
                  !this.props.hideMinMax &&
                    i.createElement(
                      "div",
                      {
                        className: t,
                        onClick: () => {
                          e.SteamClient.Window.ToggleMaximize();
                        },
                      },
                      this.state.maximized && i.createElement(l.Y, null),
                      !this.state.maximized && i.createElement(l.M, null)
                    ),
                  !this.props.hideMinMax &&
                    i.createElement(
                      "div",
                      {
                        className: "title-area-icon minimizeButton",
                        onClick: () => {
                          e.SteamClient.Window.Minimize();
                        },
                      },
                      i.createElement(l.P, null)
                    )
                )
            )
          );
        }
      }
      Object(r.b)([u.a], d.prototype, "UpdateMaximizeState", null);
      var m = n("r64O"),
        h = n("TLQK"),
        p = n("lkRc");
      function g(e, t, n) {
        return Object(r.a)(this, void 0, void 0, function* () {
          const i = !0 === (null == n ? void 0 : n.bNeverPopOut),
            s = !i && _(null, t),
            a =
              (null == n ? void 0 : n.bForcePopOut) &&
              (null == n ? void 0 : n.popupWidth) &&
              (null == n ? void 0 : n.popupHeight),
            c =
              s &&
              !a &&
              (yield (function (e, t, n) {
                return Object(r.a)(this, void 0, void 0, function* () {
                  const r = t.document.createElement("div");
                  (r.style.position = "absolute"),
                    (r.style.visibility = "hidden"),
                    t.document.body.appendChild(r),
                    o.render(e, r),
                    yield n;
                  let i = document;
                  p.c.IN_LIBRARY && i.fonts && (yield i.fonts.ready);
                  const s = r.getBoundingClientRect(),
                    a = Math.ceil(s.height),
                    c = Math.ceil(s.width);
                  return (
                    o.unmountComponentAtNode(r),
                    t.document.body.removeChild(r),
                    { height: a, width: c }
                  );
                });
              })(e, t, null == n ? void 0 : n.promiseRenderComplete)),
            l =
              c &&
              c.height / t.innerHeight < 0.9 &&
              c.width / t.innerWidth < 0.8;
          if (i || (!(null == n ? void 0 : n.bForcePopOut) && l))
            return b(e, t);
          const u = {
              strTitle:
                (null == n ? void 0 : n.strTitle) ||
                Object(h.f)("#Dialog_DefaultWindowTitle"),
              fnOnClose: null == n ? void 0 : n.fnOnClose,
              popupWidth:
                (null == n ? void 0 : n.popupWidth) ||
                (null == c ? void 0 : c.width),
              popupHeight:
                (null == n ? void 0 : n.popupHeight) ||
                (null == c ? void 0 : c.height),
              bHideMainWindowForPopouts:
                null == n ? void 0 : n.bHideMainWindowForPopouts,
            },
            d = { bHideActions: null == n ? void 0 : n.bHideActionIcons };
          return b(
            e,
            t,
            u.strTitle,
            u,
            null == n ? void 0 : n.browserContext,
            d
          );
        });
      }
      function f(e, t, n) {
        return Object(r.a)(this, void 0, void 0, function* () {
          return g(
            e,
            t,
            Object.assign(Object.assign({}, n), {
              bHideMainWindowForPopouts: !0,
            })
          );
        });
      }
      function b(e, t, n, r, o, s, a) {
        let l, u;
        const d = e.props.closeModal,
          m = () => {
            u && u.Close(),
              d && d(),
              (null == r ? void 0 : r.fnOnClose) && r.fnOnClose();
          },
          h = () => {
            l && l.Close(), m();
          },
          p = i.cloneElement(e, { closeModal: h });
        if (_((a = a || Object(c.h)(t)), t) && r && n) {
          if (r.bHideMainWindowForPopouts) {
            const e = i.createElement(
              c.i,
              {
                className: "Hidden",
                onEscKeypress: !p.props.bDisableBackgroundDismiss && h,
              },
              i.createElement("div", null)
            );
            u = a.ShowModal(e);
          }
          const e = Object.assign(Object.assign({}, r), { fnOnClose: m }),
            d = new v(t, n, e, p, o, s);
          d.Show(), (l = d);
        } else l = a.ShowModal(p);
        return l;
      }
      function _(e, t) {
        return (
          (e = e || Object(c.h)(t || window)), p.c.USE_POPUPS && e.BUsePopups()
        );
      }
      class v extends s.a {
        constructor(e, t, n, r, i, o) {
          super(t, {
            title: n.strTitle,
            html_class: "client_chat_frame fullheight ModalDialogPopup",
            body_class: "fullheight ModalDialogBody",
            owner_window: void 0,
            replace_existing_popup: !0,
            target_browser: i,
            availscreenwidth: e.screen.availWidth,
            availscreenheight: e.screen.availHeight,
          }),
            (this.m_windowOpener = e),
            (this.m_modalProps = n),
            (this.m_modalElement = r),
            (this.m_options = o);
        }
        Update(e) {
          Object(m.a)(!1, "NYI");
        }
        UpdateParamsBeforeShow(e) {
          var t, n, r;
          let i,
            o,
            s,
            a = this.m_modalProps.popupWidth || 500,
            c = this.m_modalProps.popupHeight || 400;
          if (
            p.c.IN_CLIENT &&
            (null ===
              (r =
                null ===
                  (n =
                    null === (t = this.m_windowOpener) || void 0 === t
                      ? void 0
                      : t.SteamClient) || void 0 === n
                  ? void 0
                  : n.Window) || void 0 === r
              ? void 0
              : r.GetBrowserID)
          )
            s = this.m_windowOpener.SteamClient.Window.GetBrowserID();
          else {
            let e = this.m_windowOpener.screen;
            (i = (e.availWidth - a) / 2), (o = (e.availHeight - c) / 2);
            let t = e;
            void 0 !== t.availLeft &&
              void 0 !== t.availTop &&
              ((i += t.availLeft), (o += t.availTop));
          }
          return Object.assign(Object.assign({}, e), {
            dimensions: { width: a, height: c, left: i, top: o },
            window_opener_id: s,
          });
        }
        OnLoad() {}
        OnResize() {}
        OnClose() {
          this.m_modalProps.fnOnClose && this.m_modalProps.fnOnClose();
        }
        Render(e, t) {
          if (
            (t.setAttribute("class", "fullheight popup_chat_frame"),
            this.m_modalElement)
          ) {
            const n = this.m_options ? this.m_options.bHideActions : void 0,
              r =
                this.m_options &&
                "number" == typeof this.m_options.nDragAreaHeight
                  ? { height: this.m_options.nDragAreaHeight }
                  : void 0;
            o.render(
              i.createElement(
                "div",
                { className: "PopupFullWindow", onContextMenu: a.g },
                i.createElement(d, {
                  hideMinMax: !0,
                  popup: e,
                  hideActions: n,
                  style: r,
                }),
                i.createElement(c.c, { ModalManager: Object(c.h)(e) }),
                this.m_modalElement
              ),
              t
            );
          }
        }
      }
    },
    kyHq: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return a;
      }),
        n.d(t, "l", function () {
          return p;
        }),
        n.d(t, "a", function () {
          return g;
        }),
        n.d(t, "c", function () {
          return f;
        }),
        n.d(t, "g", function () {
          return h;
        }),
        n.d(t, "b", function () {
          return b;
        }),
        n.d(t, "i", function () {
          return y;
        }),
        n.d(t, "h", function () {
          return E;
        });
      var r = n("mgoM");
      n.d(t, "e", function () {
        return r.a;
      }),
        n.d(t, "f", function () {
          return r.b;
        }),
        n.d(t, "j", function () {
          return r.c;
        }),
        n.d(t, "k", function () {
          return r.d;
        });
      var i;
      n("FVDh"), n("2lL1"), n("li7h"), n("sRB7");
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
      })(i || (i = {}));
      var o, s, a, c, l, u, d, m, h;
      !(function (e) {
        (e[(e.Input = 0)] = "Input"), (e[(e.Output = 1)] = "Output");
      })(o || (o = {})),
        (function (e) {
          (e[(e.Input = 0)] = "Input"),
            (e[(e.AllOutput = 1)] = "AllOutput"),
            (e[(e.Left = 2)] = "Left"),
            (e[(e.Right = 3)] = "Right"),
            (e[(e.Sub = 4)] = "Sub"),
            (e[(e.BackLeft = 5)] = "BackLeft"),
            (e[(e.BackRight = 6)] = "BackRight");
        })(s || (s = {}));
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
      !(function (e) {
        (e[(e.k_EClientUINotificationGroupChatMessage = 1)] =
          "k_EClientUINotificationGroupChatMessage"),
          (e[(e.k_EClientUINotificationFriendChatMessage = 2)] =
            "k_EClientUINotificationFriendChatMessage"),
          (e[(e.k_EClientUINotificationFriendPersonaState = 3)] =
            "k_EClientUINotificationFriendPersonaState");
      })(c || (c = {})),
        (function (e) {
          (e[(e.k_EComputerActiveStateInvalid = 0)] =
            "k_EComputerActiveStateInvalid"),
            (e[(e.k_EComputerActiveStateActive = 1)] =
              "k_EComputerActiveStateActive"),
            (e[(e.k_EComputerActiveStateIdle = 2)] =
              "k_EComputerActiveStateIdle");
        })(l || (l = {}));
      class p {}
      !(function (e) {
        (e[(e.k_EPending = 0)] = "k_EPending"),
          (e[(e.k_EAccepted = 1)] = "k_EAccepted"),
          (e[(e.k_ERejected = 2)] = "k_ERejected");
      })(u || (u = {}));
      function g(e) {
        switch (e) {
          case 0:
            return "game";
          case 6:
            return "software";
          case 1:
            return "demo";
          case 4:
            return "dlc";
          case 7:
          case 3:
            return "video";
          case 11:
            return "music";
          case 12:
            return "beta";
          case 2:
            return "mod";
        }
        return "invalid";
      }
      function f(e) {
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
        })(m || (m = {}));
      function b(e) {
        return e === h.k_ESteamRealmChina;
      }
      !(function (e) {
        (e[(e.k_ESteamRealmUnknown = 0)] = "k_ESteamRealmUnknown"),
          (e[(e.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
          (e[(e.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina");
      })(h || (h = {}));
      var _;
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
      })(_ || (_ = {}));
      var v, w, y, C, S, E, O;
      !(function (e) {
        (e[(e.Unknown = 0)] = "Unknown"),
          (e[(e.Wired = 1)] = "Wired"),
          (e[(e.Wireless = 2)] = "Wireless"),
          (e[(e.Virtual = 3)] = "Virtual");
      })(v || (v = {})),
        (function (e) {
          (e[(e.NotPresent = 0)] = "NotPresent"),
            (e[(e.Failed = 1)] = "Failed"),
            (e[(e.Disconnected = 2)] = "Disconnected"),
            (e[(e.Disconnecting = 3)] = "Disconnecting"),
            (e[(e.Connecting = 4)] = "Connecting"),
            (e[(e.Connected = 5)] = "Connected"),
            (e[(e.Retrying = 6)] = "Retrying");
        })(w || (w = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Weak = 1)] = "Weak"),
            (e[(e.Ok = 2)] = "Ok"),
            (e[(e.Good = 3)] = "Good"),
            (e[(e.Excellent = 4)] = "Excellent");
        })(y || (y = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.StaticWep = 1)] = "StaticWep"),
            (e[(e.DynamicWep = 2)] = "DynamicWep"),
            (e[(e.Wpa = 4)] = "Wpa"),
            (e[(e.WpaEnterprise = 8)] = "WpaEnterprise"),
            (e[(e.Wpa2 = 16)] = "Wpa2"),
            (e[(e.Wpa2Enterprise = 32)] = "Wpa2Enterprise"),
            (e[(e.Unsupported = 32768)] = "Unsupported");
        })(C || (C = {})),
        (function (e) {
          (e[(e.k_EHTTPProxyMode_Invalid = 0)] = "k_EHTTPProxyMode_Invalid"),
            (e[(e.k_EHTTPProxyMode_None = 1)] = "k_EHTTPProxyMode_None"),
            (e[(e.k_EHTTPProxyMode_Manual = 2)] = "k_EHTTPProxyMode_Manual"),
            (e[(e.k_EHTTPProxyMode_Automatic = 3)] =
              "k_EHTTPProxyMode_Automatic");
        })(S || (S = {}));
      !(function (e) {
        (e[(e.SystemKey0 = 0)] = "SystemKey0"),
          (e[(e.SystemKey1 = 1)] = "SystemKey1");
      })(E || (E = {})),
        (function (e) {
          (e[(e.Hidden = 0)] = "Hidden"),
            (e[(e.Notification = 1)] = "Notification"),
            (e[(e.Overlay = 2)] = "Overlay"),
            (e[(e.Opaque = 3)] = "Opaque"),
            (e[(e.OverlayKeyboard = 4)] = "OverlayKeyboard");
        })(O || (O = {}));
    },
    li7h: function (e, t, n) {
      "use strict";
      var r = n("hRO2");
      n("OS8t");
      r.Message;
    },
    lkRc: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return o;
      }),
        n.d(t, "h", function () {
          return s;
        }),
        n.d(t, "b", function () {
          return c;
        }),
        n.d(t, "a", function () {
          return m;
        }),
        n.d(t, "g", function () {
          return h;
        }),
        n.d(t, "f", function () {
          return p;
        }),
        n.d(t, "d", function () {
          return f;
        }),
        n.d(t, "e", function () {
          return b;
        });
      n("mrSG");
      var r = n("YyVH"),
        i = n("Jnrd");
      n("mgoM");
      const o = {
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
          get SESSIONID() {
            return (function () {
              if (!Object(i.a)()) return u || (u = d()), u;
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
        l = { ANNOUNCEMENT_GID: "" };
      let u;
      function d() {
        let e = (function () {
          let e = "";
          for (let t = 0; t < 24; t++) e += Object(r.b)(0, 35).toString(36);
          return e;
        })();
        return Object(i.c)("sessionid", e, 0), e;
      }
      function m() {
        let e = null;
        return (
          Object(i.a)() && (e = Object(i.b)("presentation_mode")),
          Boolean(e && 1 === Number.parseInt(e))
        );
      }
      function h(e = "webui_config") {
        const t = {},
          n = p("config", e);
        n && (delete n.SESSIONID, Object.assign(o, n), (t.config = !0));
        const r = p("userinfo", e);
        r &&
          (Object.assign(s, r),
          (t.userConfig = !0),
          s.is_support && m() && (s.is_support = !1));
        const i = p("broadcast", e);
        i && (Object.assign(a, i), (t.broadcastConfig = !0));
        const u = p("community", e);
        u && (Object.assign(c, u), (t.communityConfig = !0));
        const d = p("event", e);
        return d && (Object.assign(l, d), (t.eventConfig = !0)), t;
      }
      function p(e, t = "webui_config") {
        let n;
        if (((n = "string" == typeof t ? document.getElementById(t) : t), n))
          try {
            if (n.hasAttribute("data-" + e)) {
              return JSON.parse(n.getAttribute("data-" + e));
            }
            return null;
          } catch (e) {
            console.error("Failed to parse config", e);
          }
        else console.error("Missing config element #", t);
      }
      function g(e, t) {
        return 0 != t.length && e.startsWith(t);
      }
      function f() {
        if (!window || !window.location || !window.location.href)
          return console.warn("Unable to determine base url!"), "unknown";
        const e = window.location.href;
        return g(e, o.STORE_BASE_URL)
          ? o.STORE_BASE_URL
          : g(e, o.COMMUNITY_BASE_URL)
          ? o.COMMUNITY_BASE_URL
          : g(e, o.CHAT_BASE_URL)
          ? o.CHAT_BASE_URL
          : g(e, o.PARTNER_BASE_URL)
          ? o.PARTNER_BASE_URL
          : g(e, o.HELP_BASE_URL)
          ? o.HELP_BASE_URL
          : g(e, o.STEAMTV_BASE_URL)
          ? o.STEAMTV_BASE_URL
          : g(e, o.STATS_BASE_URL)
          ? o.STATS_BASE_URL
          : g(e, o.INTERNAL_STATS_BASE_URL)
          ? o.INTERNAL_STATS_BASE_URL
          : g(e, "https://steamloopback.host")
          ? "https://steamloopback.host"
          : "";
      }
      function b() {
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
    mC9v: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      class r {
        constructor(e, t = 0, n) {
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
        TellGet() {
          return this.m_iGet + this.m_viewPacket.byteOffset;
        }
        GetPacket() {
          return this.m_viewPacket.buffer;
        }
        GetUint8() {
          return this.m_viewPacket.getUint8(this.m_iGet++);
        }
        GetUint32(e = !0) {
          let t = this.m_viewPacket.getUint32(this.m_iGet, e);
          return (this.m_iGet += 4), t;
        }
        SeekGetHead(e = 0) {
          this.m_iGet = e || 0;
        }
        SeekGetCurrent(e) {
          this.m_iGet += e;
        }
        TellPut() {
          return this.m_iPut + this.m_viewPacket.byteOffset;
        }
        TellMaxPut() {
          return this.m_viewPacket.byteLength;
        }
        PutUint8(e) {
          this.m_viewPacket.setUint8(this.m_iPut++, e);
        }
        PutUint32(e, t = !0) {
          this.m_viewPacket.setUint32(this.m_iPut, e, t), (this.m_iPut += 4);
        }
        PutBytes(e) {
          this.m_rgubPacket.set(e, this.m_iPut), (this.m_iPut += e.length);
        }
        SeekPut(e) {
          this.m_iPut += e;
        }
        GetCountBytesRemaining() {
          return this.m_viewPacket.byteLength - this.m_iGet;
        }
      }
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
          return i;
        }),
        n.d(t, "e", function () {
          return o;
        }),
        n.d(t, "b", function () {
          return s;
        }),
        n.d(t, "c", function () {
          return a;
        }),
        n.d(t, "a", function () {
          return c;
        }),
        n.d(t, "d", function () {
          return l;
        });
      const r = 1,
        i = 4,
        o = "18446744073709551615";
      function s(e, t = "en") {
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
      const a = (e) => ("koreana" === e ? "korean" : e);
      function c(e, t = "") {
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
      function l(e, t = 0) {
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
      var u, d, m, h, p, g, f;
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
      })(u || (u = {})),
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
        })(d || (d = {})),
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
        })(m || (m = {})),
        (function (e) {
          (e[(e.k_EFloatingGamepadTextInputModeModeSingleLine = 0)] =
            "k_EFloatingGamepadTextInputModeModeSingleLine"),
            (e[(e.k_EFloatingGamepadTextInputModeModeMultipleLines = 1)] =
              "k_EFloatingGamepadTextInputModeModeMultipleLines"),
            (e[(e.k_EFloatingGamepadTextInputModeModeEmail = 2)] =
              "k_EFloatingGamepadTextInputModeModeEmail"),
            (e[(e.k_EFloatingGamepadTextInputModeModeNumeric = 3)] =
              "k_EFloatingGamepadTextInputModeModeNumeric");
        })(h || (h = {})),
        (function (e) {
          (e[(e.k_EAppUpdateContentType_Content = 0)] =
            "k_EAppUpdateContentType_Content"),
            (e[(e.k_EAppUpdateContentType_Workshop = 1)] =
              "k_EAppUpdateContentType_Workshop"),
            (e[(e.k_EAppUpdateContentType_Shader = 2)] =
              "k_EAppUpdateContentType_Shader"),
            (e[(e.k_EAppUpdateContentType_Max = 3)] =
              "k_EAppUpdateContentType_Max");
        })(p || (p = {})),
        (function (e) {
          (e[(e.k_EOverlayToStoreFlag_None = 0)] =
            "k_EOverlayToStoreFlag_None"),
            (e[(e.k_EOverlayToStoreFlag_AddToCart = 1)] =
              "k_EOverlayToStoreFlag_AddToCart"),
            (e[(e.k_EOverlayToStoreFlag_AddToCartAndShow = 2)] =
              "k_EOverlayToStoreFlag_AddToCartAndShow");
        })(g || (g = {})),
        (function (e) {
          (e[(e.k_EActivateGameOverlayToWebPageMode_Default = 0)] =
            "k_EActivateGameOverlayToWebPageMode_Default"),
            (e[(e.k_EActivateGameOverlayToWebPageMode_Modal = 1)] =
              "k_EActivateGameOverlayToWebPageMode_Modal");
        })(f || (f = {}));
    },
    nmPn: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return K;
      }),
        n.d(t, "b", function () {
          return Y;
        });
      var r = n("q1tI"),
        i = n.n(r),
        o = n("i8i4"),
        s = n.n(o),
        a = n("55Ip"),
        c = n("EC67"),
        l = n("eDP5"),
        u = n("Jqb/"),
        d = n("WplJ"),
        m = n("lkRc"),
        h = n("6TF7"),
        p = n.n(h);
      const g = i.a.lazy(() =>
          Promise.all([n.e(0), n.e(3), n.e(1), n.e(2), n.e(131)]).then(
            n.bind(null, "GEPe")
          )
        ),
        f = i.a.lazy(() =>
          Promise.all([n.e(0), n.e(3), n.e(1), n.e(2), n.e(10)]).then(
            n.bind(null, "IY+y")
          )
        ),
        b = i.a.lazy(() =>
          Promise.all([n.e(0), n.e(1), n.e(7)]).then(n.bind(null, "/u7D"))
        ),
        _ = i.a.lazy(() =>
          Promise.all([n.e(0), n.e(3), n.e(1), n.e(2), n.e(6)]).then(
            n.bind(null, "8zUZ")
          )
        ),
        v = i.a.lazy(() => n.e(100).then(n.bind(null, "rt5e"))),
        w = i.a.lazy(() =>
          Promise.all([n.e(0), n.e(3), n.e(1), n.e(2), n.e(8)]).then(
            n.bind(null, "JZ7q")
          )
        ),
        y = i.a.lazy(() =>
          Promise.all([n.e(0), n.e(3), n.e(1), n.e(2), n.e(9)]).then(
            n.bind(null, "erIC")
          )
        ),
        C = i.a.lazy(() =>
          Promise.all([n.e(0), n.e(3), n.e(2), n.e(132)]).then(
            n.bind(null, "KVeB")
          )
        ),
        S = () => (m.b.IS_CREATOR_HOME || m.b.IS_CURATOR ? "groups" : "games"),
        E = () => `/${S()}/:anything*/diagdata`,
        O = () => "/(migrateevents|migrate)",
        M = (e) => `/${S()}/${e}/(partnerevents|events|announcements)`,
        B = (e) => `/app/${e}(/workshop/)?`,
        D = (e) => `/groups/${e}/`,
        R = (e) => `/id/${e}`,
        T = (e) => `/profiles/${e}`,
        I = () => "/:anything/filedetails",
        x = () => "/id/:vanity_url/recommended/:appid/",
        k = () => "/profiles/:steamid/recommended/:appid/",
        L = () => "/profiles/:steamid/recommended",
        N = () => "/id/:vanity_url/recommended",
        j = () => "/id/:vanity_url/friends/add",
        F = () => "/profiles/:id/friends/add",
        A = () => "/broadcast",
        P = () => "/workshop/discussions",
        G = () => "/sharedfiles/filedetails/discussions",
        W = () => "/discussions/forum",
        U = () => "/faqs/",
        z = () => "/questions/",
        H = () => "/(conference|steamworksvirtualconference)/",
        V = () => "/";
      class K extends i.a.Component {
        render() {
          return i.a.createElement(
            a.a,
            { basename: X() },
            i.a.createElement(
              i.a.Suspense,
              { fallback: i.a.createElement("div", null) },
              i.a.createElement(
                c.e,
                null,
                i.a.createElement(c.c, {
                  exact: !0,
                  path: E(),
                  render: (e) =>
                    i.a.createElement(
                      l.a,
                      Object.assign({}, e, {
                        key: e.match.params.gid,
                        strConfigID: "application_config",
                      })
                    ),
                }),
                i.a.createElement(c.c, {
                  path: M(":appid_or_vanity_str"),
                  component: f,
                }),
                i.a.createElement(c.c, { path: O(), component: f }),
                i.a.createElement(c.c, { path: A(), component: _ }),
                i.a.createElement(c.c, {
                  path: B(":appid"),
                  render: (e) =>
                    i.a.createElement(d.a, {
                      config: {
                        "apphub-events": () => i.a.createElement(f, null),
                        "apphub-ugcrewards": () =>
                          i.a.createElement(b, Object.assign({}, e)),
                        "community-awards": () =>
                          i.a.createElement(b, Object.assign({}, e)),
                      },
                    }),
                }),
                i.a.createElement(c.c, {
                  path: D(":groupid_or_vanity_str"),
                  render: (e) =>
                    i.a.createElement(d.a, {
                      config: {
                        "apphub-events": () => i.a.createElement(f, null),
                        "community-awards": () =>
                          i.a.createElement(b, Object.assign({}, e)),
                      },
                    }),
                }),
                i.a.createElement(c.c, {
                  path: x(),
                  render: (e) => i.a.createElement(b, Object.assign({}, e)),
                }),
                i.a.createElement(c.c, {
                  path: k(),
                  render: (e) => i.a.createElement(b, Object.assign({}, e)),
                }),
                i.a.createElement(c.c, {
                  path: N(),
                  render: (e) => i.a.createElement(b, Object.assign({}, e)),
                }),
                i.a.createElement(c.c, {
                  path: L(),
                  render: (e) => i.a.createElement(b, Object.assign({}, e)),
                }),
                i.a.createElement(c.c, {
                  path: [W(), P(), G()],
                  render: (e) =>
                    i.a.createElement(d.a, {
                      config: {
                        "community-awards": () =>
                          i.a.createElement(b, Object.assign({}, e)),
                      },
                    }),
                }),
                i.a.createElement(
                  c.c,
                  { path: [j(), F()] },
                  i.a.createElement(v, null)
                ),
                i.a.createElement(c.c, {
                  path: R(":vanity_url"),
                  render: (e) => i.a.createElement(g, Object.assign({}, e)),
                }),
                i.a.createElement(c.c, {
                  path: T(":steamid"),
                  render: (e) => i.a.createElement(g, Object.assign({}, e)),
                }),
                i.a.createElement(c.c, {
                  path: I(),
                  render: (e) => i.a.createElement(b, Object.assign({}, e)),
                }),
                i.a.createElement(c.c, { path: U(), component: w }),
                i.a.createElement(c.c, { path: z(), component: C }),
                i.a.createElement(c.c, { path: H(), component: y }),
                i.a.createElement(c.c, {
                  path: V(),
                  render: (e) =>
                    i.a.createElement(d.a, {
                      config: {
                        "apphub-events": () => i.a.createElement(f, null),
                        "apphub-ugcrewards": () =>
                          i.a.createElement(b, Object.assign({}, e)),
                      },
                    }),
                }),
                i.a.createElement(c.c, { component: Y })
              )
            ),
            i.a.createElement(q, null)
          );
        }
      }
      const q = (e) => {
        const t = i.a.createElement(u.c, { ModalManager: Object(u.h)(window) });
        return s.a.createPortal(t, document.body);
      };
      function Y(e) {
        return "dev" == m.c.WEB_UNIVERSE
          ? i.a.createElement(
              "div",
              { className: p.a.Error },
              "Dev Universe: Unknown Path"
            )
          : i.a.createElement(c.b, { push: !0, to: "/" });
      }
      function X() {
        let e = document.createElement("a");
        e.href = m.c.COMMUNITY_BASE_URL;
        let t = e.pathname;
        return t.endsWith("/") || (t += "/"), t;
      }
    },
    ojgN: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return h;
      });
      var r = n("mrSG"),
        i = n("2vnA"),
        o = n("q1tI");
      n("mgoM"), n("kyHq");
      n("2lL1"), n("li7h");
      var s = n("X3Ds"),
        a = n("y+6m"),
        c = n("+jbA"),
        l = n.n(c),
        u = n("sUmc");
      n("JMS6");
      class d {
        constructor() {
          this.m_nKey = null;
        }
        get key() {
          return (
            null == this.m_nKey &&
              ((this.m_nKey = d.s_nNextKeyValue), d.s_nNextKeyValue++),
            this.m_nKey
          );
        }
        static GetBrowserInfoForPopup(e) {
          return null;
        }
        SetTakeFocus(e) {
          this.m_fnTakeFocus = e;
        }
      }
      (d.s_nNextKeyValue = 1),
        Object(r.b)([i.C], d.prototype, "m_refContextMenu", void 0);
      class m extends d {
        constructor(e) {
          super(),
            (this.m_bVisible = !1),
            (this.m_elSubmenuItem = null),
            (this.m_timerHideSubMenu = 0),
            (this.m_ownerWindow = e);
        }
        RenderElements(e, t) {
          0 == this.presentation &&
          (e.options.bForcePopup || this.m_ownerWindow.innerWidth) < 400 &&
          this.m_ownerWindow.SteamClient &&
          this.m_ownerWindow.SteamClient.Window
            ? (this.m_popupContextMenu = new a.a(
                e,
                t,
                d.GetBrowserInfoForPopup(this.m_ownerWindow)
              ))
            : ((this.m_embeddedElementInstance = Object(u.b)(
                this.m_ownerWindow.document
              )),
              (this.m_rctElement = o.createElement(a.f, e, t)));
        }
        SetOnHideCallback(e) {
          this.m_fnOnHideCallback = e;
        }
        Show() {
          this.m_rctElement
            ? this.m_embeddedElementInstance.Show(this.m_rctElement)
            : this.m_popupContextMenu.Show(),
            (this.m_bVisible = !0);
        }
        Hide() {
          this.InternalHide();
        }
        HideIfNotInFocus() {
          this.BHasFocus() || this.BIsFocusInChildHierarchy() || this.Hide();
        }
        InternalHide() {
          this.m_bVisible &&
            ((this.m_bVisible = !1),
            this.InternalHideSubMenu(),
            this.m_fnOnHideCallback && this.m_fnOnHideCallback(),
            this.m_embeddedElementInstance
              ? this.m_embeddedElementInstance.Hide(300)
              : this.m_popupContextMenu.Close());
        }
        get visible() {
          return this.m_bVisible;
        }
        get options() {
          return this.m_options;
        }
        get presentation() {
          return 0;
        }
        get styles() {
          return l.a;
        }
        get owner_window() {
          return this.m_ownerWindow;
        }
        ShowSubMenu(e, t) {
          return this.m_elSubmenuItem == e
            ? (this.CancelHideSubMenuTimer(), this.m_submenu.TakeFocus(), null)
            : (this.InternalHideSubMenu(),
              (this.m_elSubmenuItem = e),
              (this.m_submenu = new p(this, t(), e)),
              this.m_submenu.Show(),
              this.m_submenu);
        }
        CancelHideSubMenuTimer() {
          this.m_timerHideSubMenu > 0 &&
            (clearTimeout(this.m_timerHideSubMenu),
            (this.m_timerHideSubMenu = 0));
        }
        HideSubMenu() {
          if (!this.m_submenu) return void this.CancelHideSubMenuTimer();
          if (this.m_timerHideSubMenu > 0) return;
          this.m_timerHideSubMenu = window.setTimeout(() => {
            this.InternalHideSubMenu(), (this.m_timerHideSubMenu = 0);
          }, 150);
        }
        HideSelf() {
          this.InternalHide();
        }
        InternalHideSubMenu() {
          this.CancelHideSubMenuTimer(),
            this.m_submenu &&
              (this.BIsFocusInChildHierarchy() && this.TakeFocus(),
              (this.m_elSubmenuItem = null),
              this.m_submenu.InternalHide(),
              (this.m_submenu = null));
        }
        TakeFocus() {
          this.m_popupContextMenu && this.m_popupContextMenu.Focus(),
            this.m_fnTakeFocus && this.m_fnTakeFocus();
        }
        BInternalElementInParentHierarchy(e) {
          return (
            this.m_parentInstance &&
            (this.m_parentInstance.BIsChildElement(e) ||
              this.m_parentInstance.BInternalElementInParentHierarchy(e))
          );
        }
        BInternalElementInChildHierarchy(e) {
          return (
            this.m_submenu &&
            (this.m_submenu.BIsChildElement(e) ||
              this.m_submenu.BInternalElementInChildHierarchy(e))
          );
        }
        BIsChildElement(e) {
          return this.m_embeddedElementInstance
            ? this.m_embeddedElementInstance.BIsChildElement(e)
            : s.e(this.m_popupContextMenu.root_element, e);
        }
        BHasFocus() {
          return this.m_embeddedElementInstance
            ? this.m_embeddedElementInstance.BIsChildElement(
                this.m_ownerWindow.document.activeElement
              )
            : this.m_popupContextMenu.focused;
        }
        BIsFocusInChildHierarchy() {
          return (
            this.m_submenu &&
            (this.m_submenu.BHasFocus() ||
              this.m_submenu.BIsFocusInChildHierarchy())
          );
        }
        BIsElementInMenuHierarchy(e) {
          return (
            this.BInternalElementInParentHierarchy(e) ||
            this.BInternalElementInChildHierarchy(e)
          );
        }
        BIsSubMenuVisible() {
          return !!this.m_submenu;
        }
        SetLabel(e) {}
      }
      Object(r.b)([i.C], m.prototype, "m_bVisible", void 0);
      class h extends m {
        constructor(e, t, n, r, i) {
          super(t.ownerDocument.defaultView),
            d.sm_iActiveContextMenuInstance &&
              d.sm_iActiveContextMenuInstance.Hide(),
            (d.sm_iActiveContextMenuInstance = this),
            (this.m_options = i || {});
          let o = {
            element: t,
            clientX: n,
            clientY: r,
            instance: this,
            options: this.m_options,
            fnOnMenuItemSelected: () => {
              this.Hide();
            },
          };
          this.RenderElements(o, e);
        }
        Show() {
          this.m_options.bDisableMouseOverlay ||
            ((this.m_embeddedElementInstanceOverlay = Object(u.b)(
              this.m_ownerWindow.document
            )),
            this.m_embeddedElementInstanceOverlay.Show(o.createElement(a.e))),
            super.Show();
        }
        Hide() {
          this.m_embeddedElementInstanceOverlay &&
            this.m_embeddedElementInstanceOverlay.Hide(0),
            super.Hide();
        }
        BIsSubMenu() {
          return !1;
        }
      }
      class p extends m {
        constructor(e, t, n) {
          super(n.ownerDocument.defaultView),
            (this.m_parentInstance = e),
            (this.m_options = {
              bOverlapVertical: !0,
              bUseWebStyles: e.options.bUseWebStyles,
              strClassName: e.options.strClassName,
              bFitToWindow: e.options.bFitToWindow,
              bShiftToFitWindow: e.options.bShiftToFitWindow,
            });
          let r = {
            element: n,
            clientX: null,
            clientY: null,
            instance: this,
            options: this.m_options,
            fnOnMenuItemSelected: () => {
              this.Hide();
            },
            bSubmenu: !0,
          };
          this.RenderElements(r, t);
        }
        Hide() {
          this.m_popupContextMenu
            ? window.setTimeout(() => {
                this.m_parentInstance.HideIfNotInFocus();
              }, 10)
            : this.m_parentInstance.Hide();
        }
        BIsSubMenu() {
          return !0;
        }
      }
    },
    opsS: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return r.a;
      }),
        n.d(t, "e", function () {
          return r.c;
        }),
        n.d(t, "d", function () {
          return r.b;
        }),
        n.d(t, "h", function () {
          return r.d;
        }),
        n.d(t, "c", function () {
          return o;
        }),
        n.d(t, "f", function () {
          return s;
        }),
        n.d(t, "g", function () {
          return a;
        }),
        n.d(t, "a", function () {
          return c.a;
        });
      var r = n("SRyh"),
        i = n("q1tI");
      function o(e, t) {
        null != e &&
          ("function" == typeof e ? e(t) : "current" in e && (e.current = t));
      }
      function s(...e) {
        return i.useCallback((t) => {
          for (const n of e) o(n, t);
        }, e);
      }
      function a(e, t) {
        const n = i.useRef();
        return i.useCallback((t) => {
          n.current && n.current(), (n.current = e(t));
        }, t);
      }
      var c = n("XxJJ");
    },
    qDk6: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return m;
      });
      var r = n("mrSG"),
        i = n("q1tI"),
        o = n.n(i),
        s = n("BC0X"),
        a = n("exH9"),
        c = n("opsS"),
        l = n("j+5p"),
        u = n("8sdS"),
        d = n("7Whv");
      const m = o.a.forwardRef(function (e, t) {
        const {
            "flow-children": n,
            onActivate: i,
            onCancel: m,
            focusClassName: h,
            focusWithinClassName: p,
          } = e,
          g = Object(r.c)(e, [
            "flow-children",
            "onActivate",
            "onCancel",
            "focusClassName",
            "focusWithinClassName",
          ]),
          { elemProps: f, navOptions: b, gamepadEvents: _ } = Object(s.b)(g);
        let v = {};
        const w = Object(d.a)(n);
        w != l.c.NONE && (v.layout = w),
          i &&
            ((f.onClick = f.onClick || i), (_.onOKButton = _.onOKButton || i)),
          _.onOKButton && void 0 === b.focusable && (b.focusable = !0),
          (b.focusable || b.focusableIfNoChildren) &&
            (f.tabIndex = f.tabIndex || 0),
          m && (_.onCancelButton = _.onCancelButton || m),
          (f.className = Object(a.a)(f.className, "Panel", "Focusable"));
        const { ref: y, node: C } = Object(s.h)(
          Object.assign(Object.assign({}, v), b)
        );
        Object(u.a)(_, y);
        const S = Object(c.f)(y, t);
        return o.a.createElement(
          s.g.Provider,
          { value: C },
          C
            ? o.a.createElement(
                s.c,
                Object.assign({}, f, {
                  divRef: S,
                  node: C,
                  focusClassName: Object(a.a)(h, "gpfocus"),
                  focusWithinClassName: Object(a.a)(p, "gpfocuswithin"),
                })
              )
            : o.a.createElement("div", Object.assign({}, f, { ref: S }))
        );
      });
    },
    qiKp: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      }),
        n.d(t, "e", function () {
          return c;
        }),
        n.d(t, "b", function () {
          return l;
        }),
        n.d(t, "c", function () {
          return u;
        }),
        n.d(t, "d", function () {
          return d;
        });
      var r = n("mrSG"),
        i = n("Kw0F"),
        o = n("XxJJ");
      class s {
        constructor() {
          this.m_vecCallbacks = [];
        }
        Register(e) {
          this.m_vecCallbacks.push(e);
          return {
            Unregister: () => {
              i.b(this.m_vecCallbacks, e);
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
      class l {
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
      Object(r.b)([o.a], l.prototype, "ScheduledInternal", null);
      class u {
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
    r64O: function (e, t, n) {
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
    rCDf: function (e, t, n) {
      var r = {
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
        "./shared_vietnamese.json": ["RSmC", 98],
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
        (i.id = "rCDf"),
        (e.exports = i);
    },
    rHSA: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      }),
        n.d(t, "b", function () {
          return i;
        }),
        n.d(t, "c", function () {
          return c;
        });
      var r,
        i,
        o = n("qiKp");
      class s {
        constructor(e) {
          this.m_config = e;
        }
        Reset() {
          (this.m_ActiveInputId = void 0),
            null != this.m_ActiveInputTimeout &&
              (clearInterval(this.m_ActiveInputTimeout),
              (this.m_ActiveInputTimeout = void 0));
        }
        HandleInputButtonDown(e, t) {
          if (this.m_ActiveInputId !== e && null != t) {
            this.Reset(), (this.m_ActiveInputId = e);
            const n = () => {
              this.m_ActiveInputTimeout = window.setInterval(() => {
                t();
              }, this.m_config.repeatInterval_ms);
            };
            null == this.m_config.firstRepeatInterval_ms ||
            this.m_config.firstRepeatInterval_ms ===
              this.m_config.repeatInterval_ms
              ? n()
              : (this.m_ActiveInputTimeout = window.setTimeout(() => {
                  t(), n();
                }, this.m_config.firstRepeatInterval_ms));
          }
        }
      }
      class a {
        constructor(e) {
          (this.m_config = e), (this.m_inputRepeatGenerator = new s(e));
        }
        Reset() {
          this.m_inputRepeatGenerator.Reset();
        }
        HandleInputButtonDown(e, t) {
          this.m_config.inputsThatRepeat.has(e)
            ? this.m_inputRepeatGenerator.HandleInputButtonDown(e, t)
            : this.m_inputRepeatGenerator.Reset();
        }
        HandleInputButtonUp(e) {
          this.m_inputRepeatGenerator.Reset();
        }
      }
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
          (e[(e.LSTICK_CLICK = 15)] = "LSTICK_CLICK"),
          (e[(e.RSTICK_CLICK = 16)] = "RSTICK_CLICK"),
          (e[(e.LSTICK_TOUCH = 17)] = "LSTICK_TOUCH"),
          (e[(e.RSTICK_TOUCH = 18)] = "RSTICK_TOUCH"),
          (e[(e.LPAD_TOUCH = 19)] = "LPAD_TOUCH"),
          (e[(e.LPAD_CLICK = 20)] = "LPAD_CLICK"),
          (e[(e.RPAD_TOUCH = 21)] = "RPAD_TOUCH"),
          (e[(e.RPAD_CLICK = 22)] = "RPAD_CLICK"),
          (e[(e.REAR_LEFT_UPPER = 23)] = "REAR_LEFT_UPPER"),
          (e[(e.REAR_LEFT_LOWER = 24)] = "REAR_LEFT_LOWER"),
          (e[(e.REAR_RIGHT_UPPER = 25)] = "REAR_RIGHT_UPPER"),
          (e[(e.REAR_RIGHT_LOWER = 26)] = "REAR_RIGHT_LOWER"),
          (e[(e.STEAM_GUIDE = 27)] = "STEAM_GUIDE"),
          (e[(e.STEAM_QUICK_MENU = 28)] = "STEAM_QUICK_MENU");
      })(r || (r = {})),
        (function (e) {
          (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
            (e[(e.GAMEPAD = 1)] = "GAMEPAD"),
            (e[(e.KEYBOARD = 2)] = "KEYBOARD"),
            (e[(e.MOUSE = 3)] = "MOUSE"),
            (e[(e.TOUCH = 4)] = "TOUCH");
        })(i || (i = {}));
      class c {
        constructor() {
          (this.m_OnGamepadDetectedCallbacks = new o.a()),
            (this.m_ButtonDownCallbacks = new o.a()),
            (this.m_ButtonUpCallbacks = new o.a()),
            (this.m_NavigationTypeChangeCallbacks = new o.a()),
            (this.m_nLastActiveControllerIndex = -1),
            (this.m_ButtonRepeatHandler = new a({
              inputsThatRepeat: new Set([
                r.DIR_UP,
                r.DIR_DOWN,
                r.DIR_LEFT,
                r.DIR_RIGHT,
              ]),
              firstRepeatInterval_ms: 500,
              repeatInterval_ms: 125,
            })),
            (this.m_bGamepadDetected = !1);
        }
        RegisterForGamepadDetected(e) {
          return this.m_OnGamepadDetectedCallbacks.Register(e);
        }
        RegisterForGamepadButtonDown(e) {
          return this.m_ButtonDownCallbacks.Register(e);
        }
        RegisterForGamepadButtonUp(e) {
          return this.m_ButtonUpCallbacks.Register(e);
        }
        RegisterForNavigationTypeChange(e) {
          return this.m_NavigationTypeChangeCallbacks.Register(e);
        }
        SetSourceType(e) {
          this.m_eNavigationSourceType = e;
        }
        GetSourceType() {
          return this.m_eNavigationSourceType;
        }
        SetControllerActive(e) {
          (this.m_nLastActiveControllerIndex = e),
            (this.m_fLastActiveTime = Date.now());
        }
        GetActiveControllerIndex() {
          return this.m_nLastActiveControllerIndex;
        }
        GetActiveControllerTime() {
          return this.m_fLastActiveTime;
        }
        OnGamepadDetected() {
          console.log("Gamepad detected"),
            (this.m_bGamepadDetected = !0),
            this.m_OnGamepadDetectedCallbacks.Dispatch();
        }
        OnButtonDown(e, t) {
          void 0 === t && (t = -1),
            this.SetControllerActive(t),
            this.DispatchButtonDown(e),
            this.m_ButtonRepeatHandler.HandleInputButtonDown(e, () =>
              this.DispatchButtonDown(e, !0)
            );
        }
        OnButtonUp(e, t) {
          void 0 === t && (t = -1),
            this.SetControllerActive(t),
            this.m_ButtonRepeatHandler.HandleInputButtonUp(e),
            this.m_ButtonUpCallbacks.Dispatch(
              e,
              this.m_eNavigationSourceType,
              this.m_nLastActiveControllerIndex
            );
        }
        DispatchButtonDown(e, t) {
          this.m_ButtonDownCallbacks.Dispatch(
            e,
            this.m_eNavigationSourceType,
            this.m_nLastActiveControllerIndex,
            t
          );
        }
        OnNavigationTypeChanged(e) {
          this.m_NavigationTypeChangeCallbacks.Dispatch(e);
        }
      }
    },
    sRB7: function (e, t, n) {
      "use strict";
      n.d(t, "f", function () {
        return a;
      }),
        n.d(t, "d", function () {
          return B;
        }),
        n.d(t, "c", function () {
          return D;
        }),
        n.d(t, "g", function () {
          return R;
        }),
        n.d(t, "a", function () {
          return T;
        }),
        n.d(t, "b", function () {
          return I;
        }),
        n.d(t, "e", function () {
          return L;
        });
      var r = n("hRO2"),
        i = n("OS8t");
      n("SvTV"), n("li7h");
      const o = r.Message;
      class s extends o {
        constructor(e = null) {
          super(),
            s.prototype.type || i.a(s.M()),
            o.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            s.sm_m ||
              (s.sm_m = {
                proto: s,
                fields: {
                  type: { n: 1, br: i.d.readString, bw: i.h.writeString },
                  rating: { n: 2, br: i.d.readString, bw: i.h.writeString },
                  descriptors: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: i.d.readString,
                    bw: i.h.writeRepeatedString,
                  },
                  interactive_elements: {
                    n: 4,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  required_age: {
                    n: 10,
                    br: i.d.readInt32,
                    bw: i.h.writeInt32,
                  },
                  use_age_gate: { n: 11, br: i.d.readBool, bw: i.h.writeBool },
                  image_url: { n: 20, br: i.d.readString, bw: i.h.writeString },
                  image_target: {
                    n: 21,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                },
              }),
            s.sm_m
          );
        }
        static MBF() {
          return s.sm_mbf || (s.sm_mbf = i.e(s.M())), s.sm_mbf;
        }
        toObject(e = !1) {
          return s.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(s.M(), e, t);
        }
        static fromObject(e) {
          return i.c(s.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new s();
          return s.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(s.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(s.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreGameRating";
        }
      }
      class a extends o {
        constructor(e = null) {
          super(),
            a.prototype.item_type || i.a(a.M()),
            o.initialize(
              this,
              e,
              0,
              -1,
              [11, 12, 20, 21, 25, 41, 42, 52],
              null
            );
        }
        static M() {
          return (
            a.sm_m ||
              (a.sm_m = {
                proto: a,
                fields: {
                  item_type: { n: 1, br: i.d.readEnum, bw: i.h.writeEnum },
                  id: { n: 2, br: i.d.readUint32, bw: i.h.writeUint32 },
                  success: { n: 3, br: i.d.readUint32, bw: i.h.writeUint32 },
                  visible: { n: 4, br: i.d.readBool, bw: i.h.writeBool },
                  unvailable_for_country_restriction: {
                    n: 5,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  name: { n: 6, br: i.d.readString, bw: i.h.writeString },
                  store_url_path: {
                    n: 7,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  appid: { n: 9, br: i.d.readUint32, bw: i.h.writeUint32 },
                  type: { n: 10, br: i.d.readEnum, bw: i.h.writeEnum },
                  included_types: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: i.d.readEnum,
                    bw: i.h.writeRepeatedEnum,
                  },
                  included_appids: {
                    n: 12,
                    r: !0,
                    q: !0,
                    br: i.d.readUint32,
                    bw: i.h.writeRepeatedUint32,
                  },
                  is_free: { n: 13, br: i.d.readBool, bw: i.h.writeBool },
                  is_early_access: {
                    n: 14,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  related_items: { n: 15, c: c },
                  content_descriptorids: {
                    n: 20,
                    r: !0,
                    q: !0,
                    br: i.d.readEnum,
                    bw: i.h.writeRepeatedEnum,
                  },
                  tagids: {
                    n: 21,
                    r: !0,
                    q: !0,
                    br: i.d.readUint32,
                    bw: i.h.writeRepeatedUint32,
                  },
                  categories: { n: 22, c: l },
                  reviews: { n: 23, c: u },
                  basic_info: { n: 24, c: m },
                  tags: { n: 25, c: p, r: !0, q: !0 },
                  assets: { n: 30, c: g },
                  release: { n: 31, c: f },
                  platforms: { n: 32, c: b },
                  game_rating: { n: 33, c: s },
                  best_purchase_option: { n: 40, c: v },
                  purchase_options: { n: 41, c: v, r: !0, q: !0 },
                  accessories: { n: 42, c: v, r: !0, q: !0 },
                  screenshots: { n: 50, c: y },
                  trailers: { n: 51, c: S },
                  supported_languages: { n: 52, c: M, r: !0, q: !0 },
                },
              }),
            a.sm_m
          );
        }
        static MBF() {
          return a.sm_mbf || (a.sm_mbf = i.e(a.M())), a.sm_mbf;
        }
        toObject(e = !1) {
          return a.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(a.M(), e, t);
        }
        static fromObject(e) {
          return i.c(a.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new a();
          return a.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(a.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(a.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem";
        }
      }
      class c extends o {
        constructor(e = null) {
          super(),
            c.prototype.parent_appid || i.a(c.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  parent_appid: {
                    n: 1,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = i.e(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(c.M(), e, t);
        }
        static fromObject(e) {
          return i.c(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new c();
          return c.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_RelatedItems";
        }
      }
      class l extends o {
        constructor(e = null) {
          super(),
            l.prototype.supported_player_categoryids || i.a(l.M()),
            o.initialize(this, e, 0, -1, [2, 3, 4], null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  supported_player_categoryids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: i.d.readUint32,
                    bw: i.h.writeRepeatedUint32,
                  },
                  feature_categoryids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: i.d.readUint32,
                    bw: i.h.writeRepeatedUint32,
                  },
                  controller_categoryids: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: i.d.readUint32,
                    bw: i.h.writeRepeatedUint32,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = i.e(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(l.M(), e, t);
        }
        static fromObject(e) {
          return i.c(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new l();
          return l.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Categories";
        }
      }
      class u extends o {
        constructor(e = null) {
          super(),
            u.prototype.summary_filtered || i.a(u.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  summary_filtered: { n: 1, c: d },
                  summary_unfiltered: { n: 2, c: d },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = i.e(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(u.M(), e, t);
        }
        static fromObject(e) {
          return i.c(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new u();
          return u.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Reviews";
        }
      }
      class d extends o {
        constructor(e = null) {
          super(),
            d.prototype.review_count || i.a(d.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  review_count: {
                    n: 1,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  percent_positive: {
                    n: 2,
                    br: i.d.readInt32,
                    bw: i.h.writeInt32,
                  },
                  review_score: { n: 3, br: i.d.readEnum, bw: i.h.writeEnum },
                  review_score_label: {
                    n: 4,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = i.e(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(d.M(), e, t);
        }
        static fromObject(e) {
          return i.c(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new d();
          return d.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Reviews_StoreReviewSummary";
        }
      }
      class m extends o {
        constructor(e = null) {
          super(),
            m.prototype.short_description || i.a(m.M()),
            o.initialize(this, e, 0, -1, [2, 3, 4], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  short_description: {
                    n: 1,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  publishers: { n: 2, c: h, r: !0, q: !0 },
                  developers: { n: 3, c: h, r: !0, q: !0 },
                  franchises: { n: 4, c: h, r: !0, q: !0 },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = i.e(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(m.M(), e, t);
        }
        static fromObject(e) {
          return i.c(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new m();
          return m.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_BasicInfo";
        }
      }
      class h extends o {
        constructor(e = null) {
          super(),
            h.prototype.name || i.a(h.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  name: { n: 1, br: i.d.readString, bw: i.h.writeString },
                  creator_clan_account_id: {
                    n: 2,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = i.e(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(h.M(), e, t);
        }
        static fromObject(e) {
          return i.c(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new h();
          return h.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_BasicInfo_CreatorHomeLink";
        }
      }
      class p extends o {
        constructor(e = null) {
          super(),
            p.prototype.tagid || i.a(p.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  tagid: { n: 1, br: i.d.readUint32, bw: i.h.writeUint32 },
                  weight: { n: 2, br: i.d.readUint32, bw: i.h.writeUint32 },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = i.e(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(p.M(), e, t);
        }
        static fromObject(e) {
          return i.c(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new p();
          return p.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Tag";
        }
      }
      class g extends o {
        constructor(e = null) {
          super(),
            g.prototype.asset_url_format || i.a(g.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  asset_url_format: {
                    n: 1,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  main_capsule: {
                    n: 2,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  small_capsule: {
                    n: 3,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  header: { n: 4, br: i.d.readString, bw: i.h.writeString },
                  package_header: {
                    n: 5,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  page_background: {
                    n: 6,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  hero_capsule: {
                    n: 7,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  hero_capsule_2x: {
                    n: 8,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  library_capsule: {
                    n: 9,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  library_capsule_2x: {
                    n: 10,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  library_hero: {
                    n: 11,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  library_hero_2x: {
                    n: 12,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  community_icon: {
                    n: 13,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = i.e(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(g.M(), e, t);
        }
        static fromObject(e) {
          return i.c(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new g();
          return g.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Assets";
        }
      }
      class f extends o {
        constructor(e = null) {
          super(),
            f.prototype.steam_release_date || i.a(f.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  steam_release_date: {
                    n: 1,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  original_release_date: {
                    n: 2,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  original_steam_release_date: {
                    n: 3,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  is_coming_soon: { n: 4, br: i.d.readBool, bw: i.h.writeBool },
                  is_preload: { n: 5, br: i.d.readBool, bw: i.h.writeBool },
                  custom_release_date_message: {
                    n: 6,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  is_abridged_release_date: {
                    n: 7,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  is_early_access: {
                    n: 10,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  mac_release_date: {
                    n: 20,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  linux_release_date: {
                    n: 21,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = i.e(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(f.M(), e, t);
        }
        static fromObject(e) {
          return i.c(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new f();
          return f.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_ReleaseInfo";
        }
      }
      class b extends o {
        constructor(e = null) {
          super(),
            b.prototype.windows || i.a(b.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  windows: { n: 1, br: i.d.readBool, bw: i.h.writeBool },
                  mac: { n: 2, br: i.d.readBool, bw: i.h.writeBool },
                  linux: { n: 3, br: i.d.readBool, bw: i.h.writeBool },
                  vr_support: { n: 10, c: _ },
                  steam_deck_compat_category: {
                    n: 11,
                    br: i.d.readEnum,
                    bw: i.h.writeEnum,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = i.e(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(b.M(), e, t);
        }
        static fromObject(e) {
          return i.c(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new b();
          return b.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Platforms";
        }
      }
      class _ extends o {
        constructor(e = null) {
          super(),
            _.prototype.vrhmd || i.a(_.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  vrhmd: { n: 1, br: i.d.readBool, bw: i.h.writeBool },
                  vrhmd_only: { n: 2, br: i.d.readBool, bw: i.h.writeBool },
                  htc_vive: { n: 40, br: i.d.readBool, bw: i.h.writeBool },
                  oculus_rift: { n: 41, br: i.d.readBool, bw: i.h.writeBool },
                  windows_mr: { n: 42, br: i.d.readBool, bw: i.h.writeBool },
                  valve_index: { n: 43, br: i.d.readBool, bw: i.h.writeBool },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = i.e(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(_.M(), e, t);
        }
        static fromObject(e) {
          return i.c(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new _();
          return _.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Platforms_VRSupport";
        }
      }
      class v extends o {
        constructor(e = null) {
          super(),
            v.prototype.packageid || i.a(v.M()),
            o.initialize(this, e, 0, -1, [20, 21, 22], null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  packageid: { n: 1, br: i.d.readInt32, bw: i.h.writeInt32 },
                  bundleid: { n: 2, br: i.d.readInt32, bw: i.h.writeInt32 },
                  purchase_option_name: {
                    n: 3,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  final_price_in_cents: {
                    n: 5,
                    br: i.d.readInt64String,
                    bw: i.h.writeInt64String,
                  },
                  original_price_in_cents: {
                    n: 6,
                    br: i.d.readInt64String,
                    bw: i.h.writeInt64String,
                  },
                  user_final_price_in_cents: {
                    n: 7,
                    br: i.d.readInt64String,
                    bw: i.h.writeInt64String,
                  },
                  formatted_final_price: {
                    n: 8,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  formatted_original_price: {
                    n: 9,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  discount_pct: {
                    n: 10,
                    br: i.d.readInt32,
                    bw: i.h.writeInt32,
                  },
                  user_discount_pct: {
                    n: 11,
                    br: i.d.readInt32,
                    bw: i.h.writeInt32,
                  },
                  bundle_discount_pct: {
                    n: 12,
                    br: i.d.readInt32,
                    bw: i.h.writeInt32,
                  },
                  active_discounts: { n: 20, c: w, r: !0, q: !0 },
                  user_active_discounts: { n: 21, c: w, r: !0, q: !0 },
                  inactive_discounts: { n: 22, c: w, r: !0, q: !0 },
                  user_can_purchase: {
                    n: 30,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  user_can_purchase_as_gift: {
                    n: 31,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  is_commercial_license: {
                    n: 40,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = i.e(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(v.M(), e, t);
        }
        static fromObject(e) {
          return i.c(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new v();
          return v.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_PurchaseOption";
        }
      }
      class w extends o {
        constructor(e = null) {
          super(),
            w.prototype.discount_amount || i.a(w.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  discount_amount: {
                    n: 1,
                    br: i.d.readInt64String,
                    bw: i.h.writeInt64String,
                  },
                  discount_description: {
                    n: 2,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  discount_end_date: {
                    n: 3,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = i.e(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(w.M(), e, t);
        }
        static fromObject(e) {
          return i.c(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new w();
          return w.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_PurchaseOption_Discount";
        }
      }
      class y extends o {
        constructor(e = null) {
          super(),
            y.prototype.all_ages_screenshots || i.a(y.M()),
            o.initialize(this, e, 0, -1, [2, 3], null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  all_ages_screenshots: { n: 2, c: C, r: !0, q: !0 },
                  mature_content_screenshots: { n: 3, c: C, r: !0, q: !0 },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = i.e(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(y.M(), e, t);
        }
        static fromObject(e) {
          return i.c(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new y();
          return y.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Screenshots";
        }
      }
      class C extends o {
        constructor(e = null) {
          super(),
            C.prototype.filename || i.a(C.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  filename: { n: 1, br: i.d.readString, bw: i.h.writeString },
                  ordinal: { n: 2, br: i.d.readInt32, bw: i.h.writeInt32 },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = i.e(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(C.M(), e, t);
        }
        static fromObject(e) {
          return i.c(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new C();
          return C.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Screenshots_Screenshot";
        }
      }
      class S extends o {
        constructor(e = null) {
          super(),
            S.prototype.highlights || i.a(S.M()),
            o.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  highlights: { n: 1, c: O, r: !0, q: !0 },
                  other_trailers: { n: 2, c: O, r: !0, q: !0 },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = i.e(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(S.M(), e, t);
        }
        static fromObject(e) {
          return i.c(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new S();
          return S.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Trailers";
        }
      }
      class E extends o {
        constructor(e = null) {
          super(),
            E.prototype.filename || i.a(E.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  filename: { n: 1, br: i.d.readString, bw: i.h.writeString },
                  type: { n: 2, br: i.d.readString, bw: i.h.writeString },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = i.e(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(E.M(), e, t);
        }
        static fromObject(e) {
          return i.c(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new E();
          return E.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Trailers_VideoSource";
        }
      }
      class O extends o {
        constructor(e = null) {
          super(),
            O.prototype.trailer_name || i.a(O.M()),
            o.initialize(this, e, 0, -1, [3, 4, 5], null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  trailer_name: {
                    n: 1,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  trailer_url_format: {
                    n: 2,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  trailer_480p: { n: 3, c: E, r: !0, q: !0 },
                  trailer_max: { n: 4, c: E, r: !0, q: !0 },
                  microtrailer: { n: 5, c: E, r: !0, q: !0 },
                  screenshot_medium: {
                    n: 10,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  screenshot_full: {
                    n: 11,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  trailer_base_id: {
                    n: 12,
                    br: i.d.readInt32,
                    bw: i.h.writeInt32,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = i.e(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(O.M(), e, t);
        }
        static fromObject(e) {
          return i.c(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new O();
          return O.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Trailers_Trailer";
        }
      }
      class M extends o {
        constructor(e = null) {
          super(),
            M.prototype.elanguage || i.a(M.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  elanguage: { n: 1, br: i.d.readInt32, bw: i.h.writeInt32 },
                  supported: { n: 2, br: i.d.readBool, bw: i.h.writeBool },
                  full_audio: { n: 3, br: i.d.readBool, bw: i.h.writeBool },
                  subtitles: { n: 4, br: i.d.readBool, bw: i.h.writeBool },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = i.e(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(M.M(), e, t);
        }
        static fromObject(e) {
          return i.c(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new M();
          return M.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_SupportedLanguage";
        }
      }
      class B extends o {
        constructor(e = null) {
          super(),
            B.prototype.include_assets || i.a(B.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  include_assets: { n: 1, br: i.d.readBool, bw: i.h.writeBool },
                  include_release: {
                    n: 2,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  include_platforms: {
                    n: 3,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  include_all_purchase_options: {
                    n: 4,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  include_screenshots: {
                    n: 5,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  include_trailers: {
                    n: 6,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  include_ratings: {
                    n: 7,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  include_tag_count: {
                    n: 8,
                    br: i.d.readInt32,
                    bw: i.h.writeInt32,
                  },
                  include_reviews: {
                    n: 9,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  include_basic_info: {
                    n: 10,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  include_supported_languages: {
                    n: 11,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = i.e(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(B.M(), e, t);
        }
        static fromObject(e) {
          return i.c(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new B();
          return B.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreBrowseItemDataRequest";
        }
      }
      class D extends o {
        constructor(e = null) {
          super(),
            D.prototype.language || i.a(D.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  language: { n: 1, br: i.d.readString, bw: i.h.writeString },
                  elanguage: { n: 2, br: i.d.readInt32, bw: i.h.writeInt32 },
                  country_code: {
                    n: 3,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  steam_realm: { n: 4, br: i.d.readInt32, bw: i.h.writeInt32 },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = i.e(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(D.M(), e, t);
        }
        static fromObject(e) {
          return i.c(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new D();
          return D.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreBrowseContext";
        }
      }
      class R extends o {
        constructor(e = null) {
          super(),
            R.prototype.appid || i.a(R.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  appid: { n: 1, br: i.d.readUint32, bw: i.h.writeUint32 },
                  packageid: { n: 2, br: i.d.readUint32, bw: i.h.writeUint32 },
                  bundleid: { n: 3, br: i.d.readUint32, bw: i.h.writeUint32 },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = i.e(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(R.M(), e, t);
        }
        static fromObject(e) {
          return i.c(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new R();
          return R.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItemID";
        }
      }
      class T extends o {
        constructor(e = null) {
          super(),
            T.prototype.ids || i.a(T.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  ids: { n: 1, c: R, r: !0, q: !0 },
                  context: { n: 2, c: D },
                  data_request: { n: 3, c: B },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = i.e(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(T.M(), e, t);
        }
        static fromObject(e) {
          return i.c(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new T();
          return T.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetItems_Request";
        }
      }
      class I extends o {
        constructor(e = null) {
          super(),
            I.prototype.store_items || i.a(I.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: { store_items: { n: 1, c: a, r: !0, q: !0 } },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = i.e(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(I.M(), e, t);
        }
        static fromObject(e) {
          return i.c(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new I();
          return I.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetItems_Response";
        }
      }
      class x extends o {
        constructor(e = null) {
          super(),
            x.prototype.categories || i.a(x.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: { categories: { n: 1, c: k, r: !0, q: !0 } },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = i.e(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(x.M(), e, t);
        }
        static fromObject(e) {
          return i.c(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new x();
          return x.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetStoreCategories_Response";
        }
      }
      class k extends o {
        constructor(e = null) {
          super(),
            k.prototype.categoryid || i.a(k.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  categoryid: { n: 1, br: i.d.readUint32, bw: i.h.writeUint32 },
                  type: { n: 2, br: i.d.readEnum, bw: i.h.writeEnum },
                  internal_name: {
                    n: 3,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  display_name: {
                    n: 4,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  image_url: { n: 5, br: i.d.readString, bw: i.h.writeString },
                  show_in_search: { n: 6, br: i.d.readBool, bw: i.h.writeBool },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = i.e(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(k.M(), e, t);
        }
        static fromObject(e) {
          return i.c(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new k();
          return k.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetStoreCategories_Response_Category";
        }
      }
      var L;
      !(function (e) {
        (e.GetItems = function (e, t) {
          return e.SendMsg("StoreBrowse.GetItems#1", t, I, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.GetStoreCategories = function (e, t) {
            return e.SendMsg("StoreBrowse.GetStoreCategories#1", t, x, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(L || (L = {}));
    },
    sUmc: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return s;
      }),
        n.d(t, "a", function () {
          return c;
        });
      var r = n("i8i4"),
        i = n("X3Ds");
      class o {
        constructor(e) {
          this.instance = new a(e, !1);
        }
      }
      function s(e) {
        return new a(e.body, !0);
      }
      class a {
        constructor(e, t = !0) {
          (this.m_parent = e),
            (this.m_window = e.ownerDocument.defaultView),
            (this.m_bRemoveOnHide = t);
        }
        Show(e, t) {
          return (
            this.CancelShowInterval(),
            t
              ? new Promise((n, r) => {
                  this.iIntervalShow = this.m_window.setTimeout(() => {
                    let t = this.m_parent.ownerDocument;
                    t.defaultView &&
                      !t.defaultView.closed &&
                      (this.InternalShow(e), n());
                  }, t);
                })
              : (this.InternalShow(e), Promise.resolve())
          );
        }
        InternalShow(e) {
          this.m_container ||
            ((this.m_container = this.m_parent.ownerDocument.createElement(
              "div"
            )),
            this.m_parent.appendChild(this.m_container)),
            r.render(e, this.m_container);
        }
        Hide(e) {
          this.CancelShowInterval(),
            e
              ? (this.iIntervalShow = this.m_window.setTimeout(() => {
                  this.InternalHide();
                }, e))
              : this.InternalHide();
        }
        InternalHide() {
          this.m_container &&
            (r.unmountComponentAtNode(this.m_container),
            this.m_bRemoveOnHide &&
              (this.m_parent.removeChild(this.m_container),
              (this.m_container = null)));
        }
        CancelShowInterval() {
          void 0 !== this.iIntervalShow &&
            (this.m_window.clearInterval(this.iIntervalShow),
            (this.iIntervalShow = void 0));
        }
        BIsChildElement(e) {
          return this.m_container && i.e(this.m_container, e);
        }
      }
      class c {
        constructor(e) {
          (this.m_mapEmbeddedHovers = new WeakMap()), (this.m_strUniqueID = e);
        }
        ShowElementDelayed(e, t, n, r) {
          let i = this.GetEmbeddedElement(e);
          return (i.activeObject = r), i.instance.Show(n, t);
        }
        ShowElement(e, t, n) {
          let r = this.GetEmbeddedElement(e);
          (r.activeObject = n), r.instance.Show(t);
        }
        HideElement(e, t, n) {
          let r = this.GetEmbeddedElement(e);
          r.activeObject == t &&
            ((r.activeObject = void 0), r.instance.Hide(n));
        }
        GetEmbeddedElement(e) {
          let t = this.m_mapEmbeddedHovers.get(e);
          return (
            t || ((t = new o(e.body)), this.m_mapEmbeddedHovers.set(e, t)), t
          );
        }
      }
    },
    u2yL: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var r = n("75qM");
      class i extends r.a {
        GetString(e) {
          return Promise.resolve(localStorage.getItem(e));
        }
        StoreString(e, t) {
          return localStorage.setItem(e, t), Promise.resolve();
        }
        RemoveObject(e) {
          return localStorage.removeItem(e), Promise.resolve();
        }
      }
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
          return y;
        });
        var r = n("mrSG"),
          i = n("bxBv"),
          o = n("SxtR"),
          s = (n("6NF1"), n("IjL/")),
          a = n("TLQK"),
          c = n("K5Iu");
        const l =
          window.addEventListener || (e && e.addEventListener) || (() => {});
        let u,
          d = [],
          m = (e, t) => d.push({ error: e, cCallsitesToIgnore: t });
        const h = !0;
        {
          const e = console.assert;
          console.assert = (t, n, ...r) => {
            t || m(new Error(f(n, ...r)), 2), e.apply(console, [t, n, ...r]);
          };
          const t = console.error;
          (console.error = (e, ...n) => {
            m(new Error(f(e, ...n)), 1), t.apply(console, [e, ...n]);
          }),
            l("error", (e) => {
              m(e.error, 0);
            }),
            (u = window.setTimeout(() => {
              (d = []), (m = () => {});
            }, 3e4));
        }
        const p = { cCallsitesToIgnore: 0, bIncludeMessageInIdentifier: !1 };
        class g {
          constructor(e = !0) {
            (this.m_transport = null),
              (this.m_rgErrorQueue = []),
              (this.m_bEnabled = !0),
              (this.m_bInitialized = !1),
              e
                ? (d.forEach(({ error: e, cCallsitesToIgnore: t }) =>
                    this.ReportError(e, { cCallsitesToIgnore: t })
                  ),
                  (m = (e, t) =>
                    this.ReportError(e, { cCallsitesToIgnore: t })))
                : (m = () => {}),
              (d = []),
              clearTimeout(u),
              window.setTimeout(() => {
                this.m_bInitialized ||
                  ((this.m_bEnabled = !1), (this.m_rgErrorQueue = []));
              }, 3e4);
          }
          Init(e, t, n) {
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
          }
          ReportError(e, t) {
            return Object(r.a)(this, void 0, void 0, function* () {
              if (!e)
                return (
                  console.warn(
                    "Failed to report error: ReportError() was called without an error to report."
                  ),
                  null
                );
              try {
                const n = Object.assign(Object.assign({}, p), t);
                if (!this.m_bEnabled) return null;
                0;
                const i = yield (function (e, t) {
                  try {
                    return e.stack && e.stack.match(b)
                      ? (function (e, t) {
                          return Object(r.a)(
                            this,
                            void 0,
                            void 0,
                            function* () {
                              const {
                                  cCallsitesToIgnore: n,
                                  bIncludeMessageInIdentifier: r,
                                } = t,
                                i = e.stack.split("\n");
                              let o = v(i.filter((e) => !!e.match(b))[n]);
                              r && (o = `${o} ${e.message}`);
                              const s = i
                                .map((e) => {
                                  const t = e.match(/(.*)\((.*):(\d+):(\d+)\)/);
                                  if (!t) return e;
                                  if (5 === t.length) {
                                    const [e, n, r, i, o] = t,
                                      s = parseInt(i),
                                      a = parseInt(o);
                                    if (!isNaN(s) && !isNaN(a))
                                      return [n, r, s, a];
                                  }
                                  return e;
                                })
                                .filter((e) => !!e);
                              return {
                                identifier: o,
                                identifierHash: yield S(o),
                                message: s,
                              };
                            }
                          );
                        })(e, t)
                      : e.stack && e.stack.match(_)
                      ? (function (e, t) {
                          return Object(r.a)(
                            this,
                            void 0,
                            void 0,
                            function* () {
                              const {
                                  cCallsitesToIgnore: n,
                                  bIncludeMessageInIdentifier: r,
                                } = t,
                                i = e.stack.split("\n");
                              let o = v(i.filter((e) => !!e.match(_))[n]);
                              r && (o = `${o} ${e.message}`);
                              const s = i
                                .map((e) => {
                                  const t = e.match(/(.*@)?(.*):(\d+):(\d+)/);
                                  if (!t) return e;
                                  if (4 === t.length) {
                                    const [e, n, r, i] = t,
                                      o = parseInt(r),
                                      s = parseInt(i);
                                    if (!isNaN(o) && !isNaN(s))
                                      return [e, n, o, s];
                                  }
                                  return e;
                                })
                                .filter((e) => !!e);
                              return {
                                identifier: o,
                                identifierHash: yield S(o),
                                message: [e.message, ...s],
                              };
                            }
                          );
                        })(e, t)
                      : null;
                  } catch (e) {
                    return (
                      console.warn(`Failed to normalize error stack: ${e}`),
                      null
                    );
                  }
                })(e, n);
                return i ? (this.SendErrorReport(i), i) : null;
              } catch (e) {
                return console.log(`Failed to report error: ${e}`), null;
              }
            });
          }
          SendErrorReport(e) {
            this.m_transport
              ? this.SendErrorReports([e])
              : this.m_rgErrorQueue.push(e);
          }
          SendErrorReports(e) {
            if (!e || !e.length) return;
            const t = i.b.Init(o.a),
              n = e.reduce(
                (e, t) => (
                  e[t.identifier]
                    ? e[t.identifier].count++
                    : (e[t.identifier] = { report: t, count: 1 }),
                  e
                ),
                {}
              ),
              r = Object.keys(n).map((e) => {
                const { report: t, count: r } = n[e],
                  i = new o.b();
                return (
                  i.set_count(r),
                  i.set_identifier(t.identifier + " " + t.identifierHash),
                  i.set_message(JSON.stringify(t.message)),
                  i
                );
              });
            t.Body().set_product(this.m_strProduct),
              t.Body().set_version(this.m_strVersion),
              t.Body().set_errors(r),
              o.c.ReportClientError(this.m_transport, t);
          }
          get version() {
            return this.m_strVersion;
          }
          get product() {
            return this.m_strProduct;
          }
          get reporting_enabled() {
            return h;
          }
        }
        function f(e, ...t) {
          if ("string" == typeof e && 0 === t.length) return e;
          return [e, ...t]
            .map((e) => {
              try {
                return String(e);
              } catch (e) {
                return "[Stringify Error]";
              }
            })
            .join(", ");
        }
        const b = /^\s*at .*(\S+:\d+|\(native\))/m,
          _ = /(^|@)\S+:\d+/;
        function v(e) {
          return (function (e) {
            const t = "https://",
              n = e.indexOf(t);
            if (-1 === n) return e;
            const r = e.indexOf("/", n + t.length);
            return -1 === r ? e : e.slice(0, n) + e.slice(r);
          })(
            (function (e) {
              const t = e.lastIndexOf("?");
              if (-1 === t) return e;
              const n = e.indexOf(":", t);
              return -1 === n ? e : e.slice(0, t) + e.slice(n);
            })(e)
          );
        }
        let w;
        const y = () => (w || C(new g()), w),
          C = (e) => {
            (w = e),
              s.a.InstallErrorReportingStore(w),
              i.a.InstallErrorReportingStore(w),
              a.b.InstallErrorReportingStore(w),
              c.b.InstallErrorReportingStore(w);
          };
        function S(e) {
          return Object(r.a)(this, void 0, void 0, function* () {
            try {
              const n = yield window.crypto.subtle.digest(
                "SHA-256",
                (function (e) {
                  const t = new ArrayBuffer(2 * e.length),
                    n = new Uint16Array(t);
                  for (let t = 0, r = e.length; t < r; t++)
                    n[t] = e.charCodeAt(t);
                  return t;
                })(e)
              );
              return ((t = n),
              Array.prototype.map
                .call(new Uint8Array(t), (e) =>
                  ("00" + e.toString(16)).slice(-2)
                )
                .join("")).slice(0, 16);
            } catch (e) {
              return "";
            }
            var t;
          });
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
        return B;
      }),
        n.d(t, "d", function () {
          return D;
        }),
        n.d(t, "b", function () {
          return R;
        }),
        n.d(t, "f", function () {
          return x;
        }),
        n.d(t, "a", function () {
          return k;
        }),
        n.d(t, "e", function () {
          return L;
        }),
        n.d(t, "g", function () {
          return N;
        });
      var r = n("mrSG"),
        i = n("TyAF"),
        o = n("q1tI"),
        s = n("i8i4"),
        a = n("TtDX"),
        c = (n("5h11"), n("JMS6")),
        l = n("av+R"),
        u = n("qDk6"),
        d = n("BaVA"),
        m = (n("NxAk"), n("j+5p"));
      n("rHSA");
      const h = Object.seal({ onMoveUp: p, onMoveDown: p });
      Object.seal({ onMoveRight: p, onMoveLeft: p });
      function p(e, t) {
        if (e.is_repeat) return !1;
        const n = t.GetRelativeDirection(e.button);
        return n == m.b.FORWARD
          ? t.BFocusFirstChild(d.c.GAMEPAD)
          : n == m.b.BACKWARD && t.BFocusLastChild(d.c.GAMEPAD);
      }
      var g = n("gQFo"),
        f = n("d1jy"),
        b = n("6Y59"),
        _ = n("exH9"),
        v = n("D4wO"),
        w = n("X3Ds"),
        y = n("TLQK"),
        C = n("opsS"),
        S = n("lkRc"),
        E = n("+jbA"),
        O = n.n(E);
      const M = Object(g.a)("ContextMenuInstanceContext", () =>
        o.createContext(null)
      );
      let B = class extends o.Component {
        constructor() {
          super(...arguments), (this.m_navRef = Object(l.a)());
        }
        componentDidMount() {
          var e;
          this.context &&
            ((this.context.m_refContextMenu = this),
            this.context.SetLabel(this.props.label)),
            null === (e = this.m_navRef.current) ||
              void 0 === e ||
              e.TakeFocus();
        }
        componentDidUpdate(e) {
          e.label !== this.props.label &&
            this.context &&
            this.context.SetLabel(this.props.label);
        }
        HideIfSubmenu() {
          return !!this.context.BIsSubMenu() && (this.context.HideSelf(), !0);
        }
        HideMenu() {
          return (
            this.context.BIsSubMenu()
              ? this.context.HideSelf()
              : this.context.Hide(),
            !0
          );
        }
        render() {
          var e, t;
          let n = this.props,
            {
              children: i,
              className: s,
              label: a,
              onCancel: c,
              cancelText: l,
            } = n,
            d = Object(r.c)(n, [
              "children",
              "className",
              "label",
              "onCancel",
              "cancelText",
            ]);
          const p =
            null !==
              (t =
                null === (e = this.context) || void 0 === e
                  ? void 0
                  : e.styles) && void 0 !== t
              ? t
              : O.a;
          let g = null != l ? l : "#Button_Cancel";
          if (this.context && 1 == this.context.presentation) {
            const e = () => {
              c && c(), this.context.Hide();
            };
            return o.createElement(
              u.a,
              Object.assign(
                {},
                d,
                {
                  className: Object(_.a)(
                    p.contextMenuContents,
                    { [p.hasSubMenu]: this.context.BIsSubMenuVisible() },
                    s
                  ),
                  "flow-children": "column",
                  onMoveLeft: this.HideIfSubmenu,
                  onCancel: this.context.BIsSubMenu() ? this.HideMenu : e,
                  style: {
                    overflowY: this.context.BIsSubMenuVisible()
                      ? "hidden"
                      : void 0,
                  },
                  navEntryPreferPosition: m.d.PREFERRED_CHILD,
                  navRef: this.m_navRef,
                },
                h
              ),
              i,
              !this.context.BIsSubMenu() &&
                o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(T, null),
                  o.createElement(
                    D,
                    { className: p.Cancel, onSelected: e },
                    Object(y.f)(g)
                  )
                ),
              this.context.BIsSubMenuVisible() &&
                o.createElement("div", {
                  className: p.contextMenuFade,
                  onClick: () => this.context.HideSubMenu(),
                })
            );
          }
          {
            const e =
              this.context &&
              this.context.options &&
              this.context.options.bUseWebStyles;
            return o.createElement(
              "div",
              Object.assign({}, d, {
                className: Object(_.a)(
                  {
                    popup_menu: e,
                    popup_body: e,
                    [p.contextMenuContents]: !e,
                    [p.hasSubMenu]:
                      this.context && this.context.BIsSubMenuVisible(),
                  },
                  s
                ),
              }),
              i
            );
          }
        }
      };
      (B.contextType = M),
        Object(r.b)([C.a], B.prototype, "HideIfSubmenu", null),
        Object(r.b)([C.a], B.prototype, "HideMenu", null),
        (B = Object(r.b)([i.a], B));
      class D extends o.PureComponent {
        constructor() {
          super(...arguments),
            (this.m_ref = o.createRef()),
            (this.m_refDiv = o.createRef());
        }
        get element() {
          return this.m_refDiv.current;
        }
        OnClick(e) {
          this.props.disabled
            ? S.c.IN_GAMEPADUI && f.a.PlayNavSound(f.b.FailedNav)
            : (this.props.onClick && this.props.onClick(e),
              this.props.bInteractableItem ||
                (this.props.onSelected && this.props.onSelected(e),
                this.context && this.context.Hide()));
        }
        OnOKButton(e) {
          this.m_refDiv.current.click();
        }
        OnMouseEnter(e) {
          this.context &&
            0 == this.context.presentation &&
            this.context.HideSubMenu();
        }
        Focus() {
          this.m_ref.current
            ? this.m_ref.current.TakeFocus()
            : this.m_refDiv.current && this.m_refDiv.current.focus();
        }
        render() {
          var e, t;
          const n = this.props,
            { onSelected: i, bInteractableItem: s, onMoveRight: a } = n,
            c = Object(r.c)(n, [
              "onSelected",
              "bInteractableItem",
              "onMoveRight",
            ]),
            l =
              null !==
                (t =
                  null === (e = this.context) || void 0 === e
                    ? void 0
                    : e.styles) && void 0 !== t
                ? t
                : O.a;
          if (this.context && 1 == this.context.presentation)
            return o.createElement(
              u.a,
              Object.assign(
                {
                  noFocusRing: !0,
                  preferredFocus: this.props.selected,
                  ref: this.m_refDiv,
                  navRef: this.m_ref,
                  onMouseEnter: this.OnMouseEnter,
                },
                c,
                {
                  className: Object(_.a)(
                    this.props.className,
                    l.contextMenuItem,
                    "contextMenuItem",
                    this.props.disabled && "disabled",
                    this.props.selected && l.Selected,
                    "positive" == this.props.tone && l.Positive,
                    "emphasis" == this.props.tone && l.Emphasis,
                    "destructive" == this.props.tone && l.Destructive
                  ),
                  focusClassName: l.Focused,
                  onClick: this.OnClick,
                  onOKButton: this.OnOKButton,
                  onMoveRight: a,
                  unselectable: this.props.unselectable,
                }
              ),
              this.props.children
            );
          {
            const e =
              this.context &&
              this.context.options &&
              this.context.options.bUseWebStyles;
            return o.createElement(
              "div",
              Object.assign(
                { ref: this.m_refDiv, onMouseEnter: this.OnMouseEnter },
                c,
                {
                  onClick: this.OnClick,
                  unselectable: this.props.unselectable,
                  className: Object(_.a)(this.props.className, {
                    popup_menu_item: e,
                    [l.contextMenuItem]: !e,
                    contextMenuItem: !e,
                    disabled: !!this.props.disabled,
                  }),
                }
              ),
              this.props.children
            );
          }
        }
      }
      (D.contextType = M),
        Object(r.b)([C.a], D.prototype, "OnClick", null),
        Object(r.b)([C.a], D.prototype, "OnOKButton", null),
        Object(r.b)([C.a], D.prototype, "OnMouseEnter", null),
        Object(r.b)([C.a], D.prototype, "Focus", null);
      class R extends o.PureComponent {
        render() {
          const e = this.props,
            { bChecked: t, children: n, className: i } = e,
            s = Object(r.c)(e, ["bChecked", "children", "className"]);
          return o.createElement(
            D,
            Object.assign({}, s, {
              className: Object(_.a)(i, t && "menuChecked"),
            }),
            o.createElement("div", { className: "contextMenuCheckMark" }),
            n
          );
        }
      }
      function T(e) {
        var t;
        const n = o.useContext(M),
          r =
            null !== (t = null == n ? void 0 : n.styles) && void 0 !== t
              ? t
              : O.a;
        return o.createElement("div", { className: r.ContextMenuSeparator });
      }
      class I extends o.PureComponent {
        constructor(e) {
          super(e),
            (this.m_refItem = o.createRef()),
            (this.state = { bActive: !1 });
        }
        OnSubMenuMouseEnter() {
          this.context && this.context.CancelHideSubMenuTimer();
        }
        OnSubMenuHidden() {
          this.setState({ bActive: !1 }),
            S.c.IN_GAMEPADUI &&
              this.context &&
              1 == this.context.presentation &&
              this.m_refItem.current &&
              this.m_refItem.current.Focus();
        }
        ShowSubMenu(e) {
          if (this.context) {
            const t = e || this.m_refItem.current.element;
            let n = this.context.ShowSubMenu(t, this.RenderSubMenu);
            if (n)
              return (
                this.setState({ bActive: !0 }),
                n.SetOnHideCallback(this.OnSubMenuHidden),
                !0
              );
          }
          return !1;
        }
        RenderSubMenu() {
          return o.createElement(
            B,
            { onMouseEnter: this.OnSubMenuMouseEnter, label: this.props.label },
            this.props.children
          );
        }
        OnMouseEnter(e) {
          this.context &&
            0 == this.context.presentation &&
            this.ShowSubMenu(e.currentTarget);
        }
        OnClick(e) {
          this.OnMouseEnter(e),
            this.props.onClick && this.props.onClick(e),
            S.c.IN_GAMEPADUI &&
              this.context &&
              1 == this.context.presentation &&
              this.ShowSubMenu(e.currentTarget);
        }
        render() {
          var e, t;
          let n = this.props,
            { label: i, selectedWithin: s, children: a, className: c } = n,
            l = Object(r.c)(n, [
              "label",
              "selectedWithin",
              "children",
              "className",
            ]);
          const u =
            null !==
              (t =
                null === (e = this.context) || void 0 === e
                  ? void 0
                  : e.styles) && void 0 !== t
              ? t
              : O.a;
          return o.createElement(
            D,
            Object.assign({}, l, {
              ref: this.m_refItem,
              onClick: this.OnClick,
              selected: s && !this.state.bActive,
              className: Object(_.a)(
                c,
                u.SubMenu,
                this.state.bActive && u.active
              ),
              onMouseEnter: this.OnMouseEnter,
              onSelected: null,
              bInteractableItem: !0,
              onMoveRight: () => this.ShowSubMenu(),
            }),
            o.createElement("div", { className: u.Label }, i),
            o.createElement(
              "div",
              { className: u.Arrow },
              o.createElement(b.s, null)
            )
          );
        }
      }
      (I.contextType = M),
        Object(r.b)([C.a], I.prototype, "OnSubMenuMouseEnter", null),
        Object(r.b)([C.a], I.prototype, "OnSubMenuHidden", null),
        Object(r.b)([C.a], I.prototype, "ShowSubMenu", null),
        Object(r.b)([C.a], I.prototype, "RenderSubMenu", null),
        Object(r.b)([C.a], I.prototype, "OnMouseEnter", null),
        Object(r.b)([C.a], I.prototype, "OnClick", null);
      let x = class extends o.Component {
        constructor(e) {
          super(e),
            (this.m_elMenu = void 0),
            (this.m_cReenteranceGuard = 1),
            (this.state = {
              ready: !1,
              menuLeft: void 0,
              menuTop: void 0,
              menuRight: void 0,
              menuBottom: void 0,
              menuWidth: void 0,
              menuHeight: void 0,
            }),
            (this.m_mutationObserver = new MutationObserver(
              this.OnMenuMutation
            ));
        }
        BindMenuElement(e) {
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
              this.setState({ ready: !0 }, () => {
                this.TakeFocus();
              }));
        }
        OnMenuMutation(e, t) {
          this.PositionMenu();
        }
        OnWindowResize() {
          this.PositionMenu();
        }
        OnBlur(e) {
          (e.relatedTarget && w.e(e.currentTarget, e.relatedTarget)) ||
            (e.relatedTarget &&
              this.props.instance.BIsElementInMenuHierarchy(e.relatedTarget)) ||
            this.props.instance.BIsSubMenuVisible() ||
            (this.state.ready &&
              this.props.instance.visible &&
              this.props.instance.Hide());
        }
        OnKeyDown(e) {
          27 == e.keyCode &&
            this.state.ready &&
            (this.props.instance.Hide(),
            e.preventDefault(),
            e.stopPropagation());
        }
        componentDidUpdate() {
          this.m_cReenteranceGuard-- > 0
            ? this.PositionMenu()
            : (this.m_cReenteranceGuard = 2);
        }
        TakeFocus() {
          if (
            this.m_elMenu &&
            this.state.ready &&
            this.props.instance.visible &&
            (this.props.popup ||
              !w.e(this.m_elMenu, this.m_elMenu.ownerDocument.activeElement))
          ) {
            let e = this.m_elMenu.querySelector(".ContextMenuAutoFocus");
            e && e.focus ? e.focus() : this.m_elMenu.focus();
          }
        }
        PositionMenu() {
          let e = this.m_elMenu,
            t = this.props.element;
          if (!e || !t) return;
          let n = t.ownerDocument.defaultView;
          if ("none" === n.getComputedStyle(t).display) return;
          let r = t.getBoundingClientRect(),
            i = e.getBoundingClientRect(),
            o = null != this.props.popup;
          const s = this.props.options;
          let a = {
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
            d = n.innerHeight;
          if (o) {
            this.props.options.bScreenCoordinates ||
              ((c += n.screenLeft), (l += n.screenTop)),
              (r = w.h(n, r));
            let e = n.screen,
              t = 0,
              i = 0;
            e.availLeft && (t = e.availLeft),
              e.availTop && (i = e.availTop),
              (u = t + e.availWidth),
              (d = i + e.availHeight);
          }
          (s.bOverlapHorizontal || s.bOverlapVertical) && (c = l = void 0);
          let m = c || r.left,
            h = c || r.right,
            p = i.width;
          s.bMatchWidth && ((p = h - m), (a.menuWidth = p));
          let g = (s.bOverlapHorizontal ? h : m) - p,
            f = g > 0,
            b = u - (s.bOverlapHorizontal ? m : h) - p,
            _ = b > 0,
            v = (s.bPreferPopLeft || !_) && f;
          f ||
            _ ||
            ((v = f > _),
            s.bFitToWindow && ((p += (v ? g : b) - 8), (a.menuWidth = p))),
            (!s.bPreferPopLeft && _) || !f
              ? (a.menuLeft = s.bOverlapHorizontal ? m : h)
              : (a.menuRight = u - (s.bOverlapHorizontal ? h : m));
          let y = l || r.top,
            C = l || r.bottom,
            S = e.scrollHeight;
          s.bMatchHeight && ((S = C - y), (a.menuHeight = S));
          let E = (s.bOverlapVertical ? C : y) - S,
            O = E > 0,
            M = d - (s.bOverlapVertical ? y : C) - S,
            B = M > 0,
            D = (s.bPreferPopTop || !B) && O && !s.bDisablePopTop;
          if (!O && !B) {
            const e =
              void 0 !== s.bShiftToFitWindow
                ? s.bShiftToFitWindow
                : s.bFitToWindow && !s.bOverlapHorizontal;
            (D = E > M && !s.bDisablePopTop),
              e && (D ? (a.menuTop = 4) : (a.menuBottom = 4)),
              s.bFitToWindow &&
                (e ? (S = Math.min(S, d - 8)) : (S += D ? E : M),
                (a.menuHeight = S - 8));
          }
          void 0 === a.menuBottom &&
            void 0 === a.menuTop &&
            (D
              ? (a.menuBottom = d - (s.bOverlapVertical ? C : y))
              : (a.menuTop = s.bOverlapVertical ? y : C)),
            o
              ? (a.menuHeight || (a.menuHeight = i.height),
                a.menuWidth || (a.menuWidth = i.width),
                a.menuBottom &&
                  !a.menuTop &&
                  ((a.menuTop = d - a.menuBottom - a.menuHeight),
                  (a.menuBottom = void 0)),
                a.menuRight &&
                  !a.menuLeft &&
                  ((a.menuLeft = u - a.menuRight - a.menuWidth),
                  (a.menuRight = void 0)))
              : (a.menuLeft && (a.menuLeft += n.scrollX),
                a.menuTop && (a.menuTop += n.scrollY),
                a.menuBottom &&
                  (a.menuBottom +=
                    n.document.body.clientHeight - n.scrollY - n.innerHeight),
                a.menuRight &&
                  (a.menuRight +=
                    n.document.body.clientWidth - n.scrollX - n.innerWidth)),
            (a.menuLeft === this.state.menuLeft &&
              a.menuRight === this.state.menuRight &&
              a.menuTop === this.state.menuTop &&
              a.menuBottom === this.state.menuBottom &&
              a.menuWidth === this.state.menuWidth &&
              a.menuHeight === this.state.menuHeight) ||
              this.setState(a);
        }
        render() {
          let e = { visibility: this.state.ready ? "visible" : "hidden" };
          if (this.props.popup) {
            let e = this.props.element.ownerDocument.defaultView;
            void 0 !== this.state.menuLeft &&
              void 0 !== this.state.menuTop &&
              void 0 !== this.state.menuWidth &&
              void 0 !== this.state.menuHeight &&
              e.SteamClient.Window.GetWindowRestoreDetails((t) => {
                let n = this.props.popup.window,
                  r = this.state.menuLeft - e.screenX,
                  i = this.state.menuTop - e.screenY;
                try {
                  n.SteamClient.Window.PositionWindowRelative(
                    t,
                    r,
                    i,
                    this.state.menuWidth,
                    this.state.menuHeight
                  );
                } catch (e) {
                  console.error(e);
                }
              });
          } else
            void 0 !== this.state.menuTop
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
                (e.width = this.state.menuWidth);
          let t =
            this.props.options.strClassName ||
            (this.props.options.bUseWebStyles
              ? "popup_block_new popup_block_hidden_until_visible"
              : O.a.contextMenu);
          return (
            this.props.instance.visible &&
              this.state.ready &&
              (t += " visible"),
            (t += " " + O.a.ContextMenuFocusContainer),
            o.createElement(
              M.Provider,
              { value: this.props.instance },
              o.createElement(
                "div",
                {
                  className: t,
                  ref: this.BindMenuElement,
                  style: e,
                  onBlur: this.OnBlur,
                  onKeyDown: this.OnKeyDown,
                  tabIndex: 0,
                },
                this.props.children
              )
            )
          );
        }
      };
      Object(r.b)([C.a], x.prototype, "BindMenuElement", null),
        Object(r.b)(
          [C.a, Object(v.a)(100)],
          x.prototype,
          "OnMenuMutation",
          null
        ),
        Object(r.b)([C.a], x.prototype, "OnWindowResize", null),
        Object(r.b)([C.a], x.prototype, "OnBlur", null),
        Object(r.b)([C.a], x.prototype, "OnKeyDown", null),
        (x = Object(r.b)([i.a], x));
      class k extends c.a {
        constructor(e, t, n) {
          super("contextmenu_" + k.sm_iContextMenuInstance++, {
            title: "Menu",
            html_class: O.a.ContextMenuPopup + " client_chat_frame",
            body_class: "ContextMenuPopupBody",
            replace_existing_popup: !1,
            target_browser: n,
            eCreationFlags: c.b.ContextMenu,
          }),
            (this.m_menuProps = e),
            (this.m_children = t);
        }
        UpdateParamsBeforeShow(e) {
          if (this.m_menuProps.options.bScreenCoordinates)
            e.dimensions = {
              left: this.m_menuProps.clientX,
              top: this.m_menuProps.clientY,
              width: 350,
              height: 1,
            };
          else {
            let t = w.h(
              this.m_menuProps.element.ownerDocument.defaultView,
              this.m_menuProps.element.getBoundingClientRect()
            );
            e.dimensions = { left: t.right, top: t.top, width: 350, height: 1 };
          }
          return (
            (e.availscreenwidth = this.m_menuProps.element.ownerDocument.defaultView.screen.availWidth),
            (e.availscreenheight = this.m_menuProps.element.ownerDocument.defaultView.screen.availHeight),
            e
          );
        }
        Render(e, t) {
          s.render(
            o.createElement(
              x,
              Object.assign({}, this.m_menuProps, { popup: this }),
              this.m_children
            ),
            t
          );
        }
        OnBlur() {}
        OnFocus() {}
        OnLoad() {}
        OnResize() {}
        OnClose() {}
      }
      function L(e) {
        return o.createElement("div", {
          className: O.a.ContextMenuMouseOverlay,
        });
      }
      function N(e) {
        let t = [],
          n = w.o(e),
          r = n.getSelection(),
          i = r && r.rangeCount > 0 && r.toString().length > 0,
          s = e.target,
          c = !1;
        if (
          (s &&
            "tagName" in s &&
            (("INPUT" != s.tagName && "TEXTAREA" != s.tagName) || (c = !0)),
          S.c.IN_CLIENT &&
            c &&
            n.SteamClient._internal &&
            n.SteamClient._internal.GetSpellingSuggestions &&
            n.SteamClient._internal.AddWordToDictionary)
        ) {
          let [e, ...r] = n.SteamClient._internal.GetSpellingSuggestions(),
            i = s;
          if (
            (i &&
              r.forEach((e, r) => {
                t.push(
                  o.createElement(
                    D,
                    {
                      key: `spelling_${r}_${e}`,
                      onSelected: () => {
                        i.setRangeText(e),
                          (function (e, t) {
                            let n = t.createEvent("HTMLEvents");
                            n.initEvent("change", !0, !1), e.dispatchEvent(n);
                          })(i, n.document),
                          i.setSelectionRange(i.selectionEnd, i.selectionEnd),
                          s.focus();
                      },
                      className: O.a.NoSeparation,
                    },
                    e
                  )
                );
              }),
            e)
          ) {
            const r = 30;
            (e = e.trim()),
              t.push(
                o.createElement(
                  D,
                  {
                    key: `addtodictionary_${e}`,
                    onSelected: () =>
                      n.SteamClient._internal.AddWordToDictionary(e),
                  },
                  Object(y.f)(
                    "#ContextMenu_AddToDictionary",
                    e.length < r ? e : e.substring(0, r) + "..."
                  )
                )
              );
          }
        }
        if (
          ((n.document.queryCommandEnabled("cut") || (i && c)) &&
            t.push(
              o.createElement(
                D,
                {
                  key: "cut",
                  onSelected: () => {
                    n.document.execCommand("cut");
                  },
                },
                Object(y.f)("#ContextMenu_Cut")
              )
            ),
          (n.document.queryCommandEnabled("copy") || i) &&
            t.push(
              o.createElement(
                D,
                {
                  key: "copy",
                  onSelected: () => {
                    n.document.execCommand("copy");
                  },
                  className: O.a.NoSeparation,
                },
                Object(y.f)("#ContextMenu_Copy")
              )
            ),
          S.c.IN_CLIENT &&
            c &&
            n.SteamClient._internal &&
            n.SteamClient._internal.Paste &&
            t.push(
              o.createElement(
                D,
                {
                  key: "paste",
                  onSelected: () => {
                    s.focus(), n.SteamClient._internal.Paste();
                  },
                  className: O.a.NoSeparation,
                },
                Object(y.f)("#ContextMenu_Paste")
              )
            ),
          t.length)
        )
          Object(a.a)(o.createElement(B, null, t), e);
        else {
          if (e.shiftKey) return;
          e.preventDefault(), e.stopPropagation();
        }
      }
      k.sm_iContextMenuInstance = 0;
    },
    yLGM: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return m;
      });
      var r = n("q1tI"),
        i = n.n(r),
        o = n("exH9"),
        s = n("bDQf"),
        a = (n("BaVA"), n("NxAk"), n("j+5p"), n("BC0X")),
        c = n("8+ko"),
        l = n.n(c),
        u = n("opsS");
      const d = new s.a("FocusNavigation").Debug;
      function m(e) {
        const {
            className: t,
            rootClassName: n,
            render: r,
            children: s,
            NavigationManager: c,
          } = e,
          d = i.a.useRef(),
          [m, p] = i.a.useState({
            bFocusWithin: !1,
            navTarget: null,
            prevTarget: null,
          }),
          g = Object(u.h)(null == c ? void 0 : c.GetShowDebugFocusRing()),
          f = i.a.useRef(),
          b = i.a.useMemo(
            () => ({
              OnBlur: (e, t, n) => {
                p({ bFocusWithin: !1, navTarget: null, prevTarget: null });
              },
              OnFocus: (e, t, n) => {
                p({ bFocusWithin: !0, navTarget: t, prevTarget: null });
              },
              OnFocusChange: (e, t, n) => {
                p({ bFocusWithin: !0, navTarget: n, prevTarget: t });
              },
              OnForceMeasureFocusRing: () => {
                var e;
                null === (e = f.current) ||
                  void 0 === e ||
                  e.MeasureElementAndUpdate();
              },
            }),
            [p]
          );
        let { bFocusWithin: _, navTarget: v, prevTarget: w } = m;
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            "div",
            { className: Object(o.a)(l.a.FocusRingRoot, n), ref: d },
            i.a.createElement(h, {
              ref: f,
              className: Object(o.a)(t, g && l.a.DebugFocusRing),
              render: r,
              bFocusWithin: _,
              navTarget: v,
              refContainer: d,
              bDebug: g,
            })
          ),
          i.a.createElement(a.d.Provider, { value: b }, s)
        );
      }
      const h = i.a.forwardRef((e, t) => {
        const {
            className: n,
            render: s,
            bFocusWithin: a,
            navTarget: c,
            refContainer: u,
            bDebug: m,
          } = e,
          [h, g] = i.a.useState(c),
          [f, b] = i.a.useState(null),
          [_, v] = i.a.useState(!1),
          [w, y] = i.a.useState(!1),
          C = i.a.useRef(performance.now()),
          S = Object(r.useCallback)(() => {
            if (!c || !c.BWantsFocusRing()) return null != f && (b(null), !0);
            let e = c.GetBoundingRect();
            const t = u.current.getBoundingClientRect();
            if (m) {
              let t = c.Element;
              const n = t.ownerDocument.defaultView,
                r = (t) =>
                  "none" == n.getComputedStyle(t).display ||
                  (0 == e.width && 0 == e.height && 0 == e.x && 0 == e.y);
              for (; r(t) && t.parentElement; )
                (t = t.parentElement), (e = t.getBoundingClientRect());
              let i = c.Element != t;
              i != w &&
                (y(i),
                i &&
                  d(
                    "Focused on hidden item: ",
                    c.Element,
                    ". Closest visible ancestor: ",
                    t
                  ));
            }
            const n = {
              left: e.x - t.x,
              top: e.y - t.y,
              height: e.height,
              width: e.width,
            };
            return (
              (!f ||
                n.left != f.left ||
                n.top != f.top ||
                n.height != f.height ||
                n.width != f.width) &&
              (b(n), !0)
            );
          }, [c, u, b, f, w, y, m]);
        i.a.useImperativeHandle(t, () => ({ MeasureElementAndUpdate: S }), [S]);
        let E = a,
          O = f || {};
        c && u.current && (c.BWantsFocusRing() || (E = !1)),
          c != h && (g(c), (C.current = performance.now()), S(), _ && v(!1)),
          i.a.useEffect(() => {
            if (!E || performance.now() - C.current > 500) return;
            let e;
            const t = () => {
              e = requestAnimationFrame(() => {
                S() ? v(!0) : performance.now() - C.current <= 500 && t();
              });
            };
            return t(), () => cancelAnimationFrame(e);
          });
        const M = s || p;
        return i.a.createElement(
          M,
          Object.assign({}, O, {
            visible: E && null !== f,
            key: C.current,
            className: Object(o.a)(n, w && l.a.FocusRingOnHiddenItem),
            animationEnabled: !_,
            target: c,
          })
        );
      });
      function p(e) {
        const {
          className: t,
          visible: n,
          left: r,
          top: s,
          height: a,
          width: c,
          target: u,
          animationEnabled: d,
        } = e;
        if (!n) return null;
        const m = {
          left: r - 0 + "px",
          top: s - 0 + "px",
          height: a + "px",
          width: c + "px",
        };
        return i.a.createElement("div", {
          className: Object(o.a)(l.a.FocusRing, d && l.a.Animated, t),
          style: m,
        });
      }
    },
    z7tf: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      }),
        n.d(t, "b", function () {
          return a;
        });
      var r = n("q1tI"),
        i = n.n(r),
        o = n("gQFo");
      const s = Object(o.a)("DialogPresentationContext", () =>
          i.a.createContext({})
        ),
        a = () => i.a.useContext(s);
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
  [["gfbn", 130, 0]],
]);

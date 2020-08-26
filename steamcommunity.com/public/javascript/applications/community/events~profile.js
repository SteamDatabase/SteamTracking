/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    "+d9t": function(e, t, n) {
      "use strict";
      n.d(t, "c", function() {
        return u;
      }),
        n.d(t, "a", function() {
          return l;
        }),
        n.d(t, "b", function() {
          return f;
        });
      var o = n("mrSG"),
        a = n("q1tI"),
        r = n("y+6m"),
        i = n("TLQK"),
        c = n("X3Ds"),
        s = n("TtDX");
      function u(e, t) {
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
      function l(e) {
        var t = e.bDisableContextMenu,
          n = e.onContextMenu,
          r = e.href,
          i = Object(o.f)(e, ["bDisableContextMenu", "onContextMenu", "href"]);
        return (
          t || n || (n = d),
          a.createElement(
            "a",
            Object(o.a)({}, i, {
              href: r,
              target: "_blank",
              rel: "noopener noreferrer",
              onContextMenu: n
            }),
            e.children
          )
        );
      }
      function m(e) {
        var t = e.strURL,
          n = e.unPID;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            r.d,
            {
              onSelected: function() {
                c.h(t);
              }
            },
            Object(i.d)("#ContextMenu_CopyLinkURL")
          ),
          a.createElement(
            r.d,
            {
              onSelected: function(e) {
                f(e, t, { unPID: n });
              }
            },
            Object(i.d)("#ContextMenu_OpenLinkInNewWindow")
          )
        );
      }
      function d(e, t) {
        var n = e.currentTarget;
        return Object(s.a)(
          a.createElement(
            r.c,
            null,
            a.createElement(m, { strURL: n.href, unPID: t })
          ),
          e
        );
      }
      function f(e, t, n) {
        void 0 === n && (n = {});
        var r = n.bForceExternal,
          i = n.unPID,
          o =
            "currentTarget" in e
              ? e.currentTarget.ownerDocument.defaultView
              : e;
        "undefined" != typeof SteamClient && void 0 !== SteamClient.WebChat
          ? SteamClient.WebChat.OpenURLInClient(t, i || 0, !!r)
          : 0 == t.indexOf("steam://") &&
            0 != t.indexOf("steam://remoteplay/connect")
          ? (o.location.href = t)
          : o.open(
              t,
              null,
              "menubar,location,resizable,scrollbars,status,noopener"
            );
      }
    },
    "0QoN": function(e, t, n) {
      "use strict";
      var r = n("mrSG"),
        i = n("q1tI"),
        c = n.n(i),
        o = n("TyAF"),
        a = n("bxiW"),
        s = n("TtDX"),
        u = n("Gorr"),
        l = n("6Y59"),
        m = n("TLQK"),
        d = n("exH9"),
        f = n("Z9dU"),
        p = n.n(f),
        h = 1576780700,
        b = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.OnEmoticonClick = function(e) {
              var t,
                n = this,
                r = this.props,
                i = (r.emoticonStore, r.SetUIDisplayPref),
                o = r.contextOptions,
                a = r.bShowChatAddons
                  ? c.a.createElement(u.a, {
                      emoticonStore: this.props.emoticonStore,
                      emoticonHoverStore: this.props.emoticonHoverStore,
                      strFlairGroupID: this.props.strFlairGroupID,
                      onEmoticonSelected: function(e) {
                        return n.props.OnEmoticonSelected(e, !1);
                      },
                      roomEffectSettings: this.props.roomEffectSettings,
                      onRoomEffectSelected: this.props.onRoomEffectSelected,
                      onStickerSelected: this.props.onStickerSelected
                    })
                  : c.a.createElement(u.c, {
                      emoticonStore: this.props.emoticonStore,
                      emoticonHoverStore: this.props.emoticonHoverStore,
                      strFlairGroupID: this.props.strFlairGroupID,
                      OnSelected: this.props.OnEmoticonSelected
                    });
              Object(s.a)(
                a,
                e,
                o || {
                  bOverlapHorizontal: !0,
                  bPreferPopLeft: !0,
                  bPreferPopTop: !0
                }
              ),
                this.BHaveUnseenEmoticons() &&
                  i &&
                  ((!(t = this.GetNewestIndicatorTime()) || t < h) && (t = h),
                  i("rtLastAckedNewEmoticons", t));
            }),
            (t.prototype.GetNewestIndicatorTime = function() {
              var e = this.props.emoticonStore,
                t = Number.MIN_SAFE_INTEGER,
                n = e.GetTimeReceivedNewestEmoticon();
              n && (t = n);
              var r = e.GetTimeReceivedForStickerOrEffect();
              return (t = Math.max(r, t)) > Number.MIN_SAFE_INTEGER
                ? t
                : void 0;
            }),
            (t.prototype.BHaveUnseenEmoticons = function() {
              var e = this.props.rtLastAckedNewEmoticons,
                t = this.GetNewestIndicatorTime();
              return !e || e < h || (t && (!e || e < t));
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.disabled,
                n = e.className,
                r = e.ttip,
                i = e.useImg,
                o = [n],
                a = !1;
              return (
                t
                  ? o.push("disabled")
                  : this.BHaveUnseenEmoticons() && (a = !0),
                r && o.push("ttip"),
                i
                  ? c.a.createElement(
                      "span",
                      { onClick: this.OnEmoticonClick },
                      c.a.createElement("img", {
                        src: this.props.useImg,
                        className: d.a.apply(void 0, o),
                        title:
                          this.props.title ||
                          Object(m.d)("#ChatEntryButton_Emoticon"),
                        "data-tooltip-text": r
                      })
                    )
                  : (o.push(p.a.chatSubmitButton, p.a.EmoticonPickerButton),
                    c.a.createElement(
                      "button",
                      {
                        className: d.a.apply(void 0, o),
                        type: "button",
                        onClick: this.OnEmoticonClick,
                        title:
                          this.props.title ||
                          Object(m.d)("#ChatEntryButton_Emoticon"),
                        disabled: t,
                        "data-tooltip-text": r
                      },
                      this.props.buttonIcon || c.a.createElement(l.l, null),
                      a && c.a.createElement(u.d, null)
                    ))
              );
            }),
            Object(r.c)([a.a], t.prototype, "OnEmoticonClick", null),
            (t = Object(r.c)([o.a], t))
          );
        })(c.a.Component);
      t.a = b;
    },
    "6+2x": function(e, t, n) {
      e.exports = {
        HoverPosition: "hoverposition_HoverPosition_3vg1v",
        Ready: "hoverposition_Ready_1Ye_0",
        NoSpace: "hoverposition_NoSpace_pxVZH",
        EnablePointerEvents: "hoverposition_EnablePointerEvents_2b9OE"
      };
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
        var r = i.b.MEDIA_CDN_COMMUNITY_URL + "images/avatars/";
        return (
          (r += e.substr(0, 2) + "/" + e),
          t && "small" != t && (r += "_" + t),
          (r += n)
        );
      }
    },
    DWPT: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return c;
      });
      var u = n("mrSG"),
        l = n("q1tI"),
        r = n("bxiW"),
        i = n("TyAF"),
        o = n("qiKp"),
        m = n("exH9"),
        a = n("6+2x"),
        d = n.n(a),
        c = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_listeners = new o.c()),
              (e.m_bNoSpace = !1),
              (e.state = { x: void 0, y: void 0, hoverPositionReady: !1 }),
              e
            );
          }
          return (
            Object(u.d)(e, t),
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
                i = e.bEnablePointerEvents,
                o = (e.direction,
                e.nBodyAlignment,
                e.nBodyDistance,
                e.nAllowOffscreenPx,
                e.nMaxLateralMoveOnScreen,
                e.children),
                a = (e.onNoSpace,
                e.onWindowBlur,
                Object(u.f)(e, [
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
                c = Object.assign({ left: this.state.x, top: this.state.y }, r),
                s = !t || t.visible;
              return l.createElement(
                "div",
                Object(u.a)({}, a, {
                  className: Object(m.a)(
                    n,
                    d.a.HoverPosition,
                    s && this.state.hoverPositionReady && d.a.Ready,
                    this.m_bNoSpace && d.a.NoSpace,
                    i && d.a.EnablePointerEvents
                  ),
                  style: c,
                  ref: this.bindHover
                }),
                o
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
                  var i = t.querySelector(".hover_arrow.left"),
                    o = t.querySelector(".hover_arrow.right"),
                    a = t.querySelector(".hover_arrow.top"),
                    c = t.querySelector(".hover_arrow.bottom"),
                    s = n.getBoundingClientRect(),
                    u = t.getBoundingClientRect(),
                    l =
                      "overlay" == this.props.direction ||
                      "overlay-center" == this.props.direction;
                  i && i.setAttribute("style", "display: none;"),
                    o && o.setAttribute("style", "display: none;"),
                    a && a.setAttribute("style", "display: none;"),
                    c && c.setAttribute("style", "display: none;");
                  var m = this.props.direction,
                    d = O(
                      m,
                      this.props.nBodyAlignment,
                      this.props.nBodyDistance,
                      s,
                      u,
                      r.innerWidth,
                      r.innerHeight
                    ),
                    f = d.nLeft,
                    p = d.nTop,
                    h = d.nOverflow,
                    b = d.nLateralOverflow;
                  if (h > this.props.nAllowOffscreenPx && !l) {
                    var _ = (function(e) {
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
                      y = O(
                        _,
                        this.props.nBodyAlignment,
                        this.props.nBodyDistance,
                        s,
                        u,
                        r.innerWidth,
                        r.innerHeight
                      ),
                      v = y.nLeft,
                      g = y.nTop,
                      B = y.nOverflow,
                      w = y.nLateralOverflow;
                    if (
                      (B < h && ((m = _), (f = v), (p = g), (h = B), (b = w)),
                      h > this.props.nAllowOffscreenPx)
                    )
                      return (
                        t.setAttribute("style", "display: none;"),
                        (this.m_bNoSpace = !0),
                        void (this.props.onNoSpace && this.props.onNoSpace())
                      );
                  }
                  0 === this.props.nMaxLateralMoveOnScreen ||
                    l ||
                    ((p = (e = (function(e, t, n, r, i) {
                      var o = Math.max(t[0], t[1]);
                      void 0 !== e && (o = Math.min(e, o));
                      o = Math.max(0, o);
                      var a = t[0] > t[1] ? o : -o;
                      "left" === n || "right" === n ? (r += a) : (i += a);
                      return [r, i];
                    })(this.props.nMaxLateralMoveOnScreen, b, m, p, f))[0]),
                    (f = e[1]));
                  var E = null;
                  switch (m) {
                    case "left":
                      E = o;
                      break;
                    case "right":
                      E = i;
                      break;
                    case "top":
                      E = c;
                      break;
                    case "bottom":
                      E = a;
                  }
                  E && E.setAttribute("style", ""),
                    f != this.state.x && this.setState({ x: f }),
                    p != this.state.y && this.setState({ y: p }),
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
            Object(u.c)([r.a], e.prototype, "bindHover", null),
            Object(u.c)([r.a], e.prototype, "OnWindowBlur", null),
            (e = Object(u.c)([i.a], e))
          );
        })(l.Component);
      function O(e, t, n, r, i, o, a) {
        var c,
          s,
          u,
          l,
          m = o,
          d = a;
        switch (e) {
          case "right":
            (c = r.right + n),
              (s = f(r.top, r.height, i.height, t)),
              (u = Math.max(0, c + i.width - m)),
              (l = [Math.max(0, 0 - s), Math.max(0, s + i.height - d)]);
            break;
          case "left":
            (c = r.left - n - i.width),
              (s = f(r.top, r.height, i.height, t)),
              (u = Math.max(0, 0 - c)),
              (l = [Math.max(0, 0 - s), Math.max(0, s + i.height - d)]);
            break;
          case "bottom":
            (c = f(r.left, r.width, i.width, t)),
              (s = r.bottom + n),
              (u = Math.max(0, s + i.height - d)),
              (l = [Math.max(0, 0 - c), Math.max(0, c + i.width - m)]);
            break;
          case "top":
            (c = f(r.left, r.width, i.width, t)),
              (s = r.top - n - i.height),
              (u = Math.max(0, 0 - s)),
              (l = [Math.max(0, 0 - c), Math.max(0, c + i.width - m)]);
            break;
          case "overlay":
            (c = r.left), (s = r.top), (l = [(u = 0), 0]);
            break;
          case "overlay-center":
            (c = r.left + 0.5 * r.width - 0.5 * i.width),
              (s = r.top + 0.5 * r.height - 0.5 * i.height),
              (l = [(u = 0), 0]);
        }
        return { nLeft: c, nTop: s, nOverflow: u, nLateralOverflow: l };
      }
      function f(e, t, n, r) {
        return Math.max(0, Math.min(1, r)) * (t - n) + e;
      }
    },
    Gorr: function(e, t, n) {
      "use strict";
      var l = n("mrSG"),
        u = n("wUwH"),
        i = n("TyAF"),
        m = n("q1tI"),
        r = n("i8i4"),
        o = n("DWPT"),
        a = n("bxiW"),
        d = n("y+6m"),
        c = n("2vnA"),
        f = n("TLQK"),
        s = (n("X3Ds"),
        (function(t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          return (
            Object(l.d)(e, t),
            (e.prototype.render = function() {
              if (null == this.props.text)
                return m.createElement(m.Fragment, null, this.props.children);
              var e =
                this.props.text instanceof Array
                  ? this.props.text
                      .map(function(e) {
                        return e ? e.toString() : "";
                      })
                      .filter(function(e) {
                        return 0 < e.length;
                      })
                      .join("\n")
                  : this.props.text.toString();
              if (1 != m.Children.count(this.props.children))
                return (
                  console.log(
                    "Error: CopyableText must be the parent of exactly one child:\n\tcopystyle=" +
                      this.props.style +
                      " copytext=" +
                      e
                  ),
                  m.createElement(m.Fragment, null, this.props.children)
                );
              var t = m.Children.only(this.props.children);
              return m.cloneElement(t, {
                "data-copystyle": this.props.style,
                "data-copytext": e
              });
            }),
            (e.defaultProps = { text: "" }),
            e
          );
        })(m.Component));
      var p = n("rcgg"),
        h = n.n(p),
        b = n("exH9");
      function _(e, t) {
        return e + "economy/sticker/" + t;
      }
      var y = n("lkRc"),
        v = n("KZds"),
        g = n("Mgs7"),
        B = (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return (t.state = { activeIndex: e.initialActiveIndex || 0 }), t;
          }
          return (
            Object(l.d)(e, n),
            (e.prototype.render = function() {
              var e = this.props.config,
                t = this.state.activeIndex,
                n = e[t] && e[t].renderContent ? e[t].renderContent() : null,
                r = 1 < e.length;
              return m.createElement(
                "div",
                { className: v.Picker },
                r && m.createElement(w, null, this.RenderTabs()),
                n
              );
            }),
            (e.prototype.RenderTabs = function() {
              var i = this;
              return this.props.config.map(function(e, t) {
                var n = e.renderTab,
                  r = i.state.activeIndex === t;
                return m.createElement(
                  O,
                  {
                    key: t,
                    active: r,
                    onClick: function() {
                      return i.setState({ activeIndex: t });
                    }
                  },
                  n(r)
                );
              });
            }),
            e
          );
        })(m.Component);
      function w(e) {
        return m.createElement("div", { className: v.Tabs }, e.children);
      }
      function E(e) {
        return m.createElement("div", { className: v.Content }, e.children);
      }
      function O(e) {
        var t = e.active,
          n = e.children,
          r = e.onClick;
        return m.createElement(
          "div",
          { className: Object(b.a)(v.Tab, t && v.Active), onClick: r },
          m.createElement(
            "div",
            { className: Object(b.a)(v.TabContent, t && v.Active) },
            n
          )
        );
      }
      function R(e) {
        var n = e.items,
          r = e.renderItem,
          i = e.onItemSelect,
          o = e.keyExtractor,
          t = e.renderEmpty,
          a = n.map(function(e, t) {
            return m.createElement(
              "div",
              {
                key: o(e),
                className: v.Item,
                onClick: function() {
                  return i(n[t]);
                }
              },
              r(n[t])
            );
          });
        return (
          0 === n.length && t && (a = t()),
          m.createElement("div", { className: v.ItemList }, a)
        );
      }
      function S(e) {
        var t = e.title,
          n = e.onFilterChange,
          r = e.filter,
          i = e.onSubmit,
          o = Object(l.f)(e, ["title", "onFilterChange", "filter", "onSubmit"]);
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(
            E,
            null,
            m.createElement(
              j,
              { title: t },
              m.createElement(R, Object(l.a)({}, o))
            )
          ),
          m.createElement(C, { value: r, onChange: n, onSubmit: i })
        );
      }
      function M(e) {
        var t = e.onFilterChange,
          n = e.filter,
          r = e.sections,
          i = e.title;
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(
            E,
            null,
            i && m.createElement("div", { className: v.SectionedPageTitle }, i),
            r.map(function(e) {
              var t = e.title,
                n = Object(l.f)(e, ["title"]);
              return m.createElement(
                j,
                { title: t, key: t },
                m.createElement(R, Object(l.a)({}, n))
              );
            })
          ),
          m.createElement(C, { value: n, onChange: t })
        );
      }
      function j(e) {
        return m.createElement(
          "div",
          { className: v.Section },
          m.createElement("div", { className: v.SectionTitle }, e.title),
          m.createElement("div", { className: v.SectionContent }, e.children)
        );
      }
      function C(e) {
        var t = e.value,
          n = e.onChange,
          r = e.onSubmit;
        return m.createElement(
          "div",
          { className: v.FilterInputContainer },
          m.createElement(g.l, {
            type: "text",
            placeholder: "Search...",
            className: v.FilterInput,
            value: t,
            onChange: function(e) {
              return n(e.target.value);
            },
            onSubmit: r
          })
        );
      }
      function z(e) {
        var t = e.className,
          n = Object(l.f)(e, ["className"]);
        return m.createElement(
          "div",
          Object(l.a)({ className: Object(b.a)(t, v.AddonPickerMessage) }, n)
        );
      }
      var I = n("qD+2"),
        A = n("+d9t");
      n.d(t, "b", function() {
        return F;
      }),
        n.d(t, "a", function() {
          return U;
        }),
        n.d(t, "c", function() {
          return N;
        }),
        n.d(t, "d", function() {
          return J;
        });
      var F = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { showHover: !1 }), (e.m_ref = m.createRef()), e;
          }
          return (
            Object(l.d)(e, t),
            (e.prototype.OnMouseEnter = function(e) {
              this.setState({ showHover: !0 });
            }),
            (e.prototype.OnMouseLeave = function(e) {
              this.setState({ showHover: !1 });
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = e.emoticon,
                n = e.large,
                r = e.emoticonHoverStore,
                i = ":" + t + ":",
                o = n && r.BLoaded(t) ? r.Get(t).url : u.a.GetEmoticonURL(t, n);
              return m.createElement(
                m.Fragment,
                null,
                m.createElement(
                  s,
                  { text: i, style: "merge-adjacent" },
                  m.createElement("img", {
                    src: o,
                    className: Object(b.a)(
                      h.a.emoticon,
                      n ? h.a.large : void 0
                    ),
                    "data-emoticon": t,
                    onMouseEnter: this.OnMouseEnter,
                    onMouseLeave: this.OnMouseLeave,
                    ref: this.m_ref
                  })
                ),
                this.state.showHover &&
                  m.createElement(k, {
                    target: this.m_ref.current,
                    store: r,
                    emoticon: t
                  })
              );
            }),
            Object(l.c)([a.a], e.prototype, "OnMouseEnter", null),
            Object(l.c)([a.a], e.prototype, "OnMouseLeave", null),
            e
          );
        })(m.PureComponent),
        k = Object(i.a)(function(e) {
          var t = e.target,
            n = e.store,
            r = e.emoticon,
            i = n.Get(r);
          return m.createElement(
            P,
            {
              target: t,
              title: ":" + r + ":",
              subtitle: i && i.app_name ? i.app_name : void 0
            },
            m.createElement(F, {
              emoticon: r,
              emoticonHoverStore: n,
              large: !0
            })
          );
        }),
        P = function(e) {
          var t = e.target,
            n = e.title,
            r = e.subtitle,
            i = e.children;
          return m.createElement(
            o.a,
            {
              target: t,
              style: { zIndex: 1700 },
              className: h.a.EmoticonHover
            },
            i,
            m.createElement(
              "div",
              { className: h.a.Info },
              m.createElement(
                "div",
                { className: h.a.Name },
                n || m.createElement("span", null, " ")
              ),
              m.createElement(
                "div",
                { className: h.a.AppName },
                r || m.createElement("span", null, " ")
              )
            )
          );
        };
      function L(e) {
        return e.recent_emoticons;
      }
      function T(e) {
        return e.recent_stickers;
      }
      var U = (function(r) {
          function e(e) {
            var t = r.call(this, e) || this;
            t.state = { strSearchText: "" };
            var n = t.props.emoticonStore;
            return (
              n.is_initialized ||
                (n.UpdateEmoticonList(),
                (t.m_disposeEmoticonStore = Object(c.L)(
                  function() {
                    return n.is_initialized;
                  },
                  function() {
                    return t.forceUpdate();
                  }
                ))),
              t
            );
          }
          return (
            Object(l.d)(e, r),
            (e.prototype.componentWillUnmount = function() {
              this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
            }),
            (e.prototype.render = function() {
              var e,
                t = this.props,
                n = t.emoticonStore,
                r = t.emoticonHoverStore,
                i = t.roomEffectSettings,
                o = t.onEmoticonSelected,
                a = t.onStickerSelected,
                c = t.onRoomEffectSelected,
                s = t.strFlairGroupID,
                u = [];
              return (
                0 < L((e = n)).length + T(e).length &&
                  u.push({
                    renderTab: function(e) {
                      return m.createElement(
                        "span",
                        {
                          title: Object(f.d)("#AddonPicker_RecentlyUsed"),
                          className: Object(b.a)(
                            h.a.PickerTab,
                            h.a.Clock,
                            e && h.a.ActiveTab
                          )
                        },
                        m.createElement(te, null)
                      );
                    },
                    renderContent: function() {
                      return m.createElement(G, {
                        store: n,
                        hoverStore: r,
                        onEmoticonSelect: function(e) {
                          return o(e.name);
                        },
                        onStickerSelect: function(e) {
                          return a(e.name);
                        },
                        flairGroupID: s
                      });
                    }
                  }),
                m.createElement(
                  d.c,
                  null,
                  m.createElement(B, {
                    config: Object(l.g)(u, [
                      {
                        renderTab: function(e) {
                          return m.createElement(
                            "span",
                            {
                              title: Object(f.d)("#AddonPicker_Emoticons"),
                              className: Object(b.a)(
                                h.a.PickerTab,
                                e && h.a.ActiveTab
                              )
                            },
                            m.createElement(X, null)
                          );
                        },
                        renderContent: function() {
                          return m.createElement(W, {
                            store: n,
                            hoverStore: r,
                            onItemSelect: function(e) {
                              return o(e.name);
                            },
                            flairGroupID: s
                          });
                        }
                      },
                      {
                        renderTab: function(e) {
                          return m.createElement(
                            "span",
                            {
                              title: Object(f.d)("#AddonPicker_Stickers"),
                              className: Object(b.a)(
                                h.a.PickerTab,
                                e && h.a.ActiveTab
                              )
                            },
                            m.createElement($, null)
                          );
                        },
                        renderContent: function() {
                          return m.createElement(D, {
                            store: n,
                            onItemSelect: function(e) {
                              return a(e.name);
                            }
                          });
                        }
                      },
                      {
                        renderTab: function(e) {
                          return m.createElement(
                            "span",
                            {
                              title: Object(f.d)("#AddonPicker_RoomEffects"),
                              className: Object(b.a)(
                                h.a.PickerTab,
                                e && h.a.ActiveTab
                              )
                            },
                            m.createElement(ee, null)
                          );
                        },
                        renderContent: function() {
                          return m.createElement(H, {
                            store: n,
                            effectSettings: i,
                            onItemSelect: function(e) {
                              return c(e.name);
                            }
                          });
                        }
                      }
                    ])
                  })
                )
              );
            }),
            (e = Object(l.c)([i.a], e))
          );
        })(m.Component),
        N = (function(r) {
          function e(e) {
            var t = r.call(this, e) || this;
            t.state = { strSearchText: "" };
            var n = t.props.emoticonStore;
            return (
              n.is_initialized ||
                (n.UpdateEmoticonList(),
                (t.m_disposeEmoticonStore = Object(c.L)(
                  function() {
                    return n.is_initialized;
                  },
                  function() {
                    return t.forceUpdate();
                  }
                ))),
              t
            );
          }
          return (
            Object(l.d)(e, r),
            (e.prototype.componentWillUnmount = function() {
              this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
            }),
            (e.prototype.render = function() {
              var t = this;
              return m.createElement(
                d.c,
                null,
                m.createElement(B, {
                  config: [
                    {
                      renderTab: function() {
                        return m.createElement(
                          "span",
                          {
                            title: Object(f.d)("#AddonPicker_Emoticons"),
                            className: h.a.PickerTab
                          },
                          m.createElement(X, null)
                        );
                      },
                      renderContent: function() {
                        return m.createElement(q, {
                          store: t.props.emoticonStore,
                          hoverStore: t.props.emoticonHoverStore,
                          onItemSelect: function(e) {
                            return t.props.OnSelected(e.name, !1);
                          },
                          flairGroupID: t.props.strFlairGroupID
                        });
                      }
                    }
                  ]
                })
              );
            }),
            e
          );
        })(m.Component),
        G = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { filter: "" }), e;
          }
          return (
            Object(l.d)(e, t),
            (e.prototype.render = function() {
              var t = this,
                e = this.props,
                n = e.store,
                r = e.hoverStore,
                i = e.onEmoticonSelect,
                o = e.onStickerSelect,
                a = this.state.filter,
                c = [];
              return (
                L(n) &&
                  c.push({
                    title: Object(f.d)("#AddonPicker_RecentEmoticons"),
                    items: u.a.FilterEmoticons(L(n), a),
                    onItemSelect: i,
                    renderItem: function(e) {
                      return m.createElement(V, {
                        emoticon: e,
                        emoticonHoverStore: r
                      });
                    },
                    keyExtractor: function(e) {
                      return e.name;
                    },
                    renderEmpty: function() {
                      return m.createElement(
                        z,
                        null,
                        a
                          ? Object(f.d)("#AddonPicker_NoResults")
                          : Object(f.d)(
                              "#AddonPicker_NoRecent",
                              Object(f.d)("#AddonPicker_Emoticons")
                            )
                      );
                    }
                  }),
                T(n).length &&
                  c.push({
                    title: Object(f.d)("#AddonPicker_RecentStickers"),
                    items: u.a.FilterStickers(T(n), a),
                    onItemSelect: o,
                    renderItem: function(e) {
                      return m.createElement(K, { sticker: e });
                    },
                    keyExtractor: function(e) {
                      return e.name;
                    },
                    renderEmpty: function() {
                      return m.createElement(
                        z,
                        null,
                        a
                          ? Object(f.d)("#AddonPicker_NoResults")
                          : Object(f.d)(
                              "#AddonPicker_NoRecent",
                              Object(f.d)("#AddonPicker_Stickers")
                            )
                      );
                    }
                  }),
                m.createElement(M, {
                  onFilterChange: function(e) {
                    return t.setState({ filter: e });
                  },
                  filter: a,
                  sections: c
                })
              );
            }),
            e
          );
        })(m.Component),
        W = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { filter: "" }), e;
          }
          return (
            Object(l.d)(e, t),
            (e.prototype.render = function() {
              var t = this,
                e = this.props,
                n = e.store,
                r = e.hoverStore,
                i = e.onItemSelect,
                o = e.flairGroupID,
                a = this.state.filter,
                c = !a && o ? n.GetFlairListByGroupID(o) : n.emoticon_list,
                s = u.a.FilterEmoticons(c, a).slice(0, 1e3);
              return m.createElement(S, {
                title: Object(f.d)("#AddonPicker_Emoticons"),
                items: s,
                onItemSelect: i,
                renderItem: function(e) {
                  return m.createElement(V, {
                    emoticon: e,
                    emoticonHoverStore: r
                  });
                },
                keyExtractor: function(e) {
                  return e.name;
                },
                onFilterChange: function(e) {
                  return t.setState({ filter: e });
                },
                filter: a,
                onSubmit: function() {
                  return i(s[0]);
                },
                renderEmpty: function() {
                  return a
                    ? m.createElement(
                        z,
                        null,
                        Object(f.d)("#AddonPicker_NoResults")
                      )
                    : m.createElement(x, null);
                }
              });
            }),
            e
          );
        })(m.Component);
      function x() {
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(
            z,
            null,
            Object(f.d)(
              "#AddonPicker_NoneOwned",
              Object(f.d)("#AddonPicker_Emoticons")
            )
          ),
          m.createElement(
            z,
            null,
            Object(f.k)(
              "#AddonPicker_AcquireAtPointsShopOrMarket",
              m.createElement(
                A.a,
                { href: y.b.STORE_BASE_URL + "points/shop/c/emoticons" },
                Object(f.d)("#AddonPicker_AcquireAtPointsShop_Link")
              ),
              m.createElement(
                A.a,
                { href: y.b.COMMUNITY_BASE_URL + "market" },
                Object(f.d)("#AddonPicker_AcquireAtPointsShopOrMarket_Link")
              )
            )
          )
        );
      }
      var D = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { filter: "" }), e;
          }
          return (
            Object(l.d)(e, t),
            (e.prototype.render = function() {
              var t = this,
                e = this.props,
                n = e.store,
                r = e.onItemSelect,
                i = this.state.filter,
                o = u.a.FilterStickers(n.GetStickerList(), i);
              return m.createElement(S, {
                title: Object(f.d)("#EmoticonPicker_StickerHeading"),
                items: o,
                onItemSelect: r,
                renderItem: function(e) {
                  return m.createElement(K, { sticker: e });
                },
                keyExtractor: function(e) {
                  return e.name;
                },
                onFilterChange: function(e) {
                  return t.setState({ filter: e });
                },
                filter: i,
                onSubmit: function() {
                  return r(o[0]);
                },
                renderEmpty: function() {
                  return i
                    ? m.createElement(
                        z,
                        null,
                        Object(f.d)("#AddonPicker_NoResults")
                      )
                    : m.createElement(
                        m.Fragment,
                        null,
                        m.createElement(
                          z,
                          null,
                          Object(f.d)(
                            "#AddonPicker_NoneOwned",
                            Object(f.d)("#AddonPicker_Stickers")
                          )
                        ),
                        m.createElement(
                          z,
                          null,
                          Object(f.k)(
                            "#AddonPicker_AcquireAtPointsShop",
                            m.createElement(
                              A.a,
                              {
                                href:
                                  y.b.STORE_BASE_URL + "points/shop/c/stickers"
                              },
                              Object(f.d)(
                                "#AddonPicker_AcquireAtPointsShop_Link"
                              )
                            )
                          )
                        )
                      );
                }
              });
            }),
            e
          );
        })(m.Component),
        H = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { filter: "" }), e;
          }
          return (
            Object(l.d)(e, t),
            (e.prototype.render = function() {
              var t = this,
                e = this.props,
                n = e.store,
                r = e.effectSettings,
                i = e.onItemSelect,
                o = this.state.filter,
                a = n.GetEffectList().filter(function(e) {
                  return -1 < e.name.indexOf(o);
                });
              return m.createElement(S, {
                title: Object(f.d)("#EmoticonPicker_EffectHeading"),
                items: a,
                onItemSelect: i,
                renderItem: function(e) {
                  return m.createElement(Y, {
                    effect: e,
                    roomEffectSettings: r
                  });
                },
                keyExtractor: function(e) {
                  return e.name;
                },
                onFilterChange: function(e) {
                  return t.setState({ filter: e });
                },
                filter: o,
                onSubmit: function() {
                  return i(a[0]);
                },
                renderEmpty: function() {
                  return o
                    ? m.createElement(
                        z,
                        null,
                        Object(f.d)("#AddonPicker_NoResults")
                      )
                    : m.createElement(
                        m.Fragment,
                        null,
                        m.createElement(
                          z,
                          null,
                          Object(f.d)(
                            "#AddonPicker_NoneOwned",
                            Object(f.d)("#AddonPicker_RoomEffects")
                          )
                        ),
                        m.createElement(
                          z,
                          null,
                          Object(f.k)(
                            "#AddonPicker_AcquireAtPointsShop",
                            m.createElement(
                              A.a,
                              {
                                href:
                                  y.b.STORE_BASE_URL +
                                  "points/shop/c/chateffects"
                              },
                              Object(f.d)(
                                "#AddonPicker_AcquireAtPointsShop_Link"
                              )
                            )
                          )
                        )
                      );
                }
              });
            }),
            e
          );
        })(m.Component),
        q = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { filter: "" }), e;
          }
          return (
            Object(l.d)(e, t),
            (e.prototype.render = function() {
              var t = this,
                e = this.props,
                n = e.store,
                r = e.hoverStore,
                i = e.onItemSelect,
                o = (e.flairGroupID, this.state.filter),
                a = [];
              return (
                L(n).length &&
                  a.push({
                    title: Object(f.d)("#AddonPicker_RecentEmoticons"),
                    items: u.a.FilterEmoticons(L(n), o),
                    onItemSelect: i,
                    renderItem: function(e) {
                      return m.createElement(V, {
                        emoticon: e,
                        emoticonHoverStore: r
                      });
                    },
                    keyExtractor: function(e) {
                      return e.name;
                    },
                    renderEmpty: function() {
                      return m.createElement(
                        z,
                        null,
                        o
                          ? Object(f.d)("#AddonPicker_NoResults")
                          : Object(f.d)(
                              "#AddonPicker_NoRecent",
                              Object(f.d)("#AddonPicker_Emoticons")
                            )
                      );
                    }
                  }),
                m.createElement(M, {
                  onFilterChange: function(e) {
                    return t.setState({ filter: e });
                  },
                  filter: o,
                  sections: Object(l.g)(a, [
                    {
                      title: Object(f.d)("#AddonPicker_AllEmoticons"),
                      items: u.a
                        .FilterStickers(n.emoticon_list, o)
                        .slice(0, 1e3),
                      onItemSelect: i,
                      renderItem: function(e) {
                        return m.createElement(V, {
                          emoticon: e,
                          emoticonHoverStore: r
                        });
                      },
                      keyExtractor: function(e) {
                        return e.name;
                      },
                      renderEmpty: function() {
                        return o
                          ? m.createElement(
                              z,
                              null,
                              Object(f.d)("#AddonPicker_NoResults")
                            )
                          : m.createElement(x, null);
                      }
                    }
                  ])
                })
              );
            }),
            (e = Object(l.c)([i.a], e))
          );
        })(m.Component),
        V = function(e) {
          var t = e.emoticon,
            n = e.emoticonHoverStore,
            r = !t.last_used && t.time_received;
          return m.createElement(
            "div",
            { className: h.a.EmoticonItem },
            m.createElement(F, { emoticon: t.name, emoticonHoverStore: n }),
            r && m.createElement(J, null)
          );
        },
        K = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { showHover: !1 }), (e.m_ref = m.createRef()), e;
          }
          return (
            Object(l.d)(e, t),
            (e.prototype.render = function() {
              var e = this,
                t = this.props,
                n = t.sticker,
                r = t.className,
                i = Object(l.f)(t, ["sticker", "className"]),
                o = _(y.b.COMMUNITY_CDN_URL, n.name);
              return m.createElement(
                "div",
                Object(l.a)(
                  {
                    ref: this.m_ref,
                    className: Object(b.a)(r, h.a.StickerButton),
                    onMouseOver: function() {
                      return e.setState({ showHover: !0 });
                    },
                    onFocus: function() {
                      return e.setState({ showHover: !0 });
                    },
                    onMouseLeave: function() {
                      return e.setState({ showHover: !1 });
                    },
                    onBlur: function() {
                      return e.setState({ showHover: !1 });
                    }
                  },
                  i
                ),
                m.createElement("img", { style: { width: "100%" }, src: o }),
                this.state.showHover &&
                  m.createElement(Q, { target: this.m_ref.current, sticker: n })
              );
            }),
            e
          );
        })(m.Component),
        Q = Object(i.a)(function(e) {
          var t = e.target,
            n = e.sticker,
            r = n.name,
            i = n.appid,
            o = I.a.GetAppInfo(i);
          return m.createElement(
            P,
            { target: t, title: r, subtitle: o.name },
            m.createElement("img", {
              src: _(y.b.COMMUNITY_CDN_URL, r),
              className: h.a.StickerHoverSticker
            })
          );
        }),
        Y = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { showHover: !1 }), (e.m_ref = m.createRef()), e;
          }
          return (
            Object(l.d)(e, t),
            (e.prototype.render = function() {
              var e = this,
                t = this.props,
                n = t.effect,
                r = t.roomEffectSettings,
                i = t.className,
                o = Object(l.f)(t, [
                  "effect",
                  "roomEffectSettings",
                  "className"
                ]),
                a = r[n.name];
              return m.createElement(
                "div",
                Object(l.a)(
                  {
                    ref: this.m_ref,
                    onMouseOver: function() {
                      return e.setState({ showHover: !0 });
                    },
                    onFocus: function() {
                      return e.setState({ showHover: !0 });
                    },
                    onMouseLeave: function() {
                      return e.setState({ showHover: !1 });
                    },
                    onBlur: function() {
                      return e.setState({ showHover: !1 });
                    },
                    className: Object(b.a)(i, h.a.EffectButton)
                  },
                  o
                ),
                a.renderEffectIcon(),
                this.state.showHover &&
                  m.createElement(Z, {
                    target: this.m_ref.current,
                    effect: n,
                    roomEffectSettings: r
                  })
              );
            }),
            e
          );
        })(m.Component),
        Z = Object(i.a)(function(e) {
          var t = e.target,
            n = e.effect,
            r = n.name,
            i = n.appid,
            o = e.roomEffectSettings[r],
            a = I.a.GetAppInfo(i);
          return m.createElement(
            P,
            { target: t, title: r, subtitle: a.name },
            m.createElement(
              "div",
              { className: h.a.EffectHoverEffect },
              o.renderEffectIcon()
            )
          );
        });
      function J() {
        return m.createElement(
          "div",
          { className: h.a.NewEmoticonIndicator },
          m.createElement("div", { className: h.a.NewEmoticonCircle })
        );
      }
      m.Component;
      function $(e) {
        return m.createElement(
          "svg",
          Object(l.a)({ viewBox: "0 0 59 59", width: "32" }, e),
          m.createElement(
            "switch",
            null,
            m.createElement(
              "g",
              null,
              m.createElement("path", {
                d:
                  "M58 30.2v-.1L23.4 58.5l-.2-.3-.1.1C9.9 55.4 0 43.6 0 29.5 0 13.2 13.2 0 29.5 0S59 13.2 59 29.4l-1 .8zm0-1.5c-5-2.2-16.1-4-26 4.6-9.8 8.4-10.3 18.8-9.2 23.9C10.3 54.2 1 42.9 1 29.5 1 13.8 13.8 1 29.5 1 45 1 57.6 13.3 58 28.7zm-.8.8L23.7 56.9c-1-4.8-.5-14.8 8.9-22.9 9.4-8 19.7-6.6 24.6-4.5z",
                fillRule: "evenodd",
                clipRule: "evenodd",
                fill: "#fff"
              })
            )
          )
        );
      }
      function X(e) {
        return m.createElement(
          "svg",
          Object(l.a)({ viewBox: "0 -8 60 60", width: "32" }, e),
          m.createElement("path", {
            d:
              "M.5 5.5C.5 2.5 3 0 6 0h48c3 0 5.5 2.5 5.5 5.5V35c0 3-2.5 5.5-5.5 5.5h-1.5c-.8 0-1.5.7-1.5 1.5v8.1c0 1.3-1.6 2-2.6 1.1L37.8 40.5H6C3 40.5.5 38 .5 35V5.5zM6 1C3.5 1 1.5 3 1.5 5.5V35c0 2.5 2 4.5 4.5 4.5h32.2l.1.1 10.8 10.8c.3.3.9.1.9-.4v-8c0-1.4 1.1-2.5 2.5-2.5H54c2.5 0 4.5-2 4.5-4.5V5.5C58.5 3 56.5 1 54 1H6zm24 31c6.6 0 12-5.4 12-12S36.6 8 30 8s-12 5.4-12 12 5.4 12 12 12zm0 1c7.2 0 13-5.8 13-13S37.2 7 30 7s-13 5.8-13 13 5.8 13 13 13zm-3.5-15c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5zm8.5-1.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5zM24.5 22c0 2.5 2 4.5 4.5 4.5h2c2.5 0 4.5-2 4.5-4.5h-1c0 1.9-1.6 3.5-3.5 3.5h-2c-1.9 0-3.5-1.6-3.5-3.5h-1z",
            fillRule: "evenodd",
            clipRule: "evenodd",
            fill: "#fff"
          })
        );
      }
      function ee(e) {
        return m.createElement(
          "svg",
          Object(l.a)({ viewBox: "0 0 60 38", width: "32" }, e),
          m.createElement("path", {
            d:
              "M16 8.9l1.9 5.1c.2.5.6 1 1.2 1.2l5.1 1.9-5.1 1.9c-.5.2-1 .6-1.2 1.2L16 25.1 14.1 20c-.2-.5-.6-1-1.2-1.2l-5-1.8 5.1-1.9c.5-.2 1-.6 1.2-1.2l1.8-5zm-.9-.4c.3-.9 1.6-.9 1.9 0l1.9 5.1c.1.3.3.5.6.6l5.1 1.9c.9.3.9 1.6 0 1.9l-5.1 1.9c-.3.1-.5.3-.6.6L17 25.6c-.3.9-1.6.9-1.9 0l-1.9-5.1c-.1-.3-.3-.5-.6-.6L7.5 18c-.9-.3-.9-1.6 0-1.9l5.1-1.9c.3-.1.5-.3.6-.6l1.9-5.1zm17.8 15.4l-1.9-5-1.9 5.1c-.2.5-.6 1-1.2 1.2l-5 1.8 5.1 1.9c.5.2 1 .6 1.2 1.2l1.9 5.1 1.9-5.1c.2-.5.6-1 1.2-1.2l5.1-1.9-5.1-1.9c-.7-.2-1.1-.6-1.3-1.2zm-1-5.4c-.3-.9-1.6-.9-1.9 0l-1.9 5.1c-.1.3-.3.5-.6.6l-5.1 1.9c-.9.3-.9 1.6 0 1.9l5.1 1.9c.3.1.5.3.6.6l1.9 5.1c.3.9 1.6.9 1.9 0l1.9-5.1c.1-.3.3-.5.6-.6l5.1-1.9c.9-.3.9-1.6 0-1.9l-5.1-1.9c-.3-.1-.5-.3-.6-.6l-1.9-5.1zM43 4.9l1.9 5.1c.2.5.6 1 1.2 1.2l5.1 1.9-5.1 1.9c-.5.2-1 .6-1.2 1.2L43 21.1 41.1 16c-.2-.5-.6-1-1.2-1.2l-5-1.8 5.1-1.9c.5-.2 1-.6 1.2-1.2l1.8-5zm-.9-.4c.3-.9 1.6-.9 1.9 0l1.9 5.1c.1.3.3.5.6.6l5.1 1.9c.9.3.9 1.6 0 1.9l-5.1 1.9c-.3.1-.5.3-.6.6L44 21.6c-.3.9-1.6.9-1.9 0l-1.9-5.1c-.1-.3-.3-.5-.6-.6L34.5 14c-.9-.3-.9-1.6 0-1.9l5.1-1.9c.3-.1.5-.3.6-.6l1.9-5.1z",
            fillRule: "evenodd",
            clipRule: "evenodd",
            fill: "#fff"
          })
        );
      }
      function te(e) {
        var t = e.className,
          n = Object(l.f)(e, ["className"]);
        return m.createElement(
          "svg",
          Object(l.a)(
            {
              className: Object(b.a)("SVGIcon_Button SVGIcon_Clock", t),
              version: "1.1",
              x: "0px",
              y: "0px",
              width: "20px",
              height: "20px",
              viewBox: "0 0 24 24"
            },
            n
          ),
          m.createElement("path", {
            d:
              "M15.999 15c-.15 0-.303-.034-.446-.105l-4-2A1.001 1.001 0 0111 12V5a1 1 0 012 0v6.382l3.447 1.724A1 1 0 0115.999 15zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"
          })
        );
      }
    },
    KZds: function(e, t, n) {
      e.exports = {
        Picker: "addonpicker_Picker_tid_O",
        Tabs: "addonpicker_Tabs_1yVkT",
        Tab: "addonpicker_Tab_2CJ0L",
        Active: "addonpicker_Active_1ddEQ",
        TabContent: "addonpicker_TabContent_1mROo",
        Content: "addonpicker_Content_dUQIH",
        ItemList: "addonpicker_ItemList_2OWGR",
        Item: "addonpicker_Item_1SFqy",
        SectionedPageTitle: "addonpicker_SectionedPageTitle_ZmsEl",
        SectionTitle: "addonpicker_SectionTitle_3WuFl",
        FilterInputContainer: "addonpicker_FilterInputContainer_EuFeP",
        FilterInput: "addonpicker_FilterInput_2l4z-",
        AddonPickerMessage: "addonpicker_AddonPickerMessage_2wUk7"
      };
    },
    MUT6: function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return l;
      }),
        n.d(t, "a", function() {
          return d;
        }),
        n.d(t, "g", function() {
          return w;
        }),
        n.d(t, "d", function() {
          return O;
        }),
        n.d(t, "c", function() {
          return S;
        }),
        n.d(t, "e", function() {
          return U;
        }),
        n.d(t, "f", function() {
          return N;
        }),
        n.d(t, "h", function() {
          return r;
        });
      var i = n("mrSG"),
        o = n("hRO2"),
        a = n("OS8t"),
        c = n("RD/U"),
        s = o.Message;
      var r,
        u,
        l = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.appids || a.a(r.M()),
              s.initialize(t, e, 0, -1, [1], null),
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
        })(s),
        m = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.apps || a.a(r.M()),
              s.initialize(t, e, 0, -1, [1], null),
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
                    fields: { apps: { n: 1, c: c.a, r: !0, q: !0 } }
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
        })(s),
        d = (function(n) {
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
        })(s),
        f = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.appid || a.a(r.M()),
              s.initialize(t, e, 0, -1, [2], null),
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
                      token_lists: { n: 2, c: h, r: !0, q: !0 }
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
        })(s),
        p = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.name || a.a(r.M()),
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
        })(s),
        h = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.language || a.a(r.M()),
              s.initialize(t, e, 0, -1, [2], null),
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
                      tokens: { n: 2, c: p, r: !0, q: !0 }
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
        })(s),
        b = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.gidcomment || a.a(r.M()),
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
                      ipaddress: { n: 9, c: c.c },
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
        })(s),
        _ = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.comments || a.a(r.M()),
              s.initialize(t, e, 0, -1, [1, 2, 9], null),
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
        })(s),
        y = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.gidcomment || a.a(r.M()),
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
        })(s),
        v = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return s.initialize(t, e, 0, -1, void 0, null), t;
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
        })(s),
        g = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.gidcomment || a.a(r.M()),
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
        })(s),
        B = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.commentthreadid || a.a(r.M()),
              s.initialize(t, e, 0, -1, [5], null),
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
        })(s),
        w = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.announcementid || a.a(r.M()),
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
        })(s),
        E = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return s.initialize(t, e, 0, -1, void 0, null), t;
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
        })(s),
        O = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.announcementid || a.a(r.M()),
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
        })(s),
        R = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.voted_up || a.a(r.M()),
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
        })(s),
        S = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.steamid || a.a(r.M()),
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
                      steamid: {
                        n: 1,
                        br: a.d.readFixed64String,
                        bw: a.h.writeFixed64String
                      },
                      filter_user_uploaded_only: {
                        n: 2,
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
              return "CCommunity_GetAvatarHistory_Request";
            }),
            r
          );
        })(s),
        M = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.avatars || a.a(r.M()),
              s.initialize(t, e, 0, -1, [1], null),
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
                    fields: { avatars: { n: 1, c: j, r: !0, q: !0 } }
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
        })(s),
        j = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.avatar_sha1 || a.a(r.M()),
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
        })(s),
        C = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.results || a.a(r.M()),
              s.initialize(t, e, 0, -1, [1], null),
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
                    fields: { results: { n: 1, c: c.b, r: !0, q: !0 } }
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
        })(s),
        z = (function(n) {
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
        })(s),
        I = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.results || a.a(r.M()),
              s.initialize(t, e, 0, -1, [1], null),
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
                    fields: { results: { n: 1, c: z, r: !0, q: !0 } }
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
        })(s),
        A = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return s.initialize(t, e, 0, -1, void 0, null), t;
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
        })(s),
        F = (function(n) {
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
        })(s),
        k = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.priorities || a.a(r.M()),
              s.initialize(t, e, 0, -1, [1], null),
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
                    fields: { priorities: { n: 1, c: F, r: !0, q: !0 } }
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
        })(s),
        P = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return s.initialize(t, e, 0, -1, void 0, null), t;
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
        })(s),
        L = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return s.initialize(t, e, 0, -1, void 0, null), t;
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
        })(s),
        T = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return s.initialize(t, e, 0, -1, void 0, null), t;
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
        })(s),
        U = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.markings || a.a(r.M()),
              s.initialize(t, e, 0, -1, [1], null),
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
                    fields: { markings: { n: 1, c: N, r: !0, q: !0 } }
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
        })(s),
        N = (function(n) {
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
        })(s),
        G = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return s.initialize(t, e, 0, -1, void 0, null), t;
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
        })(s),
        W = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.events || a.a(r.M()),
              s.initialize(t, e, 0, -1, [1], null),
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
                    fields: { events: { n: 1, c: x, r: !0, q: !0 } }
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
        })(s),
        x = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.event_gid || a.a(r.M()),
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
        })(s);
      ((u = r = r || {}).GetApps = function(e, t) {
        return e.SendMsg("Community.GetApps#1", t, m, {
          bConstMethod: !0,
          ePrivilege: 2,
          eWebAPIKeyRequirement: 1
        });
      }),
        (u.GetAppRichPresenceLocalization = function(e, t) {
          return e.SendMsg("Community.GetAppRichPresenceLocalization#1", t, f, {
            ePrivilege: 1
          });
        }),
        (u.GetCommentThread = function(e, t) {
          return e.SendMsg("Community.GetCommentThread#1", t, _, {
            ePrivilege: 1
          });
        }),
        (u.PostCommentToThread = function(e, t) {
          return e.SendMsg("Community.PostCommentToThread#1", t, y, {
            ePrivilege: 3
          });
        }),
        (u.DeleteCommentFromThread = function(e, t) {
          return e.SendMsg("Community.DeleteCommentFromThread#1", t, v, {
            ePrivilege: 1
          });
        }),
        (u.RateCommentThread = function(e, t) {
          return e.SendMsg("Community.RateCommentThread#1", t, g, {
            ePrivilege: 3
          });
        }),
        (u.GetCommentThreadRatings = function(e, t) {
          return e.SendMsg("Community.GetCommentThreadRatings#1", t, B, {
            ePrivilege: 2
          });
        }),
        (u.RateClanAnnouncement = function(e, t) {
          return e.SendMsg("Community.RateClanAnnouncement#1", t, E, {
            ePrivilege: 3
          });
        }),
        (u.GetClanAnnouncementVoteForUser = function(e, t) {
          return e.SendMsg("Community.GetClanAnnouncementVoteForUser#1", t, R, {
            ePrivilege: 1
          });
        }),
        (u.GetAvatarHistory = function(e, t) {
          return e.SendMsg("Community.GetAvatarHistory#1", t, M, {
            ePrivilege: 1
          });
        }),
        (u.GetUserPartnerEventNews = function(e, t) {
          return e.SendMsg("Community.GetUserPartnerEventNews#1", t, C, {
            bConstMethod: !0,
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2
          });
        }),
        (u.GetBestEventsForUser = function(e, t) {
          return e.SendMsg("Community.GetBestEventsForUser#1", t, I, {
            bConstMethod: !0,
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2
          });
        }),
        (u.MarkPartnerEventsForUser = function(e, t) {
          return e.SendMsg("Community.MarkPartnerEventsForUser#1", t, G, {
            ePrivilege: 1
          });
        }),
        (u.GetUserPartnerEventViewStatus = function(e, t) {
          return e.SendMsg("Community.GetUserPartnerEventViewStatus#1", t, W, {
            bConstMethod: !0,
            ePrivilege: 1
          });
        }),
        (u.PartnerEventsShowMoreForApp = function(e, t) {
          return e.SendMsg("Community.PartnerEventsShowMoreForApp#1", t, L, {
            ePrivilege: 1
          });
        }),
        (u.PartnerEventsShowLessForApp = function(e, t) {
          return e.SendMsg("Community.PartnerEventsShowLessForApp#1", t, T, {
            ePrivilege: 1
          });
        }),
        (u.ClearUserPartnerEventsAppPriorities = function(e, t) {
          return e.SendMsg(
            "Community.ClearUserPartnerEventsAppPriorities#1",
            t,
            A,
            { ePrivilege: 1 }
          );
        }),
        (u.GetUserPartnerEventsAppPriorities = function(e, t) {
          return e.SendMsg(
            "Community.GetUserPartnerEventsAppPriorities#1",
            t,
            k,
            { ePrivilege: 1 }
          );
        }),
        (u.ClearSinglePartnerEventsAppPriority = function(e, t) {
          return e.SendMsg(
            "Community.ClearSinglePartnerEventsAppPriority#1",
            t,
            P,
            { ePrivilege: 1 }
          );
        });
    },
    UWWC: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return o;
      }),
        n.d(t, "b", function() {
          return a;
        });
      var l = n("mrSG"),
        r = n("wUwH"),
        m = n("lkRc"),
        i = n("vDqi"),
        d = n.n(i),
        o = (function(e) {
          function t() {
            return e.call(this) || this;
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.BInitialized = function() {
              return !0;
            }),
            (t.prototype.GetServerTime = function() {
              return m.b.PAGE_TIMESTAMP + Math.floor(performance.now() / 1e3);
            }),
            (t.prototype.RequestEmoticonListInternal = function() {
              return Object(l.b)(this, void 0, void 0, function() {
                var t, n, r, i, o, a, c, s, u;
                return Object(l.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = []), (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          d.a.get(m.b.CHAT_BASE_URL + "actions/EmoticonData", {
                            withCredentials: !0
                          })
                        ]
                      );
                    case 2:
                      if ((n = e.sent()).data.emoticons)
                        for (r = 0, i = n.data.emoticons; r < i.length; r++)
                          (o = i[r]),
                            (a = o.name).startsWith("^")
                              ? t.push({ name: a })
                              : ((c = { name: a.substr(1, a.length - 2) }),
                                (s = c.name.toLowerCase()) != c.name &&
                                  (c.name_normalized = s),
                                o.time_last_used &&
                                  (c.last_used = o.time_last_used),
                                o.use_count && (c.use_count = o.use_count),
                                o.time_received &&
                                  (c.time_received = o.time_received),
                                o.appid && (c.appid = o.appid),
                                t.push(c));
                      return [3, 4];
                    case 3:
                      return (
                        (u = e.sent()),
                        console.error("error loading emoticon list", u),
                        [3, 4]
                      );
                    case 4:
                      return this.OnEmoticonListReceived(t), [2];
                  }
                });
              });
            }),
            t
          );
        })(r.a),
        a = new o();
    },
    Z9dU: function(e, t, n) {
      e.exports = {
        chatEntryControls: "chatentry_chatEntryControls_3Ule3",
        chatTextarea: "chatentry_chatTextarea_113iu",
        chatEntryActionsGroup: "chatentry_chatEntryActionsGroup_2WfNo",
        chatEntryActionsContainer: "chatentry_chatEntryActionsContainer_W0Ohk",
        minHeightZero: "chatentry_minHeightZero_2zeeh",
        chatSubmitButton: "chatentry_chatSubmitButton_RVIs8",
        EmbedButton: "chatentry_EmbedButton_3zOBe",
        EmoticonPickerButton: "chatentry_EmoticonPickerButton_Aupsw",
        disabled: "chatentry_disabled_jaQN2",
        Inactive: "chatentry_Inactive_3G-I9",
        AudioLines: "chatentry_AudioLines_IWaba",
        Active: "chatentry_Active_37tPt"
      };
    },
    a5LV: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return s;
      }),
        n.d(t, "b", function() {
          return u;
        });
      var o = n("mrSG"),
        a = n("lkRc"),
        r = n("2vnA"),
        i = n("vDqi"),
        c = n.n(i),
        s = (function() {
          function e() {
            (this.m_mapEmoticonHovers = r.C.map()),
              (this.m_inflightRequests = {});
          }
          return (
            (e.prototype.Get = function(e) {
              return this.m_mapEmoticonHovers.has(e) ||
                this.m_inflightRequests[e]
                ? this.m_mapEmoticonHovers.get(e)
                : (this.Load(e), null);
            }),
            (e.prototype.BLoaded = function(e) {
              return !!this.m_mapEmoticonHovers.get(e);
            }),
            (e.prototype.Load = function(i) {
              return Object(o.b)(this, void 0, void 0, function() {
                var n, r;
                return Object(o.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (n =
                        a.b.COMMUNITY_CDN_URL +
                        "economy/emoticonhoverjson/" +
                        encodeURIComponent(i) +
                        "?l=" +
                        encodeURIComponent(a.b.LANGUAGE) +
                        "&origin=" +
                        Object(a.c)()),
                        (this.m_inflightRequests[i] = !0),
                        (e.label = 1);
                    case 1:
                      return e.trys.push([1, 3, 4, 5]), [4, c.a.get(n)];
                    case 2:
                      return (
                        (r = e.sent().data),
                        (t = r) &&
                        "object" == typeof t &&
                        "number" == typeof t.appid &&
                        "string" == typeof t.app_name
                          ? this.m_mapEmoticonHovers.set(i, r)
                          : this.m_mapEmoticonHovers.set(i, null),
                        [3, 5]
                      );
                    case 3:
                      return (
                        e.sent(), this.m_mapEmoticonHovers.set(i, null), [3, 5]
                      );
                    case 4:
                      return (this.m_inflightRequests[i] = !1), [7];
                    case 5:
                      return [2];
                  }
                  var t;
                });
              });
            }),
            e
          );
        })();
      var u = new s();
    },
    "qD+2": function(e, t, n) {
      "use strict";
      var s = n("mrSG"),
        r = n("2vnA"),
        u = n("kyHq"),
        l = n("bxBv"),
        m = n("lkRc"),
        i = n("8H1D"),
        c = n("r64O"),
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
                  m.b.MEDIA_CDN_URL +
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
                ? m.b.MEDIA_CDN_COMMUNITY_URL +
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
                Object(c.a)(
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
              var n = m.b.LANGUAGE;
              return f(
                e,
                this.GetTokenList(n),
                "english" != n ? this.GetTokenList("english") : null,
                this.m_appid,
                t
              );
            }),
            (e.prototype.SubstituteParams = function(e, t) {
              var n = m.b.LANGUAGE;
              return p(
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
      function f(e, t, n, r, i) {
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
          a = p(a, t, n, r, i);
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
          t && 1 != m.b.EUNIVERSE)
        )
          return e;
        return a;
      }
      function p(e, t, n, r, i) {
        var o = e.match(/{[A-za-z0-9_%#:]+}/g);
        if (o)
          for (var a = 0, c = o; a < c.length; a++) {
            var s = c[a],
              u = f(h(s.slice(1, -1), i), t, n, r, i);
            if (!u) return "";
            e = e.replace(s, u);
          }
        return (e = h(e, i));
      }
      function h(e, t) {
        var n = e.match(/%[A-Za-z0-9_:]+%/g);
        if (n)
          for (var r = 0, i = n; r < i.length; r++) {
            var o = i[r],
              a = o.slice(1, -1).toLowerCase(),
              c = t.get(a);
            null == c
              ? console.log("No rich presence found for", a)
              : (e = e.replace(o, c));
          }
        return e;
      }
      var b = n("MUT6"),
        a = n("qiKp");
      n.d(t, "b", function() {
        return _;
      }),
        n.d(t, "a", function() {
          return y;
        });
      var _ = (function() {
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
                  Object(c.a)(
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
                Object(c.a)(
                  this.m_CMInterface,
                  "CAppInfoStore.GetAppInfo called before Init"
                ),
                Object(c.a)(e, "Requesting App ID 0, which won't ever exist"),
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
              return Object(s.b)(this, void 0, void 0, function() {
                var t, n;
                return Object(s.e)(this, function(e) {
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
            (e.prototype.LoadAppInfoBatch = function(c) {
              return Object(s.b)(this, void 0, void 0, function() {
                var t, n, r, i, o, a;
                return Object(s.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        this.m_cAppInfoRequestsInFlight++,
                        [4, this.LoadAppInfoBatchFromLocalCache(c)]
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
                        (n = l.a.Init(b.b))
                          .Body()
                          .set_language(Object(u.e)(m.b.LANGUAGE)),
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
                            b.h.GetApps(
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
                Object(c.a)(
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
              return Object(s.b)(this, void 0, void 0, function() {
                var n,
                  r = this;
                return Object(s.e)(this, function(e) {
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
            (e.prototype.LoadAppInfoBatchFromLocalCache = function(a) {
              return Object(s.b)(this, void 0, void 0, function() {
                var i,
                  t,
                  n,
                  r,
                  o = this;
                return Object(s.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_CacheStorage
                        ? (console.log(
                            "Loading batch of App Info from Local Cache: ",
                            a
                          ),
                          (i = new Date(new Date().getTime() - 12096e5)),
                          (t = function(r) {
                            return Object(s.b)(o, void 0, void 0, function() {
                              var t, n;
                              return Object(s.e)(this, function(e) {
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
                                        Object(c.a)(
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
              return Object(s.b)(this, void 0, void 0, function() {
                var t, n, r, i;
                return Object(s.e)(this, function(e) {
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
                : 1 != m.b.EUNIVERSE
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
                for (var c = 0, s = i.tokens(); c < s.length; c++) {
                  var u = s[c];
                  a.set(u.name().toLowerCase(), u.value());
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
                      var e = l.a.Init(b.a);
                      return (
                        e.Body().set_appid(t.GetAppID()),
                        e.Body().set_language(m.b.LANGUAGE),
                        b.h.GetAppRichPresenceLocalization(
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
            Object(s.c)([r.k], e.prototype, "OnGetAppsResponse", null),
            Object(s.c)([r.k], e.prototype, "OnRichPresenceLocUpdate", null),
            e
          );
        })(),
        y = new _();
    },
    qiKp: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return o;
      }),
        n.d(t, "b", function() {
          return c;
        }),
        n.d(t, "c", function() {
          return s;
        }),
        n.d(t, "d", function() {
          return u;
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
        c = (function() {
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
        s = (function() {
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
      function u(o) {
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
    rcgg: function(e, t, n) {
      e.exports = {
        NewEmoticonIndicator: "emoticon_NewEmoticonIndicator_3O2gR",
        NewEmoticonCircle: "emoticon_NewEmoticonCircle_JRMFr",
        EmoticonSelector: "emoticon_EmoticonSelector_1_1QI",
        emoticon: "emoticon_emoticon_AB86v",
        large: "emoticon_large_4xBaT",
        EmoticonSelector_Emoticons: "emoticon_EmoticonSelector_Emoticons_XWWY6",
        EmoticonSelector_Separator: "emoticon_EmoticonSelector_Separator_2rvMU",
        EmoticonSelector_SeparatorBackground:
          "emoticon_EmoticonSelector_SeparatorBackground_3_kYc",
        EmoticonSelector_Controls: "emoticon_EmoticonSelector_Controls_2cdkF",
        EmoticonSelector_Item: "emoticon_EmoticonSelector_Item_2C8r7",
        EmoticonSelector_Item_New: "emoticon_EmoticonSelector_Item_New_1vWJH",
        EffectHeading: "emoticon_EffectHeading_2-uNY",
        StickerHeading: "emoticon_StickerHeading_3-4KS",
        GetFestive: "emoticon_GetFestive_1tX6q",
        TopDivider: "emoticon_TopDivider_2A8Fl",
        BottomDivider: "emoticon_BottomDivider_2IZ1K",
        StickerButton: "emoticon_StickerButton_3Wc3j",
        EffectButton: "emoticon_EffectButton_nnnSn",
        EmoticonHover: "emoticon_EmoticonHover_36iQ4",
        Info: "emoticon_Info_1EGMu",
        Name: "emoticon_Name_1Ancw",
        AppName: "emoticon_AppName_335w0",
        StickerHoverSticker: "emoticon_StickerHoverSticker_2VN79",
        EffectHoverEffect: "emoticon_EffectHoverEffect_3ngRv",
        PickerTab: "emoticon_PickerTab_3JpKJ",
        Clock: "emoticon_Clock_2osi8",
        EmoticonItem: "emoticon_EmoticonItem_gZL64"
      };
    },
    wUwH: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return a;
      });
      var r = n("mrSG"),
        i = n("lkRc"),
        o = n("2vnA"),
        a = (function() {
          function n() {
            (this.m_bEmoticonListRequested = !1),
              (this.m_bInitialized = !1),
              (this.m_rgEmoticons = []),
              (this.m_rgFlairs = []),
              (this.m_rgStickers = []),
              (this.m_rgEffects = []),
              (this.m_rtLastStickerOrEffect = Number.MIN_SAFE_INTEGER);
          }
          return (
            (n.GetEmoticonURL = function(e, t) {
              return t
                ? i.b.COMMUNITY_CDN_URL + "economy/emoticonlarge/" + e
                : i.b.COMMUNITY_CDN_URL + "economy/emoticon/" + e;
            }),
            (n.GetEmoticonReplaceRegex = function() {
              return n.sm_EmoticonRegex;
            }),
            (n.BEmoticonFilterMatch = function(e, t) {
              return (
                -1 !==
                (":" + (e.name_normalized || e.name) + ":").indexOf(
                  t.toLowerCase()
                )
              );
            }),
            (n.FilterEmoticons = function(e, t) {
              return t && ":" !== t
                ? e.filter(function(e) {
                    return n.BEmoticonFilterMatch(e, t);
                  })
                : e;
            }),
            (n.BStickerFilterMatch = function(e, t) {
              return -1 < e.name.toLowerCase().indexOf(t.toLowerCase());
            }),
            (n.FilterStickers = function(e, t) {
              return t
                ? e.filter(function(e) {
                    return n.BStickerFilterMatch(e, t);
                  })
                : e;
            }),
            (n.prototype.SearchEmoticons = function(t, u, n) {
              function l(e) {
                return e.name_normalized || e.name;
              }
              void 0 === u && (u = 25),
                void 0 === n && (n = !0),
                this.UpdateEmoticonList(),
                (t = t.toLocaleLowerCase());
              var e = this.recent_emoticons.filter(function(e) {
                  return !t || l(e).startsWith(t);
                }),
                r = this.recent_emoticons.filter(function(e) {
                  return !n && -1 !== l(e).indexOf(t);
                }),
                i = this.m_rgEmoticons.filter(function(e) {
                  return !t || l(e).startsWith(t);
                }),
                o = this.m_rgEmoticons.filter(function(e) {
                  return !n && -1 !== l(e).indexOf(t);
                }),
                m = new Set(),
                d = [];
              function a(e, t, n) {
                for (var r, i, o, a = 0, c = e; a < c.length; a++) {
                  var s = c[a];
                  if (
                    ((i = t),
                    (o = n((r = s))),
                    d.length >= u ||
                      (m.has(r) ||
                        (m.add(r), d.push({ name: l(r), recent: i, new: o })),
                      0))
                  )
                    break;
                }
              }
              return (
                a(e, !0, function(e) {
                  return !(e.last_used || !e.time_received);
                }),
                a(i, !1, function() {
                  return !1;
                }),
                a(r, !0, function(e) {
                  return !(e.last_used || !e.time_received);
                }),
                a(o, !1, function() {
                  return !1;
                }),
                d
              );
            }),
            Object.defineProperty(n.prototype, "is_initialized", {
              get: function() {
                return this.m_bInitialized;
              },
              enumerable: !1,
              configurable: !0
            }),
            (n.prototype.GetTimeReceivedNewestEmoticon = function() {
              return this.UpdateEmoticonList(), this.m_rtMostRecentEmoticon;
            }),
            (n.prototype.GetTimeReceivedForStickerOrEffect = function() {
              return this.m_rtLastStickerOrEffect;
            }),
            (n.prototype.UpdateEmoticonList = function() {
              this.m_bInitialized || this.RequestEmoticonList();
            }),
            Object.defineProperty(n.prototype, "emoticon_list", {
              get: function() {
                return this.UpdateEmoticonList(), this.m_rgEmoticons;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(n.prototype, "flair_list", {
              get: function() {
                return this.UpdateEmoticonList(), this.m_rgFlairs;
              },
              enumerable: !1,
              configurable: !0
            }),
            (n.prototype.GetStickerList = function() {
              return this.m_rgStickers;
            }),
            (n.prototype.GetEffectList = function() {
              return this.m_rgEffects;
            }),
            (n.prototype.GetFlairListByGroupID = function(t) {
              return this.m_rgFlairs.filter(function(e) {
                return e.flairGroupID === t;
              });
            }),
            Object.defineProperty(n.prototype, "recent_emoticons", {
              get: function() {
                return (
                  this.m_rgRecentEmoticons || this.BuildRecentEmoticonList(),
                  this.m_rgRecentEmoticons
                );
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(n.prototype, "recent_stickers", {
              get: function() {
                return (
                  this.m_rgRecentStickers || this.BuildRecentStickerList(),
                  this.m_rgRecentStickers
                );
              },
              enumerable: !1,
              configurable: !0
            }),
            (n.prototype.TrackEmoticonUsage = function(e, t) {
              if (this.m_bInitialized) {
                for (
                  var n, r = new Map(), i = /\[emoticon\]([^[]*)/g;
                  (n = i.exec(e));

                ) {
                  var o = r.get(n[1]) || 0;
                  r.set(n[1], o + 1);
                }
                var a = !1;
                if (r.size) {
                  if (void 0 !== this.m_rgRecentEmoticons)
                    for (
                      var c = 0, s = this.m_rgRecentEmoticons;
                      c < s.length;
                      c++
                    ) {
                      var u = s[c];
                      r.has(u.name) &&
                        ((u.last_used = t),
                        (u.use_count += r.get(u.name)),
                        r.delete(u.name),
                        u.time_received && ((a = !0), delete u.time_received));
                    }
                  if (r.size)
                    for (var l = 0, m = this.m_rgEmoticons; l < m.length; l++) {
                      u = m[l];
                      r.has(u.name) &&
                        ((u.last_used = t),
                        (u.use_count += r.get(u.name)),
                        delete u.time_received,
                        void 0 !== this.m_rgRecentEmoticons &&
                          this.m_rgRecentEmoticons.push(u));
                    }
                  if (
                    void 0 !== this.m_rgRecentEmoticons &&
                    (this.BuildRecentEmoticonList(), a)
                  ) {
                    this.m_rtMostRecentEmoticon = void 0;
                    for (
                      var d = 0, f = this.m_rgRecentEmoticons;
                      d < f.length;
                      d++
                    ) {
                      !(u = f[d]).last_used &&
                        u.time_received &&
                        (!this.m_rtMostRecentEmoticon ||
                          u.time_received > this.m_rtMostRecentEmoticon) &&
                        (this.m_rtMostRecentEmoticon = u.time_received);
                    }
                  }
                }
              }
            }),
            (n.prototype.TrackStickerUsage = function(t, e) {
              var n;
              this.m_bInitialized &&
                (((n = this.m_rgStickers.find(function(e) {
                  return e.name === t;
                })).last_used = e),
                (n.use_count += 1),
                delete n.time_received,
                this.BuildRecentStickerList());
            }),
            (n.prototype.RequestEmoticonList = function() {
              !this.m_bEmoticonListRequested &&
                this.BInitialized() &&
                ((this.m_bEmoticonListRequested = !0),
                this.RequestEmoticonListInternal());
            }),
            (n.prototype.BuildRecentEmoticonList = function() {
              this.m_rgRecentEmoticons = this.BuildRecentList(
                this.m_rgEmoticons
              );
            }),
            (n.prototype.BuildRecentStickerList = function() {
              this.m_rgRecentStickers = this.BuildRecentList(this.m_rgStickers);
            }),
            (n.prototype.BuildRecentList = function(e) {
              var r = this.GetServerTime() - 604800,
                t = e.filter(function(e) {
                  var t = e.last_used,
                    n = e.time_received;
                  return t || (n && r < n);
                });
              return (
                t.sort(function(e, t) {
                  return (
                    (t.last_used || t.time_received) -
                    (e.last_used || e.time_received)
                  );
                }),
                t.slice(0, 50)
              );
            }),
            (n.prototype.OnEmoticonListReceived = function(e) {
              (this.m_rgFlairs = []),
                (this.m_rgEmoticons = []),
                (this.m_rgRecentEmoticons = void 0),
                (this.m_rtMostRecentEmoticon = void 0);
              for (
                var t = this.GetServerTime() - 604800, n = 0, r = e;
                n < r.length;
                n++
              ) {
                var i = r[n],
                  o = i.name;
                o.startsWith("^")
                  ? this.m_rgFlairs.push({
                      name: o.match(new RegExp(/:(.*):/))[1],
                      flairGroupID: o.match(new RegExp(/\^(.*)\^/))[1]
                    })
                  : (!i.last_used && i.time_received > t
                      ? (!this.m_rtMostRecentEmoticon ||
                          i.time_received > this.m_rtMostRecentEmoticon) &&
                        (this.m_rtMostRecentEmoticon = i.time_received)
                      : delete i.time_received,
                    this.m_rgEmoticons.push(i));
              }
              (this.m_bInitialized = !0), (this.m_bEmoticonListRequested = !1);
            }),
            (n.sm_EmoticonRegex = new RegExp("ː([a-zA-Z0-9_\\-]+)ː", "g")),
            Object(r.c)([o.C], n.prototype, "m_bInitialized", void 0),
            Object(r.c)([o.C], n.prototype, "m_rtMostRecentEmoticon", void 0),
            Object(r.c)([o.C], n.prototype, "m_rtLastStickerOrEffect", void 0),
            Object(r.c)([o.k], n.prototype, "TrackEmoticonUsage", null),
            n
          );
        })();
    }
  }
]);

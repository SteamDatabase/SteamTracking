/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    "0QoN": function(e, t, r) {
      "use strict";
      var i = r("mrSG"),
        n = r("q1tI"),
        a = r.n(n),
        o = r("okNM"),
        s = r("bxiW"),
        c = r("TtDX"),
        u = r("Gorr"),
        d = r("6Y59"),
        p = r("TLQK"),
        l = r("exH9"),
        m = r("Z9dU"),
        g = r.n(m),
        f = 1576780700,
        h = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(i.d)(t, e),
            (t.prototype.OnEmoticonClick = function(e) {
              var t,
                r = this.props,
                i = (r.emoticonStore, r.SetUIDisplayPref),
                n = r.contextOptions;
              Object(c.a)(
                a.a.createElement(u.b, {
                  emoticonStore: this.props.emoticonStore,
                  emoticonHoverStore: this.props.emoticonHoverStore,
                  strFlairGroupID: this.props.strFlairGroupID,
                  OnSelected: this.props.OnEmoticonSelected,
                  onRoomEffectSelected: this.props.onRoomEffectSelected,
                  onStickerSelected: this.props.onStickerSelected,
                  roomEffectSettings: this.props.roomEffectSettings,
                  bShowStickers: this.props.bShowStickers,
                  bShowEffects: this.props.bShowEffects
                }),
                e,
                n || {
                  bOverlapHorizontal: !0,
                  bPreferPopLeft: !0,
                  bPreferPopTop: !0
                }
              ),
                this.BHaveUnseenEmoticons() &&
                  i &&
                  ((!(t = this.GetNewestIndicatorTime()) || t < f) && (t = f),
                  i("rtLastAckedNewEmoticons", t));
            }),
            (t.prototype.GetNewestIndicatorTime = function() {
              var e = this.props.emoticonStore,
                t = Number.MIN_SAFE_INTEGER,
                r = e.GetTimeReceivedNewestEmoticon();
              r && (t = r);
              var i = e.GetTimeReceivedForStickerOrEffect();
              return (t = Math.max(i, t)) > Number.MIN_SAFE_INTEGER
                ? t
                : void 0;
            }),
            (t.prototype.BHaveUnseenEmoticons = function() {
              var e = this.props.rtLastAckedNewEmoticons,
                t = this.GetNewestIndicatorTime();
              return !e || e < f || (t && (!e || e < t));
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.disabled,
                r = e.className,
                i = e.ttip,
                n = e.useImg,
                o = [r],
                s = !1;
              return (
                t
                  ? o.push("disabled")
                  : this.BHaveUnseenEmoticons() && (s = !0),
                i && o.push("ttip"),
                n
                  ? a.a.createElement(
                      "span",
                      { onClick: this.OnEmoticonClick },
                      a.a.createElement("img", {
                        src: this.props.useImg,
                        className: l.a.apply(void 0, o),
                        title:
                          this.props.title ||
                          Object(p.d)("#ChatEntryButton_Emoticon"),
                        "data-tooltip-text": i
                      })
                    )
                  : (o.push(g.a.chatSubmitButton, g.a.EmoticonPickerButton),
                    a.a.createElement(
                      "button",
                      {
                        className: l.a.apply(void 0, o),
                        type: "button",
                        onClick: this.OnEmoticonClick,
                        title:
                          this.props.title ||
                          Object(p.d)("#ChatEntryButton_Emoticon"),
                        disabled: t,
                        "data-tooltip-text": i
                      },
                      this.props.buttonIcon || a.a.createElement(d.j, null),
                      s && a.a.createElement(u.c, null)
                    ))
              );
            }),
            Object(i.c)([s.a], t.prototype, "OnEmoticonClick", null),
            (t = Object(i.c)([o.a], t))
          );
        })(a.a.Component);
      t.a = h;
    },
    "6+2x": function(e, t, r) {
      e.exports = {
        HoverPosition: "hoverposition_HoverPosition_3vg1v",
        Ready: "hoverposition_Ready_1Ye_0",
        NoSpace: "hoverposition_NoSpace_pxVZH",
        EnablePointerEvents: "hoverposition_EnablePointerEvents_2b9OE"
      };
    },
    "8H1D": function(e, t, r) {
      "use strict";
      r.d(t, "b", function() {
        return o;
      }),
        r.d(t, "a", function() {
          return i;
        });
      var n = r("lkRc"),
        o = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function i(e, t) {
        var r = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = o),
          44 == e.length && ((r = e.substr(-4)), (e = e.substr(0, 40)));
        var i = n.b.MEDIA_CDN_COMMUNITY_URL + "images/avatars/";
        return (
          (i += e.substr(0, 2) + "/" + e),
          t && "small" != t && (i += "_" + t),
          (i += r)
        );
      }
    },
    DWPT: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return a;
      });
      var u = r("mrSG"),
        d = r("q1tI"),
        i = r("bxiW"),
        n = r("okNM"),
        o = r("qiKp"),
        p = r("exH9"),
        s = r("6+2x"),
        l = r.n(s),
        a = (function(t) {
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
                r = e.className,
                i = e.style,
                n = e.bEnablePointerEvents,
                o = (e.direction,
                e.nBodyAlignment,
                e.nBodyDistance,
                e.nAllowOffscreenPx,
                e.nMaxLateralMoveOnScreen,
                e.children),
                s = (e.onNoSpace,
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
                a = Object.assign({ left: this.state.x, top: this.state.y }, i),
                c = !t || t.visible;
              return d.createElement(
                "div",
                Object(u.a)({}, s, {
                  className: Object(p.a)(
                    r,
                    l.a.HoverPosition,
                    c && this.state.hoverPositionReady && l.a.Ready,
                    this.m_bNoSpace && l.a.NoSpace,
                    n && l.a.EnablePointerEvents
                  ),
                  style: a,
                  ref: this.bindHover
                }),
                o
              );
            }),
            (e.prototype.positionHover = function() {
              var e,
                t = this.m_elHover,
                r = this.props.target;
              if (
                t &&
                r &&
                (!this.state.hoverPositionReady ||
                  !this.props.visibilityObserver ||
                  this.props.visibilityObserver.visible)
              ) {
                var i = r.ownerDocument.defaultView;
                if (i && !i.closed) {
                  var n = t.querySelector(".hover_arrow.left"),
                    o = t.querySelector(".hover_arrow.right"),
                    s = t.querySelector(".hover_arrow.top"),
                    a = t.querySelector(".hover_arrow.bottom"),
                    c = r.getBoundingClientRect(),
                    u = t.getBoundingClientRect(),
                    d =
                      "overlay" == this.props.direction ||
                      "overlay-center" == this.props.direction;
                  n && n.setAttribute("style", "display: none;"),
                    o && o.setAttribute("style", "display: none;"),
                    s && s.setAttribute("style", "display: none;"),
                    a && a.setAttribute("style", "display: none;");
                  var p = this.props.direction,
                    l = B(
                      p,
                      this.props.nBodyAlignment,
                      this.props.nBodyDistance,
                      c,
                      u,
                      i.innerWidth,
                      i.innerHeight
                    ),
                    m = l.nLeft,
                    g = l.nTop,
                    f = l.nOverflow,
                    h = l.nLateralOverflow;
                  if (f > this.props.nAllowOffscreenPx && !d) {
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
                      y = B(
                        _,
                        this.props.nBodyAlignment,
                        this.props.nBodyDistance,
                        c,
                        u,
                        i.innerWidth,
                        i.innerHeight
                      ),
                      v = y.nLeft,
                      b = y.nTop,
                      F = y.nOverflow,
                      M = y.nLateralOverflow;
                    if (
                      (F < f && ((p = _), (m = v), (g = b), (f = F), (h = M)),
                      f > this.props.nAllowOffscreenPx)
                    )
                      return (
                        t.setAttribute("style", "display: none;"),
                        (this.m_bNoSpace = !0),
                        void (this.props.onNoSpace && this.props.onNoSpace())
                      );
                  }
                  0 === this.props.nMaxLateralMoveOnScreen ||
                    d ||
                    ((g = (e = (function(e, t, r, i, n) {
                      var o = Math.max(t[0], t[1]);
                      void 0 !== e && (o = Math.min(e, o));
                      o = Math.max(0, o);
                      var s = t[0] > t[1] ? o : -o;
                      "left" === r || "right" === r ? (i += s) : (n += s);
                      return [i, n];
                    })(this.props.nMaxLateralMoveOnScreen, h, p, g, m))[0]),
                    (m = e[1]));
                  var w = null;
                  switch (p) {
                    case "left":
                      w = o;
                      break;
                    case "right":
                      w = n;
                      break;
                    case "top":
                      w = a;
                      break;
                    case "bottom":
                      w = s;
                  }
                  w && w.setAttribute("style", ""),
                    m != this.state.x && this.setState({ x: m }),
                    g != this.state.y && this.setState({ y: g }),
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
            Object(u.c)([i.a], e.prototype, "bindHover", null),
            Object(u.c)([i.a], e.prototype, "OnWindowBlur", null),
            (e = Object(u.c)([n.a], e))
          );
        })(d.Component);
      function B(e, t, r, i, n, o, s) {
        var a,
          c,
          u,
          d,
          p = o,
          l = s;
        switch (e) {
          case "right":
            (a = i.right + r),
              (c = m(i.top, i.height, n.height, t)),
              (u = Math.max(0, a + n.width - p)),
              (d = [Math.max(0, 0 - c), Math.max(0, c + n.height - l)]);
            break;
          case "left":
            (a = i.left - r - n.width),
              (c = m(i.top, i.height, n.height, t)),
              (u = Math.max(0, 0 - a)),
              (d = [Math.max(0, 0 - c), Math.max(0, c + n.height - l)]);
            break;
          case "bottom":
            (a = m(i.left, i.width, n.width, t)),
              (c = i.bottom + r),
              (u = Math.max(0, c + n.height - l)),
              (d = [Math.max(0, 0 - a), Math.max(0, a + n.width - p)]);
            break;
          case "top":
            (a = m(i.left, i.width, n.width, t)),
              (c = i.top - r - n.height),
              (u = Math.max(0, 0 - c)),
              (d = [Math.max(0, 0 - a), Math.max(0, a + n.width - p)]);
            break;
          case "overlay":
            (a = i.left), (c = i.top), (d = [(u = 0), 0]);
            break;
          case "overlay-center":
            (a = i.left + 0.5 * i.width - 0.5 * n.width),
              (c = i.top + 0.5 * i.height - 0.5 * n.height),
              (d = [(u = 0), 0]);
        }
        return { nLeft: a, nTop: c, nOverflow: u, nLateralOverflow: d };
      }
      function m(e, t, r, i) {
        return Math.max(0, Math.min(1, i)) * (t - r) + e;
      }
    },
    Gorr: function(e, t, r) {
      "use strict";
      var n = r("mrSG"),
        o = r("X3Ds"),
        i = r("wUwH"),
        s = r("okNM"),
        u = r("q1tI"),
        a = r("i8i4"),
        c = r("DWPT"),
        d = r("bxiW"),
        p = r("y+6m"),
        l = r("2vnA"),
        m = r("TLQK"),
        g = (function(t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          return (
            Object(n.d)(e, t),
            (e.prototype.render = function() {
              if (null == this.props.text)
                return u.createElement(u.Fragment, null, this.props.children);
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
              if (1 != u.Children.count(this.props.children))
                return (
                  console.log(
                    "Error: CopyableText must be the parent of exactly one child:\n\tcopystyle=" +
                      this.props.style +
                      " copytext=" +
                      e
                  ),
                  u.createElement(u.Fragment, null, this.props.children)
                );
              var t = u.Children.only(this.props.children);
              return u.cloneElement(t, {
                "data-copystyle": this.props.style,
                "data-copytext": e
              });
            }),
            (e.defaultProps = { text: "" }),
            e
          );
        })(u.Component);
      var f = r("rcgg"),
        h = r.n(f),
        _ = r("exH9");
      var y = r("lkRc");
      r.d(t, "a", function() {
        return v;
      }),
        r.d(t, "b", function() {
          return F;
        }),
        r.d(t, "c", function() {
          return B;
        });
      var v = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.OnMouseEnter = function(e) {
              this.props.emoticonHoverStore
                .GetEmoticonHover(e.currentTarget.getAttribute("data-emoticon"))
                .Show(e, b);
            }),
            (t.prototype.OnMouseLeave = function(e) {
              this.props.emoticonHoverStore
                .GetEmoticonHover(e.currentTarget.getAttribute("data-emoticon"))
                .Hide(e);
            }),
            (t.prototype.render = function() {
              var e = ":" + this.props.emoticon + ":";
              return u.createElement(
                g,
                { text: e, style: "merge-adjacent" },
                u.createElement("img", {
                  src: i.a.GetEmoticonURL(
                    this.props.emoticon,
                    this.props.large
                  ),
                  alt: e,
                  className: Object(_.a)(
                    h.a.emoticon,
                    this.props.large ? h.a.large : void 0
                  ),
                  "data-emoticon": this.props.emoticon,
                  onMouseEnter: this.OnMouseEnter,
                  onMouseLeave: this.OnMouseLeave
                })
              );
            }),
            Object(n.c)([d.a], t.prototype, "OnMouseEnter", null),
            Object(n.c)([d.a], t.prototype, "OnMouseLeave", null),
            t
          );
        })(u.PureComponent),
        b = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.render = function() {
              return u.createElement(
                c.a,
                {
                  visibilityObserver: this.props.hover,
                  target: this.props.target,
                  style: { zIndex: 1700 }
                },
                u.createElement("div", {
                  className: "emoticon_hover_content",
                  dangerouslySetInnerHTML: {
                    __html: this.props.hover.emoticon_html
                  }
                }),
                u.createElement("div", {
                  className: "hover_arrow left emoticon_hover_arrow"
                }),
                u.createElement("div", {
                  className: "hover_arrow right emoticon_hover_arrow"
                })
              );
            }),
            (t = Object(n.c)([s.a], t))
          );
        })(u.Component),
        F = (function(i) {
          function e(e) {
            var t = i.call(this, e) || this;
            (t.m_ScrollCoordinator = new o.e(40)),
              (t.state = { strSearchText: "" });
            var r = t.props.emoticonStore;
            return (
              r.is_initialized ||
                (r.UpdateEmoticonList(),
                (t.m_disposeEmoticonStore = Object(l.D)(
                  function() {
                    return r.is_initialized;
                  },
                  function() {
                    return t.forceUpdate();
                  }
                ))),
              t
            );
          }
          return (
            Object(n.d)(e, i),
            (e.prototype.componentWillUnmount = function() {
              this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
            }),
            (e.prototype.OnClick = function(e) {
              var t = e.currentTarget.getAttribute("data-emoticon");
              this.props.OnSelected(t, e.shiftKey),
                this.props.emoticonHoverStore.GetEmoticonHover(t).Hide(e);
            }),
            (e.prototype.OnSearchInput = function(e) {
              var t = e.currentTarget.value;
              this.setState({ strSearchText: t });
            }),
            (e.prototype.OnSubmit = function(e) {
              e.preventDefault(),
                this.m_strFirstEmoticon &&
                  this.props.OnSelected(this.m_strFirstEmoticon, !1);
            }),
            (e.prototype.RenderEmoticon = function(e, t) {
              var r = t.name;
              return (
                e && (r = e + t.name),
                u.createElement(R, {
                  key: r,
                  emoticon: t,
                  emoticonHoverStore: this.props.emoticonHoverStore,
                  onClick: this.OnClick,
                  coordinator: this.m_ScrollCoordinator
                })
              );
            }),
            (e.prototype.OnScrollRef = function(e) {
              this.m_ScrollCoordinator.SetParent(e);
            }),
            (e.prototype.OnScroll = function(e) {
              this.m_ScrollCoordinator.RecomputeVisibility();
            }),
            (e.prototype.componentDidUpdate = function() {
              this.m_ScrollCoordinator.InvalidateOffsetsAndRecompute();
            }),
            (e.prototype.getAvailableEffects = function() {
              var t = this;
              return this.props.roomEffectSettings
                ? this.props.emoticonStore.GetEffectList().filter(function(e) {
                    return t.props.roomEffectSettings[e.name];
                  })
                : [];
            }),
            (e.prototype.getAvailableStickers = function() {
              return this.props.emoticonStore.GetStickerList();
            }),
            (e.prototype.renderEffectButtons = function() {
              var t = this;
              if (!this.props.roomEffectSettings) return null;
              var e = this.getAvailableEffects();
              return 0 == e.length
                ? null
                : u.createElement(
                    u.Fragment,
                    null,
                    u.createElement(
                      "div",
                      { className: h.a.EffectHeading },
                      Object(m.d)("#EmoticonPicker_EffectHeading")
                    ),
                    u.createElement(
                      "div",
                      { style: { display: "flex", flexWrap: "wrap" } },
                      e.map(function(e) {
                        return u.createElement(w, {
                          key: e.name,
                          effect: e,
                          onEffectSelected: t.props.onRoomEffectSelected,
                          roomEffectSettings: t.props.roomEffectSettings
                        });
                      })
                    ),
                    u.createElement("div", { className: h.a.TopDivider })
                  );
            }),
            (e.prototype.renderStickerButtons = function() {
              var t = this,
                e = this.getAvailableStickers();
              return 0 == e.length
                ? null
                : u.createElement(
                    u.Fragment,
                    null,
                    u.createElement(
                      "div",
                      { className: h.a.EffectHeading },
                      Object(m.d)("#EmoticonPicker_StickerHeading")
                    ),
                    u.createElement(
                      "div",
                      null,
                      e.map(function(e) {
                        return u.createElement(M, {
                          key: e.name,
                          stickerName: e.name,
                          onStickerSelected: t.props.onStickerSelected
                        });
                      })
                    ),
                    u.createElement("div", { className: h.a.BottomDivider })
                  );
            }),
            (e.prototype.renderStickersAndEffectsButtons = function() {
              var e = this.props,
                t = e.bShowEffects,
                r = e.bShowStickers;
              return t || r
                ? u.createElement(
                    u.Fragment,
                    null,
                    this.renderEffectButtons(),
                    this.renderStickerButtons()
                  )
                : null;
            }),
            (e.prototype.render = function() {
              var e,
                t,
                r,
                i,
                n,
                o = this.props.emoticonStore,
                s = [],
                a = [],
                c = !1;
              return (
                o.is_initialized &&
                  (0 < (e = this.state.strSearchText.trim()).length
                    ? ((c = !0),
                      (a = (s = o.SearchEmoticons(e, 50, !1)).map(
                        this.RenderEmoticon.bind(this, "")
                      )),
                      (this.m_strFirstEmoticon = s.length ? s[0].name : null))
                    : (this.props.strFlairGroupID
                        ? (a = o
                            .GetFlairListByGroupID(this.props.strFlairGroupID)
                            .map(this.RenderEmoticon.bind(this, "")))
                        : ((n = o.recent_emoticons),
                          (t = o.emoticon_list),
                          (r = Math.ceil(t.length / 9)) <= 2
                            ? (n = [])
                            : ((i = Math.floor(r / 2)),
                              9 < (n = n.slice(0, 9 * i)).length &&
                                n.length % 9 <= 2 &&
                                (n = n.slice(0, 9 * Math.floor(n.length / 9)))),
                          n.length &&
                            (a = n.map(
                              this.RenderEmoticon.bind(this, "recent_")
                            )).push(
                              u.createElement(
                                "div",
                                {
                                  key: "__recent_all_separator",
                                  className: h.a.EmoticonSelector_Separator
                                },
                                u.createElement("div", {
                                  className:
                                    h.a.EmoticonSelector_SeparatorBackground
                                })
                              )
                            ),
                          1e3 < t.length && (t = t.slice(0, 1e3)),
                          32 <= t.length && (c = !0),
                          a.push.apply(
                            a,
                            t.map(this.RenderEmoticon.bind(this, ""))
                          )),
                      (this.m_strFirstEmoticon = null))),
                u.createElement(
                  p.c,
                  null,
                  u.createElement(
                    "div",
                    { className: h.a.EmoticonSelector },
                    u.createElement(
                      "div",
                      {
                        className: h.a.EmoticonSelector_Emoticons,
                        ref: this.OnScrollRef,
                        onScroll: this.OnScroll
                      },
                      this.renderStickersAndEffectsButtons(),
                      a
                    ),
                    c &&
                      u.createElement(
                        "div",
                        { className: h.a.EmoticonSelector_Controls },
                        u.createElement(
                          "form",
                          { onSubmit: this.OnSubmit },
                          u.createElement("input", {
                            type: "text",
                            placeholder: Object(m.d)("#Emoticon_Search"),
                            value: this.state.strSearchText,
                            onChange: this.OnSearchInput,
                            className: "ContextMenuAutoFocus friendSearchInput"
                          })
                        )
                      )
                  )
                )
              );
            }),
            Object(n.c)([d.a], e.prototype, "OnClick", null),
            Object(n.c)([d.a], e.prototype, "OnSearchInput", null),
            Object(n.c)([d.a], e.prototype, "OnSubmit", null),
            Object(n.c)([d.a], e.prototype, "OnScrollRef", null),
            Object(n.c)([d.a], e.prototype, "OnScroll", null),
            e
          );
        })(u.Component),
        M = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                imageURL:
                  y.b.COMMUNITY_CDN_URL +
                  "economy/sticker/" +
                  e.props.stickerName
              }),
              e
            );
          }
          return (
            Object(n.d)(e, t),
            (e.prototype.render = function() {
              var e = this;
              return u.createElement(
                "button",
                {
                  className: h.a.StickerButton,
                  type: "button",
                  onClick: function() {
                    return e.props.onStickerSelected(e.props.stickerName);
                  },
                  title: Object(m.d)("#ChatEntryButton_SendSticker")
                },
                u.createElement("img", {
                  style: { width: "100%" },
                  src: this.state.imageURL
                })
              );
            }),
            e
          );
        })(u.Component),
        w = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.effect.name,
                t = this.props.roomEffectSettings[e],
                r = this.props.onEffectSelected;
              return u.createElement(
                "button",
                {
                  key: e,
                  className: h.a.RoomEffectButton,
                  type: "button",
                  onClick: function() {
                    return r(e);
                  },
                  title: Object(m.d)(t.buttonToken)
                },
                t.renderEffectIcon(),
                u.createElement(
                  "span",
                  { className: h.a.CountBadge },
                  this.props.effect.name.startsWith("lny2020_")
                    ? "∞"
                    : this.props.effect.count
                )
              );
            }),
            t
          );
        })(u.Component);
      function B() {
        return u.createElement(
          "div",
          { className: h.a.NewEmoticonIndicator },
          u.createElement("div", { className: h.a.NewEmoticonCircle })
        );
      }
      var R = (function(r) {
        function e(e) {
          var t = r.call(this, e) || this;
          return (t.state = { visible: !1 }), t;
        }
        return (
          Object(n.d)(e, r),
          (e.prototype.SetVisible = function(e) {
            e && !this.state.visible && this.setState({ visible: !0 });
          }),
          (e.prototype.componentDidMount = function() {
            this.props.coordinator.RegisterChild(
              a.findDOMNode(this),
              this.SetVisible
            );
          }),
          (e.prototype.componentWillUnmount = function() {
            this.props.coordinator.UnregisterChild(a.findDOMNode(this));
          }),
          (e.prototype.render = function() {
            var e = this.props.emoticon,
              t = [h.a.EmoticonSelector_Item],
              r = !1;
            return (
              !e.last_used &&
                e.time_received &&
                (t.push(h.a.EmoticonSelector_Item_New), (r = !0)),
              u.createElement(
                "div",
                {
                  className: _.a.apply(void 0, t),
                  "data-emoticon": e.name,
                  onClick: this.props.onClick
                },
                this.state.visible &&
                  u.createElement(v, {
                    emoticonHoverStore: this.props.emoticonHoverStore,
                    emoticon: e.name,
                    large: !0
                  }),
                r && u.createElement(B, null)
              )
            );
          }),
          Object(n.c)([d.a], e.prototype, "SetVisible", null),
          e
        );
      })(u.Component);
    },
    MUT6: function(e, t, r) {
      "use strict";
      r.d(t, "b", function() {
        return c;
      }),
        r.d(t, "a", function() {
          return d;
        }),
        r.d(t, "g", function() {
          return b;
        }),
        r.d(t, "d", function() {
          return M;
        }),
        r.d(t, "c", function() {
          return B;
        }),
        r.d(t, "e", function() {
          return W;
        }),
        r.d(t, "f", function() {
          return N;
        }),
        r.d(t, "h", function() {
          return i;
        });
      var n = r("mrSG"),
        o = r("hRO2"),
        s = r("RD/U");
      var i,
        a,
        c = (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, [1], null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.appids = function() {
              return o.Message.getField(this, 1);
            }),
            (i.prototype.set_appids = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (i.prototype.add_appids = function(e, t) {
              o.Message.addToRepeatedField(this, 1, e, t);
            }),
            (i.prototype.language = function() {
              return o.Message.getField(this, 2);
            }),
            (i.prototype.set_language = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {
                appids: o.Message.getField(t, 1),
                language: o.Message.getField(t, 2)
              };
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              var t = new i();
              return t.set_appids(e.appids), t.set_language(e.language), t;
            }),
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
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
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {
              var r = o.Message.getField(e, 1);
              void 0 !== r && t.writeRepeatedInt32(1, r),
                void 0 !== (r = o.Message.getField(e, 2)) &&
                  t.writeUint32(2, r);
            }),
            (i.prototype.getClassName = function() {
              return "CCommunity_GetApps_Request";
            }),
            i
          );
        })(o.Message),
        u = (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, [1], null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.apps = function() {
              return o.Message.getRepeatedWrapperField(this, s.a, 1);
            }),
            (i.prototype.set_apps = function(e) {
              o.Message.setRepeatedWrapperField(this, 1, e);
            }),
            (i.prototype.add_apps = function(e, t) {
              return o.Message.addToRepeatedWrapperField(this, 1, e, s.a, t);
            }),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {
                apps: o.Message.toObjectList(t.apps(), s.a.toObject, e)
              };
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              var t = new i();
              return (
                t.set_apps(
                  (Array.isArray(e.apps) ? e.apps : []).map(function(e) {
                    return s.a.fromObject(e);
                  })
                ),
                t
              );
            }),
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    var r = new s.a();
                    t.readMessage(r, s.a.deserializeBinaryFromReader),
                      e.add_apps(r);
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {
              var r = e.apps();
              0 < r.length &&
                t.writeRepeatedMessage(1, r, s.a.serializeBinaryToWriter);
            }),
            (i.prototype.getClassName = function() {
              return "CCommunity_GetApps_Response";
            }),
            i
          );
        })(o.Message),
        d = (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.appid = function() {
              return o.Message.getField(this, 1);
            }),
            (i.prototype.set_appid = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (i.prototype.language = function() {
              return o.Message.getField(this, 2);
            }),
            (i.prototype.set_language = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {
                appid: o.Message.getField(t, 1),
                language: o.Message.getField(t, 2)
              };
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              var t = new i();
              return t.set_appid(e.appid), t.set_language(e.language), t;
            }),
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
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
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {
              var r = o.Message.getField(e, 1);
              void 0 !== r && t.writeInt32(1, r),
                void 0 !== (r = o.Message.getField(e, 2)) &&
                  t.writeString(2, r);
            }),
            (i.prototype.getClassName = function() {
              return "CCommunity_GetAppRichPresenceLocalization_Request";
            }),
            i
          );
        })(o.Message),
        p = (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, [2], null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.appid = function() {
              return o.Message.getField(this, 1);
            }),
            (i.prototype.set_appid = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (i.prototype.token_lists = function() {
              return o.Message.getRepeatedWrapperField(this, m, 2);
            }),
            (i.prototype.set_token_lists = function(e) {
              o.Message.setRepeatedWrapperField(this, 2, e);
            }),
            (i.prototype.add_token_lists = function(e, t) {
              return o.Message.addToRepeatedWrapperField(this, 2, e, m, t);
            }),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {
                appid: o.Message.getField(t, 1),
                token_lists: o.Message.toObjectList(
                  t.token_lists(),
                  m.toObject,
                  e
                )
              };
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              var t = new i();
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
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_appid(t.readInt32());
                    break;
                  case 2:
                    var r = new m();
                    t.readMessage(r, m.deserializeBinaryFromReader),
                      e.add_token_lists(r);
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {
              var r = o.Message.getField(e, 1);
              void 0 !== r && t.writeInt32(1, r),
                0 < (r = e.token_lists()).length &&
                  t.writeRepeatedMessage(2, r, m.serializeBinaryToWriter);
            }),
            (i.prototype.getClassName = function() {
              return "CCommunity_GetAppRichPresenceLocalization_Response";
            }),
            i
          );
        })(o.Message),
        l = (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.name = function() {
              return o.Message.getField(this, 1);
            }),
            (i.prototype.set_name = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (i.prototype.value = function() {
              return o.Message.getField(this, 2);
            }),
            (i.prototype.set_value = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {
                name: o.Message.getField(t, 1),
                value: o.Message.getField(t, 2)
              };
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              var t = new i();
              return t.set_name(e.name), t.set_value(e.value), t;
            }),
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
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
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {
              var r = o.Message.getField(e, 1);
              void 0 !== r && t.writeString(1, r),
                void 0 !== (r = o.Message.getField(e, 2)) &&
                  t.writeString(2, r);
            }),
            (i.prototype.getClassName = function() {
              return "CCommunity_GetAppRichPresenceLocalization_Response_Token";
            }),
            i
          );
        })(o.Message),
        m = (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, [2], null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.language = function() {
              return o.Message.getField(this, 1);
            }),
            (i.prototype.set_language = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (i.prototype.tokens = function() {
              return o.Message.getRepeatedWrapperField(this, l, 2);
            }),
            (i.prototype.set_tokens = function(e) {
              o.Message.setRepeatedWrapperField(this, 2, e);
            }),
            (i.prototype.add_tokens = function(e, t) {
              return o.Message.addToRepeatedWrapperField(this, 2, e, l, t);
            }),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {
                language: o.Message.getField(t, 1),
                tokens: o.Message.toObjectList(t.tokens(), l.toObject, e)
              };
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              var t = new i();
              return (
                t.set_language(e.language),
                t.set_tokens(
                  (Array.isArray(e.tokens) ? e.tokens : []).map(function(e) {
                    return l.fromObject(e);
                  })
                ),
                t
              );
            }),
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_language(t.readString());
                    break;
                  case 2:
                    var r = new l();
                    t.readMessage(r, l.deserializeBinaryFromReader),
                      e.add_tokens(r);
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {
              var r = o.Message.getField(e, 1);
              void 0 !== r && t.writeString(1, r),
                0 < (r = e.tokens()).length &&
                  t.writeRepeatedMessage(2, r, l.serializeBinaryToWriter);
            }),
            (i.prototype.getClassName = function() {
              return "CCommunity_GetAppRichPresenceLocalization_Response_TokenList";
            }),
            i
          );
        })(o.Message),
        g = (o.Message,
        (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.gidcomment = function() {
              return o.Message.getField(this, 1);
            }),
            (i.prototype.set_gidcomment = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (i.prototype.steamid = function() {
              return o.Message.getField(this, 2);
            }),
            (i.prototype.set_steamid = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (i.prototype.timestamp = function() {
              return o.Message.getField(this, 3);
            }),
            (i.prototype.set_timestamp = function(e) {
              o.Message.setField(this, 3, e);
            }),
            (i.prototype.text = function() {
              return o.Message.getField(this, 4);
            }),
            (i.prototype.set_text = function(e) {
              o.Message.setField(this, 4, e);
            }),
            (i.prototype.upvotes = function() {
              return o.Message.getField(this, 5);
            }),
            (i.prototype.set_upvotes = function(e) {
              o.Message.setField(this, 5, e);
            }),
            (i.prototype.hidden = function() {
              return o.Message.getField(this, 6);
            }),
            (i.prototype.set_hidden = function(e) {
              o.Message.setField(this, 6, e);
            }),
            (i.prototype.hidden_by_user = function() {
              return o.Message.getField(this, 7);
            }),
            (i.prototype.set_hidden_by_user = function(e) {
              o.Message.setField(this, 7, e);
            }),
            (i.prototype.deleted = function() {
              return o.Message.getField(this, 8);
            }),
            (i.prototype.set_deleted = function(e) {
              o.Message.setField(this, 8, e);
            }),
            (i.prototype.ipaddress = function(e) {
              return (
                void 0 === e && (e = !0),
                o.Message.getWrapperField(this, s.c, 9, e ? 1 : 0)
              );
            }),
            (i.prototype.set_ipaddress = function(e) {
              o.Message.setWrapperField(this, 9, e);
            }),
            (i.prototype.total_hidden = function() {
              return o.Message.getField(this, 10);
            }),
            (i.prototype.set_total_hidden = function(e) {
              o.Message.setField(this, 10, e);
            }),
            (i.prototype.upvoted_by_user = function() {
              return o.Message.getField(this, 11);
            }),
            (i.prototype.set_upvoted_by_user = function(e) {
              o.Message.setField(this, 11, e);
            }),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r,
                i = {
                  gidcomment: o.Message.getField(t, 1),
                  steamid: o.Message.getField(t, 2),
                  timestamp: o.Message.getField(t, 3),
                  text: o.Message.getField(t, 4),
                  upvotes: o.Message.getField(t, 5),
                  hidden: o.Message.getField(t, 6),
                  hidden_by_user: o.Message.getField(t, 7),
                  deleted: o.Message.getField(t, 8),
                  ipaddress: (r = t.ipaddress(!1)) && s.c.toObject(e, r),
                  total_hidden: o.Message.getField(t, 10),
                  upvoted_by_user: o.Message.getField(t, 11)
                };
              return e && (i.$jspbMessageInstance = t), i;
            }),
            (i.fromObject = function(e) {
              var t = new i();
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
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
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
                    var r = new s.c();
                    t.readMessage(r, s.c.deserializeBinaryFromReader),
                      e.set_ipaddress(r);
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
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {
              var r = o.Message.getField(e, 1);
              void 0 !== r && t.writeFixed64String(1, r),
                void 0 !== (r = o.Message.getField(e, 2)) &&
                  t.writeFixed64String(2, r),
                void 0 !== (r = o.Message.getField(e, 3)) &&
                  t.writeUint32(3, r),
                void 0 !== (r = o.Message.getField(e, 4)) &&
                  t.writeString(4, r),
                void 0 !== (r = o.Message.getField(e, 5)) && t.writeInt32(5, r),
                void 0 !== (r = o.Message.getField(e, 6)) && t.writeBool(6, r),
                void 0 !== (r = o.Message.getField(e, 7)) && t.writeBool(7, r),
                void 0 !== (r = o.Message.getField(e, 8)) && t.writeBool(8, r),
                null != (r = e.ipaddress(!1)) &&
                  t.writeMessage(9, r, s.c.serializeBinaryToWriter),
                void 0 !== (r = o.Message.getField(e, 10)) &&
                  t.writeInt32(10, r),
                void 0 !== (r = o.Message.getField(e, 11)) &&
                  t.writeBool(11, r);
            }),
            (i.prototype.getClassName = function() {
              return "CCommunity_Comment";
            }),
            i
          );
        })(o.Message)),
        f = (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, [1, 2, 9], null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.comments = function() {
              return o.Message.getRepeatedWrapperField(this, g, 1);
            }),
            (i.prototype.set_comments = function(e) {
              o.Message.setRepeatedWrapperField(this, 1, e);
            }),
            (i.prototype.add_comments = function(e, t) {
              return o.Message.addToRepeatedWrapperField(this, 1, e, g, t);
            }),
            (i.prototype.deleted_comments = function() {
              return o.Message.getRepeatedWrapperField(this, g, 2);
            }),
            (i.prototype.set_deleted_comments = function(e) {
              o.Message.setRepeatedWrapperField(this, 2, e);
            }),
            (i.prototype.add_deleted_comments = function(e, t) {
              return o.Message.addToRepeatedWrapperField(this, 2, e, g, t);
            }),
            (i.prototype.steamid = function() {
              return o.Message.getField(this, 3);
            }),
            (i.prototype.set_steamid = function(e) {
              o.Message.setField(this, 3, e);
            }),
            (i.prototype.commentthreadid = function() {
              return o.Message.getField(this, 4);
            }),
            (i.prototype.set_commentthreadid = function(e) {
              o.Message.setField(this, 4, e);
            }),
            (i.prototype.start = function() {
              return o.Message.getField(this, 5);
            }),
            (i.prototype.set_start = function(e) {
              o.Message.setField(this, 5, e);
            }),
            (i.prototype.count = function() {
              return o.Message.getField(this, 6);
            }),
            (i.prototype.set_count = function(e) {
              o.Message.setField(this, 6, e);
            }),
            (i.prototype.total_count = function() {
              return o.Message.getField(this, 7);
            }),
            (i.prototype.set_total_count = function(e) {
              o.Message.setField(this, 7, e);
            }),
            (i.prototype.upvotes = function() {
              return o.Message.getField(this, 8);
            }),
            (i.prototype.set_upvotes = function(e) {
              o.Message.setField(this, 8, e);
            }),
            (i.prototype.upvoters = function() {
              return o.Message.getField(this, 9);
            }),
            (i.prototype.set_upvoters = function(e) {
              o.Message.setField(this, 9, e);
            }),
            (i.prototype.add_upvoters = function(e, t) {
              o.Message.addToRepeatedField(this, 9, e, t);
            }),
            (i.prototype.user_subscribed = function() {
              return o.Message.getField(this, 10);
            }),
            (i.prototype.set_user_subscribed = function(e) {
              o.Message.setField(this, 10, e);
            }),
            (i.prototype.user_upvoted = function() {
              return o.Message.getField(this, 11);
            }),
            (i.prototype.set_user_upvoted = function(e) {
              o.Message.setField(this, 11, e);
            }),
            (i.prototype.answer_commentid = function() {
              return o.Message.getField(this, 12);
            }),
            (i.prototype.set_answer_commentid = function(e) {
              o.Message.setField(this, 12, e);
            }),
            (i.prototype.answer_actor = function() {
              return o.Message.getField(this, 13);
            }),
            (i.prototype.set_answer_actor = function(e) {
              o.Message.setField(this, 13, e);
            }),
            (i.prototype.answer_actor_rank = function() {
              return o.Message.getField(this, 14);
            }),
            (i.prototype.set_answer_actor_rank = function(e) {
              o.Message.setField(this, 14, e);
            }),
            (i.prototype.can_post = function() {
              return o.Message.getField(this, 15);
            }),
            (i.prototype.set_can_post = function(e) {
              o.Message.setField(this, 15, e);
            }),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {
                comments: o.Message.toObjectList(t.comments(), g.toObject, e),
                deleted_comments: o.Message.toObjectList(
                  t.deleted_comments(),
                  g.toObject,
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
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              var t = new i();
              return (
                t.set_comments(
                  (Array.isArray(e.comments) ? e.comments : []).map(function(
                    e
                  ) {
                    return g.fromObject(e);
                  })
                ),
                t.set_deleted_comments(
                  (Array.isArray(e.deleted_comments)
                    ? e.deleted_comments
                    : []
                  ).map(function(e) {
                    return g.fromObject(e);
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
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    var r = new g();
                    t.readMessage(r, g.deserializeBinaryFromReader),
                      e.add_comments(r);
                    break;
                  case 2:
                    r = new g();
                    t.readMessage(r, g.deserializeBinaryFromReader),
                      e.add_deleted_comments(r);
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
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {
              var r = e.comments();
              0 < r.length &&
                t.writeRepeatedMessage(1, r, g.serializeBinaryToWriter),
                0 < (r = e.deleted_comments()).length &&
                  t.writeRepeatedMessage(2, r, g.serializeBinaryToWriter),
                void 0 !== (r = o.Message.getField(e, 3)) &&
                  t.writeFixed64String(3, r),
                void 0 !== (r = o.Message.getField(e, 4)) &&
                  t.writeFixed64String(4, r),
                void 0 !== (r = o.Message.getField(e, 5)) && t.writeInt32(5, r),
                void 0 !== (r = o.Message.getField(e, 6)) && t.writeInt32(6, r),
                void 0 !== (r = o.Message.getField(e, 7)) && t.writeInt32(7, r),
                void 0 !== (r = o.Message.getField(e, 8)) && t.writeInt32(8, r),
                void 0 !== (r = o.Message.getField(e, 9)) &&
                  t.writeRepeatedUint32(9, r),
                void 0 !== (r = o.Message.getField(e, 10)) &&
                  t.writeBool(10, r),
                void 0 !== (r = o.Message.getField(e, 11)) &&
                  t.writeBool(11, r),
                void 0 !== (r = o.Message.getField(e, 12)) &&
                  t.writeFixed64String(12, r),
                void 0 !== (r = o.Message.getField(e, 13)) &&
                  t.writeUint32(13, r),
                void 0 !== (r = o.Message.getField(e, 14)) &&
                  t.writeInt32(14, r),
                void 0 !== (r = o.Message.getField(e, 15)) &&
                  t.writeBool(15, r);
            }),
            (i.prototype.getClassName = function() {
              return "CCommunity_GetCommentThread_Response";
            }),
            i
          );
        })(o.Message),
        h = (o.Message,
        (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.gidcomment = function() {
              return o.Message.getField(this, 1);
            }),
            (i.prototype.set_gidcomment = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (i.prototype.commentthreadid = function() {
              return o.Message.getField(this, 2);
            }),
            (i.prototype.set_commentthreadid = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (i.prototype.count = function() {
              return o.Message.getField(this, 3);
            }),
            (i.prototype.set_count = function(e) {
              o.Message.setField(this, 3, e);
            }),
            (i.prototype.upvotes = function() {
              return o.Message.getField(this, 4);
            }),
            (i.prototype.set_upvotes = function(e) {
              o.Message.setField(this, 4, e);
            }),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {
                gidcomment: o.Message.getField(t, 1),
                commentthreadid: o.Message.getField(t, 2),
                count: o.Message.getField(t, 3),
                upvotes: o.Message.getField(t, 4)
              };
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              var t = new i();
              return (
                t.set_gidcomment(e.gidcomment),
                t.set_commentthreadid(e.commentthreadid),
                t.set_count(e.count),
                t.set_upvotes(e.upvotes),
                t
              );
            }),
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
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
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {
              var r = o.Message.getField(e, 1);
              void 0 !== r && t.writeFixed64String(1, r),
                void 0 !== (r = o.Message.getField(e, 2)) &&
                  t.writeFixed64String(2, r),
                void 0 !== (r = o.Message.getField(e, 3)) && t.writeInt32(3, r),
                void 0 !== (r = o.Message.getField(e, 4)) && t.writeInt32(4, r);
            }),
            (i.prototype.getClassName = function() {
              return "CCommunity_PostCommentToThread_Response";
            }),
            i
          );
        })(o.Message)),
        _ = (o.Message,
        (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {};
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              return new i();
            }),
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                t.getFieldNumber();
                t.skipField();
              }
              return e;
            }),
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {}),
            (i.prototype.getClassName = function() {
              return "CCommunity_DeleteCommentFromThread_Response";
            }),
            i
          );
        })(o.Message)),
        y = (o.Message,
        (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.gidcomment = function() {
              return o.Message.getField(this, 1);
            }),
            (i.prototype.set_gidcomment = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (i.prototype.commentthreadid = function() {
              return o.Message.getField(this, 2);
            }),
            (i.prototype.set_commentthreadid = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (i.prototype.count = function() {
              return o.Message.getField(this, 3);
            }),
            (i.prototype.set_count = function(e) {
              o.Message.setField(this, 3, e);
            }),
            (i.prototype.upvotes = function() {
              return o.Message.getField(this, 4);
            }),
            (i.prototype.set_upvotes = function(e) {
              o.Message.setField(this, 4, e);
            }),
            (i.prototype.has_upvoted = function() {
              return o.Message.getField(this, 5);
            }),
            (i.prototype.set_has_upvoted = function(e) {
              o.Message.setField(this, 5, e);
            }),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {
                gidcomment: o.Message.getField(t, 1),
                commentthreadid: o.Message.getField(t, 2),
                count: o.Message.getField(t, 3),
                upvotes: o.Message.getField(t, 4),
                has_upvoted: o.Message.getField(t, 5)
              };
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              var t = new i();
              return (
                t.set_gidcomment(e.gidcomment),
                t.set_commentthreadid(e.commentthreadid),
                t.set_count(e.count),
                t.set_upvotes(e.upvotes),
                t.set_has_upvoted(e.has_upvoted),
                t
              );
            }),
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
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
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {
              var r = o.Message.getField(e, 1);
              void 0 !== r && t.writeUint64String(1, r),
                void 0 !== (r = o.Message.getField(e, 2)) &&
                  t.writeUint64String(2, r),
                void 0 !== (r = o.Message.getField(e, 3)) &&
                  t.writeUint32(3, r),
                void 0 !== (r = o.Message.getField(e, 4)) &&
                  t.writeUint32(4, r),
                void 0 !== (r = o.Message.getField(e, 5)) && t.writeBool(5, r);
            }),
            (i.prototype.getClassName = function() {
              return "CCommunity_RateCommentThread_Response";
            }),
            i
          );
        })(o.Message)),
        v = (o.Message,
        (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, [5], null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.commentthreadid = function() {
              return o.Message.getField(this, 1);
            }),
            (i.prototype.set_commentthreadid = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (i.prototype.gidcomment = function() {
              return o.Message.getField(this, 2);
            }),
            (i.prototype.set_gidcomment = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (i.prototype.upvotes = function() {
              return o.Message.getField(this, 3);
            }),
            (i.prototype.set_upvotes = function(e) {
              o.Message.setField(this, 3, e);
            }),
            (i.prototype.has_upvoted = function() {
              return o.Message.getField(this, 4);
            }),
            (i.prototype.set_has_upvoted = function(e) {
              o.Message.setField(this, 4, e);
            }),
            (i.prototype.upvoter_accountids = function() {
              return o.Message.getField(this, 5);
            }),
            (i.prototype.set_upvoter_accountids = function(e) {
              o.Message.setField(this, 5, e);
            }),
            (i.prototype.add_upvoter_accountids = function(e, t) {
              o.Message.addToRepeatedField(this, 5, e, t);
            }),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {
                commentthreadid: o.Message.getField(t, 1),
                gidcomment: o.Message.getField(t, 2),
                upvotes: o.Message.getField(t, 3),
                has_upvoted: o.Message.getField(t, 4),
                upvoter_accountids: o.Message.getField(t, 5)
              };
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              var t = new i();
              return (
                t.set_commentthreadid(e.commentthreadid),
                t.set_gidcomment(e.gidcomment),
                t.set_upvotes(e.upvotes),
                t.set_has_upvoted(e.has_upvoted),
                t.set_upvoter_accountids(e.upvoter_accountids),
                t
              );
            }),
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
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
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {
              var r = o.Message.getField(e, 1);
              void 0 !== r && t.writeUint64String(1, r),
                void 0 !== (r = o.Message.getField(e, 2)) &&
                  t.writeUint64String(2, r),
                void 0 !== (r = o.Message.getField(e, 3)) &&
                  t.writeUint32(3, r),
                void 0 !== (r = o.Message.getField(e, 4)) && t.writeBool(4, r),
                void 0 !== (r = o.Message.getField(e, 5)) &&
                  t.writeRepeatedUint32(5, r);
            }),
            (i.prototype.getClassName = function() {
              return "CCommunity_GetCommentThreadRatings_Response";
            }),
            i
          );
        })(o.Message)),
        b = (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.announcementid = function() {
              return o.Message.getField(this, 1);
            }),
            (i.prototype.set_announcementid = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (i.prototype.vote_up = function() {
              return o.Message.getField(this, 2);
            }),
            (i.prototype.set_vote_up = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (i.prototype.clan_accountid = function() {
              return o.Message.getField(this, 3);
            }),
            (i.prototype.set_clan_accountid = function(e) {
              o.Message.setField(this, 3, e);
            }),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {
                announcementid: o.Message.getField(t, 1),
                vote_up: o.Message.getField(t, 2),
                clan_accountid: o.Message.getField(t, 3)
              };
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              var t = new i();
              return (
                t.set_announcementid(e.announcementid),
                t.set_vote_up(e.vote_up),
                t.set_clan_accountid(e.clan_accountid),
                t
              );
            }),
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
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
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {
              var r = o.Message.getField(e, 1);
              void 0 !== r && t.writeUint64String(1, r),
                void 0 !== (r = o.Message.getField(e, 2)) && t.writeBool(2, r),
                void 0 !== (r = o.Message.getField(e, 3)) &&
                  t.writeUint32(3, r);
            }),
            (i.prototype.getClassName = function() {
              return "CCommunity_RateClanAnnouncement_Request";
            }),
            i
          );
        })(o.Message),
        F = (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {};
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              return new i();
            }),
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                t.getFieldNumber();
                t.skipField();
              }
              return e;
            }),
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {}),
            (i.prototype.getClassName = function() {
              return "CCommunity_RateClanAnnouncement_Response";
            }),
            i
          );
        })(o.Message),
        M = (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.announcementid = function() {
              return o.Message.getField(this, 1);
            }),
            (i.prototype.set_announcementid = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = { announcementid: o.Message.getField(t, 1) };
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              var t = new i();
              return t.set_announcementid(e.announcementid), t;
            }),
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
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
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {
              var r = o.Message.getField(e, 1);
              void 0 !== r && t.writeUint64String(1, r);
            }),
            (i.prototype.getClassName = function() {
              return "CCommunity_GetClanAnnouncementVoteForUser_Request";
            }),
            i
          );
        })(o.Message),
        w = (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.voted_up = function() {
              return o.Message.getField(this, 1);
            }),
            (i.prototype.set_voted_up = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (i.prototype.voted_down = function() {
              return o.Message.getField(this, 2);
            }),
            (i.prototype.set_voted_down = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {
                voted_up: o.Message.getField(t, 1),
                voted_down: o.Message.getField(t, 2)
              };
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              var t = new i();
              return (
                t.set_voted_up(e.voted_up), t.set_voted_down(e.voted_down), t
              );
            }),
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
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
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {
              var r = o.Message.getField(e, 1);
              void 0 !== r && t.writeBool(1, r),
                void 0 !== (r = o.Message.getField(e, 2)) && t.writeBool(2, r);
            }),
            (i.prototype.getClassName = function() {
              return "CCommunity_GetClanAnnouncementVoteForUser_Response";
            }),
            i
          );
        })(o.Message),
        B = (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.steamid = function() {
              return o.Message.getField(this, 1);
            }),
            (i.prototype.set_steamid = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (i.prototype.filter_user_uploaded_only = function() {
              return o.Message.getField(this, 2);
            }),
            (i.prototype.set_filter_user_uploaded_only = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {
                steamid: o.Message.getField(t, 1),
                filter_user_uploaded_only: o.Message.getField(t, 2)
              };
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              var t = new i();
              return (
                t.set_steamid(e.steamid),
                t.set_filter_user_uploaded_only(e.filter_user_uploaded_only),
                t
              );
            }),
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_steamid(t.readFixed64String());
                    break;
                  case 2:
                    e.set_filter_user_uploaded_only(t.readBool());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {
              var r = o.Message.getField(e, 1);
              void 0 !== r && t.writeFixed64String(1, r),
                void 0 !== (r = o.Message.getField(e, 2)) && t.writeBool(2, r);
            }),
            (i.prototype.getClassName = function() {
              return "CCommunity_GetAvatarHistory_Request";
            }),
            i
          );
        })(o.Message),
        R = (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, [1], null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.avatars = function() {
              return o.Message.getRepeatedWrapperField(this, O, 1);
            }),
            (i.prototype.set_avatars = function(e) {
              o.Message.setRepeatedWrapperField(this, 1, e);
            }),
            (i.prototype.add_avatars = function(e, t) {
              return o.Message.addToRepeatedWrapperField(this, 1, e, O, t);
            }),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {
                avatars: o.Message.toObjectList(t.avatars(), O.toObject, e)
              };
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              var t = new i();
              return (
                t.set_avatars(
                  (Array.isArray(e.avatars) ? e.avatars : []).map(function(e) {
                    return O.fromObject(e);
                  })
                ),
                t
              );
            }),
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    var r = new O();
                    t.readMessage(r, O.deserializeBinaryFromReader),
                      e.add_avatars(r);
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {
              var r = e.avatars();
              0 < r.length &&
                t.writeRepeatedMessage(1, r, O.serializeBinaryToWriter);
            }),
            (i.prototype.getClassName = function() {
              return "CCommunity_GetAvatarHistory_Response";
            }),
            i
          );
        })(o.Message),
        O = (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.avatar_sha1 = function() {
              return o.Message.getField(this, 1);
            }),
            (i.prototype.set_avatar_sha1 = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (i.prototype.user_uploaded = function() {
              return o.Message.getField(this, 2);
            }),
            (i.prototype.set_user_uploaded = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (i.prototype.timestamp = function() {
              return o.Message.getField(this, 3);
            }),
            (i.prototype.set_timestamp = function(e) {
              o.Message.setField(this, 3, e);
            }),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {
                avatar_sha1: o.Message.getField(t, 1),
                user_uploaded: o.Message.getField(t, 2),
                timestamp: o.Message.getField(t, 3)
              };
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              var t = new i();
              return (
                t.set_avatar_sha1(e.avatar_sha1),
                t.set_user_uploaded(e.user_uploaded),
                t.set_timestamp(e.timestamp),
                t
              );
            }),
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
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
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {
              var r = o.Message.getField(e, 1);
              void 0 !== r && t.writeString(1, r),
                void 0 !== (r = o.Message.getField(e, 2)) && t.writeBool(2, r),
                void 0 !== (r = o.Message.getField(e, 3)) &&
                  t.writeUint32(3, r);
            }),
            (i.prototype.getClassName = function() {
              return "CCommunity_GetAvatarHistory_Response_AvatarData";
            }),
            i
          );
        })(o.Message),
        E = (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, [2], null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.priority = function() {
              return o.Message.getField(this, 1);
            }),
            (i.prototype.set_priority = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (i.prototype.appid = function() {
              return o.Message.getField(this, 2);
            }),
            (i.prototype.set_appid = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (i.prototype.add_appid = function(e, t) {
              o.Message.addToRepeatedField(this, 2, e, t);
            }),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {
                priority: o.Message.getField(t, 1),
                appid: o.Message.getField(t, 2)
              };
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              var t = new i();
              return t.set_priority(e.priority), t.set_appid(e.appid), t;
            }),
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
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
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {
              var r = o.Message.getField(e, 1);
              void 0 !== r && t.writeUint32(1, r),
                void 0 !== (r = o.Message.getField(e, 2)) &&
                  t.writeRepeatedUint32(2, r);
            }),
            (i.prototype.getClassName = function() {
              return "CAppPriority";
            }),
            i
          );
        })(o.Message),
        j = (o.Message,
        (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, [1], null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.results = function() {
              return o.Message.getRepeatedWrapperField(this, s.b, 1);
            }),
            (i.prototype.set_results = function(e) {
              o.Message.setRepeatedWrapperField(this, 1, e);
            }),
            (i.prototype.add_results = function(e, t) {
              return o.Message.addToRepeatedWrapperField(this, 1, e, s.b, t);
            }),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {
                results: o.Message.toObjectList(t.results(), s.b.toObject, e)
              };
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              var t = new i();
              return (
                t.set_results(
                  (Array.isArray(e.results) ? e.results : []).map(function(e) {
                    return s.b.fromObject(e);
                  })
                ),
                t
              );
            }),
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    var r = new s.b();
                    t.readMessage(r, s.b.deserializeBinaryFromReader),
                      e.add_results(r);
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {
              var r = e.results();
              0 < r.length &&
                t.writeRepeatedMessage(1, r, s.b.serializeBinaryToWriter);
            }),
            (i.prototype.getClassName = function() {
              return "CCommunity_GetUserPartnerEventNews_Response";
            }),
            i
          );
        })(o.Message)),
        z = (o.Message,
        (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.clanid = function() {
              return o.Message.getField(this, 1);
            }),
            (i.prototype.set_clanid = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (i.prototype.event_gid = function() {
              return o.Message.getField(this, 2);
            }),
            (i.prototype.set_event_gid = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (i.prototype.announcement_gid = function() {
              return o.Message.getField(this, 3);
            }),
            (i.prototype.set_announcement_gid = function(e) {
              o.Message.setField(this, 3, e);
            }),
            (i.prototype.appid = function() {
              return o.Message.getField(this, 4);
            }),
            (i.prototype.set_appid = function(e) {
              o.Message.setField(this, 4, e);
            }),
            (i.prototype.possible_takeover = function() {
              return o.Message.getField(this, 5);
            }),
            (i.prototype.set_possible_takeover = function(e) {
              o.Message.setField(this, 5, e);
            }),
            (i.prototype.rtime32_last_modified = function() {
              return o.Message.getFieldWithDefault(this, 6, 0);
            }),
            (i.prototype.set_rtime32_last_modified = function(e) {
              o.Message.setField(this, 6, e);
            }),
            (i.prototype.user_app_priority = function() {
              return o.Message.getField(this, 7);
            }),
            (i.prototype.set_user_app_priority = function(e) {
              o.Message.setField(this, 7, e);
            }),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {
                clanid: o.Message.getField(t, 1),
                event_gid: o.Message.getField(t, 2),
                announcement_gid: o.Message.getField(t, 3),
                appid: o.Message.getField(t, 4),
                possible_takeover: o.Message.getField(t, 5),
                rtime32_last_modified: o.Message.getFieldWithDefault(t, 6, 0),
                user_app_priority: o.Message.getField(t, 7)
              };
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              var t = new i();
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
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
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
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {
              var r = o.Message.getField(e, 1);
              void 0 !== r && t.writeUint32(1, r),
                void 0 !== (r = o.Message.getField(e, 2)) &&
                  t.writeFixed64String(2, r),
                void 0 !== (r = o.Message.getField(e, 3)) &&
                  t.writeFixed64String(3, r),
                void 0 !== (r = o.Message.getField(e, 4)) &&
                  t.writeUint32(4, r),
                void 0 !== (r = o.Message.getField(e, 5)) && t.writeBool(5, r),
                void 0 !== (r = o.Message.getField(e, 6)) &&
                  t.writeUint32(6, r),
                void 0 !== (r = o.Message.getField(e, 7)) && t.writeInt32(7, r);
            }),
            (i.prototype.getClassName = function() {
              return "CCommunity_PartnerEventResult";
            }),
            i
          );
        })(o.Message)),
        S = (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, [1], null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.results = function() {
              return o.Message.getRepeatedWrapperField(this, z, 1);
            }),
            (i.prototype.set_results = function(e) {
              o.Message.setRepeatedWrapperField(this, 1, e);
            }),
            (i.prototype.add_results = function(e, t) {
              return o.Message.addToRepeatedWrapperField(this, 1, e, z, t);
            }),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {
                results: o.Message.toObjectList(t.results(), z.toObject, e)
              };
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              var t = new i();
              return (
                t.set_results(
                  (Array.isArray(e.results) ? e.results : []).map(function(e) {
                    return z.fromObject(e);
                  })
                ),
                t
              );
            }),
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    var r = new z();
                    t.readMessage(r, z.deserializeBinaryFromReader),
                      e.add_results(r);
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {
              var r = e.results();
              0 < r.length &&
                t.writeRepeatedMessage(1, r, z.serializeBinaryToWriter);
            }),
            (i.prototype.getClassName = function() {
              return "CCommunity_GetBestEventsForUser_Response";
            }),
            i
          );
        })(o.Message),
        k = (o.Message,
        (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {};
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              return new i();
            }),
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                t.getFieldNumber();
                t.skipField();
              }
              return e;
            }),
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {}),
            (i.prototype.getClassName = function() {
              return "CCommunity_ClearUserPartnerEventsAppPriorities_Response";
            }),
            i
          );
        })(o.Message)),
        C = (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.appid = function() {
              return o.Message.getField(this, 1);
            }),
            (i.prototype.set_appid = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (i.prototype.user_app_priority = function() {
              return o.Message.getField(this, 2);
            }),
            (i.prototype.set_user_app_priority = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {
                appid: o.Message.getField(t, 1),
                user_app_priority: o.Message.getField(t, 2)
              };
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              var t = new i();
              return (
                t.set_appid(e.appid),
                t.set_user_app_priority(e.user_app_priority),
                t
              );
            }),
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
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
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {
              var r = o.Message.getField(e, 1);
              void 0 !== r && t.writeUint32(1, r),
                void 0 !== (r = o.Message.getField(e, 2)) && t.writeInt32(2, r);
            }),
            (i.prototype.getClassName = function() {
              return "CCommunity_PartnerEventsAppPriority";
            }),
            i
          );
        })(o.Message),
        I = (o.Message,
        (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, [1], null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.priorities = function() {
              return o.Message.getRepeatedWrapperField(this, C, 1);
            }),
            (i.prototype.set_priorities = function(e) {
              o.Message.setRepeatedWrapperField(this, 1, e);
            }),
            (i.prototype.add_priorities = function(e, t) {
              return o.Message.addToRepeatedWrapperField(this, 1, e, C, t);
            }),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {
                priorities: o.Message.toObjectList(
                  t.priorities(),
                  C.toObject,
                  e
                )
              };
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              var t = new i();
              return (
                t.set_priorities(
                  (Array.isArray(e.priorities) ? e.priorities : []).map(
                    function(e) {
                      return C.fromObject(e);
                    }
                  )
                ),
                t
              );
            }),
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    var r = new C();
                    t.readMessage(r, C.deserializeBinaryFromReader),
                      e.add_priorities(r);
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {
              var r = e.priorities();
              0 < r.length &&
                t.writeRepeatedMessage(1, r, C.serializeBinaryToWriter);
            }),
            (i.prototype.getClassName = function() {
              return "CCommunity_GetUserPartnerEventsAppPriorities_Response";
            }),
            i
          );
        })(o.Message)),
        A = (o.Message,
        (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {};
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              return new i();
            }),
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                t.getFieldNumber();
                t.skipField();
              }
              return e;
            }),
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {}),
            (i.prototype.getClassName = function() {
              return "CCommunity_ClearSinglePartnerEventsAppPriority_Response";
            }),
            i
          );
        })(o.Message)),
        T = (o.Message,
        (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {};
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              return new i();
            }),
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                t.getFieldNumber();
                t.skipField();
              }
              return e;
            }),
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {}),
            (i.prototype.getClassName = function() {
              return "CCommunity_PartnerEventsShowMoreForApp_Response";
            }),
            i
          );
        })(o.Message)),
        L = (o.Message,
        (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {};
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              return new i();
            }),
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                t.getFieldNumber();
                t.skipField();
              }
              return e;
            }),
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {}),
            (i.prototype.getClassName = function() {
              return "CCommunity_PartnerEventsShowLessForApp_Response";
            }),
            i
          );
        })(o.Message)),
        W = (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, [1], null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.markings = function() {
              return o.Message.getRepeatedWrapperField(this, N, 1);
            }),
            (i.prototype.set_markings = function(e) {
              o.Message.setRepeatedWrapperField(this, 1, e);
            }),
            (i.prototype.add_markings = function(e, t) {
              return o.Message.addToRepeatedWrapperField(this, 1, e, N, t);
            }),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {
                markings: o.Message.toObjectList(t.markings(), N.toObject, e)
              };
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              var t = new i();
              return (
                t.set_markings(
                  (Array.isArray(e.markings) ? e.markings : []).map(function(
                    e
                  ) {
                    return N.fromObject(e);
                  })
                ),
                t
              );
            }),
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    var r = new N();
                    t.readMessage(r, N.deserializeBinaryFromReader),
                      e.add_markings(r);
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {
              var r = e.markings();
              0 < r.length &&
                t.writeRepeatedMessage(1, r, N.serializeBinaryToWriter);
            }),
            (i.prototype.getClassName = function() {
              return "CCommunity_MarkPartnerEventsForUser_Request";
            }),
            i
          );
        })(o.Message),
        N = (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.clanid = function() {
              return o.Message.getField(this, 1);
            }),
            (i.prototype.set_clanid = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (i.prototype.event_gid = function() {
              return o.Message.getField(this, 2);
            }),
            (i.prototype.set_event_gid = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (i.prototype.display_location = function() {
              return o.Message.getField(this, 3);
            }),
            (i.prototype.set_display_location = function(e) {
              o.Message.setField(this, 3, e);
            }),
            (i.prototype.mark_shown = function() {
              return o.Message.getField(this, 4);
            }),
            (i.prototype.set_mark_shown = function(e) {
              o.Message.setField(this, 4, e);
            }),
            (i.prototype.mark_read = function() {
              return o.Message.getField(this, 5);
            }),
            (i.prototype.set_mark_read = function(e) {
              o.Message.setField(this, 5, e);
            }),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {
                clanid: o.Message.getField(t, 1),
                event_gid: o.Message.getField(t, 2),
                display_location: o.Message.getField(t, 3),
                mark_shown: o.Message.getField(t, 4),
                mark_read: o.Message.getField(t, 5)
              };
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              var t = new i();
              return (
                t.set_clanid(e.clanid),
                t.set_event_gid(e.event_gid),
                t.set_display_location(e.display_location),
                t.set_mark_shown(e.mark_shown),
                t.set_mark_read(e.mark_read),
                t
              );
            }),
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
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
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {
              var r = o.Message.getField(e, 1);
              void 0 !== r && t.writeUint32(1, r),
                void 0 !== (r = o.Message.getField(e, 2)) &&
                  t.writeFixed64String(2, r),
                void 0 !== (r = o.Message.getField(e, 3)) && t.writeEnum(3, r),
                void 0 !== (r = o.Message.getField(e, 4)) && t.writeBool(4, r),
                void 0 !== (r = o.Message.getField(e, 5)) && t.writeBool(5, r);
            }),
            (i.prototype.getClassName = function() {
              return "CCommunity_MarkPartnerEventsForUser_Request_PartnerEventMarking";
            }),
            i
          );
        })(o.Message),
        U = (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {};
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              return new i();
            }),
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                t.getFieldNumber();
                t.skipField();
              }
              return e;
            }),
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {}),
            (i.prototype.getClassName = function() {
              return "CCommunity_MarkPartnerEventsForUser_Response";
            }),
            i
          );
        })(o.Message),
        G = (o.Message,
        (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, [1], null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.events = function() {
              return o.Message.getRepeatedWrapperField(this, P, 1);
            }),
            (i.prototype.set_events = function(e) {
              o.Message.setRepeatedWrapperField(this, 1, e);
            }),
            (i.prototype.add_events = function(e, t) {
              return o.Message.addToRepeatedWrapperField(this, 1, e, P, t);
            }),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {
                events: o.Message.toObjectList(t.events(), P.toObject, e)
              };
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              var t = new i();
              return (
                t.set_events(
                  (Array.isArray(e.events) ? e.events : []).map(function(e) {
                    return P.fromObject(e);
                  })
                ),
                t
              );
            }),
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    var r = new P();
                    t.readMessage(r, P.deserializeBinaryFromReader),
                      e.add_events(r);
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {
              var r = e.events();
              0 < r.length &&
                t.writeRepeatedMessage(1, r, P.serializeBinaryToWriter);
            }),
            (i.prototype.getClassName = function() {
              return "CCommunity_GetUserPartnerEventViewStatus_Response";
            }),
            i
          );
        })(o.Message)),
        P = (function(r) {
          function i(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return o.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(n.d)(i, r),
            (i.prototype.event_gid = function() {
              return o.Message.getField(this, 1);
            }),
            (i.prototype.set_event_gid = function(e) {
              o.Message.setField(this, 1, e);
            }),
            (i.prototype.last_shown_time = function() {
              return o.Message.getField(this, 2);
            }),
            (i.prototype.set_last_shown_time = function(e) {
              o.Message.setField(this, 2, e);
            }),
            (i.prototype.last_read_time = function() {
              return o.Message.getField(this, 3);
            }),
            (i.prototype.set_last_read_time = function(e) {
              o.Message.setField(this, 3, e);
            }),
            (i.prototype.clan_account_id = function() {
              return o.Message.getField(this, 4);
            }),
            (i.prototype.set_clan_account_id = function(e) {
              o.Message.setField(this, 4, e);
            }),
            (i.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), i.toObject(e, this);
            }),
            (i.toObject = function(e, t) {
              var r = {
                event_gid: o.Message.getField(t, 1),
                last_shown_time: o.Message.getField(t, 2),
                last_read_time: o.Message.getField(t, 3),
                clan_account_id: o.Message.getField(t, 4)
              };
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (i.fromObject = function(e) {
              var t = new i();
              return (
                t.set_event_gid(e.event_gid),
                t.set_last_shown_time(e.last_shown_time),
                t.set_last_read_time(e.last_read_time),
                t.set_clan_account_id(e.clan_account_id),
                t
              );
            }),
            (i.deserializeBinary = function(e) {
              var t = new o.BinaryReader(e),
                r = new i();
              return i.deserializeBinaryFromReader(r, t);
            }),
            (i.deserializeBinaryFromReader = function(e, t) {
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
            (i.prototype.serializeBinary = function() {
              var e = new o.BinaryWriter();
              return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (i.serializeBinaryToWriter = function(e, t) {
              var r = o.Message.getField(e, 1);
              void 0 !== r && t.writeFixed64String(1, r),
                void 0 !== (r = o.Message.getField(e, 2)) &&
                  t.writeUint32(2, r),
                void 0 !== (r = o.Message.getField(e, 3)) &&
                  t.writeUint32(3, r),
                void 0 !== (r = o.Message.getField(e, 4)) &&
                  t.writeUint32(4, r);
            }),
            (i.prototype.getClassName = function() {
              return "CCommunity_GetUserPartnerEventViewStatus_Response_PartnerEvent";
            }),
            i
          );
        })(o.Message);
      ((a = i = i || {}).GetApps = function(e, t) {
        return e.SendMsg("Community.GetApps#1", t, u, { bConstMethod: !0 });
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
          return e.SendMsg("Community.PostCommentToThread#1", t, h, {});
        }),
        (a.DeleteCommentFromThread = function(e, t) {
          return e.SendMsg("Community.DeleteCommentFromThread#1", t, _, {});
        }),
        (a.RateCommentThread = function(e, t) {
          return e.SendMsg("Community.RateCommentThread#1", t, y, {});
        }),
        (a.GetCommentThreadRatings = function(e, t) {
          return e.SendMsg("Community.GetCommentThreadRatings#1", t, v, {});
        }),
        (a.RateClanAnnouncement = function(e, t) {
          return e.SendMsg("Community.RateClanAnnouncement#1", t, F, {});
        }),
        (a.GetClanAnnouncementVoteForUser = function(e, t) {
          return e.SendMsg(
            "Community.GetClanAnnouncementVoteForUser#1",
            t,
            w,
            {}
          );
        }),
        (a.GetAvatarHistory = function(e, t) {
          return e.SendMsg("Community.GetAvatarHistory#1", t, R, {});
        }),
        (a.GetUserPartnerEventNews = function(e, t) {
          return e.SendMsg("Community.GetUserPartnerEventNews#1", t, j, {
            bConstMethod: !0
          });
        }),
        (a.GetBestEventsForUser = function(e, t) {
          return e.SendMsg("Community.GetBestEventsForUser#1", t, S, {
            bConstMethod: !0
          });
        }),
        (a.MarkPartnerEventsForUser = function(e, t) {
          return e.SendMsg("Community.MarkPartnerEventsForUser#1", t, U, {});
        }),
        (a.GetUserPartnerEventViewStatus = function(e, t) {
          return e.SendMsg("Community.GetUserPartnerEventViewStatus#1", t, G, {
            bConstMethod: !0
          });
        }),
        (a.PartnerEventsShowMoreForApp = function(e, t) {
          return e.SendMsg("Community.PartnerEventsShowMoreForApp#1", t, T, {});
        }),
        (a.PartnerEventsShowLessForApp = function(e, t) {
          return e.SendMsg("Community.PartnerEventsShowLessForApp#1", t, L, {});
        }),
        (a.ClearUserPartnerEventsAppPriorities = function(e, t) {
          return e.SendMsg(
            "Community.ClearUserPartnerEventsAppPriorities#1",
            t,
            k,
            {}
          );
        }),
        (a.GetUserPartnerEventsAppPriorities = function(e, t) {
          return e.SendMsg(
            "Community.GetUserPartnerEventsAppPriorities#1",
            t,
            I,
            {}
          );
        }),
        (a.ClearSinglePartnerEventsAppPriority = function(e, t) {
          return e.SendMsg(
            "Community.ClearSinglePartnerEventsAppPriority#1",
            t,
            A,
            {}
          );
        });
    },
    UWWC: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return o;
      }),
        r.d(t, "b", function() {
          return s;
        });
      var d = r("mrSG"),
        i = r("wUwH"),
        p = r("lkRc"),
        n = r("vDqi"),
        l = r.n(n),
        o = (function(e) {
          function t() {
            return e.call(this) || this;
          }
          return (
            Object(d.d)(t, e),
            (t.prototype.BInitialized = function() {
              return !0;
            }),
            (t.prototype.GetServerTime = function() {
              return p.b.PAGE_TIMESTAMP + Math.floor(performance.now() / 1e3);
            }),
            (t.prototype.RequestEmoticonListInternal = function() {
              return Object(d.b)(this, void 0, void 0, function() {
                var t, r, i, n, o, s, a, c, u;
                return Object(d.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = []), (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          l.a.get(p.b.CHAT_BASE_URL + "actions/EmoticonData", {
                            withCredentials: !0
                          })
                        ]
                      );
                    case 2:
                      if ((r = e.sent()).data.emoticons)
                        for (i = 0, n = r.data.emoticons; i < n.length; i++)
                          (o = n[i]),
                            (s = o.name).startsWith("^")
                              ? t.push({ name: s })
                              : ((a = { name: s.substr(1, s.length - 2) }),
                                (c = a.name.toLowerCase()) != a.name &&
                                  (a.name_normalized = c),
                                o.time_last_used &&
                                  (a.last_used = o.time_last_used),
                                o.use_count && (a.use_count = o.use_count),
                                o.time_received &&
                                  (a.time_received = o.time_received),
                                t.push(a));
                      return [3, 4];
                    case 3:
                      return (
                        (u = e.sent()),
                        console.error("error loading emoticon list"),
                        console.error(u),
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
        })(i.a),
        s = new o();
    },
    Z9dU: function(e, t, r) {
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
    a5LV: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return o;
      }),
        r.d(t, "b", function() {
          return d;
        });
      var i = r("mrSG"),
        s = r("lkRc"),
        n = r("2vnA"),
        a = r("q1tI"),
        c = r("sUmc"),
        o = (function() {
          function e() {
            this.m_mapEmoticonHovers = new Map();
          }
          return (
            (e.prototype.GetEmoticonHover = function(e) {
              var t = this.m_mapEmoticonHovers.get(e);
              return (
                t || ((t = new u(e)), this.m_mapEmoticonHovers.set(e, t)), t
              );
            }),
            e
          );
        })(),
        u = (function() {
          function o(e) {
            (this.m_bVisible = !1),
              (this.m_strEmoticonHoverHTML = void 0),
              (this.m_bLoadingData = !1),
              (this.m_strEmoticonName = e);
          }
          return (
            Object.defineProperty(o.prototype, "visible", {
              get: function() {
                return this.m_bVisible && !!this.m_strEmoticonHoverHTML;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(o.prototype, "emoticon_html", {
              get: function() {
                return this.m_strEmoticonHoverHTML;
              },
              enumerable: !1,
              configurable: !0
            }),
            (o.prototype.Show = function(e, t) {
              var r = this;
              this.EnsureEmoticonLoaded();
              var i = e.currentTarget,
                n = a.createElement(t, { hover: this, target: i });
              o.sm_embeddedElements
                .ShowElementDelayed(i.ownerDocument, 50, n, this)
                .then(function() {
                  r.m_bVisible = !0;
                });
            }),
            (o.prototype.Hide = function(e) {
              (this.m_bVisible = !1),
                o.sm_embeddedElements.HideElement(
                  e.currentTarget.ownerDocument,
                  this,
                  500
                );
            }),
            (o.prototype.EnsureEmoticonLoaded = function() {
              var e,
                t,
                r,
                i,
                n,
                o = this;
              void 0 !== this.m_strEmoticonHoverHTML ||
                this.m_bLoadingData ||
                ((this.m_bLoadingData = !0),
                (e = "OnLoadEmoticon_" + this.m_strEmoticonName),
                (t =
                  s.b.COMMUNITY_CDN_URL +
                  "economy/emoticonhover/" +
                  encodeURIComponent(this.m_strEmoticonName) +
                  "/jsonp.js?callback=" +
                  encodeURIComponent(e) +
                  "&l=" +
                  encodeURIComponent(s.b.LANGUAGE)),
                (i = r = void 0),
                (n = function() {
                  (o.m_bLoadingData = !1),
                    delete window[e],
                    r && window.clearTimeout(r),
                    i && i.remove();
                }),
                (window[e] = function(e) {
                  (o.m_strEmoticonHoverHTML = e), (o.m_bVisible = !0), n();
                }),
                (r = window.setTimeout(n, 5e3)),
                ((i = window.document.createElement("script")).type =
                  "text/javascript"),
                (i.async = !0),
                (i.src = t),
                (i.onerror = n),
                window.document.head.appendChild(i));
            }),
            (o.sm_embeddedElements = new c.a("CEmoticonHoverContainer")),
            Object(i.c)([n.w], o.prototype, "m_bVisible", void 0),
            Object(i.c)([n.w], o.prototype, "m_strEmoticonHoverHTML", void 0),
            o
          );
        })(),
        d = new o();
    },
    "qD+2": function(e, t, r) {
      "use strict";
      var c = r("mrSG"),
        i = r("2vnA"),
        u = r("kyHq"),
        d = r("bxBv"),
        p = r("lkRc"),
        n = r("8H1D"),
        a = r("r64O"),
        l = (function() {
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
                  p.b.MEDIA_CDN_URL +
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
                ? p.b.MEDIA_CDN_COMMUNITY_URL +
                    "images/apps/" +
                    this.appid +
                    "/" +
                    e +
                    ".jpg"
                : Object(n.a)(t);
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
              (this.m_mapLanguages = i.w.map()),
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
              var r = p.b.LANGUAGE;
              return m(
                e,
                this.GetTokenList(r),
                "english" != r ? this.GetTokenList("english") : null,
                this.m_appid,
                t
              );
            }),
            (e.prototype.SubstituteParams = function(e, t) {
              var r = p.b.LANGUAGE;
              return g(
                e,
                this.GetTokenList(r),
                "english" != r ? this.GetTokenList("english") : null,
                this.m_appid,
                t
              );
            }),
            e
          );
        })();
      function m(e, t, r, i, n) {
        if (!e.startsWith("#"))
          return console.log("Token doesn't start with #:", e), "";
        var o = e;
        e = e.toLowerCase();
        var s = "";
        if (
          (t && t.has(e) && (s = t.get(e)),
          !s && r && r.has(e) && (s = r.get(e)),
          s)
        )
          s = g(s, t, r, i, n);
        else if (
          ((t || r) &&
            console.log(
              "No loc found for appid",
              i,
              o,
              "Tokens:",
              t,
              "Fallback:",
              r
            ),
          t && 1 != p.b.EUNIVERSE)
        )
          return e;
        return s;
      }
      function g(e, t, r, i, n) {
        var o = e.match(/{[A-za-z0-9_%#:]+}/g);
        if (o)
          for (var s = 0, a = o; s < a.length; s++) {
            var c = a[s],
              u = m(f(c.slice(1, -1), n), t, r, i, n);
            if (!u) return "";
            e = e.replace(c, u);
          }
        return (e = f(e, n));
      }
      function f(e, t) {
        var r = e.match(/%[A-Za-z0-9_:]+%/g);
        if (r)
          for (var i = 0, n = r; i < n.length; i++) {
            var o = n[i],
              s = o.slice(1, -1).toLowerCase(),
              a = t.get(s);
            null == a
              ? console.log("No rich presence found for", s)
              : (e = e.replace(o, a));
          }
        return e;
      }
      var h = r("MUT6"),
        s = r("qiKp");
      r.d(t, "b", function() {
        return _;
      }),
        r.d(t, "a", function() {
          return y;
        });
      var _ = (function() {
          function e() {
            (this.m_mapAppInfo = i.w.map()),
              (this.m_mapRichPresenceLoc = i.w.map()),
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
                  ((t = new l(e)),
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
                var t, r;
                return Object(c.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.m_PendingAppInfoResolve),
                        (r = Array.from(this.m_setPendingAppInfo)),
                        (this.m_PendingAppInfoPromise = void 0),
                        (this.m_PendingAppInfoResolve = void 0),
                        this.m_setPendingAppInfo.clear(),
                        [4, this.LoadAppInfoBatch(r)]
                      );
                    case 1:
                      return e.sent(), t(), [2];
                  }
                });
              });
            }),
            (e.prototype.LoadAppInfoBatch = function(a) {
              return Object(c.b)(this, void 0, void 0, function() {
                var t, r, i, n, o, s;
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
                        (r = d.a.Init(h.b))
                          .Body()
                          .set_language(Object(u.c)(p.b.LANGUAGE)),
                        (i = 50),
                        (e.label = 3);
                    case 3:
                      return 0 < t.length
                        ? ((n = Math.min(i, t.length)),
                          (o = t.slice(0, n)),
                          (t = t.slice(n)),
                          r.Body().set_appids(o),
                          [
                            4,
                            h.h.GetApps(
                              this.m_CMInterface.GetServiceTransport(),
                              r
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
              for (var t = [], r = 0, i = e.Body().apps(); r < i.length; r++) {
                var n = i[r],
                  o = this.m_mapAppInfo.get(n.appid());
                Object(a.a)(
                  o,
                  "Got AppInfo response for unrequested AppID: " + n.appid()
                ),
                  o &&
                    ((o = new l(n.appid())).DeserializeFromMessage(n),
                    this.m_mapAppInfo.set(n.appid(), o),
                    t.push(o));
              }
              this.SaveAppInfoBatchToLocalCache(t);
            }),
            (e.prototype.OnAppOverviewChange = function(e) {
              for (var t = 0, r = e; t < r.length; t++) {
                var i = r[t],
                  n = new l(i.appid());
                n.DeserializeFromAppOverview(i),
                  this.m_mapAppInfo.set(i.appid(), n);
              }
            }),
            (e.prototype.EnsureAppInfoForAppIDs = function(t) {
              return Object(c.b)(this, void 0, void 0, function() {
                var r,
                  i = this;
                return Object(c.e)(this, function(e) {
                  return (
                    (r = !1),
                    t.forEach(function(e) {
                      var t = i.m_mapAppInfo.get(e);
                      t
                        ? t.is_valid || (r = !0)
                        : ((t = new l(e)),
                          i.m_mapAppInfo.set(e, t),
                          i.QueueAppInfoRequest(e),
                          (r = !0));
                    }),
                    r && void 0 !== this.m_PendingAppInfoPromise
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
                var n,
                  t,
                  r,
                  i,
                  o = this;
                return Object(c.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_CacheStorage
                        ? (console.log(
                            "Loading batch of App Info from Local Cache: ",
                            s
                          ),
                          (n = new Date(new Date().getTime() - 12096e5)),
                          (t = function(i) {
                            return Object(c.b)(o, void 0, void 0, function() {
                              var t, r;
                              return Object(c.e)(this, function(e) {
                                switch (e.label) {
                                  case 0:
                                    return [
                                      4,
                                      this.m_CacheStorage.GetObject(
                                        this.GetCacheKeyForAppID(i)
                                      )
                                    ];
                                  case 1:
                                    return (t = e.sent())
                                      ? ((r = this.m_mapAppInfo.get(i)),
                                        Object(a.a)(
                                          r,
                                          "Didn't find AppInfo in our map when loading from cache but it should've been there?"
                                        ),
                                        r
                                          ? ((r = new l(
                                              i
                                            )).DeserializeFromCacheObject(t),
                                            r.is_initialized
                                              ? (this.m_mapAppInfo.set(i, r),
                                                r.time_updated_from_server < n
                                                  ? [2, i]
                                                  : [2, null])
                                              : (console.warn(
                                                  "Failed to deserialize cached App Info: ",
                                                  i,
                                                  t
                                                ),
                                                [2, i]))
                                          : [2, i])
                                      : [2, i];
                                }
                              });
                            });
                          }),
                          (r = s.map(t)),
                          [4, Promise.all(r)])
                        : [2, s];
                    case 1:
                      return (
                        (i = e.sent()),
                        [
                          2,
                          i.filter(function(e) {
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
                var t, r, i, n;
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
                      r = o;
                    t < r.length;
                    t++
                  )
                    (i = r[t]),
                      (n = i.SerializeToCacheObject()) &&
                        this.m_CacheStorage.StoreObject(
                          this.GetCacheKeyForAppID(i.appid),
                          n
                        );
                  return [2];
                });
              });
            }),
            (e.prototype.Localize = function(e, t, r) {
              var i = this.GetRichPresenceLoc(e);
              return i
                ? i.Localize(t, r)
                : 1 != p.b.EUNIVERSE
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
              var r = new o(e);
              return (
                this.m_mapRichPresenceLoc.set(e.toString(), r),
                this.QueueRichPresenceLocRequest(r),
                r
              );
            }),
            (e.prototype.GetRichPresenceLocAsync = function(e) {
              var t = this.GetRichPresenceLoc(e);
              return t.m_nLastUpdated ? Promise.resolve(t) : t.m_fetching;
            }),
            (e.prototype.OnRichPresenceLocUpdate = function(e, t) {
              e.m_nLastUpdated = Date.now();
              for (var r = 0, i = t; r < i.length; r++) {
                var n = i[r],
                  o = n.language(),
                  s = e.m_mapLanguages.get(o);
                s
                  ? s.clear()
                  : (e.m_mapLanguages.set(o, new Map()),
                    (s = e.m_mapLanguages.get(o)));
                for (var a = 0, c = n.tokens(); a < c.length; a++) {
                  var u = c[a];
                  s.set(u.name().toLowerCase(), u.value());
                }
              }
            }),
            (e.prototype.QueueRichPresenceLocRequest = function(t) {
              var r = this;
              return (
                t.m_fetching ||
                  ((t.m_fetching = this.m_CMInterface
                    .WaitUntilLoggedOn()
                    .then(function() {
                      var e = d.a.Init(h.a);
                      return (
                        e.Body().set_appid(t.GetAppID()),
                        e.Body().set_language(p.b.LANGUAGE),
                        h.h.GetAppRichPresenceLocalization(
                          r.m_CMInterface.GetServiceTransport(),
                          e
                        )
                      );
                    })
                    .then(function(e) {
                      return (
                        (t.m_fetching = null),
                        1 != e.GetEResult()
                          ? Promise.reject()
                          : (r.OnRichPresenceLocUpdate(
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
            Object(c.c)([i.f], e.prototype, "OnGetAppsResponse", null),
            Object(c.c)([i.f], e.prototype, "OnRichPresenceLocUpdate", null),
            e
          );
        })(),
        y = new _();
    },
    qiKp: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return o;
      }),
        r.d(t, "b", function() {
          return a;
        }),
        r.d(t, "c", function() {
          return c;
        }),
        r.d(t, "d", function() {
          return u;
        });
      var s = r("mrSG"),
        i = r("Kw0F"),
        n = r("bxiW"),
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
                  i.b(t.m_vecCallbacks, e);
                }
              };
            }),
            (e.prototype.Dispatch = function() {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              for (var r = 0, i = this.m_vecCallbacks; r < i.length; r++) {
                i[r].apply(void 0, e);
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
            Object(s.c)([n.a], e.prototype, "ScheduledInternal", null),
            e
          );
        })(),
        c = (function() {
          function e() {
            this.m_rgListeners = [];
          }
          return (
            (e.prototype.AddEventListener = function(e, t, r) {
              e.addEventListener(t, r),
                this.m_rgListeners.push({ element: e, type: t, listener: r });
            }),
            (e.prototype.Unregister = function() {
              for (var e = 0, t = this.m_rgListeners; e < t.length; e++) {
                var r = t[e];
                r.element.removeEventListener(r.type, r.listener);
              }
              this.m_rgListeners = [];
            }),
            e
          );
        })();
      function u(o) {
        return Object(s.b)(this, void 0, void 0, function() {
          var t, i, r, n;
          return Object(s.e)(this, function(e) {
            switch (e.label) {
              case 0:
                return (
                  (t = []),
                  (i = Object.keys(o)).forEach(function(e) {
                    return t.push(o[e]);
                  }),
                  [4, Promise.all(t)]
                );
              case 1:
                return (
                  (r = e.sent()),
                  (n = {}),
                  [
                    2,
                    r.reduce(function(e, t, r) {
                      return (e[i[r]] = t), e;
                    }, n)
                  ]
                );
            }
          });
        });
      }
    },
    rcgg: function(e, t, r) {
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
        RoomEffectButton: "emoticon_RoomEffectButton_2v2oP",
        TopDivider: "emoticon_TopDivider_2A8Fl",
        BottomDivider: "emoticon_BottomDivider_2IZ1K",
        CountBadge: "emoticon_CountBadge_3lf1T",
        StickerButton: "emoticon_StickerButton_3Wc3j"
      };
    },
    wUwH: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return s;
      });
      var i = r("mrSG"),
        n = r("lkRc"),
        o = r("2vnA"),
        s = (function() {
          function e() {
            (this.m_bEmoticonListRequested = !1),
              (this.m_bInitialized = !1),
              (this.m_rgEmoticons = []),
              (this.m_rgFlairs = []),
              (this.m_rgRecentEmoticons = void 0),
              (this.m_rgStickers = []),
              (this.m_rgEffects = []),
              (this.m_rtLastStickerOrEffect = Number.MIN_SAFE_INTEGER);
          }
          return (
            (e.GetEmoticonURL = function(e, t) {
              return t
                ? n.b.COMMUNITY_CDN_URL + "economy/emoticonlarge/" + e
                : n.b.COMMUNITY_CDN_URL + "economy/emoticon/" + e;
            }),
            (e.GetEmoticonReplaceRegex = function() {
              return e.sm_EmoticonRegex;
            }),
            (e.prototype.SearchEmoticons = function(t, u, r) {
              function d(e) {
                return e.name_normalized || e.name;
              }
              void 0 === u && (u = 25),
                void 0 === r && (r = !0),
                this.UpdateEmoticonList(),
                (t = t.toLocaleLowerCase());
              var e = this.recent_emoticons.filter(function(e) {
                  return !t || d(e).startsWith(t);
                }),
                i = this.recent_emoticons.filter(function(e) {
                  return !r && -1 !== d(e).indexOf(t);
                }),
                n = this.m_rgEmoticons.filter(function(e) {
                  return !t || d(e).startsWith(t);
                }),
                o = this.m_rgEmoticons.filter(function(e) {
                  return !r && -1 !== d(e).indexOf(t);
                }),
                p = new Set(),
                l = [];
              function s(e, t, r) {
                for (var i, n, o, s = 0, a = e; s < a.length; s++) {
                  var c = a[s];
                  if (
                    ((n = t),
                    (o = r((i = c))),
                    l.length >= u ||
                      (p.has(i) ||
                        (p.add(i), l.push({ name: d(i), recent: n, new: o })),
                      0))
                  )
                    break;
                }
              }
              return (
                s(e, !0, function(e) {
                  return !(e.last_used || !e.time_received);
                }),
                s(n, !1, function() {
                  return !1;
                }),
                s(i, !0, function(e) {
                  return !(e.last_used || !e.time_received);
                }),
                s(o, !1, function() {
                  return !1;
                }),
                l
              );
            }),
            Object.defineProperty(e.prototype, "is_initialized", {
              get: function() {
                return this.m_bInitialized;
              },
              enumerable: !1,
              configurable: !0
            }),
            (e.prototype.GetTimeReceivedNewestEmoticon = function() {
              return this.UpdateEmoticonList(), this.m_rtMostRecentEmoticon;
            }),
            (e.prototype.GetTimeReceivedForStickerOrEffect = function() {
              return this.m_rtLastStickerOrEffect;
            }),
            (e.prototype.UpdateEmoticonList = function() {
              this.m_bInitialized || this.RequestEmoticonList();
            }),
            Object.defineProperty(e.prototype, "emoticon_list", {
              get: function() {
                return this.UpdateEmoticonList(), this.m_rgEmoticons;
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "flair_list", {
              get: function() {
                return this.UpdateEmoticonList(), this.m_rgFlairs;
              },
              enumerable: !1,
              configurable: !0
            }),
            (e.prototype.GetStickerList = function() {
              return this.m_rgStickers;
            }),
            (e.prototype.GetEffectList = function() {
              return this.m_rgEffects;
            }),
            (e.prototype.GetFlairListByGroupID = function(t) {
              return this.m_rgFlairs.filter(function(e) {
                return e.flairGroupID === t;
              });
            }),
            Object.defineProperty(e.prototype, "recent_emoticons", {
              get: function() {
                return (
                  void 0 === this.m_rgRecentEmoticons &&
                    this.BuildRecentEmoticonList(),
                  this.m_rgRecentEmoticons
                );
              },
              enumerable: !1,
              configurable: !0
            }),
            (e.prototype.TrackEmoticonUsage = function(e, t) {
              if (this.m_bInitialized) {
                for (
                  var r, i = new Map(), n = /\[emoticon\]([^[]*)/g;
                  (r = n.exec(e));

                ) {
                  var o = i.get(r[1]) || 0;
                  i.set(r[1], o + 1);
                }
                var s = !1;
                if (i.size) {
                  if (void 0 !== this.m_rgRecentEmoticons)
                    for (
                      var a = 0, c = this.m_rgRecentEmoticons;
                      a < c.length;
                      a++
                    ) {
                      var u = c[a];
                      i.has(u.name) &&
                        ((u.last_used = t),
                        (u.use_count += i.get(u.name)),
                        i.delete(u.name),
                        u.time_received && ((s = !0), delete u.time_received));
                    }
                  if (i.size)
                    for (var d = 0, p = this.m_rgEmoticons; d < p.length; d++) {
                      u = p[d];
                      i.has(u.name) &&
                        ((u.last_used = t),
                        (u.use_count += i.get(u.name)),
                        delete u.time_received,
                        void 0 !== this.m_rgRecentEmoticons &&
                          this.m_rgRecentEmoticons.push(u));
                    }
                  if (
                    void 0 !== this.m_rgRecentEmoticons &&
                    (this.SortRecentEmoticons(), s)
                  ) {
                    this.m_rtMostRecentEmoticon = void 0;
                    for (
                      var l = 0, m = this.m_rgRecentEmoticons;
                      l < m.length;
                      l++
                    ) {
                      !(u = m[l]).last_used &&
                        u.time_received &&
                        (!this.m_rtMostRecentEmoticon ||
                          u.time_received > this.m_rtMostRecentEmoticon) &&
                        (this.m_rtMostRecentEmoticon = u.time_received);
                    }
                  }
                }
              }
            }),
            (e.prototype.RequestEmoticonList = function() {
              !this.m_bEmoticonListRequested &&
                this.BInitialized() &&
                ((this.m_bEmoticonListRequested = !0),
                this.RequestEmoticonListInternal());
            }),
            (e.prototype.BuildRecentEmoticonList = function() {
              this.m_rgRecentEmoticons = [];
              for (
                var e = this.GetServerTime() - 604800,
                  t = 0,
                  r = this.m_rgEmoticons;
                t < r.length;
                t++
              ) {
                var i = r[t];
                (i.last_used || (i.time_received && i.time_received > e)) &&
                  this.m_rgRecentEmoticons.push(i);
              }
              this.SortRecentEmoticons();
            }),
            (e.prototype.SortRecentEmoticons = function() {
              this.m_rgRecentEmoticons.sort(function(e, t) {
                return (
                  (t.last_used || t.time_received) -
                  (e.last_used || e.time_received)
                );
              }),
                (this.m_rgRecentEmoticons = this.m_rgRecentEmoticons.slice(
                  0,
                  50
                ));
            }),
            (e.prototype.OnEmoticonListReceived = function(e) {
              (this.m_rgFlairs = []),
                (this.m_rgEmoticons = []),
                (this.m_rgRecentEmoticons = void 0),
                (this.m_rtMostRecentEmoticon = void 0);
              for (
                var t = this.GetServerTime() - 604800, r = 0, i = e;
                r < i.length;
                r++
              ) {
                var n = i[r],
                  o = n.name;
                o.startsWith("^")
                  ? this.m_rgFlairs.push({
                      name: o.match(new RegExp(/:(.*):/))[1],
                      flairGroupID: o.match(new RegExp(/\^(.*)\^/))[1]
                    })
                  : (!n.last_used && n.time_received > t
                      ? (!this.m_rtMostRecentEmoticon ||
                          n.time_received > this.m_rtMostRecentEmoticon) &&
                        (this.m_rtMostRecentEmoticon = n.time_received)
                      : delete n.time_received,
                    this.m_rgEmoticons.push(n));
              }
              (this.m_bInitialized = !0), (this.m_bEmoticonListRequested = !1);
            }),
            (e.sm_EmoticonRegex = new RegExp("ː([a-zA-Z0-9_\\-]+)ː", "g")),
            Object(i.c)([o.w], e.prototype, "m_bInitialized", void 0),
            Object(i.c)([o.w], e.prototype, "m_rtMostRecentEmoticon", void 0),
            Object(i.c)([o.w], e.prototype, "m_rtLastStickerOrEffect", void 0),
            Object(i.c)([o.f], e.prototype, "TrackEmoticonUsage", null),
            e
          );
        })();
    }
  }
]);

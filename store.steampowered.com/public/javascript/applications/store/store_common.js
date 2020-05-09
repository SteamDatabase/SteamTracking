/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    "+d9t": function(t, e, n) {
      "use strict";
      n.d(e, "c", function() {
        return l;
      }),
        n.d(e, "a", function() {
          return p;
        }),
        n.d(e, "b", function() {
          return m;
        });
      var a = n("mrSG"),
        s = n("q1tI"),
        r = n("y+6m"),
        o = n("TLQK"),
        i = n("X3Ds"),
        c = n("TtDX");
      function l(t, e) {
        var n;
        (n =
          "currentTarget" in t ? t.currentTarget.ownerDocument.defaultView : t),
          0 == e.indexOf("steam://")
            ? (n.location.href = e)
            : n.open(
                e,
                null,
                "menubar,location,resizable,scrollbars,status,noopener"
              );
      }
      function p(t) {
        var e =
            "undefined" != typeof SteamClient &&
            void 0 !== SteamClient.SharedConnection,
          n = t.bDisableContextMenu,
          r = t.onContextMenu,
          o = t.href,
          i = Object(a.f)(t, ["bDisableContextMenu", "onContextMenu", "href"]);
        return (
          e && !o.startsWith("steam://") && (o = "steam://openurl/" + o),
          n || r || (r = d),
          s.createElement(
            "a",
            Object(a.a)({}, i, {
              href: o,
              target: "_blank",
              rel: "noopener noreferrer",
              onContextMenu: r
            }),
            t.children
          )
        );
      }
      function u(t) {
        var e = t.strURL,
          n = t.unPID;
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            r.d,
            {
              onSelected: function() {
                i.i(e);
              }
            },
            Object(o.d)("#ContextMenu_CopyLinkURL")
          ),
          s.createElement(
            r.d,
            {
              onSelected: function(t) {
                m(t, e, { unPID: n });
              }
            },
            Object(o.d)("#ContextMenu_OpenLinkInNewWindow")
          )
        );
      }
      function d(t, e) {
        var n = t.currentTarget;
        return Object(c.a)(
          s.createElement(
            r.c,
            null,
            s.createElement(u, { strURL: n.href, unPID: e })
          ),
          t
        );
      }
      function m(t, e, n) {
        void 0 === n && (n = {});
        var r,
          o = n.bForceExternal,
          i = n.unPID;
        (r =
          "currentTarget" in t ? t.currentTarget.ownerDocument.defaultView : t),
          "undefined" != typeof SteamClient && void 0 !== SteamClient.WebChat
            ? SteamClient.WebChat.OpenURLInClient(e, i || 0, !!o)
            : 0 == e.indexOf("steam://") &&
              0 != e.indexOf("steam://remoteplay/connect")
            ? (r.location.href = e)
            : r.open(
                e,
                null,
                "menubar,location,resizable,scrollbars,status,noopener"
              );
      }
    },
    "0OaU": function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return l;
      });
      var r = n("mrSG"),
        o = n("q1tI"),
        i = n.n(o),
        a = n("6Y59"),
        s = n("2i24"),
        c = n.n(s),
        l = (function(e) {
          function t(t) {
            return e.call(this, t) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.AddSizeClass = function(t) {
              "small" == this.props.size
                ? t.push(c.a.throbber_small)
                : "medium" == this.props.size
                ? t.push(c.a.throbber_medium)
                : "xlarge" == this.props.size
                ? t.push(c.a.throbber_xlarge)
                : "xxlarge" == this.props.size
                ? t.push(c.a.throbber_xxlarge)
                : t.push(c.a.throbber_large);
            }),
            (t.prototype.render = function() {
              var t = [c.a.LoadingWrapper, "SteamLogoThrobber"];
              this.AddSizeClass(t),
                void 0 === this.props.string && t.push(c.a.noString),
                this.props.className && t.push(this.props.className),
                this.props.static && t.push(c.a.Static);
              var e = i.a.createElement(
                "div",
                { className: t.join(" ") },
                i.a.createElement(
                  "div",
                  { className: c.a.Throbber },
                  i.a.createElement(a.B, { className: c.a.base }),
                  i.a.createElement(a.B, { className: c.a.blur })
                )
              );
              return i.a.createElement(
                "div",
                {
                  className:
                    "center" == this.props.position
                      ? c.a.throbber_center_wrapper
                      : ""
                },
                e,
                Boolean(this.props.string) &&
                  i.a.createElement(
                    "div",
                    { className: c.a.ThrobberText },
                    this.props.string
                  )
              );
            }),
            t
          );
        })(i.a.PureComponent);
    },
    "0QoN": function(t, e, n) {
      "use strict";
      var r = n("mrSG"),
        o = n("q1tI"),
        s = n.n(o),
        i = n("TyAF"),
        a = n("bxiW"),
        c = n("TtDX"),
        l = n("Gorr"),
        p = n("6Y59"),
        u = n("TLQK"),
        d = n("exH9"),
        m = n("Z9dU"),
        h = n.n(m),
        _ = 1576780700,
        f = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(e, t),
            (e.prototype.OnEmoticonClick = function(t) {
              var e = this.props,
                n = (e.emoticonStore, e.SetUIDisplayPref),
                r = e.contextOptions;
              if (
                (Object(c.a)(
                  s.a.createElement(l.b, {
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
                  t,
                  r || {
                    bOverlapHorizontal: !0,
                    bPreferPopLeft: !0,
                    bPreferPopTop: !0
                  }
                ),
                this.BHaveUnseenEmoticons() && n)
              ) {
                var o = this.GetNewestIndicatorTime();
                (!o || o < _) && (o = _), n("rtLastAckedNewEmoticons", o);
              }
            }),
            (e.prototype.GetNewestIndicatorTime = function() {
              var t = this.props.emoticonStore,
                e = Number.MIN_SAFE_INTEGER,
                n = t.GetTimeReceivedNewestEmoticon();
              n && (e = n);
              var r = t.GetTimeReceivedForStickerOrEffect();
              return (e = Math.max(r, e)) > Number.MIN_SAFE_INTEGER
                ? e
                : void 0;
            }),
            (e.prototype.BHaveUnseenEmoticons = function() {
              var t = this.props.rtLastAckedNewEmoticons,
                e = this.GetNewestIndicatorTime();
              return !t || t < _ || (e && (!t || t < e));
            }),
            (e.prototype.render = function() {
              var t = this.props,
                e = t.disabled,
                n = t.className,
                r = t.ttip,
                o = t.useImg,
                i = [n],
                a = !1;
              return (
                e
                  ? i.push("disabled")
                  : this.BHaveUnseenEmoticons() && (a = !0),
                r && i.push("ttip"),
                o
                  ? s.a.createElement(
                      "span",
                      { onClick: this.OnEmoticonClick },
                      s.a.createElement("img", {
                        src: this.props.useImg,
                        className: d.a.apply(void 0, i),
                        title:
                          this.props.title ||
                          Object(u.d)("#ChatEntryButton_Emoticon"),
                        "data-tooltip-text": r
                      })
                    )
                  : (i.push(h.a.chatSubmitButton, h.a.EmoticonPickerButton),
                    s.a.createElement(
                      "button",
                      {
                        className: d.a.apply(void 0, i),
                        type: "button",
                        onClick: this.OnEmoticonClick,
                        title:
                          this.props.title ||
                          Object(u.d)("#ChatEntryButton_Emoticon"),
                        disabled: e,
                        "data-tooltip-text": r
                      },
                      this.props.buttonIcon || s.a.createElement(p.i, null),
                      a && s.a.createElement(l.c, null)
                    ))
              );
            }),
            Object(r.c)([a.a], e.prototype, "OnEmoticonClick", null),
            (e = Object(r.c)([i.observer], e))
          );
        })(s.a.Component);
      e.a = f;
    },
    "5E+2": function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return p;
      });
      var _ = n("mrSG"),
        f = n("q1tI"),
        r = n("sUmc"),
        b = n("UPxs"),
        o = n("exH9"),
        i = n("DWPT"),
        a = n("TLQK"),
        s = n("bxiW"),
        c = n("LY6W"),
        l = n.n(c),
        p = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(_.d)(e, t),
            (e.prototype.TryHide = function() {
              this.m_fnHide && this.m_fnHide(), (this.m_fnHide = null);
            }),
            (e.prototype.componentWillUnmount = function() {
              this.TryHide();
            }),
            (e.prototype.render = function() {
              var e = this,
                t = this.props,
                n = t.toolTipContent,
                r = t.nDelayShowMS,
                o = t.bDisabled,
                i = t.direction,
                a = t.nBodyAlignment,
                s = t.nBodyDistance,
                c = t.nAllowOffscreenPx,
                l = t.nMaxLateralMoveOnScreen,
                p = t.strTooltipClassname,
                u = Object(_.f)(t, [
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
                  direction: i,
                  nBodyAlignment: a,
                  nBodyDistance: s,
                  nAllowOffscreenPx: c,
                  nMaxLateralMoveOnScreen: l,
                  className: p
                },
                m = null;
              if (!o) {
                var h = function(t) {
                  return (e.m_fnHide = t);
                };
                m =
                  "string" == typeof n
                    ? v.ForText(n, h, r, d)
                    : v.ForReactNode(n, h, r, d);
              }
              return f.createElement(
                b.a,
                Object(_.a)(
                  {
                    navStop: !!u.onClick,
                    onMouseEnter: m ? m.ShowToolTip : null,
                    onMouseLeave: this.TryHide
                  },
                  u
                ),
                this.props.children
              );
            }),
            (e.defaultProps = { nDelayShowMS: 300 }),
            Object(_.c)([s.a], e.prototype, "TryHide", null),
            e
          );
        })(f.Component),
        v = (f.Component,
        f.Component,
        f.Component,
        (function() {
          function o(t, e, n, r) {
            (this.m_rctContent = t),
              (this.m_nDelayShowMS = n),
              (this.m_hoverPositionProps = r),
              (this.m_strKey = "tooltip-" + Math.floor(1e8 * Math.random())),
              (this.m_fnOnShow = e);
          }
          return (
            (o.ForReactNode = function(t, e, n, r) {
              return new o(t, e, n, r);
            }),
            (o.ForText = function(t, e, n, r) {
              return new o(
                f.createElement(
                  "div",
                  { className: l.a.TextToolTip },
                  Object(a.d)(t)
                ),
                e,
                n,
                r
              );
            }),
            (o.prototype.ShowToolTip = function(t) {
              var e = this,
                n = t.currentTarget || t,
                r = { target: n };
              o.sm_embeddedElements.ShowElementDelayed(
                n.ownerDocument,
                this.m_nDelayShowMS,
                f.createElement(
                  i.a,
                  Object(_.a)({}, r, this.m_hoverPositionProps),
                  this.m_rctContent
                ),
                this.m_strKey
              ),
                this.m_fnOnShow &&
                  this.m_fnOnShow(function() {
                    return e.HideToolTip(n);
                  });
            }),
            (o.prototype.HideToolTip = function(t) {
              var e = t.currentTarget || t;
              o.sm_embeddedElements.HideElement(e.ownerDocument, this.m_strKey);
            }),
            (o.sm_embeddedElements = new r.a("ignored-id-tooltip-map")),
            Object(_.c)([s.a], o.prototype, "ShowToolTip", null),
            Object(_.c)([s.a], o.prototype, "HideToolTip", null),
            o
          );
        })());
    },
    "5eAM": function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return a;
      });
      var p = n("mrSG"),
        r = n("2vnA"),
        o = n("vDqi"),
        u = n.n(o),
        d = n("lkRc"),
        m = n("wbSL"),
        i = n("9f3B"),
        a = new ((function() {
          function t() {
            (this.m_mapAppLinkInfo = new Map()),
              (this.m_mapMissingApps = new Map()),
              (this.m_bLoadedFromConfig = !1);
          }
          return (
            (t.prototype.LazyInit = function() {
              var r = this;
              if (!this.m_bLoadedFromConfig) {
                var t = Object(d.f)("applinkinfo", "application_config");
                this.ValidateStoreDefault(t) &&
                  t.forEach(function(t) {
                    var e = new m.a();
                    e.InitFrom(t), r.m_mapAppLinkInfo.set(e.appid, e);
                  });
                var e = Object(d.f)(
                  "additional_applinks",
                  "application_config"
                );
                this.ValidateStoreDefault(e) &&
                  e.forEach(function(t) {
                    t.appid = Number(t.appid);
                    var e = t.appid;
                    if (!r.m_mapAppLinkInfo.has(e)) {
                      var n = new m.a();
                      n.InitFrom(t), r.m_mapAppLinkInfo.set(e, n);
                    }
                  });
                var n = Object(d.f)("appunknown", "application_config");
                Object(i.a)(n) &&
                  n.forEach(function(t) {
                    return r.m_mapMissingApps.set(t, !0);
                  }),
                  (this.m_bLoadedFromConfig = !0);
              }
            }),
            (t.prototype.ValidateStoreDefault = function(t) {
              var e = t;
              return (
                !!(
                  e &&
                  Array.isArray(e) &&
                  0 < e.length &&
                  "object" == typeof e[0]
                ) && "string" == typeof e[0].title
              );
            }),
            (t.prototype.GetAppLinkInfo = function(t) {
              return this.LazyInit(), this.m_mapAppLinkInfo.get(t);
            }),
            (t.prototype.LoadAppLinkInfo = function(c, l) {
              return Object(p.b)(this, void 0, void 0, function() {
                var e,
                  n,
                  r,
                  o,
                  i,
                  a,
                  s = this;
                return Object(p.e)(this, function(t) {
                  switch (t.label) {
                    case 0:
                      return (
                        this.LazyInit(),
                        (e = []),
                        c.forEach(function(t) {
                          s.m_mapAppLinkInfo.has(t) ||
                            s.m_mapMissingApps.has(t) ||
                            0 === t ||
                            e.push(t);
                        }),
                        e.length
                          ? (e.sort(),
                            (n = {
                              appids: e.join(","),
                              cc: d.c.COUNTRY || "US",
                              l: d.c.LANGUAGE,
                              feature: l,
                              origin: self.origin
                            }),
                            [
                              4,
                              u.a.get(
                                d.c.STORE_BASE_URL +
                                  "broadcast/ajaxgetbatchappcapsuleinfo",
                                { params: n }
                              )
                            ])
                          : [3, 2]
                      );
                    case 1:
                      if (((r = t.sent()), (o = r && r.data && r.data.apps)))
                        for (i = 0; i < o.length; i++)
                          (a = new m.a()).InitFrom(o[i]),
                            this.m_mapAppLinkInfo.set(a.appid, a);
                      t.label = 2;
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            Object(p.c)(
              [r.observable],
              t.prototype,
              "m_mapAppLinkInfo",
              void 0
            ),
            Object(p.c)([r.action], t.prototype, "LazyInit", null),
            t
          );
        })())();
      window.g_GiveawayStore = a;
    },
    "6+2x": function(t, e, n) {
      t.exports = {
        HoverPosition: "hoverposition_HoverPosition_3vg1v",
        Ready: "hoverposition_Ready_1Ye_0",
        NoSpace: "hoverposition_NoSpace_pxVZH",
        EnablePointerEvents: "hoverposition_EnablePointerEvents_2b9OE"
      };
    },
    "6x+F": function(t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVBRDg3RTRCNENCMzExRTNCRjc1OUVCNjQzQTc5MUY3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVBRDg3RTRDNENCMzExRTNCRjc1OUVCNjQzQTc5MUY3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUFEODdFNDk0Q0IzMTFFM0JGNzU5RUI2NDNBNzkxRjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUFEODdFNEE0Q0IzMTFFM0JGNzU5RUI2NDNBNzkxRjciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6imCnEAAAA6UlEQVR42szUPwtBURjHcVfKJGVT7DLYvQCTkoGSspq8CZPNzmyQIq+AskgsFgtegZRCSTi+cibudZ+rmzz1Gc7pnF+dv4ZSyuNmGW4Heh6BQjGM0Ps0ThoWxEI9q+ZGYFGHjRH+NNZqD7MoIYQVlkjhihvO6KCt25Z76EdVvdcRB5P+it2SSxYTzWqGqF1gX8krLTmUoTBsp0/+LdD75fUNICG52E0HSza9Qq+BGWwdhE7sAn2oOwhsSV5KBGtB2AZx6dNLYa8nXjDFHFfdd0LeydN7VBk5DNCFDwUkdbvxk//w/wPvAgwAuYpVKbKt5hQAAAAASUVORK5CYII=";
    },
    "8HkJ": function(t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OENENEIzRkRDOEM2MTFFNzkzQkNCNkJENzEzMDIzQ0UiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OENENEIzRkNDOEM2MTFFNzkzQkNCNkJENzEzMDIzQ0UiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUZCNDhBREI0Q0IzMTFFM0FCM0ZDMUU2OTVGNUEwRUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUZCNDhBREM0Q0IzMTFFM0FCM0ZDMUU2OTVGNUEwRUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5YkRRHAAABB0lEQVR42mL8//8/AzUB47AyUBCIxYFYAojloFgBiJmBOBGXgcJQDSAsD8QyQHwSiIuAWB+IhYCYFc2iZ0AsDeeBDITibUD8Coh//0cFFf/xg9tIZjCwINnkCMQcaLb/AeJfQPwdiDmJCRcmJPY3akQKsoGM2CINjxxZBjJBxRmJNAMlltOwhOE/ID4KxJZAzILDwA9AvAibgbegaQ09UpqAuBJPpNwHYjMYB9lWMSDmR1MMso0LmqDZcBj4GZf//2JR/Bdq6F88YfgXl4HM1E422NIhC9Qioi1DDkMbIJaE5l9Yxgfl0XdQy3CFIRuppQ0ztKAQh1ogD8VyUD4oW9oNnQIWIMAAJM2E2lF9QHUAAAAASUVORK5CYII=";
    },
    "9f3B": function(t, e, n) {
      "use strict";
      function r(t) {
        var e = t;
        return e && Array.isArray(e) && 0 < e.length && "number" == typeof e[0];
      }
      n.d(e, "a", function() {
        return r;
      });
    },
    BFsE: function(t, e, n) {
      "use strict";
      var m = n("mrSG"),
        r = n("q1tI"),
        a = n.n(r),
        s = n("Mgs7"),
        c = n("6Y59"),
        o = n("TyAF"),
        i = n("bxiW"),
        l = n("exH9"),
        p = n("N6Aq"),
        u = n.n(p),
        d = n("2vnA"),
        h = n("vDqi"),
        _ = n.n(h),
        f = n("r+Z0").default;
      function b(t, e) {
        return t.endsWith("/") || (t += "/"), t + "login/" + e + "/";
      }
      function v() {
        var t = new FormData();
        return t.append("donotcache", new Date().getTime().toString()), t;
      }
      function g(n, r, o) {
        return Object(m.b)(this, void 0, void 0, function() {
          var e;
          return Object(m.e)(this, function(t) {
            switch (t.label) {
              case 0:
                return (
                  (o = Object.assign({}, o)).strUserName &&
                    (o.strUserName = o.strUserName.replace(
                      /[^\x00-\x7F]/g,
                      ""
                    )),
                  !o.strPassword || o.strPassword.match(/[^\x00-\x7F]/)
                    ? [2, null]
                    : o.strUserName
                    ? [
                        4,
                        (function(a, s) {
                          return Object(m.b)(this, void 0, void 0, function() {
                            var e, n, r, o, i;
                            return Object(m.e)(this, function(t) {
                              switch (t.label) {
                                case 0:
                                  (e = v()).append("username", s),
                                    (n = b(a, "getrsakey")),
                                    (t.label = 1);
                                case 1:
                                  return (
                                    t.trys.push([1, 3, , 4]),
                                    [4, _.a.post(n, e)]
                                  );
                                case 2:
                                  return 200 != (o = t.sent()).status
                                    ? [2, null]
                                    : (i = o.data) &&
                                      i.success &&
                                      i.publickey_mod &&
                                      i.publickey_exp &&
                                      i.timestamp
                                    ? ((r = i), [3, 4])
                                    : [2, null];
                                case 3:
                                  return t.sent(), [2, null];
                                case 4:
                                  return [2, r];
                              }
                            });
                          });
                        })(n, o.strUserName)
                      ]
                    : [2, null]
                );
              case 1:
                return (e = t.sent())
                  ? [
                      4,
                      (function(l, p, u, d) {
                        return Object(m.b)(this, void 0, void 0, function() {
                          var e, n, r, o, i, a, s, c;
                          return Object(m.e)(this, function(t) {
                            switch (t.label) {
                              case 0:
                                if (
                                  ((e = f.getPublicKey(
                                    d.publickey_mod,
                                    d.publickey_exp
                                  )),
                                  !1 === (n = f.encrypt(u.strPassword, e)))
                                )
                                  return [2, null];
                                (r = v()).append("password", n),
                                  r.append("username", u.strUserName),
                                  r.append(
                                    "twofactorcode",
                                    u.strTwoFactorCode || ""
                                  ),
                                  r.append(
                                    "emailauth",
                                    u.strEmailAuthCode || ""
                                  ),
                                  r.append("loginfriendlyname", ""),
                                  r.append("captchagid", u.gidCaptcha || ""),
                                  r.append(
                                    "captcha_text",
                                    u.strCaptchaText || ""
                                  ),
                                  r.append(
                                    "emailsteamid",
                                    u.emailSteamID || ""
                                  ),
                                  r.append("rsatimestamp", d.timestamp),
                                  r.append(
                                    "remember_login",
                                    u.bRememberLogin ? "true" : "false"
                                  ),
                                  (o = {}),
                                  p &&
                                    (r.append("oauth_client_id", p),
                                    r.append("mobile_chat_client", "true")),
                                  (i = b(l, "dologin")),
                                  (t.label = 1);
                              case 1:
                                return (
                                  t.trys.push([1, 3, , 4]),
                                  [4, _.a.post(i, r, o)]
                                );
                              case 2:
                                return 200 != (s = t.sent()).status
                                  ? [2, null]
                                  : (c = s.data)
                                  ? (c.oauth && (c.oauth = JSON.parse(c.oauth)),
                                    (a = c),
                                    [3, 4])
                                  : [2, null];
                              case 3:
                                return t.sent(), [2, null];
                              case 4:
                                return [2, a];
                            }
                          });
                        });
                      })(n, r, o, e)
                    ]
                  : (console.log("Failed to get RSA key"), [2, null]);
              case 2:
                return [2, t.sent()];
            }
          });
        });
      }
      var E,
        y,
        S,
        C,
        O = n("TLQK");
      ((y = E || (E = {}))[(y.Invalid = 0)] = "Invalid"),
        (y[(y.AccountName = 1)] = "AccountName"),
        (y[(y.EmailCode = 2)] = "EmailCode"),
        (y[(y.TwoFactorCode = 3)] = "TwoFactorCode"),
        (y[(y.Complete = 4)] = "Complete"),
        ((C = S || (S = {}))[(C.None = 0)] = "None"),
        (C[(C.InvalidCode = 1)] = "InvalidCode");
      var A = (function() {
          function t(t, e) {
            (this.m_strBaseURL = ""),
              (this.m_strOAuthClientID = ""),
              (this.m_fnLoginComplete = null),
              (this.m_bRequestInFlight = !1),
              (this.m_eCurrentStep = E.AccountName),
              (this.m_strErrorMessage = ""),
              (this.m_strEmailDomain = ""),
              (this.m_strCaptchaURL = ""),
              (this.m_eSteamGuardCodeError = S.None),
              (this.m_strBaseURL = t),
              (this.m_strOAuthClientID = e),
              (this.m_userFields = {
                strUserName: "",
                strPassword: "",
                strTwoFactorCode: "",
                strEmailAuthCode: "",
                emailSteamID: "",
                gidCaptcha: "",
                strCaptchaText: "",
                bRememberLogin: !1
              });
          }
          return (
            (t.prototype.Shutdown = function() {
              this.m_fnLoginComplete = null;
            }),
            (t.prototype.SetLoginCompleteCallback = function(t) {
              this.m_fnLoginComplete = t;
            }),
            (t.prototype.SetUserName = function(t) {
              this.m_userFields.strUserName = t;
            }),
            (t.prototype.GetUserName = function() {
              return this.m_userFields.strUserName;
            }),
            (t.prototype.SetPassword = function(t) {
              this.m_userFields.strPassword = t;
            }),
            (t.prototype.GetPassword = function() {
              return this.m_userFields.strPassword;
            }),
            (t.prototype.SetRememberPassword = function(t) {
              this.m_userFields.bRememberLogin = t;
            }),
            (t.prototype.GetRememberPassword = function() {
              return this.m_userFields.bRememberLogin;
            }),
            (t.prototype.SetEmailAuthCode = function(t) {
              this.m_userFields.strEmailAuthCode = t;
            }),
            (t.prototype.GetEmailAuthCode = function() {
              return this.m_userFields.strEmailAuthCode;
            }),
            (t.prototype.GetEmailDomain = function() {
              return this.m_strEmailDomain;
            }),
            (t.prototype.SetTwoFactorCode = function(t) {
              this.m_userFields.strTwoFactorCode = t;
            }),
            (t.prototype.GetTwoFactorCode = function() {
              return this.m_userFields.strTwoFactorCode;
            }),
            (t.prototype.SetCaptchaText = function(t) {
              this.m_userFields.strCaptchaText = t;
            }),
            (t.prototype.GetCaptchaText = function() {
              return this.m_userFields.strCaptchaText;
            }),
            (t.prototype.IsRequestInFlight = function() {
              return this.m_bRequestInFlight;
            }),
            (t.prototype.GetCurrentStep = function() {
              return this.m_eCurrentStep;
            }),
            (t.prototype.GetErrorMessage = function() {
              return this.m_strErrorMessage;
            }),
            (t.prototype.SetInitialErrorMessage = function(t) {
              this.m_strErrorMessage = t;
            }),
            (t.prototype.GetSteamGuardCodeError = function() {
              return this.m_eSteamGuardCodeError;
            }),
            (t.prototype.GetCaptchaURL = function() {
              return this.m_strCaptchaURL;
            }),
            (t.prototype.DoLogin = function() {
              return Object(m.b)(this, void 0, void 0, function() {
                var e,
                  n = this;
                return Object(m.e)(this, function(t) {
                  switch (t.label) {
                    case 0:
                      return this.m_bRequestInFlight
                        ? [2]
                        : (Object(d.runInAction)(function() {
                            (n.m_bRequestInFlight = !0),
                              (n.m_strErrorMessage = "");
                          }),
                          [
                            4,
                            g(
                              this.m_strBaseURL,
                              this.m_strOAuthClientID,
                              this.m_userFields
                            )
                          ]);
                    case 1:
                      return (
                        (e = t.sent()),
                        Object(d.runInAction)(function() {
                          (n.m_bRequestInFlight = !1), n.UpdateLoginResult(e);
                        }),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.UpdateLoginResult = function(t) {
              if (!t)
                return (
                  console.log("Login timeout"),
                  void (this.m_strErrorMessage = Object(O.d)(
                    "#ConnectionTrouble_FailedToConnect"
                  ))
                );
              if (t.login_complete) {
                if (
                  ((this.m_eCurrentStep = E.Complete), this.m_fnLoginComplete)
                ) {
                  var e = {
                    steamID: t.oauth ? t.oauth.steamid : "",
                    strAccountName: t.oauth ? t.oauth.account_name : "",
                    strOAuthToken: t.oauth ? t.oauth.oauth_token : ""
                  };
                  this.m_fnLoginComplete(e);
                }
              } else
                (this.m_strErrorMessage = t.message || ""),
                  (this.m_eSteamGuardCodeError = S.None),
                  t.requires_twofactor
                    ? (this.UpdateCaptchaURL("-1"),
                      this.m_eCurrentStep != E.TwoFactorCode ||
                        this.m_strErrorMessage ||
                        ((this.m_strErrorMessage = Object(O.d)(
                          "#MobileLogin_IncorrectSteamGuard"
                        )),
                        (this.m_eSteamGuardCodeError = S.InvalidCode),
                        (this.m_userFields.strTwoFactorCode = "")),
                      (this.m_eCurrentStep = E.TwoFactorCode))
                    : t.captcha_needed && t.captcha_gid
                    ? ((this.m_eCurrentStep = E.AccountName),
                      this.UpdateCaptchaURL(t.captcha_gid))
                    : t.emailauth_needed
                    ? (t.emaildomain && (this.m_strEmailDomain = t.emaildomain),
                      t.emailsteamid &&
                        (this.m_userFields.emailSteamID = t.emailsteamid),
                      this.m_eCurrentStep != E.EmailCode ||
                        this.m_strErrorMessage ||
                        ((this.m_strErrorMessage = Object(O.d)(
                          "#MobileLogin_IncorrectSteamGuard"
                        )),
                        (this.m_eSteamGuardCodeError = S.InvalidCode),
                        (this.m_userFields.strEmailAuthCode = "")),
                      (this.m_eCurrentStep = E.EmailCode))
                    : console.log("Unhandled login error");
            }),
            (t.prototype.RefreshCaptcha = function() {
              return Object(m.b)(this, void 0, void 0, function() {
                var e;
                return Object(m.e)(this, function(t) {
                  switch (t.label) {
                    case 0:
                      return [
                        4,
                        (function(i) {
                          return Object(m.b)(this, void 0, void 0, function() {
                            var e, n, r, o;
                            return Object(m.e)(this, function(t) {
                              switch (t.label) {
                                case 0:
                                  (e = v()),
                                    (n = b(i, "refreshcaptcha")),
                                    (r = ""),
                                    (t.label = 1);
                                case 1:
                                  return (
                                    t.trys.push([1, 3, , 4]),
                                    [4, _.a.post(n, e)]
                                  );
                                case 2:
                                  return 200 != (o = t.sent()).status
                                    ? [2, !1]
                                    : ((r = o.data.gid), [3, 4]);
                                case 3:
                                  return t.sent(), [2, !1];
                                case 4:
                                  return [2, r];
                              }
                            });
                          });
                        })(this.m_strBaseURL)
                      ];
                    case 1:
                      return (
                        (e = t.sent())
                          ? this.UpdateCaptchaURL(e)
                          : console.log("Failed to get captcha"),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.UpdateCaptchaURL = function(t) {
              (this.m_userFields.gidCaptcha = t),
                (this.m_userFields.strCaptchaText = ""),
                (this.m_strCaptchaURL =
                  "-1" != t
                    ? (function(t, e) {
                        return b(t, "rendercaptcha") + "?gid=" + e;
                      })(this.m_strBaseURL, t)
                    : "");
            }),
            Object(m.c)(
              [d.observable],
              t.prototype,
              "m_bRequestInFlight",
              void 0
            ),
            Object(m.c)([d.observable], t.prototype, "m_userFields", void 0),
            Object(m.c)([d.observable], t.prototype, "m_eCurrentStep", void 0),
            Object(m.c)(
              [d.observable],
              t.prototype,
              "m_strErrorMessage",
              void 0
            ),
            Object(m.c)(
              [d.observable],
              t.prototype,
              "m_strEmailDomain",
              void 0
            ),
            Object(m.c)([d.observable], t.prototype, "m_strCaptchaURL", void 0),
            Object(m.c)(
              [d.observable],
              t.prototype,
              "m_eSteamGuardCodeError",
              void 0
            ),
            Object(m.c)([i.a], t.prototype, "DoLogin", null),
            Object(m.c)(
              [d.action.bound],
              t.prototype,
              "UpdateCaptchaURL",
              null
            ),
            t
          );
        })(),
        I = n("0OaU"),
        w = (function(n) {
          function t(t) {
            var e = n.call(this, t) || this;
            return (
              (e.m_manager = new A(e.props.baseURL)),
              e.props.onLoginComplete &&
                e.m_manager.SetLoginCompleteCallback(e.props.onLoginComplete),
              e
            );
          }
          return (
            Object(m.d)(t, n),
            (t.prototype.componentWillUnmount = function() {
              this.m_manager.Shutdown();
            }),
            (t.prototype.render = function() {
              var t = this.props,
                e = (t.baseURL, t.onLoginComplete, t.className),
                n = Object(m.f)(t, ["baseURL", "onLoginComplete", "className"]),
                r = Object(l.a)(u.a.LoginDialog, e),
                o = this.m_manager.GetCurrentStep(),
                i = this.m_manager.GetErrorMessage();
              return a.a.createElement(
                "div",
                Object(m.a)({ className: r }, n),
                a.a.createElement(
                  "div",
                  { className: u.a.LoginPanelBackground },
                  a.a.createElement(c.z, null)
                ),
                a.a.createElement(
                  "div",
                  { className: u.a.LoginPanelContent },
                  i && a.a.createElement(N, { text: i }),
                  o == E.AccountName &&
                    a.a.createElement(T, { manager: this.m_manager }),
                  o == E.TwoFactorCode &&
                    a.a.createElement(B, {
                      manager: this.m_manager,
                      authtype: E.TwoFactorCode
                    }),
                  o == E.EmailCode &&
                    a.a.createElement(B, {
                      manager: this.m_manager,
                      authtype: E.EmailCode
                    }),
                  o == E.Complete &&
                    a.a.createElement(
                      "div",
                      { className: u.a.LoginComplete },
                      a.a.createElement(I.a, null)
                    )
                )
              );
            }),
            (t = Object(m.c)([o.observer], t))
          );
        })(a.a.Component);
      function N(t) {
        return a.a.createElement(
          "div",
          { className: u.a.ErrorMessage },
          t.text
        );
      }
      var T = (function(n) {
          function t(t) {
            var e = n.call(this, t) || this;
            return (e.state = { nNameSize: 0, nPassSize: 0 }), e;
          }
          return (
            Object(m.d)(t, n),
            (t.prototype.OnSubmit = function(t) {
              t.preventDefault(), this.props.manager.DoLogin();
            }),
            (t.prototype.OnChangeName = function(t) {
              var e = t.target.value || "";
              this.props.manager.SetUserName(t.target.value),
                24 < e.length && e.length < 39
                  ? this.setState({ nNameSize: 1 })
                  : 38 < e.length
                  ? this.setState({ nNameSize: 2 })
                  : this.setState({ nNameSize: 0 });
            }),
            (t.prototype.OnChangePassword = function(t) {
              var e = t.target.value || "";
              (e = e.replace(/[^\x00-\x7F]/g, "")),
                this.props.manager.SetPassword(e),
                19 < e.length && e.length < 39
                  ? this.setState({ nPassSize: 1 })
                  : 38 < e.length
                  ? this.setState({ nPassSize: 2 })
                  : this.setState({ nPassSize: 0 });
            }),
            (t.prototype.OnChangeRememberPass = function(t) {
              this.props.manager.SetRememberPassword(t.target.checked);
            }),
            (t.prototype.render = function() {
              var t,
                e,
                n = this,
                r = this.props.manager;
              return (
                (e =
                  1 == this.state.nPassSize
                    ? u.a.MedPass
                    : 2 == this.state.nPassSize
                    ? u.a.LargePass
                    : u.a.DefaultPass),
                (t =
                  1 == this.state.nNameSize
                    ? u.a.MedName
                    : 2 == this.state.nNameSize
                    ? u.a.LargeName
                    : u.a.DefaultNAme),
                a.a.createElement(
                  "div",
                  { className: u.a.AccountPasswordPanel },
                  a.a.createElement(
                    "div",
                    { className: u.a.SigninTitle },
                    Object(O.d)("#Login_SignIn")
                  ),
                  a.a.createElement(
                    "form",
                    {
                      className: u.a.AccountPasswordForm,
                      onSubmit: this.OnSubmit
                    },
                    a.a.createElement(s.j, {
                      className: Object(l.a)(u.a.AccountNameLabel, t),
                      label: Object(O.d)("#Login_AccountName"),
                      type: "text",
                      value: r.GetUserName(),
                      focusOnMount: !0,
                      maxLength: 64,
                      onChange: this.OnChangeName
                    }),
                    a.a.createElement(s.j, {
                      bIsPassword: !0,
                      className: Object(l.a)(u.a.PasswordDots, e),
                      label: Object(O.d)("#Login_Password"),
                      type: "password",
                      autoComplete: "off",
                      maxLength: 64,
                      size: 64,
                      value: r.GetPassword(),
                      onChange: this.OnChangePassword
                    }),
                    a.a.createElement(s.d, {
                      classname: u.a.RememberMeCheck,
                      label: Object(O.d)("#Login_RememberMe"),
                      disabled: !1,
                      onChange: function() {
                        return n.OnChangeRememberPass;
                      },
                      checked: r.GetRememberPassword()
                    }),
                    r.GetCaptchaURL() && a.a.createElement(L, { manager: r }),
                    a.a.createElement(
                      s.o,
                      { disabled: this.props.manager.IsRequestInFlight() },
                      Object(O.d)("#Login_SignIn").toLocaleUpperCase()
                    )
                  ),
                  a.a.createElement(
                    "a",
                    {
                      className: u.a.NeedHelpLink,
                      href: "http://help.steampowered.com/"
                    },
                    Object(O.d)("#Login_ForgotPassword")
                  ),
                  a.a.createElement("div", {
                    className: u.a.LoginCreateSeperator
                  }),
                  a.a.createElement(
                    "div",
                    { className: u.a.SteamUpsellContainer },
                    a.a.createElement(
                      "div",
                      { className: u.a.SteamUpsell },
                      Object(O.d)("#Login_NoSteamAccount")
                    ),
                    a.a.createElement(
                      "div",
                      { className: u.a.CreateAccountLink },
                      a.a.createElement(
                        "a",
                        { href: "https://store.steampowered.com/join/" },
                        Object(O.d)("#Login_CreateAccount")
                      )
                    )
                  )
                )
              );
            }),
            Object(m.c)([i.a], t.prototype, "OnSubmit", null),
            Object(m.c)([i.a], t.prototype, "OnChangeName", null),
            Object(m.c)([i.a], t.prototype, "OnChangePassword", null),
            Object(m.c)([i.a], t.prototype, "OnChangeRememberPass", null),
            (t = Object(m.c)([o.observer], t))
          );
        })(a.a.Component),
        L = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(m.d)(e, t),
            (e.prototype.OnCaptchaText = function(t) {
              this.props.manager.SetCaptchaText(t.target.value);
            }),
            (e.prototype.RefreshCaptcha = function(t) {
              this.props.manager.RefreshCaptcha();
            }),
            (e.prototype.render = function() {
              var t = this.props.manager;
              return a.a.createElement(
                "div",
                { className: u.a.CaptchaContainer },
                a.a.createElement(
                  "div",
                  { className: u.a.CaptchaBlock },
                  a.a.createElement(
                    "div",
                    { className: u.a.CaptchaImageAndInput },
                    a.a.createElement(
                      "div",
                      { className: u.a.CaptchaImageBox },
                      a.a.createElement("img", {
                        className: u.a.CaptchaImage,
                        src: t.GetCaptchaURL()
                      })
                    ),
                    a.a.createElement(s.j, {
                      className: u.a.CaptchaInput,
                      type: "text",
                      autoComplete: "off",
                      maxLength: 6,
                      value: t.GetCaptchaText(),
                      onChange: this.OnCaptchaText
                    })
                  ),
                  a.a.createElement(
                    "div",
                    { className: u.a.ErrorMessage },
                    Object(O.d)("#Login_CaptchaVerification")
                  )
                ),
                a.a.createElement(
                  "div",
                  null,
                  a.a.createElement(
                    "span",
                    {
                      className: u.a.RefreshCaptchaText,
                      onClick: this.RefreshCaptcha
                    },
                    Object(O.d)("#Login_RefreshCaptcha")
                  )
                )
              );
            }),
            Object(m.c)([i.a], e.prototype, "OnCaptchaText", null),
            Object(m.c)([i.a], e.prototype, "RefreshCaptcha", null),
            (e = Object(m.c)([o.observer], e))
          );
        })(a.a.Component),
        B = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(m.d)(e, t),
            (e.prototype.OnSubmit = function(t) {
              t.preventDefault(), this.props.manager.DoLogin();
            }),
            (e.prototype.OnChangeAuthCode = function(t) {
              this.props.authtype == E.TwoFactorCode
                ? this.props.manager.SetTwoFactorCode(t.target.value)
                : this.props.manager.SetEmailAuthCode(t.target.value);
            }),
            (e.prototype.render = function() {
              var t,
                e = this.props.manager,
                n = "",
                r = null,
                o = "",
                i = e.GetSteamGuardCodeError() == S.InvalidCode;
              switch (this.props.authtype) {
                case E.TwoFactorCode:
                  (n = e.GetTwoFactorCode()),
                    (r = Object(O.d)("#Login_Enter2FA")),
                    (t = a.a.createElement(c.l, null)),
                    (o = Object(O.d)("#Login_Enter2FAHelp"));
                  break;
                case E.EmailCode:
                  (n = e.GetEmailAuthCode()),
                    (r = Object(O.j)(
                      "#Login_SentSteamguard",
                      a.a.createElement(
                        "span",
                        { className: u.a.Highlight },
                        "@",
                        e.GetEmailDomain()
                      )
                    )),
                    (o = Object(O.d)("#Login_EnterSteamguard")),
                    (t = a.a.createElement(c.j, null));
              }
              return a.a.createElement(
                "div",
                { className: u.a.AuthenticationPanel },
                a.a.createElement(s.k, null, Object(O.d)("#Login_SigningIn")),
                a.a.createElement(
                  "div",
                  { className: u.a.SigningInAccountName },
                  e.GetUserName()
                ),
                a.a.createElement(s.b, null, r),
                a.a.createElement(
                  "div",
                  { className: u.a.AuthenticatorInputcontainer },
                  t,
                  a.a.createElement(
                    "form",
                    {
                      className: u.a.AccountPasswordForm,
                      onSubmit: this.OnSubmit
                    },
                    a.a.createElement(s.j, {
                      className: Object(l.a)(u.a.AccountName),
                      label: "Steam Guard Code",
                      type: "text",
                      autoComplete: "off",
                      focusOnMount: !0,
                      maxLength: 64,
                      value: n,
                      onChange: this.OnChangeAuthCode
                    }),
                    a.a.createElement(
                      s.o,
                      { disabled: this.props.manager.IsRequestInFlight() },
                      Object(O.d)("#Login_SteamguardSubmit").toLocaleUpperCase()
                    )
                  )
                ),
                a.a.createElement(
                  "a",
                  {
                    className: Object(l.a)(
                      u.a.NeedHelpLink,
                      i ? u.a.NeedHelpHighlight : null
                    ),
                    href: "http://help.steampowered.com/"
                  },
                  o
                )
              );
            }),
            Object(m.c)([i.a], e.prototype, "OnSubmit", null),
            Object(m.c)([i.a], e.prototype, "OnChangeAuthCode", null),
            (e = Object(m.c)([o.observer], e))
          );
        })(a.a.Component),
        D = n("ka0M"),
        j = n("lkRc");
      n.d(e, "a", function() {
        return x;
      });
      var R = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(m.d)(e, t),
            (e.prototype.OnLoginComplete = function(t) {
              window.location.href =
                this.props.redirectURL &&
                this.props.redirectURL !== Object(j.d)() + "login"
                  ? this.props.redirectURL
                  : j.c.COMMUNITY_BASE_URL;
            }),
            (e.prototype.render = function() {
              return j.i && j.i.logged_in
                ? (this.OnLoginComplete(), null)
                : a.a.createElement(
                    "div",
                    null,
                    a.a.createElement(w, {
                      baseURL: Object(j.d)(),
                      onLoginComplete: this.OnLoginComplete
                    })
                  );
            }),
            Object(m.c)([i.a], e.prototype, "OnLoginComplete", null),
            e
          );
        })(a.a.Component),
        M = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(m.d)(e, t),
            (e.prototype.render = function() {
              return a.a.createElement(
                D.a,
                {
                  onEscKeypress: this.props.closeModal,
                  bDisableBackgroundDismiss: !0
                },
                a.a.createElement(R, { redirectURL: this.props.redirectURL })
              );
            }),
            e
          );
        })(a.a.Component);
      function x() {
        Object(D.d)(
          a.a.createElement(M, {
            ownerWin: window,
            redirectURL: window.location.href
          }),
          window,
          Object(O.d)("#Login_SignIn")
        );
      }
    },
    DWPT: function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return s;
      });
      var l = n("mrSG"),
        p = n("q1tI"),
        r = n("bxiW"),
        o = n("TyAF"),
        i = n("qiKp"),
        u = n("exH9"),
        a = n("6+2x"),
        d = n.n(a),
        s = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.m_listeners = new i.c()),
              (t.m_bNoSpace = !1),
              (t.state = { x: void 0, y: void 0, hoverPositionReady: !1 }),
              t
            );
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.bindHover = function(t) {
              (this.m_elHover = t || void 0), this.positionHover();
            }),
            (t.prototype.componentDidMount = function() {
              this.m_listeners.AddEventListener(
                window,
                "blur",
                this.OnWindowBlur
              );
            }),
            (t.prototype.componentDidUpdate = function() {
              this.positionHover();
            }),
            (t.prototype.componentWillUnmount = function() {
              this.m_listeners.Unregister();
            }),
            (t.prototype.OnWindowBlur = function(t) {
              this.props.onWindowBlur && this.props.onWindowBlur(t);
            }),
            (t.prototype.render = function() {
              var t = this.props,
                e = (t.target, t.visibilityObserver),
                n = t.className,
                r = t.style,
                o = t.bEnablePointerEvents,
                i = (t.direction,
                t.nBodyAlignment,
                t.nBodyDistance,
                t.nAllowOffscreenPx,
                t.nMaxLateralMoveOnScreen,
                t.children),
                a = (t.onNoSpace,
                t.onWindowBlur,
                Object(l.f)(t, [
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
                c = !e || e.visible;
              return p.createElement(
                "div",
                Object(l.a)({}, a, {
                  className: Object(u.a)(
                    n,
                    d.a.HoverPosition,
                    c && this.state.hoverPositionReady && d.a.Ready,
                    this.m_bNoSpace && d.a.NoSpace,
                    o && d.a.EnablePointerEvents
                  ),
                  style: s,
                  ref: this.bindHover
                }),
                i
              );
            }),
            (t.prototype.positionHover = function() {
              var t,
                e = this.m_elHover,
                n = this.props.target;
              if (
                e &&
                n &&
                (!this.state.hoverPositionReady ||
                  !this.props.visibilityObserver ||
                  this.props.visibilityObserver.visible)
              ) {
                var r = n.ownerDocument.defaultView;
                if (r && !r.closed) {
                  var o = e.querySelector(".hover_arrow.left"),
                    i = e.querySelector(".hover_arrow.right"),
                    a = e.querySelector(".hover_arrow.top"),
                    s = e.querySelector(".hover_arrow.bottom"),
                    c = n.getBoundingClientRect(),
                    l = e.getBoundingClientRect(),
                    p =
                      "overlay" == this.props.direction ||
                      "overlay-center" == this.props.direction;
                  o && o.setAttribute("style", "display: none;"),
                    i && i.setAttribute("style", "display: none;"),
                    a && a.setAttribute("style", "display: none;"),
                    s && s.setAttribute("style", "display: none;");
                  var u = this.props.direction,
                    d = O(
                      u,
                      this.props.nBodyAlignment,
                      this.props.nBodyDistance,
                      c,
                      l,
                      r.innerWidth,
                      r.innerHeight
                    ),
                    m = d.nLeft,
                    h = d.nTop,
                    _ = d.nOverflow,
                    f = d.nLateralOverflow;
                  if (_ > this.props.nAllowOffscreenPx && !p) {
                    var b = (function(t) {
                        switch (t) {
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
                      v = O(
                        b,
                        this.props.nBodyAlignment,
                        this.props.nBodyDistance,
                        c,
                        l,
                        r.innerWidth,
                        r.innerHeight
                      ),
                      g = v.nLeft,
                      E = v.nTop,
                      y = v.nOverflow,
                      S = v.nLateralOverflow;
                    if (
                      (y < _ && ((u = b), (m = g), (h = E), (_ = y), (f = S)),
                      _ > this.props.nAllowOffscreenPx)
                    )
                      return (
                        e.setAttribute("style", "display: none;"),
                        (this.m_bNoSpace = !0),
                        void (this.props.onNoSpace && this.props.onNoSpace())
                      );
                  }
                  0 === this.props.nMaxLateralMoveOnScreen ||
                    p ||
                    ((h = (t = (function(t, e, n, r, o) {
                      var i = Math.max(e[0], e[1]);
                      void 0 !== t && (i = Math.min(t, i));
                      i = Math.max(0, i);
                      var a = e[0] > e[1] ? i : -i;
                      "left" === n || "right" === n ? (r += a) : (o += a);
                      return [r, o];
                    })(this.props.nMaxLateralMoveOnScreen, f, u, h, m))[0]),
                    (m = t[1]));
                  var C = null;
                  switch (u) {
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
                    h != this.state.y && this.setState({ y: h }),
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
              nMaxLateralMoveOnScreen: void 0
            }),
            Object(l.c)([r.a], t.prototype, "bindHover", null),
            Object(l.c)([r.a], t.prototype, "OnWindowBlur", null),
            (t = Object(l.c)([o.observer], t))
          );
        })(p.Component);
      function O(t, e, n, r, o, i, a) {
        var s,
          c,
          l,
          p,
          u = i,
          d = a;
        switch (t) {
          case "right":
            (s = r.right + n),
              (c = m(r.top, r.height, o.height, e)),
              (l = Math.max(0, s + o.width - u)),
              (p = [Math.max(0, 0 - c), Math.max(0, c + o.height - d)]);
            break;
          case "left":
            (s = r.left - n - o.width),
              (c = m(r.top, r.height, o.height, e)),
              (l = Math.max(0, 0 - s)),
              (p = [Math.max(0, 0 - c), Math.max(0, c + o.height - d)]);
            break;
          case "bottom":
            (s = m(r.left, r.width, o.width, e)),
              (c = r.bottom + n),
              (l = Math.max(0, c + o.height - d)),
              (p = [Math.max(0, 0 - s), Math.max(0, s + o.width - u)]);
            break;
          case "top":
            (s = m(r.left, r.width, o.width, e)),
              (c = r.top - n - o.height),
              (l = Math.max(0, 0 - c)),
              (p = [Math.max(0, 0 - s), Math.max(0, s + o.width - u)]);
            break;
          case "overlay":
            (s = r.left), (c = r.top), (p = [(l = 0), 0]);
            break;
          case "overlay-center":
            (s = r.left + 0.5 * r.width - 0.5 * o.width),
              (c = r.top + 0.5 * r.height - 0.5 * o.height),
              (p = [(l = 0), 0]);
        }
        return { nLeft: s, nTop: c, nOverflow: l, nLateralOverflow: p };
      }
      function m(t, e, n, r) {
        return Math.max(0, Math.min(1, r)) * (e - n) + t;
      }
    },
    Dq3P: function(t, e, n) {
      t.exports = {
        GotSteamDialog: "gameactions_GotSteamDialog_2Qusm",
        DownloadSteamUrl: "gameactions_DownloadSteamUrl_10lP7",
        GameName: "gameactions_GameName_1_uzw",
        Buttons: "gameactions_Buttons_2_Obm",
        Button: "gameactions_Button_2nVaF",
        LeftButton: "gameactions_LeftButton_3WYyu",
        AnswerText: "gameactions_AnswerText_hCqVo",
        ActionText: "gameactions_ActionText_2s5Ns",
        Footer: "gameactions_Footer_3OKQs",
        Logo: "gameactions_Logo_2AEA_"
      };
    },
    Gorr: function(t, e, n) {
      "use strict";
      var o = n("mrSG"),
        i = n("X3Ds"),
        r = n("wUwH"),
        a = n("TyAF"),
        l = n("q1tI"),
        s = n("i8i4"),
        c = n("DWPT"),
        p = n("bxiW"),
        u = n("y+6m"),
        d = n("2vnA"),
        m = n("TLQK"),
        h = (function(e) {
          function t(t) {
            return e.call(this, t) || this;
          }
          return (
            Object(o.d)(t, e),
            (t.prototype.render = function() {
              if (null == this.props.text)
                return l.createElement(l.Fragment, null, this.props.children);
              var t;
              if (
                ((t =
                  this.props.text instanceof Array
                    ? this.props.text
                        .map(function(t) {
                          return t ? t.toString() : "";
                        })
                        .filter(function(t) {
                          return 0 < t.length;
                        })
                        .join("\n")
                    : this.props.text.toString()),
                1 != l.Children.count(this.props.children))
              )
                return (
                  console.log(
                    "Error: CopyableText must be the parent of exactly one child:\n\tcopystyle=" +
                      this.props.style +
                      " copytext=" +
                      t
                  ),
                  l.createElement(l.Fragment, null, this.props.children)
                );
              var e = l.Children.only(this.props.children);
              return l.cloneElement(e, {
                "data-copystyle": this.props.style,
                "data-copytext": t
              });
            }),
            (t.defaultProps = { text: "" }),
            t
          );
        })(l.Component);
      var _ = n("rcgg"),
        f = n.n(_),
        b = n("exH9");
      var v = n("lkRc");
      n.d(e, "a", function() {
        return g;
      }),
        n.d(e, "b", function() {
          return y;
        }),
        n.d(e, "c", function() {
          return O;
        });
      var g = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(o.d)(e, t),
            (e.prototype.OnMouseEnter = function(t) {
              this.props.emoticonHoverStore
                .GetEmoticonHover(t.currentTarget.getAttribute("data-emoticon"))
                .Show(t, E);
            }),
            (e.prototype.OnMouseLeave = function(t) {
              this.props.emoticonHoverStore
                .GetEmoticonHover(t.currentTarget.getAttribute("data-emoticon"))
                .Hide(t);
            }),
            (e.prototype.render = function() {
              var t = ":" + this.props.emoticon + ":";
              return l.createElement(
                h,
                { text: t, style: "merge-adjacent" },
                l.createElement("img", {
                  src: r.a.GetEmoticonURL(
                    this.props.emoticon,
                    this.props.large
                  ),
                  alt: t,
                  className: Object(b.a)(
                    f.a.emoticon,
                    this.props.large ? f.a.large : void 0
                  ),
                  "data-emoticon": this.props.emoticon,
                  onMouseEnter: this.OnMouseEnter,
                  onMouseLeave: this.OnMouseLeave
                })
              );
            }),
            Object(o.c)([p.a], e.prototype, "OnMouseEnter", null),
            Object(o.c)([p.a], e.prototype, "OnMouseLeave", null),
            e
          );
        })(l.PureComponent),
        E = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(o.d)(e, t),
            (e.prototype.render = function() {
              return l.createElement(
                c.a,
                {
                  visibilityObserver: this.props.hover,
                  target: this.props.target,
                  style: { zIndex: 1700 }
                },
                l.createElement("div", {
                  className: "emoticon_hover_content",
                  dangerouslySetInnerHTML: {
                    __html: this.props.hover.emoticon_html
                  }
                }),
                l.createElement("div", {
                  className: "hover_arrow left emoticon_hover_arrow"
                }),
                l.createElement("div", {
                  className: "hover_arrow right emoticon_hover_arrow"
                })
              );
            }),
            (e = Object(o.c)([a.observer], e))
          );
        })(l.Component),
        y = (function(r) {
          function t(t) {
            var e = r.call(this, t) || this;
            (e.m_ScrollCoordinator = new i.e(40)),
              (e.state = { strSearchText: "" });
            var n = e.props.emoticonStore;
            return (
              n.is_initialized ||
                (n.UpdateEmoticonList(),
                (e.m_disposeEmoticonStore = Object(d.when)(
                  function() {
                    return n.is_initialized;
                  },
                  function() {
                    return e.forceUpdate();
                  }
                ))),
              e
            );
          }
          return (
            Object(o.d)(t, r),
            (t.prototype.componentWillUnmount = function() {
              this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
            }),
            (t.prototype.OnClick = function(t) {
              var e = t.currentTarget.getAttribute("data-emoticon");
              this.props.OnSelected(e, t.shiftKey),
                this.props.emoticonHoverStore.GetEmoticonHover(e).Hide(t);
            }),
            (t.prototype.OnSearchInput = function(t) {
              var e = t.currentTarget.value;
              this.setState({ strSearchText: e });
            }),
            (t.prototype.OnSubmit = function(t) {
              t.preventDefault(),
                this.m_strFirstEmoticon &&
                  this.props.OnSelected(this.m_strFirstEmoticon, !1);
            }),
            (t.prototype.RenderEmoticon = function(t, e) {
              var n = e.name;
              return (
                t && (n = t + e.name),
                l.createElement(A, {
                  key: n,
                  emoticon: e,
                  emoticonHoverStore: this.props.emoticonHoverStore,
                  onClick: this.OnClick,
                  coordinator: this.m_ScrollCoordinator
                })
              );
            }),
            (t.prototype.OnScrollRef = function(t) {
              this.m_ScrollCoordinator.SetParent(t);
            }),
            (t.prototype.OnScroll = function(t) {
              this.m_ScrollCoordinator.RecomputeVisibility();
            }),
            (t.prototype.componentDidUpdate = function() {
              this.m_ScrollCoordinator.InvalidateOffsetsAndRecompute();
            }),
            (t.prototype.getAvailableEffects = function() {
              var e = this;
              return this.props.roomEffectSettings
                ? this.props.emoticonStore.GetEffectList().filter(function(t) {
                    return e.props.roomEffectSettings[t.name];
                  })
                : [];
            }),
            (t.prototype.getAvailableStickers = function() {
              return this.props.emoticonStore.GetStickerList();
            }),
            (t.prototype.renderEffectButtons = function() {
              var e = this;
              if (!this.props.roomEffectSettings) return null;
              var t = this.getAvailableEffects();
              return 0 == t.length
                ? null
                : l.createElement(
                    l.Fragment,
                    null,
                    l.createElement(
                      "div",
                      { className: f.a.EffectHeading },
                      Object(m.d)("#EmoticonPicker_EffectHeading")
                    ),
                    l.createElement(
                      "div",
                      { style: { display: "flex", flexWrap: "wrap" } },
                      t.map(function(t) {
                        return l.createElement(C, {
                          key: t.name,
                          effect: t,
                          onEffectSelected: e.props.onRoomEffectSelected,
                          roomEffectSettings: e.props.roomEffectSettings
                        });
                      })
                    ),
                    l.createElement("div", { className: f.a.TopDivider })
                  );
            }),
            (t.prototype.renderStickerButtons = function() {
              var e = this,
                t = this.getAvailableStickers();
              return 0 == t.length
                ? null
                : l.createElement(
                    l.Fragment,
                    null,
                    l.createElement(
                      "div",
                      { className: f.a.EffectHeading },
                      Object(m.d)("#EmoticonPicker_StickerHeading")
                    ),
                    l.createElement(
                      "div",
                      null,
                      t.map(function(t) {
                        return l.createElement(S, {
                          key: t.name,
                          stickerName: t.name,
                          onStickerSelected: e.props.onStickerSelected
                        });
                      })
                    ),
                    l.createElement("div", { className: f.a.BottomDivider })
                  );
            }),
            (t.prototype.renderStickersAndEffectsButtons = function() {
              var t = this.props,
                e = t.bShowEffects,
                n = t.bShowStickers;
              return e || n
                ? l.createElement(
                    l.Fragment,
                    null,
                    this.renderEffectButtons(),
                    this.renderStickerButtons()
                  )
                : null;
            }),
            (t.prototype.render = function() {
              var t = this.props.emoticonStore,
                e = [],
                n = [],
                r = !1;
              if (t.is_initialized) {
                var o = this.state.strSearchText.trim();
                if (0 < o.length)
                  (r = !0),
                    (n = (e = t.SearchEmoticons(o, 50, !1)).map(
                      this.RenderEmoticon.bind(this, "")
                    )),
                    (this.m_strFirstEmoticon = e.length ? e[0].name : null);
                else if (this.props.strFlairGroupID)
                  (n = t
                    .GetFlairListByGroupID(this.props.strFlairGroupID)
                    .map(this.RenderEmoticon.bind(this, ""))),
                    (this.m_strFirstEmoticon = null);
                else {
                  var i = t.recent_emoticons,
                    a = t.emoticon_list,
                    s = Math.ceil(a.length / 9);
                  if (s <= 2) i = [];
                  else {
                    var c = Math.floor(s / 2);
                    9 < (i = i.slice(0, 9 * c)).length &&
                      i.length % 9 <= 2 &&
                      (i = i.slice(0, 9 * Math.floor(i.length / 9)));
                  }
                  i.length &&
                    (n = i.map(this.RenderEmoticon.bind(this, "recent_"))).push(
                      l.createElement(
                        "div",
                        {
                          key: "__recent_all_separator",
                          className: f.a.EmoticonSelector_Separator
                        },
                        l.createElement("div", {
                          className: f.a.EmoticonSelector_SeparatorBackground
                        })
                      )
                    ),
                    1e3 < a.length && (a = a.slice(0, 1e3)),
                    32 <= a.length && (r = !0),
                    n.push.apply(n, a.map(this.RenderEmoticon.bind(this, ""))),
                    (this.m_strFirstEmoticon = null);
                }
              }
              return l.createElement(
                u.c,
                null,
                l.createElement(
                  "div",
                  { className: f.a.EmoticonSelector },
                  l.createElement(
                    "div",
                    {
                      className: f.a.EmoticonSelector_Emoticons,
                      ref: this.OnScrollRef,
                      onScroll: this.OnScroll
                    },
                    this.renderStickersAndEffectsButtons(),
                    n
                  ),
                  r &&
                    l.createElement(
                      "div",
                      { className: f.a.EmoticonSelector_Controls },
                      l.createElement(
                        "form",
                        { onSubmit: this.OnSubmit },
                        l.createElement("input", {
                          type: "text",
                          placeholder: Object(m.d)("#Emoticon_Search"),
                          value: this.state.strSearchText,
                          onChange: this.OnSearchInput,
                          className: "ContextMenuAutoFocus friendSearchInput"
                        })
                      )
                    )
                )
              );
            }),
            Object(o.c)([p.a], t.prototype, "OnClick", null),
            Object(o.c)([p.a], t.prototype, "OnSearchInput", null),
            Object(o.c)([p.a], t.prototype, "OnSubmit", null),
            Object(o.c)([p.a], t.prototype, "OnScrollRef", null),
            Object(o.c)([p.a], t.prototype, "OnScroll", null),
            t
          );
        })(l.Component),
        S = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                imageURL: (function(t, e) {
                  return t + "economy/sticker/" + e;
                })(v.c.COMMUNITY_CDN_URL, t.props.stickerName)
              }),
              t
            );
          }
          return (
            Object(o.d)(t, e),
            (t.prototype.render = function() {
              var t = this;
              return l.createElement(
                "button",
                {
                  className: f.a.StickerButton,
                  type: "button",
                  onClick: function() {
                    return t.props.onStickerSelected(t.props.stickerName);
                  },
                  title: Object(m.d)("#ChatEntryButton_SendSticker")
                },
                l.createElement("img", {
                  style: { width: "100%" },
                  src: this.state.imageURL
                })
              );
            }),
            t
          );
        })(l.Component),
        C = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(o.d)(e, t),
            (e.prototype.render = function() {
              var t = this.props.effect.name,
                e = this.props.roomEffectSettings[t],
                n = this.props.onEffectSelected;
              return l.createElement(
                "button",
                {
                  key: t,
                  className: f.a.RoomEffectButton,
                  type: "button",
                  onClick: function() {
                    return n(t);
                  },
                  title: Object(m.d)(e.buttonToken)
                },
                e.renderEffectIcon(),
                l.createElement(
                  "span",
                  { className: f.a.CountBadge },
                  this.props.effect.name.startsWith("lny2020_")
                    ? "∞"
                    : this.props.effect.count
                )
              );
            }),
            e
          );
        })(l.Component);
      function O() {
        return l.createElement(
          "div",
          { className: f.a.NewEmoticonIndicator },
          l.createElement("div", { className: f.a.NewEmoticonCircle })
        );
      }
      var A = (function(n) {
        function t(t) {
          var e = n.call(this, t) || this;
          return (e.state = { visible: !1 }), e;
        }
        return (
          Object(o.d)(t, n),
          (t.prototype.SetVisible = function(t) {
            t && !this.state.visible && this.setState({ visible: !0 });
          }),
          (t.prototype.componentDidMount = function() {
            this.props.coordinator.RegisterChild(
              s.findDOMNode(this),
              this.SetVisible
            );
          }),
          (t.prototype.componentWillUnmount = function() {
            this.props.coordinator.UnregisterChild(s.findDOMNode(this));
          }),
          (t.prototype.render = function() {
            var t = this.props.emoticon,
              e = [f.a.EmoticonSelector_Item],
              n = !1;
            return (
              !t.last_used &&
                t.time_received &&
                (e.push(f.a.EmoticonSelector_Item_New), (n = !0)),
              l.createElement(
                "div",
                {
                  className: b.a.apply(void 0, e),
                  "data-emoticon": t.name,
                  onClick: this.props.onClick
                },
                this.state.visible &&
                  l.createElement(g, {
                    emoticonHoverStore: this.props.emoticonHoverStore,
                    emoticon: t.name,
                    large: !0
                  }),
                n && l.createElement(O, null)
              )
            );
          }),
          Object(o.c)([p.a], t.prototype, "SetVisible", null),
          t
        );
      })(l.Component);
    },
    IS34: function(t, e, n) {
      t.exports =
        n.p +
        "../../../images/applications/store/icon_expand_large.png?v=valveisgoodatcaching";
    },
    IzPI: function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return o;
      }),
        n.d(e, "b", function() {
          return i;
        }),
        n.d(e, "d", function() {
          return a;
        }),
        n.d(e, "c", function() {
          return s;
        });
      var r = n("lkRc");
      function o(t) {
        var e = new RegExp(
            "^(steam://openurl(_external)?/)?((f|ht)tps?://)?([^@/?#]*@)?([^/#?]+)",
            "im"
          ),
          n = t.match(e);
        return n && 5 < n.length ? n[6].toString() : t;
      }
      function i(t) {
        var e = o(t);
        return e.startsWith("www.") && (e = e.slice(4)), e;
      }
      function a(t) {
        return (
          "http:" !== t.substr(0, 5) ||
            1 != r.c.EUNIVERSE ||
            ("http:" ==
              (t = (t = (t = (t = (t = (t = (t = (t = t.replace(
                /http:\/\/media.steampowered.com\//g,
                r.c.MEDIA_CDN_URL
              )).replace(
                /http:\/\/cdn.akamai.steamstatic.com\//g,
                r.c.MEDIA_CDN_URL
              )).replace(
                /http:\/\/cdn.edgecast.steamstatic.com\//g,
                r.c.MEDIA_CDN_URL
              )).replace(
                /http:\/\/cdn.dota2.com\//g,
                r.c.MEDIA_CDN_URL
              )).replace(
                /http:\/\/storefront.steampowered.com\/v\/gfx\//g,
                r.c.MEDIA_CDN_URL + "steam/"
              )).replace(
                /http:\/\/cdn.steamcommunity.com\//g,
                r.c.COMMUNITY_CDN_URL
              )).replace(
                /http:\/\/community.akamai.steamstatic.com\//g,
                r.c.COMMUNITY_CDN_URL
              )).replace(
                /http:\/\/community.edgecast.steamstatic.com\//g,
                r.c.COMMUNITY_CDN_URL
              )).substr(0, 5) &&
              (t = "https:" + t.substr(5))),
          t
        );
      }
      function s(t) {
        return r.c.SNR && 0 < r.c.SNR.length
          ? t + (0 <= t.indexOf("?") ? "&" : "?") + "snr=" + r.c.SNR
          : t;
      }
    },
    LY6W: function(t, e, n) {
      t.exports = {
        TextToolTip: "tooltip_TextToolTip_2FxbH",
        ToolTipCustom: "tooltip_ToolTipCustom_3XGRk",
        ToolTipTitle: "tooltip_ToolTipTitle_1LhVf",
        Center: "tooltip_Center_2ZDqE",
        ToolTipInsetContent: "tooltip_ToolTipInsetContent_i4LuY"
      };
    },
    N6Aq: function(t, e, n) {
      t.exports = {
        LoginDialog: "login_LoginDialog_2Hj3a",
        AccountPasswordPanel: "login_AccountPasswordPanel_2LBKJ",
        LoginPanelBackground: "login_LoginPanelBackground_3Xp1H",
        LoginPanelContent: "login_LoginPanelContent_UB5zI",
        ErrorMessage: "login_ErrorMessage_3oDNF",
        AccountPasswordForm: "login_AccountPasswordForm_2Mp7X",
        AuthenticationPanel: "login_AuthenticationPanel_ApHu0",
        AccountNameLabel: "login_AccountNameLabel_1WzDF",
        MedName: "login_MedName_3V1uw",
        LargeName: "login_LargeName_142CN",
        PasswordDots: "login_PasswordDots_1Xbz8",
        MedPass: "login_MedPass_2pUx4",
        LargePass: "login_LargePass_3268n",
        AccountFieldHeader: "login_AccountFieldHeader_2bLG3",
        PasswordFieldHeader: "login_PasswordFieldHeader_a3a45",
        NeedHelpLink: "login_NeedHelpLink_1Mi1l",
        NeedHelpHighlight: "login_NeedHelpHighlight_2RCec",
        CreateAccountLink: "login_CreateAccountLink_x0Czn",
        LoginCreateSeperator: "login_LoginCreateSeperator__TANI",
        RefreshCaptchaText: "login_RefreshCaptchaText_1_C2P",
        SigningInAccountName: "login_SigningInAccountName_2Tg37",
        SigninTitle: "login_SigninTitle_xJ2mR",
        RememberMeCheck: "login_RememberMeCheck_1caeW",
        SteamUpsellContainer: "login_SteamUpsellContainer_2Ge6a",
        SteamUpsell: "login_SteamUpsell_3r5LW",
        CaptchaContainer: "login_CaptchaContainer_1waDj",
        CaptchaBlock: "login_CaptchaBlock_1ltax",
        CaptchaImageAndInput: "login_CaptchaImageAndInput_3HUT2",
        CaptchaImageBox: "login_CaptchaImageBox_dzf2f",
        CaptchaImage: "login_CaptchaImage_3I-c1",
        CaptchaInput: "login_CaptchaInput_FnbII",
        AuthenticatorInputcontainer: "login_AuthenticatorInputcontainer_2_2v6",
        Highlight: "login_Highlight_1tsys",
        LoginComplete: "login_LoginComplete_2aP2X"
      };
    },
    "Om+o": function(t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEFERTQyQ0E1Q0EyMTFFNTgwMzNBQUE0RTk3QjgyMDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEFERTQyQ0I1Q0EyMTFFNTgwMzNBQUE0RTk3QjgyMDkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowQURFNDJDODVDQTIxMUU1ODAzM0FBQTRFOTdCODIwOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowQURFNDJDOTVDQTIxMUU1ODAzM0FBQTRFOTdCODIwOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Prxq/1gAAAGJSURBVHjaYvz//z/DQAImhgEG9HTASiDeiiEKigI64Pj/CLAJiBlhcvSwXPc/JjgLxIIgeUYaJ0JBIL4NxMJY5B4BcTitHXAeiA3wyL+kZSJcQMByEEimVbxn/ScM8mmVCK2IsHwhTD2104AwNHFx4VFzAYgNaVUQ7SFg+Q8gdqZVSTifiEQHsvwdvpKQGYiDyIj3HCLiPRubXnSBBVDFE2iV6PA5IAlN0woiLJcG4h8ELD+PzwwYwxiH5sNALIzHgNsELH8DxEKEHCAGxB/xGPIEiNWwaF5PRNDrEQpFEHGZCIO+ArEjksZKIvTEE5OGQEQyEP/7TxwAJThDItRNIjYRwxgGQPz2P3XAEVKyMHJRLAvEu4FYnYLC6D3UnK/ktAkfA7EeEB+kwAEOpFiOr024mIygjyWn9sQn2UOC5VPJrb4JKcglwvLDlLQfiFHkDcR/cVj+CIjZaO0AfNlUidIWFCmKZYD4GpLlgdRowpHaJGMH4v1AfBGIM6nRiqF1v2Dw944BAgwAsWqnpJAiSOIAAAAASUVORK5CYII=";
    },
    QYE3: function(t, e, n) {
      "use strict";
      n.d(e, "b", function() {
        return c;
      }),
        n.d(e, "a", function() {
          return l;
        });
      var r = n("mrSG"),
        o = n("q1tI"),
        i = n("bxiW"),
        a = n("IzPI"),
        s = n("lkRc"),
        c = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.hoverRef = o.createRef()), t;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.OnHover = function(t) {
              "clan" != this.props.type &&
                (this.props.fnHoverState && this.props.fnHoverState(!0),
                window.GameHover &&
                  window.GameHover(
                    this.props.fnGetIDOverride
                      ? this.props.fnGetIDOverride()
                      : this.hoverRef.current,
                    t,
                    "global_hover",
                    { type: this.props.type, id: this.props.id, v6: 1 }
                  ));
            }),
            (t.prototype.OnHoverEnd = function(t) {
              "clan" != this.props.type &&
                (this.props.fnHoverState &&
                  t.relatedTarget &&
                  this.props.fnHoverState(!1),
                window.HideGameHover &&
                  window.HideGameHover(
                    this.props.fnGetIDOverride
                      ? this.props.fnGetIDOverride()
                      : this.hoverRef.current,
                    t,
                    "global_hover"
                  ));
            }),
            (t.prototype.render = function() {
              return o.createElement(
                "div",
                {
                  ref: this.hoverRef,
                  className: this.props.hoverClassName,
                  onMouseEnter: this.OnHover,
                  onMouseLeave: this.OnHoverEnd,
                  onFocus: this.OnHover,
                  onBlur: this.OnHoverEnd
                },
                this.props.children
              );
            }),
            Object(r.c)([i.a], t.prototype, "OnHover", null),
            Object(r.c)([i.a], t.prototype, "OnHoverEnd", null),
            t
          );
        })(o.Component),
        l = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(e, t),
            (e.prototype.render = function() {
              return o.createElement(
                c,
                Object(r.a)({}, this.props),
                o.createElement(
                  "a",
                  {
                    className: this.props.className,
                    href: Object(a.c)(
                      (s.c.IN_CLIENT ? "steam://openurl/" : "") +
                        this.props.strURL
                    ),
                    target: s.c.IN_CLIENT ? void 0 : "_blank",
                    rel: "noopener noreferrer"
                  },
                  this.props.children
                )
              );
            }),
            e
          );
        })(o.Component);
    },
    "R+8l": function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return a;
      });
      var c = n("mrSG"),
        r = n("vDqi"),
        l = n.n(r),
        o = n("2vnA"),
        p = n("lkRc"),
        u = n("oVVc"),
        i = n("9f3B"),
        d = (function() {
          function t(t) {
            (this.bundleid = t.bundleid),
              (this.packageids = t.packageids),
              (this.enabled = t.enabled),
              (this.name = t.name),
              (this.finalized = t.finalized),
              (this.must_purchase_as_set = t.must_purchase_as_set),
              (this.publisherid = t.publisherid),
              (this.header_image_url = t.header_image_url),
              (this.initial_price = t.initial_price),
              (this.final_price = t.final_price),
              (this.formatted_orig_price = t.formatted_orig_price),
              (this.formatted_final_price = t.formatted_final_price),
              (this.discount_percent = t.discount_percent),
              (this.bundle_base_discount = t.bundle_base_discount),
              (this.available_windows = t.available_windows),
              (this.available_mac = t.available_mac),
              (this.available_linux = t.available_linux),
              (this.support_vrhmd = t.support_vrhmd),
              (this.support_vrhmd_only = t.support_vrhmd_only);
          }
          return (
            (t.prototype.GetHeaderImageDimension = function() {
              return { width: 292, height: 136 };
            }),
            t
          );
        })(),
        a = new ((function() {
          function t() {
            (this.m_mapBundleInfo = new Map()),
              (this.m_mapMissingBundles = new Map()),
              (this.m_bLoadedFromConfig = !1);
          }
          return (
            (t.prototype.LazyInit = function() {
              var e = this;
              if (!this.m_bLoadedFromConfig) {
                var t = Object(p.f)("bundleinfo", "application_config");
                this.ValidateStoreDefault(t) &&
                  (("dev" != p.c.WEB_UNIVERSE && "beta" != p.c.WEB_UNIVERSE) ||
                    console.log(
                      "DEV_DEBUG: CBundleInfoStore loading bundles payload: " +
                        t.length
                    ),
                  Object(o.runInAction)(function() {
                    return t.forEach(function(t) {
                      return e.m_mapBundleInfo.set(
                        Number(t.bundleid),
                        new d(t)
                      );
                    });
                  }));
                var n = Object(p.f)("bundleunknown", "application_config");
                Object(i.a)(n) &&
                  n.forEach(function(t) {
                    return e.m_mapMissingBundles.set(t, !0);
                  }),
                  (this.m_bLoadedFromConfig = !0);
              }
            }),
            (t.prototype.ValidateStoreDefault = function(t) {
              var e = t;
              return (
                !!(
                  e &&
                  Array.isArray(e) &&
                  0 < e.length &&
                  "object" == typeof e[0]
                ) &&
                ("number" == typeof e[0].bundleid &&
                  "string" == typeof e[0].name)
              );
            }),
            (t.prototype.GetBundleInfo = function(t) {
              return this.LazyInit(), this.m_mapBundleInfo.get(t);
            }),
            (t.prototype.LoadBundleInfo = function(s) {
              return Object(c.b)(this, void 0, void 0, function() {
                var e,
                  n,
                  r,
                  o,
                  i,
                  a = this;
                return Object(c.e)(this, function(t) {
                  switch (t.label) {
                    case 0:
                      return (
                        this.LazyInit(),
                        (e = []),
                        s.forEach(function(t) {
                          a.m_mapBundleInfo.has(t) ||
                            a.m_mapMissingBundles.has(t) ||
                            e.push(t);
                        }),
                        e.length
                          ? (e.sort(),
                            [
                              4,
                              l.a.get(
                                p.c.STORE_BASE_URL +
                                  "actions/ajaxresolvebundles",
                                {
                                  params: {
                                    bundleids: e.join(","),
                                    cc: p.c.COUNTRY || "US",
                                    l: p.c.LANGUAGE,
                                    origin: self.origin
                                  }
                                }
                              )
                            ])
                          : [3, 2]
                      );
                    case 1:
                      if (((n = t.sent()), (r = n && n.data)))
                        for (o = 0; o < r.length; o++)
                          (i = r[o]),
                            u.b.LoadPackageInfo(i.packageids),
                            this.m_mapBundleInfo.set(i.bundleid, new d(i));
                      t.label = 2;
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            Object(c.c)([o.observable], t.prototype, "m_mapBundleInfo", void 0),
            t
          );
        })())();
      window.g_BundleInfoStore = a;
    },
    "S+Ty": function(t, e, n) {
      t.exports =
        n.p +
        "../../../images/applications/store/icon_platform_linux.png?v=valveisgoodatcaching";
    },
    UWWC: function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return i;
      }),
        n.d(e, "b", function() {
          return a;
        });
      var p = n("mrSG"),
        r = n("wUwH"),
        u = n("lkRc"),
        o = n("vDqi"),
        d = n.n(o),
        i = (function(t) {
          function e() {
            return t.call(this) || this;
          }
          return (
            Object(p.d)(e, t),
            (e.prototype.BInitialized = function() {
              return !0;
            }),
            (e.prototype.GetServerTime = function() {
              return u.c.PAGE_TIMESTAMP + Math.floor(performance.now() / 1e3);
            }),
            (e.prototype.RequestEmoticonListInternal = function() {
              return Object(p.b)(this, void 0, void 0, function() {
                var e, n, r, o, i, a, s, c, l;
                return Object(p.e)(this, function(t) {
                  switch (t.label) {
                    case 0:
                      (e = []), (t.label = 1);
                    case 1:
                      return (
                        t.trys.push([1, 3, , 4]),
                        [
                          4,
                          d.a.get(u.c.CHAT_BASE_URL + "actions/EmoticonData", {
                            withCredentials: !0
                          })
                        ]
                      );
                    case 2:
                      if ((n = t.sent()).data.emoticons)
                        for (r = 0, o = n.data.emoticons; r < o.length; r++)
                          (i = o[r]),
                            (a = i.name).startsWith("^")
                              ? e.push({ name: a })
                              : ((s = { name: a.substr(1, a.length - 2) }),
                                (c = s.name.toLowerCase()) != s.name &&
                                  (s.name_normalized = c),
                                i.time_last_used &&
                                  (s.last_used = i.time_last_used),
                                i.use_count && (s.use_count = i.use_count),
                                i.time_received &&
                                  (s.time_received = i.time_received),
                                e.push(s));
                      return [3, 4];
                    case 3:
                      return (
                        (l = t.sent()),
                        console.error("error loading emoticon list"),
                        console.error(l),
                        [3, 4]
                      );
                    case 4:
                      return this.OnEmoticonListReceived(e), [2];
                  }
                });
              });
            }),
            e
          );
        })(r.a),
        a = new i();
    },
    UxvL: function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return s;
      });
      var r = n("mrSG"),
        o = n("q1tI"),
        i = n("bxiW"),
        a = n("r64O"),
        s = (function(n) {
          function t(t) {
            var e = n.call(this, t) || this;
            return (e.m_refImage = o.createRef()), (e.state = { nImage: 0 }), e;
          }
          return (
            Object(r.d)(t, n),
            (t.prototype.componentDidUpdate = function(t) {
              JSON.stringify(this.props.rgSources) !=
                JSON.stringify(t.rgSources) && this.setState({ nImage: 0 });
            }),
            Object.defineProperty(t.prototype, "src", {
              get: function() {
                return (
                  Object(a.a)(
                    this.state.nImage < this.props.rgSources.length,
                    "Image counter beyond source length"
                  ),
                  this.props.rgSources[this.state.nImage]
                );
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, "imgRef", {
              get: function() {
                return this.m_refImage;
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.OnImageError = function(t) {
              this.props.onIncrementalError &&
                this.props.onIncrementalError(
                  t,
                  this.props.rgSources[this.state.nImage],
                  this.state.nImage
                );
              var e = this.state.nImage + 1;
              e >= this.props.rgSources.length &&
                this.props.onError &&
                this.props.onError(t),
                e < this.props.rgSources.length && this.setState({ nImage: e });
            }),
            (t.prototype.render = function() {
              var t = this.props,
                e = (t.src,
                t.rgSources,
                t.onIncrementalError,
                t.onError,
                Object(r.f)(t, [
                  "src",
                  "rgSources",
                  "onIncrementalError",
                  "onError"
                ])),
                n = this.src;
              return (
                (n && 0 != n.length) ||
                  (console.warn(
                    "MultiSourceImage created with no image src",
                    this.props,
                    this.state.nImage
                  ),
                  (n =
                    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
                o.createElement(
                  "img",
                  Object(r.a)({ src: n, ref: this.m_refImage }, e, {
                    onError: this.OnImageError
                  })
                )
              );
            }),
            Object(r.c)([i.a], t.prototype, "OnImageError", null),
            t
          );
        })(o.Component);
    },
    XsxU: function(t, e, n) {
      t.exports = {
        OtherEventsCtn: "eventrow_OtherEventsCtn_9H6b5",
        OtherEvents_MainImageCtn: "eventrow_OtherEvents_MainImageCtn_2qyLP",
        OtherEvents: "eventrow_OtherEvents_16DzR",
        OtherEvents_EventCtn: "eventrow_OtherEvents_EventCtn_1MwNf",
        OtherEvents_MainImage: "eventrow_OtherEvents_MainImage_3_wKb",
        OtherEvents_BGImage: "eventrow_OtherEvents_BGImage_2pPj9",
        OtherEvents_ContentCtn: "eventrow_OtherEvents_ContentCtn_22jEp",
        OtherEvents_TextCtn: "eventrow_OtherEvents_TextCtn_3-EtN",
        OtherEvents_TextTitle: "eventrow_OtherEvents_TextTitle_2jc1D",
        OtherEvents_SubTitle: "eventrow_OtherEvents_SubTitle_1Swox",
        HoversEnabled: "eventrow_HoversEnabled_3o6M8",
        PartnerEventRowCapsule_MainImage:
          "eventrow_PartnerEventRowCapsule_MainImage_bC2Zk",
        EventSummaryContainer: "eventrow_EventSummaryContainer_2GYp4",
        EventSummaryText: "eventrow_EventSummaryText_ENbI1",
        EventSummaryType: "eventrow_EventSummaryType_11JXz",
        HorizontalEvent: "eventrow_HorizontalEvent_1ruRS",
        HorizontalSummary: "eventrow_HorizontalSummary_2bTWa",
        HorizontalTitle: "eventrow_HorizontalTitle_B9-wl",
        HorizontalDescriptionCtn: "eventrow_HorizontalDescriptionCtn_3CQtW",
        HorizontalDescription: "eventrow_HorizontalDescription_2hPZw",
        AppCapsuleImage: "eventrow_AppCapsuleImage_3OzV3",
        AppCapsuleCtn: "eventrow_AppCapsuleCtn_16au-",
        AppCapsuleImageHover: "eventrow_AppCapsuleImageHover_IeC3X",
        AppCapsulePrice: "eventrow_AppCapsulePrice_2-l2M"
      };
    },
    Z9dU: function(t, e, n) {
      t.exports = {
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
    ZeAL: function(t, e, n) {
      "use strict";
      n.d(e, "d", function() {
        return a;
      }),
        n.d(e, "e", function() {
          return s;
        }),
        n.d(e, "b", function() {
          return l;
        }),
        n.d(e, "c", function() {
          return p;
        }),
        n.d(e, "a", function() {
          return d;
        });
      var h = n("mrSG"),
        _ = n("q1tI"),
        r = n("nrKv"),
        o = n("mgoM"),
        i = n("lkRc"),
        a = [
          "h1",
          "h2",
          "h3",
          "b",
          "u",
          "hr",
          "i",
          "img",
          "strike",
          "spoiler",
          "noparse",
          "url",
          "list",
          "olist",
          "quote",
          "pullquote",
          "code",
          "table",
          "tr",
          "td",
          "th",
          "previewyoutube",
          "looping_media",
          "roomeffect",
          "sticker",
          "price",
          "pricesavings"
        ],
        s = [
          "h1",
          "h2",
          "h3",
          "b",
          "u",
          "i",
          "strike",
          "spoiler",
          "noparse",
          "url"
        ],
        c = ["img", "previewyoutube", "looping_media", "roomeffect"];
      a.filter(function(t) {
        return -1 == c.indexOf(t);
      });
      function l(t, e, n) {
        void 0 === e && (e = a), void 0 === n && (n = " ");
        var r = "\\[\\/?(\\*|" + e.join("|") + ").*(\\=[^\\]]*)?\\]";
        return t.replace(new RegExp(r, "gi"), n);
      }
      function p(t, e, n) {
        void 0 === e && (e = a), void 0 === n && (n = "");
        var r = "\\[\\/?(?:" + e.join("|") + ")*?.*?\\]";
        return t.replace(new RegExp(r, "gi"), n);
      }
      function u(t, e, n) {
        if ((void 0 === n && (n = 0), 2 == e.type)) {
          var r = e.text.indexOf("="),
            o = e.text.indexOf(" ");
          if ((-1 != o && (-1 == r || o < r) && (r = o), 0 < r)) {
            e.tag = e.text.substr(0, r).toLocaleLowerCase();
            var i = e.text.substr(r);
            e.args = (function(t) {
              if (!t || t.length < 1) return {};
              var e = {},
                n = "",
                r = "",
                o = 0,
                i = 0;
              "=" == t[0] && (o = 2);
              var a = !1;
              for (i++; i < t.length; i++) {
                var s = t[i],
                  c = !0,
                  l = !1;
                switch (o) {
                  case 0:
                    if ("=" == s) return {};
                    if (" " == s) continue;
                    o = 1;
                    break;
                  case 1:
                    ("=" != s && " " != s) ||
                      a ||
                      (" " == s ? (l = !(o = 0)) : (o = 2), (c = !1));
                    break;
                  case 2:
                    " " == s
                      ? ((o = 0), (l = !(c = !1)))
                      : '"' == s
                      ? (c = !(o = 4))
                      : (o = 3);
                    break;
                  case 3:
                  case 4:
                    ((" " == s && 4 != o && !a) ||
                      ('"' == s && 4 == o && !a)) &&
                      ((o = 0), (l = !(c = !1)));
                }
                if (c)
                  if ("\\" != s || a)
                    if (((a = !1), 1 == o)) n += s;
                    else {
                      if (3 != o && 4 != o)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + o
                        );
                      r += s;
                    }
                  else a = !0;
                l && ((e[n] = r), (r = n = ""));
              }
              0 != o && (e[n] = r);
              return e;
            })(i);
          } else (e.args = {}), (e.tag = e.text.toLocaleLowerCase());
        }
        t.push(e);
        var a = new m();
        return (a.type = n), a;
      }
      var d = (function() {
          function t(t, e, n) {
            void 0 === e &&
              (e = function() {
                return new r.b();
              }),
              (this.m_dictComponents = void 0),
              (this.m_dictComponents = t),
              (this.m_fnAccumulatorFactory = e),
              (this.m_renderingLanguage = n || Object(o.e)(i.c.LANGUAGE));
          }
          return (
            (t.prototype.UpdateOverrideLanguage = function(t) {
              this.m_renderingLanguage = t || Object(o.e)(i.c.LANGUAGE);
            }),
            (t.prototype.ParseBBCode = function(t, e) {
              var n = (function(t) {
                for (
                  var e = [], n = new m(), r = !1, o = !1, i = 0;
                  i < t.length;
                  i++
                ) {
                  var a = t[i];
                  switch (n.type) {
                    case 0:
                      "[" == a
                        ? ((n.type = 2), (o = !0))
                        : ((n.type = 1), "\\" == a ? (r = !r) : (n.text += a));
                      break;
                    case 2:
                    case 3:
                      o =
                        "/" == a && o
                          ? ((n.type = 3), (n.text = ""), !1)
                          : "[" != a || r
                          ? "]" != a || r
                            ? "\\" == a
                              ? ((n.text += a), (r = !r), !1)
                              : ((n.text += a), (r = !1))
                            : (o && n.ConvertMalformedNodeToText(),
                              (n = u(e, n)),
                              !1)
                          : (n.ConvertMalformedNodeToText(),
                            (n = u(e, n, 2)),
                            !0);
                      break;
                    case 1:
                      "[" != a || r
                        ? (r =
                            "\\" == a
                              ? (r && (n.text += a), !r)
                              : ((n.text += a), !1))
                        : ((n = u(e, n, 2)), (o = !0));
                  }
                }
                return (
                  0 != n.type &&
                    ((2 != n.type && 3 != n.type) ||
                      n.ConvertMalformedNodeToText(),
                    e.push(n)),
                  e
                );
              })(t);
              return this.Parse_BuildReactComponents(n, e);
            }),
            (t.prototype.Parse_BuildReactComponents = function(t, c) {
              var a = this,
                l = this.m_fnAccumulatorFactory(void 0),
                p = [],
                s = function() {
                  return p.length < 1 ? void 0 : p[p.length - 1];
                },
                u = this.m_dictComponents,
                d = this.m_renderingLanguage,
                m = function(t, e, n) {
                  if (t && t.node.tag === e.text && u.get(t.node.tag)) {
                    var r = u.get(t.node.tag),
                      o = p.map(function(t) {
                        return t.node.tag;
                      }),
                      i = {
                        context: c,
                        parentTags: o,
                        tagname: t.node.tag,
                        args: t.node.args,
                        language: d,
                        key: t.node.tag + "_" + n
                      },
                      a = _.createElement.apply(
                        _,
                        Object(h.g)([r.Constructor, i], l.GetElements())
                      );
                    (l = t.accumulator).AppendNode(a);
                  } else if (t) {
                    var s = t.accumulator;
                    s.AppendText("[" + t.node.text + "]", !1),
                      l.GetElements().forEach(function(t) {
                        return s.AppendNode(t);
                      }),
                      s.AppendText("[/" + e.text + "]", !1),
                      (l = s);
                  }
                };
              t.forEach(function(t, e) {
                if (1 == t.type) l.AppendText(t.text, 0 == p.length);
                else if (2 != t.type || u.get(t.tag)) {
                  if (2 == t.type) {
                    var n = s();
                    if (void 0 !== n) {
                      var r = u.get(n.node.tag);
                      r &&
                        r.autocloses &&
                        t.tag === n.node.tag &&
                        m(p.pop(), n.node, e);
                    }
                    p.push({ accumulator: l, node: t }),
                      (l = a.m_fnAccumulatorFactory(t));
                  } else if (3 == t.type) {
                    for (
                      ;
                      s() &&
                      s().node.tag !== t.text &&
                      u.get(s().node.tag) &&
                      u.get(s().node.tag).autocloses;

                    ) {
                      var o = p.pop();
                      m(o, o.node, e);
                    }
                    var i = p.pop();
                    m(i, t, e);
                  }
                } else l.AppendText("[" + t.text + "]", 0 == p.length);
              });
              for (
                var e = function() {
                  var t = p.pop(),
                    e = t.accumulator;
                  e.AppendText("[" + t.node.text + "]", !1),
                    l.GetElements().forEach(function(t) {
                      return e.AppendNode(t);
                    }),
                    (l = e);
                };
                0 < p.length;

              )
                e();
              var n = l.GetElements();
              return 1 < n.length
                ? _.createElement.apply(_, Object(h.g)([_.Fragment, null], n))
                : 1 == n.length
                ? n[0]
                : null;
            }),
            t
          );
        })(),
        m = (function() {
          function t() {
            (this.type = 0), (this.text = "");
          }
          return (
            (t.prototype.ConvertMalformedNodeToText = function() {
              3 == this.type
                ? (this.text = "[/" + this.text)
                : 2 == this.type && (this.text = "[" + this.text),
                (this.type = 1);
            }),
            t
          );
        })();
    },
    ZlHF: function(t, e, n) {
      t.exports = {
        SaleHeaderContainer: "partnersaledisplay_SaleHeaderContainer_W4mvn",
        SaleSection: "partnersaledisplay_SaleSection_1cOoC",
        CarouselDisplay: "partnersaledisplay_CarouselDisplay_mntHD",
        SaleViewAll: "partnersaledisplay_SaleViewAll_1bsBz",
        SaleSectionLoginPrompt:
          "partnersaledisplay_SaleSectionLoginPrompt_2-dSB",
        LoginButton: "partnersaledisplay_LoginButton_3h6sH",
        SaleOverlayCtn: "partnersaledisplay_SaleOverlayCtn_3GTIc",
        SaleOverlay: "partnersaledisplay_SaleOverlay_1sZo8",
        AppSummaryWidgetCtn: "partnersaledisplay_AppSummaryWidgetCtn_2H8Bm",
        SaleBroadcastCtn: "partnersaledisplay_SaleBroadcastCtn_1SFMh",
        SaleOuterContainer: "partnersaledisplay_SaleOuterContainer_150kd",
        CustomStyle_together: "partnersaledisplay_CustomStyle_together_1lAyg",
        SaleBackground: "partnersaledisplay_SaleBackground_2N8Se",
        SaleSectionSubtext: "partnersaledisplay_SaleSectionSubtext_17Fnl",
        ShowContentsButton: "partnersaledisplay_ShowContentsButton_2EjTW",
        vr_supported: "partnersaledisplay_vr_supported_1BDSJ",
        vr_required: "partnersaledisplay_vr_required_1P__h",
        preview_placeholder_section:
          "partnersaledisplay_preview_placeholder_section_3QLsj",
        in_carousel: "partnersaledisplay_in_carousel_JfB2A",
        fullscreen_bg: "partnersaledisplay_fullscreen_bg_j2ykT",
        fullscreen_bg__video: "partnersaledisplay_fullscreen_bg__video_FXgrB",
        SalePageBroadcastContextHover:
          "partnersaledisplay_SalePageBroadcastContextHover_hbVdl",
        AlbumCoverImage: "partnersaledisplay_AlbumCoverImage_2JfUA",
        AlbumTitle: "partnersaledisplay_AlbumTitle_keaMw"
      };
    },
    a5LV: function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return p;
      });
      var r = n("mrSG"),
        a = n("lkRc"),
        o = n("2vnA"),
        s = n("q1tI"),
        c = n("sUmc"),
        i = (function() {
          function t() {
            this.m_mapEmoticonHovers = new Map();
          }
          return (
            (t.prototype.GetEmoticonHover = function(t) {
              var e = this.m_mapEmoticonHovers.get(t);
              return (
                e || ((e = new l(t)), this.m_mapEmoticonHovers.set(t, e)), e
              );
            }),
            t
          );
        })(),
        l = (function() {
          function i(t) {
            (this.m_bVisible = !1),
              (this.m_strEmoticonHoverHTML = void 0),
              (this.m_bLoadingData = !1),
              (this.m_strEmoticonName = t);
          }
          return (
            Object.defineProperty(i.prototype, "visible", {
              get: function() {
                return this.m_bVisible && !!this.m_strEmoticonHoverHTML;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(i.prototype, "emoticon_html", {
              get: function() {
                return this.m_strEmoticonHoverHTML;
              },
              enumerable: !0,
              configurable: !0
            }),
            (i.prototype.Show = function(t, e) {
              var n = this;
              this.EnsureEmoticonLoaded();
              var r = t.currentTarget,
                o = s.createElement(e, { hover: this, target: r });
              i.sm_embeddedElements
                .ShowElementDelayed(r.ownerDocument, 50, o, this)
                .then(function() {
                  n.m_bVisible = !0;
                });
            }),
            (i.prototype.Hide = function(t) {
              (this.m_bVisible = !1),
                i.sm_embeddedElements.HideElement(
                  t.currentTarget.ownerDocument,
                  this,
                  500
                );
            }),
            (i.prototype.EnsureEmoticonLoaded = function() {
              var e = this;
              if (
                void 0 === this.m_strEmoticonHoverHTML &&
                !this.m_bLoadingData
              ) {
                this.m_bLoadingData = !0;
                var t = "OnLoadEmoticon_" + this.m_strEmoticonName,
                  n =
                    a.c.COMMUNITY_CDN_URL +
                    "economy/emoticonhover/" +
                    encodeURIComponent(this.m_strEmoticonName) +
                    "/jsonp.js?callback=" +
                    encodeURIComponent(t) +
                    "&l=" +
                    encodeURIComponent(a.c.LANGUAGE),
                  r = void 0,
                  o = void 0,
                  i = function() {
                    (e.m_bLoadingData = !1),
                      delete window[t],
                      r && window.clearTimeout(r),
                      o && o.remove();
                  };
                (window[t] = function(t) {
                  (e.m_strEmoticonHoverHTML = t), (e.m_bVisible = !0), i();
                }),
                  (r = window.setTimeout(i, 5e3)),
                  ((o = window.document.createElement("script")).type =
                    "text/javascript"),
                  (o.async = !0),
                  (o.src = n),
                  (o.onerror = i),
                  window.document.head.appendChild(o);
              }
            }),
            (i.sm_embeddedElements = new c.a("CEmoticonHoverContainer")),
            Object(r.c)([o.observable], i.prototype, "m_bVisible", void 0),
            Object(r.c)(
              [o.observable],
              i.prototype,
              "m_strEmoticonHoverHTML",
              void 0
            ),
            i
          );
        })(),
        p = new i();
    },
    bDQf: function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return i;
      });
      n("mrSG");
      var r = n("vDqi"),
        o = n.n(r);
      function i(t) {
        if (o.a.isCancel(t))
          return { strErrorMsg: "Action Cancelled:" + t, errorCode: 52 };
        if (void 0 !== t.response && "object" == typeof t.response.data) {
          if ("msg" in t.response.data)
            return {
              strErrorMsg: t.response.data.msg,
              errorCode: t.response.data.success
            };
          if ("err_msg" in t.response.data)
            return {
              strErrorMsg: t.response.data.err_msg,
              errorCode: t.response.data.success
            };
          if ("message" in t.response.data)
            return {
              strErrorMsg: t.response.data.message,
              errorCode: t.response.data.success
            };
        } else {
          if (void 0 !== t.success && void 0 !== t.msg)
            return { strErrorMsg: t.msg, errorCode: t.success };
          if (void 0 !== t.success && void 0 !== t.message)
            return { strErrorMsg: t.message, errorCode: t.success };
          if (void 0 !== t.success && void 0 !== t.err_msg)
            return { strErrorMsg: t.err_msg, errorCode: t.success };
          console.error("GetMsgAndErrorCodeFromResponse: ", t);
        }
        return "status" in t
          ? {
              strErrorMsg: "Unknown Error: " + t + "\nStatus Code:" + t.status,
              errorCode: 2
            }
          : { strErrorMsg: "Unknown Error: " + t, errorCode: 2 };
      }
    },
    bS9Q: function(t, e, n) {
      "use strict";
      function r(t, e) {
        return t < e ? -1 : e < t ? 1 : 0;
      }
      function o(t) {
        return t
          ? DOMParser
            ? new DOMParser().parseFromString(t, "text/html").documentElement
                .textContent
            : t
          : "";
      }
      function i(t, e) {
        return void 0 === e && (e = ""), t.replace(/\bhttps?:\/\/\S+/gi, e);
      }
      function a(t, e, n) {
        void 0 === n && (n = !0);
        var r = t.trim();
        if (e < (r = r.replace(n ? /\s+/g : /[ \t]+/g, " ")).length) {
          var o = (r = r.substring(0, e)).replace(/^(.*([.!?])) .*$/, "$1"),
            i = o.length;
          (i < 0.6 * e || i == e) && (o = r.replace(/ [^ ]*$/, "...")),
            (r = n ? o.replace(/(\r\n|\n|\r)/gm, "") : o);
        }
        return r;
      }
      function s(t) {
        var e,
          n = 0;
        if (0 === t.length) return n;
        for (e = 0; e < t.length; e++)
          (n = (n << 5) - n + t.charCodeAt(e)), (n |= 0);
        return n;
      }
      n.d(e, "e", function() {
        return r;
      }),
        n.d(e, "b", function() {
          return o;
        }),
        n.d(e, "c", function() {
          return i;
        }),
        n.d(e, "d", function() {
          return a;
        }),
        n.d(e, "a", function() {
          return s;
        });
    },
    dLk7: function(t, e, n) {
      t.exports = {
        StoreSaleWidgetContainer:
          "broadcastwidgets_StoreSaleWidgetContainer_2RL6D",
        Bundle: "broadcastwidgets_Bundle_3wMcs",
        WishList: "broadcastwidgets_WishList_3mTSE",
        Action: "broadcastwidgets_Action_2Xpw9",
        StoreSaleWidgetContainer_mini:
          "broadcastwidgets_StoreSaleWidgetContainer_mini_nacWp",
        StoreSaleWidgetImage: "broadcastwidgets_StoreSaleWidgetImage_2T_Na",
        StoreSaleWidgetImageCtn:
          "broadcastwidgets_StoreSaleWidgetImageCtn_1JUFq",
        StoreSaleWidgetImage_mini:
          "broadcastwidgets_StoreSaleWidgetImage_mini_yvW2h",
        StoreSaleImage: "broadcastwidgets_StoreSaleImage_2LocI",
        StoreSaleImage_mini: "broadcastwidgets_StoreSaleImage_mini_1zSsm",
        StoreSaleVideo: "broadcastwidgets_StoreSaleVideo_2D7lp",
        StoreSaleWidgetTitle: "broadcastwidgets_StoreSaleWidgetTitle_38YoU",
        StoreSaleWidgetRelease: "broadcastwidgets_StoreSaleWidgetRelease_3yCCs",
        StoreSaleWidgetTags: "broadcastwidgets_StoreSaleWidgetTags_26_Kk",
        StoreSaleWidgetScreenshots:
          "broadcastwidgets_StoreSaleWidgetScreenshots_3mnba",
        AppTag: "broadcastwidgets_AppTag_2pNqf",
        StoreSaleWidgetShortDesc:
          "broadcastwidgets_StoreSaleWidgetShortDesc_2by8B",
        StoreSaleWidgetShortDesc_mini:
          "broadcastwidgets_StoreSaleWidgetShortDesc_mini_2ZkfU",
        StoreSaleWidgetLeft: "broadcastwidgets_StoreSaleWidgetLeft_20n87",
        StoreSaleWidgetRight: "broadcastwidgets_StoreSaleWidgetRight_1MzBO",
        TitleCtn: "broadcastwidgets_TitleCtn_X6LtM",
        CapsulePlatform: "broadcastwidgets_CapsulePlatform_1YzDv",
        StoreActionWidgetContainer:
          "broadcastwidgets_StoreActionWidgetContainer_2MF6Y",
        StoreSalePriceActionWidgetContainer:
          "broadcastwidgets_StoreSalePriceActionWidgetContainer_2teqY",
        StoreSaleDiscountedPriceCtn:
          "broadcastwidgets_StoreSaleDiscountedPriceCtn_38zNE",
        StoreSalePriceBox: "broadcastwidgets_StoreSalePriceBox_2A_NW",
        StoreSaleDiscountBox: "broadcastwidgets_StoreSaleDiscountBox_3uiyX",
        StoreOrignalPrice: "broadcastwidgets_StoreOrignalPrice_1fpRU",
        Discounted: "broadcastwidgets_Discounted_2ZIIo",
        StoreSalePriceButton: "broadcastwidgets_StoreSalePriceButton_3lydG",
        CapsuleContainer: "broadcastwidgets_CapsuleContainer_1gET8",
        InCarouselWidget: "broadcastwidgets_InCarouselWidget_17Zd1",
        Muted: "broadcastwidgets_Muted_2ksIf",
        CapsuleBottomBar: "broadcastwidgets_CapsuleBottomBar_2ygf4",
        PlayNowButton: "broadcastwidgets_PlayNowButton_3r-3W",
        AddToLibraryButton: "broadcastwidgets_AddToLibraryButton_3XooY",
        CapsuleImage: "broadcastwidgets_CapsuleImage_XI8fY",
        CapsuleTitle: "broadcastwidgets_CapsuleTitle_2eIiB",
        Banner: "broadcastwidgets_Banner_3ikQa",
        Blue: "broadcastwidgets_Blue_3hfTG",
        LiveIcon: "broadcastwidgets_LiveIcon_1iKjC",
        CapsuleMenuButton: "broadcastwidgets_CapsuleMenuButton_2hdaQ",
        BundleContentsCtn: "broadcastwidgets_BundleContentsCtn_1p28h",
        BundleContentItem: "broadcastwidgets_BundleContentItem_1VQWA",
        ExpandPackageButtonCtn: "broadcastwidgets_ExpandPackageButtonCtn_L2H1H",
        ExpandedPackageItems: "broadcastwidgets_ExpandedPackageItems_3VdMU",
        BundleLargeCtn: "broadcastwidgets_BundleLargeCtn_HLc0N",
        BundleImage: "broadcastwidgets_BundleImage_3-Ipm",
        BundleContentPreview: "broadcastwidgets_BundleContentPreview_2rrsB",
        BundleBuyButtons: "broadcastwidgets_BundleBuyButtons_WjidC",
        BundleBuyButton: "broadcastwidgets_BundleBuyButton_3X6VJ",
        BundleDiscounts: "broadcastwidgets_BundleDiscounts_1GW_x",
        BaseDiscount: "broadcastwidgets_BaseDiscount_3jF2s",
        PreviewCtn: "broadcastwidgets_PreviewCtn_2N7Pd",
        PreviewItem: "broadcastwidgets_PreviewItem_3MhjY",
        PreviewImg: "broadcastwidgets_PreviewImg_2e4Ct",
        BundleShowButton: "broadcastwidgets_BundleShowButton_3F9DK",
        ShowContentsButton: "broadcastwidgets_ShowContentsButton_1cu3o",
        bordered_live_stream_icon:
          "broadcastwidgets_bordered_live_stream_icon_2dA9j"
      };
    },
    ee7K: function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return o;
      });
      var p = n("mrSG"),
        l = n("2vnA"),
        u = n("lkRc"),
        r = n("vDqi"),
        d = n.n(r),
        m = n("+d9t"),
        h = n("bDQf"),
        a = "unUserdataVersion",
        o = new ((function() {
          function t() {
            (this.m_rgWishList = new Array()),
              (this.m_rgOwnedPackages = []),
              (this.m_rgOwnedApps = []),
              (this.m_excludedTags = []),
              (this.m_excludedContentDescriptors = []),
              (this.m_rgRecommendedApps = new Array()),
              (this.m_rgIgnoredApps = new Map()),
              (this.m_rgCreatorsFollowed = new Array()),
              (this.m_rgCreatorsIgnored = new Array()),
              (this.m_bIsLoaded = !1);
          }
          return (
            (t.prototype.BIsLoaded = function() {
              return this.m_bIsLoaded;
            }),
            (t.prototype.GetCreatorsFollowed = function() {
              return this.m_rgCreatorsFollowed;
            }),
            (t.prototype.GetCreatorsIgnored = function() {
              return this.m_rgCreatorsIgnored;
            }),
            (t.prototype.BIsFollowingCreator = function(e) {
              return (
                0 <=
                this.m_rgCreatorsFollowed.findIndex(function(t) {
                  return t == e.GetAccountID();
                })
              );
            }),
            (t.prototype.BIsIgnoringCreator = function(e) {
              return (
                0 <=
                this.m_rgCreatorsIgnored.findIndex(function(t) {
                  return t == e.GetAccountID();
                })
              );
            }),
            (t.prototype.GetExcludedContentDescriptor = function() {
              return this.m_excludedContentDescriptors;
            }),
            (t.prototype.BExcludesTag = function(e) {
              return (
                !!e &&
                Boolean(
                  this.m_excludedTags.filter(function(t) {
                    return (
                      -1 !==
                      e
                        .map(function(t) {
                          return t.tagid;
                        })
                        .indexOf(t)
                    );
                  }).length
                )
              );
            }),
            (t.prototype.GetExcludedTagsSortedByID = function() {
              return this.m_excludedTags.slice().sort();
            }),
            (t.prototype.BExcludesContentDescriptor = function(e) {
              return (
                !!e &&
                Boolean(
                  this.m_excludedContentDescriptors.filter(function(t) {
                    return -1 !== e.indexOf(t);
                  }).length
                )
              );
            }),
            (t.prototype.BIsGameWishlisted = function(e) {
              return this.m_rgWishList.some(function(t) {
                return Number(t) === Number(e);
              });
            }),
            (t.prototype.BIsGameRecommended = function(e) {
              return this.m_rgRecommendedApps.some(function(t) {
                return Number(t) === Number(e);
              });
            }),
            (t.prototype.BIsGameIgnored = function(t) {
              return this.m_rgIgnoredApps && this.m_rgIgnoredApps.has(t);
            }),
            (t.prototype.BOwnsApp = function(e) {
              return this.m_rgOwnedApps.some(function(t) {
                return t === e;
              });
            }),
            (t.prototype.BOwnsPackage = function(e) {
              return this.m_rgOwnedPackages.some(function(t) {
                return t === e;
              });
            }),
            (t.prototype.HintLoad = function() {
              return Object(p.b)(this, void 0, void 0, function() {
                return Object(p.e)(this, function(t) {
                  return (
                    this.m_promise || (this.m_promise = this.InternalLoad()),
                    [2, this.m_promise]
                  );
                });
              });
            }),
            (t.prototype.InternalLoad = function() {
              return Object(p.b)(this, void 0, void 0, function() {
                var e,
                  n,
                  r,
                  o,
                  i = this;
                return Object(p.e)(this, function(t) {
                  switch (t.label) {
                    case 0:
                      return (
                        (e = sessionStorage.getItem(a) || "0"),
                        (n = { v: e, id: "" + u.i.accountid }),
                        (r = u.c.STORE_BASE_URL + "dynamicstore/userdata/"),
                        [4, d.a.get(r, { params: n, withCredentials: !0 })]
                      );
                    case 1:
                      return (
                        (o = t.sent()) &&
                          200 == o.status &&
                          Object(l.runInAction)(function() {
                            if (
                              ((i.m_bIsLoaded = !0),
                              (i.m_rgCreatorsFollowed.length = 0),
                              (i.m_rgCreatorsIgnored.length = 0),
                              (i.m_rgWishList.length = 0),
                              o.data.rgCreatorsFollowed &&
                                o.data.rgCreatorsFollowed.forEach(function(t) {
                                  return i.m_rgCreatorsFollowed.push(t);
                                }),
                              o.data.rgCreatorsIgnored &&
                                o.data.rgCreatorsIgnored.forEach(function(t) {
                                  return i.m_rgCreatorsIgnored.push(t);
                                }),
                              o.data.rgWishlist &&
                                o.data.rgWishlist.forEach(function(t) {
                                  return i.m_rgWishList.push(t);
                                }),
                              o.data.rgOwnedApps &&
                                (i.m_rgOwnedApps = o.data.rgOwnedApps),
                              o.data.rgOwnedPackages &&
                                (i.m_rgOwnedPackages = o.data.rgOwnedPackages),
                              o.data.rgIgnoredApps)
                            ) {
                              var t = o.data.rgIgnoredApps;
                              for (var e in t)
                                i.m_rgIgnoredApps.set(Number(e), Number(t[e]));
                            }
                            o.data.rgExcludedTags &&
                              (i.m_excludedTags = o.data.rgExcludedTags.map(
                                function(t) {
                                  return t.tagid;
                                }
                              )),
                              o.data.rgExcludedContentDescriptorIDs &&
                                (i.m_excludedContentDescriptors =
                                  o.data.rgExcludedContentDescriptorIDs),
                              o.data.rgRecommendedApps &&
                                (i.m_rgRecommendedApps =
                                  o.data.rgRecommendedApps);
                          }),
                        [2, this]
                      );
                  }
                });
              });
            }),
            (t.prototype.UpdateFollowOrIgnoreCurator = function(a, s, c) {
              return Object(p.b)(this, void 0, void 0, function() {
                var e, n, r, o, i;
                return Object(p.e)(this, function(t) {
                  switch (t.label) {
                    case 0:
                      return (
                        (e =
                          u.c.STORE_BASE_URL +
                          "curators/" +
                          (s ? "ajaxfollow/" : "ajaxignore/")),
                        (n = new FormData()).append(
                          "authwgtoken",
                          u.i.authwgtoken
                        ),
                        n.append("clanid", "" + a.GetAccountID()),
                        n.append("sessionid", u.c.SESSIONID),
                        n.append(s ? "follow" : "ignore", c ? "1" : "0"),
                        [4, d.a.post(e, n, { withCredentials: !0 })]
                      );
                    case 1:
                      return (
                        (r = t.sent()) &&
                          200 == r.status &&
                          (this.InvalidateCache(),
                          (o = s
                            ? this.m_rgCreatorsFollowed
                            : this.m_rgCreatorsIgnored),
                          c
                            ? o.push(a.GetAccountID())
                            : 0 <=
                                (i = o.findIndex(function(t) {
                                  return t == a.GetAccountID();
                                })) && o.splice(i, 1)),
                        [2, r.data]
                      );
                  }
                });
              });
            }),
            (t.prototype.UpdateAppIgnore = function(a, s, c) {
              return (
                void 0 === c && (c = 0),
                Object(p.b)(this, void 0, void 0, function() {
                  var e,
                    n,
                    r,
                    o,
                    i = this;
                  return Object(p.e)(this, function(t) {
                    switch (t.label) {
                      case 0:
                        (e =
                          u.c.STORE_BASE_URL +
                          "recommended/ignorerecommendation"),
                          (n = new FormData()).append(
                            "sessionid",
                            u.c.SESSIONID
                          ),
                          n.append("appid", "" + a),
                          n.append("remove", s ? "0" : "1"),
                          n.append("snr", u.c.SNR),
                          n.append("ignore_reason", "" + c),
                          (t.label = 1);
                      case 1:
                        return (
                          t.trys.push([1, 3, , 4]),
                          [4, d.a.post(e, n, { withCredentials: !0 })]
                        );
                      case 2:
                        return (
                          (r = t.sent()) &&
                            200 == r.status &&
                            Object(l.runInAction)(function() {
                              i.InvalidateCache(),
                                s
                                  ? i.m_rgIgnoredApps.set(a, c)
                                  : i.m_rgIgnoredApps.delete(a);
                            }),
                          [2, r.data]
                        );
                      case 3:
                        return (
                          (o = t.sent()),
                          console.error("UpdateAppIgnore", Object(h.a)(o)),
                          [3, 4]
                        );
                      case 4:
                        return [2, { success: 2 }];
                    }
                  });
                })
              );
            }),
            (t.prototype.UpdateGameWishlist = function(i, a) {
              return Object(p.b)(this, void 0, void 0, function() {
                var e, n, r, o;
                return Object(p.e)(this, function(t) {
                  switch (t.label) {
                    case 0:
                      return (
                        (e =
                          u.c.STORE_BASE_URL +
                          "api/" +
                          (a ? "addtowishlist" : "removefromwishlist")),
                        (n = new FormData()).append("appid", "" + i),
                        n.append("sessionid", u.c.SESSIONID),
                        [4, d.a.post(e, n, { withCredentials: !0 })]
                      );
                    case 1:
                      return (
                        ((r = t.sent()).data.success =
                          1 == r.data.success ? 1 : 2),
                        1 == r.data.success &&
                          (this.InvalidateCache(),
                          a
                            ? this.m_rgWishList.push(i)
                            : 0 <=
                                (o = this.m_rgWishList.findIndex(function(t) {
                                  return t == i;
                                })) && this.m_rgWishList.splice(o, 1)),
                        [2, r.data]
                      );
                  }
                });
              });
            }),
            (t.prototype.AddToCart = function(i, a, s, c, l) {
              return Object(p.b)(this, void 0, void 0, function() {
                var e, n, r, o;
                return Object(p.e)(this, function(t) {
                  switch (t.label) {
                    case 0:
                      (e = new FormData()).append("action", "add_to_cart"),
                        l
                          ? e.append("bundleid", l.toString())
                          : e.append("subid", "" + a),
                        (n = u.i.authwgtoken)
                          ? e.append("authwgtoken", n)
                          : e.append("sessionid", u.c.SESSIONID),
                        e.append("quantity", "1"),
                        (t.label = 1);
                    case 1:
                      return (
                        t.trys.push([1, 3, , 4]),
                        [4, d.a.post(s, e, { withCredentials: !0 })]
                      );
                    case 2:
                      return (
                        t.sent(),
                        (r = u.c.IN_CLIENT ? "steam://url/StoreCart" : c),
                        i.preventDefault(),
                        this.InvalidateCache(),
                        Object(m.b)(window, r),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (o = t.sent()),
                        console.log("HandleOnAddToCart"),
                        console.log(o),
                        [3, 4]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.AddLicenseForFreeGame = function(i) {
              return Object(p.b)(this, void 0, void 0, function() {
                var e, n, r, o;
                return Object(p.e)(this, function(t) {
                  switch (t.label) {
                    case 0:
                      if (this.BOwnsApp(i)) return [2, 1];
                      t.label = 1;
                    case 1:
                      return (
                        t.trys.push([1, 3, , 4]),
                        (e = new FormData()).append("sessionid", u.c.SESSIONID),
                        e.append("authwgtoken", u.i.authwgtoken),
                        e.append("appid", "" + i),
                        e.append("cc", u.c.COUNTRY),
                        (n =
                          u.c.STORE_BASE_URL +
                          "actions/addappformastersubscription"),
                        [4, d.a.post(n, e, { withCredentials: !0 })]
                      );
                    case 2:
                      return (r = t.sent()).data.success && 1 === r.data.success
                        ? (this.m_rgOwnedApps.push(i), [3, 4])
                        : [2, r.data.success ? r.data.success : 2];
                    case 3:
                      return (
                        (o = t.sent()),
                        console.log(
                          "AddLicense request failed:",
                          Object(h.a)(o)
                        ),
                        [2, 2]
                      );
                    case 4:
                      return [2, 1];
                  }
                });
              });
            }),
            (t.prototype.InvalidateCache = function() {
              sessionStorage.setItem(
                a,
                (
                  Number.parseInt(sessionStorage.getItem(a) || "0") + 1
                ).toString()
              );
            }),
            Object(p.c)([l.observable], t.prototype, "m_rgWishList", void 0),
            Object(p.c)(
              [l.observable],
              t.prototype,
              "m_rgOwnedPackages",
              void 0
            ),
            Object(p.c)([l.observable], t.prototype, "m_rgOwnedApps", void 0),
            Object(p.c)([l.observable], t.prototype, "m_excludedTags", void 0),
            Object(p.c)(
              [l.observable],
              t.prototype,
              "m_excludedContentDescriptors",
              void 0
            ),
            Object(p.c)(
              [l.observable],
              t.prototype,
              "m_rgRecommendedApps",
              void 0
            ),
            Object(p.c)([l.observable], t.prototype, "m_rgIgnoredApps", void 0),
            Object(p.c)(
              [l.observable],
              t.prototype,
              "m_rgCreatorsFollowed",
              void 0
            ),
            Object(p.c)(
              [l.observable],
              t.prototype,
              "m_rgCreatorsIgnored",
              void 0
            ),
            Object(p.c)([l.action], t.prototype, "UpdateAppIgnore", null),
            t
          );
        })())();
    },
    f6Ic: function(t, e, n) {
      "use strict";
      var _ = n("mrSG"),
        r = n("TyAF"),
        f = n("q1tI"),
        o = n("vv6K"),
        b = n.n(o),
        i = n("vEGm"),
        v = n.n(i),
        a = n("IS34"),
        s = n.n(a),
        c = n("S+Ty"),
        l = n.n(c),
        p = n("6x+F"),
        u = n.n(p),
        d = n("8HkJ"),
        m = n.n(d),
        h = n("ZeAL"),
        g = n("TtDX"),
        E = n("5eAM"),
        y = n("R+8l"),
        S = n("Mgs7"),
        C = n("Jqb/"),
        O = n("ka0M"),
        A = n("6Y59"),
        I = n("exH9"),
        w = n("TLQK"),
        N = n("lkRc"),
        T = n("qD+2"),
        L = n("Dq3P"),
        B = n.n(L);
      function D(e) {
        return Object(_.b)(this, void 0, void 0, function() {
          return Object(_.e)(this, function(t) {
            return (
              N.c.IN_CLIENT
                ? (console.log("Running game " + e + " locally."),
                  (window.location.href = "steam://run/" + e))
                : (console.log(
                    "Cannot identify local client. Prompting user to launch " +
                      e +
                      "."
                  ),
                  (function(o) {
                    Object(_.b)(this, void 0, void 0, function() {
                      var e, n, r;
                      return Object(_.e)(this, function(t) {
                        switch (t.label) {
                          case 0:
                            return [4, T.a.EnsureAppInfoForAppIDs([o])];
                          case 1:
                            return (
                              t.sent(),
                              (e = T.a.GetAppInfo(o)),
                              (n = e && e.name),
                              console.log("prompting for", n),
                              (r = N.c.STORE_BASE_URL + "about/"),
                              Object(O.b)(
                                f.createElement(j, {
                                  appid: o,
                                  strGameName: n,
                                  strDownloadSteamUrl: r
                                }),
                                window
                              ),
                              [2]
                            );
                        }
                      });
                    });
                  })(e)),
              [2]
            );
          });
        });
      }
      var j = function(t) {
          var e = function() {
            return t.closeModal && t.closeModal();
          };
          return f.createElement(
            C.g,
            { onEscKeypress: e, className: B.a.GotSteamDialog },
            f.createElement(
              S.e,
              null,
              f.createElement(
                S.i,
                null,
                " ",
                Object(w.d)("#GotSteam_Title"),
                " "
              ),
              f.createElement(
                S.a,
                null,
                f.createElement(
                  S.b,
                  null,
                  Object(w.j)(
                    "#GotSteam_PromptWithDownloadLink",
                    f.createElement(
                      "a",
                      {
                        href: t.strDownloadSteamUrl,
                        className: B.a.DownloadSteamUrl
                      },
                      Object(w.d)("#GotSteam_DownloadLinkText")
                    ),
                    f.createElement(
                      "span",
                      { className: B.a.GameName },
                      t.strGameName
                    )
                  )
                ),
                f.createElement(
                  "div",
                  { className: B.a.Buttons },
                  f.createElement(
                    "a",
                    {
                      href: "steam://run/" + t.appid,
                      onClick: e,
                      className: Object(I.a)(B.a.Button, B.a.LeftButton)
                    },
                    f.createElement(
                      "div",
                      { className: B.a.AnswerText },
                      " ",
                      Object(w.d)("#GotSteam_Yes"),
                      " "
                    ),
                    f.createElement(
                      "div",
                      { className: B.a.ActionText },
                      " ",
                      Object(w.d)("#GotSteam_Yes_Play"),
                      " "
                    )
                  ),
                  f.createElement(
                    "a",
                    {
                      href: t.strDownloadSteamUrl,
                      onClick: e,
                      className: B.a.Button
                    },
                    f.createElement(
                      "div",
                      { className: B.a.AnswerText },
                      " ",
                      Object(w.d)("#GotSteam_No"),
                      " "
                    ),
                    f.createElement(
                      "div",
                      { className: B.a.ActionText },
                      " ",
                      Object(w.d)("#GotSteam_No_Download"),
                      " "
                    )
                  )
                ),
                f.createElement(
                  "div",
                  { className: B.a.Footer },
                  f.createElement(A.z, { className: B.a.Logo }),
                  Object(w.d)("#GotSteam_Blurb")
                )
              )
            )
          );
        },
        R = n("oVVc"),
        M = n("ir+G"),
        x = n("nWbB"),
        k = n("ee7K"),
        G = n("y+6m"),
        U = n("fpVW"),
        P = n.n(U),
        H = n("BFsE"),
        F = n("UxvL"),
        W = n("0OaU"),
        z = n("+d9t"),
        V = n("bDQf"),
        Z = n("bxiW"),
        Y = n("bS9Q"),
        Q = n("IzPI"),
        J = n("Om+o"),
        q = n.n(J),
        X = n("XsxU"),
        K = n("ZlHF"),
        $ = n("dLk7"),
        tt = n.n($),
        et = n("QYE3");
      n.d(e, "j", function() {
        return nt;
      }),
        n.d(e, "c", function() {
          return rt;
        }),
        n.d(e, "e", function() {
          return it;
        }),
        n.d(e, "i", function() {
          return st;
        }),
        n.d(e, "d", function() {
          return ct;
        }),
        n.d(e, "h", function() {
          return lt;
        }),
        n.d(e, "b", function() {
          return ut;
        }),
        n.d(e, "f", function() {
          return mt;
        }),
        n.d(e, "k", function() {
          return ht;
        }),
        n.d(e, "a", function() {
          return _t;
        }),
        n.d(e, "g", function() {
          return bt;
        });
      var nt = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = { isHovered: !1 }),
              (t.m_myInstance = ++n.instance_count),
              t
            );
          }
          var n;
          return (
            Object(_.d)(t, e),
            ((n = t).prototype.componentDidMount = function() {
              M.a.EnsureStoreCapsuleInfoLoaded(this.props.appid);
            }),
            (t.prototype.OnCapsuleOver = function() {
              this.setState({ isHovered: !0 });
            }),
            (t.prototype.OnCapsuleOut = function() {
              this.setState({ isHovered: !1 });
            }),
            (t.prototype.render = function() {
              var e = this,
                t = M.a.GetStoreCapsuleInfo(this.props.appid).GetAppStoreData(),
                n = tt.a.StoreSaleWidgetContainer,
                r = tt.a.StoreSaleWidgetShortDesc;
              return t && t.title
                ? f.createElement(
                    "div",
                    { className: n },
                    f.createElement(
                      "div",
                      {
                        className: Object(I.a)(
                          tt.a.Actions,
                          tt.a.StoreSaleWidgetLeft
                        )
                      },
                      f.createElement(
                        "a",
                        {
                          href: Object(Q.c)(t.capsule_link),
                          target: N.c.IN_CLIENT ? void 0 : "_blank"
                        },
                        f.createElement(
                          "div",
                          {
                            className: tt.a.StoreSaleWidgetImage,
                            onMouseOver: this.OnCapsuleOver,
                            onMouseOut: this.OnCapsuleOut,
                            onFocus: this.OnCapsuleOver,
                            onBlur: this.OnCapsuleOut
                          },
                          f.createElement(
                            "div",
                            {
                              style: { position: "relative" },
                              className: tt.a.StoreSaleWidgetImageCtn
                            },
                            f.createElement(F.a, {
                              className: tt.a.StoreSaleImage,
                              rgSources: [t.main_capsule, t.capsule]
                            }),
                            this.state.isHovered &&
                              t.microtrailer &&
                              f.createElement(
                                "video",
                                {
                                  className: tt.a.StoreSaleVideo,
                                  loop: !0,
                                  muted: !0,
                                  autoPlay: !0
                                },
                                f.createElement("source", {
                                  src: t.microtrailer,
                                  type: "video/webm"
                                }),
                                !N.c.IN_CLIENT &&
                                  f.createElement("source", {
                                    src: t.microtrailer_mp4,
                                    type: "video/mp4"
                                  })
                              )
                          )
                        )
                      )
                    ),
                    f.createElement(
                      "div",
                      { className: tt.a.StoreSaleWidgetRight },
                      f.createElement(
                        "div",
                        { className: tt.a.TitleCtn },
                        f.createElement(
                          "div",
                          { className: tt.a.Actions },
                          f.createElement(
                            "a",
                            {
                              href: Object(Q.c)(t.capsule_link),
                              target: N.c.IN_CLIENT ? void 0 : "_blank"
                            },
                            f.createElement(
                              "div",
                              { className: tt.a.StoreSaleWidgetTitle },
                              t.title
                            )
                          )
                        ),
                        f.createElement(ft, { item: t })
                      ),
                      f.createElement(
                        "div",
                        { className: tt.a.StoreSaleWidgetRelease },
                        t.release
                      ),
                      f.createElement(
                        "div",
                        { className: r },
                        Object(h.c)(Object(Y.b)(t.short_desc))
                      ),
                      f.createElement(
                        "div",
                        { className: tt.a.StoreSaleWidgetTags },
                        t.tags
                          ? t.tags.map(function(t) {
                              return f.createElement(
                                "div",
                                {
                                  key: "tag_" + e.m_myInstance + "_" + t.tagid,
                                  className: tt.a.AppTag
                                },
                                t.name
                              );
                            })
                          : void 0
                      ),
                      f.createElement(ot, { appInfo: t })
                    )
                  )
                : f.createElement("div", {
                    className: tt.a.StoreSaleWidgetEmptyContainer
                  });
            }),
            (t.instance_count = 0),
            Object(_.c)([Z.a], t.prototype, "OnCapsuleOver", null),
            Object(_.c)([Z.a], t.prototype, "OnCapsuleOut", null),
            (t = n = Object(_.c)([r.observer], t))
          );
        })(f.Component),
        rt = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(_.d)(e, t),
            (e.prototype.componentDidMount = function() {
              M.a.EnsureStoreCapsuleInfoLoaded(this.props.appid);
            }),
            (e.prototype.render = function() {
              var t = M.a
                  .GetStoreCapsuleInfo(this.props.appid)
                  .GetAppStoreData(),
                e = tt.a.StoreSaleWidgetContainer_mini,
                n = tt.a.StoreSaleWidgetImage_mini,
                r = tt.a.StoreSaleImage_mini,
                o = tt.a.StoreSaleWidgetShortDesc_mini;
              return t && t.title
                ? f.createElement(
                    "div",
                    { className: e },
                    f.createElement(
                      "div",
                      { className: tt.a.Actions },
                      f.createElement(
                        "a",
                        {
                          href: Object(Q.c)(t.capsule_link),
                          target: N.c.IN_CLIENT ? void 0 : "_blank"
                        },
                        f.createElement(
                          "div",
                          { className: n },
                          f.createElement("img", {
                            className: r,
                            src: t.capsule
                          })
                        )
                      )
                    ),
                    f.createElement(
                      "div",
                      { className: tt.a.StoreSaleWidgetRight },
                      f.createElement(
                        "div",
                        { className: tt.a.Actions },
                        f.createElement(
                          "a",
                          {
                            href: Object(Q.c)(t.capsule_link),
                            target: N.c.IN_CLIENT ? void 0 : "_blank"
                          },
                          f.createElement(
                            "div",
                            { className: tt.a.StoreSaleWidgetTitle },
                            t.title
                          )
                        )
                      ),
                      f.createElement(
                        "div",
                        { className: tt.a.StoreSaleWidgetRelease },
                        t.release
                      ),
                      f.createElement(
                        "div",
                        { className: o },
                        Object(h.c)(Object(Y.b)(t.short_desc))
                      ),
                      f.createElement(ot, { appInfo: t })
                    )
                  )
                : f.createElement("div", {
                    className: tt.a.StoreSaleWidgetEmptyContainer
                  });
            }),
            (e = Object(_.c)([r.observer], e))
          );
        })(f.Component),
        ot = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(_.d)(e, t),
            (e.prototype.render = function() {
              var t = this.props.appInfo,
                e = t.price,
                n = t.is_free,
                r = t.discount_percent,
                o = t.subid,
                i = t.appid;
              return f.createElement(
                "div",
                { className: tt.a.StoreActionWidgetContainer },
                f.createElement(
                  "div",
                  {
                    className: Object(I.a)(
                      tt.a.StoreSalePriceActionWidgetContainer,
                      r ? tt.a.Discounted : ""
                    )
                  },
                  r
                    ? f.createElement(
                        "div",
                        { className: tt.a.StoreSaleDiscountBox },
                        "-" + r + "%"
                      )
                    : null,
                  !n && e
                    ? f.createElement(
                        "div",
                        { className: tt.a.StoreSalePriceBox },
                        e
                      )
                    : null,
                  n && "0" == e
                    ? f.createElement(
                        "div",
                        { className: tt.a.StoreSalePriceBox },
                        Object(w.d)("#Broadcast_Store_FreeToPlay")
                      )
                    : null
                ),
                Boolean(o) && f.createElement(_t, { appid: i }),
                f.createElement(ht, { appid: i })
              );
            }),
            (e = Object(_.c)([r.observer], e))
          );
        })(f.Component),
        it = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                bShowContents: !1,
                containerStyle: {
                  maxHeight: "0px",
                  overflow: "hidden",
                  transition: "max-height 1s ease-in-out"
                }
              }),
              t
            );
          }
          return (
            Object(_.d)(t, e),
            (t.prototype.ShowContents = function(t) {
              var e = this;
              this.setState({ bShowContents: t }),
                window.setTimeout(function() {
                  return e.setState({
                    containerStyle: Object(_.a)(
                      Object(_.a)({}, e.state.containerStyle),
                      { maxHeight: "120000px" }
                    )
                  });
                }, 100);
            }),
            (t.prototype.componentDidMount = function() {
              y.a.LoadBundleInfo([this.props.bundleid]);
            }),
            (t.prototype.render = function() {
              var t = this,
                e = this.props.bundleid,
                n = y.a.GetBundleInfo(e);
              if (!n) return null;
              var r = n.discount_percent,
                o = n.formatted_final_price,
                i = n.formatted_orig_price,
                a = n.bundle_base_discount;
              return f.createElement(
                f.Fragment,
                null,
                f.createElement(
                  "div",
                  {
                    className: Object(I.a)(
                      tt.a.StoreSaleWidgetContainer,
                      tt.a.Bundle,
                      tt.a.BundleLargeCtn
                    )
                  },
                  f.createElement(
                    "div",
                    { className: tt.a.BundleImage },
                    f.createElement(
                      et.a,
                      {
                        strURL: N.c.STORE_BASE_URL + "bundle/" + e,
                        type: "bundle",
                        id: e
                      },
                      f.createElement(
                        "div",
                        { className: tt.a.StoreSaleWidgetImage },
                        f.createElement(
                          "img",
                          Object(_.a)(
                            {
                              loading: "lazy",
                              className: tt.a.StoreSaleImage,
                              alt: n.name,
                              src: n.header_image_url
                            },
                            n.GetHeaderImageDimension()
                          )
                        )
                      )
                    )
                  ),
                  f.createElement(
                    "div",
                    { className: Object(I.a)(tt.a.StoreSaleWidgetRight) },
                    f.createElement(
                      "div",
                      { className: tt.a.Actions },
                      f.createElement(
                        "a",
                        {
                          href: Object(Q.c)(N.c.STORE_BASE_URL + "bundle/" + e),
                          target: N.c.IN_CLIENT ? void 0 : "_blank"
                        },
                        f.createElement(
                          "div",
                          { className: tt.a.StoreSaleWidgetTitle },
                          n.name
                        )
                      )
                    ),
                    f.createElement(
                      "div",
                      { className: tt.a.StoreSaleWidgetShortDesc },
                      Boolean(n.discount_percent)
                        ? Object(w.d)(
                            "#Sale_BundleSave_WithDiscount",
                            n.discount_percent,
                            n.packageids.length
                          )
                        : Object(w.d)("#Sale_BundleSave", n.packageids.length)
                    ),
                    f.createElement(at, { packages: n.packageids }),
                    f.createElement(
                      "div",
                      { className: tt.a.BundleBuyButtons },
                      f.createElement(ft, { item: n }),
                      f.createElement(
                        "span",
                        { className: tt.a.BundleDiscounts },
                        Boolean(a && r && a < r) &&
                          f.createElement(
                            "span",
                            { className: Object(I.a)(tt.a.BaseDiscount) },
                            "-" + a + "%"
                          ),
                        Boolean(r) &&
                          f.createElement(
                            "span",
                            { className: tt.a.StoreSaleDiscountBox },
                            "-" + r + "%"
                          ),
                        Boolean(o) &&
                          (Boolean(r && i)
                            ? f.createElement(
                                "div",
                                { className: tt.a.StoreSaleDiscountedPriceCtn },
                                f.createElement(
                                  "div",
                                  { className: tt.a.StoreOrignalPrice },
                                  i
                                ),
                                f.createElement(
                                  "div",
                                  { className: tt.a.StoreSalePriceBox },
                                  o
                                )
                              )
                            : f.createElement(
                                "div",
                                { className: tt.a.StoreSalePriceBox },
                                o
                              ))
                      ),
                      f.createElement(
                        "div",
                        { className: tt.a.BundleBuyButton },
                        f.createElement(_t, { bundleid: e })
                      )
                    )
                  )
                ),
                !this.state.bShowContents &&
                  f.createElement(
                    "div",
                    {
                      onClick: function() {
                        return t.ShowContents(!0);
                      },
                      className: tt.a.BundleShowButton
                    },
                    f.createElement(
                      "button",
                      { className: tt.a.ShowContentsButton },
                      Object(w.d)(
                        "#Sale_ShowBundleContent",
                        n.packageids.length
                      )
                    )
                  ),
                this.state.bShowContents &&
                  f.createElement(
                    "div",
                    {
                      style: this.state.containerStyle,
                      className: tt.a.BundleContentsCtn
                    },
                    n.packageids.map(function(t) {
                      var e = R.b.GetPackageInfo(t);
                      return e
                        ? f.createElement(
                            "div",
                            {
                              key: e.appids[0],
                              className: tt.a.BundleContentItem
                            },
                            1 === e.appids.length
                              ? f.createElement(nt, { appid: e.appids[0] })
                              : f.createElement(st, { packageid: t })
                          )
                        : null;
                    })
                  ),
                Boolean(this.state.bShowContents && 10 < n.packageids.length) &&
                  f.createElement(
                    "div",
                    {
                      onClick: function() {
                        return t.ShowContents(!1);
                      },
                      className: tt.a.BundleShowButton
                    },
                    f.createElement(
                      "button",
                      { className: tt.a.ShowContentsButton },
                      Object(w.d)("#Sale_ShowLess")
                    )
                  )
              );
            }),
            Object(_.c)([Z.a], t.prototype, "ShowContents", null),
            (t = Object(_.c)([r.observer], t))
          );
        })(f.Component),
        at = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(_.d)(e, t),
            (e.prototype.componentDidMount = function() {
              return Object(_.b)(this, void 0, void 0, function() {
                var e;
                return Object(_.e)(this, function(t) {
                  switch (t.label) {
                    case 0:
                      return (
                        (e = this.props.packages.slice(0, 6)),
                        [4, R.b.LoadPackageInfo(e)]
                      );
                    case 1:
                      return (
                        t.sent(),
                        e.forEach(function(t) {
                          var e = R.b.GetPackageInfo(t);
                          if (e && 1 == e.appids.length) {
                            var n = e.appids[0];
                            M.a.EnsureStoreCapsuleInfoLoaded(n);
                          }
                        }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.RenderPackages = function() {
              var c = new Array();
              return (
                this.props.packages.slice(0, 6).forEach(function(t, e) {
                  var n = R.b.GetPackageInfo(t);
                  if (!n || 0 == n.appids.length) return null;
                  var r = Object(Q.c)(N.c.STORE_BASE_URL + "sub/" + t),
                    o = n.header_image_url,
                    i = n.name;
                  if (1 == n.appids.length) {
                    var a = n.appids[0],
                      s = M.a.GetStoreCapsuleInfo(a);
                    s.BIsLoaded() &&
                      ((r = Object(Q.c)(s.GetAppStoreData().capsule_link)),
                      (o = s.GetAppStoreData().tiny_capsule),
                      (i = s.GetAppStoreData().title));
                  }
                  c.push(
                    f.createElement(
                      "a",
                      {
                        key: "preview_" + t,
                        href: r,
                        target: N.c.IN_CLIENT ? void 0 : "_blank",
                        className: tt.a.PreviewItem,
                        style: { zIndex: 30 - e }
                      },
                      f.createElement("img", {
                        src: o,
                        className: tt.a.PreviewImg,
                        loading: "lazy",
                        width: "120",
                        height: "45",
                        alt: i
                      })
                    )
                  );
                }),
                c
              );
            }),
            (e.prototype.render = function() {
              var t = this.RenderPackages();
              return f.createElement(
                "div",
                { className: tt.a.BundleContentPreview },
                f.createElement("div", { className: tt.a.PreviewCtn }, t)
              );
            }),
            (e = Object(_.c)([r.observer], e))
          );
        })(f.Component),
        st = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                bShowContents: !1,
                containerStyle: {
                  maxHeight: "0px",
                  overflow: "hidden",
                  transition: "max-height 1s ease-in-out"
                }
              }),
              t
            );
          }
          return (
            Object(_.d)(t, e),
            (t.prototype.ShowContents = function() {
              var t = this;
              this.setState({ bShowContents: !0 }),
                window.setTimeout(function() {
                  return t.setState({
                    containerStyle: Object(_.a)(
                      Object(_.a)({}, t.state.containerStyle),
                      { maxHeight: "2000px" }
                    )
                  });
                }, 100);
            }),
            (t.prototype.componentDidMount = function() {
              R.b.LoadPackageInfo([this.props.packageid]);
            }),
            (t.prototype.render = function() {
              var t = R.b.GetPackageInfo(this.props.packageid);
              if (!t) return null;
              var e = tt.a.StoreSaleWidgetContainer + " " + tt.a.Bundle,
                n = tt.a.StoreSaleWidgetImage,
                r = tt.a.StoreSaleImage;
              return f.createElement(
                f.Fragment,
                null,
                f.createElement(
                  "div",
                  { className: Object(I.a)(e, "packageItem") },
                  f.createElement(
                    "div",
                    { className: tt.a.Actions },
                    f.createElement(
                      "a",
                      {
                        href: Object(Q.c)(
                          N.c.STORE_BASE_URL + "sub/" + this.props.packageid
                        ),
                        target: N.c.IN_CLIENT ? void 0 : "_blank"
                      },
                      f.createElement(
                        "div",
                        { className: n },
                        f.createElement(
                          "img",
                          Object(_.a)(
                            {
                              loading: "lazy",
                              className: r,
                              alt: t.name,
                              src: t.header_image_url
                            },
                            t.GetHeaderImageDimension()
                          )
                        )
                      )
                    )
                  ),
                  f.createElement(
                    "div",
                    { className: tt.a.StoreSaleWidgetRight },
                    f.createElement(
                      "div",
                      { className: tt.a.Actions },
                      f.createElement(
                        "a",
                        {
                          href: Object(Q.c)(
                            N.c.STORE_BASE_URL + "sub/" + this.props.packageid
                          ),
                          target: N.c.IN_CLIENT ? void 0 : "_blank"
                        },
                        f.createElement(
                          "div",
                          { className: tt.a.StoreSaleWidgetTitle },
                          t.name
                        )
                      )
                    ),
                    f.createElement(
                      "div",
                      { className: tt.a.StoreActionWidgetContainer },
                      f.createElement(
                        "div",
                        { className: tt.a.StoreSalePriceActionWidgetContainer },
                        t.discount_percent
                          ? f.createElement(
                              "div",
                              { className: tt.a.StoreSaleDiscountBox },
                              "-" + t.discount_percent + "%"
                            )
                          : null,
                        t.formatted_final_price
                          ? f.createElement(
                              "div",
                              { className: tt.a.StoreSalePriceBox },
                              t.formatted_final_price
                            )
                          : null
                      ),
                      f.createElement(
                        "div",
                        { style: { width: "150px" } },
                        f.createElement(_t, { packageid: this.props.packageid })
                      )
                    ),
                    !this.state.bShowContents &&
                      f.createElement(
                        "div",
                        {
                          onClick: this.ShowContents,
                          className: tt.a.ExpandPackageButtonCtn
                        },
                        f.createElement(
                          "button",
                          { className: tt.a.ShowContentsButton },
                          Object(w.d)("#Sale_ShowContents")
                        )
                      )
                  )
                ),
                f.createElement(
                  "div",
                  {
                    style: this.state.containerStyle,
                    className: tt.a.ExpandedPackageItems
                  },
                  t.appids.map(function(t) {
                    return f.createElement(
                      "div",
                      { key: t, className: tt.a.BundleContentItem },
                      f.createElement(nt, { appid: t })
                    );
                  })
                )
              );
            }),
            Object(_.c)([Z.a], t.prototype, "ShowContents", null),
            (t = Object(_.c)([r.observer], t))
          );
        })(f.Component),
        ct = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(_.d)(e, t),
            (e.prototype.render = function() {
              var t = this.props.bundleInfo;
              if (!t) return null;
              var e = t.discount_percent,
                n = t.header_image_url,
                r = t.formatted_final_price,
                o = (t.name, t.bundleid),
                i = t.formatted_orig_price;
              return f.createElement(
                et.a,
                {
                  strURL: N.c.STORE_BASE_URL + "bundle/" + o,
                  type: "bundle",
                  id: o
                },
                f.createElement(
                  "div",
                  {
                    className: Object(I.a)(
                      tt.a.CapsuleContainer,
                      this.props.bInCarousel ? tt.a.InCarouselWidget : ""
                    )
                  },
                  f.createElement(
                    "img",
                    Object(_.a)(
                      {
                        loading: "lazy",
                        className: tt.a.CapsuleImage,
                        alt: t.name,
                        src: n
                      },
                      t.GetHeaderImageDimension()
                    )
                  ),
                  f.createElement(
                    "div",
                    { className: tt.a.CapsuleBottomBar },
                    f.createElement(ft, { item: t }),
                    f.createElement(
                      "span",
                      { style: { marginLeft: "auto", display: "flex" } },
                      Boolean(e) &&
                        f.createElement(
                          "span",
                          { className: tt.a.StoreSaleDiscountBox },
                          "-" + e + "%"
                        ),
                      Boolean(r) &&
                        (Boolean(e && i)
                          ? f.createElement(
                              "div",
                              { className: tt.a.StoreSaleDiscountedPriceCtn },
                              f.createElement(
                                "div",
                                { className: tt.a.StoreOrignalPrice },
                                i
                              ),
                              f.createElement(
                                "div",
                                { className: tt.a.StoreSalePriceBox },
                                r
                              )
                            )
                          : f.createElement(
                              "div",
                              { className: tt.a.StoreSalePriceBox },
                              r
                            ))
                    )
                  )
                )
              );
            }),
            (e = Object(_.c)([r.observer], e))
          );
        })(f.Component),
        lt = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(_.d)(e, t),
            (e.prototype.render = function() {
              var t = this.props.packageInfo;
              if (!t) return null;
              var e = t.discount_percent,
                n = t.header_image_url,
                r = t.formatted_final_price,
                o = (t.name, t.formatted_orig_price);
              return f.createElement(
                et.a,
                {
                  strURL: N.c.STORE_BASE_URL + "sub/" + t.packageid,
                  type: "sub",
                  id: t.packageid
                },
                f.createElement(
                  "div",
                  {
                    className: Object(I.a)(
                      tt.a.CapsuleContainer,
                      this.props.bInCarousel ? tt.a.InCarouselWidget : ""
                    )
                  },
                  f.createElement(
                    "img",
                    Object(_.a)(
                      {
                        loading: "lazy",
                        className: tt.a.CapsuleImage,
                        src: n,
                        alt: t.name
                      },
                      t.GetHeaderImageDimension()
                    )
                  ),
                  f.createElement(
                    "div",
                    { className: tt.a.CapsuleBottomBar },
                    f.createElement(ft, { item: t }),
                    f.createElement(
                      "span",
                      { style: { marginLeft: "auto", display: "flex" } },
                      Boolean(e) &&
                        f.createElement(
                          "span",
                          { className: tt.a.StoreSaleDiscountBox },
                          "-" + e + "%"
                        ),
                      Boolean(r) &&
                        (Boolean(e && o)
                          ? f.createElement(
                              "div",
                              { className: tt.a.StoreSaleDiscountedPriceCtn },
                              f.createElement(
                                "div",
                                { className: tt.a.StoreOrignalPrice },
                                o
                              ),
                              f.createElement(
                                "div",
                                { className: tt.a.StoreSalePriceBox },
                                r
                              )
                            )
                          : f.createElement(
                              "div",
                              { className: tt.a.StoreSalePriceBox },
                              r
                            ))
                    )
                  )
                )
              );
            }),
            (e = Object(_.c)([r.observer], e))
          );
        })(f.Component),
        pt = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(_.d)(e, t),
            (e.prototype.OnOpenContextMenu = function(t) {
              var e = this;
              Object(g.a)(
                f.createElement(
                  G.c,
                  null,
                  f.createElement(
                    G.d,
                    {
                      onSelected: function() {
                        return k.a.UpdateGameWishlist(
                          e.props.appInfo.appid,
                          !0
                        );
                      }
                    },
                    f.createElement(
                      "div",
                      { style: { color: "white" } },
                      Object(w.d)("#Sale_AddToWishlist")
                    )
                  ),
                  f.createElement(
                    G.d,
                    { onSelected: function() {} },
                    f.createElement(
                      "a",
                      {
                        href: N.c.STORE_BASE_URL + "account/preferences",
                        target: "_blank"
                      },
                      Object(w.d)("#Sale_Preferences")
                    )
                  )
                ),
                t,
                { bDisablePopTop: !0 }
              );
            }),
            (e.prototype.render = function() {
              return N.i.logged_in
                ? f.createElement(
                    "div",
                    {
                      className: tt.a.CapsuleMenuButton,
                      onClick: this.OnOpenContextMenu
                    },
                    f.createElement("img", { src: s.a })
                  )
                : null;
            }),
            Object(_.c)([Z.a], e.prototype, "OnOpenContextMenu", null),
            (e = Object(_.c)([r.observer], e))
          );
        })(f.Component),
        ut = (function(n) {
          function t(t) {
            var e = n.call(this, t) || this;
            return (
              (e.state = { isHovered: !1 }),
              (e.m_strSpanIDRand = Math.floor(1e6 * Math.random()).toString()),
              e
            );
          }
          return (
            Object(_.d)(t, n),
            (t.prototype.GetStringID = function() {
              return (
                "appcap_" +
                this.props.appInfo.appid +
                "_" +
                this.m_strSpanIDRand
              );
            }),
            (t.prototype.componentDidMount = function() {
              k.a.HintLoad();
            }),
            (t.prototype.OnHoverStateChange = function(t) {
              this.state.isHovered != t && this.setState({ isHovered: t });
            }),
            (t.prototype.render = function() {
              var t = this.props,
                e = t.appInfo,
                n = t.bShowParentApp,
                r = t.bInCarousel,
                o = t.bUseSubscriptionLayout;
              if (!e) return null;
              var i = e.capsule,
                a = (e.title, e.price),
                s = e.discount_percent,
                c = e.content_descriptors,
                l = e.tags,
                p = e.is_free,
                u = e.orig_price,
                d = k.a.BIsGameWishlisted(e.appid),
                m = k.a.BOwnsApp(e.appid);
              if (k.a.BExcludesContentDescriptor(c) || k.a.BExcludesTag(l))
                return null;
              var h =
                n && Boolean(e.full_game_appid)
                  ? E.a.GetAppLinkInfo(e.full_game_appid)
                  : void 0;
              return f.createElement(
                "div",
                { id: this.GetStringID() },
                f.createElement(
                  et.a,
                  {
                    strURL: N.c.STORE_BASE_URL + "app/" + e.appid,
                    type: "app",
                    id: e.appid,
                    fnHoverState: this.OnHoverStateChange,
                    fnGetIDOverride: this.GetStringID
                  },
                  f.createElement(
                    "div",
                    {
                      className: Object(I.a)(
                        tt.a.CapsuleContainer,
                        r && tt.a.InCarouselWidget
                      )
                    },
                    !m &&
                      d &&
                      f.createElement(
                        "span",
                        { className: tt.a.Banner },
                        f.createElement("img", { src: v.a }),
                        " ",
                        Object(w.d)("#Sale_OnWishlist")
                      ),
                    m &&
                      f.createElement(
                        "span",
                        { className: tt.a.Banner + " " + tt.a.Blue },
                        f.createElement("img", { src: b.a }),
                        " ",
                        Object(w.d)("#Sale_InLibrary")
                      ),
                    x.b.BIsAppStreaming(
                      e.full_game_appid ? e.full_game_appid : e.appid
                    ) &&
                      f.createElement(
                        "div",
                        { className: tt.a.LiveIcon },
                        f.createElement(bt, null)
                      ),
                    N.i.logged_in &&
                      this.state.isHovered &&
                      f.createElement(pt, { appInfo: e }),
                    f.createElement(
                      "div",
                      { style: { position: "relative" } },
                      f.createElement(
                        "img",
                        Object(_.a)(
                          {
                            loading: "lazy",
                            className: Object(I.a)(
                              tt.a.CapsuleImage,
                              m && tt.a.Muted
                            ),
                            src: i
                          },
                          e.GetCapsuleDimensions(),
                          { alt: e.title }
                        )
                      ),
                      this.state.isHovered &&
                        e.microtrailer &&
                        f.createElement(
                          "video",
                          {
                            style: {
                              position: "absolute",
                              left: 0,
                              top: 0,
                              zIndex: 1,
                              width: "100%",
                              display: "block",
                              pointerEvents: "none"
                            },
                            loop: !0,
                            muted: !0,
                            autoPlay: !0
                          },
                          f.createElement("source", {
                            src: e.microtrailer,
                            type: "video/webm"
                          }),
                          !N.c.IN_CLIENT &&
                            f.createElement("source", {
                              src: e.microtrailer_mp4,
                              type: "video/mp4"
                            })
                        )
                    ),
                    o
                      ? f.createElement(dt, { appid: e.appid })
                      : f.createElement(
                          "div",
                          {
                            className: Object(I.a)(
                              tt.a.CapsuleBottomBar,
                              m && tt.a.Muted
                            )
                          },
                          f.createElement(ft, { item: e }),
                          f.createElement(
                            "span",
                            { style: { marginLeft: "auto", display: "flex" } },
                            Boolean(s) &&
                              f.createElement(
                                "span",
                                { className: tt.a.StoreSaleDiscountBox },
                                "-" + s + "%"
                              ),
                            Boolean(!p) &&
                              f.createElement("div", {
                                className: tt.a.StoreSalePriceBox
                              }),
                            Boolean(!p) &&
                              (Boolean(s && u)
                                ? f.createElement(
                                    "div",
                                    {
                                      className:
                                        tt.a.StoreSaleDiscountedPriceCtn
                                    },
                                    f.createElement(
                                      "div",
                                      { className: tt.a.StoreOrignalPrice },
                                      u
                                    ),
                                    f.createElement(
                                      "div",
                                      { className: tt.a.StoreSalePriceBox },
                                      a
                                    )
                                  )
                                : f.createElement(
                                    "div",
                                    { className: tt.a.StoreSalePriceBox },
                                    a
                                  ))
                          )
                        )
                  )
                ),
                Boolean(h) &&
                  f.createElement(
                    "span",
                    null,
                    " ",
                    f.createElement(
                      "div",
                      null,
                      Object(w.d)(
                        "music" === e.type
                          ? "#SalePage_ParentApp_SoundTrack"
                          : "#SalePage_ParentApp_DLC"
                      )
                    ),
                    f.createElement(
                      et.a,
                      {
                        strURL: N.c.STORE_BASE_URL + "app/" + e.full_game_appid,
                        type: "app",
                        id: e.full_game_appid,
                        fnHoverState: this.OnHoverStateChange
                      },
                      f.createElement(
                        "img",
                        Object(_.a)(
                          {
                            loading: "lazy",
                            className: X.AppCapsuleImage,
                            alt: h.title,
                            src: h.tiny_capsule
                          },
                          h.GetTinyCapsuleDimensions()
                        )
                      )
                    )
                  )
              );
            }),
            Object(_.c)([Z.a], t.prototype, "GetStringID", null),
            Object(_.c)([Z.a], t.prototype, "OnHoverStateChange", null),
            (t = Object(_.c)([r.observer], t))
          );
        })(f.Component),
        dt = Object(r.observer)(function(t) {
          var e = t.appid,
            n = k.a.BOwnsApp(e),
            r = function(t) {
              t.preventDefault(), n ? D(e) : k.a.AddLicenseForFreeGame(e);
            };
          return n
            ? f.createElement(
                "div",
                {
                  onClick: r,
                  className: Object(I.a)(
                    tt.a.CapsuleBottomBar,
                    tt.a.PlayNowButton
                  )
                },
                " ",
                Object(w.d)("#Sale_PlayNow"),
                " "
              )
            : f.createElement(
                "div",
                {
                  onClick: r,
                  className: Object(I.a)(
                    tt.a.CapsuleBottomBar,
                    tt.a.AddToLibraryButton
                  )
                },
                " ",
                Object(w.d)("#Sale_AddToLibrary"),
                " "
              );
        }),
        mt = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(_.d)(e, t),
            (e.prototype.render = function() {
              var t = "",
                e = "";
              try {
                var n = new URL(this.props.link.url);
                (t = n.pathname.substring(1)), (e = n.search);
              } catch (t) {
                console.error(t);
              }
              return f.createElement(
                "a",
                {
                  href: Object(Q.c)(N.c.STORE_BASE_URL + t + e),
                  target: N.c.IN_CLIENT ? void 0 : "_blank",
                  rel: "noopener noreferrer",
                  className: this.props.strClassName
                    ? this.props.strClassName
                    : void 0
                },
                f.createElement(
                  "div",
                  { className: tt.a.CapsuleContainer },
                  Boolean(this.props.link.localized_link_capsule) &&
                    f.createElement("img", {
                      loading: "lazy",
                      className: tt.a.CapsuleImage,
                      src:
                        N.c.MEDIA_CDN_COMMUNITY_URL +
                        "images/clans/" +
                        this.props.clanAccountID +
                        "/" +
                        (this.props.link.localized_link_capsule[
                          this.props.language
                        ] || this.props.link.localized_link_capsule[0])
                    }),
                  Boolean(this.props.link.materialized_link_capsule) &&
                    f.createElement("img", {
                      loading: "lazy",
                      className: tt.a.CapsuleImage,
                      src: this.props.link.materialized_link_capsule
                    })
                )
              );
            }),
            (e = Object(_.c)([r.observer], e))
          );
        })(f.Component),
        ht = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                bUpdatingWishList: !1,
                bLoadingUserData: !k.a.BIsLoaded()
              }),
              t
            );
          }
          return (
            Object(_.d)(t, e),
            (t.prototype.componentDidMount = function() {
              return Object(_.b)(this, void 0, void 0, function() {
                return Object(_.e)(this, function(t) {
                  switch (t.label) {
                    case 0:
                      return (
                        M.a.EnsureStoreCapsuleInfoLoaded(this.props.appid),
                        [4, k.a.HintLoad()]
                      );
                    case 1:
                      return (
                        t.sent(), this.setState({ bLoadingUserData: !1 }), [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.DisplayWishlistUpdateErrors = function(t) {
              Object(O.d)(
                f.createElement(
                  C.e,
                  {
                    strTitle: Object(w.d)("#Wishlist_Error"),
                    strDescription: Object(w.d)("#Wishlist_Error_Desc")
                  },
                  f.createElement("br", null),
                  f.createElement("br", null),
                  t
                ),
                window
              );
            }),
            (t.prototype.OnWishListClick = function() {
              return Object(_.b)(this, void 0, void 0, function() {
                var e,
                  n,
                  r,
                  o,
                  i = this;
                return Object(_.e)(this, function(t) {
                  switch (t.label) {
                    case 0:
                      if (!N.i.logged_in) return Object(H.a)(), [2];
                      if (this.state.bUpdatingWishList) return [3, 4];
                      this.setState({ bUpdatingWishList: !0 }),
                        (e = this.props.appid),
                        (n = !k.a.BIsGameWishlisted(e)),
                        (t.label = 1);
                    case 1:
                      return (
                        t.trys.push([1, 3, , 4]),
                        [4, k.a.UpdateGameWishlist(e, n)]
                      );
                    case 2:
                      return (
                        (r = t.sent()),
                        this.setState({ bUpdatingWishList: !1 }, function() {
                          1 != r.success &&
                            i.DisplayWishlistUpdateErrors(
                              Object(V.a)(r).strErrorMsg
                            );
                        }),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (o = t.sent()),
                        this.setState({ bUpdatingWishList: !1 }),
                        this.DisplayWishlistUpdateErrors(
                          Object(V.a)(o).strErrorMsg
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.render = function() {
              var t = M.a
                .GetStoreCapsuleInfo(this.props.appid)
                .GetAppStoreData();
              if (
                k.a.BOwnsApp(this.props.appid) ||
                (!t.coming_soon && t.is_free)
              )
                return null;
              var e = k.a.BIsGameWishlisted(this.props.appid);
              return f.createElement(
                "div",
                {
                  className: Object(I.a)(tt.a.WishList, P.a.FlexRowContainer),
                  onClick: this.OnWishListClick,
                  "data-tooltip-text": Object(w.d)("#AddToWishlist_ttip")
                },
                f.createElement(
                  "span",
                  null,
                  (this.state.bLoadingUserData ||
                    this.state.bUpdatingWishList) &&
                    f.createElement(W.a, { size: "small" })
                ),
                !this.state.bUpdatingWishList &&
                  e &&
                  f.createElement("img", {
                    className: P.a.IconImage,
                    src: q.a
                  }),
                f.createElement(
                  "span",
                  null,
                  Object(w.d)(
                    this.state.bUpdatingWishList
                      ? "#Updating"
                      : this.state.bLoadingUserData
                      ? "#Loading"
                      : e
                      ? "#Wishlisted"
                      : "#AddToWishlist"
                  )
                )
              );
            }),
            Object(_.c)([Z.a], t.prototype, "OnWishListClick", null),
            (t = Object(_.c)([r.observer], t))
          );
        })(f.Component),
        _t = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(_.d)(e, t),
            (e.prototype.componentDidMount = function() {
              k.a.HintLoad(),
                M.a.EnsureStoreCapsuleInfoLoaded(this.props.appid);
            }),
            (e.prototype.BOwnsApp = function() {
              return k.a.BOwnsApp(this.props.appid);
            }),
            (e.prototype.BIsFreeApp = function() {
              var t = M.a
                .GetStoreCapsuleInfo(this.props.appid)
                .GetAppStoreData();
              return t.is_free && ("" == t.price || "0" == t.price);
            }),
            (e.prototype.OnAddToCart = function(t) {
              if (this.props.packageid)
                k.a.AddToCart(
                  t,
                  this.props.packageid,
                  N.c.STORE_BASE_URL + "cart/addtocart",
                  N.c.STORE_BASE_URL + "cart"
                );
              else if (this.props.bundleid)
                k.a.AddToCart(
                  t,
                  null,
                  N.c.STORE_BASE_URL + "cart/addtocart",
                  N.c.STORE_BASE_URL + "cart",
                  this.props.bundleid
                );
              else {
                var e = M.a
                  .GetStoreCapsuleInfo(this.props.appid)
                  .GetAppStoreData();
                this.BOwnsApp() || this.BIsFreeApp()
                  ? Object(z.c)(window, "steam://run/" + e.app_to_run)
                  : k.a.AddToCart(t, e.subid, e.add_to_cart_url, e.cart_url);
              }
            }),
            (e.prototype.render = function() {
              var t = "";
              if (this.props.bundleid || this.props.packageid)
                t = Object(w.d)("#Store_AddToCart");
              else {
                var e = M.a.GetStoreCapsuleInfo(this.props.appid),
                  n = e.GetAppStoreData();
                if (
                  e.GetAppStoreData().coming_soon &&
                  !e.GetAppStoreData().subid
                )
                  return null;
                t = this.BOwnsApp()
                  ? Object(w.d)("#EventDisplay_CallToAction_PlayNow")
                  : n.button_action;
              }
              return f.createElement(
                "div",
                { className: tt.a.Action, onClick: this.OnAddToCart },
                t
              );
            }),
            Object(_.c)([Z.a], e.prototype, "OnAddToCart", null),
            (e = Object(_.c)([r.observer], e))
          );
        })(f.Component),
        ft = function(t) {
          var e = t.item;
          return f.createElement(
            "span",
            { className: tt.a.CapsulePlatform },
            e.available_windows && f.createElement("img", { src: m.a }),
            e.available_mac && f.createElement("img", { src: u.a }),
            e.available_linux && f.createElement("img", { src: l.a }),
            e.support_vrhmd
              ? e.support_vrhmd_only
                ? f.createElement(
                    "span",
                    { className: K.vr_required },
                    Object(w.d)("#Store_VR_Support_OnlyVR")
                  )
                : f.createElement(
                    "span",
                    { className: K.vr_supported },
                    Object(w.d)("#Store_VR_Support_SupportsVR")
                  )
              : null
          );
        },
        bt = function() {
          return f.createElement(
            "div",
            { className: tt.a.bordered_live_stream_icon },
            Object(w.d)("#home_page_live_broadcast")
          );
        };
    },
    fpVW: function(t, e, n) {
      t.exports = {
        PartnerEventFont: "partnereventshared_PartnerEventFont_LK4bX",
        BetaContainer: "partnereventshared_BetaContainer_GBqhj",
        EventBetaTextTitle: "partnereventshared_EventBetaTextTitle_3R7Hr",
        Clear: "partnereventshared_Clear_3UhsQ",
        Divider: "partnereventshared_Divider_3B5HO",
        EventDefaultRowContainer:
          "partnereventshared_EventDefaultRowContainer_3WO6c",
        EventStartPublic: "partnereventshared_EventStartPublic_2LU_Y",
        EventOptions: "partnereventshared_EventOptions_2r_Qe",
        FlexColumnContainer: "partnereventshared_FlexColumnContainer_1qhLq",
        FlexRowContainer: "partnereventshared_FlexRowContainer_Ke5f1",
        FlexContainSpaceBetween:
          "partnereventshared_FlexContainSpaceBetween_3nPGW",
        FlexRowWrapSpaceBetweenContainer:
          "partnereventshared_FlexRowWrapSpaceBetweenContainer_19CjI",
        Button: "partnereventshared_Button_1ABCO",
        FlexRowWrapFlexStartContainer:
          "partnereventshared_FlexRowWrapFlexStartContainer_tyP_c",
        SaveBackground: "partnereventshared_SaveBackground_V0mbI",
        SupportedGroupLabel: "partnereventshared_SupportedGroupLabel_APmJN",
        LangaugeWithContent: "partnereventshared_LangaugeWithContent_16xEW",
        InputBorder: "partnereventshared_InputBorder_Obyys",
        RadioOption: "partnereventshared_RadioOption_3iJX1",
        EventEditorTextTitleCtn:
          "partnereventshared_EventEditorTextTitleCtn_htm7d",
        doclink: "partnereventshared_doclink_1-bAK",
        EventEditorUnpaddedTextTitle:
          "partnereventshared_EventEditorUnpaddedTextTitle_9hsCL",
        EventEditorTextTitle: "partnereventshared_EventEditorTextTitle_18fHx",
        EventEditorTextTitleLengthInfo:
          "partnereventshared_EventEditorTextTitleLengthInfo_2nHJ1",
        EventSectionTitleCtn: "partnereventshared_EventSectionTitleCtn_onqWK",
        EventSectionTitle: "partnereventshared_EventSectionTitle_Idd_A",
        EventSectionSpacer: "partnereventshared_EventSectionSpacer_1Bloe",
        EventSectionMoreBtn: "partnereventshared_EventSectionMoreBtn_uckBi",
        EventEditorSpacerPadding:
          "partnereventshared_EventEditorSpacerPadding_1RBfN",
        EventEditorVisibilityCtn:
          "partnereventshared_EventEditorVisibilityCtn_1nqBh",
        EventEditorTextSubTitle:
          "partnereventshared_EventEditorTextSubTitle_1i_pY",
        FloatingTitle: "partnereventshared_FloatingTitle_31XRt",
        EventEditorEventStatus:
          "partnereventshared_EventEditorEventStatus_2JGoL",
        EventHidden: "partnereventshared_EventHidden_2H6fn",
        EventVisible: "partnereventshared_EventVisible_3Z0Qr",
        EventBarTitleCtn: "partnereventshared_EventBarTitleCtn_WfVze",
        EventBarTitle: "partnereventshared_EventBarTitle_29kVX",
        EventBarBack: "partnereventshared_EventBarBack_s3r9b",
        EditPreviewButton: "partnereventshared_EditPreviewButton_1FhZQ",
        BrowseMoreButton: "partnereventshared_BrowseMoreButton_1Yrcl",
        Icon: "partnereventshared_Icon_1dDpS",
        Primary: "partnereventshared_Primary_30ipl",
        ClearThings: "partnereventshared_ClearThings_3x_qL",
        OnIndicator: "partnereventshared_OnIndicator_1GBsB",
        OffIndicator: "partnereventshared_OffIndicator_w0I94",
        IconImage: "partnereventshared_IconImage_2RY89",
        RightColumnContainer: "partnereventshared_RightColumnContainer_30-E9",
        EventPublishButton: "partnereventshared_EventPublishButton_3nIAe",
        FloatRight: "partnereventshared_FloatRight_1bzHf",
        TTip: "partnereventshared_TTip_2aWuk",
        ValveSupportOnly: "partnereventshared_ValveSupportOnly_wC6-U",
        ArtworkAgeNotAppropriate:
          "partnereventshared_ArtworkAgeNotAppropriate_3V64Z",
        EventDashboardHeader: "partnereventshared_EventDashboardHeader_2kZr_",
        ContainerSpaceBetween: "partnereventshared_ContainerSpaceBetween_3gYZG",
        EventDashboardTitles: "partnereventshared_EventDashboardTitles_1ym4r",
        EventDashboardActions: "partnereventshared_EventDashboardActions_2z_02",
        EventDashboardStatsCtn:
          "partnereventshared_EventDashboardStatsCtn_3IptF",
        EventDashboardAppCtn: "partnereventshared_EventDashboardAppCtn_2iPrK",
        maintitle: "partnereventshared_maintitle_vEk_z",
        AppTitle: "partnereventshared_AppTitle_l-Ow7",
        subtitle: "partnereventshared_subtitle_2mJfc",
        ValveOnlyBackground: "partnereventshared_ValveOnlyBackground_Jckrn",
        Columns: "partnereventshared_Columns_1oVIR",
        LeftCol: "partnereventshared_LeftCol_3PPz-",
        RightCol: "partnereventshared_RightCol_25xel",
        DropDownScroll: "partnereventshared_DropDownScroll_1CewB",
        CloseButton: "partnereventshared_CloseButton_gR2gS",
        CloseSectionTools: "partnereventshared_CloseSectionTools_1d0D9",
        HalfColumn: "partnereventshared_HalfColumn_3Xmp4",
        ThemedCtn: "partnereventshared_ThemedCtn_1xFOb",
        Halloween: "partnereventshared_Halloween_36Ru6",
        tooltip_Ctn: "partnereventshared_tooltip_Ctn_3nqxI",
        SaleSectionHeader: "partnereventshared_SaleSectionHeader_2WMiQ",
        SaleSectionContainer: "partnereventshared_SaleSectionContainer_3gb3J",
        AddSectionButton: "partnereventshared_AddSectionButton_2_djj"
      };
    },
    "ir+G": function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return a;
      });
      var c = n("mrSG"),
        r = n("vDqi"),
        l = n.n(r),
        o = n("2vnA"),
        i = n("wbSL"),
        p = n("bDQf"),
        u = n("lkRc"),
        a = new ((function() {
          function t() {
            (this.m_mapAppIDToInfo = new Map()),
              (this.m_mapAppIDToDLCs = new Map()),
              (this.m_bLoadedFromConfig = !1);
          }
          return (
            (t.prototype.LazyInit = function() {
              var e = this;
              if (!this.m_bLoadedFromConfig) {
                if (
                  !Object({ NODE_ENV: "production", STEAM_BUILD: "buildbot" })
                    .MOBILE_BUILD &&
                  document.getElementById("application_config")
                ) {
                  var t = Object(u.f)("appcapsulestore", "application_config");
                  this.ValidateAppConfig(t) &&
                    t.forEach(function(t) {
                      e.m_mapAppIDToInfo.set(t.appid, new i.b(t.appid, t));
                    });
                }
                this.m_bLoadedFromConfig = !0;
              }
            }),
            (t.prototype.ValidateAppConfig = function(t) {
              var e = t;
              return (
                !!(
                  e &&
                  Array.isArray(e) &&
                  0 < e.length &&
                  "object" == typeof e[0]
                ) &&
                ("number" == typeof e[0].appid &&
                  "number" == typeof e[0].success &&
                  1 === e[0].success)
              );
            }),
            (t.prototype.EnsureStoreCapsuleInfoLoaded = function(n) {
              return Object(c.b)(this, void 0, void 0, function() {
                var e;
                return Object(c.e)(this, function(t) {
                  switch (t.label) {
                    case 0:
                      return (
                        this.LazyInit(),
                        this.m_mapAppIDToInfo.has(n)
                          ? [3, 2]
                          : ((e = new i.b(n)),
                            this.m_mapAppIDToInfo.set(n, e),
                            n && 0 < n
                              ? [
                                  4,
                                  e.HintLoadBroadcastAppData(
                                    (u.c.IN_CLIENT
                                      ? "library-"
                                      : Object(u.e)() + "-") + "partner-events"
                                  )
                                ]
                              : [3, 2])
                      );
                    case 1:
                      t.sent(), (t.label = 2);
                    case 2:
                      return [2, this.m_mapAppIDToInfo.get(n)];
                  }
                });
              });
            }),
            (t.prototype.GetStoreCapsuleInfo = function(t) {
              if ((this.LazyInit(), this.m_mapAppIDToInfo.has(t)))
                return this.m_mapAppIDToInfo.get(t);
              var e = new i.b(t);
              return (
                this.m_mapAppIDToInfo.set(t, e),
                t &&
                  0 < t &&
                  e.HintLoadBroadcastAppData(
                    (u.c.IN_CLIENT ? "library-" : Object(u.e)() + "-") +
                      "partner-events"
                  ),
                e
              );
            }),
            (t.prototype.BIsAppidLoaded = function(t) {
              return (
                this.LazyInit(),
                !!this.m_mapAppIDToInfo.has(t) &&
                  this.m_mapAppIDToInfo.get(t).BIsLoaded()
              );
            }),
            (t.prototype.LoadDLCForAppID = function(a, s) {
              return Object(c.b)(this, void 0, void 0, function() {
                var e, n, r, o, i;
                return Object(c.e)(this, function(t) {
                  switch (t.label) {
                    case 0:
                      if (
                        (this.LazyInit(),
                        this.m_mapAppIDToDLCs.has(a) || 0 == a)
                      )
                        return [3, 4];
                      t.label = 1;
                    case 1:
                      return (
                        t.trys.push([1, 3, , 4]),
                        (e = {
                          origin: self.origin,
                          cc: u.c.COUNTRY || "US",
                          l: u.c.LANGUAGE
                        }),
                        (n =
                          u.c.STORE_BASE_URL + "dlc/" + a + "/ajaxgetdlclist"),
                        [4, l.a.get(n, { params: e, cancelToken: s.token })]
                      );
                    case 2:
                      return (
                        (r = t.sent()),
                        (o = Array()),
                        r.data.dlcs &&
                          r.data.dlcs.forEach(function(t) {
                            o.push({ appid: t.appid, name: t.name });
                          }),
                        this.m_mapAppIDToDLCs.set(a, o),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (i = t.sent()),
                        console.log(Object(p.a)(i)),
                        console.error(i),
                        [3, 4]
                      );
                    case 4:
                      return [
                        2,
                        this.m_mapAppIDToDLCs.has(a)
                          ? this.m_mapAppIDToDLCs.get(a)
                          : []
                      ];
                  }
                });
              });
            }),
            Object(c.c)(
              [o.observable],
              t.prototype,
              "m_mapAppIDToInfo",
              void 0
            ),
            Object(c.c)(
              [o.observable],
              t.prototype,
              "m_mapAppIDToDLCs",
              void 0
            ),
            t
          );
        })())();
      window.g_AppCapsuleStore = a;
    },
    ka0M: function(t, e, n) {
      "use strict";
      var u = n("mrSG"),
        h = n("q1tI"),
        d = n("i8i4"),
        r = n("JMS6"),
        o = n("y+6m"),
        _ = n("Jqb/"),
        i = n("6Y59"),
        a = n("bxiW"),
        c = (function(n) {
          function t(t) {
            var e = n.call(this, t) || this;
            return (e.state = { maximized: e.BIsMaximized() }), e;
          }
          return (
            Object(u.d)(t, n),
            (t.prototype.BIsMaximized = function() {
              var t =
                  this.props.popup.screen.availWidth -
                  this.props.popup.innerWidth,
                e =
                  this.props.popup.screen.availHeight -
                  this.props.popup.innerHeight;
              return 0 == t && 0 == e;
            }),
            (t.prototype.componentDidMount = function() {
              this.props.popup.addEventListener(
                "resize",
                this.UpdateMaximizeState
              );
            }),
            (t.prototype.componentWillUnmount = function() {
              this.props.popup.removeEventListener(
                "resize",
                this.UpdateMaximizeState
              );
            }),
            (t.prototype.UpdateMaximizeState = function() {
              var t = this.BIsMaximized();
              t != this.state.maximized && this.setState({ maximized: t });
            }),
            (t.prototype.render = function() {
              var t = this.props.popup,
                e = "title-area-icon";
              this.state.maximized
                ? (e += " restoreButton")
                : (e += " maximizeButton");
              var n = "TitleBar title-area";
              return (
                this.props.className && (n = n + " " + this.props.className),
                h.createElement(
                  "div",
                  { className: n, style: this.props.style },
                  h.createElement("div", { className: "title-area-highlight" }),
                  h.createElement(
                    "div",
                    { className: "title-area-children" },
                    this.props.children
                  ),
                  !this.props.hideActions &&
                    h.createElement(
                      "div",
                      { className: "title-bar-actions" },
                      h.createElement(
                        "div",
                        {
                          className: "title-area-icon closeButton",
                          onClick: function() {
                            t && t.close();
                          }
                        },
                        h.createElement(i.H, null)
                      ),
                      !this.props.hideMinMax &&
                        h.createElement(
                          "div",
                          {
                            className: e,
                            onClick: function() {
                              t.SteamClient.Window.ToggleMaximize();
                            }
                          },
                          this.state.maximized && h.createElement(i.u, null),
                          !this.state.maximized && h.createElement(i.n, null)
                        ),
                      !this.props.hideMinMax &&
                        h.createElement(
                          "div",
                          {
                            className: "title-area-icon minimizeButton",
                            onClick: function() {
                              t.SteamClient.Window.Minimize();
                            }
                          },
                          h.createElement(i.p, null)
                        )
                    )
                )
              );
            }),
            Object(u.c)([a.a], t.prototype, "UpdateMaximizeState", null),
            t
          );
        })(h.Component),
        f = n("lkRc"),
        l = n("r64O");
      function s(e, n, r, o) {
        return Object(u.b)(this, void 0, void 0, function() {
          return Object(u.e)(this, function(t) {
            return [2, p(e, n, r, o, void 0, void 0, void 0, !1)];
          });
        });
      }
      function p(r, o, i, a, s, c, l, p) {
        return Object(u.b)(this, void 0, void 0, function() {
          var e, n;
          return Object(u.e)(this, function(t) {
            switch (t.label) {
              case 0:
                return [
                  4,
                  (function(i, a, s) {
                    return Object(u.b)(this, void 0, void 0, function() {
                      var e, n, r, o;
                      return Object(u.e)(this, function(t) {
                        switch (t.label) {
                          case 0:
                            return (
                              ((e = a.document.createElement(
                                "div"
                              )).style.position = "absolute"),
                              (e.style.visibility = "hidden"),
                              a.document.body.appendChild(e),
                              d.render(i, e),
                              [
                                4,
                                Promise.all([
                                  s,
                                  document.fonts && document.fonts.ready
                                ])
                              ]
                            );
                          case 1:
                            return (
                              t.sent(),
                              (n = e.getBoundingClientRect()),
                              (r = Math.ceil(n.height)),
                              (o = Math.ceil(n.width)),
                              d.unmountComponentAtNode(e),
                              a.document.body.removeChild(e),
                              [2, { height: r, width: o }]
                            );
                        }
                      });
                    });
                  })(r, o, a)
                ];
              case 1:
                return (e = t.sent()).height / o.innerHeight < 0.9 &&
                  e.width / o.innerWidth < 0.8
                  ? [2, m(r, o)]
                  : ((n = {
                      strTitle: i || "Steam Dialog",
                      popupWidth: Math.max(e.width, l || 0),
                      popupHeight: Math.max(e.height, c || 0),
                      bHideMainWindowForPopups: !1 !== p
                    }),
                    [2, m(r, o, i, n, s)]);
            }
          });
        });
      }
      function m(t, e, n, r, o, i) {
        var a,
          s,
          c = t.props.closeModal,
          l = function() {
            a && a.Close(), s && s.Close(), c && c();
          },
          p = h.cloneElement(t, { closeModal: l }),
          u = Object(_.f)(e);
        if (u.BUsePopups() && f.c.USE_POPUPS && r && n) {
          if (r.bHideMainWindowForPopups) {
            var d = h.createElement(
              _.g,
              {
                className: "Hidden",
                onEscKeypress: !p.props.bDisableBackgroundDismiss && l
              },
              h.createElement("div", null)
            );
            s = u.ShowModal(d);
          }
          var m = new b(e, n, r, p, o, i);
          m.Show(), (a = m);
        } else a = u.ShowModal(p);
        return a;
      }
      n.d(e, "b", function() {
        return s;
      }),
        n.d(e, "d", function() {
          return p;
        }),
        n.d(e, "c", function() {
          return m;
        }),
        n.d(e, "a", function() {
          return _.g;
        });
      var b = (function(s) {
        function t(t, e, n, r, o, i) {
          var a =
            s.call(this, e, {
              title: n.strTitle,
              html_class: "client_chat_frame fullheight ModalDialogPopup",
              body_class: "fullheight ModalDialogBody",
              owner_window: void 0,
              replace_existing_popup: !0,
              target_browser: o,
              availscreenwidth: t.screen.availWidth,
              availscreenheight: t.screen.availHeight
            }) || this;
          return (
            (a.m_bModalInitiatedClose = !1),
            (a.m_windowOpener = t),
            (a.m_modalProps = n),
            (a.m_modalElement = r),
            (a.m_options = i),
            a
          );
        }
        return (
          Object(u.d)(t, s),
          (t.prototype.Close = function() {
            (this.m_bModalInitiatedClose = !0), s.prototype.Close.call(this);
          }),
          (t.prototype.Update = function(t) {
            Object(l.a)(!1, "NYI");
          }),
          (t.prototype.UpdateParamsBeforeShow = function(t) {
            var e = this.m_modalProps.popupWidth || 500,
              n = this.m_modalProps.popupHeight || 400,
              r = this.m_windowOpener.screen,
              o = (r.availWidth - e) / 2,
              i = (r.availHeight - n) / 2,
              a = r;
            return (
              void 0 !== a.availLeft &&
                void 0 !== a.availTop &&
                ((o += a.availLeft), (i += a.availTop)),
              Object(u.a)(Object(u.a)({}, t), {
                dimensions: { width: e, height: n, left: o, top: i }
              })
            );
          }),
          (t.prototype.OnLoad = function() {}),
          (t.prototype.OnResize = function() {}),
          (t.prototype.OnClose = function() {
            this.m_bModalInitiatedClose ||
              (this.m_modalProps.closeModal && this.m_modalProps.closeModal());
          }),
          (t.prototype.Render = function(t, e) {
            if (
              (e.setAttribute("class", "fullheight popup_chat_frame"),
              this.m_modalElement)
            ) {
              var n = this.m_options ? this.m_options.bHideActions : void 0,
                r =
                  this.m_options &&
                  "number" == typeof this.m_options.nDragAreaHeight
                    ? { height: this.m_options.nDragAreaHeight }
                    : void 0;
              d.render(
                h.createElement(
                  "div",
                  { className: "PopupFullWindow", onContextMenu: o.g },
                  h.createElement(c, {
                    hideMinMax: !0,
                    popup: t,
                    hideActions: n,
                    style: r
                  }),
                  h.createElement(_.b, { ModalManager: Object(_.f)(t) }),
                  this.m_modalElement
                ),
                e
              );
            }
          }),
          t
        );
      })(r.a);
    },
    nWbB: function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return m;
      }),
        n.d(e, "b", function() {
          return h;
        }),
        n.d(e, "c", function() {
          return _;
        });
      var a = n("mrSG"),
        r = n("kLLr"),
        o = n("vDqi"),
        s = n.n(o),
        c = n("lkRc"),
        i = n("2vnA"),
        l = n("bDQf"),
        p = n("UWWC"),
        u = n("ir+G"),
        d = (function() {
          function t() {
            (this.m_mapAppToInfo = new Map()),
              (this.m_chatVisibility = "hide"),
              (this.m_bHideBroadcast = void 0);
          }
          return (
            (t.prototype.BHasStreams = function() {
              return this.m_streams && 0 < this.m_streams.length;
            }),
            (t.prototype.GetPlayReadyStream = function() {
              return this.m_playReadyStream;
            }),
            (t.prototype.LoadBIsEmbeddedBroadcastHidden = function(i) {
              return Object(a.b)(this, void 0, void 0, function() {
                var e, n, r, o;
                return Object(a.e)(this, function(t) {
                  switch (t.label) {
                    case 0:
                      if (void 0 !== this.m_bHideBroadcast) return [3, 5];
                      if (
                        (e = Object(c.f)("broadcastuser", "application_config"))
                      )
                        return [3, 4];
                      t.label = 1;
                    case 1:
                      return (
                        t.trys.push([1, 3, , 4]),
                        (n =
                          c.c.STORE_BASE_URL +
                          "broadcast/ajaxgetuserbroadcastpreferences"),
                        [4, s.a.get(n, { params: {}, cancelToken: i.token })]
                      );
                    case 2:
                      return (r = t.sent()), (e = r.data), [3, 4];
                    case 3:
                      return (
                        (o = t.sent()),
                        console.log(
                          "LoadBIsEmbeddedBroadcastHidden: " +
                            Object(l.a)(o).strErrorMsg
                        ),
                        (e = { bHideStoreBroadcast: !1 }),
                        [3, 4]
                      );
                    case 4:
                      (this.m_bHideBroadcast = e.bHideStoreBroadcast),
                        (t.label = 5);
                    case 5:
                      return [2, this.m_bHideBroadcast];
                  }
                });
              });
            }),
            (t.prototype.BIsEmbeddedBroadcastHidden = function() {
              return Boolean(this.m_bHideBroadcast);
            }),
            (t.prototype.GetSettings = function() {
              return this.m_settings;
            }),
            (t.prototype.GetConcurrentStreams = function() {
              return this.m_streams ? this.m_streams.length : 0;
            }),
            (t.prototype.GetChatVisibility = function() {
              return this.m_chatVisibility;
            }),
            (t.prototype.ToggleChatVisibility = function() {
              "remove" !== this.m_chatVisibility &&
                (this.m_chatVisibility =
                  "hide" === this.GetChatVisibility() ? "show" : "hide");
            }),
            (t.prototype.HintLoadEmbeddablePreviewStreams = function(o) {
              return Object(a.b)(this, void 0, void 0, function() {
                var e, n, r;
                return Object(a.e)(this, function(t) {
                  switch (t.label) {
                    case 0:
                      (this.m_settings = o),
                        (e = null),
                        (n = {
                          eventid: o.event ? o.event.GID : void 0,
                          previewAccounts: Boolean(o.bIsPreview && o.accountIDs)
                            ? o.accountIDs.join(",")
                            : void 0
                        }),
                        (t.label = 1);
                    case 1:
                      return (
                        t.trys.push([1, 3, , 4]),
                        [
                          4,
                          s.a.get(
                            c.c.STORE_BASE_URL +
                              "broadcast/ajaxgetstreamersforpreview",
                            { params: n }
                          )
                        ]
                      );
                    case 2:
                      return (e = t.sent()), [3, 4];
                    case 3:
                      return (r = t.sent()), console.error(r), [3, 4];
                    case 4:
                      return [2, this.HandleHintLoadBroadcastResponse(e)];
                  }
                });
              });
            }),
            (t.prototype.HintLoadEmbeddableStreams = function(o) {
              return Object(a.b)(this, void 0, void 0, function() {
                var e, n, r;
                return Object(a.e)(this, function(t) {
                  switch (t.label) {
                    case 0:
                      (this.m_settings = o),
                        (e = null),
                        (n = {
                          appid: o.appid,
                          promotionname: o.bIsPreview
                            ? "preview"
                            : o.promotionname,
                          clanid: o.clanid
                            ? o.clanid
                            : o.event
                            ? o.event.clanSteamID.GetAccountID()
                            : void 0,
                          listid: o.listid,
                          subid: o.subid,
                          bundleid: o.bundleid,
                          eventid: o.event ? o.event.GID : void 0,
                          previewAccounts: Boolean(o.bIsPreview && o.accountIDs)
                            ? o.accountIDs.join(",")
                            : void 0,
                          test: !1,
                          cc: c.c.COUNTRY,
                          l: c.c.LANGUAGE
                        }),
                        (t.label = 1);
                    case 1:
                      return (
                        t.trys.push([1, 3, , 4]),
                        [
                          4,
                          s.a.get(
                            c.c.STORE_BASE_URL +
                              "broadcast/ajaxgetstreamersforpage",
                            { params: n }
                          )
                        ]
                      );
                    case 2:
                      return (e = t.sent()), [3, 4];
                    case 3:
                      return (r = t.sent()), console.error(r), [3, 4];
                    case 4:
                      return [2, this.HandleHintLoadBroadcastResponse(e)];
                  }
                });
              });
            }),
            (t.prototype.HandleHintLoadBroadcastResponse = function(r) {
              return Object(a.b)(this, void 0, void 0, function() {
                var e, n;
                return Object(a.e)(this, function(t) {
                  switch (t.label) {
                    case 0:
                      return r
                        ? ((this.m_mapDynamicStoreData = r.data.rgAppData),
                          (e = !1),
                          (r &&
                            r.data &&
                            r.data.filtered &&
                            r.data.filtered.length) ||
                            !this.m_settings.bIsPreview ||
                            ((r.data = {
                              filtered: [{}],
                              success: 1,
                              total_count: 1,
                              err_msg: "",
                              broadcast_chat_visibility: "hide",
                              rgAppData: null
                            }),
                            (e = !0)),
                          (this.m_streams = r.data.filtered),
                          (n = this.GetPrimaryStream()),
                          r.data.broadcast_chat_visibility &&
                            (this.m_chatVisibility =
                              r.data.broadcast_chat_visibility),
                          e
                            ? [2, (this.m_playReadyStream = n)]
                            : n
                            ? [4, this.AttemptToPlayStream(n)]
                            : [3, 2])
                        : [2, null];
                    case 1:
                      t.sent(), (t.label = 2);
                    case 2:
                      return [2, n];
                  }
                });
              });
            }),
            (t.prototype.AttemptToPlayStream = function(o) {
              return Object(a.b)(this, void 0, void 0, function() {
                var e, n, r;
                return Object(a.e)(this, function(t) {
                  switch (t.label) {
                    case 0:
                      (e = null),
                        (n = new URLSearchParams()).append(
                          "broadcastaccountid",
                          "" + o.accountid
                        ),
                        (t.label = 1);
                    case 1:
                      return (
                        t.trys.push([1, 3, , 4]),
                        [
                          4,
                          s.a.post(
                            c.c.STORE_BASE_URL + "broadcast/ajaxcheckbroadcast",
                            n
                          )
                        ]
                      );
                    case 2:
                      return (e = t.sent()), [3, 4];
                    case 3:
                      return (r = t.sent()), console.error(r), [3, 4];
                    case 4:
                      return (
                        1 == e.data.success &&
                          ((o.steamid = e.data.steamid),
                          (this.m_playReadyStream = o),
                          (this.m_settings.appid || this.m_settings.event) &&
                            "remove" !== this.m_chatVisibility &&
                            (1 < this.GetConcurrentStreams()
                              ? (this.m_chatVisibility = "hide")
                              : (this.m_chatVisibility = o.chat_visibility)),
                          m(o.appid, 1, o.snr)),
                        [2, o]
                      );
                  }
                });
              });
            }),
            (t.prototype.GetAppDetailsForBroadcast = function(n) {
              return Object(a.b)(this, void 0, void 0, function() {
                var e;
                return Object(a.e)(this, function(t) {
                  switch (t.label) {
                    case 0:
                      return (
                        (e = n.appid), [4, u.a.EnsureStoreCapsuleInfoLoaded(e)]
                      );
                    case 1:
                      return [2, t.sent().GetAppStoreData()];
                  }
                });
              });
            }),
            (t.prototype.GetPrimaryStream = function() {
              return this.m_streams && 0 < this.m_streams.length
                ? this.m_streams[0].is_primary_stream ||
                  570 === Number(this.m_settings.appid)
                  ? this.m_streams[0]
                  : this.GetRandomStream()
                : null;
            }),
            (t.prototype.GetRandomStream = function() {
              if (this.m_streams && 0 < this.m_streams.length) {
                var t = Math.floor(Math.random() * this.m_streams.length);
                return this.m_streams[t];
              }
              return null;
            }),
            (t.prototype.GetStreams = function() {
              return this.m_streams;
            }),
            (t.prototype.GetBroadcastURL = function(t) {
              var e = null;
              return (
                (e = t.steamid
                  ? new r.a(t.steamid)
                  : r.a.InitFromAccountID(t.accountid)),
                c.c.COMMUNITY_BASE_URL +
                  "broadcast/watch/" +
                  e.ConvertTo64BitString()
              );
            }),
            (t.prototype.BIsAppStreaming = function(e) {
              return (
                Boolean(this.m_streams) &&
                this.m_streams.some(function(t) {
                  return Number(t.appid) === e;
                })
              );
            }),
            Object(a.c)(
              [i.observable],
              t.prototype,
              "m_mapDynamicStoreData",
              void 0
            ),
            Object(a.c)([i.observable], t.prototype, "m_streams", void 0),
            Object(a.c)(
              [i.observable],
              t.prototype,
              "m_playReadyStream",
              void 0
            ),
            Object(a.c)([i.observable], t.prototype, "m_mapAppToInfo", void 0),
            Object(a.c)([i.observable], t.prototype, "m_settings", void 0),
            Object(a.c)(
              [i.observable],
              t.prototype,
              "m_chatVisibility",
              void 0
            ),
            Object(a.c)(
              [i.observable],
              t.prototype,
              "m_bHideBroadcast",
              void 0
            ),
            Object(a.c)(
              [i.action],
              t.prototype,
              "HintLoadEmbeddablePreviewStreams",
              null
            ),
            Object(a.c)(
              [i.action],
              t.prototype,
              "HintLoadEmbeddableStreams",
              null
            ),
            Object(a.c)([i.action], t.prototype, "AttemptToPlayStream", null),
            Object(a.c)(
              [i.action],
              t.prototype,
              "GetAppDetailsForBroadcast",
              null
            ),
            t
          );
        })();
      function m(n, r, o) {
        return Object(a.b)(this, void 0, void 0, function() {
          var e;
          return Object(a.e)(this, function(t) {
            return (
              0 < n &&
                7 != n &&
                o &&
                ((e = new URLSearchParams()).append("page_action", "" + r),
                e.append("snr", o),
                s.a.post(
                  c.c.STORE_BASE_URL + "ajaxreportproductaction/" + n + "/",
                  e
                )),
              [2]
            );
          });
        });
      }
      var h = new d(),
        _ = new p.a();
    },
    nrKv: function(t, e, n) {
      "use strict";
      n.d(e, "b", function() {
        return i;
      }),
        n.d(e, "a", function() {
          return s;
        }),
        n.d(e, "c", function() {
          return c;
        });
      var r = n("mrSG"),
        a = n("q1tI"),
        o = n("r64O"),
        i = (function() {
          function t() {
            this.reactNodes = [];
          }
          return (
            (t.prototype.AppendText = function(t, e) {
              void 0 === e && (e = !1),
                t.length &&
                  (e
                    ? this.reactNodes.push(
                        a.createElement(
                          "span",
                          {
                            "data-copytext": "",
                            "data-copystyle": "merge-adjacent",
                            "bbcode-text": t
                          },
                          t
                        )
                      )
                    : this.reactNodes.push(t));
            }),
            (t.prototype.AppendNode = function(t) {
              this.reactNodes.push(t);
            }),
            (t.prototype.GetElements = function() {
              return this.reactNodes;
            }),
            t
          );
        })(),
        s = (function() {
          function t(t) {
            Object(o.a)(t, "decorated accumulator cannot be null"),
              (this.m_decoratedAccumulator = t);
          }
          return (
            (t.prototype.AppendText = function(t, e) {
              void 0 === e && (e = !1),
                this.m_decoratedAccumulator.AppendText(t, e);
            }),
            (t.prototype.AppendNode = function(t) {
              this.m_decoratedAccumulator.AppendNode(t);
            }),
            (t.prototype.GetElements = function() {
              return this.m_decoratedAccumulator.GetElements();
            }),
            t
          );
        })(),
        c = (function(i) {
          function t(t, e, n) {
            var r = i.call(this, t) || this;
            return (
              (r.m_nStartCursor = 1),
              (r.m_bDisableDataCopy = !1),
              (r.m_nStartCursor = void 0 !== e ? e : 1),
              (r.m_bDisableDataCopy = Boolean(n)),
              r
            );
          }
          return (
            Object(r.d)(t, i),
            (t.prototype.AppendText = function(t) {
              for (
                var e = this,
                  n = t,
                  r = [],
                  o = n.indexOf("\n", this.m_nStartCursor);
                -1 !== o;
                o = n.indexOf("\n")
              )
                r.push(n.substr(0, o)),
                  r.push(a.createElement("br")),
                  (n = n.substr(o + 1));
              n.length && r.push(n),
                r.forEach(function(t) {
                  i.prototype.AppendNode.call(e, t);
                });
            }),
            t
          );
        })(s);
    },
    oVVc: function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return r;
      }),
        n.d(e, "b", function() {
          return c;
        });
      var r,
        o,
        l = n("mrSG"),
        i = n("vDqi"),
        p = n.n(i),
        a = n("2vnA"),
        s = n("9f3B"),
        u = n("lkRc");
      ((o = r || (r = {}))[(o.k_eNone = 0)] = "k_eNone"),
        (o[(o.k_eSecond = 1)] = "k_eSecond"),
        (o[(o.k_eMinute = 2)] = "k_eMinute"),
        (o[(o.k_eHour = 3)] = "k_eHour"),
        (o[(o.k_eDay = 4)] = "k_eDay"),
        (o[(o.k_eWeek = 5)] = "k_eWeek"),
        (o[(o.k_eMonth = 6)] = "k_eMonth"),
        (o[(o.k_eYear = 7)] = "k_eYear");
      var d = (function() {
          function t(t) {
            (this.packageid = t.packageid),
              (this.enabled = t.enabled),
              (this.name = t.name),
              (this.header_image_url = t.header_image_url),
              (this.formatted_orig_price = t.formatted_orig_price),
              (this.formatted_final_price = t.formatted_final_price),
              (this.discount_percent = t.discount_percent),
              (this.appids = t.appids),
              (this.release_date = t.release_date),
              (this.available_windows = t.available_windows),
              (this.available_mac = t.available_mac),
              (this.available_linux = t.available_linux),
              (this.support_vrhmd = t.support_vrhmd),
              (this.support_vrhmd_only = t.support_vrhmd_only),
              (this.final_price_cents = t.final_price_cents),
              (this.renewal_package_id = t.renewal_package_id),
              (this.renewal_time_units = t.renewal_time_units),
              (this.renewal_time_amount = t.renewal_time_amount);
          }
          return (
            (t.prototype.GetHeaderImageDimension = function() {
              return this.header_image_url.includes("header_586x192")
                ? { width: 586, height: 192 }
                : { width: 292, height: 136 };
            }),
            t
          );
        })(),
        c = new ((function() {
          function t() {
            (this.m_mapPackageInfo = new Map()),
              (this.m_mapMissingPackages = new Map()),
              (this.m_mapInFlightPackages = new Set()),
              (this.m_bLoadedFromConfig = !1);
          }
          return (
            (t.prototype.LazyInit = function() {
              var e = this;
              if (!this.m_bLoadedFromConfig) {
                var t = Object(u.f)("packageinfo", "application_config");
                this.ValidateStoreDefault(t) &&
                  (("dev" != u.c.WEB_UNIVERSE && "beta" != u.c.WEB_UNIVERSE) ||
                    console.log(
                      "DEV_DEBUG: CPackageInfoStore loading bundles payload: " +
                        t.length
                    ),
                  Object(a.runInAction)(function() {
                    return t.forEach(function(t) {
                      return e.m_mapPackageInfo.set(
                        Number(t.packageid),
                        new d(t)
                      );
                    });
                  }));
                var n = Object(u.f)("bundleunknown", "application_config");
                Object(s.a)(n) &&
                  n.forEach(function(t) {
                    return e.m_mapMissingPackages.set(t, !0);
                  }),
                  (this.m_bLoadedFromConfig = !0);
              }
            }),
            (t.prototype.ValidateStoreDefault = function(t) {
              var e = t;
              return (
                !!(
                  e &&
                  Array.isArray(e) &&
                  0 < e.length &&
                  "object" == typeof e[0]
                ) &&
                ("number" == typeof e[0].packageid &&
                  "string" == typeof e[0].name)
              );
            }),
            (t.prototype.GetPackageInfo = function(t) {
              return this.LazyInit(), this.m_mapPackageInfo.get(t);
            }),
            (t.prototype.LoadPackageInfo = function(c) {
              return Object(l.b)(this, void 0, void 0, function() {
                var e,
                  n,
                  r,
                  o,
                  i,
                  a,
                  s = this;
                return Object(l.e)(this, function(t) {
                  switch (t.label) {
                    case 0:
                      return (
                        this.LazyInit(),
                        (e = []),
                        c.forEach(function(t) {
                          !t ||
                            s.m_mapPackageInfo.has(t) ||
                            s.m_mapMissingPackages.has(t) ||
                            s.m_mapInFlightPackages.has(t) ||
                            e.push(t);
                        }),
                        e.length
                          ? (e.sort(),
                            e.forEach(function(t) {
                              return s.m_mapInFlightPackages.add(t);
                            }),
                            [
                              4,
                              p.a.get(
                                u.c.STORE_BASE_URL +
                                  "actions/ajaxresolvepackages",
                                {
                                  params: {
                                    packageids: e.join(","),
                                    cc: u.c.COUNTRY || "US",
                                    l: u.c.LANGUAGE,
                                    origin: self.origin
                                  }
                                }
                              )
                            ])
                          : [3, 2]
                      );
                    case 1:
                      if (
                        ((n = t.sent()),
                        e.forEach(function(t) {
                          return s.m_mapInFlightPackages.delete(t);
                        }),
                        (r = n && n.data))
                      )
                        for (o = {}, i = 0; i < r.length; i++)
                          (a = r[i]),
                            o[a.appids.join(",")] ||
                              ((o[a.appids.join(",")] = 1),
                              this.m_mapPackageInfo.set(a.packageid, new d(a)));
                      t.label = 2;
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            Object(l.c)(
              [a.observable],
              t.prototype,
              "m_mapPackageInfo",
              void 0
            ),
            t
          );
        })())();
      window.g_PackageInfoStore = c;
    },
    "r+Z0": function(t, e, n) {
      "use strict";
      var r;
      n.r(e);
      function g(t, e, n) {
        null != t &&
          ("number" == typeof t
            ? this.fromNumber(t, e, n)
            : null == e && "string" != typeof t
            ? this.fromString(t, 256)
            : this.fromString(t, e));
      }
      function E() {
        return new g(null);
      }
      (r =
        "Microsoft Internet Explorer" == navigator.appName
          ? ((g.prototype.am = function(t, e, n, r, o, i) {
              for (var a = 32767 & e, s = e >> 15; 0 <= --i; ) {
                var c = 32767 & this[t],
                  l = this[t++] >> 15,
                  p = s * c + l * a;
                (o =
                  ((c =
                    a * c + ((32767 & p) << 15) + n[r] + (1073741823 & o)) >>>
                    30) +
                  (p >>> 15) +
                  s * l +
                  (o >>> 30)),
                  (n[r++] = 1073741823 & c);
              }
              return o;
            }),
            30)
          : "Netscape" != navigator.appName
          ? ((g.prototype.am = function(t, e, n, r, o, i) {
              for (; 0 <= --i; ) {
                var a = e * this[t++] + n[r] + o;
                (o = Math.floor(a / 67108864)), (n[r++] = 67108863 & a);
              }
              return o;
            }),
            26)
          : ((g.prototype.am = function(t, e, n, r, o, i) {
              for (var a = 16383 & e, s = e >> 14; 0 <= --i; ) {
                var c = 16383 & this[t],
                  l = this[t++] >> 14,
                  p = s * c + l * a;
                (o =
                  ((c = a * c + ((16383 & p) << 14) + n[r] + o) >> 28) +
                  (p >> 14) +
                  s * l),
                  (n[r++] = 268435455 & c);
              }
              return o;
            }),
            28)),
        (g.prototype.DB = r),
        (g.prototype.DM = (1 << r) - 1),
        (g.prototype.DV = 1 << r);
      (g.prototype.FV = Math.pow(2, 52)),
        (g.prototype.F1 = 52 - r),
        (g.prototype.F2 = 2 * r - 52);
      var o,
        i,
        a = "0123456789abcdefghijklmnopqrstuvwxyz",
        s = new Array();
      for (o = "0".charCodeAt(0), i = 0; i <= 9; ++i) s[o++] = i;
      for (o = "a".charCodeAt(0), i = 10; i < 36; ++i) s[o++] = i;
      for (o = "A".charCodeAt(0), i = 10; i < 36; ++i) s[o++] = i;
      function c(t) {
        return a.charAt(t);
      }
      function l(t, e) {
        var n = s[t.charCodeAt(e)];
        return null == n ? -1 : n;
      }
      function f(t) {
        var e = E();
        return e.fromInt(t), e;
      }
      function y(t) {
        var e,
          n = 1;
        return (
          0 != (e = t >>> 16) && ((t = e), (n += 16)),
          0 != (e = t >> 8) && ((t = e), (n += 8)),
          0 != (e = t >> 4) && ((t = e), (n += 4)),
          0 != (e = t >> 2) && ((t = e), (n += 2)),
          0 != (e = t >> 1) && ((t = e), (n += 1)),
          n
        );
      }
      function b(t) {
        this.m = t;
      }
      function v(t) {
        (this.m = t),
          (this.mp = t.invDigit()),
          (this.mpl = 32767 & this.mp),
          (this.mph = this.mp >> 15),
          (this.um = (1 << (t.DB - 15)) - 1),
          (this.mt2 = 2 * t.t);
      }
      function p(t, e) {
        return t & e;
      }
      function u(t, e) {
        return t | e;
      }
      function d(t, e) {
        return t ^ e;
      }
      function m(t, e) {
        return t & ~e;
      }
      function h(t) {
        if (0 == t) return -1;
        var e = 0;
        return (
          0 == (65535 & t) && ((t >>= 16), (e += 16)),
          0 == (255 & t) && ((t >>= 8), (e += 8)),
          0 == (15 & t) && ((t >>= 4), (e += 4)),
          0 == (3 & t) && ((t >>= 2), (e += 2)),
          0 == (1 & t) && ++e,
          e
        );
      }
      function _(t) {
        for (var e = 0; 0 != t; ) (t &= t - 1), ++e;
        return e;
      }
      function S() {}
      function C(t) {
        return t;
      }
      function O(t) {
        (this.r2 = E()),
          (this.q3 = E()),
          g.ONE.dlShiftTo(2 * t.t, this.r2),
          (this.mu = this.r2.divide(t)),
          (this.m = t);
      }
      (b.prototype.convert = function(t) {
        return t.s < 0 || 0 <= t.compareTo(this.m) ? t.mod(this.m) : t;
      }),
        (b.prototype.revert = function(t) {
          return t;
        }),
        (b.prototype.reduce = function(t) {
          t.divRemTo(this.m, null, t);
        }),
        (b.prototype.mulTo = function(t, e, n) {
          t.multiplyTo(e, n), this.reduce(n);
        }),
        (b.prototype.sqrTo = function(t, e) {
          t.squareTo(e), this.reduce(e);
        }),
        (v.prototype.convert = function(t) {
          var e = E();
          return (
            t.abs().dlShiftTo(this.m.t, e),
            e.divRemTo(this.m, null, e),
            t.s < 0 && 0 < e.compareTo(g.ZERO) && this.m.subTo(e, e),
            e
          );
        }),
        (v.prototype.revert = function(t) {
          var e = E();
          return t.copyTo(e), this.reduce(e), e;
        }),
        (v.prototype.reduce = function(t) {
          for (; t.t <= this.mt2; ) t[t.t++] = 0;
          for (var e = 0; e < this.m.t; ++e) {
            var n = 32767 & t[e],
              r =
                (n * this.mpl +
                  (((n * this.mph + (t[e] >> 15) * this.mpl) & this.um) <<
                    15)) &
                t.DM;
            for (
              t[(n = e + this.m.t)] += this.m.am(0, r, t, e, 0, this.m.t);
              t[n] >= t.DV;

            )
              (t[n] -= t.DV), t[++n]++;
          }
          t.clamp(),
            t.drShiftTo(this.m.t, t),
            0 <= t.compareTo(this.m) && t.subTo(this.m, t);
        }),
        (v.prototype.mulTo = function(t, e, n) {
          t.multiplyTo(e, n), this.reduce(n);
        }),
        (v.prototype.sqrTo = function(t, e) {
          t.squareTo(e), this.reduce(e);
        }),
        (g.prototype.copyTo = function(t) {
          for (var e = this.t - 1; 0 <= e; --e) t[e] = this[e];
          (t.t = this.t), (t.s = this.s);
        }),
        (g.prototype.fromInt = function(t) {
          (this.t = 1),
            (this.s = t < 0 ? -1 : 0),
            0 < t ? (this[0] = t) : t < -1 ? (this[0] = t + DV) : (this.t = 0);
        }),
        (g.prototype.fromString = function(t, e) {
          var n;
          if (16 == e) n = 4;
          else if (8 == e) n = 3;
          else if (256 == e) n = 8;
          else if (2 == e) n = 1;
          else if (32 == e) n = 5;
          else {
            if (4 != e) return void this.fromRadix(t, e);
            n = 2;
          }
          (this.t = 0), (this.s = 0);
          for (var r = t.length, o = !1, i = 0; 0 <= --r; ) {
            var a = 8 == n ? 255 & t[r] : l(t, r);
            a < 0
              ? "-" == t.charAt(r) && (o = !0)
              : ((o = !1),
                0 == i
                  ? (this[this.t++] = a)
                  : i + n > this.DB
                  ? ((this[this.t - 1] |=
                      (a & ((1 << (this.DB - i)) - 1)) << i),
                    (this[this.t++] = a >> (this.DB - i)))
                  : (this[this.t - 1] |= a << i),
                (i += n) >= this.DB && (i -= this.DB));
          }
          8 == n &&
            0 != (128 & t[0]) &&
            ((this.s = -1),
            0 < i && (this[this.t - 1] |= ((1 << (this.DB - i)) - 1) << i)),
            this.clamp(),
            o && g.ZERO.subTo(this, this);
        }),
        (g.prototype.clamp = function() {
          for (var t = this.s & this.DM; 0 < this.t && this[this.t - 1] == t; )
            --this.t;
        }),
        (g.prototype.dlShiftTo = function(t, e) {
          var n;
          for (n = this.t - 1; 0 <= n; --n) e[n + t] = this[n];
          for (n = t - 1; 0 <= n; --n) e[n] = 0;
          (e.t = this.t + t), (e.s = this.s);
        }),
        (g.prototype.drShiftTo = function(t, e) {
          for (var n = t; n < this.t; ++n) e[n - t] = this[n];
          (e.t = Math.max(this.t - t, 0)), (e.s = this.s);
        }),
        (g.prototype.lShiftTo = function(t, e) {
          var n,
            r = t % this.DB,
            o = this.DB - r,
            i = (1 << o) - 1,
            a = Math.floor(t / this.DB),
            s = (this.s << r) & this.DM;
          for (n = this.t - 1; 0 <= n; --n)
            (e[n + a + 1] = (this[n] >> o) | s), (s = (this[n] & i) << r);
          for (n = a - 1; 0 <= n; --n) e[n] = 0;
          (e[a] = s), (e.t = this.t + a + 1), (e.s = this.s), e.clamp();
        }),
        (g.prototype.rShiftTo = function(t, e) {
          e.s = this.s;
          var n = Math.floor(t / this.DB);
          if (n >= this.t) e.t = 0;
          else {
            var r = t % this.DB,
              o = this.DB - r,
              i = (1 << r) - 1;
            e[0] = this[n] >> r;
            for (var a = n + 1; a < this.t; ++a)
              (e[a - n - 1] |= (this[a] & i) << o), (e[a - n] = this[a] >> r);
            0 < r && (e[this.t - n - 1] |= (this.s & i) << o),
              (e.t = this.t - n),
              e.clamp();
          }
        }),
        (g.prototype.subTo = function(t, e) {
          for (var n = 0, r = 0, o = Math.min(t.t, this.t); n < o; )
            (r += this[n] - t[n]), (e[n++] = r & this.DM), (r >>= this.DB);
          if (t.t < this.t) {
            for (r -= t.s; n < this.t; )
              (r += this[n]), (e[n++] = r & this.DM), (r >>= this.DB);
            r += this.s;
          } else {
            for (r += this.s; n < t.t; )
              (r -= t[n]), (e[n++] = r & this.DM), (r >>= this.DB);
            r -= t.s;
          }
          (e.s = r < 0 ? -1 : 0),
            r < -1 ? (e[n++] = this.DV + r) : 0 < r && (e[n++] = r),
            (e.t = n),
            e.clamp();
        }),
        (g.prototype.multiplyTo = function(t, e) {
          var n = this.abs(),
            r = t.abs(),
            o = n.t;
          for (e.t = o + r.t; 0 <= --o; ) e[o] = 0;
          for (o = 0; o < r.t; ++o) e[o + n.t] = n.am(0, r[o], e, o, 0, n.t);
          (e.s = 0), e.clamp(), this.s != t.s && g.ZERO.subTo(e, e);
        }),
        (g.prototype.squareTo = function(t) {
          for (var e = this.abs(), n = (t.t = 2 * e.t); 0 <= --n; ) t[n] = 0;
          for (n = 0; n < e.t - 1; ++n) {
            var r = e.am(n, e[n], t, 2 * n, 0, 1);
            (t[n + e.t] += e.am(
              n + 1,
              2 * e[n],
              t,
              2 * n + 1,
              r,
              e.t - n - 1
            )) >= e.DV && ((t[n + e.t] -= e.DV), (t[n + e.t + 1] = 1));
          }
          0 < t.t && (t[t.t - 1] += e.am(n, e[n], t, 2 * n, 0, 1)),
            (t.s = 0),
            t.clamp();
        }),
        (g.prototype.divRemTo = function(t, e, n) {
          var r = t.abs();
          if (!(r.t <= 0)) {
            var o = this.abs();
            if (o.t < r.t)
              return (
                null != e && e.fromInt(0), void (null != n && this.copyTo(n))
              );
            null == n && (n = E());
            var i = E(),
              a = this.s,
              s = t.s,
              c = this.DB - y(r[r.t - 1]);
            0 < c
              ? (r.lShiftTo(c, i), o.lShiftTo(c, n))
              : (r.copyTo(i), o.copyTo(n));
            var l = i.t,
              p = i[l - 1];
            if (0 != p) {
              var u = p * (1 << this.F1) + (1 < l ? i[l - 2] >> this.F2 : 0),
                d = this.FV / u,
                m = (1 << this.F1) / u,
                h = 1 << this.F2,
                _ = n.t,
                f = _ - l,
                b = null == e ? E() : e;
              for (
                i.dlShiftTo(f, b),
                  0 <= n.compareTo(b) && ((n[n.t++] = 1), n.subTo(b, n)),
                  g.ONE.dlShiftTo(l, b),
                  b.subTo(i, i);
                i.t < l;

              )
                i[i.t++] = 0;
              for (; 0 <= --f; ) {
                var v =
                  n[--_] == p
                    ? this.DM
                    : Math.floor(n[_] * d + (n[_ - 1] + h) * m);
                if ((n[_] += i.am(0, v, n, f, 0, l)) < v)
                  for (i.dlShiftTo(f, b), n.subTo(b, n); n[_] < --v; )
                    n.subTo(b, n);
              }
              null != e && (n.drShiftTo(l, e), a != s && g.ZERO.subTo(e, e)),
                (n.t = l),
                n.clamp(),
                0 < c && n.rShiftTo(c, n),
                a < 0 && g.ZERO.subTo(n, n);
            }
          }
        }),
        (g.prototype.invDigit = function() {
          if (this.t < 1) return 0;
          var t = this[0];
          if (0 == (1 & t)) return 0;
          var e = 3 & t;
          return 0 <
            (e =
              ((e =
                ((e =
                  ((e = (e * (2 - (15 & t) * e)) & 15) * (2 - (255 & t) * e)) &
                  255) *
                  (2 - (((65535 & t) * e) & 65535))) &
                65535) *
                (2 - ((t * e) % this.DV))) %
              this.DV)
            ? this.DV - e
            : -e;
        }),
        (g.prototype.isEven = function() {
          return 0 == (0 < this.t ? 1 & this[0] : this.s);
        }),
        (g.prototype.exp = function(t, e) {
          if (4294967295 < t || t < 1) return g.ONE;
          var n = E(),
            r = E(),
            o = e.convert(this),
            i = y(t) - 1;
          for (o.copyTo(n); 0 <= --i; )
            if ((e.sqrTo(n, r), 0 < (t & (1 << i)))) e.mulTo(r, o, n);
            else {
              var a = n;
              (n = r), (r = a);
            }
          return e.revert(n);
        }),
        (g.prototype.toString = function(t) {
          if (this.s < 0) return "-" + this.negate().toString(t);
          var e;
          if (16 == t) e = 4;
          else if (8 == t) e = 3;
          else if (2 == t) e = 1;
          else if (32 == t) e = 5;
          else {
            if (4 != t) return this.toRadix(t);
            e = 2;
          }
          var n,
            r = (1 << e) - 1,
            o = !1,
            i = "",
            a = this.t,
            s = this.DB - ((a * this.DB) % e);
          if (0 < a--)
            for (
              s < this.DB && 0 < (n = this[a] >> s) && ((o = !0), (i = c(n)));
              0 <= a;

            )
              s < e
                ? ((n = (this[a] & ((1 << s) - 1)) << (e - s)),
                  (n |= this[--a] >> (s += this.DB - e)))
                : ((n = (this[a] >> (s -= e)) & r),
                  s <= 0 && ((s += this.DB), --a)),
                0 < n && (o = !0),
                o && (i += c(n));
          return o ? i : "0";
        }),
        (g.prototype.negate = function() {
          var t = E();
          return g.ZERO.subTo(this, t), t;
        }),
        (g.prototype.abs = function() {
          return this.s < 0 ? this.negate() : this;
        }),
        (g.prototype.compareTo = function(t) {
          var e = this.s - t.s;
          if (0 != e) return e;
          var n = this.t;
          if (0 != (e = n - t.t)) return e;
          for (; 0 <= --n; ) if (0 != (e = this[n] - t[n])) return e;
          return 0;
        }),
        (g.prototype.bitLength = function() {
          return this.t <= 0
            ? 0
            : this.DB * (this.t - 1) + y(this[this.t - 1] ^ (this.s & this.DM));
        }),
        (g.prototype.mod = function(t) {
          var e = E();
          return (
            this.abs().divRemTo(t, null, e),
            this.s < 0 && 0 < e.compareTo(g.ZERO) && t.subTo(e, e),
            e
          );
        }),
        (g.prototype.modPowInt = function(t, e) {
          var n;
          return (
            (n = t < 256 || e.isEven() ? new b(e) : new v(e)), this.exp(t, n)
          );
        }),
        (g.ZERO = f(0)),
        (g.ONE = f(1)),
        (S.prototype.convert = C),
        (S.prototype.revert = C),
        (S.prototype.mulTo = function(t, e, n) {
          t.multiplyTo(e, n);
        }),
        (S.prototype.sqrTo = function(t, e) {
          t.squareTo(e);
        }),
        (O.prototype.convert = function(t) {
          if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
          if (t.compareTo(this.m) < 0) return t;
          var e = E();
          return t.copyTo(e), this.reduce(e), e;
        }),
        (O.prototype.revert = function(t) {
          return t;
        }),
        (O.prototype.reduce = function(t) {
          for (
            t.drShiftTo(this.m.t - 1, this.r2),
              t.t > this.m.t + 1 && ((t.t = this.m.t + 1), t.clamp()),
              this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
              this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
            t.compareTo(this.r2) < 0;

          )
            t.dAddOffset(1, this.m.t + 1);
          for (t.subTo(this.r2, t); 0 <= t.compareTo(this.m); )
            t.subTo(this.m, t);
        }),
        (O.prototype.mulTo = function(t, e, n) {
          t.multiplyTo(e, n), this.reduce(n);
        }),
        (O.prototype.sqrTo = function(t, e) {
          t.squareTo(e), this.reduce(e);
        });
      var A = [
          2,
          3,
          5,
          7,
          11,
          13,
          17,
          19,
          23,
          29,
          31,
          37,
          41,
          43,
          47,
          53,
          59,
          61,
          67,
          71,
          73,
          79,
          83,
          89,
          97,
          101,
          103,
          107,
          109,
          113,
          127,
          131,
          137,
          139,
          149,
          151,
          157,
          163,
          167,
          173,
          179,
          181,
          191,
          193,
          197,
          199,
          211,
          223,
          227,
          229,
          233,
          239,
          241,
          251,
          257,
          263,
          269,
          271,
          277,
          281,
          283,
          293,
          307,
          311,
          313,
          317,
          331,
          337,
          347,
          349,
          353,
          359,
          367,
          373,
          379,
          383,
          389,
          397,
          401,
          409,
          419,
          421,
          431,
          433,
          439,
          443,
          449,
          457,
          461,
          463,
          467,
          479,
          487,
          491,
          499,
          503,
          509
        ],
        I = (1 << 26) / A[A.length - 1];
      (g.prototype.chunkSize = function(t) {
        return Math.floor((Math.LN2 * this.DB) / Math.log(t));
      }),
        (g.prototype.toRadix = function(t) {
          if ((null == t && (t = 10), 0 == this.signum() || t < 2 || 36 < t))
            return "0";
          var e = this.chunkSize(t),
            n = Math.pow(t, e),
            r = f(n),
            o = E(),
            i = E(),
            a = "";
          for (this.divRemTo(r, o, i); 0 < o.signum(); )
            (a = (n + i.intValue()).toString(t).substr(1) + a),
              o.divRemTo(r, o, i);
          return i.intValue().toString(t) + a;
        }),
        (g.prototype.fromRadix = function(t, e) {
          this.fromInt(0), null == e && (e = 10);
          for (
            var n = this.chunkSize(e),
              r = Math.pow(e, n),
              o = !1,
              i = 0,
              a = 0,
              s = 0;
            s < t.length;
            ++s
          ) {
            var c = l(t, s);
            c < 0
              ? "-" == t.charAt(s) && 0 == this.signum() && (o = !0)
              : ((a = e * a + c),
                ++i >= n &&
                  (this.dMultiply(r), this.dAddOffset(a, 0), (a = i = 0)));
          }
          0 < i && (this.dMultiply(Math.pow(e, i)), this.dAddOffset(a, 0)),
            o && g.ZERO.subTo(this, this);
        }),
        (g.prototype.fromNumber = function(t, e, n) {
          if ("number" == typeof e)
            if (t < 2) this.fromInt(1);
            else
              for (
                this.fromNumber(t, n),
                  this.testBit(t - 1) ||
                    this.bitwiseTo(g.ONE.shiftLeft(t - 1), u, this),
                  this.isEven() && this.dAddOffset(1, 0);
                !this.isProbablePrime(e);

              )
                this.dAddOffset(2, 0),
                  this.bitLength() > t &&
                    this.subTo(g.ONE.shiftLeft(t - 1), this);
          else {
            var r = new Array(),
              o = 7 & t;
            (r.length = 1 + (t >> 3)),
              e.nextBytes(r),
              0 < o ? (r[0] &= (1 << o) - 1) : (r[0] = 0),
              this.fromString(r, 256);
          }
        }),
        (g.prototype.bitwiseTo = function(t, e, n) {
          var r,
            o,
            i = Math.min(t.t, this.t);
          for (r = 0; r < i; ++r) n[r] = e(this[r], t[r]);
          if (t.t < this.t) {
            for (o = t.s & this.DM, r = i; r < this.t; ++r)
              n[r] = e(this[r], o);
            n.t = this.t;
          } else {
            for (o = this.s & this.DM, r = i; r < t.t; ++r) n[r] = e(o, t[r]);
            n.t = t.t;
          }
          (n.s = e(this.s, t.s)), n.clamp();
        }),
        (g.prototype.changeBit = function(t, e) {
          var n = g.ONE.shiftLeft(t);
          return this.bitwiseTo(n, e, n), n;
        }),
        (g.prototype.addTo = function(t, e) {
          for (var n = 0, r = 0, o = Math.min(t.t, this.t); n < o; )
            (r += this[n] + t[n]), (e[n++] = r & this.DM), (r >>= this.DB);
          if (t.t < this.t) {
            for (r += t.s; n < this.t; )
              (r += this[n]), (e[n++] = r & this.DM), (r >>= this.DB);
            r += this.s;
          } else {
            for (r += this.s; n < t.t; )
              (r += t[n]), (e[n++] = r & this.DM), (r >>= this.DB);
            r += t.s;
          }
          (e.s = r < 0 ? -1 : 0),
            0 < r ? (e[n++] = r) : r < -1 && (e[n++] = this.DV + r),
            (e.t = n),
            e.clamp();
        }),
        (g.prototype.dMultiply = function(t) {
          (this[this.t] = this.am(0, t - 1, this, 0, 0, this.t)),
            ++this.t,
            this.clamp();
        }),
        (g.prototype.dAddOffset = function(t, e) {
          for (; this.t <= e; ) this[this.t++] = 0;
          for (this[e] += t; this[e] >= this.DV; )
            (this[e] -= this.DV),
              ++e >= this.t && (this[this.t++] = 0),
              ++this[e];
        }),
        (g.prototype.multiplyLowerTo = function(t, e, n) {
          var r,
            o = Math.min(this.t + t.t, e);
          for (n.s = 0, n.t = o; 0 < o; ) n[--o] = 0;
          for (r = n.t - this.t; o < r; ++o)
            n[o + this.t] = this.am(0, t[o], n, o, 0, this.t);
          for (r = Math.min(t.t, e); o < r; ++o)
            this.am(0, t[o], n, o, 0, e - o);
          n.clamp();
        }),
        (g.prototype.multiplyUpperTo = function(t, e, n) {
          --e;
          var r = (n.t = this.t + t.t - e);
          for (n.s = 0; 0 <= --r; ) n[r] = 0;
          for (r = Math.max(e - this.t, 0); r < t.t; ++r)
            n[this.t + r - e] = this.am(e - r, t[r], n, 0, 0, this.t + r - e);
          n.clamp(), n.drShiftTo(1, n);
        }),
        (g.prototype.modInt = function(t) {
          if (t <= 0) return 0;
          var e = this.DV % t,
            n = this.s < 0 ? t - 1 : 0;
          if (0 < this.t)
            if (0 == e) n = this[0] % t;
            else
              for (var r = this.t - 1; 0 <= r; --r) n = (e * n + this[r]) % t;
          return n;
        }),
        (g.prototype.millerRabin = function(t) {
          var e = this.subtract(g.ONE),
            n = e.getLowestSetBit();
          if (n <= 0) return !1;
          var r = e.shiftRight(n);
          A.length < (t = (t + 1) >> 1) && (t = A.length);
          for (var o = E(), i = 0; i < t; ++i) {
            o.fromInt(A[i]);
            var a = o.modPow(r, this);
            if (0 != a.compareTo(g.ONE) && 0 != a.compareTo(e)) {
              for (var s = 1; s++ < n && 0 != a.compareTo(e); )
                if (0 == (a = a.modPowInt(2, this)).compareTo(g.ONE)) return !1;
              if (0 != a.compareTo(e)) return !1;
            }
          }
          return !0;
        }),
        (g.prototype.clone = function() {
          var t = E();
          return this.copyTo(t), t;
        }),
        (g.prototype.intValue = function() {
          if (this.s < 0) {
            if (1 == this.t) return this[0] - this.DV;
            if (0 == this.t) return -1;
          } else {
            if (1 == this.t) return this[0];
            if (0 == this.t) return 0;
          }
          return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
        }),
        (g.prototype.byteValue = function() {
          return 0 == this.t ? this.s : (this[0] << 24) >> 24;
        }),
        (g.prototype.shortValue = function() {
          return 0 == this.t ? this.s : (this[0] << 16) >> 16;
        }),
        (g.prototype.signum = function() {
          return this.s < 0
            ? -1
            : this.t <= 0 || (1 == this.t && this[0] <= 0)
            ? 0
            : 1;
        }),
        (g.prototype.toByteArray = function() {
          var t = this.t,
            e = new Array();
          e[0] = this.s;
          var n,
            r = this.DB - ((t * this.DB) % 8),
            o = 0;
          if (0 < t--)
            for (
              r < this.DB &&
              (n = this[t] >> r) != (this.s & this.DM) >> r &&
              (e[o++] = n | (this.s << (this.DB - r)));
              0 <= t;

            )
              r < 8
                ? ((n = (this[t] & ((1 << r) - 1)) << (8 - r)),
                  (n |= this[--t] >> (r += this.DB - 8)))
                : ((n = (this[t] >> (r -= 8)) & 255),
                  r <= 0 && ((r += this.DB), --t)),
                0 != (128 & n) && (n |= -256),
                0 == o && (128 & this.s) != (128 & n) && ++o,
                (0 < o || n != this.s) && (e[o++] = n);
          return e;
        }),
        (g.prototype.equals = function(t) {
          return 0 == this.compareTo(t);
        }),
        (g.prototype.min = function(t) {
          return this.compareTo(t) < 0 ? this : t;
        }),
        (g.prototype.max = function(t) {
          return 0 < this.compareTo(t) ? this : t;
        }),
        (g.prototype.and = function(t) {
          var e = E();
          return this.bitwiseTo(t, p, e), e;
        }),
        (g.prototype.or = function(t) {
          var e = E();
          return this.bitwiseTo(t, u, e), e;
        }),
        (g.prototype.xor = function(t) {
          var e = E();
          return this.bitwiseTo(t, d, e), e;
        }),
        (g.prototype.andNot = function(t) {
          var e = E();
          return this.bitwiseTo(t, m, e), e;
        }),
        (g.prototype.not = function() {
          for (var t = E(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
          return (t.t = this.t), (t.s = ~this.s), t;
        }),
        (g.prototype.shiftLeft = function(t) {
          var e = E();
          return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e;
        }),
        (g.prototype.shiftRight = function(t) {
          var e = E();
          return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e;
        }),
        (g.prototype.getLowestSetBit = function() {
          for (var t = 0; t < this.t; ++t)
            if (0 != this[t]) return t * this.DB + h(this[t]);
          return this.s < 0 ? this.t * this.DB : -1;
        }),
        (g.prototype.bitCount = function() {
          for (var t = 0, e = this.s & this.DM, n = 0; n < this.t; ++n)
            t += _(this[n] ^ e);
          return t;
        }),
        (g.prototype.testBit = function(t) {
          var e = Math.floor(t / this.DB);
          return e >= this.t
            ? 0 != this.s
            : 0 != (this[e] & (1 << t % this.DB));
        }),
        (g.prototype.setBit = function(t) {
          return this.changeBit(t, u);
        }),
        (g.prototype.clearBit = function(t) {
          return this.changeBit(t, m);
        }),
        (g.prototype.flipBit = function(t) {
          return this.changeBit(t, d);
        }),
        (g.prototype.add = function(t) {
          var e = E();
          return this.addTo(t, e), e;
        }),
        (g.prototype.subtract = function(t) {
          var e = E();
          return this.subTo(t, e), e;
        }),
        (g.prototype.multiply = function(t) {
          var e = E();
          return this.multiplyTo(t, e), e;
        }),
        (g.prototype.divide = function(t) {
          var e = E();
          return this.divRemTo(t, e, null), e;
        }),
        (g.prototype.remainder = function(t) {
          var e = E();
          return this.divRemTo(t, null, e), e;
        }),
        (g.prototype.divideAndRemainder = function(t) {
          var e = E(),
            n = E();
          return this.divRemTo(t, e, n), new Array(e, n);
        }),
        (g.prototype.modPow = function(t, e) {
          var n,
            r,
            o = t.bitLength(),
            i = f(1);
          if (o <= 0) return i;
          (n = o < 18 ? 1 : o < 48 ? 3 : o < 144 ? 4 : o < 768 ? 5 : 6),
            (r = o < 8 ? new b(e) : e.isEven() ? new O(e) : new v(e));
          var a = new Array(),
            s = 3,
            c = n - 1,
            l = (1 << n) - 1;
          if (((a[1] = r.convert(this)), 1 < n)) {
            var p = E();
            for (r.sqrTo(a[1], p); s <= l; )
              (a[s] = E()), r.mulTo(p, a[s - 2], a[s]), (s += 2);
          }
          var u,
            d,
            m = t.t - 1,
            h = !0,
            _ = E();
          for (o = y(t[m]) - 1; 0 <= m; ) {
            for (
              c <= o
                ? (u = (t[m] >> (o - c)) & l)
                : ((u = (t[m] & ((1 << (o + 1)) - 1)) << (c - o)),
                  0 < m && (u |= t[m - 1] >> (this.DB + o - c))),
                s = n;
              0 == (1 & u);

            )
              (u >>= 1), --s;
            if (((o -= s) < 0 && ((o += this.DB), --m), h))
              a[u].copyTo(i), (h = !1);
            else {
              for (; 1 < s; ) r.sqrTo(i, _), r.sqrTo(_, i), (s -= 2);
              0 < s ? r.sqrTo(i, _) : ((d = i), (i = _), (_ = d)),
                r.mulTo(_, a[u], i);
            }
            for (; 0 <= m && 0 == (t[m] & (1 << o)); )
              r.sqrTo(i, _),
                (d = i),
                (i = _),
                (_ = d),
                --o < 0 && ((o = this.DB - 1), --m);
          }
          return r.revert(i);
        }),
        (g.prototype.modInverse = function(t) {
          var e = t.isEven();
          if ((this.isEven() && e) || 0 == t.signum()) return g.ZERO;
          for (
            var n = t.clone(),
              r = this.clone(),
              o = f(1),
              i = f(0),
              a = f(0),
              s = f(1);
            0 != n.signum();

          ) {
            for (; n.isEven(); )
              n.rShiftTo(1, n),
                e
                  ? ((o.isEven() && i.isEven()) ||
                      (o.addTo(this, o), i.subTo(t, i)),
                    o.rShiftTo(1, o))
                  : i.isEven() || i.subTo(t, i),
                i.rShiftTo(1, i);
            for (; r.isEven(); )
              r.rShiftTo(1, r),
                e
                  ? ((a.isEven() && s.isEven()) ||
                      (a.addTo(this, a), s.subTo(t, s)),
                    a.rShiftTo(1, a))
                  : s.isEven() || s.subTo(t, s),
                s.rShiftTo(1, s);
            0 <= n.compareTo(r)
              ? (n.subTo(r, n), e && o.subTo(a, o), i.subTo(s, i))
              : (r.subTo(n, r), e && a.subTo(o, a), s.subTo(i, s));
          }
          return 0 != r.compareTo(g.ONE)
            ? g.ZERO
            : 0 <= s.compareTo(t)
            ? s.subtract(t)
            : s.signum() < 0
            ? (s.addTo(t, s), s.signum() < 0 ? s.add(t) : s)
            : s;
        }),
        (g.prototype.pow = function(t) {
          return this.exp(t, new S());
        }),
        (g.prototype.gcd = function(t) {
          var e = this.s < 0 ? this.negate() : this.clone(),
            n = t.s < 0 ? t.negate() : t.clone();
          if (e.compareTo(n) < 0) {
            var r = e;
            (e = n), (n = r);
          }
          var o = e.getLowestSetBit(),
            i = n.getLowestSetBit();
          if (i < 0) return e;
          for (
            o < i && (i = o), 0 < i && (e.rShiftTo(i, e), n.rShiftTo(i, n));
            0 < e.signum();

          )
            0 < (o = e.getLowestSetBit()) && e.rShiftTo(o, e),
              0 < (o = n.getLowestSetBit()) && n.rShiftTo(o, n),
              0 <= e.compareTo(n)
                ? (e.subTo(n, e), e.rShiftTo(1, e))
                : (n.subTo(e, n), n.rShiftTo(1, n));
          return 0 < i && n.lShiftTo(i, n), n;
        }),
        (g.prototype.isProbablePrime = function(t) {
          var e,
            n = this.abs();
          if (1 == n.t && n[0] <= A[A.length - 1]) {
            for (e = 0; e < A.length; ++e) if (n[0] == A[e]) return !0;
            return !1;
          }
          if (n.isEven()) return !1;
          for (e = 1; e < A.length; ) {
            for (var r = A[e], o = e + 1; o < A.length && r < I; ) r *= A[o++];
            for (r = n.modInt(r); e < o; ) if (r % A[e++] == 0) return !1;
          }
          return n.millerRabin(t);
        });
      var w = g,
        N = function(t, e) {
          (this.modulus = new w(t, 16)),
            (this.encryptionExponent = new w(e, 16));
        },
        T = {
          base64:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          encode: function(t) {
            if (!t) return !1;
            for (
              var e, n, r, o, i, a, s, c = "", l = 0;
              (o = (e = t.charCodeAt(l++)) >> 2),
                (i = ((3 & e) << 4) | ((n = t.charCodeAt(l++)) >> 4)),
                (a = ((15 & n) << 2) | ((r = t.charCodeAt(l++)) >> 6)),
                (s = 63 & r),
                isNaN(n) ? (a = s = 64) : isNaN(r) && (s = 64),
                (c +=
                  this.base64.charAt(o) +
                  this.base64.charAt(i) +
                  this.base64.charAt(a) +
                  this.base64.charAt(s)),
                l < t.length;

            );
            return c;
          },
          decode: function(t) {
            if (!t) return !1;
            t = t.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            for (
              var e, n, r, o, i = "", a = 0;
              (e = this.base64.indexOf(t.charAt(a++))),
                (n = this.base64.indexOf(t.charAt(a++))),
                (r = this.base64.indexOf(t.charAt(a++))),
                (o = this.base64.indexOf(t.charAt(a++))),
                (i += String.fromCharCode((e << 2) | (n >> 4))),
                64 != r &&
                  (i += String.fromCharCode(((15 & n) << 4) | (r >> 2))),
                64 != o && (i += String.fromCharCode(((3 & r) << 6) | o)),
                a < t.length;

            );
            return i;
          }
        },
        L = {
          hex: "0123456789abcdef",
          encode: function(t) {
            if (!t) return !1;
            for (
              var e, n = "", r = 0;
              (e = t.charCodeAt(r++)),
                (n += this.hex.charAt((e >> 4) & 15) + this.hex.charAt(15 & e)),
                r < t.length;

            );
            return n;
          },
          decode: function(t) {
            if (!t) return !1;
            t = t.replace(/[^0-9abcdef]/g, "");
            for (
              var e = "", n = 0;
              (e += String.fromCharCode(
                ((this.hex.indexOf(t.charAt(n++)) << 4) & 240) |
                  (15 & this.hex.indexOf(t.charAt(n++)))
              )),
                n < t.length;

            );
            return e;
          }
        },
        B = {
          getPublicKey: function(t, e) {
            return new N(t, e);
          },
          encrypt: function(t, e) {
            return (
              !!e &&
              (!!(t = this.pkcs1pad2(t, (e.modulus.bitLength() + 7) >> 3)) &&
                (!!(t = t.modPowInt(e.encryptionExponent, e.modulus)) &&
                  (1 == (1 & (t = t.toString(16)).length) && (t = "0" + t),
                  T.encode(L.decode(t)))))
            );
          },
          pkcs1pad2: function(t, e) {
            if (e < t.length + 11) return null;
            for (var n = [], r = t.length - 1; 0 <= r && 0 < e; )
              n[--e] = t.charCodeAt(r--);
            for (n[--e] = 0; 2 < e; )
              n[--e] = Math.floor(254 * Math.random()) + 1;
            return (n[--e] = 2), (n[--e] = 0), new w(n);
          }
        };
      e.default = B;
    },
    rcgg: function(t, e, n) {
      t.exports = {
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
    uIWk: function(t, e, n) {
      "use strict";
      var a = n("mrSG"),
        r = n("vDqi"),
        s = n.n(r),
        o = n("2vnA"),
        c = n("lkRc"),
        l = (function() {
          function t(t) {
            (this.m_appidList = new Array()),
              (this.m_socialList = new Array()),
              (this.m_strName = ""),
              (this.m_strAvatarURLFullSize = ""),
              (this.m_strTagLineLoc = ""),
              (this.m_nFollowers = 0),
              (this.m_strVanity = ""),
              (this.m_webLink = void 0),
              (this.m_bIsLoaded = !1),
              (this.m_bIsHidden = !1),
              (this.m_clanSteamID = t);
          }
          return (
            (t.prototype.Initialize = function(t) {
              var e = this;
              (this.m_strName = t.name || ""),
                (this.m_strAvatarURLFullSize =
                  t.avatar_url_full_size ||
                  "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"),
                t.social &&
                  t.social.forEach(function(t) {
                    return e.m_socialList.push(t);
                  }),
                (this.m_strTagLineLoc = t.tag_line_localized || ""),
                (this.m_nFollowers = t.followers || 0),
                (this.m_strVanity = t.vanity || void 0),
                (this.m_webLink = t.weblink),
                (this.m_bIsHidden = t.hidden || !1),
                t.appids &&
                  t.appids.forEach(function(t) {
                    return e.m_appidList.push(t);
                  }),
                (this.m_bIsLoaded = !0);
            }),
            (t.prototype.BIsLoaded = function() {
              return this.m_bIsLoaded;
            }),
            (t.prototype.GetClanSteamID = function() {
              return this.m_clanSteamID;
            }),
            (t.prototype.GetClanAccountID = function() {
              return this.m_clanSteamID.GetAccountID();
            }),
            (t.prototype.GetAppIDList = function() {
              return this.m_appidList;
            }),
            (t.prototype.GetSocialList = function() {
              return this.m_socialList;
            }),
            (t.prototype.GetName = function() {
              return this.m_strName;
            }),
            (t.prototype.GetAvatarURLFullSize = function() {
              return this.m_strAvatarURLFullSize;
            }),
            (t.prototype.GetTagLine = function() {
              return this.m_strTagLineLoc;
            }),
            (t.prototype.GetNumFollowers = function() {
              return this.m_nFollowers;
            }),
            (t.prototype.BIsHidden = function() {
              return this.m_bIsHidden;
            }),
            (t.prototype.GetURL = function(t) {
              if (this.m_strVanity) {
                switch (t) {
                  case "publisher":
                    return (
                      c.c.STORE_BASE_URL + "publisher/" + this.m_strVanity + "/"
                    );
                  case "franchise":
                    return (
                      c.c.STORE_BASE_URL + "franchise/" + this.m_strVanity + "/"
                    );
                }
                return (
                  c.c.STORE_BASE_URL + "developer/" + this.m_strVanity + "/"
                );
              }
              return (
                c.c.STORE_BASE_URL +
                "curator/" +
                this.m_clanSteamID.GetAccountID() +
                "/"
              );
            }),
            (t.prototype.BHasWebLink = function() {
              return void 0 !== this.m_webLink;
            }),
            (t.prototype.GetWebLink = function() {
              return this.m_webLink;
            }),
            (t.prototype.GetVanityString = function() {
              return this.m_strVanity;
            }),
            (t.prototype.AdjustFollower = function(t) {
              this.m_nFollowers += t;
            }),
            Object(a.c)([o.observable], t.prototype, "m_appidList", void 0),
            Object(a.c)([o.observable], t.prototype, "m_nFollowers", void 0),
            t
          );
        })(),
        p = n("kLLr");
      n.d(e, "a", function() {
        return i;
      });
      var i = new ((function() {
        function i() {
          (this.m_mapClanToCreatorHome = new Map()),
            (this.m_mapAppToCreatorIDList = new Map()),
            (this.m_bLoadedFromConfig = !1);
        }
        return (
          (i.prototype.LazyInit = function() {
            var o = this;
            if (!this.m_bLoadedFromConfig) {
              var t = Object(c.f)("creatorhome", "application_config");
              this.ValidateStoreDefault(t) &&
                t.forEach(function(t) {
                  var e = Number(t.creator_clan_id),
                    n = p.a.InitFromClanID(e),
                    r = new l(n);
                  r.Initialize(t),
                    (r.m_promise = i.GetAsPromise(r)),
                    o.m_mapClanToCreatorHome.set(e, r);
                });
              var e = Object(c.f)("creatorhomeforapp", "application_config");
              this.ValidateStoreDefaultAppList(e) &&
                e.forEach(function(t) {
                  o.m_mapAppToCreatorIDList.has(t.appid) ||
                    o.m_mapAppToCreatorIDList.set(t.appid, new Array()),
                    o.m_mapAppToCreatorIDList.get(t.appid).push(t);
                }),
                (this.m_bLoadedFromConfig = !0);
            }
          }),
          (i.GetAsPromise = function(e) {
            return Object(a.b)(this, void 0, void 0, function() {
              return Object(a.e)(this, function(t) {
                return [2, e];
              });
            });
          }),
          (i.prototype.ValidateStoreDefault = function(t) {
            var e = t;
            return (
              !!(
                e &&
                Array.isArray(e) &&
                0 < e.length &&
                "object" == typeof e[0]
              ) &&
              ("string" == typeof e[0].name &&
                ("string" == typeof e[0].creator_clan_id ||
                  "number" == typeof e[0].creator_clan_id))
            );
          }),
          (i.prototype.ValidateStoreDefaultAppList = function(t) {
            var e = t;
            return (
              !!(
                e &&
                Array.isArray(e) &&
                0 < e.length &&
                "object" == typeof e[0]
              ) &&
              ("number" == typeof e[0].clan_account_id &&
                0 < e[0].clan_account_id &&
                "number" == typeof e[0].appid &&
                0 < e[0].appid)
            );
          }),
          (i.prototype.BHasCreatorHomeLoaded = function(t) {
            return (
              this.m_mapClanToCreatorHome.has(t.GetAccountID()) &&
              this.m_mapClanToCreatorHome.get(t.GetAccountID()).BIsLoaded()
            );
          }),
          (i.prototype.GetCreatorHome = function(t) {
            return this.m_mapClanToCreatorHome.get(t.GetAccountID());
          }),
          (i.prototype.GetCreatorHomeByID = function(t) {
            return this.m_mapClanToCreatorHome.get(t.clan_account_id);
          }),
          (i.prototype.LoadCreatorHome = function(n, r) {
            return Object(a.b)(this, void 0, void 0, function() {
              var e;
              return Object(a.e)(this, function(t) {
                switch (t.label) {
                  case 0:
                    return (
                      this.LazyInit(),
                      this.m_mapClanToCreatorHome.has(n.GetAccountID())
                        ? [3, 2]
                        : (((e = new l(n)).m_promise = this.InternalCreatorHome(
                            e,
                            r
                          )),
                          [4, e.m_promise])
                    );
                  case 1:
                    t.sent(),
                      this.m_mapClanToCreatorHome.set(n.GetAccountID(), e),
                      (t.label = 2);
                  case 2:
                    return [
                      2,
                      this.m_mapClanToCreatorHome.get(n.GetAccountID())
                        .m_promise
                    ];
                }
              });
            });
          }),
          (i.prototype.InternalCreatorHome = function(o, i) {
            return Object(a.b)(this, void 0, void 0, function() {
              var e, n, r;
              return Object(a.e)(this, function(t) {
                switch (t.label) {
                  case 0:
                    return (
                      (e = {
                        get_appids: !0,
                        l: c.c.LANGUAGE,
                        origin: self.origin
                      }),
                      (n =
                        c.c.STORE_BASE_URL +
                        "curator/" +
                        o.GetClanAccountID() +
                        "/ajaxgetcreatorhomeinfo"),
                      [4, s.a.get(n, { params: e, cancelToken: i && i.token })]
                    );
                  case 1:
                    return (r = t.sent()), o.Initialize(r.data), [2, o];
                }
              });
            });
          }),
          (i.prototype.LoadCreatorHomeListForAppIncludeHiddden = function(
            o,
            i
          ) {
            return Object(a.b)(this, void 0, void 0, function() {
              var e, n, r;
              return Object(a.e)(this, function(t) {
                switch (t.label) {
                  case 0:
                    return (
                      this.LazyInit(),
                      this.m_mapAppToCreatorIDList.has(o)
                        ? [3, 2]
                        : ((e = { appid: o }),
                          (n =
                            c.c.STORE_BASE_URL +
                            "events/ajaxgetcreatorhomeidforapp"),
                          [
                            4,
                            s.a.get(n, {
                              params: e,
                              cancelToken: i && i.token,
                              withCredentials: !0
                            })
                          ])
                    );
                  case 1:
                    (r = t.sent()),
                      this.m_mapAppToCreatorIDList.set(o, r.data.creator_list),
                      (t.label = 2);
                  case 2:
                    return [2, this.m_mapAppToCreatorIDList.get(o)];
                }
              });
            });
          }),
          (i.prototype.GetCreatorHomeListForAppIncludeHidden = function(t) {
            return this.m_mapAppToCreatorIDList.has(t)
              ? this.m_mapAppToCreatorIDList.get(t)
              : [];
          }),
          Object(a.c)(
            [o.observable],
            i.prototype,
            "m_mapClanToCreatorHome",
            void 0
          ),
          Object(a.c)(
            [o.observable],
            i.prototype,
            "m_mapAppToCreatorIDList",
            void 0
          ),
          Object(a.c)([o.action], i.prototype, "LazyInit", null),
          i
        );
      })())();
      window.g_CreatorHomeStore = i;
    },
    vEGm: function(t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTM3OEVDNTUyMUM0MTFFNDgxN0ZEN0MzNjYzNzcxOTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTM3OEVDNTYyMUM0MTFFNDgxN0ZEN0MzNjYzNzcxOTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMzc4RUM1MzIxQzQxMUU0ODE3RkQ3QzM2NjM3NzE5NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMzc4RUM1NDIxQzQxMUU0ODE3RkQ3QzM2NjM3NzE5NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ps9jzFQAAACPSURBVHjaYvz//z+DkJDQdQYGhpsMCMAKxMZAHPXu3bt9cFGQYkFBwQ0gGoaBfAEgzgfibUDsBxNnYsAOfgKxJBBvAeIZMEEWZBVA52xA5gOdUAEUc8NQDBTkBEoGMOAByCYLAjUsRzM5AKtioMQzIEW0ydjcHIBTMSE3M0Ij5RKQfQ6HGiOgIXogBkCAAQDGVT+0v+n6EQAAAABJRU5ErkJggg==";
    },
    vv6K: function(t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC";
    },
    wUwH: function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return a;
      });
      var r = n("mrSG"),
        o = n("lkRc"),
        i = n("2vnA"),
        a = (function() {
          function t() {
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
            (t.GetEmoticonURL = function(t, e) {
              return e
                ? o.c.COMMUNITY_CDN_URL + "economy/emoticonlarge/" + t
                : o.c.COMMUNITY_CDN_URL + "economy/emoticon/" + t;
            }),
            (t.GetEmoticonReplaceRegex = function() {
              return t.sm_EmoticonRegex;
            }),
            (t.prototype.SearchEmoticons = function(e, l, n) {
              function p(t) {
                return t.name_normalized || t.name;
              }
              void 0 === l && (l = 25),
                void 0 === n && (n = !0),
                this.UpdateEmoticonList(),
                (e = e.toLocaleLowerCase());
              var t = this.recent_emoticons.filter(function(t) {
                  return !e || p(t).startsWith(e);
                }),
                r = this.recent_emoticons.filter(function(t) {
                  return !n && -1 !== p(t).indexOf(e);
                }),
                o = this.m_rgEmoticons.filter(function(t) {
                  return !e || p(t).startsWith(e);
                }),
                i = this.m_rgEmoticons.filter(function(t) {
                  return !n && -1 !== p(t).indexOf(e);
                }),
                u = new Set(),
                d = [];
              function a(t, e, n) {
                for (var r = 0, o = t; r < o.length; r++) {
                  var i = o[r];
                  if (
                    ((s = e),
                    (c = n((a = i))),
                    d.length >= l ||
                      (u.has(a) ||
                        (u.add(a), d.push({ name: p(a), recent: s, new: c })),
                      0))
                  )
                    break;
                }
                var a, s, c;
              }
              return (
                a(t, !0, function(t) {
                  return !(t.last_used || !t.time_received);
                }),
                a(o, !1, function() {
                  return !1;
                }),
                a(r, !0, function(t) {
                  return !(t.last_used || !t.time_received);
                }),
                a(i, !1, function() {
                  return !1;
                }),
                d
              );
            }),
            Object.defineProperty(t.prototype, "is_initialized", {
              get: function() {
                return this.m_bInitialized;
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.GetTimeReceivedNewestEmoticon = function() {
              return this.UpdateEmoticonList(), this.m_rtMostRecentEmoticon;
            }),
            (t.prototype.GetTimeReceivedForStickerOrEffect = function() {
              return this.m_rtLastStickerOrEffect;
            }),
            (t.prototype.UpdateEmoticonList = function() {
              this.m_bInitialized || this.RequestEmoticonList();
            }),
            Object.defineProperty(t.prototype, "emoticon_list", {
              get: function() {
                return this.UpdateEmoticonList(), this.m_rgEmoticons;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, "flair_list", {
              get: function() {
                return this.UpdateEmoticonList(), this.m_rgFlairs;
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.GetStickerList = function() {
              return this.m_rgStickers;
            }),
            (t.prototype.GetEffectList = function() {
              return this.m_rgEffects;
            }),
            (t.prototype.GetFlairListByGroupID = function(e) {
              return this.m_rgFlairs.filter(function(t) {
                return t.flairGroupID === e;
              });
            }),
            Object.defineProperty(t.prototype, "recent_emoticons", {
              get: function() {
                return (
                  void 0 === this.m_rgRecentEmoticons &&
                    this.BuildRecentEmoticonList(),
                  this.m_rgRecentEmoticons
                );
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.TrackEmoticonUsage = function(t, e) {
              if (this.m_bInitialized) {
                for (
                  var n, r = new Map(), o = /\[emoticon\]([^[]*)/g;
                  (n = o.exec(t));

                ) {
                  var i = r.get(n[1]) || 0;
                  r.set(n[1], i + 1);
                }
                var a = !1;
                if (r.size) {
                  if (void 0 !== this.m_rgRecentEmoticons)
                    for (
                      var s = 0, c = this.m_rgRecentEmoticons;
                      s < c.length;
                      s++
                    ) {
                      var l = c[s];
                      r.has(l.name) &&
                        ((l.last_used = e),
                        (l.use_count += r.get(l.name)),
                        r.delete(l.name),
                        l.time_received && ((a = !0), delete l.time_received));
                    }
                  if (r.size)
                    for (var p = 0, u = this.m_rgEmoticons; p < u.length; p++) {
                      l = u[p];
                      r.has(l.name) &&
                        ((l.last_used = e),
                        (l.use_count += r.get(l.name)),
                        delete l.time_received,
                        void 0 !== this.m_rgRecentEmoticons &&
                          this.m_rgRecentEmoticons.push(l));
                    }
                  if (
                    void 0 !== this.m_rgRecentEmoticons &&
                    (this.SortRecentEmoticons(), a)
                  ) {
                    this.m_rtMostRecentEmoticon = void 0;
                    for (
                      var d = 0, m = this.m_rgRecentEmoticons;
                      d < m.length;
                      d++
                    ) {
                      !(l = m[d]).last_used &&
                        l.time_received &&
                        (!this.m_rtMostRecentEmoticon ||
                          l.time_received > this.m_rtMostRecentEmoticon) &&
                        (this.m_rtMostRecentEmoticon = l.time_received);
                    }
                  }
                }
              }
            }),
            (t.prototype.RequestEmoticonList = function() {
              !this.m_bEmoticonListRequested &&
                this.BInitialized() &&
                ((this.m_bEmoticonListRequested = !0),
                this.RequestEmoticonListInternal());
            }),
            (t.prototype.BuildRecentEmoticonList = function() {
              this.m_rgRecentEmoticons = [];
              for (
                var t = this.GetServerTime() - 604800,
                  e = 0,
                  n = this.m_rgEmoticons;
                e < n.length;
                e++
              ) {
                var r = n[e];
                (r.last_used || (r.time_received && r.time_received > t)) &&
                  this.m_rgRecentEmoticons.push(r);
              }
              this.SortRecentEmoticons();
            }),
            (t.prototype.SortRecentEmoticons = function() {
              this.m_rgRecentEmoticons.sort(function(t, e) {
                return (
                  (e.last_used || e.time_received) -
                  (t.last_used || t.time_received)
                );
              }),
                (this.m_rgRecentEmoticons = this.m_rgRecentEmoticons.slice(
                  0,
                  50
                ));
            }),
            (t.prototype.OnEmoticonListReceived = function(t) {
              (this.m_rgFlairs = []),
                (this.m_rgEmoticons = []),
                (this.m_rgRecentEmoticons = void 0),
                (this.m_rtMostRecentEmoticon = void 0);
              for (
                var e = this.GetServerTime() - 604800, n = 0, r = t;
                n < r.length;
                n++
              ) {
                var o = r[n],
                  i = o.name;
                i.startsWith("^")
                  ? this.m_rgFlairs.push({
                      name: i.match(new RegExp(/:(.*):/))[1],
                      flairGroupID: i.match(new RegExp(/\^(.*)\^/))[1]
                    })
                  : (!o.last_used && o.time_received > e
                      ? (!this.m_rtMostRecentEmoticon ||
                          o.time_received > this.m_rtMostRecentEmoticon) &&
                        (this.m_rtMostRecentEmoticon = o.time_received)
                      : delete o.time_received,
                    this.m_rgEmoticons.push(o));
              }
              (this.m_bInitialized = !0), (this.m_bEmoticonListRequested = !1);
            }),
            (t.sm_EmoticonRegex = new RegExp("ː([a-zA-Z0-9_\\-]+)ː", "g")),
            Object(r.c)([i.observable], t.prototype, "m_bInitialized", void 0),
            Object(r.c)(
              [i.observable],
              t.prototype,
              "m_rtMostRecentEmoticon",
              void 0
            ),
            Object(r.c)(
              [i.observable],
              t.prototype,
              "m_rtLastStickerOrEffect",
              void 0
            ),
            Object(r.c)([i.action], t.prototype, "TrackEmoticonUsage", null),
            t
          );
        })();
    },
    wbSL: function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return i;
      }),
        n.d(e, "b", function() {
          return u;
        });
      var s = n("mrSG"),
        r = n("vDqi"),
        c = n.n(r),
        o = n("2vnA"),
        l = n("lkRc"),
        p = n("bDQf"),
        i = (function() {
          function t() {}
          return (
            (t.prototype.InitFrom = function(t) {
              (this.capsule_link = t.capsule_link),
                (this.title = t.title),
                (this.capsule = t.capsule),
                (this.tiny_capsule = t.tiny_capsule),
                (this.main_capsule = t.main_capsule),
                (this.type = t.type),
                (this.price = t.price),
                (this.orig_price = t.orig_price),
                (this.discount_percent = t.discount_percent),
                (this.subid = t.subid),
                (this.button_action = t.button_action),
                (this.cart_url = t.cart_url),
                (this.add_to_cart_url = t.add_to_cart_url),
                (this.app_to_run = t.app_to_run),
                (this.is_free = t.is_free),
                (this.required_age = t.required_age),
                (this.coming_soon = t.coming_soon),
                (this.appid = Number(t.appid)),
                (this.full_game_appid = Number(t.full_game_appid)),
                (this.tags = t.tags),
                (this.content_descriptors = t.content_descriptors),
                (this.available_windows = t.available_windows),
                (this.available_mac = t.available_mac),
                (this.available_linux = t.available_linux),
                (this.microtrailer = t.microtrailer),
                (this.microtrailer_mp4 = t.microtrailer_mp4),
                (this.support_vrhmd = t.support_vrhmd),
                (this.support_vrhmd_only = t.support_vrhmd_only);
            }),
            (t.prototype.GetCapsuleDimensions = function() {
              return { width: 460, height: 215 };
            }),
            (t.prototype.GetMainCapsuleDimensions = function() {
              return { width: 616, height: 353 };
            }),
            (t.prototype.GetTinyCapsuleDimensions = function() {
              return { width: 231, height: 87 };
            }),
            Object(s.c)([o.observable], t.prototype, "capsule_link", void 0),
            Object(s.c)([o.observable], t.prototype, "title", void 0),
            Object(s.c)([o.observable], t.prototype, "capsule", void 0),
            Object(s.c)([o.observable], t.prototype, "tiny_capsule", void 0),
            Object(s.c)([o.observable], t.prototype, "main_capsule", void 0),
            Object(s.c)([o.observable], t.prototype, "type", void 0),
            Object(s.c)([o.observable], t.prototype, "price", void 0),
            Object(s.c)([o.observable], t.prototype, "orig_price", void 0),
            Object(s.c)(
              [o.observable],
              t.prototype,
              "discount_percent",
              void 0
            ),
            Object(s.c)([o.observable], t.prototype, "subid", void 0),
            Object(s.c)([o.observable], t.prototype, "button_action", void 0),
            Object(s.c)([o.observable], t.prototype, "cart_url", void 0),
            Object(s.c)([o.observable], t.prototype, "add_to_cart_url", void 0),
            Object(s.c)([o.observable], t.prototype, "app_to_run", void 0),
            Object(s.c)([o.observable], t.prototype, "is_free", void 0),
            Object(s.c)([o.observable], t.prototype, "required_age", void 0),
            Object(s.c)([o.observable], t.prototype, "coming_soon", void 0),
            Object(s.c)([o.observable], t.prototype, "appid", void 0),
            Object(s.c)([o.observable], t.prototype, "full_game_appid", void 0),
            Object(s.c)([o.observable], t.prototype, "tags", void 0),
            Object(s.c)(
              [o.observable],
              t.prototype,
              "content_descriptors",
              void 0
            ),
            Object(s.c)(
              [o.observable],
              t.prototype,
              "available_windows",
              void 0
            ),
            Object(s.c)([o.observable], t.prototype, "available_mac", void 0),
            Object(s.c)([o.observable], t.prototype, "available_linux", void 0),
            Object(s.c)([o.observable], t.prototype, "microtrailer", void 0),
            Object(s.c)(
              [o.observable],
              t.prototype,
              "microtrailer_mp4",
              void 0
            ),
            Object(s.c)([o.observable], t.prototype, "support_vrhmd", void 0),
            Object(s.c)(
              [o.observable],
              t.prototype,
              "support_vrhmd_only",
              void 0
            ),
            t
          );
        })(),
        a = (function(n) {
          function t(t) {
            var e = n.call(this) || this;
            return (
              (e.appid = t),
              (e.success = 2),
              (e.title = ""),
              (e.screenshot = ""),
              (e.age_safe_screenshot = !1),
              (e.capsule_link = l.c.STORE_BASE_URL + "app/" + t),
              (e.creator_list = new Array()),
              (e.is_free = !1),
              (e.required_age = !1),
              (e.coming_soon = !1),
              (e.library_asset_setup_complete = !0),
              e
            );
          }
          return (
            Object(s.d)(t, n),
            (t.prototype.InitializeFrom = function(t) {
              (this.success = 1),
                (this.type = t.type),
                (this.capsule_link = t.capsule_link),
                (this.price = t.price),
                (this.discount_percent = t.discount_percent),
                (this.subid = t.subid),
                (this.button_action = t.button_action),
                (this.cart_url = t.cart_url),
                (this.add_to_cart_url = t.add_to_cart_url),
                (this.app_to_run = t.app_to_run),
                (this.is_free = t.is_free),
                (this.required_age = t.required_age),
                (this.coming_soon = t.coming_soon),
                (this.full_game_appid = t.full_game_appid),
                (this.title = t.title),
                (this.release = t.release),
                (this.short_desc = t.short_desc),
                (this.capsule = t.capsule),
                (this.tiny_capsule = t.tiny_capsule),
                (this.main_capsule = t.main_capsule),
                (this.screenshot = t.screenshot),
                (this.screenshot_list = t.screenshot_list),
                (this.age_safe_screenshot = t.age_safe_screenshot),
                (this.library_asset_setup_complete =
                  t.library_asset_setup_complete),
                (this.item_id = t.item_id),
                (this.icon_url = t.icon_url),
                (this.cover_image_asset_url = t.cover_image_asset_url),
                (this.tags = t.tags),
                (this.content_descriptors = t.content_descriptors),
                (this.available_windows = t.available_windows),
                (this.available_mac = t.available_mac),
                (this.available_linux = t.available_linux),
                (this.microtrailer = t.microtrailer),
                (this.microtrailer_mp4 = t.microtrailer_mp4),
                (this.support_vrhmd = t.support_vrhmd),
                (this.support_vrhmd_only = t.support_vrhmd_only),
                (this.languages = t.languages),
                (this.creator_list = new Array());
              var e = t.creator_list;
              if (e)
                for (var n = 0, r = e; n < r.length; n++) {
                  var o = r[n];
                  this.creator_list.push(o);
                }
              this.social = new Array();
              var i = t.social;
              if (i)
                for (var a = 0, s = i; a < s.length; a++) {
                  var c = s[a];
                  this.social.push(c);
                }
            }),
            Object(s.c)([o.observable], t.prototype, "success", void 0),
            Object(s.c)([o.observable], t.prototype, "release", void 0),
            Object(s.c)([o.observable], t.prototype, "short_desc", void 0),
            Object(s.c)([o.observable], t.prototype, "tiny_capsule", void 0),
            Object(s.c)([o.observable], t.prototype, "main_capsule", void 0),
            Object(s.c)([o.observable], t.prototype, "type", void 0),
            Object(s.c)([o.observable], t.prototype, "screenshot", void 0),
            Object(s.c)(
              [o.observable],
              t.prototype,
              "age_safe_screenshot",
              void 0
            ),
            Object(s.c)(
              [o.observable],
              t.prototype,
              "library_asset_setup_complete",
              void 0
            ),
            Object(s.c)([o.observable], t.prototype, "screenshot_list", void 0),
            Object(s.c)([o.observable], t.prototype, "social", void 0),
            Object(s.c)([o.observable], t.prototype, "creator_list", void 0),
            Object(s.c)([o.observable], t.prototype, "item_id", void 0),
            Object(s.c)([o.observable], t.prototype, "icon_url", void 0),
            Object(s.c)(
              [o.observable],
              t.prototype,
              "cover_image_asset_url",
              void 0
            ),
            Object(s.c)([o.observable], t.prototype, "microtrailer", void 0),
            Object(s.c)(
              [o.observable],
              t.prototype,
              "microtrailer_mp4",
              void 0
            ),
            Object(s.c)([o.observable], t.prototype, "support_vrhmd", void 0),
            Object(s.c)(
              [o.observable],
              t.prototype,
              "support_vrhmd_only",
              void 0
            ),
            Object(s.c)([o.observable], t.prototype, "languages", void 0),
            Object(s.c)([o.action], t.prototype, "InitializeFrom", null),
            t
          );
        })(i),
        u = (function() {
          function t(t, e) {
            (this.m_bLoaded = !1),
              (this.m_appid = t),
              (this.m_bLoaded = !1),
              (this.m_appStoreData = new a(t)),
              e && this.InitializeFrom(e);
          }
          return (
            (t.prototype.InitializeFrom = function(t) {
              this.m_appStoreData.InitializeFrom(t), (this.m_bLoaded = !0);
            }),
            (t.prototype.BIsLoaded = function() {
              return this.m_bLoaded;
            }),
            (t.prototype.GetAppStoreData = function() {
              return this.m_appStoreData;
            }),
            (t.prototype.HintLoadBroadcastAppData = function(e) {
              return (
                void 0 === e && (e = "steamtv"),
                Object(s.b)(this, void 0, void 0, function() {
                  return Object(s.e)(this, function(t) {
                    switch (t.label) {
                      case 0:
                        return this.m_loadingPromise
                          ? [3, 2]
                          : ((this.m_loadingPromise = this.InternalLoadBroadcastAppData(
                              e
                            )),
                            [4, this.m_loadingPromise]);
                      case 1:
                        t.sent(), (t.label = 2);
                      case 2:
                        return [2, this.m_loadingPromise];
                    }
                  });
                })
              );
            }),
            (t.prototype.InternalLoadBroadcastAppData = function(a) {
              return (
                void 0 === a && (a = "steamtv"),
                Object(s.b)(this, void 0, void 0, function() {
                  var e, n, r, o, i;
                  return Object(s.e)(this, function(t) {
                    switch (t.label) {
                      case 0:
                        if (this.m_bLoaded) return [3, 4];
                        (e = {
                          appid: this.m_appid,
                          feature: a,
                          cc: l.c.COUNTRY || "US",
                          l: l.c.LANGUAGE,
                          origin: self.origin
                        }),
                          (n =
                            l.c.STORE_BASE_URL +
                            "broadcast/ajaxgetappinfoforcap"),
                          (t.label = 1);
                      case 1:
                        return (
                          t.trys.push([1, 3, , 4]),
                          [4, c.a.get(n, { params: e })]
                        );
                      case 2:
                        return (r = t.sent()).data && 1 == r.data.success
                          ? (this.InitializeFrom(r.data), [3, 4])
                          : (console.log(
                              "AMS - failed to load store info about appid: " +
                                this.m_appid
                            ),
                            (this.m_appStoreData.success = r.data
                              ? r.data.success
                              : 2),
                            [2, this]);
                      case 3:
                        return (
                          (o = t.sent()),
                          (i = Object(p.a)(o)),
                          console.log(
                            "InternalLoadBroadcastAppData: calling ajaxgetappinfoforcap for appid " +
                              this.m_appid +
                              " failed with " +
                              i.strErrorMsg,
                            i
                          ),
                          [3, 4]
                        );
                      case 4:
                        return [2, this];
                    }
                  });
                })
              );
            }),
            Object(s.c)([o.observable], t.prototype, "m_bLoaded", void 0),
            Object(s.c)([o.observable], t.prototype, "m_appStoreData", void 0),
            t
          );
        })();
    }
  }
]);

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    "+d9t": function(e, t, n) {
      "use strict";
      n.d(t, "c", function() {
        return l;
      }),
        n.d(t, "a", function() {
          return p;
        }),
        n.d(t, "b", function() {
          return m;
        });
      var a = n("mrSG"),
        s = n("q1tI"),
        r = n("y+6m"),
        o = n("TLQK"),
        i = n("X3Ds"),
        c = n("TtDX");
      function l(e, t) {
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
      function p(e) {
        var t =
            "undefined" != typeof SteamClient &&
            void 0 !== SteamClient.SharedConnection,
          n = e.bDisableContextMenu,
          r = e.onContextMenu,
          o = e.href,
          i = Object(a.f)(e, ["bDisableContextMenu", "onContextMenu", "href"]);
        return (
          t && !o.startsWith("steam://") && (o = "steam://openurl/" + o),
          n || r || (r = d),
          s.createElement(
            "a",
            Object(a.a)({}, i, {
              href: o,
              target: "_blank",
              rel: "noopener noreferrer",
              onContextMenu: r
            }),
            e.children
          )
        );
      }
      function u(e) {
        var t = e.strURL,
          n = e.unPID;
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            r.d,
            {
              onSelected: function() {
                i.i(t);
              }
            },
            Object(o.d)("#ContextMenu_CopyLinkURL")
          ),
          s.createElement(
            r.d,
            {
              onSelected: function(e) {
                m(e, t, { unPID: n });
              }
            },
            Object(o.d)("#ContextMenu_OpenLinkInNewWindow")
          )
        );
      }
      function d(e, t) {
        var n = e.currentTarget;
        return Object(c.a)(
          s.createElement(
            r.c,
            null,
            s.createElement(u, { strURL: n.href, unPID: t })
          ),
          e
        );
      }
      function m(e, t, n) {
        void 0 === n && (n = {});
        var r,
          o = n.bForceExternal,
          i = n.unPID;
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
                "menubar,location,resizable,scrollbars,status,noopener"
              );
      }
    },
    "0OaU": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return l;
      });
      var r = n("mrSG"),
        o = n("q1tI"),
        i = n.n(o),
        a = n("6Y59"),
        s = n("2i24"),
        c = n.n(s),
        l = (function(t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          return (
            Object(r.d)(e, t),
            (e.prototype.AddSizeClass = function(e) {
              "small" == this.props.size
                ? e.push(c.a.throbber_small)
                : "medium" == this.props.size
                ? e.push(c.a.throbber_medium)
                : "xlarge" == this.props.size
                ? e.push(c.a.throbber_xlarge)
                : "xxlarge" == this.props.size
                ? e.push(c.a.throbber_xxlarge)
                : e.push(c.a.throbber_large);
            }),
            (e.prototype.render = function() {
              var e = [c.a.LoadingWrapper, "SteamLogoThrobber"];
              this.AddSizeClass(e),
                void 0 === this.props.string && e.push(c.a.noString),
                this.props.className && e.push(this.props.className),
                this.props.static && e.push(c.a.Static);
              var t = i.a.createElement(
                "div",
                { className: e.join(" ") },
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
                t,
                Boolean(this.props.string) &&
                  i.a.createElement(
                    "div",
                    { className: c.a.ThrobberText },
                    this.props.string
                  )
              );
            }),
            e
          );
        })(i.a.PureComponent);
    },
    "0QoN": function(e, t, n) {
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
        f = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.OnEmoticonClick = function(e) {
              var t = this.props,
                n = (t.emoticonStore, t.SetUIDisplayPref),
                r = t.contextOptions;
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
                  e,
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
              return !e || e < _ || (t && (!e || e < t));
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.disabled,
                n = e.className,
                r = e.ttip,
                o = e.useImg,
                i = [n],
                a = !1;
              return (
                t
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
                        disabled: t,
                        "data-tooltip-text": r
                      },
                      this.props.buttonIcon || s.a.createElement(p.i, null),
                      a && s.a.createElement(l.c, null)
                    ))
              );
            }),
            Object(r.c)([a.a], t.prototype, "OnEmoticonClick", null),
            (t = Object(r.c)([i.observer], t))
          );
        })(s.a.Component);
      t.a = f;
    },
    "5E+2": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return p;
      });
      var _ = n("mrSG"),
        f = n("q1tI"),
        r = n("sUmc"),
        v = n("UPxs"),
        o = n("exH9"),
        i = n("DWPT"),
        a = n("TLQK"),
        s = n("bxiW"),
        c = n("LY6W"),
        l = n.n(c),
        p = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(_.d)(t, e),
            (t.prototype.TryHide = function() {
              this.m_fnHide && this.m_fnHide(), (this.m_fnHide = null);
            }),
            (t.prototype.componentWillUnmount = function() {
              this.TryHide();
            }),
            (t.prototype.render = function() {
              var t = this,
                e = this.props,
                n = e.toolTipContent,
                r = e.nDelayShowMS,
                o = e.bDisabled,
                i = e.direction,
                a = e.nBodyAlignment,
                s = e.nBodyDistance,
                c = e.nAllowOffscreenPx,
                l = e.nMaxLateralMoveOnScreen,
                p = e.strTooltipClassname,
                u = Object(_.f)(e, [
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
                var h = function(e) {
                  return (t.m_fnHide = e);
                };
                m =
                  "string" == typeof n
                    ? b.ForText(n, h, r, d)
                    : b.ForReactNode(n, h, r, d);
              }
              return f.createElement(
                v.a,
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
            (t.defaultProps = { nDelayShowMS: 300 }),
            Object(_.c)([s.a], t.prototype, "TryHide", null),
            t
          );
        })(f.Component),
        b = (f.Component,
        f.Component,
        f.Component,
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
                f.createElement(
                  "div",
                  { className: l.a.TextToolTip },
                  Object(a.d)(e)
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
                f.createElement(
                  i.a,
                  Object(_.a)({}, r, this.m_hoverPositionProps),
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
            Object(_.c)([s.a], o.prototype, "ShowToolTip", null),
            Object(_.c)([s.a], o.prototype, "HideToolTip", null),
            o
          );
        })());
    },
    "5L1o": function(e, t, n) {
      "use strict";
      var _ = n("mrSG"),
        r = n("TyAF"),
        f = n("q1tI"),
        o = n("Om+o"),
        i = n.n(o),
        a = n("vv6K"),
        v = n.n(a),
        s = n("vEGm"),
        b = n.n(s),
        c = n("IS34"),
        l = n.n(c),
        p = n("S+Ty"),
        u = n.n(p),
        d = n("6x+F"),
        m = n.n(d),
        h = n("8HkJ"),
        g = n.n(h),
        y = n("ZeAL"),
        E = n("TtDX"),
        S = n("5eAM"),
        C = n("R+8l"),
        O = n("Mgs7"),
        w = n("Jqb/"),
        A = n("ka0M"),
        I = n("6Y59"),
        T = n("exH9"),
        N = n("TLQK"),
        L = n("lkRc"),
        B = n("qD+2"),
        D = n("Dq3P"),
        j = n.n(D);
      function R(t) {
        return Object(_.b)(this, void 0, void 0, function() {
          return Object(_.e)(this, function(e) {
            return (
              L.c.IN_CLIENT
                ? (console.log("Running game " + t + " locally."),
                  (window.location.href = "steam://run/" + t))
                : (console.log(
                    "Cannot identify local client. Prompting user to launch " +
                      t +
                      "."
                  ),
                  (function(o) {
                    Object(_.b)(this, void 0, void 0, function() {
                      var t, n, r;
                      return Object(_.e)(this, function(e) {
                        switch (e.label) {
                          case 0:
                            return [4, B.a.EnsureAppInfoForAppIDs([o])];
                          case 1:
                            return (
                              e.sent(),
                              (t = B.a.GetAppInfo(o)),
                              (n = t && t.name),
                              console.log("prompting for", n),
                              (r = L.c.STORE_BASE_URL + "about/"),
                              Object(A.b)(
                                f.createElement(M, {
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
                  })(t)),
              [2]
            );
          });
        });
      }
      var M = function(e) {
          var t = function() {
            return e.closeModal && e.closeModal();
          };
          return f.createElement(
            w.g,
            { onEscKeypress: t, className: j.a.GotSteamDialog },
            f.createElement(
              O.e,
              null,
              f.createElement(
                O.i,
                null,
                " ",
                Object(N.d)("#GotSteam_Title"),
                " "
              ),
              f.createElement(
                O.a,
                null,
                f.createElement(
                  O.b,
                  null,
                  Object(N.j)(
                    "#GotSteam_PromptWithDownloadLink",
                    f.createElement(
                      "a",
                      {
                        href: e.strDownloadSteamUrl,
                        className: j.a.DownloadSteamUrl
                      },
                      Object(N.d)("#GotSteam_DownloadLinkText")
                    ),
                    f.createElement(
                      "span",
                      { className: j.a.GameName },
                      e.strGameName
                    )
                  )
                ),
                f.createElement(
                  "div",
                  { className: j.a.Buttons },
                  f.createElement(
                    "a",
                    {
                      href: "steam://run/" + e.appid,
                      onClick: t,
                      className: Object(T.a)(j.a.Button, j.a.LeftButton)
                    },
                    f.createElement(
                      "div",
                      { className: j.a.AnswerText },
                      " ",
                      Object(N.d)("#GotSteam_Yes"),
                      " "
                    ),
                    f.createElement(
                      "div",
                      { className: j.a.ActionText },
                      " ",
                      Object(N.d)("#GotSteam_Yes_Play"),
                      " "
                    )
                  ),
                  f.createElement(
                    "a",
                    {
                      href: e.strDownloadSteamUrl,
                      onClick: t,
                      className: j.a.Button
                    },
                    f.createElement(
                      "div",
                      { className: j.a.AnswerText },
                      " ",
                      Object(N.d)("#GotSteam_No"),
                      " "
                    ),
                    f.createElement(
                      "div",
                      { className: j.a.ActionText },
                      " ",
                      Object(N.d)("#GotSteam_No_Download"),
                      " "
                    )
                  )
                ),
                f.createElement(
                  "div",
                  { className: j.a.Footer },
                  f.createElement(I.z, { className: j.a.Logo }),
                  Object(N.d)("#GotSteam_Blurb")
                )
              )
            )
          );
        },
        x = n("oVVc"),
        k = n("ir+G"),
        G = n("nWbB"),
        U = n("ee7K"),
        P = n("y+6m"),
        H = n("fpVW"),
        F = n.n(H),
        W = n("BFsE"),
        z = n("UxvL"),
        V = n("0OaU"),
        Z = n("+d9t"),
        Y = n("bDQf"),
        Q = n("bxiW"),
        J = n("bS9Q"),
        q = n("IzPI"),
        X = n("XsxU"),
        K = n("ZlHF"),
        $ = n("NKJh"),
        ee = n.n($),
        te = n("RQmk");
      n.d(t, "j", function() {
        return ne;
      }),
        n.d(t, "k", function() {
          return re;
        }),
        n.d(t, "d", function() {
          return oe;
        }),
        n.d(t, "h", function() {
          return ae;
        }),
        n.d(t, "c", function() {
          return se;
        }),
        n.d(t, "g", function() {
          return ce;
        }),
        n.d(t, "b", function() {
          return pe;
        }),
        n.d(t, "e", function() {
          return de;
        }),
        n.d(t, "l", function() {
          return me;
        }),
        n.d(t, "a", function() {
          return he;
        }),
        n.d(t, "i", function() {
          return _e;
        }),
        n.d(t, "f", function() {
          return fe;
        });
      var ne = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { isHovered: !1 }),
              (e.m_myInstance = ++n.instance_count),
              e
            );
          }
          var n;
          return (
            Object(_.d)(e, t),
            ((n = e).prototype.componentDidMount = function() {
              k.a.EnsureStoreCapsuleInfoLoaded(this.props.appid);
            }),
            (e.prototype.OnCapsuleOver = function() {
              this.setState({ isHovered: !0 });
            }),
            (e.prototype.OnCapsuleOut = function() {
              this.setState({ isHovered: !1 });
            }),
            (e.prototype.render = function() {
              var t = this,
                e = k.a.GetStoreCapsuleInfo(this.props.appid).GetAppStoreData(),
                n = ee.a.StoreSaleWidgetContainer,
                r = ee.a.StoreSaleWidgetShortDesc;
              return e && e.title
                ? f.createElement(
                    "div",
                    { className: n },
                    f.createElement(
                      "div",
                      {
                        className: Object(T.a)(
                          ee.a.Actions,
                          ee.a.StoreSaleWidgetLeft
                        )
                      },
                      f.createElement(
                        "a",
                        {
                          href: Object(q.c)(e.capsule_link),
                          target: L.c.IN_CLIENT ? void 0 : "_blank"
                        },
                        f.createElement(
                          "div",
                          {
                            className: ee.a.StoreSaleWidgetImage,
                            onMouseOver: this.OnCapsuleOver,
                            onMouseOut: this.OnCapsuleOut,
                            onFocus: this.OnCapsuleOver,
                            onBlur: this.OnCapsuleOut
                          },
                          f.createElement(
                            "div",
                            {
                              style: { position: "relative" },
                              className: ee.a.StoreSaleWidgetImageCtn
                            },
                            f.createElement(z.a, {
                              className: ee.a.StoreSaleImage,
                              rgSources: [e.main_capsule, e.capsule]
                            }),
                            this.state.isHovered &&
                              e.microtrailer &&
                              f.createElement(
                                "video",
                                {
                                  className: ee.a.StoreSaleVideo,
                                  loop: !0,
                                  muted: !0,
                                  autoPlay: !0
                                },
                                f.createElement("source", {
                                  src: e.microtrailer,
                                  type: "video/webm"
                                }),
                                !L.c.IN_CLIENT &&
                                  f.createElement("source", {
                                    src: e.microtrailer_mp4,
                                    type: "video/mp4"
                                  })
                              )
                          )
                        )
                      )
                    ),
                    f.createElement(
                      "div",
                      { className: ee.a.StoreSaleWidgetRight },
                      f.createElement(
                        "div",
                        { className: ee.a.TitleCtn },
                        f.createElement(
                          "div",
                          { className: ee.a.Actions },
                          f.createElement(
                            "a",
                            {
                              href: Object(q.c)(e.capsule_link),
                              target: L.c.IN_CLIENT ? void 0 : "_blank"
                            },
                            f.createElement(
                              "div",
                              { className: ee.a.StoreSaleWidgetTitle },
                              e.title
                            )
                          )
                        ),
                        f.createElement(_e, { item: e })
                      ),
                      f.createElement(
                        "div",
                        { className: ee.a.StoreSaleWidgetRelease },
                        e.release
                      ),
                      f.createElement(
                        "div",
                        { className: r },
                        Object(y.c)(Object(J.b)(e.short_desc))
                      ),
                      f.createElement(
                        "div",
                        { className: ee.a.StoreSaleWidgetTags },
                        e.tags
                          ? e.tags.map(function(e) {
                              return f.createElement(
                                "div",
                                {
                                  key: "tag_" + t.m_myInstance + "_" + e.tagid,
                                  className: ee.a.AppTag
                                },
                                e.name
                              );
                            })
                          : void 0
                      ),
                      f.createElement(re, { appInfo: e })
                    )
                  )
                : f.createElement("div", {
                    className: ee.a.StoreSaleWidgetEmptyContainer
                  });
            }),
            (e.instance_count = 0),
            Object(_.c)([Q.a], e.prototype, "OnCapsuleOver", null),
            Object(_.c)([Q.a], e.prototype, "OnCapsuleOut", null),
            (e = n = Object(_.c)([r.observer], e))
          );
        })(f.Component),
        re = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(_.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.appInfo,
                t = e.price,
                n = e.is_free,
                r = e.discount_percent,
                o = e.subid,
                i = e.appid;
              return f.createElement(
                "div",
                { className: ee.a.StoreActionWidgetContainer },
                f.createElement(
                  "div",
                  {
                    className: Object(T.a)(
                      ee.a.StoreSalePriceActionWidgetContainer,
                      r ? ee.a.Discounted : ""
                    )
                  },
                  r
                    ? f.createElement(
                        "div",
                        { className: ee.a.StoreSaleDiscountBox },
                        "-" + r + "%"
                      )
                    : null,
                  !n && t
                    ? f.createElement(
                        "div",
                        { className: ee.a.StoreSalePriceBox },
                        t
                      )
                    : null,
                  n && "0" == t
                    ? f.createElement(
                        "div",
                        { className: ee.a.StoreSalePriceBox },
                        Object(N.d)("#Broadcast_Store_FreeToPlay")
                      )
                    : null
                ),
                Boolean(o) && f.createElement(he, { appid: i }),
                f.createElement(me, { appid: i })
              );
            }),
            (t = Object(_.c)([r.observer], t))
          );
        })(f.Component),
        oe = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bShowContents: !1,
                containerStyle: {
                  maxHeight: "0px",
                  overflow: "hidden",
                  transition: "max-height 1s ease-in-out"
                }
              }),
              e
            );
          }
          return (
            Object(_.d)(e, t),
            (e.prototype.ShowContents = function(e) {
              var t = this;
              this.setState({ bShowContents: e }),
                window.setTimeout(function() {
                  return t.setState({
                    containerStyle: Object(_.a)(
                      Object(_.a)({}, t.state.containerStyle),
                      { maxHeight: "120000px" }
                    )
                  });
                }, 100);
            }),
            (e.prototype.componentDidMount = function() {
              C.a.LoadBundleInfo([this.props.bundleid]);
            }),
            (e.prototype.render = function() {
              var e = this,
                t = this.props.bundleid,
                n = C.a.GetBundleInfo(t);
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
                    className: Object(T.a)(
                      ee.a.StoreSaleWidgetContainer,
                      ee.a.Bundle,
                      ee.a.BundleLargeCtn
                    )
                  },
                  f.createElement(
                    "div",
                    { className: ee.a.BundleImage },
                    f.createElement(
                      te.a,
                      {
                        strURL: L.c.STORE_BASE_URL + "bundle/" + t,
                        type: "bundle",
                        id: t
                      },
                      f.createElement(
                        "div",
                        { className: ee.a.StoreSaleWidgetImage },
                        f.createElement(
                          "img",
                          Object(_.a)(
                            {
                              loading: "lazy",
                              className: ee.a.StoreSaleImage,
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
                    { className: Object(T.a)(ee.a.StoreSaleWidgetRight) },
                    f.createElement(
                      "div",
                      { className: ee.a.Actions },
                      f.createElement(
                        "a",
                        {
                          href: Object(q.c)(L.c.STORE_BASE_URL + "bundle/" + t),
                          target: L.c.IN_CLIENT ? void 0 : "_blank"
                        },
                        f.createElement(
                          "div",
                          { className: ee.a.StoreSaleWidgetTitle },
                          n.name
                        )
                      )
                    ),
                    f.createElement(
                      "div",
                      { className: ee.a.StoreSaleWidgetShortDesc },
                      Boolean(n.discount_percent)
                        ? Object(N.d)(
                            "#Sale_BundleSave_WithDiscount",
                            n.discount_percent,
                            n.packageids.length
                          )
                        : Object(N.d)("#Sale_BundleSave", n.packageids.length)
                    ),
                    f.createElement(ie, { packages: n.packageids }),
                    f.createElement(
                      "div",
                      { className: ee.a.BundleBuyButtons },
                      f.createElement(_e, { item: n }),
                      f.createElement(
                        "span",
                        { className: ee.a.BundleDiscounts },
                        Boolean(a && r && a < r) &&
                          f.createElement(
                            "span",
                            { className: Object(T.a)(ee.a.BaseDiscount) },
                            "-" + a + "%"
                          ),
                        Boolean(r) &&
                          f.createElement(
                            "span",
                            { className: ee.a.StoreSaleDiscountBox },
                            "-" + r + "%"
                          ),
                        Boolean(o) &&
                          (Boolean(r && i)
                            ? f.createElement(
                                "div",
                                { className: ee.a.StoreSaleDiscountedPriceCtn },
                                f.createElement(
                                  "div",
                                  { className: ee.a.StoreOrignalPrice },
                                  i
                                ),
                                f.createElement(
                                  "div",
                                  { className: ee.a.StoreSalePriceBox },
                                  o
                                )
                              )
                            : f.createElement(
                                "div",
                                { className: ee.a.StoreSalePriceBox },
                                o
                              ))
                      ),
                      f.createElement(
                        "div",
                        { className: ee.a.BundleBuyButton },
                        f.createElement(he, { bundleid: t })
                      )
                    )
                  )
                ),
                !this.state.bShowContents &&
                  f.createElement(
                    "div",
                    {
                      onClick: function() {
                        return e.ShowContents(!0);
                      },
                      className: ee.a.BundleShowButton
                    },
                    f.createElement(
                      "button",
                      { className: ee.a.ShowContentsButton },
                      Object(N.d)(
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
                      className: ee.a.BundleContentsCtn
                    },
                    n.packageids.map(function(e) {
                      var t = x.b.GetPackageInfo(e);
                      return t
                        ? f.createElement(
                            "div",
                            {
                              key: t.appids[0],
                              className: ee.a.BundleContentItem
                            },
                            1 === t.appids.length
                              ? f.createElement(ne, { appid: t.appids[0] })
                              : f.createElement(ae, { packageid: e })
                          )
                        : null;
                    })
                  ),
                Boolean(this.state.bShowContents && 10 < n.packageids.length) &&
                  f.createElement(
                    "div",
                    {
                      onClick: function() {
                        return e.ShowContents(!1);
                      },
                      className: ee.a.BundleShowButton
                    },
                    f.createElement(
                      "button",
                      { className: ee.a.ShowContentsButton },
                      Object(N.d)("#Sale_ShowLess")
                    )
                  )
              );
            }),
            Object(_.c)([Q.a], e.prototype, "ShowContents", null),
            (e = Object(_.c)([r.observer], e))
          );
        })(f.Component),
        ie = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(_.d)(t, e),
            (t.prototype.componentDidMount = function() {
              return Object(_.b)(this, void 0, void 0, function() {
                var t;
                return Object(_.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.props.packages.slice(0, 6)),
                        [4, x.b.LoadPackageInfo(t)]
                      );
                    case 1:
                      return (
                        e.sent(),
                        t.forEach(function(e) {
                          var t = x.b.GetPackageInfo(e);
                          if (t && 1 == t.appids.length) {
                            var n = t.appids[0];
                            k.a.EnsureStoreCapsuleInfoLoaded(n);
                          }
                        }),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.RenderPackages = function() {
              var c = new Array();
              return (
                this.props.packages.slice(0, 6).forEach(function(e, t) {
                  var n = x.b.GetPackageInfo(e);
                  if (!n || 0 == n.appids.length) return null;
                  var r = Object(q.c)(L.c.STORE_BASE_URL + "sub/" + e),
                    o = n.header_image_url,
                    i = n.name;
                  if (1 == n.appids.length) {
                    var a = n.appids[0],
                      s = k.a.GetStoreCapsuleInfo(a);
                    s.BIsLoaded() &&
                      ((r = Object(q.c)(s.GetAppStoreData().capsule_link)),
                      (o = s.GetAppStoreData().tiny_capsule),
                      (i = s.GetAppStoreData().title));
                  }
                  c.push(
                    f.createElement(
                      "a",
                      {
                        key: "preview_" + e,
                        href: r,
                        target: L.c.IN_CLIENT ? void 0 : "_blank",
                        className: ee.a.PreviewItem,
                        style: { zIndex: 30 - t }
                      },
                      f.createElement("img", {
                        src: o,
                        className: ee.a.PreviewImg,
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
            (t.prototype.render = function() {
              var e = this.RenderPackages();
              return f.createElement(
                "div",
                { className: ee.a.BundleContentPreview },
                f.createElement("div", { className: ee.a.PreviewCtn }, e)
              );
            }),
            (t = Object(_.c)([r.observer], t))
          );
        })(f.Component),
        ae = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bShowContents: !1,
                containerStyle: {
                  maxHeight: "0px",
                  overflow: "hidden",
                  transition: "max-height 1s ease-in-out"
                }
              }),
              e
            );
          }
          return (
            Object(_.d)(e, t),
            (e.prototype.ShowContents = function() {
              var e = this;
              this.setState({ bShowContents: !0 }),
                window.setTimeout(function() {
                  return e.setState({
                    containerStyle: Object(_.a)(
                      Object(_.a)({}, e.state.containerStyle),
                      { maxHeight: "2000px" }
                    )
                  });
                }, 100);
            }),
            (e.prototype.componentDidMount = function() {
              x.b.LoadPackageInfo([this.props.packageid]);
            }),
            (e.prototype.render = function() {
              var e = x.b.GetPackageInfo(this.props.packageid);
              if (!e) return null;
              var t = ee.a.StoreSaleWidgetContainer + " " + ee.a.Bundle,
                n = ee.a.StoreSaleWidgetImage,
                r = ee.a.StoreSaleImage;
              return f.createElement(
                f.Fragment,
                null,
                f.createElement(
                  "div",
                  { className: Object(T.a)(t, "packageItem") },
                  f.createElement(
                    "div",
                    { className: ee.a.Actions },
                    f.createElement(
                      "a",
                      {
                        href: Object(q.c)(
                          L.c.STORE_BASE_URL + "sub/" + this.props.packageid
                        ),
                        target: L.c.IN_CLIENT ? void 0 : "_blank"
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
                              alt: e.name,
                              src: e.header_image_url
                            },
                            e.GetHeaderImageDimension()
                          )
                        )
                      )
                    )
                  ),
                  f.createElement(
                    "div",
                    { className: ee.a.StoreSaleWidgetRight },
                    f.createElement(
                      "div",
                      { className: ee.a.Actions },
                      f.createElement(
                        "a",
                        {
                          href: Object(q.c)(
                            L.c.STORE_BASE_URL + "sub/" + this.props.packageid
                          ),
                          target: L.c.IN_CLIENT ? void 0 : "_blank"
                        },
                        f.createElement(
                          "div",
                          { className: ee.a.StoreSaleWidgetTitle },
                          e.name
                        )
                      )
                    ),
                    f.createElement(
                      "div",
                      { className: ee.a.StoreActionWidgetContainer },
                      f.createElement(
                        "div",
                        { className: ee.a.StoreSalePriceActionWidgetContainer },
                        e.discount_percent
                          ? f.createElement(
                              "div",
                              { className: ee.a.StoreSaleDiscountBox },
                              "-" + e.discount_percent + "%"
                            )
                          : null,
                        e.formatted_final_price
                          ? f.createElement(
                              "div",
                              { className: ee.a.StoreSalePriceBox },
                              e.formatted_final_price
                            )
                          : null
                      ),
                      f.createElement(
                        "div",
                        { style: { width: "150px" } },
                        f.createElement(he, { packageid: this.props.packageid })
                      )
                    ),
                    !this.state.bShowContents &&
                      f.createElement(
                        "div",
                        {
                          onClick: this.ShowContents,
                          className: ee.a.ExpandPackageButtonCtn
                        },
                        f.createElement(
                          "button",
                          { className: ee.a.ShowContentsButton },
                          Object(N.d)("#Sale_ShowContents")
                        )
                      )
                  )
                ),
                f.createElement(
                  "div",
                  {
                    style: this.state.containerStyle,
                    className: ee.a.ExpandedPackageItems
                  },
                  e.appids.map(function(e) {
                    return f.createElement(
                      "div",
                      { key: e, className: ee.a.BundleContentItem },
                      f.createElement(ne, { appid: e })
                    );
                  })
                )
              );
            }),
            Object(_.c)([Q.a], e.prototype, "ShowContents", null),
            (e = Object(_.c)([r.observer], e))
          );
        })(f.Component),
        se = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(_.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.bundleInfo;
              if (!e) return null;
              var t = e.discount_percent,
                n = e.header_image_url,
                r = e.formatted_final_price,
                o = (e.name, e.bundleid),
                i = e.formatted_orig_price;
              return f.createElement(
                te.a,
                {
                  strURL: L.c.STORE_BASE_URL + "bundle/" + o,
                  type: "bundle",
                  id: o
                },
                f.createElement(
                  "div",
                  {
                    className: Object(T.a)(
                      ee.a.CapsuleContainer,
                      this.props.bInCarousel ? ee.a.InCarouselWidget : ""
                    )
                  },
                  f.createElement(
                    "img",
                    Object(_.a)(
                      {
                        loading: "lazy",
                        className: ee.a.CapsuleImage,
                        alt: e.name,
                        src: n
                      },
                      e.GetHeaderImageDimension()
                    )
                  ),
                  f.createElement(
                    "div",
                    { className: ee.a.CapsuleBottomBar },
                    f.createElement(_e, { item: e }),
                    f.createElement(
                      "span",
                      { style: { marginLeft: "auto", display: "flex" } },
                      Boolean(t) &&
                        f.createElement(
                          "span",
                          { className: ee.a.StoreSaleDiscountBox },
                          "-" + t + "%"
                        ),
                      Boolean(r) &&
                        (Boolean(t && i)
                          ? f.createElement(
                              "div",
                              { className: ee.a.StoreSaleDiscountedPriceCtn },
                              f.createElement(
                                "div",
                                { className: ee.a.StoreOrignalPrice },
                                i
                              ),
                              f.createElement(
                                "div",
                                { className: ee.a.StoreSalePriceBox },
                                r
                              )
                            )
                          : f.createElement(
                              "div",
                              { className: ee.a.StoreSalePriceBox },
                              r
                            ))
                    )
                  )
                )
              );
            }),
            (t = Object(_.c)([r.observer], t))
          );
        })(f.Component),
        ce = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(_.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.packageInfo;
              if (!e) return null;
              var t = e.discount_percent,
                n = e.header_image_url,
                r = e.formatted_final_price,
                o = (e.name, e.formatted_orig_price);
              return f.createElement(
                te.a,
                {
                  strURL: L.c.STORE_BASE_URL + "sub/" + e.packageid,
                  type: "sub",
                  id: e.packageid
                },
                f.createElement(
                  "div",
                  {
                    className: Object(T.a)(
                      ee.a.CapsuleContainer,
                      this.props.bInCarousel ? ee.a.InCarouselWidget : ""
                    )
                  },
                  f.createElement(
                    "img",
                    Object(_.a)(
                      {
                        loading: "lazy",
                        className: ee.a.CapsuleImage,
                        src: n,
                        alt: e.name
                      },
                      e.GetHeaderImageDimension()
                    )
                  ),
                  f.createElement(
                    "div",
                    { className: ee.a.CapsuleBottomBar },
                    f.createElement(_e, { item: e }),
                    f.createElement(
                      "span",
                      { style: { marginLeft: "auto", display: "flex" } },
                      Boolean(t) &&
                        f.createElement(
                          "span",
                          { className: ee.a.StoreSaleDiscountBox },
                          "-" + t + "%"
                        ),
                      Boolean(r) &&
                        (Boolean(t && o)
                          ? f.createElement(
                              "div",
                              { className: ee.a.StoreSaleDiscountedPriceCtn },
                              f.createElement(
                                "div",
                                { className: ee.a.StoreOrignalPrice },
                                o
                              ),
                              f.createElement(
                                "div",
                                { className: ee.a.StoreSalePriceBox },
                                r
                              )
                            )
                          : f.createElement(
                              "div",
                              { className: ee.a.StoreSalePriceBox },
                              r
                            ))
                    )
                  )
                )
              );
            }),
            (t = Object(_.c)([r.observer], t))
          );
        })(f.Component),
        le = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(_.d)(t, e),
            (t.prototype.OnOpenContextMenu = function(e) {
              var t = this;
              Object(E.a)(
                f.createElement(
                  P.c,
                  null,
                  f.createElement(
                    P.d,
                    {
                      onSelected: function() {
                        return U.a.UpdateGameWishlist(
                          t.props.appInfo.appid,
                          !0
                        );
                      }
                    },
                    f.createElement(
                      "div",
                      { style: { color: "white" } },
                      Object(N.d)("#Sale_AddToWishlist")
                    )
                  ),
                  f.createElement(
                    P.d,
                    { onSelected: function() {} },
                    f.createElement(
                      "a",
                      {
                        href: L.c.STORE_BASE_URL + "account/preferences",
                        target: "_blank"
                      },
                      Object(N.d)("#Sale_Preferences")
                    )
                  )
                ),
                e,
                { bDisablePopTop: !0 }
              );
            }),
            (t.prototype.render = function() {
              return L.i.logged_in
                ? f.createElement(
                    "div",
                    {
                      className: ee.a.CapsuleMenuButton,
                      onClick: this.OnOpenContextMenu
                    },
                    f.createElement("img", { src: l.a })
                  )
                : null;
            }),
            Object(_.c)([Q.a], t.prototype, "OnOpenContextMenu", null),
            (t = Object(_.c)([r.observer], t))
          );
        })(f.Component),
        pe = (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return (
              (t.state = { isHovered: !1 }),
              (t.m_strSpanIDRand = Math.floor(1e6 * Math.random()).toString()),
              t
            );
          }
          return (
            Object(_.d)(e, n),
            (e.prototype.GetStringID = function() {
              return (
                "appcap_" +
                this.props.appInfo.appid +
                "_" +
                this.m_strSpanIDRand
              );
            }),
            (e.prototype.componentDidMount = function() {
              U.a.HintLoad();
            }),
            (e.prototype.OnHoverStateChange = function(e) {
              this.state.isHovered != e && this.setState({ isHovered: e });
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = e.appInfo,
                n = e.bShowParentApp,
                r = e.bInCarousel,
                o = e.bUseSubscriptionLayout;
              if (!t) return null;
              var i = t.capsule,
                a = (t.title, t.price),
                s = t.discount_percent,
                c = t.content_descriptors,
                l = t.tags,
                p = t.is_free,
                u = t.orig_price,
                d = U.a.BIsGameWishlisted(t.appid),
                m = U.a.BOwnsApp(t.appid);
              if (U.a.BExcludesContentDescriptor(c) || U.a.BExcludesTag(l))
                return null;
              var h =
                n && Boolean(t.full_game_appid)
                  ? S.a.GetAppLinkInfo(t.full_game_appid)
                  : void 0;
              return f.createElement(
                "div",
                { id: this.GetStringID() },
                f.createElement(
                  te.a,
                  {
                    strURL: L.c.STORE_BASE_URL + "app/" + t.appid,
                    type: "app",
                    id: t.appid,
                    fnHoverState: this.OnHoverStateChange,
                    fnGetIDOverride: this.GetStringID
                  },
                  f.createElement(
                    "div",
                    {
                      className: Object(T.a)(
                        ee.a.CapsuleContainer,
                        r && ee.a.InCarouselWidget
                      )
                    },
                    !m &&
                      d &&
                      f.createElement(
                        "span",
                        { className: ee.a.Banner },
                        f.createElement("img", { src: b.a }),
                        " ",
                        Object(N.d)("#Sale_OnWishlist")
                      ),
                    m &&
                      f.createElement(
                        "span",
                        { className: ee.a.Banner + " " + ee.a.Blue },
                        f.createElement("img", { src: v.a }),
                        " ",
                        Object(N.d)("#Sale_InLibrary")
                      ),
                    G.b.BIsAppStreaming(
                      t.full_game_appid ? t.full_game_appid : t.appid
                    ) &&
                      f.createElement(
                        "div",
                        { className: ee.a.LiveIcon },
                        f.createElement(fe, null)
                      ),
                    L.i.logged_in &&
                      this.state.isHovered &&
                      f.createElement(le, { appInfo: t }),
                    f.createElement(
                      "div",
                      { style: { position: "relative" } },
                      f.createElement(
                        "img",
                        Object(_.a)(
                          {
                            loading: "lazy",
                            className: Object(T.a)(
                              ee.a.CapsuleImage,
                              m && ee.a.Muted
                            ),
                            src: i
                          },
                          t.GetCapsuleDimensions(),
                          { alt: t.title }
                        )
                      ),
                      this.state.isHovered &&
                        t.microtrailer &&
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
                            src: t.microtrailer,
                            type: "video/webm"
                          }),
                          !L.c.IN_CLIENT &&
                            f.createElement("source", {
                              src: t.microtrailer_mp4,
                              type: "video/mp4"
                            })
                        )
                    ),
                    o
                      ? f.createElement(ue, { appid: t.appid })
                      : f.createElement(
                          "div",
                          {
                            className: Object(T.a)(
                              ee.a.CapsuleBottomBar,
                              m && ee.a.Muted
                            )
                          },
                          f.createElement(_e, { item: t }),
                          f.createElement(
                            "span",
                            { style: { marginLeft: "auto", display: "flex" } },
                            Boolean(s) &&
                              f.createElement(
                                "span",
                                { className: ee.a.StoreSaleDiscountBox },
                                "-" + s + "%"
                              ),
                            Boolean(!p) &&
                              f.createElement("div", {
                                className: ee.a.StoreSalePriceBox
                              }),
                            Boolean(!p) &&
                              (Boolean(s && u)
                                ? f.createElement(
                                    "div",
                                    {
                                      className:
                                        ee.a.StoreSaleDiscountedPriceCtn
                                    },
                                    f.createElement(
                                      "div",
                                      { className: ee.a.StoreOrignalPrice },
                                      u
                                    ),
                                    f.createElement(
                                      "div",
                                      { className: ee.a.StoreSalePriceBox },
                                      a
                                    )
                                  )
                                : f.createElement(
                                    "div",
                                    { className: ee.a.StoreSalePriceBox },
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
                      Object(N.d)(
                        "music" === t.type
                          ? "#SalePage_ParentApp_SoundTrack"
                          : "#SalePage_ParentApp_DLC"
                      )
                    ),
                    f.createElement(
                      te.a,
                      {
                        strURL: L.c.STORE_BASE_URL + "app/" + t.full_game_appid,
                        type: "app",
                        id: t.full_game_appid,
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
            Object(_.c)([Q.a], e.prototype, "GetStringID", null),
            Object(_.c)([Q.a], e.prototype, "OnHoverStateChange", null),
            (e = Object(_.c)([r.observer], e))
          );
        })(f.Component),
        ue = Object(r.observer)(function(e) {
          var t = e.appid,
            n = U.a.BOwnsApp(t),
            r = function(e) {
              e.preventDefault(), n ? R(t) : U.a.AddLicenseForFreeGame(t);
            };
          return n
            ? f.createElement(
                "div",
                {
                  onClick: r,
                  className: Object(T.a)(
                    ee.a.CapsuleBottomBar,
                    ee.a.PlayNowButton
                  )
                },
                " ",
                Object(N.d)("#Sale_PlayNow"),
                " "
              )
            : f.createElement(
                "div",
                {
                  onClick: r,
                  className: Object(T.a)(
                    ee.a.CapsuleBottomBar,
                    ee.a.AddToLibraryButton
                  )
                },
                " ",
                Object(N.d)("#Sale_AddToLibrary"),
                " "
              );
        }),
        de = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(_.d)(t, e),
            (t.prototype.render = function() {
              var e = "",
                t = "";
              try {
                var n = new URL(this.props.link.url);
                (e = n.pathname.substring(1)), (t = n.search);
              } catch (e) {
                console.error(e);
              }
              return f.createElement(
                "a",
                {
                  href: Object(q.c)(L.c.STORE_BASE_URL + e + t),
                  target: L.c.IN_CLIENT ? void 0 : "_blank",
                  rel: "noopener noreferrer",
                  className: this.props.strClassName
                    ? this.props.strClassName
                    : void 0
                },
                f.createElement(
                  "div",
                  { className: ee.a.CapsuleContainer },
                  Boolean(this.props.link.localized_link_capsule) &&
                    f.createElement("img", {
                      loading: "lazy",
                      className: ee.a.CapsuleImage,
                      src:
                        L.c.MEDIA_CDN_COMMUNITY_URL +
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
                      className: ee.a.CapsuleImage,
                      src: this.props.link.materialized_link_capsule
                    })
                )
              );
            }),
            (t = Object(_.c)([r.observer], t))
          );
        })(f.Component),
        me = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bUpdatingWishList: !1,
                bLoadingUserData: !U.a.BIsLoaded()
              }),
              e
            );
          }
          return (
            Object(_.d)(e, t),
            (e.prototype.componentDidMount = function() {
              return Object(_.b)(this, void 0, void 0, function() {
                return Object(_.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        k.a.EnsureStoreCapsuleInfoLoaded(this.props.appid),
                        [4, U.a.HintLoad()]
                      );
                    case 1:
                      return (
                        e.sent(), this.setState({ bLoadingUserData: !1 }), [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.DisplayWishlistUpdateErrors = function(e) {
              Object(A.d)(
                f.createElement(
                  w.e,
                  {
                    strTitle: Object(N.d)("#Wishlist_Error"),
                    strDescription: Object(N.d)("#Wishlist_Error_Desc")
                  },
                  f.createElement("br", null),
                  f.createElement("br", null),
                  e
                ),
                window
              );
            }),
            (e.prototype.OnWishListClick = function() {
              return Object(_.b)(this, void 0, void 0, function() {
                var t,
                  n,
                  r,
                  o,
                  i = this;
                return Object(_.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      if (!L.i.logged_in) return Object(W.a)(), [2];
                      if (this.state.bUpdatingWishList) return [3, 4];
                      this.setState({ bUpdatingWishList: !0 }),
                        (t = this.props.appid),
                        (n = !U.a.BIsGameWishlisted(t)),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [4, U.a.UpdateGameWishlist(t, n)]
                      );
                    case 2:
                      return (
                        (r = e.sent()),
                        this.setState({ bUpdatingWishList: !1 }, function() {
                          1 != r.success &&
                            i.DisplayWishlistUpdateErrors(
                              Object(Y.a)(r).strErrorMsg
                            );
                        }),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (o = e.sent()),
                        this.setState({ bUpdatingWishList: !1 }),
                        this.DisplayWishlistUpdateErrors(
                          Object(Y.a)(o).strErrorMsg
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.render = function() {
              var e = k.a
                .GetStoreCapsuleInfo(this.props.appid)
                .GetAppStoreData();
              if (
                U.a.BOwnsApp(this.props.appid) ||
                (!e.coming_soon && e.is_free)
              )
                return null;
              var t = U.a.BIsGameWishlisted(this.props.appid);
              return f.createElement(
                "div",
                {
                  className: Object(T.a)(ee.a.WishList, F.a.FlexRowContainer),
                  onClick: this.OnWishListClick,
                  "data-tooltip-text": Object(N.d)("#AddToWishlist_ttip")
                },
                f.createElement(
                  "span",
                  null,
                  (this.state.bLoadingUserData ||
                    this.state.bUpdatingWishList) &&
                    f.createElement(V.a, { size: "small" })
                ),
                !this.state.bUpdatingWishList &&
                  t &&
                  f.createElement("img", {
                    className: F.a.IconImage,
                    src: i.a
                  }),
                f.createElement(
                  "span",
                  null,
                  Object(N.d)(
                    this.state.bUpdatingWishList
                      ? "#Updating"
                      : this.state.bLoadingUserData
                      ? "#Loading"
                      : t
                      ? "#Wishlisted"
                      : "#AddToWishlist"
                  )
                )
              );
            }),
            Object(_.c)([Q.a], e.prototype, "OnWishListClick", null),
            (e = Object(_.c)([r.observer], e))
          );
        })(f.Component),
        he = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(_.d)(t, e),
            (t.prototype.componentDidMount = function() {
              U.a.HintLoad(),
                k.a.EnsureStoreCapsuleInfoLoaded(this.props.appid);
            }),
            (t.prototype.BOwnsApp = function() {
              return U.a.BOwnsApp(this.props.appid);
            }),
            (t.prototype.BIsFreeApp = function() {
              var e = k.a
                .GetStoreCapsuleInfo(this.props.appid)
                .GetAppStoreData();
              return e.is_free && ("" == e.price || "0" == e.price);
            }),
            (t.prototype.OnAddToCart = function(e) {
              if (this.props.packageid)
                U.a.AddToCart(
                  e,
                  this.props.packageid,
                  L.c.STORE_BASE_URL + "cart/addtocart",
                  L.c.STORE_BASE_URL + "cart"
                );
              else if (this.props.bundleid)
                U.a.AddToCart(
                  e,
                  null,
                  L.c.STORE_BASE_URL + "cart/addtocart",
                  L.c.STORE_BASE_URL + "cart",
                  this.props.bundleid
                );
              else {
                var t = k.a
                  .GetStoreCapsuleInfo(this.props.appid)
                  .GetAppStoreData();
                this.BOwnsApp() || this.BIsFreeApp()
                  ? Object(Z.c)(window, "steam://run/" + t.app_to_run)
                  : U.a.AddToCart(e, t.subid, t.add_to_cart_url, t.cart_url);
              }
            }),
            (t.prototype.render = function() {
              var e = "";
              if (this.props.bundleid || this.props.packageid)
                e = Object(N.d)("#Store_AddToCart");
              else {
                var t = k.a.GetStoreCapsuleInfo(this.props.appid),
                  n = t.GetAppStoreData();
                if (
                  t.GetAppStoreData().coming_soon &&
                  !t.GetAppStoreData().subid
                )
                  return null;
                e = this.BOwnsApp()
                  ? Object(N.d)("#EventDisplay_CallToAction_PlayNow")
                  : n.button_action;
              }
              return f.createElement(
                "div",
                { className: ee.a.Action, onClick: this.OnAddToCart },
                e
              );
            }),
            Object(_.c)([Q.a], t.prototype, "OnAddToCart", null),
            (t = Object(_.c)([r.observer], t))
          );
        })(f.Component),
        _e = function(e) {
          var t = e.item;
          return f.createElement(
            "span",
            { className: ee.a.CapsulePlatform },
            t.available_windows && f.createElement("img", { src: g.a }),
            t.available_mac && f.createElement("img", { src: m.a }),
            t.available_linux && f.createElement("img", { src: u.a }),
            t.support_vrhmd
              ? t.support_vrhmd_only
                ? f.createElement(
                    "span",
                    { className: K.vr_required },
                    Object(N.d)("#Store_VR_Support_OnlyVR")
                  )
                : f.createElement(
                    "span",
                    { className: K.vr_supported },
                    Object(N.d)("#Store_VR_Support_SupportsVR")
                  )
              : null
          );
        },
        fe = function() {
          return f.createElement(
            "div",
            { className: ee.a.bordered_live_stream_icon },
            Object(N.d)("#home_page_live_broadcast")
          );
        };
    },
    "5eAM": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return a;
      });
      var p = n("mrSG"),
        r = n("vDqi"),
        u = n.n(r),
        o = n("2vnA"),
        i = n("9f3B"),
        d = n("lkRc"),
        m = n("Xhj9"),
        a = new ((function() {
          function e() {
            (this.m_mapAppLinkInfo = new Map()),
              (this.m_mapMissingApps = new Map()),
              (this.m_bLoadedFromConfig = !1);
          }
          return (
            (e.prototype.LazyInit = function() {
              var r = this;
              if (!this.m_bLoadedFromConfig) {
                var e = Object(d.f)("applinkinfo", "application_config");
                this.ValidateStoreDefault(e) &&
                  e.forEach(function(e) {
                    var t = new m.a();
                    t.InitFrom(e), r.m_mapAppLinkInfo.set(t.appid, t);
                  });
                var t = Object(d.f)(
                  "additional_applinks",
                  "application_config"
                );
                this.ValidateStoreDefault(t) &&
                  t.forEach(function(e) {
                    e.appid = Number(e.appid);
                    var t = e.appid;
                    if (!r.m_mapAppLinkInfo.has(t)) {
                      var n = new m.a();
                      n.InitFrom(e), r.m_mapAppLinkInfo.set(t, n);
                    }
                  });
                var n = Object(d.f)("appunknown", "application_config");
                Object(i.a)(n) &&
                  n.forEach(function(e) {
                    return r.m_mapMissingApps.set(e, !0);
                  }),
                  (this.m_bLoadedFromConfig = !0);
              }
            }),
            (e.prototype.ValidateStoreDefault = function(e) {
              var t = e;
              return (
                !!(
                  t &&
                  Array.isArray(t) &&
                  0 < t.length &&
                  "object" == typeof t[0]
                ) && "string" == typeof t[0].title
              );
            }),
            (e.prototype.GetAppLinkInfo = function(e) {
              return this.LazyInit(), this.m_mapAppLinkInfo.get(e);
            }),
            (e.prototype.LoadAppLinkInfo = function(c, l) {
              return Object(p.b)(this, void 0, void 0, function() {
                var t,
                  n,
                  r,
                  o,
                  i,
                  a,
                  s = this;
                return Object(p.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        this.LazyInit(),
                        (t = []),
                        c.forEach(function(e) {
                          s.m_mapAppLinkInfo.has(e) ||
                            s.m_mapMissingApps.has(e) ||
                            0 === e ||
                            t.push(e);
                        }),
                        t.length
                          ? (t.sort(),
                            (n = {
                              appids: t.join(","),
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
                      if (((r = e.sent()), (o = r && r.data && r.data.apps)))
                        for (i = 0; i < o.length; i++)
                          (a = new m.a()).InitFrom(o[i]),
                            this.m_mapAppLinkInfo.set(a.appid, a);
                      e.label = 2;
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            Object(p.c)(
              [o.observable],
              e.prototype,
              "m_mapAppLinkInfo",
              void 0
            ),
            Object(p.c)([o.action], e.prototype, "LazyInit", null),
            e
          );
        })())();
      window.g_GiveawayStore = a;
    },
    "6+2x": function(e, t, n) {
      e.exports = {
        HoverPosition: "hoverposition_HoverPosition_3vg1v",
        Ready: "hoverposition_Ready_1Ye_0",
        NoSpace: "hoverposition_NoSpace_pxVZH",
        EnablePointerEvents: "hoverposition_EnablePointerEvents_2b9OE"
      };
    },
    "6x+F": function(e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVBRDg3RTRCNENCMzExRTNCRjc1OUVCNjQzQTc5MUY3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVBRDg3RTRDNENCMzExRTNCRjc1OUVCNjQzQTc5MUY3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUFEODdFNDk0Q0IzMTFFM0JGNzU5RUI2NDNBNzkxRjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUFEODdFNEE0Q0IzMTFFM0JGNzU5RUI2NDNBNzkxRjciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6imCnEAAAA6UlEQVR42szUPwtBURjHcVfKJGVT7DLYvQCTkoGSspq8CZPNzmyQIq+AskgsFgtegZRCSTi+cibudZ+rmzz1Gc7pnF+dv4ZSyuNmGW4Heh6BQjGM0Ps0ThoWxEI9q+ZGYFGHjRH+NNZqD7MoIYQVlkjhihvO6KCt25Z76EdVvdcRB5P+it2SSxYTzWqGqF1gX8krLTmUoTBsp0/+LdD75fUNICG52E0HSza9Qq+BGWwdhE7sAn2oOwhsSV5KBGtB2AZx6dNLYa8nXjDFHFfdd0LeydN7VBk5DNCFDwUkdbvxk//w/wPvAgwAuYpVKbKt5hQAAAAASUVORK5CYII=";
    },
    "8HkJ": function(e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OENENEIzRkRDOEM2MTFFNzkzQkNCNkJENzEzMDIzQ0UiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OENENEIzRkNDOEM2MTFFNzkzQkNCNkJENzEzMDIzQ0UiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUZCNDhBREI0Q0IzMTFFM0FCM0ZDMUU2OTVGNUEwRUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUZCNDhBREM0Q0IzMTFFM0FCM0ZDMUU2OTVGNUEwRUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5YkRRHAAABB0lEQVR42mL8//8/AzUB47AyUBCIxYFYAojloFgBiJmBOBGXgcJQDSAsD8QyQHwSiIuAWB+IhYCYFc2iZ0AsDeeBDITibUD8Coh//0cFFf/xg9tIZjCwINnkCMQcaLb/AeJfQPwdiDmJCRcmJPY3akQKsoGM2CINjxxZBjJBxRmJNAMlltOwhOE/ID4KxJZAzILDwA9AvAibgbegaQ09UpqAuBJPpNwHYjMYB9lWMSDmR1MMso0LmqDZcBj4GZf//2JR/Bdq6F88YfgXl4HM1E422NIhC9Qioi1DDkMbIJaE5l9Yxgfl0XdQy3CFIRuppQ0ztKAQh1ogD8VyUD4oW9oNnQIWIMAAJM2E2lF9QHUAAAAASUVORK5CYII=";
    },
    "9f3B": function(e, t, n) {
      "use strict";
      function r(e) {
        var t = e;
        return t && Array.isArray(t) && 0 < t.length && "number" == typeof t[0];
      }
      n.d(t, "a", function() {
        return r;
      });
    },
    BFsE: function(e, t, n) {
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
      function v(e, t) {
        return e.endsWith("/") || (e += "/"), e + "login/" + t + "/";
      }
      function b() {
        var e = new FormData();
        return e.append("donotcache", new Date().getTime().toString()), e;
      }
      function g(n, r, o) {
        return Object(m.b)(this, void 0, void 0, function() {
          var t;
          return Object(m.e)(this, function(e) {
            switch (e.label) {
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
                            var t, n, r, o, i;
                            return Object(m.e)(this, function(e) {
                              switch (e.label) {
                                case 0:
                                  (t = b()).append("username", s),
                                    (n = v(a, "getrsakey")),
                                    (e.label = 1);
                                case 1:
                                  return (
                                    e.trys.push([1, 3, , 4]),
                                    [4, _.a.post(n, t)]
                                  );
                                case 2:
                                  return 200 != (o = e.sent()).status
                                    ? [2, null]
                                    : (i = o.data) &&
                                      i.success &&
                                      i.publickey_mod &&
                                      i.publickey_exp &&
                                      i.timestamp
                                    ? ((r = i), [3, 4])
                                    : [2, null];
                                case 3:
                                  return e.sent(), [2, null];
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
                return (t = e.sent())
                  ? [
                      4,
                      (function(l, p, u, d) {
                        return Object(m.b)(this, void 0, void 0, function() {
                          var t, n, r, o, i, a, s, c;
                          return Object(m.e)(this, function(e) {
                            switch (e.label) {
                              case 0:
                                if (
                                  ((t = f.getPublicKey(
                                    d.publickey_mod,
                                    d.publickey_exp
                                  )),
                                  !1 === (n = f.encrypt(u.strPassword, t)))
                                )
                                  return [2, null];
                                (r = b()).append("password", n),
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
                                  (i = v(l, "dologin")),
                                  (e.label = 1);
                              case 1:
                                return (
                                  e.trys.push([1, 3, , 4]),
                                  [4, _.a.post(i, r, o)]
                                );
                              case 2:
                                return 200 != (s = e.sent()).status
                                  ? [2, null]
                                  : (c = s.data)
                                  ? (c.oauth && (c.oauth = JSON.parse(c.oauth)),
                                    (a = c),
                                    [3, 4])
                                  : [2, null];
                              case 3:
                                return e.sent(), [2, null];
                              case 4:
                                return [2, a];
                            }
                          });
                        });
                      })(n, r, o, t)
                    ]
                  : (console.log("Failed to get RSA key"), [2, null]);
              case 2:
                return [2, e.sent()];
            }
          });
        });
      }
      var y,
        E,
        S,
        C,
        O = n("TLQK");
      ((E = y || (y = {}))[(E.Invalid = 0)] = "Invalid"),
        (E[(E.AccountName = 1)] = "AccountName"),
        (E[(E.EmailCode = 2)] = "EmailCode"),
        (E[(E.TwoFactorCode = 3)] = "TwoFactorCode"),
        (E[(E.Complete = 4)] = "Complete"),
        ((C = S || (S = {}))[(C.None = 0)] = "None"),
        (C[(C.InvalidCode = 1)] = "InvalidCode");
      var w = (function() {
          function e(e, t) {
            (this.m_strBaseURL = ""),
              (this.m_strOAuthClientID = ""),
              (this.m_fnLoginComplete = null),
              (this.m_bRequestInFlight = !1),
              (this.m_eCurrentStep = y.AccountName),
              (this.m_strErrorMessage = ""),
              (this.m_strEmailDomain = ""),
              (this.m_strCaptchaURL = ""),
              (this.m_eSteamGuardCodeError = S.None),
              (this.m_strBaseURL = e),
              (this.m_strOAuthClientID = t),
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
            (e.prototype.Shutdown = function() {
              this.m_fnLoginComplete = null;
            }),
            (e.prototype.SetLoginCompleteCallback = function(e) {
              this.m_fnLoginComplete = e;
            }),
            (e.prototype.SetUserName = function(e) {
              this.m_userFields.strUserName = e;
            }),
            (e.prototype.GetUserName = function() {
              return this.m_userFields.strUserName;
            }),
            (e.prototype.SetPassword = function(e) {
              this.m_userFields.strPassword = e;
            }),
            (e.prototype.GetPassword = function() {
              return this.m_userFields.strPassword;
            }),
            (e.prototype.SetRememberPassword = function(e) {
              this.m_userFields.bRememberLogin = e;
            }),
            (e.prototype.GetRememberPassword = function() {
              return this.m_userFields.bRememberLogin;
            }),
            (e.prototype.SetEmailAuthCode = function(e) {
              this.m_userFields.strEmailAuthCode = e;
            }),
            (e.prototype.GetEmailAuthCode = function() {
              return this.m_userFields.strEmailAuthCode;
            }),
            (e.prototype.GetEmailDomain = function() {
              return this.m_strEmailDomain;
            }),
            (e.prototype.SetTwoFactorCode = function(e) {
              this.m_userFields.strTwoFactorCode = e;
            }),
            (e.prototype.GetTwoFactorCode = function() {
              return this.m_userFields.strTwoFactorCode;
            }),
            (e.prototype.SetCaptchaText = function(e) {
              this.m_userFields.strCaptchaText = e;
            }),
            (e.prototype.GetCaptchaText = function() {
              return this.m_userFields.strCaptchaText;
            }),
            (e.prototype.IsRequestInFlight = function() {
              return this.m_bRequestInFlight;
            }),
            (e.prototype.GetCurrentStep = function() {
              return this.m_eCurrentStep;
            }),
            (e.prototype.GetErrorMessage = function() {
              return this.m_strErrorMessage;
            }),
            (e.prototype.SetInitialErrorMessage = function(e) {
              this.m_strErrorMessage = e;
            }),
            (e.prototype.GetSteamGuardCodeError = function() {
              return this.m_eSteamGuardCodeError;
            }),
            (e.prototype.GetCaptchaURL = function() {
              return this.m_strCaptchaURL;
            }),
            (e.prototype.DoLogin = function() {
              return Object(m.b)(this, void 0, void 0, function() {
                var t,
                  n = this;
                return Object(m.e)(this, function(e) {
                  switch (e.label) {
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
                        (t = e.sent()),
                        Object(d.runInAction)(function() {
                          (n.m_bRequestInFlight = !1), n.UpdateLoginResult(t);
                        }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.UpdateLoginResult = function(e) {
              if (!e)
                return (
                  console.log("Login timeout"),
                  void (this.m_strErrorMessage = Object(O.d)(
                    "#ConnectionTrouble_FailedToConnect"
                  ))
                );
              if (e.login_complete) {
                if (
                  ((this.m_eCurrentStep = y.Complete), this.m_fnLoginComplete)
                ) {
                  var t = {
                    steamID: e.oauth ? e.oauth.steamid : "",
                    strAccountName: e.oauth ? e.oauth.account_name : "",
                    strOAuthToken: e.oauth ? e.oauth.oauth_token : ""
                  };
                  this.m_fnLoginComplete(t);
                }
              } else
                (this.m_strErrorMessage = e.message || ""),
                  (this.m_eSteamGuardCodeError = S.None),
                  e.requires_twofactor
                    ? (this.UpdateCaptchaURL("-1"),
                      this.m_eCurrentStep != y.TwoFactorCode ||
                        this.m_strErrorMessage ||
                        ((this.m_strErrorMessage = Object(O.d)(
                          "#MobileLogin_IncorrectSteamGuard"
                        )),
                        (this.m_eSteamGuardCodeError = S.InvalidCode),
                        (this.m_userFields.strTwoFactorCode = "")),
                      (this.m_eCurrentStep = y.TwoFactorCode))
                    : e.captcha_needed && e.captcha_gid
                    ? ((this.m_eCurrentStep = y.AccountName),
                      this.UpdateCaptchaURL(e.captcha_gid))
                    : e.emailauth_needed
                    ? (e.emaildomain && (this.m_strEmailDomain = e.emaildomain),
                      e.emailsteamid &&
                        (this.m_userFields.emailSteamID = e.emailsteamid),
                      this.m_eCurrentStep != y.EmailCode ||
                        this.m_strErrorMessage ||
                        ((this.m_strErrorMessage = Object(O.d)(
                          "#MobileLogin_IncorrectSteamGuard"
                        )),
                        (this.m_eSteamGuardCodeError = S.InvalidCode),
                        (this.m_userFields.strEmailAuthCode = "")),
                      (this.m_eCurrentStep = y.EmailCode))
                    : console.log("Unhandled login error");
            }),
            (e.prototype.RefreshCaptcha = function() {
              return Object(m.b)(this, void 0, void 0, function() {
                var t;
                return Object(m.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        (function(i) {
                          return Object(m.b)(this, void 0, void 0, function() {
                            var t, n, r, o;
                            return Object(m.e)(this, function(e) {
                              switch (e.label) {
                                case 0:
                                  (t = b()),
                                    (n = v(i, "refreshcaptcha")),
                                    (r = ""),
                                    (e.label = 1);
                                case 1:
                                  return (
                                    e.trys.push([1, 3, , 4]),
                                    [4, _.a.post(n, t)]
                                  );
                                case 2:
                                  return 200 != (o = e.sent()).status
                                    ? [2, !1]
                                    : ((r = o.data.gid), [3, 4]);
                                case 3:
                                  return e.sent(), [2, !1];
                                case 4:
                                  return [2, r];
                              }
                            });
                          });
                        })(this.m_strBaseURL)
                      ];
                    case 1:
                      return (
                        (t = e.sent())
                          ? this.UpdateCaptchaURL(t)
                          : console.log("Failed to get captcha"),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.UpdateCaptchaURL = function(e) {
              (this.m_userFields.gidCaptcha = e),
                (this.m_userFields.strCaptchaText = ""),
                (this.m_strCaptchaURL =
                  "-1" != e
                    ? (function(e, t) {
                        return v(e, "rendercaptcha") + "?gid=" + t;
                      })(this.m_strBaseURL, e)
                    : "");
            }),
            Object(m.c)(
              [d.observable],
              e.prototype,
              "m_bRequestInFlight",
              void 0
            ),
            Object(m.c)([d.observable], e.prototype, "m_userFields", void 0),
            Object(m.c)([d.observable], e.prototype, "m_eCurrentStep", void 0),
            Object(m.c)(
              [d.observable],
              e.prototype,
              "m_strErrorMessage",
              void 0
            ),
            Object(m.c)(
              [d.observable],
              e.prototype,
              "m_strEmailDomain",
              void 0
            ),
            Object(m.c)([d.observable], e.prototype, "m_strCaptchaURL", void 0),
            Object(m.c)(
              [d.observable],
              e.prototype,
              "m_eSteamGuardCodeError",
              void 0
            ),
            Object(m.c)([i.a], e.prototype, "DoLogin", null),
            Object(m.c)(
              [d.action.bound],
              e.prototype,
              "UpdateCaptchaURL",
              null
            ),
            e
          );
        })(),
        A = n("0OaU"),
        I = (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return (
              (t.m_manager = new w(t.props.baseURL)),
              t.props.onLoginComplete &&
                t.m_manager.SetLoginCompleteCallback(t.props.onLoginComplete),
              t
            );
          }
          return (
            Object(m.d)(e, n),
            (e.prototype.componentWillUnmount = function() {
              this.m_manager.Shutdown();
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = (e.baseURL, e.onLoginComplete, e.className),
                n = Object(m.f)(e, ["baseURL", "onLoginComplete", "className"]),
                r = Object(l.a)(u.a.LoginDialog, t),
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
                  i && a.a.createElement(T, { text: i }),
                  o == y.AccountName &&
                    a.a.createElement(N, { manager: this.m_manager }),
                  o == y.TwoFactorCode &&
                    a.a.createElement(B, {
                      manager: this.m_manager,
                      authtype: y.TwoFactorCode
                    }),
                  o == y.EmailCode &&
                    a.a.createElement(B, {
                      manager: this.m_manager,
                      authtype: y.EmailCode
                    }),
                  o == y.Complete &&
                    a.a.createElement(
                      "div",
                      { className: u.a.LoginComplete },
                      a.a.createElement(A.a, null)
                    )
                )
              );
            }),
            (e = Object(m.c)([o.observer], e))
          );
        })(a.a.Component);
      function T(e) {
        return a.a.createElement(
          "div",
          { className: u.a.ErrorMessage },
          e.text
        );
      }
      var N = (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return (t.state = { nNameSize: 0, nPassSize: 0 }), t;
          }
          return (
            Object(m.d)(e, n),
            (e.prototype.OnSubmit = function(e) {
              e.preventDefault(), this.props.manager.DoLogin();
            }),
            (e.prototype.OnChangeName = function(e) {
              var t = e.target.value || "";
              this.props.manager.SetUserName(e.target.value),
                24 < t.length && t.length < 39
                  ? this.setState({ nNameSize: 1 })
                  : 38 < t.length
                  ? this.setState({ nNameSize: 2 })
                  : this.setState({ nNameSize: 0 });
            }),
            (e.prototype.OnChangePassword = function(e) {
              var t = e.target.value || "";
              (t = t.replace(/[^\x00-\x7F]/g, "")),
                this.props.manager.SetPassword(t),
                19 < t.length && t.length < 39
                  ? this.setState({ nPassSize: 1 })
                  : 38 < t.length
                  ? this.setState({ nPassSize: 2 })
                  : this.setState({ nPassSize: 0 });
            }),
            (e.prototype.OnChangeRememberPass = function(e) {
              this.props.manager.SetRememberPassword(e.target.checked);
            }),
            (e.prototype.render = function() {
              var e,
                t,
                n = this,
                r = this.props.manager;
              return (
                (t =
                  1 == this.state.nPassSize
                    ? u.a.MedPass
                    : 2 == this.state.nPassSize
                    ? u.a.LargePass
                    : u.a.DefaultPass),
                (e =
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
                      className: Object(l.a)(u.a.AccountNameLabel, e),
                      label: Object(O.d)("#Login_AccountName"),
                      type: "text",
                      value: r.GetUserName(),
                      focusOnMount: !0,
                      maxLength: 64,
                      onChange: this.OnChangeName
                    }),
                    a.a.createElement(s.j, {
                      bIsPassword: !0,
                      className: Object(l.a)(u.a.PasswordDots, t),
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
            Object(m.c)([i.a], e.prototype, "OnSubmit", null),
            Object(m.c)([i.a], e.prototype, "OnChangeName", null),
            Object(m.c)([i.a], e.prototype, "OnChangePassword", null),
            Object(m.c)([i.a], e.prototype, "OnChangeRememberPass", null),
            (e = Object(m.c)([o.observer], e))
          );
        })(a.a.Component),
        L = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(m.d)(t, e),
            (t.prototype.OnCaptchaText = function(e) {
              this.props.manager.SetCaptchaText(e.target.value);
            }),
            (t.prototype.RefreshCaptcha = function(e) {
              this.props.manager.RefreshCaptcha();
            }),
            (t.prototype.render = function() {
              var e = this.props.manager;
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
                        src: e.GetCaptchaURL()
                      })
                    ),
                    a.a.createElement(s.j, {
                      className: u.a.CaptchaInput,
                      type: "text",
                      autoComplete: "off",
                      maxLength: 6,
                      value: e.GetCaptchaText(),
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
            Object(m.c)([i.a], t.prototype, "OnCaptchaText", null),
            Object(m.c)([i.a], t.prototype, "RefreshCaptcha", null),
            (t = Object(m.c)([o.observer], t))
          );
        })(a.a.Component),
        B = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(m.d)(t, e),
            (t.prototype.OnSubmit = function(e) {
              e.preventDefault(), this.props.manager.DoLogin();
            }),
            (t.prototype.OnChangeAuthCode = function(e) {
              this.props.authtype == y.TwoFactorCode
                ? this.props.manager.SetTwoFactorCode(e.target.value)
                : this.props.manager.SetEmailAuthCode(e.target.value);
            }),
            (t.prototype.render = function() {
              var e,
                t = this.props.manager,
                n = "",
                r = null,
                o = "",
                i = t.GetSteamGuardCodeError() == S.InvalidCode;
              switch (this.props.authtype) {
                case y.TwoFactorCode:
                  (n = t.GetTwoFactorCode()),
                    (r = Object(O.d)("#Login_Enter2FA")),
                    (e = a.a.createElement(c.l, null)),
                    (o = Object(O.d)("#Login_Enter2FAHelp"));
                  break;
                case y.EmailCode:
                  (n = t.GetEmailAuthCode()),
                    (r = Object(O.j)(
                      "#Login_SentSteamguard",
                      a.a.createElement(
                        "span",
                        { className: u.a.Highlight },
                        "@",
                        t.GetEmailDomain()
                      )
                    )),
                    (o = Object(O.d)("#Login_EnterSteamguard")),
                    (e = a.a.createElement(c.j, null));
              }
              return a.a.createElement(
                "div",
                { className: u.a.AuthenticationPanel },
                a.a.createElement(s.k, null, Object(O.d)("#Login_SigningIn")),
                a.a.createElement(
                  "div",
                  { className: u.a.SigningInAccountName },
                  t.GetUserName()
                ),
                a.a.createElement(s.b, null, r),
                a.a.createElement(
                  "div",
                  { className: u.a.AuthenticatorInputcontainer },
                  e,
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
            Object(m.c)([i.a], t.prototype, "OnSubmit", null),
            Object(m.c)([i.a], t.prototype, "OnChangeAuthCode", null),
            (t = Object(m.c)([o.observer], t))
          );
        })(a.a.Component),
        D = n("ka0M"),
        j = n("lkRc");
      n.d(t, "a", function() {
        return x;
      });
      var R = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(m.d)(t, e),
            (t.prototype.OnLoginComplete = function(e) {
              window.location.href =
                this.props.redirectURL &&
                this.props.redirectURL !== Object(j.d)() + "login"
                  ? this.props.redirectURL
                  : j.c.COMMUNITY_BASE_URL;
            }),
            (t.prototype.render = function() {
              return j.i && j.i.logged_in
                ? (this.OnLoginComplete(), null)
                : a.a.createElement(
                    "div",
                    null,
                    a.a.createElement(I, {
                      baseURL: Object(j.d)(),
                      onLoginComplete: this.OnLoginComplete
                    })
                  );
            }),
            Object(m.c)([i.a], t.prototype, "OnLoginComplete", null),
            t
          );
        })(a.a.Component),
        M = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(m.d)(t, e),
            (t.prototype.render = function() {
              return a.a.createElement(
                D.a,
                {
                  onEscKeypress: this.props.closeModal,
                  bDisableBackgroundDismiss: !0
                },
                a.a.createElement(R, { redirectURL: this.props.redirectURL })
              );
            }),
            t
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
    DWPT: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
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
                    var v = (function(e) {
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
                      b = O(
                        v,
                        this.props.nBodyAlignment,
                        this.props.nBodyDistance,
                        c,
                        l,
                        r.innerWidth,
                        r.innerHeight
                      ),
                      g = b.nLeft,
                      y = b.nTop,
                      E = b.nOverflow,
                      S = b.nLateralOverflow;
                    if (
                      (E < _ && ((u = v), (m = g), (h = y), (_ = E), (f = S)),
                      _ > this.props.nAllowOffscreenPx)
                    )
                      return (
                        t.setAttribute("style", "display: none;"),
                        (this.m_bNoSpace = !0),
                        void (this.props.onNoSpace && this.props.onNoSpace())
                      );
                  }
                  0 === this.props.nMaxLateralMoveOnScreen ||
                    p ||
                    ((h = (e = (function(e, t, n, r, o) {
                      var i = Math.max(t[0], t[1]);
                      void 0 !== e && (i = Math.min(e, i));
                      i = Math.max(0, i);
                      var a = t[0] > t[1] ? i : -i;
                      "left" === n || "right" === n ? (r += a) : (o += a);
                      return [r, o];
                    })(this.props.nMaxLateralMoveOnScreen, f, u, h, m))[0]),
                    (m = e[1]));
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
            (e.defaultProps = {
              direction: "right",
              nBodyAlignment: 0.5,
              nAllowOffscreenPx: 10,
              nBodyDistance: 8,
              nMaxLateralMoveOnScreen: void 0
            }),
            Object(l.c)([r.a], e.prototype, "bindHover", null),
            Object(l.c)([r.a], e.prototype, "OnWindowBlur", null),
            (e = Object(l.c)([o.observer], e))
          );
        })(p.Component);
      function O(e, t, n, r, o, i, a) {
        var s,
          c,
          l,
          p,
          u = i,
          d = a;
        switch (e) {
          case "right":
            (s = r.right + n),
              (c = m(r.top, r.height, o.height, t)),
              (l = Math.max(0, s + o.width - u)),
              (p = [Math.max(0, 0 - c), Math.max(0, c + o.height - d)]);
            break;
          case "left":
            (s = r.left - n - o.width),
              (c = m(r.top, r.height, o.height, t)),
              (l = Math.max(0, 0 - s)),
              (p = [Math.max(0, 0 - c), Math.max(0, c + o.height - d)]);
            break;
          case "bottom":
            (s = m(r.left, r.width, o.width, t)),
              (c = r.bottom + n),
              (l = Math.max(0, c + o.height - d)),
              (p = [Math.max(0, 0 - s), Math.max(0, s + o.width - u)]);
            break;
          case "top":
            (s = m(r.left, r.width, o.width, t)),
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
      function m(e, t, n, r) {
        return Math.max(0, Math.min(1, r)) * (t - n) + e;
      }
    },
    Dq3P: function(e, t, n) {
      e.exports = {
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
    Gorr: function(e, t, n) {
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
        h = (function(t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          return (
            Object(o.d)(e, t),
            (e.prototype.render = function() {
              if (null == this.props.text)
                return l.createElement(l.Fragment, null, this.props.children);
              var e;
              if (
                ((e =
                  this.props.text instanceof Array
                    ? this.props.text
                        .map(function(e) {
                          return e ? e.toString() : "";
                        })
                        .filter(function(e) {
                          return 0 < e.length;
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
                      e
                  ),
                  l.createElement(l.Fragment, null, this.props.children)
                );
              var t = l.Children.only(this.props.children);
              return l.cloneElement(t, {
                "data-copystyle": this.props.style,
                "data-copytext": e
              });
            }),
            (e.defaultProps = { text: "" }),
            e
          );
        })(l.Component);
      var _ = n("rcgg"),
        f = n.n(_),
        v = n("exH9");
      var b = n("lkRc");
      n.d(t, "a", function() {
        return g;
      }),
        n.d(t, "b", function() {
          return E;
        }),
        n.d(t, "c", function() {
          return O;
        });
      var g = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.d)(t, e),
            (t.prototype.OnMouseEnter = function(e) {
              this.props.emoticonHoverStore
                .GetEmoticonHover(e.currentTarget.getAttribute("data-emoticon"))
                .Show(e, y);
            }),
            (t.prototype.OnMouseLeave = function(e) {
              this.props.emoticonHoverStore
                .GetEmoticonHover(e.currentTarget.getAttribute("data-emoticon"))
                .Hide(e);
            }),
            (t.prototype.render = function() {
              var e = ":" + this.props.emoticon + ":";
              return l.createElement(
                h,
                { text: e, style: "merge-adjacent" },
                l.createElement("img", {
                  src: r.a.GetEmoticonURL(
                    this.props.emoticon,
                    this.props.large
                  ),
                  alt: e,
                  className: Object(v.a)(
                    f.a.emoticon,
                    this.props.large ? f.a.large : void 0
                  ),
                  "data-emoticon": this.props.emoticon,
                  onMouseEnter: this.OnMouseEnter,
                  onMouseLeave: this.OnMouseLeave
                })
              );
            }),
            Object(o.c)([p.a], t.prototype, "OnMouseEnter", null),
            Object(o.c)([p.a], t.prototype, "OnMouseLeave", null),
            t
          );
        })(l.PureComponent),
        y = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.d)(t, e),
            (t.prototype.render = function() {
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
            (t = Object(o.c)([a.observer], t))
          );
        })(l.Component),
        E = (function(r) {
          function e(e) {
            var t = r.call(this, e) || this;
            (t.m_ScrollCoordinator = new i.e(40)),
              (t.state = { strSearchText: "" });
            var n = t.props.emoticonStore;
            return (
              n.is_initialized ||
                (n.UpdateEmoticonList(),
                (t.m_disposeEmoticonStore = Object(d.when)(
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
            Object(o.d)(e, r),
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
              var n = t.name;
              return (
                e && (n = e + t.name),
                l.createElement(w, {
                  key: n,
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
                      e.map(function(e) {
                        return l.createElement(C, {
                          key: e.name,
                          effect: e,
                          onEffectSelected: t.props.onRoomEffectSelected,
                          roomEffectSettings: t.props.roomEffectSettings
                        });
                      })
                    ),
                    l.createElement("div", { className: f.a.TopDivider })
                  );
            }),
            (e.prototype.renderStickerButtons = function() {
              var t = this,
                e = this.getAvailableStickers();
              return 0 == e.length
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
                      e.map(function(e) {
                        return l.createElement(S, {
                          key: e.name,
                          stickerName: e.name,
                          onStickerSelected: t.props.onStickerSelected
                        });
                      })
                    ),
                    l.createElement("div", { className: f.a.BottomDivider })
                  );
            }),
            (e.prototype.renderStickersAndEffectsButtons = function() {
              var e = this.props,
                t = e.bShowEffects,
                n = e.bShowStickers;
              return t || n
                ? l.createElement(
                    l.Fragment,
                    null,
                    this.renderEffectButtons(),
                    this.renderStickerButtons()
                  )
                : null;
            }),
            (e.prototype.render = function() {
              var e = this.props.emoticonStore,
                t = [],
                n = [],
                r = !1;
              if (e.is_initialized) {
                var o = this.state.strSearchText.trim();
                if (0 < o.length)
                  (r = !0),
                    (n = (t = e.SearchEmoticons(o, 50, !1)).map(
                      this.RenderEmoticon.bind(this, "")
                    )),
                    (this.m_strFirstEmoticon = t.length ? t[0].name : null);
                else if (this.props.strFlairGroupID)
                  (n = e
                    .GetFlairListByGroupID(this.props.strFlairGroupID)
                    .map(this.RenderEmoticon.bind(this, ""))),
                    (this.m_strFirstEmoticon = null);
                else {
                  var i = e.recent_emoticons,
                    a = e.emoticon_list,
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
            Object(o.c)([p.a], e.prototype, "OnClick", null),
            Object(o.c)([p.a], e.prototype, "OnSearchInput", null),
            Object(o.c)([p.a], e.prototype, "OnSubmit", null),
            Object(o.c)([p.a], e.prototype, "OnScrollRef", null),
            Object(o.c)([p.a], e.prototype, "OnScroll", null),
            e
          );
        })(l.Component),
        S = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                imageURL: (function(e, t) {
                  return e + "economy/sticker/" + t;
                })(b.c.COMMUNITY_CDN_URL, e.props.stickerName)
              }),
              e
            );
          }
          return (
            Object(o.d)(e, t),
            (e.prototype.render = function() {
              var e = this;
              return l.createElement(
                "button",
                {
                  className: f.a.StickerButton,
                  type: "button",
                  onClick: function() {
                    return e.props.onStickerSelected(e.props.stickerName);
                  },
                  title: Object(m.d)("#ChatEntryButton_SendSticker")
                },
                l.createElement("img", {
                  style: { width: "100%" },
                  src: this.state.imageURL
                })
              );
            }),
            e
          );
        })(l.Component),
        C = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.effect.name,
                t = this.props.roomEffectSettings[e],
                n = this.props.onEffectSelected;
              return l.createElement(
                "button",
                {
                  key: e,
                  className: f.a.RoomEffectButton,
                  type: "button",
                  onClick: function() {
                    return n(e);
                  },
                  title: Object(m.d)(t.buttonToken)
                },
                t.renderEffectIcon(),
                l.createElement(
                  "span",
                  { className: f.a.CountBadge },
                  this.props.effect.name.startsWith("lny2020_")
                    ? "∞"
                    : this.props.effect.count
                )
              );
            }),
            t
          );
        })(l.Component);
      function O() {
        return l.createElement(
          "div",
          { className: f.a.NewEmoticonIndicator },
          l.createElement("div", { className: f.a.NewEmoticonCircle })
        );
      }
      var w = (function(n) {
        function e(e) {
          var t = n.call(this, e) || this;
          return (t.state = { visible: !1 }), t;
        }
        return (
          Object(o.d)(e, n),
          (e.prototype.SetVisible = function(e) {
            e && !this.state.visible && this.setState({ visible: !0 });
          }),
          (e.prototype.componentDidMount = function() {
            this.props.coordinator.RegisterChild(
              s.findDOMNode(this),
              this.SetVisible
            );
          }),
          (e.prototype.componentWillUnmount = function() {
            this.props.coordinator.UnregisterChild(s.findDOMNode(this));
          }),
          (e.prototype.render = function() {
            var e = this.props.emoticon,
              t = [f.a.EmoticonSelector_Item],
              n = !1;
            return (
              !e.last_used &&
                e.time_received &&
                (t.push(f.a.EmoticonSelector_Item_New), (n = !0)),
              l.createElement(
                "div",
                {
                  className: v.a.apply(void 0, t),
                  "data-emoticon": e.name,
                  onClick: this.props.onClick
                },
                this.state.visible &&
                  l.createElement(g, {
                    emoticonHoverStore: this.props.emoticonHoverStore,
                    emoticon: e.name,
                    large: !0
                  }),
                n && l.createElement(O, null)
              )
            );
          }),
          Object(o.c)([p.a], e.prototype, "SetVisible", null),
          e
        );
      })(l.Component);
    },
    IS34: function(e, t, n) {
      e.exports =
        n.p +
        "../../../images/applications/store/icon_expand_large.png?v=valveisgoodatcaching";
    },
    IzPI: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return o;
      }),
        n.d(t, "b", function() {
          return i;
        }),
        n.d(t, "d", function() {
          return a;
        }),
        n.d(t, "c", function() {
          return s;
        });
      var r = n("lkRc");
      function o(e) {
        var t = new RegExp(
            "^(steam://openurl(_external)?/)?((f|ht)tps?://)?([^@/?#]*@)?([^/#?]+)",
            "im"
          ),
          n = e.match(t);
        return n && 5 < n.length ? n[6].toString() : e;
      }
      function i(e) {
        var t = o(e);
        return t.startsWith("www.") && (t = t.slice(4)), t;
      }
      function a(e) {
        return (
          "http:" !== e.substr(0, 5) ||
            1 != r.c.EUNIVERSE ||
            ("http:" ==
              (e = (e = (e = (e = (e = (e = (e = (e = e.replace(
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
              (e = "https:" + e.substr(5))),
          e
        );
      }
      function s(e) {
        return r.c.SNR && 0 < r.c.SNR.length
          ? e + (0 <= e.indexOf("?") ? "&" : "?") + "snr=" + r.c.SNR
          : e;
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
    N6Aq: function(e, t, n) {
      e.exports = {
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
    NKJh: function(e, t, n) {
      e.exports = {
        StoreSaleWidgetContainer:
          "salepreviewwidgets_StoreSaleWidgetContainer_2hhNO",
        Bundle: "salepreviewwidgets_Bundle_2GbhL",
        WishList: "salepreviewwidgets_WishList_1djkd",
        Action: "salepreviewwidgets_Action_2zssE",
        StoreSaleWidgetImage: "salepreviewwidgets_StoreSaleWidgetImage_yvqq8",
        StoreSaleWidgetImageCtn:
          "salepreviewwidgets_StoreSaleWidgetImageCtn_1NnBn",
        StoreSaleImage: "salepreviewwidgets_StoreSaleImage_17bKG",
        StoreSaleVideo: "salepreviewwidgets_StoreSaleVideo_1gjSJ",
        StoreSaleWidgetTitle: "salepreviewwidgets_StoreSaleWidgetTitle_2ekpT",
        StoreSaleWidgetRelease:
          "salepreviewwidgets_StoreSaleWidgetRelease_1qvTF",
        StoreSaleWidgetTags: "salepreviewwidgets_StoreSaleWidgetTags_2bkP-",
        StoreSaleWidgetScreenshots:
          "salepreviewwidgets_StoreSaleWidgetScreenshots_1lWbL",
        AppTag: "salepreviewwidgets_AppTag_3FJnZ",
        StoreSaleWidgetShortDesc:
          "salepreviewwidgets_StoreSaleWidgetShortDesc_3AsE5",
        StoreSaleWidgetLeft: "salepreviewwidgets_StoreSaleWidgetLeft_3DkfN",
        StoreSaleWidgetRight: "salepreviewwidgets_StoreSaleWidgetRight_v9uRg",
        TitleCtn: "salepreviewwidgets_TitleCtn_3rrH9",
        CapsulePlatform: "salepreviewwidgets_CapsulePlatform_2bCf9",
        StoreActionWidgetContainer:
          "salepreviewwidgets_StoreActionWidgetContainer_kW6m4",
        StoreSalePriceActionWidgetContainer:
          "salepreviewwidgets_StoreSalePriceActionWidgetContainer_1JuIp",
        StoreSaleDiscountedPriceCtn:
          "salepreviewwidgets_StoreSaleDiscountedPriceCtn_3NhLu",
        StoreSalePriceBox: "salepreviewwidgets_StoreSalePriceBox_3j4dI",
        StoreSaleDiscountBox: "salepreviewwidgets_StoreSaleDiscountBox_cnkoF",
        StoreOrignalPrice: "salepreviewwidgets_StoreOrignalPrice_18ANC",
        Discounted: "salepreviewwidgets_Discounted_1g0B-",
        StoreSalePriceButton: "salepreviewwidgets_StoreSalePriceButton_1BejQ",
        CapsuleContainer: "salepreviewwidgets_CapsuleContainer_22Acx",
        CapsuleImage: "salepreviewwidgets_CapsuleImage_2eQ4m",
        InCarouselWidget: "salepreviewwidgets_InCarouselWidget_z5kQ3",
        Muted: "salepreviewwidgets_Muted_1HVwz",
        CapsuleBottomBar: "salepreviewwidgets_CapsuleBottomBar_3lmdE",
        PlayNowButton: "salepreviewwidgets_PlayNowButton_38ePa",
        AddToLibraryButton: "salepreviewwidgets_AddToLibraryButton_1DrDh",
        CapsuleTitle: "salepreviewwidgets_CapsuleTitle_E_751",
        Banner: "salepreviewwidgets_Banner_2gxv9",
        Blue: "salepreviewwidgets_Blue_2o-5t",
        LiveIcon: "salepreviewwidgets_LiveIcon_1ZIpI",
        CapsuleMenuButton: "salepreviewwidgets_CapsuleMenuButton_niVR8",
        BundleContentsCtn: "salepreviewwidgets_BundleContentsCtn_34acu",
        BundleContentItem: "salepreviewwidgets_BundleContentItem_2sdNO",
        ExpandPackageButtonCtn:
          "salepreviewwidgets_ExpandPackageButtonCtn_2quyD",
        ExpandedPackageItems: "salepreviewwidgets_ExpandedPackageItems_3WUOP",
        BundleLargeCtn: "salepreviewwidgets_BundleLargeCtn_1Wbr3",
        BundleImage: "salepreviewwidgets_BundleImage_3D54h",
        BundleContentPreview: "salepreviewwidgets_BundleContentPreview_jQ5Ga",
        BundleBuyButtons: "salepreviewwidgets_BundleBuyButtons_2puKN",
        BundleBuyButton: "salepreviewwidgets_BundleBuyButton_1Q0r5",
        BundleDiscounts: "salepreviewwidgets_BundleDiscounts_1JRvn",
        BaseDiscount: "salepreviewwidgets_BaseDiscount_3mInD",
        PreviewCtn: "salepreviewwidgets_PreviewCtn_1NM53",
        PreviewItem: "salepreviewwidgets_PreviewItem_2yhQb",
        PreviewImg: "salepreviewwidgets_PreviewImg_1jx70",
        BundleShowButton: "salepreviewwidgets_BundleShowButton_2Vu78",
        ShowContentsButton: "salepreviewwidgets_ShowContentsButton_-VlK4",
        bordered_live_stream_icon:
          "salepreviewwidgets_bordered_live_stream_icon_2E28o"
      };
    },
    "Om+o": function(e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEFERTQyQ0E1Q0EyMTFFNTgwMzNBQUE0RTk3QjgyMDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEFERTQyQ0I1Q0EyMTFFNTgwMzNBQUE0RTk3QjgyMDkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowQURFNDJDODVDQTIxMUU1ODAzM0FBQTRFOTdCODIwOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowQURFNDJDOTVDQTIxMUU1ODAzM0FBQTRFOTdCODIwOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Prxq/1gAAAGJSURBVHjaYvz//z/DQAImhgEG9HTASiDeiiEKigI64Pj/CLAJiBlhcvSwXPc/JjgLxIIgeUYaJ0JBIL4NxMJY5B4BcTitHXAeiA3wyL+kZSJcQMByEEimVbxn/ScM8mmVCK2IsHwhTD2104AwNHFx4VFzAYgNaVUQ7SFg+Q8gdqZVSTifiEQHsvwdvpKQGYiDyIj3HCLiPRubXnSBBVDFE2iV6PA5IAlN0woiLJcG4h8ELD+PzwwYwxiH5sNALIzHgNsELH8DxEKEHCAGxB/xGPIEiNWwaF5PRNDrEQpFEHGZCIO+ArEjksZKIvTEE5OGQEQyEP/7TxwAJThDItRNIjYRwxgGQPz2P3XAEVKyMHJRLAvEu4FYnYLC6D3UnK/ktAkfA7EeEB+kwAEOpFiOr024mIygjyWn9sQn2UOC5VPJrb4JKcglwvLDlLQfiFHkDcR/cVj+CIjZaO0AfNlUidIWFCmKZYD4GpLlgdRowpHaJGMH4v1AfBGIM6nRiqF1v2Dw944BAgwAsWqnpJAiSOIAAAAASUVORK5CYII=";
    },
    "R+8l": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
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
          function e(e) {
            (this.bundleid = e.bundleid),
              (this.packageids = e.packageids),
              (this.enabled = e.enabled),
              (this.name = e.name),
              (this.finalized = e.finalized),
              (this.must_purchase_as_set = e.must_purchase_as_set),
              (this.publisherid = e.publisherid),
              (this.header_image_url = e.header_image_url),
              (this.initial_price = e.initial_price),
              (this.final_price = e.final_price),
              (this.formatted_orig_price = e.formatted_orig_price),
              (this.formatted_final_price = e.formatted_final_price),
              (this.discount_percent = e.discount_percent),
              (this.bundle_base_discount = e.bundle_base_discount),
              (this.available_windows = e.available_windows),
              (this.available_mac = e.available_mac),
              (this.available_linux = e.available_linux),
              (this.support_vrhmd = e.support_vrhmd),
              (this.support_vrhmd_only = e.support_vrhmd_only);
          }
          return (
            (e.prototype.GetHeaderImageDimension = function() {
              return { width: 292, height: 136 };
            }),
            e
          );
        })(),
        a = new ((function() {
          function e() {
            (this.m_mapBundleInfo = new Map()),
              (this.m_mapMissingBundles = new Map()),
              (this.m_bLoadedFromConfig = !1);
          }
          return (
            (e.prototype.LazyInit = function() {
              var t = this;
              if (!this.m_bLoadedFromConfig) {
                var e = Object(p.f)("bundleinfo", "application_config");
                this.ValidateStoreDefault(e) &&
                  (("dev" != p.c.WEB_UNIVERSE && "beta" != p.c.WEB_UNIVERSE) ||
                    console.log(
                      "DEV_DEBUG: CBundleInfoStore loading bundles payload: " +
                        e.length
                    ),
                  Object(o.runInAction)(function() {
                    return e.forEach(function(e) {
                      return t.m_mapBundleInfo.set(
                        Number(e.bundleid),
                        new d(e)
                      );
                    });
                  }));
                var n = Object(p.f)("bundleunknown", "application_config");
                Object(i.a)(n) &&
                  n.forEach(function(e) {
                    return t.m_mapMissingBundles.set(e, !0);
                  }),
                  (this.m_bLoadedFromConfig = !0);
              }
            }),
            (e.prototype.ValidateStoreDefault = function(e) {
              var t = e;
              return (
                !!(
                  t &&
                  Array.isArray(t) &&
                  0 < t.length &&
                  "object" == typeof t[0]
                ) &&
                ("number" == typeof t[0].bundleid &&
                  "string" == typeof t[0].name)
              );
            }),
            (e.prototype.GetBundleInfo = function(e) {
              return this.LazyInit(), this.m_mapBundleInfo.get(e);
            }),
            (e.prototype.LoadBundleInfo = function(s) {
              return Object(c.b)(this, void 0, void 0, function() {
                var t,
                  n,
                  r,
                  o,
                  i,
                  a = this;
                return Object(c.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        this.LazyInit(),
                        (t = []),
                        s.forEach(function(e) {
                          a.m_mapBundleInfo.has(e) ||
                            a.m_mapMissingBundles.has(e) ||
                            t.push(e);
                        }),
                        t.length
                          ? (t.sort(),
                            [
                              4,
                              l.a.get(
                                p.c.STORE_BASE_URL +
                                  "actions/ajaxresolvebundles",
                                {
                                  params: {
                                    bundleids: t.join(","),
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
                      if (((n = e.sent()), (r = n && n.data)))
                        for (o = 0; o < r.length; o++)
                          (i = r[o]),
                            u.b.LoadPackageInfo(i.packageids),
                            this.m_mapBundleInfo.set(i.bundleid, new d(i));
                      e.label = 2;
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            Object(c.c)([o.observable], e.prototype, "m_mapBundleInfo", void 0),
            e
          );
        })())();
      window.g_BundleInfoStore = a;
    },
    RQmk: function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return c;
      }),
        n.d(t, "a", function() {
          return l;
        });
      var r = n("mrSG"),
        o = n("q1tI"),
        i = n("bxiW"),
        a = n("IzPI"),
        s = n("lkRc"),
        c = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.hoverRef = o.createRef()), e;
          }
          return (
            Object(r.d)(e, t),
            (e.prototype.OnHover = function(e) {
              "clan" != this.props.type &&
                (this.props.fnHoverState && this.props.fnHoverState(!0),
                window.GameHover &&
                  window.GameHover(
                    this.props.fnGetIDOverride
                      ? this.props.fnGetIDOverride()
                      : this.hoverRef.current,
                    e,
                    "global_hover",
                    { type: this.props.type, id: this.props.id, v6: 1 }
                  ));
            }),
            (e.prototype.OnHoverEnd = function(e) {
              "clan" != this.props.type &&
                (this.props.fnHoverState &&
                  e.relatedTarget &&
                  this.props.fnHoverState(!1),
                window.HideGameHover &&
                  window.HideGameHover(
                    this.props.fnGetIDOverride
                      ? this.props.fnGetIDOverride()
                      : this.hoverRef.current,
                    e,
                    "global_hover"
                  ));
            }),
            (e.prototype.render = function() {
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
            Object(r.c)([i.a], e.prototype, "OnHover", null),
            Object(r.c)([i.a], e.prototype, "OnHoverEnd", null),
            e
          );
        })(o.Component),
        l = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.render = function() {
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
            t
          );
        })(o.Component);
    },
    "S+Ty": function(e, t, n) {
      e.exports =
        n.p +
        "../../../images/applications/store/icon_platform_linux.png?v=valveisgoodatcaching";
    },
    UWWC: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return i;
      }),
        n.d(t, "b", function() {
          return a;
        });
      var p = n("mrSG"),
        r = n("wUwH"),
        u = n("lkRc"),
        o = n("vDqi"),
        d = n.n(o),
        i = (function(e) {
          function t() {
            return e.call(this) || this;
          }
          return (
            Object(p.d)(t, e),
            (t.prototype.BInitialized = function() {
              return !0;
            }),
            (t.prototype.GetServerTime = function() {
              return u.c.PAGE_TIMESTAMP + Math.floor(performance.now() / 1e3);
            }),
            (t.prototype.RequestEmoticonListInternal = function() {
              return Object(p.b)(this, void 0, void 0, function() {
                var t, n, r, o, i, a, s, c, l;
                return Object(p.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = []), (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          d.a.get(u.c.CHAT_BASE_URL + "actions/EmoticonData", {
                            withCredentials: !0
                          })
                        ]
                      );
                    case 2:
                      if ((n = e.sent()).data.emoticons)
                        for (r = 0, o = n.data.emoticons; r < o.length; r++)
                          (i = o[r]),
                            (a = i.name).startsWith("^")
                              ? t.push({ name: a })
                              : ((s = { name: a.substr(1, a.length - 2) }),
                                (c = s.name.toLowerCase()) != s.name &&
                                  (s.name_normalized = c),
                                i.time_last_used &&
                                  (s.last_used = i.time_last_used),
                                i.use_count && (s.use_count = i.use_count),
                                i.time_received &&
                                  (s.time_received = i.time_received),
                                t.push(s));
                      return [3, 4];
                    case 3:
                      return (
                        (l = e.sent()),
                        console.error("error loading emoticon list"),
                        console.error(l),
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
        a = new i();
    },
    UxvL: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return s;
      });
      var r = n("mrSG"),
        o = n("q1tI"),
        i = n("bxiW"),
        a = n("r64O"),
        s = (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return (t.m_refImage = o.createRef()), (t.state = { nImage: 0 }), t;
          }
          return (
            Object(r.d)(e, n),
            (e.prototype.componentDidUpdate = function(e) {
              JSON.stringify(this.props.rgSources) !=
                JSON.stringify(e.rgSources) && this.setState({ nImage: 0 });
            }),
            Object.defineProperty(e.prototype, "src", {
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
            Object.defineProperty(e.prototype, "imgRef", {
              get: function() {
                return this.m_refImage;
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype.OnImageError = function(e) {
              this.props.onIncrementalError &&
                this.props.onIncrementalError(
                  e,
                  this.props.rgSources[this.state.nImage],
                  this.state.nImage
                );
              var t = this.state.nImage + 1;
              t >= this.props.rgSources.length &&
                this.props.onError &&
                this.props.onError(e),
                t < this.props.rgSources.length && this.setState({ nImage: t });
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = (e.src,
                e.rgSources,
                e.onIncrementalError,
                e.onError,
                Object(r.f)(e, [
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
                  Object(r.a)({ src: n, ref: this.m_refImage }, t, {
                    onError: this.OnImageError
                  })
                )
              );
            }),
            Object(r.c)([i.a], e.prototype, "OnImageError", null),
            e
          );
        })(o.Component);
    },
    Xhj9: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return i;
      }),
        n.d(t, "b", function() {
          return u;
        });
      var s = n("mrSG"),
        r = n("vDqi"),
        c = n.n(r),
        o = n("2vnA"),
        l = n("bDQf"),
        p = n("lkRc"),
        i = (function() {
          function e() {}
          return (
            (e.prototype.InitFrom = function(e) {
              (this.capsule_link = e.capsule_link),
                (this.title = e.title),
                (this.capsule = e.capsule),
                (this.tiny_capsule = e.tiny_capsule),
                (this.main_capsule = e.main_capsule),
                (this.type = e.type),
                (this.price = e.price),
                (this.orig_price = e.orig_price),
                (this.discount_percent = e.discount_percent),
                (this.release = e.release),
                (this.subid = e.subid),
                (this.button_action = e.button_action),
                (this.cart_url = e.cart_url),
                (this.add_to_cart_url = e.add_to_cart_url),
                (this.app_to_run = e.app_to_run),
                (this.is_free = e.is_free),
                (this.required_age = e.required_age),
                (this.coming_soon = e.coming_soon),
                (this.appid = Number(e.appid)),
                (this.full_game_appid = Number(e.full_game_appid)),
                (this.tags = e.tags),
                (this.content_descriptors = e.content_descriptors),
                (this.available_windows = e.available_windows),
                (this.available_mac = e.available_mac),
                (this.available_linux = e.available_linux),
                (this.microtrailer = e.microtrailer),
                (this.microtrailer_mp4 = e.microtrailer_mp4),
                (this.support_vrhmd = e.support_vrhmd),
                (this.support_vrhmd_only = e.support_vrhmd_only);
            }),
            (e.prototype.GetCapsuleDimensions = function() {
              return { width: 460, height: 215 };
            }),
            (e.prototype.GetMainCapsuleDimensions = function() {
              return { width: 616, height: 353 };
            }),
            (e.prototype.GetTinyCapsuleDimensions = function() {
              return { width: 231, height: 87 };
            }),
            Object(s.c)([o.observable], e.prototype, "capsule_link", void 0),
            Object(s.c)([o.observable], e.prototype, "title", void 0),
            Object(s.c)([o.observable], e.prototype, "capsule", void 0),
            Object(s.c)([o.observable], e.prototype, "tiny_capsule", void 0),
            Object(s.c)([o.observable], e.prototype, "main_capsule", void 0),
            Object(s.c)([o.observable], e.prototype, "type", void 0),
            Object(s.c)([o.observable], e.prototype, "price", void 0),
            Object(s.c)([o.observable], e.prototype, "orig_price", void 0),
            Object(s.c)(
              [o.observable],
              e.prototype,
              "discount_percent",
              void 0
            ),
            Object(s.c)([o.observable], e.prototype, "release", void 0),
            Object(s.c)([o.observable], e.prototype, "subid", void 0),
            Object(s.c)([o.observable], e.prototype, "button_action", void 0),
            Object(s.c)([o.observable], e.prototype, "cart_url", void 0),
            Object(s.c)([o.observable], e.prototype, "add_to_cart_url", void 0),
            Object(s.c)([o.observable], e.prototype, "app_to_run", void 0),
            Object(s.c)([o.observable], e.prototype, "is_free", void 0),
            Object(s.c)([o.observable], e.prototype, "required_age", void 0),
            Object(s.c)([o.observable], e.prototype, "coming_soon", void 0),
            Object(s.c)([o.observable], e.prototype, "appid", void 0),
            Object(s.c)([o.observable], e.prototype, "full_game_appid", void 0),
            Object(s.c)([o.observable], e.prototype, "tags", void 0),
            Object(s.c)(
              [o.observable],
              e.prototype,
              "content_descriptors",
              void 0
            ),
            Object(s.c)(
              [o.observable],
              e.prototype,
              "available_windows",
              void 0
            ),
            Object(s.c)([o.observable], e.prototype, "available_mac", void 0),
            Object(s.c)([o.observable], e.prototype, "available_linux", void 0),
            Object(s.c)([o.observable], e.prototype, "microtrailer", void 0),
            Object(s.c)(
              [o.observable],
              e.prototype,
              "microtrailer_mp4",
              void 0
            ),
            Object(s.c)([o.observable], e.prototype, "support_vrhmd", void 0),
            Object(s.c)(
              [o.observable],
              e.prototype,
              "support_vrhmd_only",
              void 0
            ),
            e
          );
        })(),
        a = (function(n) {
          function e(e) {
            var t = n.call(this) || this;
            return (
              (t.appid = e),
              (t.success = 2),
              (t.title = ""),
              (t.screenshot = ""),
              (t.age_safe_screenshot = !1),
              (t.capsule_link = p.c.STORE_BASE_URL + "app/" + e),
              (t.creator_list = new Array()),
              (t.is_free = !1),
              (t.required_age = !1),
              (t.coming_soon = !1),
              (t.library_asset_setup_complete = !0),
              t
            );
          }
          return (
            Object(s.d)(e, n),
            (e.prototype.InitializeFrom = function(e) {
              (this.success = 1),
                (this.type = e.type),
                (this.capsule_link = e.capsule_link),
                (this.price = e.price),
                (this.discount_percent = e.discount_percent),
                (this.subid = e.subid),
                (this.button_action = e.button_action),
                (this.cart_url = e.cart_url),
                (this.add_to_cart_url = e.add_to_cart_url),
                (this.app_to_run = e.app_to_run),
                (this.is_free = e.is_free),
                (this.required_age = e.required_age),
                (this.coming_soon = e.coming_soon),
                (this.full_game_appid = e.full_game_appid),
                (this.title = e.title),
                (this.release = e.release),
                (this.short_desc = e.short_desc),
                (this.capsule = e.capsule),
                (this.tiny_capsule = e.tiny_capsule),
                (this.main_capsule = e.main_capsule),
                (this.screenshot = e.screenshot),
                (this.screenshot_list = e.screenshot_list),
                (this.age_safe_screenshot = e.age_safe_screenshot),
                (this.library_asset_setup_complete =
                  e.library_asset_setup_complete),
                (this.item_id = e.item_id),
                (this.icon_url = e.icon_url),
                (this.cover_image_asset_url = e.cover_image_asset_url),
                (this.tags = e.tags),
                (this.content_descriptors = e.content_descriptors),
                (this.available_windows = e.available_windows),
                (this.available_mac = e.available_mac),
                (this.available_linux = e.available_linux),
                (this.microtrailer = e.microtrailer),
                (this.microtrailer_mp4 = e.microtrailer_mp4),
                (this.support_vrhmd = e.support_vrhmd),
                (this.support_vrhmd_only = e.support_vrhmd_only),
                (this.languages = e.languages),
                (this.creator_list = new Array());
              var t = e.creator_list;
              if (t)
                for (var n = 0, r = t; n < r.length; n++) {
                  var o = r[n];
                  this.creator_list.push(o);
                }
              this.social = new Array();
              var i = e.social;
              if (i)
                for (var a = 0, s = i; a < s.length; a++) {
                  var c = s[a];
                  this.social.push(c);
                }
            }),
            Object(s.c)([o.observable], e.prototype, "success", void 0),
            Object(s.c)([o.observable], e.prototype, "release", void 0),
            Object(s.c)([o.observable], e.prototype, "short_desc", void 0),
            Object(s.c)([o.observable], e.prototype, "tiny_capsule", void 0),
            Object(s.c)([o.observable], e.prototype, "main_capsule", void 0),
            Object(s.c)([o.observable], e.prototype, "type", void 0),
            Object(s.c)([o.observable], e.prototype, "screenshot", void 0),
            Object(s.c)(
              [o.observable],
              e.prototype,
              "age_safe_screenshot",
              void 0
            ),
            Object(s.c)(
              [o.observable],
              e.prototype,
              "library_asset_setup_complete",
              void 0
            ),
            Object(s.c)([o.observable], e.prototype, "screenshot_list", void 0),
            Object(s.c)([o.observable], e.prototype, "social", void 0),
            Object(s.c)([o.observable], e.prototype, "creator_list", void 0),
            Object(s.c)([o.observable], e.prototype, "item_id", void 0),
            Object(s.c)([o.observable], e.prototype, "icon_url", void 0),
            Object(s.c)(
              [o.observable],
              e.prototype,
              "cover_image_asset_url",
              void 0
            ),
            Object(s.c)([o.observable], e.prototype, "microtrailer", void 0),
            Object(s.c)(
              [o.observable],
              e.prototype,
              "microtrailer_mp4",
              void 0
            ),
            Object(s.c)([o.observable], e.prototype, "support_vrhmd", void 0),
            Object(s.c)(
              [o.observable],
              e.prototype,
              "support_vrhmd_only",
              void 0
            ),
            Object(s.c)([o.observable], e.prototype, "languages", void 0),
            Object(s.c)([o.action], e.prototype, "InitializeFrom", null),
            e
          );
        })(i),
        u = (function() {
          function e(e, t) {
            (this.m_bLoaded = !1),
              (this.m_appid = e),
              (this.m_bLoaded = !1),
              (this.m_appStoreData = new a(e)),
              t && this.InitializeFrom(t);
          }
          return (
            (e.prototype.InitializeFrom = function(e) {
              this.m_appStoreData.InitializeFrom(e), (this.m_bLoaded = !0);
            }),
            (e.prototype.BIsLoaded = function() {
              return this.m_bLoaded;
            }),
            (e.prototype.GetAppStoreData = function() {
              return this.m_appStoreData;
            }),
            (e.prototype.HintLoadBroadcastAppData = function(t) {
              return (
                void 0 === t && (t = "steamtv"),
                Object(s.b)(this, void 0, void 0, function() {
                  return Object(s.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return this.m_loadingPromise
                          ? [3, 2]
                          : ((this.m_loadingPromise = this.InternalLoadBroadcastAppData(
                              t
                            )),
                            [4, this.m_loadingPromise]);
                      case 1:
                        e.sent(), (e.label = 2);
                      case 2:
                        return [2, this.m_loadingPromise];
                    }
                  });
                })
              );
            }),
            (e.prototype.InternalLoadBroadcastAppData = function(a) {
              return (
                void 0 === a && (a = "steamtv"),
                Object(s.b)(this, void 0, void 0, function() {
                  var t, n, r, o, i;
                  return Object(s.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        if (this.m_bLoaded) return [3, 4];
                        (t = {
                          appid: this.m_appid,
                          feature: a,
                          cc: p.c.COUNTRY || "US",
                          l: p.c.LANGUAGE,
                          origin: self.origin
                        }),
                          (n =
                            p.c.STORE_BASE_URL +
                            "broadcast/ajaxgetappinfoforcap"),
                          (e.label = 1);
                      case 1:
                        return (
                          e.trys.push([1, 3, , 4]),
                          [4, c.a.get(n, { params: t })]
                        );
                      case 2:
                        return (r = e.sent()).data && 1 == r.data.success
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
                          (o = e.sent()),
                          (i = Object(l.a)(o)),
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
            Object(s.c)([o.observable], e.prototype, "m_bLoaded", void 0),
            Object(s.c)([o.observable], e.prototype, "m_appStoreData", void 0),
            e
          );
        })();
    },
    XsxU: function(e, t, n) {
      e.exports = {
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
    ZeAL: function(e, t, n) {
      "use strict";
      n.d(t, "d", function() {
        return a;
      }),
        n.d(t, "e", function() {
          return s;
        }),
        n.d(t, "b", function() {
          return l;
        }),
        n.d(t, "c", function() {
          return p;
        }),
        n.d(t, "a", function() {
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
      a.filter(function(e) {
        return -1 == c.indexOf(e);
      });
      function l(e, t, n) {
        void 0 === t && (t = a), void 0 === n && (n = " ");
        var r = "\\[\\/?(\\*|" + t.join("|") + ").*(\\=[^\\]]*)?\\]";
        return e.replace(new RegExp(r, "gi"), n);
      }
      function p(e, t, n) {
        void 0 === t && (t = a), void 0 === n && (n = "");
        var r = "\\[\\/?(?:" + t.join("|") + ")*?.*?\\]";
        return e.replace(new RegExp(r, "gi"), n);
      }
      function u(e, t, n) {
        if ((void 0 === n && (n = 0), 2 == t.type)) {
          var r = t.text.indexOf("="),
            o = t.text.indexOf(" ");
          if ((-1 != o && (-1 == r || o < r) && (r = o), 0 < r)) {
            t.tag = t.text.substr(0, r).toLocaleLowerCase();
            var i = t.text.substr(r);
            t.args = (function(e) {
              if (!e || e.length < 1) return {};
              var t = {},
                n = "",
                r = "",
                o = 0,
                i = 0;
              "=" == e[0] && (o = 2);
              var a = !1;
              for (i++; i < e.length; i++) {
                var s = e[i],
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
                l && ((t[n] = r), (r = n = ""));
              }
              0 != o && (t[n] = r);
              return t;
            })(i);
          } else (t.args = {}), (t.tag = t.text.toLocaleLowerCase());
        }
        e.push(t);
        var a = new m();
        return (a.type = n), a;
      }
      var d = (function() {
          function e(e, t, n) {
            void 0 === t &&
              (t = function() {
                return new r.b();
              }),
              (this.m_dictComponents = void 0),
              (this.m_dictComponents = e),
              (this.m_fnAccumulatorFactory = t),
              (this.m_renderingLanguage = n || Object(o.e)(i.c.LANGUAGE));
          }
          return (
            (e.prototype.UpdateOverrideLanguage = function(e) {
              this.m_renderingLanguage = e || Object(o.e)(i.c.LANGUAGE);
            }),
            (e.prototype.ParseBBCode = function(e, t) {
              var n = (function(e) {
                for (
                  var t = [], n = new m(), r = !1, o = !1, i = 0;
                  i < e.length;
                  i++
                ) {
                  var a = e[i];
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
                              (n = u(t, n)),
                              !1)
                          : (n.ConvertMalformedNodeToText(),
                            (n = u(t, n, 2)),
                            !0);
                      break;
                    case 1:
                      "[" != a || r
                        ? (r =
                            "\\" == a
                              ? (r && (n.text += a), !r)
                              : ((n.text += a), !1))
                        : ((n = u(t, n, 2)), (o = !0));
                  }
                }
                return (
                  0 != n.type &&
                    ((2 != n.type && 3 != n.type) ||
                      n.ConvertMalformedNodeToText(),
                    t.push(n)),
                  t
                );
              })(e);
              return this.Parse_BuildReactComponents(n, t);
            }),
            (e.prototype.Parse_BuildReactComponents = function(e, c) {
              var a = this,
                l = this.m_fnAccumulatorFactory(void 0),
                p = [],
                s = function() {
                  return p.length < 1 ? void 0 : p[p.length - 1];
                },
                u = this.m_dictComponents,
                d = this.m_renderingLanguage,
                m = function(e, t, n) {
                  if (e && e.node.tag === t.text && u.get(e.node.tag)) {
                    var r = u.get(e.node.tag),
                      o = p.map(function(e) {
                        return e.node.tag;
                      }),
                      i = {
                        context: c,
                        parentTags: o,
                        tagname: e.node.tag,
                        args: e.node.args,
                        language: d,
                        key: e.node.tag + "_" + n
                      },
                      a = _.createElement.apply(
                        _,
                        Object(h.g)([r.Constructor, i], l.GetElements())
                      );
                    (l = e.accumulator).AppendNode(a);
                  } else if (e) {
                    var s = e.accumulator;
                    s.AppendText("[" + e.node.text + "]", !1),
                      l.GetElements().forEach(function(e) {
                        return s.AppendNode(e);
                      }),
                      s.AppendText("[/" + t.text + "]", !1),
                      (l = s);
                  }
                };
              e.forEach(function(e, t) {
                if (1 == e.type) l.AppendText(e.text, 0 == p.length);
                else if (2 != e.type || u.get(e.tag)) {
                  if (2 == e.type) {
                    var n = s();
                    if (void 0 !== n) {
                      var r = u.get(n.node.tag);
                      r &&
                        r.autocloses &&
                        e.tag === n.node.tag &&
                        m(p.pop(), n.node, t);
                    }
                    p.push({ accumulator: l, node: e }),
                      (l = a.m_fnAccumulatorFactory(e));
                  } else if (3 == e.type) {
                    for (
                      ;
                      s() &&
                      s().node.tag !== e.text &&
                      u.get(s().node.tag) &&
                      u.get(s().node.tag).autocloses;

                    ) {
                      var o = p.pop();
                      m(o, o.node, t);
                    }
                    var i = p.pop();
                    m(i, e, t);
                  }
                } else l.AppendText("[" + e.text + "]", 0 == p.length);
              });
              for (
                var t = function() {
                  var e = p.pop(),
                    t = e.accumulator;
                  t.AppendText("[" + e.node.text + "]", !1),
                    l.GetElements().forEach(function(e) {
                      return t.AppendNode(e);
                    }),
                    (l = t);
                };
                0 < p.length;

              )
                t();
              var n = l.GetElements();
              return 1 < n.length
                ? _.createElement.apply(_, Object(h.g)([_.Fragment, null], n))
                : 1 == n.length
                ? n[0]
                : null;
            }),
            e
          );
        })(),
        m = (function() {
          function e() {
            (this.type = 0), (this.text = "");
          }
          return (
            (e.prototype.ConvertMalformedNodeToText = function() {
              3 == this.type
                ? (this.text = "[/" + this.text)
                : 2 == this.type && (this.text = "[" + this.text),
                (this.type = 1);
            }),
            e
          );
        })();
    },
    ZlHF: function(e, t, n) {
      e.exports = {
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
    a5LV: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return p;
      });
      var r = n("mrSG"),
        a = n("lkRc"),
        o = n("2vnA"),
        s = n("q1tI"),
        c = n("sUmc"),
        i = (function() {
          function e() {
            this.m_mapEmoticonHovers = new Map();
          }
          return (
            (e.prototype.GetEmoticonHover = function(e) {
              var t = this.m_mapEmoticonHovers.get(e);
              return (
                t || ((t = new l(e)), this.m_mapEmoticonHovers.set(e, t)), t
              );
            }),
            e
          );
        })(),
        l = (function() {
          function i(e) {
            (this.m_bVisible = !1),
              (this.m_strEmoticonHoverHTML = void 0),
              (this.m_bLoadingData = !1),
              (this.m_strEmoticonName = e);
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
            (i.prototype.Show = function(e, t) {
              var n = this;
              this.EnsureEmoticonLoaded();
              var r = e.currentTarget,
                o = s.createElement(t, { hover: this, target: r });
              i.sm_embeddedElements
                .ShowElementDelayed(r.ownerDocument, 50, o, this)
                .then(function() {
                  n.m_bVisible = !0;
                });
            }),
            (i.prototype.Hide = function(e) {
              (this.m_bVisible = !1),
                i.sm_embeddedElements.HideElement(
                  e.currentTarget.ownerDocument,
                  this,
                  500
                );
            }),
            (i.prototype.EnsureEmoticonLoaded = function() {
              var t = this;
              if (
                void 0 === this.m_strEmoticonHoverHTML &&
                !this.m_bLoadingData
              ) {
                this.m_bLoadingData = !0;
                var e = "OnLoadEmoticon_" + this.m_strEmoticonName,
                  n =
                    a.c.COMMUNITY_CDN_URL +
                    "economy/emoticonhover/" +
                    encodeURIComponent(this.m_strEmoticonName) +
                    "/jsonp.js?callback=" +
                    encodeURIComponent(e) +
                    "&l=" +
                    encodeURIComponent(a.c.LANGUAGE),
                  r = void 0,
                  o = void 0,
                  i = function() {
                    (t.m_bLoadingData = !1),
                      delete window[e],
                      r && window.clearTimeout(r),
                      o && o.remove();
                  };
                (window[e] = function(e) {
                  (t.m_strEmoticonHoverHTML = e), (t.m_bVisible = !0), i();
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
    bDQf: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return i;
      });
      n("mrSG");
      var r = n("vDqi"),
        o = n.n(r);
      function i(e) {
        if (o.a.isCancel(e))
          return { strErrorMsg: "Action Cancelled:" + e, errorCode: 52 };
        if (void 0 !== e.response && "object" == typeof e.response.data) {
          if ("msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.msg,
              errorCode: e.response.data.success
            };
          if ("err_msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.err_msg,
              errorCode: e.response.data.success
            };
          if ("message" in e.response.data)
            return {
              strErrorMsg: e.response.data.message,
              errorCode: e.response.data.success
            };
        } else {
          if (void 0 !== e.success && void 0 !== e.msg)
            return { strErrorMsg: e.msg, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.message)
            return { strErrorMsg: e.message, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.err_msg)
            return { strErrorMsg: e.err_msg, errorCode: e.success };
          console.error("GetMsgAndErrorCodeFromResponse: ", e);
        }
        return "status" in e
          ? {
              strErrorMsg: "Unknown Error: " + e + "\nStatus Code:" + e.status,
              errorCode: 2
            }
          : { strErrorMsg: "Unknown Error: " + e, errorCode: 2 };
      }
    },
    bS9Q: function(e, t, n) {
      "use strict";
      function r(e, t) {
        return e < t ? -1 : t < e ? 1 : 0;
      }
      function o(e) {
        return e
          ? DOMParser
            ? new DOMParser().parseFromString(e, "text/html").documentElement
                .textContent
            : e
          : "";
      }
      function i(e, t) {
        return void 0 === t && (t = ""), e.replace(/\bhttps?:\/\/\S+/gi, t);
      }
      function a(e, t, n) {
        void 0 === n && (n = !0);
        var r = e.trim();
        if (t < (r = r.replace(n ? /\s+/g : /[ \t]+/g, " ")).length) {
          var o = (r = r.substring(0, t)).replace(/^(.*([.!?])) .*$/, "$1"),
            i = o.length;
          (i < 0.6 * t || i == t) && (o = r.replace(/ [^ ]*$/, "...")),
            (r = n ? o.replace(/(\r\n|\n|\r)/gm, "") : o);
        }
        return r;
      }
      function s(e) {
        var t,
          n = 0;
        if (0 === e.length) return n;
        for (t = 0; t < e.length; t++)
          (n = (n << 5) - n + e.charCodeAt(t)), (n |= 0);
        return n;
      }
      n.d(t, "e", function() {
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
        n.d(t, "a", function() {
          return s;
        });
    },
    ee7K: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
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
          function e() {
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
            (e.prototype.BIsLoaded = function() {
              return this.m_bIsLoaded;
            }),
            (e.prototype.GetCreatorsFollowed = function() {
              return this.m_rgCreatorsFollowed;
            }),
            (e.prototype.GetCreatorsIgnored = function() {
              return this.m_rgCreatorsIgnored;
            }),
            (e.prototype.BIsFollowingCreator = function(t) {
              return (
                0 <=
                this.m_rgCreatorsFollowed.findIndex(function(e) {
                  return e == t.GetAccountID();
                })
              );
            }),
            (e.prototype.BIsIgnoringCreator = function(t) {
              return (
                0 <=
                this.m_rgCreatorsIgnored.findIndex(function(e) {
                  return e == t.GetAccountID();
                })
              );
            }),
            (e.prototype.GetExcludedContentDescriptor = function() {
              return this.m_excludedContentDescriptors;
            }),
            (e.prototype.BExcludesTag = function(t) {
              return (
                !!t &&
                Boolean(
                  this.m_excludedTags.filter(function(e) {
                    return (
                      -1 !==
                      t
                        .map(function(e) {
                          return e.tagid;
                        })
                        .indexOf(e)
                    );
                  }).length
                )
              );
            }),
            (e.prototype.GetExcludedTagsSortedByID = function() {
              return this.m_excludedTags.slice().sort();
            }),
            (e.prototype.BExcludesContentDescriptor = function(t) {
              return (
                !!t &&
                Boolean(
                  this.m_excludedContentDescriptors.filter(function(e) {
                    return -1 !== t.indexOf(e);
                  }).length
                )
              );
            }),
            (e.prototype.BIsGameWishlisted = function(t) {
              return this.m_rgWishList.some(function(e) {
                return Number(e) === Number(t);
              });
            }),
            (e.prototype.BIsGameRecommended = function(t) {
              return this.m_rgRecommendedApps.some(function(e) {
                return Number(e) === Number(t);
              });
            }),
            (e.prototype.BIsGameIgnored = function(e) {
              return this.m_rgIgnoredApps && this.m_rgIgnoredApps.has(e);
            }),
            (e.prototype.BOwnsApp = function(t) {
              return this.m_rgOwnedApps.some(function(e) {
                return e === t;
              });
            }),
            (e.prototype.BOwnsPackage = function(t) {
              return this.m_rgOwnedPackages.some(function(e) {
                return e === t;
              });
            }),
            (e.prototype.HintLoad = function() {
              return Object(p.b)(this, void 0, void 0, function() {
                return Object(p.e)(this, function(e) {
                  return (
                    this.m_promise || (this.m_promise = this.InternalLoad()),
                    [2, this.m_promise]
                  );
                });
              });
            }),
            (e.prototype.InternalLoad = function() {
              return Object(p.b)(this, void 0, void 0, function() {
                var t,
                  n,
                  r,
                  o,
                  i = this;
                return Object(p.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = sessionStorage.getItem(a) || "0"),
                        (n = { v: t, id: "" + u.i.accountid }),
                        (r = u.c.STORE_BASE_URL + "dynamicstore/userdata/"),
                        [4, d.a.get(r, { params: n, withCredentials: !0 })]
                      );
                    case 1:
                      return (
                        (o = e.sent()) &&
                          200 == o.status &&
                          Object(l.runInAction)(function() {
                            if (
                              ((i.m_bIsLoaded = !0),
                              (i.m_rgCreatorsFollowed.length = 0),
                              (i.m_rgCreatorsIgnored.length = 0),
                              (i.m_rgWishList.length = 0),
                              o.data.rgCreatorsFollowed &&
                                o.data.rgCreatorsFollowed.forEach(function(e) {
                                  return i.m_rgCreatorsFollowed.push(e);
                                }),
                              o.data.rgCreatorsIgnored &&
                                o.data.rgCreatorsIgnored.forEach(function(e) {
                                  return i.m_rgCreatorsIgnored.push(e);
                                }),
                              o.data.rgWishlist &&
                                o.data.rgWishlist.forEach(function(e) {
                                  return i.m_rgWishList.push(e);
                                }),
                              o.data.rgOwnedApps &&
                                (i.m_rgOwnedApps = o.data.rgOwnedApps),
                              o.data.rgOwnedPackages &&
                                (i.m_rgOwnedPackages = o.data.rgOwnedPackages),
                              o.data.rgIgnoredApps)
                            ) {
                              var e = o.data.rgIgnoredApps;
                              for (var t in e)
                                i.m_rgIgnoredApps.set(Number(t), Number(e[t]));
                            }
                            o.data.rgExcludedTags &&
                              (i.m_excludedTags = o.data.rgExcludedTags.map(
                                function(e) {
                                  return e.tagid;
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
            (e.prototype.UpdateFollowOrIgnoreCurator = function(a, s, c) {
              return Object(p.b)(this, void 0, void 0, function() {
                var t, n, r, o, i;
                return Object(p.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
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
                        [4, d.a.post(t, n, { withCredentials: !0 })]
                      );
                    case 1:
                      return (
                        (r = e.sent()) &&
                          200 == r.status &&
                          (this.InvalidateCache(),
                          (o = s
                            ? this.m_rgCreatorsFollowed
                            : this.m_rgCreatorsIgnored),
                          c
                            ? o.push(a.GetAccountID())
                            : 0 <=
                                (i = o.findIndex(function(e) {
                                  return e == a.GetAccountID();
                                })) && o.splice(i, 1)),
                        [2, r.data]
                      );
                  }
                });
              });
            }),
            (e.prototype.UpdateAppIgnore = function(a, s, c) {
              return (
                void 0 === c && (c = 0),
                Object(p.b)(this, void 0, void 0, function() {
                  var t,
                    n,
                    r,
                    o,
                    i = this;
                  return Object(p.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        (t =
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
                          (e.label = 1);
                      case 1:
                        return (
                          e.trys.push([1, 3, , 4]),
                          [4, d.a.post(t, n, { withCredentials: !0 })]
                        );
                      case 2:
                        return (
                          (r = e.sent()) &&
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
                          (o = e.sent()),
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
            (e.prototype.UpdateGameWishlist = function(i, a) {
              return Object(p.b)(this, void 0, void 0, function() {
                var t, n, r, o;
                return Object(p.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t =
                          u.c.STORE_BASE_URL +
                          "api/" +
                          (a ? "addtowishlist" : "removefromwishlist")),
                        (n = new FormData()).append("appid", "" + i),
                        n.append("sessionid", u.c.SESSIONID),
                        [4, d.a.post(t, n, { withCredentials: !0 })]
                      );
                    case 1:
                      return (
                        ((r = e.sent()).data.success =
                          1 == r.data.success ? 1 : 2),
                        1 == r.data.success &&
                          (this.InvalidateCache(),
                          a
                            ? this.m_rgWishList.push(i)
                            : 0 <=
                                (o = this.m_rgWishList.findIndex(function(e) {
                                  return e == i;
                                })) && this.m_rgWishList.splice(o, 1)),
                        [2, r.data]
                      );
                  }
                });
              });
            }),
            (e.prototype.AddToCart = function(i, a, s, c, l) {
              return Object(p.b)(this, void 0, void 0, function() {
                var t, n, r, o;
                return Object(p.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = new FormData()).append("action", "add_to_cart"),
                        l
                          ? t.append("bundleid", l.toString())
                          : t.append("subid", "" + a),
                        (n = u.i.authwgtoken)
                          ? t.append("authwgtoken", n)
                          : t.append("sessionid", u.c.SESSIONID),
                        t.append("quantity", "1"),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [4, d.a.post(s, t, { withCredentials: !0 })]
                      );
                    case 2:
                      return (
                        e.sent(),
                        (r = u.c.IN_CLIENT ? "steam://url/StoreCart" : c),
                        i.preventDefault(),
                        this.InvalidateCache(),
                        Object(m.b)(window, r),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (o = e.sent()),
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
            (e.prototype.AddLicenseForFreeGame = function(i) {
              return Object(p.b)(this, void 0, void 0, function() {
                var t, n, r, o;
                return Object(p.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      if (this.BOwnsApp(i)) return [2, 1];
                      e.label = 1;
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        (t = new FormData()).append("sessionid", u.c.SESSIONID),
                        t.append("authwgtoken", u.i.authwgtoken),
                        t.append("appid", "" + i),
                        t.append("cc", u.c.COUNTRY),
                        (n =
                          u.c.STORE_BASE_URL +
                          "actions/addappformastersubscription"),
                        [4, d.a.post(n, t, { withCredentials: !0 })]
                      );
                    case 2:
                      return (r = e.sent()).data.success && 1 === r.data.success
                        ? (this.m_rgOwnedApps.push(i), [3, 4])
                        : [2, r.data.success ? r.data.success : 2];
                    case 3:
                      return (
                        (o = e.sent()),
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
            (e.prototype.InvalidateCache = function() {
              sessionStorage.setItem(
                a,
                (
                  Number.parseInt(sessionStorage.getItem(a) || "0") + 1
                ).toString()
              );
            }),
            Object(p.c)([l.observable], e.prototype, "m_rgWishList", void 0),
            Object(p.c)(
              [l.observable],
              e.prototype,
              "m_rgOwnedPackages",
              void 0
            ),
            Object(p.c)([l.observable], e.prototype, "m_rgOwnedApps", void 0),
            Object(p.c)([l.observable], e.prototype, "m_excludedTags", void 0),
            Object(p.c)(
              [l.observable],
              e.prototype,
              "m_excludedContentDescriptors",
              void 0
            ),
            Object(p.c)(
              [l.observable],
              e.prototype,
              "m_rgRecommendedApps",
              void 0
            ),
            Object(p.c)([l.observable], e.prototype, "m_rgIgnoredApps", void 0),
            Object(p.c)(
              [l.observable],
              e.prototype,
              "m_rgCreatorsFollowed",
              void 0
            ),
            Object(p.c)(
              [l.observable],
              e.prototype,
              "m_rgCreatorsIgnored",
              void 0
            ),
            Object(p.c)([l.action], e.prototype, "UpdateAppIgnore", null),
            e
          );
        })())();
    },
    fpVW: function(e, t, n) {
      e.exports = {
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
    "ir+G": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return a;
      });
      var c = n("mrSG"),
        r = n("vDqi"),
        l = n.n(r),
        o = n("2vnA"),
        i = n("Xhj9"),
        p = n("bDQf"),
        u = n("lkRc"),
        a = new ((function() {
          function e() {
            (this.m_mapAppIDToInfo = new Map()),
              (this.m_mapAppIDToDLCs = new Map()),
              (this.m_bLoadedFromConfig = !1);
          }
          return (
            (e.prototype.LazyInit = function() {
              var t = this;
              if (!this.m_bLoadedFromConfig) {
                if (
                  !Object({ NODE_ENV: "production", STEAM_BUILD: "buildbot" })
                    .MOBILE_BUILD &&
                  document.getElementById("application_config")
                ) {
                  var e = Object(u.f)("appcapsulestore", "application_config");
                  this.ValidateAppConfig(e) &&
                    e.forEach(function(e) {
                      t.m_mapAppIDToInfo.set(e.appid, new i.b(e.appid, e));
                    });
                }
                this.m_bLoadedFromConfig = !0;
              }
            }),
            (e.prototype.ValidateAppConfig = function(e) {
              var t = e;
              return (
                !!(
                  t &&
                  Array.isArray(t) &&
                  0 < t.length &&
                  "object" == typeof t[0]
                ) &&
                ("number" == typeof t[0].appid &&
                  "number" == typeof t[0].success &&
                  1 === t[0].success)
              );
            }),
            (e.prototype.EnsureStoreCapsuleInfoLoaded = function(n) {
              return Object(c.b)(this, void 0, void 0, function() {
                var t;
                return Object(c.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        this.LazyInit(),
                        this.m_mapAppIDToInfo.has(n)
                          ? [3, 2]
                          : ((t = new i.b(n)),
                            this.m_mapAppIDToInfo.set(n, t),
                            n && 0 < n
                              ? [
                                  4,
                                  t.HintLoadBroadcastAppData(
                                    (u.c.IN_CLIENT
                                      ? "library-"
                                      : Object(u.e)() + "-") + "partner-events"
                                  )
                                ]
                              : [3, 2])
                      );
                    case 1:
                      e.sent(), (e.label = 2);
                    case 2:
                      return [2, this.m_mapAppIDToInfo.get(n)];
                  }
                });
              });
            }),
            (e.prototype.GetStoreCapsuleInfo = function(e) {
              if ((this.LazyInit(), this.m_mapAppIDToInfo.has(e)))
                return this.m_mapAppIDToInfo.get(e);
              var t = new i.b(e);
              return (
                this.m_mapAppIDToInfo.set(e, t),
                e &&
                  0 < e &&
                  t.HintLoadBroadcastAppData(
                    (u.c.IN_CLIENT ? "library-" : Object(u.e)() + "-") +
                      "partner-events"
                  ),
                t
              );
            }),
            (e.prototype.BIsAppidLoaded = function(e) {
              return (
                this.LazyInit(),
                !!this.m_mapAppIDToInfo.has(e) &&
                  this.m_mapAppIDToInfo.get(e).BIsLoaded()
              );
            }),
            (e.prototype.LoadDLCForAppID = function(a, s) {
              return Object(c.b)(this, void 0, void 0, function() {
                var t, n, r, o, i;
                return Object(c.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      if (
                        (this.LazyInit(),
                        this.m_mapAppIDToDLCs.has(a) || 0 == a)
                      )
                        return [3, 4];
                      e.label = 1;
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        (t = {
                          origin: self.origin,
                          cc: u.c.COUNTRY || "US",
                          l: u.c.LANGUAGE
                        }),
                        (n =
                          u.c.STORE_BASE_URL + "dlc/" + a + "/ajaxgetdlclist"),
                        [4, l.a.get(n, { params: t, cancelToken: s.token })]
                      );
                    case 2:
                      return (
                        (r = e.sent()),
                        (o = Array()),
                        r.data.dlcs &&
                          r.data.dlcs.forEach(function(e) {
                            o.push({ appid: e.appid, name: e.name });
                          }),
                        this.m_mapAppIDToDLCs.set(a, o),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (i = e.sent()),
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
              e.prototype,
              "m_mapAppIDToInfo",
              void 0
            ),
            Object(c.c)(
              [o.observable],
              e.prototype,
              "m_mapAppIDToDLCs",
              void 0
            ),
            e
          );
        })())();
      window.g_AppCapsuleStore = a;
    },
    ka0M: function(e, t, n) {
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
          function e(e) {
            var t = n.call(this, e) || this;
            return (t.state = { maximized: t.BIsMaximized() }), t;
          }
          return (
            Object(u.d)(e, n),
            (e.prototype.BIsMaximized = function() {
              var e =
                  this.props.popup.screen.availWidth -
                  this.props.popup.innerWidth,
                t =
                  this.props.popup.screen.availHeight -
                  this.props.popup.innerHeight;
              return 0 == e && 0 == t;
            }),
            (e.prototype.componentDidMount = function() {
              this.props.popup.addEventListener(
                "resize",
                this.UpdateMaximizeState
              );
            }),
            (e.prototype.componentWillUnmount = function() {
              this.props.popup.removeEventListener(
                "resize",
                this.UpdateMaximizeState
              );
            }),
            (e.prototype.UpdateMaximizeState = function() {
              var e = this.BIsMaximized();
              e != this.state.maximized && this.setState({ maximized: e });
            }),
            (e.prototype.render = function() {
              var e = this.props.popup,
                t = "title-area-icon";
              this.state.maximized
                ? (t += " restoreButton")
                : (t += " maximizeButton");
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
                            e && e.close();
                          }
                        },
                        h.createElement(i.H, null)
                      ),
                      !this.props.hideMinMax &&
                        h.createElement(
                          "div",
                          {
                            className: t,
                            onClick: function() {
                              e.SteamClient.Window.ToggleMaximize();
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
                              e.SteamClient.Window.Minimize();
                            }
                          },
                          h.createElement(i.p, null)
                        )
                    )
                )
              );
            }),
            Object(u.c)([a.a], e.prototype, "UpdateMaximizeState", null),
            e
          );
        })(h.Component),
        f = n("lkRc"),
        l = n("r64O");
      function s(t, n, r, o) {
        return Object(u.b)(this, void 0, void 0, function() {
          return Object(u.e)(this, function(e) {
            return [2, p(t, n, r, o, void 0, void 0, void 0, !1)];
          });
        });
      }
      function p(r, o, i, a, s, c, l, p) {
        return Object(u.b)(this, void 0, void 0, function() {
          var t, n;
          return Object(u.e)(this, function(e) {
            switch (e.label) {
              case 0:
                return [
                  4,
                  (function(i, a, s) {
                    return Object(u.b)(this, void 0, void 0, function() {
                      var t, n, r, o;
                      return Object(u.e)(this, function(e) {
                        switch (e.label) {
                          case 0:
                            return (
                              ((t = a.document.createElement(
                                "div"
                              )).style.position = "absolute"),
                              (t.style.visibility = "hidden"),
                              a.document.body.appendChild(t),
                              d.render(i, t),
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
                              e.sent(),
                              (n = t.getBoundingClientRect()),
                              (r = Math.ceil(n.height)),
                              (o = Math.ceil(n.width)),
                              d.unmountComponentAtNode(t),
                              a.document.body.removeChild(t),
                              [2, { height: r, width: o }]
                            );
                        }
                      });
                    });
                  })(r, o, a)
                ];
              case 1:
                return (t = e.sent()).height / o.innerHeight < 0.9 &&
                  t.width / o.innerWidth < 0.8
                  ? [2, m(r, o)]
                  : ((n = {
                      strTitle: i || "Steam Dialog",
                      popupWidth: Math.max(t.width, l || 0),
                      popupHeight: Math.max(t.height, c || 0),
                      bHideMainWindowForPopups: !1 !== p
                    }),
                    [2, m(r, o, i, n, s)]);
            }
          });
        });
      }
      function m(e, t, n, r, o, i) {
        var a,
          s,
          c = e.props.closeModal,
          l = function() {
            a && a.Close(), s && s.Close(), c && c();
          },
          p = h.cloneElement(e, { closeModal: l }),
          u = Object(_.f)(t);
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
          var m = new v(t, n, r, p, o, i);
          m.Show(), (a = m);
        } else a = u.ShowModal(p);
        return a;
      }
      n.d(t, "b", function() {
        return s;
      }),
        n.d(t, "d", function() {
          return p;
        }),
        n.d(t, "c", function() {
          return m;
        }),
        n.d(t, "a", function() {
          return _.g;
        });
      var v = (function(s) {
        function e(e, t, n, r, o, i) {
          var a =
            s.call(this, t, {
              title: n.strTitle,
              html_class: "client_chat_frame fullheight ModalDialogPopup",
              body_class: "fullheight ModalDialogBody",
              owner_window: void 0,
              replace_existing_popup: !0,
              target_browser: o,
              availscreenwidth: e.screen.availWidth,
              availscreenheight: e.screen.availHeight
            }) || this;
          return (
            (a.m_bModalInitiatedClose = !1),
            (a.m_windowOpener = e),
            (a.m_modalProps = n),
            (a.m_modalElement = r),
            (a.m_options = i),
            a
          );
        }
        return (
          Object(u.d)(e, s),
          (e.prototype.Close = function() {
            (this.m_bModalInitiatedClose = !0), s.prototype.Close.call(this);
          }),
          (e.prototype.Update = function(e) {
            Object(l.a)(!1, "NYI");
          }),
          (e.prototype.UpdateParamsBeforeShow = function(e) {
            var t = this.m_modalProps.popupWidth || 500,
              n = this.m_modalProps.popupHeight || 400,
              r = this.m_windowOpener.screen,
              o = (r.availWidth - t) / 2,
              i = (r.availHeight - n) / 2,
              a = r;
            return (
              void 0 !== a.availLeft &&
                void 0 !== a.availTop &&
                ((o += a.availLeft), (i += a.availTop)),
              Object(u.a)(Object(u.a)({}, e), {
                dimensions: { width: t, height: n, left: o, top: i }
              })
            );
          }),
          (e.prototype.OnLoad = function() {}),
          (e.prototype.OnResize = function() {}),
          (e.prototype.OnClose = function() {
            this.m_bModalInitiatedClose ||
              (this.m_modalProps.closeModal && this.m_modalProps.closeModal());
          }),
          (e.prototype.Render = function(e, t) {
            if (
              (t.setAttribute("class", "fullheight popup_chat_frame"),
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
                    popup: e,
                    hideActions: n,
                    style: r
                  }),
                  h.createElement(_.b, { ModalManager: Object(_.f)(e) }),
                  this.m_modalElement
                ),
                t
              );
            }
          }),
          e
        );
      })(r.a);
    },
    nWbB: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return m;
      }),
        n.d(t, "b", function() {
          return h;
        }),
        n.d(t, "c", function() {
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
          function e() {
            (this.m_chatVisibility = "hide"), (this.m_bHideBroadcast = void 0);
          }
          return (
            (e.prototype.BHasStreams = function() {
              return this.m_streams && 0 < this.m_streams.length;
            }),
            (e.prototype.GetPlayReadyStream = function() {
              return this.m_playReadyStream;
            }),
            (e.prototype.LoadBIsEmbeddedBroadcastHidden = function(i) {
              return Object(a.b)(this, void 0, void 0, function() {
                var t, n, r, o;
                return Object(a.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      if (void 0 !== this.m_bHideBroadcast) return [3, 5];
                      if (
                        (t = Object(c.f)("broadcastuser", "application_config"))
                      )
                        return [3, 4];
                      e.label = 1;
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        (n =
                          c.c.STORE_BASE_URL +
                          "broadcast/ajaxgetuserbroadcastpreferences"),
                        [4, s.a.get(n, { params: {}, cancelToken: i.token })]
                      );
                    case 2:
                      return (r = e.sent()), (t = r.data), [3, 4];
                    case 3:
                      return (
                        (o = e.sent()),
                        console.log(
                          "LoadBIsEmbeddedBroadcastHidden: " +
                            Object(l.a)(o).strErrorMsg
                        ),
                        (t = { bHideStoreBroadcast: !1 }),
                        [3, 4]
                      );
                    case 4:
                      (this.m_bHideBroadcast = t.bHideStoreBroadcast),
                        (e.label = 5);
                    case 5:
                      return [2, this.m_bHideBroadcast];
                  }
                });
              });
            }),
            (e.prototype.BIsEmbeddedBroadcastHidden = function() {
              return Boolean(this.m_bHideBroadcast);
            }),
            (e.prototype.GetSettings = function() {
              return this.m_settings;
            }),
            (e.prototype.GetConcurrentStreams = function() {
              return this.m_streams ? this.m_streams.length : 0;
            }),
            (e.prototype.GetChatVisibility = function() {
              return this.m_chatVisibility;
            }),
            (e.prototype.ToggleChatVisibility = function() {
              "remove" !== this.m_chatVisibility &&
                (this.m_chatVisibility =
                  "hide" === this.GetChatVisibility() ? "show" : "hide");
            }),
            (e.prototype.HintLoadEmbeddablePreviewStreams = function(o) {
              return Object(a.b)(this, void 0, void 0, function() {
                var t, n, r;
                return Object(a.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (this.m_settings = o),
                        (t = null),
                        (n = {
                          eventid: o.event ? o.event.GID : void 0,
                          previewAccounts: Boolean(o.bIsPreview && o.accountIDs)
                            ? o.accountIDs.join(",")
                            : void 0
                        }),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
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
                      return (t = e.sent()), [3, 4];
                    case 3:
                      return (r = e.sent()), console.error(r), [3, 4];
                    case 4:
                      return [2, this.HandleHintLoadBroadcastResponse(t)];
                  }
                });
              });
            }),
            (e.prototype.HintLoadEmbeddableStreams = function(o) {
              return Object(a.b)(this, void 0, void 0, function() {
                var t, n, r;
                return Object(a.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (this.m_settings = o),
                        (t = null),
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
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
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
                      return (t = e.sent()), [3, 4];
                    case 3:
                      return (r = e.sent()), console.error(r), [3, 4];
                    case 4:
                      return [2, this.HandleHintLoadBroadcastResponse(t)];
                  }
                });
              });
            }),
            (e.prototype.HandleHintLoadBroadcastResponse = function(r) {
              return Object(a.b)(this, void 0, void 0, function() {
                var t, n;
                return Object(a.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return r
                        ? ((this.m_mapDynamicStoreData = r.data.rgAppData),
                          (t = !1),
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
                            (t = !0)),
                          (this.m_streams = r.data.filtered),
                          (n = this.GetPrimaryStream()),
                          r.data.broadcast_chat_visibility &&
                            (this.m_chatVisibility =
                              r.data.broadcast_chat_visibility),
                          t
                            ? [2, (this.m_playReadyStream = n)]
                            : n
                            ? [4, this.AttemptToPlayStream(n)]
                            : [3, 2])
                        : [2, null];
                    case 1:
                      e.sent(), (e.label = 2);
                    case 2:
                      return [2, n];
                  }
                });
              });
            }),
            (e.prototype.AttemptToPlayStream = function(i) {
              return Object(a.b)(this, void 0, void 0, function() {
                var t, n, r, o;
                return Object(a.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      (t = null), (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        (n =
                          c.c.STORE_BASE_URL + "broadcast/ajaxcheckbroadcast"),
                        (r = { broadcastaccountid: i.accountid }),
                        [4, s.a.get(n, { params: r })]
                      );
                    case 2:
                      return (t = e.sent()), [3, 4];
                    case 3:
                      return (o = e.sent()), console.error(o), [3, 4];
                    case 4:
                      return (
                        1 == t.data.success &&
                          ((i.steamid = t.data.steamid),
                          (this.m_playReadyStream = i),
                          (this.m_settings.appid || this.m_settings.event) &&
                            "remove" !== this.m_chatVisibility &&
                            (1 < this.GetConcurrentStreams()
                              ? (this.m_chatVisibility = "hide")
                              : (this.m_chatVisibility = i.chat_visibility)),
                          m(i.appid, 1, i.snr)),
                        [2, i]
                      );
                  }
                });
              });
            }),
            (e.prototype.GetAppDetailsForBroadcast = function(n) {
              return Object(a.b)(this, void 0, void 0, function() {
                var t;
                return Object(a.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = n.appid), [4, u.a.EnsureStoreCapsuleInfoLoaded(t)]
                      );
                    case 1:
                      return [2, e.sent().GetAppStoreData()];
                  }
                });
              });
            }),
            (e.prototype.GetPrimaryStream = function() {
              return this.m_streams && 0 < this.m_streams.length
                ? this.m_streams[0].is_primary_stream ||
                  570 === Number(this.m_settings.appid)
                  ? this.m_streams[0]
                  : this.GetRandomStream()
                : null;
            }),
            (e.prototype.GetRandomStream = function() {
              if (this.m_streams && 0 < this.m_streams.length) {
                var e = Math.floor(Math.random() * this.m_streams.length);
                return this.m_streams[e];
              }
              return null;
            }),
            (e.prototype.GetStreams = function() {
              return this.m_streams;
            }),
            (e.prototype.GetBroadcastURL = function(e) {
              var t = null;
              return (
                (t = e.steamid
                  ? new r.a(e.steamid)
                  : r.a.InitFromAccountID(e.accountid)),
                c.c.COMMUNITY_BASE_URL +
                  "broadcast/watch/" +
                  t.ConvertTo64BitString()
              );
            }),
            (e.prototype.BIsAppStreaming = function(t) {
              return (
                Boolean(this.m_streams) &&
                this.m_streams.some(function(e) {
                  return Number(e.appid) === t;
                })
              );
            }),
            Object(a.c)(
              [i.observable],
              e.prototype,
              "m_mapDynamicStoreData",
              void 0
            ),
            Object(a.c)([i.observable], e.prototype, "m_streams", void 0),
            Object(a.c)(
              [i.observable],
              e.prototype,
              "m_playReadyStream",
              void 0
            ),
            Object(a.c)([i.observable], e.prototype, "m_settings", void 0),
            Object(a.c)(
              [i.observable],
              e.prototype,
              "m_chatVisibility",
              void 0
            ),
            Object(a.c)(
              [i.observable],
              e.prototype,
              "m_bHideBroadcast",
              void 0
            ),
            Object(a.c)(
              [i.action],
              e.prototype,
              "HintLoadEmbeddablePreviewStreams",
              null
            ),
            Object(a.c)(
              [i.action],
              e.prototype,
              "HintLoadEmbeddableStreams",
              null
            ),
            Object(a.c)([i.action], e.prototype, "AttemptToPlayStream", null),
            Object(a.c)(
              [i.action],
              e.prototype,
              "GetAppDetailsForBroadcast",
              null
            ),
            e
          );
        })();
      function m(n, r, o) {
        return Object(a.b)(this, void 0, void 0, function() {
          var t;
          return Object(a.e)(this, function(e) {
            return (
              0 < n &&
                7 != n &&
                o &&
                ((t = new URLSearchParams()).append("page_action", "" + r),
                t.append("snr", o),
                s.a.post(
                  c.c.STORE_BASE_URL + "ajaxreportproductaction/" + n + "/",
                  t
                )),
              [2]
            );
          });
        });
      }
      var h = new d(),
        _ = new p.a();
    },
    nrKv: function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return i;
      }),
        n.d(t, "a", function() {
          return s;
        }),
        n.d(t, "c", function() {
          return c;
        });
      var r = n("mrSG"),
        a = n("q1tI"),
        o = n("r64O"),
        i = (function() {
          function e() {
            this.reactNodes = [];
          }
          return (
            (e.prototype.AppendText = function(e, t) {
              void 0 === t && (t = !1),
                e.length &&
                  (t
                    ? this.reactNodes.push(
                        a.createElement(
                          "span",
                          {
                            "data-copytext": "",
                            "data-copystyle": "merge-adjacent",
                            "bbcode-text": e
                          },
                          e
                        )
                      )
                    : this.reactNodes.push(e));
            }),
            (e.prototype.AppendNode = function(e) {
              this.reactNodes.push(e);
            }),
            (e.prototype.GetElements = function() {
              return this.reactNodes;
            }),
            e
          );
        })(),
        s = (function() {
          function e(e) {
            Object(o.a)(e, "decorated accumulator cannot be null"),
              (this.m_decoratedAccumulator = e);
          }
          return (
            (e.prototype.AppendText = function(e, t) {
              void 0 === t && (t = !1),
                this.m_decoratedAccumulator.AppendText(e, t);
            }),
            (e.prototype.AppendNode = function(e) {
              this.m_decoratedAccumulator.AppendNode(e);
            }),
            (e.prototype.GetElements = function() {
              return this.m_decoratedAccumulator.GetElements();
            }),
            e
          );
        })(),
        c = (function(i) {
          function e(e, t, n) {
            var r = i.call(this, e) || this;
            return (
              (r.m_nStartCursor = 1),
              (r.m_bDisableDataCopy = !1),
              (r.m_nStartCursor = void 0 !== t ? t : 1),
              (r.m_bDisableDataCopy = Boolean(n)),
              r
            );
          }
          return (
            Object(r.d)(e, i),
            (e.prototype.AppendText = function(e) {
              for (
                var t = this,
                  n = e,
                  r = [],
                  o = n.indexOf("\n", this.m_nStartCursor);
                -1 !== o;
                o = n.indexOf("\n")
              )
                r.push(n.substr(0, o)),
                  r.push(a.createElement("br")),
                  (n = n.substr(o + 1));
              n.length && r.push(n),
                r.forEach(function(e) {
                  i.prototype.AppendNode.call(t, e);
                });
            }),
            e
          );
        })(s);
    },
    oVVc: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return r;
      }),
        n.d(t, "b", function() {
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
          function e(e) {
            (this.packageid = e.packageid),
              (this.enabled = e.enabled),
              (this.name = e.name),
              (this.header_image_url = e.header_image_url),
              (this.formatted_orig_price = e.formatted_orig_price),
              (this.formatted_final_price = e.formatted_final_price),
              (this.discount_percent = e.discount_percent),
              (this.appids = e.appids),
              (this.release_date = e.release_date),
              (this.available_windows = e.available_windows),
              (this.available_mac = e.available_mac),
              (this.available_linux = e.available_linux),
              (this.support_vrhmd = e.support_vrhmd),
              (this.support_vrhmd_only = e.support_vrhmd_only),
              (this.final_price_cents = e.final_price_cents),
              (this.renewal_package_id = e.renewal_package_id),
              (this.renewal_time_units = e.renewal_time_units),
              (this.renewal_time_amount = e.renewal_time_amount);
          }
          return (
            (e.prototype.GetHeaderImageDimension = function() {
              return this.header_image_url.includes("header_586x192")
                ? { width: 586, height: 192 }
                : { width: 292, height: 136 };
            }),
            e
          );
        })(),
        c = new ((function() {
          function e() {
            (this.m_mapPackageInfo = new Map()),
              (this.m_mapMissingPackages = new Map()),
              (this.m_mapInFlightPackages = new Set()),
              (this.m_bLoadedFromConfig = !1);
          }
          return (
            (e.prototype.LazyInit = function() {
              var t = this;
              if (!this.m_bLoadedFromConfig) {
                var e = Object(u.f)("packageinfo", "application_config");
                this.ValidateStoreDefault(e) &&
                  (("dev" != u.c.WEB_UNIVERSE && "beta" != u.c.WEB_UNIVERSE) ||
                    console.log(
                      "DEV_DEBUG: CPackageInfoStore loading bundles payload: " +
                        e.length
                    ),
                  Object(a.runInAction)(function() {
                    return e.forEach(function(e) {
                      return t.m_mapPackageInfo.set(
                        Number(e.packageid),
                        new d(e)
                      );
                    });
                  }));
                var n = Object(u.f)("bundleunknown", "application_config");
                Object(s.a)(n) &&
                  n.forEach(function(e) {
                    return t.m_mapMissingPackages.set(e, !0);
                  }),
                  (this.m_bLoadedFromConfig = !0);
              }
            }),
            (e.prototype.ValidateStoreDefault = function(e) {
              var t = e;
              return (
                !!(
                  t &&
                  Array.isArray(t) &&
                  0 < t.length &&
                  "object" == typeof t[0]
                ) &&
                ("number" == typeof t[0].packageid &&
                  "string" == typeof t[0].name)
              );
            }),
            (e.prototype.GetPackageInfo = function(e) {
              return this.LazyInit(), this.m_mapPackageInfo.get(e);
            }),
            (e.prototype.LoadPackageInfo = function(c) {
              return Object(l.b)(this, void 0, void 0, function() {
                var t,
                  n,
                  r,
                  o,
                  i,
                  a,
                  s = this;
                return Object(l.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        this.LazyInit(),
                        (t = []),
                        c.forEach(function(e) {
                          !e ||
                            s.m_mapPackageInfo.has(e) ||
                            s.m_mapMissingPackages.has(e) ||
                            s.m_mapInFlightPackages.has(e) ||
                            t.push(e);
                        }),
                        t.length
                          ? (t.sort(),
                            t.forEach(function(e) {
                              return s.m_mapInFlightPackages.add(e);
                            }),
                            [
                              4,
                              p.a.get(
                                u.c.STORE_BASE_URL +
                                  "actions/ajaxresolvepackages",
                                {
                                  params: {
                                    packageids: t.join(","),
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
                        ((n = e.sent()),
                        t.forEach(function(e) {
                          return s.m_mapInFlightPackages.delete(e);
                        }),
                        (r = n && n.data))
                      )
                        for (o = {}, i = 0; i < r.length; i++)
                          (a = r[i]),
                            o[a.appids.join(",")] ||
                              ((o[a.appids.join(",")] = 1),
                              this.m_mapPackageInfo.set(a.packageid, new d(a)));
                      e.label = 2;
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            Object(l.c)(
              [a.observable],
              e.prototype,
              "m_mapPackageInfo",
              void 0
            ),
            e
          );
        })())();
      window.g_PackageInfoStore = c;
    },
    "r+Z0": function(e, t, n) {
      "use strict";
      var r;
      n.r(t);
      function g(e, t, n) {
        null != e &&
          ("number" == typeof e
            ? this.fromNumber(e, t, n)
            : null == t && "string" != typeof e
            ? this.fromString(e, 256)
            : this.fromString(e, t));
      }
      function y() {
        return new g(null);
      }
      (r =
        "Microsoft Internet Explorer" == navigator.appName
          ? ((g.prototype.am = function(e, t, n, r, o, i) {
              for (var a = 32767 & t, s = t >> 15; 0 <= --i; ) {
                var c = 32767 & this[e],
                  l = this[e++] >> 15,
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
          ? ((g.prototype.am = function(e, t, n, r, o, i) {
              for (; 0 <= --i; ) {
                var a = t * this[e++] + n[r] + o;
                (o = Math.floor(a / 67108864)), (n[r++] = 67108863 & a);
              }
              return o;
            }),
            26)
          : ((g.prototype.am = function(e, t, n, r, o, i) {
              for (var a = 16383 & t, s = t >> 14; 0 <= --i; ) {
                var c = 16383 & this[e],
                  l = this[e++] >> 14,
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
      function c(e) {
        return a.charAt(e);
      }
      function l(e, t) {
        var n = s[e.charCodeAt(t)];
        return null == n ? -1 : n;
      }
      function f(e) {
        var t = y();
        return t.fromInt(e), t;
      }
      function E(e) {
        var t,
          n = 1;
        return (
          0 != (t = e >>> 16) && ((e = t), (n += 16)),
          0 != (t = e >> 8) && ((e = t), (n += 8)),
          0 != (t = e >> 4) && ((e = t), (n += 4)),
          0 != (t = e >> 2) && ((e = t), (n += 2)),
          0 != (t = e >> 1) && ((e = t), (n += 1)),
          n
        );
      }
      function v(e) {
        this.m = e;
      }
      function b(e) {
        (this.m = e),
          (this.mp = e.invDigit()),
          (this.mpl = 32767 & this.mp),
          (this.mph = this.mp >> 15),
          (this.um = (1 << (e.DB - 15)) - 1),
          (this.mt2 = 2 * e.t);
      }
      function p(e, t) {
        return e & t;
      }
      function u(e, t) {
        return e | t;
      }
      function d(e, t) {
        return e ^ t;
      }
      function m(e, t) {
        return e & ~t;
      }
      function h(e) {
        if (0 == e) return -1;
        var t = 0;
        return (
          0 == (65535 & e) && ((e >>= 16), (t += 16)),
          0 == (255 & e) && ((e >>= 8), (t += 8)),
          0 == (15 & e) && ((e >>= 4), (t += 4)),
          0 == (3 & e) && ((e >>= 2), (t += 2)),
          0 == (1 & e) && ++t,
          t
        );
      }
      function _(e) {
        for (var t = 0; 0 != e; ) (e &= e - 1), ++t;
        return t;
      }
      function S() {}
      function C(e) {
        return e;
      }
      function O(e) {
        (this.r2 = y()),
          (this.q3 = y()),
          g.ONE.dlShiftTo(2 * e.t, this.r2),
          (this.mu = this.r2.divide(e)),
          (this.m = e);
      }
      (v.prototype.convert = function(e) {
        return e.s < 0 || 0 <= e.compareTo(this.m) ? e.mod(this.m) : e;
      }),
        (v.prototype.revert = function(e) {
          return e;
        }),
        (v.prototype.reduce = function(e) {
          e.divRemTo(this.m, null, e);
        }),
        (v.prototype.mulTo = function(e, t, n) {
          e.multiplyTo(t, n), this.reduce(n);
        }),
        (v.prototype.sqrTo = function(e, t) {
          e.squareTo(t), this.reduce(t);
        }),
        (b.prototype.convert = function(e) {
          var t = y();
          return (
            e.abs().dlShiftTo(this.m.t, t),
            t.divRemTo(this.m, null, t),
            e.s < 0 && 0 < t.compareTo(g.ZERO) && this.m.subTo(t, t),
            t
          );
        }),
        (b.prototype.revert = function(e) {
          var t = y();
          return e.copyTo(t), this.reduce(t), t;
        }),
        (b.prototype.reduce = function(e) {
          for (; e.t <= this.mt2; ) e[e.t++] = 0;
          for (var t = 0; t < this.m.t; ++t) {
            var n = 32767 & e[t],
              r =
                (n * this.mpl +
                  (((n * this.mph + (e[t] >> 15) * this.mpl) & this.um) <<
                    15)) &
                e.DM;
            for (
              e[(n = t + this.m.t)] += this.m.am(0, r, e, t, 0, this.m.t);
              e[n] >= e.DV;

            )
              (e[n] -= e.DV), e[++n]++;
          }
          e.clamp(),
            e.drShiftTo(this.m.t, e),
            0 <= e.compareTo(this.m) && e.subTo(this.m, e);
        }),
        (b.prototype.mulTo = function(e, t, n) {
          e.multiplyTo(t, n), this.reduce(n);
        }),
        (b.prototype.sqrTo = function(e, t) {
          e.squareTo(t), this.reduce(t);
        }),
        (g.prototype.copyTo = function(e) {
          for (var t = this.t - 1; 0 <= t; --t) e[t] = this[t];
          (e.t = this.t), (e.s = this.s);
        }),
        (g.prototype.fromInt = function(e) {
          (this.t = 1),
            (this.s = e < 0 ? -1 : 0),
            0 < e ? (this[0] = e) : e < -1 ? (this[0] = e + DV) : (this.t = 0);
        }),
        (g.prototype.fromString = function(e, t) {
          var n;
          if (16 == t) n = 4;
          else if (8 == t) n = 3;
          else if (256 == t) n = 8;
          else if (2 == t) n = 1;
          else if (32 == t) n = 5;
          else {
            if (4 != t) return void this.fromRadix(e, t);
            n = 2;
          }
          (this.t = 0), (this.s = 0);
          for (var r = e.length, o = !1, i = 0; 0 <= --r; ) {
            var a = 8 == n ? 255 & e[r] : l(e, r);
            a < 0
              ? "-" == e.charAt(r) && (o = !0)
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
            0 != (128 & e[0]) &&
            ((this.s = -1),
            0 < i && (this[this.t - 1] |= ((1 << (this.DB - i)) - 1) << i)),
            this.clamp(),
            o && g.ZERO.subTo(this, this);
        }),
        (g.prototype.clamp = function() {
          for (var e = this.s & this.DM; 0 < this.t && this[this.t - 1] == e; )
            --this.t;
        }),
        (g.prototype.dlShiftTo = function(e, t) {
          var n;
          for (n = this.t - 1; 0 <= n; --n) t[n + e] = this[n];
          for (n = e - 1; 0 <= n; --n) t[n] = 0;
          (t.t = this.t + e), (t.s = this.s);
        }),
        (g.prototype.drShiftTo = function(e, t) {
          for (var n = e; n < this.t; ++n) t[n - e] = this[n];
          (t.t = Math.max(this.t - e, 0)), (t.s = this.s);
        }),
        (g.prototype.lShiftTo = function(e, t) {
          var n,
            r = e % this.DB,
            o = this.DB - r,
            i = (1 << o) - 1,
            a = Math.floor(e / this.DB),
            s = (this.s << r) & this.DM;
          for (n = this.t - 1; 0 <= n; --n)
            (t[n + a + 1] = (this[n] >> o) | s), (s = (this[n] & i) << r);
          for (n = a - 1; 0 <= n; --n) t[n] = 0;
          (t[a] = s), (t.t = this.t + a + 1), (t.s = this.s), t.clamp();
        }),
        (g.prototype.rShiftTo = function(e, t) {
          t.s = this.s;
          var n = Math.floor(e / this.DB);
          if (n >= this.t) t.t = 0;
          else {
            var r = e % this.DB,
              o = this.DB - r,
              i = (1 << r) - 1;
            t[0] = this[n] >> r;
            for (var a = n + 1; a < this.t; ++a)
              (t[a - n - 1] |= (this[a] & i) << o), (t[a - n] = this[a] >> r);
            0 < r && (t[this.t - n - 1] |= (this.s & i) << o),
              (t.t = this.t - n),
              t.clamp();
          }
        }),
        (g.prototype.subTo = function(e, t) {
          for (var n = 0, r = 0, o = Math.min(e.t, this.t); n < o; )
            (r += this[n] - e[n]), (t[n++] = r & this.DM), (r >>= this.DB);
          if (e.t < this.t) {
            for (r -= e.s; n < this.t; )
              (r += this[n]), (t[n++] = r & this.DM), (r >>= this.DB);
            r += this.s;
          } else {
            for (r += this.s; n < e.t; )
              (r -= e[n]), (t[n++] = r & this.DM), (r >>= this.DB);
            r -= e.s;
          }
          (t.s = r < 0 ? -1 : 0),
            r < -1 ? (t[n++] = this.DV + r) : 0 < r && (t[n++] = r),
            (t.t = n),
            t.clamp();
        }),
        (g.prototype.multiplyTo = function(e, t) {
          var n = this.abs(),
            r = e.abs(),
            o = n.t;
          for (t.t = o + r.t; 0 <= --o; ) t[o] = 0;
          for (o = 0; o < r.t; ++o) t[o + n.t] = n.am(0, r[o], t, o, 0, n.t);
          (t.s = 0), t.clamp(), this.s != e.s && g.ZERO.subTo(t, t);
        }),
        (g.prototype.squareTo = function(e) {
          for (var t = this.abs(), n = (e.t = 2 * t.t); 0 <= --n; ) e[n] = 0;
          for (n = 0; n < t.t - 1; ++n) {
            var r = t.am(n, t[n], e, 2 * n, 0, 1);
            (e[n + t.t] += t.am(
              n + 1,
              2 * t[n],
              e,
              2 * n + 1,
              r,
              t.t - n - 1
            )) >= t.DV && ((e[n + t.t] -= t.DV), (e[n + t.t + 1] = 1));
          }
          0 < e.t && (e[e.t - 1] += t.am(n, t[n], e, 2 * n, 0, 1)),
            (e.s = 0),
            e.clamp();
        }),
        (g.prototype.divRemTo = function(e, t, n) {
          var r = e.abs();
          if (!(r.t <= 0)) {
            var o = this.abs();
            if (o.t < r.t)
              return (
                null != t && t.fromInt(0), void (null != n && this.copyTo(n))
              );
            null == n && (n = y());
            var i = y(),
              a = this.s,
              s = e.s,
              c = this.DB - E(r[r.t - 1]);
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
                v = null == t ? y() : t;
              for (
                i.dlShiftTo(f, v),
                  0 <= n.compareTo(v) && ((n[n.t++] = 1), n.subTo(v, n)),
                  g.ONE.dlShiftTo(l, v),
                  v.subTo(i, i);
                i.t < l;

              )
                i[i.t++] = 0;
              for (; 0 <= --f; ) {
                var b =
                  n[--_] == p
                    ? this.DM
                    : Math.floor(n[_] * d + (n[_ - 1] + h) * m);
                if ((n[_] += i.am(0, b, n, f, 0, l)) < b)
                  for (i.dlShiftTo(f, v), n.subTo(v, n); n[_] < --b; )
                    n.subTo(v, n);
              }
              null != t && (n.drShiftTo(l, t), a != s && g.ZERO.subTo(t, t)),
                (n.t = l),
                n.clamp(),
                0 < c && n.rShiftTo(c, n),
                a < 0 && g.ZERO.subTo(n, n);
            }
          }
        }),
        (g.prototype.invDigit = function() {
          if (this.t < 1) return 0;
          var e = this[0];
          if (0 == (1 & e)) return 0;
          var t = 3 & e;
          return 0 <
            (t =
              ((t =
                ((t =
                  ((t = (t * (2 - (15 & e) * t)) & 15) * (2 - (255 & e) * t)) &
                  255) *
                  (2 - (((65535 & e) * t) & 65535))) &
                65535) *
                (2 - ((e * t) % this.DV))) %
              this.DV)
            ? this.DV - t
            : -t;
        }),
        (g.prototype.isEven = function() {
          return 0 == (0 < this.t ? 1 & this[0] : this.s);
        }),
        (g.prototype.exp = function(e, t) {
          if (4294967295 < e || e < 1) return g.ONE;
          var n = y(),
            r = y(),
            o = t.convert(this),
            i = E(e) - 1;
          for (o.copyTo(n); 0 <= --i; )
            if ((t.sqrTo(n, r), 0 < (e & (1 << i)))) t.mulTo(r, o, n);
            else {
              var a = n;
              (n = r), (r = a);
            }
          return t.revert(n);
        }),
        (g.prototype.toString = function(e) {
          if (this.s < 0) return "-" + this.negate().toString(e);
          var t;
          if (16 == e) t = 4;
          else if (8 == e) t = 3;
          else if (2 == e) t = 1;
          else if (32 == e) t = 5;
          else {
            if (4 != e) return this.toRadix(e);
            t = 2;
          }
          var n,
            r = (1 << t) - 1,
            o = !1,
            i = "",
            a = this.t,
            s = this.DB - ((a * this.DB) % t);
          if (0 < a--)
            for (
              s < this.DB && 0 < (n = this[a] >> s) && ((o = !0), (i = c(n)));
              0 <= a;

            )
              s < t
                ? ((n = (this[a] & ((1 << s) - 1)) << (t - s)),
                  (n |= this[--a] >> (s += this.DB - t)))
                : ((n = (this[a] >> (s -= t)) & r),
                  s <= 0 && ((s += this.DB), --a)),
                0 < n && (o = !0),
                o && (i += c(n));
          return o ? i : "0";
        }),
        (g.prototype.negate = function() {
          var e = y();
          return g.ZERO.subTo(this, e), e;
        }),
        (g.prototype.abs = function() {
          return this.s < 0 ? this.negate() : this;
        }),
        (g.prototype.compareTo = function(e) {
          var t = this.s - e.s;
          if (0 != t) return t;
          var n = this.t;
          if (0 != (t = n - e.t)) return t;
          for (; 0 <= --n; ) if (0 != (t = this[n] - e[n])) return t;
          return 0;
        }),
        (g.prototype.bitLength = function() {
          return this.t <= 0
            ? 0
            : this.DB * (this.t - 1) + E(this[this.t - 1] ^ (this.s & this.DM));
        }),
        (g.prototype.mod = function(e) {
          var t = y();
          return (
            this.abs().divRemTo(e, null, t),
            this.s < 0 && 0 < t.compareTo(g.ZERO) && e.subTo(t, t),
            t
          );
        }),
        (g.prototype.modPowInt = function(e, t) {
          var n;
          return (
            (n = e < 256 || t.isEven() ? new v(t) : new b(t)), this.exp(e, n)
          );
        }),
        (g.ZERO = f(0)),
        (g.ONE = f(1)),
        (S.prototype.convert = C),
        (S.prototype.revert = C),
        (S.prototype.mulTo = function(e, t, n) {
          e.multiplyTo(t, n);
        }),
        (S.prototype.sqrTo = function(e, t) {
          e.squareTo(t);
        }),
        (O.prototype.convert = function(e) {
          if (e.s < 0 || e.t > 2 * this.m.t) return e.mod(this.m);
          if (e.compareTo(this.m) < 0) return e;
          var t = y();
          return e.copyTo(t), this.reduce(t), t;
        }),
        (O.prototype.revert = function(e) {
          return e;
        }),
        (O.prototype.reduce = function(e) {
          for (
            e.drShiftTo(this.m.t - 1, this.r2),
              e.t > this.m.t + 1 && ((e.t = this.m.t + 1), e.clamp()),
              this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
              this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
            e.compareTo(this.r2) < 0;

          )
            e.dAddOffset(1, this.m.t + 1);
          for (e.subTo(this.r2, e); 0 <= e.compareTo(this.m); )
            e.subTo(this.m, e);
        }),
        (O.prototype.mulTo = function(e, t, n) {
          e.multiplyTo(t, n), this.reduce(n);
        }),
        (O.prototype.sqrTo = function(e, t) {
          e.squareTo(t), this.reduce(t);
        });
      var w = [
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
        A = (1 << 26) / w[w.length - 1];
      (g.prototype.chunkSize = function(e) {
        return Math.floor((Math.LN2 * this.DB) / Math.log(e));
      }),
        (g.prototype.toRadix = function(e) {
          if ((null == e && (e = 10), 0 == this.signum() || e < 2 || 36 < e))
            return "0";
          var t = this.chunkSize(e),
            n = Math.pow(e, t),
            r = f(n),
            o = y(),
            i = y(),
            a = "";
          for (this.divRemTo(r, o, i); 0 < o.signum(); )
            (a = (n + i.intValue()).toString(e).substr(1) + a),
              o.divRemTo(r, o, i);
          return i.intValue().toString(e) + a;
        }),
        (g.prototype.fromRadix = function(e, t) {
          this.fromInt(0), null == t && (t = 10);
          for (
            var n = this.chunkSize(t),
              r = Math.pow(t, n),
              o = !1,
              i = 0,
              a = 0,
              s = 0;
            s < e.length;
            ++s
          ) {
            var c = l(e, s);
            c < 0
              ? "-" == e.charAt(s) && 0 == this.signum() && (o = !0)
              : ((a = t * a + c),
                ++i >= n &&
                  (this.dMultiply(r), this.dAddOffset(a, 0), (a = i = 0)));
          }
          0 < i && (this.dMultiply(Math.pow(t, i)), this.dAddOffset(a, 0)),
            o && g.ZERO.subTo(this, this);
        }),
        (g.prototype.fromNumber = function(e, t, n) {
          if ("number" == typeof t)
            if (e < 2) this.fromInt(1);
            else
              for (
                this.fromNumber(e, n),
                  this.testBit(e - 1) ||
                    this.bitwiseTo(g.ONE.shiftLeft(e - 1), u, this),
                  this.isEven() && this.dAddOffset(1, 0);
                !this.isProbablePrime(t);

              )
                this.dAddOffset(2, 0),
                  this.bitLength() > e &&
                    this.subTo(g.ONE.shiftLeft(e - 1), this);
          else {
            var r = new Array(),
              o = 7 & e;
            (r.length = 1 + (e >> 3)),
              t.nextBytes(r),
              0 < o ? (r[0] &= (1 << o) - 1) : (r[0] = 0),
              this.fromString(r, 256);
          }
        }),
        (g.prototype.bitwiseTo = function(e, t, n) {
          var r,
            o,
            i = Math.min(e.t, this.t);
          for (r = 0; r < i; ++r) n[r] = t(this[r], e[r]);
          if (e.t < this.t) {
            for (o = e.s & this.DM, r = i; r < this.t; ++r)
              n[r] = t(this[r], o);
            n.t = this.t;
          } else {
            for (o = this.s & this.DM, r = i; r < e.t; ++r) n[r] = t(o, e[r]);
            n.t = e.t;
          }
          (n.s = t(this.s, e.s)), n.clamp();
        }),
        (g.prototype.changeBit = function(e, t) {
          var n = g.ONE.shiftLeft(e);
          return this.bitwiseTo(n, t, n), n;
        }),
        (g.prototype.addTo = function(e, t) {
          for (var n = 0, r = 0, o = Math.min(e.t, this.t); n < o; )
            (r += this[n] + e[n]), (t[n++] = r & this.DM), (r >>= this.DB);
          if (e.t < this.t) {
            for (r += e.s; n < this.t; )
              (r += this[n]), (t[n++] = r & this.DM), (r >>= this.DB);
            r += this.s;
          } else {
            for (r += this.s; n < e.t; )
              (r += e[n]), (t[n++] = r & this.DM), (r >>= this.DB);
            r += e.s;
          }
          (t.s = r < 0 ? -1 : 0),
            0 < r ? (t[n++] = r) : r < -1 && (t[n++] = this.DV + r),
            (t.t = n),
            t.clamp();
        }),
        (g.prototype.dMultiply = function(e) {
          (this[this.t] = this.am(0, e - 1, this, 0, 0, this.t)),
            ++this.t,
            this.clamp();
        }),
        (g.prototype.dAddOffset = function(e, t) {
          for (; this.t <= t; ) this[this.t++] = 0;
          for (this[t] += e; this[t] >= this.DV; )
            (this[t] -= this.DV),
              ++t >= this.t && (this[this.t++] = 0),
              ++this[t];
        }),
        (g.prototype.multiplyLowerTo = function(e, t, n) {
          var r,
            o = Math.min(this.t + e.t, t);
          for (n.s = 0, n.t = o; 0 < o; ) n[--o] = 0;
          for (r = n.t - this.t; o < r; ++o)
            n[o + this.t] = this.am(0, e[o], n, o, 0, this.t);
          for (r = Math.min(e.t, t); o < r; ++o)
            this.am(0, e[o], n, o, 0, t - o);
          n.clamp();
        }),
        (g.prototype.multiplyUpperTo = function(e, t, n) {
          --t;
          var r = (n.t = this.t + e.t - t);
          for (n.s = 0; 0 <= --r; ) n[r] = 0;
          for (r = Math.max(t - this.t, 0); r < e.t; ++r)
            n[this.t + r - t] = this.am(t - r, e[r], n, 0, 0, this.t + r - t);
          n.clamp(), n.drShiftTo(1, n);
        }),
        (g.prototype.modInt = function(e) {
          if (e <= 0) return 0;
          var t = this.DV % e,
            n = this.s < 0 ? e - 1 : 0;
          if (0 < this.t)
            if (0 == t) n = this[0] % e;
            else
              for (var r = this.t - 1; 0 <= r; --r) n = (t * n + this[r]) % e;
          return n;
        }),
        (g.prototype.millerRabin = function(e) {
          var t = this.subtract(g.ONE),
            n = t.getLowestSetBit();
          if (n <= 0) return !1;
          var r = t.shiftRight(n);
          w.length < (e = (e + 1) >> 1) && (e = w.length);
          for (var o = y(), i = 0; i < e; ++i) {
            o.fromInt(w[i]);
            var a = o.modPow(r, this);
            if (0 != a.compareTo(g.ONE) && 0 != a.compareTo(t)) {
              for (var s = 1; s++ < n && 0 != a.compareTo(t); )
                if (0 == (a = a.modPowInt(2, this)).compareTo(g.ONE)) return !1;
              if (0 != a.compareTo(t)) return !1;
            }
          }
          return !0;
        }),
        (g.prototype.clone = function() {
          var e = y();
          return this.copyTo(e), e;
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
          var e = this.t,
            t = new Array();
          t[0] = this.s;
          var n,
            r = this.DB - ((e * this.DB) % 8),
            o = 0;
          if (0 < e--)
            for (
              r < this.DB &&
              (n = this[e] >> r) != (this.s & this.DM) >> r &&
              (t[o++] = n | (this.s << (this.DB - r)));
              0 <= e;

            )
              r < 8
                ? ((n = (this[e] & ((1 << r) - 1)) << (8 - r)),
                  (n |= this[--e] >> (r += this.DB - 8)))
                : ((n = (this[e] >> (r -= 8)) & 255),
                  r <= 0 && ((r += this.DB), --e)),
                0 != (128 & n) && (n |= -256),
                0 == o && (128 & this.s) != (128 & n) && ++o,
                (0 < o || n != this.s) && (t[o++] = n);
          return t;
        }),
        (g.prototype.equals = function(e) {
          return 0 == this.compareTo(e);
        }),
        (g.prototype.min = function(e) {
          return this.compareTo(e) < 0 ? this : e;
        }),
        (g.prototype.max = function(e) {
          return 0 < this.compareTo(e) ? this : e;
        }),
        (g.prototype.and = function(e) {
          var t = y();
          return this.bitwiseTo(e, p, t), t;
        }),
        (g.prototype.or = function(e) {
          var t = y();
          return this.bitwiseTo(e, u, t), t;
        }),
        (g.prototype.xor = function(e) {
          var t = y();
          return this.bitwiseTo(e, d, t), t;
        }),
        (g.prototype.andNot = function(e) {
          var t = y();
          return this.bitwiseTo(e, m, t), t;
        }),
        (g.prototype.not = function() {
          for (var e = y(), t = 0; t < this.t; ++t) e[t] = this.DM & ~this[t];
          return (e.t = this.t), (e.s = ~this.s), e;
        }),
        (g.prototype.shiftLeft = function(e) {
          var t = y();
          return e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t), t;
        }),
        (g.prototype.shiftRight = function(e) {
          var t = y();
          return e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t), t;
        }),
        (g.prototype.getLowestSetBit = function() {
          for (var e = 0; e < this.t; ++e)
            if (0 != this[e]) return e * this.DB + h(this[e]);
          return this.s < 0 ? this.t * this.DB : -1;
        }),
        (g.prototype.bitCount = function() {
          for (var e = 0, t = this.s & this.DM, n = 0; n < this.t; ++n)
            e += _(this[n] ^ t);
          return e;
        }),
        (g.prototype.testBit = function(e) {
          var t = Math.floor(e / this.DB);
          return t >= this.t
            ? 0 != this.s
            : 0 != (this[t] & (1 << e % this.DB));
        }),
        (g.prototype.setBit = function(e) {
          return this.changeBit(e, u);
        }),
        (g.prototype.clearBit = function(e) {
          return this.changeBit(e, m);
        }),
        (g.prototype.flipBit = function(e) {
          return this.changeBit(e, d);
        }),
        (g.prototype.add = function(e) {
          var t = y();
          return this.addTo(e, t), t;
        }),
        (g.prototype.subtract = function(e) {
          var t = y();
          return this.subTo(e, t), t;
        }),
        (g.prototype.multiply = function(e) {
          var t = y();
          return this.multiplyTo(e, t), t;
        }),
        (g.prototype.divide = function(e) {
          var t = y();
          return this.divRemTo(e, t, null), t;
        }),
        (g.prototype.remainder = function(e) {
          var t = y();
          return this.divRemTo(e, null, t), t;
        }),
        (g.prototype.divideAndRemainder = function(e) {
          var t = y(),
            n = y();
          return this.divRemTo(e, t, n), new Array(t, n);
        }),
        (g.prototype.modPow = function(e, t) {
          var n,
            r,
            o = e.bitLength(),
            i = f(1);
          if (o <= 0) return i;
          (n = o < 18 ? 1 : o < 48 ? 3 : o < 144 ? 4 : o < 768 ? 5 : 6),
            (r = o < 8 ? new v(t) : t.isEven() ? new O(t) : new b(t));
          var a = new Array(),
            s = 3,
            c = n - 1,
            l = (1 << n) - 1;
          if (((a[1] = r.convert(this)), 1 < n)) {
            var p = y();
            for (r.sqrTo(a[1], p); s <= l; )
              (a[s] = y()), r.mulTo(p, a[s - 2], a[s]), (s += 2);
          }
          var u,
            d,
            m = e.t - 1,
            h = !0,
            _ = y();
          for (o = E(e[m]) - 1; 0 <= m; ) {
            for (
              c <= o
                ? (u = (e[m] >> (o - c)) & l)
                : ((u = (e[m] & ((1 << (o + 1)) - 1)) << (c - o)),
                  0 < m && (u |= e[m - 1] >> (this.DB + o - c))),
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
            for (; 0 <= m && 0 == (e[m] & (1 << o)); )
              r.sqrTo(i, _),
                (d = i),
                (i = _),
                (_ = d),
                --o < 0 && ((o = this.DB - 1), --m);
          }
          return r.revert(i);
        }),
        (g.prototype.modInverse = function(e) {
          var t = e.isEven();
          if ((this.isEven() && t) || 0 == e.signum()) return g.ZERO;
          for (
            var n = e.clone(),
              r = this.clone(),
              o = f(1),
              i = f(0),
              a = f(0),
              s = f(1);
            0 != n.signum();

          ) {
            for (; n.isEven(); )
              n.rShiftTo(1, n),
                t
                  ? ((o.isEven() && i.isEven()) ||
                      (o.addTo(this, o), i.subTo(e, i)),
                    o.rShiftTo(1, o))
                  : i.isEven() || i.subTo(e, i),
                i.rShiftTo(1, i);
            for (; r.isEven(); )
              r.rShiftTo(1, r),
                t
                  ? ((a.isEven() && s.isEven()) ||
                      (a.addTo(this, a), s.subTo(e, s)),
                    a.rShiftTo(1, a))
                  : s.isEven() || s.subTo(e, s),
                s.rShiftTo(1, s);
            0 <= n.compareTo(r)
              ? (n.subTo(r, n), t && o.subTo(a, o), i.subTo(s, i))
              : (r.subTo(n, r), t && a.subTo(o, a), s.subTo(i, s));
          }
          return 0 != r.compareTo(g.ONE)
            ? g.ZERO
            : 0 <= s.compareTo(e)
            ? s.subtract(e)
            : s.signum() < 0
            ? (s.addTo(e, s), s.signum() < 0 ? s.add(e) : s)
            : s;
        }),
        (g.prototype.pow = function(e) {
          return this.exp(e, new S());
        }),
        (g.prototype.gcd = function(e) {
          var t = this.s < 0 ? this.negate() : this.clone(),
            n = e.s < 0 ? e.negate() : e.clone();
          if (t.compareTo(n) < 0) {
            var r = t;
            (t = n), (n = r);
          }
          var o = t.getLowestSetBit(),
            i = n.getLowestSetBit();
          if (i < 0) return t;
          for (
            o < i && (i = o), 0 < i && (t.rShiftTo(i, t), n.rShiftTo(i, n));
            0 < t.signum();

          )
            0 < (o = t.getLowestSetBit()) && t.rShiftTo(o, t),
              0 < (o = n.getLowestSetBit()) && n.rShiftTo(o, n),
              0 <= t.compareTo(n)
                ? (t.subTo(n, t), t.rShiftTo(1, t))
                : (n.subTo(t, n), n.rShiftTo(1, n));
          return 0 < i && n.lShiftTo(i, n), n;
        }),
        (g.prototype.isProbablePrime = function(e) {
          var t,
            n = this.abs();
          if (1 == n.t && n[0] <= w[w.length - 1]) {
            for (t = 0; t < w.length; ++t) if (n[0] == w[t]) return !0;
            return !1;
          }
          if (n.isEven()) return !1;
          for (t = 1; t < w.length; ) {
            for (var r = w[t], o = t + 1; o < w.length && r < A; ) r *= w[o++];
            for (r = n.modInt(r); t < o; ) if (r % w[t++] == 0) return !1;
          }
          return n.millerRabin(e);
        });
      var I = g,
        T = function(e, t) {
          (this.modulus = new I(e, 16)),
            (this.encryptionExponent = new I(t, 16));
        },
        N = {
          base64:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          encode: function(e) {
            if (!e) return !1;
            for (
              var t, n, r, o, i, a, s, c = "", l = 0;
              (o = (t = e.charCodeAt(l++)) >> 2),
                (i = ((3 & t) << 4) | ((n = e.charCodeAt(l++)) >> 4)),
                (a = ((15 & n) << 2) | ((r = e.charCodeAt(l++)) >> 6)),
                (s = 63 & r),
                isNaN(n) ? (a = s = 64) : isNaN(r) && (s = 64),
                (c +=
                  this.base64.charAt(o) +
                  this.base64.charAt(i) +
                  this.base64.charAt(a) +
                  this.base64.charAt(s)),
                l < e.length;

            );
            return c;
          },
          decode: function(e) {
            if (!e) return !1;
            e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            for (
              var t, n, r, o, i = "", a = 0;
              (t = this.base64.indexOf(e.charAt(a++))),
                (n = this.base64.indexOf(e.charAt(a++))),
                (r = this.base64.indexOf(e.charAt(a++))),
                (o = this.base64.indexOf(e.charAt(a++))),
                (i += String.fromCharCode((t << 2) | (n >> 4))),
                64 != r &&
                  (i += String.fromCharCode(((15 & n) << 4) | (r >> 2))),
                64 != o && (i += String.fromCharCode(((3 & r) << 6) | o)),
                a < e.length;

            );
            return i;
          }
        },
        L = {
          hex: "0123456789abcdef",
          encode: function(e) {
            if (!e) return !1;
            for (
              var t, n = "", r = 0;
              (t = e.charCodeAt(r++)),
                (n += this.hex.charAt((t >> 4) & 15) + this.hex.charAt(15 & t)),
                r < e.length;

            );
            return n;
          },
          decode: function(e) {
            if (!e) return !1;
            e = e.replace(/[^0-9abcdef]/g, "");
            for (
              var t = "", n = 0;
              (t += String.fromCharCode(
                ((this.hex.indexOf(e.charAt(n++)) << 4) & 240) |
                  (15 & this.hex.indexOf(e.charAt(n++)))
              )),
                n < e.length;

            );
            return t;
          }
        },
        B = {
          getPublicKey: function(e, t) {
            return new T(e, t);
          },
          encrypt: function(e, t) {
            return (
              !!t &&
              (!!(e = this.pkcs1pad2(e, (t.modulus.bitLength() + 7) >> 3)) &&
                (!!(e = e.modPowInt(t.encryptionExponent, t.modulus)) &&
                  (1 == (1 & (e = e.toString(16)).length) && (e = "0" + e),
                  N.encode(L.decode(e)))))
            );
          },
          pkcs1pad2: function(e, t) {
            if (t < e.length + 11) return null;
            for (var n = [], r = e.length - 1; 0 <= r && 0 < t; )
              n[--t] = e.charCodeAt(r--);
            for (n[--t] = 0; 2 < t; )
              n[--t] = Math.floor(254 * Math.random()) + 1;
            return (n[--t] = 2), (n[--t] = 0), new I(n);
          }
        };
      t.default = B;
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
        RoomEffectButton: "emoticon_RoomEffectButton_2v2oP",
        TopDivider: "emoticon_TopDivider_2A8Fl",
        BottomDivider: "emoticon_BottomDivider_2IZ1K",
        CountBadge: "emoticon_CountBadge_3lf1T",
        StickerButton: "emoticon_StickerButton_3Wc3j"
      };
    },
    uIWk: function(e, t, n) {
      "use strict";
      var a = n("mrSG"),
        r = n("vDqi"),
        s = n.n(r),
        o = n("2vnA"),
        c = n("lkRc"),
        l = (function() {
          function e(e) {
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
              (this.m_clanSteamID = e);
          }
          return (
            (e.prototype.Initialize = function(e) {
              var t = this;
              (this.m_strName = e.name || ""),
                (this.m_strAvatarURLFullSize =
                  e.avatar_url_full_size ||
                  "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"),
                e.social &&
                  e.social.forEach(function(e) {
                    return t.m_socialList.push(e);
                  }),
                (this.m_strTagLineLoc = e.tag_line_localized || ""),
                (this.m_nFollowers = e.followers || 0),
                (this.m_strVanity = e.vanity || void 0),
                (this.m_webLink = e.weblink),
                (this.m_bIsHidden = e.hidden || !1),
                e.appids &&
                  e.appids.forEach(function(e) {
                    return t.m_appidList.push(e);
                  }),
                (this.m_bIsLoaded = !0);
            }),
            (e.prototype.BIsLoaded = function() {
              return this.m_bIsLoaded;
            }),
            (e.prototype.GetClanSteamID = function() {
              return this.m_clanSteamID;
            }),
            (e.prototype.GetClanAccountID = function() {
              return this.m_clanSteamID.GetAccountID();
            }),
            (e.prototype.GetAppIDList = function() {
              return this.m_appidList;
            }),
            (e.prototype.GetSocialList = function() {
              return this.m_socialList;
            }),
            (e.prototype.GetName = function() {
              return this.m_strName;
            }),
            (e.prototype.GetAvatarURLFullSize = function() {
              return this.m_strAvatarURLFullSize;
            }),
            (e.prototype.GetTagLine = function() {
              return this.m_strTagLineLoc;
            }),
            (e.prototype.GetNumFollowers = function() {
              return this.m_nFollowers;
            }),
            (e.prototype.BIsHidden = function() {
              return this.m_bIsHidden;
            }),
            (e.prototype.GetURL = function(e) {
              if (this.m_strVanity) {
                switch (e) {
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
            (e.prototype.BHasWebLink = function() {
              return void 0 !== this.m_webLink;
            }),
            (e.prototype.GetWebLink = function() {
              return this.m_webLink;
            }),
            (e.prototype.GetVanityString = function() {
              return this.m_strVanity;
            }),
            (e.prototype.AdjustFollower = function(e) {
              this.m_nFollowers += e;
            }),
            Object(a.c)([o.observable], e.prototype, "m_appidList", void 0),
            Object(a.c)([o.observable], e.prototype, "m_nFollowers", void 0),
            e
          );
        })(),
        p = n("kLLr");
      n.d(t, "a", function() {
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
              var e = Object(c.f)("creatorhome", "application_config");
              this.ValidateStoreDefault(e) &&
                e.forEach(function(e) {
                  var t = Number(e.creator_clan_id),
                    n = p.a.InitFromClanID(t),
                    r = new l(n);
                  r.Initialize(e),
                    (r.m_promise = i.GetAsPromise(r)),
                    o.m_mapClanToCreatorHome.set(t, r);
                });
              var t = Object(c.f)("creatorhomeforapp", "application_config");
              this.ValidateStoreDefaultAppList(t) &&
                t.forEach(function(e) {
                  o.m_mapAppToCreatorIDList.has(e.appid) ||
                    o.m_mapAppToCreatorIDList.set(e.appid, new Array()),
                    o.m_mapAppToCreatorIDList.get(e.appid).push(e);
                }),
                (this.m_bLoadedFromConfig = !0);
            }
          }),
          (i.GetAsPromise = function(t) {
            return Object(a.b)(this, void 0, void 0, function() {
              return Object(a.e)(this, function(e) {
                return [2, t];
              });
            });
          }),
          (i.prototype.ValidateStoreDefault = function(e) {
            var t = e;
            return (
              !!(
                t &&
                Array.isArray(t) &&
                0 < t.length &&
                "object" == typeof t[0]
              ) &&
              ("string" == typeof t[0].name &&
                ("string" == typeof t[0].creator_clan_id ||
                  "number" == typeof t[0].creator_clan_id))
            );
          }),
          (i.prototype.ValidateStoreDefaultAppList = function(e) {
            var t = e;
            return (
              !!(
                t &&
                Array.isArray(t) &&
                0 < t.length &&
                "object" == typeof t[0]
              ) &&
              ("number" == typeof t[0].clan_account_id &&
                0 < t[0].clan_account_id &&
                "number" == typeof t[0].appid &&
                0 < t[0].appid)
            );
          }),
          (i.prototype.BHasCreatorHomeLoaded = function(e) {
            return (
              this.m_mapClanToCreatorHome.has(e.GetAccountID()) &&
              this.m_mapClanToCreatorHome.get(e.GetAccountID()).BIsLoaded()
            );
          }),
          (i.prototype.GetCreatorHome = function(e) {
            return this.m_mapClanToCreatorHome.get(e.GetAccountID());
          }),
          (i.prototype.GetCreatorHomeByID = function(e) {
            return this.m_mapClanToCreatorHome.get(e.clan_account_id);
          }),
          (i.prototype.LoadCreatorHome = function(n, r) {
            return Object(a.b)(this, void 0, void 0, function() {
              var t;
              return Object(a.e)(this, function(e) {
                switch (e.label) {
                  case 0:
                    return (
                      this.LazyInit(),
                      this.m_mapClanToCreatorHome.has(n.GetAccountID())
                        ? [3, 2]
                        : (((t = new l(n)).m_promise = this.InternalCreatorHome(
                            t,
                            r
                          )),
                          [4, t.m_promise])
                    );
                  case 1:
                    e.sent(),
                      this.m_mapClanToCreatorHome.set(n.GetAccountID(), t),
                      (e.label = 2);
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
              var t, n, r;
              return Object(a.e)(this, function(e) {
                switch (e.label) {
                  case 0:
                    return (
                      (t = {
                        get_appids: !0,
                        l: c.c.LANGUAGE,
                        origin: self.origin
                      }),
                      (n =
                        c.c.STORE_BASE_URL +
                        "curator/" +
                        o.GetClanAccountID() +
                        "/ajaxgetcreatorhomeinfo"),
                      [4, s.a.get(n, { params: t, cancelToken: i && i.token })]
                    );
                  case 1:
                    return (r = e.sent()), o.Initialize(r.data), [2, o];
                }
              });
            });
          }),
          (i.prototype.LoadCreatorHomeListForAppIncludeHiddden = function(
            o,
            i
          ) {
            return Object(a.b)(this, void 0, void 0, function() {
              var t, n, r;
              return Object(a.e)(this, function(e) {
                switch (e.label) {
                  case 0:
                    return (
                      this.LazyInit(),
                      this.m_mapAppToCreatorIDList.has(o)
                        ? [3, 2]
                        : ((t = { appid: o }),
                          (n =
                            c.c.STORE_BASE_URL +
                            "events/ajaxgetcreatorhomeidforapp"),
                          [
                            4,
                            s.a.get(n, {
                              params: t,
                              cancelToken: i && i.token,
                              withCredentials: !0
                            })
                          ])
                    );
                  case 1:
                    (r = e.sent()),
                      this.m_mapAppToCreatorIDList.set(o, r.data.creator_list),
                      (e.label = 2);
                  case 2:
                    return [2, this.m_mapAppToCreatorIDList.get(o)];
                }
              });
            });
          }),
          (i.prototype.GetCreatorHomeListForAppIncludeHidden = function(e) {
            return this.m_mapAppToCreatorIDList.has(e)
              ? this.m_mapAppToCreatorIDList.get(e)
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
    vEGm: function(e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTM3OEVDNTUyMUM0MTFFNDgxN0ZEN0MzNjYzNzcxOTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTM3OEVDNTYyMUM0MTFFNDgxN0ZEN0MzNjYzNzcxOTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMzc4RUM1MzIxQzQxMUU0ODE3RkQ3QzM2NjM3NzE5NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMzc4RUM1NDIxQzQxMUU0ODE3RkQ3QzM2NjM3NzE5NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ps9jzFQAAACPSURBVHjaYvz//z+DkJDQdQYGhpsMCMAKxMZAHPXu3bt9cFGQYkFBwQ0gGoaBfAEgzgfibUDsBxNnYsAOfgKxJBBvAeIZMEEWZBVA52xA5gOdUAEUc8NQDBTkBEoGMOAByCYLAjUsRzM5AKtioMQzIEW0ydjcHIBTMSE3M0Ij5RKQfQ6HGiOgIXogBkCAAQDGVT+0v+n6EQAAAABJRU5ErkJggg==";
    },
    vv6K: function(e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC";
    },
    wUwH: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return a;
      });
      var r = n("mrSG"),
        o = n("lkRc"),
        i = n("2vnA"),
        a = (function() {
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
                ? o.c.COMMUNITY_CDN_URL + "economy/emoticonlarge/" + e
                : o.c.COMMUNITY_CDN_URL + "economy/emoticon/" + e;
            }),
            (e.GetEmoticonReplaceRegex = function() {
              return e.sm_EmoticonRegex;
            }),
            (e.prototype.SearchEmoticons = function(t, l, n) {
              function p(e) {
                return e.name_normalized || e.name;
              }
              void 0 === l && (l = 25),
                void 0 === n && (n = !0),
                this.UpdateEmoticonList(),
                (t = t.toLocaleLowerCase());
              var e = this.recent_emoticons.filter(function(e) {
                  return !t || p(e).startsWith(t);
                }),
                r = this.recent_emoticons.filter(function(e) {
                  return !n && -1 !== p(e).indexOf(t);
                }),
                o = this.m_rgEmoticons.filter(function(e) {
                  return !t || p(e).startsWith(t);
                }),
                i = this.m_rgEmoticons.filter(function(e) {
                  return !n && -1 !== p(e).indexOf(t);
                }),
                u = new Set(),
                d = [];
              function a(e, t, n) {
                for (var r = 0, o = e; r < o.length; r++) {
                  var i = o[r];
                  if (
                    ((s = t),
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
                a(e, !0, function(e) {
                  return !(e.last_used || !e.time_received);
                }),
                a(o, !1, function() {
                  return !1;
                }),
                a(r, !0, function(e) {
                  return !(e.last_used || !e.time_received);
                }),
                a(i, !1, function() {
                  return !1;
                }),
                d
              );
            }),
            Object.defineProperty(e.prototype, "is_initialized", {
              get: function() {
                return this.m_bInitialized;
              },
              enumerable: !0,
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
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "flair_list", {
              get: function() {
                return this.UpdateEmoticonList(), this.m_rgFlairs;
              },
              enumerable: !0,
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
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype.TrackEmoticonUsage = function(e, t) {
              if (this.m_bInitialized) {
                for (
                  var n, r = new Map(), o = /\[emoticon\]([^[]*)/g;
                  (n = o.exec(e));

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
                        ((l.last_used = t),
                        (l.use_count += r.get(l.name)),
                        r.delete(l.name),
                        l.time_received && ((a = !0), delete l.time_received));
                    }
                  if (r.size)
                    for (var p = 0, u = this.m_rgEmoticons; p < u.length; p++) {
                      l = u[p];
                      r.has(l.name) &&
                        ((l.last_used = t),
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
                  n = this.m_rgEmoticons;
                t < n.length;
                t++
              ) {
                var r = n[t];
                (r.last_used || (r.time_received && r.time_received > e)) &&
                  this.m_rgRecentEmoticons.push(r);
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
                var t = this.GetServerTime() - 604800, n = 0, r = e;
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
                  : (!o.last_used && o.time_received > t
                      ? (!this.m_rtMostRecentEmoticon ||
                          o.time_received > this.m_rtMostRecentEmoticon) &&
                        (this.m_rtMostRecentEmoticon = o.time_received)
                      : delete o.time_received,
                    this.m_rgEmoticons.push(o));
              }
              (this.m_bInitialized = !0), (this.m_bEmoticonListRequested = !1);
            }),
            (e.sm_EmoticonRegex = new RegExp("ː([a-zA-Z0-9_\\-]+)ː", "g")),
            Object(r.c)([i.observable], e.prototype, "m_bInitialized", void 0),
            Object(r.c)(
              [i.observable],
              e.prototype,
              "m_rtMostRecentEmoticon",
              void 0
            ),
            Object(r.c)(
              [i.observable],
              e.prototype,
              "m_rtLastStickerOrEffect",
              void 0
            ),
            Object(r.c)([i.action], e.prototype, "TrackEmoticonUsage", null),
            e
          );
        })();
    }
  }
]);

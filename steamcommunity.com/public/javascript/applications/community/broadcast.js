/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    NIbt: function (e, t, a) {
      "use strict";
      a.r(t);
      var m = a("mrSG"),
        r = a("vDqi"),
        l = a.n(r),
        n = a("TyAF"),
        u = a("q1tI"),
        p = a.n(u),
        s = a("eN6m"),
        o = a("trWU"),
        _ = a("5eAM"),
        h = a("VQ2A"),
        b = a("b3LC"),
        v = a("5L1o"),
        f = a("NKJh"),
        S = a("RQmk"),
        g = a("dfs5"),
        E = a("0OaU"),
        O = a("exH9"),
        j = a("lkRc"),
        i = a("dLk7"),
        y = a.n(i),
        c = Object(n.a)(function (e) {
          var t = e.appid,
            a = Object(b.c)(t, 0, !0),
            r = (a[0], a[1]),
            n = Object(g.c)();
          Object(u.useEffect)(
            function () {
              _.a.BHasAppLinkLoaded(t) ||
                Object(m.b)(void 0, void 0, void 0, function () {
                  return Object(m.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [4, _.a.LoadAppLinkInfo([t])];
                      case 1:
                        return [2, e.sent()];
                    }
                  });
                });
            },
            [t]
          );
          var s = y.a.StoreSaleWidgetContainer_mini,
            o = y.a.StoreSaleWidgetImage_mini,
            i = y.a.StoreSaleImage_mini,
            c = (y.a.StoreSaleWidgetShortDesc_mini, _.a.GetAppLinkInfo(t));
          if (!r || !c)
            return p.a.createElement(
              "div",
              { className: s },
              p.a.createElement(E.a, { size: "medium" }),
              ";"
            );
          var l = "series" != c.type,
            d = Object(h.b)(c.capsule_link, n);
          return c && c.title
            ? p.a.createElement(
                "div",
                { className: s },
                p.a.createElement(
                  "div",
                  { className: f.Actions },
                  p.a.createElement(
                    "a",
                    { href: d, target: j.c.IN_CLIENT ? void 0 : "_blank" },
                    p.a.createElement(
                      S.b,
                      { type: "app", id: c.appid },
                      p.a.createElement(
                        "div",
                        { className: o },
                        p.a.createElement("img", {
                          className: i,
                          src: c.capsule,
                        })
                      )
                    )
                  )
                ),
                p.a.createElement(
                  "div",
                  { className: f.StoreSaleBroadcastWidgetRight },
                  p.a.createElement(
                    "div",
                    { className: f.Actions },
                    p.a.createElement(
                      "a",
                      { href: d, target: j.c.IN_CLIENT ? void 0 : "_blank" },
                      p.a.createElement(
                        S.b,
                        { type: "app", id: c.appid },
                        p.a.createElement(
                          "div",
                          {
                            className: Object(O.a)(
                              f.StoreSaleWidgetTitle,
                              "StoreSaleWidgetTitle"
                            ),
                          },
                          c.title
                        )
                      )
                    )
                  ),
                  p.a.createElement(
                    "div",
                    { className: f.StoreSaleWidgetRelease },
                    c.release
                  ),
                  l &&
                    p.a.createElement(v.i, {
                      info: c,
                      bShowDemoButton: !0,
                      bStackedButtons: !0,
                    })
                )
              )
            : p.a.createElement("div", {
                className: f.StoreSaleWidgetEmptyContainer,
              });
        }),
        C = a("kyHq"),
        d = a("1BdX"),
        I = a("boaH"),
        w = a("nWbB"),
        N = a("02Wr"),
        B = a("MnIK"),
        P = a("6Y59"),
        G = a("d+Me"),
        A = a("TLQK"),
        k = a("bxiW"),
        L = a("kLLr"),
        D = a("uIWk"),
        x = a("rKv1"),
        T = a.n(x),
        W = Object(n.a)(function (e) {
          var t = e.event,
            n = t.clanSteamID.GetAccountID(),
            a = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
            s = Object(u.useRef)(null),
            r = Object(u.useState)(
              t ? D.a.GetCreatorHome(t.clanSteamID) : null
            ),
            o = r[0],
            i = r[1];
          if (
            (Object(u.useEffect)(
              function () {
                var r = l.a.CancelToken.source();
                s.current = r.cancel;
                return (
                  Object(m.b)(void 0, void 0, void 0, function () {
                    var t, a;
                    return Object(m.e)(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return (
                            (t = L.a.InitFromClanID(n)),
                            [4, D.a.LoadCreatorHome(t, r)]
                          );
                        case 1:
                          return (a = e.sent()), r.token.reason || i(a), [2];
                      }
                    });
                  }),
                  function () {
                    s.current && s.current("BroadcastDropsDisplay: unmounting");
                  }
                );
              },
              [n]
            ),
            a || !o || !o.BIsLoaded())
          )
            return null;
          var c =
            j.c.COMMUNITY_BASE_URL +
            "gid/" +
            t.jsondata.broadcast_item_drops_details_clan_accountid +
            "/partnerevents/view/" +
            t.jsondata.broadcast_item_drops_details_event_gid;
          return p.a.createElement(
            "div",
            { className: T.a.item_drop_ctn },
            p.a.createElement(
              "div",
              null,
              Object(A.f)(
                0 < o.GetName().length
                  ? t.jsondata.broadcast_item_drops_min_watch_time_minutes %
                      60 ==
                    0
                    ? "#SalePage_WatchForDrop_Hours_CreatorNamed"
                    : "#SalePage_WatchForDrop_Minutes_CreatorNamed"
                  : t.jsondata.broadcast_item_drops_min_watch_time_minutes %
                      60 ==
                    0
                  ? "#SalePage_WatchForDrop_Hours_Developer"
                  : "#SalePage_WatchForDrop_Minutes_Developer",
                t.jsondata.broadcast_item_drops_min_watch_time_minutes % 60 == 0
                  ? t.jsondata.broadcast_item_drops_min_watch_time_minutes / 60
                  : t.jsondata.broadcast_item_drops_min_watch_time_minutes,
                o.GetName()
              ),
              Boolean(t.jsondata.broadcast_item_drops_details_clan_accountid) &&
                p.a.createElement(
                  "a",
                  { href: c, target: j.c.IN_CLIENT ? "" : "_blank" },
                  Object(A.f)("#SalePage_WatchForDrop_LearnMore")
                )
            )
          );
        }),
        R = {
          list: [
            { appid: 444090, url: "https://steam.tv/paladins" },
            { appid: 386360, url: "https://steam.tv/smite" },
            { appid: 813820, url: "https://steam.tv/realmroyale" },
            {
              appid: 583950,
              url: "https://steam.tv/artifact",
              broadcasterAccountID: 912972716,
            },
            {
              appid: 570,
              url: "https://steam.tv/dota",
              broadcasterAccountID: 238221269,
            },
            {
              appid: 1025790,
              url: "https://steam.tv/steamawards",
              broadcasterAccountID: 934427243,
            },
            {
              appid: 730,
              url: "https://steam.tv/csgo",
              broadcasterAccountID: 927819071,
            },
          ],
        },
        H = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_cancelSignal = l.a.CancelToken.source()),
              (e.state = {
                bShowPopoutHeader: !1,
                bExpanded: !1,
                bLoadingPreference: !0,
                style: {
                  maxHeight: "0vh",
                  overflow: "hidden",
                  transition: "max-height 1s ease-in-out",
                },
                innerStyle: {
                  maxHeight: "0vh",
                  overflow: "hidden",
                  transition: "max-height 1s ease-in-out",
                },
                bStartMuted: !0,
              }),
              e
            );
          }
          var p;
          return (
            Object(m.d)(e, t),
            ((p = e).IsBroadcastAllowed = function () {
              return j.c.EREALM != C.d.k_ESteamRealmChina;
            }),
            (e.prototype.componentDidMount = function () {
              return Object(m.b)(this, void 0, void 0, function () {
                var t = this;
                return Object(m.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return p.IsBroadcastAllowed()
                        ? [
                            4,
                            w.a
                              .Get()
                              .LoadBIsEmbeddedBroadcastHidden(
                                this.m_cancelSignal
                              ),
                          ]
                        : [2];
                    case 1:
                      return (e.sent(),
                      this.m_cancelSignal.token.reason ||
                        this.setState({
                          bLoadingPreference: !1,
                          bExpanded: !w.a
                            .Get()
                            .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                          innerStyle: Object(m.a)(
                            Object(m.a)({}, this.state.innerStyle),
                            {
                              maxHeight: w.a
                                .Get()
                                .BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
                                ? "0vh"
                                : "100vh",
                            }
                          ),
                        }),
                      this.props.nAppIDVOD)
                        ? (w.a.Get().SetupEmbeddableVOD(this.props), [3, 4])
                        : [3, 2];
                    case 2:
                      return [
                        4,
                        this.props.bIsPreview && this.props.accountIDs
                          ? w.a
                              .Get()
                              .HintLoadEmbeddablePreviewStreams(this.props)
                          : w.a.Get().HintLoadEmbeddableStreams(this.props),
                      ];
                    case 3:
                      e.sent(), (e.label = 4);
                    case 4:
                      return (
                        window.setTimeout(function () {
                          t.m_cancelSignal.token.reason ||
                            t.setState({
                              style: Object(m.a)(
                                Object(m.a)({}, t.state.style),
                                { maxHeight: "100vh" }
                              ),
                            });
                        }, 10),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.componentWillUnmount = function () {
              this.m_cancelSignal.cancel(
                "BroadcastEmbeddable component unmounted"
              );
            }),
            (e.prototype.ToggleBroadcastExpandShrink = function () {
              var e = this,
                t = w.a.Get().GetPlayReadyStream(this.props),
                a = I.a.GetOrCreateBroadcastInfo(t.steamid).m_nAppID;
              Object(w.e)(a, this.state.bExpanded ? 2 : 3, t.snr);
              var r = this.state.bExpanded;
              window.setTimeout(function () {
                return e.setState({
                  innerStyle: Object(m.a)(Object(m.a)({}, e.state.innerStyle), {
                    maxHeight: r ? "0vh" : "100vh",
                  }),
                });
              }, 10),
                r ||
                  this.setState(
                    { bExpanded: !this.state.bExpanded },
                    function () {
                      return w.a
                        .Get()
                        .SetEmbeddedStreamCollapsed(!e.state.bExpanded);
                    }
                  );
            }),
            (e.prototype.OnShrinkTransitionEnd = function () {
              "0vh" === this.state.innerStyle.maxHeight &&
                this.setState({ bExpanded: !1 }, function () {
                  return w.a.Get().SetEmbeddedStreamCollapsed(!0);
                });
            }),
            (e.prototype.onStreamSelect = function (t) {
              return Object(m.b)(this, void 0, void 0, function () {
                return Object(m.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        this.setState({ bStartMuted: !1 }),
                        w.a.Get().GetPlayReadyStream(this.props).accountid ==
                        t.accountid
                          ? [3, 2]
                          : [4, w.a.Get().AttemptToPlayStream(this.props, t)]
                      );
                    case 1:
                      e.sent(), (e.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.ConstructSidePanels = function (e, t) {
              var a = {
                leftPanel: null,
                rightPanel: null,
                bRightPanelArtworkOrEmpty: !0,
              };
              if (this.props.bWidePlayer) return a;
              var r,
                n = 1 < w.a.Get().GetConcurrentStreams(this.props),
                s = I.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
                o = u.createElement(
                  "div",
                  { className: T.a.rightPanel },
                  u.createElement(F, {
                    key: "right" + s,
                    ImgUrl: e.right_panel,
                  })
                ),
                i = u.createElement(F, {
                  key: "left" + s,
                  ImgUrl: e.left_panel,
                });
              return (
                s < 11 &&
                  (r = d.b.GetAppIDListForBroadcasterSteamID(e.steamid)) &&
                  1 === r.length &&
                  (s = r[0]),
                !(
                  (this.props.promotionName ||
                    this.props.bIsPreview ||
                    this.props.subid ||
                    this.props.bundleid) &&
                  11 <= s
                ) ||
                  (this.props.event &&
                    this.props.event.jsondata.broadcast_force_banner) ||
                  ((o = u.createElement(c, {
                    key: "mini" + e.accountid,
                    appid: s,
                  })),
                  (a.bRightPanelArtworkOrEmpty = !1)),
                n && !t
                  ? ((a.leftPanel = u.createElement(K, {
                      broadcastEmbedContext: this.props,
                      key: "selector" + s,
                      curStream: e,
                      onStreamSelect: this.onStreamSelect,
                      fnFilterStreams: this.props.fnFilterStreams,
                      bShowCapsuleArt: this.props.bShowCapsuleArt,
                    })),
                    (a.rightPanel = o))
                  : t
                  ? ((a.leftPanel = u.createElement("div", null)),
                    (a.rightPanel = u.createElement(J, {
                      stream: e,
                      orientation: "rightside",
                    })),
                    (a.bRightPanelArtworkOrEmpty = !1))
                  : ((a.leftPanel = i), (a.rightPanel = o)),
                a
              );
            }),
            (e.prototype.render = function () {
              var e, t;
              if (!p.IsBroadcastAllowed() || this.state.bLoadingPreference)
                return null;
              var a = w.a.Get().GetPlayReadyStream(this.props);
              if (a) {
                var r = "show" === w.a.Get().GetChatVisibility(),
                  n = this.props,
                  s = n.event,
                  o = n.language,
                  i = n.fnRenderBroadcastContext;
                s &&
                  (a = Object(m.a)(Object(m.a)({}, a), {
                    left_panel: s.GetImageURL(
                      "broadcast_left",
                      o || Object(C.e)(j.c.LANGUAGE)
                    ),
                    right_panel: s.GetImageURL(
                      "broadcast_right",
                      o || Object(C.e)(j.c.LANGUAGE)
                    ),
                    store_title: s.GetBroadcastTitle(
                      o || Object(C.e)(j.c.LANGUAGE)
                    ),
                    broadcast_chat_visibility: s.GetBroadcastChatVisibility(),
                  }));
                var c = this.ConstructSidePanels(a, r),
                  l = a.store_title ? a.store_title : a.title,
                  d =
                    "radial-gradient(100% 80% at 64% 95%, " +
                    ((s &&
                      s.jsondata &&
                      s.jsondata.broadcast_gradient_inner_color) ||
                      "rgba(108, 119, 134, 0.4)") +
                    " 40%, " +
                    ((s &&
                      s.jsondata &&
                      s.jsondata.broadcast_gradient_outer_color) ||
                      "rgba(83, 104, 104, 0.4)") +
                    " 100%)";
                return u.createElement(
                  u.Fragment,
                  null,
                  u.createElement(
                    "div",
                    {
                      className: "broadcast_embed_top_ctn_trgt",
                      style: this.state.style,
                    },
                    u.createElement(
                      "div",
                      {
                        style: { background: d },
                        className: Object(O.a)(
                          (((e = {})[T.a.bordered_container] = !0),
                          (e[T.a.Event] = Boolean(s)),
                          (e.broadcast_brd_ctn_trgt = !0),
                          e)
                        ),
                      },
                      u.createElement(
                        "div",
                        {
                          className: Object(O.a)(
                            T.a.bordered_title,
                            "bordered_title_trgt"
                          ),
                        },
                        u.createElement(v.d, null),
                        l,
                        u.createElement(
                          "div",
                          { className: T.a.bordered_corner_container },
                          !this.state.bExpanded &&
                            u.createElement("div", {
                              className: T.a.broadcast_settings_icon,
                              "data-tooltip-text": Object(A.f)(
                                "#StoreBroadcast_Change_store_Broadcast_settings"
                              ),
                              onClick: function () {
                                return window.open(
                                  j.c.STORE_BASE_URL +
                                    "account/preferences/#store_broadcast_settings"
                                );
                              },
                            }),
                          u.createElement("div", {
                            className: this.state.bExpanded
                              ? T.a.bordered_corner_expanded
                              : T.a.bordered_corner_shrinked,
                            "data-tooltip-text": Object(A.f)(
                              "#StoreBroadcast_Hide_Tooltip"
                            ),
                            onClick: this.ToggleBroadcastExpandShrink,
                          })
                        ),
                        Boolean(a.gamedata_subtitle) &&
                          u.createElement(
                            "div",
                            { className: T.a.bordered_subtitle },
                            a.gamedata_subtitle
                          )
                      ),
                      this.state.bExpanded &&
                        u.createElement(
                          "div",
                          {
                            className: Object(O.a)(
                              (((t = {})[T.a.container] = !0),
                              (t.embeddable_ctn_trgt = !0),
                              (t.broadcast_right_panel_simple =
                                c.bRightPanelArtworkOrEmpty),
                              (t.broadcast_chat_expanded = r),
                              t)
                            ),
                            style: Object(m.a)({}, this.state.innerStyle),
                            onTransitionEnd: this.OnShrinkTransitionEnd,
                          },
                          c.leftPanel,
                          u.createElement(U, {
                            stream: a,
                            bStartMuted: this.state.bStartMuted,
                            fnRenderBroadcastContext: i,
                            bWidePlayer: this.props.bWidePlayer,
                          }),
                          c.rightPanel,
                          this.state.bExpanded &&
                            u.createElement(V, { stream: a })
                        )
                    ),
                    Boolean(
                      s && s.jsondata && s.jsondata.broadcast_item_drops_enabled
                    ) && u.createElement(W, { event: s }),
                    this.state.bExpanded &&
                      u.createElement(
                        "div",
                        { className: "" + (s ? T.a.Event : "") },
                        u.createElement(V, { stream: a })
                      ),
                    u.createElement("div", { className: T.a.clear_div })
                  )
                );
              }
              return u.createElement("div", {
                className: "NoBroadcastAvailable",
              });
            }),
            Object(m.c)(
              [k.a],
              e.prototype,
              "ToggleBroadcastExpandShrink",
              null
            ),
            Object(m.c)([k.a], e.prototype, "OnShrinkTransitionEnd", null),
            Object(m.c)([k.a], e.prototype, "onStreamSelect", null),
            (e = p = Object(m.c)([n.a], e))
          );
        })(u.Component),
        U =
          ((t.default = H),
          (function (a) {
            function e(e) {
              var t = a.call(this, e) || this;
              return (
                (t.m_iVideoContainerRef = u.createRef()),
                (t.state = {
                  bPopout: !1,
                  bPreventPopup: window.screen.width <= 768,
                }),
                t
              );
            }
            return (
              Object(m.d)(e, a),
              (e.prototype.CloseBroadcastPopup = function () {
                var e = I.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                  .m_nAppID;
                Object(w.e)(e, 7, this.props.stream.snr),
                  this.setState({ bPopout: !1, bPreventPopup: !0 });
              }),
              (e.prototype.OnEnter = function () {
                !this.state.bPreventPopup &&
                  this.state.bPopout &&
                  this.setState({ bPopout: !1 });
              }),
              (e.prototype.OnLeave = function () {
                this.state.bPreventPopup ||
                  this.state.bPopout ||
                  this.setState({ bPopout: !0 });
              }),
              (e.prototype.render = function () {
                var e;
                return u.createElement(
                  "div",
                  { className: T.a.wrapper },
                  u.createElement(
                    G.a,
                    { onEnter: this.OnEnter, onLeave: this.OnLeave },
                    u.createElement(
                      "div",
                      {
                        className: Object(O.a)(
                          (((e = {})[T.a.video_placeholder] = !0),
                          (e.video_placeholder_trgt = !0),
                          (e[T.a.WidePlayer] = this.props.bWidePlayer),
                          e)
                        ),
                        ref: this.m_iVideoContainerRef,
                      },
                      u.createElement(
                        "div",
                        {
                          className: this.state.bPopout
                            ? T.a.broadcast_floating
                            : T.a.video_container,
                        },
                        this.state.bPopout &&
                          u.createElement(M, {
                            stream: this.props.stream,
                            OnPreventPopup: this.CloseBroadcastPopup,
                          }),
                        u.createElement(
                          "div",
                          { className: T.a.BroadcastPlayerContainer },
                          u.createElement(o.a, {
                            steamIDBroadcast: this.props.stream.steamid,
                            watchLocation: 6,
                            bStartMuted: this.props.bStartMuted,
                            fnRenderBroadcastContext: this.props
                              .fnRenderBroadcastContext,
                            nAppIDVOD: this.props.stream.nAppIDVOD,
                          })
                        )
                      )
                    )
                  )
                );
              }),
              Object(m.c)([k.a], e.prototype, "CloseBroadcastPopup", null),
              Object(m.c)([k.a], e.prototype, "OnEnter", null),
              Object(m.c)([k.a], e.prototype, "OnLeave", null),
              e
            );
          })(u.Component)),
        V = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(m.d)(t, e),
            (t.prototype.ConstructBroadcastLink = function () {
              var t = this.props.stream,
                a = I.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                  .m_nAppID,
                e = R.list.find(function (e) {
                  return (
                    e.appid == a &&
                    (!e.broadcasterAccountID ||
                      e.broadcasterAccountID == t.accountid)
                  );
                });
              if (e) {
                var r = e.url;
                return (
                  (j.c.IN_CLIENT ||
                    0 <= navigator.userAgent.indexOf("Valve Steam Client") ||
                    0 <=
                      navigator.userAgent.indexOf("Valve Steam GameOverlay") ||
                    0 <= navigator.userAgent.indexOf("Valve Steam Tenfoot")) &&
                    (r = "steam://openurl/" + r),
                  u.createElement(
                    "a",
                    { href: r },
                    Object(A.f)("#Broadcast_Embed_Watch_With_Frieds_SteamTV")
                  )
                );
              }
              var n = this.props.stream.steamid,
                s = j.c.COMMUNITY_BASE_URL + "broadcast/watch/" + n;
              return u.createElement(
                "a",
                {
                  href: s,
                  className: T.a.external_link,
                  "data-tooltip-text": Object(A.f)(
                    "#BroadcastWatch_View_Broadcast_Page"
                  ),
                },
                u.createElement(P.v, null)
              );
            }),
            (t.prototype.OnToggleChat = function (e) {
              e.preventDefault();
              var t = I.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nAppID;
              Object(w.e)(
                t,
                "show" === w.a.Get().GetChatVisibility() ? 5 : 4,
                this.props.stream.snr
              ),
                w.a.Get().ToggleChatVisibility();
            }),
            (t.prototype.onWatchBroadcastPage = function () {
              var e = I.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nAppID;
              Object(w.e)(e, 9, this.props.stream.snr);
            }),
            (t.prototype.render = function () {
              var e = this.ConstructBroadcastLink(),
                t = "remove" != w.a.Get().GetChatVisibility(),
                a = Number.parseInt(
                  "" +
                    I.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                      .m_nViewerCount
                );
              return u.createElement(
                "div",
                { className: Object(O.a)(T.a.viewer_bar, "viewer_bar") },
                u.createElement(
                  "div",
                  { className: Object(O.a)(T.a.viewer_count, "viewer_count") },
                  u.createElement(P.gb, null),
                  a.toLocaleString(A.e.GetPreferredLocales())
                ),
                u.createElement(
                  "div",
                  { className: Object(O.a)(T.a.viewer_links, "viewer_links") },
                  t &&
                    u.createElement(
                      "div",
                      { className: T.a.chat_link },
                      u.createElement(P.j, null),
                      u.createElement(
                        "a",
                        {
                          href: "#",
                          className: T.a.ChatToggle,
                          onClick: this.OnToggleChat,
                        },
                        Object(A.f)(
                          "hide" === w.a.Get().GetChatVisibility()
                            ? "#sale_three_section_show_chat"
                            : "#sale_three_section_hide_chat"
                        )
                      )
                    ),
                  t && u.createElement("span", { className: T.a.ChatToggle }),
                  u.createElement(
                    "a",
                    {
                      href:
                        j.c.STORE_BASE_URL +
                        "account/preferences/#store_broadcast_settings",
                      target: j.c.IN_CLIENT ? void 0 : "_blank",
                      className: T.a.settings_link,
                      "data-tooltip-text": Object(A.f)(
                        "#StoreBroadcast_Change_store_Broadcast_settings"
                      ),
                    },
                    u.createElement(P.U, null)
                  ),
                  e
                )
              );
            }),
            Object(m.c)([k.a], t.prototype, "OnToggleChat", null),
            Object(m.c)([k.a], t.prototype, "onWatchBroadcastPage", null),
            (t = Object(m.c)([n.a], t))
          );
        })(u.Component),
        F = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(m.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props.ImgUrl;
              return u.createElement(
                u.Fragment,
                null,
                e &&
                  u.createElement("img", {
                    className: T.a.side_panels,
                    src: this.props.ImgUrl,
                  }),
                !e && u.createElement("div", { className: T.a.side_panels })
              );
            }),
            t
          );
        })(u.Component),
        M = Object(n.a)(function (e) {
          var t = e.stream,
            a = Object(g.c)(),
            r = I.a.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
            n = _.a.GetAppLinkInfo(r),
            s = n
              ? u.createElement(
                  S.a,
                  {
                    type: "app",
                    id: r,
                    strURL: Object(h.b)(n.capsule_link, a),
                    className: T.a.PopOutVideoTitleText,
                  },
                  Object(A.f)("#StoreBroadcast_Detault_popout_Title")
                )
              : u.createElement(
                  "div",
                  { className: T.a.PopOutVideoTitleText },
                  Object(A.f)("#StoreBroadcast_Detault_popout_Title")
                );
          return u.createElement(
            "div",
            { className: [T.a.PopOutVideoTitleBar, T.a.NoSeslect].join(" ") },
            s,
            u.createElement(
              "button",
              {
                className: T.a.PopOutVideoCloseButton,
                "data-tooltip-text": Object(A.f)(
                  "#StoreBroadcast_close_broadcast_popup"
                ),
                onClick: e.OnPreventPopup,
              },
              u.createElement(P.kb, null)
            )
          );
        }),
        K = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.itemRef = u.createRef()), e;
          }
          return (
            Object(m.d)(e, t),
            (e.prototype.GetFilteredStreamList = function () {
              var t = this,
                e = w.a
                  .Get()
                  .GetStreams(this.props.broadcastEmbedContext)
                  .filter(function (e) {
                    return (
                      !t.props.fnFilterStreams || t.props.fnFilterStreams(e)
                    );
                  });
              return (
                e.sort(function (e, t) {
                  return Object(w.c)(e) != Object(w.c)(t)
                    ? Object(w.c)(t) - Object(w.c)(e)
                    : e.viewer_count != t.viewer_count
                    ? t.viewer_count - e.viewer_count
                    : t.accountid - e.accountid;
                }),
                e
              );
            }),
            (e.prototype.CalculateStreamHeight = function (e) {
              var t = I.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
                a = _.a.GetAppLinkInfo(t);
              return this.props.bShowCapsuleArt &&
                (null == a ? void 0 : a.header_image_url)
                ? parseInt(T.a.strStreamIconCapsuleArtHeight)
                : parseInt(T.a.strStreamIconScreenshotArtHeight);
            }),
            (e.prototype.componentDidMount = function () {
              if (this.itemRef && this.itemRef.current) {
                for (
                  var e = 0, t = 0, a = this.GetFilteredStreamList();
                  t < a.length;
                  t++
                ) {
                  var r = a[t];
                  if (this.props.curStream.accountid == r.accountid) break;
                  e += this.CalculateStreamHeight(r);
                }
                this.itemRef.current.scrollTop = e;
              }
            }),
            (e.prototype.render = function () {
              var t = this,
                e = this.GetFilteredStreamList(),
                a = e.map(function (e) {
                  return u.createElement(q, {
                    key: e.accountid,
                    stream: e,
                    bSelected: t.props.curStream.accountid == e.accountid,
                    onStreamSelect: t.props.onStreamSelect,
                    bShowCapsuleArt: t.props.bShowCapsuleArt,
                  });
                });
              return u.createElement(
                "div",
                {
                  ref: this.itemRef,
                  className: Object(O.a)(
                    T.a.side_panels,
                    "side_panels",
                    T.a.multistream,
                    3 < e.length ? T.a.scrollingstreams : ""
                  ),
                },
                a
              );
            }),
            e
          );
        })(u.Component),
        q = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          var i;
          return (
            Object(m.d)(t, e),
            ((i = t).prototype.onClick = function () {
              this.props.onStreamSelect &&
                this.props.onStreamSelect(this.props.stream);
            }),
            (t.prototype.generateThumbnail = function (e) {
              var t = this.props.stream,
                a = this.props.bSelected
                  ? T.a.stream_icon_selected
                  : T.a.stream_icon;
              if (e) {
                var r = I.a.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
                  n = _.a.GetAppLinkInfo(r),
                  s = [t.thumbnail_http_address];
                return u.createElement(
                  u.Fragment,
                  null,
                  n &&
                    u.createElement("img", {
                      className: Object(O.a)(a, T.a.stream_icon_hide_on_hover),
                      src: n.header_image_url,
                    }),
                  u.createElement(N.b, {
                    className: Object(O.a)(a, T.a.stream_icon_show_on_hover),
                    srcs: s,
                  })
                );
              }
              return u.createElement("img", {
                className: a,
                src: t.thumbnail_http_address,
              });
            }),
            (t.GetClassForStreamPriority = function (e) {
              switch (e) {
                case w.b.k_eFeatured:
                  return T.a.stream_featured;
              }
              return null;
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.stream,
                a = e.bShowCapsuleArt;
              if (!Object(w.d)(t)) return null;
              var r = I.a.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
                n = _.a.GetAppLinkInfo(r),
                s = Boolean(a && (null == n ? void 0 : n.header_image_url)),
                o = Number.parseInt("" + t.viewer_count);
              return u.createElement(
                "div",
                {
                  className: Object(O.a)(
                    T.a.stream_icon_and_viewer_container,
                    i.GetClassForStreamPriority(t.current_selection_priority),
                    s && T.a.display_capsule_art
                  ),
                },
                u.createElement(
                  S.b,
                  { type: "app", id: r },
                  u.createElement(
                    B.a,
                    {
                      className: T.a.stream_icon_container,
                      onClick: this.onClick,
                      rootMargin: "100px 0px 100px 0px",
                    },
                    this.generateThumbnail(s),
                    this.props.bSelected &&
                      u.createElement("div", {
                        className: T.a.stream_icon_arrow,
                      })
                  )
                ),
                u.createElement(
                  "div",
                  { className: T.a.viewer_count },
                  u.createElement(P.gb, null),
                  o.toLocaleString(A.e.GetPreferredLocales())
                )
              );
            }),
            Object(m.c)([k.a], t.prototype, "onClick", null),
            (t = i = Object(m.c)([n.a], t))
          );
        })(u.Component),
        J = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(m.d)(t, e),
            (t.prototype.render = function () {
              var e = "below" == this.props.orientation,
                t = I.a.GetBroadcast(this.props.stream.steamid);
              return t
                ? u.createElement(
                    "div",
                    {
                      className: Object(O.a)(
                        e
                          ? T.a.chat_below_container
                          : T.a.chat_rightside_container,
                        T.a.store_chat_ctn
                      ),
                    },
                    u.createElement(
                      "div",
                      { className: T.a.ChatContainer },
                      u.createElement(s.a, {
                        emoticonStore: w.f,
                        watchLocation: 6,
                        steamID: this.props.stream.steamid,
                        broadcastID: t.m_ulBroadcastID,
                      })
                    )
                  )
                : null;
            }),
            (t = Object(m.c)([n.a], t))
          );
        })(u.Component);
    },
    dLk7: function (e, t, a) {
      e.exports = {
        StoreSaleWidgetContainer_mini:
          "broadcastwidgets_StoreSaleWidgetContainer_mini_nacWp",
        Action: "broadcastwidgets_Action_2Xpw9",
        WishList: "broadcastwidgets_WishList_3mTSE",
        StoreSaleWidgetImage_mini:
          "broadcastwidgets_StoreSaleWidgetImage_mini_yvW2h",
        StoreSaleImage_mini: "broadcastwidgets_StoreSaleImage_mini_1zSsm",
        StoreSaleWidgetShortDesc_mini:
          "broadcastwidgets_StoreSaleWidgetShortDesc_mini_2ZkfU",
      };
    },
  },
]);

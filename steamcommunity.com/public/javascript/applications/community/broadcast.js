/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    NIbt: function (e, t, a) {
      "use strict";
      a.r(t);
      var r = a("mrSG"),
        n = a("vDqi"),
        o = a.n(n),
        s = a("TyAF"),
        i = a("q1tI"),
        c = a.n(i),
        d = a("eN6m"),
        l = a("trWU"),
        _ = a("5eAM"),
        p = a("VQ2A"),
        m = a("b3LC"),
        b = a("5L1o"),
        u = a("NKJh"),
        h = a("RQmk"),
        v = a("dfs5"),
        f = a("0OaU"),
        S = a("exH9"),
        g = a("lkRc"),
        E = a("dLk7"),
        O = a.n(E),
        C = Object(s.a)(function (e) {
          var t = e.appid,
            a = Object(m.d)(t, 0, !0),
            n = (a[0], a[1]),
            o = Object(v.c)();
          Object(i.useEffect)(
            function () {
              if (!_.a.BHasAppLinkLoaded(t)) {
                Object(r.b)(void 0, void 0, void 0, function () {
                  return Object(r.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [4, _.a.LoadAppLinkInfo([t])];
                      case 1:
                        return [2, e.sent()];
                    }
                  });
                });
              }
            },
            [t]
          );
          var s = O.a.StoreSaleWidgetContainer_mini,
            d = O.a.StoreSaleWidgetImage_mini,
            l = O.a.StoreSaleImage_mini,
            E = (O.a.StoreSaleWidgetShortDesc_mini, _.a.GetAppLinkInfo(t));
          if (!n || !E)
            return c.a.createElement(
              "div",
              { className: s },
              c.a.createElement(f.a, { size: "medium" }),
              ";"
            );
          var C = "series" != E.type,
            y = Object(p.b)(E.capsule_link, o);
          return E && E.title
            ? c.a.createElement(
                "div",
                { className: s },
                c.a.createElement(
                  "div",
                  { className: u.Actions },
                  c.a.createElement(
                    "a",
                    { href: y, target: g.c.IN_CLIENT ? void 0 : "_blank" },
                    c.a.createElement(
                      h.b,
                      { type: "app", id: E.appid },
                      c.a.createElement(
                        "div",
                        { className: d },
                        c.a.createElement("img", {
                          className: l,
                          src: E.capsule,
                        })
                      )
                    )
                  )
                ),
                c.a.createElement(
                  "div",
                  { className: u.StoreSaleBroadcastWidgetRight },
                  c.a.createElement(
                    "div",
                    { className: u.Actions },
                    c.a.createElement(
                      "a",
                      { href: y, target: g.c.IN_CLIENT ? void 0 : "_blank" },
                      c.a.createElement(
                        h.b,
                        { type: "app", id: E.appid },
                        c.a.createElement(
                          "div",
                          {
                            className: Object(S.a)(
                              u.StoreSaleWidgetTitle,
                              "StoreSaleWidgetTitle"
                            ),
                          },
                          E.title
                        )
                      )
                    )
                  ),
                  c.a.createElement(
                    "div",
                    { className: u.StoreSaleWidgetRelease },
                    E.release
                  ),
                  C &&
                    c.a.createElement(b.o, {
                      info: E,
                      bShowDemoButton: !0,
                      bStackedButtons: !0,
                    })
                )
              )
            : c.a.createElement("div", {
                className: u.StoreSaleWidgetEmptyContainer,
              });
        }),
        y = a("kyHq"),
        j = a("1BdX"),
        I = a("boaH"),
        P = a("nWbB"),
        N = a("02Wr"),
        w = a("MnIK"),
        B = a("6Y59"),
        k = a("d+Me"),
        A = a("TLQK"),
        G = a("opsS"),
        D = a("kLLr"),
        x = a("uIWk"),
        L = a("rKv1"),
        T = a.n(L),
        V = Object(s.a)(function (e) {
          var t = e.event,
            a = t.clanSteamID.GetAccountID(),
            n = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
            s = Object(i.useRef)(null),
            d = Object(i.useState)(
              t ? x.a.GetCreatorHome(t.clanSteamID) : null
            ),
            l = d[0],
            _ = d[1];
          if (
            (Object(i.useEffect)(
              function () {
                var e = o.a.CancelToken.source();
                s.current = e.cancel;
                return (
                  Object(r.b)(void 0, void 0, void 0, function () {
                    var t, n;
                    return Object(r.e)(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return (
                            (t = D.a.InitFromClanID(a)),
                            [4, x.a.LoadCreatorHome(t, e)]
                          );
                        case 1:
                          return (n = r.sent()), e.token.reason || _(n), [2];
                      }
                    });
                  }),
                  function () {
                    s.current && s.current("BroadcastDropsDisplay: unmounting");
                  }
                );
              },
              [a]
            ),
            n || !l || !l.BIsLoaded())
          )
            return null;
          var p =
            g.c.COMMUNITY_BASE_URL +
            "gid/" +
            t.jsondata.broadcast_item_drops_details_clan_accountid +
            "/partnerevents/view/" +
            t.jsondata.broadcast_item_drops_details_event_gid;
          return c.a.createElement(
            "div",
            { className: T.a.item_drop_ctn },
            c.a.createElement(
              "div",
              null,
              Object(A.f)(
                l.GetName().length > 0
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
                l.GetName()
              ),
              Boolean(t.jsondata.broadcast_item_drops_details_clan_accountid) &&
                c.a.createElement(
                  "a",
                  { href: p, target: g.c.IN_CLIENT ? "" : "_blank" },
                  Object(A.f)("#SalePage_WatchForDrop_LearnMore")
                )
            )
          );
        }),
        W = {
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
        R = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.m_cancelSignal = o.a.CancelToken.source()),
              (t.state = {
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
              t
            );
          }
          var a;
          return (
            Object(r.d)(t, e),
            (a = t),
            (t.IsBroadcastAllowed = function () {
              return g.c.EREALM != y.f.k_ESteamRealmChina;
            }),
            (t.prototype.componentDidMount = function () {
              return Object(r.b)(this, void 0, void 0, function () {
                var e = this;
                return Object(r.e)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return a.IsBroadcastAllowed()
                        ? [
                            4,
                            P.a
                              .Get()
                              .LoadBIsEmbeddedBroadcastHidden(
                                this.m_cancelSignal
                              ),
                          ]
                        : [2];
                    case 1:
                      return (
                        t.sent(),
                        this.m_cancelSignal.token.reason ||
                          this.setState({
                            bLoadingPreference: !1,
                            bExpanded: !P.a
                              .Get()
                              .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                            innerStyle: Object(r.a)(
                              Object(r.a)({}, this.state.innerStyle),
                              {
                                maxHeight: P.a
                                  .Get()
                                  .BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
                                  ? "0vh"
                                  : "100vh",
                              }
                            ),
                          }),
                        [
                          4,
                          this.props.bIsPreview && this.props.accountIDs
                            ? P.a
                                .Get()
                                .HintLoadEmbeddablePreviewStreams(this.props)
                            : P.a.Get().HintLoadEmbeddableStreams(this.props),
                        ]
                      );
                    case 2:
                      return (
                        t.sent(),
                        this.props.nAppIDVOD &&
                          (P.a
                            .Get()
                            .SetupEmbeddableVOD(
                              this.props,
                              !this.props.bSkipPreRoll
                            ),
                          this.props.bSkipPreRoll && this.PlayTopNonVOD()),
                        window.setTimeout(function () {
                          e.m_cancelSignal.token.reason ||
                            e.setState({
                              style: Object(r.a)(
                                Object(r.a)({}, e.state.style),
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
            (t.prototype.componentWillUnmount = function () {
              this.m_cancelSignal.cancel(
                "BroadcastEmbeddable component unmounted"
              );
            }),
            (t.prototype.ToggleBroadcastExpandShrink = function () {
              var e = this,
                t = P.a.Get().GetPlayReadyStream(this.props),
                a = I.a.GetOrCreateBroadcastInfo(t.steamid).m_nAppID;
              Object(P.e)(a, this.state.bExpanded ? 2 : 3, t.snr);
              var n = this.state.bExpanded;
              window.setTimeout(function () {
                return e.setState({
                  innerStyle: Object(r.a)(Object(r.a)({}, e.state.innerStyle), {
                    maxHeight: n ? "0vh" : "100vh",
                  }),
                });
              }, 10),
                n ||
                  this.setState(
                    { bExpanded: !this.state.bExpanded },
                    function () {
                      return P.a
                        .Get()
                        .SetEmbeddedStreamCollapsed(!e.state.bExpanded);
                    }
                  );
            }),
            (t.prototype.OnShrinkTransitionEnd = function () {
              "0vh" === this.state.innerStyle.maxHeight &&
                this.setState({ bExpanded: !1 }, function () {
                  return P.a.Get().SetEmbeddedStreamCollapsed(!0);
                });
            }),
            (t.prototype.onStreamSelect = function (e) {
              return Object(r.b)(this, void 0, void 0, function () {
                return Object(r.e)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        this.setState({ bStartMuted: !1 }),
                        P.a.Get().GetPlayReadyStream(this.props).accountid ==
                        e.accountid
                          ? [3, 2]
                          : [4, P.a.Get().AttemptToPlayStream(this.props, e)]
                      );
                    case 1:
                      t.sent(), (t.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.PlayTopNonVOD = function () {
              return Object(r.b)(this, void 0, void 0, function () {
                var e,
                  t,
                  a,
                  n,
                  o = this;
                return Object(r.e)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      this.setState({ bStartMuted: !1 }),
                        (e = P.a
                          .Get()
                          .GetStreams(this.props)
                          .filter(function (e) {
                            return (
                              !o.props.fnFilterStreams ||
                              o.props.fnFilterStreams(e)
                            );
                          })),
                        Object(P.f)(e),
                        (t = 0),
                        (a = e),
                        (r.label = 1);
                    case 1:
                      return t < a.length
                        ? (n = a[t]).nAppIDVOD
                          ? [3, 3]
                          : [4, P.a.Get().AttemptToPlayStream(this.props, n)]
                        : [3, 4];
                    case 2:
                      return r.sent(), [2];
                    case 3:
                      return t++, [3, 1];
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.ConstructSidePanels = function (e, t) {
              var a = {
                leftPanel: null,
                rightPanel: null,
                bRightPanelArtworkOrEmpty: !0,
              };
              if (this.props.bWidePlayer) return a;
              var r = P.a.Get().GetConcurrentStreams(this.props) > 1,
                n = I.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
                o = i.createElement(
                  "div",
                  { className: T.a.rightPanel },
                  i.createElement(M, {
                    key: "right" + n,
                    ImgUrl: e.right_panel,
                  })
                ),
                s = i.createElement(M, {
                  key: "left" + n,
                  ImgUrl: e.left_panel,
                });
              if (n < 11) {
                var c = j.b.GetAppIDListForBroadcasterSteamID(e.steamid);
                c && 1 === c.length && (n = c[0]);
              }
              return (
                !(
                  (this.props.promotionName ||
                    this.props.bIsPreview ||
                    this.props.subid ||
                    this.props.bundleid) &&
                  n >= 11
                ) ||
                  (this.props.event &&
                    this.props.event.jsondata.broadcast_force_banner) ||
                  ((o = i.createElement(C, {
                    key: "mini" + e.accountid,
                    appid: n,
                  })),
                  (a.bRightPanelArtworkOrEmpty = !1)),
                r && !t
                  ? ((a.leftPanel = i.createElement(z, {
                      broadcastEmbedContext: this.props,
                      key: "selector" + n,
                      curStream: e,
                      onStreamSelect: this.onStreamSelect,
                      fnFilterStreams: this.props.fnFilterStreams,
                      bShowCapsuleArt: this.props.bShowCapsuleArt,
                    })),
                    (a.rightPanel = o))
                  : t
                  ? ((a.leftPanel = i.createElement("div", null)),
                    (a.rightPanel = i.createElement(q, {
                      stream: e,
                      orientation: "rightside",
                    })),
                    (a.bRightPanelArtworkOrEmpty = !1))
                  : ((a.leftPanel = s), (a.rightPanel = o)),
                a
              );
            }),
            (t.prototype.render = function () {
              var e,
                t,
                n = this;
              if (!a.IsBroadcastAllowed() || this.state.bLoadingPreference)
                return null;
              var o = P.a.Get().GetPlayReadyStream(this.props);
              if (o) {
                var s = "show" === P.a.Get().GetChatVisibility(),
                  c = this.props,
                  d = c.event,
                  l = c.language,
                  _ = c.fnRenderBroadcastContext;
                d &&
                  (o = Object(r.a)(Object(r.a)({}, o), {
                    left_panel: d.GetImageURL(
                      "broadcast_left",
                      l || Object(y.h)(g.c.LANGUAGE)
                    ),
                    right_panel: d.GetImageURL(
                      "broadcast_right",
                      l || Object(y.h)(g.c.LANGUAGE)
                    ),
                    store_title: d.GetBroadcastTitle(
                      l || Object(y.h)(g.c.LANGUAGE)
                    ),
                    broadcast_chat_visibility: d.GetBroadcastChatVisibility(),
                  }));
                var p = this.ConstructSidePanels(o, s),
                  m = o.store_title ? o.store_title : o.title,
                  u = P.a.Get().GetConcurrentStreams(this.props) > 1;
                d && d.jsondata && d.jsondata.broadcast_gradient_inner_color,
                  d && d.jsondata && d.jsondata.broadcast_gradient_outer_color;
                return i.createElement(
                  i.Fragment,
                  null,
                  i.createElement(
                    "div",
                    {
                      className: "broadcast_embed_top_ctn_trgt",
                      style: this.state.style,
                    },
                    i.createElement(
                      "div",
                      {
                        className: Object(S.a)(
                          ((e = {}),
                          (e[T.a.bordered_container] = !0),
                          (e[T.a.Event] = Boolean(d)),
                          (e.broadcast_brd_ctn_trgt = !0),
                          e)
                        ),
                      },
                      i.createElement(
                        "div",
                        {
                          className: Object(S.a)(
                            T.a.bordered_title,
                            "bordered_title_trgt"
                          ),
                        },
                        i.createElement(b.i, null),
                        m,
                        i.createElement(
                          "div",
                          { className: T.a.bordered_corner_container },
                          !this.state.bExpanded &&
                            i.createElement("div", {
                              className: T.a.broadcast_settings_icon,
                              "data-tooltip-text": Object(A.f)(
                                "#StoreBroadcast_Change_store_Broadcast_settings"
                              ),
                              onClick: function () {
                                return window.open(
                                  g.c.STORE_BASE_URL +
                                    "account/preferences/#store_broadcast_settings"
                                );
                              },
                            }),
                          i.createElement("div", {
                            className: this.state.bExpanded
                              ? T.a.bordered_corner_expanded
                              : T.a.bordered_corner_shrinked,
                            "data-tooltip-text": Object(A.f)(
                              "#StoreBroadcast_Hide_Tooltip"
                            ),
                            onClick: this.ToggleBroadcastExpandShrink,
                          })
                        ),
                        Boolean(o.gamedata_subtitle) &&
                          i.createElement(
                            "div",
                            { className: T.a.bordered_subtitle },
                            o.gamedata_subtitle
                          )
                      ),
                      this.state.bExpanded &&
                        i.createElement(
                          "div",
                          {
                            className: Object(S.a)(
                              ((t = {}),
                              (t[T.a.container] = !0),
                              (t.embeddable_ctn_trgt = !0),
                              (t.multistream = u),
                              (t.broadcast_right_panel_simple =
                                p.bRightPanelArtworkOrEmpty),
                              (t.broadcast_chat_expanded = s),
                              t)
                            ),
                            style: Object(r.a)({}, this.state.innerStyle),
                            onTransitionEnd: this.OnShrinkTransitionEnd,
                          },
                          p.leftPanel,
                          i.createElement(F, {
                            stream: o,
                            bStartMuted: this.state.bStartMuted,
                            fnRenderBroadcastContext: _,
                            fnOnVideoEnd: function () {
                              var e, t;
                              o.nAppIDVOD && n.PlayTopNonVOD(),
                                null === (t = (e = n.props).fnOnVideoEnd) ||
                                  void 0 === t ||
                                  t.call(e);
                            },
                            bWidePlayer: this.props.bWidePlayer,
                          }),
                          p.rightPanel,
                          this.state.bExpanded &&
                            i.createElement(H, { stream: o, bMultistream: u })
                        )
                    ),
                    Boolean(
                      d && d.jsondata && d.jsondata.broadcast_item_drops_enabled
                    ) && i.createElement(V, { event: d }),
                    this.state.bExpanded &&
                      i.createElement(
                        "div",
                        { className: "" + (d ? T.a.Event : "") },
                        i.createElement(H, { stream: o, bMultistream: u })
                      ),
                    i.createElement("div", { className: T.a.clear_div })
                  )
                );
              }
              return i.createElement("div", {
                className: "NoBroadcastAvailable",
              });
            }),
            Object(r.c)(
              [G.a],
              t.prototype,
              "ToggleBroadcastExpandShrink",
              null
            ),
            Object(r.c)([G.a], t.prototype, "OnShrinkTransitionEnd", null),
            Object(r.c)([G.a], t.prototype, "onStreamSelect", null),
            Object(r.c)([G.a], t.prototype, "PlayTopNonVOD", null),
            (t = a = Object(r.c)([s.a], t))
          );
        })(i.Component),
        F =
          ((t.default = R),
          (function (e) {
            function t(t) {
              var a = e.call(this, t) || this;
              return (
                (a.m_iVideoContainerRef = i.createRef()),
                (a.state = {
                  bPopout: !1,
                  bPreventPopup: window.screen.width <= 768,
                }),
                a
              );
            }
            return (
              Object(r.d)(t, e),
              (t.prototype.CloseBroadcastPopup = function () {
                var e = I.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                  .m_nAppID;
                Object(P.e)(e, 7, this.props.stream.snr),
                  this.setState({ bPopout: !1, bPreventPopup: !0 });
              }),
              (t.prototype.OnEnter = function () {
                !this.state.bPreventPopup &&
                  this.state.bPopout &&
                  this.setState({ bPopout: !1 });
              }),
              (t.prototype.OnLeave = function () {
                this.state.bPreventPopup ||
                  this.state.bPopout ||
                  this.setState({ bPopout: !0 });
              }),
              (t.prototype.render = function () {
                var e;
                return i.createElement(
                  "div",
                  { className: T.a.wrapper },
                  i.createElement(
                    k.a,
                    { onEnter: this.OnEnter, onLeave: this.OnLeave },
                    i.createElement(
                      "div",
                      {
                        className: Object(S.a)(
                          ((e = {}),
                          (e[T.a.video_placeholder] = !0),
                          (e.video_placeholder_trgt = !0),
                          (e[T.a.WidePlayer] = this.props.bWidePlayer),
                          e)
                        ),
                        ref: this.m_iVideoContainerRef,
                      },
                      i.createElement(
                        "div",
                        {
                          className: this.state.bPopout
                            ? T.a.broadcast_floating
                            : T.a.video_container,
                        },
                        this.state.bPopout &&
                          i.createElement(U, {
                            stream: this.props.stream,
                            OnPreventPopup: this.CloseBroadcastPopup,
                          }),
                        i.createElement(
                          "div",
                          { className: T.a.BroadcastPlayerContainer },
                          i.createElement(l.a, {
                            steamIDBroadcast: this.props.stream.steamid,
                            watchLocation: 6,
                            bStartMuted: this.props.bStartMuted,
                            fnRenderBroadcastContext: this.props
                              .fnRenderBroadcastContext,
                            fnOnVideoEnd: this.props.fnOnVideoEnd,
                            nAppIDVOD: this.props.stream.nAppIDVOD,
                          })
                        )
                      )
                    )
                  )
                );
              }),
              Object(r.c)([G.a], t.prototype, "CloseBroadcastPopup", null),
              Object(r.c)([G.a], t.prototype, "OnEnter", null),
              Object(r.c)([G.a], t.prototype, "OnLeave", null),
              t
            );
          })(i.Component)),
        H = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.ConstructBroadcastLink = function () {
              var e = this.props.stream,
                t = I.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                  .m_nAppID,
                a = W.list.find(function (a) {
                  return (
                    a.appid == t &&
                    (!a.broadcasterAccountID ||
                      a.broadcasterAccountID == e.accountid)
                  );
                });
              if (a) {
                var r = a.url;
                return (
                  (g.c.IN_CLIENT ||
                    navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
                    navigator.userAgent.indexOf("Valve Steam GameOverlay") >=
                      0 ||
                    navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
                    (r = "steam://openurl/" + r),
                  i.createElement(
                    "a",
                    { href: r },
                    Object(A.f)("#Broadcast_Embed_Watch_With_Frieds_SteamTV")
                  )
                );
              }
              var n = this.props.stream.steamid,
                o = g.c.COMMUNITY_BASE_URL + "broadcast/watch/" + n;
              return i.createElement(
                "a",
                {
                  href: o,
                  className: T.a.external_link,
                  "data-tooltip-text": Object(A.f)(
                    "#BroadcastWatch_View_Broadcast_Page"
                  ),
                },
                i.createElement(B.v, null)
              );
            }),
            (t.prototype.OnToggleChat = function (e) {
              e.preventDefault();
              var t = I.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nAppID;
              Object(P.e)(
                t,
                "show" === P.a.Get().GetChatVisibility() ? 5 : 4,
                this.props.stream.snr
              ),
                P.a.Get().ToggleChatVisibility();
            }),
            (t.prototype.onWatchBroadcastPage = function () {
              var e = I.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nAppID;
              Object(P.e)(e, 9, this.props.stream.snr);
            }),
            (t.prototype.render = function () {
              var e = this.ConstructBroadcastLink(),
                t = "remove" != P.a.Get().GetChatVisibility(),
                a = "hide" === P.a.Get().GetChatVisibility(),
                r = Number.parseInt(
                  "" +
                    I.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                      .m_nViewerCount
                );
              return i.createElement(
                "div",
                { className: Object(S.a)(T.a.viewer_bar, "viewer_bar") },
                i.createElement(
                  "div",
                  { className: Object(S.a)(T.a.viewer_count, "viewer_count") },
                  i.createElement(B.jb, null),
                  r.toLocaleString(A.e.GetPreferredLocales())
                ),
                i.createElement(
                  "div",
                  { className: Object(S.a)(T.a.viewer_links, "viewer_links") },
                  Boolean(t && !a && this.props.bMultistream) &&
                    i.createElement(
                      "div",
                      { className: T.a.chat_link },
                      i.createElement(
                        "a",
                        {
                          href: "#",
                          className: T.a.ChatToggle,
                          onClick: this.OnToggleChat,
                        },
                        Object(A.f)("#sale_three_section_show_streams")
                      )
                    ),
                  t &&
                    i.createElement(
                      "div",
                      { className: T.a.chat_link },
                      i.createElement(B.j, null),
                      i.createElement(
                        "a",
                        {
                          href: "#",
                          className: T.a.ChatToggle,
                          onClick: this.OnToggleChat,
                        },
                        Object(A.f)(
                          a
                            ? "#sale_three_section_show_chat"
                            : "#sale_three_section_hide_chat"
                        )
                      )
                    ),
                  t && i.createElement("span", { className: T.a.ChatToggle }),
                  i.createElement(
                    "a",
                    {
                      href:
                        g.c.STORE_BASE_URL +
                        "account/preferences/#store_broadcast_settings",
                      target: g.c.IN_CLIENT ? void 0 : "_blank",
                      className: T.a.settings_link,
                      "data-tooltip-text": Object(A.f)(
                        "#StoreBroadcast_Change_store_Broadcast_settings"
                      ),
                    },
                    i.createElement(B.V, null)
                  ),
                  e
                )
              );
            }),
            Object(r.c)([G.a], t.prototype, "OnToggleChat", null),
            Object(r.c)([G.a], t.prototype, "onWatchBroadcastPage", null),
            (t = Object(r.c)([s.a], t))
          );
        })(i.Component),
        M = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props.ImgUrl;
              return i.createElement(
                i.Fragment,
                null,
                e &&
                  i.createElement("img", {
                    className: T.a.side_panels,
                    src: this.props.ImgUrl,
                  }),
                !e && i.createElement("div", { className: T.a.side_panels })
              );
            }),
            t
          );
        })(i.Component),
        U = Object(s.a)(function (e) {
          var t = e.stream,
            a = Object(v.c)(),
            r = I.a.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
            n = _.a.GetAppLinkInfo(r),
            o = n
              ? i.createElement(
                  h.a,
                  {
                    type: "app",
                    id: r,
                    strURL: Object(p.b)(n.capsule_link, a),
                    className: T.a.PopOutVideoTitleText,
                  },
                  Object(A.f)("#StoreBroadcast_Detault_popout_Title")
                )
              : i.createElement(
                  "div",
                  { className: T.a.PopOutVideoTitleText },
                  Object(A.f)("#StoreBroadcast_Detault_popout_Title")
                );
          return i.createElement(
            "div",
            { className: [T.a.PopOutVideoTitleBar, T.a.NoSeslect].join(" ") },
            o,
            i.createElement(
              "button",
              {
                className: T.a.PopOutVideoCloseButton,
                "data-tooltip-text": Object(A.f)(
                  "#StoreBroadcast_close_broadcast_popup"
                ),
                onClick: e.OnPreventPopup,
              },
              i.createElement(B.nb, null)
            )
          );
        }),
        z = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.itemRef = i.createRef()), t;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.GetFilteredStreamList = function () {
              var e = this,
                t = P.a
                  .Get()
                  .GetStreams(this.props.broadcastEmbedContext)
                  .filter(function (t) {
                    return (
                      !e.props.fnFilterStreams || e.props.fnFilterStreams(t)
                    );
                  });
              return Object(P.f)(t), t;
            }),
            (t.prototype.CalculateStreamHeight = function (e) {
              var t = I.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
                a = _.a.GetAppLinkInfo(t);
              return this.props.bShowCapsuleArt &&
                (null == a ? void 0 : a.header_image_url)
                ? parseInt(T.a.strStreamIconCapsuleArtHeight)
                : parseInt(T.a.strStreamIconScreenshotArtHeight);
            }),
            (t.prototype.componentDidMount = function () {
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
            (t.prototype.render = function () {
              var e = this,
                t = this.GetFilteredStreamList(),
                a = t.map(function (t) {
                  var a;
                  return i.createElement(Y, {
                    key:
                      null !== (a = t.accountid) && void 0 !== a
                        ? a
                        : t.steamid,
                    stream: t,
                    bSelected: e.props.curStream.accountid == t.accountid,
                    onStreamSelect: e.props.onStreamSelect,
                    bShowCapsuleArt: e.props.bShowCapsuleArt,
                  });
                });
              return i.createElement(
                "div",
                {
                  ref: this.itemRef,
                  className: Object(S.a)(
                    T.a.side_panels,
                    "side_panels",
                    T.a.multistream,
                    t.length > 3 ? T.a.scrollingstreams : ""
                  ),
                },
                a
              );
            }),
            t
          );
        })(i.Component),
        Y = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          var a;
          return (
            Object(r.d)(t, e),
            (a = t),
            (t.prototype.onClick = function () {
              this.props.onStreamSelect &&
                this.props.onStreamSelect(this.props.stream);
            }),
            (t.prototype.generateThumbnail = function (e) {
              var t,
                a = this.props.stream,
                r = this.props.bSelected
                  ? T.a.stream_icon_selected
                  : T.a.stream_icon;
              if (e) {
                var n = I.a.GetOrCreateBroadcastInfo(a.steamid).m_nAppID,
                  o = _.a.GetAppLinkInfo(
                    null !== (t = a.nAppIDVOD) && void 0 !== t ? t : n
                  ),
                  s = [a.thumbnail_http_address];
                return i.createElement(
                  i.Fragment,
                  null,
                  o &&
                    i.createElement("img", {
                      className: Object(S.a)(r, T.a.stream_icon_hide_on_hover),
                      src: o.header_image_url,
                    }),
                  i.createElement(N.b, {
                    className: Object(S.a)(r, T.a.stream_icon_show_on_hover),
                    srcs: s,
                  })
                );
              }
              return i.createElement("img", {
                className: r,
                src: a.thumbnail_http_address,
              });
            }),
            (t.GetClassForStreamPriority = function (e) {
              switch (e) {
                case P.b.k_eFeatured:
                  return T.a.stream_featured;
              }
              return null;
            }),
            (t.prototype.render = function () {
              var e,
                t = this.props,
                r = t.stream,
                n = t.bShowCapsuleArt;
              if (!Object(P.d)(r)) return null;
              var o = I.a.GetOrCreateBroadcastInfo(r.steamid).m_nAppID,
                s = _.a.GetAppLinkInfo(
                  null !== (e = r.nAppIDVOD) && void 0 !== e ? e : o
                ),
                c = Boolean(n && (null == s ? void 0 : s.header_image_url)),
                d = Number.parseInt("" + r.viewer_count),
                l = !Number.isNaN(d),
                p = !!r.nAppIDVOD && (null == s ? void 0 : s.title);
              return i.createElement(
                "div",
                {
                  className: Object(S.a)(
                    T.a.stream_icon_and_viewer_container,
                    a.GetClassForStreamPriority(r.current_selection_priority),
                    c && T.a.display_capsule_art
                  ),
                },
                i.createElement(
                  h.b,
                  { type: "app", id: o },
                  i.createElement(
                    w.a,
                    {
                      className: T.a.stream_icon_container,
                      onClick: this.onClick,
                      rootMargin: "100px 0px 100px 0px",
                    },
                    this.generateThumbnail(c),
                    this.props.bSelected &&
                      i.createElement("div", {
                        className: T.a.stream_icon_arrow,
                      })
                  )
                ),
                i.createElement(
                  "div",
                  {
                    className: Object(S.a)(
                      T.a.viewer_count,
                      !l && T.a.vod_title
                    ),
                  },
                  l
                    ? i.createElement(
                        i.Fragment,
                        null,
                        i.createElement(B.jb, null),
                        " ",
                        d.toLocaleString(A.e.GetPreferredLocales())
                      )
                    : p
                )
              );
            }),
            Object(r.c)([G.a], t.prototype, "onClick", null),
            (t = a = Object(r.c)([s.a], t))
          );
        })(i.Component),
        q = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.render = function () {
              var e = "below" == this.props.orientation,
                t = I.a.GetBroadcast(this.props.stream.steamid);
              return t
                ? i.createElement(
                    "div",
                    {
                      className: Object(S.a)(
                        e
                          ? T.a.chat_below_container
                          : T.a.chat_rightside_container,
                        T.a.store_chat_ctn
                      ),
                    },
                    i.createElement(
                      "div",
                      { className: T.a.ChatContainer },
                      i.createElement(d.a, {
                        emoticonStore: P.g,
                        watchLocation: 6,
                        steamID: this.props.stream.steamid,
                        broadcastID: t.m_ulBroadcastID,
                      })
                    )
                  )
                : null;
            }),
            (t = Object(r.c)([s.a], t))
          );
        })(i.Component);
    },
    "d+Me": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return s;
      });
      var r = a("mrSG"),
        n = a("q1tI"),
        o = a("uuth"),
        s = function (e) {
          var t = e.onPositionChange,
            a = e.onLeave,
            s = n.useCallback(
              function (e) {
                return (
                  void 0 === e.previousPosition &&
                    e.currentPosition === o.a.above &&
                    a &&
                    a(e),
                  t && t(e)
                );
              },
              [t, a]
            );
          return n.createElement(
            o.a,
            Object(r.a)({}, e, { onPositionChange: s })
          );
        };
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
    rKv1: function (e, t, a) {
      e.exports = {
        strStreamIconCapsuleArtHeight: "90px",
        strStreamIconScreenshotArtHeight: "90px",
        bordered_container: "broadcast_embeddable_bordered_container_3zXpF",
        video_placeholder: "broadcast_embeddable_video_placeholder_1KU95",
        embedded_player: "broadcast_embeddable_embedded_player_12fBJ",
        WidePlayer: "broadcast_embeddable_WidePlayer_3zjvr",
        store_chat_ctn: "broadcast_embeddable_store_chat_ctn_21N-V",
        item_drop_ctn: "broadcast_embeddable_item_drop_ctn_ifxDf",
        BorderedContainerPromotion:
          "broadcast_embeddable_BorderedContainerPromotion_-b_1H",
        bordered_title: "broadcast_embeddable_bordered_title_Wsfbq",
        bordered_subtitle: "broadcast_embeddable_bordered_subtitle_3tYei",
        bordered_corner_container:
          "broadcast_embeddable_bordered_corner_container_3IBcN",
        bordered_corner_expanded:
          "broadcast_embeddable_bordered_corner_expanded_ahz31",
        bordered_corner_shrinked:
          "broadcast_embeddable_bordered_corner_shrinked_L8sFY",
        broadcast_settings_icon:
          "broadcast_embeddable_broadcast_settings_icon_37ugZ",
        container: "broadcast_embeddable_container_2yiy6",
        viewer_bar: "broadcast_embeddable_viewer_bar_2Ygph",
        side_panels: "broadcast_embeddable_side_panels_T_zpR",
        multistream: "broadcast_embeddable_multistream_1DS-W",
        wrapper: "broadcast_embeddable_wrapper_1mH-v",
        NoChat: "broadcast_embeddable_NoChat_2QQm1",
        video_container: "broadcast_embeddable_video_container_1gbNx",
        viewer_links: "broadcast_embeddable_viewer_links_2EQpO",
        chat_link: "broadcast_embeddable_chat_link_3a0zX",
        settings_link: "broadcast_embeddable_settings_link_1Thke",
        external_link: "broadcast_embeddable_external_link_1n1BM",
        viewer_count: "broadcast_embeddable_viewer_count_1MrTW",
        vod_title: "broadcast_embeddable_vod_title_2xKaM",
        stream_icon_and_viewer_container:
          "broadcast_embeddable_stream_icon_and_viewer_container_2sbrG",
        display_capsule_art: "broadcast_embeddable_display_capsule_art_SsORV",
        stream_icon_container:
          "broadcast_embeddable_stream_icon_container_2zBOi",
        stream_icon_hide_on_hover:
          "broadcast_embeddable_stream_icon_hide_on_hover_qYFsG",
        stream_icon_show_on_hover:
          "broadcast_embeddable_stream_icon_show_on_hover_29z3N",
        stream_icon: "broadcast_embeddable_stream_icon_1LBYs",
        stream_icon_selected: "broadcast_embeddable_stream_icon_selected_mSpze",
        scrollingstreams: "broadcast_embeddable_scrollingstreams_3aYWl",
        stream_icon_arrow: "broadcast_embeddable_stream_icon_arrow_2Qpu-",
        clear_div: "broadcast_embeddable_clear_div_1oCVb",
        NoSelect: "broadcast_embeddable_NoSelect_3Zm9d",
        broadcast_floating: "broadcast_embeddable_broadcast_floating_2WNxa",
        PopOutVideoTitleBar: "broadcast_embeddable_PopOutVideoTitleBar_184SI",
        PopOutVideoTitleText: "broadcast_embeddable_PopOutVideoTitleText_28O6d",
        PopOutVideoCloseButton:
          "broadcast_embeddable_PopOutVideoCloseButton_3bIsS",
        BroadcastPlayerContainer:
          "broadcast_embeddable_BroadcastPlayerContainer_3VvcX",
        ChatContainer: "broadcast_embeddable_ChatContainer_3kqwu",
        BroadcastAndChat: "broadcast_embeddable_BroadcastAndChat_1aJ9y",
        detail_chat_ctn: "broadcast_embeddable_detail_chat_ctn_IaFns",
        ChatEntry: "broadcast_embeddable_ChatEntry_Rs7El",
        Event: "broadcast_embeddable_Event_1A0NY",
        rightPanel: "broadcast_embeddable_rightPanel_16MsC",
      };
    },
  },
]);

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
        s = a.n(n),
        o = a("TyAF"),
        i = a("q1tI"),
        c = a.n(i),
        l = a("eN6m"),
        d = a("trWU"),
        p = a("5eAM"),
        m = a("VQ2A"),
        u = a("b3LC"),
        h = a("5L1o"),
        _ = a("NKJh"),
        b = a("RQmk"),
        f = a("dfs5"),
        v = a("0OaU"),
        S = a("exH9"),
        g = a("lkRc"),
        E = a("dLk7"),
        O = a.n(E),
        j = Object(o.a)(function (e) {
          var t = e.appid,
            a = Object(u.c)(t, 0, !0),
            n = (a[0], a[1]),
            s = Object(f.c)();
          Object(i.useEffect)(
            function () {
              if (!p.a.BHasAppLinkLoaded(t)) {
                Object(r.b)(void 0, void 0, void 0, function () {
                  return Object(r.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [4, p.a.LoadAppLinkInfo([t])];
                      case 1:
                        return [2, e.sent()];
                    }
                  });
                });
              }
            },
            [t]
          );
          var o = O.a.StoreSaleWidgetContainer_mini,
            l = O.a.StoreSaleWidgetImage_mini,
            d = O.a.StoreSaleImage_mini,
            E = (O.a.StoreSaleWidgetShortDesc_mini, p.a.GetAppLinkInfo(t));
          if (!n || !E)
            return c.a.createElement(
              "div",
              { className: o },
              c.a.createElement(v.a, { size: "medium" }),
              ";"
            );
          var j = "series" != E.type,
            y = Object(m.b)(E.capsule_link, s);
          return E && E.title
            ? c.a.createElement(
                "div",
                { className: o },
                c.a.createElement(
                  "div",
                  { className: _.Actions },
                  c.a.createElement(
                    "a",
                    { href: y, target: g.c.IN_CLIENT ? void 0 : "_blank" },
                    c.a.createElement(
                      b.b,
                      { type: "app", id: E.appid },
                      c.a.createElement(
                        "div",
                        { className: l },
                        c.a.createElement("img", {
                          className: d,
                          src: E.capsule,
                        })
                      )
                    )
                  )
                ),
                c.a.createElement(
                  "div",
                  { className: _.StoreSaleBroadcastWidgetRight },
                  c.a.createElement(
                    "div",
                    { className: _.Actions },
                    c.a.createElement(
                      "a",
                      { href: y, target: g.c.IN_CLIENT ? void 0 : "_blank" },
                      c.a.createElement(
                        b.b,
                        { type: "app", id: E.appid },
                        c.a.createElement(
                          "div",
                          {
                            className: Object(S.a)(
                              _.StoreSaleWidgetTitle,
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
                    { className: _.StoreSaleWidgetRelease },
                    E.release
                  ),
                  j &&
                    c.a.createElement(h.i, {
                      info: E,
                      bShowDemoButton: !0,
                      bStackedButtons: !0,
                    })
                )
              )
            : c.a.createElement("div", {
                className: _.StoreSaleWidgetEmptyContainer,
              });
        }),
        y = a("kyHq"),
        C = a("1BdX"),
        I = a("boaH"),
        w = a("nWbB"),
        N = a("02Wr"),
        B = a("MnIK"),
        P = a("6Y59"),
        G = a("d+Me"),
        A = a("TLQK"),
        k = a("bxiW"),
        D = a("kLLr"),
        L = a("uIWk"),
        x = a("rKv1"),
        T = a.n(x),
        W = Object(o.a)(function (e) {
          var t = e.event,
            a = t.clanSteamID.GetAccountID(),
            n = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
            o = Object(i.useRef)(null),
            l = Object(i.useState)(
              t ? L.a.GetCreatorHome(t.clanSteamID) : null
            ),
            d = l[0],
            p = l[1];
          if (
            (Object(i.useEffect)(
              function () {
                var e = s.a.CancelToken.source();
                o.current = e.cancel;
                return (
                  Object(r.b)(void 0, void 0, void 0, function () {
                    var t, n;
                    return Object(r.e)(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return (
                            (t = D.a.InitFromClanID(a)),
                            [4, L.a.LoadCreatorHome(t, e)]
                          );
                        case 1:
                          return (n = r.sent()), e.token.reason || p(n), [2];
                      }
                    });
                  }),
                  function () {
                    o.current && o.current("BroadcastDropsDisplay: unmounting");
                  }
                );
              },
              [a]
            ),
            n || !d || !d.BIsLoaded())
          )
            return null;
          var m =
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
                d.GetName().length > 0
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
                d.GetName()
              ),
              Boolean(t.jsondata.broadcast_item_drops_details_clan_accountid) &&
                c.a.createElement(
                  "a",
                  { href: m, target: g.c.IN_CLIENT ? "" : "_blank" },
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
        V = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.m_cancelSignal = s.a.CancelToken.source()),
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
                            w.a
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
                            bExpanded: !w.a
                              .Get()
                              .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                            innerStyle: Object(r.a)(
                              Object(r.a)({}, this.state.innerStyle),
                              {
                                maxHeight: w.a
                                  .Get()
                                  .BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
                                  ? "0vh"
                                  : "100vh",
                              }
                            ),
                          }),
                        this.props.nAppIDVOD
                          ? (w.a.Get().SetupEmbeddableVOD(this.props), [3, 4])
                          : [3, 2]
                      );
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
                      t.sent(), (t.label = 4);
                    case 4:
                      return (
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
            (t.prototype.componentDidUpdate = function (e) {
              e.nAppIDVOD &&
                !this.props.nAppIDVOD &&
                (this.props.bIsPreview && this.props.accountIDs
                  ? w.a.Get().HintLoadEmbeddablePreviewStreams(this.props)
                  : w.a.Get().HintLoadEmbeddableStreams(this.props));
            }),
            (t.prototype.componentWillUnmount = function () {
              this.m_cancelSignal.cancel(
                "BroadcastEmbeddable component unmounted"
              );
            }),
            (t.prototype.ToggleBroadcastExpandShrink = function () {
              var e = this,
                t = w.a.Get().GetPlayReadyStream(this.props),
                a = I.a.GetOrCreateBroadcastInfo(t.steamid).m_nAppID;
              Object(w.e)(a, this.state.bExpanded ? 2 : 3, t.snr);
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
                      return w.a
                        .Get()
                        .SetEmbeddedStreamCollapsed(!e.state.bExpanded);
                    }
                  );
            }),
            (t.prototype.OnShrinkTransitionEnd = function () {
              "0vh" === this.state.innerStyle.maxHeight &&
                this.setState({ bExpanded: !1 }, function () {
                  return w.a.Get().SetEmbeddedStreamCollapsed(!0);
                });
            }),
            (t.prototype.onStreamSelect = function (e) {
              return Object(r.b)(this, void 0, void 0, function () {
                return Object(r.e)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        this.setState({ bStartMuted: !1 }),
                        w.a.Get().GetPlayReadyStream(this.props).accountid ==
                        e.accountid
                          ? [3, 2]
                          : [4, w.a.Get().AttemptToPlayStream(this.props, e)]
                      );
                    case 1:
                      t.sent(), (t.label = 2);
                    case 2:
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
              var r = w.a.Get().GetConcurrentStreams(this.props) > 1,
                n = I.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
                s = i.createElement(
                  "div",
                  { className: T.a.rightPanel },
                  i.createElement(F, {
                    key: "right" + n,
                    ImgUrl: e.right_panel,
                  })
                ),
                o = i.createElement(F, {
                  key: "left" + n,
                  ImgUrl: e.left_panel,
                });
              if (n < 11) {
                var c = C.b.GetAppIDListForBroadcasterSteamID(e.steamid);
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
                  ((s = i.createElement(j, {
                    key: "mini" + e.accountid,
                    appid: n,
                  })),
                  (a.bRightPanelArtworkOrEmpty = !1)),
                r && !t
                  ? ((a.leftPanel = i.createElement(K, {
                      broadcastEmbedContext: this.props,
                      key: "selector" + n,
                      curStream: e,
                      onStreamSelect: this.onStreamSelect,
                      fnFilterStreams: this.props.fnFilterStreams,
                      bShowCapsuleArt: this.props.bShowCapsuleArt,
                    })),
                    (a.rightPanel = s))
                  : t
                  ? ((a.leftPanel = i.createElement("div", null)),
                    (a.rightPanel = i.createElement(J, {
                      stream: e,
                      orientation: "rightside",
                    })),
                    (a.bRightPanelArtworkOrEmpty = !1))
                  : ((a.leftPanel = o), (a.rightPanel = s)),
                a
              );
            }),
            (t.prototype.render = function () {
              var e, t;
              if (!a.IsBroadcastAllowed() || this.state.bLoadingPreference)
                return null;
              var n = w.a.Get().GetPlayReadyStream(this.props);
              if (n) {
                var s = "show" === w.a.Get().GetChatVisibility(),
                  o = this.props,
                  c = o.event,
                  l = o.language,
                  d = o.fnRenderBroadcastContext,
                  p = o.fnOnVideoEnd;
                c &&
                  (n = Object(r.a)(Object(r.a)({}, n), {
                    left_panel: c.GetImageURL(
                      "broadcast_left",
                      l || Object(y.h)(g.c.LANGUAGE)
                    ),
                    right_panel: c.GetImageURL(
                      "broadcast_right",
                      l || Object(y.h)(g.c.LANGUAGE)
                    ),
                    store_title: c.GetBroadcastTitle(
                      l || Object(y.h)(g.c.LANGUAGE)
                    ),
                    broadcast_chat_visibility: c.GetBroadcastChatVisibility(),
                  }));
                var m = this.ConstructSidePanels(n, s),
                  u = n.store_title ? n.store_title : n.title,
                  _ = w.a.Get().GetConcurrentStreams(this.props) > 1,
                  b =
                    "radial-gradient(100% 80% at 64% 95%, " +
                    ((c &&
                      c.jsondata &&
                      c.jsondata.broadcast_gradient_inner_color) ||
                      "rgba(108, 119, 134, 0.4)") +
                    " 40%, " +
                    ((c &&
                      c.jsondata &&
                      c.jsondata.broadcast_gradient_outer_color) ||
                      "rgba(83, 104, 104, 0.4)") +
                    " 100%)";
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
                        style: { background: b },
                        className: Object(S.a)(
                          ((e = {}),
                          (e[T.a.bordered_container] = !0),
                          (e[T.a.Event] = Boolean(c)),
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
                        i.createElement(h.d, null),
                        u,
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
                        Boolean(n.gamedata_subtitle) &&
                          i.createElement(
                            "div",
                            { className: T.a.bordered_subtitle },
                            n.gamedata_subtitle
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
                              (t.multistream = _),
                              (t.broadcast_right_panel_simple =
                                m.bRightPanelArtworkOrEmpty),
                              (t.broadcast_chat_expanded = s),
                              t)
                            ),
                            style: Object(r.a)({}, this.state.innerStyle),
                            onTransitionEnd: this.OnShrinkTransitionEnd,
                          },
                          m.leftPanel,
                          i.createElement(H, {
                            stream: n,
                            bStartMuted: this.state.bStartMuted,
                            fnRenderBroadcastContext: d,
                            fnOnVideoEnd: p,
                            bWidePlayer: this.props.bWidePlayer,
                          }),
                          m.rightPanel,
                          this.state.bExpanded &&
                            i.createElement(U, { stream: n })
                        )
                    ),
                    Boolean(
                      c && c.jsondata && c.jsondata.broadcast_item_drops_enabled
                    ) && i.createElement(W, { event: c }),
                    this.state.bExpanded &&
                      i.createElement(
                        "div",
                        { className: "" + (c ? T.a.Event : "") },
                        i.createElement(U, { stream: n })
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
              [k.a],
              t.prototype,
              "ToggleBroadcastExpandShrink",
              null
            ),
            Object(r.c)([k.a], t.prototype, "OnShrinkTransitionEnd", null),
            Object(r.c)([k.a], t.prototype, "onStreamSelect", null),
            (t = a = Object(r.c)([o.a], t))
          );
        })(i.Component),
        H =
          ((t.default = V),
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
                Object(w.e)(e, 7, this.props.stream.snr),
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
                    G.a,
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
                          i.createElement(M, {
                            stream: this.props.stream,
                            OnPreventPopup: this.CloseBroadcastPopup,
                          }),
                        i.createElement(
                          "div",
                          { className: T.a.BroadcastPlayerContainer },
                          i.createElement(d.a, {
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
              Object(r.c)([k.a], t.prototype, "CloseBroadcastPopup", null),
              Object(r.c)([k.a], t.prototype, "OnEnter", null),
              Object(r.c)([k.a], t.prototype, "OnLeave", null),
              t
            );
          })(i.Component)),
        U = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.ConstructBroadcastLink = function () {
              var e = this.props.stream,
                t = I.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                  .m_nAppID,
                a = R.list.find(function (a) {
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
                s = g.c.COMMUNITY_BASE_URL + "broadcast/watch/" + n;
              return i.createElement(
                "a",
                {
                  href: s,
                  className: T.a.external_link,
                  "data-tooltip-text": Object(A.f)(
                    "#BroadcastWatch_View_Broadcast_Page"
                  ),
                },
                i.createElement(P.v, null)
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
              return i.createElement(
                "div",
                { className: Object(S.a)(T.a.viewer_bar, "viewer_bar") },
                i.createElement(
                  "div",
                  { className: Object(S.a)(T.a.viewer_count, "viewer_count") },
                  i.createElement(P.gb, null),
                  a.toLocaleString(A.e.GetPreferredLocales())
                ),
                i.createElement(
                  "div",
                  { className: Object(S.a)(T.a.viewer_links, "viewer_links") },
                  t &&
                    i.createElement(
                      "div",
                      { className: T.a.chat_link },
                      i.createElement(P.j, null),
                      i.createElement(
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
                    i.createElement(P.U, null)
                  ),
                  e
                )
              );
            }),
            Object(r.c)([k.a], t.prototype, "OnToggleChat", null),
            Object(r.c)([k.a], t.prototype, "onWatchBroadcastPage", null),
            (t = Object(r.c)([o.a], t))
          );
        })(i.Component),
        F = (function (e) {
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
        M = Object(o.a)(function (e) {
          var t = e.stream,
            a = Object(f.c)(),
            r = I.a.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
            n = p.a.GetAppLinkInfo(r),
            s = n
              ? i.createElement(
                  b.a,
                  {
                    type: "app",
                    id: r,
                    strURL: Object(m.b)(n.capsule_link, a),
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
            s,
            i.createElement(
              "button",
              {
                className: T.a.PopOutVideoCloseButton,
                "data-tooltip-text": Object(A.f)(
                  "#StoreBroadcast_close_broadcast_popup"
                ),
                onClick: e.OnPreventPopup,
              },
              i.createElement(P.kb, null)
            )
          );
        }),
        K = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.itemRef = i.createRef()), t;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.GetFilteredStreamList = function () {
              var e = this,
                t = w.a
                  .Get()
                  .GetStreams(this.props.broadcastEmbedContext)
                  .filter(function (t) {
                    return (
                      !e.props.fnFilterStreams || e.props.fnFilterStreams(t)
                    );
                  });
              return (
                t.sort(function (e, t) {
                  return Object(w.c)(e) != Object(w.c)(t)
                    ? Object(w.c)(t) - Object(w.c)(e)
                    : e.viewer_count != t.viewer_count
                    ? t.viewer_count - e.viewer_count
                    : t.accountid - e.accountid;
                }),
                t
              );
            }),
            (t.prototype.CalculateStreamHeight = function (e) {
              var t = I.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
                a = p.a.GetAppLinkInfo(t);
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
                  return i.createElement(q, {
                    key: t.accountid,
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
        q = (function (e) {
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
              var t = this.props.stream,
                a = this.props.bSelected
                  ? T.a.stream_icon_selected
                  : T.a.stream_icon;
              if (e) {
                var r = I.a.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
                  n = p.a.GetAppLinkInfo(r),
                  s = [t.thumbnail_http_address];
                return i.createElement(
                  i.Fragment,
                  null,
                  n &&
                    i.createElement("img", {
                      className: Object(S.a)(a, T.a.stream_icon_hide_on_hover),
                      src: n.header_image_url,
                    }),
                  i.createElement(N.b, {
                    className: Object(S.a)(a, T.a.stream_icon_show_on_hover),
                    srcs: s,
                  })
                );
              }
              return i.createElement("img", {
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
                r = e.bShowCapsuleArt;
              if (!Object(w.d)(t)) return null;
              var n = I.a.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
                s = p.a.GetAppLinkInfo(n),
                o = Boolean(r && (null == s ? void 0 : s.header_image_url)),
                c = Number.parseInt("" + t.viewer_count);
              return i.createElement(
                "div",
                {
                  className: Object(S.a)(
                    T.a.stream_icon_and_viewer_container,
                    a.GetClassForStreamPriority(t.current_selection_priority),
                    o && T.a.display_capsule_art
                  ),
                },
                i.createElement(
                  b.b,
                  { type: "app", id: n },
                  i.createElement(
                    B.a,
                    {
                      className: T.a.stream_icon_container,
                      onClick: this.onClick,
                      rootMargin: "100px 0px 100px 0px",
                    },
                    this.generateThumbnail(o),
                    this.props.bSelected &&
                      i.createElement("div", {
                        className: T.a.stream_icon_arrow,
                      })
                  )
                ),
                i.createElement(
                  "div",
                  { className: T.a.viewer_count },
                  i.createElement(P.gb, null),
                  c.toLocaleString(A.e.GetPreferredLocales())
                )
              );
            }),
            Object(r.c)([k.a], t.prototype, "onClick", null),
            (t = a = Object(r.c)([o.a], t))
          );
        })(i.Component),
        J = (function (e) {
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
                      i.createElement(l.a, {
                        emoticonStore: w.f,
                        watchLocation: 6,
                        steamID: this.props.stream.steamid,
                        broadcastID: t.m_ulBroadcastID,
                      })
                    )
                  )
                : null;
            }),
            (t = Object(r.c)([o.a], t))
          );
        })(i.Component);
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

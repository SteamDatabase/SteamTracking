/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    "3sYe": function (e, t, r) {
      e.exports = {
        BroadcastChat: "broadcastchat_BroadcastChat_3URK7",
        ChatEntry: "broadcastchat_ChatEntry_3soy-",
        ChatPanel: "broadcastchat_ChatPanel_2ZCAI",
        ChatMessages: "broadcastchat_ChatMessages_3M5L0",
        EmoticonContainer: "broadcastchat_EmoticonContainer_1wa4o",
        ChatSend: "broadcastchat_ChatSend_3JUnD",
        ChatBox: "broadcastchat_ChatBox_2qfgS",
        ChatControls: "broadcastchat_ChatControls_1TekO",
        MessageChat: "broadcastchat_MessageChat_22PB4",
        MessageName: "broadcastchat_MessageName_BJe6C",
        MessageContents: "broadcastchat_MessageContents_PNYZa",
        EmoticonsOnly: "broadcastchat_EmoticonsOnly_gFjH8",
        MessageNotification: "broadcastchat_MessageNotification_3Xb4_",
        MessageError: "broadcastchat_MessageError_8MzyW",
        minHeightZero: "broadcastchat_minHeightZero_r7HLM",
        ChatLoginButton: "broadcastchat_ChatLoginButton_2TAQo",
        RateLimitProgressBarContainer:
          "broadcastchat_RateLimitProgressBarContainer_JPqUG",
        RateLimitProgressBar: "broadcastchat_RateLimitProgressBar_1EcVK",
        TimedProgressBarContainer:
          "broadcastchat_TimedProgressBarContainer_39xGj",
        wrapper: "broadcastchat_wrapper_2vz6R",
        pie: "broadcastchat_pie_1k4dS",
        spinner: "broadcastchat_spinner_3nRh5",
        rota: "broadcastchat_rota_1xXh6",
        filler: "broadcastchat_filler_3Eegk",
        fill: "broadcastchat_fill_2tyuX",
        mask: "broadcastchat_mask_1V4Ke",
        SelectedUserNameCtn: "broadcastchat_SelectedUserNameCtn_3K4QX",
        SelectedUserName: "broadcastchat_SelectedUserName_c907V",
        FlairContainer: "broadcastchat_FlairContainer_166wp",
        RoleFlairContainer: "broadcastchat_RoleFlairContainer_1QRJ2",
        Description: "broadcastchat_Description_105HH",
        LogInPrompt: "broadcastchat_LogInPrompt_CsA8v",
        SignInButton: "broadcastchat_SignInButton_1dMwW",
      };
    },
    "5znp": function (e, t, r) {
      e.exports = {
        FriendsListInsetShadowCtn:
          "insetshadow_FriendsListInsetShadowCtn_1qeW3",
        FriendListInsetShadowTop: "insetshadow_FriendListInsetShadowTop_1osHa",
        FriendListInsetShadowBottom:
          "insetshadow_FriendListInsetShadowBottom_2OoTJ",
      };
    },
    NIbt: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "BroadcastEmbeddablePopoutHeader", function () {
          return q;
        });
      var n = r("mrSG"),
        i = r("vDqi"),
        a = r.n(i),
        o = r("TyAF"),
        s = r("q1tI"),
        u = r.n(s),
        c = r("eN6m"),
        d = r("trWU"),
        l = r("5eAM"),
        m = r("VQ2A"),
        f = r("b3LC"),
        p = r("NKJh"),
        b = r("zjj+"),
        h = r("RQmk"),
        _ = r("dfs5"),
        B = r("0OaU"),
        y = r("exH9"),
        g = r("lkRc"),
        w = r("dLk7"),
        v = r.n(w),
        S = Object(o.a)(function (e) {
          var t = e.appid,
            r = Object(f.d)(t, 0, !0),
            i = (r[0], r[1]),
            a = Object(_.c)();
          Object(s.useEffect)(
            function () {
              if (!l.a.BHasAppLinkLoaded(t)) {
                Object(n.b)(void 0, void 0, void 0, function () {
                  return Object(n.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [4, l.a.LoadAppLinkInfo([t])];
                      case 1:
                        return [2, e.sent()];
                    }
                  });
                });
              }
            },
            [t]
          );
          var o = v.a.StoreSaleWidgetContainer_mini,
            c = v.a.StoreSaleWidgetImage_mini,
            d = v.a.StoreSaleImage_mini,
            w = (v.a.StoreSaleWidgetShortDesc_mini, l.a.GetAppLinkInfo(t));
          if (!i || !w)
            return u.a.createElement(
              "div",
              { className: o },
              u.a.createElement(B.a, { size: "medium" }),
              ";"
            );
          var S = "series" != w.type,
            M = Object(m.b)(w.capsule_link, a);
          return w && w.title
            ? u.a.createElement(
                "div",
                { className: o },
                u.a.createElement(
                  "div",
                  { className: p.Actions },
                  u.a.createElement(
                    "a",
                    { href: M, target: g.c.IN_CLIENT ? void 0 : "_blank" },
                    u.a.createElement(
                      h.b,
                      { type: "app", id: w.appid },
                      u.a.createElement(
                        "div",
                        { className: c },
                        u.a.createElement("img", {
                          className: d,
                          src: w.capsule,
                        })
                      )
                    )
                  )
                ),
                u.a.createElement(
                  "div",
                  { className: p.StoreSaleBroadcastWidgetRight },
                  u.a.createElement(
                    "div",
                    { className: p.Actions },
                    u.a.createElement(
                      "a",
                      { href: M, target: g.c.IN_CLIENT ? void 0 : "_blank" },
                      u.a.createElement(
                        h.b,
                        { type: "app", id: w.appid },
                        u.a.createElement(
                          "div",
                          {
                            className: Object(y.a)(
                              p.StoreSaleWidgetTitle,
                              "StoreSaleWidgetTitle"
                            ),
                          },
                          w.title
                        )
                      )
                    )
                  ),
                  u.a.createElement(
                    "div",
                    { className: p.StoreSaleWidgetRelease },
                    w.release
                  ),
                  S &&
                    u.a.createElement(b.d, {
                      info: w,
                      bShowDemoButton: !0,
                      bStackedButtons: !0,
                    })
                )
              )
            : u.a.createElement("div", {
                className: p.StoreSaleWidgetEmptyContainer,
              });
        }),
        M = r("kyHq"),
        z = r("1BdX"),
        C = r("boaH"),
        R = r("nWbB"),
        O = r("5L1o"),
        j = r("02Wr"),
        F = r("MnIK"),
        W = r("6Y59"),
        T = r("d+Me"),
        I = r("TLQK"),
        N = r("opsS"),
        U = r("kLLr"),
        E = r("uIWk"),
        x = r("rKv1"),
        P = r.n(x),
        G = Object(o.a)(function (e) {
          var t = e.event,
            r = t.clanSteamID.GetAccountID(),
            i = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
            o = Object(s.useRef)(null),
            c = Object(s.useState)(
              t ? E.a.GetCreatorHome(t.clanSteamID) : null
            ),
            d = c[0],
            l = c[1];
          if (
            (Object(s.useEffect)(
              function () {
                var e = a.a.CancelToken.source();
                o.current = e.cancel;
                return (
                  Object(n.b)(void 0, void 0, void 0, function () {
                    var t, i;
                    return Object(n.e)(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return (
                            (t = U.a.InitFromClanID(r)),
                            [4, E.a.LoadCreatorHome(t, e)]
                          );
                        case 1:
                          return (i = n.sent()), e.token.reason || l(i), [2];
                      }
                    });
                  }),
                  function () {
                    o.current && o.current("BroadcastDropsDisplay: unmounting");
                  }
                );
              },
              [r]
            ),
            i || !d || !d.BIsLoaded())
          )
            return null;
          var m =
            g.c.COMMUNITY_BASE_URL +
            "gid/" +
            t.jsondata.broadcast_item_drops_details_clan_accountid +
            "/partnerevents/view/" +
            t.jsondata.broadcast_item_drops_details_event_gid;
          return u.a.createElement(
            "div",
            { className: P.a.item_drop_ctn },
            u.a.createElement(
              "div",
              null,
              Object(I.f)(
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
                u.a.createElement(
                  "a",
                  { href: m, target: g.c.IN_CLIENT ? "" : "_blank" },
                  Object(I.f)("#SalePage_WatchForDrop_LearnMore")
                )
            )
          );
        }),
        A = {
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
        D = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.m_cancelSignal = a.a.CancelToken.source()),
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
          var r;
          return (
            Object(n.d)(t, e),
            (r = t),
            (t.IsBroadcastAllowed = function () {
              return g.c.EREALM != M.f.k_ESteamRealmChina && !g.c.IN_GAMEPADUI;
            }),
            (t.prototype.componentDidMount = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e = this;
                return Object(n.e)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return r.IsBroadcastAllowed()
                        ? [
                            4,
                            R.a
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
                            bExpanded: !R.a
                              .Get()
                              .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                            innerStyle: Object(n.a)(
                              Object(n.a)({}, this.state.innerStyle),
                              {
                                maxHeight: R.a
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
                            ? R.a
                                .Get()
                                .HintLoadEmbeddablePreviewStreams(this.props)
                            : R.a.Get().HintLoadEmbeddableStreams(this.props),
                        ]
                      );
                    case 2:
                      return (
                        t.sent(),
                        this.props.nAppIDVOD &&
                          (R.a
                            .Get()
                            .SetupEmbeddableVOD(
                              this.props,
                              !this.props.bSkipPreRoll
                            ),
                          this.props.bSkipPreRoll && this.PlayTopNonVOD()),
                        window.setTimeout(function () {
                          e.m_cancelSignal.token.reason ||
                            e.setState({
                              style: Object(n.a)(
                                Object(n.a)({}, e.state.style),
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
                t = R.a.Get().GetPlayReadyStream(this.props),
                r = C.a.GetOrCreateBroadcastInfo(t.steamid).m_nAppID;
              Object(R.e)(r, this.state.bExpanded ? 2 : 3, t.snr);
              var i = this.state.bExpanded;
              window.setTimeout(function () {
                return e.setState({
                  innerStyle: Object(n.a)(Object(n.a)({}, e.state.innerStyle), {
                    maxHeight: i ? "0vh" : "100vh",
                  }),
                });
              }, 10),
                i ||
                  this.setState(
                    { bExpanded: !this.state.bExpanded },
                    function () {
                      return R.a
                        .Get()
                        .SetEmbeddedStreamCollapsed(!e.state.bExpanded);
                    }
                  );
            }),
            (t.prototype.OnShrinkTransitionEnd = function () {
              "0vh" === this.state.innerStyle.maxHeight &&
                this.setState({ bExpanded: !1 }, function () {
                  return R.a.Get().SetEmbeddedStreamCollapsed(!0);
                });
            }),
            (t.prototype.onStreamSelect = function (e) {
              return Object(n.b)(this, void 0, void 0, function () {
                return Object(n.e)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        this.setState({ bStartMuted: !1 }),
                        R.a.Get().GetPlayReadyStream(this.props).accountid ==
                        e.accountid
                          ? [3, 2]
                          : [4, R.a.Get().AttemptToPlayStream(this.props, e)]
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
              return Object(n.b)(this, void 0, void 0, function () {
                var e,
                  t,
                  r,
                  i,
                  a = this;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      this.setState({ bStartMuted: !1 }),
                        (e = R.a
                          .Get()
                          .GetStreams(this.props)
                          .filter(function (e) {
                            return (
                              !a.props.fnFilterStreams ||
                              a.props.fnFilterStreams(e)
                            );
                          })),
                        Object(R.f)(e),
                        (t = 0),
                        (r = e),
                        (n.label = 1);
                    case 1:
                      return t < r.length
                        ? (i = r[t]).nAppIDVOD
                          ? [3, 3]
                          : [4, R.a.Get().AttemptToPlayStream(this.props, i)]
                        : [3, 4];
                    case 2:
                      return n.sent(), [2];
                    case 3:
                      return t++, [3, 1];
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.ConstructSidePanels = function (e, t) {
              var r = {
                leftPanel: null,
                rightPanel: null,
                bRightPanelArtworkOrEmpty: !0,
              };
              if (this.props.bWidePlayer) return r;
              var n = R.a.Get().GetConcurrentStreams(this.props) > 1,
                i = C.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
                a = s.createElement(
                  "div",
                  { className: P.a.rightPanel },
                  s.createElement(V, {
                    key: "right" + i,
                    ImgUrl: e.right_panel,
                  })
                ),
                o = s.createElement(V, {
                  key: "left" + i,
                  ImgUrl: e.left_panel,
                });
              if (i < 11) {
                var u = z.b.GetAppIDListForBroadcasterSteamID(e.steamid);
                u && 1 === u.length && (i = u[0]);
              }
              return (
                !(
                  (this.props.promotionName ||
                    this.props.bIsPreview ||
                    this.props.subid ||
                    this.props.bundleid) &&
                  i >= 11
                ) ||
                  (this.props.event &&
                    this.props.event.jsondata.broadcast_force_banner) ||
                  ((a = s.createElement(S, {
                    key: "mini" + e.accountid,
                    appid: i,
                  })),
                  (r.bRightPanelArtworkOrEmpty = !1)),
                n && !t
                  ? ((r.leftPanel = s.createElement(H, {
                      broadcastEmbedContext: this.props,
                      key: "selector" + i,
                      curStream: e,
                      onStreamSelect: this.onStreamSelect,
                      fnFilterStreams: this.props.fnFilterStreams,
                      bShowCapsuleArt: this.props.bShowCapsuleArt,
                    })),
                    (r.rightPanel = a))
                  : t
                  ? ((r.leftPanel = s.createElement("div", null)),
                    (r.rightPanel = s.createElement(Y, {
                      stream: e,
                      orientation: "rightside",
                    })),
                    (r.bRightPanelArtworkOrEmpty = !1))
                  : ((r.leftPanel = o), (r.rightPanel = a)),
                r
              );
            }),
            (t.prototype.render = function () {
              var e,
                t,
                i = this;
              if (!r.IsBroadcastAllowed() || this.state.bLoadingPreference)
                return null;
              var a = R.a.Get().GetPlayReadyStream(this.props);
              if (a) {
                var o = "show" === R.a.Get().GetChatVisibility(),
                  u = this.props,
                  c = u.event,
                  d = u.language,
                  l = u.fnRenderBroadcastContext;
                c &&
                  (a = Object(n.a)(Object(n.a)({}, a), {
                    left_panel: c.GetImageURL(
                      "broadcast_left",
                      d || Object(M.i)(g.c.LANGUAGE)
                    ),
                    right_panel: c.GetImageURL(
                      "broadcast_right",
                      d || Object(M.i)(g.c.LANGUAGE)
                    ),
                    store_title: c.GetBroadcastTitle(
                      d || Object(M.i)(g.c.LANGUAGE)
                    ),
                    broadcast_chat_visibility: c.GetBroadcastChatVisibility(),
                  }));
                var m = this.ConstructSidePanels(a, o),
                  f = a.store_title ? a.store_title : a.title,
                  p = R.a.Get().GetConcurrentStreams(this.props) > 1;
                c && c.jsondata && c.jsondata.broadcast_gradient_inner_color,
                  c && c.jsondata && c.jsondata.broadcast_gradient_outer_color;
                return s.createElement(
                  s.Fragment,
                  null,
                  s.createElement(
                    "div",
                    {
                      className: "broadcast_embed_top_ctn_trgt",
                      style: this.state.style,
                    },
                    s.createElement(
                      "div",
                      {
                        className: Object(y.a)(
                          ((e = {}),
                          (e[P.a.bordered_container] = !0),
                          (e[P.a.Event] = Boolean(c)),
                          (e.broadcast_brd_ctn_trgt = !0),
                          e)
                        ),
                      },
                      s.createElement(
                        "div",
                        {
                          className: Object(y.a)(
                            P.a.bordered_title,
                            "bordered_title_trgt"
                          ),
                        },
                        s.createElement(O.i, null),
                        f,
                        s.createElement(
                          "div",
                          { className: P.a.bordered_corner_container },
                          !this.state.bExpanded &&
                            s.createElement("div", {
                              className: P.a.broadcast_settings_icon,
                              "data-tooltip-text": Object(I.f)(
                                "#StoreBroadcast_Change_store_Broadcast_settings"
                              ),
                              onClick: function () {
                                return window.open(
                                  g.c.STORE_BASE_URL +
                                    "account/preferences/#store_broadcast_settings"
                                );
                              },
                            }),
                          s.createElement("div", {
                            className: this.state.bExpanded
                              ? P.a.bordered_corner_expanded
                              : P.a.bordered_corner_shrinked,
                            "data-tooltip-text": Object(I.f)(
                              "#StoreBroadcast_Hide_Tooltip"
                            ),
                            onClick: this.ToggleBroadcastExpandShrink,
                          })
                        ),
                        Boolean(a.gamedata_subtitle) &&
                          s.createElement(
                            "div",
                            { className: P.a.bordered_subtitle },
                            a.gamedata_subtitle
                          )
                      ),
                      this.state.bExpanded &&
                        s.createElement(
                          "div",
                          {
                            className: Object(y.a)(
                              ((t = {}),
                              (t[P.a.container] = !0),
                              (t.embeddable_ctn_trgt = !0),
                              (t.multistream = p),
                              (t.broadcast_right_panel_simple =
                                m.bRightPanelArtworkOrEmpty),
                              (t.broadcast_chat_expanded = o),
                              t)
                            ),
                            style: Object(n.a)({}, this.state.innerStyle),
                            onTransitionEnd: this.OnShrinkTransitionEnd,
                          },
                          m.leftPanel,
                          s.createElement(L, {
                            stream: a,
                            bStartMuted: this.state.bStartMuted,
                            fnRenderBroadcastContext: l,
                            fnOnVideoEnd: function () {
                              var e, t;
                              a.nAppIDVOD && i.PlayTopNonVOD(),
                                null === (t = (e = i.props).fnOnVideoEnd) ||
                                  void 0 === t ||
                                  t.call(e);
                            },
                            bWidePlayer: this.props.bWidePlayer,
                          }),
                          m.rightPanel,
                          this.state.bExpanded &&
                            s.createElement(k, { stream: a, bMultistream: p })
                        )
                    ),
                    Boolean(
                      c && c.jsondata && c.jsondata.broadcast_item_drops_enabled
                    ) && s.createElement(G, { event: c }),
                    this.state.bExpanded &&
                      s.createElement(
                        "div",
                        { className: "" + (c ? P.a.Event : "") },
                        s.createElement(k, { stream: a, bMultistream: p })
                      ),
                    s.createElement("div", { className: P.a.clear_div })
                  )
                );
              }
              return s.createElement("div", {
                className: "NoBroadcastAvailable",
              });
            }),
            Object(n.c)(
              [N.a],
              t.prototype,
              "ToggleBroadcastExpandShrink",
              null
            ),
            Object(n.c)([N.a], t.prototype, "OnShrinkTransitionEnd", null),
            Object(n.c)([N.a], t.prototype, "onStreamSelect", null),
            Object(n.c)([N.a], t.prototype, "PlayTopNonVOD", null),
            (t = r = Object(n.c)([o.a], t))
          );
        })(s.Component),
        L =
          ((t.default = D),
          (function (e) {
            function t(t) {
              var r = e.call(this, t) || this;
              return (
                (r.m_iVideoContainerRef = s.createRef()),
                (r.state = {
                  bPopout: !1,
                  bPreventPopup: window.screen.width <= 768,
                }),
                r
              );
            }
            return (
              Object(n.d)(t, e),
              (t.prototype.CloseBroadcastPopup = function () {
                var e = C.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                  .m_nAppID;
                Object(R.e)(e, 7, this.props.stream.snr),
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
                return s.createElement(
                  "div",
                  { className: P.a.wrapper },
                  s.createElement(
                    T.a,
                    { onEnter: this.OnEnter, onLeave: this.OnLeave },
                    s.createElement(
                      "div",
                      {
                        className: Object(y.a)(
                          ((e = {}),
                          (e[P.a.video_placeholder] = !0),
                          (e.video_placeholder_trgt = !0),
                          (e[P.a.WidePlayer] = this.props.bWidePlayer),
                          e)
                        ),
                        ref: this.m_iVideoContainerRef,
                      },
                      s.createElement(
                        "div",
                        {
                          className: this.state.bPopout
                            ? P.a.broadcast_floating
                            : P.a.video_container,
                        },
                        this.state.bPopout &&
                          s.createElement(q, {
                            steamIDBroadcast: this.props.stream.steamid,
                            OnPreventPopup: this.CloseBroadcastPopup,
                          }),
                        s.createElement(
                          "div",
                          { className: P.a.BroadcastPlayerContainer },
                          s.createElement(d.a, {
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
              Object(n.c)([N.a], t.prototype, "CloseBroadcastPopup", null),
              Object(n.c)([N.a], t.prototype, "OnEnter", null),
              Object(n.c)([N.a], t.prototype, "OnLeave", null),
              t
            );
          })(s.Component)),
        k = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.ConstructBroadcastLink = function () {
              var e = this.props.stream,
                t = C.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                  .m_nAppID,
                r = A.list.find(function (r) {
                  return (
                    r.appid == t &&
                    (!r.broadcasterAccountID ||
                      r.broadcasterAccountID == e.accountid)
                  );
                });
              if (r) {
                var n = r.url;
                return (
                  (g.c.IN_CLIENT ||
                    navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
                    navigator.userAgent.indexOf("Valve Steam GameOverlay") >=
                      0 ||
                    navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
                    (n = "steam://openurl/" + n),
                  s.createElement(
                    "a",
                    { href: n },
                    Object(I.f)("#Broadcast_Embed_Watch_With_Frieds_SteamTV")
                  )
                );
              }
              var i = this.props.stream.steamid,
                a = g.c.COMMUNITY_BASE_URL + "broadcast/watch/" + i;
              return s.createElement(
                "a",
                {
                  href: a,
                  className: P.a.external_link,
                  "data-tooltip-text": Object(I.f)(
                    "#BroadcastWatch_View_Broadcast_Page"
                  ),
                },
                s.createElement(W.z, null)
              );
            }),
            (t.prototype.OnToggleChat = function (e) {
              e.preventDefault();
              var t = C.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nAppID;
              Object(R.e)(
                t,
                "show" === R.a.Get().GetChatVisibility() ? 5 : 4,
                this.props.stream.snr
              ),
                R.a.Get().ToggleChatVisibility();
            }),
            (t.prototype.onWatchBroadcastPage = function () {
              var e = C.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nAppID;
              Object(R.e)(e, 9, this.props.stream.snr);
            }),
            (t.prototype.render = function () {
              var e = this.ConstructBroadcastLink(),
                t = "remove" != R.a.Get().GetChatVisibility(),
                r = "hide" === R.a.Get().GetChatVisibility(),
                n = Number.parseInt(
                  "" +
                    C.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                      .m_nViewerCount
                );
              return s.createElement(
                "div",
                { className: Object(y.a)(P.a.viewer_bar, "viewer_bar") },
                s.createElement(
                  "div",
                  { className: Object(y.a)(P.a.viewer_count, "viewer_count") },
                  s.createElement(W.rb, null),
                  n.toLocaleString(I.e.GetPreferredLocales())
                ),
                s.createElement(
                  "div",
                  { className: Object(y.a)(P.a.viewer_links, "viewer_links") },
                  Boolean(t && !r && this.props.bMultistream) &&
                    s.createElement(
                      "div",
                      { className: P.a.chat_link },
                      s.createElement(
                        "a",
                        {
                          href: "#",
                          className: P.a.ChatToggle,
                          onClick: this.OnToggleChat,
                        },
                        Object(I.f)("#sale_three_section_show_streams")
                      )
                    ),
                  t &&
                    s.createElement(
                      "div",
                      { className: P.a.chat_link },
                      s.createElement(W.l, null),
                      s.createElement(
                        "a",
                        {
                          href: "#",
                          className: P.a.ChatToggle,
                          onClick: this.OnToggleChat,
                        },
                        Object(I.f)(
                          r
                            ? "#sale_three_section_show_chat"
                            : "#sale_three_section_hide_chat"
                        )
                      )
                    ),
                  t && s.createElement("span", { className: P.a.ChatToggle }),
                  s.createElement(
                    "a",
                    {
                      href:
                        g.c.STORE_BASE_URL +
                        "account/preferences/#store_broadcast_settings",
                      target: g.c.IN_CLIENT ? void 0 : "_blank",
                      className: P.a.settings_link,
                      "data-tooltip-text": Object(I.f)(
                        "#StoreBroadcast_Change_store_Broadcast_settings"
                      ),
                    },
                    s.createElement(W.bb, null)
                  ),
                  e
                )
              );
            }),
            Object(n.c)([N.a], t.prototype, "OnToggleChat", null),
            Object(n.c)([N.a], t.prototype, "onWatchBroadcastPage", null),
            (t = Object(n.c)([o.a], t))
          );
        })(s.Component),
        V = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props.ImgUrl;
              return s.createElement(
                s.Fragment,
                null,
                e &&
                  s.createElement("img", {
                    className: P.a.side_panels,
                    src: this.props.ImgUrl,
                  }),
                !e && s.createElement("div", { className: P.a.side_panels })
              );
            }),
            t
          );
        })(s.Component),
        q = Object(o.a)(function (e) {
          var t = e.steamIDBroadcast,
            r = C.a.GetOrCreateBroadcastInfo(t).m_nAppID,
            n = l.a.GetAppLinkInfo(r);
          return s.createElement(
            "div",
            { className: [P.a.PopOutVideoTitleBar, P.a.NoSeslect].join(" ") },
            Boolean(n)
              ? s.createElement(
                  h.a,
                  { type: "app", id: r, className: P.a.PopOutVideoTitleText },
                  Object(I.f)("#StoreBroadcast_Detault_popout_Title")
                )
              : s.createElement(
                  "div",
                  { className: P.a.PopOutVideoTitleText },
                  Object(I.f)("#StoreBroadcast_Detault_popout_Title")
                ),
            s.createElement(
              "button",
              {
                className: P.a.PopOutVideoCloseButton,
                "data-tooltip-text": Object(I.f)(
                  "#StoreBroadcast_close_broadcast_popup"
                ),
                onClick: e.OnPreventPopup,
              },
              s.createElement(W.vb, null)
            )
          );
        }),
        H = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.itemRef = s.createRef()), t;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.GetFilteredStreamList = function () {
              var e = this,
                t = R.a
                  .Get()
                  .GetStreams(this.props.broadcastEmbedContext)
                  .filter(function (t) {
                    return (
                      !e.props.fnFilterStreams || e.props.fnFilterStreams(t)
                    );
                  });
              return Object(R.f)(t), t;
            }),
            (t.prototype.CalculateStreamHeight = function (e) {
              var t = C.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
                r = l.a.GetAppLinkInfo(t);
              return this.props.bShowCapsuleArt &&
                (null == r ? void 0 : r.header_image_url)
                ? parseInt(P.a.strStreamIconCapsuleArtHeight)
                : parseInt(P.a.strStreamIconScreenshotArtHeight);
            }),
            (t.prototype.componentDidMount = function () {
              if (this.itemRef && this.itemRef.current) {
                for (
                  var e = 0, t = 0, r = this.GetFilteredStreamList();
                  t < r.length;
                  t++
                ) {
                  var n = r[t];
                  if (this.props.curStream.accountid == n.accountid) break;
                  e += this.CalculateStreamHeight(n);
                }
                this.itemRef.current.scrollTop = e;
              }
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.GetFilteredStreamList(),
                r = t.map(function (t) {
                  var r;
                  return s.createElement(K, {
                    key:
                      null !== (r = t.accountid) && void 0 !== r
                        ? r
                        : t.steamid,
                    stream: t,
                    bSelected: e.props.curStream.accountid == t.accountid,
                    onStreamSelect: e.props.onStreamSelect,
                    bShowCapsuleArt: e.props.bShowCapsuleArt,
                  });
                });
              return s.createElement(
                "div",
                {
                  ref: this.itemRef,
                  className: Object(y.a)(
                    P.a.side_panels,
                    "side_panels",
                    P.a.multistream,
                    t.length > 3 ? P.a.scrollingstreams : ""
                  ),
                },
                r
              );
            }),
            t
          );
        })(s.Component),
        K = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          var r;
          return (
            Object(n.d)(t, e),
            (r = t),
            (t.prototype.onClick = function () {
              this.props.onStreamSelect &&
                this.props.onStreamSelect(this.props.stream);
            }),
            (t.prototype.generateThumbnail = function (e) {
              var t,
                r = this.props.stream,
                n = this.props.bSelected
                  ? P.a.stream_icon_selected
                  : P.a.stream_icon;
              if (e) {
                var i = C.a.GetOrCreateBroadcastInfo(r.steamid).m_nAppID,
                  a = l.a.GetAppLinkInfo(
                    null !== (t = r.nAppIDVOD) && void 0 !== t ? t : i
                  ),
                  o = [r.thumbnail_http_address];
                return s.createElement(
                  s.Fragment,
                  null,
                  a &&
                    s.createElement("img", {
                      className: Object(y.a)(n, P.a.stream_icon_hide_on_hover),
                      src: a.header_image_url,
                    }),
                  s.createElement(j.b, {
                    className: Object(y.a)(n, P.a.stream_icon_show_on_hover),
                    srcs: o,
                  })
                );
              }
              return s.createElement("img", {
                className: n,
                src: r.thumbnail_http_address,
              });
            }),
            (t.GetClassForStreamPriority = function (e) {
              switch (e) {
                case R.b.k_eFeatured:
                  return P.a.stream_featured;
              }
              return null;
            }),
            (t.prototype.render = function () {
              var e,
                t = this.props,
                n = t.stream,
                i = t.bShowCapsuleArt;
              if (!Object(R.d)(n)) return null;
              var a = C.a.GetOrCreateBroadcastInfo(n.steamid).m_nAppID,
                o = l.a.GetAppLinkInfo(
                  null !== (e = n.nAppIDVOD) && void 0 !== e ? e : a
                ),
                u = Boolean(i && (null == o ? void 0 : o.header_image_url)),
                c = Number.parseInt("" + n.viewer_count),
                d = !Number.isNaN(c),
                m = !!n.nAppIDVOD && (null == o ? void 0 : o.title);
              return s.createElement(
                "div",
                {
                  className: Object(y.a)(
                    P.a.stream_icon_and_viewer_container,
                    r.GetClassForStreamPriority(n.current_selection_priority),
                    u && P.a.display_capsule_art
                  ),
                },
                s.createElement(
                  h.b,
                  { type: "app", id: a },
                  s.createElement(
                    F.a,
                    {
                      className: P.a.stream_icon_container,
                      onClick: this.onClick,
                      rootMargin: "100px 0px 100px 0px",
                    },
                    this.generateThumbnail(u),
                    this.props.bSelected &&
                      s.createElement("div", {
                        className: P.a.stream_icon_arrow,
                      })
                  )
                ),
                s.createElement(
                  "div",
                  {
                    className: Object(y.a)(
                      P.a.viewer_count,
                      !d && P.a.vod_title
                    ),
                  },
                  d
                    ? s.createElement(
                        s.Fragment,
                        null,
                        s.createElement(W.rb, null),
                        " ",
                        c.toLocaleString(I.e.GetPreferredLocales())
                      )
                    : m
                )
              );
            }),
            Object(n.c)([N.a], t.prototype, "onClick", null),
            (t = r = Object(n.c)([o.a], t))
          );
        })(s.Component),
        Y = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.render = function () {
              var e = "below" == this.props.orientation,
                t = C.a.GetBroadcast(this.props.stream.steamid);
              return t
                ? s.createElement(
                    "div",
                    {
                      className: Object(y.a)(
                        e
                          ? P.a.chat_below_container
                          : P.a.chat_rightside_container,
                        P.a.store_chat_ctn
                      ),
                    },
                    s.createElement(
                      "div",
                      { className: P.a.ChatContainer },
                      s.createElement(c.a, {
                        emoticonStore: R.g,
                        watchLocation: 6,
                        steamID: this.props.stream.steamid,
                        broadcastID: t.m_ulBroadcastID,
                      })
                    )
                  )
                : null;
            }),
            (t = Object(n.c)([o.a], t))
          );
        })(s.Component);
    },
    "d+Me": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return o;
      });
      var n = r("mrSG"),
        i = r("q1tI"),
        a = r("uuth"),
        o = function (e) {
          var t = e.onPositionChange,
            r = e.onLeave,
            o = i.useCallback(
              function (e) {
                return (
                  void 0 === e.previousPosition &&
                    e.currentPosition === a.a.above &&
                    r &&
                    r(e),
                  t && t(e)
                );
              },
              [t, r]
            );
          return i.createElement(
            a.a,
            Object(n.a)({}, e, { onPositionChange: o })
          );
        };
    },
    dLk7: function (e, t, r) {
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
    eN6m: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return pr;
      });
      var n = r("mrSG"),
        i = r("2vnA"),
        a = r("TyAF"),
        o = r("q1tI"),
        s = r.n(o),
        u = r("TtDX"),
        c = r("vDqi"),
        d = r.n(c),
        l = r("A5MU"),
        m = r("bxBv"),
        f = r("u2yL"),
        p = r("WBba"),
        b = r("kLLr"),
        h = r("hRO2"),
        _ = r("OS8t"),
        B = h.Message;
      var y = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_id || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      thumbnail_upload_address: {
                        n: 2,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      thumbnail_upload_token: {
                        n: 3,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      thumbnail_interval_seconds: {
                        n: 4,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      heartbeat_interval_seconds: {
                        n: 5,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_BeginBroadcastSession_Response";
            }),
            t
          );
        })(B),
        g = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return B.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_EndBroadcastSession_Response";
            }),
            t
          );
        })(B),
        w = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.upload_token || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      upload_token: {
                        n: 1,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      upload_address: {
                        n: 2,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      broadcast_upload_id: {
                        n: 3,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      enable_replay: {
                        n: 6,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                      http_address: {
                        n: 7,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_StartBroadcastUpload_Response";
            }),
            t
          );
        })(B),
        v = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_id || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      upload_token: {
                        n: 2,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      upload_address: {
                        n: 3,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      http_address: {
                        n: 4,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      broadcast_upload_id: {
                        n: 5,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      heartbeat_interval_seconds: {
                        n: 6,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      is_rtmp: { n: 7, br: _.d.readBool, bw: _.h.writeBool },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_BroadcastUploadStarted_Notification";
            }),
            t
          );
        })(B),
        S = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.gameid || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      gameid: {
                        n: 1,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      title: { n: 2, br: _.d.readString, bw: _.h.writeString },
                      num_viewers: {
                        n: 3,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      permission: {
                        n: 4,
                        br: _.d.readInt32,
                        bw: _.h.writeInt32,
                      },
                      is_rtmp: { n: 5, br: _.d.readBool, bw: _.h.writeBool },
                      seconds_delay: {
                        n: 6,
                        br: _.d.readInt32,
                        bw: _.h.writeInt32,
                      },
                      is_publisher: {
                        n: 7,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                      thumbnail_url: {
                        n: 8,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      update_interval: {
                        n: 9,
                        br: _.d.readInt32,
                        bw: _.h.writeInt32,
                      },
                      is_uploading: {
                        n: 10,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                      duration: {
                        n: 11,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      is_replay: { n: 12, br: _.d.readBool, bw: _.h.writeBool },
                      is_capturing_vod: {
                        n: 13,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                      is_store_whitelisted: {
                        n: 14,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastStatus_Response";
            }),
            t
          );
        })(B),
        M = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.thumbnail_url || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      thumbnail_url: {
                        n: 1,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      update_interval: {
                        n: 2,
                        br: _.d.readInt32,
                        bw: _.h.writeInt32,
                      },
                      num_viewers: {
                        n: 3,
                        br: _.d.readInt32,
                        bw: _.h.writeInt32,
                      },
                      duration: { n: 4, br: _.d.readInt32, bw: _.h.writeInt32 },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastThumbnail_Response";
            }),
            t
          );
        })(B),
        z = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.response || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      response: { n: 1, br: _.d.readEnum, bw: _.h.writeEnum },
                      mpd_url: {
                        n: 2,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      broadcast_id: {
                        n: 3,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      gameid: {
                        n: 4,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      title: { n: 5, br: _.d.readString, bw: _.h.writeString },
                      num_viewers: {
                        n: 6,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      permission: {
                        n: 7,
                        br: _.d.readInt32,
                        bw: _.h.writeInt32,
                      },
                      is_rtmp: { n: 8, br: _.d.readBool, bw: _.h.writeBool },
                      seconds_delay: {
                        n: 9,
                        br: _.d.readInt32,
                        bw: _.h.writeInt32,
                      },
                      viewer_token: {
                        n: 10,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      hls_m3u8_master_url: {
                        n: 11,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      heartbeat_interval: {
                        n: 12,
                        br: _.d.readInt32,
                        bw: _.h.writeInt32,
                      },
                      thumbnail_url: {
                        n: 13,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      is_webrtc: { n: 14, br: _.d.readBool, bw: _.h.writeBool },
                      webrtc_session_id: {
                        n: 15,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      webrtc_offer_sdp: {
                        n: 16,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      webrtc_turn_server: {
                        n: 17,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      is_replay: { n: 18, br: _.d.readBool, bw: _.h.writeBool },
                      duration: {
                        n: 19,
                        br: _.d.readInt32,
                        bw: _.h.writeInt32,
                      },
                      cdn_auth_url_parameters: {
                        n: 20,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WatchBroadcast_Response";
            }),
            t
          );
        })(B);
      var C = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.success || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      success: { n: 1, br: _.d.readBool, bw: _.h.writeBool },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_InviteToBroadcast_Response";
            }),
            t
          );
        })(B),
        R = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return B.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_SendBroadcastStateToServer_Response";
            }),
            t
          );
        })(B),
        O = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.steamid || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      state: { n: 2, br: _.d.readEnum, bw: _.h.writeEnum },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_BroadcastViewerState_Notification";
            }),
            t
          );
        })(B);
      var j,
        F,
        W = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_id || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WaitingBroadcastViewer_Notification";
            }),
            t
          );
        })(B),
        T = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_id || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      broadcast_relay_id: {
                        n: 2,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      upload_result: {
                        n: 3,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      too_many_poor_uploads: {
                        n: 4,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_StopBroadcastUpload_Notification";
            }),
            t
          );
        })(B),
        I = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_id || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_SessionClosed_Notification";
            }),
            t
          );
        })(B),
        N = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_id || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      num_viewers: {
                        n: 2,
                        br: _.d.readInt32,
                        bw: _.h.writeInt32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_BroadcastStatus_Notification";
            }),
            t
          );
        })(B),
        U = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      broadcast_channel_name: {
                        n: 2,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      broadcast_channel_avatar: {
                        n: 3,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_BroadcastChannelLive_Notification";
            }),
            t
          );
        })(B),
        E = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.thumbnail_upload_token || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      thumbnail_upload_token: {
                        n: 1,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      thumbnail_broadcast_session_id: {
                        n: 2,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      thumbnail_data: {
                        n: 3,
                        br: _.d.readBytes,
                        bw: _.h.writeBytes,
                      },
                      thumbnail_width: {
                        n: 4,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      thumbnail_height: {
                        n: 5,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_SendThumbnailToRelay_Notification";
            }),
            t
          );
        })(B),
        x = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcaster_steamid || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcaster_steamid: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_ViewerBroadcastInvite_Notification";
            }),
            t
          );
        })(B),
        P = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.chat_id || _.a(t.M()),
              B.initialize(n, r, 0, -1, [4], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      chat_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      view_url_template: {
                        n: 3,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      flair_group_ids: {
                        n: 4,
                        r: !0,
                        q: !0,
                        br: _.d.readUint32,
                        bw: _.h.writeRepeatedUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastChatInfo_Response";
            }),
            t
          );
        })(B),
        G = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.chat_id || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      chat_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      message: {
                        n: 2,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      instance_id: {
                        n: 3,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      language: {
                        n: 4,
                        d: 0,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      country_code: {
                        n: 5,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_PostChatMessage_Request";
            }),
            t
          );
        })(B),
        A = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.persona_name || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      persona_name: {
                        n: 1,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      in_game: { n: 2, br: _.d.readBool, bw: _.h.writeBool },
                      result: { n: 3, br: _.d.readInt32, bw: _.h.writeInt32 },
                      cooldown_time_seconds: {
                        n: 4,
                        br: _.d.readInt32,
                        bw: _.h.writeInt32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_PostChatMessage_Response";
            }),
            t
          );
        })(B),
        D = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.chat_id || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      chat_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      flair: { n: 2, br: _.d.readString, bw: _.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_UpdateChatMessageFlair_Request";
            }),
            t
          );
        })(B),
        L = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.result || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      result: { n: 1, br: _.d.readInt32, bw: _.h.writeInt32 },
                      chat_id: {
                        n: 2,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      flair: { n: 3, br: _.d.readString, bw: _.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_UpdateChatMessageFlair_Response";
            }),
            t
          );
        })(B),
        k = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.chat_id || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      chat_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      user_steamid: {
                        n: 2,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      muted: { n: 3, br: _.d.readBool, bw: _.h.writeBool },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_MuteBroadcastChatUser_Request";
            }),
            t
          );
        })(B),
        V = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return B.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_MuteBroadcastChatUser_Response";
            }),
            t
          );
        })(B),
        q = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.chat_id || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      chat_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      user_steamid: {
                        n: 2,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_RemoveUserChatText_Request";
            }),
            t
          );
        })(B),
        H = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return B.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_RemoveUserChatText_Response";
            }),
            t
          );
        })(B),
        K = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.persona_names || _.a(t.M()),
              B.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { persona_names: { n: 1, c: Y, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastChatUserNames_Response";
            }),
            t
          );
        })(B),
        Y = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.steam_id || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steam_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      persona: {
                        n: 2,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastChatUserNames_Response_PersonaName";
            }),
            t
          );
        })(B),
        $ = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_clip_id || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_clip_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_StartBuildClip_Response";
            }),
            t
          );
        })(B),
        J = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return B.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBuildClipStatus_Response";
            }),
            t
          );
        })(B),
        X = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return B.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_SetClipDetails_Response";
            }),
            t
          );
        })(B),
        Q = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_clip_id || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_clip_id: {
                        n: 1,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      video_id: {
                        n: 2,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      channel_id: {
                        n: 3,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      app_id: { n: 4, br: _.d.readUint32, bw: _.h.writeUint32 },
                      accountid_broadcaster: {
                        n: 5,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      accountid_clipmaker: {
                        n: 6,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      video_description: {
                        n: 7,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      start_time: {
                        n: 8,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      length_milliseconds: {
                        n: 9,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      thumbnail_path: {
                        n: 10,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetClipDetails_Response";
            }),
            t
          );
        })(B),
        Z = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return B.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_SetRTMPInfo_Response";
            }),
            t
          );
        })(B),
        ee = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_permission || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_permission: {
                        n: 1,
                        br: _.d.readInt32,
                        bw: _.h.writeInt32,
                      },
                      rtmp_host: {
                        n: 2,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      rtmp_token: {
                        n: 3,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      broadcast_delay: {
                        n: 4,
                        br: _.d.readInt32,
                        bw: _.h.writeInt32,
                      },
                      app_id: { n: 5, br: _.d.readUint32, bw: _.h.writeUint32 },
                      required_app_id: {
                        n: 6,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      broadcast_chat_permission: {
                        n: 7,
                        br: _.d.readEnum,
                        bw: _.h.writeEnum,
                      },
                      broadcast_buffer: {
                        n: 8,
                        br: _.d.readInt32,
                        bw: _.h.writeInt32,
                      },
                      steamid: {
                        n: 9,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      chat_rate_limit: {
                        n: 10,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      enable_replay: {
                        n: 11,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                      is_partner_chat_only: {
                        n: 12,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetRTMPInfo_Response";
            }),
            t
          );
        })(B),
        te = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.upload_stats || _.a(t.M()),
              B.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { upload_stats: { n: 1, c: re, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastUploadStats_Response";
            }),
            t
          );
        })(B),
        re = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.upload_result || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      upload_result: {
                        n: 1,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      time_stopped: {
                        n: 2,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      seconds_uploaded: {
                        n: 3,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      max_viewers: {
                        n: 4,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      resolution_x: {
                        n: 5,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      resolution_y: {
                        n: 6,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      avg_bandwidth: {
                        n: 7,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      total_bytes: {
                        n: 8,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      app_id: { n: 9, br: _.d.readUint32, bw: _.h.writeUint32 },
                      total_unique_viewers: {
                        n: 10,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      total_seconds_watched: {
                        n: 11,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      time_started: {
                        n: 12,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      upload_id: {
                        n: 13,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      local_address: {
                        n: 14,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      remote_address: {
                        n: 15,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      frames_per_second: {
                        n: 16,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      num_representations: {
                        n: 17,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      app_name: {
                        n: 18,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      is_replay: { n: 19, br: _.d.readBool, bw: _.h.writeBool },
                      session_id: {
                        n: 20,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastUploadStats_Response_UploadStats";
            }),
            t
          );
        })(B),
        ne = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.viewer_stats || _.a(t.M()),
              B.initialize(n, r, 0, -1, [1, 2], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      viewer_stats: { n: 1, c: ie, r: !0, q: !0 },
                      country_stats: { n: 2, c: ae, r: !0, q: !0 },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastViewerStats_Response";
            }),
            t
          );
        })(B),
        ie = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.time || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      time: { n: 1, br: _.d.readUint32, bw: _.h.writeUint32 },
                      num_viewers: {
                        n: 2,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastViewerStats_Response_ViewerStats";
            }),
            t
          );
        })(B),
        ae = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.country_code || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      country_code: {
                        n: 1,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      num_viewers: {
                        n: 2,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastViewerStats_Response_CountryStats";
            }),
            t
          );
        })(B),
        oe = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return B.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCStartResult_Response";
            }),
            t
          );
        })(B),
        se = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return B.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCStopped_Response";
            }),
            t
          );
        })(B),
        ue = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return B.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCSetAnswer_Response";
            }),
            t
          );
        })(B),
        ce = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.sdp_mid || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      sdp_mid: {
                        n: 1,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      sdp_mline_index: {
                        n: 2,
                        br: _.d.readInt32,
                        bw: _.h.writeInt32,
                      },
                      candidate: {
                        n: 3,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTC_Candidate";
            }),
            t
          );
        })(B),
        de = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return B.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCAddHostCandidate_Response";
            }),
            t
          );
        })(B),
        le = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return B.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCAddViewerCandidate_Response";
            }),
            t
          );
        })(B),
        me = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.candidate_generation || _.a(t.M()),
              B.initialize(n, r, 0, -1, [2], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      candidate_generation: {
                        n: 1,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      candidates: { n: 2, c: ce, r: !0, q: !0 },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCGetHostCandidates_Response";
            }),
            t
          );
        })(B),
        fe = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_session_id || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_session_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCNeedTURNServer_Notification";
            }),
            t
          );
        })(B),
        pe = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.turn_server || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      turn_server: {
                        n: 1,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCLookupTURNServer_Response";
            }),
            t
          );
        })(B),
        be = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_session_id || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_session_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      webrtc_session_id: {
                        n: 2,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      viewer_steamid: {
                        n: 3,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      viewer_token: {
                        n: 4,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCStart_Notification";
            }),
            t
          );
        })(B),
        he = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_session_id || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_session_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      webrtc_session_id: {
                        n: 2,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      answer: { n: 3, br: _.d.readString, bw: _.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCSetAnswer_Notification";
            }),
            t
          );
        })(B),
        _e = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_session_id || _.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_session_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      webrtc_session_id: {
                        n: 2,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      candidate: { n: 3, c: ce },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCAddViewerCandidate_Notification";
            }),
            t
          );
        })(B);
      !(function (e) {
        (e.BeginBroadcastSession = function (e, t) {
          return e.SendMsg("Broadcast.BeginBroadcastSession#1", t, y, {
            ePrivilege: 1,
          });
        }),
          (e.EndBroadcastSession = function (e, t) {
            return e.SendMsg("Broadcast.EndBroadcastSession#1", t, g, {
              ePrivilege: 1,
            });
          }),
          (e.StartBroadcastUpload = function (e, t) {
            return e.SendMsg("Broadcast.StartBroadcastUpload#1", t, w, {
              ePrivilege: 1,
            });
          }),
          (e.NotifyBroadcastUploadStop = function (e, t) {
            return e.SendNotification(
              "Broadcast.NotifyBroadcastUploadStop#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.WatchBroadcast = function (e, t) {
            return e.SendMsg("Broadcast.WatchBroadcast#1", t, z, {
              ePrivilege: 2,
            });
          }),
          (e.HeartbeatBroadcast = function (e, t) {
            return e.SendNotification("Broadcast.HeartbeatBroadcast#1", t, {
              ePrivilege: 2,
            });
          }),
          (e.StopWatchingBroadcast = function (e, t) {
            return e.SendNotification("Broadcast.StopWatchingBroadcast#1", t, {
              ePrivilege: 2,
            });
          }),
          (e.GetBroadcastStatus = function (e, t) {
            return e.SendMsg("Broadcast.GetBroadcastStatus#1", t, S, {
              ePrivilege: 2,
            });
          }),
          (e.GetBroadcastThumbnail = function (e, t) {
            return e.SendMsg("Broadcast.GetBroadcastThumbnail#1", t, M, {
              ePrivilege: 2,
            });
          }),
          (e.InviteToBroadcast = function (e, t) {
            return e.SendMsg("Broadcast.InviteToBroadcast#1", t, C, {
              ePrivilege: 1,
            });
          }),
          (e.SendBroadcastStateToServer = function (e, t) {
            return e.SendMsg("Broadcast.SendBroadcastStateToServer#1", t, R, {
              ePrivilege: 1,
            });
          }),
          (e.NotifyBroadcastSessionHeartbeat = function (e, t) {
            return e.SendNotification(
              "Broadcast.NotifyBroadcastSessionHeartbeat#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.GetBroadcastChatInfo = function (e, t) {
            return e.SendMsg("Broadcast.GetBroadcastChatInfo#1", t, P, {
              ePrivilege: 2,
            });
          }),
          (e.PostChatMessage = function (e, t) {
            return e.SendMsg("Broadcast.PostChatMessage#1", t, A, {
              ePrivilege: 3,
            });
          }),
          (e.UpdateChatMessageFlair = function (e, t) {
            return e.SendMsg("Broadcast.UpdateChatMessageFlair#1", t, L, {
              ePrivilege: 1,
            });
          }),
          (e.MuteBroadcastChatUser = function (e, t) {
            return e.SendMsg("Broadcast.MuteBroadcastChatUser#1", t, V, {
              ePrivilege: 3,
            });
          }),
          (e.RemoveUserChatText = function (e, t) {
            return e.SendMsg("Broadcast.RemoveUserChatText#1", t, H, {
              ePrivilege: 3,
            });
          }),
          (e.GetBroadcastChatUserNames = function (e, t) {
            return e.SendMsg("Broadcast.GetBroadcastChatUserNames#1", t, K, {
              ePrivilege: 1,
            });
          }),
          (e.StartBuildClip = function (e, t) {
            return e.SendMsg("Broadcast.StartBuildClip#1", t, $, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBuildClipStatus = function (e, t) {
            return e.SendMsg("Broadcast.GetBuildClipStatus#1", t, J, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SetClipDetails = function (e, t) {
            return e.SendMsg("Broadcast.SetClipDetails#1", t, X, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetClipDetails = function (e, t) {
            return e.SendMsg("Broadcast.GetClipDetails#1", t, Q, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SetRTMPInfo = function (e, t) {
            return e.SendMsg("Broadcast.SetRTMPInfo#1", t, Z, {
              ePrivilege: 1,
            });
          }),
          (e.GetRTMPInfo = function (e, t) {
            return e.SendMsg("Broadcast.GetRTMPInfo#1", t, ee, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.NotifyWebRTCHaveTURNServer = function (e, t) {
            return e.SendNotification(
              "Broadcast.NotifyWebRTCHaveTURNServer#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.WebRTCStartResult = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCStartResult#1", t, oe, {
              ePrivilege: 1,
            });
          }),
          (e.WebRTCStopped = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCStopped#1", t, se, {
              ePrivilege: 1,
            });
          }),
          (e.WebRTCSetAnswer = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCSetAnswer#1", t, ue, {
              ePrivilege: 1,
            });
          }),
          (e.WebRTCLookupTURNServer = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCLookupTURNServer#1", t, pe, {
              ePrivilege: 1,
            });
          }),
          (e.WebRTCAddHostCandidate = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCAddHostCandidate#1", t, de, {
              ePrivilege: 1,
            });
          }),
          (e.WebRTCAddViewerCandidate = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCAddViewerCandidate#1", t, le, {
              ePrivilege: 1,
            });
          }),
          (e.WebRTCGetHostCandidates = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCGetHostCandidates#1", t, me, {
              ePrivilege: 1,
            });
          }),
          (e.GetBroadcastUploadStats = function (e, t) {
            return e.SendMsg("Broadcast.GetBroadcastUploadStats#1", t, te, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastViewerStats = function (e, t) {
            return e.SendMsg("Broadcast.GetBroadcastViewerStats#1", t, ne, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          });
      })(j || (j = {})),
        (function (e) {
          (e.NotifyBroadcastViewerStateHandler = {
            name: "BroadcastClient.NotifyBroadcastViewerState#1",
            request: O,
          }),
            (e.NotifyWaitingBroadcastViewerHandler = {
              name: "BroadcastClient.NotifyWaitingBroadcastViewer#1",
              request: W,
            }),
            (e.NotifyBroadcastUploadStartedHandler = {
              name: "BroadcastClient.NotifyBroadcastUploadStarted#1",
              request: v,
            }),
            (e.NotifyStopBroadcastUploadHandler = {
              name: "BroadcastClient.NotifyStopBroadcastUpload#1",
              request: T,
            }),
            (e.NotifySessionClosedHandler = {
              name: "BroadcastClient.NotifySessionClosed#1",
              request: I,
            }),
            (e.NotifyViewerBroadcastInviteHandler = {
              name: "BroadcastClient.NotifyViewerBroadcastInvite#1",
              request: x,
            }),
            (e.NotifyBroadcastStatusHandler = {
              name: "BroadcastClient.NotifyBroadcastStatus#1",
              request: N,
            }),
            (e.NotifyBroadcastChannelLiveHandler = {
              name: "BroadcastClient.NotifyBroadcastChannelLive#1",
              request: U,
            }),
            (e.SendThumbnailToRelayHandler = {
              name: "BroadcastClient.SendThumbnailToRelay#1",
              request: E,
            }),
            (e.NotifyWebRTCNeedTURNServerHandler = {
              name: "BroadcastClient.NotifyWebRTCNeedTURNServer#1",
              request: fe,
            }),
            (e.NotifyWebRTCStartHandler = {
              name: "BroadcastClient.NotifyWebRTCStart#1",
              request: be,
            }),
            (e.NotifyWebRTCSetAnswerHandler = {
              name: "BroadcastClient.NotifyWebRTCSetAnswer#1",
              request: he,
            }),
            (e.NotifyWebRTCAddViewerCandidateHandler = {
              name: "BroadcastClient.NotifyWebRTCAddViewerCandidate#1",
              request: _e,
            });
        })(F || (F = {}));
      var Be = h.Message;
      var ye,
        ge = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_CreateBroadcastChannel_Response";
            }),
            t
          );
        })(Be),
        we = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      unique_name: {
                        n: 2,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      steamid: {
                        n: 3,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelID_Response";
            }),
            t
          );
        })(Be),
        ve = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return Be.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_SetBroadcastChannelProfile_Response";
            }),
            t
          );
        })(Be),
        Se = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.unique_name || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      unique_name: {
                        n: 1,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      owner_steamid: {
                        n: 2,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      name: { n: 3, br: _.d.readString, bw: _.h.writeString },
                      language: {
                        n: 4,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      headline: {
                        n: 5,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      summary: {
                        n: 6,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      schedule: {
                        n: 7,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      rules: { n: 8, br: _.d.readString, bw: _.h.writeString },
                      panels: { n: 9, br: _.d.readString, bw: _.h.writeString },
                      is_partnered: {
                        n: 10,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelProfile_Response";
            }),
            t
          );
        })(Be),
        Me = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.replace_image_hash || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      replace_image_hash: {
                        n: 1,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_SetBroadcastChannelImage_Response";
            }),
            t
          );
        })(Be),
        ze = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.images || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { images: { n: 1, c: Ce, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelImages_Response";
            }),
            t
          );
        })(Be),
        Ce = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.image_type || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      image_type: { n: 1, br: _.d.readEnum, bw: _.h.writeEnum },
                      image_path: {
                        n: 2,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      image_index: {
                        n: 3,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelImages_Response_Images";
            }),
            t
          );
        })(Be),
        Re = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.links || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { links: { n: 1, c: Oe, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelLinks_Response";
            }),
            t
          );
        })(Be),
        Oe = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.link_index || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      link_index: {
                        n: 1,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      url: { n: 2, br: _.d.readString, bw: _.h.writeString },
                      link_description: {
                        n: 3,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      left: { n: 4, br: _.d.readUint32, bw: _.h.writeUint32 },
                      top: { n: 5, br: _.d.readUint32, bw: _.h.writeUint32 },
                      width: { n: 6, br: _.d.readUint32, bw: _.h.writeUint32 },
                      height: { n: 7, br: _.d.readUint32, bw: _.h.writeUint32 },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelLinks_Response_Links";
            }),
            t
          );
        })(Be),
        je = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return Be.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_SetBroadcastChannelLinkRegions_Response";
            }),
            t
          );
        })(Be),
        Fe = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.is_live || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      is_live: { n: 1, br: _.d.readBool, bw: _.h.writeBool },
                      is_disabled: {
                        n: 2,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                      appid: { n: 3, br: _.d.readUint32, bw: _.h.writeUint32 },
                      viewers: {
                        n: 4,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      views: {
                        n: 5,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      broadcaster_steamid: {
                        n: 6,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      thumbnail_url: {
                        n: 7,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      followers: {
                        n: 8,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      subscribers: {
                        n: 9,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      unique_name: {
                        n: 10,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      broadcast_session_id: {
                        n: 11,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelStatus_Response";
            }),
            t
          );
        })(Be),
        We = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      unique_name: {
                        n: 2,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      name: { n: 3, br: _.d.readString, bw: _.h.writeString },
                      appid: { n: 4, br: _.d.readUint32, bw: _.h.writeUint32 },
                      viewers: {
                        n: 5,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      views: {
                        n: 6,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      thumbnail_url: {
                        n: 7,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      followers: {
                        n: 8,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      headline: {
                        n: 9,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      avatar_url: {
                        n: 10,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      broadcaster_steamid: {
                        n: 11,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      subscribers: {
                        n: 12,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      background_url: {
                        n: 13,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      is_featured: {
                        n: 14,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                      is_disabled: {
                        n: 15,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                      is_live: { n: 16, br: _.d.readBool, bw: _.h.writeBool },
                      language: {
                        n: 17,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      reports: {
                        n: 18,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      is_partnered: {
                        n: 19,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "GetBroadcastChannelEntry";
            }),
            t
          );
        })(Be),
        Te = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: We, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetFollowedChannels_Response";
            }),
            t
          );
        })(Be),
        Ie = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: We, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetSubscribedChannels_Response";
            }),
            t
          );
        })(Be),
        Ne = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.is_followed || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      is_followed: {
                        n: 1,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_FollowBroadcastChannel_Response";
            }),
            t
          );
        })(Be),
        Ue = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.is_subscribed || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      is_subscribed: {
                        n: 1,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_SubscribeBroadcastChannel_Response";
            }),
            t
          );
        })(Be),
        Ee = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return Be.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_ReportBroadcastChannel_Response";
            }),
            t
          );
        })(Be),
        xe = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.is_followed || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      is_followed: {
                        n: 1,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                      is_subscribed: {
                        n: 2,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelInteraction_Response";
            }),
            t
          );
        })(Be),
        Pe = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.appid || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [5], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      appid: { n: 1, br: _.d.readUint32, bw: _.h.writeUint32 },
                      name: { n: 2, br: _.d.readString, bw: _.h.writeString },
                      image: { n: 3, br: _.d.readString, bw: _.h.writeString },
                      viewers: {
                        n: 4,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      channels: { n: 5, c: We, r: !0, q: !0 },
                      release_date: {
                        n: 6,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      developer: {
                        n: 7,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      publisher: {
                        n: 8,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_Game";
            }),
            t
          );
        })(Be),
        Ge = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: Pe, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetGames_Response";
            }),
            t
          );
        })(Be),
        Ae = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: We, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetChannels_Response";
            }),
            t
          );
        })(Be),
        De = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcasters || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { broadcasters: { n: 1, c: Le, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelBroadcasters_Response";
            }),
            t
          );
        })(Be),
        Le = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.steamid || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      name: { n: 2, br: _.d.readString, bw: _.h.writeString },
                      rtmp_token: {
                        n: 3,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster";
            }),
            t
          );
        })(Be),
        ke = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.issuer_steamid || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      issuer_steamid: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      chatter_steamid: {
                        n: 2,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      time_expires: {
                        n: 3,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      permanent: { n: 4, br: _.d.readBool, bw: _.h.writeBool },
                      name: { n: 5, br: _.d.readString, bw: _.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_ChatBan";
            }),
            t
          );
        })(Be),
        Ve = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      chatter_steamid: {
                        n: 2,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      duration: {
                        n: 3,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      permanent: { n: 4, br: _.d.readBool, bw: _.h.writeBool },
                      undo: { n: 5, br: _.d.readBool, bw: _.h.writeBool },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_AddChatBan_Request";
            }),
            t
          );
        })(Be),
        qe = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return Be.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_AddChatBan_Response";
            }),
            t
          );
        })(Be),
        He = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: ke, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetChatBans_Response";
            }),
            t
          );
        })(Be),
        Ke = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      moderator_steamid: {
                        n: 2,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      undo: { n: 3, br: _.d.readBool, bw: _.h.writeBool },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_AddChatModerator_Request";
            }),
            t
          );
        })(Be),
        Ye = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return Be.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_AddChatModerator_Response";
            }),
            t
          );
        })(Be),
        $e = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetChatModerators_Request";
            }),
            t
          );
        })(Be),
        Je = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.steamid || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      name: { n: 2, br: _.d.readString, bw: _.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_ChatModerator";
            }),
            t
          );
        })(Be),
        Xe = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: Je, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetChatModerators_Response";
            }),
            t
          );
        })(Be),
        Qe = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return Be.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_AddWordBan_Response";
            }),
            t
          );
        })(Be),
        Ze = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      results: {
                        n: 1,
                        r: !0,
                        q: !0,
                        br: _.d.readString,
                        bw: _.h.writeRepeatedString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetWordBans_Response";
            }),
            t
          );
        })(Be),
        et = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_JoinChat_Request";
            }),
            t
          );
        })(Be),
        tt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.chat_id || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [3], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      chat_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      view_url_template: {
                        n: 2,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      flair_group_ids: {
                        n: 3,
                        r: !0,
                        q: !0,
                        br: _.d.readUint64String,
                        bw: _.h.writeRepeatedUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_JoinChat_Response";
            }),
            t
          );
        })(Be),
        rt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: We, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_Search_Response";
            }),
            t
          );
        })(Be),
        nt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.stream_live_email || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      stream_live_email: {
                        n: 1,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                      stream_live_notification: {
                        n: 2,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetSteamTVUserSettings_Response";
            }),
            t
          );
        })(Be),
        it = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return Be.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_SetSteamTVUserSettings_Response";
            }),
            t
          );
        })(Be),
        at = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: We, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetMyBroadcastChannels_Response";
            }),
            t
          );
        })(Be),
        ot = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcasts || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { broadcasts: { n: 1, c: We, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_Takeover";
            }),
            t
          );
        })(Be),
        st = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcasts || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcasts: { n: 1, c: We, r: !0, q: !0 },
                      appid: { n: 2, br: _.d.readUint32, bw: _.h.writeUint32 },
                      title: { n: 3, br: _.d.readString, bw: _.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_SingleGame";
            }),
            t
          );
        })(Be),
        ut = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.appid || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      appid: { n: 1, br: _.d.readUint32, bw: _.h.writeUint32 },
                      game_name: {
                        n: 2,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      broadcast: { n: 3, c: We },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "GameListEntry";
            }),
            t
          );
        })(Be),
        ct = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.entries || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      entries: { n: 1, c: ut, r: !0, q: !0 },
                      title: { n: 2, br: _.d.readString, bw: _.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_GameList";
            }),
            t
          );
        })(Be),
        dt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcasts || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcasts: { n: 1, c: We, r: !0, q: !0 },
                      title: { n: 2, br: _.d.readString, bw: _.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_QuickExplore";
            }),
            t
          );
        })(Be),
        lt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcasts || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcasts: { n: 1, c: We, r: !0, q: !0 },
                      title: { n: 2, br: _.d.readString, bw: _.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_ConveyorBelt";
            }),
            t
          );
        })(Be),
        mt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast: { n: 1, c: We },
                      title: { n: 2, br: _.d.readString, bw: _.h.writeString },
                      chat_group_id: {
                        n: 3,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_WatchParty";
            }),
            t
          );
        })(Be),
        ft = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast: { n: 1, c: We },
                      title: { n: 2, br: _.d.readString, bw: _.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_Developer";
            }),
            t
          );
        })(Be),
        pt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.title || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      title: { n: 1, br: _.d.readString, bw: _.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_Event";
            }),
            t
          );
        })(Be),
        bt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.template_type || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      template_type: {
                        n: 1,
                        br: _.d.readEnum,
                        bw: _.h.writeEnum,
                      },
                      takeover: { n: 2, c: ot },
                      single_game: { n: 3, c: st },
                      game_list: { n: 4, c: ct },
                      quick_explore: { n: 5, c: dt },
                      conveyor_belt: { n: 6, c: lt },
                      watch_party: { n: 7, c: mt },
                      developer: { n: 8, c: ft },
                      event: { n: 9, c: pt },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageContentRow";
            }),
            t
          );
        })(Be),
        ht = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.rows || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { rows: { n: 1, c: bt, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetHomePageContents_Response";
            }),
            t
          );
        })(Be),
        _t = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_clip_id || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_clip_id: {
                        n: 1,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      channel_id: {
                        n: 2,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      app_id: { n: 3, br: _.d.readUint32, bw: _.h.writeUint32 },
                      broadcaster_steamid: {
                        n: 4,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      creator_steamid: {
                        n: 5,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      video_description: {
                        n: 6,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      live_time: {
                        n: 7,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      length_ms: {
                        n: 8,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      thumbnail_path: {
                        n: 9,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_BroadcastClipInfo";
            }),
            t
          );
        })(Be),
        Bt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.clips || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      clips: { n: 1, c: _t, r: !0, q: !0 },
                      thumbnail_host: {
                        n: 2,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelClips_Response";
            }),
            t
          );
        })(Be),
        yt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.aggregation_delay_ms || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      aggregation_delay_ms: {
                        n: 1,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_AppCheer_Response";
            }),
            t
          );
        })(Be);
      !(function (e) {
        (e.CreateBroadcastChannel = function (e, t) {
          return e.SendMsg("SteamTV.CreateBroadcastChannel#1", t, ge, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
          (e.GetBroadcastChannelID = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelID#1", t, we, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.SetBroadcastChannelProfile = function (e, t) {
            return e.SendMsg("SteamTV.SetBroadcastChannelProfile#1", t, ve, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelProfile = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelProfile#1", t, Se, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.SetBroadcastChannelImage = function (e, t) {
            return e.SendMsg("SteamTV.SetBroadcastChannelImage#1", t, Me, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelImages = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelImages#1", t, ze, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.SetBroadcastChannelLinkRegions = function (e, t) {
            return e.SendMsg(
              "SteamTV.SetBroadcastChannelLinkRegions#1",
              t,
              je,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 }
            );
          }),
          (e.GetBroadcastChannelLinks = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelLinks#1", t, Re, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.GetBroadcastChannelBroadcasters = function (e, t) {
            return e.SendMsg(
              "SteamTV.GetBroadcastChannelBroadcasters#1",
              t,
              De,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 }
            );
          }),
          (e.GetFollowedChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetFollowedChannels#1", t, Te, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetSubscribedChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetSubscribedChannels#1", t, Ie, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelStatus = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelStatus#1", t, Fe, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.FollowBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.FollowBroadcastChannel#1", t, Ne, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SubscribeBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.SubscribeBroadcastChannel#1", t, Ue, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelClips = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelClips#1", t, Bt, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.ReportBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.ReportBroadcastChannel#1", t, Ee, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelInteraction = function (e, t) {
            return e.SendMsg(
              "SteamTV.GetBroadcastChannelInteraction#1",
              t,
              xe,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 }
            );
          }),
          (e.GetGames = function (e, t) {
            return e.SendMsg("SteamTV.GetGames#1", t, Ge, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetChannels#1", t, Ae, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.AddChatBan = function (e, t) {
            return e.SendMsg("SteamTV.AddChatBan#1", t, qe, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetChatBans = function (e, t) {
            return e.SendMsg("SteamTV.GetChatBans#1", t, He, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.AddChatModerator = function (e, t) {
            return e.SendMsg("SteamTV.AddChatModerator#1", t, Ye, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetChatModerators = function (e, t) {
            return e.SendMsg("SteamTV.GetChatModerators#1", t, Xe, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.AddWordBan = function (e, t) {
            return e.SendMsg("SteamTV.AddWordBan#1", t, Qe, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetWordBans = function (e, t) {
            return e.SendMsg("SteamTV.GetWordBans#1", t, Ze, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.JoinChat = function (e, t) {
            return e.SendMsg("SteamTV.JoinChat#1", t, tt, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.Search = function (e, t) {
            return e.SendMsg("SteamTV.Search#1", t, rt, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.GetSteamTVUserSettings = function (e, t) {
            return e.SendMsg("SteamTV.GetSteamTVUserSettings#1", t, nt, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SetSteamTVUserSettings = function (e, t) {
            return e.SendMsg("SteamTV.SetSteamTVUserSettings#1", t, it, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetMyBroadcastChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetMyBroadcastChannels#1", t, at, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetHomePageContents = function (e, t) {
            return e.SendMsg("SteamTV.GetHomePageContents#1", t, ht, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.AppCheer = function (e, t) {
            return e.SendMsg("SteamTV.AppCheer#1", t, yt, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(ye || (ye = {}));
      var gt,
        wt,
        vt = r("qiKp"),
        St = r("TLQK"),
        Mt = r("XxJJ"),
        zt = r("lkRc"),
        Ct = h.Message,
        Rt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.bincremental || _.a(t.M()),
              Ct.initialize(n, r, 0, -1, [2], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      bincremental: {
                        n: 1,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                      friends: { n: 2, c: Ot, r: !0, q: !0 },
                      max_friend_count: {
                        n: 3,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      active_friend_count: {
                        n: 4,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      friends_limit_hit: {
                        n: 5,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CMsgClientFriendsList";
            }),
            t
          );
        })(Ct),
        Ot = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.ulfriendid || _.a(t.M()),
              Ct.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      ulfriendid: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      efriendrelationship: {
                        n: 2,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CMsgClientFriendsList_Friend";
            }),
            t
          );
        })(Ct),
        jt = h.Message,
        Ft = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.groupid || _.a(t.M()),
              jt.initialize(n, r, 0, -1, [3], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      groupid: {
                        n: 1,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      name: { n: 2, br: _.d.readString, bw: _.h.writeString },
                      accountid_members: {
                        n: 3,
                        r: !0,
                        q: !0,
                        br: _.d.readUint32,
                        bw: _.h.writeRepeatedUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsListCategory";
            }),
            t
          );
        })(jt),
        Wt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.categories || _.a(t.M()),
              jt.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { categories: { n: 1, c: Ft, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsList_GetCategories_Response";
            }),
            t
          );
        })(jt),
        Tt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.accountid || _.a(t.M()),
              jt.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      accountid: {
                        n: 1,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      clanid: { n: 2, br: _.d.readUint32, bw: _.h.writeUint32 },
                      chat_group_id: {
                        n: 3,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsListFavoriteEntry";
            }),
            t
          );
        })(jt),
        It = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.favorites || _.a(t.M()),
              jt.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { favorites: { n: 1, c: Tt, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsList_GetFavorites_Response";
            }),
            t
          );
        })(jt),
        Nt = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return jt.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsList_SetFavorites_Response";
            }),
            t
          );
        })(jt),
        Ut = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.favorites || _.a(t.M()),
              jt.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { favorites: { n: 1, c: Tt, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsList_FavoritesChanged_Notification";
            }),
            t
          );
        })(jt),
        Et = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return jt.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsList_GetFriendsList_Request";
            }),
            t
          );
        })(jt),
        xt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.friendslist || _.a(t.M()),
              jt.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { friendslist: { n: 1, c: Rt } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsList_GetFriendsList_Response";
            }),
            t
          );
        })(jt);
      !(function (e) {
        (e.GetCategories = function (e, t) {
          return e.SendMsg("FriendsList.GetCategories#1", t, Wt, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
          (e.GetFriendsList = function (e, t) {
            return e.SendMsg("FriendsList.GetFriendsList#1", t, xt, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.GetFavorites#1", t, It, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.SetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.SetFavorites#1", t, Nt, {
              ePrivilege: 1,
            });
          });
      })(gt || (gt = {})),
        (function (e) {
          e.FavoritesChangedHandler = {
            name: "FriendsListClient.FavoritesChanged#1",
            request: Ut,
          };
        })(wt || (wt = {}));
      var Pt = r("oFam"),
        Gt = r("kyHq"),
        At = r("uobO"),
        Dt = (function () {
          function e() {
            (this.m_mapPlayerCache = new Map()),
              (this.m_strBannedWords = ""),
              (this.m_strProfanityWords = ""),
              (this.m_strCleanWords = ""),
              (this.m_strBannedPattern = ""),
              (this.m_strCleanPattern = ""),
              (this.m_regexBannedWords = null),
              (this.m_regexCleanWords = null),
              (this.m_bShownFilterTip = !1),
              (this.m_TextFilterPreferences = new Gt.j());
            var e = new Pt.a();
            (this.m_TextFilterPreferences.eTextFilterSetting = e.text_filter_setting()),
              (this.m_TextFilterPreferences.bIgnoreFriends = e.text_filter_ignore_friends()),
              (this.m_TextFilterWords = new Pt.n());
          }
          return (
            (e.prototype.Init = function (e, t, r) {
              return (
                void 0 === e && (e = 0),
                void 0 === t && (t = null),
                void 0 === r && (r = null),
                Object(n.b)(this, void 0, void 0, function () {
                  return Object(n.e)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          (this.m_unAccountID = e),
                          (this.m_Transport = t),
                          (this.m_Storage = r),
                          (this.m_strBannedWords = ""),
                          (this.m_strProfanityWords = ""),
                          (this.m_strCleanWords = ""),
                          [4, this.LoadFilter()]
                        );
                      case 1:
                        return n.sent(), [4, this.LoadTextFilterPreferences()];
                      case 2:
                        return n.sent(), [4, this.LoadTextFilterWords()];
                      case 3:
                        return n.sent(), [4, this.RequestUpdatedSettings()];
                      case 4:
                        return n.sent(), [4, this.RequestFriendsList()];
                      case 5:
                        return n.sent(), [4, this.LoadLanguage(zt.c.LANGUAGE)];
                      case 6:
                        return (
                          n.sent(),
                          "english" === zt.c.LANGUAGE
                            ? [3, 8]
                            : [4, this.LoadLanguage("english")]
                        );
                      case 7:
                        n.sent(), (n.label = 8);
                      case 8:
                        return this.OnFilterDataChanged(), [2];
                    }
                  });
                })
              );
            }),
            (e.prototype.LoadTextFilterPreferences = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e;
                return Object(n.e)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return this.m_Storage
                        ? [
                            4,
                            this.m_Storage.GetObject(
                              "CTextFilterStore_TextFilterPreferences"
                            ),
                          ]
                        : [3, 2];
                    case 1:
                      (e = t.sent()) && (this.m_TextFilterPreferences = e),
                        (t.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.SaveTextFilterPreferences = function () {
              this.m_Storage &&
                this.m_Storage.StoreObject(
                  "CTextFilterStore_TextFilterPreferences",
                  this.m_TextFilterPreferences
                );
            }),
            (e.prototype.LoadTextFilterWords = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e;
                return Object(n.e)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return this.m_Storage
                        ? [
                            4,
                            this.m_Storage.GetObject(
                              "CTextFilterStore_TextFilterWords"
                            ),
                          ]
                        : [3, 2];
                    case 1:
                      (e = t.sent()) &&
                        (this.m_TextFilterWords = Pt.n.fromObject(e)),
                        (t.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.SaveTextFilterWords = function () {
              this.m_Storage &&
                this.m_Storage.StoreObject(
                  "CTextFilterStore_TextFilterWords",
                  this.m_TextFilterWords.toObject()
                );
            }),
            (e.prototype.LoadFilter = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e, t;
                return Object(n.e)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return this.m_Storage
                        ? [
                            4,
                            this.m_Storage.GetObject(
                              "CTextFilterStore_strBannedPattern"
                            ),
                          ]
                        : [3, 3];
                    case 1:
                      return (
                        (e = r.sent()),
                        [
                          4,
                          this.m_Storage.GetObject(
                            "CTextFilterStore_strCleanPattern"
                          ),
                        ]
                      );
                    case 2:
                      (t = r.sent()),
                        null != e && null != t && this.BRebuildFilter(e, t),
                        (r.label = 3);
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.SaveFilter = function () {
              this.m_Storage &&
                (this.m_Storage.StoreObject(
                  "CTextFilterStore_strBannedPattern",
                  this.m_strBannedPattern
                ),
                this.m_Storage.StoreObject(
                  "CTextFilterStore_strCleanPattern",
                  this.m_strCleanPattern
                ));
            }),
            (e.prototype.RequestUpdatedSettings = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e, t, r, i, a, o, s, u;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (((e = new Pt.a()), 0 === this.m_unAccountID))
                        return [3, 7];
                      n.label = 1;
                    case 1:
                      return (
                        n.trys.push([1, 6, , 7]),
                        this.m_Transport
                          ? ((t = m.b.Init(Pt.b)),
                            [
                              4,
                              Pt.o.GetCommunityPreferences(this.m_Transport, t),
                            ])
                          : [3, 3]
                      );
                    case 2:
                      return (
                        (r = n.sent()), (e = r.Body().preferences()), [3, 5]
                      );
                    case 3:
                      return (
                        (s = {
                          sessionid: zt.c.SESSIONID,
                          origin: Object(zt.d)(),
                        }),
                        [
                          4,
                          d.a.get(
                            zt.c.COMMUNITY_BASE_URL +
                              "textfilter/ajaxgetcommunitypreferences",
                            { params: s, withCredentials: !0 }
                          ),
                        ]
                      );
                    case 4:
                      (u = n.sent()),
                        (e = Pt.a.fromObject(u.data.preferences)),
                        (n.label = 5);
                    case 5:
                      return [3, 7];
                    case 6:
                      return n.sent(), [3, 7];
                    case 7:
                      if (
                        (this.UpdateCommunityPreferences(e),
                        e.text_filter_words_revision() ===
                          this.m_TextFilterWords.text_filter_words_revision())
                      )
                        return [3, 15];
                      if (
                        ((i = new Pt.n()), 0 === e.text_filter_words_revision())
                      )
                        return [3, 14];
                      n.label = 8;
                    case 8:
                      return (
                        n.trys.push([8, 13, , 14]),
                        this.m_Transport
                          ? ((a = m.b.Init(Pt.e)),
                            [4, Pt.o.GetTextFilterWords(this.m_Transport, a)])
                          : [3, 10]
                      );
                    case 9:
                      return (o = n.sent()), (i = o.Body().words()), [3, 12];
                    case 10:
                      return (
                        (s = {
                          sessionid: zt.c.SESSIONID,
                          origin: Object(zt.d)(),
                        }),
                        [
                          4,
                          d.a.get(
                            zt.c.COMMUNITY_BASE_URL +
                              "textfilter/ajaxgettextfiltercustomwords",
                            { params: s, withCredentials: !0 }
                          ),
                        ]
                      );
                    case 11:
                      (u = n.sent()),
                        (i = Pt.n.fromObject(u.data.words)),
                        (n.label = 12);
                    case 12:
                      return [3, 14];
                    case 13:
                      return n.sent(), [3, 14];
                    case 14:
                      this.UpdateTextFilterWords(i), (n.label = 15);
                    case 15:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.UpdateCommunityPreferences = function (e) {
              var t = !1;
              e.text_filter_setting() !==
                this.m_TextFilterPreferences.eTextFilterSetting &&
                ((this.m_TextFilterPreferences.eTextFilterSetting = e.text_filter_setting()),
                (t = !0)),
                e.text_filter_ignore_friends() !==
                  this.m_TextFilterPreferences.bIgnoreFriends &&
                  ((this.m_TextFilterPreferences.bIgnoreFriends = e.text_filter_ignore_friends()),
                  (t = !0)),
                t && this.SaveTextFilterPreferences();
            }),
            Object.defineProperty(e.prototype, "TextFilterPreferences", {
              get: function () {
                return this.m_TextFilterPreferences;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.UpdateTextFilterWords = function (e) {
              (this.m_TextFilterWords = e), this.SaveTextFilterWords();
            }),
            (e.prototype.RequestFriendsList = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e, t, r, i, a;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (((e = new Rt()), 0 === this.m_unAccountID))
                        return [3, 7];
                      n.label = 1;
                    case 1:
                      return (
                        n.trys.push([1, 6, , 7]),
                        this.m_Transport
                          ? ((t = m.b.Init(Et)),
                            [4, gt.GetFriendsList(this.m_Transport, t)])
                          : [3, 3]
                      );
                    case 2:
                      return (
                        (r = n.sent()), (e = r.Body().friendslist()), [3, 5]
                      );
                    case 3:
                      return (
                        (i = {
                          sessionid: zt.c.SESSIONID,
                          origin: Object(zt.d)(),
                        }),
                        [
                          4,
                          d.a.get(
                            zt.c.COMMUNITY_BASE_URL +
                              "textfilter/ajaxgetfriendslist",
                            { params: i, withCredentials: !0 }
                          ),
                        ]
                      );
                    case 4:
                      (a = n.sent()),
                        (e = Rt.fromObject(a.data.friendslist)),
                        (n.label = 5);
                    case 5:
                      return [3, 7];
                    case 6:
                      return n.sent(), [3, 7];
                    case 7:
                      return this.SetFriendsList(e), [2];
                  }
                });
              });
            }),
            (e.prototype.SetFriendsList = function (e) {
              e.bincremental() || this.m_mapPlayerCache.clear();
              for (var t = 0, r = e.friends(); t < r.length; t++) {
                var n = r[t],
                  i = new b.a(n.ulfriendid());
                if (i.BIsIndividualAccount()) {
                  var a = n.efriendrelationship();
                  this.m_mapPlayerCache.set(i.GetAccountID(), a);
                }
              }
            }),
            (e.prototype.BIsFriend = function (e) {
              return (
                !!this.m_mapPlayerCache.has(e) &&
                3 == this.m_mapPlayerCache.get(e)
              );
            }),
            (e.prototype.LoadLanguage = function (e) {
              return Object(n.b)(this, void 0, void 0, function () {
                var t, r, i, a, o, s;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      (t = "1"),
                        (r =
                          zt.c.COMMUNITY_CDN_URL +
                          "textfilter/gettextfilterdictionary?type=banned&language=" +
                          e +
                          "&v=" +
                          t +
                          "&origin=" +
                          Object(zt.d)()),
                        (n.label = 1);
                    case 1:
                      return n.trys.push([1, 3, , 4]), [4, d.a.get(r)];
                    case 2:
                      return (
                        (o = n.sent()),
                        (this.m_strBannedWords += o.data),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (i = n.sent()),
                        console.error(
                          "Failed to load filter dictionary " + r,
                          i
                        ),
                        [3, 4]
                      );
                    case 4:
                      (r =
                        zt.c.COMMUNITY_CDN_URL +
                        "textfilter/gettextfilterdictionary?type=profanity&language=" +
                        e +
                        "&v=" +
                        t +
                        "&origin=" +
                        Object(zt.d)()),
                        (n.label = 5);
                    case 5:
                      return n.trys.push([5, 7, , 8]), [4, d.a.get(r)];
                    case 6:
                      return (
                        (o = n.sent()),
                        (this.m_strProfanityWords += o.data),
                        [3, 8]
                      );
                    case 7:
                      return (
                        (a = n.sent()),
                        console.error(
                          "Failed to load filter dictionary " + r,
                          a
                        ),
                        [3, 8]
                      );
                    case 8:
                      (r =
                        zt.c.COMMUNITY_CDN_URL +
                        "textfilter/gettextfilterdictionary?type=clean_public&language=" +
                        e +
                        "&v=" +
                        t +
                        "&origin=" +
                        Object(zt.d)()),
                        (n.label = 9);
                    case 9:
                      return n.trys.push([9, 11, , 12]), [4, d.a.get(r)];
                    case 10:
                      return (
                        (o = n.sent()),
                        (this.m_strCleanWords += o.data),
                        [3, 12]
                      );
                    case 11:
                      return (
                        (s = n.sent()),
                        console.error(
                          "Failed to load filter dictionary " + r,
                          s
                        ),
                        [3, 12]
                      );
                    case 12:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.AppendPattern = function (e, t) {
              return "" !== t && ("" !== e && (e += "|"), (e += t)), e;
            }),
            (e.prototype.CreatePattern = function (e) {
              var t = e.filter(function (e) {
                return "" !== e;
              });
              return t.length > 0 ? "\\b(" + t.join("|") + ")\\b" : "";
            }),
            (e.prototype.OnFilterDataChanged = function () {
              var e = new RegExp(/\s*[\r\n]+\s*/g),
                t = [],
                r = [];
              switch (this.m_TextFilterPreferences.eTextFilterSetting) {
                case 0:
                case 3:
                  break;
                case 2:
                  t = t.concat(this.m_strBannedWords.split(e));
                  break;
                default:
                  t = t.concat(
                    this.m_strProfanityWords.split(e),
                    this.m_strBannedWords.split(e)
                  );
              }
              (t = t.concat(
                this.m_TextFilterWords.text_filter_custom_banned_words()
              )),
                (r = (r = this.m_strCleanWords.split(e)).concat(
                  this.m_TextFilterWords.text_filter_custom_clean_words()
                ));
              var n = this.CreatePattern(t),
                i = this.CreatePattern(r);
              "" != i && (i = "^(" + i + ")$"),
                this.BRebuildFilter(n, i) && this.SaveFilter();
            }),
            (e.prototype.BRebuildFilter = function (e, t) {
              if (e === this.m_strBannedPattern && t === this.m_strCleanPattern)
                return !1;
              if (((this.m_regexBannedWords = null), "" !== e))
                try {
                  this.m_regexBannedWords = new RegExp(e, "ugi");
                } catch (e) {
                  console.warn("Couldn't compile textfilter bannedwords regex"),
                    Object(At.a)().ReportError(
                      new Error(
                        "Couldn't compile textfilter bannedwords regex: " + e
                      )
                    );
                }
              if (((this.m_regexCleanWords = null), "" !== t))
                try {
                  this.m_regexCleanWords = new RegExp(t, "ugi");
                } catch (e) {
                  console.warn("Couldn't compile textfilter cleanwords regex"),
                    Object(At.a)().ReportError(
                      new Error(
                        "Couldn't compile textfilter cleanwords regex: " + e
                      )
                    );
                }
              return (
                (this.m_strBannedPattern = e), (this.m_strCleanPattern = t), !0
              );
            }),
            (e.prototype.CreateProfanityReplacement = function (e) {
              return "♥".repeat(e);
            }),
            (e.prototype.BHasFilter = function () {
              return null != this.m_regexBannedWords;
            }),
            (e.prototype.BShownFilterTip = function () {
              return this.m_bShownFilterTip;
            }),
            (e.prototype.SetFilterTipShown = function (e) {
              this.m_bShownFilterTip = e;
            }),
            (e.prototype.FilterText = function (e, t) {
              var r = this;
              if (!this.m_regexBannedWords) return t;
              var n = 0;
              "string" == typeof e && "" !== e
                ? (n = new b.a(e).GetAccountID())
                : "number" == typeof e && (n = e);
              return !t ||
                n == this.m_unAccountID ||
                (this.m_TextFilterPreferences.bIgnoreFriends &&
                  this.BIsFriend(n))
                ? t
                : t.replace(this.m_regexBannedWords, function (e) {
                    return r.m_regexCleanWords &&
                      0 == e.search(r.m_regexCleanWords)
                      ? e
                      : r.CreateProfanityReplacement(e.length);
                  });
            }),
            Object(n.c)([i.C], e.prototype, "m_TextFilterPreferences", void 0),
            Object(n.c)([i.C], e.prototype, "m_mapPlayerCache", void 0),
            Object(n.c)([i.C], e.prototype, "m_regexBannedWords", void 0),
            Object(n.c)([i.C], e.prototype, "m_regexCleanWords", void 0),
            Object(n.c)([i.k], e.prototype, "UpdateCommunityPreferences", null),
            Object(n.c)([i.k], e.prototype, "SetFriendsList", null),
            Object(n.c)([i.k], e.prototype, "BRebuildFilter", null),
            e
          );
        })(),
        Lt = (function () {
          function e() {
            this.m_mapChats = new Map();
          }
          return (
            (e.prototype.GetChat = function (e, t) {
              return this.m_mapChats.get(e) || this.m_mapChats.get(t);
            }),
            (e.prototype.GetOrCreateChat = function (e, t) {
              var r = this.GetChat(e, t);
              return r || ((r = new kt()), this.m_mapChats.set(e || t, r)), r;
            }),
            Object(n.c)([i.C], e.prototype, "m_mapChats", void 0),
            e
          );
        })(),
        kt = (function () {
          function e() {
            (this.m_ulBroadcastChannelID = ""),
              (this.m_ulChatID = ""),
              (this.m_strFlairGroupID = ""),
              (this.m_bAutoScroll = !0),
              (this.m_ulBroadcastID = ""),
              (this.m_ulBroadcastSteamID = ""),
              (this.m_tsFirstRequest = null),
              (this.m_nFromFirstRequestMS = 0),
              (this.m_nNextChatTS = 0),
              (this.m_cConsecutiveErrors = 0),
              (this.m_nNudgeFactorMS = 0),
              (this.m_nLastSleepMS = 0),
              (this.m_bReconnecting = !1),
              (this.m_unInstanceID = Math.floor(4294967296 * Math.random())),
              (this.m_strUserSteamID = ""),
              (this.m_regexUserEmoticons = null),
              (this.m_chatScheduledFunc = null),
              (this.m_webAPIInterface = null),
              (this.m_textFilterStore = null),
              (this.m_bHasAddedWelcomeChat = !1),
              (this.m_mapMutedUsers = {}),
              (this.m_mapChannelModeratorUsers = new Map()),
              (this.m_mapBroadcastModeratorUsers = new Map()),
              (this.m_nRateLimitSeconds = 0),
              (this.m_bRateLimited = !1),
              (this.m_rgChatMessages = []),
              (this.m_webAPIInterface = new p.a(
                zt.c.WEBAPI_BASE_URL,
                zt.h.webapi_token
              ));
          }
          return (
            (e.prototype.InitTextFilter = function () {
              this.m_textFilterStore = new Dt();
              var e = 0;
              "" !== zt.h.steamid && (e = new b.a(zt.h.steamid).GetAccountID());
              this.m_textFilterStore.Init(e, null, new f.a());
            }),
            Object.defineProperty(e.prototype, "TextFilterStore", {
              get: function () {
                return this.m_textFilterStore;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.GetBroadcastSteamID = function () {
              return this.m_ulBroadcastSteamID;
            }),
            (e.prototype.GetUserSteamID = function () {
              return this.m_strUserSteamID;
            }),
            (e.prototype.StartForSteamID = function (e, t) {
              (this.m_webAPIInterface = new p.a(
                zt.c.WEBAPI_BASE_URL,
                zt.h.webapi_token
              )),
                (this.m_ulBroadcastSteamID = e),
                (this.m_ulBroadcastID = t),
                this.InitTextFilter(),
                this.RequestChatInfo();
            }),
            (e.prototype.StartForChannel = function (e) {
              (this.m_webAPIInterface = new p.a(
                zt.c.WEBAPI_BASE_URL,
                zt.h.webapi_token
              )),
                (this.m_ulBroadcastChannelID = e),
                (this.m_strUserSteamID = zt.h.steamid),
                this.InitTextFilter(),
                this.JoinChannelChat();
            }),
            (e.prototype.Stop = function () {
              this.m_chatScheduledFunc && this.m_chatScheduledFunc.Cancel();
            }),
            (e.prototype.SendMessage = function (e) {
              return Object(n.b)(this, void 0, void 0, function () {
                var t,
                  r,
                  i,
                  a,
                  o,
                  s,
                  u,
                  c = this;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (0 == (t = e.trim()).length) return [2];
                      n.label = 1;
                    case 1:
                      return (
                        n.trys.push([1, 6, , 7]),
                        (r = void 0),
                        (i = void 0),
                        (a = void 0),
                        this.m_webApiToken
                          ? ((o = new FormData()).append(
                              "chat_id",
                              this.m_ulChatID
                            ),
                            o.append("message", t),
                            o.append(
                              "instance_id",
                              this.m_unInstanceID.toString()
                            ),
                            [
                              4,
                              d.a.post(
                                zt.c.WEBAPI_BASE_URL +
                                  "IBroadcastService/PostChatMessage/v0001?access_token=" +
                                  this.m_webApiToken,
                                o
                              ),
                            ])
                          : [3, 3]
                      );
                    case 2:
                      return (
                        (i = n.sent()), (a = i.data && i.data.response), [3, 5]
                      );
                    case 3:
                      return (
                        (s = m.b.Init(G)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          message: t,
                          instance_id: this.m_unInstanceID.toString(),
                        }),
                        [
                          4,
                          j.PostChatMessage(
                            this.m_webAPIInterface.GetServiceTransport(),
                            s
                          ),
                        ]
                      );
                    case 4:
                      (r = n.sent()),
                        (a = {
                          result: r.GetEResult(),
                          cooldown_time_seconds: r
                            .Body()
                            .cooldown_time_seconds(),
                          in_game: r.Body().in_game(),
                          persona_name: r.Body().persona_name(),
                        }),
                        (n.label = 5);
                    case 5:
                      return a && a.result && 1 != a.result
                        ? ((u = ""),
                          (u =
                            17 == a.result
                              ? Object(St.f)("#BroadcastChat_YouMuted")
                              : 84 == a.result
                              ? Object(St.f)(
                                  "#BroadcastChat_Cooldown",
                                  a.cooldown_time_seconds
                                )
                              : Object(St.f)(
                                  "#BroadcastChat_FailedToSendMsg",
                                  t
                                )),
                          this.m_rgChatMessages.push({
                            type: l.a.Error,
                            msg: u,
                            client_ts: Number(new Date()),
                            instance_id: this.m_unInstanceID,
                            in_game: a.in_game,
                            persona_name: a.persona_name,
                            steamid: "",
                          }),
                          [2])
                        : (this.m_nRateLimitSeconds ||
                            (this.m_nRateLimitSeconds =
                              a.cooldown_time_seconds),
                          this.m_nRateLimitSeconds &&
                            ((this.m_bRateLimited = !0),
                            setTimeout(function () {
                              return (c.m_bRateLimited = !1);
                            }, 1e3 * this.m_nRateLimitSeconds)),
                          [3, 7]);
                    case 6:
                      return (
                        n.sent(),
                        this.m_rgChatMessages.push({
                          type: l.a.Error,
                          msg: Object(St.f)(
                            "#BroadcastChat_FailedToSendMsg",
                            t
                          ),
                          client_ts: Number(new Date()),
                          instance_id: this.m_unInstanceID,
                          in_game: !1,
                          persona_name: "",
                          steamid: "",
                        }),
                        [3, 7]
                      );
                    case 7:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.RequestChatInfo = function (e) {
              return Object(n.b)(this, void 0, void 0, function () {
                var t,
                  r,
                  a,
                  o = this;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      (this.m_cConsecutiveErrors = 0),
                        (this.m_bReconnecting = !1),
                        (n.label = 1);
                    case 1:
                      return (
                        n.trys.push([1, 3, , 4]),
                        (t = {
                          steamid: this.m_ulBroadcastSteamID,
                          broadcastid: this.m_ulBroadcastID,
                          sessionid: zt.c.SESSIONID,
                        }),
                        [
                          4,
                          d.a.get(
                            zt.c.CHAT_BASE_URL + "broadcast/getchatinfo",
                            {
                              params: t,
                              withCredentials: !0,
                              cancelToken: null == e ? void 0 : e.token,
                            }
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (r = n.sent()),
                        (e && e.token.reason) ||
                          Object(i.G)(function () {
                            var e = r.data;
                            (o.m_strChatURL = e.view_url_template),
                              (o.m_ulChatID = e.chat_id),
                              (o.m_strFlairGroupID =
                                e.flair_group_ids && e.flair_group_ids[0]),
                              e.blocked &&
                                console.log("User is blocked from chat"),
                              e.steamid && (o.m_strUserSteamID = e.steamid),
                              e.token && (o.m_webApiToken = e.token),
                              e.emoticons && o.SetOwnedEmoticons(e.emoticons),
                              o.m_bHasAddedWelcomeChat ||
                                (o.m_rgChatMessages.push({
                                  type: l.a.Notification,
                                  msg: Object(St.f)(
                                    "#BroadcastChat_DefaultMessage"
                                  ),
                                  client_ts: Number(new Date()),
                                  instance_id: o.m_unInstanceID,
                                  in_game: !1,
                                  persona_name: "",
                                  steamid: "",
                                }),
                                (o.m_bHasAddedWelcomeChat = !0)),
                              o.m_mapBroadcastModeratorUsers.clear(),
                              e.moderators_steamid &&
                                e.moderators_steamid.forEach(function (e) {
                                  return o.m_mapBroadcastModeratorUsers.set(
                                    e,
                                    !0
                                  );
                                }),
                              (o.m_chatScheduledFunc = new vt.b()),
                              o.m_chatScheduledFunc.Schedule(0, o.RequestLoop);
                          }),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (a = n.sent()),
                        console.error(a),
                        console.log("Failed to get chat info!"),
                        [3, 4]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.JoinChannelChat = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e, t, r;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        n.trys.push([0, 2, , 3]),
                        (e = m.b.Init(et)).SetBodyFields({
                          broadcast_channel_id: this.m_ulBroadcastChannelID,
                        }),
                        [
                          4,
                          ye.JoinChat(
                            this.m_webAPIInterface.GetServiceTransport(),
                            e
                          ),
                        ]
                      );
                    case 1:
                      return (t = n.sent()).Body().chat_id &&
                        t.Body().view_url_template
                        ? ((this.m_strChatURL = t.Body().view_url_template()),
                          (this.m_ulChatID = t.Body().chat_id()),
                          (this.m_strFlairGroupID =
                            t.Body().flair_group_ids() &&
                            t.Body().flair_group_ids()[0]),
                          this.FetchChatModerators(),
                          (this.m_rgChatMessages = []),
                          this.m_rgChatMessages.push({
                            type: l.a.Notification,
                            msg: Object(St.f)("#BroadcastChat_DefaultMessage"),
                            client_ts: Number(new Date()),
                            instance_id: this.m_unInstanceID,
                            in_game: !1,
                            persona_name: "",
                            steamid: "",
                          }),
                          (this.m_bHasAddedWelcomeChat = !0),
                          (this.m_chatScheduledFunc = new vt.b()),
                          this.m_chatScheduledFunc.Schedule(
                            0,
                            this.RequestLoop
                          ),
                          [3, 3])
                        : (console.log("Failed to join channel chat"), [2]);
                    case 2:
                      return (
                        (r = n.sent()),
                        console.error(r),
                        console.log("Failed to join chat!"),
                        [3, 3]
                      );
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.FetchChatModerators = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e, t, r, i;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (e = m.b.Init($e)).SetBodyFields({
                          broadcast_channel_id: this.m_ulBroadcastChannelID,
                        }),
                        [
                          4,
                          ye.GetChatModerators(
                            this.m_webAPIInterface.GetServiceTransport(),
                            e
                          ),
                        ]
                      );
                    case 1:
                      return (
                        (t = n.sent()),
                        (r = t.Body().results()),
                        (i = new Map()),
                        r.forEach(function (e) {
                          i.set(e.steamid(), !0);
                        }),
                        (this.m_mapChannelModeratorUsers = i),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.RequestLoop = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e,
                  t,
                  r,
                  i,
                  a,
                  o,
                  s,
                  u,
                  c,
                  m,
                  f,
                  p,
                  b,
                  h,
                  _,
                  B = this;
                return Object(n.e)(this, function (y) {
                  switch (y.label) {
                    case 0:
                      (e = {}),
                        (t = this.m_strChatURL.replace(
                          "{0}",
                          this.m_nNextChatTS.toString()
                        )) == this.m_strChatURL &&
                          this.m_nNextChatTS > 0 &&
                          (e.t = this.m_nNextChatTS),
                        (y.label = 1);
                    case 1:
                      return (
                        y.trys.push([1, 3, , 4]), [4, d.a.get(t, { params: e })]
                      );
                    case 2:
                      if (
                        ((r = y.sent()),
                        (i = r.data),
                        (this.m_cConsecutiveErrors = 0),
                        (a = i.messages
                          .map(function (e) {
                            return Object(n.a)(Object(n.a)({}, e), {
                              type: l.a.Chat,
                              client_ts: Number(new Date()),
                            });
                          })
                          .filter(function (e) {
                            return !B.IsUserMutedLocally(e.steamid);
                          })),
                        (_ = this.m_rgChatMessages).push.apply(_, a),
                        (o = this.m_bAutoScroll ? 150 : 300),
                        this.m_rgChatMessages.length > o &&
                          this.m_rgChatMessages.splice(
                            0,
                            this.m_rgChatMessages.length - o
                          ),
                        i.muted)
                      )
                        for (s = 0, u = i.muted; s < u.length; s++)
                          (c = u[s]),
                            (m =
                              c.muted == this.m_strUserSteamID
                                ? Object(St.f)(
                                    "#BroadcastChat_YouMuted",
                                    c.persona_name
                                  )
                                : Object(St.f)(
                                    "#BroadcastChat_UserMuted",
                                    c.persona_name
                                  )),
                            this.m_rgChatMessages.push({
                              type: l.a.Notification,
                              msg: m,
                              client_ts: Number(new Date()),
                              instance_id: this.m_unInstanceID,
                              in_game: !1,
                              persona_name: "",
                              steamid: "",
                            });
                      if (i.remove_msgs)
                        for (f = 0, p = i.remove_msgs; f < p.length; f++)
                          (b = p[f]), this.RemoveUserMessagesLocal(b.steamid);
                      if (
                        ((h = 0),
                        null == this.m_tsFirstRequest ||
                          0 == this.m_nNextChatTS ||
                          i.initial_delay)
                      ) {
                        if ("undefined" === i.initial_delay)
                          return (
                            console.log(
                              "Need initial_delay to know when to request first chat message"
                            ),
                            [2]
                          );
                        (this.m_tsFirstRequest =
                          performance.now() + i.initial_delay),
                          (this.m_nFromFirstRequestMS = 0),
                          (this.m_nNextChatTS = i.next_request),
                          (h = i.initial_delay);
                      } else {
                        if (i.next_request < this.m_nNextChatTS)
                          return console.log("Next request in past"), [2];
                        (this.m_nFromFirstRequestMS +=
                          i.next_request - this.m_nNextChatTS),
                          (this.m_nNextChatTS = i.next_request),
                          (h =
                            this.m_tsFirstRequest +
                            this.m_nFromFirstRequestMS -
                            performance.now() +
                            this.m_nNudgeFactorMS);
                      }
                      return (
                        this.m_bReconnecting && (this.m_bReconnecting = !1),
                        (this.m_nLastSleepMS = h),
                        h < 0 && (h = 0),
                        this.m_chatScheduledFunc.Schedule(h, this.RequestLoop),
                        [3, 4]
                      );
                    case 3:
                      if (
                        (y.sent(),
                        console.log(
                          "Failed to get chat messages. Previous sleep set to: " +
                            this.m_nLastSleepMS +
                            " firstReq: " +
                            this.m_tsFirstRequest +
                            " firstFromRequest: " +
                            this.m_nFromFirstRequestMS +
                            " nudge: " +
                            this.m_nNudgeFactorMS
                        ),
                        this.m_cConsecutiveErrors++,
                        (this.m_nNudgeFactorMS += 10),
                        this.m_cConsecutiveErrors >= 4)
                      ) {
                        if (null == this.m_tsFirstRequest)
                          return (
                            this.m_rgChatMessages.push({
                              type: l.a.Error,
                              msg: Object(St.f)(
                                "#BroadcastChat_UnableToJoinChat"
                              ),
                              client_ts: Number(new Date()),
                              instance_id: this.m_unInstanceID,
                              in_game: !1,
                              persona_name: "",
                              steamid: "",
                            }),
                            [2]
                          );
                        (this.m_cConsecutiveErrors = 0),
                          (this.m_bReconnecting = !0),
                          this.SyncChat();
                      }
                      return (
                        this.m_chatScheduledFunc.Schedule(
                          500,
                          this.RequestLoop
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.GetUserEmoticons = function () {
              return this.m_regexUserEmoticons;
            }),
            (e.prototype.SetOwnedEmoticons = function (e) {
              for (var t = [], r = 0; r < e.length; r++) {
                var n = e[r];
                n.length >= 2 && ":" == n[0]
                  ? t.push(n.substr(1, n.length - 2))
                  : t.push(n);
              }
              var i = ":(" + t.join("|") + "):";
              this.m_regexUserEmoticons = new RegExp(i, "g");
            }),
            (e.prototype.UpdateBroadcastChatModerator = function (e, t, r) {
              return Object(n.b)(this, void 0, void 0, function () {
                var i, a, o;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [3, 6];
                    case 1:
                      return (
                        n.trys.push([1, 4, , 5]),
                        (i = m.b.Init(Ke)).SetBodyFields({
                          broadcast_channel_id: this.m_ulBroadcastChannelID,
                          moderator_steamid: e,
                          undo: !t,
                        }),
                        [
                          4,
                          ye.AddChatModerator(
                            this.m_webAPIInterface.GetServiceTransport(),
                            i
                          ),
                        ]
                      );
                    case 2:
                      return (
                        n.sent(),
                        (o = Object(St.f)(
                          t
                            ? "#BroadcastChat_AddedModerator"
                            : "#BroadcastChat_RemovedModerator",
                          r
                        )),
                        this.m_rgChatMessages.push({
                          type: l.a.Notification,
                          msg: o,
                        }),
                        [4, this.FetchChatModerators()]
                      );
                    case 3:
                      return n.sent(), [3, 5];
                    case 4:
                      return (
                        n.sent(),
                        (o = Object(St.f)(
                          t
                            ? "#BroadcastChat_AddModeratorFailed"
                            : "#BroadcastChat_RemoveModeratorFailed",
                          r
                        )),
                        this.m_rgChatMessages.push({ type: l.a.Error, msg: o }),
                        [3, 5]
                      );
                    case 5:
                      return [3, 10];
                    case 6:
                      (a = new FormData()).append(
                        "broadcaststeamid",
                        this.m_ulBroadcastSteamID
                      ),
                        a.append("moderatorsteamid", e),
                        a.append("bAdd", t ? "1" : "0"),
                        a.append("sessionid", zt.c.SESSIONID),
                        (n.label = 7);
                    case 7:
                      return (
                        n.trys.push([7, 9, , 10]),
                        [
                          4,
                          d.a.post(
                            zt.c.CHAT_BASE_URL +
                              "broadcast/ajaxupdatechannelmod",
                            a
                          ),
                        ]
                      );
                    case 8:
                      return (
                        n.sent(),
                        this.m_mapBroadcastModeratorUsers.set(e, t),
                        (o = Object(St.f)(
                          t
                            ? "#BroadcastChat_AddedModerator"
                            : "#BroadcastChat_RemovedModerator",
                          r
                        )),
                        this.m_rgChatMessages.push({
                          type: l.a.Notification,
                          msg: o,
                        }),
                        [3, 10]
                      );
                    case 9:
                      return (
                        n.sent(),
                        (o = Object(St.f)(
                          t
                            ? "#BroadcastChat_AddModeratorFailed"
                            : "#BroadcastChat_RemoveModeratorFailed",
                          r
                        )),
                        this.m_rgChatMessages.push({ type: l.a.Error, msg: o }),
                        [3, 10]
                      );
                    case 10:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.UpdateUserChatBan = function (e, t, r, i, a, o) {
              return Object(n.b)(this, void 0, void 0, function () {
                var s, u, c, l;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (s = this.m_ulBroadcastSteamID),
                        (u = this.m_strUserSteamID),
                        this.m_ulBroadcastChannelID
                          ? ((c = m.b.Init(Ve)).SetBodyFields({
                              broadcast_channel_id: this.m_ulBroadcastChannelID,
                              chatter_steamid: e,
                              duration: 3600 * r,
                              permanent: i,
                              undo: o,
                            }),
                            [
                              4,
                              ye.AddChatBan(
                                this.m_webAPIInterface.GetServiceTransport(),
                                c
                              ),
                            ])
                          : [3, 2]
                      );
                    case 1:
                      return n.sent(), [3, 6];
                    case 2:
                      (l = new FormData()).append("broadcaststeamid", s),
                        l.append("issuersteamid", u),
                        l.append("chattersteamid", e),
                        l.append("bantype", t),
                        l.append("duration", r.toString()),
                        l.append("perm", i ? "1" : "0"),
                        l.append("sessionid", zt.c.SESSIONID),
                        (n.label = 3);
                    case 3:
                      return (
                        n.trys.push([3, 5, , 6]),
                        [
                          4,
                          d.a.post(
                            zt.c.CHAT_BASE_URL + "broadcast/ajaxupdateusermute",
                            l
                          ),
                        ]
                      );
                    case 4:
                      return (
                        n.sent(),
                        0 == t
                          ? delete this.m_mapMutedUsers[e]
                          : (this.m_mapMutedUsers[e] = a),
                        [3, 6]
                      );
                    case 5:
                      return (
                        n.sent(),
                        console.log("Failed to update mute for " + a),
                        [3, 6]
                      );
                    case 6:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.MuteUserForSession = function (e, t) {
              return Object(n.b)(this, void 0, void 0, function () {
                var r, i, a;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (e == this.m_strUserSteamID) return [2];
                      if (this.m_ulBroadcastSteamID == e) return [2];
                      if (
                        ((r =
                          this.m_ulBroadcastSteamID == this.m_strUserSteamID),
                        this.m_mapMutedUsers[e])
                      )
                        return [3, 7];
                      (this.m_mapMutedUsers[e] = t), (n.label = 1);
                    case 1:
                      return (
                        n.trys.push([1, 6, , 7]),
                        this.m_webApiToken
                          ? ((i = new FormData()).append(
                              "chat_id",
                              this.m_ulChatID
                            ),
                            i.append("user_steamid", e),
                            i.append("muted", "1"),
                            [
                              4,
                              d.a.post(
                                zt.c.WEBAPI_BASE_URL +
                                  "IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=" +
                                  this.m_webApiToken,
                                i
                              ),
                            ])
                          : [3, 3]
                      );
                    case 2:
                      return n.sent(), [3, 5];
                    case 3:
                      return (
                        (a = m.b.Init(k)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          user_steamid: e,
                          muted: !0,
                        }),
                        [
                          4,
                          j.MuteBroadcastChatUser(
                            this.m_webAPIInterface.GetServiceTransport(),
                            a
                          ),
                        ]
                      );
                    case 4:
                      n.sent(), (n.label = 5);
                    case 5:
                      return [3, 7];
                    case 6:
                      return (
                        n.sent(),
                        r &&
                          (this.m_rgChatMessages.push({
                            type: l.a.Error,
                            msg: Object(St.f)(
                              "#BroadcastChat_UserMuteFailed",
                              t
                            ),
                            client_ts: Number(new Date()),
                            instance_id: this.m_unInstanceID,
                            in_game: !1,
                            persona_name: "",
                            steamid: "",
                          }),
                          delete this.m_mapMutedUsers[e]),
                        [3, 7]
                      );
                    case 7:
                      return (
                        r ||
                          this.m_rgChatMessages.push({
                            type: l.a.Notification,
                            msg: Object(St.f)(
                              "#BroadcastChat_UserMutedLocal",
                              t
                            ),
                            client_ts: Number(new Date()),
                            instance_id: this.m_unInstanceID,
                            in_game: !1,
                            persona_name: "",
                            steamid: "",
                          }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.UnmuteUserForSession = function (e, t) {
              return Object(n.b)(this, void 0, void 0, function () {
                var r, i;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (e == this.m_strUserSteamID) return [2];
                      if (
                        (this.m_mapMutedUsers[e] &&
                          delete this.m_mapMutedUsers[e],
                        !(this.m_ulBroadcastSteamID == this.m_strUserSteamID))
                      )
                        return [3, 8];
                      n.label = 1;
                    case 1:
                      return (
                        n.trys.push([1, 6, , 7]),
                        this.m_webApiToken
                          ? ((r = new FormData()).append(
                              "chat_id",
                              this.m_ulChatID
                            ),
                            r.append("user_steamid", e),
                            r.append("muted", "0"),
                            [
                              4,
                              d.a.post(
                                zt.c.WEBAPI_BASE_URL +
                                  "IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=" +
                                  this.m_webApiToken,
                                r
                              ),
                            ])
                          : [3, 3]
                      );
                    case 2:
                      return n.sent(), [3, 5];
                    case 3:
                      return (
                        (i = m.b.Init(k)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          user_steamid: e,
                          muted: !1,
                        }),
                        [
                          4,
                          j.MuteBroadcastChatUser(
                            this.m_webAPIInterface.GetServiceTransport(),
                            i
                          ),
                        ]
                      );
                    case 4:
                      n.sent(), (n.label = 5);
                    case 5:
                      return (
                        this.m_rgChatMessages.push({
                          type: l.a.Notification,
                          msg: Object(St.f)(
                            "#BroadcastChat_UserUnmutedLocal",
                            t
                          ),
                          client_ts: Number(new Date()),
                          instance_id: this.m_unInstanceID,
                          in_game: !1,
                          persona_name: "",
                          steamid: "",
                        }),
                        [3, 7]
                      );
                    case 6:
                      return (
                        n.sent(),
                        this.m_rgChatMessages.push({
                          type: l.a.Error,
                          msg: Object(St.f)(
                            "#BroadcastChat_UserUnmuteFailed",
                            t
                          ),
                          client_ts: Number(new Date()),
                          instance_id: this.m_unInstanceID,
                          in_game: !1,
                          persona_name: "",
                          steamid: "",
                        }),
                        [3, 7]
                      );
                    case 7:
                      return [3, 9];
                    case 8:
                      this.m_rgChatMessages.push({
                        type: l.a.Notification,
                        msg: Object(St.f)("#BroadcastChat_UserUnmutedLocal", t),
                        client_ts: Number(new Date()),
                        instance_id: this.m_unInstanceID,
                        in_game: !1,
                        persona_name: "",
                        steamid: "",
                      }),
                        (n.label = 9);
                    case 9:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.RemoveUserMessagesLocal = function (e) {
              this.m_rgChatMessages = this.m_rgChatMessages.filter(function (
                t
              ) {
                return t.steamid !== e;
              });
            }),
            (e.prototype.RemoveUserMessagesServer = function (e, t) {
              return Object(n.b)(this, void 0, void 0, function () {
                var r, i;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (e == this.m_strUserSteamID) return [2];
                      n.label = 1;
                    case 1:
                      return (
                        n.trys.push([1, 6, , 7]),
                        this.m_webApiToken
                          ? ((r = new FormData()).append(
                              "chat_id",
                              this.m_ulChatID
                            ),
                            r.append("user_steamid", e),
                            [
                              4,
                              d.a.post(
                                zt.c.WEBAPI_BASE_URL +
                                  "IBroadcastService/RemoveUserChatText/v0001/?access_token=" +
                                  this.m_webApiToken,
                                r
                              ),
                            ])
                          : [3, 3]
                      );
                    case 2:
                      return n.sent(), [3, 5];
                    case 3:
                      return (
                        (i = m.b.Init(q)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          user_steamid: e,
                        }),
                        [
                          4,
                          j.RemoveUserChatText(
                            this.m_webAPIInterface.GetServiceTransport(),
                            i
                          ),
                        ]
                      );
                    case 4:
                      n.sent(), (n.label = 5);
                    case 5:
                      return [3, 7];
                    case 6:
                      return (
                        n.sent(),
                        this.m_rgChatMessages.push({
                          type: l.a.Error,
                          msg: Object(St.f)(
                            "#BroadcastChat_RemoveMessagesFailed",
                            t
                          ),
                          client_ts: Number(new Date()),
                          instance_id: this.m_unInstanceID,
                          in_game: !1,
                          persona_name: "",
                          steamid: "",
                        }),
                        [3, 7]
                      );
                    case 7:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.UpdateChatMessageFlair = function (e) {
              return Object(n.b)(this, void 0, void 0, function () {
                var t, r;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return this.m_webApiToken
                        ? ((t = new FormData()).append(
                            "chat_id",
                            this.m_ulChatID
                          ),
                          t.append(
                            "flair",
                            "^" + this.m_strFlairGroupID + "^:" + e + ":"
                          ),
                          [
                            4,
                            d.a.post(
                              zt.c.WEBAPI_BASE_URL +
                                "IBroadcastService/UpdateChatMessageFlair/v0001/?access_token=" +
                                this.m_webApiToken,
                              t
                            ),
                          ])
                        : [3, 2];
                    case 1:
                      return n.sent(), [3, 4];
                    case 2:
                      return (
                        (r = m.b.Init(D)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          flair: "^" + this.m_strFlairGroupID + "^:" + e + ":",
                        }),
                        [
                          4,
                          j.UpdateChatMessageFlair(
                            this.m_webAPIInterface.GetServiceTransport(),
                            r
                          ),
                        ]
                      );
                    case 3:
                      n.sent(), (n.label = 4);
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.IsUserMutedLocally = function (e) {
              return Boolean(this.m_mapMutedUsers[e]);
            }),
            (e.prototype.BIsUserBroadcastModerator = function (e) {
              return this.m_mapBroadcastModeratorUsers.has(e);
            }),
            (e.prototype.IsUserBroadcaster = function (e) {
              return e === this.m_ulBroadcastSteamID;
            }),
            (e.prototype.SyncChat = function () {
              (this.m_tsFirstRequest = null),
                (this.m_nFromFirstRequestMS = 0),
                (this.m_nNextChatTS = 0),
                (this.m_rgChatMessages = []);
            }),
            Object(n.c)(
              [i.C],
              e.prototype,
              "m_mapChannelModeratorUsers",
              void 0
            ),
            Object(n.c)(
              [i.C],
              e.prototype,
              "m_mapBroadcastModeratorUsers",
              void 0
            ),
            Object(n.c)([i.C], e.prototype, "m_nRateLimitSeconds", void 0),
            Object(n.c)([i.C], e.prototype, "m_bRateLimited", void 0),
            Object(n.c)([i.C], e.prototype, "m_rgChatMessages", void 0),
            Object(n.c)([Mt.a], e.prototype, "FetchChatModerators", null),
            Object(n.c)([Mt.a], e.prototype, "RequestLoop", null),
            Object(n.c)([Mt.a], e.prototype, "MuteUserForSession", null),
            e
          );
        })(),
        Vt = new Lt();
      window.g_BroadcastChatStore = Vt;
      var qt = r("1BdX"),
        Ht = r("a5LV"),
        Kt = r("Z9dU"),
        Yt = r.n(Kt),
        $t = r("y+6m"),
        Jt = r("Mgs7"),
        Xt = r("Gorr"),
        Qt = r("0QoN"),
        Zt = r("BFsE"),
        er = r("gPCo"),
        tr = r("5znp"),
        rr = r.n(tr),
        nr = function () {
          return s.a.createElement(
            "div",
            { className: rr.a.FriendsListInsetShadowCtn },
            s.a.createElement("div", {
              className: rr.a.FriendListInsetShadowTop,
            })
          );
        },
        ir = function () {
          return s.a.createElement(
            "div",
            { className: rr.a.FriendsListInsetShadowCtn },
            s.a.createElement("div", {
              className: rr.a.FriendListInsetShadowBottom,
            })
          );
        },
        ar = r("6Y59"),
        or = r("exH9"),
        sr = r("opsS"),
        ur = r("3sYe"),
        cr = r.n(ur),
        dr = new RegExp("ː([^ː]*)ː", "g"),
        lr =
          (new RegExp("(https?://[^ '\"<>]*)", "gi"),
          new RegExp(
            "^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)",
            "i"
          ));
      var mr = function (e) {
          var t = e.userType,
            r = e.msg,
            n = e.presenterInfo;
          if ("presenter" === t)
            return o.createElement(
              "span",
              null,
              o.createElement(
                er.b,
                {
                  name: n.name,
                  title: n.title,
                  photo: n.photo,
                  company: n.company,
                  bioString: n.bio,
                },
                o.createElement(
                  "a",
                  {
                    className: Object(or.a)(
                      cr.a.MessageName,
                      cr.a.MessagePresenter
                    ),
                    href: zt.c.COMMUNITY_BASE_URL + "profiles/" + r.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  r.persona_name
                )
              )
            );
          var i = null;
          return (
            "broadcaster" === t
              ? (i = cr.a.MessageBroadcaster)
              : "moderator" === t && (i = cr.a.MessageModerator),
            o.createElement(
              "span",
              null,
              o.createElement(
                "a",
                {
                  className: Object(or.a)(cr.a.MessageName, i),
                  href: zt.c.COMMUNITY_BASE_URL + "profiles/" + r.steamid,
                  "data-miniprofile": "s" + r.steamid,
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
                r.persona_name
              )
            )
          );
        },
        fr = function (e) {
          switch (e.userType) {
            case "presenter":
              return o.createElement(
                "span",
                {
                  className: cr.a.RoleFlairContainer,
                  "data-tooltip-text": Object(St.f)(
                    "#BroadcastChat_Role_Presenter_ttip"
                  ),
                },
                o.createElement(ar.h, null)
              );
            case "moderator":
              return o.createElement(
                "span",
                {
                  className: cr.a.RoleFlairContainer,
                  "data-tooltip-text": Object(St.f)(
                    "#BroadcastChat_Role_Moderatorr_ttip"
                  ),
                },
                o.createElement(ar.i, null)
              );
            case "broadcaster":
              return o.createElement(
                "span",
                {
                  className: cr.a.RoleFlairContainer,
                  "data-tooltip-text": Object(St.f)(
                    "#BroadcastChat_Role_Broadcaster_ttip"
                  ),
                },
                o.createElement(ar.g, null)
              );
            default:
              return null;
          }
        },
        pr = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.m_chat = null), (t.messagesContainer = o.createRef()), t;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.componentDidMount = function () {
              this.StartChat();
            }),
            (t.prototype.componentDidUpdate = function (e) {
              this.m_chat &&
                this.m_chat.m_bAutoScroll &&
                this.ScrollToNewestMessages(),
                (this.props.steamID === e.steamID &&
                  this.props.broadcastID === e.broadcastID &&
                  this.props.broadcastChannelID === e.broadcastChannelID) ||
                  this.StartChat();
            }),
            (t.prototype.componentWillUnmount = function () {
              this.m_chat && this.m_chat.Stop();
            }),
            (t.prototype.StartChat = function () {
              if (
                (this.m_chat && this.m_chat.Stop(),
                (this.m_chat = Vt.GetOrCreateChat(
                  this.props.broadcastChannelID,
                  this.props.steamID
                )),
                this.props.broadcastChannelID)
              )
                this.m_chat.StartForChannel(this.props.broadcastChannelID);
              else if (
                this.props.steamID &&
                this.props.steamID &&
                (this.props.broadcastID || this.props.globalChat)
              ) {
                var e = this.props.broadcastID || "0";
                this.m_chat.StartForSteamID(this.props.steamID, e),
                  this.ScrollToNewestMessages();
              }
            }),
            (t.prototype.IsTrustedDomain = function (e) {
              return !!e.match(lr);
            }),
            (t.prototype.AddLinksEmoticons = function (e, t) {
              t && this.m_chat.GetUserEmoticons();
              for (var r = e.split(dr), n = [], i = 0; i < r.length; i += 1)
                i % 2 == 1
                  ? n.push(
                      o.createElement(Xt.b, {
                        emoticonHoverStore: Ht.b,
                        key: i,
                        emoticon: r[i],
                        large: !0,
                      })
                    )
                  : n.push(r[i]);
              return n;
            }),
            (t.prototype.HandleScroll = function (e) {
              var t = this.props.bInvertLayout
                ? e.currentTarget.scrollTop < 6
                : e.currentTarget.scrollTop + e.currentTarget.clientHeight >=
                  e.currentTarget.scrollHeight - 6;
              this.m_chat && (this.m_chat.m_bAutoScroll = t);
            }),
            (t.prototype.ScrollToNewestMessages = function () {
              this.messagesContainer &&
                this.messagesContainer.current &&
                (this.messagesContainer.current.scrollTop = this.props
                  .bInvertLayout
                  ? 0
                  : this.messagesContainer.current.scrollHeight);
            }),
            (t.prototype.OnContextMenu = function (e, t) {
              var r = this;
              if (t.type !== l.a.Chat) return null;
              var n = [],
                i = this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID()),
                a = this.m_chat.BIsUserBroadcastModerator(
                  this.m_chat.GetUserSteamID()
                );
              ((zt.h && zt.h.is_support) || i || a
                ? n.push(
                    o.createElement(
                      $t.d,
                      {
                        key: "remove",
                        onSelected: function () {
                          return r.m_chat.RemoveUserMessagesServer(
                            t.steamid,
                            t.persona_name
                          );
                        },
                      },
                      Object(St.f)("#BroadcastChat_RemoveMessages")
                    ),
                    o.createElement(
                      $t.d,
                      {
                        key: "updatebanh",
                        onSelected: function () {
                          return r.m_chat.UpdateUserChatBan(
                            t.steamid,
                            1,
                            12,
                            !1,
                            t.persona_name
                          );
                        },
                      },
                      Object(St.f)("#BroadcastChat_half_Mute")
                    ),
                    o.createElement(
                      $t.d,
                      {
                        key: "updateband",
                        onSelected: function () {
                          return r.m_chat.UpdateUserChatBan(
                            t.steamid,
                            1,
                            24,
                            !1,
                            t.persona_name
                          );
                        },
                      },
                      Object(St.f)("#BroadcastChat_day_Mute")
                    ),
                    o.createElement(
                      $t.d,
                      {
                        key: "updatebanw",
                        onSelected: function () {
                          return r.m_chat.UpdateUserChatBan(
                            t.steamid,
                            1,
                            168,
                            !1,
                            t.persona_name
                          );
                        },
                      },
                      Object(St.f)("#BroadcastChat_week_Mute")
                    ),
                    o.createElement(
                      $t.d,
                      {
                        key: "updatebanp",
                        onSelected: function () {
                          return r.m_chat.UpdateUserChatBan(
                            t.steamid,
                            1,
                            0,
                            !0,
                            t.persona_name
                          );
                        },
                      },
                      Object(St.f)("#BroadcastChat_perm_Mute")
                    ),
                    o.createElement(
                      $t.d,
                      {
                        key: "removeban",
                        onSelected: function () {
                          return r.m_chat.UpdateUserChatBan(
                            t.steamid,
                            0,
                            0,
                            !1,
                            t.persona_name,
                            !0
                          );
                        },
                      },
                      Object(St.f)("#BroadcastChat_Unmute")
                    )
                  )
                : this.m_chat.IsUserMutedLocally(t.steamid)
                ? n.push(
                    o.createElement(
                      $t.d,
                      {
                        key: "unmuteuser",
                        onSelected: function () {
                          return r.m_chat.UnmuteUserForSession(
                            t.steamid,
                            t.persona_name
                          );
                        },
                      },
                      Object(St.f)("#BroadcastChat_UnmuteLocal")
                    )
                  )
                : n.push(
                    o.createElement(
                      $t.d,
                      {
                        key: "muteuser",
                        onSelected: function () {
                          return r.m_chat.MuteUserForSession(
                            t.steamid,
                            t.persona_name
                          );
                        },
                      },
                      Object(St.f)("#BroadcastChat_MuteLocal")
                    )
                  ),
              (zt.h && zt.h.is_support) ||
                this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID())) &&
                t.steamid &&
                (this.m_chat.BIsUserBroadcastModerator(t.steamid)
                  ? n.push(
                      o.createElement(
                        $t.d,
                        {
                          key: "removemod",
                          onSelected: function () {
                            return r.m_chat.UpdateBroadcastChatModerator(
                              t.steamid,
                              !1,
                              t.persona_name
                            );
                          },
                        },
                        Object(St.f)("#BroadcastChat_Remove_Moderator")
                      )
                    )
                  : n.push(
                      o.createElement(
                        $t.d,
                        {
                          key: "addmod",
                          onSelected: function () {
                            return r.m_chat.UpdateBroadcastChatModerator(
                              t.steamid,
                              !0,
                              t.persona_name
                            );
                          },
                        },
                        Object(St.f)("#BroadcastChat_Add_Moderator")
                      )
                    ));
              return n.length
                ? Object(u.a)(
                    o.createElement(
                      $t.c,
                      null,
                      o.createElement(
                        "div",
                        { className: cr.a.SelectedUserNameCtn },
                        Object(St.f)("#BroadcastChat_User"),
                        o.createElement("br", null),
                        o.createElement(
                          "span",
                          { className: cr.a.SelectedUserName },
                          t.persona_name
                        )
                      ),
                      n
                    ),
                    e
                  )
                : null;
            }),
            (t.prototype.GetTypeClassName = function (e) {
              return e.type === l.a.Notification
                ? cr.a.MessageNotification
                : e.type === l.a.Error
                ? cr.a.MessageError
                : cr.a.MessageChat;
            }),
            (t.prototype.FormatMessage = function (e, t) {
              if (e.type === l.a.Chat) {
                var r = t ? t.FilterText(e.steamid, e.msg) : e.msg;
                return this.AddLinksEmoticons(r, !1);
              }
              return e.msg;
            }),
            (t.prototype.RenderUserChatLine = function (e, t, r) {
              var n = this,
                i = r ? r.get(e.steamid) : void 0,
                a =
                  e.type === l.a.Chat
                    ? (function (e, t, r) {
                        return r
                          ? "presenter"
                          : t.GetBroadcastSteamID() === e
                          ? "broadcaster"
                          : t.BIsUserBroadcastModerator(e)
                          ? "moderator"
                          : "";
                      })(e.steamid, this.m_chat, i)
                    : "";
              return o.createElement(
                "div",
                {
                  key: e.instance_id + "_" + e.client_ts + "_" + t,
                  className: this.GetTypeClassName(e),
                  onContextMenu: function (t) {
                    return n.OnContextMenu(t, e);
                  },
                },
                e.type === l.a.Chat && o.createElement(fr, { userType: a }),
                e.flair &&
                  o.createElement(
                    "span",
                    { className: cr.a.FlairContainer },
                    this.AddLinksEmoticons(e.flair, !1)
                  ),
                e.type === l.a.Chat &&
                  o.createElement(mr, {
                    userType: a,
                    msg: e,
                    presenterInfo: i,
                  }),
                e.type === l.a.Chat &&
                  this.m_chat.GetBroadcastSteamID() === e.steamid &&
                  o.createElement(
                    "span",
                    {
                      className:
                        cr.a.MessageNotification + " " + cr.a.MessageContents,
                    },
                    " (" + Object(St.f)("#BroadcastChat_Broadcaster") + ")"
                  ),
                e.type === l.a.Chat &&
                  this.m_chat.m_mapChannelModeratorUsers.get(e.steamid) &&
                  o.createElement(
                    "span",
                    {
                      className:
                        cr.a.MessageNotification + " " + cr.a.MessageContents,
                    },
                    " (" + Object(St.f)("#BroadcastChat_Moderator") + ")"
                  ),
                o.createElement(
                  "span",
                  {
                    className:
                      cr.a.MessageContents +
                      " " +
                      (this.AddLinksEmoticons(e.msg, !1).filter(function (e) {
                        return e && "string" == typeof e;
                      }).length
                        ? ""
                        : cr.a.EmoticonsOnly),
                  },
                  e.type === l.a.Chat ? " : " : "",
                  this.FormatMessage(e, this.m_chat.TextFilterStore)
                )
              );
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                r = t.hidden,
                n = t.bPartnerMemberOnlyChat,
                i = t.bInvertLayout,
                a = this.m_chat ? this.m_chat.m_rgChatMessages : [],
                s = i ? a.reverse() : a,
                u = this.m_chat
                  ? qt.b.GetPresenterMapForBroadcasterSteamID(
                      this.m_chat.GetBroadcastSteamID()
                    )
                  : void 0;
              return o.createElement(
                "div",
                {
                  className: Object(or.a)(cr.a.ChatPanel, "ChatPanel"),
                  style: r ? { display: "none" } : void 0,
                },
                i &&
                  !!this.m_chat &&
                  o.createElement(br, {
                    oChat: this.m_chat,
                    emoticonStore: this.props.emoticonStore,
                    bPartnerMemberOnlyChat: n,
                  }),
                o.createElement(nr, null),
                o.createElement(
                  "div",
                  {
                    className: Object(or.a)(
                      cr.a.ChatMessages + " " + Yt.a.minHeightZero,
                      "ChatMessages"
                    ),
                    onScroll: this.HandleScroll,
                    ref: this.messagesContainer,
                  },
                  s.map(function (t, r) {
                    return e.RenderUserChatLine(t, r, u);
                  })
                ),
                o.createElement(ir, null),
                !i &&
                  !!this.m_chat &&
                  o.createElement(br, {
                    oChat: this.m_chat,
                    emoticonStore: this.props.emoticonStore,
                    bPartnerMemberOnlyChat: n,
                  })
              );
            }),
            Object(n.c)([i.C], t.prototype, "m_chat", void 0),
            Object(n.c)([sr.a], t.prototype, "StartChat", null),
            Object(n.c)([sr.a], t.prototype, "HandleScroll", null),
            Object(n.c)([sr.a], t.prototype, "OnContextMenu", null),
            Object(n.c)([sr.a], t.prototype, "RenderUserChatLine", null),
            (t = Object(n.c)([a.a], t))
          );
        })(o.Component);
      function br(e) {
        var t = e.oChat,
          r = e.emoticonStore;
        return !e.bPartnerMemberOnlyChat ||
          ((null === zt.h || void 0 === zt.h ? void 0 : zt.h.logged_in) &&
            (null === zt.h || void 0 === zt.h
              ? void 0
              : zt.h.is_partner_member))
          ? (null === zt.h || void 0 === zt.h ? void 0 : zt.h.logged_in)
            ? o.createElement(hr, { oChat: t, emoticonStore: r })
            : null
          : o.createElement(yr, null);
      }
      function hr(e) {
        var t = e.oChat,
          r = e.emoticonStore,
          i = o.useState(""),
          a = i[0],
          s = i[1],
          u = o.useRef(),
          c = o.useCallback(
            function (e) {
              !!e.shiftKey ||
                13 !== e.charCode ||
                (t.m_bRateLimited || (t.SendMessage(a), s("")),
                e.preventDefault());
            },
            [t, a]
          ),
          d = o.useCallback(
            function (e, t) {
              void 0 === t && (t = !1),
                s(a + "ː" + e + "ː"),
                (null == u ? void 0 : u.current) && u.current.focus();
            },
            [a, u]
          );
        return o.createElement(
          "div",
          { className: Object(or.a)(cr.a.ChatEntryCtn, "ChatEntryCtn") },
          o.createElement(
            "div",
            { className: Object(or.a)(cr.a.ChatEntry, "ChatEntry") },
            o.createElement(
              "form",
              { className: "" + Yt.a.chatEntryControls },
              o.createElement("textarea", {
                className: Yt.a.chatTextarea,
                placeholder: Object(St.f)("#BroadcastChat_EnterResponse"),
                onKeyPress: c,
                onChange: function (e) {
                  return s(e.target.value);
                },
                value: a,
                ref: u,
              }),
              Boolean(t.m_bRateLimited) &&
                o.createElement(Br, {
                  nSeconds: t.m_nRateLimitSeconds,
                  bRateLimited: t.m_bRateLimited,
                }),
              o.createElement(
                "button",
                {
                  className:
                    Yt.a.chatSubmitButton + " " + (a ? "" : Yt.a.disabled),
                  title: Object(St.f)("#ChatEntryButton_Submit"),
                  disabled: t.m_bRateLimited || 0 == a.trim().length,
                  onClick: function () {
                    t.SendMessage(a), s("");
                  },
                },
                o.createElement(ar.ib, null)
              )
            ),
            o.createElement(
              "div",
              {
                style: { height: "50px" },
                className: "" + Yt.a.chatEntryActionsContainer,
              },
              o.createElement(
                "div",
                { className: Yt.a.chatEntryActionsGroup },
                o.createElement(Qt.a, {
                  disabled: !1,
                  OnEmoticonSelected: d,
                  rtLastAckedNewEmoticons: Number.MAX_VALUE,
                  emoticonStore: r,
                  emoticonHoverStore: Ht.b,
                }),
                o.createElement(_r, Object(n.a)({}, e, { textInputRef: u }))
              )
            )
          )
        );
      }
      function _r(e) {
        var t,
          r = e.oChat,
          n = e.emoticonStore,
          i = e.textInputRef;
        return r.m_strFlairGroupID &&
          n.flair_list &&
          (null === (t = n.GetFlairListByGroupID(r.m_strFlairGroupID)) ||
          void 0 === t
            ? void 0
            : t.length)
          ? o.createElement(Qt.a, {
              disabled: !1,
              OnEmoticonSelected: function (e) {
                r.UpdateChatMessageFlair(e),
                  (null == i ? void 0 : i.current) && i.current.focus();
              },
              rtLastAckedNewEmoticons: Number.MAX_VALUE,
              emoticonStore: n,
              emoticonHoverStore: Ht.b,
              strFlairGroupID: r.m_strFlairGroupID,
              title: Object(St.f)("#ChatEntryButton_Flair"),
              buttonIcon: o.createElement(ar.j, null),
            })
          : null;
      }
      var Br = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n.d)(t, e),
          (t.prototype.render = function () {
            return o.createElement(
              "div",
              { className: cr.a.TimedProgressBarContainer },
              o.createElement(
                "div",
                { className: cr.a.wrapper },
                o.createElement("div", {
                  className: cr.a.spinner + " " + cr.a.pie,
                  style: {
                    animationDuration: (this.props.nSeconds || 0) + "s",
                  },
                }),
                o.createElement("div", {
                  className: cr.a.filler + " " + cr.a.pie,
                  style: {
                    animationDuration: (this.props.nSeconds || 0) + "s",
                  },
                }),
                o.createElement("div", {
                  className: cr.a.mask,
                  style: {
                    animationDuration: (this.props.nSeconds || 0) + "s",
                  },
                })
              )
            );
          }),
          t
        );
      })(o.Component);
      function yr(e) {
        return o.createElement(
          "div",
          { className: cr.a.Description },
          o.createElement(
            "div",
            { className: cr.a.LogInPrompt },
            Object(St.f)("#Broadcast_PartnerChat_Login")
          ),
          !zt.h.logged_in &&
            o.createElement(
              Jt.d,
              { onClick: Zt.a, className: Object(or.a)(cr.a.SignInButton) },
              Object(St.f)("#Login_SignIn")
            )
        );
      }
    },
    rKv1: function (e, t, r) {
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

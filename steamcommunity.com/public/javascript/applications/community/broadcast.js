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
      r.r(t);
      var l = r("mrSG"),
        n = r("vDqi"),
        d = r.n(n),
        i = r("TyAF"),
        m = r("q1tI"),
        f = r.n(m),
        a = r("eN6m"),
        o = r("trWU"),
        b = r("5eAM"),
        p = r("VQ2A"),
        _ = r("b3LC"),
        h = r("5L1o"),
        B = r("NKJh"),
        y = r("RQmk"),
        g = r("dfs5"),
        w = r("0OaU"),
        v = r("exH9"),
        M = r("lkRc"),
        s = r("dLk7"),
        S = r.n(s),
        c = Object(i.a)(function (e) {
          var t = e.appid,
            r = Object(_.c)(t, 0, !0),
            n = (r[0], r[1]),
            i = Object(g.c)();
          Object(m.useEffect)(
            function () {
              b.a.BHasAppLinkLoaded(t) ||
                Object(l.b)(void 0, void 0, void 0, function () {
                  return Object(l.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [4, b.a.LoadAppLinkInfo([t])];
                      case 1:
                        return [2, e.sent()];
                    }
                  });
                });
            },
            [t]
          );
          var a = S.a.StoreSaleWidgetContainer_mini,
            o = S.a.StoreSaleWidgetImage_mini,
            s = S.a.StoreSaleImage_mini,
            c = (S.a.StoreSaleWidgetShortDesc_mini, b.a.GetAppLinkInfo(t));
          if (!n || !c)
            return f.a.createElement(
              "div",
              { className: a },
              f.a.createElement(w.a, { size: "medium" }),
              ";"
            );
          var u = "series" != c.type,
            d = Object(p.b)(c.capsule_link, i);
          return c && c.title
            ? f.a.createElement(
                "div",
                { className: a },
                f.a.createElement(
                  "div",
                  { className: B.Actions },
                  f.a.createElement(
                    "a",
                    { href: d, target: M.c.IN_CLIENT ? void 0 : "_blank" },
                    f.a.createElement(
                      y.b,
                      { type: "app", id: c.appid },
                      f.a.createElement(
                        "div",
                        { className: o },
                        f.a.createElement("img", {
                          className: s,
                          src: c.capsule,
                        })
                      )
                    )
                  )
                ),
                f.a.createElement(
                  "div",
                  { className: B.StoreSaleBroadcastWidgetRight },
                  f.a.createElement(
                    "div",
                    { className: B.Actions },
                    f.a.createElement(
                      "a",
                      { href: d, target: M.c.IN_CLIENT ? void 0 : "_blank" },
                      f.a.createElement(
                        y.b,
                        { type: "app", id: c.appid },
                        f.a.createElement(
                          "div",
                          {
                            className: Object(v.a)(
                              B.StoreSaleWidgetTitle,
                              "StoreSaleWidgetTitle"
                            ),
                          },
                          c.title
                        )
                      )
                    )
                  ),
                  f.a.createElement(
                    "div",
                    { className: B.StoreSaleWidgetRelease },
                    c.release
                  ),
                  u &&
                    f.a.createElement(h.i, {
                      info: c,
                      bShowDemoButton: !0,
                      bStackedButtons: !0,
                    })
                )
              )
            : f.a.createElement("div", {
                className: B.StoreSaleWidgetEmptyContainer,
              });
        }),
        C = r("kyHq"),
        O = r("1BdX"),
        j = r("boaH"),
        z = r("nWbB"),
        u = r("02Wr"),
        F = r("MnIK"),
        R = r("6Y59"),
        T = r("d+Me"),
        W = r("TLQK"),
        I = r("bxiW"),
        U = r("kLLr"),
        N = r("uIWk"),
        x = r("rKv1"),
        E = r.n(x),
        P = Object(i.a)(function (e) {
          var t = e.event,
            i = t.clanSteamID.GetAccountID(),
            r = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
            a = Object(m.useRef)(null),
            n = Object(m.useState)(
              t ? N.a.GetCreatorHome(t.clanSteamID) : null
            ),
            o = n[0],
            s = n[1];
          if (
            (Object(m.useEffect)(
              function () {
                var n = d.a.CancelToken.source();
                a.current = n.cancel;
                return (
                  Object(l.b)(void 0, void 0, void 0, function () {
                    var t, r;
                    return Object(l.e)(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return (
                            (t = U.a.InitFromClanID(i)),
                            [4, N.a.LoadCreatorHome(t, n)]
                          );
                        case 1:
                          return (r = e.sent()), n.token.reason || s(r), [2];
                      }
                    });
                  }),
                  function () {
                    a.current && a.current("BroadcastDropsDisplay: unmounting");
                  }
                );
              },
              [i]
            ),
            r || !o || !o.BIsLoaded())
          )
            return null;
          var c =
            M.c.COMMUNITY_BASE_URL +
            "gid/" +
            t.jsondata.broadcast_item_drops_details_clan_accountid +
            "/partnerevents/view/" +
            t.jsondata.broadcast_item_drops_details_event_gid;
          return f.a.createElement(
            "div",
            { className: E.a.item_drop_ctn },
            f.a.createElement(
              "div",
              null,
              Object(W.f)(
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
                f.a.createElement(
                  "a",
                  { href: c, target: M.c.IN_CLIENT ? "" : "_blank" },
                  Object(W.f)("#SalePage_WatchForDrop_LearnMore")
                )
            )
          );
        }),
        G = {
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
        A = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_cancelSignal = d.a.CancelToken.source()),
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
          var u;
          return (
            Object(l.d)(e, t),
            ((u = e).IsBroadcastAllowed = function () {
              return M.c.EREALM != C.d.k_ESteamRealmChina;
            }),
            (e.prototype.componentDidMount = function () {
              return Object(l.b)(this, void 0, void 0, function () {
                var t = this;
                return Object(l.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return u.IsBroadcastAllowed()
                        ? [
                            4,
                            z.a
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
                          bExpanded: !z.a.Get().BIsEmbeddedBroadcastHidden(),
                          innerStyle: Object(l.a)(
                            Object(l.a)({}, this.state.innerStyle),
                            {
                              maxHeight: z.a.Get().BIsEmbeddedBroadcastHidden()
                                ? "0vh"
                                : "100vh",
                            }
                          ),
                        }),
                      this.props.nAppIDVOD)
                        ? (z.a.Get().SetupEmbeddableVOD(this.props), [3, 4])
                        : [3, 2];
                    case 2:
                      return [
                        4,
                        this.props.bIsPreview && this.props.accountIDs
                          ? z.a
                              .Get()
                              .HintLoadEmbeddablePreviewStreams(this.props)
                          : z.a.Get().HintLoadEmbeddableStreams(this.props),
                      ];
                    case 3:
                      e.sent(), (e.label = 4);
                    case 4:
                      return (
                        window.setTimeout(function () {
                          t.m_cancelSignal.token.reason ||
                            t.setState({
                              style: Object(l.a)(
                                Object(l.a)({}, t.state.style),
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
                t = z.a.Get().GetPlayReadyStream(this.props),
                r = j.a.GetOrCreateBroadcastInfo(t.steamid).m_nAppID;
              Object(z.e)(r, this.state.bExpanded ? 2 : 3, t.snr);
              var n = this.state.bExpanded;
              window.setTimeout(function () {
                return e.setState({
                  innerStyle: Object(l.a)(Object(l.a)({}, e.state.innerStyle), {
                    maxHeight: n ? "0vh" : "100vh",
                  }),
                });
              }, 10),
                n || this.setState({ bExpanded: !this.state.bExpanded });
            }),
            (e.prototype.OnShrinkTransitionEnd = function () {
              "0vh" === this.state.innerStyle.maxHeight &&
                this.setState({ bExpanded: !1 });
            }),
            (e.prototype.onStreamSelect = function (t) {
              return Object(l.b)(this, void 0, void 0, function () {
                return Object(l.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        this.setState({ bStartMuted: !1 }),
                        z.a.Get().GetPlayReadyStream(this.props).accountid ==
                        t.accountid
                          ? [3, 2]
                          : [4, z.a.Get().AttemptToPlayStream(this.props, t)]
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
              var r,
                n = {
                  leftPanel: null,
                  rightPanel: null,
                  bRightPanelArtworkOrEmpty: !0,
                },
                i = 1 < z.a.Get().GetConcurrentStreams(this.props),
                a = j.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
                o = m.createElement(
                  "div",
                  { className: E.a.rightPanel },
                  m.createElement(k, {
                    key: "right" + a,
                    ImgUrl: e.right_panel,
                  })
                ),
                s = m.createElement(k, {
                  key: "left" + a,
                  ImgUrl: e.left_panel,
                });
              return (
                a < 11 &&
                  (r = O.b.GetAppIDListForBroadcasterSteamID(e.steamid)) &&
                  1 === r.length &&
                  (a = r[0]),
                !(
                  (this.props.promotionName ||
                    this.props.bIsPreview ||
                    this.props.subid ||
                    this.props.bundleid) &&
                  11 <= a
                ) ||
                  (this.props.event &&
                    this.props.event.jsondata.broadcast_force_banner) ||
                  ((o = m.createElement(c, {
                    key: "mini" + e.accountid,
                    appid: a,
                  })),
                  (n.bRightPanelArtworkOrEmpty = !1)),
                i && !t
                  ? ((n.leftPanel = m.createElement(q, {
                      broadcastEmbedContext: this.props,
                      key: "selector" + a,
                      curStream: e,
                      onStreamSelect: this.onStreamSelect,
                      fnFilterStreams: this.props.fnFilterStreams,
                      bShowCapsuleArt: this.props.bShowCapsuleArt,
                    })),
                    (n.rightPanel = o))
                  : t
                  ? ((n.leftPanel = m.createElement("div", null)),
                    (n.rightPanel = m.createElement(K, {
                      stream: e,
                      orientation: "rightside",
                    })),
                    (n.bRightPanelArtworkOrEmpty = !1))
                  : ((n.leftPanel = s), (n.rightPanel = o)),
                n
              );
            }),
            (e.prototype.render = function () {
              if (!u.IsBroadcastAllowed() || this.state.bLoadingPreference)
                return null;
              var e = z.a.Get().GetPlayReadyStream(this.props);
              if (e) {
                var t = "show" === z.a.Get().GetChatVisibility(),
                  r = this.props,
                  n = r.event,
                  i = r.language,
                  a = r.fnRenderBroadcastContext;
                n &&
                  (e = Object(l.a)(Object(l.a)({}, e), {
                    left_panel: n.GetImageURL(
                      "broadcast_left",
                      i || Object(C.e)(M.c.LANGUAGE)
                    ),
                    right_panel: n.GetImageURL(
                      "broadcast_right",
                      i || Object(C.e)(M.c.LANGUAGE)
                    ),
                    store_title: n.GetBroadcastTitle(
                      i || Object(C.e)(M.c.LANGUAGE)
                    ),
                    broadcast_chat_visibility: n.GetBroadcastChatVisibility(),
                  }));
                var o = this.ConstructSidePanels(e, t),
                  s = e.store_title ? e.store_title : e.title,
                  c =
                    "radial-gradient(100% 80% at 64% 95%, " +
                    ((n &&
                      n.jsondata &&
                      n.jsondata.broadcast_gradient_inner_color) ||
                      "rgba(108, 119, 134, 0.4)") +
                    " 40%, " +
                    ((n &&
                      n.jsondata &&
                      n.jsondata.broadcast_gradient_outer_color) ||
                      "rgba(83, 104, 104, 0.4)") +
                    " 100%)";
                return m.createElement(
                  m.Fragment,
                  null,
                  m.createElement(
                    "div",
                    { style: this.state.style },
                    m.createElement(
                      "div",
                      {
                        style: { background: c },
                        className:
                          E.a.bordered_container + " " + (n ? E.a.Event : ""),
                      },
                      m.createElement(
                        "div",
                        { className: E.a.bordered_title },
                        m.createElement(h.d, null),
                        s,
                        m.createElement(
                          "div",
                          { className: E.a.bordered_corner_container },
                          !this.state.bExpanded &&
                            m.createElement("div", {
                              className: E.a.broadcast_settings_icon,
                              "data-tooltip-text": Object(W.f)(
                                "#StoreBroadcast_Change_store_Broadcast_settings"
                              ),
                              onClick: function () {
                                return window.open(
                                  M.c.STORE_BASE_URL +
                                    "account/preferences/#store_broadcast_settings"
                                );
                              },
                            }),
                          m.createElement("div", {
                            className: this.state.bExpanded
                              ? E.a.bordered_corner_expanded
                              : E.a.bordered_corner_shrinked,
                            "data-tooltip-text": Object(W.f)(
                              "#StoreBroadcast_Hide_Tooltip"
                            ),
                            onClick: this.ToggleBroadcastExpandShrink,
                          })
                        ),
                        Boolean(e.gamedata_subtitle) &&
                          m.createElement(
                            "div",
                            { className: E.a.bordered_subtitle },
                            e.gamedata_subtitle
                          )
                      ),
                      this.state.bExpanded &&
                        m.createElement(
                          "div",
                          {
                            className: Object(v.a)(
                              E.a.container,
                              o.bRightPanelArtworkOrEmpty &&
                                "broadcast_right_panel_simple",
                              t && "broadcast_chat_expanded"
                            ),
                            style: Object(l.a)({}, this.state.innerStyle),
                            onTransitionEnd: this.OnShrinkTransitionEnd,
                          },
                          o.leftPanel,
                          m.createElement(D, {
                            stream: e,
                            bStartMuted: this.state.bStartMuted,
                            fnRenderBroadcastContext: a,
                          }),
                          o.rightPanel,
                          this.state.bExpanded &&
                            m.createElement(L, { stream: e })
                        )
                    ),
                    Boolean(
                      n && n.jsondata && n.jsondata.broadcast_item_drops_enabled
                    ) && m.createElement(P, { event: n }),
                    this.state.bExpanded &&
                      m.createElement(
                        "div",
                        { className: "" + (n ? E.a.Event : "") },
                        m.createElement(L, { stream: e })
                      ),
                    m.createElement("div", { className: E.a.clear_div })
                  )
                );
              }
              return m.createElement("div", {
                className: "NoBroadcastAvailable",
              });
            }),
            Object(l.c)(
              [I.a],
              e.prototype,
              "ToggleBroadcastExpandShrink",
              null
            ),
            Object(l.c)([I.a], e.prototype, "OnShrinkTransitionEnd", null),
            Object(l.c)([I.a], e.prototype, "onStreamSelect", null),
            (e = u = Object(l.c)([i.a], e))
          );
        })(m.Component),
        D =
          ((t.default = A),
          (function (r) {
            function e(e) {
              var t = r.call(this, e) || this;
              return (
                (t.m_iVideoContainerRef = m.createRef()),
                (t.state = {
                  bPopout: !1,
                  bPreventPopup: window.screen.width <= 768,
                }),
                t
              );
            }
            return (
              Object(l.d)(e, r),
              (e.prototype.CloseBroadcastPopup = function () {
                var e = j.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                  .m_nAppID;
                Object(z.e)(e, 7, this.props.stream.snr),
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
                return m.createElement(
                  "div",
                  { className: E.a.wrapper },
                  m.createElement(
                    T.a,
                    { onEnter: this.OnEnter, onLeave: this.OnLeave },
                    m.createElement(
                      "div",
                      {
                        className: E.a.video_placeholder,
                        ref: this.m_iVideoContainerRef,
                      },
                      m.createElement(
                        "div",
                        {
                          className: this.state.bPopout
                            ? E.a.broadcast_floating
                            : E.a.video_container,
                        },
                        this.state.bPopout &&
                          m.createElement(V, {
                            stream: this.props.stream,
                            OnPreventPopup: this.CloseBroadcastPopup,
                          }),
                        m.createElement(
                          "div",
                          { className: E.a.BroadcastPlayerContainer },
                          m.createElement(o.a, {
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
              Object(l.c)([I.a], e.prototype, "CloseBroadcastPopup", null),
              Object(l.c)([I.a], e.prototype, "OnEnter", null),
              Object(l.c)([I.a], e.prototype, "OnLeave", null),
              e
            );
          })(m.Component)),
        L = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.ConstructBroadcastLink = function () {
              var t = this.props.stream,
                r = j.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                  .m_nAppID,
                e = G.list.find(function (e) {
                  return (
                    e.appid == r &&
                    (!e.broadcasterAccountID ||
                      e.broadcasterAccountID == t.accountid)
                  );
                });
              if (e) {
                var n = e.url;
                return (
                  (M.c.IN_CLIENT ||
                    0 <= navigator.userAgent.indexOf("Valve Steam Client") ||
                    0 <=
                      navigator.userAgent.indexOf("Valve Steam GameOverlay") ||
                    0 <= navigator.userAgent.indexOf("Valve Steam Tenfoot")) &&
                    (n = "steam://openurl/" + n),
                  m.createElement(
                    "a",
                    { href: n },
                    Object(W.f)("#Broadcast_Embed_Watch_With_Frieds_SteamTV")
                  )
                );
              }
              var i = this.props.stream.steamid,
                a = M.c.COMMUNITY_BASE_URL + "broadcast/watch/" + i;
              return m.createElement(
                "a",
                {
                  href: a,
                  className: E.a.external_link,
                  "data-tooltip-text": Object(W.f)(
                    "#BroadcastWatch_View_Broadcast_Page"
                  ),
                },
                m.createElement(R.v, null)
              );
            }),
            (t.prototype.OnToggleChat = function (e) {
              e.preventDefault();
              var t = j.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nAppID;
              Object(z.e)(
                t,
                "show" === z.a.Get().GetChatVisibility() ? 5 : 4,
                this.props.stream.snr
              ),
                z.a.Get().ToggleChatVisibility();
            }),
            (t.prototype.onWatchBroadcastPage = function () {
              var e = j.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nAppID;
              Object(z.e)(e, 9, this.props.stream.snr);
            }),
            (t.prototype.render = function () {
              var e = this.ConstructBroadcastLink(),
                t = "remove" != z.a.Get().GetChatVisibility(),
                r = Number.parseInt(
                  "" +
                    j.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                      .m_nViewerCount
                );
              return m.createElement(
                "div",
                { className: Object(v.a)(E.a.viewer_bar, "viewer_bar") },
                m.createElement(
                  "div",
                  { className: Object(v.a)(E.a.viewer_count, "viewer_count") },
                  m.createElement(R.gb, null),
                  r.toLocaleString(W.e.GetPreferredLocales())
                ),
                m.createElement(
                  "div",
                  { className: Object(v.a)(E.a.viewer_links, "viewer_links") },
                  t &&
                    m.createElement(
                      "div",
                      { className: E.a.chat_link },
                      m.createElement(R.j, null),
                      m.createElement(
                        "a",
                        {
                          href: "#",
                          className: E.a.ChatToggle,
                          onClick: this.OnToggleChat,
                        },
                        Object(W.f)(
                          "hide" === z.a.Get().GetChatVisibility()
                            ? "#sale_three_section_show_chat"
                            : "#sale_three_section_hide_chat"
                        )
                      )
                    ),
                  t && m.createElement("span", { className: E.a.ChatToggle }),
                  m.createElement(
                    "a",
                    {
                      href:
                        M.c.STORE_BASE_URL +
                        "account/preferences/#store_broadcast_settings",
                      target: M.c.IN_CLIENT ? void 0 : "_blank",
                      className: E.a.settings_link,
                      "data-tooltip-text": Object(W.f)(
                        "#StoreBroadcast_Change_store_Broadcast_settings"
                      ),
                    },
                    m.createElement(R.U, null)
                  ),
                  e
                )
              );
            }),
            Object(l.c)([I.a], t.prototype, "OnToggleChat", null),
            Object(l.c)([I.a], t.prototype, "onWatchBroadcastPage", null),
            (t = Object(l.c)([i.a], t))
          );
        })(m.Component),
        k = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props.ImgUrl;
              return m.createElement(
                m.Fragment,
                null,
                e &&
                  m.createElement("img", {
                    className: E.a.side_panels,
                    src: this.props.ImgUrl,
                  }),
                !e && m.createElement("div", { className: E.a.side_panels })
              );
            }),
            t
          );
        })(m.Component),
        V = Object(i.a)(function (e) {
          var t = e.stream,
            r = Object(g.c)(),
            n = j.a.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
            i = b.a.GetAppLinkInfo(n),
            a = i
              ? m.createElement(
                  y.a,
                  {
                    type: "app",
                    id: n,
                    strURL: Object(p.b)(i.capsule_link, r),
                    className: E.a.PopOutVideoTitleText,
                  },
                  Object(W.f)("#StoreBroadcast_Detault_popout_Title")
                )
              : m.createElement(
                  "div",
                  { className: E.a.PopOutVideoTitleText },
                  Object(W.f)("#StoreBroadcast_Detault_popout_Title")
                );
          return m.createElement(
            "div",
            { className: [E.a.PopOutVideoTitleBar, E.a.NoSeslect].join(" ") },
            a,
            m.createElement(
              "button",
              {
                className: E.a.PopOutVideoCloseButton,
                "data-tooltip-text": Object(W.f)(
                  "#StoreBroadcast_close_broadcast_popup"
                ),
                onClick: e.OnPreventPopup,
              },
              m.createElement(R.kb, null)
            )
          );
        }),
        q = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.itemRef = m.createRef()), e;
          }
          return (
            Object(l.d)(e, t),
            (e.prototype.GetFilteredStreamList = function () {
              var t = this,
                e = z.a
                  .Get()
                  .GetStreams(this.props.broadcastEmbedContext)
                  .filter(function (e) {
                    return (
                      !t.props.fnFilterStreams || t.props.fnFilterStreams(e)
                    );
                  });
              return (
                e.sort(function (e, t) {
                  return Object(z.c)(e) != Object(z.c)(t)
                    ? Object(z.c)(t) - Object(z.c)(e)
                    : e.viewer_count != t.viewer_count
                    ? t.viewer_count - e.viewer_count
                    : t.accountid - e.accountid;
                }),
                e
              );
            }),
            (e.prototype.CalculateStreamHeight = function (e) {
              var t = j.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
                r = b.a.GetAppLinkInfo(t);
              return this.props.bShowCapsuleArt &&
                (null == r ? void 0 : r.header_image_url)
                ? parseInt(E.a.strStreamIconCapsuleArtHeight)
                : parseInt(E.a.strStreamIconScreenshotArtHeight);
            }),
            (e.prototype.componentDidMount = function () {
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
            (e.prototype.render = function () {
              var t = this,
                e = this.GetFilteredStreamList(),
                r = e.map(function (e) {
                  return m.createElement(H, {
                    key: e.accountid,
                    stream: e,
                    bSelected: t.props.curStream.accountid == e.accountid,
                    onStreamSelect: t.props.onStreamSelect,
                    bShowCapsuleArt: t.props.bShowCapsuleArt,
                  });
                });
              return m.createElement(
                "div",
                {
                  ref: this.itemRef,
                  className: Object(v.a)(
                    E.a.side_panels,
                    "side_panels",
                    E.a.multistream,
                    3 < e.length ? E.a.scrollingstreams : ""
                  ),
                },
                r
              );
            }),
            e
          );
        })(m.Component),
        H = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          var s;
          return (
            Object(l.d)(t, e),
            ((s = t).prototype.onClick = function () {
              this.props.onStreamSelect &&
                this.props.onStreamSelect(this.props.stream);
            }),
            (t.prototype.generateThumbnail = function (e) {
              var t = this.props.stream,
                r = this.props.bSelected
                  ? E.a.stream_icon_selected
                  : E.a.stream_icon;
              if (e) {
                var n = j.a.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
                  i = b.a.GetAppLinkInfo(n),
                  a = [t.thumbnail_http_address];
                return m.createElement(
                  m.Fragment,
                  null,
                  i &&
                    m.createElement("img", {
                      className: Object(v.a)(r, E.a.stream_icon_hide_on_hover),
                      src: i.header_image_url,
                    }),
                  m.createElement(u.b, {
                    className: Object(v.a)(r, E.a.stream_icon_show_on_hover),
                    srcs: a,
                  })
                );
              }
              return m.createElement("img", {
                className: r,
                src: t.thumbnail_http_address,
              });
            }),
            (t.GetClassForStreamPriority = function (e) {
              switch (e) {
                case z.b.k_eFeatured:
                  return E.a.stream_featured;
              }
              return null;
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.stream,
                r = e.bShowCapsuleArt;
              if (!Object(z.d)(t)) return null;
              var n = j.a.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
                i = b.a.GetAppLinkInfo(n),
                a = Boolean(r && (null == i ? void 0 : i.header_image_url)),
                o = Number.parseInt("" + t.viewer_count);
              return m.createElement(
                "div",
                {
                  className: Object(v.a)(
                    E.a.stream_icon_and_viewer_container,
                    s.GetClassForStreamPriority(t.current_selection_priority),
                    a && E.a.display_capsule_art
                  ),
                },
                m.createElement(
                  y.b,
                  { type: "app", id: n },
                  m.createElement(
                    F.a,
                    {
                      className: E.a.stream_icon_container,
                      onClick: this.onClick,
                      rootMargin: "100px 0px 100px 0px",
                    },
                    this.generateThumbnail(a),
                    this.props.bSelected &&
                      m.createElement("div", {
                        className: E.a.stream_icon_arrow,
                      })
                  )
                ),
                m.createElement(
                  "div",
                  { className: E.a.viewer_count },
                  m.createElement(R.gb, null),
                  o.toLocaleString(W.e.GetPreferredLocales())
                )
              );
            }),
            Object(l.c)([I.a], t.prototype, "onClick", null),
            (t = s = Object(l.c)([i.a], t))
          );
        })(m.Component),
        K = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.render = function () {
              var e = "below" == this.props.orientation,
                t = j.a.GetBroadcast(this.props.stream.steamid);
              return t
                ? m.createElement(
                    "div",
                    {
                      className: Object(v.a)(
                        e
                          ? E.a.chat_below_container
                          : E.a.chat_rightside_container,
                        E.a.store_chat_ctn
                      ),
                    },
                    m.createElement(
                      "div",
                      { className: E.a.ChatContainer },
                      m.createElement(a.a, {
                        emoticonStore: z.f,
                        watchLocation: 6,
                        steamID: this.props.stream.steamid,
                        broadcastID: t.m_ulBroadcastID,
                      })
                    )
                  )
                : null;
            }),
            (t = Object(l.c)([i.a], t))
          );
        })(m.Component);
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
      var h = r("mrSG"),
        o = r("2vnA"),
        n = r("TyAF"),
        c = r("q1tI"),
        i = r.n(c),
        s = r("TtDX"),
        a = r("vDqi"),
        B = r.n(a),
        y = r("A5MU"),
        l = r("bxBv"),
        u = r("u2yL"),
        d = r("WBba"),
        m = r("kLLr"),
        f = r("hRO2"),
        b = r("OS8t"),
        p = f.Message;
      var _ = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_id || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      thumbnail_upload_address: {
                        n: 2,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      thumbnail_upload_token: {
                        n: 3,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      thumbnail_interval_seconds: {
                        n: 4,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      heartbeat_interval_seconds: {
                        n: 5,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_BeginBroadcastSession_Response";
            }),
            n
          );
        })(p),
        g = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return p.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CBroadcast_EndBroadcastSession_Response";
            }),
            n
          );
        })(p),
        w = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.upload_token || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      upload_token: {
                        n: 1,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      upload_address: {
                        n: 2,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      broadcast_upload_id: {
                        n: 3,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      enable_replay: {
                        n: 6,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                      http_address: {
                        n: 7,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_StartBroadcastUpload_Response";
            }),
            n
          );
        })(p),
        v = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_id || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      upload_token: {
                        n: 2,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      upload_address: {
                        n: 3,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      http_address: {
                        n: 4,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      broadcast_upload_id: {
                        n: 5,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      heartbeat_interval_seconds: {
                        n: 6,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      is_rtmp: { n: 7, br: b.d.readBool, bw: b.h.writeBool },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_BroadcastUploadStarted_Notification";
            }),
            n
          );
        })(p),
        M = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.gameid || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      gameid: {
                        n: 1,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      title: { n: 2, br: b.d.readString, bw: b.h.writeString },
                      num_viewers: {
                        n: 3,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      permission: {
                        n: 4,
                        br: b.d.readInt32,
                        bw: b.h.writeInt32,
                      },
                      is_rtmp: { n: 5, br: b.d.readBool, bw: b.h.writeBool },
                      seconds_delay: {
                        n: 6,
                        br: b.d.readInt32,
                        bw: b.h.writeInt32,
                      },
                      is_publisher: {
                        n: 7,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                      thumbnail_url: {
                        n: 8,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      update_interval: {
                        n: 9,
                        br: b.d.readInt32,
                        bw: b.h.writeInt32,
                      },
                      is_uploading: {
                        n: 10,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                      duration: {
                        n: 11,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      is_replay: { n: 12, br: b.d.readBool, bw: b.h.writeBool },
                      is_capturing_vod: {
                        n: 13,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                      is_store_whitelisted: {
                        n: 14,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastStatus_Response";
            }),
            n
          );
        })(p),
        S = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.thumbnail_url || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      thumbnail_url: {
                        n: 1,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      update_interval: {
                        n: 2,
                        br: b.d.readInt32,
                        bw: b.h.writeInt32,
                      },
                      num_viewers: {
                        n: 3,
                        br: b.d.readInt32,
                        bw: b.h.writeInt32,
                      },
                      duration: { n: 4, br: b.d.readInt32, bw: b.h.writeInt32 },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastThumbnail_Response";
            }),
            n
          );
        })(p),
        C = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.response || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      response: { n: 1, br: b.d.readEnum, bw: b.h.writeEnum },
                      mpd_url: {
                        n: 2,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      broadcast_id: {
                        n: 3,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      gameid: {
                        n: 4,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      title: { n: 5, br: b.d.readString, bw: b.h.writeString },
                      num_viewers: {
                        n: 6,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      permission: {
                        n: 7,
                        br: b.d.readInt32,
                        bw: b.h.writeInt32,
                      },
                      is_rtmp: { n: 8, br: b.d.readBool, bw: b.h.writeBool },
                      seconds_delay: {
                        n: 9,
                        br: b.d.readInt32,
                        bw: b.h.writeInt32,
                      },
                      viewer_token: {
                        n: 10,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      hls_m3u8_master_url: {
                        n: 11,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      heartbeat_interval: {
                        n: 12,
                        br: b.d.readInt32,
                        bw: b.h.writeInt32,
                      },
                      thumbnail_url: {
                        n: 13,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      is_webrtc: { n: 14, br: b.d.readBool, bw: b.h.writeBool },
                      webrtc_session_id: {
                        n: 15,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      webrtc_offer_sdp: {
                        n: 16,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      webrtc_turn_server: {
                        n: 17,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      is_replay: { n: 18, br: b.d.readBool, bw: b.h.writeBool },
                      duration: {
                        n: 19,
                        br: b.d.readInt32,
                        bw: b.h.writeInt32,
                      },
                      cdn_auth_url_parameters: {
                        n: 20,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_WatchBroadcast_Response";
            }),
            n
          );
        })(p);
      var O = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.success || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      success: { n: 1, br: b.d.readBool, bw: b.h.writeBool },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_InviteToBroadcast_Response";
            }),
            n
          );
        })(p),
        j = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return p.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CBroadcast_SendBroadcastStateToServer_Response";
            }),
            n
          );
        })(p),
        z = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.steamid || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      steamid: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      state: { n: 2, br: b.d.readEnum, bw: b.h.writeEnum },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_BroadcastViewerState_Notification";
            }),
            n
          );
        })(p);
      var F,
        R,
        T,
        W,
        I = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_id || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_WaitingBroadcastViewer_Notification";
            }),
            n
          );
        })(p),
        U = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_id || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      broadcast_relay_id: {
                        n: 2,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      upload_result: {
                        n: 3,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      too_many_poor_uploads: {
                        n: 4,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_StopBroadcastUpload_Notification";
            }),
            n
          );
        })(p),
        N = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_id || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_SessionClosed_Notification";
            }),
            n
          );
        })(p),
        x = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_id || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      num_viewers: {
                        n: 2,
                        br: b.d.readInt32,
                        bw: b.h.writeInt32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_BroadcastStatus_Notification";
            }),
            n
          );
        })(p),
        E = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_channel_id || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      broadcast_channel_name: {
                        n: 2,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      broadcast_channel_avatar: {
                        n: 3,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_BroadcastChannelLive_Notification";
            }),
            n
          );
        })(p),
        P = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.thumbnail_upload_token || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      thumbnail_upload_token: {
                        n: 1,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      thumbnail_broadcast_session_id: {
                        n: 2,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      thumbnail_data: {
                        n: 3,
                        br: b.d.readBytes,
                        bw: b.h.writeBytes,
                      },
                      thumbnail_width: {
                        n: 4,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      thumbnail_height: {
                        n: 5,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_SendThumbnailToRelay_Notification";
            }),
            n
          );
        })(p),
        G = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcaster_steamid || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcaster_steamid: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_ViewerBroadcastInvite_Notification";
            }),
            n
          );
        })(p),
        A = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.chat_id || b.a(n.M()),
              p.initialize(t, e, 0, -1, [4], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      chat_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      view_url_template: {
                        n: 3,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      flair_group_ids: {
                        n: 4,
                        r: !0,
                        q: !0,
                        br: b.d.readUint32,
                        bw: b.h.writeRepeatedUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastChatInfo_Response";
            }),
            n
          );
        })(p),
        D = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.chat_id || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      chat_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      message: {
                        n: 2,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      instance_id: {
                        n: 3,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      language: {
                        n: 4,
                        d: 0,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      country_code: {
                        n: 5,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_PostChatMessage_Request";
            }),
            n
          );
        })(p),
        L = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.persona_name || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      persona_name: {
                        n: 1,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      in_game: { n: 2, br: b.d.readBool, bw: b.h.writeBool },
                      result: { n: 3, br: b.d.readInt32, bw: b.h.writeInt32 },
                      cooldown_time_seconds: {
                        n: 4,
                        br: b.d.readInt32,
                        bw: b.h.writeInt32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_PostChatMessage_Response";
            }),
            n
          );
        })(p),
        k = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.chat_id || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      chat_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      flair: { n: 2, br: b.d.readString, bw: b.h.writeString },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_UpdateChatMessageFlair_Request";
            }),
            n
          );
        })(p),
        V = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.result || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      result: { n: 1, br: b.d.readInt32, bw: b.h.writeInt32 },
                      chat_id: {
                        n: 2,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      flair: { n: 3, br: b.d.readString, bw: b.h.writeString },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_UpdateChatMessageFlair_Response";
            }),
            n
          );
        })(p),
        q = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.chat_id || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      chat_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      user_steamid: {
                        n: 2,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      muted: { n: 3, br: b.d.readBool, bw: b.h.writeBool },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_MuteBroadcastChatUser_Request";
            }),
            n
          );
        })(p),
        H = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return p.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CBroadcast_MuteBroadcastChatUser_Response";
            }),
            n
          );
        })(p),
        K = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.chat_id || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      chat_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      user_steamid: {
                        n: 2,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_RemoveUserChatText_Request";
            }),
            n
          );
        })(p),
        Y = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return p.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CBroadcast_RemoveUserChatText_Response";
            }),
            n
          );
        })(p),
        $ = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.persona_names || b.a(n.M()),
              p.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { persona_names: { n: 1, c: J, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastChatUserNames_Response";
            }),
            n
          );
        })(p),
        J = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.steam_id || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      steam_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      persona: {
                        n: 2,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastChatUserNames_Response_PersonaName";
            }),
            n
          );
        })(p),
        X = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_clip_id || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_clip_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_StartBuildClip_Response";
            }),
            n
          );
        })(p),
        Q = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return p.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CBroadcast_GetBuildClipStatus_Response";
            }),
            n
          );
        })(p),
        Z = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return p.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CBroadcast_SetClipDetails_Response";
            }),
            n
          );
        })(p),
        ee = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_clip_id || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_clip_id: {
                        n: 1,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      video_id: {
                        n: 2,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      channel_id: {
                        n: 3,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      app_id: { n: 4, br: b.d.readUint32, bw: b.h.writeUint32 },
                      accountid_broadcaster: {
                        n: 5,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      accountid_clipmaker: {
                        n: 6,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      video_description: {
                        n: 7,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      start_time: {
                        n: 8,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      length_milliseconds: {
                        n: 9,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      thumbnail_path: {
                        n: 10,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_GetClipDetails_Response";
            }),
            n
          );
        })(p),
        te = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return p.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CBroadcast_SetRTMPInfo_Response";
            }),
            n
          );
        })(p),
        re = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_permission || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_permission: {
                        n: 1,
                        br: b.d.readInt32,
                        bw: b.h.writeInt32,
                      },
                      rtmp_host: {
                        n: 2,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      rtmp_token: {
                        n: 3,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      broadcast_delay: {
                        n: 4,
                        br: b.d.readInt32,
                        bw: b.h.writeInt32,
                      },
                      app_id: { n: 5, br: b.d.readUint32, bw: b.h.writeUint32 },
                      required_app_id: {
                        n: 6,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      broadcast_chat_permission: {
                        n: 7,
                        br: b.d.readEnum,
                        bw: b.h.writeEnum,
                      },
                      broadcast_buffer: {
                        n: 8,
                        br: b.d.readInt32,
                        bw: b.h.writeInt32,
                      },
                      steamid: {
                        n: 9,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      chat_rate_limit: {
                        n: 10,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      enable_replay: {
                        n: 11,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_GetRTMPInfo_Response";
            }),
            n
          );
        })(p),
        ne = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.upload_stats || b.a(n.M()),
              p.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { upload_stats: { n: 1, c: ie, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastUploadStats_Response";
            }),
            n
          );
        })(p),
        ie = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.upload_result || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      upload_result: {
                        n: 1,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      time_stopped: {
                        n: 2,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      seconds_uploaded: {
                        n: 3,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      max_viewers: {
                        n: 4,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      resolution_x: {
                        n: 5,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      resolution_y: {
                        n: 6,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      avg_bandwidth: {
                        n: 7,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      total_bytes: {
                        n: 8,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      app_id: { n: 9, br: b.d.readUint32, bw: b.h.writeUint32 },
                      total_unique_viewers: {
                        n: 10,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      total_seconds_watched: {
                        n: 11,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      time_started: {
                        n: 12,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      upload_id: {
                        n: 13,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      local_address: {
                        n: 14,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      remote_address: {
                        n: 15,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      frames_per_second: {
                        n: 16,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      num_representations: {
                        n: 17,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      app_name: {
                        n: 18,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      is_replay: { n: 19, br: b.d.readBool, bw: b.h.writeBool },
                      session_id: {
                        n: 20,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastUploadStats_Response_UploadStats";
            }),
            n
          );
        })(p),
        ae = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.viewer_stats || b.a(n.M()),
              p.initialize(t, e, 0, -1, [1, 2], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      viewer_stats: { n: 1, c: oe, r: !0, q: !0 },
                      country_stats: { n: 2, c: se, r: !0, q: !0 },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastViewerStats_Response";
            }),
            n
          );
        })(p),
        oe = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.time || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      time: { n: 1, br: b.d.readUint32, bw: b.h.writeUint32 },
                      num_viewers: {
                        n: 2,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastViewerStats_Response_ViewerStats";
            }),
            n
          );
        })(p),
        se = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.country_code || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      country_code: {
                        n: 1,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      num_viewers: {
                        n: 2,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastViewerStats_Response_CountryStats";
            }),
            n
          );
        })(p),
        ce = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return p.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CBroadcast_WebRTCStartResult_Response";
            }),
            n
          );
        })(p),
        ue = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return p.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CBroadcast_WebRTCStopped_Response";
            }),
            n
          );
        })(p),
        de = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return p.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CBroadcast_WebRTCSetAnswer_Response";
            }),
            n
          );
        })(p),
        le = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.sdp_mid || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      sdp_mid: {
                        n: 1,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      sdp_mline_index: {
                        n: 2,
                        br: b.d.readInt32,
                        bw: b.h.writeInt32,
                      },
                      candidate: {
                        n: 3,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_WebRTC_Candidate";
            }),
            n
          );
        })(p),
        me = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return p.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CBroadcast_WebRTCAddHostCandidate_Response";
            }),
            n
          );
        })(p),
        fe = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return p.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CBroadcast_WebRTCAddViewerCandidate_Response";
            }),
            n
          );
        })(p),
        be = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.candidate_generation || b.a(n.M()),
              p.initialize(t, e, 0, -1, [2], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      candidate_generation: {
                        n: 1,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      candidates: { n: 2, c: le, r: !0, q: !0 },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_WebRTCGetHostCandidates_Response";
            }),
            n
          );
        })(p),
        pe = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_session_id || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_session_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_WebRTCNeedTURNServer_Notification";
            }),
            n
          );
        })(p),
        _e = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.turn_server || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      turn_server: {
                        n: 1,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_WebRTCLookupTURNServer_Response";
            }),
            n
          );
        })(p),
        he = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_session_id || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_session_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      webrtc_session_id: {
                        n: 2,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      viewer_steamid: {
                        n: 3,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      viewer_token: {
                        n: 4,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_WebRTCStart_Notification";
            }),
            n
          );
        })(p),
        Be = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_session_id || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_session_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      webrtc_session_id: {
                        n: 2,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      answer: { n: 3, br: b.d.readString, bw: b.h.writeString },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_WebRTCSetAnswer_Notification";
            }),
            n
          );
        })(p),
        ye = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_session_id || b.a(n.M()),
              p.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_session_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      webrtc_session_id: {
                        n: 2,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      candidate: { n: 3, c: le },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_WebRTCAddViewerCandidate_Notification";
            }),
            n
          );
        })(p);
      ((R = F = F || {}).BeginBroadcastSession = function (e, t) {
        return e.SendMsg("Broadcast.BeginBroadcastSession#1", t, _, {
          ePrivilege: 1,
        });
      }),
        (R.EndBroadcastSession = function (e, t) {
          return e.SendMsg("Broadcast.EndBroadcastSession#1", t, g, {
            ePrivilege: 1,
          });
        }),
        (R.StartBroadcastUpload = function (e, t) {
          return e.SendMsg("Broadcast.StartBroadcastUpload#1", t, w, {
            ePrivilege: 1,
          });
        }),
        (R.NotifyBroadcastUploadStop = function (e, t) {
          return e.SendNotification(
            "Broadcast.NotifyBroadcastUploadStop#1",
            t,
            { ePrivilege: 1 }
          );
        }),
        (R.WatchBroadcast = function (e, t) {
          return e.SendMsg("Broadcast.WatchBroadcast#1", t, C, {
            ePrivilege: 2,
          });
        }),
        (R.HeartbeatBroadcast = function (e, t) {
          return e.SendNotification("Broadcast.HeartbeatBroadcast#1", t, {
            ePrivilege: 2,
          });
        }),
        (R.StopWatchingBroadcast = function (e, t) {
          return e.SendNotification("Broadcast.StopWatchingBroadcast#1", t, {
            ePrivilege: 2,
          });
        }),
        (R.GetBroadcastStatus = function (e, t) {
          return e.SendMsg("Broadcast.GetBroadcastStatus#1", t, M, {
            ePrivilege: 2,
          });
        }),
        (R.GetBroadcastThumbnail = function (e, t) {
          return e.SendMsg("Broadcast.GetBroadcastThumbnail#1", t, S, {
            ePrivilege: 2,
          });
        }),
        (R.InviteToBroadcast = function (e, t) {
          return e.SendMsg("Broadcast.InviteToBroadcast#1", t, O, {
            ePrivilege: 1,
          });
        }),
        (R.SendBroadcastStateToServer = function (e, t) {
          return e.SendMsg("Broadcast.SendBroadcastStateToServer#1", t, j, {
            ePrivilege: 1,
          });
        }),
        (R.NotifyBroadcastSessionHeartbeat = function (e, t) {
          return e.SendNotification(
            "Broadcast.NotifyBroadcastSessionHeartbeat#1",
            t,
            { ePrivilege: 1 }
          );
        }),
        (R.GetBroadcastChatInfo = function (e, t) {
          return e.SendMsg("Broadcast.GetBroadcastChatInfo#1", t, A, {
            ePrivilege: 2,
          });
        }),
        (R.PostChatMessage = function (e, t) {
          return e.SendMsg("Broadcast.PostChatMessage#1", t, L, {
            ePrivilege: 3,
          });
        }),
        (R.UpdateChatMessageFlair = function (e, t) {
          return e.SendMsg("Broadcast.UpdateChatMessageFlair#1", t, V, {
            ePrivilege: 1,
          });
        }),
        (R.MuteBroadcastChatUser = function (e, t) {
          return e.SendMsg("Broadcast.MuteBroadcastChatUser#1", t, H, {
            ePrivilege: 3,
          });
        }),
        (R.RemoveUserChatText = function (e, t) {
          return e.SendMsg("Broadcast.RemoveUserChatText#1", t, Y, {
            ePrivilege: 3,
          });
        }),
        (R.GetBroadcastChatUserNames = function (e, t) {
          return e.SendMsg("Broadcast.GetBroadcastChatUserNames#1", t, $, {
            ePrivilege: 1,
          });
        }),
        (R.StartBuildClip = function (e, t) {
          return e.SendMsg("Broadcast.StartBuildClip#1", t, X, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (R.GetBuildClipStatus = function (e, t) {
          return e.SendMsg("Broadcast.GetBuildClipStatus#1", t, Q, {
            bConstMethod: !0,
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (R.SetClipDetails = function (e, t) {
          return e.SendMsg("Broadcast.SetClipDetails#1", t, Z, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (R.GetClipDetails = function (e, t) {
          return e.SendMsg("Broadcast.GetClipDetails#1", t, ee, {
            bConstMethod: !0,
            ePrivilege: 0,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (R.SetRTMPInfo = function (e, t) {
          return e.SendMsg("Broadcast.SetRTMPInfo#1", t, te, { ePrivilege: 1 });
        }),
        (R.GetRTMPInfo = function (e, t) {
          return e.SendMsg("Broadcast.GetRTMPInfo#1", t, re, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
        (R.NotifyWebRTCHaveTURNServer = function (e, t) {
          return e.SendNotification(
            "Broadcast.NotifyWebRTCHaveTURNServer#1",
            t,
            { ePrivilege: 1 }
          );
        }),
        (R.WebRTCStartResult = function (e, t) {
          return e.SendMsg("Broadcast.WebRTCStartResult#1", t, ce, {
            ePrivilege: 1,
          });
        }),
        (R.WebRTCStopped = function (e, t) {
          return e.SendMsg("Broadcast.WebRTCStopped#1", t, ue, {
            ePrivilege: 1,
          });
        }),
        (R.WebRTCSetAnswer = function (e, t) {
          return e.SendMsg("Broadcast.WebRTCSetAnswer#1", t, de, {
            ePrivilege: 1,
          });
        }),
        (R.WebRTCLookupTURNServer = function (e, t) {
          return e.SendMsg("Broadcast.WebRTCLookupTURNServer#1", t, _e, {
            ePrivilege: 1,
          });
        }),
        (R.WebRTCAddHostCandidate = function (e, t) {
          return e.SendMsg("Broadcast.WebRTCAddHostCandidate#1", t, me, {
            ePrivilege: 1,
          });
        }),
        (R.WebRTCAddViewerCandidate = function (e, t) {
          return e.SendMsg("Broadcast.WebRTCAddViewerCandidate#1", t, fe, {
            ePrivilege: 1,
          });
        }),
        (R.WebRTCGetHostCandidates = function (e, t) {
          return e.SendMsg("Broadcast.WebRTCGetHostCandidates#1", t, be, {
            ePrivilege: 1,
          });
        }),
        (R.GetBroadcastUploadStats = function (e, t) {
          return e.SendMsg("Broadcast.GetBroadcastUploadStats#1", t, ne, {
            bConstMethod: !0,
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (R.GetBroadcastViewerStats = function (e, t) {
          return e.SendMsg("Broadcast.GetBroadcastViewerStats#1", t, ae, {
            bConstMethod: !0,
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        ((W = T = T || {}).NotifyBroadcastViewerStateHandler = {
          name: "BroadcastClient.NotifyBroadcastViewerState#1",
          request: z,
        }),
        (W.NotifyWaitingBroadcastViewerHandler = {
          name: "BroadcastClient.NotifyWaitingBroadcastViewer#1",
          request: I,
        }),
        (W.NotifyBroadcastUploadStartedHandler = {
          name: "BroadcastClient.NotifyBroadcastUploadStarted#1",
          request: v,
        }),
        (W.NotifyStopBroadcastUploadHandler = {
          name: "BroadcastClient.NotifyStopBroadcastUpload#1",
          request: U,
        }),
        (W.NotifySessionClosedHandler = {
          name: "BroadcastClient.NotifySessionClosed#1",
          request: N,
        }),
        (W.NotifyViewerBroadcastInviteHandler = {
          name: "BroadcastClient.NotifyViewerBroadcastInvite#1",
          request: G,
        }),
        (W.NotifyBroadcastStatusHandler = {
          name: "BroadcastClient.NotifyBroadcastStatus#1",
          request: x,
        }),
        (W.NotifyBroadcastChannelLiveHandler = {
          name: "BroadcastClient.NotifyBroadcastChannelLive#1",
          request: E,
        }),
        (W.SendThumbnailToRelayHandler = {
          name: "BroadcastClient.SendThumbnailToRelay#1",
          request: P,
        }),
        (W.NotifyWebRTCNeedTURNServerHandler = {
          name: "BroadcastClient.NotifyWebRTCNeedTURNServer#1",
          request: pe,
        }),
        (W.NotifyWebRTCStartHandler = {
          name: "BroadcastClient.NotifyWebRTCStart#1",
          request: he,
        }),
        (W.NotifyWebRTCSetAnswerHandler = {
          name: "BroadcastClient.NotifyWebRTCSetAnswer#1",
          request: Be,
        }),
        (W.NotifyWebRTCAddViewerCandidateHandler = {
          name: "BroadcastClient.NotifyWebRTCAddViewerCandidate#1",
          request: ye,
        });
      var ge = f.Message;
      var we,
        ve,
        Me = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_channel_id || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_CreateBroadcastChannel_Response";
            }),
            n
          );
        })(ge),
        Se = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_channel_id || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      unique_name: {
                        n: 2,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      steamid: {
                        n: 3,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelID_Response";
            }),
            n
          );
        })(ge),
        Ce = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return ge.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CSteamTV_SetBroadcastChannelProfile_Response";
            }),
            n
          );
        })(ge),
        Oe = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.unique_name || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      unique_name: {
                        n: 1,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      owner_steamid: {
                        n: 2,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      name: { n: 3, br: b.d.readString, bw: b.h.writeString },
                      language: {
                        n: 4,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      headline: {
                        n: 5,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      summary: {
                        n: 6,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      schedule: {
                        n: 7,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      rules: { n: 8, br: b.d.readString, bw: b.h.writeString },
                      panels: { n: 9, br: b.d.readString, bw: b.h.writeString },
                      is_partnered: {
                        n: 10,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelProfile_Response";
            }),
            n
          );
        })(ge),
        je = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.replace_image_hash || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      replace_image_hash: {
                        n: 1,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_SetBroadcastChannelImage_Response";
            }),
            n
          );
        })(ge),
        ze = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.images || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { images: { n: 1, c: Fe, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelImages_Response";
            }),
            n
          );
        })(ge),
        Fe = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.image_type || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      image_type: { n: 1, br: b.d.readEnum, bw: b.h.writeEnum },
                      image_path: {
                        n: 2,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      image_index: {
                        n: 3,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelImages_Response_Images";
            }),
            n
          );
        })(ge),
        Re = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.links || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { links: { n: 1, c: Te, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelLinks_Response";
            }),
            n
          );
        })(ge),
        Te = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.link_index || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      link_index: {
                        n: 1,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      url: { n: 2, br: b.d.readString, bw: b.h.writeString },
                      link_description: {
                        n: 3,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      left: { n: 4, br: b.d.readUint32, bw: b.h.writeUint32 },
                      top: { n: 5, br: b.d.readUint32, bw: b.h.writeUint32 },
                      width: { n: 6, br: b.d.readUint32, bw: b.h.writeUint32 },
                      height: { n: 7, br: b.d.readUint32, bw: b.h.writeUint32 },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelLinks_Response_Links";
            }),
            n
          );
        })(ge),
        We = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return ge.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CSteamTV_SetBroadcastChannelLinkRegions_Response";
            }),
            n
          );
        })(ge),
        Ie = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.is_live || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      is_live: { n: 1, br: b.d.readBool, bw: b.h.writeBool },
                      is_disabled: {
                        n: 2,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                      appid: { n: 3, br: b.d.readUint32, bw: b.h.writeUint32 },
                      viewers: {
                        n: 4,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      views: {
                        n: 5,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      broadcaster_steamid: {
                        n: 6,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      thumbnail_url: {
                        n: 7,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      followers: {
                        n: 8,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      subscribers: {
                        n: 9,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      unique_name: {
                        n: 10,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      broadcast_session_id: {
                        n: 11,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelStatus_Response";
            }),
            n
          );
        })(ge),
        Ue = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_channel_id || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      unique_name: {
                        n: 2,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      name: { n: 3, br: b.d.readString, bw: b.h.writeString },
                      appid: { n: 4, br: b.d.readUint32, bw: b.h.writeUint32 },
                      viewers: {
                        n: 5,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      views: {
                        n: 6,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      thumbnail_url: {
                        n: 7,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      followers: {
                        n: 8,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      headline: {
                        n: 9,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      avatar_url: {
                        n: 10,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      broadcaster_steamid: {
                        n: 11,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      subscribers: {
                        n: 12,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      background_url: {
                        n: 13,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      is_featured: {
                        n: 14,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                      is_disabled: {
                        n: 15,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                      is_live: { n: 16, br: b.d.readBool, bw: b.h.writeBool },
                      language: {
                        n: 17,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      reports: {
                        n: 18,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      is_partnered: {
                        n: 19,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "GetBroadcastChannelEntry";
            }),
            n
          );
        })(ge),
        Ne = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.results || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { results: { n: 1, c: Ue, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetFollowedChannels_Response";
            }),
            n
          );
        })(ge),
        xe = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.results || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { results: { n: 1, c: Ue, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetSubscribedChannels_Response";
            }),
            n
          );
        })(ge),
        Ee = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.is_followed || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      is_followed: {
                        n: 1,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_FollowBroadcastChannel_Response";
            }),
            n
          );
        })(ge),
        Pe = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.is_subscribed || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      is_subscribed: {
                        n: 1,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_SubscribeBroadcastChannel_Response";
            }),
            n
          );
        })(ge),
        Ge = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return ge.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CSteamTV_ReportBroadcastChannel_Response";
            }),
            n
          );
        })(ge),
        Ae = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.is_followed || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      is_followed: {
                        n: 1,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                      is_subscribed: {
                        n: 2,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelInteraction_Response";
            }),
            n
          );
        })(ge),
        De = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.appid || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [5], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      appid: { n: 1, br: b.d.readUint32, bw: b.h.writeUint32 },
                      name: { n: 2, br: b.d.readString, bw: b.h.writeString },
                      image: { n: 3, br: b.d.readString, bw: b.h.writeString },
                      viewers: {
                        n: 4,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      channels: { n: 5, c: Ue, r: !0, q: !0 },
                      release_date: {
                        n: 6,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      developer: {
                        n: 7,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      publisher: {
                        n: 8,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_Game";
            }),
            n
          );
        })(ge),
        Le = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.results || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { results: { n: 1, c: De, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetGames_Response";
            }),
            n
          );
        })(ge),
        ke = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.results || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { results: { n: 1, c: Ue, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetChannels_Response";
            }),
            n
          );
        })(ge),
        Ve = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcasters || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { broadcasters: { n: 1, c: qe, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelBroadcasters_Response";
            }),
            n
          );
        })(ge),
        qe = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.steamid || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      steamid: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      name: { n: 2, br: b.d.readString, bw: b.h.writeString },
                      rtmp_token: {
                        n: 3,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster";
            }),
            n
          );
        })(ge),
        He = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.issuer_steamid || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      issuer_steamid: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      chatter_steamid: {
                        n: 2,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      time_expires: {
                        n: 3,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      permanent: { n: 4, br: b.d.readBool, bw: b.h.writeBool },
                      name: { n: 5, br: b.d.readString, bw: b.h.writeString },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_ChatBan";
            }),
            n
          );
        })(ge),
        Ke = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_channel_id || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      chatter_steamid: {
                        n: 2,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      duration: {
                        n: 3,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      permanent: { n: 4, br: b.d.readBool, bw: b.h.writeBool },
                      undo: { n: 5, br: b.d.readBool, bw: b.h.writeBool },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_AddChatBan_Request";
            }),
            n
          );
        })(ge),
        Ye = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return ge.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CSteamTV_AddChatBan_Response";
            }),
            n
          );
        })(ge),
        $e = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.results || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { results: { n: 1, c: He, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetChatBans_Response";
            }),
            n
          );
        })(ge),
        Je = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_channel_id || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      moderator_steamid: {
                        n: 2,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      undo: { n: 3, br: b.d.readBool, bw: b.h.writeBool },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_AddChatModerator_Request";
            }),
            n
          );
        })(ge),
        Xe = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return ge.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CSteamTV_AddChatModerator_Response";
            }),
            n
          );
        })(ge),
        Qe = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_channel_id || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetChatModerators_Request";
            }),
            n
          );
        })(ge),
        Ze = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.steamid || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      steamid: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      name: { n: 2, br: b.d.readString, bw: b.h.writeString },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_ChatModerator";
            }),
            n
          );
        })(ge),
        et = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.results || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { results: { n: 1, c: Ze, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetChatModerators_Response";
            }),
            n
          );
        })(ge),
        tt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return ge.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CSteamTV_AddWordBan_Response";
            }),
            n
          );
        })(ge),
        rt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.results || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      results: {
                        n: 1,
                        r: !0,
                        q: !0,
                        br: b.d.readString,
                        bw: b.h.writeRepeatedString,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetWordBans_Response";
            }),
            n
          );
        })(ge),
        nt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_channel_id || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_JoinChat_Request";
            }),
            n
          );
        })(ge),
        it = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.chat_id || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [3], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      chat_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      view_url_template: {
                        n: 2,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      flair_group_ids: {
                        n: 3,
                        r: !0,
                        q: !0,
                        br: b.d.readUint64String,
                        bw: b.h.writeRepeatedUint64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_JoinChat_Response";
            }),
            n
          );
        })(ge),
        at = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.results || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { results: { n: 1, c: Ue, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_Search_Response";
            }),
            n
          );
        })(ge),
        ot = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.stream_live_email || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      stream_live_email: {
                        n: 1,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                      stream_live_notification: {
                        n: 2,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetSteamTVUserSettings_Response";
            }),
            n
          );
        })(ge),
        st = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return ge.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CSteamTV_SetSteamTVUserSettings_Response";
            }),
            n
          );
        })(ge),
        ct = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.results || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { results: { n: 1, c: Ue, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetMyBroadcastChannels_Response";
            }),
            n
          );
        })(ge),
        ut = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcasts || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { broadcasts: { n: 1, c: Ue, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_Takeover";
            }),
            n
          );
        })(ge),
        dt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcasts || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcasts: { n: 1, c: Ue, r: !0, q: !0 },
                      appid: { n: 2, br: b.d.readUint32, bw: b.h.writeUint32 },
                      title: { n: 3, br: b.d.readString, bw: b.h.writeString },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_SingleGame";
            }),
            n
          );
        })(ge),
        lt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.appid || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      appid: { n: 1, br: b.d.readUint32, bw: b.h.writeUint32 },
                      game_name: {
                        n: 2,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      broadcast: { n: 3, c: Ue },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "GameListEntry";
            }),
            n
          );
        })(ge),
        mt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.entries || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      entries: { n: 1, c: lt, r: !0, q: !0 },
                      title: { n: 2, br: b.d.readString, bw: b.h.writeString },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_GameList";
            }),
            n
          );
        })(ge),
        ft = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcasts || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcasts: { n: 1, c: Ue, r: !0, q: !0 },
                      title: { n: 2, br: b.d.readString, bw: b.h.writeString },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_QuickExplore";
            }),
            n
          );
        })(ge),
        bt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcasts || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcasts: { n: 1, c: Ue, r: !0, q: !0 },
                      title: { n: 2, br: b.d.readString, bw: b.h.writeString },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_ConveyorBelt";
            }),
            n
          );
        })(ge),
        pt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast: { n: 1, c: Ue },
                      title: { n: 2, br: b.d.readString, bw: b.h.writeString },
                      chat_group_id: {
                        n: 3,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_WatchParty";
            }),
            n
          );
        })(ge),
        _t = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast: { n: 1, c: Ue },
                      title: { n: 2, br: b.d.readString, bw: b.h.writeString },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_Developer";
            }),
            n
          );
        })(ge),
        ht = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.title || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      title: { n: 1, br: b.d.readString, bw: b.h.writeString },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_Event";
            }),
            n
          );
        })(ge),
        Bt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.template_type || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      template_type: {
                        n: 1,
                        br: b.d.readEnum,
                        bw: b.h.writeEnum,
                      },
                      takeover: { n: 2, c: ut },
                      single_game: { n: 3, c: dt },
                      game_list: { n: 4, c: mt },
                      quick_explore: { n: 5, c: ft },
                      conveyor_belt: { n: 6, c: bt },
                      watch_party: { n: 7, c: pt },
                      developer: { n: 8, c: _t },
                      event: { n: 9, c: ht },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_HomePageContentRow";
            }),
            n
          );
        })(ge),
        yt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.rows || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { rows: { n: 1, c: Bt, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetHomePageContents_Response";
            }),
            n
          );
        })(ge),
        gt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_clip_id || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_clip_id: {
                        n: 1,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      channel_id: {
                        n: 2,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      app_id: { n: 3, br: b.d.readUint32, bw: b.h.writeUint32 },
                      broadcaster_steamid: {
                        n: 4,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      creator_steamid: {
                        n: 5,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      video_description: {
                        n: 6,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      live_time: {
                        n: 7,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      length_ms: {
                        n: 8,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      thumbnail_path: {
                        n: 9,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_BroadcastClipInfo";
            }),
            n
          );
        })(ge),
        wt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.clips || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      clips: { n: 1, c: gt, r: !0, q: !0 },
                      thumbnail_host: {
                        n: 2,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelClips_Response";
            }),
            n
          );
        })(ge);
      ((ve = we = we || {}).CreateBroadcastChannel = function (e, t) {
        return e.SendMsg("SteamTV.CreateBroadcastChannel#1", t, Me, {
          ePrivilege: 1,
          eWebAPIKeyRequirement: 2,
        });
      }),
        (ve.GetBroadcastChannelID = function (e, t) {
          return e.SendMsg("SteamTV.GetBroadcastChannelID#1", t, Se, {
            bConstMethod: !0,
            ePrivilege: 0,
          });
        }),
        (ve.SetBroadcastChannelProfile = function (e, t) {
          return e.SendMsg("SteamTV.SetBroadcastChannelProfile#1", t, Ce, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (ve.GetBroadcastChannelProfile = function (e, t) {
          return e.SendMsg("SteamTV.GetBroadcastChannelProfile#1", t, Oe, {
            bConstMethod: !0,
            ePrivilege: 0,
          });
        }),
        (ve.SetBroadcastChannelImage = function (e, t) {
          return e.SendMsg("SteamTV.SetBroadcastChannelImage#1", t, je, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (ve.GetBroadcastChannelImages = function (e, t) {
          return e.SendMsg("SteamTV.GetBroadcastChannelImages#1", t, ze, {
            bConstMethod: !0,
            ePrivilege: 0,
          });
        }),
        (ve.SetBroadcastChannelLinkRegions = function (e, t) {
          return e.SendMsg("SteamTV.SetBroadcastChannelLinkRegions#1", t, We, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (ve.GetBroadcastChannelLinks = function (e, t) {
          return e.SendMsg("SteamTV.GetBroadcastChannelLinks#1", t, Re, {
            bConstMethod: !0,
            ePrivilege: 0,
          });
        }),
        (ve.GetBroadcastChannelBroadcasters = function (e, t) {
          return e.SendMsg("SteamTV.GetBroadcastChannelBroadcasters#1", t, Ve, {
            bConstMethod: !0,
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (ve.GetFollowedChannels = function (e, t) {
          return e.SendMsg("SteamTV.GetFollowedChannels#1", t, Ne, {
            bConstMethod: !0,
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (ve.GetSubscribedChannels = function (e, t) {
          return e.SendMsg("SteamTV.GetSubscribedChannels#1", t, xe, {
            bConstMethod: !0,
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (ve.GetBroadcastChannelStatus = function (e, t) {
          return e.SendMsg("SteamTV.GetBroadcastChannelStatus#1", t, Ie, {
            bConstMethod: !0,
            ePrivilege: 0,
          });
        }),
        (ve.FollowBroadcastChannel = function (e, t) {
          return e.SendMsg("SteamTV.FollowBroadcastChannel#1", t, Ee, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (ve.SubscribeBroadcastChannel = function (e, t) {
          return e.SendMsg("SteamTV.SubscribeBroadcastChannel#1", t, Pe, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (ve.GetBroadcastChannelClips = function (e, t) {
          return e.SendMsg("SteamTV.GetBroadcastChannelClips#1", t, wt, {
            bConstMethod: !0,
            ePrivilege: 0,
          });
        }),
        (ve.ReportBroadcastChannel = function (e, t) {
          return e.SendMsg("SteamTV.ReportBroadcastChannel#1", t, Ge, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (ve.GetBroadcastChannelInteraction = function (e, t) {
          return e.SendMsg("SteamTV.GetBroadcastChannelInteraction#1", t, Ae, {
            bConstMethod: !0,
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (ve.GetGames = function (e, t) {
          return e.SendMsg("SteamTV.GetGames#1", t, Le, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
        (ve.GetChannels = function (e, t) {
          return e.SendMsg("SteamTV.GetChannels#1", t, ke, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
        (ve.AddChatBan = function (e, t) {
          return e.SendMsg("SteamTV.AddChatBan#1", t, Ye, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (ve.GetChatBans = function (e, t) {
          return e.SendMsg("SteamTV.GetChatBans#1", t, $e, {
            bConstMethod: !0,
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (ve.AddChatModerator = function (e, t) {
          return e.SendMsg("SteamTV.AddChatModerator#1", t, Xe, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (ve.GetChatModerators = function (e, t) {
          return e.SendMsg("SteamTV.GetChatModerators#1", t, et, {
            bConstMethod: !0,
            ePrivilege: 0,
          });
        }),
        (ve.AddWordBan = function (e, t) {
          return e.SendMsg("SteamTV.AddWordBan#1", t, tt, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (ve.GetWordBans = function (e, t) {
          return e.SendMsg("SteamTV.GetWordBans#1", t, rt, {
            bConstMethod: !0,
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (ve.JoinChat = function (e, t) {
          return e.SendMsg("SteamTV.JoinChat#1", t, it, {
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
        (ve.Search = function (e, t) {
          return e.SendMsg("SteamTV.Search#1", t, at, {
            bConstMethod: !0,
            ePrivilege: 0,
          });
        }),
        (ve.GetSteamTVUserSettings = function (e, t) {
          return e.SendMsg("SteamTV.GetSteamTVUserSettings#1", t, ot, {
            bConstMethod: !0,
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (ve.SetSteamTVUserSettings = function (e, t) {
          return e.SendMsg("SteamTV.SetSteamTVUserSettings#1", t, st, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (ve.GetMyBroadcastChannels = function (e, t) {
          return e.SendMsg("SteamTV.GetMyBroadcastChannels#1", t, ct, {
            bConstMethod: !0,
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (ve.GetHomePageContents = function (e, t) {
          return e.SendMsg("SteamTV.GetHomePageContents#1", t, yt, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        });
      var vt,
        Mt,
        St = r("qiKp"),
        Ct = r("TLQK"),
        Ot = r("bxiW"),
        jt = r("lkRc"),
        zt = f.Message,
        Ft = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.bincremental || b.a(n.M()),
              zt.initialize(t, e, 0, -1, [2], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      bincremental: {
                        n: 1,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                      friends: { n: 2, c: Rt, r: !0, q: !0 },
                      max_friend_count: {
                        n: 3,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      active_friend_count: {
                        n: 4,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      friends_limit_hit: {
                        n: 5,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CMsgClientFriendsList";
            }),
            n
          );
        })(zt),
        Rt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.ulfriendid || b.a(n.M()),
              zt.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      ulfriendid: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      efriendrelationship: {
                        n: 2,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CMsgClientFriendsList_Friend";
            }),
            n
          );
        })(zt),
        Tt = f.Message,
        Wt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.groupid || b.a(n.M()),
              Tt.initialize(t, e, 0, -1, [3], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      groupid: {
                        n: 1,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      name: { n: 2, br: b.d.readString, bw: b.h.writeString },
                      accountid_members: {
                        n: 3,
                        r: !0,
                        q: !0,
                        br: b.d.readUint32,
                        bw: b.h.writeRepeatedUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CFriendsListCategory";
            }),
            n
          );
        })(Tt),
        It = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.categories || b.a(n.M()),
              Tt.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { categories: { n: 1, c: Wt, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CFriendsList_GetCategories_Response";
            }),
            n
          );
        })(Tt),
        Ut = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.accountid || b.a(n.M()),
              Tt.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      accountid: {
                        n: 1,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      clanid: { n: 2, br: b.d.readUint32, bw: b.h.writeUint32 },
                      chat_group_id: {
                        n: 3,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CFriendsListFavoriteEntry";
            }),
            n
          );
        })(Tt),
        Nt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.favorites || b.a(n.M()),
              Tt.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { favorites: { n: 1, c: Ut, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CFriendsList_GetFavorites_Response";
            }),
            n
          );
        })(Tt),
        xt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return Tt.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CFriendsList_SetFavorites_Response";
            }),
            n
          );
        })(Tt),
        Et = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.favorites || b.a(n.M()),
              Tt.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { favorites: { n: 1, c: Ut, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CFriendsList_FavoritesChanged_Notification";
            }),
            n
          );
        })(Tt),
        Pt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return Tt.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CFriendsList_GetFriendsList_Request";
            }),
            n
          );
        })(Tt),
        Gt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.friendslist || b.a(n.M()),
              Tt.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { friendslist: { n: 1, c: Ft } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CFriendsList_GetFriendsList_Response";
            }),
            n
          );
        })(Tt);
      ((Mt = vt = vt || {}).GetCategories = function (e, t) {
        return e.SendMsg("FriendsList.GetCategories#1", t, It, {
          bConstMethod: !0,
          ePrivilege: 1,
        });
      }),
        (Mt.GetFriendsList = function (e, t) {
          return e.SendMsg("FriendsList.GetFriendsList#1", t, Gt, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
        (Mt.GetFavorites = function (e, t) {
          return e.SendMsg("FriendsList.GetFavorites#1", t, Nt, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
        (Mt.SetFavorites = function (e, t) {
          return e.SendMsg("FriendsList.SetFavorites#1", t, xt, {
            ePrivilege: 1,
          });
        });
      var At = r("oFam"),
        Dt = r("kyHq"),
        Lt = r("uobO"),
        kt = (function () {
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
              (this.m_TextFilterPreferences = new Dt.f());
            var e = new At.a();
            (this.m_TextFilterPreferences.eTextFilterSetting = e.text_filter_setting()),
              (this.m_TextFilterPreferences.bIgnoreFriends = e.text_filter_ignore_friends()),
              (this.m_TextFilterWords = new At.m());
          }
          return (
            (e.prototype.Init = function (t, r, n) {
              return (
                void 0 === t && (t = 0),
                void 0 === r && (r = null),
                void 0 === n && (n = null),
                Object(h.b)(this, void 0, void 0, function () {
                  return Object(h.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return (
                          (this.m_unAccountID = t),
                          (this.m_Transport = r),
                          (this.m_Storage = n),
                          (this.m_strBannedWords = ""),
                          (this.m_strProfanityWords = ""),
                          (this.m_strCleanWords = ""),
                          [4, this.LoadFilter()]
                        );
                      case 1:
                        return e.sent(), [4, this.LoadTextFilterPreferences()];
                      case 2:
                        return e.sent(), [4, this.LoadTextFilterWords()];
                      case 3:
                        return e.sent(), [4, this.RequestUpdatedSettings()];
                      case 4:
                        return e.sent(), [4, this.RequestFriendsList()];
                      case 5:
                        return e.sent(), [4, this.LoadLanguage(jt.c.LANGUAGE)];
                      case 6:
                        return (
                          e.sent(),
                          "english" === jt.c.LANGUAGE
                            ? [3, 8]
                            : [4, this.LoadLanguage("english")]
                        );
                      case 7:
                        e.sent(), (e.label = 8);
                      case 8:
                        return this.OnFilterDataChanged(), [2];
                    }
                  });
                })
              );
            }),
            (e.prototype.LoadTextFilterPreferences = function () {
              return Object(h.b)(this, void 0, void 0, function () {
                var t;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
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
                      (t = e.sent()) && (this.m_TextFilterPreferences = t),
                        (e.label = 2);
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
              return Object(h.b)(this, void 0, void 0, function () {
                var t;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
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
                      (t = e.sent()) &&
                        (this.m_TextFilterWords = At.m.fromObject(t)),
                        (e.label = 2);
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
              return Object(h.b)(this, void 0, void 0, function () {
                var t, r;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
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
                        (t = e.sent()),
                        [
                          4,
                          this.m_Storage.GetObject(
                            "CTextFilterStore_strCleanPattern"
                          ),
                        ]
                      );
                    case 2:
                      (r = e.sent()),
                        null != t && null != r && this.BRebuildFilter(t, r),
                        (e.label = 3);
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
              return Object(h.b)(this, void 0, void 0, function () {
                var t, r, n, i, a, o, s, c;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      if (((t = new At.a()), 0 === this.m_unAccountID))
                        return [3, 7];
                      e.label = 1;
                    case 1:
                      return (e.trys.push([1, 6, , 7]), this.m_Transport)
                        ? ((r = l.b.Init(At.b)),
                          [
                            4,
                            At.n.GetCommunityPreferences(this.m_Transport, r),
                          ])
                        : [3, 3];
                    case 2:
                      return (
                        (n = e.sent()), (t = n.Body().preferences()), [3, 5]
                      );
                    case 3:
                      return (
                        (s = {
                          sessionid: jt.c.SESSIONID,
                          origin: Object(jt.e)(),
                        }),
                        [
                          4,
                          B.a.get(
                            jt.c.COMMUNITY_BASE_URL +
                              "textfilter/ajaxgetcommunitypreferences",
                            { params: s, withCredentials: !0 }
                          ),
                        ]
                      );
                    case 4:
                      (c = e.sent()),
                        (t = At.a.fromObject(c.data.preferences)),
                        (e.label = 5);
                    case 5:
                      return [3, 7];
                    case 6:
                      return e.sent(), [3, 7];
                    case 7:
                      if (
                        (this.UpdateCommunityPreferences(t),
                        t.text_filter_words_revision() ===
                          this.m_TextFilterWords.text_filter_words_revision())
                      )
                        return [3, 15];
                      if (
                        ((i = new At.m()), 0 === t.text_filter_words_revision())
                      )
                        return [3, 14];
                      e.label = 8;
                    case 8:
                      return (e.trys.push([8, 13, , 14]), this.m_Transport)
                        ? ((a = l.b.Init(At.e)),
                          [4, At.n.GetTextFilterWords(this.m_Transport, a)])
                        : [3, 10];
                    case 9:
                      return (o = e.sent()), (i = o.Body().words()), [3, 12];
                    case 10:
                      return (
                        (s = {
                          sessionid: jt.c.SESSIONID,
                          origin: Object(jt.e)(),
                        }),
                        [
                          4,
                          B.a.get(
                            jt.c.COMMUNITY_BASE_URL +
                              "textfilter/ajaxgettextfiltercustomwords",
                            { params: s, withCredentials: !0 }
                          ),
                        ]
                      );
                    case 11:
                      (c = e.sent()),
                        (i = At.m.fromObject(c.data.words)),
                        (e.label = 12);
                    case 12:
                      return [3, 14];
                    case 13:
                      return e.sent(), [3, 14];
                    case 14:
                      this.UpdateTextFilterWords(i), (e.label = 15);
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
              return Object(h.b)(this, void 0, void 0, function () {
                var t, r, n, i, a;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      if (((t = new Ft()), 0 === this.m_unAccountID))
                        return [3, 7];
                      e.label = 1;
                    case 1:
                      return (e.trys.push([1, 6, , 7]), this.m_Transport)
                        ? ((r = l.b.Init(Pt)),
                          [4, vt.GetFriendsList(this.m_Transport, r)])
                        : [3, 3];
                    case 2:
                      return (
                        (n = e.sent()), (t = n.Body().friendslist()), [3, 5]
                      );
                    case 3:
                      return (
                        (i = {
                          sessionid: jt.c.SESSIONID,
                          origin: Object(jt.e)(),
                        }),
                        [
                          4,
                          B.a.get(
                            jt.c.COMMUNITY_BASE_URL +
                              "textfilter/ajaxgetfriendslist",
                            { params: i, withCredentials: !0 }
                          ),
                        ]
                      );
                    case 4:
                      (a = e.sent()),
                        (t = Ft.fromObject(a.data.friendslist)),
                        (e.label = 5);
                    case 5:
                      return [3, 7];
                    case 6:
                      return e.sent(), [3, 7];
                    case 7:
                      return this.SetFriendsList(t), [2];
                  }
                });
              });
            }),
            (e.prototype.SetFriendsList = function (e) {
              e.bincremental() || this.m_mapPlayerCache.clear();
              for (var t = 0, r = e.friends(); t < r.length; t++) {
                var n,
                  i = r[t],
                  a = new m.a(i.ulfriendid());
                a.BIsIndividualAccount() &&
                  ((n = i.efriendrelationship()),
                  this.m_mapPlayerCache.set(a.GetAccountID(), n));
              }
            }),
            (e.prototype.BIsFriend = function (e) {
              return (
                !!this.m_mapPlayerCache.has(e) &&
                3 == this.m_mapPlayerCache.get(e)
              );
            }),
            (e.prototype.LoadLanguage = function (s) {
              return Object(h.b)(this, void 0, void 0, function () {
                var t, r, n, i, a, o;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (t = "1"),
                        (r =
                          jt.c.COMMUNITY_CDN_URL +
                          "textfilter/gettextfilterdictionary?type=banned&language=" +
                          s +
                          "&v=" +
                          t +
                          "&origin=" +
                          Object(jt.e)()),
                        (e.label = 1);
                    case 1:
                      return e.trys.push([1, 3, , 4]), [4, B.a.get(r)];
                    case 2:
                      return (
                        (a = e.sent()),
                        (this.m_strBannedWords += a.data),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (n = e.sent()),
                        console.error(
                          "Failed to load filter dictionary " + r,
                          n
                        ),
                        [3, 4]
                      );
                    case 4:
                      (r =
                        jt.c.COMMUNITY_CDN_URL +
                        "textfilter/gettextfilterdictionary?type=profanity&language=" +
                        s +
                        "&v=" +
                        t +
                        "&origin=" +
                        Object(jt.e)()),
                        (e.label = 5);
                    case 5:
                      return e.trys.push([5, 7, , 8]), [4, B.a.get(r)];
                    case 6:
                      return (
                        (a = e.sent()),
                        (this.m_strProfanityWords += a.data),
                        [3, 8]
                      );
                    case 7:
                      return (
                        (i = e.sent()),
                        console.error(
                          "Failed to load filter dictionary " + r,
                          i
                        ),
                        [3, 8]
                      );
                    case 8:
                      (r =
                        jt.c.COMMUNITY_CDN_URL +
                        "textfilter/gettextfilterdictionary?type=clean_public&language=" +
                        s +
                        "&v=" +
                        t +
                        "&origin=" +
                        Object(jt.e)()),
                        (e.label = 9);
                    case 9:
                      return e.trys.push([9, 11, , 12]), [4, B.a.get(r)];
                    case 10:
                      return (
                        (a = e.sent()),
                        (this.m_strCleanWords += a.data),
                        [3, 12]
                      );
                    case 11:
                      return (
                        (o = e.sent()),
                        console.error(
                          "Failed to load filter dictionary " + r,
                          o
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
              return 0 < t.length ? "\\b(" + t.join("|") + ")\\b" : "";
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
                    Object(Lt.a)().ReportError(
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
                    Object(Lt.a)().ReportError(
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
              return (
                "string" == typeof e && "" !== e
                  ? (n = new m.a(e).GetAccountID())
                  : "number" == typeof e && (n = e),
                !t ||
                n == this.m_unAccountID ||
                (this.m_TextFilterPreferences.bIgnoreFriends &&
                  this.BIsFriend(n))
                  ? t
                  : t.replace(this.m_regexBannedWords, function (e) {
                      return r.m_regexCleanWords &&
                        0 == e.search(r.m_regexCleanWords)
                        ? e
                        : r.CreateProfanityReplacement(e.length);
                    })
              );
            }),
            Object(h.c)([o.C], e.prototype, "m_TextFilterPreferences", void 0),
            Object(h.c)([o.C], e.prototype, "m_mapPlayerCache", void 0),
            Object(h.c)([o.C], e.prototype, "m_regexBannedWords", void 0),
            Object(h.c)([o.C], e.prototype, "m_regexCleanWords", void 0),
            Object(h.c)([o.k], e.prototype, "UpdateCommunityPreferences", null),
            Object(h.c)([o.k], e.prototype, "SetFriendsList", null),
            Object(h.c)([o.k], e.prototype, "BRebuildFilter", null),
            e
          );
        })(),
        Vt = (function () {
          function e() {
            this.m_mapChats = new Map();
          }
          return (
            (e.prototype.GetChat = function (e, t) {
              return this.m_mapChats.get(e) || this.m_mapChats.get(t);
            }),
            (e.prototype.GetOrCreateChat = function (e, t) {
              var r = this.GetChat(e, t);
              return r || ((r = new qt()), this.m_mapChats.set(e || t, r)), r;
            }),
            Object(h.c)([o.C], e.prototype, "m_mapChats", void 0),
            e
          );
        })(),
        qt = (function () {
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
              (this.m_webAPIInterface = new d.a(
                jt.c.WEBAPI_BASE_URL,
                jt.i.webapi_token
              ));
          }
          return (
            (e.prototype.InitTextFilter = function () {
              this.m_textFilterStore = new kt();
              var e = 0;
              "" !== jt.i.steamid && (e = new m.a(jt.i.steamid).GetAccountID()),
                this.m_textFilterStore.Init(e, null, new u.a());
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
              (this.m_webAPIInterface = new d.a(
                jt.c.WEBAPI_BASE_URL,
                jt.i.webapi_token
              )),
                (this.m_ulBroadcastSteamID = e),
                (this.m_ulBroadcastID = t),
                this.InitTextFilter(),
                this.RequestChatInfo();
            }),
            (e.prototype.StartForChannel = function (e) {
              (this.m_webAPIInterface = new d.a(
                jt.c.WEBAPI_BASE_URL,
                jt.i.webapi_token
              )),
                (this.m_ulBroadcastChannelID = e),
                (this.m_strUserSteamID = jt.i.steamid),
                this.InitTextFilter(),
                this.JoinChannelChat();
            }),
            (e.prototype.Stop = function () {
              this.m_chatScheduledFunc && this.m_chatScheduledFunc.Cancel();
            }),
            (e.prototype.SendMessage = function (u) {
              return Object(h.b)(this, void 0, void 0, function () {
                var t,
                  r,
                  n,
                  i,
                  a,
                  o,
                  s,
                  c = this;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      if (0 == (t = u.trim()).length) return [2];
                      e.label = 1;
                    case 1:
                      return (e.trys.push([1, 6, , 7]),
                      (i = n = r = void 0),
                      this.m_webApiToken)
                        ? ((a = new FormData()).append(
                            "chat_id",
                            this.m_ulChatID
                          ),
                          a.append("message", t),
                          a.append(
                            "instance_id",
                            this.m_unInstanceID.toString()
                          ),
                          [
                            4,
                            B.a.post(
                              jt.c.WEBAPI_BASE_URL +
                                "IBroadcastService/PostChatMessage/v0001?access_token=" +
                                this.m_webApiToken,
                              a
                            ),
                          ])
                        : [3, 3];
                    case 2:
                      return (
                        (n = e.sent()), (i = n.data && n.data.response), [3, 5]
                      );
                    case 3:
                      return (
                        (o = l.b.Init(D)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          message: t,
                          instance_id: this.m_unInstanceID.toString(),
                        }),
                        [
                          4,
                          F.PostChatMessage(
                            this.m_webAPIInterface.GetServiceTransport(),
                            o
                          ),
                        ]
                      );
                    case 4:
                      (r = e.sent()),
                        (i = {
                          result: r.GetEResult(),
                          cooldown_time_seconds: r
                            .Body()
                            .cooldown_time_seconds(),
                          in_game: r.Body().in_game(),
                          persona_name: r.Body().persona_name(),
                        }),
                        (e.label = 5);
                    case 5:
                      return i && i.result && 1 != i.result
                        ? ((s = ""),
                          (s =
                            17 == i.result
                              ? Object(Ct.f)("#BroadcastChat_YouMuted")
                              : 84 == i.result
                              ? Object(Ct.f)(
                                  "#BroadcastChat_Cooldown",
                                  i.cooldown_time_seconds
                                )
                              : Object(Ct.f)(
                                  "#BroadcastChat_FailedToSendMsg",
                                  t
                                )),
                          this.m_rgChatMessages.push({
                            type: y.a.Error,
                            msg: s,
                            client_ts: Number(new Date()),
                            instance_id: this.m_unInstanceID,
                            in_game: i.in_game,
                            persona_name: i.persona_name,
                            steamid: "",
                          }),
                          [2])
                        : (this.m_nRateLimitSeconds ||
                            (this.m_nRateLimitSeconds =
                              i.cooldown_time_seconds),
                          this.m_nRateLimitSeconds &&
                            ((this.m_bRateLimited = !0),
                            setTimeout(function () {
                              return (c.m_bRateLimited = !1);
                            }, 1e3 * this.m_nRateLimitSeconds)),
                          [3, 7]);
                    case 6:
                      return (
                        e.sent(),
                        this.m_rgChatMessages.push({
                          type: y.a.Error,
                          msg: Object(Ct.f)(
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
            (e.prototype.RequestChatInfo = function (a) {
              return Object(h.b)(this, void 0, void 0, function () {
                var t,
                  r,
                  n,
                  i = this;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (this.m_cConsecutiveErrors = 0),
                        (this.m_bReconnecting = !1),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        (t = {
                          steamid: this.m_ulBroadcastSteamID,
                          broadcastid: this.m_ulBroadcastID,
                          sessionid: jt.c.SESSIONID,
                        }),
                        [
                          4,
                          B.a.get(
                            jt.c.CHAT_BASE_URL + "broadcast/getchatinfo",
                            {
                              params: t,
                              withCredentials: !0,
                              cancelToken: null == a ? void 0 : a.token,
                            }
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (r = e.sent()),
                        (a && a.token.reason) ||
                          Object(o.G)(function () {
                            var e = r.data;
                            (i.m_strChatURL = e.view_url_template),
                              (i.m_ulChatID = e.chat_id),
                              (i.m_strFlairGroupID =
                                e.flair_group_ids && e.flair_group_ids[0]),
                              e.blocked &&
                                console.log("User is blocked from chat"),
                              e.steamid && (i.m_strUserSteamID = e.steamid),
                              e.token && (i.m_webApiToken = e.token),
                              e.emoticons && i.SetOwnedEmoticons(e.emoticons),
                              i.m_bHasAddedWelcomeChat ||
                                (i.m_rgChatMessages.push({
                                  type: y.a.Notification,
                                  msg: Object(Ct.f)(
                                    "#BroadcastChat_DefaultMessage"
                                  ),
                                  client_ts: Number(new Date()),
                                  instance_id: i.m_unInstanceID,
                                  in_game: !1,
                                  persona_name: "",
                                  steamid: "",
                                }),
                                (i.m_bHasAddedWelcomeChat = !0)),
                              i.m_mapBroadcastModeratorUsers.clear(),
                              e.moderators_steamid &&
                                e.moderators_steamid.forEach(function (e) {
                                  return i.m_mapBroadcastModeratorUsers.set(
                                    e,
                                    !0
                                  );
                                }),
                              (i.m_chatScheduledFunc = new St.b()),
                              i.m_chatScheduledFunc.Schedule(0, i.RequestLoop);
                          }),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (n = e.sent()),
                        console.error(n),
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
              return Object(h.b)(this, void 0, void 0, function () {
                var t, r, n;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        e.trys.push([0, 2, , 3]),
                        (t = l.b.Init(nt)).SetBodyFields({
                          broadcast_channel_id: this.m_ulBroadcastChannelID,
                        }),
                        [
                          4,
                          we.JoinChat(
                            this.m_webAPIInterface.GetServiceTransport(),
                            t
                          ),
                        ]
                      );
                    case 1:
                      return (r = e.sent()).Body().chat_id &&
                        r.Body().view_url_template
                        ? ((this.m_strChatURL = r.Body().view_url_template()),
                          (this.m_ulChatID = r.Body().chat_id()),
                          (this.m_strFlairGroupID =
                            r.Body().flair_group_ids() &&
                            r.Body().flair_group_ids()[0]),
                          this.FetchChatModerators(),
                          (this.m_rgChatMessages = []),
                          this.m_rgChatMessages.push({
                            type: y.a.Notification,
                            msg: Object(Ct.f)("#BroadcastChat_DefaultMessage"),
                            client_ts: Number(new Date()),
                            instance_id: this.m_unInstanceID,
                            in_game: !1,
                            persona_name: "",
                            steamid: "",
                          }),
                          (this.m_bHasAddedWelcomeChat = !0),
                          (this.m_chatScheduledFunc = new St.b()),
                          this.m_chatScheduledFunc.Schedule(
                            0,
                            this.RequestLoop
                          ),
                          [3, 3])
                        : (console.log("Failed to join channel chat"), [2]);
                    case 2:
                      return (
                        (n = e.sent()),
                        console.error(n),
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
              return Object(h.b)(this, void 0, void 0, function () {
                var t, r, n, i;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = l.b.Init(Qe)).SetBodyFields({
                          broadcast_channel_id: this.m_ulBroadcastChannelID,
                        }),
                        [
                          4,
                          we.GetChatModerators(
                            this.m_webAPIInterface.GetServiceTransport(),
                            t
                          ),
                        ]
                      );
                    case 1:
                      return (
                        (r = e.sent()),
                        (n = r.Body().results()),
                        (i = new Map()),
                        n.forEach(function (e) {
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
              return Object(h.b)(this, void 0, void 0, function () {
                var t,
                  r,
                  n,
                  i,
                  a,
                  o,
                  s,
                  c,
                  u,
                  d,
                  l,
                  m,
                  f,
                  b,
                  p,
                  _ = this;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (t = {}),
                        (r = this.m_strChatURL.replace(
                          "{0}",
                          this.m_nNextChatTS.toString()
                        )) == this.m_strChatURL &&
                          0 < this.m_nNextChatTS &&
                          (t.t = this.m_nNextChatTS),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]), [4, B.a.get(r, { params: t })]
                      );
                    case 2:
                      if (
                        ((n = e.sent()),
                        (i = n.data),
                        (this.m_cConsecutiveErrors = 0),
                        (a = i.messages
                          .map(function (e) {
                            return Object(h.a)(Object(h.a)({}, e), {
                              type: y.a.Chat,
                              client_ts: Number(new Date()),
                            });
                          })
                          .filter(function (e) {
                            return !_.IsUserMutedLocally(e.steamid);
                          })),
                        (p = this.m_rgChatMessages).push.apply(p, a),
                        (o = this.m_bAutoScroll ? 150 : 300),
                        this.m_rgChatMessages.length > o &&
                          this.m_rgChatMessages.splice(
                            0,
                            this.m_rgChatMessages.length - o
                          ),
                        i.muted)
                      )
                        for (s = 0, c = i.muted; s < c.length; s++)
                          (u = c[s]),
                            (d =
                              u.muted == this.m_strUserSteamID
                                ? Object(Ct.f)(
                                    "#BroadcastChat_YouMuted",
                                    u.persona_name
                                  )
                                : Object(Ct.f)(
                                    "#BroadcastChat_UserMuted",
                                    u.persona_name
                                  )),
                            this.m_rgChatMessages.push({
                              type: y.a.Notification,
                              msg: d,
                              client_ts: Number(new Date()),
                              instance_id: this.m_unInstanceID,
                              in_game: !1,
                              persona_name: "",
                              steamid: "",
                            });
                      if (i.remove_msgs)
                        for (l = 0, m = i.remove_msgs; l < m.length; l++)
                          (f = m[l]), this.RemoveUserMessagesLocal(f.steamid);
                      if (
                        ((b = 0),
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
                          (b = i.initial_delay);
                      } else {
                        if (i.next_request < this.m_nNextChatTS)
                          return console.log("Next request in past"), [2];
                        (this.m_nFromFirstRequestMS +=
                          i.next_request - this.m_nNextChatTS),
                          (this.m_nNextChatTS = i.next_request),
                          (b =
                            this.m_tsFirstRequest +
                            this.m_nFromFirstRequestMS -
                            performance.now() +
                            this.m_nNudgeFactorMS);
                      }
                      return (
                        this.m_bReconnecting && (this.m_bReconnecting = !1),
                        (this.m_nLastSleepMS = b) < 0 && (b = 0),
                        this.m_chatScheduledFunc.Schedule(b, this.RequestLoop),
                        [3, 4]
                      );
                    case 3:
                      if (
                        (e.sent(),
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
                        4 <= this.m_cConsecutiveErrors)
                      ) {
                        if (null == this.m_tsFirstRequest)
                          return (
                            this.m_rgChatMessages.push({
                              type: y.a.Error,
                              msg: Object(Ct.f)(
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
                2 <= n.length && ":" == n[0]
                  ? t.push(n.substr(1, n.length - 2))
                  : t.push(n);
              }
              var i = ":(" + t.join("|") + "):";
              this.m_regexUserEmoticons = new RegExp(i, "g");
            }),
            (e.prototype.UpdateBroadcastChatModerator = function (i, a, o) {
              return Object(h.b)(this, void 0, void 0, function () {
                var t, r, n;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [3, 6];
                    case 1:
                      return (
                        e.trys.push([1, 4, , 5]),
                        (t = l.b.Init(Je)).SetBodyFields({
                          broadcast_channel_id: this.m_ulBroadcastChannelID,
                          moderator_steamid: i,
                          undo: !a,
                        }),
                        [
                          4,
                          we.AddChatModerator(
                            this.m_webAPIInterface.GetServiceTransport(),
                            t
                          ),
                        ]
                      );
                    case 2:
                      return (
                        e.sent(),
                        (n = Object(Ct.f)(
                          a
                            ? "#BroadcastChat_AddedModerator"
                            : "#BroadcastChat_RemovedModerator",
                          o
                        )),
                        this.m_rgChatMessages.push({
                          type: y.a.Notification,
                          msg: n,
                        }),
                        [4, this.FetchChatModerators()]
                      );
                    case 3:
                      return e.sent(), [3, 5];
                    case 4:
                      return (
                        e.sent(),
                        (n = Object(Ct.f)(
                          a
                            ? "#BroadcastChat_AddModeratorFailed"
                            : "#BroadcastChat_RemoveModeratorFailed",
                          o
                        )),
                        this.m_rgChatMessages.push({ type: y.a.Error, msg: n }),
                        [3, 5]
                      );
                    case 5:
                      return [3, 10];
                    case 6:
                      (r = new FormData()).append(
                        "broadcaststeamid",
                        this.m_ulBroadcastSteamID
                      ),
                        r.append("moderatorsteamid", i),
                        r.append("bAdd", a ? "1" : "0"),
                        r.append("sessionid", jt.c.SESSIONID),
                        (e.label = 7);
                    case 7:
                      return (
                        e.trys.push([7, 9, , 10]),
                        [
                          4,
                          B.a.post(
                            jt.c.CHAT_BASE_URL +
                              "broadcast/ajaxupdatechannelmod",
                            r
                          ),
                        ]
                      );
                    case 8:
                      return (
                        e.sent(),
                        this.m_mapBroadcastModeratorUsers.set(i, a),
                        (n = Object(Ct.f)(
                          a
                            ? "#BroadcastChat_AddedModerator"
                            : "#BroadcastChat_RemovedModerator",
                          o
                        )),
                        this.m_rgChatMessages.push({
                          type: y.a.Notification,
                          msg: n,
                        }),
                        [3, 10]
                      );
                    case 9:
                      return (
                        e.sent(),
                        (n = Object(Ct.f)(
                          a
                            ? "#BroadcastChat_AddModeratorFailed"
                            : "#BroadcastChat_RemoveModeratorFailed",
                          o
                        )),
                        this.m_rgChatMessages.push({ type: y.a.Error, msg: n }),
                        [3, 10]
                      );
                    case 10:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.UpdateUserChatBan = function (a, o, s, c, u, d) {
              return Object(h.b)(this, void 0, void 0, function () {
                var t, r, n, i;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return ((t = this.m_ulBroadcastSteamID),
                      (r = this.m_strUserSteamID),
                      this.m_ulBroadcastChannelID)
                        ? ((n = l.b.Init(Ke)).SetBodyFields({
                            broadcast_channel_id: this.m_ulBroadcastChannelID,
                            chatter_steamid: a,
                            duration: 3600 * s,
                            permanent: c,
                            undo: d,
                          }),
                          [
                            4,
                            we.AddChatBan(
                              this.m_webAPIInterface.GetServiceTransport(),
                              n
                            ),
                          ])
                        : [3, 2];
                    case 1:
                      return e.sent(), [3, 6];
                    case 2:
                      (i = new FormData()).append("broadcaststeamid", t),
                        i.append("issuersteamid", r),
                        i.append("chattersteamid", a),
                        i.append("bantype", o),
                        i.append("duration", s.toString()),
                        i.append("perm", c ? "1" : "0"),
                        i.append("sessionid", jt.c.SESSIONID),
                        (e.label = 3);
                    case 3:
                      return (
                        e.trys.push([3, 5, , 6]),
                        [
                          4,
                          B.a.post(
                            jt.c.CHAT_BASE_URL + "broadcast/ajaxupdateusermute",
                            i
                          ),
                        ]
                      );
                    case 4:
                      return (
                        e.sent(),
                        0 == o
                          ? delete this.m_mapMutedUsers[a]
                          : (this.m_mapMutedUsers[a] = u),
                        [3, 6]
                      );
                    case 5:
                      return (
                        e.sent(),
                        console.log("Failed to update mute for " + u),
                        [3, 6]
                      );
                    case 6:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.MuteUserForSession = function (i, a) {
              return Object(h.b)(this, void 0, void 0, function () {
                var t, r, n;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      if (i == this.m_strUserSteamID) return [2];
                      if (this.m_ulBroadcastSteamID == i) return [2];
                      if (
                        ((t =
                          this.m_ulBroadcastSteamID == this.m_strUserSteamID),
                        this.m_mapMutedUsers[i])
                      )
                        return [3, 7];
                      (this.m_mapMutedUsers[i] = a), (e.label = 1);
                    case 1:
                      return (e.trys.push([1, 6, , 7]), this.m_webApiToken)
                        ? ((r = new FormData()).append(
                            "chat_id",
                            this.m_ulChatID
                          ),
                          r.append("user_steamid", i),
                          r.append("muted", "1"),
                          [
                            4,
                            B.a.post(
                              jt.c.WEBAPI_BASE_URL +
                                "IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=" +
                                this.m_webApiToken,
                              r
                            ),
                          ])
                        : [3, 3];
                    case 2:
                      return e.sent(), [3, 5];
                    case 3:
                      return (
                        (n = l.b.Init(q)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          user_steamid: i,
                          muted: !0,
                        }),
                        [
                          4,
                          F.MuteBroadcastChatUser(
                            this.m_webAPIInterface.GetServiceTransport(),
                            n
                          ),
                        ]
                      );
                    case 4:
                      e.sent(), (e.label = 5);
                    case 5:
                      return [3, 7];
                    case 6:
                      return (
                        e.sent(),
                        t &&
                          (this.m_rgChatMessages.push({
                            type: y.a.Error,
                            msg: Object(Ct.f)(
                              "#BroadcastChat_UserMuteFailed",
                              a
                            ),
                            client_ts: Number(new Date()),
                            instance_id: this.m_unInstanceID,
                            in_game: !1,
                            persona_name: "",
                            steamid: "",
                          }),
                          delete this.m_mapMutedUsers[i]),
                        [3, 7]
                      );
                    case 7:
                      return (
                        t ||
                          this.m_rgChatMessages.push({
                            type: y.a.Notification,
                            msg: Object(Ct.f)(
                              "#BroadcastChat_UserMutedLocal",
                              a
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
            (e.prototype.UnmuteUserForSession = function (n, i) {
              return Object(h.b)(this, void 0, void 0, function () {
                var t, r;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      if (n == this.m_strUserSteamID) return [2];
                      if (
                        (this.m_mapMutedUsers[n] &&
                          delete this.m_mapMutedUsers[n],
                        !(this.m_ulBroadcastSteamID == this.m_strUserSteamID))
                      )
                        return [3, 8];
                      e.label = 1;
                    case 1:
                      return (e.trys.push([1, 6, , 7]), this.m_webApiToken)
                        ? ((t = new FormData()).append(
                            "chat_id",
                            this.m_ulChatID
                          ),
                          t.append("user_steamid", n),
                          t.append("muted", "0"),
                          [
                            4,
                            B.a.post(
                              jt.c.WEBAPI_BASE_URL +
                                "IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=" +
                                this.m_webApiToken,
                              t
                            ),
                          ])
                        : [3, 3];
                    case 2:
                      return e.sent(), [3, 5];
                    case 3:
                      return (
                        (r = l.b.Init(q)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          user_steamid: n,
                          muted: !1,
                        }),
                        [
                          4,
                          F.MuteBroadcastChatUser(
                            this.m_webAPIInterface.GetServiceTransport(),
                            r
                          ),
                        ]
                      );
                    case 4:
                      e.sent(), (e.label = 5);
                    case 5:
                      return (
                        this.m_rgChatMessages.push({
                          type: y.a.Notification,
                          msg: Object(Ct.f)(
                            "#BroadcastChat_UserUnmutedLocal",
                            i
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
                        e.sent(),
                        this.m_rgChatMessages.push({
                          type: y.a.Error,
                          msg: Object(Ct.f)(
                            "#BroadcastChat_UserUnmuteFailed",
                            i
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
                        type: y.a.Notification,
                        msg: Object(Ct.f)("#BroadcastChat_UserUnmutedLocal", i),
                        client_ts: Number(new Date()),
                        instance_id: this.m_unInstanceID,
                        in_game: !1,
                        persona_name: "",
                        steamid: "",
                      }),
                        (e.label = 9);
                    case 9:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.RemoveUserMessagesLocal = function (t) {
              this.m_rgChatMessages = this.m_rgChatMessages.filter(function (
                e
              ) {
                return e.steamid !== t;
              });
            }),
            (e.prototype.RemoveUserMessagesServer = function (n, i) {
              return Object(h.b)(this, void 0, void 0, function () {
                var t, r;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      if (n == this.m_strUserSteamID) return [2];
                      e.label = 1;
                    case 1:
                      return (e.trys.push([1, 6, , 7]), this.m_webApiToken)
                        ? ((t = new FormData()).append(
                            "chat_id",
                            this.m_ulChatID
                          ),
                          t.append("user_steamid", n),
                          [
                            4,
                            B.a.post(
                              jt.c.WEBAPI_BASE_URL +
                                "IBroadcastService/RemoveUserChatText/v0001/?access_token=" +
                                this.m_webApiToken,
                              t
                            ),
                          ])
                        : [3, 3];
                    case 2:
                      return e.sent(), [3, 5];
                    case 3:
                      return (
                        (r = l.b.Init(K)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          user_steamid: n,
                        }),
                        [
                          4,
                          F.RemoveUserChatText(
                            this.m_webAPIInterface.GetServiceTransport(),
                            r
                          ),
                        ]
                      );
                    case 4:
                      e.sent(), (e.label = 5);
                    case 5:
                      return [3, 7];
                    case 6:
                      return (
                        e.sent(),
                        this.m_rgChatMessages.push({
                          type: y.a.Error,
                          msg: Object(Ct.f)(
                            "#BroadcastChat_RemoveMessagesFailed",
                            i
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
            (e.prototype.UpdateChatMessageFlair = function (n) {
              return Object(h.b)(this, void 0, void 0, function () {
                var t, r;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return this.m_webApiToken
                        ? ((t = new FormData()).append(
                            "chat_id",
                            this.m_ulChatID
                          ),
                          t.append(
                            "flair",
                            "^" + this.m_strFlairGroupID + "^:" + n + ":"
                          ),
                          [
                            4,
                            B.a.post(
                              jt.c.WEBAPI_BASE_URL +
                                "IBroadcastService/UpdateChatMessageFlair/v0001/?access_token=" +
                                this.m_webApiToken,
                              t
                            ),
                          ])
                        : [3, 2];
                    case 1:
                      return e.sent(), [3, 4];
                    case 2:
                      return (
                        (r = l.b.Init(k)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          flair: "^" + this.m_strFlairGroupID + "^:" + n + ":",
                        }),
                        [
                          4,
                          F.UpdateChatMessageFlair(
                            this.m_webAPIInterface.GetServiceTransport(),
                            r
                          ),
                        ]
                      );
                    case 3:
                      e.sent(), (e.label = 4);
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
            Object(h.c)(
              [o.C],
              e.prototype,
              "m_mapChannelModeratorUsers",
              void 0
            ),
            Object(h.c)(
              [o.C],
              e.prototype,
              "m_mapBroadcastModeratorUsers",
              void 0
            ),
            Object(h.c)([o.C], e.prototype, "m_nRateLimitSeconds", void 0),
            Object(h.c)([o.C], e.prototype, "m_bRateLimited", void 0),
            Object(h.c)([o.C], e.prototype, "m_rgChatMessages", void 0),
            Object(h.c)([Ot.a], e.prototype, "FetchChatModerators", null),
            Object(h.c)([Ot.a], e.prototype, "RequestLoop", null),
            Object(h.c)([Ot.a], e.prototype, "MuteUserForSession", null),
            e
          );
        })(),
        Ht = new Vt();
      window.g_BroadcastChatStore = Ht;
      function Kt() {
        return i.a.createElement(
          "div",
          { className: ir.a.FriendsListInsetShadowCtn },
          i.a.createElement("div", { className: ir.a.FriendListInsetShadowTop })
        );
      }
      function Yt() {
        return i.a.createElement(
          "div",
          { className: ir.a.FriendsListInsetShadowCtn },
          i.a.createElement("div", {
            className: ir.a.FriendListInsetShadowBottom,
          })
        );
      }
      var $t = r("1BdX"),
        Jt = r("a5LV"),
        Xt = r("Z9dU"),
        Qt = r.n(Xt),
        Zt = r("y+6m"),
        er = r("Gorr"),
        tr = r("0QoN"),
        rr = r("gPCo"),
        nr = r("5znp"),
        ir = r.n(nr),
        ar = r("6Y59"),
        or = r("exH9"),
        sr = r("3sYe"),
        cr = r.n(sr);
      r.d(t, "a", function () {
        return fr;
      });
      var ur = new RegExp("ː([^ː]*)ː", "g"),
        dr =
          (new RegExp("(https?://[^ '\"<>]*)", "gi"),
          new RegExp(
            "^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)",
            "i"
          ));
      function lr(e) {
        var t = e.userType,
          r = e.msg,
          n = e.presenterInfo;
        if ("presenter" === t)
          return c.createElement(
            "span",
            null,
            c.createElement(
              rr.b,
              {
                name: n.name,
                title: n.title,
                photo: n.photo,
                company: n.company,
                bioString: n.bio,
              },
              c.createElement(
                "a",
                {
                  className: Object(or.a)(
                    cr.a.MessageName,
                    cr.a.MessagePresenter
                  ),
                  href: jt.c.COMMUNITY_BASE_URL + "profiles/" + r.steamid,
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
          c.createElement(
            "span",
            null,
            c.createElement(
              "a",
              {
                className: Object(or.a)(cr.a.MessageName, i),
                href: jt.c.COMMUNITY_BASE_URL + "profiles/" + r.steamid,
                "data-miniprofile": "s" + r.steamid,
                target: "_blank",
                rel: "noopener noreferrer",
              },
              r.persona_name
            )
          )
        );
      }
      function mr(e) {
        switch (e.userType) {
          case "presenter":
            return c.createElement(
              "span",
              {
                className: cr.a.RoleFlairContainer,
                "data-tooltip-text": Object(Ct.f)(
                  "#BroadcastChat_Role_Presenter_ttip"
                ),
              },
              c.createElement(ar.g, null)
            );
          case "moderator":
            return c.createElement(
              "span",
              {
                className: cr.a.RoleFlairContainer,
                "data-tooltip-text": Object(Ct.f)(
                  "#BroadcastChat_Role_Moderatorr_ttip"
                ),
              },
              c.createElement(ar.h, null)
            );
          case "broadcaster":
            return c.createElement(
              "span",
              {
                className: cr.a.RoleFlairContainer,
                "data-tooltip-text": Object(Ct.f)(
                  "#BroadcastChat_Role_Broadcaster_ttip"
                ),
              },
              c.createElement(ar.f, null)
            );
          default:
            return null;
        }
      }
      var fr = (function (r) {
          function e(e) {
            var t = r.call(this, e) || this;
            return (
              (t.m_chat = null),
              (t.messagesContainer = c.createRef()),
              (t.textInput = c.createRef()),
              (t.state = { message: "" }),
              t
            );
          }
          return (
            Object(h.d)(e, r),
            (e.prototype.componentDidMount = function () {
              this.StartChat();
            }),
            (e.prototype.componentDidUpdate = function (e) {
              this.m_chat && this.m_chat.m_bAutoScroll && this.ScrollToBottom(),
                (this.props.steamID === e.steamID &&
                  this.props.broadcastID === e.broadcastID &&
                  this.props.broadcastChannelID === e.broadcastChannelID) ||
                  this.StartChat();
            }),
            (e.prototype.componentWillUnmount = function () {
              this.m_chat && this.m_chat.Stop();
            }),
            (e.prototype.StartChat = function () {
              this.m_chat && this.m_chat.Stop(),
                (this.m_chat = Ht.GetOrCreateChat(
                  this.props.broadcastChannelID,
                  this.props.steamID
                )),
                this.props.broadcastChannelID
                  ? this.m_chat.StartForChannel(this.props.broadcastChannelID)
                  : this.props.steamID &&
                    this.props.steamID &&
                    this.props.broadcastID &&
                    (this.m_chat.StartForSteamID(
                      this.props.steamID,
                      this.props.broadcastID
                    ),
                    this.ScrollToBottom());
            }),
            (e.prototype.ChatBoxChange = function (e) {
              this.setState({ message: e.target.value });
            }),
            (e.prototype.ChatBoxKeypress = function (e) {
              !e.shiftKey &&
                13 === e.charCode &&
                (this.SendMessage(), e.preventDefault());
            }),
            (e.prototype.SendMessage = function (e) {
              this.m_chat.m_bRateLimited ||
                (this.m_chat.SendMessage(this.state.message),
                this.setState({ message: "" }),
                e && e.preventDefault());
            }),
            (e.prototype.IsTrustedDomain = function (e) {
              return !!e.match(dr);
            }),
            (e.prototype.AddLinksEmoticons = function (e, t) {
              t && this.m_chat.GetUserEmoticons();
              for (var r = e.split(ur), n = [], i = 0; i < r.length; i += 1)
                i % 2 == 1
                  ? n.push(
                      c.createElement(er.b, {
                        emoticonHoverStore: Jt.b,
                        key: i,
                        emoticon: r[i],
                        large: !0,
                      })
                    )
                  : n.push(r[i]);
              return n;
            }),
            (e.prototype.HandleScroll = function (e) {
              var t =
                e.currentTarget.scrollTop + e.currentTarget.clientHeight >=
                e.currentTarget.scrollHeight - 6;
              this.m_chat && (this.m_chat.m_bAutoScroll = t);
            }),
            (e.prototype.ScrollToBottom = function () {
              this.messagesContainer &&
                this.messagesContainer.current &&
                (this.messagesContainer.current.scrollTop = this.messagesContainer.current.scrollHeight);
            }),
            (e.prototype.OnContextMenu = function (e, t) {
              var r = this;
              if (t.type !== y.a.Chat) return null;
              var n = [],
                i = this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID()),
                a = this.m_chat.BIsUserBroadcastModerator(
                  this.m_chat.GetUserSteamID()
                );
              return (
                (jt.i && jt.i.is_support) || i || a
                  ? n.push(
                      c.createElement(
                        Zt.d,
                        {
                          key: "remove",
                          onSelected: function () {
                            return r.m_chat.RemoveUserMessagesServer(
                              t.steamid,
                              t.persona_name
                            );
                          },
                        },
                        Object(Ct.f)("#BroadcastChat_RemoveMessages")
                      ),
                      c.createElement(
                        Zt.d,
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
                        Object(Ct.f)("#BroadcastChat_half_Mute")
                      ),
                      c.createElement(
                        Zt.d,
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
                        Object(Ct.f)("#BroadcastChat_day_Mute")
                      ),
                      c.createElement(
                        Zt.d,
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
                        Object(Ct.f)("#BroadcastChat_week_Mute")
                      ),
                      c.createElement(
                        Zt.d,
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
                        Object(Ct.f)("#BroadcastChat_perm_Mute")
                      ),
                      c.createElement(
                        Zt.d,
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
                        Object(Ct.f)("#BroadcastChat_Unmute")
                      )
                    )
                  : this.m_chat.IsUserMutedLocally(t.steamid)
                  ? n.push(
                      c.createElement(
                        Zt.d,
                        {
                          key: "unmuteuser",
                          onSelected: function () {
                            return r.m_chat.UnmuteUserForSession(
                              t.steamid,
                              t.persona_name
                            );
                          },
                        },
                        Object(Ct.f)("#BroadcastChat_UnmuteLocal")
                      )
                    )
                  : n.push(
                      c.createElement(
                        Zt.d,
                        {
                          key: "muteuser",
                          onSelected: function () {
                            return r.m_chat.MuteUserForSession(
                              t.steamid,
                              t.persona_name
                            );
                          },
                        },
                        Object(Ct.f)("#BroadcastChat_MuteLocal")
                      )
                    ),
                ((jt.i && jt.i.is_support) ||
                  this.m_chat.IsUserBroadcaster(
                    this.m_chat.GetUserSteamID()
                  )) &&
                  t.steamid &&
                  (this.m_chat.BIsUserBroadcastModerator(t.steamid)
                    ? n.push(
                        c.createElement(
                          Zt.d,
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
                          Object(Ct.f)("#BroadcastChat_Remove_Moderator")
                        )
                      )
                    : n.push(
                        c.createElement(
                          Zt.d,
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
                          Object(Ct.f)("#BroadcastChat_Add_Moderator")
                        )
                      )),
                n.length
                  ? Object(s.a)(
                      c.createElement(
                        Zt.c,
                        null,
                        c.createElement(
                          "div",
                          { className: cr.a.SelectedUserNameCtn },
                          Object(Ct.f)("#BroadcastChat_User"),
                          c.createElement("br", null),
                          c.createElement(
                            "span",
                            { className: cr.a.SelectedUserName },
                            t.persona_name
                          )
                        ),
                        n
                      ),
                      e
                    )
                  : null
              );
            }),
            (e.prototype.OnEmoticonSelected = function (e, t) {
              void 0 === t && (t = !1),
                this.setState({ message: this.state.message + "ː" + e + "ː" }),
                this.textInput &&
                  this.textInput.current &&
                  this.textInput.current.focus();
            }),
            (e.prototype.OnFlairSelected = function (e) {
              this.m_chat.UpdateChatMessageFlair(e),
                this.textInput &&
                  this.textInput.current &&
                  this.textInput.current.focus();
            }),
            (e.prototype.GetTypeClassName = function (e) {
              return e.type === y.a.Notification
                ? cr.a.MessageNotification
                : e.type === y.a.Error
                ? cr.a.MessageError
                : cr.a.MessageChat;
            }),
            (e.prototype.FormatMessage = function (e, t) {
              if (e.type !== y.a.Chat) return e.msg;
              var r = t ? t.FilterText(e.steamid, e.msg) : e.msg;
              return this.AddLinksEmoticons(r, !1);
            }),
            (e.prototype.RenderUserChatLine = function (t, e, r) {
              var n,
                i,
                a = this,
                o = r ? r.get(t.steamid) : void 0,
                s =
                  t.type === y.a.Chat
                    ? ((n = t.steamid),
                      (i = this.m_chat),
                      o
                        ? "presenter"
                        : i.GetBroadcastSteamID() === n
                        ? "broadcaster"
                        : i.BIsUserBroadcastModerator(n)
                        ? "moderator"
                        : "")
                    : "";
              return c.createElement(
                "div",
                {
                  key: t.instance_id + "_" + t.client_ts + "_" + e,
                  className: this.GetTypeClassName(t),
                  onContextMenu: function (e) {
                    return a.OnContextMenu(e, t);
                  },
                },
                t.type === y.a.Chat && c.createElement(mr, { userType: s }),
                t.flair &&
                  c.createElement(
                    "span",
                    { className: cr.a.FlairContainer },
                    this.AddLinksEmoticons(t.flair, !1)
                  ),
                t.type === y.a.Chat &&
                  c.createElement(lr, {
                    userType: s,
                    msg: t,
                    presenterInfo: o,
                  }),
                t.type === y.a.Chat &&
                  this.m_chat.GetBroadcastSteamID() === t.steamid &&
                  c.createElement(
                    "span",
                    {
                      className:
                        cr.a.MessageNotification + " " + cr.a.MessageContents,
                    },
                    " (" + Object(Ct.f)("#BroadcastChat_Broadcaster") + ")"
                  ),
                t.type === y.a.Chat &&
                  this.m_chat.m_mapChannelModeratorUsers.get(t.steamid) &&
                  c.createElement(
                    "span",
                    {
                      className:
                        cr.a.MessageNotification + " " + cr.a.MessageContents,
                    },
                    " (" + Object(Ct.f)("#BroadcastChat_Moderator") + ")"
                  ),
                c.createElement(
                  "span",
                  {
                    className:
                      cr.a.MessageContents +
                      " " +
                      (this.AddLinksEmoticons(t.msg, !1).filter(function (e) {
                        return e && "string" == typeof e;
                      }).length
                        ? ""
                        : cr.a.EmoticonsOnly),
                  },
                  t.type === y.a.Chat ? " : " : "",
                  this.FormatMessage(t, this.m_chat.TextFilterStore)
                )
              );
            }),
            (e.prototype.render = function () {
              var r = this,
                e = this.m_chat ? this.m_chat.m_rgChatMessages : [],
                n = this.m_chat
                  ? $t.b.GetPresenterMapForBroadcasterSteamID(
                      this.m_chat.GetBroadcastSteamID()
                    )
                  : void 0;
              return c.createElement(
                "div",
                {
                  className: cr.a.ChatPanel,
                  style: this.props.hidden ? { display: "none" } : void 0,
                },
                c.createElement(Kt, null),
                c.createElement(
                  "div",
                  {
                    className: cr.a.ChatMessages + " " + Qt.a.minHeightZero,
                    onScroll: this.HandleScroll,
                    ref: this.messagesContainer,
                  },
                  e.map(function (e, t) {
                    return r.RenderUserChatLine(e, t, n);
                  })
                ),
                c.createElement(Yt, null),
                jt.i && jt.i.logged_in && this.m_chat
                  ? c.createElement(
                      "div",
                      null,
                      c.createElement(
                        "div",
                        {
                          className: Object(or.a)(cr.a.ChatEntry, "ChatEntry"),
                        },
                        c.createElement(
                          "form",
                          { className: "" + Qt.a.chatEntryControls },
                          c.createElement("textarea", {
                            className: Qt.a.chatTextarea,
                            placeholder: Object(Ct.f)(
                              "#BroadcastChat_EnterResponse"
                            ),
                            onKeyPress: this.ChatBoxKeypress,
                            onChange: this.ChatBoxChange,
                            value: this.state.message,
                            ref: this.textInput,
                          }),
                          this.m_chat.m_bRateLimited &&
                            c.createElement(br, {
                              nSeconds: this.m_chat.m_nRateLimitSeconds,
                              bRateLimited: this.m_chat.m_bRateLimited,
                            }),
                          c.createElement(
                            "button",
                            {
                              className:
                                Qt.a.chatSubmitButton +
                                " " +
                                (this.state.message ? "" : Qt.a.disabled),
                              title: Object(Ct.f)("#ChatEntryButton_Submit"),
                              onClick: this.SendMessage,
                            },
                            c.createElement(ar.Y, null)
                          )
                        ),
                        c.createElement(
                          "div",
                          {
                            style: { height: "50px" },
                            className: "" + Qt.a.chatEntryActionsContainer,
                          },
                          c.createElement(
                            "div",
                            { className: Qt.a.chatEntryActionsGroup },
                            c.createElement(tr.a, {
                              disabled: !1,
                              OnEmoticonSelected: this.OnEmoticonSelected,
                              rtLastAckedNewEmoticons: Number.MAX_VALUE,
                              emoticonStore: this.props.emoticonStore,
                              emoticonHoverStore: Jt.b,
                            }),
                            this.m_chat.m_strFlairGroupID &&
                              this.props.emoticonStore.flair_list &&
                              this.props.emoticonStore.GetFlairListByGroupID(
                                this.m_chat.m_strFlairGroupID
                              ).length
                              ? c.createElement(tr.a, {
                                  disabled: !1,
                                  OnEmoticonSelected: this.OnFlairSelected,
                                  rtLastAckedNewEmoticons: Number.MAX_VALUE,
                                  emoticonStore: this.props.emoticonStore,
                                  emoticonHoverStore: Jt.b,
                                  strFlairGroupID: this.m_chat
                                    .m_strFlairGroupID,
                                  title: Object(Ct.f)("#ChatEntryButton_Flair"),
                                  buttonIcon: c.createElement(ar.i, null),
                                })
                              : null
                          )
                        )
                      )
                    )
                  : null
              );
            }),
            Object(h.c)([o.C], e.prototype, "m_chat", void 0),
            Object(h.c)([Ot.a], e.prototype, "StartChat", null),
            Object(h.c)([Ot.a], e.prototype, "ChatBoxChange", null),
            Object(h.c)([Ot.a], e.prototype, "ChatBoxKeypress", null),
            Object(h.c)([Ot.a], e.prototype, "SendMessage", null),
            Object(h.c)([Ot.a], e.prototype, "HandleScroll", null),
            Object(h.c)([Ot.a], e.prototype, "OnContextMenu", null),
            Object(h.c)([Ot.a], e.prototype, "OnEmoticonSelected", null),
            Object(h.c)([Ot.a], e.prototype, "OnFlairSelected", null),
            Object(h.c)([Ot.a], e.prototype, "RenderUserChatLine", null),
            (e = Object(h.c)([n.a], e))
          );
        })(c.Component),
        br = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(h.d)(t, e),
            (t.prototype.render = function () {
              return c.createElement(
                "div",
                { className: cr.a.TimedProgressBarContainer },
                c.createElement(
                  "div",
                  { className: cr.a.wrapper },
                  c.createElement("div", {
                    className: cr.a.spinner + " " + cr.a.pie,
                    style: {
                      animationDuration: (this.props.nSeconds || 0) + "s",
                    },
                  }),
                  c.createElement("div", {
                    className: cr.a.filler + " " + cr.a.pie,
                    style: {
                      animationDuration: (this.props.nSeconds || 0) + "s",
                    },
                  }),
                  c.createElement("div", {
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
        })(c.Component);
    },
    rKv1: function (e, t, r) {
      e.exports = {
        strStreamIconCapsuleArtHeight: "90px",
        strStreamIconScreenshotArtHeight: "90px",
        bordered_container: "broadcast_embeddable_bordered_container_3zXpF",
        video_placeholder: "broadcast_embeddable_video_placeholder_1KU95",
        embedded_player: "broadcast_embeddable_embedded_player_12fBJ",
        store_chat_ctn: "broadcast_embeddable_store_chat_ctn_21N-V",
        Event: "broadcast_embeddable_Event_1A0NY",
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
        video_container: "broadcast_embeddable_video_container_1gbNx",
        viewer_links: "broadcast_embeddable_viewer_links_2EQpO",
        chat_link: "broadcast_embeddable_chat_link_3a0zX",
        settings_link: "broadcast_embeddable_settings_link_1Thke",
        external_link: "broadcast_embeddable_external_link_1n1BM",
        viewer_count: "broadcast_embeddable_viewer_count_1MrTW",
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
        ChatToggle: "broadcast_embeddable_ChatToggle_1tVam",
        BroadcastAndChat: "broadcast_embeddable_BroadcastAndChat_1aJ9y",
        detail_chat_ctn: "broadcast_embeddable_detail_chat_ctn_IaFns",
        ChatEntry: "broadcast_embeddable_ChatEntry_Rs7El",
        rightPanel: "broadcast_embeddable_rightPanel_16MsC",
      };
    },
  },
]);

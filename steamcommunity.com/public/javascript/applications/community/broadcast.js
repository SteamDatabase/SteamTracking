/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    "/4Qd": function (e, t, r) {},
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
        "duration-app-launch": "800ms",
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
          return J;
        });
      var a = r("mrSG"),
        i = r("vDqi"),
        s = r.n(i),
        n = r("TyAF"),
        o = r("aoTL"),
        l = r("q1tI"),
        c = r.n(l),
        d = r("eN6m"),
        m = r("trWU"),
        u = r("VQ2A"),
        h = (r("sRB7"), r("b3LC")),
        b = r("NKJh"),
        _ = r("zjj+"),
        p = r("RQmk"),
        g = r("dfs5"),
        B = r("0OaU"),
        S = r("exH9"),
        y = r("lkRc"),
        f = r("65aj"),
        v = r("dLk7"),
        C = r.n(v);
      const w = Object(n.a)((e) => {
        const { appid: t } = e,
          r = Object(g.c)(),
          a = Object(l.useRef)({ include_assets: !0, include_release: !0 }),
          [i, s] = Object(h.b)(t, a.current);
        let n = C.a.StoreSaleWidgetContainer_mini,
          o = C.a.StoreSaleWidgetImage_mini,
          d = C.a.StoreSaleImage_mini;
        if (!i && 2 != s)
          return c.a.createElement(
            "div",
            { className: n },
            c.a.createElement(B.a, { size: "medium" }),
            ";"
          );
        if (2 == s || !i.GetName())
          return c.a.createElement("div", {
            className: b.StoreSaleWidgetEmptyContainer,
          });
        const m = 8 != i.GetAppType(),
          f = Object(u.b)(i.GetStorePageURL(), r);
        return c.a.createElement(
          "div",
          { className: n },
          c.a.createElement(
            "div",
            { className: b.Actions },
            c.a.createElement(
              "a",
              { href: f, target: y.c.IN_CLIENT ? void 0 : "_blank" },
              c.a.createElement(
                p.b,
                { type: "app", id: t },
                c.a.createElement(
                  "div",
                  { className: o },
                  c.a.createElement("img", {
                    className: d,
                    src: i.GetAssets().GetSmallCapsuleURL(),
                  })
                )
              )
            )
          ),
          c.a.createElement(
            "div",
            { className: b.StoreSaleBroadcastWidgetRight },
            c.a.createElement(
              "div",
              { className: b.Actions },
              c.a.createElement(
                "a",
                { href: f, target: y.c.IN_CLIENT ? void 0 : "_blank" },
                c.a.createElement(
                  p.b,
                  { type: "app", id: t },
                  c.a.createElement(
                    "div",
                    {
                      className: Object(S.a)(
                        b.StoreSaleWidgetTitle,
                        "StoreSaleWidgetTitle"
                      ),
                    },
                    i.GetName()
                  )
                )
              )
            ),
            c.a.createElement(
              "div",
              { className: b.StoreSaleWidgetRelease },
              i.GetFormattedSteamReleaseDate()
            ),
            Boolean(m) &&
              c.a.createElement(_.c, {
                info: { id: t, type: "game" },
                bShowDemoButton: !0,
              })
          )
        );
      });
      r("kdZy"), r("wogL");
      var M = r("1BdX"),
        O = r("boaH"),
        R = r("nWbB"),
        T = (r("Bniq"), r("5L1o")),
        j = r("02Wr"),
        z = r("MnIK"),
        F = r("6Y59"),
        E = r("d+Me"),
        I = r("TLQK"),
        W = r("opsS"),
        P = (r("pKbv"), r("kLLr")),
        N = (r("3+zv"), r("uIWk")),
        D = r("rKv1"),
        x = r.n(D);
      const k = Object(n.a)((e) => {
        const { event: t } = e,
          r = t.clanSteamID.GetAccountID(),
          i = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
          n = Object(l.useRef)(null),
          [o, d] = Object(l.useState)(
            t ? N.a.GetCreatorHome(t.clanSteamID) : null
          );
        if (
          (Object(l.useEffect)(() => {
            const e = s.a.CancelToken.source();
            n.current = e.cancel;
            return (
              Object(a.a)(void 0, void 0, void 0, function* () {
                const t = P.a.InitFromClanID(r),
                  a = yield N.a.LoadCreatorHome(t, e);
                e.token.reason || d(a);
              }),
              () => {
                n.current && n.current("BroadcastDropsDisplay: unmounting");
              }
            );
          }, [r]),
          i || !o || !o.BIsLoaded())
        )
          return null;
        const m =
          y.c.COMMUNITY_BASE_URL +
          "gid/" +
          t.jsondata.broadcast_item_drops_details_clan_accountid +
          "/partnerevents/view/" +
          t.jsondata.broadcast_item_drops_details_event_gid;
        return c.a.createElement(
          "div",
          { className: x.a.item_drop_ctn },
          c.a.createElement(
            "div",
            null,
            Object(I.f)(
              o.GetName().length > 0
                ? t.jsondata.broadcast_item_drops_min_watch_time_minutes % 60 ==
                  0
                  ? "#SalePage_WatchForDrop_Hours_CreatorNamed"
                  : "#SalePage_WatchForDrop_Minutes_CreatorNamed"
                : t.jsondata.broadcast_item_drops_min_watch_time_minutes % 60 ==
                  0
                ? "#SalePage_WatchForDrop_Hours_Developer"
                : "#SalePage_WatchForDrop_Minutes_Developer",
              t.jsondata.broadcast_item_drops_min_watch_time_minutes % 60 == 0
                ? t.jsondata.broadcast_item_drops_min_watch_time_minutes / 60
                : t.jsondata.broadcast_item_drops_min_watch_time_minutes,
              o.GetName()
            ),
            Boolean(t.jsondata.broadcast_item_drops_details_clan_accountid) &&
              c.a.createElement(
                "a",
                { href: m, target: y.c.IN_CLIENT ? "" : "_blank" },
                Object(I.f)("#SalePage_WatchForDrop_LearnMore")
              )
          )
        );
      });
      var U,
        L = r("C4Nl"),
        V = r("hKFG"),
        A = r("S6U1");
      r("3u1e");
      const G = {
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
            broadcasterAccountID: 161065804,
          },
        ],
      };
      let H = (U = class extends c.a.Component {
        constructor() {
          super(...arguments),
            (this.m_cancelSignal = s.a.CancelToken.source()),
            (this.m_bMarkedUsabilitySeen = !1),
            (this.state = {
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
            });
        }
        static IsBroadcastAllowed() {
          return (
            y.c.EREALM != f.ESteamRealm.k_ESteamRealmChina && !y.c.IN_GAMEPADUI
          );
        }
        componentDidMount() {
          return Object(a.a)(this, void 0, void 0, function* () {
            U.IsBroadcastAllowed() &&
              (Object(V.a)(null),
              yield R.a
                .Get()
                .LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
              this.m_cancelSignal.token.reason ||
                this.setState({
                  bLoadingPreference: !1,
                  bExpanded: !R.a
                    .Get()
                    .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                  innerStyle: Object.assign(
                    Object.assign({}, this.state.innerStyle),
                    {
                      maxHeight: R.a
                        .Get()
                        .BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
                        ? "0vh"
                        : "100vh",
                    }
                  ),
                }),
              yield this.props.bIsPreview &&
              this.props.accountIDs &&
              !this.props.event.BUsesContentHubForItemSource()
                ? R.a.Get().HintLoadEmbeddablePreviewStreams(this.props)
                : R.a.Get().HintLoadEmbeddableStreams(this.props),
              this.props.nAppIDVOD &&
                (R.a
                  .Get()
                  .SetupEmbeddableVOD(this.props, !this.props.bSkipPreRoll),
                this.props.bSkipPreRoll && this.PlayTopNonVOD()),
              window.setTimeout(() => {
                this.m_cancelSignal.token.reason ||
                  this.setState({
                    style: Object.assign(Object.assign({}, this.state.style), {
                      maxHeight: "100vh",
                    }),
                  });
              }, 10));
          });
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("BroadcastEmbeddable component unmounted");
        }
        ToggleBroadcastExpandShrink() {
          let e = R.a.Get().GetPlayReadyStream(this.props);
          const t = this.state.bExpanded,
            r = O.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
          Object(R.e)(r, t ? 2 : 3, e.snr),
            t && Object(A.a)() && Object(A.a)().AddEvent(1005),
            window.setTimeout(
              () =>
                this.setState({
                  innerStyle: Object.assign(
                    Object.assign({}, this.state.innerStyle),
                    { maxHeight: t ? "0vh" : "100vh" }
                  ),
                }),
              10
            ),
            t ||
              this.setState({ bExpanded: !this.state.bExpanded }, () =>
                R.a.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded)
              );
        }
        OnShrinkTransitionEnd() {
          "0vh" === this.state.innerStyle.maxHeight &&
            this.setState({ bExpanded: !1 }, () =>
              R.a.Get().SetEmbeddedStreamCollapsed(!0)
            );
        }
        onStreamSelect(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            this.setState({ bStartMuted: !1 }),
              R.a.Get().GetPlayReadyStream(this.props).accountid !=
                e.accountid &&
                (yield R.a.Get().AttemptToPlayStream(this.props, e));
          });
        }
        PlayTopNonVOD() {
          return Object(a.a)(this, void 0, void 0, function* () {
            this.setState({ bStartMuted: !1 });
            const e = R.a
              .Get()
              .GetStreams(this.props)
              .filter(
                (e) =>
                  !this.props.fnFilterStreams || this.props.fnFilterStreams(e)
              );
            Object(R.f)(e);
            for (const t of e)
              if (!t.nAppIDVOD)
                return void (yield R.a
                  .Get()
                  .AttemptToPlayStream(this.props, t));
          });
        }
        ConstructSidePanels(e, t) {
          let r = {
            leftPanel: null,
            rightPanel: null,
            bRightPanelArtworkOrEmpty: !0,
          };
          if (this.props.bWidePlayer) return r;
          const a = R.a.Get().GetConcurrentStreams(this.props) > 1;
          let i = O.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
            s = c.a.createElement(
              "div",
              { className: x.a.rightPanel },
              c.a.createElement(K, { key: "right" + i, ImgUrl: e.right_panel })
            ),
            n = c.a.createElement(K, { key: "left" + i, ImgUrl: e.left_panel });
          if (i < 11) {
            const t = M.b.GetAppIDListForBroadcasterSteamID(e.steamid);
            t && 1 === t.length && (i = t[0]);
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
              ((s = c.a.createElement(w, {
                key: "mini" + e.accountid,
                appid: i,
              })),
              (r.bRightPanelArtworkOrEmpty = !1)),
            a && !t
              ? ((r.leftPanel = c.a.createElement(Y, {
                  broadcastEmbedContext: this.props,
                  key: "selector" + i,
                  curStream: e,
                  onStreamSelect: this.onStreamSelect,
                  fnFilterStreams: this.props.fnFilterStreams,
                  bShowCapsuleArt: this.props.bShowCapsuleArt,
                })),
                (r.rightPanel = s))
              : t
              ? ((r.leftPanel = c.a.createElement("div", null)),
                (r.rightPanel = c.a.createElement(ee, {
                  stream: e,
                  orientation: "rightside",
                })),
                (r.bRightPanelArtworkOrEmpty = !1))
              : ((r.leftPanel = n), (r.rightPanel = s)),
            r
          );
        }
        MarkBroadcastSeen() {
          this.m_bMarkedUsabilitySeen ||
            ((this.m_bMarkedUsabilitySeen = !0),
            Object(A.a)() && Object(A.a)().AddEvent(1004));
        }
        render() {
          if (!U.IsBroadcastAllowed() || this.state.bLoadingPreference)
            return null;
          let e = R.a.Get().GetPlayReadyStream(this.props);
          if (e) {
            this.MarkBroadcastSeen();
            let t = "show" === R.a.Get().GetChatVisibility();
            const {
              event: r,
              language: a,
              fnRenderBroadcastContext: i,
            } = this.props;
            r &&
              (e = Object.assign(Object.assign({}, e), {
                left_panel: r.GetImageURL(
                  "broadcast_left",
                  a || Object(f.PchLanguageToELanguage)(y.c.LANGUAGE)
                ),
                right_panel: r.GetImageURL(
                  "broadcast_right",
                  a || Object(f.PchLanguageToELanguage)(y.c.LANGUAGE)
                ),
                store_title: r.GetBroadcastTitle(
                  a || Object(f.PchLanguageToELanguage)(y.c.LANGUAGE)
                ),
                broadcast_chat_visibility: r.GetBroadcastChatVisibility(),
              }));
            let s = this.ConstructSidePanels(e, t),
              n = e.store_title ? e.store_title : e.title,
              o = R.a.Get().GetConcurrentStreams(this.props) > 1;
            const l = () => {
              var t, r;
              e.nAppIDVOD && this.PlayTopNonVOD(),
                null === (r = (t = this.props).fnOnVideoEnd) ||
                  void 0 === r ||
                  r.call(t);
            };
            r && r.jsondata && r.jsondata.broadcast_gradient_inner_color,
              r && r.jsondata && r.jsondata.broadcast_gradient_outer_color;
            return c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(
                "div",
                {
                  className: "broadcast_embed_top_ctn_trgt",
                  style: this.state.style,
                },
                c.a.createElement(
                  "div",
                  {
                    className: Object(S.a)({
                      [x.a.bordered_container]: !0,
                      [x.a.Event]: Boolean(r),
                      broadcast_brd_ctn_trgt: !0,
                    }),
                  },
                  c.a.createElement(
                    "div",
                    {
                      className: Object(S.a)(
                        x.a.bordered_title,
                        "bordered_title_trgt"
                      ),
                    },
                    c.a.createElement(T.h, null),
                    n,
                    c.a.createElement(
                      "div",
                      { className: x.a.bordered_corner_container },
                      !this.state.bExpanded &&
                        c.a.createElement("div", {
                          className: x.a.broadcast_settings_icon,
                          "data-tooltip-text": Object(I.f)(
                            "#StoreBroadcast_Change_store_Broadcast_settings"
                          ),
                          onClick: () =>
                            window.open(
                              `${y.c.STORE_BASE_URL}account/preferences/#store_broadcast_settings`
                            ),
                        }),
                      c.a.createElement("div", {
                        className: this.state.bExpanded
                          ? x.a.bordered_corner_expanded
                          : x.a.bordered_corner_shrinked,
                        "data-tooltip-text": Object(I.f)(
                          "#StoreBroadcast_Hide_Tooltip"
                        ),
                        onClick: this.ToggleBroadcastExpandShrink,
                      })
                    ),
                    Boolean(e.gamedata_subtitle) &&
                      c.a.createElement(
                        "div",
                        { className: x.a.bordered_subtitle },
                        e.gamedata_subtitle
                      )
                  ),
                  this.state.bExpanded &&
                    c.a.createElement(
                      "div",
                      {
                        className: Object(S.a)({
                          [x.a.container]: !0,
                          embeddable_ctn_trgt: !0,
                          multistream: o,
                          broadcast_right_panel_simple:
                            s.bRightPanelArtworkOrEmpty,
                          broadcast_chat_expanded: t,
                        }),
                        style: Object.assign({}, this.state.innerStyle),
                        onTransitionEnd: this.OnShrinkTransitionEnd,
                      },
                      s.leftPanel,
                      c.a.createElement(q, {
                        stream: e,
                        bStartMuted: this.state.bStartMuted,
                        fnRenderBroadcastContext: i,
                        fnOnVideoEnd: l,
                        bWidePlayer: this.props.bWidePlayer,
                      }),
                      s.rightPanel,
                      this.state.bExpanded &&
                        c.a.createElement($, { stream: e, bMultistream: o })
                    )
                ),
                Boolean(
                  r && r.jsondata && r.jsondata.broadcast_item_drops_enabled
                ) && c.a.createElement(k, { event: r }),
                this.state.bExpanded &&
                  c.a.createElement(
                    "div",
                    { className: `${r ? x.a.Event : ""}` },
                    c.a.createElement($, { stream: e, bMultistream: o })
                  ),
                c.a.createElement("div", { className: x.a.clear_div })
              )
            );
          }
          return c.a.createElement("div", {
            className: "NoBroadcastAvailable",
          });
        }
      });
      Object(a.b)([W.b], H.prototype, "ToggleBroadcastExpandShrink", null),
        Object(a.b)([W.b], H.prototype, "OnShrinkTransitionEnd", null),
        Object(a.b)([W.b], H.prototype, "onStreamSelect", null),
        Object(a.b)([W.b], H.prototype, "PlayTopNonVOD", null),
        (H = U = Object(a.b)([n.a], H));
      t.default = H;
      class q extends c.a.Component {
        constructor(e) {
          super(e),
            (this.m_iVideoContainerRef = c.a.createRef()),
            (this.state = {
              bPopout: !1,
              bPreventPopup: window.screen.width <= 768,
            });
        }
        CloseBroadcastPopup() {
          const e = O.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
            .m_nAppID;
          Object(R.e)(e, 7, this.props.stream.snr),
            Object(A.a)() && Object(A.a)().AddEvent(1006),
            this.setState({ bPopout: !1, bPreventPopup: !0 });
        }
        OnEnter() {
          !this.state.bPreventPopup &&
            this.state.bPopout &&
            this.setState({ bPopout: !1 });
        }
        OnLeave() {
          this.state.bPreventPopup ||
            this.state.bPopout ||
            this.setState({ bPopout: !0 });
        }
        render() {
          return c.a.createElement(
            "div",
            { className: x.a.wrapper },
            c.a.createElement(
              E.a,
              { onEnter: this.OnEnter, onLeave: this.OnLeave },
              c.a.createElement(
                "div",
                {
                  className: Object(S.a)({
                    [x.a.video_placeholder]: !0,
                    video_placeholder_trgt: !0,
                    [x.a.WidePlayer]: this.props.bWidePlayer,
                  }),
                  ref: this.m_iVideoContainerRef,
                },
                c.a.createElement(
                  "div",
                  {
                    className: this.state.bPopout
                      ? x.a.broadcast_floating
                      : x.a.video_container,
                  },
                  this.state.bPopout &&
                    c.a.createElement(J, {
                      steamIDBroadcast: this.props.stream.steamid,
                      OnPreventPopup: this.CloseBroadcastPopup,
                    }),
                  c.a.createElement(
                    "div",
                    { className: x.a.BroadcastPlayerContainer },
                    c.a.createElement(m.default, {
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
        }
      }
      Object(a.b)([W.b], q.prototype, "CloseBroadcastPopup", null),
        Object(a.b)([W.b], q.prototype, "OnEnter", null),
        Object(a.b)([W.b], q.prototype, "OnLeave", null);
      let $ = class extends c.a.Component {
        ConstructBroadcastLink() {
          let e = this.props.stream;
          const t = O.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
            .m_nAppID;
          let r = G.list.find(
            (r) =>
              r.appid == t &&
              (!r.broadcasterAccountID || r.broadcasterAccountID == e.accountid)
          );
          if (r) {
            let e = r.url;
            return (
              (y.c.IN_CLIENT ||
                navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
                (e = "steam://openurl/" + e),
              c.a.createElement(
                "a",
                { href: e },
                Object(I.f)("#Broadcast_Embed_Watch_With_Frieds_SteamTV")
              )
            );
          }
          {
            let e = this.props.stream.steamid,
              t = y.c.COMMUNITY_BASE_URL + "broadcast/watch/" + e;
            return c.a.createElement(
              "a",
              {
                href: t,
                className: x.a.external_link,
                "data-tooltip-text": Object(I.f)(
                  "#BroadcastWatch_View_Broadcast_Page"
                ),
              },
              c.a.createElement(F.z, null)
            );
          }
        }
        OnToggleChat(e) {
          e.preventDefault();
          const t = O.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
            .m_nAppID;
          Object(R.e)(
            t,
            "show" === R.a.Get().GetChatVisibility() ? 5 : 4,
            this.props.stream.snr
          ),
            R.a.Get().ToggleChatVisibility();
        }
        onWatchBroadcastPage() {
          const e = O.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
            .m_nAppID;
          Object(R.e)(e, 9, this.props.stream.snr);
        }
        render() {
          const e = this.ConstructBroadcastLink(),
            t = "remove" != R.a.Get().GetChatVisibility(),
            r = "hide" === R.a.Get().GetChatVisibility();
          let a = Number.parseInt(
            "" +
              O.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nViewerCount
          );
          return c.a.createElement(
            "div",
            { className: Object(S.a)(x.a.viewer_bar, "viewer_bar") },
            c.a.createElement(
              "div",
              { className: Object(S.a)(x.a.viewer_count, "viewer_count") },
              c.a.createElement(F.vb, null),
              a.toLocaleString(I.e.GetPreferredLocales())
            ),
            c.a.createElement(
              "div",
              { className: Object(S.a)(x.a.viewer_links, "viewer_links") },
              Boolean(t && !r && this.props.bMultistream) &&
                c.a.createElement(
                  "div",
                  { className: x.a.chat_link },
                  c.a.createElement(
                    "a",
                    {
                      href: "#",
                      className: x.a.ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    Object(I.f)("#sale_three_section_show_streams")
                  )
                ),
              t &&
                c.a.createElement(
                  "div",
                  { className: x.a.chat_link },
                  c.a.createElement(F.l, null),
                  c.a.createElement(
                    "a",
                    {
                      href: "#",
                      className: x.a.ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    Object(I.f)(
                      r
                        ? "#sale_three_section_show_chat"
                        : "#sale_three_section_hide_chat"
                    )
                  )
                ),
              t && c.a.createElement("span", { className: x.a.ChatToggle }),
              c.a.createElement(
                "a",
                {
                  href:
                    y.c.STORE_BASE_URL +
                    "account/preferences/#store_broadcast_settings",
                  target: y.c.IN_CLIENT ? void 0 : "_blank",
                  className: x.a.settings_link,
                  "data-tooltip-text": Object(I.f)(
                    "#StoreBroadcast_Change_store_Broadcast_settings"
                  ),
                },
                c.a.createElement(F.bb, null)
              ),
              e
            )
          );
        }
      };
      Object(a.b)([W.b], $.prototype, "OnToggleChat", null),
        Object(a.b)([W.b], $.prototype, "onWatchBroadcastPage", null),
        ($ = Object(a.b)([n.a], $));
      class K extends c.a.Component {
        render() {
          let e = this.props.ImgUrl;
          return c.a.createElement(
            c.a.Fragment,
            null,
            e &&
              c.a.createElement("img", {
                className: x.a.side_panels,
                src: this.props.ImgUrl,
              }),
            !e && c.a.createElement("div", { className: x.a.side_panels })
          );
        }
      }
      const J = Object(n.a)((e) => {
        const { steamIDBroadcast: t } = e,
          r = O.a.GetOrCreateBroadcastInfo(t).m_nAppID,
          [a] = Object(h.b)(r, {});
        return c.a.createElement(
          "div",
          { className: [x.a.PopOutVideoTitleBar, x.a.NoSeslect].join(" ") },
          Boolean(a)
            ? c.a.createElement(
                p.a,
                { type: "app", id: r, className: x.a.PopOutVideoTitleText },
                Object(I.f)("#StoreBroadcast_Detault_popout_Title")
              )
            : c.a.createElement(
                "div",
                { className: x.a.PopOutVideoTitleText },
                Object(I.f)("#StoreBroadcast_Detault_popout_Title")
              ),
          c.a.createElement(
            "button",
            {
              className: x.a.PopOutVideoCloseButton,
              "data-tooltip-text": Object(I.f)(
                "#StoreBroadcast_close_broadcast_popup"
              ),
              onClick: e.OnPreventPopup,
            },
            c.a.createElement(F.zb, null)
          )
        );
      });
      function X(e, t) {
        var r;
        const a = O.a.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
          i = L.a.Get().GetApp(a);
        return e &&
          (null === (r = null == i ? void 0 : i.GetAssets()) || void 0 === r
            ? void 0
            : r.GetHeaderURL())
          ? parseInt(x.a.strStreamIconCapsuleArtHeight)
          : parseInt(x.a.strStreamIconScreenshotArtHeight);
      }
      function Y(e) {
        const {
            curStream: t,
            onStreamSelect: r,
            fnFilterStreams: a,
            bShowCapsuleArt: i,
            broadcastEmbedContext: s,
          } = e,
          n = Object(l.useRef)(),
          o = Object(l.useMemo)(() => {
            const e = R.a
              .Get()
              .GetStreams(s)
              .filter((e) => !a || a(e));
            return Object(R.f)(e), e;
          }, [s, a]);
        return (
          Object(l.useEffect)(() => {
            if (n && n.current) {
              const e = o
                .map((e) => O.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID)
                .filter(Boolean);
              L.a
                .Get()
                .QueueMultipleAppRequests(e, { include_assets: !0 })
                .then(() => {
                  if (n.current) {
                    let e = 0;
                    for (const r of o) {
                      if (t.accountid == r.accountid) break;
                      e += X(i, r);
                    }
                    n.current.scrollTop = e;
                  }
                });
            }
          }, [o, i, t.accountid, n]),
          c.a.createElement(
            "div",
            {
              ref: n,
              className: Object(S.a)({
                [x.a.side_panels]: !0,
                side_panels: !0,
                [x.a.multistream]: !0,
                [x.a.scrollingstreams]: o.length > 3,
              }),
            },
            o.map((e) => {
              var a;
              return c.a.createElement(Q, {
                key: null !== (a = e.accountid) && void 0 !== a ? a : e.steamid,
                stream: e,
                bSelected: t.accountid == e.accountid,
                onStreamSelect: r,
                bShowCapsuleArt: i,
              });
            })
          )
        );
      }
      function Q(e) {
        var t;
        const {
            onStreamSelect: r,
            bSelected: a,
            stream: i,
            bShowCapsuleArt: s,
          } = e,
          n = Object(o.d)(
            () => O.a.GetOrCreateBroadcastInfo(i.steamid).m_nAppID
          ),
          [l] = Object(h.b)(
            null !== (t = i.nAppIDVOD) && void 0 !== t ? t : n,
            { include_assets: !0 }
          );
        if (!Object(R.d)(i)) return null;
        const d = s && (null == l ? void 0 : l.GetAssets().GetHeaderURL()),
          m = Number.parseInt("" + i.viewer_count),
          u = !Number.isNaN(m),
          b = !!i.nAppIDVOD && (null == l ? void 0 : l.GetName());
        return c.a.createElement(
          "div",
          {
            className: Object(S.a)({
              [x.a.stream_icon_and_viewer_container]: !0,
              [x.a.stream_featured]:
                i.current_selection_priority == R.b.k_eFeatured,
              [x.a.display_capsule_art]: Boolean(d),
            }),
          },
          c.a.createElement(
            p.b,
            { type: "app", id: n },
            c.a.createElement(
              z.a,
              {
                className: x.a.stream_icon_container,
                onClick: () => r && r(i),
                rootMargin: "100px 0px 100px 0px",
              },
              c.a.createElement(Z, {
                strThumbnail: i.thumbnail_http_address,
                bSelected: a,
                strCapsuleArtURL: d,
              }),
              a &&
                c.a.createElement("div", { className: x.a.stream_icon_arrow })
            )
          ),
          c.a.createElement(
            "div",
            { className: Object(S.a)(x.a.viewer_count, !u && x.a.vod_title) },
            u
              ? c.a.createElement(
                  c.a.Fragment,
                  null,
                  c.a.createElement(F.vb, null),
                  " ",
                  m.toLocaleString(I.e.GetPreferredLocales())
                )
              : b
          )
        );
      }
      function Z(e) {
        const { strCapsuleArtURL: t, strThumbnail: r, bSelected: a } = e,
          i = a ? x.a.stream_icon_selected : x.a.stream_icon;
        if (t) {
          const e = [t];
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement("img", {
              className: Object(S.a)(i, x.a.stream_icon_hide_on_hover),
              src: t,
            }),
            c.a.createElement(j.b, {
              className: Object(S.a)(i, x.a.stream_icon_show_on_hover),
              srcs: e,
            })
          );
        }
        return c.a.createElement("img", { className: i, src: r });
      }
      function ee(e) {
        const { stream: t, orientation: r } = e,
          a = "below" == r,
          i = Object(o.d)(() => O.a.GetBroadcast(t.steamid));
        return i
          ? c.a.createElement(
              "div",
              {
                className: Object(S.a)({
                  [x.a.chat_below_container]: a,
                  [x.a.chat_rightside_container]: !a,
                  [x.a.store_chat_ctn]: !0,
                }),
              },
              c.a.createElement(
                "div",
                { className: x.a.ChatContainer },
                c.a.createElement(d.a, {
                  emoticonStore: R.g,
                  watchLocation: 6,
                  steamID: t.steamid,
                  broadcastID: i.m_ulBroadcastID,
                })
              )
            )
          : null;
      }
    },
    "d+Me": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return s;
      });
      var a = r("q1tI"),
        i = r("uuth");
      const s = (e) => {
        const { onPositionChange: t, onLeave: r } = e,
          s = a.useCallback(
            (e) => (
              void 0 === e.previousPosition &&
                e.currentPosition === i.a.above &&
                r &&
                r(e),
              t && t(e)
            ),
            [t, r]
          );
        return a.createElement(
          i.a,
          Object.assign({}, e, { onPositionChange: s })
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
        return N;
      });
      var a = r("mrSG"),
        i = r("2vnA"),
        s = r("TyAF"),
        n = r("q1tI"),
        o = r.n(n),
        l = r("TtDX"),
        c = (r("kdZy"), r("gfUn")),
        d = r("1BdX"),
        m = (r("wUwH"), r("a5LV")),
        u = (r("gJzY"), r("Z9dU")),
        h = r.n(u),
        b = r("y+6m"),
        _ = r("Mgs7"),
        p = r("Gorr"),
        g = r("0QoN"),
        B = r("BFsE"),
        S = r("gPCo"),
        y = r("5znp"),
        f = r.n(y);
      const v = () =>
          o.a.createElement(
            "div",
            { className: f.a.FriendsListInsetShadowCtn },
            o.a.createElement("div", {
              className: f.a.FriendListInsetShadowTop,
            })
          ),
        C = () =>
          o.a.createElement(
            "div",
            { className: f.a.FriendsListInsetShadowCtn },
            o.a.createElement("div", {
              className: f.a.FriendListInsetShadowBottom,
            })
          );
      var w = r("6Y59"),
        M = r("exH9"),
        O = r("TLQK"),
        R = r("opsS"),
        T = r("lkRc"),
        j = r("3sYe"),
        z = r.n(j),
        F = r("A5MU");
      const E = new RegExp("ː([^ː]*)ː", "g"),
        I =
          (new RegExp("(https?://[^ '\"<>]*)", "gi"),
          new RegExp(
            "^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)",
            "i"
          ));
      const W = (e) => {
          const { userType: t, msg: r, presenterInfo: a } = e;
          if ("presenter" === t)
            return n.createElement(
              "span",
              null,
              n.createElement(
                S.b,
                {
                  name: a.name,
                  title: a.title,
                  photo: a.photo,
                  company: a.company,
                  bioString: a.bio,
                },
                n.createElement(
                  "a",
                  {
                    className: Object(M.a)(
                      z.a.MessageName,
                      z.a.MessagePresenter
                    ),
                    href: T.c.COMMUNITY_BASE_URL + "profiles/" + r.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  r.persona_name
                )
              )
            );
          {
            let e = null;
            return (
              "broadcaster" === t
                ? (e = z.a.MessageBroadcaster)
                : "moderator" === t && (e = z.a.MessageModerator),
              n.createElement(
                "span",
                null,
                n.createElement(
                  "a",
                  {
                    className: Object(M.a)(z.a.MessageName, e),
                    href: T.c.COMMUNITY_BASE_URL + "profiles/" + r.steamid,
                    "data-miniprofile": "s" + r.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  r.persona_name
                )
              )
            );
          }
        },
        P = (e) => {
          switch (e.userType) {
            case "presenter":
              return n.createElement(
                "span",
                {
                  className: z.a.RoleFlairContainer,
                  "data-tooltip-text": Object(O.f)(
                    "#BroadcastChat_Role_Presenter_ttip"
                  ),
                },
                n.createElement(w.h, null)
              );
            case "moderator":
              return n.createElement(
                "span",
                {
                  className: z.a.RoleFlairContainer,
                  "data-tooltip-text": Object(O.f)(
                    "#BroadcastChat_Role_Moderatorr_ttip"
                  ),
                },
                n.createElement(w.i, null)
              );
            case "broadcaster":
              return n.createElement(
                "span",
                {
                  className: z.a.RoleFlairContainer,
                  "data-tooltip-text": Object(O.f)(
                    "#BroadcastChat_Role_Broadcaster_ttip"
                  ),
                },
                n.createElement(w.g, null)
              );
            default:
              return null;
          }
        };
      let N = class extends n.Component {
        constructor() {
          super(...arguments),
            (this.m_chat = null),
            (this.messagesContainer = n.createRef());
        }
        componentDidMount() {
          this.StartChat();
        }
        componentDidUpdate(e) {
          this.m_chat &&
            this.m_chat.m_bAutoScroll &&
            this.ScrollToNewestMessages(),
            (this.props.steamID === e.steamID &&
              this.props.broadcastID === e.broadcastID &&
              this.props.broadcastChannelID === e.broadcastChannelID) ||
              this.StartChat();
        }
        componentWillUnmount() {
          this.m_chat && this.m_chat.Stop();
        }
        StartChat() {
          if (
            (this.m_chat && this.m_chat.Stop(),
            (this.m_chat = c.a.GetOrCreateChat(
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
            let e = this.props.broadcastID || "0";
            this.m_chat.StartForSteamID(this.props.steamID, e),
              this.ScrollToNewestMessages();
          }
        }
        IsTrustedDomain(e) {
          return !!e.match(I);
        }
        AddLinksEmoticons(e, t) {
          let r = E;
          t && (r = this.m_chat.GetUserEmoticons());
          let a = e.split(E);
          const i = [];
          for (let e = 0; e < a.length; e += 1)
            e % 2 == 1
              ? i.push(
                  n.createElement(p.b, {
                    emoticonHoverStore: m.b,
                    key: e,
                    emoticon: a[e],
                    large: !0,
                  })
                )
              : i.push(a[e]);
          return i;
        }
        HandleScroll(e) {
          const t = this.props.bInvertLayout
            ? e.currentTarget.scrollTop < 6
            : e.currentTarget.scrollTop + e.currentTarget.clientHeight >=
              e.currentTarget.scrollHeight - 6;
          this.m_chat && (this.m_chat.m_bAutoScroll = t);
        }
        ScrollToNewestMessages() {
          this.messagesContainer &&
            this.messagesContainer.current &&
            (this.messagesContainer.current.scrollTop = this.props.bInvertLayout
              ? 0
              : this.messagesContainer.current.scrollHeight);
        }
        OnContextMenu(e, t) {
          if (t.type !== F.a.Chat) return null;
          const r = [],
            a = this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID()),
            i = this.m_chat.BIsUserBroadcastModerator(
              this.m_chat.GetUserSteamID()
            );
          if (
            ((T.h && T.h.is_support) || a || i
              ? r.push(
                  n.createElement(
                    b.d,
                    {
                      key: "remove",
                      onSelected: () =>
                        this.m_chat.RemoveUserMessagesServer(
                          t.steamid,
                          t.persona_name
                        ),
                    },
                    Object(O.f)("#BroadcastChat_RemoveMessages")
                  ),
                  n.createElement(
                    b.d,
                    {
                      key: "updatebanh",
                      onSelected: () =>
                        this.m_chat.UpdateUserChatBan(
                          t.steamid,
                          1,
                          12,
                          !1,
                          t.persona_name
                        ),
                    },
                    Object(O.f)("#BroadcastChat_half_Mute")
                  ),
                  n.createElement(
                    b.d,
                    {
                      key: "updateband",
                      onSelected: () =>
                        this.m_chat.UpdateUserChatBan(
                          t.steamid,
                          1,
                          24,
                          !1,
                          t.persona_name
                        ),
                    },
                    Object(O.f)("#BroadcastChat_day_Mute")
                  ),
                  n.createElement(
                    b.d,
                    {
                      key: "updatebanw",
                      onSelected: () =>
                        this.m_chat.UpdateUserChatBan(
                          t.steamid,
                          1,
                          168,
                          !1,
                          t.persona_name
                        ),
                    },
                    Object(O.f)("#BroadcastChat_week_Mute")
                  ),
                  n.createElement(
                    b.d,
                    {
                      key: "updatebanp",
                      onSelected: () =>
                        this.m_chat.UpdateUserChatBan(
                          t.steamid,
                          1,
                          0,
                          !0,
                          t.persona_name
                        ),
                    },
                    Object(O.f)("#BroadcastChat_perm_Mute")
                  ),
                  n.createElement(
                    b.d,
                    {
                      key: "removeban",
                      onSelected: () =>
                        this.m_chat.UpdateUserChatBan(
                          t.steamid,
                          0,
                          0,
                          !1,
                          t.persona_name,
                          !0
                        ),
                    },
                    Object(O.f)("#BroadcastChat_Unmute")
                  )
                )
              : this.m_chat.IsUserMutedLocally(t.steamid)
              ? r.push(
                  n.createElement(
                    b.d,
                    {
                      key: "unmuteuser",
                      onSelected: () =>
                        this.m_chat.UnmuteUserForSession(
                          t.steamid,
                          t.persona_name
                        ),
                    },
                    Object(O.f)("#BroadcastChat_UnmuteLocal")
                  )
                )
              : r.push(
                  n.createElement(
                    b.d,
                    {
                      key: "muteuser",
                      onSelected: () =>
                        this.m_chat.MuteUserForSession(
                          t.steamid,
                          t.persona_name
                        ),
                    },
                    Object(O.f)("#BroadcastChat_MuteLocal")
                  )
                ),
            ((T.h && T.h.is_support) ||
              this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID())) &&
              t.steamid)
          ) {
            this.m_chat.BIsUserBroadcastModerator(t.steamid)
              ? r.push(
                  n.createElement(
                    b.d,
                    {
                      key: "removemod",
                      onSelected: () =>
                        this.m_chat.UpdateBroadcastChatModerator(
                          t.steamid,
                          !1,
                          t.persona_name
                        ),
                    },
                    Object(O.f)("#BroadcastChat_Remove_Moderator")
                  )
                )
              : r.push(
                  n.createElement(
                    b.d,
                    {
                      key: "addmod",
                      onSelected: () =>
                        this.m_chat.UpdateBroadcastChatModerator(
                          t.steamid,
                          !0,
                          t.persona_name
                        ),
                    },
                    Object(O.f)("#BroadcastChat_Add_Moderator")
                  )
                );
          }
          return r.length
            ? Object(l.a)(
                n.createElement(
                  b.c,
                  null,
                  n.createElement(
                    "div",
                    { className: z.a.SelectedUserNameCtn },
                    Object(O.f)("#BroadcastChat_User"),
                    n.createElement("br", null),
                    n.createElement(
                      "span",
                      { className: z.a.SelectedUserName },
                      t.persona_name
                    )
                  ),
                  r
                ),
                e
              )
            : null;
        }
        GetTypeClassName(e) {
          return e.type === F.a.Notification
            ? z.a.MessageNotification
            : e.type === F.a.Error
            ? z.a.MessageError
            : z.a.MessageChat;
        }
        FormatMessage(e, t) {
          if (e.type === F.a.Chat) {
            let r = t ? t.FilterText(e.steamid, e.msg) : e.msg;
            return this.AddLinksEmoticons(r, !1);
          }
          return e.msg;
        }
        RenderUserChatLine(e, t, r) {
          let a = r ? r.get(e.steamid) : void 0;
          const i =
            e.type === F.a.Chat
              ? (function (e, t, r) {
                  return r
                    ? "presenter"
                    : t.GetBroadcastSteamID() === e
                    ? "broadcaster"
                    : t.BIsUserBroadcastModerator(e)
                    ? "moderator"
                    : "";
                })(e.steamid, this.m_chat, a)
              : "";
          return n.createElement(
            "div",
            {
              key: e.instance_id + "_" + e.client_ts + "_" + t,
              className: this.GetTypeClassName(e),
              onContextMenu: (t) => this.OnContextMenu(t, e),
            },
            e.type === F.a.Chat && n.createElement(P, { userType: i }),
            e.flair &&
              n.createElement(
                "span",
                { className: z.a.FlairContainer },
                this.AddLinksEmoticons(e.flair, !1)
              ),
            e.type === F.a.Chat &&
              n.createElement(W, { userType: i, msg: e, presenterInfo: a }),
            e.type === F.a.Chat &&
              this.m_chat.GetBroadcastSteamID() === e.steamid &&
              n.createElement(
                "span",
                {
                  className: `${z.a.MessageNotification} ${z.a.MessageContents}`,
                },
                ` (${Object(O.f)("#BroadcastChat_Broadcaster")})`
              ),
            e.type === F.a.Chat &&
              this.m_chat.m_mapChannelModeratorUsers.get(e.steamid) &&
              n.createElement(
                "span",
                {
                  className: `${z.a.MessageNotification} ${z.a.MessageContents}`,
                },
                ` (${Object(O.f)("#BroadcastChat_Moderator")})`
              ),
            n.createElement(
              "span",
              {
                className: `${z.a.MessageContents} ${
                  this.AddLinksEmoticons(e.msg, !1).filter(
                    (e) => e && "string" == typeof e
                  ).length
                    ? ""
                    : z.a.EmoticonsOnly
                }`,
              },
              e.type === F.a.Chat ? " : " : "",
              this.FormatMessage(e, this.m_chat.TextFilterStore)
            )
          );
        }
        render() {
          const {
              hidden: e,
              bPartnerMemberOnlyChat: t,
              bInvertLayout: r,
            } = this.props,
            a = this.m_chat ? this.m_chat.m_rgChatMessages : [],
            i = r ? a.reverse() : a,
            s = this.m_chat
              ? d.b.GetPresenterMapForBroadcasterSteamID(
                  this.m_chat.GetBroadcastSteamID()
                )
              : void 0;
          return n.createElement(
            "div",
            {
              className: Object(M.a)(z.a.ChatPanel, "ChatPanel"),
              style: e ? { display: "none" } : void 0,
            },
            r &&
              !!this.m_chat &&
              n.createElement(D, {
                oChat: this.m_chat,
                emoticonStore: this.props.emoticonStore,
                bPartnerMemberOnlyChat: t,
              }),
            n.createElement(v, null),
            n.createElement(
              "div",
              {
                className: Object(M.a)(
                  `${z.a.ChatMessages} ${h.a.minHeightZero}`,
                  "ChatMessages"
                ),
                onScroll: this.HandleScroll,
                ref: this.messagesContainer,
              },
              i.map((e, t) => this.RenderUserChatLine(e, t, s))
            ),
            n.createElement(C, null),
            !r &&
              !!this.m_chat &&
              n.createElement(D, {
                oChat: this.m_chat,
                emoticonStore: this.props.emoticonStore,
                bPartnerMemberOnlyChat: t,
              })
          );
        }
      };
      function D(e) {
        const { oChat: t, emoticonStore: r, bPartnerMemberOnlyChat: a } = e;
        return !a ||
          ((null === T.h || void 0 === T.h ? void 0 : T.h.logged_in) &&
            (null === T.h || void 0 === T.h ? void 0 : T.h.is_partner_member))
          ? (null === T.h || void 0 === T.h ? void 0 : T.h.logged_in)
            ? n.createElement(x, { oChat: t, emoticonStore: r })
            : null
          : n.createElement(L, null);
      }
      function x(e) {
        const { oChat: t, emoticonStore: r } = e,
          [a, i] = n.useState(""),
          s = n.useRef(),
          o = n.useCallback(
            (e) => {
              !!e.shiftKey ||
                13 !== e.charCode ||
                (t.m_bRateLimited || (t.SendMessage(a), i("")),
                e.preventDefault());
            },
            [t, a]
          ),
          l = n.useCallback(
            (e, t = !1) => {
              i(a + `ː${e}ː`),
                (null == s ? void 0 : s.current) && s.current.focus();
            },
            [a, s]
          );
        return n.createElement(
          "div",
          { className: Object(M.a)(z.a.ChatEntryCtn, "ChatEntryCtn") },
          n.createElement(
            "div",
            { className: Object(M.a)(z.a.ChatEntry, "ChatEntry") },
            n.createElement(
              "form",
              { className: `${h.a.chatEntryControls}` },
              n.createElement("textarea", {
                className: h.a.chatTextarea,
                placeholder: Object(O.f)("#BroadcastChat_EnterResponse"),
                onKeyPress: o,
                onChange: (e) => i(e.target.value),
                value: a,
                ref: s,
              }),
              Boolean(t.m_bRateLimited) &&
                n.createElement(U, {
                  nSeconds: t.m_nRateLimitSeconds,
                  bRateLimited: t.m_bRateLimited,
                }),
              n.createElement(
                "button",
                {
                  className: `${h.a.chatSubmitButton} ${a ? "" : h.a.disabled}`,
                  title: Object(O.f)("#ChatEntryButton_Submit"),
                  disabled: t.m_bRateLimited || 0 == a.trim().length,
                  onClick: () => {
                    t.SendMessage(a), i("");
                  },
                },
                n.createElement(w.mb, null)
              )
            ),
            n.createElement(
              "div",
              {
                style: { height: "50px" },
                className: `${h.a.chatEntryActionsContainer}`,
              },
              n.createElement(
                "div",
                { className: h.a.chatEntryActionsGroup },
                n.createElement(g.a, {
                  disabled: !1,
                  OnEmoticonSelected: l,
                  rtLastAckedNewEmoticons: Number.MAX_VALUE,
                  emoticonStore: r,
                  emoticonHoverStore: m.b,
                }),
                n.createElement(k, Object.assign({}, e, { textInputRef: s }))
              )
            )
          )
        );
      }
      function k(e) {
        var t;
        const { oChat: r, emoticonStore: a, textInputRef: i } = e;
        return r.m_strFlairGroupID &&
          a.flair_list &&
          (null === (t = a.GetFlairListByGroupID(r.m_strFlairGroupID)) ||
          void 0 === t
            ? void 0
            : t.length)
          ? n.createElement(g.a, {
              disabled: !1,
              OnEmoticonSelected: (e) => {
                r.UpdateChatMessageFlair(e),
                  (null == i ? void 0 : i.current) && i.current.focus();
              },
              rtLastAckedNewEmoticons: Number.MAX_VALUE,
              emoticonStore: a,
              emoticonHoverStore: m.b,
              strFlairGroupID: r.m_strFlairGroupID,
              title: Object(O.f)("#ChatEntryButton_Flair"),
              buttonIcon: n.createElement(w.j, null),
            })
          : null;
      }
      Object(a.b)([i.C], N.prototype, "m_chat", void 0),
        Object(a.b)([R.b], N.prototype, "StartChat", null),
        Object(a.b)([R.b], N.prototype, "HandleScroll", null),
        Object(a.b)([R.b], N.prototype, "OnContextMenu", null),
        Object(a.b)([R.b], N.prototype, "RenderUserChatLine", null),
        (N = Object(a.b)([s.a], N));
      class U extends n.Component {
        render() {
          return n.createElement(
            "div",
            { className: z.a.TimedProgressBarContainer },
            n.createElement(
              "div",
              { className: z.a.wrapper },
              n.createElement("div", {
                className: `${z.a.spinner} ${z.a.pie}`,
                style: { animationDuration: `${this.props.nSeconds || 0}s` },
              }),
              n.createElement("div", {
                className: `${z.a.filler} ${z.a.pie}`,
                style: { animationDuration: `${this.props.nSeconds || 0}s` },
              }),
              n.createElement("div", {
                className: z.a.mask,
                style: { animationDuration: `${this.props.nSeconds || 0}s` },
              })
            )
          );
        }
      }
      function L(e) {
        return n.createElement(
          "div",
          { className: z.a.Description },
          n.createElement(
            "div",
            { className: z.a.LogInPrompt },
            Object(O.f)("#Broadcast_PartnerChat_Login")
          ),
          !T.h.logged_in &&
            n.createElement(
              _.f,
              { onClick: B.a, className: Object(M.a)(z.a.SignInButton) },
              Object(O.f)("#Login_SignIn")
            )
        );
      }
    },
    gJzY: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return j;
      });
      var a = r("mrSG"),
        i = r("2vnA"),
        s = r("vDqi"),
        n = r.n(s),
        o = r("bxBv"),
        l = r("hRO2"),
        c = r("OS8t");
      const d = l.Message;
      class m extends d {
        constructor(e = null) {
          super(),
            m.prototype.bincremental || c.a(m.M()),
            d.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  bincremental: { n: 1, br: c.d.readBool, bw: c.h.writeBool },
                  friends: { n: 2, c: u, r: !0, q: !0 },
                  max_friend_count: {
                    n: 3,
                    br: c.d.readUint32,
                    bw: c.h.writeUint32,
                  },
                  active_friend_count: {
                    n: 4,
                    br: c.d.readUint32,
                    bw: c.h.writeUint32,
                  },
                  friends_limit_hit: {
                    n: 5,
                    br: c.d.readBool,
                    bw: c.h.writeBool,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = c.e(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return c.g(m.M(), e, t);
        }
        static fromObject(e) {
          return c.c(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.b(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.f(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientFriendsList";
        }
      }
      class u extends d {
        constructor(e = null) {
          super(),
            u.prototype.ulfriendid || c.a(u.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  ulfriendid: {
                    n: 1,
                    br: c.d.readFixed64String,
                    bw: c.h.writeFixed64String,
                  },
                  efriendrelationship: {
                    n: 2,
                    br: c.d.readUint32,
                    bw: c.h.writeUint32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = c.e(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return c.g(u.M(), e, t);
        }
        static fromObject(e) {
          return c.c(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.b(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.f(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientFriendsList_Friend";
        }
      }
      const h = l.Message;
      class b extends h {
        constructor(e = null) {
          super(),
            b.prototype.groupid || c.a(b.M()),
            h.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  groupid: { n: 1, br: c.d.readUint32, bw: c.h.writeUint32 },
                  name: { n: 2, br: c.d.readString, bw: c.h.writeString },
                  accountid_members: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: c.d.readUint32,
                    bw: c.h.writeRepeatedUint32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = c.e(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return c.g(b.M(), e, t);
        }
        static fromObject(e) {
          return c.c(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.b(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.f(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsListCategory";
        }
      }
      class _ extends h {
        constructor(e = null) {
          super(),
            _.prototype.categories || c.a(_.M()),
            h.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: { categories: { n: 1, c: b, r: !0, q: !0 } },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = c.e(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return c.g(_.M(), e, t);
        }
        static fromObject(e) {
          return c.c(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.b(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.f(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetCategories_Response";
        }
      }
      class p extends h {
        constructor(e = null) {
          super(),
            p.prototype.accountid || c.a(p.M()),
            h.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  accountid: { n: 1, br: c.d.readUint32, bw: c.h.writeUint32 },
                  clanid: { n: 2, br: c.d.readUint32, bw: c.h.writeUint32 },
                  chat_group_id: {
                    n: 3,
                    br: c.d.readUint64String,
                    bw: c.h.writeUint64String,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = c.e(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return c.g(p.M(), e, t);
        }
        static fromObject(e) {
          return c.c(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.b(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.f(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsListFavoriteEntry";
        }
      }
      class g extends h {
        constructor(e = null) {
          super(),
            g.prototype.favorites || c.a(g.M()),
            h.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: { favorites: { n: 1, c: p, r: !0, q: !0 } },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = c.e(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return c.g(g.M(), e, t);
        }
        static fromObject(e) {
          return c.c(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.b(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.f(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFavorites_Response";
        }
      }
      class B extends h {
        constructor(e = null) {
          super(), h.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new B();
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_SetFavorites_Response";
        }
      }
      class S extends h {
        constructor(e = null) {
          super(),
            S.prototype.favorites || c.a(S.M()),
            h.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: { favorites: { n: 1, c: p, r: !0, q: !0 } },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = c.e(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return c.g(S.M(), e, t);
        }
        static fromObject(e) {
          return c.c(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.b(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.f(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_FavoritesChanged_Notification";
        }
      }
      class y extends h {
        constructor(e = null) {
          super(), h.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new y();
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFriendsList_Request";
        }
      }
      class f extends h {
        constructor(e = null) {
          super(),
            f.prototype.friendslist || c.a(f.M()),
            h.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = { proto: f, fields: { friendslist: { n: 1, c: m } } }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = c.e(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return c.g(f.M(), e, t);
        }
        static fromObject(e) {
          return c.c(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.b(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.f(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFriendsList_Response";
        }
      }
      var v, C;
      !(function (e) {
        (e.GetCategories = function (e, t) {
          return e.SendMsg("FriendsList.GetCategories#1", t, _, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
          (e.GetFriendsList = function (e, t) {
            return e.SendMsg("FriendsList.GetFriendsList#1", t, f, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.GetFavorites#1", t, g, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.SetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.SetFavorites#1", t, B, {
              ePrivilege: 1,
            });
          });
      })(v || (v = {})),
        (function (e) {
          e.FavoritesChangedHandler = {
            name: "FriendsListClient.FavoritesChanged#1",
            request: S,
          };
        })(C || (C = {}));
      var w = r("oFam"),
        M = r("kLLr"),
        O = r("lkRc"),
        R = (r("mgoM"), r("75qM"), r("65aj")),
        T = r("uobO");
      r("AiWL");
      class j {
        constructor() {
          (this.m_mapPlayerCache = new Map()),
            (this.m_strBannedWords = ""),
            (this.m_strProfanityWords = ""),
            (this.m_strCleanWords = ""),
            (this.m_strBannedPattern = ""),
            (this.m_strCleanPattern = ""),
            (this.m_regexBannedWords = null),
            (this.m_regexCleanWords = null),
            (this.m_bShownFilterTip = !1),
            (this.m_TextFilterPreferences = new R.TextFilterPreferences());
          {
            let e = new w.a();
            (this.m_TextFilterPreferences.eTextFilterSetting = e.text_filter_setting()),
              (this.m_TextFilterPreferences.bIgnoreFriends = e.text_filter_ignore_friends());
          }
          this.m_TextFilterWords = new w.n();
        }
        Init(e = 0, t = null, r = null) {
          return Object(a.a)(this, void 0, void 0, function* () {
            (this.m_unAccountID = e),
              (this.m_Transport = t),
              (this.m_Storage = r),
              (this.m_strBannedWords = ""),
              (this.m_strProfanityWords = ""),
              (this.m_strCleanWords = ""),
              yield this.LoadFilter(),
              yield this.LoadTextFilterPreferences(),
              yield this.LoadTextFilterWords(),
              yield this.RequestUpdatedSettings(),
              yield this.RequestFriendsList(),
              yield this.LoadLanguage(O.c.LANGUAGE),
              "english" !== O.c.LANGUAGE &&
                (yield this.LoadLanguage("english")),
              this.OnFilterDataChanged();
          });
        }
        LoadTextFilterPreferences() {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (this.m_Storage) {
              let e = yield this.m_Storage.GetObject(
                "CTextFilterStore_TextFilterPreferences"
              );
              e && (this.m_TextFilterPreferences = e);
            }
          });
        }
        SaveTextFilterPreferences() {
          this.m_Storage &&
            this.m_Storage.StoreObject(
              "CTextFilterStore_TextFilterPreferences",
              this.m_TextFilterPreferences
            );
        }
        LoadTextFilterWords() {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (this.m_Storage) {
              let e = yield this.m_Storage.GetObject(
                "CTextFilterStore_TextFilterWords"
              );
              e && (this.m_TextFilterWords = w.n.fromObject(e));
            }
          });
        }
        SaveTextFilterWords() {
          this.m_Storage &&
            this.m_Storage.StoreObject(
              "CTextFilterStore_TextFilterWords",
              this.m_TextFilterWords.toObject()
            );
        }
        LoadFilter() {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (this.m_Storage) {
              let e = yield this.m_Storage.GetObject(
                  "CTextFilterStore_strBannedPattern"
                ),
                t = yield this.m_Storage.GetObject(
                  "CTextFilterStore_strCleanPattern"
                );
              null != e && null != t && this.BRebuildFilter(e, t);
            }
          });
        }
        SaveFilter() {
          this.m_Storage &&
            (this.m_Storage.StoreObject(
              "CTextFilterStore_strBannedPattern",
              this.m_strBannedPattern
            ),
            this.m_Storage.StoreObject(
              "CTextFilterStore_strCleanPattern",
              this.m_strCleanPattern
            ));
        }
        RequestUpdatedSettings() {
          return Object(a.a)(this, void 0, void 0, function* () {
            let e = new w.a();
            if (0 !== this.m_unAccountID)
              try {
                if (this.m_Transport) {
                  let t = o.b.Init(w.b);
                  e = (yield w.o.GetCommunityPreferences(this.m_Transport, t))
                    .Body()
                    .preferences();
                } else {
                  let t = { sessionid: O.c.SESSIONID, origin: Object(O.d)() };
                  const r = yield n.a.get(
                    O.c.COMMUNITY_BASE_URL +
                      "textfilter/ajaxgetcommunitypreferences",
                    { params: t, withCredentials: !0 }
                  );
                  e = w.a.fromObject(r.data.preferences);
                }
              } catch (e) {}
            if (
              (this.UpdateCommunityPreferences(e),
              e.text_filter_words_revision() !==
                this.m_TextFilterWords.text_filter_words_revision())
            ) {
              let t = new w.n();
              if (0 !== e.text_filter_words_revision())
                try {
                  if (this.m_Transport) {
                    let e = o.b.Init(w.e);
                    t = (yield w.o.GetTextFilterWords(this.m_Transport, e))
                      .Body()
                      .words();
                  } else {
                    let e = { sessionid: O.c.SESSIONID, origin: Object(O.d)() };
                    const r = yield n.a.get(
                      O.c.COMMUNITY_BASE_URL +
                        "textfilter/ajaxgettextfiltercustomwords",
                      { params: e, withCredentials: !0 }
                    );
                    t = w.n.fromObject(r.data.words);
                  }
                } catch (e) {}
              this.UpdateTextFilterWords(t);
            }
          });
        }
        UpdateCommunityPreferences(e) {
          let t = !1;
          e.text_filter_setting() !==
            this.m_TextFilterPreferences.eTextFilterSetting &&
            ((this.m_TextFilterPreferences.eTextFilterSetting = e.text_filter_setting()),
            (t = !0)),
            e.text_filter_ignore_friends() !==
              this.m_TextFilterPreferences.bIgnoreFriends &&
              ((this.m_TextFilterPreferences.bIgnoreFriends = e.text_filter_ignore_friends()),
              (t = !0)),
            t && this.SaveTextFilterPreferences();
        }
        get TextFilterPreferences() {
          return this.m_TextFilterPreferences;
        }
        UpdateTextFilterWords(e) {
          (this.m_TextFilterWords = e), this.SaveTextFilterWords();
        }
        RequestFriendsList() {
          return Object(a.a)(this, void 0, void 0, function* () {
            let e = new m();
            if (0 !== this.m_unAccountID)
              try {
                if (this.m_Transport) {
                  let t = o.b.Init(y);
                  e = (yield v.GetFriendsList(this.m_Transport, t))
                    .Body()
                    .friendslist();
                } else {
                  let t = { sessionid: O.c.SESSIONID, origin: Object(O.d)() };
                  const r = yield n.a.get(
                    O.c.COMMUNITY_BASE_URL + "textfilter/ajaxgetfriendslist",
                    { params: t, withCredentials: !0 }
                  );
                  e = m.fromObject(r.data.friendslist);
                }
              } catch (e) {}
            this.SetFriendsList(e);
          });
        }
        SetFriendsList(e) {
          e.bincremental() || this.m_mapPlayerCache.clear();
          for (let t of e.friends()) {
            let e = new M.a(t.ulfriendid());
            if (e.BIsIndividualAccount()) {
              let r = t.efriendrelationship();
              this.m_mapPlayerCache.set(e.GetAccountID(), r);
            }
          }
        }
        BIsFriend(e) {
          return (
            !!this.m_mapPlayerCache.has(e) && 3 == this.m_mapPlayerCache.get(e)
          );
        }
        LoadLanguage(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            let t = `${
              O.c.COMMUNITY_CDN_URL
            }textfilter/gettextfilterdictionary?type=banned&language=${e}&v=1&origin=${Object(
              O.d
            )()}`;
            try {
              const e = yield n.a.get(t);
              this.m_strBannedWords += e.data;
            } catch (e) {
              console.error("Failed to load filter dictionary " + t, e);
            }
            t = `${
              O.c.COMMUNITY_CDN_URL
            }textfilter/gettextfilterdictionary?type=profanity&language=${e}&v=1&origin=${Object(
              O.d
            )()}`;
            try {
              const e = yield n.a.get(t);
              this.m_strProfanityWords += e.data;
            } catch (e) {
              console.error("Failed to load filter dictionary " + t, e);
            }
            t = `${
              O.c.COMMUNITY_CDN_URL
            }textfilter/gettextfilterdictionary?type=clean_public&language=${e}&v=1&origin=${Object(
              O.d
            )()}`;
            try {
              const e = yield n.a.get(t);
              this.m_strCleanWords += e.data;
            } catch (e) {
              console.error("Failed to load filter dictionary " + t, e);
            }
          });
        }
        AppendPattern(e, t) {
          return "" !== t && ("" !== e && (e += "|"), (e += t)), e;
        }
        CreatePattern(e) {
          let t = e.filter(function (e) {
            return "" !== e;
          });
          return t.length > 0 ? "\\b(" + t.join("|") + ")\\b" : "";
        }
        OnFilterDataChanged() {
          let e = new RegExp(/\s*[\r\n]+\s*/g),
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
            (r = this.m_strCleanWords.split(e)),
            (r = r.concat(
              this.m_TextFilterWords.text_filter_custom_clean_words()
            ));
          let a = this.CreatePattern(t),
            i = this.CreatePattern(r);
          "" != i && (i = "^(" + i + ")$"),
            this.BRebuildFilter(a, i) && this.SaveFilter();
        }
        BRebuildFilter(e, t) {
          if (e === this.m_strBannedPattern && t === this.m_strCleanPattern)
            return !1;
          if (((this.m_regexBannedWords = null), "" !== e))
            try {
              this.m_regexBannedWords = new RegExp(e, "ugi");
            } catch (e) {
              console.warn("Couldn't compile textfilter bannedwords regex"),
                Object(T.a)().ReportError(
                  new Error(
                    `Couldn't compile textfilter bannedwords regex: ${e}`
                  )
                );
            }
          if (((this.m_regexCleanWords = null), "" !== t))
            try {
              this.m_regexCleanWords = new RegExp(t, "ugi");
            } catch (e) {
              console.warn("Couldn't compile textfilter cleanwords regex"),
                Object(T.a)().ReportError(
                  new Error(
                    `Couldn't compile textfilter cleanwords regex: ${e}`
                  )
                );
            }
          return (
            (this.m_strBannedPattern = e), (this.m_strCleanPattern = t), !0
          );
        }
        CreateProfanityReplacement(e) {
          return "♥".repeat(e);
        }
        BHasFilter() {
          return null != this.m_regexBannedWords;
        }
        BShownFilterTip() {
          return this.m_bShownFilterTip;
        }
        SetFilterTipShown(e) {
          this.m_bShownFilterTip = e;
        }
        FilterText(e, t) {
          if (!this.m_regexBannedWords) return t;
          let r = 0;
          if ("string" == typeof e && "" !== e) {
            r = new M.a(e).GetAccountID();
          } else "number" == typeof e && (r = e);
          return !t ||
            r == this.m_unAccountID ||
            (this.m_TextFilterPreferences.bIgnoreFriends && this.BIsFriend(r))
            ? t
            : t.replace(this.m_regexBannedWords, (e) =>
                this.m_regexCleanWords && 0 == e.search(this.m_regexCleanWords)
                  ? e
                  : this.CreateProfanityReplacement(e.length)
              );
        }
      }
      Object(a.b)([i.C], j.prototype, "m_TextFilterPreferences", void 0),
        Object(a.b)([i.C], j.prototype, "m_mapPlayerCache", void 0),
        Object(a.b)([i.C], j.prototype, "m_regexBannedWords", void 0),
        Object(a.b)([i.C], j.prototype, "m_regexCleanWords", void 0),
        Object(a.b)([i.k], j.prototype, "UpdateCommunityPreferences", null),
        Object(a.b)([i.k], j.prototype, "SetFriendsList", null),
        Object(a.b)([i.k], j.prototype, "BRebuildFilter", null);
    },
    gfUn: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return Ce;
      });
      var a = r("mrSG"),
        i = r("vDqi"),
        s = r.n(i),
        n = r("2vnA"),
        o = r("A5MU"),
        l = (r("mgoM"), r("bxBv")),
        c = r("u2yL"),
        d = r("WBba"),
        m = r("kLLr"),
        u = r("kdZy"),
        h = r("hRO2"),
        b = r("OS8t");
      const _ = h.Message;
      class p extends _ {
        constructor(e = null) {
          super(),
            p.prototype.broadcast_channel_id || b.a(p.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: b.d.readFixed64String,
                    bw: b.h.writeFixed64String,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = b.e(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(p.M(), e, t);
        }
        static fromObject(e) {
          return b.c(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_CreateBroadcastChannel_Response";
        }
      }
      class g extends _ {
        constructor(e = null) {
          super(),
            g.prototype.broadcast_channel_id || b.a(g.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
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
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = b.e(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(g.M(), e, t);
        }
        static fromObject(e) {
          return b.c(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelID_Response";
        }
      }
      class B extends _ {
        constructor(e = null) {
          super(), _.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new B();
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SetBroadcastChannelProfile_Response";
        }
      }
      class S extends _ {
        constructor(e = null) {
          super(),
            S.prototype.unique_name || b.a(S.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
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
                  language: { n: 4, br: b.d.readString, bw: b.h.writeString },
                  headline: { n: 5, br: b.d.readString, bw: b.h.writeString },
                  summary: { n: 6, br: b.d.readString, bw: b.h.writeString },
                  schedule: { n: 7, br: b.d.readString, bw: b.h.writeString },
                  rules: { n: 8, br: b.d.readString, bw: b.h.writeString },
                  panels: { n: 9, br: b.d.readString, bw: b.h.writeString },
                  is_partnered: { n: 10, br: b.d.readBool, bw: b.h.writeBool },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = b.e(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(S.M(), e, t);
        }
        static fromObject(e) {
          return b.c(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelProfile_Response";
        }
      }
      class y extends _ {
        constructor(e = null) {
          super(),
            y.prototype.replace_image_hash || b.a(y.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  replace_image_hash: {
                    n: 1,
                    br: b.d.readString,
                    bw: b.h.writeString,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = b.e(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(y.M(), e, t);
        }
        static fromObject(e) {
          return b.c(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SetBroadcastChannelImage_Response";
        }
      }
      class f extends _ {
        constructor(e = null) {
          super(),
            f.prototype.images || b.a(f.M()),
            _.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: { images: { n: 1, c: v, r: !0, q: !0 } },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = b.e(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(f.M(), e, t);
        }
        static fromObject(e) {
          return b.c(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelImages_Response";
        }
      }
      class v extends _ {
        constructor(e = null) {
          super(),
            v.prototype.image_type || b.a(v.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  image_type: { n: 1, br: b.d.readEnum, bw: b.h.writeEnum },
                  image_path: { n: 2, br: b.d.readString, bw: b.h.writeString },
                  image_index: {
                    n: 3,
                    br: b.d.readUint32,
                    bw: b.h.writeUint32,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = b.e(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(v.M(), e, t);
        }
        static fromObject(e) {
          return b.c(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelImages_Response_Images";
        }
      }
      class C extends _ {
        constructor(e = null) {
          super(),
            C.prototype.links || b.a(C.M()),
            _.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: { links: { n: 1, c: w, r: !0, q: !0 } },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = b.e(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(C.M(), e, t);
        }
        static fromObject(e) {
          return b.c(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelLinks_Response";
        }
      }
      class w extends _ {
        constructor(e = null) {
          super(),
            w.prototype.link_index || b.a(w.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  link_index: { n: 1, br: b.d.readUint32, bw: b.h.writeUint32 },
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
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = b.e(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(w.M(), e, t);
        }
        static fromObject(e) {
          return b.c(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelLinks_Response_Links";
        }
      }
      class M extends _ {
        constructor(e = null) {
          super(), _.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new M();
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SetBroadcastChannelLinkRegions_Response";
        }
      }
      class O extends _ {
        constructor(e = null) {
          super(),
            O.prototype.is_live || b.a(O.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  is_live: { n: 1, br: b.d.readBool, bw: b.h.writeBool },
                  is_disabled: { n: 2, br: b.d.readBool, bw: b.h.writeBool },
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
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = b.e(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(O.M(), e, t);
        }
        static fromObject(e) {
          return b.c(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelStatus_Response";
        }
      }
      class R extends _ {
        constructor(e = null) {
          super(),
            R.prototype.broadcast_channel_id || b.a(R.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
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
                  headline: { n: 9, br: b.d.readString, bw: b.h.writeString },
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
                  is_featured: { n: 14, br: b.d.readBool, bw: b.h.writeBool },
                  is_disabled: { n: 15, br: b.d.readBool, bw: b.h.writeBool },
                  is_live: { n: 16, br: b.d.readBool, bw: b.h.writeBool },
                  language: { n: 17, br: b.d.readString, bw: b.h.writeString },
                  reports: { n: 18, br: b.d.readUint32, bw: b.h.writeUint32 },
                  is_partnered: { n: 19, br: b.d.readBool, bw: b.h.writeBool },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = b.e(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(R.M(), e, t);
        }
        static fromObject(e) {
          return b.c(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "GetBroadcastChannelEntry";
        }
      }
      class T extends _ {
        constructor(e = null) {
          super(),
            T.prototype.results || b.a(T.M()),
            _.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: { results: { n: 1, c: R, r: !0, q: !0 } },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = b.e(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(T.M(), e, t);
        }
        static fromObject(e) {
          return b.c(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetFollowedChannels_Response";
        }
      }
      class j extends _ {
        constructor(e = null) {
          super(),
            j.prototype.results || b.a(j.M()),
            _.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: { results: { n: 1, c: R, r: !0, q: !0 } },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = b.e(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(j.M(), e, t);
        }
        static fromObject(e) {
          return b.c(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetSubscribedChannels_Response";
        }
      }
      class z extends _ {
        constructor(e = null) {
          super(),
            z.prototype.is_followed || b.a(z.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  is_followed: { n: 1, br: b.d.readBool, bw: b.h.writeBool },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = b.e(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(z.M(), e, t);
        }
        static fromObject(e) {
          return b.c(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_FollowBroadcastChannel_Response";
        }
      }
      class F extends _ {
        constructor(e = null) {
          super(),
            F.prototype.is_subscribed || b.a(F.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  is_subscribed: { n: 1, br: b.d.readBool, bw: b.h.writeBool },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = b.e(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(F.M(), e, t);
        }
        static fromObject(e) {
          return b.c(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SubscribeBroadcastChannel_Response";
        }
      }
      class E extends _ {
        constructor(e = null) {
          super(), _.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new E();
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_ReportBroadcastChannel_Response";
        }
      }
      class I extends _ {
        constructor(e = null) {
          super(),
            I.prototype.is_followed || b.a(I.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  is_followed: { n: 1, br: b.d.readBool, bw: b.h.writeBool },
                  is_subscribed: { n: 2, br: b.d.readBool, bw: b.h.writeBool },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = b.e(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(I.M(), e, t);
        }
        static fromObject(e) {
          return b.c(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelInteraction_Response";
        }
      }
      class W extends _ {
        constructor(e = null) {
          super(),
            W.prototype.appid || b.a(W.M()),
            _.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  appid: { n: 1, br: b.d.readUint32, bw: b.h.writeUint32 },
                  name: { n: 2, br: b.d.readString, bw: b.h.writeString },
                  image: { n: 3, br: b.d.readString, bw: b.h.writeString },
                  viewers: {
                    n: 4,
                    br: b.d.readUint64String,
                    bw: b.h.writeUint64String,
                  },
                  channels: { n: 5, c: R, r: !0, q: !0 },
                  release_date: {
                    n: 6,
                    br: b.d.readString,
                    bw: b.h.writeString,
                  },
                  developer: { n: 7, br: b.d.readString, bw: b.h.writeString },
                  publisher: { n: 8, br: b.d.readString, bw: b.h.writeString },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = b.e(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(W.M(), e, t);
        }
        static fromObject(e) {
          return b.c(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_Game";
        }
      }
      class P extends _ {
        constructor(e = null) {
          super(),
            P.prototype.results || b.a(P.M()),
            _.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: { results: { n: 1, c: W, r: !0, q: !0 } },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = b.e(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(P.M(), e, t);
        }
        static fromObject(e) {
          return b.c(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetGames_Response";
        }
      }
      class N extends _ {
        constructor(e = null) {
          super(),
            N.prototype.results || b.a(N.M()),
            _.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: { results: { n: 1, c: R, r: !0, q: !0 } },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = b.e(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(N.M(), e, t);
        }
        static fromObject(e) {
          return b.c(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetChannels_Response";
        }
      }
      class D extends _ {
        constructor(e = null) {
          super(),
            D.prototype.broadcasters || b.a(D.M()),
            _.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: { broadcasters: { n: 1, c: x, r: !0, q: !0 } },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = b.e(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(D.M(), e, t);
        }
        static fromObject(e) {
          return b.c(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelBroadcasters_Response";
        }
      }
      class x extends _ {
        constructor(e = null) {
          super(),
            x.prototype.steamid || b.a(x.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  steamid: {
                    n: 1,
                    br: b.d.readFixed64String,
                    bw: b.h.writeFixed64String,
                  },
                  name: { n: 2, br: b.d.readString, bw: b.h.writeString },
                  rtmp_token: { n: 3, br: b.d.readString, bw: b.h.writeString },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = b.e(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(x.M(), e, t);
        }
        static fromObject(e) {
          return b.c(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster";
        }
      }
      class k extends _ {
        constructor(e = null) {
          super(),
            k.prototype.issuer_steamid || b.a(k.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
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
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = b.e(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(k.M(), e, t);
        }
        static fromObject(e) {
          return b.c(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_ChatBan";
        }
      }
      class U extends _ {
        constructor(e = null) {
          super(),
            U.prototype.broadcast_channel_id || b.a(U.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
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
                  duration: { n: 3, br: b.d.readUint32, bw: b.h.writeUint32 },
                  permanent: { n: 4, br: b.d.readBool, bw: b.h.writeBool },
                  undo: { n: 5, br: b.d.readBool, bw: b.h.writeBool },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = b.e(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(U.M(), e, t);
        }
        static fromObject(e) {
          return b.c(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AddChatBan_Request";
        }
      }
      class L extends _ {
        constructor(e = null) {
          super(), _.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new L();
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AddChatBan_Response";
        }
      }
      class V extends _ {
        constructor(e = null) {
          super(),
            V.prototype.results || b.a(V.M()),
            _.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: { results: { n: 1, c: k, r: !0, q: !0 } },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = b.e(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(V.M(), e, t);
        }
        static fromObject(e) {
          return b.c(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetChatBans_Response";
        }
      }
      class A extends _ {
        constructor(e = null) {
          super(), _.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new A();
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AddChatModerator_Response";
        }
      }
      class G extends _ {
        constructor(e = null) {
          super(),
            G.prototype.broadcast_channel_id || b.a(G.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: b.d.readFixed64String,
                    bw: b.h.writeFixed64String,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = b.e(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(G.M(), e, t);
        }
        static fromObject(e) {
          return b.c(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetChatModerators_Request";
        }
      }
      class H extends _ {
        constructor(e = null) {
          super(),
            H.prototype.steamid || b.a(H.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  steamid: {
                    n: 1,
                    br: b.d.readFixed64String,
                    bw: b.h.writeFixed64String,
                  },
                  name: { n: 2, br: b.d.readString, bw: b.h.writeString },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = b.e(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(H.M(), e, t);
        }
        static fromObject(e) {
          return b.c(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_ChatModerator";
        }
      }
      class q extends _ {
        constructor(e = null) {
          super(),
            q.prototype.results || b.a(q.M()),
            _.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: { results: { n: 1, c: H, r: !0, q: !0 } },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = b.e(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(q.M(), e, t);
        }
        static fromObject(e) {
          return b.c(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetChatModerators_Response";
        }
      }
      class $ extends _ {
        constructor(e = null) {
          super(), _.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new $();
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AddWordBan_Response";
        }
      }
      class K extends _ {
        constructor(e = null) {
          super(),
            K.prototype.results || b.a(K.M()),
            _.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
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
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = b.e(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(K.M(), e, t);
        }
        static fromObject(e) {
          return b.c(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetWordBans_Response";
        }
      }
      class J extends _ {
        constructor(e = null) {
          super(),
            J.prototype.broadcast_channel_id || b.a(J.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: b.d.readFixed64String,
                    bw: b.h.writeFixed64String,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = b.e(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(J.M(), e, t);
        }
        static fromObject(e) {
          return b.c(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_JoinChat_Request";
        }
      }
      class X extends _ {
        constructor(e = null) {
          super(),
            X.prototype.chat_id || b.a(X.M()),
            _.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
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
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = b.e(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(X.M(), e, t);
        }
        static fromObject(e) {
          return b.c(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_JoinChat_Response";
        }
      }
      class Y extends _ {
        constructor(e = null) {
          super(),
            Y.prototype.results || b.a(Y.M()),
            _.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: { results: { n: 1, c: R, r: !0, q: !0 } },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = b.e(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(Y.M(), e, t);
        }
        static fromObject(e) {
          return b.c(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_Search_Response";
        }
      }
      class Q extends _ {
        constructor(e = null) {
          super(),
            Q.prototype.stream_live_email || b.a(Q.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
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
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = b.e(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(Q.M(), e, t);
        }
        static fromObject(e) {
          return b.c(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetSteamTVUserSettings_Response";
        }
      }
      class Z extends _ {
        constructor(e = null) {
          super(), _.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Z();
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SetSteamTVUserSettings_Response";
        }
      }
      class ee extends _ {
        constructor(e = null) {
          super(),
            ee.prototype.results || b.a(ee.M()),
            _.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: { results: { n: 1, c: R, r: !0, q: !0 } },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = b.e(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(ee.M(), e, t);
        }
        static fromObject(e) {
          return b.c(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetMyBroadcastChannels_Response";
        }
      }
      class te extends _ {
        constructor(e = null) {
          super(),
            te.prototype.broadcasts || b.a(te.M()),
            _.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: { broadcasts: { n: 1, c: R, r: !0, q: !0 } },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = b.e(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(te.M(), e, t);
        }
        static fromObject(e) {
          return b.c(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_Takeover";
        }
      }
      class re extends _ {
        constructor(e = null) {
          super(),
            re.prototype.broadcasts || b.a(re.M()),
            _.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  broadcasts: { n: 1, c: R, r: !0, q: !0 },
                  appid: { n: 2, br: b.d.readUint32, bw: b.h.writeUint32 },
                  title: { n: 3, br: b.d.readString, bw: b.h.writeString },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = b.e(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(re.M(), e, t);
        }
        static fromObject(e) {
          return b.c(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_SingleGame";
        }
      }
      class ae extends _ {
        constructor(e = null) {
          super(),
            ae.prototype.appid || b.a(ae.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  appid: { n: 1, br: b.d.readUint32, bw: b.h.writeUint32 },
                  game_name: { n: 2, br: b.d.readString, bw: b.h.writeString },
                  broadcast: { n: 3, c: R },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = b.e(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(ae.M(), e, t);
        }
        static fromObject(e) {
          return b.c(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "GameListEntry";
        }
      }
      class ie extends _ {
        constructor(e = null) {
          super(),
            ie.prototype.entries || b.a(ie.M()),
            _.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  entries: { n: 1, c: ae, r: !0, q: !0 },
                  title: { n: 2, br: b.d.readString, bw: b.h.writeString },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = b.e(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(ie.M(), e, t);
        }
        static fromObject(e) {
          return b.c(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_GameList";
        }
      }
      class se extends _ {
        constructor(e = null) {
          super(),
            se.prototype.broadcasts || b.a(se.M()),
            _.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  broadcasts: { n: 1, c: R, r: !0, q: !0 },
                  title: { n: 2, br: b.d.readString, bw: b.h.writeString },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = b.e(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(se.M(), e, t);
        }
        static fromObject(e) {
          return b.c(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_QuickExplore";
        }
      }
      class ne extends _ {
        constructor(e = null) {
          super(),
            ne.prototype.broadcasts || b.a(ne.M()),
            _.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  broadcasts: { n: 1, c: R, r: !0, q: !0 },
                  title: { n: 2, br: b.d.readString, bw: b.h.writeString },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = b.e(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(ne.M(), e, t);
        }
        static fromObject(e) {
          return b.c(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_ConveyorBelt";
        }
      }
      class oe extends _ {
        constructor(e = null) {
          super(),
            oe.prototype.broadcast || b.a(oe.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  broadcast: { n: 1, c: R },
                  title: { n: 2, br: b.d.readString, bw: b.h.writeString },
                  chat_group_id: {
                    n: 3,
                    br: b.d.readUint64String,
                    bw: b.h.writeUint64String,
                  },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = b.e(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(oe.M(), e, t);
        }
        static fromObject(e) {
          return b.c(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_WatchParty";
        }
      }
      class le extends _ {
        constructor(e = null) {
          super(),
            le.prototype.broadcast || b.a(le.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  broadcast: { n: 1, c: R },
                  title: { n: 2, br: b.d.readString, bw: b.h.writeString },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = b.e(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(le.M(), e, t);
        }
        static fromObject(e) {
          return b.c(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_Developer";
        }
      }
      class ce extends _ {
        constructor(e = null) {
          super(),
            ce.prototype.title || b.a(ce.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  title: { n: 1, br: b.d.readString, bw: b.h.writeString },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = b.e(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(ce.M(), e, t);
        }
        static fromObject(e) {
          return b.c(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_Event";
        }
      }
      class de extends _ {
        constructor(e = null) {
          super(),
            de.prototype.template_type || b.a(de.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  template_type: { n: 1, br: b.d.readEnum, bw: b.h.writeEnum },
                  takeover: { n: 2, c: te },
                  single_game: { n: 3, c: re },
                  game_list: { n: 4, c: ie },
                  quick_explore: { n: 5, c: se },
                  conveyor_belt: { n: 6, c: ne },
                  watch_party: { n: 7, c: oe },
                  developer: { n: 8, c: le },
                  event: { n: 9, c: ce },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = b.e(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(de.M(), e, t);
        }
        static fromObject(e) {
          return b.c(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageContentRow";
        }
      }
      class me extends _ {
        constructor(e = null) {
          super(),
            me.prototype.rows || b.a(me.M()),
            _.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: { rows: { n: 1, c: de, r: !0, q: !0 } },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = b.e(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(me.M(), e, t);
        }
        static fromObject(e) {
          return b.c(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetHomePageContents_Response";
        }
      }
      class ue extends _ {
        constructor(e = null) {
          super(),
            ue.prototype.broadcast_clip_id || b.a(ue.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
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
                  live_time: { n: 7, br: b.d.readUint32, bw: b.h.writeUint32 },
                  length_ms: { n: 8, br: b.d.readUint32, bw: b.h.writeUint32 },
                  thumbnail_path: {
                    n: 9,
                    br: b.d.readString,
                    bw: b.h.writeString,
                  },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = b.e(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(ue.M(), e, t);
        }
        static fromObject(e) {
          return b.c(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_BroadcastClipInfo";
        }
      }
      class he extends _ {
        constructor(e = null) {
          super(),
            he.prototype.clips || b.a(he.M()),
            _.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  clips: { n: 1, c: ue, r: !0, q: !0 },
                  thumbnail_host: {
                    n: 2,
                    br: b.d.readString,
                    bw: b.h.writeString,
                  },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = b.e(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(he.M(), e, t);
        }
        static fromObject(e) {
          return b.c(he.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new he();
          return he.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(he.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(he.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelClips_Response";
        }
      }
      class be extends _ {
        constructor(e = null) {
          super(),
            be.prototype.aggregation_delay_ms || b.a(be.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  aggregation_delay_ms: {
                    n: 1,
                    br: b.d.readUint32,
                    bw: b.h.writeUint32,
                  },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = b.e(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(be.M(), e, t);
        }
        static fromObject(e) {
          return b.c(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new h.BinaryReader(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new h.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new h.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AppCheer_Response";
        }
      }
      var _e;
      !(function (e) {
        (e.CreateBroadcastChannel = function (e, t) {
          return e.SendMsg("SteamTV.CreateBroadcastChannel#1", t, p, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
          (e.GetBroadcastChannelID = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelID#1", t, g, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.SetBroadcastChannelProfile = function (e, t) {
            return e.SendMsg("SteamTV.SetBroadcastChannelProfile#1", t, B, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelProfile = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelProfile#1", t, S, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.SetBroadcastChannelImage = function (e, t) {
            return e.SendMsg("SteamTV.SetBroadcastChannelImage#1", t, y, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelImages = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelImages#1", t, f, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.SetBroadcastChannelLinkRegions = function (e, t) {
            return e.SendMsg("SteamTV.SetBroadcastChannelLinkRegions#1", t, M, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelLinks = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelLinks#1", t, C, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.GetBroadcastChannelBroadcasters = function (e, t) {
            return e.SendMsg(
              "SteamTV.GetBroadcastChannelBroadcasters#1",
              t,
              D,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 }
            );
          }),
          (e.GetFollowedChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetFollowedChannels#1", t, T, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetSubscribedChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetSubscribedChannels#1", t, j, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelStatus = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelStatus#1", t, O, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.FollowBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.FollowBroadcastChannel#1", t, z, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SubscribeBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.SubscribeBroadcastChannel#1", t, F, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelClips = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelClips#1", t, he, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.ReportBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.ReportBroadcastChannel#1", t, E, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelInteraction = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelInteraction#1", t, I, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetGames = function (e, t) {
            return e.SendMsg("SteamTV.GetGames#1", t, P, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetChannels#1", t, N, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.AddChatBan = function (e, t) {
            return e.SendMsg("SteamTV.AddChatBan#1", t, L, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetChatBans = function (e, t) {
            return e.SendMsg("SteamTV.GetChatBans#1", t, V, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.AddChatModerator = function (e, t) {
            return e.SendMsg("SteamTV.AddChatModerator#1", t, A, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetChatModerators = function (e, t) {
            return e.SendMsg("SteamTV.GetChatModerators#1", t, q, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.AddWordBan = function (e, t) {
            return e.SendMsg("SteamTV.AddWordBan#1", t, $, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetWordBans = function (e, t) {
            return e.SendMsg("SteamTV.GetWordBans#1", t, K, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.JoinChat = function (e, t) {
            return e.SendMsg("SteamTV.JoinChat#1", t, X, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.Search = function (e, t) {
            return e.SendMsg("SteamTV.Search#1", t, Y, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.GetSteamTVUserSettings = function (e, t) {
            return e.SendMsg("SteamTV.GetSteamTVUserSettings#1", t, Q, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SetSteamTVUserSettings = function (e, t) {
            return e.SendMsg("SteamTV.SetSteamTVUserSettings#1", t, Z, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetMyBroadcastChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetMyBroadcastChannels#1", t, ee, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetHomePageContents = function (e, t) {
            return e.SendMsg("SteamTV.GetHomePageContents#1", t, me, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.AppCheer = function (e, t) {
            return e.SendMsg("SteamTV.AppCheer#1", t, be, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(_e || (_e = {}));
      r("AiWL");
      var pe = r("qiKp"),
        ge = r("TLQK"),
        Be = r("XxJJ"),
        Se = r("lkRc"),
        ye = r("gJzY");
      class fe {
        constructor() {
          this.m_mapChats = new Map();
        }
        GetChat(e, t) {
          return this.m_mapChats.get(e) || this.m_mapChats.get(t);
        }
        GetOrCreateChat(e, t) {
          let r = this.GetChat(e, t);
          return r || ((r = new ve()), this.m_mapChats.set(e || t, r)), r;
        }
      }
      Object(a.b)([n.C], fe.prototype, "m_mapChats", void 0);
      class ve {
        constructor() {
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
              Se.c.WEBAPI_BASE_URL,
              Se.h.webapi_token
            ));
        }
        InitTextFilter() {
          this.m_textFilterStore = new ye.a();
          let e = 0;
          if ("" !== Se.h.steamid) {
            e = new m.a(Se.h.steamid).GetAccountID();
          }
          this.m_textFilterStore.Init(e, null, new c.a());
        }
        get TextFilterStore() {
          return this.m_textFilterStore;
        }
        GetBroadcastSteamID() {
          return this.m_ulBroadcastSteamID;
        }
        GetUserSteamID() {
          return this.m_strUserSteamID;
        }
        StartForSteamID(e, t) {
          (this.m_webAPIInterface = new d.a(
            Se.c.WEBAPI_BASE_URL,
            Se.h.webapi_token
          )),
            (this.m_ulBroadcastSteamID = e),
            (this.m_ulBroadcastID = t),
            this.InitTextFilter(),
            this.RequestChatInfo();
        }
        StartForChannel(e) {
          (this.m_webAPIInterface = new d.a(
            Se.c.WEBAPI_BASE_URL,
            Se.h.webapi_token
          )),
            (this.m_ulBroadcastChannelID = e),
            (this.m_strUserSteamID = Se.h.steamid),
            this.InitTextFilter(),
            this.JoinChannelChat();
        }
        Stop() {
          this.m_chatScheduledFunc && this.m_chatScheduledFunc.Cancel();
        }
        SendMessage(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            const t = e.trim();
            if (0 != t.length)
              try {
                let e, r, a;
                if (this.m_webApiToken) {
                  const e = new FormData();
                  e.append("chat_id", this.m_ulChatID),
                    e.append("message", t),
                    e.append("instance_id", this.m_unInstanceID.toString()),
                    (r = yield s.a.post(
                      `${Se.c.WEBAPI_BASE_URL}IBroadcastService/PostChatMessage/v0001?access_token=${this.m_webApiToken}`,
                      e
                    )),
                    (a = r.data && r.data.response);
                } else {
                  const r = l.b.Init(u.c);
                  r.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    message: t,
                    instance_id: this.m_unInstanceID.toString(),
                  }),
                    (e = yield u.a.PostChatMessage(
                      this.m_webAPIInterface.GetServiceTransport(),
                      r
                    )),
                    (a = {
                      result: e.GetEResult(),
                      cooldown_time_seconds: e.Body().cooldown_time_seconds(),
                      in_game: e.Body().in_game(),
                      persona_name: e.Body().persona_name(),
                    });
                }
                if (a && a.result && 1 != a.result) {
                  let e = "";
                  return (
                    (e =
                      17 == a.result
                        ? Object(ge.f)("#BroadcastChat_YouMuted")
                        : 84 == a.result
                        ? Object(ge.f)(
                            "#BroadcastChat_Cooldown",
                            a.cooldown_time_seconds
                          )
                        : Object(ge.f)("#BroadcastChat_FailedToSendMsg", t)),
                    void this.m_rgChatMessages.push({
                      type: o.a.Error,
                      msg: e,
                      client_ts: Number(new Date()),
                      instance_id: this.m_unInstanceID,
                      in_game: a.in_game,
                      persona_name: a.persona_name,
                      steamid: "",
                    })
                  );
                }
                this.m_nRateLimitSeconds ||
                  (this.m_nRateLimitSeconds = a.cooldown_time_seconds),
                  this.m_nRateLimitSeconds &&
                    ((this.m_bRateLimited = !0),
                    setTimeout(
                      () => (this.m_bRateLimited = !1),
                      1e3 * this.m_nRateLimitSeconds
                    ));
              } catch (e) {
                this.m_rgChatMessages.push({
                  type: o.a.Error,
                  msg: Object(ge.f)("#BroadcastChat_FailedToSendMsg", t),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
          });
        }
        RequestChatInfo(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            (this.m_cConsecutiveErrors = 0), (this.m_bReconnecting = !1);
            try {
              const t = {
                  steamid: this.m_ulBroadcastSteamID,
                  broadcastid: this.m_ulBroadcastID,
                  sessionid: Se.c.SESSIONID,
                },
                r = yield s.a.get(
                  `${Se.c.CHAT_BASE_URL}broadcast/getchatinfo`,
                  {
                    params: t,
                    withCredentials: !0,
                    cancelToken: null == e ? void 0 : e.token,
                  }
                );
              (e && e.token.reason) ||
                Object(n.G)(() => {
                  const e = r.data;
                  (this.m_strChatURL = e.view_url_template),
                    (this.m_ulChatID = e.chat_id),
                    (this.m_strFlairGroupID =
                      e.flair_group_ids && e.flair_group_ids[0]),
                    e.blocked && console.log("User is blocked from chat"),
                    e.steamid && (this.m_strUserSteamID = e.steamid),
                    e.token && (this.m_webApiToken = e.token),
                    e.emoticons && this.SetOwnedEmoticons(e.emoticons),
                    this.m_bHasAddedWelcomeChat ||
                      (this.m_rgChatMessages.push({
                        type: o.a.Notification,
                        msg: Object(ge.f)("#BroadcastChat_DefaultMessage"),
                        client_ts: Number(new Date()),
                        instance_id: this.m_unInstanceID,
                        in_game: !1,
                        persona_name: "",
                        steamid: "",
                      }),
                      (this.m_bHasAddedWelcomeChat = !0)),
                    this.m_mapBroadcastModeratorUsers.clear(),
                    e.moderators_steamid &&
                      e.moderators_steamid.forEach((e) =>
                        this.m_mapBroadcastModeratorUsers.set(e, !0)
                      ),
                    (this.m_chatScheduledFunc = new pe.b()),
                    this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
                });
            } catch (e) {
              console.error(e), console.log("Failed to get chat info!");
            }
          });
        }
        JoinChannelChat() {
          return Object(a.a)(this, void 0, void 0, function* () {
            try {
              const e = l.b.Init(J);
              e.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
              });
              let t = yield _e.JoinChat(
                this.m_webAPIInterface.GetServiceTransport(),
                e
              );
              if (!t.Body().chat_id || !t.Body().view_url_template)
                return void console.log("Failed to join channel chat");
              (this.m_strChatURL = t.Body().view_url_template()),
                (this.m_ulChatID = t.Body().chat_id()),
                (this.m_strFlairGroupID =
                  t.Body().flair_group_ids() && t.Body().flair_group_ids()[0]),
                this.FetchChatModerators(),
                (this.m_rgChatMessages = []),
                this.m_rgChatMessages.push({
                  type: o.a.Notification,
                  msg: Object(ge.f)("#BroadcastChat_DefaultMessage"),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                }),
                (this.m_bHasAddedWelcomeChat = !0),
                (this.m_chatScheduledFunc = new pe.b()),
                this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
            } catch (e) {
              console.error(e), console.log("Failed to join chat!");
            }
          });
        }
        FetchChatModerators() {
          return Object(a.a)(this, void 0, void 0, function* () {
            const e = l.b.Init(G);
            e.SetBodyFields({
              broadcast_channel_id: this.m_ulBroadcastChannelID,
            });
            const t = (yield _e.GetChatModerators(
                this.m_webAPIInterface.GetServiceTransport(),
                e
              ))
                .Body()
                .results(),
              r = new Map();
            t.forEach((e) => {
              r.set(e.steamid(), !0);
            }),
              (this.m_mapChannelModeratorUsers = r);
          });
        }
        RequestLoop() {
          return Object(a.a)(this, void 0, void 0, function* () {
            const e = {},
              t = this.m_strChatURL.replace(
                "{0}",
                this.m_nNextChatTS.toString()
              );
            t == this.m_strChatURL &&
              this.m_nNextChatTS > 0 &&
              (e.t = this.m_nNextChatTS);
            try {
              const r = (yield s.a.get(t, { params: e })).data;
              this.m_cConsecutiveErrors = 0;
              const a = r.messages
                .map((e) =>
                  Object.assign(Object.assign({}, e), {
                    type: o.a.Chat,
                    client_ts: Number(new Date()),
                  })
                )
                .filter((e) => !this.IsUserMutedLocally(e.steamid));
              this.m_rgChatMessages.push(...a);
              const i = this.m_bAutoScroll ? 150 : 300;
              if (
                (this.m_rgChatMessages.length > i &&
                  this.m_rgChatMessages.splice(
                    0,
                    this.m_rgChatMessages.length - i
                  ),
                r.muted)
              )
                for (const e of r.muted) {
                  const t =
                    e.muted == this.m_strUserSteamID
                      ? Object(ge.f)("#BroadcastChat_YouMuted", e.persona_name)
                      : Object(ge.f)(
                          "#BroadcastChat_UserMuted",
                          e.persona_name
                        );
                  this.m_rgChatMessages.push({
                    type: o.a.Notification,
                    msg: t,
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
                }
              if (r.remove_msgs)
                for (const e of r.remove_msgs)
                  this.RemoveUserMessagesLocal(e.steamid);
              let n = 0;
              if (
                null == this.m_tsFirstRequest ||
                0 == this.m_nNextChatTS ||
                r.initial_delay
              ) {
                if ("undefined" === r.initial_delay)
                  return void console.log(
                    "Need initial_delay to know when to request first chat message"
                  );
                (this.m_tsFirstRequest = performance.now() + r.initial_delay),
                  (this.m_nFromFirstRequestMS = 0),
                  (this.m_nNextChatTS = r.next_request),
                  (n = r.initial_delay);
              } else {
                if (r.next_request < this.m_nNextChatTS)
                  return void console.log("Next request in past");
                (this.m_nFromFirstRequestMS +=
                  r.next_request - this.m_nNextChatTS),
                  (this.m_nNextChatTS = r.next_request),
                  (n =
                    this.m_tsFirstRequest +
                    this.m_nFromFirstRequestMS -
                    performance.now() +
                    this.m_nNudgeFactorMS);
              }
              this.m_bReconnecting && (this.m_bReconnecting = !1),
                (this.m_nLastSleepMS = n),
                n < 0 && (n = 0),
                this.m_chatScheduledFunc.Schedule(n, this.RequestLoop);
            } catch (e) {
              if (
                (console.log(
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
                  return void this.m_rgChatMessages.push({
                    type: o.a.Error,
                    msg: Object(ge.f)("#BroadcastChat_UnableToJoinChat"),
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
                (this.m_cConsecutiveErrors = 0),
                  (this.m_bReconnecting = !0),
                  this.SyncChat();
              }
              this.m_chatScheduledFunc.Schedule(500, this.RequestLoop);
            }
          });
        }
        GetUserEmoticons() {
          return this.m_regexUserEmoticons;
        }
        SetOwnedEmoticons(e) {
          let t = [];
          for (let r = 0; r < e.length; r++) {
            let a = e[r];
            a.length >= 2 && ":" == a[0]
              ? t.push(a.substr(1, a.length - 2))
              : t.push(a);
          }
          let r = ":(" + t.join("|") + "):";
          this.m_regexUserEmoticons = new RegExp(r, "g");
        }
        UpdateBroadcastChatModerator(e, t, r) {
          return Object(a.a)(this, void 0, void 0, function* () {
            {
              const a = new FormData();
              a.append("broadcaststeamid", this.m_ulBroadcastSteamID),
                a.append("moderatorsteamid", e),
                a.append("bAdd", t ? "1" : "0"),
                a.append("sessionid", Se.c.SESSIONID);
              try {
                yield s.a.post(
                  `${Se.c.CHAT_BASE_URL}broadcast/ajaxupdatechannelmod`,
                  a
                ),
                  this.m_mapBroadcastModeratorUsers.set(e, t);
                const i = Object(ge.f)(
                  t
                    ? "#BroadcastChat_AddedModerator"
                    : "#BroadcastChat_RemovedModerator",
                  r
                );
                this.m_rgChatMessages.push({ type: o.a.Notification, msg: i });
              } catch (e) {
                const a = Object(ge.f)(
                  t
                    ? "#BroadcastChat_AddModeratorFailed"
                    : "#BroadcastChat_RemoveModeratorFailed",
                  r
                );
                this.m_rgChatMessages.push({ type: o.a.Error, msg: a });
              }
            }
          });
        }
        UpdateUserChatBan(e, t, r, i, n, o) {
          return Object(a.a)(this, void 0, void 0, function* () {
            const a = this.m_ulBroadcastSteamID,
              c = this.m_strUserSteamID;
            if (this.m_ulBroadcastChannelID) {
              const t = l.b.Init(U);
              t.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
                chatter_steamid: e,
                duration: 3600 * r,
                permanent: i,
                undo: o,
              }),
                yield _e.AddChatBan(
                  this.m_webAPIInterface.GetServiceTransport(),
                  t
                );
            } else {
              const o = new FormData();
              o.append("broadcaststeamid", a),
                o.append("issuersteamid", c),
                o.append("chattersteamid", e),
                o.append("bantype", t),
                o.append("duration", r.toString()),
                o.append("perm", i ? "1" : "0"),
                o.append("sessionid", Se.c.SESSIONID);
              try {
                yield s.a.post(
                  `${Se.c.CHAT_BASE_URL}broadcast/ajaxupdateusermute`,
                  o
                ),
                  0 == t
                    ? delete this.m_mapMutedUsers[e]
                    : (this.m_mapMutedUsers[e] = n);
              } catch (e) {
                console.log("Failed to update mute for " + n);
              }
            }
          });
        }
        MuteUserForSession(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (e == this.m_strUserSteamID) return;
            if (this.m_ulBroadcastSteamID == e) return;
            let r = this.m_ulBroadcastSteamID == this.m_strUserSteamID;
            if (!this.m_mapMutedUsers[e]) {
              this.m_mapMutedUsers[e] = t;
              try {
                if (this.m_webApiToken) {
                  const t = new FormData();
                  t.append("chat_id", this.m_ulChatID),
                    t.append("user_steamid", e),
                    t.append("muted", "1"),
                    yield s.a.post(
                      `${Se.c.WEBAPI_BASE_URL}IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=${this.m_webApiToken}`,
                      t
                    );
                } else {
                  const t = l.b.Init(u.b);
                  t.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    user_steamid: e,
                    muted: !0,
                  }),
                    yield u.a.MuteBroadcastChatUser(
                      this.m_webAPIInterface.GetServiceTransport(),
                      t
                    );
                }
              } catch (a) {
                r &&
                  (this.m_rgChatMessages.push({
                    type: o.a.Error,
                    msg: Object(ge.f)("#BroadcastChat_UserMuteFailed", t),
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  }),
                  delete this.m_mapMutedUsers[e]);
              }
            }
            r ||
              this.m_rgChatMessages.push({
                type: o.a.Notification,
                msg: Object(ge.f)("#BroadcastChat_UserMutedLocal", t),
                client_ts: Number(new Date()),
                instance_id: this.m_unInstanceID,
                in_game: !1,
                persona_name: "",
                steamid: "",
              });
          });
        }
        UnmuteUserForSession(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (e == this.m_strUserSteamID) return;
            if (
              (this.m_mapMutedUsers[e] && delete this.m_mapMutedUsers[e],
              this.m_ulBroadcastSteamID == this.m_strUserSteamID)
            )
              try {
                if (this.m_webApiToken) {
                  const t = new FormData();
                  t.append("chat_id", this.m_ulChatID),
                    t.append("user_steamid", e),
                    t.append("muted", "0"),
                    yield s.a.post(
                      `${Se.c.WEBAPI_BASE_URL}IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=${this.m_webApiToken}`,
                      t
                    );
                } else {
                  const t = l.b.Init(u.b);
                  t.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    user_steamid: e,
                    muted: !1,
                  }),
                    yield u.a.MuteBroadcastChatUser(
                      this.m_webAPIInterface.GetServiceTransport(),
                      t
                    );
                }
                this.m_rgChatMessages.push({
                  type: o.a.Notification,
                  msg: Object(ge.f)("#BroadcastChat_UserUnmutedLocal", t),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              } catch (e) {
                this.m_rgChatMessages.push({
                  type: o.a.Error,
                  msg: Object(ge.f)("#BroadcastChat_UserUnmuteFailed", t),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
            else
              this.m_rgChatMessages.push({
                type: o.a.Notification,
                msg: Object(ge.f)("#BroadcastChat_UserUnmutedLocal", t),
                client_ts: Number(new Date()),
                instance_id: this.m_unInstanceID,
                in_game: !1,
                persona_name: "",
                steamid: "",
              });
          });
        }
        RemoveUserMessagesLocal(e) {
          this.m_rgChatMessages = this.m_rgChatMessages.filter(
            (t) => t.steamid !== e
          );
        }
        RemoveUserMessagesServer(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (e != this.m_strUserSteamID)
              try {
                if (this.m_webApiToken) {
                  const t = new FormData();
                  t.append("chat_id", this.m_ulChatID),
                    t.append("user_steamid", e),
                    yield s.a.post(
                      `${Se.c.WEBAPI_BASE_URL}IBroadcastService/RemoveUserChatText/v0001/?access_token=${this.m_webApiToken}`,
                      t
                    );
                } else {
                  const t = l.b.Init(u.d);
                  t.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    user_steamid: e,
                  }),
                    yield u.a.RemoveUserChatText(
                      this.m_webAPIInterface.GetServiceTransport(),
                      t
                    );
                }
              } catch (e) {
                this.m_rgChatMessages.push({
                  type: o.a.Error,
                  msg: Object(ge.f)("#BroadcastChat_RemoveMessagesFailed", t),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
          });
        }
        UpdateChatMessageFlair(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (this.m_webApiToken) {
              const t = new FormData();
              t.append("chat_id", this.m_ulChatID),
                t.append("flair", `^${this.m_strFlairGroupID}^:${e}:`),
                yield s.a.post(
                  `${Se.c.WEBAPI_BASE_URL}IBroadcastService/UpdateChatMessageFlair/v0001/?access_token=${this.m_webApiToken}`,
                  t
                );
            } else {
              const t = l.b.Init(u.e);
              t.SetBodyFields({
                chat_id: this.m_ulChatID,
                flair: `^${this.m_strFlairGroupID}^:${e}:`,
              }),
                yield u.a.UpdateChatMessageFlair(
                  this.m_webAPIInterface.GetServiceTransport(),
                  t
                );
            }
          });
        }
        IsUserMutedLocally(e) {
          return Boolean(this.m_mapMutedUsers[e]);
        }
        BIsUserBroadcastModerator(e) {
          return this.m_mapBroadcastModeratorUsers.has(e);
        }
        IsUserBroadcaster(e) {
          return e === this.m_ulBroadcastSteamID;
        }
        SyncChat() {
          (this.m_tsFirstRequest = null),
            (this.m_nFromFirstRequestMS = 0),
            (this.m_nNextChatTS = 0),
            (this.m_rgChatMessages = []);
        }
      }
      Object(a.b)([n.C], ve.prototype, "m_mapChannelModeratorUsers", void 0),
        Object(a.b)(
          [n.C],
          ve.prototype,
          "m_mapBroadcastModeratorUsers",
          void 0
        ),
        Object(a.b)([n.C], ve.prototype, "m_nRateLimitSeconds", void 0),
        Object(a.b)([n.C], ve.prototype, "m_bRateLimited", void 0),
        Object(a.b)([n.C], ve.prototype, "m_rgChatMessages", void 0),
        Object(a.b)([Be.a], ve.prototype, "FetchChatModerators", null),
        Object(a.b)([Be.a], ve.prototype, "RequestLoop", null),
        Object(a.b)([Be.a], ve.prototype, "MuteUserForSession", null);
      const Ce = new fe();
      window.g_BroadcastChatStore = Ce;
    },
    hKFG: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return n;
      });
      r("mrSG");
      var a = r("iO5U"),
        i = (r("q1tI"), r("WBba")),
        s = (r("C4Nl"), r("X2UP"), r("r64O"), r("lkRc"));
      function n(e) {
        a.a.BIsInitialized() || a.a.Initialize(new i.a(s.c.WEBAPI_BASE_URL, e));
      }
    },
    iL1l: function (e, t, r) {},
    "q+NH": function (e, t, r) {
      e.exports = {
        BroadcastPlayerLite: "broadcastplayer_BroadcastPlayerLite_SAxf3",
        BroadcastPlayerLiteVideo:
          "broadcastplayer_BroadcastPlayerLiteVideo_yCd0z",
        BroadcastContext: "broadcastplayer_BroadcastContext_3TnYL",
        BroadcastPlaceholderImg:
          "broadcastplayer_BroadcastPlaceholderImg_3hxn9",
      };
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
    trWU: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "BroadcastDetails", function () {
          return re;
        }),
        r.d(t, "LinkOverlay", function () {
          return ie;
        });
      var a = r("mrSG"),
        i = r("vDqi"),
        s = r.n(i),
        n = r("2vnA"),
        o = r("TyAF"),
        l = r("q1tI"),
        c = r("rcjX"),
        d = (r("65aj"), r("TtDX")),
        m = (r("5h11"), r("VQ2A")),
        u = (r("kdZy"), r("boaH")),
        h = r("C4Nl"),
        b = r("opsS"),
        _ = r("qiKp");
      class p extends l.Component {
        constructor() {
          super(...arguments),
            (this.m_schUpdate = new _.b()),
            (this.m_bSetupComplete = !1);
        }
        componentDidMount() {
          0 == this.props.updateRate && this.updateCanvas();
        }
        componentWillUnmount() {
          this.m_schUpdate.Cancel();
        }
        componentDidUpdate() {
          this.updateCanvas();
        }
        BindCanvasRef(e) {
          this.m_elCanvas = e;
        }
        updateCanvas() {
          if (
            null == this.props.elementRef ||
            null == this.m_elCanvas ||
            this.m_bSetupComplete
          )
            return;
          let e = this.props.scaleFactor || [1, 1],
            t = this.props.elementRef,
            r = this.props.updateRate;
          this.m_Context = this.m_elCanvas.getContext("2d");
          let a = Math.floor(
              this.m_elCanvas.clientWidth / this.props.reductionFactor
            ),
            i = Math.floor(
              this.m_elCanvas.clientHeight / this.props.reductionFactor
            );
          (this.m_elCanvas.width = a),
            (this.m_elCanvas.height = i),
            this.props.blurAmount > 0 &&
              (this.m_Context.filter = "blur(" + this.props.blurAmount + "px)");
          let s = () => {
            this.m_Context.drawImage(t, 0, 0, a * e[0], i * e[1]),
              r > 0 && this.m_schUpdate.Schedule(r, s);
          };
          s(), (this.m_bSetupComplete = !0);
        }
        render() {
          return l.createElement("canvas", {
            id: this.props.id,
            className: this.props.className,
            ref: this.BindCanvasRef,
            width: this.props.width,
            height: this.props.height,
          });
        }
      }
      Object(a.b)([b.b], p.prototype, "BindCanvasRef", null),
        Object(a.b)([b.b], p.prototype, "updateCanvas", null);
      var g = r("y+6m"),
        B = r("VeD8"),
        S = r("pQ8y"),
        y = r("exH9");
      r("/4Qd");
      class f extends l.Component {
        render() {
          let e = this.props,
            {
              keyExtractor: t,
              style: r,
              duration: i,
              className: s,
              children: n,
            } = e,
            o = Object(a.c)(e, [
              "keyExtractor",
              "style",
              "duration",
              "className",
              "children",
            ]);
          const c = Object.assign(Object.assign({}, r || {}), {
            transitionDuration: i / 1e3 + "s",
          });
          return l.createElement(
            B.a,
            Object.assign({}, o, { className: Object(y.a)("crossfade", s) }),
            l.createElement(
              S.a,
              {
                classNames: "crossfade-anim",
                timeout: i || 500,
                key: t(),
                style: c,
              },
              n
            )
          );
        }
      }
      class v extends l.Component {
        render() {
          const e = this.props,
            { src: t } = e,
            r = Object(a.c)(e, ["src"]),
            i = { backgroundImage: `url(${t})` };
          return l.createElement(
            f,
            Object.assign({ style: i, keyExtractor: () => t }, r),
            l.createElement("div", { className: "crossfade-img" })
          );
        }
      }
      var C = r("5L1o"),
        w = r("XOvi"),
        M = r("6Y59"),
        O = r("+d9t"),
        R = r("X3Ds"),
        T = r("TLQK"),
        j = r("YyVH"),
        z = r("lkRc"),
        F = (r("iL1l"), r("Wjsq")),
        E = r("qhbg"),
        I = r("q+NH"),
        W = r.n(I),
        P = r("0OaU");
      function N() {
        return l.createElement(
          "div",
          { className: "STV_ReplayBanner" },
          Object(T.f)("#DASHPlayerControls_IsReplay")
        );
      }
      const D = Object(o.a)((e) => {
        let t = e.video;
        if (t && (t.IsBroadcastClip() || t.IsBroadcastVOD())) return null;
        let r = u.b.Loading,
          a = "";
        if (t) {
          (r = t.GetBroadcastState()), (a = t.GetBroadcastStateDescription());
          let e = t.IsBuffering();
          r == u.b.Ready && e && ((r = u.b.Loading), (a = ""));
        }
        if (t && r != u.b.Error && t.GetUserInputNeeded()) return null;
        if (r == u.b.Ready) return null;
        let i = r == u.b.Loading;
        return l.createElement(
          "div",
          {
            className: "BroadcastVideoWatchState",
            style: { filter: "hue-rotate(40deg)" },
          },
          i && l.createElement(P.a, null),
          !i &&
            l.createElement(
              "div",
              { className: "BroadcastVideoWatchState_Text" },
              a
            )
        );
      });
      class x extends l.Component {
        OnClick() {
          u.a.UserInputClickVideo(this.props.video);
        }
        render() {
          return l.createElement(
            "div",
            {
              className: "BroadcastVideoUserInputNeeded",
              onClick: this.OnClick,
            },
            l.createElement(M.U, null),
            l.createElement(
              "span",
              null,
              Object(T.f)("#DASHPlayerControls_ClickToPlay")
            )
          );
        }
      }
      Object(a.b)([b.b], x.prototype, "OnClick", null);
      r("JjuB");
      let k = class extends l.Component {
        constructor(e) {
          super(e);
        }
        HideStats() {
          this.props.closeStats && this.props.closeStats();
        }
        render() {
          let e = this.props.stats;
          return l.createElement(
            "div",
            { className: "dash_video_stats" },
            l.createElement(
              "button",
              { className: "dash_stat_close_button", onClick: this.HideStats },
              l.createElement(M.Ab, null)
            ),
            l.createElement(
              "div",
              null,
              Object(T.f)("#DASHPlayerStats_BufferingResolution"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetBufferingResolutionToDisplay()
              )
            ),
            l.createElement(
              "div",
              null,
              Object(T.f)("#DASHPlayerStats_PlaybackResolution"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetPlaybackResolutionToDisplay()
              )
            ),
            l.createElement(
              "div",
              null,
              Object(T.f)("#DASHPlayerStats_HtmlResolution"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetHTMLVideoResolutionToDisplay()
              )
            ),
            l.createElement(
              "div",
              null,
              Object(T.f)("#DASHPlayerStats_ContentServer"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetContentServerToDisplay()
              )
            ),
            l.createElement(
              "div",
              null,
              Object(T.f)("#DASHPlayerStats_StallEvents"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetStalledEventsToDisplay()
              )
            ),
            l.createElement(
              "div",
              null,
              Object(T.f)("#DASHPlayerStats_FailedDownloads"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetFailedDownloadsToDisplay()
              )
            ),
            l.createElement(
              "div",
              null,
              Object(T.f)("#DASHPlayerStats_TimeToFirstFrame"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetTimeToFirstFrameToDisplay()
              )
            ),
            l.createElement(
              "div",
              null,
              Object(T.f)("#DASHPlayerStats_PlaybackRate"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetPlaybackRateForDisplay()
              )
            ),
            l.createElement(U, { stats: e })
          );
        }
      };
      Object(a.b)([b.b], k.prototype, "HideStats", null),
        (k = Object(a.b)([o.a], k));
      let U = class extends l.Component {
        constructor(e) {
          super(e);
        }
        createBufferedRange(e) {
          let t = this.props.stats,
            r = [],
            a = e ? "vidbuf" : "audbuf",
            i = e
              ? t.GetNumBufferedVideoRanges()
              : t.GetNumBufferedAudioRanges();
          if (i > 0)
            for (let s = 0; s < i; ++s) {
              let i = Object(T.f)(
                  e
                    ? "#DASHPlayerStats_VideoBufferRange"
                    : "#DASHPlayerStats_AudioBufferRange",
                  s
                ),
                n = e
                  ? t.GetBufferedVideoSegmentForDisplay(s)
                  : t.GetBufferedAudioSegmentForDisplay(s);
              r.push(
                l.createElement(
                  "div",
                  { key: a + s },
                  i,
                  " ",
                  l.createElement("span", { className: "videoStatsValue" }, n)
                )
              );
            }
          else {
            let t = Object(T.f)(
              e
                ? "#DASHPlayerStats_VideoNoRangeInformation"
                : "#DASHPlayerStats_AudioNoRangeInformation"
            );
            r.push(l.createElement("div", { key: a + "none" }, t));
          }
          return r;
        }
        render() {
          let e = this.props.stats;
          return l.createElement(
            "div",
            { className: "dash_video_quick_stats" },
            l.createElement(
              "div",
              null,
              Object(T.f)("#DASHPlayerStats_BytesReceived"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetBytesReceivedToDisplay()
              )
            ),
            this.props.stats.BHasFrameInformation() &&
              l.createElement(
                "div",
                null,
                Object(T.f)("#DASHPlayerStats_DroppedFrames"),
                " ",
                l.createElement(
                  "span",
                  { className: "videoStatsValue" },
                  e.GetDroppedFramesToDisplay()
                )
              ),
            l.createElement(
              "div",
              null,
              Object(T.f)("#DASHPlayerStats_VideoBuffered"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetVideoBufferedToDisplay(),
                " "
              )
            ),
            l.createElement(
              "div",
              null,
              Object(T.f)("#DASHPlayerStats_AudioBuffered"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetAudioBufferedToDisplay(),
                " "
              )
            ),
            this.createBufferedRange(!0),
            this.createBufferedRange(!1),
            l.createElement(
              "div",
              null,
              Object(T.f)("#DASHPlayerStats_BandwidthRequired"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetBandwidthRequiredToDisplay()
              )
            ),
            l.createElement(
              "div",
              null,
              Object(T.f)("#DASHPlayerStats_BandwidthVideo"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetBandwithVideoToDisplay()
              )
            ),
            l.createElement(
              "div",
              null,
              Object(T.f)("#DASHPlayerStats_BandwidthNums"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetBandwidthStatsToDisplay()
              )
            ),
            l.createElement(
              "div",
              null,
              Object(T.f)("#DASHPlayerStats_DownloadNums"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetDownloadTimeStatsToDisplay()
              )
            ),
            l.createElement(
              "div",
              null,
              Object(T.f)("#DASHPlayerStats_ActiveDownloads"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetActiveDownloadsToDisplay()
              )
            ),
            l.createElement(
              "div",
              null,
              Object(T.f)("#DASHPlayerStats_VideoDownloadProgress"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetVideoDownloadProgressToDisplay()
              )
            ),
            l.createElement(
              "div",
              null,
              Object(T.f)("#DASHPlayerStats_DroppingFrames"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetPersistentFrameDropsForDisplay()
              )
            ),
            l.createElement(
              "div",
              null,
              Object(T.f)("#DASHPlayerStats_CurrentFPS"),
              " ",
              l.createElement(
                "span",
                { className: "videoStatsValue" },
                e.GetCurrentFPSForDisplay()
              )
            )
          );
        }
      };
      U = Object(a.b)([o.a], U);
      r("YF6T");
      const L = 15;
      let V = class extends l.Component {
        constructor(e) {
          super(e),
            (this.m_schHideControls = new _.b()),
            (this.m_schUnmountControls = new _.b()),
            (this.m_elBroadcastPlayer = null),
            (this.m_bMouseDown = !1),
            (this.m_elMouseDown = null),
            (this.m_listeners = new _.c()),
            (this.m_cancelSignal = s.a.CancelToken.source()),
            (this.state = {
              bMountControls: !1,
              bControlsVisible: !1,
              bShowStats: !1,
              video: null,
              nResizedHeight: null,
              bFullscreen: !1,
            });
        }
        StopVideo() {
          let e = this.state.video;
          e && (u.a.StopVideo(e), this.setState({ video: null }));
        }
        IsMuted() {
          let e = this.state.video;
          return !e || e.IsMuted();
        }
        StopPlaybackTillUserInput() {
          let e = this.state.video;
          e && e.StopPlaybackTillUserInput();
        }
        componentDidUpdate(e, t) {
          !t.bMountControls && this.state.bMountControls
            ? setTimeout(() => {
                this.setState((e) => ({ bControlsVisible: e.bMountControls }));
              }, 15)
            : t.bControlsVisible &&
              !this.state.bControlsVisible &&
              this.state.video &&
              !this.state.video.IsPaused() &&
              this.m_schUnmountControls.Schedule(2e3, this.UmountControls),
            this.props.steamIDBroadcast !== e.steamIDBroadcast &&
              this.BindVideoRef(this.m_elVideo),
            !this.props.nAppIDVOD ||
              (void 0 !== t.strInitialCapsuleImageUrl &&
                e.nAppIDVOD == this.props.nAppIDVOD) ||
              h.a
                .Get()
                .QueueAppRequest(this.props.nAppIDVOD, {
                  include_assets: !0,
                  include_trailers: !0,
                })
                .then(() => {
                  const e = h.a.Get().GetApp(this.props.nAppIDVOD),
                    t =
                      (null == e
                        ? void 0
                        : e.GetAssets().GetMainCapsuleURL()) || "";
                  this.setState({ strInitialCapsuleImageUrl: t });
                });
        }
        componentWillUnmount() {
          this.m_listeners.Unregister(),
            this.m_schHideControls.Cancel(),
            this.m_schUnmountControls.Cancel(),
            this.StopVideo();
        }
        BindBroadcastPlayerRef(e) {
          this.m_listeners.Unregister(),
            (this.m_elBroadcastPlayer = e),
            e &&
              (this.m_listeners.AddEventListener(
                e,
                "fullscreenchange",
                this.OnFullscreenChange
              ),
              this.m_listeners.AddEventListener(
                e,
                "mozfullscreenchange",
                this.OnFullscreenChange
              ),
              this.m_listeners.AddEventListener(
                e,
                "webkitfullscreenchange",
                this.OnFullscreenChange
              ),
              this.m_listeners.AddEventListener(
                e,
                "msfullscreenchange",
                this.OnFullscreenChange
              ));
        }
        BindVideoRef(e) {
          let t;
          this.StopVideo(),
            this.props.steamIDBroadcast
              ? e &&
                (t = u.a.CreateBroadcastVideo(
                  e,
                  this.props.steamIDBroadcast,
                  this.props.watchLocation,
                  this.props.bWebRTC
                ))
              : this.props.broadcastClipID
              ? e &&
                (t = u.a.CreateClipVideo(
                  e,
                  this.props.broadcastClipID,
                  this.props.watchLocation
                ))
              : this.props.nAppIDVOD &&
                e &&
                ((t = u.a.CreateVODVideo(
                  e,
                  this.props.nAppIDVOD,
                  this.props.watchLocation
                )),
                this.props.fnOnVideoEnd &&
                  t.SetOnVideoCallback(this.props.fnOnVideoEnd)),
            t &&
              (this.props.bStartMuted && t.SetMute(!0),
              this.props.bStartPaused
                ? t.StopPlaybackTillUserInput()
                : t.Play()),
            this.setState({ video: t }),
            (this.m_elVideo = e);
        }
        OnMouseDown(e) {
          (this.m_bMouseDown = !0),
            (this.m_elMouseDown = e.currentTarget),
            this.m_elMouseDown.ownerDocument.defaultView.addEventListener(
              "mouseup",
              this.OnMouseUp
            );
        }
        OnMouseUp(e) {
          (this.m_bMouseDown = !1),
            this.m_elMouseDown.ownerDocument.defaultView.removeEventListener(
              "mouseup",
              this.OnMouseUp
            ),
            this.m_schHideControls.Schedule(3200, this.HideControls);
        }
        OnMouseMove(e) {
          this.m_schHideControls.Cancel(),
            this.m_schUnmountControls.Cancel(),
            this.state.bMountControls
              ? this.state.bControlsVisible ||
                this.setState({ bControlsVisible: !0 })
              : this.setState({ bMountControls: !0 }),
            this.m_schHideControls.Schedule(3200, this.HideControls);
        }
        OnMouseLeave(e) {
          this.HideControls();
        }
        HideControls() {
          this.state.bControlsVisible &&
            !this.m_bMouseDown &&
            this.setState({ bControlsVisible: !1 });
        }
        UmountControls() {
          this.setState((e) => {
            if (!e.bControlsVisible && e.bMountControls)
              return { bMountControls: !1 };
          });
        }
        ShowStatsView() {
          let e = this.state.video;
          e &&
            (this.state.bShowStats ||
              (this.setState({ bShowStats: !0 }), e.SetStatsViewIsVisible(!0)));
        }
        OnContextMenu(e) {
          this.state.bFullscreen ||
            (Object(d.a)(
              l.createElement(g.c, null, this.GetContextMenuItems()),
              e
            ),
            e.preventDefault());
        }
        ToggleStatsView(e) {
          let t = !this.state.bShowStats;
          this.setState({ bShowStats: t });
          let r = this.state.video;
          r && r.SetStatsViewIsVisible(t);
        }
        ShowStorePage(e) {
          let t = this.state.video;
          if (!t || !this.props.onOpenLinkInNewWindow) return;
          let r = t.GetBroadcastInfo();
          if (!r) return;
          let a = Object(m.a)(`${z.c.STORE_BASE_URL}app/${r.m_strAppId}`);
          this.props.onOpenLinkInNewWindow(e, a), e.stopPropagation();
        }
        GetContextMenuItems() {
          let e = [],
            t = this.state.video;
          if (!t) return e;
          let r = t.GetBroadcastInfo();
          return (
            e.push(
              l.createElement(
                g.b,
                {
                  key: "togglestats",
                  bChecked: this.state.bShowStats,
                  onSelected: (e) => {
                    this.ToggleStatsView(e);
                  },
                },
                Object(T.f)("#Broadcast_VideoContext_ToggleStats")
              )
            ),
            r &&
              "0" != r.m_strAppId &&
              Number.parseInt(r.m_strAppId) != u.d &&
              e.push(
                l.createElement(
                  g.d,
                  {
                    key: "visitstore",
                    onSelected: (e) => {
                      this.ShowStorePage(e);
                    },
                  },
                  Object(T.f)("#Broadcast_VideoContext_OpenStore")
                )
              ),
            e
          );
        }
        CloseStats() {
          let e = this.state.video;
          e &&
            this.state.bShowStats &&
            (this.setState({ bShowStats: !1 }), e.SetStatsViewIsVisible(!1));
        }
        OnToggleFullscreen() {
          this.m_elBroadcastPlayer &&
            (Object(R.b)(this.m_elBroadcastPlayer)
              ? Object(R.g)(this.m_elBroadcastPlayer)
              : Object(R.u)(this.m_elBroadcastPlayer, this.m_elVideo));
        }
        OnFullscreenChange(e) {
          if (!this.m_elBroadcastPlayer) return;
          let t = Object(R.b)(this.m_elBroadcastPlayer);
          this.setState({ bFullscreen: t });
        }
        BHideVideoControls() {
          let e = this.state.video;
          return (
            !e ||
            !!e.GetUserInputNeeded() ||
            u.a.GetBroadcastState(e) == u.b.Error
          );
        }
        render() {
          const e = this.state.video,
            t = e && e.IsPaused(),
            r = e && e.BHasDASHStats() && this.state.bShowStats,
            a = Boolean(e && e.IsReplay()),
            i = this.state.bMountControls,
            s = this.state.bControlsVisible || t,
            n = e && e.GetUserInputNeeded(),
            o =
              (null == e ? void 0 : e.IsBroadcastVOD()) &&
              n &&
              this.state.strInitialCapsuleImageUrl;
          let c = "videoContainer";
          s || (c += " HidePlayerControls"),
            t && (c += " VideoPaused"),
            this.state.bFullscreen && (c += " fullscreenVideo"),
            this.props.classes && (c += " " + this.props.classes);
          let d = [];
          !this.state.bFullscreen &&
            this.props.actions &&
            (d = d.concat(this.props.actions)),
            !this.state.bFullscreen &&
              this.props.onTheaterMode &&
              d.push(
                l.createElement("div", {
                  key: "ChatPosToggle ChatTheaterToggle",
                  onClick: this.props.onTheaterMode,
                  title: Object(T.f)("#Broadcast_View_Theater"),
                  className: "BroadcastTheaterToggle",
                })
              ),
            d.push(
              l.createElement("div", {
                key: "FullscreenToggle",
                title: Object(T.f)("#Broadcast_View_Fullscreen"),
                onClick: this.OnToggleFullscreen,
                className: "BroadcastFullscreenToggle",
              })
            );
          const m = i && !this.BHideVideoControls(),
            u = i && !this.state.bFullscreen,
            h =
              this.props.fnRenderBroadcastContext &&
              this.props.fnRenderBroadcastContext();
          return l.createElement(
            "div",
            {
              ref: this.BindBroadcastPlayerRef,
              className: c,
              onMouseMove: this.OnMouseMove,
              onClick: this.OnMouseMove,
              onMouseLeave: this.OnMouseLeave,
              onContextMenu: this.OnContextMenu,
              onMouseDown: this.OnMouseDown,
            },
            h && l.createElement("div", { className: W.a.BroadcastContext }, h),
            a && l.createElement(N, null),
            this.props.showVideoBackgroundBlur &&
              l.createElement(p, {
                className: "videoBlur",
                elementRef: this.m_elVideo,
                updateRate: 33,
                width: 320,
                height: 180,
                reductionFactor: 10,
                blurAmount: 5,
              }),
            l.createElement("video", {
              className: "videoSrc",
              ref: this.BindVideoRef,
              muted: !0,
              autoPlay: !0,
              playsInline: !0,
              controls: !1,
            }),
            this.props.linkRegions
              ? l.createElement(ie, {
                  linkRegions: this.props.linkRegions,
                  editMode: this.props.editMode,
                  onSaveLinkRegions: this.props.onSaveLinkRegions,
                })
              : null,
            this.props.linkElement,
            o &&
              l.createElement("img", {
                loading: "lazy",
                className: Object(y.a)(
                  W.a.BroadcastPlaceholderImg,
                  "BroadcastPlaceholderImg"
                ),
                src: this.state.strInitialCapsuleImageUrl,
              }),
            m &&
              l.createElement(A, {
                video: e,
                actions: d,
                onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                onShowStats: this.ToggleStatsView,
                bIncludeClipEditor: this.props.bIncludeClipEditor,
              }),
            u && l.createElement(G, { onClick: this.props.onRequestClose }),
            r &&
              l.createElement(k, {
                stats: e.GetDASHPlayerStats(),
                closeStats: this.CloseStats,
              }),
            l.createElement(D, { video: e }),
            n && l.createElement(x, { video: e })
          );
        }
      };
      Object(a.b)([b.b], V.prototype, "BindBroadcastPlayerRef", null),
        Object(a.b)([b.b], V.prototype, "BindVideoRef", null),
        Object(a.b)([b.b], V.prototype, "OnMouseDown", null),
        Object(a.b)([b.b], V.prototype, "OnMouseUp", null),
        Object(a.b)([b.b], V.prototype, "OnMouseMove", null),
        Object(a.b)([b.b], V.prototype, "OnMouseLeave", null),
        Object(a.b)([b.b], V.prototype, "HideControls", null),
        Object(a.b)([b.b], V.prototype, "UmountControls", null),
        Object(a.b)([b.b], V.prototype, "ShowStatsView", null),
        Object(a.b)([b.b], V.prototype, "OnContextMenu", null),
        Object(a.b)([b.b], V.prototype, "ToggleStatsView", null),
        Object(a.b)([b.b], V.prototype, "ShowStorePage", null),
        Object(a.b)([b.b], V.prototype, "CloseStats", null),
        Object(a.b)([b.b], V.prototype, "OnToggleFullscreen", null),
        Object(a.b)([b.b], V.prototype, "OnFullscreenChange", null),
        (V = Object(a.b)([o.a], V));
      t.default = V;
      let A = class extends l.Component {
        render() {
          const { video: e } = this.props;
          if (!e) return null;
          let t = e.has_segments;
          return l.createElement(
            "div",
            { className: "videoControls" },
            l.createElement(re, {
              steamID: this.props.video.GetBroadcastSteamID(),
              bHideThumbnail: !0,
              bVerticalBroadcastChat: !0,
              onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
            }),
            l.createElement(
              "div",
              { className: "videoControlsBottom" + (t ? "" : " noSegments") },
              l.createElement(te, {
                video: e,
                bIncludeClipEditor: this.props.bIncludeClipEditor,
              }),
              l.createElement(
                "div",
                { className: "STV_BroadcastController" },
                l.createElement("div", {
                  className: "videoControlsButtons LeftSpacer",
                }),
                l.createElement(H, { video: e }),
                l.createElement(q, { video: e }),
                l.createElement(X, {
                  video: e,
                  actions: this.props.actions,
                  onShowStats: this.props.onShowStats,
                })
              )
            )
          );
        }
      };
      A = Object(a.b)([o.a], A);
      class G extends l.PureComponent {
        render() {
          return this.props.onClick
            ? l.createElement(
                "div",
                {
                  className: "STV_BroadcastClose",
                  onClick: this.props.onClick,
                },
                l.createElement(M.Ab, null)
              )
            : null;
        }
      }
      class H extends l.Component {
        OnJumpBackward() {
          this.props.video.JumpTime(-15);
        }
        OnJumpForward() {
          this.props.video.JumpTime(L);
        }
        render() {
          let e = this.props.video,
            t = e.CanSeek();
          return l.createElement(
            "div",
            { className: "videoControlsButtons PlayControls" },
            l.createElement(K, { video: e }),
            t &&
              l.createElement(
                "div",
                {
                  className: "videoControlButton videoControlJump controlFlip",
                  onClick: this.OnJumpBackward,
                },
                l.createElement(M.N, {
                  bHidePostArrow: !0,
                  bHidePreArrow: !0,
                  bShowJumpAheadBox: !0,
                  bFlipHorizontal: !0,
                }),
                l.createElement("div", { className: "jumpAheadValue" }, L)
              ),
            l.createElement($, { video: e }),
            t &&
              l.createElement(
                "div",
                {
                  className: "videoControlButton videoControlJump",
                  onClick: this.OnJumpForward,
                },
                l.createElement(M.N, {
                  bHidePostArrow: !0,
                  bHidePreArrow: !0,
                  bShowJumpAheadBox: !0,
                  bFlipHorizontal: !1,
                }),
                l.createElement("div", { className: "jumpAheadValue" }, L)
              ),
            t && l.createElement(J, { video: e })
          );
        }
      }
      Object(a.b)([b.b], H.prototype, "OnJumpBackward", null),
        Object(a.b)([b.b], H.prototype, "OnJumpForward", null);
      const q = Object(o.a)((e) => {
        if (e.video.IsBroadcastClip() || e.video.IsBroadcastVOD()) return null;
        let t = e.video.IsOnLiveEdge();
        return l.createElement(
          "div",
          { className: "videoControlsButtons GoLive" },
          l.createElement(
            "div",
            {
              className:
                "videoControlButton videoControlGoLive" +
                (t ? " isLiveEdge" : ""),
              onClick: t
                ? null
                : (t) => {
                    e.video.JumpToLiveEdge();
                  },
            },
            l.createElement(M.N, {
              bHidePreArrow: !0,
              bHidePostArrow: !0,
              bFlipHorizontal: !1,
            }),
            l.createElement(
              "div",
              { className: "jumpGoLive" },
              Object(T.f)(
                t ? "#DASHPlayerControls_IsLive" : "#DASHPlayerControls_GoLive"
              )
            )
          )
        );
      });
      let $ = class extends l.Component {
        OnTogglePlayPause() {
          this.props.video.TogglePlayPause();
        }
        render() {
          let e = this.props.video.IsPaused();
          return l.createElement(
            "div",
            {
              className: "videoControlButton buttonPlayPause",
              onClick: this.OnTogglePlayPause,
            },
            e ? l.createElement(M.U, null) : l.createElement(M.T, null)
          );
        }
      };
      Object(a.b)([b.b], $.prototype, "OnTogglePlayPause", null),
        ($ = Object(a.b)([o.a], $));
      let K = class extends l.Component {
        get has_previous_marker() {
          return void 0 !== this.GetPreviousMarkerTime();
        }
        GetPreviousMarkerTime() {
          if (!this.props.video.has_markers) return;
          let e = this.props.video.GetTimelineMarkers(),
            t = this.props.video.GetPlaybackTime();
          for (let r = e.length - 1; r >= 0; r--)
            if (!(e[r].nTime >= t)) return e[r].nTime;
        }
        OnJumpToPreviousMarkerClicked(e) {
          let t = this.GetPreviousMarkerTime();
          void 0 !== t && this.props.video.Seek(t - 0.2);
        }
        render() {
          let e = this.props.video.BHasMarkersOrSegments();
          return l.createElement(
            "div",
            {
              className:
                "videoControlButton jumpToMarker controlFlip" +
                (e ? "" : " noMarkersOrSegments") +
                (this.has_previous_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToPreviousMarkerClicked,
            },
            l.createElement(M.N, { bHidePostArrow: !0, bFlipHorizontal: !0 })
          );
        }
      };
      Object(a.b)([n.n], K.prototype, "has_previous_marker", null),
        Object(a.b)([b.b], K.prototype, "OnJumpToPreviousMarkerClicked", null),
        (K = Object(a.b)([o.a], K));
      let J = class extends l.Component {
        get has_next_marker() {
          return void 0 !== this.GetNextMarkerTime();
        }
        GetNextMarkerTime() {
          if (!this.props.video.has_markers) return;
          let e = this.props.video.GetTimelineMarkers(),
            t = this.props.video.GetPlaybackTime();
          for (let r = 0; r < e.length; r++)
            if (!(e[r].nTime <= t)) return e[r].nTime;
        }
        OnJumpToNextMarkerClicked(e) {
          let t = this.GetNextMarkerTime();
          void 0 !== t && this.props.video.Seek(t);
        }
        render() {
          let e = this.props.video.BHasMarkersOrSegments();
          return l.createElement(
            "div",
            {
              className:
                "videoControlButton jumpToMarker" +
                (e ? "" : " noMarkersOrSegments") +
                (this.has_next_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToNextMarkerClicked,
            },
            l.createElement(M.N, { bHidePostArrow: !0, bFlipHorizontal: !1 })
          );
        }
      };
      Object(a.b)([n.n], J.prototype, "has_next_marker", null),
        Object(a.b)([b.b], J.prototype, "OnJumpToNextMarkerClicked", null),
        (J = Object(a.b)([o.a], J));
      class X extends l.Component {
        constructor(e) {
          super(e),
            (this.m_elSubtitlesButton = l.createRef()),
            (this.m_elSubtitlesPanel = l.createRef()),
            (this.state = { bSettingsOpen: !1, bSubtitlesOpen: !1 });
        }
        OnVideoControlClick(e) {
          this.setState({ bSettingsOpen: !this.state.bSettingsOpen }),
            (this.m_SettingsButtonPos = [
              this.m_elSettingsButton.offsetLeft,
              this.m_elSettingsButton.offsetTop,
            ]),
            (this.m_elClickListener =
              e.currentTarget.ownerDocument.defaultView),
            this.m_elClickListener.addEventListener(
              "mouseup",
              this.OnMouseUp,
              !0
            );
        }
        OnSubtitlesClick(e) {
          this.setState({ bSubtitlesOpen: !this.state.bSubtitlesOpen }),
            (this.m_SubtitlesButtonPos = [
              this.m_elSubtitlesButton.current.offsetLeft,
              this.m_elSubtitlesButton.current.offsetTop,
            ]),
            (this.m_elClickListener =
              e.currentTarget.ownerDocument.defaultView),
            this.m_elClickListener.addEventListener(
              "mouseup",
              this.OnMouseUp,
              !0
            );
        }
        OnMouseUp(e) {
          this.m_elClickListener.removeEventListener(
            "mouseup",
            this.OnMouseUp,
            !0
          ),
            Object(R.e)(this.m_elSettingsPanel, e.target) ||
              this.setState({ bSettingsOpen: !1 }),
            Object(R.e)(this.m_elSubtitlesPanel.current, e.target) ||
              this.setState({ bSubtitlesOpen: !1 });
        }
        bindSettingsButton(e) {
          this.m_elSettingsButton = e;
        }
        BindSettingsPanel(e) {
          this.m_elSettingsPanel = e;
        }
        OnShowStats(e) {
          this.props.onShowStats(e),
            this.setState({ bSettingsOpen: !this.state.bSettingsOpen });
        }
        render() {
          let e = !1,
            t = !1;
          const { video: r, actions: a } = this.props;
          let i,
            s,
            n = 0,
            o = l.createElement("div", {
              key: "separator",
              className: "settingsMenuSeparator",
            });
          if (
            (this.state.bSettingsOpen &&
              ((e = !0),
              (i = this.props.video.GetVideoRepresentations()),
              (s = i.map((e) =>
                l.createElement(
                  g.b,
                  {
                    key: e.id,
                    onSelected: () => {
                      this.props.video.SetVideoRepresentation(e),
                        this.setState({
                          bSettingsOpen: !this.state.bSettingsOpen,
                        });
                    },
                    bChecked: e.selected,
                  },
                  e.displayName
                )
              )),
              s.push(o),
              s.push(
                l.createElement(
                  g.d,
                  { key: "statsToggle", onSelected: this.OnShowStats },
                  Object(T.f)("#Broadcast_VideoContext_ToggleStats"),
                  "\t"
                )
              ),
              (n = 0 - (21 * s.length + 32))),
            this.state.bSubtitlesOpen)
          ) {
            (t = !0),
              (s = []),
              s.push(
                l.createElement(
                  g.b,
                  {
                    key: "none",
                    onSelected: () => {
                      this.props.video.SetSubtitles(null),
                        this.setState({
                          bSubtitlesOpen: !this.state.bSubtitlesOpen,
                        });
                    },
                    className: "NoSubtitles",
                    bChecked: !1,
                  },
                  Object(T.f)("#Broadcast_None")
                )
              );
            for (let e = 0; e < this.props.video.ListSubtitles().length; e++) {
              const t = this.props.video.ListSubtitles()[e];
              s.push(
                l.createElement(
                  g.b,
                  {
                    key: t.language,
                    onSelected: () => {
                      this.props.video.SetSubtitles(t.language),
                        this.setState({
                          bSubtitlesOpen: !this.state.bSubtitlesOpen,
                        });
                    },
                    bChecked: "showing" === t.mode,
                  },
                  t.label
                )
              );
            }
            n = -352;
          }
          let c = this.props.video.GetSubtitles() || !1;
          return l.createElement(
            "div",
            { className: "STV_BroadcastSettings" },
            this.props.video.ListSubtitles().length
              ? l.createElement(
                  "div",
                  {
                    className:
                      "videoControlButton" + (c ? " ClosedCaptionsActive" : ""),
                    onClick: this.OnSubtitlesClick,
                    ref: this.m_elSubtitlesButton,
                  },
                  l.createElement(M.n, null)
                )
              : null,
            l.createElement(
              "div",
              {
                className:
                  "videoControlButton VideoSettings " +
                  (e ? " VideoSettingsOpen" : ""),
                onClick: this.OnVideoControlClick,
                ref: this.bindSettingsButton,
              },
              l.createElement(M.bb, null)
            ),
            l.createElement(Y, { video: r }),
            a &&
              a.map((e) =>
                l.createElement(
                  "div",
                  {
                    key: e.key,
                    className: "videoControlButton videoControlFitWidth",
                  },
                  e
                )
              ),
            e &&
              l.createElement(
                "div",
                {
                  ref: this.BindSettingsPanel,
                  className: "STV_BroadcastSettingsPanel",
                  style: {
                    left: this.m_SettingsButtonPos[0],
                    top: this.m_SettingsButtonPos[1],
                    marginTop: n,
                  },
                },
                l.createElement(
                  "div",
                  { className: "STV_BroadcastSettingsMenuItems" },
                  s
                )
              ),
            t &&
              l.createElement(
                "div",
                {
                  ref: this.m_elSubtitlesPanel,
                  className: "STV_BroadcastSettingsPanel SubtitlesMenu",
                  style: {
                    maxHeight: "320px",
                    left: this.m_SubtitlesButtonPos[0],
                    top: this.m_SubtitlesButtonPos[1],
                    marginTop: n,
                  },
                },
                l.createElement(
                  "div",
                  { className: "STV_BroadcastSettingsMenuItems" },
                  s
                )
              )
          );
        }
      }
      Object(a.b)([b.b], X.prototype, "OnVideoControlClick", null),
        Object(a.b)([b.b], X.prototype, "OnSubtitlesClick", null),
        Object(a.b)([b.b], X.prototype, "OnMouseUp", null),
        Object(a.b)([b.b], X.prototype, "bindSettingsButton", null),
        Object(a.b)([b.b], X.prototype, "BindSettingsPanel", null),
        Object(a.b)([b.b], X.prototype, "OnShowStats", null);
      let Y = class extends l.Component {
        constructor() {
          super(...arguments),
            (this.k_nHideSliderTimeout = 1500),
            (this.m_bShowSlider = true),
            (this.m_schHideSlider = new _.b()),
            (this.m_bChildDragging = !1),
            (this.m_bMouseOver = !1);
        }
        componentWillUnmount() {
          this.m_schHideSlider.Cancel();
        }
        ToggleMute() {
          let e = this.props.video,
            t = e.IsMuted();
          e.SetMute(!t), e.GetVolume() < 0.01 && e.SetVolume(0.5);
        }
        OnMouseEnter(e) {
          (this.m_bShowSlider = !0),
            (this.m_bMouseOver = !0),
            this.m_schHideSlider.Cancel();
        }
        OnMouseLeave(e) {
          (this.m_bMouseOver = !1), this.ScheduleHide();
        }
        OnChildDrag(e) {
          (this.m_bChildDragging = e), this.ScheduleHide();
        }
        ScheduleHide() {
          this.m_bMouseOver ||
            this.m_bChildDragging ||
            this.m_schHideSlider.Schedule(
              this.k_nHideSliderTimeout,
              () => (this.m_bShowSlider = true)
            );
        }
        render() {
          let e = this.props.video,
            t = e.IsMuted(),
            r = 100 * e.GetVolume(),
            a = "videoControlButton";
          r > 65
            ? (a += " HighestVolume")
            : r > 45
            ? (a += " HighVolume")
            : r < 46 && r > 24
            ? (a += " MedVolume")
            : r < 25 && (a += " LowVolume");
          let i = "BroadcastVolumeControl";
          return (
            this.m_bShowSlider && (i += " ShowVolumeSlider"),
            t && (i += " muted"),
            l.createElement(
              "div",
              {
                className: i,
                onMouseEnter: this.OnMouseEnter,
                onMouseLeave: this.OnMouseLeave,
              },
              l.createElement(
                "div",
                { className: "BroadcastVolumeControl_FixedLayout" },
                l.createElement(
                  "div",
                  { className: a, onClick: this.ToggleMute },
                  l.createElement(M.wb, null)
                ),
                l.createElement(Q, { video: e, onDrag: this.OnChildDrag })
              )
            )
          );
        }
      };
      Object(a.b)([n.C], Y.prototype, "m_bShowSlider", void 0),
        Object(a.b)([b.b], Y.prototype, "ToggleMute", null),
        Object(a.b)([b.b], Y.prototype, "OnMouseEnter", null),
        Object(a.b)([b.b], Y.prototype, "OnMouseLeave", null),
        Object(a.b)([b.b], Y.prototype, "OnChildDrag", null),
        (Y = Object(a.b)([o.a], Y));
      let Q = class extends l.Component {
        constructor() {
          super(...arguments),
            (this.m_elSlider = null),
            (this.m_nVolumeStartOfDrag = 0);
        }
        OnMouseDown(e) {
          let t = e.currentTarget;
          (this.m_elSlider = t),
            (this.m_nVolumeStartOfDrag = this.props.video.GetVolume()),
            this.SetVolumeWithCoord(t, e.clientX),
            t.ownerDocument.defaultView.addEventListener(
              "mousemove",
              this.OnMouseMove
            ),
            t.ownerDocument.defaultView.addEventListener(
              "mouseup",
              this.OnMouseUp
            ),
            this.props.onDrag(!0);
        }
        OnMouseMove(e) {
          this.m_elSlider &&
            this.SetVolumeWithCoord(this.m_elSlider, e.clientX);
        }
        OnMouseUp(e) {
          if (!this.m_elSlider) return;
          this.SetVolumeWithCoord(this.m_elSlider, e.clientX);
          let t = this.props.video;
          t.IsMuted() && t.SetVolume(this.m_nVolumeStartOfDrag),
            this.m_elSlider.ownerDocument.defaultView.removeEventListener(
              "mousemove",
              this.OnMouseMove
            ),
            this.m_elSlider.ownerDocument.defaultView.removeEventListener(
              "mouseup",
              this.OnMouseUp
            ),
            (this.m_nVolumeStartOfDrag = 0),
            (this.m_elSlider = null),
            this.props.onDrag(!1);
        }
        SetVolumeWithCoord(e, t) {
          let r = e.getBoundingClientRect(),
            a = j.c(t, r.left, r.right, 0, 1),
            i = j.a(a, 0, 1),
            s = this.props.video;
          s.SetMute(a < 0.01), s.SetVolume(i);
        }
        render() {
          let e = this.props.video,
            t = 100 * e.GetVolume();
          e.IsMuted() && (t = 0);
          let r = { left: `${t}%` },
            a = { width: `${t}%` };
          return l.createElement(
            "div",
            {
              className: "BroadcastVolumeSlider",
              onMouseDown: this.OnMouseDown,
            },
            l.createElement("div", {
              className: "BroadcastVolumeSlider_Track",
            }),
            l.createElement("div", {
              className: "BroadcastVolumeSlider_Fill",
              style: a,
            }),
            l.createElement("div", {
              className: "BroadcastVolumeSlider_Thumb",
              style: r,
            })
          );
        }
      };
      Object(a.b)([b.b], Q.prototype, "OnMouseDown", null),
        Object(a.b)([b.b], Q.prototype, "OnMouseMove", null),
        Object(a.b)([b.b], Q.prototype, "OnMouseUp", null),
        Object(a.b)([n.k], Q.prototype, "SetVolumeWithCoord", null),
        (Q = Object(a.b)([o.a], Q));
      const Z = (e) =>
        l.createElement(
          "div",
          {
            className: "timelineMarker",
            title: e.label,
            style: { left: e.pos + "%" },
            onMouseEnter: () => e.onMouseEnter(e.pos),
            onMouseLeave: e.onMouseLeave,
            onMouseDown: e.onMouseDown ? e.onMouseDown : void 0,
          },
          l.createElement(
            "div",
            { className: "timelineMarkerIcon" },
            l.createElement(M.ab, null)
          )
        );
      function ee(e) {
        let t = e.startPos,
          r = e.endPos,
          a = "",
          i = 1;
        return (
          t < 0 && ((i = (r - t) / 10), (t = 0), (a = " hideFront")),
          l.createElement(
            "div",
            {
              className: "STV_timelineSegment" + a,
              style: { left: t + "%", width: r - t + "%", opacity: i },
              onClick: e.onClick,
            },
            l.createElement("div", {
              className: "STV_timelineSegmentFrontFill",
              style: { borderColor: "rgb(" + e.color + ")" },
            }),
            l.createElement(
              "div",
              {
                className: "STV_timelineSegmentLabel",
                style: { color: "rgb(" + e.color + ")" },
              },
              e.label
            ),
            l.createElement("div", {
              className: "STV_timelineSegmentBackFill",
              style: { borderColor: "rgb(" + e.color + ")" },
            })
          )
        );
      }
      let te = class extends l.Component {
        constructor(e) {
          super(e),
            (this.m_elSlider = l.createRef()),
            (this.state = {
              nGrabberMouseDownTime: 0,
              bGrabberMouseDown: !1,
              nHoverValue: void 0,
              hoverX: 0,
              bStartMouseDown: !1,
              bEndMouseDown: !1,
              thumbnailURL: "",
            });
        }
        OnMouseDown(e, t) {
          if (this.m_elSlider) {
            e.persist(),
              (this.m_rectSlider =
                this.m_elSlider.current &&
                this.m_elSlider.current.getBoundingClientRect());
            let r = {};
            "start" === t
              ? ((r = { bStartMouseDown: !0 }), e.stopPropagation())
              : "end" === t
              ? ((r = { bEndMouseDown: !0 }), e.stopPropagation())
              : (r = { bGrabberMouseDown: !0 }),
              this.setState(r, () => this.AdjustSliderForClientX(e.clientX)),
              this.m_elSlider.current.ownerDocument.defaultView.addEventListener(
                "mousemove",
                this.OnMouseMove
              ),
              this.m_elSlider.current.ownerDocument.defaultView.addEventListener(
                "mouseup",
                this.OnMouseUp
              );
          }
        }
        OnMouseMove(e) {
          this.AdjustSliderForClientX(e.clientX);
        }
        OnMouseUp(e) {
          this.state.bStartMouseDown
            ? this.setState({ bStartMouseDown: !1 })
            : this.state.bEndMouseDown
            ? this.setState({ bEndMouseDown: !1 })
            : (this.props.video.Seek(this.state.nGrabberMouseDownTime),
              this.setState({
                bGrabberMouseDown: !1,
                nGrabberMouseDownTime: 0,
              })),
            this.m_elSlider.current &&
              (this.m_elSlider.current.ownerDocument.defaultView.removeEventListener(
                "mousemove",
                this.OnMouseMove
              ),
              this.m_elSlider.current.ownerDocument.defaultView.removeEventListener(
                "mouseup",
                this.OnMouseUp
              ));
        }
        OnKeyDown(e) {
          37 == e.keyCode
            ? (this.props.video.JumpTime(-15), e.preventDefault())
            : 39 == e.keyCode &&
              (this.props.video.JumpTime(15), e.preventDefault());
        }
        AdjustSliderForClientX(e) {
          let t = this.props.video,
            r = t.GetTimelineStartPos(),
            a = t.GetTimelineStartPos() + t.GetTimelineDuration(),
            i = t.GetTimeAtMousePosition(e, this.m_rectSlider, r, a);
          if (this.state.bStartMouseDown) {
            const e = j.a(i, r, t.m_editorEndTime - 5);
            t.m_editorStartTime = e;
          } else if (this.state.bEndMouseDown) {
            const e = j.a(i, t.m_editorStartTime + 5, a);
            t.m_editorEndTime = e;
          } else
            i != this.state.nGrabberMouseDownTime &&
              this.setState({ nGrabberMouseDownTime: i });
        }
        OnMouseHoverMove(e) {
          this.AdjustHoverForClientX(e.clientX);
        }
        OnMouseHoverLeave(e) {
          this.setState({ hoverX: 0 });
        }
        AdjustHoverForClientX(e) {
          let t = this.props.video,
            r = t.GetTimelineStartPos(),
            a = t.GetTimelineStartPos() + t.GetTimelineDuration();
          this.m_rectSlider =
            this.m_elSlider.current &&
            this.m_elSlider.current.getBoundingClientRect();
          t.GetTimeAtMousePosition(e, this.m_rectSlider, r, a);
        }
        OnSegmentClick(e) {
          this.props.video.Seek(e);
        }
        OnMarkerMouseEnter(e) {
          this.setState({ nHoverValue: e });
        }
        OnMarkerMouseLeave() {
          this.setState({ nHoverValue: void 0 });
        }
        render() {
          let e = this.props.video,
            t = this.state.bGrabberMouseDown,
            r = e.GetPercentOffsetFromTime(
              this.state.nGrabberMouseDownTime,
              u.c.Timeline
            ),
            a = e.GetPercentOffsetFromTime(e.GetPlaybackTime(), u.c.Timeline),
            i = e.GetPercentOffsetFromTime(
              e.GetVideoAvailableStartTime(),
              u.c.Timeline
            );
          i < 0.05 && (i = 0);
          let s = j.a(r, 0, 100).toFixed(1) + "%",
            n = j.a(a, 0, 100).toFixed(1) + "%",
            o = j.a(i, 0, 100).toFixed(1) + "%",
            c = {},
            d = {},
            m = {},
            h = {};
          t
            ? ((h.left = s), (c.width = s), (d.width = n), (m.width = o))
            : ((h.left = n), (d.width = n), (m.width = o));
          let b = Object(E.d)(e.GetPlaybackTime()),
            _ = Object(E.d)(this.state.nHoverValue),
            p = "STV_timelineContainer";
          this.state.bGrabberMouseDown && (p += " grabberDown"),
            e.IsTimelineMapActive() && (p += " minimapActive");
          let g = "";
          (r = t ? r : a),
            r > 100
              ? (g = " grabberOffScreenRight grabberOffscreen")
              : r < 0 && (g = " grabberOffScreenLeft grabberOffscreen");
          let B = [];
          e.GetTimelineMarkers().forEach((t, r) => {
            let a = e.GetPercentOffsetFromTime(t.nTime, u.c.Timeline);
            a < 0 ||
              a > 100 ||
              B.push(
                l.createElement(Z, {
                  key: r,
                  pos: a,
                  label: t.strTemplateName,
                  onMouseEnter: this.OnMarkerMouseEnter,
                  onMouseLeave: this.OnMarkerMouseLeave,
                })
              );
          });
          let S = [];
          e.GetTimelineSegments().forEach((t, r) => {
            let a = e.GetPercentOffsetFromTime(t.nTimeStart, u.c.Timeline);
            if (a > 100) return;
            let i = e.GetPercentOffsetFromTime(t.nTimeEnd, u.c.Timeline);
            i < 0 ||
              S.push(
                l.createElement(ee, {
                  key: r,
                  startPos: a,
                  endPos: i,
                  label: t.strTemplateName,
                  color: t.color,
                  onClick: (e) => this.OnSegmentClick(t.nTimeStart),
                })
              );
          });
          const y = e.GetPercentOffsetFromTime(
              e.m_editorStartTime,
              u.c.Timeline
            ),
            f = e.GetPercentOffsetFromTime(e.m_editorEndTime, u.c.Timeline),
            v = this.props.bIncludeClipEditor
              ? [
                  l.createElement(Z, {
                    key: "start",
                    pos: y,
                    label: Object(T.f)("#DASHPlayerControls_Start"),
                    onMouseEnter: this.OnMarkerMouseEnter,
                    onMouseLeave: this.OnMarkerMouseLeave,
                    onMouseDown: (e) => this.OnMouseDown(e, "start"),
                  }),
                  l.createElement(Z, {
                    key: "end",
                    pos: f,
                    label: Object(T.f)("#DASHPlayerControls_End"),
                    onMouseEnter: this.OnMarkerMouseEnter,
                    onMouseLeave: this.OnMarkerMouseLeave,
                    onMouseDown: (e) => this.OnMouseDown(e, "end"),
                  }),
                ]
              : [];
          return l.createElement(
            "div",
            {
              className: "videoTimelineMain",
              tabIndex: 0,
              onKeyDown: this.OnKeyDown,
            },
            l.createElement(
              "div",
              { className: p },
              l.createElement("div", { className: "DialogLabel" }, b),
              l.createElement(
                "div",
                { className: "STV_timelineSegmentsContainer" },
                S
              ),
              l.createElement(
                "div",
                {
                  onMouseDown: this.OnMouseDown,
                  onMouseMove: this.OnMouseHoverMove,
                  onMouseLeave: this.OnMouseHoverLeave,
                  ref: this.m_elSlider,
                },
                l.createElement(
                  "div",
                  { className: "VideoTimelineSlider" },
                  l.createElement("div", {
                    className: "STV_timelineValue",
                    style: c,
                  }),
                  l.createElement("div", {
                    className: "STV_timelineGhostValue",
                    style: d,
                  }),
                  l.createElement("div", {
                    className: "STV_timelineNoVideo",
                    style: m,
                  }),
                  B,
                  v,
                  Boolean(this.state.hoverX) &&
                    l.createElement(
                      "div",
                      {
                        key: "grabbertime",
                        style: {
                          position: "absolute",
                          left: this.state.hoverX - 75,
                          bottom: "30px",
                        },
                      },
                      l.createElement(
                        "div",
                        {
                          style: {
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                          },
                        },
                        this.state.thumbnailURL &&
                          l.createElement("img", {
                            style: { width: "150px" },
                            src: this.state.thumbnailURL,
                          }),
                        l.createElement(
                          "span",
                          {
                            className: "STV_timelineGrabberValue",
                            style: { position: "absolute", bottom: "4px" },
                          },
                          _
                        )
                      )
                    ),
                  l.createElement(
                    "div",
                    { className: "STV_timelineGrabber_Wrapper", style: h },
                    l.createElement(
                      "div",
                      { className: "STV_timelineGrabber" + g },
                      l.createElement(
                        "div",
                        { className: "STV_timelineGrabberArrow" },
                        l.createElement(M.Z, null)
                      )
                    )
                  )
                )
              )
            )
          );
        }
      };
      Object(a.b)([b.b], te.prototype, "OnMouseDown", null),
        Object(a.b)([b.b], te.prototype, "OnMouseMove", null),
        Object(a.b)([b.b], te.prototype, "OnMouseUp", null),
        Object(a.b)([b.b], te.prototype, "OnKeyDown", null),
        Object(a.b)([b.b], te.prototype, "OnMouseHoverMove", null),
        Object(a.b)([b.b], te.prototype, "OnMouseHoverLeave", null),
        Object(a.b)([b.b], te.prototype, "AdjustHoverForClientX", null),
        Object(a.b)([b.b], te.prototype, "OnSegmentClick", null),
        Object(a.b)([b.b], te.prototype, "OnMarkerMouseEnter", null),
        Object(a.b)([b.b], te.prototype, "OnMarkerMouseLeave", null),
        (te = Object(a.b)([o.a], te));
      let re = class extends l.Component {
        constructor() {
          super(...arguments), (this.state = { info: null });
        }
        static getDerivedStateFromProps(e, t) {
          if (
            (!t.info || t.info.m_steamIDBroadcast !== e.steamID) &&
            (t.info && (u.a.StopInfo(t.info), (t.info = null)), e.steamID)
          ) {
            return { info: u.a.StartInfo(e.steamID) };
          }
          return null;
        }
        componentWillUnmount() {
          this.state.info && u.a.StopInfo(this.state.info);
        }
        RenderStreamSwitcher() {
          const e = this.props.steamID;
          return F.a.stream[e]
            ? l.createElement(ae, {
                value: e,
                options: F.a.stream,
                onChange: this.props.onLocalStreamChange,
              })
            : null;
        }
        render() {
          let { info: e } = this.state;
          if (!e) return null;
          let t = "";
          e.m_nViewerCount &&
            (t = e.m_nViewerCount.toLocaleString(T.e.GetPreferredLocales()));
          let r = F.a.bValid && F.a.stream && F.a.stream[e.m_steamIDBroadcast],
            a =
              !this.props.bHideThumbnail &&
              this.props.bVerticalBroadcastChat &&
              (parseInt(e.m_strAppId) > 0 || r);
          return l.createElement(
            "div",
            { className: "BroadcastDetails" },
            !this.props.bHideThumbnail &&
              l.createElement(v, {
                className: "broadcastDetailsThumbBlur",
                src: e.m_strThumbnailUrl,
                draggable: !1,
                duration: 2500,
              }),
            l.createElement(
              "div",
              { className: "BroadcastDetailsHeader" },
              e &&
                e.m_strAppTitle &&
                l.createElement(
                  "div",
                  { className: "displayColumn" },
                  l.createElement(
                    "div",
                    { className: "Info" },
                    l.createElement(
                      "span",
                      { className: "AppTitle" },
                      e.m_strAppTitle
                    ),
                    e.m_strTitle &&
                      l.createElement(
                        "span",
                        { className: "BroadcastTitle" },
                        " - ",
                        e.m_strTitle
                      ),
                    this.props.onLocalStreamChange &&
                      this.RenderStreamSwitcher()
                  ),
                  t &&
                    l.createElement(
                      "div",
                      { className: "BroadcastDetailsHeader_ViewerCount" },
                      l.createElement(M.vb, null),
                      Object(T.l)("#Broadcast_ViewerCount", t)
                    )
                ),
              r &&
                this.props.onOpenLinkInNewWindow &&
                l.createElement(
                  "div",
                  { className: "Actions" },
                  l.createElement(
                    "div",
                    {
                      onClick: (e) =>
                        this.props.onOpenLinkInNewWindow(e, F.a.link),
                      className: "BroadcastLink",
                    },
                    F.a.linkName
                  )
                )
            ),
            a &&
              l.createElement(C.j, {
                id:
                  F.a.bValid && F.a.stream && F.a.stream[e.m_steamIDBroadcast]
                    ? F.a.appID
                    : parseInt(e.m_strAppId),
                type: "game",
              })
          );
        }
      };
      re = Object(a.b)([o.a], re);
      class ae extends l.Component {
        showContextMenu(e) {
          const { options: t, value: r, onChange: a } = this.props,
            i = Object.keys(t).map((e) =>
              l.createElement(
                g.b,
                { key: e, onSelected: () => a(e), bChecked: e === r },
                Object(T.f)(t[e])
              )
            );
          Object(d.a)(l.createElement(g.c, null, i), e);
        }
        render() {
          const { value: e, options: t } = this.props,
            r = t[e];
          return l.createElement(
            "div",
            { className: "BroadcastLanguage", onClick: this.showContextMenu },
            l.createElement("span", null, " - ", Object(T.f)(r)),
            l.createElement(
              "div",
              { className: "ContextMenuButton" },
              l.createElement(M.s, null)
            )
          );
        }
      }
      Object(a.b)([b.b], ae.prototype, "showContextMenu", null);
      let ie = class extends l.Component {
        constructor(e) {
          super(e), (this.state = { sizableRegion: [] });
        }
        AddLinkRegion() {
          return Object(a.a)(this, void 0, void 0, function* () {
            let e = this.state.sizableRegion.length;
            this.state.sizableRegion.push({
              xPosPct: 2.5 + e,
              yPosPct: 2.5 + e,
              widthPct: 20,
              heightPct: 15,
            }),
              this.setState({ sizableRegion: this.state.sizableRegion }, () =>
                this.OnSaveRegions()
              );
          });
        }
        componentDidUpdate(e) {
          0 == e.linkRegions.length &&
            this.props.linkRegions.forEach((e, t) => {
              this.LoadLinkRegion(e, t);
            });
        }
        LoadLinkRegion(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            this.state.sizableRegion.length;
            this.state.sizableRegion.push({
              xPosPct: e.left,
              yPosPct: e.top,
              widthPct: e.width,
              heightPct: e.height,
              link_url: e.url,
              link_description: e.link_description,
              link_index: e.link_index,
            }),
              yield this.setState({ sizableRegion: this.state.sizableRegion });
          });
        }
        OnSaveRegions() {
          let e;
          e = { links: [] };
          for (let t = 0; t < this.state.sizableRegion.length; t++) {
            let r;
            (r = {
              left: Math.floor(100 * this.state.sizableRegion[t].xPosPct),
              top: Math.floor(100 * this.state.sizableRegion[t].yPosPct),
              width: Math.floor(100 * this.state.sizableRegion[t].widthPct),
              height: Math.floor(100 * this.state.sizableRegion[t].heightPct),
              url: this.state.sizableRegion[t].link_url,
              link_description: this.state.sizableRegion[t].link_description,
              link_index: t,
            }),
              e.links.push(r);
          }
          this.props.onSaveLinkRegions(e);
        }
        DeleteRegion(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            this.state.sizableRegion.splice(e, 1),
              console.log("keys: ", this.state.sizableRegion.keys),
              this.setState({ sizableRegion: this.state.sizableRegion }, () =>
                this.OnSaveRegions()
              );
          });
        }
        UpdatePanel(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            (this.state.sizableRegion[e] = t),
              this.setState({ sizableRegion: this.state.sizableRegion }, () =>
                this.OnSaveRegions()
              );
          });
        }
        render() {
          return l.createElement(
            "div",
            { className: "LinkOverlayContainer" },
            l.createElement(
              "div",
              { className: "LinkOverlayValidRegion" },
              !this.props.editMode && this.props.linkRegions
                ? this.props.linkRegions.map((e) => {
                    const t = Object(c.b)(e.url);
                    return l.createElement(
                      O.c,
                      {
                        key: e.link_index,
                        href: e.url,
                        bForceExternal: t,
                        bUseLinkFilter: t,
                      },
                      l.createElement(
                        "div",
                        {
                          className: "LinkRegion",
                          style: {
                            left: e.left + "%",
                            top: e.top + "%",
                            width: e.width + "%",
                            height: e.height + "%",
                          },
                        },
                        l.createElement(
                          "div",
                          { className: "LinkRegionText" },
                          e.link_description,
                          " "
                        )
                      )
                    );
                  })
                : null,
              this.props.editMode &&
                this.state.sizableRegion.map((e, t) =>
                  l.createElement(w.a, {
                    key: 100 * t + e.xPosPct,
                    index: t,
                    deleteFn: this.DeleteRegion,
                    updateFn: this.UpdatePanel,
                    xPosPct: e.xPosPct,
                    yPosPct: e.yPosPct,
                    widthPct: e.widthPct,
                    heightPct: e.heightPct,
                    link_url: e.link_url,
                    link_description: e.link_description,
                  })
                ),
              this.props.editMode &&
                l.createElement(
                  "div",
                  { className: "AddLinkRegion", onClick: this.AddLinkRegion },
                  Object(T.f)("#SteamTV_AddLinkRegion")
                )
            ),
            l.createElement(
              "div",
              { className: "LinkOverlayInvalidRegion" },
              l.createElement(
                "div",
                null,
                Object(T.f)("#SteamTV_LinkRegionReserved")
              )
            )
          );
        }
      };
      Object(a.b)([b.b], ie.prototype, "AddLinkRegion", null),
        Object(a.b)([b.b], ie.prototype, "LoadLinkRegion", null),
        Object(a.b)([b.b], ie.prototype, "OnSaveRegions", null),
        Object(a.b)([b.b], ie.prototype, "DeleteRegion", null),
        Object(a.b)([b.b], ie.prototype, "UpdatePanel", null),
        (ie = Object(a.b)([o.a], ie));
    },
  },
]);

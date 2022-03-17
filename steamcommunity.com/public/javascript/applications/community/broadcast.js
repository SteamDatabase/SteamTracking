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
          return $;
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
        _ = (r("sRB7"), r("b3LC")),
        h = r("NKJh"),
        b = r("zjj+"),
        B = r("RQmk"),
        p = r("dfs5"),
        g = r("0OaU"),
        y = r("exH9"),
        f = r("lkRc"),
        S = r("kyHq"),
        w = r("dLk7"),
        M = r.n(w);
      const C = Object(n.a)((e) => {
        const { appid: t } = e,
          r = Object(p.c)(),
          a = Object(l.useRef)({ include_assets: !0, include_release: !0 }),
          [i, s] = Object(_.b)(t, a.current);
        let n = M.a.StoreSaleWidgetContainer_mini,
          o = M.a.StoreSaleWidgetImage_mini,
          d = M.a.StoreSaleImage_mini;
        if (!i && 2 != s)
          return c.a.createElement(
            "div",
            { className: n },
            c.a.createElement(g.a, { size: "medium" }),
            ";"
          );
        if (2 == s || !i.GetName())
          return c.a.createElement("div", {
            className: h.StoreSaleWidgetEmptyContainer,
          });
        const m = 8 != i.GetAppType(),
          S = Object(u.b)(i.GetStorePageURL(), r);
        return c.a.createElement(
          "div",
          { className: n },
          c.a.createElement(
            "div",
            { className: h.Actions },
            c.a.createElement(
              "a",
              { href: S, target: f.c.IN_CLIENT ? void 0 : "_blank" },
              c.a.createElement(
                B.b,
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
            { className: h.StoreSaleBroadcastWidgetRight },
            c.a.createElement(
              "div",
              { className: h.Actions },
              c.a.createElement(
                "a",
                { href: S, target: f.c.IN_CLIENT ? void 0 : "_blank" },
                c.a.createElement(
                  B.b,
                  { type: "app", id: t },
                  c.a.createElement(
                    "div",
                    {
                      className: Object(y.a)(
                        h.StoreSaleWidgetTitle,
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
              { className: h.StoreSaleWidgetRelease },
              i.GetFormattedSteamReleaseDate()
            ),
            Boolean(m) &&
              c.a.createElement(b.c, {
                info: { id: t, type: "game" },
                bShowDemoButton: !0,
              })
          )
        );
      });
      r("kdZy"), r("wogL");
      var v = r("1BdX"),
        z = r("boaH"),
        R = r("nWbB"),
        O = (r("Bniq"), r("5L1o")),
        F = r("02Wr"),
        T = r("MnIK"),
        j = r("6Y59"),
        W = r("d+Me"),
        I = r("TLQK"),
        E = r("opsS"),
        x = (r("pKbv"), r("kLLr")),
        N = (r("3+zv"), r("uIWk")),
        P = r("rKv1"),
        U = r.n(P);
      const D = Object(n.a)((e) => {
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
                const t = x.a.InitFromClanID(r),
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
          f.c.COMMUNITY_BASE_URL +
          "gid/" +
          t.jsondata.broadcast_item_drops_details_clan_accountid +
          "/partnerevents/view/" +
          t.jsondata.broadcast_item_drops_details_event_gid;
        return c.a.createElement(
          "div",
          { className: U.a.item_drop_ctn },
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
                { href: m, target: f.c.IN_CLIENT ? "" : "_blank" },
                Object(I.f)("#SalePage_WatchForDrop_LearnMore")
              )
          )
        );
      });
      var G,
        A = r("C4Nl");
      const L = {
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
      };
      let k = (G = class extends c.a.Component {
        constructor() {
          super(...arguments),
            (this.m_cancelSignal = s.a.CancelToken.source()),
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
          return f.c.EREALM != S.g.k_ESteamRealmChina && !f.c.IN_GAMEPADUI;
        }
        componentDidMount() {
          return Object(a.a)(this, void 0, void 0, function* () {
            G.IsBroadcastAllowed() &&
              (yield R.a
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
              yield this.props.bIsPreview && this.props.accountIDs
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
          const t = z.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
          Object(R.e)(t, this.state.bExpanded ? 2 : 3, e.snr);
          const r = this.state.bExpanded;
          window.setTimeout(
            () =>
              this.setState({
                innerStyle: Object.assign(
                  Object.assign({}, this.state.innerStyle),
                  { maxHeight: r ? "0vh" : "100vh" }
                ),
              }),
            10
          ),
            r ||
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
          let i = z.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
            s = c.a.createElement(
              "div",
              { className: U.a.rightPanel },
              c.a.createElement(H, { key: "right" + i, ImgUrl: e.right_panel })
            ),
            n = c.a.createElement(H, { key: "left" + i, ImgUrl: e.left_panel });
          if (i < 11) {
            const t = v.b.GetAppIDListForBroadcasterSteamID(e.steamid);
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
              ((s = c.a.createElement(C, {
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
                (r.rightPanel = c.a.createElement(X, {
                  stream: e,
                  orientation: "rightside",
                })),
                (r.bRightPanelArtworkOrEmpty = !1))
              : ((r.leftPanel = n), (r.rightPanel = s)),
            r
          );
        }
        render() {
          if (!G.IsBroadcastAllowed() || this.state.bLoadingPreference)
            return null;
          let e = R.a.Get().GetPlayReadyStream(this.props);
          if (e) {
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
                  a || Object(S.k)(f.c.LANGUAGE)
                ),
                right_panel: r.GetImageURL(
                  "broadcast_right",
                  a || Object(S.k)(f.c.LANGUAGE)
                ),
                store_title: r.GetBroadcastTitle(
                  a || Object(S.k)(f.c.LANGUAGE)
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
                    className: Object(y.a)({
                      [U.a.bordered_container]: !0,
                      [U.a.Event]: Boolean(r),
                      broadcast_brd_ctn_trgt: !0,
                    }),
                  },
                  c.a.createElement(
                    "div",
                    {
                      className: Object(y.a)(
                        U.a.bordered_title,
                        "bordered_title_trgt"
                      ),
                    },
                    c.a.createElement(O.h, null),
                    n,
                    c.a.createElement(
                      "div",
                      { className: U.a.bordered_corner_container },
                      !this.state.bExpanded &&
                        c.a.createElement("div", {
                          className: U.a.broadcast_settings_icon,
                          "data-tooltip-text": Object(I.f)(
                            "#StoreBroadcast_Change_store_Broadcast_settings"
                          ),
                          onClick: () =>
                            window.open(
                              `${f.c.STORE_BASE_URL}account/preferences/#store_broadcast_settings`
                            ),
                        }),
                      c.a.createElement("div", {
                        className: this.state.bExpanded
                          ? U.a.bordered_corner_expanded
                          : U.a.bordered_corner_shrinked,
                        "data-tooltip-text": Object(I.f)(
                          "#StoreBroadcast_Hide_Tooltip"
                        ),
                        onClick: this.ToggleBroadcastExpandShrink,
                      })
                    ),
                    Boolean(e.gamedata_subtitle) &&
                      c.a.createElement(
                        "div",
                        { className: U.a.bordered_subtitle },
                        e.gamedata_subtitle
                      )
                  ),
                  this.state.bExpanded &&
                    c.a.createElement(
                      "div",
                      {
                        className: Object(y.a)({
                          [U.a.container]: !0,
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
                      c.a.createElement(V, {
                        stream: e,
                        bStartMuted: this.state.bStartMuted,
                        fnRenderBroadcastContext: i,
                        fnOnVideoEnd: l,
                        bWidePlayer: this.props.bWidePlayer,
                      }),
                      s.rightPanel,
                      this.state.bExpanded &&
                        c.a.createElement(q, { stream: e, bMultistream: o })
                    )
                ),
                Boolean(
                  r && r.jsondata && r.jsondata.broadcast_item_drops_enabled
                ) && c.a.createElement(D, { event: r }),
                this.state.bExpanded &&
                  c.a.createElement(
                    "div",
                    { className: `${r ? U.a.Event : ""}` },
                    c.a.createElement(q, { stream: e, bMultistream: o })
                  ),
                c.a.createElement("div", { className: U.a.clear_div })
              )
            );
          }
          return c.a.createElement("div", {
            className: "NoBroadcastAvailable",
          });
        }
      });
      Object(a.b)([E.a], k.prototype, "ToggleBroadcastExpandShrink", null),
        Object(a.b)([E.a], k.prototype, "OnShrinkTransitionEnd", null),
        Object(a.b)([E.a], k.prototype, "onStreamSelect", null),
        Object(a.b)([E.a], k.prototype, "PlayTopNonVOD", null),
        (k = G = Object(a.b)([n.a], k));
      t.default = k;
      class V extends c.a.Component {
        constructor(e) {
          super(e),
            (this.m_iVideoContainerRef = c.a.createRef()),
            (this.state = {
              bPopout: !1,
              bPreventPopup: window.screen.width <= 768,
            });
        }
        CloseBroadcastPopup() {
          const e = z.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
            .m_nAppID;
          Object(R.e)(e, 7, this.props.stream.snr),
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
            { className: U.a.wrapper },
            c.a.createElement(
              W.a,
              { onEnter: this.OnEnter, onLeave: this.OnLeave },
              c.a.createElement(
                "div",
                {
                  className: Object(y.a)({
                    [U.a.video_placeholder]: !0,
                    video_placeholder_trgt: !0,
                    [U.a.WidePlayer]: this.props.bWidePlayer,
                  }),
                  ref: this.m_iVideoContainerRef,
                },
                c.a.createElement(
                  "div",
                  {
                    className: this.state.bPopout
                      ? U.a.broadcast_floating
                      : U.a.video_container,
                  },
                  this.state.bPopout &&
                    c.a.createElement($, {
                      steamIDBroadcast: this.props.stream.steamid,
                      OnPreventPopup: this.CloseBroadcastPopup,
                    }),
                  c.a.createElement(
                    "div",
                    { className: U.a.BroadcastPlayerContainer },
                    c.a.createElement(m.a, {
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
      Object(a.b)([E.a], V.prototype, "CloseBroadcastPopup", null),
        Object(a.b)([E.a], V.prototype, "OnEnter", null),
        Object(a.b)([E.a], V.prototype, "OnLeave", null);
      let q = class extends c.a.Component {
        ConstructBroadcastLink() {
          let e = this.props.stream;
          const t = z.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
            .m_nAppID;
          let r = L.list.find(
            (r) =>
              r.appid == t &&
              (!r.broadcasterAccountID || r.broadcasterAccountID == e.accountid)
          );
          if (r) {
            let e = r.url;
            return (
              (f.c.IN_CLIENT ||
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
              t = f.c.COMMUNITY_BASE_URL + "broadcast/watch/" + e;
            return c.a.createElement(
              "a",
              {
                href: t,
                className: U.a.external_link,
                "data-tooltip-text": Object(I.f)(
                  "#BroadcastWatch_View_Broadcast_Page"
                ),
              },
              c.a.createElement(j.z, null)
            );
          }
        }
        OnToggleChat(e) {
          e.preventDefault();
          const t = z.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
            .m_nAppID;
          Object(R.e)(
            t,
            "show" === R.a.Get().GetChatVisibility() ? 5 : 4,
            this.props.stream.snr
          ),
            R.a.Get().ToggleChatVisibility();
        }
        onWatchBroadcastPage() {
          const e = z.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
            .m_nAppID;
          Object(R.e)(e, 9, this.props.stream.snr);
        }
        render() {
          const e = this.ConstructBroadcastLink(),
            t = "remove" != R.a.Get().GetChatVisibility(),
            r = "hide" === R.a.Get().GetChatVisibility();
          let a = Number.parseInt(
            "" +
              z.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nViewerCount
          );
          return c.a.createElement(
            "div",
            { className: Object(y.a)(U.a.viewer_bar, "viewer_bar") },
            c.a.createElement(
              "div",
              { className: Object(y.a)(U.a.viewer_count, "viewer_count") },
              c.a.createElement(j.vb, null),
              a.toLocaleString(I.e.GetPreferredLocales())
            ),
            c.a.createElement(
              "div",
              { className: Object(y.a)(U.a.viewer_links, "viewer_links") },
              Boolean(t && !r && this.props.bMultistream) &&
                c.a.createElement(
                  "div",
                  { className: U.a.chat_link },
                  c.a.createElement(
                    "a",
                    {
                      href: "#",
                      className: U.a.ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    Object(I.f)("#sale_three_section_show_streams")
                  )
                ),
              t &&
                c.a.createElement(
                  "div",
                  { className: U.a.chat_link },
                  c.a.createElement(j.l, null),
                  c.a.createElement(
                    "a",
                    {
                      href: "#",
                      className: U.a.ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    Object(I.f)(
                      r
                        ? "#sale_three_section_show_chat"
                        : "#sale_three_section_hide_chat"
                    )
                  )
                ),
              t && c.a.createElement("span", { className: U.a.ChatToggle }),
              c.a.createElement(
                "a",
                {
                  href:
                    f.c.STORE_BASE_URL +
                    "account/preferences/#store_broadcast_settings",
                  target: f.c.IN_CLIENT ? void 0 : "_blank",
                  className: U.a.settings_link,
                  "data-tooltip-text": Object(I.f)(
                    "#StoreBroadcast_Change_store_Broadcast_settings"
                  ),
                },
                c.a.createElement(j.bb, null)
              ),
              e
            )
          );
        }
      };
      Object(a.b)([E.a], q.prototype, "OnToggleChat", null),
        Object(a.b)([E.a], q.prototype, "onWatchBroadcastPage", null),
        (q = Object(a.b)([n.a], q));
      class H extends c.a.Component {
        render() {
          let e = this.props.ImgUrl;
          return c.a.createElement(
            c.a.Fragment,
            null,
            e &&
              c.a.createElement("img", {
                className: U.a.side_panels,
                src: this.props.ImgUrl,
              }),
            !e && c.a.createElement("div", { className: U.a.side_panels })
          );
        }
      }
      const $ = Object(n.a)((e) => {
        const { steamIDBroadcast: t } = e,
          r = z.a.GetOrCreateBroadcastInfo(t).m_nAppID,
          [a] = Object(_.b)(r, {});
        return c.a.createElement(
          "div",
          { className: [U.a.PopOutVideoTitleBar, U.a.NoSeslect].join(" ") },
          Boolean(a)
            ? c.a.createElement(
                B.a,
                { type: "app", id: r, className: U.a.PopOutVideoTitleText },
                Object(I.f)("#StoreBroadcast_Detault_popout_Title")
              )
            : c.a.createElement(
                "div",
                { className: U.a.PopOutVideoTitleText },
                Object(I.f)("#StoreBroadcast_Detault_popout_Title")
              ),
          c.a.createElement(
            "button",
            {
              className: U.a.PopOutVideoCloseButton,
              "data-tooltip-text": Object(I.f)(
                "#StoreBroadcast_close_broadcast_popup"
              ),
              onClick: e.OnPreventPopup,
            },
            c.a.createElement(j.zb, null)
          )
        );
      });
      function K(e, t) {
        var r;
        const a = z.a.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
          i = A.a.Get().GetApp(a);
        return e &&
          (null === (r = null == i ? void 0 : i.GetAssets()) || void 0 === r
            ? void 0
            : r.GetHeaderURL())
          ? parseInt(U.a.strStreamIconCapsuleArtHeight)
          : parseInt(U.a.strStreamIconScreenshotArtHeight);
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
                .map((e) => z.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID)
                .filter(Boolean);
              A.a
                .Get()
                .QueueMultipleAppRequests(e, { include_assets: !0 })
                .then(() => {
                  if (n.current) {
                    let e = 0;
                    for (const r of o) {
                      if (t.accountid == r.accountid) break;
                      e += K(i, r);
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
              className: Object(y.a)({
                [U.a.side_panels]: !0,
                side_panels: !0,
                [U.a.multistream]: !0,
                [U.a.scrollingstreams]: o.length > 3,
              }),
            },
            o.map((e) => {
              var a;
              return c.a.createElement(J, {
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
      function J(e) {
        var t;
        const {
            onStreamSelect: r,
            bSelected: a,
            stream: i,
            bShowCapsuleArt: s,
          } = e,
          n = Object(o.d)(
            () => z.a.GetOrCreateBroadcastInfo(i.steamid).m_nAppID
          ),
          [l] = Object(_.b)(
            null !== (t = i.nAppIDVOD) && void 0 !== t ? t : n,
            { include_assets: !0 }
          );
        if (!Object(R.d)(i)) return null;
        const d = s && (null == l ? void 0 : l.GetAssets().GetHeaderURL()),
          m = Number.parseInt("" + i.viewer_count),
          u = !Number.isNaN(m),
          h = !!i.nAppIDVOD && (null == l ? void 0 : l.GetName());
        return c.a.createElement(
          "div",
          {
            className: Object(y.a)({
              [U.a.stream_icon_and_viewer_container]: !0,
              [U.a.stream_featured]:
                i.current_selection_priority == R.b.k_eFeatured,
              [U.a.display_capsule_art]: Boolean(d),
            }),
          },
          c.a.createElement(
            B.b,
            { type: "app", id: n },
            c.a.createElement(
              T.a,
              {
                className: U.a.stream_icon_container,
                onClick: () => r && r(i),
                rootMargin: "100px 0px 100px 0px",
              },
              c.a.createElement(Q, {
                strThumbnail: i.thumbnail_http_address,
                bSelected: a,
                strCapsuleArtURL: d,
              }),
              a &&
                c.a.createElement("div", { className: U.a.stream_icon_arrow })
            )
          ),
          c.a.createElement(
            "div",
            { className: Object(y.a)(U.a.viewer_count, !u && U.a.vod_title) },
            u
              ? c.a.createElement(
                  c.a.Fragment,
                  null,
                  c.a.createElement(j.vb, null),
                  " ",
                  m.toLocaleString(I.e.GetPreferredLocales())
                )
              : h
          )
        );
      }
      function Q(e) {
        const { strCapsuleArtURL: t, strThumbnail: r, bSelected: a } = e,
          i = a ? U.a.stream_icon_selected : U.a.stream_icon;
        if (t) {
          const e = [t];
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement("img", {
              className: Object(y.a)(i, U.a.stream_icon_hide_on_hover),
              src: t,
            }),
            c.a.createElement(F.b, {
              className: Object(y.a)(i, U.a.stream_icon_show_on_hover),
              srcs: e,
            })
          );
        }
        return c.a.createElement("img", { className: i, src: r });
      }
      function X(e) {
        const { stream: t, orientation: r } = e,
          a = "below" == r,
          i = Object(o.d)(() => z.a.GetBroadcast(t.steamid));
        return i
          ? c.a.createElement(
              "div",
              {
                className: Object(y.a)({
                  [U.a.chat_below_container]: a,
                  [U.a.chat_rightside_container]: !a,
                  [U.a.store_chat_ctn]: !0,
                }),
              },
              c.a.createElement(
                "div",
                { className: U.a.ChatContainer },
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
        _ = r.n(u),
        h = r("y+6m"),
        b = r("Mgs7"),
        B = r("Gorr"),
        p = r("0QoN"),
        g = r("BFsE"),
        y = r("gPCo"),
        f = r("5znp"),
        S = r.n(f);
      const w = () =>
          o.a.createElement(
            "div",
            { className: S.a.FriendsListInsetShadowCtn },
            o.a.createElement("div", {
              className: S.a.FriendListInsetShadowTop,
            })
          ),
        M = () =>
          o.a.createElement(
            "div",
            { className: S.a.FriendsListInsetShadowCtn },
            o.a.createElement("div", {
              className: S.a.FriendListInsetShadowBottom,
            })
          );
      var C = r("6Y59"),
        v = r("exH9"),
        z = r("TLQK"),
        R = r("opsS"),
        O = r("lkRc"),
        F = r("3sYe"),
        T = r.n(F),
        j = r("A5MU");
      const W = new RegExp("ː([^ː]*)ː", "g"),
        I =
          (new RegExp("(https?://[^ '\"<>]*)", "gi"),
          new RegExp(
            "^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)",
            "i"
          ));
      const E = (e) => {
          const { userType: t, msg: r, presenterInfo: a } = e;
          if ("presenter" === t)
            return n.createElement(
              "span",
              null,
              n.createElement(
                y.b,
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
                    className: Object(v.a)(
                      T.a.MessageName,
                      T.a.MessagePresenter
                    ),
                    href: O.c.COMMUNITY_BASE_URL + "profiles/" + r.steamid,
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
                ? (e = T.a.MessageBroadcaster)
                : "moderator" === t && (e = T.a.MessageModerator),
              n.createElement(
                "span",
                null,
                n.createElement(
                  "a",
                  {
                    className: Object(v.a)(T.a.MessageName, e),
                    href: O.c.COMMUNITY_BASE_URL + "profiles/" + r.steamid,
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
        x = (e) => {
          switch (e.userType) {
            case "presenter":
              return n.createElement(
                "span",
                {
                  className: T.a.RoleFlairContainer,
                  "data-tooltip-text": Object(z.f)(
                    "#BroadcastChat_Role_Presenter_ttip"
                  ),
                },
                n.createElement(C.h, null)
              );
            case "moderator":
              return n.createElement(
                "span",
                {
                  className: T.a.RoleFlairContainer,
                  "data-tooltip-text": Object(z.f)(
                    "#BroadcastChat_Role_Moderatorr_ttip"
                  ),
                },
                n.createElement(C.i, null)
              );
            case "broadcaster":
              return n.createElement(
                "span",
                {
                  className: T.a.RoleFlairContainer,
                  "data-tooltip-text": Object(z.f)(
                    "#BroadcastChat_Role_Broadcaster_ttip"
                  ),
                },
                n.createElement(C.g, null)
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
          let r = W;
          t && (r = this.m_chat.GetUserEmoticons());
          let a = e.split(W);
          const i = [];
          for (let e = 0; e < a.length; e += 1)
            e % 2 == 1
              ? i.push(
                  n.createElement(B.b, {
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
          if (t.type !== j.a.Chat) return null;
          const r = [],
            a = this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID()),
            i = this.m_chat.BIsUserBroadcastModerator(
              this.m_chat.GetUserSteamID()
            );
          if (
            ((O.h && O.h.is_support) || a || i
              ? r.push(
                  n.createElement(
                    h.d,
                    {
                      key: "remove",
                      onSelected: () =>
                        this.m_chat.RemoveUserMessagesServer(
                          t.steamid,
                          t.persona_name
                        ),
                    },
                    Object(z.f)("#BroadcastChat_RemoveMessages")
                  ),
                  n.createElement(
                    h.d,
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
                    Object(z.f)("#BroadcastChat_half_Mute")
                  ),
                  n.createElement(
                    h.d,
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
                    Object(z.f)("#BroadcastChat_day_Mute")
                  ),
                  n.createElement(
                    h.d,
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
                    Object(z.f)("#BroadcastChat_week_Mute")
                  ),
                  n.createElement(
                    h.d,
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
                    Object(z.f)("#BroadcastChat_perm_Mute")
                  ),
                  n.createElement(
                    h.d,
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
                    Object(z.f)("#BroadcastChat_Unmute")
                  )
                )
              : this.m_chat.IsUserMutedLocally(t.steamid)
              ? r.push(
                  n.createElement(
                    h.d,
                    {
                      key: "unmuteuser",
                      onSelected: () =>
                        this.m_chat.UnmuteUserForSession(
                          t.steamid,
                          t.persona_name
                        ),
                    },
                    Object(z.f)("#BroadcastChat_UnmuteLocal")
                  )
                )
              : r.push(
                  n.createElement(
                    h.d,
                    {
                      key: "muteuser",
                      onSelected: () =>
                        this.m_chat.MuteUserForSession(
                          t.steamid,
                          t.persona_name
                        ),
                    },
                    Object(z.f)("#BroadcastChat_MuteLocal")
                  )
                ),
            ((O.h && O.h.is_support) ||
              this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID())) &&
              t.steamid)
          ) {
            this.m_chat.BIsUserBroadcastModerator(t.steamid)
              ? r.push(
                  n.createElement(
                    h.d,
                    {
                      key: "removemod",
                      onSelected: () =>
                        this.m_chat.UpdateBroadcastChatModerator(
                          t.steamid,
                          !1,
                          t.persona_name
                        ),
                    },
                    Object(z.f)("#BroadcastChat_Remove_Moderator")
                  )
                )
              : r.push(
                  n.createElement(
                    h.d,
                    {
                      key: "addmod",
                      onSelected: () =>
                        this.m_chat.UpdateBroadcastChatModerator(
                          t.steamid,
                          !0,
                          t.persona_name
                        ),
                    },
                    Object(z.f)("#BroadcastChat_Add_Moderator")
                  )
                );
          }
          return r.length
            ? Object(l.a)(
                n.createElement(
                  h.c,
                  null,
                  n.createElement(
                    "div",
                    { className: T.a.SelectedUserNameCtn },
                    Object(z.f)("#BroadcastChat_User"),
                    n.createElement("br", null),
                    n.createElement(
                      "span",
                      { className: T.a.SelectedUserName },
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
          return e.type === j.a.Notification
            ? T.a.MessageNotification
            : e.type === j.a.Error
            ? T.a.MessageError
            : T.a.MessageChat;
        }
        FormatMessage(e, t) {
          if (e.type === j.a.Chat) {
            let r = t ? t.FilterText(e.steamid, e.msg) : e.msg;
            return this.AddLinksEmoticons(r, !1);
          }
          return e.msg;
        }
        RenderUserChatLine(e, t, r) {
          let a = r ? r.get(e.steamid) : void 0;
          const i =
            e.type === j.a.Chat
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
            e.type === j.a.Chat && n.createElement(x, { userType: i }),
            e.flair &&
              n.createElement(
                "span",
                { className: T.a.FlairContainer },
                this.AddLinksEmoticons(e.flair, !1)
              ),
            e.type === j.a.Chat &&
              n.createElement(E, { userType: i, msg: e, presenterInfo: a }),
            e.type === j.a.Chat &&
              this.m_chat.GetBroadcastSteamID() === e.steamid &&
              n.createElement(
                "span",
                {
                  className: `${T.a.MessageNotification} ${T.a.MessageContents}`,
                },
                ` (${Object(z.f)("#BroadcastChat_Broadcaster")})`
              ),
            e.type === j.a.Chat &&
              this.m_chat.m_mapChannelModeratorUsers.get(e.steamid) &&
              n.createElement(
                "span",
                {
                  className: `${T.a.MessageNotification} ${T.a.MessageContents}`,
                },
                ` (${Object(z.f)("#BroadcastChat_Moderator")})`
              ),
            n.createElement(
              "span",
              {
                className: `${T.a.MessageContents} ${
                  this.AddLinksEmoticons(e.msg, !1).filter(
                    (e) => e && "string" == typeof e
                  ).length
                    ? ""
                    : T.a.EmoticonsOnly
                }`,
              },
              e.type === j.a.Chat ? " : " : "",
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
              className: Object(v.a)(T.a.ChatPanel, "ChatPanel"),
              style: e ? { display: "none" } : void 0,
            },
            r &&
              !!this.m_chat &&
              n.createElement(P, {
                oChat: this.m_chat,
                emoticonStore: this.props.emoticonStore,
                bPartnerMemberOnlyChat: t,
              }),
            n.createElement(w, null),
            n.createElement(
              "div",
              {
                className: Object(v.a)(
                  `${T.a.ChatMessages} ${_.a.minHeightZero}`,
                  "ChatMessages"
                ),
                onScroll: this.HandleScroll,
                ref: this.messagesContainer,
              },
              i.map((e, t) => this.RenderUserChatLine(e, t, s))
            ),
            n.createElement(M, null),
            !r &&
              !!this.m_chat &&
              n.createElement(P, {
                oChat: this.m_chat,
                emoticonStore: this.props.emoticonStore,
                bPartnerMemberOnlyChat: t,
              })
          );
        }
      };
      function P(e) {
        const { oChat: t, emoticonStore: r, bPartnerMemberOnlyChat: a } = e;
        return !a ||
          ((null === O.h || void 0 === O.h ? void 0 : O.h.logged_in) &&
            (null === O.h || void 0 === O.h ? void 0 : O.h.is_partner_member))
          ? (null === O.h || void 0 === O.h ? void 0 : O.h.logged_in)
            ? n.createElement(U, { oChat: t, emoticonStore: r })
            : null
          : n.createElement(A, null);
      }
      function U(e) {
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
          { className: Object(v.a)(T.a.ChatEntryCtn, "ChatEntryCtn") },
          n.createElement(
            "div",
            { className: Object(v.a)(T.a.ChatEntry, "ChatEntry") },
            n.createElement(
              "form",
              { className: `${_.a.chatEntryControls}` },
              n.createElement("textarea", {
                className: _.a.chatTextarea,
                placeholder: Object(z.f)("#BroadcastChat_EnterResponse"),
                onKeyPress: o,
                onChange: (e) => i(e.target.value),
                value: a,
                ref: s,
              }),
              Boolean(t.m_bRateLimited) &&
                n.createElement(G, {
                  nSeconds: t.m_nRateLimitSeconds,
                  bRateLimited: t.m_bRateLimited,
                }),
              n.createElement(
                "button",
                {
                  className: `${_.a.chatSubmitButton} ${a ? "" : _.a.disabled}`,
                  title: Object(z.f)("#ChatEntryButton_Submit"),
                  disabled: t.m_bRateLimited || 0 == a.trim().length,
                  onClick: () => {
                    t.SendMessage(a), i("");
                  },
                },
                n.createElement(C.mb, null)
              )
            ),
            n.createElement(
              "div",
              {
                style: { height: "50px" },
                className: `${_.a.chatEntryActionsContainer}`,
              },
              n.createElement(
                "div",
                { className: _.a.chatEntryActionsGroup },
                n.createElement(p.a, {
                  disabled: !1,
                  OnEmoticonSelected: l,
                  rtLastAckedNewEmoticons: Number.MAX_VALUE,
                  emoticonStore: r,
                  emoticonHoverStore: m.b,
                }),
                n.createElement(D, Object.assign({}, e, { textInputRef: s }))
              )
            )
          )
        );
      }
      function D(e) {
        var t;
        const { oChat: r, emoticonStore: a, textInputRef: i } = e;
        return r.m_strFlairGroupID &&
          a.flair_list &&
          (null === (t = a.GetFlairListByGroupID(r.m_strFlairGroupID)) ||
          void 0 === t
            ? void 0
            : t.length)
          ? n.createElement(p.a, {
              disabled: !1,
              OnEmoticonSelected: (e) => {
                r.UpdateChatMessageFlair(e),
                  (null == i ? void 0 : i.current) && i.current.focus();
              },
              rtLastAckedNewEmoticons: Number.MAX_VALUE,
              emoticonStore: a,
              emoticonHoverStore: m.b,
              strFlairGroupID: r.m_strFlairGroupID,
              title: Object(z.f)("#ChatEntryButton_Flair"),
              buttonIcon: n.createElement(C.j, null),
            })
          : null;
      }
      Object(a.b)([i.C], N.prototype, "m_chat", void 0),
        Object(a.b)([R.a], N.prototype, "StartChat", null),
        Object(a.b)([R.a], N.prototype, "HandleScroll", null),
        Object(a.b)([R.a], N.prototype, "OnContextMenu", null),
        Object(a.b)([R.a], N.prototype, "RenderUserChatLine", null),
        (N = Object(a.b)([s.a], N));
      class G extends n.Component {
        render() {
          return n.createElement(
            "div",
            { className: T.a.TimedProgressBarContainer },
            n.createElement(
              "div",
              { className: T.a.wrapper },
              n.createElement("div", {
                className: `${T.a.spinner} ${T.a.pie}`,
                style: { animationDuration: `${this.props.nSeconds || 0}s` },
              }),
              n.createElement("div", {
                className: `${T.a.filler} ${T.a.pie}`,
                style: { animationDuration: `${this.props.nSeconds || 0}s` },
              }),
              n.createElement("div", {
                className: T.a.mask,
                style: { animationDuration: `${this.props.nSeconds || 0}s` },
              })
            )
          );
        }
      }
      function A(e) {
        return n.createElement(
          "div",
          { className: T.a.Description },
          n.createElement(
            "div",
            { className: T.a.LogInPrompt },
            Object(z.f)("#Broadcast_PartnerChat_Login")
          ),
          !O.h.logged_in &&
            n.createElement(
              b.d,
              { onClick: g.a, className: Object(v.a)(T.a.SignInButton) },
              Object(z.f)("#Login_SignIn")
            )
        );
      }
    },
    gJzY: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return R;
      });
      var a = r("mrSG"),
        i = r("2vnA"),
        s = r("vDqi"),
        n = r.n(s),
        o = r("bxBv"),
        l = r("hRO2"),
        c = r("OS8t"),
        d = r("2ErG");
      const m = l.Message;
      class u extends m {
        constructor(e = null) {
          super(),
            u.prototype.groupid || c.a(u.M()),
            m.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
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
          return "CFriendsListCategory";
        }
      }
      class _ extends m {
        constructor(e = null) {
          super(),
            _.prototype.categories || c.a(_.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: { categories: { n: 1, c: u, r: !0, q: !0 } },
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
      class h extends m {
        constructor(e = null) {
          super(),
            h.prototype.accountid || c.a(h.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
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
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = c.e(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return c.g(h.M(), e, t);
        }
        static fromObject(e) {
          return c.c(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.b(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.f(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsListFavoriteEntry";
        }
      }
      class b extends m {
        constructor(e = null) {
          super(),
            b.prototype.favorites || c.a(b.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: { favorites: { n: 1, c: h, r: !0, q: !0 } },
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
          return "CFriendsList_GetFavorites_Response";
        }
      }
      class B extends m {
        constructor(e = null) {
          super(), m.initialize(this, e, 0, -1, void 0, null);
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
      class p extends m {
        constructor(e = null) {
          super(),
            p.prototype.favorites || c.a(p.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: { favorites: { n: 1, c: h, r: !0, q: !0 } },
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
          return "CFriendsList_FavoritesChanged_Notification";
        }
      }
      class g extends m {
        constructor(e = null) {
          super(), m.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new g();
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFriendsList_Request";
        }
      }
      class y extends m {
        constructor(e = null) {
          super(),
            y.prototype.friendslist || c.a(y.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: { friendslist: { n: 1, c: d.b } },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = c.e(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return c.g(y.M(), e, t);
        }
        static fromObject(e) {
          return c.c(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.b(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.f(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFriendsList_Response";
        }
      }
      var f, S;
      !(function (e) {
        (e.GetCategories = function (e, t) {
          return e.SendMsg("FriendsList.GetCategories#1", t, _, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
          (e.GetFriendsList = function (e, t) {
            return e.SendMsg("FriendsList.GetFriendsList#1", t, y, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.GetFavorites#1", t, b, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.SetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.SetFavorites#1", t, B, {
              ePrivilege: 1,
            });
          });
      })(f || (f = {})),
        (function (e) {
          e.FavoritesChangedHandler = {
            name: "FriendsListClient.FavoritesChanged#1",
            request: p,
          };
        })(S || (S = {}));
      var w = r("oFam"),
        M = r("kLLr"),
        C = r("lkRc"),
        v = (r("mgoM"), r("75qM"), r("kyHq")),
        z = r("uobO");
      r("AiWL");
      class R {
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
            (this.m_TextFilterPreferences = new v.l());
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
              yield this.LoadLanguage(C.c.LANGUAGE),
              "english" !== C.c.LANGUAGE &&
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
                  let t = { sessionid: C.c.SESSIONID, origin: Object(C.d)() };
                  const r = yield n.a.get(
                    C.c.COMMUNITY_BASE_URL +
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
                    let e = { sessionid: C.c.SESSIONID, origin: Object(C.d)() };
                    const r = yield n.a.get(
                      C.c.COMMUNITY_BASE_URL +
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
            let e = new d.b();
            if (0 !== this.m_unAccountID)
              try {
                if (this.m_Transport) {
                  let t = o.b.Init(g);
                  e = (yield f.GetFriendsList(this.m_Transport, t))
                    .Body()
                    .friendslist();
                } else {
                  let t = { sessionid: C.c.SESSIONID, origin: Object(C.d)() };
                  const r = yield n.a.get(
                    C.c.COMMUNITY_BASE_URL + "textfilter/ajaxgetfriendslist",
                    { params: t, withCredentials: !0 }
                  );
                  e = d.b.fromObject(r.data.friendslist);
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
              C.c.COMMUNITY_CDN_URL
            }textfilter/gettextfilterdictionary?type=banned&language=${e}&v=1&origin=${Object(
              C.d
            )()}`;
            try {
              const e = yield n.a.get(t);
              this.m_strBannedWords += e.data;
            } catch (e) {
              console.error("Failed to load filter dictionary " + t, e);
            }
            t = `${
              C.c.COMMUNITY_CDN_URL
            }textfilter/gettextfilterdictionary?type=profanity&language=${e}&v=1&origin=${Object(
              C.d
            )()}`;
            try {
              const e = yield n.a.get(t);
              this.m_strProfanityWords += e.data;
            } catch (e) {
              console.error("Failed to load filter dictionary " + t, e);
            }
            t = `${
              C.c.COMMUNITY_CDN_URL
            }textfilter/gettextfilterdictionary?type=clean_public&language=${e}&v=1&origin=${Object(
              C.d
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
                Object(z.a)().ReportError(
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
                Object(z.a)().ReportError(
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
      Object(a.b)([i.C], R.prototype, "m_TextFilterPreferences", void 0),
        Object(a.b)([i.C], R.prototype, "m_mapPlayerCache", void 0),
        Object(a.b)([i.C], R.prototype, "m_regexBannedWords", void 0),
        Object(a.b)([i.C], R.prototype, "m_regexCleanWords", void 0),
        Object(a.b)([i.k], R.prototype, "UpdateCommunityPreferences", null),
        Object(a.b)([i.k], R.prototype, "SetFriendsList", null),
        Object(a.b)([i.k], R.prototype, "BRebuildFilter", null);
    },
    gfUn: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return Me;
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
        _ = r("hRO2"),
        h = r("OS8t");
      const b = _.Message;
      class B extends b {
        constructor(e = null) {
          super(),
            B.prototype.broadcast_channel_id || h.a(B.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = h.e(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(B.M(), e, t);
        }
        static fromObject(e) {
          return h.c(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_CreateBroadcastChannel_Response";
        }
      }
      class p extends b {
        constructor(e = null) {
          super(),
            p.prototype.broadcast_channel_id || h.a(p.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                  unique_name: {
                    n: 2,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  steamid: {
                    n: 3,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = h.e(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(p.M(), e, t);
        }
        static fromObject(e) {
          return h.c(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelID_Response";
        }
      }
      class g extends b {
        constructor(e = null) {
          super(), b.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new g();
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SetBroadcastChannelProfile_Response";
        }
      }
      class y extends b {
        constructor(e = null) {
          super(),
            y.prototype.unique_name || h.a(y.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  unique_name: {
                    n: 1,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  owner_steamid: {
                    n: 2,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                  name: { n: 3, br: h.d.readString, bw: h.h.writeString },
                  language: { n: 4, br: h.d.readString, bw: h.h.writeString },
                  headline: { n: 5, br: h.d.readString, bw: h.h.writeString },
                  summary: { n: 6, br: h.d.readString, bw: h.h.writeString },
                  schedule: { n: 7, br: h.d.readString, bw: h.h.writeString },
                  rules: { n: 8, br: h.d.readString, bw: h.h.writeString },
                  panels: { n: 9, br: h.d.readString, bw: h.h.writeString },
                  is_partnered: { n: 10, br: h.d.readBool, bw: h.h.writeBool },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = h.e(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(y.M(), e, t);
        }
        static fromObject(e) {
          return h.c(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelProfile_Response";
        }
      }
      class f extends b {
        constructor(e = null) {
          super(),
            f.prototype.replace_image_hash || h.a(f.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  replace_image_hash: {
                    n: 1,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = h.e(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(f.M(), e, t);
        }
        static fromObject(e) {
          return h.c(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SetBroadcastChannelImage_Response";
        }
      }
      class S extends b {
        constructor(e = null) {
          super(),
            S.prototype.images || h.a(S.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: { images: { n: 1, c: w, r: !0, q: !0 } },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = h.e(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(S.M(), e, t);
        }
        static fromObject(e) {
          return h.c(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelImages_Response";
        }
      }
      class w extends b {
        constructor(e = null) {
          super(),
            w.prototype.image_type || h.a(w.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  image_type: { n: 1, br: h.d.readEnum, bw: h.h.writeEnum },
                  image_path: { n: 2, br: h.d.readString, bw: h.h.writeString },
                  image_index: {
                    n: 3,
                    br: h.d.readUint32,
                    bw: h.h.writeUint32,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = h.e(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(w.M(), e, t);
        }
        static fromObject(e) {
          return h.c(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelImages_Response_Images";
        }
      }
      class M extends b {
        constructor(e = null) {
          super(),
            M.prototype.links || h.a(M.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: { links: { n: 1, c: C, r: !0, q: !0 } },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = h.e(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(M.M(), e, t);
        }
        static fromObject(e) {
          return h.c(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelLinks_Response";
        }
      }
      class C extends b {
        constructor(e = null) {
          super(),
            C.prototype.link_index || h.a(C.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  link_index: { n: 1, br: h.d.readUint32, bw: h.h.writeUint32 },
                  url: { n: 2, br: h.d.readString, bw: h.h.writeString },
                  link_description: {
                    n: 3,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  left: { n: 4, br: h.d.readUint32, bw: h.h.writeUint32 },
                  top: { n: 5, br: h.d.readUint32, bw: h.h.writeUint32 },
                  width: { n: 6, br: h.d.readUint32, bw: h.h.writeUint32 },
                  height: { n: 7, br: h.d.readUint32, bw: h.h.writeUint32 },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = h.e(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(C.M(), e, t);
        }
        static fromObject(e) {
          return h.c(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelLinks_Response_Links";
        }
      }
      class v extends b {
        constructor(e = null) {
          super(), b.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new v();
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SetBroadcastChannelLinkRegions_Response";
        }
      }
      class z extends b {
        constructor(e = null) {
          super(),
            z.prototype.is_live || h.a(z.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  is_live: { n: 1, br: h.d.readBool, bw: h.h.writeBool },
                  is_disabled: { n: 2, br: h.d.readBool, bw: h.h.writeBool },
                  appid: { n: 3, br: h.d.readUint32, bw: h.h.writeUint32 },
                  viewers: {
                    n: 4,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  views: {
                    n: 5,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  broadcaster_steamid: {
                    n: 6,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                  thumbnail_url: {
                    n: 7,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  followers: {
                    n: 8,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  subscribers: {
                    n: 9,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  unique_name: {
                    n: 10,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  broadcast_session_id: {
                    n: 11,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = h.e(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(z.M(), e, t);
        }
        static fromObject(e) {
          return h.c(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelStatus_Response";
        }
      }
      class R extends b {
        constructor(e = null) {
          super(),
            R.prototype.broadcast_channel_id || h.a(R.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                  unique_name: {
                    n: 2,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  name: { n: 3, br: h.d.readString, bw: h.h.writeString },
                  appid: { n: 4, br: h.d.readUint32, bw: h.h.writeUint32 },
                  viewers: {
                    n: 5,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  views: {
                    n: 6,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  thumbnail_url: {
                    n: 7,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  followers: {
                    n: 8,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  headline: { n: 9, br: h.d.readString, bw: h.h.writeString },
                  avatar_url: {
                    n: 10,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  broadcaster_steamid: {
                    n: 11,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                  subscribers: {
                    n: 12,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  background_url: {
                    n: 13,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  is_featured: { n: 14, br: h.d.readBool, bw: h.h.writeBool },
                  is_disabled: { n: 15, br: h.d.readBool, bw: h.h.writeBool },
                  is_live: { n: 16, br: h.d.readBool, bw: h.h.writeBool },
                  language: { n: 17, br: h.d.readString, bw: h.h.writeString },
                  reports: { n: 18, br: h.d.readUint32, bw: h.h.writeUint32 },
                  is_partnered: { n: 19, br: h.d.readBool, bw: h.h.writeBool },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = h.e(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(R.M(), e, t);
        }
        static fromObject(e) {
          return h.c(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "GetBroadcastChannelEntry";
        }
      }
      class O extends b {
        constructor(e = null) {
          super(),
            O.prototype.results || h.a(O.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: { results: { n: 1, c: R, r: !0, q: !0 } },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = h.e(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(O.M(), e, t);
        }
        static fromObject(e) {
          return h.c(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetFollowedChannels_Response";
        }
      }
      class F extends b {
        constructor(e = null) {
          super(),
            F.prototype.results || h.a(F.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: { results: { n: 1, c: R, r: !0, q: !0 } },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = h.e(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(F.M(), e, t);
        }
        static fromObject(e) {
          return h.c(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetSubscribedChannels_Response";
        }
      }
      class T extends b {
        constructor(e = null) {
          super(),
            T.prototype.is_followed || h.a(T.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  is_followed: { n: 1, br: h.d.readBool, bw: h.h.writeBool },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = h.e(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(T.M(), e, t);
        }
        static fromObject(e) {
          return h.c(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_FollowBroadcastChannel_Response";
        }
      }
      class j extends b {
        constructor(e = null) {
          super(),
            j.prototype.is_subscribed || h.a(j.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  is_subscribed: { n: 1, br: h.d.readBool, bw: h.h.writeBool },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = h.e(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(j.M(), e, t);
        }
        static fromObject(e) {
          return h.c(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SubscribeBroadcastChannel_Response";
        }
      }
      class W extends b {
        constructor(e = null) {
          super(), b.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new W();
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_ReportBroadcastChannel_Response";
        }
      }
      class I extends b {
        constructor(e = null) {
          super(),
            I.prototype.is_followed || h.a(I.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  is_followed: { n: 1, br: h.d.readBool, bw: h.h.writeBool },
                  is_subscribed: { n: 2, br: h.d.readBool, bw: h.h.writeBool },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = h.e(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(I.M(), e, t);
        }
        static fromObject(e) {
          return h.c(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelInteraction_Response";
        }
      }
      class E extends b {
        constructor(e = null) {
          super(),
            E.prototype.appid || h.a(E.M()),
            b.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  appid: { n: 1, br: h.d.readUint32, bw: h.h.writeUint32 },
                  name: { n: 2, br: h.d.readString, bw: h.h.writeString },
                  image: { n: 3, br: h.d.readString, bw: h.h.writeString },
                  viewers: {
                    n: 4,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  channels: { n: 5, c: R, r: !0, q: !0 },
                  release_date: {
                    n: 6,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  developer: { n: 7, br: h.d.readString, bw: h.h.writeString },
                  publisher: { n: 8, br: h.d.readString, bw: h.h.writeString },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = h.e(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(E.M(), e, t);
        }
        static fromObject(e) {
          return h.c(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_Game";
        }
      }
      class x extends b {
        constructor(e = null) {
          super(),
            x.prototype.results || h.a(x.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: { results: { n: 1, c: E, r: !0, q: !0 } },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = h.e(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(x.M(), e, t);
        }
        static fromObject(e) {
          return h.c(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetGames_Response";
        }
      }
      class N extends b {
        constructor(e = null) {
          super(),
            N.prototype.results || h.a(N.M()),
            b.initialize(this, e, 0, -1, [1], null);
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
          return N.sm_mbf || (N.sm_mbf = h.e(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(N.M(), e, t);
        }
        static fromObject(e) {
          return h.c(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetChannels_Response";
        }
      }
      class P extends b {
        constructor(e = null) {
          super(),
            P.prototype.broadcasters || h.a(P.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: { broadcasters: { n: 1, c: U, r: !0, q: !0 } },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = h.e(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(P.M(), e, t);
        }
        static fromObject(e) {
          return h.c(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelBroadcasters_Response";
        }
      }
      class U extends b {
        constructor(e = null) {
          super(),
            U.prototype.steamid || h.a(U.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  steamid: {
                    n: 1,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                  name: { n: 2, br: h.d.readString, bw: h.h.writeString },
                  rtmp_token: { n: 3, br: h.d.readString, bw: h.h.writeString },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = h.e(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(U.M(), e, t);
        }
        static fromObject(e) {
          return h.c(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster";
        }
      }
      class D extends b {
        constructor(e = null) {
          super(),
            D.prototype.issuer_steamid || h.a(D.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  issuer_steamid: {
                    n: 1,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                  chatter_steamid: {
                    n: 2,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                  time_expires: {
                    n: 3,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  permanent: { n: 4, br: h.d.readBool, bw: h.h.writeBool },
                  name: { n: 5, br: h.d.readString, bw: h.h.writeString },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = h.e(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(D.M(), e, t);
        }
        static fromObject(e) {
          return h.c(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_ChatBan";
        }
      }
      class G extends b {
        constructor(e = null) {
          super(),
            G.prototype.broadcast_channel_id || h.a(G.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                  chatter_steamid: {
                    n: 2,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                  duration: { n: 3, br: h.d.readUint32, bw: h.h.writeUint32 },
                  permanent: { n: 4, br: h.d.readBool, bw: h.h.writeBool },
                  undo: { n: 5, br: h.d.readBool, bw: h.h.writeBool },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = h.e(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(G.M(), e, t);
        }
        static fromObject(e) {
          return h.c(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AddChatBan_Request";
        }
      }
      class A extends b {
        constructor(e = null) {
          super(), b.initialize(this, e, 0, -1, void 0, null);
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
          let t = new _.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AddChatBan_Response";
        }
      }
      class L extends b {
        constructor(e = null) {
          super(),
            L.prototype.results || h.a(L.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: { results: { n: 1, c: D, r: !0, q: !0 } },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = h.e(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(L.M(), e, t);
        }
        static fromObject(e) {
          return h.c(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetChatBans_Response";
        }
      }
      class k extends b {
        constructor(e = null) {
          super(), b.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new k();
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AddChatModerator_Response";
        }
      }
      class V extends b {
        constructor(e = null) {
          super(),
            V.prototype.broadcast_channel_id || h.a(V.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = h.e(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(V.M(), e, t);
        }
        static fromObject(e) {
          return h.c(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetChatModerators_Request";
        }
      }
      class q extends b {
        constructor(e = null) {
          super(),
            q.prototype.steamid || h.a(q.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  steamid: {
                    n: 1,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                  name: { n: 2, br: h.d.readString, bw: h.h.writeString },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = h.e(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(q.M(), e, t);
        }
        static fromObject(e) {
          return h.c(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_ChatModerator";
        }
      }
      class H extends b {
        constructor(e = null) {
          super(),
            H.prototype.results || h.a(H.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: { results: { n: 1, c: q, r: !0, q: !0 } },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = h.e(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(H.M(), e, t);
        }
        static fromObject(e) {
          return h.c(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetChatModerators_Response";
        }
      }
      class $ extends b {
        constructor(e = null) {
          super(), b.initialize(this, e, 0, -1, void 0, null);
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
          let t = new _.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AddWordBan_Response";
        }
      }
      class K extends b {
        constructor(e = null) {
          super(),
            K.prototype.results || h.a(K.M()),
            b.initialize(this, e, 0, -1, [1], null);
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
                    br: h.d.readString,
                    bw: h.h.writeRepeatedString,
                  },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = h.e(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(K.M(), e, t);
        }
        static fromObject(e) {
          return h.c(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetWordBans_Response";
        }
      }
      class Y extends b {
        constructor(e = null) {
          super(),
            Y.prototype.broadcast_channel_id || h.a(Y.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = h.e(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(Y.M(), e, t);
        }
        static fromObject(e) {
          return h.c(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_JoinChat_Request";
        }
      }
      class J extends b {
        constructor(e = null) {
          super(),
            J.prototype.chat_id || h.a(J.M()),
            b.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  chat_id: {
                    n: 1,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                  view_url_template: {
                    n: 2,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  flair_group_ids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: h.d.readUint64String,
                    bw: h.h.writeRepeatedUint64String,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = h.e(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(J.M(), e, t);
        }
        static fromObject(e) {
          return h.c(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_JoinChat_Response";
        }
      }
      class Q extends b {
        constructor(e = null) {
          super(),
            Q.prototype.results || h.a(Q.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: { results: { n: 1, c: R, r: !0, q: !0 } },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = h.e(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(Q.M(), e, t);
        }
        static fromObject(e) {
          return h.c(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_Search_Response";
        }
      }
      class X extends b {
        constructor(e = null) {
          super(),
            X.prototype.stream_live_email || h.a(X.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  stream_live_email: {
                    n: 1,
                    br: h.d.readBool,
                    bw: h.h.writeBool,
                  },
                  stream_live_notification: {
                    n: 2,
                    br: h.d.readBool,
                    bw: h.h.writeBool,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = h.e(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(X.M(), e, t);
        }
        static fromObject(e) {
          return h.c(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetSteamTVUserSettings_Response";
        }
      }
      class Z extends b {
        constructor(e = null) {
          super(), b.initialize(this, e, 0, -1, void 0, null);
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
          let t = new _.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SetSteamTVUserSettings_Response";
        }
      }
      class ee extends b {
        constructor(e = null) {
          super(),
            ee.prototype.results || h.a(ee.M()),
            b.initialize(this, e, 0, -1, [1], null);
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
          return ee.sm_mbf || (ee.sm_mbf = h.e(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(ee.M(), e, t);
        }
        static fromObject(e) {
          return h.c(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetMyBroadcastChannels_Response";
        }
      }
      class te extends b {
        constructor(e = null) {
          super(),
            te.prototype.broadcasts || h.a(te.M()),
            b.initialize(this, e, 0, -1, [1], null);
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
          return te.sm_mbf || (te.sm_mbf = h.e(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(te.M(), e, t);
        }
        static fromObject(e) {
          return h.c(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_Takeover";
        }
      }
      class re extends b {
        constructor(e = null) {
          super(),
            re.prototype.broadcasts || h.a(re.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  broadcasts: { n: 1, c: R, r: !0, q: !0 },
                  appid: { n: 2, br: h.d.readUint32, bw: h.h.writeUint32 },
                  title: { n: 3, br: h.d.readString, bw: h.h.writeString },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = h.e(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(re.M(), e, t);
        }
        static fromObject(e) {
          return h.c(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_SingleGame";
        }
      }
      class ae extends b {
        constructor(e = null) {
          super(),
            ae.prototype.appid || h.a(ae.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  appid: { n: 1, br: h.d.readUint32, bw: h.h.writeUint32 },
                  game_name: { n: 2, br: h.d.readString, bw: h.h.writeString },
                  broadcast: { n: 3, c: R },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = h.e(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(ae.M(), e, t);
        }
        static fromObject(e) {
          return h.c(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "GameListEntry";
        }
      }
      class ie extends b {
        constructor(e = null) {
          super(),
            ie.prototype.entries || h.a(ie.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  entries: { n: 1, c: ae, r: !0, q: !0 },
                  title: { n: 2, br: h.d.readString, bw: h.h.writeString },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = h.e(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(ie.M(), e, t);
        }
        static fromObject(e) {
          return h.c(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_GameList";
        }
      }
      class se extends b {
        constructor(e = null) {
          super(),
            se.prototype.broadcasts || h.a(se.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  broadcasts: { n: 1, c: R, r: !0, q: !0 },
                  title: { n: 2, br: h.d.readString, bw: h.h.writeString },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = h.e(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(se.M(), e, t);
        }
        static fromObject(e) {
          return h.c(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_QuickExplore";
        }
      }
      class ne extends b {
        constructor(e = null) {
          super(),
            ne.prototype.broadcasts || h.a(ne.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  broadcasts: { n: 1, c: R, r: !0, q: !0 },
                  title: { n: 2, br: h.d.readString, bw: h.h.writeString },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = h.e(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(ne.M(), e, t);
        }
        static fromObject(e) {
          return h.c(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_ConveyorBelt";
        }
      }
      class oe extends b {
        constructor(e = null) {
          super(),
            oe.prototype.broadcast || h.a(oe.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  broadcast: { n: 1, c: R },
                  title: { n: 2, br: h.d.readString, bw: h.h.writeString },
                  chat_group_id: {
                    n: 3,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = h.e(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(oe.M(), e, t);
        }
        static fromObject(e) {
          return h.c(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_WatchParty";
        }
      }
      class le extends b {
        constructor(e = null) {
          super(),
            le.prototype.broadcast || h.a(le.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  broadcast: { n: 1, c: R },
                  title: { n: 2, br: h.d.readString, bw: h.h.writeString },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = h.e(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(le.M(), e, t);
        }
        static fromObject(e) {
          return h.c(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_Developer";
        }
      }
      class ce extends b {
        constructor(e = null) {
          super(),
            ce.prototype.title || h.a(ce.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  title: { n: 1, br: h.d.readString, bw: h.h.writeString },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = h.e(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(ce.M(), e, t);
        }
        static fromObject(e) {
          return h.c(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_Event";
        }
      }
      class de extends b {
        constructor(e = null) {
          super(),
            de.prototype.template_type || h.a(de.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  template_type: { n: 1, br: h.d.readEnum, bw: h.h.writeEnum },
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
          return de.sm_mbf || (de.sm_mbf = h.e(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(de.M(), e, t);
        }
        static fromObject(e) {
          return h.c(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageContentRow";
        }
      }
      class me extends b {
        constructor(e = null) {
          super(),
            me.prototype.rows || h.a(me.M()),
            b.initialize(this, e, 0, -1, [1], null);
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
          return me.sm_mbf || (me.sm_mbf = h.e(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(me.M(), e, t);
        }
        static fromObject(e) {
          return h.c(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetHomePageContents_Response";
        }
      }
      class ue extends b {
        constructor(e = null) {
          super(),
            ue.prototype.broadcast_clip_id || h.a(ue.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  broadcast_clip_id: {
                    n: 1,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  channel_id: {
                    n: 2,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  app_id: { n: 3, br: h.d.readUint32, bw: h.h.writeUint32 },
                  broadcaster_steamid: {
                    n: 4,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                  creator_steamid: {
                    n: 5,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                  video_description: {
                    n: 6,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  live_time: { n: 7, br: h.d.readUint32, bw: h.h.writeUint32 },
                  length_ms: { n: 8, br: h.d.readUint32, bw: h.h.writeUint32 },
                  thumbnail_path: {
                    n: 9,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = h.e(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(ue.M(), e, t);
        }
        static fromObject(e) {
          return h.c(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_BroadcastClipInfo";
        }
      }
      class _e extends b {
        constructor(e = null) {
          super(),
            _e.prototype.clips || h.a(_e.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  clips: { n: 1, c: ue, r: !0, q: !0 },
                  thumbnail_host: {
                    n: 2,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = h.e(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(_e.M(), e, t);
        }
        static fromObject(e) {
          return h.c(_e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(_e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(_e.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelClips_Response";
        }
      }
      class he extends b {
        constructor(e = null) {
          super(),
            he.prototype.aggregation_delay_ms || h.a(he.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  aggregation_delay_ms: {
                    n: 1,
                    br: h.d.readUint32,
                    bw: h.h.writeUint32,
                  },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = h.e(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(he.M(), e, t);
        }
        static fromObject(e) {
          return h.c(he.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new he();
          return he.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(he.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(he.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AppCheer_Response";
        }
      }
      var be;
      !(function (e) {
        (e.CreateBroadcastChannel = function (e, t) {
          return e.SendMsg("SteamTV.CreateBroadcastChannel#1", t, B, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
          (e.GetBroadcastChannelID = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelID#1", t, p, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.SetBroadcastChannelProfile = function (e, t) {
            return e.SendMsg("SteamTV.SetBroadcastChannelProfile#1", t, g, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelProfile = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelProfile#1", t, y, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.SetBroadcastChannelImage = function (e, t) {
            return e.SendMsg("SteamTV.SetBroadcastChannelImage#1", t, f, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelImages = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelImages#1", t, S, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.SetBroadcastChannelLinkRegions = function (e, t) {
            return e.SendMsg("SteamTV.SetBroadcastChannelLinkRegions#1", t, v, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelLinks = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelLinks#1", t, M, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.GetBroadcastChannelBroadcasters = function (e, t) {
            return e.SendMsg(
              "SteamTV.GetBroadcastChannelBroadcasters#1",
              t,
              P,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 }
            );
          }),
          (e.GetFollowedChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetFollowedChannels#1", t, O, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetSubscribedChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetSubscribedChannels#1", t, F, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelStatus = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelStatus#1", t, z, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.FollowBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.FollowBroadcastChannel#1", t, T, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SubscribeBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.SubscribeBroadcastChannel#1", t, j, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelClips = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelClips#1", t, _e, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.ReportBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.ReportBroadcastChannel#1", t, W, {
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
            return e.SendMsg("SteamTV.GetGames#1", t, x, {
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
            return e.SendMsg("SteamTV.AddChatBan#1", t, A, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetChatBans = function (e, t) {
            return e.SendMsg("SteamTV.GetChatBans#1", t, L, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.AddChatModerator = function (e, t) {
            return e.SendMsg("SteamTV.AddChatModerator#1", t, k, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetChatModerators = function (e, t) {
            return e.SendMsg("SteamTV.GetChatModerators#1", t, H, {
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
            return e.SendMsg("SteamTV.JoinChat#1", t, J, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.Search = function (e, t) {
            return e.SendMsg("SteamTV.Search#1", t, Q, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.GetSteamTVUserSettings = function (e, t) {
            return e.SendMsg("SteamTV.GetSteamTVUserSettings#1", t, X, {
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
            return e.SendMsg("SteamTV.AppCheer#1", t, he, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(be || (be = {}));
      r("AiWL");
      var Be = r("qiKp"),
        pe = r("TLQK"),
        ge = r("XxJJ"),
        ye = r("lkRc"),
        fe = r("gJzY");
      class Se {
        constructor() {
          this.m_mapChats = new Map();
        }
        GetChat(e, t) {
          return this.m_mapChats.get(e) || this.m_mapChats.get(t);
        }
        GetOrCreateChat(e, t) {
          let r = this.GetChat(e, t);
          return r || ((r = new we()), this.m_mapChats.set(e || t, r)), r;
        }
      }
      Object(a.b)([n.C], Se.prototype, "m_mapChats", void 0);
      class we {
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
              ye.c.WEBAPI_BASE_URL,
              ye.h.webapi_token
            ));
        }
        InitTextFilter() {
          this.m_textFilterStore = new fe.a();
          let e = 0;
          if ("" !== ye.h.steamid) {
            e = new m.a(ye.h.steamid).GetAccountID();
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
            ye.c.WEBAPI_BASE_URL,
            ye.h.webapi_token
          )),
            (this.m_ulBroadcastSteamID = e),
            (this.m_ulBroadcastID = t),
            this.InitTextFilter(),
            this.RequestChatInfo();
        }
        StartForChannel(e) {
          (this.m_webAPIInterface = new d.a(
            ye.c.WEBAPI_BASE_URL,
            ye.h.webapi_token
          )),
            (this.m_ulBroadcastChannelID = e),
            (this.m_strUserSteamID = ye.h.steamid),
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
                      `${ye.c.WEBAPI_BASE_URL}IBroadcastService/PostChatMessage/v0001?access_token=${this.m_webApiToken}`,
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
                        ? Object(pe.f)("#BroadcastChat_YouMuted")
                        : 84 == a.result
                        ? Object(pe.f)(
                            "#BroadcastChat_Cooldown",
                            a.cooldown_time_seconds
                          )
                        : Object(pe.f)("#BroadcastChat_FailedToSendMsg", t)),
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
                  msg: Object(pe.f)("#BroadcastChat_FailedToSendMsg", t),
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
                  sessionid: ye.c.SESSIONID,
                },
                r = yield s.a.get(
                  `${ye.c.CHAT_BASE_URL}broadcast/getchatinfo`,
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
                        msg: Object(pe.f)("#BroadcastChat_DefaultMessage"),
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
                    (this.m_chatScheduledFunc = new Be.b()),
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
              const e = l.b.Init(Y);
              e.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
              });
              let t = yield be.JoinChat(
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
                  msg: Object(pe.f)("#BroadcastChat_DefaultMessage"),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                }),
                (this.m_bHasAddedWelcomeChat = !0),
                (this.m_chatScheduledFunc = new Be.b()),
                this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
            } catch (e) {
              console.error(e), console.log("Failed to join chat!");
            }
          });
        }
        FetchChatModerators() {
          return Object(a.a)(this, void 0, void 0, function* () {
            const e = l.b.Init(V);
            e.SetBodyFields({
              broadcast_channel_id: this.m_ulBroadcastChannelID,
            });
            const t = (yield be.GetChatModerators(
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
                      ? Object(pe.f)("#BroadcastChat_YouMuted", e.persona_name)
                      : Object(pe.f)(
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
                    msg: Object(pe.f)("#BroadcastChat_UnableToJoinChat"),
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
                a.append("sessionid", ye.c.SESSIONID);
              try {
                yield s.a.post(
                  `${ye.c.CHAT_BASE_URL}broadcast/ajaxupdatechannelmod`,
                  a
                ),
                  this.m_mapBroadcastModeratorUsers.set(e, t);
                const i = Object(pe.f)(
                  t
                    ? "#BroadcastChat_AddedModerator"
                    : "#BroadcastChat_RemovedModerator",
                  r
                );
                this.m_rgChatMessages.push({ type: o.a.Notification, msg: i });
              } catch (e) {
                const a = Object(pe.f)(
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
              const t = l.b.Init(G);
              t.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
                chatter_steamid: e,
                duration: 3600 * r,
                permanent: i,
                undo: o,
              }),
                yield be.AddChatBan(
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
                o.append("sessionid", ye.c.SESSIONID);
              try {
                yield s.a.post(
                  `${ye.c.CHAT_BASE_URL}broadcast/ajaxupdateusermute`,
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
                      `${ye.c.WEBAPI_BASE_URL}IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=${this.m_webApiToken}`,
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
                    msg: Object(pe.f)("#BroadcastChat_UserMuteFailed", t),
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
                msg: Object(pe.f)("#BroadcastChat_UserMutedLocal", t),
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
                      `${ye.c.WEBAPI_BASE_URL}IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=${this.m_webApiToken}`,
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
                  msg: Object(pe.f)("#BroadcastChat_UserUnmutedLocal", t),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              } catch (e) {
                this.m_rgChatMessages.push({
                  type: o.a.Error,
                  msg: Object(pe.f)("#BroadcastChat_UserUnmuteFailed", t),
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
                msg: Object(pe.f)("#BroadcastChat_UserUnmutedLocal", t),
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
                      `${ye.c.WEBAPI_BASE_URL}IBroadcastService/RemoveUserChatText/v0001/?access_token=${this.m_webApiToken}`,
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
                  msg: Object(pe.f)("#BroadcastChat_RemoveMessagesFailed", t),
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
                  `${ye.c.WEBAPI_BASE_URL}IBroadcastService/UpdateChatMessageFlair/v0001/?access_token=${this.m_webApiToken}`,
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
      Object(a.b)([n.C], we.prototype, "m_mapChannelModeratorUsers", void 0),
        Object(a.b)(
          [n.C],
          we.prototype,
          "m_mapBroadcastModeratorUsers",
          void 0
        ),
        Object(a.b)([n.C], we.prototype, "m_nRateLimitSeconds", void 0),
        Object(a.b)([n.C], we.prototype, "m_bRateLimited", void 0),
        Object(a.b)([n.C], we.prototype, "m_rgChatMessages", void 0),
        Object(a.b)([ge.a], we.prototype, "FetchChatModerators", null),
        Object(a.b)([ge.a], we.prototype, "RequestLoop", null),
        Object(a.b)([ge.a], we.prototype, "MuteUserForSession", null);
      const Me = new Se();
      window.g_BroadcastChatStore = Me;
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

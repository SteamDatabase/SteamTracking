/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2832],
  {
    56052: (e) => {
      e.exports = {
        StoreSaleWidgetContainer_mini:
          "broadcastwidgets_StoreSaleWidgetContainer_mini_1Vz-y",
        Action: "broadcastwidgets_Action_1ZA3F",
        WishList: "broadcastwidgets_WishList_20tgR",
        StoreSaleWidgetImage_mini:
          "broadcastwidgets_StoreSaleWidgetImage_mini_1Ep8o",
        StoreSaleImage_mini: "broadcastwidgets_StoreSaleImage_mini_26Hh7",
        StoreSaleWidgetShortDesc_mini:
          "broadcastwidgets_StoreSaleWidgetShortDesc_mini_DvDV2",
      };
    },
    40185: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, { BroadcastEmbeddablePopoutHeader: () => J, default: () => $ });
      var s = a(70655),
        r = a(9669),
        n = a.n(r),
        o = a(29323),
        i = a(13271),
        l = a(67294),
        c = a(85503),
        d = a(63405),
        m = a(67833),
        p = (a(990), a(52114)),
        _ = a(88335),
        h = a(44741),
        u = a(5146),
        b = a(65924),
        g = a(13596),
        S = a(7573),
        E = a(90666),
        v = (a(92398), a(56052)),
        f = a.n(v);
      const C = (0, o.Pi)((e) => {
        const { appid: t } = e,
          a = (0, b.bJ)(),
          s = (0, l.useRef)({ include_assets: !0, include_release: !0 }),
          [r, n] = (0, p.vs)(t, s.current);
        let o = f().StoreSaleWidgetContainer_mini,
          i = f().StoreSaleWidgetImage_mini,
          c = f().StoreSaleImage_mini;
        if (!r && 2 != n)
          return l.createElement(
            "div",
            { className: o },
            l.createElement(g.V, { size: "medium" }),
            ";"
          );
        if (2 == n || !r.GetName())
          return l.createElement("div", {
            className: _.StoreSaleWidgetEmptyContainer,
          });
        const d = 8 != r.GetAppType(),
          v = (0, m.Hf)(r.GetStorePageURL(), a);
        return l.createElement(
          "div",
          { className: o },
          l.createElement(
            "div",
            { className: _.Actions },
            l.createElement(
              "a",
              { href: v, target: E.De.IN_CLIENT ? void 0 : "_blank" },
              l.createElement(
                u.W,
                { type: "app", id: t },
                l.createElement(
                  "div",
                  { className: i },
                  l.createElement("img", {
                    className: c,
                    src: r.GetAssets().GetSmallCapsuleURL(),
                  })
                )
              )
            )
          ),
          l.createElement(
            "div",
            { className: _.StoreSaleBroadcastWidgetRight },
            l.createElement(
              "div",
              { className: _.Actions },
              l.createElement(
                "a",
                { href: v, target: E.De.IN_CLIENT ? void 0 : "_blank" },
                l.createElement(
                  u.W,
                  { type: "app", id: t },
                  l.createElement(
                    "div",
                    {
                      className: (0, S.Z)(
                        _.StoreSaleWidgetTitle,
                        "StoreSaleWidgetTitle"
                      ),
                    },
                    r.GetName()
                  )
                )
              )
            ),
            l.createElement(
              "div",
              { className: _.StoreSaleWidgetRelease },
              r.GetFormattedSteamReleaseDate()
            ),
            Boolean(d) &&
              l.createElement(h.x1, {
                info: { id: t, type: "game" },
                bShowDemoButton: !0,
              })
          )
        );
      });
      var I = a(26149),
        N = a(1351),
        D = a(1245),
        P = (a(69765), a(58185), a(10767), a(81503)),
        y = a(52795),
        B = a(28976),
        G = (a(3356), a(27991)),
        A = a(159),
        w = a(71387),
        x = a(96187),
        O = a(15396),
        k = a(95598),
        T = a(11539),
        L = a(41311),
        R = a(47808),
        V = a(22975),
        W = (a(19663), a(3389)),
        M = (a(49186), a(461)),
        j = a(17157),
        U = a.n(j);
      const H = (0, o.Pi)((e) => {
        const { event: t } = e,
          a = t.clanSteamID.GetAccountID(),
          r = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
          o = (0, l.useRef)(null),
          [i, c] = (0, l.useState)(
            t ? M.bq.GetCreatorHome(t.clanSteamID) : null
          );
        if (
          ((0, l.useEffect)(() => {
            const e = n().CancelToken.source();
            o.current = e.cancel;
            return (
              (0, s.mG)(void 0, void 0, void 0, function* () {
                const t = W.K.InitFromClanID(a),
                  s = yield M.bq.LoadCreatorHome(t, e);
                e.token.reason || c(s);
              }),
              () => {
                o.current && o.current("BroadcastDropsDisplay: unmounting");
              }
            );
          }, [a]),
          r || !i || !i.BIsLoaded())
        )
          return null;
        const d =
          E.De.COMMUNITY_BASE_URL +
          "gid/" +
          t.jsondata.broadcast_item_drops_details_clan_accountid +
          "/partnerevents/view/" +
          t.jsondata.broadcast_item_drops_details_event_gid;
        return l.createElement(
          "div",
          { className: U().item_drop_ctn },
          l.createElement(
            "div",
            null,
            (0, L.Xx)(
              i.GetName().length > 0
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
              i.GetName()
            ),
            Boolean(t.jsondata.broadcast_item_drops_details_clan_accountid) &&
              l.createElement(
                "a",
                { href: d, target: E.De.IN_CLIENT ? "" : "_blank" },
                (0, L.Xx)("#SalePage_WatchForDrop_LearnMore")
              )
          )
        );
      });
      var F;
      const Z = {
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
      let X = (F = class extends l.Component {
        constructor() {
          super(...arguments),
            (this.m_cancelSignal = n().CancelToken.source()),
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
          return E.De.EREALM != N.IN.k_ESteamRealmChina && !E.De.IN_GAMEPADUI;
        }
        componentDidMount() {
          return (0, s.mG)(this, void 0, void 0, function* () {
            F.IsBroadcastAllowed() &&
              ((0, G.nf)(null),
              yield B.ai
                .Get()
                .LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
              this.m_cancelSignal.token.reason ||
                this.setState({
                  bLoadingPreference: !1,
                  bExpanded: !B.ai
                    .Get()
                    .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                  innerStyle: Object.assign(
                    Object.assign({}, this.state.innerStyle),
                    {
                      maxHeight: B.ai
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
                ? B.ai.Get().HintLoadEmbeddablePreviewStreams(this.props)
                : B.ai.Get().HintLoadEmbeddableStreams(this.props),
              this.props.nAppIDVOD &&
                (B.ai
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
          let e = B.ai.Get().GetPlayReadyStream(this.props);
          const t = this.state.bExpanded,
            a = y.c9.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
          (0, B.wx)(a, t ? 2 : 3, e.snr),
            t && (0, D.X)() && (0, D.X)().AddEvent(1005),
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
                B.ai.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded)
              );
        }
        OnShrinkTransitionEnd() {
          "0vh" === this.state.innerStyle.maxHeight &&
            this.setState({ bExpanded: !1 }, () =>
              B.ai.Get().SetEmbeddedStreamCollapsed(!0)
            );
        }
        onStreamSelect(e) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            this.setState({ bStartMuted: !1 }),
              B.ai.Get().GetPlayReadyStream(this.props).accountid !=
                e.accountid &&
                (yield B.ai.Get().AttemptToPlayStream(this.props, e));
          });
        }
        PlayTopNonVOD() {
          return (0, s.mG)(this, void 0, void 0, function* () {
            this.setState({ bStartMuted: !1 });
            const e = B.ai
              .Get()
              .GetStreams(this.props)
              .filter(
                (e) =>
                  !this.props.fnFilterStreams || this.props.fnFilterStreams(e)
              );
            (0, B.rg)(e);
            for (const t of e)
              if (!t.nAppIDVOD)
                return void (yield B.ai
                  .Get()
                  .AttemptToPlayStream(this.props, t));
          });
        }
        ConstructSidePanels(e, t) {
          let a = {
            leftPanel: null,
            rightPanel: null,
            bRightPanelArtworkOrEmpty: !0,
          };
          if (this.props.bWidePlayer) return a;
          const s = B.ai.Get().GetConcurrentStreams(this.props) > 1;
          let r = y.c9.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
            n = l.createElement(
              "div",
              { className: U().rightPanel },
              l.createElement(z, { key: "right" + r, ImgUrl: e.right_panel })
            ),
            o = l.createElement(z, { key: "left" + r, ImgUrl: e.left_panel });
          if (r < 11) {
            const t = P.C.GetAppIDListForBroadcasterSteamID(e.steamid);
            t && 1 === t.length && (r = t[0]);
          }
          return (
            !(
              (this.props.promotionName ||
                this.props.bIsPreview ||
                this.props.subid ||
                this.props.bundleid) &&
              r >= 11
            ) ||
              (this.props.event &&
                this.props.event.jsondata.broadcast_force_banner) ||
              ((n = l.createElement(C, {
                key: "mini" + e.accountid,
                appid: r,
              })),
              (a.bRightPanelArtworkOrEmpty = !1)),
            s && !t
              ? ((a.leftPanel = l.createElement(Q, {
                  broadcastEmbedContext: this.props,
                  key: "selector" + r,
                  curStream: e,
                  onStreamSelect: this.onStreamSelect,
                  fnFilterStreams: this.props.fnFilterStreams,
                  bShowCapsuleArt: this.props.bShowCapsuleArt,
                })),
                (a.rightPanel = n))
              : t
              ? ((a.leftPanel = l.createElement("div", null)),
                (a.rightPanel = l.createElement(ae, {
                  stream: e,
                  orientation: "rightside",
                })),
                (a.bRightPanelArtworkOrEmpty = !1))
              : ((a.leftPanel = o), (a.rightPanel = n)),
            a
          );
        }
        MarkBroadcastSeen() {
          this.m_bMarkedUsabilitySeen ||
            ((this.m_bMarkedUsabilitySeen = !0),
            (0, D.X)() && (0, D.X)().AddEvent(1004));
        }
        render() {
          if (!F.IsBroadcastAllowed() || this.state.bLoadingPreference)
            return null;
          let e = B.ai.Get().GetPlayReadyStream(this.props);
          if (e) {
            this.MarkBroadcastSeen();
            let t = "show" === B.ai.Get().GetChatVisibility();
            const {
              event: a,
              language: s,
              fnRenderBroadcastContext: r,
            } = this.props;
            a &&
              (e = Object.assign(Object.assign({}, e), {
                left_panel: a.GetImageURL(
                  "broadcast_left",
                  s || (0, I.jM)(E.De.LANGUAGE)
                ),
                right_panel: a.GetImageURL(
                  "broadcast_right",
                  s || (0, I.jM)(E.De.LANGUAGE)
                ),
                store_title: a.GetBroadcastTitle(s || (0, I.jM)(E.De.LANGUAGE)),
                broadcast_chat_visibility: a.GetBroadcastChatVisibility(),
              }));
            let n = this.ConstructSidePanels(e, t),
              o = e.store_title ? e.store_title : e.title,
              i = B.ai.Get().GetConcurrentStreams(this.props) > 1;
            const c = () => {
              var t, a;
              e.nAppIDVOD && this.PlayTopNonVOD(),
                null === (a = (t = this.props).fnOnVideoEnd) ||
                  void 0 === a ||
                  a.call(t);
            };
            a && a.jsondata && a.jsondata.broadcast_gradient_inner_color,
              a && a.jsondata && a.jsondata.broadcast_gradient_outer_color;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                "div",
                {
                  className: "broadcast_embed_top_ctn_trgt",
                  style: this.state.style,
                },
                l.createElement(
                  "div",
                  {
                    className: (0, S.Z)({
                      [U().bordered_container]: !0,
                      [U().Event]: Boolean(a),
                      broadcast_brd_ctn_trgt: !0,
                    }),
                  },
                  l.createElement(
                    "div",
                    {
                      className: (0, S.Z)(
                        U().bordered_title,
                        "bordered_title_trgt"
                      ),
                    },
                    l.createElement(w.xP, null),
                    o,
                    l.createElement(
                      "div",
                      { className: U().bordered_corner_container },
                      !this.state.bExpanded &&
                        l.createElement("div", {
                          className: U().broadcast_settings_icon,
                          "data-tooltip-text": (0, L.Xx)(
                            "#StoreBroadcast_Change_store_Broadcast_settings"
                          ),
                          onClick: () =>
                            window.open(
                              `${E.De.STORE_BASE_URL}account/preferences/#store_broadcast_settings`
                            ),
                        }),
                      l.createElement("div", {
                        className: this.state.bExpanded
                          ? U().bordered_corner_expanded
                          : U().bordered_corner_shrinked,
                        "data-tooltip-text": (0, L.Xx)(
                          "#StoreBroadcast_Hide_Tooltip"
                        ),
                        onClick: this.ToggleBroadcastExpandShrink,
                      })
                    ),
                    Boolean(e.gamedata_subtitle) &&
                      l.createElement(
                        "div",
                        { className: U().bordered_subtitle },
                        e.gamedata_subtitle
                      )
                  ),
                  this.state.bExpanded &&
                    l.createElement(
                      "div",
                      {
                        className: (0, S.Z)({
                          [U().container]: !0,
                          embeddable_ctn_trgt: !0,
                          multistream: i,
                          broadcast_right_panel_simple:
                            n.bRightPanelArtworkOrEmpty,
                          broadcast_chat_expanded: t,
                        }),
                        style: Object.assign({}, this.state.innerStyle),
                        onTransitionEnd: this.OnShrinkTransitionEnd,
                      },
                      n.leftPanel,
                      l.createElement(q, {
                        stream: e,
                        bStartMuted: this.state.bStartMuted,
                        fnRenderBroadcastContext: r,
                        fnOnVideoEnd: c,
                        bWidePlayer: this.props.bWidePlayer,
                      }),
                      n.rightPanel,
                      this.state.bExpanded &&
                        l.createElement(Y, { stream: e, bMultistream: i })
                    )
                ),
                Boolean(
                  a && a.jsondata && a.jsondata.broadcast_item_drops_enabled
                ) && l.createElement(H, { event: a }),
                this.state.bExpanded &&
                  l.createElement(
                    "div",
                    { className: `${a ? U().Event : ""}` },
                    l.createElement(Y, { stream: e, bMultistream: i })
                  ),
                l.createElement("div", { className: U().clear_div })
              )
            );
          }
          return l.createElement("div", { className: "NoBroadcastAvailable" });
        }
      });
      (0, s.gn)([V.ak], X.prototype, "ToggleBroadcastExpandShrink", null),
        (0, s.gn)([V.ak], X.prototype, "OnShrinkTransitionEnd", null),
        (0, s.gn)([V.ak], X.prototype, "onStreamSelect", null),
        (0, s.gn)([V.ak], X.prototype, "PlayTopNonVOD", null),
        (X = F = (0, s.gn)([o.Pi], X));
      const $ = X;
      class q extends l.Component {
        constructor(e) {
          super(e),
            (this.m_iVideoContainerRef = l.createRef()),
            (this.state = {
              bPopout: !1,
              bPreventPopup: window.screen.width <= 768,
            });
        }
        CloseBroadcastPopup() {
          const e = y.c9.GetOrCreateBroadcastInfo(
            this.props.stream.steamid
          ).m_nAppID;
          (0, B.wx)(e, 7, this.props.stream.snr),
            (0, D.X)() && (0, D.X)().AddEvent(1006),
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
          return l.createElement(
            "div",
            { className: U().wrapper },
            l.createElement(
              T.h,
              { onEnter: this.OnEnter, onLeave: this.OnLeave },
              l.createElement(
                "div",
                {
                  className: (0, S.Z)({
                    [U().video_placeholder]: !0,
                    video_placeholder_trgt: !0,
                    [U().WidePlayer]: this.props.bWidePlayer,
                  }),
                  ref: this.m_iVideoContainerRef,
                },
                l.createElement(
                  "div",
                  {
                    className: this.state.bPopout
                      ? U().broadcast_floating
                      : U().video_container,
                  },
                  this.state.bPopout &&
                    l.createElement(J, {
                      steamIDBroadcast: this.props.stream.steamid,
                      OnPreventPopup: this.CloseBroadcastPopup,
                    }),
                  l.createElement(
                    "div",
                    { className: U().BroadcastPlayerContainer },
                    l.createElement(d.default, {
                      steamIDBroadcast: this.props.stream.steamid,
                      watchLocation: 6,
                      bStartMuted: this.props.bStartMuted,
                      fnRenderBroadcastContext:
                        this.props.fnRenderBroadcastContext,
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
      (0, s.gn)([V.ak], q.prototype, "CloseBroadcastPopup", null),
        (0, s.gn)([V.ak], q.prototype, "OnEnter", null),
        (0, s.gn)([V.ak], q.prototype, "OnLeave", null);
      let Y = class extends l.Component {
        ConstructBroadcastLink() {
          let e = this.props.stream;
          const t = y.c9.GetOrCreateBroadcastInfo(
            this.props.stream.steamid
          ).m_nAppID;
          let a = Z.list.find(
            (a) =>
              a.appid == t &&
              (!a.broadcasterAccountID || a.broadcasterAccountID == e.accountid)
          );
          if (a) {
            let e = a.url;
            return (
              (E.De.IN_CLIENT ||
                navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
                (e = "steam://openurl/" + e),
              l.createElement(
                "a",
                { href: e },
                (0, L.Xx)("#Broadcast_Embed_Watch_With_Frieds_SteamTV")
              )
            );
          }
          {
            let e = this.props.stream.steamid,
              t = E.De.COMMUNITY_BASE_URL + "broadcast/watch/" + e;
            return l.createElement(
              "a",
              {
                href: t,
                className: U().external_link,
                "data-tooltip-text": (0, L.Xx)(
                  "#BroadcastWatch_View_Broadcast_Page"
                ),
              },
              l.createElement(k.dLw, null)
            );
          }
        }
        OnToggleChat(e) {
          e.preventDefault();
          const t = y.c9.GetOrCreateBroadcastInfo(
            this.props.stream.steamid
          ).m_nAppID;
          (0, B.wx)(
            t,
            "show" === B.ai.Get().GetChatVisibility() ? 5 : 4,
            this.props.stream.snr
          ),
            B.ai.Get().ToggleChatVisibility();
        }
        onWatchBroadcastPage() {
          const e = y.c9.GetOrCreateBroadcastInfo(
            this.props.stream.steamid
          ).m_nAppID;
          (0, B.wx)(e, 9, this.props.stream.snr);
        }
        render() {
          const e = this.ConstructBroadcastLink(),
            t = "remove" != B.ai.Get().GetChatVisibility(),
            a = "hide" === B.ai.Get().GetChatVisibility();
          let s = Number.parseInt(
            "" +
              y.c9.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nViewerCount
          );
          return l.createElement(
            "div",
            { className: (0, S.Z)(U().viewer_bar, "viewer_bar") },
            l.createElement(
              "div",
              { className: (0, S.Z)(U().viewer_count, "viewer_count") },
              l.createElement(k.lsH, null),
              (0, R.AV)(s)
            ),
            l.createElement(
              "div",
              { className: (0, S.Z)(U().viewer_links, "viewer_links") },
              Boolean(t && !a && this.props.bMultistream) &&
                l.createElement(
                  "div",
                  { className: U().chat_link },
                  l.createElement(
                    "a",
                    {
                      href: "#",
                      className: U().ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    (0, L.Xx)("#sale_three_section_show_streams")
                  )
                ),
              t &&
                l.createElement(
                  "div",
                  { className: U().chat_link },
                  l.createElement(k.IWH, null),
                  l.createElement(
                    "a",
                    {
                      href: "#",
                      className: U().ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    (0, L.Xx)(
                      a
                        ? "#sale_three_section_show_chat"
                        : "#sale_three_section_hide_chat"
                    )
                  )
                ),
              t && l.createElement("span", { className: U().ChatToggle }),
              l.createElement(
                "a",
                {
                  href:
                    E.De.STORE_BASE_URL +
                    "account/preferences/#store_broadcast_settings",
                  target: E.De.IN_CLIENT ? void 0 : "_blank",
                  className: U().settings_link,
                  "data-tooltip-text": (0, L.Xx)(
                    "#StoreBroadcast_Change_store_Broadcast_settings"
                  ),
                },
                l.createElement(k.Zrf, null)
              ),
              e
            )
          );
        }
      };
      (0, s.gn)([V.ak], Y.prototype, "OnToggleChat", null),
        (0, s.gn)([V.ak], Y.prototype, "onWatchBroadcastPage", null),
        (Y = (0, s.gn)([o.Pi], Y));
      class z extends l.Component {
        render() {
          let e = this.props.ImgUrl;
          return l.createElement(
            l.Fragment,
            null,
            e &&
              l.createElement("img", {
                className: U().side_panels,
                src: this.props.ImgUrl,
              }),
            !e && l.createElement("div", { className: U().side_panels })
          );
        }
      }
      const J = (0, o.Pi)((e) => {
        const { steamIDBroadcast: t } = e,
          a = y.c9.GetOrCreateBroadcastInfo(t).m_nAppID,
          [s] = (0, p.vs)(a, {});
        return l.createElement(
          "div",
          { className: [U().PopOutVideoTitleBar, U().NoSeslect].join(" ") },
          Boolean(s)
            ? l.createElement(
                u._,
                { type: "app", id: a, className: U().PopOutVideoTitleText },
                (0, L.Xx)("#StoreBroadcast_Detault_popout_Title")
              )
            : l.createElement(
                "div",
                { className: U().PopOutVideoTitleText },
                (0, L.Xx)("#StoreBroadcast_Detault_popout_Title")
              ),
          l.createElement(
            "button",
            {
              className: U().PopOutVideoCloseButton,
              "data-tooltip-text": (0, L.Xx)(
                "#StoreBroadcast_close_broadcast_popup"
              ),
              onClick: e.OnPreventPopup,
            },
            l.createElement(k.X, null)
          )
        );
      });
      function K(e, t) {
        var a;
        const s = y.c9.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
          r = A.Z.Get().GetApp(s);
        return e &&
          (null === (a = null == r ? void 0 : r.GetAssets()) || void 0 === a
            ? void 0
            : a.GetHeaderURL())
          ? parseInt(U().strStreamIconCapsuleArtHeight)
          : parseInt(U().strStreamIconScreenshotArtHeight);
      }
      function Q(e) {
        const {
            curStream: t,
            onStreamSelect: a,
            fnFilterStreams: s,
            bShowCapsuleArt: r,
            broadcastEmbedContext: n,
          } = e,
          o = (0, l.useRef)(),
          i = (0, l.useMemo)(() => {
            const e = B.ai
              .Get()
              .GetStreams(n)
              .filter((e) => !s || s(e));
            return (0, B.rg)(e), e;
          }, [n, s]);
        return (
          (0, l.useEffect)(() => {
            if (o && o.current) {
              const e = i
                .map((e) => y.c9.GetOrCreateBroadcastInfo(e.steamid).m_nAppID)
                .filter(Boolean);
              A.Z.Get()
                .QueueMultipleAppRequests(e, { include_assets: !0 })
                .then(() => {
                  if (o.current) {
                    let e = 0;
                    for (const a of i) {
                      if (t.accountid == a.accountid) break;
                      e += K(r, a);
                    }
                    o.current.scrollTop = e;
                  }
                });
            }
          }, [i, r, t.accountid, o]),
          l.createElement(
            "div",
            {
              ref: o,
              className: (0, S.Z)({
                [U().side_panels]: !0,
                side_panels: !0,
                [U().multistream]: !0,
                [U().scrollingstreams]: i.length > 3,
              }),
            },
            i.map((e) => {
              var s;
              return l.createElement(ee, {
                key: null !== (s = e.accountid) && void 0 !== s ? s : e.steamid,
                stream: e,
                bSelected: t.accountid == e.accountid,
                onStreamSelect: a,
                bShowCapsuleArt: r,
              });
            })
          )
        );
      }
      function ee(e) {
        var t;
        const {
            onStreamSelect: a,
            bSelected: s,
            stream: r,
            bShowCapsuleArt: n,
          } = e,
          o = (0, i.SZ)(
            () => y.c9.GetOrCreateBroadcastInfo(r.steamid).m_nAppID
          ),
          [c] = (0, p.vs)(null !== (t = r.nAppIDVOD) && void 0 !== t ? t : o, {
            include_assets: !0,
          });
        if (!(0, B.A$)(r)) return null;
        const d = n && (null == c ? void 0 : c.GetAssets().GetHeaderURL()),
          m = Number.parseInt("" + r.viewer_count),
          _ = !Number.isNaN(m),
          h = !!r.nAppIDVOD && (null == c ? void 0 : c.GetName());
        return l.createElement(
          "div",
          {
            className: (0, S.Z)({
              [U().stream_icon_and_viewer_container]: !0,
              [U().stream_featured]:
                r.current_selection_priority == B.VA.k_eFeatured,
              [U().display_capsule_art]: Boolean(d),
            }),
          },
          l.createElement(
            u.W,
            { type: "app", id: o },
            l.createElement(
              O.Y,
              {
                className: U().stream_icon_container,
                onClick: () => a && a(r),
                rootMargin: "100px 0px 100px 0px",
              },
              l.createElement(te, {
                strThumbnail: r.thumbnail_http_address,
                bSelected: s,
                strCapsuleArtURL: d,
              }),
              s && l.createElement("div", { className: U().stream_icon_arrow })
            )
          ),
          l.createElement(
            "div",
            { className: (0, S.Z)(U().viewer_count, !_ && U().vod_title) },
            _
              ? l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(k.lsH, null),
                  " ",
                  (0, R.AV)(m)
                )
              : h
          )
        );
      }
      function te(e) {
        const { strCapsuleArtURL: t, strThumbnail: a, bSelected: s } = e,
          r = s ? U().stream_icon_selected : U().stream_icon;
        if (t) {
          const e = [t];
          return l.createElement(
            l.Fragment,
            null,
            l.createElement("img", {
              className: (0, S.Z)(r, U().stream_icon_hide_on_hover),
              src: t,
            }),
            l.createElement(x.J, {
              className: (0, S.Z)(r, U().stream_icon_show_on_hover),
              srcs: e,
            })
          );
        }
        return l.createElement("img", { className: r, src: a });
      }
      function ae(e) {
        const { stream: t, orientation: a } = e,
          s = "below" == a,
          r = (0, i.SZ)(() => y.c9.GetBroadcast(t.steamid));
        return r
          ? l.createElement(
              "div",
              {
                className: (0, S.Z)({
                  [U().chat_below_container]: s,
                  [U().chat_rightside_container]: !s,
                  [U().store_chat_ctn]: !0,
                }),
              },
              l.createElement(
                "div",
                { className: U().ChatContainer },
                l.createElement(c.c, {
                  emoticonStore: B.D$,
                  watchLocation: 6,
                  steamID: t.steamid,
                  broadcastID: r.m_ulBroadcastID,
                })
              )
            )
          : null;
      }
    },
  },
]);

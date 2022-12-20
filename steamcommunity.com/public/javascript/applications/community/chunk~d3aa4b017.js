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
    934: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, {
          BroadcastEmbeddablePopoutHeader: () => Ee,
          default: () => de,
        });
      var r = a(70655),
        n = a(9669),
        s = a.n(n),
        o = a(29323),
        i = a(13271),
        l = a(67294),
        c = a(85503),
        d = a(63405),
        m = a(67833),
        p = (a(990), a(52114)),
        _ = a(88335),
        u = a(44741),
        h = a(5146),
        E = a(65924),
        b = a(13596),
        S = a(7573),
        g = a(90666),
        v = (a(92398), a(56052)),
        f = a.n(v);
      const C = (0, o.Pi)((e) => {
        const { appid: t } = e,
          a = (0, E.bJ)(),
          r = (0, l.useRef)({ include_assets: !0, include_release: !0 }),
          [n, s] = (0, p.vs)(t, r.current);
        let o = f().StoreSaleWidgetContainer_mini,
          i = f().StoreSaleWidgetImage_mini,
          c = f().StoreSaleImage_mini;
        if (!n && 2 != s)
          return l.createElement(
            "div",
            { className: o },
            l.createElement(b.V, { size: "medium" }),
            ";"
          );
        if (2 == s || !n.GetName())
          return l.createElement("div", {
            className: _.StoreSaleWidgetEmptyContainer,
          });
        const d = 8 != n.GetAppType(),
          v = (0, m.Hf)(n.GetStorePageURL(), a);
        return l.createElement(
          "div",
          { className: o },
          l.createElement(
            "div",
            { className: _.Actions },
            l.createElement(
              "a",
              { href: v, target: g.De.IN_CLIENT ? void 0 : "_blank" },
              l.createElement(
                h.W,
                { type: "app", id: t },
                l.createElement(
                  "div",
                  { className: i },
                  l.createElement("img", {
                    className: c,
                    src: n.GetAssets().GetSmallCapsuleURL(),
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
                { href: v, target: g.De.IN_CLIENT ? void 0 : "_blank" },
                l.createElement(
                  h.W,
                  { type: "app", id: t },
                  l.createElement(
                    "div",
                    {
                      className: (0, S.Z)(
                        _.StoreSaleWidgetTitle,
                        "StoreSaleWidgetTitle"
                      ),
                    },
                    n.GetName()
                  )
                )
              )
            ),
            l.createElement(
              "div",
              { className: _.StoreSaleWidgetRelease },
              n.GetFormattedSteamReleaseDate()
            ),
            Boolean(d) &&
              l.createElement(u.x1, {
                info: { id: t, type: "game" },
                bShowDemoButton: !0,
              })
          )
        );
      });
      var N = a(26149),
        D = a(1351),
        y = a(1245),
        B = (a(69765), a(58185), a(10767), a(81503)),
        I = a(52795),
        P = a(28976),
        G = (a(3356), a(27991)),
        w = a(159),
        x = a(71387),
        A = a(96187),
        O = a(15396),
        k = a(95598),
        T = a(28268),
        R = a(11539),
        L = a(41311),
        V = a(47808),
        M = a(64839),
        W = (a(19663), a(3389)),
        H = (a(49186), a(461)),
        U = a(17157),
        Z = a.n(U);
      const j = (0, o.Pi)((e) => {
        const { event: t } = e,
          a = t.clanSteamID.GetAccountID(),
          n = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
          o = (0, l.useRef)(null),
          [i, c] = (0, l.useState)(
            t ? H.bq.GetCreatorHome(t.clanSteamID) : null
          );
        if (
          ((0, l.useEffect)(() => {
            const e = s().CancelToken.source();
            o.current = e.cancel;
            return (
              (0, r.mG)(void 0, void 0, void 0, function* () {
                const t = W.K.InitFromClanID(a),
                  r = yield H.bq.LoadCreatorHome(t, e);
                e.token.reason || c(r);
              }),
              () => {
                o.current && o.current("BroadcastDropsDisplay: unmounting");
              }
            );
          }, [a]),
          n || !i || !i.BIsLoaded())
        )
          return null;
        const d =
          g.De.COMMUNITY_BASE_URL +
          "gid/" +
          t.jsondata.broadcast_item_drops_details_clan_accountid +
          "/partnerevents/view/" +
          t.jsondata.broadcast_item_drops_details_event_gid;
        return l.createElement(
          "div",
          { className: Z().item_drop_ctn },
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
                { href: d, target: g.De.IN_CLIENT ? "" : "_blank" },
                (0, L.Xx)("#SalePage_WatchForDrop_LearnMore")
              )
          )
        );
      });
      var F = a(34133),
        X = a.n(F),
        Y = a(9495),
        q = a(56175),
        $ = a(47077),
        z = a(78853),
        J = a(37699),
        K = a(72258),
        Q = a(23937),
        ee = a(55285),
        te = a.n(ee);
      function ae(e) {
        const { steamid: t, closeModal: a } = e;
        return l.createElement(
          J.uH,
          {
            strDescription: "",
            strTitle: (0, L.Xx)("#Button_Share"),
            onCancel: a,
            onOK: a,
            bAlertDialog: !0,
            modalClassName: "EventDisplay_Share_Dialog",
          },
          l.createElement(re, { steamid: t }),
          l.createElement(ne, { steamid: t })
        );
      }
      function re(e) {
        const { steamid: t } = e;
        return l.createElement(
          "div",
          {
            className: (0, S.Z)(X().FlexRowContainer, te().share_controls_ctn),
          },
          l.createElement(
            T.HP,
            { toolTipContent: (0, L.Xx)("#EventDisplay_Share_OnFaceBook") },
            l.createElement(
              K.ns,
              { href: se(t, Q.u_.k_eFacebook), className: te().ShareBtn },
              l.createElement("img", {
                className: (0, S.Z)(X().Button),
                src: q.Z,
              })
            )
          ),
          l.createElement(
            T.HP,
            { toolTipContent: (0, L.Xx)("#EventDisplay_Share_OnTwitter") },
            l.createElement(
              K.ns,
              { href: se(t, Q.u_.k_eTwitter), className: te().ShareBtn },
              l.createElement("img", {
                className: (0, S.Z)(X().Button),
                src: z.Z,
              })
            )
          ),
          l.createElement(
            T.HP,
            { toolTipContent: (0, L.Xx)("#EventDisplay_Share_OnReddit") },
            l.createElement(
              K.ns,
              { href: se(t, Q.u_.k_eReddit), className: te().ShareBtn },
              l.createElement("img", {
                className: (0, S.Z)(X().Button),
                src: $.Z,
              })
            )
          )
        );
      }
      function ne(e) {
        const { steamid: t } = e,
          a = l.createRef(),
          [r, n] = l.useState(""),
          s = l.createRef(),
          o = l.useCallback(
            (e) => {
              a.current &&
                a.current.ownerDocument.defaultView.navigator.clipboard
                  .writeText(a.current.value)
                  .then((e) => {
                    n((0, L.Xx)("#EventDisplay_Share_CopiedToClipboard"));
                  })
                  .catch((e) => {
                    n((0, L.Xx)("#EventDisplay_Share_FailedToCopyToClipboard")),
                      console.error("Failed to copy link to clipboard:", e);
                  });
            },
            [a]
          ),
          i = g.De.COMMUNITY_BASE_URL + "broadcast/watch/" + t;
        return l.createElement(
          "div",
          null,
          l.createElement(
            "div",
            {
              className: (0, S.Z)(X().FlexRowContainer, te().linkField),
              onClick: o,
            },
            l.createElement(
              "span",
              { className: te().LinkInputLabel },
              (0, L.Xx)("#EventDisplay_Share_Link")
            ),
            l.createElement("textarea", {
              className: te().LinkInput,
              ref: a,
              value: i,
              readOnly: !0,
            }),
            Boolean(document.queryCommandSupported("copy")) &&
              l.createElement(
                T.HP,
                { toolTipContent: (0, L.Xx)("#ToolTip_CopyLinkToClipboard") },
                l.createElement(
                  "div",
                  {
                    className: (0, S.Z)(X().Button, X().Icon, te().LinkButton),
                  },
                  l.createElement("img", {
                    className: te().ClipboardIcon,
                    src: Y.Z,
                  })
                )
              )
          ),
          l.createElement("div", { ref: s, className: te().ClipboardText }, r)
        );
      }
      function se(e, t) {
        return g.De.COMMUNITY_BASE_URL + "broadcast/share/" + e + "?site=" + t;
      }
      var oe = a(53622),
        ie = a(41414),
        le = a(19279);
      const ce = {
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
      function de(e) {
        return (function () {
          const e = (0, g.id)();
          return g.De.EREALM != D.IN.k_ESteamRealmChina && !e;
        })()
          ? l.createElement(me, Object.assign({}, e))
          : null;
      }
      let me = class extends l.Component {
        constructor() {
          super(...arguments),
            (this.m_cancelSignal = s().CancelToken.source()),
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
        componentDidMount() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            (0, G.nf)(null),
              yield P.ai
                .Get()
                .LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
              this.m_cancelSignal.token.reason ||
                this.setState({
                  bLoadingPreference: !1,
                  bExpanded: !P.ai
                    .Get()
                    .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                  innerStyle: Object.assign(
                    Object.assign({}, this.state.innerStyle),
                    {
                      maxHeight: P.ai
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
                ? P.ai.Get().HintLoadEmbeddablePreviewStreams(this.props)
                : P.ai.Get().HintLoadEmbeddableStreams(this.props),
              this.props.nAppIDVOD &&
                (P.ai
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
              }, 10);
          });
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("BroadcastEmbeddable component unmounted");
        }
        ToggleBroadcastExpandShrink() {
          let e = P.ai.Get().GetPlayReadyStream(this.props);
          const t = this.state.bExpanded,
            a = I.c9.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
          (0, P.wx)(a, t ? 2 : 3, e.snr),
            t && (0, y.X)() && (0, y.X)().AddEvent(1005),
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
                P.ai.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded)
              );
        }
        OnShrinkTransitionEnd() {
          "0vh" === this.state.innerStyle.maxHeight &&
            this.setState({ bExpanded: !1 }, () =>
              P.ai.Get().SetEmbeddedStreamCollapsed(!0)
            );
        }
        onStreamSelect(e) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            this.setState({ bStartMuted: !1 }),
              P.ai.Get().GetPlayReadyStream(this.props).accountid !=
                e.accountid &&
                (yield P.ai.Get().AttemptToPlayStream(this.props, e));
          });
        }
        PlayTopNonVOD() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            this.setState({ bStartMuted: !1 });
            const e = P.ai
              .Get()
              .GetStreams(this.props)
              .filter(
                (e) =>
                  !this.props.fnFilterStreams || this.props.fnFilterStreams(e)
              );
            (0, P.rg)(e);
            for (const t of e)
              if (!t.nAppIDVOD)
                return void (yield P.ai
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
          const r = P.ai.Get().GetConcurrentStreams(this.props) > 1;
          let n = I.c9.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
            s = l.createElement(
              "div",
              { className: Z().rightPanel },
              l.createElement(he, { key: "right" + n, ImgUrl: e.right_panel })
            ),
            o = l.createElement(he, { key: "left" + n, ImgUrl: e.left_panel });
          if (n < 11) {
            const t = B.C.GetAppIDListForBroadcasterSteamID(e.steamid);
            t && 1 === t.length && (n = t[0]);
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
              ((s = l.createElement(C, {
                key: "mini" + e.accountid,
                appid: n,
              })),
              (a.bRightPanelArtworkOrEmpty = !1)),
            r && !t
              ? ((a.leftPanel = l.createElement(Se, {
                  broadcastEmbedContext: this.props,
                  key: "selector" + n,
                  curStream: e,
                  onStreamSelect: this.onStreamSelect,
                  fnFilterStreams: this.props.fnFilterStreams,
                  bShowCapsuleArt: this.props.bShowCapsuleArt,
                })),
                (a.rightPanel = s))
              : t
              ? ((a.leftPanel = l.createElement("div", null)),
                (a.rightPanel = l.createElement(fe, {
                  stream: e,
                  orientation: "rightside",
                })),
                (a.bRightPanelArtworkOrEmpty = !1))
              : ((a.leftPanel = o), (a.rightPanel = s)),
            a
          );
        }
        MarkBroadcastSeen() {
          this.m_bMarkedUsabilitySeen ||
            ((this.m_bMarkedUsabilitySeen = !0),
            (0, y.X)() && (0, y.X)().AddEvent(1004));
        }
        render() {
          if (this.state.bLoadingPreference) return null;
          let e = P.ai.Get().GetPlayReadyStream(this.props);
          if (e) {
            this.MarkBroadcastSeen();
            let t = "show" === P.ai.Get().GetChatVisibility();
            const {
              event: a,
              language: r,
              fnRenderBroadcastContext: n,
            } = this.props;
            a &&
              (e = Object.assign(Object.assign({}, e), {
                left_panel: a.GetImageURL(
                  "broadcast_left",
                  r || (0, N.jM)(g.De.LANGUAGE)
                ),
                right_panel: a.GetImageURL(
                  "broadcast_right",
                  r || (0, N.jM)(g.De.LANGUAGE)
                ),
                store_title: a.GetBroadcastTitle(r || (0, N.jM)(g.De.LANGUAGE)),
                broadcast_chat_visibility: a.GetBroadcastChatVisibility(),
              }));
            let s = this.ConstructSidePanels(e, t),
              o = e.store_title ? e.store_title : e.title,
              i = P.ai.Get().GetConcurrentStreams(this.props) > 1;
            const c = () => {
              var t, a;
              e.nAppIDVOD && this.PlayTopNonVOD(),
                null === (a = (t = this.props).fnOnVideoEnd) ||
                  void 0 === a ||
                  a.call(t);
            };
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
                      [Z().bordered_container]: !0,
                      [Z().Event]: Boolean(a),
                      broadcast_brd_ctn_trgt: !0,
                    }),
                  },
                  l.createElement(
                    "div",
                    {
                      className: (0, S.Z)(
                        Z().bordered_title,
                        "bordered_title_trgt"
                      ),
                    },
                    l.createElement(x.xP, null),
                    o,
                    l.createElement(
                      "div",
                      { className: Z().bordered_corner_container },
                      Boolean(!this.state.bExpanded) &&
                        l.createElement("div", {
                          className: Z().broadcast_settings_icon,
                          "data-tooltip-text": (0, L.Xx)(
                            "#StoreBroadcast_Change_store_Broadcast_settings"
                          ),
                          onClick: () =>
                            window.open(
                              `${g.De.STORE_BASE_URL}account/preferences/#store_broadcast_settings`
                            ),
                        }),
                      l.createElement("div", {
                        className: this.state.bExpanded
                          ? Z().bordered_corner_expanded
                          : Z().bordered_corner_shrinked,
                        "data-tooltip-text": (0, L.Xx)(
                          "#StoreBroadcast_Hide_Tooltip"
                        ),
                        onClick: this.ToggleBroadcastExpandShrink,
                      })
                    ),
                    Boolean(e.gamedata_subtitle) &&
                      l.createElement(
                        "div",
                        { className: Z().bordered_subtitle },
                        e.gamedata_subtitle
                      )
                  ),
                  Boolean(this.state.bExpanded) &&
                    l.createElement(
                      "div",
                      {
                        className: (0, S.Z)({
                          [Z().container]: !0,
                          embeddable_ctn_trgt: !0,
                          multistream: i,
                          broadcast_right_panel_simple:
                            s.bRightPanelArtworkOrEmpty,
                          broadcast_chat_expanded: t,
                        }),
                        style: Object.assign({}, this.state.innerStyle),
                        onTransitionEnd: this.OnShrinkTransitionEnd,
                      },
                      s.leftPanel,
                      l.createElement(pe, {
                        stream: e,
                        bStartMuted: this.state.bStartMuted,
                        fnRenderBroadcastContext: n,
                        fnOnVideoEnd: c,
                        bWidePlayer: this.props.bWidePlayer,
                      }),
                      s.rightPanel,
                      Boolean(this.state.bExpanded) &&
                        l.createElement(ue, {
                          stream: e,
                          bMultistream: i,
                          chatAnnouncementGivewayGID: s.rightPanel
                            ? void 0
                            : this.props.chat_announcement_giveaway,
                        })
                    )
                ),
                Boolean(
                  a && a.jsondata && a.jsondata.broadcast_item_drops_enabled
                ) && l.createElement(j, { event: a }),
                Boolean(this.state.bExpanded) &&
                  l.createElement(
                    "div",
                    { className: `${a ? Z().Event : ""}` },
                    l.createElement(ue, { stream: e, bMultistream: i })
                  ),
                l.createElement("div", { className: Z().clear_div })
              )
            );
          }
          return l.createElement("div", { className: "NoBroadcastAvailable" });
        }
      };
      (0, r.gn)([M.ak], me.prototype, "ToggleBroadcastExpandShrink", null),
        (0, r.gn)([M.ak], me.prototype, "OnShrinkTransitionEnd", null),
        (0, r.gn)([M.ak], me.prototype, "onStreamSelect", null),
        (0, r.gn)([M.ak], me.prototype, "PlayTopNonVOD", null),
        (me = (0, r.gn)([o.Pi], me));
      class pe extends l.Component {
        constructor(e) {
          super(e),
            (this.m_iVideoContainerRef = l.createRef()),
            (this.state = {
              bPopout: !1,
              bPreventPopup: window.screen.width <= 768,
            });
        }
        CloseBroadcastPopup() {
          const e = I.c9.GetOrCreateBroadcastInfo(
            this.props.stream.steamid
          ).m_nAppID;
          (0, P.wx)(e, 7, this.props.stream.snr),
            (0, y.X)() && (0, y.X)().AddEvent(1006),
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
            { className: Z().wrapper },
            l.createElement(
              R.h,
              { onEnter: this.OnEnter, onLeave: this.OnLeave },
              l.createElement(
                "div",
                {
                  className: (0, S.Z)({
                    [Z().video_placeholder]: !0,
                    video_placeholder_trgt: !0,
                    [Z().WidePlayer]: this.props.bWidePlayer,
                  }),
                  ref: this.m_iVideoContainerRef,
                },
                l.createElement(
                  "div",
                  {
                    className: this.state.bPopout
                      ? Z().broadcast_floating
                      : Z().video_container,
                  },
                  this.state.bPopout &&
                    l.createElement(Ee, {
                      steamIDBroadcast: this.props.stream.steamid,
                      OnPreventPopup: this.CloseBroadcastPopup,
                    }),
                  l.createElement(
                    "div",
                    { className: Z().BroadcastPlayerContainer },
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
      function _e(e) {
        const { stream: t } = e,
          [a] = (0, i.SZ)(() => [t.steamid]),
          r = I.c9.GetOrCreateBroadcastInfo(a).m_nAppID,
          n = ce.list.find(
            (e) =>
              e.appid == r &&
              (!e.broadcasterAccountID || e.broadcasterAccountID == t.accountid)
          );
        if (n) {
          let e = n.url;
          return (
            (g.De.IN_CLIENT ||
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
          const e = g.De.COMMUNITY_BASE_URL + "broadcast/watch/" + a;
          return l.createElement(
            T.HP,
            {
              toolTipContent: (0, L.Xx)("#BroadcastWatch_View_Broadcast_Page"),
            },
            l.createElement(
              "a",
              { href: e, className: Z().external_link },
              l.createElement(k.dLw, null)
            )
          );
        }
      }
      (0, r.gn)([M.ak], pe.prototype, "CloseBroadcastPopup", null),
        (0, r.gn)([M.ak], pe.prototype, "OnEnter", null),
        (0, r.gn)([M.ak], pe.prototype, "OnLeave", null);
      let ue = class extends l.Component {
        OnToggleChat(e) {
          e.preventDefault();
          const t = I.c9.GetOrCreateBroadcastInfo(
            this.props.stream.steamid
          ).m_nAppID;
          (0, P.wx)(
            t,
            "show" === P.ai.Get().GetChatVisibility() ? 5 : 4,
            this.props.stream.snr
          ),
            P.ai.Get().ToggleChatVisibility();
        }
        onWatchBroadcastPage() {
          const e = I.c9.GetOrCreateBroadcastInfo(
            this.props.stream.steamid
          ).m_nAppID;
          (0, P.wx)(e, 9, this.props.stream.snr);
        }
        render() {
          const e = "remove" != P.ai.Get().GetChatVisibility(),
            t = "hide" === P.ai.Get().GetChatVisibility(),
            a = !this.props.stream.nAppIDVOD,
            r = a;
          Number.parseInt(
            "" +
              I.c9.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nViewerCount
          );
          return l.createElement(
            "div",
            { className: (0, S.Z)(Z().viewer_bar, "viewer_bar") },
            l.createElement(
              "div",
              { className: (0, S.Z)(Z().viewer_count, "viewer_count") },
              " "
            ),
            l.createElement(
              "div",
              { className: (0, S.Z)(Z().viewer_links, "viewer_links") },
              Boolean(e && !t && this.props.bMultistream) &&
                l.createElement(
                  "div",
                  { className: Z().chat_link },
                  l.createElement(
                    "a",
                    {
                      href: "#",
                      className: Z().ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    (0, L.Xx)("#sale_three_section_show_streams")
                  )
                ),
              e &&
                l.createElement(
                  "div",
                  { className: Z().chat_link },
                  l.createElement(k.IWH, null),
                  l.createElement(
                    "a",
                    {
                      href: "#",
                      className: Z().ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    (0, L.Xx)(
                      t
                        ? "#sale_three_section_show_chat"
                        : "#sale_three_section_hide_chat"
                    )
                  )
                ),
              r &&
                l.createElement(
                  "div",
                  { className: Z().chat_link },
                  l.createElement(k.mBz, null),
                  l.createElement(
                    "a",
                    {
                      href: "#",
                      className: Z().ChatToggle,
                      onClick: (e) =>
                        (0, ie.AM)(
                          l.createElement(ae, {
                            steamid: this.props.stream.steamid,
                          }),
                          (0, oe.RA)(e)
                        ),
                    },
                    (0, L.Xx)("#Broadcast_ShareBroadcast")
                  )
                ),
              l.createElement(
                T.HP,
                {
                  toolTipContent: (0, L.Xx)(
                    "#StoreBroadcast_Change_store_Broadcast_settings"
                  ),
                },
                l.createElement(
                  "a",
                  {
                    href:
                      g.De.STORE_BASE_URL +
                      "account/preferences/#store_broadcast_settings",
                    target: g.De.IN_CLIENT ? void 0 : "_blank",
                    className: Z().settings_link,
                  },
                  l.createElement(k.Zrf, null)
                )
              ),
              a && l.createElement(_e, Object.assign({}, this.props))
            ),
            Boolean(this.props.chatAnnouncementGivewayGID) &&
              l.createElement(le.U, {
                gidGiveaway: this.props.chatAnnouncementGivewayGID,
                stream: this.props.stream,
              })
          );
        }
      };
      (0, r.gn)([M.ak], ue.prototype, "OnToggleChat", null),
        (0, r.gn)([M.ak], ue.prototype, "onWatchBroadcastPage", null),
        (ue = (0, r.gn)([o.Pi], ue));
      class he extends l.Component {
        render() {
          let e = this.props.ImgUrl;
          return l.createElement(
            l.Fragment,
            null,
            e &&
              l.createElement("img", {
                className: Z().side_panels,
                src: this.props.ImgUrl,
              }),
            !e && l.createElement("div", { className: Z().side_panels })
          );
        }
      }
      const Ee = (0, o.Pi)((e) => {
        const { steamIDBroadcast: t } = e,
          a = I.c9.GetOrCreateBroadcastInfo(t).m_nAppID,
          [r] = (0, p.vs)(a, {});
        return l.createElement(
          "div",
          { className: [Z().PopOutVideoTitleBar, Z().NoSeslect].join(" ") },
          Boolean(r)
            ? l.createElement(
                h._,
                { type: "app", id: a, className: Z().PopOutVideoTitleText },
                (0, L.Xx)("#StoreBroadcast_Detault_popout_Title")
              )
            : l.createElement(
                "div",
                { className: Z().PopOutVideoTitleText },
                (0, L.Xx)("#StoreBroadcast_Detault_popout_Title")
              ),
          l.createElement(
            "button",
            {
              className: Z().PopOutVideoCloseButton,
              "data-tooltip-text": (0, L.Xx)(
                "#StoreBroadcast_close_broadcast_popup"
              ),
              onClick: e.OnPreventPopup,
            },
            l.createElement(k.X, null)
          )
        );
      });
      function be(e, t) {
        var a;
        const r = I.c9.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
          n = w.Z.Get().GetApp(r);
        return e &&
          (null === (a = null == n ? void 0 : n.GetAssets()) || void 0 === a
            ? void 0
            : a.GetHeaderURL())
          ? parseInt(Z().strStreamIconCapsuleArtHeight)
          : parseInt(Z().strStreamIconScreenshotArtHeight);
      }
      function Se(e) {
        const {
            curStream: t,
            onStreamSelect: a,
            fnFilterStreams: r,
            bShowCapsuleArt: n,
            broadcastEmbedContext: s,
          } = e,
          o = (0, l.useRef)(),
          i = (0, l.useMemo)(() => {
            const e = P.ai
              .Get()
              .GetStreams(s)
              .filter((e) => !r || r(e));
            return (0, P.rg)(e), e;
          }, [s, r]);
        return (
          (0, l.useEffect)(() => {
            if (o && o.current) {
              const e = i
                .map((e) => I.c9.GetOrCreateBroadcastInfo(e.steamid).m_nAppID)
                .filter(Boolean);
              w.Z.Get()
                .QueueMultipleAppRequests(e, { include_assets: !0 })
                .then(() => {
                  if (o.current) {
                    let e = 0;
                    for (const a of i) {
                      if (t.accountid == a.accountid) break;
                      e += be(n, a);
                    }
                    o.current.scrollTop = e;
                  }
                });
            }
          }, [i, n, t.accountid, o]),
          l.createElement(
            "div",
            {
              ref: o,
              className: (0, S.Z)({
                [Z().side_panels]: !0,
                side_panels: !0,
                [Z().multistream]: !0,
                [Z().scrollingstreams]: i.length > 3,
              }),
            },
            i.map((e) => {
              var r;
              return l.createElement(ge, {
                key: null !== (r = e.accountid) && void 0 !== r ? r : e.steamid,
                stream: e,
                bSelected: t.accountid == e.accountid,
                onStreamSelect: a,
                bShowCapsuleArt: n,
              });
            })
          )
        );
      }
      function ge(e) {
        var t;
        const {
            onStreamSelect: a,
            bSelected: r,
            stream: n,
            bShowCapsuleArt: s,
          } = e,
          o = (0, i.SZ)(
            () => I.c9.GetOrCreateBroadcastInfo(n.steamid).m_nAppID
          ),
          [c] = (0, p.vs)(null !== (t = n.nAppIDVOD) && void 0 !== t ? t : o, {
            include_assets: !0,
          });
        if (!(0, P.A$)(n)) return null;
        const d = s && (null == c ? void 0 : c.GetAssets().GetHeaderURL()),
          m = Number.parseInt("" + n.viewer_count),
          _ = !Number.isNaN(m),
          u = !!n.nAppIDVOD && (null == c ? void 0 : c.GetName());
        return l.createElement(
          "div",
          {
            className: (0, S.Z)({
              [Z().stream_icon_and_viewer_container]: !0,
              [Z().stream_featured]:
                n.current_selection_priority == P.VA.k_eFeatured,
              [Z().display_capsule_art]: Boolean(d),
            }),
          },
          l.createElement(
            h.W,
            { type: "app", id: o },
            l.createElement(
              O.Y,
              {
                className: Z().stream_icon_container,
                onClick: () => a && a(n),
                rootMargin: "100px 0px 100px 0px",
              },
              l.createElement(ve, {
                strThumbnail: n.thumbnail_http_address,
                bSelected: r,
                strCapsuleArtURL: d,
              }),
              r && l.createElement("div", { className: Z().stream_icon_arrow })
            )
          ),
          l.createElement(
            "div",
            { className: (0, S.Z)(Z().viewer_count, !_ && Z().vod_title) },
            _
              ? l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(k.lsH, null),
                  " ",
                  (0, V.AV)(m)
                )
              : u
          )
        );
      }
      function ve(e) {
        const { strCapsuleArtURL: t, strThumbnail: a, bSelected: r } = e,
          n = r ? Z().stream_icon_selected : Z().stream_icon;
        if (t) {
          const e = [t];
          return l.createElement(
            l.Fragment,
            null,
            l.createElement("img", {
              className: (0, S.Z)(n, Z().stream_icon_hide_on_hover),
              src: t,
            }),
            l.createElement(A.J, {
              className: (0, S.Z)(n, Z().stream_icon_show_on_hover),
              srcs: e,
            })
          );
        }
        return l.createElement("img", { className: n, src: a });
      }
      function fe(e) {
        const { stream: t, orientation: a } = e,
          r = "below" == a,
          [n, s] = (0, i.SZ)(() => {
            var e;
            return [
              I.c9.GetBroadcast(t.steamid),
              null === (e = I.c9.GetBroadcast(t.steamid)) || void 0 === e
                ? void 0
                : e.m_ulBroadcastID,
            ];
          }),
          o = (0, i.SZ)(() => t.steamid);
        return n
          ? l.createElement(
              "div",
              {
                className: (0, S.Z)({
                  [Z().chat_below_container]: r,
                  [Z().chat_rightside_container]: !r,
                  [Z().store_chat_ctn]: !0,
                }),
              },
              l.createElement(
                "div",
                { className: Z().ChatContainer },
                l.createElement(c.c, {
                  emoticonStore: P.D$,
                  watchLocation: 6,
                  steamID: o,
                  broadcastID: s,
                })
              )
            )
          : null;
      }
    },
  },
]);

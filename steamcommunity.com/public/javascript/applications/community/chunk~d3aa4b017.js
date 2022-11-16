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
          BroadcastEmbeddablePopoutHeader: () => he,
          default: () => ce,
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
        I = a(1245),
        y = (a(69765), a(58185), a(10767), a(81503)),
        B = a(49805),
        P = a(28976),
        x = (a(3356), a(27991)),
        G = a(159),
        A = a(71387),
        O = a(96187),
        k = a(15396),
        w = a(95598),
        T = a(28268),
        R = a(11539),
        L = a(41311),
        V = a(47808),
        M = a(64839),
        H = (a(19663), a(3389)),
        W = (a(49186), a(461)),
        j = a(17157),
        U = a.n(j);
      const Z = (0, o.Pi)((e) => {
        const { event: t } = e,
          a = t.clanSteamID.GetAccountID(),
          n = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
          o = (0, l.useRef)(null),
          [i, c] = (0, l.useState)(
            t ? W.bq.GetCreatorHome(t.clanSteamID) : null
          );
        if (
          ((0, l.useEffect)(() => {
            const e = s().CancelToken.source();
            o.current = e.cancel;
            return (
              (0, r.mG)(void 0, void 0, void 0, function* () {
                const t = H.K.InitFromClanID(a),
                  r = yield W.bq.LoadCreatorHome(t, e);
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
                { href: d, target: g.De.IN_CLIENT ? "" : "_blank" },
                (0, L.Xx)("#SalePage_WatchForDrop_LearnMore")
              )
          )
        );
      });
      var X = a(34133),
        F = a.n(X),
        Y = a(9495),
        q = a(56175),
        $ = a(47077),
        z = a(78853),
        J = a(59253),
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
            className: (0, S.Z)(F().FlexRowContainer, te().share_controls_ctn),
          },
          l.createElement(
            T.HP,
            { toolTipContent: (0, L.Xx)("#EventDisplay_Share_OnFaceBook") },
            l.createElement(
              K.ns,
              { href: se(t, Q.u_.k_eFacebook), className: te().ShareBtn },
              l.createElement("img", {
                className: (0, S.Z)(F().Button),
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
                className: (0, S.Z)(F().Button),
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
                className: (0, S.Z)(F().Button),
                src: $.Z,
              })
            )
          )
        );
      }
      function ne(e) {
        const { steamid: t } = e,
          a = l.createRef(),
          [r, n] = l.useState(!1),
          s = l.createRef(),
          o = l.useCallback(
            (e) => {
              a.current &&
                (a.current.select(), document.execCommand("copy"), n(!0));
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
              className: (0, S.Z)(F().FlexRowContainer, te().linkField),
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
                    className: (0, S.Z)(F().Button, F().Icon, te().LinkButton),
                  },
                  l.createElement("img", {
                    className: te().ClipboardIcon,
                    src: Y.Z,
                  })
                )
              )
          ),
          l.createElement(
            "div",
            { ref: s, className: te().ClipboardText },
            r ? (0, L.Xx)("#EventDisplay_Share_CopiedToClipboard") : ""
          )
        );
      }
      function se(e, t) {
        return g.De.COMMUNITY_BASE_URL + "broadcast/share/" + e + "?site=" + t;
      }
      var oe = a(53622),
        ie = a(41414);
      const le = {
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
      function ce(e) {
        return (function () {
          const e = (0, g.id)();
          return g.De.EREALM != D.IN.k_ESteamRealmChina && !e;
        })()
          ? l.createElement(de, Object.assign({}, e))
          : null;
      }
      let de = class extends l.Component {
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
            (0, x.nf)(null),
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
            a = B.c9.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
          (0, P.wx)(a, t ? 2 : 3, e.snr),
            t && (0, I.X)() && (0, I.X)().AddEvent(1005),
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
          let n = B.c9.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
            s = l.createElement(
              "div",
              { className: U().rightPanel },
              l.createElement(ue, { key: "right" + n, ImgUrl: e.right_panel })
            ),
            o = l.createElement(ue, { key: "left" + n, ImgUrl: e.left_panel });
          if (n < 11) {
            const t = y.C.GetAppIDListForBroadcasterSteamID(e.steamid);
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
              ? ((a.leftPanel = l.createElement(be, {
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
                (a.rightPanel = l.createElement(ve, {
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
            (0, I.X)() && (0, I.X)().AddEvent(1004));
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
                    l.createElement(A.xP, null),
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
                              `${g.De.STORE_BASE_URL}account/preferences/#store_broadcast_settings`
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
                            s.bRightPanelArtworkOrEmpty,
                          broadcast_chat_expanded: t,
                        }),
                        style: Object.assign({}, this.state.innerStyle),
                        onTransitionEnd: this.OnShrinkTransitionEnd,
                      },
                      s.leftPanel,
                      l.createElement(me, {
                        stream: e,
                        bStartMuted: this.state.bStartMuted,
                        fnRenderBroadcastContext: n,
                        fnOnVideoEnd: c,
                        bWidePlayer: this.props.bWidePlayer,
                      }),
                      s.rightPanel,
                      this.state.bExpanded &&
                        l.createElement(_e, { stream: e, bMultistream: i })
                    )
                ),
                Boolean(
                  a && a.jsondata && a.jsondata.broadcast_item_drops_enabled
                ) && l.createElement(Z, { event: a }),
                this.state.bExpanded &&
                  l.createElement(
                    "div",
                    { className: `${a ? U().Event : ""}` },
                    l.createElement(_e, { stream: e, bMultistream: i })
                  ),
                l.createElement("div", { className: U().clear_div })
              )
            );
          }
          return l.createElement("div", { className: "NoBroadcastAvailable" });
        }
      };
      (0, r.gn)([M.ak], de.prototype, "ToggleBroadcastExpandShrink", null),
        (0, r.gn)([M.ak], de.prototype, "OnShrinkTransitionEnd", null),
        (0, r.gn)([M.ak], de.prototype, "onStreamSelect", null),
        (0, r.gn)([M.ak], de.prototype, "PlayTopNonVOD", null),
        (de = (0, r.gn)([o.Pi], de));
      class me extends l.Component {
        constructor(e) {
          super(e),
            (this.m_iVideoContainerRef = l.createRef()),
            (this.state = {
              bPopout: !1,
              bPreventPopup: window.screen.width <= 768,
            });
        }
        CloseBroadcastPopup() {
          const e = B.c9.GetOrCreateBroadcastInfo(
            this.props.stream.steamid
          ).m_nAppID;
          (0, P.wx)(e, 7, this.props.stream.snr),
            (0, I.X)() && (0, I.X)().AddEvent(1006),
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
              R.h,
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
                    l.createElement(he, {
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
      function pe(e) {
        const { stream: t } = e,
          [a] = (0, i.SZ)(() => [t.steamid]),
          r = B.c9.GetOrCreateBroadcastInfo(a).m_nAppID,
          n = le.list.find(
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
              { href: e, className: U().external_link },
              l.createElement(w.dLw, null)
            )
          );
        }
      }
      (0, r.gn)([M.ak], me.prototype, "CloseBroadcastPopup", null),
        (0, r.gn)([M.ak], me.prototype, "OnEnter", null),
        (0, r.gn)([M.ak], me.prototype, "OnLeave", null);
      let _e = class extends l.Component {
        OnToggleChat(e) {
          e.preventDefault();
          const t = B.c9.GetOrCreateBroadcastInfo(
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
          const e = B.c9.GetOrCreateBroadcastInfo(
            this.props.stream.steamid
          ).m_nAppID;
          (0, P.wx)(e, 9, this.props.stream.snr);
        }
        render() {
          const e = "remove" != P.ai.Get().GetChatVisibility(),
            t = "hide" === P.ai.Get().GetChatVisibility(),
            a = !this.props.stream.nAppIDVOD,
            r = a;
          let n = Number.parseInt(
            "" +
              B.c9.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nViewerCount
          );
          return l.createElement(
            "div",
            { className: (0, S.Z)(U().viewer_bar, "viewer_bar") },
            l.createElement(
              "div",
              { className: (0, S.Z)(U().viewer_count, "viewer_count") },
              l.createElement(w.lsH, null),
              (0, V.AV)(n)
            ),
            l.createElement(
              "div",
              { className: (0, S.Z)(U().viewer_links, "viewer_links") },
              Boolean(e && !t && this.props.bMultistream) &&
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
              e &&
                l.createElement(
                  "div",
                  { className: U().chat_link },
                  l.createElement(w.IWH, null),
                  l.createElement(
                    "a",
                    {
                      href: "#",
                      className: U().ChatToggle,
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
                  { className: U().chat_link },
                  l.createElement(w.mBz, null),
                  l.createElement(
                    "a",
                    {
                      href: "#",
                      className: U().ChatToggle,
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
                    className: U().settings_link,
                  },
                  l.createElement(w.Zrf, null)
                )
              ),
              a && l.createElement(pe, Object.assign({}, this.props))
            )
          );
        }
      };
      (0, r.gn)([M.ak], _e.prototype, "OnToggleChat", null),
        (0, r.gn)([M.ak], _e.prototype, "onWatchBroadcastPage", null),
        (_e = (0, r.gn)([o.Pi], _e));
      class ue extends l.Component {
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
      const he = (0, o.Pi)((e) => {
        const { steamIDBroadcast: t } = e,
          a = B.c9.GetOrCreateBroadcastInfo(t).m_nAppID,
          [r] = (0, p.vs)(a, {});
        return l.createElement(
          "div",
          { className: [U().PopOutVideoTitleBar, U().NoSeslect].join(" ") },
          Boolean(r)
            ? l.createElement(
                h._,
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
            l.createElement(w.X, null)
          )
        );
      });
      function Ee(e, t) {
        var a;
        const r = B.c9.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
          n = G.Z.Get().GetApp(r);
        return e &&
          (null === (a = null == n ? void 0 : n.GetAssets()) || void 0 === a
            ? void 0
            : a.GetHeaderURL())
          ? parseInt(U().strStreamIconCapsuleArtHeight)
          : parseInt(U().strStreamIconScreenshotArtHeight);
      }
      function be(e) {
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
                .map((e) => B.c9.GetOrCreateBroadcastInfo(e.steamid).m_nAppID)
                .filter(Boolean);
              G.Z.Get()
                .QueueMultipleAppRequests(e, { include_assets: !0 })
                .then(() => {
                  if (o.current) {
                    let e = 0;
                    for (const a of i) {
                      if (t.accountid == a.accountid) break;
                      e += Ee(n, a);
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
                [U().side_panels]: !0,
                side_panels: !0,
                [U().multistream]: !0,
                [U().scrollingstreams]: i.length > 3,
              }),
            },
            i.map((e) => {
              var r;
              return l.createElement(Se, {
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
      function Se(e) {
        var t;
        const {
            onStreamSelect: a,
            bSelected: r,
            stream: n,
            bShowCapsuleArt: s,
          } = e,
          o = (0, i.SZ)(
            () => B.c9.GetOrCreateBroadcastInfo(n.steamid).m_nAppID
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
              [U().stream_icon_and_viewer_container]: !0,
              [U().stream_featured]:
                n.current_selection_priority == P.VA.k_eFeatured,
              [U().display_capsule_art]: Boolean(d),
            }),
          },
          l.createElement(
            h.W,
            { type: "app", id: o },
            l.createElement(
              k.Y,
              {
                className: U().stream_icon_container,
                onClick: () => a && a(n),
                rootMargin: "100px 0px 100px 0px",
              },
              l.createElement(ge, {
                strThumbnail: n.thumbnail_http_address,
                bSelected: r,
                strCapsuleArtURL: d,
              }),
              r && l.createElement("div", { className: U().stream_icon_arrow })
            )
          ),
          l.createElement(
            "div",
            { className: (0, S.Z)(U().viewer_count, !_ && U().vod_title) },
            _
              ? l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(w.lsH, null),
                  " ",
                  (0, V.AV)(m)
                )
              : u
          )
        );
      }
      function ge(e) {
        const { strCapsuleArtURL: t, strThumbnail: a, bSelected: r } = e,
          n = r ? U().stream_icon_selected : U().stream_icon;
        if (t) {
          const e = [t];
          return l.createElement(
            l.Fragment,
            null,
            l.createElement("img", {
              className: (0, S.Z)(n, U().stream_icon_hide_on_hover),
              src: t,
            }),
            l.createElement(O.J, {
              className: (0, S.Z)(n, U().stream_icon_show_on_hover),
              srcs: e,
            })
          );
        }
        return l.createElement("img", { className: n, src: a });
      }
      function ve(e) {
        const { stream: t, orientation: a } = e,
          r = "below" == a,
          n = (0, i.SZ)(() => B.c9.GetBroadcast(t.steamid));
        return n
          ? l.createElement(
              "div",
              {
                className: (0, S.Z)({
                  [U().chat_below_container]: r,
                  [U().chat_rightside_container]: !r,
                  [U().store_chat_ctn]: !0,
                }),
              },
              l.createElement(
                "div",
                { className: U().ChatContainer },
                l.createElement(c.c, {
                  emoticonStore: P.D$,
                  watchLocation: 6,
                  steamID: t.steamid,
                  broadcastID: n.m_ulBroadcastID,
                })
              )
            )
          : null;
      }
    },
  },
]);

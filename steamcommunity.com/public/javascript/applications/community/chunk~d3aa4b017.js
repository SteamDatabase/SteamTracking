/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2832],
  {
    72051: (e) => {
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
    94170: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, {
          BroadcastEmbeddablePopoutHeader: () => ge,
          default: () => _e,
        });
      var r = a(33940),
        n = a(52868),
        s = a.n(n),
        o = a(88464),
        i = a(25125),
        l = a(89526),
        c = a(55844),
        d = a(28388),
        m = a(98009),
        p = a(68562),
        _ = a(25871),
        u = a(1631),
        h = a(44865),
        E = a(98389),
        b = a(71161),
        S = a(3301),
        g = a(19304),
        v = a(32765),
        f = a(72051),
        C = a.n(f);
      const B = (0, o.Pi)((e) => {
        const { appid: t } = e,
          a = (0, b.bJ)(),
          r = (0, l.useRef)({ include_assets: !0, include_release: !0 }),
          [n, s] = (0, _.vs)(t, r.current);
        let o = (0, g.Z)(
            C().StoreSaleWidgetContainer_mini,
            "StoreSaleWidgetContainer_mini",
          ),
          i = C().StoreSaleWidgetImage_mini,
          c = C().StoreSaleImage_mini;
        if (!n && s != _.Y0.k_EStoreItemCacheState_Unavailable)
          return l.createElement(
            "div",
            { className: o },
            l.createElement(S.V, { size: "medium" }),
            ";",
          );
        if (s == _.Y0.k_EStoreItemCacheState_Unavailable || !n.GetName())
          return l.createElement("div", {
            className: u.StoreSaleWidgetEmptyContainer,
          });
        const d = n.GetAppType() != p.Ac.k_EStoreAppType_Series,
          f = (0, m.Hf)(n.GetStorePageURL(), a);
        return l.createElement(
          "div",
          { className: o },
          l.createElement(
            "div",
            { className: u.Actions },
            l.createElement(
              "a",
              { href: f, target: v.De.IN_CLIENT ? void 0 : "_blank" },
              l.createElement(
                E.W,
                { type: "app", id: t },
                l.createElement(
                  "div",
                  { className: i },
                  l.createElement("img", {
                    className: c,
                    src: n.GetAssets().GetSmallCapsuleURL(),
                  }),
                ),
              ),
            ),
          ),
          l.createElement(
            "div",
            { className: u.StoreSaleBroadcastWidgetRight },
            l.createElement(
              "div",
              { className: u.Actions },
              l.createElement(
                "a",
                { href: f, target: v.De.IN_CLIENT ? void 0 : "_blank" },
                l.createElement(
                  E.W,
                  { type: "app", id: t },
                  l.createElement(
                    "div",
                    {
                      className: (0, g.Z)(
                        u.StoreSaleWidgetTitle,
                        "StoreSaleWidgetTitle",
                      ),
                    },
                    n.GetName(),
                  ),
                ),
              ),
            ),
            l.createElement(
              "div",
              { className: u.StoreSaleWidgetRelease },
              n.GetFormattedSteamReleaseDate(),
            ),
            Boolean(d) &&
              l.createElement(h.x1, {
                info: { id: t, type: "game" },
                bShowDemoButton: !0,
              }),
          ),
        );
      });
      var N = a(75457);
      function y() {
        let e = window.GetUsabilityTracker;
        if (e) return e();
      }
      var P = a(90170),
        D = a(28355),
        I = a(74158),
        A = a(52002),
        k = a(45475),
        G = a(98889),
        w = a(75687),
        x = a(69485),
        O = a(20144),
        T = a(54297),
        L = a(46294),
        R = a(701),
        V = a(84343),
        U = a(52550),
        W = a(14826),
        H = a(88443),
        M = a(4306),
        Z = a(47165),
        j = a(74831),
        F = a(29291),
        X = a.n(F);
      const Y = (0, o.Pi)((e) => {
        const { event: t } = e,
          a = t.clanSteamID.GetAccountID(),
          n = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
          o = (0, l.useRef)(null),
          [i, c] = (0, l.useState)(
            t ? j.bq.GetCreatorHome(t.clanSteamID) : null,
          );
        if (
          ((0, l.useEffect)(() => {
            const e = s().CancelToken.source();
            o.current = e.cancel;
            return (
              (0, r.mG)(void 0, void 0, void 0, function* () {
                const t = Z.K.InitFromClanID(a),
                  r = yield j.bq.LoadCreatorHome(t, e);
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
          v.De.COMMUNITY_BASE_URL +
          "gid/" +
          t.jsondata.broadcast_item_drops_details_clan_accountid +
          "/partnerevents/view/" +
          t.jsondata.broadcast_item_drops_details_event_gid;
        return l.createElement(
          "div",
          { className: X().item_drop_ctn },
          l.createElement(
            "div",
            null,
            (0, W.Xx)(
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
              i.GetName(),
            ),
            Boolean(t.jsondata.broadcast_item_drops_details_clan_accountid) &&
              l.createElement(
                "a",
                { href: d, target: v.De.IN_CLIENT ? "" : "_blank" },
                (0, W.Xx)("#SalePage_WatchForDrop_LearnMore"),
              ),
          ),
        );
      });
      var q = a(52629),
        K = a.n(q),
        z = a(76672),
        $ = a(6726),
        J = a(7787),
        Q = a(16947),
        ee = a(99307),
        te = a(75962),
        ae = a(20790),
        re = a(38695),
        ne = a.n(re);
      function se(e) {
        const { steamid: t, closeModal: a } = e;
        return l.createElement(
          ee.uH,
          {
            strDescription: "",
            strTitle: (0, W.Xx)("#Button_Share"),
            onCancel: a,
            onOK: a,
            bAlertDialog: !0,
            modalClassName: "EventDisplay_Share_Dialog",
          },
          l.createElement(oe, { steamid: t }),
          l.createElement(ie, { steamid: t }),
        );
      }
      function oe(e) {
        const { steamid: t } = e;
        return l.createElement(
          "div",
          {
            className: (0, g.Z)(K().FlexRowContainer, ne().share_controls_ctn),
          },
          l.createElement(
            V.HP,
            { toolTipContent: (0, W.Xx)("#EventDisplay_Share_OnFaceBook") },
            l.createElement(
              te.ns,
              { href: le(t, ae.u_.k_eFacebook), className: ne().ShareBtn },
              l.createElement("img", {
                className: (0, g.Z)(K().Button),
                src: $.Z,
              }),
            ),
          ),
          l.createElement(
            V.HP,
            { toolTipContent: (0, W.Xx)("#EventDisplay_Share_OnTwitter") },
            l.createElement(
              te.ns,
              { href: le(t, ae.u_.k_eTwitter), className: ne().ShareBtn },
              l.createElement("img", {
                className: (0, g.Z)(K().Button),
                src: Q.Z,
              }),
            ),
          ),
          l.createElement(
            V.HP,
            { toolTipContent: (0, W.Xx)("#EventDisplay_Share_OnReddit") },
            l.createElement(
              te.ns,
              { href: le(t, ae.u_.k_eReddit), className: ne().ShareBtn },
              l.createElement("img", {
                className: (0, g.Z)(K().Button),
                src: J.Z,
              }),
            ),
          ),
        );
      }
      function ie(e) {
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
                    n((0, W.Xx)("#EventDisplay_Share_CopiedToClipboard"));
                  })
                  .catch((e) => {
                    n((0, W.Xx)("#EventDisplay_Share_FailedToCopyToClipboard")),
                      console.error("Failed to copy link to clipboard:", e);
                  });
            },
            [a],
          ),
          i = v.De.COMMUNITY_BASE_URL + "broadcast/watch/" + t;
        return l.createElement(
          "div",
          null,
          l.createElement(
            "div",
            {
              className: (0, g.Z)(K().FlexRowContainer, ne().linkField),
              onClick: o,
            },
            l.createElement(
              "span",
              { className: ne().LinkInputLabel },
              (0, W.Xx)("#EventDisplay_Share_Link"),
            ),
            l.createElement("textarea", {
              className: ne().LinkInput,
              ref: a,
              value: i,
              readOnly: !0,
            }),
            Boolean(document.queryCommandSupported("copy")) &&
              l.createElement(
                V.HP,
                { toolTipContent: (0, W.Xx)("#ToolTip_CopyLinkToClipboard") },
                l.createElement(
                  "div",
                  {
                    className: (0, g.Z)(K().Button, K().Icon, ne().LinkButton),
                  },
                  l.createElement("img", {
                    className: ne().ClipboardIcon,
                    src: z.Z,
                  }),
                ),
              ),
          ),
          l.createElement("div", { ref: s, className: ne().ClipboardText }, r),
        );
      }
      function le(e, t) {
        return v.De.COMMUNITY_BASE_URL + "broadcast/share/" + e + "?site=" + t;
      }
      var ce = a(60161),
        de = a(57742),
        me = a(50295);
      const pe = {
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
            broadcasterAccountID: 1532096361,
          },
        ],
      };
      function _e(e) {
        return (function () {
          const e = (0, v.id)();
          return !(0, v.h4)() && !e;
        })()
          ? l.createElement(ue, Object.assign({}, e))
          : null;
      }
      let ue = class extends l.Component {
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
            yield G.ai
              .Get()
              .LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
              this.m_cancelSignal.token.reason ||
                this.setState({
                  bLoadingPreference: !1,
                  bExpanded: !G.ai
                    .Get()
                    .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                  innerStyle: Object.assign(
                    Object.assign({}, this.state.innerStyle),
                    {
                      maxHeight: G.ai
                        .Get()
                        .BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
                        ? "0vh"
                        : "100vh",
                    },
                  ),
                }),
              yield this.props.bIsPreview &&
              this.props.accountIDs &&
              !this.props.event.BUsesContentHubForItemSource()
                ? G.ai.Get().HintLoadEmbeddablePreviewStreams(this.props)
                : G.ai.Get().HintLoadEmbeddableStreams(this.props),
              this.props.nAppIDVOD &&
                G.ai
                  .Get()
                  .SetupEmbeddableVOD(this.props, !this.props.bSkipPreRoll),
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
          let e = G.ai.Get().GetPlayReadyStream(this.props);
          const t = this.state.bExpanded,
            a = k.c9.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
          (0, G.wx)(
            a,
            t
              ? D.d2.k_EProductActionHideBroadcast
              : D.d2.k_EProductActionShowBroadcast,
            e.snr,
          ),
            t &&
              y() &&
              y().AddEvent(I.VK.k_EStoreUsabilityEvent_App_BroadcastHidden),
            window.setTimeout(
              () =>
                this.setState({
                  innerStyle: Object.assign(
                    Object.assign({}, this.state.innerStyle),
                    { maxHeight: t ? "0vh" : "100vh" },
                  ),
                }),
              10,
            ),
            t ||
              this.setState({ bExpanded: !this.state.bExpanded }, () =>
                G.ai.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
              );
        }
        OnShrinkTransitionEnd() {
          "0vh" === this.state.innerStyle.maxHeight &&
            this.setState({ bExpanded: !1 }, () =>
              G.ai.Get().SetEmbeddedStreamCollapsed(!0),
            );
        }
        onStreamSelect(e) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            this.setState({ bStartMuted: !1 }),
              G.ai.Get().GetPlayReadyStream(this.props).accountid !=
                e.accountid &&
                (yield G.ai.Get().AttemptToPlayStream(this.props, e));
          });
        }
        PlayNextNonVOD() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            this.setState({ bStartMuted: !1 });
            const e = G.ai
              .Get()
              .GetStreams(this.props)
              .filter(
                (e) =>
                  !this.props.fnFilterStreams || this.props.fnFilterStreams(e),
              );
            yield G.ai.Get().PlayFromAvailableStreams(this.props, e, !0);
          });
        }
        ConstructSidePanels(e, t) {
          let a = {
            leftPanel: null,
            rightPanel: null,
            bRightPanelArtworkOrEmpty: !0,
          };
          if (this.props.bWidePlayer) return a;
          const r = G.ai.Get().GetConcurrentStreams(this.props) > 1;
          let n = k.c9.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
            s = l.createElement(
              "div",
              { className: X().rightPanel },
              l.createElement(Se, { key: "right" + n, ImgUrl: e.right_panel }),
            ),
            o = l.createElement(Se, { key: "left" + n, ImgUrl: e.left_panel });
          if (n < 11) {
            const t = A.C.GetAppIDListForBroadcasterSteamID(e.steamid);
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
              ((s = l.createElement(B, {
                key: "mini" + e.accountid,
                appid: n,
              })),
              (a.bRightPanelArtworkOrEmpty = !1)),
            r && !t
              ? ((a.leftPanel = l.createElement(fe, {
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
                (a.rightPanel = l.createElement(Ne, {
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
            y() &&
              y().AddEvent(I.VK.k_EStoreUsabilityEvent_App_BroadcastPlayed));
        }
        render() {
          if (this.state.bLoadingPreference) return null;
          let e = G.ai.Get().GetPlayReadyStream(this.props);
          if (e) {
            this.MarkBroadcastSeen();
            let t = "show" === G.ai.Get().GetChatVisibility();
            const {
              event: a,
              language: r,
              fnRenderBroadcastContext: n,
            } = this.props;
            a &&
              (e = Object.assign(Object.assign({}, e), {
                left_panel: a.GetImageURL(
                  "broadcast_left",
                  r || (0, N.jM)(v.De.LANGUAGE),
                ),
                right_panel: a.GetImageURL(
                  "broadcast_right",
                  r || (0, N.jM)(v.De.LANGUAGE),
                ),
                store_title: a.GetBroadcastTitle(r || (0, N.jM)(v.De.LANGUAGE)),
                broadcast_chat_visibility: a.GetBroadcastChatVisibility(),
              }));
            let s = this.ConstructSidePanels(e, t),
              o = e.store_title ? e.store_title : e.title,
              i = G.ai.Get().GetConcurrentStreams(this.props) > 1;
            const c = () => {
              var t, a;
              e.nAppIDVOD && this.PlayNextNonVOD(),
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
                    className: (0, g.Z)({
                      [X().bordered_container]: !0,
                      [X().Event]: Boolean(a),
                      broadcast_brd_ctn_trgt: !0,
                    }),
                  },
                  l.createElement(
                    "div",
                    {
                      className: (0, g.Z)(
                        X().bordered_title,
                        "bordered_title_trgt",
                      ),
                    },
                    l.createElement(O.xP, null),
                    l.createElement("div", { className: X().streamTitle }, o),
                    l.createElement(
                      "div",
                      { className: X().bordered_corner_container },
                      Boolean(!this.state.bExpanded) &&
                        l.createElement("div", {
                          className: X().broadcast_settings_icon,
                          "data-tooltip-text": (0, W.Xx)(
                            "#StoreBroadcast_Change_store_Broadcast_settings",
                          ),
                          onClick: () =>
                            window.open(
                              `${v.De.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                            ),
                        }),
                      l.createElement("div", {
                        className: this.state.bExpanded
                          ? X().bordered_corner_expanded
                          : X().bordered_corner_shrinked,
                        "data-tooltip-text": (0, W.Xx)(
                          "#StoreBroadcast_Hide_Tooltip",
                        ),
                        onClick: this.ToggleBroadcastExpandShrink,
                      }),
                    ),
                    Boolean(e.gamedata_subtitle) &&
                      l.createElement(
                        "div",
                        { className: X().bordered_subtitle },
                        e.gamedata_subtitle,
                      ),
                  ),
                  Boolean(this.state.bExpanded) &&
                    l.createElement(
                      "div",
                      {
                        className: (0, g.Z)({
                          [X().container]: !0,
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
                      l.createElement(he, {
                        stream: e,
                        bStartMuted: this.state.bStartMuted,
                        fnRenderBroadcastContext: n,
                        fnOnVideoEnd: c,
                        bWidePlayer: this.props.bWidePlayer,
                      }),
                      s.rightPanel,
                      Boolean(this.state.bExpanded) &&
                        l.createElement(be, {
                          stream: e,
                          bMultistream: i,
                          chatAnnouncementGivewayGID: s.rightPanel
                            ? void 0
                            : this.props.chat_announcement_giveaway,
                        }),
                    ),
                ),
                Boolean(
                  a && a.jsondata && a.jsondata.broadcast_item_drops_enabled,
                ) && l.createElement(Y, { event: a }),
                l.createElement("div", { className: X().clear_div }),
              ),
            );
          }
          return l.createElement("div", { className: "NoBroadcastAvailable" });
        }
      };
      (0, r.gn)([M.ak], ue.prototype, "ToggleBroadcastExpandShrink", null),
        (0, r.gn)([M.ak], ue.prototype, "OnShrinkTransitionEnd", null),
        (0, r.gn)([M.ak], ue.prototype, "onStreamSelect", null),
        (0, r.gn)([M.ak], ue.prototype, "PlayNextNonVOD", null),
        (ue = (0, r.gn)([o.Pi], ue));
      class he extends l.Component {
        constructor(e) {
          super(e),
            (this.m_iVideoContainerRef = l.createRef()),
            (this.state = {
              bPopout: !1,
              bPreventPopup: window.screen.width <= 768,
            });
        }
        CloseBroadcastPopup() {
          const e = k.c9.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, G.wx)(
            e,
            D.d2.k_EProductActionCloseBroadcastSmallPopup,
            this.props.stream.snr,
          ),
            y() &&
              y().AddEvent(I.VK.k_EStoreUsabilityEvent_App_BroadcastMiniClosed),
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
            { className: X().wrapper },
            l.createElement(
              U.h,
              { onEnter: this.OnEnter, onLeave: this.OnLeave },
              l.createElement(
                "div",
                {
                  className: (0, g.Z)({
                    [X().video_placeholder]: !0,
                    video_placeholder_trgt: !0,
                    [X().WidePlayer]: this.props.bWidePlayer,
                  }),
                  ref: this.m_iVideoContainerRef,
                },
                l.createElement(
                  "div",
                  {
                    className: this.state.bPopout
                      ? X().broadcast_floating
                      : X().video_container,
                  },
                  this.state.bPopout &&
                    l.createElement(ge, {
                      steamIDBroadcast: this.props.stream.steamid,
                      OnPreventPopup: this.CloseBroadcastPopup,
                    }),
                  l.createElement(
                    "div",
                    { className: X().BroadcastPlayerContainer },
                    l.createElement(d.default, {
                      steamIDBroadcast: this.props.stream.steamid,
                      watchLocation:
                        P.q2.k_EBroadcastWatchLocation_StoreAppPage,
                      bStartMuted: this.props.bStartMuted,
                      fnRenderBroadcastContext:
                        this.props.fnRenderBroadcastContext,
                      fnOnVideoEnd: this.props.fnOnVideoEnd,
                      nAppIDVOD: this.props.stream.nAppIDVOD,
                    }),
                  ),
                ),
              ),
            ),
          );
        }
      }
      function Ee(e) {
        const { stream: t } = e,
          [a] = (0, i.SZ)(() => [t.steamid]),
          r = k.c9.GetOrCreateBroadcastInfo(a).m_nAppID,
          n = pe.list.find(
            (e) =>
              e.appid == r &&
              (!e.broadcasterAccountID ||
                e.broadcasterAccountID == t.accountid),
          );
        if (n) {
          let e = n.url;
          return (
            (v.De.IN_CLIENT ||
              navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
              navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
              navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
              (e = "steam://openurl/" + e),
            l.createElement(
              "a",
              { href: e },
              (0, W.Xx)("#Broadcast_Embed_Watch_With_Frieds_SteamTV"),
            )
          );
        }
        {
          const e = v.De.COMMUNITY_BASE_URL + "broadcast/watch/" + a;
          return l.createElement(
            V.HP,
            {
              toolTipContent: (0, W.Xx)("#BroadcastWatch_View_Broadcast_Page"),
            },
            l.createElement(
              "a",
              { href: e, className: X().external_link },
              l.createElement(R.dLw, null),
            ),
          );
        }
      }
      (0, r.gn)([M.ak], he.prototype, "CloseBroadcastPopup", null),
        (0, r.gn)([M.ak], he.prototype, "OnEnter", null),
        (0, r.gn)([M.ak], he.prototype, "OnLeave", null);
      let be = class extends l.Component {
        OnToggleChat(e) {
          e.preventDefault();
          const t = k.c9.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, G.wx)(
            t,
            "show" === G.ai.Get().GetChatVisibility()
              ? D.d2.k_EProductActionHideBroadcastChat
              : D.d2.k_EProductActionShowBroadcastChat,
            this.props.stream.snr,
          ),
            G.ai.Get().ToggleChatVisibility();
        }
        onWatchBroadcastPage() {
          const e = k.c9.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, G.wx)(
            e,
            D.d2.k_EProductActionOpenBroadcastWatchPage,
            this.props.stream.snr,
          );
        }
        render() {
          const e = "remove" != G.ai.Get().GetChatVisibility(),
            t = "hide" === G.ai.Get().GetChatVisibility(),
            a = !this.props.stream.nAppIDVOD,
            r = a;
          Number.parseInt(
            "" +
              k.c9.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nViewerCount,
          );
          return l.createElement(
            "div",
            { className: (0, g.Z)(X().viewer_bar, "viewer_bar") },
            l.createElement(
              "div",
              { className: (0, g.Z)(X().viewer_count, "viewer_count") },
              " ",
            ),
            l.createElement(
              "div",
              { className: (0, g.Z)(X().viewer_links, "viewer_links") },
              Boolean(e && !t && this.props.bMultistream) &&
                l.createElement(
                  "div",
                  { className: X().chat_link },
                  l.createElement(
                    "a",
                    {
                      href: "#",
                      className: X().ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    (0, W.Xx)("#sale_three_section_show_streams"),
                  ),
                ),
              e &&
                l.createElement(
                  "div",
                  { className: X().chat_link },
                  l.createElement(R.IWH, null),
                  l.createElement(
                    "a",
                    {
                      href: "#",
                      className: X().ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    (0, W.Xx)(
                      t
                        ? "#sale_three_section_show_chat"
                        : "#sale_three_section_hide_chat",
                    ),
                  ),
                ),
              r &&
                l.createElement(
                  "div",
                  { className: X().chat_link },
                  l.createElement(R.mBz, null),
                  l.createElement(
                    "a",
                    {
                      href: "#",
                      className: X().ChatToggle,
                      onClick: (e) =>
                        (0, de.AM)(
                          l.createElement(se, {
                            steamid: this.props.stream.steamid,
                          }),
                          (0, ce.RA)(e),
                        ),
                    },
                    (0, W.Xx)("#Broadcast_ShareBroadcast"),
                  ),
                ),
              l.createElement(
                V.HP,
                {
                  toolTipContent: (0, W.Xx)(
                    "#StoreBroadcast_Change_store_Broadcast_settings",
                  ),
                },
                l.createElement(
                  "a",
                  {
                    href:
                      v.De.STORE_BASE_URL +
                      "account/preferences/#store_broadcast_settings",
                    target: v.De.IN_CLIENT ? void 0 : "_blank",
                    className: X().settings_link,
                  },
                  l.createElement(R.Zrf, null),
                ),
              ),
              a && l.createElement(Ee, Object.assign({}, this.props)),
            ),
            Boolean(this.props.chatAnnouncementGivewayGID) &&
              l.createElement(me.U, {
                gidGiveaway: this.props.chatAnnouncementGivewayGID,
                stream: this.props.stream,
              }),
          );
        }
      };
      (0, r.gn)([M.ak], be.prototype, "OnToggleChat", null),
        (0, r.gn)([M.ak], be.prototype, "onWatchBroadcastPage", null),
        (be = (0, r.gn)([o.Pi], be));
      class Se extends l.Component {
        render() {
          let e = this.props.ImgUrl;
          return l.createElement(
            l.Fragment,
            null,
            e &&
              l.createElement("img", {
                className: X().side_panels,
                src: this.props.ImgUrl,
              }),
            !e && l.createElement("div", { className: X().side_panels }),
          );
        }
      }
      const ge = (0, o.Pi)((e) => {
        const { steamIDBroadcast: t } = e,
          a = k.c9.GetOrCreateBroadcastInfo(t).m_nAppID,
          [r] = (0, _.vs)(a, {});
        return l.createElement(
          "div",
          { className: [X().PopOutVideoTitleBar, X().NoSeslect].join(" ") },
          Boolean(r)
            ? l.createElement(
                E._,
                { type: "app", id: a, className: X().PopOutVideoTitleText },
                (0, W.Xx)("#StoreBroadcast_Detault_popout_Title"),
              )
            : l.createElement(
                "div",
                { className: X().PopOutVideoTitleText },
                (0, W.Xx)("#StoreBroadcast_Detault_popout_Title"),
              ),
          l.createElement(
            "button",
            {
              className: X().PopOutVideoCloseButton,
              "data-tooltip-text": (0, W.Xx)(
                "#StoreBroadcast_close_broadcast_popup",
              ),
              onClick: e.OnPreventPopup,
            },
            l.createElement(R.X, null),
          ),
        );
      });
      function ve(e, t) {
        var a;
        const r = k.c9.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
          n = x.Z.Get().GetApp(r);
        return e &&
          (null === (a = null == n ? void 0 : n.GetAssets()) || void 0 === a
            ? void 0
            : a.GetHeaderURL())
          ? parseInt(X().strStreamIconCapsuleArtHeight)
          : parseInt(X().strStreamIconScreenshotArtHeight);
      }
      function fe(e) {
        const {
            curStream: t,
            onStreamSelect: a,
            fnFilterStreams: r,
            bShowCapsuleArt: n,
            broadcastEmbedContext: s,
          } = e,
          o = (0, l.useRef)(),
          i = (0, l.useMemo)(() => {
            const e = G.ai
              .Get()
              .GetStreams(s)
              .filter((e) => !r || r(e));
            return (0, G.rg)(e), e;
          }, [s, r]);
        return (
          (0, l.useEffect)(() => {
            if (o && o.current) {
              const e = i
                .map((e) => k.c9.GetOrCreateBroadcastInfo(e.steamid).m_nAppID)
                .filter(Boolean);
              x.Z.Get()
                .QueueMultipleAppRequests(e, { include_assets: !0 })
                .then(() => {
                  if (o.current) {
                    let e = 0;
                    for (const a of i) {
                      if (t.accountid == a.accountid) break;
                      e += ve(n, a);
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
              className: (0, g.Z)({
                [X().side_panels]: !0,
                side_panels: !0,
                [X().multistream]: !0,
                [X().scrollingstreams]: i.length > 3,
              }),
            },
            i.map((e) => {
              var r;
              return l.createElement(Ce, {
                key: null !== (r = e.accountid) && void 0 !== r ? r : e.steamid,
                stream: e,
                bSelected: t.accountid == e.accountid,
                onStreamSelect: a,
                bShowCapsuleArt: n,
              });
            }),
          )
        );
      }
      function Ce(e) {
        var t;
        const {
            onStreamSelect: a,
            bSelected: r,
            stream: n,
            bShowCapsuleArt: s,
          } = e,
          o = (0, i.SZ)(
            () => k.c9.GetOrCreateBroadcastInfo(n.steamid).m_nAppID,
          ),
          [c] = (0, _.vs)(null !== (t = n.nAppIDVOD) && void 0 !== t ? t : o, {
            include_assets: !0,
          });
        if (!(0, G.A$)(n)) return null;
        const d = s && (null == c ? void 0 : c.GetAssets().GetHeaderURL()),
          m = Number.parseInt("" + n.viewer_count),
          p = !Number.isNaN(m),
          u = !!n.nAppIDVOD && (null == c ? void 0 : c.GetName());
        return l.createElement(
          "div",
          {
            className: (0, g.Z)({
              [X().stream_icon_and_viewer_container]: !0,
              [X().stream_featured]:
                n.current_selection_priority == w.VA.k_eFeatured,
              [X().display_capsule_art]: Boolean(d),
            }),
          },
          l.createElement(
            E.W,
            { type: "app", id: o },
            l.createElement(
              L.Y,
              {
                className: X().stream_icon_container,
                onClick: () => a && a(n),
                rootMargin: "100px 0px 100px 0px",
              },
              l.createElement(Be, {
                strThumbnail: n.thumbnail_http_address,
                bSelected: r,
                strCapsuleArtURL: d,
              }),
              r && l.createElement("div", { className: X().stream_icon_arrow }),
            ),
          ),
          l.createElement(
            "div",
            { className: (0, g.Z)(X().viewer_count, !p && X().vod_title) },
            p
              ? l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(R.lsH, null),
                  " ",
                  (0, H.AV)(m),
                )
              : u,
          ),
        );
      }
      function Be(e) {
        const { strCapsuleArtURL: t, strThumbnail: a, bSelected: r } = e,
          n = r ? X().stream_icon_selected : X().stream_icon;
        if (t) {
          const e = [t];
          return l.createElement(
            l.Fragment,
            null,
            l.createElement("img", {
              className: (0, g.Z)(n, X().stream_icon_hide_on_hover),
              src: t,
            }),
            l.createElement(T.J, {
              className: (0, g.Z)(n, X().stream_icon_show_on_hover),
              srcs: e,
            }),
          );
        }
        return l.createElement("img", { className: n, src: a });
      }
      function Ne(e) {
        const { stream: t, orientation: a } = e,
          r = "below" == a,
          [n, s] = (0, i.SZ)(() => {
            var e;
            return [
              k.c9.GetBroadcast(t.steamid),
              null === (e = k.c9.GetBroadcast(t.steamid)) || void 0 === e
                ? void 0
                : e.m_ulBroadcastID,
            ];
          }),
          o = (0, i.SZ)(() => t.steamid);
        return n
          ? l.createElement(
              "div",
              {
                className: (0, g.Z)({
                  [X().chat_below_container]: r,
                  [X().chat_rightside_container]: !r,
                  [X().store_chat_ctn]: !0,
                }),
              },
              l.createElement(
                "div",
                { className: X().ChatContainer },
                l.createElement(c.c, {
                  emoticonStore: G.D$,
                  watchLocation: P.q2.k_EBroadcastWatchLocation_StoreAppPage,
                  steamID: o,
                  broadcastID: s,
                }),
              ),
            )
          : null;
      }
    },
    52550: (e, t, a) => {
      "use strict";
      a.d(t, { h: () => s });
      var r = a(89526),
        n = a(74802);
      const s = (e) => {
        const { onPositionChange: t, onLeave: a } = e,
          s = r.useCallback(
            (e) => (
              void 0 === e.previousPosition &&
                e.currentPosition === n.h.above &&
                a &&
                a(e),
              t && t(e)
            ),
            [t, a],
          );
        return r.createElement(
          n.h,
          Object.assign({}, e, { onPositionChange: s }),
        );
      };
    },
  },
]);

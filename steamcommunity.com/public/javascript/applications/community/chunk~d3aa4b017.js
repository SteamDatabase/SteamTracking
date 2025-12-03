/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9517],
  {
    43087: (e) => {
      e.exports = {
        StoreSaleWidgetContainer_mini: "nacWp0zfiXg_UWQW639_1",
        Action: "_2Xpw9--lhL-kpt-lUannE1",
        WishList: "_3mTSEg2yzb9H5zdRPv3SAA",
        StoreSaleWidgetImage_mini: "yvW2hgWZFqKjkjDbHrtPf",
        StoreSaleImage_mini: "_1zSsmz7ESvggIV3mlgPyyv",
        StoreSaleWidgetShortDesc_mini: "_2ZkfUmESIrnc0pJNmdiFW4",
      };
    },
    45476: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, {
          BroadcastEmbeddablePopoutHeader: () => Ee,
          default: () => me,
        });
      var r = a(34629),
        n = a(41735),
        s = a.n(n),
        o = a(75844),
        i = a(65946),
        l = a(90626),
        c = a(39606),
        d = a(72224),
        m = a(55963),
        p = a(15161),
        u = a(55263),
        h = a(18654),
        _ = a(94095),
        A = a(37076),
        E = a(60014),
        S = a(22797),
        g = a(52038),
        N = a(78327),
        b = a(43087),
        C = a.n(b);
      const I = (0, o.PA)((e) => {
        const { appid: t } = e,
          a = (0, E.n9)(),
          r = (0, l.useRef)({ include_assets: !0, include_release: !0 }),
          [n, s] = (0, u.t7)(t, r.current);
        let o = (0, g.A)(
            C().StoreSaleWidgetContainer_mini,
            "StoreSaleWidgetContainer_mini",
          ),
          i = C().StoreSaleWidgetImage_mini,
          c = C().StoreSaleImage_mini;
        if (!n && s != u.N4.k_EStoreItemCacheState_Unavailable)
          return l.createElement(
            "div",
            { className: o },
            l.createElement(S.t, { size: "medium" }),
          );
        if (s == u.N4.k_EStoreItemCacheState_Unavailable || !n.GetName())
          return l.createElement("div", {
            className: h.StoreSaleWidgetEmptyContainer,
          });
        const d = n.GetAppType() != p.uE.k_EStoreAppType_Series,
          b = (0, m.wJ)(n.GetStorePageURL(!0), a);
        return l.createElement(
          "div",
          { className: o },
          l.createElement(
            "a",
            { href: b, target: N.TS.IN_CLIENT ? void 0 : "_blank" },
            l.createElement(
              A.j,
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
          l.createElement(
            "div",
            { className: h.StoreSaleBroadcastWidgetRight },
            l.createElement(
              "a",
              { href: b, target: N.TS.IN_CLIENT ? void 0 : "_blank" },
              l.createElement(
                A.j,
                { type: "app", id: t },
                l.createElement(
                  "div",
                  {
                    className: (0, g.A)(
                      h.StoreSaleWidgetTitle,
                      "StoreSaleWidgetTitle",
                    ),
                  },
                  n.GetName(),
                ),
              ),
            ),
            l.createElement(
              "div",
              { className: h.StoreSaleWidgetRelease },
              n.GetFormattedSteamReleaseDate(),
            ),
            Boolean(d) &&
              l.createElement(_.wD, {
                info: { id: t, type: "game" },
                bShowDemoButton: !0,
              }),
          ),
        );
      });
      var w = a(22837);
      function D() {
        let e = window.GetUsabilityTracker;
        if (e) return e();
      }
      var M = a(76453),
        v = a(78448),
        y = a(75487),
        B = a(60727),
        T = a(54728),
        L = a(34010),
        f = a(69300),
        k = a(13952),
        j = a(94011),
        P = a(26296),
        U = a(96236),
        G = a(12155),
        x = a(32754),
        O = a(61859),
        z = a(82227),
        R = a(73745),
        V = a(17720),
        F = a(67165),
        W = a(53120),
        H = a.n(W);
      const Q = (0, o.PA)((e) => {
        const { event: t } = e,
          a = t.clanSteamID.GetAccountID(),
          r = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
          n = (0, l.useRef)(null),
          [o, i] = (0, l.useState)(
            t ? F.pF.GetCreatorHome(t.clanSteamID) : null,
          );
        if (
          ((0, l.useEffect)(() => {
            const e = s().CancelToken.source();
            n.current = e.cancel;
            return (
              (async () => {
                const t = V.b.InitFromClanID(a),
                  r = await F.pF.LoadCreatorHome(t, !1, e);
                e.token.reason || i(r);
              })(),
              () => {
                n.current && n.current("BroadcastDropsDisplay: unmounting");
              }
            );
          }, [a]),
          r || !o || !o.BIsLoaded())
        )
          return null;
        const c =
          N.TS.COMMUNITY_BASE_URL +
          "gid/" +
          t.jsondata.broadcast_item_drops_details_clan_accountid +
          "/partnerevents/view/" +
          t.jsondata.broadcast_item_drops_details_event_gid;
        return l.createElement(
          "div",
          { className: H().item_drop_ctn },
          l.createElement(
            "div",
            null,
            (0, O.we)(
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
              o.GetName(),
            ),
            Boolean(t.jsondata.broadcast_item_drops_details_clan_accountid) &&
              l.createElement(
                "a",
                { href: c, target: N.TS.IN_CLIENT ? "" : "_blank" },
                (0, O.we)("#SalePage_WatchForDrop_LearnMore"),
              ),
          ),
        );
      });
      var J = a(95695),
        Y = a.n(J),
        Z = a(96715),
        X = a(10886),
        K = a(19654),
        q = a(3209),
        $ = a(9154),
        ee = a(51272),
        te = a(14256),
        ae = a.n(te);
      function re(e) {
        const { steamid: t, closeModal: a } = e;
        return l.createElement(
          $.o0,
          {
            strDescription: "",
            strTitle: (0, O.we)("#Button_Share"),
            onCancel: a,
            onOK: a,
            bAlertDialog: !0,
            modalClassName: "EventDisplay_Share_Dialog",
          },
          l.createElement(ne, { steamid: t }),
          l.createElement(se, { steamid: t }),
        );
      }
      function ne(e) {
        const { steamid: t } = e,
          a = (function (e) {
            const t = N.TS.COMMUNITY_BASE_URL + "broadcast/share/" + e;
            return {
              strFacebookUrl: t + "?site=facebook&t=" + Math.random(),
              strTwitterUrl: t + "?site=twitter",
              strRedditUrl: t + "?site=reddit",
            };
          })(t);
        return l.createElement(
          "div",
          {
            className: (0, g.A)(Y().FlexRowContainer, ae().share_controls_ctn),
          },
          l.createElement(
            x.he,
            { toolTipContent: (0, O.we)("#EventDisplay_Share_OnFaceBook") },
            l.createElement(
              ee.uU,
              { href: a.strFacebookUrl, className: ae().ShareBtn },
              l.createElement("img", {
                className: (0, g.A)(Y().Button),
                src: X.A,
              }),
            ),
          ),
          l.createElement(
            x.he,
            { toolTipContent: (0, O.we)("#EventDisplay_Share_OnTwitter") },
            l.createElement(
              ee.uU,
              { href: a.strTwitterUrl, className: ae().ShareBtn },
              l.createElement("img", {
                className: (0, g.A)(Y().Button),
                src: q.A,
              }),
            ),
          ),
          l.createElement(
            x.he,
            { toolTipContent: (0, O.we)("#EventDisplay_Share_OnReddit") },
            l.createElement(
              ee.uU,
              { href: a.strRedditUrl, className: ae().ShareBtn },
              l.createElement("img", {
                className: (0, g.A)(Y().Button),
                src: K.A,
              }),
            ),
          ),
        );
      }
      function se(e) {
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
                    n((0, O.we)("#EventDisplay_Share_CopiedToClipboard"));
                  })
                  .catch((e) => {
                    n((0, O.we)("#EventDisplay_Share_FailedToCopyToClipboard")),
                      console.error("Failed to copy link to clipboard:", e);
                  });
            },
            [a],
          ),
          i = N.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + t;
        return l.createElement(
          "div",
          null,
          l.createElement(
            "div",
            {
              className: (0, g.A)(Y().FlexRowContainer, ae().linkField),
              onClick: o,
            },
            l.createElement(
              "span",
              { className: ae().LinkInputLabel },
              (0, O.we)("#EventDisplay_Share_Link"),
            ),
            l.createElement("textarea", {
              className: ae().LinkInput,
              ref: a,
              value: i,
              readOnly: !0,
            }),
            Boolean(document.queryCommandSupported("copy")) &&
              l.createElement(
                x.he,
                { toolTipContent: (0, O.we)("#ToolTip_CopyLinkToClipboard") },
                l.createElement(
                  "div",
                  {
                    className: (0, g.A)(Y().Button, Y().Icon, ae().LinkButton),
                  },
                  l.createElement("img", {
                    className: ae().ClipboardIcon,
                    src: Z.A,
                  }),
                ),
              ),
          ),
          l.createElement("div", { ref: s, className: ae().ClipboardText }, r),
        );
      }
      var oe = a(56011),
        ie = a(738),
        le = a(29268),
        ce = a(23338);
      const de = {
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
            broadcasterAccountID: 911609735,
          },
        ],
      };
      function me(e) {
        return (function () {
          const e = (0, N.Qn)();
          return !(0, N.Y2)() && !e;
        })()
          ? l.createElement(pe, { ...e })
          : null;
      }
      let pe = class extends l.Component {
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
        async componentDidMount() {
          await L.j.Get().LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
            this.m_cancelSignal.token.reason ||
              this.setState({
                bLoadingPreference: !1,
                bExpanded: !L.j
                  .Get()
                  .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                innerStyle: {
                  ...this.state.innerStyle,
                  maxHeight: L.j
                    .Get()
                    .BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
                    ? "0vh"
                    : "100vh",
                },
              }),
            await (this.props.bIsPreview &&
            this.props.accountIDs &&
            !this.props.event.BUsesContentHubForItemSource()
              ? L.j.Get().HintLoadEmbeddablePreviewStreams(this.props)
              : L.j.Get().HintLoadEmbeddableStreams(this.props)),
            this.props.nAppIDVOD &&
              L.j
                .Get()
                .SetupEmbeddableVOD(this.props, !this.props.bSkipPreRoll),
            window.setTimeout(() => {
              this.m_cancelSignal.token.reason ||
                this.setState({
                  style: { ...this.state.style, maxHeight: "100vh" },
                });
            }, 10);
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("BroadcastEmbeddable component unmounted");
        }
        ToggleBroadcastExpandShrink() {
          let e = L.j.Get().GetPlayReadyStream(this.props);
          const t = this.state.bExpanded,
            a = T.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
          (0, L.U7)(
            a,
            t
              ? v.Mc.k_EProductActionHideBroadcast
              : v.Mc.k_EProductActionShowBroadcast,
            e.snr,
          ),
            t &&
              D() &&
              D().AddEvent(y.Xm.k_EStoreUsabilityEvent_App_BroadcastHidden),
            window.setTimeout(
              () =>
                this.setState({
                  innerStyle: {
                    ...this.state.innerStyle,
                    maxHeight: t ? "0vh" : "100vh",
                  },
                }),
              10,
            ),
            t ||
              this.setState({ bExpanded: !this.state.bExpanded }, () =>
                L.j.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
              );
        }
        OnShrinkTransitionEnd() {
          "0vh" === this.state.innerStyle.maxHeight &&
            this.setState({ bExpanded: !1 }, () =>
              L.j.Get().SetEmbeddedStreamCollapsed(!0),
            );
        }
        async onStreamSelect(e) {
          this.setState({ bStartMuted: !1 }),
            L.j.Get().GetPlayReadyStream(this.props).accountid != e.accountid &&
              (await L.j.Get().AttemptToPlayStream(this.props, e));
        }
        async PlayNextNonVOD() {
          this.setState({ bStartMuted: !1 });
          const e = L.j
            .Get()
            .GetStreams(this.props)
            .filter(
              (e) =>
                !this.props.fnFilterStreams || this.props.fnFilterStreams(e),
            );
          await L.j.Get().PlayFromAvailableStreams(this.props, e, !0);
        }
        ConstructSidePanels(e, t) {
          let a = {
            leftPanel: null,
            rightPanel: null,
            bRightPanelArtworkOrEmpty: !0,
          };
          if (this.props.bWidePlayer) return a;
          const r = L.j.Get().GetConcurrentStreams(this.props) > 1;
          let n = T.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
            s = l.createElement(Ae, {
              key: "right" + n,
              ImgUrl: e.right_panel,
            }),
            o = l.createElement(Ae, { key: "left" + n, ImgUrl: e.left_panel });
          if (n < 11) {
            const t = B.l.GetAppIDListForBroadcasterSteamID(e.steamid);
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
              ((s = l.createElement(I, {
                key: "mini" + e.accountid,
                appid: n,
              })),
              (a.bRightPanelArtworkOrEmpty = !1)),
            r && !t
              ? ((a.leftPanel = l.createElement(ge, {
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
                  (a.rightPanel = l.createElement(Ce, {
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
            D() &&
              D().AddEvent(y.Xm.k_EStoreUsabilityEvent_App_BroadcastPlayed));
        }
        render() {
          if (this.state.bLoadingPreference) return null;
          let e = L.j.Get().GetPlayReadyStream(this.props);
          if (e) {
            this.MarkBroadcastSeen();
            let t = "show" === L.j.Get().GetChatVisibility();
            const {
              event: a,
              language: r,
              fnRenderBroadcastContext: n,
            } = this.props;
            a &&
              (e = {
                ...e,
                left_panel: a.GetImageURL(
                  "broadcast_left",
                  r || (0, w.sf)(N.TS.LANGUAGE),
                ),
                right_panel: a.GetImageURL(
                  "broadcast_right",
                  r || (0, w.sf)(N.TS.LANGUAGE),
                ),
                store_title: a.GetBroadcastTitle(r || (0, w.sf)(N.TS.LANGUAGE)),
                broadcast_chat_visibility: a.GetBroadcastChatVisibility(),
              });
            let s = this.ConstructSidePanels(e, t),
              o = e.store_title ? e.store_title : e.title,
              i = L.j.Get().GetConcurrentStreams(this.props) > 1;
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
                    className: (0, g.A)({
                      [H().bordered_container]: !0,
                      [H().Event]: Boolean(a),
                      broadcast_brd_ctn_trgt: !0,
                    }),
                  },
                  l.createElement(
                    "div",
                    {
                      className: (0, g.A)(
                        H().bordered_title,
                        "bordered_title_trgt",
                      ),
                    },
                    l.createElement(j.K, null),
                    l.createElement("div", { className: H().streamTitle }, o),
                    l.createElement(
                      "div",
                      { className: H().bordered_corner_container },
                      Boolean(!this.state.bExpanded) &&
                        l.createElement(
                          x.he,
                          {
                            toolTipContent: (0, O.we)(
                              "#StoreBroadcast_Change_store_Broadcast_settings",
                            ),
                          },
                          l.createElement("div", {
                            className: H().broadcast_settings_icon,
                            onClick: () =>
                              window.open(
                                `${N.TS.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                              ),
                          }),
                        ),
                      l.createElement(
                        x.he,
                        {
                          toolTipContent: (0, O.we)(
                            "#StoreBroadcast_Hide_Tooltip",
                          ),
                        },
                        l.createElement("div", {
                          className: this.state.bExpanded
                            ? H().bordered_corner_expanded
                            : H().bordered_corner_shrinked,
                          onClick: this.ToggleBroadcastExpandShrink,
                        }),
                      ),
                    ),
                    Boolean(e.gamedata_subtitle) &&
                      l.createElement(
                        "div",
                        { className: H().bordered_subtitle },
                        e.gamedata_subtitle,
                      ),
                  ),
                  Boolean(this.state.bExpanded) &&
                    l.createElement(
                      "div",
                      {
                        className: (0, g.A)({
                          [H().container]: !0,
                          embeddable_ctn_trgt: !0,
                          multistream: i,
                          broadcast_right_panel_simple:
                            s.bRightPanelArtworkOrEmpty,
                          broadcast_chat_expanded: t,
                        }),
                        style: { ...this.state.innerStyle },
                        onTransitionEnd: this.OnShrinkTransitionEnd,
                      },
                      l.createElement(
                        "div",
                        { className: H().LeftPanelCtn },
                        s.leftPanel,
                      ),
                      l.createElement(ue, {
                        stream: e,
                        bStartMuted: this.state.bStartMuted,
                        fnRenderBroadcastContext: n,
                        fnOnVideoEnd: c,
                        bWidePlayer: this.props.bWidePlayer,
                      }),
                      l.createElement(
                        "div",
                        { className: H().RightPanelCtn },
                        s.rightPanel,
                      ),
                      Boolean(this.state.bExpanded) &&
                        l.createElement(_e, {
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
                ) && l.createElement(Q, { event: a }),
                l.createElement("div", { className: H().clear_div }),
              ),
            );
          }
          return l.createElement("div", { className: "NoBroadcastAvailable" });
        }
      };
      (0, r.Cg)([R.oI], pe.prototype, "ToggleBroadcastExpandShrink", null),
        (0, r.Cg)([R.oI], pe.prototype, "OnShrinkTransitionEnd", null),
        (0, r.Cg)([R.oI], pe.prototype, "onStreamSelect", null),
        (0, r.Cg)([R.oI], pe.prototype, "PlayNextNonVOD", null),
        (pe = (0, r.Cg)([o.PA], pe));
      class ue extends l.Component {
        constructor(e) {
          super(e),
            (this.m_iVideoContainerRef = l.createRef()),
            (this.state = {
              bPopout: !1,
              bPreventPopup: window.screen.width <= 768,
            });
        }
        CloseBroadcastPopup() {
          const e = T.es.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, L.U7)(
            e,
            v.Mc.k_EProductActionCloseBroadcastSmallPopup,
            this.props.stream.snr,
          ),
            D() &&
              D().AddEvent(y.Xm.k_EStoreUsabilityEvent_App_BroadcastMiniClosed),
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
            { className: H().wrapper },
            l.createElement(
              ce.j,
              {
                onEnter: this.OnEnter,
                onLeave: this.OnLeave,
                onIntersectionChange: (e) => {
                  e.isIntersecting || this.OnLeave();
                },
                className: (0, g.A)({
                  [H().video_placeholder]: !0,
                  video_placeholder_trgt: !0,
                  [H().WidePlayer]: this.props.bWidePlayer,
                }),
                ref: this.m_iVideoContainerRef,
              },
              l.createElement(
                "div",
                {
                  className: this.state.bPopout
                    ? H().broadcast_floating
                    : H().video_container,
                },
                this.state.bPopout &&
                  l.createElement(Ee, {
                    steamIDBroadcast: this.props.stream.steamid,
                    OnPreventPopup: this.CloseBroadcastPopup,
                  }),
                l.createElement(
                  "div",
                  { className: H().BroadcastPlayerContainer },
                  l.createElement(d.default, {
                    steamIDBroadcast: this.props.stream.steamid,
                    watchLocation: M.nn.k_EBroadcastWatchLocation_StoreAppPage,
                    bStartMuted: this.props.bStartMuted,
                    fnRenderBroadcastContext:
                      this.props.fnRenderBroadcastContext,
                    fnOnVideoEnd: this.props.fnOnVideoEnd,
                    nAppIDVOD: this.props.stream.nAppIDVOD,
                  }),
                ),
              ),
            ),
          );
        }
      }
      function he(e) {
        const { stream: t } = e,
          [a] = (0, i.q3)(() => [t.steamid]),
          r = T.es.GetOrCreateBroadcastInfo(a).m_nAppID,
          n = de.list.find(
            (e) =>
              e.appid == r &&
              (!e.broadcasterAccountID ||
                e.broadcasterAccountID == t.accountid),
          );
        if (n) {
          let e = n.url;
          return (
            (N.TS.IN_CLIENT ||
              navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
              navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
              navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
              (e = "steam://openurl/" + e),
            l.createElement(
              "a",
              { href: e },
              (0, O.we)("#Broadcast_Embed_Watch_With_Frieds_SteamTV"),
            )
          );
        }
        {
          const e = N.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + a;
          return l.createElement(
            x.he,
            {
              toolTipContent: (0, O.we)("#BroadcastWatch_View_Broadcast_Page"),
            },
            l.createElement(
              "a",
              { href: e, className: H().external_link },
              l.createElement(G.GrD, null),
            ),
          );
        }
      }
      (0, r.Cg)([R.oI], ue.prototype, "CloseBroadcastPopup", null),
        (0, r.Cg)([R.oI], ue.prototype, "OnEnter", null),
        (0, r.Cg)([R.oI], ue.prototype, "OnLeave", null);
      let _e = class extends l.Component {
        OnToggleChat(e) {
          e.preventDefault();
          const t = T.es.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, L.U7)(
            t,
            "show" === L.j.Get().GetChatVisibility()
              ? v.Mc.k_EProductActionHideBroadcastChat
              : v.Mc.k_EProductActionShowBroadcastChat,
            this.props.stream.snr,
          ),
            L.j.Get().ToggleChatVisibility();
        }
        onWatchBroadcastPage() {
          const e = T.es.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, L.U7)(
            e,
            v.Mc.k_EProductActionOpenBroadcastWatchPage,
            this.props.stream.snr,
          );
        }
        render() {
          const e = "remove" != L.j.Get().GetChatVisibility(),
            t = "hide" === L.j.Get().GetChatVisibility(),
            a = !this.props.stream.nAppIDVOD,
            r = a;
          Number.parseInt(
            "" +
              T.es.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nViewerCount,
          );
          return l.createElement(
            "div",
            { className: (0, g.A)(H().viewer_bar, "viewer_bar") },
            l.createElement(
              "div",
              { className: (0, g.A)(H().viewer_count, "viewer_count") },
              " ",
            ),
            l.createElement(
              "div",
              { className: (0, g.A)(H().viewer_links, "viewer_links") },
              Boolean(e && !t && this.props.bMultistream) &&
                l.createElement(
                  "div",
                  { className: H().chat_link },
                  l.createElement(
                    "a",
                    {
                      href: "#",
                      className: H().ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    (0, O.we)("#sale_three_section_show_streams"),
                  ),
                ),
              e &&
                l.createElement(
                  "div",
                  { className: H().chat_link },
                  l.createElement(G.ROZ, null),
                  l.createElement(
                    "a",
                    {
                      href: "#",
                      className: H().ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    (0, O.we)(
                      t
                        ? "#sale_three_section_show_chat"
                        : "#sale_three_section_hide_chat",
                    ),
                  ),
                ),
              r &&
                l.createElement(
                  "div",
                  { className: H().chat_link },
                  l.createElement(G.SYj, null),
                  l.createElement(
                    "a",
                    {
                      href: "#",
                      className: H().ChatToggle,
                      onClick: (e) =>
                        (0, ie.pg)(
                          l.createElement(re, {
                            steamid: this.props.stream.steamid,
                          }),
                          (0, oe.uX)(e),
                        ),
                    },
                    (0, O.we)("#Broadcast_ShareBroadcast"),
                  ),
                ),
              l.createElement(
                x.he,
                {
                  toolTipContent: (0, O.we)(
                    "#StoreBroadcast_Change_store_Broadcast_settings",
                  ),
                },
                l.createElement(
                  "a",
                  {
                    href:
                      N.TS.STORE_BASE_URL +
                      "account/preferences/#store_broadcast_settings",
                    target: N.TS.IN_CLIENT ? void 0 : "_blank",
                    className: H().settings_link,
                  },
                  l.createElement(G.wB_, null),
                ),
              ),
              a && l.createElement(he, { ...this.props }),
            ),
            Boolean(this.props.chatAnnouncementGivewayGID) &&
              l.createElement(le.V, {
                gidGiveaway: this.props.chatAnnouncementGivewayGID,
                stream: this.props.stream,
              }),
          );
        }
      };
      (0, r.Cg)([R.oI], _e.prototype, "OnToggleChat", null),
        (0, r.Cg)([R.oI], _e.prototype, "onWatchBroadcastPage", null),
        (_e = (0, r.Cg)([o.PA], _e));
      class Ae extends l.Component {
        render() {
          let e = this.props.ImgUrl;
          return l.createElement(
            "div",
            { className: H().SidePanelBackground },
            e &&
              l.createElement("img", {
                className: H().side_panels,
                src: this.props.ImgUrl,
              }),
            !e && l.createElement("div", { className: H().side_panels }),
          );
        }
      }
      const Ee = (0, o.PA)((e) => {
        const { steamIDBroadcast: t } = e;
        let a = T.es.GetOrCreateBroadcastInfo(t).m_nAppID;
        a = a != T.fO ? a : 0;
        const [r] = (0, u.t7)(a, {});
        return l.createElement(
          "div",
          { className: [H().PopOutVideoTitleBar, H().NoSeslect].join(" ") },
          Boolean(r)
            ? l.createElement(
                A.u,
                { type: "app", id: a, className: H().PopOutVideoTitleText },
                (0, O.we)("#StoreBroadcast_Detault_popout_Title"),
              )
            : l.createElement(
                "div",
                { className: H().PopOutVideoTitleText },
                (0, O.we)("#StoreBroadcast_Detault_popout_Title"),
              ),
          l.createElement(
            x.he,
            {
              toolTipContent: (0, O.we)(
                "#StoreBroadcast_close_broadcast_popup",
              ),
            },
            l.createElement(
              "button",
              {
                className: H().PopOutVideoCloseButton,
                onClick: e.OnPreventPopup,
              },
              l.createElement(G.X, null),
            ),
          ),
        );
      });
      function Se(e, t) {
        var a;
        const r = T.es.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
          n = k.A.Get().GetApp(r);
        return e &&
          (null === (a = null == n ? void 0 : n.GetAssets()) || void 0 === a
            ? void 0
            : a.GetHeaderURL())
          ? parseInt(H().strStreamIconCapsuleArtHeight)
          : parseInt(H().strStreamIconScreenshotArtHeight);
      }
      function ge(e) {
        const {
            curStream: t,
            onStreamSelect: a,
            fnFilterStreams: r,
            bShowCapsuleArt: n,
            broadcastEmbedContext: s,
          } = e,
          o = (0, l.useRef)(void 0),
          i = (0, l.useMemo)(() => {
            const e = L.j
              .Get()
              .GetStreams(s)
              .filter((e) => !r || r(e));
            return (0, L.MU)(e), e;
          }, [s, r]);
        return (
          (0, l.useEffect)(() => {
            if (o && o.current) {
              const e = i
                .map((e) => T.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID)
                .filter(Boolean);
              k.A.Get()
                .QueueMultipleAppRequests(e, { include_assets: !0 })
                .then(() => {
                  if (o.current) {
                    let e = 0;
                    for (const a of i) {
                      if (t.accountid == a.accountid) break;
                      e += Se(n, a);
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
              className: (0, g.A)({
                [H().side_panels]: !0,
                side_panels: !0,
                [H().multistream]: !0,
                [H().scrollingstreams]: i.length > 3,
              }),
            },
            l.createElement(
              "div",
              { className: H().MultiStreamCtn },
              i.map((e) => {
                var r;
                return l.createElement(Ne, {
                  key:
                    null !== (r = e.accountid) && void 0 !== r ? r : e.steamid,
                  stream: e,
                  bSelected: t.accountid == e.accountid,
                  onStreamSelect: a,
                  bShowCapsuleArt: n,
                });
              }),
            ),
          )
        );
      }
      function Ne(e) {
        var t;
        const {
          onStreamSelect: a,
          bSelected: r,
          stream: n,
          bShowCapsuleArt: s,
        } = e;
        let o = (0, i.q3)(
          () => T.es.GetOrCreateBroadcastInfo(n.steamid).m_nAppID,
        );
        o = o != T.fO ? o : 0;
        const [c] = (0, u.t7)(
          null !== (t = n.nAppIDVOD) && void 0 !== t ? t : o,
          { include_assets: !0 },
        );
        if (!(0, L.fn)(n)) return null;
        const d = s && (null == c ? void 0 : c.GetAssets().GetHeaderURL()),
          m = Number.parseInt("" + n.viewer_count),
          p = !Number.isNaN(m),
          h = !!n.nAppIDVOD && (null == c ? void 0 : c.GetName());
        return l.createElement(
          "div",
          {
            className: (0, g.A)({
              [H().stream_icon_and_viewer_container]: !0,
              [H().stream_featured]:
                n.current_selection_priority == f.mY.k_eFeatured,
              [H().display_capsule_art]: Boolean(d),
            }),
          },
          l.createElement(
            A.j,
            { type: "app", id: o, hoverClassName: H().StreamCapsule },
            l.createElement(
              U.K,
              {
                className: (0, g.A)(
                  H().stream_icon_container,
                  r && H().stream_selected,
                ),
                onClick: () => a && a(n),
                rootMargin: "100px 0px 100px 0px",
              },
              l.createElement(be, {
                strThumbnail: n.thumbnail_http_address,
                bSelected: r,
                strCapsuleArtURL: d,
              }),
            ),
          ),
          l.createElement(
            "div",
            { className: (0, g.A)(H().viewer_count, !p && H().vod_title) },
            p
              ? l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(G.y_e, null),
                  l.createElement(
                    "div",
                    { className: H().ViewerNum },
                    (0, z.Dq)(m),
                  ),
                )
              : h,
          ),
        );
      }
      function be(e) {
        const { strCapsuleArtURL: t, strThumbnail: a, bSelected: r } = e,
          n = r ? H().stream_icon_selected : H().stream_icon;
        if (t) {
          const e = [t];
          return l.createElement(
            l.Fragment,
            null,
            l.createElement("img", {
              className: (0, g.A)(n, H().stream_icon_hide_on_hover),
              src: t,
            }),
            l.createElement(P.o, {
              className: (0, g.A)(n, H().stream_icon_show_on_hover),
              srcs: e,
            }),
          );
        }
        return l.createElement("img", { className: n, src: a });
      }
      function Ce(e) {
        const { stream: t, orientation: a } = e,
          r = "below" == a,
          [n, s] = (0, i.q3)(() => {
            var e;
            return [
              T.es.GetBroadcast(t.steamid),
              null === (e = T.es.GetBroadcast(t.steamid)) || void 0 === e
                ? void 0
                : e.m_ulBroadcastID,
            ];
          }),
          o = (0, i.q3)(() => t.steamid);
        return n
          ? l.createElement(
              "div",
              {
                className: (0, g.A)({
                  [H().chat_below_container]: r,
                  [H().chat_rightside_container]: !r,
                  [H().store_chat_ctn]: !0,
                }),
              },
              l.createElement(
                "div",
                { className: H().ChatContainer },
                l.createElement(c.I, {
                  emoticonStore: L.MX,
                  watchLocation: M.nn.k_EBroadcastWatchLocation_StoreAppPage,
                  steamID: o,
                  broadcastID: s,
                }),
              ),
            )
          : null;
      }
    },
    96715: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => r });
      const r =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
    },
    10886: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => r });
      const r =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
    },
    19654: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => r });
      const r =
        a.p +
        "images/applications/community/reddit_large.png?v=valveisgoodatcaching";
    },
    3209: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => r });
      const r =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
    },
  },
]);

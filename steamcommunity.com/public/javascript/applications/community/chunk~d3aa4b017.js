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
          BroadcastEmbeddablePopoutHeader: () => Se,
          default: () => pe,
        });
      var n = a(34629),
        r = a(41735),
        s = a.n(r),
        o = a(75844),
        i = a(65946),
        l = a(90626),
        c = a(39606),
        d = a(72224),
        m = a(55963),
        p = a(55263),
        u = a(18654),
        h = a(94095),
        A = a(20433),
        _ = a(60014),
        E = a(22797),
        S = a(52038),
        g = a(78327),
        N = a(43087),
        b = a.n(N),
        C = a(35380),
        I = a(39777),
        w = a(71420),
        D = a(42834),
        M = a(5309);
      const v = (0, o.PA)((e) => {
        const { appid: t } = e,
          a = (0, _.n9)(),
          n = (0, l.useRef)({ include_assets: !0, include_release: !0 }),
          r = (0, C.$5)(t),
          { data: s } = (0, I.J$)(r),
          { data: o } = (0, I.lv)(r),
          { data: i } = (0, I.by)(r),
          [c, d] = (0, p.t7)(t, n.current);
        let N = (0, S.A)(
            b().StoreSaleWidgetContainer_mini,
            "StoreSaleWidgetContainer_mini",
          ),
          v = b().StoreSaleWidgetImage_mini,
          y = b().StoreSaleImage_mini;
        if (null == s)
          return l.createElement(
            "div",
            { className: N },
            l.createElement(E.t, { size: "medium" }),
          );
        if (null == s || !s.name)
          return l.createElement("div", {
            className: u.StoreSaleWidgetEmptyContainer,
          });
        const T = 8 != s.type,
          B = (0, m.wJ)((0, w._)(s), a);
        return l.createElement(
          "div",
          { className: N },
          l.createElement(
            "a",
            { href: B, target: g.TS.IN_CLIENT ? void 0 : "_blank" },
            l.createElement(
              A.j,
              { id: r },
              l.createElement(
                "div",
                { className: v },
                o &&
                  l.createElement("img", {
                    className: y,
                    src: (0, D.b0)(o, "small_capsule"),
                    alt: s.name,
                  }),
              ),
            ),
          ),
          l.createElement(
            "div",
            { className: u.StoreSaleBroadcastWidgetRight },
            l.createElement(
              "a",
              { href: B, target: g.TS.IN_CLIENT ? void 0 : "_blank" },
              l.createElement(
                A.j,
                { id: r },
                l.createElement(
                  "div",
                  {
                    className: (0, S.A)(
                      u.StoreSaleWidgetTitle,
                      "StoreSaleWidgetTitle",
                    ),
                  },
                  s.name,
                ),
              ),
            ),
            i &&
              l.createElement(
                "div",
                { className: u.StoreSaleWidgetRelease },
                (0, M.CC)(i),
              ),
            Boolean(T) && l.createElement(h.w, { id: r, bShowDemoButton: !0 }),
          ),
        );
      });
      var y = a(22837);
      function T() {
        let e = window.GetUsabilityTracker;
        if (e) return e();
      }
      var B = a(60727),
        L = a(54728),
        f = a(34010),
        j = a(16021),
        U = a(94011),
        k = a(26296),
        P = a(96236),
        x = a(12155),
        G = a(32754),
        O = a(61859),
        z = a(82227),
        R = a(73745),
        V = a(17720),
        F = a(8092),
        W = a(53120),
        H = a.n(W);
      const Q = (0, o.PA)((e) => {
        const { event: t } = e,
          a = t.clanSteamID.GetAccountID(),
          n = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
          r = (0, l.useRef)(null),
          [o, i] = (0, l.useState)(
            t ? F.pF.GetCreatorHome(t.clanSteamID) : null,
          );
        if (
          ((0, l.useEffect)(() => {
            const e = s().CancelToken.source();
            r.current = e.cancel;
            return (
              (async () => {
                const t = V.b.InitFromClanID(a),
                  n = await F.pF.LoadCreatorHome(t, !1, e);
                e.token.reason || i(n);
              })(),
              () => {
                r.current && r.current("BroadcastDropsDisplay: unmounting");
              }
            );
          }, [a]),
          n || !o || !o.BIsLoaded())
        )
          return null;
        const c =
          g.TS.COMMUNITY_BASE_URL +
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
                { href: c, target: g.TS.IN_CLIENT ? "" : "_blank" },
                (0, O.we)("#SalePage_WatchForDrop_LearnMore"),
              ),
          ),
        );
      });
      var J = a(95695),
        Y = a.n(J),
        Z = a(96715),
        K = a(10886),
        X = a(19654),
        q = a(3209),
        $ = a(9154),
        ee = a(51272),
        te = a(14256),
        ae = a.n(te);
      function ne(e) {
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
          l.createElement(re, { steamid: t }),
          l.createElement(se, { steamid: t }),
        );
      }
      function re(e) {
        const { steamid: t } = e,
          a = (function (e) {
            const t = g.TS.COMMUNITY_BASE_URL + "broadcast/share/" + e;
            return {
              strFacebookUrl: t + "?site=facebook&t=" + Math.random(),
              strTwitterUrl: t + "?site=twitter",
              strRedditUrl: t + "?site=reddit",
            };
          })(t);
        return l.createElement(
          "div",
          {
            className: (0, S.A)(Y().FlexRowContainer, ae().share_controls_ctn),
          },
          l.createElement(
            G.he,
            { toolTipContent: (0, O.we)("#EventDisplay_Share_OnFaceBook") },
            l.createElement(
              ee.uU,
              { href: a.strFacebookUrl, className: ae().ShareBtn },
              l.createElement("img", {
                className: (0, S.A)(Y().Button),
                src: K.A,
              }),
            ),
          ),
          l.createElement(
            G.he,
            { toolTipContent: (0, O.we)("#EventDisplay_Share_OnTwitter") },
            l.createElement(
              ee.uU,
              { href: a.strTwitterUrl, className: ae().ShareBtn },
              l.createElement("img", {
                className: (0, S.A)(Y().Button),
                src: q.A,
              }),
            ),
          ),
          l.createElement(
            G.he,
            { toolTipContent: (0, O.we)("#EventDisplay_Share_OnReddit") },
            l.createElement(
              ee.uU,
              { href: a.strRedditUrl, className: ae().ShareBtn },
              l.createElement("img", {
                className: (0, S.A)(Y().Button),
                src: X.A,
              }),
            ),
          ),
        );
      }
      function se(e) {
        const { steamid: t } = e,
          a = l.createRef(),
          [n, r] = l.useState(""),
          s = l.createRef(),
          o = l.useCallback(
            (e) => {
              a.current &&
                a.current.ownerDocument.defaultView.navigator.clipboard
                  .writeText(a.current.value)
                  .then((e) => {
                    r((0, O.we)("#EventDisplay_Share_CopiedToClipboard"));
                  })
                  .catch((e) => {
                    r((0, O.we)("#EventDisplay_Share_FailedToCopyToClipboard")),
                      console.error("Failed to copy link to clipboard:", e);
                  });
            },
            [a],
          ),
          i = g.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + t;
        return l.createElement(
          "div",
          null,
          l.createElement(
            "div",
            {
              className: (0, S.A)(Y().FlexRowContainer, ae().linkField),
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
                G.he,
                { toolTipContent: (0, O.we)("#ToolTip_CopyLinkToClipboard") },
                l.createElement(
                  "div",
                  {
                    className: (0, S.A)(Y().Button, Y().Icon, ae().LinkButton),
                  },
                  l.createElement("img", {
                    className: ae().ClipboardIcon,
                    src: Z.A,
                  }),
                ),
              ),
          ),
          l.createElement("div", { ref: s, className: ae().ClipboardText }, n),
        );
      }
      var oe = a(56011),
        ie = a(738),
        le = a(29268),
        ce = a(23338),
        de = a(75515);
      const me = {
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
      function pe(e) {
        return (function () {
          const e = (0, g.Qn)();
          return !(0, g.Y2)() && !e;
        })()
          ? l.createElement(ue, { ...e })
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
        async componentDidMount() {
          await f.j.Get().LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
            this.m_cancelSignal.token.reason ||
              this.setState({
                bLoadingPreference: !1,
                bExpanded: !f.j
                  .Get()
                  .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                innerStyle: {
                  ...this.state.innerStyle,
                  maxHeight: f.j
                    .Get()
                    .BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
                    ? "0vh"
                    : "100vh",
                },
              }),
            await (this.props.bIsPreview &&
            this.props.accountIDs &&
            !this.props.event.BUsesContentHubForItemSource()
              ? f.j.Get().HintLoadEmbeddablePreviewStreams(this.props)
              : f.j.Get().HintLoadEmbeddableStreams(this.props)),
            this.props.nAppIDVOD &&
              f.j
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
          let e = f.j.Get().GetPlayReadyStream(this.props);
          const t = this.state.bExpanded,
            a = L.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
          (0, f.U7)(a, t ? 2 : 3, e.snr),
            t && T() && T().AddEvent(1005),
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
                f.j.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
              );
        }
        OnShrinkTransitionEnd() {
          "0vh" === this.state.innerStyle.maxHeight &&
            this.setState({ bExpanded: !1 }, () =>
              f.j.Get().SetEmbeddedStreamCollapsed(!0),
            );
        }
        async onStreamSelect(e) {
          this.setState({ bStartMuted: !1 }),
            f.j.Get().GetPlayReadyStream(this.props).accountid != e.accountid &&
              (await f.j.Get().AttemptToPlayStream(this.props, e));
        }
        async PlayNextNonVOD() {
          this.setState({ bStartMuted: !1 });
          const e = f.j
            .Get()
            .GetStreams(this.props)
            .filter(
              (e) =>
                !this.props.fnFilterStreams || this.props.fnFilterStreams(e),
            );
          await f.j.Get().PlayFromAvailableStreams(this.props, e, !0);
        }
        ConstructSidePanels(e, t) {
          let a = {
            leftPanel: null,
            rightPanel: null,
            bRightPanelArtworkOrEmpty: !0,
          };
          if (this.props.bWidePlayer) return a;
          const n = f.j.Get().GetConcurrentStreams(this.props) > 1;
          let r = L.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
            s = l.createElement(Ee, {
              key: "right" + r,
              ImgUrl: e.right_panel,
            }),
            o = l.createElement(Ee, { key: "left" + r, ImgUrl: e.left_panel });
          if (r < 11) {
            const t = B.l.GetAppIDListForBroadcasterSteamID(e.steamid);
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
              ((s = l.createElement(v, {
                key: "mini" + e.accountid,
                appid: r,
              })),
              (a.bRightPanelArtworkOrEmpty = !1)),
            n && !t
              ? ((a.leftPanel = l.createElement(Ne, {
                  broadcastEmbedContext: this.props,
                  key: "selector" + r,
                  curStream: e,
                  onStreamSelect: this.onStreamSelect,
                  fnFilterStreams: this.props.fnFilterStreams,
                  bShowCapsuleArt: this.props.bShowCapsuleArt,
                })),
                (a.rightPanel = s))
              : t
                ? ((a.leftPanel = l.createElement("div", null)),
                  (a.rightPanel = l.createElement(Ie, {
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
            ((this.m_bMarkedUsabilitySeen = !0), T() && T().AddEvent(1004));
        }
        render() {
          if (this.state.bLoadingPreference) return null;
          let e = f.j.Get().GetPlayReadyStream(this.props);
          if (e) {
            this.MarkBroadcastSeen();
            let t = "show" === f.j.Get().GetChatVisibility();
            const {
              event: a,
              language: n,
              fnRenderBroadcastContext: r,
            } = this.props;
            a &&
              (e = {
                ...e,
                left_panel: a.GetImageURL(
                  "broadcast_left",
                  n || (0, y.sf)(g.TS.LANGUAGE),
                ),
                right_panel: a.GetImageURL(
                  "broadcast_right",
                  n || (0, y.sf)(g.TS.LANGUAGE),
                ),
                store_title: a.GetBroadcastTitle(n || (0, y.sf)(g.TS.LANGUAGE)),
                broadcast_chat_visibility: a.GetBroadcastChatVisibility(),
              });
            let s = this.ConstructSidePanels(e, t),
              o = e.store_title ? e.store_title : e.title,
              i = f.j.Get().GetConcurrentStreams(this.props) > 1;
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
                    className: (0, S.A)({
                      [H().bordered_container]: !0,
                      [H().Event]: Boolean(a),
                      broadcast_brd_ctn_trgt: !0,
                    }),
                  },
                  l.createElement(
                    "div",
                    {
                      className: (0, S.A)(
                        H().bordered_title,
                        "bordered_title_trgt",
                      ),
                    },
                    l.createElement(U.K, null),
                    l.createElement("div", { className: H().streamTitle }, o),
                    l.createElement(
                      "div",
                      { className: H().bordered_corner_container },
                      Boolean(!this.state.bExpanded) &&
                        l.createElement(
                          G.he,
                          {
                            toolTipContent: (0, O.we)(
                              "#StoreBroadcast_Change_store_Broadcast_settings",
                            ),
                          },
                          l.createElement("div", {
                            className: H().broadcast_settings_icon,
                            onClick: () =>
                              window.open(
                                `${g.TS.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                              ),
                          }),
                        ),
                      l.createElement(
                        G.he,
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
                        className: (0, S.A)({
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
                      l.createElement(he, {
                        stream: e,
                        bStartMuted: this.state.bStartMuted,
                        fnRenderBroadcastContext: r,
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
      (0, n.Cg)([R.oI], ue.prototype, "ToggleBroadcastExpandShrink", null),
        (0, n.Cg)([R.oI], ue.prototype, "OnShrinkTransitionEnd", null),
        (0, n.Cg)([R.oI], ue.prototype, "onStreamSelect", null),
        (0, n.Cg)([R.oI], ue.prototype, "PlayNextNonVOD", null),
        (ue = (0, n.Cg)([o.PA], ue));
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
          const e = L.es.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, f.U7)(e, 7, this.props.stream.snr),
            T() && T().AddEvent(1006),
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
                className: (0, S.A)({
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
                  l.createElement(Se, {
                    steamIDBroadcast: this.props.stream.steamid,
                    OnPreventPopup: this.CloseBroadcastPopup,
                  }),
                l.createElement(
                  "div",
                  { className: H().BroadcastPlayerContainer },
                  l.createElement(d.default, {
                    steamIDBroadcast: this.props.stream.steamid,
                    watchLocation: 6,
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
      function Ae(e) {
        const { stream: t } = e,
          [a] = (0, i.q3)(() => [t.steamid]),
          n = L.es.GetOrCreateBroadcastInfo(a).m_nAppID,
          r = me.list.find(
            (e) =>
              e.appid == n &&
              (!e.broadcasterAccountID ||
                e.broadcasterAccountID == t.accountid),
          );
        if (r) {
          let e = r.url;
          return (
            (g.TS.IN_CLIENT ||
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
          const e = g.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + a;
          return l.createElement(
            G.he,
            {
              toolTipContent: (0, O.we)("#BroadcastWatch_View_Broadcast_Page"),
            },
            l.createElement(
              "a",
              { href: e, className: H().external_link },
              l.createElement(x.GrD, null),
            ),
          );
        }
      }
      (0, n.Cg)([R.oI], he.prototype, "CloseBroadcastPopup", null),
        (0, n.Cg)([R.oI], he.prototype, "OnEnter", null),
        (0, n.Cg)([R.oI], he.prototype, "OnLeave", null);
      let _e = class extends l.Component {
        OnToggleChat(e) {
          e.preventDefault();
          const t = L.es.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, f.U7)(
            t,
            "show" === f.j.Get().GetChatVisibility() ? 5 : 4,
            this.props.stream.snr,
          ),
            f.j.Get().ToggleChatVisibility();
        }
        onWatchBroadcastPage() {
          const e = L.es.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, f.U7)(e, 9, this.props.stream.snr);
        }
        render() {
          const e = "remove" != f.j.Get().GetChatVisibility(),
            t = "hide" === f.j.Get().GetChatVisibility(),
            a = !this.props.stream.nAppIDVOD,
            n = a;
          Number.parseInt(
            "" +
              L.es.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nViewerCount,
          );
          return l.createElement(
            "div",
            { className: (0, S.A)(H().viewer_bar, "viewer_bar") },
            l.createElement(
              "div",
              { className: (0, S.A)(H().viewer_count, "viewer_count") },
              " ",
            ),
            l.createElement(
              "div",
              { className: (0, S.A)(H().viewer_links, "viewer_links") },
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
                  l.createElement(x.ROZ, null),
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
              n &&
                l.createElement(
                  "div",
                  { className: H().chat_link },
                  l.createElement(x.SYj, null),
                  l.createElement(
                    "a",
                    {
                      href: "#",
                      className: H().ChatToggle,
                      onClick: (e) =>
                        (0, ie.pg)(
                          l.createElement(ne, {
                            steamid: this.props.stream.steamid,
                          }),
                          (0, oe.uX)(e),
                        ),
                    },
                    (0, O.we)("#Broadcast_ShareBroadcast"),
                  ),
                ),
              l.createElement(
                G.he,
                {
                  toolTipContent: (0, O.we)(
                    "#StoreBroadcast_Change_store_Broadcast_settings",
                  ),
                },
                l.createElement(
                  "a",
                  {
                    href:
                      g.TS.STORE_BASE_URL +
                      "account/preferences/#store_broadcast_settings",
                    target: g.TS.IN_CLIENT ? void 0 : "_blank",
                    className: H().settings_link,
                  },
                  l.createElement(x.wB_, null),
                ),
              ),
              a && l.createElement(Ae, { ...this.props }),
            ),
            Boolean(this.props.chatAnnouncementGivewayGID) &&
              l.createElement(le.V, {
                gidGiveaway: this.props.chatAnnouncementGivewayGID,
                stream: this.props.stream,
              }),
          );
        }
      };
      (0, n.Cg)([R.oI], _e.prototype, "OnToggleChat", null),
        (0, n.Cg)([R.oI], _e.prototype, "onWatchBroadcastPage", null),
        (_e = (0, n.Cg)([o.PA], _e));
      class Ee extends l.Component {
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
      const Se = (0, o.PA)((e) => {
        const { steamIDBroadcast: t } = e;
        let a = L.es.GetOrCreateBroadcastInfo(t).m_nAppID;
        a = a != L.fO ? a : 0;
        const n = (0, C.$5)(a),
          { data: r } = (0, I.J$)(n);
        return l.createElement(
          "div",
          { className: [H().PopOutVideoTitleBar, H().NoSeslect].join(" ") },
          Boolean(r)
            ? l.createElement(
                A.u,
                { id: n, className: H().PopOutVideoTitleText },
                (0, O.we)("#StoreBroadcast_Detault_popout_Title"),
              )
            : l.createElement(
                "div",
                { className: H().PopOutVideoTitleText },
                (0, O.we)("#StoreBroadcast_Detault_popout_Title"),
              ),
          l.createElement(
            G.he,
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
              l.createElement(x.X, null),
            ),
          ),
        );
      });
      function ge(e, t) {
        var a;
        const n = L.es.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
          r = j.A.Get().GetApp(n);
        return e &&
          (null === (a = null == r ? void 0 : r.GetAssets()) || void 0 === a
            ? void 0
            : a.GetHeaderURL())
          ? parseInt(H().strStreamIconCapsuleArtHeight)
          : parseInt(H().strStreamIconScreenshotArtHeight);
      }
      function Ne(e) {
        const {
            curStream: t,
            onStreamSelect: a,
            fnFilterStreams: n,
            bShowCapsuleArt: r,
            broadcastEmbedContext: s,
          } = e,
          o = (0, l.useRef)(void 0),
          i = (0, l.useMemo)(() => {
            const e = f.j
              .Get()
              .GetStreams(s)
              .filter((e) => !n || n(e));
            return (0, f.MU)(e), e;
          }, [s, n]);
        return (
          (0, l.useEffect)(() => {
            if (o && o.current) {
              const e = i
                .map((e) => L.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID)
                .filter(Boolean);
              j.A.Get()
                .QueueMultipleAppRequests(e, { include_assets: !0 })
                .then(() => {
                  if (o.current) {
                    let e = 0;
                    for (const a of i) {
                      if (t.accountid == a.accountid) break;
                      e += ge(r, a);
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
              className: (0, S.A)({
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
                var n;
                return l.createElement(be, {
                  key:
                    null !== (n = e.accountid) && void 0 !== n ? n : e.steamid,
                  stream: e,
                  bSelected: t.accountid == e.accountid,
                  onStreamSelect: a,
                  bShowCapsuleArt: r,
                });
              }),
            ),
          )
        );
      }
      function be(e) {
        const {
          onStreamSelect: t,
          bSelected: a,
          stream: n,
          bShowCapsuleArt: r,
        } = e;
        let s = (0, i.q3)(
          () => L.es.GetOrCreateBroadcastInfo(n.steamid).m_nAppID,
        );
        s = s != L.fO ? s : 0;
        const o = (0, C.$5)(s),
          { data: c } = (0, I.J$)(o),
          { data: d } = (0, I.lv)(o);
        if (!(0, f.fn)(n)) return null;
        const m = r && d && (0, D.b0)(d, "header"),
          p = Number.parseInt("" + n.viewer_count),
          u = !Number.isNaN(p),
          h = !!n.nAppIDVOD && (null == c ? void 0 : c.name);
        return l.createElement(
          "div",
          {
            className: (0, S.A)({
              [H().stream_icon_and_viewer_container]: !0,
              [H().stream_featured]:
                n.current_selection_priority == de.mY.k_eFeatured,
              [H().display_capsule_art]: Boolean(m),
            }),
          },
          l.createElement(
            A.j,
            { id: o, hoverClassName: H().StreamCapsule },
            l.createElement(
              P.K,
              {
                className: (0, S.A)(
                  H().stream_icon_container,
                  a && H().stream_selected,
                ),
                onClick: () => t && t(n),
                rootMargin: "100px 0px 100px 0px",
              },
              l.createElement(Ce, {
                strThumbnail: n.thumbnail_http_address,
                bSelected: a,
                strCapsuleArtURL: m,
              }),
            ),
          ),
          l.createElement(
            "div",
            { className: (0, S.A)(H().viewer_count, !u && H().vod_title) },
            u
              ? l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(x.y_e, null),
                  l.createElement(
                    "div",
                    { className: H().ViewerNum },
                    (0, z.Dq)(p),
                  ),
                )
              : h,
          ),
        );
      }
      function Ce(e) {
        const { strCapsuleArtURL: t, strThumbnail: a, bSelected: n } = e,
          r = n ? H().stream_icon_selected : H().stream_icon;
        if (t) {
          const e = [t];
          return l.createElement(
            l.Fragment,
            null,
            l.createElement("img", {
              className: (0, S.A)(r, H().stream_icon_hide_on_hover),
              src: t,
            }),
            l.createElement(k.o, {
              className: (0, S.A)(r, H().stream_icon_show_on_hover),
              srcs: e,
            }),
          );
        }
        return l.createElement("img", { className: r, src: a });
      }
      function Ie(e) {
        const { stream: t, orientation: a } = e,
          n = "below" == a,
          [r, s] = (0, i.q3)(() => {
            var e;
            return [
              L.es.GetBroadcast(t.steamid),
              null === (e = L.es.GetBroadcast(t.steamid)) || void 0 === e
                ? void 0
                : e.m_ulBroadcastID,
            ];
          }),
          o = (0, i.q3)(() => t.steamid);
        return r
          ? l.createElement(
              "div",
              {
                className: (0, S.A)({
                  [H().chat_below_container]: n,
                  [H().chat_rightside_container]: !n,
                  [H().store_chat_ctn]: !0,
                }),
              },
              l.createElement(
                "div",
                { className: H().ChatContainer },
                l.createElement(c.I, {
                  emoticonStore: f.MX,
                  watchLocation: 6,
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
      a.d(t, { A: () => n });
      const n =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
    },
    10886: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => n });
      const n =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
    },
    19654: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => n });
      const n =
        a.p +
        "images/applications/community/reddit_large.png?v=valveisgoodatcaching";
    },
    3209: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => n });
      const n =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
    },
  },
]);
